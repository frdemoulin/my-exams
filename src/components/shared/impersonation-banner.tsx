'use client';

import { useTransition } from 'react';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';

import { Button } from '@/components/ui/button';

export function ImpersonationBanner() {
  const { data: session } = useSession();
  const [isPending, startTransition] = useTransition();
  const impersonation = session?.impersonation;

  if (!impersonation?.isActive) {
    return null;
  }

  const actorLabel =
    impersonation.actorName || session?.actor?.email || 'Admin';
  const viewerLabel =
    impersonation.viewerName ||
    impersonation.viewerEmail ||
    impersonation.viewerId;

  const stopImpersonation = () => {
    startTransition(async () => {
      try {
        const response = await fetch('/api/admin/impersonation/stop', {
          method: 'POST',
        });
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;

        if (!response.ok) {
          throw new Error(
            payload?.error || 'Impossible de quitter la bascule utilisateur.'
          );
        }

        window.location.assign(
          `${window.location.pathname}${window.location.search}${window.location.hash}`
        );
      } catch (error) {
        toast.error(
          error instanceof Error
            ? error.message
            : 'Impossible de quitter la bascule utilisateur.'
        );
      }
    });
  };

  return (
    <div className="border-b border-amber-300 bg-amber-50 px-4 py-2 text-sm text-amber-950">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 text-center">
        <p className="leading-6">
          Mode bascule actif. <span className="font-semibold">{actorLabel}</span>{' '}
          visualise l&apos;interface de{' '}
          <span className="font-semibold">{viewerLabel}</span>.
        </p>
        <Button
          type="button"
          size="sm"
          variant="outline"
          disabled={isPending}
          onClick={stopImpersonation}
        >
          {isPending ? 'Sortie...' : 'Quitter la bascule'}
        </Button>
      </div>
    </div>
  );
}
