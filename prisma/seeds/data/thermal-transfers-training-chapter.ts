import type {
  ChapterSectionKind,
  QuizDifficulty,
  TrainingQuizStage,
} from '@prisma/client';

type SeedQuizQuestion = {
  difficulty: QuizDifficulty;
  question: string;
  choices: string[];
  correctChoiceIndex: number;
  explanation: string;
  order: number;
};

type SeedTrainingQuizQuestionGroup = {
  title?: string;
  sharedStatement: string;
  order: number;
  questionOrders: number[];
};

type SeedTrainingQuizItem =
  | {
      type: 'QUESTION';
      questionOrder: number;
    }
  | {
      type: 'GROUP';
      title?: string;
      sharedStatement: string;
      questionOrders: number[];
    };

type SeedTrainingQuiz = {
  title: string;
  slug: string;
  description: string;
  order: number;
  stage?: TrainingQuizStage;
  isPublished?: boolean;
  questionOrders?: number[];
  questionGroups?: SeedTrainingQuizQuestionGroup[];
  items?: SeedTrainingQuizItem[];
};

type SeedChapterSection = {
  title: string;
  description: string;
  order: number;
  kind?: ChapterSectionKind;
  quizzes: SeedTrainingQuiz[];
};

type TrainingChapterSeed = {
  title: string;
  slug: string;
  order: number;
  domainLongDescriptions: string[];
  questions: SeedQuizQuestion[];
  sections?: SeedChapterSection[];
};

export const thermalTransfersTrainingChapter: TrainingChapterSeed = {
  title: "Transferts thermiques et bilans d'énergie",
  slug: 'transferts-thermiques-et-bilans-d-energie',
  order: 16,
  domainLongDescriptions: ['Énergie'],
  questions: [
    {
      difficulty: 'EASY',
      order: 1,
      question:
        'Que représente l’énergie interne d’un système au niveau microscopique ?',
      choices: [
        'La somme des énergies microscopiques d’agitation et d’interaction de ses constituants',
        'L’énergie cinétique du système dans son mouvement d’ensemble',
        'L’énergie potentielle de pesanteur du système dans son environnement',
        'La chaleur stockée comme une grandeur distincte à l’intérieur du système',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L’énergie interne traduit l’état microscopique du système : agitation thermique des particules et interactions entre elles.',
    },
    {
      difficulty: 'EASY',
      order: 2,
      question:
        'Pour un même système, que peut-on dire en général de l’énergie interne lorsque sa température augmente ?',
      choices: [
        'Elle augmente',
        'Elle diminue forcément',
        'Elle reste toujours constante',
        'Elle devient nulle',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une hausse de température traduit généralement une agitation thermique plus importante, donc une augmentation de l’énergie interne.',
    },
    {
      difficulty: 'EASY',
      order: 3,
      question:
        'Que signifie une variation d’énergie interne $\\Delta U > 0$ pour un système ?',
      choices: [
        'Le système a gagné de l’énergie interne',
        'Le système a perdu de la masse',
        'Le système est forcément à l’équilibre thermique',
        'Le système a forcément fourni du travail',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une variation positive d’énergie interne signifie que l’état final correspond à une énergie interne plus grande que l’état initial.',
    },
    {
      difficulty: 'EASY',
      order: 4,
      question:
        'Entre deux états d’équilibre donnés d’un système, la variation d’énergie interne dépend :',
      choices: [
        'Seulement de l’état initial et de l’état final',
        'Uniquement du chemin suivi pendant la transformation',
        'Uniquement de la durée de la transformation',
        'Seulement de la masse volumique du système',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L’énergie interne est une fonction d’état. Sa variation entre deux états ne dépend pas du chemin suivi.',
    },
    {
      difficulty: 'EASY',
      order: 5,
      question:
        'Pour un gaz parfait de quantité de matière fixée, l’énergie interne dépend principalement :',
      choices: [
        'De sa température',
        'Uniquement de son volume',
        'Uniquement de sa pression',
        'De sa couleur',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Dans le modèle du gaz parfait, l’énergie interne est liée à l’agitation thermique, donc à la température du gaz.',
    },
    {
      difficulty: 'EASY',
      order: 107,
      question:
        'Peut-on en général calculer directement la valeur de l’énergie interne $U$ d’un système dans un état donné ?',
      choices: [
        'Non, on détermine surtout des variations d’énergie interne entre deux états',
        'Oui, il suffit toujours de connaître sa masse',
        'Oui, il suffit toujours de connaître sa température extérieure',
        'Oui, car $U$ vaut toujours 0 à l’équilibre',
      ],
      correctChoiceIndex: 0,
      explanation:
        'En thermodynamique usuelle, on accède surtout à la variation $\\Delta U$ entre deux états. La valeur absolue de $U$ dans un état donné n’est généralement pas directement calculée.',
    },
    {
      difficulty: 'EASY',
      order: 108,
      question:
        'Quelle est l’unité SI de l’énergie interne $U$ ?',
      choices: ['Le joule (J)', 'Le watt (W)', 'Le kelvin (K)', 'Le pascal (Pa)'],
      correctChoiceIndex: 0,
      explanation:
        'L’énergie interne est une énergie. Son unité dans le Système international est donc le joule.',
    },
    {
      difficulty: 'EASY',
      order: 109,
      question:
        'Pour un système macroscopique, quelle décomposition est correcte de l’énergie totale ?',
      choices: [
        'Énergie totale = énergie mécanique + énergie interne',
        'Énergie totale = température + énergie interne',
        'Énergie totale = énergie interne - masse',
        'Énergie totale = énergie mécanique seulement',
      ],
      correctChoiceIndex: 0,
      explanation:
        'On peut distinguer l’énergie mécanique macroscopique du système et son énergie interne liée à son état microscopique. Leur somme contribue à l’énergie totale.',
    },
    {
      difficulty: 'EASY',
      order: 110,
      question:
        'Une variation d’énergie interne peut être due :',
      choices: [
        'À un transfert thermique',
        'À un travail',
        'À un travail et/ou à un transfert thermique',
        'À aucun des deux',
      ],
      correctChoiceIndex: 2,
      explanation:
        'D’après le premier principe, la variation d’énergie interne peut résulter d’un transfert thermique, d’un travail, ou des deux à la fois.',
    },
    {
      difficulty: 'EASY',
      order: 111,
      question:
        'Dans un liquide, l’énergie interne correspond :',
      choices: [
        'Uniquement à l’énergie cinétique microscopique',
        'Uniquement à l’énergie potentielle microscopique',
        'À la somme des énergies cinétique et potentielle microscopiques',
        'À l’énergie mécanique macroscopique du liquide',
      ],
      correctChoiceIndex: 2,
      explanation:
        'Dans un liquide, les particules sont à la fois en agitation et en interaction. L’énergie interne prend donc en compte des contributions cinétiques et potentielles à l’échelle microscopique.',
    },
    {
      difficulty: 'EASY',
      order: 112,
      question:
        'Pourquoi faut-il définir précisément le système avant d’écrire un bilan d’énergie ?',
      choices: [
        'Pour savoir quels échanges sont reçus ou cédés par le système',
        'Pour connaître automatiquement la température finale',
        'Pour éviter d’utiliser les unités du Système international',
        'Pour rendre le système forcément isolé',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le choix du système permet d’identifier correctement ce qui entre dans le système, ce qui en sort, et donc de donner le bon signe aux transferts d’énergie.',
    },
    {
      difficulty: 'EASY',
      order: 113,
      question:
        'On étudie comme système un café chaud posé sur une table. Il se refroidit sans recevoir de travail macroscopique. Que peut-on dire de $Q$ et de $\\Delta U$ ?',
      choices: [
        '$Q<0$ et $\\Delta U<0$',
        '$Q>0$ et $\\Delta U>0$',
        '$Q<0$ et $\\Delta U>0$',
        '$Q=0$ et $\\Delta U<0$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le café cède de l’énergie thermique à l’extérieur, donc $Q<0$. Comme il ne reçoit pas de travail macroscopique, le premier principe donne aussi une variation d’énergie interne négative.',
    },
    {
      difficulty: 'EASY',
      order: 114,
      question:
        'Un système reçoit un travail de $40\\,\\mathrm{J}$ et cède $150\\,\\mathrm{J}$ par transfert thermique. Quelle est sa variation d’énergie interne ?',
      choices: ['-$110\\,\\mathrm{J}$', '$110\\,\\mathrm{J}$', '-$190\\,\\mathrm{J}$', '$190\\,\\mathrm{J}$'],
      correctChoiceIndex: 0,
      explanation:
        'Avec la convention “reçu positif”, on a $W=+40\\,\\mathrm{J}$ et $Q=-150\\,\\mathrm{J}$, donc $\\Delta U = W + Q = -110\\,\\mathrm{J}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 115,
      question:
        'Pour un système incompressible constitué d’un seul matériau, en l’absence de changement d’état, quelle relation permet d’estimer la variation d’énergie interne lors d’un changement de température ?',
      choices: [
        '$\\Delta U = m c (T_f - T_i)$',
        '$\\Delta U = c (T_f - T_i)$',
        '$\\Delta U = m c (T_i - T_f)$',
        '$\\Delta U = m (T_f - T_i)$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Pour un système incompressible de masse $m$ et de capacité thermique massique $c$, en l’absence de changement d’état, la variation d’énergie interne est proportionnelle à la variation de température : $\\Delta U = m c (T_f - T_i)$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 116,
      question:
        'Lors d’un cycle complet de pompe à chaleur ou de réfrigérateur, l’état final du fluide est identique à l’état initial. On en déduit que :',
      choices: [
        '$\\Delta U = 0$ sur le cycle',
        '$Q = 0$ sur le cycle',
        '$W = 0$ sur le cycle',
        'La température du fluide reste constante tout au long du cycle',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L’énergie interne étant une fonction d’état, sa variation sur un cycle complet est nulle puisque l’état final est le même que l’état initial.',
    },
    {
      difficulty: 'EASY',
      order: 6,
      question:
        'Quelle écriture du premier principe de la thermodynamique utilise la convention “énergies reçues par le système positives” ?',
      choices: [
        '$\\Delta U = W + Q$',
        '$\\Delta U = W - Q$',
        '$U = WQ$',
        '$\\Delta U = \\dfrac{Q}{W}$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Avec la convention usuelle au lycée où travail et transfert thermique reçus sont comptés positivement, on écrit $\\Delta U = W + Q$.',
    },
    {
      difficulty: 'EASY',
      order: 7,
      question:
        'Pour un système isolé n’échangeant ni travail ni énergie thermique avec l’extérieur, quelle relation vérifie sa variation d’énergie interne ?',
      choices: ['$\\Delta U = 0$', '$\\Delta U = Q$', '$\\Delta U = W$', '$\\Delta U > 0$'],
      correctChoiceIndex: 0,
      explanation:
        'Si le système ne reçoit ni travail ni transfert thermique, le premier principe donne $\\Delta U = 0$.',
    },
    {
      difficulty: 'EASY',
      order: 8,
      question:
        'Un système reçoit 500 J par transfert thermique et ne reçoit aucun travail. Quelle est sa variation d’énergie interne ?',
      choices: ['500 J', '0 J', '-500 J', '250 J'],
      correctChoiceIndex: 0,
      explanation:
        'On applique le premier principe : $\\Delta U = W + Q = 0 + 500 = 500\\,\\mathrm{J}$.',
    },
    {
      difficulty: 'EASY',
      order: 9,
      question:
        'Un système reçoit 300 J par transfert thermique et 100 J par travail. Quelle est sa variation d’énergie interne ?',
      choices: ['400 J', '200 J', '-400 J', '300 J'],
      correctChoiceIndex: 0,
      explanation:
        'Avec la convention “reçu positif”, on a $\\Delta U = W + Q = 100 + 300 = 400\\,\\mathrm{J}$.',
    },
    {
      difficulty: 'EASY',
      order: 10,
      question:
        'Dans un bilan d’énergie, quelle grandeur permet de relier l’état énergétique initial et final du système ?',
      choices: [
        'La variation d’énergie interne',
        'La seule température extérieure',
        'La seule masse du système',
        'Le seul flux thermique sortant',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le bilan énergétique met en relation l’état initial et l’état final via la variation d’énergie interne, complétée par les échanges énergétiques.',
    },
    {
      difficulty: 'EASY',
      order: 11,
      question:
        'Quel mode de transfert thermique est dominant à travers une barre métallique chauffée à une extrémité ?',
      choices: ['La conduction', 'La convection', 'Le rayonnement uniquement', 'L’évaporation'],
      correctChoiceIndex: 0,
      explanation:
        'Dans un solide comme un métal, le transfert de proche en proche s’effectue principalement par conduction.',
    },
    {
      difficulty: 'EASY',
      order: 12,
      question:
        'La convection thermique correspond à :',
      choices: [
        'Un transfert de chaleur accompagné d’un mouvement global du fluide',
        'Un transfert impossible dans les liquides',
        'Un transfert uniquement par rayons infrarouges',
        'Un transfert sans différence de température',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La convection apparaît dans les fluides lorsque des mouvements de matière transportent de l’énergie thermique.',
    },
    {
      difficulty: 'EASY',
      order: 13,
      question:
        'Comment définir un flux thermique ?',
      choices: [
        'Comme une puissance de transfert thermique',
        'Comme une température absolue',
        'Comme une résistance électrique',
        'Comme une énergie stockée',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le flux thermique correspond au débit de transfert d’énergie thermique, donc à une puissance exprimée en watts.',
    },
    {
      difficulty: 'EASY',
      order: 14,
      question:
        'Pour un même écart de température, que provoque une grande résistance thermique ?',
      choices: [
        'Un flux thermique plus faible',
        'Un flux thermique plus grand',
        'Aucun effet sur le transfert thermique',
        'Une température négative',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une forte résistance thermique freine les échanges ; à écart de température fixé, le flux thermique diminue.',
    },
    {
      difficulty: 'EASY',
      order: 15,
      question:
        'Un système placé dans un environnement à température constante voit sa température évoluer au cours du temps. Vers quelle valeur tend-elle ?',
      choices: [
        'Vers la température de l’environnement',
        'Vers 0 K dans tous les cas',
        'Vers une température infinie',
        'Elle oscille sans jamais se stabiliser',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Lors d’un échange thermique avec un milieu thermostat, la température du système tend vers celle du milieu extérieur.',
    },
    {
      difficulty: 'EASY',
      order: 16,
      question:
        'Quel mode de transfert thermique peut se propager dans le vide ?',
      choices: ['Le rayonnement', 'La conduction', 'La convection', 'Aucun des trois'],
      correctChoiceIndex: 0,
      explanation:
        'Le rayonnement ne nécessite pas de milieu matériel, contrairement à la conduction et à la convection.',
    },
    {
      difficulty: 'EASY',
      order: 17,
      question:
        'Lorsqu’un corps se réchauffe, que peut-on dire en général de sa puissance rayonnée ?',
      choices: [
        'Elle augmente',
        'Elle diminue forcément',
        'Elle reste constante',
        'Elle devient nulle',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Un corps plus chaud rayonne davantage d’énergie par unité de temps qu’un corps plus froid.',
    },
    {
      difficulty: 'EASY',
      order: 18,
      question:
        'Dans le bilan radiatif terrestre, la Terre reçoit principalement :',
      choices: [
        'Le rayonnement solaire',
        'Uniquement le rayonnement infrarouge qu’elle émet elle-même',
        'Seulement des transferts par conduction',
        'Uniquement le rayonnement des océans',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le système Terre-atmosphère reçoit l’essentiel de son énergie du Soleil sous forme de rayonnement.',
    },
    {
      difficulty: 'EASY',
      order: 19,
      question:
        'Quel rôle joue l’atmosphère dans le bilan radiatif terrestre ?',
      choices: [
        'Elle absorbe une partie du rayonnement infrarouge terrestre et en réémet',
        'Elle bloque totalement le rayonnement solaire',
        'Elle supprime tout transfert thermique par rayonnement',
        'Elle n’interagit avec aucun rayonnement',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L’atmosphère absorbe une partie du rayonnement infrarouge émis par la surface terrestre puis en réémet, ce qui intervient dans l’effet de serre.',
    },
    {
      difficulty: 'EASY',
      order: 20,
      question:
        'À l’équilibre radiatif, que peut-on dire des puissances radiatives reçue et émise par un système ?',
      choices: [
        'Elles se compensent',
        'La puissance reçue est toujours nulle',
        'La puissance émise est toujours nulle',
        'La puissance reçue est toujours double de la puissance émise',
      ],
      correctChoiceIndex: 0,
      explanation:
        'À l’équilibre radiatif, le bilan de puissance est nul : la puissance reçue compense la puissance émise.',
    },
    {
      difficulty: 'EASY',
      order: 21,
      question:
        'Pour chauffer une masse $m$ d’un corps de capacité thermique massique $c$ avec une variation de température $\\Delta T$, quelle relation donne l’énergie thermique transférée ?',
      choices: [
        '$Q = mc\\Delta T$',
        '$Q = \\dfrac{m\\Delta T}{c}$',
        '$Q = \\dfrac{c}{m\\Delta T}$',
        '$Q = m + c + \\Delta T$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Pour un changement de température sans changement d’état, la relation usuelle est $Q = mc\\Delta T$.',
    },
    {
      difficulty: 'EASY',
      order: 22,
      question:
        'Un système reçoit 200 J par transfert thermique et 50 J par travail. Quelle est sa variation d’énergie interne ?',
      choices: ['250 J', '150 J', '-250 J', '0 J'],
      correctChoiceIndex: 0,
      explanation:
        'Avec la convention “reçu positif”, $\\Delta U = W + Q = 50 + 200 = 250\\,\\mathrm{J}$.',
    },
    {
      difficulty: 'EASY',
      order: 23,
      question:
        'Entre le Soleil et la Terre, quel mode de transfert thermique permet l’échange d’énergie ?',
      choices: ['Le rayonnement', 'La conduction', 'La convection', 'Le contact thermique direct'],
      correctChoiceIndex: 0,
      explanation:
        'Le vide spatial empêche conduction et convection. L’énergie est transmise par rayonnement électromagnétique.',
    },
    {
      difficulty: 'EASY',
      order: 24,
      question:
        'Quel effet a en général une bonne isolation thermique sur les transferts entre un système et l’extérieur ?',
      choices: [
        'Elle les réduit',
        'Elle les amplifie forcément',
        'Elle annule uniquement le rayonnement',
        'Elle augmente la température extérieure',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une isolation plus efficace correspond à une résistance thermique plus grande et donc à des échanges thermiques plus faibles.',
    },
    {
      difficulty: 'EASY',
      order: 25,
      question:
        'Si un système se refroidit en cédant de l’énergie à un milieu extérieur plus froid, quel signe attend-on pour sa variation d’énergie interne ?',
      choices: ['Négatif', 'Positif', 'Nul dans tous les cas', 'Toujours égal à 1'],
      correctChoiceIndex: 0,
      explanation:
        'Un refroidissement traduit une perte d’énergie interne pour le système, donc une variation $\\Delta U$ négative.',
    },
    {
      difficulty: 'MEDIUM',
      order: 26,
      question:
        'À quoi sert principalement un calorimètre lors d’un bilan thermique ?',
      choices: [
        'À limiter les échanges thermiques avec l’extérieur pour exploiter un bilan d’énergie',
        'À imposer que tous les sous-systèmes restent à température constante',
        'À supprimer la capacité thermique des corps étudiés',
        'À transformer toute l’énergie thermique en travail mécanique',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Un calorimètre est conçu pour isoler au mieux le système étudié afin que le bilan d’énergie porte essentiellement sur les sous-systèmes placés à l’intérieur.',
    },
    {
      difficulty: 'MEDIUM',
      order: 27,
      question:
        'Dans cette expérience, quels sous-systèmes gagnent de l’énergie thermique lorsque l’équilibre est atteint ?',
      choices: [
        'L’eau froide et le calorimètre',
        'L’eau chaude et le calorimètre',
        'L’eau froide seulement',
        'L’eau chaude seulement',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L’eau chaude se refroidit, tandis que l’eau froide et le calorimètre initialement plus froids se réchauffent : ce sont donc eux qui gagnent de l’énergie.',
    },
    {
      difficulty: 'MEDIUM',
      order: 28,
      question:
        'Quel bilan énergétique est correct si l’on néglige les échanges avec l’extérieur ?',
      choices: [
        '$m_2c(\\theta_2-\\theta_f)=m_1c(\\theta_f-\\theta_1)+C_{cal}(\\theta_f-\\theta_1)$',
        '$m_1c(\\theta_f-\\theta_1)=m_2c(\\theta_f-\\theta_2)+C_{cal}(\\theta_2-\\theta_1)$',
        '$m_2c(\\theta_f-\\theta_2)=m_1c(\\theta_1-\\theta_f)+C_{cal}(\\theta_1-\\theta_f)$',
        '$m_1c(\\theta_2-\\theta_1)=m_2c(\\theta_f-\\theta_1)$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L’énergie perdue par l’eau chaude est égale à l’énergie gagnée par l’eau froide et par le calorimètre, tous deux initialement à $\\theta_1$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 29,
      question:
        'Quelle énergie thermique reçoit l’eau froide ?',
      choices: ['10,0 kJ environ', '2,5 kJ environ', '12,5 kJ environ', '20,0 kJ environ'],
      correctChoiceIndex: 0,
      explanation:
        'On calcule $Q_{froide}=m_1c(\\theta_f-\\theta_1)=0{,}200\\times4180\\times12\\approx1{,}00\\times10^4\\,\\mathrm{J}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 30,
      question:
        'Quelle valeur approchée obtient-on pour la capacité thermique du calorimètre ?',
      choices: ['210 J.K$^{-1}$ environ', '42 J.K$^{-1}$ environ', '500 J.K$^{-1}$ environ', '1,25 kJ.K$^{-1}$ environ'],
      correctChoiceIndex: 0,
      explanation:
        'L’eau chaude cède $0{,}100\\times4180\\times30=12540\\,\\mathrm{J}$. Le calorimètre reçoit donc $12540-10032=2508\\,\\mathrm{J}$, soit $C_{cal}=2508/12\\approx209\\,\\mathrm{J.K^{-1}}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 31,
      question:
        'Si l’on négligeait à tort la capacité thermique du calorimètre, quelle température finale prévoirait-on ?',
      choices: ['32 °C environ', '30 °C exactement', '24 °C environ', '36 °C environ'],
      correctChoiceIndex: 0,
      explanation:
        'Sans calorimètre, le bilan devient $0{,}100(60-T_f)=0{,}200(T_f-18)$, d’où $T_f\\approx32\\,^{\\circ}\\mathrm{C}$, plus élevé que la valeur observée.',
    },
    {
      difficulty: 'MEDIUM',
      order: 32,
      question:
        'Pourquoi modélise-t-on souvent le calorimètre comme un sous-système distinct dans un bilan thermique ?',
      choices: [
        'Parce qu’il peut stocker de l’énergie thermique via sa propre capacité thermique',
        'Parce qu’il impose automatiquement un système isolé parfait',
        'Parce qu’il reste toujours à la température finale dès l’instant initial',
        'Parce qu’il n’échange jamais d’énergie avec l’eau et le métal',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le calorimètre n’est pas neutre : s’il se réchauffe, il reçoit une part de l’énergie et doit apparaître explicitement dans le bilan.',
    },
    {
      difficulty: 'MEDIUM',
      order: 33,
      question:
        'Quelle équation traduit correctement le bilan énergétique entre le métal, l’eau et le calorimètre ?',
      choices: [
        '$m_mc_m(80-24)=m_{eau}c_{eau}(24-20)+C_{cal}(24-20)$',
        '$m_mc_m(24-80)=m_{eau}c_{eau}(24-20)+C_{cal}(80-24)$',
        '$m_mc_m(80-20)=m_{eau}c_{eau}(24-20)$',
        '$m_mc_m(24-20)=m_{eau}c_{eau}(80-24)+C_{cal}(24-20)$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le métal chaud cède de l’énergie. L’eau et le calorimètre initialement à 20 °C en reçoivent jusqu’à 24 °C.',
    },
    {
      difficulty: 'MEDIUM',
      order: 34,
      question:
        'Quelle valeur obtient-on pour l’énergie gagnée par l’ensemble {eau + calorimètre} ?',
      choices: ['4184 J', '3344 J', '840 J', '5600 J'],
      correctChoiceIndex: 0,
      explanation:
        'On a $Q_{recu}=0{,}200\\times4180\\times4+210\\times4=3344+840=4184\\,\\mathrm{J}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 35,
      question:
        'Quelle valeur approchée obtient-on pour la capacité thermique massique du métal ?',
      choices: [
        '500 J.kg$^{-1}$.K$^{-1}$ environ',
        '50 J.kg$^{-1}$.K$^{-1}$ environ',
        '840 J.kg$^{-1}$.K$^{-1}$ environ',
        '4,18 kJ.kg$^{-1}$.K$^{-1}$ environ',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le métal cède $m_mc_m(80-24)=0{,}150\\times c_m\\times56=4184$, d’où $c_m\\approx4184/8{,}4\\approx5,0\\times10^2\\,\\mathrm{J.kg^{-1}.K^{-1}}$.',
    },
    {
      difficulty: 'HARD',
      order: 36,
      question:
        'Si la puissance thermique cédée au milieu extérieur est modélisée par $\\Phi_{th}=h(T-T_{ext})$, quelle équation différentielle vérifie la température $T(t)$ de la boisson ?',
      choices: [
        '$C\\dfrac{dT}{dt}=-h(T-T_{ext})$',
        '$C\\dfrac{dT}{dt}=+h(T-T_{ext})$',
        '$\\dfrac{dT}{dt}=-hCT$',
        '$C\\dfrac{dT}{dt}=-h(T+T_{ext})$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le système étudié perd de l’énergie lorsque $T>T_{ext}$, d’où le signe négatif dans $C\\,dT/dt=-h(T-T_{ext})$.',
    },
    {
      difficulty: 'HARD',
      order: 37,
      question:
        'Quel changement de variable simplifie le plus directement la résolution ?',
      choices: [
        '$\\theta(t)=T(t)-T_{ext}$',
        '$\\theta(t)=T(t)+T_{ext}$',
        '$\\theta(t)=T(t)\\times T_{ext}$',
        '$\\theta(t)=\\dfrac{T(t)}{T_{ext}}$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'En posant $\\theta=T-T_{ext}$, l’équation devient $d\\theta/dt=-(h/C)\\theta$, forme exponentielle standard.',
    },
    {
      difficulty: 'HARD',
      order: 38,
      question:
        'Si l’on cherche une solution sous la forme $T(t)=T_{ext}+Ae^{-t/\\tau}$, quelle relation doit vérifier $\\tau$ ?',
      choices: [
        '$\\tau=\\dfrac{C}{h}$',
        '$\\tau=Ch$',
        '$\\tau=\\dfrac{h}{C}$',
        '$\\tau=C+h$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'En substituant dans l’équation différentielle, on obtient $1/\\tau=h/C$, donc $\\tau=C/h$.',
    },
    {
      difficulty: 'HARD',
      order: 39,
      question:
        'Si la boisson est initialement à la température $T_0$, quelle constante d’intégration obtient-on ?',
      choices: [
        '$A=T_0-T_{ext}$',
        '$A=T_{ext}-T_0$',
        '$A=T_0$',
        '$A=T_{ext}$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'En évaluant la solution à $t=0$, on a $T_0=T_{ext}+A$, donc $A=T_0-T_{ext}$.',
    },
    {
      difficulty: 'HARD',
      order: 40,
      question:
        'Quelle température limite prévoit ce modèle lorsque $t$ devient très grand ?',
      choices: [
        '$T_{ext}$',
        '$T_0$',
        '$T_0+T_{ext}$',
        '0 K',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le terme exponentiel tend vers 0 lorsque $t$ croît, donc la température tend vers celle du milieu extérieur.',
    },
    {
      difficulty: 'HARD',
      order: 41,
      question:
        'Pour un corps chauffé par une résistance de puissance constante $P$ tout en perdant $h(T-T_{ext})$, quelle température stationnaire $T_{lim}$ vérifie le modèle ?',
      choices: [
        '$T_{lim}=T_{ext}+\\dfrac{P}{h}$',
        '$T_{lim}=T_{ext}-\\dfrac{P}{h}$',
        '$T_{lim}=\\dfrac{P}{C}$',
        '$T_{lim}=T_{ext}+Ph$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'À l’état stationnaire, $dT/dt=0$, donc $P-h(T_{lim}-T_{ext})=0$, soit $T_{lim}=T_{ext}+P/h$.',
    },
    {
      difficulty: 'HARD',
      order: 42,
      question:
        'Quelle forme prend la solution générale de l’équation homogène associée ?',
      choices: [
        '$T_h(t)=Ae^{-t/\\tau}$',
        '$T_h(t)=At+B$',
        '$T_h(t)=A\\cos(\\omega t)$',
        '$T_h(t)=A e^{t\\tau}$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L’équation homogène est du premier ordre à coefficient constant, sa solution est exponentielle décroissante.',
    },
    {
      difficulty: 'HARD',
      order: 43,
      question:
        'Si $T(0)=T_{ext}$, quelle solution complète est correcte ?',
      choices: [
        '$T(t)=T_{ext}+\\dfrac{P}{h}\\left(1-e^{-t/\\tau}\\right)$',
        '$T(t)=T_{ext}+\\dfrac{P}{h}e^{-t/\\tau}$',
        '$T(t)=T_{ext}-\\dfrac{P}{h}\\left(1-e^{-t/\\tau}\\right)$',
        '$T(t)=T_{ext}+Pt$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La solution tend vers $T_{ext}+P/h$ et vérifie bien la condition initiale $T(0)=T_{ext}$.',
    },
    {
      difficulty: 'HARD',
      order: 44,
      question:
        'Quelle dérivée de la solution précédente doit-on obtenir ?',
      choices: [
        '$\\dfrac{dT}{dt}=\\dfrac{P}{C}e^{-t/\\tau}$',
        '$\\dfrac{dT}{dt}=\\dfrac{P}{h}e^{-t/\\tau}$',
        '$\\dfrac{dT}{dt}=\\dfrac{P}{C}(1-e^{-t/\\tau})$',
        '$\\dfrac{dT}{dt}=\\tau P e^{-t/\\tau}$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'On dérive $T(t)=T_{ext}+(P/h)(1-e^{-t/\\tau})$ et on utilise $1/\\tau=h/C$, d’où $dT/dt=(P/C)e^{-t/\\tau}$.',
    },
    {
      difficulty: 'HARD',
      order: 45,
      question:
        'Quelle interprétation correcte donne la constante de temps $\\tau$ ?',
      choices: [
        'À $t=\\tau$, l’écart à la température limite a été réduit d’un facteur $e$',
        'À $t=\\tau$, la température atteint exactement sa valeur limite',
        'À $t=\\tau$, la dérivée devient nulle pour toujours',
        'À $t=\\tau$, la température vaut toujours le double de $T_{ext}$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le terme exponentiel vaut $e^{-1}$ à $t=\\tau$ : l’écart à la valeur limite ne disparaît pas, mais il est divisé par $e$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 46,
      question:
        'Pour comparer rapidement des matériaux isolants à épaisseur égale, quel critère est le plus pertinent ?',
      choices: [
        'Choisir le matériau de plus faible conductivité thermique $\\lambda$',
        'Choisir le matériau de plus grande masse volumique uniquement',
        'Choisir le matériau qui laisse passer le plus grand flux thermique',
        'Choisir le matériau ayant la température la plus élevée au départ',
      ],
      correctChoiceIndex: 0,
      explanation:
        'À épaisseur et surface fixées, un matériau de plus faible conductivité thermique laisse passer moins d’énergie par conduction : il isole donc mieux.',
    },
    {
      difficulty: 'MEDIUM',
      order: 47,
      question:
        'Parmi ces trois isolants, lequel présente la meilleure performance thermique pour une même épaisseur ?',
      choices: [
        'Le polystyrène expansé',
        'La laine de verre',
        'La laine de roche',
        'Ils sont équivalents',
      ],
      correctChoiceIndex: 0,
      explanation:
        'À épaisseur égale, le meilleur isolant est celui dont la conductivité thermique est la plus faible. Ici, c’est le polystyrène expansé avec $\\lambda=0{,}030\\,\\mathrm{W.m^{-1}.K^{-1}}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 48,
      question:
        'Quelle résistance thermique $R_{th}$ possède la plaque de laine de verre considérée ?',
      choices: ['5,0 K.W$^{-1}$', '2,5 K.W$^{-1}$', '0,20 K.W$^{-1}$', '8,0 K.W$^{-1}$'],
      correctChoiceIndex: 0,
      explanation:
        'On utilise $R_{th}=\\dfrac{e}{\\lambda S}=\\dfrac{0{,}20}{0{,}040\\times1{,}0}=5{,}0\\,\\mathrm{K.W^{-1}}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 49,
      question:
        'Quel flux thermique traverse la plaque de laine de roche dans ces conditions ?',
      choices: ['3,6 W', '7,2 W', '5,6 W', '1,8 W'],
      correctChoiceIndex: 0,
      explanation:
        'En régime stationnaire, $\\phi=\\dfrac{\\lambda S \\Delta T}{e}=\\dfrac{0{,}036\\times1{,}0\\times20}{0{,}20}=3{,}6\\,\\mathrm{W}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 50,
      question:
        'Si l’on double l’épaisseur d’un même isolant sans changer la surface ni l’écart de température, comment évolue le flux thermique ?',
      choices: [
        'Il est divisé par deux',
        'Il est multiplié par deux',
        'Il reste inchangé',
        'Il est multiplié par quatre',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le flux thermique est inversement proportionnel à l’épaisseur $e$ dans $\\phi=\\lambda S\\Delta T/e$. Doubler $e$ divise donc le flux par deux.',
    },
    {
      difficulty: 'MEDIUM',
      order: 51,
      question:
        'Si l’on double au contraire la surface de la paroi isolante, que devient le flux thermique ?',
      choices: [
        'Il est multiplié par deux',
        'Il est divisé par deux',
        'Il reste inchangé',
        'Il est multiplié par quatre',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le flux thermique est proportionnel à la surface $S$ dans la relation $\\phi=\\lambda S\\Delta T/e$. À matériau et épaisseur inchangés, doubler la surface double les pertes.',
    },
    {
      difficulty: 'MEDIUM',
      order: 52,
      question:
        'Pourquoi des isolants fibreux comme la laine de verre ou la laine de roche limitent-ils bien les transferts thermiques ?',
      choices: [
        'Parce qu’ils emprisonnent de l’air peu conducteur dans leur structure',
        'Parce qu’ils empêchent tous les mouvements d’air et tout rayonnement quelles que soient les conditions',
        'Parce que leurs fibres augmentent la température intérieure sans apport d’énergie',
        'Parce que leur structure métallique stocke davantage de chaleur',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Ces matériaux doivent une grande part de leur pouvoir isolant à l’air immobile qu’ils piègent, l’air étant un mauvais conducteur thermique.',
    },
    {
      difficulty: 'MEDIUM',
      order: 53,
      question:
        'Quelle est l’unité SI correcte de la conductivité thermique $\\lambda$ ?',
      choices: [
        'W.m$^{-1}$.K$^{-1}$',
        'W.K$^{-1}$',
        'J.kg$^{-1}$.K$^{-1}$',
        'K.W$^{-1}$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La conductivité thermique s’exprime en watt par mètre et par kelvin : $\\mathrm{W.m^{-1}.K^{-1}}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 54,
      question:
        'Quelle résistance thermique minimale doit présenter l’ensemble de l’isolant pour respecter l’objectif fixé ?',
      choices: ['0,20 K.W$^{-1}$', '5,0 K.W$^{-1}$', '2,0 K.W$^{-1}$', '0,020 K.W$^{-1}$'],
      correctChoiceIndex: 0,
      explanation:
        'On cherche $R_{th}=\\dfrac{\\Delta T}{\\phi}=\\dfrac{24}{120}=0{,}20\\,\\mathrm{K.W^{-1}}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 55,
      question:
        'Quelle épaisseur minimale de laine de roche faut-il prévoir pour ce mur ?',
      choices: ['8,6 cm environ', '3,6 cm environ', '20 cm environ', '1,2 cm environ'],
      correctChoiceIndex: 0,
      explanation:
        'Avec $R_{th}=e/(\\lambda S)$, on obtient $e=R_{th}\\lambda S=0{,}20\\times0{,}036\\times12\\approx0{,}086\\,\\mathrm{m}$, soit environ $8{,}6\\,\\mathrm{cm}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 56,
      question:
        'Pourquoi un double vitrage isole-t-il généralement mieux qu’un simple vitrage ?',
      choices: [
        'Parce qu’une lame d’air ou de gaz ajoute une résistance thermique supplémentaire',
        'Parce que deux vitres suppriment totalement les transferts thermiques',
        'Parce que le verre devient un très bon isolant quand on le double',
        'Parce que le double vitrage chauffe spontanément la pièce',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le double vitrage ajoute une couche intermédiaire peu conductrice, souvent de l’air ou un gaz, ce qui augmente la résistance thermique de l’ensemble.',
    },
    {
      difficulty: 'MEDIUM',
      order: 57,
      question:
        'Quel flux thermique traverse le simple vitrage dans ces conditions ?',
      choices: ['125 W', '50 W', '80 W', '8,0 W'],
      correctChoiceIndex: 0,
      explanation:
        'On utilise $\\phi=\\Delta T/R_{th}=20/0{,}16=125\\,\\mathrm{W}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 58,
      question:
        'Quel flux thermique traverse le double vitrage dans les mêmes conditions ?',
      choices: ['50 W', '125 W', '32 W', '80 W'],
      correctChoiceIndex: 0,
      explanation:
        'Pour le double vitrage, $\\phi=\\Delta T/R_{th}=20/0{,}40=50\\,\\mathrm{W}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 59,
      question:
        'Par quel facteur les pertes thermiques sont-elles divisées en passant du simple au double vitrage ?',
      choices: ['2,5', '1,6', '4,0', '0,40'],
      correctChoiceIndex: 0,
      explanation:
        'Le rapport des flux vaut $125/50=2{,}5$. Le double vitrage divise donc ici les pertes thermiques par $2{,}5$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 60,
      question:
        'Quelle énergie traverse le double vitrage en une heure ?',
      choices: ['180 kJ', '50 kJ', '450 kJ', '72 kJ'],
      correctChoiceIndex: 0,
      explanation:
        'Avec $Q=\\phi\\Delta t$, on obtient $Q=50\\times3600=1{,}8\\times10^5\\,\\mathrm{J}=180\\,\\mathrm{kJ}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 61,
      question:
        'Quelle conclusion thermique est correcte pour cette fenêtre ?',
      choices: [
        'Le double vitrage réduit le flux et améliore le confort intérieur près de la fenêtre',
        'Le double vitrage augmente le flux mais stabilise mieux la température extérieure',
        'Le simple vitrage isole mieux car il contient moins de matière',
        'Les deux vitrages sont équivalents puisque la surface est la même',
      ],
      correctChoiceIndex: 0,
      explanation:
        'À résistance thermique plus grande, le flux traversant la paroi diminue. La face intérieure de la fenêtre reste alors généralement moins froide pour l’occupant.',
    },
    {
      difficulty: 'MEDIUM',
      order: 62,
      question:
        'Quel est l’intérêt principal d’une couche à faible émissivité déposée sur un vitrage ?',
      choices: [
        'Réduire les transferts thermiques par rayonnement entre les faces de la fenêtre',
        'Réduire la conduction thermique dans le verre lui-même',
        'Augmenter l’absorption de lumière visible pour chauffer la pièce',
        'Supprimer la lame d’air ou de gaz pour éviter la convection',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une couche à faible émissivité réfléchit une partie du rayonnement thermique infrarouge et diminue ainsi les pertes par rayonnement.',
    },
    {
      difficulty: 'MEDIUM',
      order: 63,
      question:
        'Pourquoi remplit-on parfois l’espace entre deux vitres avec de l’argon plutôt qu’avec de l’air ?',
      choices: [
        'Parce que l’argon limite davantage les transferts thermiques que l’air',
        'Parce que l’argon chauffe spontanément lorsqu’il fait froid dehors',
        'Parce que l’argon augmente fortement la transparence du verre',
        'Parce que l’argon remplace le besoin de deux vitres',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L’argon est choisi car il contribue à réduire les transferts thermiques dans la lame intermédiaire, en complément de la géométrie du vitrage.',
    },
    {
      difficulty: 'MEDIUM',
      order: 64,
      question:
        'Quelle résistance thermique minimale doit avoir le vitrage choisi pour respecter l’objectif ?',
      choices: ['0,25 K.W$^{-1}$', '4,0 K.W$^{-1}$', '0,050 K.W$^{-1}$', '0,18 K.W$^{-1}$'],
      correctChoiceIndex: 0,
      explanation:
        'On impose $R_{th}=\\Delta T/\\phi=15/60=0{,}25\\,\\mathrm{K.W^{-1}}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 65,
      question:
        'Quel vitrage est le choix le plus pertinent parmi les trois proposés ?',
      choices: [
        'Le double vitrage à faible émissivité',
        'Le simple vitrage',
        'Aucun des trois vitrages proposés',
        'Le triple vitrage est le seul à satisfaire la contrainte',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le seuil minimal est $0{,}25\\,\\mathrm{K.W^{-1}}$. Le simple vitrage à $0{,}12$ ne convient pas, tandis que le double vitrage à faible émissivité à $0{,}30$ satisfait déjà l’objectif.',
    },
    {
      difficulty: 'MEDIUM',
      order: 66,
      question:
        'Dans une pièce à $19\\,^{\\circ}\\mathrm{C}$, pourquoi un carrelage semble-t-il plus froid sous les pieds nus qu’un parquet placé depuis longtemps dans la même pièce ?',
      choices: [
        'Parce que le carrelage conduit plus rapidement l’énergie thermique du pied vers le sol',
        'Parce que le carrelage est nécessairement à une température plus basse que l’air de la pièce',
        'Parce que le parquet produit lui-même de la chaleur au contact',
        'Parce que seul le carrelage échange de l’énergie avec le corps humain',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Les deux matériaux peuvent être à la même température d’équilibre dans la pièce. La sensation de froid vient du fait que le carrelage, plus conducteur, prélève plus vite de l’énergie thermique au pied que le parquet.',
    },
    {
      difficulty: 'MEDIUM',
      order: 67,
      question:
        'En hiver, la présence répétée de buée sur la face intérieure d’une fenêtre traduit le plus souvent :',
      choices: [
        'Une surface intérieure trop froide au contact d’un air intérieur humide',
        'Une surface intérieure trop chaude qui fait évaporer l’eau sur la vitre',
        'Une humidité intérieure trop faible pour rester sous forme de vapeur',
        'Une absence d’échange thermique entre l’air intérieur et la vitre',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La buée apparaît lorsque l’air humide au voisinage de la vitre se refroidit suffisamment pour que de l’eau se condense sur la surface intérieure.',
    },
    {
      difficulty: 'MEDIUM',
      order: 68,
      question:
        'Pourquoi l’angle du mur est-il plus touché que le reste de la paroi ?',
      choices: [
        'Parce qu’il constitue un pont thermique avec une résistance locale plus faible',
        'Parce qu’il reçoit forcément plus d’énergie thermique de la pièce',
        'Parce qu’un angle ne peut pas échanger d’énergie avec l’extérieur',
        'Parce que l’air y est toujours plus sec qu’ailleurs',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Un pont thermique est une zone où la résistance thermique est localement plus faible. La surface intérieure y devient plus froide, ce qui favorise humidité et condensation.',
    },
    {
      difficulty: 'MEDIUM',
      order: 69,
      question:
        'Quel effet direct a un pont thermique sur les transferts à travers l’enveloppe ?',
      choices: [
        'Il augmente localement le flux thermique sortant',
        'Il annule le flux thermique dans la zone concernée',
        'Il ne modifie que le rayonnement solaire reçu',
        'Il transforme la conduction en travail mécanique',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une résistance thermique locale plus faible conduit à un flux thermique plus élevé pour un même écart de température.',
    },
    {
      difficulty: 'MEDIUM',
      order: 70,
      question:
        'Pourquoi de l’eau liquide peut-elle apparaître sur une paroi intérieure froide ?',
      choices: [
        'Parce que l’air au voisinage de la paroi se refroidit et peut condenser une partie de sa vapeur d’eau',
        'Parce que le mur produit lui-même de l’eau lorsqu’il conduit la chaleur',
        'Parce que la conduction transforme directement l’air en liquide',
        'Parce qu’une paroi froide ne peut plus échanger d’énergie avec l’air',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une paroi plus froide refroidit l’air voisin. Si cet air humide atteint des conditions favorables à la condensation, de l’eau liquide apparaît à la surface.',
    },
    {
      difficulty: 'MEDIUM',
      order: 71,
      question:
        'Quelle action simple réduit le plus vite le risque de condensation dans une pièce humide, sans travaux ?',
      choices: [
        'Améliorer l’aération ou la ventilation pour évacuer une partie de l’humidité',
        'Augmenter l’humidité de l’air pour éviter son dessèchement',
        'Fermer davantage la pièce pour conserver un air plus chaud',
        'Refroidir la pièce pour diminuer les échanges avec les parois',
      ],
      correctChoiceIndex: 0,
      explanation:
        'En réduisant l’humidité de l’air intérieur, on réduit le risque que l’eau se condense sur les surfaces les plus froides.',
    },
    {
      difficulty: 'MEDIUM',
      order: 72,
      question:
        'Quelle rénovation traite le plus directement la cause thermique d’une moisissure localisée dans un angle froid ?',
      choices: [
        'Corriger le pont thermique en renforçant la continuité de l’isolation',
        'Augmenter seulement l’éclairage de la pièce',
        'Remplacer le revêtement de sol',
        'Ajouter un radiateur sans modifier la paroi',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Si l’angle est froid à cause d’un pont thermique, le traitement le plus direct consiste à relever la température de surface en corrigeant l’isolation locale.',
    },
    {
      difficulty: 'MEDIUM',
      order: 73,
      question:
        'Pourquoi un encadrement métallique mal isolé favorise-t-il la sensation de paroi froide ?',
      choices: [
        'Parce qu’il peut créer un pont thermique en conduisant efficacement l’énergie',
        'Parce qu’il bloque complètement tout transfert thermique',
        'Parce qu’un métal est toujours à une température inférieure à l’air',
        'Parce qu’il empêche l’air intérieur de circuler dans la pièce',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Un matériau plus conducteur, comme un cadre métallique mal traité, peut favoriser des pertes locales et abaisser la température de surface intérieure.',
    },
    {
      difficulty: 'MEDIUM',
      order: 74,
      question:
        'Quel effet a une meilleure ventilation dans une salle de bain souvent embuée ?',
      choices: [
        'Elle diminue l’humidité de l’air et donc le risque de condensation',
        'Elle augmente nécessairement la conduction dans les murs',
        'Elle supprime tous les ponts thermiques du bâtiment',
        'Elle remplace l’isolation du vitrage',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une meilleure ventilation évacue une partie de la vapeur d’eau produite dans la pièce, ce qui diminue la probabilité de condensation sur les surfaces froides.',
    },
    {
      difficulty: 'MEDIUM',
      order: 75,
      question:
        'Quelle option réduit le plus le risque de condensation au bord de la fenêtre ?',
      choices: [
        'Le dormant avec rupture de pont thermique et tableau mieux isolé',
        'Le dormant métallique sans rupture de pont thermique',
        'Les deux options se valent strictement',
        'Aucune, car la condensation ne dépend pas de la température de surface',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une meilleure isolation locale maintient une température de surface intérieure plus élevée, ce qui réduit le risque de condensation au voisinage de la fenêtre.',
    },
    {
      difficulty: 'MEDIUM',
      order: 76,
      question:
        'Pourquoi cette option est-elle plus efficace ?',
      choices: [
        'Parce qu’elle augmente la résistance thermique locale et limite le refroidissement de surface',
        'Parce qu’elle augmente l’humidité de l’air intérieur',
        'Parce qu’elle rend inutile toute ventilation',
        'Parce qu’elle force le flux thermique à traverser davantage de vitrage',
      ],
      correctChoiceIndex: 0,
      explanation:
        'En limitant le pont thermique, on réduit les pertes locales et on garde une surface intérieure moins froide, donc moins sujette à la condensation.',
    },
    {
      difficulty: 'EASY',
      order: 77,
      question:
        'La conduction thermique correspond à :',
      choices: [
        'Un transfert de proche en proche, sans déplacement macroscopique de matière',
        'Un transfert réservé aux gaz uniquement',
        'Un transfert qui nécessite toujours de la lumière visible',
        'Un transfert impossible dans les solides',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La conduction transfère l’énergie thermique de proche en proche. Elle ne s’accompagne pas d’un mouvement d’ensemble de la matière.',
    },
    {
      difficulty: 'EASY',
      order: 78,
      question:
        'La convection thermique se produit lorsqu’il y a :',
      choices: [
        'Un déplacement global d’un fluide qui transporte de l’énergie thermique',
        'Un transfert uniquement dans le vide',
        'Un échange qui ne dépend jamais de la température',
        'Un passage direct de courant électrique',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La convection met en jeu un fluide, liquide ou gaz, dont le mouvement transporte l’énergie thermique.',
    },
    {
      difficulty: 'EASY',
      order: 79,
      question:
        'Le rayonnement thermique a pour particularité de pouvoir se propager :',
      choices: [
        'Dans le vide',
        'Dans l’air',
        'À travers certains matériaux transparents au rayonnement',
        'Toutes ces réponses',
      ],
      correctChoiceIndex: 3,
      explanation:
        'Le rayonnement thermique peut se propager dans le vide, dans l’air et à travers certains matériaux transparents au rayonnement. C’est ce qui le distingue de la conduction et de la convection, qui nécessitent un milieu matériel.',
    },
    {
      difficulty: 'EASY',
      order: 80,
      question:
        'Lorsqu’une cuillère métallique trempe dans une boisson chaude et que son manche devient chaud, le transfert dominant dans la cuillère est :',
      choices: ['La conduction', 'La convection', 'Le rayonnement uniquement', 'L’évaporation'],
      correctChoiceIndex: 0,
      explanation:
        'Dans un solide métallique, l’énergie thermique se transmet principalement par conduction le long de l’objet.',
    },
    {
      difficulty: 'EASY',
      order: 81,
      question:
        'Un sèche-cheveux réchauffe surtout les cheveux grâce à :',
      choices: [
        'Un courant d’air chaud en mouvement : c’est principalement de la convection forcée',
        'Un transfert uniquement par conduction dans le plastique',
        'Un rayonnement thermique seul',
        'Une absence de tout transfert thermique',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le sèche-cheveux met en mouvement de l’air chauffé. L’énergie est donc surtout transportée par convection forcée.',
    },
    {
      difficulty: 'EASY',
      order: 82,
      question:
        'Au-dessus d’un radiateur, l’air chaud a tendance à monter. Le mode de transfert mis en avant est :',
      choices: ['La convection', 'La conduction', 'Le rayonnement uniquement', 'Aucun transfert'],
      correctChoiceIndex: 0,
      explanation:
        'L’air chauffé devient moins dense et se déplace. Ce transport d’énergie par mouvement du fluide correspond à la convection.',
    },
    {
      difficulty: 'EASY',
      order: 83,
      question:
        'Quand on ressent la chaleur du Soleil sur la peau, le mode de transfert essentiel est :',
      choices: ['Le rayonnement', 'La conduction', 'La convection', 'Le mélange mécanique'],
      correctChoiceIndex: 0,
      explanation:
        'Le Soleil transmet de l’énergie jusqu’à nous par rayonnement électromagnétique, à travers l’espace.',
    },
    {
      difficulty: 'EASY',
      order: 84,
      question:
        'Si la batterie d’un téléphone chauffe et que la coque paraît chaude dans la main, le transfert dominant entre la coque et la main est :',
      choices: ['La conduction', 'La convection', 'Le rayonnement uniquement', 'Aucune de ces réponses'],
      correctChoiceIndex: 0,
      explanation:
        'La main est en contact avec la coque. Le transfert thermique dominant entre deux solides en contact est la conduction.',
    },
    {
      difficulty: 'EASY',
      order: 85,
      question:
        'Pourquoi la convection n’est-elle pas le mode dominant à l’intérieur d’un bloc de métal immobile ?',
      choices: [
        'Parce qu’il n’y a pas de déplacement global de matière comme dans un fluide',
        'Parce que le métal n’a pas de température',
        'Parce que la convection n’existe que dans le vide',
        'Parce qu’un solide chaud ne peut pas transférer d’énergie',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La convection suppose un mouvement d’ensemble de la matière. Dans un solide immobile, ce mécanisme n’est pas dominant.',
    },
    {
      difficulty: 'EASY',
      order: 86,
      question:
        'Quel énoncé résume correctement les trois modes de transfert thermique ?',
      choices: [
        'Conduction : sans déplacement macroscopique de matière ; convection : avec déplacement d’un fluide ; rayonnement : possible même dans le vide',
        'Conduction, convection et rayonnement nécessitent tous un solide',
        'Seule la conduction permet un transfert thermique réel',
        'Le rayonnement ne peut exister qu’au contact direct entre deux objets',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Cette formulation reprend les idées essentielles du programme : conduction sans déplacement global de matière, convection dans un fluide en mouvement, rayonnement possible sans milieu matériel.',
    },
    {
      difficulty: 'EASY',
      order: 87,
      question:
        'Une bouteille d\'eau sortie du réfrigérateur est laissée sur une table et se réchauffe. Que devient l’énergie interne de la boisson ?',
      choices: [
        'Elle augmente',
        'Elle diminue',
        'Elle reste nécessairement constante',
        'Elle devient nulle',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La boisson se réchauffe : son agitation microscopique augmente et, avec elle, son énergie interne.',
    },
    {
      difficulty: 'EASY',
      order: 88,
      question:
        'Une bouillotte chaude laissée dans une chambre plus froide refroidit peu à peu. Son énergie interne :',
      choices: [
        'Diminue',
        'Augmente',
        'Reste forcément constante',
        'Devient égale à sa masse',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Quand la bouillotte se refroidit, son agitation thermique diminue. Son énergie interne diminue donc aussi.',
    },
    {
      difficulty: 'EASY',
      order: 89,
      question:
        'Quand la batterie d’un téléphone chauffe pendant l’utilisation, l’énergie interne de la batterie :',
      choices: [
        'Augmente',
        'Diminue forcément',
        'Reste toujours constante',
        'S’annule',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une batterie qui s’échauffe se trouve dans un état d’agitation thermique plus élevé : son énergie interne augmente.',
    },
    {
      difficulty: 'EASY',
      order: 90,
      question:
        'Une gourde bien fermée qui se réchauffe dans une pièce peut être assimilée à un système fermé. Pourquoi ?',
      choices: [
        'Parce qu’elle n’échange pas de matière avec l’extérieur, même si elle peut recevoir de l’énergie thermique',
        'Parce qu’elle n’échange ni matière ni énergie avec l’extérieur',
        'Parce que sa température reste forcément constante',
        'Parce que son énergie interne reste toujours nulle',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Un système fermé n’échange pas de matière avec l’extérieur, mais il peut encore échanger de l’énergie, par exemple sous forme thermique.',
    },
    {
      difficulty: 'EASY',
      order: 91,
      question:
        'Quand la température d’un même système diminue sans changement d’état, l’agitation microscopique est en général :',
      choices: [
        'Plus faible',
        'Plus forte',
        'Strictement inchangée',
        'Nulle',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une baisse de température traduit en général une agitation microscopique plus faible, donc une énergie interne plus faible.',
    },
    {
      difficulty: 'EASY',
      order: 92,
      question:
        'Si l’on veut étudier le refroidissement d’un café posé sur une table, quel système choisit-on le plus naturellement ?',
      choices: [
        'Le café contenu dans la tasse',
        'L’air de toute la pièce',
        'Le sol de la cuisine',
        'Le bâtiment entier',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le système est l’objet que l’on choisit d’étudier. Ici, le plus naturel est de prendre le café comme système.',
    },
    {
      difficulty: 'EASY',
      order: 93,
      question:
        'Un système isolé est un système qui :',
      choices: [
        'N’échange ni travail ni énergie thermique avec l’extérieur',
        'Échange seulement de la chaleur avec l’extérieur',
        'Échange seulement du travail avec l’extérieur',
        'A forcément une température constante',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Par définition, un système isolé n’échange pas d’énergie avec le milieu extérieur, ni sous forme de travail, ni sous forme thermique.',
    },
    {
      difficulty: 'EASY',
      order: 94,
      question:
        'Pourquoi un calorimètre bien fermé peut-il souvent être assimilé à un système isolé pendant une expérience courte ?',
      choices: [
        'Parce que les échanges énergétiques avec l’extérieur peuvent être négligés',
        'Parce que sa température est forcément nulle',
        'Parce qu’il n’y a plus aucune particule à l’intérieur',
        'Parce qu’il empêche tout mouvement des molécules',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Sur la durée étudiée, les échanges avec l’extérieur sont supposés négligeables. On assimile donc ici le système à un système isolé.',
    },
    {
      difficulty: 'EASY',
      order: 95,
      question:
        'Une casserole d’eau sans couvercle chauffée sur une plaque peut être assimilée à un système ouvert si l’on choisit l’eau comme système. Pourquoi ?',
      choices: [
        'Parce qu’une partie de l’eau peut quitter le système sous forme de vapeur',
        'Parce qu’elle n’échange aucune énergie avec l’extérieur',
        'Parce que sa température est imposée par la plaque',
        'Parce que la quantité de matière du système reste forcément constante',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Un système ouvert peut échanger de la matière avec l’extérieur. Ici, une partie de l’eau peut quitter le système sous forme de vapeur pendant le chauffage.',
    },
    {
      difficulty: 'EASY',
      order: 96,
      question:
        'Lorsqu’on comprime rapidement l’air dans une pompe à vélo et que le corps de pompe chauffe, l’énergie interne de l’air :',
      choices: [
        'Augmente',
        'Diminue forcément',
        'Reste nécessairement constante',
        'Devient négative',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La compression rapide peut augmenter l’énergie interne de l’air, ce qui se traduit par un échauffement.',
    },
    {
      difficulty: 'MEDIUM',
      order: 97,
      question:
        'Avec ce repère de signe, un transfert thermique $Q$ est compté positivement lorsque :',
      choices: [
        'Le système reçoit de l’énergie thermique',
        'Le système cède de l’énergie thermique',
        'La température du système augmente',
        'Le système est plus chaud que le milieu extérieur',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Dans cette analogie, un apport d’énergie au système joue le rôle d’un crédit : il est donc compté positivement.',
    },
    {
      difficulty: 'MEDIUM',
      order: 98,
      question:
        'Dans ce même repère de signe, le travail $W$ est positif lorsque :',
      choices: [
        'Le système reçoit un travail de l’extérieur',
        'Le système fournit un travail à l’extérieur',
        'Le volume du système augmente',
        'La température du système augmente',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Si l’extérieur fournit un travail au système, cette énergie est reçue par le système : elle est donc comptée positivement dans ce repère.',
    },
    {
      difficulty: 'MEDIUM',
      order: 99,
      question:
        'Un système reçoit un travail de $200\\,\\mathrm{J}$ et cède un transfert thermique de $50\\,\\mathrm{J}$. Avec ce repère de signe, quelle est sa variation d’énergie interne ?',
      choices: ['+$150\\,\\mathrm{J}$', '+$250\\,\\mathrm{J}$', '-$150\\,\\mathrm{J}$', '-$250\\,\\mathrm{J}$'],
      correctChoiceIndex: 0,
      explanation:
        'Le système est crédité de $W=+200\\,\\mathrm{J}$ par le travail reçu et débité de $Q=-50\\,\\mathrm{J}$ par le transfert thermique cédé, donc $\\Delta U = W + Q = 150\\,\\mathrm{J}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 100,
      question:
        'Pourquoi le système {métal + eau + calorimètre} peut-il être assimilé à un système isolé pendant l’expérience ?',
      choices: [
        'Parce que les échanges avec l’air extérieur sont négligeables pendant la durée étudiée',
        'Parce que l’énergie perdue par le métal compense exactement celle gagnée à l’intérieur du système',
        'Parce que le calorimètre impose immédiatement une température commune aux trois corps',
        'Parce que le calorimètre supprime tout transfert thermique entre le métal et l’eau',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le calorimètre est conçu pour limiter fortement les échanges avec l’extérieur. On peut donc souvent assimiler le système global à un système isolé sur la durée étudiée.',
    },
    {
      difficulty: 'MEDIUM',
      order: 101,
      question:
        'Pour le système global assimilé à un système isolé {métal + eau + calorimètre}, quelle relation est correcte ?',
      choices: [
        '$\\Delta U_{metal} + \\Delta U_{eau} + \\Delta U_{cal} = 0$',
        '$\\Delta U_{metal} = \\Delta U_{eau}$',
        '$\\Delta U_{metal} + \\Delta U_{eau} = \\Delta U_{cal}$',
        '$\\Delta U_{cal} = 0$ dans tous les cas',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Si le système global est assimilé à un système isolé, la somme des variations d’énergie interne de ses sous-systèmes est nulle.',
    },
    {
      difficulty: 'MEDIUM',
      order: 102,
      question:
        'Le bloc métallique chaud se refroidit dans le calorimètre. Le signe de $\\Delta U_{metal}$ est donc :',
      choices: ['Négatif', 'Positif', 'Nul', 'Impossible à déterminer'],
      correctChoiceIndex: 0,
      explanation:
        'Le métal perd de l’énergie interne en se refroidissant. Sa variation d’énergie interne est négative.',
    },
    {
      difficulty: 'MEDIUM',
      order: 103,
      question:
        'L’eau et le calorimètre se réchauffent au contact du métal. Pour l’ensemble {eau + calorimètre}, la variation d’énergie interne est :',
      choices: ['Positive', 'Négative', 'Nulle', 'Toujours égale à celle du métal'],
      correctChoiceIndex: 0,
      explanation:
        'Comme l’eau et le calorimètre se réchauffent, leur énergie interne augmente : leur variation d’énergie interne est positive.',
    },
    {
      difficulty: 'MEDIUM',
      order: 104,
      question:
        'Si l’on veut décrire l’échauffement lors d’une compression rapide dans une pompe à vélo, quel système choisit-on le plus naturellement ?',
      choices: [
        'L’air contenu dans la pompe',
        'L’ensemble {air + corps de pompe}',
        'Le corps de pompe seul',
        'Le système {air + extérieur}',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le système est l’objet étudié. Ici, pour relier compression et échauffement, on choisit naturellement l’air enfermé dans la pompe.',
    },
    {
      difficulty: 'MEDIUM',
      order: 105,
      question:
        'Pourquoi l’air comprimé très rapidement dans une pompe à vélo peut-il être assimilé à un système isolé pendant la compression ?',
      choices: [
        'Parce que la durée est si courte que les échanges thermiques avec l’extérieur sont négligeables',
        'Parce que la compression impose automatiquement $Q=0$ quelle que soit sa durée',
        'Parce que la pression élevée empêche tout échange thermique',
        'Parce que le travail reçu compense toujours exactement tout transfert thermique',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Sur une durée très courte, on peut négliger le transfert thermique avec l’extérieur et assimiler le système à un système isolé.',
    },
    {
      difficulty: 'MEDIUM',
      order: 106,
      question:
        'En reprenant l’analogie bancaire où l’énergie reçue par le système est comptée positivement, lors de cette compression rapide, le travail reçu par l’air est :',
      choices: [
        'Positif',
        'Négatif car l’air se comprime',
        'Nul puisque le système est assimilé à isolé',
        'Toujours égal au transfert thermique échangé',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La compression correspond à un travail reçu par le système. Dans ce repère de signe, ce travail est donc positif.',
    },
    {
      difficulty: 'HARD',
      order: 117,
      question:
        'Pour étudier l’évolution de la température d’un café fraîchement servi, quel système choisit-on le plus naturellement ?',
      choices: [
        'La boisson seule',
        'L’ensemble {boisson + mug}',
        'Le mug seul',
        'L’ensemble {boisson + air ambiant}',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le système est l’objet dont on veut suivre l’évolution thermique. Ici, pour relier refroidissement et variation d’énergie interne, le choix naturel est la boisson.',
    },
    {
      difficulty: 'HARD',
      order: 118,
      question:
        'Au début du refroidissement, la boisson cède de l’énergie thermique au mug et à l’air ambiant, sans travail macroscopique notable. Le signe de $Q$ pour la boisson est alors :',
      choices: [
        'Négatif',
        'Positif car la boisson est chaude',
        'Nul puisqu’aucun travail n’est reçu',
        'Impossible à déterminer sans connaître la masse du café',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La boisson cède de l’énergie à l’extérieur : le transfert thermique reçu par le système est donc négatif.',
    },
    {
      difficulty: 'HARD',
      order: 119,
      question:
        'Le mug, initialement plus froid que la boisson, se réchauffe au contact du café. Pour le système {mug}, le signe de $\\Delta U$ est :',
      choices: ['Positif', 'Négatif', 'Nul', 'Toujours opposé à $Q$'],
      correctChoiceIndex: 0,
      explanation:
        'Comme le mug se réchauffe, son énergie interne augmente : sa variation d’énergie interne est positive.',
    },
    {
      difficulty: 'HARD',
      order: 120,
      question:
        'Si l’on choisit comme système global {boisson + mug}, quel échange ne figure plus explicitement dans le bilan énergétique ?',
      choices: [
        'Le transfert thermique entre la boisson et le mug',
        'Le transfert thermique entre le système global et l’air ambiant',
        'Le transfert thermique entre le système global et la table',
        'Le transfert radiatif entre le système global et les parois de la pièce',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Un échange interne au système global n’apparaît plus comme transfert avec l’extérieur. Le transfert boisson-mug est donc interne à {boisson + mug}.',
    },
    {
      difficulty: 'HARD',
      order: 121,
      question:
        'Lorsque la boisson, le mug et l’air ambiant ont atteint la même température, quelle affirmation est correcte ?',
      choices: [
        'Les échanges thermiques nets cessent et la température n’évolue plus',
        'La boisson continue forcément à céder de l’énergie thermique au mug',
        'Le mug continue forcément à se réchauffer',
        'Le système est alors forcément isolé',
      ],
      correctChoiceIndex: 0,
      explanation:
        'À l’équilibre thermique, il n’y a plus d’évolution macroscopique de température et les transferts thermiques nets s’annulent.',
    },
    {
      difficulty: 'HARD',
      order: 122,
      question:
        'Sur un cycle complet de pompe à chaleur, si l’on étudie le fluide frigorigène comme système, quelle grandeur a nécessairement une variation nulle ?',
      choices: ['$\\Delta U$', '$Q$', '$W$', 'La température à tout instant'],
      correctChoiceIndex: 0,
      explanation:
        'Sur un cycle complet, l’état final du fluide est identique à l’état initial. Comme l’énergie interne est une fonction d’état, sa variation est nulle.',
    },
    {
      difficulty: 'HARD',
      order: 123,
      question:
        'Dans le compresseur d’une pompe à chaleur, quel échange d’énergie le fluide frigorigène reçoit-il ?',
      choices: [
        'Un travail',
        'Un transfert thermique positif puisque sa température augmente',
        'Un travail négatif car une compression est toujours comptée négativement',
        'Aucun échange car le compresseur fait partie de l’appareil',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le compresseur fournit de l’énergie au fluide sous forme de travail mécanique.',
    },
    {
      difficulty: 'HARD',
      order: 124,
      question:
        'Dans l’évaporateur, le fluide frigorigène prélève de l’énergie thermique au milieu extérieur. Avec la convention “reçu positif”, le signe de ce transfert thermique est :',
      choices: ['Positif', 'Négatif', 'Nul', 'Toujours opposé à $W$'],
      correctChoiceIndex: 0,
      explanation:
        'Puisque le fluide reçoit de l’énergie thermique du milieu extérieur, ce transfert thermique est positif.',
    },
    {
      difficulty: 'HARD',
      order: 125,
      question:
        'Dans le condenseur, le fluide frigorigène cède de l’énergie thermique au logement. Avec la convention “reçu positif”, le signe de ce transfert thermique pour le fluide est :',
      choices: ['Négatif', 'Positif', 'Nul', 'Toujours égal à $W$'],
      correctChoiceIndex: 0,
      explanation:
        'Le fluide cède de l’énergie au logement : le transfert thermique reçu par le système est donc négatif.',
    },
    {
      difficulty: 'HARD',
      order: 126,
      question:
        'Quelle relation traduit correctement le bilan énergétique du fluide frigorigène sur un cycle complet ?',
      choices: [
        '$W + Q_{evap} + Q_{cond} = 0$',
        '$W = Q_{evap} + Q_{cond}$',
        '$Q_{cond} = -Q_{evap}$',
        '$W + Q_{evap} = Q_{cond}$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Sur un cycle complet, $\\Delta U=0$ pour le fluide. Le premier principe donne donc $0 = W + Q_{evap} + Q_{cond}$.',
    },
    {
      difficulty: 'HARD',
      order: 127,
      question:
        'Sur un cycle complet de réfrigérateur, si l’on étudie le fluide frigorigène comme système, quelle affirmation est correcte ?',
      choices: [
        '$\\Delta U = 0$',
        '$Q_{evap}+Q_{cond}=0$',
        '$W+Q_{evap}=0$',
        'La température du fluide reste constante à tout instant',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Sur un cycle complet, l’état final du fluide est identique à l’état initial. L’énergie interne étant une fonction d’état, sa variation est nulle.',
    },
    {
      difficulty: 'HARD',
      order: 128,
      question:
        'Dans l’évaporateur d’un réfrigérateur, le fluide prélève de l’énergie thermique à l’air intérieur. Avec la convention “reçu positif”, le signe de ce transfert thermique pour le fluide est :',
      choices: [
        'Positif',
        'Négatif car l’air intérieur cède de l’énergie thermique',
        'Nul puisque le fluide repasse par son état initial à la fin du cycle',
        'Impossible à déterminer sans connaître la puissance du compresseur',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le fluide reçoit de l’énergie thermique depuis l’air intérieur du réfrigérateur : ce transfert thermique est donc positif pour le système.',
    },
    {
      difficulty: 'HARD',
      order: 129,
      question:
        'Dans le condenseur, le fluide frigorigène cède de l’énergie thermique à l’air de la cuisine. Pour le fluide, ce transfert thermique est :',
      choices: [
        'Négatif',
        'Positif car le fluide sort chaud du compresseur',
        'Nul si le fonctionnement est stationnaire',
        'Égal à $Q_{evap}$ puisque le cycle se répète',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le fluide cède de l’énergie thermique au milieu extérieur au système étudié : le transfert thermique reçu par le fluide est donc négatif.',
    },
    {
      difficulty: 'HARD',
      order: 130,
      question:
        'L’action du compresseur sur le fluide frigorigène correspond, pour le système étudié, à :',
      choices: [
        'Un travail positif',
        'Un transfert thermique positif puisque le fluide se réchauffe',
        'Un travail négatif car le compresseur consomme de l’énergie électrique',
        'Aucun échange d’énergie car seule la pression du fluide change',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le compresseur fournit de l’énergie au fluide par action mécanique : c’est un travail reçu par le système, donc positif dans cette convention.',
    },
    {
      difficulty: 'HARD',
      order: 131,
      question:
        'Quelle conclusion correcte tire-t-on du bilan du fluide frigorigène sur un cycle complet ?',
      choices: [
        'La valeur absolue de l’énergie thermique cédée à la cuisine est supérieure à celle prélevée dans le réfrigérateur',
        'La valeur absolue de l’énergie thermique cédée à la cuisine est égale à celle prélevée dans le réfrigérateur',
        'Le compresseur ne fournit finalement aucune énergie au fluide sur un cycle',
        'Le fluide reçoit de l’énergie thermique à la fois dans l’évaporateur et dans le condenseur',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Sur un cycle, $0=W+Q_{evap}+Q_{cond}$ avec $W>0$, $Q_{evap}>0$ et $Q_{cond}<0$. On en déduit $|Q_{cond}|=W+Q_{evap}$, donc $|Q_{cond}|>|Q_{evap}|$.',
    },
    {
      difficulty: 'HARD',
      order: 132,
      question:
        'Pour le système {eau seule} chauffé dans une bouilloire, quelle expression représente l’énergie utile gagnée par l’eau ?',
      choices: [
        '$\\Delta U = m c (\\theta_f - \\theta_i)$',
        '$E_{elec}=P\\,\\Delta t$',
        '$\\eta=\\dfrac{m c (\\theta_f - \\theta_i)}{P\\,\\Delta t}$',
        '$P=\\dfrac{m c (\\theta_f - \\theta_i)}{\\Delta t}$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Pour l’eau seule, l’énergie utile correspond à l’augmentation de son énergie interne. En l’absence de changement d’état, on l’estime par $\\Delta U = m c (\\theta_f - \\theta_i)$.',
    },
    {
      difficulty: 'HARD',
      order: 133,
      question:
        'La puissance électrique d’une bouilloire se définit le plus correctement comme :',
      choices: [
        'Une énergie transférée par unité de temps',
        'Une énergie totale transférée pendant tout le chauffage',
        'Une énergie transférée en une seconde',
        'Une capacité à élever plus vite la température',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La puissance mesure la rapidité d’un transfert d’énergie : c’est une énergie transférée par unité de temps.',
    },
    {
      difficulty: 'HARD',
      order: 134,
      question:
        'Quelle relation permet de calculer l’énergie électrique reçue par une bouilloire de puissance constante $P$ pendant une durée $\\Delta t$ ?',
      choices: [
        '$E = P\\,\\Delta t$',
        '$E = \\dfrac{P}{\\Delta t}$',
        '$E = \\eta P\\,\\Delta t$',
        '$E = m c \\, \\Delta T$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Pour une puissance constante, l’énergie reçue pendant une durée $\\Delta t$ vaut le produit de la puissance par la durée : $E=P\\Delta t$.',
    },
    {
      difficulty: 'HARD',
      order: 135,
      question:
        'Une bouilloire de puissance $P=2{,}2\\,\\mathrm{kW}$ fonctionne pendant $180\\,\\mathrm{s}$. Quelle énergie électrique reçoit-elle ?',
      choices: [
        '$3{,}96\\times10^5\\,\\mathrm{J}$',
        '$3{,}96\\times10^2\\,\\mathrm{J}$',
        '$2{,}93\\times10^5\\,\\mathrm{J}$',
        '$6{,}6\\times10^3\\,\\mathrm{J}$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'On convertit d’abord $2{,}2\\,\\mathrm{kW}$ en $2200\\,\\mathrm{W}$, puis on applique $E=P\\Delta t = 2200\\times180 = 3{,}96\\times10^5\\,\\mathrm{J}$.',
    },
    {
      difficulty: 'HARD',
      order: 136,
      question:
        'Une bouilloire chauffe $1{,}0\\,\\mathrm{kg}$ d’eau de $20\\,^{\\circ}\\mathrm{C}$ à $90\\,^{\\circ}\\mathrm{C}$ en $180\\,\\mathrm{s}$ avec une puissance électrique constante de $2{,}2\\,\\mathrm{kW}$. On prend $c_{eau}=4{,}18\\times10^3\\,\\mathrm{J.kg^{-1}.K^{-1}}$. Quel rendement approché obtient-on ?',
      choices: ['0,74 environ', '1,35 environ', '0,95 environ', '0,57 environ'],
      correctChoiceIndex: 0,
      explanation:
        'L’énergie utile gagnée par l’eau vaut $m c \\Delta T = 1{,}0\\times4{,}18\\times10^3\\times70 \\approx 2{,}93\\times10^5\\,\\mathrm{J}$. L’énergie électrique reçue vaut $P\\Delta t = 3{,}96\\times10^5\\,\\mathrm{J}$. Donc $\\eta \\approx 2{,}93/3{,}96 \\approx 0{,}74$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 137,
      question:
        'Une surface émet un flux surfacique radiatif modélisé par $\\varphi = \\sigma T^4$. Si sa température absolue double, le flux surfacique émis est :',
      choices: [
        'Multiplié par 2',
        'Multiplié par 4',
        'Multiplié par 16',
        'Multiplié par 8',
      ],
      correctChoiceIndex: 2,
      explanation:
        'La loi de Stefan-Boltzmann donne $\\varphi \\propto T^4$. Si $T$ est multipliée par 2, alors $\\varphi$ est multiplié par $2^4=16$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 138,
      question:
        'Une surface voit son flux surfacique radiatif doubler. Dans ce modèle, sa température absolue est alors multipliée par :',
      choices: [
        '2',
        '$\\sqrt{2}$',
        '$2^{1/4}$ environ',
        '4',
      ],
      correctChoiceIndex: 2,
      explanation:
        'Si le flux double, on a $2 = (T_f/T_i)^4$, donc $T_f/T_i = 2^{1/4}$, soit une augmentation bien plus faible qu’un facteur 2.',
    },
    {
      difficulty: 'MEDIUM',
      order: 139,
      question:
        'Pourquoi la température doit-elle être exprimée en kelvins dans la loi de Stefan-Boltzmann ?',
      choices: [
        'Parce qu’il s’agit d’une loi écrite avec la température absolue',
        'Parce que le zéro de l’échelle Celsius correspond au zéro absolu',
        'Parce que le kelvin est l’unité du flux radiatif',
        'Parce que l’albédo se mesure en kelvins',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La loi de Stefan-Boltzmann utilise la température absolue, donc une température exprimée en kelvins et non en degrés Celsius.',
    },
    {
      difficulty: 'MEDIUM',
      order: 140,
      question:
        'Quelle est l’unité SI d’un flux thermique surfacique radiatif $\\varphi$ ?',
      choices: [
        '$\\mathrm{W}$',
        '$\\mathrm{W.m^{-1}.K^{-1}}$',
        '$\\mathrm{W.m^{-2}}$',
        '$\\mathrm{J.K^{-1}}$',
      ],
      correctChoiceIndex: 2,
      explanation:
        'Un flux surfacique est une puissance par unité de surface. Son unité est donc le watt par mètre carré.',
    },
    {
      difficulty: 'MEDIUM',
      order: 141,
      question:
        'Si la température absolue d’une surface augmente de 10 %, le flux surfacique rayonné augmente d’environ :',
      choices: [
        '10 %',
        '21 %',
        '46 %',
        '33 %',
      ],
      correctChoiceIndex: 2,
      explanation:
        'Avec $\\varphi \\propto T^4$, une hausse de 10 % de $T$ donne un facteur $1{,}1^4 \\approx 1{,}46$. Le flux augmente donc d’environ 46 %.',
    },
    {
      difficulty: 'MEDIUM',
      order: 142,
      question:
        'Si l’albédo $\\alpha$ du système Terre-atmosphère vaut 0,30, quelle fraction du flux solaire moyen reçu est absorbée par le système ?',
      choices: [
        '0,30',
        '0,70',
        '0,50',
        'Cela dépend uniquement de la température du système',
      ],
      correctChoiceIndex: 1,
      explanation:
        'La fraction absorbée vaut $1-\\alpha$. Avec $\\alpha=0{,}30$, on obtient $1-0{,}30=0{,}70$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 143,
      question:
        'À l’équilibre radiatif global du système Terre-atmosphère, quelle relation est correcte dans ce modèle simplifié ?',
      choices: [
        '$\\varphi_{th}=\\alpha\\varphi_S$',
        '$\\varphi_{th}=(1-\\alpha)\\varphi_S$',
        '$\\varphi_{th}=\\varphi_S$',
        '$\\varphi_{th}=(1+\\alpha)\\varphi_S$',
      ],
      correctChoiceIndex: 1,
      explanation:
        'À l’équilibre radiatif, le flux thermique émis compense le flux solaire absorbé, soit $\\varphi_{th}=(1-\\alpha)\\varphi_S$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 144,
      question:
        'Si l’albédo augmente alors que $\\varphi_S$ reste constant, le flux solaire absorbé par le système Terre-atmosphère :',
      choices: [
        'Diminue',
        'Augmente',
        'Reste inchangé',
        'Vaut $\\alpha\\varphi_S$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le flux absorbé vaut $(1-\\alpha)\\varphi_S$. Si $\\alpha$ augmente, la part réfléchie augmente et la part absorbée diminue.',
    },
    {
      difficulty: 'MEDIUM',
      order: 145,
      question:
        'Si le flux solaire absorbé augmente de 10 % et que le système retrouve un nouvel équilibre radiatif, le flux thermique émis doit :',
      choices: [
        'Augmenter de 10 %',
        'Augmenter d’environ 2,4 %',
        'Rester inchangé',
        'Doubler',
      ],
      correctChoiceIndex: 0,
      explanation:
        'À l’équilibre radiatif global, le flux émis doit compenser le flux absorbé. Si l’un augmente de 10 %, l’autre doit aussi augmenter de 10 %.',
    },
    {
      difficulty: 'MEDIUM',
      order: 146,
      question:
        'Dans ce modèle, si le flux thermique émis à l’équilibre augmente de 10 %, la température radiative moyenne du système doit augmenter d’environ :',
      choices: [
        '10 %',
        '2,4 %',
        '5 %',
        '46 %',
      ],
      correctChoiceIndex: 1,
      explanation:
        'Comme $\\varphi_{th}=kT^4$, on a $T_f/T_i=(1{,}10)^{1/4} \\approx 1{,}024$. La température augmente donc d’environ 2,4 %.',
    },
    {
      difficulty: 'HARD',
      order: 147,
      question:
        'Dans ce modèle radiatif, quelle fraction du flux thermique $\\varphi_T$ émis par la surface traverse directement l’atmosphère et s’échappe vers l’espace ?',
      choices: [
        '$(1-p)\\varphi_T$',
        '$p\\varphi_T$',
        '$\\dfrac{p\\varphi_T}{2}$',
        '$(1-A)\\varphi_S$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L’atmosphère absorbe une fraction $p$ du rayonnement thermique émis par la surface. La fraction restante, soit $(1-p)\\varphi_T$, traverse donc directement l’atmosphère vers l’espace.',
    },
    {
      difficulty: 'HARD',
      order: 148,
      question:
        'Si l’atmosphère absorbe le flux $p\\varphi_T$ puis le réémet pour moitié vers la surface et pour moitié vers l’espace, quel flux thermique renvoie-t-elle vers la surface ?',
      choices: [
        '$\\dfrac{p\\varphi_T}{2}$',
        '$p\\varphi_T$',
        '$(1-p)\\varphi_T$',
        '$\\dfrac{\\varphi_T}{2}$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L’atmosphère réémet en parts égales le flux qu’elle a absorbé. Elle renvoie donc vers la surface la moitié de $p\\varphi_T$, soit $p\\varphi_T/2$.',
    },
    {
      difficulty: 'HARD',
      order: 149,
      question:
        'Quelle relation traduit le bilan radiatif de la surface terrestre dans ce modèle à l’équilibre ?',
      choices: [
        '$(1-A)\\varphi_S + \\dfrac{p\\varphi_T}{2} = \\varphi_T$',
        '$(1-A)\\varphi_S = \\varphi_T$',
        '$(1-A)\\varphi_S + p\\varphi_T = \\dfrac{\\varphi_T}{2}$',
        '$(1-A)\\varphi_S = \\dfrac{p\\varphi_T}{2}$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La surface absorbe le flux solaire $(1-A)\\varphi_S$ et le flux infrarouge descendant $p\\varphi_T/2$, puis elle émet $\\varphi_T$. À l’équilibre, le flux total reçu compense le flux total émis.',
    },
    {
      difficulty: 'HARD',
      order: 150,
      question:
        'En partant de la relation d’équilibre de la surface, quelle expression obtient-on pour le flux thermique surfacique émis par la surface ?',
      choices: [
        '$\\varphi_T = \\dfrac{2(1-A)}{2-p}\\varphi_S$',
        '$\\varphi_T = \\dfrac{1-A}{1-p}\\varphi_S$',
        '$\\varphi_T = (2-p)(1-A)\\varphi_S$',
        '$\\varphi_T = \\dfrac{2-p}{2(1-A)}\\varphi_S$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'À partir de $(1-A)\\varphi_S + p\\varphi_T/2 = \\varphi_T$, on factorise en $(1-p/2)\\varphi_T = (1-A)\\varphi_S$, soit $\\varphi_T = \\dfrac{2(1-A)}{2-p}\\varphi_S$.',
    },
    {
      difficulty: 'HARD',
      order: 151,
      question:
        'En utilisant $\\varphi_T = \\sigma T_S^4$, quelle expression obtient-on pour la température radiative moyenne de surface $T_S$ ?',
      choices: [
        '$T_S = \\left(\\dfrac{2(1-A)\\varphi_S}{(2-p)\\sigma}\\right)^{1/4}$',
        '$T_S = \\dfrac{2(1-A)\\varphi_S}{(2-p)\\sigma}$',
        '$T_S = \\left(\\dfrac{(1-A)\\varphi_S}{(2-p)\\sigma}\\right)^{1/4}$',
        '$T_S = \\left(\\dfrac{(2-p)\\sigma}{2(1-A)\\varphi_S}\\right)^{1/4}$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'On remplace $\\varphi_T$ par $\\sigma T_S^4$ dans l’expression précédente, puis on isole $T_S$ en prenant la racine quatrième.',
    },
    {
      difficulty: 'HARD',
      order: 152,
      question:
        'Si l’atmosphère n’absorbe aucun rayonnement thermique de la surface ($p=0$), quelle expression retrouve-t-on pour le flux surfacique émis par la surface à l’équilibre ?',
      choices: [
        '$\\varphi_T = (1-A)\\varphi_S$',
        '$\\varphi_T = 2(1-A)\\varphi_S$',
        '$\\varphi_T = \\dfrac{1-A}{2}\\varphi_S$',
        '$\\varphi_T = \\dfrac{\\varphi_S}{1-A}$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'En posant $p=0$ dans $\\varphi_T = \\dfrac{2(1-A)}{2-p}\\varphi_S$, on obtient bien $\\varphi_T = (1-A)\\varphi_S$, c’est-à-dire le cas sans effet de serre dans ce modèle.',
    },
    {
      difficulty: 'HARD',
      order: 153,
      question:
        'À albédo $A$ constant, que devient la température de surface $T_S$ si la fraction $p$ de rayonnement thermique absorbée par l’atmosphère augmente ?',
      choices: [
        'Elle augmente',
        'Elle diminue car l’atmosphère absorbe davantage le rayonnement émis par la surface',
        'Elle reste inchangée puisque l’albédo $A$ est constant',
        'Elle n’est modifiée que si $\\varphi_S$ varie',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Quand $p$ augmente, le dénominateur $(2-p)$ diminue. Le flux surfacique nécessaire à l’équilibre augmente donc, et avec lui la température de surface.',
    },
    {
      difficulty: 'HARD',
      order: 154,
      question:
        'À fraction atmosphérique $p$ constante, que devient le flux solaire absorbé par le système Terre-atmosphère si l’albédo $A$ diminue ?',
      choices: [
        'Il augmente',
        'Il diminue',
        'Il reste constant',
        'Il vaut $A\\varphi_S$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le flux solaire absorbé vaut $(1-A)\\varphi_S$. Si $A$ diminue, la part réfléchie diminue et la part absorbée augmente.',
    },
    {
      difficulty: 'HARD',
      order: 155,
      question:
        'On compare trois situations : référence $A=0{,}30$, $p=0{,}77$ ; glace fondue $A=0{,}25$, $p=0{,}77$ ; effet de serre renforcé $A=0{,}30$, $p=0{,}82$. Quel cas conduit au flux surfacique $\\varphi_T$ le plus élevé dans ce modèle ?',
      choices: [
        'La situation de référence',
        'Le cas glace fondue',
        'Le cas effet de serre renforcé',
        'Les cas glace fondue et effet de serre renforcé donnent exactement le même flux',
      ],
      correctChoiceIndex: 1,
      explanation:
        'On compare le facteur $\\dfrac{1-A}{2-p}$. Il vaut environ $0{,}569$ pour la référence, $0{,}610$ pour le cas glace fondue et $0{,}593$ pour le cas effet de serre renforcé. Le cas glace fondue donne donc le plus grand flux surfacique.',
    },
    {
      difficulty: 'HARD',
      order: 156,
      question:
        'Quel énoncé interprète correctement le rôle respectif de $A$ et de $p$ dans ce modèle radiatif ?',
      choices: [
        'Diminuer $A$ augmente le flux solaire absorbé, tandis qu’augmenter $p$ limite la part du rayonnement thermique qui s’échappe directement vers l’espace',
        'Diminuer $A$ réduit l’énergie solaire absorbée, tandis qu’augmenter $p$ augmente la réflexion du rayonnement solaire',
        'Diminuer $A$ et augmenter $p$ ont exactement le même effet physique',
        'Seul $p$ agit sur le bilan ; l’albédo n’influence pas l’équilibre radiatif',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L’albédo agit sur la part du flux solaire absorbé, tandis que $p$ agit sur la manière dont le rayonnement thermique de surface est absorbé puis réémis par l’atmosphère.',
    },
  ],
  sections: [
    {
      title: 'Énergie interne',
      description:
        'Définir l’énergie interne d’un système et interpréter ses variations entre deux états.',
      order: 1,
      quizzes: [
        {
          title: 'Énergie interne',
          slug: 'energie-interne',
          description:
            'Notion d’énergie interne, interprétation microscopique et variation entre deux états.',
          order: 1,
          stage: 'DISCOVER',
          questionOrders: [1, 2, 3, 4, 5, 107, 108, 109, 110, 111],
        },
        {
          title: 'Énergie interne au quotidien',
          slug: 'energie-interne-au-quotidien',
          description:
            'Variations d’énergie interne dans des situations concrètes et repères simples sur le choix d’un système ouvert ou fermé.',
          order: 2,
          stage: 'DISCOVER',
          isPublished: false,
          questionOrders: [87, 88, 89, 90, 91, 92, 93, 94, 95, 96],
        },
        {
          title: 'Système isolé et repères de signe',
          slug: 'systeme-isole-et-reperes-de-signe',
          description:
            'Choix du système, systèmes assimilés à des systèmes isolés et convention du banquier.',
          order: 3,
          stage: 'PRACTICE',
          items: [
            {
              type: 'GROUP',
              title: 'Repère de signe et analogie bancaire',
              sharedStatement:
                'Par analogie avec le fonctionnement d’un compte bancaire — où un crédit (virement reçu) augmente le solde et un débit (paiement) le diminue — on adopte ici la même logique pour fixer le signe des échanges d’énergie du système avec l’extérieur : il s’agit de la convention du banquier.',
              questionOrders: [97, 98, 99],
            },
            {
              type: 'GROUP',
              title: 'Cas d’étude - Métal chaud dans un calorimètre',
              sharedStatement:
                'On plonge un bloc métallique chaud dans de l’eau placée dans un calorimètre bien fermé. On étudie le système global {métal + eau + calorimètre} pendant la durée de l’expérience et l’on néglige les échanges avec l’air extérieur.',
              questionOrders: [100, 101, 102, 103],
            },
            {
              type: 'GROUP',
              title: 'Cas d’étude - Compression de l’air dans une pompe à vélo',
              sharedStatement:
                'On comprime rapidement l’air emprisonné dans une pompe à vélo. On étudie comme système l’air contenu dans la pompe pendant la courte durée de la compression. Le corps de pompe devient chaud.',
              questionOrders: [104, 105, 106],
            },
          ],
        },
        {
          title: 'Systèmes, signes et cycles thermiques',
          slug: 'systemes-signes-et-cycles-thermiques',
          description:
            'QCM de niveau difficile avec deux cas guidés sur le choix du système, les signes de Q, W et ΔU, et l’écriture d’un bilan d’énergie sur une transformation puis sur un cycle.',
          order: 4,
          stage: 'MASTER',
          items: [
            {
              type: 'GROUP',
              title: 'Cas d’étude - Refroidissement d’un café servi dans un mug',
              sharedStatement:
                'Un café chaud vient d’être servi dans un mug initialement à la température ambiante. La boisson se refroidit progressivement au contact du mug et de l’air de la pièce. On néglige tout travail macroscopique reçu par les systèmes étudiés et on raisonne avec la convention “énergie reçue par le système positive”.',
              questionOrders: [117, 118, 119, 120, 121],
            },
            {
              type: 'GROUP',
              title: 'Cas d’étude - Cycle d’une pompe à chaleur',
              sharedStatement:
                'Une pompe à chaleur sert à chauffer un logement en transférant de l’énergie thermique depuis une source froide extérieure vers l’intérieur. Elle contient un fluide frigorigène qui circule en boucle dans différents organes : évaporateur, compresseur, condenseur et détendeur. Dans l’évaporateur, le fluide prélève de l’énergie thermique au milieu extérieur. Le compresseur fournit ensuite un travail au fluide. Dans le condenseur, le fluide cède de l’énergie thermique au logement. Après détente, le fluide revient à son état initial et recommence un nouveau cycle. On étudie comme système le fluide frigorigène pendant un cycle complet, avec la convention “énergie reçue par le système positive”.',
              questionOrders: [122, 123, 124, 125, 126],
            },
          ],
        },
      ],
    },
    {
      title: 'Premier principe et bilans d’énergie',
      description:
        'Relier la variation d’énergie interne aux transferts thermiques et au travail.',
      order: 2,
      quizzes: [
        {
          title: 'Premier principe et bilans d’énergie',
          slug: 'premier-principe-et-bilans-d-energie',
          description:
            'Écriture du premier principe et lecture de bilans énergétiques simples.',
          order: 1,
          stage: 'DISCOVER',
          questionOrders: [6, 7, 8, 9, 10, 112, 113, 114, 115, 116],
        },
        {
          title: 'Calorimètre, capacité thermique et sous-systèmes',
          slug: 'calorimetre-capacite-thermique-et-sous-systemes',
          description:
            'QCM de niveau moyen avec questions liées sur les bilans thermiques dans un calorimètre.',
          order: 2,
          stage: 'PRACTICE',
          items: [
            {
              type: 'QUESTION',
              questionOrder: 26,
            },
            {
              type: 'GROUP',
              title: 'Cas d’étude - Mélange dans un calorimètre',
              sharedStatement:
                'On verse dans un calorimètre une masse $m_1=200\\,\\mathrm{g}$ d’eau à la température $\\theta_1=18\\,^{\\circ}\\mathrm{C}$ et une masse $m_2=100\\,\\mathrm{g}$ d’eau à la température $\\theta_2=60\\,^{\\circ}\\mathrm{C}$. Le calorimètre est initialement à $18\\,^{\\circ}\\mathrm{C}$ et la température finale mesurée est $\\theta_f=30\\,^{\\circ}\\mathrm{C}$. On prend $c_{eau}=4{,}18\\times10^3\\,\\mathrm{J.kg^{-1}.K^{-1}}$ et l’on néglige les échanges avec l’extérieur.',
              questionOrders: [27, 28, 29, 30, 31],
            },
            {
              type: 'QUESTION',
              questionOrder: 32,
            },
            {
              type: 'GROUP',
              title: 'Cas d’étude - Déterminer la capacité thermique d’un métal',
              sharedStatement:
                'On plonge un bloc métallique de masse $m_m=150\\,\\mathrm{g}$, initialement à $80\\,^{\\circ}\\mathrm{C}$, dans un calorimètre contenant $m_{eau}=200\\,\\mathrm{g}$ d’eau à $20\\,^{\\circ}\\mathrm{C}$. La capacité thermique du calorimètre vaut $C_{cal}=210\\,\\mathrm{J.K^{-1}}$ et la température finale d’équilibre vaut $24\\,^{\\circ}\\mathrm{C}$.',
              questionOrders: [33, 34, 35],
            },
          ],
        },
        {
          title: 'Cycles énergétiques, puissance et rendement',
          slug: 'cycles-energetiques-puissance-et-rendement',
          description:
            'QCM de niveau difficile avec deux cas guidés sur le bilan d’un appareil cyclique et sur le lien entre puissance, énergie et rendement lors d’un chauffage électrique.',
          order: 3,
          stage: 'MASTER',
          items: [
            {
              type: 'GROUP',
              title: 'Cas d’étude - Cycle d’un réfrigérateur domestique',
              sharedStatement:
                'Un réfrigérateur domestique fonctionne grâce à un fluide frigorigène qui circule en boucle. Dans l’évaporateur, le fluide prélève de l’énergie thermique à l’air intérieur du réfrigérateur. Le compresseur fournit ensuite un travail au fluide. Dans le condenseur, le fluide cède de l’énergie thermique à l’air de la cuisine. On étudie comme système le fluide frigorigène sur un cycle complet, avec la convention “énergie reçue par le système positive”.',
              questionOrders: [127, 128, 129, 130, 131],
            },
            {
              type: 'GROUP',
              title: 'Cas d’étude - Rendement d’une bouilloire électrique',
              sharedStatement:
                'Une bouilloire électrique de puissance constante $P=2{,}2\\,\\mathrm{kW}$ chauffe $m=1{,}0\\,\\mathrm{kg}$ d’eau de $\\theta_i=20\\,^{\\circ}\\mathrm{C}$ à $\\theta_f=90\\,^{\\circ}\\mathrm{C}$ en $\\Delta t=180\\,\\mathrm{s}$. On prend $c_{eau}=4{,}18\\times10^3\\,\\mathrm{J.kg^{-1}.K^{-1}}$. On étudie d’abord l’eau seule comme système, puis on compare l’énergie utile gagnée par l’eau à l’énergie électrique reçue par la bouilloire.',
              questionOrders: [132, 133, 134, 135, 136],
            },
          ],
        },
      ],
    },
    {
      title: 'Conduction, convection et évolution thermique',
      description:
        'Identifier les transferts thermiques dans les solides et les fluides, et interpréter leur évolution temporelle.',
      order: 3,
      quizzes: [
        {
          title: 'Conduction, convection et évolution thermique',
          slug: 'conduction-convection-et-evolution-thermique',
          description:
            'Modes de transfert, flux thermique, résistance thermique et évolution de la température.',
          order: 1,
          stage: 'DISCOVER',
          questionOrders: [11, 12, 13, 14, 15],
        },
        {
          title: 'Isolants thermiques et résistance de paroi',
          slug: 'isolants-thermiques-et-resistance-de-paroi',
          description:
            'QCM de niveau moyen sur le choix d’isolants, la résistance thermique et l’évolution du flux selon la surface ou l’épaisseur.',
          order: 3,
          stage: 'PRACTICE',
          items: [
            {
              type: 'QUESTION',
              questionOrder: 66,
            },
            {
              type: 'GROUP',
              title: 'Cas d’étude - Comparer des isolants de toiture',
              sharedStatement:
                'On compare trois panneaux isolants de même surface $S=1{,}0\\,\\mathrm{m^2}$ et de même épaisseur $e=20\\,\\mathrm{cm}$. Leurs conductivités thermiques valent respectivement $\\lambda_{verre}=0{,}040\\,\\mathrm{W.m^{-1}.K^{-1}}$, $\\lambda_{roche}=0{,}036\\,\\mathrm{W.m^{-1}.K^{-1}}$ et $\\lambda_{polystyrene}=0{,}030\\,\\mathrm{W.m^{-1}.K^{-1}}$. L’écart de température entre les deux faces est de $20\\,^{\\circ}\\mathrm{C}$.',
              questionOrders: [47, 48, 49, 50, 51],
            },
            {
              type: 'QUESTION',
              questionOrder: 52,
            },
            {
              type: 'QUESTION',
              questionOrder: 53,
            },
            {
              type: 'GROUP',
              title: 'Cas d’étude - Choisir l’épaisseur d’un isolant de mur',
              sharedStatement:
                'Un mur de surface $S=12\\,\\mathrm{m^2}$ sépare deux milieux dont la différence de température est $24\\,^{\\circ}\\mathrm{C}$. On souhaite limiter le flux thermique à $120\\,\\mathrm{W}$. On envisage une isolation en laine de roche de conductivité thermique $\\lambda=0{,}036\\,\\mathrm{W.m^{-1}.K^{-1}}$.',
              questionOrders: [54, 55],
            },
          ],
        },
        {
          title: 'Simple ou double vitrage ?',
          slug: 'simple-ou-double-vitrage',
          description:
            'QCM de niveau moyen sur la résistance thermique des vitrages, le flux traversant une fenêtre et l’intérêt du double vitrage.',
          order: 4,
          stage: 'PRACTICE',
          isPublished: false,
          items: [
            {
              type: 'QUESTION',
              questionOrder: 56,
            },
            {
              type: 'GROUP',
              title: 'Cas d’étude - Comparer simple et double vitrage',
              sharedStatement:
                'Une fenêtre de surface $S=2{,}0\\,\\mathrm{m^2}$ sépare un intérieur chauffé d’un extérieur plus froid. L’écart de température entre les deux faces est maintenu à $\\Delta T=20\\,^{\\circ}\\mathrm{C}$. On modélise l’ensemble de la fenêtre par une résistance thermique globale $R_{simple}=0{,}16\\,\\mathrm{K.W^{-1}}$ pour un simple vitrage et $R_{double}=0{,}40\\,\\mathrm{K.W^{-1}}$ pour un double vitrage.',
              questionOrders: [57, 58, 59, 60, 61],
            },
            {
              type: 'QUESTION',
              questionOrder: 62,
            },
            {
              type: 'QUESTION',
              questionOrder: 63,
            },
            {
              type: 'GROUP',
              title: 'Cas d’étude - Choisir un vitrage pour une façade',
              sharedStatement:
                'Pour une façade vitrée, on souhaite limiter le flux thermique à $60\\,\\mathrm{W}$ lorsque l’écart de température vaut $15\\,^{\\circ}\\mathrm{C}$. Trois solutions sont envisagées pour l’ensemble de la baie : simple vitrage de résistance thermique $0{,}12\\,\\mathrm{K.W^{-1}}$, double vitrage à faible émissivité de résistance thermique $0{,}30\\,\\mathrm{K.W^{-1}}$, triple vitrage de résistance thermique $0{,}45\\,\\mathrm{K.W^{-1}}$.',
              questionOrders: [64, 65],
            },
          ],
        },
        {
          title: 'Ponts thermiques, buée et condensation',
          slug: 'ponts-thermiques-buee-et-condensation',
          description:
            'QCM de niveau moyen sur les surfaces froides, les ponts thermiques, la buée sur les vitrages et les moyens de limiter la condensation.',
          order: 5,
          stage: 'PRACTICE',
          isPublished: false,
          items: [
            {
              type: 'QUESTION',
              questionOrder: 67,
            },
            {
              type: 'GROUP',
              title: 'Cas d’étude - Angle de mur froid et humide',
              sharedStatement:
                'Dans une chambre, l’air intérieur est chauffé et relativement humide. On observe, dans un angle de mur mal isolé, des traces d’humidité puis de moisissure. La température de surface intérieure y est plus basse que sur le reste de la paroi.',
              questionOrders: [68, 69, 70, 71, 72],
            },
            {
              type: 'QUESTION',
              questionOrder: 73,
            },
            {
              type: 'QUESTION',
              questionOrder: 74,
            },
            {
              type: 'GROUP',
              title: 'Cas d’étude - Encadrement de fenêtre et condensation',
              sharedStatement:
                'Deux détails constructifs sont comparés autour d’une fenêtre. Option A : dormant métallique sans rupture de pont thermique. Option B : dormant avec rupture de pont thermique et isolation soignée du tableau. On cherche à limiter la condensation au bord intérieur de la fenêtre en hiver.',
              questionOrders: [75, 76],
            },
          ],
        },
        {
          title: 'Transferts thermiques au quotidien',
          slug: 'transferts-thermiques-au-quotidien',
          description:
            'QCM facile sur la conduction, la convection et le rayonnement, avec des objets et situations du quotidien.',
          order: 2,
          stage: 'DISCOVER',
          isPublished: false,
          questionOrders: [77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
        },
        {
          title: 'Équations différentielles et loi de refroidissement',
          slug: 'equations-differentielles-et-loi-de-refroidissement',
          description:
            'QCM de niveau difficile avec deux cas guidés sur l’établissement et l’exploitation d’équations différentielles thermiques.',
          order: 6,
          stage: 'MASTER',
          items: [
            {
              type: 'GROUP',
              title: 'Cas d’étude - Refroidissement d’une boisson chaude',
              sharedStatement:
                'On modélise une boisson de capacité thermique totale $C$ placée dans un air à température constante $T_{ext}$. Sa température est notée $T(t)$. La puissance thermique cédée au milieu extérieur est supposée proportionnelle à l’écart de température et vaut $\\Phi_{th}=h(T-T_{ext})$ avec $h>0$.',
              questionOrders: [36, 37, 38, 39, 40],
            },
            {
              type: 'GROUP',
              title: 'Cas d’étude - Chauffage électrique avec pertes',
              sharedStatement:
                'On considère maintenant un corps de capacité thermique totale $C$ chauffé par une résistance de puissance constante $P$ et soumis à des pertes thermiques modélisées par $h(T-T_{ext})$. La température initiale vaut $T(0)=T_{ext}$.',
              questionOrders: [41, 42, 43, 44, 45],
            },
          ],
        },
      ],
    },
    {
      title: 'Rayonnement thermique et bilan radiatif',
      description:
        'Comprendre le transfert radiatif et raisonner sur un bilan radiatif simple.',
      order: 4,
      quizzes: [
        {
          title: 'Rayonnement thermique et bilan radiatif',
          slug: 'rayonnement-thermique-et-bilan-radiatif',
          description:
            'Rayonnement thermique, équilibre radiatif et bilan du système Terre-atmosphère.',
          order: 1,
          stage: 'DISCOVER',
          items: [
            {
              type: 'QUESTION',
              questionOrder: 16,
            },
            {
              type: 'GROUP',
              title: 'Cas d’étude - Système Terre-atmosphère',
              sharedStatement:
                'On considère le système Terre-atmosphère recevant le rayonnement du Soleil puis réémettant de l’énergie sous forme de rayonnement thermique. On raisonne sur le rôle de l’atmosphère et sur la condition d’équilibre radiatif global du système.',
              questionOrders: [18, 19, 20],
            },
            {
              type: 'QUESTION',
              questionOrder: 17,
            },
          ],
        },
        {
          title: 'Stefan-Boltzmann et bilan radiatif terrestre',
          slug: 'stefan-boltzmann-et-bilan-radiatif-terrestre',
          description:
            'QCM de niveau moyen sur la loi de Stefan-Boltzmann, l’albédo et l’écriture d’un bilan radiatif simplifié du système Terre-atmosphère.',
          order: 2,
          stage: 'PRACTICE',
          items: [
            {
              type: 'GROUP',
              title: 'Cas d’étude - Loi de Stefan-Boltzmann pour une surface rayonnante',
              sharedStatement:
                'On modélise une surface rayonnante de température absolue $T$ par la loi de Stefan-Boltzmann : le flux thermique surfacique émis vaut $\\varphi = \\sigma T^4$, avec $\\sigma$ une constante positive. On compare plusieurs situations en supposant inchangée la nature de la surface.',
              questionOrders: [137, 138, 139, 140, 141],
            },
            {
              type: 'GROUP',
              title: 'Cas d’étude - Bilan radiatif du système Terre-atmosphère',
              sharedStatement:
                'On considère le système Terre-atmosphère recevant un flux solaire moyen $\\varphi_S$. Une fraction $\\alpha$ de ce flux est réfléchie vers l’espace : c’est l’albédo du système. Le flux solaire absorbé vaut donc $(1-\\alpha)\\varphi_S$. Le système réémet vers l’espace un flux thermique $\\varphi_{th}$. À l’équilibre radiatif global, ces deux flux se compensent : $\\varphi_{th} = (1-\\alpha)\\varphi_S$. On admet enfin que $\\varphi_{th} = kT^4$ avec $k>0$ et $T$ la température radiative moyenne du système.',
              questionOrders: [142, 143, 144, 145, 146],
            },
          ],
        },
        {
          title: 'Modèle radiatif Terre-atmosphère à une couche',
          slug: 'modele-radiatif-terre-atmosphere-a-une-couche',
          description:
            'QCM de niveau difficile sur un modèle radiatif à une couche pour relier albédo, effet de serre simplifié et température de surface.',
          order: 3,
          stage: 'MASTER',
          items: [
            {
              type: 'GROUP',
              title: 'Cas d’étude - Établir le modèle à une couche',
              sharedStatement:
                'On considère un modèle simplifié du système Terre-atmosphère. Le système reçoit un flux solaire moyen $\\varphi_S$. Une fraction $A$ de ce flux est réfléchie vers l’espace : c’est l’albédo. La surface absorbe donc $(1-A)\\varphi_S$ et émet un flux thermique $\\varphi_T = \\sigma T_S^4$. L’atmosphère est supposée transparente au rayonnement solaire, mais absorbe une fraction $p$ du rayonnement thermique émis par la surface. Elle réémet alors ce qu’elle absorbe, pour moitié vers l’espace et pour moitié vers la surface. On raisonne à l’équilibre radiatif.',
              questionOrders: [147, 148, 149, 150, 151],
            },
            {
              type: 'GROUP',
              title: 'Cas d’étude - Comparer des scénarios climatiques',
              sharedStatement:
                'On admet désormais que le modèle précédent conduit à $\\varphi_T = \\dfrac{2(1-A)}{2-p}\\varphi_S$ et à $T_S = \\left(\\dfrac{2(1-A)\\varphi_S}{(2-p)\\sigma}\\right)^{1/4}$. On compare trois situations : référence $A=0{,}30$, $p=0{,}77$ ; glace fondue $A=0{,}25$, $p=0{,}77$ ; effet de serre renforcé $A=0{,}30$, $p=0{,}82$.',
              questionOrders: [152, 153, 154, 155, 156],
            },
          ],
        },
      ],
    },
    {
      title: 'Synthèse du chapitre',
      description:
        'Mobiliser l’ensemble des notions du chapitre dans des situations mixtes.',
      order: 5,
      kind: 'SYNTHESIS',
      quizzes: [
        {
          title: 'QCM de synthèse',
          slug: 'qcm-de-synthese',
          description:
            'Questions transversales sur les échanges thermiques et les bilans d’énergie.',
          order: 1,
          stage: 'MASTER',
          questionOrders: [21, 22, 23, 24, 25],
        },
      ],
    },
  ],
};