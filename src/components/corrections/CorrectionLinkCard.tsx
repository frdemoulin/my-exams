'use client';

import { ExternalLink, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { isExternalUrl } from '@/lib/utils';

export type CorrectionLink = {
  id?: string;
  source: string;
  url: string;
  type?: string | null;
  quality?: number | null;
  author?: string | null;
};

const CORRECTION_LEGAL_NOTICE =
  'Hébergement et diffusion des corrections par leurs éditeurs respectifs. Aucun hébergement par My Exams.';

function CorrectionLegalNotice() {
  return (
    <>
      <div className="hidden md:inline-flex">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center"
                aria-label="Information légale"
              >
                <Info
                  className="h-5 w-5 shrink-0 rounded-full bg-blue-100 p-1 text-blue-700 dark:bg-gray-700 dark:text-blue-600"
                  aria-hidden="true"
                />
              </button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs text-xs font-normal leading-relaxed">
              {CORRECTION_LEGAL_NOTICE}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="inline-flex items-start gap-2 text-xs text-muted-foreground md:hidden">
        <Info
          className="h-5 w-5 shrink-0 rounded-full bg-blue-100 p-1 text-blue-700 dark:bg-gray-700 dark:text-blue-600"
          aria-hidden="true"
        />
        <span>{CORRECTION_LEGAL_NOTICE}</span>
      </div>
    </>
  );
}

export function CorrectionLinkCard({ correction }: { correction: CorrectionLink }) {
  const typeLabel = correction.type?.toUpperCase() || 'PDF';

  return (
    <div className="flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between">
      <div className="flex-1 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-medium">
            Corrigé {correction.source} ({typeLabel})
          </p>
          <CorrectionLegalNotice />
        </div>

        {correction.author ? (
          <p className="text-sm text-muted-foreground">Par {correction.author}</p>
        ) : null}
        {correction.quality ? (
          <div className="flex gap-0.5">
            {[...Array(correction.quality)].map((_, i) => (
              <span key={i} className="text-yellow-500">
                ⭐
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <Button size="sm" variant="success" asChild>
        <a href={correction.url} target="_blank" rel="noopener noreferrer">
          Ouvrir la correction
          {isExternalUrl(correction.url) ? <ExternalLink className="ml-2 h-4 w-4" /> : null}
        </a>
      </Button>
    </div>
  );
}
