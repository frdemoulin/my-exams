# Gestion des seeds / fixtures

Ce document explique comment peupler la base (dev ou prod) avec des données cohérentes via Prisma.

> Voir aussi: `docs/database/dev-prod.md` (workflow DEV/PROD, Render, scripts à lancer).

## Structure

- `prisma/seed.ts` : point d’entrée Prisma (`prisma db seed`)
- `prisma/seeds/*.seed.ts` : seeders unitaires (diplômes, matières, enseignements, programmes, domaines, thèmes, sujets, exercices, corrections, users…)
- `scripts/seed-prod.ts` : wrapper “prod” (MongoDB Atlas) avec garde-fous
- `scripts/clear-database.ts` : purge complète (dev/test uniquement)
- `scripts/clear-domains-themes.ts` : purge domaines + thèmes (avec garde-fous)

## Seed dev (base locale)

1) Dans `.env.local` (dev) :

```bash
DATABASE_URL="<URI_MONGODB_DEV>"
```

2) Lancer le seed :

```bash
npm run db:seed
```

## Seed prod (MongoDB Atlas)

Le principe : **on ne touche pas à `DATABASE_URL`** (dev) et on définit une variable dédiée à la prod.

### 1) Préparer les variables

Dans `.env.production.local` (non commité) :

```bash
# ⚠️ Important : Prisma (MongoDB) a besoin du nom de base dans l’URI : `...mongodb.net/<db>?...`
DATABASE_URL_PROD="<URI_MONGODB_ATLAS_AVEC_DB>"
```

### 2) Lancer le seed prod

```bash
CONFIRM_PROD_SEED=1 npm run db:seed:prod
```

Ce script exécute par défaut :
- `prisma generate`
- `prisma db push`
- `prisma db seed` (→ appelle `prisma/seed.ts`)

Options :

```bash
# Confirmer via flag
npm run db:seed:prod -- --yes

# Si le schéma est déjà appliqué en prod
CONFIRM_PROD_SEED=1 npm run db:seed:prod -- --skip-push
```

## Purge de base (dev/test uniquement)

```bash
npm run db:clear
```

⚠️ Destructif : ne pas utiliser sur la prod.

## Purge domaines + thèmes (dev/prod)

```bash
# Dry-run (aucune modification)
DRY_RUN=1 npm run db:clear-domains-themes

# Exécution réelle (destructif)
CONFIRM_CLEAR_DOMAINS_THEMES=1 npm run db:clear-domains-themes
```

Ce script :
- vide `Exercise.themeIds`
- vide `ExamPaper.domainIds` et `ExamPaper.themeIds`
- supprime tous les `Theme` et `Domain`

⚠️ Destructif : utiliser le dry-run avant, et ne lancer en prod que si `DATABASE_URL` pointe explicitement sur la base cible.

## Déploiement (prod) – schéma & migrations data

En production, on distingue :
- **Schéma / index** : `prisma db push` (création/MAJ des `@@unique`, `@@index`…)
- **Données** : migrations applicatives versionnées (`scripts/migrations/*.ts`)

Commande projet :
```bash
CONFIRM_DB_MIGRATIONS=1 npm run db:deploy
```

Sur Render, cette commande est idéale en **Pre-deploy command** (après le build, avant la mise en ligne).
