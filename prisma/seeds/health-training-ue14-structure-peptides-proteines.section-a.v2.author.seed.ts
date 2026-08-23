import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Structure des peptides et protéines — Section A — Liaison peptidique, nomenclature et classification */
export const UE14_BIOCH_CH10_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la liaison peptidique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle relie deux fonctions alcool.",
        "correct": false,
        "explanation": "Incorrect. La liaison peptidique est une liaison amide covalente du squelette polypeptidique."
      },
      {
        "content": "Elle appartient au squelette principal du polypeptide.",
        "correct": true,
        "explanation": "Exact. La liaison peptidique est une liaison amide covalente du squelette polypeptidique."
      },
      {
        "content": "Elle est une interaction ionique non covalente.",
        "correct": false,
        "explanation": "Incorrect. La liaison peptidique est une liaison amide covalente du squelette polypeptidique."
      },
      {
        "content": "Elle relie le carboxyle alpha d’un résidu à l’amine alpha du suivant.",
        "correct": true,
        "explanation": "Exact. La liaison peptidique est une liaison amide covalente du squelette polypeptidique."
      },
      {
        "content": "Elle relie obligatoirement deux chaînes latérales.",
        "correct": false,
        "explanation": "Incorrect. La liaison peptidique est une liaison amide covalente du squelette polypeptidique."
      }
    ],
    "explanation": "La liaison peptidique est une liaison amide covalente du squelette polypeptidique."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la liaison peptidique, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elle relie obligatoirement deux chaînes latérales.",
        "correct": false,
        "explanation": "Incorrect. La liaison peptidique est une liaison amide covalente du squelette polypeptidique."
      },
      {
        "content": "Elle relie deux fonctions alcool.",
        "correct": false,
        "explanation": "Incorrect. La liaison peptidique est une liaison amide covalente du squelette polypeptidique."
      },
      {
        "content": "Elle est une interaction ionique non covalente.",
        "correct": false,
        "explanation": "Incorrect. La liaison peptidique est une liaison amide covalente du squelette polypeptidique."
      },
      {
        "content": "Elle appartient au squelette principal du polypeptide.",
        "correct": true,
        "explanation": "Exact. La liaison peptidique est une liaison amide covalente du squelette polypeptidique."
      },
      {
        "content": "Elle est une liaison glycosidique.",
        "correct": false,
        "explanation": "Incorrect. La liaison peptidique est une liaison amide covalente du squelette polypeptidique."
      }
    ],
    "explanation": "La liaison peptidique est une liaison amide covalente du squelette polypeptidique."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel seuil approximatif est utilisé ici comme repère pédagogique entre peptide et protéine ?",
    "answer": {
      "type": "number",
      "value": 100,
      "tolerance": 0
    },
    "explanation": "Le seuil de 100 résidus est un repère pédagogique et non une frontière universelle."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la distinction pratique entre peptide et protéine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Cette limite n’est pas une frontière physicochimique universelle.",
        "correct": true,
        "explanation": "Exact. Le seuil de 100 résidus est un repère pédagogique et non une frontière universelle."
      },
      {
        "content": "Toute chaîne de plus de 100 résidus possède obligatoirement une structure quaternaire.",
        "correct": false,
        "explanation": "Incorrect. Le seuil de 100 résidus est un repère pédagogique et non une frontière universelle."
      },
      {
        "content": "Une protéine peut être monomérique.",
        "correct": true,
        "explanation": "Exact. Le seuil de 100 résidus est un repère pédagogique et non une frontière universelle."
      },
      {
        "content": "Une protéine peut aussi comporter plusieurs chaînes polypeptidiques.",
        "correct": true,
        "explanation": "Exact. Le seuil de 100 résidus est un repère pédagogique et non une frontière universelle."
      },
      {
        "content": "Un dipeptide est nécessairement une protéine globulaire.",
        "correct": false,
        "explanation": "Incorrect. Le seuil de 100 résidus est un repère pédagogique et non une frontière universelle."
      }
    ],
    "explanation": "Le seuil de 100 résidus est un repère pédagogique et non une frontière universelle."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant l’extrémité N-terminale, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elle n’existe que dans les protéines multimériques.",
        "correct": false,
        "explanation": "Incorrect. L’extrémité N-terminale porte l’amine alpha libre si elle n’est pas modifiée."
      },
      {
        "content": "Le premier résidu de la chaîne se trouve à cette extrémité.",
        "correct": true,
        "explanation": "Exact. L’extrémité N-terminale porte l’amine alpha libre si elle n’est pas modifiée."
      },
      {
        "content": "Elle porte nécessairement le carboxyle alpha terminal libre.",
        "correct": false,
        "explanation": "Incorrect. L’extrémité N-terminale porte l’amine alpha libre si elle n’est pas modifiée."
      },
      {
        "content": "Elle désigne le carbone carbonylé de chaque liaison peptidique.",
        "correct": false,
        "explanation": "Incorrect. L’extrémité N-terminale porte l’amine alpha libre si elle n’est pas modifiée."
      },
      {
        "content": "Elle se situe au milieu de la chaîne.",
        "correct": false,
        "explanation": "Incorrect. L’extrémité N-terminale porte l’amine alpha libre si elle n’est pas modifiée."
      }
    ],
    "explanation": "L’extrémité N-terminale porte l’amine alpha libre si elle n’est pas modifiée."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant l’extrémité N-terminale, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Elle peut subir des modifications terminales sans perdre sa définition structurale.",
        "correct": true,
        "explanation": "Exact. L’extrémité N-terminale porte l’amine alpha libre si elle n’est pas modifiée."
      },
      {
        "content": "Elle n’existe que dans les protéines multimériques.",
        "correct": false,
        "explanation": "Incorrect. L’extrémité N-terminale porte l’amine alpha libre si elle n’est pas modifiée."
      },
      {
        "content": "Le premier résidu de la chaîne se trouve à cette extrémité.",
        "correct": true,
        "explanation": "Exact. L’extrémité N-terminale porte l’amine alpha libre si elle n’est pas modifiée."
      },
      {
        "content": "Elle se situe au milieu de la chaîne.",
        "correct": false,
        "explanation": "Incorrect. L’extrémité N-terminale porte l’amine alpha libre si elle n’est pas modifiée."
      },
      {
        "content": "Elle désigne le carbone carbonylé de chaque liaison peptidique.",
        "correct": false,
        "explanation": "Incorrect. L’extrémité N-terminale porte l’amine alpha libre si elle n’est pas modifiée."
      }
    ],
    "explanation": "L’extrémité N-terminale porte l’amine alpha libre si elle n’est pas modifiée.",
    "requiredSelectionCount": 2
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l’extrémité C-terminale, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le dernier résidu de la chaîne se trouve à cette extrémité.",
        "correct": true,
        "explanation": "Exact. L’extrémité C-terminale porte le carboxyle alpha libre si elle n’est pas modifiée."
      },
      {
        "content": "Elle porte le carboxyle alpha libre si cette extrémité n’est pas modifiée.",
        "correct": true,
        "explanation": "Exact. L’extrémité C-terminale porte le carboxyle alpha libre si elle n’est pas modifiée."
      },
      {
        "content": "Elle est définie par un phosphate terminal.",
        "correct": false,
        "explanation": "Incorrect. L’extrémité C-terminale porte le carboxyle alpha libre si elle n’est pas modifiée."
      },
      {
        "content": "Elle termine conventionnellement une chaîne écrite N vers C.",
        "correct": true,
        "explanation": "Exact. L’extrémité C-terminale porte le carboxyle alpha libre si elle n’est pas modifiée."
      },
      {
        "content": "Une amidation C-terminale peut masquer le carboxyle libre.",
        "correct": true,
        "explanation": "Exact. L’extrémité C-terminale porte le carboxyle alpha libre si elle n’est pas modifiée."
      }
    ],
    "explanation": "L’extrémité C-terminale porte le carboxyle alpha libre si elle n’est pas modifiée."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle fonction alpha est libre à l’extrémité C-terminale d’un peptide non modifié ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "carboxyle",
        "fonction carboxyle",
        "groupement carboxyle",
        "COOH",
        "COO-"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’extrémité C-terminale porte le carboxyle alpha libre si elle n’est pas modifiée."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant les chaînes latérales d’un peptide ?",
    "choices": [
      {
        "content": "Elles constituent à elles seules la liaison peptidique principale.",
        "correct": false,
        "explanation": "Incorrect. Les chaînes latérales R portent une grande partie de la diversité chimique des protéines."
      },
      {
        "content": "Leur nature contribue fortement aux propriétés chimiques de la protéine.",
        "correct": true,
        "explanation": "Exact. Les chaînes latérales R portent une grande partie de la diversité chimique des protéines."
      },
      {
        "content": "Elles sont absentes des protéines.",
        "correct": false,
        "explanation": "Incorrect. Les chaînes latérales R portent une grande partie de la diversité chimique des protéines."
      },
      {
        "content": "Elles sont toutes chargées positivement à pH physiologique.",
        "correct": false,
        "explanation": "Incorrect. Les chaînes latérales R portent une grande partie de la diversité chimique des protéines."
      },
      {
        "content": "Elles sont identiques pour tous les résidus.",
        "correct": false,
        "explanation": "Incorrect. Les chaînes latérales R portent une grande partie de la diversité chimique des protéines."
      }
    ],
    "explanation": "Les chaînes latérales R portent une grande partie de la diversité chimique des protéines."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les chaînes latérales d’un peptide, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elles constituent à elles seules la liaison peptidique principale.",
        "correct": false,
        "explanation": "Incorrect. Les chaînes latérales R portent une grande partie de la diversité chimique des protéines."
      },
      {
        "content": "Elles sont identiques pour tous les résidus.",
        "correct": false,
        "explanation": "Incorrect. Les chaînes latérales R portent une grande partie de la diversité chimique des protéines."
      },
      {
        "content": "Elles sont portées par les carbones alpha des résidus.",
        "correct": true,
        "explanation": "Exact. Les chaînes latérales R portent une grande partie de la diversité chimique des protéines."
      },
      {
        "content": "Elles participent aux interactions qui stabilisent le repliement.",
        "correct": true,
        "explanation": "Exact. Les chaînes latérales R portent une grande partie de la diversité chimique des protéines."
      },
      {
        "content": "Elles sont absentes des protéines.",
        "correct": false,
        "explanation": "Incorrect. Les chaînes latérales R portent une grande partie de la diversité chimique des protéines."
      }
    ],
    "explanation": "Les chaînes latérales R portent une grande partie de la diversité chimique des protéines."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la proline dans une chaîne polypeptidique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une liaison peptidique précédant une proline présente plus souvent une forme cis que les autres liaisons peptidiques.",
        "correct": true,
        "explanation": "Exact. La proline contraint le squelette et peut perturber les structures secondaires régulières."
      },
      {
        "content": "Elle réduit la liberté conformationnelle locale.",
        "correct": true,
        "explanation": "Exact. La proline contraint le squelette et peut perturber les structures secondaires régulières."
      },
      {
        "content": "Elle est obligatoirement présente uniquement dans le premier tour de toute hélice alpha.",
        "correct": false,
        "explanation": "Incorrect. La proline contraint le squelette et peut perturber les structures secondaires régulières."
      },
      {
        "content": "Elle peut introduire un coude ou perturber une hélice alpha.",
        "correct": true,
        "explanation": "Exact. La proline contraint le squelette et peut perturber les structures secondaires régulières."
      },
      {
        "content": "Elle augmente systématiquement la flexibilité du squelette.",
        "correct": false,
        "explanation": "Incorrect. La proline contraint le squelette et peut perturber les structures secondaires régulières."
      }
    ],
    "explanation": "La proline contraint le squelette et peut perturber les structures secondaires régulières."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel résidu cyclique contraint particulièrement la géométrie locale du squelette ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "proline",
        "la proline",
        "Pro"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La proline contraint le squelette et peut perturber les structures secondaires régulières."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant les rôles généraux des protéines ?",
    "choices": [
      {
        "content": "Les protéines n’ont jamais de rôle structural.",
        "correct": false,
        "explanation": "Incorrect. Les protéines peuvent avoir des rôles structuraux, catalytiques, de transport ou de signalisation."
      },
      {
        "content": "Toute protéine de transport est nécessairement une enzyme.",
        "correct": false,
        "explanation": "Incorrect. Les protéines peuvent avoir des rôles structuraux, catalytiques, de transport ou de signalisation."
      },
      {
        "content": "Les enzymes catalysent des réactions chimiques.",
        "correct": true,
        "explanation": "Exact. Les protéines peuvent avoir des rôles structuraux, catalytiques, de transport ou de signalisation."
      },
      {
        "content": "Toutes les protéines ont la même fonction.",
        "correct": false,
        "explanation": "Incorrect. Les protéines peuvent avoir des rôles structuraux, catalytiques, de transport ou de signalisation."
      },
      {
        "content": "La conformation n’influence pas la fonction.",
        "correct": false,
        "explanation": "Incorrect. Les protéines peuvent avoir des rôles structuraux, catalytiques, de transport ou de signalisation."
      }
    ],
    "explanation": "Les protéines peuvent avoir des rôles structuraux, catalytiques, de transport ou de signalisation."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les rôles généraux des protéines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La fonction dépend étroitement de la séquence et de la conformation.",
        "correct": true,
        "explanation": "Exact. Les protéines peuvent avoir des rôles structuraux, catalytiques, de transport ou de signalisation."
      },
      {
        "content": "Les enzymes catalysent des réactions chimiques.",
        "correct": true,
        "explanation": "Exact. Les protéines peuvent avoir des rôles structuraux, catalytiques, de transport ou de signalisation."
      },
      {
        "content": "Certaines protéines assurent un transport.",
        "correct": true,
        "explanation": "Exact. Les protéines peuvent avoir des rôles structuraux, catalytiques, de transport ou de signalisation."
      },
      {
        "content": "La conformation n’influence pas la fonction.",
        "correct": false,
        "explanation": "Incorrect. Les protéines peuvent avoir des rôles structuraux, catalytiques, de transport ou de signalisation."
      },
      {
        "content": "Le collagène illustre un rôle structural.",
        "correct": true,
        "explanation": "Exact. Les protéines peuvent avoir des rôles structuraux, catalytiques, de transport ou de signalisation."
      }
    ],
    "explanation": "Les protéines peuvent avoir des rôles structuraux, catalytiques, de transport ou de signalisation."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel phénomène est en cause lorsqu’une protéine perd son repliement natif sans hydrolyse obligatoire de ses liaisons peptidiques ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "dénaturation",
        "denaturation"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La dénaturation touche surtout le repliement et n’implique pas nécessairement une protéolyse."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la dénaturation des protéines ?",
    "choices": [
      {
        "content": "Elle modifie obligatoirement la séquence codée par le gène.",
        "correct": false,
        "explanation": "Incorrect. La dénaturation touche surtout le repliement et n’implique pas nécessairement une protéolyse."
      },
      {
        "content": "Elle altère la conformation native.",
        "correct": true,
        "explanation": "Exact. La dénaturation touche surtout le repliement et n’implique pas nécessairement une protéolyse."
      },
      {
        "content": "Elle correspond toujours à l’hydrolyse complète des liaisons peptidiques.",
        "correct": false,
        "explanation": "Incorrect. La dénaturation touche surtout le repliement et n’implique pas nécessairement une protéolyse."
      },
      {
        "content": "Elle ne nécessite pas la rupture des liaisons peptidiques de la structure primaire.",
        "correct": true,
        "explanation": "Exact. La dénaturation touche surtout le repliement et n’implique pas nécessairement une protéolyse."
      },
      {
        "content": "Elle augmente nécessairement l’activité biologique.",
        "correct": false,
        "explanation": "Incorrect. La dénaturation touche surtout le repliement et n’implique pas nécessairement une protéolyse."
      }
    ],
    "explanation": "La dénaturation touche surtout le repliement et n’implique pas nécessairement une protéolyse."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Citez un paramètre physicochimique classique pouvant favoriser une dénaturation.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "température",
        "pH",
        "force ionique",
        "urée",
        "solvant",
        "chaleur"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Température, pH et composition du milieu peuvent perturber le repliement protéique."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les facteurs de dénaturation, laquelle est correcte ?",
    "choices": [
      {
        "content": "La température n’a jamais d’effet sur le repliement.",
        "correct": false,
        "explanation": "Incorrect. Température, pH et composition du milieu peuvent perturber le repliement protéique."
      },
      {
        "content": "Le pH n’influence aucune interaction protéique.",
        "correct": false,
        "explanation": "Incorrect. Température, pH et composition du milieu peuvent perturber le repliement protéique."
      },
      {
        "content": "Un pH extrême peut modifier les états de protonation.",
        "correct": true,
        "explanation": "Exact. Température, pH et composition du milieu peuvent perturber le repliement protéique."
      },
      {
        "content": "Toutes les protéines répondent exactement pareil à un dénaturant.",
        "correct": false,
        "explanation": "Incorrect. Température, pH et composition du milieu peuvent perturber le repliement protéique."
      },
      {
        "content": "Seule la lumière visible peut dénaturer une protéine.",
        "correct": false,
        "explanation": "Incorrect. Température, pH et composition du milieu peuvent perturber le repliement protéique."
      }
    ],
    "explanation": "Température, pH et composition du milieu peuvent perturber le repliement protéique."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les zymogènes ?",
    "choices": [
      {
        "content": "Un zymogène est une enzyme définitivement détruite.",
        "correct": false,
        "explanation": "Incorrect. Un zymogène est un précurseur souvent activé par protéolyse limitée."
      },
      {
        "content": "Son activation est toujours une simple fixation réversible d’un ligand.",
        "correct": false,
        "explanation": "Incorrect. Un zymogène est un précurseur souvent activé par protéolyse limitée."
      },
      {
        "content": "Son activation implique souvent un clivage protéolytique limité.",
        "correct": true,
        "explanation": "Exact. Un zymogène est un précurseur souvent activé par protéolyse limitée."
      },
      {
        "content": "Un zymogène est un précurseur enzymatique inactif ou peu actif.",
        "correct": true,
        "explanation": "Exact. Un zymogène est un précurseur souvent activé par protéolyse limitée."
      },
      {
        "content": "Les protéases digestives fournissent plusieurs exemples de zymogènes.",
        "correct": true,
        "explanation": "Exact. Un zymogène est un précurseur souvent activé par protéolyse limitée."
      }
    ],
    "explanation": "Un zymogène est un précurseur souvent activé par protéolyse limitée."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "L’urée peut agir comme agent chaotrope.",
        "correct": true,
        "explanation": "Exact. Un zymogène est un précurseur souvent activé par protéolyse limitée."
      },
      {
        "content": "Le pH n’influence aucune interaction protéique.",
        "correct": false,
        "explanation": "Incorrect. Un zymogène est un précurseur souvent activé par protéolyse limitée."
      },
      {
        "content": "Les protéases digestives fournissent plusieurs exemples de zymogènes.",
        "correct": true,
        "explanation": "Exact. Un zymogène est un précurseur souvent activé par protéolyse limitée."
      },
      {
        "content": "Toutes les protéines répondent exactement pareil à un dénaturant.",
        "correct": false,
        "explanation": "Incorrect. Un zymogène est un précurseur souvent activé par protéolyse limitée."
      },
      {
        "content": "Un zymogène est une enzyme définitivement détruite.",
        "correct": false,
        "explanation": "Incorrect. Un zymogène est un précurseur souvent activé par protéolyse limitée."
      },
      {
        "content": "Un zymogène est un précurseur enzymatique inactif ou peu actif.",
        "correct": true,
        "explanation": "Exact. Un zymogène est un précurseur souvent activé par protéolyse limitée."
      },
      {
        "content": "Un pH extrême peut modifier les états de protonation.",
        "correct": true,
        "explanation": "Exact. Un zymogène est un précurseur souvent activé par protéolyse limitée."
      },
      {
        "content": "Son activation est toujours une simple fixation réversible d’un ligand.",
        "correct": false,
        "explanation": "Incorrect. Un zymogène est un précurseur souvent activé par protéolyse limitée."
      },
      {
        "content": "La force ionique ou certains solvants peuvent modifier la stabilité.",
        "correct": true,
        "explanation": "Exact. Un zymogène est un précurseur souvent activé par protéolyse limitée."
      },
      {
        "content": "Le terme désigne un glucide de réserve.",
        "correct": false,
        "explanation": "Incorrect. Un zymogène est un précurseur souvent activé par protéolyse limitée."
      }
    ],
    "explanation": "Un zymogène est un précurseur souvent activé par protéolyse limitée. Température, pH et composition du milieu peuvent perturber le repliement protéique."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant la classification des protéines selon leur composition, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "L’hémoglobine est une hétéroprotéine contenant des groupes hème.",
        "correct": true,
        "explanation": "Exact. La composition distingue holoprotéines et hétéroprotéines."
      },
      {
        "content": "Une hétéroprotéine ne contient aucun acide aminé.",
        "correct": false,
        "explanation": "Incorrect. La composition distingue holoprotéines et hétéroprotéines."
      },
      {
        "content": "Cette classification est indépendante de la distinction globulaire/fibreuse.",
        "correct": true,
        "explanation": "Exact. La composition distingue holoprotéines et hétéroprotéines."
      },
      {
        "content": "Une hétéroprotéine comporte une partie protéique et une composante non protéique.",
        "correct": true,
        "explanation": "Exact. La composition distingue holoprotéines et hétéroprotéines."
      },
      {
        "content": "Une holoprotéine est constituée uniquement de résidus d’acides aminés.",
        "correct": true,
        "explanation": "Exact. La composition distingue holoprotéines et hétéroprotéines."
      }
    ],
    "explanation": "La composition distingue holoprotéines et hétéroprotéines."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel terme désigne une protéine associée à une composante non protéique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "hétéroprotéine",
        "heteroproteine",
        "protéine conjuguée",
        "proteine conjuguee"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La composition distingue holoprotéines et hétéroprotéines."
  }
];
