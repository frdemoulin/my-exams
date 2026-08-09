# Spécification Technique - Moteur de Questions Canoniques et Formats UNESS

Ce document décrit l'architecture, le modèle de données canonique et les règles d'évaluation du moteur de questions universel de My Exams.

## Principe d'Architecture

Le moteur de questions est entièrement découplé du contexte d'utilisation (`Practice` vs `Exam`) et des composants d'affichage UI.

```text
Question (donnée canonique)
  ├── QuestionView (rendu React & interaction UI)
  ├── StudentAnswer (payload de réponse saisie)
  └── evaluateQuestion() (évaluation déterministe backend/engine)
```

- **Le type de question (`mcq`, `short-answer`, `hotspot`)** régit le composant d'interaction, la structure de la réponse étudiant et la logique d'évaluation.
- **Le contexte d'usage (quiz d'entraînement, examen blanc, tutoriel)** régit l'affichage des consignes, l'instant de correction (immédiat vs différé), l'accès aux indices et la persistance.

---

## Formats UNESS Référencés

| Code UNESS | Libellé | Type Canonique Interne | Remarques |
|---|---|---|---|
| **QRU** | Question à réponse unique | `mcq` (`selectionMode: "single"`) | 1 seule réponse exacte et sélection exclusive. |
| **QRM** | Question à réponses multiples | `mcq` (`selectionMode: "multiple"`) | $N$ réponses exactes possibles. |
| **QRP** | Question à nombre de réponses précisé | `mcq` (`requiredSelectionCount: N`) | Exactement $N$ propositions doivent être cochées. |
| **QRPL** | Question à nombre précisé longue | `mcq` (`requiredSelectionCount: N`) | Variante ergolissée pour listes longues. |
| **QROC** | Question ouverte à rédaction courte | `short-answer` (`answerType: "text" \| "number"`) | Réponse textuelle (variantes) ou numérique (tolérance, unités). |
| **QZONE** | Question à zone à pointer | `hotspot` | Coordonnées relatives $x,y \in [0, 1]$ et cercle de tolérance. |

---

## Payload de Question (`Question`)

Structure canonique TypeScript définie dans [question.types.ts](file:///Users/frdemoulin/Documents/my-exams/src/core/questions/question.types.ts) :

```ts
type Question =
  | MultipleChoiceQuestion
  | ShortAnswerQuestion
  | HotspotQuestion
  | MatchingQuestion
  | LongAnswerQuestion;
```

### Hotspot (`QZONE`)

```ts
type HotspotQuestion = BaseQuestion & {
  type: "hotspot";
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  expectedZones: Array<{
    id: string;
    label?: string;
    x: number; // Coordonnée normalisée 0..1
    y: number; // Coordonnée normalisée 0..1
    tolerance?: number; // Tolérance relative (ex: 0.05 = 5% de la dimension)
  }>;
  defaultTolerance?: number; // Tolérance par défaut (ex: 0.03)
};
```

---

## Payload de Réponse Étudiant (`StudentAnswer`)

### Hotspot (`QZONE`)

```ts
type HotspotStudentAnswer = {
  questionId: string;
  type: "hotspot";
  points: Array<{
    x: number; // 0..1 relative au conteneur image
    y: number; // 0..1 relative au conteneur image
  }>;
};
```

---

## Évaluation Déterministe (`evaluateQuestion`)

La fonction `evaluateQuestion(question, answer)` est pure et s'exécute de manière identique en entraînement et en examen :

1. **`mcq`** : Contrôle de la limite `requiredSelectionCount` puis égalité exacte de l'ensemble des choix sélectionnés et des choix corrects (scoring tout ou rien `all-or-nothing`).
2. **`short-answer`** :
   - **Textuel** : Normalisation NFKC Unicode, suppression des accents, casse, ponctuation et espaces superflus, comparaison avec la liste d'ancres acceptées.
   - **Numérique** : Parsing du nombre (point ou virgule localisée), vérification de la plage $[valeur - tolérance, valeur + tolérance]$ et validation des unités admises.
3. **`hotspot`** : Calcul de la distance euclidienne relative $d = \sqrt{(x_{s} - x_{e})^2 + (y_{s} - y_{e})^2}$. Valide si $d \le tolérance$.

---

## Principes d'Ergonomie UI / UX

- **Coordonnées Relatives** : Les clics et touches sur l'image sont toujours convertis en fraction de l'image réelle `(x / rect.width, y / rect.height)`.
- **Réponse Brute** : Les réponses textuelles QROC et les points bruts QZONE sont conservés sans altération dans le payload étudiant.
- **Badge & Consignes UNESS** : Les composants d'affichage incluent le badge de format et l'instruction claire décrivant le geste attendu.
