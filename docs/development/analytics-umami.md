# Instrumentation analytics (Umami, gratuit / self-host)

## Principe
Umami est un outil d’analytics respectueux du RGPD, sans cookies par défaut, déployable gratuitement (Vercel + base). Il suffit d’injecter son script avec l’ID de site.

## Variables d’environnement
- `NEXT_PUBLIC_UMAMI_WEBSITE_ID` : UUID du site Umami (obligatoire pour activer).
- `NEXT_PUBLIC_UMAMI_SRC` : URL du script Umami (ex : `https://analytics.example.com/script.js`).
- `NEXT_PUBLIC_UMAMI_HOST` : optionnel, host de l’instance (si différent du domaine du script).

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
1. Créer une instance Umami (SaaS ou self-host Vercel + base MySQL/PlanetScale).
2. Récupérer l’ID de site et l’URL du script (dashboard Umami).
3. Définir les variables d’environnement ci-dessus (Vercel env + `.env.local` pour le dev).

Sans ces variables, Umami n’est pas injecté (aucun impact). EOF
