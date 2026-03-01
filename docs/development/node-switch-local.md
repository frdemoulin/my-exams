# Switch Node/npm local (pro vs perso)

Ce projet utilise des fonctions shell locales (dans `~/.zshrc`) pour changer rapidement d'environnement Node/npm sans modifier le code du projet.

## Switch d'environnement

Recharge le shell si besoin :

```bash
source ~/.zshrc
```

Passe en environnement pro :

```bash
node_pro
```

Passe en environnement perso :

```bash
node_perso
```

Vérifie l'environnement actif :

```bash
node -v
npm -v
```

## Config actuelle

- `node_pro` : `node v24.12.0` + `npm 11.10.1`
- `node_perso` : `node` Homebrew latest (`/usr/local/opt/node/bin`) + `npm` associé

## Changer les versions

Édite le bloc `node-switch (managed by codex)` dans `~/.zshrc`.

Variables principales :

- `PRO_NODE_BIN` : chemin du binaire Node pro (ex: `~/.local/node-v24.12.0-darwin-x64/bin`)
- `PRO_NODE_EXPECTED` : version attendue affichée en contrôle (ex: `v24.12.0`)
- `PRO_NPM_EXPECTED` : version npm pro (ex: `11.10.1`)
- `PERSO_NODE_BIN` : binaire Node perso (ex: `/usr/local/opt/node/bin`)

Après modification :

```bash
source ~/.zshrc
node_pro
node_perso
```

## Mettre à jour npm côté perso (optionnel)

```bash
node_perso_update_npm
```
