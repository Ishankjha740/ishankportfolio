import { useState } from "react";
import { Send, Check, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const OPPORTUNITIES = [
  "Full-Time Role",
  "Part-Time Role",
  "Freelance Project",
  "Brand Collaboration",
  "Social Media Management",
  "Content Strategy",
  "Creative Campaign",
  "Consultation",
  "Other",
];

const TIMELINES = ["ASAP", "Within 1 Week", "Within 1 Month", "Flexible"];

const PLATFORMS = [
  "Instagram",
  "LinkedIn",
  "YouTube",
  "X/Twitter",
  "Pinterest",
  "Facebook",
  "Threads",
  "Other",
];

const DISCOVERY = [
  "Google Search",
  "LinkedIn",
  "Instagram",
  "Behance",
  "Referral",
  "Resume / CV",
  "Other",
];

type Tone = "light" | "dark";

const styles = (tone: Tone) => {
  const dark = tone === "dark";
  return {
    label: `block text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] mb-2 ${
      dark ? "text-paper" : "text-ink"
    }`,
    input: `w-full bg-transparent border-2 px-4 py-3 text-sm font-medium tracking-wide focus:outline-none transition-colors duration-200 ${
      dark
        ? "border-paper text-paper placeholder:text-paper/40 focus:border-citrus focus:bg-ink/60"
        : "border-ink text-ink placeholder:text-ink-soft/60 focus:border-citrus focus:bg-paper"
    }`,
    select: `appearance-none pr-10 cursor-pointer ${
      dark ? "bg-ink/80" : "bg-paper-warm"
    }`,
    wrap: `border-2 p-5 sm:p-8 md:p-10 ${
      dark
        ? "border-paper bg-ink"
        : "border-ink bg-paper-warm shadow-pop-yellow"
    }`,
    chevron: `pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-black ${
      dark ? "text-paper" : "text-ink"
    }`,
    platformInactive: dark
      ? "border-paper bg-transparent text-paper hover:bg-citrus hover:text-ink hover:border-ink"
      : "border-ink bg-transparent text-ink hover:bg-ink hover:text-citrus",
    platformActive: dark
      ? "border-citrus bg-citrus text-ink"
      : "border-ink bg-citrus text-ink shadow-pop-yellow",
    platformBox: dark ? "border-paper" : "border-ink",
    helper: dark ? "text-paper/60" : "text-ink-soft",
    successWrap: dark
      ? "border-2 border-paper bg-ink p-10 sm:p-14 text-center"
      : "border-2 border-ink bg-paper-warm shadow-pop-yellow p-10 sm:p-14 text-center",
    successHeading: dark ? "text-paper" : "text-ink",
    submit: dark
      ? "bg-citrus text-ink border-2 border-citrus hover:bg-paper hover:border-paper"
      : "bg-ink text-citrus shadow-pop-yellow hover:translate-x-1 hover:translate-y-1 hover:shadow-none",
  };
};

type FormState = {
  full_name: string;
  company_name: string;
  email: string;
  phone: string;
  website: string;
  opportunity_type: string;
  timeline: string;
  project_details: string;
  platforms: string[];
  discovery_source: string;
  website_url: string; // honeypot
};

const initial: FormState = {
  full_name: "",
  company_name: "",
  email: "",
  phone: "",
  website: "",
  opportunity_type: "",
  timeline: "",
  project_details: "",
  platforms: [],
  discovery_source: "",
  website_url: "",
};

type Props = { tone?: Tone; onSuccess?: () => void };

export const ContactForm = ({ tone = "light", onSuccess }: Props = {}) => {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const s = styles(tone);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const togglePlatform = (p: string) => {
    setForm((f) => ({
      ...f,
      platforms: f.platforms.includes(p)
        ? f.platforms.filter((x) => x !== p)
        : [...f.platforms, p],
    }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.full_name.trim()) errs.full_name = "Required";
    if (!form.email.trim()) errs.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email";
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (!validate()) return;
    setStatus("loading");
    try {
      const { data, error } = await supabase.functions.invoke("submit-contact", {
        body: form,
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setStatus("success");
      setForm(initial);
      onSuccess?.();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className={`${s.successWrap} animate-in fade-in zoom-in-95 duration-500`}>
        <div className={`inline-flex items-center justify-center w-16 h-16 border-2 ${tone === "dark" ? "border-citrus" : "border-ink"} bg-citrus mb-6`}>
          <Check size={28} className="text-ink" strokeWidth={3} />
        </div>
        <h3 className={`display-heading text-2xl sm:text-3xl md:text-4xl mb-3 ${s.successHeading}`}>
          Message <span className="bg-citrus px-2">Received</span>
        </h3>
        <p className={`text-sm sm:text-base max-w-md mx-auto ${s.helper}`}>
          Thanks for reaching out — I'll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={`mt-8 inline-flex items-center gap-2 px-5 py-2 border-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] transition-colors ${
            tone === "dark"
              ? "border-paper text-paper hover:bg-citrus hover:text-ink hover:border-citrus"
              : "border-ink text-ink hover:bg-ink hover:text-citrus"
          }`}
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className={s.wrap}
    >
      {/* Honeypot */}
      <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
        <label>
          Website URL
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website_url}
            onChange={(e) => update("website_url", e.target.value)}
          />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
        <div>
          <label htmlFor="full_name" className={s.label}>
            Full Name <span className="text-citrus">*</span>
          </label>
          <input
            id="full_name"
            type="text"
            required
            value={form.full_name}
            onChange={(e) => update("full_name", e.target.value)}
            className={s.input}
            placeholder="Your name"
          />
          {fieldErrors.full_name && (
            <p className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-destructive">
              {fieldErrors.full_name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company_name" className={s.label}>
            Company / Brand
          </label>
          <input
            id="company_name"
            type="text"
            value={form.company_name}
            onChange={(e) => update("company_name", e.target.value)}
            className={s.input}
            placeholder="Optional"
          />
        </div>

        <div>
          <label htmlFor="email" className={s.label}>
            Email <span className="text-citrus">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={s.input}
            placeholder="you@email.com"
          />
          {fieldErrors.email && (
            <p className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-destructive">
              {fieldErrors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={s.label}>
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={s.input}
            placeholder="+1 555 000 0000"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="website" className={s.label}>
            Website / Social Handle
          </label>
          <input
            id="website"
            type="text"
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
            className={s.input}
            placeholder="@handle or https://…"
          />
        </div>

        <div>
          <label htmlFor="opportunity_type" className={s.label}>
            What are you reaching out for?
          </label>
          <div className="relative">
            <select
              id="opportunity_type"
              value={form.opportunity_type}
              onChange={(e) => update("opportunity_type", e.target.value)}
              className={`${s.input} ${s.select}`}
            >
              <option value="">Select an option</option>
              {OPPORTUNITIES.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink font-black">
              ▾
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="timeline" className={s.label}>
            Timeline
          </label>
          <div className="relative">
            <select
              id="timeline"
              value={form.timeline}
              onChange={(e) => update("timeline", e.target.value)}
              className={`${s.input} ${s.select}`}
            >
              <option value="">Select a timeline</option>
              {TIMELINES.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink font-black">
              ▾
            </span>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="project_details" className={s.label}>
            Tell me about the role / project
          </label>
          <textarea
            id="project_details"
            rows={6}
            value={form.project_details}
            onChange={(e) => update("project_details", e.target.value)}
            className={`${s.input} resize-y min-h-[140px]`}
            placeholder="Scope, goals, audience, references…"
          />
        </div>

        <div className="sm:col-span-2">
          <span className={s.label}>Preferred Platforms</span>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {PLATFORMS.map((p) => {
              const active = form.platforms.includes(p);
              return (
                <button
                  type="button"
                  key={p}
                  onClick={() => togglePlatform(p)}
                  aria-pressed={active}
                  className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-2 border-ink text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] transition-all duration-200 ${
                    active
                      ? "bg-citrus text-ink shadow-pop-yellow"
                      : "bg-transparent text-ink hover:bg-ink hover:text-citrus"
                  }`}
                >
                  <span
                    className={`w-3 h-3 border-2 border-ink ${active ? "bg-ink" : "bg-transparent"}`}
                    aria-hidden="true"
                  />
                  {p}
                </button>
              );
            })}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="discovery_source" className={s.label}>
            How did you find me?
          </label>
          <div className="relative">
            <select
              id="discovery_source"
              value={form.discovery_source}
              onChange={(e) => update("discovery_source", e.target.value)}
              className={`${s.input} ${s.select}`}
            >
              <option value="">Select an option</option>
              {DISCOVERY.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink font-black">
              ▾
            </span>
          </div>
        </div>
      </div>

      {status === "error" && (
        <div className="mt-6 border-2 border-destructive bg-destructive/10 px-4 py-3 text-xs uppercase tracking-wider font-bold text-destructive">
          {errorMsg || "Submission failed. Please try again."}
        </div>
      )}

      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center sm:items-stretch gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-ink text-citrus text-xs sm:text-sm font-black uppercase tracking-widest shadow-pop-yellow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send size={16} />
              Let's Connect
            </>
          )}
        </button>
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-ink-soft text-center sm:text-left sm:self-center">
          Avg. response · 1–2 days
        </p>
      </div>
    </form>
  );
};