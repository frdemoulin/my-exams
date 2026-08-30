<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Rapports d'intervention

- Après chaque intervention réalisée par un agent IA, générer un rapport Markdown dans `./tmp`.
- Nommer le rapport de façon datée et explicite, par exemple `tmp/YYYY-MM-DD-<sujet>-report.md`.
- Le rapport doit synthétiser la demande, les fichiers modifiés, les validations exécutées et les éventuels points non traités ou bloquants.
- Ne pas versionner ces rapports sauf demande explicite.

## My Exams — Terminologie Santé

- Dans l'interface Santé, `quiz` désigne une séance d'entraînement composée de plusieurs questions.
- `question` désigne l'unité élémentaire d'un quiz.
- QRU, QRM, QRP, QRPL, QROC, QZONE, etc. désignent des formats de question.
- Ne jamais utiliser `QCM` comme terme générique pour un quiz ou pour toute question Santé.
- Une `colle` désigne conceptuellement une évaluation intermédiaire entre quiz et examen blanc ; ne pas assimiler automatiquement un quiz à une colle.
- Un `examen blanc` simule une épreuve complète.
- Ne jamais effectuer de renommage mécanique des identifiants techniques historiques contenant `qcm` ou `QCM` uniquement pour respecter cette terminologie UI.
- Pour le Player Santé V2, ne jamais supposer qu'un quiz est composé uniquement de QCM à quatre propositions. Les consignes générales restent indépendantes des formats ; la consigne spécifique est portée par chaque question.
- La navigation globale du Player Santé V2 est affichée au-dessus du bloc de la question courante. L'interface est conçue mobile-first : sur petit écran, favoriser le défilement horizontal local de la navigation avec recentrage automatique et l'empilement des informations plutôt que la compression des contenus.
- Pour tout contenu scientifique Santé, respecter les conventions TeX et typographiques définies dans `docs/content/health-training-seed-authoring.md`. Le style TeX d'un symbole scientifique dépend de sa signification : les grandeurs et constantes physiques ($e$, $c$, $h$, $G$) restent en italique mathématique, tandis que les unités, symboles chimiques, symboles atomistiques (`\mathrm{A}`, `\mathrm{Z}`, `\mathrm{N}`, `\mathrm{X}`), couches, sous-couches et indices descriptifs ($k_{\mathrm B}$) suivent les conventions en caractères droits définies dans le guide auteur Santé. Pour les nucléides et espèces chimiques concrètes, utiliser la notation `mhchem` prévue par le projet (`\ce{...}`) plutôt que des préscripts TeX ou ajustements d'espacement manuels. Ne jamais appliquer `\mathrm{}` de manière mécanique.
- Pour toute intervention sur les entraînements Santé, consulter la documentation produit de terminologie correspondante (`docs/product/terminologie-entrainement-sante.md`).
- Les quiz Santé (`Découvrir`, `S'entraîner`, `Maîtriser`, `Synthèse`) ne sont pas chronométrés, quel que soit leur niveau. Le chronométrage appartient aux modes évaluatifs à partir des colles et aux examens blancs selon les conditions réelles de l'épreuve. Consulter `docs/product/terminologie-entrainement-sante.md`.
- Pour les quiz Santé, les contextes médicaux doivent être concrets et informatifs mais proportionnés au niveau. En `DISCOVER`, privilégier une mise en contexte brève (1 à 2 phrases) ; éviter les amorces purement décoratives (`Dans un contexte de...`) et les scénarios cliniques inutilement longs hors périmètre.
- Pour les questions calculatoires, le bloc `Données :` est placé sur une nouvelle ligne immédiatement après l'énoncé, sans ligne blanche intermédiaire.
- Pour les résultats des quiz Santé, privilégier les informations pédagogiquement actionnables (résultat global, maîtrise par notion, correction détaillée). Ne pas exposer à l'étudiant de statistiques agrégées par format de question (QRU, QRM, QROC, etc.) sur la page de fin de quiz ; conserver ces données pour les analytics sous-jacents si elles existent.
- En correction des quiz Santé, privilégier une navigation actionnable vers les questions à revoir (filtres `Toutes`, `À revoir`, `Correctes`, raccourcis d'erreurs). Les contrôles supplémentaires ne doivent pas alourdir le mode de passation.
- Dans l'interface Santé, pour lancer ou débuter une session (quiz, colle ou examen blanc), utiliser systématiquement le verbe « Démarrer » (ex : « Démarrer », « Démarrer la colle », « Démarrer l'examen ») et non « Commencer ».
- Tout module TypeScript nécessaire à un script exécuté lors du pre-deploy doit être présent dans le stage Docker final. Lorsqu'une nouvelle dépendance runtime est introduite depuis `prisma/` ou `scripts/migrations/` vers `src/`, valider systématiquement le graphe d'imports depuis l'image Docker runner.

## Processus de validation des plans d'implémentation

- Ne jamais activer `RequestFeedback: true` lors de la création ou mise à jour d'un artefact de plan (`implementation_plan.md`). Utiliser systématiquement `RequestFeedback: false`.
- Toujours suspendre l'exécution après la rédaction d'un plan d'implémentation et attendre l'accord explicite et manuel de l'utilisateur dans le chat avant de démarrer l'exécution.

