# Gestion des Fixtures

## 📋 Vue d'ensemble

Les fixtures sont des données de test utilisées pour peupler la base de données avec des données cohérentes et reproductibles. Ce document décrit les recommandations et bonnes pratiques pour la génération et la gestion des fixtures dans ce projet.

## 🎯 Objectifs des Fixtures

- **Développement** : Données de test pour travailler sur l'interface
- **Tests** : Données reproductibles pour les tests automatisés
- **Démo** : Données réalistes pour les démonstrations
- **Onboarding** : Environnement prêt pour les nouveaux développeurs

## 🏗️ Architecture Recommandée

### Structure des Dossiers

```
prisma/
  schema.prisma
  seed.ts              # Point d'entrée principal du seeding
  seeds/               # Dossier contenant les différents seeders
    diploma.seed.ts
    division.seed.ts
    examination-center.seed.ts
    grade.seed.ts
    subject.seed.ts
    topic.seed.ts
    user.seed.ts
scripts/
  seed-dev.ts          # Script pour environnement de développement
  seed-prod.ts         # Script pour environnement de production (données minimales)
  clear-database.ts    # Script pour vider la base de données
```

## 🔧 Configuration

### 1. Installer les Dépendances

Les dépendances nécessaires sont déjà installées :
- `@prisma/client` : Client Prisma
- `prisma` : CLI Prisma
- `ts-node` : Pour exécuter les scripts TypeScript
- `dotenv` : Pour charger les variables d'environnement

### 2. Configuration package.json

Ajouter les scripts suivants dans `package.json` :

```json
{
  "scripts": {
    "db:seed": "ts-node prisma/seed.ts",
    "db:seed:dev": "ts-node scripts/seed-dev.ts",
    "db:clear": "ts-node scripts/clear-database.ts",
    "db:reset": "npm run db:clear && npm run db:seed"
  },
  "prisma": {
    "seed": "ts-node prisma/seed.ts"
  }
}
```

### 3. Configuration tsconfig.json

Vérifier que `ts-node` est correctement configuré :

```json
{
  "ts-node": {
    "compilerOptions": {
      "module": "commonjs"
    }
  }
}
```

## 📝 Implémentation

### 1. Seeder Principal (`prisma/seed.ts`)

```typescript
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { seedDiplomas } from './seeds/diploma.seed';
import { seedDivisions } from './seeds/division.seed';
import { seedExaminationCenters } from './seeds/examination-center.seed';
import { seedGrades } from './seeds/grade.seed';
import { seedSubjects } from './seeds/subject.seed';
import { seedTopics } from './seeds/topic.seed';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Début du seeding...');

  try {
    // 1. Données de base (pas de dépendances)
    await seedDiplomas(prisma);
    await seedDivisions(prisma);
    await seedExaminationCenters(prisma);
    await seedGrades(prisma);

    // 2. Topics (pas de dépendances)
    await seedTopics(prisma);

    // 3. Subjects (dépend de Topics)
    await seedSubjects(prisma);

    console.log('✅ Seeding terminé avec succès !');
  } catch (error) {
    console.error('❌ Erreur lors du seeding:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

### 2. Seeders Individuels

#### Exemple : `prisma/seeds/diploma.seed.ts`

```typescript
import { PrismaClient } from '@prisma/client';

export async function seedDiplomas(prisma: PrismaClient) {
  console.log('📚 Seeding Diplomas...');

  const diplomas = [
    {
      longDescription: 'Baccalauréat Général',
      shortDescription: 'Bac Général',
    },
    {
      longDescription: 'Baccalauréat Technologique',
      shortDescription: 'Bac Techno',
    },
    {
      longDescription: 'Baccalauréat Professionnel',
      shortDescription: 'Bac Pro',
    },
    {
      longDescription: 'Brevet des Collèges',
      shortDescription: 'DNB',
    },
    {
      longDescription: 'Certificat d\'Aptitude Professionnelle',
      shortDescription: 'CAP',
    },
  ];

  for (const diploma of diplomas) {
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
  }

  console.log(`   ✓ ${diplomas.length} diplômes créés`);
}
```

#### Exemple : `prisma/seeds/examination-center.seed.ts`

```typescript
import { PrismaClient } from '@prisma/client';

export async function seedExaminationCenters(prisma: PrismaClient) {
  console.log('🏫 Seeding Examination Centers...');

  const centers = [
    'Lycée Victor Hugo - Paris',
    'Collège Jean Moulin - Lyon',
    'Lycée Marie Curie - Marseille',
    'Collège Jules Ferry - Toulouse',
    'Lycée Louis Pasteur - Strasbourg',
  ];

  for (const description of centers) {
    await prisma.examinationCenter.upsert({
      where: { description },
      update: {},
      create: { description },
    });
  }

  console.log(`   ✓ ${centers.length} centres d'examen créés`);
}
```

#### Exemple : `prisma/seeds/subject.seed.ts` (avec relations)

```typescript
import { PrismaClient } from '@prisma/client';

export async function seedSubjects(prisma: PrismaClient) {
  console.log('📖 Seeding Subjects...');

  // Récupérer les topics existants
  const algebra = await prisma.topic.findFirst({
    where: { longDescription: 'Algèbre' },
  });
  const geometry = await prisma.topic.findFirst({
    where: { longDescription: 'Géométrie' },
  });

  if (!algebra || !geometry) {
    console.log('   ⚠️  Topics non trouvés, skipping subjects');
    return;
  }

  const subjects = [
    {
      longDescription: 'Mathématiques',
      shortDescription: 'Maths',
      topicIDs: [algebra.id, geometry.id],
    },
    // ... autres matières
  ];

  for (const subject of subjects) {
    await prisma.subject.upsert({
      where: {
        longDescription_shortDescription: {
          longDescription: subject.longDescription,
          shortDescription: subject.shortDescription,
        },
      },
      update: {
        topicIDs: subject.topicIDs,
      },
      create: subject,
    });
  }

  console.log(`   ✓ ${subjects.length} matières créées`);
}
```

### 3. Script de Nettoyage (`scripts/clear-database.ts`)

```typescript
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function clearDatabase() {
  console.log('🧹 Nettoyage de la base de données...');

  try {
    // Supprimer dans l'ordre inverse des dépendances
    await prisma.subject.deleteMany({});
    await prisma.topic.deleteMany({});
    await prisma.grade.deleteMany({});
    await prisma.examinationCenter.deleteMany({});
    await prisma.division.deleteMany({});
    await prisma.diploma.deleteMany({});

    console.log('✅ Base de données nettoyée !');
  } catch (error) {
    console.error('❌ Erreur lors du nettoyage:', error);
    throw error;
  }
}

clearDatabase()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

## 🚀 Utilisation

### Commandes de Base

```bash
# Seeding de la base de données
npm run db:seed

# Seeding en mode développement (plus de données)
npm run db:seed:dev

# Nettoyer la base de données
npm run db:clear

# Reset complet (nettoyer + seeder)
npm run db:reset
```

### Workflow Typique

```bash
# 1. Synchroniser le schéma avec la base
npx prisma db push

# 2. Générer le client Prisma
npx prisma generate

# 3. Peupler la base
npm run db:seed
```

## 🎨 Bonnes Pratiques

### 1. Utiliser `upsert` plutôt que `create`

```typescript
// ✅ BON : idempotent, peut être relancé plusieurs fois
await prisma.diploma.upsert({
  where: { /* critères uniques */ },
  update: { /* données à mettre à jour */ },
  create: { /* données à créer */ },
});

// ❌ ÉVITER : échoue si les données existent déjà
await prisma.diploma.create({
  data: { /* ... */ },
});
```

### 2. Gérer l'Ordre des Dépendances

```typescript
// Toujours créer les entités dans cet ordre :
// 1. Entités sans dépendances (Diploma, Division, Grade, etc.)
// 2. Topics (pas de dépendances)
// 3. Subjects (dépend de Topics)
```

### 3. Données Réalistes

```typescript
// ✅ BON : données réalistes et contextuelles
{
  longDescription: 'Baccalauréat Général',
  shortDescription: 'Bac Général',
}

// ❌ ÉVITER : données génériques
{
  longDescription: 'Test 1',
  shortDescription: 'T1',
}
```

### 4. Gestion des Erreurs

```typescript
try {
  await seedDiplomas(prisma);
} catch (error) {
  if (error.code === 'P2002') {
    console.log('   ⚠️  Certains diplômes existent déjà');
  } else {
    throw error;
  }
}
```

### 5. Logging Clair

```typescript
console.log('📚 Seeding Diplomas...');
console.log(`   ✓ ${diplomas.length} diplômes créés`);
console.log('❌ Erreur:', error.message);
```

## 🔒 Sécurité

### Variables d'Environnement

```bash
# .env
DATABASE_URL="mongodb://root:password@localhost:27017/my-exams?authSource=admin&replicaSet=rs0"
```

### Ne Jamais Commiter

- Données sensibles (emails réels, mots de passe)
- Données de production
- Clés API ou tokens

## 📊 Données Recommandées pour Développement

### Quantités Minimales

- **Diplomas** : 5-10 entrées
- **Divisions** : 5-10 entrées
- **Grades** : 5-10 entrées
- **Examination Centers** : 5-15 entrées
- **Topics** : 10-20 entrées
- **Subjects** : 10-20 entrées

### Quantités pour Tests de Performance

- **Diplomas** : 50-100 entrées
- **Subjects** : 100-200 entrées
- **Topics** : 50-100 entrées

## 🧪 Tests avec Fixtures

### Utilisation dans les Tests

```typescript
import { PrismaClient } from '@prisma/client';

describe('Diploma Tests', () => {
  let prisma: PrismaClient;

  beforeAll(async () => {
    prisma = new PrismaClient();
    await seedDiplomas(prisma);
  });

  afterAll(async () => {
    await prisma.diploma.deleteMany({});
    await prisma.$disconnect();
  });

  test('should find all diplomas', async () => {
    const diplomas = await prisma.diploma.findMany();
    expect(diplomas.length).toBeGreaterThan(0);
  });
});
```

## 🎲 Génération de Données Aléatoires

### Faker.js (@faker-js/faker)

Le package le plus populaire pour générer des données réalistes, équivalent à Faker PHP.

#### Installation

```bash
npm install --save-dev @faker-js/faker
```

#### Utilisation de Base

```typescript
import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

export async function seedExaminationCenters(prisma: PrismaClient, count: number = 20) {
  console.log('🏫 Seeding Examination Centers...');

  const centers = [];
  
  for (let i = 0; i < count; i++) {
    const schoolType = faker.helpers.arrayElement(['Lycée', 'Collège', 'École']);
    const name = faker.person.lastName();
    const city = faker.location.city();
    
    centers.push({
      description: `${schoolType} ${name} - ${city}`,
    });
  }

  for (const center of centers) {
    await prisma.examinationCenter.upsert({
      where: { description: center.description },
      update: {},
      create: center,
    });
  }

  console.log(`   ✓ ${centers.length} centres d'examen créés`);
}
```

#### Localisation en Français

```typescript
import { faker } from '@faker-js/faker';
import { fr } from '@faker-js/faker';

// Utiliser la locale française
faker.locale = 'fr';
// OU créer une instance avec locale française
const fakerFR = faker.create({ locale: fr });

// Exemples de données en français
const firstName = faker.person.firstName();      // "Marie"
const lastName = faker.person.lastName();        // "Dupont"
const city = faker.location.city();              // "Paris"
const streetAddress = faker.location.street();   // "Rue de la Paix"
const email = faker.internet.email();            // "marie.dupont@example.com"
const phone = faker.phone.number();              // "01 23 45 67 89"
const companyName = faker.company.name();        // "Martin SARL"
```

#### Exemples Adaptés au Projet

##### Génération de Diplômes Variés

```typescript
import { faker } from '@faker-js/faker';

export async function seedDiplomasRandom(prisma: PrismaClient, count: number = 50) {
  console.log('📚 Seeding Random Diplomas...');

  const diplomaTypes = [
    'Baccalauréat',
    'Licence',
    'Master',
    'Doctorat',
    'BTS',
    'DUT',
    'CAP',
    'BEP',
  ];

  const specializations = [
    'Sciences',
    'Lettres',
    'Économie',
    'Droit',
    'Médecine',
    'Ingénierie',
    'Arts',
    'Commerce',
  ];

  for (let i = 0; i < count; i++) {
    const type = faker.helpers.arrayElement(diplomaTypes);
    const specialization = faker.helpers.arrayElement(specializations);
    
    const diploma = {
      longDescription: `${type} en ${specialization}`,
      shortDescription: `${type.substring(0, 3)} ${specialization.substring(0, 3)}`,
    };

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
  }

  console.log(`   ✓ ${count} diplômes créés`);
}
```

##### Génération de Centres d'Examen

```typescript
export async function seedExaminationCentersAdvanced(
  prisma: PrismaClient,
  count: number = 30
) {
  console.log('🏫 Seeding Examination Centers...');

  const schoolTypes = ['Lycée', 'Collège', 'École', 'Université'];
  const famousPersons = [
    'Victor Hugo', 'Marie Curie', 'Jean Moulin', 'Jules Ferry',
    'Louis Pasteur', 'Jean Jaurès', 'Simone de Beauvoir',
  ];

  for (let i = 0; i < count; i++) {
    const schoolType = faker.helpers.arrayElement(schoolTypes);
    const person = faker.helpers.arrayElement(famousPersons);
    const city = faker.location.city();
    
    const description = `${schoolType} ${person} - ${city}`;

    try {
      await prisma.examinationCenter.upsert({
        where: { description },
        update: {},
        create: { description },
      });
    } catch (error) {
      // Ignorer les doublons
      if (error.code !== 'P2002') throw error;
    }
  }

  console.log(`   ✓ Centres d'examen créés`);
}
```

##### Génération de Matières et Thèmes

```typescript
export async function seedSubjectsAndTopics(prisma: PrismaClient) {
  console.log('📖 Seeding Subjects and Topics...');

  // Générer des thèmes
  const topicsData = [
    { subject: 'Mathématiques', topics: ['Algèbre', 'Géométrie', 'Analyse', 'Probabilités'] },
    { subject: 'Français', topics: ['Grammaire', 'Littérature', 'Orthographe', 'Expression écrite'] },
    { subject: 'Histoire', topics: ['Antiquité', 'Moyen Âge', 'Renaissance', 'XXe siècle'] },
    { subject: 'Sciences', topics: ['Biologie', 'Chimie', 'Physique', 'Géologie'] },
  ];

  const createdTopics: Record<string, string> = {};

  // Créer les thèmes
  for (const data of topicsData) {
    for (const topicName of data.topics) {
      const topic = await prisma.topic.upsert({
        where: {
          longDescription_shortDescription: {
            longDescription: topicName,
            shortDescription: topicName.substring(0, 5),
          },
        },
        update: {},
        create: {
          longDescription: topicName,
          shortDescription: topicName.substring(0, 5),
        },
      });
      createdTopics[topicName] = topic.id;
    }
  }

  // Créer les matières avec leurs thèmes
  for (const data of topicsData) {
    const topicIDs = data.topics.map(name => createdTopics[name]);

    await prisma.subject.upsert({
      where: {
        longDescription_shortDescription: {
          longDescription: data.subject,
          shortDescription: data.subject.substring(0, 5),
        },
      },
      update: { topicIDs },
      create: {
        longDescription: data.subject,
        shortDescription: data.subject.substring(0, 5),
        topicIDs,
      },
    });
  }

  console.log('   ✓ Matières et thèmes créés');
}
```

### Autres Packages Utiles

#### @ngneat/falso

Alternative plus légère et moderne à Faker.js.

```bash
npm install --save-dev @ngneat/falso
```

```typescript
import { randFirstName, randLastName, randCity, randCompanyName } from '@ngneat/falso';

const center = {
  description: `Lycée ${randLastName()} - ${randCity()}`,
};
```

#### Chance.js

Autre alternative pour générer des données aléatoires.

```bash
npm install --save-dev chance
```

```typescript
import Chance from 'chance';
const chance = new Chance();

const diploma = {
  longDescription: `Baccalauréat ${chance.word({ capitalize: true })}`,
  shortDescription: chance.string({ length: 5, alpha: true, casing: 'upper' }),
};
```

### Comparaison des Packages

| Package | Taille | Locales | TypeScript | Popularité |
|---------|--------|---------|------------|------------|
| @faker-js/faker | ~5MB | 70+ | ✅ | ⭐⭐⭐⭐⭐ |
| @ngneat/falso | ~1MB | Limité | ✅ | ⭐⭐⭐ |
| chance | ~500KB | Non | ⚠️ (types séparés) | ⭐⭐⭐ |

### Recommandation

**@faker-js/faker** est recommandé pour ce projet car :
- ✅ Excellent support TypeScript natif
- ✅ Locale française complète
- ✅ Large choix de générateurs (noms, adresses, emails, dates, etc.)
- ✅ Communauté active et maintenance régulière
- ✅ API intuitive et bien documentée

## 📚 Ressources

- [Prisma Seeding Documentation](https://www.prisma.io/docs/guides/database/seed-database)
- [MongoDB Best Practices](https://www.mongodb.com/docs/manual/administration/production-notes/)
- [Faker.js Documentation](https://fakerjs.dev/)
- [Faker.js Guide Français](https://fakerjs.dev/guide/localization.html)
- [@ngneat/falso](https://ngneat.github.io/falso/)
- [Chance.js](https://chancejs.com/)

## ⚠️ Points d'Attention

### MongoDB Replica Set

Pour que les transactions fonctionnent (utilisées par certaines opérations Prisma), MongoDB doit être configuré en Replica Set. Voir `docs/mongodb-macos.md`.

### Contraintes d'Unicité

Attention aux contraintes d'unicité dans le schéma :
- `ExaminationCenter` : `description` unique
- `Diploma`, `Division`, `Grade`, `Subject`, `Topic` : `longDescription + shortDescription` unique

Utiliser `upsert` pour éviter les conflits.

### Performance

Pour de grandes quantités de données, utiliser `createMany` :

```typescript
// Plus rapide pour insérer beaucoup de données
await prisma.diploma.createMany({
  data: diplomas,
  skipDuplicates: true, // Ignore les doublons au lieu d'échouer
});
```

## 🔄 Migration vers un Nouveau Schéma

Quand le schéma change :

1. Mettre à jour le schéma Prisma
2. Lancer `npx prisma db push`
3. Mettre à jour les seeders si nécessaire
4. Relancer le seeding

```bash
npx prisma db push
npm run db:reset
```
