# Modélisation des Programmes Scolaires (Curriculum)

## Date
23 novembre 2025

## Contexte

L'année d'un sujet d'annales ne suffit pas à l'associer à un programme scolaire spécifique. Par exemple:
- Un sujet de 2020 peut concerner l'ancien programme (série S) ou le nouveau (réforme bac)
- Les programmes changent en enseignement d'année scolaire
- Certains programmes sont progressifs (2019: Seconde, 2020: Première, 2021: Terminale)
- Des ajustements mineurs peuvent intervenir (ex: Programme Maths 2023)

## Solution: Modèle Curriculum

### Modèle Prisma actuel

```prisma
model Curriculum {
  id               String   @id @default(auto()) @map("_id") @db.ObjectId
  longDescription  String   // "Programme 2019", "Réforme Bac 2021"
  shortDescription String?
  
  // Période de validité
  startDate DateTime // Date de mise en vigueur
  endDate   DateTime? // Date de fin (null si actif)
  
  // Applicabilité (many-to-many avec Teaching via array d'IDs)
  teachingIds String[] @db.ObjectId
  
  // Métadonnées
  isActive Boolean  @default(true)
  notes    String?
  
  // Relations
  examPapers ExamPaper[]
  
  @@unique([longDescription, startDate])
}
```

### Modification du modèle ExamPaper

```prisma
model ExamPaper {
  // ... champs existants ...
  
  // Association optionnelle au programme scolaire
  curriculumId String?     @db.ObjectId
  curriculum   Curriculum? @relation(fields: [curriculumId], references: [id])
  
  // ... autres champs ...
}
```

## Programmes créés (Seeds)

Les seeds évoluent dans `prisma/seeds/curriculum.seed.ts`. Le jeu exact (noms, dates, actifs/inactifs) est susceptible d'évoluer, donc se référer au fichier plutôt qu'à une liste figée.

## Hiérarchie complète

```
Diploma → Division → Grade → Teaching → Subject → Domain → Theme
                              ^^^^^^
                                |
Curriculum ← ExamPaper
```

**Lien ExamPaper:**
- `ExamPaper.teachingId` → Quel enseignement (Spé Maths Tle)
- `ExamPaper.curriculumId` → Quel programme (Réforme 2021)
- `ExamPaper.sessionYear` → Quelle année d'examen (2024)

## Exemples d'utilisation

### 1. Sujet de Spé Maths Terminale 2024

```typescript
const examPaper = {
  label: "Métropole Juin 2024",
  sessionYear: 2024,
  teachingId: "...", // Spécialité Mathématiques (Terminale)
  curriculumId: "...", // Réforme Bac 2021 - Terminale (optionnel)
  // ...
};
```

### 2. Sujet ancien programme (avant 2020)

```typescript
const oldExamPaper = {
  label: "Métropole Juin 2019",
  sessionYear: 2019,
  teachingId: "...", // Mathématiques Série S
  curriculumId: "...", // Programme Lycée 2010 - Série S (optionnel)
  // ...
};
```

### 3. Rechercher les annales d'un programme

```typescript
// Tous les sujets de la réforme 2021 en Terminale
const papers = await prisma.examPaper.findMany({
  where: {
    curriculum: {
      longDescription: "Réforme Bac 2021 - Terminale"
    }
  },
  include: {
    teaching: { include: { grade: true, subject: true } },
    curriculum: true,
  }
});
```

### 4. Trouver le bon programme pour une annale

```typescript
// Logique de sélection automatique (exemple)
async function findCurriculum(sessionDate: Date, teachingId: string) {
  return prisma.curriculum.findFirst({
    where: {
      teachingIds: { has: teachingId },
      startDate: { lte: sessionDate },
      OR: [{ endDate: null }, { endDate: { gte: sessionDate } }],
    },
    orderBy: { startDate: "desc" },
  });
}
```

## Avantages

✅ **Précision historique** - Chaque annale est liée au programme exact
✅ **Gestion des transitions** - Distinction claire entre ancien/nouveau programme
✅ **Évolutif** - Facile d'ajouter de nouveaux programmes (réforme 2030?)
✅ **Recherche améliorée** - Filtrer par programme en enseignement, ancien programme, etc.
✅ **Métadonnées riches** - Dates précises, notes, statut actif/inactif

## Impact sur les données existantes

⚠️ **`curriculumId` est optionnel mais recommandé** pour tracer le programme exact.

Migration nécessaire si des ExamPaper existent déjà:
1. Identifier le programme selon `sessionYear` et `teachingId`
2. Assigner le `curriculumId` approprié

## Prochaines étapes

1. **Créer les enseignement de collège** (6e, 5e, 4e, 3e)
2. **Lier au Programme Collège 2016**
3. **Créer des annales de test** avec curriculumId
4. **Interface admin** pour gérer les programmes
5. **Filtres de recherche** par programme actif/inactif

## Tests

Vérification:
```bash
npx ts-node scripts/test-curriculums.ts
```
Le script vérifie la cohérence des programmes et des enseignements liés.
