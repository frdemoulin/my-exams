import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie générale
 * Chapitre 2 – Formation des ions, électronégativité et liaisons chimiques
 * Section B – Liaisons chimiques
 */

export const UE14_CH2_LIAISONS_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 21,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Quelle proposition décrit correctement une liaison covalente simple ?`,
    choices: [
      {
        content: `Deux électrons célibataires s'apparient pour former un doublet liant commun aux deux atomes.`,
        correct: true,
        explanation: `C'est le principe de la liaison covalente présenté dans la fiche.`,
      },
      {
        content: `Un doublet non liant est transféré définitivement au noyau de l'autre atome.`,
        correct: false,
        explanation: `Un doublet non liant ne constitue pas une liaison covalente simple par lui-même.`,
      },
      {
        content: `Elle correspond nécessairement à une liaison $\\pi$.`,
        correct: false,
        explanation: `Une liaison covalente simple correspond à une liaison $\\sigma$.`,
      },
      {
        content: `Elle implique toujours un transfert complet d'électron d'un atome vers l'autre.`,
        correct: false,
        explanation: `Un transfert complet correspond au modèle ionique, pas au partage covalent.`,
      },
    ],
    explanation:
      `Une liaison covalente simple est formée par un doublet liant partagé entre les deux atomes et correspond à une liaison $\\sigma$.`,
  },
  {
    order: 22,
    difficulty: 'EASY',
    format: 'QRM',
    question: `Concernant les doublets liants et non liants, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Dans $\\ce{NH3}$, l'azote conserve un doublet non liant.`,
        correct: true,
        explanation: `L'azote forme trois liaisons N–H et conserve un doublet libre.`,
      },
      {
        content: `Dans une représentation usuelle de l'eau, l'oxygène possède deux doublets non liants.`,
        correct: true,
        explanation: `L'oxygène forme deux liaisons et conserve deux doublets non liants.`,
      },
      {
        content: `Un halogène engagé dans une liaison simple conserve typiquement trois doublets non liants.`,
        correct: true,
        explanation: `C'est le repère donné dans la fiche pour le chlore.`,
      },
      {
        content: `Tous les doublets électroniques d'une molécule sont nécessairement liants.`,
        correct: false,
        explanation: `De nombreux atomes portent des doublets non liants.`,
      },
    ],
    explanation:
      `Les électrons de valence peuvent constituer des doublets liants partagés ou des doublets non liants localisés sur un atome.`,
  },
  {
    order: 23,
    difficulty: 'EASY',
    format: 'QROC',
    question: `Combien de doublets non liants porte l'atome d'azote dans la molécule $\\ce{NH3}$ ?`,
    answer: { type: 'number', value: 1, tolerance: 0 },
    explanation:
      `L'azote possède cinq électrons de valence : trois participent aux trois liaisons N–H et les deux autres forment un doublet non liant.`,
  },
  {
    order: 26,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Quelle proposition décrit correctement la formation d'une liaison de coordination ?`,
    choices: [
      {
        content: `Un donneur fournit un doublet non liant à un accepteur disposant d'une orbitale vacante.`,
        correct: true,
        explanation: `C'est la définition de la liaison de coordination dans la fiche.`,
      },
      {
        content: `Chaque partenaire fournit obligatoirement un électron célibataire.`,
        correct: false,
        explanation: `Cela décrit la formation covalente classique, pas l'origine d'une liaison de coordination.`,
      },
      {
        content: `Le donneur est nécessairement un ion métallique.`,
        correct: false,
        explanation: `Les ions métalliques sont typiquement accepteurs ; N ou O sont souvent donneurs de doublet.`,
      },
      {
        content: `La liaison formée reste toujours distinguable des autres liaisons covalentes de la molécule.`,
        correct: false,
        explanation: `Après sa formation, elle est assimilable à une liaison covalente ordinaire.`,
      },
    ],
    explanation:
      `La particularité d'une liaison de coordination réside dans l'origine du doublet liant : les deux électrons sont initialement apportés par le donneur.`,
  },
  {
    order: 28,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Qu'appelle-t-on complexe de coordination dans le cadre du cours ?`,
    choices: [
      {
        content: `Un édifice comportant plusieurs liaisons de coordination, souvent autour d'un centre métallique.`,
        correct: true,
        explanation: `C'est le modèle retenu pour les complexes de coordination.`,
      },
      {
        content: `Une molécule ne comportant que des liaisons non polarisées.`,
        correct: false,
        explanation: `La polarité n'est pas la définition d'un complexe.`,
      },
      {
        content: `Un ion possédant obligatoirement une charge nulle.`,
        correct: false,
        explanation: `Un complexe peut être chargé ou neutre.`,
      },
      {
        content: `Une molécule composée exclusivement de carbone et d'hydrogène.`,
        correct: false,
        explanation: `Cela correspondrait à un hydrocarbure, pas à un complexe de coordination.`,
      },
    ],
    explanation:
      `Un complexe de coordination comprend un centre accepteur, souvent métallique, relié à plusieurs ligands donneurs de doublets.`,
  },
  {
    order: 30,
    difficulty: 'EASY',
    format: 'QRM',
    question: `Concernant une liaison covalente polarisée entre deux atomes d'électronégativités différentes, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Le doublet liant est davantage attiré vers l'atome le plus électronégatif.`,
        correct: true,
        explanation: `L'atome le plus électronégatif porte alors une charge partielle négative.`,
      },
      {
        content: `L'atome le moins électronégatif porte une charge partielle $\\delta^{+}$.`,
        correct: true,
        explanation: `Le déplacement du doublet laisse un déficit électronique relatif sur cet atome.`,
      },
      {
        content: `Selon la convention du cours, le moment dipolaire est orienté du pôle $+$ vers le pôle $-$.`,
        correct: true,
        explanation: `La fiche précise cette convention chimique.`,
      },
      {
        content: `Une liaison polarisée implique nécessairement une charge globale non nulle de la molécule.`,
        correct: false,
        explanation: `Les charges partielles opposées peuvent appartenir à une molécule globalement neutre.`,
      },
    ],
    explanation:
      `Une différence d'électronégativité déplace partiellement le doublet liant et crée un dipôle de liaison caractérisé par des charges partielles opposées.`,
  },
  {
    order: 32,
    difficulty: 'EASY',
    format: 'QROC',
    question: `On utilise $\\chi(\\ce{C})=2{,}5$ et $\\chi(\\ce{O})=3{,}5$. Quelle est la différence d'électronégativité $|\\Delta\\chi|$ d'une liaison $\\ce{C-O}$ ?`,
    answer: { type: 'number', value: 1, tolerance: 0.01 },
    explanation:
      `$|\\Delta\\chi|=|3{,}5-2{,}5|=1{,}0$. Le doublet est donc davantage attiré vers l'oxygène.`,
  },
  {
    order: 33,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Quelle proposition décrit correctement la mésomérie ?`,
    choices: [
      {
        content: `Plusieurs écritures de Lewis décrivent une même structure réelle dans laquelle certains électrons sont délocalisés.`,
        correct: true,
        explanation: `Les formes mésomères ne sont pas des molécules distinctes en équilibre.`,
      },
      {
        content: `Les atomes changent de position entre deux molécules qui s'interconvertissent.`,
        correct: false,
        explanation: `L'enchaînement des atomes reste identique ; ce sont les électrons qui sont redistribués.`,
      },
      {
        content: `Elle correspond obligatoirement à la rupture homolytique d'une liaison.`,
        correct: false,
        explanation: `La rupture homolytique produit des radicaux et constitue un autre phénomène.`,
      },
      {
        content: `Elle ne concerne jamais les liaisons amides.`,
        correct: false,
        explanation: `La liaison peptidique est précisément un exemple de mésomérie dans la fiche.`,
      },
    ],
    explanation:
      `La mésomérie traduit une délocalisation électronique. La structure réelle est un hybride des différentes formes de Lewis pertinentes.`,
  },
  {
    order: 37,
    difficulty: 'EASY',
    format: 'QRM',
    question: `Concernant la rupture homolytique d'une liaison covalente, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Chaque atome récupère un électron du doublet liant.`,
        correct: true,
        explanation: `La rupture homolytique partage les deux électrons entre les deux fragments.`,
      },
      {
        content: `Elle peut produire des espèces radicalaires portant un électron célibataire.`,
        correct: true,
        explanation: `C'est le cas de la radiolyse simplifiée de l'eau présentée dans la fiche.`,
      },
      {
        content: `Les radicaux libres sont généralement très réactifs.`,
        correct: true,
        explanation: `Leur électron célibataire les rend particulièrement réactifs.`,
      },
      {
        content: `Elle nécessite toujours un transfert complet des deux électrons vers le même atome.`,
        correct: false,
        explanation: `Cette description ne correspond pas à une rupture homolytique.`,
      },
    ],
    explanation:
      `Une rupture homolytique produit deux fragments possédant chacun un électron célibataire ; ces radicaux sont généralement très réactifs.`,
  },
  {
    order: 38,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Un atome fortement électronégatif est lié à une chaîne carbonée portant une fonction acide carboxylique. Quel effet peut-il exercer par effet inductif ?`,
    choices: [
      {
        content: `Il attire la densité électronique à travers les liaisons $\\sigma$ et peut favoriser la dissociation du proton acide.`,
        correct: true,
        explanation: `Vrai : l'effet inductif électroattracteur se transmet par les liaisons $\\sigma$ et peut stabiliser la charge négative formée.`,
      },
      {
        content: `Il fournit automatiquement un doublet au proton.`,
        correct: false,
        explanation: `Faux : ceci décrirait la formation d'une liaison de coordination ou une réaction acido-basique directe.`,
      },
      {
        content: `Il transforme la liaison en liaison de coordination.`,
        correct: false,
        explanation: `Faux : l'effet inductif modifie la répartition électronique sans changer la nature covalente des liaisons.`,
      },
      {
        content: `Il supprime toute polarisation des liaisons voisines.`,
        correct: false,
        explanation: `Faux : il induit au contraire une polarisation qui se transmet le long des liaisons $\\sigma$.`,
      },
    ],
    explanation:
      `L'effet inductif correspond à la transmission d'une polarisation électronique au travers des liaisons $\\sigma$ sous l'influence d'un substituant électronégatif ou électropositif. Dans l'exemple d'un substituant électronégatif proche d'une fonction acide carboxylique, cet effet peut stabiliser la charge négative de la base conjuguée et donc favoriser l'acidité.`,
  },
];

export const UE14_CH2_LIAISONS_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 25,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux propositions correctes concernant les liaisons simples, doubles et triples.`,
    choices: [
      {
        content: `Une liaison simple comporte une liaison $\\sigma$.`,
        correct: true,
        explanation: `Vrai : une liaison covalente simple est formée par une liaison de type $\\sigma$.`,
      },
      {
        content: `Une liaison double comporte une liaison $\\sigma$ et une liaison $\\pi$.`,
        correct: true,
        explanation: `Vrai : une liaison double associe une liaison $\\sigma$ et une liaison $\\pi$.`,
      },
      {
        content: `Une liaison triple comporte trois liaisons $\\pi$.`,
        correct: false,
        explanation: `Faux : une liaison triple comporte une liaison $\\sigma$ et deux liaisons $\\pi$.`,
      },
      {
        content: `Une liaison double comporte deux liaisons $\\sigma$.`,
        correct: false,
        explanation: `Faux : elle comporte une liaison $\\sigma$ et une liaison $\\pi$.`,
      },
    ],
    explanation:
      `Dans le modèle présenté dans le cours, une liaison simple correspond à une liaison $\\sigma$, une liaison double à une liaison $\\sigma$ et une liaison $\\pi$, et une liaison triple à une liaison $\\sigma$ et deux liaisons $\\pi$.`,
  },
  {
    order: 24,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Concernant le carbone et le phosphore engagés dans des molécules, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Le modèle du carbone moléculaire présenté dans la fiche permet quatre électrons célibataires disponibles pour quatre liaisons.`,
        correct: true,
        explanation: `La réorganisation électronique présentée rend compte de la tétravalence du carbone.`,
      },
      {
        content: `Dans $\\ce{PCl3}$, le phosphore forme trois liaisons avec les chlore.`,
        correct: true,
        explanation: `La configuration représentée laisse trois électrons célibataires.`,
      },
      {
        content: `Dans $\\ce{PCl5}$, le phosphore peut former cinq liaisons dans le modèle présenté.`,
        correct: true,
        explanation: `La fiche présente une configuration permettant cinq électrons célibataires.`,
      },
      {
        content: `Le carbone engagé dans une molécule ne peut former que deux liaisons.`,
        correct: false,
        explanation: `Le carbone forme couramment quatre liaisons.`,
      },
    ],
    explanation:
      `La fiche utilise une réorganisation des électrons célibataires pour rendre compte du nombre de liaisons du carbone et du phosphore dans différents environnements.`,
  },
  {
    order: 27,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `Dans l'ion ammonium $\\ce{NH4+}$, combien de liaisons $\\ce{N-H}$ équivalentes trouve-t-on après formation de l'ion ?`,
    answer: { type: 'number', value: 4, tolerance: 0 },
    explanation:
      `Le doublet non liant de $\\ce{NH3}$ a initialement permis la formation d'une liaison de coordination avec $\\ce{H+}$. Dans l'ion formé, les quatre liaisons N–H sont équivalentes.`,
  },
  {
    order: 29,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `Dans le modèle de l'hémoglobine présenté dans la fiche, combien de liaisons de coordination peut établir au total l'ion $\\ce{Fe^2+}$ de l'hème ?`,
    answer: { type: 'number', value: 6, tolerance: 0 },
    explanation:
      `Le fer est coordonné à quatre azotes de l'hème, un azote d'histidine et une sixième position pouvant fixer transitoirement le dioxygène.`,
  },
  {
    order: 31,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question:
      `Pour une liaison polarisée, on mesure $\\mu=3{,}2\\times10^{-30}\\,\\mathrm{C\\cdot m}$ et $d=160\\,\\mathrm{pm}$. Quelle est la valeur absolue de la charge partielle $\\delta$ en coulombs ?`,
    answer: { type: 'number', value: 2.0e-20, tolerance: 0.1e-20 },
    explanation:
      `Avec $d=160\\,\\mathrm{pm}=1{,}60\\times10^{-10}\\,\\mathrm{m}$ et $\\mu=\\delta d$, on obtient $\\delta=\\mu/d=2{,}0\\times10^{-20}\\,\\mathrm{C}$.`,
  },
  {
    order: 36,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question:
      `Le protoxyde d'azote $\\ce{N2O}$ est utilisé en médecine pour ses propriétés antalgiques et sédatives. Les deux formes ci-dessous représentent sa mésomérie. Quelles propositions sont exactes ?`,
    questionDiagram: {
      type: 'lewis-resonance',
      forms: [
        {
          atoms: [
            { element: 'N', lonePairs: ['left'] },
            { element: 'N', charge: 1, lonePairs: [] },
            { element: 'O', charge: -1, lonePairs: ['top', 'right', 'bottom'] },
          ],
          bonds: ['triple', 'single'],
        },
        {
          atoms: [
            { element: 'N', charge: -1, lonePairs: ['top', 'bottom'] },
            { element: 'N', charge: 1, lonePairs: [] },
            { element: 'O', lonePairs: ['top', 'bottom'] },
          ],
          bonds: ['double', 'double'],
        },
      ],
    },
    choices: [
      {
        content: `L'enchaînement des atomes $\\ce{N-N-O}$ est identique dans les deux formes.`,
        correct: true,
        explanation: `La mésomérie modifie la répartition électronique, pas l'ordre des atomes.`,
      },
      {
        content: `L'azote central porte une charge formelle positive dans les deux formes représentées.`,
        correct: true,
        explanation: `C'est ce que montre le diagramme.`,
      },
      {
        content: `Les deux dessins correspondent à deux molécules différentes en équilibre chimique.`,
        correct: false,
        explanation: `Ce sont deux formes canoniques d'une même structure réelle.`,
      },
      {
        content: `La mésomérie suppose un déplacement physique des noyaux entre les deux formes.`,
        correct: false,
        explanation: `Seule la distribution électronique diffère.`,
      },
    ],
    explanation:
      `Les formes mésomères sont plusieurs écritures de Lewis d'une même espèce. La structure réelle est un hybride de résonance.`,
  },
  {
    order: 39,
    difficulty: 'MEDIUM',
    format: 'QZONE',
    question:
      `Dans la forme neutre de la liaison amide représentée, cliquez sur l'atome dont le doublet non liant peut se délocaliser vers le groupement carbonyle.`,
    image: {
      src: '/images/training/ue14/chimie/amide-mesomerie-qzone.svg',
      alt: 'Schéma simplifié d’un groupement amide R-CO-NH-R prime avec atomes O, C et N identifiés',
      width: 1000,
      height: 420,
    },
    expectedZones: [
      {
        id: 'amide-nitrogen',
        label: `Azote de la fonction amide`,
        x: 0.63,
        y: 0.50,
        tolerance: 0.075,
      },
    ],
    explanation:
      `Le doublet non liant de l'azote peut se délocaliser vers le carbonyle. Cette mésomérie confère à la liaison C–N un caractère partiel de double liaison et limite sa rotation.`,
  },
  {
    order: 50,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: `Quelle proposition décrit correctement une espèce radicalaire ?`,
    choices: [
      {
        content: `Elle possède au moins un électron célibataire.`,
        correct: true,
        explanation: `L'électron célibataire est le caractère distinctif utilisé dans la fiche.`,
      },
      {
        content: `Elle possède nécessairement une charge électrique positive.`,
        correct: false,
        explanation: `Un radical peut être neutre ou chargé.`,
      },
      {
        content: `Elle ne peut se former que par gain de deux électrons.`,
        correct: false,
        explanation: `La radiolyse montre une formation par rupture homolytique.`,
      },
      {
        content: `Elle est toujours chimiquement inerte.`,
        correct: false,
        explanation: `Les radicaux sont au contraire généralement très réactifs.`,
      },
    ],
    explanation:
      `Une espèce radicalaire possède un électron célibataire, ce qui explique sa forte réactivité chimique.`,
  },
  {
    order: 40,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Dans la radiolyse simplifiée de l'eau décrite dans l'énoncé commun, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `La rupture homolytique forme deux fragments radicalaires.`,
        correct: true,
        explanation: `Chaque fragment récupère un électron du doublet de liaison.`,
      },
      {
        content: `Le radical hydroxyle $\\ce{HO.}$ possède un électron célibataire.`,
        correct: true,
        explanation: `C'est ce qui le rend très réactif.`,
      },
      {
        content: `La rupture nécessite un apport d'énergie.`,
        correct: true,
        explanation: `La fiche cite notamment les rayonnements ionisants parmi les sources d'énergie possibles.`,
      },
      {
        content: `La rupture homolytique transfère les deux électrons de la liaison sur le même fragment.`,
        correct: false,
        explanation: `Dans une rupture homolytique, chaque fragment récupère un électron.`,
      },
    ],
    explanation:
      `La radiolyse de l'eau fournit un exemple biomédical de rupture homolytique et de formation de radicaux libres.`,
  },
  {
    order: 41,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question:
      `L'énergie moyenne de dissociation d'une liaison $\\ce{O-H}$ est $460\\,\\mathrm{kJ\\cdot mol^{-1}}$. Quelle énergie faut-il fournir pour rompre une mole de ces liaisons, en joules ?`,
    answer: { type: 'number', value: 460000, tolerance: 1000 },
    explanation:
      `$460\\,\\mathrm{kJ\\cdot mol^{-1}}=460\\,000\\,\\mathrm{J\\cdot mol^{-1}}$. La question vérifie seulement la conversion d'unité.`,
  },
  {
    order: 63,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question:
      `Le cisplatine est un médicament anticancéreux. À proximité de l'ADN, le platine peut substituer des ligands chlorure par des atomes d'azote de bases nucléiques. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Le platine joue le rôle de centre accepteur de doublets.`,
        correct: true,
        explanation: `Le centre métallique possède des orbitales disponibles pour accepter les doublets des ligands.`,
      },
      {
        content: `Les atomes d'azote de l'ADN jouent le rôle de donneurs de doublets.`,
        correct: true,
        explanation: `Ils fournissent un doublet non liant au platine.`,
      },
      {
        content: `La substitution des ligands supprime toute coordination autour du platine.`,
        correct: false,
        explanation: `Elle remplace certains ligands par d'autres.`,
      },
      {
        content: `Une liaison de coordination exige que le platine fournisse les deux électrons du doublet liant.`,
        correct: false,
        explanation: `Dans ce cas, le ligand azoté fournit le doublet.`,
      },
    ],
    explanation:
      `Le cisplatine illustre la coordination d'un centre métallique par des donneurs azotés ; la fixation à l'ADN modifie sa conformation et perturbe ses fonctions.`,
  },
  {
    order: 64,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux liaisons considérées comme peu ou non polarisées dans le cadre simplifié du cours.`,
    choices: [
      {
        content: `$\\ce{C-C}$`,
        correct: true,
        explanation: `Liaison homoatomique : les électronégativités sont identiques.`,
      },
      {
        content: `$\\ce{C-H}$`,
        correct: true,
        explanation: `La fiche considère les électronégativités de C et H comme proches.`,
      },
      {
        content: `$\\ce{O-H}$`,
        correct: false,
        explanation: `L'oxygène est nettement plus électronégatif que l'hydrogène.`,
      },
      {
        content: `$\\ce{C-O}$`,
        correct: false,
        explanation: `La différence d'électronégativité polarise la liaison vers l'oxygène.`,
      },
    ],
    explanation:
      `Une liaison est peu ou non polarisée lorsque les deux atomes ont des électronégativités identiques ou proches dans le modèle du cours.`,
  },
];
