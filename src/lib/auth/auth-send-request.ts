import { createTransport } from "nodemailer";
import { APP_NAME } from "@/config/app";
import type { EmailConfig } from "@auth/core/providers/email";

type SendVerificationRequestParams = Parameters<EmailConfig["sendVerificationRequest"]>[0];

const EMAIL_BUTTON_LABEL = `Se connecter à ${APP_NAME}`;

export async function sendVerificationRequest(params: SendVerificationRequestParams) {
    const { identifier, url, expires, provider } = params;
    const { host } = new URL(url);

    if (!provider.server) {
        throw new Error("AUTH_EMAIL_SERVER manquant : impossible d'envoyer un email de lien magique.");
    }

    if (!provider.from) {
        throw new Error("AUTH_EMAIL_FROM manquant : impossible d'envoyer un email de lien magique.");
    }

    const transport = createTransport(provider.server);

    await transport.sendMail({
        to: identifier,
        from: provider.from,
        subject: `Ton lien de connexion ${APP_NAME} (valide 15 min)`,
        text: magicLinkText({ url, host, expires }),
        html: magicLinkHtml({ url, host, expires }),
    });
}

function formatExpiryTime(expires: Date) {
    return new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit" }).format(expires);
}

function magicLinkHtml(params: { url: string; host: string; expires: Date }) {
    const { url, host, expires } = params;

    const expiryTime = formatExpiryTime(expires);
    const escapedHost = host.replace(/\./g, "&#8203;.");
    const escapedUrl = url.replace(/\./g, "&#8203;.");

    // Email: éviter les dépendances CSS externes. On reste sur du style inline simple.
    return `
<body style="background:#f6f7fb;margin:0;padding:24px;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#111827;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
    <tr>
      <td style="padding:18px 20px;border-bottom:1px solid #e5e7eb;">
        <div style="font-weight:800;letter-spacing:0.04em;text-transform:uppercase;font-size:14px;color:#111827;">
          ${APP_NAME}
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding:20px;">
        <p style="margin:0 0 12px 0;font-size:14px;line-height:1.5;color:#111827;">
          Bonjour,
        </p>
        <p style="margin:0 0 16px 0;font-size:14px;line-height:1.5;color:#374151;">
          Tu as demandé à te connecter à <strong style="color:#111827;">${APP_NAME}</strong>.
          Ce lien est valide jusqu’à <strong style="color:#111827;">${expiryTime}</strong> (usage unique).
        </p>
        <div style="margin:18px 0 16px 0;">
          <a href="${url}" target="_blank" rel="noopener noreferrer"
             style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;padding:12px 16px;border-radius:10px;font-weight:700;font-size:14px;">
            ${EMAIL_BUTTON_LABEL}
          </a>
        </div>
        <p style="margin:0 0 8px 0;font-size:12px;line-height:1.5;color:#6b7280;">
          Si le bouton ne fonctionne pas, copie/colle ce lien dans ton navigateur :
        </p>
        <p style="margin:0 0 16px 0;font-size:12px;line-height:1.5;">
          <a href="${url}" style="color:#2563eb;word-break:break-all;">${escapedUrl}</a>
        </p>
        <p style="margin:0 0 16px 0;font-size:12px;line-height:1.5;color:#6b7280;">
          Conseil&nbsp;: vérifie que l’adresse commence par <strong style="color:#111827;">https://</strong> et correspond bien à
          <strong style="color:#111827;">${escapedHost}</strong>.
        </p>
        <p style="margin:0;font-size:12px;line-height:1.5;color:#6b7280;">
          Si tu n’es pas à l’origine de cette demande, ignore ce message. Aucune action ne sera effectuée.
        </p>
      </td>
    </tr>
  </table>
</body>
`;
}

function magicLinkText(params: { url: string; host: string; expires: Date }) {
    const { url, host, expires } = params;
    const expiryTime = formatExpiryTime(expires);

    return [
        `Bonjour,`,
        ``,
        `Tu as demandé à te connecter à ${APP_NAME}.`,
        `Lien valide jusqu'à ${expiryTime} (usage unique).`,
        ``,
        `Se connecter : ${url}`,
        ``,
        `Si tu n'es pas à l'origine de cette demande, ignore ce message.`,
        `(${host})`,
        ``,
    ].join("\n");
}
