import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { toast } from "@/hooks/use-toast";
import { CreativeWorksAdmin } from "@/components/admin/CreativeWorksAdmin";
import { CaseStudiesAdmin } from "@/components/admin/CaseStudiesAdmin";
import { ExperienceAdmin } from "@/components/admin/ExperienceAdmin";
import { SiteTextAdmin } from "@/components/admin/SiteTextAdmin";

type Tab = "works" | "cases" | "experience" | "text";

const TABS: { id: Tab; label: string }[] = [
  { id: "works", label: "Creative Works" },
  { id: "cases", label: "Case Studies" },
  { id: "experience", label: "Experience" },
  { id: "text", label: "Site Text" },
];

const AdminDashboard = () => {
  const { loading, session, isAdmin, user } = useAdminAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("works");

  useEffect(() => {
    document.title = "Admin Dashboard | Ishank Jha";
  }, []);

  useEffect(() => {
    if (loading) return;
    if (!session) navigate("/admin/login", { replace: true });
    else if (!isAdmin)
      toast({
        title: "No admin access",
        description: "Your account does not have admin privileges.",
        variant: "destructive",
      });
  }, [loading, session, isAdmin, navigate]);

  if (loading) {
    return (
      <main className="min-h-screen bg-paper flex items-center justify-center">
        <p className="text-ink-soft text-sm uppercase tracking-widest">Loading…</p>
      </main>
    );
  }

  if (!session || !isAdmin) {
    return (
      <main className="min-h-screen bg-paper flex items-center justify-center px-4">
        <div className="text-center max-w-md border-2 border-ink bg-paper-warm p-6 shadow-pop-yellow">
          <h1 className="display-heading text-2xl text-ink">Access denied</h1>
          <p className="text-sm text-ink-soft mt-2">You need an admin account to view this page.</p>
          <Link to="/admin/login" className="inline-block mt-4 underline text-sm text-ink">
            Go to login
          </Link>
        </div>
      </main>
    );
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  return (
    <main className="min-h-screen bg-paper">
      <header className="border-b-2 border-ink bg-paper-warm">
        <div className="container max-w-6xl py-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="display-heading text-xl sm:text-2xl text-ink">Portfolio Admin</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-ink-soft font-bold mt-0.5">
              {user?.email}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="text-xs font-black uppercase tracking-widest px-3 py-2 border-2 border-ink bg-paper hover:bg-citrus transition-colors"
            >
              View Site
            </Link>
            <button
              onClick={handleSignOut}
              className="text-xs font-black uppercase tracking-widest px-3 py-2 border-2 border-ink bg-ink text-citrus hover:bg-paper hover:text-ink transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
        <nav className="container max-w-6xl pb-3 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`text-[11px] font-black uppercase tracking-widest px-3 py-2 border-2 border-ink transition-colors ${
                tab === t.id ? "bg-ink text-citrus" : "bg-paper hover:bg-citrus/40 text-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      <section className="container max-w-6xl py-6 sm:py-8">
        {tab === "works" && <CreativeWorksAdmin />}
        {tab === "cases" && <CaseStudiesAdmin />}
        {tab === "experience" && <ExperienceAdmin />}
        {tab === "text" && <SiteTextAdmin />}
      </section>
    </main>
  );
};

export default AdminDashboard;