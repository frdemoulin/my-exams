# Envoi d'e-mails — développement et production (Render)

Ce document explique comment configurer, tester et déployer l'envoi d'e-mails (lien magique / notifications) pour ce projet.

---

## Résumé rapide ✅
- En dev : utilise Ethereal ou Mailtrap pour capturer et visualiser les e-mails sans toucher de vraies boîtes.
- En prod (Render) : utilise un service transactionnel (Postmark, SendGrid, Mailgun, Amazon SES) et configure SPF/DKIM.
- Variables essentielles : `AUTH_EMAIL_SERVER`, `AUTH_EMAIL_FROM`, `AUTH_SECRET`, `AUTH_URL`.

---

## Variables d'environnement
- `AUTH_EMAIL_SERVER` — URI SMTP (ex: `smtp://user:pass@smtp.example.com:587`).
- `AUTH_EMAIL_FROM` — expéditeur affiché (ex: `"My exams <no-reply@votre-domaine.fr>"`).
- `AUTH_URL` — base URL de l'application (ex: `https://mon-domaine.com`).
- `AUTH_SECRET` — secret utilisé par Auth.js/NextAuth (générer via `openssl rand -base64 32`).

> Note : Ne jamais committer `.env.local` contenant ces secrets. Utilise `.env.local.example` comme référence.
> Note : si ton mot de passe SMTP contient des caractères spéciaux (`@`, `:`, `/`, `?`, `#`…), il faut l’**URL-encoder** dans `AUTH_EMAIL_SERVER` (sinon l’URI devient invalide).

---

## Options en développement 🧪

### Ethereal (rapide, gratuit)
- Permet de créer un compte test via nodemailer et inspecter les e-mails envoyés dans l'UI d'Ethereal.
- Exemple d'URI (après création de compte) :

```
AUTH_EMAIL_SERVER="smtp://user:pass@smtp.ethereal.email:587"
AUTH_EMAIL_FROM="My exams <no-reply@exemple.local>"
```

### Mailtrap (recommandé pour dev/staging)
- Capture les e-mails envoyés par l'application dans une boîte d'essai.
- Exemple d'URI Mailtrap :

```
AUTH_EMAIL_SERVER="smtp://username:password@smtp.mailtrap.io:2525"
AUTH_EMAIL_FROM="My exams <no-reply@exemple.local>"
```

### Debugging simple
- Pour debug rapide, logguer l'HTML/text envoyé ou surcharger `sendVerificationRequest` dans NextAuth pour écrire le message en console/fichier.

---

## Production chez Render 🚀

1. **Choisir un fournisseur transactionnel** : Postmark / SendGrid / Mailgun / Amazon SES (préférable pour délivrabilité et webhooks).
2. **Valider le domaine** chez le fournisseur (ils fournissent les enregistrements DNS pour SPF/DKIM).
3. **Configurer les variables d'environnement** dans le dashboard Render → Service → Environment Variables :
   - `AUTH_EMAIL_SERVER` (ex : SendGrid SMTP `smtp://apikey:YOUR_SENDGRID_API_KEY@smtp.sendgrid.net:587`)
   - `AUTH_EMAIL_FROM` (adresse validée)
   - `AUTH_URL` (ex : `https://app.mondomaine.com`)
   - `AUTH_SECRET`
4. **Webhooks (optionnel)** : configure les webhooks pour bounces/complaints et traite-les côté serveur.

> Remarque : si Render bloque des ports sortants pour votre plan, utilisez l'API HTTP du fournisseur (beaucoup le proposent) au lieu du SMTP.

---

## Vérifications et tests ✅

1. **Vérifier que EmailProvider est activé** :
   - Si `AUTH_EMAIL_SERVER` & `AUTH_EMAIL_FROM` sont définis, l'Email provider devrait apparaître dans `/api/auth/providers`.
   - Exemple :

```bash
curl -s http://localhost:3000/api/auth/providers | jq '.'
```

2. **Tester l'envoi d'un magic link** :
   - Lancer `npm run dev` puis utiliser la page de login et demander un lien magique.
   - Vérifier l'e-mail dans Mailtrap/Ethereal ou dans les logs du fournisseur.

3. **Script de test rapide (Node + nodemailer)** :

```js
// test-send.js
import nodemailer from 'nodemailer';

async function send() {
  const transporter = nodemailer.createTransport(process.env.AUTH_EMAIL_SERVER);
  await transporter.sendMail({
    from: process.env.AUTH_EMAIL_FROM,
    to: 'test@example.com',
    subject: 'Test d'envoi',
    text: 'Ceci est un test',
  });
  console.log('E-mail envoyé (ou capturé par Mailtrap/Ethereal)');
}

send().catch(console.error);
```

Exécute :

```bash
AUTH_EMAIL_SERVER="..." AUTH_EMAIL_FROM="..." node test-send.js
```

---

## Sécurité & bonnes pratiques 🔒
- Ne pas exposer les secrets (`AUTH_SECRET`, `SMTP` credentials).
- Valider les enregistrements DNS (SPF, DKIM, DMARC) pour améliorer la délivrabilité.
- Surveiller les bounces et complaints via webhooks.
- Ne pas envoyer d'e-mails de test à des adresses réelles en dev.

---

## Dépannage fréquent ⚠️
- "E-mail non reçu" → vérifier les logs du fournisseur, dossiers spam, SPF/DKIM, et webhooks.
- "Connexion refusée" → vérifier que l'URI SMTP est correcte, que le port est autorisé, et que les identifiants sont valides.
- Provider email non listé dans `/api/auth/providers` → vérifier que `AUTH_EMAIL_SERVER` et `AUTH_EMAIL_FROM` sont présents et re-démarrer le serveur.

---

## Ressources utiles
- Nodemailer: https://nodemailer.com/
- Auth.js (NextAuth) Email Provider: https://authjs.dev/
- Mailtrap: https://mailtrap.io/
- Ethereal: https://ethereal.email/
- Postmark/SendGrid/Mailgun docs (pour SPF/DKIM)

---

Si tu veux, je peux aussi :
- Générer un `.env.local` de test Ethereal et lancer un test d'envoi localement, ou
- Te guider pas-à-pas pour configurer Postmark / DNS pour ta prod sur Render.
