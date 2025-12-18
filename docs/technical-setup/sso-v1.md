# Auth V1 (Google + Microsoft + Facebook + lien magique)

Cette checklist décrit **quoi configurer** côté providers (Google / Microsoft / Meta) et **comment activer le lien magique** (email), ainsi que **quelles variables** définir dans l’app (NextAuth/Auth.js).

Apple est **reporté en V2** (coût Apple Developer Program ≈ 99€/an). Voir `docs/technical-setup/sso-v2-apple.md`.

## 1) Prérequis communs (dev + prod)

### URLs de callback (règle générale)
Pour un provider `xxx`, l’URL de callback est :
- Dev : `http://localhost:3000/api/auth/callback/xxx`
- Prod : `https://<domaine-public>/api/auth/callback/xxx`

### Variables d’environnement Auth.js (obligatoires en prod)
À définir dans **Render → Service → Environment** :
- `AUTH_URL=https://<domaine-public>` (ex: `https://my-exams.onrender.com`)
- `AUTH_SECRET=<secret-long-aléatoire>`

Notes :
- `NEXTAUTH_URL` et `NEXTAUTH_SECRET` sont des alias historiques. Si tu les utilises, mets **exactement la même valeur** que `AUTH_URL` / `AUTH_SECRET` (ne jamais diverger).
- Générer un secret : `openssl rand -base64 32`

## 2) Google (déjà implémenté côté code)

### Côté Google Cloud Console
1) APIs & Services → OAuth consent screen (config minimale).
2) APIs & Services → Credentials → Create credentials → OAuth client ID → Web application.
3) Renseigner :
   - Authorized JavaScript origins :
     - `http://localhost:3000`
     - `https://<domaine-public>`
   - Authorized redirect URIs :
     - `http://localhost:3000/api/auth/callback/google`
     - `https://<domaine-public>/api/auth/callback/google`
4) Récupérer le `client id` et le `client secret`.

### Côté app (Render env / .env.local)
- `AUTH_GOOGLE_ID=<google client id>`
- `AUTH_GOOGLE_SECRET=<google client secret>`

## 3) Microsoft (Entra ID) (implémenté côté code)

### Côté Microsoft Entra (Azure AD)
1) https://entra.microsoft.com/ → Identity → App registrations → New registration.
2) Choisir le type de comptes autorisés (souvent **multi-tenant** si tu cibles des comptes scolaires variés).
3) Authentication → Add a platform → Web → Redirect URIs :
   - `http://localhost:3000/api/auth/callback/microsoft-entra-id`
   - `https://<domaine-public>/api/auth/callback/microsoft-entra-id`
4) Certificates & secrets → New client secret → copier la **Value**.
5) Noter :
   - Application (client) ID
   - Directory (tenant) ID
   - Client secret (value)

### Côté app (Render env / .env.local)
- `AUTH_MICROSOFT_ENTRA_ID_ID=<application client id>`
- `AUTH_MICROSOFT_ENTRA_ID_SECRET=<client secret value>`
- `AUTH_MICROSOFT_ENTRA_ID_TENANT_ID=<tenant id>` (optionnel, laisser vide si tu veux `common`)
- `AUTH_MICROSOFT_ENTRA_ID_ISSUER=https://login.microsoftonline.com/<tenant id>/v2.0` (optionnel, alternatif à `AUTH_MICROSOFT_ENTRA_ID_TENANT_ID`)

## 4) Facebook (Meta) (déjà implémenté côté code)

### Côté Meta for Developers
1) Créer une app sur https://developers.facebook.com/
2) Ajouter le produit **Facebook Login** (type “Web”).
3) Settings → Basic :
   - App Domains : `localhost` + `<domaine-public>`
   - Privacy Policy URL : à renseigner (même minimale)
4) Facebook Login → Settings :
   - Valid OAuth Redirect URIs :
     - `http://localhost:3000/api/auth/callback/facebook`
     - `https://<domaine-public>/api/auth/callback/facebook`
5) Récupérer l’`App ID` et l’`App Secret`.

### Côté app (Render env / .env.local)
- `AUTH_FACEBOOK_ID=<facebook app id>`
- `AUTH_FACEBOOK_SECRET=<facebook app secret>`

## 5) Lien magique (email) (implémenté côté code)

Objectif : permettre la connexion via **lien magique** sans dépendre d’un provider OAuth.

### Prérequis SMTP (ex: OVH)
Voir `docs/technical-setup/smtp-ovh.md` (hôte/port/TLS).

### Côté app (Render env / .env.local)
Format recommandé (simple) :
- `AUTH_EMAIL_SERVER=smtp://<user>:<pass>@<host>:<port>`
- `AUTH_EMAIL_FROM="My exams <no-reply@ton-domaine.fr>"`

Notes :
- Le provider “email” s’active côté NextAuth et le formulaire doit appeler `signIn("email", formData)`.
- Il faut idéalement configurer SPF/DKIM côté domaine pour éviter le spam.

## 6) Vérifications rapides
- Vérifier la liste des providers : `GET /api/auth/providers`
- En prod, si tu vois une redirection vers `https://0.0.0.0:10000/...` : la base URL est mal configurée → corriger `AUTH_URL`.
