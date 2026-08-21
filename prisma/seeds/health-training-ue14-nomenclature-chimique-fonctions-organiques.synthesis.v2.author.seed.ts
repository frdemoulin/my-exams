import { TEX_UNITS, texQuantity } from './tex-units';
import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

const U = TEX_UNITS;

/**
 * UE14 – Chimie organique – Chapitre 2.1 – Section Synthèse
 */
export const UE14_CH5_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 101,
    difficulty: 'EASY',
    format: 'QRU',
    question: "Une microanalyse élémentaire est réalisée sur un composé organique. Quelle proposition décrit correctement l'information qu'elle fournit directement ?",
    choices: [
      { content: "Elle distingue à elle seule deux isomères ayant la même formule brute.", correct: false, explanation: "Deux isomères de même formule brute ont la même composition élémentaire." },
      { content: "Elle fournit toujours de façon non ambiguë la formule brute exacte de la molécule.", correct: false, explanation: "Sans donnée supplémentaire, notamment la masse molaire, elle peut conduire à une formule empirique sans fixer une formule brute unique." },
      { content: "Elle permet d'estimer le pourcentage massique des éléments recherchés dans le composé.", correct: true, explanation: "La microanalyse renseigne directement sur la composition élémentaire, notamment sous forme de pourcentages massiques." },
      {
        "content": "Elle fournit directement la géométrie tridimensionnelle complète de la molécule.",
        "correct": false,
        "explanation": "La formule brute renseigne sur la composition atomique, pas sur la géométrie tridimensionnelle."
      },
      { content: "Elle identifie directement les fonctions alcool, ester ou amide présentes dans la molécule.", correct: false, explanation: "Elle ne renseigne pas directement sur l'enchaînement des atomes ni sur les fonctions chimiques." }
    ],
    explanation: "La microanalyse est un outil de composition élémentaire. Elle ne révèle ni l'enchaînement des atomes ni nécessairement la formule brute exacte.",
  },
  {
    order: 102,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: String.raw`Un composé ne contenant que C, H et O donne à la microanalyse : 60,0 % de C, 13,3 % de H et 26,7 % de O. Quelles propositions sont exactes ?
Données : $M_{\mathrm C}=${texQuantity(12, U.G_PER_MOL)}$, $M_{\mathrm H}=${texQuantity(1, U.G_PER_MOL)}$ et $M_{\mathrm O}=${texQuantity(16, U.G_PER_MOL)}$.`,
    choices: [
      { content: String.raw`Le plus petit rapport entier conduit à la formule empirique $\ce{C3H8O}$.`, correct: true, explanation: "Les rapports 5,0 : 13,3 : 1,67 deviennent approximativement 3 : 8 : 1." },
      { content: String.raw`On peut affirmer, sans autre donnée, que la formule brute est exactement $\ce{C3H8O}$.`, correct: false, explanation: "Une masse molaire est nécessaire pour savoir si la formule brute est cette formule empirique ou un multiple entier." },
      {
        "content": "Les pourcentages massiques peuvent être utilisés directement comme nombres d’atomes dans la formule empirique.",
        "correct": false,
        "explanation": "Les pourcentages massiques doivent d’abord être convertis en quantités de matière relatives à l’aide des masses molaires atomiques."
      },
      { content: "Sur une base de 100 g de composé, la quantité relative de carbone vaut 5,0 mol.", correct: true, explanation: "60,0 g de carbone correspondent à 60/12 = 5,0 mol." },
      { content: "Sur une base de 100 g de composé, la quantité relative d'oxygène vaut environ 1,67 mol.", correct: true, explanation: "26,7 g d'oxygène correspondent à 26,7/16 ≈ 1,67 mol." }
    ],
    explanation: "On raisonne sur 100 g, on convertit les masses en quantités de matière puis on ramène au plus petit rapport entier.",
  },
  {
    order: 103,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "L'aspirine est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    choices: [
      { content: "La molécule possède une fonction amide parce qu'elle contient plusieurs atomes d'oxygène.", correct: false, explanation: "Une amide nécessite notamment un azote directement lié à un carbone carbonylé." },
      {
        "content": "La molécule possède une fonction nitrile.",
        "correct": false,
        "explanation": "La structure ne comporte pas de motif $\\ce{C#N}$."
      },
      { content: "La molécule possède une fonction acide carboxylique.", correct: true, explanation: "Le motif $\\ce{-COOH}$ correspond à une fonction acide carboxylique." },
      { content: "La molécule possède une fonction ester.", correct: true, explanation: "Le motif $\\ce{C(=O)-O-C}$ correspond à une fonction ester." },
      { content: "Le groupe $\\ce{-OH}$ du carboxyle constitue une fonction alcool indépendante.", correct: false, explanation: "Le groupe $\\ce{-OH}$ appartient au motif complet $\\ce{-COOH}$." }
    ],
    explanation: "Il faut reconnaître les motifs complets : l'aspirine associe ici un acide carboxylique et un ester.",
    questionDiagram: { type: 'molecule', molecule: 'aspirin-topological' },
  },
  {
    order: 104,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "La cystéine est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles fonctions reconnaît-on dans cette représentation neutre ?",
    choices: [
      {
        "content": "La molécule possède un ammonium quaternaire.",
        "correct": false,
        "explanation": "La structure ne comporte pas d’azote tétravalent chargé positivement."
      },
      { content: "Une fonction amine.", correct: true, explanation: "Le groupe $\\ce{-NH2}$ correspond ici à une fonction amine." },
      { content: "Une fonction acide carboxylique.", correct: true, explanation: "Le motif $\\ce{-COOH}$ correspond à une fonction acide carboxylique." },
      { content: "Une fonction thiol.", correct: true, explanation: "Le groupe $\\ce{-SH}$ correspond à une fonction thiol." },
      { content: "Une fonction nitrile.", correct: false, explanation: "Un nitrile nécessite une liaison $\\ce{C#N}$, absente ici." }
    ],
    explanation: "La cystéine est polyfonctionnelle : amine, acide carboxylique et thiol.",
    questionDiagram: { type: 'molecule', molecule: 'cysteine-topological' },
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "On considère $\\ce{CH3-C(=O)-CH2-OH}$. Sélectionnez exactement les deux propositions incorrectes.",
    "choices": [
      {
        "content": "Le carbone du groupe carbonyle est quaternaire parce qu’il ne porte aucun hydrogène.",
        "correct": true,
        "explanation": "Incorrect : ce carbone est directement lié à deux carbones ; il est secondaire. Le nombre d’hydrogènes portés ne définit pas son degré."
      },
      {
        "content": "Le carbone du groupe $\\ce{CH2OH}$ est secondaire parce qu’il porte deux hydrogènes.",
        "correct": true,
        "explanation": "Incorrect : ce carbone n’a qu’un seul voisin carboné ; il est primaire."
      },
      {
        "content": "La fonction alcool est primaire.",
        "correct": false,
        "explanation": "Le carbone portant le groupe $\\ce{-OH}$ n’est lié qu’à un seul autre carbone : l’alcool est primaire."
      },
      {
        "content": "Le carbone du groupe $\\ce{CH3}$ est primaire.",
        "correct": false,
        "explanation": "Ce carbone n’a qu’un seul voisin carboné."
      },
      {
        "content": "La double liaison $\\ce{C=O}$ ne crée pas deux voisins carbonés distincts pour le carbone carbonylé.",
        "correct": false,
        "explanation": "Le degré dépend du nombre d’atomes de carbone directement liés, pas de l’ordre des liaisons."
      }
    ],
    "explanation": "Le degré d’un carbone se détermine par le nombre d’atomes de carbone qui lui sont directement liés. Il ne doit pas être déduit du seul nombre d’hydrogènes portés."
  },
  {
    order: 106,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: String.raw`On considère la molécule $\ce{CH3-O-CH2-O-CH3}$. Quelles propositions sont exactes ?`,
    choices: [
      { content: "Elle renferme deux motifs éther, chacun des deux oxygènes étant lié à deux carbones.", correct: true, explanation: "Chaque oxygène est engagé dans un motif $\\ce{R-O-R'}$." },
      { content: "Elle renferme une fonction alcool parce qu'elle contient des atomes d'oxygène.", correct: false, explanation: "Une fonction alcool nécessite un groupe $\\ce{-OH}$, absent ici." },
      { content: "C'est un alcane, car toutes les liaisons entre atomes de carbone sont simples.", correct: false, explanation: "Un alcane est un hydrocarbure ne comportant que C et H." },
      {
        "content": "Aucun des deux oxygènes n’appartient à un groupe hydroxyle $\\ce{-OH}$.",
        "correct": true,
        "explanation": "Dans la fonction considérée, les oxygènes appartiennent au motif carbonylé/éther de la fonction et aucun n’est un hydroxyle."
      },
      { content: String.raw`Sa formule brute est $\ce{C3H8O2}$.`, correct: true, explanation: "Le décompte donne 3 carbones, 8 hydrogènes et 2 oxygènes." }
    ],
    explanation: "La formule brute et les fonctions chimiques se déterminent séparément.",
  },
  {
    order: 107,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "La N-acétylcystéine est un médicament notamment utilisé comme mucolytique. Elle est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    choices: [
      { content: "Elle possède une fonction acide carboxylique.", correct: true, explanation: "Le motif $\\ce{-COOH}$ correspond à une fonction acide carboxylique." },
      { content: "Elle possède une amine primaire libre.", correct: false, explanation: "L'azote est engagé dans une amide et ne constitue pas une amine primaire libre." },
      {
        "content": "Elle possède une fonction nitrile.",
        "correct": false,
        "explanation": "Aucune triple liaison $\\ce{C#N}$ n’est présente dans la structure."
      },
      { content: "Elle possède une fonction thiol.", correct: true, explanation: "Le groupe $\\ce{-SH}$ correspond à une fonction thiol." },
      { content: "Elle possède une fonction amide.", correct: true, explanation: "L'azote est directement lié au carbone d'un groupe carbonyle." }
    ],
    explanation: "Le contexte médical reste secondaire : la question porte sur la lecture des motifs fonctionnels.",
    questionDiagram: { type: 'molecule', molecule: 'n-acetylcysteine-topological' },
  },
  {
    order: 108,
    difficulty: 'MEDIUM',
    format: 'QZONE',
    question: "Dans la représentation simplifiée de l'éthanoate d'éthyle, cliquez sur l'atome d'oxygène engagé par une liaison simple avec le carbone carbonylé, c'est-à-dire l'oxygène du motif ester $\\ce{-C(=O)-O-}$.",
    image: { src: '/images/training/ue14/chimie/ester-ethanoate-ethyle-qzone.svg', alt: "Schéma simplifié de l'éthanoate d'éthyle montrant le groupe carbonyle et l'oxygène du motif ester", width: 1200, height: 500 },
    expectedZones: [{ id: 'ester-single-oxygen', label: 'Oxygène en liaison simple du motif ester', x: 0.542, y: 0.52, tolerance: 0.08 }],
    explanation: "Dans un ester $\\ce{R-C(=O)-O-R'}$, le carbone carbonylé est lié à deux oxygènes : l'un par une double liaison et l'autre par une liaison simple.",
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du 2,2-diméthylbutane, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone en position 2 est directement lié à quatre atomes de carbone.",
        "correct": true,
        "explanation": "C’est précisément ce qui définit ici son caractère quaternaire."
      },
      {
        "content": "La molécule possède quatre carbones primaires.",
        "correct": true,
        "explanation": "Les quatre groupes $\\ce{CH3}$ sont chacun liés à un seul autre carbone."
      },
      {
        "content": "La molécule possède un carbone secondaire.",
        "correct": true,
        "explanation": "Le groupe $\\ce{CH2}$ est directement lié à deux carbones."
      },
      {
        "content": "La molécule possède un carbone tertiaire.",
        "correct": false,
        "explanation": "Aucun carbone n’est directement lié à trois autres carbones."
      },
      {
        "content": "La molécule ne possède aucun carbone quaternaire.",
        "correct": false,
        "explanation": "Le carbone en position 2 est directement lié à quatre carbones : il est quaternaire."
      }
    ],
    "explanation": "Le 2,2-diméthylbutane comporte quatre carbones primaires, un carbone secondaire et un carbone quaternaire."
  },
  {
    order: 110,
    difficulty: 'MEDIUM',
    format: 'QRPL',
    requiredSelectionCount: 5,
    question: "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    choices: [
      { content: String.raw`$\ce{R-CHO}$ → aldéhyde.`, correct: true, explanation: "Le carbone carbonylé terminal portant un hydrogène caractérise un aldéhyde." },
      { content: String.raw`$\ce{R-CO-R'}$ → cétone.`, correct: true, explanation: "Le carbone carbonylé lié à deux groupes carbonés caractérise une cétone." },
      { content: String.raw`$\ce{R-O-R'}$ → éther.`, correct: true, explanation: "Un oxygène lié à deux groupes carbonés caractérise un éther." },
      { content: String.raw`$\ce{R-C#N}$ → nitrile.`, correct: true, explanation: "La triple liaison carbone-azote caractérise un nitrile." },
      { content: String.raw`$\ce{R4N+}$ → ammonium quaternaire.`, correct: true, explanation: "L'azote est lié à quatre substituants et porte une charge positive." },
      { content: String.raw`$\ce{R-CONH2}$ → amine primaire.`, correct: false, explanation: "L'azote est directement lié à un carbone carbonylé : il appartient à une amide." },
      { content: String.raw`$\ce{R-COO-R'}$ → cétone.`, correct: false, explanation: "Le motif $\\ce{R-C(=O)-O-R'}$ correspond à un ester." },
      { content: String.raw`$\ce{R-O-O-R'}$ → carbonate.`, correct: false, explanation: "Une liaison $\\ce{O-O}$ caractérise un peroxyde." },
      { content: String.raw`$\ce{R-SH}$ → alcool.`, correct: false, explanation: "Le motif $\\ce{R-SH}$ correspond à un thiol." },
      { content: String.raw`$\ce{R-COOH}$ → ester.`, correct: false, explanation: "Le motif $\\ce{R-COOH}$ correspond à un acide carboxylique." },
    ],
    explanation: "Cette fin de PRACTICE vise une reconnaissance rapide des motifs de fonctions chimiques.",
  },
  {
    order: 111,
    difficulty: 'HARD',
    format: 'QRM',
    question: String.raw`Une microanalyse, avec une incertitude de ±1 point de pourcentage, donne : C = 62 %, H = 7 %, O = 16,5 % et N = 14,5 %. Quelles propositions sont exactes ?
Données : $M_{\mathrm C}=${texQuantity(12, U.G_PER_MOL)}$, $M_{\mathrm H}=${texQuantity(1, U.G_PER_MOL)}$, $M_{\mathrm O}=${texQuantity(16, U.G_PER_MOL)}$ et $M_{\mathrm N}=${texQuantity(14, U.G_PER_MOL)}$.`,
    choices: [
      { content: String.raw`La formule $\ce{C20H28N4O4}$ est également compatible avec ces résultats.`, correct: true, explanation: "Cette formule est le double exact de $\\ce{C10H14N2O2}$ : elle a donc les mêmes pourcentages massiques." },
      { content: String.raw`La formule $\ce{C8H12N2O4}$ est compatible avec ces résultats.`, correct: false, explanation: "Cette formule contient proportionnellement beaucoup plus d'oxygène et beaucoup moins de carbone." },
      { content: "Sans donnée de masse molaire, la microanalyse ne permet pas de départager les deux premières formules.", correct: true, explanation: "Deux formules multiples l'une de l'autre ont la même composition massique relative." },
      {
        "content": "La microanalyse permet à elle seule de choisir entre deux formules qui sont des multiples exacts l’une de l’autre.",
        "correct": false,
        "explanation": "Une donnée supplémentaire, notamment la masse molaire, peut être nécessaire pour passer d’une formule empirique à la formule brute."
      },
      { content: String.raw`La formule $\ce{C10H14N2O2}$ est compatible avec ces résultats.`, correct: true, explanation: "Sa masse molaire vaut 194 g·mol⁻¹ et ses pourcentages sont environ C 61,9 %, H 7,2 %, N 14,4 % et O 16,5 %." }
    ],
    explanation: "Le piège est volontaire : une composition élémentaire peut être compatible avec plusieurs formules moléculaires multiples. Il faut distinguer compatibilité et détermination univoque de la formule brute.",
  },
  {
    order: 112,
    difficulty: 'HARD',
    format: 'QROC',
    question: String.raw`La formule empirique d'un composé est $\ce{C3H7NO}$ et sa masse molaire vaut $${texQuantity(146, U.G_PER_MOL)}$. Quel est le facteur multiplicatif permettant d'obtenir la formule brute ? Donnez uniquement la valeur numérique.
Données : $M_{\mathrm C}=${texQuantity(12, U.G_PER_MOL)}$, $M_{\mathrm H}=${texQuantity(1, U.G_PER_MOL)}$, $M_{\mathrm N}=${texQuantity(14, U.G_PER_MOL)}$ et $M_{\mathrm O}=${texQuantity(16, U.G_PER_MOL)}$.`,
    answer: { type: 'number', value: 2, tolerance: 0 },
    explanation: "La masse molaire de l'unité empirique vaut 73 g·mol⁻¹. Le rapport 146/73 vaut 2.",
  },
  {
    order: 113,
    difficulty: 'HARD',
    format: 'QRM',
    question: "L'acétylcholine est un neurotransmetteur impliqué dans la transmission neuromusculaire. Elle est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    choices: [
      { content: "Elle comporte une fonction nitrile parce qu'elle contient un atome d'azote.", correct: false, explanation: "Un nitrile nécessite une liaison $\\ce{C#N}$, absente ici." },
      {
        "content": "Elle comporte une fonction amide.",
        "correct": false,
        "explanation": "La structure ne présente pas d’azote directement lié à un carbone carbonylé."
      },
      { content: "Elle comporte une fonction ester.", correct: true, explanation: "La structure contient le motif $\\ce{C(=O)-O-C}$ caractéristique d'un ester." },
      { content: "Elle comporte un ammonium quaternaire.", correct: true, explanation: "L'azote est lié à quatre substituants et porte une charge positive." },
      { content: "Son azote appartient à une amine tertiaire neutre.", correct: false, explanation: "Une amine tertiaire neutre a trois substituants carbonés ; ici l'azote en a quatre et est chargé positivement." }
    ],
    explanation: "La question demande une lecture structurale : ester et ammonium quaternaire. Le contexte biologique n'ajoute aucun prérequis.",
    questionDiagram: { type: 'molecule', molecule: 'acetylcholine-topological' },
  },
  {
    "order": 114,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel nom de fonction correspond au motif $\\ce{RO-C(=O)-NR'R''}$ ?",
    "choices": [
      {
        "content": "Éther simple.",
        "correct": false,
        "explanation": "Un éther simple présente le motif $\\ce{R-O-R'}$ sans carbonyle ni azote."
      },
      {
        "content": "Thiol.",
        "correct": false,
        "explanation": "Un thiol comporte le motif $\\ce{R-SH}$."
      },
      {
        "content": "Nitrile.",
        "correct": false,
        "explanation": "Un nitrile comporte le motif $\\ce{C#N}$."
      },
      {
        "content": "Carbamate.",
        "correct": true,
        "explanation": "Le motif associe un groupe oxygéné et un azote autour d’un carbone carbonylé."
      },
      {
        "content": "Ammonium quaternaire.",
        "correct": false,
        "explanation": "Un ammonium quaternaire comporte un azote tétravalent chargé positivement."
      }
    ],
    "explanation": "Le motif $\\ce{RO-C(=O)-NR'R''}$ correspond à une fonction carbamate, également appelée uréthane."
  },
  {
    order: 115,
    difficulty: 'HARD',
    format: 'QROC',
    question: "La valine est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelle est sa formule brute ? Écrivez uniquement la formule, sans espace.",
    answer: {
      type: 'text',
      acceptedAnswers: ['C5H11NO2', 'c5h11no2'],
      normalization: { trim: true, caseSensitive: false, collapseWhitespace: true },
    },
    explanation: "Le décompte donne 5 atomes de carbone, 11 d'hydrogène, 1 d'azote et 2 d'oxygène : $\\ce{C5H11NO2}$.",
    questionDiagram: { type: 'molecule', molecule: 'valine-topological' },
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "L’isooctane est le 2,2,4-triméthylpentane. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle possède cinq carbones primaires.",
        "correct": true,
        "explanation": "Cinq carbones sont chacun directement liés à un seul autre carbone."
      },
      {
        "content": "Elle possède deux carbones tertiaires.",
        "correct": false,
        "explanation": "Un seul carbone est directement lié à trois autres carbones."
      },
      {
        "content": "Elle ne possède aucun carbone quaternaire.",
        "correct": false,
        "explanation": "Le carbone 2 est directement lié à quatre carbones : il est quaternaire."
      },
      {
        "content": "Elle possède un carbone secondaire.",
        "correct": true,
        "explanation": "Un carbone de la chaîne est directement lié à deux carbones."
      },
      {
        "content": "La molécule contient huit atomes de carbone.",
        "correct": true,
        "explanation": "La chaîne pentane apporte cinq carbones et les trois substituants méthyle en apportent trois."
      }
    ],
    "explanation": "Le degré des carbones se détermine en comptant leurs voisins carbonés : l’isooctane comporte des carbones primaires, un secondaire, un tertiaire et un quaternaire."
  },
  {
    order: 117,
    difficulty: 'HARD',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux molécules qui possèdent un groupe carbonyle sans être ni un aldéhyde ni une cétone.",
    choices: [
      { content: String.raw`$\ce{CH3CHO}$.`, correct: false, explanation: "Cette molécule est un aldéhyde." },
      { content: String.raw`$\ce{CH3COCH3}$.`, correct: false, explanation: "Cette molécule est une cétone." },
      {
        "content": "$\\ce{CH3CH2OH}$.",
        "correct": false,
        "explanation": "L’éthanol est un alcool et ne contient pas de groupe carbonyle $\\ce{C=O}$."
      },
      { content: String.raw`$\ce{CH3COOH}$.`, correct: true, explanation: "Le groupe carbonyle appartient ici à un acide carboxylique." },
      { content: String.raw`$\ce{CH3COOCH3}$.`, correct: true, explanation: "Le groupe carbonyle appartient ici à un ester." }
    ],
    explanation: "La présence de $\\ce{C=O}$ ne suffit pas à conclure : l'environnement du carbone carbonylé définit la fonction.",
  },
  {
    order: 118,
    difficulty: 'HARD',
    format: 'QRPL',
    requiredSelectionCount: 5,
    question: "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    choices: [
      { content: "Aspirine → acide carboxylique + ester.", correct: true, explanation: "L'aspirine comporte ces deux fonctions." },
      { content: "Cystéine → amine + thiol + acide carboxylique.", correct: true, explanation: "La représentation neutre de la cystéine montre ces trois fonctions." },
      { content: "N-acétylcystéine → amide + thiol + acide carboxylique.", correct: true, explanation: "L'azote appartient à une amide tandis que le thiol et le carboxyle sont conservés." },
      { content: "Acétylcholine → ester + ammonium quaternaire.", correct: true, explanation: "La structure présente un ester et un azote quaternaire chargé positivement." },
      { content: "Valine → amine + acide carboxylique.", correct: true, explanation: "La valine est représentée ici avec un groupe amine et un groupe carboxyle." },
      { content: "Aspirine → amide + ester.", correct: false, explanation: "L'aspirine ne contient aucun atome d'azote et ne comporte donc pas d'amide." },
      { content: "Cystéine → nitrile + thiol.", correct: false, explanation: "La cystéine ne comporte aucune liaison $\\ce{C#N}$." },
      { content: "N-acétylcystéine → amine primaire libre.", correct: false, explanation: "Son azote est engagé dans une amide." },
      { content: "Acétylcholine → amine tertiaire neutre.", correct: false, explanation: "Son azote est quaternaire et chargé positivement." },
      { content: "Valine → ester + nitrile.", correct: false, explanation: "La valine ne comporte ni ester ni nitrile." },
    ],
    explanation: "Ce classement long entraîne à identifier plusieurs fonctions sur des molécules déjà rencontrées sans exiger de connaissances médicales supplémentaires.",
  },
  {
    order: 119,
    difficulty: 'HARD',
    format: 'QROC',
    question: String.raw`On considère l'éthanoate d'éthyle $\ce{CH3-COO-CH2-CH3}$. Quelle est sa formule brute ? Écrivez uniquement la formule, sans espace.`,
    answer: {
      type: 'text',
      acceptedAnswers: ['C4H8O2', 'c4h8o2'],
      normalization: { trim: true, caseSensitive: false, collapseWhitespace: true },
    },
    explanation: "Le décompte donne 4 carbones, 8 hydrogènes et 2 oxygènes : $\\ce{C4H8O2}$.",
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On considère $\\ce{CH3-CH(OH)-C(=O)-CH3}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone portant $\\ce{-OH}$ est secondaire.",
        "correct": true,
        "explanation": "Il est directement lié au carbone du groupe $\\ce{CH3}$ et au carbone carbonylé : il possède deux voisins carbonés."
      },
      {
        "content": "La fonction alcool est secondaire.",
        "correct": true,
        "explanation": "Le carbone portant le groupe hydroxyle est lié à deux autres carbones."
      },
      {
        "content": "Le carbone du groupe carbonyle est secondaire.",
        "correct": true,
        "explanation": "Le carbone carbonylé est directement lié à deux carbones."
      },
      {
        "content": "Les deux carbones des groupes $\\ce{CH3}$ sont secondaires.",
        "correct": false,
        "explanation": "Chacun des deux groupes $\\ce{CH3}$ n’est directement lié qu’à un seul carbone : ces carbones sont primaires."
      },
      {
        "content": "L’oxygène du groupe $\\ce{C=O}$ compte comme deux voisins carbonés du carbone carbonylé.",
        "correct": false,
        "explanation": "Le degré d’un carbone dépend uniquement du nombre d’atomes de carbone directement liés, pas de l’ordre de liaison avec un hétéroatome."
      }
    ],
    "explanation": "Le carbone portant le groupe hydroxyle et le carbone carbonylé sont tous deux secondaires ; la classe de l’alcool se détermine à partir de l’environnement carboné du carbone fonctionnel."
  },
  {
    order: 121,
    difficulty: 'HARD',
    format: 'QRM',
    question: String.raw`Deux molécules peuvent avoir la même formule brute $\ce{C2H6O}$ : l'éthanol $\ce{CH3CH2OH}$ et le méthoxyméthane $\ce{CH3OCH3}$. Quelles propositions sont exactes ?`,
    choices: [
      { content: "L'éthanol possède une fonction alcool alors que le méthoxyméthane possède une fonction éther.", correct: true, explanation: "Le premier contient $\\ce{-OH}$ ; le second un motif $\\ce{R-O-R'}$." },
      { content: "Une microanalyse limitée à C, H et O permet à elle seule de distinguer ces deux molécules.", correct: false, explanation: "Leur composition élémentaire est identique puisqu'elles ont la même formule brute." },
      { content: "La formule brute suffit toujours à déterminer la fonction chimique présente.", correct: false, explanation: "Cet exemple montre qu'une même formule brute peut correspondre à des fonctions différentes." },
      {
        "content": "Les deux molécules ont la même masse molaire.",
        "correct": true,
        "explanation": "Elles ont la même formule brute et donc la même masse molaire."
      },
      { content: "Les deux molécules ont la même formule brute.", correct: true, explanation: "Elles contiennent toutes les deux 2 C, 6 H et 1 O." }
    ],
    explanation: "La formule brute renseigne sur la composition, mais pas nécessairement sur l'enchaînement des atomes ni sur la fonction chimique.",
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "question": "Parmi les propositions suivantes, sélectionnez exactement les cinq affirmations exactes.",
    "requiredSelectionCount": 5,
    "choices": [
      {
        "content": "Une microanalyse peut fournir les pourcentages massiques des éléments présents.",
        "correct": true,
        "explanation": "La composition massique élémentaire fait partie des informations accessibles par microanalyse."
      },
      {
        "content": "Deux molécules de même formule brute peuvent appartenir à des fonctions chimiques différentes.",
        "correct": true,
        "explanation": "La formule brute ne fixe pas à elle seule l’enchaînement des atomes."
      },
      {
        "content": "Un carbone directement lié à quatre autres carbones est quaternaire.",
        "correct": true,
        "explanation": "Le degré dépend du nombre de voisins carbonés."
      },
      {
        "content": "Le motif $\\ce{R-C(=O)-O-R'}$ correspond à un ester.",
        "correct": true,
        "explanation": "Le carbonyle et l’oxygène simple font partie du même motif ester."
      },
      {
        "content": "Le motif $\\ce{R-C#N}$ correspond à un nitrile.",
        "correct": true,
        "explanation": "La triple liaison carbone-azote caractérise la fonction nitrile."
      },
      {
        "content": "Une formule brute permet toujours de déduire une structure unique.",
        "correct": false,
        "explanation": "Plusieurs structures peuvent partager la même formule brute."
      },
      {
        "content": "Un carbone primaire est nécessairement directement lié à trois autres carbones.",
        "correct": false,
        "explanation": "Un carbone primaire est directement lié à un seul autre carbone."
      },
      {
        "content": "Un ammonium quaternaire est une amine tertiaire neutre.",
        "correct": false,
        "explanation": "Un ammonium quaternaire possède un azote tétravalent chargé positivement."
      },
      {
        "content": "Le motif $\\ce{R-O-R'}$ correspond à une amide.",
        "correct": false,
        "explanation": "Le motif $\\ce{R-O-R'}$ correspond à un éther."
      },
      {
        "content": "Le préfixe pent- correspond à quatre carbones.",
        "correct": false,
        "explanation": "Pent- correspond à cinq carbones ; quatre carbones utilisent but-."
      }
    ],
    "explanation": "Cette synthèse associe composition, reconnaissance des fonctions et nomenclature des chaînes carbonées."
  },
];
