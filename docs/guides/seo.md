# SEO (sitemap + robots)

Ce guide documente la mise en place SEO minimale pour My Exams.
Objectif: rendre les pages "diplomes / matieres / sessions" indexables.

---

## Pages indexables

Les pages publiques a indexer sont:

- `/` (accueil)
- `/diplomes`
- `/diplomes/{diplomaId}`
- `/diplomes/{diplomaId}/matieres/{subjectId}`
- `/diplomes/{diplomaId}/matieres/{subjectId}/sessions/{sessionYear}`

Ces pages sont liees aux sujets existants en base.

---

## Sitemap

Le sitemap est genere par Next.js via:

- `src/app/sitemap.ts`

Principes:

- les URLs sont construites a partir des sujets d'examen disponibles
- les pages statiques utiles sont ajoutees (mentions legales, contact, etc.)
- `revalidate = 3600` (1h)

Base URL:

- `NEXT_PUBLIC_APP_URL` (prioritaire)
- sinon `NEXT_PUBLIC_SITE_URL`
- sinon `AUTH_URL`
- sinon fallback `http://localhost:3000`

---

## Robots

Le fichier robots est genere par:

- `src/app/robots.ts`

Regles:

- autorise tout le site
- bloque l'indexation de `/admin`
- declare le sitemap avec l'URL publique

---

## Verification rapide

- `GET /sitemap.xml`
- `GET /robots.txt`

En prod, verifier que la base URL renvoie le domaine public.

---

## Notes

- Pas de prefixe de locale (`/fr`) dans les URLs.
- Les routes sitemap/robots sont servies par l'app (pas besoin de fichier statique).

---

## Production (Render)

Pour que le sitemap declare la bonne URL publique:

1. Definir `NEXT_PUBLIC_APP_URL` dans les variables d'environnement Render.
2. Exemple: `https://my-exams.onrender.com`.
3. Redeployer pour que `/sitemap.xml` et `/robots.txt` refletent l'URL publique.
