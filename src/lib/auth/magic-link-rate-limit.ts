import crypto from "node:crypto";
import prisma from "@/lib/db/prisma";

type RateLimitConfig = {
  cooldownSeconds: number;
  windowSeconds: number;
  maxRequestsPerEmail: number;
  maxRequestsPerIp: number;
};

export type RateLimitResult =
  | { allowed: true }
  | {
      allowed: false;
      retryAfterSeconds: number;
      scope: "email" | "ip";
      reason: "cooldown" | "window";
    };

const CONFIG: RateLimitConfig = {
  cooldownSeconds: 60,
  windowSeconds: 15 * 60,
  maxRequestsPerEmail: 5,
  maxRequestsPerIp: 20,
};

function getHmacKey(prefix: "magic-link:email" | "magic-link:ip", identifier: string): string {
  const secret = process.env.AUTH_SECRET?.trim() || "fallback-secret-for-tests-only-never-in-prod";
  return crypto.createHmac("sha256", secret).update(`${prefix}:${identifier}`).digest("hex");
}

// Fallback mémoire EXCLUSIVEMENT réservé aux environnements DEV / TEST
type MemoryBucket = {
  windowStartMs: number;
  count: number;
  lastRequestMs: number;
};

type MemoryStore = {
  byEmail: Map<string, MemoryBucket>;
  byIp: Map<string, MemoryBucket>;
};

function getMemoryStore(): MemoryStore {
  const g = globalThis as unknown as { __myExamsMagicLinkRateLimit?: MemoryStore };
  if (!g.__myExamsMagicLinkRateLimit) {
    g.__myExamsMagicLinkRateLimit = { byEmail: new Map(), byIp: new Map() };
  }
  return g.__myExamsMagicLinkRateLimit;
}

function checkMemoryBucket(
  map: Map<string, MemoryBucket>,
  key: string,
  nowMs: number,
  maxRequests: number,
  hasCooldown: boolean
): { allowed: true } | { allowed: false; retryAfterSeconds: number; reason: "cooldown" | "window" } {
  const windowMs = CONFIG.windowSeconds * 1000;
  const cooldownMs = CONFIG.cooldownSeconds * 1000;

  const existing = map.get(key);

  if (!existing || nowMs - existing.windowStartMs > windowMs) {
    map.set(key, { windowStartMs: nowMs, count: 1, lastRequestMs: nowMs });
    return { allowed: true };
  }

  if (hasCooldown) {
    const timeSinceLast = nowMs - existing.lastRequestMs;
    if (timeSinceLast < cooldownMs) {
      return {
        allowed: false,
        reason: "cooldown",
        retryAfterSeconds: Math.max(1, Math.ceil((cooldownMs - timeSinceLast) / 1000)),
      };
    }
  }

  if (existing.count >= maxRequests) {
    const timeSinceWindowStart = nowMs - existing.windowStartMs;
    return {
      allowed: false,
      reason: "window",
      retryAfterSeconds: Math.max(1, Math.ceil((windowMs - timeSinceWindowStart) / 1000)),
    };
  }

  existing.count += 1;
  existing.lastRequestMs = nowMs;
  return { allowed: true };
}

/**
 * Mutation atomique dans MongoDB via transaction interactive avec snapshot isolation.
 * Garantit l'absence totale de race condition lors des requêtes simultanées.
 */
async function checkPersistentBucket(
  key: string,
  nowMs: number,
  maxRequests: number,
  hasCooldown: boolean
): Promise<{ allowed: true } | { allowed: false; retryAfterSeconds: number; reason: "cooldown" | "window" }> {
  const windowMs = CONFIG.windowSeconds * 1000;
  const cooldownMs = CONFIG.cooldownSeconds * 1000;
  const now = new Date(nowMs);

  // Purge opportuniste bornée (5 % des requêtes) pour éviter la croissance indéfinie
  if (Math.random() < 0.05) {
    prisma.magicLinkRateLimit.deleteMany({
      where: { expiresAt: { lt: now } },
    }).catch(() => {});
  }

  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      return await prisma.$transaction(
        async (tx) => {
          const existing = await tx.magicLinkRateLimit.findUnique({
            where: { key },
          });

          if (!existing || existing.expiresAt.getTime() <= nowMs) {
            // Nouveau créneau
            await tx.magicLinkRateLimit.upsert({
              where: { key },
              create: {
                key,
                count: 1,
                lastAttemptAt: now,
                expiresAt: new Date(nowMs + windowMs),
              },
              update: {
                count: 1,
                lastAttemptAt: now,
                expiresAt: new Date(nowMs + windowMs),
              },
            });
            return { allowed: true as const };
          }

          // Contrôle de cooldown (applicable sur email)
          if (hasCooldown) {
            const timeSinceLast = nowMs - existing.lastAttemptAt.getTime();
            if (timeSinceLast < cooldownMs) {
              const retryAfterSeconds = Math.max(1, Math.ceil((cooldownMs - timeSinceLast) / 1000));
              return {
                allowed: false as const,
                reason: "cooldown" as const,
                retryAfterSeconds,
              };
            }
          }

          // Contrôle de quota sur la fenêtre de 15 minutes
          if (existing.count >= maxRequests) {
            const remainingWindowMs = existing.expiresAt.getTime() - nowMs;
            const retryAfterSeconds = Math.max(1, Math.ceil(remainingWindowMs / 1000));
            return {
              allowed: false as const,
              reason: "window" as const,
              retryAfterSeconds,
            };
          }

          // Requête autorisée : incrémentation atomique et mise à jour de lastAttemptAt
          await tx.magicLinkRateLimit.update({
            where: { key },
            data: {
              count: { increment: 1 },
              lastAttemptAt: now,
            },
          });

          return { allowed: true as const };
        },
        {
          maxWait: 5000,
          timeout: 10000,
        }
      );
    } catch (err: unknown) {
      const msg = (err as Error)?.message ?? "";
      const isWriteConflict = /write conflict|deadlock|WriteConflict/i.test(msg);
      if (isWriteConflict && attempt < 3) {
        await new Promise((resolve) => setTimeout(resolve, 25 * Math.pow(2, attempt)));
        continue;
      }
      throw err;
    }
  }

  throw new Error("Toutes les tentatives de transaction ont échoué par conflit d'écriture.");
}

/**
 * Nettoyage explicite des entrées de rate limiting expirées.
 */
export async function cleanupExpiredMagicLinkRateLimits(): Promise<number> {
  const result = await prisma.magicLinkRateLimit.deleteMany({
    where: { expiresAt: { lt: new Date() } },
  });
  return result.count;
}

export async function checkMagicLinkRateLimit(params: {
  email: string;
  ip?: string | null;
}): Promise<RateLimitResult> {
  const nowMs = Date.now();
  const normalizedEmail = params.email.trim().toLowerCase();
  const emailKey = getHmacKey("magic-link:email", normalizedEmail);

  let ipKey: string | null = null;
  if (params.ip?.trim()) {
    ipKey = getHmacKey("magic-link:ip", params.ip.trim());
  }

  try {
    // 1. Vérification atomique email (quota 5 / 15m + cooldown 60s)
    const emailResult = await checkPersistentBucket(emailKey, nowMs, CONFIG.maxRequestsPerEmail, true);
    if (!emailResult.allowed) {
      return { ...emailResult, scope: "email" };
    }

    // 2. Vérification atomique IP (quota 20 / 15m)
    if (ipKey) {
      const ipResult = await checkPersistentBucket(ipKey, nowMs, CONFIG.maxRequestsPerIp, false);
      if (!ipResult.allowed) {
        return { ...ipResult, scope: "ip" };
      }
    }

    return { allowed: true };
  } catch (error) {
    // En production : FAIL-CLOSED strict. Pas de fallback mémoire pouvant être contourné.
    if (process.env.NODE_ENV === "production") {
      console.error(
        "[magic-link-rate-limit] Incident rate limiting persistant en production (fail-closed) :",
        (error as Error).message
      );
      return {
        allowed: false,
        retryAfterSeconds: 60,
        scope: "email",
        reason: "window",
      };
    }

    // Hors production uniquement (DEV / TEST) : fallback mémoire
    console.warn(
      "[magic-link-rate-limit] Fallback mémoire utilisé hors production :",
      (error as Error).message
    );
    const store = getMemoryStore();

    const memEmailResult = checkMemoryBucket(
      store.byEmail,
      emailKey,
      nowMs,
      CONFIG.maxRequestsPerEmail,
      true
    );
    if (!memEmailResult.allowed) {
      return { ...memEmailResult, scope: "email" };
    }

    if (ipKey) {
      const memIpResult = checkMemoryBucket(
        store.byIp,
        ipKey,
        nowMs,
        CONFIG.maxRequestsPerIp,
        false
      );
      if (!memIpResult.allowed) {
        return { ...memIpResult, scope: "ip" };
      }
    }

    return { allowed: true };
  }
}
