# Migrations applicatives

MongoDB n'a pas de migrations SQL Prisma. Ici on versionne des migrations **data** (backfill, renommage de champs, normalisation, etc.) exécutées par `scripts/db-migrate.ts`.

## Convention

- 1 fichier = 1 migration.
- Nom de fichier triable, par ex: `2025-12-15-0001-init.ts` (ordre lexicographique).
- Exports attendus :

```ts
import type { PrismaClient } from "@prisma/client";

export const description = "Décris l'objectif de la migration";

export async function up(prisma: PrismaClient) {
  // TODO: code idempotent (safe à relancer)
}
```

## Exécution

```bash
# Affiche ce qui serait exécuté (ne modifie pas la base)
npm run db:migrate -- --dry-run

# Exécute réellement (en prod: nécessite CONFIRM_DB_MIGRATIONS=1)
CONFIRM_DB_MIGRATIONS=1 npm run db:migrate
```

