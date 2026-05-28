import { supabase } from "@/integrations/supabase/client";

// Privacy-friendly: no cookies, no IPs, no personal data.
// Generates a per-day, per-browser anonymous hash that can't be linked across days.
const getVisitorHash = (): string => {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const key = `_v_${today}`;
    let v = sessionStorage.getItem(key);
    if (!v) {
      v = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
      sessionStorage.setItem(key, v);
    }
    return v;
  } catch {
    return "anon";
  }
};

const send = async (
  event_type: string,
  event_name: string,
  metadata?: Record<string, unknown>
) => {
  try {
    await supabase.from("analytics_events").insert({
      event_type,
      event_name,
      path: typeof window !== "undefined" ? window.location.pathname : null,
      referrer: typeof document !== "undefined" ? document.referrer || null : null,
      visitor_hash: getVisitorHash(),
      metadata: metadata ?? null,
    });
  } catch {
    // Silently ignore — analytics must never break the app.
  }
};

export const trackPageView = (path?: string) =>
  send("pageview", path ?? window.location.pathname);

export const trackEvent = (name: string, metadata?: Record<string, unknown>) =>
  send("cta", name, metadata);