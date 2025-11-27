# Exam Indexing Pivot - Plan de Migration

## Vision

Transformer My Exams d'une plateforme de création de contenu vers un **service intelligent d'indexation d'annales** avec enrichissement automatique des métadonnées.

**Proposition de valeur** : Centraliser, organiser et enrichir les annales existantes provenant de diverses sources (APMEP, LaboLycée, académies officielles) sans héberger le contenu lui-même.

## Branche

`feature/annale-indexing-pivot`

---

## Phases de Migration

### 📋 Phase 1 : Fondations du Modèle de Données (Semaine 1)
**Objectif** : Créer les nouveaux modèles de données sans toucher aux existants

**Tâches** :
- [ ] Ajouter le modèle `ExamPaper` au schéma Prisma
- [ ] Ajouter le modèle `Correction` au schéma Prisma
- [ ] Ajouter le modèle `ExamTheme` pour les thèmes extraits
- [ ] Créer les migrations Prisma
- [ ] Générer les types TypeScript
- [ ] Créer les schémas de validation Zod

**Livrables** :
- Nouveaux modèles Prisma coexistant avec les anciens
- Interfaces type-safe pour le frontend

---

### 📋 Phase 2 : Interface de Recherche avec Données Mock (Semaine 1-2)
**Objectif** : Implémenter l'UI de la page de recherche avec des mocks pour valider l'UX

**Tâches** :
- [x] Mettre à jour `exam-paper.seed.ts` avec données enrichies (duration, difficulty, summary, URLs)
- [x] Créer `correction.seed.ts` pour générer des corrections mockées (APMEP, LaboLycée, vidéos)
- [ ] Exécuter le seeding pour avoir des données de test complètes
- [ ] Créer la route `/exam-papers/search`
- [ ] Implémenter le composant de barre de recherche
- [ ] Implémenter les composants de filtres (diplôme, matière, année, difficulté)
- [ ] Créer le composant `ExamPaperCard` avec :
  - Infos diplôme, matière, session
  - Durée estimée
  - Points de difficulté (1-5)
  - Badges de thèmes
  - Liens vers le PDF du sujet
  - Liens vers les corrections
- [ ] Créer le composant `DifficultyDots`
- [ ] Créer le composant `SearchFilters`
- [ ] Tester le design responsive (mobile-first)

**Livrables** :
- Seeds avec données enrichies et corrections multiples
- Page de recherche UI entièrement fonctionnelle
- Données mock présentant toutes les fonctionnalités
- Retours utilisateurs sur l'UX avant le travail backend

---

### 📋 Phase 3 : API & Opérations CRUD (Semaine 2)
**Objectif** : Construire l'infrastructure backend pour la gestion des annales

**Tâches** :
- [ ] Créer la route `/api/exam-papers` (GET, POST)
- [ ] Créer la route `/api/exam-papers/[id]` (GET, PUT, DELETE)
- [ ] Créer la route `/api/exam-papers/search` avec filtres
- [ ] Implémenter `exam-paper.service.ts` (logique métier)
- [ ] Implémenter `exam-paper.repository.ts` (opérations base de données)
- [ ] Ajouter un middleware de validation
- [ ] Créer l'interface admin pour les opérations CRUD
- [ ] Ajouter la gestion d'erreurs et les logs

**Livrables** :
- API CRUD complète pour les annales
- L'admin peut ajouter/modifier les annales manuellement
- Validation et gestion d'erreurs

---

### 📋 Phase 4 : Enrichissement Automatique (Semaine 3)
**Objectif** : Extraire automatiquement les métadonnées des fichiers PDF

**Tâches** :
- [ ] Intégrer un service OCR (PDF.js ou Tesseract)
- [ ] Intégrer une API LLM (OpenAI GPT-4 ou Claude)
- [ ] Créer `ocr.service.ts` pour l'extraction de texte
- [ ] Créer `llm-analyzer.service.ts` pour :
  - Extraction des thèmes
  - Estimation de la difficulté (1-5)
  - Estimation de la durée
- [ ] Créer `theme-extractor.ts` avec une taxonomie de thèmes prédéfinie
- [ ] Créer un script d'enrichissement par lots
- [ ] Ajouter le suivi du statut d'enrichissement
- [ ] Tester la précision sur des PDF échantillons

**Livrables** :
- Pipeline d'extraction automatique des métadonnées
- Script par lots pour enrichir les annales existantes
- Métriques de qualité pour la précision de l'enrichissement

---

### 📋 Phase 5 : Moteur de Recherche Avancé (Semaine 3-4)
**Objectif** : Implémenter des capacités de recherche intelligente

**Tâches** :
- [ ] Configurer MongoDB Atlas Search (ou Algolia)
- [ ] Créer les index de recherche full-text
- [ ] Implémenter les filtres combinés (diplôme + matière + année + difficulté)
- [ ] Implémenter la recherche par thèmes
- [ ] Ajouter les suggestions de recherche/autocomplétion
- [ ] Ajouter les options de tri (année, difficulté, pertinence)
- [ ] Ajouter la pagination
- [ ] Optimiser les performances de recherche
- [ ] Ajouter l'analytics de recherche

**Livrables** :
- Moteur de recherche rapide et intelligent
- Filtrage multi-critères
- Recherche par thèmes/concepts

---

### 📋 Phase 6 : Migration des Données (Semaine 4)
**Objectif** : Migrer les données de l'ancien modèle vers le nouveau modèle ExamPaper enrichi

**Tâches** :
- [ ] Créer le script `migrate-old-to-new-exam-papers.ts`
- [ ] Mapper les champs de l'ancien modèle vers le nouveau modèle ExamPaper
- [ ] Gérer les transformations de données
- [ ] Préserver les anciennes données (marquer comme dépréciées)
- [ ] Créer un script de rollback
- [ ] Tester la migration sur la base de staging
- [ ] Documenter le processus de migration
- [ ] Exécuter la migration en production

**Livrables** :
- Migration des données réussie
- Anciens modèles préservés mais dépréciés
- Migration sans interruption de service

---

### 📋 Phase 7 : Fonctionnalités Utilisateur (Semaine 5)
**Objectif** : Améliorer l'expérience élève

**Tâches** :
- [ ] Implémenter "Favoris" / "Ma Liste de Révisions"
- [ ] Créer un tableau de bord utilisateur pour les sujets sauvegardés
- [ ] Ajouter l'historique de recherche
- [ ] Implémenter les recommandations personnalisées
- [ ] Ajouter la fonctionnalité d'export (liste PDF, Excel)
- [ ] Ajouter les capacités de partage (partager les résultats de recherche)
- [ ] Ajouter des notes sur les sujets
- [ ] Suivre les sujets complétés

**Livrables** :
- Outils d'apprentissage personnalisés
- Meilleur engagement des élèves
- Analytics d'utilisation

---

### 📋 Phase 8 : Pipeline de Contenu Continu (Semaine 5-6)
**Objectif** : Automatiser la découverte et l'ajout de nouveaux sujets

**Tâches** :
- [ ] Créer des scrapers pour :
  - Site web APMEP
  - Site web LaboLycée
  - Sites web des académies officielles
- [ ] Implémenter un vérificateur de liens morts
- [ ] Créer un pipeline d'enrichissement automatique
- [ ] Configurer des tâches planifiées (cron)
- [ ] Ajouter un système de notification pour les nouveaux sujets
- [ ] Créer une interface de revue admin pour le contenu scrapé
- [ ] Ajouter la détection de doublons
- [ ] Surveiller la santé des scrapers

**Livrables** :
- Découverte automatique de contenu
- Catalogue toujours à jour
- Workflow de contrôle qualité

---

## Structure des Nouveaux Fichiers

```
prisma/
  schema.prisma                 # Ajouter les modèles ExamPaper, Correction, ExamTheme

src/
  core/
    exam-paper/
      exam-paper.service.ts          # Logique métier
      exam-paper.repository.ts       # Opérations base de données
      exam-paper.types.ts            # Types TypeScript
      exam-paper.validation.ts       # Schémas Zod
    correction/
      correction.service.ts
      correction.types.ts
    enrichment/
      ocr.service.ts             # Extraction de texte PDF
      llm-analyzer.service.ts    # Analyse par IA
      theme-extractor.ts         # Taxonomie et extraction de thèmes
  
  app/
    (public)/
      exam-papers/
        search/
          page.tsx               # Interface de recherche principale
        [id]/
          page.tsx               # Page de détail d'un sujet
    api/
      exam-papers/
        route.ts                 # GET, POST
        [id]/
          route.ts               # GET, PUT, DELETE
        search/
          route.ts               # Recherche avancée
        enrich/
          route.ts               # Déclencher l'enrichissement
  
  components/
    pages/
      ExamPapersSearchPage.tsx
    exam-papers/
      ExamPaperCard.tsx             # Carte de résultat principale
      SearchFilters.tsx          # Composants de filtres
      DifficultyDots.tsx         # Visualisation de la difficulté
      CorrectionLinks.tsx        # Liens vers corrections externes
      ThemeBadges.tsx            # Tags de thèmes

scripts/
  migrate-old-to-new-exam-papers.ts
  enrich-exam-papers-batch.ts
  scrape-apmep.ts
  scrape-labolycee.ts
  check-dead-links.ts
```

---

## Champs de Métadonnées Clés

### Modèle ExamPaper
```typescript
{
  id: string
  diploma: string              // "Brevet", "Bac général", etc.
  subject: string              // "Mathématiques", "Physique-Chimie"
  year: number                 // 2023
  session: string              // "Métropole", "Asie", "Pondichéry"
  examLabel: string            // "Épreuve de spécialité – Sujet 2"
  
  // Métadonnées enrichies (automatiques)
  estimatedDuration: number    // en minutes
  estimatedDifficulty: number  // 1-5
  themes: string[]             // ["Fonctions", "Dérivation", ...]
  summary: string              // Résumé généré par IA
  
  // Liens externes
  subjectUrl: string           // Lien vers PDF officiel
  corrections: Correction[]    // Liens vers corrections
  
  // Statut
  enrichmentStatus: string     // "pending", "completed", "failed"
  enrichedAt: Date
  
  // Métadonnées
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

### Phase 4 (Enrichissement)
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

## Prochaines Étapes

1. ✅ Créer la branche `feature/annale-indexing-pivot`
2. ✅ Documenter le plan de migration
3. ⏳ Démarrer Phase 1 : Ajouter les modèles Prisma
4. ⏳ Démarrer Phase 2 : Construire l'UI de recherche avec mocks

---

## Ressources

- **APMEP** : https://www.apmep.fr/
- **LaboLycée** : https://www.labolycee.org/
- **Examens officiels** : https://eduscol.education.fr/
- **OCR** : PDF.js, Tesseract
- **LLM** : OpenAI GPT-4, Anthropic Claude
- **Recherche** : MongoDB Atlas Search, Algolia
