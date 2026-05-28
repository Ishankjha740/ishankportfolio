import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { toast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const { session, isAdmin, loading } = useAdminAuth();
  const navigate = useNavigate();
  const mode = "login" as const;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    document.title = "Admin Login | Ishank Jha";
  }, []);

  useEffect(() => {
    if (!loading && session && isAdmin) navigate("/admin", { replace: true });
  }, [loading, session, isAdmin, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      toast({ title: "Signed in" });
      navigate("/admin", { replace: true });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Authentication failed";
      toast({ title: "Error", description: message, variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="min-h-dvh bg-paper flex items-center justify-center px-4">
      <div className="w-full max-w-md border-2 border-ink bg-paper-warm shadow-pop-yellow p-6 sm:p-8">
        <Link to="/" className="text-[10px] font-black uppercase tracking-[0.25em] text-ink-soft hover:text-ink">
          ← Back to site
        </Link>
        <h1 className="display-heading text-3xl sm:text-4xl text-ink mt-4">
          Admin Login
        </h1>
        <p className="text-xs text-ink-soft mt-2 leading-relaxed">
          Sign in to manage your portfolio content.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-ink">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full border-2 border-ink bg-paper px-3 py-2 text-sm text-ink focus:outline-none focus:bg-citrus/30"
              autoComplete="email"
            />
          </div>
          <div>
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-ink">Password</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full border-2 border-ink bg-paper px-3 py-2 text-sm text-ink focus:outline-none focus:bg-citrus/30"
              autoComplete={mode === "login" ? "current-password" : "new-password"}
            />
          </div>
          <button
            type="submit"
            disabled={busy}
            className="w-full bg-ink text-citrus py-3 text-xs font-black uppercase tracking-widest shadow-pop-yellow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all disabled:opacity-60"
          >
            {busy ? "Please wait…" : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default AdminLogin;