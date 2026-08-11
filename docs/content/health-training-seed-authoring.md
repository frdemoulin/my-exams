# Contrat éditorial d'auteur Santé et guide de rédaction de seeds (ChatGPT / Édition)

Ce document constitue la **source de vérité** pour la rédaction des contenus Santé multi-formats destinés à My Exams.
Les contenus sont livrés sous forme de fichiers TypeScript (ou d'archives ZIP par chapitre) contenant des définitions typées respectant le contrat `HealthTrainingAuthorQuestion`.

Les seeds peuvent importer directement la bibliothèque d'auteur depuis :
```typescript
import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-authoring';
```

---

## 1. Responsabilités éditoriales (ChatGPT) vs Responsabilités techniques (My Exams)

### ChatGPT (Auteur et responsable éditorial)
ChatGPT est responsable de :
- L'analyse des cours et des annales.
- La définition des objectifs pédagogiques et du choix du format UNESS (QRU, QRM, QRP, QRPL, QROC, QZONE).
- La rédaction des énoncés, propositions, réponses correctes, explications transversales et corrections par item.
- La définition des réponses admises et des tolérances pour les QROC (textuelles et numériques).
- La définition des images et des cibles pour les QZONE V1.

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
- `explanation` : explication pédagogique transversale ou démarche globale de résolution (centrée sur les notions scientifiques, sans mentionner les coordonnées techniques).
- `questionDiagram` *(optionnel)* : diagramme structuré Santé (chimie, osides, lipides, protéines, enzymes).

---

## 3. Exemples complets compilables par format

### 3.1. QRU — Question à Réponse Unique
Exactement **une seule** proposition doit avoir `correct: true`.

```typescript
import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-authoring';

export const questionQru: HealthTrainingAuthorQuestion = {
  order: 1,
  difficulty: "EASY",
  format: "QRU",
  question: "Quel est le principal organite responsable de la synthèse d'ATP par phosphorylation oxydative ?",
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
  question: "Parmi les acides aminés suivants, sélectionnez les deux acides aminés possédant une chaîne latérale dicarboxylique (acides).",
  choices: [
    {
      content: "Acide aspartique (Aspartate)",
      correct: true,
      explanation: "Vrai : l'aspartate possède un groupement β-carboxyle (pKa ~ 3,9).",
    },
    {
      content: "Lysine",
      correct: false,
      explanation: "Faux : la lysine possède une chaîne latérale aliphatique basique.",
    },
    {
      content: "Acide glutamique (Glutamate)",
      correct: true,
      explanation: "Vrai : le glutamate possède un groupement γ-carboxyle (pKa ~ 4,3).",
    },
    {
      content: "Alanine",
      correct: false,
      explanation: "Faux : l'alanine possède un groupement méthyle neutre.",
    },
  ],
  explanation: "L'aspartate et le glutamate sont les deux seuls acides aminés dicarboxyliques chargés négativement à pH physiologique.",
};
```

---

### 3.4. QRPL — Question à Nombre de Réponses Précisé Longue (Règles UNESS)
Conformément au référentiel UNESS :
- **Propositions** : la liste doit comporter **entre 10 et 25 propositions**.
- **Sélection requise (`requiredSelectionCount`)** : doit être comprise **entre 1 et 5**.

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
    { content: "Valine", correct: false, explanation: "Chaîne aliphatique ramifiée." },
    { content: "Glutamate", correct: false, explanation: "Chaîne aliphatique dicarboxylique." },
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
Pour une grandeur adimensionnelle comme le pH, ne pas spécifier d'unité (`unit`) afin de permettre la saisie directe de la valeur numérique par l'étudiant.

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
  },
  explanation: "Le pH du sang artériel est maintenu entre 7,35 et 7,45.",
};
```

---

### 3.7. QZONE V1 — Question à Zone à Pointer

En QZONE V1 :
- `image` fournit la source et la description du support visuel.
- `expectedZones` contient une ou plusieurs zones cibles en coordonnées normalisées $(x, y) \in [0, 1]$ et tolérance de rayon.
- **IMPORTANT — Zones alternatives :** Plusieurs `expectedZones` représentent **plusieurs cibles alternatives valides pour UN SEUL clic utilisateur** (ex: "Cliquez sur un lymphocyte" sur un frottis sanguin qui contient 3 lymphocytes). Un clic dans n'importe laquelle de ces zones valide la question (`correct`). L'étudiant ne doit effectuer qu'un seul clic.
- **Explication pédagogique :** L'explication doit décrire les caractéristiques biologiques de la structure ciblée (forme, membrane, coloration), sans mentionner les coordonnées numériques $x/y$.

```typescript
export const questionQzoneAlternatives: HealthTrainingAuthorQuestion = {
  order: 7,
  difficulty: "HARD",
  format: "QZONE",
  question: "Cliquez sur un des trois lymphocytes présentés sur le frottis sanguin ci-dessous.",
  image: {
    src: "/images/training/histologie/frottis-sanguin.png",
    alt: "Frottis sanguin périphérique",
    width: 800,
    height: 600,
  },
  expectedZones: [
    { id: "lympho-1", label: "Lymphocyte A", x: 0.20, y: 0.35, tolerance: 0.06 },
    { id: "lympho-2", label: "Lymphocyte B", x: 0.55, y: 0.40, tolerance: 0.06 },
    { id: "lympho-3", label: "Lymphocyte C", x: 0.78, y: 0.75, tolerance: 0.06 },
  ],
  explanation: "Les lymphocytes se caractérisent par un volumineux noyau arrondi hyperchromatique et un mince liseré cytoplasmique basophile.",
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

Dans le fichier de seed du chapitre (`.seed.ts`), les questions indépendantes sont regroupées en quiz et peuvent partager un énoncé ou contexte médical commun. Le titre du quiz décrit uniquement son contenu (sans préfixe de niveau comme "Découverte" ou "Entraînement", cette information étant déjà portée par la propriété `stage`).

```typescript
export const quizGroupExample = {
  order: 1,
  slug: "biochimie-glycolyse",
  title: "La glycolyse",
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

### Règle des quatre propositions A à D
Sauf exception documentée (telle que la QRPL qui utilise une liste longue de 10 à 25 choix), chaque QRU, QRM ou QRP produit pour les quiz Santé de My Exams comporte **exactement quatre propositions de réponse (A, B, C, D)**. Les formats QROC et QZONE ne comportent naturellement pas de choix.

### Pas d'items attrape-tout
Les QRU, QRM et QRP ne doivent pas utiliser d'items artificiels dépendant de la position des autres choix, tels que :
- *« Toutes les réponses précédentes sont exactes »* ;
- *« Aucune des réponses précédentes »* ;
- *« A, B et C sont exactes »* ;
- *« Toutes les propositions sont fausses »*.

Chaque proposition doit pouvoir être évaluée de façon rigoureuse et autonome.

### Titres épurés sans préfixe de niveau
Les titres de quiz ne doivent pas inclure le nom du niveau (`Découverte`, `Entraînement`, `Maîtrise`, `Synthèse`). Cette information est portée de manière dédiée par la propriété `stage`.
- ❌ `Entraînement - La glycolyse`
- ✅ `La glycolyse`

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

---

## 5. Procédure de validation d'un nouveau ZIP d'auteur (Codex / Gemini)

Lorsqu'un nouveau ZIP de chapitre révisé est fourni par ChatGPT :

1. Extraire l'archive et placer les fichiers sous `prisma/seeds/` (et les éventuels assets graphiques sous `public/images/training/`).
2. Vérifier les imports :
   ```typescript
   import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-authoring';
   ```
3. Exécuter la validation des types et du build :
   ```bash
   npm run check
   ```
4. Exécuter les tests unitaires :
   ```bash
   npm run test:unit
   ```
5. Tester le seeding du chapitre :
   ```bash
   npm run db:seed:training
   ```
6. Vérifier manuellement le rendu et le comportement des nouveaux formats dans le Player d'entraînement.

---

## 6. Conventions TeX et typographie scientifique

Cette section constitue la **référence canonique** des règles de composition TeX et de typographie scientifique pour la rédaction des seeds Santé sur My Exams.

### 6.1. Notation atomistique
Les symboles génériques et les grandeurs atomistiques définies par le cours se composent obligatoirement en **lettres droites** (`\mathrm{...}`) :
- Symboles atomistiques : `\mathrm{A}` (nombre de masse), `\mathrm{Z}` (numéro atomique), `\mathrm{N}` (nombre de neutrons), `\mathrm{X}` (symbole d'élément).
- Notation canonique d'un nucléide générique : `^{\mathrm{A}}_{\mathrm{Z}}\mathrm{X}`
- Formules fondamentales : `\mathrm{A} = \mathrm{Z} + \mathrm{N}` et `\mathrm{N} = \mathrm{A} - \mathrm{Z}`.

Pour un nucléide réel, le symbole chimique et l'isotope s'écrivent également en caractères droits :
- `^{131}_{53}\mathrm{I}`
- `^{123}_{53}\mathrm{I}`
- `^{10}\mathrm{B}`
- `^{11}\mathrm{B}`

> ❌ **Incorrect** : `$A = Z + N$`, `$N = A - Z$`, `$Z=53$`, `^{131}_{53}I`  
> ✅ **Correct** : `$\mathrm{A} = \mathrm{Z} + \mathrm{N}$`, `$\mathrm{N} = \mathrm{A} - \mathrm{Z}$`, `$\mathrm{Z} = 53$`, `^{131}_{53}\mathrm{I}`

### 6.2. Couches électroniques
Les noms des couches électroniques principales s'écrivent en majuscules droites via `\mathrm{...}` :
- `\mathrm{K}`, `\mathrm{L}`, `\mathrm{M}`, `\mathrm{N}`.

> ❌ **Incorrect** : `la couche K`  
> ✅ **Correct** : `la couche $\mathrm{K}$`

### 6.3. Sous-couches et configurations électroniques
Les lettres de sous-couche ($s, p, d, f$) s'écrivent en lettres droites via `\mathrm{...}` dans les expressions TeX :
- `1\mathrm{s}^2`, `2\mathrm{p}^6`, `3\mathrm{d}^5`, `4\mathrm{f}`
- `1\mathrm{s}^2\,2\mathrm{s}^2\,2\mathrm{p}^6`

> ❌ **Incorrect** : `$1s^2 2s^2 2p^6$`  
> ✅ **Correct** : `$1\mathrm{s}^2\,2\mathrm{s}^2\,2\mathrm{p}^6$`

### 6.4. Nombres quantiques
Les nombres quantiques respectent strictement les symboles canoniques du dépôt :
- Nombre quantique principal : `\mathrm{n}`
- Nombre quantique secondaire (azimutal) : `\ell` (utiliser impérativement `\ell`)
- Nombre quantique magnétique : `\mathrm{m}` ou `\mathrm{m}_{\ell}`
- Nombre quantique de spin : `\mathrm{s}` ou `\mathrm{m}_{\mathrm{s}}`
- Quadruplet quantique : `(\mathrm{n}, \ell, \mathrm{m}, \mathrm{s})` ou `(\mathrm{n}, \ell, \mathrm{m}_{\ell}, \mathrm{m}_{\mathrm{s}})`

> ❌ **Incorrect** : `$n=2$, $l=1$, $m=0$`  
> ✅ **Correct** : `$\mathrm{n} = 2$, $\ell = 1$, $\mathrm{m} = 0$`

### 6.5. Unités, espaces et symboles
- Les unités de mesure s'écrivent en caractères droits (`\mathrm{...}`) séparées de la valeur numérique par une espace fine TeX (`\,`) : `10^{-10}\,\mathrm{m}`, `10\,\mathrm{nm}`, `1\,\mathrm{u}`, `1\,\mathrm{Da}`.
- Symbole de l'Ångström : `$1\,\text{Å}$` (ou `$1\,\mathrm{\mathring{A}}$`), égal à `$10^{-10}\,\mathrm{m}$`.
- Représentation des décimaux en français : dans les expressions TeX affichées à l'étudiant, la virgule décimale est encadrée par des accolades `{,}` afin de ne pas être interprétée comme un séparateur mathématique TeX (qui ajouterait une espace indésirable) :
  - `$0{,}20 \times 10 + 0{,}80 \times 11 = 10{,}8\,\mathrm{u}$`
  - *(Note : dans la valeur informatique `answer.value` des QROC numériques, utiliser la notation JavaScript standard `10.8`).*

### 6.6. Interdiction des remplacements TeX mécaniques
Il ne faut **jamais** appliquer un remplacement global aveugle de toutes les lettres par `\mathrm{...}`.
- Les véritables variables mathématiques, variables d'équations, constantes physiques ou coordonnées doivent conserver l'italique mathématique standard (`x`, `y`, `t`, `pKa`, `\chi`, etc.).
- La règle `\mathrm{...}` est strictement **sémantique** et réservée aux grandeurs atomistiques ($\mathrm{A}, \mathrm{Z}, \mathrm{N}, \mathrm{X}$), couches, sous-couches, nombres quantiques ($\mathrm{n}, \mathrm{m}, \mathrm{s}$) et unités.

