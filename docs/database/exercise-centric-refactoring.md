# Refactoring : Passage à une logique centrée sur les exercices

## Problématique

**Besoin utilisateur** : Un élève cherche un exercice spécifique sur un thème (ex: "titrage acide-base"), pas un sujet complet.

**Contrainte** : Conserver la traçabilité complète du sujet parent (Métropole juin 2024, Exercice 3, 6 points).

## Proposition de nouveau schéma

### 1. Modèle `ExamPaper` (Sujet d'annales)

Le sujet devient un **conteneur** avec des métadonnées administratives uniquement.

```prisma
model ExamPaper {
  id String @id @default(auto()) @map("_id") @db.ObjectId

  // Métadonnées administratives
  label       String // "Métropole Sujet 1"
  sessionYear Int    // 2024
  sessionMonth String? // "juin", "septembre"
  
  // Hiérarchie pédagogique
  diplomaId  String  @db.ObjectId
  diploma    Diploma @relation(fields: [diplomaId], references: [id])
  
  divisionId String?   @db.ObjectId // Optionnel pour Brevet
  division   Division? @relation(fields: [divisionId], references: [id])
  
  gradeId  String @db.ObjectId
  grade    Grade  @relation(fields: [gradeId], references: [id])
  
  teachingId String   @db.ObjectId
  teaching   Teaching @relation(fields: [teachingId], references: [id])
  
  curriculumId String?     @db.ObjectId // Optionnel pour Brevet
  curriculum   Curriculum? @relation(fields: [curriculumId], references: [id])
  
  // Centres d'examen
  examinationCenterIds String[] @db.ObjectId @default([])
  
  // URLs du sujet complet
  subjectUrl String? // PDF du sujet complet
  
  // Métadonnées globales
  totalDuration Int? // Durée totale en minutes
  totalPoints   Int? // Total de points
  
  // Relations
  exercises   Exercise[]   // Les exercices du sujet
  corrections Correction[] // Corrections globales (optionnel)
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@unique([label, sessionYear, teachingId])
}
```

### 2. Nouveau modèle `Exercise` (Exercice d'annales) ⭐

Le cœur du système : **l'unité de recherche**.

```prisma
model Exercise {
  id String @id @default(auto()) @map("_id") @db.ObjectId
  
  // Traçabilité du sujet parent
  examPaperId String    @db.ObjectId
  examPaper   ExamPaper @relation(fields: [examPaperId], references: [id], onDelete: Cascade)
  
  // Position dans le sujet
  exerciseNumber Int    // 1, 2, 3...
  label          String? // "Exercice 3", "Partie A", "Question de synthèse"
  points         Int?    // Points attribués
  
  // Titre et énoncé (pour la recherche full-text future)
  title       String?  // "Titrage acide-base d'un vinaigre"
  statement   String?  @db.String // Énoncé complet (extrait via OCR)
  
  // Tagging pédagogique précis
  themeIds String[] @db.ObjectId // Thèmes couverts dans CET exercice
  
  // URLs spécifiques (optionnel si découpage des PDFs)
  exerciseUrl    String? // URL de l'exercice isolé
  
  // Métadonnées enrichies (via IA)
  estimatedDuration   Int?      // Durée estimée en minutes
  estimatedDifficulty Int?      // 1-5
  summary             String?   // Résumé automatique
  keywords            String[]  @default([]) // Mots-clés extraits
  
  // Statut d'enrichissement
  enrichmentStatus String    @default("pending") // "pending" | "completed" | "failed"
  enrichedAt       DateTime?
  
  // Relations
  corrections ExerciseCorrection[]
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@unique([examPaperId, exerciseNumber])
}
```

### 3. Modèle `ExerciseCorrection` (Corrections d'exercices)

```prisma
model ExerciseCorrection {
  id String @id @default(auto()) @map("_id") @db.ObjectId
  
  exerciseId String   @db.ObjectId
  exercise   Exercise @relation(fields: [exerciseId], references: [id], onDelete: Cascade)
  
  source String // "APMEP", "YouTube - Prof Dupont", etc.
  url    String
  type   String @default("pdf") // "pdf", "video", "html"
  
  // Métadonnées
  quality Int?    // 1-5
  author  String?
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@unique([exerciseId, source, url])
}
```

### 4. Modèle `Correction` (reste pour corrections globales)

```prisma
model Correction {
  id String @id @default(auto()) @map("_id") @db.ObjectId
  
  examPaperId String    @db.ObjectId
  examPaper   ExamPaper @relation(fields: [examPaperId], references: [id], onDelete: Cascade)
  
  source String // "APMEP", "Académie", etc.
  url    String
  type   String @default("pdf")
  
  quality Int?
  author  String?
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@unique([examPaperId, source, url])
}
```

## Impacts sur l'application

### 1. Nouvelle logique de recherche

**Avant** : Recherche de sujets complets
```typescript
const papers = await fetchExamPapers({ 
  diploma: 'bac-general',
  subject: 'maths',
  themes: ['suites']
});
```

**Après** : Recherche d'exercices
```typescript
const exercises = await searchExercises({
  diploma: 'bac-general',
  subject: 'maths',
  themes: ['titrage-acide-base'],
  difficulty: 3,
  year: 2024
});

// Résultat : Liste d'exercices avec traçabilité
// Ex: "Métropole juin 2024 - Exercice 3 (6 pts)"
```

### 2. Card d'affichage refactorisée

```tsx
<ExerciseCard
  // Infos exercice
  title="Titrage acide-base d'un vinaigre"
  points={6}
  duration={25} // minutes
  difficulty={3}
  themes={['Titrage', 'Acide-base', 'Dosage']}
  
  // Traçabilité sujet parent
  examPaper={{
    label: "Métropole Sujet 1",
    year: 2024,
    month: "juin"
  }}
  exerciseNumber={3}
  
  // Actions
  onView={() => ...}
  onAddToFavorites={() => ...}
/>
```

### 3. Page de détail d'exercice

```
┌─────────────────────────────────────────────┐
│ Métropole juin 2024 - Exercice 3            │
│ Bac Général › Physique-Chimie › Terminale   │
├─────────────────────────────────────────────┤
│ Titrage acide-base d'un vinaigre (6 points) │
│                                             │
│ 🏷️ Titrage · Acide-base · Dosage           │
│ ⏱️ ~25 min · 🎯 Difficulté 3/5             │
├─────────────────────────────────────────────┤
│ [Voir l'énoncé] [Voir la correction]        │
│                                             │
│ Corrections disponibles:                    │
│ • APMEP (PDF) ⭐⭐⭐⭐⭐                      │
│ • YouTube - Prof Martin (Vidéo) ⭐⭐⭐⭐     │
├─────────────────────────────────────────────┤
│ Autres exercices de ce sujet:               │
│ • Exercice 1: Mouvement parabolique (4 pts) │
│ • Exercice 2: Ondes mécaniques (6 pts)      │
│ • Exercice 4: Radioactivité (4 pts)         │
└─────────────────────────────────────────────┘
```

## Migration des données existantes

### Stratégie de migration

1. **Garder les `ExamPaper` existants** comme sources
2. **Créer des `Exercise`** en parsant/découpant chaque sujet
3. **Répartir les `themeIds`** au niveau exercice (plus précis)

### Script de migration

```typescript
// scripts/migrate-to-exercises.ts

async function migrateExamPapersToExercises() {
  const papers = await prisma.examPaper.findMany({
    include: { teaching: { include: { subject: true } } }
  });
  
  for (const paper of papers) {
    // Pour l'instant, créer UN exercice par sujet
    // (en attendant le découpage manuel/automatique)
    await prisma.exercise.create({
      data: {
        examPaperId: paper.id,
        exerciseNumber: 1,
        label: "Sujet complet",
        points: null, // À remplir manuellement
        
        // Reprendre les métadonnées du sujet
        themeIds: paper.themeIds,
        estimatedDuration: paper.estimatedDuration,
        estimatedDifficulty: paper.estimatedDifficulty,
        summary: paper.summary,
        
        enrichmentStatus: paper.enrichmentStatus,
        enrichedAt: paper.enrichedAt,
      }
    });
  }
}
```

## Avantages du nouveau système

### ✅ Pour les utilisateurs

1. **Recherche précise** : "Je veux des exercices sur les titrages"
2. **Granularité fine** : Travail exercice par exercice
3. **Favoris précis** : Sauvegarder l'exercice 3 du sujet X
4. **Progression** : "J'ai fait 12 exercices sur les suites cette semaine"

### ✅ Pour le système

1. **Meilleur SEO** : Pages dédiées par exercice avec titre précis
2. **Enrichissement précis** : IA analyse exercice par exercice
3. **Full-text search** : Recherche dans les énoncés (phase future)
4. **Analytics** : "L'exercice 3 de Métropole 2024 est très consulté"

### ✅ Pour l'admin

1. **Curation** : Taguer/corriger exercice par exercice
2. **Qualité** : Identifier les exercices mal enrichis
3. **Modération** : Valider les corrections par exercice

## Phases d'implémentation

### Phase 1 : Migration du schéma (1-2 jours)
- [ ] Créer les nouveaux modèles (`Exercise`, `ExerciseCorrection`)
- [ ] Migrer les données existantes (1 exercice = 1 sujet pour commencer)
- [ ] Tester les relations Prisma

### Phase 2 : Refactoring des queries (2-3 jours)
- [ ] Créer `exercise.queries.ts` avec `searchExercises()`
- [ ] Adapter `ExamPaperCard` → `ExerciseCard`
- [ ] Mettre à jour `HomePage` avec nouvelle logique de recherche

### Phase 3 : Interface utilisateur (2-3 jours)
- [ ] Page de détail d'exercice `/exercices/[id]`
- [ ] Liste d'exercices avec traçabilité du sujet parent
- [ ] Système de favoris par exercice

### Phase 4.1 : Découpage fin + extraction texte (priorité 1)
- [ ] Définir la granularité (exercice/partie/question) et les règles de nommage
- [ ] Ajouter `pageStart`/`pageEnd` et un `exerciseNumber` séquentiel
- [ ] Outil admin semi-manuel pour découper par plages de pages
- [ ] Extraction texte via PDF.js, fallback OCR si scan
- [ ] Stocker le texte brut dans `Exercise.statement`

### Phase 4.2 : Enrichissement automatique (LLM)
- [ ] Titres, thèmes, difficulté, durée par exercice
- [ ] Mots-clés + résumé
- [ ] Script batch + statut d'enrichissement

### Phase 5 : Moteur de recherche avancé (futur)
- [ ] Indexation MongoDB Atlas Search des énoncés
- [ ] Recherche full-text + autocomplétion + pagination
- [ ] Optimisation perf + analytics recherche

## Questions ouvertes

1. **Découpage manuel ou automatique ?**
   - Semi-manuel au début (outil admin + plages de pages)
   - Automatique via OCR + IA ensuite

2. **Garder l'accès aux sujets complets ?**
   - Oui, via `/exam-papers/[id]` qui liste ses exercices
   - L'exercice reste l'unité de recherche

3. **Gestion des exercices multi-thèmes ?**
   - Un exercice peut avoir plusieurs thèmes (array)
   - L'élève filtre par thème → voit tous les exercices qui le contiennent

4. **Points et durée par exercice ?**
   - À remplir manuellement au début
   - IA peut estimer ensuite (nombre de questions, complexité)

## Recommandation

**Je recommande de procéder par étapes** :

1. **Maintenant** : Créer le schéma `Exercise` en parallèle de `ExamPaper`
2. **Court terme** : Migrer les données (1 exercice = 1 sujet)
3. **Moyen terme** : Découpage fin + extraction texte brut
4. **Moyen terme** : Recherche avancée (full-text, pagination)
5. **Long terme** : Enrichissement automatique + pipeline

Cette approche permet de **valider le concept** sans tout casser, puis de **raffiner progressivement** la granularité.
