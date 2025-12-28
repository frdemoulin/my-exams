import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import { z } from "zod";
import { APP_NAME } from "@/config/app";

const contactSchema = z.object({
  name: z.string().trim().max(100).optional().or(z.literal("")),
  email: z.string().trim().email(),
  subject: z.string().trim().min(2).max(140),
  message: z.string().trim().min(10).max(5000),
});

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Requête invalide." },
      { status: 400 }
    );
  }

  const result = contactSchema.safeParse(payload);
  if (!result.success) {
    return NextResponse.json(
      { error: "Les champs sont invalides." },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = result.data;

  const server = process.env.CONTACT_EMAIL_SERVER ?? process.env.AUTH_EMAIL_SERVER;
  const from =
    process.env.CONTACT_EMAIL_FROM ??
    process.env.AUTH_EMAIL_FROM ??
    "contact@my-exams.fr";
  const to = process.env.CONTACT_EMAIL_TO ?? "contact@my-exams.fr";

  if (!server) {
    return NextResponse.json(
      { error: "Configuration email manquante." },
      { status: 500 }
    );
  }

  const transport = createTransport(server);

  const subjectPrefix = "[Contact]";
  const trimmedName = name?.trim();
  const senderLabel = trimmedName ? `${trimmedName} <${email}>` : email;

  try {
    await transport.sendMail({
      to,
      from,
      replyTo: email,
      subject: `${subjectPrefix} ${subject}`,
      text: [
        `De: ${senderLabel}`,
        "",
        message,
      ].join("\n"),
      html: buildContactEmailHtml({
        senderLabel,
        email,
        subject,
        message,
      }),
    });
  } catch (error) {
    console.error("Erreur envoi contact:", error);
    return NextResponse.json(
      { error: "Impossible d'envoyer le message." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildContactEmailHtml(params: {
  senderLabel: string;
  email: string;
  subject: string;
  message: string;
}) {
  const { senderLabel, email, subject, message } = params;

  const safeSender = escapeHtml(senderLabel);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message);

  return `
<body style="background:#f6f7fb;margin:0;padding:24px;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#111827;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
    <tr>
      <td style="padding:18px 20px;border-bottom:1px solid #e5e7eb;">
        <div style="font-weight:800;letter-spacing:0.04em;text-transform:uppercase;font-size:14px;color:#111827;">
          Contact ${escapeHtml(APP_NAME)}
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding:20px;">
        <p style="margin:0 0 12px 0;font-size:14px;line-height:1.5;color:#111827;">
          Nouveau message via le formulaire de contact.
        </p>
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="font-size:13px;line-height:1.5;color:#374151;">
          <tr>
            <td style="padding:6px 0;"><strong>De :</strong> ${safeSender}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;"><strong>Email :</strong> ${safeEmail}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;"><strong>Sujet :</strong> ${safeSubject}</td>
          </tr>
        </table>
        <div style="margin:18px 0 8px 0;font-weight:700;font-size:13px;color:#111827;">
          Message
        </div>
        <div style="padding:12px 14px;border:1px solid #e5e7eb;border-radius:10px;background:#f9fafb;font-size:13px;line-height:1.6;color:#111827;white-space:pre-line;">
          ${safeMessage}
        </div>
      </td>
    </tr>
  </table>
</body>
`;
}
