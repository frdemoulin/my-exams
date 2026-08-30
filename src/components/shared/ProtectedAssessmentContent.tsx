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

  return (
    <div className={cn('relative w-full', containerClassName)}>
      {/* Contenu protégé affiché à l'écran, masqué en @media print */}
      <div className={cn('protected-assessment-content relative w-full', className)}>
        {/* Filigrane discret : pointer-events none, non obstructif */}
        {normalizedWatermark ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden opacity-[0.04] dark:opacity-[0.06]"
          >
            <div className="flex h-full w-full flex-wrap items-center justify-around gap-x-16 gap-y-24 p-6 font-mono text-xs font-bold uppercase tracking-[0.25em] text-foreground -rotate-12">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="whitespace-nowrap">
                  MY EXAMS · USAGE PERSONNEL · {normalizedWatermark}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {/* Contenu effectif */}
        <div className="relative z-10">{children}</div>
      </div>

      {/* Message standardisé affiché exclusivement lors d'un print/export PDF */}
      <div className="protected-assessment-print-notice" aria-hidden="true">
        <p>L’impression et l’export de cette évaluation ne sont pas disponibles.</p>
      </div>
    </div>
  );
}
