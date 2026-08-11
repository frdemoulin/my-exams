import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie générale
 * Chapitre 2 – Formation des ions, électronégativité et liaisons chimiques
 * Section C – Synthèse
 */

export const UE14_CH2_SYNTHESIS_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 51,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `Dans le sérum physiologique décrit dans l'énoncé commun, combien d'électrons possède l'ion $\\ce{Na+}$ ?`,
    answer: { type: 'number', value: 10, tolerance: 0 },
    explanation:
      `Le sodium possède $\\mathrm{Z}=11$ et perd un électron pour former $\\ce{Na+}$ : il reste 10 électrons.`,
  },
  {
    order: 52,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Concernant le chlorure de sodium de l'énoncé commun, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `$\\ce{Na+}$ et $\\ce{Cl-}$ portent des charges opposées.`,
        correct: true,
        explanation: `Le sodium forme un cation et le chlore un anion.`,
      },
      {
        content: `L'ensemble $\\ce{NaCl}$ est électriquement neutre.`,
        correct: true,
        explanation: `Les charges $+1$ et $-1$ se compensent.`,
      },
      {
        content: `Le chlore a perdu un électron pour former $\\ce{Cl-}$.`,
        correct: false,
        explanation: `Il a gagné un électron.`,
      },
      {
        content: `Le sodium est plus électronégatif que le chlore.`,
        correct: false,
        explanation: `Le chlore est nettement plus électronégatif.`,
      },
    ],
    explanation:
      `Le chlorure de sodium relie formation des ions, électroneutralité et différence d'électronégativité.`,
  },
  {
    order: 53,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: `Lors de la formation de $\\ce{NH4+}$ à partir de $\\ce{NH3}$ et $\\ce{H+}$, quelle espèce fournit le doublet de la nouvelle liaison ?`,
    choices: [
      { content: `$\\ce{NH3}$`, correct: true, explanation: `Le doublet non liant de l'azote est donné à $\\ce{H+}$.` },
      { content: `$\\ce{H+}$`, correct: false, explanation: `$\\ce{H+}$ ne possède pas d'électron à fournir.` },
      { content: `$\\ce{NH4+}$`, correct: false, explanation: `Il s'agit du produit formé.` },
      { content: `Un ion chlorure`, correct: false, explanation: `Il n'intervient pas dans cette transformation.` },
    ],
    explanation:
      `L'ammoniac est le donneur de doublet et le proton l'accepteur. Après formation, les quatre liaisons N–H de l'ammonium sont équivalentes.`,
  },
  {
    order: 54,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Le peroxyde d'hydrogène $\\ce{H2O2}$ contient une liaison $\\ce{O-O}$ simple. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `La liaison $\\ce{O-O}$ est une liaison $\\sigma$.`,
        correct: true,
        explanation: `Une liaison simple est une liaison sigma.`,
      },
      {
        content: `Chaque atome d'oxygène possède des doublets non liants.`,
        correct: true,
        explanation: `Une partie de ses électrons de valence reste non liante.`,
      },
      {
        content: `La liaison $\\ce{O-O}$ comporte nécessairement une composante $\\pi$.`,
        correct: false,
        explanation: `Une liaison simple ne comporte pas de liaison pi.`,
      },
      {
        content: `La molécule ne contient aucun électron non liant.`,
        correct: false,
        explanation: `Les oxygènes portent des doublets non liants.`,
      },
    ],
    explanation:
      `La structure de $\\ce{H2O2}$ mobilise à la fois liaison sigma et doublets non liants.`,
  },
  {
    order: 55,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question:
      `L'acide chlorhydrique participe à l'acidité gastrique. Pour une liaison $\\ce{H-Cl}$, on mesure $\\mu=3{,}2\\times10^{-30}\\,\\mathrm{C\\cdot m}$ et $d=160\\,\\mathrm{pm}$. Avec $e=1{,}60\\times10^{-19}\\,\\mathrm{C}$, quelle est la charge partielle $\\delta$ exprimée en fraction de $e$ ?`,
    answer: { type: 'number', value: 0.125, tolerance: 0.01 },
    explanation:
      `$d=1{,}60\\times10^{-10}\\,\\mathrm{m}$ ; $\\delta=\\mu/d=2{,}0\\times10^{-20}\\,\\mathrm{C}$ ; donc $\\delta/e=0{,}125$, soit environ $0{,}13e$.`,
  },
  {
    order: 56,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Concernant le cisplatine, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Le platine constitue un centre accepteur dans des liaisons de coordination.`,
        correct: true,
        explanation: `Les ligands lui fournissent des doublets électroniques.`,
      },
      {
        content: `Des atomes d'azote de l'ADN peuvent devenir des ligands du platine.`,
        correct: true,
        explanation: `La fiche cite notamment des azotes de bases nucléiques.`,
      },
      {
        content: `La fixation du platine sur l'ADN peut perturber réplication et transcription.`,
        correct: true,
        explanation: `La modification de la conformation de l'ADN est à l'origine de cet effet.`,
      },
      {
        content: `Le mécanisme décrit repose uniquement sur la formation d'anions chlorure sans coordination.`,
        correct: false,
        explanation: `Le point central du mécanisme présenté est la substitution de ligands et la coordination à l'ADN.`,
      },
    ],
    explanation:
      `Le cisplatine constitue un exemple pharmaceutique direct de liaison de coordination et de substitution de ligands.`,
  },
  {
    order: 57,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Dans l'hémoglobine, quelles propositions sont exactes concernant le fer de l'hème ?`,
    choices: [
      {
        content: `Le fer $\\ce{Fe^2+}$ est un centre métallique de coordination.`,
        correct: true,
        explanation: `Il accepte des doublets fournis par les ligands.`,
      },
      {
        content: `Quatre azotes de l'hème et un azote d'histidine occupent cinq positions de coordination.`,
        correct: true,
        explanation: `La sixième position peut accueillir transitoirement le dioxygène.`,
      },
      {
        content: `Le dioxygène est fixé de façon irréversible sur la sixième position.`,
        correct: false,
        explanation: `La fixation est réversible afin de permettre capture et libération de l'oxygène.`,
      },
      {
        content: `Le fer ne peut établir qu'une seule liaison de coordination.`,
        correct: false,
        explanation: `La fiche en décrit jusqu'à six.`,
      },
    ],
    explanation:
      `L'hémoglobine illustre une métalloprotéine dans laquelle un centre ferreux établit plusieurs liaisons de coordination.`,
  },
  {
    order: 58,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: `Quelle conséquence de la mésomérie de la liaison peptidique est correcte ?`,
    choices: [
      {
        content: `La liaison $\\ce{C-N}$ acquiert un caractère partiel de double liaison, ce qui limite sa rotation.`,
        correct: true,
        explanation: `La délocalisation électronique rigidifie localement le groupement amide.`,
      },
      {
        content: `La liaison $\\ce{C-N}$ devient une liaison ionique pure.`,
        correct: false,
        explanation: `La mésomérie ne transforme pas l'amide en liaison ionique pure.`,
      },
      {
        content: `Les atomes du groupement changent en permanence de position entre deux molécules différentes.`,
        correct: false,
        explanation: `Les formes mésomères ne correspondent pas à des molécules distinctes.`,
      },
      {
        content: `La mésomérie rend la rotation autour de $\\ce{C-N}$ totalement libre.`,
        correct: false,
        explanation: `Elle la limite au contraire.`,
      },
    ],
    explanation:
      `La liaison peptidique est stabilisée par délocalisation électronique ; le caractère partiel de double liaison contribue à sa planéité et à sa faible liberté de rotation.`,
  },
  {
    order: 59,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Dans la radiolyse de l'eau décrite dans l'énoncé commun, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Le rayonnement peut fournir l'énergie nécessaire à la rupture d'une liaison $\\ce{O-H}$.`,
        correct: true,
        explanation: `La fiche cite notamment les rayonnements gamma, X ou UV comme sources d'énergie.`,
      },
      {
        content: `La rupture homolytique peut former $\\ce{HO.}$ et $\\ce{H.}$.`,
        correct: true,
        explanation: `Chaque fragment récupère un électron de la liaison.`,
      },
      {
        content: `Les radicaux formés sont généralement très réactifs.`,
        correct: true,
        explanation: `Ils possèdent un électron célibataire.`,
      },
      {
        content: `Le radical hydroxyle correspond à un ion hydroxyle $\\ce{OH-}$.`,
        correct: false,
        explanation: `Un radical et un anion sont deux espèces différentes.`,
      },
    ],
    explanation:
      `La radiolyse relie énergie de liaison, rupture homolytique et formation d'espèces radicalaires très réactives.`,
  },
  {
    order: 60,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question:
      `Pour une énergie de dissociation $E_{\\ce{O-H}}=460\\,\\mathrm{kJ\\cdot mol^{-1}}$, quelle énergie correspond à une mole de liaisons en joules ?`,
    answer: { type: 'number', value: 460000, tolerance: 1000 },
    explanation:
      `Il suffit de convertir les kilojoules en joules : $460\\times10^3=4{,}60\\times10^5\\,\\mathrm{J\\cdot mol^{-1}}$.`,
  },
];

export const UE14_CH2_SYNTHESIS_MASTER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 34,
    difficulty: 'HARD',
    format: 'QRM',
    question: `À propos du chlore ($\\mathrm{Z}=17$), quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Sa configuration électronique fondamentale se termine par $3\\mathrm{s}^2\,3\\mathrm{p}^5$.`,
        correct: true,
        explanation: `Le chlore possède 17 électrons à l'état neutre.`,
      },
      {
        content: `Il appartient à la famille des halogènes.`,
        correct: true,
        explanation: `Le chlore se situe en colonne 17.`,
      },
      {
        content: `Il est moins électronégatif que le brome situé plus bas dans la même colonne.`,
        correct: false,
        explanation: `L'électronégativité diminue en descendant une colonne : le chlore est donc plus électronégatif que le brome.`,
      },
      {
        content: `L'ion $\\ce{Cl-}$ possède 18 électrons.`,
        correct: true,
        explanation: `Le chlore gagne un électron pour atteindre la configuration de l'argon.`,
      },
    ],
    explanation:
      `Cette question associe configuration électronique, classification, électronégativité et formation d'un anion.`,
  },
  {
    order: 42,
    difficulty: 'HARD',
    format: 'QROC',
    question: `Le fluor possède $\\mathrm{Z}=9$. Combien d'électrons possède l'ion fluorure $\\ce{F-}$ utilisé dans le contexte de prévention dentaire de l'énoncé commun ?`,
    answer: { type: 'number', value: 10, tolerance: 0 },
    explanation:
      `L'ion fluorure a gagné un électron : $9+1=10$. Il est isoélectronique du néon.`,
  },
  {
    order: 43,
    difficulty: 'HARD',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `À propos des espèces de l'énoncé commun, sélectionnez exactement les deux propositions correctes.`,
    choices: [
      {
        content: `Dans $\\ce{NaF}$, le sodium tend à former $\\ce{Na+}$ et le fluor $\\ce{F-}$.`,
        correct: true,
        explanation: `Le sodium perd un électron tandis que le fluor en gagne un.`,
      },
      {
        content: `La grande différence d'électronégativité entre Na et F favorise un caractère ionique marqué.`,
        correct: true,
        explanation: `Le sodium est peu électronégatif et le fluor très électronégatif.`,
      },
      {
        content: `Le fluor forme préférentiellement le cation $\\ce{F+}$.`,
        correct: false,
        explanation: `Il tend au contraire à gagner un électron.`,
      },
      {
        content: `Le sodium est plus électronégatif que le fluor.`,
        correct: false,
        explanation: `Le fluor est l'élément le plus électronégatif de l'échelle présentée.`,
      },
    ],
    explanation:
      `La formation de fluorures permet de relier transfert électronique, configuration de gaz rare et forte différence d'électronégativité.`,
  },
  {
    order: 44,
    difficulty: 'HARD',
    format: 'QRM',
    question: `Concernant une liaison amide comme la liaison peptidique, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `La mésomérie délocalise des électrons sur le groupement $\\ce{O-C-N}$.`,
        correct: true,
        explanation: `Le doublet de l'azote participe à cette délocalisation.`,
      },
      {
        content: `La liaison $\\ce{C-N}$ acquiert un caractère partiel de double liaison.`,
        correct: true,
        explanation: `Cette conséquence explique sa rotation limitée.`,
      },
      {
        content: `La mésomérie impose le déplacement des atomes entre les formes canoniques.`,
        correct: false,
        explanation: `L'enchaînement atomique reste inchangé.`,
      },
      {
        content: `La délocalisation contribue à la planéité locale du groupement amide.`,
        correct: true,
        explanation: `C'est une conséquence structurale indiquée dans la fiche.`,
      },
    ],
    explanation:
      `La liaison peptidique constitue un exemple biomoléculaire majeur de mésomérie et de délocalisation électronique.`,
  },
  {
    order: 45,
    difficulty: 'HARD',
    format: 'QROC',
    question:
      `Pour une liaison $\\ce{H-Cl}$, on mesure $\\mu=3{,}2\\times10^{-30}\\,\\mathrm{C\\cdot m}$ et $d=160\\,\\mathrm{pm}$. Avec $e=1{,}60\\times10^{-19}\\,\\mathrm{C}$, quelle est la charge partielle en fraction de $e$ ?`,
    answer: { type: 'number', value: 0.125, tolerance: 0.01 },
    explanation:
      `$d=1{,}60\\times10^{-10}\\,\\mathrm{m}$ ; $\\delta=\\mu/d=2{,}0\\times10^{-20}\\,\\mathrm{C}$ ; $\\delta/e=0{,}125$.`,
  },
  {
    order: 46,
    difficulty: 'HARD',
    format: 'QROC',
    question: `Dans l'hémoglobine de l'énoncé commun, combien de positions de coordination autour du fer sont occupées par des atomes d'azote de l'hème ou de l'histidine ?`,
    answer: { type: 'number', value: 5, tolerance: 0 },
    explanation:
      `Quatre azotes appartiennent à l'hème et un cinquième à une histidine. La sixième position peut fixer $\\ce{O2}$ ou être occupée par un ligand concurrent.`,
  },
  {
    order: 47,
    difficulty: 'HARD',
    format: 'QRM',
    question: `Lorsque le monoxyde de carbone entre en compétition avec le dioxygène sur l'hème, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Il s'agit d'une substitution de ligand sur une position de coordination du fer.`,
        correct: true,
        explanation: `Le ligand occupant la position est remplacé.`,
      },
      {
        content: `Le CO agit comme donneur de doublet et le fer comme accepteur.`,
        correct: true,
        explanation: `C'est le schéma général d'une liaison de coordination.`,
      },
      {
        content: `Le changement de ligand impose nécessairement le passage de $\\ce{Fe^2+}$ à $\\ce{Fe^3+}$.`,
        correct: false,
        explanation: `Une substitution de ligand ne suppose pas à elle seule un changement d'état d'oxydation.`,
      },
      {
        content: `Une liaison Fe–CO plus stable rendrait sa dissociation plus facile.`,
        correct: false,
        explanation: `Une liaison plus stable se dissocie moins facilement.`,
      },
    ],
    explanation:
      `La compétition CO/O2 illustre la réversibilité des liaisons de coordination et la substitution de ligands autour du fer.`,
  },
  {
    order: 35,
    difficulty: 'HARD',
    format: 'QRM',
    question:
      `Le cisplatine peut substituer des ligands chlorure par des atomes d'azote de l'ADN. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Le platine constitue le centre accepteur de doublets.`,
        correct: true,
        explanation: `Il reçoit des doublets provenant des ligands.`,
      },
      {
        content: `Les azotes des bases nucléiques peuvent agir comme donneurs.`,
        correct: true,
        explanation: `Ils disposent de doublets susceptibles de coordonner le platine.`,
      },
      {
        content: `La substitution de ligands modifie la coordination sans nécessiter la rupture du squelette covalent de l'ADN.`,
        correct: true,
        explanation: `Le mécanisme présenté concerne la fixation du platine sur des sites azotés.`,
      },
      {
        content: `Le platine doit gagner trois électrons pour former chacune de ses liaisons de coordination.`,
        correct: false,
        explanation: `La liaison se forme par donation d'un doublet par le ligand.`,
      },
    ],
    explanation:
      `Le cisplatine permet de mobiliser la notion de ligand donneur, centre métallique accepteur et substitution de coordination dans un contexte pharmacologique.`,
  },
  {
    order: 48,
    difficulty: 'HARD',
    format: 'QROC',
    question:
      `On donne $E_{\\ce{O-H}}=460\\,\\mathrm{kJ\\cdot mol^{-1}}$ et $N_{\\mathrm A}=6{,}0\\times10^{23}\\,\\mathrm{mol^{-1}}$. Quelle énergie moyenne faut-il fournir pour rompre une seule liaison $\\ce{O-H}$, en joules ?`,
    answer: { type: 'number', value: 7.67e-19, tolerance: 0.15e-19 },
    explanation:
      `Une mole correspond à $4{,}60\\times10^5\\,\\mathrm{J}$. Pour une seule liaison : $4{,}60\\times10^5/(6{,}0\\times10^{23})\\approx7{,}7\\times10^{-19}\\,\\mathrm{J}$.`,
  },
  {
    order: 49,
    difficulty: 'HARD',
    format: 'QRM',
    question: `À propos de la radiolyse de l'eau et des radicaux libres, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Une rupture homolytique partage les deux électrons de liaison entre les deux fragments.`,
        correct: true,
        explanation: `Chaque fragment récupère un électron.`,
      },
      {
        content: `Le radical hydroxyle peut participer à des réactions dommageables pour des biomolécules.`,
        correct: true,
        explanation: `La fiche cite notamment les acides gras insaturés et l'ADN comme cibles possibles.`,
      },
      {
        content: `Un radical est nécessairement un anion.`,
        correct: false,
        explanation: `La présence d'un électron célibataire ne détermine pas une charge négative.`,
      },
      {
        content: `La forte réactivité des radicaux est liée à la présence d'un électron célibataire.`,
        correct: true,
        explanation: `Cette configuration favorise leur réactivité.`,
      },
    ],
    explanation:
      `Les rayonnements peuvent provoquer des ruptures homolytiques et générer des radicaux particulièrement réactifs dans les milieux biologiques.`,
  },
  {
    order: 65,
    difficulty: 'HARD',
    format: 'QRPL',
    requiredSelectionCount: 5,
    question: `Dans le cadre simplifié du cours, sélectionnez exactement les cinq espèces citées comme accepteurs possibles de doublets dans des liaisons de coordination.`,
    choices: [
      { content: `$\\ce{H+}$`, correct: true, explanation: `Accepteur cité dans la fiche.` },
      { content: `$\\ce{Ca^2+}$`, correct: true, explanation: `Ion métallique accepteur cité.` },
      { content: `$\\ce{Fe^2+}$`, correct: true, explanation: `Ion métallique accepteur cité.` },
      { content: `$\\ce{Zn^2+}$`, correct: true, explanation: `Ion métallique accepteur cité.` },
      { content: `$\\ce{Mn^2+}$`, correct: true, explanation: `Ion métallique accepteur cité.` },
      { content: `$\\ce{NH3}$`, correct: false, explanation: `L'ammoniac est plutôt illustré comme donneur de doublet.` },
      { content: `$\\ce{H2O}$`, correct: false, explanation: `L'oxygène de l'eau peut agir comme donneur ; ce n'est pas l'accepteur cité ici.` },
      { content: `$\\ce{Cl-}$`, correct: false, explanation: `Un anion chlorure n'est pas dans la liste d'accepteurs donnée.` },
      { content: `$\\ce{O2}$`, correct: false, explanation: `Le dioxygène est présenté comme ligand sur l'hème, donc donneur dans ce cadre de coordination.` },
      { content: `$\\ce{CO}$`, correct: false, explanation: `Le CO est présenté comme ligand concurrent du dioxygène, donc donneur au fer.` },
    ],
    explanation:
      `La fiche cite notamment $\\ce{H+}$ et plusieurs cations métalliques comme accepteurs disposant d'orbitales disponibles pour recevoir des doublets.`,
  },
  {
    order: 66,
    difficulty: 'HARD',
    format: 'QROC',
    question:
      `On mesure pour une liaison polarisée $\\mu=6{,}4\\times10^{-30}\\,\\mathrm{C\\cdot m}$ et $d=160\\,\\mathrm{pm}$. Avec $e=1{,}60\\times10^{-19}\\,\\mathrm{C}$, quelle est la charge partielle $\\delta$ exprimée en fraction de $e$ ?`,
    answer: { type: 'number', value: 0.25, tolerance: 0.01 },
    explanation:
      `$d=1{,}60\\times10^{-10}\\,\\mathrm{m}$ ; $\\delta=\\mu/d=4{,}0\\times10^{-20}\\,\\mathrm{C}$ ; puis $\\delta/e=0{,}25$.`,
  },
];
