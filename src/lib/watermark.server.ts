import crypto from 'node:crypto';

if (typeof window !== 'undefined') {
  throw new Error('This module cannot be imported in the browser.');
}

const DEFAULT_FALLBACK_SECRET = 'my-exams-internal-watermark-secret-key-2026';

function getWatermarkSecret(): string {
  const secret = process.env.WATERMARK_SECRET;
  if (secret && secret.trim().length > 0) {
    return secret.trim();
  }
  return DEFAULT_FALLBACK_SECRET;
}

export type GenerateWatermarkInput = {
  userId?: string | null;
  sessionId: string;
};

/**
 * Génère un code de filigrane court, opaque et pseudonymisé via HMAC-SHA256.
 * Ne divulgue jamais l'identifiant utilisateur ni le secret côté client.
 *
 * @returns Code court au format "SESSION <8_HEX>"
 */
export function generateWatermarkCode(input: GenerateWatermarkInput): string {
  const secret = getWatermarkSecret();
  const effectiveUserId = input.userId?.trim() || 'anonymous';
  const effectiveSessionId = input.sessionId.trim();

  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(`${effectiveUserId}:${effectiveSessionId}`);
  const shortHash = hmac.digest('hex').slice(0, 8).toUpperCase();

  return `SESSION ${shortHash}`;
}
