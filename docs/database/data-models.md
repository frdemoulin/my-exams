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
|topicIDs|Array(ObjectID)|NOT NULL|Les identifiants des thèmes associés|
|createdAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updatedAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

**Contraintes :**
- UNIQUE (longDescription, shortDescription)

**Relations :**
- topics : relation Many-to-Many avec Topic

## Modèle Topic (`Topic`) : thèmes

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|longDescription|VARCHAR(255)|NOT NULL|La description longue du thème|
|shortDescription|VARCHAR(255)|NULLABLE|La description courte du thème|
|subjectIDs|Array(ObjectID)|NOT NULL|Les identifiants des matières associées|
|createdAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updatedAt|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

**Contraintes :**
- UNIQUE (longDescription, shortDescription)

**Relations :**
- subjects : relation Many-to-Many avec Subject

## Modèle User (`User`) : utilisateurs

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|name|VARCHAR(255)|NULLABLE|Le nom de l'utilisateur|
|email|VARCHAR(255)|NULLABLE, UNIQUE|L'email de l'utilisateur|
|emailVerified|TIMESTAMP|NULLABLE|La date de vérification de l'email|
|image|TEXT|NULLABLE|L'URL de l'image de profil|
|roles|ENUM|NOT NULL, DEFAULT 'ADMIN'|Le rôle de l'utilisateur (USER, ADMIN)|
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

// BACKUP CI-DESSOUS

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
