/**
 * UE14 – Biologie cellulaire – Chapitre 4
 * Contenu pédagogique fondé sur la fiche 2024-2025 du Tutorat Santé de Reims.
 */
import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
  {
    order: 121,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Le système endomembranaire :`,
    choices: [
      `Est un ensemble de cavités membranaires.`,
      `Exclut mitochondries et peroxysomes.`,
      `Est dynamique grâce à des flux permanents.`,
      `N’existe que chez les procaryotes.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Le SEM est propre aux eucaryotes.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 122,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Le flux principal :`,
    choices: [
      `Part du RE.`,
      `Passe par le Golgi.`,
      `Peut atteindre le carrefour endosomal ou la membrane plasmique.`,
      `Est un flux d’endocytose vers le RE.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Le flux principal se fait dans le sens de l’exocytose.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 123,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Le transport vésiculaire associe :`,
    choices: [
      `Bourgeonnement et revêtement.`,
      `Déshabillage.`,
      `Transport cytosolique.`,
      `Amarrage et fusion.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation: `Les quatre étapes sont toutes nécessaires.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
    ],
  },
  {
    order: 124,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `L’endocytose :`,
    choices: [
      `Internalise membrane et milieu extracellulaire.`,
      `Peut être pinocytaire ou phagocytaire.`,
      `Peut être médiée par récepteurs ou cavéoles.`,
      `Est une exportation vers le MEC.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `L’exportation correspond à l’exocytose.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 125,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La voie LDL fait intervenir :`,
    choices: [
      `Des récepteurs spécifiques.`,
      `Clathrine et adaptines.`,
      `Dynamine/GTP puis HSP70/ATP.`,
      `Une acidification endosomale.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation: `La voie LDL mobilise l’ensemble de ces étapes.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
    ],
  },
  {
    order: 126,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `L’exocytose régulée :`,
    choices: [
      `Peut stocker le matériel dans des grains.`,
      `Peut dépendre du Ca2+.`,
      `Est déclenchée par un signal.`,
      `Est nécessairement permanente.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La permanence caractérise la voie constitutive.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 127,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `L’exocytose constitutive :`,
    choices: [
      `Est permanente.`,
      `Peut impliquer cavéoline ou ARF-FAPP.`,
      `Contribue au renouvellement de la membrane.`,
      `Exige toujours une hormone déclenchante.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Elle fonctionne sans stimulation ponctuelle obligatoire.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 128,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Endocytose et exocytose partagent :`,
    choices: [
      `Le cytosquelette.`,
      `Des protéines d’amarrage et de fusion.`,
      `Une consommation énergétique.`,
      `Une absence totale de flux membranaires.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Ces processus constituent précisément des flux membranaires.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 129,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La transcytose :`,
    choices: [
      `Transfère du matériel au travers d’une cellule.`,
      `Associe endocytose, transport et exocytose.`,
      `Peut exploiter la polarité cellulaire.`,
      `Correspond à la synthèse d’ARN.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La transcytose est un mécanisme de transport vésiculaire transcellulaire.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 130,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Quelle synthèse générale est correcte ?`,
    choices: [
      `Le SEM trie et transporte membranes et protéines.`,
      `Les flux permettent sécrétion, recyclage et dégradation.`,
      `Le trafic vésiculaire participe à la nutrition et à la défense.`,
      `Les vésicules n’interagissent jamais avec la membrane plasmique.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La membrane plasmique est une interface majeure des flux endo- et exocytaires.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 131,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Une protéine quitte le RE, passe par le Golgi, est stockée dans un grain puis libérée après une hausse de Ca2+. Ce scénario associe :`,
    choices: [
      `Le flux principal sortant.`,
      `Une maturation dans un grain de sécrétion.`,
      `Une exocytose régulée.`,
      `Une phagocytose.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La séquence décrit une sécrétion régulée.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 132,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Un récepteur capte un ligand, est internalisé dans un puits de clathrine puis revient à la membrane. Ce scénario associe :`,
    choices: [
      `Endocytose médiée par récepteurs.`,
      `Passage par un endosome.`,
      `Recyclage membranaire.`,
      `Exocytose constitutive depuis le RE uniquement.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Le retour du récepteur appartient au circuit endosomal de recyclage.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 133,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Un macrophage internalise une bactérie puis la dégrade. Ce scénario comprend :`,
    choices: [
      `Une reconnaissance membranaire.`,
      `La formation d’un phagosome.`,
      `Une fusion avec un lysosome.`,
      `Une voie nécessairement caveolaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La phagocytose et la voie caveolaire sont distinctes.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 134,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Un inhibiteur empêche la fusion des vésicules avec leur cible. On peut prévoir :`,
    choices: [
      `Une accumulation de vésicules.`,
      `Un défaut de livraison du contenu.`,
      `Une perturbation de la sécrétion ou du recyclage.`,
      `Une amélioration automatique de tous les flux.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La fusion est indispensable à la livraison de la cargaison.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 135,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Observe les deux figures suivantes.

![Flux du SEM](/images/training/ue14/biologie-cellulaire/systeme-endomembranaire-1/sem-compartiments-quatre-flux.png)

![Transport en quatre étapes](/images/training/ue14/biologie-cellulaire/systeme-endomembranaire-1/transport-vesiculaire-quatre-etapes.png)

Quelle(s) proposition(s) est(sont) correcte(s) ?`,
    choices: [
      `Les flux relient plusieurs compartiments.`,
      `Chaque trajet vésiculaire comporte une formation puis une fusion.`,
      `Le cytosquelette intervient entre les deux extrémités du trajet.`,
      `Tous les flux vont uniquement de la membrane plasmique vers le noyau.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Les figures montrent une circulation bidirectionnelle et structurée.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 136,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Observe les deux figures suivantes.

![Types d’endocytose](/images/training/ue14/biologie-cellulaire/systeme-endomembranaire-1/quatre-types-endocytose.png)

![Voie LDL](/images/training/ue14/biologie-cellulaire/systeme-endomembranaire-1/endocytose-ldl-recepteurs.png)

Quelle(s) proposition(s) est(sont) correcte(s) ?`,
    choices: [
      `La voie LDL est une endocytose spécifique.`,
      `La clathrine intervient dans la formation du puits.`,
      `Le ligand et le récepteur peuvent avoir des devenirs différents.`,
      `Toute endocytose correspond à une phagocytose.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La voie LDL n’est qu’un des types d’endocytose.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 137,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Observe la figure suivante.

![Exocytose constitutive et régulée](/images/training/ue14/biologie-cellulaire/systeme-endomembranaire-1/exocytose-constitutive-regulee.png)

Quelle(s) proposition(s) est(sont) correcte(s) ?`,
    choices: [
      `La voie constitutive fonctionne en continu.`,
      `La voie régulée peut dépendre du Ca2+.`,
      `Les grains de sécrétion sont compatibles avec la voie régulée.`,
      `La voie constitutive est une endocytose.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Les deux voies sont des modalités d’exocytose.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 138,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Une toxine entre par cavéole puis atteint directement le RE. Cette situation illustre :`,
    choices: [
      `Une endocytose caveolaire.`,
      `La formation d’un cavéosome.`,
      `Le quatrième flux rétrograde.`,
      `Le flux principal exocytaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Le trajet direct cavéosome → RE appartient au quatrième flux.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 139,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Une cellule doit conserver une surface membranaire stable malgré une pinocytose permanente. Elle doit notamment :`,
    choices: [
      `Maintenir un équilibre avec l’exocytose.`,
      `Recycler une partie de ses membranes.`,
      `Coordonner endocytose et flux sortants.`,
      `Bloquer définitivement tout trafic vésiculaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `L’équilibre des flux maintient l’homéostasie membranaire.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 140,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Quelle conclusion générale est la plus fidèle au chapitre ?`,
    choices: [
      `Le SEM est un réseau dynamique de compartiments.`,
      `Le trafic vésiculaire repose sur des étapes ordonnées et des signaux.`,
      `Endocytose et exocytose assurent échanges, nutrition, sécrétion et défense.`,
      `Les vésicules se déplacent sans cytosquelette ni énergie.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Le cytosquelette et l’énergie sont indispensables au trafic vésiculaire.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
];

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    order: 13,
    slug: `systeme-endomembranaire-endocytose-exocytose`,
    title: `Système endomembranaire, endocytose et exocytose`,
    description: `Révision transversale des compartiments, des flux, de l'endocytose et de l'exocytose.`,
    stage: 'PRACTICE',
    sectionOrder: 5,
    questionOrders: [121,122,123,124,125,126,127,128,129,130],
  },
  {
    order: 14,
    slug: `synthese-experimentale-systeme-endomembranaire-1`,
    title: `Synthèse expérimentale du chapitre`,
    description: `Situations intégratives proches de l'examen autour du trafic vésiculaire.`,
    stage: 'MASTER',
    sectionOrder: 5,
    items: [
      {
        type: 'GROUP',
        title: `Sécrétion et recyclage`,
        sharedStatement: `Une équipe suit simultanément une protéine sécrétée après stimulation et un récepteur membranaire recyclé après endocytose.`,
        questionOrders: [131,132],
      },
      {
        type: 'GROUP',
        title: `Défense et trafic intracellulaire`,
        sharedStatement: `Une seconde équipe étudie la phagocytose d'un agent pathogène et les conséquences d'un défaut de fusion vésiculaire.`,
        questionOrders: [133,134],
      },
      { type: 'QUESTION', questionOrder: 135 },
      { type: 'QUESTION', questionOrder: 136 },
      { type: 'QUESTION', questionOrder: 137 },
      { type: 'QUESTION', questionOrder: 138 },
      { type: 'QUESTION', questionOrder: 139 },
      { type: 'QUESTION', questionOrder: 140 },
    ],
  },
];
