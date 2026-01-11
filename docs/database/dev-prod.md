# Bases de données (DEV / PROD) – MongoDB Atlas + Prisma

Ce projet utilise **MongoDB Atlas** pour **deux bases distinctes** :
- **DEV** : base utilisée sur ton poste (développement local) + éventuellement par l’équipe
- **PROD** : base utilisée par l’application déployée (Render)

L’application accède à MongoDB via **Prisma** (`prisma/schema.prisma`). Avec MongoDB, Prisma **ne gère pas des migrations SQL** (`prisma migrate`) : on synchronise le schéma avec `prisma db push`, et on gère les “gros changements de données” via un runner de migrations “data”.

---
## 1) Ce qu’il faut retenir (très court)

1. **Toujours séparer DEV et PROD** (au minimum deux *noms de base* différents dans l’URI Atlas).
2. **Évolution de schéma** (index, uniques, modèles Prisma) → `npm run db:push`
3. **Évolution de données** (backfill, renommage, normalisation) → `npm run db:migrate`
4. En production (Render), on exécute automatiquement les deux via :
   - **Pre-deploy command Render** : `CONFIRM_DB_MIGRATIONS=1 npm run db:deploy`

---
## 2) Variables d’environnement : où mettre quoi ?

### A) Sur ton poste (développement local)

Tu définis la base **DEV** dans `.env.local` (non commité) :

```bash
DATABASE_URL="<URI_ATLAS_AVEC_DB_DEV>"
```

Important : avec Prisma + MongoDB, l’URI doit contenir **le nom de base** dans le chemin :
- ✅ `...mongodb.net/<DB_NAME>?...`
- ❌ `...mongodb.net/?...` (provoque des erreurs type “empty database name not allowed”)

Optionnel (utile si tu veux lancer ponctuellement des scripts contre la PROD depuis ton poste) :
dans `.env.production.local` (non commité) :

```bash
DATABASE_URL_PROD="<URI_ATLAS_AVEC_DB_PROD>"
```

### B) Sur Render (production)

Dans le dashboard Render (Environment), configure :

```bash
DATABASE_URL="<URI_ATLAS_AVEC_DB_PROD>"
```

Render n’utilise pas tes `.env.local` / `.env.production.local` locaux.

---
## 3) Les “migrations” : est-ce qu’il y en a à gérer ?

Oui, mais **pas au sens SQL**.

### A) “Schéma Mongo” côté Prisma (index/uniques)

Avec MongoDB, Prisma ne crée pas des scripts `migrate`. Le “schéma” est appliqué via :
- `prisma db push` (dans le projet : `npm run db:push`)

Ça sert surtout à :
- créer / mettre à jour les `@@unique`, `@@index`
- aligner Prisma avec la base

### B) Migrations “data” (backfill / renommage / normalisation)

Quand tu changes des données existantes (renommage de champ, calcul d’un nouveau champ, réparation de données), on versionne une **migration data** dans :
- `scripts/migrations/*.ts`

Le runner :
- `npm run db:migrate` (fichier `scripts/db-migrate.ts`)

Il enregistre l’état en base dans la collection Mongo `migrations` (modèle Prisma `DbMigration`).

Cas particulier (renommage structurel) :
- **Chapter → Domain** : `npm run db:rename-domain`

---
## 4) Workflows concrets : quoi lancer, où, quand ?

### Scénario 1 — Première installation sur ton poste (DEV)

1) Créer `.env.local` avec `DATABASE_URL` (dev Atlas)  
2) Installer :
```bash
npm install
```

3) Appliquer le schéma (index/uniques) puis seed :
```bash
npm run db:push
npm run db:seed
```

4) Lancer l’app :
```bash
npm run dev
```

### Scénario 2 — Tu modifies `prisma/schema.prisma` (évolution de schéma)

Sur ton poste (DEV) :
```bash
npx prisma format
npx prisma generate
npm run db:push
```

Ensuite tu testes, tu commits, puis tu déploies.

En PROD (Render) : ce sera appliqué automatiquement au déploiement via la commande “Pre-deploy”.

### Scénario 3 — Tu dois modifier des données existantes (migration “data”)

Exemples typiques :
- tu renommes un champ (tu crées un nouveau champ + copie depuis l’ancien)
- tu rends un champ obligatoire (il faut backfill avant)
- tu normalises une valeur (“Math” → “Maths”)

Étapes :

1) Créer une migration (script conseillé) :
```bash
npm run db:migration:new -- "normaliser les sources de sujets"
```
   (1 fichier = 1 migration dans `scripts/migrations/`)
2) Lancer en DEV :
```bash
npm run db:migrate
```
3) Vérifier, committer, déployer.

En PROD (Render) : la migration se jouera automatiquement via “Pre-deploy”.

⚠️ **Règle stricte** : ne modifie **jamais** un fichier de migration déjà appliqué.
Sinon : erreur de checksum au déploiement (ex : `Migration déjà appliquée mais checksum différent`).
Si tu dois ajuster une migration appliquée, **crée un nouveau fichier**.

### Scénario 3 bis — Normaliser apostrophes et abréviations (domaines/thèmes)

Quand des imports produisent des apostrophes typographiques ou des variantes d’écriture :
- migrations réutilisables :
  - `scripts/migrations/2025-12-16-0002-normalize-domain-theme-apostrophes.ts`
  - `scripts/migrations/2025-12-16-0003-backfill-subject-is-active.ts`
  - `scripts/migrations/2025-12-16-0004-abbreviate-inequation-system-theme-short.ts`
  - `scripts/migrations/2025-12-16-0005-backfill-diploma-is-active.ts`
- effet :
  - normalise les apostrophes vers `'` (ASCII) dans `Domain` et `Theme`
  - fusionne les doublons de domaines (même `subjectId` + `longDescription` normalisée)
  - ré-attache `Theme`/`DomainScope` et met à jour `ExamPaper.domainIds`
  - abrège `fonction(s)` → `fct(s)` et `équation(s)` → `éq./éqs.` dans `Theme.shortDescription` (casse préservée)
  - abrège `inéquation(s)` → `inéq./inéqs.` et `système(s)` → `syst.`

Exécution (comme toute migration data) :
```bash
npm run db:migrate
```

### Scénario 4 — Déploiement Render (PROD) : schéma + migrations data

Dans Render, configure la **Pre-deploy command** :
```bash
CONFIRM_DB_MIGRATIONS=1 npm run db:deploy
```

Ce que fait `db:deploy` :
- `npm run db:push` (schéma / index)
- `npm run db:migrate` (migrations data, idempotentes)

### Scénario 5 — (Optionnel) Lancer une migration sur PROD depuis ton poste

Recommandation : privilégie Render (Pre-deploy) plutôt que ta machine.

Si tu dois le faire ponctuellement :
1) mettre `DATABASE_URL_PROD` dans `.env.production.local`
2) exécuter :
```bash
CONFIRM_DB_MIGRATIONS=1 npm run db:migrate -- --prod
```

---
## 5) Aide-mémoire (cheat-sheet)

- DEV (ton poste) : `DATABASE_URL` dans `.env.local`
  - schéma : `npm run db:push`
  - data : `npm run db:migrate`
  - seed : `npm run db:seed`

- PROD (Render) : `DATABASE_URL` dans les env Render
  - Pre-deploy : `CONFIRM_DB_MIGRATIONS=1 npm run db:deploy`
  - seed prod (one-shot) : `CONFIRM_PROD_SEED=1 npm run db:seed:prod`
