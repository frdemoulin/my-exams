# Configuration SMTP OVH

- Nom d'utilisateur : adresse email complète
- Mot de passe : mot de passe de l'adresse email
- Serveur (sortant) : `smtp.mail.ovh.net` ou `ssl0.ovh.net`
- Port : 465
- Type de sécurité : SSL / TLS

Exemple d'URI SMTP (Auth.js / contact) :
```
smtps://mon-adresse@domaine.fr:MON_MDP@smtp.mail.ovh.net:465
```

Variables possibles :
- `AUTH_EMAIL_SERVER` (lien magique)
- `CONTACT_EMAIL_SERVER` (formulaire de contact, sinon fallback sur `AUTH_EMAIL_SERVER`)
