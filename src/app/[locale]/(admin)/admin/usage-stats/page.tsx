import { Metadata } from "next";
import { redirect } from "next/navigation";

import getSession from "@/lib/auth/get-session";
import prisma from "@/lib/db/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Statistiques d'usage",
};

type CountItem = { label: string; count: number };

const normalizeCounts = (items: Record<string, number>): CountItem[] =>
  Object.entries(items)
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count);

const renderTable = (title: string, rows: CountItem[], emptyLabel = "Aucune donnée") => (
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
                {emptyLabel}
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

interface UsageStatsPageProps {
  searchParams?: {
    from?: string;
    to?: string;
  };
}

const parseDateInput = (value?: string) => {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) return null;
  return date;
};

const toDateInput = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const startOfDay = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

const endOfDay = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);

const UsageStatsPage = async ({ searchParams }: UsageStatsPageProps) => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/log-in");
  }

  const rawWindowDays = Number(process.env.USAGE_STATS_WINDOW_DAYS ?? "90");
  const defaultWindowDays =
    Number.isFinite(rawWindowDays) && rawWindowDays > 0 ? rawWindowDays : 90;
  const today = new Date();
  const parsedFrom = parseDateInput(searchParams?.from);
  const parsedTo = parseDateInput(searchParams?.to);
  const toDate = parsedTo ? endOfDay(parsedTo) : endOfDay(today);
  const fromDate = parsedFrom
    ? startOfDay(parsedFrom)
    : startOfDay(new Date(toDate.getTime() - defaultWindowDays * 24 * 60 * 60 * 1000));

  const [usageDailyStats, errorDailyStats] = await Promise.all([
    prisma.usageDailyStat.findMany({
      where: {
        date: { gte: fromDate, lte: toDate },
      },
    }),
    prisma.errorDailyStat.findMany({
      where: {
        date: { gte: fromDate, lte: toDate },
      },
    }),
  ]);

  const totalSearches = usageDailyStats
    .filter((stat) => stat.category === "SEARCH_TOTAL" && stat.label === "__all__")
    .reduce((acc, stat) => acc + stat.count, 0);
  const zeroResultCount = usageDailyStats
    .filter((stat) => stat.category === "SEARCH_ZERO" && stat.label === "__all__")
    .reduce((acc, stat) => acc + stat.count, 0);

  const byTerm = normalizeCounts(
    usageDailyStats
      .filter((stat) => stat.category === "SEARCH_TERM")
      .reduce<Record<string, number>>((acc, stat) => {
        acc[stat.label] = (acc[stat.label] || 0) + stat.count;
        return acc;
      }, {})
  );
  const byDiploma = normalizeCounts(
    usageDailyStats
      .filter((stat) => stat.category === "SEARCH_DIPLOMA")
      .reduce<Record<string, number>>((acc, stat) => {
        acc[stat.label] = (acc[stat.label] || 0) + stat.count;
        return acc;
      }, {})
  );
  const bySubject = normalizeCounts(
    usageDailyStats
      .filter((stat) => stat.category === "SEARCH_SUBJECT")
      .reduce<Record<string, number>>((acc, stat) => {
        acc[stat.label] = (acc[stat.label] || 0) + stat.count;
        return acc;
      }, {})
  );
  const bySession = normalizeCounts(
    usageDailyStats
      .filter((stat) => stat.category === "SEARCH_SESSION")
      .reduce<Record<string, number>>((acc, stat) => {
        acc[stat.label] = (acc[stat.label] || 0) + stat.count;
        return acc;
      }, {})
  );

  const pdf404Count = errorDailyStats
    .filter((stat) => stat.category === "PDF_404" && stat.label === "__all__")
    .reduce((acc, stat) => acc + stat.count, 0);
  const slowApiStats = errorDailyStats.filter(
    (stat) => stat.category === "API_SLOW"
  );
  const slowApiCount = slowApiStats
    .filter((stat) => stat.label === "__all__")
    .reduce((acc, stat) => acc + stat.count, 0);
  const slowApiDurationTotal = slowApiStats
    .filter((stat) => stat.label === "__all__")
    .reduce((acc, stat) => acc + (stat.totalDurationMs ?? 0), 0);
  const avgSlowApiDuration =
    slowApiCount > 0 ? Math.round(slowApiDurationTotal / slowApiCount) : 0;
  const slowApiByRoute = normalizeCounts(
    slowApiStats
      .filter((stat) => stat.label !== "__all__")
      .reduce<Record<string, number>>((acc, stat) => {
        acc[stat.label] = (acc[stat.label] || 0) + stat.count;
        return acc;
      }, {})
  );

  return (
    <div className="w-full space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold text-heading">Statistiques d&apos;usage</h1>
        <p className="text-sm text-muted-foreground">
          Période analysée : {toDateInput(fromDate)} → {toDateInput(toDate)} (recherches, erreurs et latences).
        </p>
        <form className="mt-3 flex flex-wrap items-end gap-2" method="get">
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground" htmlFor="from">
              Du
            </label>
            <input
              id="from"
              name="from"
              type="date"
              defaultValue={toDateInput(fromDate)}
              className="h-9 rounded-base border border-default bg-neutral-primary-soft px-3 text-sm text-body shadow-xs focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground" htmlFor="to">
              Au
            </label>
            <input
              id="to"
              name="to"
              type="date"
              defaultValue={toDateInput(toDate)}
              className="h-9 rounded-base border border-default bg-neutral-primary-soft px-3 text-sm text-body shadow-xs focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
          <Button type="submit" size="sm">
            Filtrer
          </Button>
        </form>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Recherches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-heading">{totalSearches}</div>
            <p className="text-xs text-muted-foreground">Nombre total de recherches</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Recherches sans résultat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-heading">{zeroResultCount}</div>
            <p className="text-xs text-muted-foreground">À analyser / enrichir</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Erreurs PDF</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-heading">{pdf404Count}</div>
            <p className="text-xs text-muted-foreground">Fichiers introuvables (404)</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div>{renderTable("Top recherches", byTerm, "Aucune recherche")}</div>
        <div>{renderTable("Par diplôme", byDiploma)}</div>
        <div>{renderTable("Par matière", bySubject)}</div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div>{renderTable("Par session", bySession)}</div>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Latences élevées</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-3 flex items-center justify-between text-sm text-muted-foreground">
              <span>{slowApiCount} appels lents détectés</span>
              <span>Durée moyenne : {avgSlowApiDuration} ms</span>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs uppercase text-heading">Route</TableHead>
                  <TableHead className="text-right text-xs uppercase text-heading">Occurrences</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {slowApiByRoute.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={2} className="text-center text-muted-foreground">
                      Aucune latence détectée.
                    </TableCell>
                  </TableRow>
                ) : (
                  slowApiByRoute.slice(0, 20).map((row) => (
                    <TableRow key={row.label}>
                      <TableCell className="text-sm text-body">{row.label}</TableCell>
                      <TableCell className="text-right text-sm font-semibold text-heading">
                        {row.count}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UsageStatsPage;
