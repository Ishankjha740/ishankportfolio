export const SectionDivider = ({ label, n }: { label: string; n: string }) => (
  <div className="container py-6 flex items-center gap-6 border-y-2 border-ink bg-paper">
    <span className="font-serif italic text-2xl text-terracotta">{n}</span>
    <span className="h-1 flex-1 ticker-tape opacity-70" />
    <span className="label-eyebrow text-ink">{label}</span>
    <span className="h-1 w-12 bg-cobalt" />
  </div>
);
