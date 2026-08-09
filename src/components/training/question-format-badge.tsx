import { Badge } from "@/components/ui/badge";
import {
  getQuestionFormatDefinition,
  type Question,
  type QuestionFormatCode,
} from "@/core/questions";
import { cn } from "@/lib/utils";

type QuestionFormatBadgeProps = {
  question?: Pick<Question, "format"> | null;
  format?: QuestionFormatCode | null;
  className?: string;
};

export function QuestionFormatBadge({
  question,
  format,
  className,
}: QuestionFormatBadgeProps) {
  const resolvedFormat = format ?? question?.format;

  if (!resolvedFormat) {
    return null;
  }

  const definition = getQuestionFormatDefinition(resolvedFormat);

  return (
    <Badge
      variant="outline"
      className={cn(
        "border-brand/30 bg-brand-soft/10 text-heading",
        !definition.isUness && "border-slate-300 bg-slate-50 text-slate-800",
        className,
      )}
      data-testid="question-format-badge"
      title={definition.label}
    >
      {definition.displayLabel}
    </Badge>
  );
}
