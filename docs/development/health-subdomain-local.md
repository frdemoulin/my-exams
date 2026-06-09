# Santé : page d’accueil et sous-domaine local

## Variables locales

Ajouter dans `.env.local` :

```bash
APP_HOST=localhost
HEALTH_HOST=sante.lvh.me
HEALTH_PUBLIC_URL=http://sante.lvh.me:3000
```

`lvh.me` pointe vers `127.0.0.1`, donc aucun fichier hosts n’est nécessaire pour ce test local.

## Lancer l’application

```bash
npm run dev
```

## URLs à vérifier

- `http://localhost:3000/sante`
- `http://sante.lvh.me:3000`
- `http://sante.lvh.me:3000/colles`
- `http://sante.lvh.me:3000/ue`
- `http://sante.lvh.me:3000/annales`
- `http://sante.lvh.me:3000/examens-blancs`

## Comportement attendu

- `http://localhost:3000/sante` affiche la page Santé.
- `http://sante.lvh.me:3000` affiche la même page sans exposer `/sante` dans l’URL publique.
- Les chemins du sous-domaine sont réécrits en interne vers `/sante/...`.
- Les exclusions existantes restent inchangées pour `/_next`, `/api`, `favicon.ico`, `robots.txt`, `sitemap.xml`, `manifest.json` et les fichiers publics.
- Le nettoyage du préfixe `/fr` continue de s’appliquer avant le routage Santé.
