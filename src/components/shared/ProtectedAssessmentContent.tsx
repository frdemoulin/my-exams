import React from 'react';
import { cn } from '@/lib/utils';

export type ProtectedAssessmentContentProps = {
  children: React.ReactNode;
  watermarkCode?: string | null;
  className?: string;
  containerClassName?: string;
};

export function ProtectedAssessmentContent({
  children,
  watermarkCode,
  className,
  containerClassName,
}: ProtectedAssessmentContentProps) {
  const normalizedWatermark = watermarkCode?.trim() || null;
  const patternId = React.useId().replace(/:/g, '-');

  return (
    <div className={cn('relative w-full', containerClassName)}>
      {/* Contenu protégé affiché à l'écran, masqué en @media print */}
      <div className={cn('protected-assessment-content relative w-full', className)}>
        {/* Contenu effectif */}
        <div className="relative z-0">{children}</div>

        {/* Filigrane discret placé AU-DESSUS des cartes pédagogiques (z-10) avec pointer-events-none et user-select-none */}
        {normalizedWatermark ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 select-none overflow-hidden"
          >
            <svg
              className="h-full w-full opacity-[0.055] dark:opacity-[0.08] text-foreground"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
            >
              <defs>
                <pattern
                  id={`watermark-pattern-${patternId}`}
                  width="360"
                  height="180"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(-15)"
                >
                  <text
                    x="20"
                    y="60"
                    fill="currentColor"
                    fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
                    fontSize="11"
                    fontWeight="700"
                    letterSpacing="0.22em"
                  >
                    MY EXAMS · {normalizedWatermark}
                  </text>
                  <text
                    x="180"
                    y="150"
                    fill="currentColor"
                    fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
                    fontSize="11"
                    fontWeight="700"
                    letterSpacing="0.22em"
                  >
                    USAGE PERSONNEL · {normalizedWatermark}
                  </text>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#watermark-pattern-${patternId})`} />
            </svg>
          </div>
        ) : null}
      </div>

      {/* Message standardisé affiché exclusivement lors d'un print/export PDF */}
      <div className="protected-assessment-print-notice" aria-hidden="true">
        <p>L’impression et l’export de cette évaluation ne sont pas disponibles.</p>
      </div>
    </div>
  );
}
