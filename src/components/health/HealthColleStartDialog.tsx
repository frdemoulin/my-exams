'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock3, FileCheck2, ShieldCheck, ArrowRight, RotateCcw } from 'lucide-react';
import type { HealthColleV1 } from '@/core/health-colle';

type HealthColleStartDialogProps = {
  colle: HealthColleV1 | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function HealthColleStartDialog({
  colle,
  open,
  onOpenChange,
}: HealthColleStartDialogProps) {
  if (!colle) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="font-semibold text-fg-brand border-brand/30">
              {colle.code}
            </Badge>
            <Badge variant="secondary">{colle.badgeLabel}</Badge>
            {colle.ecCode ? <Badge variant="outline">{colle.ecCode}</Badge> : null}
          </div>
          <DialogTitle className="text-xl font-bold text-heading">
            {colle.title}
          </DialogTitle>
          <DialogDescription asChild>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p className="italic font-medium text-body">
                {colle.scopeLine}
              </p>
              <p>
                {colle.contentLine}
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {colle.description ? (
            <p className="text-sm text-body">{colle.description}</p>
          ) : null}

          <div className="grid grid-cols-2 gap-3 rounded-xl border border-default bg-neutral-secondary-soft p-3 text-sm">
            <div className="flex items-center gap-2">
              <FileCheck2 className="h-4 w-4 text-fg-brand" aria-hidden="true" />
              <span>
                <strong className="text-heading">{colle.questionCount}</strong> questions
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-fg-brand" aria-hidden="true" />
              <span>
                Durée : <strong className="text-heading">{colle.durationLabel}</strong>
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-xl border border-default p-4 text-xs text-muted-foreground">
            <h4 className="font-semibold text-heading text-sm flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-fg-brand" aria-hidden="true" />
              Consignes d’épreuve
            </h4>
            <ul className="space-y-1.5 list-disc pl-4 text-body">
              <li>
                <strong className="text-heading">Chronomètre :</strong> Le décompte commence dès le clic sur « Démarrer ».
              </li>
              <li>
                <strong className="text-heading">Navigation libre :</strong> Vous pouvez naviguer librement entre les questions et modifier vos réponses avant la remise.
              </li>
              <li>
                <strong className="text-heading">Notation UNESS :</strong> Application du barème UNESS avec prise en compte des discordances sur les QRM.
              </li>
              <li>
                <strong className="text-heading">Correction :</strong> Accessible intégralement une fois l’épreuve remise.
              </li>
            </ul>
            <div className="pt-2 border-t border-default text-right">
              <a
                href="/sante/evaluations/comprendre"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-fg-brand hover:underline font-medium"
              >
                Première colle ? Comprendre les formats et la notation →
              </a>
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Annuler
          </Button>
          <Button className="gap-2" onClick={() => onOpenChange(false)}>
            Démarrer la colle
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
