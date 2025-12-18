# Modèle conceptuel de données

## Modèle Diploma (`Diploma`) : diplômes

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|longDescription|VARCHAR(255)|NOT NULL|La description longue du diplôme|
|shortDescription|VARCHAR(255)|NOT NULL|La description courte du diplôme|
|createdAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updatedAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

**Contraintes :**
- UNIQUE (longDescription, shortDescription)

## Modèle Division (`Division`) : filières

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|longDescription|VARCHAR(255)|NOT NULL|La description longue de la filière|
|shortDescription|VARCHAR(255)|NOT NULL|La description courte de la filière|
|createdAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updatedAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

**Contraintes :**
- UNIQUE (longDescription, shortDescription)

## Modèle ExaminationCenter (`ExaminationCenter`) : centres d'examens

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|description|VARCHAR(255)|NOT NULL|La description du centre d'examen|
|createdAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updatedAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

**Contraintes :**
- UNIQUE (description)

## Modèle Grade (`Grade`) : niveaux scolaires

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|longDescription|VARCHAR(255)|NOT NULL|La description longue du niveau|
|shortDescription|VARCHAR(255)|NOT NULL|La description courte du niveau|
|createdAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updatedAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

**Contraintes :**
- UNIQUE (longDescription, shortDescription)

## Modèle Subject (`Subject`) : matières

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|longDescription|VARCHAR(255)|NOT NULL|La description longue de la matière|
|shortDescription|VARCHAR(255)|NOT NULL|La description courte de la matière|
|createdAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updatedAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

**Contraintes :**
- UNIQUE (longDescription, shortDescription)

**Relations :**
- teachings : relation One-to-Many avec Teaching
- chapters : relation One-to-Many avec Chapter

## Modèle Teaching (`Teaching`) : enseignements

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|longDescription|VARCHAR(255)|NOT NULL|La description longue de l'enseignement (ex: "Spécialité Mathématiques")|
|shortDescription|VARCHAR(255)|NULLABLE|La description courte de l'enseignement (ex: "Spé Maths")|
|gradeId|ObjectID|NOT NULL, FOREIGN KEY|L'identifiant du niveau scolaire|
|subjectId|ObjectID|NOT NULL, FOREIGN KEY|L'identifiant de la matière|
|createdAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updatedAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

**Contraintes :**
- UNIQUE (longDescription, gradeId)

**Relations :**
- grade : relation Many-to-One avec Grade
- subject : relation Many-to-One avec Subject
- examPapers : relation One-to-Many avec ExamPaper

## Modèle Curriculum (`Curriculum`) : programmes scolaires

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|longDescription|VARCHAR(255)|NOT NULL|La description du programme (ex: "Programme 2019", "Réforme Bac 2020")|
|shortDescription|VARCHAR(255)|NULLABLE|Description détaillée du programme|
|startDate|TIMESTAMP|NOT NULL|Date de mise en vigueur du programme|
|endDate|TIMESTAMP|NULLABLE|Date de fin du programme (null si toujours en vigueur)|
|teachingIds|Array(ObjectID)|NOT NULL|Les identifiants des enseignements concernés|
|isActive|BOOLEAN|NOT NULL, DEFAULT TRUE|Programme actuellement en vigueur|
|notes|TEXT|NULLABLE|Notes complémentaires|
|createdAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updatedAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

**Contraintes :**
- UNIQUE (longDescription, startDate)

**Relations :**
- examPapers : relation One-to-Many avec ExamPaper

## Modèle Chapter (`Chapter`) : chapitres

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|longDescription|VARCHAR(255)|NOT NULL|La description longue du chapitre|
|shortDescription|VARCHAR(255)|NOT NULL|La description courte du chapitre|
|order|INT|NULLABLE|L'ordre dans le programme|
|subjectId|ObjectID|NOT NULL, FOREIGN KEY|L'identifiant de la matière|
|createdAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updatedAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

**Contraintes :**
- UNIQUE (longDescription, subjectId)

**Relations :**
- subject : relation Many-to-One avec Subject
- themes : relation One-to-Many avec Theme

## Modèle Theme (`Theme`) : thèmes

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|longDescription|VARCHAR(255)|NOT NULL|La description longue du thème|
|shortDescription|VARCHAR(255)|NULLABLE|La description courte du thème|
|chapterId|ObjectID|NOT NULL, FOREIGN KEY|L'identifiant du chapitre|
|createdAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updatedAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

**Relations :**
- chapter : relation Many-to-One avec Chapter

## Modèle ExamPaper (`ExamPaper`) : sujets d'annales (conteneur)

**Note** : Ce modèle sert de conteneur pour les exercices. L'unité de recherche principale est maintenant l'`Exercise`.

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|label|VARCHAR(255)|NOT NULL|Le libellé du sujet (ex: "Métropole Sujet 1")|
|sessionYear|INT|NOT NULL|L'année de la session (ex: 2024)|
|sessionMonth|VARCHAR(50)|NULLABLE|Le mois de la session (ex: "juin", "septembre")|
|diplomaId|ObjectID|NOT NULL, FOREIGN KEY|L'identifiant du diplôme|
|divisionId|ObjectID|NULLABLE, FOREIGN KEY|L'identifiant de la filière (optionnel pour Brevet)|
|gradeId|ObjectID|NOT NULL, FOREIGN KEY|L'identifiant du niveau scolaire|
|teachingId|ObjectID|NOT NULL, FOREIGN KEY|L'identifiant de l'enseignement|
|curriculumId|ObjectID|NULLABLE, FOREIGN KEY|L'identifiant du programme scolaire (optionnel pour Brevet)|
|examinationCenterIds|Array(ObjectID)|NOT NULL, DEFAULT []|Les identifiants des centres d'examen|
|subjectUrl|VARCHAR(500)|NULLABLE|L'URL du PDF du sujet complet|
|totalDuration|INT|NULLABLE|La durée totale en minutes|
|totalPoints|INT|NULLABLE|Le total de points du sujet|
|chapterIds|Array(ObjectID)|NULLABLE, DEPRECATED|Déprécié : utiliser Exercise.themeIds|
|themeIds|Array(ObjectID)|NULLABLE, DEPRECATED|Déprécié : utiliser Exercise.themeIds|
|correctionUrl|VARCHAR(500)|NULLABLE, DEPRECATED|Déprécié : utiliser Correction ou ExerciseCorrection|
|estimatedDuration|INT|NULLABLE, DEPRECATED|Déprécié : utiliser Exercise.estimatedDuration|
|estimatedDifficulty|INT|NULLABLE, DEPRECATED|Déprécié : utiliser Exercise.estimatedDifficulty|
|summary|TEXT|NULLABLE, DEPRECATED|Déprécié : utiliser Exercise.summary|
|enrichmentStatus|VARCHAR(20)|DEFAULT "pending", DEPRECATED|Déprécié : utiliser Exercise.enrichmentStatus|
|enrichedAt|TIMESTAMP|NULLABLE, DEPRECATED|Déprécié : utiliser Exercise.enrichedAt|
|createdAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updatedAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

**Contraintes :**
- UNIQUE (label, sessionYear, teachingId)

**Relations :**
- diploma : relation Many-to-One avec Diploma
- division : relation Many-to-One avec Division (optionnel)
- grade : relation Many-to-One avec Grade
- teaching : relation Many-to-One avec Teaching
- curriculum : relation Many-to-One avec Curriculum (optionnel)
- exercises : relation One-to-Many avec Exercise
- corrections : relation One-to-Many avec Correction

## Modèle Exercise (`Exercise`) : exercices d'annales ⭐

**Note** : L'exercice est l'unité principale de recherche. Chaque exercice conserve la traçabilité de son sujet parent.

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|examPaperId|ObjectID|NOT NULL, FOREIGN KEY|L'identifiant du sujet parent|
|exerciseNumber|INT|NOT NULL|Le numéro de l'exercice dans le sujet (1, 2, 3...)|
|label|VARCHAR(255)|NULLABLE|Le libellé de l'exercice (ex: "Exercice 3", "Partie A")|
|points|INT|NULLABLE|Les points attribués à cet exercice|
|title|VARCHAR(255)|NULLABLE|Le titre de l'exercice (ex: "Titrage acide-base d'un vinaigre")|
|statement|TEXT|NULLABLE|L'énoncé complet de l'exercice (extrait via OCR)|
|themeIds|Array(ObjectID)|NOT NULL, DEFAULT []|Les identifiants des thèmes couverts dans cet exercice|
|exerciseUrl|VARCHAR(500)|NULLABLE|L'URL du PDF de l'exercice isolé|
|correctionUrl|VARCHAR(500)|NULLABLE|L'URL de la correction isolée|
|estimatedDuration|INT|NULLABLE|La durée estimée en minutes pour cet exercice (enrichissement IA)|
|estimatedDifficulty|INT|NULLABLE|La difficulté estimée 1-5 (enrichissement IA)|
|summary|TEXT|NULLABLE|Le résumé automatique de l'exercice (enrichissement IA)|
|keywords|Array(VARCHAR)|NOT NULL, DEFAULT []|Les mots-clés extraits automatiquement|
|enrichmentStatus|VARCHAR(20)|NOT NULL, DEFAULT "pending"|Le statut d'enrichissement ("pending", "completed", "failed")|
|enrichedAt|TIMESTAMP|NULLABLE|La date d'enrichissement automatique|
|createdAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updatedAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

**Contraintes :**
- UNIQUE (examPaperId, exerciseNumber)

**Relations :**
- examPaper : relation Many-to-One avec ExamPaper (onDelete: Cascade)
- corrections : relation One-to-Many avec ExerciseCorrection

## Modèle ExerciseCorrection (`ExerciseCorrection`) : corrections d'exercices

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|exerciseId|ObjectID|NOT NULL, FOREIGN KEY|L'identifiant de l'exercice|
|source|VARCHAR(255)|NOT NULL|La source de la correction (ex: "APMEP", "YouTube - Prof Dupont")|
|url|VARCHAR(500)|NOT NULL|L'URL de la correction|
|type|VARCHAR(20)|NOT NULL, DEFAULT "pdf"|Le type de correction ("pdf", "video", "html")|
|quality|INT|NULLABLE|La note de qualité 1-5|
|author|VARCHAR(255)|NULLABLE|L'auteur de la correction si connu|
|createdAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updatedAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

**Contraintes :**
- UNIQUE (exerciseId, source, url)

**Relations :**
- exercise : relation Many-to-One avec Exercise (onDelete: Cascade)

## Modèle Correction (`Correction`) : corrections globales de sujets

**Note** : Pour les corrections d'exercices spécifiques, utiliser `ExerciseCorrection`.

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|examPaperId|ObjectID|NOT NULL, FOREIGN KEY|L'identifiant du sujet d'examen|
|source|VARCHAR(255)|NOT NULL|La source de la correction (ex: "APMEP", "LaboLycée", "Académie")|
|url|VARCHAR(500)|NOT NULL|L'URL de la correction|
|type|VARCHAR(20)|NOT NULL, DEFAULT "pdf"|Le type de correction ("pdf", "video", "html")|
|quality|INT|NULLABLE|La note de qualité 1-5|
|author|VARCHAR(255)|NULLABLE|L'auteur de la correction si connu|
|createdAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updatedAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

**Contraintes :**
- UNIQUE (examPaperId, source, url)

**Relations :**
- examPaper : relation Many-to-One avec ExamPaper (onDelete: Cascade)

## Modèle User (`User`) : utilisateurs

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|name|VARCHAR(255)|NULLABLE|Le nom de l'utilisateur|
|email|VARCHAR(255)|NULLABLE, UNIQUE|L'email de l'utilisateur|
|emailVerified|TIMESTAMP|NULLABLE|La date de vérification de l'email|
|image|TEXT|NULLABLE|L'URL de l'image de profil|
|roles|ENUM|NOT NULL, DEFAULT 'USER'|Le rôle de l'utilisateur (USER, ADMIN)|
|createdAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updatedAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

**Relations :**
- accounts : relation One-to-Many avec Account
- sessions : relation One-to-Many avec Session
- Authenticator : relation One-to-Many avec Authenticator

## Modèle Account (`Account`) : comptes OAuth

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|userId|ObjectID|NOT NULL, FOREIGN KEY|L'identifiant de l'utilisateur|
|type|VARCHAR(255)|NOT NULL|Le type de compte|
|provider|VARCHAR(255)|NOT NULL|Le fournisseur OAuth|
|providerAccountId|VARCHAR(255)|NOT NULL|L'identifiant du compte chez le fournisseur|
|refresh_token|TEXT|NULLABLE|Le token de rafraîchissement|
|access_token|TEXT|NULLABLE|Le token d'accès|
|expires_at|INT|NULLABLE|La date d'expiration du token|
|token_type|VARCHAR(255)|NULLABLE|Le type de token|
|scope|VARCHAR(255)|NULLABLE|Les scopes autorisés|
|id_token|TEXT|NULLABLE|Le token d'identité|
|session_state|VARCHAR(255)|NULLABLE|L'état de la session|
|createdAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updatedAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

**Contraintes :**
- UNIQUE (provider, providerAccountId)

**Relations :**
- user : relation Many-to-One avec User (onDelete: Cascade)

## Modèle Session (`Session`) : sessions utilisateur

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|sessionToken|VARCHAR(255)|NOT NULL, UNIQUE|Le token de session|
|userId|ObjectID|NOT NULL, FOREIGN KEY|L'identifiant de l'utilisateur|
|expires|TIMESTAMP|NOT NULL|La date d'expiration de la session|
|createdAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updatedAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

**Relations :**
- user : relation Many-to-One avec User (onDelete: Cascade)

## Modèle VerificationToken (`VerificationToken`) : tokens de vérification

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|identifier|VARCHAR(255)|NOT NULL|L'identifiant (email, téléphone, etc.)|
|token|VARCHAR(255)|NOT NULL|Le token de vérification|
|expires|TIMESTAMP|NOT NULL|La date d'expiration du token|

**Contraintes :**
- UNIQUE (identifier, token)

## Modèle Authenticator (`Authenticator`) : authentificateurs WebAuthn

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|credentialID|VARCHAR(255)|PRIMARY KEY, NOT NULL|L'identifiant des credentials|
|userId|ObjectID|NOT NULL, FOREIGN KEY|L'identifiant de l'utilisateur|
|providerAccountId|VARCHAR(255)|NOT NULL|L'identifiant du compte fournisseur|
|credentialPublicKey|TEXT|NOT NULL|La clé publique des credentials|
|counter|INT|NOT NULL|Le compteur d'utilisation|
|credentialDeviceType|VARCHAR(255)|NOT NULL|Le type d'appareil|
|credentialBackedUp|BOOLEAN|NOT NULL|Indique si les credentials sont sauvegardées|
|transports|VARCHAR(255)|NULLABLE|Les méthodes de transport disponibles|

**Contraintes :**
- UNIQUE (userId, credentialID)

**Relations :**
- user : relation Many-to-One avec User (onDelete: Cascade)

---

## Architecture Exercise-Centric

### Vue d'ensemble

L'application utilise maintenant une architecture **centrée sur les exercices** :

- **ExamPaper** : Conteneur administratif (métadonnées du sujet complet)
- **Exercise** : Unité de recherche principale (exercice individuel avec métadonnées enrichies)
- **ExerciseCorrection** : Corrections spécifiques à un exercice
- **Correction** : Corrections globales d'un sujet complet (optionnel)

### Hiérarchie de recherche

```
Diploma → Division → Grade → Teaching → Subject → Chapter → Theme
                              ↓
                         ExamPaper (conteneur)
                              ↓
                         Exercise (unité de recherche)
                              ↓
                    ExerciseCorrection (corrections)
```

### Exemple de traçabilité

Un élève cherche "titrage acide-base" et trouve :
```
Exercice : "Titrage acide-base d'un vinaigre"
Traçabilité : Métropole juin 2024 - Exercice 3 (6 pts)
Hiérarchie : Bac Général › Physique-Chimie › Terminale › Spé PC
Thèmes : Titrage, Acide-base, Dosage
Métadonnées : ~25 min, Difficulté 3/5
```

Pour plus de détails, voir [`exercise-centric-refactoring.md`](./exercise-centric-refactoring.md).

---

// BACKUP CI-DESSOUS (anciens modèles à supprimer)

### Entité FaqEntry (`faq_entry`) : entrée de la FAQ

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant|
|category|entity|NOT NULL|La catégorie associée|
|question_description|TEXT|NOT NULL|La description de la question|
|answer_description|TEXT|NOT NULL|La description de la réponse|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updated_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

## Contrôle qualité

### Entité QualityControl (`quality_control`) : contrôle qualité

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant|
|user|entity|NOT NULL|l'utilisateur effectuant le contrôle|
|start_date|TIMESTAMP|NOT NULL|La date du contrôle|
|structure|entity|NOT NULL|La structure contrôlée|
|referent|entity|NULLABLE|Le référent contrôlé|
|participant_sheet|entity|NOT NULL|Les fiches participant contrôlées|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updated_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

## Étapes de parcours

### Entité PathStep (`path_step`) : étape de parcours

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant|
|participant_sheet|entity|NOT NULL|La fiche participant associée|
|support_modality|entity|NOT NULL|La modalité d'accompagnement associée|
|structure|entity|NOT NULL|La structure en charge de l'accompagnement|
|path_step_has_user|entity|NOT NULL|Les référents en charge de l'accompagnement|
|start_date|TIMESTAMP|NOT NULL|La date de début d'accompagnement|
|end_date|TIMESTAMP|NULLABLE|La date de fin d'accompagnement|
|indicator_at_output|entity|NULLABLE|Les indicateurs à la sortie associés (si sortie)|
|participant_sheet_has_reorientation|entity|NULLABLE|La réorientation associée (si réorientation)|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updated_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

### Entité SupportModality (`support_modality`) : modalité d'accompagnement

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant|
|description|VARCHAR(255)|NOT NULL|La description de l'accompagnement|
|short_description|VARCHAR(25)|NOT NULL|La description abrégée de l'accompagnement|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updated_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

**Données :**
- Accompagnement des allocataires du RSA de moins de 26 ans - Mission locale
- Accompagnement intensif - RIA
- Accompagnement renforcé - Renforcé
- (Ré)Insertion vers l'emploi - RIVE

### Entité PathStepHasUser (`path_step_has_user`) : référent d'une étape de parcours

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant|
|path_step|entity|NULL|L'étape de parcours associée|
|user|entity|NULL|Le référent associé|
|start_date|TIMESTAMP|NOT NULL|La date de début d'intervention du référent|
|end_date|TIMESTAMP|NULL|La date de fin d'intervention du référent|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updated_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

## Statistiques

### Entité LogParticipantSheetStatisticData (`log_participant_sheet_statistic_data`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant|
|created_participant_sheet_count|INT|NOT NULL, UNSIGNED, DEFAULT 0|Le nombre de fiches participant créées|
|participant_sheet_with_permission_count|INT|NOT NULL, UNSIGNED, DEFAULT 0|Le nombre de fiches participant sans indicateur à l'entrée|
|participant_sheet_without_indicator_at_entry_count|INT|NOT NULL, UNSIGNED, DEFAULT 0|Le nombre de fiches participant sans indicateur à l'entrée|
|participant_sheet_without_evidence_count|INT|NOT NULL, UNSIGNED, DEFAULT 0|Le nombre de fiches participant sans pièce d'éligibilité|
|participant_sheet_incomplete_at_entry_count|INT|NOT NULL, UNSIGNED, DEFAULT 0|Le nombre de fiches participant incomplètes à l'entrée|
|participant_sheet_incomplete_at_output_count|INT|NOT NULL, UNSIGNED, DEFAULT 0|Le nombre de fiches participant incomplètes à la sortie|
|completed_participant_sheet_count|INT|NOT NULL, UNSIGNED, DEFAULT 0|Le nombre de fiches participant totalement complétées|
|user_count|INT|NOT NULL, UNSIGNED, DEFAULT 0|Le nombre de comptes utilisateurs|
|logged_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de log des données|
|user|entity|NULL|L'utilisateur associé|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updated_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|
