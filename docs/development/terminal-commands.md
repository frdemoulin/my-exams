# Commandes Terminal Utiles

Ce document recense les commandes terminal fréquemment utilisées dans le projet.

## 📦 NPM / Gestion des packages

```bash
# Installation des dépendances
npm install
npm i

# Installer un package en dépendance
npm install <package-name>
npm i <package-name>

# Installer un package en dev dependency
npm install -D <package-name>
npm i --save-dev <package-name>

# Mettre à jour un package
npm update <package-name>

# Lister les packages installés
npm list
npm list --depth=0  # Sans les dépendances transitives

# Vérifier les vulnérabilités
npm audit
npm audit fix

# Nettoyer le cache
npm cache clean --force

# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json && npm install
```

## 🚀 Scripts du projet

```bash
# Développement
npm run dev          # Lance le serveur de développement Next.js

# Build
npm run build        # Compile l'application pour la production

# Production
npm start            # Lance l'application en production

# Linting
npm run lint         # Vérifie le code avec ESLint

# Tests
npm run test:e2e                     # Tests end-to-end Playwright (démarre npm run dev sauf E2E_SKIP_SERVER=true)
E2E_RESET_DB=true npm run test:e2e   # Reset + seed auto avant les E2E
npm run prisma:test                  # Script de validation Prisma / connexion Mongo

### Deux terminaux (workflow rapide)
- **Terminal A** : `npm run dev` (démarre Next.js sur le port 3000 ou `E2E_PORT`)
- **Terminal B** : lancer vos commandes (ex. `npm run test:e2e` avec `E2E_SKIP_SERVER=true` si le serveur tourne déjà, ou `npm run prisma:test`)
```

## 🗄️ Prisma / Base de données

```bash
# Générer le client Prisma
npx prisma generate

# Synchroniser le schéma avec la base de données
npx prisma db push

# Ouvrir Prisma Studio (interface graphique)
npx prisma studio

# ⚠️ MongoDB : Prisma ne gère pas de migrations SQL (`prisma migrate`).
# - Évolution de schéma (index/uniques) : `npx prisma db push` (ou `npm run db:push`)
# - Évolution de données (backfill, renommage, normalisation) : `npm run db:migrate`
# - Déploiement prod (Render pre-deploy) : `CONFIRM_DB_MIGRATIONS=1 npm run db:deploy`

# Seed de la base de données
npm run db:seed         # Seed complet
npm run db:seed:prod    # Seed PROD (one-shot, avec garde-fous)
npm run db:clear        # Vider la base
npm run db:clear-domains-themes  # Purge domaines + themes (avec garde-fous)
npm run db:reset        # Clear + Seed

# Tester la connexion Prisma
npm run prisma:test
```

## 🔄 Git

```bash
# Statut du dépôt
git status
git status -s  # Version courte

# Voir les modifications
git diff                    # Fichiers non stagés
git diff --staged          # Fichiers stagés
git diff <branch1>..<branch2>  # Différences entre branches

# Ajouter des fichiers
git add .                  # Tous les fichiers
git add <fichier>          # Fichier spécifique
git add -p                 # Mode interactif

# Commit
git commit -m "message"
git commit -am "message"   # Add + commit des fichiers modifiés

# Push/Pull
git push origin <branch>
git pull origin <branch>

# Branches
git branch                 # Lister les branches
git branch <nom>           # Créer une branche
git checkout <branch>      # Changer de branche
git checkout -b <branch>   # Créer et changer de branche
git branch -d <branch>     # Supprimer une branche

# Logs
git log                    # Historique complet
git log --oneline          # Version condensée
git log --graph --oneline  # Avec graphique

# Annuler des modifications
git restore <fichier>      # Annuler modifications non stagées
git restore --staged <fichier>  # Unstage un fichier
git reset --soft HEAD~1    # Annuler le dernier commit (garde les modifs)
git reset --hard HEAD~1    # Annuler le dernier commit (supprime tout)

# Stash (mise de côté temporaire)
git stash                  # Mettre de côté les modifications
git stash pop              # Récupérer les modifications
git stash list             # Lister les stashs
```

## 🔍 Recherche et filtrage

```bash
# Rechercher dans les fichiers
grep -r "texte" .          # Recherche récursive
grep -r "texte" --include="*.ts"  # Fichiers TypeScript uniquement

# Compter les lignes
wc -l <fichier>            # Nombre de lignes d'un fichier
find . -name "*.ts" | xargs wc -l  # Total lignes .ts

# Trouver des fichiers
find . -name "*.tsx"       # Fichiers .tsx
find . -type f -name "page.tsx"  # Fichiers nommés page.tsx
```

## 🔀 Pipes et redirections

```bash
# Redirection de sortie
commande > fichier.txt     # Écraser le fichier
commande >> fichier.txt    # Ajouter au fichier
commande 2>&1              # Rediriger stderr vers stdout

# Pipes (chaîner des commandes)
commande1 | commande2      # Sortie de cmd1 → entrée de cmd2

# Exemples pratiques
npm run build 2>&1 | head -50     # 50 premières lignes du build
npm run build 2>&1 | tail -50     # 50 dernières lignes
npm run build 2>&1 | grep "error" # Filtrer les erreurs
npm run build 2>&1 > build.log    # Sauvegarder dans un fichier
```

## 📁 Manipulation de fichiers

```bash
# Navigation
cd <dossier>               # Changer de dossier
cd ..                      # Dossier parent
cd ~                       # Dossier home
pwd                        # Afficher le chemin actuel

# Listage
ls                         # Lister les fichiers
ls -la                     # Liste détaillée avec fichiers cachés
ls -lh                     # Avec tailles lisibles (KB, MB)

# Création
mkdir <dossier>            # Créer un dossier
mkdir -p path/to/dir       # Créer avec parents
touch <fichier>            # Créer un fichier vide

# Copie/Déplacement
cp <source> <dest>         # Copier un fichier
cp -r <source> <dest>      # Copier un dossier
mv <source> <dest>         # Déplacer/Renommer

# Suppression
rm <fichier>               # Supprimer un fichier
rm -r <dossier>            # Supprimer un dossier
rm -rf <dossier>           # Force suppression (attention !)

# Lecture de fichiers
cat <fichier>              # Afficher tout le contenu
head -n 20 <fichier>       # 20 premières lignes
tail -n 20 <fichier>       # 20 dernières lignes
tail -f <fichier>          # Suivre en temps réel
less <fichier>             # Pagination (q pour quitter)
```

## 🔧 Autres commandes utiles

```bash
# Processus
ps aux                     # Lister tous les processus
ps aux | grep node         # Processus Node.js
kill <PID>                 # Tuer un processus
killall node               # Tuer tous les processus Node

# Réseau
lsof -i :<port>            # Voir ce qui utilise un port
lsof -i :3000              # Port 3000 (Next.js dev)
netstat -an | grep <port>  # Alternative

# Variables d'environnement
env                        # Lister toutes les variables
echo $NODE_ENV             # Afficher une variable
export VAR=value           # Définir une variable

# Informations système
df -h                      # Espace disque
du -sh <dossier>           # Taille d'un dossier
free -h                    # Mémoire (Linux)
top                        # Monitoring système
htop                       # Version améliorée de top

# Historique
history                    # Voir l'historique des commandes
!<numéro>                  # Réexécuter une commande
!!                         # Réexécuter la dernière commande
```

## 🎨 shadcn/ui

```bash
# Ajouter un composant
npx shadcn@latest add <component>
npx shadcn@latest add button
npx shadcn@latest add dialog

# Ajouter plusieurs composants
npx shadcn@latest add button card dialog
```

## 🌐 Next.js spécifique

```bash
# Nettoyer le cache Next.js
rm -rf .next

# Build avec analyse des bundles
npm run build -- --profile

# Variables d'environnement
NODE_ENV=production npm run build
```

## 💡 Astuces

### Alias utiles (ajouter dans `~/.zshrc` ou `~/.bashrc`)

```bash
# Git
alias gs='git status'
alias ga='git add'
alias gc='git commit -m'
alias gp='git push'
alias gl='git log --oneline --graph'

# NPM
alias ni='npm install'
alias nid='npm install -D'
alias nr='npm run'
alias nrb='npm run build'
alias nrd='npm run dev'

# Navigation
alias ..='cd ..'
alias ...='cd ../..'
alias ll='ls -lah'

# Prisma
alias pg='npx prisma generate'
alias ps='npx prisma studio'
alias pp='npx prisma db push'
alias dm='npm run db:migrate'
alias dd='npm run db:deploy'
```

### Raccourcis clavier terminal

| Raccourci | Action |
|-----------|--------|
| `Ctrl + C` | Interrompre la commande en enseignement |
| `Ctrl + D` | Fermer le terminal |
| `Ctrl + L` | Effacer l'écran |
| `Ctrl + A` | Aller au début de la ligne |
| `Ctrl + E` | Aller à la fin de la ligne |
| `Ctrl + U` | Effacer la ligne |
| `Ctrl + R` | Rechercher dans l'historique |
| `Tab` | Auto-complétion |
| `↑ / ↓` | Naviguer dans l'historique |

---

**Note** : Cette documentation est spécifique au projet my-exams. Adapter selon vos besoins !
