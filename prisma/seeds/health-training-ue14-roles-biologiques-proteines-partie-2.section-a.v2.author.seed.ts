import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Rôles biologiques des protéines, partie 2 — Section A — Motilité, hémoglobine et albumine */
export const UE14_BIOCH_CH13_SECTION_A_V2: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les myosines comme moteurs moléculaires, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "La myosine II est dépourvue de domaine moteur.",
        "correct": false,
        "explanation": "Les têtes de myosine II portent les domaines moteurs."
      },
      {
        "content": "Les myosines fonctionnent indépendamment de tout nucléotide.",
        "correct": false,
        "explanation": "Le cycle mécanique des myosines est couplé à l'ATP."
      },
      {
        "content": "Les myosines sont des moteurs se déplaçant sur les microtubules.",
        "correct": false,
        "explanation": "Les myosines utilisent l'actine ; kinésines et dynéines utilisent les microtubules."
      },
      {
        "content": "Les myosines convertissent l'énergie de l'hydrolyse de l'ATP en travail mécanique.",
        "correct": true,
        "explanation": "Le domaine moteur possède une activité ATPasique couplée à l'interaction avec l'actine."
      },
      {
        "content": "La myosine II participe à la contraction musculaire et à d'autres processus contractiles.",
        "correct": true,
        "explanation": "La myosine II forme des assemblages bipolaires capables de générer des forces."
      }
    ],
    "explanation": "Les myosines sont des moteurs moléculaires de l'actine qui couplent hydrolyse de l'ATP et production de force ou de mouvement."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos des rôles des myosines, quelle proposition doit être retenue ?",
    "choices": [
      {
        "content": "Les myosines n'interviennent jamais dans la motilité cellulaire.",
        "correct": false,
        "explanation": "La motilité est une fonction importante de plusieurs classes de myosines."
      },
      {
        "content": "Les myosines ne peuvent jamais transporter de cargo intracellulaire.",
        "correct": false,
        "explanation": "Plusieurs classes assurent précisément ce type de transport."
      },
      {
        "content": "Certaines myosines participent au transport intracellulaire de cargos.",
        "correct": true,
        "explanation": "Elles peuvent déplacer des vésicules ou organites le long de l'actine."
      },
      {
        "content": "Toutes les myosines sont exclusivement nucléaires.",
        "correct": false,
        "explanation": "Elles agissent notamment dans le cytoplasme au contact de l'actine."
      },
      {
        "content": "La myosine II est un constituant du cœur lipidique des LDL.",
        "correct": false,
        "explanation": "Il s'agit d'une protéine motrice, non d'un lipide de lipoprotéine."
      }
    ],
    "explanation": "Les myosines participent à la contraction, à la migration, à l'adhérence et à certains transports intracellulaires."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de chaînes légères possède au total une myosine II conventionnelle ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "La myosine II est un hexamère : 2 chaînes lourdes et 4 chaînes légères, avec des têtes motrices qui lient actine et nucléotide."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'hème de l'hémoglobine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'hème est constitué uniquement d'acides aminés.",
        "correct": false,
        "explanation": "C'est un groupement prosthétique porphyrinique contenant du fer."
      },
      {
        "content": "L'hème b associe une protoporphyrine IX à un ion fer.",
        "correct": true,
        "explanation": "La porphyrine coordonne le fer au centre du groupement."
      },
      {
        "content": "Chaque sous-unité d'hémoglobine contient un groupement hème.",
        "correct": true,
        "explanation": "L'hème est le groupement prosthétique qui porte le fer."
      },
      {
        "content": "La protoporphyrine IX ne contient aucun site de coordination métallique.",
        "correct": false,
        "explanation": "Elle coordonne le fer au centre de l'hème."
      },
      {
        "content": "Le fer ferreux Fe2+ permet la fixation réversible de l'oxygène.",
        "correct": true,
        "explanation": "L'oxygène se lie au fer à l'état ferreux."
      }
    ],
    "explanation": "Dans l'hémoglobine fonctionnelle, chaque chaîne porte un hème à Fe2+ ; une HbA possède donc quatre hèmes et jusqu'à quatre sites de fixation d'O2."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant la composition de l'hémoglobine A adulte, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "L'HbA adulte est un tétramère α4.",
        "correct": false,
        "explanation": "Sa composition est α2β2."
      },
      {
        "content": "Chaque tétramère d'HbA est dépourvu de fer.",
        "correct": false,
        "explanation": "Chaque hème contient un fer."
      },
      {
        "content": "La fixation de l'O2 est coopérative entre les sous-unités.",
        "correct": true,
        "explanation": "La liaison d'O2 modifie l'équilibre conformationnel du tétramère."
      },
      {
        "content": "L'HbA ne peut fixer qu'une seule molécule d'O2.",
        "correct": false,
        "explanation": "Ses quatre hèmes permettent jusqu'à quatre molécules d'O2."
      },
      {
        "content": "L'HbA est la forme majoritaire de l'hémoglobine chez l'adulte sain.",
        "correct": true,
        "explanation": "D'autres formes minoritaires coexistent, notamment HbA2 et HbF."
      }
    ],
    "explanation": "L'HbA adulte est un tétramère α2β2 à quatre hèmes, capable de fixer coopérativement jusqu'à quatre O2.",
    "requiredSelectionCount": 2
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'intoxication au monoxyde de carbone ?",
    "choices": [
      {
        "content": "Le CO se lie au fer de l'hème avec une affinité très supérieure à celle de l'O2.",
        "correct": true,
        "explanation": "La carboxyhémoglobine se forme facilement en présence de CO."
      },
      {
        "content": "La carboxyhémoglobine perturbe également la libération d'O2 par les sites restants.",
        "correct": true,
        "explanation": "Le CO augmente l'affinité des autres sous-unités pour l'O2 et déplace la courbe vers la gauche."
      },
      {
        "content": "Le CO augmente la capacité maximale de transport de l'O2.",
        "correct": false,
        "explanation": "Il occupe des sites de l'hème et la diminue."
      },
      {
        "content": "La fixation du CO diminue le nombre de sites disponibles pour l'O2.",
        "correct": true,
        "explanation": "Elle réduit directement la capacité de transport de l'oxygène."
      },
      {
        "content": "L'intoxication au CO peut provoquer une hypoxie tissulaire sévère.",
        "correct": true,
        "explanation": "Le défaut de délivrance d'O2 peut affecter notamment le cerveau et le cœur."
      }
    ],
    "explanation": "Le CO forme la carboxyhémoglobine, bloque des sites de fixation et gêne la libération d'O2, ce qui compromet l'oxygénation tissulaire."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement la méthémoglobine ?",
    "choices": [
      {
        "content": "Une faible proportion de méthémoglobine est continuellement formée puis réduite dans les globules rouges.",
        "correct": true,
        "explanation": "Des systèmes réducteurs maintiennent normalement le taux très bas."
      },
      {
        "content": "La méthémoglobine contient du fer exclusivement sous forme Fe2+.",
        "correct": false,
        "explanation": "Elle est définie par la présence de Fe3+."
      },
      {
        "content": "Le Fe3+ fixe mieux l'O2 que le Fe2+.",
        "correct": false,
        "explanation": "Le Fe3+ ne fixe pas l'O2."
      },
      {
        "content": "La méthémoglobine est la forme majoritaire physiologique de l'Hb adulte.",
        "correct": false,
        "explanation": "Elle n'est normalement présente qu'en faible proportion."
      },
      {
        "content": "La méthémoglobinémie résulte d'une réduction du fer Fe3+ vers Fe2+.",
        "correct": false,
        "explanation": "Elle résulte d'une oxydation vers Fe3+."
      }
    ],
    "explanation": "La méthémoglobine contient Fe3+ et ne fixe pas l'O2 sur les hèmes oxydés ; elle est normalement maintenue à un faible niveau."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Dans quel état d'oxygénation l'HbS polymérise-t-elle préférentiellement ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "désoxygéné",
        "désoxygénée",
        "forme désoxygénée",
        "désoxy-HbS",
        "désoxygénation"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'HbS porte la substitution β6 Glu→Val ; sa forme désoxygénée polymérise, ce qui favorise falciformation, hémolyse et vaso-occlusion."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement l'albumine sérique ?",
    "choices": [
      {
        "content": "L'albumine est un collagène fibrillaire.",
        "correct": false,
        "explanation": "C'est une protéine globulaire soluble."
      },
      {
        "content": "Sa masse moléculaire est d'environ 500 kDa.",
        "correct": false,
        "explanation": "Elle est d'environ 66,5 kDa."
      },
      {
        "content": "L'albumine est absente du plasma normal.",
        "correct": false,
        "explanation": "Elle en est la protéine la plus abondante."
      },
      {
        "content": "L'albumine est synthétisée majoritairement par les érythrocytes.",
        "correct": false,
        "explanation": "Elle est synthétisée par les hépatocytes."
      },
      {
        "content": "C'est la protéine la plus abondante du plasma humain.",
        "correct": true,
        "explanation": "Elle représente environ la moitié, souvent près de 60 %, des protéines plasmatiques selon les références."
      }
    ],
    "explanation": "L'albumine est une protéine hépatique soluble d'environ 66,5 kDa et constitue la protéine plasmatique la plus abondante."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Au sujet des fonctions de l'albumine, sélectionnez toutes les affirmations exactes.",
    "choices": [
      {
        "content": "Elle lie de nombreux médicaments et hormones.",
        "correct": true,
        "explanation": "La liaison à l'albumine influence leur distribution plasmatique."
      },
      {
        "content": "L'albumine est le principal moteur moléculaire de l'actine.",
        "correct": false,
        "explanation": "Cette fonction appartient aux myosines."
      },
      {
        "content": "L'albumine contribue fortement à la pression oncotique plasmatique.",
        "correct": true,
        "explanation": "Sa concentration élevée en fait un déterminant majeur des forces colloïdo-osmotiques."
      },
      {
        "content": "L'albumine n'a aucune influence sur la pression oncotique.",
        "correct": false,
        "explanation": "Elle en est un déterminant majeur."
      },
      {
        "content": "L'albumine ne lie aucun médicament.",
        "correct": false,
        "explanation": "De nombreux médicaments circulent partiellement liés à l'albumine."
      }
    ],
    "explanation": "L'albumine maintient une part importante de la pression oncotique et transporte de nombreux ligands endogènes ou exogènes."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la structure générale de la myosine II, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les chaînes légères de myosine II pèsent environ 500 kDa chacune.",
        "correct": false,
        "explanation": "Cette valeur est incompatible avec leur statut de chaînes légères ; elles sont autour de 20 kDa."
      },
      {
        "content": "Une molécule de myosine II comporte deux chaînes lourdes.",
        "correct": true,
        "explanation": "Les deux chaînes lourdes forment deux têtes et une longue queue en coiled-coil."
      },
      {
        "content": "Elle comporte deux chaînes légères essentielles et deux chaînes légères régulatrices.",
        "correct": true,
        "explanation": "Cela correspond à quatre chaînes légères au total."
      },
      {
        "content": "Les chaînes lourdes de myosine II ont une masse de l'ordre de 200 à 230 kDa.",
        "correct": true,
        "explanation": "La masse exacte dépend de l'isoforme."
      },
      {
        "content": "La myosine II est constituée d'une seule chaîne lourde sans queue.",
        "correct": false,
        "explanation": "Elle possède deux chaînes lourdes avec une longue région en coiled-coil."
      }
    ],
    "explanation": "La myosine II est un hexamère : 2 chaînes lourdes et 4 chaînes légères, avec des têtes motrices qui lient actine et nucléotide."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel état d'oxydation du fer de l'hème permet la fixation réversible de l'O2 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Fe2+",
        "Fe²+",
        "fer ferreux"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Dans l'hémoglobine fonctionnelle, chaque chaîne porte un hème à Fe2+ ; une HbA possède donc quatre hèmes et jusqu'à quatre sites de fixation d'O2."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur la composition de l'hémoglobine A adulte, laquelle est correcte ?",
    "choices": [
      {
        "content": "L'HbA ne peut fixer qu'une seule molécule d'O2.",
        "correct": false,
        "explanation": "Ses quatre hèmes permettent jusqu'à quatre molécules d'O2."
      },
      {
        "content": "L'HbA normale est exclusivement constituée de chaînes bêta.",
        "correct": false,
        "explanation": "Elle possède deux chaînes alpha et deux bêta."
      },
      {
        "content": "Chaque tétramère d'HbA est dépourvu de fer.",
        "correct": false,
        "explanation": "Chaque hème contient un fer."
      },
      {
        "content": "L'HbA est la forme majoritaire de l'hémoglobine chez l'adulte sain.",
        "correct": true,
        "explanation": "D'autres formes minoritaires coexistent, notamment HbA2 et HbF."
      },
      {
        "content": "L'HbA adulte est un tétramère α4.",
        "correct": false,
        "explanation": "Sa composition est α2β2."
      }
    ],
    "explanation": "L'HbA adulte est un tétramère α2β2 à quatre hèmes, capable de fixer coopérativement jusqu'à quatre O2."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'intoxication au monoxyde de carbone, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La carboxyhémoglobine améliore la libération périphérique d'O2.",
        "correct": false,
        "explanation": "Elle compromet au contraire la délivrance d'O2."
      },
      {
        "content": "L'intoxication au CO peut provoquer une hypoxie tissulaire sévère.",
        "correct": true,
        "explanation": "Le défaut de délivrance d'O2 peut affecter notamment le cerveau et le cœur."
      },
      {
        "content": "La carboxyhémoglobine perturbe également la libération d'O2 par les sites restants.",
        "correct": true,
        "explanation": "Le CO augmente l'affinité des autres sous-unités pour l'O2 et déplace la courbe vers la gauche."
      },
      {
        "content": "La fixation du CO diminue le nombre de sites disponibles pour l'O2.",
        "correct": true,
        "explanation": "Elle réduit directement la capacité de transport de l'oxygène."
      },
      {
        "content": "Le CO se lie au fer de l'hème avec une affinité très supérieure à celle de l'O2.",
        "correct": true,
        "explanation": "La carboxyhémoglobine se forme facilement en présence de CO."
      }
    ],
    "explanation": "Le CO forme la carboxyhémoglobine, bloque des sites de fixation et gêne la libération d'O2, ce qui compromet l'oxygénation tissulaire."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "La méthémoglobine peut-elle fixer directement l'O2 sur son fer ferrique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non",
        "non, le Fe3+ ne fixe pas l'O2",
        "non, le fer ferrique ne fixe pas l'O2"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La méthémoglobine contient Fe3+ et ne fixe pas l'O2 sur les hèmes oxydés ; elle est normalement maintenue à un faible niveau."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant les myosines comme moteurs moléculaires.",
    "choices": [
      {
        "content": "La myosine II participe à la contraction musculaire et à d'autres processus contractiles.",
        "correct": true,
        "explanation": "La myosine II forme des assemblages bipolaires capables de générer des forces."
      },
      {
        "content": "La myosine II est dépourvue de domaine moteur.",
        "correct": false,
        "explanation": "Les têtes de myosine II portent les domaines moteurs."
      },
      {
        "content": "Les myosines fonctionnent indépendamment de tout nucléotide.",
        "correct": false,
        "explanation": "Le cycle mécanique des myosines est couplé à l'ATP."
      },
      {
        "content": "Les myosines sont des moteurs se déplaçant sur les microtubules.",
        "correct": false,
        "explanation": "Les myosines utilisent l'actine ; kinésines et dynéines utilisent les microtubules."
      },
      {
        "content": "Différentes classes de myosines assurent des fonctions cellulaires distinctes.",
        "correct": true,
        "explanation": "La famille des myosines est diversifiée et ne se limite pas à la contraction musculaire."
      }
    ],
    "explanation": "Les myosines sont des moteurs moléculaires de l'actine qui couplent hydrolyse de l'ATP et production de force ou de mouvement.",
    "requiredSelectionCount": 2
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Au sujet de l'albumine sérique, sélectionnez toutes les affirmations exactes.",
    "choices": [
      {
        "content": "C'est la protéine la plus abondante du plasma humain.",
        "correct": true,
        "explanation": "Elle représente environ la moitié, souvent près de 60 %, des protéines plasmatiques selon les références."
      },
      {
        "content": "L'albumine est synthétisée majoritairement par les érythrocytes.",
        "correct": false,
        "explanation": "Elle est synthétisée par les hépatocytes."
      },
      {
        "content": "L'albumine est absente du plasma normal.",
        "correct": false,
        "explanation": "Elle en est la protéine la plus abondante."
      },
      {
        "content": "L'albumine est une protéine monomérique soluble.",
        "correct": true,
        "explanation": "Elle circule en grande quantité dans le compartiment vasculaire."
      },
      {
        "content": "Sa masse moléculaire est d'environ 500 kDa.",
        "correct": false,
        "explanation": "Elle est d'environ 66,5 kDa."
      }
    ],
    "explanation": "L'albumine est une protéine hépatique soluble d'environ 66,5 kDa et constitue la protéine plasmatique la plus abondante."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant les fonctions de l'albumine, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "L'albumine n'a aucune influence sur la pression oncotique.",
        "correct": false,
        "explanation": "Elle en est un déterminant majeur."
      },
      {
        "content": "L'albumine ne lie aucun médicament.",
        "correct": false,
        "explanation": "De nombreux médicaments circulent partiellement liés à l'albumine."
      },
      {
        "content": "Elle lie de nombreux médicaments et hormones.",
        "correct": true,
        "explanation": "La liaison à l'albumine influence leur distribution plasmatique."
      },
      {
        "content": "L'albumine est le principal moteur moléculaire de l'actine.",
        "correct": false,
        "explanation": "Cette fonction appartient aux myosines."
      },
      {
        "content": "L'albumine est dédiée exclusivement au transport de l'O2.",
        "correct": false,
        "explanation": "Le transport de l'O2 relève surtout de l'hémoglobine."
      }
    ],
    "explanation": "L'albumine maintient une part importante de la pression oncotique et transporte de nombreux ligands endogènes ou exogènes."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la composition de l'hémoglobine A adulte, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "L'HbA normale est exclusivement constituée de chaînes bêta.",
        "correct": false,
        "explanation": "Elle possède deux chaînes alpha et deux bêta."
      },
      {
        "content": "L'HbA est la forme majoritaire de l'hémoglobine chez l'adulte sain.",
        "correct": true,
        "explanation": "D'autres formes minoritaires coexistent, notamment HbA2 et HbF."
      },
      {
        "content": "La fixation de l'O2 est coopérative entre les sous-unités.",
        "correct": true,
        "explanation": "La liaison d'O2 modifie l'équilibre conformationnel du tétramère."
      },
      {
        "content": "L'HbA adulte est un tétramère α4.",
        "correct": false,
        "explanation": "Sa composition est α2β2."
      },
      {
        "content": "L'HbA est un tétramère α2β2.",
        "correct": true,
        "explanation": "Deux chaînes alpha et deux chaînes bêta constituent l'hémoglobine A."
      }
    ],
    "explanation": "L'HbA adulte est un tétramère α2β2 à quatre hèmes, capable de fixer coopérativement jusqu'à quatre O2."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de transport intracellulaire peut être assuré par certaines myosines ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "transport de vésicules",
        "transport de cargos",
        "transport intracellulaire de cargos",
        "transport d'organites"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les myosines participent à la contraction, à la migration, à l'adhérence et à certains transports intracellulaires."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le CO se fixe uniquement sur les chaînes de globine sans interaction avec l'hème.",
        "correct": false,
        "explanation": "Il se lie au fer de l'hème."
      },
      {
        "content": "Une myosine II fonctionnelle ne contient aucune chaîne légère.",
        "correct": false,
        "explanation": "Elle en contient habituellement quatre, deux essentielles et deux régulatrices."
      },
      {
        "content": "La carboxyhémoglobine perturbe également la libération d'O2 par les sites restants.",
        "correct": true,
        "explanation": "Le CO augmente l'affinité des autres sous-unités pour l'O2 et déplace la courbe vers la gauche."
      },
      {
        "content": "Une molécule de myosine II comporte deux chaînes lourdes.",
        "correct": true,
        "explanation": "Les deux chaînes lourdes forment deux têtes et une longue queue en coiled-coil."
      },
      {
        "content": "Elle comporte deux chaînes légères essentielles et deux chaînes légères régulatrices.",
        "correct": true,
        "explanation": "Cela correspond à quatre chaînes légères au total."
      },
      {
        "content": "Les chaînes légères sont de l'ordre de 17 à 25 kDa, et non de plusieurs centaines de kDa.",
        "correct": true,
        "explanation": "Les chaînes légères sont bien plus petites que les chaînes lourdes."
      },
      {
        "content": "La myosine II est constituée d'une seule chaîne lourde sans queue.",
        "correct": false,
        "explanation": "Elle possède deux chaînes lourdes avec une longue région en coiled-coil."
      },
      {
        "content": "Les chaînes légères de myosine II pèsent environ 500 kDa chacune.",
        "correct": false,
        "explanation": "Cette valeur est incompatible avec leur statut de chaînes légères ; elles sont autour de 20 kDa."
      },
      {
        "content": "Le CO est la forme physiologique normale du ligand de l'hémoglobine.",
        "correct": false,
        "explanation": "Le ligand respiratoire physiologique est l'O2."
      },
      {
        "content": "Chaque tête possède un site de liaison à l'actine et un site nucléotidique ATP/ADP.",
        "correct": true,
        "explanation": "Le domaine moteur couple interaction avec l'actine et cycle ATPasique."
      }
    ],
    "requiredSelectionCount": 5,
    "explanation": "La myosine II est un hexamère : 2 chaînes lourdes et 4 chaînes légères, avec des têtes motrices qui lient actine et nucléotide. Le CO forme la carboxyhémoglobine, bloque des sites de fixation et gêne la libération d'O2, ce qui compromet l'oxygénation tissulaire."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel nom porte l'hémoglobine liée au monoxyde de carbone ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "carboxyhémoglobine",
        "carboxyhemoglobine",
        "HbCO"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le CO forme la carboxyhémoglobine, bloque des sites de fixation et gêne la libération d'O2, ce qui compromet l'oxygénation tissulaire."
  }
];
