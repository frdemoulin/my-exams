# Arborescence du projet My Exams

Documentation de la structure du projet

## 📁 Structure complète avec explications

```
my-exams/
│
├── 📄 .env.local                      # Variables d'environnement locales (non versionnées)
├── 📄 .gitignore                      # Fichiers et dossiers à ignorer par Git
├── 📄 Dockerfile                      # Image de build/deploy
├── 📄 commitlint.config.js            # Règles de commitlint
├── 📄 eslint.config.mjs               # Configuration ESLint
├── 📄 lint-staged.config.js           # Lint-staged pour pre-commit
├── 📄 components.json                 # Configuration shadcn/ui pour les composants UI
├── 📄 next-env.d.ts                   # Types TypeScript générés par Next.js
├── 📄 next.config.mjs                 # Configuration Next.js (routes, redirections, etc.)
├── 📄 package.json                    # Dépendances et scripts npm du projet
├── 📄 package-lock.json               # Verrouillage npm
├── 📄 postcss.config.mjs              # Configuration PostCSS
├── 📄 README.md                       # Documentation principale du projet
├── 📄 render.yaml                     # Config Render
├── 📄 tsconfig.json                   # Configuration TypeScript du projet
│
├── 📂 docs/                           # 📚 Documentation du projet
│   ├── README.md                      #    Table des matières des docs
│   ├── summary.md                     #    Glossaire des concepts
│   ├── TODO.md                        #    Suivi rapide des sujets ouverts
│   ├── release-workflow.md            #    Process release
│   ├── architecture/                  #    Architecture & rendering
│   ├── database/                      #    Modèle de données & Prisma
│   ├── development/                   #    Guides dev (scripts, analytics, OCR, etc.)
│   ├── deployment/                    #    Render/Cloudflare
│   ├── guides/                        #    Guides techniques (i18n, tests, UI)
│   ├── project-management/            #    Changelog + plans
│   └── technical-setup/               #    SMTP, SSO, MongoDB, etc.
│
├── 📂 prisma/                         # 🗄️ Schéma et seeds base de données
│   ├── prisma.config.ts               #    Configuration Prisma (préparation Prisma 7)
│   ├── schema.prisma                  #    Définition du schéma de données (MongoDB)
│   ├── seed.ts                        #    Script de seed principal
│   └── seeds/                         #    Scripts de seed par entité
│       ├── diploma.seed.ts            #       Diplômes
│       ├── division.seed.ts           #       Filières
│       ├── examination-center.seed.ts #       Centres d'examen
│       ├── grade.seed.ts              #       Niveaux scolaires
│       ├── subject.seed.ts            #       Matières
│       ├── teaching.seed.ts           #       Enseignements
│       ├── curriculum.seed.ts         #       Programmes
│       ├── domain.seed.ts             #       Domaines
│       ├── theme.seed.ts              #       Thèmes
│       ├── exam-paper.seed.ts         #       Sujets
│       ├── exercise.seed.ts           #       Exercices
│       ├── correction.seed.ts         #       Corrections
│       └── user.seed.ts               #       Utilisateurs
│
├── 📂 public/                         # 🌐 Fichiers statiques publics
│   ├── favicon.ico                    #    Icône du site
│   └── ...                            #    Images, logos, assets statiques
│
├── 📂 scripts/                        # 🔧 Scripts utilitaires
│   ├── db-migrate.ts                  #    Migrations applicatives (data) versionnées
│   ├── seed-prod.ts                   #    Seed PROD (Atlas) avec garde-fous
│   ├── clear-database.ts              #    Nettoyer la base de données
│   ├── clear-domains-themes.ts        #    Purge domaines + thèmes (garde-fous)
│   ├── export-domains-themes.ts       #    Export domaines/thèmes (JSON)
│   ├── import-domains-themes.ts       #    Import domaines/thèmes (JSON)
│   ├── sync-domains-themes-from-prod.ts # Sync prod -> dev (domaines/thèmes)
│   ├── set-user-role.ts               #    Gestion du rôle admin
│   └── test-prisma.ts                 #    Tester la connexion Prisma
│
└── 📂 src/                            # 💻 Code source principal
    │
    ├── 📂 app/                        # 🚀 Routes et pages Next.js (App Router)
    │   │
    │   ├── 📂 [locale]/               # 🌍 Routes localisées
    │   │   ├── 📂 (public)/           #    ✨ Espace PUBLIC (élèves, visiteurs)
    │   │   │   ├── layout.tsx         #       Layout pour les pages publiques
    │   │   │   ├── page.tsx           #       Page d'accueil publique (/)
    │   │   │   ├── exercises/
    │   │   │   │   └── [id]/page.tsx  #          Détail d'exercice
    │   │   │   └── log-in/            #       Authentification
    │   │   │       ├── page.tsx       #          Page de connexion
    │   │   │       ├── check-email/page.tsx
    │   │   │       └── _components/
    │   │   │           ├── log-in.tsx
    │   │   │           └── log-in-button.tsx
    │   │   │
    │   │   └── 📂 (admin)/            #    🔐 Espace ADMINISTRATION (backoffice)
    │   │       ├── layout.tsx         #       Layout admin avec sidebar et navbar
    │   │       ├── _components/       #       Composants partagés de l'admin
    │   │       │   ├── mobile-sidebar.tsx
    │   │       │   ├── navbar.tsx
    │   │       │   └── sidebar.tsx
    │   │       └── admin/             #       Routes CRUD du backoffice
    │   │           ├── curriculums/
    │   │           ├── diplomas/
    │   │           ├── divisions/
    │   │           ├── domains/
    │   │           ├── exam-papers/
    │   │           ├── examination-centers/
    │   │           ├── exercises/
    │   │           ├── grades/
    │   │           ├── subjects/
    │   │           ├── teachings/
    │   │           ├── themes/
    │   │           ├── users/
    │   │           └── stats/
    │   │
    │   ├── 📂 api/                    #    🔌 Routes API Next.js
    │   │   ├── auth/                  #       Authentification NextAuth
    │   │   │   └── [...nextauth]/
    │   │   │       └── route.ts       #          Handler NextAuth.js
    │   │   └── health/                #       Health checks
    │   │       ├── route.ts           #          Health check API
    │   │       └── db/
    │   │           └── route.ts       #          Health check base de données
    │   │
    │   ├── favicon.ico                #    Icône du site (racine app)
    │   ├── globals.css                #    Styles CSS globaux
    │   └── layout.tsx                 #    Layout racine (providers, metadata)
    │
    ├── 📂 assets/                     # 🎨 Assets du projet (images, etc.)
    │   └── images/                    #    Images et illustrations
    │       ├── avatar_placeholder.png #       Avatar par défaut
    │       ├── facebook.svg           #       Logo Facebook
    │       ├── git-hub.svg            #       Logo GitHub
    │       ├── google.svg             #       Logo Google
    │       └── spotify.svg            #       Logo Spotify
    │
    ├── 📂 components/                 # 🧩 Composants React réutilisables
    │   │
    │   ├── 📂 ui/                     #    Composants UI de base (shadcn/ui)
    │   │   ├── badge.tsx              #       Badge pour tags/statuts
    │   │   ├── button.tsx             #       Bouton avec variantes
    │   │   ├── card.tsx               #       Carte/Container
    │   │   ├── command.tsx            #       Command palette
    │   │   ├── dialog.tsx             #       Modal/Dialog
    │   │   ├── dropdown-menu.tsx      #       Menu déroulant
    │   │   ├── form.tsx               #       Formulaire avec validation
    │   │   ├── form-submit-button.tsx #       Bouton de soumission formulaire
    │   │   ├── input.tsx              #       Champ de saisie
    │   │   ├── label.tsx              #       Label de formulaire
    │   │   ├── multiple-selector.tsx  #       Sélecteur multiple
    │   │   ├── skeleton.tsx           #       Skeleton loader
    │   │   ├── table.tsx              #       Table de données
    │   │   └── tooltip.tsx            #       Info-bulle
    │   │
    │   ├── 📂 shared/                 #    Composants partagés métier
    │   │   ├── loading-button.tsx     #       Bouton avec état de chargement
    │   │   ├── search-field.tsx       #       Champ de recherche
    │   │   ├── sign-out-button.tsx    #       Bouton de déconnexion
    │   │   ├── table-title.tsx        #       Titre de tableau avec actions
    │   │   ├── user-avatar.tsx        #       Avatar utilisateur
    │   │   └── user-button.tsx        #       Menu utilisateur (profil, thème)
    │   │
    │   └── 📂 layout/                 #    Composants de structure (à créer)
    │       └── (futurs composants layout)
    │
    ├── 📂 config/                     # ⚙️ Configuration applicative
    │   └── app.ts                     #    Paramètres globaux
    │
    ├── 📂 core/                       # 🎯 LOGIQUE MÉTIER par domaine
    │   │                              #    (Backend interne de l'application)
    │   │
    │   ├── 📂 correction/             #    Corrections
    │   ├── 📂 curriculum/             #    Programmes
    │   ├── 📂 dashboard/              #    Agrégats dashboard
    │   ├── 📂 diploma/                #    Diplômes
    │   ├── 📂 division/               #    Filières
    │   ├── 📂 domain/                 #    Domaines
    │   ├── 📂 enrichment/             #    Enrichissement (LLM/OCR)
    │   ├── 📂 exam-paper/             #    Sujets d'annales
    │   ├── 📂 examination-center/     #    Centres d'examen
    │   ├── 📂 exercise/               #    Exercices
    │   ├── 📂 grade/                  #    Niveaux scolaires
    │   ├── 📂 stats/                  #    Statistiques
    │   ├── 📂 subject/                #    Matières
    │   ├── 📂 teaching/               #    Enseignements
    │   ├── 📂 theme/                  #    Thèmes
    │   └── 📂 user/                   #    Utilisateurs
    │
    ├── 📂 hooks/                      # 🪝 Custom React Hooks
    │   └── use-active-path.ts         #    Hook pour détecter la route active
    │
    ├── 📂 i18n/                       # 🌍 Configuration i18n
    │   ├── messages/                  #    Fichiers de traduction
    │   ├── request.ts                 #    Chargement côté serveur
    │   └── routing.ts                 #    Routage des locales
    │
    ├── 📂 lib/                        # 🛠️ Infrastructure et utilitaires
    │   │
    │   ├── 📂 db/                     #    Base de données
    │   │   └── prisma.ts              #       Client Prisma singleton
    │   │
    │   ├── 📂 auth/                   #    Authentification
    │   │   ├── auth.ts                #       Configuration Auth.js (NextAuth)
    │   │   ├── get-session.ts         #       Helper pour récupérer la session
    │   │   └── auth-send-request.ts   #       Envoi des emails d'authentification
    │   │
    │   ├── 📂 i18n/                   #    Helpers i18n
    │   │   ├── dictionary.ts
    │   │   ├── hooks.ts
    │   │   └── index.ts
    │   │
    │   ├── analytics.ts               #    Tracking Umami (client)
    │   ├── table.ts                   #    Helpers table
    │   ├── toast.ts                   #    Helpers toast
    │   ├── utils.ts                   #    Utilitaires génériques (cn, etc.)
    │   └── validation.ts              #    Schémas de validation Zod
    │
    ├── 📂 types/                      # 📋 Types TypeScript globaux
    │   ├── next-auth.d.ts             #    Extension des types NextAuth
    │   └── option.ts                  #    Type Option générique
    │
    └── proxy.ts                       # 🔄 Proxy pour Auth.js middleware

```

## 🎯 Points clés de l'architecture

### 1️⃣ Séparation Frontend / Backend
- **`src/app/`** : Routes et pages (frontend)
- **`src/core/`** : Logique métier (backend interne)
- **`src/lib/`** : Infrastructure (DB, Auth, Utils)

### 2️⃣ Organisation par domaine
Chaque domaine métier est isolé dans `src/core/[domain]/` avec :
- Types TypeScript
- Requêtes base de données
- Actions serveur (CRUD)
- Exports centralisés

### 3️⃣ Route Groups Next.js
- **`(public)`** : Accessible à tous (élèves, visiteurs)
- **`(admin)`** : Réservé aux administrateurs authentifiés

### 4️⃣ Composants réutilisables
- **`ui/`** : Composants UI de base (shadcn/ui)
- **`shared/`** : Composants métier partagés
- **`layout/`** : Composants de structure (à développer)

## 📊 Statistiques du projet

- **Domaines métier** : 16 (correction, curriculum, dashboard, diploma, division, domain, enrichment, exam-paper, examination-center, exercise, grade, stats, subject, teaching, theme, user)
- **Routes admin** : 12 domaines CRUD + stats (curriculums, diplomas, divisions, domains, exam-papers, examination-centers, exercises, grades, subjects, teachings, themes, users)
- **Composants UI** : 13+ composants shadcn/ui
- **Composants shared** : 6 composants métier
- **Scripts** : 20+ utilitaires (migrations, seeds, export/import, patchs, tests)
- **Documentation** : 40+ fichiers markdown

## 🚀 Pour aller plus loin

### Futures évolutions possibles :
- Ajouter des routes publiques pour les annales (`app/(public)/annales/`)
- Créer un `packages/` pour un monorepo (web + mobile)
- Ajouter ElasticSearch pour la recherche avancée
- Développer une app React Native dans `apps/mobile/`

---

**Date de création** : 19 novembre 2025  
**Version** : Post-refactoring architecture  
**Auteur** : Projet My Exams
