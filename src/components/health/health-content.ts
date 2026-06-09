import {
  Activity,
  BookMarked,
  Files,
  FlaskConical,
  ListChecks,
  Microscope,
  TimerReset,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type HealthSectionSlug = 'ue' | 'colles' | 'annales' | 'examens-blancs';

type HealthFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type HealthSectionDefinition = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  highlights: string[];
};

export const healthFeatures: HealthFeature[] = [
  {
    title: 'Réviser par UE',
    description:
      'Un accès organisé par unités d’enseignement : chimie, biochimie, biologie cellulaire, biophysique, anatomie, sciences humaines et sociales.',
    icon: Microscope,
  },
  {
    title: "S'entraîner avec des colles",
    description:
      'Chaque colle correspondra à une série de QCM rattachée à une UE, puis affinée par chapitres et sous-sections d’UE.',
    icon: ListChecks,
  },
  {
    title: "Se préparer en conditions d'examen",
    description:
      'Des examens blancs chronométrés pourront être proposés à terme pour simuler les contraintes de la première année de santé.',
    icon: TimerReset,
  },
  {
    title: 'Travailler sur des annales',
    description:
      'Une section dédiée aux sujets réels et aux corrections permettra de s’entraîner sur des formats proches des attendus universitaires.',
    icon: Files,
  },
];

export const healthSectionDefinitions: Record<HealthSectionSlug, HealthSectionDefinition> = {
  ue: {
    eyebrow: 'Navigation préparée',
    title: 'Réviser par UE',
    description:
      'La structure de routage est prête pour accueillir une entrée par unités d’enseignement. Les contenus UE seront ajoutés dans une prochaine étape.',
    ctaLabel: 'Découvrir les UE',
    href: '/sante/ue',
    highlights: [
      'Une navigation par UE permettra d’entrer par grandes matières.',
      'Chaque UE pourra ensuite exposer ses chapitres et sous-sections.',
    ],
  },
  colles: {
    eyebrow: 'Navigation préparée',
    title: 'Colles Santé',
    description:
      'Une colle correspondra à une série de QCM organisée par UE, puis par chapitres et sous-sections d’UE pour cibler une révision courte et précise.',
    ctaLabel: 'Voir les colles',
    href: '/sante/colles',
    highlights: [
      'Une colle = une série courte de QCM ciblés.',
      'Chaque colle sera rattachée à une UE.',
      'À l’intérieur d’une UE, les colles pourront être organisées par chapitres et sous-sections.',
    ],
  },
  annales: {
    eyebrow: 'Navigation préparée',
    title: 'Annales Santé',
    description:
      'Cette section servira plus tard à regrouper les sujets réels et leurs corrections, avec une présentation proche des attendus universitaires.',
    ctaLabel: 'Voir les annales Santé',
    href: '/sante/annales',
    highlights: [
      'Annales réelles et corrections structurées.',
      'Formats proches des attendus universitaires.',
    ],
  },
  'examens-blancs': {
    eyebrow: 'Navigation préparée',
    title: 'Examens blancs',
    description:
      'Le routage est déjà en place pour accueillir des sessions chronométrées dédiées à la préparation des études de santé.',
    ctaLabel: 'Voir les examens blancs',
    href: '/sante/examens-blancs',
    highlights: [
      'Sessions plus longues et chronométrées.',
      'Préparation aux contraintes d’examen.',
    ],
  },
};

export const healthSectionSlugs = Object.keys(
  healthSectionDefinitions
) as HealthSectionSlug[];

export function isHealthSectionSlug(value: string): value is HealthSectionSlug {
  return value in healthSectionDefinitions;
}

export const healthAudienceBadges = ['PASS', 'LAS', 'UE', 'Colles'] as const;

export const healthHeroHighlights = [
  {
    label: 'Audience visée',
    value: 'PASS, LAS et futurs parcours santé',
    icon: FlaskConical,
  },
  {
    label: 'Positionnement',
    value: 'UE, colles, annales et examens blancs',
    icon: BookMarked,
  },
] as const;

export const healthCollesPrinciples = [
  'Une colle sera une série de QCM courte et ciblée.',
  'Elle sera rattachée à une UE avant d’être découpée par chapitres et sous-sections d’UE.',
  'Le format doit permettre une révision rapide, fréquente et progressive.',
] as const;
