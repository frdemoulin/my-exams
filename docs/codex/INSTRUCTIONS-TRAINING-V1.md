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