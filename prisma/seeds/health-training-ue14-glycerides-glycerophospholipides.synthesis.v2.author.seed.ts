import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Glycérides et glycérophospholipides — Synthèse — Glycérides et glycérophospholipides */
export const UE14_BIOCH_CH6_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le glycérol, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les carbones terminaux peuvent être distingués par la nomenclature stéréospécifique sn.",
        "correct": true,
        "explanation": "Le glycérol libre est prochiral et les positions sn-1 et sn-3 sont distinguées en biochimie."
      },
      {
        "content": "Le glycérol libre est un acide gras.",
        "correct": false,
        "explanation": "C'est un triol."
      },
      {
        "content": "C2 porte une fonction acide carboxylique.",
        "correct": false,
        "explanation": "C2 porte un alcool secondaire."
      },
      {
        "content": "C2 porte une fonction alcool secondaire.",
        "correct": true,
        "explanation": "C2 est le carbone central."
      },
      {
        "content": "Il ne porte qu'une fonction alcool.",
        "correct": false,
        "explanation": "Il en porte trois."
      }
    ],
    "explanation": "Le glycérol est un triol à trois carbones ; la nomenclature sn permet de distinguer ses positions en biochimie."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel préfixe de nomenclature est utilisé pour numéroter stéréospécifiquement le glycérol en biochimie ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sn",
        "sn-",
        "nomenclature sn"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La nomenclature sn distingue les positions du squelette glycérol et évite d'assimiler les deux extrémités dans un lipide substitué."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant l'estérification du glycérol par des acides gras ?",
    "choices": [
      {
        "content": "Un diacylglycérol ne contient jamais de liaison ester.",
        "correct": false,
        "explanation": "Il en contient deux."
      },
      {
        "content": "L'estérification forme une liaison peptidique.",
        "correct": false,
        "explanation": "Elle forme une liaison ester."
      },
      {
        "content": "Un monoacylglycérol porte trois acides gras.",
        "correct": false,
        "explanation": "Il n'en porte qu'un."
      },
      {
        "content": "Un triacylglycérol possède nécessairement un phosphate.",
        "correct": false,
        "explanation": "Le phosphate caractérise les glycérophospholipides, pas les TAG."
      },
      {
        "content": "Une fonction alcool du glycérol peut réagir avec la fonction carboxylique d'un acide gras.",
        "correct": true,
        "explanation": "Une liaison ester est alors formée."
      }
    ],
    "explanation": "Les acylglycérols résultent de l'estérification d'une à trois fonctions alcool du glycérol par des acides gras."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les monoacylglycérols, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un 2-monoacylglycérol porte l'acyle sur le carbone central.",
        "correct": true,
        "explanation": "La position sn-2 est le carbone central."
      },
      {
        "content": "Un 2-monoacylglycérol porte deux acides gras.",
        "correct": false,
        "explanation": "Il n'en porte qu'un."
      },
      {
        "content": "1-MAG et 2-MAG sont des isomères de position.",
        "correct": true,
        "explanation": "La position de l'acyle diffère."
      },
      {
        "content": "1-MAG et 2-MAG ont nécessairement des formules brutes différentes pour un même acide gras.",
        "correct": false,
        "explanation": "Ils diffèrent par la position de l'acyle."
      },
      {
        "content": "Ils possèdent une seule chaîne acyle.",
        "correct": true,
        "explanation": "Deux fonctions alcool restent libres."
      }
    ],
    "explanation": "Les monoacylglycérols diffèrent notamment par la position sn-1 ou sn-2 de leur unique chaîne acyle."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant les diacylglycérols, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Le DAG ne contient aucune fonction alcool libre.",
        "correct": false,
        "explanation": "Une fonction alcool reste libre."
      },
      {
        "content": "Tout DAG contient obligatoirement une tête choline.",
        "correct": false,
        "explanation": "La choline caractérise notamment la phosphatidylcholine."
      },
      {
        "content": "Un diacylglycérol contient deux liaisons ester acyle-glycérol.",
        "correct": true,
        "explanation": "Chaque acide gras est relié par une liaison ester."
      },
      {
        "content": "Un 1,2-diacylglycérol porte des chaînes acyles sur deux carbones adjacents.",
        "correct": true,
        "explanation": "Les positions sont sn-1 et sn-2."
      },
      {
        "content": "1,2-DAG et 1,3-DAG sont synonymes.",
        "correct": false,
        "explanation": "Ils diffèrent par les positions estérifiées."
      }
    ],
    "explanation": "Un DAG comporte deux chaînes acyles ; les principaux isomères de position sont 1,2-DAG et 1,3-DAG.",
    "requiredSelectionCount": 2
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les triacylglycérols ?",
    "choices": [
      {
        "content": "Ils comportent trois chaînes acyles estérifiées au glycérol.",
        "correct": true,
        "explanation": "Les trois fonctions alcool sont estérifiées."
      },
      {
        "content": "Ils constituent une forme majeure de stockage des acides gras dans le tissu adipeux.",
        "correct": true,
        "explanation": "Ils sont des réserves énergétiques neutres."
      },
      {
        "content": "Un triacylglycérol homogène possède trois résidus acyles identiques.",
        "correct": true,
        "explanation": "R1=R2=R3 dans cette définition."
      },
      {
        "content": "Ils contiennent obligatoirement un groupement phosphate.",
        "correct": false,
        "explanation": "Ce n'est pas nécessaire."
      },
      {
        "content": "Un triacylglycérol mixte contient au moins deux résidus acyles différents.",
        "correct": true,
        "explanation": "C'est le cas fréquent dans les lipides naturels."
      }
    ],
    "explanation": "Un triacylglycérol est le triester du glycérol ; il peut être homogène ou mixte."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel résidu acyle occupe la position 2 dans le 1,3-distéaroyl-2-oléoyl-glycérol ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "oléoyl",
        "oleoyl",
        "résidu oléoyl",
        "residu oleoyl"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le 1,3-distéaroyl-2-oléoyl-glycérol est un TAG mixte illustrant la nomenclature par positions."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la glycérol kinase, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elle supprime tout groupement hydroxyle du glycérol.",
        "correct": false,
        "explanation": "Elle en phosphoryle un."
      },
      {
        "content": "Elle forme directement de la phosphatidylcholine en une étape.",
        "correct": false,
        "explanation": "Plusieurs étapes de biosynthèse sont nécessaires."
      },
      {
        "content": "Elle phosphoryle le glycérol pour former du glycérol-3-phosphate.",
        "correct": true,
        "explanation": "Cette réaction engage le glycérol dans plusieurs voies métaboliques."
      },
      {
        "content": "Elle transforme le glycérol directement en acide arachidonique.",
        "correct": false,
        "explanation": "Ce n'est pas sa fonction."
      },
      {
        "content": "Elle hydrolyse les trois liaisons ester d'un TAG.",
        "correct": false,
        "explanation": "Cela relève de lipases."
      }
    ],
    "explanation": "La glycérol kinase forme le glycérol-3-phosphate, intermédiaire central du métabolisme des glycérolipides."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le stockage des triacylglycérols ?",
    "choices": [
      {
        "content": "Ils sont fortement solubles dans le cytosol aqueux.",
        "correct": false,
        "explanation": "Ils sont hydrophobes."
      },
      {
        "content": "Ils constituent une réserve de glucose polymérisé.",
        "correct": false,
        "explanation": "Cela décrit le glycogène."
      },
      {
        "content": "Ils stockent des acides gras sous une forme globalement neutre et très hydrophobe.",
        "correct": true,
        "explanation": "Ils s'accumulent dans des gouttelettes lipidiques."
      },
      {
        "content": "Les triacylglycérols sont stockés en grande quantité dans les adipocytes.",
        "correct": true,
        "explanation": "Le tissu adipeux constitue le principal réservoir."
      },
      {
        "content": "Le tissu adipeux ne contient pratiquement aucun TAG.",
        "correct": false,
        "explanation": "Il en est le principal site de stockage."
      }
    ],
    "explanation": "Les TAG constituent la grande réserve lipidique des adipocytes sous forme de gouttelettes hydrophobes."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La digestion doit hydrolyser les liaisons ester avant absorption des principaux produits.",
        "correct": true,
        "explanation": "Des lipases assurent cette hydrolyse."
      },
      {
        "content": "Ils peuvent être mobilisés entre les repas ou lors d'un besoin énergétique accru.",
        "correct": true,
        "explanation": "La régulation hormonale adapte la lipolyse."
      },
      {
        "content": "Ils constituent une part majeure des lipides alimentaires.",
        "correct": true,
        "explanation": "Les huiles et graisses sont riches en TAG."
      },
      {
        "content": "Leur composition en acides gras dépend de la source alimentaire.",
        "correct": true,
        "explanation": "Une huile végétale et une graisse animale peuvent avoir des profils différents."
      },
      {
        "content": "Les TAG ne peuvent fournir aucune énergie.",
        "correct": false,
        "explanation": "Leurs acides gras sont des substrats énergétiques majeurs."
      },
      {
        "content": "Leur hydrolyse produit uniquement du glucose.",
        "correct": false,
        "explanation": "Elle libère glycérol et acides gras."
      },
      {
        "content": "Ils sont les principaux constituants amphiphiles de la bicouche plasmique.",
        "correct": false,
        "explanation": "Ce rôle revient surtout aux phospholipides."
      },
      {
        "content": "La fonction de stockage est distincte du rôle structural des phospholipides membranaires.",
        "correct": true,
        "explanation": "TAG et phospholipides ont des fonctions dominantes différentes."
      },
      {
        "content": "Les lipides alimentaires ne contiennent jamais de TAG.",
        "correct": false,
        "explanation": "Ils en contiennent souvent beaucoup."
      },
      {
        "content": "Un TAG est directement soluble en grande quantité dans l'eau intestinale sans émulsification ni digestion.",
        "correct": false,
        "explanation": "Son hydrophobicité nécessite une prise en charge digestive adaptée."
      }
    ],
    "explanation": "Les TAG stockent des acides gras mobilisables ; leur hydrolyse libère glycérol et acides gras. Les TAG sont des constituants majeurs des huiles et graisses alimentaires ; leur composition en acides gras détermine une partie de leurs propriétés."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le glycérol, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les carbones terminaux peuvent être distingués par la nomenclature stéréospécifique sn.",
        "correct": true,
        "explanation": "Le glycérol libre est prochiral et les positions sn-1 et sn-3 sont distinguées en biochimie."
      },
      {
        "content": "Il ne porte qu'une fonction alcool.",
        "correct": false,
        "explanation": "Il en porte trois."
      },
      {
        "content": "Il possède trois atomes de carbone.",
        "correct": true,
        "explanation": "Le glycérol est un triol C3."
      },
      {
        "content": "Le glycérol libre est un acide gras.",
        "correct": false,
        "explanation": "C'est un triol."
      },
      {
        "content": "C2 porte une fonction acide carboxylique.",
        "correct": false,
        "explanation": "C2 porte un alcool secondaire."
      }
    ],
    "explanation": "Le glycérol est un triol à trois carbones ; la nomenclature sn permet de distinguer ses positions en biochimie."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel préfixe de nomenclature est utilisé pour numéroter stéréospécifiquement le glycérol en biochimie ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sn",
        "sn-",
        "nomenclature sn"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La nomenclature sn distingue les positions du squelette glycérol et évite d'assimiler les deux extrémités dans un lipide substitué."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant l'estérification du glycérol par des acides gras, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Une fonction alcool du glycérol peut réagir avec la fonction carboxylique d'un acide gras.",
        "correct": true,
        "explanation": "Une liaison ester est alors formée."
      },
      {
        "content": "Un triacylglycérol possède nécessairement un phosphate.",
        "correct": false,
        "explanation": "Le phosphate caractérise les glycérophospholipides, pas les TAG."
      },
      {
        "content": "Un monoacylglycérol porte trois acides gras.",
        "correct": false,
        "explanation": "Il n'en porte qu'un."
      },
      {
        "content": "Un diacylglycérol ne contient jamais de liaison ester.",
        "correct": false,
        "explanation": "Il en contient deux."
      },
      {
        "content": "Un diacylglycérol possède deux acides gras estérifiés.",
        "correct": true,
        "explanation": "Une fonction alcool du glycérol reste libre."
      }
    ],
    "explanation": "Les acylglycérols résultent de l'estérification d'une à trois fonctions alcool du glycérol par des acides gras.",
    "requiredSelectionCount": 2
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les monoacylglycérols, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "1-MAG et 2-MAG sont des isomères de position.",
        "correct": true,
        "explanation": "La position de l'acyle diffère."
      },
      {
        "content": "Un 2-monoacylglycérol porte deux acides gras.",
        "correct": false,
        "explanation": "Il n'en porte qu'un."
      },
      {
        "content": "Ils possèdent une seule chaîne acyle.",
        "correct": true,
        "explanation": "Deux fonctions alcool restent libres."
      },
      {
        "content": "Un 2-monoacylglycérol porte l'acyle sur le carbone central.",
        "correct": true,
        "explanation": "La position sn-2 est le carbone central."
      },
      {
        "content": "Un monoacylglycérol ne contient aucune liaison ester.",
        "correct": false,
        "explanation": "Il en contient une."
      }
    ],
    "explanation": "Les monoacylglycérols diffèrent notamment par la position sn-1 ou sn-2 de leur unique chaîne acyle."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle phosphatase lipidique s'oppose à PI3K en convertissant PIP3 vers PIP2 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "PTEN",
        "la PTEN"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "PTEN enlève le phosphate en position 3 de PIP3 et freine la voie PI3K-AKT."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les triacylglycérols ?",
    "choices": [
      {
        "content": "Un triacylglycérol homogène possède trois résidus acyles identiques.",
        "correct": true,
        "explanation": "R1=R2=R3 dans cette définition."
      },
      {
        "content": "Ils possèdent toujours une tête fortement chargée.",
        "correct": false,
        "explanation": "Les TAG sont globalement neutres et hydrophobes."
      },
      {
        "content": "Un triacylglycérol mixte contient au moins deux résidus acyles différents.",
        "correct": true,
        "explanation": "C'est le cas fréquent dans les lipides naturels."
      },
      {
        "content": "Ils comportent trois chaînes acyles estérifiées au glycérol.",
        "correct": true,
        "explanation": "Les trois fonctions alcool sont estérifiées."
      },
      {
        "content": "Ils constituent une forme majeure de stockage des acides gras dans le tissu adipeux.",
        "correct": true,
        "explanation": "Ils sont des réserves énergétiques neutres."
      }
    ],
    "explanation": "Un triacylglycérol est le triester du glycérol ; il peut être homogène ou mixte."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel résidu acyle occupe la position 2 dans le 1,3-distéaroyl-2-oléoyl-glycérol ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "oléoyl",
        "oleoyl",
        "résidu oléoyl",
        "residu oleoyl"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le 1,3-distéaroyl-2-oléoyl-glycérol est un TAG mixte illustrant la nomenclature par positions."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Des doubles liaisons cis abaissent généralement le point de fusion.",
        "correct": true,
        "explanation": "Elles introduisent des coudes dans les chaînes."
      },
      {
        "content": "Elle transforme le glycérol directement en acide arachidonique.",
        "correct": false,
        "explanation": "Ce n'est pas sa fonction."
      },
      {
        "content": "Tous les TAG naturels ont un point de fusion unique identique.",
        "correct": false,
        "explanation": "Leur composition varie."
      },
      {
        "content": "Le point de fusion est indépendant des chaînes acyles.",
        "correct": false,
        "explanation": "Leur structure est déterminante."
      },
      {
        "content": "La réaction illustre la reconnaissance enzymatique d'une orientation du glycérol.",
        "correct": true,
        "explanation": "Le produit est nommé sn-glycérol-3-phosphate."
      },
      {
        "content": "Elle phosphoryle le glycérol pour former du glycérol-3-phosphate.",
        "correct": true,
        "explanation": "Cette réaction engage le glycérol dans plusieurs voies métaboliques."
      },
      {
        "content": "Des chaînes plus saturées favorisent généralement un point de fusion plus élevé.",
        "correct": true,
        "explanation": "Elles s'empilent plus efficacement."
      },
      {
        "content": "Elle supprime tout groupement hydroxyle du glycérol.",
        "correct": false,
        "explanation": "Elle en phosphoryle un."
      },
      {
        "content": "Il dépend de la nature des acides gras estérifiés.",
        "correct": true,
        "explanation": "Longueur et insaturation influencent l'empilement."
      },
      {
        "content": "Elle forme directement de la phosphatidylcholine en une étape.",
        "correct": false,
        "explanation": "Plusieurs étapes de biosynthèse sont nécessaires."
      }
    ],
    "explanation": "La glycérol kinase forme le glycérol-3-phosphate, intermédiaire central du métabolisme des glycérolipides. Le point de fusion des TAG dépend de leur composition ; l'insaturation cis tend à l'abaisser."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le stockage des triacylglycérols ?",
    "choices": [
      {
        "content": "Ils sont fortement solubles dans le cytosol aqueux.",
        "correct": false,
        "explanation": "Ils sont hydrophobes."
      },
      {
        "content": "Ils stockent des acides gras sous une forme globalement neutre et très hydrophobe.",
        "correct": true,
        "explanation": "Ils s'accumulent dans des gouttelettes lipidiques."
      },
      {
        "content": "Ils sont stockés principalement dans le noyau sous forme de chromosomes.",
        "correct": false,
        "explanation": "Ils s'accumulent dans des gouttelettes lipidiques."
      },
      {
        "content": "Le stockage sous forme de TAG évite d'accumuler de fortes concentrations d'acides gras libres.",
        "correct": true,
        "explanation": "Les acides gras libres peuvent perturber les membranes et le métabolisme."
      },
      {
        "content": "Ils constituent une réserve de glucose polymérisé.",
        "correct": false,
        "explanation": "Cela décrit le glycogène."
      }
    ],
    "explanation": "Les TAG constituent la grande réserve lipidique des adipocytes sous forme de gouttelettes hydrophobes."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quels deux types de produits principaux résultent de l'hydrolyse complète d'un triacylglycérol ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glycérol et acides gras",
        "acides gras et glycérol",
        "glycerol et acides gras"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les TAG stockent des acides gras mobilisables ; leur hydrolyse libère glycérol et acides gras."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant le point de fusion des triacylglycérols, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Le point de fusion est indépendant des chaînes acyles.",
        "correct": false,
        "explanation": "Leur structure est déterminante."
      },
      {
        "content": "Tous les TAG contenant un acide gras saturé sont nécessairement solides à 37 °C.",
        "correct": false,
        "explanation": "La propriété dépend de l'ensemble de la composition."
      },
      {
        "content": "Il dépend de la nature des acides gras estérifiés.",
        "correct": true,
        "explanation": "Longueur et insaturation influencent l'empilement."
      },
      {
        "content": "Un mélange naturel de TAG peut avoir un comportement de fusion étalé.",
        "correct": true,
        "explanation": "Il ne s'agit pas nécessairement d'un composé pur."
      },
      {
        "content": "Tous les TAG naturels ont un point de fusion unique identique.",
        "correct": false,
        "explanation": "Leur composition varie."
      }
    ],
    "explanation": "Le point de fusion des TAG dépend de leur composition ; l'insaturation cis tend à l'abaisser.",
    "requiredSelectionCount": 2
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les propriétés physiques des réserves lipidiques ?",
    "choices": [
      {
        "content": "La faible polarité des TAG favorise leur stockage sans eau associée en grande quantité.",
        "correct": true,
        "explanation": "Cela contribue à la densité énergétique du stockage."
      },
      {
        "content": "Les TAG sont d'excellents conducteurs électriques et thermiques.",
        "correct": false,
        "explanation": "Ils sont de mauvais conducteurs thermiques."
      },
      {
        "content": "Ces propriétés complètent leur fonction de réserve énergétique.",
        "correct": true,
        "explanation": "Un même tissu peut avoir plusieurs fonctions."
      },
      {
        "content": "Les TAG sont stockés avec une très grande quantité d'eau grâce à leur forte hydrophilie.",
        "correct": false,
        "explanation": "Ils sont hydrophobes."
      },
      {
        "content": "Les TAG conduisent mal la chaleur comparativement à l'eau et aux tissus riches en eau.",
        "correct": true,
        "explanation": "Le tissu adipeux participe à l'isolation thermique."
      }
    ],
    "explanation": "Le stockage de TAG contribue à la réserve énergétique mais aussi à l'isolation thermique et à la protection mécanique."
  }
];
