import { useEffect } from "react";
import logo from "@/assets/ij-logo.png";

const Maintenance = () => {
  useEffect(() => {
    document.title = "Under Maintenance — Ishank Jha";
    let m = document.querySelector('meta[name="robots"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "robots");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "noindex");
  }, []);

  return (
    <main className="min-h-dvh flex items-center justify-center bg-paper text-ink px-6 py-12">
      <div className="w-full max-w-xl border-2 border-ink bg-paper shadow-[8px_8px_0_0_hsl(var(--ink))]">
        <div className="flex items-center gap-4 border-b-2 border-ink bg-ink p-5">
          <div className="w-16 h-16 shrink-0 border-2 border-citrus bg-ink flex items-center justify-center">
            <img src={logo} alt="Ishank Jha — IJ monogram logo" className="w-3/4 h-3/4 object-contain" />
          </div>
          <div>
            <div className="text-paper font-black uppercase text-sm tracking-wider">Ishank Jha</div>
            <div className="text-paper/70 text-[10px] uppercase tracking-[0.2em] mt-1">Strategist</div>
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div className="inline-flex items-center gap-2 border-2 border-ink bg-citrus px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-ink">
            <span className="h-2 w-2 rounded-full bg-ink animate-pulse" aria-hidden="true" />
            Status — Maintenance
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
            Under<br />Maintenance
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            This site is temporarily unavailable while updates are underway. Please check back soon.
          </p>
        </div>

        <div className="border-t-2 border-ink px-8 md:px-10 py-4 text-[10px] uppercase tracking-[0.2em] text-ink/70">
          Back shortly
        </div>
      </div>
    </main>
  );
};

export default Maintenance;
