"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Play, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";

type HealthMockExamActionButtonProps = {
  courseUnitId: string;
  examSlug: string;
  hasCurrentAttempt: boolean;
  hasPreviousAttempt: boolean;
};

export function HealthMockExamActionButton({
  courseUnitId,
  examSlug,
  hasCurrentAttempt,
  hasPreviousAttempt,
}: HealthMockExamActionButtonProps) {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const callbackUrl = `/sante/ue/${courseUnitId}/examens-blancs/${examSlug}`;
  const label = hasCurrentAttempt ? "Reprendre" : hasPreviousAttempt ? "Recommencer" : "Commencer";

  const startOrResume = async () => {
    setIsPending(true);

    try {
      const response = await fetch(
        `/api/health/mock-exams/${courseUnitId}/${encodeURIComponent(examSlug)}/attempt`,
        { method: "POST" },
      );

      if (response.status === 401) {
        router.push(`/log-in?callbackUrl=${encodeURIComponent(callbackUrl)}`);
        return;
      }

      if (!response.ok) {
        throw new Error("Impossible de démarrer l'examen blanc.");
      }

      router.push(callbackUrl);
    } catch {
      setIsPending(false);
    }
  };

  return (
    <Button type="button" onClick={() => void startOrResume()} disabled={isPending}>
      {hasPreviousAttempt && !hasCurrentAttempt ? (
        <RotateCcw className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Play className="h-4 w-4" aria-hidden="true" />
      )}
      {isPending ? "Ouverture..." : label}
    </Button>
  );
}
