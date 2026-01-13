# My Exams — Documentation produit

Ce dossier contient la **source de vérité produit** de My Exams.

Il formalise :
- la vision,
- le périmètre,
- les priorités,
- et les décisions actées.

Toute évolution du produit doit être cohérente avec ces documents.

---

## Documents de référence

### Documents de pilotage (font foi)
Ces documents servent à l’arbitrage et à la priorisation.

- **PRD.md**  
  Vision produit, périmètre, décisions structurantes.

- **backlog-v1.md**  
  Plan d’exécution dérivé du PRD (priorités P0 / P1 / P2).

---

### Documents de conception (référence cible)
Ces documents décrivent l’architecture produit cible.
Ils servent de guide, mais **ne définissent pas les priorités court terme**.

- **01-brand-platforms.md**  
  Architecture globale de l’écosystème et des plateformes.

- **02-subscription-catalog-v1.md**  
  Catalogue des parcours (abonnements) et promesses associées.

- **03-entitlements-matrix-v1.md**  
  Modélisation des droits (entitlements) et mappings parcours ↔ accès.

- **04-unified-dashboard-v1.md**  
  UX cible du dashboard unifié (entrée unique du produit).

---

### Docs techniques associées
Documents utiles pour la mise en œuvre côté dev.

- **docs/development/entitlements.md**  
  Guide technique v1 sur les droits (entitlements), endpoint et seeds.

---

### Vocabulaire
Glossaire des termes utilisés dans le PRD et le backlog.

- **vocabulaire.md**  
  Définition des termes (PRD, backlog, P0/P1/P2, epic, etc.).

---

## Règle d’utilisation

- En cas de conflit : **PRD > backlog > conception**
- Aucun développement ne doit être engagé uniquement sur la base des fichiers 01–04.

---

## Règles produit non négociables

1. **La plateforme Examens est prioritaire jusqu’à juin 2026**
2. **Aucune refonte globale avant septembre 2026**
3. **Pas de QCM, pas de paiement, pas de classement en v1**
4. **Un seul repo, une seule base**
5. **Les plateformes ne sont pas vendues : seuls les parcours le seront**
6. **Toute nouvelle fonctionnalité doit servir l’usage réel des examens**

---

## Boussole produit (à toujours garder en tête)

> My Exams doit être l’endroit le plus simple et le plus fiable pour  
> **faire un vrai sujet d’examen, comprendre ses erreurs, et y revenir.**
