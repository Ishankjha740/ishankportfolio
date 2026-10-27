import { useEffect } from "react";

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
    <main className="min-h-dvh flex items-center justify-center bg-background text-foreground px-6">
      <div className="max-w-xl text-center">
        <span className="inline-block h-2 w-2 rounded-full bg-primary mb-8 animate-pulse" aria-hidden="true" />
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Status — Maintenance</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Under Maintenance</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          This site is temporarily unavailable while updates are underway. Please check back soon.
        </p>
        <div className="mt-10 mx-auto h-px w-16 bg-primary" aria-hidden="true" />
      </div>
    </main>
  );
};

export default Maintenance;
