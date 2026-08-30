import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Acides aminés : structure et rôles biologiques — Section D — UV, ionisation, point isoélectrique et ninhydrine */
export const UE14_BIOCH_CH9_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'absorption UV des acides aminés aromatiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Tous les acides aminés absorbent de façon identique à 280 nm.",
        "correct": false,
        "explanation": "Les chromophores aromatiques dominent."
      },
      {
        "content": "La phénylalanine absorbe beaucoup plus faiblement à 280 nm.",
        "correct": true,
        "explanation": "Son maximum est plutôt vers 257 nm."
      },
      {
        "content": "La phénylalanine absorbe plus fortement que le tryptophane à 280 nm.",
        "correct": false,
        "explanation": "Le tryptophane domine nettement."
      },
      {
        "content": "L'absorbance des protéines à 280 nm dépend principalement de leur teneur en Trp et Tyr.",
        "correct": true,
        "explanation": "D'autres contributions existent mais sont secondaires."
      },
      {
        "content": "La glycine absorbe fortement à 280 nm grâce à son noyau benzénique.",
        "correct": false,
        "explanation": "Elle n'a aucun noyau aromatique."
      }
    ],
    "explanation": "À 280 nm, l'absorbance des protéines est surtout liée à Trp et Tyr ; Phe contribue faiblement et His n'est pas un chromophore majeur à cette longueur d'onde."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant le caractère amphotère des acides aminés, laquelle est correcte ?",
    "choices": [
      {
        "content": "Le groupement ammonium peut se déprotoner lorsque le pH augmente.",
        "correct": true,
        "explanation": "La forme amine devient plus importante."
      },
      {
        "content": "La charge d'un acide aminé est indépendante du pH.",
        "correct": false,
        "explanation": "Elle varie avec le pH."
      },
      {
        "content": "Amphotère signifie que la molécule est toujours électriquement neutre.",
        "correct": false,
        "explanation": "Elle peut porter différentes charges selon le pH."
      },
      {
        "content": "Les chaînes latérales ne peuvent jamais être ionisables.",
        "correct": false,
        "explanation": "Plusieurs le sont."
      },
      {
        "content": "Le carboxyle gagne nécessairement une charge positive en se déprotonant.",
        "correct": false,
        "explanation": "Il devient négatif."
      }
    ],
    "explanation": "Les acides aminés sont amphotères ; leur charge dépend du pH et des pKa de leurs groupes ionisables."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quels deux acides aminés aromatiques contribuent principalement à l'absorbance des protéines à 280 nm ?",
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
    "explanation": "L'absorbance à 280 nm est dominée par tryptophane et tyrosine ; la phénylalanine contribue faiblement et l'histidine n'est pas un contributeur majeur à cette longueur d'onde."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la charge d'un acide aminé selon le pH, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La chaîne latérale doit être prise en compte pour Asp, Glu, Lys, Arg, His, Cys et Tyr notamment.",
        "correct": true,
        "explanation": "Leurs groupes latéraux peuvent s'ioniser."
      },
      {
        "content": "À pH très acide, les fonctions sont davantage protonées et la charge nette tend à être plus positive.",
        "correct": true,
        "explanation": "L'ammonium est protoné et le carboxyle moins dissocié."
      },
      {
        "content": "À pH très acide, le carboxyle est nécessairement COO−.",
        "correct": false,
        "explanation": "Il est davantage sous forme COOH."
      },
      {
        "content": "Le pH n'a aucun effet sur l'état de protonation.",
        "correct": false,
        "explanation": "C'est précisément ce qu'il contrôle."
      },
      {
        "content": "À pH très basique, les fonctions sont davantage déprotonées et la charge nette tend à être plus négative.",
        "correct": true,
        "explanation": "Le carboxylate est présent et l'ammonium perd un proton."
      }
    ],
    "explanation": "Quand le pH augmente, les groupes ionisables se déprotonent progressivement et la charge nette diminue."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant le point isoélectrique, laquelle est correcte ?",
    "choices": [
      {
        "content": "Au pI, aucune fonction n'est ionisée.",
        "correct": false,
        "explanation": "La charge nette est nulle mais des charges locales existent."
      },
      {
        "content": "Le point isoélectrique pI est le pH auquel la charge nette moyenne est nulle.",
        "correct": true,
        "explanation": "La forme zwitterionique peut y être dominante."
      },
      {
        "content": "Un acide aminé acide possède nécessairement un pI supérieur à 10.",
        "correct": false,
        "explanation": "Il est bas."
      },
      {
        "content": "Le pI est une masse exprimée en daltons.",
        "correct": false,
        "explanation": "C'est un pH."
      },
      {
        "content": "Tous les acides aminés ont un pI exactement égal à 7.",
        "correct": false,
        "explanation": "Le pI varie."
      }
    ],
    "explanation": "Le pI est le pH où la charge nette moyenne est nulle, sans disparition des charges locales."
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant le pI de la lysine et de l'aspartate, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "La différence de pI reflète la nature ionisable des chaînes latérales.",
        "correct": true,
        "explanation": "Elle ne dépend pas seulement des fonctions alpha."
      },
      {
        "content": "Le pI est indépendant de toute chaîne latérale ionisable.",
        "correct": false,
        "explanation": "Il en dépend fortement."
      },
      {
        "content": "Le pI de l'aspartate est voisin de 2,8.",
        "correct": true,
        "explanation": "Le carboxylate supplémentaire abaisse son pI."
      },
      {
        "content": "Le pI de la lysine est voisin de 2,8.",
        "correct": false,
        "explanation": "Ce serait un pI acide."
      },
      {
        "content": "Lysine et aspartate ont nécessairement le même pI.",
        "correct": false,
        "explanation": "Leurs chaînes latérales sont très différentes."
      }
    ],
    "explanation": "Le pI de la lysine est élevé (~9,7), celui de l'aspartate bas (~2,8).",
    "requiredSelectionCount": 2
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la réaction à la ninhydrine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La plupart des alpha-aminoacides à amine primaire donnent une coloration bleu-violet avec la ninhydrine.",
        "correct": true,
        "explanation": "Le produit coloré est classiquement appelé pourpre de Ruhemann."
      },
      {
        "content": "La réaction implique notamment désamination et décarboxylation.",
        "correct": true,
        "explanation": "Elle transforme l'acide aminé tout en générant le chromophore."
      },
      {
        "content": "La ninhydrine a longtemps été utilisée pour révéler et doser des acides aminés.",
        "correct": true,
        "explanation": "Elle est adaptée à des analyses chromatographiques."
      },
      {
        "content": "La proline donne classiquement une coloration jaune.",
        "correct": true,
        "explanation": "Son amine secondaire conduit à un produit différent."
      },
      {
        "content": "La proline donne nécessairement le même violet que tous les autres acides aminés.",
        "correct": false,
        "explanation": "Elle donne typiquement du jaune."
      }
    ],
    "explanation": "La ninhydrine donne généralement du violet avec les alpha-aminoacides à amine primaire et du jaune avec la proline."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quels deux acides aminés contribuent principalement à l'absorbance des protéines à 280 nm ?",
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
    "explanation": "À 280 nm, l'absorbance des protéines est surtout liée à Trp et Tyr ; Phe contribue faiblement et His n'est pas un chromophore majeur à cette longueur d'onde."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant le caractère amphotère des acides aminés ?",
    "choices": [
      {
        "content": "La charge d'un acide aminé est indépendante du pH.",
        "correct": false,
        "explanation": "Elle varie avec le pH."
      },
      {
        "content": "Amphotère signifie que la molécule est toujours électriquement neutre.",
        "correct": false,
        "explanation": "Elle peut porter différentes charges selon le pH."
      },
      {
        "content": "Les chaînes latérales ne peuvent jamais être ionisables.",
        "correct": false,
        "explanation": "Plusieurs le sont."
      },
      {
        "content": "Le carboxyle gagne nécessairement une charge positive en se déprotonant.",
        "correct": false,
        "explanation": "Il devient négatif."
      },
      {
        "content": "Le groupement ammonium peut se déprotoner lorsque le pH augmente.",
        "correct": true,
        "explanation": "La forme amine devient plus importante."
      }
    ],
    "explanation": "Les acides aminés sont amphotères ; leur charge dépend du pH et des pKa de leurs groupes ionisables."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le zwitterion, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Zwitterion signifie nécessairement charge globale +2.",
        "correct": false,
        "explanation": "La charge globale peut être nulle."
      },
      {
        "content": "Un zwitterion est entièrement dépourvu de charges.",
        "correct": false,
        "explanation": "Il porte des charges opposées."
      },
      {
        "content": "Charge globale nulle ne signifie pas absence de charges locales.",
        "correct": true,
        "explanation": "Les deux charges sont séparées dans la molécule."
      },
      {
        "content": "Le zwitterion est favorisé sur une large plage de pH pour de nombreux acides aminés.",
        "correct": true,
        "explanation": "Les formes exactes dépendent des pKa."
      },
      {
        "content": "L'ammonium d'un zwitterion simple est négatif.",
        "correct": false,
        "explanation": "Il est positif."
      }
    ],
    "explanation": "Le zwitterion associe des charges locales opposées tout en pouvant avoir une charge nette nulle."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'absorption UV des acides aminés aromatiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'histidine est l'un des principaux responsables de l'absorbance protéique à 280 nm.",
        "correct": false,
        "explanation": "Trp et Tyr dominent classiquement."
      },
      {
        "content": "Tous les acides aminés absorbent de façon identique à 280 nm.",
        "correct": false,
        "explanation": "Les chromophores aromatiques dominent."
      },
      {
        "content": "L'absorbance des protéines à 280 nm dépend principalement de leur teneur en Trp et Tyr.",
        "correct": true,
        "explanation": "D'autres contributions existent mais sont secondaires."
      },
      {
        "content": "La glycine absorbe fortement à 280 nm grâce à son noyau benzénique.",
        "correct": false,
        "explanation": "Elle n'a aucun noyau aromatique."
      },
      {
        "content": "La tyrosine contribue également à l'absorbance autour de 280 nm.",
        "correct": true,
        "explanation": "Son phénol aromatique absorbe dans cette région."
      }
    ],
    "explanation": "À 280 nm, l'absorbance des protéines est surtout liée à Trp et Tyr ; Phe contribue faiblement et His n'est pas un chromophore majeur à cette longueur d'onde."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment qualifie-t-on une molécule capable de se comporter à la fois comme acide et comme base ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "amphotère",
        "amphotere",
        "ampholyte"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les acides aminés sont amphotères ; leur charge dépend du pH et des pKa de leurs groupes ionisables."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant le zwitterion ?",
    "choices": [
      {
        "content": "Le carboxylate d'un zwitterion simple est positif.",
        "correct": false,
        "explanation": "Il est négatif."
      },
      {
        "content": "Un zwitterion porte simultanément une charge positive et une charge négative.",
        "correct": true,
        "explanation": "La charge globale peut être nulle."
      },
      {
        "content": "L'ammonium d'un zwitterion simple est négatif.",
        "correct": false,
        "explanation": "Il est positif."
      },
      {
        "content": "Zwitterion signifie nécessairement charge globale +2.",
        "correct": false,
        "explanation": "La charge globale peut être nulle."
      },
      {
        "content": "Un zwitterion est entièrement dépourvu de charges.",
        "correct": false,
        "explanation": "Il porte des charges opposées."
      }
    ],
    "explanation": "Le zwitterion associe des charges locales opposées tout en pouvant avoir une charge nette nulle."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la charge d'un acide aminé selon le pH, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Tous les acides aminés ont la même courbe de titration.",
        "correct": false,
        "explanation": "Les chaînes latérales ionisables modifient les courbes."
      },
      {
        "content": "À pH très basique, les fonctions sont davantage déprotonées et la charge nette tend à être plus négative.",
        "correct": true,
        "explanation": "Le carboxylate est présent et l'ammonium perd un proton."
      },
      {
        "content": "À pH très acide, les fonctions sont davantage protonées et la charge nette tend à être plus positive.",
        "correct": true,
        "explanation": "L'ammonium est protoné et le carboxyle moins dissocié."
      },
      {
        "content": "La charge nette évolue par paliers autour des pKa.",
        "correct": true,
        "explanation": "Chaque groupe ionisable contribue."
      },
      {
        "content": "Le pH n'a aucun effet sur l'état de protonation.",
        "correct": false,
        "explanation": "C'est précisément ce qu'il contrôle."
      }
    ],
    "explanation": "Quand le pH augmente, les groupes ionisables se déprotonent progressivement et la charge nette diminue."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle est approximativement la charge nette moyenne d'un acide aminé à son point isoélectrique ?",
    "answer": {
      "type": "number",
      "value": 0,
      "tolerance": 0
    },
    "explanation": "Par définition, le point isoélectrique correspond à une charge nette moyenne nulle."
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le pI de la lysine et de l'aspartate ?",
    "choices": [
      {
        "content": "Le pI de la lysine est voisin de 9,7.",
        "correct": true,
        "explanation": "La chaîne latérale basique élève son pI."
      },
      {
        "content": "Des valeurs exactes peuvent varier légèrement selon les tables et conditions.",
        "correct": true,
        "explanation": "Les ordres de grandeur sont les repères utiles."
      },
      {
        "content": "Le pI de l'aspartate est voisin de 2,8.",
        "correct": true,
        "explanation": "Le carboxylate supplémentaire abaisse son pI."
      },
      {
        "content": "La différence de pI reflète la nature ionisable des chaînes latérales.",
        "correct": true,
        "explanation": "Elle ne dépend pas seulement des fonctions alpha."
      },
      {
        "content": "Le pI est indépendant de toute chaîne latérale ionisable.",
        "correct": false,
        "explanation": "Il en dépend fortement."
      }
    ],
    "explanation": "Le pI de la lysine est élevé (~9,7), celui de l'aspartate bas (~2,8)."
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle couleur donne classiquement la proline avec la ninhydrine ?",
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
    "explanation": "La ninhydrine donne généralement du violet avec les alpha-aminoacides à amine primaire et du jaune avec la proline."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant l'absorption UV des acides aminés aromatiques, laquelle est correcte ?",
    "choices": [
      {
        "content": "La glycine absorbe fortement à 280 nm grâce à son noyau benzénique.",
        "correct": false,
        "explanation": "Elle n'a aucun noyau aromatique."
      },
      {
        "content": "L'histidine est l'un des principaux responsables de l'absorbance protéique à 280 nm.",
        "correct": false,
        "explanation": "Trp et Tyr dominent classiquement."
      },
      {
        "content": "Tous les acides aminés absorbent de façon identique à 280 nm.",
        "correct": false,
        "explanation": "Les chromophores aromatiques dominent."
      },
      {
        "content": "Le tryptophane absorbe fortement dans l'UV proche autour de 280 nm.",
        "correct": true,
        "explanation": "Son noyau indole est un chromophore majeur."
      },
      {
        "content": "La phénylalanine absorbe plus fortement que le tryptophane à 280 nm.",
        "correct": false,
        "explanation": "Le tryptophane domine nettement."
      }
    ],
    "explanation": "À 280 nm, l'absorbance des protéines est surtout liée à Trp et Tyr ; Phe contribue faiblement et His n'est pas un chromophore majeur à cette longueur d'onde."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel acide aminé possède un point isoélectrique proche de 9,7 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "lysine",
        "la lysine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La chaîne latérale basique de la lysine élève son point isoélectrique, voisin de 9,7."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un zwitterion est entièrement dépourvu de charges.",
        "correct": false,
        "explanation": "Il porte des charges opposées."
      },
      {
        "content": "L'ammonium d'un zwitterion simple est négatif.",
        "correct": false,
        "explanation": "Il est positif."
      },
      {
        "content": "Le pI de l'aspartate est voisin de 2,8.",
        "correct": true,
        "explanation": "Le carboxylate supplémentaire abaisse son pI."
      },
      {
        "content": "Le pI de la lysine est voisin de 2,8.",
        "correct": false,
        "explanation": "Ce serait un pI acide."
      },
      {
        "content": "Des valeurs exactes peuvent varier légèrement selon les tables et conditions.",
        "correct": true,
        "explanation": "Les ordres de grandeur sont les repères utiles."
      },
      {
        "content": "Le pI de la lysine est voisin de 9,7.",
        "correct": true,
        "explanation": "La chaîne latérale basique élève son pI."
      },
      {
        "content": "Le pI de l'aspartate est voisin de 9,7.",
        "correct": false,
        "explanation": "Son pI est bas."
      },
      {
        "content": "Le pI est indépendant de toute chaîne latérale ionisable.",
        "correct": false,
        "explanation": "Il en dépend fortement."
      },
      {
        "content": "Charge globale nulle ne signifie pas absence de charges locales.",
        "correct": true,
        "explanation": "Les deux charges sont séparées dans la molécule."
      },
      {
        "content": "La différence de pI reflète la nature ionisable des chaînes latérales.",
        "correct": true,
        "explanation": "Elle ne dépend pas seulement des fonctions alpha."
      }
    ],
    "explanation": "Le zwitterion associe des charges locales opposées tout en pouvant avoir une charge nette nulle. Le pI de la lysine est élevé (~9,7), celui de l'aspartate bas (~2,8)."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel acide aminé possède un point isoélectrique proche de 2,8 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "aspartate",
        "acide aspartique",
        "Asp",
        "l'acide aspartique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le groupement carboxylate supplémentaire de l'aspartate abaisse son point isoélectrique, voisin de 2,8."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Que signifie le point isoélectrique d'un acide aminé ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "pH de charge nette nulle",
        "pH où la charge nette est nulle",
        "pH auquel la charge globale est nulle",
        "charge nette nulle"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le pI est le pH où la charge nette moyenne est nulle, sans disparition des charges locales."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sur ce zwitterion simplifié, cliquez sur le groupement carboxylate chargé négativement.",
    "image": {
      "src": "/images/training/ue14/biochimie/acides-amines-structure-roles-biologiques/zwitterion-carboxylate-qzone.svg",
      "alt": "Schéma original d'un acide aminé zwitterionique avec ammonium, carbone alpha, radical R, hydrogène et carboxylate",
      "width": 900,
      "height": 520
    },
    "expectedZones": [
      {
        "id": "carboxylate",
        "label": "Groupement carboxylate COO−",
        "x": 0.76,
        "y": 0.52,
        "tolerance": 0.09
      }
    ],
    "explanation": "Dans la forme zwitterionique, le carboxylate porte la charge négative et l'ammonium la charge positive."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Comment qualifie-t-on une molécule capable de se comporter à la fois comme acide et comme base ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "amphotère",
        "amphotere",
        "ampholyte"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les acides aminés sont amphotères ; leur charge dépend du pH et des pKa de leurs groupes ionisables."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant le zwitterion, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Pour un alpha-aminoacide simple près de la neutralité, l'ammonium est positif et le carboxylate négatif.",
        "correct": true,
        "explanation": "C'est la forme dipolaire classique."
      },
      {
        "content": "Un zwitterion est entièrement dépourvu de charges.",
        "correct": false,
        "explanation": "Il porte des charges opposées."
      },
      {
        "content": "L'ammonium d'un zwitterion simple est négatif.",
        "correct": false,
        "explanation": "Il est positif."
      },
      {
        "content": "Zwitterion signifie nécessairement charge globale +2.",
        "correct": false,
        "explanation": "La charge globale peut être nulle."
      },
      {
        "content": "Le zwitterion est favorisé sur une large plage de pH pour de nombreux acides aminés.",
        "correct": true,
        "explanation": "Les formes exactes dépendent des pKa."
      }
    ],
    "explanation": "Le zwitterion associe des charges locales opposées tout en pouvant avoir une charge nette nulle.",
    "requiredSelectionCount": 2
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la charge d'un acide aminé selon le pH, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le pH n'a aucun effet sur l'état de protonation.",
        "correct": false,
        "explanation": "C'est précisément ce qu'il contrôle."
      },
      {
        "content": "Tous les acides aminés ont la même courbe de titration.",
        "correct": false,
        "explanation": "Les chaînes latérales ionisables modifient les courbes."
      },
      {
        "content": "La charge nette évolue par paliers autour des pKa.",
        "correct": true,
        "explanation": "Chaque groupe ionisable contribue."
      },
      {
        "content": "À pH très acide, le carboxyle est nécessairement COO−.",
        "correct": false,
        "explanation": "Il est davantage sous forme COOH."
      },
      {
        "content": "À pH très basique, les fonctions sont davantage déprotonées et la charge nette tend à être plus négative.",
        "correct": true,
        "explanation": "Le carboxylate est présent et l'ammonium perd un proton."
      }
    ],
    "explanation": "Quand le pH augmente, les groupes ionisables se déprotonent progressivement et la charge nette diminue."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant le point isoélectrique, laquelle est correcte ?",
    "choices": [
      {
        "content": "Le point isoélectrique pI est le pH auquel la charge nette moyenne est nulle.",
        "correct": true,
        "explanation": "La forme zwitterionique peut y être dominante."
      },
      {
        "content": "Tous les acides aminés ont un pI exactement égal à 7.",
        "correct": false,
        "explanation": "Le pI varie."
      },
      {
        "content": "Au pI, aucune fonction n'est ionisée.",
        "correct": false,
        "explanation": "La charge nette est nulle mais des charges locales existent."
      },
      {
        "content": "Le pI est une masse exprimée en daltons.",
        "correct": false,
        "explanation": "C'est un pH."
      },
      {
        "content": "Un acide aminé acide possède nécessairement un pI supérieur à 10.",
        "correct": false,
        "explanation": "Il est bas."
      }
    ],
    "explanation": "Le pI est le pH où la charge nette moyenne est nulle, sans disparition des charges locales."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le pI de la lysine et de l'aspartate ?",
    "choices": [
      {
        "content": "Le pI de l'aspartate est voisin de 9,7.",
        "correct": false,
        "explanation": "Son pI est bas."
      },
      {
        "content": "Lysine et aspartate ont nécessairement le même pI.",
        "correct": false,
        "explanation": "Leurs chaînes latérales sont très différentes."
      },
      {
        "content": "Le pI de la lysine est voisin de 9,7.",
        "correct": true,
        "explanation": "La chaîne latérale basique élève son pI."
      },
      {
        "content": "Des valeurs exactes peuvent varier légèrement selon les tables et conditions.",
        "correct": true,
        "explanation": "Les ordres de grandeur sont les repères utiles."
      },
      {
        "content": "La différence de pI reflète la nature ionisable des chaînes latérales.",
        "correct": true,
        "explanation": "Elle ne dépend pas seulement des fonctions alpha."
      }
    ],
    "explanation": "Le pI de la lysine est élevé (~9,7), celui de l'aspartate bas (~2,8)."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle couleur donne classiquement la proline avec la ninhydrine ?",
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
    "explanation": "La proline possède une amine secondaire et donne classiquement une coloration jaune avec la ninhydrine."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le tryptophane absorbe fortement dans l'UV proche autour de 280 nm.",
        "correct": true,
        "explanation": "Son noyau indole est un chromophore majeur."
      },
      {
        "content": "La phénylalanine absorbe beaucoup plus faiblement à 280 nm.",
        "correct": true,
        "explanation": "Son maximum est plutôt vers 257 nm."
      },
      {
        "content": "À pH très acide, les fonctions sont davantage protonées et la charge nette tend à être plus positive.",
        "correct": true,
        "explanation": "L'ammonium est protoné et le carboxyle moins dissocié."
      },
      {
        "content": "La charge nette évolue par paliers autour des pKa.",
        "correct": true,
        "explanation": "Chaque groupe ionisable contribue."
      },
      {
        "content": "Le pH n'a aucun effet sur l'état de protonation.",
        "correct": false,
        "explanation": "C'est précisément ce qu'il contrôle."
      },
      {
        "content": "Tous les acides aminés ont la même courbe de titration.",
        "correct": false,
        "explanation": "Les chaînes latérales ionisables modifient les courbes."
      },
      {
        "content": "L'histidine est l'un des principaux responsables de l'absorbance protéique à 280 nm.",
        "correct": false,
        "explanation": "Trp et Tyr dominent classiquement."
      },
      {
        "content": "La phénylalanine absorbe plus fortement que le tryptophane à 280 nm.",
        "correct": false,
        "explanation": "Le tryptophane domine nettement."
      },
      {
        "content": "La tyrosine contribue également à l'absorbance autour de 280 nm.",
        "correct": true,
        "explanation": "Son phénol aromatique absorbe dans cette région."
      },
      {
        "content": "Tous les acides aminés absorbent de façon identique à 280 nm.",
        "correct": false,
        "explanation": "Les chromophores aromatiques dominent."
      }
    ],
    "explanation": "À 280 nm, l'absorbance des protéines est surtout liée à Trp et Tyr ; Phe contribue faiblement et His n'est pas un chromophore majeur à cette longueur d'onde. Quand le pH augmente, les groupes ionisables se déprotonent progressivement et la charge nette diminue."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le caractère amphotère des acides aminés ?",
    "choices": [
      {
        "content": "Un acide aminé peut céder ou capter des protons.",
        "correct": true,
        "explanation": "Il possède au minimum des fonctions acide et basique."
      },
      {
        "content": "Le groupement ammonium peut se déprotoner lorsque le pH augmente.",
        "correct": true,
        "explanation": "La forme amine devient plus importante."
      },
      {
        "content": "La charge globale dépend du pH et des pKa de toutes les fonctions ionisables.",
        "correct": true,
        "explanation": "Les chaînes latérales ionisables doivent être prises en compte."
      },
      {
        "content": "Le groupement carboxyle peut se déprotoner.",
        "correct": true,
        "explanation": "Il devient carboxylate."
      },
      {
        "content": "Les chaînes latérales ne peuvent jamais être ionisables.",
        "correct": false,
        "explanation": "Plusieurs le sont."
      }
    ],
    "explanation": "Les acides aminés sont amphotères ; leur charge dépend du pH et des pKa de leurs groupes ionisables."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les relations entre série D/L et configuration R/S des acides aminés, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La glycine possède nécessairement une configuration R ou S.",
        "correct": false,
        "explanation": "Son Cα n'est pas stéréogène."
      },
      {
        "content": "La plupart des L-acides aminés standards sont de configuration S au Cα.",
        "correct": true,
        "explanation": "C'est la correspondance usuelle pour les acides aminés standards."
      },
      {
        "content": "Tout acide aminé D est nécessairement R sans exception.",
        "correct": false,
        "explanation": "Une correspondance universelle D=R est incorrecte."
      },
      {
        "content": "D/L et R/S sont deux systèmes de nomenclature distincts.",
        "correct": true,
        "explanation": "D/L est une nomenclature relative ; R/S suit les règles CIP."
      },
      {
        "content": "La L-cystéine est de configuration R au Cα.",
        "correct": true,
        "explanation": "Le soufre de la chaîne latérale modifie l'ordre des priorités CIP."
      }
    ],
    "explanation": "D/L et R/S ne doivent pas être confondus : L-cystéine constitue l'exception classique à la correspondance L=S."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant la charge d'un acide aminé selon le pH, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "À pH très acide, le carboxyle est nécessairement COO−.",
        "correct": false,
        "explanation": "Il est davantage sous forme COOH."
      },
      {
        "content": "À pH très basique, les fonctions sont davantage déprotonées et la charge nette tend à être plus négative.",
        "correct": true,
        "explanation": "Le carboxylate est présent et l'ammonium perd un proton."
      },
      {
        "content": "Tous les acides aminés ont la même courbe de titration.",
        "correct": false,
        "explanation": "Les chaînes latérales ionisables modifient les courbes."
      },
      {
        "content": "À pH très acide, les fonctions sont davantage protonées et la charge nette tend à être plus positive.",
        "correct": true,
        "explanation": "L'ammonium est protoné et le carboxyle moins dissocié."
      },
      {
        "content": "Augmenter le pH rend toujours la molécule plus positive.",
        "correct": false,
        "explanation": "La tendance est vers des formes plus déprotonées donc plus négatives."
      }
    ],
    "explanation": "Quand le pH augmente, les groupes ionisables se déprotonent progressivement et la charge nette diminue.",
    "requiredSelectionCount": 2
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le point isoélectrique ?",
    "choices": [
      {
        "content": "Le pI dépend des pKa des groupes ionisables.",
        "correct": true,
        "explanation": "Il varie donc avec la chaîne latérale."
      },
      {
        "content": "Les acides aminés fortement basiques ont un pI élevé.",
        "correct": true,
        "explanation": "Lys et Arg ont des pI supérieurs à 9."
      },
      {
        "content": "Le pI est une masse exprimée en daltons.",
        "correct": false,
        "explanation": "C'est un pH."
      },
      {
        "content": "Au pI, aucune fonction n'est ionisée.",
        "correct": false,
        "explanation": "La charge nette est nulle mais des charges locales existent."
      },
      {
        "content": "Tous les acides aminés ont un pI exactement égal à 7.",
        "correct": false,
        "explanation": "Le pI varie."
      }
    ],
    "explanation": "Le pI est le pH où la charge nette moyenne est nulle, sans disparition des charges locales."
  }
];
