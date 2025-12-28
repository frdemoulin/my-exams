# Exemples concrets du schéma de données

## Vue d'ensemble

Ce document illustre la hiérarchie des données avec des exemples concrets de sujets d'annales du baccalauréat.

Note UX (élève) : les filtres rapides suivent l'ordre **diplôme → matière → session → option/spécialité**
(l'option/spécialité correspond au `Teaching`).

## Schéma complet

```
┌─────────────────────────────────────────────────────────────────────┐
│                         BAC GÉNÉRAL                                 │
│                         (Diploma)                                   │
└────────────────────────┬────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         GÉNÉRALE                                    │
│                         (Division)                                  │
└────────────────────────┬────────────────────────────────────────────┘
                         │
         ┌───────────────┴───────────────┐
         ▼                               ▼
┌──────────────────┐            ┌──────────────────┐
│    PREMIÈRE      │            │    TERMINALE     │
│     (Grade)      │            │     (Grade)      │
└────────┬─────────┘            └────────┬─────────┘
         │                               │
         ├─────────────┬─────────────────┼─────────────┬──────────────┐
         ▼             ▼                 ▼             ▼              ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│  Spé Maths   │ │   Spé PC     │ │  Spé Maths   │ │   Spé PC     │ │ Maths Comp   │
│   (Teaching)   │ │   (Teaching)   │ │   (Teaching)   │ │   (Teaching)   │ │   (Teaching)   │
└──────┬───────┘ └──────┬───────┘ └──────┬───────┘ └──────┬───────┘ └──────┬───────┘
       │                │                 │                │                │
       ▼                ▼                 ▼                ▼                ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Mathématiques│ │Physique-Chimie│ │ Mathématiques│ │Physique-Chimie│ │ Mathématiques│
│   (Subject)  │ │   (Subject)  │ │   (Subject)  │ │   (Subject)  │ │   (Subject)  │
└──────┬───────┘ └──────┬───────┘ └──────┬───────┘ └──────┬───────┘ └──────┬───────┘
       │                │                 │                │                │
       ▼                ▼                 ▼                ▼                ▼
   Domaines        Domaines         Domaines        Domaines         Domaines
       │                │                 │                │                │
       ▼                ▼                 ▼                ▼                ▼
    Themes           Themes            Themes           Themes            Themes
```

## Exemple 1 : Sujet de Spé Maths Terminale (Métropole 2024)

### Arborescence complète

```
Bac Général
└── Générale
    └── Terminale
        └── Spécialité Mathématiques
            └── Mathématiques
                ├── Algèbre et analyse
                │   ├── Suites
                │   ├── Limites de fonctions
                │   ├── Continuité
                │   ├── Dérivation
                │   ├── Fonctions trigonométriques
                │   └── Primitives et équations différentielles
                ├── Géométrie
                │   ├── Vecteurs, droites et plans de l'espace
                │   └── Représentations paramétriques et équations cartésiennes
                └── Probabilités et statistiques
                    ├── Succession d'épreuves indépendantes
                    ├── Variables aléatoires
                    ├── Somme de variables aléatoires
                    └── Concentration, loi des grands nombres
```

### Données dans la base

> Note : `domainIds` / `themeIds` sur `ExamPaper` sont historiques (dépréciés).  
> Le tagging effectif se fait au niveau `Exercise.themeIds`.

```json
{
  "examPaper": {
    "label": "Métropole Sujet 1",
    "sessionYear": 2024,
    "diplomaId": "ObjectId(Bac Général)",
    "divisionId": "ObjectId(Générale)",
    "gradeId": "ObjectId(Terminale)",
    "teachingId": "ObjectId(Spécialité Mathématiques Terminale)",
    "examinationCenterIds": ["ObjectId(Métropole)"],
    "domainIds": [
      "ObjectId(Algèbre et analyse)",
      "ObjectId(Probabilités et statistiques)"
    ],
    "themeIds": [
      "ObjectId(Suites)",
      "ObjectId(Primitives et équations différentielles)",
      "ObjectId(Variables aléatoires)"
    ],
    "subjectUrl": "https://storage.example.com/bac-2024-maths-metropole-1.pdf"
  }
}
```

### Requête Prisma pour récupérer le sujet

```typescript
const examPaper = await prisma.examPaper.findUnique({
  where: { id: examPaperId },
  include: {
    diploma: true,
    division: true,
    grade: true,
    teaching: {
      include: {
        subject: true
      }
    },
    // Les centres d'examen sont récupérés via examinationCenterIds
  }
});

const examinationCenters = await prisma.examinationCenter.findMany({
  where: { id: { in: examPaper?.examinationCenterIds ?? [] } },
});

// Récupérer les thèmes via les exercices (tagging actuel)
const exercises = await prisma.exercise.findMany({
  where: { examPaperId },
  select: { themeIds: true },
});
const themeIds = [...new Set(exercises.flatMap((e) => e.themeIds))];
const themes = await prisma.theme.findMany({
  where: { id: { in: themeIds } },
  include: { domain: true },
});
```

## Exemple 2 : Sujet de Spé Physique-Chimie Première (Polynésie 2023)

### Arborescence complète

```
Bac Général
└── Générale
    └── Première
        └── Spécialité Physique-Chimie
            └── Physique-Chimie
                ├── Constitution et transformations de la matière
                │   ├── Suivi d'un titrage
                │   ├── Déterminer la composition d'un système
                │   ├── Modéliser l'évolution d'un système
                │   └── Élaborer des stratégies en synthèse organique
                ├── Mouvement et interactions
                │   ├── Décrire un mouvement
                │   └── Relier les actions appliquées et le mouvement
                ├── L'énergie : conversions et transferts
                │   ├── Aspects énergétiques des phénomènes électriques
                │   └── Aspects énergétiques des phénomènes mécaniques
                └── Ondes et signaux
                    ├── Émission et perception d'un son
                    └── Vision et image
```

### Données dans la base

```json
{
  "examPaper": {
    "label": "Polynésie Sujet 2",
    "sessionYear": 2023,
    "diplomaId": "ObjectId(Bac Général)",
    "divisionId": "ObjectId(Générale)",
    "gradeId": "ObjectId(Première)",
    "teachingId": "ObjectId(Spécialité Physique-Chimie Première)",
    "examinationCenterIds": ["ObjectId(Polynésie)"],
    "domainIds": [
      "ObjectId(Constitution et transformations de la matière)",
      "ObjectId(L'énergie : conversions et transferts)"
    ],
    "themeIds": [
      "ObjectId(Suivi d'un titrage)",
      "ObjectId(Aspects énergétiques des phénomènes électriques)"
    ],
    "subjectUrl": "https://storage.example.com/bac-2023-pc-polynesie-2.pdf"
  }
}
```

## Exemple 3 : Mathématiques Complémentaires Terminale

### Contexte

Un élève de Terminale n'ayant **pas** choisi Spé Maths peut suivre l'option Maths Complémentaires pour maintenir un enseignement mathématique.

### Arborescence

```
Bac Général
└── Générale
    └── Terminale
        ├── Option Mathématiques Complémentaires
        │   └── Mathématiques
        │       ├── Analyse (suite, limites, dérivation)
        │       ├── Probabilités et statistiques
        │       └── Algorithmique et programmation
        │
        └── Spécialité Mathématiques (pour comparaison)
            └── Mathématiques
                ├── Algèbre et analyse (plus approfondie)
                ├── Géométrie dans l'espace
                └── Probabilités et statistiques (plus approfondie)
```

### Différences clés

| Aspect | Spé Maths | Maths Complémentaires |
|--------|-----------|----------------------|
| **Public** | Élèves ayant choisi la spé en Première | Élèves sans Spé Maths |
| **Volume horaire** | 6h/semaine | 3h/semaine |
| **Niveau** | Approfondi | Intermédiaire |
| **Examen** | Épreuve écrite coefficient 16 | Contrôle continu |
| **Domaines** | Plus nombreux et approfondis | Programme allégé |

### Données pour un sujet de Maths Comp

```json
{
  "examPaper": {
    "label": "Évaluation commune n°2",
    "sessionYear": 2024,
    "diplomaId": "ObjectId(Bac Général)",
    "divisionId": "ObjectId(Générale)",
    "gradeId": "ObjectId(Terminale)",
    "teachingId": "ObjectId(Option Mathématiques Complémentaires)",
    "domainIds": [
      "ObjectId(Analyse)",
      "ObjectId(Probabilités et statistiques)"
    ],
    "themeIds": [
      "ObjectId(Suites)",
      "ObjectId(Variables aléatoires)"
    ]
  }
}
```

## Exemple 4 : Tronc Commun Sciences en Première

### Contexte

Tous les élèves de Première Générale suivent l'**Enseignement Scientifique** (tronc commun), quelle que soit leur spécialité.

### Arborescence

```
Bac Général
└── Générale
    └── Première
        ├── Tronc Commun - Enseignement Scientifique
        │   └── Physique-Chimie / SVT
        │       ├── Une longue histoire de la matière
        │       ├── Le Soleil, notre source d'énergie
        │       └── La Terre, un astre singulier
        │
        ├── Spécialité Physique-Chimie (pour élèves ayant choisi cette spé)
        │   └── Physique-Chimie
        │       └── [Programme spécifique de la spécialité]
        │
        └── Spécialité SVT (pour élèves ayant choisi cette spé)
            └── SVT
                └── [Programme spécifique de la spécialité]
```

### Données pour un sujet de Tronc Commun

```json
{
  "examPaper": {
    "label": "Évaluation n°1",
    "sessionYear": 2024,
    "diplomaId": "ObjectId(Bac Général)",
    "divisionId": "ObjectId(Générale)",
    "gradeId": "ObjectId(Première)",
    "teachingId": "ObjectId(Tronc Commun - Enseignement Scientifique)",
    "domainIds": [
      "ObjectId(Une longue histoire de la matière)",
      "ObjectId(Le Soleil, notre source d'énergie)"
    ],
    "themeIds": [
      "ObjectId(Les éléments chimiques)",
      "ObjectId(Le rayonnement solaire)"
    ]
  }
}
```

## Exemple 5 : Multi-domaines et multi-thèmes

### Contexte

Un sujet d'annales couvre souvent **plusieurs domaines et thèmes**.

### Sujet : Bac Maths Métropole 2024 - Sujet 1

**Exercice 1** : Suites et fonctions  
→ Domaines : Algèbre et analyse  
→ Thèmes : Suites, Limites de fonctions, Dérivation

**Exercice 2** : Probabilités  
→ Domaines : Probabilités et statistiques  
→ Thèmes : Variables aléatoires, Loi normale

**Exercice 3** : Géométrie dans l'espace  
→ Domaines : Géométrie  
→ Thèmes : Vecteurs dans l'espace, Équations de plans

**Exercice 4** : Primitives et équations différentielles  
→ Domaines : Algèbre et analyse  
→ Thèmes : Primitives et équations différentielles

### Données complètes

```json
{
  "examPaper": {
    "label": "Métropole Sujet 1",
    "sessionYear": 2024,
    "diplomaId": "ObjectId(Bac Général)",
    "divisionId": "ObjectId(Générale)",
    "gradeId": "ObjectId(Terminale)",
    "teachingId": "ObjectId(Spécialité Mathématiques Terminale)",
    "examinationCenterIds": ["ObjectId(Métropole)"],
    "domainIds": [
      "ObjectId(Algèbre et analyse)",
      "ObjectId(Probabilités et statistiques)",
      "ObjectId(Géométrie)"
    ],
    "themeIds": [
      "ObjectId(Suites)",
      "ObjectId(Limites de fonctions)",
      "ObjectId(Dérivation)",
      "ObjectId(Variables aléatoires)",
      "ObjectId(Loi normale)",
      "ObjectId(Vecteurs dans l'espace)",
      "ObjectId(Équations de plans)",
      "ObjectId(Primitives et équations différentielles)"
    ],
    "subjectUrl": "https://storage.example.com/bac-2024-maths-metropole-1.pdf"
  }
}
```

## Recherche de sujets

### Cas d'usage 1 : Filtrage côté élève (diplôme → matière → session → option/spécialité)

```typescript
const examPapers = await prisma.examPaper.findMany({
  where: {
    diploma: { shortDescription: "Bac général" },
    sessionYear: 2024,
    teaching: {
      subject: { shortDescription: "Maths" },
      longDescription: "Spécialité Mathématiques",
      grade: { shortDescription: "Tle" },
    },
  },
  include: {
    diploma: true,
    teaching: {
      include: {
        grade: true,
        subject: true,
      },
    },
  },
  orderBy: {
    sessionYear: "desc",
  },
});
```

### Cas d'usage 2 : Trouver tous les sujets de Spé Maths Terminale

```typescript
const examPapers = await prisma.examPaper.findMany({
  where: {
    teaching: {
      longDescription: "Spécialité Mathématiques",
      grade: {
        shortDescription: "Tle"
      }
    }
  },
  include: {
    teaching: {
      include: {
        grade: true,
        subject: true
      }
    },
    // Centres d'examen via examinationCenterIds
  },
  orderBy: {
    sessionYear: 'desc'
  }
});
```

### Cas d'usage 3 : Trouver des sujets sur les "Suites"

```typescript
// Récupérer l'ID du thème "Suites"
const suitesTheme = await prisma.theme.findFirst({
  where: {
    longDescription: { contains: "Suites" }
  }
});

// Trouver les sujets contenant ce thème (via exercises)
const exercises = await prisma.exercise.findMany({
  where: {
    themeIds: { has: suitesTheme.id }
  },
  select: { examPaperId: true }
});

const examPaperIds = [...new Set(exercises.map((e) => e.examPaperId))];
const examPapers = await prisma.examPaper.findMany({
  where: { id: { in: examPaperIds } },
  include: {
    teaching: {
      include: {
        grade: true,
        subject: true
      }
    }
  }
});
```

### Cas d'usage 4 : Lister tous les Teachings de Terminale

```typescript
const terminaleTeachings = await prisma.teaching.findMany({
  where: {
    grade: {
      shortDescription: "Tle"
    }
  },
  include: {
    subject: true,
    grade: true,
    _count: {
      select: { examPapers: true }
    }
  },
  orderBy: {
    longDescription: 'asc'
  }
});
```

## Diagramme de flux : Création d'un sujet

```
┌─────────────────────────────────────────────┐
│  1. Sélectionner le Diploma                 │
│     (ex: Bac Général)                       │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│  2. Sélectionner la Division                │
│     (ex: Générale)                          │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│  3. Sélectionner le Grade                   │
│     (ex: Terminale)                         │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│  4. Sélectionner le Teaching ⭐               │
│     (ex: Spécialité Mathématiques)          │
│     → Détermine automatiquement le Subject  │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│  5. Sélectionner les Domaines              │
│     (ex: Algèbre, Probabilités)             │
│     → Basés sur le Subject du Teaching        │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│  6. Sélectionner les Themes                 │
│     (ex: Suites, Variables aléatoires)      │
│     → Basés sur les Domaines sélectionnés  │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│  7. Ajouter les métadonnées                 │
│     - Label (ex: Métropole Sujet 1)         │
│     - Année (ex: 2024)                      │
│     - Centres d'examen (liste)              │
│     - URL du sujet (subjectUrl)             │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│  ✓ ExamPaper créé                           │
└─────────────────────────────────────────────┘
```

## Points clés à retenir

1. **Teaching est le pivot** : C'est le niveau où s'attache l'ExamPaper
2. **Subject est la référence** : Il contient les Domaines et Themes réutilisables
3. **Flexibilité** : Même Subject peut être dans plusieurs Teachings (Spé Maths, Maths Comp, etc.)
4. **Hiérarchie administrative** : Diploma → Division → Grade
5. **Hiérarchie pédagogique** : Teaching → Subject → Domain → Theme
6. **Tagging multiple** : Un ExamPaper peut couvrir plusieurs Domaines et Themes
