<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

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
- Pour tout contenu scientifique Santé, respecter les conventions TeX et typographiques définies dans `docs/content/health-training-seed-authoring.md`. En particulier, les notations atomistiques (`\mathrm{A}`, `\mathrm{Z}`, `\mathrm{N}`, `\mathrm{X}`), couches, sous-couches et nombres quantiques (`\mathrm{n}`, `\ell`, `\mathrm{m}`, `\mathrm{s}`) doivent suivre les conventions du projet. Ne pas appliquer de remplacement TeX mécanique sans tenir compte de la signification scientifique.
- Pour toute intervention sur les entraînements Santé, consulter la documentation produit de terminologie correspondante (`docs/product/terminologie-entrainement-sante.md`).

