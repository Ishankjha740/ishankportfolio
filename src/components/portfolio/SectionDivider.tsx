export const SectionDivider = ({ label, n }: { label: string; n: string }) => (
  <div className="container py-6 flex items-center gap-6 border-y border-rule bg-paper">
    <span className="font-serif italic text-2xl text-terracotta">{n}</span>
    <span className="h-px flex-1 bg-rule" />
    <span className="label-eyebrow">{label}</span>
    <span className="h-px w-12 bg-ink" />
  </div>
);
