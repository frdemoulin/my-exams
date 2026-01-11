# Exam Indexing Pivot - Plan de Migration

## ✅ Pivot Réalisé : Architecture Exercise-Centric

**Date de mise à jour** : 28 novembre 2025  
**Statut** : Architecture implémentée, en cours de validation

## Vision

Transformer My Exams vers un **moteur de recherche d'exercices d'annales** avec enrichissement automatique des métadonnées.

**Proposition de valeur** : Les élèves cherchent des exercices spécifiques par thème (exemple : "titrage acide-base"), pas des sujets complets. Chaque exercice conserve la traçabilité de son sujet parent.

## Branche

`feature/annale-indexing-pivot`

---

## Phases de migration

### ✅ Phase 1 : Fondations du modèle de données (TERMINÉE)
**Objectif** : Créer les nouveaux modèles de données centrés sur les exercices

**Tâches** :
- [x] Ajouter le modèle `Exercise` au schéma Prisma
- [x] Ajouter le modèle `ExerciseCorrection` au schéma Prisma
- [x] Refactorer `ExamPaper` comme conteneur
- [x] Créer les migrations Prisma
- [x] Générer les types TypeScript
- [x] Créer les schémas de validation Zod

**Livrables** :
- ✅ Modèles Exercise et ExerciseCorrection opérationnels
- ✅ ExamPaper refactoré (champs deprecated marqués)
- ✅ 23 exercices migrés depuis les exam papers existants

---

### ✅ Phase 2 : Interface de Recherche d'exercices (TERMINÉE)
**Objectif** : Implémenter l'UI de recherche centrée sur les exercices

**Tâches** :
- [x] Créer `exercise.queries.ts` avec searchExercises(), fetchExerciseById()
- [x] Créer les API routes `/api/exercises/search` et `/api/exercises/[id]`
- [x] Créer le composant `ExerciseCard` avec :
  - Titre de l'exercice + traçabilité du sujet parent
  - Infos : diplôme, matière, niveau
  - Points, durée estimée, difficulté (dots)
  - Badges de thèmes
  - Liens vers énoncé et corrections
  - Compteur de corrections disponibles
- [x] Refactorer `HomePage` pour la recherche d'exercices
- [x] Implémenter les filtres (diplôme, matière, difficulté, année, thèmes)
- [x] Créer la page de détail `/exercices/[id]`
- [x] Mettre à jour le hero avec l'approche exercice
- [x] Système de favoris par exercice (localStorage)

**Livrables** :
- ✅ Page de recherche fonctionnelle avec filtres serveur-side
- ✅ ExerciseCard affichant la traçabilité complète
- ✅ Page de détail avec corrections et exercices liés
- ✅ Migration du hero vers l'approche exercice

---

### ✅ Phase 3 : API & Opérations CRUD (TERMINÉE)
**Objectif** : Construire l'infrastructure backend pour la gestion des exercices

**Tâches** :
- [x] Créer la route `/api/exercises/search` avec filtres
- [x] Créer la route `/api/exercises/[id]` avec exercices liés
- [x] Implémenter `exercise.queries.ts` avec ExerciseWithRelations
- [x] Filtrage serveur-side (diploma, subject, difficulty, themes, year, search)
- [x] Tri personnalisable (year, difficulty, duration)
- [x] Interface admin pour ExamPapers existante (peut créer des exercices)

**Livrables** :
- ✅ API de recherche d'exercices opérationnelle
- ✅ Filtres et tri serveur-side fonctionnels
- ✅ Types TypeScript complets avec relations

---

### 🔄 Phase 4 : Découpage Fin et Enrichissement (EN COURS - priorité 1)
**Objectif** : Passer de 1 exercice/sujet à plusieurs exercices avec un texte exploitable pour la recherche.

**Sous-phase 4.1 - Découpage fin (priorité 1)**
**Tâches** :
- [ ] Définir la granularité cible (exercice/partie/question) et les règles de nommage
- [ ] Ajouter le support de découpage dans le modèle (pageStart/pageEnd, label, exerciseNumber)
- [ ] Créer un outil admin semi-manuel pour découper un ExamPaper en plusieurs Exercises
- [ ] Créer `ocr.service.ts` pour l'extraction de texte des exercices (PDF.js, fallback OCR si scan)
- [ ] Migrer 5-10 sujets en multi-exercices pour validation qualité/UX

**Spécifications 4.1 (découpage fin)**
- **Modèle** : `Exercise.pageStart` et `Exercise.pageEnd` (entiers 1-based, inclusifs), `exerciseNumber` séquentiel par ExamPaper, `label` optionnel ; `Exercise.statement` stocke le texte brut extrait.
- **Règles de découpage** : pas de chevauchement entre exercices ; `pageStart <= pageEnd` ; auto-label par défaut ("Exercice 1", "Partie A") si `label` absent.
- **Workflow admin** : sélectionner un ExamPaper, définir N plages de pages, prévisualiser PDF + texte extrait, sauvegarder (création/remplacement des Exercises), possibilité d'ajuster et relancer l'extraction.
- **Extraction texte** : PDF.js si calque texte disponible, fallback OCR si scan ; concaténer le texte par plage de pages ; nettoyage minimal (normalisation des espaces).
- **Critères de validation** : 5-10 sujets découpés en 3+ exercices, >80% des exercices avec `statement` non vide, validation manuelle sur 3 sujets.

**Sujets pilotes (session 2025 en priorité ; source : https://www.sujetdebac.fr/)**
- [ ] Bac G - Spé Maths (Tle) — Métropole France 1 (2025) — PDF officiel (`https://www.sujetdebac.fr/annales-pdf/2025/spe-mathematiques-2025-metropole-1-sujet-officiel.pdf`)
- [ ] Bac G - Spé Maths (Tle) — Métropole France 2 (2025) — PDF officiel (`https://www.sujetdebac.fr/annales-pdf/2025/spe-mathematiques-2025-metropole-2-sujet-officiel.pdf`)
- [ ] Bac G - Spé Maths (Tle) — Amérique du Nord 1 (2025) — PDF officiel (`https://www.sujetdebac.fr/annales-pdf/2025/spe-mathematiques-2025-amerique-nord-1-sujet-officiel.pdf`)
- [ ] Bac G - Spé Maths (Tle) — Polynésie 1 (2025) — PDF officiel (`https://www.sujetdebac.fr/annales-pdf/2025/spe-mathematiques-2025-polynesie-1-sujet-officiel.pdf`)
- [ ] Bac G - Spé Maths (Tle) — Asie 1 (2025) — PDF officiel (`https://www.sujetdebac.fr/annales-pdf/2025/spe-mathematiques-2025-asie-1-sujet-officiel.pdf`)
- [ ] Bac G - Spé Maths (Tle) — Nouvelle-Calédonie 1 (2025) — PDF officiel (`https://www.sujetdebac.fr/annales-pdf/2025/spe-mathematiques-2025-nouv-caledonie-1-sujet-officiel.pdf`)
- [ ] Bac G - Spé Physique-Chimie (Tle) — Métropole France 1 (2025) — PDF officiel (`https://www.sujetdebac.fr/annales-pdf/2025/spe-physique-chimie-2025-metropole-1-sujet-officiel.pdf`)
- [ ] Bac G - Spé Physique-Chimie (Tle) — Métropole France 2 (2025) — PDF officiel (`https://www.sujetdebac.fr/annales-pdf/2025/spe-physique-chimie-2025-metropole-2-sujet-officiel.pdf`)
- [ ] Bac G - Spé Physique-Chimie (Tle) — Amérique du Nord 1 (2025) — PDF officiel (`https://www.sujetdebac.fr/annales-pdf/2025/spe-physique-chimie-2025-amerique-nord-1-sujet-officiel.pdf`)

**Checklist d'implémentation (Phase 4.1)**
- [ ] Modèle Prisma : ajouter `pageStart`/`pageEnd` (optionnels), migration, types TS, schémas Zod.
- [ ] Admin : étendre le split manuel (formulaire) avec plages de pages + validation des ranges.
- [ ] Extraction : service PDF.js (calque texte) + fallback OCR ; extraction par plage + normalisation.
- [ ] Preview : afficher un extrait texte par plage avant sauvegarde.
- [ ] Écriture : créer/remplacer les Exercises d'un ExamPaper en une seule action (transaction).
- [ ] QA : exécuter le découpage sur les sujets pilotes, ajuster règles si besoin.

**Sous-phase 4.2 - Enrichissement automatique (priorité 4)**
**Tâches** :
- [ ] Intégrer une API LLM (OpenAI GPT-4 ou Claude)
- [ ] Créer `llm-analyzer.service.ts` pour :
  - Extraction des titres d'exercices
  - Attribution des thèmes par exercice
  - Estimation de la difficulté (1-5)
  - Estimation de la durée par exercice
  - Extraction de mots-clés
- [ ] Créer un script d'enrichissement par lots
- [ ] Ajouter le suivi du statut d'enrichissement (enrichmentStatus)
- [ ] Tester la précision sur des PDF échantillons

**Livrables** :
- Découpage fin validé sur 5-10 sujets (multi-exercices)
- Texte brut exploitable dans `Exercise.statement`
- Pipeline d'enrichissement automatique au niveau exercice
- Script par lots pour enrichir les exercices existants
- Métriques de qualité pour la précision de l'enrichissement

---

### ⏳ Phase 5 : Moteur de Recherche Avancé (EN ATTENTE - priorité 2 après Phase 4.1)
**Objectif** : Améliorer les capacités de recherche

**Tâches** :
- [x] Implémenter les filtres combinés (diplôme + matière + année + difficulté + thèmes)
- [x] Implémenter la recherche textuelle de base
- [x] Ajouter les options de tri (année, difficulté, durée)
- [ ] Configurer MongoDB Atlas Search pour full-text search dans les énoncés
- [ ] Créer les index de recherche full-text sur Exercise.statement
- [ ] Ajouter les suggestions de recherche/autocomplétion
- [ ] Ajouter la pagination (actuellement limit fixe)
- [ ] Optimiser les performances de recherche
- [ ] Ajouter l'analytics de recherche

**Livrables** :
- ✅ Filtrage multi-critères opérationnel
- ✅ Tri personnalisable
- ⏳ Full-text search dans les énoncés (à venir)
- ⏳ Autocomplétion (à venir)

---

### ✅ Phase 6 : Migration des Données (TERMINÉE)
**Objectif** : Migrer les ExamPapers vers des Exercises

**Tâches** :
- [x] Créer le script `migrate-to-exercises.ts`
- [x] Créer un exercice par ExamPaper existant (phase initiale)
- [x] Mapper les métadonnées (themeIds, duration, difficulty, summary)
- [x] Préserver les anciennes données (champs deprecated dans ExamPaper)
- [x] Exécuter la migration (23 exercices créés)

**Livrables** :
- ✅ 23 exercices créés depuis les exam papers
- ✅ Anciens champs marqués @deprecated
- ✅ Données préservées, migration non destructive

---

### ⏳ Phase 7 : Fonctionnalités Utilisateur (EN ATTENTE - priorité 3 après Phase 5)
**Objectif** : Améliorer l'expérience élève

**Tâches** :
- [x] Implémenter "Favoris" via localStorage
- [ ] Créer un tableau de bord utilisateur pour les exercices sauvegardés
- [ ] Ajouter l'historique de recherche
- [ ] Implémenter les recommandations personnalisées basées sur les exercices consultés
- [ ] Ajouter la fonctionnalité d'export (liste PDF, Excel)
- [ ] Ajouter les capacités de partage (partager un exercice)
- [ ] Ajouter des notes sur les exercices
- [ ] Suivre les exercices complétés

**Livrables** :
- ✅ Système de favoris fonctionnel (localStorage)
- ⏳ Dashboard utilisateur (à venir)
- ⏳ Recommandations personnalisées (à venir)

---

### ⏳ Phase 8 : Pipeline de Contenu Continu (À VENIR)
**Objectif** : Automatiser la découverte et l'ajout de nouveaux exercices

**Tâches** :
- [ ] Créer des scrapers pour :
  - Site web APMEP
  - Site web LaboLycée
  - Sites web des académies officielles
- [ ] Découpage automatique des sujets en exercices (via OCR + IA)
- [ ] Implémenter un vérificateur de liens morts
- [ ] Créer un pipeline d'enrichissement automatique par exercice
- [ ] Configurer des tâches planifiées (cron)
- [ ] Ajouter un système de notification pour les nouveaux exercices
- [ ] Créer une interface de revue admin pour le contenu scrapé
- [ ] Ajouter la détection de doublons d'exercices
- [ ] Surveiller la santé des scrapers

**Livrables** :
- Découverte automatique de nouveaux sujets
- Découpage automatique en exercices
- Catalogue toujours à jour
- Workflow de contrôle qualité

---

### ⏳ Phase 9 : Suivi d'Usage & Analytics (À VENIR)
**Objectif** : Instrumenter l'application et fournir un suivi d'usage aux administrateurs.

**Tâches** :
- [ ] Instrumenter les recherches : volume, termes, filtres, taux de résultats vides.
- [ ] Tracer les interactions cartes : clics Sujet (PDF), Correction, favoris, partages.
- [ ] Suivre la navigation : pages consultées, temps passé sur fiche, rebonds.
- [ ] Côté auth : connexions/déconnexions, répartition SSO/email, actifs quotidiens/hebdo.
- [ ] Mettre en place le stockage des événements (DB dédiée ou outil d'analytics).
- [ ] Créer un dashboard admin “Statistiques d'usage” (listes/top, répartition par diplôme/matière, erreurs/404 PDF).
- [ ] Suivi des erreurs : liens brisés (sujets/corrections), requêtes en échec, latences API.
- [ ] RGPD : implémenter le bandeau de consentement cookies/analytics (opt-in) et la gestion des préférences.

**Livrables** :
- Tableau de bord admin “Statistiques d’usage”
- Événements tracés (recherche, clics sujets/corrections, favoris, auth)
- Alertes de liens brisés / requêtes en échec

---

### ⏳ Phase 10 : Pré-prod & Infra Prod (À PLANIFIER)
**Objectif** : Préparer et déployer la première version stable en production avec un socle d’infra solide.**

**Tâches** :
- [ ] Choisir l’hébergement (Vercel/Render/VPS) et la stack déploiement (CI/CD).
- [ ] Gérer les secrets/ENV (AUTH, DB, storages, analytics) et le versionnement sécurisé.
- [ ] Configurer MongoDB Atlas (backups, accès IP, observabilité).
- [ ] Choisir le stockage fichiers (PDF/corrections) et CDN si besoin.
- [ ] Mettre en place monitoring, logs et alerting (erreurs app, erreurs PDF/corrections).
- [ ] Politique de sauvegarde et restauration (DB et assets).
- [ ] Pipeline CI/CD (lint, tests, migrations) et checklists de pré-prod.
- [ ] Mise en prod de la version stable (recherche + CRUD admin) avant pipeline contenu/analytics.

**Livrables** :
- Environnement de prod opérationnel (app + DB + assets)
- CI/CD en place avec contrôles qualité
- Monitoring et sauvegardes configurés

---

### ⏳ Phase 11 : Qualité & Tests (À PLANIFIER)
**Objectif** : Mettre en place la stratégie de tests automatisés (unitaires, intégration, end-to-end) et la qualité continue.**

**Tâches** :
- [ ] Définir la stratégie de tests (périmètre unitaire vs intégration vs E2E).
- [ ] Mettre en place les tests unitaires (libs, hooks, utils) avec coverage minimal.
- [ ] Mettre en place des tests d’intégration (API routes, Prisma, auth, filtres recherche).
- [ ] Mettre en place des tests E2E (flows recherche, filtres, ouverture sujet/correction, CRUD admin).
- [ ] Intégrer les tests à la CI (gates lint + tests + migrations dry-run).
- [ ] Données de test / seeds dédiés pour les suites E2E.
- [ ] Rapports (coverage, flaky detection) et seuils d’acceptation.

**Livrables** :
- Suites de tests U/I/E2E automatisées
- CI bloquante sur lint + tests
- Seeds/datasets de test pour reproduire les scénarios clés

---

### ⏳ Phase 12 : Modèle Économique & Monétisation (À PLANIFIER)
**Objectif** : Définir et tester les leviers de revenus tout en conservant un cœur gratuit.**

**Tâches** :
- [ ] Cadrer l’offre Freemium : base gratuite + options premium (export, historique illimité, reco perso).
- [ ] Positionner une offre B2B/B2E (établissements, profs) : dashboards classe, suivi élèves.
- [ ] Évaluer sponsoring/partenariats édus (bannières légères, contenus sponsorisés).
- [ ] Mettre en place un canal de soutien/don (Tipeee/Ko-fi/Patreon) pour couvrir infra/LLM.
- [ ] Étudier les pistes affiliation limitée (ressources/manuels) sans dégrader l’UX.
- [ ] Budgetiser infra/LLM (coûts fixes/variables) et fixer objectifs de couverture des coûts.
- [ ] Plan RGPD/UX pour toute monétisation (consentement, transparence, pas de pubs intrusives).
- [ ] Explorer les leviers via réseaux sociaux (IG/TikTok) : contenu sponsorisé, pubs ciblées respectant consentement, acquisition/retention via social.

**Livrables** :
- Modèle économique documenté (grille gratuite/premium/B2B)
- Plan de couverture des coûts infra/LLM
- Expérimentations initiales (soutien, partenariats) cadrées UX/RGPD

---

### ⏳ Phase 13 : Auth & SSO (public ado FR) (À PLANIFIER)
**Objectif** : Mettre en place une authentification V1 adaptée à un public France “fin collège / fin lycée”.**

**Tâches** :
- [ ] **V1** : activer **Google + Microsoft (Entra ID) + Facebook + lien magique**.
- [ ] Référence conformité/sécurité : `docs/technical-setup/authentification_par_lien_magique_doc_codex.md`.
- [ ] Durcir la config prod (`AUTH_URL`/`NEXTAUTH_URL`, `AUTH_SECRET`/`NEXTAUTH_SECRET`, redirect URIs OAuth, cookies Secure/SameSite).
- [ ] **Lien magique — parcours & UX** : formulaire email, message neutre anti-énumération (“Si un compte correspond…”), états de chargement/erreur, accessibilité.
- [ ] **Lien magique — SMTP** : config SMTP (dev : Mailtrap ; prod : fournisseur SMTP), domaine/emails transactionnels, et vérification de délivrabilité (SPF/DKIM/DMARC).
- [ ] **Lien magique — sécurité tokens** : durée de vie 10–15 min, usage unique, invalidation/rotation quand un nouveau lien est demandé, stockage hash (pas de token en clair).
- [x] **Lien magique — anti-abus** : rate limiting par IP + par email, cooldown de renvoi (ex: 60s) — implémenté en mémoire (best effort, à durcir plus tard via store partagé).
- [ ] **Lien magique — “just-in-time”** : décider et implémenter la règle (création de compte à la validation du lien vs “login only”), sans fuite d’existence de compte.
- [ ] **Session** : rotation à chaque connexion, TTL raisonnable (ex: 7–30 jours), re-auth pour actions sensibles (phase suivante si besoin).
- [ ] **Journalisation** : loguer demande/validation/échecs de lien magique (sans token en clair, sans PII excessive), politique de rétention.
- [ ] Sécurité globale : règles de liaison de comptes (email linking), contrôle des rôles, durcissement headers.
- [ ] Tests + doc : tests d’intégration (OAuth + lien magique) + smoke E2E minimal + doc de configuration (dev/prod).
- [ ] **V2 (reporté)** : **Apple** (coût Apple Developer Program ≈ 99€/an).

**Livrables** :
- Parcours d’auth stable en prod (V1 : Google + Microsoft + Facebook + lien magique)
- Page login unifiée et cohérente (Flowbite tokens + a11y)
- Documentation de config SSO et impact RGPD

---

## Structure des Fichiers Implémentés

```
prisma/
  schema.prisma                 # ✅ Modèles Exercise, ExerciseCorrection, ExamPaper refactoré

src/
  core/
    exercise/
      exercise.queries.ts       # ✅ searchExercises, fetchExerciseById, fetchExercisesByExamPaperId
      exercise.types.ts         # ✅ ExerciseWithRelations
      index.ts                  # ✅ Exports
    enrichment/                 # ⏳ À créer
      ocr.service.ts            # Extraction de texte PDF
      llm-analyzer.service.ts   # Analyse par IA
      theme-extractor.ts        # Taxonomie et extraction de thèmes
  
  app/
    (public)/
      page.tsx                  # ✅ HomePage avec recherche d'exercices
      exercises/
        [id]/
          page.tsx              # ✅ Page de détail d'un exercice
    api/
      exercises/
        search/
          route.ts              # ✅ GET avec filtres serveur-side
        [id]/
          route.ts              # ✅ GET avec exercices liés
  
  components/
    pages/
      HomePage.tsx              # ✅ Recherche d'exercices avec filtres
    exercises/
      ExerciseCard.tsx          # ✅ Carte d'exercice avec traçabilité
    shared/
      loading-button.tsx        # ✅ Composants UI réutilisables
      ...

scripts/
  migrate-to-exercises.ts       # ✅ Migration ExamPaper → Exercise (23 créés)
  enrich-exercises-batch.ts     # ⏳ À créer
  scrape-apmep.ts               # ⏳ À créer
  scrape-labolycee.ts           # ⏳ À créer
```

---

## Champs de Métadonnées Clés

### Modèle Exercise (unité de recherche)
```typescript
{
  id: string
  examPaperId: string          // Lien vers le sujet parent
  exerciseNumber: number       // 1, 2, 3...
  label: string?               // "Exercice 3", "Partie A"
  points: number?              // 6
  
  // Contenu
  title: string?               // "Titrage acide-base d'un vinaigre"
  statement: string?           // Énoncé complet (OCR)
  
  // Métadonnées enrichies (automatiques)
  estimatedDuration: number?   // en minutes (pour cet exercice)
  estimatedDifficulty: number? // 1-5
  themeIds: string[]           // Thèmes couverts dans CET exercice
  keywords: string[]           // Mots-clés extraits
  summary: string?             // Résumé généré par IA
  
  // Liens externes
  exerciseUrl: string?         // PDF de l'exercice isolé
  corrections: ExerciseCorrection[] // Corrections multiples
  
  // Statut
  enrichmentStatus: string     // "pending", "completed", "failed"
  enrichedAt: Date?
  
  // Relations
  examPaper: ExamPaper         // Traçabilité complète
  
  createdAt: Date
  updatedAt: Date
}
```

### Modèle ExamPaper (conteneur)
```typescript
{
  id: string
  label: string                // "Métropole Sujet 1"
  sessionYear: number          // 2024
  sessionMonth: string?        // "juin"
  
  // Hiérarchie pédagogique
  diplomaId: string
  divisionId: string?          // Optionnel
  gradeId: string
  teachingId: string
  curriculumId: string?        // Optionnel
  
  // Métadonnées globales
  totalDuration: number?       // Durée totale du sujet
  totalPoints: number?         // Total de points
  subjectUrl: string?          // PDF du sujet complet
  
  // Relations
  exercises: Exercise[]        // Les exercices du sujet
  corrections: Correction[]    // Corrections globales (optionnel)
  
  createdAt: Date
  updatedAt: Date
}
```

---

## Métriques de Succès

### Phase 2 (Validation UX)
- [ ] 5+ sessions de feedback utilisateur
- [ ] Score d'utilisabilité mobile > 90%
- [ ] Temps d'interaction de recherche < 3s

### Phase 4 (Découpage + Enrichissement)
- [ ] 10+ sujets découpés en 3+ exercices validés
- [ ] Précision d'extraction des thèmes > 85%
- [ ] Variance d'estimation de difficulté < 1 point
- [ ] Variance d'estimation de durée < 20%

### Phase 5 (Recherche)
- [ ] Temps de réponse de recherche < 500ms
- [ ] Résultats pertinents dans le top 5 > 90%

### Phase 8 (Automatisation)
- [ ] Nouveaux sujets découverts sous 48h
- [ ] Taux de succès auto-enrichissement > 95%
- [ ] Détection de liens morts < 1 semaine

---

## Risques & Atténuation

| Risque | Impact | Atténuation |
|------|--------|------------|
| Précision OCR faible | Élevé | Utiliser plusieurs services OCR, file d'attente de revue manuelle |
| Coûts LLM élevés | Moyen | Cache des résultats, traitement par lots, utiliser des modèles moins chers pour le pré-filtrage |
| Scraping bloqué | Moyen | Respecter robots.txt, limitation de débit, repli sur entrée manuelle |
| Pourrissement des liens | Moyen | Vérification automatique, repli sur archive.org |
| Compatibilité ancien modèle | Faible | Garder les anciens modèles, dépréciation progressive |

---

## État Actuel et Prochaines Étapes

### ✅ Terminé
1. ✅ Créer la branche `feature/annale-indexing-pivot`
2. ✅ Documenter le plan de migration
3. ✅ Phase 1 : Modèles Exercise et ExerciseCorrection
4. ✅ Phase 2 : UI de recherche d'exercices
5. ✅ Phase 3 : API avec filtres serveur-side
6. ✅ Phase 6 : Migration initiale (23 exercices)
7. ✅ Refactoring du hero pour l'approche exercice

### 🔄 En cours (priorité 1)
- Phase 4.1 : Découpage fin des sujets + extraction texte brut

### ⏭️ Priorités suivantes
1. **Phase 5 : Moteur de recherche avancé** (full-text, pagination, perf)
2. **Phase 7 : Dashboard favoris + historique** (MVP rétention)
3. **Phase 4.2 : Enrichissement automatique** (LLM sur exercices découpés)
4. **Phase 8 : Pipeline automatique** (scraping + découpage + enrichissement)

---

## Ressources

- **APMEP** : https://www.apmep.fr/
- **LaboLycée** : https://www.labolycee.org/
- **Examens officiels** : https://eduscol.education.fr/
- **OCR** : PDF.js, Tesseract
- **LLM** : OpenAI GPT-4, Anthropic Claude
- **Recherche** : MongoDB Atlas Search, Algolia
