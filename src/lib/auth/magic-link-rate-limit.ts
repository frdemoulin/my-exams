type RateLimitConfig = {
  cooldownSeconds: number;
  windowSeconds: number;
  maxRequestsPerEmail: number;
  maxRequestsPerIp: number;
};

type Bucket = {
  windowStartMs: number;
  count: number;
  lastRequestMs: number;
};

type RateLimitResult =
  | { allowed: true }
  | { allowed: false; retryAfterSeconds: number; scope: "email" | "ip"; reason: "cooldown" | "window" };

const CONFIG: RateLimitConfig = {
  cooldownSeconds: 60,
  windowSeconds: 15 * 60,
  maxRequestsPerEmail: 5,
  maxRequestsPerIp: 20,
};

type Store = {
  byEmail: Map<string, Bucket>;
  byIp: Map<string, Bucket>;
};

function getStore(): Store {
  const g = globalThis as unknown as { __myExamsMagicLinkRateLimit?: Store };
  if (!g.__myExamsMagicLinkRateLimit) {
    g.__myExamsMagicLinkRateLimit = { byEmail: new Map(), byIp: new Map() };
  }
  return g.__myExamsMagicLinkRateLimit;
}

function cleanupBucket(map: Map<string, Bucket>, key: string, nowMs: number) {
  const bucket = map.get(key);
  if (!bucket) return;

  const maxAgeMs = CONFIG.windowSeconds * 1000 * 2;
  if (nowMs - bucket.lastRequestMs > maxAgeMs) {
    map.delete(key);
  }
}

function checkAndUpdateBucket(
  map: Map<string, Bucket>,
  key: string,
  nowMs: number,
  maxRequests: number,
): { allowed: true } | { allowed: false; retryAfterSeconds: number; reason: "cooldown" | "window" } {
  cleanupBucket(map, key, nowMs);

  const existing = map.get(key);
  const windowMs = CONFIG.windowSeconds * 1000;
  const cooldownMs = CONFIG.cooldownSeconds * 1000;

  if (!existing) {
    map.set(key, { windowStartMs: nowMs, count: 1, lastRequestMs: nowMs });
    return { allowed: true };
  }

  const timeSinceLast = nowMs - existing.lastRequestMs;
  if (timeSinceLast < cooldownMs) {
    return {
      allowed: false,
      reason: "cooldown",
      retryAfterSeconds: Math.max(1, Math.ceil((cooldownMs - timeSinceLast) / 1000)),
    };
  }

  const timeSinceWindowStart = nowMs - existing.windowStartMs;
  if (timeSinceWindowStart > windowMs) {
    map.set(key, { windowStartMs: nowMs, count: 1, lastRequestMs: nowMs });
    return { allowed: true };
  }

  if (existing.count >= maxRequests) {
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

export function checkMagicLinkRateLimit(params: { email: string; ip?: string | null }): RateLimitResult {
  const nowMs = Date.now();
  const store = getStore();

  const emailKey = params.email.trim().toLowerCase();
  const ipKey = params.ip?.trim();

  const emailResult = checkAndUpdateBucket(store.byEmail, emailKey, nowMs, CONFIG.maxRequestsPerEmail);
  if (!emailResult.allowed) return { ...emailResult, scope: "email" };

  if (!ipKey) return { allowed: true };

  const ipResult = checkAndUpdateBucket(store.byIp, ipKey, nowMs, CONFIG.maxRequestsPerIp);
  if (!ipResult.allowed) return { ...ipResult, scope: "ip" };

  return { allowed: true };
}
