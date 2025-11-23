# Arborescence du projet My Exams

Documentation de la structure du projet

## 📁 Structure complète avec explications

```
my-exams/
│
├── 📄 .env.local                      # Variables d'environnement locales (non versionnées)
├── 📄 .eslintrc.json                  # Configuration ESLint pour la qualité du code
├── 📄 .gitignore                      # Fichiers et dossiers à ignorer par Git
├── 📄 components.json                 # Configuration shadcn/ui pour les composants UI
├── 📄 next-env.d.ts                   # Types TypeScript générés par Next.js
├── 📄 next.config.mjs                 # Configuration Next.js (routes, redirections, etc.)
├── 📄 package.json                    # Dépendances et scripts npm du projet
├── 📄 postcss.config.mjs              # Configuration PostCSS pour Tailwind
├── 📄 README.md                       # Documentation principale du projet
├── 📄 tailwind.config.ts              # Configuration Tailwind CSS (thème, plugins)
├── 📄 tsconfig.json                   # Configuration TypeScript du projet
│
├── 📂 docs/                           # 📚 Documentation du projet
│   ├── CHANGELOG.md                   #    Historique des changements
│   ├── REFACTORING.md                 #    Documentation du refactoring architecture
│   ├── colors.md                      #    Palette de couleurs du projet
│   ├── data-models.md                 #    Modèles de données et relations
│   ├── datas.md                       #    Documentation des données
│   ├── fixtures.md                    #    Guide des fixtures et données de test
│   ├── mongodb-macos.md               #    Installation MongoDB sur macOS
│   ├── prisma-composite-uniques.md    #    Documentation contraintes Prisma
│   ├── prisma.md                      #    Guide d'utilisation Prisma
│   ├── smtp-ovh.md                    #    Configuration SMTP OVH
│   ├── translations.md                #    Guide de traduction/i18n
│   └── tree.md                        #    Cette arborescence commentée
│
├── 📂 prisma/                         # 🗄️ Schéma et seeds base de données
│   ├── schema.prisma                  #    Définition du schéma de données (MongoDB)
│   ├── seed.ts                        #    Script de seed principal
│   └── seeds/                         #    Scripts de seed par entité
│       ├── diploma.seed.ts            #       Données initiales des diplômes
│       ├── division.seed.ts           #       Données initiales des filières
│       ├── examination-center.seed.ts #       Données initiales des centres d'examen
│       ├── grade.seed.ts              #       Données initiales des niveaux scolaires
│       ├── subject.seed.ts            #       Données initiales des matières
│       ├── topic.seed.ts              #       Données initiales des thèmes
│       └── user.seed.ts               #       Données initiales des utilisateurs
│
├── 📂 public/                         # 🌐 Fichiers statiques publics
│   ├── favicon.ico                    #    Icône du site
│   └── ...                            #    Images, logos, assets statiques
│
├── 📂 scripts/                        # 🔧 Scripts utilitaires
│   ├── clear-database.ts              #    Nettoyer la base de données
│   ├── seed-dev.ts                    #    Seed pour environnement de développement
│   └── test-prisma.ts                 #    Tester la connexion Prisma
│
└── 📂 src/                            # 💻 Code source principal
    │
    ├── 📂 app/                        # 🚀 Routes et pages Next.js (App Router)
    │   │
    │   ├── 📂 (public)/               #    ✨ Espace PUBLIC (élèves, visiteurs)
    │   │   ├── layout.tsx             #       Layout pour les pages publiques
    │   │   ├── page.tsx               #       Page d'accueil publique (/)
    │   │   └── log-in/                #       Authentification
    │   │       └── log-in/
    │   │           ├── page.tsx       #          Page de connexion
    │   │           └── _components/   #          Composants du login
    │   │               ├── log-in.tsx
    │   │               └── log-in-button.tsx
    │   │
    │   ├── 📂 (admin)/                #    🔐 Espace ADMINISTRATION (backoffice)
    │   │   ├── layout.tsx             #       Layout admin avec sidebar et navbar
    │   │   ├── dashboard/             #       Dashboard principal admin
    │   │   │   └── page.tsx           #          Page d'accueil admin (/dashboard)
    │   │   │
    │   │   ├── _components/           #       Composants partagés de l'admin
    │   │   │   ├── mobile-sidebar.tsx #          Sidebar responsive mobile
    │   │   │   ├── navbar.tsx         #          Barre de navigation admin
    │   │   │   └── sidebar.tsx        #          Menu latéral admin
    │   │   │
    │   │   └── admin/                 #       Routes CRUD du backoffice
    │   │       │
    │   │       ├── diplomas/          #          📜 Gestion des diplômes
    │   │       │   ├── page.tsx       #             Liste des diplômes
    │   │       │   ├── add/page.tsx   #             Ajouter un diplôme
    │   │       │   ├── [id]/
    │   │       │   │   ├── page.tsx   #             Détail d'un diplôme
    │   │       │   │   └── edit/page.tsx  #         Éditer un diplôme
    │   │       │   └── _components/   #             Composants spécifiques diplômes
    │   │       │       ├── columns.tsx
    │   │       │       ├── data-table.tsx
    │   │       │       └── diploma-form.tsx
    │   │       │
    │   │       ├── divisions/         #          📚 Gestion des filières
    │   │       │   ├── page.tsx
    │   │       │   ├── add/page.tsx
    │   │       │   ├── [id]/
    │   │       │   │   ├── page.tsx
    │   │       │   │   └── edit/page.tsx
    │   │       │   └── _components/
    │   │       │       ├── columns.tsx
    │   │       │       ├── data-table.tsx
    │   │       │       └── division-form.tsx
    │   │       │
    │   │       ├── examination-centers/ #        🏛️ Gestion des centres d'examen
    │   │       │   ├── page.tsx
    │   │       │   ├── add/page.tsx
    │   │       │   ├── [id]/
    │   │       │   │   ├── page.tsx
    │   │       │   │   └── edit/page.tsx
    │   │       │   └── _components/
    │   │       │       ├── columns.tsx
    │   │       │       ├── data-table.tsx
    │   │       │       └── examination-center-form.tsx
    │   │       │
    │   │       ├── grades/            #          📊 Gestion des niveaux scolaires
    │   │       │   ├── page.tsx
    │   │       │   ├── add/page.tsx
    │   │       │   ├── [id]/
    │   │       │   │   ├── page.tsx
    │   │       │   │   └── edit/page.tsx
    │   │       │   └── _components/
    │   │       │       ├── columns.tsx
    │   │       │       ├── data-table.tsx
    │   │       │       └── grade-form.tsx
    │   │       │
    │   │       ├── subjects/          #          📖 Gestion des matières
    │   │       │   ├── page.tsx
    │   │       │   ├── add/page.tsx
    │   │       │   ├── [id]/
    │   │       │   │   ├── page.tsx
    │   │       │   │   └── edit/page.tsx
    │   │       │   └── _components/
    │   │       │       ├── columns.tsx
    │   │       │       ├── data-table.tsx
    │   │       │       └── subject-form.tsx
    │   │       │
    │   │       ├── topics/            #          🏷️ Gestion des thèmes
    │   │       │   ├── page.tsx
    │   │       │   ├── add/page.tsx
    │   │       │   ├── [id]/
    │   │       │   │   ├── page.tsx
    │   │       │   │   └── edit/page.tsx
    │   │       │   └── _components/
    │   │       │       ├── columns.tsx
    │   │       │       ├── data-table.tsx
    │   │       │       └── topic-form.tsx
    │   │       │
    │   │       └── users/             #          👥 Gestion des utilisateurs
    │   │           ├── page.tsx
    │   │           └── _components/
    │   │               ├── columns.tsx
    │   │               └── data-table.tsx
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
    │   ├── globals.css                #    Styles CSS globaux (Tailwind)
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
    ├── 📂 core/                       # 🎯 LOGIQUE MÉTIER par domaine
    │   │                              #    (Backend interne de l'application)
    │   │
    │   ├── 📂 diploma/                #    📜 Domaine DIPLÔMES
    │   │   ├── diploma.types.ts       #       Types TypeScript
    │   │   ├── diploma.queries.ts     #       Requêtes base de données (Prisma)
    │   │   ├── diploma.actions.ts     #       Server actions (CRUD)
    │   │   └── index.ts               #       Exports centralisés du domaine
    │   │
    │   ├── 📂 division/               #    📚 Domaine FILIÈRES
    │   │   ├── division.types.ts
    │   │   ├── division.queries.ts
    │   │   ├── division.actions.ts
    │   │   └── index.ts
    │   │
    │   ├── 📂 examination-center/     #    🏛️ Domaine CENTRES D'EXAMEN
    │   │   ├── examination-center.types.ts
    │   │   ├── examination-center.queries.ts
    │   │   ├── examination-center.actions.ts
    │   │   └── index.ts
    │   │
    │   ├── 📂 grade/                  #    📊 Domaine NIVEAUX SCOLAIRES
    │   │   ├── grade.types.ts
    │   │   ├── grade.queries.ts
    │   │   ├── grade.actions.ts
    │   │   └── index.ts
    │   │
    │   ├── 📂 subject/                #    📖 Domaine MATIÈRES
    │   │   ├── subject.types.ts
    │   │   ├── subject.queries.ts
    │   │   ├── subject.actions.ts
    │   │   └── index.ts
    │   │
    │   ├── 📂 topic/                  #    🏷️ Domaine THÈMES
    │   │   ├── topic.types.ts
    │   │   ├── topic.queries.ts
    │   │   ├── topic.actions.ts
    │   │   └── index.ts
    │   │
    │   └── 📂 user/                   #    👥 Domaine UTILISATEURS
    │       ├── user.queries.ts
    │       ├── user.actions.ts
    │       └── index.ts
    │
    ├── 📂 hooks/                      # 🪝 Custom React Hooks
    │   └── use-active-path.ts         #    Hook pour détecter la route active
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
    │   ├── 📂 validation/             #    Validation des données
    │   │   └── index.ts               #       Schémas Zod pour validation
    │   │
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

- **Domaines métier** : 7 (diploma, division, examination-center, grade, subject, topic, user)
- **Routes admin CRUD** : 6 domaines complets avec list/add/view/edit
- **Composants UI** : 13+ composants shadcn/ui
- **Composants shared** : 6 composants métier
- **Scripts** : 3 utilitaires (clear, seed, test)
- **Documentation** : 12 fichiers markdown

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
