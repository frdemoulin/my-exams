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
        explanation: "Ils ont le même numéro atomique $\mathrm{Z}$ mais diffèrent par leur nombre de neutrons."
      },
      {
        content: "Un cation $2+$ possède deux électrons de plus que l’atome neutre correspondant.",
        correct: false,
        explanation: "Une charge $2+$ correspond à une perte de deux électrons."
      },
      {
        content: "Dans une période, l’électronégativité tend globalement à augmenter de gauche à droite.",
        correct: true,
        explanation: "L’attraction exercée sur les électrons de liaison augmente globalement dans ce sens."
      },
      {
        content: "Le nombre de masse $\mathrm{A}$ est égal au nombre d’électrons de l’atome neutre.",
        correct: false,
        explanation: "$\mathrm{A}$ correspond au nombre total de nucléons, protons plus neutrons."
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
    question: "Dans sa configuration électronique fondamentale $1\mathrm{s}^2\,2\mathrm{s}^2\,2\mathrm{p}^2$, combien d’électrons non appariés possède l’atome de carbone selon la règle de Hund ? Donnez uniquement la valeur numérique.",
    explanation: "Les deux électrons $2\mathrm{p}$ occupent d’abord deux orbitales p différentes avec des spins parallèles. L’atome de carbone fondamental possède donc deux électrons non appariés.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:regle-hund-carbone"
    ],
    answer: {
      type: "number",
      value: 2,
      tolerance: 0
    }
  },
  {
    order: 3,
    difficulty: "MEDIUM",
    format: "QRU",
    question: "Quelle proposition décrit correctement les liaisons d’une triple liaison carbone-carbone ?",
    explanation: "Une triple liaison $\ce{C#C}$ associe une liaison $\sigma$ axiale et deux liaisons $\pi$ issues de recouvrements latéraux.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:liaisons-sigma-pi"
    ],
    choices: [
      {
        content: "Elle comporte une liaison $\sigma$ et deux liaisons $\pi$.",
        correct: true,
        explanation: "C’est l’architecture classique d’une triple liaison."
      },
      {
        content: "Elle comporte trois liaisons $\sigma$ et aucune liaison $\pi$.",
        correct: false,
        explanation: "Une seule composante est $\sigma$."
      },
      {
        content: "Elle autorise une rotation libre autour de l’axe $\ce{C-C}$ sans modifier le recouvrement orbitalaire.",
        correct: false,
        explanation: "Les deux liaisons $\pi$ s’opposent à une rotation libre."
      },
      {
        content: "Elle impose une hybridation $\mathrm{sp}^3$ aux deux carbones.",
        correct: false,
        explanation: "Les carbones d’un alcyne sont classiquement $\mathrm{sp}$."
      },
      {
        content: "Elle correspond à une liaison ionique entre les deux carbones.",
        correct: false,
        explanation: "La triple liaison $\ce{C#C}$ est covalente."
      }
    ]
  },
  {
    order: 4,
    difficulty: "EASY",
    format: "QRP",
    question: "Sélectionnez exactement les deux propositions correctes concernant les interactions intermoléculaires.",
    explanation: "Les forces de London existent entre toutes les espèces polarisables. Une liaison hydrogène exige un donneur $\ce{X-H}$ adapté et un accepteur disposant d’un doublet.",
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
        explanation: "L’oxygène éthéré est accepteur mais la molécule n’est pas donneuse en l’absence de $\ce{O-H}$."
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
        content: "Le motif $\mathrm{R{-}C(=O){-}NH_2}$ correspond à un amide.",
        correct: true,
        explanation: "L’azote est directement lié au carbone carbonylé."
      },
      {
        content: "Le motif $\mathrm{R{-}C\equiv N}$ correspond à un nitrile.",
        correct: true,
        explanation: "La triple liaison $\mathrm{C\equiv N}$ caractérise le nitrile."
      },
      {
        content: "Un ammonium quaternaire porte quatre substituants sur un azote chargé positivement.",
        correct: true,
        explanation: "L’azote possède alors quatre liaisons et une charge formelle positive."
      },
      {
        content: "Un thiol est défini par le motif $\mathrm{R{-}OH}$.",
        correct: false,
        explanation: "Le thiol porte $\mathrm{R{-}SH}$."
      },
      {
        content: "Un ester simple contient obligatoirement un atome d’azote.",
        correct: false,
        explanation: "Le motif ester est $\mathrm{R{-}C(=O){-}O{-}R'}$."
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
    explanation: "Les descripteurs $\mathrm{R/S}$ concernent des centres stéréogènes tétraédriques ; $E/Z$ concernent les doubles liaisons lorsque chaque carbone porte deux substituants différents.",
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
        content: "L’attribution $E/Z$ nécessite de comparer les priorités CIP sur chacun des deux carbones de la double liaison.",
        correct: true,
        explanation: "Les groupes de plus haute priorité déterminent E ou Z."
      },
      {
        content: "Une $\text{S}_\text{N}2$ sur un centre stéréogène procède par attaque arrière et inversion géométrique au centre attaqué.",
        correct: true,
        explanation: "Le mécanisme concerté impose l’attaque opposée au groupe partant."
      },
      {
        content: "Deux diastéréoisomères sont toujours des images miroir l’un de l’autre.",
        correct: false,
        explanation: "Cette relation définit les énantiomères."
      },
      {
        content: "La présence d’une double liaison $\mathrm{C=C}$ suffit toujours à définir une configuration $E/Z$.",
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
    explanation: "L’hydrogénation catalytique d’un alcène ajoute $\ce{H2}$ sur la double liaison et conduit à l’alcane correspondant.",
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
        explanation: "Deux hydrogènes s’ajoutent sur les carbones de $\mathrm{C=C}$."
      },
      {
        content: "Une addition de $\mathrm{HX}$ sur un alcène conserve obligatoirement la liaison $\pi$.",
        correct: false,
        explanation: "L’addition consomme la liaison $\pi$."
      },
      {
        content: "Un alcyne est défini par une double liaison $\mathrm{C=C}$.",
        correct: false,
        explanation: "Il contient une triple liaison $\ce{C#C}$."
      },
      {
        content: "L’addition électrophile d’un alcène est impossible car la liaison $\pi$ est dépourvue d’électrons.",
        correct: false,
        explanation: "La liaison $\pi$ est riche en électrons et peut réagir avec des électrophiles."
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
        content: "La réduction d’une cétone par $\ce{NaBH4}$ peut conduire à un alcool secondaire.",
        correct: true,
        explanation: "Le carbone carbonylé conserve ses deux substituants carbonés."
      },
      {
        content: "L’oxydation d’un alcool secondaire conduit classiquement à un aldéhyde.",
        correct: false,
        explanation: "Elle conduit à une cétone."
      },
      {
        content: "Une $\text{S}_\text{N}2$ sur un carbone très encombré est favorisée par l’encombrement stérique.",
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
        explanation: "La polarisation $\mathrm{C}^{\delta+}$–$\mathrm{O}^{\delta-}$ appauvrit le carbone en densité électronique."
      },
      {
        content: "La liaison $\ce{C-N}$ d’un amide possède un caractère partiel de double liaison.",
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
        content: "Un carbone $\mathrm{sp}$ adopte classiquement une géométrie linéaire, également dite digonale.",
        correct: true,
        explanation: "Deux directions de liaison opposées sont associées à l’hybridation $\mathrm{sp}$."
      },
      {
        content: "Un carboxylate est stabilisé par délocalisation de la charge sur les deux oxygènes.",
        correct: true,
        explanation: "Les formes mésomères principales contribuent à cette stabilisation."
      },
      {
        content: "Un organomagnésien réagit avec $\ce{CO2}$ puis, après hydrolyse, peut donner un acide carboxylique.",
        correct: true,
        explanation: "Le carbone du $\ce{CO2}$ devient le carbone carboxylique."
      },
      {
        content: "La réduction d’un aldéhyde par un hydrure peut donner un alcool primaire.",
        correct: true,
        explanation: "$\mathrm{R{-}CHO}$ est transformé en $\mathrm{R{-}CH_2OH}$."
      },
      {
        content: "La géométrie correcte d’un carbone $\mathrm{sp}$ est dite diagonale.",
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
        content: "Une double liaison $\mathrm{C=C}$ est constituée de deux liaisons $\sigma$.",
        correct: false,
        explanation: "Elle associe une $\sigma$ et une $\pi$."
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
    question: "Quel est l’état d’hybridation classique d’un carbone engagé dans une triple liaison $\ce{C#C}$ ?",
    explanation: "Un carbone alcynique utilise deux orbitales hybrides $\mathrm{sp}$ et conserve deux orbitales $\mathrm{p}$ non hybridées.",
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
    question: "Dans la molécule M, quelle fonction détermine le suffixe principal dans la hiérarchie de nomenclature retenue ?",
    explanation: "Dans la hiérarchie fonctionnelle utilisée pour la nomenclature de cette EC, l’acide carboxylique est prioritaire sur la cétone et l’amine. Il détermine donc le suffixe principal du nom ; les autres fonctions sont exprimées comme fonctions secondaires selon les règles de nomenclature correspondantes.",
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
    question: "À propos de la fonction acide carboxylique portée par M et de sa base conjuguée, quelles propositions sont exactes ?",
    explanation: "La perte du proton acide conduit au carboxylate. Ses deux formes mésomères limites délocalisent la charge négative sur les deux oxygènes, de sorte que les deux liaisons $\ce{C-O}$ sont équivalentes dans la description moyenne. Le carbone du motif carboxyle reste associé à un système $\pi$ délocalisé et la fonction acide comporte bien un carbonyle.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:acides-carboxyliques"
    ],
    choices: [
      {
        content: "Sa déprotonation conduit à un ion carboxylate.",
        correct: true,
        explanation: "La perte de $\ce{H+}$ concerne le groupe $-\mathrm{COOH}$."
      },
      {
        content: "Dans le carboxylate, les deux liaisons $\ce{C-O}$ deviennent équivalentes dans la description mésomère moyenne.",
        correct: true,
        explanation: "La charge et le caractère de liaison sont délocalisés sur les deux oxygènes."
      },
      {
        content: "La fonction acide carboxylique de M contient elle-même un groupe carbonyle.",
        correct: true,
        explanation: "Le motif carboxyle associe un groupe $\mathrm{C=O}$ et un groupe $\mathrm{OH}$."
      },
      {
        content: "La charge négative du carboxylate est stabilisée par délocalisation sur les deux oxygènes.",
        correct: true,
        explanation: "Les formes mésomères limites contribuent à cette stabilisation."
      },
      {
        content: "La déprotonation transforme le carbone carboxylique en carbone tétraédrique $\mathrm{sp}^3$ dépourvu de toute délocalisation.",
        correct: false,
        explanation: "Le carbone carboxylique reste hybride $\mathrm{sp}^2$ avec délocalisation $\pi$."
      }
    ]
  },
  {
    order: 15,
    difficulty: "MEDIUM",
    format: "QRM",
    question: "En analysant les quatre transformations du panneau B, quelles propositions sont exactes ?",
    explanation: "Le passage d’un alcool primaire à un aldéhyde est une oxydation. NaBH4 réduit un aldéhyde en alcool primaire et une cétone en alcool secondaire. L’oxydation d’un aldéhyde peut conduire à l’acide carboxylique correspondant. La transformation 4 est donc une réduction, et non une oxydation.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:enchaînements-reactionnels"
    ],
    choices: [
      {
        content: "La transformation 1 correspond à l’oxydation d’un alcool primaire en aldéhyde.",
        correct: true,
        explanation: "Le carbone portant l’alcool augmente son degré d’oxydation."
      },
      {
        content: "La transformation 2 correspond à une réduction de l’aldéhyde en alcool primaire.",
        correct: true,
        explanation: "Le carbonyle aldéhydique est réduit en alcool primaire par $\ce{NaBH4}$."
      },
      {
        content: "La transformation 3 correspond à une oxydation de l’aldéhyde en acide carboxylique.",
        correct: true,
        explanation: "L’aldéhyde est oxydé en acide de même squelette."
      },
      {
        content: "La transformation 4 correspond à une oxydation de la propanone en propan-2-ol.",
        correct: false,
        explanation: "Le passage d’une cétone à un alcool secondaire est une réduction."
      },
      {
        content: "La transformation 1 est une substitution nucléophile d’acyle au cours de laquelle le nombre d’oxydation du carbone fonctionnel reste nécessairement inchangé.",
        correct: false,
        explanation: "C’est une oxydation d’alcool en aldéhyde."
      }
    ]
  },
  {
    order: 16,
    difficulty: "MEDIUM",
    format: "QZONE",
    question: "Sur la molécule M du panneau A, sélectionnez l’oxygène du carbonyle de la fonction cétone, et non l’un des oxygènes de la fonction acide carboxylique.",
    explanation: "M possède deux motifs contenant un carbonyle : la fonction acide carboxylique et la fonction cétone. La cible demandée est l’oxygène doublement lié au carbone de la cétone interne. Il faut donc le distinguer des deux oxygènes appartenant au groupe carboxyle.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:qzone-carbonyle"
    ],
    image: {
      src: "/images/training/ue14/colles/c12/polyfunctional-reactivity-linked-q13-q16.svg",
      alt: "Molécule polyfonctionnelle M portant un acide carboxylique, une cétone et une amine, accompagnée de plusieurs transformations simples entre alcool, aldéhyde, acide carboxylique et cétone.",
      width: 1200,
      height: 760
    },
    expectedZones: [
      {
        id: "target-ketone-carbonyl-oxygen",
        label: "Oxygène carbonylé de la fonction cétone de M",
        x: 0.2667,
        y: 0.3289,
        tolerance: 0.04
      }
    ],
    defaultTolerance: 0.04
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
        content: "La cellulose est un polymère de glucose principalement lié en $\alpha(1\rightarrow 4)$.",
        correct: false,
        explanation: "Elle comporte des liaisons $\beta(1\rightarrow 4)$."
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
    question: "Un oligosaccharide linéaire comporte cinq oses reliés bout à bout. Combien de liaisons osidiques faut-il hydrolyser pour obtenir cinq monosaccharides séparés ? Donnez uniquement la valeur numérique.",
    explanation: "Dans une chaîne linéaire de cinq unités, quatre liaisons relient les cinq oses successifs. Leur hydrolyse complète libère cinq monosaccharides.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:hydrolyse-oligosaccharide"
    ],
    answer: {
      type: "number",
      value: 4,
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
        explanation: "Elle hydrolyse l’ester acyle en $\mathrm{sn{-}2}$."
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
        content: "Le glycogène possède des liaisons $\alpha(1\rightarrow 4)$ et des branchements $\alpha(1\rightarrow 6)$.",
        correct: true,
        explanation: "Ces liaisons structurent ses chaînes et leurs ramifications."
      },
      {
        content: "L’acide linoléique appartient à la série $\mathrm{n{-}6}$ et doit être apporté par l’alimentation.",
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
        content: "La glycine est achirale au niveau de son carbone $\alpha$.",
        correct: true,
        explanation: "Son carbone $\alpha$ porte deux hydrogènes."
      },
      {
        content: "La liaison peptidique présente un caractère partiel de double liaison.",
        correct: true,
        explanation: "La résonance limite la rotation autour de $\ce{C-N}$."
      },
      {
        content: "Une hélice $\alpha$ est notamment stabilisée par des liaisons hydrogène du squelette peptidique.",
        correct: true,
        explanation: "Le motif classique relie $\mathrm{C=O}(i)$ à $\ce{N-H}(i+4)$."
      },
      {
        content: "La proline interne stabilise toujours une hélice $\alpha$ longue et régulière.",
        correct: false,
        explanation: "Elle tend au contraire à la perturber."
      },
      {
        content: "Les feuillets $\beta$ ne peuvent exister qu’en organisation antiparallèle.",
        correct: false,
        explanation: "Ils peuvent être parallèles ou antiparallèles."
      }
    ]
  },
  {
    order: 22,
    difficulty: "MEDIUM",
    format: "QROC",
    question: "Quel acide aminé protéinogène possède un noyau indole dans sa chaîne latérale ?",
    explanation: "Le tryptophane est un acide aminé aromatique dont la chaîne latérale contient un noyau indole.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:tryptophane-indole"
    ],
    answer: {
      type: "text",
      acceptedAnswers: [
        "Tryptophane",
        "tryptophane",
        "Trp",
        "W"
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
        explanation: "L’organisation $\mathrm{H_2L_2}$ forme les deux Fab et la région Fc."
      },
      {
        content: "La myoglobine est une protéine monomérique contenant un groupement hème capable de fixer l’oxygène.",
        correct: true,
        explanation: "La myoglobine est une protéine monomérique riche dans le muscle ; son hème contient un fer capable de lier réversiblement le dioxygène."
      },
      {
        content: "L’HbA adulte principale est un tétramère $\alpha_2\beta_2$.",
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
    explanation: "Les profils idéaux permettent de distinguer les effets sur $K_{\mathrm{m}}$ apparent et $V_{\max}$.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:inhibitions-enzymatiques"
    ],
    choices: [
      {
        content: "Une inhibition compétitive pure augmente $K_{\mathrm{m}}$ apparent sans modifier $V_{\max}$.",
        correct: true,
        explanation: "Un excès de substrat peut surmonter la compétition dans le modèle idéal."
      },
      {
        content: "Une inhibition incompétitive pure diminue $K_{\mathrm{m}}$ et $V_{\max}$ dans la même proportion.",
        correct: true,
        explanation: "Les droites de Lineweaver-Burk idéales sont parallèles."
      },
      {
        content: "Une inhibition non compétitive pure augmente nécessairement $K_{\mathrm{m}}$ et $V_{\max}$.",
        correct: false,
        explanation: "Dans le cas pur, $K_{\mathrm{m}}$ reste inchangé et $V_{\max}$ diminue."
      },
      {
        content: "Une inhibition mixte générale conserve toujours exactement la même valeur de $K_{\mathrm{m}}$.",
        correct: false,
        explanation: "$K_{\mathrm{m}}$ peut augmenter ou diminuer selon les affinités relatives de l’inhibiteur."
      },
      {
        content: "Une inhibition compétitive pure impose $V_{\max} = 0$.",
        correct: false,
        explanation: "$V_{\max}$ reste inchangée dans le modèle idéal."
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
        content: "La phospholipase A2 peut libérer l’acide gras porté en $\mathrm{sn{-}2}$ d’un glycérophospholipide.",
        correct: true,
        explanation: "Cette position peut notamment contenir de l’acide arachidonique."
      },
      {
        content: "Le point isoélectrique est le $\mathrm{pH}$ où la charge nette moyenne d’un acide aminé ou d’une protéine est nulle.",
        correct: true,
        explanation: "Des charges internes peuvent néanmoins subsister."
      },
      {
        content: "Une enzyme diminue $\Delta G^\ddagger$ sans modifier $K_{\mathrm{eq}}$.",
        correct: true,
        explanation: "Elle accélère l’approche de l’équilibre sans le déplacer."
      },
      {
        content: "La mésomérie de la liaison peptidique limite la rotation autour de la liaison $\\ce{C-N}$.",
        correct: true,
        explanation: "La délocalisation du doublet de l’azote vers le carbonyle confère à la liaison peptidique $\ce{C-N}$ un caractère partiel de double liaison et en limite la rotation."
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
        content: "$K_{\mathrm{m}}$ est toujours strictement égal à $K_{\mathrm{d}}$.",
        correct: false,
        explanation: "$K_{\mathrm{m}}$ dépend des constantes cinétiques et n’est pas une constante universelle d’affinité."
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
    question: "Une préparation enzymatique présente une activité totale de 12 U pour 3 mg de protéines. Quelle est son activité spécifique ? Donnez uniquement la valeur numérique, en U/mg.",
    explanation: "L’activité spécifique est l’activité enzymatique totale divisée par la masse totale de protéines : 12 U / 3 mg = $4\,\mathrm{U}\cdot\mathrm{mg}^{-1}$.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:activite-specifique"
    ],
    answer: {
      type: "number",
      value: 4,
      tolerance: 0,
      unit: "U/mg",
      displayUnit: "\\mathrm{U}\\cdot\\mathrm{mg}^{-1}"
    }
  },
  {
    order: 29,
    difficulty: "MEDIUM",
    format: "QRU",
    question: "Pour une enzyme suivant Michaelis-Menten, quelle relation est exacte lorsque la concentration de substrat est égale à $K_{\mathrm{m}}$ ?",
    explanation: "Lorsque $[\mathrm{S}] = K_{\mathrm{m}}$, l’équation donne $v_0 = V_{\max}/2$.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:michaelis-menten"
    ],
    choices: [
      {
        content: "$v_0 = V_{\max}/2$.",
        correct: true,
        explanation: "Le numérateur et le dénominateur deviennent respectivement $V_{\max} \cdot K_{\mathrm{m}}$ et $2K_{\mathrm{m}}$."
      },
      {
        content: "$v_0 = 2V_{\max}$.",
        correct: false,
        explanation: "La vitesse ne dépasse pas $V_{\max}$ dans ce modèle."
      },
      {
        content: "$v_0 = 0$.",
        correct: false,
        explanation: "Une concentration égale à $K_{\mathrm{m}}$ ne correspond pas à une absence de réaction."
      },
      {
        content: "$K_{\mathrm{m}}$ devient sans unité.",
        correct: false,
        explanation: "$K_{\mathrm{m}}$ garde l’unité d’une concentration."
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
        content: "Les anomères $\alpha$ et $\beta$ sont des énantiomères.",
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
    question: "À propos des interactions qui stabilisent la structure des protéines, quelles propositions sont exactes ?",
    explanation: "Le repliement des protéines dépend d’interactions non covalentes (effet hydrophobe, liaisons hydrogène, liaisons ioniques) et de liaisons covalentes comme les ponts disulfure.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:stabilite-proteines"
    ],
    choices: [
      {
        content: "L’effet hydrophobe favorise l’enfouissement de nombreux résidus apolaires au cœur des protéines globulaires.",
        correct: true,
        explanation: "En milieu aqueux, l’enfouissement des surfaces apolaires contribue fortement au repliement des protéines globulaires."
      },
      {
        content: "Un pont disulfure peut résulter de l’oxydation de deux résidus cystéine.",
        correct: true,
        explanation: "L’oxydation des fonctions thiol de deux cystéines peut former une liaison covalente $\ce{S-S}$."
      },
      {
        content: "Des liaisons hydrogène du squelette peptidique contribuent à stabiliser les hélices $\alpha$ et les feuillets $\beta$.",
        correct: true,
        explanation: "Les structures secondaires reposent notamment sur des liaisons hydrogène entre groupements $\mathrm{C=O}$ et $\ce{N-H}$ du squelette."
      },
      {
        content: "La dénaturation d’une protéine hydrolyse nécessairement toutes ses liaisons peptidiques.",
        correct: false,
        explanation: "La dénaturation perturbe surtout les niveaux supérieurs de structure sans impliquer nécessairement l’hydrolyse de la structure primaire."
      },
      {
        content: "Les interactions ioniques intraprotéiques sont impossibles en milieu aqueux.",
        correct: false,
        explanation: "Des interactions électrostatiques entre chaînes latérales chargées peuvent contribuer à la stabilité protéique, même en milieu aqueux."
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
        content: "Les microfilaments sont constitués de tubuline $\alpha/\beta$.",
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
        content: "L’import de nombreuses protéines matricielles peroxysomales peut avoir lieu après leur synthèse complète dans le cytosol.",
        correct: true,
        explanation: "Contrairement à l’import cotraductionnel classique vers le réticulum endoplasmique, de nombreuses protéines destinées à la matrice peroxysomale sont synthétisées dans le cytosol puis importées de façon post-traductionnelle."
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
    question: "En vous appuyant sur le schéma et sur l’organisation du noyau et de la mitochondrie, quelles propositions sont exactes ?",
    explanation: "Le complexe TOM appartient à la membrane externe mitochondriale et participe à l’import de nombreuses protéines. La mitochondrie possède un génome propre, distinct du génome nucléaire, même si son autonomie protéique est limitée. Dans le noyau, le nucléole n’est pas entouré d’une membrane et participe à la biogenèse ribosomale ; les complexes de pores nucléaires sont formés de nucléoporines. Enfin, le complexe II de la chaîne respiratoire transfère des électrons sans pomper directement de protons.",
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
        content: "L’ADN mitochondrial constitue un génome distinct du génome nucléaire.",
        correct: true,
        explanation: "Les mitochondries possèdent leur propre ADN, distinct de l’ADN nucléaire, même si la grande majorité des protéines mitochondriales sont codées par le génome nucléaire."
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
    question: "Dans l’agrandissement de la chromatine, quelle proposition décrit correctement l’unité nucléosomique canonique représentée ?",
    explanation: "Le nucléosome canonique correspond à environ 147 paires de bases d’ADN enroulées autour d’un octamère formé de deux copies de chacune des histones H2A, H2B, H3 et H4. L’histone H1 est une histone de liaison et ne constitue pas le cœur octamérique.",
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
    question: "À quelle grande famille du cytosquelette appartiennent les lamines représentées sous l’enveloppe nucléaire ?",
    explanation: "Les lamines nucléaires sont des protéines de la famille des filaments intermédiaires. Elles forment la lamina nucléaire, un réseau associé à la face interne de l’enveloppe nucléaire et impliqué notamment dans son organisation mécanique.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:lamines-filaments-intermediaires"
    ],
    answer: {
      type: "text",
      acceptedAnswers: [
        "filaments intermédiaires",
        "filament intermédiaire",
        "intermediate filaments",
        "IF"
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
    question: "Sur l’agrandissement de la mitochondrie, sélectionnez un segment de la membrane interne mitochondriale.",
    explanation: "La membrane interne mitochondriale se situe à l’intérieur de la membrane externe et forme des replis appelés crêtes. Elle porte notamment les principaux complexes de la chaîne respiratoire et l’ATP synthase. La membrane externe, la matrice et l’ADN mitochondrial ne correspondent pas à la zone demandée.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qzone-mitochondrie"
    ],
    image: {
      src: "/images/training/ue14/colles/c12/nucleus-mitochondrion-linked-q40-q43.svg",
      alt: "Schéma d’une cellule eucaryote montrant un noyau avec nucléole, pores, chromatine et lamines, ainsi qu’une mitochondrie à double membrane avec complexe TOM et ADN mitochondrial.",
      width: 1200,
      height: 760
    },
    expectedZones: [
      {
        id: "target-mitochondrial-inner-membrane",
        label: "Membrane interne mitochondriale",
        x: 0.7333,
        y: 0.8158,
        tolerance: 0.05
      }
    ],
    defaultTolerance: 0.05
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
        content: "La $\beta$-oxydation peroxysomale participe au raccourcissement d’acides gras à très longue chaîne.",
        correct: true,
        explanation: "Les produits raccourcis peuvent ensuite être pris en charge par d’autres compartiments."
      },
      {
        content: "L’ARN polymérase I transcrit le précurseur 45S des ARNr 18S, 5,8S et 28S.",
        correct: true,
        explanation: "Cette transcription a lieu dans le nucléole."
      },
      {
        content: "Les filaments intermédiaires sont constitués de tubuline $\alpha/\beta$.",
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
        explanation: "Elle est $2\mathrm{n}/4\mathrm{C}$."
      }
    ],
    requiredSelectionCount: 5
  },
  {
    order: 47,
    difficulty: "HARD",
    format: "QRU",
    question: "Une protéine soluble normalement nucléaire porte un NLS fonctionnel. Une mutation d’importine $\beta$ empêche son interaction avec les nucléoporines du pore nucléaire, sans altérer la protéine cargo. Quelle conséquence est la plus directe ?",
    explanation: "L’importine $\beta$ interagit avec les nucléoporines du complexe du pore nucléaire et participe à la translocation du complexe d’import. Si cette interaction est empêchée, l’import nucléaire efficace du cargo diminue et le cargo tend à rester cytosolique. Les voies lysosomale, réticulaire et mitochondriale ne compensent pas ce défaut.",
    tags: [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:importine-beta-mutation"
    ],
    choices: [
      {
        content: "Le cargo est automatiquement adressé au lysosome par le mannose-6-phosphate.",
        correct: false,
        explanation: "Le tri M6P concerne la voie endomembranaire vers les endosomes/lysosomes, pas une protéine nucléaire cytosolique."
      },
      {
        content: "Le cargo est transloqué cotraductionnellement dans le réticulum endoplasmique via Sec61.",
        correct: false,
        explanation: "Le cargo ne possède pas le signal hydrophobe RE adéquat pour la voie Sec61."
      },
      {
        content: "Le cargo traverse plus rapidement l’enveloppe nucléaire par diffusion passive malgré sa grande taille.",
        correct: false,
        explanation: "Un blocage du transport actif d’import n’accélère pas la diffusion des grosses molécules."
      },
      {
        content: "L’import nucléaire du cargo diminue et celui-ci tend à s’accumuler dans le cytosol.",
        correct: true,
        explanation: "Sans interaction efficace avec les nucléoporines, le complexe d’import n’est plus acheminé efficacement vers le noyau."
      },
      {
        content: "Le NLS est clivé par la peptidase de maturation mitochondriale.",
        correct: false,
        explanation: "La peptidase de maturation mitochondriale agit dans la matrice mitochondriale."
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
