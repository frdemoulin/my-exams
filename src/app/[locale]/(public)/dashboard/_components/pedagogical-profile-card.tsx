'use client';

import Link from 'next/link';
import { Lock } from 'lucide-react';

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
          <Badge variant="outline" className="gap-1.5 shrink-0 border-muted-foreground/30 text-muted-foreground py-1 px-2.5">
            <Lock className="h-3.5 w-3.5" />
            Niveau verrouillé pour l&apos;année
          </Badge>
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

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-border/50 text-xs text-muted-foreground">
          <p>
            Vous avez fait une erreur lors du choix de votre niveau ?{' '}
            <Link href="/contact" className="underline hover:text-foreground">
              Contactez-nous
            </Link>
            .
          </p>

          <Button asChild variant="ghost" size="sm" className="self-end sm:self-auto">
            <Link href={context.summary.primaryHref}>{context.summary.primaryLabel}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
