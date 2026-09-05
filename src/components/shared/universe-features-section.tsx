import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export type UniverseFeatureItem = {
  title: string;
  badge: string;
  description: string;
  icon: LucideIcon;
  cta?: {
    label: string;
    href: string;
  };
};

export type UniverseFeatureCardProps = {
  feature: UniverseFeatureItem;
};

export function UniverseFeatureCard({ feature }: UniverseFeatureCardProps) {
  const Icon = feature.icon;

  return (
    <Card className="flex h-full flex-col rounded-2xl border-border bg-card p-6">
      {/* Header: Icon container on left, Badge on right */}
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-fg-brand">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <Badge variant="secondary" className="text-xs">
          {feature.badge}
        </Badge>
      </div>

      {/* Main content: Title + Description */}
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold text-heading">
          {feature.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {feature.description}
        </p>
      </div>

      {/* Optional Footer CTA */}
      {feature.cta ? (
        <div className="mt-auto pt-6">
          <Button asChild variant="outline" size="sm" className="w-full justify-center">
            <Link href={feature.cta.href}>
              {feature.cta.label} &rarr;
            </Link>
          </Button>
        </div>
      ) : null}
    </Card>
  );
}

export type UniverseFeaturesSectionProps = {
  id?: string;
  badge?: string;
  title: string;
  description: string;
  features: UniverseFeatureItem[];
  centerLastRow?: boolean;
};

export function UniverseFeaturesSection({
  id,
  badge = 'Fonctionnalités',
  title,
  description,
  features,
  centerLastRow = false,
}: UniverseFeaturesSectionProps) {
  const isFiveCardsCentered = centerLastRow && features.length === 5;

  return (
    <section id={id} className="space-y-6 pt-2 md:pt-4">
      <div className="mx-auto w-full max-w-4xl space-y-2 text-left md:text-center">
        <div>
          <Badge variant="outline">{badge}</Badge>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-heading md:text-3xl">
          {title}
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base text-balance">
          {description}
        </p>
      </div>

      {isFiveCardsCentered ? (
        <div className="grid gap-4 md:grid-cols-6">
          {features.map((feature, idx) => {
            const isFourthCard = idx === 3;
            const colClasses = isFourthCard
              ? 'md:col-start-2 md:col-span-2'
              : 'md:col-span-2';

            return (
              <div key={feature.title} className={colClasses}>
                <UniverseFeatureCard feature={feature} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <UniverseFeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      )}
    </section>
  );
}
