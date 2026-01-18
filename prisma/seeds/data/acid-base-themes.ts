export type ThemeSeed = {
  title: string;
  shortTitle?: string;
  shortDescription: string;
  longDescription: string;
  description?: string;
};

export const acidBaseDomainId = '696d0a64264393540c77d15c';

export const acidBaseThemes: ThemeSeed[] = [
  {
    title: 'Couple acide-base',
    shortTitle: 'Couple acide-base',
    shortDescription:
      'Identifier un couple acide-base et relier acide et base conjugués.',
    longDescription:
      'Ce thème porte sur la notion de couple acide-base au sens de Brønsted, reliant un acide et sa base conjuguée par un transfert de proton. Il permet d’identifier les espèces acides et basiques présentes dans une réaction en solution aqueuse.',
    description:
      'À utiliser lorsque l’exercice demande d’identifier ou d’écrire des couples acide-base, ou de relier deux espèces conjuguées par un transfert de proton. Ne pas utiliser seul si le cœur de l’exercice est le calcul de pH ou l’étude d’un titrage.',
  },
  {
    title: 'Réaction acido-basique',
    shortTitle: 'Réaction acido-basique',
    shortDescription:
      'Écrire et interpréter une réaction acido-basique en solution aqueuse.',
    longDescription:
      'Ce thème concerne l’écriture et l’exploitation des réactions acido-basiques en solution aqueuse, en identifiant les couples acide-base mis en jeu et le sens de la réaction. Il permet de modéliser des transformations par transfert de proton.',
    description:
      'À utiliser lorsque l’énoncé demande d’écrire ou d’interpréter une réaction acido-basique (neutralisation, réaction entre un acide et une base), sans se limiter à la seule identification des couples. Peut être combiné avec “Couple acide-base” et “Réaction totale et réaction limitée”.',
  },
  {
    title: 'pH',
    shortTitle: 'pH',
    shortDescription:
      'Interpréter et exploiter la valeur du pH d’une solution aqueuse.',
    longDescription:
      'Ce thème porte sur la notion de pH comme indicateur de l’acidité ou de la basicité d’une solution aqueuse. Il permet d’interpréter une valeur de pH, de comparer des solutions et, dans certains cas, de calculer ou d’estimer un pH.',
    description:
      'À utiliser dès que l’énoncé mentionne ou exploite la grandeur pH (mesure, lecture, comparaison, évolution). Peut être combiné avec les thèmes “Équilibre acido-basique”, “Titrage acido-basique” et “Indicateur coloré”.',
  },
  {
    title: 'Constante d’acidité',
    shortTitle: 'Constante d’acidité',
    shortDescription:
      'Relier la force d’un acide à sa constante d’acidité.',
    longDescription:
      'Ce thème concerne la constante d’acidité, qui caractérise la force d’un acide en solution aqueuse. Il permet de comparer des acides, d’interpréter des données quantitatives et de relier la constante d’acidité à l’état d’équilibre d’une solution.',
    description:
      'À utiliser lorsque l’exercice introduit ou exploite une constante d’acidité (Ka ou pKa) pour comparer des acides ou discuter du sens et de l’importance d’une réaction acido-basique. Peut être combiné avec “Équilibre acido-basique”.',
  },
  {
    title: 'Équilibre acido-basique',
    shortTitle: 'Équilibre acido-basique',
    shortDescription:
      'Analyser un équilibre acido-basique en solution aqueuse.',
    longDescription:
      'Ce thème porte sur l’étude des équilibres acido-basiques en solution aqueuse, en lien avec les réactions non totales. Il permet d’interpréter la coexistence de réactifs et de produits à l’équilibre et le rôle des constantes associées.',
    description:
      'À utiliser lorsque l’exercice insiste sur la notion d’équilibre (réaction non totale, coexistence d’espèces acides et basiques), avec ou sans calculs détaillés. Peut être combiné avec “Constante d’acidité” et “pH”.',
  },
  {
    title: 'Réaction totale et réaction limitée',
    shortTitle: 'Totale / limitée',
    shortDescription:
      'Distinguer une réaction acido-basique totale d’une réaction limitée.',
    longDescription:
      'Ce thème concerne la distinction entre réactions acido-basiques totales et réactions limitées, selon la force relative des acides et des bases mis en jeu. Il permet de prévoir le sens d’évolution d’une transformation et les espèces dominantes à l’état final.',
    description:
      'À utiliser lorsque l’exercice demande de qualifier une réaction acido-basique de totale ou limitée, ou d’expliquer cette distinction à partir des couples acide-base et de leurs constantes. Peut être combiné avec “Réaction acido-basique” et “Équilibre acido-basique”.',
  },
  {
    title: 'Titrage acido-basique',
    shortTitle: 'Titrage acido-basique',
    shortDescription:
      'Analyser un titrage acido-basique pour déterminer une concentration.',
    longDescription:
      'Ce thème porte sur la mise en œuvre et l’exploitation des titrages acido-basiques. Il permet d’analyser un dosage, d’identifier l’équivalence et d’en déduire la concentration d’une solution inconnue.',
    description:
      'À utiliser lorsque l’exercice décrit un dosage acido-basique (montage, protocole, courbe de titrage) et demande de déterminer une concentration ou d’interpréter l’équivalence. Peut être combiné avec “Équivalence”, “pH” et “Indicateur coloré”.',
  },
  {
    title: 'Équivalence',
    shortTitle: 'Équivalence',
    shortDescription:
      'Identifier et exploiter le point d’équivalence lors d’un titrage acido-basique.',
    longDescription:
      'Ce thème concerne le point d’équivalence d’un titrage acido-basique, correspondant aux proportions stœchiométriques entre réactifs. Il permet d’interpréter des courbes de titrage et de relier l’équivalence aux quantités de matière mises en jeu.',
    description:
      'À utiliser lorsque l’exercice met l’accent sur la détermination ou l’interprétation du point d’équivalence (volume équivalent, saut de pH, condition stœchiométrique). À associer au thème “Titrage acido-basique”.',
  },
  {
    title: 'Indicateur coloré',
    shortTitle: 'Indicateur coloré',
    shortDescription:
      'Utiliser un indicateur coloré pour repérer une équivalence acido-basique.',
    longDescription:
      'Ce thème porte sur l’utilisation d’indicateurs colorés pour suivre une transformation acido-basique ou repérer l’équivalence lors d’un titrage. Il permet de relier la zone de virage d’un indicateur au pH de la solution.',
    description:
      'À utiliser lorsque l’exercice évoque le choix ou l’utilisation d’un indicateur coloré (zone de virage, changement de couleur) pour suivre un titrage ou une transformation acido-basique. Peut être combiné avec “Titrage acido-basique” et “pH”.',
  },
  {
    title: 'Suivi d’une transformation en solution',
    shortTitle: 'Suivi d’une transformation',
    shortDescription:
      'Suivre l’évolution d’une transformation chimique en solution aqueuse.',
    longDescription:
      'Ce thème concerne les différentes méthodes de suivi d’une transformation chimique en solution aqueuse, notamment par pH-métrie, conductimétrie ou observation de changements visuels. Il permet de relier des mesures expérimentales à l’avancement de la réaction.',
    description:
      'À utiliser lorsque l’exercice compare ou exploite différentes méthodes de suivi d’une transformation en solution, sans se limiter au seul cas du titrage acido-basique. Peut être combiné avec “Titrage acido-basique”, “pH” ou des thèmes de cinétique chimique.',
  },
];
