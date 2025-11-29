# Fil d'Ariane (Breadcrumbs)

## Vue d'ensemble

Le système de breadcrumbs de l'application utilise une approche **automatique** basée sur l'URL, avec possibilité de **surcharge manuelle** pour des cas spécifiques.

## Architecture

### Composants principaux

- **`AutoBreadcrumb`** : Composant client qui génère automatiquement le breadcrumb à partir de l'URL
- **`BreadcrumbProvider`** : Contexte React permettant de surcharger le breadcrumb automatique
- **`AppBreadcrumb`** : Composant manuel (legacy, non utilisé actuellement)

### Emplacement des fichiers

```
src/
├── components/
│   ├── shared/
│   │   ├── auto-breadcrumb.tsx      # Composant automatique + Provider
│   │   └── app-breadcrumb.tsx       # Composant manuel (legacy)
│   └── ui/
│       └── breadcrumb.tsx           # Composants shadcn/ui
└── app/
    └── (admin)/
        └── layout.tsx               # Intégration dans le layout
```

## Fonctionnement automatique

### Intégration dans le layout

Le breadcrumb est intégré dans le layout admin et s'affiche automatiquement sur toutes les pages :

```tsx
// src/app/(admin)/layout.tsx
import { AutoBreadcrumb } from "@/components/shared/auto-breadcrumb";

<div className="px-6 pt-4 pb-2">
  <AutoBreadcrumb />
</div>
```

### Génération des segments

Le composant parse l'URL avec `usePathname()` et génère les segments du breadcrumb :

**Exemple :**
- URL : `/admin/exam-papers/abc123/split`
- Segments détectés : `admin`, `exam-papers`, `abc123`, `split`
- Breadcrumb affiché : **Administration** > **Sujets d'examen** > **Découpage**

### Mapping des labels

Les segments sont traduits via un dictionnaire dans `auto-breadcrumb.tsx` :

```typescript
const segmentLabels: Record<string, string> = {
  'admin': 'Administration',
  'dashboard': 'Tableau de bord',
  'exam-papers': 'Sujets d\'examen',
  'exercises': 'Exercices',
  'teachings': 'Enseignements',
  'subjects': 'Matières',
  'grades': 'Niveaux',
  'diplomas': 'Diplômes',
  'divisions': 'Filières',
  'themes': 'Thèmes',
  'chapters': 'Chapitres',
  'curriculums': 'Programmes',
  'examination-centers': 'Centres d\'examen',
  'users': 'Utilisateurs',
  'add': 'Ajouter',
  'edit': 'Modifier',
  'split': 'Découpage',
};
```

### Filtrage des IDs

Les segments qui ressemblent à des ObjectIds MongoDB (24 caractères hexadécimaux) sont automatiquement **filtrés** et n'apparaissent pas dans le breadcrumb.

```typescript
const isId = segment.length === 24 && /^[a-f0-9]{24}$/i.test(segment);
```

### Pages exclues

Le breadcrumb n'est **pas affiché** sur :
- `/` (accueil public)
- `/admin` (page d'accueil admin)

## Surcharge manuelle

### Pourquoi surcharger ?

La surcharge est utile quand vous avez besoin de :
- Afficher des **informations dynamiques** (nom du sujet, numéro d'exercice)
- Créer des **liens personnalisés** vers des pages spécifiques
- Éviter des liens vers des **pages inexistantes**

### Comment surcharger

Enveloppez le contenu de votre page avec `BreadcrumbProvider` :

```tsx
import { BreadcrumbProvider } from "@/components/shared/auto-breadcrumb";

const breadcrumbOverride = {
  items: [
    { label: 'Sujets d\'examen', href: '/admin/exam-papers' },
    { label: examPaper.label || 'Sujet', href: `/admin/exam-papers/${id}` },
    { label: `Exercice #${exercise.exerciseNumber}`, href: `/admin/exam-papers/${id}` },
    { label: 'Édition' }, // Dernier item sans href = page actuelle
  ]
};

return (
  <BreadcrumbProvider override={breadcrumbOverride}>
    {/* Votre contenu */}
  </BreadcrumbProvider>
);
```

### Exemple concret

**Page** : `/admin/exercises/[id]/edit`

**Problème** : Le breadcrumb automatique affiche "Exercices" avec un lien vers `/admin/exercises` qui n'existe pas.

**Solution** : Surcharge pour rediriger vers le sujet parent

```tsx
// src/app/(admin)/admin/exercises/[id]/edit/page.tsx
const breadcrumbOverride = {
  items: [
    { label: 'Sujets d\'examen', href: '/admin/exam-papers' },
    { label: exercise.examPaper.label, href: `/admin/exam-papers/${exercise.examPaperId}` },
    { label: `Exercice #${exercise.exerciseNumber}`, href: `/admin/exam-papers/${exercise.examPaperId}` },
    { label: 'Édition' },
  ]
};

return (
  <BreadcrumbProvider override={breadcrumbOverride}>
    <div className="w-full p-6">
      {/* Contenu de la page */}
    </div>
  </BreadcrumbProvider>
);
```

**Résultat** : Le breadcrumb redirige vers le sujet d'examen parent au lieu d'une page "Exercices" inexistante.

## Ajouter de nouveaux segments

Pour ajouter un nouveau segment traduit au breadcrumb automatique :

1. Ouvrez `src/components/shared/auto-breadcrumb.tsx`
2. Ajoutez l'entrée dans `segmentLabels` :

```typescript
const segmentLabels: Record<string, string> = {
  // ... existant
  'new-section': 'Nouvelle section',
};
```

3. Le breadcrumb sera automatiquement mis à jour sur toutes les pages contenant ce segment

## Styles

Le breadcrumb utilise les composants **shadcn/ui** :
- `Breadcrumb`
- `BreadcrumbList`
- `BreadcrumbItem`
- `BreadcrumbLink`
- `BreadcrumbPage`
- `BreadcrumbSeparator`

Pour modifier les styles, éditez `src/components/ui/breadcrumb.tsx` ou ajoutez des classes CSS personnalisées.

## Bonnes pratiques

### ✅ À faire

- Utiliser le breadcrumb automatique par défaut
- Surcharger uniquement quand nécessaire (infos dynamiques, liens spécifiques)
- Toujours laisser le dernier item **sans href** (page actuelle)
- Utiliser des labels courts et explicites

### ❌ À éviter

- Ne pas créer de liens vers des pages inexistantes
- Ne pas mettre de href sur le dernier item
- Ne pas dupliquer le breadcrumb (il est déjà dans le layout)
- Ne pas surcharger si le breadcrumb automatique suffit

## Debug

### Le breadcrumb ne s'affiche pas

1. Vérifiez que vous n'êtes pas sur `/` ou `/admin` (pages exclues)
2. Vérifiez dans le layout que `<AutoBreadcrumb />` est bien présent
3. Vérifiez la console pour d'éventuelles erreurs

### Le breadcrumb affiche "undefined"

1. Le segment n'est pas dans `segmentLabels`
2. Ajoutez-le ou utilisez une surcharge manuelle avec des données dynamiques

### Le lien ne fonctionne pas

1. Vérifiez que le href correspond à une route existante
2. Envisagez une surcharge manuelle pour créer un lien personnalisé

## Migration depuis l'ancien système

Si vous avez des pages utilisant l'ancien composant `AppBreadcrumb` :

**Avant (manuel) :**
```tsx
<AppBreadcrumb
  items={[
    { label: 'Sujets', href: '/admin/exam-papers' },
    { label: examPaper.label }
  ]}
/>
```

**Après (automatique) :**
```tsx
// Rien à faire, le breadcrumb est automatique via le layout
```

**Si besoin de surcharge :**
```tsx
<BreadcrumbProvider override={{ items: [...] }}>
  {/* contenu */}
</BreadcrumbProvider>
```

## Ressources

- [shadcn/ui Breadcrumb](https://ui.shadcn.com/docs/components/breadcrumb)
- [Next.js usePathname](https://nextjs.org/docs/app/api-reference/functions/use-pathname)
- [React Context API](https://react.dev/reference/react/useContext)
