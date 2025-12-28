/**
 * Hook personnalisé pour utiliser les traductions next-intl
 * avec une API simplifiée pour les entités métier
 */

import { useTranslations } from 'next-intl';

export type EntityKey = 
  | 'curriculum'
  | 'diploma' 
  | 'division' 
  | 'exercise'
  | 'examPaper'
  | 'examinationCenter' 
  | 'grade' 
  | 'subject' 
  | 'teaching'
  | 'theme' 
  | 'user';

/**
 * Hook pour accéder facilement aux traductions d'une entité
 * 
 * @example
 * const entity = useEntityTranslation('diploma');
 * console.log(entity.singular); // "Diplôme"
 * console.log(entity.actions.add); // "Ajouter un diplôme"
 */
export function useEntityTranslation(entityKey: EntityKey) {
  const t = useTranslations(`entities.${entityKey}`);

  return {
    singular: t('singular'),
    plural: t('plural'),
    article: {
      definite: t('article.definite'),
      indefinite: t('article.indefinite'),
    },
    actions: {
      add: t('actions.add'),
      edit: t('actions.edit'),
      delete: t('actions.delete'),
      view: t('actions.view'),
      list: t('actions.list'),
    },
  };
}

/**
 * Hook pour accéder aux traductions communes
 * 
 * @example
 * const common = useCommonTranslations();
 * console.log(common.save); // "Enregistrer"
 */
export function useCommonTranslations() {
  const t = useTranslations('common');

  return {
    welcome: t('welcome'),
    login: t('login'),
    logout: t('logout'),
    save: t('save'),
    cancel: t('cancel'),
    delete: t('delete'),
    edit: t('edit'),
    add: t('add'),
    search: t('search'),
    loading: t('loading'),
    noResults: t('noResults'),
    actions: t('actions'),
    confirm: t('confirm'),
    back: t('back'),
  };
}

/**
 * Hook pour accéder aux traductions d'authentification
 */
export function useAuthTranslations() {
  const t = useTranslations('auth');

  return {
    signIn: t('signIn'),
    signOut: t('signOut'),
    signInWith: (provider: string) => t('signInWith', { provider }),
    welcomeBack: t('welcomeBack'),
    loginPrompt: t('loginPrompt'),
  };
}

/**
 * Hook pour accéder aux traductions de navigation
 */
export function useNavigationTranslations() {
  const t = useTranslations('navigation');

  return {
    dashboard: t('dashboard'),
    admin: t('admin'),
    profile: t('profile'),
    settings: t('settings'),
  };
}

/**
 * Hook pour accéder aux messages de succès/erreur
 */
export function useMessageTranslations() {
  const success = useTranslations('messages.success');
  const error = useTranslations('messages.error');

  return {
    success: {
      created: (entity: string) => success('created', { entity }),
      updated: (entity: string) => success('updated', { entity }),
      deleted: (entity: string) => success('deleted', { entity }),
    },
    error: {
      generic: error('generic'),
      notFound: (entity: string) => error('notFound', { entity }),
      unauthorized: error('unauthorized'),
      validation: error('validation'),
    },
  };
}
