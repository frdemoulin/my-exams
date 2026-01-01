# PRD — My Exams (v1 → v2)

## 1. Contexte et objectif

Ce document formalise la vision produit, les choix structurants et la feuille de route de **My Exams**.

Il sert de **référentiel unique** pour :
- cadrer l’évolution du produit jusqu’à septembre 2026 ;
- exploiter une v1 “Examens” déjà en production ;
- préparer un écosystème complet (parcours, dashboard, droits) sans dette technique ni produit.

---

## 2. Vision produit

### Vision long terme
Offrir un environnement clair, fiable et progressif permettant aux élèves et étudiants de :
- se confronter à des **examens réels**,
- structurer leur préparation,
- suivre leur progression,
du collège aux études supérieures.

### Positionnement
- académique, sérieux, sans artifices marketing ;
- centré sur les exigences réelles des examens ;
- complémentaire du travail des enseignants.

---

## 3. Segments utilisateurs

### Segments cibles
- Collégiens (préparation brevet)
- Lycéens (seconde à terminale)
- Candidats au baccalauréat
- Étudiants PASS / LAS (à moyen terme)

### Principe structurant
Un utilisateur n’est pas défini par son âge, mais par son **intention immédiate** :
- se tester,
- s’entraîner,
- suivre sa progression.

---

## 4. Problème utilisateur principal

Les élèves disposent d’annales :
- dispersées,
- peu structurées,
- sans continuité d’usage,
- sans vision de progression.

**My Exams répond d’abord à ce besoin**, avant toute ambition pédagogique à grande échelle.

---

## 5. Produit v1 — Plateforme Examens

### Périmètre v1 (actuel)
- consultation de sujets officiels (brevet, bac) ;
- accès simple aux annales ;
- corrections associées ;
- navigation par diplôme, matière, session.

### Objectif v1
Devenir le **réflexe simple** pour “faire un vrai sujet d’examen”.

### Hors périmètre v1
- QCM ;
- parcours pédagogiques complets ;
- abonnements payants ;
- dashboard avancé ;
- classement ou compétition.

---

## 6. Stratégie d’évolution : double track

### Track A — Exploitation Examens (janvier → juin 2026)
Objectif : usage, feedback, traction.

- enrichissement du catalogue d’annales ;
- amélioration UX “faire un sujet” ;
- SEO (pages indexables par diplôme/matière) ;
- instrumentation légère des usages.

### Track B — Construction de l’écosystème (en parallèle)
Objectif : préparer septembre 2026 sans bloquer la v1.

- dashboard unifié (masqué ou progressif) ;
- système de droits (entitlements) ;
- notion de parcours ;
- continuité d’activité utilisateur.

---

## 7. Parcours (vision cible)

Les parcours représentent ce que l’utilisateur achètera à terme, mais peuvent exister gratuitement en phase d’amorçage.

### Parcours définis
- Parcours Collège (incluant brevet)
- Parcours Lycée
- Parcours Bac (focus examen)
- Parcours PASS / LAS
- Parcours MMOPK (hors périmètre court terme)

Un parcours = **une promesse + des droits**, jamais une plateforme.

---

## 8. Entitlements (droits d’accès)

### Principe
- les plateformes ne connaissent pas les abonnements ;
- elles vérifient uniquement des **droits atomiques** ;
- les droits sont cumulables, traçables, activables/désactivables.

### Exemples
- `exam.bac.read`
- `exam.bac.white`
- `training.science.access`

Les droits peuvent être :
- gratuits (phase actuelle) ;
- associés à un parcours ;
- accordés temporairement (beta, support).

---

## 9. Dashboard unifié (vision)

### Rôle
Point d’entrée unique dans l’écosystème.

### Objectifs UX
- éviter les mauvais choix (exercices vs examens) ;
- traduire les droits en actions claires ;
- favoriser la rétention et la continuité.

### Structure cible
1. 🎯 Mon objectif actuel  
2. 🧠 S’entraîner  
3. 📝 Se tester  
4. 📊 Suivre mes progrès  
5. 🔄 Continuer là où je me suis arrêté  

Le dashboard peut être introduit progressivement, même si toutes les fonctionnalités ne sont pas actives.

---

## 10. Métriques de succès

### North Star Metric
Nombre d’utilisateurs revenant **au moins 3 fois en 14 jours**.

### Indicateurs secondaires
- nombre de sujets commencés / terminés ;
- temps passé par matière ;
- récurrence hebdomadaire ;
- part des utilisateurs avec compte.

---

## 11. Roadmap synthétique

### Janvier – Février 2026
- stabilisation Examens v1 ;
- instrumentation basique ;
- modèles entitlements en base ;
- endpoint `/api/me/entitlements`.

### Mars – Avril 2026
- dashboard v1 minimal ;
- continuité d’activité utilisateur ;
- amélioration UX examens (chrono, reprise).

### Mai – Juin 2026
- focus croissance (SEO, partage) ;
- parcours gratuits visibles ;
- collecte de feedback.

### Été 2026
- consolidation technique ;
- préparation lancement écosystème ;
- premiers contenus d’entraînement si disponibles.

### Septembre 2026
- lancement officiel des parcours ;
- activation progressive du modèle payant ;
- ouverture vers QCM / santé (si confirmé).

---

## 12. Hors périmètre explicite

- pas de refonte complète de la plateforme Examens avant septembre 2026 ;
- pas de promesse pédagogique non tenue ;
- pas de monétisation prématurée ;
- pas de multiplication de plateformes visibles.

---

## 13. Risques identifiés

- dispersion produit si le dashboard arrive trop tôt ;
- surcharge UX si trop de concepts sont exposés ;
- dépendance excessive au contenu pédagogique ;
- sous-estimation de l’importance du SEO.

---

## 14. Décisions actées

- un seul repo ;
- une seule base de données ;
- plateforme Examens gratuite jusqu’à juin 2026 ;
- montée en puissance progressive vers un écosystème complet.

---

**Statut : PRD v1 — validé comme référence produit**
