# Next.js 16 : Patterns Server/Client Components

## Vue d'ensemble

Next.js 16 recommande fortement l'utilisation de **Server Components** par défaut, et de ne basculer en **Client Components** que lorsque nécessaire pour gérer l'interactivité côté client.

Cette documentation explique les concepts clés, les différences, et les meilleures pratiques pour organiser ton code efficacement.

---

## Concepts fondamentaux

### Server Component (par défaut)

Un **Server Component** est un composant React qui s'exécute **uniquement côté serveur**.

**Caractéristiques :**
- ✅ Peut être `async` pour fetcher des données
- ✅ Accès direct à la base de données, système de fichiers, variables d'environnement serveur
- ✅ Pas de JavaScript envoyé au navigateur → bundle plus léger
- ✅ SEO optimal : le HTML est généré côté serveur
- ❌ Pas d'interactivité : pas de `useState`, `useEffect`, `onClick`, etc.
- ❌ Pas d'accès aux APIs du navigateur : `window`, `localStorage`, etc.

**Exemple :**
```tsx
// src/app/page.tsx (Server Component par défaut)
import { fetchSubjects } from '@/core/subject';
import HomePage from '@/components/pages/HomePage';

export default async function Page() {
  // Fetch côté serveur
  const subjects = await fetchSubjects();
  
  return <HomePage initialSubjects={subjects} />;
}
```

### Client Component

Un **Client Component** est un composant React qui s'exécute **côté client** (dans le navigateur).

**Caractéristiques :**
- ✅ Interactivité : `useState`, `useEffect`, event handlers (`onClick`, `onChange`...)
- ✅ Accès aux APIs du navigateur : `window`, `localStorage`, `navigator`...
- ✅ Hooks React : `useContext`, `useReducer`, `useRef`...
- ❌ Ne peut pas être `async`
- ❌ Doit être marqué avec `'use client'` en haut du fichier
- ❌ JavaScript envoyé au navigateur → bundle plus lourd

**Exemple :**
```tsx
// src/components/pages/HomePage.tsx (Client Component)
'use client';

import { useState } from 'react';

interface HomePageProps {
  initialSubjects: Subject[];
}

export default function HomePage({ initialSubjects }: HomePageProps) {
  const [search, setSearch] = useState('');
  
  return (
    <input 
      value={search} 
      onChange={(e) => setSearch(e.target.value)} 
    />
  );
}
```

---

## Pattern hybride recommandé (Server + Client)

La meilleure pratique consiste à **diviser les responsabilités** :

1. **Server Component** : Fetch les données
2. **Client Component** : Gère l'interactivité
3. **Props** : Passe les données du serveur au client

### Architecture

```
┌─────────────────────────────────────────┐
│  Server Component (page.tsx)           │
│  - async function                       │
│  - Fetch data from DB                   │
│  - No interactivity                     │
└──────────────┬──────────────────────────┘
               │ props: initialData
               ▼
┌─────────────────────────────────────────┐
│  Client Component (HomePage.tsx)        │
│  - 'use client'                         │
│  - useState, useEffect                  │
│  - Event handlers                       │
└─────────────────────────────────────────┘
```

### Exemple complet

**Server Component : `src/app/(public)/page.tsx`**
```tsx
import { fetchSubjects } from '@/core/subject';
import HomePage from '@/components/pages/HomePage';

export default async function Page() {
  // ✅ Fetch côté serveur (rapide, sécurisé)
  const subjects = await fetchSubjects();
  
  // ✅ Passe les données au Client Component
  return <HomePage initialSubjects={subjects} />;
}
```

**Client Component : `src/components/pages/HomePage.tsx`**
```tsx
'use client';

import { useState } from 'react';
import type { Subject } from '@prisma/client';

interface HomePageProps {
  initialSubjects: Subject[];
}

export default function HomePage({ initialSubjects }: HomePageProps) {
  // ✅ Gère l'état local et l'interactivité
  const [search, setSearch] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('lycee');
  
  return (
    <div>
      <input 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      {initialSubjects.map(subject => (
        <button key={subject.id}>{subject.name}</button>
      ))}
    </div>
  );
}
```

---

## Quand utiliser chaque approche ?

| Besoin | Solution | Exemple |
|--------|----------|---------|
| **Fetch initial de données** | Server Component | Page qui affiche des produits depuis la DB |
| **Interactivité simple** (boutons, inputs) | Client Component | Formulaire de recherche, toggle buttons |
| **État local** (`useState`) | Client Component | Gestion d'un modal ouvert/fermé |
| **Side effects** (`useEffect`) | Client Component | Timer, WebSocket, localStorage |
| **APIs du navigateur** | Client Component | Géolocalisation, clipboard, notifications |
| **SEO critique** | Server Component | Page d'accueil, page produit, blog |
| **Données sensibles** (secrets, tokens) | Server Component | Connexion DB, appels API avec clés privées |

---

## Comparaison : avant vs après refactoring

### ❌ Ancien pattern (Client Component + useEffect)

```tsx
'use client';

import { useState, useEffect } from 'react';
import { fetchSubjects } from '@/core/subject';

export default function HomePage() {
  const [subjects, setSubjects] = useState([]);
  
  // ❌ Fetch côté client : lent, mauvais SEO
  useEffect(() => {
    fetchSubjects().then(setSubjects);
  }, []);
  
  return <div>{subjects.map(...)}</div>;
}
```

**Problèmes :**
- 🐌 Fetch après le premier render → délai visible
- 📦 Code de fetch inclus dans le bundle client → plus lourd
- 🔍 Mauvais SEO : contenu vide au premier render
- 🔐 Risque d'exposer des secrets si mal géré

### ✅ Nouveau pattern (Server Component + Client Component)

```tsx
// page.tsx (Server Component)
export default async function Page() {
  const subjects = await fetchSubjects(); // ✅ Fetch côté serveur
  return <HomePage initialSubjects={subjects} />;
}
```

```tsx
// HomePage.tsx (Client Component)
'use client';

export default function HomePage({ initialSubjects }) {
  const [search, setSearch] = useState('');
  // ✅ Pas de useEffect pour le fetch initial !
  return <div>{initialSubjects.map(...)}</div>;
}
```

**Avantages :**
- ⚡ Données disponibles immédiatement au premier render
- 📦 Bundle client plus léger (pas de code de fetch)
- 🔍 SEO parfait : HTML complet dès le départ
- 🔐 Sécurité : secrets restent côté serveur

---

## useEffect : quand l'utiliser ?

`useEffect` reste utile pour des **side effects** spécifiques, mais **ne doit plus être utilisé pour le fetch initial de données**.

### ✅ Cas valides pour useEffect

| Use case | Exemple |
|----------|---------|
| **Timers/Intervals** | `setInterval(() => ..., 1000)` |
| **Événements navigateur** | `window.addEventListener('resize', ...)` |
| **localStorage/sessionStorage** | Lire/écrire des données locales |
| **WebSocket/SSE** | Connexions temps réel |
| **Synchronisation externe** | Mise à jour d'une librairie tierce |
| **Fetch dynamique** | Fetch après une action utilisateur (clic, scroll...) |

### ❌ Cas invalides pour useEffect (utiliser Server Component)

| Use case | Solution |
|----------|----------|
| **Fetch initial de données** | Server Component avec `await` |
| **Données statiques** | Server Component ou `getStaticProps` |
| **Données SEO-critiques** | Server Component |

---

## Server Actions : l'alternative moderne

Pour les **mutations de données** (créer, mettre à jour, supprimer), Next.js 16 recommande les **Server Actions** au lieu de `useEffect` + fetch.

### Exemple : créer un sujet

**Ancien pattern :**
```tsx
'use client';

import { useState } from 'react';

export default function CreateSubject() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/subjects', { method: 'POST', body: ... });
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}
```

**Nouveau pattern (Server Action) :**
```tsx
'use server';

export async function createSubject(formData: FormData) {
  const name = formData.get('name');
  await db.subject.create({ data: { name } });
}
```

```tsx
'use client';

import { createSubject } from './actions';

export default function CreateSubject() {
  return (
    <form action={createSubject}>
      <input name="name" />
      <button type="submit">Créer</button>
    </form>
  );
}
```

**Avantages :**
- ✅ Plus simple : pas besoin de route API
- ✅ Type-safe : typage automatique entre client et serveur
- ✅ Progressive enhancement : fonctionne sans JS

---

## Checklist de migration

Lors du refactoring d'un Client Component utilisant `useEffect` pour fetcher des données :

- [ ] Créer un Server Component (page.tsx) qui fetch les données avec `await`
- [ ] Extraire l'UI interactive dans un Client Component séparé
- [ ] Passer les données via props (`initialSubjects`, `initialUsers`...)
- [ ] Supprimer `useEffect` utilisé pour le fetch initial
- [ ] Garder `useEffect` uniquement pour les side effects (timers, events...)
- [ ] Vérifier que le build Next.js passe (`npm run build`)
- [ ] Tester que l'interactivité fonctionne toujours

---

## Résumé

| Concept | Rôle | Quand l'utiliser |
|---------|------|------------------|
| **Server Component** | Fetch de données, logique serveur | Par défaut, pour toute page |
| **Client Component** | Interactivité, état local | Uniquement quand nécessaire |
| **useEffect** | Side effects côté client | Timers, events, WebSocket (pas fetch initial) |
| **Server Actions** | Mutations de données | Créer/modifier/supprimer des données |

---

## Ressources

- [Next.js 16 Documentation - Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Next.js 16 Documentation - Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
- [React Documentation - Server Components](https://react.dev/reference/rsc/server-components)
- [Next.js 16 Documentation - Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
