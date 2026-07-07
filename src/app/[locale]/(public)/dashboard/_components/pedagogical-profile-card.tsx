'use client';

import Link from 'next/link';
import { PencilLine } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { UserPedagogicalProfileContext } from '@/core/user/user-profile.types';

type PedagogicalProfileCardProps = {
  context: UserPedagogicalProfileContext;
};

export function PedagogicalProfileCard({
  context,
}: PedagogicalProfileCardProps) {
  return (
    <Card className="rounded-3xl border-border bg-card hover:bg-card">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <CardTitle className="text-xl text-heading">
              Profil pédagogique
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {context.summary.title}
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/dashboard/profil-pedagogique">
              <PencilLine className="h-4 w-4" />
              Modifier
            </Link>
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {context.summary.focusBadges.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {context.summary.focusBadges.map((badge) => (
              <Badge key={badge} variant="secondary">
                {badge}
              </Badge>
            ))}
          </div>
        ) : null}

        <div className="flex justify-end">
          <Button asChild variant="ghost">
            <Link href={context.summary.primaryHref}>{context.summary.primaryLabel}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
