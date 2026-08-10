import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";
import {
  editableQuestionFormatCodes,
  getQuestionFormatAdminLabel,
  questionFormatCodes,
  questionFormatRegistry,
  type QuestionFormatFamily,
  type QuestionFormatSupportStatus,
} from "@/core/questions/question-format";

export const metadata: Metadata = {
  title: "Formats de questions",
};

const familyLabels: Record<QuestionFormatFamily, string> = {
  QCM: "QCM",
  "open-answer": "Réponse ouverte",
  zone: "Zone",
  "script-concordance": "Concordance de script",
  "my-exams-extension": "Extension My Exams",
};

const supportStatusLabels: Record<QuestionFormatSupportStatus, string> = {
  supported: "Supporté",
  priority: "Prioritaire",
  planned: "Prévu",
  future: "Futur",
  extension: "Extension",
};

const supportStatusVariants: Record<
  QuestionFormatSupportStatus,
  "default" | "secondary" | "outline"
> = {
  supported: "default",
  priority: "secondary",
  planned: "outline",
  future: "outline",
  extension: "outline",
};

const yesNoLabel = (value: boolean) => value ? "Oui" : "Non";

export default function AdminQuestionFormatsPage() {
  const editableFormatCodes = new Set<string>(editableQuestionFormatCodes);
  const formats = questionFormatCodes.map((format) => questionFormatRegistry[format]);
  const supportedCount = formats.filter((format) => format.supportStatus === "supported").length;
  const editableCount = formats.filter((format) => editableFormatCodes.has(format.code)).length;
  const unessCount = formats.filter((format) => format.isUness).length;

  return (
    <div className="w-full p-6 space-y-6">
      <AdminPageHeading
        title="Formats de questions"
        description="Référentiel read-only des formats pédagogiques reconnus par My Exams, avec priorité au vocabulaire UNESS pour la santé."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Formats référencés</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{formats.length}</p>
            <p className="text-xs text-muted-foreground">{unessCount} formats UNESS</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Support moteur</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{supportedCount}</p>
            <p className="text-xs text-muted-foreground">Formats utilisables par le moteur global</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Éditables en admin</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{editableCount}</p>
            <p className="text-xs text-muted-foreground">Formats disponibles dans le formulaire actuel</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Règle de vocabulaire</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            QCM est une famille, pas un type parallèle. Dans l&apos;administration et les interfaces
            étudiant, le format précis doit être affiché quand il existe : QRU, QRM, QRP ou QRPL.
          </p>
          <p>
            Les formats sans équivalent UNESS, comme une future question d&apos;association, restent
            identifiés comme extensions My Exams.
          </p>
        </CardContent>
      </Card>

      <div className="overflow-hidden rounded-xl border border-border bg-background">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] text-sm">
            <thead className="border-b border-border bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Code</th>
                <th className="px-4 py-3 text-left font-semibold">Libellé</th>
                <th className="px-4 py-3 text-left font-semibold">Famille</th>
                <th className="px-4 py-3 text-left font-semibold">Moteur interne</th>
                <th className="px-4 py-3 text-left font-semibold">Statut</th>
                <th className="px-4 py-3 text-left font-semibold">UNESS</th>
                <th className="px-4 py-3 text-left font-semibold">Éditable admin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {formats.map((format) => (
                <tr key={format.code} className="hover:bg-muted/30">
                  <td className="px-4 py-3 font-semibold text-heading">{format.code}</td>
                  <td className="px-4 py-3">
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">
                        {getQuestionFormatAdminLabel(format.code)}
                      </p>
                      <p className="text-xs text-muted-foreground">{format.label}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">{familyLabels[format.family]}</td>
                  <td className="px-4 py-3">
                    <code className="rounded bg-muted px-2 py-1 text-xs">
                      {format.runtimeType}
                    </code>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={supportStatusVariants[format.supportStatus]}>
                      {supportStatusLabels[format.supportStatus]}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">{yesNoLabel(format.isUness)}</td>
                  <td className="px-4 py-3">
                    {yesNoLabel(editableFormatCodes.has(format.code))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
