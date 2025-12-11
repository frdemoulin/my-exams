# Stratégie de tests (bref)

Ce document résume les types de tests recommandés pour l’application (Next.js + Prisma + Flowbite), avec l’objectif de sécuriser rapidement les fonctionnalités clés sans viser une couverture exhaustive immédiate.

## 1) Smoke tests
- **But** : détecter rapidement une régression majeure (erreur 500, page qui ne charge plus, API cassée) après un déploiement.
- **Exemples** :
  - API `/api/exercises/search` répond en 200 et renvoie au moins 1 exercice ; filtrer par chaque matière renvoie un résultat (grâce aux seeds).
  - Page d’accueil publique (`/`) se rend sans erreur (SSR/CSR OK).
  - Page admin avec tableau (ex. `/admin/diplomas`) se rend ou redirige correctement si non connecté.
- **Outils possibles** : tests API rapides (supertest/undici), ou e2e ultra-légers (Playwright) exécutés en CI.

## 2) Tests d’intégration API/Services
- **But** : valider la logique métier sans passer par le navigateur, avec une base de données seedée.
- **Exemples** :
  - Recherche d’exercices : filtres diplôme/matière/difficulté renvoient les bons éléments, pagination cohérente.
  - Création d’un sujet/exercice via services Prisma (validation des schémas, contraintes).
- **Outils** : vitest/jest + Prisma test DB (SQLite ou Mongo en mémoire), seeds dédiés et nettoyage entre tests.

## 3) Tests e2e (parcours utilisateurs)
- **But** : valider les parcours critiques côté UI.
- **Parcours recommandés** :
  - Public : recherche sur la page d’accueil (saisie + filtres), ouverture d’un sujet et de sa correction.
  - Admin : connexion (SSO simulé ou bypass), affichage d’un tableau (diplômes/exam papers), création rapide (dummy) et suppression.
- **Outils** : Playwright ou Cypress. À exécuter au moins en nightly ou avant release.

## 4) Tests d’accessibilité (rapides)
- **But** : s’assurer qu’aucune régression majeure a11y n’est introduite.
- **Exemples** : scan axe sur les pages clés (home, tableau admin) ; vérifier la présence des labels sur inputs et des textes alternatifs.

## 5) Tests de régression visuelle (optionnel)
- **But** : capter les décalages UI après refonte CSS.
- **Outils** : Playwright + snapshots visuels, BackstopJS, Chromatic (si Storybook adopté).

## 6) Quand les lancer ?
- **CI rapide (push/PR)** : smoke tests API + 1–2 e2e courts (home, tableau admin), éventuellement a11y rapide.
- **Nightly** : suite d’intégration + e2e principaux.
- **Pré-release** : e2e étendus + visuel (si configuré).

## 7) Données de test
- Utiliser des seeds minimaux et déterministes (comme ceux déjà présents) pour garantir que chaque matière/diplôme a au moins un sujet/exercice.
- Prévoir un jeu de données “light” pour les tests rapides et un plus riche pour les tests d’intégration/e2e.

## 8) Priorisation initiale
1. Smoke tests API (search) + rendu home/admin en CI.
2. Quelques tests d’intégration sur la recherche/pagination (Prisma + DB de test).
3. 1–2 e2e Playwright sur les parcours critiques (recherche publique, tableau admin).
4. Ajouter un scan a11y rapide sur les pages clés.

Ce plan permet de sécuriser rapidement les régressions majeures tout en construisant progressivement une suite de tests plus complète.

## Notes pratiques (Playwright / logs)
- Voir un rapport détaillé : `npx playwright test --reporter=list` puis `npx playwright show-report`.
- Exporter la sortie console : `npx playwright test tests/e2e/smoke.spec.ts --reporter=list > /tmp/playwright-smoke.log` puis ouvrir `/tmp/playwright-smoke.log`.
- Plus de verbosité réseau : `DEBUG=pw:api npx playwright test ...`.
