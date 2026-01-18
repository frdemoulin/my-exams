export type ThemeSeed = {
  title: string;
  shortTitle?: string;
  shortDescription: string;
  longDescription: string;
  description?: string;
};

export const redoxDomainId = '696d0a80264393540c77d15d';

export const redoxThemes: ThemeSeed[] = [
  {
    title: 'Oxydant et réducteur',
    shortTitle: 'Oxydant / réducteur',
    shortDescription:
      'Identifier les espèces oxydantes et réductrices dans une transformation.',
    longDescription:
      'Ce thème porte sur l’identification des espèces oxydantes et réductrices lors d’une transformation chimique. Il permet de caractériser le rôle des espèces en jeu en termes de perte ou de gain d’électrons.',
    description:
      'À utiliser lorsque l’exercice demande d’identifier un oxydant et un réducteur, ou de qualifier le rôle des espèces dans une transformation. Ne pas utiliser seul si l’exercice porte principalement sur l’écriture complète d’une réaction d’oxydoréduction.',
  },
  {
    title: 'Réaction d’oxydoréduction',
    shortTitle: 'Réaction redox',
    shortDescription:
      'Décrire une transformation chimique comme une réaction d’oxydoréduction.',
    longDescription:
      'Ce thème concerne la description des transformations chimiques mettant en jeu un transfert d’électrons entre un oxydant et un réducteur. Il permet de reconnaître une réaction d’oxydoréduction et d’en interpréter le sens.',
    description:
      'À utiliser lorsque l’énoncé demande de reconnaître ou d’interpréter une réaction comme étant une oxydoréduction, indépendamment de l’écriture détaillée des demi-équations. Peut être combiné avec “Oxydant et réducteur”.',
  },
  {
    title: 'Demi-équations électroniques',
    shortTitle: 'Demi-équations',
    shortDescription:
      'Écrire les demi-équations d’oxydation et de réduction.',
    longDescription:
      'Ce thème porte sur l’écriture des demi-équations électroniques associées à une oxydation et à une réduction. Il permet de modéliser le transfert d’électrons et de préparer l’écriture complète d’une réaction d’oxydoréduction.',
    description:
      'À utiliser lorsque l’exercice demande explicitement d’écrire une demi-équation d’oxydation ou de réduction, ou de relier une espèce à sa demi-équation associée. Peut être combiné avec “Équilibrage d’une réaction d’oxydoréduction”.',
  },
  {
    title: 'Équilibrage d’une réaction d’oxydoréduction',
    shortTitle: 'Équilibrage redox',
    shortDescription:
      'Équilibrer une réaction d’oxydoréduction à l’aide des demi-équations.',
    longDescription:
      'Ce thème concerne l’équilibrage d’une réaction d’oxydoréduction en utilisant la méthode des demi-équations électroniques. Il permet de respecter la conservation des charges et des éléments lors de l’écriture de l’équation globale.',
    description:
      'À utiliser lorsque l’exercice demande explicitement d’équilibrer une équation d’oxydoréduction, en particulier en solution aqueuse. À associer aux thèmes “Demi-équations électroniques” et “Réaction d’oxydoréduction”.',
  },
  {
    title: 'Pile électrochimique',
    shortTitle: 'Pile électrochimique',
    shortDescription:
      'Modéliser une pile électrochimique comme générateur électrique.',
    longDescription:
      'Ce thème porte sur le fonctionnement d’une pile électrochimique, vue comme un dispositif convertissant de l’énergie chimique en énergie électrique. Il permet de relier les réactions d’oxydoréduction aux courants électriques produits.',
    description:
      'À utiliser lorsque l’exercice décrit ou exploite une pile électrochimique (schéma, réactions aux électrodes, sens du courant, rôle du pont salin). Peut être combiné avec “Tension d’une pile” et “Énergie chimique et électrique”.',
  },
  {
    title: 'Tension d’une pile',
    shortTitle: 'Tension de pile',
    shortDescription:
      'Relier la tension d’une pile aux réactions d’oxydoréduction mises en jeu.',
    longDescription:
      'Ce thème concerne la tension électrique délivrée par une pile électrochimique et son lien avec les couples oxydant/réducteur impliqués. Il permet d’interpréter ou de calculer une tension de pile dans des situations simples.',
    description:
      'À utiliser lorsque l’exercice demande de déterminer ou d’interpréter la tension d’une pile électrochimique, à partir des couples redox ou de données fournies. Peut être combiné avec “Pile électrochimique”.',
  },
  {
    title: 'Énergie chimique et électrique',
    shortTitle: 'Énergie chim. / élec.',
    shortDescription:
      'Relier énergie chimique et énergie électrique lors d’une conversion.',
    longDescription:
      'Ce thème porte sur la conversion d’énergie chimique en énergie électrique dans les dispositifs électrochimiques, notamment les piles. Il permet d’analyser les bilans énergétiques et l’efficacité de la conversion.',
    description:
      'À utiliser lorsque l’exercice aborde explicitement la conversion d’énergie (chimique vers électrique), l’énergie fournie par une pile ou le lien entre énergie, tension et charge transférée. Peut être combiné avec “Pile électrochimique” et des thèmes d’électricité (puissance, énergie électrique).',
  },
];
