import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

type Row = {
  key: string;
  value: string;
  label: string | null;
  multiline: boolean;
};

export const SiteTextAdmin = () => {
  const [rows, setRows] = useState<Row[]>([]);
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("site_text")
      .select("*")
      .order("key");
    if (error) toast({ title: "Load failed", description: error.message, variant: "destructive" });
    setRows(data ?? []);
    setDrafts(Object.fromEntries((data ?? []).map((r) => [r.key, r.value])));
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const save = async (key: string) => {
    setSaving(key);
    const { error } = await supabase
      .from("site_text")
      .update({ value: drafts[key] })
      .eq("key", key);
    setSaving(null);
    if (error) toast({ title: "Save failed", description: error.message, variant: "destructive" });
    else toast({ title: "Saved", description: key });
  };

  if (loading) return <p className="text-sm text-ink-soft">Loading…</p>;

  return (
    <div className="space-y-4">
      <p className="text-xs text-ink-soft">
        Edit copy used across the homepage. Changes go live immediately after publish.
      </p>
      <div className="space-y-3">
        {rows.map((r) => {
          const dirty = drafts[r.key] !== r.value;
          return (
            <div key={r.key} className="border-2 border-ink bg-paper-warm p-4">
              <div className="flex items-center justify-between gap-3 mb-2">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-ink">
                    {r.label ?? r.key}
                  </div>
                  <div className="text-[10px] text-ink-soft mt-0.5">{r.key}</div>
                </div>
                <button
                  disabled={!dirty || saving === r.key}
                  onClick={() => save(r.key)}
                  className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 border-2 border-ink bg-ink text-citrus disabled:opacity-40"
                >
                  {saving === r.key ? "Saving…" : "Save"}
                </button>
              </div>
              {r.multiline ? (
                <textarea
                  rows={4}
                  value={drafts[r.key] ?? ""}
                  onChange={(e) => setDrafts((d) => ({ ...d, [r.key]: e.target.value }))}
                  className="w-full border-2 border-ink bg-paper px-3 py-2 text-sm text-ink focus:outline-none focus:bg-citrus/20"
                />
              ) : (
                <input
                  value={drafts[r.key] ?? ""}
                  onChange={(e) => setDrafts((d) => ({ ...d, [r.key]: e.target.value }))}
                  className="w-full border-2 border-ink bg-paper px-3 py-2 text-sm text-ink focus:outline-none focus:bg-citrus/20"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};