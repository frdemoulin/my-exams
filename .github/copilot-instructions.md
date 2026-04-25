# Instructions

- Par defaut, travailler uniquement sur l'environnement et la base de developpement.
- Ne jamais lire, modifier, synchroniser ou valider la production sans demande explicite de l'utilisateur.
- Pour synchroniser uniquement les QCMs d'entrainement de la dev vers la prod, utiliser le script cible `npm run db:sync-training-qcms-to-prod`.
- Commencer par `npm run db:sync-training-qcms-to-prod -- --dry-run` pour verifier les mappings et le perimetre sans ecriture.
- Pour executer la synchronisation apres demande explicite de l'utilisateur, lancer `npm run db:sync-training-qcms-to-prod -- --yes`.
- Pour limiter la synchro a un seul chapitre, utiliser `npm run db:sync-training-qcms-to-prod -- --yes --chapter <slug>`.
- Ce flux ne doit synchroniser que le contenu training/QCM (`Chapter`, `ChapterSection`, `QuizQuestion`, `TrainingQuiz`, `TrainingQuizQuestionGroup`, `TrainingQuizQuestion`) et ne doit pas utiliser le miroir complet `db:sync-dev-to-prod`.
