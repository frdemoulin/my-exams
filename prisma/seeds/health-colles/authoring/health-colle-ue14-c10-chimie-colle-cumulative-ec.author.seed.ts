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
    question: "Sélectionnez exactement les deux propositions correctes à propos des liaisons σ et π.",
    explanation: "Une liaison simple est une liaison σ. Dans une double liaison, une liaison σ est accompagnée d’une liaison π ; dans une triple liaison, une σ est accompagnée de deux π.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:liaisons-sigma-pi'],
    choices: [
      {
        content: "Une liaison simple carbone-carbone est de type σ.",
        correct: true,
        explanation: "Elle résulte d’un recouvrement selon l’axe internucléaire.",
      },
      {
        content: "Une double liaison C=C comporte une liaison σ et une liaison π.",
        correct: true,
        explanation: "Le premier recouvrement forme σ et le second, latéral, forme π.",
      },
      {
        content: "Une triple liaison C≡C comporte trois liaisons π et aucune liaison σ.",
        correct: false,
        explanation: "Elle comporte une liaison σ et deux liaisons π.",
      },
      {
        content: "Une liaison π possède une symétrie axiale qui autorise une rotation libre sans perte de recouvrement.",
        correct: false,
        explanation: "La rotation autour d’une liaison π rompt le recouvrement latéral ; elle est donc fortement contrainte.",
      },
      {
        content: "Une liaison σ résulte toujours du recouvrement de deux orbitales p non hybridées.",
        correct: false,
        explanation: "Une liaison σ peut résulter de nombreux recouvrements axiaux, notamment s–s, s–p ou entre orbitales hybrides.",
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
        explanation: "Le motif CH3–C(=O)–NH2 correspond à un amide.",
      },
      {
        content: "Nitrile.",
        correct: false,
        explanation: "Un nitrile contient le motif C≡N.",
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
        explanation: "La polarisation Cδ+–Oδ− rend le carbone sensible à l’attaque des nucléophiles.",
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
        explanation: "La composante π s’oppose à une rotation libre.",
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
    question: "À propos de l’isomérie de constitution et de la stéréoisomérie, quelles propositions sont exactes ?",
    explanation: "Des isomères de constitution diffèrent par l’enchaînement de leurs atomes. Les stéréoisomères conservent la même connectivité mais diffèrent par l’organisation spatiale.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:isomerie'],
    choices: [
      {
        content: "Des isomères de constitution peuvent avoir la même formule brute et des fonctions chimiques différentes.",
        correct: true,
        explanation: "C’est le cas de certains isomères de fonction.",
      },
      {
        content: "Deux énantiomères ont la même connectivité atomique.",
        correct: true,
        explanation: "Ils diffèrent par leur configuration spatiale, pas par l’enchaînement des atomes.",
      },
      {
        content: "La présence d’un carbone tétraédrique lié à quatre substituants différents peut créer un centre stéréogène.",
        correct: true,
        explanation: "Ce motif est une cause classique de chiralité moléculaire.",
      },
      {
        content: "Deux conformères sont nécessairement des isomères de constitution.",
        correct: false,
        explanation: "Des conformères s’interconvertissent sans rupture de liaison et gardent la même connectivité.",
      },
      {
        content: "Une molécule possédant un centre stéréogène est toujours achirale.",
        correct: false,
        explanation: "Un centre stéréogène tétraédrique isolé conduit typiquement à une chiralité, sous réserve de la structure globale.",
      },
    ],
  },
  {
    order: 11,
    difficulty: 'EASY',
    format: 'QROC',
    question: "Quel est l’état d’hybridation classique d’un carbone engagé dans une double liaison C=C ?",
    explanation: "Un carbone alcénique utilise classiquement trois orbitales sp² pour les liaisons σ et conserve une orbitale p non hybridée pour la liaison π.",
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
    question: "Dans un alcène portant sur chacun des deux carbones deux substituants différents, les substituants de plus haute priorité CIP sont situés du même côté de la double liaison. Quel descripteur s’applique ?",
    explanation: "Le descripteur Z est attribué lorsque les substituants prioritaires selon CIP sont du même côté ; E correspond à des côtés opposés.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:stereochimie-e-z'],
    choices: [
      {
        content: "R.",
        correct: false,
        explanation: "R/S décrit la configuration absolue d’un centre stéréogène, pas la géométrie d’une double liaison.",
      },
      {
        content: "S.",
        correct: false,
        explanation: "S relève également de la nomenclature des centres stéréogènes tétraédriques.",
      },
      {
        content: "Z.",
        correct: true,
        explanation: "Z, de zusammen, correspond aux groupes prioritaires du même côté.",
      },
      {
        content: "E.",
        correct: false,
        explanation: "E correspond aux groupes prioritaires situés de côtés opposés.",
      },
      {
        content: "D.",
        correct: false,
        explanation: "D/L est une nomenclature relative distincte des descripteurs E/Z.",
      },
    ],
  },
  {
    order: 13,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux transformations correctes des hydrocarbures insaturés.",
    explanation: "Les doubles liaisons peuvent subir des additions. L’hydrogénation réduit C=C en liaison simple ; l’addition électrophile de HX peut présenter une régiosélectivité sur un alcène dissymétrique.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:reactivite-hydrocarbures'],
    choices: [
      {
        content: "Alcène + H2 en présence d’un catalyseur adapté → alcane.",
        correct: true,
        explanation: "L’hydrogénation ajoute un hydrogène sur chacun des carbones de l’ancienne double liaison.",
      },
      {
        content: "Un alcène dissymétrique peut donner une addition de HX régiosélective selon les conditions réactionnelles.",
        correct: true,
        explanation: "Dans le mécanisme ionique usuel, la stabilité de l’intermédiaire contribue à orienter l’addition.",
      },
      {
        content: "Une hydrogénation transforme directement un alcène en alcool sans autre réactif.",
        correct: false,
        explanation: "L’hydrogénation classique produit un alcane.",
      },
      {
        content: "L’addition de HX sur une double liaison conserve obligatoirement la liaison π intacte.",
        correct: false,
        explanation: "L’addition consomme la liaison π de l’alcène.",
      },
      {
        content: "Un alcyne est défini par la présence d’une double liaison C=C.",
        correct: false,
        explanation: "Un alcyne contient au moins une triple liaison C≡C.",
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
    question: "Quelle proposition caractérise correctement une substitution nucléophile SN2 sur un centre stéréogène ?",
    explanation: "Une SN2 est concertée : le nucléophile attaque par la face opposée au groupe partant, ce qui conduit à une inversion géométrique au centre réactionnel.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:sn2'],
    choices: [
      {
        content: "Elle passe obligatoirement par un carbocation plan isolable.",
        correct: false,
        explanation: "Le carbocation est caractéristique du schéma SN1 ; la SN2 est concertée.",
      },
      {
        content: "Elle conduit nécessairement à un mélange racémique 50/50.",
        correct: false,
        explanation: "Une SN2 stéréospécifique produit une inversion au centre attaqué, pas une racémisation.",
      },
      {
        content: "Le nucléophile attaque préférentiellement du même côté que le groupe partant.",
        correct: false,
        explanation: "L’attaque se fait par l’arrière, du côté opposé au groupe partant.",
      },
      {
        content: "Elle s’effectue en une étape concertée avec inversion de la géométrie au centre attaqué.",
        correct: true,
        explanation: "C’est l’inversion de Walden caractéristique d’une SN2 sur un centre tétraédrique stéréogène.",
      },
      {
        content: "Elle nécessite toujours un dérivé halogéné tertiaire pour être rapide.",
        correct: false,
        explanation: "L’encombrement stérique d’un centre tertiaire défavorise fortement la SN2.",
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
        content: "Une triple liaison C≡C comporte une liaison σ et deux liaisons π.",
        correct: true,
        explanation: "Le recouvrement axial forme une liaison σ et deux recouvrements latéraux orthogonaux forment les deux liaisons π.",
      },
      {
        content: "Un carbone hybridé sp présente classiquement une géométrie linéaire, également dite digonale.",
        correct: true,
        explanation: "Les deux orbitales hybrides sp sont orientées à 180°.",
      },
      {
        content: "Une substitution nucléophile SN2 concertée sur un centre stéréogène s’accompagne d’une inversion de géométrie au centre attaqué.",
        correct: true,
        explanation: "L’attaque arrière du nucléophile conduit à l’inversion dite de Walden.",
      },
      {
        content: "La liaison C–N d’un amide possède un caractère partiel de double liaison.",
        correct: true,
        explanation: "La délocalisation électronique par mésomérie limite la rotation autour de cette liaison.",
      },
      {
        content: "Un carbone hybridé sp³ possède une géométrie trigonale plane.",
        correct: false,
        explanation: "Un carbone sp³ adopte classiquement une géométrie tétraédrique.",
      },
      {
        content: "Deux énantiomères se distinguent par une connectivité atomique différente.",
        correct: false,
        explanation: "Ils possèdent la même connectivité mais sont images l’un de l’autre dans un miroir et non superposables.",
      },
      {
        content: "Un alcène est un hydrocarbure saturé qui ne subit pas de réaction d’addition sur sa double liaison.",
        correct: false,
        explanation: "Un alcène est insaturé et sa liaison π peut participer à des réactions d’addition.",
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
        explanation: "R–CHO devient R–CH2OH.",
      },
      {
        content: "La réduction d’une cétone par NaBH4 peut produire un alcool secondaire.",
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
    explanation: "La carboxylation d’un organomagnésien par CO2 ajoute le carbone du dioxyde de carbone au squelette carboné. Après hydrolyse acide, on obtient un acide carboxylique.",
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
        content: "Un organomagnésien réagissant avec CO2 puis hydrolysé fournit un acide carboxylique possédant un carbone de plus que le groupe carboné initial.",
        correct: true,
        explanation: "Le carbone de CO2 devient le carbone carboxylique du produit.",
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
    question: "En reliant polarité et réactivité des fonctions organiques, quelles propositions sont exactes ?",
    explanation: "La polarisation d’un carbonyle rend son carbone électrophile. À l’inverse, la délocalisation électronique d’un carboxylate stabilise sa charge et modifie sa réactivité.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:polarite-reactivite'],
    choices: [
      {
        content: "La polarisation d’une liaison C=O rend le carbone carbonylé susceptible d’être attaqué par un nucléophile.",
        correct: true,
        explanation: "Le carbone porte une charge partielle positive en raison de l’électronégativité supérieure de l’oxygène.",
      },
      {
        content: "La délocalisation de la charge dans un carboxylate contribue à stabiliser cette base conjuguée.",
        correct: true,
        explanation: "La charge n’est pas confinée sur un seul oxygène.",
      },
      {
        content: "Le carbone d’un carbonyle est le site le plus riche en électrons de la fonction et agit donc toujours comme nucléophile.",
        correct: false,
        explanation: "Le carbone du carbonyle est au contraire électrophile.",
      },
      {
        content: "Une amide est plus basique qu’une amine parce que son doublet est renforcé par la conjugaison avec C=O.",
        correct: false,
        explanation: "La conjugaison délocalise le doublet et diminue la basicité de l’azote amidique.",
      },
      {
        content: "L’oxygène d’un éther portant deux substituants carbonés rend obligatoirement la molécule donneuse de liaison hydrogène.",
        correct: false,
        explanation: "Un éther peut être accepteur de liaison hydrogène mais ne possède pas de liaison O–H donneuse.",
      },
    ],
  },
  {
    order: 28,
    difficulty: 'HARD',
    format: 'QRM',
    question: "On compare plusieurs transformations classiques de l’EC. Quelles propositions sont exactes ?",
    explanation: "Cette question impose de suivre le degré d’oxydation et le type de réactif : alcool primaire, carbonyles, organomagnésiens et esters n’obéissent pas aux mêmes transformations.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:enchaînements-reactionnels'],
    choices: [
      {
        content: "Une oxydation ménagée du propan-1-ol peut donner du propanal.",
        correct: true,
        explanation: "Un alcool primaire peut être oxydé en aldéhyde si l’oxydation est contrôlée.",
      },
      {
        content: "Une oxydation plus poussée du propanal peut conduire à l’acide propanoïque.",
        correct: true,
        explanation: "L’aldéhyde s’oxyde en acide carboxylique correspondant.",
      },
      {
        content: "La réduction du propanal par NaBH4 peut régénérer du propan-1-ol.",
        correct: true,
        explanation: "La réduction d’un aldéhyde donne l’alcool primaire de même squelette.",
      },
      {
        content: "L’addition de CH3MgBr sur la propanone puis hydrolyse peut former le 2-méthylpropan-2-ol.",
        correct: true,
        explanation: "Le groupe méthyle s’ajoute au carbone carbonylé et le produit d’hydrolyse est un alcool tertiaire.",
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
    question: "Sélectionnez le carbone stéréogène.",
    explanation: "Un carbone stéréogène tétraédrique classique est lié à quatre substituants différents. La zone attendue correspond à ce centre dans la structure représentée.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:qzone-stereochimie'],
    image: {
      src: '/images/training/ue14/colles/c10/stereogenic-carbon-qzone.svg',
      alt: 'Molécule organique avec centre stéréogène',
      width: 960,
      height: 560,
    },
    expectedZones: [
      {
        id: 'target',
        label: 'Carbone stéréogène',
        x: 0.45,
        y: 0.5,
        tolerance: 0.08,
      },
    ],
    defaultTolerance: 0.08,
  },
  {
    order: 30,
    difficulty: 'HARD',
    format: 'QRM',
    question: "Pour cette synthèse cumulative de toute l’EC de Chimie, quelles propositions sont exactes ?",
    explanation: "Une maîtrise cumulative suppose de relier structure électronique, liaisons, géométrie, stéréochimie, nomenclature et réactivité sans confondre les niveaux de description.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C10', 'ec:CHIMIE', 'theme:synthese-finale'],
    choices: [
      {
        content: "Une triple liaison C≡C associe une liaison σ et deux liaisons π.",
        correct: true,
        explanation: "La composante σ est axiale ; deux recouvrements latéraux forment les deux liaisons π.",
      },
      {
        content: "Le descripteur Z d’un alcène dépend des priorités CIP et non d’une simple comparaison gauche/droite sur n’importe quel dessin.",
        correct: true,
        explanation: "Il faut d’abord déterminer le substituant prioritaire sur chacun des deux carbones de la double liaison.",
      },
      {
        content: "La fonction principale d’une molécule polyfonctionnelle détermine notamment le suffixe de son nom systématique.",
        correct: true,
        explanation: "Les autres fonctions sont ensuite traitées selon les règles de nomenclature applicables.",
      },
      {
        content: "La réduction d’une cétone par un hydrure doux conduit classiquement à un alcool primaire.",
        correct: false,
        explanation: "Une cétone donne classiquement un alcool secondaire.",
      },
      {
        content: "Une SN2 passe par un carbocation plan puis produit nécessairement une racémisation.",
        correct: false,
        explanation: "La SN2 est concertée et s’accompagne d’une inversion géométrique au centre attaqué.",
      },
    ],
  },
];
