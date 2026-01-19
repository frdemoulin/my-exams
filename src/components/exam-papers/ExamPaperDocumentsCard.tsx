'use client';

import type { ReactNode } from 'react';
import { ExternalLink, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CorrectionLinkCard } from '@/components/corrections/CorrectionLinkCard';
import { isExternalUrl } from '@/lib/utils';

export type ExamPaperCorrectionLink = {
  id?: string;
  source: string;
  url: string;
  type?: string | null;
  quality?: number | null;
  author?: string | null;
};

type ExamPaperDocumentsCardProps = {
  officialStatementUrl: string | null;
  corrections: ExamPaperCorrectionLink[];
  exerciseStatements?: Array<{
    exerciseNumber: number;
    label?: string | null;
    url: string;
  }>;
  exerciseCorrections?: Array<{
    exerciseNumber: number;
    label?: string | null;
    corrections: ExamPaperCorrectionLink[];
  }>;
  statementLabel?: string;
  emptyStatementLabel?: string;
  emptyCorrectionsLabel?: string;
  statementAnchorId?: string;
  correctionsAnchorId?: string;
};

type LegalNoticeProps = {
  desktopContent: ReactNode;
  mobileContent: ReactNode;
  className?: string;
  label?: string;
};

function LegalNotice({ label, desktopContent, mobileContent, className }: LegalNoticeProps) {
  return (
    <div className={className}>
      <div className="hidden md:inline-flex">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground"
                aria-label={label ?? 'Information légale'}
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-fg-brand">
                  <Info className="h-3 w-3" aria-hidden="true" />
                </span>
                {label ? <span>{label}</span> : null}
              </button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs text-xs font-normal leading-relaxed">
              {desktopContent}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="inline-flex items-start gap-1 text-xs text-muted-foreground md:hidden">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-fg-brand">
          <Info className="h-3 w-3" aria-hidden="true" />
        </span>
        <span>{mobileContent}</span>
      </div>
    </div>
  );
}

export function ExamPaperDocumentsCard({
  officialStatementUrl,
  corrections,
  exerciseStatements,
  exerciseCorrections,
  statementLabel = 'Sujet officiel (PDF)',
  emptyStatementLabel = 'Sujet officiel non disponible pour le moment.',
  emptyCorrectionsLabel = 'Pas encore de correction pour ce sujet.',
  statementAnchorId = 'documents-statement',
  correctionsAnchorId = 'documents-corrections',
}: ExamPaperDocumentsCardProps) {
  const hasExerciseStatements = Boolean(exerciseStatements && exerciseStatements.length > 0);
  const hasExerciseCorrections = Boolean(exerciseCorrections && exerciseCorrections.length > 0);

  return (
    <Card id="documents">
      <CardHeader>
        <CardTitle className="text-lg">Documents</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {officialStatementUrl ? (
            <div
              id={statementAnchorId}
              className="flex flex-col gap-2 scroll-mt-24 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex-1 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-medium">{statementLabel}</p>
                  <LegalNotice
                    className="w-full md:w-auto"
                    desktopContent={
                      <>
                        Document officiel d&apos;examen, diffus&eacute; &agrave; l&apos;identique
                        (non modifi&eacute;). Source institutionnelle : autorit&eacute;
                        acad&eacute;mique / minist&egrave;re comp&eacute;tent.
                      </>
                    }
                    mobileContent={
                      <>Sujet officiel d&apos;examen – document original non modifi&eacute;.</>
                    }
                  />
                </div>
              </div>
              <Button size="sm" asChild>
                <a href={officialStatementUrl} target="_blank" rel="noopener noreferrer">
                  Ouvrir le sujet
                  {isExternalUrl(officialStatementUrl) && (
                    <ExternalLink className="ml-2 h-4 w-4" />
                  )}
                </a>
              </Button>
            </div>
          ) : hasExerciseStatements ? (
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-medium">Énoncés par exercice (PDF)</p>
                <LegalNotice
                  className="w-full md:w-auto"
                  desktopContent={
                    <>
                      Documents officiels d&apos;examen, diffus&eacute;s &agrave; l&apos;identique
                      (non modifi&eacute;s). Source institutionnelle : autorit&eacute;
                      acad&eacute;mique / minist&egrave;re comp&eacute;tent.
                    </>
                  }
                  mobileContent={
                    <>Documents officiels d&apos;examen – originaux non modifi&eacute;s.</>
                  }
                />
              </div>
              <div className="divide-y divide-border">
                {exerciseStatements?.map((statement) => (
                  <div
                    key={`${statement.exerciseNumber}-${statement.url}`}
                    className="flex flex-col gap-2 py-3 md:flex-row md:items-center md:justify-between"
                  >
                    <p className="text-sm font-medium">
                      Exercice {statement.exerciseNumber}
                      {statement.label ? ` — ${statement.label}` : ''}
                    </p>
                    <Button size="sm" asChild>
                      <a href={statement.url} target="_blank" rel="noopener noreferrer">
                        Ouvrir l&apos;énoncé
                        {isExternalUrl(statement.url) && (
                          <ExternalLink className="ml-2 h-4 w-4" />
                        )}
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              {emptyStatementLabel}
            </p>
          )}
        </div>

        <div className="space-y-3">
          {corrections.length > 0 ? (
            <div id={correctionsAnchorId} className="divide-y divide-border scroll-mt-24">
              {corrections.map((correction) => (
                <CorrectionLinkCard
                  key={correction.id ?? `${correction.source}-${correction.url}`}
                  correction={correction}
                />
              ))}
            </div>
          ) : hasExerciseCorrections ? (
            <div className="divide-y divide-border">
              {exerciseCorrections?.map((group) => (
                <div key={group.exerciseNumber} className="space-y-3 py-3">
                  <p className="text-sm font-medium">
                    Exercice {group.exerciseNumber}
                    {group.label ? ` — ${group.label}` : ''}
                  </p>
                  <div className="divide-y divide-border">
                    {group.corrections.map((correction) => (
                      <CorrectionLinkCard
                        key={correction.id ?? `${group.exerciseNumber}-${correction.source}-${correction.url}`}
                        correction={correction}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              {emptyCorrectionsLabel}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
