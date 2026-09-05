import { Metadata } from "next";
import { redirect } from "next/navigation";
import getSession from "@/lib/auth/get-session";
import { getSessionEffectiveUserId } from "@/lib/auth/session";
import {
  getSafeCallbackUrl,
  resolvePostAuthenticationDestination,
} from "@/core/academic-enrollment";
import { LogIn } from "./_components/log-in";

export const metadata: Metadata = {
  title: "Connexion",
  robots: {
    index: false,
    follow: false,
  },
};

type LogInPageProps = {
  searchParams: Promise<{
    callbackUrl?: string | string[];
    error?: string | string[];
  }>;
};

const LogInPage = async ({ searchParams }: LogInPageProps) => {
  const session = await getSession();
  const { callbackUrl, error } = await searchParams;
  const safeCallbackPath = getSafeCallbackUrl(callbackUrl) ?? "/";

  if (session?.user) {
    const effectiveUserId = getSessionEffectiveUserId(session);
    if (effectiveUserId) {
      const { destination } = await resolvePostAuthenticationDestination({
        userId: effectiveUserId,
        callbackUrl: safeCallbackPath,
      });
      redirect(destination);
    }
    redirect(safeCallbackPath);
  }

  const rawError = Array.isArray(error) ? error[0] : error;
  let initialErrorMessage: string | null = null;

  if (rawError === "OAuthAccountNotLinked") {
    initialErrorMessage =
      "Un compte existe déjà avec cette adresse. Connectez-vous avec la méthode utilisée initialement.";
  } else if (rawError) {
    initialErrorMessage = "Une erreur est survenue lors de la connexion. Veuillez réessayer.";
  }

  return (
    <LogIn
      callbackPath={safeCallbackPath}
      initialErrorMessage={initialErrorMessage}
    />
  );
};

export default LogInPage;
