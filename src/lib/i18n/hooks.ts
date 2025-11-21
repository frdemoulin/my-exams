/**
 * Hook personnalisé pour utiliser les traductions des entités
 */

import { EntityKey, getEntityTranslation, getActionLabel, getEntityWithArticle } from './dictionary';

/**
 * Hook pour accéder facilement aux traductions d'une entité
 * 
 * @example
 * const { t } = useEntityTranslation('diploma');
 * console.log(t.singular); // "Diplôme"
 * console.log(t.actions.add); // "Ajouter un diplôme"
 */
export function useEntityTranslation(entity: EntityKey) {
  const translation = getEntityTranslation(entity);

  return {
    t: translation,
    getAction: (action: keyof typeof translation.actions) => getActionLabel(entity, action),
    withArticle: (useDefinite: boolean = true) => getEntityWithArticle(entity, useDefinite),
  };
}
