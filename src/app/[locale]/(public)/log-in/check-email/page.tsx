import Link from "next/link";
import { redirect } from "next/navigation";
import { Metadata } from "next";

import getSession from "@/lib/auth/get-session";
import { APP_NAME } from "@/config/app";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Vérifie ta boîte mail",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function CheckEmailPage() {
  const session = await getSession();

  if (session?.user) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-3 text-center">
          <div className="text-xl font-extrabold uppercase text-heading">{APP_NAME}</div>
          <CardTitle>Vérifie ta boîte mail</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-body">
            Si l’adresse est correcte, tu vas recevoir un email avec un lien de connexion. Pense à vérifier les spams.
          </p>
          <Button asChild variant="secondary" className="w-full font-semibold">
            <Link href="../">Retour</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
