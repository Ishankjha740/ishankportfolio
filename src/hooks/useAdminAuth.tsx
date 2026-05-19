import { useEffect, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export type AdminAuthState = {
  loading: boolean;
  session: Session | null;
  user: User | null;
  isAdmin: boolean;
};

export const useAdminAuth = (): AdminAuthState => {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const checkAdmin = async (uid: string | undefined) => {
      if (!uid) {
        if (!cancelled) setIsAdmin(false);
        return;
      }
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", uid)
        .eq("role", "admin")
        .maybeSingle();
      if (!cancelled) setIsAdmin(!!data && !error);
    };

    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      // defer to avoid deadlocks per Supabase guidance
      setTimeout(() => checkAdmin(newSession?.user?.id), 0);
    });

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      checkAdmin(data.session?.user?.id).finally(() => {
        if (!cancelled) setLoading(false);
      });
    });

    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, []);

  return { loading, session, user: session?.user ?? null, isAdmin };
};