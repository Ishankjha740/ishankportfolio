ALTER TABLE public.analytics_events
  ADD CONSTRAINT chk_visitor_hash_len CHECK (visitor_hash IS NULL OR char_length(visitor_hash) <= 64),
  ADD CONSTRAINT chk_metadata_size CHECK (metadata IS NULL OR octet_length(metadata::text) <= 2048),
  ADD CONSTRAINT chk_event_type_len CHECK (char_length(event_type) <= 64),
  ADD CONSTRAINT chk_event_name_len CHECK (char_length(event_name) <= 200),
  ADD CONSTRAINT chk_path_len CHECK (path IS NULL OR char_length(path) <= 500),
  ADD CONSTRAINT chk_referrer_len CHECK (referrer IS NULL OR char_length(referrer) <= 1000);