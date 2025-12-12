declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, unknown>) => void };
  }
}

/**
 * Helper pour tracer un événement Umami côté client.
 */
export function trackEvent(event: string, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (typeof window.umami?.track === "function") {
    window.umami.track(event, data);
  }
}

/**
 * Helper pour tracer une page custom (si besoin).
 */
export function trackPageview(url?: string) {
  if (typeof window === "undefined") return;
  if (typeof window.umami?.track === "function") {
    window.umami.track("pageview", url ? { url } : undefined);
  }
}
