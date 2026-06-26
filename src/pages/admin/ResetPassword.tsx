import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const AdminResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.title = "Reset Admin Password | Ishank Jha";
  }, []);

  useEffect(() => {
    // Supabase auto-exchanges the recovery token in the URL and emits PASSWORD_RECOVERY.
    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY" || (event === "SIGNED_IN" && session)) {
        setReady(true);
      }
    });
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setReady(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      toast({ title: "Passwords don't match", variant: "destructive" });
      return;
    }
    setBusy(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      toast({ title: "Password updated", description: "You can now sign in with your new password." });
      await supabase.auth.signOut();
      navigate("/admin/login", { replace: true });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Could not update password";
      toast({ title: "Error", description: message, variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="min-h-dvh bg-paper flex items-center justify-center px-4">
      <div className="w-full max-w-md border-2 border-ink bg-paper-warm shadow-pop-yellow p-6 sm:p-8">
        <Link to="/admin/login" className="text-[10px] font-black uppercase tracking-[0.25em] text-ink-soft hover:text-ink">
          ← Back to login
        </Link>
        <h1 className="display-heading text-3xl sm:text-4xl text-ink mt-4">Set New Password</h1>
        <p className="text-xs text-ink-soft mt-2 leading-relaxed">
          {ready
            ? "Enter a new password for your admin account."
            : "Waiting for the reset link to be verified… Open this page from the email link if you haven't yet."}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-ink">New password</label>
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full border-2 border-ink bg-paper px-3 py-2 text-sm text-ink focus:outline-none focus:bg-citrus/30"
              autoComplete="new-password"
            />
          </div>
          <div>
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-ink">Confirm password</label>
            <input
              type="password"
              required
              minLength={8}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="mt-1 w-full border-2 border-ink bg-paper px-3 py-2 text-sm text-ink focus:outline-none focus:bg-citrus/30"
              autoComplete="new-password"
            />
          </div>
          <button
            type="submit"
            disabled={busy || !ready}
            className="w-full bg-ink text-citrus py-3 text-xs font-black uppercase tracking-widest shadow-pop-yellow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all disabled:opacity-60"
          >
            {busy ? "Updating…" : "Update Password"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default AdminResetPassword;