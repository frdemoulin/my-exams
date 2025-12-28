import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // Liste des locales supportées
  locales: ['fr'],

  // Locale par défaut
  defaultLocale: 'fr',

  // Stratégie de détection de la locale
  localePrefix: 'as-needed', // N'ajoute pas /fr dans l'URL pour la locale par défaut
});

// Exports des fonctions de navigation typées avec i18n
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
