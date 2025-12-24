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

### Nouveau modèle Prisma

```prisma
model Curriculum {
  id               String   @id @default(auto()) @map("_id") @db.ObjectId
  longDescription  String   // "Programme 2019", "Réforme Bac 2021"
  shortDescription String?
  
  // Période de validité
  startYear  Int      // Année de mise en vigueur
  endYear    Int?     // Année de fin (null si actif)
  startMonth Int?     // Mois de début (1-12)
  endMonth   Int?     // Mois de fin (1-12)
  
  // Applicabilité (many-to-many avec Teaching via array d'IDs)
  teachingIds String[] @db.ObjectId
  
  // Métadonnées
  isActive Boolean  @default(true)
  notes    String?
  
  // Relations
  examPapers ExamPaper[]
  
  @@unique([longDescription, startYear])
}
```

### Modification du modèle ExamPaper

```prisma
model ExamPaper {
  // ... champs existants ...
  
  // Association OBLIGATOIRE au programme scolaire
  curriculumId String     @db.ObjectId
  curriculum   Curriculum @relation(fields: [curriculumId], references: [id])
  
  // ... autres champs ...
}
```

## Programmes créés (Seeds)

### Programmes Actifs 🟢

1. **Programme Collège 2016** (2016 →)
   - Cycle 3 (6e) et Cycle 4 (5e, 4e, 3e)
   - 0 enseignement associés (à compléter)

2. **Réforme Bac 2021 - Seconde** (2019 →)
   - 5 enseignement de 2de
   - Entrée en vigueur: septembre 2019

3. **Réforme Bac 2021 - Première** (2019 →)
   - 11 enseignement (spécialités + tronc commun)
   - Première session: 2021

4. **Réforme Bac 2021 - Terminale** (2020 →)
   - 12 enseignement (spécialités + tronc commun + options)
   - Première session: juin 2021

5. **Programme Mathématiques 2023** (2023 →)
   - 5 enseignement de maths (1re + Tle)
   - Ajustements mineurs

### Programmes Inactifs 🔴

6. **Programme Lycée 2010 - Série S** (2012-2020)
   - Dernière session: juin 2020

7. **Programme Lycée 2010 - Série ES** (2012-2020)

8. **Programme Lycée 2010 - Série L** (2012-2020)

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
  curriculumId: "...", // Réforme Bac 2021 - Terminale
  // ...
};
```

### 2. Sujet ancien programme (avant 2020)

```typescript
const oldExamPaper = {
  label: "Métropole Juin 2019",
  sessionYear: 2019,
  teachingId: "...", // Mathématiques Série S
  curriculumId: "...", // Programme Lycée 2010 - Série S
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
// Logique de sélection automatique
function findCurriculum(sessionYear: number, teachingId: string) {
  // Si 2021 ou après → Réforme Bac 2021
  // Si 2020 ou avant → Ancien programme
  
  if (sessionYear >= 2021) {
    return prisma.curriculum.findFirst({
      where: {
        longDescription: { startsWith: "Réforme Bac 2021" },
        teachingIds: { has: teachingId }
      }
    });
  }
  // ...
}
```

## Avantages

✅ **Précision historique** - Chaque annale est liée au programme exact
✅ **Gestion des transitions** - Distinction claire entre ancien/nouveau programme
✅ **Évolutif** - Facile d'ajouter de nouveaux programmes (réforme 2030?)
✅ **Recherche améliorée** - Filtrer par programme en enseignement, ancien programme, etc.
✅ **Métadonnées riches** - Dates précises, notes, statut actif/inactif

## Impact sur les données existantes

⚠️ **ExamPaper nécessite maintenant `curriculumId`**

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

Résultat: 8 programmes créés, 5 actifs, correctement liés aux 28 enseignement.
