# Envoi d'e-mails — développement et production (Render)

Ce document explique comment configurer, tester et déployer l'envoi d'e-mails (lien magique / contact) pour ce projet.

---

## Résumé rapide ✅
- En dev : utilise Ethereal ou Mailtrap pour capturer et visualiser les e-mails sans toucher de vraies boîtes.
- En prod (Render) : utilise un service transactionnel **avec SMTP** (ou API), puis configure SPF/DKIM dès que tu utilises ton domaine.
- Pour démarrer **à coût faible** : Brevo / Mailjet / SendGrid ont souvent un palier gratuit (à vérifier, les offres évoluent).
- Pour un coût très faible mais plus technique : AWS SES (quasi gratuit au début, mais setup plus long).
- Magic link : `AUTH_EMAIL_SERVER`, `AUTH_EMAIL_FROM`, `AUTH_SECRET`, `AUTH_URL`.
- Contact : `CONTACT_EMAIL_SERVER`, `CONTACT_EMAIL_FROM`, `CONTACT_EMAIL_TO` (sinon fallback vers `AUTH_*`).

---

## Variables d'environnement
- `AUTH_EMAIL_SERVER` — URI SMTP (ex: `smtp://user:pass@smtp.example.com:587`).
- `AUTH_EMAIL_FROM` — expéditeur affiché (ex: `"My exams <no-reply@votre-domaine.fr>"`).
- `AUTH_URL` — base URL de l'application (ex: `https://mon-domaine.com`).
- `AUTH_SECRET` — secret utilisé par Auth.js/NextAuth (générer via `openssl rand -base64 32`).
- `CONTACT_EMAIL_SERVER` — URI SMTP dédiée au formulaire de contact (sinon fallback sur `AUTH_EMAIL_SERVER`).
- `CONTACT_EMAIL_FROM` — expéditeur affiché pour le contact (sinon fallback sur `AUTH_EMAIL_FROM`).
- `CONTACT_EMAIL_TO` — destinataire des messages de contact (ex: `contact@my-exams.fr`).

> Note : Ne jamais committer `.env.local` contenant ces secrets. Utilise `.env.local.example` comme référence.
> Note : si ton mot de passe SMTP contient des caractères spéciaux (`@`, `:`, `/`, `?`, `#`…), il faut l’**URL-encoder** dans `AUTH_EMAIL_SERVER` (sinon l’URI devient invalide).

## Emails de contact (formulaire public)

Le formulaire de contact utilise des variables dédiées si elles sont présentes :
- `CONTACT_EMAIL_SERVER`, `CONTACT_EMAIL_FROM`, `CONTACT_EMAIL_TO`.

Si elles sont absentes, l'envoi retombe sur `AUTH_EMAIL_SERVER` / `AUTH_EMAIL_FROM` et le destinataire
par défaut `contact@my-exams.fr`.

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

### Quel fournisseur choisir (peu onéreux) ?

Objectif : envoyer des emails de lien magique vers des boîtes majoritairement Gmail/Outlook sans finir en spam.

À éviter en prod :
- Gmail/Outlook “perso” en SMTP direct (limites, délivrabilité, sécurité, blocages, nécessite souvent OAuth2).
- Mailtrap/Ethereal (réservés au dev/staging).

Options (souvent) peu coûteuses :
- **Brevo (ex Sendinblue)** — SMTP relay simple, souvent un palier gratuit.
- **Mailjet** — SMTP relay, souvent un palier gratuit.
- **SendGrid** — SMTP relay, souvent un palier gratuit.
- **Amazon SES** — très peu cher, mais setup (DNS/validation) plus exigeant.

> Note : les paliers gratuits et tarifs changent régulièrement → vérifie la page pricing du fournisseur avant de t’engager.
> Note : Postmark est excellent en délivrabilité mais généralement payant (plutôt “V2” si budget serré).

### Mise en place (étapes)

1) **Créer le compte** chez le fournisseur choisi, puis :
- soit vérifier une **adresse expéditrice** (rapide pour démarrer),
- soit (recommandé) vérifier un **domaine** + ajouter **SPF/DKIM** (meilleure délivrabilité).

2) **Récupérer les identifiants SMTP**
- Certains fournisseurs donnent un “login + mot de passe SMTP”
- D’autres utilisent un **API key** comme mot de passe SMTP (ex: SendGrid → user `apikey`)

3) **Configurer les variables Render**
Dashboard Render → Service → **Environment Variables** :
- `AUTH_EMAIL_SERVER` (URI SMTP)
- `AUTH_EMAIL_FROM` (doit correspondre à une adresse/domaine validé)
- `AUTH_URL` (URL publique de l’app)
- `AUTH_SECRET` (généré, ex: `openssl rand -base64 32`)

4) **Redéployer / Restart**
Après ajout/modif des variables, fais un **redeploy** (ou restart) pour que le provider email apparaisse.

### Exemples d’URI SMTP (à adapter)

Brevo (port recommandé : **587** STARTTLS) :
```bash
AUTH_EMAIL_SERVER="smtp://LOGIN:SMTP_KEY@smtp-relay.brevo.com:587"
AUTH_EMAIL_FROM="My exams <no-reply@ton-domaine.fr>"
```

Mailjet (587 STARTTLS) :
```bash
AUTH_EMAIL_SERVER="smtp://MJ_APIKEY_PUBLIC:MJ_APIKEY_PRIVATE@in-v3.mailjet.com:587"
AUTH_EMAIL_FROM="My exams <no-reply@ton-domaine.fr>"
```

SendGrid (587 STARTTLS, user fixe `apikey`) :
```bash
AUTH_EMAIL_SERVER="smtp://apikey:SENDGRID_API_KEY@smtp.sendgrid.net:587"
AUTH_EMAIL_FROM="My exams <no-reply@ton-domaine.fr>"
```

> Ports : privilégie **587**. Le port **25** est souvent bloqué en hébergement. Le port **465** fonctionne en `smtps://...:465` (TLS implicite) si le fournisseur le recommande.

### Webhooks (optionnel)
Selon le fournisseur, tu peux brancher des webhooks (bounces/complaints). Utile plus tard, pas indispensable pour démarrer.

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
- Brevo / Mailjet / SendGrid / AWS SES docs (pour SPF/DKIM)

---

Si tu veux, je peux aussi :
- Générer un `.env.local` de test Ethereal et lancer un test d'envoi localement, ou
- Te guider pas-à-pas pour configurer Brevo/Mailjet/SendGrid (ou AWS SES) + DNS pour ta prod sur Render.
