# Configuration SSO Google

Voir aussi `docs/technical-setup/sso-v1.md` (checklist complète SSO V1).

[Google Cloud Console](https://console.cloud.google.com/welcome?project=my-exams-478419)

Accès rapide > API et services > Clients > Modifier le client OAuth

URIs de redirection autorisés :
- `http://localhost:3000/api/auth/callback/google`
- `https://<domaine-public>/api/auth/callback/google`
