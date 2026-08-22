# My Exams — Terminologie V2 des entraînements Santé

Ce document définit la terminologie produit officielle pour l'interface, la conception et la politique de chronométrage des entraînements Santé sur My Exams.

---

## 1. Glossaire Produit

### Quiz
Un **quiz** est une séance d'entraînement composée d'un ensemble de questions.
- **Rôle** : C'est le CONTENANT d'une séance d'entraînement pédagogique.
- **Chronométrage** : **Non chronométré**. Quel que soit son niveau ou stage (`Découvrir`, `S'entraîner`, `Maîtriser`, `Synthèse`), un quiz est dispensé de toute contrainte temporelle.
- **Terminologie UI** : Utiliser le mot `quiz` (ex: « 2 quiz », colonne « QUIZ », « Des quiz regroupés par section »).
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
- **Chronométrage** : Premier niveau d'évaluation pouvant comporter une durée de passation et un chronomètre.
- **Caractéristiques cibles** : Évaluation transversale (multi-sections/chapitres), barème universitaire, guidage réduit pendant la tentative.
- **Règle** : Notion conceptuelle documentée ; ne pas renommer les quiz actuels en colles, ne pas appeler une colle « quiz chronométré » et ne pas créer de modèle/route technique sans cadrage spécifique.

### Examen blanc
Un **examen blanc** est une simulation fidèle d'une épreuve universitaire réelle (durée, barème, périmètre UE/EC, répartition des formats).
- **Chronométrage** : Chronométré lorsque l'épreuve réelle simulée l'est.

---

## 2. Règle de conception pédagogique

> **J'apprends et je m'entraîne avec les quiz (sans chrono)**  
> → **Je me teste avec les colles (chrono possible)**  
> → **Je me mets en situation avec les examens blancs (chrono réel).**

---

## 3. Politique de chronométrage des entraînements Santé

1. **Quiz d'entraînement (`Découvrir`, `S'entraîner`, `Maîtriser`, `Synthèse`)** :
   - Les quiz Santé ne sont **jamais chronométrés**.
   - Cela vaut quel que soit leur niveau de difficulté ou leur `stage`.
   - Le niveau d'un quiz traduit la difficulté, la transversalité et le degré d'autonomie attendu, mais **ne traduit jamais une pression temporelle**.
   - Ne pas ajouter de compte à rebours, durée maximale, arrêt automatique ou pénalité liée au temps.
2. **Indépendance vis-à-vis du `stage`** :
   - La contrainte temporelle dépend exclusivement du **TYPE DE SÉANCE** (`Quiz`, `Colle`, `Examen blanc`) et **JAMAIS du stage du quiz**.
   - `Découvrir` $\rightarrow$ sans chrono.
   - `S'entraîner` $\rightarrow$ sans chrono.
   - `Maîtriser` $\rightarrow$ sans chrono.
   - `Synthèse` $\rightarrow$ sans chrono.
3. **Colles** :
   - Premier type d'entraînement pouvant comporter une durée de passation et un chronomètre.
4. **Examens blancs** :
   - Chronométrés selon les conditions réelles de l'épreuve universitaire simulée.

---

## 4. Directives d'implémentation et de maintenance

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
   - Pendant la passation, la navigation reste épurée et orientée vers la résolution. Pendant la correction, des filtres rapides (`Toutes`, `À revoir`, `Correctes`) et des raccourcis d'erreur (`À revoir précédente / suivante`) permettent de revenir rapidement sur les difficultés.
   - Des chevrons de défilement horizontal `‹` et `›` apparaissent automatiquement aux extrémités de la barre lorsque des questions sont hors champ (avec masquage automatique sur desktop si tout est visible et complément tactile sur mobile).
4. **Restitution des résultats de quiz côté étudiant** :
   - Les pages de résultats des quiz d'entraînement Santé n'affichent pas d'agrégat par type/format de question (`UnessFormatStatsView`). Sur des quiz courts, cet indicateur est peu robuste et peu actionnable pour l'étudiant.
   - La restitution étudiante privilégie le résultat global, la synthèse par notion (*Maîtrise par notion*) et la correction détaillée question par question.
   - Les badges de format (QRU, QRM, QRP, QRPL, QROC, QZONE) restent visibles au niveau de chaque question corrigée.
   - Dans un quiz court, le type de question est une information de format et non un axe principal de diagnostic pédagogique.
   - Les fonctions et types d'agrégation sous-jacents restent conservés dans le code pour d'éventuels besoins d'analytics ou de pilotage.
5. **Consignes aux IA** :
   - Toute intervention de l'IA (Gemini, Codex, etc.) sur les entraînements Santé doit respecter ce cadrage terminologique, cette politique de chronométrage et ces règles de restitution sans déviation.
