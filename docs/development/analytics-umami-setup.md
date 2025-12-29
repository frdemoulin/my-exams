# Mise en place d’Umami (analytics gratuit) – SaaS ou auto-hébergé (Render/Vercel)

Ce guide explique comment obtenir les variables d’environnement nécessaires pour activer Umami dans l’app (aucune collecte tant que les env ne sont pas définies).

## 1) Choisir le mode
- **SaaS Umami** (simple, payant après essai) : crée un compte sur umami.is, ajoute un site, récupère l’ID et l’URL du script.
- **Auto-hébergé** (gratuit) : déploie Umami sur Render ou Vercel (+ base Postgres). C’est plus de setup, mais sans abonnement.

## 2) Récupérer les variables
Dans le dashboard Umami (SaaS ou self-host) après avoir créé ton site :
- `NEXT_PUBLIC_UMAMI_WEBSITE_ID` : l’UUID du site (ex. `12345678-abcd-...`).
- `NEXT_PUBLIC_UMAMI_SRC` : l’URL du script (ex. SaaS : `https://analytics.umami.is/script.js` ; self-host : `https://<ton-domaine>/script.js`).
- Optionnel `NEXT_PUBLIC_UMAMI_HOST` : host de l’instance si différent de l’URL de script (souvent inutile).

## 3) Injection dans l’app
- Les env sont lues dans `src/app/layout.tsx`. Sans `NEXT_PUBLIC_UMAMI_WEBSITE_ID` ET `NEXT_PUBLIC_UMAMI_SRC`, rien n’est injecté.
- Ajoute-les dans `.env.local` pour le dev, et dans Render/Vercel (Environment Variables) pour la prod.

## 4) Exemple `.env.local`
```
NEXT_PUBLIC_UMAMI_WEBSITE_ID=ton-uuid-ici
NEXT_PUBLIC_UMAMI_SRC=https://analytics.umami.is/script.js
# NEXT_PUBLIC_UMAMI_HOST=https://analytics.umami.is (optionnel)
```

## 5) Auto-héberger Umami sur Render (résumé rapide)
1. Créer une base Postgres sur Render (même région que le service Umami).  
2. Créer un Web Service depuis `https://github.com/umami-software/umami`.  
3. Build command : `corepack enable && pnpm install --frozen-lockfile && pnpm run build`.  
4. Start command : `pnpm run start`.  
5. Définir `DATABASE_URL` (Internal Database URL de Render).  
6. Déployer, ouvrir l’URL Umami, se connecter (admin/umami) puis changer le mot de passe.  
7. Dans l’admin Umami, créer un “Website” → récupérer l’ID + l’URL du script.  
8. Reporter ces deux valeurs dans le service `my-exams` :  
   - `NEXT_PUBLIC_UMAMI_WEBSITE_ID=<UUID>`  
   - `NEXT_PUBLIC_UMAMI_SRC=https://<url-umami>/script.js`

## 6) Auto-héberger Umami sur Vercel (résumé rapide)
1. Cloner le repo Umami (ou utiliser le template Vercel).  
2. Créer une base Postgres (ex. Neon, Supabase, Render).  
3. Déployer sur Vercel avec l’env `DATABASE_URL`.  
4. Dans l’admin Umami, créer un “Website” → récupérer l’ID + URL du script.  
5. Reporter ces deux valeurs dans ton `.env` de l’app.

## 7) Tracking d’événements
- Helper dispo : `src/lib/analytics.ts` → `trackEvent("event", { props })`.  
- Aucun tracking n’est émis tant que les env ci-dessus ne sont pas présentes.

Avec ces env en place, Umami sera activé automatiquement (script injecté) et prêt à collecter les pages/événements.
