# Instructions Codex — Module Entraînement v1 (Sciences physiques spé terminale)

## Contexte

Ce document définit le cadrage strict pour le développement de la section Entraînement v1.

Ce module doit être développé sans impacter la plateforme Examens existante et en cohérence avec :

- docs/product/PRD.md
- docs/product/backlog-v1.md
- docs/codex/INSTRUCTIONS.md

---

## Objectif produit

Créer un premier module d’entraînement permettant à un élève de :

Réviser un chapitre de sciences physiques (spé terminale) via des QCM courts et ciblés.

Ce module n’est pas une nouvelle plateforme autonome.
Il doit rester cohérent avec la logique Examens existante.

---

## Convention de saisie des seeds QCM santé

Pour les seeds de QCM santé, respecter la convention suivante :

- utiliser les backticks pour les libellés longs : `question`, `explanation`, `correction`, `statement`
- saisir les apostrophes avec le caractère clavier standard `'`
- ne pas utiliser `\'` sauf contrainte ponctuelle dans une chaîne entourée de quotes simples
- ne pas imposer la saisie manuelle de l’apostrophe typographique `’`
- si l’interface doit afficher une typographie plus soignée, prévoir éventuellement une normalisation à l’affichage ou à l’import
- pour le texte affiché à l’utilisateur, utiliser le tiret demi-cadratin `–`
- pour les identifiants techniques, slugs, routes et noms de fichiers, utiliser le tiret simple `-`
- pour les cases quantiques en chimie / atomistique, ne jamais stocker du HTML, du JSX ni des pseudo-cases en texte brut dans les seeds ; utiliser la structure de données dédiée du projet (type `quantum-boxes`) afin que le rendu passe par le composant React prévu
- rattacher chaque question à au moins un thème pédagogique précis décrivant la notion évaluée ; ce thème ne doit pas être un simple niveau de difficulté et doit permettre de calculer localement les réussites et les échecs par notion sans solliciter un LLM
- dans les notations de couches électroniques affichées à l’utilisateur, écrire les noms de couches en lettres droites via `\mathrm{...}` : `\mathrm{K}`, `\mathrm{L}`, `\mathrm{M}`, `\mathrm{N}`
- dans les configurations électroniques et les notations de sous-couches affichées à l’utilisateur, écrire les lettres de sous-couche en lettres droites via `\mathrm{...}` : `1\mathrm{s}^2`, `2\mathrm{p}^6`, `3\mathrm{d}^5`, `4\mathrm{f}`
- dans les notations de nombres quantiques affichées à l’utilisateur, écrire le nombre quantique secondaire avec la commande `\ell`, et les autres en lettres droites : `\mathrm{n}`, `\ell`, `\mathrm{m}`, `\mathrm{s}`, `\mathrm{m}_{\ell}`, `\mathrm{m}_{\mathrm{s}}`

---

## Périmètre v1

### Entrée utilisateur

/entrainement/sciences-physiques  
→ liste des chapitres  
→ page chapitre  
→ QCM  

### Structure fonctionnelle

Matière  
→ Chapitre  
→ QCM  

### Contenu v1

- 1 matière : Sciences physiques (spé terminale)
- 3 à 5 chapitres maximum
- 5 à 10 QCM par chapitre

Niveaux de difficulté :

- easy : fondamentaux
- medium : application
- hard : niveau examen

---

## Modélisation minimale

Subject :
- id
- slug (ex : sciences-physiques)
- title

Chapter :
- id
- subjectId
- title (ex : Énergie)
- slug
- level (terminale)
- order

QcmQuestion :
- id
- chapterId
- difficulty (easy | medium | hard)
- question
- choices (tableau JSON)
- correctAnswer (index)
- explanation

---

## UX attendue

### Page matière

- Titre : Sciences physiques
- Liste des chapitres

### Page chapitre

- Titre du chapitre

Bloc 1 : QCM
- niveau facile
- niveau moyen
- niveau difficile

Bloc 2 : Annales
- Voir les sujets d’examen liés
- lien vers annales

---

## Session QCM

- affichage question par question
- sélection de réponse
- affichage correction :
  - soit immédiat
  - soit en fin de session

---

## Intégration avec les annales

Même en v1 :

- lien depuis chapitre → annales
- structure prête pour :
  - annale → chapitre (plus tard)

---

## Contraintes techniques

- ne pas casser les routes existantes
- ne pas refactorer la plateforme Examens
- ne pas introduire de dépendances lourdes
- rester compatible avec Prisma + MongoDB existants

---

## Ce qui est interdit

- QCM adaptatifs
- scoring complexe
- progression utilisateur avancée
- gamification
- dashboard avancé
- création massive de contenu
- refonte UX globale

---

## Règle d’or

Le module doit être simple, utile, et directement exploitable après un sujet d’examen.

---

## Définition de done (v1)

- une matière accessible
- au moins 3 chapitres fonctionnels
- au moins 20 QCM au total
- navigation complète : matière → chapitre → QCM
- aucune régression sur Examens

---

## Attendu de Codex

- proposer une implémentation simple et robuste
- respecter strictement le périmètre
- ne pas anticiper les versions futures
- signaler toute dérive de scope

---

Statut : cadrage validé pour implémentation immédiate
