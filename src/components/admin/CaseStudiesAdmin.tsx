import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

type CaseStudy = {
  id: string;
  n: string;
  tag: string;
  title: string;
  context: string;
  approach: string;
  impact: string;
  sort_order: number;
};

const empty = (): Omit<CaseStudy, "id"> => ({
  n: "",
  tag: "",
  title: "",
  context: "",
  approach: "",
  impact: "",
  sort_order: 0,
});

export const CaseStudiesAdmin = () => {
  const [rows, setRows] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<CaseStudy | null>(null);
  const [creating, setCreating] = useState<Omit<CaseStudy, "id"> | null>(null);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("case_studies")
      .select("*")
      .order("sort_order");
    if (error) toast({ title: "Load failed", description: error.message, variant: "destructive" });
    setRows(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const save = async (row: CaseStudy) => {
    const { id, ...rest } = row;
    const { error } = await supabase.from("case_studies").update(rest).eq("id", id);
    if (error) return toast({ title: "Save failed", description: error.message, variant: "destructive" });
    toast({ title: "Saved" });
    setEditing(null);
    load();
  };

  const create = async (row: Omit<CaseStudy, "id">) => {
    const { error } = await supabase.from("case_studies").insert(row);
    if (error) return toast({ title: "Create failed", description: error.message, variant: "destructive" });
    toast({ title: "Created" });
    setCreating(null);
    load();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this case study?")) return;
    const { error } = await supabase.from("case_studies").delete().eq("id", id);
    if (error) return toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    load();
  };

  if (loading) return <p className="text-sm text-ink-soft">Loading…</p>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs text-ink-soft">{rows.length} case studies</p>
        <button
          onClick={() => setCreating(empty())}
          className="text-[10px] font-black uppercase tracking-widest px-3 py-2 border-2 border-ink bg-citrus text-ink shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          + Add Case Study
        </button>
      </div>

      {creating && (
        <CaseStudyForm
          value={creating}
          onChange={setCreating}
          onCancel={() => setCreating(null)}
          onSave={() => create(creating)}
        />
      )}

      <div className="space-y-3">
        {rows.map((r) =>
          editing?.id === r.id ? (
            <CaseStudyForm
              key={r.id}
              value={editing}
              onChange={(v) => setEditing(v as CaseStudy)}
              onCancel={() => setEditing(null)}
              onSave={() => save(editing)}
            />
          ) : (
            <div key={r.id} className="border-2 border-ink bg-paper-warm p-4 flex flex-col sm:flex-row gap-3 sm:items-start sm:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="display-heading text-xl text-ink">{r.n}</span>
                  <span className="bg-citrus border border-ink px-2 py-0.5 text-[10px] font-black uppercase tracking-widest">
                    {r.tag}
                  </span>
                </div>
                <h3 className="display-heading text-base text-ink">{r.title}</h3>
                <p className="text-xs text-ink-soft mt-1 line-clamp-2">{r.impact}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => setEditing(r)}
                  className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 border-2 border-ink bg-paper hover:bg-citrus transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => remove(r.id)}
                  className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 border-2 border-ink bg-ink text-citrus hover:bg-destructive hover:text-destructive-foreground transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

type FormProps<T> = {
  value: T;
  onChange: (v: T) => void;
  onCancel: () => void;
  onSave: () => void;
};

const CaseStudyForm = <T extends Omit<CaseStudy, "id"> | CaseStudy>({
  value,
  onChange,
  onCancel,
  onSave,
}: FormProps<T>) => {
  const update = (k: keyof T, v: string | number) => onChange({ ...value, [k]: v });
  return (
    <div className="border-2 border-ink bg-paper p-4 space-y-3">
      <div className="grid sm:grid-cols-3 gap-3">
        <LabeledInput label="Number (e.g. 01)" value={value.n} onChange={(v) => update("n", v)} />
        <LabeledInput label="Tag" value={value.tag} onChange={(v) => update("tag", v)} />
        <LabeledInput
          label="Sort order"
          type="number"
          value={String(value.sort_order)}
          onChange={(v) => update("sort_order", parseInt(v, 10) || 0)}
        />
      </div>
      <LabeledInput label="Title" value={value.title} onChange={(v) => update("title", v)} />
      <LabeledTextarea label="Context" value={value.context} onChange={(v) => update("context", v)} />
      <LabeledTextarea label="Approach" value={value.approach} onChange={(v) => update("approach", v)} />
      <LabeledTextarea label="Impact" value={value.impact} onChange={(v) => update("impact", v)} />
      <div className="flex gap-2 justify-end">
        <button onClick={onCancel} className="text-[10px] font-black uppercase tracking-widest px-3 py-2 border-2 border-ink bg-paper">
          Cancel
        </button>
        <button onClick={onSave} className="text-[10px] font-black uppercase tracking-widest px-3 py-2 border-2 border-ink bg-ink text-citrus">
          Save
        </button>
      </div>
    </div>
  );
};

export const LabeledInput = ({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) => (
  <label className="block">
    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-ink">{label}</span>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1 w-full border-2 border-ink bg-paper-warm px-3 py-2 text-sm text-ink focus:outline-none focus:bg-citrus/20"
    />
  </label>
);

export const LabeledTextarea = ({
  label,
  value,
  onChange,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) => (
  <label className="block">
    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-ink">{label}</span>
    <textarea
      rows={rows}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1 w-full border-2 border-ink bg-paper-warm px-3 py-2 text-sm text-ink focus:outline-none focus:bg-citrus/20"
    />
  </label>
);