# Auth V2 — Apple (Sign in with Apple)

Apple est **reporté en V2** car il requiert généralement un compte **Apple Developer Program payant** (≈ 99€/an).

## 1) URL de callback
- Dev : `http://localhost:3000/api/auth/callback/apple`
- Prod : `https://<domaine-public>/api/auth/callback/apple`

## 2) Côté Apple Developer
1) Certificates, Identifiers & Profiles → Identifiers → créer un **Service ID** (ce sera le `clientId`).
2) Activer “Sign In with Apple” pour ce Service ID.
3) Configurer :
   - Domain : `<domaine-public>`
   - Return URL : `https://<domaine-public>/api/auth/callback/apple`
4) Keys → créer une clé “Sign In with Apple” et récupérer :
   - `Key ID`
   - `Team ID`
   - télécharger la clé privée `.p8`

## 3) Client secret (JWT) requis
Apple exige un `clientSecret` au format **JWT**.

Option simple :
- Générer un JWT (client secret) en local, puis le stocker dans Render.
- Script recommandé par Auth.js : https://bal.so/apple-gen-secret

## 4) Variables d’environnement (Render env / .env.local)
- `AUTH_APPLE_ID=<Service ID>`
- `AUTH_APPLE_SECRET=<JWT généré>`

## 5) Tests
- Vérifier `GET /api/auth/providers` (le provider `apple` doit apparaître).
- Tester depuis `/log-in`.
