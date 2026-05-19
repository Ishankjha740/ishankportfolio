import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { LabeledInput } from "./CaseStudiesAdmin";

type Kind = "image" | "video" | "youtube";
type Ratio = "square" | "portrait";

type Work = {
  id: string;
  kind: Kind;
  src: string;
  href: string | null;
  title: string;
  ratio: Ratio;
  featured: boolean;
  sort_order: number;
};

const empty = (): Omit<Work, "id"> => ({
  kind: "image",
  src: "",
  href: "",
  title: "",
  ratio: "square",
  featured: false,
  sort_order: 0,
});

export const CreativeWorksAdmin = () => {
  const [rows, setRows] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Work | null>(null);
  const [creating, setCreating] = useState<Omit<Work, "id"> | null>(null);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("creative_works")
      .select("*")
      .order("sort_order");
    if (error) toast({ title: "Load failed", description: error.message, variant: "destructive" });
    setRows((data ?? []) as Work[]);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const save = async (row: Work) => {
    const { id, ...rest } = row;
    const { error } = await supabase.from("creative_works").update(rest).eq("id", id);
    if (error) return toast({ title: "Save failed", description: error.message, variant: "destructive" });
    toast({ title: "Saved" });
    setEditing(null);
    load();
  };

  const create = async (row: Omit<Work, "id">) => {
    const { error } = await supabase.from("creative_works").insert(row);
    if (error) return toast({ title: "Create failed", description: error.message, variant: "destructive" });
    toast({ title: "Created" });
    setCreating(null);
    load();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this work?")) return;
    const { error } = await supabase.from("creative_works").delete().eq("id", id);
    if (error) return toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    load();
  };

  if (loading) return <p className="text-sm text-ink-soft">Loading…</p>;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs text-ink-soft">
          {rows.length} custom work{rows.length === 1 ? "" : "s"} (shown <strong>after</strong> the built-in gallery)
        </p>
        <button
          onClick={() => setCreating(empty())}
          className="text-[10px] font-black uppercase tracking-widest px-3 py-2 border-2 border-ink bg-citrus text-ink shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          + Add Work
        </button>
      </div>

      {creating && (
        <WorkForm
          value={creating}
          onChange={setCreating}
          onCancel={() => setCreating(null)}
          onSave={() => create(creating)}
        />
      )}

      <div className="grid sm:grid-cols-2 gap-3">
        {rows.map((r) =>
          editing?.id === r.id ? (
            <div key={r.id} className="sm:col-span-2">
              <WorkForm
                value={editing}
                onChange={(v) => setEditing(v as Work)}
                onCancel={() => setEditing(null)}
                onSave={() => save(editing)}
              />
            </div>
          ) : (
            <div key={r.id} className="border-2 border-ink bg-paper-warm p-3 flex gap-3">
              <div className="w-20 h-20 border-2 border-ink bg-paper shrink-0 overflow-hidden flex items-center justify-center">
                {r.kind === "image" ? (
                  <img src={r.src} alt={r.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-[10px] font-black uppercase tracking-widest text-ink-soft">
                    {r.kind === "youtube" ? "YT" : "▶"}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-ink truncate">{r.title}</p>
                <p className="text-[10px] uppercase tracking-widest text-ink-soft mt-1">
                  {r.kind} · {r.ratio}
                  {r.featured ? " · featured" : ""}
                </p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => setEditing(r)}
                    className="text-[10px] font-black uppercase tracking-widest px-2 py-1 border-2 border-ink bg-paper hover:bg-citrus"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => remove(r.id)}
                    className="text-[10px] font-black uppercase tracking-widest px-2 py-1 border-2 border-ink bg-ink text-citrus"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

type FormValue = Omit<Work, "id"> | Work;

const WorkForm = <T extends FormValue>({
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
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const update = <K extends keyof T>(k: K, v: T[K]) => onChange({ ...value, [k]: v });

  const handleUpload = async (file: File) => {
    setUploading(true);
    const ext = file.name.split(".").pop() ?? "bin";
    const path = `${value.kind}/${crypto.randomUUID()}.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from("portfolio-assets")
      .upload(path, file, { cacheControl: "3600", upsert: false });
    if (uploadError) {
      toast({ title: "Upload failed", description: uploadError.message, variant: "destructive" });
      setUploading(false);
      return;
    }
    const { data } = supabase.storage.from("portfolio-assets").getPublicUrl(path);
    update("src" as keyof T, data.publicUrl as T[keyof T]);
    setUploading(false);
    toast({ title: "Uploaded" });
  };

  return (
    <div className="border-2 border-ink bg-paper p-4 space-y-3">
      <div className="grid sm:grid-cols-3 gap-3">
        <label className="block">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-ink">Kind</span>
          <select
            value={value.kind}
            onChange={(e) => update("kind" as keyof T, e.target.value as T[keyof T])}
            className="mt-1 w-full border-2 border-ink bg-paper-warm px-3 py-2 text-sm text-ink"
          >
            <option value="image">Image</option>
            <option value="video">Video (MP4)</option>
            <option value="youtube">YouTube</option>
          </select>
        </label>
        <label className="block">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-ink">Ratio</span>
          <select
            value={value.ratio}
            onChange={(e) => update("ratio" as keyof T, e.target.value as T[keyof T])}
            className="mt-1 w-full border-2 border-ink bg-paper-warm px-3 py-2 text-sm text-ink"
          >
            <option value="square">Square</option>
            <option value="portrait">Portrait (tall)</option>
          </select>
        </label>
        <LabeledInput
          label="Sort order"
          type="number"
          value={String(value.sort_order)}
          onChange={(v) => update("sort_order" as keyof T, (parseInt(v, 10) || 0) as T[keyof T])}
        />
      </div>

      <LabeledInput
        label={value.kind === "youtube" ? "YouTube embed URL (e.g. https://www.youtube.com/embed/VIDEO_ID)" : "Source URL"}
        value={value.src}
        onChange={(v) => update("src" as keyof T, v as T[keyof T])}
      />

      {value.kind !== "youtube" && (
        <div className="border-2 border-dashed border-ink/40 p-3 flex items-center justify-between gap-3">
          <p className="text-xs text-ink-soft">
            Or upload a file directly{value.kind === "image" ? " (PNG/JPG)" : " (MP4)"}
          </p>
          <input
            ref={fileRef}
            type="file"
            accept={value.kind === "image" ? "image/*" : "video/*"}
            hidden
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleUpload(f);
            }}
          />
          <button
            type="button"
            disabled={uploading}
            onClick={() => fileRef.current?.click()}
            className="text-[10px] font-black uppercase tracking-widest px-3 py-2 border-2 border-ink bg-citrus text-ink disabled:opacity-50"
          >
            {uploading ? "Uploading…" : "Upload File"}
          </button>
        </div>
      )}

      <LabeledInput
        label="Title / alt text"
        value={value.title}
        onChange={(v) => update("title" as keyof T, v as T[keyof T])}
      />
      <LabeledInput
        label="Click-through link (optional)"
        value={value.href ?? ""}
        onChange={(v) => update("href" as keyof T, (v || null) as T[keyof T])}
      />

      <label className="flex items-center gap-2 text-xs text-ink">
        <input
          type="checkbox"
          checked={value.featured}
          onChange={(e) => update("featured" as keyof T, e.target.checked as T[keyof T])}
        />
        Featured tile (renders 2×2 hero)
      </label>

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