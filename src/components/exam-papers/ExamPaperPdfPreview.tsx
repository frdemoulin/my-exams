'use client';

import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { isExternalUrl } from '@/lib/utils';

type ExamPaperPdfPreviewProps = {
  title?: string;
  pdfUrl: string | null;
  fallbackUrl?: string | null;
  emptyLabel?: string;
  fallbackLabel?: string;
  frameTitle?: string;
};

const buildPdfViewerUrl = (url: string) => {
  const viewerParams = 'toolbar=1&navpanes=0&view=FitH';
  return url.includes('#') ? `${url}&${viewerParams}` : `${url}#${viewerParams}`;
};

export function ExamPaperPdfPreview({
  title = 'Aperçu du sujet (PDF)',
  pdfUrl,
  fallbackUrl,
  emptyLabel = 'PDF non disponible pour le moment.',
  fallbackLabel = 'Consulter la source externe',
  frameTitle,
}: ExamPaperPdfPreviewProps) {
  const previewUrl = pdfUrl ? buildPdfViewerUrl(pdfUrl) : null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {previewUrl ? (
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <iframe
              title={frameTitle ?? 'Aperçu PDF'}
              src={previewUrl}
              className="h-[75vh] w-full"
            />
          </div>
        ) : fallbackUrl ? (
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>{emptyLabel}</p>
            <Button variant="outline" size="sm" asChild>
              <a href={fallbackUrl} target="_blank" rel="noopener noreferrer">
                {fallbackLabel}
                {isExternalUrl(fallbackUrl) && <ExternalLink className="ml-2 h-4 w-4" />}
              </a>
            </Button>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">{emptyLabel}</p>
        )}
      </CardContent>
    </Card>
  );
}
