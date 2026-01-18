export type ThemeSeed = {
  title: string;
  shortTitle?: string;
  shortDescription: string;
  longDescription: string;
  description?: string;
};

export const matterConstitutionDomainId = '696d0a19264393540c77d15b';

export const matterConstitutionThemes: ThemeSeed[] = [
  {
    title: 'Quantité de matière',
    shortTitle: 'Quantité de matière',
    shortDescription:
      'Relier quantité de matière, masse, volume et nombre d’entités chimiques.',
    longDescription:
      'Ce thème porte sur la quantité de matière comme grandeur de base en chimie. Il permet de relier la quantité de matière d’un échantillon à sa masse, à son volume (pour certains gaz) et au nombre d’entités chimiques qu’il contient.',
    description:
      'À utiliser lorsque l’exercice introduit ou exploite la notion de quantité de matière n sans focaliser sur un aspect particulier (mole, masse molaire, concentration). Peut être combiné avec les thèmes “Mole”, “Nombre d’entités chimiques”, “Masse molaire” et “Concentration”.',
  },
  {
    title: 'Mole',
    shortTitle: 'Mole',
    shortDescription:
      'Utiliser la mole comme unité de quantité de matière en chimie.',
    longDescription:
      'Ce thème concerne la mole comme unité de quantité de matière, permettant de relier des quantités macroscopiques (masses, volumes) au nombre d’entités microscopiques. Il met en avant la définition de la mole et son rôle central dans les calculs chimiques.',
    description:
      'À utiliser lorsque l’énoncé insiste sur la notion de mole, sa définition ou l’utilisation explicite de cette unité dans des calculs simples. Peut être combiné avec les thèmes “Quantité de matière” et “Nombre d’entités chimiques”.',
  },
  {
    title: 'Nombre d’entités chimiques',
    shortTitle: 'Nombre d’entités',
    shortDescription:
      'Relier le nombre d’entités à la quantité de matière et à la constante d’Avogadro.',
    longDescription:
      'Ce thème porte sur le lien entre quantité de matière, nombre d’entités chimiques (atomes, molécules, ions) et constante d’Avogadro. Il permet de passer d’une description microscopique (N entités) à une description macroscopique (n moles) et inversement.',
    description:
      'À utiliser lorsque l’exercice demande de calculer un nombre d’entités à partir d’une quantité de matière, ou l’inverse, en utilisant la constante d’Avogadro. Peut être combiné avec les thèmes “Quantité de matière” et “Mole”.',
  },
  {
    title: 'Masse molaire',
    shortTitle: 'Masse molaire',
    shortDescription:
      'Relier masse, quantité de matière et masse molaire d’une espèce.',
    longDescription:
      'Ce thème concerne la masse molaire d’une espèce chimique et l’utilisation de la relation m = n × M pour relier la masse d’un échantillon et la quantité de matière correspondante. Il inclut la détermination de masses molaires à partir des formules chimiques ou de tables.',
    description:
      'À utiliser lorsque l’énoncé demande de calculer une masse à partir d’une quantité de matière (ou l’inverse) en utilisant la masse molaire, ou de déterminer une masse molaire à partir d’une formule chimique. Peut être combiné avec les thèmes “Quantité de matière” et “Mole”.',
  },
  {
    title: 'Concentration (massique et molaire)',
    shortTitle: 'Concentration',
    shortDescription:
      'Exprimer et utiliser la concentration d’une espèce en solution.',
    longDescription:
      'Ce thème porte sur la concentration d’une espèce en solution, qu’elle soit massique ou molaire, et sur les relations qui la lient à la quantité de matière, à la masse et au volume de la solution. Il permet de décrire quantitativement la composition des solutions.',
    description:
      'À utiliser lorsque l’exercice demande de calculer ou d’exploiter une concentration (massique ou molaire), ou de relier quantité de matière, masse ou volume à la concentration d’une espèce en solution. Peut être combiné avec les thèmes “Quantité de matière”, “Masse molaire” et, dans certains cas, “Titrage acido-basique”.',
  },
  {
    title: 'Transformation chimique',
    shortTitle: 'Transformation chimique',
    shortDescription:
      'Décrire une transformation chimique à partir de l’évolution des espèces en présence.',
    longDescription:
      'Ce thème concerne la description qualitative d’une transformation chimique : disparition de certains réactifs, apparition de produits, observation de phénomènes (changement de couleur, précipité, dégagement gazeux…). Il précède ou accompagne l’écriture de l’équation de réaction.',
    description:
      'À utiliser lorsque l’exercice se concentre sur la description d’une transformation (avant toute formalisation complète par une équation), ou lorsque le point clé est l’identification des réactifs et des produits à partir d’observations. Peut être combiné avec le thème “Réaction chimique”.',
  },
  {
    title: 'Réaction chimique',
    shortTitle: 'Réaction chimique',
    shortDescription:
      'Écrire et exploiter l’équation d’une réaction chimique équilibrée.',
    longDescription:
      'Ce thème porte sur l’écriture et l’exploitation d’une réaction chimique sous forme d’équation équilibrée, en respectant les lois de conservation. Il permet de modéliser une transformation chimique et de relier les quantités de réactifs et de produits en jeu.',
    description:
      'À utiliser lorsque l’énoncé demande d’écrire ou d’exploiter une équation de réaction (équilibrage, liens stœchiométriques, ratios entre réactifs et produits). Peut être combiné avec les thèmes “Transformations chimique”, “Lois de conservation”, “Avancement d’une réaction” et “Réactif limitant”.',
  },
  {
    title: 'Lois de conservation',
    shortTitle: 'Lois de conservation',
    shortDescription:
      'Appliquer les lois de conservation de la masse et des éléments chimiques.',
    longDescription:
      'Ce thème concerne l’application des lois de conservation (masse, éléments chimiques, charge) lors d’une transformation chimique. Il permet de justifier l’équilibrage des équations et de vérifier la cohérence des bilans de matière.',
    description:
      'À utiliser lorsque l’énoncé insiste sur la conservation de la masse, des atomes d’un élément, ou de la charge, ou demande de vérifier la cohérence d’une équation chimique. Peut être combiné avec le thème “Réaction chimique” et, en approfondissement, avec des thèmes spécifiques (acide-base, oxydoréduction).',
  },
  {
    title: 'Avancement d’une réaction',
    shortTitle: 'Avancement',
    shortDescription:
      'Suivre l’évolution d’un système chimique à l’aide de l’avancement.',
    longDescription:
      'Ce thème porte sur la notion d’avancement d’une réaction chimique pour décrire l’évolution d’un système depuis l’état initial jusqu’à un état intermédiaire ou final. Il permet de relier les quantités de matière des différentes espèces à la progression de la transformation.',
    description:
      'À utiliser lorsque l’exercice introduit ou exploite la grandeur x (avancement), que ce soit sous forme littérale ou numérique, pour suivre l’évolution des quantités de réactifs et de produits. Peut être combiné avec les thèmes “Tableau d’avancement”, “Réactif limitant” et “Rendement d’une transformation”.',
  },
  {
    title: 'Tableau d’avancement',
    shortTitle: 'Tableau d’avancement',
    shortDescription:
      'Mettre en place et exploiter un tableau d’avancement pour une réaction.',
    longDescription:
      'Ce thème concerne la construction et l’exploitation d’un tableau d’avancement pour une réaction donnée, en fonction de l’avancement x. Il permet de déterminer les quantités de matière des différentes espèces à chaque étape (état initial, intermédiaire, final).',
    description:
      'À utiliser lorsque l’énoncé demande explicitement de construire ou d’utiliser un tableau d’avancement, ou lorsque la progression d’une réaction doit être suivie de manière systématique jusqu’à l’état final. Peut être combiné avec les thèmes “Avancement d’une réaction” et “Réactif limitant”.',
  },
  {
    title: 'Réactif limitant',
    shortTitle: 'Réactif limitant',
    shortDescription:
      'Identifier le réactif limitant d’une transformation chimique.',
    longDescription:
      'Ce thème porte sur la notion de réactif limitant, c’est-à-dire le réactif totalement consommé lors d’une transformation chimique, qui détermine la quantité maximale de produits formés. Il permet de comparer les quantités initiales des réactifs à la stœchiométrie de la réaction.',
    description:
      'À utiliser lorsque l’exercice demande d’identifier le réactif limitant, de prédire la quantité maximale de produit formé, ou de déterminer quelles espèces restent en excès. Peut être combiné avec les thèmes “Avancement d’une réaction”, “Tableau d’avancement” et “Rendement d’une transformation”.',
  },
  {
    title: 'Rendement d’une transformation',
    shortTitle: 'Rendement',
    shortDescription:
      'Comparer la quantité de produit obtenue à la quantité théorique attendue.',
    longDescription:
      'Ce thème concerne la notion de rendement d’une transformation chimique, qui compare la quantité de produit effectivement obtenue à la quantité théorique maximale prédite par le modèle stœchiométrique. Il permet de quantifier l’efficacité d’une synthèse ou d’une expérience.',
    description:
      'À utiliser lorsque l’exercice demande de calculer ou d’interpréter un rendement (en pourcentage), en comparant une valeur expérimentale à une valeur théorique issue du tableau d’avancement et de l’identification du réactif limitant. À combiner avec les thèmes “Réactif limitant”, “Avancement d’une réaction” et “Tableau d’avancement”.',
  },
];
