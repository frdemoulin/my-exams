"use client";

import * as React from "react";
import { UserCheck } from "lucide-react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";

export function ImpersonateButton({ targetUserId }: { targetUserId: string }) {
  const { data: session } = useSession();
  const [isPending, startTransition] = React.useTransition();

  const canImpersonate = session?.user?.role === "ADMIN";
  const actorId = session?.actor?.id ?? session?.user?.id;
  const isSelf = actorId === targetUserId;
  const isActiveViewer = session?.impersonation?.viewerId === targetUserId;

  if (!canImpersonate || isSelf) {
    return null;
  }

  const handleImpersonation = () => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/admin/impersonation/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: targetUserId }),
        });
        const payload = (await response.json().catch(() => null)) as
          | { error?: string; redirectTo?: string }
          | null;

        if (!response.ok) {
          throw new Error(payload?.error || "Impossible de lancer la bascule utilisateur.");
        }

        toast.success("Bascule utilisateur activée");
        window.location.assign(payload?.redirectTo || "/dashboard");
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Impossible de lancer la bascule utilisateur."
        );
      }
    });
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="gap-1.5"
      disabled={isPending || isActiveViewer}
      onClick={handleImpersonation}
    >
      <UserCheck className="h-4 w-4" />
      {isActiveViewer ? "Vue active" : isPending ? "Bascule en cours..." : "Voir comme cet utilisateur"}
    </Button>
  );
}
