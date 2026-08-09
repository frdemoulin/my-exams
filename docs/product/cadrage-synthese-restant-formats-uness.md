# My Exams - Synthèse des chantiers restants formats UNESS

Document de synthèse opérationnelle sur ce qu'il reste à implémenter après la V1 du moteur global de questions.

## Source et statut

- Source : cadrages `cadrage-moteur-questions-uness.md` et `cadrage-formats-uness-quiz-entrainement.md`.
- Dernière mise à jour : 2026-08-09.
- Statut : roadmap restante.
- Périmètre : formats UNESS Santé, quiz d'entraînement, examens blancs, administration, statistiques et documentation associée.

Ce document ne remplace pas les cadrages source. Il sert à décider l'ordre d'implémentation restant.

## Point de départ

La V1 couvre déjà :

- moteur global `Question` / `StudentAnswer` / `EvaluationResult` ;
- registre des formats UNESS et extension My Exams `matching` ;
- compatibilité avec les anciens QCM ;
- QRU, QRM, QRP et QROC jouables et corrigeables ;
- QROC textuelle et numérique avec correction déterministe ;
- administration QRU, QRM, QRP et QROC ;
- écran admin read-only des formats ;
- consignes étudiant par format ;
- player examen Santé avec timer, navigation, marquage à revoir, autosauvegarde et remise ;
- tutoriel d'interface QRU, QRM, QRP et QROC ;
- fixture légère d'examen blanc mixte.

Le reste doit donc éviter de refaire ce socle. La priorité est d'ajouter les formats et usages manquants sans créer un second moteur.

## Priorités synthétiques

| Priorité | Chantier | Raison |
|---|---|---|
| P0 | QZONE de bout en bout | Format prioritaire du cadrage initial, modèle préparé mais pas encore jouable. |
| P0 | Consolidation multi-contextes entraînement/examen | Garantir que le même moteur sert les quiz et les examens, sans divergence UI/correction. |
| P1 | Administration et validation avancées | Rendre les nouveaux formats réellement maintenables par un rédacteur. |
| P1 | Statistiques par format UNESS | Mesurer les performances sans mélanger QRU, QRM, QRP, QROC et QZONE. |
| P1 | QRPL | Extension naturelle de QRP, utile pour listes longues si pédagogiquement justifié. |
| P2 | QROC avancée | Variantes, aide rédacteur et feedback déterministe plus fin. |
| P2 | QROL, matching, QTCS | Formats futurs ou hors périmètre Santé L1 initial. |
| P2 | Import/export QTI | Utile à terme, pas bloquant pour l'usage produit immédiat. |

## Lot 1 - Stabilisation transverse

Objectif : verrouiller le socle avant d'ajouter de nouveaux formats.

À faire :

- documenter les payloads canoniques de chaque format dans une doc développeur dédiée ;
- vérifier que les players entraînement et examen utilisent les mêmes fonctions de normalisation et d'évaluation ;
- éviter toute logique de scoring dans les composants React ;
- ajouter une fixture légère multi-format pour les quiz d'entraînement si elle n'existe pas déjà ;
- maintenir les tests unitaires du moteur comme référence de non-régression ;
- conserver des validations ciblées et éviter les seeds longs pour les contrôles courants.

Critères d'acceptation :

- une QRU, QRM, QRP ou QROC obtient le même résultat d'évaluation en entraînement et en examen ;
- une modification du moteur est couverte par un test unitaire ;
- un test E2E couvre au moins un parcours étudiant multi-format en entraînement.

## Lot 2 - QZONE V1 jouable

Objectif : livrer le premier format prioritaire encore manquant.

À faire côté modèle :

- stabiliser le payload QZONE avec image, zones attendues, tolérance et coordonnées normalisées ;
- conserver la réponse étudiant en coordonnées relatives ;
- gérer au minimum une zone attendue simple ;
- prévoir plusieurs zones alternatives sans nécessairement livrer les cas avancés.

À faire côté étudiant :

- créer un renderer image cliquable/touchable responsive ;
- afficher clairement le point sélectionné ;
- permettre de modifier son point avant validation/remise ;
- rendre la saisie utilisable sur mobile et tablette ;
- afficher une consigne explicite : "Pointez la zone demandée sur le support." ;
- afficher en correction la zone attendue et la réponse de l'étudiant.

À faire côté examen :

- brancher QZONE dans le player examen ;
- autosauvegarder la réponse QZONE ;
- restaurer la réponse après refresh ;
- l'intégrer au récapitulatif répondu/non répondu ;
- appliquer la correction différée après remise.

À faire côté entraînement :

- brancher QZONE dans le player d'entraînement ;
- afficher la correction selon la politique du quiz ;
- permettre l'usage dans découverte, entraînement, maîtrise et synthèse.

À faire côté tests :

- tests unitaires sur la tolérance et les coordonnées normalisées ;
- E2E étudiant entraînement QZONE ;
- E2E examen blanc léger QZONE ;
- test responsive minimal desktop/mobile.

Critères d'acceptation :

- une QZONE peut être créée par seed ou fixture légère ;
- l'étudiant peut pointer une zone, modifier son choix et voir sa correction ;
- la correction reste stable quelle que soit la taille d'affichage de l'image.

## Lot 3 - Outil rédacteur QZONE

Objectif : rendre QZONE administrable sans manipulation JSON fragile.

À faire :

- ajouter QZONE aux formats éditables quand le renderer étudiant est stable ;
- permettre de choisir ou renseigner l'image support ;
- proposer un outil minimal de placement de point ou cercle de tolérance ;
- stocker les coordonnées normalisées ;
- afficher un aperçu rédacteur ;
- valider les zones manquantes, tolérances invalides et images absentes ;
- documenter les bonnes pratiques pédagogiques QZONE.

Critères d'acceptation :

- un rédacteur peut créer une QZONE simple depuis l'admin ;
- la prévisualisation admin correspond au rendu étudiant ;
- les erreurs de configuration sont bloquées avant publication.

## Lot 4 - Tutoriel avec QZONE

Objectif : compléter le tutoriel d'interface avec tous les formats prioritaires.

À faire :

- ajouter une étape QZONE dans `/sante/interface-examen` ;
- expliquer le geste tactile/souris ;
- intégrer la QZONE au récapitulatif pédagogique ;
- vérifier que le tutoriel reste sans tentative persistée.

Critères d'acceptation :

- le tutoriel couvre QRU, QRM, QRP, QROC et QZONE ;
- l'étudiant voit explicitement la zone attendue en fin de tutoriel ;
- le parcours reste rejouable sans seed ni donnée base.

## Lot 5 - QRPL

Objectif : prévoir les questions à liste longue sans dégrader l'ergonomie.

À faire :

- activer QRPL comme variante `mcq` avec `requiredSelectionCount` ;
- concevoir un rendu adapté aux longues listes : lisibilité, hauteur, scroll, éventuellement recherche ;
- ajouter la création admin avec garde-fous pédagogiques ;
- éviter d'utiliser QRPL pour rendre artificiellement une question difficile ;
- ajouter des tests sur une liste longue et la limite de sélection.

Critères d'acceptation :

- une QRPL affiche clairement le nombre attendu ;
- la liste reste utilisable sur mobile ;
- les résultats et statistiques distinguent QRPL de QRP.

## Lot 6 - QROC avancée

Objectif : rendre les QROC plus robustes pour les contenus réels.

À faire :

- exposer en admin plusieurs variantes de réponses admises ;
- clarifier les options de normalisation disponibles ;
- normaliser les variantes typographiques sûres comme tirets, apostrophes et espaces insécables ;
- afficher les variantes acceptées en correction quand c'est pertinent ;
- conserver une correction déterministe ;
- ne pas introduire de fuzzy matching automatique pour le score officiel.

Critères d'acceptation :

- un rédacteur peut saisir plusieurs réponses admises sans JSON manuel ;
- l'étudiant voit sa réponse brute et la réponse attendue ;
- une variante scientifique n'est acceptée que si elle a été déclarée.

## Lot 7 - Statistiques par format

Objectif : mesurer les performances sans comparer naïvement des formats différents.

À faire :

- agréger les résultats par format UNESS ;
- distinguer QRU, QRM, QRP, QRPL, QROC et QZONE ;
- exposer les statistiques côté admin et éventuellement côté étudiant ;
- documenter que les taux de réussite ne sont pas comparables directement entre formats ;
- prévoir des filtres par UE, chapitre, quiz, examen blanc et période.

Critères d'acceptation :

- un administrateur peut voir la distribution des formats ;
- un administrateur peut voir la réussite par format ;
- les statistiques n'écrasent pas le format en simple "QCM".

## Lot 8 - Génération, seeds et qualité pédagogique

Objectif : éviter la génération artificielle de formats.

À faire :

- enrichir les schémas de seed avec l'objectif pédagogique de la question ;
- documenter quand choisir QRU, QRM, QRP, QROC, QZONE ou QRPL ;
- ajouter des exemples de seeds multi-formats courts ;
- refuser les structures incohérentes : QRP sans nombre attendu, QROC sans réponse admise, QZONE sans zone attendue ;
- maintenir des fixtures légères pour la validation et les E2E.

Critères d'acceptation :

- un seed multi-format est lisible par un rédacteur ;
- les erreurs de structure sont explicites ;
- les validations courantes ne nécessitent pas le seed long global.

## Lot 9 - Réutilisation des questions entre contextes

Objectif : clarifier jusqu'où va le principe "une question, plusieurs contextes".

Décision à trancher :

- option A : même moteur canonique, mais contenus d'entraînement et d'examen séparés ;
- option B : banque de questions partagée, avec usages entraînement/examen déclarés ;
- option C : banque commune partielle, mais examens blancs protégés contre le recyclage involontaire.

Recommandation actuelle :

- ne pas fusionner brutalement les collections ou modèles persistés ;
- conserver le moteur commun ;
- préparer une abstraction de banque de questions seulement si le produit a besoin de réutiliser volontairement un même contenu dans plusieurs contextes.

Critères d'acceptation :

- aucune duplication de logique de correction ;
- pas de recyclage accidentel d'une question d'examen blanc dans un entraînement ;
- le choix produit est documenté avant toute migration de données.

## Lot 10 - Formats futurs

Ces formats ne doivent pas bloquer les priorités Santé initiales.

### QROL

À prévoir seulement si un usage réel demande une réponse longue.

Points à clarifier :

- correction manuelle, autoévaluation ou statut `needs-review` ;
- affichage en correction ;
- stockage des brouillons longs ;
- expérience mobile.

### Matching / association

Extension My Exams, pas format UNESS.

Points à clarifier :

- pertinence pédagogique ;
- structure des paires ;
- scoring exact ou partiel ;
- rendu mobile.

### QTCS

Hors périmètre L1 initial.

Points à clarifier :

- modèle de concordance ;
- scoring spécifique ;
- référentiel universitaire réellement visé ;
- cas d'usage Santé concret.

## Lot 11 - Import/export QTI

Objectif : préparer l'interopérabilité sans la livrer prématurément.

À faire plus tard :

- mapper les formats UNESS/My Exams vers les équivalents QTI ;
- exporter le code `format` explicitement ;
- gérer les médias ;
- gérer les corrections QROC déterministes ;
- documenter les limites d'interopérabilité pour QZONE et formats futurs.

Critères d'acceptation :

- aucun export ne perd le code de format ;
- un import ne crée pas de faux code UNESS ;
- les formats non supportés sont explicitement rejetés ou marqués non importables.

## Ordre recommandé

1. Stabilisation transverse et tests multi-contextes.
2. QZONE V1 étudiant en entraînement.
3. QZONE V1 examen blanc.
4. Outil rédacteur QZONE.
5. Tutoriel QZONE.
6. Statistiques par format.
7. QRPL.
8. QROC avancée côté rédacteur.
9. Décision banque de questions / réutilisation.
10. QROL, matching, QTCS et QTI.

## Hors périmètre immédiat

- réécriture complète du player ;
- fusion massive des données entraînement et examen ;
- relance systématique du seed long pour valider chaque changement ;
- correction officielle de QROC par IA ;
- quotas automatiques de formats par quiz ;
- implémentation de QTCS avant un cas d'usage réel.

## Définition de fini globale

Le cadrage initial peut être considéré couvert pour le périmètre prioritaire Santé quand :

- QRU, QRM, QRP, QROC et QZONE sont jouables en entraînement et en examen ;
- les mêmes règles d'évaluation sont utilisées dans tous les contextes ;
- l'administration permet de créer les formats prioritaires sans JSON manuel ;
- le tutoriel couvre tous les gestes prioritaires ;
- les statistiques distinguent les formats UNESS ;
- les validations utilisent des fixtures légères et des tests ciblés ;
- la documentation indique clairement les formats supportés, partiels et futurs.

