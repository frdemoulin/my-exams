import type { SeedQuestion } from './health-training-ue14.shared';

export const SECTION_D_DISCOVER_QUESTION_ORDERS: number[] = [
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
];

export const SECTION_D_PRACTICE_QUESTION_ORDERS: number[] = [];

export const SECTION_D_QUESTIONS: SeedQuestion[] = [
  {
      order: 51,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos de la règle de Gillespie :`,
      choices: [
        `Les doublets électroniques de valence se repoussent entre eux.`,
        `Les doublets se disposent aussi loin que possible les uns des autres autour de l'atome central.`,
        `Cette règle aide à prévoir l'orientation des liaisons et la géométrie d'une molécule.`,
        `Seuls les doublets liants doivent être pris en compte ; les doublets non liants n'influencent jamais la géométrie.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `La règle de Gillespie repose sur la répulsion entre les doublets de valence. Leur disposition la plus éloignée possible permet de prévoir l'organisation spatiale autour de l'atome central. Les doublets liants comme les doublets non liants doivent être pris en compte.`,
      choiceExplanations: [
        `Les régions riches en électrons se repoussent, ce qui détermine leur orientation autour de l'atome central.`,
        `L'écartement maximal des doublets correspond à l'organisation la plus stable dans ce modèle.`,
        `La règle relie le nombre de domaines électroniques à une géométrie moléculaire.`,
        `Les doublets non liants occupent de l'espace et peuvent modifier la forme et les angles de la molécule.`,
      ],
    },
  {
      order: 52,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `Dans la nomenclature de Gillespie $\\mathrm{AX}_m\\mathrm{E}_n$ :`,
      choices: [
        `$\\mathrm{A}$ désigne l'atome central.`,
        `$m$ indique le nombre de doublets liants, ou de directions de liaison, autour de l'atome central.`,
        `$n$ indique le nombre de doublets non liants portés par l'atome central.`,
        `$\\mathrm{E}$ représente un élément chimique obligatoirement lié à $\\mathrm{A}$.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Dans l'écriture $\\mathrm{AX}_m\\mathrm{E}_n$, $\\mathrm{A}$ est l'atome central, $\\mathrm{X}$ représente les atomes liés à ce centre, $m$ compte les directions de liaison et $n$ les doublets non liants portés par $\\mathrm{A}$.`,
      choiceExplanations: [
        `La lettre $\\mathrm{A}$ repère le centre de la géométrie étudiée.`,
        `Chaque direction de liaison autour de l'atome central est comptée dans $m$.`,
        `Les doublets non liants portés par l'atome central sont comptés par l'indice $n$.`,
        `$\\mathrm{E}$ ne désigne pas un élément : il représente un doublet non liant.`,
      ],
    },
  {
      order: 53,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `La figure suivante représente trois géométries moléculaires simples prévues par la règle de Gillespie.\n\n![Géométries AX2, AX3 et AX4](/images/training/ue14/orbitales-moleculaires/gillespie-geometries-ax2-ax3-ax4.png)`,
      choices: [
        `Le schéma A correspond à une géométrie linéaire de type $\\mathrm{AX}_2$.`,
        `Le schéma B correspond à une géométrie trigonale plane de type $\\mathrm{AX}_3$.`,
        `Le schéma C correspond à une géométrie tétraédrique de type $\\mathrm{AX}_4$.`,
        `Dans le schéma C, les quatre atomes $\\mathrm{X}$ sont nécessairement coplanaires et séparés par des angles de $90^\\circ$.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Deux directions électroniques conduisent à une géométrie linéaire, trois à une géométrie trigonale plane et quatre à une géométrie tétraédrique. Le tétraèdre est tridimensionnel et ses angles sont proches de $109{,}5^\\circ$.`,
      choiceExplanations: [
        `Deux liaisons opposées donnent un angle de $180^\\circ$.`,
        `Trois liaisons coplanaires maximisent leur écartement avec des angles voisins de $120^\\circ$.`,
        `Quatre directions de liaison se répartissent vers les sommets d'un tétraèdre.`,
        `Une géométrie tétraédrique n'est pas plane et ne présente pas des angles de $90^\\circ$.`,
      ],
    },
  {
      order: 54,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `Le dioxyde de carbone $\\mathrm{CO_2}$ est produit par le métabolisme cellulaire puis éliminé par les poumons. Sa formule développée est $\\mathrm{O{=}C{=}O}$. À propos de sa géométrie selon Gillespie :`,
      choices: [
        `Le carbone est l'atome central et possède deux directions de liaison.`,
        `Chaque double liaison $\\mathrm{C{=}O}$ compte comme une seule direction autour du carbone.`,
        `La molécule est de type $\\mathrm{AX}_2$, linéaire, avec un angle de $180^\\circ$.`,
        `La présence de quatre traits de liaison dans $\\mathrm{O{=}C{=}O}$ impose une géométrie $\\mathrm{AX}_4$ tétraédrique.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Dans la règle de Gillespie, une liaison simple, double ou triple constitue une seule direction électronique autour de l'atome central. Le carbone de $\\mathrm{CO_2}$ possède donc deux directions de liaison et aucune paire libre dans le modèle de Lewis retenu : la molécule est $\\mathrm{AX}_2$ et linéaire.`,
      choiceExplanations: [
        `Les deux atomes d'oxygène sont situés de part et d'autre du carbone central.`,
        `Une liaison multiple est traitée comme un seul domaine électronique pour déterminer la géométrie.`,
        `Deux domaines se placent à l'opposé l'un de l'autre, soit à $180^\\circ$.`,
        `Il ne faut pas compter les traits du schéma de Lewis, mais les directions de liaison autour de l'atome central.`,
      ],
    },
  {
      order: 55,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `On compare le borane $\\mathrm{BH_3}$ et le dioxyde de soufre $\\mathrm{SO_2}$ dans un modèle de Lewis simplifié.`,
      choices: [
        `$\\mathrm{BH_3}$ est de type $\\mathrm{AX}_3$ et présente une géométrie trigonale plane.`,
        `$\\mathrm{SO_2}$ est de type $\\mathrm{AX}_2\\mathrm{E}_1$ et présente une géométrie coudée.`,
        `Dans les deux molécules, trois domaines électroniques sont disposés autour de l'atome central.`,
        `$\\mathrm{BH_3}$ et $\\mathrm{SO_2}$ ont nécessairement la même géométrie moléculaire puisqu'ils possèdent chacun trois domaines électroniques.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `$\\mathrm{BH_3}$ possède trois liaisons et aucun doublet non liant sur le bore : sa géométrie est trigonale plane. Dans $\\mathrm{SO_2}$, deux directions de liaison et un doublet non liant occupent trois positions, mais seuls deux atomes sont visibles autour du soufre : la molécule est coudée.`,
      choiceExplanations: [
        `Trois liaisons sans doublet non liant correspondent à $\\mathrm{AX}_3$.`,
        `Deux atomes liés et un doublet non liant correspondent à $\\mathrm{AX}_2\\mathrm{E}_1$.`,
        `Les trois domaines adoptent une organisation électronique trigonale plane.`,
        `La géométrie moléculaire dépend des positions des atomes liés ; le doublet non liant de $\\mathrm{SO_2}$ n'est pas visible comme un atome.`,
      ],
    },
  {
      order: 56,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `L'ion ammonium $\\mathrm{NH_4^+}$ participe notamment à l'élimination rénale de la charge acide. À propos de sa géométrie :`,
      choices: [
        `L'azote est l'atome central et est entouré de quatre directions de liaison.`,
        `$\\mathrm{NH_4^+}$ est de type $\\mathrm{AX}_4$.`,
        `Sa géométrie est tétraédrique, avec des angles voisins de $109{,}5^\\circ$.`,
        `La charge positive impose une géométrie carrée plane à $90^\\circ$.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Dans l'ion ammonium, l'azote est lié à quatre hydrogènes et ne porte plus de doublet non liant dans le modèle de Lewis usuel. Les quatre directions de liaison se disposent selon une géométrie tétraédrique. La charge de l'ion ne suffit pas, à elle seule, à imposer une géométrie particulière.`,
      choiceExplanations: [
        `Les quatre liaisons $\\mathrm{N{-}H}$ entourent l'atome d'azote central.`,
        `Quatre atomes liés et aucun doublet non liant donnent la notation $\\mathrm{AX}_4$.`,
        `L'écartement maximal de quatre directions dans l'espace correspond au tétraèdre.`,
        `Une charge électrique ne transforme pas automatiquement une géométrie tétraédrique en géométrie carrée plane.`,
      ],
    },
  {
      order: 57,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `La figure suivante illustre notamment l'effet des doublets non liants sur la géométrie moléculaire.\n\n![Géométries AX3E1, AX2E2, AX5 et AX6](/images/training/ue14/orbitales-moleculaires/gillespie-geometries-ax3e1-ax2e2-ax5-ax6.png)`,
      choices: [
        `Le schéma D est compatible avec une molécule $\\mathrm{AX}_3\\mathrm{E}_1$ telle que $\\mathrm{NH_3}$ ou $\\mathrm{H_3O^+}$.`,
        `Le schéma E est compatible avec une molécule $\\mathrm{AX}_2\\mathrm{E}_2$ telle que $\\mathrm{H_2O}$ ou $\\mathrm{H_2S}$.`,
        `Les schémas D et E reposent tous deux sur quatre domaines électroniques autour de l'atome central.`,
        `Le schéma E représente une géométrie linéaire de type $\\mathrm{AX}_2$.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Une espèce $\\mathrm{AX}_3\\mathrm{E}_1$ possède trois atomes liés et un doublet non liant : sa géométrie est pyramidale. Une espèce $\\mathrm{AX}_2\\mathrm{E}_2$ possède deux atomes liés et deux doublets non liants : sa géométrie est coudée. Dans les deux cas, quatre domaines électroniques occupent une organisation générale tétraédrique.`,
      choiceExplanations: [
        `Trois liaisons et un doublet non liant conduisent à une pyramide trigonale.`,
        `Deux liaisons et deux doublets non liants conduisent à une forme coudée.`,
        `Le total $m+n$ vaut quatre dans les deux notations.`,
        `Une géométrie $\\mathrm{AX}_2$ linéaire ne comporte aucun doublet non liant sur l'atome central.`,
      ],
    },
  {
      order: 58,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `L'ammoniac $\\mathrm{NH_3}$ est une espèce azotée toxique à forte concentration, tandis que l'ion oxonium $\\mathrm{H_3O^+}$ intervient dans l'acidité des solutions aqueuses. Selon Gillespie :`,
      choices: [
        `$\\mathrm{NH_3}$ et $\\mathrm{H_3O^+}$ sont tous deux de type $\\mathrm{AX}_3\\mathrm{E}_1$.`,
        `Leur atome central porte trois liaisons et un doublet non liant.`,
        `Leur géométrie moléculaire est pyramidale.`,
        `Leur géométrie est trigonale plane, car seuls trois atomes sont liés à l'atome central.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Dans $\\mathrm{NH_3}$ comme dans $\\mathrm{H_3O^+}$, l'atome central est entouré de trois atomes et possède un doublet non liant. L'organisation des quatre domaines électroniques est tétraédrique, mais la géométrie définie par les positions des atomes est pyramidale.`,
      choiceExplanations: [
        `La notation $\\mathrm{AX}_3\\mathrm{E}_1$ décrit exactement trois liaisons et un doublet non liant.`,
        `Le doublet non liant doit être compté en plus des trois liaisons.`,
        `Les trois atomes liés constituent la base d'une pyramide autour de l'atome central.`,
        `Compter seulement les atomes liés conduit à oublier le doublet non liant et à une géométrie incorrecte.`,
      ],
    },
  {
      order: 59,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `La figure suivante présente notamment les géométries à cinq et six directions de liaison.\n\n![Géométries AX5 et AX6](/images/training/ue14/orbitales-moleculaires/gillespie-geometries-ax3e1-ax2e2-ax5-ax6.png)`,
      choices: [
        `Le schéma F correspond à une géométrie bipyramidale trigonale de type $\\mathrm{AX}_5$, comme dans $\\mathrm{PCl_5}$.`,
        `Une géométrie $\\mathrm{AX}_5$ comporte des angles caractéristiques de $90^\\circ$ et de $120^\\circ$.`,
        `Le schéma G correspond à une géométrie octaédrique de type $\\mathrm{AX}_6$, avec des angles de $90^\\circ$.`,
        `Les géométries $\\mathrm{AX}_5$ et $\\mathrm{AX}_6$ sont toutes deux entièrement planes.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Cinq directions de liaison se répartissent selon une bipyramide trigonale, avec trois positions équatoriales et deux positions axiales. Six directions de liaison se répartissent selon un octaèdre. Ces deux géométries sont tridimensionnelles.`,
      choiceExplanations: [
        `$\\mathrm{PCl_5}$ est un exemple classique de géométrie $\\mathrm{AX}_5$.`,
        `Les positions équatoriales sont séparées par $120^\\circ$ et les positions axiales par rapport au plan équatorial par $90^\\circ$.`,
        `Dans un octaèdre, les directions voisines sont perpendiculaires.`,
        `Les positions axiales placent plusieurs atomes hors du plan équatorial.`,
      ],
    },
  {
      order: 60,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `Concernant quelques correspondances entre molécules et nomenclature de Gillespie :`,
      choices: [
        `$\\mathrm{BeH_2}$, $\\mathrm{CO_2}$ et $\\mathrm{HCN}$ peuvent être décrits par une géométrie linéaire de type $\\mathrm{AX}_2$ autour de leur atome central.`,
        `$\\mathrm{SO_2}$ peut être décrit par la notation $\\mathrm{AX}_2\\mathrm{E}_1$ et présente une géométrie coudée.`,
        `$\\mathrm{CH_4}$ et $\\mathrm{NH_4^+}$ sont de type $\\mathrm{AX}_4$ et présentent une géométrie tétraédrique.`,
        `Tous les items précédents sont vrais.`,
      ],
      correctChoiceIndexes: [0, 1, 2, 3],
      explanation:
        `Ces correspondances reprennent les exemples fondamentaux : $\\mathrm{AX}_2$ est linéaire, $\\mathrm{AX}_2\\mathrm{E}_1$ est coudée et $\\mathrm{AX}_4$ est tétraédrique. Les trois premières affirmations étant exactes, l'item récapitulatif est également vrai.`,
      choiceExplanations: [
        `Autour de l'atome central, ces espèces possèdent deux directions de liaison et aucune paire libre dans les modèles retenus.`,
        `Le doublet non liant du soufre occupe la troisième position électronique et donne une forme coudée.`,
        `Quatre liaisons sans doublet non liant conduisent à une géométrie tétraédrique.`,
        `Les trois propositions précédentes sont exactes ; cet item est donc lui aussi exact.`,
      ],
    },
];
