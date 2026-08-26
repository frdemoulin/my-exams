import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';
import { TEX_UNITS, texQuantity } from '../../tex-units';

const U = TEX_UNITS;

/**
 * UE14 — Colle C12 — Grande colle UE14
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 * Architecture : 16 Chimie + 17 Biochimie + 17 Biologie cellulaire.
 */
export const UE14_COLLE_C12_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 1,
    difficulty: "HARD",
    format: "QRM",
    question: "Un ion et sa position dans la classification périodique sont étudiés. Quelles propositions sont exactes ?",
    explanation: "Le numéro atomique fixe l’identité de l’élément. Une charge ionique modifie le nombre d’électrons, tandis que les tendances périodiques dépendent de la position dans le tableau.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:classification-ions"
    ],
    choices: [
      {
        content: "Deux isotopes d’un même élément ont le même nombre de protons.",
        correct: true,
        explanation: "Ils ont le même numéro atomique Z mais diffèrent par leur nombre de neutrons."
      },
      {
        content: "Un cation 2+ possède deux électrons de plus que l’atome neutre correspondant.",
        correct: false,
        explanation: "Une charge 2+ correspond à une perte de deux électrons."
      },
      {
        content: "Dans une période, l’électronégativité tend globalement à augmenter de gauche à droite.",
        correct: true,
        explanation: "L’attraction exercée sur les électrons de liaison augmente globalement dans ce sens."
      },
      {
        content: "Le nombre de masse A est égal au nombre d’électrons de l’atome neutre.",
        correct: false,
        explanation: "A correspond au nombre total de nucléons, protons plus neutrons."
      },
      {
        content: "L’affinité électronique et l’électronégativité sont deux noms strictement synonymes.",
        correct: false,
        explanation: "L’affinité électronique est une grandeur énergétique liée au gain d’un électron ; l’électronégativité concerne une liaison."
      }
    ]
  },
  {
    order: 2,
    difficulty: "MEDIUM",
    format: "QROC",
    question: String.raw`Combien d’électrons possède l’ion $\ce{^{31}_{15}P^{3-}}$ ? Donnez uniquement la valeur numérique.`,
    explanation: "Le phosphore neutre possède 15 électrons. La charge 3− correspond au gain de trois électrons : l’ion en possède 18.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:ions-electrons"
    ],
    answer: {
      type: "number",
      value: 18,
      tolerance: 0
    }
  },
  {
    order: 3,
    difficulty: "MEDIUM",
    format: "QRU",
    question: "Quelle proposition décrit correctement les liaisons d’une triple liaison carbone-carbone ?",
    explanation: "Une triple liaison C≡C associe une liaison σ axiale et deux liaisons π issues de recouvrements latéraux.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:liaisons-sigma-pi"
    ],
    choices: [
      {
        content: "Elle comporte une liaison σ et deux liaisons π.",
        correct: true,
        explanation: "C’est l’architecture classique d’une triple liaison."
      },
      {
        content: "Elle comporte trois liaisons σ et aucune liaison π.",
        correct: false,
        explanation: "Une seule composante est σ."
      },
      {
        content: "Elle autorise une rotation libre autour de l’axe C–C sans modifier le recouvrement orbitalaire.",
        correct: false,
        explanation: "Les deux liaisons π s’opposent à une rotation libre."
      },
      {
        content: "Elle impose une hybridation sp3 aux deux carbones.",
        correct: false,
        explanation: "Les carbones d’un alcyne sont classiquement sp."
      },
      {
        content: "Elle correspond à une liaison ionique entre les deux carbones.",
        correct: false,
        explanation: "La triple liaison C≡C est covalente."
      }
    ]
  },
  {
    order: 4,
    difficulty: "EASY",
    format: "QRP",
    question: "Sélectionnez exactement les deux propositions correctes concernant les interactions intermoléculaires.",
    explanation: "Les forces de London existent entre toutes les espèces polarisables. Une liaison hydrogène exige un donneur X–H adapté et un accepteur disposant d’un doublet.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:interactions-intermoleculaires"
    ],
    choices: [
      {
        content: "Les forces de dispersion de London peuvent agir entre deux molécules apolaires.",
        correct: true,
        explanation: "Elles proviennent de fluctuations instantanées de la densité électronique."
      },
      {
        content: "Un éther peut accepter une liaison hydrogène grâce aux doublets de son oxygène.",
        correct: true,
        explanation: "L’oxygène éthéré est accepteur mais la molécule n’est pas donneuse en l’absence de O–H."
      },
      {
        content: "Toute molécule contenant de l’oxygène est nécessairement donneuse de liaison hydrogène.",
        correct: false,
        explanation: "Il faut notamment un hydrogène lié à un hétéroatome suffisamment électronégatif."
      },
      {
        content: "Les interactions dipôle–dipôle nécessitent obligatoirement une charge ionique entière sur chaque molécule.",
        correct: false,
        explanation: "Elles concernent des dipôles permanents, sans charge entière obligatoire."
      },
      {
        content: "Les forces intermoléculaires sont des liaisons covalentes supplémentaires créées entre molécules.",
        correct: false,
        explanation: "Elles sont non covalentes."
      }
    ],
    requiredSelectionCount: 2
  },
  {
    order: 5,
    difficulty: "HARD",
    format: "QRM",
    question: "Une molécule organique présente plusieurs fonctions. Quelles affirmations permettent une identification correcte ?",
    explanation: "Reconnaître une fonction exige d’examiner l’environnement du groupe caractéristique, notamment la présence d’un carbonyle et l’atome directement lié à celui-ci.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:fonctions-organiques"
    ],
    choices: [
      {
        content: "Le motif R–C(=O)–NH2 correspond à un amide.",
        correct: true,
        explanation: "L’azote est directement lié au carbone carbonylé."
      },
      {
        content: "Le motif R–C≡N correspond à un nitrile.",
        correct: true,
        explanation: "La triple liaison C≡N caractérise le nitrile."
      },
      {
        content: "Un ammonium quaternaire porte quatre substituants sur un azote chargé positivement.",
        correct: true,
        explanation: "L’azote possède alors quatre liaisons et une charge formelle positive."
      },
      {
        content: "Un thiol est défini par le motif R–OH.",
        correct: false,
        explanation: "Le thiol porte R–SH."
      },
      {
        content: "Un ester simple contient obligatoirement un atome d’azote.",
        correct: false,
        explanation: "Le motif ester est R–C(=O)–O–R′."
      }
    ]
  },
  {
    order: 6,
    difficulty: "HARD",
    format: "QROC",
    question: String.raw`Un composé a pour formule brute $\ce{C3H6O3}$. Quelle est sa masse molaire ? Donnez uniquement la valeur numérique, exprimée en $${U.G_PER_MOL}$.

Données : $M(\mathrm C)=${texQuantity(12, U.G_PER_MOL)}$, $M(\mathrm H)=${texQuantity(1, U.G_PER_MOL)}$ et $M(\mathrm O)=${texQuantity(16, U.G_PER_MOL)}$.`,
    explanation: String.raw`Le calcul donne $3\times12+6\times1+3\times16=90$, soit $${texQuantity(90, U.G_PER_MOL)}$.`,
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:calcul-masse-molaire"
    ],
    answer: {
      type: "number",
      value: 90,
      tolerance: 0,
      unit: "g/mol",
      displayUnit: U.G_PER_MOL
    }
  },
  {
    order: 7,
    difficulty: "HARD",
    format: "QRM",
    question: "À propos de la stéréochimie des molécules organiques, quelles propositions sont exactes ?",
    explanation: "Les descripteurs R/S concernent des centres stéréogènes tétraédriques ; E/Z concernent les doubles liaisons lorsque chaque carbone porte deux substituants différents.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:stereochimie"
    ],
    choices: [
      {
        content: "Deux énantiomères sont des images miroir non superposables.",
        correct: true,
        explanation: "Ils possèdent des configurations opposées dans une relation miroir."
      },
      {
        content: "L’attribution E/Z nécessite de comparer les priorités CIP sur chacun des deux carbones de la double liaison.",
        correct: true,
        explanation: "Les groupes de plus haute priorité déterminent E ou Z."
      },
      {
        content: "Une SN2 sur un centre stéréogène procède par attaque arrière et inversion géométrique au centre attaqué.",
        correct: true,
        explanation: "Le mécanisme concerté impose l’attaque opposée au groupe partant."
      },
      {
        content: "Deux diastéréoisomères sont toujours des images miroir l’un de l’autre.",
        correct: false,
        explanation: "Cette relation définit les énantiomères."
      },
      {
        content: "La présence d’une double liaison C=C suffit toujours à définir une configuration E/Z.",
        correct: false,
        explanation: "Chaque carbone doit porter deux substituants différents."
      }
    ]
  },
  {
    order: 8,
    difficulty: "MEDIUM",
    format: "QRU",
    question: "Quelle transformation décrit correctement la réactivité d’un hydrocarbure insaturé ?",
    explanation: "L’hydrogénation catalytique d’un alcène ajoute H2 sur la double liaison et conduit à l’alcane correspondant.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:hydrocarbures-reactivite"
    ],
    choices: [
      {
        content: "L’ozonolyse d’un alcane saturé constitue la réaction caractéristique permettant de former systématiquement un alcyne.",
        correct: false,
        explanation: "L’ozonolyse concerne surtout les liaisons multiples."
      },
      {
        content: "L’hydrogénation catalytique d’un alcène réduit la double liaison en liaison simple.",
        correct: true,
        explanation: "Deux hydrogènes s’ajoutent sur les carbones de C=C."
      },
      {
        content: "Une addition de HX sur un alcène conserve obligatoirement la liaison π.",
        correct: false,
        explanation: "L’addition consomme la liaison π."
      },
      {
        content: "Un alcyne est défini par une double liaison C=C.",
        correct: false,
        explanation: "Il contient une triple liaison C≡C."
      },
      {
        content: "L’addition électrophile d’un alcène est impossible car la liaison π est dépourvue d’électrons.",
        correct: false,
        explanation: "La liaison π est riche en électrons et peut réagir avec des électrophiles."
      }
    ]
  },
  {
    order: 9,
    difficulty: "EASY",
    format: "QRP",
    question: "Sélectionnez exactement les deux transformations correctes.",
    explanation: "Les alcools et dérivés halogénés réagissent selon la classe du substrat et la nature du réactif.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:alcools-halogenes"
    ],
    choices: [
      {
        content: "L’oxydation ménagée d’un alcool primaire peut conduire à un aldéhyde.",
        correct: true,
        explanation: "Une oxydation plus poussée peut ensuite donner l’acide carboxylique."
      },
      {
        content: "La réduction d’une cétone par NaBH4 peut conduire à un alcool secondaire.",
        correct: true,
        explanation: "Le carbone carbonylé conserve ses deux substituants carbonés."
      },
      {
        content: "L’oxydation d’un alcool secondaire conduit classiquement à un aldéhyde.",
        correct: false,
        explanation: "Elle conduit à une cétone."
      },
      {
        content: "Une SN2 sur un carbone très encombré est favorisée par l’encombrement stérique.",
        correct: false,
        explanation: "L’encombrement défavorise l’attaque arrière."
      },
      {
        content: "Un organomagnésien est stable dans un milieu contenant un grand excès d’eau.",
        correct: false,
        explanation: "Les organomagnésiens sont détruits par les espèces protiques."
      }
    ],
    requiredSelectionCount: 2
  },
  {
    order: 10,
    difficulty: "HARD",
    format: "QRM",
    question: "On compare carbonyles, esters, amides et dérivés d’acides. Quelles propositions sont exactes ?",
    explanation: "Le carbone carbonylé est électrophile. La conjugaison amidique réduit la basicité de l’azote, tandis que les chlorures d’acyle sont des dérivés fortement activés.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:carbonyles-derives-acides"
    ],
    choices: [
      {
        content: "Le carbone d’un aldéhyde ou d’une cétone est électrophile.",
        correct: true,
        explanation: "La polarisation Cδ+–Oδ− appauvrit le carbone en densité électronique."
      },
      {
        content: "La liaison C–N d’un amide possède un caractère partiel de double liaison.",
        correct: true,
        explanation: "Le doublet de l’azote est délocalisé vers le carbonyle."
      },
      {
        content: "Un chlorure d’acyle est généralement plus réactif vis-à-vis d’un nucléophile qu’un amide.",
        correct: true,
        explanation: "Le chlorure est un meilleur groupe partant et l’amide est fortement stabilisé par conjugaison."
      },
      {
        content: "La saponification d’un ester conduit notamment à un carboxylate.",
        correct: true,
        explanation: "En milieu basique, l’acide formé est déprotoné."
      },
      {
        content: "Une cétone simple porte nécessairement un hydrogène sur le carbone carbonylé.",
        correct: false,
        explanation: "Cela caractérise un aldéhyde."
      }
    ]
  },
  {
    order: 11,
    difficulty: "HARD",
    format: "QRPL",
    question: "Parmi ces dix propositions couvrant toute la Chimie, sélectionnez exactement les cinq exactes.",
    explanation: "Cette synthèse exige de relier classification périodique, liaisons, stéréochimie, fonctions et réactivité.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:synthese-chimie"
    ],
    choices: [
      {
        content: "Une molécule peut contenir des liaisons polaires tout en ayant un moment dipolaire total nul.",
        correct: true,
        explanation: "Une géométrie symétrique peut conduire à une compensation vectorielle."
      },
      {
        content: "Un carbone sp adopte classiquement une géométrie linéaire, également dite digonale.",
        correct: true,
        explanation: "Deux directions de liaison opposées sont associées à l’hybridation sp."
      },
      {
        content: "Un carboxylate est stabilisé par délocalisation de la charge sur les deux oxygènes.",
        correct: true,
        explanation: "Les formes mésomères principales contribuent à cette stabilisation."
      },
      {
        content: "Un organomagnésien réagit avec CO2 puis, après hydrolyse, peut donner un acide carboxylique.",
        correct: true,
        explanation: "Le carbone du CO2 devient le carbone carboxylique."
      },
      {
        content: "La réduction d’un aldéhyde par un hydrure peut donner un alcool primaire.",
        correct: true,
        explanation: "R–CHO est transformé en R–CH2OH."
      },
      {
        content: "La géométrie correcte d’un carbone sp est dite diagonale.",
        correct: false,
        explanation: "Le terme correct est linéaire ou digonale."
      },
      {
        content: "Une amide est plus basique qu’une amine car son doublet est davantage disponible.",
        correct: false,
        explanation: "La conjugaison avec le carbonyle diminue sa disponibilité."
      },
      {
        content: "Les conformères diffèrent nécessairement par la connectivité des atomes.",
        correct: false,
        explanation: "Ils peuvent s’interconvertir par rotation autour de liaisons simples."
      },
      {
        content: "Une double liaison C=C est constituée de deux liaisons σ.",
        correct: false,
        explanation: "Elle associe une σ et une π."
      },
      {
        content: "L’électronégativité est l’énergie libérée lors de l’ajout d’un électron à un atome gazeux.",
        correct: false,
        explanation: "Cette description se rapproche de l’affinité électronique."
      }
    ],
    requiredSelectionCount: 5
  },
  {
    order: 12,
    difficulty: "EASY",
    format: "QROC",
    question: "Quel est l’état d’hybridation classique d’un carbone engagé dans une triple liaison C≡C ?",
    explanation: "Un carbone alcynique utilise deux orbitales hybrides sp et conserve deux orbitales p non hybridées.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:hybridation-alcyne"
    ],
    answer: {
      type: "text",
      acceptedAnswers: [
        "sp"
      ],
      normalization: {
        trim: true,
        collapseWhitespace: true,
        caseSensitive: false,
        ignoreAccents: true,
        normalizeUnicode: true
      }
    }
  },
  {
    order: 13,
    difficulty: "MEDIUM",
    format: "QRU",
    question: "Une molécule comporte simultanément un acide carboxylique, une cétone et une amine. Quelle fonction détermine le suffixe principal dans la hiérarchie de nomenclature retenue ?",
    explanation: "Dans la hiérarchie utilisée pour le chapitre transversal, l’acide carboxylique est prioritaire sur la cétone et l’amine.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:nomenclature-priorite"
    ],
    choices: [
      {
        content: "La fonction amine.",
        correct: false,
        explanation: "L’amine est moins prioritaire que l’acide carboxylique."
      },
      {
        content: "La fonction cétone.",
        correct: false,
        explanation: "La cétone est moins prioritaire que l’acide carboxylique."
      },
      {
        content: "La fonction acide carboxylique.",
        correct: true,
        explanation: "Elle est prioritaire dans cette combinaison."
      },
      {
        content: "Les trois fonctions sont équivalentes et le choix se fait par ordre alphabétique.",
        correct: false,
        explanation: "Une hiérarchie fonctionnelle détermine le suffixe."
      },
      {
        content: "Aucune fonction : une molécule polyfonctionnelle ne peut pas recevoir de nom systématique.",
        correct: false,
        explanation: "Les règles de nomenclature sont précisément prévues pour ces situations."
      }
    ]
  },
  {
    order: 14,
    difficulty: "MEDIUM",
    format: "QRM",
    question: "À propos des acides carboxyliques et de leurs bases conjuguées, quelles propositions sont exactes ?",
    explanation: "La stabilité du carboxylate repose sur la délocalisation électronique ; la réactivité des dérivés d’acides dépend notamment de la qualité du groupe partant.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:acides-carboxyliques"
    ],
    choices: [
      {
        content: "La déprotonation d’un acide carboxylique donne un ion carboxylate.",
        correct: true,
        explanation: "La perte de H+ concerne le groupe –COOH."
      },
      {
        content: "Dans un carboxylate, les deux liaisons C–O deviennent équivalentes dans la description mésomère moyenne.",
        correct: true,
        explanation: "La charge et le caractère de liaison sont délocalisés sur les deux oxygènes."
      },
      {
        content: "Un chlorure d’acyle peut subir une substitution nucléophile d’acyle.",
        correct: true,
        explanation: "Le carbone carbonylé est électrophile et le chlorure peut partir."
      },
      {
        content: "L’hydrolyse d’un nitrile peut conduire à un acide carboxylique selon les conditions.",
        correct: true,
        explanation: "L’amide peut constituer un intermédiaire sur le chemin d’hydrolyse."
      },
      {
        content: "Un acide carboxylique est dépourvu de groupe carbonyle.",
        correct: false,
        explanation: "Le carboxyle contient un carbonyle."
      }
    ]
  },
  {
    order: 15,
    difficulty: "MEDIUM",
    format: "QRM",
    question: "Un étudiant suit plusieurs transformations d’une même chaîne carbonée. Quelles propositions sont exactes ?",
    explanation: "Le sens oxydation/réduction et le type de réactif permettent de suivre les interconversions entre alcool, aldéhyde/cétone et acide.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:enchaînements-reactionnels"
    ],
    choices: [
      {
        content: "Propan-1-ol → propanal correspond à une oxydation.",
        correct: true,
        explanation: "Le carbone portant l’alcool augmente son degré d’oxydation."
      },
      {
        content: "Propanal → propan-1-ol sous l’action de NaBH4 correspond à une réduction.",
        correct: true,
        explanation: "Le carbonyle aldéhydique est réduit en alcool primaire."
      },
      {
        content: "Propanal → acide propanoïque correspond à une oxydation.",
        correct: true,
        explanation: "L’aldéhyde est oxydé en acide de même squelette."
      },
      {
        content: "Propanone → propan-2-ol correspond à une oxydation.",
        correct: false,
        explanation: "Le passage d’une cétone à un alcool secondaire est une réduction."
      },
      {
        content: "La saponification d’un ester est une hydrogénation catalytique.",
        correct: false,
        explanation: "C’est une hydrolyse basique."
      }
    ]
  },
  {
    order: 16,
    difficulty: "MEDIUM",
    format: "QZONE",
    question: "Sélectionnez l’oxygène du groupe carbonyle.",
    explanation: "L’oxygène carbonylé est l’atome d’oxygène engagé dans la double liaison C=O.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:qzone-carbonyle"
    ],
    image: {
      src: "/images/training/ue14/colles/c12/carbonyl-oxygen-qzone.svg",
      alt: "Groupe carbonyle",
      width: 960,
      height: 560
    },
    expectedZones: [
      {
        id: "target",
        label: "Oxygène carbonylé",
        x: 0.59,
        y: 0.24,
        tolerance: 0.07
      }
    ],
    defaultTolerance: 0.07
  },
  {
    order: 17,
    difficulty: "MEDIUM",
    format: "QRM",
    question: "À propos des glucides, quelles propositions sont exactes ?",
    explanation: "Le D-glucose est un aldohexose ; le saccharose associe glucose et fructose mais n’est pas réducteur car ses deux carbones anomériques sont engagés.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:glucides-structure"
    ],
    choices: [
      {
        content: "Le D-glucose est un aldohexose.",
        correct: true,
        explanation: "Sa forme ouverte comporte une fonction aldéhyde et six carbones."
      },
      {
        content: "Le saccharose est non réducteur car ses deux carbones anomériques sont engagés.",
        correct: true,
        explanation: "Aucun carbone anomérique libre n’est disponible."
      },
      {
        content: "Le D-glucose et le D-galactose sont épimères en C2.",
        correct: false,
        explanation: "Ils sont épimères en C4."
      },
      {
        content: "La cellulose est un polymère de glucose principalement lié en α(1→4).",
        correct: false,
        explanation: "Elle comporte des liaisons β(1→4)."
      },
      {
        content: "La lettre D impose un pouvoir rotatoire positif.",
        correct: false,
        explanation: "D/L et le signe du pouvoir rotatoire sont indépendants."
      }
    ]
  },
  {
    order: 18,
    difficulty: "MEDIUM",
    format: "QROC",
    question: "Quel carbone du D-glucose devient le carbone anomérique après cyclisation en glucopyranose ? Donnez uniquement son numéro.",
    explanation: "Le carbone aldéhydique C1 devient le carbone anomérique lors de l’hémiacétalisation intramoléculaire.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:anomérie-glucose"
    ],
    answer: {
      type: "number",
      value: 1,
      tolerance: 0
    }
  },
  {
    order: 19,
    difficulty: "MEDIUM",
    format: "QRU",
    question: "Quelle proposition décrit correctement les lipides membranaires ou leurs précurseurs ?",
    explanation: "Le céramide associe une sphingosine et un acide gras en liaison amide ; il constitue un noyau structural majeur des sphingolipides.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:sphingolipides"
    ],
    choices: [
      {
        content: "Un céramide est un triester du glycérol.",
        correct: false,
        explanation: "Cette structure correspond à un triacylglycérol."
      },
      {
        content: "La phospholipase A2 coupe principalement la liaison entre phosphate et tête polaire.",
        correct: false,
        explanation: "Elle hydrolyse l’ester acyle en sn-2."
      },
      {
        content: "Un stéride est un GAG fortement sulfaté.",
        correct: false,
        explanation: "C’est un ester entre un stérol et un acide gras."
      },
      {
        content: "Un céramide associe une sphingosine et un acide gras par une liaison amide.",
        correct: true,
        explanation: "C’est sa définition structurale."
      },
      {
        content: "Le cholestérol est un sucre cyclique à six carbones.",
        correct: false,
        explanation: "C’est un stérol à noyau stéroïdien."
      }
    ]
  },
  {
    order: 20,
    difficulty: "EASY",
    format: "QRP",
    question: "Sélectionnez exactement les deux propositions correctes concernant glucides et lipides.",
    explanation: "Le glycogène est un polymère ramifié de glucose ; l’acide linoléique est un acide gras indispensable n-6.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:glucides-lipides"
    ],
    choices: [
      {
        content: "Le glycogène possède des liaisons α(1→4) et des branchements α(1→6).",
        correct: true,
        explanation: "Ces liaisons structurent ses chaînes et leurs ramifications."
      },
      {
        content: "L’acide linoléique appartient à la série n-6 et doit être apporté par l’alimentation.",
        correct: true,
        explanation: "Il fait partie des acides gras indispensables."
      },
      {
        content: "Le lactose associe deux molécules de fructose.",
        correct: false,
        explanation: "Il associe galactose et glucose."
      },
      {
        content: "Les leucotriènes dérivent principalement des cyclo-oxygénases.",
        correct: false,
        explanation: "Ils dérivent des lipoxygénases."
      },
      {
        content: "Un triacylglycérol est un glycosaminoglycane.",
        correct: false,
        explanation: "C’est un lipide neutre de réserve."
      }
    ],
    requiredSelectionCount: 2
  },
  {
    order: 21,
    difficulty: "MEDIUM",
    format: "QRM",
    question: "À propos des acides aminés et des protéines, quelles propositions sont exactes ?",
    explanation: "La structure primaire détermine la séquence ; la liaison peptidique possède un caractère partiel de double liaison et la glycine est l’AA standard achiral.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:aa-proteines-structure"
    ],
    choices: [
      {
        content: "La glycine est achirale au niveau de son carbone α.",
        correct: true,
        explanation: "Son carbone α porte deux hydrogènes."
      },
      {
        content: "La liaison peptidique présente un caractère partiel de double liaison.",
        correct: true,
        explanation: "La résonance limite la rotation autour de C–N."
      },
      {
        content: "Une hélice α est notamment stabilisée par des liaisons hydrogène du squelette peptidique.",
        correct: true,
        explanation: "Le motif classique relie C=O(i) à N–H(i+4)."
      },
      {
        content: "La proline interne stabilise toujours une hélice α longue et régulière.",
        correct: false,
        explanation: "Elle tend au contraire à la perturber."
      },
      {
        content: "Les feuillets β ne peuvent exister qu’en organisation antiparallèle.",
        correct: false,
        explanation: "Ils peuvent être parallèles ou antiparallèles."
      }
    ]
  },
  {
    order: 22,
    difficulty: "MEDIUM",
    format: "QROC",
    question: "Dans l’HbS, quel acide aminé remplace le glutamate en position 6 de la chaîne β ?",
    explanation: "La mutation classique β6 Glu→Val remplace le glutamate par une valine.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:hemoglobine-hbs"
    ],
    answer: {
      type: "text",
      acceptedAnswers: [
        "valine",
        "Val",
        "V"
      ],
      normalization: {
        trim: true,
        collapseWhitespace: true,
        caseSensitive: false,
        ignoreAccents: true,
        normalizeUnicode: true
      }
    }
  },
  {
    order: 23,
    difficulty: "MEDIUM",
    format: "QRM",
    question: "À propos de quelques protéines biologiques majeures, quelles propositions sont exactes ?",
    explanation: "Immunoglobulines, hémoglobine, collagènes et récepteurs membranaires illustrent des relations structure–fonction très différentes.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:proteines-fonctions"
    ],
    choices: [
      {
        content: "Une IgG monomérique possède deux chaînes lourdes et deux chaînes légères.",
        correct: true,
        explanation: "L’organisation H2L2 forme les deux Fab et la région Fc."
      },
      {
        content: "Les fragments Fab portent les régions variables impliquées dans la reconnaissance de l’antigène.",
        correct: true,
        explanation: "Les sites de liaison sont situés aux extrémités des bras Fab."
      },
      {
        content: "L’HbA adulte principale est un tétramère α2β2.",
        correct: true,
        explanation: "C’est la forme majoritaire chez l’adulte sain."
      },
      {
        content: "Le collagène IV contribue à former des réseaux dans les membranes basales.",
        correct: true,
        explanation: "Il se distingue des collagènes fibrillaires comme le type I."
      },
      {
        content: "La laminine est un filament intermédiaire de la lamina nucléaire.",
        correct: false,
        explanation: "La laminine est extracellulaire ; les lamines sont nucléaires."
      }
    ]
  },
  {
    order: 24,
    difficulty: "MEDIUM",
    format: "QRU",
    question: "Quelle proposition est correcte à propos de la classification enzymatique EC ?",
    explanation: "La classification EC actuelle compte sept classes, la septième correspondant aux translocases.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:classification-ec"
    ],
    choices: [
      {
        content: "Elle ne contient que quatre classes, une par type de macromolécule.",
        correct: false,
        explanation: "La classification repose sur le type de réaction catalysée."
      },
      {
        content: "Les ligases et les synthétases sont des synonymes absolument universels.",
        correct: false,
        explanation: "Le numéro EC reste la référence ; les noms usuels ne sont pas toujours univoques."
      },
      {
        content: "Toutes les enzymes dont le numéro EC se termine par 99 sont obligatoirement non caractérisées.",
        correct: false,
        explanation: "Ce suffixe n’a pas cette signification universelle."
      },
      {
        content: "Les translocases appartiennent à la classe EC 1.",
        correct: false,
        explanation: "La classe 1 correspond aux oxydoréductases."
      },
      {
        content: "La classification EC actuelle comporte sept grandes classes.",
        correct: true,
        explanation: "Les translocases constituent la septième classe."
      }
    ]
  },
  {
    order: 25,
    difficulty: "MEDIUM",
    format: "QRP",
    question: "Sélectionnez exactement les deux propositions correctes concernant la régulation enzymatique.",
    explanation: "La phosphorylation n’a pas un effet universel et la protéolyse limitée peut activer irréversiblement un zymogène.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:regulation-enzymatique"
    ],
    choices: [
      {
        content: "Une phosphorylation peut activer ou inhiber une protéine selon le contexte.",
        correct: true,
        explanation: "L’effet dépend du site et de la protéine concernée."
      },
      {
        content: "Une protéolyse limitée peut activer un zymogène.",
        correct: true,
        explanation: "Un clivage ciblé peut révéler ou organiser le site actif."
      },
      {
        content: "Toute ubiquitination conduit immédiatement et obligatoirement à une dégradation protéasomale.",
        correct: false,
        explanation: "L’ubiquitination possède plusieurs fonctions selon le type de chaîne et le contexte."
      },
      {
        content: "L’allostérie est impossible chez une protéine monomérique.",
        correct: false,
        explanation: "Des protéines monomériques peuvent être régulées allostériquement."
      },
      {
        content: "Un effecteur allostérique doit se fixer covalemment dans le site actif.",
        correct: false,
        explanation: "Il se fixe classiquement sur un site distinct et de façon non covalente."
      }
    ],
    requiredSelectionCount: 2
  },
  {
    order: 26,
    difficulty: "HARD",
    format: "QRM",
    question: "À propos des inhibitions réversibles d’une enzyme michaelienne, quelles propositions sont exactes ?",
    explanation: "Les profils idéaux permettent de distinguer les effets sur Km apparent et Vmax.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:inhibitions-enzymatiques"
    ],
    choices: [
      {
        content: "Une inhibition compétitive pure augmente Km apparent sans modifier Vmax.",
        correct: true,
        explanation: "Un excès de substrat peut surmonter la compétition dans le modèle idéal."
      },
      {
        content: "Une inhibition incompétitive pure diminue Km et Vmax dans la même proportion.",
        correct: true,
        explanation: "Les droites de Lineweaver-Burk idéales sont parallèles."
      },
      {
        content: "Une inhibition non compétitive pure augmente nécessairement Km et Vmax.",
        correct: false,
        explanation: "Dans le cas pur, Km reste inchangé et Vmax diminue."
      },
      {
        content: "Une inhibition mixte générale conserve toujours exactement la même valeur de Km.",
        correct: false,
        explanation: "Km peut augmenter ou diminuer selon les affinités relatives de l’inhibiteur."
      },
      {
        content: "Une inhibition compétitive pure impose Vmax = 0.",
        correct: false,
        explanation: "Vmax reste inchangée dans le modèle idéal."
      }
    ]
  },
  {
    order: 27,
    difficulty: "HARD",
    format: "QRPL",
    question: "Parmi ces dix propositions couvrant toute la Biochimie, sélectionnez exactement les cinq exactes.",
    explanation: "Cette synthèse associe glucides, lipides, protéines et cinétique enzymatique.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:synthese-biochimie"
    ],
    choices: [
      {
        content: "Le D-fructose est un cétohexose.",
        correct: true,
        explanation: "Sa forme ouverte contient une cétone et six carbones."
      },
      {
        content: "La phospholipase A2 peut libérer l’acide gras porté en sn-2 d’un glycérophospholipide.",
        correct: true,
        explanation: "Cette position peut notamment contenir de l’acide arachidonique."
      },
      {
        content: "Le point isoélectrique est le pH où la charge nette moyenne d’un acide aminé ou d’une protéine est nulle.",
        correct: true,
        explanation: "Des charges internes peuvent néanmoins subsister."
      },
      {
        content: "Une enzyme diminue ΔG‡ sans modifier Keq.",
        correct: true,
        explanation: "Elle accélère l’approche de l’équilibre sans le déplacer."
      },
      {
        content: "À [S] = Km, v0 = Vmax/2.",
        correct: true,
        explanation: "C’est une conséquence directe de l’équation de Michaelis-Menten."
      },
      {
        content: "Le saccharose possède deux carbones anomériques libres.",
        correct: false,
        explanation: "Ils sont engagés dans la liaison osidique."
      },
      {
        content: "Le cholestérol est un triacylglycérol.",
        correct: false,
        explanation: "C’est un stérol."
      },
      {
        content: "Une liaison peptidique possède une rotation totalement libre.",
        correct: false,
        explanation: "Son caractère partiel de double liaison limite la rotation."
      },
      {
        content: "Km est toujours strictement égal à Kd.",
        correct: false,
        explanation: "Km dépend des constantes cinétiques et n’est pas une constante universelle d’affinité."
      },
      {
        content: "Un katal vaut une micromole par minute.",
        correct: false,
        explanation: "Un katal vaut une mole par seconde."
      }
    ],
    requiredSelectionCount: 5
  },
  {
    order: 28,
    difficulty: "MEDIUM",
    format: "QROC",
    question: String.raw`Une préparation enzymatique transforme $${texQuantity(12, U.MICROMOL)}$ de substrat en $4\,${U.MIN}$. Quelle est son activité ? Donnez uniquement la valeur numérique, exprimée en $${U.ENZYME_UNIT}$.

Données : $${texQuantity(1, U.ENZYME_UNIT)} = ${texQuantity(1, U.MICROMOL_PER_MIN)}$.`,
    explanation: String.raw`L’activité vaut $12/4=${texQuantity(3, U.MICROMOL_PER_MIN)}$, soit $${texQuantity(3, U.ENZYME_UNIT)}$.`,
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:calcul-activite-enzymatique"
    ],
    answer: {
      type: "number",
      value: 3,
      tolerance: 0,
      unit: "U",
      displayUnit: U.ENZYME_UNIT
    }
  },
  {
    order: 29,
    difficulty: "MEDIUM",
    format: "QRU",
    question: "Pour une enzyme suivant Michaelis-Menten, quelle relation est exacte lorsque la concentration de substrat est égale à Km ?",
    explanation: "Lorsque [S] = Km, l’équation donne v0 = Vmax/2.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:michaelis-menten"
    ],
    choices: [
      {
        content: "v0 = Vmax/2.",
        correct: true,
        explanation: "Le numérateur et le dénominateur deviennent respectivement Vmax·Km et 2Km."
      },
      {
        content: "v0 = 2Vmax.",
        correct: false,
        explanation: "La vitesse ne dépasse pas Vmax dans ce modèle."
      },
      {
        content: "v0 = 0.",
        correct: false,
        explanation: "Une concentration égale à Km ne correspond pas à une absence de réaction."
      },
      {
        content: "Km devient sans unité.",
        correct: false,
        explanation: "Km garde l’unité d’une concentration."
      },
      {
        content: "La réaction est nécessairement à l’équilibre thermodynamique.",
        correct: false,
        explanation: "Michaelis-Menten décrit une cinétique initiale, pas un équilibre."
      }
    ]
  },
  {
    order: 30,
    difficulty: "EASY",
    format: "QRM",
    question: "À propos des oses, quelles propositions sont exactes ?",
    explanation: "Quelques distinctions structurales simples permettent d’éviter les confusions fréquentes entre ribose, désoxyribose et épimères du glucose.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:oses-derives"
    ],
    choices: [
      {
        content: "Le ribose est un pentose entrant dans la composition de l’ARN.",
        correct: true,
        explanation: "Le sucre de l’ARN est le ribose."
      },
      {
        content: "Le 2-désoxyribose diffère du ribose par l’absence du groupe hydroxyle en C2.",
        correct: true,
        explanation: "Le carbone 2 porte H à la place de OH."
      },
      {
        content: "Le D-glucose et le D-galactose sont épimères en C4.",
        correct: true,
        explanation: "Ils ne diffèrent que par la configuration de ce carbone."
      },
      {
        content: "Le D-mannose est une cétose.",
        correct: false,
        explanation: "C’est un aldose."
      },
      {
        content: "Les anomères α et β sont des énantiomères.",
        correct: false,
        explanation: "Ce sont des diastéréoisomères qui diffèrent au carbone anomérique."
      }
    ]
  },
  {
    order: 31,
    difficulty: "MEDIUM",
    format: "QRM",
    question: "On relie lipides et protéines à leur fonction biologique. Quelles propositions sont exactes ?",
    explanation: "Les classes moléculaires ne préjugent pas d’une seule fonction : réserve, membrane, signalisation, transport et matrice sont représentés.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:lipides-proteines-fonctions"
    ],
    choices: [
      {
        content: "Les triacylglycérols constituent une forme majeure de réserve énergétique.",
        correct: true,
        explanation: "Ils sont notamment stockés dans le tissu adipeux."
      },
      {
        content: "Le cholestérol est un précurseur d’hormones stéroïdiennes.",
        correct: true,
        explanation: "La stéroïdogenèse dérive du cholestérol."
      },
      {
        content: "La myosine II est un moteur moléculaire utilisant l’ATP et interagissant avec l’actine.",
        correct: true,
        explanation: "Elle intervient notamment dans la contraction."
      },
      {
        content: "L’albumine contribue à la pression oncotique plasmatique.",
        correct: true,
        explanation: "Sa forte concentration plasmatique participe à la pression colloïdo-osmotique."
      },
      {
        content: "Les sphingolipides sont tous des protéines membranaires.",
        correct: false,
        explanation: "Ce sont des lipides construits autour d’une base sphingoïde."
      }
    ]
  },
  {
    order: 32,
    difficulty: "EASY",
    format: "QRM",
    question: "À propos de la mesure d’activité enzymatique, quelles propositions sont exactes ?",
    explanation: "La vitesse initiale est mesurée dans la portion initiale approximativement linéaire ; les unités U et katal décrivent l’activité catalytique à des échelles différentes.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:mesure-activite"
    ],
    choices: [
      {
        content: String.raw`$${texQuantity(1, U.ENZYME_UNIT)} = ${texQuantity(1, U.MICROMOL_PER_MIN)}$.`,
        correct: true,
        explanation: "C’est la définition usuelle de l’unité enzymatique."
      },
      {
        content: String.raw`Un katal correspond à $${texQuantity(1, U.MOL_PER_S)}$.`,
        correct: true,
        explanation: "Le katal est l’unité SI d’activité catalytique."
      },
      {
        content: "Une pente initiale d’absorbance peut être convertie en vitesse de concentration via la loi de Beer-Lambert si ε et l sont connus.",
        correct: true,
        explanation: "Avec A = ε·l·c, on convertit dA/dt en dc/dt."
      },
      {
        content: "L’absorbance s’exprime en mol·L⁻¹.",
        correct: false,
        explanation: "L’absorbance est sans dimension."
      },
      {
        content: "La vitesse initiale se mesure uniquement après épuisement du substrat.",
        correct: false,
        explanation: "Elle se mesure au début de la réaction."
      }
    ]
  },
  {
    order: 33,
    difficulty: "MEDIUM",
    format: "QZONE",
    question: "Sélectionnez une région Fab de l’anticorps.",
    explanation: "Les deux bras Fab d’une immunoglobuline contiennent les régions variables impliquées dans la reconnaissance de l’antigène.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:qzone-fab"
    ],
    image: {
      src: "/images/training/ue14/colles/c12/antibody-fab-qzone.svg",
      alt: "Anticorps schématique",
      width: 960,
      height: 560
    },
    expectedZones: [
      {
        id: "target",
        label: "Région Fab",
        x: 0.3,
        y: 0.18,
        tolerance: 0.1
      }
    ],
    defaultTolerance: 0.1
  },
  {
    order: 34,
    difficulty: "MEDIUM",
    format: "QRM",
    question: "À propos de la membrane plasmique et du cytosquelette cortical, quelles propositions sont exactes ?",
    explanation: "La membrane est une bicouche lipidique fluide et asymétrique, associée à un cortex d’actine sous-membranaire.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:membrane-cytosquelette"
    ],
    choices: [
      {
        content: "Les phospholipides membranaires sont amphiphiles.",
        correct: true,
        explanation: "Ils possèdent une tête hydrophile et des chaînes hydrophobes."
      },
      {
        content: "Le cortex cellulaire est particulièrement riche en filaments d’actine sous la membrane.",
        correct: true,
        explanation: "Ce réseau participe à la forme, la motilité et la mécanique cellulaire."
      },
      {
        content: "Les glucides membranaires sont exposés exclusivement sur le côté cytosolique.",
        correct: false,
        explanation: "Ils sont principalement orientés vers le côté extracellulaire."
      },
      {
        content: "Les microfilaments sont constitués de tubuline α/β.",
        correct: false,
        explanation: "Ils sont constitués d’actine."
      },
      {
        content: "Les filaments intermédiaires possèdent une polarité +/− aussi marquée que celle des microtubules.",
        correct: false,
        explanation: "Ils sont considérés comme non polarisés."
      }
    ]
  },
  {
    order: 35,
    difficulty: "EASY",
    format: "QROC",
    question: "Combien de protofilaments comporte typiquement un microtubule cytoplasmique ? Donnez uniquement la valeur numérique.",
    explanation: "Un microtubule cytoplasmique canonique est généralement formé de 13 protofilaments.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:microtubules"
    ],
    answer: {
      type: "number",
      value: 13,
      tolerance: 0
    }
  },
  {
    order: 36,
    difficulty: "MEDIUM",
    format: "QRU",
    question: "Une protéine intracellulaire doit être localisée avec des anticorps dans une cellule fixée. Quelle étape est particulièrement nécessaire pour permettre l’accès des anticorps à la cible ?",
    explanation: "Après fixation, la perméabilisation rend les membranes traversables par les anticorps utilisés pour l’immunomarquage intracellulaire.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:methodes-immunomarquage"
    ],
    choices: [
      {
        content: "La réplication de l’ADN mitochondrial.",
        correct: false,
        explanation: "Elle n’est pas une étape de l’immunomarquage."
      },
      {
        content: "La perméabilisation des membranes cellulaires.",
        correct: true,
        explanation: "Elle permet aux anticorps d’atteindre les antigènes intracellulaires."
      },
      {
        content: "La polymérisation forcée de tous les microtubules.",
        correct: false,
        explanation: "Ce n’est pas requis pour l’accès des anticorps."
      },
      {
        content: "L’hydrolyse complète des phospholipides membranaires.",
        correct: false,
        explanation: "La cellule serait détruite ; une perméabilisation contrôlée suffit."
      },
      {
        content: "L’activation d’APC/C-Cdc20.",
        correct: false,
        explanation: "Ce complexe intervient dans la progression mitotique."
      }
    ]
  },
  {
    order: 37,
    difficulty: "MEDIUM",
    format: "QRP",
    question: "Sélectionnez exactement les deux propositions correctes concernant adressage et compartiments cellulaires.",
    explanation: "Les protéines du RE peuvent être ciblées cotraductionnellement par SRP/Sec61, tandis que les protéines matricielles peroxysomales peuvent être importées post-traductionnellement via des signaux PTS.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:adressage-compartiments"
    ],
    choices: [
      {
        content: "La SRP peut reconnaître un signal hydrophobe et orienter le ribosome vers le RE.",
        correct: true,
        explanation: "Le complexe rejoint le récepteur de SRP puis le translocon Sec61."
      },
      {
        content: "Une protéine portant un PTS1 C-terminal peut être reconnue par PEX5.",
        correct: true,
        explanation: "PEX5 est un récepteur majeur des protéines matricielles portant PTS1."
      },
      {
        content: "Toutes les protéines mitochondriales sont synthétisées dans la matrice.",
        correct: false,
        explanation: "La majorité est codée par le noyau et synthétisée dans le cytosol."
      },
      {
        content: "Le mannose-6-phosphate adresse principalement les protéines au noyau.",
        correct: false,
        explanation: "Il participe au tri de nombreuses hydrolases lysosomales."
      },
      {
        content: "Le translocon Sec61 appartient à la membrane interne mitochondriale.",
        correct: false,
        explanation: "Il appartient à la membrane du RE."
      }
    ],
    requiredSelectionCount: 2
  },
  {
    order: 38,
    difficulty: "MEDIUM",
    format: "QRM",
    question: "À propos du trafic RE–Golgi–endosomes–lysosomes, quelles propositions sont exactes ?",
    explanation: "Les manteaux COPII, COPI et clathrine assurent des étapes différentes ; l’acidification lysosomale dépend des V-ATPases.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:trafic-vesiculaire"
    ],
    choices: [
      {
        content: "COPII participe principalement au trafic antérograde du RE vers le Golgi.",
        correct: true,
        explanation: "Il assure la sortie de nombreux cargos du RE."
      },
      {
        content: "COPI contribue notamment au trafic rétrograde du Golgi vers le RE.",
        correct: true,
        explanation: "Il participe au recyclage de protéines et membranes."
      },
      {
        content: "Les lysosomes maintiennent une lumière acide grâce à des pompes à protons.",
        correct: true,
        explanation: "Les V-ATPases accumulent des protons dans leur lumière."
      },
      {
        content: "La clathrine est un moteur moléculaire se déplaçant sur les microtubules.",
        correct: false,
        explanation: "C’est une protéine de manteau."
      },
      {
        content: "Les SNARE synthétisent les phospholipides des membranes vésiculaires.",
        correct: false,
        explanation: "Elles participent à la reconnaissance et à la fusion membranaires."
      }
    ]
  },
  {
    order: 39,
    difficulty: "MEDIUM",
    format: "QROC",
    question: "Quel récepteur cytosolique reconnaît classiquement le signal PTS1 de nombreuses protéines destinées à la matrice peroxysomale ?",
    explanation: "PEX5 reconnaît les protéines portant un PTS1, souvent situé à l’extrémité C-terminale.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:peroxysome-pts1"
    ],
    answer: {
      type: "text",
      acceptedAnswers: [
        "PEX5",
        "Pex5"
      ],
      normalization: {
        trim: true,
        collapseWhitespace: true,
        caseSensitive: false,
        ignoreAccents: true,
        normalizeUnicode: true
      }
    }
  },
  {
    order: 40,
    difficulty: "HARD",
    format: "QRM",
    question: "À propos de la mitochondrie et du noyau, quelles propositions sont exactes ?",
    explanation: "Ces organites utilisent des systèmes d’adressage distincts et concentrent des fonctions centrales de respiration, expression génétique et signalisation.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:mitochondrie-noyau"
    ],
    choices: [
      {
        content: "Le complexe TOM participe à l’import de nombreuses protéines à travers la membrane externe mitochondriale.",
        correct: true,
        explanation: "TOM constitue une porte d’entrée majeure pour les protéines synthétisées dans le cytosol."
      },
      {
        content: "La membrane interne mitochondriale porte les principaux complexes de la chaîne respiratoire.",
        correct: true,
        explanation: "Les complexes I à IV et l’ATP synthase sont associés à cette membrane."
      },
      {
        content: "Le nucléole est un compartiment nucléaire non membranaire impliqué dans la biogenèse ribosomale.",
        correct: true,
        explanation: "Il organise notamment la transcription et la maturation de plusieurs ARNr."
      },
      {
        content: "Les pores nucléaires sont constitués de nucléoporines.",
        correct: true,
        explanation: "Ces protéines forment le complexe du pore."
      },
      {
        content: "Le complexe II mitochondrial pompe directement des protons comme les complexes I, III et IV.",
        correct: false,
        explanation: "Le complexe II transfère des électrons mais ne pompe pas directement de protons."
      }
    ]
  },
  {
    order: 41,
    difficulty: "EASY",
    format: "QRU",
    question: "Quelle proposition décrit correctement un nucléosome canonique ?",
    explanation: "Le cœur du nucléosome contient deux copies de H2A, H2B, H3 et H4 autour desquelles s’enroulent environ 147 paires de bases d’ADN.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:nucleosome"
    ],
    choices: [
      {
        content: "Il est formé de tubuline et d’actine autour d’une molécule d’ARN.",
        correct: false,
        explanation: "Ces protéines appartiennent au cytosquelette."
      },
      {
        content: "Il contient quatre copies d’histone H1 et aucune autre histone.",
        correct: false,
        explanation: "H1 est une histone de liaison, hors octamère central."
      },
      {
        content: "Il contient un octamère de H2A, H2B, H3 et H4 associé à environ 147 pb d’ADN.",
        correct: true,
        explanation: "Chaque type d’histone du cœur est présent en deux copies."
      },
      {
        content: "Il n’existe que dans l’hétérochromatine.",
        correct: false,
        explanation: "Les nucléosomes organisent toute la chromatine."
      },
      {
        content: "Il est entouré d’une membrane propre.",
        correct: false,
        explanation: "Ce n’est pas un organite membranaire."
      }
    ]
  },
  {
    order: 42,
    difficulty: "MEDIUM",
    format: "QROC",
    question: "Quelle quantité d’ADN, exprimée en C, possède classiquement une cellule diploïde en G2 ?",
    explanation: "Après réplication, la cellule reste 2n mais sa quantité d’ADN est doublée : 4C.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:cycle-2n-4c"
    ],
    answer: {
      type: "text",
      acceptedAnswers: [
        "4C",
        "4 C",
        "4c",
        "4 c"
      ],
      normalization: {
        trim: true,
        collapseWhitespace: true,
        caseSensitive: false,
        ignoreAccents: true,
        normalizeUnicode: true
      }
    }
  },
  {
    order: 43,
    difficulty: "HARD",
    format: "QZONE",
    question: "Sélectionnez la membrane interne mitochondriale.",
    explanation: "La chaîne respiratoire et l’ATP synthase sont localisées dans la membrane interne mitochondriale.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qzone-mitochondrie"
    ],
    image: {
      src: "/images/training/ue14/colles/c12/mitochondria-inner-membrane-qzone.svg",
      alt: "Mitochondrie schématique",
      width: 960,
      height: 560
    },
    expectedZones: [
      {
        id: "target",
        label: "Membrane interne mitochondriale",
        x: 0.5,
        y: 0.5,
        tolerance: 0.11
      }
    ],
    defaultTolerance: 0.11
  },
  {
    order: 44,
    difficulty: "MEDIUM",
    format: "QRM",
    question: "À propos du contrôle du cycle cellulaire, quelles propositions sont exactes ?",
    explanation: "L’entrée en mitose dépend notamment de cycline B–CDK1 ; l’APC/C agit plus tard pour permettre la séparation des chromatides et la sortie de mitose.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:controle-cycle"
    ],
    choices: [
      {
        content: "Le complexe cycline B–CDK1 correspond au MPF classique.",
        correct: true,
        explanation: "Son activation déclenche de nombreux événements de l’entrée en mitose."
      },
      {
        content: "APC/C-Cdc20 cible notamment la sécurine pour dégradation lorsque le checkpoint du fuseau est satisfait.",
        correct: true,
        explanation: "La séparase peut alors cliver les cohésines."
      },
      {
        content: "Wee1 active CDK1 en retirant les phosphates inhibiteurs.",
        correct: false,
        explanation: "Wee1 ajoute des phosphorylations inhibitrices ; Cdc25 les retire."
      },
      {
        content: "La phase S double immédiatement le nombre de chromosomes de 2n à 4n.",
        correct: false,
        explanation: "Elle double la quantité d’ADN sans doubler le nombre de chromosomes."
      },
      {
        content: "p21 est une cycline mitotique qui active CDK1.",
        correct: false,
        explanation: "p21 est un inhibiteur de CDK pouvant être induit par p53."
      }
    ]
  },
  {
    order: 45,
    difficulty: "HARD",
    format: "QRP",
    question: "Sélectionnez exactement les deux propositions correctes concernant la transition métaphase–anaphase.",
    explanation: "Le checkpoint du fuseau retarde APC/C-Cdc20 tant que des kinétochores restent mal attachés. Quand il est satisfait, la dégradation de la sécurine libère la séparase.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:checkpoint-anaphase"
    ],
    choices: [
      {
        content: "Des kinétochores non correctement attachés peuvent maintenir l’inhibition de l’activation efficace d’APC/C-Cdc20.",
        correct: true,
        explanation: "Les protéines du checkpoint du fuseau empêchent une séparation prématurée."
      },
      {
        content: "La séparase active clive des cohésines et permet la séparation des chromatides sœurs.",
        correct: true,
        explanation: "Le clivage des cohésines autorise l’anaphase."
      },
      {
        content: "APC/C-Cdc20 stabilise la sécurine afin d’activer la séparase.",
        correct: false,
        explanation: "Il favorise au contraire sa dégradation."
      },
      {
        content: "La cycline B s’accumule brutalement à la fin de l’anaphase pour maintenir CDK1 active.",
        correct: false,
        explanation: "Sa dégradation contribue à la sortie de mitose."
      },
      {
        content: "La cytodiérèse animale est déclenchée par un anneau de filaments intermédiaires dépourvu de myosine.",
        correct: false,
        explanation: "Elle repose sur un anneau contractile actine–myosine II."
      }
    ],
    requiredSelectionCount: 2
  },
  {
    order: 46,
    difficulty: "MEDIUM",
    format: "QRPL",
    question: "Parmi ces dix propositions couvrant toute la Biologie cellulaire, sélectionnez exactement les cinq exactes.",
    explanation: "Cette synthèse mobilise membrane, cytosquelette, trafic intracellulaire, peroxysomes, mitochondrie, noyau et cycle.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:synthese-biocell"
    ],
    choices: [
      {
        content: "Une aquaporine permet un transport passif de l’eau.",
        correct: true,
        explanation: "L’eau suit son gradient de potentiel hydrique sans hydrolyse directe d’ATP."
      },
      {
        content: "La dynéine cytoplasmique se déplace classiquement vers l’extrémité − des microtubules.",
        correct: true,
        explanation: "Elle assure notamment des transports rétrogrades."
      },
      {
        content: "Le mannose-6-phosphate participe au tri de nombreuses hydrolases lysosomales.",
        correct: true,
        explanation: "Le récepteur M6P les dirige vers la voie endosomale."
      },
      {
        content: "La β-oxydation peroxysomale participe au raccourcissement d’acides gras à très longue chaîne.",
        correct: true,
        explanation: "Les produits raccourcis peuvent ensuite être pris en charge par d’autres compartiments."
      },
      {
        content: "L’ARN polymérase I transcrit le précurseur 45S des ARNr 18S, 5,8S et 28S.",
        correct: true,
        explanation: "Cette transcription a lieu dans le nucléole."
      },
      {
        content: "Les filaments intermédiaires sont constitués de tubuline α/β.",
        correct: false,
        explanation: "La tubuline forme les microtubules."
      },
      {
        content: "Les vésicules COPII assurent principalement le trafic Golgi vers RE.",
        correct: false,
        explanation: "Ce trafic est surtout RE vers Golgi."
      },
      {
        content: "La glycolyse se déroule dans la matrice mitochondriale.",
        correct: false,
        explanation: "Elle est cytosolique."
      },
      {
        content: "Le nucléole est limité par une bicouche lipidique.",
        correct: false,
        explanation: "C’est un compartiment non membranaire."
      },
      {
        content: "Une cellule diploïde en G2 est classiquement 4n/4C.",
        correct: false,
        explanation: "Elle est 2n/4C."
      }
    ],
    requiredSelectionCount: 5
  },
  {
    order: 47,
    difficulty: "HARD",
    format: "QRU",
    question: "Quel événement est la conséquence la plus directe de l’activation d’APC/C-Cdc20 au passage métaphase–anaphase ?",
    explanation: "APC/C-Cdc20 favorise l’ubiquitinylation de la sécurine ; sa dégradation permet l’activation de la séparase.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:apc-cdc20"
    ],
    choices: [
      {
        content: "La réplication immédiate de l’ADN nucléaire.",
        correct: false,
        explanation: "La réplication a lieu en phase S."
      },
      {
        content: "La synthèse de nouvelles cohésines pour verrouiller les chromatides.",
        correct: false,
        explanation: "Les cohésines doivent être clivées pour permettre l’anaphase."
      },
      {
        content: "L’inhibition permanente de la séparase.",
        correct: false,
        explanation: "La séparase est activée lorsque la sécurine disparaît."
      },
      {
        content: "La dégradation de la sécurine permettant l’activation de la séparase.",
        correct: true,
        explanation: "La séparase clive ensuite les cohésines."
      },
      {
        content: "La transformation de tous les microtubules en filaments d’actine.",
        correct: false,
        explanation: "Ces polymères restent distincts."
      }
    ]
  },
  {
    order: 48,
    difficulty: "EASY",
    format: "QRM",
    question: "À propos de l’organisation des principaux compartiments cellulaires, quelles propositions sont exactes ?",
    explanation: "Les compartiments se distinguent par leur enveloppe, leur contenu et leurs systèmes d’adressage.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:compartiments-cellulaires"
    ],
    choices: [
      {
        content: "Le lysosome est un compartiment délimité par une membrane unique.",
        correct: true,
        explanation: "Sa membrane isole un milieu luminal acide du cytosol."
      },
      {
        content: "Le peroxysome ne possède pas de génome propre.",
        correct: true,
        explanation: "Ses protéines sont codées par le noyau."
      },
      {
        content: "La mitochondrie possède une membrane externe et une membrane interne.",
        correct: true,
        explanation: "Ces deux membranes délimitent l’espace intermembranaire et la matrice."
      },
      {
        content: "Le noyau est entouré d’une enveloppe comportant deux membranes.",
        correct: true,
        explanation: "La membrane externe est continue avec le RE."
      },
      {
        content: "Le nucléole possède sa propre bicouche lipidique.",
        correct: false,
        explanation: "Il est non membranaire."
      }
    ]
  },
  {
    order: 49,
    difficulty: "EASY",
    format: "QRU",
    question: "Une cellule sécrète un médiateur qui diffuse localement et agit principalement sur des cellules voisines. Quel mode de communication est décrit ?",
    explanation: "Une communication paracrine agit localement sur des cellules proches de la cellule émettrice.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:communication-cellulaire"
    ],
    choices: [
      {
        content: "Endocrine.",
        correct: false,
        explanation: "Le signal endocrine emprunte généralement la circulation pour agir à distance."
      },
      {
        content: "Autocrine.",
        correct: false,
        explanation: "Le signal autocrine agit sur la cellule qui l’a produit."
      },
      {
        content: "Juxtacrine.",
        correct: false,
        explanation: "Elle nécessite un contact direct."
      },
      {
        content: "Synaptique électrique.",
        correct: false,
        explanation: "Une synapse électrique repose sur des jonctions communicantes."
      },
      {
        content: "Paracrine.",
        correct: true,
        explanation: "Le signal diffusible agit à courte distance sur les cellules voisines."
      }
    ]
  },
  {
    order: 50,
    difficulty: "MEDIUM",
    format: "QRM",
    question: "Pour cette synthèse finale de l’UE14 en Biologie cellulaire, quelles propositions sont exactes ?",
    explanation: "Les fonctions cellulaires émergent de l’intégration des membranes, du cytosquelette, des organites et du contrôle du cycle.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:synthese-finale-biocell"
    ],
    choices: [
      {
        content: "Les jonctions serrées contribuent au maintien de la polarité apicale/basolatérale des cellules épithéliales.",
        correct: true,
        explanation: "Elles limitent notamment la diffusion latérale de protéines entre domaines."
      },
      {
        content: "La membrane nucléaire externe est continue avec le réticulum endoplasmique.",
        correct: true,
        explanation: "L’espace périnucléaire est en continuité avec la lumière du RE."
      },
      {
        content: "La cytodiérèse animale fait intervenir un anneau contractile d’actine et de myosine II.",
        correct: true,
        explanation: "L’actomyosine forme le sillon de clivage."
      },
      {
        content: "Le complexe II de la chaîne respiratoire pompe directement autant de protons que le complexe I.",
        correct: false,
        explanation: "Le complexe II ne pompe pas directement de protons."
      },
      {
        content: "Toutes les protéines destinées aux mitochondries transitent d’abord par le Golgi.",
        correct: false,
        explanation: "La majorité est importée directement depuis le cytosol via les translocases mitochondriales."
      }
    ]
  }
];
