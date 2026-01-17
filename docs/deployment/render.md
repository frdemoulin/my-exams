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
## Dashboard beta (EPIC 4)

Le dashboard public est **réservé à une liste d’emails** (beta) ou aux admins.

Variables Render (Environment) :
```
DASHBOARD_BETA_EMAILS=alice@exemple.fr,bob@exemple.fr
```

- Sépare les emails par des virgules.
- Laisse vide pour tout bloquer (hors admins).

---
## Notes / dépannage rapide
- En environnement natif Render, `apt-get` est en lecture seule → **Ghostscript non disponible**.
- Si le pre-deploy échoue, vérifier `DATABASE_URL` et la commande `env CONFIRM_DB_MIGRATIONS=1 npm run db:deploy`.
- Si la compression échoue en prod, vérifier que Ghostscript est bien présent (mode Docker requis).
- Si les PDFs uploadés renvoient 404 après déploiement/redémarrage, utiliser un disque persistant Render
  et définir `UPLOADS_DIR=/data/uploads` (ou tout autre chemin monté), afin que les fichiers restent accessibles.

---
## Uploads PDF en production (Render)

Par défaut, Render ne conserve **pas** les fichiers locaux entre deux déploiements : les PDFs uploadés
disparaissent et les URLs renvoient 404. Il faut donc un **disque persistant**.

### Étapes (Render)

1. Render → Service → **Disks** → **Add Disk**
   - **Mount path** : `/data`
   - **Size** : 1–5 GB suffisent pour commencer

2. Render → Service → **Environment**
   - Ajouter la variable :
     ```
     UPLOADS_DIR=/data/uploads
     ```

3. Redéployer le service (Deploy → Manual deploy).

### Vérification rapide
- Un PDF uploadé doit être accessible via une URL du type :
  ```
  https://<ton-domaine>/uploads/exam-papers/<hash>.pdf
  ```
- Après un redeploy, l’URL doit **toujours** répondre 200.

Voir `docs/database/dev-prod.md` pour les détails liés à la base.

---
## Umami auto-hébergé (Render)

Umami peut être auto-hébergé sur Render pour disposer d’analytics sans abonnement.

### Étapes (Render)
1. Créer une base **Postgres** sur Render (même région que le service Umami).
2. Créer un **Web Service** depuis `https://github.com/umami-software/umami`.
3. Build command :
   ```
   corepack enable && pnpm install --frozen-lockfile && pnpm run build && mkdir -p .next/standalone/.next/static .next/standalone/public && cp -R .next/static/. .next/standalone/.next/static/ && cp -R public/. .next/standalone/public/
   ```
4. Start command :
   ```
   node .next/standalone/server.js
   ```
5. Variables d’environnement :
   - `DATABASE_URL` = **Internal Database URL** de la base Postgres.
6. Déployer, ouvrir l’URL Umami, se connecter (admin/umami) puis changer le mot de passe.
7. Dans l’admin Umami, créer un “Website” et récupérer l’ID + l’URL du script.
8. Dans le service `my-exams`, ajouter :
   - `NEXT_PUBLIC_UMAMI_WEBSITE_ID=<UUID>`
   - `NEXT_PUBLIC_UMAMI_SRC=https://<url-umami>/script.js`

Si tu affiches Umami dans l’admin (iframe), ajouter dans le service Umami :
- `ALLOWED_FRAME_URLS=https://my-exams.onrender.com http://localhost:3000`

Si tu utilises Supabase en base externe (pooler + TLS), voir `docs/development/analytics-umami-setup.md`.

Voir aussi `docs/development/analytics-umami-setup.md`.

---
## Nettoyage automatique des logs de connexion

Recommandé pour respecter la durée de conservation (CNIL).

1. Render → **Cron Jobs** → **New Cron Job**
2. Commande :
   ```
   npm run auth:logs:cleanup
   ```
3. Fréquence conseillée : **1 fois/jour**
4. Variables d’environnement à définir :
   - `AUTH_LOG_RETENTION_DAYS` (ex: `180`)
