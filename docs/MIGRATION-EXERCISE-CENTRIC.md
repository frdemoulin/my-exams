# Migration vers l'Architecture Exercise-Centric

**Date** : 28 novembre 2025  
**Branche** : `feature/annale-indexing-pivot`  
**Statut** : ✅ Architecture implémentée et opérationnelle

---

## 🎯 Vision

Transformer My Exams pour permettre aux élèves de chercher des **exercices spécifiques par thème** plutôt que des sujets complets.

**Exemple de besoin** : Un élève veut réviser les "titrages acide-base" pour préparer une évaluation → il cherche cet exercice précis, pas le sujet "Métropole 2024" complet.

---

## ✅ Ce qui a été réalisé

### 1. Nouveaux modèles Prisma

#### **Exercise** (unité de recherche principale)
```prisma
model Exercise {
  id                  String   @id @default(auto()) @map("_id") @db.ObjectId
  examPaperId         String   @db.ObjectId
  exerciseNumber      Int      // Position dans le sujet (1, 2, 3...)
  label               String?  // "Exercice 3"
  points              Int?     // 6 points
  title               String?  // "Titrage acide-base d'un vinaigre"
  statement           String?  // Énoncé complet (OCR)
  themeIds            String[] // Thèmes de CET exercice
  estimatedDuration   Int?     // Durée estimée (minutes)
  estimatedDifficulty Int?     // 1-5
  keywords            String[] // Mots-clés extraits
  // ... autres champs
  
  examPaper   ExamPaper           @relation(...)
  corrections ExerciseCorrection[]
}
```

#### **ExerciseCorrection** (corrections d'exercices)
```prisma
model ExerciseCorrection {
  id         String   @id @default(auto()) @map("_id") @db.ObjectId
  exerciseId String   @db.ObjectId
  source     String   // "APMEP", "YouTube - Prof Dupont"
  url        String
  type       String   // "pdf", "video", "html"
  quality    Int?     // 1-5
  author     String?
  
  exercise Exercise @relation(...)
}
```

#### **ExamPaper refactoré** (conteneur)
- Nouveaux champs : `sessionMonth`, `totalDuration`, `totalPoints`
- Champs deprecated : `themeIds`, `estimatedDuration`, `estimatedDifficulty`, etc.
- Relation : `exercises Exercise[]`

### 2. Couche de queries

**Fichier** : `src/core/exercise/exercise.queries.ts`

```typescript
// Type avec relations complètes
type ExerciseWithRelations = Exercise & {
  examPaper: ExamPaper & {
    teaching: Teaching & {
      grade: Grade;
      subject: Subject;
    };
    // ...
  };
  themes: Theme[];
  corrections: ExerciseCorrection[];
};

// Recherche avec filtres serveur-side
searchExercises({
  diploma?: string;
  subject?: string;
  difficulty?: string;
  themeFilters?: string[];
  year?: number;
  search?: string;
  sortBy?: 'year' | 'difficulty' | 'duration';
  sortOrder?: 'asc' | 'desc';
  limit?: number;
}): Promise<ExerciseWithRelations[]>

// Récupération d'un exercice avec relations
fetchExerciseById(id: string): Promise<ExerciseWithRelations | null>

// Exercices d'un même sujet
fetchExercisesByExamPaperId(examPaperId: string): Promise<ExerciseWithRelations[]>
```

### 3. API Routes

- **`/api/exercises/search`** - GET avec query params pour filtrage
- **`/api/exercises/[id]`** - GET avec exercices liés du même sujet

### 4. Composants UI

#### **ExerciseCard**
Affiche un exercice avec :
- Titre de l'exercice ou label
- **Traçabilité complète** : "Métropole juin 2024 - Exercice 3 (6 pts)"
- Hiérarchie : Diplôme › Matière
- Métadonnées : Durée estimée, difficulté (dots), thèmes (badges)
- Actions : Favoris ❤️, "Voir l'exercice", compteur de corrections

#### **HomePage refactorisée**
- Recherche d'exercices (plus de sujets)
- Filtres : diplôme, matière, difficulté, année, thèmes
- Tri : année, difficulté, durée
- Favoris en localStorage avec clé `exercise-favorites`

#### **Page de détail `/exercises/[id]`**
- Titre et traçabilité du sujet parent
- Hiérarchie complète : Diploma › Subject › Grade
- Métadonnées : Points, durée, difficulté, thèmes, keywords
- Boutons : Télécharger énoncé, voir correction
- Liste des corrections (source, auteur, type, qualité ⭐)
- Exercices liés du même sujet

### 5. Migration des données

**Script** : `scripts/migrate-to-exercises.ts`

Résultat : **23 exercices créés** (1 exercice par exam paper existant)

---

## 📊 État d'avancement

### ✅ Phases terminées

1. **Phase 1 : Modèles de données** - Exercise, ExerciseCorrection, ExamPaper refactoré
2. **Phase 2 : Interface de recherche** - HomePage, ExerciseCard, filtres
3. **Phase 3 : API & CRUD** - Routes API avec filtres serveur-side
4. **Phase 6 : Migration initiale** - 23 exercices créés

### 🔄 En cours

- **Phase 4.1 : Découpage fin** - Outil admin + extraction texte brut (PDF.js/OCR)

### ⏳ À venir

- **Phase 5 : Moteur de recherche avancé** - Full-text search, pagination, perf
- **Phase 7 : Fonctionnalités utilisateur** - Dashboard favoris + historique
- **Phase 4.2 : Enrichissement automatique** - LLM pour titres, thèmes, difficulté
- **Phase 8 : Pipeline automatique** - Scraping + découpage + enrichissement

---

## 🗂️ Fichiers impactés

### Créés
```
src/core/exercise/
  ├── exercise.queries.ts    # Queries avec relations complètes
  ├── exercise.types.ts      # Types TypeScript
  └── index.ts               # Exports

src/app/(public)/exercises/
  └── [id]/
      └── page.tsx           # Page de détail d'exercice

src/app/api/exercises/
  ├── search/
  │   └── route.ts           # GET avec filtres
  └── [id]/
      └── route.ts           # GET avec exercices liés

src/components/exercises/
  └── ExerciseCard.tsx       # Carte d'exercice avec traçabilité

scripts/
  └── migrate-to-exercises.ts # Migration ExamPaper → Exercise
```

### Modifiés
```
prisma/schema.prisma         # Modèles Exercise, ExerciseCorrection, ExamPaper
src/components/pages/HomePage.tsx  # Recherche d'exercices
```

---

## 🔗 Documentation associée

- **[exercise-centric-refactoring.md](./database/exercise-centric-refactoring.md)** - Vision complète et plan détaillé
- **[exam-indexing-pivot-plan.md](./project-management/exam-indexing-pivot-plan.md)** - Phases de migration et avancement
- **[data-models.md](./database/data-models.md)** - MCD avec Exercise et ExerciseCorrection

---

## 📝 Exemple de flux utilisateur

### Recherche
1. Élève tape "titrage acide-base" dans la barre de recherche
2. Filtre par "Bac Général" + "Physique-Chimie"
3. Voit une liste d'exercices avec traçabilité :
   ```
   Titrage acide-base d'un vinaigre
   Métropole juin 2024 - Exercice 3 (6 pts)
   Bac Général › Physique-Chimie
   🏷️ Titrage · Acide-base · Dosage
   ⏱️ ~25 min · 🎯 ●●●○○
   ```

### Détail
4. Clique sur "Voir l'exercice"
5. Voit la page `/exercises/[id]` avec :
   - Titre : "Titrage acide-base d'un vinaigre"
   - Traçabilité : Métropole juin 2024 - Exercice 3 (6 pts)
   - Métadonnées : Points, durée, difficulté, thèmes
   - Boutons : Télécharger énoncé, Voir correction
   - Corrections disponibles :
     - APMEP (PDF) ⭐⭐⭐⭐⭐
     - YouTube - Prof Martin (Vidéo) ⭐⭐⭐⭐
   - Autres exercices de ce sujet :
     - Exercice 1: Mouvement parabolique (4 pts)
     - Exercice 2: Ondes mécaniques (6 pts)

---

## 🎉 Résultat

✅ **Architecture opérationnelle** - Recherche d'exercices fonctionnelle  
✅ **Traçabilité préservée** - Chaque exercice connaît son sujet parent  
✅ **Granularité fine** - Recherche au niveau exercice, pas sujet complet  
✅ **Évolutif** - Prêt pour découpage fin et enrichissement IA  

---

**Prochaine étape** : Phase 4.1 (découpage fin + extraction texte brut), puis Phase 5 (moteur de recherche avancé)
