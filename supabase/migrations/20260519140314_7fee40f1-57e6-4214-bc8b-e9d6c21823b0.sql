
-- Lock down SECURITY DEFINER helpers (only used by RLS policies/triggers)
REVOKE EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

-- Remove broad SELECT on storage.objects for portfolio bucket
-- (public bucket files remain accessible via public URL — listing is what we block)
DROP POLICY IF EXISTS "Public read portfolio assets" ON storage.objects;
