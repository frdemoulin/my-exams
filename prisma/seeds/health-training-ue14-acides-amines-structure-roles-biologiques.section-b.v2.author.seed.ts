import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Acides aminés : structure et rôles biologiques — Section B — Classification selon la chaîne latérale */
export const UE14_BIOCH_CH9_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les acides aminés aliphatiques hydrophobes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Tous les acides aminés aliphatiques possèdent un noyau benzénique.",
        "correct": false,
        "explanation": "Ce serait un caractère aromatique."
      },
      {
        "content": "Valine, leucine et isoleucine sont des acides aminés à chaîne ramifiée.",
        "correct": true,
        "explanation": "Ils sont souvent abrégés BCAA."
      },
      {
        "content": "La chaîne latérale de l'alanine est un phénol.",
        "correct": false,
        "explanation": "C'est un méthyle."
      },
      {
        "content": "Le caractère aliphatique implique une forte charge positive à pH physiologique.",
        "correct": false,
        "explanation": "Ce n'est pas une conséquence du caractère aliphatique."
      },
      {
        "content": "La glycine possède une chaîne latérale réduite à H.",
        "correct": true,
        "explanation": "Elle est souvent classée à part malgré sa simplicité aliphatique."
      }
    ],
    "explanation": "Valine, leucine et isoleucine sont les trois acides aminés standards à chaîne ramifiée."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la valine, la leucine et l'isoleucine, laquelle est correcte ?",
    "choices": [
      {
        "content": "Leucine et isoleucine portent toutes deux exactement un groupement isobutyle.",
        "correct": false,
        "explanation": "L'isoleucine porte un sec-butyle."
      },
      {
        "content": "La valine porte un groupement phényle.",
        "correct": false,
        "explanation": "La phénylalanine porte un phényle."
      },
      {
        "content": "La leucine porte un groupement isobutyle.",
        "correct": true,
        "explanation": "La ramification est différente de celle de l'isoleucine."
      },
      {
        "content": "Leucine et isoleucine sont des énantiomères l'une de l'autre.",
        "correct": false,
        "explanation": "Ce sont des isomères de constitution."
      },
      {
        "content": "L'isoleucine est un acide aminé soufré.",
        "correct": false,
        "explanation": "Elle ne contient pas de soufre."
      }
    ],
    "explanation": "Isoleucine et leucine sont des isomères de constitution ; leurs chaînes latérales sont respectivement sec-butyle et isobutyle."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel acide aminé hydroxylé possède un alcool primaire dans sa chaîne latérale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sérine",
        "serine",
        "la sérine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Sérine et thréonine sont des acides aminés hydroxylés, respectivement alcool primaire et secondaire."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les acides aminés soufrés, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La cystéine est toujours totalement apolaire.",
        "correct": false,
        "explanation": "Son thiol lui confère une certaine polarité et une réactivité particulière."
      },
      {
        "content": "La méthionine est un acide aminé indispensable chez l'adulte.",
        "correct": true,
        "explanation": "Elle peut servir de précurseur soufré pour la cystéine."
      },
      {
        "content": "Une liaison disulfure se forme directement entre deux méthionines.",
        "correct": false,
        "explanation": "Elle se forme entre deux cystéines."
      },
      {
        "content": "La cystéine possède un groupement thiol.",
        "correct": true,
        "explanation": "Deux cystéines peuvent former une liaison disulfure après oxydation."
      },
      {
        "content": "La cystéine est plus polaire que la méthionine.",
        "correct": true,
        "explanation": "Le thiol est plus polarisable et chimiquement réactif."
      }
    ],
    "explanation": "Cystéine et méthionine sont les deux acides aminés standards soufrés : thiol pour Cys, thioéther pour Met."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les acides aminés acides et leurs amides, laquelle est correcte ?",
    "choices": [
      {
        "content": "Asparagine et glutamine portent une charge négative obligatoire à pH physiologique.",
        "correct": false,
        "explanation": "Leurs amides sont neutres."
      },
      {
        "content": "Aspartate et glutamate sont des acides aminés basiques.",
        "correct": false,
        "explanation": "Ils sont acides."
      },
      {
        "content": "La glutamine est l'amide correspondant au glutamate.",
        "correct": true,
        "explanation": "Elle est polaire mais non chargée aux pH physiologiques usuels."
      },
      {
        "content": "L'asparagine correspond à l'amide du glutamate.",
        "correct": false,
        "explanation": "Elle correspond à l'aspartate."
      },
      {
        "content": "Aspartate et glutamate sont dépourvus d'oxygène dans la chaîne latérale.",
        "correct": false,
        "explanation": "Ils portent un carboxylate."
      }
    ],
    "explanation": "Asp/Glu sont acides ; Asn/Gln sont leurs amides neutres correspondants."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant la lysine, l'arginine et l'histidine, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "La lysine porte un groupement carboxylate supplémentaire.",
        "correct": false,
        "explanation": "Cela décrit Asp/Glu."
      },
      {
        "content": "La lysine porte une fonction amine epsilon généralement protonée à pH physiologique.",
        "correct": true,
        "explanation": "Sa chaîne latérale est donc basique et positive."
      },
      {
        "content": "L'arginine porte un groupement guanidinium fortement basique.",
        "correct": true,
        "explanation": "Il est positivement chargé aux pH physiologiques usuels."
      },
      {
        "content": "L'arginine porte un groupement phénol.",
        "correct": false,
        "explanation": "Cela décrit la tyrosine."
      },
      {
        "content": "L'arginine est un acide aminé acide.",
        "correct": false,
        "explanation": "Elle est basique."
      }
    ],
    "explanation": "Lys et Arg sont fortement basiques ; His possède un imidazole dont l'état de protonation varie près du pH physiologique.",
    "requiredSelectionCount": 2
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel groupement alkyle constitue la chaîne latérale de l'isoleucine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sec-butyle",
        "sec butyle",
        "butan-2-yle",
        "butan-2-yl"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La leucine porte un isobutyle, tandis que l'isoleucine porte un sec-butyle : elles sont isomères de constitution."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel type de groupement alkyle constitue la chaîne latérale de l'isoleucine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sec-butyle",
        "sec butyle",
        "butan-2-yle",
        "butan-2-yl"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Isoleucine et leucine sont des isomères de constitution ; leurs chaînes latérales sont respectivement sec-butyle et isobutyle."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant les acides aminés hydroxylés ?",
    "choices": [
      {
        "content": "La thréonine est un acide aminé aromatique.",
        "correct": false,
        "explanation": "Elle est aliphatique hydroxylée."
      },
      {
        "content": "Sérine et thréonine sont toujours hydrophobes.",
        "correct": false,
        "explanation": "Leur OH leur confère une polarité."
      },
      {
        "content": "Leurs groupements hydroxyle peuvent être phosphorylés dans les protéines.",
        "correct": true,
        "explanation": "Cette modification est centrale en signalisation."
      },
      {
        "content": "Le OH de la sérine est fortement déprotoné à pH physiologique.",
        "correct": false,
        "explanation": "Il reste majoritairement neutre."
      },
      {
        "content": "La sérine porte un groupement thiol.",
        "correct": false,
        "explanation": "Cela décrit la cystéine."
      }
    ],
    "explanation": "Sérine et thréonine sont des acides aminés hydroxylés, respectivement alcool primaire et secondaire."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans une application de ce principe, concernant les acides aminés soufrés, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La cystéine est toujours totalement apolaire.",
        "correct": false,
        "explanation": "Son thiol lui confère une certaine polarité et une réactivité particulière."
      },
      {
        "content": "La méthionine possède un thioéther.",
        "correct": true,
        "explanation": "Son soufre n'est pas un thiol libre."
      },
      {
        "content": "La méthionine ne contient aucun soufre.",
        "correct": false,
        "explanation": "Elle contient un thioéther."
      },
      {
        "content": "La méthionine est un acide aminé indispensable chez l'adulte.",
        "correct": true,
        "explanation": "Elle peut servir de précurseur soufré pour la cystéine."
      },
      {
        "content": "Une liaison disulfure se forme directement entre deux méthionines.",
        "correct": false,
        "explanation": "Elle se forme entre deux cystéines."
      }
    ],
    "explanation": "Cystéine et méthionine sont les deux acides aminés standards soufrés : thiol pour Cys, thioéther pour Met."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les acides aminés aliphatiques hydrophobes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Valine, leucine et isoleucine sont des acides aminés soufrés.",
        "correct": false,
        "explanation": "Ils ne contiennent pas de soufre."
      },
      {
        "content": "Valine, leucine et isoleucine sont des acides aminés à chaîne ramifiée.",
        "correct": true,
        "explanation": "Ils sont souvent abrégés BCAA."
      },
      {
        "content": "Le caractère aliphatique implique une forte charge positive à pH physiologique.",
        "correct": false,
        "explanation": "Ce n'est pas une conséquence du caractère aliphatique."
      },
      {
        "content": "Tous les acides aminés aliphatiques possèdent un noyau benzénique.",
        "correct": false,
        "explanation": "Ce serait un caractère aromatique."
      },
      {
        "content": "Alanine, valine, leucine et isoleucine possèdent des chaînes latérales aliphatiques hydrophobes.",
        "correct": true,
        "explanation": "Leur caractère hydrophobe augmente globalement avec la taille de la chaîne."
      }
    ],
    "explanation": "Valine, leucine et isoleucine sont les trois acides aminés standards à chaîne ramifiée."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de groupement alkyle constitue la chaîne latérale de l'isoleucine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sec-butyle",
        "sec butyle",
        "butan-2-yle",
        "butan-2-yl"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Isoleucine et leucine sont des isomères de constitution ; leurs chaînes latérales sont respectivement sec-butyle et isobutyle."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant les acides aminés hydroxylés ?",
    "choices": [
      {
        "content": "La thréonine est un acide aminé aromatique.",
        "correct": false,
        "explanation": "Elle est aliphatique hydroxylée."
      },
      {
        "content": "Sérine et thréonine sont toujours hydrophobes.",
        "correct": false,
        "explanation": "Leur OH leur confère une polarité."
      },
      {
        "content": "Le OH de la sérine est fortement déprotoné à pH physiologique.",
        "correct": false,
        "explanation": "Il reste majoritairement neutre."
      },
      {
        "content": "La sérine possède un groupement hydroxyméthyle.",
        "correct": true,
        "explanation": "Son OH est porté par un carbone primaire de la chaîne latérale."
      },
      {
        "content": "La sérine porte un groupement thiol.",
        "correct": false,
        "explanation": "Cela décrit la cystéine."
      }
    ],
    "explanation": "Sérine et thréonine sont des acides aminés hydroxylés, respectivement alcool primaire et secondaire."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les acides aminés soufrés, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La cystéine possède un groupement thiol.",
        "correct": true,
        "explanation": "Deux cystéines peuvent former une liaison disulfure après oxydation."
      },
      {
        "content": "La cystéine possède un thioéther et la méthionine un thiol.",
        "correct": false,
        "explanation": "C'est l'inverse."
      },
      {
        "content": "La méthionine est un acide aminé indispensable chez l'adulte.",
        "correct": true,
        "explanation": "Elle peut servir de précurseur soufré pour la cystéine."
      },
      {
        "content": "La méthionine ne contient aucun soufre.",
        "correct": false,
        "explanation": "Elle contient un thioéther."
      },
      {
        "content": "La cystéine est plus polaire que la méthionine.",
        "correct": true,
        "explanation": "Le thiol est plus polarisable et chimiquement réactif."
      }
    ],
    "explanation": "Cystéine et méthionine sont les deux acides aminés standards soufrés : thiol pour Cys, thioéther pour Met."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant les acides aminés acides et leurs amides, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "La glutamine est l'amide correspondant au glutamate.",
        "correct": true,
        "explanation": "Elle est polaire mais non chargée aux pH physiologiques usuels."
      },
      {
        "content": "Asparagine et glutamine portent une charge négative obligatoire à pH physiologique.",
        "correct": false,
        "explanation": "Leurs amides sont neutres."
      },
      {
        "content": "Aspartate et glutamate sont dépourvus d'oxygène dans la chaîne latérale.",
        "correct": false,
        "explanation": "Ils portent un carboxylate."
      },
      {
        "content": "Aspartate et glutamate sont des acides aminés basiques.",
        "correct": false,
        "explanation": "Ils sont acides."
      },
      {
        "content": "L'aspartate et le glutamate portent un carboxylate supplémentaire dans leur chaîne latérale à pH physiologique.",
        "correct": true,
        "explanation": "Ils sont donc chargés négativement dans ces conditions."
      }
    ],
    "explanation": "Asp/Glu sont acides ; Asn/Gln sont leurs amides neutres correspondants.",
    "requiredSelectionCount": 2
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la lysine, l'arginine et l'histidine ?",
    "choices": [
      {
        "content": "L'arginine porte un groupement guanidinium fortement basique.",
        "correct": true,
        "explanation": "Il est positivement chargé aux pH physiologiques usuels."
      },
      {
        "content": "À pH physiologique, la chaîne latérale de l'histidine est souvent majoritairement neutre mais facilement protonable.",
        "correct": true,
        "explanation": "Elle ne doit pas être décrite comme uniformément positive dans toutes les protéines."
      },
      {
        "content": "L'histidine porte un noyau imidazole.",
        "correct": true,
        "explanation": "Son pKa proche de la neutralité en fait un résidu fréquent dans les catalyses acide-base."
      },
      {
        "content": "La lysine porte une fonction amine epsilon généralement protonée à pH physiologique.",
        "correct": true,
        "explanation": "Sa chaîne latérale est donc basique et positive."
      },
      {
        "content": "L'arginine porte un groupement phénol.",
        "correct": false,
        "explanation": "Cela décrit la tyrosine."
      }
    ],
    "explanation": "Lys et Arg sont fortement basiques ; His possède un imidazole dont l'état de protonation varie près du pH physiologique."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quels sont les trois acides aminés standards à chaîne latérale ramifiée ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "valine, leucine et isoleucine",
        "Val Leu Ile",
        "VLI",
        "leucine, isoleucine et valine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Valine, leucine et isoleucine sont les trois acides aminés standards à chaîne ramifiée."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la valine, la leucine et l'isoleucine, laquelle est correcte ?",
    "choices": [
      {
        "content": "Leucine et isoleucine portent toutes deux exactement un groupement isobutyle.",
        "correct": false,
        "explanation": "L'isoleucine porte un sec-butyle."
      },
      {
        "content": "La valine porte un groupement phényle.",
        "correct": false,
        "explanation": "La phénylalanine porte un phényle."
      },
      {
        "content": "L'isoleucine est un acide aminé soufré.",
        "correct": false,
        "explanation": "Elle ne contient pas de soufre."
      },
      {
        "content": "Leucine et isoleucine sont des énantiomères l'une de l'autre.",
        "correct": false,
        "explanation": "Ce sont des isomères de constitution."
      },
      {
        "content": "La leucine porte un groupement isobutyle.",
        "correct": true,
        "explanation": "La ramification est différente de celle de l'isoleucine."
      }
    ],
    "explanation": "Isoleucine et leucine sont des isomères de constitution ; leurs chaînes latérales sont respectivement sec-butyle et isobutyle."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les acides aminés hydroxylés ?",
    "choices": [
      {
        "content": "Leurs groupements hydroxyle peuvent être phosphorylés dans les protéines.",
        "correct": true,
        "explanation": "Cette modification est centrale en signalisation."
      },
      {
        "content": "Sérine et thréonine sont toujours hydrophobes.",
        "correct": false,
        "explanation": "Leur OH leur confère une polarité."
      },
      {
        "content": "La thréonine possède un alcool secondaire dans sa chaîne latérale.",
        "correct": true,
        "explanation": "Elle possède aussi un second centre stéréogène."
      },
      {
        "content": "La thréonine est un acide aminé aromatique.",
        "correct": false,
        "explanation": "Elle est aliphatique hydroxylée."
      },
      {
        "content": "Le OH de la sérine est fortement déprotoné à pH physiologique.",
        "correct": false,
        "explanation": "Il reste majoritairement neutre."
      }
    ],
    "explanation": "Sérine et thréonine sont des acides aminés hydroxylés, respectivement alcool primaire et secondaire."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Tous les acides aminés aliphatiques possèdent un noyau benzénique.",
        "correct": false,
        "explanation": "Ce serait un caractère aromatique."
      },
      {
        "content": "La chaîne latérale de l'alanine est un phénol.",
        "correct": false,
        "explanation": "C'est un méthyle."
      },
      {
        "content": "La cystéine possède un groupement thiol.",
        "correct": true,
        "explanation": "Deux cystéines peuvent former une liaison disulfure après oxydation."
      },
      {
        "content": "La cystéine possède un thioéther et la méthionine un thiol.",
        "correct": false,
        "explanation": "C'est l'inverse."
      },
      {
        "content": "La cystéine est plus polaire que la méthionine.",
        "correct": true,
        "explanation": "Le thiol est plus polarisable et chimiquement réactif."
      },
      {
        "content": "La cystéine est toujours totalement apolaire.",
        "correct": false,
        "explanation": "Son thiol lui confère une certaine polarité et une réactivité particulière."
      },
      {
        "content": "La proline possède une chaîne latérale aliphatique cyclisée sur l'azote alpha.",
        "correct": true,
        "explanation": "Sa géométrie est particulière."
      },
      {
        "content": "La glycine possède une chaîne latérale réduite à H.",
        "correct": true,
        "explanation": "Elle est souvent classée à part malgré sa simplicité aliphatique."
      },
      {
        "content": "Le caractère aliphatique implique une forte charge positive à pH physiologique.",
        "correct": false,
        "explanation": "Ce n'est pas une conséquence du caractère aliphatique."
      },
      {
        "content": "La méthionine possède un thioéther.",
        "correct": true,
        "explanation": "Son soufre n'est pas un thiol libre."
      }
    ],
    "explanation": "Cystéine et méthionine sont les deux acides aminés standards soufrés : thiol pour Cys, thioéther pour Met. Valine, leucine et isoleucine sont les trois acides aminés standards à chaîne ramifiée."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant les acides aminés acides et leurs amides, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "L'asparagine correspond à l'amide du glutamate.",
        "correct": false,
        "explanation": "Elle correspond à l'aspartate."
      },
      {
        "content": "Asparagine et glutamine portent une charge négative obligatoire à pH physiologique.",
        "correct": false,
        "explanation": "Leurs amides sont neutres."
      },
      {
        "content": "L'asparagine est l'amide correspondant à l'aspartate.",
        "correct": true,
        "explanation": "La chaîne latérale carboxamide remplace le carboxylate."
      },
      {
        "content": "L'aspartate et le glutamate portent un carboxylate supplémentaire dans leur chaîne latérale à pH physiologique.",
        "correct": true,
        "explanation": "Ils sont donc chargés négativement dans ces conditions."
      },
      {
        "content": "La glutamine est l'amide correspondant au glutamate.",
        "correct": true,
        "explanation": "Elle est polaire mais non chargée aux pH physiologiques usuels."
      }
    ],
    "explanation": "Asp/Glu sont acides ; Asn/Gln sont leurs amides neutres correspondants."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel noyau hétérocyclique caractérise la chaîne latérale de l'histidine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "imidazole",
        "noyau imidazole"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Lys et Arg sont fortement basiques ; His possède un imidazole dont l'état de protonation varie près du pH physiologique."
  }
];
