import { TEX_UNITS, texQuantity } from './tex-units';
import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

const U = TEX_UNITS;

/**
 * UE14 – Chimie organique – Chapitre 2.1 – Section Synthèse
 */

export const UE14_CH5_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "EASY",
    "format": "QROC",
    "question": String.raw`Quelle est la masse molaire d'une molécule de formule brute $\ce{C3H8O}$ ? Donnez uniquement la valeur numérique, exprimée en $${U.G_PER_MOL}$.
Données : $M_{\mathrm C}=${texQuantity(12, U.G_PER_MOL)}$, $M_{\mathrm H}=${texQuantity(1, U.G_PER_MOL)}$ et $M_{\mathrm O}=${texQuantity(16, U.G_PER_MOL)}$.`,
    "answer": {
      "type": "number",
      "value": 60,
      "tolerance": 0,
      "unit": "g/mol",
      "displayUnit": U.G_PER_MOL
    },
    "explanation": String.raw`La formule $\ce{C3H8O}$ contient 3 atomes de carbone, 8 atomes d'hydrogène et 1 atome d'oxygène. La masse molaire vaut donc $3\times12+8\times1+1\times16=36+8+16=60$, soit $${texQuantity(60, U.G_PER_MOL)}$.`
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": String.raw`Une espèce a pour formule empirique $\ce{CH2O}$ et une masse molaire de $${texQuantity(90, U.G_PER_MOL)}$. Quelles propositions sont exactes ?
Données : $M_{\mathrm C}=${texQuantity(12, U.G_PER_MOL)}$, $M_{\mathrm H}=${texQuantity(1, U.G_PER_MOL)}$ et $M_{\mathrm O}=${texQuantity(16, U.G_PER_MOL)}$.`,
    "choices": [
      {
        "content": String.raw`La masse molaire de l'unité empirique vaut $${texQuantity(30, U.G_PER_MOL)}$.`,
        "correct": true,
        "explanation": String.raw`Une unité empirique $\ce{CH2O}$ contient 1 C, 2 H et 1 O. Sa masse molaire vaut donc $12+2\times1+16=30$, soit $${texQuantity(30, U.G_PER_MOL)}$.`
      },
      {
        "content": "Le facteur multiplicatif entre formule empirique et formule brute vaut 2.",
        "correct": false,
        "explanation": String.raw`Le facteur se calcule par le rapport entre la masse molaire réelle et celle de l'unité empirique : $90/30=3$. Il vaut donc 3 et non 2.`
      },
      {
        "content": String.raw`La formule brute est $\ce{C3H6O3}$.`,
        "correct": true,
        "explanation": String.raw`Le facteur multiplicatif vaut 3. Tous les indices de $\ce{CH2O}$ sont donc multipliés par 3, ce qui donne $\ce{C3H6O3}$.`
      },
      {
        "content": String.raw`La formule brute est nécessairement identique à la formule empirique $\ce{CH2O}$.`,
        "correct": false,
        "explanation": String.raw`La formule empirique donne seulement le plus petit rapport entier entre les nombres d'atomes. Ici, sa masse molaire est trois fois plus faible que celle du composé réel : la formule brute est donc un multiple de $\ce{CH2O}$.`
      }
    ],
    "explanation": String.raw`On calcule d'abord la masse molaire de l'unité empirique $\ce{CH2O}$ : $12+2\times1+16=30$, soit $${texQuantity(30, U.G_PER_MOL)}$. Le rapport $90/30=3$ donne le facteur multiplicatif. La formule brute est donc obtenue en multipliant tous les indices par 3 : $\ce{C3H6O3}$.`
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L'aspirine est un médicament notamment utilisé comme antalgique. Elle est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle possède une fonction acide carboxylique.",
        "correct": true,
        "explanation": "La structure comporte un groupe $\\ce{-COOH}$, caractéristique d'une fonction acide carboxylique."
      },
      {
        "content": "Elle possède une fonction ester.",
        "correct": true,
        "explanation": "Le motif $\\ce{C(=O)-O-C}$ présent dans la molécule correspond à une fonction ester."
      },
      {
        "content": "Le groupe $\\ce{-OH}$ du carboxyle constitue une fonction alcool indépendante.",
        "correct": false,
        "explanation": "Le groupe $\\ce{-OH}$ appartient ici au motif carboxyle $\\ce{-COOH}$ ; il ne constitue pas une fonction alcool indépendante."
      },
      {
        "content": "Elle possède une fonction amide.",
        "correct": false,
        "explanation": "Une amide nécessite notamment un azote directement lié à un carbone carbonylé. La structure de l'aspirine ne comporte aucun atome d'azote."
      }
    ],
    "explanation": "L'aspirine associe une fonction acide carboxylique et une fonction ester. La reconnaissance d'une fonction doit porter sur le motif complet et non sur la seule présence d'un groupe $\\ce{-OH}$ ou d'un carbonyle.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "aspirin-topological"
    }
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La cystéine est un acide aminé soufré présent dans les protéines. Elle est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle possède une fonction thiol.",
        "correct": true,
        "explanation": "Le groupe $\\ce{-SH}$ porté par la chaîne latérale correspond à une fonction thiol."
      },
      {
        "content": "Elle possède une fonction amine.",
        "correct": true,
        "explanation": "Le groupe $\\ce{-NH2}$ porté par le carbone alpha correspond, dans cette représentation neutre, à une fonction amine."
      },
      {
        "content": "Elle possède une fonction acide carboxylique.",
        "correct": true,
        "explanation": "Le motif $\\ce{-COOH}$ correspond à une fonction acide carboxylique."
      },
      {
        "content": "Elle possède un nitrile parce que la molécule contient un atome d'azote.",
        "correct": false,
        "explanation": "La seule présence d'azote ne définit pas un nitrile. Un nitrile nécessite une triple liaison $\\ce{C#N}$, absente ici."
      }
    ],
    "explanation": "La cystéine est polyfonctionnelle : elle comporte un thiol, une amine et un acide carboxylique. Il faut identifier l'environnement de chaque hétéroatome plutôt que conclure à partir de sa seule présence.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "cysteine-topological"
    }
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "L'acide lactique est un composé rencontré dans le métabolisme énergétique et peut s'écrire $\\ce{CH3-CH(OH)-COOH}$. Sélectionnez exactement les deux propositions incorrectes.",
    "choices": [
      {
        "content": "Le carbone portant le groupe $\\ce{OH}$ est tertiaire parce qu'il porte un seul hydrogène.",
        "correct": true,
        "explanation": "Incorrect : le degré d'un carbone se détermine par le nombre de voisins carbonés. Ce carbone est directement lié à deux autres carbones ; il est donc secondaire."
      },
      {
        "content": "Le carbone du groupe carboxyle est quaternaire parce qu'il ne porte aucun hydrogène.",
        "correct": true,
        "explanation": "Incorrect : le carbone du carboxyle n'est directement lié qu'à un seul autre carbone. L'absence d'hydrogène ne suffit pas à définir un carbone quaternaire."
      },
      {
        "content": "La fonction alcool portée par le carbone central est secondaire.",
        "correct": false,
        "explanation": "Correct : le carbone portant $\\ce{OH}$ est directement lié à deux autres carbones, ce qui caractérise un alcool secondaire."
      },
      {
        "content": "Le groupe $\\ce{-OH}$ appartenant au carboxyle n'est pas une seconde fonction alcool.",
        "correct": false,
        "explanation": "Correct : ce groupe $\\ce{-OH}$ fait partie du motif $\\ce{-COOH}$ et appartient donc à la fonction acide carboxylique."
      }
    ],
    "explanation": "Les deux propositions à sélectionner sont les propositions incorrectes. Cette question oblige à distinguer le degré d'un carbone, déterminé par ses voisins carbonés, de la simple quantité d'hydrogènes qu'il porte, et à reconnaître le groupe carboxyle comme un motif fonctionnel complet."
  },
  {
    "order": 106,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel préfixe de nomenclature correspond à une chaîne de huit carbones ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "oct",
        "oct-"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Une chaîne de huit carbones utilise le préfixe oct-, comme dans le nom octane."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La N-acétylcystéine est un médicament notamment utilisé comme mucolytique. Elle est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle possède une fonction thiol.",
        "correct": true,
        "explanation": "Le groupe $\\ce{-SH}$ est conservé dans la structure et correspond à une fonction thiol."
      },
      {
        "content": "Elle possède une fonction amide.",
        "correct": true,
        "explanation": "L'azote est directement lié au carbone d'un groupe carbonyle : cet environnement caractérise une fonction amide."
      },
      {
        "content": "Elle possède une fonction acide carboxylique.",
        "correct": true,
        "explanation": "Le motif $\\ce{-COOH}$ présent dans la structure correspond à une fonction acide carboxylique."
      },
      {
        "content": "Elle possède une amine primaire libre.",
        "correct": false,
        "explanation": "L'azote n'appartient pas à une amine libre : il est engagé dans une fonction amide en raison de sa liaison directe au carbone carbonylé."
      }
    ],
    "explanation": "La N-acétylcystéine comporte un thiol, une amide et un acide carboxylique. La présence d'un azote ne suffit donc pas à conclure à une fonction amine.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "n-acetylcysteine-topological"
    }
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Dans la représentation simplifiée de l'éthanoate d'éthyle, cliquez sur l'atome d'oxygène engagé par une liaison simple avec le carbone carbonylé, c'est-à-dire l'oxygène du motif ester $\\ce{-C(=O)-O-}$.",
    "image": {
      "src": "/images/training/ue14/chimie/ester-ethanoate-ethyle-qzone.svg",
      "alt": "Schéma simplifié de l'éthanoate d'éthyle montrant le groupe carbonyle et l'oxygène du motif ester",
      "width": 1200,
      "height": 500
    },
    "expectedZones": [
      {
        "id": "ester-single-oxygen",
        "label": "Oxygène en liaison simple du motif ester",
        "x": 0.542,
        "y": 0.52,
        "tolerance": 0.08
      }
    ],
    "explanation": "Dans un ester $\\ce{R-C(=O)-O-R'}$, le carbone carbonylé est lié à deux oxygènes : l'un par une double liaison et l'autre par une liaison simple. C'est ce second oxygène qu'il fallait sélectionner."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "À propos du propan-1-ol $\\ce{CH3-CH2-CH2-OH}$, sélectionnez exactement les deux propositions correctes.",
    "choices": [
      {
        "content": "Le carbone portant le groupe $\\ce{OH}$ est primaire.",
        "correct": true,
        "explanation": "Ce carbone n'est directement lié qu'à un seul autre carbone : il est donc primaire."
      },
      {
        "content": "La fonction alcool est primaire.",
        "correct": true,
        "explanation": "Un alcool est primaire lorsque le carbone portant le groupe $\\ce{OH}$ est lié à un seul autre carbone."
      },
      {
        "content": "Le carbone portant $\\ce{OH}$ est secondaire uniquement parce qu'il s'agit d'un groupe $\\ce{CH2}$.",
        "correct": false,
        "explanation": "Le degré d'un carbone se détermine par le nombre de voisins carbonés et non par le nombre d'hydrogènes. Ici, le groupe $\\ce{CH2}$ terminal n'a qu'un voisin carboné."
      },
      {
        "content": "Le groupe $\\ce{OH}$ appartient à une fonction acide carboxylique.",
        "correct": false,
        "explanation": "Le groupe $\\ce{OH}$ est directement porté par un carbone saturé et constitue ici une fonction alcool ; aucun groupe carboxyle $\\ce{-COOH}$ n'est présent."
      }
    ],
    "explanation": "Dans le propan-1-ol, le carbone portant $\\ce{OH}$ est primaire et la fonction alcool est elle aussi primaire. Dans ce cas, les deux classifications conduisent au même qualificatif, mais elles reposent sur l'environnement carboné du carbone concerné."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "$\\ce{R-CHO}$ définit un aldéhyde.",
        "correct": true,
        "explanation": "Dans un aldéhyde, le carbone du groupe carbonyle est terminal et porte un hydrogène ; le motif général peut s'écrire $\\ce{R-CHO}$."
      },
      {
        "content": "$\\ce{R-CO-R'}$ définit une cétone lorsque R et R' sont des groupes carbonés.",
        "correct": true,
        "explanation": "Dans une cétone, le carbone carbonylé est lié à deux groupes carbonés : le carbonyle est donc situé à l'intérieur du squelette carboné."
      },
      {
        "content": "$\\ce{R-SH}$ définit un thiol.",
        "correct": true,
        "explanation": "Le groupe sulfhydryle $\\ce{-SH}$ lié à un groupe carboné caractérise une fonction thiol."
      },
      {
        "content": "$\\ce{R-C#N}$ définit un nitrile.",
        "correct": true,
        "explanation": "Une triple liaison carbone-azote du type $\\ce{R-C#N}$ caractérise une fonction nitrile."
      },
      {
        "content": "$\\ce{R4N+}$ définit un ammonium quaternaire.",
        "correct": true,
        "explanation": "Un azote lié à quatre substituants organiques et portant une charge positive correspond à un ammonium quaternaire."
      },
      {
        "content": "$\\ce{R-O-R'}$ définit un ester.",
        "correct": false,
        "explanation": "Le motif $\\ce{R-O-R'}$ correspond à un éther. Un ester comporte en plus un groupe carbonyle : $\\ce{R-C(=O)-O-R'}$."
      },
      {
        "content": "$\\ce{R-COOH}$ définit une amine.",
        "correct": false,
        "explanation": "Le motif $\\ce{R-COOH}$ est celui d'un acide carboxylique et ne contient aucun azote."
      },
      {
        "content": "$\\ce{R-CONH2}$ définit une amine primaire libre.",
        "correct": false,
        "explanation": "L'azote est directement lié au carbone d'un carbonyle : il appartient donc à une fonction amide, et non à une amine primaire libre."
      },
      {
        "content": "$\\ce{R-O-O-R'}$ définit un carbonate.",
        "correct": false,
        "explanation": "La liaison directe $\\ce{O-O}$ caractérise un peroxyde. Un carbonate organique comporte un carbone carbonylé entouré de groupes oxygénés."
      },
      {
        "content": "$\\ce{R-COO-R'}$ définit une cétone.",
        "correct": false,
        "explanation": "Le motif $\\ce{R-C(=O)-O-R'}$ est celui d'un ester. Une cétone possède un carbonyle lié à deux groupes carbonés."
      }
    ],
    "explanation": "La reconnaissance fonctionnelle exige de lire le motif complet et son environnement : un même hétéroatome ou un même groupe carbonyle peut appartenir à des familles différentes."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": String.raw`Une microanalyse d'un composé contenant seulement C, H et O donne 54,5 % de C, 9,1 % de H et 36,4 % de O. Quelles propositions sont exactes ?
Données : $M_{\mathrm C}=${texQuantity(12, U.G_PER_MOL)}$, $M_{\mathrm H}=${texQuantity(1, U.G_PER_MOL)}$ et $M_{\mathrm O}=${texQuantity(16, U.G_PER_MOL)}$.`,
    "choices": [
      {
        "content": "Pour 100 g de composé, la quantité relative de carbone vaut environ 4,54 mol.",
        "correct": true,
        "explanation": "Sur une base de 100 g, la masse de carbone vaut 54,5 g. On obtient donc $n_{\\mathrm C}=54{,}5/12\\approx4{,}54$ mol."
      },
      {
        "content": "Pour 100 g de composé, la quantité relative d'hydrogène vaut environ 9,1 mol.",
        "correct": true,
        "explanation": "Sur une base de 100 g, la masse d'hydrogène vaut 9,1 g. Avec $M_{\\mathrm H}=1$, on obtient $n_{\\mathrm H}=9{,}1/1=9{,}1$ mol."
      },
      {
        "content": "Pour 100 g de composé, la quantité relative d'oxygène vaut environ 2,28 mol.",
        "correct": true,
        "explanation": "La masse d'oxygène vaut 36,4 g. On obtient $n_{\\mathrm O}=36{,}4/16\\approx2{,}28$ mol."
      },
      {
        "content": "La formule brute est nécessairement $\\ce{C2H4O}$.",
        "correct": false,
        "explanation": "En divisant les quantités relatives par la plus petite, on obtient bien un rapport voisin de $2:4:1$, donc une formule empirique $\\ce{C2H4O}$. Sans masse molaire du composé, on ne peut cependant pas affirmer que la formule brute est identique à cette formule empirique."
      }
    ],
    "explanation": "On raisonne sur 100 g de composé, puis on convertit chaque masse en quantité de matière. Les valeurs obtenues sont environ 4,54 mol de C, 9,1 mol de H et 2,28 mol de O. En divisant par 2,28, on obtient le rapport $2:4:1$, soit la formule empirique $\\ce{C2H4O}$. Une masse molaire supplémentaire serait nécessaire pour déterminer si la formule brute est identique ou multiple de cette formule."
  },
  {
    "order": 112,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": String.raw`La formule empirique d'un composé est $\ce{C2H4O}$ et sa masse molaire vaut $${texQuantity(132, U.G_PER_MOL)}$. Quelle valeur prend le facteur multiplicatif entre formule empirique et formule brute ? Donnez uniquement la valeur numérique.
Données : $M_{\mathrm C}=${texQuantity(12, U.G_PER_MOL)}$, $M_{\mathrm H}=${texQuantity(1, U.G_PER_MOL)}$ et $M_{\mathrm O}=${texQuantity(16, U.G_PER_MOL)}$.`,
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": String.raw`La masse molaire de l'unité empirique $\ce{C2H4O}$ vaut $2\times12+4\times1+16=44$, soit $${texQuantity(44, U.G_PER_MOL)}$. Le facteur multiplicatif vaut donc $132/44=3$.`
  },
  {
    "order": 113,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L'acétylcholine est un neurotransmetteur impliqué notamment dans la transmission neuromusculaire. Elle est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle comporte un ammonium quaternaire.",
        "correct": true,
        "explanation": "L'azote est lié à quatre substituants carbonés et porte une charge positive : il appartient à un ammonium quaternaire."
      },
      {
        "content": "Elle comporte une fonction ester.",
        "correct": true,
        "explanation": "La structure contient le motif $\\ce{C(=O)-O-C}$ caractéristique d'un ester."
      },
      {
        "content": "Son azote est une amine tertiaire neutre.",
        "correct": false,
        "explanation": "Une amine tertiaire neutre possède trois substituants carbonés autour de l'azote. Ici, l'azote en possède quatre et porte une charge positive."
      },
      {
        "content": "Elle comporte un nitrile parce qu'elle contient un atome d'azote.",
        "correct": false,
        "explanation": "Un nitrile nécessite une triple liaison $\\ce{C#N}$, absente dans l'acétylcholine."
      }
    ],
    "explanation": "L'acétylcholine combine une fonction ester et un ammonium quaternaire. La nature d'une fonction azotée dépend de l'environnement de l'azote, pas de sa seule présence.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "acetylcholine-topological"
    }
  },
  {
    "order": 114,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le paracétamol est un médicament antalgique et antipyrétique. Il est représenté ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Son azote appartient à une fonction amide.",
        "correct": true,
        "explanation": "L'azote est directement lié au carbone d'un groupe carbonyle : cet environnement caractérise une amide."
      },
      {
        "content": "Le groupe $\\ce{OH}$ porté directement par le cycle aromatique correspond à un phénol.",
        "correct": true,
        "explanation": "Un groupe hydroxyle directement lié à un carbone aromatique appartient à une fonction phénol, et non à un alcool aliphatique."
      },
      {
        "content": "La molécule possède une fonction ester.",
        "correct": false,
        "explanation": "Aucun motif $\\ce{C(=O)-O-R}$ caractéristique d'un ester n'est présent."
      },
      {
        "content": "La seule présence d'un atome d'azote suffit à classer la molécule parmi les amines.",
        "correct": false,
        "explanation": "Il faut examiner l'environnement de l'azote. Ici, il appartient à une amide et non à une amine libre."
      }
    ],
    "explanation": "Le paracétamol illustre deux pièges classiques : un azote n'est pas nécessairement une amine et un groupe $\\ce{OH}$ n'est pas nécessairement un alcool aliphatique.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "paracetamol-topological"
    }
  },
  {
    "order": 115,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La valine est un acide aminé essentiel. Elle est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle possède une fonction amine et une fonction acide carboxylique.",
        "correct": true,
        "explanation": "La structure comporte un groupe $\\ce{-NH2}$ et un groupe $\\ce{-COOH}$."
      },
      {
        "content": "La chaîne principale contenant le carboxyle comporte quatre carbones.",
        "correct": true,
        "explanation": "Le carbone du carboxyle est inclus dans la chaîne principale, qui comporte quatre carbones."
      },
      {
        "content": "La molécule contient cinq carbones au total.",
        "correct": true,
        "explanation": "Quatre carbones appartiennent à la chaîne principale et un carbone supplémentaire appartient au substituant méthyle."
      },
      {
        "content": "Le carbone du groupe carboxyle doit être exclu du comptage de la chaîne principale.",
        "correct": false,
        "explanation": "Le carbone du groupe carboxyle appartient au squelette principal d'un acide carboxylique et constitue le carbone 1."
      }
    ],
    "explanation": "La valine permet de croiser reconnaissance fonctionnelle et nomenclature : le carbone du carboxyle appartient à la chaîne principale, qui comporte quatre carbones, tandis que la molécule en possède cinq au total.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "valine-topological"
    }
  },
  {
    "order": 116,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L'isooctane est représenté ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La molécule contient huit carbones au total.",
        "correct": true,
        "explanation": "L'isooctane possède huit atomes de carbone au total."
      },
      {
        "content": "La chaîne principale retenue pour son nom systématique comporte cinq carbones.",
        "correct": true,
        "explanation": "La plus longue chaîne continue appropriée est un pentane."
      },
      {
        "content": "Son nom systématique doit utiliser octane comme parent uniquement parce que la molécule contient huit carbones.",
        "correct": false,
        "explanation": "Le nom du parent dépend de la chaîne principale continue, et non du nombre total de carbones. Le nom systématique est 2,2,4-triméthylpentane."
      },
      {
        "content": "La molécule possède une fonction alcool parce que son nom usuel se termine par « -ane ».",
        "correct": false,
        "explanation": "Le suffixe -ane désigne un alcane, donc un hydrocarbure saturé. Il ne signale pas une fonction alcool."
      }
    ],
    "explanation": "L'isooctane illustre la distinction entre le nombre total de carbones et la longueur de la chaîne principale : huit carbones sont présents au total, mais le parent systématique est un pentane.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "isooctane-topological"
    }
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux molécules qui comportent un groupe carbonyle mais ne sont ni des aldéhydes ni des cétones.",
    "choices": [
      {
        "content": "$\\ce{CH3COOH}$.",
        "correct": true,
        "explanation": "Cette molécule contient un carbonyle intégré à un groupe carboxyle $\\ce{-COOH}$ : il s'agit d'un acide carboxylique."
      },
      {
        "content": "$\\ce{CH3COOCH3}$.",
        "correct": true,
        "explanation": "Cette molécule contient un carbonyle dans le motif $\\ce{C(=O)-O-C}$ : il s'agit d'un ester."
      },
      {
        "content": "$\\ce{CH3CHO}$.",
        "correct": false,
        "explanation": "Le carbone carbonylé est terminal et porte un hydrogène : la molécule est un aldéhyde."
      },
      {
        "content": "$\\ce{CH3COCH3}$.",
        "correct": false,
        "explanation": "Le carbone carbonylé est lié à deux groupes carbonés : la molécule est une cétone."
      }
    ],
    "explanation": "La présence d'un groupe $\\ce{C=O}$ ne suffit pas à identifier la fonction. Il faut examiner les groupes directement liés au carbone carbonylé."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Acétylcholine → ester + ammonium quaternaire.",
        "correct": true,
        "explanation": "L'acétylcholine comporte un motif ester et un azote lié à quatre substituants carbonés portant une charge positive."
      },
      {
        "content": "Cystéine → amine + thiol + acide carboxylique.",
        "correct": true,
        "explanation": "La cystéine comporte respectivement les groupes $\\ce{-NH2}$, $\\ce{-SH}$ et $\\ce{-COOH}$."
      },
      {
        "content": "Paracétamol → amide + phénol.",
        "correct": true,
        "explanation": "L'azote du paracétamol appartient à une amide et son groupe hydroxyle directement porté par le cycle aromatique correspond à un phénol."
      },
      {
        "content": "Aspirine → acide carboxylique + ester.",
        "correct": true,
        "explanation": "L'aspirine comporte un groupe $\\ce{-COOH}$ et un motif ester $\\ce{C(=O)-O-C}$."
      },
      {
        "content": "N-acétylcystéine → thiol + amide + acide carboxylique.",
        "correct": true,
        "explanation": "La structure de la N-acétylcystéine comporte ces trois fonctions."
      },
      {
        "content": "Choline → nitrile + ester.",
        "correct": false,
        "explanation": "La choline comporte notamment un groupe hydroxyle et un ammonium quaternaire ; elle ne comporte ni nitrile ni ester."
      },
      {
        "content": "Cystéine → ammonium quaternaire.",
        "correct": false,
        "explanation": "Dans la représentation neutre utilisée, l'azote de la cystéine appartient à une amine et n'est pas lié à quatre substituants carbonés."
      },
      {
        "content": "Paracétamol → amine primaire libre.",
        "correct": false,
        "explanation": "L'azote est directement lié à un carbone carbonylé et appartient à une amide."
      },
      {
        "content": "Aspirine → thiol.",
        "correct": false,
        "explanation": "L'aspirine ne contient aucun atome de soufre et ne possède donc pas de groupe $\\ce{-SH}$."
      },
      {
        "content": "N-acétylcystéine → nitrile.",
        "correct": false,
        "explanation": "La structure ne contient aucune triple liaison $\\ce{C#N}$."
      }
    ],
    "explanation": "Ces molécules d'intérêt biologique ou médical permettent de réviser plusieurs fonctions à la fois. La bonne stratégie consiste à identifier chaque motif complet plutôt que de se fier au seul nom de la molécule ou à la présence d'un hétéroatome."
  },
  {
    "order": 119,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "L'aspirine a pour formule brute $\\ce{C9H8O4}$. Combien d'atomes comporte une molécule d'aspirine au total ? Donnez uniquement la valeur numérique.",
    "answer": {
      "type": "number",
      "value": 21,
      "tolerance": 0
    },
    "explanation": "La formule brute indique 9 atomes de carbone, 8 atomes d'hydrogène et 4 atomes d'oxygène. Le nombre total d'atomes vaut donc $9+8+4=21$."
  },
  {
    "order": 120,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On considère le propan-2-ol $\\ce{CH3-CH(OH)-CH3}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone portant le groupe $\\ce{OH}$ est secondaire.",
        "correct": true,
        "explanation": "Ce carbone est directement lié aux deux carbones des groupes méthyle : il possède donc deux voisins carbonés."
      },
      {
        "content": "La fonction alcool est secondaire.",
        "correct": true,
        "explanation": "Le carbone portant le groupe hydroxyle est lié à deux autres carbones, ce qui définit un alcool secondaire."
      },
      {
        "content": "Le carbone portant $\\ce{OH}$ est tertiaire parce qu'il porte un seul hydrogène.",
        "correct": false,
        "explanation": "Le degré d'un carbone dépend du nombre de voisins carbonés et non du nombre d'hydrogènes qu'il porte. Ici, ce carbone n'a que deux voisins carbonés."
      },
      {
        "content": "Les deux carbones des groupes $\\ce{CH3}$ sont secondaires parce qu'ils portent trois hydrogènes.",
        "correct": false,
        "explanation": "Chaque carbone méthylique n'est directement lié qu'au carbone central : il possède un seul voisin carboné et est donc primaire."
      }
    ],
    "explanation": "Le propan-2-ol comporte deux carbones primaires et un carbone secondaire. Le carbone secondaire porte le groupe $\\ce{OH}$ ; la fonction alcool est donc elle aussi secondaire."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions de synthèse sont exactes ?",
    "choices": [
      {
        "content": "Une formule brute ne suffit pas toujours à distinguer deux molécules isomères.",
        "correct": true,
        "explanation": "Des isomères peuvent partager la même formule brute tout en différant par l'enchaînement ou l'organisation spatiale de leurs atomes."
      },
      {
        "content": "Le choix d'une chaîne principale se réduit toujours au comptage du nombre total de carbones présents dans la molécule.",
        "correct": false,
        "explanation": "Une molécule ramifiée peut comporter davantage de carbones au total que sa chaîne principale. Le parent correspond à une chaîne continue appropriée respectant les règles de nomenclature."
      },
      {
        "content": "La présence d'un atome d'azote suffit à conclure que la molécule possède une fonction amine.",
        "correct": false,
        "explanation": "L'environnement de l'azote doit être examiné : il peut notamment appartenir à une amine, une amide, un nitrile ou un ammonium."
      },
      {
        "content": "Un groupe $\\ce{OH}$ doit être interprété dans son environnement avant de conclure à une fonction alcool.",
        "correct": true,
        "explanation": "Un groupe $\\ce{OH}$ peut appartenir à un alcool, à un phénol ou au motif d'un acide carboxylique ; son environnement structural est donc déterminant."
      }
    ],
    "explanation": "Les principales difficultés de ce chapitre viennent des raccourcis trompeurs : formule brute, présence d'un hétéroatome, groupe $\\ce{OH}$ ou nombre total de carbones ne suffisent pas toujours à conclure. Il faut lire la structure et son environnement."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La formule brute décrit la nature et le nombre des atomes constituant une molécule.",
        "correct": true,
        "explanation": "Elle renseigne sur la composition élémentaire, mais ne décrit pas nécessairement l'enchaînement des atomes ni leur géométrie."
      },
      {
        "content": "$\\ce{R-COO-R'}$ correspond à une fonction ester.",
        "correct": true,
        "explanation": "Le motif associe un groupe carbonyle à un oxygène lié par liaison simple à un groupe carboné."
      },
      {
        "content": "$\\ce{R-C#N}$ correspond à une fonction nitrile.",
        "correct": true,
        "explanation": "La triple liaison carbone-azote $\\ce{C#N}$ caractérise un nitrile."
      },
      {
        "content": "Méth-, éth- et prop- correspondent respectivement à 1, 2 et 3 carbones.",
        "correct": true,
        "explanation": "Ces préfixes ouvrent la série de nomenclature des chaînes carbonées : méth-, éth-, prop-, but-, pent-, etc."
      },
      {
        "content": "Un carbone directement lié à quatre autres carbones est quaternaire.",
        "correct": true,
        "explanation": "Le degré d'un carbone dépend du nombre de voisins carbonés ; quatre voisins carbonés définissent un carbone quaternaire."
      },
      {
        "content": "$\\ce{R-O-R'}$ correspond à une fonction amide.",
        "correct": false,
        "explanation": "Le motif $\\ce{R-O-R'}$ correspond à un éther. Une amide comporte un azote directement lié au carbone d'un groupe carbonyle."
      },
      {
        "content": "Un ammonium quaternaire est une amine tertiaire neutre.",
        "correct": false,
        "explanation": "Un ammonium quaternaire possède un azote lié à quatre substituants et portant une charge positive ; une amine tertiaire neutre n'a que trois substituants carbonés autour de l'azote."
      },
      {
        "content": "La formule brute donne toujours la géométrie tridimensionnelle de la molécule.",
        "correct": false,
        "explanation": "La formule brute indique la composition, mais pas l'enchaînement complet ni la disposition spatiale des atomes."
      },
      {
        "content": "Un alcool tertiaire possède nécessairement trois groupes $\\ce{OH}$.",
        "correct": false,
        "explanation": "Le terme tertiaire décrit le carbone portant le groupe hydroxyle : ce carbone est lié à trois autres carbones. Il ne décrit pas le nombre de groupes $\\ce{OH}$."
      },
      {
        "content": "Le préfixe déc- correspond à une chaîne de huit carbones.",
        "correct": false,
        "explanation": "Le préfixe déc- correspond à dix carbones ; huit carbones correspondent au préfixe oct-."
      }
    ],
    "explanation": "Cette synthèse finale croise composition, reconnaissance des fonctions, degré des carbones et nomenclature. Les pièges reposent surtout sur des termes proches dont les critères doivent rester bien distincts."
  }
];
