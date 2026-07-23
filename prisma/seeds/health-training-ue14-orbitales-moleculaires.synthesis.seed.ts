import type { SeedQuestion } from './health-training-ue14.shared';

export const SYNTHESIS_MASTER_QUESTION_ORDERS: number[] = [
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
];

export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
  {
    order: 71,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `L'aspirine, ou acide acétylsalicylique, possède la formule topologique suivante : [[QUESTION_DIAGRAM]] À propos de l'hybridation de ses neuf atomes de carbone :`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'aspirin-topological',
    },
    choices: [
      `Les six carbones du cycle aromatique sont hybridés $\\mathrm{sp}^2$.`,
      `Les deux carbones des groupes carbonyle $\\mathrm{C{=}O}$ sont hybridés $\\mathrm{sp}^2$.`,
      `Le carbone du groupe méthyle $\\mathrm{CH_3}$ est hybridé $\\mathrm{sp}^3$.`,
      `Tous les items précédents sont vrais.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `L'aspirine contient six carbones aromatiques et deux carbones carbonylés, tous hybridés $\\mathrm{sp}^2$, ainsi qu'un carbone méthylique hybridé $\\mathrm{sp}^3$. Elle comporte donc huit carbones $\\mathrm{sp}^2$ et un carbone $\\mathrm{sp}^3$. Cette question relie aromaticité, liaisons multiples et hybridation locale.`,
    choiceExplanations: [
      `Chaque carbone du benzène possède trois directions $\\sigma$ coplanaires et une orbitale $\\mathrm{p}$ participant au système $\\pi$ délocalisé.`,
      `Un carbone carbonylé forme trois directions $\\sigma$ et conserve une orbitale $\\mathrm{p}$ pour la composante $\\pi$ de $\\mathrm{C{=}O}$.`,
      `Le carbone du méthyle forme quatre liaisons simples $\\sigma$ et est donc décrit comme $\\mathrm{sp}^3$.`,
      `Les trois propositions précédentes étant exactes, cet item récapitulatif est également vrai.`,
    ],
  },
  {
    order: 72,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Le protoxyde d'azote $\\mathrm{N_2O}$ est utilisé en anesthésie et en analgésie, notamment en odontologie. On retient un squelette linéaire $\\mathrm{N{-}N{-}O}$ décrit par plusieurs formes mésomères.`,
    choices: [
      `L'atome d'azote central possède deux directions de liaison et peut être décrit par une géométrie $\\mathrm{AX}_2$.`,
      `Dans le modèle d'hybridation, l'atome central peut être considéré comme hybridé $\\mathrm{sp}$.`,
      `Le squelette moléculaire comporte deux liaisons $\\sigma$ et, au total, deux composantes $\\pi$ délocalisées entre les formes mésomères.`,
      `La présence de trois atomes impose nécessairement une géométrie trigonale plane.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La géométrie se détermine autour de l'atome central, et non à partir du nombre total d'atomes. Deux directions de liaison conduisent à une organisation linéaire et à une hybridation $\\mathrm{sp}$. Les formes mésomères modifient la répartition des ordres de liaison, mais le squelette conserve deux liaisons $\\sigma$ et deux composantes $\\pi$ au total.`,
    choiceExplanations: [
      `Une liaison vers chacun des deux atomes terminaux constitue deux domaines électroniques autour de l'azote central.`,
      `Deux directions opposées et deux orbitales $\\mathrm{p}$ non hybridées sont cohérentes avec une hybridation $\\mathrm{sp}$.`,
      `Chaque liaison entre deux atomes possède une composante $\\sigma$ ; les deux composantes supplémentaires sont de type $\\pi$ et leur localisation varie selon les formes mésomères.`,
      `Trois atomes peuvent former une molécule linéaire lorsque l'atome central ne possède que deux directions électroniques.`,
    ],
  },
  {
    order: 73,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Le couple $\\mathrm{CO_2},\\mathrm{H_2O}/\\mathrm{HCO_3^-}$ intervient dans le transport du dioxyde de carbone et dans le pouvoir tampon du sang. On compare la géométrie autour du carbone dans $\\mathrm{CO_2}$ et dans l'ion hydrogénocarbonate $\\mathrm{HCO_3^-}$.`,
    choices: [
      `Dans $\\mathrm{CO_2}$, le carbone est hybridé $\\mathrm{sp}$ et la molécule est linéaire.`,
      `Dans $\\mathrm{HCO_3^-}$, le carbone est hybridé $\\mathrm{sp}^2$ et les trois directions $\\mathrm{C{-}O}$ sont approximativement coplanaires.`,
      `Dans $\\mathrm{CO_2}$, les liaisons $\\mathrm{C{=}O}$ sont polarisées mais leurs moments dipolaires se compensent.`,
      `Le passage de $\\mathrm{CO_2}$ à $\\mathrm{HCO_3^-}$ conserve une géométrie linéaire autour du carbone.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `$\\mathrm{CO_2}$ possède deux domaines autour du carbone : il est linéaire et hybridé $\\mathrm{sp}$. Dans $\\mathrm{HCO_3^-}$, trois directions $\\mathrm{C{-}O}$ conduisent à une organisation trigonale plane et à une hybridation $\\mathrm{sp}^2$. La symétrie de $\\mathrm{CO_2}$ explique la compensation de ses moments dipolaires de liaison.`,
    choiceExplanations: [
      `Deux domaines électroniques opposés conduisent à une géométrie $\\mathrm{AX}_2$ et à un angle de $180^\\circ$.`,
      `Trois directions de liaison autour du carbone correspondent à une organisation trigonale plane proche de $120^\\circ$.`,
      `Les deux vecteurs dipolaires, de même intensité et de sens opposés, s'annulent dans la molécule linéaire.`,
      `L'ion hydrogénocarbonate possède trois directions autour du carbone : sa géométrie n'est donc pas linéaire.`,
    ],
  },
  {
    order: 74,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Le méthanal, ou formaldéhyde, de formule $\\mathrm{H_2C{=}O}$, est notamment utilisé pour la fixation de prélèvements en anatomopathologie. À propos de son atome de carbone :`,
    choices: [
      `Il possède trois directions de liaison $\\sigma$ et est de type $\\mathrm{AX}_3$.`,
      `Il est hybridé $\\mathrm{sp}^2$ et son environnement est trigonal plan.`,
      `Il conserve une orbitale $\\mathrm{p}$ non hybridée qui participe à la liaison $\\pi$ du carbonyle.`,
      `La molécule comporte au total trois liaisons $\\sigma$ et une liaison $\\pi$.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `Le carbone du méthanal est lié à deux hydrogènes et à un oxygène : il possède trois directions $\\sigma$, est hybridé $\\mathrm{sp}^2$ et adopte une géométrie trigonale plane. La double liaison $\\mathrm{C{=}O}$ associe une composante $\\sigma$ et une composante $\\pi$.`,
    choiceExplanations: [
      `Les deux liaisons $\\mathrm{C{-}H}$ et la composante $\\sigma$ de $\\mathrm{C{=}O}$ constituent trois directions autour du carbone.`,
      `Trois domaines électroniques sans doublet non liant sur le carbone conduisent à une géométrie trigonale plane.`,
      `L'orbitale $\\mathrm{p}$ restante se recouvre latéralement avec une orbitale $\\mathrm{p}$ de l'oxygène.`,
      `On compte deux liaisons $\\mathrm{C{-}H}$, une composante $\\sigma$ de $\\mathrm{C{=}O}$ et une composante $\\pi$.`,
    ],
  },
  {
    order: 75,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `On considère l'isomère trans du 1,2-dichloroéthène $\\mathrm{CHCl{=}CHCl}$, exemple classique reliant hybridation, géométrie et polarité.`,
    choices: [
      `Les deux atomes de carbone sont hybridés $\\mathrm{sp}^2$.`,
      `La molécule comporte cinq liaisons $\\sigma$ et une liaison $\\pi$.`,
      `La région de la double liaison est plane et la rotation autour de $\\mathrm{C{=}C}$ est limitée.`,
      `Bien que les liaisons $\\mathrm{C{-}Cl}$ soient polarisées, leur disposition trans symétrique peut conduire à la compensation du moment dipolaire moléculaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `Chaque carbone de la double liaison est hybridé $\\mathrm{sp}^2$ et trigonal plan. La molécule contient quatre liaisons vers les substituants, auxquelles s'ajoute la composante $\\sigma$ de $\\mathrm{C{=}C}$, soit cinq liaisons $\\sigma$, ainsi qu'une liaison $\\pi$. Dans l'isomère trans symétrique, les moments des liaisons $\\mathrm{C{-}Cl}$ peuvent se compenser.`,
    choiceExplanations: [
      `Un carbone engagé dans une double liaison possède trois directions $\\sigma$ et une orbitale $\\mathrm{p}$ non hybridée.`,
      `Les deux liaisons $\\mathrm{C{-}H}$, les deux liaisons $\\mathrm{C{-}Cl}$ et la composante $\\sigma$ de $\\mathrm{C{=}C}$ donnent cinq liaisons $\\sigma$.`,
      `La rotation désalignerait les orbitales $\\mathrm{p}$ responsables de la liaison $\\pi$.`,
      `La polarité d'une molécule dépend à la fois de la polarité des liaisons et de leur disposition géométrique.`,
    ],
  },
  {
    order: 76,
    difficulty: 'HARD',
    answerFormat: 'SINGLE',
    question:
      `Le cyanure d'hydrogène $\\mathrm{H{-}C{\\equiv}N}$ est un toxique majeur. Le carbone possède le numéro atomique $\\mathrm{Z} = 6$ et est hybridé $\\mathrm{sp}$ dans cette molécule. Quelle représentation en cases quantiques correspond à ses orbitales de valence après hybridation ?`,
    choices: [
      {
        type: 'quantum-boxes',
        suffix: '.',
        orbitals: [
          { label: '2\\mathrm{s}', boxes: ['pair'] },
          { label: '2\\mathrm{p}', boxes: ['up', 'up', 'empty'] },
        ],
      },
      {
        type: 'quantum-boxes',
        suffix: '.',
        orbitals: [
          { label: '2\\mathrm{sp}^{2}', boxes: ['up', 'up', 'up'] },
          { label: '2\\mathrm{p}', boxes: ['up'] },
        ],
      },
      {
        type: 'quantum-boxes',
        suffix: '.',
        orbitals: [
          { label: '2\\mathrm{sp}', boxes: ['up', 'up'] },
          { label: '2\\mathrm{p}', boxes: ['up', 'up'] },
        ],
      },
      {
        type: 'quantum-boxes',
        suffix: '.',
        orbitals: [
          { label: '2\\mathrm{sp}^{3}', boxes: ['up', 'up', 'up', 'up'] },
        ],
      },
    ],
    correctChoiceIndexes: [2],
    explanation:
      `L'hybridation $\\mathrm{sp}$ produit deux orbitales hybrides $\\mathrm{sp}$ simplement occupées et laisse deux orbitales $\\mathrm{p}$ non hybridées, elles aussi simplement occupées. Les orbitales $\\mathrm{sp}$ participent aux deux liaisons $\\sigma$ du carbone, tandis que les deux orbitales $\\mathrm{p}$ permettent de former les deux liaisons $\\pi$ de $\\mathrm{C{\\equiv}N}$.`,
    choiceExplanations: [
      `Cette représentation correspond à l'état atomique fondamental $2\\mathrm{s}^2\\,2\\mathrm{p}^2$, avant redistribution et hybridation.`,
      `Trois orbitales $\\mathrm{sp}^2$ et une orbitale $\\mathrm{p}$ restante correspondent à une hybridation $\\mathrm{sp}^2$.`,
      `Deux orbitales $\\mathrm{sp}$ et deux orbitales $\\mathrm{p}$ non hybridées, chacune occupée par un électron, constituent la représentation attendue.`,
      `Quatre orbitales $\\mathrm{sp}^3$ ne laisseraient aucune orbitale $\\mathrm{p}$ disponible pour les deux liaisons $\\pi$.`,
    ],
  },
  {
    order: 77,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Deux orbitales atomiques $\\mathrm{p}$ compatibles sont placées face à face selon l'axe internucléaire puis combinées. À propos des orbitales obtenues :`,
    choices: [
      `Deux orbitales atomiques conduisent à deux orbitales moléculaires.`,
      `Une combinaison est liante $\\sigma$ et l'autre est antiliante $\\sigma^*$.`,
      `L'orbitale liante présente une densité électronique accrue entre les noyaux et contribue à stabiliser l'édifice.`,
      `L'orbitale $\\sigma^*$ est une orbitale atomique localisée sur un seul des deux atomes.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le nombre d'orbitales est conservé lors de la combinaison : deux orbitales atomiques donnent deux orbitales moléculaires. La combinaison en phase est liante et augmente la densité internucléaire ; la combinaison en opposition de phase est antiliante et comporte un nœud entre les noyaux.`,
    choiceExplanations: [
      `Deux fonctions orbitalaires initiales permettent de construire deux combinaisons indépendantes.`,
      `Le recouvrement axial conduit à des orbitales moléculaires de symétrie $\\sigma$.`,
      `La densité électronique située entre les noyaux favorise leur cohésion.`,
      `$\\sigma^*$ est une orbitale moléculaire étendue sur l'ensemble des deux atomes, et non une orbitale atomique localisée.`,
    ],
  },
  {
    order: 78,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `On compare $\\mathrm{NH_3}$, $\\mathrm{NH_4^+}$, $\\mathrm{H_2O}$ et $\\mathrm{H_3O^+}$, espèces importantes en biochimie acido-basique.`,
    choices: [
      `$\\mathrm{NH_3}$ et $\\mathrm{H_3O^+}$ sont de type $\\mathrm{AX}_3\\mathrm{E}_1$ et présentent une géométrie pyramidale.`,
      `$\\mathrm{NH_4^+}$ est de type $\\mathrm{AX}_4$ et présente une géométrie tétraédrique.`,
      `$\\mathrm{H_2O}$ est de type $\\mathrm{AX}_2\\mathrm{E}_2$ ; son angle de liaison est inférieur à celui de $\\mathrm{NH_3}$.`,
      `Les quatre atomes centraux sont hybridés $\\mathrm{sp}^2$, car ils sont liés à trois atomes au maximum.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le décompte doit inclure les doublets non liants. Les quatre espèces reposent sur quatre domaines électroniques autour de l'atome central et sont décrites par une hybridation $\\mathrm{sp}^3$. La géométrie moléculaire dépend ensuite du nombre d'atomes liés et de doublets non liants.`,
    choiceExplanations: [
      `Trois liaisons et un doublet non liant conduisent à une pyramide trigonale.`,
      `Quatre liaisons sans doublet non liant conduisent à un tétraèdre.`,
      `Les deux doublets non liants de l'eau compriment davantage l'angle $\\mathrm{H{-}O{-}H}$ que l'unique doublet de l'ammoniac ne comprime l'angle $\\mathrm{H{-}N{-}H}$.`,
      `Il faut compter les domaines électroniques, pas seulement les atomes visibles : ces centres sont décrits comme $\\mathrm{sp}^3$.`,
    ],
  },
  {
    order: 79,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `On compare le pentachlorure de phosphore $\\mathrm{PCl_5}$ et l'hexafluorure de soufre $\\mathrm{SF_6}$ dans le modèle de Gillespie.`,
    choices: [
      `$\\mathrm{PCl_5}$ est de type $\\mathrm{AX}_5$ et possède une géométrie bipyramidale trigonale.`,
      `$\\mathrm{SF_6}$ est de type $\\mathrm{AX}_6$ et possède une géométrie octaédrique.`,
      `Lorsque tous les atomes périphériques sont identiques, la symétrie de ces géométries peut conduire à la compensation des moments dipolaires de liaison.`,
      `Dans $\\mathrm{PCl_5}$, les cinq positions occupées par les atomes de chlore sont géométriquement toutes équivalentes.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `$\\mathrm{PCl_5}$ possède trois positions équatoriales et deux positions axiales, qui ne sont pas équivalentes. $\\mathrm{SF_6}$ adopte une géométrie octaédrique. Malgré des liaisons polarisées, la forte symétrie de ces molécules peut annuler le moment dipolaire résultant.`,
    choiceExplanations: [
      `Cinq domaines sans doublet non liant conduisent à une bipyramide trigonale.`,
      `Six domaines sans doublet non liant conduisent à un octaèdre.`,
      `La polarité moléculaire dépend de la somme vectorielle des moments dipolaires de liaison.`,
      `Les positions axiales subissent des relations angulaires différentes des positions équatoriales ; elles ne sont donc pas géométriquement équivalentes.`,
    ],
  },
  {
    order: 80,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Un étudiant compare le cyanure d'hydrogène $\\mathrm{HCN}$, l'éthylène $\\mathrm{C_2H_4}$ et le benzène $\\mathrm{C_6H_6}$. Quelle conclusion retenir ?`,
    choices: [
      `Dans $\\mathrm{HCN}$, le carbone est hybridé $\\mathrm{sp}^2$ et la molécule est coudée.`,
      `Dans l'éthylène, chaque carbone est hybridé $\\mathrm{sp}$ et la libre rotation autour de $\\mathrm{C{=}C}$ est conservée.`,
      `Dans le benzène, les carbones sont hybridés $\\mathrm{sp}^3$ et les trois doubles liaisons restent localisées en permanence.`,
      `Aucun des items précédents n'est vrai.`,
    ],
    correctChoiceIndexes: [3],
    explanation:
      `Dans $\\mathrm{HCN}$, le carbone est hybridé $\\mathrm{sp}$ et la molécule est linéaire. Dans l'éthylène, chaque carbone est hybridé $\\mathrm{sp}^2$ et la liaison $\\pi$ limite la rotation autour de $\\mathrm{C{=}C}$. Dans le benzène, les six carbones sont hybridés $\\mathrm{sp}^2$ et les électrons $\\pi$ sont délocalisés sur l'ensemble du cycle.`,
    choiceExplanations: [
      `$\\mathrm{HCN}$ possède deux directions autour du carbone : celui-ci est hybridé $\\mathrm{sp}$ et l'édifice est linéaire.`,
      `Chaque carbone de l'éthylène est hybridé $\\mathrm{sp}^2$ ; une rotation désalignerait les orbitales $\\mathrm{p}$ responsables de la liaison $\\pi$.`,
      `Le benzène est plan, ses carbones sont hybridés $\\mathrm{sp}^2$ et son système $\\pi$ est délocalisé.`,
      `Les trois propositions précédentes sont fausses ; cet item est donc exact.`,
    ],
  },
];
