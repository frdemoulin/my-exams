import type { SeedQuestion } from './health-training-ue14.shared';

export const SECTION_C_QUESTIONS: SeedQuestion[] = [
  {
      order: 41,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `À propos de la composition des liaisons multiples entre deux atomes :`,
      choices: [
        `Une double liaison est constituée d'une liaison $\\sigma$ et d'une liaison $\\pi$.`,
        `Une triple liaison est constituée d'une liaison $\\sigma$ et de deux liaisons $\\pi$.`,
        `Le premier doublet partagé entre les deux atomes forme une liaison $\\sigma$.`,
        `Une double liaison est constituée de deux liaisons $\\pi$ et ne comporte aucune liaison $\\sigma$.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Entre deux atomes, la première composante de liaison est une liaison $\\sigma$, formée selon l'axe internucléaire. Une double liaison ajoute une liaison $\\pi$ et une triple liaison en ajoute deux. Il ne peut donc pas exister une double ou une triple liaison dépourvue de composante $\\sigma$.`,
      choiceExplanations: [
        `La double liaison associe une composante axiale $\\sigma$ et une composante latérale $\\pi$.`,
        `La triple liaison contient une liaison $\\sigma$ et deux liaisons $\\pi$ formées par deux recouvrements latéraux distincts.`,
        `La première mise en commun d'un doublet s'effectue selon l'axe reliant les noyaux et forme une liaison $\\sigma$.`,
        `Une liaison multiple conserve toujours une première liaison $\\sigma$ ; les liaisons supplémentaires sont de type $\\pi$.`,
      ],
    },
  {
      order: 42,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `L'éthylène, ou éthène, a pour formule $\\mathrm{CH_2=CH_2}$. Dans la représentation retenue :`,
      choices: [
        `Chaque atome de carbone est hybridé $\\mathrm{sp}^2$.`,
        `Autour de chaque carbone, les trois liaisons $\\sigma$ sont approximativement coplanaires et séparées par des angles proches de $120^\\circ$.`,
        `Chaque carbone conserve une orbitale $\\mathrm{p}$ non hybridée.`,
        `Chaque carbone est hybridé $\\mathrm{sp}^3$ et possède une géométrie tétraédrique.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Dans l'éthylène, chaque carbone utilise trois orbitales hybrides $\\mathrm{sp}^2$ pour former trois liaisons $\\sigma$. Ces orbitales sont coplanaires et orientées à environ $120^\\circ$. Une orbitale $\\mathrm{p}$ non hybridée reste perpendiculaire à ce plan et participe à la liaison $\\pi$ de la double liaison.`,
      choiceExplanations: [
        `La présence d'une double liaison est compatible ici avec un carbone $\\mathrm{sp}^2$.`,
        `Trois orbitales $\\mathrm{sp}^2$ définissent une organisation trigonale plane.`,
        `L'hybridation $\\mathrm{sp}^2$ n'utilise que deux des trois orbitales $\\mathrm{p}$ de valence ; la troisième reste non hybridée.`,
        `Un carbone $\\mathrm{sp}^3$ ne conserverait aucune orbitale $\\mathrm{p}$ disponible pour former la liaison $\\pi$.`,
      ],
    },
  {
      order: 43,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `À propos de la formule développée de l'éthylène $\\mathrm{CH_2=CH_2}$ :`,
      choices: [
        `Elle comporte 5 liaisons $\\sigma$.`,
        `Elle comporte 1 liaison $\\pi$.`,
        `Les quatre liaisons $\\mathrm{C-H}$ sont des liaisons $\\sigma$.`,
        `Elle comporte 4 liaisons $\\sigma$ et 2 liaisons $\\pi$.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Les quatre liaisons $\\mathrm{C-H}$ sont simples et donc de type $\\sigma$. La double liaison $\\mathrm{C=C}$ contient une liaison $\\sigma$ et une liaison $\\pi$. L'éthylène possède ainsi cinq liaisons $\\sigma$ et une liaison $\\pi$.`,
      choiceExplanations: [
        `On compte quatre liaisons $\\mathrm{C-H}$ et la composante $\\sigma$ de $\\mathrm{C=C}$, soit cinq liaisons $\\sigma$.`,
        `La seconde composante de la double liaison $\\mathrm{C=C}$ est une liaison $\\pi$.`,
        `Toute liaison simple $\\mathrm{C-H}$ est une liaison $\\sigma$.`,
        `La molécule ne possède qu'une liaison $\\pi$, tandis que la double liaison contient aussi une composante $\\sigma$.`,
      ],
    },
  {
      order: 44,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `À propos de la rotation autour de la double liaison $\\mathrm{C=C}$ de l'éthylène :`,
      choices: [
        `La liaison $\\pi$ résulte du recouvrement latéral de deux orbitales $\\mathrm{p}$ parallèles.`,
        `Une rotation d'un carbone par rapport à l'autre désalignerait les orbitales $\\mathrm{p}$ et diminuerait leur recouvrement.`,
        `La présence de la liaison $\\pi$ limite donc fortement la rotation autour de l'axe $\\mathrm{C=C}$.`,
        `La liaison $\\pi$ possède une symétrie axiale parfaite et autorise une rotation libre sans modification du recouvrement.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `La liaison $\\pi$ exige que les deux orbitales $\\mathrm{p}$ restent parallèles. Une rotation autour de l'axe carbone-carbone les désalignerait et romprait progressivement leur recouvrement. La double liaison ne possède donc pas la liberté de rotation caractéristique d'une liaison simple isolée.`,
      choiceExplanations: [
        `Le recouvrement latéral de deux orbitales $\\mathrm{p}$ parallèles produit la liaison $\\pi$.`,
        `La conservation du parallélisme est indispensable au maintien de la liaison $\\pi$.`,
        `La rotation est empêchée par la composante $\\pi$, même si la composante $\\sigma$ possède une symétrie axiale.`,
        `La symétrie axiale et la rotation libre sont des propriétés de la liaison $\\sigma$ prise isolément, pas de la liaison $\\pi$.`,
      ],
    },
  {
      order: 45,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `L'acétylène, ou éthyne, a pour formule $\\mathrm{CH\\equiv CH}$. Dans la représentation retenue :`,
      choices: [
        `Chaque atome de carbone est hybridé $\\mathrm{sp}$.`,
        `La molécule est linéaire et l'angle $\\mathrm{H-C-C}$ vaut approximativement $180^\\circ$.`,
        `La triple liaison entre les deux carbones comporte une liaison $\\sigma$ et deux liaisons $\\pi$.`,
        `Chaque carbone est hybridé $\\mathrm{sp}^2$ et la molécule est trigonale plane autour de chaque carbone.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Dans l'acétylène, chaque carbone possède deux orbitales hybrides $\\mathrm{sp}$ orientées en sens opposés. Elles forment les liaisons $\\sigma$ selon un axe linéaire. Les deux orbitales $\\mathrm{p}$ non hybridées de chaque carbone participent à deux liaisons $\\pi$.`,
      choiceExplanations: [
        `Une triple liaison carbone-carbone est associée ici à deux orbitales $\\mathrm{p}$ non hybridées et donc à une hybridation $\\mathrm{sp}$.`,
        `Deux orbitales $\\mathrm{sp}$ opposées imposent une géométrie linéaire à $180^\\circ$.`,
        `Une triple liaison contient toujours une composante $\\sigma$ et deux composantes $\\pi$.`,
        `L'hybridation $\\mathrm{sp}^2$ correspondrait à trois directions coplanaires et ne laisserait qu'une orbitale $\\mathrm{p}$ non hybridée.`,
      ],
    },
  {
      order: 46,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `Concernant les orbitales des deux carbones dans l'acétylène $\\mathrm{CH\\equiv CH}$ :`,
      choices: [
        `Chaque carbone conserve deux orbitales $\\mathrm{p}$ non hybridées.`,
        `Les deux liaisons $\\pi$ proviennent de deux recouvrements latéraux distincts.`,
        `Les deux systèmes de recouvrement $\\pi$ sont orientés dans deux plans perpendiculaires contenant l'axe carbone-carbone.`,
        `Les deux liaisons $\\pi$ sont formées par le recouvrement axial de deux paires d'orbitales $\\mathrm{sp}$.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `L'hybridation $\\mathrm{sp}$ laisse deux orbitales $\\mathrm{p}$ non hybridées sur chaque carbone. Chaque paire d'orbitales $\\mathrm{p}$ parallèles forme une liaison $\\pi$ par recouvrement latéral. Les deux ensembles d'orbitales $\\mathrm{p}$ sont perpendiculaires l'un à l'autre.`,
      choiceExplanations: [
        `Une seule orbitale $\\mathrm{p}$ participe à l'hybridation $\\mathrm{sp}$ avec l'orbitale $\\mathrm{s}$ ; les deux autres restent non hybridées.`,
        `Chaque liaison $\\pi$ correspond à un recouvrement latéral indépendant.`,
        `Les deux orbitales $\\mathrm{p}$ restantes sur un même carbone sont perpendiculaires, d'où deux systèmes $\\pi$ perpendiculaires.`,
        `Les orbitales $\\mathrm{sp}$ forment les liaisons $\\sigma$ par recouvrement axial ; elles ne forment pas les liaisons $\\pi$.`,
      ],
    },
  {
      order: 47,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `Le carbone peut être présenté comme un « caméléon » en raison de ses différentes possibilités d'hybridation. Quelles correspondances sont exactes ?`,
      choices: [
        `Un carbone $\\mathrm{sp}^3$ est typiquement associé à quatre directions de liaisons $\\sigma$ et à une organisation tétraédrique.`,
        `Un carbone $\\mathrm{sp}^2$ est typiquement associé à une géométrie trigonale plane et peut participer à une double liaison.`,
        `Un carbone $\\mathrm{sp}$ est typiquement associé à une géométrie linéaire et peut participer à une triple liaison.`,
        `L'exposant de $\\mathrm{sp}^2$ ou de $\\mathrm{sp}^3$ indique directement le nombre de liaisons $\\pi$ formées par le carbone.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Les hybridations $\\mathrm{sp}^3$, $\\mathrm{sp}^2$ et $\\mathrm{sp}$ permettent au carbone d'adopter respectivement des organisations tétraédrique, trigonale plane et linéaire. L'exposant indique le nombre d'orbitales $\\mathrm{p}$ combinées avec l'orbitale $\\mathrm{s}$, et non le nombre de liaisons $\\pi$.`,
      choiceExplanations: [
        `Quatre orbitales hybrides $\\mathrm{sp}^3$ donnent quatre directions tétraédriques.`,
        `Trois orbitales $\\mathrm{sp}^2$ sont coplanaires et une orbitale $\\mathrm{p}$ reste disponible pour une liaison $\\pi$.`,
        `Deux orbitales $\\mathrm{sp}$ sont opposées et deux orbitales $\\mathrm{p}$ restent disponibles pour deux liaisons $\\pi$.`,
        `Dans $\\mathrm{sp}^3$, l'exposant 3 n'indique pas trois liaisons $\\pi$ : aucune orbitale $\\mathrm{p}$ non hybridée ne subsiste.`,
      ],
    },
  {
      order: 48,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `À propos de la structure du benzène $\\mathrm{C_6H_6}$ : [[QUESTION_DIAGRAM]]`,
      questionDiagram: {
        type: 'benzene-kekule',
        variant: 'single-kekule',
      },
      choices: [
        `Les six atomes de carbone sont hybridés $\\mathrm{sp}^2$.`,
        `Les liaisons $\\sigma$ entre les carbones forment un hexagone plan.`,
        `Chaque carbone conserve une orbitale $\\mathrm{p}$ perpendiculaire au plan du cycle.`,
        `Les six carbones sont hybridés $\\mathrm{sp}^3$ et forment un cycle tétraédrique non plan.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Chaque carbone du benzène utilise trois orbitales $\\mathrm{sp}^2$ pour former son environnement $\\sigma$ dans le plan du cycle. Une orbitale $\\mathrm{p}$ non hybridée reste perpendiculaire à ce plan. Les six orbitales $\\mathrm{p}$ peuvent ainsi se recouvrir autour de l'ensemble du cycle.`,
      choiceExplanations: [
        `Chaque carbone possède trois directions $\\sigma$ coplanaires et une orbitale $\\mathrm{p}$ restante, caractéristiques de $\\mathrm{sp}^2$.`,
        `Le squelette $\\sigma$ carbone-carbone est un hexagone plan.`,
        `Le parallélisme des six orbitales $\\mathrm{p}$ est nécessaire à la formation du système $\\pi$ aromatique.`,
        `Une hybridation $\\mathrm{sp}^3$ supprimerait les orbitales $\\mathrm{p}$ non hybridées nécessaires à la délocalisation aromatique.`,
      ],
    },
  {
      order: 49,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `L'acide salicylique, utilisé notamment en dermatologie, possède un noyau benzénique : [[QUESTION_DIAGRAM]] À propos de ce noyau aromatique :`,
      questionDiagram: {
        type: 'molecule',
        molecule: 'salicylic-acid-topological',
      },
      choices: [
        `Ses six orbitales $\\mathrm{p}$ parallèles peuvent se recouvrir autour de l'ensemble du cycle.`,
        `Les électrons $\\pi$ sont délocalisés au-dessus et au-dessous du plan du cycle.`,
        `Les six carbones du noyau sont hybridés $\\mathrm{sp}^2$.`,
        `Le noyau benzénique ne comporte qu'un squelette de liaisons $\\sigma$ et aucun système électronique $\\pi$.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Dans un noyau benzénique, les six carbones $\\mathrm{sp}^2$ possèdent chacun une orbitale $\\mathrm{p}$ perpendiculaire au plan. Leur recouvrement forme un système $\\pi$ délocalisé, réparti au-dessus et au-dessous du cycle. Cette délocalisation caractérise l'aromaticité du benzène.`,
      choiceExplanations: [
        `Le parallélisme et la continuité des six orbitales $\\mathrm{p}$ permettent leur recouvrement sur tout le cycle.`,
        `La densité électronique $\\pi$ n'est pas limitée à une seule liaison : elle est répartie de part et d'autre du plan du noyau.`,
        `L'hybridation $\\mathrm{sp}^2$ fournit trois directions $\\sigma$ dans le plan et une orbitale $\\mathrm{p}$ perpendiculaire.`,
        `Le noyau possède bien un squelette $\\sigma$, mais également un système $\\pi$ délocalisé essentiel à son caractère aromatique.`,
      ],
    },
  {
      order: 50,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `Choisir la(les) proposition(s) exacte(s) concernant l'hybridation des atomes de carbone de l'éthane $\\mathrm{CH_3-CH_3}$, de l'éthylène $\\mathrm{CH_2=CH_2}$ et de l'acétylène $\\mathrm{CH\\equiv CH}$ :`,
      choices: [
        `Dans l'éthane, chaque carbone est hybridé $\\mathrm{sp}^2$.`,
        `Dans l'éthylène, chaque carbone est hybridé $\\mathrm{sp}$.`,
        `Dans l'acétylène, chaque carbone est hybridé $\\mathrm{sp}^3$.`,
        `Aucun des items précédents n'est vrai.`,
      ],
      correctChoiceIndexes: [3],
      explanation:
        `Les carbones de l'éthane, de l'éthylène et de l'acétylène sont respectivement hybridés $\\mathrm{sp}^3$, $\\mathrm{sp}^2$ et $\\mathrm{sp}$. Les trois premières propositions inversent donc les correspondances correctes.`,
      choiceExplanations: [
        `L'éthane ne comporte que des liaisons simples autour de chaque carbone : ceux-ci sont $\\mathrm{sp}^3$.`,
        `La double liaison de l'éthylène est associée à des carbones $\\mathrm{sp}^2$.`,
        `La triple liaison de l'acétylène est associée à des carbones $\\mathrm{sp}$.`,
        `Les trois propositions précédentes sont fausses ; cet item est donc exact.`,
      ],
    },
];
