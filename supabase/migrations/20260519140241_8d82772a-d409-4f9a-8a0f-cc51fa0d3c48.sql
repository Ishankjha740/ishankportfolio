
-- =========================================
-- ENUM + ROLES
-- =========================================
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
  ON public.user_roles FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles"
  ON public.user_roles FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- =========================================
-- PROFILES
-- =========================================
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Profiles viewable by owner"
  ON public.profiles FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- =========================================
-- Shared timestamp trigger function
-- =========================================
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =========================================
-- Auto-create profile + first-signup admin bootstrap
-- =========================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  admin_count INT;
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.email));

  SELECT COUNT(*) INTO admin_count FROM public.user_roles WHERE role = 'admin';
  IF admin_count = 0 THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin');
  ELSE
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user');
  END IF;

  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =========================================
-- CONTENT TABLES
-- =========================================

-- creative_works (gallery)
CREATE TABLE public.creative_works (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  kind TEXT NOT NULL CHECK (kind IN ('image','video','youtube')),
  src TEXT NOT NULL,
  href TEXT,
  title TEXT NOT NULL,
  ratio TEXT NOT NULL DEFAULT 'square' CHECK (ratio IN ('square','portrait')),
  featured BOOLEAN NOT NULL DEFAULT false,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.creative_works ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Creative works viewable by everyone"
  ON public.creative_works FOR SELECT USING (true);
CREATE POLICY "Admins manage creative works"
  ON public.creative_works FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_creative_works_updated_at
  BEFORE UPDATE ON public.creative_works
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- case_studies (Portfolio numbered cards)
CREATE TABLE public.case_studies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  n TEXT NOT NULL,
  tag TEXT NOT NULL,
  title TEXT NOT NULL,
  context TEXT NOT NULL,
  approach TEXT NOT NULL,
  impact TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Case studies viewable by everyone"
  ON public.case_studies FOR SELECT USING (true);
CREATE POLICY "Admins manage case studies"
  ON public.case_studies FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_case_studies_updated_at
  BEFORE UPDATE ON public.case_studies
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- experience_roles
CREATE TABLE public.experience_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  period TEXT NOT NULL,
  company TEXT NOT NULL,
  title TEXT NOT NULL,
  points TEXT[] NOT NULL DEFAULT '{}',
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.experience_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Experience viewable by everyone"
  ON public.experience_roles FOR SELECT USING (true);
CREATE POLICY "Admins manage experience"
  ON public.experience_roles FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_experience_roles_updated_at
  BEFORE UPDATE ON public.experience_roles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- site_text (key/value editable copy blocks)
CREATE TABLE public.site_text (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL DEFAULT '',
  label TEXT,
  multiline BOOLEAN NOT NULL DEFAULT false,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.site_text ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Site text viewable by everyone"
  ON public.site_text FOR SELECT USING (true);
CREATE POLICY "Admins manage site text"
  ON public.site_text FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_site_text_updated_at
  BEFORE UPDATE ON public.site_text
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =========================================
-- STORAGE BUCKET
-- =========================================
INSERT INTO storage.buckets (id, name, public)
VALUES ('portfolio-assets', 'portfolio-assets', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public read portfolio assets"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'portfolio-assets');

CREATE POLICY "Admins upload portfolio assets"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'portfolio-assets' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins update portfolio assets"
  ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'portfolio-assets' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins delete portfolio assets"
  ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'portfolio-assets' AND public.has_role(auth.uid(), 'admin'));
