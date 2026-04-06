import { Metadata } from "next";
import { redirect } from "next/navigation";
import { ExternalLink } from "lucide-react";

import getSession from "@/lib/auth/get-session";
import { getInternalOrigin, isExternalUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

export const metadata: Metadata = {
  title: "Statistiques Umami",
};

const UmamiStatsPage = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/log-in");
  }

  const shareUrl = process.env.UMAMI_SHARE_URL?.trim();
  const dashboardUrl = process.env.UMAMI_DASHBOARD_URL?.trim();
  const openUrl = dashboardUrl || shareUrl;
  const internalOrigin = getInternalOrigin();
  const openUrlIsExternal = isExternalUrl(openUrl, internalOrigin);

  return (
    <div className="w-full space-y-6 p-6">
      <AdminPageHeading
        title="Statistiques Umami"
        description="Tableau de bord analytique externe intégré dans l'administration via Umami."
      />

      {!shareUrl ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Configuration requise</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-body">
            <p>
              Définis <span className="font-semibold">UMAMI_SHARE_URL</span> pour
              afficher les statistiques dans l&apos;admin. Ce lien est disponible
              dans Umami (Share → Copy link).
            </p>
            {openUrl ? (
              <Button asChild>
                <a href={openUrl} target="_blank" rel="noreferrer">
                  Ouvrir Umami
                  {openUrlIsExternal && <ExternalLink className="ml-2 h-4 w-4" />}
                </a>
              </Button>
            ) : null}
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {openUrl ? (
            <div>
              <Button asChild>
                <a href={openUrl} target="_blank" rel="noreferrer">
                  Ouvrir Umami
                  {openUrlIsExternal && <ExternalLink className="ml-2 h-4 w-4" />}
                </a>
              </Button>
            </div>
          ) : null}
          <Card>
            <CardContent className="p-0">
              <iframe
                title="Statistiques Umami"
                src={shareUrl}
                className="h-[72vh] w-full rounded-base border border-default"
                loading="lazy"
              />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default UmamiStatsPage;
