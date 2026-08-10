import type { Metadata } from "next";

import { HealthExamInterfaceTutorial } from "@/components/health/HealthExamInterfaceTutorial";
import { PublicBreadcrumb } from "@/components/shared/public-breadcrumb";
import { PublicHeader } from "@/components/shared/public-header";
import { SiteFooter } from "@/components/shared/site-footer";

export const metadata: Metadata = {
  title: "S'entraîner à l'interface d'examen",
  description:
    "Mini-parcours pour découvrir les gestes du mode examen Santé et les formats UNESS.",
};

export default function HealthExamInterfaceTutorialPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 pb-16 pt-8">
        <PublicBreadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Santé", href: "/sante" },
            { label: "S'entraîner à l'interface d'examen" },
          ]}
        />
        <HealthExamInterfaceTutorial />
      </main>
      <SiteFooter />
    </div>
  );
}
