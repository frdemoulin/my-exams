export type ThemeSeed = {
  title: string;
  shortTitle?: string;
  shortDescription: string;
  longDescription: string;
  description?: string;
};

export const thermodynamicsDomainId = '696d098b264393540c77d15a';

export const thermodynamicsThemes: ThemeSeed[] = [
  {
    title: 'Température',
    shortTitle: 'Température',
    shortDescription:
      'Définir et mesurer la température, et interpréter son rôle dans les échanges thermiques.',
    longDescription:
      'Ce thème porte sur la notion de température comme grandeur d’état liée à l’agitation thermique de la matière. Il inclut la mesure de la température, les échelles usuelles, et l’interprétation de la température dans l’étude des équilibres et des transferts thermiques.',
    description:
      'À utiliser lorsque l’exercice met en jeu la mesure ou l’interprétation d’une température (équilibre thermique, comparaison de températures, évolution temporelle de T). Peut être combiné avec les thèmes “Chaleur”, “Transferts thermiques” et “Capacité thermique”.',
  },
  {
    title: 'Chaleur',
    shortTitle: 'Chaleur',
    shortDescription:
      'Comprendre la chaleur comme transfert d’énergie lié à une différence de température.',
    longDescription:
      'Ce thème concerne la chaleur comme énergie transférée entre systèmes du fait d’une différence de température. Il permet de distinguer chaleur et température, d’interpréter un échange thermique et de relier la chaleur échangée à des variations d’état énergétique.',
    description:
      'À utiliser lorsque l’énoncé parle de chaleur échangée, d’énergie thermique transférée, ou demande de distinguer chaleur et température. Souvent combiné avec “Capacité thermique” (calculs) et “Premier principe de la thermodynamique” (bilans).',
  },
  {
    title: 'Transferts thermiques',
    shortTitle: 'Transferts thermiques',
    shortDescription:
      'Identifier les modes de transfert thermique et interpréter un échange d’énergie.',
    longDescription:
      'Ce thème porte sur les modes de transfert thermique (conduction, convection, rayonnement) et sur l’interprétation qualitative ou quantitative d’échanges d’énergie entre systèmes. Il permet d’analyser des situations de chauffage, de refroidissement et d’isolation.',
    description:
      'À utiliser lorsque l’exercice demande d’identifier ou de comparer les modes de transfert (conduction/convection/rayonnement) ou d’expliquer un chauffage/refroidissement. Peut être combiné avec “Température” et “Chaleur”. Les calculs de Q = m c ΔT relèvent plutôt du thème “Capacité thermique”.',
  },
  {
    title: 'Capacité thermique',
    shortTitle: 'Capacité thermique',
    shortDescription:
      'Relier chaleur échangée, masse, variation de température et capacité thermique.',
    longDescription:
      'Ce thème concerne l’exploitation de la relation entre chaleur échangée, masse, capacité thermique massique et variation de température. Il permet de réaliser des calculs d’énergie thermique transférée lors d’un chauffage ou d’un refroidissement, et d’interpréter des expériences de calorimétrie simple.',
    description:
      'À utiliser lorsque l’exercice mobilise explicitement Q = m c ΔT (ou une capacité thermique) pour calculer une énergie échangée ou une variation de température. Peut être combiné avec “Transferts thermiques” (contexte) et “Premier principe de la thermodynamique” (bilan).',
  },
  {
    title: 'Énergie thermique',
    shortTitle: 'Énergie thermique',
    shortDescription:
      'Interpréter l’énergie thermique d’un système et ses variations lors d’échanges.',
    longDescription:
      'Ce thème porte sur l’interprétation de l’énergie thermique (énergie interne dans un cadre lycée) et sur ses variations lors d’échanges d’énergie. Il aide à relier des situations concrètes (chauffage, refroidissement, compression/détente) à une évolution énergétique du système.',
    description:
      'À utiliser lorsque l’exercice parle d’énergie interne ou d’énergie thermique d’un système, ou demande d’interpréter une variation d’énergie au-delà d’un simple calcul Q = m c ΔT. Souvent combiné avec “Premier principe de la thermodynamique”.',
  },
  {
    title: 'Gaz parfait',
    shortTitle: 'Gaz parfait',
    shortDescription:
      'Modéliser un gaz par le modèle du gaz parfait et interpréter ses grandeurs d’état.',
    longDescription:
      'Ce thème concerne le modèle du gaz parfait et la description d’un état par les grandeurs pression, volume, température et quantité de matière. Il permet d’interpréter des transformations simples et de relier la description macroscopique à des usages pratiques.',
    description:
      'À utiliser lorsque l’exercice indique explicitement qu’on modélise un gaz comme parfait, ou manipule pression/volume/température/quantité de matière dans ce cadre. Peut être combiné avec “Équation d’état” et “Transformations thermodynamiques”.',
  },
  {
    title: 'Équation d’état',
    shortTitle: 'Équation d’état',
    shortDescription:
      'Utiliser l’équation d’état d’un gaz parfait pour relier P, V, T et n.',
    longDescription:
      'Ce thème porte sur l’exploitation de l’équation d’état des gaz parfaits pour relier pression, volume, température et quantité de matière. Il permet de résoudre des problèmes quantitatifs sur l’état d’un gaz et sur l’évolution d’un état initial vers un état final.',
    description:
      'À utiliser lorsque l’exercice mobilise explicitement l’équation d’état (relation entre P, V, T, n) pour déterminer une grandeur inconnue ou comparer deux états. À combiner avec “Gaz parfait” et, si une transformation est étudiée, avec “Transformations thermodynamiques”.',
  },
  {
    title: 'Transformations thermodynamiques',
    shortTitle: 'Transformations thermo',
    shortDescription:
      'Décrire une transformation d’un système (états initial/final) et ses contraintes.',
    longDescription:
      'Ce thème concerne la description de transformations thermodynamiques entre un état initial et un état final, en identifiant les grandeurs d’état pertinentes et les contraintes imposées (évolution à pression constante, volume constant, etc.). Il prépare l’utilisation de bilans énergétiques.',
    description:
      'À utiliser lorsque l’exercice décrit un changement d’état macroscopique d’un système (gaz, fluide) avec des contraintes (volume constant, pression constante, etc.), même si le calcul d’énergie n’est pas central. Souvent combiné avec “Gaz parfait”, “Équation d’état” et “Premier principe de la thermodynamique”.',
  },
  {
    title: 'Premier principe de la thermodynamique',
    shortTitle: '1er principe',
    shortDescription:
      'Établir un bilan d’énergie en distinguant transferts thermiques et travail.',
    longDescription:
      'Ce thème porte sur le premier principe de la thermodynamique comme bilan d’énergie d’un système : variation d’énergie interne liée aux échanges par transfert thermique et par travail. Il permet d’analyser des transformations en reliant les grandeurs énergétiques aux grandeurs d’état.',
    description:
      'À utiliser lorsque l’exercice demande explicitement un bilan énergétique de type premier principe (variation d’énergie interne, échanges de chaleur et de travail). Peut être combiné avec “Transformations thermodynamiques”, “Gaz parfait”, “Énergie thermique” et “Capacité thermique”.',
  },
  {
    title: 'Rendement énergétique',
    shortTitle: 'Rendement',
    shortDescription:
      'Définir et calculer un rendement énergétique pour un dispositif ou une transformation.',
    longDescription:
      'Ce thème concerne la notion de rendement, qui compare l’énergie (ou la puissance) utile obtenue à l’énergie (ou puissance) reçue. Il permet d’évaluer l’efficacité énergétique de dispositifs (moteurs, systèmes de chauffage, conversions d’énergie) et d’interpréter les pertes.',
    description:
      'À utiliser lorsque l’exercice demande de calculer ou d’interpréter un rendement (η), une puissance utile vs une puissance reçue, ou de quantifier des pertes énergétiques. Peut être combiné avec “Premier principe de la thermodynamique” (bilan) ou avec des thèmes d’électricité/mécanique selon le système étudié.',
  },
];
