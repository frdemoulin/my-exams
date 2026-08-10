# Examens blancs Santé

Les examens blancs sont un parcours distinct des `TrainingQuiz`. Un QCM d'entraînement est rattaché à un chapitre et participe au suivi de progression. Un examen blanc est rattaché directement à une UE, se déroule en conditions d'examen et possède son propre historique de tentatives.

## UE14 Reims

La maquette est déclarée dans `src/core/health-mock-exam/health-mock-exam.config.ts` : 150 minutes, 100 questions, puis trois sections fixes : Chimie (1 à 28), Biochimie (29 à 62) et Biologie cellulaire (63 à 100).

Les composants n'embarquent pas cette règle. Ils affichent les sections portées par l'examen ; une autre UE peut donc déclarer une autre maquette dans cette configuration métier.

## Questions et groupes liés

Les questions d'examen utilisent la collection `HealthMockExamQuestion`. Elles ne peuvent pas être reliées à `TrainingQuiz` : cette séparation structurelle garantit qu'un sujet d'examen ne recycle pas la banque d'entraînement.

Un groupe lié appartient à une `HealthMockExamSection`. Ses deux ou trois questions sont liées à ce groupe, restent consécutives et ne peuvent donc pas traverser un EC. L'énoncé commun est rendu avant la question pendant le passage et la correction.

## Création d'un sujet

Ajouter le sujet complet et original dans `prisma/seeds/data/health-mock-exams-reims-ue14.ts`. Le type `HealthMockExamSeed` est défini dans `prisma/seeds/health-mock-exams.seed.ts`. Chaque QCM doit posséder un slug stable, quatre items, les réponses attendues, une explication transversale et une explication pour chacune des propositions.

Les médias Markdown locaux sont vérifiés sous `public/` avant publication. Un seed publié valide est idempotent tant qu'il n'existe pas encore de tentative. Après la première tentative, une régénération est bloquée afin de préserver le sujet effectué.

Exécuter ensuite :

```bash
npm run db:push
npm run db:seed:health-mock-exams
```

Le seed refusera la publication si la durée, les quotas 28/34/38, l'ordre 1 à 100, les groupes liés, les médias ou les corrections sont incohérents. Le fichier est actuellement volontairement vide : aucun examen partiel ou recyclé n'est publié.

## Tentatives et correction

Le démarrage crée une tentative `IN_PROGRESS` avec `deadlineAt` calculé côté serveur. Les réponses et marques de révision sont sauvegardées à chaque modification. À la soumission, ou dès que l'échéance serveur est dépassée, le serveur verrouille la tentative, applique la notation exacte des QCM et enregistre les résultats globaux et par EC.

Les bonnes réponses, explications et scores ne sont chargés que par la page de résultats d'une tentative soumise. Une tentative terminée n'est plus modifiable et ne met pas à jour la progression des `TrainingQuiz`.
