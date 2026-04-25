## Cadrage technique – Rendu scientifique (KaTeX, chimie, molécules)
Projet : my-exams (Next.js / Tailwind / KaTeX)

---

### 1. Objectif

Mettre en place un système de rendu scientifique :

- propre visuellement
- homogène sur toute l’application
- performant (SSR / pas de flash)
- extensible (niveau lycée → médecine / PASS / pharma)

Le système doit couvrir :

- mathématiques
- physique
- chimie (formules, équations, molécules)

---

### 2. Doctrine générale

Séparer clairement les responsabilités :

- KaTeX → notation scientifique (maths + chimie textuelle)
- mhchem → chimie (formules + réactions)
- SVG / moteur dédié → molécules (structures visuelles)

Principe clé :

"On écrit la science avec KaTeX, on dessine les molécules avec un moteur graphique."

---

### 3. Typologie des contenus scientifiques

#### 3.1 Texte scientifique standard

Contenu : phrases, unités, variables simples  
Rendu : texte classique + KaTeX inline si nécessaire

Exemples :
- température T
- énergie E
- vitesse v

---

#### 3.2 Formules mathématiques

Utilisation KaTeX classique

Inline :
- E = mc^2

Bloc :
- équations développées
- systèmes
- expressions longues

---

#### 3.3 Formules chimiques

Utilisation obligatoire de mhchem via KaTeX

Syntaxe :
- \ce{H2O}
- \ce{CO2}
- \ce{NH4+}
- \ce{SO4^2-}

Règles :

- ne jamais écrire H₂O en texte simple
- toujours passer par \ce{}
- tous les symboles d'éléments chimiques doivent être notés droit (romain), jamais en italique
- gérer systématiquement :
  - indices
  - charges
  - états (optionnel : (aq), (s), etc.)

---

#### 3.4 Équations bilan (réactions chimiques)

Utilisation mhchem uniquement

Exemples :

- \ce{2H2 + O2 -> 2H2O}
- \ce{CH4 + 2O2 -> CO2 + 2H2O}
- \ce{Ag+ + Cl- -> AgCl}

Bonnes pratiques :

- toujours équilibrer les équations
- utiliser -> (ou <=> si équilibre)
- tous les symboles d'éléments chimiques restent droits (romains), y compris dans les équations bilan
- inclure états si pertinent :
  - \ce{H2O(l)}
  - \ce{NaCl(aq)}

Règles UX :

- équation courte → inline
- équation longue → bloc centré

---

#### 3.5 Molécules (représentation structurale)

NE PAS utiliser KaTeX

Types concernés :

- formules développées
- formules semi-développées
- cycles (benzène, etc.)
- chaînes carbonées
- structures biochimiques

Solutions recommandées :

V1 (MVP) :
- SVG statique

V2 :
- SMILES + rendu dynamique

V3 :
- moteur avancé (ex : Kekule.js)

---

### 4. Modèle de données recommandé

Prévoir un système flexible dès maintenant

Exemple logique :

- type: text | katex | mhchem | molecule-svg | molecule-smiles
- content: string
- renderMode: inline | block

Optionnel :

- caption (pour molécules)
- metadata scientifique

Objectif :
éviter un stockage "tout en texte brut"

---

### 5. Rendu UI – principes

#### 5.1 Conteneur unique

Tous les contenus scientifiques doivent être dans :

scientific-content

---

#### 5.2 Hiérarchie visuelle

- texte : base 16px
- formule inline : 1em
- formule bloc : ~1.08em
- légende : 14px

---

#### 5.3 Espacement

- formule bloc : marge verticale standard
- molécule : bloc centré
- pas de surcharge inline

---

#### 5.4 Inline vs bloc

Inline :
- expressions simples
- petites formules
- unités

Bloc :
- équations longues
- réactions chimiques
- démonstrations

---

### 6. Règles KaTeX

- utiliser renderToString côté serveur (Next.js)
- charger katex.min.css globalement
- ne pas modifier profondément le CSS interne KaTeX
- ajuster uniquement via conteneur parent

---

### 7. Règles chimie

#### 7.1 Formules chimiques

Toujours :

- \ce{}
- pas de HTML manuel
- pas de texte brut
- tous les symboles d'éléments chimiques sont notés droit (romain), jamais en italique, dans et hors des équations bilan

---

#### 7.2 Charges

Exemples :

- \ce{Na+}
- \ce{SO4^2-}

---

#### 7.3 États physiques (si utile)

- \ce{H2O(l)}
- \ce{CO2(g)}
- \ce{NaCl(aq)}

---

#### 7.4 Équilibrage

Toujours fournir des équations équilibrées dans les QCM

---

### 8. Règles molécules

#### 8.1 SVG (recommandé MVP)

- responsive
- max-width contrôlé
- centré
- fond transparent

---

#### 8.2 SMILES (V2)

- stocker en base
- générer le rendu côté front
- permet évolutions futures

---

#### 8.3 Interdictions

- pas de PNG flou
- pas de screenshot
- pas de dessin bricolé

---

### 9. UX pédagogique

- ne pas mélanger texte + grosse formule inline
- aérer les équations
- privilégier lisibilité à compacité
- cohérence entre questions

---

### 10. Performance

- KaTeX SSR recommandé
- éviter rendu client lourd
- SVG très performant
- éviter moteurs lourds en MVP

---

### 11. Stratégie d’évolution

MVP :
- KaTeX + mhchem
- SVG molécules

V2 :
- ajout SMILES
- composant Molecule

V3 :
- moteur chimie avancé
- interactions (zoom, highlight)

---

### 12. Décision structurante

Ne PAS installer LaTeX sur le serveur pour le rendu web

Utiliser :

- KaTeX → rendu rapide
- SVG / moteur JS → molécules
- LaTeX → uniquement pour export PDF si besoin

---

### 13. Résumé

- KaTeX = moteur principal scientifique
- mhchem = chimie textuelle
- SVG / SMILES = molécules
- design system via scientific-content
- architecture pensée pour évoluer vers médecine

---

### 14. Principe final

Une formule est du texte structuré.
Une molécule est un objet graphique.