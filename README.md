# My Exams - Moteur de recherche d'exercices d'annales

Plateforme de recherche d'exercices d'annales du Brevet au BTS avec enrichissement automatique des métadonnées (durée, difficulté, thèmes).

## 🎯 Architecture Exercise-Centric

Les élèves recherchent des **exercices spécifiques** par thème (ex: "titrage acide-base"), pas des sujets complets. Chaque exercice conserve la traçabilité de son sujet parent.

📖 **Documentation** : [docs/MIGRATION-EXERCISE-CENTRIC.md](./docs/MIGRATION-EXERCISE-CENTRIC.md)

## Getting Started

### 1. Installation des paquets
```bash
npm install
```

### 2. Configuration MongoDB
Voir [docs/mongodb-macos.md](./docs/mongodb-macos.md) pour installation et configuration complète.

```bash
# Démarrer MongoDB local
brew services start mongodb-community@8.0

# Créer la base et utilisateur (via mongosh)
mongosh
use my-exams
db.createUser({
  user: "root",
  pwd: "votre_mot_de_passe",
  roles: [{ role: "readWrite", db: "my-exams" }]
})
```

### 3. Variables d'environnement
Créer un fichier `.env.local` à la racine :

```bash
# Base de données MongoDB
DATABASE_URL="mongodb://root:votre_mot_de_passe@localhost:27017/my-exams"

# Auth.js secret (OBLIGATOIRE)
# Générer avec: openssl rand -base64 32
AUTH_SECRET="votre_secret_genere_aleatoirement"

# OAuth providers (optionnel)
AUTH_GITHUB_ID="your_github_client_id"
AUTH_GITHUB_SECRET="your_github_client_secret"
AUTH_GOOGLE_ID="your_google_client_id"
AUTH_GOOGLE_SECRET="your_google_client_secret"
AUTH_FACEBOOK_ID="your_facebook_app_id"
AUTH_FACEBOOK_SECRET="your_facebook_app_secret"
```

**Générer `AUTH_SECRET` :**
```bash
openssl rand -base64 32
```

⚠️ **Important** : Ne jamais commit `.env.local` (déjà dans `.gitignore`)

### 4. Prisma
```bash
# Générer le client Prisma
npx prisma generate

# Push le schéma vers MongoDB
npx prisma db push
```

### 5. Lancement
```bash
# Développement
npm run dev

# Production
npm run build
npm run start
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Migration Next.js 16

Cette branche (`chore/update-next-js`) met à jour:
- Next.js `16.0.3`
- React / React DOM `19.0.0` (types intégrés)
- Script lint: `npm run lint` utilise désormais `eslint . --max-warnings=0`
- Suppression de l'installation avec `--legacy-peer-deps`
- Migration `middleware.ts` → `proxy.ts`
- Migration `images.domains` → `images.remotePatterns`

### Changements Breaking
1. **AUTH_SECRET obligatoire** : NextAuth nécessite maintenant une clé secrète
2. **TypeScript strict** : Gestion des valeurs `null` obligatoire
3. **ESLint 9** : Configuration mise à jour

### Étapes après clonage
```bash
# 1. Installer les dépendances
npm install

# 2. Créer .env.local avec DATABASE_URL et AUTH_SECRET (voir ci-dessus)
# 3. Configurer MongoDB (voir docs/mongodb-macos.md)

# 4. Build
npm run build

# 5. Start
npm run start
```

## Déploiement Production

### Variables d'environnement requises

Sur votre hébergeur (Vercel, Netlify, etc.), définir :

```bash
# MongoDB (Atlas recommandé en production)
DATABASE_URL="mongodb+srv://user:password@cluster.mongodb.net/my-exams"

# Auth.js secret (NOUVEAU POUR LA PROD, ne pas réutiliser celui de dev)
AUTH_SECRET="generer_un_nouveau_secret_avec_openssl"

# OAuth providers
AUTH_GITHUB_ID="..."
AUTH_GITHUB_SECRET="..."
AUTH_GOOGLE_ID="..."
AUTH_GOOGLE_SECRET="..."
AUTH_FACEBOOK_ID="..."
AUTH_FACEBOOK_SECRET="..."

# URL de l'application (pour OAuth callbacks)
NEXTAUTH_URL="https://votre-domaine.com"
```

### Sécurité

- ✅ **Un `AUTH_SECRET` différent par environnement** (dev, staging, prod)
- ✅ **Ne jamais commit `.env.local`**
- ✅ **Utiliser MongoDB Atlas** en production (backup auto, monitoring)
- ✅ **Activer l'authentification MongoDB** avec mot de passe fort
- ✅ **Restreindre les IP autorisées** dans Atlas Network Access

### Commandes MongoDB
```bash
# Démarrer MongoDB local
brew services start mongodb-community@8.0

# Arrêter MongoDB local
brew services stop mongodb-community@8.0

# Se connecter via mongosh
mongosh "mongodb://root:password@localhost:27017/my-exams"
```

## Ressources

- [Documentation MongoDB sur macOS](./docs/mongodb-macos.md)
- [Next.js 16 Documentation](https://nextjs.org/docs)
- [Auth.js Documentation](https://authjs.dev)
- [Prisma + MongoDB](https://www.prisma.io/docs/concepts/database-connectors/mongodb)

### Lint
```bash
npm run lint
```
