import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export type UniverseHeroBadge = {
  label: string;
  variant?: 'secondary' | 'outline' | 'default';
};

export type UniverseHeroCta = {
  label: string;
  href: string;
};

export type UniverseHeroProps = {
  badges: UniverseHeroBadge[];
  title: string;
  description: string;
  primaryCta: UniverseHeroCta;
  secondaryCta: UniverseHeroCta;
  note?: string;
  icon: LucideIcon;
};

/**
 * Composant hero public commun pour les univers Collège, Lycée et Santé.
 * 
 * Assure une géométrie rigoureusement identique :
 * - Conteneur global `rounded-3xl border border-border bg-card p-6 md:p-10`
 * - Grille desktop `md:grid-cols-[minmax(0,1fr)_260px]`
 * - Ordre DOM : Badges -> H1 -> Sous-titre -> Zone CTA -> Note éventuelle
 * - Illustration droite : conteneur `rounded-2xl border border-border bg-background p-6` avec cercle brand et icône `aria-hidden="true"`
 */
export function UniverseHero({
  badges,
  title,
  description,
  primaryCta,
  secondaryCta,
  note,
  icon: Icon,
}: UniverseHeroProps) {
  const isPrimaryAnchor = primaryCta.href.startsWith('#');
  const isSecondaryAnchor = secondaryCta.href.startsWith('#');

  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-card p-6 md:p-10">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_260px]">
        {/* Colonne gauche : Contenu éditorial et actions */}
        <div className="space-y-4">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {badges.map((badge, index) => (
              <Badge key={index} variant={badge.variant ?? (index === 0 ? 'secondary' : 'outline')}>
                {badge.label}
              </Badge>
            ))}
          </div>

          {/* H1 */}
          <h1 className="text-3xl font-extrabold tracking-tight text-heading md:text-4xl">
            {title}
          </h1>

          {/* Sous-titre / Description */}
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base text-balance">
            {description}
          </p>

          {/* Zone CTA */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button asChild size="lg" className="font-semibold">
              {isPrimaryAnchor ? (
                <a href={primaryCta.href}>
                  {primaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <Link href={primaryCta.href}>
                  {primaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}
            </Button>
            <Button asChild variant="outline" size="lg">
              {isSecondaryAnchor ? (
                <a href={secondaryCta.href}>{secondaryCta.label}</a>
              ) : (
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              )}
            </Button>
          </div>

          {/* Note d'accès discrète */}
          {note ? (
            <p className="text-xs text-muted-foreground">
              {note}
            </p>
          ) : null}
        </div>

        {/* Colonne droite : Conteneur d'illustration */}
        <div
          className="flex items-center justify-center rounded-2xl border border-border bg-background p-6"
          data-testid="hero-universe-illustration"
        >
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-brand/10 text-fg-brand">
            <Icon className="h-14 w-14" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
