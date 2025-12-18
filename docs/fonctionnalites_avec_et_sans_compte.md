# My Exams — Fonctionnalités *sans compte* vs *avec compte*

## 1. Objectif du document

Ce document décrit la **stratégie fonctionnelle et UX** de *my-exams* concernant :
- l’usage **sans compte** (utilisateur anonyme),
- l’usage **avec compte** (connexion par lien magique / SSO),
- la montée en valeur progressive du compte, **sans mur d’inscription**.

Le public visé est **jeune (collège / lycée)**, mobile-first, peu tolérant à la friction. L’objectif est de maximiser l’adoption tout en garantissant la continuité des usages.

---

## 2. Principes directeurs

- 🟢 **Zéro friction à l’entrée** : aucune obligation de créer un compte pour utiliser le service.
- 🟡 **Compte = valeur ajoutée**, jamais une contrainte.
- 🔐 **Lien magique / SSO uniquement** (pas de mot de passe).
- 🧠 **Progressivité** : proposer la connexion au bon moment.
- 🧾 **Collecte minimale de données** (RGPD / public mineur).

---

## 3. Fonctionnalités accessibles **sans compte**

### 3.1 Accès & navigation
- 🔍 Recherche d’annales (diplôme, matière, thème, année)
- 🧭 Parcours libre des résultats
- 🏷️ Filtres (thème, difficulté estimée, durée)
- 👀 Consultation des métadonnées d’un sujet
- 🔗 Redirection vers les sites sources (si contenu non hébergé)

### 3.2 Aide au travail (locale)
- ⏱️ Estimation de durée de travail
- ⭐ Marquer un sujet comme “intéressant” (stockage local)
- 🧠 Historique de consultation local
- 🧩 Suggestions d’exercices similaires

### 3.3 Personnalisation légère (locale)
- 🌗 Thème clair / sombre
- 🎓 Choix du niveau par défaut (collège / lycée / spécialité)
- 🧭 Mémorisation des derniers filtres utilisés

### 3.4 Limites assumées
- ❌ Pas de synchronisation multi-appareils
- ❌ Données perdues en cas de changement d’appareil ou nettoyage du navigateur

> Message UX recommandé :  
> *« Ces favoris sont temporaires. Connecte-toi pour les sauvegarder. »*

---

## 4. Fonctionnalités accessibles **avec compte**

### 4.1 Sauvegarde & continuité
- ⭐ Favoris persistants
- 🔄 Synchronisation multi-appareils
- 📚 Historique long terme
- 🔁 Reprise automatique de la session

### 4.2 Suivi du travail
- ✅ Marquer un exercice comme “fait”
- ⏳ Comparaison durée estimée / durée réelle
- 📊 Progression par thème / matière
- 🏁 Indicateur simple de préparation à l’examen

### 4.3 Personnalisation avancée
- 🎯 Objectifs de révision (par thème ou matière)
- 🗓️ Planning léger (optionnel)
- 🔔 Rappels email (opt-in)
- 🧩 Recommandations personnalisées

### 4.4 Données & conformité
- 🔐 Données sauvegardées de manière sécurisée
- 🧾 Export des données personnelles (RGPD)
- 🗑️ Suppression du compte à la demande

---

## 5. Fonctionnalités avancées (évolutives)

Ces fonctionnalités peuvent être ajoutées ultérieurement pour renforcer l’engagement :

- 🧠 Analyse des points faibles
- 🧪 Mode “examen blanc”
- 🤝 Partage de listes de révision (amis / classe)
- 👨‍👩‍👧 Espace parent (lecture seule)
- 🏅 Badges, streaks, gamification légère

---

## 6. Matrice de synthèse

| Fonctionnalité | Sans compte | Avec compte |
|---------------|------------|-------------|
| Recherche & filtres | ✅ | ✅ |
| Consultation sujets | ✅ | ✅ |
| Favoris | ⚠️ Local | ✅ Synchronisé |
| Historique | ⚠️ Local | ✅ Long terme |
| Progression | ❌ | ✅ |
| Multi-appareils | ❌ | ✅ |
| Objectifs / stats | ❌ | ✅ |
| Rappels / suivi | ❌ | ✅ |

---

## 7. Pattern UX recommandé (incitation à la connexion)

### 7.1 Moments clés pour proposer la connexion
- Sauvegarde d’un favori
- Consultation répétée d’un même thème
- Volonté de suivre sa progression
- Changement d’appareil

### 7.2 Message recommandé

> *« Connecte-toi pour garder tes favoris, suivre ta progression et les retrouver partout. »*

Bouton unique : **Recevoir un lien de connexion**

---

## 8. Fusion “session anonyme → compte”

À la première connexion :
1. Détection d’une session anonyme existante
2. Récupération des données locales (favoris, historique)
3. Fusion automatique dans le compte utilisateur
4. Nettoyage du stockage local

Objectif : **aucune perte de données, expérience fluide et transparente**.

---

## 9. Recommandation finale

- Laisser **tout explorer sans compte**
- Rendre le compte **désirable, pas obligatoire**
- Positionner l’authentification comme un **outil de sauvegarde et de continuité**

👉 Cette approche maximise l’adoption, respecte le public jeune et prépare naturellement l’évolution vers des fonctionnalités avancées.

