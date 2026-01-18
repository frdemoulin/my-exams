export type ThemeSeed = {
  title: string;
  shortTitle?: string;
  shortDescription: string;
  longDescription: string;
  description?: string;
};

export const chemicalKineticsDomainId = '696d0ac7264393540c77d15e';

export const chemicalKineticsThemes: ThemeSeed[] = [
  {
    title: 'Vitesse de réaction',
    shortTitle: 'Vitesse de réaction',
    shortDescription:
      'Définir et interpréter la vitesse d’une réaction chimique.',
    longDescription:
      'Ce thème porte sur la notion de vitesse de réaction chimique, qui décrit la rapidité avec laquelle une transformation se déroule. Il permet d’interpréter l’évolution des quantités de matière au cours du temps et de comparer la rapidité de différentes réactions.',
    description:
      'À utiliser lorsque l’exercice demande de définir, calculer ou comparer une vitesse de réaction à partir de données expérimentales (variation de quantité de matière, de concentration ou d’avancement au cours du temps). Peut être combiné avec “Évolution temporelle d’une transformation”.',
  },
  {
    title: 'Évolution temporelle d’une transformation',
    shortTitle: 'Évolution temporelle',
    shortDescription:
      'Décrire l’évolution d’une transformation chimique au cours du temps.',
    longDescription:
      'Ce thème concerne la description de l’évolution d’une transformation chimique en fonction du temps, à partir de courbes expérimentales ou de tableaux de mesures. Il permet d’identifier les différentes phases d’une réaction et d’interpréter l’état final atteint.',
    description:
      'À utiliser lorsque l’exercice met en jeu des graphes ou tableaux montrant l’évolution temporelle d’une grandeur (avancement, concentration, volume de gaz, etc.), sans nécessairement demander un calcul explicite de vitesse. Peut être combiné avec “Vitesse de réaction” et “Temps de demi-réaction”.',
  },
  {
    title: 'Temps de demi-réaction',
    shortTitle: 'Temps de demi-réaction',
    shortDescription:
      'Déterminer le temps de demi-réaction d’une transformation chimique.',
    longDescription:
      'Ce thème porte sur le temps de demi-réaction, grandeur caractéristique d’une transformation chimique correspondant au temps nécessaire pour que l’avancement atteigne la moitié de sa valeur finale. Il permet de comparer la rapidité de différentes réactions.',
    description:
      'À utiliser lorsque l’exercice demande d’identifier ou de calculer un temps de demi-réaction à partir d’une courbe d’évolution temporelle ou de données expérimentales. Peut être combiné avec “Vitesse de réaction” et “Évolution temporelle d’une transformation”.',
  },
  {
    title: 'Facteurs cinétiques',
    shortTitle: 'Facteurs cinétiques',
    shortDescription:
      'Identifier les facteurs influençant la vitesse d’une réaction chimique.',
    longDescription:
      'Ce thème concerne les facteurs cinétiques susceptibles d’influencer la vitesse d’une réaction chimique, tels que la concentration des réactifs, la température, la surface de contact ou la présence d’un catalyseur. Il permet d’interpréter qualitativement des variations de rapidité.',
    description:
      'À utiliser lorsque l’exercice compare plusieurs expériences ou situations mettant en évidence l’influence d’un paramètre (température, concentration, catalyseur, surface) sur la vitesse de réaction, sans modélisation mathématique avancée.',
  },
  {
    title: 'Modélisation de l’évolution d’un système chimique',
    shortTitle: 'Modélisation cinétique',
    shortDescription:
      'Modéliser l’évolution d’un système chimique à l’aide de grandeurs cinétiques.',
    longDescription:
      'Ce thème porte sur la modélisation de l’évolution d’un système chimique en utilisant des grandeurs cinétiques simples, comme l’avancement en fonction du temps ou la vitesse de réaction. Il permet de relier des observations expérimentales à un modèle descriptif.',
    description:
      'À utiliser lorsque l’exercice demande de proposer, exploiter ou discuter un modèle décrivant l’évolution temporelle d’une transformation chimique (choix de grandeurs, interprétation de courbes, cohérence du modèle). Peut être combiné avec “Évolution temporelle d’une transformation”.',
  },
  {
    title: 'Catalyse',
    shortTitle: 'Catalyse',
    shortDescription:
      'Interpréter le rôle d’un catalyseur dans une transformation chimique.',
    longDescription:
      'Ce thème concerne la catalyse, c’est-à-dire l’action d’un catalyseur sur la vitesse d’une réaction chimique sans modification de l’état final du système. Il permet de distinguer catalyse homogène et hétérogène et d’interpréter des résultats expérimentaux.',
    description:
      'À utiliser lorsque l’exercice introduit ou exploite explicitement la notion de catalyseur, ou compare une transformation catalysée à une transformation non catalysée. Peut être combiné avec “Facteurs cinétiques” et “Vitesse de réaction”.',
  },
];
