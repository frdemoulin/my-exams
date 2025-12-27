# 1. Intégration Flowbite / Tailwind

Les blocs clés :

```
@import "tailwindcss";
/* ignores the public dir to prevent recompile loops in watch mode */
@source not "../../public";
@import url('https://fonts.googleapis.com/css2?family=Inter:...');
@import "flowbite/src/themes/default";
...
@plugin "flowbite/plugin";
@source "../../node_modules/flowbite";
@custom-variant dark (&:where(.dark, .dark *));
```

C’est conforme à ce que recommandent les docs Flowbite/Tailwind v4 :
flowbite.com
+1

@import "tailwindcss"; : OK en tout début.

@import "flowbite/src/themes/default"; : tu charges les variables de thème Flowbite → très bien, c’est la base pour var(--color-...), --radius-*, etc.

@plugin "flowbite/plugin"; : plugin Flowbite bien enregistré.

@source "../../node_modules/flowbite"; : tu dis à Tailwind de scanner les fichiers de Flowbite → indispensable pour générer les classes utilisées dans leurs composants (chemin relatif à `src/app/globals.css`).

@custom-variant dark (&:where(.dark, .dark *)); : dark mode piloté par .dark sur le HTML, conforme à la doc Tailwind v4.
tailwindcss.com

👉 Conclusion : la plomberie Flowbite/Tailwind 4 est bien posée.
Tu n’as pas de “grosse erreur” de setup.

2. Ce qui cloche un peu / à surveiller ⚠️
2.1. L’usage de ! dans les @apply

Tu as beaucoup de choses du genre :

.active {
  @apply text-blue-600 hover:text-gray-900! dark:text-blue-500 border-blue-600 dark:border-blue-600 dark:hover:text-blue-400!;
}

.dt-input {
  @apply dark:text-gray-200! dark:bg-gray-800! text-sm;
}


En Tailwind, le modifier important se fait normalement comme ça :

@apply !text-blue-600 hover:!text-gray-900;


et pas avec un ! à la fin du nom de la classe (hover:text-gray-900!) – ça, Tailwind ne le comprend pas (ça sera ignoré ou provoquera un warning).

👉 À faire :

Remplacer systématiquement xxx! par l’équivalent avec ! au début, ex :

hover:text-gray-900! → hover:!text-gray-900

dark:text-gray-200! → dark:!text-gray-200

Ou, si tu veux du 100 % certain, basculer ce cas en CSS pur :

.dt-input {
  @apply text-sm;
}
.dt-input {
  color: var(--color-gray-200) !important;
  background-color: var(--color-gray-800) !important;
}

2.2. Empilement des overrides dark mode

Tu as :

@custom-variant dark (&:where(.dark, .dark *));


Puis plus bas, plein de choses comme :

html.dark .dark\:bg-gray-900 {
  background-color: var(--color-gray-900) !important;
}


Ça fonctionne, mais c’est un peu “double couche” :

dark: gère déjà le sélecteur .dark via @custom-variant

tu re-surmultiples ensuite via html.dark .dark\:... + !important

Ça sent le contournement de conflits (Flowbite qui remet bg-white, etc.), mais à terme tu vas te retrouver avec un code difficile à maintenir.

👉 Idéalement, tu te reposes plus sur :

des classes Flowbite (p.ex. bg-surface, bg-neutral-primary-soft, border-default, etc.)

et moins sur !important “en masse”.

Mais ce n’est pas bloquant : juste une dette technique à noter.

2.3. Mélange tokens Flowbite / palette Tailwind “classique”

Tu as deux mondes qui cohabitent :

Flowbite tokens (bien !) :

.ts-wrapper.multi.form-select .ts-control {
  background-color: var(--color-gray-50) !important;
  border-radius: var(--radius-lg) !important;
  border-color: var(--color-gray-300) !important;
  font-size: var(--text-sm) !important;
}
html.dark .ts-wrapper.multi.form-select .ts-control {
  background-color: var(--color-gray-700) !important;
  color: var(--color-white) !important;
}


Tailwind palette v3/v4 pure :

.form-input {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}


Techniquement, c’est totalement valide.
Mais en terme de cohérence visuelle Flowbite :

Tes form-*, btn-*, .card, .filter-card sont encore très “Tailwind natif”.

Tom Select, lui, est déjà bien aligné sur le thème Flowbite (usage des var(--color-...)).

👉 Si ton objectif est de vraiment adopter le design system Flowbite :

petit à petit, remplace dans tes composants maison :

bg-gray-50 → bg-neutral-primary-soft ou bg-surface

border-gray-200 → border-default

rounded-lg → rounded-base ou rounded-lg tokens Flowbite

shadow-sm/md → shadow-xs/sm/md du thème Flowbite

text-gray-900 → text-heading ou text-body

Rien d’urgent, mais ça t’évitera à terme de maintenir “deux thèmes en parallèle”.

2.4. L’ordre @plugin / @layer

Actuellement :

@import "flowbite/src/themes/default";
...
@plugin "flowbite/plugin";
@source "../../node_modules/flowbite";
@custom-variant dark (...);

/* ensuite */
@layer base { ... }
@layer components { ... }
@layer utilities { ... }


En Tailwind 4, les styles injectés par @plugin sont insérés là où se trouve @plugin dans le fichier. Donc :

Flowbite est injecté avant tes @layer base/components/utilities.

Tes couches à toi passent après → elles override les styles Flowbite si même spécificité.

En pratique, c’est plutôt ce que tu veux :
tu garde Flowbite comme base, et tes classes custom comme override.

Donc : ✅ bon ordre dans ton cas.

3. Ce que tu fais déjà très bien 👍

Usage des tokens Flowbite pour harmoniser Tom Select : tu utilises var(--color-gray-50), --radius-lg, --text-sm, etc → c’est exactement la bonne façon de “greffer” un composant externe sur le thème Flowbite.

La séparation en @layer base, @layer components, @layer utilities est propre et lisible.

@source not "../../public"; : bon réflexe pour Next/Vite, ça évite que Tailwind scanne des PDF/images et fasse exploser la compile.

Les helpers form-*, btn-*, filter-card sont déjà dans l’esprit Tailwind/Flowbite (structure + dark mode), même si pas encore 100 % “tokenisés”.

4. En résumé / recommandations concrètes

Corriger les ! dans @apply

Remplacer hover:text-gray-900! par hover:!text-gray-900, etc.

Assumer Flowbite comme design system cible

Pour les nouveaux composants (cards, boutons, panneaux), privilégier les classes Flowbite :
bg-neutral-primary-soft, border-default, text-heading, text-body, bg-brand, shadow-xs, rounded-base, etc.

Réduire progressivement les overrides dark “brutaux”

Quand tu adoptes les utilitaires Flowbite, tu auras moins besoin de html.dark .dark\:text-... { ... !important; }.

Continuer d’utiliser les tokens Flowbite dans tes CSS custom

Ce que tu fais déjà pour Tom Select : applique la même philosophie à .form-*, .btn-*, .card, etc lorsque tu auras le courage de refactor.
