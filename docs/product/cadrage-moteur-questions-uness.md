# My Exams - Cadrage moteur de questions UNESS et mode examen

Document de cadrage produit et technique pour l'evolution du moteur de questions, des formats UNESS et du mode examen.

## Source et statut

- Source : cadrage utilisateur initial "My Exams - Evolution du moteur de questions et du mode examen".
- Derniere mise a jour : 2026-08-09.
- Statut : en cours d'implementation.
- Perimetre : formats de questions, moteur de correction, mode examen, tutoriel d'interface et compatibilite avec l'existant.

Ce document synthétise le cadrage originel et ajoute l'etat d'avancement observe dans le depot. Il ne remplace pas les tickets d'implementation detailles.

## Finalite

My Exams doit prendre en charge les principaux formats de questions numeriques rencontres dans les examens universitaires de sante, en particulier les formats du vocabulaire UNESS utilises par les etudiants.

Deux objectifs guident l'evolution :

- reproduire progressivement les formats de questions réellement rencontres ;
- habituer l'etudiant aux gestes du mode examen numerique avant le jour J.

Le but n'est pas de copier graphiquement UNESS. Le but est de reduire la charge cognitive liee a l'interface pour que l'etudiant puisse se concentrer sur le contenu scientifique.

## Contraintes

- Ne pas casser les quiz, seeds, examens blancs, corrections, statistiques et médias existants.
- Ne pas effectuer de migration manuelle massive des contenus.
- Ne pas réécrire inutilement des composants fonctionnels.
- Conserver une architecture progressive et compatible avec les anciens QCM.
- Garder le backend comme autorité pour les tentatives d'examen, les échéances et la remise.

## Vocabulaire canonique

En Santé, My Exams doit utiliser en priorité le vocabulaire UNESS quand un équivalent existe.

| Code | Libelle de reference | Famille | Statut My Exams |
|---|---|---|---|
| QRU | Question a reponse unique | QCM | V1 implementee |
| QRM | Question a reponses multiples | QCM | V1 implementee |
| QRP | Question a nombre de reponses precise | QCM | V1 implementee |
| QRPL | Question a nombre de reponses precise longue | QCM | Referencee, a prevoir |
| QROC | Question ouverte a redaction courte | Reponse ouverte | V1 implementee |
| QROL | Question ouverte a redaction longue | Reponse ouverte | Referencee, a prevoir |
| QZONE | Question a zone a pointer | Interaction image | Modele et evaluation prepares, UI a faire |
| QTCS | Question test de concordance de script | Concordance | Future, hors perimetre initial |

QCM est une famille, pas un type parallele. Dans l'interface, afficher le format précis quand il existe : QRU, QRM, QRP ou QRPL.

Les extensions propres a My Exams ne doivent pas imiter des codes UNESS. Exemple : `matching` peut être une extension My Exams, présentée comme "Association".

## Architecture cible

Le moteur doit séparer les responsabilités :

```text
Question
  -> QuestionRenderer
  -> StudentAnswer
  -> QuestionEvaluator
  -> EvaluationResult
```

Le composant React affiche une question, mais ne calcule pas son score officiel. Le player orchestre l'experience, mais ne porte pas la logique métier propre a chaque format.

Le modèle canonique reste une union discriminée :

```ts
type Question =
  | MultipleChoiceQuestion
  | ShortAnswerQuestion
  | HotspotQuestion
  | MatchingQuestion
  | LongAnswerQuestion;
```

Le modèle interne peut distinguer le moteur fonctionnel et le format pedagogique :

```ts
type QuestionType =
  | "mcq"
  | "short-answer"
  | "hotspot"
  | "matching"
  | "long-answer";
```

Exemples :

```ts
{ type: "mcq", format: "QRU" }
{ type: "mcq", format: "QRP", requiredSelectionCount: 2 }
{ type: "short-answer", format: "QROC" }
{ type: "hotspot", format: "QZONE" }
```

Cette separation permet de conserver un moteur generique tout en affichant le vocabulaire UNESS exact.

## Compatibilite avec les anciens contenus

Les anciens QCM doivent rester valides. Le cadrage autorise deux strategies :

- conserver le modèle historique comme forme compatible ;
- normaliser les anciennes structures vers le modèle canonique au chargement.

La stratégie retenue est la normalisation progressive. Les données historiques peuvent continuer a fournir `question`, `choices`, `answerFormat`, `correctChoiceIndex` et `correctChoiceIndexes`, puis être converties en question canonique.

## Formats QCM

### QRU

Une seule proposition peut être selectionnée. L'interface doit se comporter comme une selection exclusive.

### QRM

Plusieurs propositions peuvent être selectionnées. Le nombre de bonnes réponses peut varier, et le moteur ne doit pas imposer quatre propositions.

### QRP

L'etudiant doit selectionner exactement N propositions. L'instruction doit être visible, et l'interface peut empêcher une selection supplémentaire quand la limite est atteinte.

### QRPL

Format a prevoir pour les listes longues. Il ne doit pas être utilisé pour rendre artificiellement une question plus difficile.

## QROC

Une QROC peut être textuelle ou numérique.

Pour les QROC textuelles :

- plusieurs réponses admises doivent pouvoir être déclarées ;
- la normalisation peut gérer casse, accents, espaces, apostrophes, Unicode et ponctuation ;
- les synonymes scientifiques ne doivent pas être inventés automatiquement ;
- les variantes admises doivent être explicites.

Pour les QROC numériques :

- accepter les notations locales pertinentes, par exemple `7.4` et `7,4` ;
- supporter une tolérance ;
- prévoir les unités acceptées ;
- ne pas convertir automatiquement des unités sans règle explicite.

La réponse brute saisie par l'etudiant doit toujours être conservée séparément de la valeur normalisée.

La correction officielle d'une QROC doit rester déterministe. Une IA pourra aider au feedback, mais ne doit pas attribuer automatiquement le score officiel.

## QZONE

Une QZONE permet de cliquer ou toucher une zone sur une image.

Principes structurants :

- stocker les coordonnées en relatif, de 0 a 1, jamais uniquement en pixels écran ;
- supporter d'abord des zones simples ;
- rester compatible desktop, tablette, mobile, zoom et image redimensionnée ;
- prévoir une tolérance paramétrable ;
- ne pas utiliser une QZONE si l'image n'apporte pas une compétence evaluée réelle.

La V1 attendue couvre le clic sur zone avec correction déterministe. Les polygones, zones multiples avancées et outils rédacteur complets relèvent d'une phase ultérieure.

## Questions liées et médias

Les groupes de questions doivent pouvoir partager un énoncé commun et mélanger plusieurs formats. Exemple : une structure moléculaire commune suivie d'une QZONE, d'une QRM et d'une QROC.

Les médias doivent rester découplés du type de question : image, formule, tableau ou diagramme peuvent accompagner plusieurs formats.

## Mode entrainement

Le mode entrainement doit pouvoir utiliser les mêmes formats que le mode examen. La différence réside dans le contexte d'usage :

- correction immédiate ou différée ;
- indice disponible ou non ;
- possibilité de recommencer ;
- présence ou absence de timer ;
- navigation libre ou contrôlée.

Le type de question définit l'interaction et la correction. Le contexte définit les règles de déroulement.

## Mode examen

Le mode examen doit préparer les gestes suivants :

- navigation entre les questions ;
- chronomètre ;
- navigateur numéroté ;
- questions répondues ou non répondues ;
- marquage "a revoir" ;
- récapitulatif avant remise ;
- remise définitive ;
- correction différée.

Le backend doit rester autorité pour la tentative, le délai, la sauvegarde et la soumission.

## Tutoriel d'interface

Le tutoriel "S'entrainer a l'interface d'examen" doit utiliser le vrai player autant que possible. Il sert a pratiquer les gestes sans créer une vraie tentative d'examen.

Objectifs du tutoriel :

- découvrir QRU, QRM, QRP et QROC ;
- passer une question et y revenir ;
- marquer une question a revoir ;
- utiliser précédent, suivant et navigation directe ;
- observer le timer ;
- comprendre le récapitulatif et la remise.

QZONE doit être ajoutée au tutoriel quand l'UI interactive de zonage sera disponible.

## Etat d'avancement

| Lot | Etat | Commentaire |
|---|---|---|
| Audit du modèle existant | Réalisé | Architecture existante analysée avant évolution. |
| Moteur global `Question` / `StudentAnswer` / `EvaluationResult` | Réalisé V1 | Socle présent dans `src/core/questions`. |
| Compatibilité anciens QCM | Réalisé V1 | Normalisation des anciennes structures QCM vers le modèle canonique. |
| Registre des formats UNESS | Réalisé V1 | Codes QRU, QRM, QRP, QRPL, QROC, QROL, QZONE, QTCS et extension `matching` référencés. |
| QRU | Réalisé V1 | Sélection unique et vocabulaire étudiant/admin. |
| QRM | Réalisé V1 | Sélection multiple et correction exacte. |
| QRP | Réalisé V1 | Nombre de réponses requis, consigne et limite de sélection. |
| QROC textuelle | Réalisé V1 | Réponses admises multiples et normalisation déterministe. |
| QROC numérique | Réalisé V1 | Virgule, point, tolérance et unités explicites préparées. |
| Conservation de la réponse brute QROC | Réalisé V1 | `rawValue` conservé dans la réponse étudiant. |
| QZONE modèle | Partiel | Type, payload et évaluation préparés. |
| QZONE UI étudiant | A faire | Renderer interactif image non livré. |
| QZONE outil rédacteur | A faire | Saisie graphique des zones non livrée. |
| QRPL | A prévoir | Format référencé, pas encore éditable ni joué. |
| QROL | A prévoir | Format référencé, moteur fonctionnel non livré. |
| QTCS | Futur | Hors périmètre initial. |
| Matching / association | Futur | Extension My Exams référencée uniquement. |
| Admin création QRU/QRM/QRP/QROC | Réalisé V1 | Création et édition disponibles pour les formats prioritaires éditables. |
| Admin écran formats | Réalisé V1 | Vue read-only des formats de questions. |
| Affichage étudiant des consignes par format | Réalisé V1 | Instructions affichées dans entrainement et examen Santé. |
| Examen blanc Santé mixte léger | Réalisé V1 | Fixture légère couvrant QRU, QRM, QRP et QROC. |
| Player examen Santé | Réalisé V1 | Timer, navigation, réponses, a revoir, soumission et résultats. |
| Tutoriel interface examen | Réalisé V1 | Parcours public sans tentative persistée, QRU/QRM/QRP/QROC. |
| Statistiques par format | A faire | Prévoir agrégations par format UNESS. |
| Import/export QTI | A faire | Format explicite conservé pour faciliter une future intégration. |

## Decisions actées

- QCM n'est pas un type affiché en parallèle de QRU, QRM, QRP et QRPL.
- Le code UNESS doit rester explicite dans les données quand il existe.
- Le moteur interne peut rester générique.
- Les extensions My Exams ne doivent pas recevoir de faux codes UNESS.
- La notation officielle des QROC doit rester déterministe.
- Les seeds longs ne doivent pas être relancés pour une validation ciblée quand une fixture légère suffit.

## Critères d'acceptation V1

- Un ancien QCM continue a fonctionner sans modification manuelle.
- Une QRU, QRM, QRP ou QROC peut être normalisée, rendue et corrigée par le moteur global.
- Le vocabulaire UNESS est visible côté étudiant et côté administration.
- Le player d'examen ne contient pas de logique de scoring spécifique a chaque format.
- Une QROC conserve la réponse brute et applique une correction déterministe.
- Le tutoriel permet de découvrir les gestes principaux sans créer de tentative persistée.

