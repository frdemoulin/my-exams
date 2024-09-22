# Modèle conceptuel de données

## Modèle ExaminationCenter (`examination_centers`) : centres d'examens

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|_id|ObjectID|PRIMARY KEY, NOT NULL|L'identifiant|
|description|VARCHAR(255)|NOT NULL|La description du centre d'examen|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de persistence des données|
|updated_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de la dernière mise à jour des données|

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
