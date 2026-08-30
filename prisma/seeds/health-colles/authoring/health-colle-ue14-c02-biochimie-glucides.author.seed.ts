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
    question: "En vous appuyant sur les projections de Fischer et sur la cyclisation des oses, quelles propositions sont exactes ?",
    explanation: "Deux épimères ne diffèrent que par la configuration d’un seul carbone asymétrique : le D-mannose diffère du D-glucose en $\\mathrm{C}2$ et le D-galactose en $\\mathrm{C}4$. La notation $\\mathrm{D}/\\mathrm{L}$ décrit une configuration et ne prédit pas le signe du pouvoir rotatoire. Lors de la cyclisation du glucose, le carbone carbonylé $\\mathrm{C}1$ devient le carbone anomérique et constitue un nouveau centre stéréogène.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:stereochimie-cyclisation'],
    choices: [
      {
        content: "Le D-glucose et le D-mannose sont épimères en $\\mathrm{C}2$.",
        correct: true,
        explanation: "Vrai. Les deux projections diffèrent uniquement par la configuration du $\\mathrm{C}2$.",
      },
      {
        content: "Le D-glucose et le D-galactose sont épimères en $\\mathrm{C}4$.",
        correct: true,
        explanation: "Vrai. Les deux projections diffèrent uniquement par la configuration du $\\mathrm{C}4$.",
      },
      {
        content: "Le D-mannose et le D-galactose sont énantiomères.",
        correct: false,
        explanation: "Faux. Ils ne sont pas images l’un de l’autre dans un miroir avec inversion de tous les centres stéréogènes.",
      },
      {
        content: "La série $\\mathrm{D}$ ou $\\mathrm{L}$ d'un ose permet de prévoir le signe de son pouvoir rotatoire.",
        correct: false,
        explanation: "Faux. $\\mathrm{D}/\\mathrm{L}$ et $(+)/(−)$ décrivent deux propriétés différentes.",
      },
      {
        content: "La cyclisation du D-glucose crée un nouveau centre stéréogène au niveau du carbone $\\mathrm{C}1$.",
        correct: true,
        explanation: "Vrai. Le $\\mathrm{C}1$ aldéhydique de la forme ouverte devient le carbone anomérique lors de la cyclisation.",
      },
    ],
  },
  {
    order: 2,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: "Quel est le nom du produit A obtenu par réduction de la fonction aldéhyde du D-glucose ?",
    explanation: "La réduction de la fonction aldéhyde portée par le $\\mathrm{C}1$ du D-glucose transforme ce groupement en alcool primaire. Le polyol obtenu est le sorbitol, également appelé glucitol.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:polyols'],
    answer: {
      type: 'text',
      acceptedAnswers: ['sorbitol', 'D-sorbitol', 'glucitol'],
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
    question: "Le produit B résulte de l’oxydation sélective de l’alcool primaire porté par le $\\mathrm{C}6$ du D-glucose. Quelle proposition l’identifie et décrit correctement une de ses fonctions biologiques ?",
    explanation: "L’oxydation de l’alcool primaire en $\\mathrm{C}6$ du glucose conduit à l’acide glucuronique. Sa conjugaison à certaines molécules augmente leur caractère hydrophile et peut ainsi favoriser leur élimination, notamment par voie urinaire.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:acide-glucuronique'],
    choices: [
      {
        content: "Il s’agit de l’acide gluconique, utilisé pour former le glycogène hépatique.",
        correct: false,
        explanation: "Faux. L'oxydation du $\\mathrm{C}6$ donne l'acide glucuronique.",
      },
      {
        content: "Il s’agit de l’acide glucuronique, qui peut être conjugué à certaines molécules afin d’en favoriser la solubilisation et l’élimination.",
        correct: true,
        explanation: "Vrai. L'acide glucuronique est issu de l'oxydation en $\\mathrm{C}6$ et intervient dans la glucuronoconjugaison.",
      },
      {
        content: "Il s’agit du sorbitol, dont la fonction principale est de sulfater les glycosaminoglycanes.",
        correct: false,
        explanation: "Faux. Le sorbitol est issu d'une réduction.",
      },
      {
        content: "Il s’agit de l’acide sialique, obtenu directement par réduction du $\\mathrm{C}6$ du glucose.",
        correct: false,
        explanation: "Faux. L'acide sialique est un dérivé complexe d'osamine.",
      },
      {
        content: "Il s’agit du L-fucose, formé par oxydation du $\\mathrm{C}6$ du D-glucose.",
        correct: false,
        explanation: "Faux. Le L-fucose est un désoxyose.",
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
        content: "Le mannose est un épimère du glucose en $\\mathrm{C}2$.",
        correct: true,
        explanation: "La différence de configuration porte sur le carbone $\\mathrm{C}2$.",
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
    explanation: "Dans la forme ouverte du D-glucose, les carbones $\\mathrm{C}2$, $\\mathrm{C}3$, $\\mathrm{C}4$ et $\\mathrm{C}5$ sont asymétriques. Le carbone $\\mathrm{C}1$ est le carbone du groupement aldéhyde et $\\mathrm{C}6$ est un carbone terminal de type $\\ce{-CH2OH}$ : ils ne sont pas chiraux.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:d-glucose'],
    answer: {
      type: 'number',
      value: 4,
      tolerance: 0,
    },
  },
  {
    order: 7,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: "Un étudiant compare les trois diholosides lactose, saccharose et maltose. Quelle proposition est correcte ?",
    explanation: "Le lactose est hydrolysé par la lactase ou $\\beta$-galactosidase en glucose et galactose.",
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
        explanation: "La lactase, également appelée $\\beta$-galactosidase, permet l'hydrolyse intestinale du lactose.",
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
        content: "Amylose — chaîne de glucose principalement liée en $\\alpha(1\\rightarrow 4)$.",
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
        explanation: "L'amylopectine est ramifiée grâce à des liaisons $\\alpha(1\\rightarrow 6)$.",
      },
      {
        content: "Glycogène — polymère exclusivement constitué de liaisons $\\beta(1\\rightarrow 4)$.",
        correct: false,
        explanation: "Le glycogène associe des liaisons $\\alpha(1\\rightarrow 4)$ et des embranchements $\\alpha(1\\rightarrow 6)$.",
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
        content: "La cyclisation du glucose rend son carbone $\\mathrm{C}1$ asymétrique.",
        correct: true,
        explanation: "Le carbone carbonylé $\\mathrm{C}1$ devient le carbone anomérique lors de la cyclisation du glucose.",
      },
      {
        content: "La série $\\mathrm{D}/\\mathrm{L}$ d'un ose est définie par le sens de déviation de la lumière polarisée.",
        correct: false,
        explanation: "La configuration $\\mathrm{D}/\\mathrm{L}$ est indépendante du caractère dextrogyre ou lévogyre.",
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
        content: "La cellulose repose sur des unités de cellobiose constituées de deux glucoses liés en $\\beta(1\\rightarrow 4)$.",
        correct: true,
        explanation: "La liaison $\\beta(1\\rightarrow 4)$ distingue notamment la cellulose des polymères de réserve en $\\alpha$.",
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
        content: "Une osamine correspond au remplacement d'une fonction alcool en $\\mathrm{C}2$ par une fonction amine primaire.",
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
        content: "L'oxydation du glucose en $\\mathrm{C}6$ peut conduire à l'acide glucuronique.",
        correct: true,
        explanation: "Le groupement $\\ce{-CH2OH}$ du $\\mathrm{C}6$ est oxydé en fonction acide.",
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
        content: "Une osamine résulte du remplacement d'une fonction alcool en $\\mathrm{C}2$ par une fonction amine primaire.",
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
        content: "Elle est constituée uniquement de résidus de glucose reliés en $\\beta(1\\rightarrow 4)$.",
        correct: false,
        explanation: "Cette description correspond à la cellulose, pas à l'héparine.",
      },
      {
        content: "Elle est un diholoside formed de glucose et de fructose.",
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
    explanation: "Les protéoglycanes associent des GAGs sulfatés à une protéine cœur, tandis que les glycoprotéines possèdent une fraction glucidique ramifiée pouvant être liée à certains résidus d'acides aminés par liaison $\\mathrm{O}$- ou $\\mathrm{N}$-glycosidique.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:glycoconjugues'],
    choices: [
      {
        content: "Des protéoglycanes peuvent s'agréger autour d'un long filament d'acide hyaluronique.",
        correct: true,
        explanation: "Le chapitre décrit des protéoglycanes agrégés reliés à un filament d'acide hyaluronique.",
      },
      {
        content: "Dans une glycoprotéine, une liaison $\\mathrm{O}$-glycosidique peut impliquer la fonction alcool d'une sérine ou d'une thréonine.",
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
        content: "Une liaison $\\mathrm{N}$-glycosidique des glycoprotéines se fait obligatoirement sur un acide gras.",
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
        content: "La cellulose est construite à partir d'unités de cellobiose contenant des glucoses liés en $\\beta(1\\rightarrow 4)$.",
        correct: true,
        explanation: "Cette liaison $\\beta(1\\rightarrow 4)$ participe à sa fonction structurale.",
      },
      {
        content: "L'amylose comporte des embranchements $\\alpha(1\\rightarrow 6)$ plus fréquents que ceux du glycogène.",
        correct: false,
        explanation: "L'amylose est essentiellement linéaire ; les ramifications $\\alpha(1\\rightarrow 6)$ concernent l'amylopectine et le glycogène.",
      },
      {
        content: "L'Homme hydrolyse efficacement la cellulose grâce à une $\\beta$-glucosidase digestive abondante.",
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
    question: "À propos de la formation des liaisons osidiques et du pouvoir réducteur des diholosides, quelles propositions sont exactes ?",
    explanation: "Le pouvoir réducteur dépend de la présence d’un carbone anomérique encore susceptible de retrouver une forme carbonylée ouverte. Si les deux carbones anomériques sont engagés dans la liaison osidique, cette possibilité disparaît. L’hydrolyse d’une liaison osidique consomme une molécule d’eau ; c’est la condensation qui en libère une.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:pouvoir-reducteur'],
    choices: [
      {
        content: "Une liaison osidique peut engager le carbone anomérique d’un ose et une fonction alcool d’un autre ose.",
        correct: true,
        explanation: "Vrai. C'est le cas des diholosides dicarbonyles ou monocarbonyles.",
      },
      {
        content: "Lorsqu’un carbone anomérique reste libre dans un diholoside, celui-ci peut conserver un pouvoir réducteur.",
        correct: true,
        explanation: "Vrai. Un $\\mathrm{C}1$ anomérique libre conserve la mutarotation et le pouvoir réducteur.",
      },
      {
        content: "Lorsqu’une liaison osidique engage les deux carbones anomériques, le diholoside est non réducteur.",
        correct: true,
        explanation: "Vrai. Si les deux carbones anomériques sont bloqués dans la liaison, le diholoside est non réducteur.",
      },
      {
        content: "L’hydrolyse d’une liaison osidique est une réaction de condensation qui libère une molécule d’eau.",
        correct: false,
        explanation: "Faux. L'hydrolyse consomme une molécule d'eau (dégradation), alors que la condensation libère de l'eau (synthèse).",
      },
      {
        content: "Le caractère réducteur d’un diholoside dépend uniquement de son nombre total d’atomes de carbone.",
        correct: false,
        explanation: "Faux. Le caractère réducteur dépend de la disponibilité d'un carbone anomérique libre, non du nombre de carbones.",
      },
    ],
  },
  {
    order: 18,
    difficulty: 'HARD',
    format: 'QRM',
    question: "En vous appuyant sur les représentations du lactose et du saccharose, quelles propositions sont exactes ?",
    explanation: "Le lactose est constitué de galactose et de glucose liés en $\\beta(1\\rightarrow 4)$ ; le carbone anomérique du glucose reste libre, ce qui explique son caractère réducteur. Dans le saccharose, les carbones anomériques du glucose et du fructose participent tous deux à la liaison osidique : le saccharose est donc non réducteur.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:gag-comparaison'],
    choices: [
      {
        content: "Le lactose associe un résidu de galactose à un résidu de glucose par une liaison $\\beta(1\\rightarrow 4)$.",
        correct: true,
        explanation: "Vrai. Le lactose est bien le $\\beta$-$\\mathrm{D}$-galactopyranosyl-$(1\\rightarrow 4)$-$\\mathrm{D}$-glucopyranose.",
      },
      {
        content: "Dans le lactose, le carbone anomérique du résidu de glucose reste libre.",
        correct: true,
        explanation: "Vrai. Le $\\mathrm{C}1$ du glucose est libre, conférant le caractère réducteur au lactose.",
      },
      {
        content: "Dans le saccharose, la liaison osidique engage le carbone anomérique du glucose et celui du fructose.",
        correct: true,
        explanation: "Vrai. Le saccharose est une liaison dicarbonylée $\\alpha 1\\rightarrow\\beta 2$.",
      },
      {
        content: "L’hydrolyse du saccharose fournit du glucose et du galactose.",
        correct: false,
        explanation: "Faux. L'hydrolyse du saccharose donne du glucose et du fructose.",
      },
      {
        content: "Le lactose est non réducteur car ses deux carbones anomériques sont engagés dans sa liaison osidique.",
        correct: false,
        explanation: "Faux. Le lactose est réducteur car le $\\mathrm{C}1$ du glucose reste libre.",
      },
    ],
  },
  {
    order: 19,
    difficulty: 'MEDIUM',
    format: 'QZONE',
    question: "Sur la représentation du lactose, sélectionnez le carbone anomérique du résidu de glucose resté libre et responsable du caractère réducteur de ce diholoside.",
    explanation: "Dans le lactose, le $\\mathrm{C}1$ anomérique du galactose participe à la liaison $\\beta(1\\rightarrow 4)$ avec le $\\mathrm{C}4$ du glucose. En revanche, le carbone anomérique $\\mathrm{C}1$ du glucose reste libre : il peut retrouver une forme ouverte carbonylée, ce qui confère au lactose son caractère réducteur.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C02', 'ec:BIOCHIMIE', 'theme:qzone-carbone-anomerique'],
    image: {
      src: '/images/training/ue14/colles/c02/diholosides-reducing-linked-q17-q19.svg',
      alt: 'Représentations cycliques simplifiées du lactose et du saccharose montrant leurs deux résidus osidiques et leur liaison glycosidique.',
      width: 1200,
      height: 650,
    },
    expectedZones: [
      {
        id: 'target-free-c1-glucose',
        label: 'Carbone anomérique $\\mathrm{C}1$ libre du résidu glucose',
        x: 0.4417,
        y: 0.5231,
        tolerance: 0.04,
      },
    ],
    defaultTolerance: 0.04,
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
        content: "La phosphorylation du ribose en $\\mathrm{C}5$ est associée à la synthèse des acides nucléiques.",
        correct: true,
        explanation: "Le ribose-5-phosphate est relié aux nucléotides de l'ARN.",
      },
      {
        content: "Les esters sulfuriques des oses rendent les glycosaminoglycanes électriquement neutres.",
        correct: false,
        explanation: "Les groupements sulfate contribuent au contraire à la charge négative de ces molécules.",
      },
      {
        content: "Une osamine-$\\mathrm{N}$-acétylée correspond à la suppression complète de l'atome d'azote de l'osamine.",
        correct: false,
        explanation: "Le groupement acétyl est ajouté sur la fonction amine ; l'azote reste présent.",
      },
    ],
  },
];
