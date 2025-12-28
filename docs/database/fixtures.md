# Gestion des seeds / fixtures

Ce document explique comment peupler la base (dev ou prod) avec des données cohérentes via Prisma.

> Voir aussi: `docs/database/dev-prod.md` (workflow DEV/PROD, Render, scripts à lancer).

## Structure

- `prisma/seed.ts` : point d’entrée Prisma (`prisma db seed`)
- `prisma/seeds/*.seed.ts` : seeders unitaires (diplômes, matières, enseignements, programmes, domaines, thèmes, sujets, exercices, corrections, users…)
- `scripts/seed-prod.ts` : wrapper “prod” (MongoDB Atlas) avec garde-fous
- `scripts/clear-database.ts` : purge complète (dev/test uniquement)
- `scripts/clear-domains-themes.ts` : purge domaines + thèmes (avec garde-fous)
- `scripts/export-domains-themes.ts` : export domaines/themes (prod/dev) vers JSON
- `scripts/import-domains-themes.ts` : import domaines/themes depuis JSON
- `scripts/sync-domains-themes-from-prod.ts` : reset dev + import depuis prod
- `prisma/seeds/data/domains-themes.json` : dataset domaines/themes (source prod, généré si besoin)

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

## Export domaines + themes (prod -> dev)

Objectif : recuperer les domaines/themes de prod pour les rejouer en dev.

### Option rapide (reset dev + import prod)

```bash
# Reset complet de la dev + import depuis la prod
CONFIRM_SYNC_DOMAINS_THEMES=1 npm run db:sync-domains-themes -- --seed
```

Alternative : `npm run db:sync-domains-themes -- --yes --seed`

Ce script :
- exporte les domaines/themes de prod
- purge domaines/themes en dev
- importe dans la dev
- ecrit aussi `prisma/seeds/data/domains-themes.json` si `--seed` est present

### 1) Export depuis la prod

```bash
# Exporte vers un fichier JSON
npm run db:export-domains-themes -- --prod --out ./exports/domains-themes.json
```

### 2) Import dans la base de dev

```bash
# Dry-run (recommande pour verifier)
npm run db:import-domains-themes -- --file ./exports/domains-themes.json --dry-run

# Import reel
npm run db:import-domains-themes -- --file ./exports/domains-themes.json
```

Notes :
- la correspondance se fait par matiere (long/short) puis domaine (longDescription)
- le script met a jour les champs courants (shortDescription/order/discipline) et ajoute les manquants
- si `NODE_ENV=production`, l'import demande `--yes` pour securite

### 3) Generer les seeds a partir de la prod

```bash
# Fichier committe pour servir de reference
npm run db:export-domains-themes -- --prod --out ./prisma/seeds/data/domains-themes.json
```

Une fois ce fichier present, les seeders `Domain` et `Theme` l'utiliseront automatiquement.
Si le fichier est absent, les thèmes sont générés depuis `prisma/seeds/data/topics.json`.

## Déploiement (prod) – schéma & migrations data

En production, on distingue :
- **Schéma / index** : `prisma db push` (création/MAJ des `@@unique`, `@@index`…)
- **Données** : migrations applicatives versionnées (`scripts/migrations/*.ts`)

Commande projet :
```bash
CONFIRM_DB_MIGRATIONS=1 npm run db:deploy
```

Sur Render, cette commande est idéale en **Pre-deploy command** (après le build, avant la mise en ligne).
