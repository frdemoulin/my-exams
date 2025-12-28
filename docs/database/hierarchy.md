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
        └── Teaching (SPE Maths, SPE Physique, HGGSP, Tronc Commun)
            │
            └── Subject (Mathématiques, Physique-Chimie, Histoire-Géo)
                │
                └── Domaine (Domain) (Suites, Fonctions, Probabilités, etc.)
                    │
                    └── Theme (Suites géométriques, Fonction exponentielle, etc.)
```

## Modèles Prisma

### 1. Diploma
- **Description** : Type de diplôme
- **Exemples** : Bac Général, Bac Technologique STMG, Brevet des Collèges
- **Relations** : ExamPaper
- **Note** : `isActive` permet de masquer un diplôme côté élève sans le supprimer.

### 2. Division
- **Description** : Filière au sein d'un diplôme
- **Exemples** : Générale, Technologique, Professionnelle
- **Relations** : ExamPaper
- **Note** : `isActive` permet de masquer une filière côté élève sans la supprimer.

### 3. Grade
- **Description** : Niveau scolaire
- **Exemples** : Première, Terminale, 3ème, 4ème
- **Relations** : Teaching, ExamPaper

### 4. Teaching ⭐ **NOUVEAU**
- **Description** : Enseignement spécifique (spécialité ou tronc commun)
- **Exemples** :
  - Spécialité Mathématiques (Terminale)
  - Spécialité Physique-Chimie (Première)
  - Tronc Commun Sciences (Première)
  - Histoire-Géographie, Géopolitique et Sciences Politiques (HGGSP)
- **Propriétés** :
  - `longDescription` : Nom complet (ex: "Spécialité Mathématiques")
  - `shortDescription` : Nom court (ex: "Spé Maths")
  - `isActive` : Permet de masquer un enseignement côté élève
  - `gradeId` : Niveau scolaire
  - `subjectId` : Matière de référence
- **Relations** : Grade, Subject, ExamPaper
- **Contrainte unique** : `[longDescription, gradeId]`

### 5. Subject
- **Description** : Matière disciplinaire
- **Exemples** : Mathématiques, Physique-Chimie, Histoire-Géographie, SVT
- **Relations** : Teaching, Domaine (Domain)
- **Note** : `isActive` permet de masquer une matière côté élève sans la supprimer.

### 6. Domaine (Domain)
- **Description** : Domaine au sens "chapitre" (niveau élève, plus fin que des macro-parties)
- **Exemples** : 
  - Nombres complexes
  - Suites
  - Géométrie dans l'espace
  - Probabilités
  - Électricité
- **Propriétés** :
  - `order` : Ordre dans le programme
  - `subjectId` : Matière de référence
  - `discipline` : PHYSIQUE | CHIMIE | TRANSVERSAL (optionnel)
- **Relations** : Subject, Theme, DomainScope
- **Contrainte unique** : `[longDescription, subjectId]`
- **Note** : `isActive` permet de masquer un domaine côté élève sans le supprimer.

### 6bis. DomainScope (DomainScope)
- **Description** : Portée d'un domaine par diplôme/niveau (activation ciblée)
- **Exemples** :
  - "Suites" actif pour Bac / Terminale
  - "Probabilités" actif pour Brevet / 3e
- **Propriétés** :
  - `domainId`, `diplomaId`, `gradeId`
  - `divisionId` (optionnel)
  - `teachingId` (optionnel) pour cibler un enseignement précis (ex: Maths expertes)
  - `curriculumId` (optionnel) pour cibler un programme précis
  - `labelOverride`, `order`, `isActive`
- **Relations** : Domain, Diploma, Grade, Division, Teaching, Curriculum (optionnels)

### 7. Theme
- **Description** : Thème fin au sein d'un domaine (notion précise)
- **Exemples** :
  - Loi binomiale
  - Equation d'une tangente
  - Interpretation geometrique du nombre derive
  - Argument d'un nombre complexe
  - Equation du second degre
- **Relations** : Domain

> Usage recherche : les eleves filtrent via Domain/Theme, mais le tagging effectif est porte par `Exercise.themeIds`.
> La recherche globale doit tenir compte de ces deux niveaux.

## ExamPaper (Sujet d'annales)

Le sujet d'annales est **rattaché au niveau Teaching**, pas directement au Subject.

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
  teachingId: ObjectId        // ex: Spé Maths Terminale
  
  // Tagging pédagogique
  domainIds: ObjectId[]    // Domaines traités (champ historique, déprécié)
  themeIds: ObjectId[]      // Thèmes spécifiques (déprécié)
  // Tagging actuel : Exercise.themeIds (au niveau exercice)
  
  // Autres
  examinationCenterIds: ObjectId[] // Liste de centres d'examen
  subjectUrl: string?
}
```

## Exemples concrets

### Exemple 1 : Spé Maths Terminale

```
Bac Général
└── Générale
    └── Terminale
        └── Spécialité Mathématiques (Teaching)
            └── Mathématiques (Subject)
                ├── Algèbre et analyse (Domaine)
                │   ├── Suites (Theme)
                │   ├── Limites de fonctions (Theme)
                │   └── ...
                └── Probabilités et statistiques (Domaine)
                    ├── Variables aléatoires (Theme)
                    └── ...
```

### Exemple 2 : Tronc Commun Première

```
Bac Général
└── Générale
    └── Première
        └── Tronc Commun Sciences (Teaching)
            └── Physique-Chimie (Subject)
                ├── Constitution et transformations de la matière (Domaine)
                └── ...
```

### Exemple 3 : Spé Physique-Chimie

```
Bac Général
└── Générale
    └── Terminale
        └── Spécialité Physique-Chimie (Teaching)
            └── Physique-Chimie (Subject)
                ├── Mouvement et interactions (Domaine)
                ├── Ondes et signaux (Domaine)
                ├── Énergie (Domaine)
                └── Constitution et transformations de la matière (Domaine)
```

## Avantages de cette structure

1. **Flexibilité** : Gère les spécialités, options et tronc commun
2. **Précision** : Le Teaching permet de distinguer "Spé Maths" du "Tronc Commun Maths"
3. **Évolutivité** : Peut s'adapter aux futures réformes
4. **Réutilisation** : Les Subjects, Domaines et Themes sont partagés entre plusieurs Teachings
5. **Recherche** : Facilite la recherche de sujets par spécialité, niveau, etc.

## Migration depuis l'ancien modèle

### Ancien modèle
```
Diploma → Division → Grade → Subject → Domain → Theme
                              ↓
                         ExamPaper
```

### Nouveau modèle
```
Diploma → Division → Grade → Teaching → Subject → Domain → Theme
                              ↓
                         ExamPaper
```

### Changements principaux

1. **Ajout du niveau Teaching** entre Grade et Subject
2. **ExamPaper rattaché à Teaching** au lieu de Subject
3. **Teaching définit l'enseignement** (Spé, Tronc Commun, Option)
4. **Subject reste la référence disciplinaire** pour les Domaines
