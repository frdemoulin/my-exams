import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';

/**
 * UE14 — Colle C02 — Biochimie — Glucides
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 * Périmètre : Biochimie 1.1 à 1.3 — généralités/structure, oses simples et dérivés, osides.
 */
export const UE14_COLLE_C02_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 1,
    difficulty: 'HARD',
    format: 'QRM',
    question: "À propos de la stéréochimie des oses et de leur cyclisation, quelles propositions sont exactes ?",
    explanation: "La série D/L décrit une configuration relative, indépendante du signe du pouvoir rotatoire. Les épimères ne diffèrent que par un seul centre asymétrique, tandis que les anomères α et β apparaissent lors de la cyclisation et diffèrent au carbone anomérique.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:stereochimie-cyclisation'],
    choices: [
      {
        content: "Le D-glucose et le D-mannose sont épimères en C2.",
        correct: true,
        explanation: "Le mannose ne diffère du glucose que par la configuration du carbone C2.",
      },
      {
        content: "Le D-glucose et le D-galactose sont épimères en C4.",
        correct: true,
        explanation: "Le galactose ne diffère du glucose que par la configuration du carbone C4.",
      },
      {
        content: "La notation D ou L permet de prévoir si l'ose est dextrogyre ou lévogyre.",
        correct: false,
        explanation: "Il n'existe pas de correspondance générale entre la série D/L et le signe +/− du pouvoir rotatoire.",
      },
      {
        content: "Les anomères α et β d'un même ose cyclique sont des énantiomères.",
        correct: false,
        explanation: "Ils sont des diastéréoisomères qui diffèrent par la configuration du carbone anomérique.",
      },
      {
        content: "La dihydroxyacétone ne possède pas de carbone asymétrique.",
        correct: true,
        explanation: "Ce cétotriose est achiral car aucun de ses carbones n'est lié à quatre substituants différents.",
      },
    ],
  },
  {
    order: 2,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: "Quel polyol est obtenu par réduction du glucose ? Répondez par un seul nom.",
    explanation: "La réduction de la fonction carbonylée du glucose conduit au sorbitol.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:polyols'],
    answer: {
      type: 'text',
      acceptedAnswers: ['sorbitol'],
      normalization: {
        trim: true,
        collapseWhitespace: true,
        caseSensitive: false,
        ignoreAccents: true,
        normalizeUnicode: true,
      },
    },
  },
  {
    order: 3,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: "Une molécule hydrophobe doit être éliminée plus facilement par voie urinaire après transformation hépatique. Quelle proposition décrit correctement le rôle d'un dérivé glucidique dans ce processus ?",
    explanation: "L'acide glucuronique participe à la glucuronoconjugaison, qui augmente la solubilité de substances initialement peu solubles et facilite leur élimination.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:acide-glucuronique'],
    choices: [
      {
        content: "Le mannitol est fixé sur la molécule afin de former un glycosaminoglycane.",
        correct: false,
        explanation: "Le mannitol est un polyol issu de la réduction du mannose ; ce n'est pas le dérivé impliqué ici.",
      },
      {
        content: "L'acide glucuronique peut être conjugué à la molécule afin d'en favoriser la solubilisation et l'élimination.",
        correct: true,
        explanation: "La glucuronoconjugaison hépatique favorise la solubilisation de composés comme la bilirubine ou certains médicaments.",
      },
      {
        content: "Le glucose est réduit en glycogène avant d'être éliminé dans les urines.",
        correct: false,
        explanation: "Le glycogène est un polyoside de réserve et ne constitue pas un mécanisme de conjugaison urinaire.",
      },
      {
        content: "L'acide sialique est transformé en cellulose pour augmenter l'hydrosolubilité.",
        correct: false,
        explanation: "La cellulose est un polyoside structural végétal sans rôle dans ce mécanisme d'élimination.",
      },
      {
        content: "Le sorbitol est oxydé en saccharose, ce qui rend la molécule réductrice.",
        correct: false,
        explanation: "Le saccharose est un diholoside glucose-fructose et n'intervient pas dans la glucuronoconjugaison.",
      },
    ],
  },
  {
    order: 4,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Les glucides exercent des fonctions très diverses dans l'organisme. Sélectionnez exactement les deux propositions correctes.",
    explanation: "Les glucides ont notamment un rôle énergétique et interviennent à la surface cellulaire dans la reconnaissance et les interactions entre cellules.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:roles-glucides'],
    choices: [
      {
        content: "Ils peuvent constituer une source d'énergie importante.",
        correct: true,
        explanation: "Le glucose occupe notamment une place centrale dans l'apport énergétique.",
      },
      {
        content: "Ils participent à des phénomènes de reconnaissance à la surface des cellules.",
        correct: true,
        explanation: "Des structures glucidiques membranaires contribuent aux interactions et aux déterminants antigéniques.",
      },
      {
        content: "Ils sont absents des acides nucléiques.",
        correct: false,
        explanation: "Des pentoses entrent dans la constitution des acides nucléiques.",
      },
      {
        content: "Ils sont exclusivement rencontrés dans le monde végétal.",
        correct: false,
        explanation: "Les glucides sont également présents et utilisés dans le monde animal.",
      },
      {
        content: "Ils n'interviennent jamais dans la structure de macromolécules complexes.",
        correct: false,
        explanation: "Ils participent notamment à la constitution de glycoprotéines, glycolipides et protéoglycanes.",
      },
    ],
  },
  {
    order: 5,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "Concernant quelques oses simples d'intérêt biologique, quelles propositions sont exactes ?",
    explanation: "Glucose, galactose, mannose et fructose partagent des structures proches mais diffèrent par leur fonction carbonylée, leur stéréochimie et leurs rôles biologiques.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:oses-simples'],
    choices: [
      {
        content: "Le galactose entre dans la composition du lactose.",
        correct: true,
        explanation: "Le lactose associe un résidu de galactose à un résidu de glucose.",
      },
      {
        content: "Le mannose est un épimère du glucose en C2.",
        correct: true,
        explanation: "La différence de configuration porte sur le carbone C2.",
      },
      {
        content: "Le fructose est un cétose présent notamment dans le saccharose.",
        correct: true,
        explanation: "Le saccharose associe glucose et fructose.",
      },
      {
        content: "Le glucose est un cétose dont la forme furanique est la forme majoritaire.",
        correct: false,
        explanation: "Le glucose est un aldose et sa forme pyranique est la forme cyclique privilégiée.",
      },
      {
        content: "Le galactose et le mannose sont chacun des cétoses.",
        correct: false,
        explanation: "Galactose et mannose sont des aldoses.",
      },
    ],
  },
  {
    order: 6,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: "Dans la forme ouverte du D-glucose, combien d’atomes de carbone asymétriques possède la molécule ? Donnez uniquement la valeur numérique.",
    explanation: "Dans la forme ouverte du D-glucose, les carbones C2, C3, C4 et C5 sont asymétriques. Le carbone C1 est le carbone du groupement aldéhyde et C6 est un carbone terminal de type CH₂OH : ils ne sont pas chiraux.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:d-glucose'],
    answer: {
      type: 'text',
      acceptedAnswers: ['4'],
      normalization: {
        trim: true,
        collapseWhitespace: true,
        caseSensitive: false,
        ignoreAccents: true,
        normalizeUnicode: true,
      },
    },
  },
  {
    order: 7,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: "Un étudiant compare les trois diholosides lactose, saccharose et maltose. Quelle proposition est correcte ?",
    explanation: "Le lactose est hydrolysé par la lactase ou β-galactosidase en glucose et galactose.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:diholosides'],
    choices: [
      {
        content: "Le saccharose est formé de deux résidus de glucose.",
        correct: false,
        explanation: "Le saccharose associe un résidu de glucose et un résidu de fructose.",
      },
      {
        content: "Le maltose est le principal diholoside libre du lait des mammifères.",
        correct: false,
        explanation: "Le diholoside caractéristique du lait est le lactose.",
      },
      {
        content: "Le lactose est non réducteur car ses deux fonctions hémiacétaliques sont engagées.",
        correct: false,
        explanation: "Le lactose conserve une fonction hémiacétalique libre et reste réducteur.",
      },
      {
        content: "Le lactose est hydrolysé en glucose et galactose par la lactase.",
        correct: true,
        explanation: "La lactase, également appelée β-galactosidase, permet l'hydrolyse intestinale du lactose.",
      },
      {
        content: "Le saccharose est hydrolysé par la maltase en deux molécules de glucose.",
        correct: false,
        explanation: "La maltase agit sur le maltose ; l'hydrolyse du saccharose donne glucose et fructose.",
      },
    ],
  },
  {
    order: 8,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux associations correctes concernant les polyosides de réserve.",
    explanation: "L'amylose constitue une fraction essentiellement linéaire de l'amidon, tandis que le glycogène constitue la réserve glucidique des cellules animales.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:polyosides-reserve'],
    choices: [
      {
        content: "Amylose — chaîne de glucose principalement liée en α(1→4).",
        correct: true,
        explanation: "L'amylose est la fraction essentiellement linéaire de l'amidon.",
      },
      {
        content: "Glycogène — polyoside de réserve des cellules animales.",
        correct: true,
        explanation: "Il est particulièrement abondant dans le foie et le muscle.",
      },
      {
        content: "Cellulose — principal polyoside de réserve du muscle humain.",
        correct: false,
        explanation: "La cellulose est un polyoside structural végétal.",
      },
      {
        content: "Amylopectine — polymère totalement dépourvu de ramifications.",
        correct: false,
        explanation: "L'amylopectine est ramifiée grâce à des liaisons α(1→6).",
      },
      {
        content: "Glycogène — polymère exclusivement constitué de liaisons β(1→4).",
        correct: false,
        explanation: "Le glycogène associe des liaisons α(1→4) et des embranchements α(1→6).",
      },
    ],
  },
  {
    order: 9,
    difficulty: 'MEDIUM',
    format: 'QRPL',
    requiredSelectionCount: 5,
    question: "Parmi ces dix propositions couvrant les glucides, les oses dérivés et les osides, sélectionnez exactement les cinq correctes.",
    explanation: "Cette synthèse croise structure, propriétés et rôles : le carbone anomérique apparaît lors de la cyclisation, certains dérivés d'oses participent à la conjugaison ou aux structures membranaires, et les osides se distinguent notamment par leurs liaisons et leur fonction biologique.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:synthese-glucides'],
    choices: [
      {
        content: "La cyclisation du glucose rend son carbone C1 asymétrique.",
        correct: true,
        explanation: "Le carbone carbonylé C1 devient le carbone anomérique lors de la cyclisation du glucose.",
      },
      {
        content: "La série D/L d'un ose est définie par le sens de déviation de la lumière polarisée.",
        correct: false,
        explanation: "La configuration D/L est indépendante du caractère dextrogyre ou lévogyre.",
      },
      {
        content: "L'acide glucuronique peut participer à des réactions de conjugaison favorisant l'élimination de composés peu solubles.",
        correct: true,
        explanation: "La glucuronoconjugaison augmente la solubilité de diverses substances.",
      },
      {
        content: "Le saccharose est un diholoside réducteur possédant une fonction hémiacétalique libre.",
        correct: false,
        explanation: "Dans le saccharose, les deux carbones anomériques sont engagés ; il est non réducteur.",
      },
      {
        content: "La cellulose repose sur des unités de cellobiose constituées de deux glucoses liés en β(1→4).",
        correct: true,
        explanation: "La liaison β(1→4) distingue notamment la cellulose des polymères de réserve en α.",
      },
      {
        content: "Le glycogène est moins ramifié que l'amylose.",
        correct: false,
        explanation: "L'amylose est essentiellement linéaire, alors que le glycogène est fortement ramifié.",
      },
      {
        content: "L'acide hyaluronique est un glycosaminoglycane non sulfaté.",
        correct: true,
        explanation: "Il est décrit comme un GAG simple, non sulfaté et non lié aux protéines.",
      },
      {
        content: "Une osamine correspond au remplacement d'une fonction alcool en C2 par une fonction amine primaire.",
        correct: true,
        explanation: "Cette modification caractérise les osamines présentées dans le chapitre sur les dérivés des oses.",
      },
      {
        content: "Les glycoprotéines sont dépourvues de fraction glucidique.",
        correct: false,
        explanation: "Elles associent au contraire une fraction protéique et une fraction glucidique.",
      },
      {
        content: "L'héparine est un polyoside de réserve stocké dans le muscle.",
        correct: false,
        explanation: "L'héparine est un GAG très sulfaté à activité anticoagulante, stocké notamment dans les granulations des mastocytes.",
      },
    ],
  },
  {
    order: 10,
    difficulty: 'EASY',
    format: 'QRM',
    question: "À propos des principales transformations donnant des dérivés d'oses, quelles propositions sont exactes ?",
    explanation: "Oxydation, réduction, amination et estérification permettent de produire de nombreux dérivés glucidiques d'intérêt biologique.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:derives-oses'],
    choices: [
      {
        content: "L'oxydation du glucose en C6 peut conduire à l'acide glucuronique.",
        correct: true,
        explanation: "Le groupement CH2OH du C6 est oxydé en fonction acide.",
      },
      {
        content: "La réduction du mannose conduit au mannitol.",
        correct: true,
        explanation: "Le mannitol est le polyol obtenu par réduction du mannose.",
      },
      {
        content: "La réduction du glucose conduit au sorbitol.",
        correct: true,
        explanation: "Le sorbitol est le polyol dérivé du glucose par réduction.",
      },
      {
        content: "Une osamine résulte du remplacement d'une fonction alcool en C2 par une fonction amine primaire.",
        correct: true,
        explanation: "C'est la transformation structurale caractéristique d'une osamine.",
      },
      {
        content: "La phosphorylation d'un ose correspond à la suppression de tous ses groupements alcool.",
        correct: false,
        explanation: "La phosphorylation correspond à une estérification phosphorique sur un ou plusieurs groupements alcool.",
      },
    ],
  },
  {
    order: 11,
    difficulty: 'HARD',
    format: 'QROC',
    question: "Quel glycosaminoglycane non sulfaté, très impliqué dans l'hydratation et la viscoélasticité tissulaires, n'est pas lié à une protéine cœur ?",
    explanation: "L'acide hyaluronique est présenté comme le GAG le plus simple : il est non sulfaté, non lié aux protéines et contribue notamment à l'hydratation et à la viscoélasticité des tissus.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:gag-acide-hyaluronique'],
    answer: {
      type: 'text',
      acceptedAnswers: ['acide hyaluronique', 'hyaluronate'],
      normalization: {
        trim: true,
        collapseWhitespace: true,
        caseSensitive: false,
        ignoreAccents: true,
        normalizeUnicode: true,
      },
    },
  },
  {
    order: 12,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: "Quelle proposition caractérise correctement l'héparine ?",
    explanation: "L'héparine est un glycosaminoglycane très sulfaté, stocké dans les granulations des mastocytes, avec une puissante activité anticoagulante.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:heparine'],
    choices: [
      {
        content: "Elle est très sulfatée, stockée dans les granulations des mastocytes et possède une activité anticoagulante importante.",
        correct: true,
        explanation: "Ces trois caractéristiques sont associées à l'héparine.",
      },
      {
        content: "Elle est le principal polyoside de réserve du foie et du muscle.",
        correct: false,
        explanation: "Cette fonction correspond au glycogène.",
      },
      {
        content: "Elle est constituée uniquement de résidus de glucose reliés en β(1→4).",
        correct: false,
        explanation: "Cette description correspond à la cellulose, pas à l'héparine.",
      },
      {
        content: "Elle est un diholoside formé de glucose et de fructose.",
        correct: false,
        explanation: "Cette composition correspond au saccharose.",
      },
      {
        content: "Elle est dépourvue de charges négatives car elle ne contient aucun groupement sulfate.",
        correct: false,
        explanation: "L'héparine est au contraire très fortement sulfatée.",
      },
    ],
  },
  {
    order: 13,
    difficulty: 'HARD',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux propositions correctes concernant protéoglycanes et glycoprotéines.",
    explanation: "Les protéoglycanes associent des GAGs sulfatés à une protéine cœur, tandis que les glycoprotéines possèdent une fraction glucidique ramifiée pouvant être liée à certains résidus d'acides aminés par liaison O- ou N-glycosidique.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:glycoconjugues'],
    choices: [
      {
        content: "Des protéoglycanes peuvent s'agréger autour d'un long filament d'acide hyaluronique.",
        correct: true,
        explanation: "Le chapitre décrit des protéoglycanes agrégés reliés à un filament d'acide hyaluronique.",
      },
      {
        content: "Dans une glycoprotéine, une liaison O-glycosidique peut impliquer la fonction alcool d'une sérine ou d'une thréonine.",
        correct: true,
        explanation: "Une fraction glucidique peut être liée à la fonction alcool de certains acides aminés.",
      },
      {
        content: "Les glycoprotéines ne participent jamais à la reconnaissance cellulaire.",
        correct: false,
        explanation: "La reconnaissance spécifique et les interactions cellulaires font partie de leurs rôles.",
      },
      {
        content: "Les protéoglycanes sont constitués uniquement d'oses et ne comportent aucune protéine.",
        correct: false,
        explanation: "Ils comportent une protéine dite cœur à laquelle sont liés des GAGs.",
      },
      {
        content: "Une liaison N-glycosidique des glycoprotéines se fait obligatoirement sur un acide gras.",
        correct: false,
        explanation: "Elle relie la fraction glucidique à une fonction amide d'un acide aminé approprié.",
      },
    ],
  },
  {
    order: 14,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "Quelles propositions décrivent correctement l'amidon, le glycogène ou la cellulose ?",
    explanation: "Ces trois polyosides sont formés de glucose mais diffèrent par leur organisation et leur fonction : réserve végétale pour l'amidon, réserve animale pour le glycogène, structure végétale pour la cellulose.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:polyosides-comparaison'],
    choices: [
      {
        content: "L'amidon associe amylose et amylopectine.",
        correct: true,
        explanation: "L'amylose représente la fraction essentiellement linéaire, l'amylopectine la fraction ramifiée.",
      },
      {
        content: "Le glycogène est un polymère de réserve particulièrement abondant dans le foie et le muscle.",
        correct: true,
        explanation: "Il s'agit de la principale réserve glucidique des cellules animales.",
      },
      {
        content: "La cellulose est construite à partir d'unités de cellobiose contenant des glucoses liés en β(1→4).",
        correct: true,
        explanation: "Cette liaison β(1→4) participe à sa fonction structurale.",
      },
      {
        content: "L'amylose comporte des embranchements α(1→6) plus fréquents que ceux du glycogène.",
        correct: false,
        explanation: "L'amylose est essentiellement linéaire ; les ramifications α(1→6) concernent l'amylopectine et le glycogène.",
      },
      {
        content: "L'Homme hydrolyse efficacement la cellulose grâce à une β-glucosidase digestive abondante.",
        correct: false,
        explanation: "L'absence de l'enzyme appropriée explique que la cellulose ne soit pas digérée par l'Homme.",
      },
    ],
  },
  {
    order: 15,
    difficulty: 'EASY',
    format: 'QROC',
    question: "Quel diholoside est hydrolysé par la maltase pour donner deux résidus de glucose ?",
    explanation: "La maltase hydrolyse le maltose en deux résidus de glucose.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:maltose'],
    answer: {
      type: 'text',
      acceptedAnswers: ['maltose'],
      normalization: {
        trim: true,
        collapseWhitespace: true,
        caseSensitive: false,
        ignoreAccents: true,
        normalizeUnicode: true,
      },
    },
  },
  {
    order: 16,
    difficulty: 'EASY',
    format: 'QRU',
    question: "Quelle définition correspond à un hétéroside ?",
    explanation: "Un hétéroside associe une partie glucidique à une partie non glucidique appelée aglycone.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:heterosides'],
    choices: [
      {
        content: "Un polymère constitué exclusivement d'un même ose.",
        correct: false,
        explanation: "Cette définition correspond à un homoglycane ou polyoside homogène.",
      },
      {
        content: "Un diholoside dont les deux carbones anomériques sont engagés.",
        correct: false,
        explanation: "Cette propriété peut définir un diholoside non réducteur, mais pas l'ensemble des hétérosides.",
      },
      {
        content: "Un ose dont la fonction carbonyle a été réduite en alcool.",
        correct: false,
        explanation: "Cette transformation conduit à un polyol.",
      },
      {
        content: "Un glycosaminoglycane obligatoirement dépourvu de protéine.",
        correct: false,
        explanation: "De nombreux GAGs peuvent être associés à des protéines dans les protéoglycanes.",
      },
      {
        content: "Une molécule associant une partie glucidique à une partie non glucidique appelée aglycone.",
        correct: true,
        explanation: "C'est la définition générale d'un hétéroside.",
      },
    ],
  },
  {
    order: 17,
    difficulty: 'HARD',
    format: 'QRM',
    question: "On compare deux condensations conduisant à des diholosides : l'une engage deux fonctions hémiacétaliques, l'autre une fonction hémiacétalique et une fonction alcool. Quelles déductions sont correctes ?",
    explanation: "Le caractère réducteur d'un diholoside dépend de la persistance d'une fonction hémiacétalique libre après condensation.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:pouvoir-reducteur'],
    choices: [
      {
        content: "Si les deux fonctions hémiacétaliques sont engagées, le diholoside obtenu est non réducteur.",
        correct: true,
        explanation: "Aucune fonction hémiacétalique libre ne subsiste alors.",
      },
      {
        content: "Si une seule fonction hémiacétalique est engagée et qu'une fonction alcool participe à la liaison, une fonction hémiacétalique reste disponible.",
        correct: true,
        explanation: "Le diholoside conserve alors un caractère réducteur.",
      },
      {
        content: "Le saccharose illustre un diholoside non réducteur.",
        correct: true,
        explanation: "Ses deux carbones anomériques sont engagés dans la liaison osidique.",
      },
      {
        content: "Le lactose est obligatoirement non réducteur puisqu'il contient deux oses.",
        correct: false,
        explanation: "Le lactose conserve un carbone anomérique libre et est réducteur.",
      },
      {
        content: "Le caractère réducteur dépend uniquement du nombre total de carbones de la molécule.",
        correct: false,
        explanation: "Il dépend de la disponibilité d'une fonction hémiacétalique susceptible de s'ouvrir.",
      },
    ],
  },
  {
    order: 18,
    difficulty: 'HARD',
    format: 'QRM',
    question: "À propos de plusieurs glycosaminoglycanes, quelles propositions sont exactes ?",
    explanation: "Les GAGs diffèrent par les oses répétés, le degré de sulfatation, la longueur des chaînes et leurs fonctions biologiques.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:gag-comparaison'],
    choices: [
      {
        content: "L'acide hyaluronique n'est pas sulfaté et contribue à l'hydratation tissulaire.",
        correct: true,
        explanation: "Il est riche en charges carboxylates mais ne porte pas les sulfates caractéristiques de nombreux autres GAGs.",
      },
      {
        content: "Le dermatane sulfate contient notamment de l'acide L-iduronique.",
        correct: true,
        explanation: "Le chapitre associe le dermatane sulfate à l'acide L-iduronique et à une N-acétyl-galactosamine.",
      },
      {
        content: "Le kératane sulfate associe galactose et N-acétyl-glucosamine.",
        correct: true,
        explanation: "Cette association caractérise le motif répété présenté pour le kératane sulfate.",
      },
      {
        content: "L'héparane sulfate est exclusivement constitué de glucose non modifié.",
        correct: false,
        explanation: "Il associe des acides uroniques et des glucosamines, avec des degrés de sulfatation variables.",
      },
      {
        content: "L'héparine est faiblement sulfatée et dépourvue d'intérêt pharmacologique.",
        correct: false,
        explanation: "Elle est au contraire très sulfatée et utilisée pour son activité anticoagulante.",
      },
    ],
  },
  {
    order: 19,
    difficulty: 'MEDIUM',
    format: 'QZONE',
    question: "Sur le glucopyranose représenté, sélectionnez le carbone anomérique C1.",
    explanation: "Dans le glucose, le carbone C1 de la forme ouverte devient le carbone anomérique lors de la cyclisation.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:qzone-carbone-anomerique'],
    image: {
      src: '/images/training/ue14/colles/c02/glucopyranose-anomeric-carbon-qzone.svg',
      alt: 'Glucopyranose simplifié',
      width: 960,
      height: 560,
    },
    expectedZones: [
      {
        id: 'target',
        label: 'Carbone anomérique C1',
        x: 0.66,
        y: 0.5,
        tolerance: 0.07,
      },
    ],
    defaultTolerance: 0.07,
  },
  {
    order: 20,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "Concernant les oses aminés, l'acide sialique et les oses estérifiés, quelles propositions sont exactes ?",
    explanation: "Les dérivés d'oses contribuent à la structure et au métabolisme cellulaires : osamines dans les glycoconjugués, acide sialique à la surface cellulaire, esters phosphoriques dans plusieurs voies métaboliques et esters sulfuriques dans les GAGs.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:derives-complexes'],
    choices: [
      {
        content: "Les osamines peuvent entrer dans la composition de glycoprotéines, protéoglycanes ou glycolipides.",
        correct: true,
        explanation: "Ces glycoconjugués peuvent contenir des osamines, souvent sous forme N-acétylée.",
      },
      {
        content: "L'acide sialique peut participer à la reconnaissance cellulaire à la surface de cellules eucaryotes.",
        correct: true,
        explanation: "Le NANA est présenté comme un constituant de glycoprotéines et glycolipides impliqué dans la reconnaissance cellulaire.",
      },
      {
        content: "La phosphorylation du ribose en C5 est associée à la synthèse des acides nucléiques.",
        correct: true,
        explanation: "Le ribose-5-phosphate est relié aux nucléotides de l'ARN.",
      },
      {
        content: "Les esters sulfuriques des oses rendent les glycosaminoglycanes électriquement neutres.",
        correct: false,
        explanation: "Les groupements sulfate contribuent au contraire à la charge négative de ces molécules.",
      },
      {
        content: "Une osamine-N-acétylée correspond à la suppression complète de l'atome d'azote de l'osamine.",
        correct: false,
        explanation: "Le groupement acétyl est ajouté sur la fonction amine ; l'azote reste présent.",
      },
    ],
  },
];
