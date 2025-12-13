# My-Exams — Arborescence App Router (Next.js 16) + Stratégie SSG / ISR / API
**Objectif :** définir une arborescence de routes stable et une stratégie de rendu/caching (SSG/ISR/API) pour un moteur d’annales basé sur MongoDB Atlas, optimisée pour un hébergement type Cloudflare Pages/Workers ou Vercel.

> Hypothèses MVP :
> - Pas de comptes utilisateurs au début (pas de personnalisation).
> - Les contenus évoluent par lots (import d’annales / seeds), pas à la seconde.
> - Recherche = filtres (diplôme/matière/niveau/thème/année/difficulté) + pagination + tri.
> - Le front doit rester **majoritairement statique** (SSG/ISR) pour coût/perf.

---

## 1) Convention de rendu
### 1.1 SSG (statique)
- Pages de marketing, pages d’aide, pages “index” très stables.
- Export recommandé :
  - `export const dynamic = "force-static";`

### 1.2 ISR (statique régénéré)
- Pages de catalogue/listing et pages “détail exercice/annale” (données publiques).
- Export recommandé :
  - `export const revalidate = 3600;` (à ajuster)
  - et **ne pas** mettre `force-dynamic`.

### 1.3 API Routes (Route Handlers)
- Toute lecture MongoDB “on demand” :
  - recherche filtrée,
  - suggestions/autocomplete,
  - facets (compteurs),
  - sitemap dynamique (option),
  - webhooks d’invalidation (option).
- Caching : utiliser `Cache-Control` + éventuellement cache applicatif (KV/R2/redis selon hébergeur) si nécessaire.

---

## 2) Arborescence de routes (exacte)
Arborescence recommandée dans `src/app` :

