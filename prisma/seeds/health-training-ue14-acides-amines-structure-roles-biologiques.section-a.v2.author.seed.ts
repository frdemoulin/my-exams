import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Acides aminés : structure et rôles biologiques — Section A — Généralités, structure et besoins nutritionnels */
export const UE14_BIOCH_CH9_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les acides aminés protéinogènes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La séquence des acides aminés n'influence pas la structure d'une protéine.",
        "correct": false,
        "explanation": "Elle est déterminante."
      },
      {
        "content": "Le monde vivant contient de nombreux acides aminés non standards.",
        "correct": true,
        "explanation": "Tous ne sont pas directement codés comme constituants usuels des protéines humaines."
      },
      {
        "content": "L'ordre des résidus constitue la séquence de la protéine.",
        "correct": true,
        "explanation": "La séquence influence le repliement et la fonction."
      },
      {
        "content": "Le terme résidu désigne uniquement un acide gras.",
        "correct": false,
        "explanation": "En biochimie des protéines, il désigne un acide aminé incorporé."
      },
      {
        "content": "Toutes les molécules appelées acides aminés sont incorporées dans les protéines humaines.",
        "correct": false,
        "explanation": "Seul un sous-ensemble standard est utilisé couramment par la machinerie de traduction humaine."
      }
    ],
    "explanation": "Les protéines humaines sont constituées principalement de vingt acides aminés standards assemblés en résidus."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien d'acides aminés standards sont couramment utilisés pour constituer les protéines humaines ?",
    "answer": {
      "type": "number",
      "value": 20,
      "tolerance": 0
    },
    "explanation": "Les protéines humaines sont constituées principalement de vingt acides aminés standards."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel est le code à trois lettres de l'alanine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Ala",
        "ALA",
        "ala"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les acides aminés standards possèdent des codes conventionnels à trois lettres et à une lettre."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les acides aminés indispensables chez l'adulte, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'arginine fait systématiquement partie des neuf acides aminés indispensables de l'adulte sain.",
        "correct": false,
        "explanation": "Elle est plutôt classée comme conditionnellement indispensable selon le contexte."
      },
      {
        "content": "La phénylalanine et la méthionine sont indispensables.",
        "correct": true,
        "explanation": "Elles servent aussi de précurseurs respectifs de tyrosine et cystéine."
      },
      {
        "content": "Leucine, isoleucine et valine font partie des acides aminés indispensables.",
        "correct": true,
        "explanation": "Ce sont également les trois acides aminés à chaîne ramifiée."
      },
      {
        "content": "L'histidine fait partie des neuf acides aminés indispensables chez l'adulte.",
        "correct": true,
        "explanation": "Elle ne doit pas être limitée au nourrisson."
      },
      {
        "content": "Un acide aminé indispensable ne se trouve pas dans les aliments.",
        "correct": false,
        "explanation": "Au contraire, l'alimentation doit en apporter."
      }
    ],
    "explanation": "Chez l'adulte sain, neuf acides aminés sont indispensables : His, Ile, Leu, Lys, Met, Phe, Thr, Trp et Val."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant l'arginine et la notion de conditionnellement indispensable, laquelle est correcte ?",
    "choices": [
      {
        "content": "L'arginine est toujours strictement indispensable chez tout adulte sain.",
        "correct": false,
        "explanation": "La synthèse endogène est généralement suffisante hors situations particulières."
      },
      {
        "content": "L'arginine ne contient aucun azote dans sa chaîne latérale.",
        "correct": false,
        "explanation": "Elle porte un groupement guanidinium riche en azote."
      },
      {
        "content": "L'arginine peut devenir conditionnellement indispensable lorsque les besoins dépassent la capacité de synthèse.",
        "correct": true,
        "explanation": "C'est le cas dans certaines situations de croissance ou de stress métabolique."
      },
      {
        "content": "L'arginine n'a aucun rôle métabolique en dehors des protéines.",
        "correct": false,
        "explanation": "Elle participe notamment au cycle de l'urée et à la synthèse de NO."
      },
      {
        "content": "Conditionnellement indispensable signifie toxique en dehors de la croissance.",
        "correct": false,
        "explanation": "Cela décrit un besoin nutritionnel dépendant du contexte."
      }
    ],
    "explanation": "L'arginine est généralement synthétisable chez l'adulte, mais les besoins peuvent dépasser la synthèse endogène dans certains contextes."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant la glycine comme exception structurale, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "La glycine est l'acide aminé standard le plus volumineux.",
        "correct": false,
        "explanation": "C'est le plus petit."
      },
      {
        "content": "La glycine n'a donc pas de série D/L au sens d'un centre chiral alpha.",
        "correct": true,
        "explanation": "Elle est achirale."
      },
      {
        "content": "Son carbone alpha n'est pas chiral.",
        "correct": true,
        "explanation": "Il porte deux hydrogènes identiques."
      },
      {
        "content": "La glycine possède un groupement thiol.",
        "correct": false,
        "explanation": "Cela décrit la cystéine."
      },
      {
        "content": "La glycine possède obligatoirement deux énantiomères.",
        "correct": false,
        "explanation": "Elle est achirale."
      }
    ],
    "explanation": "La glycine est unique parmi les vingt acides aminés standards : R=H et Cα achiral.",
    "requiredSelectionCount": 2
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans une application de ce principe, concernant les acides aminés protéinogènes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le terme résidu désigne uniquement un acide gras.",
        "correct": false,
        "explanation": "En biochimie des protéines, il désigne un acide aminé incorporé."
      },
      {
        "content": "Une fois incorporé dans une chaîne polypeptidique, un acide aminé est appelé résidu.",
        "correct": true,
        "explanation": "La liaison peptidique s'accompagne de la perte des éléments d'une molécule d'eau."
      },
      {
        "content": "L'ordre des résidus constitue la séquence de la protéine.",
        "correct": true,
        "explanation": "La séquence influence le repliement et la fonction."
      },
      {
        "content": "Le monde vivant contient de nombreux acides aminés non standards.",
        "correct": true,
        "explanation": "Tous ne sont pas directement codés comme constituants usuels des protéines humaines."
      },
      {
        "content": "Les protéines humaines utilisent couramment vingt acides aminés standards.",
        "correct": true,
        "explanation": "Il s'agit des vingt acides aminés canoniques du code génétique humain."
      }
    ],
    "explanation": "Les protéines humaines sont constituées principalement de vingt acides aminés standards assemblés en résidus."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel élément de la structure varie principalement d'un acide aminé standard à l'autre ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "chaîne latérale R",
        "radical R",
        "R",
        "chaine laterale"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La structure commune est centrée sur Cα ; la chaîne latérale R donne l'identité chimique de l'acide aminé."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant la nomenclature des acides aminés ?",
    "choices": [
      {
        "content": "Un même code à une lettre désigne indifféremment plusieurs acides aminés standards.",
        "correct": false,
        "explanation": "Les codes standards sont univoques."
      },
      {
        "content": "Le code à trois lettres de l'alanine est Ala.",
        "correct": true,
        "explanation": "Le code à une lettre est A."
      },
      {
        "content": "Le code à une lettre de la glycine est A.",
        "correct": false,
        "explanation": "G correspond à la glycine."
      },
      {
        "content": "Le code à trois lettres de l'alanine est Gly.",
        "correct": false,
        "explanation": "Gly désigne la glycine."
      },
      {
        "content": "Les codes à une lettre ne peuvent jamais être utilisés dans une séquence.",
        "correct": false,
        "explanation": "Ils sont précisément conçus pour cela."
      }
    ],
    "explanation": "Les acides aminés standards possèdent des codes conventionnels à trois lettres et à une lettre."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans une application de ce principe, concernant les acides aminés indispensables chez l'adulte, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'arginine fait systématiquement partie des neuf acides aminés indispensables de l'adulte sain.",
        "correct": false,
        "explanation": "Elle est plutôt classée comme conditionnellement indispensable selon le contexte."
      },
      {
        "content": "Un acide aminé indispensable ne se trouve pas dans les aliments.",
        "correct": false,
        "explanation": "Au contraire, l'alimentation doit en apporter."
      },
      {
        "content": "Leucine, isoleucine et valine font partie des acides aminés indispensables.",
        "correct": true,
        "explanation": "Ce sont également les trois acides aminés à chaîne ramifiée."
      },
      {
        "content": "La glycine est toujours un acide aminé indispensable chez l'adulte sain.",
        "correct": false,
        "explanation": "Elle est généralement synthétisable."
      },
      {
        "content": "Neuf acides aminés sont classiquement indispensables chez l'adulte humain sain.",
        "correct": true,
        "explanation": "Ils doivent être apportés en quantité suffisante par l'alimentation."
      }
    ],
    "explanation": "Chez l'adulte sain, neuf acides aminés sont indispensables : His, Ile, Leu, Lys, Met, Phe, Thr, Trp et Val."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les acides aminés protéinogènes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Toutes les molécules appelées acides aminés sont incorporées dans les protéines humaines.",
        "correct": false,
        "explanation": "Seul un sous-ensemble standard est utilisé couramment par la machinerie de traduction humaine."
      },
      {
        "content": "Une protéine est un polymère de monosaccharides.",
        "correct": false,
        "explanation": "Elle est formée de résidus d'acides aminés."
      },
      {
        "content": "L'ordre des résidus constitue la séquence de la protéine.",
        "correct": true,
        "explanation": "La séquence influence le repliement et la fonction."
      },
      {
        "content": "La séquence des acides aminés n'influence pas la structure d'une protéine.",
        "correct": false,
        "explanation": "Elle est déterminante."
      },
      {
        "content": "Une fois incorporé dans une chaîne polypeptidique, un acide aminé est appelé résidu.",
        "correct": true,
        "explanation": "La liaison peptidique s'accompagne de la perte des éléments d'une molécule d'eau."
      }
    ],
    "explanation": "Les protéines humaines sont constituées principalement de vingt acides aminés standards assemblés en résidus."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien d'acides aminés sont classiquement indispensables chez l'adulte humain sain ?",
    "answer": {
      "type": "number",
      "value": 9,
      "tolerance": 0
    },
    "explanation": "Chez l'adulte sain, neuf acides aminés sont indispensables, dont l'histidine."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant la nomenclature des acides aminés ?",
    "choices": [
      {
        "content": "Un même code à une lettre désigne indifféremment plusieurs acides aminés standards.",
        "correct": false,
        "explanation": "Les codes standards sont univoques."
      },
      {
        "content": "Le code à une lettre de la glycine est A.",
        "correct": false,
        "explanation": "G correspond à la glycine."
      },
      {
        "content": "Les codes à une lettre ne peuvent jamais être utilisés dans une séquence.",
        "correct": false,
        "explanation": "Ils sont précisément conçus pour cela."
      },
      {
        "content": "Le code à trois lettres de l'alanine est Gly.",
        "correct": false,
        "explanation": "Gly désigne la glycine."
      },
      {
        "content": "Chaque acide aminé standard possède un nom, un code à trois lettres et un code à une lettre.",
        "correct": true,
        "explanation": "Ces codes sont utilisés dans les séquences."
      }
    ],
    "explanation": "Les acides aminés standards possèdent des codes conventionnels à trois lettres et à une lettre."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les acides aminés indispensables chez l'adulte, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Leucine, isoleucine et valine font partie des acides aminés indispensables.",
        "correct": true,
        "explanation": "Ce sont également les trois acides aminés à chaîne ramifiée."
      },
      {
        "content": "La phénylalanine et la méthionine sont indispensables.",
        "correct": true,
        "explanation": "Elles servent aussi de précurseurs respectifs de tyrosine et cystéine."
      },
      {
        "content": "L'histidine n'est indispensable que chez le nourrisson.",
        "correct": false,
        "explanation": "Elle est aussi indispensable chez l'adulte."
      },
      {
        "content": "Neuf acides aminés sont classiquement indispensables chez l'adulte humain sain.",
        "correct": true,
        "explanation": "Ils doivent être apportés en quantité suffisante par l'alimentation."
      },
      {
        "content": "L'arginine fait systématiquement partie des neuf acides aminés indispensables de l'adulte sain.",
        "correct": false,
        "explanation": "Elle est plutôt classée comme conditionnellement indispensable selon le contexte."
      }
    ],
    "explanation": "Chez l'adulte sain, neuf acides aminés sont indispensables : His, Ile, Leu, Lys, Met, Phe, Thr, Trp et Val."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel acide aminé basique est généralement classé comme conditionnellement indispensable plutôt que systématiquement indispensable chez l'adulte sain ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "arginine",
        "l'arginine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'arginine est synthétisable chez l'adulte, mais peut devenir conditionnellement indispensable lorsque les besoins dépassent la synthèse endogène."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la glycine comme exception structurale ?",
    "choices": [
      {
        "content": "La chaîne latérale de la glycine est un hydrogène.",
        "correct": true,
        "explanation": "Elle est l'acide aminé standard le plus simple."
      },
      {
        "content": "Son carbone alpha n'est pas chiral.",
        "correct": true,
        "explanation": "Il porte deux hydrogènes identiques."
      },
      {
        "content": "La glycine n'a donc pas de série D/L au sens d'un centre chiral alpha.",
        "correct": true,
        "explanation": "Elle est achirale."
      },
      {
        "content": "La glycine possède obligatoirement deux énantiomères.",
        "correct": false,
        "explanation": "Elle est achirale."
      },
      {
        "content": "Sa petite taille confère une grande flexibilité locale aux chaînes polypeptidiques.",
        "correct": true,
        "explanation": "Elle est fréquente dans les régions exigeant peu d'encombrement."
      }
    ],
    "explanation": "La glycine est unique parmi les vingt acides aminés standards : R=H et Cα achiral."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien d'acides aminés standards sont couramment utilisés pour constituer les protéines humaines ?",
    "answer": {
      "type": "number",
      "value": 20,
      "tolerance": 0
    },
    "explanation": "Les protéines humaines sont constituées principalement de vingt acides aminés standards assemblés en résidus."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la structure commune d'un acide alpha-aminé, laquelle est correcte ?",
    "choices": [
      {
        "content": "À pH physiologique, les fonctions alpha-amine et alpha-carboxyle sont généralement ionisées.",
        "correct": true,
        "explanation": "La forme zwitterionique est alors importante."
      },
      {
        "content": "Le carbone alpha ne porte jamais d'hydrogène.",
        "correct": false,
        "explanation": "Il en porte un dans tous les acides aminés standards, sauf que la glycine en porte deux au total au Cα."
      },
      {
        "content": "La fonction carboxyle est portée par la chaîne latérale de tous les acides aminés.",
        "correct": false,
        "explanation": "Elle appartient à la structure commune."
      },
      {
        "content": "Les acides aminés protéinogènes sont des bêta-aminoacides.",
        "correct": false,
        "explanation": "Ils sont principalement des alpha-aminoacides."
      },
      {
        "content": "Le radical R est identique pour tous les acides aminés.",
        "correct": false,
        "explanation": "Il varie d'un acide aminé à l'autre."
      }
    ],
    "explanation": "La structure commune est centrée sur Cα ; la chaîne latérale R donne l'identité chimique de l'acide aminé."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la nomenclature des acides aminés ?",
    "choices": [
      {
        "content": "Le code à une lettre de la glycine est A.",
        "correct": false,
        "explanation": "G correspond à la glycine."
      },
      {
        "content": "Chaque acide aminé standard possède un nom, un code à trois lettres et un code à une lettre.",
        "correct": true,
        "explanation": "Ces codes sont utilisés dans les séquences."
      },
      {
        "content": "Les codes à une lettre ne peuvent jamais être utilisés dans une séquence.",
        "correct": false,
        "explanation": "Ils sont précisément conçus pour cela."
      },
      {
        "content": "Les codes à une lettre permettent une écriture compacte des séquences protéiques.",
        "correct": true,
        "explanation": "Ils sont standardisés."
      },
      {
        "content": "Un même code à une lettre désigne indifféremment plusieurs acides aminés standards.",
        "correct": false,
        "explanation": "Les codes standards sont univoques."
      }
    ],
    "explanation": "Les acides aminés standards possèdent des codes conventionnels à trois lettres et à une lettre."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "L'histidine n'est indispensable que chez le nourrisson.",
        "correct": false,
        "explanation": "Elle est aussi indispensable chez l'adulte."
      },
      {
        "content": "L'histidine fait partie des neuf acides aminés indispensables chez l'adulte.",
        "correct": true,
        "explanation": "Elle ne doit pas être limitée au nourrisson."
      },
      {
        "content": "L'arginine fait systématiquement partie des neuf acides aminés indispensables de l'adulte sain.",
        "correct": false,
        "explanation": "Elle est plutôt classée comme conditionnellement indispensable selon le contexte."
      },
      {
        "content": "Une fois incorporé dans une chaîne polypeptidique, un acide aminé est appelé résidu.",
        "correct": true,
        "explanation": "La liaison peptidique s'accompagne de la perte des éléments d'une molécule d'eau."
      },
      {
        "content": "La séquence des acides aminés n'influence pas la structure d'une protéine.",
        "correct": false,
        "explanation": "Elle est déterminante."
      },
      {
        "content": "Neuf acides aminés sont classiquement indispensables chez l'adulte humain sain.",
        "correct": true,
        "explanation": "Ils doivent être apportés en quantité suffisante par l'alimentation."
      },
      {
        "content": "L'ordre des résidus constitue la séquence de la protéine.",
        "correct": true,
        "explanation": "La séquence influence le repliement et la fonction."
      },
      {
        "content": "Le monde vivant contient de nombreux acides aminés non standards.",
        "correct": true,
        "explanation": "Tous ne sont pas directement codés comme constituants usuels des protéines humaines."
      },
      {
        "content": "La glycine est toujours un acide aminé indispensable chez l'adulte sain.",
        "correct": false,
        "explanation": "Elle est généralement synthétisable."
      },
      {
        "content": "Toutes les molécules appelées acides aminés sont incorporées dans les protéines humaines.",
        "correct": false,
        "explanation": "Seul un sous-ensemble standard est utilisé couramment par la machinerie de traduction humaine."
      }
    ],
    "explanation": "Chez l'adulte sain, neuf acides aminés sont indispensables : His, Ile, Leu, Lys, Met, Phe, Thr, Trp et Val. Les protéines humaines sont constituées principalement de vingt acides aminés standards assemblés en résidus."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant l'arginine et la notion de conditionnellement indispensable, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Le terme conditionnellement indispensable dépend du contexte physiologique ou pathologique.",
        "correct": true,
        "explanation": "Ce n'est pas une propriété absolue identique à tout âge."
      },
      {
        "content": "L'arginine est toujours strictement indispensable chez tout adulte sain.",
        "correct": false,
        "explanation": "La synthèse endogène est généralement suffisante hors situations particulières."
      },
      {
        "content": "L'arginine peut devenir conditionnellement indispensable lorsque les besoins dépassent la capacité de synthèse.",
        "correct": true,
        "explanation": "C'est le cas dans certaines situations de croissance ou de stress métabolique."
      },
      {
        "content": "Conditionnellement indispensable signifie toxique en dehors de la croissance.",
        "correct": false,
        "explanation": "Cela décrit un besoin nutritionnel dépendant du contexte."
      },
      {
        "content": "L'arginine est un précurseur du monoxyde d'azote.",
        "correct": true,
        "explanation": "La NO synthase utilise l'arginine."
      }
    ],
    "explanation": "L'arginine est généralement synthétisable chez l'adulte, mais les besoins peuvent dépasser la synthèse endogène dans certains contextes."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est le radical R de la glycine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "hydrogène",
        "H",
        "un hydrogène"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La glycine est unique parmi les vingt acides aminés standards : R=H et Cα achiral."
  }
];
