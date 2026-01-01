# Backlog v1 — My Exams (janvier → septembre 2026)

Ce backlog est dérivé du PRD v1.  
Il sert de **plan d’exécution pragmatique**, en priorisant :
- la stabilité et l’usage de la plateforme Examens jusqu’à juin 2026 ;
- la préparation progressive de l’écosystème (dashboard, entitlements) pour septembre 2026.

---

## Légende des priorités
- **P0** : indispensable (valeur immédiate ou risque fort)
- **P1** : structurant (prépare l’avenir, invisible utilisateur)
- **P2** : préparatoire (peut attendre, faible risque)

---

# EPIC 1 — Consolider la plateforme Examens v1 (P0)

## Objectif
Garantir une expérience fluide, robuste et crédible pour l’expérimentation gratuite jusqu’aux examens de juin.

### IN
- UX “faire un sujet”
- lisibilité des corrections
- navigation claire
- SEO basique

### OUT
- refonte graphique globale
- nouvelles plateformes
- logique payante

---

### US-1.1 — Navigation claire par diplôme / matière / session
**Priorité : P0**  
- pages dédiées et indexables
- URLs stables
- cohérence du fil d’Ariane

**Critères de succès**
- un utilisateur accède à un sujet en < 3 clics
- pages indexables par Google

---

### US-1.2 — Améliorer l’expérience “faire un sujet”
**Priorité : P0**  
- mode lecture confortable (scroll, zoom, pages)
- accès rapide à la correction
- retour simple à la liste des sujets

**Critères de succès**
- pas de confusion sujet / correction
- pas de perte de contexte

---

### US-1.3 — Corrections exploitables
**Priorité : P0**  
- affichage lisible
- ancrage page / exercice
- séparation claire énoncé / correction

---

### US-1.4 — SEO minimal mais propre
**Priorité : P0**  
- balises title / description
- pages par diplôme et matière
- pas de contenu dupliqué évident

---

# EPIC 2 — Continuité utilisateur & rétention (P0)

## Objectif
Augmenter la valeur perçue **sans ajouter de contenu pédagogique**, en donnant une sensation de continuité.

### IN
- activité utilisateur minimale
- “continuer là où je me suis arrêté”
- compte utilisateur utile

### OUT
- analytics lourdes
- scoring avancé
- gamification

---

### US-2.1 — Tracer l’activité minimale utilisateur
**Priorité : P0**  
- dernier sujet consulté
- dernier examen commencé
- dernière matière travaillée

**Notes**
- stockage simple (`UserActivity`)
- pas d’IA, pas d’algorithme

---

### US-2.2 — Bloc “Continuer là où je me suis arrêté”
**Priorité : P0**  
- lien direct vers la dernière activité
- affiché après connexion

**Critères de succès**
- réduction du temps pour reprendre une révision
- augmentation des retours hebdomadaires

---

### US-2.3 — Compte utilisateur comme facilitateur
**Priorité : P0**  
- compte requis pour la continuité
- pas d’obligation de paiement
- discours clair “pourquoi créer un compte”

---

# EPIC 3 — Fondations écosystème (entitlements) (P1)

## Objectif
Préparer les parcours et le modèle économique **sans impact visible** sur la v1.

### IN
- modèles DB
- API de droits
- baseline gratuite

### OUT
- Stripe / paiement
- paywall
- UX d’abonnement

---

### US-3.1 — Modèles entitlements en base
**Priorité : P1**  
- `Entitlement`
- `SubscriptionPlan`
- `UserEntitlement`
- `UserSubscription`

**Critères de succès**
- modèles en production sans effet de bord
- aucune dépendance avec Examens v1

---

### US-3.2 — Endpoint `/api/me/entitlements`
**Priorité : P1**  
- retourne les droits effectifs
- baseline : accès gratuit total

---

### US-3.3 — Guards backend par entitlement
**Priorité : P1**  
- fonction `assertEntitlement()`
- non utilisée pour bloquer en v1
- prête pour v2

---

# EPIC 4 — Dashboard unifié v1 (P2)

## Objectif
Poser l’entrée unique du futur produit **sans dépendre du contenu**.

### IN
- structure UX minimale
- accès masqué / beta
- lecture des droits

### OUT
- logique pédagogique
- entraînement/QCM
- refonte complète de la navigation

---

### US-4.1 — Route `/dashboard` (ou `/hub`)
**Priorité : P2**  
- page dédiée
- non indexée
- accessible uniquement aux comptes autorisés (flag)

---

### US-4.2 — Bloc “Mon objectif actuel”
**Priorité : P2**  
- affichage basé sur dernier usage
- pas de paramétrage complexe

---

### US-4.3 — Bloc “Se tester”
**Priorité : P2**  
- lien vers Examens
- visible selon droits

---

### US-4.4 — Bloc “Continuer”
**Priorité : P2**  
- réutilise l’activité utilisateur (EPIC 2)

---

# Hors backlog v1 (explicite)

- QCM santé
- entraînement pédagogique massif
- classement / compétition
- paiement / abonnements payants
- refonte graphique globale
- micro-parcours par chapitre

---

# Jalons temporels

## Janvier – Février 2026
- EPIC 1 (Examens v1)
- EPIC 2 (Continuité)

## Mars – Avril 2026
- fin EPIC 2
- EPIC 3 (fondations écosystème)

## Mai – Juin 2026
- stabilisation
- croissance SEO
- début EPIC 4 (optionnel)

## Été 2026
- consolidation
- préparation lancement septembre

---

**Statut : Backlog v1 — prêt pour implémentation**
