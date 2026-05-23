import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { z } from "https://esm.sh/zod@3.23.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
const OWNER_EMAIL = "jha.ishank74@gmail.com";
const FROM_ADDRESS = "Ishank Jha <onboarding@resend.dev>";

const ContactSchema = z.object({
  full_name: z.string().trim().min(1).max(120),
  company_name: z.string().trim().max(160).optional().nullable(),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(40).optional().nullable(),
  website: z.string().trim().max(255).optional().nullable(),
  opportunity_type: z.string().trim().max(80).optional().nullable(),
  timeline: z.string().trim().max(40).optional().nullable(),
  project_details: z.string().trim().max(4000).optional().nullable(),
  platforms: z.array(z.string().max(40)).max(20).default([]),
  discovery_source: z.string().trim().max(120).optional().nullable(),
  // Honeypot — must be empty
  website_url: z.string().max(0).optional().or(z.literal("")),
});

// Naive in-memory rate limiter (per warm instance)
const hits = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
function rateLimited(key: string) {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || entry.reset < now) {
    hits.set(key, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendEmail(payload: Record<string, unknown>) {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
  if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY is not configured");

  const res = await fetch(`${GATEWAY_URL}/emails`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": RESEND_API_KEY,
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error("Resend error", res.status, data);
    throw new Error(`Resend failed [${res.status}]: ${JSON.stringify(data)}`);
  }
  return data;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";

    if (rateLimited(ip)) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const json = await req.json().catch(() => null);
    const parsed = ContactSchema.safeParse(json);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({
          error: "Invalid submission",
          details: parsed.error.flatten().fieldErrors,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Honeypot tripped → pretend success
    if (parsed.data.website_url && parsed.data.website_url.length > 0) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceKey);

    const {
      full_name,
      company_name,
      email,
      phone,
      website,
      opportunity_type,
      timeline,
      project_details,
      platforms,
      discovery_source,
    } = parsed.data;

    const { data: inserted, error: insertErr } = await supabase
      .from("contacts")
      .insert({
        full_name,
        company_name: company_name || null,
        email,
        phone: phone || null,
        website: website || null,
        opportunity_type: opportunity_type || null,
        timeline: timeline || null,
        project_details: project_details || null,
        platforms,
        discovery_source: discovery_source || null,
      })
      .select()
      .single();

    if (insertErr) {
      console.error("Insert failed", insertErr);
      return new Response(
        JSON.stringify({ error: "Could not save submission" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Fire emails in parallel; do not fail the request if emails fail
    const fields: Array<[string, string | null | undefined]> = [
      ["Name", full_name],
      ["Email", email],
      ["Company", company_name],
      ["Phone", phone],
      ["Website", website],
      ["Opportunity", opportunity_type],
      ["Timeline", timeline],
      ["Platforms", platforms?.join(", ")],
      ["Found via", discovery_source],
    ];
    const rows = fields
      .filter(([, v]) => v && String(v).trim().length > 0)
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 12px;border-bottom:1px solid #222;font:11px/1.4 Arial;color:#888;text-transform:uppercase;letter-spacing:.12em">${escapeHtml(
            k,
          )}</td><td style="padding:6px 12px;border-bottom:1px solid #222;font:14px/1.5 Arial;color:#fff">${escapeHtml(
            String(v),
          )}</td></tr>`,
      )
      .join("");

    const notifyHtml = `
      <div style="background:#0f0f0f;padding:24px;font-family:Arial,sans-serif">
        <h2 style="color:#facc15;font-size:20px;margin:0 0 16px;text-transform:uppercase;letter-spacing:.15em">New Portfolio Inquiry</h2>
        <table style="width:100%;border-collapse:collapse;background:#181818">${rows}</table>
        ${
          project_details
            ? `<div style="margin-top:20px;padding:16px;background:#181818;border-left:3px solid #facc15;color:#fff;font:14px/1.6 Arial;white-space:pre-wrap">${escapeHtml(
                project_details,
              )}</div>`
            : ""
        }
      </div>`;

    const thankHtml = `
      <div style="background:#0f0f0f;padding:32px;font-family:Arial,sans-serif;color:#fff">
        <h1 style="color:#facc15;font-size:22px;margin:0 0 16px;text-transform:uppercase;letter-spacing:.15em">Thanks, ${escapeHtml(
          full_name,
        )}</h1>
        <p style="font-size:15px;line-height:1.6;color:#e5e5e5;margin:0 0 14px">
          I've received your message and will get back to you as soon as possible — usually within a couple of days.
        </p>
        <p style="font-size:15px;line-height:1.6;color:#e5e5e5;margin:0 0 24px">
          In the meantime, feel free to explore more of my work.
        </p>
        <p style="font-size:13px;color:#888;margin:0">— Ishank Jha</p>
      </div>`;

    await Promise.allSettled([
      sendEmail({
        from: FROM_ADDRESS,
        to: [OWNER_EMAIL],
        reply_to: email,
        subject: `New Portfolio Inquiry from ${full_name}`,
        html: notifyHtml,
      }),
      sendEmail({
        from: FROM_ADDRESS,
        to: [email],
        subject: "Thanks for reaching out — Ishank Jha",
        html: thankHtml,
      }),
    ]);

    return new Response(JSON.stringify({ ok: true, id: inserted.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("submit-contact error", err);
    return new Response(JSON.stringify({ error: "Unexpected error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});