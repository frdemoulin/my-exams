"use client";

import { MathContent } from "@/components/training/math-content";
import {
  formatSharedQuestionGroupTitle,
  formatSharedQuestionRange,
} from "@/core/questions";

export type SharedQuestionGroupPanelProps = {
  questionNumbers: readonly number[] | number[];
  title?: string | null;
  sharedStatement: string;
  sharedMedia?: {
    src: string;
    alt?: string | null;
  } | null;
  hideSharedMedia?: boolean;
};

export function SharedQuestionGroupPanel({
  questionNumbers,
  title,
  sharedStatement,
  sharedMedia,
  hideSharedMedia = false,
}: SharedQuestionGroupPanelProps) {
  const rangeLabel = formatSharedQuestionRange(questionNumbers);
  const thematicTitle = formatSharedQuestionGroupTitle(title);

  return (
    <div
      data-testid="shared-question-group-panel"
      className="rounded-xl border border-brand/15 bg-brand-soft/10 p-4 text-sm text-heading space-y-2"
    >
      {rangeLabel ? (
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {rangeLabel}
        </p>
      ) : null}
      {thematicTitle ? (
        <p className="text-sm font-semibold text-heading">
          {thematicTitle}
        </p>
      ) : null}
      <div className="leading-6">
        <MathContent value={sharedStatement} blockMathVariant="compact" />
      </div>
      {sharedMedia && !hideSharedMedia ? (
        <div className="overflow-hidden rounded-lg border border-border bg-background/50 p-2 flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={sharedMedia.src}
            alt={sharedMedia.alt ?? "Donnée commune"}
            className="max-h-[300px] w-auto object-contain rounded-md"
          />
        </div>
      ) : null}
    </div>
  );
}
