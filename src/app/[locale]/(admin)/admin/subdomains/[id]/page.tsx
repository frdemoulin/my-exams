import { Metadata } from "next";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { notFound } from "next/navigation";

import { fetchSubdomainById } from "@/core/subdomain";
import prisma from "@/lib/db/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

export const metadata: Metadata = { title: "Détails du sous-domaine" };

interface SubdomainDetailPageProps {
  params: Promise<{ id: string }>;
}

const SubdomainDetailPage = async ({ params }: SubdomainDetailPageProps) => {
  const { id } = await params;
  const subdomain = await fetchSubdomainById(id);
  if (!subdomain) notFound();

  const themes = await prisma.theme.findMany({
    where: { subdomainIds: { has: id } },
    orderBy: { title: "asc" },
    select: { id: true, title: true, shortTitle: true },
  });

  return (
    <div className="w-full p-6">
      <AdminPageHeading
        title={`Détail du sous-domaine ${subdomain.title}`}
        description="Consulte les informations du sous-domaine et les thèmes qui lui sont rattachés."
        actions={
          <>
            <Button asChild variant="outline">
              <Link href="/admin/subdomains">Retour</Link>
            </Button>
            <Button asChild variant="warning" size="icon" aria-label="Éditer le sous-domaine">
              <Link href={`/admin/subdomains/${subdomain.id}/edit`}>
                <Pencil className="h-4 w-4" />
              </Link>
            </Button>
          </>
        }
      />
      <div className="grid gap-4 mt-6">
        <Card>
          <CardHeader className="mb-2">
            <CardTitle>Informations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <Info label="Titre" value={subdomain.title} />
              <Info label="Titre court" value={subdomain.shortTitle ?? "—"} />
              <Info label="Slug" value={subdomain.slug} />
              <Info label="Ordre" value={subdomain.order?.toString() ?? "—"} />
              <Info label="Matière" value={subdomain.subject?.longDescription ?? "—"} />
              <Info label="Domaine" value={subdomain.domain?.longDescription ?? "—"} />
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground">Statut</h3>
                <Badge variant={subdomain.isActive ? "default" : "secondary"}>
                  {subdomain.isActive ? "Actif" : "Inactif"}
                </Badge>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-sm font-semibold text-muted-foreground">Description</h3>
                <p className="text-sm whitespace-pre-line">
                  {subdomain.description ?? "—"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="mb-2">
            <CardTitle>Thèmes rattachés ({themes.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {themes.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Aucun thème n&apos;est encore rattaché à ce sous-domaine.
              </p>
            ) : (
              <ul className="list-disc space-y-1 pl-5 text-sm">
                {themes.map((theme) => (
                  <li key={theme.id}>
                    <Link
                      href={`/admin/themes/${theme.id}`}
                      className="hover:underline"
                    >
                      {theme.title}
                      {theme.shortTitle ? (
                        <span className="text-muted-foreground"> ({theme.shortTitle})</span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const Info = ({ label, value }: { label: string; value: string }) => (
  <div>
    <h3 className="text-sm font-semibold text-muted-foreground">{label}</h3>
    <p className="text-sm">{value}</p>
  </div>
);

export default SubdomainDetailPage;
