# My-Exams — Cadrage éditorial : renseignement des Thèmes (Sciences physiques)

## Finalité des champs
Un Theme comporte 5 champs textuels :

### 1) `title` (obligatoire)
- **Nom canonique** du thème.
- Utilisé par défaut en UI (filtres, pages, listings).
- Doit être **stable**, **neutre**, **notionnel**.

✅ Exemples :
- "Mouvements circulaires et orbitaux"
- "Mouvements orbitaux et lois de Kepler"
- "Diffraction"
- "Titrage acido-basique"

❌ À éviter :
- "Comprendre la diffraction" (trop pédagogique / injonctif)
- "Exercice sur la diffraction" (trop contextuel)
- "Diffraction et interférences - cas 2" (trop spécifique)

---

### 2) `shortTitle` (optionnel)
- Version courte pour **mobile** (chips, tags serrés).
- Renseigné **uniquement** si `title` casse l’UI (trop long).
- Doit rester compréhensible, abréviation maîtrisée.

Règles :
- si absent → l’UI utilise `title`
- doit être plus court que `title`
- privilégier l’abréviation lexicale, éviter les sigles obscurs

✅ Exemples :
- title: "Mouvements orbitaux et lois de Kepler"
  shortTitle: "Orbite & Kepler"
- title: "Constitution et transformations de la matière"
  shortTitle: "Constitution & transformations"

---

### 3) `shortDescription` (obligatoire)
- 1 phrase courte (idéalement 80–140 caractères).
- Orientée **élève** : “à quoi sert ce thème ?”
- Style : simple, direct, sans jargon inutile.

✅ Exemple :
- "Analyser le mouvement d’un objet sur une trajectoire circulaire ou orbitale."

❌ À éviter :
- un titre bis ("Mouvements circulaires et orbitaux")
- une liste trop longue de mots-clés
- des détails de méthode

---

### 4) `longDescription` (obligatoire)
- 2 à 5 lignes max.
- Reformulation pédagogique plus complète, peut servir de fiche notion.
- Contenu attendu :
  - périmètre du thème,
  - concepts mobilisés,
  - types de situations fréquentes.

✅ Exemple (Kepler) :
"Ce thème permet de caractériser les mouvements orbitaux à partir des lois de Kepler, en étudiant la forme des orbites, la variation de la vitesse et la relation entre période et distance à l’astre central."

---

### 5) `description` (optionnel, guide référenceur)
- **Non affiché à l’élève** (réservé indexation / admin).
- Texte prescriptif qui commence idéalement par : **"À utiliser lorsque..."**
- Sert à éviter les confusions entre thèmes proches, et à guider un tagging IA.

Contenu recommandé :
- Quand taguer (signaux forts)
- Quand éviter (anti-exemples)
- Co-tagging recommandé (thème A + thème B)

✅ Exemple (Mouvements circulaires et orbitaux) :
"À utiliser lorsque l’exercice porte sur l’analyse locale du mouvement : vitesse orbitale, accélération centripète, lien entre force et courbure de la trajectoire. (...) Ne pas utiliser seul pour des exercices centrés sur les lois de Kepler ou la forme globale de l’orbite."

---

## Règles de granularité (anti “sur-découpage”)
- Un thème = une **notion de programme** identifiable.
- Éviter les micro-thèmes du type :
  - "accélération positive en x"
  - "différence de marche signe +"
- Les outils (ex : repère de Frenet) sont :
  - soit dans un thème “support” (ex : "Vecteurs vitesse et accélération"),
  - soit mentionnés dans `description` pour guider l’indexation.

---

## Règles de nommage (title)
- Nom commun / groupe nominal
- Pas de ponctuation inutile
- Pas de numérotation
- Pas de formulation injonctive
- Première lettre capitale, reste en minuscules (hors acronymes)

---

## Règles de co-tagging (important)
- Un exercice peut avoir **plusieurs thèmes** (souvent 2 à 4).
- Le but est d’améliorer :
  - les filtres,
  - les recommandations,
  - la recherche par intention.

Exemples :
- Exo "satellite en orbite circulaire (Newton)" :
  - "Interaction gravitationnelle"
  - "Mouvements circulaires et orbitaux"
- Exo "orbite elliptique + lois de Kepler" :
  - "Mouvements orbitaux et lois de Kepler"
  - (optionnel) "Interaction gravitationnelle" si gravitation utilisée
- Exo "diffraction + interférences" :
  - "Diffraction"
  - "Interférences"
  - "Différence de marche" (si explicitement traitée)

---

## Checklist qualité (pour chaque thème)
- [ ] `title` est un nom de notion (pas une phrase)
- [ ] `shortTitle` absent sauf si vraiment nécessaire
- [ ] `shortDescription` est une phrase courte orientée élève
- [ ] `longDescription` explicite le périmètre (2–5 lignes)
- [ ] `description` (si présent) commence par "À utiliser lorsque..." et clarifie les confusions
- [ ] Pas de redondance totale entre `shortDescription` et `longDescription`
- [ ] Le thème est taggable de façon stable dans des annales

---

## Exemples “référence” (Mécanique)
### Thème 18
- title: "Mouvements circulaires et orbitaux"
- shortTitle: (optionnel) "Mouv. circ. & orbitaux"
- shortDescription: "Analyser le mouvement d’un objet sur une trajectoire circulaire ou orbitale."
- longDescription: "Étudier le mouvement d’un objet suivant une trajectoire circulaire ou assimilée, en décrivant sa vitesse, son accélération et les forces qui s’exercent sur lui, dans le cadre des lois de Newton."
- description: "À utiliser lorsque l’exercice porte sur l’analyse locale du mouvement : vitesse orbitale, accélération centripète, lien entre force et courbure de la trajectoire. (...)"

### Thème 19
- title: "Mouvements orbitaux et lois de Kepler"
- shortTitle: "Orbite & Kepler"
- shortDescription: "Décrire les mouvements des planètes et satellites à l’aide des lois de Kepler."
- longDescription: "Ce thème permet de caractériser les mouvements orbitaux à partir des lois de Kepler, en étudiant la forme des orbites, la variation de la vitesse et la relation entre période et distance à l’astre central."
- description: "À utiliser lorsque l’exercice mobilise explicitement une ou plusieurs lois de Kepler (...) Peut être combiné avec le thème “Mouvements circulaires et orbitaux” si l’exercice utilise aussi Newton."
