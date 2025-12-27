# Arborescence - My Exams

## Objectif
Architecture avec un seul repo full-stack Next.js qui soit :
- ✅ Maintenable et évolutive
- ✅ Prête pour une future extension mobile (React Native/Expo)
- ✅ Séparation claire entre frontend public, backoffice admin et logique métier

## Structure

### 📁 `src/core/` - Logique métier (backend interne)
Regroupe toute la logique métier par domaine. Chaque domaine contient:
- `[domain].types.ts` - Types TypeScript et interfaces
- `[domain].queries.ts` - Requêtes base de données (Prisma)
- `[domain].actions.ts` - Server actions (create, update, delete)
- `index.ts` - Export centralisé du domaine

**Domaines:**
- `diploma/` - Gestion des diplômes
- `division/` - Gestion des filières
- `examination-center/` - Gestion des centres d'examen
- `grade/` - Gestion des niveaux scolaires
- `subject/` - Gestion des matières
- `teaching/` - Gestion des enseignements
- `curriculum/` - Gestion des programmes
- `domain/` - Gestion des domaines
- `theme/` - Gestion des thèmes
- `exam-paper/` - Gestion des sujets d'annales
- `exercise/` - Gestion des exercices
- `correction/` - Gestion des corrections
- `stats/` - Statistiques et reporting
- `dashboard/` - Agrégats dashboard
- `enrichment/` - Enrichissement (LLM/OCR)
- `user/` - Gestion des utilisateurs

**Avantages:**
- Logique métier centralisée et réutilisable
- Facile à extraire dans un monorepo plus tard
- Import simplifié: `import { createDiploma, fetchDiplomas } from '@/core/diploma'`

### 📁 `src/app/` - Routes et pages

#### `(public)/` - Espace public (élèves)
- Page d'accueil
- Login
- Future: liste des annales, recherche, etc.

#### `(admin)/` - Backoffice administration
- Dashboard administrateur
- CRUD complets pour tous les domaines
- Gestion des utilisateurs

#### `api/` - Routes API Next.js
- `/auth/[...nextauth]` - Authentification
- `/health` - Health check

### 📁 `src/lib/` - Infrastructure

#### `lib/db/`
- `prisma.ts` - Client Prisma singleton

#### `lib/auth/`
- `auth.ts` - Configuration Auth.js (ex `src/auth.ts`)
- `get-session.ts` - Helper pour récupérer la session
- `auth-send-request.ts` - Envoi des emails d'authentification

#### Autres
- `utils.ts` - Utilitaires génériques
- `validation.ts` - Schémas Zod de validation

### 📁 `src/components/` - Composants UI

#### `components/ui/`
- Composants shadcn/ui (button, card, dialog, etc.)

#### `components/shared/`
- `loading-button.tsx`
- `search-field.tsx`
- `sign-out-button.tsx`
- `table-title.tsx`
- `user-avatar.tsx`
- `user-button.tsx`

#### `components/layout/`
- Futurs composants de layout (Header, Footer, Sidebar, etc.)

### 📁 `src/types/` - Types globaux
- `option.ts` - Type Option générique
- `next-auth.d.ts` - Extensions de types NextAuth

## Migrations effectuées

### ✅ Déplacements de fichiers
```
src/types/[domain].ts → src/core/[domain]/[domain].types.ts
src/db/queries/[domain].ts → src/core/[domain]/[domain].queries.ts
src/actions/[domain]/*.ts → src/core/[domain]/[domain].actions.ts (regroupé)
src/lib/db.ts → src/lib/db/prisma.ts
src/lib/get-session.ts → src/lib/auth/get-session.ts
src/lib/auth-send-request.ts → src/lib/auth/auth-send-request.ts
src/auth.ts → src/lib/auth/auth.ts
```

### ✅ Renommage de dossiers
```
src/app/(connected) → src/app/(admin)
src/app/(not_connected)/log-in → src/app/(public)/log-in
```

### ✅ Réorganisation composants
```
src/components/[shared-component].tsx → src/components/shared/[shared-component].tsx
```

### ✅ Mise à jour des imports
Tous les imports ont été mis à jour automatiquement:
- `@/db/queries/[domain]` → `@/core/[domain]`
- `@/actions/[domain]/*` → `@/core/[domain]`
- `@/types/[domain]` → `@/core/[domain]`
- `@/lib/db` → `@/lib/db/prisma`
- `@/lib/get-session` → `@/lib/auth/get-session`
- `@/auth` → `@/lib/auth/auth`
- `@/components/[shared]` → `@/components/shared/[shared]`

## Avantages de cette structure

### 🎯 Maintenabilité
- Organisation par domaine fonctionnel
- Séparation claire des responsabilités
- Moins de répétition de code

### 🚀 Évolutivité
- Prête pour extraction en monorepo si besoin
- Logique métier réutilisable pour app mobile
- Architecture "mobile-ready" dès maintenant

### 📱 Future compatibilité mobile
La structure `core/` peut être:
- Extraite dans un `packages/shared` en monorepo
- Partagée entre app web (Next.js) et app mobile (React Native/Expo)
- Consommée via API REST si backend séparé

### 👥 Collaboration
- Structure intuitive et conventionnelle
- Facile à onboarder de nouveaux développeurs
- Documentation claire de l'architecture

## Prochaines étapes recommandées

1. **Tester l'application**
   ```bash
   npm run dev
   npm run build
   ```

2. **Créer routes API REST** (optionnel)
   - Exposer la logique `core/` via `/api/[domain]`
   - Préparer pour consommation mobile

3. **Ajouter front public**
   - Liste des annales dans `(public)/annales`
   - Recherche et filtrage
   - Pages de détail

4. **Envisager migration monorepo** (future)
   ```
   apps/
     web/      → Next.js (actuel)
     mobile/   → React Native/Expo
   packages/
     core/     → Logique métier partagée
     ui/       → Composants UI partagés
   ```

## Notes importantes

- ✅ Structure compatible Next.js 16 App Router
- ✅ Prêt pour déploiement
