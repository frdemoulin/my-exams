## Gestion des versions et des commits

### Paquets installés
- **husky** : hooks git (commit-msg, pre-commit)
- **@commitlint/cli + @commitlint/config-conventional** : validation des messages de commit (Conventional Commits)
- **lint-staged** : lance le lint sur les fichiers modifiés avant commit
- **semantic-release** (+ plugins `@semantic-release/commit-analyzer`, `release-notes-generator`, `changelog`, `git`, `github`) : calcule la version à partir des commits, génère changelog, crée tag et release GitHub

### Hooks en place
- `.husky/commit-msg` : `npx --no -- commitlint --edit "$1"` → bloque les messages non conformes (ex: `feat:`, `fix:`, `chore:`…)
- `.husky/pre-commit` : `npx --no -- lint-staged` → lint sur les fichiers modifiés avant commit

### Lint-staged
- `lint-staged.config.js` : `*.{js,jsx,ts,tsx,json,md,css,scss}` → `npm run lint -- --fix`

### Semantic Release
- Config : `.releaserc.json`
  - branches: `main`
  - plugins : commit-analyzer, release-notes-generator, changelog, github, git
  - `tagFormat`: `v${version}`
- Script : `npm run semantic-release`
- Attendu : commits Conventional Commits, pas de `npm version` manuel.

### GitHub Actions
Workflow déjà ajouté : `.github/workflows/release.yml`
```yaml
name: Release
on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run semantic-release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
`GITHUB_TOKEN` est fourni par défaut. Si publication npm : ajouter `NPM_TOKEN`.

### Commandes utiles
- Installer les hooks (déjà fait) : `npm run prepare`
- Lancer semantic release localement (tag/release créés si origin accessible) : `npm run semantic-release`
- Vérifier un message : `echo "feat: test" | npx commitlint`

### Monter Next.js sur le dernier patch
- Vérifier la dernière version : `npm view next version`
- Mettre à jour Next.js (et eslint-config-next assorti) : `npm install next@latest eslint-config-next@latest`
- Vérifier le build : `npm run lint && npm run build`

### Règles de commits (Conventional Commits)
- `feat: ...` → nouvelle fonctionnalité (bump minor)
- `fix: ...` → correction (bump patch)
- `chore: ...`, `docs: ...`, `refactor: ...` → pas de bump sauf breaking
- Breaking change : ajouter `!` (`feat!: ...`) ou `BREAKING CHANGE:` dans le body (bump major)
