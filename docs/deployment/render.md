# Déploiement Render

Ce projet est configuré pour tourner en **mode Docker** afin d’avoir Ghostscript disponible (compression PDF).

---
## Fichiers utilisés
- `Dockerfile` : build + Ghostscript
- `render.yaml` : configuration Render (Docker + pre-deploy + env vars)
- `.dockerignore` : réduit le contexte de build

---
## Déploiement recommandé (Blueprint + Docker)
1) Commit/push `Dockerfile`, `render.yaml`, `.dockerignore`.
2) Render → **New +** → **Blueprint** → sélectionne le repo.
3) **Auto Sync = Yes**.
4) **Associate existing service** si `my-exams` existe, sinon **Create new**.
5) Une fois le service créé : ouvrir le service → **Environment** → renseigner les valeurs.
   - Les clés à fournir sont listées dans `render.yaml` (bloc `envVars`).
6) Déployer (le sync déclenche souvent un déploiement automatique).

---
## Déploiement manuel (sans Blueprint)
Possible, mais moins pratique si tu veux éviter l’UI.

1) Passer le service en **Docker**.
2) Dockerfile path : `./Dockerfile`.
3) Build/Start command : laisser vide (Dockerfile fait foi).
4) Renseigner les variables d’environnement dans **Environment**.
5) Pré-deploy command :

```bash
env CONFIRM_DB_MIGRATIONS=1 npm run db:deploy
```

---
## Mise à jour / Sync
- **Changement de code** : push → auto-deploy (si `autoDeploy: true`).
- **Changement de config Render** (`render.yaml`) : Blueprint **Sync**, puis deploy si besoin.
- **Changement d’env vars** : onglet **Environment** du service.

---
## Notes / dépannage rapide
- En environnement natif Render, `apt-get` est en lecture seule → **Ghostscript non disponible**.
- Si le pre-deploy échoue, vérifier `DATABASE_URL` et la commande `env CONFIRM_DB_MIGRATIONS=1 npm run db:deploy`.
- Si la compression échoue en prod, vérifier que Ghostscript est bien présent (mode Docker requis).

Voir `docs/database/dev-prod.md` pour les détails liés à la base.
