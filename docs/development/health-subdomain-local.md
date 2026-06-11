# Santé : page d’accueil et sous-domaine local

## Variables locales

Ajouter dans `.env.local` :

```bash
AUTH_REDIRECT_PROXY_URL=http://localhost:3000/api/auth
AUTH_COOKIE_DOMAIN=.lvh.me
APP_HOST=app.lvh.me
HEALTH_HOST=sante.lvh.me
HEALTH_PUBLIC_URL=http://sante.lvh.me:3000
```

`lvh.me` pointe vers `127.0.0.1`, donc aucun fichier hosts n’est nécessaire pour ce test local.
Utiliser `app.lvh.me` à la place de `localhost` permet au cookie de session `.lvh.me`
d’être partagé avec `sante.lvh.me`.

Ne pas définir `AUTH_URL` ou `NEXTAUTH_URL` en local : Auth.js doit détecter le
host courant. `AUTH_REDIRECT_PROXY_URL` conserve le callback OAuth
`http://localhost:3000/api/auth/callback/<provider>`, déjà autorisé chez les
providers, puis renvoie vers le host ayant initié la connexion.

## Lancer l’application

```bash
npm run dev
```

## URLs à vérifier

- `http://localhost:3000/sante`
- `http://app.lvh.me:3000/log-in`
- `http://sante.lvh.me:3000`
- `http://sante.lvh.me:3000/log-in?callbackUrl=/admin`
- `http://sante.lvh.me:3000/admin/health/institutions`
- `http://sante.lvh.me:3000/colles`
- `http://sante.lvh.me:3000/ue`
- `http://sante.lvh.me:3000/annales`
- `http://sante.lvh.me:3000/examens-blancs`

## Comportement attendu

- `http://localhost:3000/sante` affiche la page Santé.
- `http://sante.lvh.me:3000` affiche la même page sans exposer `/sante` dans l’URL publique.
- Les chemins du sous-domaine sont réécrits en interne vers `/sante/...`.
- `/log-in` et `/admin/...` restent des routes applicatives communes et ne sont
  pas réécrites vers `/sante/...`.
- Après connexion depuis Santé, l’utilisateur revient sur le BO du même
  sous-domaine.
- Les exclusions existantes restent inchangées pour `/_next`, `/api`, `favicon.ico`, `robots.txt`, `sitemap.xml`, `manifest.json` et les fichiers publics.
- Le nettoyage du préfixe `/fr` continue de s’appliquer avant le routage Santé.

## Production

Pour partager la session entre le domaine principal et Santé, les deux hosts
doivent appartenir au même domaine parent :

```bash
AUTH_URL=https://app.exemple.fr
AUTH_COOKIE_DOMAIN=.exemple.fr
APP_HOST=app.exemple.fr
HEALTH_HOST=sante.exemple.fr
HEALTH_PUBLIC_URL=https://sante.exemple.fr
```

`AUTH_COOKIE_DOMAIN` doit rester limité au domaine parent contrôlé par
l’application. Seul le cookie de session est partagé entre les hosts de ce
domaine parent. Les cookies OAuth temporaires restent propres au host ayant
initié la connexion.

`localhost` n’appartient pas à `.lvh.me` : une connexion depuis
`http://localhost:3000` reste donc propre à localhost, tandis qu’une connexion
depuis `app.lvh.me` ou `sante.lvh.me` partage la session entre ces deux hosts.
