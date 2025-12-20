# Déploiement Render

## Build command (Ghostscript)
Pour activer la compression PDF en production, définis la Build Command Render sur :

```bash
./scripts/render-build.sh
```

Le script installe Ghostscript via apt-get, puis exécute :
- `npm ci --include=dev`
- `npm run build`

Si tu utilises un Dockerfile custom, installe `ghostscript` à cet endroit.

## Limite Render (environnement natif)
Sur Render (environnement natif), `apt-get` peut être en lecture seule. Dans ce cas, le build continue sans Ghostscript et la compression PDF > 2MB échouera.

Si tu veux Ghostscript en production, passe le service en mode Docker et installe `ghostscript` dans le Dockerfile.

## Mode Docker (recommandé pour Ghostscript)
1) Dans Render, crée un service **Docker** (ou change l’environnement du service en Docker).
2) Assure-toi que le `Dockerfile` est à la racine du repo.
3) Supprime la Build Command côté Render (elle n’est pas utilisée en mode Docker).
4) Déploie.

## render.yaml (optionnel)
Un fichier `render.yaml` est disponible à la racine pour créer le service Docker via **Blueprint**.
Dans Render : **New +** → **Blueprint**, puis sélectionne le repo.

## Pre-deploy command (base de données)
Utilise la même Pre-deploy command qu’avant :

```bash
CONFIRM_DB_MIGRATIONS=1 npm run db:deploy
```

Voir `docs/database/dev-prod.md` pour les détails liés à la base.
