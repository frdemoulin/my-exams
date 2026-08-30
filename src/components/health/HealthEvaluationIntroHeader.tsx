import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  formatHealthEvaluationDuration,
  isSpecificInstruction,
  type HealthColleV1,
} from "@/core/health-colle";
import type { HealthMockExamPassage } from "@/core/health-mock-exam";

type HealthEvaluationIntroHeaderProps = {
  passage: HealthMockExamPassage;
  colle?: HealthColleV1 | null;
};

export function HealthEvaluationIntroHeader({
  passage,
  colle,
}: HealthEvaluationIntroHeaderProps) {
  const colleCode = colle?.code ?? (passage.slug ? passage.slug.toUpperCase() : null);
  const mainTitle = colle
    ? `${colle.code} — ${colle.title}`
    : colleCode
      ? `${colleCode} — ${passage.title}`
      : passage.title;

  const scopeLine =
    colle?.scopeLine ??
    (passage.sections.length > 1
      ? `${passage.sections.length} sections · ${passage.sections.map((s) => s.title).join(" + ")}`
      : null);

  const contentLine = colle?.contentLine ?? passage.description ?? null;

  const durationText = colle
    ? formatHealthEvaluationDuration(null, colle.durationMinutes)
    : formatHealthEvaluationDuration(passage.durationSeconds, passage.durationMinutes);

  const showInstructions = isSpecificInstruction(passage.instructions);

  return (
    <Card className="rounded-3xl border-border bg-card hover:bg-card">
      <CardHeader className="space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1.5 min-w-0 flex-1">
            <CardTitle className="text-xl font-bold text-heading">{mainTitle}</CardTitle>
            {scopeLine ? <p className="text-xs italic text-body">{scopeLine}</p> : null}
            {contentLine ? (
              <p className="text-xs text-muted-foreground">{contentLine}</p>
            ) : null}
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0 sm:justify-end">
            <Badge variant="secondary" className="w-fit">
              {passage.questionCount} questions
            </Badge>
            <Badge variant="outline" className="w-fit">
              {durationText}
            </Badge>
            <Badge
              variant="outline"
              className="font-semibold text-fg-brand border-brand/30 w-fit"
            >
              Notation UNESS
            </Badge>
          </div>
        </div>

        {showInstructions ? (
          <div className="rounded-xl border border-default bg-neutral-secondary-soft p-4 text-xs text-muted-foreground space-y-1.5">
            <p className="font-semibold text-heading text-sm">Consignes</p>
            <p className="text-body">{passage.instructions}</p>
          </div>
        ) : null}
      </CardHeader>
    </Card>
  );
}
