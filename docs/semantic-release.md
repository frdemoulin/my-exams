
# Mise en place de `semantic-release` dans _My Exams_

Cette documentation décrit comment fonctionne `semantic-release` dans le dépôt **frdemoulin/my-exams** et comment le maintenir.

---

## 1. Objectifs

`semantic-release` automatise tout le workflow de release :

- calcul de la prochaine version à partir des messages de commit,
- génération / mise à jour du `CHANGELOG.md`,
- création d’un tag Git (`vX.Y.Z`),
- création d’une release GitHub,
- mise à jour de `package.json` (et `package-lock.json`) via `@semantic-release/npm`.

👉 Résultat : plus de `npm version` ou de numéro de version modifié à la main.

---

## 2. Vue d’ensemble du setup _My Exams_

Dans ce repo, `semantic-release` est câblé autour des éléments suivants :

- **Config principale** : `.releaserc.json`
- **Script npm** : `npm run semantic-release`
- **CI GitHub Actions** : un workflow qui :
  - installe les dépendances,
  - exécute les tests,
  - lance `npm run semantic-release` sur la branche `main` avec un `GITHUB_TOKEN`.

---

## 3. Pré-requis

### 3.1. Node.js

La version actuelle de `semantic-release` utilisée dans la CI nécessite **Node 22.14+** ou 24.10+.

### 3.2. Permissions GitHub Actions

Configurer :

1. **Settings → Actions → General → Workflow permissions → Read and write permissions**
2. Dans le workflow :

```yaml
permissions:
  contents: write
  issues: write
  pull-requests: write
```

### 3.3. Tokens supplémentaires (npm)

`@semantic-release/npm` met à jour la version dans `package.json` / `package-lock.json`.

---

## 4. Installation & scripts npm

```bash
npm install --save-dev \
  semantic-release \
  @semantic-release/changelog \
  @semantic-release/commit-analyzer \
  @semantic-release/git \
  @semantic-release/github \
  @semantic-release/release-notes-generator \
  @semantic-release/npm
```

Script :

```json
{
  "scripts": {
    "semantic-release": "semantic-release"
  }
}
```

---

## 5. Configuration `.releaserc.json`

```jsonc
{
  "branches": ["main"],
  "preset": "conventionalcommits",
  "tagFormat": "v${version}",
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",
    "@semantic-release/git",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        "assets": ["package.json", "package-lock.json", "CHANGELOG.md"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\\n\\n${nextRelease.notes}"
      }
    ]
  ]
}
```

### Points importants

- `branches: ["main"]` → release seulement sur `main`
- Convention des commits : `feat`, `fix`, `chore`, `BREAKING CHANGE:`
- `@semantic-release/npm` met à jour `package.json`
- `@semantic-release/git` commit les fichiers changés

---

## 6. Workflow GitHub Actions

Exemple :

```yaml
name: CI & Release

on:
  push:
    branches:
      - main

jobs:
  release:
    runs-on: ubuntu-latest

    permissions:
      contents: write
      issues: write
      pull-requests: write

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22

      - run: npm ci --legacy-peer-deps

      - run: npm test

      - run: npm run semantic-release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

---

## 7. Flow de release

1. Analyse des commits depuis le dernier tag  
2. Détermination du type de version (patch/minor/major)  
3. Mise à jour CHANGELOG.md  
4. Mise à jour package.json / package-lock.json  
5. Commit `[skip ci]`  
6. Tag `vX.Y.Z`  
7. GitHub Release  

---

## 8. Conventions de commit

- `fix: ...` → patch  
- `feat: ...` → minor  
- `BREAKING CHANGE:` → major  

---

## 9. Version affichée dans l’application

Le footer lit `package.json`.  
`@semantic-release/npm` + `@semantic-release/git` assurent que ce fichier est mis à jour à chaque release.

---

## 10. Dépannage

### Erreur Node version

→ Utiliser Node 22 dans CI et local (`nvm use 22`)

### Permission `EGITNOPERMISSION`

→ Activer “Read & write” dans Settings → Actions  
→ Ajouter `permissions.contents: write` dans le workflow

### Aucune release créée

→ Vérifier qu’un commit Conventional Commits a été poussé sur `main`

---

Fin de la documentation.
