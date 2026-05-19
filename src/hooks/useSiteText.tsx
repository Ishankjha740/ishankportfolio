import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

let cache: Record<string, string> | null = null;
let inflight: Promise<Record<string, string>> | null = null;

const fetchAll = async () => {
  if (cache) return cache;
  if (inflight) return inflight;
  inflight = supabase
    .from("site_text")
    .select("key,value")
    .then(({ data }) => {
      const map: Record<string, string> = {};
      (data ?? []).forEach((r) => {
        map[r.key] = r.value;
      });
      cache = map;
      inflight = null;
      return map;
    });
  return inflight;
};

export const useSiteText = (key: string, fallback = "") => {
  const [value, setValue] = useState<string>(cache?.[key] ?? fallback);
  useEffect(() => {
    let cancelled = false;
    fetchAll().then((map) => {
      if (!cancelled && map[key] !== undefined) setValue(map[key]);
    });
    return () => {
      cancelled = true;
    };
  }, [key]);
  return value;
};