import { redirect } from "next/navigation";
import { Metadata } from "next";

import getSession from "@/lib/auth/get-session";
import { fetchUsageStats } from "@/core/stats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Statistiques de contenu",
};

const StatsPage = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/log-in");
  }

  const stats = await fetchUsageStats();

  const renderTable = (title: string, rows: Array<{ label: string; count: number }>) => (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-2/3 text-left text-xs uppercase text-heading">Libellé</TableHead>
              <TableHead className="text-right text-xs uppercase text-heading">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={2} className="text-center text-muted-foreground">
                  Aucune donnée
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row) => (
                <TableRow key={row.label}>
                  <TableCell className="text-sm text-body">{row.label}</TableCell>
                  <TableCell className="text-right text-sm font-semibold text-heading">{row.count}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );

  return (
    <div className="w-full space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold text-heading">Statistiques de contenu</h1>
        <p className="text-sm text-muted-foreground">Synthèse à partir des données en base (exercices, sujets, utilisateurs).</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Utilisateurs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-heading">{stats.totals.users}</div>
            <p className="text-xs text-muted-foreground">Comptes enregistrés</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Exercices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-heading">{stats.totals.exercises}</div>
            <p className="text-xs text-muted-foreground">Exercices indexés</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Sujets d&apos;examen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-heading">{stats.totals.examPapers}</div>
            <p className="text-xs text-muted-foreground">Sujets référencés</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-1">{renderTable("Répartition par diplôme", stats.byDiploma)}</div>
        <div className="lg:col-span-1">{renderTable("Répartition par matière", stats.bySubject)}</div>
        <div className="lg:col-span-1">{renderTable("Répartition par session", stats.byYear)}</div>
      </div>
    </div>
  );
};

export default StatsPage;
