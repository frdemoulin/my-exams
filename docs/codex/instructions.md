# Instructions pour Codex — Reprise du projet My Exams

Ce document définit le cadre strict dans lequel Codex intervient sur le projet **My Exams**.

Toute intervention (implémentation, refactor, ajout de fonctionnalités) doit être
cohérente avec la documentation produit présente dans le repo.

---

## Documents de référence (hiérarchie)

### 1. Documents de pilotage (font foi)

Ces documents définissent la vision, le périmètre et les priorités.
En cas de conflit ou d’arbitrage, **ils prévalent sur tous les autres**.

- `docs/product/PRD.md`  
  Vision produit, objectifs, périmètre v1/v2, décisions structurantes.

- `docs/product/backlog-v1.md`  
  Plan d’exécution dérivé du PRD (priorités P0 / P1 / P2).

---

### 2. Documents de conception (référence cible)

Ces documents décrivent la **cible produit** (architecture, parcours, droits, UX).
Ils servent de guide conceptuel, mais **ne définissent pas les priorités court terme**.

- `docs/product/01-brand-platforms.md`  
  Architecture globale de l’écosystème et des plateformes.

- `docs/product/02-subscription-catalog-v1.md`  
  Catalogue des parcours (abonnements) et promesses associées.

- `docs/product/03-entitlements-matrix-v1.md`  
  Modélisation des droits (entitlements) et mappings parcours ↔ accès.

- `docs/product/04-unified-dashboard-v1.md`  
  UX cible du dashboard unifié (entrée unique du produit).

---

### Règle d’arbitrage
En cas de divergence :
**PRD → backlog → documents 01–04**

Aucun développement ne doit être engagé uniquement sur la base des documents
`01–04` sans validation explicite par le backlog.

---

## Contexte actuel du projet

- La plateforme **Examens v1 est déjà en production (Render)**.
- Objectif court terme : **maximiser l’usage réel jusqu’aux examens de juin**.
- Objectif moyen terme : **préparer l’écosystème complet pour septembre 2026**.
- Le contenu pédagogique avancé (QCM, entraînement massif) n’est pas encore disponible.

---

## Priorités absolues (P0)

Codex doit concentrer ses efforts sur les items **P0 du backlog**.

### 1. Consolider la plateforme Examens v1
- UX fluide pour “faire un sujet d’examen”
- navigation claire par diplôme / matière / session
- corrections lisibles et exploitables
- SEO propre et indexable

> Toute fonctionnalité qui n’améliore pas directement l’usage réel
> de la plateforme Examens est hors priorité.

---

### 2. Continuité utilisateur
- traçage minimal de l’activité utilisateur
- reprise “là où je me suis arrêté”
- compte utilisateur justifié par la continuité, pas par le paiement

---

## Travaux autorisés mais invisibles utilisateur (P1)

Codex peut implémenter, sans impact visible pour l’utilisateur :

- modèles de données pour les entitlements (droits)
- endpoint `/api/me/entitlements`
- guards backend associés (`assertEntitlement()`)

⚠️ Ces éléments **ne doivent pas bloquer l’accès** en v1
(baseline gratuite).

---

## Dashboard unifié

- Peut être amorcé **uniquement comme squelette**
- Route dédiée (`/dashboard` ou `/hub`)
- Accès masqué (feature flag / beta)
- Pas de logique pédagogique
- Pas de dépendance au contenu non existant

---

## Ce qui est explicitement interdit à ce stade

❌ QCM  
❌ entraînement pédagogique massif  
❌ paiement / Stripe / abonnements  
❌ classement / compétition  
❌ refonte graphique globale  
❌ multiplication de plateformes visibles  
❌ promesses pédagogiques non tenues  

---

## Règle d’or

> Tant que la plateforme Examens n’est pas irréprochable pour un élève
> qui veut faire un vrai sujet d’examen,
> **aucune autre priorité ne doit être traitée.**

---

## Attendus de Codex

- respecter strictement les priorités P0 / P1 / P2
- ne pas sur-architecturer
- privilégier des implémentations simples et robustes
- signaler toute divergence avec le PRD ou le backlog avant implémentation

---

**Statut : document contractuel de reprise**
