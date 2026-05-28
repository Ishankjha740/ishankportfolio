DROP POLICY IF EXISTS "Anyone can insert analytics events" ON public.analytics_events;

CREATE POLICY "Anyone can insert valid analytics events"
ON public.analytics_events FOR INSERT
TO anon, authenticated
WITH CHECK (
  event_type IN ('pageview', 'cta')
  AND char_length(event_name) BETWEEN 1 AND 100
  AND (path IS NULL OR char_length(path) <= 500)
  AND (referrer IS NULL OR char_length(referrer) <= 500)
);