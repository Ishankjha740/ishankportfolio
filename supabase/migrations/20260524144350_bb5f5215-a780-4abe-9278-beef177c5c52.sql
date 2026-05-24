-- Remove anon INSERT policy; submissions go through the edge function (service role)
DROP POLICY IF EXISTS "Anyone can submit a contact" ON public.contacts;

-- Add length constraints as defense in depth
ALTER TABLE public.contacts
  ADD CONSTRAINT chk_full_name_len CHECK (char_length(full_name) <= 200),
  ADD CONSTRAINT chk_company_name_len CHECK (company_name IS NULL OR char_length(company_name) <= 200),
  ADD CONSTRAINT chk_email_len CHECK (char_length(email) <= 254),
  ADD CONSTRAINT chk_phone_len CHECK (phone IS NULL OR char_length(phone) <= 40),
  ADD CONSTRAINT chk_website_len CHECK (website IS NULL OR char_length(website) <= 255),
  ADD CONSTRAINT chk_opportunity_type_len CHECK (opportunity_type IS NULL OR char_length(opportunity_type) <= 80),
  ADD CONSTRAINT chk_timeline_len CHECK (timeline IS NULL OR char_length(timeline) <= 40),
  ADD CONSTRAINT chk_project_details_len CHECK (project_details IS NULL OR char_length(project_details) <= 8000),
  ADD CONSTRAINT chk_discovery_source_len CHECK (discovery_source IS NULL OR char_length(discovery_source) <= 120),
  ADD CONSTRAINT chk_platforms_len CHECK (array_length(platforms, 1) IS NULL OR array_length(platforms, 1) <= 20);