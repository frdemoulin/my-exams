'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { UserPlus } from 'lucide-react';
import type { ReactNode } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const STORAGE_KEYS = {
  exercise: 'my-exams:exercise-views',
  examPaper: 'my-exams:exam-paper-views',
} as const;

const DEFAULT_THRESHOLDS = {
  exercise: 2,
  examPaper: 1,
} as const;

type AccountContinuityCtaProps = {
  kind: keyof typeof STORAGE_KEYS;
  threshold?: number;
  className?: string;
};

export function AccountContinuityCta({
  kind,
  threshold,
  className,
}: AccountContinuityCtaProps) {
  const { data: session, status } = useSession();
  const [shouldShow, setShouldShow] = useState(false);
  const hasTracked = useRef(false);

  useEffect(() => {
    if (status === 'loading') return;
    if (session?.user) {
      setShouldShow(false);
      return;
    }
    if (hasTracked.current) return;
    hasTracked.current = true;

    try {
      const key = STORAGE_KEYS[kind];
      const rawValue = localStorage.getItem(key);
      const current = rawValue ? Number.parseInt(rawValue, 10) : 0;
      const nextValue = Number.isFinite(current) ? current + 1 : 1;
      localStorage.setItem(key, String(nextValue));
      const minViews = threshold ?? DEFAULT_THRESHOLDS[kind];
      setShouldShow(nextValue >= minViews);
    } catch {
      setShouldShow(false);
    }
  }, [kind, threshold, session?.user, status]);

  if (!shouldShow) return null;

  const headline =
    kind === 'exercise'
      ? 'Tu veux retrouver cet exercice plus tard ?'
      : 'Tu veux retrouver ce sujet plus tard ?';
  const copy: ReactNode = (
    <>
      Compte gratuit, sans obligation, pour reprendre l&agrave; o&ugrave; tu t&apos;es
      arr&ecirc;t&eacute;.
    </>
  );

  return (
    <Card className={cn('border-brand/20 bg-neutral-primary-soft', className)}>
      <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-fg-brand">
            <UserPlus className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-heading">{headline}</p>
            <p className="text-sm text-muted-foreground">{copy}</p>
          </div>
        </div>
        <Button asChild className="sm:shrink-0">
          <Link href="/log-in">Cr&eacute;er un compte gratuit</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
