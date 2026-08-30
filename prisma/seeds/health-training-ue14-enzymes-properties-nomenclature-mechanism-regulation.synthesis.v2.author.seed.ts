import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Enzymologie 4.1 — Synthèse — Enzymologie 4.1 */
export const UE14_BIOCH_CH14_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant un catalyseur, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Il déplace obligatoirement l'équilibre vers les produits.",
        "correct": false,
        "explanation": "Il accélère les deux sens sans changer Keq."
      },
      {
        "content": "Il rend spontanée une réaction dont le ΔG est positif dans les mêmes conditions.",
        "correct": false,
        "explanation": "Un catalyseur ne modifie pas le ΔG de réaction."
      },
      {
        "content": "Il est régénéré au terme du cycle catalytique.",
        "correct": true,
        "explanation": "Un catalyseur n'est pas consommé stœchiométriquement par la réaction globale."
      },
      {
        "content": "Il est consommé en quantité équimolaire avec le substrat.",
        "correct": false,
        "explanation": "Il est régénéré au cours du cycle."
      },
      {
        "content": "Il augmente l'énergie d'activation de la réaction.",
        "correct": false,
        "explanation": "Il la diminue."
      }
    ],
    "explanation": "Un catalyseur agit sur la cinétique en abaissant l'énergie d'activation ; il ne modifie ni le ΔG global ni la constante d'équilibre."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment appelle-t-on un ARN possédant une activité catalytique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "ribozyme",
        "un ribozyme"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La majorité des enzymes sont protéiques, mais des ARN catalytiques existent : les ribozymes."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant la spécificité enzymatique, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "La reconnaissance d'un substrat repose uniquement sur une liaison covalente permanente.",
        "correct": false,
        "explanation": "Elle repose surtout sur un ensemble d'interactions réversibles."
      },
      {
        "content": "La spécificité n'est pas toujours absolue.",
        "correct": true,
        "explanation": "Certaines enzymes acceptent plusieurs substrats apparentés."
      },
      {
        "content": "La spécificité ne dépend jamais de la structure du site actif.",
        "correct": false,
        "explanation": "La géométrie et la chimie du site actif sont déterminantes."
      },
      {
        "content": "Une enzyme protéolytique reconnaît nécessairement toutes les liaisons peptidiques avec la même efficacité.",
        "correct": false,
        "explanation": "Les protéases ont des préférences de séquence variables."
      },
      {
        "content": "Toutes les enzymes ne catalysent qu'une seule réaction sur une seule molécule possible sans aucune tolérance.",
        "correct": false,
        "explanation": "La spécificité peut être plus ou moins étroite."
      }
    ],
    "explanation": "La spécificité enzymatique concerne à la fois le type de réaction et la reconnaissance du substrat, avec un degré de sélectivité variable."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'affinité enzyme-substrat, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'affinité est nécessairement identique pour tous les analogues d'un substrat.",
        "correct": false,
        "explanation": "Les variations structurales modifient souvent la liaison."
      },
      {
        "content": "L'affinité dépend du microenvironnement du site de liaison.",
        "correct": true,
        "explanation": "pH, ionisation et conformation peuvent l'influencer."
      },
      {
        "content": "Elle repose sur de multiples interactions non covalentes entre enzyme et substrat.",
        "correct": true,
        "explanation": "La somme de nombreuses interactions peut stabiliser ES."
      },
      {
        "content": "Affinité et vitesse catalytique sont deux notions distinctes.",
        "correct": true,
        "explanation": "Une enzyme peut bien lier un substrat sans nécessairement le transformer rapidement."
      },
      {
        "content": "Une forte affinité signifie automatiquement une vitesse maximale élevée.",
        "correct": false,
        "explanation": "La liaison et la catalyse sont des propriétés distinctes."
      }
    ],
    "explanation": "L'affinité décrit la liaison enzyme-substrat ; elle ne doit pas être confondue avec la vitesse de transformation chimique."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment appelle-t-on la partie protéique seule d'une enzyme nécessitant un cofacteur ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "apoenzyme",
        "l'apoenzyme"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Apoenzyme = partie protéique ; cofacteur = composante non protéique requise ; holoenzyme = ensemble fonctionnel."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur les coenzymes et groupements prosthétiques, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "NAD+ est nécessairement un groupement prosthétique fixé en permanence.",
        "correct": false,
        "explanation": "Il agit fréquemment comme cosubstrat mobile."
      },
      {
        "content": "Un coenzyme est un cofacteur organique.",
        "correct": true,
        "explanation": "NAD+, FAD ou PLP sont des exemples de coenzymes dans différents systèmes."
      },
      {
        "content": "FAD est toujours un cosubstrat libre dans toutes les enzymes.",
        "correct": false,
        "explanation": "Il est souvent fortement lié dans les flavoprotéines."
      },
      {
        "content": "Tout coenzyme est obligatoirement lié covalemment et définitivement à l'enzyme.",
        "correct": false,
        "explanation": "Certains sont des cosubstrats diffusibles."
      },
      {
        "content": "FAD peut être fortement lié comme groupement prosthétique dans de nombreuses flavoprotéines.",
        "correct": true,
        "explanation": "Ce n'est pas pour autant une règle universelle pour toute flavine."
      }
    ],
    "explanation": "Les coenzymes sont des cofacteurs organiques ; certains sont mobiles, d'autres sont fortement liés comme groupements prosthétiques.",
    "requiredSelectionCount": 2
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement le phosphate de pyridoxal et la vitamine B6 ?",
    "choices": [
      {
        "content": "L'ALAT utilise le PLP.",
        "correct": true,
        "explanation": "Elle catalyse une transamination entre alanine/pyruvate et glutamate/alpha-cétoglutarate."
      },
      {
        "content": "Le PLP dérive de la vitamine B6.",
        "correct": true,
        "explanation": "La pyridoxine et formes apparentées sont des précurseurs vitaminiques du PLP."
      },
      {
        "content": "Le PLP forme des intermédiaires covalents réversibles avec les substrats aminés.",
        "correct": true,
        "explanation": "Cette chimie stabilise des intermédiaires réactionnels."
      },
      {
        "content": "Le PLP est un coenzyme majeur des aminotransférases.",
        "correct": true,
        "explanation": "Il permet notamment le transfert réversible de groupes aminés."
      },
      {
        "content": "Le PLP dérive de la vitamine C.",
        "correct": false,
        "explanation": "Il dérive de la vitamine B6."
      }
    ],
    "explanation": "Le PLP, dérivé de la vitamine B6, est un coenzyme central des aminotransférases telles que l'ALAT."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les coenzymes NAD et FAD ?",
    "choices": [
      {
        "content": "FAD et NAD+ ne participent jamais aux réactions d'oxydoréduction.",
        "correct": false,
        "explanation": "C'est précisément un de leurs rôles majeurs."
      },
      {
        "content": "NAD+ dérive de la vitamine B12.",
        "correct": false,
        "explanation": "Il dérive de la niacine B3."
      },
      {
        "content": "NADH est la forme oxydée du couple NAD+/NADH.",
        "correct": false,
        "explanation": "NADH est la forme réduite."
      },
      {
        "content": "FAD dérive de la vitamine B6.",
        "correct": false,
        "explanation": "Il dérive de la riboflavine B2."
      },
      {
        "content": "FAD dérive de la riboflavine, vitamine B2.",
        "correct": true,
        "explanation": "Les flavoprotéines utilisent FAD/FADH2 dans des réactions redox."
      }
    ],
    "explanation": "NAD(P) dérive de la vitamine B3/PP et FAD de la vitamine B2 ; ces coenzymes participent largement aux réactions redox."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la biotine et le thiamine-pyrophosphate, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Le TPP est un ion métallique.",
        "correct": false,
        "explanation": "C'est un coenzyme organique."
      },
      {
        "content": "La biotine transporte principalement des groupes phosphate.",
        "correct": false,
        "explanation": "Elle transporte du CO2 activé."
      },
      {
        "content": "Le TPP dérive de la vitamine B2.",
        "correct": false,
        "explanation": "Il dérive de la thiamine B1."
      },
      {
        "content": "Le TPP intervient notamment dans la décarboxylation oxydative des alpha-cétoacides.",
        "correct": true,
        "explanation": "Il stabilise un carbanion grâce au noyau thiazolium."
      },
      {
        "content": "Le thiamine-pyrophosphate dérive de la vitamine B1.",
        "correct": true,
        "explanation": "Le TPP intervient dans des réactions de transfert de fragments carbonés."
      }
    ],
    "explanation": "Biotine et TPP sont des coenzymes vitaminiques : biotine pour les carboxylations, TPP pour plusieurs transferts/décarboxylations de fragments carbonés."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de réaction réalise une aminotransférase ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "transfert d'un groupe amine",
        "transamination",
        "transfert de groupe amine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La nomenclature fonctionnelle décrit souvent substrat et réaction, tandis que la nomenclature EC classe la réaction de façon structurée."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant un catalyseur, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il augmente l'énergie d'activation de la réaction.",
        "correct": false,
        "explanation": "Il la diminue."
      },
      {
        "content": "Il peut être de nature minérale ou organique.",
        "correct": true,
        "explanation": "La catalyse ne se limite pas aux enzymes biologiques."
      },
      {
        "content": "Il est consommé en quantité équimolaire avec le substrat.",
        "correct": false,
        "explanation": "Il est régénéré au cours du cycle."
      },
      {
        "content": "Il est régénéré au terme du cycle catalytique.",
        "correct": true,
        "explanation": "Un catalyseur n'est pas consommé stœchiométriquement par la réaction globale."
      },
      {
        "content": "Il accélère l'approche de l'équilibre sans déplacer la position de cet équilibre.",
        "correct": true,
        "explanation": "L'équilibre thermodynamique final est inchangé."
      }
    ],
    "explanation": "Un catalyseur agit sur la cinétique en abaissant l'énergie d'activation ; il ne modifie ni le ΔG global ni la constante d'équilibre."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle est la nature macromoléculaire de la majorité des enzymes humaines ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "protéique",
        "protéine",
        "protéines"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La majorité des enzymes sont protéiques, mais des ARN catalytiques existent : les ribozymes."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant la spécificité enzymatique, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "La spécificité ne dépend jamais de la structure du site actif.",
        "correct": false,
        "explanation": "La géométrie et la chimie du site actif sont déterminantes."
      },
      {
        "content": "Elle peut aussi reconnaître préférentiellement certains substrats ou motifs structuraux.",
        "correct": true,
        "explanation": "La spécificité de substrat est variable selon l'enzyme."
      },
      {
        "content": "La reconnaissance d'un substrat repose uniquement sur une liaison covalente permanente.",
        "correct": false,
        "explanation": "Elle repose surtout sur un ensemble d'interactions réversibles."
      },
      {
        "content": "Toutes les enzymes ne catalysent qu'une seule réaction sur une seule molécule possible sans aucune tolérance.",
        "correct": false,
        "explanation": "La spécificité peut être plus ou moins étroite."
      },
      {
        "content": "Les interactions non covalentes du site actif contribuent à la reconnaissance du substrat.",
        "correct": true,
        "explanation": "Liaisons H, interactions ioniques, hydrophobes et Van der Waals peuvent intervenir."
      }
    ],
    "explanation": "La spécificité enzymatique concerne à la fois le type de réaction et la reconnaissance du substrat, avec un degré de sélectivité variable.",
    "requiredSelectionCount": 2
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'affinité enzyme-substrat ?",
    "choices": [
      {
        "content": "L'affinité est indépendante de toute interaction moléculaire.",
        "correct": false,
        "explanation": "Elle résulte précisément des interactions enzyme-substrat."
      },
      {
        "content": "Affinité et vitesse catalytique sont deux notions distinctes.",
        "correct": true,
        "explanation": "Une enzyme peut bien lier un substrat sans nécessairement le transformer rapidement."
      },
      {
        "content": "L'affinité dépend du microenvironnement du site de liaison.",
        "correct": true,
        "explanation": "pH, ionisation et conformation peuvent l'influencer."
      },
      {
        "content": "Une forte affinité peut permettre une fixation efficace à faible concentration de substrat.",
        "correct": true,
        "explanation": "La concentration requise dépend cependant du système étudié."
      },
      {
        "content": "Elle repose sur de multiples interactions non covalentes entre enzyme et substrat.",
        "correct": true,
        "explanation": "La somme de nombreuses interactions peut stabiliser ES."
      }
    ],
    "explanation": "L'affinité décrit la liaison enzyme-substrat ; elle ne doit pas être confondue avec la vitesse de transformation chimique."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Concernant les notions d'apoenzyme, cofacteur et holoenzyme, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "L'apoenzyme désigne uniquement le cofacteur métallique.",
        "correct": false,
        "explanation": "Elle désigne la partie protéique."
      },
      {
        "content": "Certaines enzymes fonctionnent sans cofacteur supplémentaire.",
        "correct": true,
        "explanation": "La présence d'un cofacteur n'est pas une propriété universelle."
      },
      {
        "content": "Un cofacteur est nécessairement une protéine.",
        "correct": false,
        "explanation": "Il est par définition non protéique dans ce contexte."
      },
      {
        "content": "Une holoenzyme est une enzyme dont on a retiré son cofacteur.",
        "correct": false,
        "explanation": "C'est au contraire l'ensemble complet fonctionnel."
      },
      {
        "content": "Toutes les enzymes ont obligatoirement un cofacteur.",
        "correct": false,
        "explanation": "Certaines n'en nécessitent pas."
      }
    ],
    "explanation": "Apoenzyme = partie protéique ; cofacteur = composante non protéique requise ; holoenzyme = ensemble fonctionnel."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les coenzymes et groupements prosthétiques, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "FAD est toujours un cosubstrat libre dans toutes les enzymes.",
        "correct": false,
        "explanation": "Il est souvent fortement lié dans les flavoprotéines."
      },
      {
        "content": "Tout coenzyme est obligatoirement lié covalemment et définitivement à l'enzyme.",
        "correct": false,
        "explanation": "Certains sont des cosubstrats diffusibles."
      },
      {
        "content": "FAD peut être fortement lié comme groupement prosthétique dans de nombreuses flavoprotéines.",
        "correct": true,
        "explanation": "Ce n'est pas pour autant une règle universelle pour toute flavine."
      },
      {
        "content": "Un groupement prosthétique est toujours un ion métallique libre.",
        "correct": false,
        "explanation": "Il peut être organique ou métallique et est fortement associé."
      },
      {
        "content": "Un groupement prosthétique est lié très fortement, souvent durablement, à la protéine.",
        "correct": true,
        "explanation": "La liaison peut être covalente ou non covalente mais très stable."
      }
    ],
    "explanation": "Les coenzymes sont des cofacteurs organiques ; certains sont mobiles, d'autres sont fortement liés comme groupements prosthétiques."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "De quelle vitamine dérive le phosphate de pyridoxal ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "vitamine B6",
        "B6",
        "pyridoxine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le PLP, dérivé de la vitamine B6, est un coenzyme central des aminotransférases telles que l'ALAT."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les coenzymes NAD et FAD, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "NADP+ est chimiquement proche de NAD+ mais possède un phosphate supplémentaire.",
        "correct": true,
        "explanation": "Cette différence contribue à la spécialisation métabolique des couples NAD(H) et NADP(H)."
      },
      {
        "content": "NAD+ dérive de la vitamine B12.",
        "correct": false,
        "explanation": "Il dérive de la niacine B3."
      },
      {
        "content": "FAD dérive de la riboflavine, vitamine B2.",
        "correct": true,
        "explanation": "Les flavoprotéines utilisent FAD/FADH2 dans des réactions redox."
      },
      {
        "content": "FAD dérive de la vitamine B6.",
        "correct": false,
        "explanation": "Il dérive de la riboflavine B2."
      },
      {
        "content": "NADH et FADH2 sont des formes réduites de leurs couples respectifs.",
        "correct": true,
        "explanation": "Ils transportent des équivalents réducteurs."
      }
    ],
    "explanation": "NAD(P) dérive de la vitamine B3/PP et FAD de la vitamine B2 ; ces coenzymes participent largement aux réactions redox."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la biotine et le thiamine-pyrophosphate, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le TPP intervient notamment dans la décarboxylation oxydative des alpha-cétoacides.",
        "correct": true,
        "explanation": "Il stabilise un carbanion grâce au noyau thiazolium."
      },
      {
        "content": "La biotine est appelée vitamine B8 en nomenclature française usuelle.",
        "correct": true,
        "explanation": "Elle est aussi appelée vitamine B7 dans de nombreuses nomenclatures internationales."
      },
      {
        "content": "La biotine transfère du CO2 activé dans les réactions de carboxylation.",
        "correct": true,
        "explanation": "Les carboxylases biotine-dépendantes créent des liaisons C-C."
      },
      {
        "content": "La biotine transporte principalement des groupes phosphate.",
        "correct": false,
        "explanation": "Elle transporte du CO2 activé."
      },
      {
        "content": "Le thiamine-pyrophosphate dérive de la vitamine B1.",
        "correct": true,
        "explanation": "Le TPP intervient dans des réactions de transfert de fragments carbonés."
      }
    ],
    "explanation": "Biotine et TPP sont des coenzymes vitaminiques : biotine pour les carboxylations, TPP pour plusieurs transferts/décarboxylations de fragments carbonés."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel suffixe est fréquent dans les noms fonctionnels d'enzymes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "-ase",
        "ase"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La nomenclature fonctionnelle décrit souvent substrat et réaction, tandis que la nomenclature EC classe la réaction de façon structurée."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur le numéro EC, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Un numéro EC comporte quatre niveaux numériques séparés par des points.",
        "correct": true,
        "explanation": "La forme générale est EC x.x.x.x."
      },
      {
        "content": "Le quatrième nombre est toujours la masse moléculaire en kDa.",
        "correct": false,
        "explanation": "C'est un numéro d'ordre/entrée dans la sous-sous-classe."
      },
      {
        "content": "Le premier chiffre ne peut prendre que les valeurs 1 à 6 dans la classification actuelle.",
        "correct": false,
        "explanation": "La classe EC 7 des translocases existe."
      },
      {
        "content": "Tout numéro se terminant par 99 signifie universellement que l'enzyme est mal caractérisée.",
        "correct": false,
        "explanation": "Le suffixe 99 sert souvent à une catégorie « autres » dans une subdivision, pas à une règle générale d'incomplétude."
      },
      {
        "content": "Le numéro EC classe une activité enzymatique selon la réaction catalysée.",
        "correct": true,
        "explanation": "Des protéines différentes peuvent partager une activité EC."
      }
    ],
    "explanation": "Le numéro EC x.x.x.x classe une activité enzymatique selon la réaction ; la classification actuelle comporte sept classes principales.",
    "requiredSelectionCount": 2
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel type de réaction catalyse une déshydrogénase ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "oxydoréduction",
        "réaction redox",
        "transfert d'électrons ou d'hydrogènes"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "EC 1 regroupe les oxydoréductases, dont de nombreuses déshydrogénases."
  }
];
