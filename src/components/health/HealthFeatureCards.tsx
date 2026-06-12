import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { healthFeatures } from './health-content';

export function HealthFeatureCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {healthFeatures.map((feature) => {
        const Icon = feature.icon;

        return (
          <Card
            key={feature.title}
            className="h-full rounded-2xl border-border bg-card hover:border-emerald-200/80 hover:bg-card dark:hover:border-emerald-900/80"
          >
            <CardHeader className="space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-200/70 bg-emerald-50 text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-950/60 dark:text-emerald-300">
                <Icon className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg text-heading">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-muted-foreground">
              {feature.description}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
