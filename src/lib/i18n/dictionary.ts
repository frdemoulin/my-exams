/**
 * Dictionnaire des traductions pour les entités métier
 * Permet de gérer les traductions de manière centralisée
 */

export type EntityKey = 
  | 'diploma' 
  | 'division' 
  | 'examinationCenter' 
  | 'grade' 
  | 'subject' 
  | 'theme' 
  | 'user'
  | 'exercise';

export interface EntityTranslation {
  singular: string;
  plural: string;
  article: {
    definite: string;      // le/la
    indefinite: string;    // un/une
  };
  actions: {
    add: string;
    edit: string;
    delete: string;
    view: string;
    list: string;
  };
}

/**
 * Dictionnaire des traductions en français
 */
export const entityTranslations: Record<EntityKey, EntityTranslation> = {
  diploma: {
    singular: 'Diplôme',
    plural: 'Diplômes',
    article: {
      definite: 'le',
      indefinite: 'un',
    },
    actions: {
      add: 'Ajouter un diplôme',
      edit: 'Éditer le diplôme',
      delete: 'Supprimer le diplôme',
      view: 'Voir le diplôme',
      list: 'Liste des diplômes',
    },
  },
  division: {
    singular: 'Filière',
    plural: 'Filières',
    article: {
      definite: 'la',
      indefinite: 'une',
    },
    actions: {
      add: 'Ajouter une filière',
      edit: 'Éditer la filière',
      delete: 'Supprimer la filière',
      view: 'Voir la filière',
      list: 'Liste des filières',
    },
  },
  examinationCenter: {
    singular: "Centre d'examen",
    plural: "Centres d'examen",
    article: {
      definite: 'le',
      indefinite: 'un',
    },
    actions: {
      add: "Ajouter un centre d'examen",
      edit: "Éditer le centre d'examen",
      delete: "Supprimer le centre d'examen",
      view: "Voir le centre d'examen",
      list: "Liste des centres d'examen",
    },
  },
  exercise: {
    singular: "Exercice",
    plural: "Exercices",
    article: {
      definite: "l'",
      indefinite: 'un',
    },
    actions: {
      add: 'Ajouter un exercice',
      edit: "Éditer l'exercice",
      delete: "Supprimer l'exercice",
      view: "Voir l'exercice",
      list: 'Liste des exercices',
    },
  },
  grade: {
    singular: 'Niveau scolaire',
    plural: 'Niveaux scolaires',
    article: {
      definite: 'le',
      indefinite: 'un',
    },
    actions: {
      add: 'Ajouter un niveau scolaire',
      edit: 'Éditer le niveau scolaire',
      delete: 'Supprimer le niveau scolaire',
      view: 'Voir le niveau scolaire',
      list: 'Liste des niveaux scolaires',
    },
  },
  subject: {
    singular: 'Matière',
    plural: 'Matières',
    article: {
      definite: 'la',
      indefinite: 'une',
    },
    actions: {
      add: 'Ajouter une matière',
      edit: 'Éditer la matière',
      delete: 'Supprimer la matière',
      view: 'Voir la matière',
      list: 'Liste des matières',
    },
  },
  theme: {
    singular: 'Thème',
    plural: 'Thèmes',
    article: {
      definite: 'le',
      indefinite: 'un',
    },
    actions: {
      add: 'Ajouter un thème',
      edit: 'Éditer le thème',
      delete: 'Supprimer le thème',
      view: 'Voir le thème',
      list: 'Liste des thèmes',
    },
  },
  user: {
    singular: 'Utilisateur',
    plural: 'Utilisateurs',
    article: {
      definite: "l'",
      indefinite: 'un',
    },
    actions: {
      add: 'Ajouter un utilisateur',
      edit: "Éditer l'utilisateur",
      delete: "Supprimer l'utilisateur",
      view: "Voir l'utilisateur",
      list: 'Liste des utilisateurs',
    },
  },
};

/**
 * Helper pour obtenir la traduction d'une entité
 */
export function getEntityTranslation(entity: EntityKey): EntityTranslation {
  return entityTranslations[entity];
}

/**
 * Helper pour obtenir le nom d'une action
 */
export function getActionLabel(entity: EntityKey, action: keyof EntityTranslation['actions']): string {
  return entityTranslations[entity].actions[action];
}

/**
 * Helper pour générer un titre avec article
 */
export function getEntityWithArticle(entity: EntityKey, useDefinite: boolean = true): string {
  const translation = entityTranslations[entity];
  const article = useDefinite ? translation.article.definite : translation.article.indefinite;
  return `${article} ${translation.singular.toLowerCase()}`;
}
