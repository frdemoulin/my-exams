# My Exams - Cadrage complementaire : formats UNESS dans les quiz d'entrainement

Document dédié au cadrage complémentaire "Généralisation des formats UNESS aux quiz d'entrainement".

## Source et statut

- Source : cadrage utilisateur complémentaire joint le 2026-08-09.
- Statut : cadrage produit cible.
- Perimetre : usage des formats UNESS dans les quiz de découverte, d'entrainement, de maîtrise, de synthèse, l'entrainement libre et les examens blancs.

Les deux pièces jointes reçues pour ce cadrage complémentaire sont identiques. Ce document en consolide le contenu en une référence maintenable.

## Principe fondamental

Les formats de questions inspirés du référentiel UNESS ne doivent pas être réservés aux examens blancs.

Ils doivent devenir des formats génériques utilisables dans l'ensemble de My Exams :

- quiz de découverte ;
- quiz d'entrainement ;
- quiz de maîtrise ;
- quiz de synthèse ;
- entrainement libre ;
- examens blancs.

Le mode d'utilisation d'une question ne doit pas déterminer son type. Une QROC reste une QROC en chapitre, en synthèse ou en examen blanc. Une QZONE reste une QZONE dans tous les contextes.

## Objectif pédagogique

L'étudiant ne doit pas découvrir les formats UNESS pour la première fois lors d'un examen blanc de fin de semestre.

Les formats doivent être introduits progressivement, quand le contenu s'y prête, pour atteindre deux objectifs :

- améliorer l'apprentissage ;
- développer tôt une familiarité avec les formats et interactions de l'examen numérique.

L'examen blanc doit travailler la combinaison des formats, la transversalité, la durée, la gestion du temps, la navigation et la stratégie de composition. Il ne doit pas être le premier contact avec QRU, QRM, QRP, QROC ou QZONE.

## Principe d'architecture

Ne pas créer deux modèles séparés du type :

```text
ExamQuestion
PracticeQuestion
```

Le modèle cible doit rester :

```text
Question
  -> utilisée dans Practice
  -> utilisée dans Exam
```

Le type de question définit :

- l'interaction ;
- la structure de réponse ;
- les règles de correction.

Le contexte d'usage définit :

- quand la correction apparaît ;
- si un indice est disponible ;
- si la réponse peut être recommencée ;
- si un timer existe ;
- si la navigation est libre ;
- si la copie est remise définitivement.

## Même question, comportements différents

Une même question doit pouvoir être utilisée sans duplication de contenu dans plusieurs contextes.

Exemple :

```text
QROC
"Quel organite est le siège principal de la phosphorylation oxydative ?"
```

En entrainement, l'étudiant répond puis peut voir la réponse attendue, les variantes acceptées, l'explication et éventuellement un rappel de cours.

En examen, l'étudiant répond, la réponse est sauvegardée, aucune correction n'est affichée pendant l'épreuve, puis la correction devient disponible selon la configuration de remise.

## Formats utilisables en entrainement

| Format | Usage en entrainement |
|---|---|
| QRU | Vérifier une distinction simple et apprendre la réponse unique. |
| QRM | Travailler plusieurs affirmations et les confusions classiques. |
| QRP | Obliger a sélectionner exactement N propositions et éviter la sélection excessive. |
| QRPL | Pertinent pour vocabulaire, molécules, structures ou classifications en liste longue. |
| QROC | Favoriser le rappel actif plutôt que la reconnaissance. |
| QZONE | Evaluer localisation, reconnaissance visuelle ou identification sur support. |

Les formats ne doivent pas être utilisés pour diversifier artificiellement un quiz. Le format doit correspondre a la compétence évaluée.

## QROC en entrainement

La QROC doit devenir un format important des quiz d'apprentissage parce qu'elle sollicite le rappel actif.

Usages adaptés :

- donner le nom d'une structure ;
- nommer une molécule ;
- donner une formule ;
- indiquer une valeur ;
- réaliser un calcul ;
- donner un terme précis ;
- identifier une enzyme ;
- restituer une courte définition.

Les premières QROC d'un chapitre doivent rester accessibles. Le format peut être nouveau sans que le contenu soit artificiellement difficile.

## QZONE en entrainement

Les QZONE doivent être disponibles dans les quiz par chapitre quand la matière s'y prête.

Domaines pertinents :

- anatomie ;
- histologie ;
- biologie cellulaire ;
- chimie structurale ;
- biochimie structurale ;
- disciplines utilisant des représentations visuelles.

Une QZONE doit tester une compétence pertinente. Elle ne doit pas servir seulement a ajouter une image.

## Progressivite pédagogique

| Niveau | Objectif | Orientation formats |
|---|---|---|
| Découverte | Comprendre la notion et commencer la mémorisation | Majorité de QRU/QRM simples, quelques QROC directes, QZONE simples si pertinent, QRP ponctuels. |
| Entrainement | Consolider et récupérer activement | Davantage de QRM, QRP, QROC et QZONE selon le contenu. |
| Maîtrise | Réduire le guidage et confronter des notions proches | QROC, QRP, QZONE discriminantes, QRM transversales et questions liées. |
| Synthèse | Mélanger les formats rencontrés dans le chapitre | QRU, QRM, QRP, QROC et QZONE selon la matière. |
| Examen blanc | Simuler les conditions finales | Blueprint, durée, répartition, navigation, absence de correction immédiate et remise. |

Les formats utilisés en synthèse ne devraient normalement plus être nouveaux pour l'étudiant.

## Pas de quotas artificiels

Ne pas définir globalement une règle du type "chaque quiz doit contenir 6 QCM, 2 QROC et 1 QZONE".

Le choix du format doit dépendre :

- de la notion évaluée ;
- de l'objectif pédagogique ;
- du niveau du quiz ;
- des formats réellement pertinents pour la matière.

## Choix du bon format

Lors de la création d'une question, partir de la compétence a évaluer plutôt que de transformer systématiquement la notion en QCM.

| Compétence évaluée | Format souvent pertinent |
|---|---|
| Reconnaître une définition | QRU |
| Evaluer plusieurs affirmations | QRM |
| Choisir exactement N propriétés | QRP |
| Retrouver spontanément un terme | QROC |
| Effectuer un calcul simple | QROC numérique |
| Identifier une structure sur image | QZONE |
| Localiser un élément moléculaire | QZONE |
| Différencier de nombreux termes proches | QRPL éventuellement |

Ce tableau est une orientation, pas une règle absolue.

## Développement du rappel actif

Une notion importante peut être travaillée sous plusieurs formats au cours du chapitre.

Exemple de progression :

```text
QRU   -> reconnaître "mitochondrie"
QROC  -> produire spontanément "mitochondrie"
QZONE -> identifier une mitochondrie sur une image
QRM   -> mobiliser ses propriétés dans un raisonnement transversal
```

Il ne s'agit pas de répéter la même question, mais de travailler plusieurs formes de maîtrise.

## Questions liées multi-formats

Les groupes de questions doivent pouvoir mélanger les formats en entrainement, en synthèse et en examen.

Exemple :

```text
Enoncé commun : structure moléculaire
Q1 - QZONE : cliquez sur le carbone asymétrique.
Q2 - QRM : sélectionnez les affirmations exactes.
Q3 - QROC : donnez le nom de la fonction entourée.
```

## Feedback en entrainement

Le feedback doit dépendre du contexte d'usage, pas du type de question seul.

Pour QRU, QRM et QRP :

- afficher les bonnes et mauvaises propositions selon la configuration du quiz ;
- expliquer les pièges ;
- rappeler le nombre de propositions attendu pour une QRP.

Pour QROC :

- afficher la réponse attendue ;
- afficher les variantes acceptées quand elles existent ;
- conserver la réponse brute saisie ;
- expliquer pourquoi une réponse proche n'a pas été acceptée si le moteur peut le déterminer.

Pour QZONE :

- afficher la zone attendue après correction ;
- expliquer le repère demandé ;
- éviter les tolérances opaques.

## Rejouer, indices et correction

En entrainement, une question peut être rejouée ou accompagnée d'indices selon la configuration pédagogique.

Ces options ne doivent pas appartenir au type de question. Elles relèvent du contexte :

- mode découverte ;
- mode entrainement ;
- mode maîtrise ;
- synthèse ;
- examen blanc.

## Vocabulaire étudiant

L'interface doit utiliser le vocabulaire UNESS lorsque cela aide l'étudiant.

Exemples :

- QRU - Question a réponse unique ;
- QRM - Question a réponses multiples ;
- QRP - Question a nombre de réponses précisé ;
- QROC - Question ouverte a rédaction courte ;
- QZONE - Question a zone a pointer.

La terminologie ne doit pas être surchargée inutilement. Le bon compromis est d'afficher le code et une consigne opérationnelle simple.

## Première apparition dans un quiz

Lorsqu'un format apparaît pour la première fois dans un vrai quiz, l'interface doit expliciter le geste attendu.

Exemples :

- QRU : "Sélectionnez une seule proposition."
- QRM : "Sélectionnez toutes les propositions exactes."
- QRP : "Sélectionnez exactement 2 propositions."
- QROC numérique : "Saisissez une réponse numérique courte, en chiffres."
- QZONE : "Pointez la zone demandée sur le support."

## Administration

L'administration doit permettre au rédacteur de choisir le format précis, pas seulement "QCM".

Attendus :

- afficher QRU, QRM, QRP et QROC comme formats éditables prioritaires ;
- préparer QRPL, QROL, QZONE et QTCS comme formats référencés ;
- afficher une aide de saisie adaptée au format ;
- valider les seeds multi-formats ;
- proposer un aperçu rédacteur cohérent avec le rendu étudiant.

## Génération et seeds

La génération de contenu ne doit pas forcer une distribution artificielle des formats.

Elle doit plutôt choisir le format en fonction :

- de la compétence ;
- de la discipline ;
- du niveau pédagogique ;
- de l'ambiguïté acceptable de la réponse ;
- du support disponible.

Les validations doivent refuser les structures incohérentes : QRP sans nombre attendu, QROC sans réponse admise, QZONE sans zone attendue, groupe lié incomplet.

## Documentation attendue

La documentation développeur doit expliquer :

- le modèle `Question` ;
- la relation entre `format` UNESS et moteur interne ;
- les payloads de réponses ;
- les règles de correction ;
- les limites actuelles ;
- les exemples de seeds.

La documentation pédagogique doit expliquer :

- quand utiliser chaque format ;
- comment introduire les formats progressivement ;
- comment éviter les formats artificiels ;
- comment formuler des QROC acceptables ;
- comment concevoir des QZONE utiles.

## Etat d'avancement lie a ce cadrage

| Sujet | Etat | Commentaire |
|---|---|---|
| Moteur commun utilisable hors examen blanc | Réalisé V1 | Le socle `src/core/questions` est partagé. |
| Quiz d'entrainement QRU/QRM historiques | Réalisé | Compatibilité maintenue. |
| Quiz d'entrainement QRP | Réalisé V1 | Consigne et limite de sélection intégrées au player d'entrainement. |
| Quiz d'entrainement QROC | Réalisé V1 | Normalisation, correction et saisie courte intégrées. |
| Admin création QROC en quiz de chapitre | Réalisé V1 | Formulaire et persistance disponibles. |
| Admin création QRP en quiz de chapitre | Réalisé V1 | Nombre de réponses attendu pris en charge. |
| Vocabulaire UNESS côté étudiant | Réalisé V1 | Instructions par format affichées dans le player. |
| QZONE en quiz d'entrainement | A faire | Modèle et évaluation existent, renderer interactif manquant. |
| QRPL en quiz d'entrainement | A prévoir | Format référencé, non éditable. |
| QROL en quiz d'entrainement | A prévoir | Format référencé, non éditable. |
| Statistiques par format | A faire | Nécessaire pour analyser les performances par format. |
| Génération pédagogique assistée multi-formats | A faire | Doit respecter la pertinence pédagogique, sans quotas artificiels. |
| Aperçu rédacteur multi-formats complet | Partiel | Les formats éditables prioritaires sont couverts, QZONE reste à faire. |

## Critères d'acceptation fonctionnels

- Un quiz classique peut contenir au moins QRU, QRM, QRP et QROC.
- L'étudiant voit une consigne claire pour chaque format.
- Une QRP empêche ou signale la sélection au-delà du nombre attendu.
- Une QROC corrige de manière déterministe en conservant la réponse brute.
- Le même modèle de question peut être utilisé en entrainement et en examen.
- L'examen blanc n'est plus le premier endroit ou l'étudiant rencontre les formats UNESS.

## Critères d'acceptation architecturaux

- Il n'existe pas deux modèles divergents `PracticeQuestion` et `ExamQuestion`.
- Le contexte d'usage contrôle le feedback, la navigation, le timer et la remise.
- Le type de question contrôle l'interaction, la structure de réponse et la correction.
- Les formats UNESS restent explicites dans le modèle.

## Impact roadmap

La roadmap existante doit intégrer la généralisation aux quiz d'entrainement :

| Lot | Orientation |
|---|---|
| Lot A | Consolider le moteur multi-types générique. |
| Lot B | Finaliser QRU, QRM et QRP dans tous les players. |
| Lot C | Consolider QROC textuelle et numérique en entrainement. |
| Lot D | Livrer QZONE avec UI étudiant et outil rédacteur. |
| Lot E | Maintenir le player examen comme contexte d'usage, pas comme moteur séparé. |

## Principe final

Les formats UNESS sont des formats de question de My Exams, pas seulement des formats d'examen blanc.

L'examen blanc assemble et contraint ces formats en conditions réelles. Les quiz d'entrainement les introduisent, les pratiquent et les rendent familiers.

