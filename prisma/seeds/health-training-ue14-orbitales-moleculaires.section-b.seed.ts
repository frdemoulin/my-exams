import type { SeedQuestion } from './health-training-ue14.shared';

export const SECTION_B_QUESTIONS: SeedQuestion[] = [
  {
      order: 21,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos de l'hybridation des orbitales atomiques :`,
      choices: [
        `Elle correspond à la combinaison d'orbitales atomiques de valence d'un même atome.`,
        `Elle conduit à de nouvelles orbitales hybrides orientées dans l'espace.`,
        `Le nombre d'orbitales hybrides obtenues est égal au nombre d'orbitales atomiques combinées.`,
        `Elle décrit la transformation d'une orbitale atomique en une trajectoire précise suivie par l'électron.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `L'hybridation est un modèle qui combine des orbitales atomiques de valence d'un même atome afin d'obtenir des orbitales hybrides équivalentes et orientées dans l'espace. Le nombre d'orbitales est conservé : deux orbitales combinées donnent deux orbitales hybrides, trois en donnent trois, etc. Une orbitale ne représente jamais une trajectoire électronique précise.`,
      choiceExplanations: [
        `Les orbitales concernées appartiennent au même atome et sont généralement des orbitales de sa couche de valence.`,
        `L'orientation des orbitales hybrides permet d'expliquer la direction des liaisons et la géométrie moléculaire.`,
        `Une combinaison de $n$ orbitales atomiques produit $n$ orbitales hybrides.`,
        `Une orbitale décrit une région de probabilité de présence, et non une trajectoire déterminée.`,
      ],
    },
  {
      order: 22,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `Concernant une hybridation $\\mathrm{sp}$ :`,
      choices: [
        `Elle résulte de la combinaison d'une orbitale $\\mathrm{s}$ et d'une orbitale $\\mathrm{p}$.`,
        `Elle produit deux orbitales hybrides $\\mathrm{sp}$ équivalentes.`,
        `Les deux orbitales hybrides sont orientées en sens opposés, avec un angle de $180^\\circ$.`,
        `Elle produit trois orbitales hybrides disposées dans un même plan à $120^\\circ$.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Une hybridation $\\mathrm{sp}$ combine une orbitale $\\mathrm{s}$ et une orbitale $\\mathrm{p}$. Elle forme deux orbitales $\\mathrm{sp}$ équivalentes dirigées selon un même axe, en sens opposés. Cette disposition correspond à une géométrie linéaire et à un angle de $180^\\circ$.`,
      choiceExplanations: [
        `La notation $\\mathrm{sp}$ indique la combinaison d'une orbitale $\\mathrm{s}$ et d'une orbitale $\\mathrm{p}$.`,
        `Deux orbitales atomiques sont combinées : deux orbitales hybrides sont donc obtenues.`,
        `La répulsion maximale entre les deux directions de liaison les place à $180^\\circ$.`,
        `Trois orbitales coplanaires à $120^\\circ$ correspondent à une hybridation $\\mathrm{sp}^2$.`,
      ],
    },
  {
      order: 23,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `Le béryllium possède le numéro atomique $\\mathrm{Z} = 4$. L'hydrure de béryllium $\\mathrm{BeH_2}$ illustre l'hybridation $\\mathrm{sp}$.`,
      choices: [
        `À l'état atomique fondamental, le béryllium possède la configuration $1\\mathrm{s}^2\\,2\\mathrm{s}^2$.`,
        `Dans le modèle moléculaire, un électron de valence est redistribué de $2\\mathrm{s}$ vers $2\\mathrm{p}$, ce qui permet d'obtenir deux électrons célibataires.`,
        `$\\mathrm{BeH_2}$ présente deux liaisons équivalentes et une géométrie linéaire.`,
        `Tous les items précédents sont faux.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Le béryllium atomique a pour configuration $1\\mathrm{s}^2\\,2\\mathrm{s}^2$. La représentation retenue fait intervenir une redistribution électronique conduisant à $2\\mathrm{s}^1\\,2\\mathrm{p}^1$, puis à deux orbitales hybrides $\\mathrm{sp}$ portant chacune un électron célibataire. Les deux liaisons $\\mathrm{Be-H}$ sont ainsi équivalentes et opposées à $180^\\circ$.`,
      choiceExplanations: [
        `Avec quatre électrons, le béryllium remplit $1\\mathrm{s}^2$ puis $2\\mathrm{s}^2$.`,
        `Cette redistribution fournit deux électrons célibataires susceptibles de former deux liaisons.`,
        `Deux orbitales $\\mathrm{sp}$ opposées expliquent la géométrie linéaire de $\\mathrm{BeH_2}$.`,
        `Les trois propositions précédentes sont exactes ; cet item est donc faux.`,
      ],
    },
  {
      order: 24,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `Le borane $\\mathrm{BH_3}$ illustre l'hybridation trigonale $\\mathrm{sp}^2$. Le bore possède le numéro atomique $\\mathrm{Z} = 5$.`,
      choices: [
        `L'hybridation $\\mathrm{sp}^2$ combine une orbitale $\\mathrm{s}$ et deux orbitales $\\mathrm{p}$.`,
        `Elle produit trois orbitales hybrides $\\mathrm{sp}^2$ équivalentes.`,
        `Dans $\\mathrm{BH_3}$, les trois liaisons $\\mathrm{B-H}$ sont coplanaires et séparées par des angles voisins de $120^\\circ$.`,
        `$\\mathrm{BH_3}$ possède une géométrie tétraédrique avec des angles voisins de $109{,}5^\\circ$.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Une hybridation $\\mathrm{sp}^2$ associe une orbitale $\\mathrm{s}$ et deux orbitales $\\mathrm{p}$, ce qui produit trois orbitales hybrides équivalentes. Elles se disposent dans un même plan avec des angles de $120^\\circ$. Le borane est donc trigonal plan, et non tétraédrique.`,
      choiceExplanations: [
        `L'exposant 2 indique que deux orbitales $\\mathrm{p}$ participent à l'hybridation avec une orbitale $\\mathrm{s}$.`,
        `Trois orbitales atomiques combinées donnent trois orbitales hybrides.`,
        `La disposition trigonale plane maximise l'écartement entre les trois directions de liaison.`,
        `La géométrie tétraédrique est associée à quatre directions $\\mathrm{sp}^3$.`,
      ],
    },
  {
      order: 25,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos de l'hybridation $\\mathrm{sp}^3$ :`,
      choices: [
        `Elle combine une orbitale $\\mathrm{s}$ et trois orbitales $\\mathrm{p}$.`,
        `Elle forme quatre orbitales hybrides équivalentes.`,
        `Les quatre directions sont orientées vers les sommets d'un tétraèdre, avec des angles voisins de $109{,}5^\\circ$.`,
        `L'exposant 3 signifie que seules trois orbitales hybrides sont obtenues.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `L'hybridation $\\mathrm{sp}^3$ combine quatre orbitales atomiques : une $\\mathrm{s}$ et trois $\\mathrm{p}$. Elle produit donc quatre orbitales hybrides équivalentes orientées vers les sommets d'un tétraèdre. L'exposant indique le nombre d'orbitales $\\mathrm{p}$ combinées, pas le nombre total d'orbitales hybrides.`,
      choiceExplanations: [
        `Une orbitale $\\mathrm{s}$ et les trois orbitales $\\mathrm{p}$ d'une même couche participent à l'hybridation.`,
        `Le nombre total d'orbitales est conservé : quatre orbitales atomiques donnent quatre orbitales hybrides.`,
        `L'angle tétraédrique idéal est voisin de $109{,}5^\\circ$.`,
        `On obtient quatre orbitales $\\mathrm{sp}^3$, et non trois.`,
      ],
    },
  {
      order: 26,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `Le méthane $\\mathrm{CH_4}$ peut notamment être produit par le microbiote intestinal. Dans cette molécule, le carbone est décrit comme hybridé $\\mathrm{sp}^3$.`,
      choices: [
        `Le carbone forme quatre liaisons $\\mathrm{C-H}$ équivalentes.`,
        `La molécule présente une géométrie tétraédrique.`,
        `Les angles $\\mathrm{H-C-H}$ sont voisins de $109{,}5^\\circ$.`,
        `Les cinq atomes de $\\mathrm{CH_4}$ sont situés dans un même plan.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Les quatre orbitales $\\mathrm{sp}^3$ du carbone forment quatre liaisons $\\mathrm{C-H}$ équivalentes dirigées vers les sommets d'un tétraèdre. Les angles sont proches de $109{,}5^\\circ$. Cette organisation est tridimensionnelle : les cinq atomes ne sont pas coplanaires.`,
      choiceExplanations: [
        `Les quatre orbitales hybrides du carbone sont équivalentes et donnent quatre liaisons équivalentes.`,
        `Quatre directions de liaison sans doublet non liant conduisent à une géométrie tétraédrique.`,
        `Il s'agit de l'angle caractéristique du tétraèdre régulier.`,
        `Une géométrie tétraédrique n'est pas plane.`,
      ],
    },
  {
      order: 27,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `L'ammoniac $\\mathrm{NH_3}$ est une espèce azotée toxique à forte concentration, transformée notamment en urée par le foie. L'azote possède le numéro atomique $\\mathrm{Z} = 7$.`,
      choices: [
        `L'azote de $\\mathrm{NH_3}$ est décrit comme hybridé $\\mathrm{sp}^3$.`,
        `Les quatre orbitales $\\mathrm{sp}^3$ comprennent trois orbitales participant aux liaisons $\\mathrm{N-H}$ et une orbitale contenant un doublet non liant.`,
        `La géométrie de la molécule est pyramidale.`,
        `Comme l'azote forme trois liaisons, il est hybridé $\\mathrm{sp}^2$ et la molécule est trigonale plane.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Autour de l'azote de $\\mathrm{NH_3}$, on compte quatre orbitales $\\mathrm{sp}^3$ : trois portent les électrons engagés dans les liaisons $\\mathrm{N-H}$ et une contient un doublet non liant. L'organisation électronique est tétraédrique, mais la géométrie moléculaire visible est pyramidale.`,
      choiceExplanations: [
        `Les trois liaisons et le doublet non liant occupent quatre directions, compatibles avec $\\mathrm{sp}^3$.`,
        `Le doublet non liant occupe une des quatre orbitales hybrides.`,
        `Seules les positions des atomes définissent la forme moléculaire : les trois hydrogènes constituent la base d'une pyramide.`,
        `Compter uniquement les liaisons fait oublier le doublet non liant ; l'azote n'est pas $\\mathrm{sp}^2$ dans ce modèle.`,
      ],
    },
  {
      order: 28,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `L'eau constitue le principal solvant des milieux biologiques. L'oxygène de $\\mathrm{H_2O}$, de numéro atomique $\\mathrm{Z} = 8$, est décrit comme hybridé $\\mathrm{sp}^3$.`,
      choices: [
        `Deux orbitales $\\mathrm{sp}^3$ participent aux liaisons $\\mathrm{O-H}$.`,
        `Deux orbitales $\\mathrm{sp}^3$ contiennent chacune un doublet non liant.`,
        `La molécule est coudée et l'angle $\\mathrm{H-O-H}$ est voisin de $104{,}5^\\circ$.`,
        `La molécule est linéaire, car elle ne comporte que deux liaisons $\\mathrm{O-H}$.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Les quatre orbitales $\\mathrm{sp}^3$ de l'oxygène se répartissent entre deux liaisons $\\mathrm{O-H}$ et deux doublets non liants. Les quatre directions électroniques sont organisées autour d'un tétraèdre, mais les deux seuls atomes liés donnent à la molécule une forme coudée. L'angle $\\mathrm{H-O-H}$ est d'environ $104{,}5^\\circ$.`,
      choiceExplanations: [
        `Chacun des deux électrons célibataires de l'oxygène participe à une liaison $\\mathrm{O-H}$.`,
        `Les quatre autres électrons de valence sont regroupés en deux doublets non liants.`,
        `La présence des deux doublets non liants conduit à une géométrie moléculaire coudée.`,
        `Le nombre de liaisons ne suffit pas : il faut également tenir compte des doublets non liants.`,
      ],
    },
  {
      order: 29,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `On compare les molécules $\\mathrm{CH_4}$, $\\mathrm{NH_3}$ et $\\mathrm{H_2O}$ dans le modèle d'hybridation retenu.`,
      choices: [
        `Leur atome central est décrit comme hybridé $\\mathrm{sp}^3$.`,
        `Autour de chaque atome central, quatre orbitales hybrides sont orientées selon une organisation tétraédrique.`,
        `Le passage de $\\mathrm{CH_4}$ à $\\mathrm{NH_3}$ puis à $\\mathrm{H_2O}$ s'accompagne d'une augmentation du nombre de doublets non liants et d'une diminution de l'angle de liaison.`,
        `Tous les items précédents sont faux.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `$\\mathrm{CH_4}$, $\\mathrm{NH_3}$ et $\\mathrm{H_2O}$ reposent tous sur quatre directions électroniques $\\mathrm{sp}^3$. Elles contiennent respectivement zéro, un et deux doublets non liants. Les angles caractéristiques diminuent alors d'environ $109{,}5^\\circ$ à $107{,}5^\\circ$, puis à $104{,}5^\\circ$.`,
      choiceExplanations: [
        `Les trois atomes centraux sont entourés de quatre orbitales hybrides dans le modèle utilisé.`,
        `L'organisation des orbitales est tétraédrique, même si la géométrie visible des atomes diffère.`,
        `Les doublets non liants modifient les angles et conduisent aux géométries pyramidale puis coudée.`,
        `Les trois propositions précédentes sont exactes ; cet item est donc faux.`,
      ],
    },
  {
      order: 30,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `Concernant la relation entre hybridation et géométrie des molécules simples :`,
      choices: [
        `Deux orbitales hybrides $\\mathrm{sp}$ correspondent à une organisation linéaire.`,
        `Trois orbitales hybrides $\\mathrm{sp}^2$ correspondent à une organisation trigonale plane.`,
        `Quatre orbitales hybrides $\\mathrm{sp}^3$ correspondent à une organisation tétraédrique.`,
        `Le seul nombre d'atomes liés suffit toujours à déterminer l'hybridation, même en présence de doublets non liants.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Les hybridations $\\mathrm{sp}$, $\\mathrm{sp}^2$ et $\\mathrm{sp}^3$ correspondent respectivement à deux, trois et quatre directions orbitalaires. Pour déterminer l'hybridation d'un atome central, il faut tenir compte de toutes les orbitales occupées autour de lui, y compris celles qui contiennent des doublets non liants.`,
      choiceExplanations: [
        `Deux directions opposées donnent une organisation linéaire à $180^\\circ$.`,
        `Trois directions coplanaires donnent une organisation trigonale plane à $120^\\circ$.`,
        `Quatre directions orientées dans l'espace donnent une organisation tétraédrique.`,
        `Dans $\\mathrm{NH_3}$ et $\\mathrm{H_2O}$, les doublets non liants doivent être comptés pour retrouver l'hybridation $\\mathrm{sp}^3$.`,
      ],
    },
  {
      order: 31,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `En cas d'acidocétose diabétique, l'acétone peut donner à l'haleine une odeur fruitée. L'acétone, ou propanone, a pour formule semi-développée $\\mathrm{CH_3-C(=O)-CH_3}$. Dans l'acétone, le carbone du groupe carbonyle est hybridé $\\mathrm{sp}^2$. Quelle représentation en cases quantiques correspond aux orbitales de valence de ce carbone après hybridation ?`,
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
            { label: '2\\mathrm{sp}^{3}', boxes: ['up', 'up', 'up', 'up'] },
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
      ],
      correctChoiceIndexes: [1],
      explanation:
        `L'hybridation $\\mathrm{sp}^2$ forme trois orbitales hybrides équivalentes, chacune occupée par un électron célibataire, et conserve une orbitale $\\mathrm{p}$ non hybridée contenant le quatrième électron. Les trois orbitales $\\mathrm{sp}^2$ participent aux liaisons $\\sigma$ du carbone carbonylé ; l'orbitale $\\mathrm{p}$ participe à la liaison $\\pi$ de $\\mathrm{C=O}$.`,
      choiceExplanations: [
        `Cette représentation correspond à l'état atomique fondamental de valence $2\\mathrm{s}^2\\,2\\mathrm{p}^2$, avant redistribution et hybridation.`,
        `Les trois cases $\\mathrm{sp}^2$ et l'unique case $\\mathrm{p}$ non hybridée contiennent chacune un électron célibataire : c'est la représentation attendue.`,
        `Quatre orbitales hybrides $\\mathrm{sp}^3$ correspondent à un carbone formant quatre liaisons $\\sigma$, sans orbitale $\\mathrm{p}$ restante.`,
        `Deux orbitales $\\mathrm{sp}$ et deux orbitales $\\mathrm{p}$ non hybridées correspondent à une hybridation $\\mathrm{sp}$.`,
      ],
    },
  {
      order: 32,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Le dioxyde de carbone $\\mathrm{CO_2}$ est produit par le métabolisme puis éliminé par les poumons. Dans la molécule $\\mathrm{O=C=O}$, le carbone central, de numéro atomique $\\mathrm{Z} = 6$, est hybridé $\\mathrm{sp}$.`,
      choices: [
        `Deux orbitales hybrides $\\mathrm{sp}$ occupées chacune par un électron participent aux deux liaisons $\\sigma$.`,
        `Deux orbitales $\\mathrm{p}$ non hybridées restent disponibles et participent aux deux liaisons $\\pi$.`,
        `Les deux orbitales $\\mathrm{sp}$ sont orientées en sens opposés, ce qui est cohérent avec une molécule linéaire à $180^\\circ$.`,
        `L'hybridation $\\mathrm{sp}$ mobilise les trois orbitales $\\mathrm{p}$ et produit quatre orbitales hybrides équivalentes.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Une hybridation $\\mathrm{sp}$ combine une orbitale $\\mathrm{s}$ et une orbitale $\\mathrm{p}$ pour produire deux orbitales $\\mathrm{sp}$ opposées. Deux orbitales $\\mathrm{p}$ restent non hybridées : elles permettent la formation des deux composantes $\\pi$ des deux doubles liaisons du dioxyde de carbone.`,
      choiceExplanations: [
        `Chaque orbitale $\\mathrm{sp}$ est dirigée vers un oxygène et participe à une liaison $\\sigma$.`,
        `Une seule orbitale $\\mathrm{p}$ est hybridée avec l'orbitale $\\mathrm{s}$ ; les deux autres restent disponibles pour deux recouvrements latéraux.`,
        `Deux directions opposées caractérisent l'hybridation $\\mathrm{sp}$ et la géométrie linéaire.`,
        `Une orbitale $\\mathrm{s}$ et trois orbitales $\\mathrm{p}$ produiraient quatre orbitales $\\mathrm{sp}^3$, et non des orbitales $\\mathrm{sp}$.`,
      ],
    },
  {
      order: 33,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `L'ion ammonium $\\mathrm{NH_4^+}$ participe notamment à l'élimination rénale de la charge acide. Il peut être formé par fixation d'un proton $\\mathrm{H^+}$ sur le doublet non liant de l'ammoniac $\\mathrm{NH_3}$.`,
      choices: [
        `L'azote est décrit comme hybridé $\\mathrm{sp}^3$ dans $\\mathrm{NH_3}$ comme dans $\\mathrm{NH_4^+}$.`,
        `La formation de $\\mathrm{NH_4^+}$ utilise le doublet non liant de l'azote de $\\mathrm{NH_3}$ pour établir une quatrième liaison $\\mathrm{N-H}$.`,
        `$\\mathrm{NH_4^+}$ présente une géométrie tétraédrique avec quatre liaisons $\\mathrm{N-H}$ équivalentes dans le modèle simplifié.`,
        `$\\mathrm{NH_4^+}$ conserve une géométrie pyramidale, car l'azote possédait initialement un doublet non liant.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `L'ammoniac et l'ion ammonium possèdent tous deux quatre directions orbitalaires autour de l'azote. Dans $\\mathrm{NH_3}$, l'une contient un doublet non liant ; après protonation, elle participe à une quatrième liaison. L'ion $\\mathrm{NH_4^+}$ ne possède donc plus de doublet non liant sur l'azote et adopte une géométrie tétraédrique.`,
      choiceExplanations: [
        `Les quatre orbitales de valence de l'azote sont décrites comme des orbitales $\\mathrm{sp}^3$ dans les deux espèces.`,
        `Le proton ne fournit pas d'électron : la liaison se forme grâce au doublet initialement porté par l'azote.`,
        `Quatre directions de liaison sans doublet non liant conduisent à une géométrie tétraédrique.`,
        `Le doublet est engagé dans la quatrième liaison après protonation ; il ne reste donc pas disponible pour imposer une géométrie pyramidale.`,
      ],
    },
  {
      order: 34,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `On compare les occupations des quatre orbitales hybrides $\\mathrm{sp}^3$ de l'atome central dans l'ammoniac et dans l'eau : [[QUESTION_DIAGRAM]]`,
      questionDiagram: {
        type: 'quantum-boxes',
        orbitals: [
          { label: '\\text{Schéma I}', boxes: ['pair', 'up', 'up', 'up'] },
          { label: '\\text{Schéma II}', boxes: ['pair', 'pair', 'up', 'up'] },
        ],
      },
      choices: [
        `Le schéma I convient à l'azote de $\\mathrm{NH_3}$.`,
        `Le schéma II convient à l'oxygène de $\\mathrm{H_2O}$.`,
        `Dans les deux cas, quatre orbitales $\\mathrm{sp}^3$ sont occupées autour de l'atome central.`,
        `Le schéma I représente $\\mathrm{H_2O}$ et le schéma II représente $\\mathrm{NH_3}$.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Dans $\\mathrm{NH_3}$, l'azote possède un doublet non liant et trois électrons célibataires engagés dans trois liaisons. Dans $\\mathrm{H_2O}$, l'oxygène possède deux doublets non liants et deux électrons célibataires engagés dans deux liaisons. Les deux atomes centraux sont néanmoins décrits par quatre orbitales $\\mathrm{sp}^3$.`,
      choiceExplanations: [
        `Une case doublement occupée et trois cases simplement occupées correspondent à un doublet non liant et trois possibilités de liaison.`,
        `Deux cases doublement occupées et deux cases simplement occupées correspondent aux deux doublets non liants et aux deux liaisons de l'eau.`,
        `Le nombre d'orbitales hybrides est identique ; seule leur occupation électronique diffère.`,
        `Cette association inverse les nombres de doublets non liants de l'azote et de l'oxygène.`,
      ],
    },
  {
      order: 35,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `La figure suivante représente trois organisations possibles d'orbitales hybrides autour d'un atome central.
  
  ![Orientations caractéristiques des hybridations $\\mathrm{sp}$, $\\mathrm{sp}^2$ et $\\mathrm{sp}^3$](/images/training/ue14/orbitales-moleculaires/geometries-hybridation-sp-sp2-sp3.png)`,
      choices: [
        `Le schéma A correspond à deux orbitales $\\mathrm{sp}$ orientées à $180^\\circ$.`,
        `Le schéma B correspond à trois orbitales $\\mathrm{sp}^2$ coplanaires orientées à environ $120^\\circ$.`,
        `Le schéma C correspond à quatre orbitales $\\mathrm{sp}^3$ dirigées vers les sommets d'un tétraèdre.`,
        `Le schéma C représente quatre orbitales strictement coplanaires séparées par des angles de $90^\\circ$.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Le nombre d'orbitales hybrides et leur orientation permettent d'identifier l'hybridation : deux directions opposées pour $\\mathrm{sp}$, trois directions coplanaires pour $\\mathrm{sp}^2$ et quatre directions tridimensionnelles pour $\\mathrm{sp}^3$.`,
      choiceExplanations: [
        `L'organisation linéaire à $180^\\circ$ caractérise deux orbitales $\\mathrm{sp}$.`,
        `Trois directions dans un même plan à $120^\\circ$ caractérisent l'hybridation $\\mathrm{sp}^2$.`,
        `Les quatre orbitales $\\mathrm{sp}^3$ occupent l'espace selon une organisation tétraédrique.`,
        `La géométrie $\\mathrm{sp}^3$ n'est ni plane ni formée d'angles droits.`,
      ],
    },
  {
      order: 36,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `L'éthanol $\\mathrm{CH_3-CH_2-OH}$ est notamment utilisé comme antiseptique dans les solutions hydroalcooliques. À propos de l'hybridation de ses atomes :`,
      choices: [
        `Les deux atomes de carbone sont hybridés $\\mathrm{sp}^3$.`,
        `Autour de chacun des deux carbones, l'organisation locale des quatre liaisons $\\sigma$ est tétraédrique.`,
        `L'oxygène peut être décrit par quatre orbitales $\\mathrm{sp}^3$ : deux participent à des liaisons et deux contiennent des doublets non liants.`,
        `La liaison $\\mathrm{C-O}$ contient une composante $\\pi$ qui interdit sa rotation.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Dans l'éthanol, chaque carbone forme quatre liaisons simples et est donc décrit comme $\\mathrm{sp}^3$. L'oxygène possède deux liaisons simples et deux doublets non liants, soit quatre orbitales occupées compatibles avec $\\mathrm{sp}^3$. Toutes les liaisons de la molécule sont des liaisons $\\sigma$.`,
      choiceExplanations: [
        `Chaque carbone possède quatre directions de liaison simple, ce qui correspond à quatre orbitales $\\mathrm{sp}^3$.`,
        `La géométrie locale autour d'un carbone $\\mathrm{sp}^3$ est tétraédrique, même si l'ensemble de la molécule n'est pas un tétraèdre unique.`,
        `Les deux doublets non liants doivent être comptés avec les deux directions de liaison autour de l'oxygène.`,
        `Une liaison simple $\\mathrm{C-O}$ est une liaison $\\sigma$ ; elle ne contient pas de composante $\\pi$.`,
      ],
    },
  {
      order: 37,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Le lactate est notamment dosé pour apprécier la gravité de certaines situations d'hypoperfusion. On considère ici la formule de l'acide lactique $\\mathrm{CH_3-CH(OH)-C(=O)-OH}$ et uniquement l'hybridation de ses trois atomes de carbone.`,
      choices: [
        `Le carbone du groupe $\\mathrm{CH_3}$ et le carbone portant $\\mathrm{OH}$ sont hybridés $\\mathrm{sp}^3$.`,
        `Le carbone du groupe carboxyle $\\mathrm{C(=O)-OH}$ est hybridé $\\mathrm{sp}^2$.`,
        `Les trois carbones fournissent ensemble $4+4+3=11$ orbitales hybrides.`,
        `Chacun des trois carbones conserve deux orbitales $\\mathrm{p}$ non hybridées.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Les deux premiers carbones ne sont engagés que dans des liaisons simples : ils sont décrits comme $\\mathrm{sp}^3$ et fournissent chacun quatre orbitales hybrides. Le carbone carbonylé est $\\mathrm{sp}^2$ et en fournit trois, soit onze orbitales hybrides pour l'ensemble des trois carbones.`,
      choiceExplanations: [
        `Ces deux carbones possèdent chacun quatre directions de liaison $\\sigma$.`,
        `Le carbone du carbonyle possède trois directions $\\sigma$ coplanaires et une orbitale $\\mathrm{p}$ non hybridée.`,
        `Deux carbones $\\mathrm{sp}^3$ apportent huit orbitales hybrides et le carbone $\\mathrm{sp}^2$ en apporte trois.`,
        `Un carbone $\\mathrm{sp}^3$ ne conserve aucune orbitale $\\mathrm{p}$ non hybridée ; un carbone $\\mathrm{sp}^2$ n'en conserve qu'une.`,
      ],
    },
  {
      order: 38,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `L'ion hydrogénocarbonate $\\mathrm{HCO_3^-}$ participe au principal système tampon du sang. Autour de son carbone central, les trois atomes d'oxygène définissent trois directions de liaison.`,
      choices: [
        `Le carbone central est décrit comme hybridé $\\mathrm{sp}^2$.`,
        `Ses trois orbitales hybrides sont approximativement coplanaires et séparées par des angles proches de $120^\\circ$.`,
        `Une orbitale $\\mathrm{p}$ non hybridée reste perpendiculaire au plan des orbitales $\\mathrm{sp}^2$.`,
        `Le carbone est nécessairement $\\mathrm{sp}^3$, car l'ion contient au total quatre atomes autres que l'hydrogène.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `L'hybridation se détermine localement autour de l'atome étudié. Le carbone de l'ion hydrogénocarbonate possède trois directions $\\sigma$ et une orbitale $\\mathrm{p}$ non hybridée : il est donc décrit comme $\\mathrm{sp}^2$, avec une organisation trigonale plane.`,
      choiceExplanations: [
        `Trois directions hybrides correspondent à une hybridation $\\mathrm{sp}^2$.`,
        `La disposition trigonale plane maximise l'écartement des trois orbitales hybrides.`,
        `L'hybridation $\\mathrm{sp}^2$ n'emploie que deux des trois orbitales $\\mathrm{p}$ de valence.`,
        `Il faut compter les directions orbitalaires autour du carbone, et non le nombre total d'atomes de la formule brute.`,
      ],
    },
  {
      order: 39,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `La configuration électronique fondamentale du carbone $\\mathrm{Z} = 6$ ne suffit pas, à elle seule, à rendre immédiatement compte des quatre liaisons $\\mathrm{C-H}$ équivalentes et orientées dans l'espace du méthane. À propos de la pertinence du modèle d'hybridation :`,
      choices: [
        `Il relie les orbitales de valence d'un atome au nombre, à l'équivalence et à l'orientation de ses liaisons.`,
        `Il permet de représenter dans le méthane quatre orbitales $\\mathrm{sp}^3$ équivalentes portant chacune un électron célibataire avant la formation des liaisons.`,
        `Il fournit la trajectoire exacte de chaque électron autour du noyau de carbone.`,
        `Tous les items précédents sont vrais.`,
      ],
      correctChoiceIndexes: [0, 1],
      explanation:
        `L'hybridation est un modèle de représentation utile pour relier la structure électronique de valence à la géométrie et à l'équivalence des liaisons. Elle ne transforme pas les orbitales en trajectoires précises : une orbitale reste une région de probabilité de présence électronique.`,
      choiceExplanations: [
        `C'est précisément l'intérêt pédagogique du modèle : expliquer simultanément la capacité de liaison et la géométrie.`,
        `Les quatre orbitales $\\mathrm{sp}^3$ équivalentes rendent compte des quatre liaisons $\\mathrm{C-H}$ équivalentes du méthane.`,
        `La mécanique quantique ne décrit pas les électrons par des trajectoires classiques déterminées.`,
        `Le troisième item étant faux, tous les items précédents ne sont pas vrais.`,
      ],
    },
  {
      order: 40,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Dans les milieux acides, notamment dans l'estomac, un proton peut être associé à une molécule d'eau pour former l'ion oxonium $\\mathrm{H_3O^+}$. Autour de l'oxygène, on compte trois liaisons $\\mathrm{O-H}$ et un doublet non liant.`,
      choices: [
        `L'oxygène est décrit comme hybridé $\\mathrm{sp}^3$.`,
        `Trois orbitales $\\mathrm{sp}^3$ participent aux liaisons $\\mathrm{O-H}$ et la quatrième contient le doublet non liant.`,
        `La géométrie moléculaire de $\\mathrm{H_3O^+}$ est pyramidale.`,
        `La molécule est trigonale plane à $120^\\circ$, car seuls les trois atomes d'hydrogène sont visibles autour de l'oxygène.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Les trois liaisons et le doublet non liant occupent quatre directions orbitalaires autour de l'oxygène, compatibles avec une hybridation $\\mathrm{sp}^3$. L'organisation électronique est tétraédrique, mais la géométrie définie par les quatre atomes est pyramidale.`,
      choiceExplanations: [
        `Quatre domaines électroniques autour de l'oxygène correspondent à quatre orbitales hybrides $\\mathrm{sp}^3$.`,
        `Le doublet non liant occupe une orbitale hybride au même titre que les trois doublets liants occupent les trois autres directions.`,
        `Avec trois atomes liés et un doublet non liant, la forme moléculaire est une pyramide trigonale.`,
        `Compter seulement les atomes liés fait oublier le doublet non liant, qui modifie la géométrie.`,
      ],
    },
];
