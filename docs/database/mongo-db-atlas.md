# MongoDB Atlas

Gère l'hébergement de la base de production

Dans MongoDB Atlas, la base de données n’est pas nommée à la création du cluster.
👉 C’est ton application qui crée automatiquement la base au moment où elle écrit dedans.

C'est un point très important : MongoDB ne demande pas de créer la base manuellement — elle apparaît dès que tu insères un premier document.

## Identifiants du compte

Menu Security > Database & Network access, bouton "Add new database user"

## Chaîne de connexion

- MongoDB avec Prisma : `DATABASE_URL="mongodb+srv://<USERNAME>:<MDP>@cluster0.abcde.mongodb.net/<NOM_DE_LA_BASE>?retryWrites=true&w=majority&appName=Cluster0"`