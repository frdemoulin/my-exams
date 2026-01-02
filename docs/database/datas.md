# Liste des données statiques (seeds)

## Examens

- Centres d'examen (seeds `prisma/seeds/examination-center.seed.ts`) :
  - Amérique du Nord
  - Amérique du Sud
  - Antilles
  - Asie
  - Centres étrangers
  - Guyane
  - Inde
  - Métropole
  - Nouvelle-Calédonie
  - Polynésie
  - Réunion
- Diplômes (seeds `prisma/seeds/diploma.seed.ts`) :
  - Baccalauréat général
  - Baccalauréat professionnel
  - Baccalauréat technologique
  - Brevet des collèges
  - Brevet de technicien supérieur
  - Certificat d'aptitude professionnelle

## Scolarité

- Filières (seeds `prisma/seeds/division.seed.ts`) :
  - Sciences
  - Lettres
  - Économie
  - Technologie
  - Professionnel
- Niveaux scolaires (seeds `prisma/seeds/grade.seed.ts`) :
  - 6e
  - 5e
  - 4e
  - 3e
  - 2de
  - 1re
  - Tle
- Matières (seeds `prisma/seeds/subject.seed.ts`) :
  - Mathématiques
  - Sciences physiques
  - Français
  - Sciences de la Vie et de la Terre
  - Histoire-Géographie
  - Sciences Économiques et Sociales
  - Informatique
  - Philosophie

## Enseignements & programmes

- Enseignements : définis dans `prisma/seeds/teaching.seed.ts` (spécialités, options, tronc commun).
- Programmes : définis dans `prisma/seeds/curriculum.seed.ts`.

## Domaines et thèmes

- Si le fichier `prisma/seeds/data/domains-themes.json` est présent (généré via les scripts
  d'export/sync), il sert de source de vérité pour les domaines et thèmes.
- Sinon, les thèmes sont générés à partir de `prisma/seeds/data/topics.json` et rattachés aux
  domaines par règles heuristiques (voir `prisma/seeds/theme.seed.ts`).
