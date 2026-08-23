import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Acides aminés : structure et rôles biologiques — Synthèse — Acides aminés */
export const UE14_BIOCH_CH9_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les acides aminés protéinogènes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le terme résidu désigne uniquement un acide gras.",
        "correct": false,
        "explanation": "En biochimie des protéines, il désigne un acide aminé incorporé."
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
        "content": "Les protéines humaines utilisent couramment vingt acides aminés standards.",
        "correct": true,
        "explanation": "Il s'agit des vingt acides aminés canoniques du code génétique humain."
      },
      {
        "content": "La séquence des acides aminés n'influence pas la structure d'une protéine.",
        "correct": false,
        "explanation": "Elle est déterminante."
      }
    ],
    "explanation": "Les protéines humaines sont constituées principalement de vingt acides aminés standards assemblés en résidus."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
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
    "order": 103,
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
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les acides aminés indispensables chez l'adulte, quelles propositions sont exactes ?",
    "choices": [
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
        "content": "L'histidine fait partie des neuf acides aminés indispensables chez l'adulte.",
        "correct": true,
        "explanation": "Elle ne doit pas être limitée au nourrisson."
      },
      {
        "content": "Neuf acides aminés sont classiquement indispensables chez l'adulte humain sain.",
        "correct": true,
        "explanation": "Ils doivent être apportés en quantité suffisante par l'alimentation."
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
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant l'arginine et la notion de conditionnellement indispensable, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "L'arginine est toujours strictement indispensable chez tout adulte sain.",
        "correct": false,
        "explanation": "La synthèse endogène est généralement suffisante hors situations particulières."
      },
      {
        "content": "L'arginine n'a aucun rôle métabolique en dehors des protéines.",
        "correct": false,
        "explanation": "Elle participe notamment au cycle de l'urée et à la synthèse de NO."
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
        "content": "L'arginine intervient dans le cycle de l'urée.",
        "correct": true,
        "explanation": "Elle est un intermédiaire de cette voie."
      }
    ],
    "explanation": "L'arginine est généralement synthétisable chez l'adulte, mais les besoins peuvent dépasser la synthèse endogène dans certains contextes.",
    "requiredSelectionCount": 2
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la glycine comme exception structurale ?",
    "choices": [
      {
        "content": "Sa petite taille confère une grande flexibilité locale aux chaînes polypeptidiques.",
        "correct": true,
        "explanation": "Elle est fréquente dans les régions exigeant peu d'encombrement."
      },
      {
        "content": "Son carbone alpha n'est pas chiral.",
        "correct": true,
        "explanation": "Il porte deux hydrogènes identiques."
      },
      {
        "content": "La chaîne latérale de la glycine est un hydrogène.",
        "correct": true,
        "explanation": "Elle est l'acide aminé standard le plus simple."
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
      }
    ],
    "explanation": "La glycine est unique parmi les vingt acides aminés standards : R=H et Cα achiral."
  },
  {
    "order": 107,
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
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la valine, la leucine et l'isoleucine, laquelle est correcte ?",
    "choices": [
      {
        "content": "La leucine porte un groupement isobutyle.",
        "correct": true,
        "explanation": "La ramification est différente de celle de l'isoleucine."
      },
      {
        "content": "L'isoleucine est un acide aminé soufré.",
        "correct": false,
        "explanation": "Elle ne contient pas de soufre."
      },
      {
        "content": "Leucine et isoleucine portent toutes deux exactement un groupement isobutyle.",
        "correct": false,
        "explanation": "L'isoleucine porte un sec-butyle."
      },
      {
        "content": "Leucine et isoleucine sont des énantiomères l'une de l'autre.",
        "correct": false,
        "explanation": "Ce sont des isomères de constitution."
      },
      {
        "content": "La valine porte un groupement phényle.",
        "correct": false,
        "explanation": "La phénylalanine porte un phényle."
      }
    ],
    "explanation": "Isoleucine et leucine sont des isomères de constitution ; leurs chaînes latérales sont respectivement sec-butyle et isobutyle."
  },
  {
    "order": 109,
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
        "content": "La thréonine est un acide aminé aromatique.",
        "correct": false,
        "explanation": "Elle est aliphatique hydroxylée."
      },
      {
        "content": "La sérine porte un groupement thiol.",
        "correct": false,
        "explanation": "Cela décrit la cystéine."
      },
      {
        "content": "La sérine possède un groupement hydroxyméthyle.",
        "correct": true,
        "explanation": "Son OH est porté par un carbone primaire de la chaîne latérale."
      }
    ],
    "explanation": "Sérine et thréonine sont des acides aminés hydroxylés, respectivement alcool primaire et secondaire."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La tyrosine ne possède aucun groupement hydroxyle.",
        "correct": false,
        "explanation": "Elle porte un phénol."
      },
      {
        "content": "La cystéine possède un thioéther et la méthionine un thiol.",
        "correct": false,
        "explanation": "C'est l'inverse."
      },
      {
        "content": "Une liaison disulfure se forme directement entre deux méthionines.",
        "correct": false,
        "explanation": "Elle se forme entre deux cystéines."
      },
      {
        "content": "La méthionine ne contient aucun soufre.",
        "correct": false,
        "explanation": "Elle contient un thioéther."
      },
      {
        "content": "La cystéine possède un groupement thiol.",
        "correct": true,
        "explanation": "Deux cystéines peuvent former une liaison disulfure après oxydation."
      },
      {
        "content": "Le tryptophane porte un noyau indole.",
        "correct": true,
        "explanation": "C'est le plus volumineux des trois aromatiques classiques."
      },
      {
        "content": "La phénylalanine porte un noyau phényle.",
        "correct": true,
        "explanation": "Sa chaîne latérale est hydrophobe."
      },
      {
        "content": "La méthionine est un acide aminé indispensable chez l'adulte.",
        "correct": true,
        "explanation": "Elle peut servir de précurseur soufré pour la cystéine."
      },
      {
        "content": "La méthionine possède un thioéther.",
        "correct": true,
        "explanation": "Son soufre n'est pas un thiol libre."
      },
      {
        "content": "Le tryptophane porte un noyau imidazole.",
        "correct": false,
        "explanation": "L'histidine porte l'imidazole."
      }
    ],
    "explanation": "Cystéine et méthionine sont les deux acides aminés standards soufrés : thiol pour Cys, thioéther pour Met. Les trois aromatiques classiques sont Phe, Tyr et Trp ; Trp et Tyr dominent l'absorbance à 280 nm."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les acides aminés protéinogènes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La séquence des acides aminés n'influence pas la structure d'une protéine.",
        "correct": false,
        "explanation": "Elle est déterminante."
      },
      {
        "content": "Les protéines humaines utilisent couramment vingt acides aminés standards.",
        "correct": true,
        "explanation": "Il s'agit des vingt acides aminés canoniques du code génétique humain."
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
        "content": "Le terme résidu désigne uniquement un acide gras.",
        "correct": false,
        "explanation": "En biochimie des protéines, il désigne un acide aminé incorporé."
      }
    ],
    "explanation": "Les protéines humaines sont constituées principalement de vingt acides aminés standards assemblés en résidus."
  },
  {
    "order": 112,
    "difficulty": "HARD",
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
    "order": 113,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant la nomenclature des acides aminés, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Le code à trois lettres de l'alanine est Gly.",
        "correct": false,
        "explanation": "Gly désigne la glycine."
      },
      {
        "content": "Le code à trois lettres de l'alanine est Ala.",
        "correct": true,
        "explanation": "Le code à une lettre est A."
      },
      {
        "content": "Les codes à une lettre ne peuvent jamais être utilisés dans une séquence.",
        "correct": false,
        "explanation": "Ils sont précisément conçus pour cela."
      },
      {
        "content": "Un même code à une lettre désigne indifféremment plusieurs acides aminés standards.",
        "correct": false,
        "explanation": "Les codes standards sont univoques."
      },
      {
        "content": "Le code à trois lettres de la glycine est Gly.",
        "correct": true,
        "explanation": "Son code à une lettre est G."
      }
    ],
    "explanation": "Les acides aminés standards possèdent des codes conventionnels à trois lettres et à une lettre.",
    "requiredSelectionCount": 2
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les acides aminés indispensables chez l'adulte, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Neuf acides aminés sont classiquement indispensables chez l'adulte humain sain.",
        "correct": true,
        "explanation": "Ils doivent être apportés en quantité suffisante par l'alimentation."
      },
      {
        "content": "L'histidine n'est indispensable que chez le nourrisson.",
        "correct": false,
        "explanation": "Elle est aussi indispensable chez l'adulte."
      },
      {
        "content": "Leucine, isoleucine et valine font partie des acides aminés indispensables.",
        "correct": true,
        "explanation": "Ce sont également les trois acides aminés à chaîne ramifiée."
      },
      {
        "content": "L'arginine fait systématiquement partie des neuf acides aminés indispensables de l'adulte sain.",
        "correct": false,
        "explanation": "Elle est plutôt classée comme conditionnellement indispensable selon le contexte."
      },
      {
        "content": "La phénylalanine et la méthionine sont indispensables.",
        "correct": true,
        "explanation": "Elles servent aussi de précurseurs respectifs de tyrosine et cystéine."
      }
    ],
    "explanation": "Chez l'adulte sain, neuf acides aminés sont indispensables : His, Ile, Leu, Lys, Met, Phe, Thr, Trp et Val."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel acide aminé standard est achiral au carbone alpha ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glycine",
        "Gly",
        "la glycine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La glycine porte deux hydrogènes sur Cα et ne possède donc pas de centre stéréogène alpha."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la glycine comme exception structurale ?",
    "choices": [
      {
        "content": "La glycine n'a donc pas de série D/L au sens d'un centre chiral alpha.",
        "correct": true,
        "explanation": "Elle est achirale."
      },
      {
        "content": "La chaîne latérale de la glycine est un hydrogène.",
        "correct": true,
        "explanation": "Elle est l'acide aminé standard le plus simple."
      },
      {
        "content": "La glycine possède obligatoirement deux énantiomères.",
        "correct": false,
        "explanation": "Elle est achirale."
      },
      {
        "content": "Son carbone alpha n'est pas chiral.",
        "correct": true,
        "explanation": "Il porte deux hydrogènes identiques."
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
    "order": 117,
    "difficulty": "HARD",
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
    "order": 118,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quels deux résidus aromatiques dominent classiquement l'absorbance d'une protéine à 280 nm ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "tryptophane et tyrosine",
        "Trp et Tyr",
        "tyrosine et tryptophane"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Trp et Tyr dominent l'absorbance à 280 nm ; Phe est beaucoup plus faible."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les acides aminés hydroxylés ?",
    "choices": [
      {
        "content": "La thréonine est un acide aminé aromatique.",
        "correct": false,
        "explanation": "Elle est aliphatique hydroxylée."
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
      }
    ],
    "explanation": "Sérine et thréonine sont des acides aminés hydroxylés, respectivement alcool primaire et secondaire."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel groupement fonctionnel soufré porte la cystéine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "thiol",
        "groupement thiol",
        "SH",
        "sulfhydryle"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Cystéine et méthionine sont les deux acides aminés standards soufrés : thiol pour Cys, thioéther pour Met."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle couleur la proline donne-t-elle classiquement avec la ninhydrine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "jaune",
        "coloration jaune"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La proline, du fait de son amine secondaire, forme classiquement un produit jaune avec la ninhydrine."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la lysine, l'arginine et l'histidine ?",
    "choices": [
      {
        "content": "L'histidine porte un noyau imidazole.",
        "correct": true,
        "explanation": "Son pKa proche de la neutralité en fait un résidu fréquent dans les catalyses acide-base."
      },
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
        "content": "À pH physiologique, la chaîne latérale de l'histidine est souvent majoritairement neutre mais facilement protonable.",
        "correct": true,
        "explanation": "Elle ne doit pas être décrite comme uniformément positive dans toutes les protéines."
      },
      {
        "content": "L'arginine est un acide aminé acide.",
        "correct": false,
        "explanation": "Elle est basique."
      }
    ],
    "explanation": "Lys et Arg sont fortement basiques ; His possède un imidazole dont l'état de protonation varie près du pH physiologique."
  }
];
