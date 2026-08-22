import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie – Chapitre 1.1 – Section A – Généralités, structure et nomenclature des oses
 */

export const UE14_BIOCH_CH1_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la présence des glucides dans le monde vivant, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils sont rencontrés dans le monde végétal.",
        "correct": true,
        "explanation": "Les végétaux produisent notamment des glucides par photosynthèse."
      },
      {
        "content": "Ils sont également rencontrés dans le monde animal.",
        "correct": true,
        "explanation": "Ils sont présents et métabolisés chez l'Homme."
      },
      {
        "content": "Les glucides constituent une part majeure de la matière sèche de nombreux végétaux.",
        "correct": true,
        "explanation": "La cellulose et les glucides de réserve contribuent fortement à la matière sèche végétale."
      },
      {
        "content": "Ils sont absents des animaux.",
        "correct": false,
        "explanation": "Les animaux contiennent et métabolisent de nombreux glucides, notamment le glucose et le glycogène."
      }
    ],
    "explanation": "Les glucides sont des composés organiques majeurs des mondes végétal et animal."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel processus permet aux végétaux chlorophylliens de synthétiser des glucides à partir de dioxyde de carbone et d'eau ?",
    "choices": [
      {
        "content": "La photosynthèse.",
        "correct": true,
        "explanation": "La photosynthèse utilise l'énergie lumineuse pour produire de la matière organique."
      },
      {
        "content": "La traduction.",
        "correct": false,
        "explanation": "Ce n'est pas la production végétale des glucides."
      },
      {
        "content": "La protéolyse.",
        "correct": false,
        "explanation": "Elle concerne les protéines."
      },
      {
        "content": "La décarboxylation uniquement.",
        "correct": false,
        "explanation": "Une décarboxylation isolée ne correspond pas à la synthèse photosynthétique des glucides."
      }
    ],
    "explanation": "La photosynthèse permet la fixation du carbone minéral dans des molécules organiques, dont des glucides."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'énergie fournie par les macronutriments, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "1 g de glucides fournit environ 4 kcal.",
        "correct": true,
        "explanation": "La valeur énergétique conventionnelle des glucides assimilables est d'environ 4 kcal par gramme."
      },
      {
        "content": "1 g de protéines fournit environ 4 kcal.",
        "correct": true,
        "explanation": "La valeur énergétique conventionnelle des protéines est d'environ 4 kcal par gramme."
      },
      {
        "content": "1 g de lipides fournit environ 9 kcal.",
        "correct": true,
        "explanation": "Les lipides fournissent environ 9 kcal par gramme, soit davantage que les glucides ou les protéines."
      },
      {
        "content": "Les lipides fournissent moins d'énergie par gramme que les glucides.",
        "correct": false,
        "explanation": "Les lipides fournissent environ 9 kcal/g, contre environ 4 kcal/g pour les glucides."
      }
    ],
    "explanation": "Les valeurs énergétiques conventionnelles sont d'environ 4 kcal/g pour les glucides et les protéines, et 9 kcal/g pour les lipides."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quels rôles biologiques peuvent être assurés par les glucides ?",
    "choices": [
      {
        "content": "Rôle énergétique.",
        "correct": true,
        "explanation": "L'oxydation du glucose fournit de l'énergie aux cellules."
      },
      {
        "content": "Réserve énergétique dans le foie et le muscle.",
        "correct": true,
        "explanation": "Le glycogène constitue une réserve glucidique dans le foie et les muscles."
      },
      {
        "content": "Rôle structural et de soutien cellulaire.",
        "correct": true,
        "explanation": "Des glucides participent à des structures biologiques, comme la cellulose ou les glycosaminoglycanes."
      },
      {
        "content": "Absence de rôle à la surface cellulaire.",
        "correct": false,
        "explanation": "Ils interviennent au contraire dans interactions, protection et reconnaissance."
      }
    ],
    "explanation": "Les glucides ont des fonctions énergétiques, structurales et de surface cellulaire."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À la surface des cellules, les glucides peuvent participer :",
    "choices": [
      {
        "content": "Aux interactions cellulaires.",
        "correct": true,
        "explanation": "Les glycoconjugués de surface participent à l'adhérence et aux interactions cellulaires."
      },
      {
        "content": "À la protection.",
        "correct": true,
        "explanation": "Le glycocalyx contribue à la protection de la membrane plasmique."
      },
      {
        "content": "Aux signaux de reconnaissance.",
        "correct": true,
        "explanation": "Les motifs glucidiques de surface interviennent dans la reconnaissance cellulaire."
      },
      {
        "content": "À certains déterminants antigéniques comme les groupes sanguins.",
        "correct": true,
        "explanation": "Les chaînes glucidiques de surface participent à des déterminants antigéniques, notamment ceux des groupes sanguins ABO."
      }
    ],
    "explanation": "Les fonctions de surface dépassent largement le seul rôle énergétique."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les glucides entrent dans la constitution de molécules fondamentales telles que :",
    "choices": [
      {
        "content": "ARN.",
        "correct": true,
        "explanation": "L'ARN contient du ribose."
      },
      {
        "content": "ADN.",
        "correct": true,
        "explanation": "L'ADN contient du 2-désoxyribose."
      },
      {
        "content": "Certaines coenzymes.",
        "correct": true,
        "explanation": "Plusieurs coenzymes, comme le NAD, comportent un motif ribose."
      },
      {
        "content": "Certaines vitamines.",
        "correct": true,
        "explanation": "Certaines vitamines, comme la vitamine C, sont des dérivés d'oses."
      }
    ],
    "explanation": "Des motifs glucidiques sont intégrés à de nombreuses molécules biologiques essentielles."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles associations entre pathologies et métabolisme glucidique sont exactes ?",
    "choices": [
      {
        "content": "Diabète → anomalie du métabolisme du glucose.",
        "correct": true,
        "explanation": "Le diabète se caractérise notamment par une perturbation de l'homéostasie du glucose."
      },
      {
        "content": "Galactosémie → anomalie du métabolisme du galactose.",
        "correct": true,
        "explanation": "Les galactosémies sont des maladies héréditaires touchant le métabolisme du galactose."
      },
      {
        "content": "Glycogénoses → déficits enzymatiques.",
        "correct": true,
        "explanation": "Les glycogénoses sont dues à des déficits enzymatiques affectant la synthèse ou la dégradation du glycogène."
      },
      {
        "content": "Intolérance au lait → nécessairement allergie aux protéines du lait.",
        "correct": false,
        "explanation": "L'intolérance au lactose résulte d'une maldigestion du lactose, tandis qu'une allergie met en jeu une réponse immunitaire dirigée contre des protéines du lait."
      }
    ],
    "explanation": "Le diabète, les galactosémies et les glycogénoses concernent le métabolisme glucidique ; l'intolérance au lactose est distincte d'une allergie aux protéines du lait."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Un patient digère mal le lactose sans réaction allergique aux protéines du lait. À quelle situation cela correspond-il ?",
    "choices": [
      {
        "content": "Intolérance au lactose.",
        "correct": true,
        "explanation": "Il s'agit d'une anomalie de digestion du lactose."
      },
      {
        "content": "Allergie aux protéines du lait.",
        "correct": false,
        "explanation": "Une allergie aux protéines du lait implique un mécanisme immunitaire, absent de la situation décrite."
      },
      {
        "content": "Glycogénose certaine.",
        "correct": false,
        "explanation": "Ce n'est pas le tableau décrit."
      },
      {
        "content": "Diabète nécessairement.",
        "correct": false,
        "explanation": "La situation concerne le lactose."
      }
    ],
    "explanation": "L'intolérance au lactose est un trouble digestif distinct d'une allergie aux protéines du lait."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La famille des oses et de leurs dérivés peut comporter :",
    "choices": [
      {
        "content": "Une chaîne carbonée.",
        "correct": true,
        "explanation": "Élément de base."
      },
      {
        "content": "Une fonction carbonyle.",
        "correct": true,
        "explanation": "Aldéhyde ou cétone."
      },
      {
        "content": "Plusieurs fonctions alcool.",
        "correct": true,
        "explanation": "Primaires et secondaires."
      },
      {
        "content": "Parfois des fonctions acides ou amines dans certains dérivés.",
        "correct": true,
        "explanation": "Les oses peuvent donner des dérivés acides, comme les acides uroniques, ou aminés, comme les osamines."
      }
    ],
    "explanation": "Un ose associe une chaîne carbonée, une fonction carbonyle et plusieurs fonctions alcool ; ses dérivés peuvent porter d'autres fonctions."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour un ose simple constitué de C, H et O, quelles écritures générales sont algébriquement équivalentes ?",
    "choices": [
      {
        "content": "$\\mathrm{C_nH_{2n}O_n}$.",
        "correct": true,
        "explanation": "Première écriture."
      },
      {
        "content": "$(\\mathrm{CH_2O})_n$.",
        "correct": true,
        "explanation": "Deuxième écriture."
      },
      {
        "content": "$\\mathrm{C_n(H_2O)_n}$.",
        "correct": true,
        "explanation": "Troisième écriture."
      },
      {
        "content": "$\\mathrm{C_nH_nO_{2n}}$.",
        "correct": false,
        "explanation": "Elle ne respecte pas le rapport H/O égal à 2."
      }
    ],
    "explanation": "Les trois écritures correctes expriment le même rapport atomique : un carbone, deux hydrogènes et un oxygène par motif."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la chaîne carbonée des oses simples :",
    "choices": [
      {
        "content": "Elle comporte au minimum 3 carbones.",
        "correct": true,
        "explanation": "Les trioses sont les plus petits oses usuels."
      },
      {
        "content": "Elle est non ramifiée.",
        "correct": true,
        "explanation": "La chaîne carbonée des oses usuels est non ramifiée."
      },
      {
        "content": "La numérotation débute au carbone le plus oxydé.",
        "correct": true,
        "explanation": "La numérotation minimise l'indice du carbone portant la fonction carbonyle."
      },
      {
        "content": "La numérotation débute toujours au carbone le moins oxydé.",
        "correct": false,
        "explanation": "C'est l'inverse."
      }
    ],
    "explanation": "La numérotation permet notamment de fixer la position de la fonction carbonyle."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un aldose sous forme linéaire :",
    "choices": [
      {
        "content": "Porte une fonction aldéhyde en C1.",
        "correct": true,
        "explanation": "Définition de l'aldose."
      },
      {
        "content": "Est numéroté à partir du carbone aldéhydique.",
        "correct": true,
        "explanation": "Carbone le plus oxydé."
      },
      {
        "content": "Porte une cétone en C2.",
        "correct": false,
        "explanation": "Cela caractérise un cétose."
      },
      {
        "content": "Peut comporter des alcools primaires et secondaires.",
        "correct": true,
        "explanation": "La longueur de la chaîne peut permettre la présence d'un alcool primaire terminal et de plusieurs alcools secondaires."
      }
    ],
    "explanation": "Le carbonyle terminal en C1 caractérise l'aldose."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un cétose sous forme linéaire :",
    "choices": [
      {
        "content": "Porte classiquement une fonction cétone en C2.",
        "correct": true,
        "explanation": "Dans les cétoses usuels, la fonction cétone est classiquement portée par C2."
      },
      {
        "content": "Possède des groupes alcool, notamment CH2OH.",
        "correct": true,
        "explanation": "Les autres carbones portent généralement des groupes hydroxyle, dont certains sous forme CH2OH."
      },
      {
        "content": "Est nécessairement un aldéhyde en C1.",
        "correct": false,
        "explanation": "Ce serait un aldose."
      },
      {
        "content": "Est numéroté depuis l'extrémité la plus proche du carbone le plus oxydé.",
        "correct": true,
        "explanation": "Règle de numérotation."
      }
    ],
    "explanation": "Dans les 2-cétoses usuels, le carbonyle interne est porté par C2."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "La formule générale $\\mathrm{CH_2OH-(CHOH)_{n-2}-CHO}$ correspond à :",
    "choices": [
      {
        "content": "Un aldose.",
        "correct": true,
        "explanation": "Le groupe terminal CHO est un aldéhyde."
      },
      {
        "content": "Un cétose.",
        "correct": false,
        "explanation": "Un cétose possède un carbonyle interne."
      },
      {
        "content": "Un acide gras.",
        "correct": false,
        "explanation": "Cette écriture comporte un aldéhyde terminal et plusieurs groupes alcool, contrairement à un acide gras."
      },
      {
        "content": "Un nucléotide.",
        "correct": false,
        "explanation": "Aucun phosphate/base n'apparaît."
      }
    ],
    "explanation": "La présence du groupe CHO terminal identifie un aldose."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "La formule générale $\\mathrm{CH_2OH-CO-(CHOH)_{n-3}-CH_2OH}$ correspond à :",
    "choices": [
      {
        "content": "Un cétose.",
        "correct": true,
        "explanation": "Le carbonyle est interne."
      },
      {
        "content": "Un aldose.",
        "correct": false,
        "explanation": "L'aldose possède un CHO terminal."
      },
      {
        "content": "Une protéine.",
        "correct": false,
        "explanation": "Pas de liaison peptidique."
      },
      {
        "content": "Un acide carboxylique.",
        "correct": false,
        "explanation": "Pas de COOH."
      }
    ],
    "explanation": "La cétone en C2 caractérise le cétose."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des fonctions alcool des oses linéaires :",
    "choices": [
      {
        "content": "$\\mathrm{CH_2OH}$ correspond à un alcool primaire.",
        "correct": true,
        "explanation": "Carbone terminal."
      },
      {
        "content": "Un motif interne $\\mathrm{H-C-OH}$ correspond à un alcool secondaire.",
        "correct": true,
        "explanation": "Carbone lié à deux carbones."
      },
      {
        "content": "Tous les OH d'un ose sont des fonctions acides carboxyliques.",
        "correct": false,
        "explanation": "Ce sont des fonctions alcool."
      },
      {
        "content": "Les oses possèdent plusieurs groupes hydroxyle.",
        "correct": true,
        "explanation": "Caractère polyalcool."
      }
    ],
    "explanation": "La distinction alcool primaire/secondaire est utilisée pour lire la structure des oses."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le nom générique d'un ose dépend notamment :",
    "choices": [
      {
        "content": "Du nombre de carbones.",
        "correct": true,
        "explanation": "Triose, tétrose, pentose, hexose, heptose."
      },
      {
        "content": "De la famille aldose ou cétose.",
        "correct": true,
        "explanation": "Préfixes aldo-/céto-."
      },
      {
        "content": "De la position de la fonction carbonyle.",
        "correct": true,
        "explanation": "Elle distingue les deux familles."
      },
      {
        "content": "De la couleur de la solution.",
        "correct": false,
        "explanation": "Elle n'intervient pas dans cette nomenclature."
      }
    ],
    "explanation": "La nomenclature combine famille fonctionnelle et longueur de chaîne."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles associations nombre de carbones / nom sont exactes ?",
    "choices": [
      {
        "content": "3 → triose.",
        "correct": true,
        "explanation": "Association du tableau."
      },
      {
        "content": "4 → tétrose.",
        "correct": true,
        "explanation": "Association du tableau."
      },
      {
        "content": "5 → pentose.",
        "correct": true,
        "explanation": "Association du tableau."
      },
      {
        "content": "6 → hexose.",
        "correct": true,
        "explanation": "Association du tableau."
      }
    ],
    "explanation": "Les préfixes tri-, tétr-, pent- et hex- codent le nombre de carbones."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles associations composées sont correctes ?",
    "choices": [
      {
        "content": "Aldose à 3 carbones → aldotriose.",
        "correct": true,
        "explanation": "Association correcte."
      },
      {
        "content": "Cétose à 4 carbones → cétotétrose.",
        "correct": true,
        "explanation": "Association correcte."
      },
      {
        "content": "Aldose à 6 carbones → aldohexose.",
        "correct": true,
        "explanation": "Association correcte."
      },
      {
        "content": "Cétose à 7 carbones → cétoheptose.",
        "correct": true,
        "explanation": "Association correcte."
      }
    ],
    "explanation": "La nomenclature combine aldo-/céto- avec le nombre de carbones."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Dans la classification structurale des oses, le glucose est :",
    "choices": [
      {
        "content": "Un aldohexose.",
        "correct": true,
        "explanation": "Il possède six carbones et une fonction aldéhyde dans sa forme linéaire."
      },
      {
        "content": "Un cétopentose.",
        "correct": false,
        "explanation": "Mauvaise famille et mauvais nombre de carbones."
      },
      {
        "content": "Un aldotriose.",
        "correct": false,
        "explanation": "Il possède six carbones."
      },
      {
        "content": "Un cétohexose.",
        "correct": false,
        "explanation": "Le fructose est l'exemple de cétohexose."
      }
    ],
    "explanation": "Le glucose est l'aldohexose de référence du chapitre."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Dans la classification structurale des oses, le fructose est :",
    "choices": [
      {
        "content": "Un cétohexose.",
        "correct": true,
        "explanation": "Six carbones et fonction cétone."
      },
      {
        "content": "Un aldohexose.",
        "correct": false,
        "explanation": "C'est le glucose."
      },
      {
        "content": "Un cétotriose.",
        "correct": false,
        "explanation": "Le fructose possède six carbones."
      },
      {
        "content": "Un aldopentose.",
        "correct": false,
        "explanation": "Famille et longueur incorrectes."
      }
    ],
    "explanation": "Le fructose est un cétohexose."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un ose simple possède au minimum trois carbones.",
        "correct": true,
        "explanation": "Les trioses sont les plus petits oses usuels."
      },
      {
        "content": "Un aldose porte un aldéhyde en C1.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Un cétose porte classiquement une cétone en C2.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Un hexose possède six carbones.",
        "correct": true,
        "explanation": "Nomenclature."
      },
      {
        "content": "Le glucose est un aldohexose.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "Le fructose est un aldopentose.",
        "correct": false,
        "explanation": "C'est un cétohexose."
      },
      {
        "content": "La numérotation commence au carbone le moins oxydé.",
        "correct": false,
        "explanation": "Au plus oxydé."
      },
      {
        "content": "CH2OH correspond à un alcool secondaire.",
        "correct": false,
        "explanation": "Alcool primaire."
      },
      {
        "content": "La formule générale est CnHnO2n.",
        "correct": false,
        "explanation": "Formule incorrecte."
      },
      {
        "content": "Les oses sont nécessairement ramifiés.",
        "correct": false,
        "explanation": "La chaîne est décrite comme non ramifiée."
      }
    ],
    "explanation": "Cette sélection consolide structure, numérotation et nomenclature des oses."
  }
];
