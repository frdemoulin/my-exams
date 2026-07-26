import type { SeedQuestion } from './health-training-ue14.shared';

export const SECTION_B_QUESTIONS: SeedQuestion[] = [
  {
    order: 11,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos des interactions intermoléculaires :`,
    choices: [
      `Elles s'exercent entre des molécules distinctes.`,
      `Elles correspondent exclusivement aux liaisons covalentes présentes à l'intérieur d'une molécule.`,
      `Elles sont généralement plus faibles qu'une liaison covalente.`,
      `Elles nécessitent toujours la présence d'ions.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Les interactions intermoléculaires assurent une partie de la cohésion entre les molécules sans modifier leur enchaînement covalent. Elles sont généralement beaucoup plus faibles que les liaisons intramoléculaires, mais leur accumulation peut produire des effets importants.`,
    choiceExplanations: [
      `Le préfixe « inter- » indique que ces interactions s'établissent entre plusieurs molécules.`,
      `Une liaison covalente reliant deux atomes d'une même molécule est une liaison intramoléculaire.`,
      `Il faut habituellement moins d'énergie pour séparer des molécules que pour rompre leurs liaisons covalentes.`,
      `Des molécules électriquement neutres, polaires ou apolaires, peuvent subir des interactions intermoléculaires.`,
    ],
  },
  {
    order: 12,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant les interactions de Van der Waals entre molécules apolaires :`,
    choices: [
      `Elles peuvent résulter de fluctuations momentanées de la répartition des électrons.`,
      `Elles nécessitent que chaque molécule possède un dipôle permanent.`,
      `Un dipôle instantané peut induire un dipôle dans une molécule voisine.`,
      `Elles sont toujours plus fortes qu'une liaison covalente.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Même dans une molécule apolaire, le nuage électronique n'est pas parfaitement immobile. Une répartition momentanément dissymétrique crée un dipôle instantané, capable de polariser une molécule voisine et de produire une faible attraction.`,
    choiceExplanations: [
      `Le déplacement permanent des électrons n'est pas nécessaire : une fluctuation instantanée suffit.`,
      `Un dipôle permanent caractérise une molécule polaire, mais les molécules apolaires subissent également des interactions de Van der Waals.`,
      `La polarisation temporaire d'une molécule peut provoquer une polarisation de même nature chez sa voisine.`,
      `Ces interactions sont bien plus faibles qu'une liaison covalente prise isolément.`,
    ],
  },
  {
    order: 13,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos de l'intensité et des effets des interactions de Van der Waals :`,
    choices: [
      `Elles sont faibles lorsqu'elles sont considérées individuellement.`,
      `Lorsqu'elles sont très nombreuses, elles peuvent contribuer fortement à la cohésion de la matière.`,
      `Elles sont totalement absentes dans les substances apolaires.`,
      `Elles reposent nécessairement sur l'attraction entre deux charges électriques entières.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Une interaction de Van der Waals isolée est faible. Dans une macromolécule, une membrane ou un ensemble de longues chaînes carbonées, leur très grand nombre peut néanmoins produire une cohésion notable.`,
    choiceExplanations: [
      `Leur faible intensité individuelle les distingue notamment des liaisons covalentes.`,
      `L'addition d'un grand nombre d'interactions faibles peut avoir un effet macroscopique important.`,
      `Elles sont précisément essentielles pour expliquer la cohésion entre molécules apolaires.`,
      `Elles mettent en jeu des dipôles partiels et souvent transitoires, non des charges entières obligatoires.`,
    ],
  },
  {
    order: 14,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Les chaînes hydrocarbonées des lipides membranaires comportent de nombreuses liaisons $\\mathrm{C-C}$ et $\\mathrm{C-H}$. Dans le modèle simplifié du cours :`,
    choices: [
      `Les interactions de Van der Waals entre les chaînes participent à la cohésion de la membrane plasmique.`,
      `Les chaînes de deux lipides voisins sont reliées entre elles par de nouvelles liaisons covalentes permanentes.`,
      `Une surface de contact importante entre les chaînes peut multiplier les interactions faibles.`,
      `Seules les molécules d'eau peuvent établir des interactions de Van der Waals.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Les longues chaînes apolaires peuvent rester proches sur une grande surface. De nombreuses interactions de Van der Waals s'établissent alors entre elles et participent à la cohésion de la membrane, sans créer de nouvelles liaisons covalentes entre les lipides.`,
    choiceExplanations: [
      `Le cours cite la membrane plasmique comme exemple d'effet cumulatif de nombreuses interactions faibles entre chaînes carbonées.`,
      `Les lipides restent des molécules distinctes : leur association ne suppose pas la formation de liaisons covalentes entre leurs chaînes.`,
      `Plus le nombre d'atomes proches est important, plus le nombre d'interactions possibles augmente.`,
      `Les interactions de Van der Waals concernent toutes les molécules, y compris les molécules apolaires.`,
    ],
  },
  {
    order: 15,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant les interactions entre deux molécules polaires :`,
    choices: [
      `Le pôle partiellement positif d'une molécule peut attirer le pôle partiellement négatif d'une autre.`,
      `Les molécules polaires possèdent un dipôle permanent.`,
      `Deux pôles portant des charges partielles de même signe s'attirent préférentiellement.`,
      `Une interaction dipôle-dipôle transforme nécessairement les deux molécules en une seule molécule covalente.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Les molécules polaires présentent une répartition permanente et dissymétrique des charges. Elles peuvent s'orienter de façon à rapprocher un pôle $\\delta^{+}$ d'un pôle $\\delta^{-}$, ce qui produit une attraction dipôle-dipôle.`,
    choiceExplanations: [
      `Des charges partielles de signes opposés s'attirent.`,
      `Un moment dipolaire moléculaire non nul correspond à un dipôle permanent.`,
      `Deux pôles de même signe se repoussent plutôt qu'ils ne s'attirent.`,
      `L'interaction reste intermoléculaire : elle n'implique pas la formation obligatoire d'une liaison covalente.`,
    ],
  },
  {
    order: 16,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant l'influence des interactions intermoléculaires sur les changements d'état :`,
    choices: [
      `Des interactions plus fortes entre les molécules tendent à augmenter la température de vaporisation.`,
      `La vaporisation nécessite de séparer les molécules les unes des autres.`,
      `Faire bouillir un liquide impose de rompre toutes les liaisons covalentes de ses molécules.`,
      `Une augmentation de la cohésion intermoléculaire abaisse nécessairement la température de fusion.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Lors d'un changement d'état physique, les molécules sont séparées ou réorganisées, mais leur structure covalente est généralement conservée. Plus leur cohésion est forte, plus il faut fournir d'énergie pour les éloigner, ce qui tend à élever les températures de fusion et de vaporisation.`,
    choiceExplanations: [
      `Une attraction plus forte entre les molécules exige davantage d'énergie pour passer à l'état gazeux.`,
      `La vaporisation éloigne fortement les molécules sans détruire leur identité chimique.`,
      `L'ébullition est un changement d'état physique et ne rompt pas normalement les liaisons covalentes internes.`,
      `Une cohésion accrue tend au contraire à augmenter les températures de changement d'état.`,
    ],
  },
  {
    order: 17,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `Le butane et la propanone, ou acétone, ont des masses molaires voisines. Pourtant, la température de vaporisation de l'acétone est nettement plus élevée. Cette différence peut s'expliquer car :`,
    choices: [
      `L'acétone est polaire, alors que le butane est apolaire.`,
      `Des interactions dipôle-dipôle s'ajoutent entre les molécules d'acétone.`,
      `Le butane possède les interactions intermoléculaires les plus fortes parce qu'il est apolaire.`,
      `Deux substances de même masse molaire ont nécessairement la même température de vaporisation.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `À masses molaires comparables, la nature des interactions intermoléculaires devient déterminante. Le groupe carbonyle de l'acétone lui confère un dipôle permanent, donc des interactions dipôle-dipôle absentes dans le butane apolaire.`,
    choiceExplanations: [
      `Le groupe $\\mathrm{C=O}$ rend l'acétone polaire, contrairement au butane.`,
      `Ces attractions supplémentaires renforcent la cohésion du liquide et élèvent sa température de vaporisation.`,
      `Le caractère apolaire du butane ne lui confère pas des interactions plus fortes que celles de l'acétone.`,
      `La masse molaire est un facteur important, mais elle ne suffit pas à déterminer seule la température de vaporisation.`,
    ],
  },
  {
    order: 18,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Pour qu'une liaison hydrogène intermoléculaire classique puisse s'établir :`,
    choices: [
      `Un atome d'hydrogène doit être lié à un atome fortement électronégatif, généralement $\\mathrm{N}$, $\\mathrm{O}$ ou $\\mathrm{F}$.`,
      `Une autre molécule doit présenter un atome électronégatif, généralement $\\mathrm{N}$, $\\mathrm{O}$ ou $\\mathrm{F}$, capable d'interagir avec cet hydrogène.`,
      `Toute liaison $\\mathrm{C-H}$ forme automatiquement une liaison hydrogène forte.`,
      `La liaison hydrogène est nécessairement une nouvelle liaison covalente entre les deux molécules.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La liaison hydrogène associe un hydrogène fortement polarisé, lié à $\\mathrm{N}$, $\\mathrm{O}$ ou $\\mathrm{F}$, à un autre atome électronégatif disposant d'une zone riche en électrons. Elle reste une interaction électrostatique, et non une liaison covalente ordinaire.`,
    choiceExplanations: [
      `La forte électronégativité de $\\mathrm{N}$, $\\mathrm{O}$ ou $\\mathrm{F}$ donne à l'hydrogène une charge partielle positive marquée.`,
      `L'atome accepteur attire l'hydrogène partiellement positif, souvent grâce à un doublet non liant.`,
      `Une liaison $\\mathrm{C-H}$ ordinaire n'est généralement pas assez polarisée pour répondre au modèle simplifié du cours.`,
      `La liaison hydrogène est une interaction intermoléculaire électrostatique plus faible qu'une liaison covalente.`,
    ],
  },
  {
    order: 19,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Dans les ordres de grandeur simplifiés présentés dans le cours, une liaison hydrogène :`,
    choices: [
      `Est environ vingt fois plus faible qu'une liaison covalente.`,
      `Est environ dix fois plus forte qu'une interaction de Van der Waals.`,
      `Est plus forte qu'une liaison covalente et la remplace dans les molécules d'eau.`,
      `Ne peut exister qu'entre deux molécules portant des charges électriques entières.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La liaison hydrogène occupe une position intermédiaire : elle est nettement plus forte qu'une interaction de Van der Waals isolée, mais reste beaucoup plus faible qu'une liaison covalente. Les rapports indiqués sont des ordres de grandeur pédagogiques.`,
    choiceExplanations: [
      `Le cours retient un facteur d'environ vingt entre la liaison covalente et la liaison hydrogène.`,
      `Le cours retient un facteur d'environ dix entre la liaison hydrogène et les interactions de Van der Waals.`,
      `Les liaisons $\\mathrm{O-H}$ internes à l'eau sont covalentes ; les liaisons hydrogène s'établissent entre molécules ou entre groupes distincts.`,
      `Les charges mises en jeu sont généralement partielles, notées $\\delta^{+}$ et $\\delta^{-}$.`,
    ],
  },
  {
    order: 20,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos de l'eau et des rôles des liaisons hydrogène :`,
    choices: [
      `Une molécule d'eau peut, dans une organisation favorable, établir jusqu'à quatre liaisons hydrogène avec des molécules voisines.`,
      `L'eau ne peut agir que comme donneur de liaison hydrogène, car son oxygène ne possède aucun doublet non liant.`,
      `Les liaisons hydrogène expliquent une température de vaporisation anormalement basse de l'eau.`,
      `Les liaisons hydrogène ne jouent aucun rôle dans la stabilisation des protéines ni des acides nucléiques.`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `Une molécule d'eau possède deux hydrogènes pouvant donner des liaisons hydrogène et deux doublets non liants sur l'oxygène pouvant en accepter. Le réseau ainsi formé renforce la cohésion de l'eau et contribue aussi à la stabilisation de nombreuses structures biologiques.`,
    choiceExplanations: [
      `L'eau peut donner deux liaisons hydrogène par ses hydrogènes et en accepter deux par les doublets de son oxygène.`,
      `L'oxygène possède deux doublets non liants : l'eau peut donc aussi agir comme accepteur.`,
      `Le réseau de liaisons hydrogène augmente la cohésion de l'eau et élève sa température de vaporisation.`,
      `Ces interactions contribuent notamment à la structure des protéines et à l'appariement des bases dans les acides nucléiques.`,
    ],
  },
  {
    order: 41,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On compare les interactions dominantes entre molécules de méthane $\\mathrm{CH_{4}}$, de chlorométhane $\\mathrm{CH_{3}Cl}$ et de méthanol $\\mathrm{CH_{3}OH}$.`,
    choices: [
      `Entre molécules de méthane, les interactions de Van der Waals sont les principales interactions attractives.`,
      `Le chlorométhane peut présenter des interactions dipôle-dipôle.`,
      `Deux molécules de méthanol peuvent former des liaisons hydrogène.`,
      `Le méthane forme des liaisons hydrogène grâce à ses quatre liaisons $\\mathrm{C-H}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le méthane est apolaire mais présente des interactions de Van der Waals. Le chlorométhane est polaire et peut donc subir des interactions dipôle-dipôle. Le méthanol possède en plus un groupe $\\mathrm{O-H}$ permettant des liaisons hydrogène.`,
    choiceExplanations: [
      `Les dipôles instantanés et induits assurent une faible attraction entre molécules apolaires.`,
      `Le moment dipolaire permanent de $\\mathrm{CH_{3}Cl}$ permet l'orientation de pôles opposés.`,
      `Le groupe $\\mathrm{O-H}$ peut être donneur et l'oxygène d'une autre molécule accepteur.`,
      `Dans le modèle du cours, un hydrogène lié au carbone n'est pas un donneur classique de liaison hydrogène.`,
    ],
  },
  {
    order: 42,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On considère les températures de vaporisation suivantes : $\\mathrm{CH_{4}} : -161\\ ^{\\circ}\\mathrm{C}$, $\\mathrm{NH_{3}} : -33\\ ^{\\circ}\\mathrm{C}$, $\\mathrm{H_{2}O} : 100\\ ^{\\circ}\\mathrm{C}$.`,
    choices: [
      `La masse molaire suffit à elle seule à expliquer cet ordre.`,
      `Les liaisons hydrogène augmentent la cohésion de l'ammoniac et de l'eau.`,
      `Le réseau de liaisons hydrogène de l'eau contribue à sa température de vaporisation particulièrement élevée.`,
      `Le méthane présente les interactions intermoléculaires les plus fortes des trois espèces.`,
    ],
    correctChoiceIndexes: [1, 2],
    explanation:
      `La nature et le nombre des interactions intermoléculaires sont déterminants. L'eau forme un réseau étendu de liaisons hydrogène, ce qui renforce fortement sa cohésion par rapport au méthane apolaire.`,
    choiceExplanations: [
      `Les masses molaires ne permettent pas d'expliquer à elles seules l'écart considérable observé.`,
      `Les liaisons $\\mathrm{N-H}$ et $\\mathrm{O-H}$ rendent possibles des liaisons hydrogène.`,
      `Chaque molécule d'eau peut participer à plusieurs liaisons hydrogène.`,
      `Le méthane ne présente principalement que de faibles interactions de Van der Waals.`,
    ],
  },
  {
    order: 43,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos du fluorure d'hydrogène $\\mathrm{HF}$ et de ses liaisons hydrogène :`,
    choices: [
      `L'hydrogène de $\\mathrm{HF}$ porte une charge partielle positive.`,
      `Le fluor d'une molécule voisine peut jouer le rôle d'accepteur.`,
      `La liaison $\\mathrm{H-F}$ entre les deux atomes d'une même molécule est elle-même une liaison hydrogène.`,
      `Deux molécules de $\\mathrm{HF}$ ne peuvent exercer aucune attraction l'une sur l'autre.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La liaison covalente $\\mathrm{H-F}$ est fortement polarisée. L'hydrogène $\\delta^{+}$ d'une molécule peut interagir avec le fluor riche en électrons d'une autre molécule : cette interaction intermoléculaire est une liaison hydrogène.`,
    choiceExplanations: [
      `Le fluor attire fortement le doublet liant et laisse l'hydrogène appauvri en électrons.`,
      `Le fluor possède des doublets non liants capables d'attirer l'hydrogène $\\delta^{+}$.`,
      `La liaison interne $\\mathrm{H-F}$ est une liaison covalente polarisée.`,
      `Les molécules de $\\mathrm{HF}$ peuvent au contraire s'associer par liaisons hydrogène.`,
    ],
  },
  {
    order: 44,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Dans un mélange d'eau et de méthanol $\\mathrm{CH_{3}OH}$ :`,
    choices: [
      `L'oxygène de l'eau peut accepter une liaison hydrogène donnée par le groupe $\\mathrm{O-H}$ du méthanol.`,
      `L'eau peut donner une liaison hydrogène vers l'oxygène du méthanol.`,
      `La miscibilité repose uniquement sur des interactions de Van der Waals.`,
      `Le méthanol ne peut jamais agir comme accepteur de liaison hydrogène.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `L'eau et le méthanol possèdent chacun un groupe $\\mathrm{O-H}$ et des doublets non liants sur l'oxygène. Ils peuvent donc agir comme donneurs et comme accepteurs de liaisons hydrogène, ce qui favorise leur miscibilité.`,
    choiceExplanations: [
      `L'oxygène de l'eau dispose de doublets non liants.`,
      `L'oxygène du méthanol peut accepter l'interaction grâce à ses doublets.`,
      `Les liaisons hydrogène jouent un rôle majeur dans ce mélange polaire.`,
      `Le méthanol possède un oxygène riche en électrons et peut donc aussi être accepteur.`,
    ],
  },
  {
    order: 45,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `L'éthanol $\\mathrm{CH_{3}CH_{2}OH}$ et l'éther diméthylique $\\mathrm{CH_{3}OCH_{3}}$ ont la même formule brute $\\mathrm{C_{2}H_{6}O}$.`,
    choices: [
      `Les deux molécules sont polaires.`,
      `L'éthanol peut former entre ses propres molécules des liaisons hydrogène grâce à sa liaison $\\mathrm{O-H}$.`,
      `L'éther diméthylique peut donner une liaison hydrogène classique grâce à un hydrogène directement lié à l'oxygène.`,
      `La température de vaporisation de l'éthanol est attendue plus faible que celle de l'éther, car ses interactions sont plus fortes.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Les deux isomères comportent un oxygène et sont polaires. Toutefois, seul l'éthanol possède une liaison $\\mathrm{O-H}$ et peut donc donner des liaisons hydrogène entre ses propres molécules, ce qui renforce sa cohésion.`,
    choiceExplanations: [
      `La présence de l'oxygène crée une répartition dissymétrique des charges dans les deux structures.`,
      `Le groupe hydroxyle fournit un hydrogène lié à un atome fortement électronégatif.`,
      `Dans l'éther, tous les hydrogènes sont liés au carbone ; il peut accepter mais pas donner une liaison hydrogène classique.`,
      `Des interactions plus fortes tendent à augmenter, et non à diminuer, la température de vaporisation.`,
    ],
  },
  {
    order: 46,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Deux molécules d'acide éthanoïque $\\mathrm{CH_{3}COOH}$ peuvent s'associer en dimère cyclique par deux liaisons hydrogène.`,
    choices: [
      `Chaque groupe carboxyle peut fournir un hydrogène donneur.`,
      `L'oxygène carbonylé peut jouer le rôle d'accepteur.`,
      `Le dimère résulte de deux nouvelles liaisons covalentes $\\mathrm{O-H}$.`,
      `Cette association diminue nécessairement la cohésion entre les molécules.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Dans un acide carboxylique, l'hydrogène du groupe $\\mathrm{O-H}$ est donneur et l'oxygène carbonylé est accepteur. Deux molécules peuvent ainsi former un cycle stabilisé par deux liaisons hydrogène.`,
    choiceExplanations: [
      `L'hydrogène lié à l'oxygène est fortement polarisé.`,
      `L'oxygène du groupe $\\mathrm{C=O}$ possède des doublets non liants.`,
      `Les interactions entre les molécules sont des liaisons hydrogène, non de nouvelles liaisons covalentes.`,
      `La formation de deux interactions attractives renforce au contraire l'association des molécules.`,
    ],
  },
  {
    order: 47,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La glycérine, ou glycérol, possède trois groupes hydroxyle $\\mathrm{-OH}$ et présente une viscosité élevée.`,
    choices: [
      `Ses nombreux groupes $\\mathrm{-OH}$ permettent la formation d'un réseau de liaisons hydrogène.`,
      `Une cohésion intermoléculaire importante peut contribuer à une viscosité élevée.`,
      `La glycérine est apolaire car sa chaîne contient trois atomes de carbone.`,
      `La présence de plusieurs groupes $\\mathrm{-OH}$ supprime toute interaction avec l'eau.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le glycérol est une molécule très polaire, capable de donner et d'accepter de nombreuses liaisons hydrogène. Ce réseau augmente la cohésion et contribue à sa forte viscosité ainsi qu'à sa miscibilité avec l'eau.`,
    choiceExplanations: [
      `Chaque groupe hydroxyle peut participer à des interactions avec des molécules voisines.`,
      `Une forte résistance au déplacement relatif des molécules peut résulter d'un réseau d'interactions.`,
      `Les trois groupes hydroxyle dominent largement le caractère de la courte chaîne carbonée.`,
      `Ces groupes favorisent au contraire les interactions et la miscibilité avec l'eau.`,
    ],
  },
  {
    order: 48,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Dans l'aldéhyde salicylique, une liaison hydrogène peut s'établir à l'intérieur d'une même molécule entre deux groupes voisins.`,
    choices: [
      `Il s'agit d'une liaison hydrogène intramoléculaire.`,
      `Elle peut limiter certaines rotations et stabiliser une conformation plane.`,
      `Elle relie obligatoirement deux molécules distinctes.`,
      `Elle rend nécessairement la molécule totalement flexible.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Une liaison hydrogène peut être intramoléculaire lorsque le donneur et l'accepteur appartiennent à la même molécule. Elle peut alors verrouiller une conformation et augmenter la rigidité structurale.`,
    choiceExplanations: [
      `Les deux partenaires de l'interaction appartiennent ici au même édifice moléculaire.`,
      `L'interaction stabilise une géométrie particulière et peut réduire la liberté de rotation.`,
      `Une liaison hydrogène n'est pas nécessairement intermoléculaire.`,
      `La stabilisation d'une conformation tend au contraire à réduire la flexibilité.`,
    ],
  },
  {
    order: 49,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos des liaisons hydrogène dans les biomolécules :`,
    choices: [
      `Elles contribuent à stabiliser les hélices et les feuillets des protéines.`,
      `Une paire guanine-cytosine comporte classiquement trois liaisons hydrogène, contre deux pour une paire adénine-thymine.`,
      `La double hélice d'ADN est maintenue uniquement par des liaisons covalentes entre les deux brins.`,
      `Le caractère labile des liaisons hydrogène empêche toute ouverture locale de l'ADN.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Les liaisons hydrogène stabilisent des structures secondaires de protéines et l'appariement complémentaire des bases. Elles sont suffisamment fortes pour assurer la cohésion, mais assez labiles pour permettre des réorganisations biologiques.`,
    choiceExplanations: [
      `Les groupes amide des chaînes peptidiques peuvent former des réseaux de liaisons hydrogène.`,
      `Le couple $\\mathrm{G-C}$ est associé par trois liaisons hydrogène et le couple $\\mathrm{A-T}$ par deux.`,
      `Les deux brins sont associés notamment par des interactions non covalentes entre bases.`,
      `Leur labilité permet précisément l'ouverture transitoire nécessaire à la réplication ou à la transcription.`,
    ],
  },
  {
    order: 50,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Concernant les interactions intermoléculaires et les changements d'état :`,
    choices: [
      `Une augmentation de la cohésion tend à élever les températures de fusion et de vaporisation.`,
      `Lors de la vaporisation, les molécules sont éloignées sans que toutes leurs liaisons covalentes soient rompues.`,
      `Une liaison hydrogène est, dans le cours, plus faible qu'une interaction de Van der Waals.`,
      `Toutes les interactions intermoléculaires sont irréversibles.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Les changements d'état modifient surtout les distances et l'organisation entre molécules. Une cohésion plus importante exige davantage d'énergie. Les interactions non covalentes restent en outre réversibles et peuvent se rompre puis se reformer.`,
    choiceExplanations: [
      `Davantage d'énergie thermique est nécessaire pour vaincre des attractions plus fortes.`,
      `La vaporisation est un changement physique qui conserve généralement l'identité moléculaire.`,
      `La liaison hydrogène est au contraire plus forte qu'une interaction de Van der Waals isolée.`,
      `Les interactions intermoléculaires sont dynamiques et réversibles.`,
    ],
  },
];
