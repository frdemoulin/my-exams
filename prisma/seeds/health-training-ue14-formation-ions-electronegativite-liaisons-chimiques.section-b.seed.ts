import type { SeedQuestion } from './health-training-ue14.shared';

export const SECTION_B_QUESTIONS: SeedQuestion[] = [
  {
      order: 21,
      difficulty: 'EASY',
      answerFormat: 'SINGLE',
      question: `Concernant la liaison de covalence :`,
      choices: [
        `Elle résulte de la mise en commun de deux électrons célibataires, qui forment un doublet liant commun aux deux atomes.`,
        `Le doublet liant reste exclusivement associé à l'un des deux atomes.`,
        `Une liaison covalente simple correspond à une liaison $\\pi$.`,
        `Tous les doublets électroniques présents dans une molécule participent nécessairement à une liaison.`,
      ],
      correctChoiceIndexes: [0],
      explanation:
        `Il ne faut pas confondre doublet liant, partagé entre deux atomes, et doublet non liant, localisé sur un seul atome.`,
      choiceExplanations: [
        `Chaque atome apporte généralement un électron célibataire ; leur appariement forme un doublet électronique commun.`,
        `Le doublet liant est partagé entre les deux atomes, même s'il peut être davantage attiré par l'atome le plus électronégatif.`,
        `Une liaison covalente simple est une liaison $\\sigma$.`,
        `Certains doublets ne participent à aucune liaison : ce sont les doublets non liants.`,
      ],
    },
  {
      order: 22,
      difficulty: 'EASY',
      answerFormat: 'SINGLE',
      question: `Choisir la(les) proposition(s) exacte(s) :`,
      choices: [
        `Dans le chlorure d'hydrogène $\\mathrm{H-Cl}$, le chlore ne possède aucun doublet non liant.`,
        `Dans l'ammoniac $\\mathrm{NH_{3}}$, l'azote forme trois liaisons covalentes et conserve un doublet non liant.`,
        `Dans la molécule $\\mathrm{O_{2}}$, la double liaison est constituée de deux liaisons $\\sigma$.`,
        `Dans l'acétylène $\\mathrm{H-C\\equiv C-H}$, la liaison triple entre les carbones est constituée de trois liaisons $\\pi$.`,
      ],
      correctChoiceIndexes: [1],
      explanation:
        `Dans l'ammoniac, l'azote forme trois liaisons covalentes $\\mathrm{N-H}$ et conserve un doublet non liant. Une double liaison comprend une liaison $\\sigma$ et une liaison $\\pi$, tandis qu'une triple liaison comprend une liaison $\\sigma$ et deux liaisons $\\pi$.`,
      choiceExplanations: [
        `Le chlore forme une liaison avec l'hydrogène et possède encore trois doublets non liants.`,
        `L'azote possède trois doublets liants $\\mathrm{N-H}$ et un doublet non liant.`,
        `Une double liaison comprend une liaison $\\sigma$ et une liaison $\\pi$.`,
        `Une triple liaison comprend une liaison $\\sigma$ et deux liaisons $\\pi$.`,
      ],
    },
  {
      order: 23,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `Parmi les représentations de Lewis suivantes, lesquelles sont correctes ?`,
      choices: [
        {
          type: 'lewis-atom',
          element: 'C',
          electrons: {
            top: 'single',
            right: 'single',
            bottom: 'single',
            left: 'single',
          },
        },
        {
          type: 'lewis-atom',
          element: 'O',
          electrons: {
            top: 'pair',
            right: 'single',
            bottom: 'single',
            left: 'pair',
          },
        },
        {
          type: 'lewis-atom',
          element: 'N',
          electrons: {
            top: 'pair',
            right: 'single',
            bottom: 'none',
            left: 'single',
          },
        },
        {
          type: 'lewis-atom',
          element: 'Cl',
          electrons: {
            top: 'pair',
            right: 'pair',
            bottom: 'pair',
            left: 'pair',
          },
        },
      ],
      correctChoiceIndexes: [0, 1],
      explanation:
        `Le nombre d'électrons célibataires permet notamment d'anticiper le nombre habituel de liaisons covalentes formées par l'atome.`,
      choiceExplanations: [
        `Le carbone possède quatre électrons de valence, tous représentés comme célibataires.`,
        `L'oxygène possède six électrons de valence : deux doublets et deux électrons célibataires.`,
        `Quatre électrons seulement sont représentés. L'azote en possède cinq : un doublet et trois électrons célibataires.`,
        `Quatre doublets, soit huit électrons, sont représentés. Le chlore neutre possède sept électrons de valence : trois doublets et un électron célibataire.`,
      ],
    },
  {
      order: 24,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Le phosphore $\\mathrm{P}$, de numéro atomique $\\mathrm{Z} = 15$, possède 5 électrons sur sa couche de valence $\\mathrm{M}$. La règle $8 - n$, où $n$ désigne le nombre d'électrons de valence, permet de prévoir son nombre usuel de liaisons covalentes. Chaque liaison $\\mathrm{P-Cl}$ est ici une liaison simple $\\sigma$. Quelles propositions sont exactes ?`,
      choices: [
        `Dans $\\mathrm{PCl_{3}}$, le phosphore forme trois liaisons $\\sigma$ et porte un doublet non liant.`,
        `Dans $\\mathrm{PCl_{3}}$, les cinq électrons de valence du phosphore participent à des liaisons $\\mathrm{P-Cl}$.`,
        `Dans $\\mathrm{PCl_{5}}$, le phosphore forme cinq liaisons $\\sigma$ et ne porte aucun doublet non liant.`,
        `Dans $\\mathrm{PCl_{5}}$, le phosphore respecte strictement la règle de l'octet.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `La règle $8 - n$ permet de prévoir le nombre habituel de liaisons covalentes d'un atome à partir de ses électrons de valence. Elle conduit ici à $8 - 5 = 3$ liaisons pour le phosphore, ce qui correspond à $\\mathrm{PCl_{3}}$, où le phosphore possède également un doublet non liant. Dans $\\mathrm{PCl_{5}}$, il forme toutefois cinq liaisons $\\sigma$ et se trouve entouré de dix électrons : il est dit hypervalent, c'est-à-dire entouré de plus de huit électrons.`,
      choiceExplanations: [
        `La règle $8 - 5 = 3$ prévoit trois liaisons pour le phosphore. Dans $\\mathrm{PCl_{3}}$, les deux électrons restants forment un doublet non liant.`,
        `Trois électrons participent aux liaisons $\\mathrm{P-Cl}$ ; deux constituent le doublet non liant.`,
        `Dans $\\mathrm{PCl_{5}}$, le phosphore est entouré de cinq liaisons simples, donc de cinq liaisons $\\sigma$, sans doublet non liant.`,
        `Dans la représentation de Lewis usuelle de $\\mathrm{PCl_{5}}$, le phosphore est entouré de dix électrons : il constitue une exception à la règle de l'octet.`,
      ],
    },
  {
      order: 25,
      difficulty: 'MEDIUM',
      answerFormat: 'SINGLE',
      question:
        `Concernant l'application des règles du duet et de l'octet dans les représentations de Lewis :`,
      choices: [
        `Dans le méthane $\\mathrm{CH_{4}}$, chaque hydrogène est entouré de deux électrons et le carbone de huit électrons.`,
        `Dans l'ammoniac $\\mathrm{NH_{3}}$, l'azote n'est entouré que de six électrons, puisqu'il forme trois liaisons simples.`,
        `Une liaison covalente double apporte deux électrons au décompte de l'octet de chacun des deux atomes liés.`,
        `Toute structure de Lewis dans laquelle un atome est entouré de plus de huit électrons est nécessairement impossible.`,
      ],
      correctChoiceIndexes: [0],
      explanation:
        `Dans une structure de Lewis, tous les électrons d'une liaison sont comptabilisés autour de chacun des deux atomes liés. Les atomes d'hydrogène tendent vers un duet, tandis que la plupart des éléments courants tendent vers un octet, constitué des doublets liants et non liants. Cette règle permet de vérifier de nombreuses structures, mais elle n'est pas absolue : il existe notamment des espèces déficientes en électrons et des atomes hypervalents.`,
      choiceExplanations: [
        `Chaque liaison $\\mathrm{C-H}$ contient un doublet liant. Chaque hydrogène partage donc deux électrons et respecte la règle du duet, tandis que les quatre liaisons entourent le carbone de huit électrons.`,
        `Les trois liaisons représentent six électrons, mais l'azote possède également un doublet non liant : il est donc entouré de huit électrons.`,
        `Une liaison double comporte deux doublets liants, soit quatre électrons comptabilisés autour de chacun des deux atomes.`,
        `La règle de l'octet comporte des exceptions. Certains atomes, comme le phosphore dans $\\mathrm{PCl_{5}}$, peuvent être hypervalents, donc entourés de plus de huit électrons.`,
      ],
    },
  {
      order: 26,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Concernant la définition et le vocabulaire associés à une liaison de coordination, quelles propositions sont exactes ?`,
      choices: [
        `Une liaison de coordination est également appelée liaison de coordinence ou liaison dative.`,
        `Une fois formée, une liaison de coordination reste physiquement distincte d'une liaison covalente classique et peut toujours être identifiée dans la molécule.`,
        `Le doublet liant provient initialement en totalité d'un doublet non liant porté par l'espèce donneuse.`,
        `Lors de la formation de l'ion ammonium $\\mathrm{NH_{4}^{+}}$, l'ion $\\mathrm{H^{+}}$ joue le rôle de donneur et l'ammoniac celui d'accepteur.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `Une liaison de coordination se forme entre un donneur, porteur d'un doublet non liant, et un accepteur, possédant une orbitale vacante. Sa particularité concerne donc l'origine du doublet liant. Après sa formation, elle est assimilable à une liaison covalente ordinaire : dans $\\mathrm{NH_{4}^{+}}$, les quatre liaisons $\\mathrm{N-H}$ sont équivalentes.`,
      choiceExplanations: [
        `Les expressions liaison de coordination, liaison de coordinence et liaison dative désignent la même notion.`,
        `Une fois formée, une liaison de coordination se comporte comme une liaison covalente classique. Son origine peut être indiquée lors de sa formation, mais elle n'est plus intrinsèquement distinguable des autres liaisons équivalentes de la molécule.`,
        `Les deux électrons du doublet liant sont initialement apportés par la même espèce, appelée donneur de doublet.`,
        `Dans la réaction $\\mathrm{NH_{3} + H^{+} \\rightarrow NH_{4}^{+}}$, l'ammoniac fournit le doublet non liant : il est le donneur, tandis que $\\mathrm{H^{+}}$, qui possède une orbitale vide, est l'accepteur.`,
      ],
    },
  {
      order: 27,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `L'ion ammonium se forme selon la réaction $\\mathrm{NH_{3} + H^{+} \\rightarrow NH_{4}^{+}}$. Concernant la formation et la structure de l'ion ammonium, quelles propositions sont exactes ?`,
      choices: [
        `L'ion $\\mathrm{H^{+}}$ fournit un doublet non liant à l'azote de l'ammoniac pour former la quatrième liaison $\\mathrm{N-H}$.`,
        `Après la formation de $\\mathrm{NH_{4}^{+}}$, la charge positive reste localisée sur l'atome d'hydrogène initialement apporté par $\\mathrm{H^{+}}$.`,
        `Une fois l'ion $\\mathrm{NH_{4}^{+}}$ formé, ses quatre liaisons $\\mathrm{N-H}$ sont équivalentes et la liaison issue de la coordination ne peut plus être distinguée des autres.`,
        `La charge $+$ correspond à la charge globale de l'ion ammonium et ne peut pas être attribuée à un atome d'hydrogène particulier.`,
      ],
      correctChoiceIndexes: [2, 3],
      explanation:
        `Lors de la réaction, l'azote de l'ammoniac fournit son doublet non liant à $\\mathrm{H^{+}}$. La particularité de la liaison de coordination concerne uniquement son mode de formation. Dans l'ion obtenu, les quatre liaisons $\\mathrm{N-H}$ sont indissociables et la charge positive caractérise l'ensemble de $\\mathrm{NH_{4}^{+}}$.`,
      choiceExplanations: [
        `L'ion $\\mathrm{H^{+}}$ ne possède aucun électron. Le doublet non liant est fourni par l'azote de $\\mathrm{NH_{3}}$, qui joue le rôle de donneur.`,
        `Une fois l'ion formé, l'hydrogène provenant initialement de $\\mathrm{H^{+}}$ ne se distingue plus des trois autres hydrogènes.`,
        `Après la formation de l'ion ammonium, les quatre liaisons $\\mathrm{N-H}$ sont équivalentes. La liaison formée initialement par coordination se comporte comme les autres liaisons covalentes.`,
        `Le symbole $+$, placé à l'extérieur de la formule $\\mathrm{NH_{4}^{+}}$, désigne la charge globale de l'ion. Elle ne reste pas portée par un hydrogène identifiable.`,
      ],
    },
  {
      order: 28,
      difficulty: 'MEDIUM',
      answerFormat: 'SINGLE',
      question:
        `Concernant la définition et le vocabulaire associés aux complexes de coordination :`,
      choices: [
        `Un complexe de coordination comprend une espèce centrale, souvent un ion métallique, entourée d'espèces donneuses de doublets appelées ligands.`,
        `Le terme ligand désigne la liaison de coordination qui relie une molécule à l'ion métallique central.`,
        `Le mot complexe indique nécessairement que l'espèce possède une structure compliquée comportant plusieurs ions métalliques.`,
        `Dans un complexe formé d'un ion métallique entouré de molécules d'ammoniac, le métal est le donneur de doublets et l'ammoniac l'accepteur.`,
      ],
      correctChoiceIndexes: [0],
      explanation:
        `Un complexe de coordination associe un centre accepteur, souvent métallique, à un ou plusieurs ligands donneurs de doublets. Il ne faut donc pas confondre le ligand avec la liaison qui l'unit au centre, ni interpréter le mot complexe dans son sens courant de « structure compliquée ». Cette organisation peut être illustrée par un ion métallique central entouré de quatre molécules d'ammoniac.`,
      choiceExplanations: [
        `L'espèce centrale, fréquemment un ion métallique, accepte les doublets non liants fournis par les ligands qui l'entourent.`,
        `Le ligand est une espèce chimique liée au centre métallique, et non la liaison elle-même. La liaison formée est une liaison de coordination.`,
        `Le mot complexe est ici un terme de vocabulaire chimique : il ne signifie pas simplement « compliqué ». Un complexe peut ne comporter qu'un seul ion métallique central.`,
        `Les rôles sont inversés : l'ammoniac donne le doublet non liant de son azote, tandis que l'ion métallique possède des orbitales vacantes et joue le rôle d'accepteur.`,
      ],
    },
  {
      order: 29,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Lors de la formation de l'ion ferreux $\\mathrm{Fe^{2+}}$, l'atome de fer perd deux électrons. Dans une représentation simplifiée, sa configuration électronique de valence est représentée ainsi :`,
      questionDiagram: {
        type: 'quantum-boxes',
        orbitals: [
          { label: '4\\mathrm{s}', boxes: ['empty'] },
          { label: '3\\mathrm{d}', boxes: ['pair', 'pair', 'pair', 'empty', 'empty'] },
          { label: '4\\mathrm{p}', boxes: ['empty', 'empty', 'empty'] },
        ],
      },
      choices: [
        `La formation de $\\mathrm{Fe^{2+}}$ à partir de l'atome de fer correspond notamment à la perte des deux électrons de la sous-couche $4\\mathrm{s}$.`,
        `Le diagramme ne comporte que deux cases quantiques vacantes ; l'ion $\\mathrm{Fe^{2+}}$ ne peut donc former que deux liaisons de coordination.`,
        `Quatre azotes de l'hème et un azote d'une histidine occupent cinq positions de coordination autour du fer, laissant une sixième position disponible pour le dioxygène.`,
        `La fixation du dioxygène nécessite la rupture préalable de l'une des quatre liaisons entre le fer et les azotes de l'hème.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `Dans cette représentation pédagogique, les orbitales vacantes de $\\mathrm{Fe^{2+}}$ peuvent recevoir les doublets non liants fournis par les ligands. Cette représentation est mise en relation avec les six liaisons de coordination du fer dans l'hémoglobine : cinq assurent son intégration dans l'hème et son rattachement à la globine, tandis que la sixième permet la fixation réversible du dioxygène.`,
      choiceExplanations: [
        `L'atome de fer possède deux électrons dans la sous-couche $4\\mathrm{s}$. Leur perte conduit à l'ion $\\mathrm{Fe^{2+}}$, de configuration électronique $[\\mathrm{Ar}]\\,3\\mathrm{d}^{6}$.`,
        `L'item ne considère que les deux cases vacantes de la sous-couche $3\\mathrm{d}$. Dans le modèle simplifié fourni, les cases vacantes de $4\\mathrm{s}$ et de $4\\mathrm{p}$ sont également représentées et mises en relation avec la formation des six liaisons de coordination.`,
        `Le fer est lié de manière stable à quatre azotes de l'hème et à l'azote d'une histidine de la globine. La sixième position de coordination peut accueillir transitoirement une molécule de $\\mathrm{O_{2}}$.`,
        `Les quatre liaisons entre le fer et les azotes de l'hème restent en place. Le dioxygène se fixe sur la sixième position de coordination disponible.`,
      ],
    },
  {
      order: 30,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `On considère une liaison covalente entre deux atomes $\\mathrm{A}$ et $\\mathrm{B}$, avec $\\chi(\\mathrm{A}) < \\chi(\\mathrm{B})$. Le moment dipolaire de cette liaison est noté $\\vec{\\mu}_{\\mathrm{A-B}}$. Quelles propositions sont exactes ?`,
      choices: [
        `L'atome $\\mathrm{A}$, moins électronégatif, porte une charge partielle $\\delta^{+}$, tandis que l'atome $\\mathrm{B}$ porte une charge partielle $\\delta^{-}$.`,
        `Selon la convention chimique retenue ici, le vecteur $\\vec{\\mu}_{\\mathrm{A-B}}$ est orienté de l'atome $\\mathrm{B}$ vers l'atome $\\mathrm{A}$.`,
        `La norme du moment dipolaire de liaison peut s'écrire $\\mu = \\delta d$, où $d$ est la longueur de la liaison.`,
        `La présence de charges partielles $\\delta^{+}$ et $\\delta^{-}$ implique que l'ensemble formé par $\\mathrm{A}$ et $\\mathrm{B}$ possède nécessairement une charge électrique globale non nulle.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `Une différence d'électronégativité déplace partiellement le doublet liant vers l'atome le plus électronégatif. La liaison devient alors polarisée et se comporte comme un dipôle. Le moment dipolaire est une grandeur vectorielle portée par l'axe de la liaison, orientée de $\\delta^{+}$ vers $\\delta^{-}$ dans la convention chimique retenue ici. Sa norme s'exprime en $\\mathrm{C \\cdot m}$ ou, plus couramment en chimie, en debyes.`,
      choiceExplanations: [
        `Le doublet liant est davantage attiré par l'atome le plus électronégatif $\\mathrm{B}$, qui acquiert une charge partielle $\\delta^{-}$. L'atome $\\mathrm{A}$ porte alors une charge partielle $\\delta^{+}$.`,
        `Dans la convention chimique retenue à Reims, le vecteur moment dipolaire est orienté du pôle positif vers le pôle négatif, donc de $\\mathrm{A}$ vers $\\mathrm{B}$.`,
        `La norme du moment dipolaire dépend de la valeur absolue $\\delta$ des charges partielles et de leur distance $d$ : $\\mu = \\delta d$.`,
        `Les deux charges partielles sont opposées et de même valeur absolue. L'édifice peut donc rester électriquement neutre tout en possédant une liaison polarisée.`,
      ],
    },
  {
      order: 31,
      difficulty: 'MEDIUM',
      answerFormat: 'SINGLE',
      question:
        `Le moment dipolaire de la molécule de bromure d'hydrogène a pour valeur $\\mu_{\\mathrm{H-Br}} = 2{,}8 \\times 10^{-30}\\ \\mathrm{C \\cdot m}$. Sachant que la liaison $\\mathrm{H-Br}$ a pour longueur $140\\ \\mathrm{pm}$, la valeur absolue commune $\\delta$ des charges partielles portées par les atomes $\\mathrm{H}$ et $\\mathrm{Br}$ est égale, avec deux chiffres significatifs, à :`,
      choices: [
        `$2{,}0 \\times 10^{-23}\\ \\mathrm{C}$.`,
        `$2{,}0 \\times 10^{-20}\\ \\mathrm{C}$.`,
        `$2{,}0 \\times 10^{-18}\\ \\mathrm{C}$.`,
        `$2{,}0 \\times 10^{-19}\\ \\mathrm{C}$.`,
      ],
      correctChoiceIndexes: [1],
      explanation:
        `La norme du moment dipolaire vérifie $\\mu = \\delta d$, d'où $\\delta = \\dfrac{\\mu}{d}$. La longueur doit d'abord être convertie en mètres : $140\\ \\mathrm{pm} = 140 \\times 10^{-12}\\ \\mathrm{m} = 1{,}40 \\times 10^{-10}\\ \\mathrm{m}$. On obtient alors $\\delta = \\dfrac{2{,}8 \\times 10^{-30}}{1{,}40 \\times 10^{-10}} = 2{,}0 \\times 10^{-20}\\ \\mathrm{C}$.`,
      choiceExplanations: [
        `Cette valeur correspond à une erreur de manipulation des puissances de dix lors du calcul de $\\delta = \\mu / d$.`,
        `C'est la bonne réponse : après conversion de $140\\ \\mathrm{pm}$ en $1{,}40 \\times 10^{-10}\\ \\mathrm{m}$, on trouve $\\delta = 2{,}0 \\times 10^{-20}\\ \\mathrm{C}$.`,
        `Cette valeur est trop grande ; elle traduit notamment une erreur de conversion du picomètre ou de calcul d'ordre de grandeur.`,
        `Cette valeur est proche mais incorrecte ; elle résulte d'une erreur sur les puissances de dix lors du quotient.`,
      ],
    },
  {
      order: 32,
      difficulty: 'MEDIUM',
      answerFormat: 'SINGLE',
      question:
        `On rappelle la relation approchée : $1\\ \\mathrm{C \\cdot m} \\approx 3{,}0 \\times 10^{29}\\ \\mathrm{D}$. Un moment dipolaire de liaison vaut $\\mu = 7{,}2 \\times 10^{-30}\\ \\mathrm{C \\cdot m}$. Sa valeur en debyes, avec deux chiffres significatifs, est égale à :`,
      choices: [
        `$0{,}22\\ \\mathrm{D}$.`,
        `$2{,}2\\ \\mathrm{D}$.`,
        `$2{,}4\\ \\mathrm{D}$.`,
        `$22\\ \\mathrm{D}$.`,
      ],
      correctChoiceIndexes: [1],
      explanation:
        `On convertit directement en debyes : $\\mu_{\\mathrm{D}} = 3{,}0 \\times 10^{29} \\times 7{,}2 \\times 10^{-30} = (3{,}0 \\times 7{,}2) \\times 10^{-1} = 21{,}6 \\times 10^{-1} = 2{,}16\\ \\mathrm{D}$. Avec deux chiffres significatifs, on obtient $\\mu_{\\mathrm{D}} \\approx 2{,}2\\ \\mathrm{D}$.`,
      choiceExplanations: [
        `Cette valeur correspond à une erreur sur la puissance de dix lors de la conversion en debyes.`,
        `C'est la bonne réponse : $\\mu = 2{,}16\\ \\mathrm{D}$, soit $2{,}2\\ \\mathrm{D}$ avec deux chiffres significatifs.`,
        `Cette valeur résulte d'un calcul ou d'un arrondi incorrect.`,
        `Cette valeur correspond à une erreur sur la puissance de dix lors de la conversion.`,
      ],
    },
  {
      order: 33,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `Concernant la mésomérie, quelles propositions sont exactes ?`,
      choices: [
        `La mésomérie traduit une délocalisation de plusieurs électrons au sein d'un même édifice, sans déplacement des noyaux atomiques.`,
        `Les différentes formes mésomères sont des molécules distinctes qui se transforment rapidement les unes dans les autres.`,
        `Dans une liaison peptidique, la mésomérie confère à la liaison $\\mathrm{C-N}$ un caractère partiel de double liaison, ce qui limite sa rotation et favorise la planéité du groupement.`,
        `Lors du passage d'une forme mésomère à une autre, seuls les électrons célibataires peuvent être déplacés ; les doublets liants et non liants restent fixes.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `Les différentes écritures mésomères sont plusieurs représentations de Lewis d'une même structure réelle, dans laquelle certains électrons sont délocalisés. Cette délocalisation stabilise l'édifice et peut modifier les propriétés des liaisons : dans une liaison peptidique, la liaison $\\mathrm{C-N}$ n'est ni totalement simple ni totalement double.`,
      choiceExplanations: [
        `La mésomérie correspond à une délocalisation électronique : plusieurs doublets peuvent être redistribués, tandis que l'enchaînement des atomes reste inchangé.`,
        `Les formes mésomères, aussi appelées formes canoniques, ne sont pas des molécules séparées en équilibre. La structure réelle est un hybride de résonance.`,
        `Dans la liaison peptidique, les électrons sont délocalisés sur le groupement $\\mathrm{O-C-N}$. La liaison $\\mathrm{C-N}$ acquiert ainsi un caractère partiel de double liaison, qui freine sa rotation et contribue à la planéité locale.`,
        `La mésomérie met précisément en jeu le déplacement de doublets liants ou non liants, et non le déplacement des atomes.`,
      ],
    },
  {
      order: 36,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Le protoxyde d'azote $\\mathrm{N_{2}O}$ est un gaz utilisé en médecine pour ses propriétés antalgiques et sédatives. Sa structure électronique peut être représentée par les deux formes mésomères suivantes : [[QUESTION_DIAGRAM]] Concernant ces représentations du protoxyde d'azote, quelles propositions sont exactes ?`,
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
        `Les deux formes conservent le même enchaînement atomique $\\mathrm{N-N-O}$ et diffèrent uniquement par la répartition des électrons.`,
        `Dans les deux formes représentées, l'atome d'azote central porte une charge formelle positive.`,
        `La double flèche indique un équilibre chimique entre deux molécules distinctes qui se transforment continuellement l'une en l'autre.`,
        `La molécule réelle adopte successivement l'une puis l'autre de ces deux structures de Lewis.`,
      ],
      correctChoiceIndexes: [0, 1],
      explanation:
        `Les formes mésomères sont plusieurs représentations de Lewis d'une même molécule. Elles conservent le même squelette atomique, mais proposent différentes localisations des doublets et des charges formelles. La structure réelle est intermédiaire entre ces représentations : les électrons concernés sont dits délocalisés.`,
      choiceExplanations: [
        `Lorsqu'on passe d'une forme mésomère à l'autre, les noyaux atomiques ne sont pas déplacés : seul le positionnement des doublets électroniques change.`,
        `Dans chacune des deux écritures, l'azote central possède une charge formelle $+1$.`,
        `Les deux formes mésomères ne sont pas deux espèces chimiques distinctes en équilibre. La double flèche traduit ici la mésomérie, et non une réaction réversible.`,
        `La molécule réelle n'oscille pas entre les deux dessins. Sa structure correspond à un hybride de résonance, dans lequel certains électrons sont délocalisés sur le groupement $\\mathrm{N-N-O}$.`,
      ],
    },
  {
      order: 37,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `On appelle énergie de liaison l'énergie associée à la rupture ou à la formation d'une liaison covalente. Concernant cette grandeur, quelles propositions sont exactes ?`,
      choices: [
        `L'énergie de dissociation d'une liaison correspond à l'énergie nécessaire pour rompre une mole de liaisons considérées, généralement à l'état gazeux.`,
        `Elle s'exprime couramment en $\\mathrm{kJ \\cdot mol^{-1}}$.`,
        `La rupture d'une liaison libère de l'énergie : son enthalpie de dissociation est donc négative.`,
        `Plus l'énergie de liaison est élevée, plus la liaison est facile à rompre.`,
      ],
      correctChoiceIndexes: [0, 1],
      explanation:
        `Rompre une liaison nécessite de fournir de l'énergie, tandis que sa formation libère approximativement la même quantité d'énergie. Les énergies tabulées sont souvent des valeurs moyennes : elles peuvent varier légèrement selon l'environnement chimique de la liaison. Une liaison covalente peut notamment être rompue sous l'action d'une forte quantité d'énergie, par exemple un rayonnement ou une température élevée.`,
      choiceExplanations: [
        `Une énergie de liaison caractérise généralement la rupture d'une mole de liaisons dans des espèces gazeuses.`,
        `L'unité couramment utilisée est le $\\mathrm{kJ \\cdot mol^{-1}}$.`,
        `La rupture d'une liaison nécessite un apport d'énergie : elle est endothermique et son enthalpie est positive. La formation de la liaison correspondante libère de l'énergie.`,
        `Une énergie de liaison élevée caractérise une liaison plus forte, donc plus difficile à rompre.`,
      ],
    },
  {
      order: 38,
      difficulty: 'EASY',
      answerFormat: 'SINGLE',
      question:
        `Le peroxyde d'hydrogène $\\mathrm{H_{2}O_{2}}$ est un agent oxydant utilisé dans certains procédés d'éclaircissement dentaire. Sa formule développée est $\\mathrm{H-O-O-H}$. On donne les énergies moyennes de liaison : $E_{\\mathrm{O-H}} = 460\\ \\mathrm{kJ \\cdot mol^{-1}}$ et $E_{\\mathrm{O-O}} = 150\\ \\mathrm{kJ \\cdot mol^{-1}}$. En supposant les énergies additives, quelle énergie faut-il fournir pour rompre toutes les liaisons contenues dans $0{,}50\\ \\mathrm{mol}$ de molécules de $\\mathrm{H_{2}O_{2}}$ gazeux ?`,
      choices: [`305 kJ`, `460 kJ`, `535 kJ`, `1070 kJ`],
      correctChoiceIndexes: [2],
      explanation:
        `Pour estimer l'énergie nécessaire à la dissociation complète d'une molécule, il faut d'abord identifier et compter chacune de ses liaisons, puis additionner leurs énergies. Le résultat est ensuite adapté à la quantité de matière considérée. Il s'agit ici d'une approximation fondée sur des énergies moyennes de liaison.`,
      choiceExplanations: [
        `Une mole de molécules de $\\mathrm{H_{2}O_{2}}$ contient deux liaisons $\\mathrm{O-H}$ et une liaison $\\mathrm{O-O}$, soit une énergie totale de $2 \\times 460 + 150 = 1070\\ \\mathrm{kJ}$. Pour $0{,}50\\ \\mathrm{mol}$, il faut donc fournir $535\\ \\mathrm{kJ}$.`,
        `La valeur $460\\ \\mathrm{kJ}$ correspond à l'énergie d'une seule mole de liaisons $\\mathrm{O-H}$, pas à la dissociation complète de $0{,}50\\ \\mathrm{mol}$ de peroxyde d'hydrogène.`,
        `Une molécule de $\\mathrm{H_{2}O_{2}}$ comporte deux liaisons $\\mathrm{O-H}$ et une liaison $\\mathrm{O-O}$. Pour une mole de molécules, l'énergie vaut $2E_{\\mathrm{O-H}} + E_{\\mathrm{O-O}} = 2 \\times 460 + 150 = 1070\\ \\mathrm{kJ}$. Pour $0{,}50\\ \\mathrm{mol}$, on obtient $0{,}50 \\times 1070 = 535\\ \\mathrm{kJ}$.`,
        `La valeur $1070\\ \\mathrm{kJ}$ correspond à une mole entière de molécules de $\\mathrm{H_{2}O_{2}}$, alors que l'énoncé porte sur $0{,}50\\ \\mathrm{mol}$.`,
      ],
    },
  {
      order: 39,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Le benzène $\\mathrm{C_{6}H_{6}}$ peut être représenté par deux formes de Kekulé comportant une alternance de liaisons simples et doubles. Dans la molécule réelle, les six électrons $\\pi$ sont délocalisés sur l'ensemble du cycle. [[QUESTION_DIAGRAM]] Concernant les liaisons carbone-carbone du benzène, quelles propositions sont exactes ?`,
      questionDiagram: {
        type: 'benzene-kekule',
      },
      choices: [
        `Les deux formes mésomères conservent le même cycle formé de six atomes de carbone et ne diffèrent que par la répartition des électrons $\\pi$.`,
        `Dans la molécule réelle, le cycle comporte trois liaisons $\\mathrm{C-C}$ simples de longueur $1{,}54\\ \\text{Å}$ et trois liaisons $\\mathrm{C=C}$ doubles de longueur $1{,}35\\ \\text{Å}$.`,
        `Les six liaisons $\\mathrm{C-C}$ du cycle sont équivalentes et présentent une longueur intermédiaire, voisine de $1{,}40\\ \\text{Å}$.`,
        `Le cercle dessiné à l'intérieur de l'hexagone représente six liaisons doubles indépendantes entre les atomes de carbone.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `Les formes de Kekulé sont plusieurs représentations de Lewis d'une même molécule. Le benzène réel n'oscille pas entre elles : il correspond à un hybride de résonance dans lequel les six électrons $\\pi$ sont délocalisés sur les six atomes de carbone. Cette délocalisation rend toutes les liaisons $\\mathrm{C-C}$ équivalentes et contribue à la stabilité particulière du cycle aromatique.`,
      choiceExplanations: [
        `Le squelette des six atomes de carbone reste inchangé. Seule la localisation apparente des trois doublets $\\pi$ varie entre les deux formes mésomères.`,
        `Dans le benzène réel, il n'existe pas trois liaisons simples distinctes et trois liaisons doubles distinctes. Les six liaisons $\\mathrm{C-C}$ sont équivalentes.`,
        `Leur longueur est intermédiaire entre celle d'une liaison simple $\\mathrm{C-C}$ et celle d'une liaison double $\\mathrm{C=C}$, ce qui traduit leur caractère intermédiaire.`,
        `Le cercle symbolise la délocalisation des six électrons $\\pi$ sur tout le cycle, et non six liaisons doubles localisées.`,
      ],
    },
  {
      order: 40,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Concernant la réaction présentée, quelles propositions sont exactes ?`,
      choices: [
        `Lors de la rupture homolytique, chacun des deux fragments récupère un électron du doublet liant.`,
        `Le point $\\bullet$ porté par $\\mathrm{HO^{\\bullet}}$ indique que cette espèce possède une charge négative.`,
        `Le radical hydroxyle est une espèce très réactive susceptible d'endommager des molécules biologiques, notamment l'ADN.`,
        `Les radicaux libres formés sont généralement stables et persistent longtemps dans la cellule.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `La rupture d'une liaison covalente nécessite un apport d'énergie. Lorsqu'elle est homolytique, chaque fragment récupère un électron du doublet liant et devient radicalaire. En radiothérapie, la radiolyse de l'eau peut ainsi produire des radicaux très réactifs, capables de participer aux dommages provoqués dans les cellules irradiées.`,
      choiceExplanations: [
        `Lors d'une rupture homolytique, les deux électrons de la liaison sont répartis entre les deux fragments : chacun possède alors un électron célibataire.`,
        `Le point représente un électron non apparié, et non une charge électrique. Il ne faut pas confondre $\\mathrm{HO^{\\bullet}}$, radical hydroxyle, avec $\\mathrm{HO^{-}}$, ion hydroxyde.`,
        `Le radical hydroxyle est extrêmement réactif et peut provoquer des altérations de molécules cellulaires, notamment des lésions de l'ADN.`,
        `Les radicaux libres ont généralement une durée de vie courte, précisément en raison de leur forte réactivité.`,
      ],
    },
  {
      order: 41,
      difficulty: 'MEDIUM',
      answerFormat: 'SINGLE',
      question: `Quelle énergie faut-il fournir pour rompre une liaison $\\mathrm{O-H}$ par molécule dans $2{,}5\\ \\mathrm{mmol}$ de molécules d'eau ?`,
      choices: [`1,15 J`, `1,15 kJ`, `2,30 kJ`, `115 kJ`],
      correctChoiceIndexes: [1],
      explanation:
        `La rupture d'une liaison covalente nécessite un apport d'énergie. Lorsqu'elle est homolytique, chaque fragment récupère un électron du doublet liant et devient radicalaire. En radiothérapie, la radiolyse de l'eau peut ainsi produire des radicaux très réactifs, capables de participer aux dommages provoqués dans les cellules irradiées.`,
      choiceExplanations: [
        `La quantité de liaisons $\\mathrm{O-H}$ rompues est égale à la quantité de molécules considérées, puisqu'une seule liaison est rompue par molécule : $n = 2{,}5\\ \\mathrm{mmol} = 2{,}5 \\times 10^{-3}\\ \\mathrm{mol}$. L'énergie nécessaire vaut donc $E = nE_{\\mathrm{O-H}} = 2{,}5 \\times 10^{-3} \\times 460 = 1{,}15\\ \\mathrm{kJ}$, et non $1{,}15\\ \\mathrm{J}$.`,
        `La quantité de liaisons $\\mathrm{O-H}$ rompues est égale à la quantité de molécules considérées, puisqu'une seule liaison est rompue par molécule : $n = 2{,}5\\ \\mathrm{mmol} = 2{,}5 \\times 10^{-3}\\ \\mathrm{mol}$. L'énergie nécessaire vaut donc $E = nE_{\\mathrm{O-H}} = 2{,}5 \\times 10^{-3} \\times 460 = 1{,}15\\ \\mathrm{kJ}$.`,
        `La valeur $2{,}30\\ \\mathrm{kJ}$ correspondrait à la rupture des deux liaisons $\\mathrm{O-H}$ de chaque molécule d'eau.`,
        `La quantité de matière $2{,}5\\ \\mathrm{mmol}$ doit être convertie en moles avant le calcul, soit $2{,}5 \\times 10^{-3}\\ \\mathrm{mol}$.`,
      ],
    },
  {
      order: 50,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Le monoxyde d'azote $\\mathrm{NO^{\\bullet}}$ est une molécule produite notamment par l'endothélium vasculaire ; il participe à la relaxation des vaisseaux sanguins. On donne $\\mathrm{Z}(\\mathrm{N}) = 7$ et $\\mathrm{Z}(\\mathrm{O}) = 8$. Concernant sa structure électronique, quelles propositions sont exactes ?`,
      choices: [
        `La molécule neutre $\\mathrm{NO^{\\bullet}}$ possède au total 11 électrons de valence.`,
        `Tous les électrons de valence de $\\mathrm{NO^{\\bullet}}$ peuvent être regroupés en doublets dans une représentation de Lewis.`,
        `Le point $\\bullet$ signale la présence d'un électron célibataire et non une charge électrique négative.`,
        `Le monoxyde d'azote est nécessairement un anion, car l'oxygène est plus électronégatif que l'azote.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `L'azote possède cinq électrons de valence et l'oxygène en possède six, soit 11 électrons de valence au total. Ce nombre impair impose la présence d'au moins un électron non apparié : $\\mathrm{NO^{\\bullet}}$ est donc un radical. Le symbole $\\bullet$ ne représente pas une charge, et une espèce radicalaire peut être électriquement neutre.`,
      choiceExplanations: [
        `L'azote apporte cinq électrons de valence et l'oxygène six : $5 + 6 = 11$.`,
        `Un nombre impair d'électrons ne permet pas de les apparier tous : il subsiste au moins un électron célibataire.`,
        `Le point est la notation d'un électron non apparié. Une charge négative serait indiquée par le symbole $-$ en exposant.`,
        `Une différence d'électronégativité peut polariser une liaison, mais elle ne transforme pas automatiquement la molécule neutre en anion.`,
      ],
    },
];
