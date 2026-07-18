# Représentations de Lewis

Ce dépôt distingue deux familles de rendu :

- `MathContent` pour le texte riche, le TeX, `mhchem` et les images Markdown.
- les diagrammes structurés pour les contenus pédagogiques qui ne doivent pas être encodés en pseudo-ASCII.

## Format `lewis-atom`

Les atomes de Lewis dans les propositions de QCM utilisent un objet JSON structuré :

```ts
{
  type: "lewis-atom",
  element: "O",
  charge: undefined,
  electrons: {
    top: "pair",
    right: "single",
    bottom: "pair",
    left: "single",
  },
}
```

Valeurs possibles pour chaque côté :

- `none`
- `single`
- `pair`

## Convention de placement

- `top` et `bottom` affichent les doublets non liants sous forme de courts traits horizontaux.
- `left` et `right` affichent les doublets non liants sous forme de courts traits verticaux.
- `single` affiche un électron célibataire.
- `pair` affiche un doublet non liant.
- la charge éventuelle est affichée en exposant.

L’orientation peut varier tant que le nombre d’électrons représentés reste cohérent avec l’intention pédagogique.

## Typographie

Les symboles d'éléments et les charges utilisent `KaTeX_Main, Times New Roman, serif`, en romain droit et avec une graisse normale. Ce choix aligne les diagrammes de Lewis sur les formules rendues par KaTeX et applique la convention IUPAC pour les symboles d'éléments.

## Exemples

### Carbone

```ts
{
  type: "lewis-atom",
  element: "C",
  electrons: {
    top: "single",
    right: "single",
    bottom: "single",
    left: "single",
  },
}
```

### Azote

```ts
{
  type: "lewis-atom",
  element: "N",
  electrons: {
    top: "pair",
    right: "single",
    bottom: "single",
    left: "single",
  },
}
```

### Oxygène

```ts
{
  type: "lewis-atom",
  element: "O",
  electrons: {
    top: "pair",
    right: "single",
    bottom: "pair",
    left: "single",
  },
}
```

### Chlore

```ts
{
  type: "lewis-atom",
  element: "Cl",
  electrons: {
    top: "pair",
    right: "pair",
    bottom: "pair",
    left: "single",
  },
}
```

## Usage actuel

- le rendu étudiant supporte `lewis-atom` dans `choices`.
- le rendu étudiant supporte `lewis-resonance` dans `questionDiagram` pour afficher plusieurs formes mésomères.
- les fixtures et seeds peuvent donc utiliser directement ce format.
- le back-office n’édite pas encore ce format nativement ; une réouverture/édition d’une question structurée peut l’aplatir en texte tant que le formulaire n’a pas été adapté.

## Format `lewis-resonance`

Les formes mésomères linéaires utilisent un diagramme structuré inséré à l’emplacement du marqueur `[[QUESTION_DIAGRAM]]` :

```ts
{
  type: "lewis-resonance",
  forms: [
    {
      atoms: [
        { element: "N", lonePairs: ["left"] },
        { element: "N", charge: 1, lonePairs: [] },
        { element: "O", charge: -1, lonePairs: ["top", "right", "bottom"] },
      ],
      bonds: ["triple", "single"],
    },
  ],
}
```

Chaque forme conserve un ordre linéaire d’atomes. Le tableau `bonds` contient une liaison de moins que le tableau `atoms`, avec les valeurs `single`, `double` ou `triple`. Les doublets non liants sont positionnés explicitement avec `top`, `right`, `bottom` ou `left` et suivent la même convention graphique que `lewis-atom`.

## Format `benzene-kekule`

Les deux formes mésomères du benzène utilisent un preset SVG structuré, inséré à l’emplacement du marqueur `[[QUESTION_DIAGRAM]]` :

```ts
{
  type: "benzene-kekule",
  showAromaticHybrid: false,
}
```

Le rendu génère le même cycle topologique de six carbones pour les deux structures. La première forme porte les ordres de liaison `[2, 1, 2, 1, 2, 1]`, la seconde `[1, 2, 1, 2, 1, 2]`, dans l’ordre `C1-C2` à `C6-C1`. Les doublets de la flèche `↔` indiquent une mésomérie, non un équilibre chimique. Les carbones et les hydrogènes sont implicites, conformément à la convention topologique.
