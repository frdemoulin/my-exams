# Clés uniques composites Prisma (MongoDB) – Comprendre `longDescription_shortDescription`

## 🎯 Objectif
Ce document explique comment fonctionnent les **contraintes d’unicité composites** avec Prisma (provider MongoDB), pourquoi on voit des notations comme `longDescription_shortDescription` dans les seeders, et comment les utiliser correctement dans les requêtes (`upsert`, `findUnique`, etc.).

---

## 🔎 Qu’est-ce qu’une contrainte composite ?
Dans Prisma, une contrainte d’unicité composite impose qu’un **groupe de champs** soit unique dans la collection. Par exemple, dans le modèle `Diploma` :

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

Ici, la paire `(longDescription, shortDescription)` doit être unique. Deux diplômes peuvent partager la même `longDescription`, mais pas la même **combinaison** `longDescription + shortDescription`.

Sous MongoDB, Prisma matérialise cela comme un **index unique** sur ces deux champs.

---

## 🧩 Pourquoi `longDescription_shortDescription` dans les requêtes ?
Prisma génère, côté client, une **clé composite** en concaténant les champs par un `_`. Cette clé apparaît dans les types `WhereUniqueInput` et s’utilise dans `where` pour les opérations qui exigent une unicité (ex. `upsert`, `findUnique`, `update`, `delete`).

Exemple dans un seeder :

```ts
await prisma.diploma.upsert({
  where: {
    longDescription_shortDescription: {
      longDescription: diploma.longDescription,
      shortDescription: diploma.shortDescription,
    },
  },
  update: {},
  create: diploma,
});
```

- `longDescription_shortDescription` est le **nom de la clé composite** auto-générée.
- L’objet à l’intérieur fournit les **valeurs des champs** qui composent la contrainte.

Tu retrouves cela dans les types générés :

```ts
// Exemple de type généré
// Prisma.DiplomaWhereUniqueInput contient :
// { id?: string; longDescription_shortDescription?: { longDescription: string; shortDescription: string } }
```

> Astuce: L’ordre et les noms doivent correspondre exactement à la déclaration `@@unique([a, b])`.

---

## 🛠️ Utilisation courante

### 1) upsert idempotent (recommandé pour les fixtures)
```ts
await prisma.diploma.upsert({
  where: {
    longDescription_shortDescription: {
      longDescription: 'Baccalauréat Général',
      shortDescription: 'Bac Général',
    },
  },
  update: {},
  create: {
    longDescription: 'Baccalauréat Général',
    shortDescription: 'Bac Général',
  },
});
```

### 2) findUnique
```ts
const diploma = await prisma.diploma.findUnique({
  where: {
    longDescription_shortDescription: {
      longDescription: 'Baccalauréat Général',
      shortDescription: 'Bac Général',
    },
  },
});
```

### 3) update / delete
```ts
await prisma.diploma.update({
  where: {
    longDescription_shortDescription: {
      longDescription: 'Baccalauréat Général',
      shortDescription: 'Bac Général',
    },
  },
  data: { shortDescription: 'Bac G.' },
});

await prisma.diploma.delete({
  where: {
    longDescription_shortDescription: {
      longDescription: 'Baccalauréat Général',
      shortDescription: 'Bac G.',
    },
  },
});
```

---

## 📚 Autres modèles du projet

- `Division`, `Grade`, `Subject`, `Topic` : également déclarés avec `@@unique([longDescription, shortDescription])` → utilisent la même **clé composite** `longDescription_shortDescription`.
- `ExaminationCenter` : unicité simple `@@unique([description])` → `where: { description: '...' }` (pas de clé composite ici).

---

## 🧱 Erreurs d’unicité (P2002)
Lorsqu’un `create` ou un `upsert` tente de violer une contrainte unique, Prisma lève `PrismaClientKnownRequestError` avec `code === 'P2002'`.

Gestion côté serveur (exemple) :

```ts
try {
  await prisma.examinationCenter.create({ data: { description } });
} catch (error: any) {
  if (error.code === 'P2002') {
    // error.meta?.target peut pointer les champs/index impliqués
    throw new Error("Un centre d'examen avec cette description existe déjà");
  }
  throw error;
}
```

> Note: `error.meta?.target` peut contenir le ou les champs concernés selon le connecteur/DB.

---

## 🧭 Index / migrations (MongoDB)
- `@@unique` crée un **index unique** lors de `prisma db push`.
- Si des **doublons existent déjà**, la création de l’index échouera. Il faut d’abord nettoyer les doublons.
- Vérifie et synchronise les indexes après modification du schéma :

```bash
npx prisma db push
npx prisma generate
```

---

## ✅ Bonnes pratiques
- Utiliser `upsert` pour les seeders → idempotent.
- Pour des gros volumes : `createMany({ skipDuplicates: true })`.
- Garder l’ordre des champs dans `@@unique([a, b])` cohérent avec l’usage côté code.
- Documenter les contraintes uniques dans les docs de données (fixtures, Prisma).

---

## ❓ FAQ
**Pourquoi ce nom avec un `_` ?**
Prisma concatène les noms des champs de la contrainte pour générer une propriété unique exploitable côté client (`a_b_c` pour `@@unique([a,b,c])`).

**Puis-je renommer cette clé composite ?**
Le nom de la **propriété côté client** est généré et non personnalisable. Tu peux toutefois nommer l’index en base via `map` :

```prisma
@@unique([longDescription, shortDescription], map: "uniq_diploma_long_short")
```

> Le `map` sert à nommer l’index en base. La clé composite exposée côté client restera `longDescription_shortDescription`.

**Changer la contrainte a-t-il un impact ?**
Oui. Modifier les champs ou leur ordre dans `@@unique` change les types générés et la propriété attendue dans `WhereUniqueInput`.

---

## 🔗 Liens utiles
- Prisma – Unique constraints: https://www.prisma.io/docs/orm/prisma-schema/data-model#defining-unique-constraints
- Prisma – Compound unique constraints: https://www.prisma.io/docs/orm/prisma-schema/data-model#multi-field-unique-constraints
- Prisma – MongoDB: https://www.prisma.io/docs/orm/overview/databases/mongodb
- Erreurs Prisma (P2002): https://www.prisma.io/docs/orm/reference/error-reference#p2002
