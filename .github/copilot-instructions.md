# Instructions

- Par defaut, travailler uniquement sur l'environnement et la base de developpement.
- Ne jamais lire, modifier, synchroniser ou valider la production sans demande explicite de l'utilisateur.
- Dans les menus et sous-menus, trier les entrées par ordre alphabétique lors de toute intervention de l'IA via Copilot.
- Pour toute nouvelle page du backoffice, commencer par identifier une page BO préexistante de même nature et reprendre ses conventions de structure, de mise en forme et d'interaction.
- Les pages de liste BO doivent utiliser les composants partagés existants (`TableToolbar`, table TanStack/UI, `DataTablePagination`, export, lignes cliquables et menu d'actions avec `ConfirmDeleteDialog`) plutôt qu'une table ou une barre d'actions ad hoc.
- Les pages de détail BO doivent utiliser `AdminPageHeading`, proposer les actions Retour/Éditer selon les conventions existantes et présenter les informations métier dans les cartes et badges UI du projet, sans exposer directement les clés techniques ou identifiants de relation.
- Les pages d'ajout et de modification BO doivent reprendre la structure des formulaires existants : composants UI/Form du projet, grille de champs cohérente, bloc de statuts, bouton Annuler secondaire et bouton de validation standard.
- Avant de créer un nouveau composant visuel BO, vérifier qu'un composant partagé ou qu'un patron équivalent n'existe pas déjà dans `src/components/shared`, `src/components/ui` ou un CRUD admin préexistant.
- Pour les fixtures du référentiel santé, utiliser une source officielle traçable et la documenter. Ne jamais inventer de blocs, d'UE, d'ECTS ou de rattachements pédagogiques locaux lorsqu'aucune maquette universitaire officielle vérifiée n'est disponible.
- Pour synchroniser uniquement les QCMs d'entrainement de la dev vers la prod, utiliser le script cible `npm run db:sync-training-qcms-to-prod`.
- Commencer par `npm run db:sync-training-qcms-to-prod -- --dry-run` pour verifier les mappings et le perimetre sans ecriture.
- Pour executer la synchronisation apres demande explicite de l'utilisateur, lancer `npm run db:sync-training-qcms-to-prod -- --yes`.
- Pour limiter la synchro a un seul chapitre, utiliser `npm run db:sync-training-qcms-to-prod -- --yes --chapter <slug>`.
- Ce flux ne doit synchroniser que le contenu training/QCM (`Chapter`, `ChapterSection`, `QuizQuestion`, `TrainingQuiz`, `TrainingQuizQuestionGroup`, `TrainingQuizQuestion`) et ne doit pas utiliser le miroir complet `db:sync-dev-to-prod`.
