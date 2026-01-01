# Instrumentation analytics (Umami, gratuit / self-host)

## Principe
Umami est un outil d’analytics respectueux du RGPD, sans cookies par défaut, déployable gratuitement (Render/Vercel + base Postgres). Il suffit d’injecter son script avec l’ID de site.

## Variables d’environnement
- `NEXT_PUBLIC_UMAMI_WEBSITE_ID` : UUID du site Umami (obligatoire pour activer).
- `NEXT_PUBLIC_UMAMI_SRC` : URL du script Umami (ex : `https://analytics.example.com/script.js`).
- `NEXT_PUBLIC_UMAMI_HOST` : optionnel, host de l’instance (si différent du domaine du script).
- `UMAMI_SHARE_URL` : lien de partage Umami pour afficher le dashboard dans l’admin.
- `UMAMI_DASHBOARD_URL` : optionnel, URL Umami pour ouvrir le dashboard complet.
- `ALLOWED_FRAME_URLS` : côté service Umami, autorise l’iframe (ex : `https://my-exams.onrender.com http://localhost:3000`).

Si `NEXT_PUBLIC_UMAMI_WEBSITE_ID` et `NEXT_PUBLIC_UMAMI_SRC` sont définis, le script est injecté dans `src/app/layout.tsx`.

## Helper d’événements
- `src/lib/analytics.ts` expose `trackEvent(event, data?)` (client) et `trackPageview(url?)`. Usage typique :
```ts
import { trackEvent } from "@/lib/analytics";

function onSearch(term: string) {
  trackEvent("search", { term });
}
```

## Déploiement
1. Créer une instance Umami (SaaS ou self-host Render/Vercel + base Postgres).
2. Récupérer l’ID de site et l’URL du script (dashboard Umami).
3. Définir les variables d’environnement ci-dessus (Render/Vercel env + `.env.local` pour le dev).

Pour le pas-à-pas (Render, Supabase pooler, TLS), voir `docs/development/analytics-umami-setup.md`.

Sans ces variables, Umami n’est pas injecté (aucun impact). EOF
