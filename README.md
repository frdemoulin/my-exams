# Starter kit Next.js 16 - Prisma - MongoDB - Auth.js

## Getting Started

- Installation des paquets : `npm install`
- Création d'une base de données MongoDB
- Mapping du schéma en base : `npx prisma migrate dev --name init`
- Lancement du serveur de développement : `npm run dev`
- Ouvrir ensuite [http://localhost:3000](http://localhost:3000)

## Migration Next.js 16

Cette branche (`chore/update-next-js`) met à jour:
- Next.js `16.0.3`
- React / React DOM `19.0.0` (types intégrés)
- Script lint: `npm run lint` utilise désormais `eslint . --max-warnings=0`
- Suppression de l'installation avec `--legacy-peer-deps`

### Étapes après clonage
```bash
npm install
npm run build
npm run start
```

### À vérifier
- Warnings de build liés au caching (revalidatePath / redirect)
- Fonctionnement de l'auth (NextAuth v5 beta)
- Optimisation d'images distante (liste domaines dans `next.config.mjs`)

### Lint
```bash
npm run lint
```

