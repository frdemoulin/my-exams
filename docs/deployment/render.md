# Déploiement Render

## Build command (Ghostscript)
Pour activer la compression PDF en production, définis la Build Command Render sur :

```bash
./scripts/render-build.sh
```

Le script installe Ghostscript via apt-get, puis exécute :
- `npm ci`
- `npm run build`

Si tu utilises un Dockerfile custom, installe `ghostscript` à cet endroit.

## Pre-deploy command (base de données)
Utilise la même Pre-deploy command qu’avant :

```bash
CONFIRM_DB_MIGRATIONS=1 npm run db:deploy
```

Voir `docs/database/dev-prod.md` pour les détails liés à la base.
