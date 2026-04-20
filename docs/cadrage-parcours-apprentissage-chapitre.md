# Cadrage produit – Parcours d’apprentissage par QCM
## Projet Next.js – Entrée chapitre → sections → progression élève

---

## 1. Contexte

Les élèves accèdent à une page de chapitre proposant des QCM d’assimilation du cours.

Le chapitre est structuré en sections, chaque section correspondant à une sous-partie logique du cours.

Constat produit :
- les élèves ne savent pas toujours comment travailler un chapitre
- ils ont besoin d’un cadre simple
- ils ont besoin d’un retour immédiat sur leur niveau
- ils peuvent être aidés par une progression visible et guidée

L’objectif n’est donc pas seulement de proposer des QCM, mais de transformer le chapitre en parcours d’apprentissage.

---

## 2. Objectif produit

Construire un parcours guidé permettant à l’élève de :
- commencer facilement
- comprendre dans quel ordre travailler
- visualiser sa progression
- débloquer progressivement les sections suivantes
- être incité à créer un compte pour conserver sa progression

Le produit doit aider l’élève à apprendre le chapitre, mais aussi à apprendre à travailler.

---

## 3. Principe général

Structure cible :

Matière
→ liste des chapitres
→ page chapitre
→ sections du chapitre
→ QCM par section
→ suivi de progression utilisateur

Chaque section :
- introduit une notion ou un bloc de notions
- contient un ou plusieurs QCM
- peut être associée à un statut de progression

---

## 4. Parcours utilisateur attendu

### 4.1 Utilisateur non connecté

Sur la page d’un chapitre :
- la première section est librement accessible
- les sections suivantes sont visibles mais verrouillées
- la progression globale est montrée à titre indicatif
- un message incite à créer un compte pour débloquer le parcours complet

Objectif :
- montrer immédiatement la valeur
- éviter de bloquer trop tôt
- donner envie de poursuivre

---

### 4.2 Première expérience gratuite

L’élève peut faire le premier QCM sans inscription.

À l’issue du QCM :
- son score est affiché
- les bonnes réponses sont visibles
- une explication simple peut être donnée
- un appel à l’action propose la création d’un compte pour débloquer la suite et suivre sa progression

---

### 4.3 Après inscription

Une fois connecté, l’élève dispose de :
- son avancement dans le chapitre
- son historique de réussite par section
- les sections déjà maîtrisées
- les sections disponibles ensuite
- une logique de progression guidée

Le discours produit doit vendre la progression, pas seulement le compte.

À privilégier :
- "Suis ta progression"
- "Débloque les prochaines étapes"
- "Valide chaque section du chapitre"

À éviter :
- "Crée un compte pour accéder au contenu" seul, trop pauvre pédagogiquement

---

## 5. Logique de progression

### 5.1 Statuts de progression par section

Chaque section peut avoir un statut parmi :
- NOT_STARTED
- IN_PROGRESS
- MASTERED

Définition :
- NOT_STARTED : l’élève n’a pas encore travaillé la section
- IN_PROGRESS : l’élève a commencé mais n’a pas atteint le seuil visé
- MASTERED : l’élève a atteint le niveau attendu

---

### 5.2 Seuil de réussite

Exemple de seuils :
- score < 50 % : section à retravailler
- score entre 50 % et 74 % : en cours d’acquisition
- score >= 75 % : section maîtrisée

Le seuil exact doit être configurable.

---

### 5.3 Déblocage des sections

Hypothèse de base :
- la section 1 est accessible à tous
- pour un élève connecté, la section suivante se débloque lorsque la précédente est maîtrisée

Variante recommandée :
- la section suivante peut être visible et parfois consultable
- mais seule une section maîtrisée valide réellement le jalon de progression

Cette variante est préférable car elle limite la frustration.

---

### 5.4 Rejouabilité

Les QCM doivent être rejouables.

Objectifs :
- encourager la répétition
- permettre une amélioration du score
- faire de l’erreur un levier d’apprentissage

---

## 6. Feedback pédagogique

Le feedback est un élément central du produit.

Après chaque tentative, il faut pouvoir afficher :
- le score obtenu
- les réponses correctes
- une explication courte pour chaque erreur importante
- éventuellement une indication sur la notion à retravailler

Le QCM ne doit pas être perçu comme un simple contrôle, mais comme un outil d’apprentissage actif.

---

## 7. Gamification légère

La gamification doit rester sobre et utile.

Éléments pertinents :
- barre de progression du chapitre
- sections cochées quand elles sont maîtrisées
- cadenas pour les sections verrouillées
- statut global du chapitre
- jalons visuels simples

Exemples :
- "2 sections maîtrisées sur 5"
- "Chapitre validé à 68 %"
- "Prochaine étape : section 3"

À éviter :
- badges gadgets
- surcharge visuelle
- mécanique trop ludique qui masquerait l’objectif pédagogique

---

## 8. UX cible sur la page chapitre

La page chapitre doit permettre de comprendre immédiatement :
- ce que contient le chapitre
- dans quel ordre travailler
- ce qui est accessible maintenant
- ce qui est déjà réussi
- ce qu’apporte la connexion

Blocs attendus :
- titre du chapitre
- courte présentation du chapitre
- liste ordonnée des sections
- statut visuel de chaque section
- progression globale
- bouton d’action principal

États visuels possibles d’une section :
- accessible
- en cours
- maîtrisée
- verrouillée

---

## 9. Modèle de données – vue produit

Entités ou objets principaux :

- Subject
- Chapter
- ChapterSection
- Quiz
- QuizQuestion
- QuizAnswerChoice
- User
- UserChapterProgress
- UserSectionProgress
- UserQuizAttempt

---

## 10. Proposition de structure de données

### Subject
- id
- slug
- title

### Chapter
- id
- subjectId
- slug
- title
- description
- order

### ChapterSection
- id
- chapterId
- slug
- title
- description
- order
- isFreePreview

### Quiz
- id
- sectionId
- title
- order

### QuizQuestion
- id
- quizId
- prompt
- explanation
- order

### QuizAnswerChoice
- id
- questionId
- label
- isCorrect
- order

### UserChapterProgress
- id
- userId
- chapterId
- completionRate
- masteredSectionsCount
- lastActivityAt

### UserSectionProgress
- id
- userId
- sectionId
- status
- bestScore
- attemptsCount
- unlockedAt
- masteredAt
- lastAttemptAt

### UserQuizAttempt
- id
- userId
- quizId
- score
- submittedAt

---

## 11. Règles métier

- une section peut être marquée free preview
- une section non free preview nécessite une connexion
- la progression est propre à chaque utilisateur
- le meilleur score par section est conservé
- le nombre de tentatives est historisé
- une section passe à MASTERED si le seuil configuré est atteint
- le déblocage de la section suivante dépend du statut de la section précédente
- la progression globale du chapitre est recalculée à chaque tentative

---

## 12. Architecture fonctionnelle Next.js

Le projet doit être pensé pour une application Next.js moderne.

Points d’attention :
- séparation claire entre pages, composants UI, logique métier et accès aux données
- routes dédiées aux chapitres, sections et soumissions de QCM
- gestion propre de l’authentification
- récupération de la progression utilisateur côté serveur ou via appels API selon le choix d’architecture
- composants réutilisables pour les cartes de section, les barres de progression, les états verrouillés et les résultats de QCM

---

## 13. Arborescence fonctionnelle suggérée

Exemple d’arborescence logique :

app
- matieres
  - [subjectSlug]
    - chapitres
      - [chapterSlug]
        - page
        - loading
        - error

components
- chapter
- quiz
- progress
- ui

features
- chapters
- quizzes
- progress
- auth

lib
- scoring
- progression
- access-control

Cette arborescence est indicative et peut être adaptée au projet existant.

---

## 14. Comportements attendus côté interface

### Page chapitre
Doit afficher :
- les sections dans l’ordre
- leur état
- le pourcentage de progression
- un CTA principal cohérent avec l’état utilisateur

### Carte de section
Doit afficher :
- titre
- courte description
- état
- score éventuel
- action associée

### Page ou module de QCM
Doit permettre :
- de répondre simplement
- de soumettre ses réponses
- de voir le résultat
- de recommencer

---

## 15. États utilisateur à gérer

### Visiteur non connecté
- accès à la section d’essai
- visualisation partielle du parcours
- incitation à s’inscrire

### Utilisateur connecté débutant
- section 1 accessible
- progression vide
- recommandations simples

### Utilisateur en cours de progression
- certaines sections maîtrisées
- prochaine section disponible
- reprise facilitée

### Utilisateur ayant terminé le chapitre
- chapitre entièrement maîtrisé
- message de félicitation
- ouverture possible vers annales ou exercices plus difficiles

---

## 16. Éléments de copywriting produit

Exemples de formulations utiles :

- "Commence par la première section"
- "Valide cette étape pour débloquer la suite"
- "Tu progresses section par section"
- "Suis ton avancement sur tout le chapitre"
- "Recommence ce QCM pour améliorer ton score"
- "Prochaine étape : maîtriser la section suivante"

Le ton doit être simple, rassurant et orienté accompagnement.

---

## 17. KPI à suivre

Indicateurs utiles :
- taux de lancement du premier QCM
- taux d’inscription après le premier QCM
- taux de passage de la section 1 à la section 2
- nombre moyen de tentatives par section
- taux de complétion d’un chapitre
- score moyen par section
- taux d’abandon par étape

---

## 18. Risques à éviter

### Blocage trop dur
Si l’élève est trop vite empêché d’avancer, il peut quitter le parcours.

### Manque de feedback
Sans explication, le QCM ressemble à une sanction plus qu’à une aide.

### Complexité excessive
Le parcours doit être lisible dès la première visite.

### Incitation à l’inscription trop brutale
Il faut montrer d’abord l’intérêt pédagogique.

---

## 19. Recommandation produit

La bonne approche semble être :

- première section gratuite
- création de compte pour suivre la progression complète
- progression par sections
- validation par seuil de réussite
- possibilité de rejouer
- feedback pédagogique systématique
- visualisation claire de l’avancement

Cette approche combine :
- acquisition utilisateur
- engagement
- utilité pédagogique réelle

---

## 20. Résumé opérationnel

Le chapitre ne doit pas être seulement une liste de QCM.

Il doit devenir un parcours d’apprentissage guidé.

Le produit visé est donc :
- structuré
- progressif
- motivant
- simple à comprendre
- utile pédagogiquement

Promesse implicite faite à l’élève :
"Je ne te donne pas seulement des questions, je t’aide à travailler ton chapitre dans le bon ordre."