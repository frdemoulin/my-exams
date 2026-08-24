'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileCheck2,
  Target,
  PenTool,
  HelpCircle,
  ArrowRight,
  Info,
  Clock,
  Check,
  X,
} from 'lucide-react';

const formats = [
  {
    code: 'QRU',
    name: 'Question à réponse unique',
    family: 'QCM',
    consigne: 'Sélectionnez une réponse.',
    description: 'Une seule proposition parmi les 5 est exacte.',
    detail:
      'L’interface se comporte en sélection exclusive. Cliquer sur une nouvelle proposition remplace votre choix précédent.',
  },
  {
    code: 'QRM',
    name: 'Question à réponses multiples',
    family: 'QCM',
    consigne: 'Sélectionnez la ou les réponses exactes.',
    description: 'De zéro à la totalité des propositions peuvent être correctes.',
    detail:
      'Ce format est directement concerné par la notation par discordances. Chaque proposition cochée à tort ou oubliée constitue une discordance.',
  },
  {
    code: 'QRP',
    name: 'Question à réponses précises',
    family: 'QCM',
    consigne: 'Sélectionnez exactement N réponses (ex. 2 réponses).',
    description: 'Un nombre exact de propositions doit être coché.',
    detail:
      'L’instruction indique explicitement le nombre attendu (ex. 2 ou 3 réponses) et l’interface empêche la sélection supplémentaire.',
  },
  {
    code: 'QRPL',
    name: 'Question à réponses précises sur liste longue',
    family: 'QCM',
    consigne: 'Sélectionnez exactement N réponses parmi les 10 propositions.',
    description: 'Même principe qu’une QRP mais sur un ensemble étendu de choix.',
    detail:
      'Permet d’évaluer la discrimination parmi un ensemble plus large de structures, molécules ou termes scientifiques.',
  },
  {
    code: 'QROC',
    name: 'Question à réponse ouverte courte',
    family: 'Réponse ouverte',
    consigne: 'Saisissez votre réponse.',
    description: 'Saisie directe sous forme de mot, court texte ou valeur numérique.',
    detail:
      'La correction déterministe prend en charge les synonymes scientifiques validés, les unités courantes et la tolérance numérique lorsque cela est prévu.',
  },
  {
    code: 'QZONE',
    name: 'Question à zone à pointer',
    family: 'Interaction image',
    consigne: 'Pointez la zone demandée sur le support.',
    description: 'Sélection d’un repère ou d’un organite sur un schéma ou cliché.',
    detail:
      'Un marqueur visuel apparaît à l’endroit ciblé. Le repère reste modifiable à tout moment tant que l’épreuve n’est pas définitivement remise.',
  },
];

export function HealthEvaluationsGuide() {
  return (
    <div className="space-y-10">
      {/* Introduction Card */}
      <Card className="rounded-3xl border-border bg-card">
        <CardHeader className="gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="gap-1.5 font-semibold text-fg-brand border-brand/30">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Référentiel Santé
            </Badge>
            <Badge variant="secondary">Colles & Examens Blancs</Badge>
          </div>
          <CardTitle className="text-2xl font-bold text-heading">
            Guide des formats de questions et de la notation UNESS
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            En Santé, les colles et examens blancs s’appuient sur un moteur d’évaluation commun.
            Ce guide vous explicite la typologie des questions et le principe stratégique de la notation par discordances.
          </p>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="flex flex-col gap-3 rounded-2xl border border-default bg-neutral-secondary-soft p-4 text-sm text-body sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4 text-fg-brand" aria-hidden="true" />
              <span>Pour vous exercer en situation réelle avant vos colles :</span>
            </div>
            <Button asChild size="sm" className="gap-2 shrink-0">
              <Link href="/sante/interface-examen">
                Découvrir le mode évaluation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Section 1: Formats de questions */}
      <section className="space-y-5" aria-labelledby="formats-heading">
        <div className="space-y-1">
          <h2 id="formats-heading" className="text-xl font-semibold text-heading flex items-center gap-2">
            <FileCheck2 className="h-5 w-5 text-fg-brand" aria-hidden="true" />
            1. Les 6 formats de questions
          </h2>
          <p className="text-sm text-muted-foreground">
            Chaque format répond à un objectif pédagogique précis et affiche des consignes opérationnelles explicites.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {formats.map((fmt) => (
            <Card key={fmt.code} className="rounded-2xl border-border bg-card hover:bg-card">
              <CardHeader className="p-5 pb-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-fg-brand text-base tracking-wide">
                    {fmt.code}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {fmt.family}
                  </Badge>
                </div>
                <CardTitle className="text-base font-semibold text-heading">
                  {fmt.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 space-y-3 text-sm">
                <div className="rounded-lg border border-default bg-neutral-secondary-soft p-2.5 text-xs text-body font-medium">
                  <span className="text-muted-foreground uppercase tracking-wide block text-[10px] mb-0.5">
                    Consigne type
                  </span>
                  « {fmt.consigne} »
                </div>
                <p className="text-body text-xs leading-relaxed">
                  {fmt.description}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed border-t border-default pt-2">
                  {fmt.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 2: Notation UNESS & Discordances */}
      <section className="space-y-5" aria-labelledby="scoring-heading">
        <div className="space-y-1">
          <h2 id="scoring-heading" className="text-xl font-semibold text-heading flex items-center gap-2">
            <Target className="h-5 w-5 text-fg-brand" aria-hidden="true" />
            2. La notation UNESS & le principe de discordance
          </h2>
          <p className="text-sm text-muted-foreground">
            Comprendre les règles d’attribution des points pour adopter la meilleure stratégie de réponse dès les colles.
          </p>
        </div>

        <div className="space-y-4">
          <Card className="rounded-2xl border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg text-heading flex items-center gap-2">
                <Info className="h-4 w-4 text-fg-brand" aria-hidden="true" />
                Qu’est-ce qu’une discordance ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-body">
              <p>
                En évaluation Santé (notamment pour les questions à réponses multiples <strong>QRM</strong>), la correction n’est pas uniquement basée sur un résultat tout-ou-rien. Le score attribué dépend du nombre de <strong>discordances</strong> constatées entre votre grille de réponses et la vérité scientifique.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-default p-4 bg-neutral-secondary-soft space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-heading">
                    <X className="h-4 w-4 text-red-500" aria-hidden="true" />
                    Erreur par addition
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Vous avez coché une proposition qui est en réalité <strong>fausse</strong>.
                  </p>
                </div>

                <div className="rounded-xl border border-default p-4 bg-neutral-secondary-soft space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-heading">
                    <X className="h-4 w-4 text-red-500" aria-hidden="true" />
                    Erreur par omission
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Vous avez oublié de cocher une proposition qui est en réalité <strong>vraie</strong>.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 space-y-2 text-xs text-body">
                <div className="flex items-center gap-2 font-semibold text-amber-600 dark:text-amber-400 text-sm">
                  <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Message stratégique essentiel
                </div>
                <p>
                  <strong>Cocher une proposition « au cas où » n’est jamais neutre.</strong> Une hésitation qui vous pousse à cocher une option fausse ajoute une discordance et fait baisser votre note. La stratégie optimale consiste à ne valider que les propositions dont vous êtes certain.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Remise & Correction différée */}
          <Card className="rounded-2xl border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg text-heading flex items-center gap-2">
                <PenTool className="h-4 w-4 text-fg-brand" aria-hidden="true" />
                Déroulement et correction après remise
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-body">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2 border-l-2 border-brand/40 pl-3">
                  <h4 className="font-semibold text-heading">Pendant l’épreuve</h4>
                  <ul className="space-y-1.5 text-xs text-muted-foreground list-disc pl-3">
                    <li>Chronomètre actif avec décompte du temps.</li>
                    <li>Navigation libre entre toutes les questions.</li>
                    <li>Possibilité de modifier vos choix à tout moment.</li>
                    <li>Marquage « À revoir » pour identifier vos hésitations.</li>
                    <li><strong>Aucune correction</strong> n’est affichée en cours de passage.</li>
                  </ul>
                </div>

                <div className="space-y-2 border-l-2 border-emerald-500/40 pl-3">
                  <h4 className="font-semibold text-heading">Après la remise définitive</h4>
                  <ul className="space-y-1.5 text-xs text-muted-foreground list-disc pl-3">
                    <li>Verrouillage de la tentative.</li>
                    <li>Calcul du score global et par enseignement.</li>
                    <li>Affichage détaillé item par item (correct / omis / faux).</li>
                    <li>Accès aux explications pédagogiques détaillées.</li>
                  </ul>
                </div>
              </div>

              {/* Rendu cible de correction */}
              <div className="rounded-xl border border-default p-4 space-y-3 bg-neutral-secondary-soft text-xs">
                <div className="flex items-center justify-between font-semibold text-heading">
                  <span>Exemple de restitution de correction après remise</span>
                  <Badge variant="outline">Score : 0,5 / 1 (1 discordance)</Badge>
                </div>
                <div className="space-y-1.5 font-mono text-[11px]">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>A — Correctement sélectionnée</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>B — Correctement non sélectionnée</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>C — Réponse exacte oubliée (1 discordance)</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>D — Correctement non sélectionnée</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>E — Correctement sélectionnée</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
