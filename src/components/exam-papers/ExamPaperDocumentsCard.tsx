'use client';

import type { ReactNode } from 'react';
import { ExternalLink, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
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
};

type LegalNoticeProps = {
  desktopContent: ReactNode;
  mobileContent: ReactNode;
  className?: string;
  label?: string;
};

const formatCorrectionType = (value?: string | null) => {
  if (!value) return 'PDF';
  const normalized = value.trim().toLowerCase();
  if (normalized === 'pdf') return 'PDF';
  if (normalized === 'video') return 'Vidéo';
  if (normalized === 'html') return 'Page web';
  return value.toUpperCase();
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
}: ExamPaperDocumentsCardProps) {
  return (
    <Card id="documents">
      <CardHeader>
        <CardTitle className="text-lg">Documents</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-3">
          {officialStatementUrl ? (
            <div className="flex items-center justify-between gap-4 rounded-lg border border-border p-3">
              <div className="flex-1 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-medium">Sujet officiel (PDF)</p>
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
                  Ouvrir le sujet (PDF)
                  {isExternalUrl(officialStatementUrl) && (
                    <ExternalLink className="ml-2 h-4 w-4" />
                  )}
                </a>
              </Button>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Sujet officiel non disponible pour le moment.
            </p>
          )}
        </div>

        <div className="space-y-3">
          {corrections.length > 0 ? (
            <div className="space-y-3">
              {corrections.map((correction, index) => {
                const isLastCorrection = index === corrections.length - 1;
                return (
                  <div
                    key={correction.id ?? `${correction.source}-${correction.url}`}
                    className="flex items-center justify-between rounded-lg border border-border p-3"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-medium">{correction.source}</p>
                        {isLastCorrection && (
                          <LegalNotice
                            className="w-full md:w-auto"
                            desktopContent={
                              <>
                                H&eacute;bergement et diffusion des corrections par leurs
                                &eacute;diteurs respectifs. Aucun h&eacute;bergement par My Exams.
                              </>
                            }
                            mobileContent={
                              <>
                                H&eacute;bergement et diffusion des corrections par leurs
                                &eacute;diteurs respectifs. Aucun h&eacute;bergement par My Exams.
                              </>
                            }
                          />
                        )}
                      </div>
                      {correction.author && (
                        <p className="text-sm text-muted-foreground">
                          Par {correction.author}
                        </p>
                      )}
                      {correction.quality && (
                        <div className="mt-1 flex gap-0.5">
                          {[...Array(correction.quality)].map((_, i) => (
                            <span key={i} className="text-yellow-500">
                              ⭐
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <Button size="sm" variant="success" asChild>
                      <a
                        href={correction.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Corrig&eacute; {correction.source} ({formatCorrectionType(correction.type)})
                        {isExternalUrl(correction.url) && (
                          <ExternalLink className="ml-2 h-4 w-4" />
                        )}
                      </a>
                    </Button>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Aucun corrig&eacute; r&eacute;f&eacute;renc&eacute; pour ce sujet.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
