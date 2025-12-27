# Prisma (MongoDB) – Guide Projet

Ce document explique comment Prisma fonctionne avec MongoDB dans **my-exams**, comment appliquer les changements de schéma, tester, vérifier les index et bonnes pratiques (développement / production).

> Voir aussi:
> - `docs/database/dev-prod.md` (workflow DEV/PROD, Render, scripts à lancer)
> - `docs/database/prisma-composite-uniques.md` (détails sur les uniques composites et la notation `longDescription_shortDescription`)

---
## 1. Principe général avec MongoDB
Contrairement aux bases SQL (PostgreSQL, MySQL), **MongoDB n’utilise pas le moteur de migrations SQL de Prisma**. Prisma ne génère donc pas de migrations SQL.

Dans ce projet, les **migrations de données** sont gérées via `scripts/db-migrate.ts` et `scripts/migrations/*` (migrations applicatives versionnées).

Prisma se charge uniquement de :
- Générer le client TypeScript à partir de `prisma/schema.prisma`.
- Synchroniser le schéma (modèles / index uniques) via `prisma db push`.

Cela signifie :
- Pas de rollback automatique.
- Les changements destructifs (supprimer un champ, renommer, modifier un type) doivent être préparés manuellement.
- Les index (unique, composite) sont créés/ajustés lors du `db push`.

---
## 2. Fichier de schéma
`prisma/schema.prisma` contient la définition des modèles. Extraits caractéristiques :
```prisma
model Diploma {
  id               String   @id @default(auto()) @map("_id") @db.ObjectId
  longDescription  String
  shortDescription String
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
  @@unique([longDescription, shortDescription])
}
```
Points importants MongoDB + Prisma :
- Champ `id` mappé sur `_id` avec `@db.ObjectId`.
- Composite unique possible (`@@unique([a, b])`).
- Les relations 1-N classiques (ex: `Subject` → `Domain` → `Theme`) utilisent `@relation` et sont gérées par Prisma.
- Les many-to-many passent soit par un **modèle de jonction** (ex: `DomainScope`), soit par des **listes d’ObjectId manuelles** (ex: `ExamPaper.examinationCenterIds`, `Curriculum.teachingIds`) que l’application doit maintenir.

> Note : un `prisma/prisma.config.ts` est déjà présent pour préparer Prisma 7. Avec Prisma 6, la clé `package.json#prisma.seed` est encore utilisée mais dépréciée.

---
## 3. Commandes essentielles
```bash
# Générer le client Prisma (automatique si tu importes @prisma/client)
npx prisma generate

# Valider la syntaxe du schéma (vérifie que le schema.prisma est correct)
npx prisma validate

# Formater le schéma (indentation, ordre des champs)
npx prisma format

# Synchroniser le schéma (création / MAJ des index uniques, validations)
npx prisma db push

# Ouvrir Prisma Studio (interface web de gestion des données)
npx prisma studio
```

### Détails des commandes

**`npx prisma validate`**
- Vérifie la syntaxe et la cohérence du schéma
- Détecte les erreurs de typage, relations manquantes, etc.
- À lancer après chaque modification importante du schema.prisma
- Exemple de sortie : `The schema at prisma/schema.prisma is valid 🚀`

**`npx prisma format`**
- Formate automatiquement le fichier schema.prisma
- Réorganise les champs dans un ordre standard
- Corrige l'indentation et les espaces
- Utile avant chaque commit pour maintenir un code propre

**`npx prisma generate`**
- Génère le client TypeScript typé depuis le schéma
- Crée les types pour chaque modèle et relation
- À lancer après chaque modification du schema.prisma

**`npx prisma db push`**
- Synchronise le schéma avec la base de données MongoDB
- Crée/met à jour les index uniques et contraintes
- À utiliser en dev/staging, et en production via un **Pre-deploy command** (Render) après tests
- En cas de changement destructif, Prisma peut demander `--accept-data-loss` (à n'utiliser que si tu assumes l'impact)

**`npx prisma studio`**
- Lance une interface web sur http://localhost:5555
- Permet de visualiser et éditer les données
- Pratique pour tester rapidement des requêtes

> En production, évite d'exécuter `db push` sans comprendre l'impact (suppression possible d'index / altérations). Préfère des validations manuelles et scripts contrôlés.

---
## 4. Flux de travail d'une évolution de schéma
1. Modifier le modèle dans `schema.prisma` (ajout champ, index…).
2. Valider la syntaxe :
   ```bash
   npx prisma validate
   ```
3. Formater le schéma :
   ```bash
   npx prisma format
   ```
4. Synchroniser avec la base :
   ```bash
   npx prisma db push
   ```
5. Vérifier les index créés :
   ```bash
   mongosh my-exams --eval 'db.Diploma.getIndexes()'
   ```
6. Mettre à jour le code applicatif (accès au nouveau champ, validations).
7. Lancer les tests / script `npm run prisma:test` (voir plus bas).
8. Commit :
   - `prisma/schema.prisma`
   - Éventuels docs mise à jour (`docs/database/prisma.md`).

Renommage d’un champ :
- Ajouter le **nouveau champ**.
- Copier/transformer les données (script `mongosh` ou Node) vers le nouveau champ.
- Supprimer l’ancien champ après vérification.

Suppression d’un champ :
- Vérifier que le code ne l’utilise plus.
- Supprimer du schéma puis éventuellement nettoyer les documents existants avec un script `updateMany` (`$unset`).

---
## 5. Replica Set & Transactions
Certaines fonctionnalités (adapter NextAuth Prisma, transactions) nécessitent un **Replica Set** même en local.
Configuration ajoutée dans `/usr/local/etc/mongod.conf` :
```yaml
replication:
  replSetName: rs0
```
Initialisation :
```bash
mongosh --eval 'rs.initiate()'
mongosh --eval 'rs.status()'
```
Test transaction (extrait du script de test) :
```ts
await prisma.$transaction([
  prisma.grade.create({ data: { longDescription: "A", shortDescription: "A" } }),
  prisma.grade.create({ data: { longDescription: "B", shortDescription: "B" } }),
]);
```
Si cela fonctionne → Replica Set OK.

---
## 6. Script de test rapide
Le projet inclut `scripts/test-prisma.ts` (création, lecture, update, contrainte, relation, transaction). Exécution :
```bash
npm run prisma:test
```
Résultats attendus :
- Création d’un diplôme
- Modification
- Erreur contrainte unique (si l’index composite existe déjà)
- Relation Domain ↔ Theme affichée
- Transaction OK

> Si `scripts/test-prisma.ts` utilise encore d’anciens modèles, adapte-le aux entités actuelles (Domain/Theme).

Si la contrainte unique **ne lève pas d’erreur** :
- Vérifier les index :
  ```bash
  mongosh my-exams --eval 'db.Diploma.getIndexes()'
  ```
- Relancer `npx prisma db push`.
- Redémarrer MongoDB si nécessaire.

---
## 7. Route de santé intégrée
Route créée : `GET /api/health/db` → vérifie la connexion et retourne `userCount`.
Test :
```bash
curl http://localhost:3000/api/health/db
```
Si `ok: true` → Prisma + Mongo Opera.

---
## 8. Vérifications MongoDB
Lister bases de données :
```bash
mongosh --eval 'show dbs'
```
Vérifier index d’une collection :
```bash
mongosh my-exams --eval 'db.Diploma.getIndexes()'
```
Chercher documents :
```bash
mongosh my-exams --eval 'db.Diploma.find().limit(3).pretty()'
```

---
## 9. Gestion des relations manuelles (listes d’ObjectId)
Certaines relations sont stockées en **tableaux d’ObjectId** sans `@relation` Prisma :
- `ExamPaper.examinationCenterIds` (centres d’examen)
- `Curriculum.teachingIds` (enseignements couverts par un programme)

Exemple : associer des centres d’examen à un sujet.
```ts
const centers = await prisma.examinationCenter.findMany({
  where: { description: { in: ["France métropolitaine", "Asie"] } },
  select: { id: true },
});

await prisma.examPaper.update({
  where: { id: examPaperId },
  data: { examinationCenterIds: centers.map((c) => c.id) },
});
```
Lecture associée :
```ts
const paper = await prisma.examPaper.findUnique({ where: { id: examPaperId } });
const centers = await prisma.examinationCenter.findMany({
  where: { id: { in: paper?.examinationCenterIds ?? [] } },
});
```
> Même logique pour `Curriculum.teachingIds` : la cohérence est maintenue par l’application.

---
## 10. Bonnes pratiques
- **Jamais de `db push` à l’aveugle en production** : tester d’abord en staging.
- **Valider les index** après ajout d’une contrainte composite.
- **Scripts de migration manuelle** pour renommages/changements de type.
- **Prisma Studio** pour inspection rapide (éviter de manipuler manuellement trop de données en prod).
- **Transactions** : regrouper opérations critiques (création lot d’entités liées).
- **Replica Set obligatoire** pour NextAuth + Prisma sur MongoDB.

---
## 11. Nettoyage / Maintenance
Supprimer des documents obsolètes :
```bash
mongosh <NOM_DE_LA_BASE> --eval 'db.Diploma.deleteMany({ longDescription: { $regex: /MOD/ } })'
```
Supprimer un champ sur tous les documents :
```bash
mongosh <NOM_DE_LA_BASE> --eval 'db.User.updateMany({}, { $unset: { legacyField: "" } })'
```
Exporter un snapshot avant changement :
```bash
mongodump --db=<NOM_DE_LA_BASE> --out=./backup_$(date +%F)
```

---
## 12. Variables d’environnement
`DATABASE_URL` : URI de connexion MongoDB (dev ou prod).

- En dev : une URI pointant vers ta base locale.
- En prod : l’URI MongoDB Atlas fournie par Atlas (elle doit inclure le nom de la base, chemin `/<db>`).

Après modification de `DATABASE_URL` : redémarrer l’app + régénérer le client si nécessaire.

### 12.1 Chargement `.env` vs `.env.local`
- Next.js charge automatiquement `.env.local` pour le serveur applicatif.
- Le CLI Prisma **ne** charge pas `.env.local` : il lit par défaut `.env`.
- Erreur typique si `db push` échoue : `P1012 Environment variable not found: DATABASE_URL.`

#### Solutions
1. Créer un fichier `.env` contenant la même variable :
```
DATABASE_URL="<URI_MONGODB_DEV>"
```
2. Exporter manuellement avant la commande :
```bash
export DATABASE_URL="<URI_MONGODB_DEV>"
npx prisma db push
```
3. Utiliser `dotenv-cli` :
```bash
npx dotenv -e .env.local -- npx prisma db push
```
4. Ajouter un script npm :
```json
"prisma:push": "dotenv -e .env.local -- prisma db push"
```

> Recommandation projet : garder `.env.local` pour Next.js et ajouter un `.env` minimal pour Prisma.

---
## 13. FAQ rapide
**Q: Dois-je lancer une commande pour “créer les tables” ?**  
R: Non, avec MongoDB ce sont des collections dynamiques. Seul `prisma db push` est utile pour aligner les index/valeurs de validation.

**Q: Comment renommer un champ proprement ?**  
R: Ajouter le nouveau champ → migrer les données (script) → retirer l’ancien → `db push`.

**Q: Pourquoi ma contrainte unique ne fonctionne pas immédiatement ?**  
R: Index non créé ou en enseignement de construction. Vérifie via `getIndexes()`, relance `db push`, éventuellement redémarre MongoDB.

**Q: Puis-je revenir en arrière après un `db push` ?**  
R: Pas automatiquement. Sauvegarde avant les changements critiques (mongodump).

---
## 14. Ressources
- Prisma MongoDB Connector: https://www.prisma.io/docs/concepts/database-connectors/mongodb
- Prisma db push: https://www.prisma.io/docs/reference/command-reference#db-push
- Transactions MongoDB: https://www.mongodb.com/docs/manual/core/transactions/
- NextAuth + Prisma: https://authjs.dev

---
## 15. Check-list avant PR de schéma
- [ ] Schéma modifié et cohérent (`schema.prisma`).
- [ ] `npx prisma validate` exécuté → schéma valide ✓
- [ ] `npx prisma format` exécuté → schéma formaté ✓
- [ ] `npx prisma db push` exécuté (dev).
- [ ] Indices vérifiés dans Mongo.
- [ ] Script de test (`npm run prisma:test`) OK.
- [ ] Route santé renvoie `{ ok: true }`.
- [ ] Documentation mise à jour (`docs/database/prisma.md`).
- [ ] Sauvegarde effectuée si changement destructif.

---
## 16. Migrations applicatives (data)

Pour les évolutions non-triviales (renommage de champ, backfill, normalisation), on versionne des migrations **data** dans :
- `scripts/migrations/*.ts`

Ces migrations sont exécutées par le runner :
- `npm run db:migrate`

Le runner trace l'état dans la collection Mongo `migrations` (modèle Prisma `DbMigration`) :
- `RUNNING` pendant l'exécution
- `APPLIED` si OK
- `FAILED` si erreur (stack tronquée)

Commandes :
```bash
# Affiche ce qui serait exécuté (aucune écriture)
npm run db:migrate -- --dry-run

# Affiche l'état côté DB
npm run db:migrate -- --status
```

Règles :
- Ne modifie pas une migration déjà `APPLIED` (checksum différent → erreur). Crée une nouvelle migration.
- Les migrations doivent être **idempotentes** (safe à relancer).

### Déploiement (Render)

Sur Render, tu peux exécuter ça en **Pre-deploy command** :
```bash
# Applique les index/uniques Prisma puis exécute les migrations data
CONFIRM_DB_MIGRATIONS=1 npm run db:deploy
```

---
Fin du guide Prisma.
