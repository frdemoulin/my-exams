# Vocabulaire projet — My Exams

Ce document clarifie les termes clés utilisés dans le PRD et le backlog.

---

## Documents

- **PRD (Product Requirements Document)**  
  Document de cadrage produit : vision, périmètre, objectifs, décisions structurantes.

- **backlog-v1**  
  Plan d’exécution dérivé du PRD, avec priorités **P0 / P1 / P2**.

- **Documents de conception (01–04)**  
  Décrivent la **cible** (architecture, parcours, droits, UX) mais **ne fixent pas les priorités**.

---

## Priorités

- **P0** : indispensable, valeur immédiate ou risque fort.  
- **P1** : structurant, prépare l’avenir, invisible utilisateur.  
- **P2** : préparatoire, peut attendre, faible risque.  
- **OUT** : explicitement hors périmètre (ne pas lancer sans validation).

**Exemples (issus du backlog)**  
- **P0** : “US‑1.1 Navigation claire par diplôme/matière/session”.  
- **P1** : “US‑3.1 Modèles entitlements en base”.  
- **P2** : “US‑4.1 Route /dashboard (squelette)”.  
- **OUT** : “analytics lourdes”.

---

## Structuration du backlog

- **Epic** : grand thème qui regroupe plusieurs user stories.  
- **User Story (US-x.y)** : élément actionnable avec objectifs et critères de succès.  
- **Critères de succès** : conditions mesurables pour considérer l’item “fait”.

**Exemples**  
- **Epic** : “EPIC 1 — Consolider la plateforme Examens v1”.  
- **User Story** : “US‑1.2 Améliorer l’expérience ‘faire un sujet’”.  
- **Critères de succès** : “pas de confusion sujet/correction”.

---

## Concepts produit

- **Plateforme Examens v1** : l’app principale en production (sujets, corrections, navigation).  
- **Continuité utilisateur** : reprise “là où je me suis arrêté” (activité minimale).  
- **Entitlements** : droits d’accès (modèles préparatoires, baseline gratuite en v1).  
- **Parcours / abonnements** : offres futures, décrites dans le catalogue (02).  
- **Dashboard unifié** : futur point d’entrée unique (squelette autorisé, P2).  
- **Feature flag / beta** : accès masqué pour tester sans impact public.

**Exemples**  
- **Plateforme Examens v1** : page “Sujets d’examen” + corrections lisibles.  
- **Continuité utilisateur** : “continuer là où je me suis arrêté”.  
- **Entitlements** : accès gratuit total en v1, prêts pour v2.  
- **Dashboard unifié** : route `/dashboard` masquée (P2).  

---

## Règles d’arbitrage

- Priorité des sources : **PRD > backlog > documents 01–04**.  
- Toute implémentation **hors P0** doit être **signalée et validée** avant lancement.
