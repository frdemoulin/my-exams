Pour un déploiement sur Cloudflare (avec base prod dans Atlas), voici le minimum à renseigner dans les variables d’environnement du projet Cloudflare (Dashboard → Workers & Pages → ton projet → Settings → Environment Variables) :

DATABASE_URL : la connexion MongoDB Atlas complète (format mongodb+srv://user:password@cluster.mongodb.net/my-exams?retryWrites=true&w=majority). Crée l’utilisateur/DB dans Atlas, puis colle l’URI.
NEXTAUTH_SECRET : une valeur longue/unique (ex. openssl rand -hex 32) pour sécuriser NextAuth.
NEXTAUTH_URL : l’URL publique de ton site (ex. https://ton-domaine.pages.dev), utile pour NextAuth.
(Optionnel mais recommandé si tu utilises ces features) Clés OAuth : GOOGLE_CLIENT_ID/SECRET, FACEBOOK_CLIENT_ID/SECRET, etc. Sinon, laisse-les absentes et désactive ces providers.
(Optionnel, analytics) NEXT_PUBLIC_UMAMI_WEBSITE_ID et NEXT_PUBLIC_UMAMI_SRC si tu actives Umami. Sans elles, rien n’est injecté.
Une fois la base Atlas créée et ces variables renseignées, relance un build Cloudflare. Si tu as besoin d’aide pour générer l’URI Atlas ou pour un provider OAuth en particulier, dis-le-moi.