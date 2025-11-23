# Hiérarchie des données pédagogiques

## Vue d'ensemble

La structure des données reflète la réforme du baccalauréat 2020 qui a introduit les spécialités et le tronc commun.

## Hiérarchie complète

```
Diploma (Bac Général, Bac Technologique, Bac Pro, Brevet, etc.)
│
└── Division / Filière (Générale, Technologique, Professionnelle)
    │
    └── Grade (Première, Terminale, etc.)
        │
        └── Course (SPE Maths, SPE Physique, HGGSP, Tronc Commun)
            │
            └── Subject (Mathématiques, Physique-Chimie, Histoire-Géo)
                │
                └── Chapter (Suites, Fonctions, Probabilités, etc.)
                    │
                    └── Theme (Suites géométriques, Fonction exponentielle, etc.)
```

## Modèles Prisma

### 1. Diploma
- **Description** : Type de diplôme
- **Exemples** : Bac Général, Bac Technologique STMG, Brevet des Collèges
- **Relations** : ExamPaper

### 2. Division
- **Description** : Filière au sein d'un diplôme
- **Exemples** : Générale, Technologique, Professionnelle
- **Relations** : ExamPaper

### 3. Grade
- **Description** : Niveau scolaire
- **Exemples** : Première, Terminale, 3ème, 4ème
- **Relations** : Course, ExamPaper

### 4. Course ⭐ **NOUVEAU**
- **Description** : Enseignement spécifique (spécialité ou tronc commun)
- **Exemples** :
  - Spécialité Mathématiques (Terminale)
  - Spécialité Physique-Chimie (Première)
  - Tronc Commun Sciences (Première)
  - Histoire-Géographie, Géopolitique et Sciences Politiques (HGGSP)
- **Propriétés** :
  - `name` : Nom complet (ex: "Spécialité Mathématiques")
  - `shortName` : Nom court (ex: "Spé Maths")
  - `gradeId` : Niveau scolaire
  - `subjectId` : Matière de référence
- **Relations** : Grade, Subject, ExamPaper
- **Contrainte unique** : `[name, gradeId]`

### 5. Subject
- **Description** : Matière disciplinaire
- **Exemples** : Mathématiques, Physique-Chimie, Histoire-Géographie, SVT
- **Relations** : Course, Chapter

### 6. Chapter
- **Description** : Chapitre du programme (grandes parties)
- **Exemples** : 
  - Algèbre et analyse
  - Probabilités et statistiques
  - Mécanique
  - Constitution et transformations de la matière
- **Propriétés** :
  - `order` : Ordre dans le programme
  - `subjectId` : Matière de référence
- **Relations** : Subject, Theme
- **Contrainte unique** : `[longDescription, subjectId]`

### 7. Theme
- **Description** : Thème spécifique au sein d'un chapitre
- **Exemples** :
  - Suites géométriques
  - Fonction exponentielle
  - Lois de Newton
  - Dosages par titrage
- **Relations** : Chapter

## ExamPaper (Sujet d'annales)

Le sujet d'annales est **rattaché au niveau Course**, pas directement au Subject.

### Structure
```typescript
ExamPaper {
  // Métadonnées
  label: "Métropole Sujet 1"
  sessionYear: 2024
  
  // Hiérarchie administrative
  diplomaId: ObjectId       // ex: Bac Général
  divisionId: ObjectId      // ex: Générale
  gradeId: ObjectId         // ex: Terminale
  
  // Point d'ancrage principal ⭐
  courseId: ObjectId        // ex: Spé Maths Terminale
  
  // Tagging pédagogique
  chapterIds: ObjectId[]    // Chapitres traités
  themeIds: ObjectId[]      // Thèmes spécifiques
  
  // Autres
  examinationCenterId: ObjectId?
  pdfUrl: string?
}
```

## Exemples concrets

### Exemple 1 : Spé Maths Terminale

```
Bac Général
└── Générale
    └── Terminale
        └── Spécialité Mathématiques (Course)
            └── Mathématiques (Subject)
                ├── Algèbre et analyse (Chapter)
                │   ├── Suites (Theme)
                │   ├── Limites de fonctions (Theme)
                │   └── ...
                └── Probabilités et statistiques (Chapter)
                    ├── Variables aléatoires (Theme)
                    └── ...
```

### Exemple 2 : Tronc Commun Première

```
Bac Général
└── Générale
    └── Première
        └── Tronc Commun Sciences (Course)
            └── Physique-Chimie (Subject)
                ├── Constitution et transformations de la matière (Chapter)
                └── ...
```

### Exemple 3 : Spé Physique-Chimie

```
Bac Général
└── Générale
    └── Terminale
        └── Spécialité Physique-Chimie (Course)
            └── Physique-Chimie (Subject)
                ├── Mouvement et interactions (Chapter)
                ├── Ondes et signaux (Chapter)
                ├── Énergie (Chapter)
                └── Constitution et transformations de la matière (Chapter)
```

## Avantages de cette structure

1. **Flexibilité** : Gère les spécialités, options et tronc commun
2. **Précision** : Le Course permet de distinguer "Spé Maths" du "Tronc Commun Maths"
3. **Évolutivité** : Peut s'adapter aux futures réformes
4. **Réutilisation** : Les Subjects, Chapters et Themes sont partagés entre plusieurs Courses
5. **Recherche** : Facilite la recherche de sujets par spécialité, niveau, etc.

## Migration depuis l'ancien modèle

### Ancien modèle
```
Diploma → Division → Grade → Subject → Chapter → Theme
                              ↓
                         ExamPaper
```

### Nouveau modèle
```
Diploma → Division → Grade → Course → Subject → Chapter → Theme
                              ↓
                         ExamPaper
```

### Changements principaux

1. **Ajout du niveau Course** entre Grade et Subject
2. **ExamPaper rattaché à Course** au lieu de Subject
3. **Course définit l'enseignement** (Spé, Tronc Commun, Option)
4. **Subject reste la référence disciplinaire** pour les Chapters
