# Mise à jour de la page d'accueil élève

## Date
23 novembre 2025

## Changements apportés

### 1. Nouveau module `Teaching`

Création du module `/src/core/teaching/` avec:

- **teaching.types.ts** - Types TypeScript pour les enseignements avec relations
- **teaching.queries.ts** - Requêtes Prisma pour récupérer les enseignements
- **index.ts** - Exports du module

### 2. Queries disponibles

#### `fetchSpecialties()`
Récupère toutes les spécialités de Première et Terminale (14 au total):
- Spé Maths, Spé PC, Spé SVT
- Spé HGGSP, Spé HLP, Spé SES, Spé NSI
- Pour 1re et Tle

#### `fetchTeachings()`
Récupère tous les enseignement avec leurs relations Grade et Subject.

#### `fetchTeachingsByGrade()`
Récupère les enseignement groupés par niveau (Grade).

#### `fetchLyceeTeachings()`
Récupère uniquement les enseignement de lycée (2de, 1re, Tle).

#### `fetchTeachingById(id)`
Récupère un enseignement spécifique par son ID.

### 3. Mise à jour de la page d'accueil

#### `/src/app/(public)/page.tsx`
- Ajout de `fetchSpecialties()` pour récupérer les spécialités
- Passage des spécialités au composant `HomePage`

#### `/src/components/pages/HomePage.tsx`

**Changements dans les props:**
```typescript
interface HomePageProps {
  initialSubjects: Subject[];
  specialties: TeachingWithRelations[]; // ✨ Nouveau
}
```

**Section "Spécialités & Enseignements populaires":**
- Remplace l'ancienne section "Matières populaires"
- Affiche les 8 premières spécialités avec leur niveau
- Format: `Spé Maths • Tle`, `Spé PC • 1re`, etc.

**Section "Annales populaires":**
- Mise à jour des exemples pour refléter la nouvelle hiérarchie
- Structure: Grade → Teaching → Subject
- Exemples:
  - Terminale → Spécialité Mathématiques
  - Première → Spécialité Physique-Chimie
  - Première → Tronc Commun - Français

### 4. Hiérarchie reflétée

L'accueil utilise maintenant la hiérarchie complète:

```
Diploma → Division → Grade → Teaching → Subject → Chapter → Theme
                              ^^^^^^
                           Nouveau niveau
```

Les **ExamPapers** sont attachés au niveau **Teaching** (pas Subject).

## Avantages

1. **Plus précis** - Les élèves cherchent par spécialité, pas par matière générique
2. **Meilleure UX** - Affichage direct des enseignement disponibles (Spé Maths Tle, Spé PC 1re)
3. **Évolutif** - Facile d'ajouter des filtres par niveau ou type de enseignement
4. **Conforme** - Reflète la réforme du bac 2020 (spécialités, tronc commun, options)

## Données en base

- **28 enseignement** créés (11 en 1re, 12 en Tle, 5 en 2de)
- **14 spécialités** (7 pour 1re + 7 pour Tle)
- **8 matières** (Maths, PC, SVT, Français, Histoire-Géo, SES, Informatique, Philo)
- **7 niveaux** (6e à Tle)

## Prochaines étapes suggérées

1. **Page /annales** - Créer la page de recherche d'annales avec filtres par Teaching
2. **Filtres avancés** - Ajouter filtres par type (Spécialité/Tronc Commun/Option)
3. **Breadcrumb** - Afficher la hiérarchie complète: Grade > Teaching > Subject > Chapter
4. **Admin Teaching** - Créer l'interface admin pour gérer les enseignement

## Tests

Vérification avec:
```bash
npx ts-node scripts/test-home-data.ts
```

Build réussi:
```bash
npm run build
# ✓ 32 routes générées
```
