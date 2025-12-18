# Système de Toast avec Cookies

## Vue d'ensemble

Le projet utilise un système de notifications toast basé sur les cookies, conforme aux recommandations Next.js 15/16 pour les Server Actions. Les messages de succès/erreur sont stockés dans un cookie côté serveur, puis lus et affichés côté client après le redirect.

## Architecture

### 1. Utilitaires serveur (`/src/lib/toast.ts`)

```typescript
// Définir un message toast depuis une Server Action
await setToastCookie("success", "Message de succès");
await setToastCookie("error", "Message d'erreur");
await setToastCookie("info", "Message d'information");

// Récupérer le message toast (utilisé par l'API)
const message = await getToastMessage(); // { type: "success", message: "..." } | null

// Supprimer le cookie
await clearToastCookie();
```

**Configuration du cookie :**
- Nom : `toast-message`
- Durée : 5 secondes
- Path : `/`
- SameSite : `lax`

### 2. API Route (`/src/app/api/toast/route.ts`)

Endpoint GET qui :
1. Lit le cookie toast
2. Supprime le cookie
3. Retourne le message en JSON

```typescript
// Réponse si toast présent
{ type: "success", message: "Thème créé avec succès" }

// Réponse si pas de toast
{ message: null }
```

### 3. Composant Client (`/src/components/shared/toast-display.tsx`)

Composant invisible qui :
1. S'exécute au montage (useEffect)
2. Appelle l'API `/api/toast`
3. Affiche le toast avec `react-hot-toast`
4. Se base sur le router pour détecter les changements de page

**Intégration :** Placé dans le layout racine pour être disponible partout (public + admin).

```tsx
// src/app/layout.tsx
import { ToastDisplay } from "@/components/shared/toast-display";

<ToastDisplay />
```

## Pattern d'utilisation

### Dans les Server Actions

**✅ Bon pattern (recommandé Next.js)**

```typescript
"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { setToastCookie } from "@/lib/toast";

export async function createEntity(formData: FormData) {
  // 1. Valider les données
  const result = schema.safeParse(values);
  
  // 2. Effectuer la mutation
  await prisma.entity.create({ data });
  
  // 3. Revalider le cache
  revalidatePath("/admin/entities");
  
  // 4. Définir le toast
  await setToastCookie("success", "Entité créée avec succès");
  
  // 5. Rediriger
  redirect("/admin/entities");
}
```

**❌ Ancien pattern (à éviter)**

```typescript
// ❌ Ne pas utiliser useRouter + toast côté client
const router = useRouter();

try {
  await createEntity(formData);
  toast.success("Message"); // Disparaît avant le redirect
  router.push("/admin/entities");
} catch (error) {
  toast.error("Erreur");
}
```

### Dans les formulaires

**Simplification maximale** : Le formulaire appelle directement la Server Action sans gestion d'erreur.

```typescript
"use client";

import { createEntity, updateEntity } from "@/core/entity";

const onSubmit = async (values: EntityValues) => {
  const formData = new FormData();
  Object.entries(values).forEach(([key, value]) => {
    formData.append(key, value);
  });
  
  if (!initialData.id) {
    await createEntity(formData);
  } else {
    await updateEntity(initialData.id, formData);
  }
}
```

**Ce qu'on ne fait plus :**
- ❌ Import de `toast` ou `useRouter`
- ❌ Try/catch autour des actions
- ❌ Appel manuel à `router.push()` ou `router.refresh()`
- ❌ Gestion des erreurs `NEXT_REDIRECT`

## Messages par entité

| Entité | Créé | Modifié | Supprimé |
|--------|------|---------|----------|
| Thème | Thème créé avec succès | Thème modifié avec succès | Thème supprimé avec succès |
| Diplôme | Diplôme créé avec succès | Diplôme modifié avec succès | Diplôme supprimé avec succès |
| Division | Division créée avec succès | Division modifiée avec succès | Division supprimée avec succès |
| Niveau | Niveau créé avec succès | Niveau modifié avec succès | Niveau supprimé avec succès |
| Matière | Matière créée avec succès | Matière modifiée avec succès | Matière supprimée avec succès |
| Enseignement | Enseignement créé avec succès | Enseignement modifié avec succès | Enseignement supprimé avec succès |
| Centre d'examen | Centre d'examen créé avec succès | Centre d'examen modifié avec succès | Centre d'examen supprimé avec succès |
| Sujet | Sujet créé avec succès | Sujet modifié avec succès | Sujet supprimé avec succès |
| Programme | Programme créé avec succès | Programme modifié avec succès | Programme supprimé avec succès |

## Avantages du pattern

1. **Conforme Next.js 15/16** : Utilise les Server Actions comme recommandé
2. **Moins de code client** : Formulaires plus simples, moins de hooks
3. **Meilleur SEO** : Les redirects sont côté serveur
4. **Type-safe** : Pas de gestion manuelle des états de navigation
5. **Performance** : Moins de JavaScript côté client
6. **Résilience** : Les toasts survivent au redirect grâce aux cookies

## Limitations

- **Durée limitée** : Cookie expire après 5 secondes (ajustable)
- **Un message à la fois** : Le cookie est écrasé si plusieurs actions simultanées
- **Taille limitée** : Messages courts (limite de taille des cookies ~4KB)

## Migration depuis l'ancien pattern

Pour migrer un CRUD existant :

1. **Server Actions** : Ajouter `setToastCookie()` avant les `redirect()`
2. **Formulaires** : Supprimer `toast`, `useRouter`, try/catch, simplifier `onSubmit`
3. **Pages** : Supprimer prop `formAction` et imports inutilisés
4. **Layout** : Ajouter `<ToastDisplay />` si pas déjà présent

## Troubleshooting

**Le toast ne s'affiche pas :**
- ✅ Vérifier que `<ToastDisplay />` est dans le layout
- ✅ Vérifier que `setToastCookie()` est appelé **avant** `redirect()`
- ✅ Vérifier la console réseau : l'appel à `/api/toast` doit retourner le message
- ✅ Vérifier que le cookie n'a pas expiré (5 secondes max)

**Le toast apparaît sur toutes les pages :**
- ❌ Le cookie n'est pas supprimé → vérifier `clearToastCookie()` dans l'API route

**Messages en double :**
- ❌ `<ToastDisplay />` est inclus plusieurs fois → vérifier qu'il n'est que dans le layout racine

## Exemple complet

### Server Action
```typescript
// src/core/theme/theme.actions.ts
"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { setToastCookie } from "@/lib/toast";
import prisma from "@/lib/db/prisma";

export const createTheme = async (formData: FormData) => {
  const values = Object.fromEntries(formData.entries());
  const result = createThemeSchema.safeParse(values);

  if (result.success) {
    try {
      await prisma.theme.create({ data: result.data });
    } catch (error: any) {
      if (error.code === 'P2002') {
        throw new Error('Un thème avec ces descriptions existe déjà');
      }
      throw error;
    }
  } else {
    throw result.error;
  }

  revalidatePath("/admin/themes");
  await setToastCookie("success", "Thème créé avec succès");
  redirect("/admin/themes");
}
```

### Formulaire
```typescript
// src/app/(admin)/admin/themes/_components/theme-form.tsx
"use client";

import { useForm } from "react-hook-form";
import { createTheme, updateTheme } from "@/core/theme";

export const ThemeForm = ({ initialData }: ThemeFormProps) => {
  const form = useForm<CreateThemeValues>({
    defaultValues: initialData,
    resolver: zodResolver(createThemeSchema)
  });

  const onSubmit = async (values: CreateThemeValues) => {
    const formData = new FormData();
    formData.append('longDescription', values.longDescription);
    formData.append('shortDescription', values.shortDescription || '');
    formData.append('chapterId', values.chapterId);
    
    if (!initialData.id) {
      await createTheme(formData);
    } else {
      await updateTheme(initialData.id, formData);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Fields */}
      </form>
    </Form>
  );
}
```

### Layout
```typescript
// src/app/(admin)/layout.tsx
import { ToastDisplay } from "@/components/shared/toast-display";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <ToastDisplay />
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
```
