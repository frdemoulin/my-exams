import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie – Chapitre 1.1 – Section A – Généralités, structure et nomenclature des oses
 */

export const UE14_BIOCH_CH1_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des glucides dans le monde vivant, quelles propositions sont exactes selon la fiche ?",
    "choices": [
      {
        "content": "Ils sont rencontrés dans le monde végétal.",
        "correct": true,
        "explanation": "La fiche relie notamment leur production végétale à la photosynthèse."
      },
      {
        "content": "Ils sont également rencontrés dans le monde animal.",
        "correct": true,
        "explanation": "Ils sont présents et métabolisés chez l'Homme."
      },
      {
        "content": "Environ 70 % du poids sec des plantes est constitué de glucides.",
        "correct": true,
        "explanation": "Valeur donnée dans le support."
      },
      {
        "content": "Ils sont absents des animaux.",
        "correct": false,
        "explanation": "Le support décrit explicitement leur présence et leur métabolisme chez l'Homme."
      }
    ],
    "explanation": "Les glucides sont des composés organiques majeurs des mondes végétal et animal."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel processus végétal est explicitement relié à la production de glucides ?",
    "choices": [
      {
        "content": "La photosynthèse.",
        "correct": true,
        "explanation": "C'est le processus cité."
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
        "explanation": "Ce n'est pas le processus général cité."
      }
    ],
    "explanation": "Le support relie la production végétale de glucides à la photosynthèse."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la ration calorique indiquée dans la fiche :",
    "choices": [
      {
        "content": "Les glucides représentent environ 50 à 55 %.",
        "correct": true,
        "explanation": "Fourchette donnée."
      },
      {
        "content": "Les lipides représentent environ 30 à 35 %.",
        "correct": true,
        "explanation": "Fourchette donnée."
      },
      {
        "content": "Les protéines représentent environ 10 à 12 %.",
        "correct": true,
        "explanation": "Fourchette donnée."
      },
      {
        "content": "Les protéines représentent la majorité de la ration calorique.",
        "correct": false,
        "explanation": "Elles correspondent à la plus petite des trois parts citées."
      }
    ],
    "explanation": "La fiche donne les repères 50–55 % glucides, 30–35 % lipides et 10–12 % protéines."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les rôles biologiques des glucides cités :",
    "choices": [
      {
        "content": "Rôle énergétique.",
        "correct": true,
        "explanation": "Le glucose est particulièrement mis en avant."
      },
      {
        "content": "Réserve énergétique dans le foie et le muscle.",
        "correct": true,
        "explanation": "Rôle cité."
      },
      {
        "content": "Rôle structural et de soutien cellulaire.",
        "correct": true,
        "explanation": "Rôle cité."
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
        "explanation": "Rôle cité."
      },
      {
        "content": "À la protection.",
        "correct": true,
        "explanation": "Rôle cité."
      },
      {
        "content": "Aux signaux de reconnaissance.",
        "correct": true,
        "explanation": "Rôle cité."
      },
      {
        "content": "À certains déterminants antigéniques comme les groupes sanguins.",
        "correct": true,
        "explanation": "Exemple du support."
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
        "explanation": "Le support le cite."
      },
      {
        "content": "ADN.",
        "correct": true,
        "explanation": "Le support le cite."
      },
      {
        "content": "Certaines coenzymes.",
        "correct": true,
        "explanation": "Le support le cite."
      },
      {
        "content": "Certaines vitamines.",
        "correct": true,
        "explanation": "Le support le cite."
      }
    ],
    "explanation": "Des motifs glucidiques sont intégrés à de nombreuses molécules biologiques essentielles."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles associations pathologie / notion sont celles de la fiche ?",
    "choices": [
      {
        "content": "Diabète → anomalie du métabolisme du glucose.",
        "correct": true,
        "explanation": "Association donnée."
      },
      {
        "content": "Galactosémie → anomalie du métabolisme du galactose.",
        "correct": true,
        "explanation": "Association donnée."
      },
      {
        "content": "Glycogénoses → déficits enzymatiques.",
        "correct": true,
        "explanation": "Association donnée."
      },
      {
        "content": "Intolérance au lait → nécessairement allergie aux protéines du lait.",
        "correct": false,
        "explanation": "La fiche distingue l'intolérance au lactose de l'allergie aux protéines du lait."
      }
    ],
    "explanation": "Le support cite quatre exemples et insiste sur la différence intolérance au lactose / allergie au lait."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Un patient digère mal le lactose sans réaction allergique aux protéines du lait. À quelle situation de la fiche cela correspond-il ?",
    "choices": [
      {
        "content": "Intolérance au lactose.",
        "correct": true,
        "explanation": "Il s'agit d'une anomalie de digestion du lactose."
      },
      {
        "content": "Allergie aux protéines du lait.",
        "correct": false,
        "explanation": "La fiche distingue explicitement les deux."
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
    "question": "La structure d'un ose simple peut comporter :",
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
        "explanation": "Possibilité signalée par la fiche."
      }
    ],
    "explanation": "La structure générale associe chaîne carbonée, carbonyle et fonctions alcool."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour un ose simple constitué de C, H et O, quelles écritures générales sont données comme équivalentes ?",
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
        "explanation": "Elle ne respecte pas le rapport donné."
      }
    ],
    "explanation": "Le support présente trois écritures de la même formule générale."
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
        "explanation": "Les trioses sont les plus petits oses du tableau."
      },
      {
        "content": "Elle est décrite comme non ramifiée.",
        "correct": true,
        "explanation": "Repère de la fiche."
      },
      {
        "content": "La numérotation débute au carbone le plus oxydé.",
        "correct": true,
        "explanation": "Règle donnée."
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
        "explanation": "Structure du support."
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
        "explanation": "Repère de la fiche."
      },
      {
        "content": "Possède des groupes alcool, notamment CH2OH.",
        "correct": true,
        "explanation": "Structure générale."
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
    "explanation": "Le cétose étudié possède un carbonyle interne en C2."
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
        "explanation": "Ce n'est pas la formule donnée."
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
    "question": "Le glucose, dans la classification structurale de la fiche, est :",
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
    "question": "Le fructose, dans la classification structurale de la fiche, est :",
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
        "explanation": "Repère du support."
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
