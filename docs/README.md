# Documentation du projet my-exams

Documentation complète du projet de plateforme d'annales d'examens.

---

## 📁 Structure de la documentation

### 🏗️ Architecture
Documentation sur l'architecture technique de l'application.

- **[nextjs-server-client-components.md](./architecture/nextjs-server-client-components.md)** - Patterns Server/Client Components avec Next.js 16

### 📚 Guides
Guides pratiques et tutoriels pour comprendre les concepts clés.

- **[javascript-concepts.md](./guides/javascript-concepts.md)** - Concepts fondamentaux JavaScript (Promises, async/await)
- **[i18n.md](./guides/i18n.md)** - Internationalisation avec next-intl
- **[translations.md](./guides/translations.md)** - Gestion des traductions

### 🗄️ Database
Documentation liée à la base de données et Prisma.

- **[prisma.md](./database/prisma.md)** - Guide Prisma ORM
- **[prisma-composite-uniques.md](./database/prisma-composite-uniques.md)** - Contraintes uniques composites
- **[data-models.md](./database/data-models.md)** - Modèles de données (MCD)
- **[datas.md](./database/datas.md)** - Structure des données
- **[fixtures.md](./database/fixtures.md)** - Données de test et seeds

### 💻 Development
Outils et ressources pour le développement.

- **[terminal-commands.md](./development/terminal-commands.md)** - Commandes terminal utiles
- **[colors.md](./development/colors.md)** - Palette de couleurs du design system

### ⚙️ Technical Setup
Configuration technique et installation d'outils.

- **[mongodb-macos.md](./technical-setup/mongodb-macos.md)** - Installation MongoDB sur macOS
- **[smtp-ovh.md](./technical-setup/smtp-ovh.md)** - Configuration SMTP avec OVH

### 📋 Project Management
Suivi du projet et historique des modifications.

- **[CHANGELOG.md](./project-management/CHANGELOG.md)** - Journal des modifications
- **[REFACTORING.md](./project-management/REFACTORING.md)** - Historique des refactorisations
- **[tree.md](./project-management/tree.md)** - Arborescence du projet

---

## 🚀 Démarrage rapide

### Nouveaux développeurs
1. Lire **[javascript-concepts.md](./guides/javascript-concepts.md)** pour les fondamentaux
2. Consulter **[nextjs-server-client-components.md](./architecture/nextjs-server-client-components.md)** pour l'architecture
3. Suivre **[prisma.md](./database/prisma.md)** pour la base de données
4. Référencer **[terminal-commands.md](./development/terminal-commands.md)** pour les commandes

### Développeurs expérimentés
- Architecture : **architecture/**
- Data models : **[data-models.md](./database/data-models.md)**
- Historique : **[CHANGELOG.md](./project-management/CHANGELOG.md)**

---

## 📝 Convention de documentation

Chaque fichier de documentation devrait suivre cette structure :

```markdown
# Titre

Description courte

---

## Section 1

Contenu...

## Section 2

Contenu...

---

## Ressources

- Liens externes
```

---

## 🔄 Mise à jour de la documentation

- **Nouvelles fonctionnalités** → Ajouter dans `CHANGELOG.md`
- **Refactoring important** → Documenter dans `REFACTORING.md`
- **Nouveau concept technique** → Créer un fichier dans le dossier approprié
- **Changement d'architecture** → Mettre à jour `architecture/`
- **Nouveau modèle de données** → Mettre à jour `data-models.md`

---

## 📞 Questions ?

Si tu ne trouves pas ce que tu cherches dans la documentation, n'hésite pas à :
1. Utiliser GitHub Copilot pour des explications contextuelles
2. Consulter les issues GitHub du projet
3. Contacter l'équipe de développement
