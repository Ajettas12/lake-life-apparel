import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type QuotePayload = {
  name: string;
  organization: string;
  email: string;
  phone?: string;
  customerType: string;
  apparelType: string;
  estimatedQuantity: string;
  designStatus?: string;
  deadline?: string;
  notes?: string;
  website?: string; // honeypot
};

function validate(data: QuotePayload): string | null {
  if (!data.name?.trim()) return "Name is required.";
  if (!data.organization?.trim()) return "Organization is required.";
  if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return "Valid email is required.";
  if (!data.customerType?.trim()) return "Customer type is required.";
  if (!data.apparelType?.trim()) return "Apparel type is required.";
  if (!data.estimatedQuantity?.trim()) return "Estimated quantity is required.";
  return null;
}

function buildEmailHtml(b: QuotePayload): string {
  const row = (label: string, value: string) =>
    `<tr>
      <td style="padding:8px 12px;font-weight:600;color:#374151;background:#f9fafb;width:160px;vertical-align:top;">${label}</td>
      <td style="padding:8px 12px;color:#1f2937;">${value || "—"}</td>
    </tr>`;

  return `
    <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
      <div style="background:#1b3a5c;padding:24px 28px;">
        <h1 style="margin:0;color:white;font-size:20px;font-weight:700;">New Quote Request</h1>
        <p style="margin:4px 0 0;color:rgba(255,255,255,0.65);font-size:14px;">Lake Life Apparel — lakelifeapparel.com</p>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        ${row("Name", b.name)}
        ${row("Organization", b.organization)}
        ${row("Email", `<a href="mailto:${b.email}" style="color:#1d4ed8;">${b.email}</a>`)}
        ${row("Phone", b.phone || "—")}
        ${row("Customer Type", b.customerType)}
        ${row("Apparel Type", b.apparelType)}
        ${row("Est. Quantity", b.estimatedQuantity)}
        ${row("Design Status", b.designStatus || "—")}
        ${row("Deadline", b.deadline || "—")}
        ${row("Notes", b.notes ? b.notes.replace(/\n/g, "<br>") : "—")}
      </table>
      <div style="padding:16px 28px;background:#f9fafb;border-top:1px solid #e5e7eb;">
        <a href="mailto:${b.email}?subject=Re: Your Quote Request — Lake Life Apparel"
           style="display:inline-block;padding:10px 20px;background:#1b3a5c;color:white;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;">
          Reply to ${b.name}
        </a>
      </div>
    </div>`;
}

function buildEmailText(b: QuotePayload): string {
  return [
    "NEW QUOTE REQUEST — Lake Life Apparel",
    "========================================",
    `Name:          ${b.name}`,
    `Organization:  ${b.organization}`,
    `Email:         ${b.email}`,
    `Phone:         ${b.phone || "—"}`,
    `Customer Type: ${b.customerType}`,
    `Apparel Type:  ${b.apparelType}`,
    `Est. Quantity: ${b.estimatedQuantity}`,
    `Design Status: ${b.designStatus || "—"}`,
    `Deadline:      ${b.deadline || "—"}`,
    `Notes:         ${b.notes || "—"}`,
  ].join("\n");
}

export async function POST(req: NextRequest) {
  let body: QuotePayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill this field, real users never see it
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.QUOTE_RECIPIENT_EMAIL;
  const fromEmail = process.env.QUOTE_FROM_EMAIL;

  // If no API key is set yet, fall back to console logging (safe for local dev)
  if (!apiKey || apiKey === "re_your_api_key_here") {
    console.log("=== QUOTE REQUEST (no Resend key set) ===");
    console.log(buildEmailText(body));
    console.log("=========================================");
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: fromEmail ?? "onboarding@resend.dev",
      to: toEmail ?? "hello@lakelifeapparel.com",
      replyTo: body.email,
      subject: `New Quote Request — ${body.organization} (${body.estimatedQuantity})`,
      html: buildEmailHtml(body),
      text: buildEmailText(body),
    });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
