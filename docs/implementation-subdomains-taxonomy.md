# Implémentation des sous-domaines et clarification de la taxonomie pédagogique

## Contexte

Le projet distingue deux logiques pédagogiques :

- **annales** : indexées par notions transversales et stables (domaine → sous-domaine → thème) ;
- **QCM d'entraînement** : organisés par progression scolaire (chapitre → section → quiz).

Cette note documente la **Phase 1** de l'évolution : introduction d'un niveau intermédiaire `Subdomain`
entre `Domain` et `Theme`, sans rupture pour l'existant.

## Modèle conceptuel cible

### Taxonomie annales

```
Subject → Domain → Subdomain → Theme → Exercise
```

Exemple :

```
Sciences physiques
  → Constitution et transformations de la matière
    → Acides, bases et pH
      → Produit ionique de l'eau
        → Exercice d'annale
```

### Parcours QCM (inchangé)

```
Subject → Chapter → ChapterSection → TrainingQuiz → QuizQuestion
```

## Évolutions Prisma

Nouveau modèle `Subdomain` dans `prisma/schema.prisma` :

- rattaché à un `Subject` et à un `Domain` ;
- expose `themes` via `subdomainIds` (relation many-to-many MongoDB) ;
- contraintes : `@@unique([subjectId, slug])`, plus index par matière, domaine et `isActive`.

Modifications associées :

- `Subject` : ajout de la relation inverse `subdomains Subdomain[]` ;
- `Domain` : ajout de la relation inverse `subdomains Subdomain[]` (les liens `themeIds` historiques sont conservés) ;
- `Theme` : ajout de `subdomainIds` / `subdomains`. Le champ `domainIds` reste disponible (marqué deprecated en commentaire) afin de ne casser ni les écrans, ni les seeds, ni les scripts.

## Données de départ

Catalogue centralisé dans [prisma/seeds/data/physics-subdomains.ts](../prisma/seeds/data/physics-subdomains.ts) :

- 6 sous-domaines pour *Constitution et transformations de la matière* (acides/bases, titrages, oxydoréduction, cinétique, organique, structure) ;
- 4 sous-domaines pour *Mouvement et interactions* ;
- 5 sous-domaines pour *Énergie* ;
- 6 sous-domaines pour *Ondes et signaux*.

Chaque entrée comporte des `themeMatchers` : mots-clés normalisés utilisés par la migration pour rattacher automatiquement les thèmes existants.

## Seed

[prisma/seeds/subdomain.seed.ts](../prisma/seeds/subdomain.seed.ts) consomme le catalogue et upserte les sous-domaines (clé `(subjectId, slug)`). Branché dans [prisma/seed.ts](../prisma/seed.ts) entre `seedDomains` et `seedThemes`.

## Migration applicative

[scripts/migrations/2026-05-28-0006-add-subdomains.ts](../scripts/migrations/2026-05-28-0006-add-subdomains.ts) :

1. Upsert idempotent des sous-domaines à partir du même catalogue.
2. Parcours des thèmes existants et association automatique au sous-domaine dont au moins un `themeMatcher` est contenu dans le titre ou le short title (texte normalisé sans accents).
3. Journalise les thèmes non rattachés (sans domaine ou sans correspondance) pour reprise manuelle dans le backoffice.

Exécution :

```bash
# Aperçu
npm run db:migrate -- --dry-run

# Application (dev)
npm run db:migrate

# Prod (nécessite confirmation explicite)
CONFIRM_DB_MIGRATIONS=1 npm run db:migrate
```

Le script est sûr à relancer : il met à jour les sous-domaines existants (titre, ordre, domaine) et n'ajoute jamais de doublon d'association.

## Compatibilité

- `Theme.domainIds` n'est pas supprimé ; les filtres et seeds actuels continuent de fonctionner.
- Les exercices ne sont pas modifiés : l'indexation reste `Exercise.themeIds`.
- Aucun changement côté chapitres, sections ou QCM d'entraînement.

## Suites prévues (hors Phase 1)

- Phase 2 : CRUD admin des sous-domaines + sélection de sous-domaines dans le formulaire des thèmes, avec contrôle de cohérence matière.
- Phase 3 : filtres élève par sous-domaine sur les annales (API + UI).
- Phase 4 : nettoyage de `Theme.domainIds` une fois tous les thèmes rattachés.
