import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';
import { TEX_UNITS, texQuantity } from '../../tex-units';

const U = TEX_UNITS;

/**
 * UE14 — Colle C10 — Chimie — Colle cumulative EC
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 * Périmètre : toute la Chimie — Chimie générale Ch. 1 à 4 + Chimie organique Ch. 1 à 8.
 */
export const UE14_COLLE_C10_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 1,
    difficulty: 'EASY',
    format: 'QRM',
    question: "À propos de la structure électronique des atomes et de la classification périodique, quelles propositions sont exactes ?",
    explanation: "Le numéro atomique Z correspond au nombre de protons et, pour un atome neutre, au nombre d’électrons. Le remplissage électronique suit l’ordre énergétique des sous-couches, notamment 4s avant 3d dans l’état fondamental des atomes neutres usuels.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:classification-electronique'],
    choices: [
      {
        content: "Deux isotopes d’un même élément possèdent le même numéro atomique Z.",
        correct: true,
        explanation: "Ils ont le même nombre de protons ; ils diffèrent par leur nombre de neutrons et donc par leur nombre de masse.",
      },
      {
        content: "Pour un atome neutre, le nombre d’électrons est égal au numéro atomique Z.",
        correct: true,
        explanation: "La neutralité impose autant d’électrons que de protons.",
      },
      {
        content: "Dans l’ordre de remplissage usuel, la sous-couche 4s est occupée avant la sous-couche 3d.",
        correct: true,
        explanation: "La règle de Klechkowski conduit à l’ordre ...3p, 4s, 3d, 4p... pour le remplissage des atomes neutres.",
      },
      {
        content: "Le nombre de masse A correspond uniquement au nombre de neutrons du noyau.",
        correct: false,
        explanation: "A est la somme des protons et des neutrons.",
      },
      {
        content: "Deux éléments situés dans une même période possèdent nécessairement le même nombre d’électrons de valence.",
        correct: false,
        explanation: "Au sein d’une période, le nombre d’électrons de valence évolue généralement d’une colonne à l’autre.",
      },
    ],
  },
  {
    order: 2,
    difficulty: 'HARD',
    format: 'QROC',
    question: String.raw`L’ion $\ce{^{31}_{15}P^{3-}}$ est considéré isolément. Combien possède-t-il d’électrons ? Donnez uniquement la valeur numérique.`,
    explanation: "Le phosphore a Z = 15, donc 15 électrons à l’état neutre. La charge 3− correspond au gain de trois électrons : l’ion en possède 18.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:ions-nucleides'],
    answer: {
      type: 'number',
      value: 18,
      tolerance: 0,
    },
  },
  {
    order: 3,
    difficulty: 'HARD',
    format: 'QRU',
    question: "Quelle proposition décrit correctement une tendance périodique ou une propriété électronique ?",
    explanation: "L’électronégativité traduit l’aptitude d’un atome engagé dans une liaison à attirer vers lui les électrons de cette liaison. Elle augmente globalement de la gauche vers la droite d’une période et vers le haut d’une colonne.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:electronegativite'],
    choices: [
      {
        content: "Le fluor est plus électronégatif que le chlore.",
        correct: true,
        explanation: "Le fluor se situe au-dessus du chlore dans la colonne des halogènes et possède l’électronégativité la plus élevée du tableau périodique.",
      },
      {
        content: "L’électronégativité et l’affinité électronique désignent exactement la même grandeur physique.",
        correct: false,
        explanation: "Ce sont deux notions distinctes : l’électronégativité concerne l’attraction des électrons dans une liaison, l’affinité électronique une variation énergétique liée au gain d’un électron.",
      },
      {
        content: "Un cation se forme par gain d’un ou plusieurs électrons.",
        correct: false,
        explanation: "Un cation résulte d’une perte d’électrons.",
      },
      {
        content: "Dans une même colonne, l’énergie d’ionisation augmente généralement lorsque la taille atomique augmente.",
        correct: false,
        explanation: "Elle tend au contraire à diminuer vers le bas d’une colonne, les électrons externes étant plus éloignés et mieux écrantés.",
      },
      {
        content: "Une liaison entre deux atomes de même électronégativité est nécessairement ionique.",
        correct: false,
        explanation: "Une différence d’électronégativité nulle favorise une liaison covalente apolaire.",
      },
    ],
  },
  {
    order: 4,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux propositions correctes à propos des liaisons $\\sigma$ et $\\pi$.",
    explanation: "Une liaison simple est une liaison $\\sigma$. Dans une double liaison, une liaison $\\sigma$ est accompagnée d'une liaison $\\pi$ ; dans une triple liaison, une $\\sigma$ est accompagnée de deux $\\pi$.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:liaisons-sigma-pi'],
    choices: [
      {
        content: "Une liaison simple carbone-carbone est de type $\\sigma$.",
        correct: true,
        explanation: "Elle résulte d’un recouvrement selon l’axe internucléaire.",
      },
      {
        content: "Une double liaison C=C comporte une liaison $\\sigma$ et une liaison $\\pi$.",
        correct: true,
        explanation: "Le premier recouvrement forme $\\sigma$ et le second, latéral, forme $\\pi$.",
      },
      {
        content: "Une triple liaison $\\ce{C#C}$ comporte trois liaisons $\\pi$ et aucune liaison $\\sigma$.",
        correct: false,
        explanation: "Elle comporte une liaison $\\sigma$ et deux liaisons $\\pi$.",
      },
      {
        content: "Une liaison $\\pi$ possède une symétrie axiale qui autorise une rotation libre sans perte de recouvrement.",
        correct: false,
        explanation: "La rotation autour d'une liaison $\\pi$ rompt le recouvrement latéral ; elle est donc fortement contrainte.",
      },
      {
        content: "Une liaison $\\sigma$ résulte toujours du recouvrement de deux orbitales p non hybridées.",
        correct: false,
        explanation: "Une liaison $\\sigma$ peut résulter de nombreux recouvrements axiaux, notamment s–s, s–p ou entre orbitales hybrides.",
      },
    ],
  },
  {
    order: 5,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "À propos de la polarité moléculaire et des interactions intermoléculaires, quelles propositions sont exactes ?",
    explanation: "Le moment dipolaire moléculaire est une somme vectorielle. Les forces de dispersion existent entre toutes les espèces, tandis qu’une liaison hydrogène nécessite un donneur X–H suffisamment polarisé et un accepteur portant un doublet disponible.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:forces-intermoleculaires'],
    choices: [
      {
        content: "Une molécule peut posséder des liaisons polaires tout en ayant un moment dipolaire total nul par symétrie.",
        correct: true,
        explanation: "Dans une géométrie symétrique, les moments de liaison peuvent se compenser vectoriellement.",
      },
      {
        content: "Les interactions de dispersion de London peuvent exister entre des molécules apolaires.",
        correct: true,
        explanation: "Elles proviennent de fluctuations instantanées de la distribution électronique et existent même sans dipôle permanent.",
      },
      {
        content: "Toute molécule contenant un atome d’oxygène est automatiquement donneuse de liaison hydrogène.",
        correct: false,
        explanation: "Il faut notamment un hydrogène lié à un atome suffisamment électronégatif ; un éther possède un oxygène accepteur mais n’est pas donneur.",
      },
      {
        content: "Le moment dipolaire d’une molécule polyatomique est la somme arithmétique des valeurs absolues de tous les moments de liaison.",
        correct: false,
        explanation: "Il s’agit d’une somme vectorielle : la géométrie de la molécule est déterminante.",
      },
      {
        content: "Les forces intermoléculaires sont des liaisons covalentes supplémentaires entre molécules.",
        correct: false,
        explanation: "Elles correspondent à des interactions non covalentes distinctes des liaisons intramoléculaires.",
      },
    ],
  },
  {
    order: 6,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: String.raw`L’urée a pour formule $\ce{CO(NH2)2}$. Quelle est sa masse molaire ? Donnez uniquement la valeur numérique, exprimée en $${U.G_PER_MOL}$.

Données : $M(\mathrm C)=${texQuantity(12, U.G_PER_MOL)}$, $M(\mathrm H)=${texQuantity(1, U.G_PER_MOL)}$, $M(\mathrm N)=${texQuantity(14, U.G_PER_MOL)}$ et $M(\mathrm O)=${texQuantity(16, U.G_PER_MOL)}$.`,
    explanation: String.raw`L’urée contient 1 C, 4 H, 2 N et 1 O : $12 + 4\times1 + 2\times14 + 16 = ${texQuantity(60, U.G_PER_MOL)}$.`,
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:calcul-masse-molaire'],
    answer: {
      type: 'number',
      value: 60,
      tolerance: 0,
      unit: 'g/mol',
      displayUnit: U.G_PER_MOL,
    },
  },
  {
    order: 7,
    difficulty: 'EASY',
    format: 'QRU',
    question: String.raw`Quelle fonction principale reconnaît-on dans la molécule $\ce{CH3CONH2}$ ?`,
    explanation: "Un amide comporte un azote directement lié au carbone d’un groupe carbonyle.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:reconnaissance-fonctions'],
    choices: [
      {
        content: "Amine.",
        correct: false,
        explanation: "Dans une amine, l’azote n’est pas directement lié au carbone d’un carbonyle.",
      },
      {
        content: "Amide.",
        correct: true,
        explanation: "Le motif $\\ce{CH3-C(=O)-NH2}$ correspond à un amide.",
      },
      {
        content: "Nitrile.",
        correct: false,
        explanation: "Un nitrile contient le motif $\\ce{C#N}$.",
      },
      {
        content: "Ester.",
        correct: false,
        explanation: "Un ester comporte le motif C(=O)–O–C.",
      },
      {
        content: "Aldéhyde.",
        correct: false,
        explanation: "Un aldéhyde possède un carbonyle terminal portant un hydrogène.",
      },
    ],
  },
  {
    order: 8,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux associations correctes entre structure carbonée et classification.",
    explanation: "Le degré d’un carbone dépend du nombre de carbones auxquels il est directement lié, tandis que la classe d’un alcool dépend du degré du carbone portant le groupe hydroxyle.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:degre-carbone-classe-alcool'],
    choices: [
      {
        content: "Dans le propan-2-ol, le carbone portant OH est un carbone secondaire.",
        correct: true,
        explanation: "Il est directement lié à deux autres carbones.",
      },
      {
        content: "Le 2-méthylpropan-2-ol est un alcool tertiaire.",
        correct: true,
        explanation: "Le carbone portant OH est lié à trois groupes carbonés.",
      },
      {
        content: "Un carbone quaternaire porte nécessairement quatre atomes d’hydrogène.",
        correct: false,
        explanation: "Un carbone quaternaire est lié à quatre autres carbones et ne porte donc aucun hydrogène.",
      },
      {
        content: "Tout alcool primaire possède exactement un seul atome de carbone dans la molécule.",
        correct: false,
        explanation: "La classe primaire dépend du carbone portant OH, pas du nombre total de carbones.",
      },
      {
        content: "Un carbone engagé dans un groupe carbonyle C=O est classé quaternaire dès qu’il forme quatre liaisons au total.",
        correct: false,
        explanation: "Le degré carboné se compte par le nombre de voisins carbonés, pas par le nombre total de liaisons.",
      },
    ],
  },
  {
    order: 9,
    difficulty: 'MEDIUM',
    format: 'QRPL',
    requiredSelectionCount: 5,
    question: "Parmi ces dix propositions de chimie générale et organique, sélectionnez exactement les cinq exactes.",
    explanation: "Cette synthèse mobilise liaison chimique, hybridation, isomérie, fonctions et réactivité. Il faut distinguer structure électronique, géométrie et transformations chimiques.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:synthese-transversale'],
    choices: [
      {
        content: "Un carbone sp possède classiquement une géométrie linéaire, également dite digonale.",
        correct: true,
        explanation: "Deux directions de liaison opposées sont associées à l’hybridation sp.",
      },
      {
        content: "Une molécule chirale et son image miroir non superposable constituent une paire d’énantiomères.",
        correct: true,
        explanation: "C’est la relation stéréochimique définissant les énantiomères.",
      },
      {
        content: "L’hydrogénation catalytique d’un alcène consomme du dihydrogène et réduit la double liaison.",
        correct: true,
        explanation: "Les deux hydrogènes s’ajoutent sur les carbones de l’ancienne liaison C=C.",
      },
      {
        content: "Le carbone du groupe carbonyle porte un caractère électrophile.",
        correct: true,
        explanation: "La polarisation $\\mathrm{C}^{\\delta+}$–$\\mathrm{O}^{\\delta-}$ rend le carbone sensible à l’attaque des nucléophiles.",
      },
      {
        content: "Un carboxylate est stabilisé par délocalisation de la charge négative sur les deux oxygènes.",
        correct: true,
        explanation: "Les deux formes mésomères principales contribuent à cette stabilisation.",
      },
      {
        content: "Une amide est généralement plus basique qu’une amine comparable parce que le doublet de l’azote est plus disponible.",
        correct: false,
        explanation: "La conjugaison du doublet avec le carbonyle diminue fortement sa disponibilité.",
      },
      {
        content: "La rotation autour d’une double liaison C=C est aussi libre qu’autour d’une liaison simple C–C.",
        correct: false,
        explanation: "La composante $\\pi$ s’oppose à une rotation libre.",
      },
      {
        content: "Un ester possède nécessairement un groupe hydroxyle libre O–H.",
        correct: false,
        explanation: "Le motif ester est R–C(=O)–O–R′ ; il ne comporte pas nécessairement de O–H.",
      },
      {
        content: "Deux diastéréoisomères sont des images miroir non superposables l’un de l’autre.",
        correct: false,
        explanation: "Cette définition correspond aux énantiomères ; les diastéréoisomères ne sont pas images miroir.",
      },
      {
        content: "Une cétone simple s’oxyde usuellement plus facilement en acide carboxylique qu’un aldéhyde.",
        correct: false,
        explanation: "Les aldéhydes s’oxydent généralement beaucoup plus facilement que les cétones simples.",
      },
    ],
  },
  {
    order: 10,
    difficulty: 'EASY',
    format: 'QRM',
    question: "En comparant les molécules A et B, quelles propositions sont exactes ?",
    explanation: "Les deux molécules ont la même formule brute et la même connectivité : elles ne sont donc pas des isomères de constitution. Elles diffèrent par la disposition des substituants autour de C=C. La composante $\\pi$ de la double liaison empêche une rotation libre permettant de passer de l’une à l’autre sans rupture du recouvrement. Les formes E/Z sont des stéréoisomères géométriques et non une paire d’énantiomères.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:isomerie'],
    choices: [
      {
        content: "A et B possèdent la même formule brute.",
        correct: true,
        explanation: "Vrai. Les deux représentations correspondent au but-2-ène $\\ce{C4H8}$.",
      },
      {
        content: "A et B possèdent la même connectivité atomique et diffèrent par leur arrangement spatial.",
        correct: true,
        explanation: "Vrai. C’est la définition même de la stéréoisomérie.",
      },
      {
        content: "La double liaison empêche leur interconversion par une simple rotation libre autour de C=C.",
        correct: true,
        explanation: "Vrai. Le recouvrement $\\pi$ s’oppose à la rotation libre à température ordinaire.",
      },
      {
        content: "A et B sont des isomères de constitution car l’ordre de liaison des atomes diffère.",
        correct: false,
        explanation: "Faux. L’enchaînement des atomes est rigoureusement identique.",
      },
      {
        content: "A et B constituent nécessairement une paire d’énantiomères.",
        correct: false,
        explanation: "Faux. Il s’agit de diastéréoisomères géométriques E/Z achiraux.",
      },
    ],
  },
  {
    order: 11,
    difficulty: 'EASY',
    format: 'QROC',
    question: "Quel est l’état d’hybridation classique de chacun des deux carbones engagés dans la double liaison C=C des molécules A et B ?",
    explanation: "Chacun des deux carbones d’une double liaison C=C est classiquement hybridé $\\mathrm{sp}^2$. Les trois orbitales hybrides forment une géométrie trigonale plane et l’orbitale p non hybridée participe à la liaison $\\pi$.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:hybridation'],
    answer: {
      type: 'text',
      acceptedAnswers: ['sp2', 'sp²'],
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
    difficulty: 'HARD',
    format: 'QRU',
    question: "Dans la molécule A, les substituants de plus haute priorité CIP sur chacun des deux carbones de la double liaison sont situés du même côté. Quel descripteur s’applique ?",
    explanation: "Pour attribuer E/Z, les priorités CIP sont établies séparément sur chacun des deux carbones de C=C. Lorsque les deux substituants de plus haute priorité sont du même côté, le descripteur est Z ; s’ils sont de côtés opposés, le descripteur est E.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:stereochimie-e-z'],
    choices: [
      {
        content: "R.",
        correct: false,
        explanation: "R/S s’applique à un centre stéréogène tétraédrique.",
      },
      {
        content: "S.",
        correct: false,
        explanation: "S s’applique également à un centre stéréogène tétraédrique.",
      },
      {
        content: "Z.",
        correct: true,
        explanation: "Z s’applique lorsque les deux groupes de plus haute priorité sont situés du même côté.",
      },
      {
        content: "E.",
        correct: false,
        explanation: "E s’applique lorsque les groupes prioritaires sont de côtés opposés.",
      },
      {
        content: "D.",
        correct: false,
        explanation: "D relève d’une nomenclature relative distincte.",
      },
    ],
  },
  {
    order: 13,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "À propos des transformations possibles de la double liaison de la molécule A, sélectionnez exactement les deux propositions correctes.",
    explanation: "L’hydrogénation catalytique ajoute $\\ce{H2}$ sur la double liaison et forme l’alcane correspondant. Une hydrohalogénation ajoute H et Br sur les deux carbones de C=C en consommant la liaison $\\pi$. Une double liaison C=C définit ici un alcène et non un alcyne.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:reactivite-hydrocarbures'],
    choices: [
      {
        content: "Une hydrogénation catalytique par $\\ce{H2}$ peut transformer A en butane.",
        correct: true,
        explanation: "L’addition de $\\ce{H2}$ sur C=C donne le butane $\\ce{C4H10}$.",
      },
      {
        content: "L’addition de $\\ce{HBr}$ sur A consomme la liaison $\\pi$ et conduit à un bromoalcane.",
        correct: true,
        explanation: "L’addition électrophile de $\\ce{HBr}$ produit le 2-bromobutane.",
      },
      {
        content: "Une hydrogénation catalytique transforme directement A en alcool sans autre réactif.",
        correct: false,
        explanation: "L’hydrogénation catalytique d’un alcène donne un alcane.",
      },
      {
        content: "L’addition de $\\ce{HBr}$ conserve obligatoirement la double liaison C=C intacte.",
        correct: false,
        explanation: "L’addition sur un alcène consomme la liaison $\\pi$.",
      },
      {
        content: "La molécule A est un alcyne parce qu’elle contient une insaturation.",
        correct: false,
        explanation: "Une double liaison C=C définit un alcène ; un alcyne comporte une triple liaison $\\ce{C#C}$.",
      },
    ],
  },
  {
    order: 14,
    difficulty: 'EASY',
    format: 'QRM',
    question: "À propos des alcools, des amines et des dérivés halogénés, quelles propositions sont exactes ?",
    explanation: "L’oxydation d’un alcool dépend de sa classe, et l’azote d’une amine possède un doublet libre qui lui confère notamment un caractère nucléophile.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:alcools-amines-halogenes'],
    choices: [
      {
        content: "L’oxydation ménagée d’un alcool primaire peut conduire à un aldéhyde.",
        correct: true,
        explanation: "Une oxydation plus poussée peut ensuite mener à l’acide carboxylique.",
      },
      {
        content: "Une amine neutre possède un doublet libre sur l’azote susceptible de participer à une attaque nucléophile.",
        correct: true,
        explanation: "Ce doublet explique une part importante de la basicité et de la nucléophilie des amines.",
      },
      {
        content: "Un alcool secondaire s’oxyde classiquement en aldéhyde.",
        correct: false,
        explanation: "Il s’oxyde en cétone.",
      },
      {
        content: "Un ammonium quaternaire est une amine tertiaire non chargée.",
        correct: false,
        explanation: "L’azote d’un ammonium quaternaire porte quatre substituants carbonés et une charge positive.",
      },
      {
        content: "Dans un dérivé halogéné R–X, X désigne toujours un groupe hydroxyle.",
        correct: false,
        explanation: "X représente un halogène.",
      },
    ],
  },
  {
    order: 15,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: String.raw`Après réduction de la propanone $\ce{CH3COCH3}$ par $\ce{NaBH4}$, quelle classe d’alcool obtient-on ?`,
    explanation: "La réduction d’une cétone transforme le carbonyle en alcool sans modifier les deux substituants carbonés du carbone concerné : on obtient donc un alcool secondaire.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:reduction-cetone'],
    answer: {
      type: 'text',
      acceptedAnswers: ['alcool secondaire', 'secondaire'],
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
    difficulty: 'HARD',
    format: 'QRU',
    question: "Quelle proposition caractérise correctement une substitution nucléophile $\\text{S}_\\text{N}2$ sur un centre stéréogène ?",
    explanation: "Une $\\text{S}_\\text{N}2$ est concertée : le nucléophile attaque par la face opposée au groupe partant, ce qui conduit à une inversion géométrique au centre réactionnel.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:sn2'],
    choices: [
      {
        content: "Elle passe obligatoirement par un carbocation plan isolable.",
        correct: false,
        explanation: "Le carbocation est caractéristique du schéma $\\text{S}_\\text{N}1$ ; la $\\text{S}_\\text{N}2$ est concertée.",
      },
      {
        content: "Elle conduit nécessairement à un mélange racémique 50/50.",
        correct: false,
        explanation: "Une $\\text{S}_\\text{N}2$ stéréospécifique produit une inversion au centre attaqué, pas une racémisation.",
      },
      {
        content: "Le nucléophile attaque préférentiellement du même côté que le groupe partant.",
        correct: false,
        explanation: "L’attaque se fait par l’arrière, du côté opposé au groupe partant.",
      },
      {
        content: "Elle s’effectue en une étape concertée avec inversion de la géométrie au centre attaqué.",
        correct: true,
        explanation: "C’est l’inversion de Walden caractéristique d’une $\\text{S}_\\text{N}2$ sur un centre tétraédrique stéréogène.",
      },
      {
        content: "Elle nécessite toujours un dérivé halogéné tertiaire pour être rapide.",
        correct: false,
        explanation: "L’encombrement stérique d’un centre tertiaire défavorise fortement la $\\text{S}_\\text{N}2$.",
      },
    ],
  },
  {
    order: 17,
    difficulty: 'HARD',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux propositions correctes concernant esters, amides et thioesters.",
    explanation: "Les esters s’hydrolysent plus facilement que les amides dans des conditions comparables, car la conjugaison de l’azote renforce le caractère de double liaison de C–N. Les thioesters restent des dérivés d’acides hydrolysables.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:esters-amides-thioesters'],
    choices: [
      {
        content: "La saponification d’un ester en milieu basique conduit notamment à un carboxylate.",
        correct: true,
        explanation: "L’hydrolyse basique produit le sel de l’acide carboxylique et un alcool.",
      },
      {
        content: "La liaison C–N d’un amide possède un caractère partiel de double liaison par conjugaison.",
        correct: true,
        explanation: "Le doublet de l’azote est délocalisé vers le carbonyle, ce qui limite la rotation autour de C–N.",
      },
      {
        content: "Un amide s’hydrolyse toujours plus facilement qu’un ester.",
        correct: false,
        explanation: "L’amide est généralement moins réactif et demande des conditions plus sévères hors catalyse enzymatique.",
      },
      {
        content: "Un thioester ne comporte jamais de carbonyle.",
        correct: false,
        explanation: "Le motif thioester est R–C(=O)–S–R′.",
      },
      {
        content: "L’acétyl-CoA est un éther-oxyde dépourvu de liaison thioester.",
        correct: false,
        explanation: "L’acétyl-CoA comporte précisément une liaison thioester.",
      },
    ],
  },
  {
    order: 18,
    difficulty: 'HARD',
    format: 'QRPL',
    requiredSelectionCount: 5,
    question: "Parmi les propositions suivantes, lesquelles décrivent correctement des relations entre structure moléculaire et réactivité ?",
    explanation: "Cette synthèse transversale relie la structure atomique, la liaison, la stéréochimie et les grands types de réactivité vus dans l’EC.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:structure-reactivite-integree'],
    choices: [
      {
        content: "Deux isotopes d’un même élément possèdent le même numéro atomique Z.",
        correct: true,
        explanation: "Ils possèdent le même nombre de protons et diffèrent par leur nombre de neutrons.",
      },
      {
        content: "Une triple liaison $\\ce{C#C}$ comporte une liaison $\\sigma$ et deux liaisons $\\pi$.",
        correct: true,
        explanation: "Le recouvrement axial forme une liaison $\\sigma$ et deux recouvrements latéraux orthogonaux forment les deux liaisons $\\pi$.",
      },
      {
        content: "Un carbone hybridé sp présente classiquement une géométrie linéaire, également dite digonale.",
        correct: true,
        explanation: "Les deux orbitales hybrides sp sont orientées à 180°.",
      },
      {
        content: "Une substitution nucléophile $\\text{S}_\\text{N}2$ concertée sur un centre stéréogène s’accompagne d’une inversion de géométrie au centre attaqué.",
        correct: true,
        explanation: "L’attaque arrière du nucléophile conduit à l’inversion dite de Walden.",
      },
      {
        content: "La liaison C–N d’un amide possède un caractère partiel de double liaison.",
        correct: true,
        explanation: "La délocalisation électronique par mésomérie limite la rotation autour de cette liaison.",
      },
      {
        content: "Un carbone hybridé $\\mathrm{sp}^3$ possède une géométrie trigonale plane.",
        correct: false,
        explanation: "Un carbone $\\mathrm{sp}^3$ adopte classiquement une géométrie tétraédrique.",
      },
      {
        content: "Deux énantiomères se distinguent par une connectivité atomique différente.",
        correct: false,
        explanation: "Ils possèdent la même connectivité mais sont images l’un de l’autre dans un miroir et non superposables.",
      },
      {
        content: "Un alcène est un hydrocarbure saturé qui ne subit pas de réaction d’addition sur sa double liaison.",
        correct: false,
        explanation: "Un alcène est insaturé et sa liaison $\\pi$ peut participer à des réactions d’addition.",
      },
      {
        content: "Un ammonium quaternaire est électriquement neutre.",
        correct: false,
        explanation: "L’azote porte une charge formelle positive.",
      },
      {
        content: "Une liaison hydrogène est nécessairement une liaison covalente intramoléculaire.",
        correct: false,
        explanation: "Une liaison hydrogène est une interaction non covalente et peut être intra- ou intermoléculaire.",
      },
    ],
  },
  {
    order: 19,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "À propos des aldéhydes et des cétones, quelles propositions sont exactes ?",
    explanation: "Le carbonyle est polarisé avec un carbone électrophile. Les aldéhydes sont généralement plus facilement oxydables que les cétones simples et la réduction par hydrure donne des alcools de classe différente selon la fonction initiale.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:aldehydes-cetones'],
    choices: [
      {
        content: "Le carbone du groupe C=O est électrophile.",
        correct: true,
        explanation: "L’oxygène attire la densité électronique et polarise la liaison C=O.",
      },
      {
        content: "La réduction d’un aldéhyde par un hydrure doux peut produire un alcool primaire.",
        correct: true,
        explanation: "$\\mathrm{R{-}CHO}$ devient $\\mathrm{R{-}CH_2OH}$.",
      },
      {
        content: "La réduction d’une cétone par $\\ce{NaBH4}$ peut produire un alcool secondaire.",
        correct: true,
        explanation: "R–CO–R′ devient R–CHOH–R′.",
      },
      {
        content: "Un aldéhyde s’oxyde généralement plus facilement qu’une cétone simple.",
        correct: true,
        explanation: "Les aldéhydes peuvent notamment être oxydés en acides carboxyliques dans des conditions où une cétone simple résiste.",
      },
      {
        content: "Une cétone possède nécessairement le carbonyle en extrémité de chaîne et lié à un hydrogène.",
        correct: false,
        explanation: "Cette description correspond à un aldéhyde ; une cétone porte deux substituants carbonés autour du carbonyle.",
      },
    ],
  },
  {
    order: 20,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: "Après addition d’un organomagnésien sur une cétone puis hydrolyse, quelle classe d’alcool obtient-on classiquement ?",
    explanation: "Le carbone du carbonyle d’une cétone porte déjà deux substituants carbonés. L’addition du groupe de l’organomagnésien apporte un troisième substituant : l’alcool obtenu est tertiaire.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:grignard-cetone'],
    answer: {
      type: 'text',
      acceptedAnswers: ['alcool tertiaire', 'tertiaire'],
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
    order: 21,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: "Quelle proposition décrit correctement une voie de préparation d’un acide carboxylique ?",
    explanation: "La carboxylation d’un organomagnésien par $\\ce{CO2}$ ajoute le carbone du dioxyde de carbone au squelette carboné. Après hydrolyse acide, on obtient un acide carboxylique.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:preparation-acides'],
    choices: [
      {
        content: "La réduction douce d’un alcool secondaire conduit directement à un acide carboxylique.",
        correct: false,
        explanation: "Un alcool secondaire s’oxyde en cétone ; une réduction ne conduit pas à un acide.",
      },
      {
        content: "L’hydrogénation d’un alcane saturé forme nécessairement un acide carboxylique.",
        correct: false,
        explanation: "Un alcane est déjà saturé et l’hydrogénation ne crée pas une fonction acide.",
      },
      {
        content: "L’hydrolyse d’un nitrile s’arrête toujours obligatoirement à l’amide.",
        correct: false,
        explanation: "L’hydrolyse peut se poursuivre jusqu’à l’acide carboxylique selon les conditions.",
      },
      {
        content: "La déshydratation d’un alcool primaire fournit directement un acide sans étape d’oxydation.",
        correct: false,
        explanation: "La déshydratation conduit plutôt à une élimination donnant un alcène.",
      },
      {
        content: "Un organomagnésien réagissant avec $\\ce{CO2}$ puis hydrolysé fournit un acide carboxylique possédant un carbone de plus que le groupe carboné initial.",
        correct: true,
        explanation: "Le carbone de $\\ce{CO2}$ devient le carbone carboxylique du produit.",
      },
    ],
  },
  {
    order: 22,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "À propos des acides carboxyliques, de leurs dérivés et de certaines espèces nucléophiles biologiques, quelles propositions sont exactes ?",
    explanation: "La déprotonation d’un acide carboxylique donne un carboxylate stabilisé par résonance. Les chlorures d’acyle sont des dérivés activés fortement électrophiles, et plusieurs hétéroatomes des bases nucléiques peuvent agir comme nucléophiles vis-à-vis d’électrophiles adaptés.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:acides-derives-nucleophiles'],
    choices: [
      {
        content: "La charge négative d’un ion carboxylate est délocalisée sur deux atomes d’oxygène.",
        correct: true,
        explanation: "Cette délocalisation explique en partie la stabilité de la base conjuguée.",
      },
      {
        content: "Un chlorure d’acyle est plus réactif vis-à-vis de nombreux nucléophiles qu’un acide carboxylique non activé.",
        correct: true,
        explanation: "La substitution nucléophile d’acyle est facilitée par le caractère du groupe partant chlorure.",
      },
      {
        content: "Certains atomes d’azote ou d’oxygène des bases nucléiques peuvent participer à des attaques nucléophiles.",
        correct: true,
        explanation: "Leurs doublets électroniques peuvent réagir avec des électrophiles adaptés, notamment lors d’alkylations.",
      },
      {
        content: "Un nucléotide est, par définition, dépourvu de groupement phosphate.",
        correct: false,
        explanation: "Le phosphate distingue précisément un nucléotide du nucléoside correspondant.",
      },
      {
        content: "Un carboxylate concentre sa charge négative sur un seul oxygène sans aucune mésomérie.",
        correct: false,
        explanation: "Les formes mésomères délocalisent la charge sur les deux oxygènes.",
      },
    ],
  },
  {
    order: 23,
    difficulty: 'HARD',
    format: 'QROC',
    question: String.raw`Un composé ne contient que C, H et O. Sa composition massique est de 40,0 % de C, 6,7 % de H et 53,3 % de O. Quelle est sa formule empirique ?

Données : $M(\mathrm C)=${texQuantity(12, U.G_PER_MOL)}$, $M(\mathrm H)=${texQuantity(1, U.G_PER_MOL)}$ et $M(\mathrm O)=${texQuantity(16, U.G_PER_MOL)}$.`,
    explanation: String.raw`Pour 100 g : $n_C=40/12\approx3{,}33$, $n_H=6{,}7/1=6{,}7$ et $n_O=53{,}3/16\approx3{,}33$. En divisant par 3,33, on obtient approximativement $1:2:1$, soit $\ce{CH2O}$.`,
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:microanalyse-formule-empirique'],
    answer: {
      type: 'text',
      acceptedAnswers: ['CH2O', 'CH₂O', 'C1H2O1'],
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
    order: 24,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: "Lorsqu’une molécule contient simultanément une fonction acide carboxylique, une fonction amide, une fonction nitrile et une fonction alcool, laquelle est prioritaire pour choisir le suffixe principal dans la hiérarchie utilisée pour la nomenclature de cette EC ?",
    explanation: "La hiérarchie de consolidation utilisée est : acide carboxylique > ester > amide > nitrile > aldéhyde > cétone > alcool > thiol > amine.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:nomenclature-priorite-fonctions'],
    choices: [
      {
        content: "La fonction alcool.",
        correct: false,
        explanation: "L’alcool est moins prioritaire que l’acide carboxylique dans cette hiérarchie.",
      },
      {
        content: "La fonction acide carboxylique.",
        correct: true,
        explanation: "Elle est placée au sommet de la hiérarchie fonctionnelle utilisée.",
      },
      {
        content: "La fonction nitrile.",
        correct: false,
        explanation: "Le nitrile est prioritaire sur plusieurs fonctions mais reste en dessous de l’acide carboxylique.",
      },
      {
        content: "La fonction amide.",
        correct: false,
        explanation: "L’amide est moins prioritaire que l’acide carboxylique.",
      },
      {
        content: "Toutes les fonctions sont équivalentes ; le suffixe se choisit par ordre alphabétique.",
        correct: false,
        explanation: "Le choix du suffixe dépend d’une hiérarchie fonctionnelle, pas de l’ordre alphabétique.",
      },
    ],
  },
  {
    order: 25,
    difficulty: 'EASY',
    format: 'QRM',
    question: "À propos des règles de base de nomenclature organique, quelles propositions sont exactes ?",
    explanation: "La chaîne parente doit intégrer la fonction principale et recevoir une numérotation cohérente avec les règles de priorité. Les préfixes méth-, éth-, prop- et but- indiquent respectivement 1, 2, 3 et 4 carbones.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:nomenclature-base'],
    choices: [
      {
        content: "Le préfixe prop- correspond à une chaîne principale de trois atomes de carbone.",
        correct: true,
        explanation: "Prop- désigne trois carbones.",
      },
      {
        content: "Un substituant CH3– est nommé méthyle.",
        correct: true,
        explanation: "Le groupe alkyle dérivé du méthane par perte d’un hydrogène est le groupe méthyle.",
      },
      {
        content: "Le préfixe éth- correspond à quatre atomes de carbone.",
        correct: false,
        explanation: "Éth- correspond à deux carbones ; but- correspond à quatre.",
      },
      {
        content: "La présence de plusieurs fonctions impose de choisir le suffixe principal au hasard.",
        correct: false,
        explanation: "La fonction principale est déterminée par une hiérarchie de priorité.",
      },
      {
        content: "Le degré d’un carbone est défini par le nombre total d’atomes, hydrogènes compris, auxquels il est lié.",
        correct: false,
        explanation: "Le degré carboné dépend du nombre d’atomes de carbone directement liés à ce carbone.",
      },
    ],
  },
  {
    order: 26,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "Une molécule polyfonctionnelle doit être nommée de façon systématique. Quelles propositions décrivent correctement la méthode ?",
    explanation: "La nomenclature polyfonctionnelle exige d’identifier toutes les fonctions, de choisir la fonction principale, de sélectionner une chaîne parente compatible, de numéroter puis de traiter les fonctions secondaires comme préfixes lorsque nécessaire.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:nomenclature-polyfonctionnelle'],
    choices: [
      {
        content: "La première étape utile est d’identifier les fonctions présentes dans la structure.",
        correct: true,
        explanation: "On ne peut déterminer la fonction principale sans inventaire préalable des fonctions.",
      },
      {
        content: "La fonction principale détermine notamment le suffixe du nom.",
        correct: true,
        explanation: "Les fonctions secondaires sont ensuite exprimées par des préfixes ou autres conventions adaptées.",
      },
      {
        content: "La chaîne parente doit être choisie en tenant compte de la fonction principale.",
        correct: true,
        explanation: "Le carbone de la fonction principale doit être intégré selon les règles propres à cette fonction.",
      },
      {
        content: String.raw`La molécule $\ce{HO-CH2-CH2-CHO}$ peut être nommée 3-hydroxypropanal.`,
        correct: true,
        explanation: "Le carbone de l’aldéhyde est C1 ; le groupe hydroxy se trouve alors en C3.",
      },
      {
        content: "L’ordre alphabétique des préfixes remplace toujours la hiérarchie des fonctions pour choisir le suffixe.",
        correct: false,
        explanation: "La hiérarchie des fonctions détermine la fonction principale ; l’ordre alphabétique intervient dans d’autres étapes d’assemblage du nom.",
      },
    ],
  },
  {
    order: 27,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "En vous appuyant sur les composés carbonylés B et D et sur la réaction de D avec $\\mathrm{CH_3MgBr}$, quelles propositions sont exactes ?",
    explanation: "La liaison C=O est polarisée vers l’oxygène : le carbone carbonylé est appauvri en densité électronique et constitue un centre électrophile. Dans un organomagnésien, le fragment carboné présente au contraire un fort caractère nucléophile et peut attaquer ce carbone. La conjugaison d’une amide diminue la disponibilité du doublet de l’azote et un éther ne possède pas de liaison O–H lui permettant d’être donneur classique de liaison hydrogène.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:polarite-reactivite'],
    choices: [
      {
        content: "Le carbone du groupe C=O de B et de D constitue un centre électrophile susceptible d’être attaqué par un nucléophile.",
        correct: true,
        explanation: "Le carbone porte une charge partielle positive en raison de l’électronégativité supérieure de l’oxygène.",
      },
      {
        content: "Dans $\\mathrm{CH_3MgBr}$, le fragment carboné se comporte comme un nucléophile vis-à-vis du carbone carbonylé de D.",
        correct: true,
        explanation: "Le fragment carboné de l’organomagnésien est fortement nucléophile.",
      },
      {
        content: "L’oxygène du carbonyle est le centre électrophile principal attaqué par le fragment carboné de l’organomagnésien.",
        correct: false,
        explanation: "L’attaque a lieu sur le carbone carbonylé, pauvre en électrons, pas sur l’oxygène.",
      },
      {
        content: "La conjugaison du doublet de l’azote avec un carbonyle rend une amide plus basique qu’une amine simple comparable.",
        correct: false,
        explanation: "La conjugaison délocalise le doublet et diminue la basicité de l’azote amidique.",
      },
      {
        content: "La présence d’un oxygène d’éther suffit toujours à rendre une molécule donneuse de liaison hydrogène.",
        correct: false,
        explanation: "Un éther peut être accepteur de liaison hydrogène mais ne possède pas de liaison O–H donneuse.",
      },
    ],
  },
  {
    order: 28,
    difficulty: 'HARD',
    format: 'QRM',
    question: "À partir des transformations représentées, quelles propositions sont exactes ?",
    explanation: "A est un alcool primaire qui peut être oxydé en aldéhyde B puis en acide C. La réduction de B par un hydrure peut reformer A. L’addition de $\\mathrm{CH_3MgBr}$ sur la propanone D suivie d’une hydrolyse donne le 2-méthylpropan-2-ol, un alcool tertiaire. Un organomagnésien est détruit par l’eau et doit être utilisé en milieu anhydre avant l’étape d’hydrolyse.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:enchaînements-reactionnels'],
    choices: [
      {
        content: "L’oxydation ménagée de A peut donner B.",
        correct: true,
        explanation: "L’oxydation ménagée d’un alcool primaire A conduit à l’aldéhyde B.",
      },
      {
        content: "Une oxydation plus poussée de B peut conduire à C.",
        correct: true,
        explanation: "L’aldéhyde B s’oxyde en acide carboxylique C.",
      },
      {
        content: "La réduction de B par $\\ce{NaBH4}$ peut régénérer A.",
        correct: true,
        explanation: "La réduction de l’aldéhyde B par un hydrure régénère l’alcool primaire A.",
      },
      {
        content: "L’addition de $\\mathrm{CH_3MgBr}$ sur D puis hydrolyse peut former le 2-méthylpropan-2-ol.",
        correct: true,
        explanation: "L’addition d’un méthyle sur la propanone D suivie d’hydrolyse produit le 2-méthylpropan-2-ol.",
      },
      {
        content: "Un organomagnésien peut être conservé intact en présence d’un excès d’eau avant son addition sur un carbonyle.",
        correct: false,
        explanation: "Les organomagnésiens sont détruits par les espèces protiques telles que l’eau.",
      },
    ],
  },
  {
    order: 29,
    difficulty: 'MEDIUM',
    format: 'QZONE',
    question: "Sur la molécule F, sélectionnez le carbone stéréogène.",
    explanation: "Le carbone portant le groupe OH dans F est lié à quatre substituants différents : H, OH, COOH et CH2CH3. Il constitue donc un centre stéréogène. Le carbone du carboxyle est $\\mathrm{sp}^2$ et le carbone CH2 porte deux hydrogènes identiques : aucun des deux n’est un centre stéréogène.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:qzone-stereochimie'],
    image: {
      src: '/images/training/ue14/colles/c10/integrated-reactivity-linked-q27-q30.svg',
      alt: 'Schéma de transformations reliant propan-1-ol, propanal et acide propanoïque, addition d’un organomagnésien sur la propanone, et structure d’une molécule polyfonctionnelle chirale F.',
      width: 1200,
      height: 760,
    },
    expectedZones: [
      {
        id: 'target-stereogenic-carbon-f',
        label: 'Carbone stéréogène de la molécule F',
        x: 0.8167,
        y: 0.5395,
        tolerance: 0.05,
      },
    ],
    defaultTolerance: 0.05,
  },
  {
    order: 30,
    difficulty: 'HARD',
    format: 'QRM',
    question: "En analysant la molécule F et les règles de stéréochimie et de nomenclature utilisées dans cette EC, quelles propositions sont exactes ?",
    explanation: "Le carbone portant OH est tétraédrique et lié à quatre substituants différents : il peut donc définir un centre stéréogène. La fonction acide carboxylique est prioritaire sur l’alcool et détermine le suffixe principal ; l’alcool est alors exprimé par hydroxy-. Un centre stéréogène tétraédrique carboné est classiquement $\\mathrm{sp}^3$. Deux images miroir non superposables gardent la même connectivité : ce sont des énantiomères.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:synthese-finale'],
    choices: [
      {
        content: "Le carbone portant OH dans F est un centre stéréogène car il est lié à quatre substituants différents.",
        correct: true,
        explanation: "Il porte H, OH, COOH et CH2CH3.",
      },
      {
        content: "Dans F, la fonction acide carboxylique est prioritaire sur la fonction alcool pour choisir le suffixe principal.",
        correct: true,
        explanation: "L’acide carboxylique possède la plus haute priorité parmi ces fonctions.",
      },
      {
        content: "Lorsque l’acide carboxylique est la fonction principale, le groupe OH de F peut être exprimé par le préfixe hydroxy-.",
        correct: true,
        explanation: "L’alcool secondaire est désigné par le préfixe hydroxy-.",
      },
      {
        content: "Le carbone stéréogène de F est hybridé $\\mathrm{sp}^2$ et possède une géométrie trigonale plane.",
        correct: false,
        explanation: "Le carbone stéréogène de F est hybridé $\\mathrm{sp}^3$ et tétraédrique.",
      },
      {
        content: "L’image miroir non superposable de F aurait nécessairement une connectivité atomique différente et serait donc un isomère de constitution.",
        correct: false,
        explanation: "L’image miroir non superposable est un énantiomère, conservant la même connectivité atomique.",
      },
    ],
  },
];
