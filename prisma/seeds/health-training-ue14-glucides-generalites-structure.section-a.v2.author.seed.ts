import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie – Chapitre 1.1 – Section A – Généralités, structure et nomenclature des oses */
export const UE14_BIOCH_CH1_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les rôles biologiques des glucides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Des motifs glucidiques participent à la reconnaissance cellulaire.",
        "correct": true,
        "explanation": "Les glycoconjugués de surface contribuent au glycocalyx."
      },
      {
        "content": "Ils sont absents du monde animal.",
        "correct": false,
        "explanation": "Les animaux contiennent et métabolisent de nombreux glucides."
      },
      {
        "content": "Ils peuvent fournir de l'énergie aux cellules.",
        "correct": true,
        "explanation": "Le glucose est un substrat énergétique majeur."
      },
      {
        "content": "Le ribose et le 2-désoxyribose entrent dans la constitution des acides nucléiques.",
        "correct": true,
        "explanation": "Ils appartiennent respectivement à l'ARN et à l'ADN."
      },
      {
        "content": "Le glycogène est la réserve glucidique principale des végétaux.",
        "correct": false,
        "explanation": "Chez les végétaux, la réserve majeure est l'amidon."
      }
    ],
    "explanation": "Les glucides assurent des fonctions énergétiques, de réserve, structurales et de reconnaissance."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de la valeur énergétique des macronutriments, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Glucides et lipides ont la même densité énergétique.",
        "correct": false,
        "explanation": "Leur valeur énergétique par gramme diffère nettement."
      },
      {
        "content": "Un gramme de glucides fournit environ 9 kcal.",
        "correct": false,
        "explanation": "Environ 9 kcal/g correspond aux lipides."
      },
      {
        "content": "Les lipides fournissent moins d'énergie par gramme que les glucides.",
        "correct": false,
        "explanation": "Ils en fournissent environ deux fois plus."
      },
      {
        "content": "Les protéines fournissent environ 20 kcal/g.",
        "correct": false,
        "explanation": "Leur valeur conventionnelle est proche de 4 kcal/g."
      },
      {
        "content": "Un gramme de lipides fournit environ 9 kcal.",
        "correct": true,
        "explanation": "Les lipides sont plus énergétiques par unité de masse."
      }
    ],
    "explanation": "Les valeurs conventionnelles sont d'environ 4 kcal/g pour les glucides et les protéines et 9 kcal/g pour les lipides."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel terme désigne un glucide simple non hydrolysable en unités glucidiques plus petites ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "ose",
        "monosaccharide",
        "un ose",
        "un monosaccharide"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Un ose est un monosaccharide portant une fonction carbonyle et plusieurs groupes hydroxyle."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les aldoses, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un aldose possède une fonction aldéhyde en C1 dans sa forme ouverte.",
        "correct": true,
        "explanation": "Le carbone carbonylé terminal est numéroté C1."
      },
      {
        "content": "Le fructose est un aldose.",
        "correct": false,
        "explanation": "Le fructose est un cétose."
      },
      {
        "content": "Le glycéraldéhyde est l'aldotriose de référence.",
        "correct": true,
        "explanation": "Il contient trois carbones."
      },
      {
        "content": "Le carbone aldéhydique d'un aldose est toujours C6.",
        "correct": false,
        "explanation": "Il est C1."
      },
      {
        "content": "La numérotation d'un aldose commence du côté de la fonction aldéhyde.",
        "correct": true,
        "explanation": "Le carbone le plus oxydé reçoit le plus petit indice."
      }
    ],
    "explanation": "Dans un aldose, la fonction aldéhyde terminale définit le carbone C1."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos des cétoses, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "La dihydroxyacétone possède un carbone asymétrique.",
        "correct": false,
        "explanation": "Elle est achirale."
      },
      {
        "content": "Un cétose possède nécessairement un aldéhyde terminal en C1.",
        "correct": false,
        "explanation": "Cela définit un aldose."
      },
      {
        "content": "Un cétose ne contient aucun groupe hydroxyle.",
        "correct": false,
        "explanation": "Il en contient plusieurs."
      },
      {
        "content": "Le fructose est un cétohexose.",
        "correct": true,
        "explanation": "Il possède six carbones et une cétone dans sa forme ouverte."
      },
      {
        "content": "Le glucose est un cétose.",
        "correct": false,
        "explanation": "Le glucose est un aldose."
      }
    ],
    "explanation": "Un cétose possède un carbonyle interne ; le fructose est le cétohexose classique."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur la nomenclature selon le nombre de carbones, retenez exactement les deux exactes.",
    "choices": [
      {
        "content": "Un hexose possède six carbones.",
        "correct": true,
        "explanation": "Glucose, galactose et mannose sont des aldohexoses."
      },
      {
        "content": "Le terme triose désigne une molécule à trois oxygènes quel que soit le nombre de carbones.",
        "correct": false,
        "explanation": "Il décrit le nombre de carbones."
      },
      {
        "content": "Un hexose possède trois carbones.",
        "correct": false,
        "explanation": "Un hexose en possède six."
      },
      {
        "content": "Le terme aldohexose combine nature du carbonyle et nombre de carbones.",
        "correct": true,
        "explanation": "Aldo- indique l'aldéhyde et hex- six carbones."
      },
      {
        "content": "Un cétohexose est nécessairement un aldéhyde.",
        "correct": false,
        "explanation": "Céto- indique une cétone."
      }
    ],
    "explanation": "Triose, tétrose, pentose et hexose décrivent respectivement 3, 4, 5 et 6 carbones.",
    "requiredSelectionCount": 2
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant quelques situations cliniques liées aux glucides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le diabète sucré se caractérise notamment par une anomalie de la régulation de la glycémie.",
        "correct": true,
        "explanation": "L'hyperglycémie chronique est un élément central du diabète sucré."
      },
      {
        "content": "Une hypoglycémie correspond à une glycémie anormalement basse.",
        "correct": true,
        "explanation": "Le terme décrit une concentration sanguine de glucose insuffisante."
      },
      {
        "content": "L'intolérance au lactose peut résulter d'une activité lactase insuffisante.",
        "correct": true,
        "explanation": "Le lactose mal digéré atteint le côlon, où il peut être fermenté."
      },
      {
        "content": "L'intolérance au lactose est toujours une allergie immunologique aux protéines du lait.",
        "correct": false,
        "explanation": "L'intolérance au lactose est un trouble digestif enzymatique, distinct d'une allergie aux protéines du lait."
      },
      {
        "content": "La glycémie désigne la concentration sanguine de glycogène.",
        "correct": false,
        "explanation": "La glycémie correspond à la concentration de glucose dans le sang."
      }
    ],
    "explanation": "Les notions de glycémie, hypoglycémie, diabète et intolérance au lactose doivent être distinguées sur le plan physiopathologique."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes permettant de distinguer intolérance au lactose et allergie aux protéines du lait.",
    "choices": [
      {
        "content": "L'intolérance au lactose est liée à une digestion insuffisante du lactose, souvent par déficit en lactase.",
        "correct": true,
        "explanation": "Le mécanisme est principalement enzymatique et digestif."
      },
      {
        "content": "Les deux situations sont dues au même déficit enzymatique.",
        "correct": false,
        "explanation": "L'allergie est immunologique, alors que l'intolérance au lactose est digestive."
      },
      {
        "content": "Une intolérance au lactose implique nécessairement une réaction anaphylactique.",
        "correct": false,
        "explanation": "L'anaphylaxie relève d'une réaction allergique sévère, pas du mécanisme habituel de l'intolérance au lactose."
      },
      {
        "content": "Le lactose est une protéine capable de déclencher directement l'allergie aux protéines du lait.",
        "correct": false,
        "explanation": "Le lactose est un glucide, pas une protéine."
      },
      {
        "content": "L'allergie aux protéines du lait implique une réponse immunitaire contre des protéines alimentaires.",
        "correct": true,
        "explanation": "Le mécanisme allergique vise des antigènes protéiques et non le lactose."
      }
    ],
    "explanation": "Intolérance au lactose et allergie aux protéines du lait ont des mécanismes différents : enzymatique/digestif versus immunologique.",
    "requiredSelectionCount": 2
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur les rôles biologiques des glucides, laquelle est exacte ?",
    "choices": [
      {
        "content": "Le ribose et le 2-désoxyribose entrent dans la constitution des acides nucléiques.",
        "correct": true,
        "explanation": "Ils appartiennent respectivement à l'ARN et à l'ADN."
      },
      {
        "content": "Les groupes sanguins ABO sont indépendants de tout motif glucidique.",
        "correct": false,
        "explanation": "Des déterminants glucidiques participent aux antigènes ABO."
      },
      {
        "content": "Ils n'ont qu'un rôle énergétique.",
        "correct": false,
        "explanation": "Ils ont aussi des rôles structuraux et de reconnaissance."
      },
      {
        "content": "Ils sont absents du monde animal.",
        "correct": false,
        "explanation": "Les animaux contiennent et métabolisent de nombreux glucides."
      },
      {
        "content": "Le glycogène est la réserve glucidique principale des végétaux.",
        "correct": false,
        "explanation": "Chez les végétaux, la réserve majeure est l'amidon."
      }
    ],
    "explanation": "Les glucides assurent des fonctions énergétiques, de réserve, structurales et de reconnaissance."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la valeur énergétique des macronutriments, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les lipides fournissent moins d'énergie par gramme que les glucides.",
        "correct": false,
        "explanation": "Ils en fournissent environ deux fois plus."
      },
      {
        "content": "Les protéines fournissent environ 20 kcal/g.",
        "correct": false,
        "explanation": "Leur valeur conventionnelle est proche de 4 kcal/g."
      },
      {
        "content": "Les valeurs 4-4-9 sont des repères nutritionnels usuels.",
        "correct": true,
        "explanation": "Elles correspondent respectivement aux glucides, protéines et lipides."
      },
      {
        "content": "Un gramme de lipides fournit environ 9 kcal.",
        "correct": true,
        "explanation": "Les lipides sont plus énergétiques par unité de masse."
      },
      {
        "content": "Un gramme de glucides assimilables fournit environ 4 kcal.",
        "correct": true,
        "explanation": "C'est la valeur énergétique conventionnelle."
      }
    ],
    "explanation": "Les valeurs conventionnelles sont d'environ 4 kcal/g pour les glucides et les protéines et 9 kcal/g pour les lipides."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les rôles biologiques des glucides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils sont absents du monde animal.",
        "correct": false,
        "explanation": "Les animaux contiennent et métabolisent de nombreux glucides."
      },
      {
        "content": "Le glycogène est la réserve glucidique principale des végétaux.",
        "correct": false,
        "explanation": "Chez les végétaux, la réserve majeure est l'amidon."
      },
      {
        "content": "Ils n'ont qu'un rôle énergétique.",
        "correct": false,
        "explanation": "Ils ont aussi des rôles structuraux et de reconnaissance."
      },
      {
        "content": "Des motifs glucidiques participent à la reconnaissance cellulaire.",
        "correct": true,
        "explanation": "Les glycoconjugués de surface contribuent au glycocalyx."
      },
      {
        "content": "Le glycogène constitue une réserve glucidique chez l'être humain.",
        "correct": true,
        "explanation": "Il est stocké surtout dans le foie et les muscles."
      }
    ],
    "explanation": "Les glucides assurent des fonctions énergétiques, de réserve, structurales et de reconnaissance."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de kilocalories fournit approximativement 1 g de glucides assimilables ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0.2
    },
    "explanation": "Les valeurs conventionnelles sont d'environ 4 kcal/g pour les glucides et les protéines et 9 kcal/g pour les lipides."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur la structure générale d'un ose simple, laquelle est exacte ?",
    "choices": [
      {
        "content": "De nombreux oses simples suivent la formule approchée $\\mathrm{C_nH_{2n}O_n}$.",
        "correct": true,
        "explanation": "Cette écriture correspond au motif $(\\mathrm{CH_2O})_n$."
      },
      {
        "content": "Un ose simple est dépourvu d'oxygène.",
        "correct": false,
        "explanation": "Les oses comportent plusieurs atomes d'oxygène."
      },
      {
        "content": "Un ose ne possède jamais de fonction carbonyle.",
        "correct": false,
        "explanation": "La forme ouverte comporte un aldéhyde ou une cétone."
      },
      {
        "content": "La formule générale usuelle est $\\mathrm{C_nH_nO_{2n}}$.",
        "correct": false,
        "explanation": "Le rapport H/O usuel n'est pas celui-ci."
      },
      {
        "content": "Les oses usuels possèdent obligatoirement une chaîne très ramifiée.",
        "correct": false,
        "explanation": "Les chaînes simples étudiées sont non ramifiées."
      }
    ],
    "explanation": "Un ose est un monosaccharide portant une fonction carbonyle et plusieurs groupes hydroxyle."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les aldoses, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un aldose possède nécessairement une cétone en C2.",
        "correct": false,
        "explanation": "Cela décrit un 2-cétose usuel."
      },
      {
        "content": "Un aldose possède une fonction aldéhyde en C1 dans sa forme ouverte.",
        "correct": true,
        "explanation": "Le carbone carbonylé terminal est numéroté C1."
      },
      {
        "content": "Le glucose est un aldohexose.",
        "correct": true,
        "explanation": "Il possède six carbones et une fonction aldéhyde dans sa forme ouverte."
      },
      {
        "content": "Le glycéraldéhyde est l'aldotriose de référence.",
        "correct": true,
        "explanation": "Il contient trois carbones."
      },
      {
        "content": "La numérotation d'un aldose commence du côté de la fonction aldéhyde.",
        "correct": true,
        "explanation": "Le carbone le plus oxydé reçoit le plus petit indice."
      }
    ],
    "explanation": "Dans un aldose, la fonction aldéhyde terminale définit le carbone C1."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos des cétoses, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Un cétose possède nécessairement un aldéhyde terminal en C1.",
        "correct": false,
        "explanation": "Cela définit un aldose."
      },
      {
        "content": "Un cétose ne contient aucun groupe hydroxyle.",
        "correct": false,
        "explanation": "Il en contient plusieurs."
      },
      {
        "content": "Le fructose est un cétohexose.",
        "correct": true,
        "explanation": "Il possède six carbones et une cétone dans sa forme ouverte."
      },
      {
        "content": "Un cétose porte une fonction cétone dans sa forme ouverte.",
        "correct": true,
        "explanation": "Le carbonyle est interne."
      },
      {
        "content": "La dihydroxyacétone possède un carbone asymétrique.",
        "correct": false,
        "explanation": "Elle est achirale."
      }
    ],
    "explanation": "Un cétose possède un carbonyle interne ; le fructose est le cétohexose classique.",
    "requiredSelectionCount": 2
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la nomenclature selon le nombre de carbones, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Un cétohexose est nécessairement un aldéhyde.",
        "correct": false,
        "explanation": "Céto- indique une cétone."
      },
      {
        "content": "Un pentose possède cinq carbones.",
        "correct": true,
        "explanation": "Le ribose est un aldopentose."
      },
      {
        "content": "Un hexose possède six carbones.",
        "correct": true,
        "explanation": "Glucose, galactose et mannose sont des aldohexoses."
      },
      {
        "content": "Le terme aldohexose combine nature du carbonyle et nombre de carbones.",
        "correct": true,
        "explanation": "Aldo- indique l'aldéhyde et hex- six carbones."
      },
      {
        "content": "Un triose possède trois carbones.",
        "correct": true,
        "explanation": "Le préfixe tri- indique trois carbones."
      }
    ],
    "explanation": "Triose, tétrose, pentose et hexose décrivent respectivement 3, 4, 5 et 6 carbones."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel triose est achiral ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "dihydroxyacétone",
        "dihydroxyacetone",
        "la dihydroxyacétone",
        "la dihydroxyacetone"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le glycéraldéhyde est un aldotriose chiral ; la dihydroxyacétone est un cétotriose achiral."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de la numérotation des oses ouverts, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Le glucose ouvert possède son carbonyle en C6.",
        "correct": false,
        "explanation": "Il est en C1."
      },
      {
        "content": "La numérotation vise à donner le plus petit indice au carbone carbonylé.",
        "correct": true,
        "explanation": "Le carbone le plus oxydé est prioritaire."
      },
      {
        "content": "La numérotation commence toujours par l'extrémité la plus éloignée du carbonyle.",
        "correct": false,
        "explanation": "Elle commence du côté le plus proche."
      },
      {
        "content": "La numérotation des carbones est sans intérêt pour l'épimérie.",
        "correct": false,
        "explanation": "L'épimérie est définie par une position carbonée précise."
      },
      {
        "content": "Le fructose ouvert possède sa cétone en C6.",
        "correct": false,
        "explanation": "Elle est en C2."
      }
    ],
    "explanation": "La numérotation des oses part du côté du carbone le plus oxydé."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les rôles biologiques des glucides, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le ribose et le 2-désoxyribose entrent dans la constitution des acides nucléiques.",
        "correct": true,
        "explanation": "Ils appartiennent respectivement à l'ARN et à l'ADN."
      },
      {
        "content": "Le glycogène constitue une réserve glucidique chez l'être humain.",
        "correct": true,
        "explanation": "Il est stocké surtout dans le foie et les muscles."
      },
      {
        "content": "Le glycogène est la réserve glucidique principale des végétaux.",
        "correct": false,
        "explanation": "Chez les végétaux, la réserve majeure est l'amidon."
      },
      {
        "content": "Les groupes sanguins ABO sont indépendants de tout motif glucidique.",
        "correct": false,
        "explanation": "Des déterminants glucidiques participent aux antigènes ABO."
      },
      {
        "content": "Des motifs glucidiques participent à la reconnaissance cellulaire.",
        "correct": true,
        "explanation": "Les glycoconjugués de surface contribuent au glycocalyx."
      }
    ],
    "explanation": "Les glucides assurent des fonctions énergétiques, de réserve, structurales et de reconnaissance."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un cétose ne contient aucun groupe hydroxyle.",
        "correct": false,
        "explanation": "Il en contient plusieurs."
      },
      {
        "content": "Un gramme de protéines fournit environ 4 kcal.",
        "correct": true,
        "explanation": "La valeur conventionnelle est voisine de celle des glucides."
      },
      {
        "content": "Les valeurs 4-4-9 sont des repères nutritionnels usuels.",
        "correct": true,
        "explanation": "Elles correspondent respectivement aux glucides, protéines et lipides."
      },
      {
        "content": "Les lipides fournissent moins d'énergie par gramme que les glucides.",
        "correct": false,
        "explanation": "Ils en fournissent environ deux fois plus."
      },
      {
        "content": "Un cétose possède nécessairement un aldéhyde terminal en C1.",
        "correct": false,
        "explanation": "Cela définit un aldose."
      },
      {
        "content": "Un gramme de lipides fournit environ 9 kcal.",
        "correct": true,
        "explanation": "Les lipides sont plus énergétiques par unité de masse."
      },
      {
        "content": "La dihydroxyacétone possède un carbone asymétrique.",
        "correct": false,
        "explanation": "Elle est achirale."
      },
      {
        "content": "Un gramme de glucides assimilables fournit environ 4 kcal.",
        "correct": true,
        "explanation": "C'est la valeur énergétique conventionnelle."
      },
      {
        "content": "Dans les cétoses usuels étudiés, le carbonyle est souvent en C2.",
        "correct": true,
        "explanation": "Le fructose en est l'exemple majeur."
      },
      {
        "content": "Le glucose est un cétose.",
        "correct": false,
        "explanation": "Le glucose est un aldose."
      }
    ],
    "explanation": "Les valeurs conventionnelles sont d'environ 4 kcal/g pour les glucides et les protéines et 9 kcal/g pour les lipides. Un cétose possède un carbonyle interne ; le fructose est le cétohexose classique."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la structure générale d'un ose simple, quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "Un ose simple est dépourvu d'oxygène.",
        "correct": false,
        "explanation": "Les oses comportent plusieurs atomes d'oxygène."
      },
      {
        "content": "Un ose porte une fonction carbonyle dans sa forme ouverte.",
        "correct": true,
        "explanation": "Cette fonction est un aldéhyde ou une cétone."
      },
      {
        "content": "La formule générale usuelle est $\\mathrm{C_nH_nO_{2n}}$.",
        "correct": false,
        "explanation": "Le rapport H/O usuel n'est pas celui-ci."
      },
      {
        "content": "Un ose ne possède jamais de fonction carbonyle.",
        "correct": false,
        "explanation": "La forme ouverte comporte un aldéhyde ou une cétone."
      },
      {
        "content": "De nombreux oses simples suivent la formule approchée $\\mathrm{C_nH_{2n}O_n}$.",
        "correct": true,
        "explanation": "Cette écriture correspond au motif $(\\mathrm{CH_2O})_n$."
      }
    ],
    "explanation": "Un ose est un monosaccharide portant une fonction carbonyle et plusieurs groupes hydroxyle."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel numéro porte le carbone aldéhydique d'un aldose sous forme ouverte ?",
    "answer": {
      "type": "number",
      "value": 1,
      "tolerance": 0
    },
    "explanation": "Dans un aldose, la fonction aldéhyde terminale définit le carbone C1."
  }
];
