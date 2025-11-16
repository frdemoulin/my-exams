# Prisma (MongoDB) – Guide Projet

Ce document explique comment Prisma fonctionne avec MongoDB dans **my-exams**, comment appliquer les changements de schéma, tester, vérifier les index et bonnes pratiques (développement / production).

---
## 1. Principe général avec MongoDB
Contrairement aux bases SQL (PostgreSQL, MySQL), **MongoDB n’utilise pas le moteur de migrations SQL de Prisma**. Il n’y a pas de fichiers migrations à versionner. Prisma se charge uniquement de :
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
- Les relations `Topic` ↔ `Subject` sont gérées par des tableaux d’ObjectId (`topicIDs`, `subjectIDs`). Prisma **ne synchronise pas automatiquement les deux côtés** : tu dois maintenir la cohérence dans ton code (ex: mise à jour réciproque).

---
## 3. Commandes essentielles
```bash
# Générer le client Prisma (automatique si tu importes @prisma/client)
npx prisma generate

# Synchroniser le schéma (création des index uniques, validations) – DEV uniquement
npx prisma db push

# Ouvrir Prisma Studio (interface web de gestion des données)
npx prisma studio
```
> En production, évite d’exécuter `db push` sans comprendre l’impact (suppression possible d’index / altérations). Préfère des validations manuelles et scripts contrôlés.

---
## 4. Flux de travail d’une évolution de schéma
1. Modifier le modèle dans `schema.prisma` (ajout champ, index…).
2. Lancer :
   ```bash
   npx prisma db push
   ```
3. Vérifier les index créés :
   ```bash
   mongosh my-exams --eval 'db.Diploma.getIndexes()'
   ```
4. Mettre à jour le code applicatif (accès au nouveau champ, validations).
5. Lancer les tests / script `npm run prisma:test` (voir plus bas).
6. Commit :
   - `prisma/schema.prisma`
   - Éventuels docs mise à jour (`docs/prisma.md`).

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
- Relation Subject ↔ Topic affichée
- Transaction OK

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
## 9. Gestion des relations manuelles (Subject ↔ Topic)
Exemple de liaison réciproque :
```ts
const topic = await prisma.topic.create({ data: { longDescription: 'T', shortDescription: 'TC', subjectIDs: [] }});
const subject = await prisma.subject.create({ data: { longDescription: 'S', shortDescription: 'SC', topicIDs: [topic.id] }});
await prisma.topic.update({ where: { id: topic.id }, data: { subjectIDs: [subject.id] }});
```
Lecture avec include :
```ts
await prisma.subject.findUnique({ where: { id: subject.id }, include: { topics: true } });
```
> En cas de désynchronisation, tu peux ajouter un script de maintenance pour réaligner les tableaux d’IDs.

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
mongosh my-exams --eval 'db.Diploma.deleteMany({ longDescription: { $regex: /MOD/ } })'
```
Supprimer un champ sur tous les documents :
```bash
mongosh my-exams --eval 'db.User.updateMany({}, { $unset: { legacyField: "" } })'
```
Exporter un snapshot avant changement :
```bash
mongodump --db=my-exams --out=./backup_$(date +%F)
```

---
## 12. Variables d’environnement
`DATABASE_URL` (local) exemplaire :
```
mongodb://root:<motdepasse>@localhost:27017/my-exams
```
En production (Atlas) :
```
mongodb+srv://user:pass@cluster-id.mongodb.net/my-exams?retryWrites=true&w=majority
```
Après modification de `DATABASE_URL` : redémarrer l’app + régénérer le client si nécessaire.

### 12.1 Chargement `.env` vs `.env.local`
- Next.js charge automatiquement `.env.local` pour le serveur applicatif.
- Le CLI Prisma **ne** charge pas `.env.local` : il lit par défaut `.env`.
- Erreur typique si `db push` échoue : `P1012 Environment variable not found: DATABASE_URL.`

#### Solutions
1. Créer un fichier `.env` contenant la même variable :
```
DATABASE_URL="mongodb://root:<motdepasse>@localhost:27017/my-exams"
```
2. Exporter manuellement avant la commande :
```bash
export DATABASE_URL="mongodb://root:<motdepasse>@localhost:27017/my-exams"
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
R: Index non créé ou en cours de construction. Vérifie via `getIndexes()`, relance `db push`, éventuellement redémarre MongoDB.

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
- [ ] `npx prisma db push` exécuté (dev).
- [ ] Indices vérifiés dans Mongo.
- [ ] Script de test (`npm run prisma:test`) OK.
- [ ] Route santé renvoie `{ ok: true }`.
- [ ] Documentation mise à jour (`docs/prisma.md`).
- [ ] Sauvegarde effectuée si changement destructif.

---
Fin du guide Prisma.
