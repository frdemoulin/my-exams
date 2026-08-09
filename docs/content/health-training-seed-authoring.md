# Contrat éditorial d'auteur Santé et guide de rédaction de seeds (ChatGPT / Édition)

Ce document constitue la **source de vérité** pour la rédaction des contenus Santé multi-formats destinés à My Exams.
Les contenus sont livrés sous forme de fichiers TypeScript (ou d'archives ZIP par chapitre) contenant des définitions typées respectant le contrat `HealthTrainingAuthorQuestion`.

---

## 1. Responsabilités éditoriales (ChatGPT) vs Responsabilités techniques (My Exams)

### ChatGPT (Auteur et responsable éditorial)
ChatGPT est responsable de :
- L'analyse des cours et des annales.
- La définition des objectifs pédagogiques et du choix du format UNESS (QRU, QRM, QRP, QRPL, QROC, QZONE).
- La rédaction des énoncés, propositions, réponses correctes, explications transversales et corrections par item.
- La définition des réponses admises et des tolérances pour les QROC (textuelles et numériques).
- La définition des images et coordonnées des zones cibles pour les QZONE V1.

### My Exams (Compilateur et infrastructure)
Le moteur My Exams prend en charge :
- La validation forte du format et la détection d'incohérences de structure à la compilation.
- La normalisation automatique vers les structures de persistance (sans exposer Prisma ou `answerPayload` à l'auteur).
- L'exécution du Player d'entraînement, l'évaluation automatique, l'affichage et les statistiques par format.

---

## 2. Structure d'une question auteur (`HealthTrainingAuthorQuestion`)

Toute question d'auteur Santé partage le socle de champs suivants :
- `order` : numéro d'ordre de la question dans la banque du chapitre (entier `1, 2, 3...`).
- `difficulty` : `"EASY" | "MEDIUM" | "HARD"`.
- `format` : `"QRU" | "QRM" | "QRP" | "QRPL" | "QROC" | "QZONE"`.
- `question` : énoncé clair de la question en Markdown.
- `explanation` : explication pédagogique transversale ou démarche globale de résolution.
- `questionDiagram` *(optionnel)* : diagramme structuré Santé (chimie, osides, lipides, protéines, enzymes).

---

## 3. Exemples complets compilables par format

### 3.1. QRU — Question à Réponse Unique
Exactement **une seule** proposition doit avoir `correct: true`.

```typescript
import type { HealthTrainingAuthorQuestion } from '@/core/questions';

export const questionQru: HealthTrainingAuthorQuestion = {
  order: 1,
  difficulty: "EASY",
  format: "QRU",
  question: "Quelle est la principale organite responsable de la synthèse d'ATP par phosphorylation oxydative ?",
  choices: [
    {
      content: "Appareil de Golgi",
      correct: false,
      explanation: "L'appareil de Golgi trie et mâture les protéines.",
    },
    {
      content: "Mitochondrie",
      correct: true,
      explanation: "La mitochondrie contient la chaîne de transport des électrons et l'ATP synthétase.",
    },
    {
      content: "Lysosome",
      correct: false,
      explanation: "Le lysosome gère la dégradation hydrolytique.",
    },
    {
      content: "Réticulum endoplasmique lisse",
      correct: false,
      explanation: "Le REL synthétise les lipides.",
    },
  ],
  explanation: "La mitochondrie est la centrale énergétique de la cellule eucaryote.",
};
```

---

### 3.2. QRM — Question à Réponses Multiples
Au moins **une** proposition doit avoir `correct: true` (une ou plusieurs bonnes réponses).

```typescript
export const questionQrm: HealthTrainingAuthorQuestion = {
  order: 2,
  difficulty: "MEDIUM",
  format: "QRM",
  question: "Parmi les propositions suivantes concernant les acides gras insaturés, lesquelles sont exactes ?",
  choices: [
    {
      content: "Ils possèdent au moins une double liaison C=C.",
      correct: true,
      explanation: "Vrai : la double liaison caractérise l'insaturation.",
    },
    {
      content: "La conformation cis induit une courbure de la chaîne hydrocarbonée.",
      correct: true,
      explanation: "Vrai : le coude cis diminue l'empilement moléculaire.",
    },
    {
      content: "Leur température de fusion est plus élevée que celle des acides gras saturés correspondants.",
      correct: false,
      explanation: "Faux : leur température de fusion est plus basse.",
    },
    {
      content: "L'acide oléique est un acide gras mono-insaturé en omega-9.",
      correct: true,
      explanation: "Vrai : 18:1 cis-9 est bien un n-9.",
    },
  ],
  explanation: "La rigidité de la double liaison cis perturbe l'organisation des chaînes aliphatiques.",
};
```

---

### 3.3. QRP — Question à Nombre de Réponses Précisé
`requiredSelectionCount` spécifie le nombre exact de réponses à cocher par l'étudiant. Le nombre de choix avec `correct: true` **doit correspondre exactement** à `requiredSelectionCount`.

```typescript
export const questionQrp: HealthTrainingAuthorQuestion = {
  order: 3,
  difficulty: "MEDIUM",
  format: "QRP",
  requiredSelectionCount: 2,
  question: "Sélectionnez les deux enzymes clés régulatrices et irréversibles de la glycolyse.",
  choices: [
    {
      content: "Phosphofructokinase-1 (PFK-1)",
      correct: true,
      explanation: "Vrai : étape clé majeure de la glycolyse.",
    },
    {
      content: "Phosphoglucose isomérase",
      correct: false,
      explanation: "Faux : réaction réversible proche de l'équilibre.",
    },
    {
      content: "Pyruvate kinase",
      correct: true,
      explanation: "Vrai : étape finale irréversible générant de l'ATP.",
    },
    {
      content: "Aldolase",
      correct: false,
      explanation: "Faux : réaction réversible.",
    },
  ],
  explanation: "Les 3 réactions irréversibles de la glycolyse sont catalysées par la hexokinase, la PFK-1 et la pyruvate kinase.",
};
```

---

### 3.4. QRPL — Question à Nombre de Réponses Précisé Longue
Même principe que la QRP, mais avec une liste longue de propositions (au moins 6 propositions).

```typescript
export const questionQrpl: HealthTrainingAuthorQuestion = {
  order: 4,
  difficulty: "MEDIUM",
  format: "QRPL",
  requiredSelectionCount: 3,
  question: "Parmi la liste suivante d'acides aminés, sélectionnez les trois acides aminés à chaîne latérale strictement aromatique.",
  choices: [
    { content: "Phénylalanine", correct: true, explanation: "Noyau benzénique." },
    { content: "Tyrosine", correct: true, explanation: "Noyau phénol." },
    { content: "Tryptophane", correct: true, explanation: "Noyau indole." },
    { content: "Alanine", correct: false, explanation: "Chaîne aliphatique." },
    { content: "Leucine", correct: false, explanation: "Chaîne aliphatique ramifiée." },
    { content: "Lysine", correct: false, explanation: "Chaîne aliphatique basique." },
    { content: "Sérine", correct: false, explanation: "Chaîne aliphatique hydroxylée." },
    { content: "Proline", correct: false, explanation: "Iminoacide cyclique aliphatique." },
  ],
  explanation: "Les trois acides aminés aromatiques sont la Phénylalanine, la Tyrosine et le Tryptophane.",
};
```

---

### 3.5. QROC Textuelle — Question Ouverte à Rédaction Courte
Définie avec `answer: { type: "text", acceptedAnswers: [...] }`. Les variantes admises sont fournies explicitement par ChatGPT.

```typescript
export const questionQrocText: HealthTrainingAuthorQuestion = {
  order: 5,
  difficulty: "MEDIUM",
  format: "QROC",
  question: "Quel organite cellulaire est le siège principal de la N-glycosylation des protéines ?",
  answer: {
    type: "text",
    acceptedAnswers: [
      "réticulum endoplasmique rugueux",
      "réticulum endoplasmique granuleux",
      "RER",
      "REG",
    ],
    normalization: {
      trim: true,
      collapseWhitespace: true,
      caseSensitive: false,
      ignoreAccents: true,
    },
  },
  explanation: "La N-glycosylation débute dans le RER/REG par le transfert d'un oligosaccharide précurseur.",
};
```

---

### 3.6. QROC Numérique — Question Ouverte avec valeur numérique
Définie avec `answer: { type: "number", value, tolerance?, unit?, acceptedUnits? }`.

```typescript
export const questionQrocNumber: HealthTrainingAuthorQuestion = {
  order: 6,
  difficulty: "MEDIUM",
  format: "QROC",
  question: "Quelle est la valeur physiologique moyenne du pH sanguin artériel chez l'humain ?",
  answer: {
    type: "number",
    value: 7.4,
    tolerance: 0.05,
    unit: "pH",
  },
  explanation: "Le pH du sang artériel est maintenu entre 7,35 et 7,45.",
};
```

---

### 3.7. QZONE V1 — Question à Zone à Pointer
Définie avec une image support et des zones cibles représentées par leurs coordonnées normalisées $(x, y) \in [0, 1]$ et une tolérance de rayon.

```typescript
export const questionQzone: HealthTrainingAuthorQuestion = {
  order: 7,
  difficulty: "HARD",
  format: "QZONE",
  question: "Cliquez sur la mitochondrie dans le schéma de la cellule ci-dessous.",
  image: {
    src: "/images/training/histologie/cellule-animale.png",
    alt: "Schéma d'organisation d'une cellule animale",
    width: 800,
    height: 600,
  },
  expectedZones: [
    {
      id: "target-mitochondrie",
      label: "Mitochondrie",
      x: 0.45,
      y: 0.60,
      tolerance: 0.08,
    },
  ],
  explanation: "La mitochondrie est localisée en (x=0.45, y=0.60), caractérisée par ses crêtes membranaires internes.",
};
```

---

### 3.8. Question avec Diagramme Santé Intégré

Les questions peuvent intégrer les objets de diagrammes structurés préexistants dans My Exams (ex: chimie, osides, lipides, protéines, enzymes) sans utiliser d'images externes.

```typescript
export const questionDiagramme: HealthTrainingAuthorQuestion = {
  order: 8,
  difficulty: "MEDIUM",
  format: "QRU",
  question: "Identifiez la représentation de Fischer ci-dessous :",
  questionDiagram: {
    type: "carbohydrate",
    representation: "fischer",
    structure: "D-glucose",
  },
  choices: [
    { content: "D-Glucose", correct: true, explanation: "Vrai : la configuration des OH en C2, C3, C4, C5 est Droite, Gauche, Droite, Droite." },
    { content: "D-Galactose", correct: false, explanation: "Faux : le D-Galactose est l'épimère en C4 du D-Glucose." },
    { content: "D-Mannose", correct: false, explanation: "Faux : le D-Mannose est l'épimère en C2 du D-Glucose." },
    { content: "D-Fructose", correct: false, explanation: "Faux : le D-Fructose est un cétohexose." },
  ],
  explanation: "Le D-glucose est l'aldohexose de référence en représentation de Fischer.",
};
```

---

### 3.9. Groupe de questions partageant un énoncé commun

Dans le fichier de seed du chapitre (`.seed.ts`), les questions indépendantes sont regroupées en quiz et peuvent partager un énoncé ou contexte médical commun.

```typescript
export const quizGroupExample = {
  order: 1,
  slug: "biochimie-glycolyse-entrainement",
  title: "Entraînement - La Glycolyse",
  description: "Quiz d'application sur la voie d'Embden-Meyerhof",
  stage: "PRACTICE" as const,
  sectionOrder: 1,
  items: [
    {
      type: "GROUP" as const,
      title: "Cas clinique / Contexte métabolique",
      sharedStatement: "Un patient présente un déficit héréditaire en pyruvate kinase érythrocytaire...",
      questionOrders: [1, 2, 3],
    },
  ],
};
```

---

## 4. Orientations éditoriales & Directives de composition

### Nombre recommandé de questions par quiz

| Niveau de Quiz | Nombre habituel de questions | Objectif pédagogique principal |
|---|---:|---|
| **Découverte (`DISCOVER`)** | 8 – 10 | Découvrir les notions, mémorisation directe. Priorité aux QRU et QRM simples, QROC directes. |
| **Entraînement (`PRACTICE`)** | 10 – 12 | Consolider et récupérer activement. Renforcer QRM, QRP, QROC et QZONE. |
| **Maîtrise (`MASTER`)** | 12 – 15 | Réduire le guidage. QROC, QRP, QZONE discriminantes et QRM transversales. |
| **Synthèse (`SYNTHESIS`)** | 15 – 20 | Assemblage complet du chapitre. Mélange de tous les formats de la matière. |
| **Examen blanc** | Blueprint exact | Conforme à la maquette universitaire (ex: 28/34/38 en UE14 Reims). |

> **Note :** Le compilateur ne rejette pas un quiz qui sort légèrement de ces fourchettes ; il s'agit de recommandations éditoriales.

### Pas de quotas artificiels
Ne pas appliquer de règles mécaniques (ex: "chaque quiz doit avoir 5 QCM et 2 QROC"). Le choix des formats dépend exclusivement de la compétence évaluée et de la nature de la matière (histologie, chimie, biochimie).
