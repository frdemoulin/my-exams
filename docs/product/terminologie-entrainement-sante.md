# My Exams — Terminologie V2 des entraînements Santé

Ce document définit la terminologie produit officielle pour l'interface et la conception des entraînements Santé sur My Exams.

---

## 1. Glossaire Produit

### Quiz
Un **quiz** est une séance d'entraînement composée d'un ensemble de questions.
- **Rôle** : C'est le CONTENANT d'une séance d'entraînement.
- **Terminologie UI** : Utiliser le mot `quiz` (ex: « 2 quiz », colonne « QUIZ », « Les quiz sont regroupés par section »).
- **Interdiction** : Ne pas utiliser le mot `QCM` pour désigner une séance d'entraînement.

### Question
Une **question** est l'unité élémentaire à laquelle répond l'étudiant au sein d'un quiz.
- **Terminologie UI** : Utiliser le mot générique `Question` (ex: « Question 1 sur 10 », « Ajouter une question »).
- **Interdiction** : Ne pas utiliser la formulation `Question QCM` dans l'interface Santé V2.

### Formats de question
Les acronymes **QRU**, **QRM**, **QRP**, **QRPL**, **QROC**, **QZONE**, etc. désignent le FORMAT spécifique d'une question.
- Le mot `QCM` désigne la famille générique des questions à choix (QRU, QRM, QRP, QRPL), mais ne doit pas remplacer le mot `quiz` ni le mot `question`.

### Colle
Une **colle** est une évaluation d'entraînement intermédiaire entre les quiz pédagogiques d'un chapitre et les examens blancs complets.
- **Progression** : `Quiz → Colle → Examen blanc`
- **Caractéristiques cibles** : Évaluation transversale (multi-sections/chapitres), éventuellement chronométrée, barème universitaire, guidage réduit pendant la tentative.
- **Règle** : Notion conceptuelle documentée ; ne pas renommer les quiz actuels en colles ni créer de modèle/route technique sans cadrage spécifique.

### Examen blanc
Un **examen blanc** est une simulation fidèle d'une épreuve universitaire réelle (durée, barème, périmètre UE/EC, répartition des formats).

---

## 2. Règle de conception pédagogique

> **J'apprends et je m'entraîne avec les quiz**  
> → **Je me teste avec les colles**  
> → **Je me mets en situation avec les examens blancs.**

---

## 3. Directives d'implémentation et de maintenance

1. **Interface Utilisateur (UI)** :
   - Dans les parcours Santé public et backoffice, remplacer `QCM` par `quiz` (contenant) et `Question QCM` par `Question` (élément).
2. **Code et Identifiants Techniques** :
   - Ne jamais effectuer de renommage mécanique sur le code source (`QuizQuestion`, `TrainingQuiz`, `qcm`, `qcms`, scripts `db:sync-training-qcms-to-prod`).
3. **Player des quiz (V2)** :
   - La navigation des questions appartient au niveau global du quiz et est affichée avant le bloc de la question courante.
   - Les consignes générales d'un quiz (niveau 1) ne décrivent que les règles communes à toutes les questions (règles calculatrice, brouillon) et indiquent le nombre dynamique de questions et la présence de différents formats.
   - L'en-tête de la question associe numéro, badge complet de format et progression (`0/10 répondues`).
   - Chaque format de question porte sa propre consigne spécifique de réponse (niveau 2 : QRU, QRM, QRP, QRPL, QROC, QZONE).
   - La navigation entre les questions affiche le numéro en information principale et l'acronyme du format en information secondaire.
   - Dans la navigation, la couleur représente uniquement l'état de la question (en cours, répondue, non répondue) et jamais son format.
   - L'interface du Player Santé est conçue mobile-first. Sur petit écran, l'empilement des informations et le défilement horizontal local de la navigation avec recentrage automatique de la cellule active sont préférés à la réduction excessive des éléments.
   - Le compteur de progression indique le nombre de questions auxquelles une réponse a été enregistrée (ex. `0/10 répondues`).
4. **Consignes aux IA** :
   - Toute intervention de l'IA (Gemini, Codex, etc.) sur les entraînements Santé doit respecter ce cadrage terminologique sans déviation.
