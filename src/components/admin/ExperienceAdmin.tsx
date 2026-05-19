import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { LabeledInput, LabeledTextarea } from "./CaseStudiesAdmin";

type Role = {
  id: string;
  period: string;
  company: string;
  title: string;
  points: string[];
  sort_order: number;
};

const empty = (): Omit<Role, "id"> => ({
  period: "",
  company: "",
  title: "",
  points: [],
  sort_order: 0,
});

export const ExperienceAdmin = () => {
  const [rows, setRows] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Role | null>(null);
  const [creating, setCreating] = useState<Omit<Role, "id"> | null>(null);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("experience_roles")
      .select("*")
      .order("sort_order");
    if (error) toast({ title: "Load failed", description: error.message, variant: "destructive" });
    setRows(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const save = async (row: Role) => {
    const { id, ...rest } = row;
    const { error } = await supabase.from("experience_roles").update(rest).eq("id", id);
    if (error) return toast({ title: "Save failed", description: error.message, variant: "destructive" });
    toast({ title: "Saved" });
    setEditing(null);
    load();
  };

  const create = async (row: Omit<Role, "id">) => {
    const { error } = await supabase.from("experience_roles").insert(row);
    if (error) return toast({ title: "Create failed", description: error.message, variant: "destructive" });
    toast({ title: "Created" });
    setCreating(null);
    load();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this role?")) return;
    const { error } = await supabase.from("experience_roles").delete().eq("id", id);
    if (error) return toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    load();
  };

  if (loading) return <p className="text-sm text-ink-soft">Loading…</p>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs text-ink-soft">{rows.length} roles</p>
        <button
          onClick={() => setCreating(empty())}
          className="text-[10px] font-black uppercase tracking-widest px-3 py-2 border-2 border-ink bg-citrus text-ink shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          + Add Role
        </button>
      </div>

      {creating && (
        <RoleForm
          value={creating}
          onChange={setCreating}
          onCancel={() => setCreating(null)}
          onSave={() => create(creating)}
        />
      )}

      <div className="space-y-3">
        {rows.map((r) =>
          editing?.id === r.id ? (
            <RoleForm
              key={r.id}
              value={editing}
              onChange={(v) => setEditing(v as Role)}
              onCancel={() => setEditing(null)}
              onSave={() => save(editing)}
            />
          ) : (
            <div key={r.id} className="border-2 border-ink bg-paper-warm p-4 flex flex-col sm:flex-row gap-3 sm:items-start sm:justify-between">
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink-soft">{r.period}</div>
                <h3 className="display-heading text-base text-ink mt-1">{r.title}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-ink-soft mt-0.5">— {r.company}</p>
                <p className="text-xs text-ink-soft mt-2">{r.points.length} bullet point{r.points.length === 1 ? "" : "s"}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => setEditing(r)}
                  className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 border-2 border-ink bg-paper hover:bg-citrus"
                >
                  Edit
                </button>
                <button
                  onClick={() => remove(r.id)}
                  className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 border-2 border-ink bg-ink text-citrus"
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

const RoleForm = <T extends Omit<Role, "id"> | Role>({
  value,
  onChange,
  onCancel,
  onSave,
}: {
  value: T;
  onChange: (v: T) => void;
  onCancel: () => void;
  onSave: () => void;
}) => {
  const update = <K extends keyof T>(k: K, v: T[K]) => onChange({ ...value, [k]: v });
  return (
    <div className="border-2 border-ink bg-paper p-4 space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <LabeledInput label="Period" value={value.period} onChange={(v) => update("period" as keyof T, v as T[keyof T])} />
        <LabeledInput
          label="Sort order"
          type="number"
          value={String(value.sort_order)}
          onChange={(v) => update("sort_order" as keyof T, (parseInt(v, 10) || 0) as T[keyof T])}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <LabeledInput label="Company" value={value.company} onChange={(v) => update("company" as keyof T, v as T[keyof T])} />
        <LabeledInput label="Role title" value={value.title} onChange={(v) => update("title" as keyof T, v as T[keyof T])} />
      </div>
      <LabeledTextarea
        label="Bullet points (one per line)"
        rows={6}
        value={value.points.join("\n")}
        onChange={(v) =>
          update(
            "points" as keyof T,
            v.split("\n").map((s) => s.trim()).filter(Boolean) as unknown as T[keyof T]
          )
        }
      />
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