# My Exams — Authentification par lien magique

> **Document de référence technique & conformité**  
> Destiné à : Codex / développeurs  
> Contexte : application *my-exams*, public jeune, mobile-first, sans mot de passe

---

## 1. Objectifs

- Fournir une **authentification simple, sans mot de passe**, adaptée à un public jeune
- Garantir un **niveau de sécurité proportionné au risque** (CNIL / ANSSI)
- Éviter toute friction inutile à l’inscription / connexion
- Préparer l’évolution future vers SSO / passkeys

---

## 2. Principes de conformité (CNIL / ANSSI)

### 2.1 Principes clés appliqués

- **Authentification sans mot de passe** autorisée si le niveau de risque est maîtrisé
- **Durée de validité courte** des secrets d’authentification
- **Usage unique** des jetons
- **Absence d’énumération des comptes**
- **Collecte minimale de données** (RGPD, public mineur)
- **Journalisation proportionnée** (sécurité sans traçage excessif)

> Références conceptuelles :  
> – CNIL : sécurité adaptée au risque, authentification forte quand nécessaire  
> – ANSSI : secret à durée de vie courte, protection contre le rejeu, limitation des tentatives

---

## 3. Périmètre fonctionnel du lien magique

Le lien magique est utilisé pour :
- Connexion d’un utilisateur existant
- Création **just-in-time** d’un compte si l’email n’existe pas
- Vérification implicite de l’adresse email

Il **ne sert pas** :
- à la récupération de mot de passe (il n’y a pas de mot de passe)
- à des actions sensibles (suppression compte, export massif) sans re-auth

---

## 4. Parcours utilisateur (résumé)

1. L’utilisateur saisit son email
2. Le système génère un lien magique
3. Un email transactionnel est envoyé
4. L’utilisateur clique sur le lien (ou saisit un code)
5. Le jeton est validé
6. Une session sécurisée est créée

Message affiché côté UI (toujours identique) :  
> *« Si un compte correspond à cet email, un lien de connexion vient de t’être envoyé. »*

---

## 5. Spécifications de sécurité

### 5.1 Jeton de connexion

- Aléa cryptographique ≥ **128 bits**
- Généré côté serveur
- Stocké **haché** en base (SHA-256 ou équivalent)
- Associé à :
  - email
  - date d’expiration
  - statut (valide / consommé / expiré)

### 5.2 Durée de validité

- **10 à 15 minutes maximum**
- Usage unique
- Invalidation automatique si un nouveau lien est demandé pour le même email

### 5.3 Protection contre les abus

- Rate limiting :
  - par IP
  - par email
- Cooldown sur renvoi du lien (ex : 60 secondes)
- CAPTCHA soft uniquement en cas d’abus détecté

---

## 6. Contenu de l’email (transactionnel)

### 6.1 Objet

`Ton lien de connexion My Exams (valide 15 min)`

### 6.2 Corps du message (texte recommandé)

Bonjour,

Tu as demandé à te connecter à **My Exams**.

👉 **Clique sur le bouton ci-dessous pour te connecter**  
(valide 15 minutes – usage unique)

[Se connecter à My Exams]

🔐 **Code alternatif** (si le lien ne s’ouvre pas sur le bon appareil) :  
`123456`

Si tu n’es pas à l’origine de cette demande, **ignore ce message**. Aucune action ne sera effectuée.

Conseils de sécurité :
- Ne transfère pas ce message
- Vérifie que l’adresse du site commence par `https://` et correspond bien à My Exams

— My Exams

### 6.3 Bonnes pratiques email

- Email **strictement transactionnel** (pas de tracking marketing)
- Domaine clairement identifiable
- Lien HTTPS explicite
- Lien vers la politique de confidentialité en pied de mail

---

## 7. Modèle de données (évolutions en base)

### 7.1 Collection / table `users`

Champs minimum :

- `id` (UUID)
- `email` (unique, nullable = false)
- `createdAt`
- `lastLoginAt`
- `status` (`active`, `pending`, `disabled`)
- `roles` (`USER`, `ADMIN`) — **par défaut `USER`**, promotion explicite en `ADMIN` uniquement si besoin (backoffice).

> Implémentation My Exams : pour promouvoir un compte en admin (dev/prod), utiliser le script `npm run user:role -- --email "<email>" --role ADMIN`.

---

### 7.2 Collection / table `magic_link_tokens`

- `id`
- `email`
- `tokenHash`
- `expiresAt`
- `usedAt` (nullable)
- `createdAt`
- `ipTruncated` (optionnel)
- `userAgent` (optionnel)

Index recommandés :
- `email`
- `expiresAt`

---

## 8. Création de compte « just-in-time »

- Aucun compte n’est créé à la demande du lien
- Le compte est créé **uniquement lors de la validation du jeton**
- Le compte est alors considéré comme :
  - email vérifié
  - authentifié

Cela évite :
- la création de comptes fantômes
- l’énumération des utilisateurs

---

## 9. Session utilisateur

- Cookie de session sécurisé :
  - `HttpOnly`
  - `Secure`
  - `SameSite=Lax` (ou Strict)
- Rotation de session à chaque connexion
- Expiration raisonnable (ex : 7 à 30 jours)

---

## 10. Journalisation & audit

À journaliser :
- création d’un lien magique
- validation réussie
- échec (token expiré / invalide)

À ne pas journaliser :
- token en clair
- contenu de l’email

Les logs sont conservés pour une **durée limitée** (sécurité uniquement).

### Implémentation My Exams

- Table `AuthLog` : actions `SIGN_IN` / `SIGN_OUT` avec `userId`, `provider`, `createdAt`.
- Durée de conservation : **180 jours** par défaut (paramétrable via `AUTH_LOG_RETENTION_DAYS`).
- Nettoyage automatique recommandé via un cron :
  - Commande : `npm run auth:logs:cleanup`
  - Exemple fréquence : 1 fois/jour.

---

## 11. Évolutions futures prévues

- Ajout de fournisseurs SSO (Google, Apple, Microsoft)
- Passkeys (WebAuthn) pour les utilisateurs avancés
- Re-auth obligatoire pour actions sensibles

---

## 12. Synthèse

Le lien magique est le **mécanisme d’authentification principal** de *my-exams*.

Il permet :
- une UX fluide et moderne
- une conformité CNIL / ANSSI
- une montée en charge progressive

👉 Toute implémentation doit respecter strictement :
- la durée de validité courte
- l’usage unique
- l’absence d’énumération
- la sobriété des données collectées
