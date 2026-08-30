"use client";

import Link from "next/link";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { History, Eye, CheckCircle2, RotateCcw, ExternalLink } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { HealthColleProgressItem } from "@/core/health-mock-exam/health-mock-exam.types";

type HealthColleHistoryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  colleTitle: string;
  courseUnitId: string;
  progressItem: HealthColleProgressItem | null;
  onRestart: () => void;
};

function formatElapsedTime(elapsedSeconds: number) {
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function formatScore(score: number): string {
  if (Number.isInteger(score)) {
    return score.toString();
  }
  return score.toFixed(2).replace(".", ",");
}

export function HealthColleHistoryModal({
  isOpen,
  onClose,
  colleTitle,
  courseUnitId,
  progressItem,
  onRestart,
}: HealthColleHistoryModalProps) {
  if (!progressItem) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl sm:max-w-3xl w-[95vw] max-h-[85vh] overflow-y-auto">
        <DialogHeader className="space-y-1">
          <div className="flex items-center gap-2 text-brand">
            <History className="h-5 w-5" aria-hidden="true" />
            <DialogTitle className="text-lg font-bold text-heading">
              Historique des tentatives
            </DialogTitle>
          </div>
          <DialogDescription className="text-xs text-muted-foreground">
            {colleTitle} · {progressItem.attempts.length} tentative{progressItem.attempts.length > 1 ? "s" : ""} terminée{progressItem.attempts.length > 1 ? "s" : ""}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-3">
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-neutral-secondary-soft text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-3 sm:px-4 py-3 font-semibold">Date</th>
                  <th className="px-3 sm:px-4 py-3 font-semibold text-center">Score</th>
                  <th className="px-3 sm:px-4 py-3 font-semibold text-center">Résultat</th>
                  <th className="px-3 sm:px-4 py-3 font-semibold text-center">Durée</th>
                  <th className="px-3 sm:px-4 py-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {progressItem.attempts.map((attempt, idx) => {
                  const isBest = progressItem.bestAttempt?.id === attempt.id;
                  const isLatest = idx === 0;
                  const attemptDate = new Date(attempt.submittedAt);
                  const formattedDate = format(attemptDate, "d MMM yyyy · HH:mm", {
                    locale: fr,
                  });
                  const bilanHref = `/sante/ue/${courseUnitId}/colles/${progressItem.colleSlug}/resultats/${attempt.id}`;
                  const correctionHref = `/sante/ue/${courseUnitId}/colles/${progressItem.colleSlug}/resultats/${attempt.id}/correction`;

                  return (
                    <tr
                      key={attempt.id}
                      className="hover:bg-neutral-secondary-soft/30 transition-colors"
                    >
                      <td className="px-3 sm:px-4 py-3 align-middle">
                        <div className="space-y-1">
                          <p className="font-medium text-heading whitespace-nowrap">
                            {formattedDate}
                          </p>
                          <div className="flex items-center gap-1.5">
                            {isLatest ? (
                              <Badge variant="outline" className="text-[10px] px-1 py-0">
                                Dernière
                              </Badge>
                            ) : null}
                            {isBest ? (
                              <Badge className="bg-emerald-600 text-white text-[10px] px-1 py-0">
                                Meilleur score
                              </Badge>
                            ) : null}
                          </div>
                        </div>
                      </td>
                      <td className="px-3 sm:px-4 py-3 align-middle text-center font-medium text-heading whitespace-nowrap">
                        {formatScore(attempt.score)} / {attempt.maxScore}
                      </td>
                      <td className="px-3 sm:px-4 py-3 align-middle text-center font-bold text-heading whitespace-nowrap">
                        <span
                          className={
                            attempt.percentage >= 80
                              ? "text-emerald-700 dark:text-emerald-400"
                              : attempt.percentage < 60
                                ? "text-rose-700 dark:text-rose-400"
                                : "text-heading"
                          }
                        >
                          {attempt.percentage} %
                        </span>
                      </td>
                      <td className="px-3 sm:px-4 py-3 align-middle text-center text-muted-foreground whitespace-nowrap">
                        {formatElapsedTime(attempt.elapsedSeconds)}
                      </td>
                      <td className="px-3 sm:px-4 py-3 align-middle text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          <Button asChild size="sm" variant="outline" className="h-7 text-xs px-2">
                            <Link href={bilanHref}>
                              Bilan
                            </Link>
                          </Button>
                          <Button asChild size="sm" variant="default" className="h-7 text-xs px-2 gap-1">
                            <Link href={correctionHref}>
                              Correction
                            </Link>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between pt-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                onClose();
                onRestart();
              }}
              className="gap-1.5 text-xs"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Recommencer la colle
            </Button>

            <Button type="button" variant="ghost" size="sm" onClick={onClose} className="text-xs">
              Fermer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
