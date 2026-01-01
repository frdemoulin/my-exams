# Documentation du projet my-exams

Documentation complète du projet de plateforme d'annales d'examens.

---

## ⭐ Architecture Exercise-Centric (Novembre 2025)

**My Exams utilise une architecture centrée sur les exercices** :
- Les élèves recherchent des **exercices spécifiques** par thème (ex: "titrage acide-base")
- Chaque exercice conserve la **traçabilité complète** de son sujet parent
- Les `ExamPaper` servent de **conteneurs**, les `Exercise` sont l'**unité de recherche**

📖 **Documentation clé** :
- **[exercise-centric-refactoring.md](./database/exercise-centric-refactoring.md)** - Vision et plan complet du refactoring
- **[exam-indexing-pivot-plan.md](./project-management/exam-indexing-pivot-plan.md)** - État d'avancement des phases de migration
- **[data-models.md](./database/data-models.md)** - Modèles Exercise, ExerciseCorrection, ExamPaper

---

## 📁 Structure de la documentation

### 🏗️ Architecture
Documentation sur l'architecture technique de l'application.

- **[nextjs-server-client-components.md](./architecture/nextjs-server-client-components.md)** - Patterns Server/Client Components avec Next.js 16

### 📚 Guides
Guides pratiques et tutoriels pour comprendre les concepts clés.

- **[javascript-concepts.md](./guides/javascript-concepts.md)** - Concepts fondamentaux JavaScript (Promises, async/await)
- **[i18n.md](./guides/i18n.md)** - Libellés & terminologie (next-intl en mono-langue)
- **[translations.md](./guides/translations.md)** - Glossaire métier (termes techniques → vocabulaire produit)
- **[seo.md](./guides/seo.md)** - SEO minimal (sitemap, robots, pages indexables)

### 🗄️ Database
Documentation liée à la base de données et Prisma.

- **[exercise-centric-refactoring.md](./database/exercise-centric-refactoring.md)** - ⭐ Architecture Exercise-Centric (LIRE EN PREMIER)
- **[data-models.md](./database/data-models.md)** - Modèles de données (MCD) incluant Exercise et ExerciseCorrection
- **[prisma.md](./database/prisma.md)** - Guide Prisma ORM
- **[prisma-composite-uniques.md](./database/prisma-composite-uniques.md)** - Contraintes uniques composites
- **[datas.md](./database/datas.md)** - Structure des données
- **[fixtures.md](./database/fixtures.md)** - Données de test et seeds
- **[hierarchy.md](./database/hierarchy.md)** - Hiérarchie pédagogique (Diploma → Division → Grade → Teaching → Subject)

### 💻 Development
Outils et ressources pour le développement.

- **[terminal-commands.md](./development/terminal-commands.md)** - Commandes terminal utiles
- **[colors.md](./development/colors.md)** - Palette de couleurs du design system

### ⚙️ Technical Setup
Configuration technique et installation d'outils.

- **[mongodb-macos.md](./technical-setup/mongodb-macos.md)** - Installation MongoDB sur macOS
- **[smtp-ovh.md](./technical-setup/smtp-ovh.md)** - Configuration SMTP avec OVH

### 🚀 Déploiement
Documentation liée aux environnements de production.

- **[render.md](./deployment/render.md)** - Déploiement Render (Docker, uploads persistants, Umami)

### 📋 Project Management
Suivi du projet et historique des modifications.

- **[exam-indexing-pivot-plan.md](./project-management/exam-indexing-pivot-plan.md)** - ⭐ Plan de migration Exercise-Centric (état d'avancement)
- **[CHANGELOG.md](./project-management/CHANGELOG.md)** - Journal des modifications
- **[scheduled-tasks.md](./deployment/scheduled-tasks.md)** - Tâches planifiées (cron)
- **[REFACTORING.md](./project-management/REFACTORING.md)** - Architecture globale et structure des dossiers
- **[tree.md](./project-management/tree.md)** - Arborescence du projet

---

## 🚀 Démarrage rapide

### Nouveaux développeurs
1. **LIRE EN PREMIER** : **[exercise-centric-refactoring.md](./database/exercise-centric-refactoring.md)** - Comprendre l'architecture actuelle
2. Lire **[javascript-concepts.md](./guides/javascript-concepts.md)** pour les fondamentaux
3. Consulter **[nextjs-server-client-components.md](./architecture/nextjs-server-client-components.md)** pour l'architecture
4. Suivre **[prisma.md](./database/prisma.md)** pour la base de données
5. Référencer **[terminal-commands.md](./development/terminal-commands.md)** pour les commandes

### Développeurs expérimentés
- **Architecture Exercise-Centric** : **[exercise-centric-refactoring.md](./database/exercise-centric-refactoring.md)**
- **État du projet** : **[exam-indexing-pivot-plan.md](./project-management/exam-indexing-pivot-plan.md)**
- **Data models** : **[data-models.md](./database/data-models.md)**
- **Historique** : **[CHANGELOG.md](./project-management/CHANGELOG.md)**

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
