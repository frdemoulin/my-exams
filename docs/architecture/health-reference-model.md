# Référentiel santé

Le référentiel santé décrit des maquettes locales sans créer un second référentiel
pédagogique :

```text
HealthInstitution
  -> HealthProgram
    -> HealthProgramVersion
      -> HealthPathway
        -> HealthBlock
          -> HealthCourseUnit
            -> Theme
```

## Choix de modélisation

- `HealthProgram` décrit un type d'offre stable (`PASS`, `LAS`, `LAS_SPS`,
  `HEALTH_LICENSE_2027` ou `OTHER`).
- `HealthProgramVersion` porte la maquette locale d'un établissement et d'une
  année universitaire. La règle « une maquette courante par établissement,
  programme et niveau » est appliquée côté serveur afin de rester simple avec
  MongoDB.
- Un parcours, un bloc et une UE appartiennent toujours à une maquette. Les
  actions d'administration vérifient aussi que leurs rattachements optionnels
  pointent vers cette même maquette.
- `HealthCourseUnit` est une UE locale et peut regrouper plusieurs `Theme`.
  `Theme` reste le référentiel pédagogique stable. Une future question santé
  devra donc cibler des thèmes et pourra seulement cibler une UE de manière
  optionnelle.
- Aucun rattachement n'est ajouté à `ExamPaper` ou `QuizQuestion` dans cette
  première version.

## Référentiel national 2025-2026

Le seed de développement constitue le référentiel national à partir de la
[Cartographie des formations Parcoursup](https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-cartographie_formations_parcoursup/information/),
session 2025. Cette session correspond aux candidatures pour l'année
universitaire 2025-2026.

Le périmètre retient uniquement les offres portant explicitement l'un des
marqueurs officiels suivants dans la cartographie :

- `Parcours d'Accès Spécifique Santé (PASS)` ;
- `Licence Accès Santé (LAS)`.

La fixture versionnée contient 36 universités ou facultés porteuses de l'accès
santé et 800 offres Parcoursup : 287 PASS et 513 L.AS. Les 135 établissements,
écoles et campus qui dispensent ces offres sont conservés comme informations de
parcours, pas comme établissements santé. Par exemple, la L.AS EiSINe est
rattachée à l'Université de Reims Champagne-Ardenne.

Le rattachement utilise les identifiants institutionnels de la cartographie, le
lien officiel « Nombre de places offertes en MMOP » de la fiche Parcoursup et,
pour les partenaires ambigus, un rattachement explicite documenté dans le
générateur. Pour chaque université santé, le seed crée une maquette PASS et/ou
L.AS 2025-2026, puis un `HealthPathway` par fiche Parcoursup avec son code, son
URL, son campus, l'établissement qui dispense la licence et les mentions ou
spécialités publiées.

La cartographie Parcoursup ne décrit pas le détail pédagogique des formations.
Le seed ne crée donc aucun bloc, aucune UE et aucun ECTS à partir de cette seule
source. Ces éléments doivent être ajoutés uniquement lorsqu'une maquette
universitaire officielle 2025-2026 a été vérifiée.

La source est publiée par le ministère chargé de l'Enseignement supérieur sous
Licence Ouverte v2.0 (Etalab). La fixture peut être régénérée avec :

```bash
npm run db:fixture:health
```

Le script filtre la session 2025, normalise les données utiles et écrit
`prisma/seeds/data/health-parcoursup-2025.json`. Le seed reste ensuite
déterministe et ne dépend pas du réseau.

## Déploiement et retour arrière

Le schéma MongoDB est appliqué avec `npm run db:push`, puis le référentiel de
développement peut être créé avec `npm run db:seed`. Le push doit être suivi du script
`npm run db:index:exercise-search`, car l'index texte des exercices est géré hors
Prisma.

Cette évolution n'altère aucune collection existante et n'ajoute aucun
rattachement obligatoire aux annales ou aux QCM. Un retour arrière consiste à
retirer les modèles et la relation `Theme.healthCourseUnits`, puis à supprimer
les six collections santé après sauvegarde de leurs données. Aucun contenu
historique ne doit être migré ou restauré.
