import { Metadata } from "next";
import { redirect } from "next/navigation";

import getSession from "@/lib/auth/get-session";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

  return (
    <div className="w-full space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold text-heading">Statistiques Umami</h1>
        <p className="text-sm text-muted-foreground">
          Tableau de bord externe (Umami) intégré dans l&apos;admin.
        </p>
      </div>

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
