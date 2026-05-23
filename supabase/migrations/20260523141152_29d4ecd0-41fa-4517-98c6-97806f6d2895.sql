CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  full_name TEXT NOT NULL,
  company_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  website TEXT,
  opportunity_type TEXT,
  timeline TEXT,
  project_details TEXT,
  platforms TEXT[] NOT NULL DEFAULT '{}',
  discovery_source TEXT
);

ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact"
ON public.contacts FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can view contacts"
ON public.contacts FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE INDEX idx_contacts_created_at ON public.contacts (created_at DESC);