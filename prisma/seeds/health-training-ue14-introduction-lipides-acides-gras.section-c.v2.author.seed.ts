import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Chapitre 2.1–2.2 — Lipides et acides gras — Section C — Acides gras désaturés, Δ/ω et indispensables */
export const UE14_BIOCH_CH4_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les acides gras mono-insaturés, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'acide oléique est 18:0.",
        "correct": false,
        "explanation": "Il est 18:1."
      },
      {
        "content": "Un mono-insaturé possède au moins deux doubles liaisons.",
        "correct": false,
        "explanation": "Il en possède une seule."
      },
      {
        "content": "L'acide oléique est 18:1 Δ9.",
        "correct": true,
        "explanation": "Il appartient à la série n-9."
      },
      {
        "content": "Une double liaison cis introduit généralement un coude dans la chaîne.",
        "correct": true,
        "explanation": "Cela gêne l'empilement serré des chaînes."
      },
      {
        "content": "Une double liaison cis rend toujours la chaîne parfaitement rectiligne.",
        "correct": false,
        "explanation": "Elle crée généralement un coude."
      }
    ],
    "explanation": "Les deux repères mono-insaturés majeurs sont palmitoléique 16:1 Δ9 n-7 et oléique 18:1 Δ9 n-9."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de la configuration cis et trans, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "Dans une double liaison trans, la chaîne reste plus rectiligne qu'en cis.",
        "correct": true,
        "explanation": "L'empilement peut être plus efficace."
      },
      {
        "content": "Un acide gras cis est nécessairement de série n-3.",
        "correct": false,
        "explanation": "La série oméga dépend de la position."
      },
      {
        "content": "La configuration n'influence jamais les propriétés physiques.",
        "correct": false,
        "explanation": "Elle influence notamment l'empilement et le point de fusion."
      },
      {
        "content": "Une double liaison trans crée toujours un coude plus marqué qu'une cis.",
        "correct": false,
        "explanation": "C'est généralement l'inverse."
      },
      {
        "content": "Cis et trans indiquent le nombre de doubles liaisons.",
        "correct": false,
        "explanation": "Ils indiquent leur géométrie."
      }
    ],
    "explanation": "La configuration cis perturbe davantage l'empilement des chaînes que la configuration trans."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Entre quels carbones se situe une double liaison Δ9 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "C9 et C10",
        "9 et 10",
        "carbones 9 et 10",
        "entre C9 et C10"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "En notation Δ, le nombre désigne le premier carbone de la double liaison depuis le carboxyle."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les séries oméga, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La série n-3 se compte depuis le carboxyle.",
        "correct": false,
        "explanation": "Elle se compte depuis le méthyle terminal."
      },
      {
        "content": "18:1 Δ9 appartient à la série n-9.",
        "correct": true,
        "explanation": "18-9=9."
      },
      {
        "content": "16:1 Δ9 appartient à n-9.",
        "correct": false,
        "explanation": "Il appartient à n-7."
      },
      {
        "content": "Pour un polyinsaturé, la série se déduit de la double liaison la plus proche de l'extrémité méthyle.",
        "correct": true,
        "explanation": "C'est la position Δ la plus élevée."
      },
      {
        "content": "La série oméga est définie par la première double liaison rencontrée depuis l'extrémité méthyle.",
        "correct": true,
        "explanation": "C'est l'extrémité n ou ω."
      }
    ],
    "explanation": "La série oméga combine longueur totale et position de la double liaison la plus proche de l'extrémité méthyle."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de l'acide linoléique, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "Il est saturé.",
        "correct": false,
        "explanation": "Il possède deux doubles liaisons."
      },
      {
        "content": "Il appartient à la série n-6.",
        "correct": true,
        "explanation": "La double liaison la plus proche du méthyle est à six carbones de l'extrémité."
      },
      {
        "content": "Il peut être synthétisé de novo en quantité suffisante par l'être humain.",
        "correct": false,
        "explanation": "Il est indispensable."
      },
      {
        "content": "L'acide linoléique est 18:3 Δ9,12,15.",
        "correct": false,
        "explanation": "Cela décrit l'alpha-linolénique."
      },
      {
        "content": "Il appartient à la série n-3.",
        "correct": false,
        "explanation": "Il appartient à n-6."
      }
    ],
    "explanation": "L'acide linoléique est l'acide gras indispensable 18:2 Δ9,12 de la série n-6."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur l'acide alpha-linolénique, sélectionnez exactement les deux exactes.",
    "choices": [
      {
        "content": "L'alpha-linolénique est 18:2 Δ9,12.",
        "correct": false,
        "explanation": "Cela décrit le linoléique."
      },
      {
        "content": "Il appartient à la série n-6.",
        "correct": false,
        "explanation": "Il appartient à n-3."
      },
      {
        "content": "La conversion en EPA et DHA est toujours complète et quantitativement élevée.",
        "correct": false,
        "explanation": "Elle est limitée chez l'être humain."
      },
      {
        "content": "Il peut servir de précurseur à d'autres acides gras n-3, avec une conversion humaine limitée.",
        "correct": true,
        "explanation": "La conversion vers EPA/DHA est quantitativement limitée."
      },
      {
        "content": "Il appartient à la série n-3.",
        "correct": true,
        "explanation": "La double liaison la plus proche du méthyle est à trois carbones de l'extrémité."
      }
    ],
    "explanation": "L'acide alpha-linolénique est l'acide gras indispensable 18:3 Δ9,12,15 de la série n-3.",
    "requiredSelectionCount": 2
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le caractère indispensable de certains acides gras, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'acide linoléique doit être apporté par l'alimentation.",
        "correct": true,
        "explanation": "C'est le précurseur indispensable n-6."
      },
      {
        "content": "Indispensable signifie simplement polyinsaturé.",
        "correct": false,
        "explanation": "Tous les polyinsaturés ne sont pas nécessairement indispensables."
      },
      {
        "content": "L'être humain ne possède pas les désaturases permettant de former de novo les doubles liaisons n-6 et n-3 de base.",
        "correct": true,
        "explanation": "Les voies humaines ne créent pas les précurseurs linoléique et alpha-linolénique."
      },
      {
        "content": "Le terme indispensable décrit une nécessité nutritionnelle.",
        "correct": true,
        "explanation": "Il ne signifie pas que la molécule est la seule de sa série."
      },
      {
        "content": "L'acide alpha-linolénique doit être apporté par l'alimentation.",
        "correct": true,
        "explanation": "C'est le précurseur indispensable n-3."
      }
    ],
    "explanation": "Les précurseurs indispensables sont le linoléique n-6 et l'alpha-linolénique n-3."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "À quelle série appartient 18:2 Δ9,12 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "n-6",
        "omega-6",
        "oméga-6",
        "ω6",
        "ω-6"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Pour passer de Δ à n-/ω, on repère la double liaison la plus proche du méthyle ; 18-12=6 pour le linoléique."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur les acides gras mono-insaturés, laquelle est exacte ?",
    "choices": [
      {
        "content": "L'acide oléique est 18:0.",
        "correct": false,
        "explanation": "Il est 18:1."
      },
      {
        "content": "Un mono-insaturé possède au moins deux doubles liaisons.",
        "correct": false,
        "explanation": "Il en possède une seule."
      },
      {
        "content": "Une double liaison cis introduit généralement un coude dans la chaîne.",
        "correct": true,
        "explanation": "Cela gêne l'empilement serré des chaînes."
      },
      {
        "content": "Une double liaison cis rend toujours la chaîne parfaitement rectiligne.",
        "correct": false,
        "explanation": "Elle crée généralement un coude."
      },
      {
        "content": "Le palmitoléique est un acide gras saturé.",
        "correct": false,
        "explanation": "Il comporte une double liaison."
      }
    ],
    "explanation": "Les deux repères mono-insaturés majeurs sont palmitoléique 16:1 Δ9 n-7 et oléique 18:1 Δ9 n-9."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la configuration cis et trans, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les doubles liaisons naturelles des acides gras sont fréquemment cis.",
        "correct": true,
        "explanation": "Les formes cis dominent dans de nombreux lipides biologiques."
      },
      {
        "content": "La configuration n'influence jamais les propriétés physiques.",
        "correct": false,
        "explanation": "Elle influence notamment l'empilement et le point de fusion."
      },
      {
        "content": "Cis et trans indiquent le nombre de doubles liaisons.",
        "correct": false,
        "explanation": "Ils indiquent leur géométrie."
      },
      {
        "content": "Une double liaison trans crée toujours un coude plus marqué qu'une cis.",
        "correct": false,
        "explanation": "C'est généralement l'inverse."
      },
      {
        "content": "Dans une double liaison trans, la chaîne reste plus rectiligne qu'en cis.",
        "correct": true,
        "explanation": "L'empilement peut être plus efficace."
      }
    ],
    "explanation": "La configuration cis perturbe davantage l'empilement des chaînes que la configuration trans."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les acides gras mono-insaturés, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'acide oléique est 18:0.",
        "correct": false,
        "explanation": "Il est 18:1."
      },
      {
        "content": "L'acide oléique est 18:1 Δ9.",
        "correct": true,
        "explanation": "Il appartient à la série n-9."
      },
      {
        "content": "Le palmitoléique est un acide gras saturé.",
        "correct": false,
        "explanation": "Il comporte une double liaison."
      },
      {
        "content": "Ils possèdent une seule double liaison C=C.",
        "correct": true,
        "explanation": "Le second nombre de la notation C:D vaut 1."
      },
      {
        "content": "Une double liaison cis rend toujours la chaîne parfaitement rectiligne.",
        "correct": false,
        "explanation": "Elle crée généralement un coude."
      }
    ],
    "explanation": "Les deux repères mono-insaturés majeurs sont palmitoléique 16:1 Δ9 n-7 et oléique 18:1 Δ9 n-9."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un acide gras possède 18 carbones et une seule double liaison Δ9. Quelle est la valeur n-x de sa série oméga ?",
    "answer": {
      "type": "number",
      "value": 9,
      "tolerance": 0
    },
    "explanation": "Pour un 18:1 Δ9, la double liaison est à $18-9=9$ carbones de l'extrémité méthyle : série n-9."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un acide gras 16:1 possède une double liaison Δ9. Quelle est la valeur n-x de sa série oméga ?",
    "answer": {
      "type": "number",
      "value": 7,
      "tolerance": 0
    },
    "explanation": "$16-9=7$ : le palmitoléique 16:1 Δ9 appartient à la série n-7."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Pour 18:2 Δ9,12, quelle est la valeur n-x de la série oméga ?",
    "answer": {
      "type": "number",
      "value": 6,
      "tolerance": 0
    },
    "explanation": "La double liaison la plus proche du méthyle est Δ12 ; $18-12=6$, donc série n-6."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Pour 18:3 Δ9,12,15, quelle est la valeur n-x de la série oméga ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "La double liaison la plus proche du méthyle est Δ15 ; $18-15=3$, donc série n-3."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur l'acide alpha-linolénique, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Il est indispensable pour l'être humain.",
        "correct": true,
        "explanation": "Un apport alimentaire est nécessaire."
      },
      {
        "content": "L'acide alpha-linolénique est 18:3 Δ9,12,15.",
        "correct": true,
        "explanation": "Il possède trois doubles liaisons."
      },
      {
        "content": "Il est saturé.",
        "correct": false,
        "explanation": "Il possède trois doubles liaisons."
      },
      {
        "content": "Il peut servir de précurseur à d'autres acides gras n-3, avec une conversion humaine limitée.",
        "correct": true,
        "explanation": "La conversion vers EPA/DHA est quantitativement limitée."
      },
      {
        "content": "Il appartient à la série n-3.",
        "correct": true,
        "explanation": "La double liaison la plus proche du méthyle est à trois carbones de l'extrémité."
      }
    ],
    "explanation": "L'acide alpha-linolénique est l'acide gras indispensable 18:3 Δ9,12,15 de la série n-3."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quels sont les deux acides gras précurseurs classiquement indispensables chez l'être humain ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide linoléique et acide alpha-linolénique",
        "linoléique et alpha-linolénique",
        "linoleique et alpha-linolenique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les précurseurs indispensables sont le linoléique n-6 et l'alpha-linolénique n-3."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de la conversion entre notation delta et série oméga, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "18:2 Δ9,12 est n-12.",
        "correct": false,
        "explanation": "La série ne reprend pas directement le plus grand indice Δ."
      },
      {
        "content": "18:3 Δ9,12,15 est n-15.",
        "correct": false,
        "explanation": "Il est n-3."
      },
      {
        "content": "18:2 Δ9,12 est n-6.",
        "correct": true,
        "explanation": "18-12=6 pour la double liaison la plus proche du méthyle."
      },
      {
        "content": "La série oméga se déduit de la plus petite valeur Δ pour tous les polyinsaturés.",
        "correct": false,
        "explanation": "On utilise la double liaison la plus proche du méthyle, donc le plus grand indice Δ."
      },
      {
        "content": "16:1 Δ9 est n-9.",
        "correct": false,
        "explanation": "Il est n-7."
      }
    ],
    "explanation": "Pour passer de Δ à n-/ω, on repère la double liaison la plus proche du méthyle ; 18-12=6 pour le linoléique."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel acide gras indispensable correspond à 18:2 Δ9,12 n-6 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide linoléique",
        "linoléique",
        "linoleique",
        "acide linoleique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'acide linoléique est l'acide gras indispensable 18:2 Δ9,12 de la série n-6."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Les doubles liaisons naturelles des acides gras sont fréquemment cis.",
        "correct": true,
        "explanation": "Les formes cis dominent dans de nombreux lipides biologiques."
      },
      {
        "content": "La configuration n'influence jamais les propriétés physiques.",
        "correct": false,
        "explanation": "Elle influence notamment l'empilement et le point de fusion."
      },
      {
        "content": "Il appartient à la série n-3.",
        "correct": false,
        "explanation": "Il appartient à n-6."
      },
      {
        "content": "Cis et trans indiquent le nombre de doubles liaisons.",
        "correct": false,
        "explanation": "Ils indiquent leur géométrie."
      },
      {
        "content": "Il est saturé.",
        "correct": false,
        "explanation": "Il possède deux doubles liaisons."
      },
      {
        "content": "Cis/trans décrit une géométrie, pas le nombre total de carbones.",
        "correct": true,
        "explanation": "C'est une information distincte."
      },
      {
        "content": "Il est un acide gras indispensable pour l'être humain.",
        "correct": true,
        "explanation": "Il doit être apporté par l'alimentation."
      },
      {
        "content": "Ses doubles liaisons naturelles sont classiquement cis.",
        "correct": true,
        "explanation": "Il s'agit d'un acide gras polyinsaturé."
      },
      {
        "content": "Il peut être synthétisé de novo en quantité suffisante par l'être humain.",
        "correct": false,
        "explanation": "Il est indispensable."
      },
      {
        "content": "Dans une double liaison cis, les portions principales de chaîne sont du même côté du plan de la double liaison.",
        "correct": true,
        "explanation": "Cette géométrie crée généralement un coude."
      }
    ],
    "explanation": "La configuration cis perturbe davantage l'empilement des chaînes que la configuration trans. L'acide linoléique est l'acide gras indispensable 18:2 Δ9,12 de la série n-6."
  },
  {
    "order": 65,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sur ce schéma de l'acide oléique 18:1 Δ9, cliquez sur la double liaison Δ9, située entre C9 et C10.",
    "image": {
      "src": "/images/training/ue14/biochimie/introduction-lipides-acides-gras/acide-oleique-delta9-qzone.svg",
      "alt": "Chaîne simplifiée de l'acide oléique numérotée depuis le carbone carboxylique",
      "width": 1200,
      "height": 420
    },
    "expectedZones": [
      {
        "id": "delta9",
        "label": "Double liaison Δ9",
        "x": 0.5,
        "y": 0.52,
        "tolerance": 0.075
      }
    ],
    "explanation": "Dans l'acide oléique 18:1 Δ9, la double liaison relie C9 et C10 lorsque la numérotation part du carbone carboxylique."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "À quelle série appartient un acide gras 16:1 Δ9 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "n-7",
        "omega-7",
        "oméga-7",
        "ω7",
        "ω-7"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La série oméga combine longueur totale et position de la double liaison la plus proche de l'extrémité méthyle."
  },
  {
    "order": 67,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les acides gras mono-insaturés, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le palmitoléique est un acide gras saturé.",
        "correct": false,
        "explanation": "Il comporte une double liaison."
      },
      {
        "content": "L'acide palmitoléique est 16:1 Δ9.",
        "correct": true,
        "explanation": "Il appartient à la série n-7."
      },
      {
        "content": "Un mono-insaturé possède au moins deux doubles liaisons.",
        "correct": false,
        "explanation": "Il en possède une seule."
      },
      {
        "content": "L'acide oléique est 18:0.",
        "correct": false,
        "explanation": "Il est 18:1."
      },
      {
        "content": "Ils possèdent une seule double liaison C=C.",
        "correct": true,
        "explanation": "Le second nombre de la notation C:D vaut 1."
      }
    ],
    "explanation": "Les deux repères mono-insaturés majeurs sont palmitoléique 16:1 Δ9 n-7 et oléique 18:1 Δ9 n-9."
  },
  {
    "order": 68,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle configuration de double liaison produit généralement le coude le plus marqué dans une chaîne d'acide gras ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cis",
        "configuration cis",
        "la configuration cis"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La configuration cis perturbe davantage l'empilement des chaînes que la configuration trans."
  },
  {
    "order": 69,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur la notation delta, sélectionnez exactement les deux exactes.",
    "choices": [
      {
        "content": "Δ9 indique une double liaison entre C9 et C10 en comptant depuis le carboxyle.",
        "correct": true,
        "explanation": "Le premier carbone engagé est C9."
      },
      {
        "content": "La notation delta ne peut jamais être utilisée pour un polyinsaturé.",
        "correct": false,
        "explanation": "Elle est particulièrement utile pour eux."
      },
      {
        "content": "Δ12 indique que la chaîne contient exactement douze carbones.",
        "correct": false,
        "explanation": "Il indique une position de double liaison."
      },
      {
        "content": "18:2 Δ9,12 possède deux doubles liaisons.",
        "correct": true,
        "explanation": "Elles commencent en C9 et C12."
      },
      {
        "content": "Δ9 se compte depuis le carbone oméga.",
        "correct": false,
        "explanation": "La notation delta part du carboxyle."
      }
    ],
    "explanation": "En notation Δ, le nombre désigne le premier carbone de la double liaison depuis le carboxyle.",
    "requiredSelectionCount": 2
  },
  {
    "order": 70,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les séries oméga, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La série oméga est définie par la première double liaison rencontrée depuis l'extrémité méthyle.",
        "correct": true,
        "explanation": "C'est l'extrémité n ou ω."
      },
      {
        "content": "18:1 Δ9 appartient à la série n-9.",
        "correct": true,
        "explanation": "18-9=9."
      },
      {
        "content": "Pour un polyinsaturé, la série se déduit de la double liaison la plus proche de l'extrémité méthyle.",
        "correct": true,
        "explanation": "C'est la position Δ la plus élevée."
      },
      {
        "content": "16:1 Δ9 appartient à n-9.",
        "correct": false,
        "explanation": "Il appartient à n-7."
      },
      {
        "content": "18:2 Δ9,12 appartient à n-9.",
        "correct": false,
        "explanation": "La double liaison la plus proche du méthyle conduit à n-6."
      }
    ],
    "explanation": "La série oméga combine longueur totale et position de la double liaison la plus proche de l'extrémité méthyle."
  },
  {
    "order": 71,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "À propos de l'acide linoléique, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "Il appartient à la série n-3.",
        "correct": false,
        "explanation": "Il appartient à n-6."
      },
      {
        "content": "Il peut être synthétisé de novo en quantité suffisante par l'être humain.",
        "correct": false,
        "explanation": "Il est indispensable."
      },
      {
        "content": "Il est saturé.",
        "correct": false,
        "explanation": "Il possède deux doubles liaisons."
      },
      {
        "content": "L'acide linoléique est 18:2 Δ9,12.",
        "correct": true,
        "explanation": "Il possède deux doubles liaisons."
      },
      {
        "content": "L'acide linoléique est 18:3 Δ9,12,15.",
        "correct": false,
        "explanation": "Cela décrit l'alpha-linolénique."
      }
    ],
    "explanation": "L'acide linoléique est l'acide gras indispensable 18:2 Δ9,12 de la série n-6."
  },
  {
    "order": 72,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur l'acide alpha-linolénique, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Il est indispensable pour l'être humain.",
        "correct": true,
        "explanation": "Un apport alimentaire est nécessaire."
      },
      {
        "content": "Il appartient à la série n-3.",
        "correct": true,
        "explanation": "La double liaison la plus proche du méthyle est à trois carbones de l'extrémité."
      },
      {
        "content": "Il peut servir de précurseur à d'autres acides gras n-3, avec une conversion humaine limitée.",
        "correct": true,
        "explanation": "La conversion vers EPA/DHA est quantitativement limitée."
      },
      {
        "content": "Il appartient à la série n-6.",
        "correct": false,
        "explanation": "Il appartient à n-3."
      },
      {
        "content": "L'acide alpha-linolénique est 18:3 Δ9,12,15.",
        "correct": true,
        "explanation": "Il possède trois doubles liaisons."
      }
    ],
    "explanation": "L'acide alpha-linolénique est l'acide gras indispensable 18:3 Δ9,12,15 de la série n-3."
  },
  {
    "order": 73,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quels sont les deux acides gras précurseurs classiquement indispensables chez l'être humain ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide linoléique et acide alpha-linolénique",
        "linoléique et alpha-linolénique",
        "linoleique et alpha-linolenique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les précurseurs indispensables sont le linoléique n-6 et l'alpha-linolénique n-3."
  },
  {
    "order": 74,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "16:1 Δ9 est n-9.",
        "correct": false,
        "explanation": "Il est n-7."
      },
      {
        "content": "Plusieurs positions Δ peuvent être indiquées pour un polyinsaturé.",
        "correct": true,
        "explanation": "Exemple : Δ9,12,15."
      },
      {
        "content": "Pour un mono-insaturé Cn:1 Δx, la série vaut n-(n-x).",
        "correct": true,
        "explanation": "La distance depuis le méthyle correspond à n-x."
      },
      {
        "content": "La notation Δ utilise la numérotation depuis l'extrémité carboxylique.",
        "correct": true,
        "explanation": "Le carboxyle est C1."
      },
      {
        "content": "La série oméga se déduit de la plus petite valeur Δ pour tous les polyinsaturés.",
        "correct": false,
        "explanation": "On utilise la double liaison la plus proche du méthyle, donc le plus grand indice Δ."
      },
      {
        "content": "18:2 Δ9,12 possède deux doubles liaisons.",
        "correct": true,
        "explanation": "Elles commencent en C9 et C12."
      },
      {
        "content": "La notation delta ne peut jamais être utilisée pour un polyinsaturé.",
        "correct": false,
        "explanation": "Elle est particulièrement utile pour eux."
      },
      {
        "content": "18:2 Δ9,12 ne possède qu'une double liaison.",
        "correct": false,
        "explanation": "Il en possède deux."
      },
      {
        "content": "18:1 Δ9 est n-9.",
        "correct": true,
        "explanation": "18-9=9."
      },
      {
        "content": "Δ9 se compte depuis le carbone oméga.",
        "correct": false,
        "explanation": "La notation delta part du carboxyle."
      }
    ],
    "explanation": "Pour passer de Δ à n-/ω, on repère la double liaison la plus proche du méthyle ; 18-12=6 pour le linoléique. En notation Δ, le nombre désigne le premier carbone de la double liaison depuis le carboxyle."
  },
  {
    "order": 75,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel acide gras indispensable correspond à 18:3 Δ9,12,15 n-3 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide alpha-linolénique",
        "alpha-linolénique",
        "alpha-linolenique",
        "ALA",
        "acide alpha linolenique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'acide alpha-linolénique est le précurseur indispensable de la série n-3."
  },
  {
    "order": 76,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle configuration de double liaison produit généralement le coude le plus marqué dans une chaîne d'acide gras ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cis",
        "configuration cis",
        "la configuration cis"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La configuration cis perturbe davantage l'empilement des chaînes que la configuration trans."
  },
  {
    "order": 77,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "À propos de la notation delta, retenez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "La notation Δ utilise la numérotation depuis l'extrémité carboxylique.",
        "correct": true,
        "explanation": "Le carboxyle est C1."
      },
      {
        "content": "18:2 Δ9,12 ne possède qu'une double liaison.",
        "correct": false,
        "explanation": "Il en possède deux."
      },
      {
        "content": "Δ9 se compte depuis le carbone oméga.",
        "correct": false,
        "explanation": "La notation delta part du carboxyle."
      },
      {
        "content": "18:2 Δ9,12 possède deux doubles liaisons.",
        "correct": true,
        "explanation": "Elles commencent en C9 et C12."
      },
      {
        "content": "Δ12 indique que la chaîne contient exactement douze carbones.",
        "correct": false,
        "explanation": "Il indique une position de double liaison."
      }
    ],
    "explanation": "En notation Δ, le nombre désigne le premier carbone de la double liaison depuis le carboxyle.",
    "requiredSelectionCount": 2
  },
  {
    "order": 78,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur les séries oméga, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "16:1 Δ9 appartient à la série n-7.",
        "correct": true,
        "explanation": "16-9=7."
      },
      {
        "content": "Pour un polyinsaturé, la série se déduit de la double liaison la plus proche de l'extrémité méthyle.",
        "correct": true,
        "explanation": "C'est la position Δ la plus élevée."
      },
      {
        "content": "La série n-3 se compte depuis le carboxyle.",
        "correct": false,
        "explanation": "Elle se compte depuis le méthyle terminal."
      },
      {
        "content": "18:2 Δ9,12 appartient à n-9.",
        "correct": false,
        "explanation": "La double liaison la plus proche du méthyle conduit à n-6."
      },
      {
        "content": "La série oméga est définie par la première double liaison rencontrée depuis l'extrémité méthyle.",
        "correct": true,
        "explanation": "C'est l'extrémité n ou ω."
      }
    ],
    "explanation": "La série oméga combine longueur totale et position de la double liaison la plus proche de l'extrémité méthyle."
  }
];
