import { redirect } from "next/navigation";
import { auth } from "@/lib/auth/auth";
import { getSessionEffectiveUserId } from "@/lib/auth/session";
import {
  getSafeCallbackUrl,
  resolvePostAuthenticationDestination,
} from "@/core/academic-enrollment";

type AuthContinuePageProps = {
  searchParams: Promise<{ callbackUrl?: string | string[] }>;
};

export default async function AuthContinuePage({ searchParams }: AuthContinuePageProps) {
  const session = await auth();
  const effectiveUserId = getSessionEffectiveUserId(session);
  const { callbackUrl } = await searchParams;
  const safeCallback = getSafeCallbackUrl(callbackUrl);

  if (!effectiveUserId) {
    redirect(
      `/log-in${safeCallback ? `?callbackUrl=${encodeURIComponent(safeCallback)}` : ""}`
    );
  }

  const { destination } = await resolvePostAuthenticationDestination({
    userId: effectiveUserId,
    callbackUrl: safeCallback,
  });

  redirect(destination);
}
