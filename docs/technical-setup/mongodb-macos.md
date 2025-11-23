# MongoDB sur macOS (Intel)

Guide complet pour installer, configurer et utiliser MongoDB sur macOS Intel.

## Comprendre l'écosystème MongoDB

### MongoDB Local (serveur)
**C'est quoi ?** Un serveur de base de données qui tourne directement sur votre Mac.

**À quoi ça sert ?**
- 🏠 **Développement local** : Tester votre application sans connexion internet
- ⚡ **Performance** : Latence ultra-faible (ms), idéal pour le dev
- 🔒 **Confidentialité** : Vos données restent sur votre machine
- 💰 **Gratuit** : Pas de limite de stockage (sauf disque dur)

**Quand l'utiliser ?**
- Phase de développement et tests
- Prototypage rapide
- Application sans besoin de synchronisation cloud
- Environnement offline

### Mongosh (MongoDB Shell)
**C'est quoi ?** Un terminal interactif pour communiquer avec MongoDB (comme `psql` pour PostgreSQL ou `mysql` pour MySQL).

**À quoi ça sert ?**
- 💻 **Administration** : Créer/supprimer des bases, collections, utilisateurs
- 🔍 **Requêtes** : Rechercher, insérer, modifier, supprimer des données
- 🧪 **Debugging** : Tester des requêtes avant de les coder dans l'app
- 📊 **Scripts** : Automatiser des tâches (imports, migrations)

**Pourquoi c'est important ?**
- Interface directe avec la base (sans GUI, plus rapide)
- Utile pour les opérations complexes ou scripts
- Indispensable pour comprendre comment MongoDB fonctionne

**Exemple d'usage :**
```bash
mongosh                           # Se connecter
use my-exams                      # Créer/sélectionner une base
db.users.find({ role: "admin" })  # Chercher tous les admins
```

### MongoDB Atlas (cloud)
**C'est quoi ?** MongoDB hébergé dans le cloud par MongoDB Inc. (comme AWS RDS, mais spécialisé MongoDB).

**À quoi ça sert ?**
- ☁️ **Production** : Base de données accessible 24/7 depuis n'importe où
- 🔄 **Backup automatique** : Sauvegardes quotidiennes incluses
- 📈 **Scalabilité** : Passer de 0 à 1M d'utilisateurs sans reconfigurer
- 🌍 **Distribution géographique** : Serveurs proches de vos utilisateurs
- 🛡️ **Sécurité managée** : Chiffrement, authentification, monitoring

**Quand l'utiliser ?**
- Application en production accessible sur internet
- Besoin de haute disponibilité (99.9% uptime)
- Équipe distribuée (accès partagé à la base)
- Pas envie de gérer l'infrastructure serveur

**Offre gratuite (M0) :**
- ✅ 512 MB de stockage
- ✅ Connexions partagées (suffisant pour petits projets)
- ✅ Backup limité à 2 jours
- ❌ Pas de réplication multi-région

**Comparaison avec local :**
| Critère | MongoDB Local | MongoDB Atlas |
|---------|---------------|---------------|
| **Coût** | Gratuit illimité | 512 MB gratuit, puis payant |
| **Accès** | Uniquement depuis votre Mac | Depuis n'importe où (internet) |
| **Maintenance** | Vous gérez tout | Géré par MongoDB |
| **Backup** | Manuel | Automatique |
| **Latence** | ~1 ms | ~50-200 ms (selon localisation) |
| **Usage** | Dev/test | Production |

### Workflow typique d'un projet

```
Développement (local)          Production (cloud)
┌─────────────────────┐       ┌─────────────────────┐
│  MongoDB Local      │       │   MongoDB Atlas     │
│  (votre Mac)        │──────▶│   (cloud)           │
│                     │       │                     │
│  mongosh           │       │  Accès via URI      │
│  Compass (GUI)     │       │  Monitoring web     │
└─────────────────────┘       └─────────────────────┘
        ▲                              ▲
        │                              │
   npm run dev                    npm run start
  (DATABASE_URL=local)         (DATABASE_URL=atlas)
```

**Exemple concret pour `my-exams` :**
1. **Dev local** : Créer des annales, tester les tags, développer l'UI → MongoDB sur votre Mac
2. **Staging/test** : Partager avec des beta-testeurs → MongoDB Atlas (cluster gratuit)
3. **Production** : Ouvrir au public → MongoDB Atlas (cluster M2+ payant si > 512 MB)

## Installation

### Via Homebrew (recommandé)

```bash
# Installer Homebrew si ce n'est pas déjà fait
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Ajouter le tap MongoDB
brew tap mongodb/brew

# Installer MongoDB Community Edition
brew install mongodb-community@8.0
```

### Démarrer MongoDB

```bash
# Démarrer MongoDB comme service (au démarrage)
brew services start mongodb-community@8.0

# Vérifier que le service est actif
brew services list | grep mongodb

# Alternative : démarrer manuellement (non persistant)
mongod --config /opt/homebrew/etc/mongod.conf
```

### Arrêter MongoDB

```bash
# Arrêter le service
brew services stop mongodb-community@8.0

# Redémarrer le service
brew services restart mongodb-community@8.0
```

## Configuration

### Fichiers importants

- **Config**: `/opt/homebrew/etc/mongod.conf` (ou `/usr/local/etc/mongod.conf`)
- **Data**: `/opt/homebrew/var/mongodb` (ou `/usr/local/var/mongodb`)
- **Logs**: `/opt/homebrew/var/log/mongodb` (ou `/usr/local/var/log/mongodb`)

### Modifier la configuration

```bash
# Éditer le fichier de configuration
nano /opt/homebrew/etc/mongod.conf
```

Configuration par défaut :
```yaml
systemLog:
  destination: file
  path: /opt/homebrew/var/log/mongodb/mongo.log
  logAppend: true
storage:
  dbPath: /opt/homebrew/var/mongodb
net:
  bindIp: 127.0.0.1
  port: 27017
```

## Accès en ligne de commande

### Mongosh (MongoDB Shell)

```bash
# Installer mongosh
brew install mongosh

# Se connecter à MongoDB local
mongosh

# Se connecter avec une URI spécifique
mongosh "mongodb://localhost:27017"

# Se connecter à MongoDB Atlas
mongosh "mongodb+srv://username:password@cluster.mongodb.net/dbname"
```

### Commandes de base

```javascript
// Afficher les bases de données
show dbs

// Sélectionner/créer une base de données
use my-exams

// Afficher les collections
show collections

// Créer une collection
db.createCollection("users")

// Insérer un document
db.users.insertOne({
  name: "John Doe",
  email: "john@example.com",
  role: "admin"
})

// Rechercher des documents
db.users.find()
db.users.findOne({ email: "john@example.com" })

// Mettre à jour
db.users.updateOne(
  { email: "john@example.com" },
  { $set: { role: "superadmin" } }
)

// Supprimer
db.users.deleteOne({ email: "john@example.com" })

// Afficher les statistiques
db.stats()
```

## Interface graphique (GUI)

### MongoDB Compass (officiel, gratuit)

```bash
# Télécharger depuis le site officiel
open https://www.mongodb.com/try/download/compass

# Ou via Homebrew Cask
brew install --cask mongodb-compass
```

**Connexion :**
1. Ouvrir MongoDB Compass
2. URI de connexion : `mongodb://localhost:27017`
3. Cliquer sur "Connect"

### Studio 3T (gratuit/payant)

```bash
# Télécharger depuis le site
open https://studio3t.com/download/

# Installer et lancer
# Version gratuite disponible avec limitations
```

### NoSQLBooster (gratuit/payant)

```bash
# Télécharger
open https://nosqlbooster.com/downloads
```

### Robo 3T (gratuit, anciennement Robomongo)

```bash
# Télécharger
open https://robomongo.org/download
```

## Créer et configurer une base de données

### Pour le projet my-exams

```bash
# Se connecter à MongoDB
mongosh

# Créer la base de données
use my-exams

# Créer un utilisateur pour cette base
db.createUser({
  user: "myexams_user",
  pwd: "votre_mot_de_passe_securise",
  roles: [
    { role: "readWrite", db: "my-exams" }
  ]
})

# Vérifier
db.getUsers()
```

### URI de connexion pour l'application

```bash
# Local sans authentification
DATABASE_URL="mongodb://localhost:27017/my-exams"

# Local avec authentification
DATABASE_URL="mongodb://myexams_user:votre_mot_de_passe_securise@localhost:27017/my-exams"

# MongoDB Atlas (cloud)
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/my-exams?retryWrites=true&w=majority"
```

## Configuration Prisma

### Schéma Prisma (`prisma/schema.prisma`)

```prisma
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  email String @unique
  name  String?
  role  String @default("user")
}
```

### Commandes Prisma

```bash
# Générer le client Prisma
npx prisma generate

# Push le schéma vers MongoDB (dev)
npx prisma db push

# Ouvrir Prisma Studio (GUI web)
npx prisma studio
```

## Backup et restauration

### Exporter une base de données

```bash
# Exporter toute la base
mongodump --db=my-exams --out=/path/to/backup

# Exporter une collection spécifique
mongodump --db=my-exams --collection=users --out=/path/to/backup

# Exporter au format JSON
mongoexport --db=my-exams --collection=users --out=users.json --jsonArray
```

### Importer/Restaurer

```bash
# Restaurer toute la base
mongorestore --db=my-exams /path/to/backup/my-exams

# Importer un fichier JSON
mongoimport --db=my-exams --collection=users --file=users.json --jsonArray
```

## MongoDB Atlas (Cloud)

### Créer un cluster gratuit

1. Aller sur [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Créer un compte gratuit
3. Créer un cluster M0 (gratuit)
4. Configurer :
   - **Network Access** : Ajouter votre IP ou `0.0.0.0/0` (dev uniquement)
   - **Database Access** : Créer un utilisateur avec mot de passe
5. Récupérer l'URI de connexion :
   ```
   mongodb+srv://<username>:<password>@cluster.mongodb.net/my-exams
   ```

### Avantages d'Atlas

- ✅ Hébergement gratuit (512 MB)
- ✅ Backup automatique
- ✅ Monitoring intégré
- ✅ Accès via GUI web
- ✅ Pas de maintenance serveur

## Dépannage

### MongoDB ne démarre pas

```bash
# Vérifier les logs
tail -f /opt/homebrew/var/log/mongodb/mongo.log

# Vérifier les permissions
sudo chown -R $(whoami) /opt/homebrew/var/mongodb
sudo chown -R $(whoami) /opt/homebrew/var/log/mongodb

# Supprimer le fichier de lock si bloqué
rm /opt/homebrew/var/mongodb/mongod.lock

# Réparer la base
mongod --dbpath /opt/homebrew/var/mongodb --repair
```

### Port 27017 déjà utilisé

```bash
# Trouver le processus
lsof -i :27017

# Tuer le processus
kill -9 <PID>
```

### Réinstaller MongoDB

```bash
# Désinstaller complètement
brew services stop mongodb-community@8.0
brew uninstall mongodb-community@8.0
rm -rf /opt/homebrew/var/mongodb
rm -rf /opt/homebrew/var/log/mongodb

# Réinstaller
brew install mongodb-community@8.0
brew services start mongodb-community@8.0
```

## Ressources

- [Documentation officielle MongoDB](https://docs.mongodb.com/)
- [MongoDB University (cours gratuits)](https://university.mongodb.com/)
- [Prisma + MongoDB](https://www.prisma.io/docs/concepts/database-connectors/mongodb)
- [MongoDB Compass Guide](https://docs.mongodb.com/compass/current/)

## Commandes utiles de maintenance

```bash
# Vérifier la version
mongod --version

# Vérifier l'état du service
brew services info mongodb-community@8.0

# Voir les processus MongoDB actifs
ps aux | grep mongod

# Taille de la base de données
mongosh --eval "db.stats()"

# Optimiser les index
mongosh my-exams --eval "db.users.createIndex({ email: 1 })"
```
