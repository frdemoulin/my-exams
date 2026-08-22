import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie générale
 * Chapitre 3 – Orbitales moléculaires
 * Section C – Liaisons multiples, carbone et aromaticité
 */

export const UE14_CH3_MULTIPLES_CARBONE_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 41,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux propositions correctes concernant les liaisons multiples.`,
    choices: [
      { content: `Une double liaison contient une liaison $\\sigma$ et une liaison $\\pi$.`, correct: true, explanation: `Vrai.` },
      { content: `Une triple liaison contient une liaison $\\sigma$ et deux liaisons $\\pi$.`, correct: true, explanation: `Vrai.` },
      { content: `Une double liaison contient deux liaisons $\\sigma$.`, correct: false, explanation: `Elle contient une sigma et une pi.` },
      { content: `Une triple liaison ne contient aucune liaison $\\sigma$.`, correct: false, explanation: `La première composante est toujours sigma.` },
    ],
    explanation: `Entre deux atomes, la première composante est sigma ; les composantes supplémentaires d'une liaison multiple sont de type pi.`,
  },
  {
    order: 42,
    difficulty: 'EASY',
    format: 'QRM',
    question: `À propos de l'éthylène $\\ce{CH2=CH2}$, quelles propositions sont exactes ?`,
    choices: [
      { content: `Chaque carbone est hybridé $\\mathrm{sp}^2$.`, correct: true, explanation: `Trois directions sigma autour de chaque carbone.` },
      { content: `Autour de chaque carbone, les trois directions sigma sont approximativement coplanaires à $120^\\circ$.`, correct: true, explanation: `C'est l'organisation sp2.` },
      { content: `Chaque carbone conserve une orbitale $\\mathrm{p}$ non hybridée.`, correct: true, explanation: `Elle participe à la liaison pi C=C.` },
      { content: `Chaque carbone est $\\mathrm{sp}^3$.`, correct: false, explanation: `Une hybridation sp3 ne laisserait pas d'orbitale p pour la liaison pi.` },
    ],
    explanation: `L'éthylène constitue l'exemple classique de deux carbones sp2 reliés par une composante sigma et une composante pi.`,
  },
  {
    order: 43,
    difficulty: 'EASY',
    format: 'QROC',
    question: `Dans l'éthylène $\\ce{CH2=CH2}$, combien de liaisons $\\sigma$ sont présentes au total ?`,
    answer: { type: 'number', value: 5, tolerance: 0 },
    explanation: `Les quatre liaisons C–H sont sigma et la double liaison C=C contient une composante sigma : total 5.`,
  },
  {
    order: 44,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Pourquoi la rotation autour de la double liaison $\\ce{C=C}$ de l'éthylène n'est-elle pas libre ?`,
    choices: [
      { content: `Parce qu'une rotation désalignerait les orbitales $\\mathrm{p}$ parallèles responsables de la liaison $\\pi$.`, correct: true, explanation: `C'est la contrainte imposée par le recouvrement latéral.` },
      { content: `Parce que la liaison $\\sigma$ est dépourvue de symétrie axiale.`, correct: false, explanation: `La liaison sigma possède au contraire une symétrie axiale.` },
      { content: `Parce que chaque carbone porte deux doublets non liants.`, correct: false, explanation: `Ce n'est pas le cas dans l'éthylène.` },
      { content: `Parce que la double liaison comporte deux liaisons sigma rigides.`, correct: false, explanation: `Elle comporte une sigma et une pi.` },
    ],
    explanation: `La composante pi nécessite le maintien du parallélisme des orbitales p ; une rotation détruirait progressivement leur recouvrement.`,
  },
  {
    order: 45,
    difficulty: 'EASY',
    format: 'QRM',
    question: `À propos de l'acétylène $\\ce{HC#CH}$, quelles propositions sont exactes ?`,
    choices: [
      { content: `Chaque carbone est hybridé $\\mathrm{sp}$.`, correct: true, explanation: `Deux directions sigma autour de chaque carbone.` },
      { content: `La molécule est linéaire avec un angle de $180^\\circ$.`, correct: true, explanation: `Deux orbitales sp sont opposées.` },
      { content: `La triple liaison C≡C contient une sigma et deux pi.`, correct: true, explanation: `Composition d'une triple liaison.` },
      { content: `Chaque carbone est hybridé $\\mathrm{sp}^3$.`, correct: false, explanation: `Cela ne laisserait aucune orbitale p pour les deux pi.` },
    ],
    explanation: `L'acétylène illustre l'hybridation sp et la présence de deux orbitales p non hybridées sur chaque carbone.`,
  },
  {
    order: 46,
    difficulty: 'EASY',
    format: 'QROC',
    question: `Après hybridation $\\mathrm{sp}$ d'un carbone, combien d'orbitales $\\mathrm{p}$ non hybridées restent disponibles ?`,
    answer: { type: 'number', value: 2, tolerance: 0 },
    explanation: `Une orbitale s et une orbitale p forment deux sp ; les deux autres orbitales p restent non hybridées.`,
  },
  {
    order: 47,
    difficulty: 'EASY',
    format: 'QRM',
    question: `Le carbone est parfois présenté comme un « caméléon » dans la fiche. Quelles associations sont exactes ?`,
    choices: [
      { content: `$\\mathrm{sp}^3$ → environnement tétraédrique et liaisons simples.`, correct: true, explanation: `C'est le modèle tétragonal.` },
      { content: `$\\mathrm{sp}^2$ → environnement trigonal plan et double liaison ou système aromatique.`, correct: true, explanation: `C'est le modèle trigonal.` },
      { content: `$\\mathrm{sp}$ → environnement linéaire et triple liaison.`, correct: true, explanation: `C'est le modèle diagonal.` },
      { content: `$\\mathrm{sp}$ → quatre liaisons simples tétraédriques.`, correct: false, explanation: `Cela correspond à sp3.` },
    ],
    explanation: `Le carbone peut adopter des hybridations différentes selon son environnement de liaison : sp3, sp2 ou sp.`,
  },
  {
    order: 48,
    difficulty: 'EASY',
    format: 'QRM',
    question: `À propos du benzène $\\ce{C6H6}$ dans le modèle du cours, quelles propositions sont exactes ?`,
    choices: [
      { content: `Les six carbones sont hybridés $\\mathrm{sp}^2$.`, correct: true, explanation: `Chaque carbone est trigonal plan.` },
      { content: `Les liaisons $\\sigma$ du squelette sont dans le plan de la molécule.`, correct: true, explanation: `Les orbitales sp2 sont coplanaires.` },
      { content: `Chaque carbone conserve une orbitale $\\mathrm{p}$ perpendiculaire au plan.`, correct: true, explanation: `Ces orbitales participent au système pi.` },
      { content: `Les six carbones sont hybridés $\\mathrm{sp}^3$.`, correct: false, explanation: `Le benzène est un système sp2 plan.` },
    ],
    explanation: `Le benzène est un cycle plan de carbones sp2 dont les orbitales p forment un système électronique pi délocalisé.`,
  },
  {
    order: 49,
    difficulty: 'EASY',
    format: 'QRPL',
    requiredSelectionCount: 5,
    question: `Parmi les dix associations suivantes, sélectionnez exactement les cinq où l'atome de carbone indiqué est correctement décrit comme hybridé $\\mathrm{sp}^2$.`,
    choices: [
      { content: `Carbone d'une double liaison dans $\\ce{CH2=CH2}$.`, correct: true, explanation: `Les carbones de l'éthylène sont sp2.` },
      { content: `Carbone d'un carbonyle dans l'acétone $\\ce{CH3-C(=O)-CH3}$.`, correct: true, explanation: `Le carbone carbonylé est sp2.` },
      { content: `Carbone du méthanal $\\ce{H2C=O}$.`, correct: true, explanation: `Le carbone carbonylé est sp2.` },
      { content: `Carbone du noyau benzénique.`, correct: true, explanation: `Chaque carbone aromatique est sp2.` },
      { content: `Carbone du groupement carboxyle $\\ce{-C(=O)-OH}$.`, correct: true, explanation: `Le carbone carbonylé est sp2.` },
      { content: `Carbone du méthane $\\ce{CH4}$.`, correct: false, explanation: `Il est sp3.` },
      { content: `Carbone de l'acétylène $\\ce{HC#CH}$.`, correct: false, explanation: `Il est sp.` },
      { content: `Carbone du cyanure d'hydrogène $\\ce{HCN}$.`, correct: false, explanation: `Il est sp.` },
      { content: `Carbone de l'éthane $\\ce{CH3-CH3}$.`, correct: false, explanation: `Il est sp3.` },
      { content: `Carbone central du dioxyde de carbone $\\ce{CO2}$.`, correct: false, explanation: `Il est sp.` },
    ],
    explanation: `Un carbone sp2 possède trois directions sigma coplanaires et une orbitale p non hybridée ; on le rencontre notamment dans les doubles liaisons, carbonyles et cycles aromatiques.`,
  },
  {
    order: 50,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `On compare l'éthane $\\ce{CH3-CH3}$, l'éthylène $\\ce{CH2=CH2}$ et l'acétylène $\\ce{HC#CH}$. Sélectionnez exactement les deux propositions correctes.`,
    choices: [
      { content: `Le carbone passe respectivement de $\\mathrm{sp}^3$ à $\\mathrm{sp}^2$ puis $\\mathrm{sp}$.`, correct: true, explanation: `Simple, double puis triple liaison.` },
      { content: `La géométrie locale autour du carbone évolue de tétraédrique à trigonale plane puis linéaire.`, correct: true, explanation: `Correspondance sp3/sp2/sp.` },
      { content: `Le nombre d'orbitales p non hybridées diminue de l'éthane vers l'acétylène.`, correct: false, explanation: `Il augmente : 0, puis 1, puis 2.` },
      { content: `Les trois molécules autorisent la même liberté de rotation autour de la liaison carbone-carbone.`, correct: false, explanation: `Les liaisons multiples limitent fortement la rotation.` },
    ],
    explanation: `L'augmentation du caractère multiple de la liaison C–C s'accompagne d'une évolution sp3 → sp2 → sp et d'une augmentation du nombre d'orbitales p non hybridées.`,
  },
];
