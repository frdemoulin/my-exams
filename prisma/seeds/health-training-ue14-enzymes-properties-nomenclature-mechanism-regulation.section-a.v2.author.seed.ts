import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Enzymologie 4.1 — Section A — Catalyse, enzymes, cofacteurs et vitamines */
export const UE14_BIOCH_CH14_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur un catalyseur, laquelle est correcte ?",
    "choices": [
      {
        "content": "Il augmente la vitesse d'une réaction en proposant une voie réactionnelle de plus faible énergie d'activation.",
        "correct": true,
        "explanation": "La barrière cinétique est abaissée."
      },
      {
        "content": "Il rend spontanée une réaction dont le ΔG est positif dans les mêmes conditions.",
        "correct": false,
        "explanation": "Un catalyseur ne modifie pas le ΔG de réaction."
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
      },
      {
        "content": "Il déplace obligatoirement l'équilibre vers les produits.",
        "correct": false,
        "explanation": "Il accélère les deux sens sans changer Keq."
      }
    ],
    "explanation": "Un catalyseur agit sur la cinétique en abaissant l'énergie d'activation ; il ne modifie ni le ΔG global ni la constante d'équilibre."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant la nature des enzymes biologiques, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Une enzyme doit être consommée à chaque molécule de produit formée.",
        "correct": false,
        "explanation": "Elle est régénérée."
      },
      {
        "content": "Toutes les enzymes biologiques sont obligatoirement des protéines.",
        "correct": false,
        "explanation": "Les ribozymes sont des ARN catalytiques."
      },
      {
        "content": "Une enzyme reste toujours active après dénaturation complète.",
        "correct": false,
        "explanation": "La conformation native est généralement essentielle."
      },
      {
        "content": "Certains ARN possèdent une activité catalytique et sont appelés ribozymes.",
        "correct": true,
        "explanation": "La catalyse biologique n'est donc pas exclusivement protéique."
      },
      {
        "content": "Les ribozymes sont des lipides catalytiques.",
        "correct": false,
        "explanation": "Ce sont des ARN."
      }
    ],
    "explanation": "La majorité des enzymes sont protéiques, mais des ARN catalytiques existent : les ribozymes."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "La spécificité enzymatique est-elle toujours absolue ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non",
        "non, elle peut être relative",
        "non, elle est souvent relative"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La spécificité enzymatique concerne à la fois le type de réaction et la reconnaissance du substrat, avec un degré de sélectivité variable."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'affinité enzyme-substrat, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Une forte affinité peut permettre une fixation efficace à faible concentration de substrat.",
        "correct": true,
        "explanation": "La concentration requise dépend cependant du système étudié."
      },
      {
        "content": "Une enzyme à forte affinité ne peut jamais libérer son produit.",
        "correct": false,
        "explanation": "La catalyse exige un cycle comprenant la libération des produits."
      },
      {
        "content": "Elle repose sur de multiples interactions non covalentes entre enzyme et substrat.",
        "correct": true,
        "explanation": "La somme de nombreuses interactions peut stabiliser ES."
      },
      {
        "content": "L'affinité est nécessairement identique pour tous les analogues d'un substrat.",
        "correct": false,
        "explanation": "Les variations structurales modifient souvent la liaison."
      },
      {
        "content": "L'affinité est indépendante de toute interaction moléculaire.",
        "correct": false,
        "explanation": "Elle résulte précisément des interactions enzyme-substrat."
      }
    ],
    "explanation": "L'affinité décrit la liaison enzyme-substrat ; elle ne doit pas être confondue avec la vitesse de transformation chimique."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant les notions d'apoenzyme, cofacteur et holoenzyme.",
    "choices": [
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
        "content": "L'apoenzyme correspond à la partie protéique d'une enzyme nécessitant un cofacteur.",
        "correct": true,
        "explanation": "Seule, elle peut être catalytiquement inactive ou moins active."
      },
      {
        "content": "Certaines enzymes fonctionnent sans cofacteur supplémentaire.",
        "correct": true,
        "explanation": "La présence d'un cofacteur n'est pas une propriété universelle."
      },
      {
        "content": "L'apoenzyme désigne uniquement le cofacteur métallique.",
        "correct": false,
        "explanation": "Elle désigne la partie protéique."
      }
    ],
    "explanation": "Apoenzyme = partie protéique ; cofacteur = composante non protéique requise ; holoenzyme = ensemble fonctionnel.",
    "requiredSelectionCount": 2
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les coenzymes et groupements prosthétiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un groupement prosthétique est toujours un ion métallique libre.",
        "correct": false,
        "explanation": "Il peut être organique ou métallique et est fortement associé."
      },
      {
        "content": "Un groupement prosthétique est lié très fortement, souvent durablement, à la protéine.",
        "correct": true,
        "explanation": "La liaison peut être covalente ou non covalente mais très stable."
      },
      {
        "content": "Un coenzyme est un cofacteur organique.",
        "correct": true,
        "explanation": "NAD+, FAD ou PLP sont des exemples de coenzymes dans différents systèmes."
      },
      {
        "content": "FAD peut être fortement lié comme groupement prosthétique dans de nombreuses flavoprotéines.",
        "correct": true,
        "explanation": "Ce n'est pas pour autant une règle universelle pour toute flavine."
      },
      {
        "content": "FAD est toujours un cosubstrat libre dans toutes les enzymes.",
        "correct": false,
        "explanation": "Il est souvent fortement lié dans les flavoprotéines."
      }
    ],
    "explanation": "Les coenzymes sont des cofacteurs organiques ; certains sont mobiles, d'autres sont fortement liés comme groupements prosthétiques."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement le phosphate de pyridoxal et la vitamine B6 ?",
    "choices": [
      {
        "content": "Le PLP dérive de la vitamine C.",
        "correct": false,
        "explanation": "Il dérive de la vitamine B6."
      },
      {
        "content": "Le PLP est le principal coenzyme des réactions de réplication de l'ADN.",
        "correct": false,
        "explanation": "Il est surtout impliqué dans le métabolisme des acides aminés."
      },
      {
        "content": "L'ALAT est une hydrolase du glycogène.",
        "correct": false,
        "explanation": "C'est une aminotransférase."
      },
      {
        "content": "Le PLP est un ion métallique.",
        "correct": false,
        "explanation": "C'est un coenzyme organique."
      },
      {
        "content": "Le PLP forme des intermédiaires covalents réversibles avec les substrats aminés.",
        "correct": true,
        "explanation": "Cette chimie stabilise des intermédiaires réactionnels."
      }
    ],
    "explanation": "Le PLP, dérivé de la vitamine B6, est un coenzyme central des aminotransférases telles que l'ALAT."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "De quelle vitamine dérive le NAD+ ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "vitamine B3",
        "B3",
        "vitamine PP",
        "niacine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "NAD(P) dérive de la vitamine B3/PP et FAD de la vitamine B2 ; ces coenzymes participent largement aux réactions redox."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Une enzyme peut être spécifique d'un type de réaction.",
        "correct": true,
        "explanation": "La spécificité catalytique porte sur la transformation chimique réalisée."
      },
      {
        "content": "La spécificité n'est pas toujours absolue.",
        "correct": true,
        "explanation": "Certaines enzymes acceptent plusieurs substrats apparentés."
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
      },
      {
        "content": "Le TPP intervient notamment dans la décarboxylation oxydative des alpha-cétoacides.",
        "correct": true,
        "explanation": "Il stabilise un carbanion grâce au noyau thiazolium."
      },
      {
        "content": "Le TPP dérive de la vitamine B2.",
        "correct": false,
        "explanation": "Il dérive de la thiamine B1."
      },
      {
        "content": "La biotine est le coenzyme principal des protéases à sérine.",
        "correct": false,
        "explanation": "Elle intervient surtout dans les carboxylases."
      },
      {
        "content": "Elle peut aussi reconnaître préférentiellement certains substrats ou motifs structuraux.",
        "correct": true,
        "explanation": "La spécificité de substrat est variable selon l'enzyme."
      },
      {
        "content": "Les interactions non covalentes du site actif contribuent à la reconnaissance du substrat.",
        "correct": true,
        "explanation": "Liaisons H, interactions ioniques, hydrophobes et Van der Waals peuvent intervenir."
      },
      {
        "content": "La biotine transporte principalement des groupes phosphate.",
        "correct": false,
        "explanation": "Elle transporte du CO2 activé."
      }
    ],
    "explanation": "Biotine et TPP sont des coenzymes vitaminiques : biotine pour les carboxylations, TPP pour plusieurs transferts/décarboxylations de fragments carbonés. La spécificité enzymatique concerne à la fois le type de réaction et la reconnaissance du substrat, avec un degré de sélectivité variable."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant un catalyseur, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il est régénéré au terme du cycle catalytique.",
        "correct": true,
        "explanation": "Un catalyseur n'est pas consommé stœchiométriquement par la réaction globale."
      },
      {
        "content": "Il accélère l'approche de l'équilibre sans déplacer la position de cet équilibre.",
        "correct": true,
        "explanation": "L'équilibre thermodynamique final est inchangé."
      },
      {
        "content": "Il peut être de nature minérale ou organique.",
        "correct": true,
        "explanation": "La catalyse ne se limite pas aux enzymes biologiques."
      },
      {
        "content": "Il augmente la vitesse d'une réaction en proposant une voie réactionnelle de plus faible énergie d'activation.",
        "correct": true,
        "explanation": "La barrière cinétique est abaissée."
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
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur un catalyseur, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Il rend spontanée une réaction dont le ΔG est positif dans les mêmes conditions.",
        "correct": false,
        "explanation": "Un catalyseur ne modifie pas le ΔG de réaction."
      },
      {
        "content": "Il augmente l'énergie d'activation de la réaction.",
        "correct": false,
        "explanation": "Il la diminue."
      },
      {
        "content": "Il est régénéré au terme du cycle catalytique.",
        "correct": true,
        "explanation": "Un catalyseur n'est pas consommé stœchiométriquement par la réaction globale."
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
      }
    ],
    "explanation": "Un catalyseur agit sur la cinétique en abaissant l'énergie d'activation ; il ne modifie ni le ΔG global ni la constante d'équilibre."
  },
  {
    "order": 12,
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
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur la spécificité enzymatique, laquelle est correcte ?",
    "choices": [
      {
        "content": "La spécificité ne dépend jamais de la structure du site actif.",
        "correct": false,
        "explanation": "La géométrie et la chimie du site actif sont déterminantes."
      },
      {
        "content": "La reconnaissance d'un substrat repose uniquement sur une liaison covalente permanente.",
        "correct": false,
        "explanation": "Elle repose surtout sur un ensemble d'interactions réversibles."
      },
      {
        "content": "Elle peut aussi reconnaître préférentiellement certains substrats ou motifs structuraux.",
        "correct": true,
        "explanation": "La spécificité de substrat est variable selon l'enzyme."
      },
      {
        "content": "Toutes les enzymes ne catalysent qu'une seule réaction sur une seule molécule possible sans aucune tolérance.",
        "correct": false,
        "explanation": "La spécificité peut être plus ou moins étroite."
      },
      {
        "content": "Une enzyme protéolytique reconnaît nécessairement toutes les liaisons peptidiques avec la même efficacité.",
        "correct": false,
        "explanation": "Les protéases ont des préférences de séquence variables."
      }
    ],
    "explanation": "La spécificité enzymatique concerne à la fois le type de réaction et la reconnaissance du substrat, avec un degré de sélectivité variable."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'affinité enzyme-substrat, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une forte affinité peut permettre une fixation efficace à faible concentration de substrat.",
        "correct": true,
        "explanation": "La concentration requise dépend cependant du système étudié."
      },
      {
        "content": "Une forte affinité signifie automatiquement une vitesse maximale élevée.",
        "correct": false,
        "explanation": "La liaison et la catalyse sont des propriétés distinctes."
      },
      {
        "content": "Elle repose sur de multiples interactions non covalentes entre enzyme et substrat.",
        "correct": true,
        "explanation": "La somme de nombreuses interactions peut stabiliser ES."
      },
      {
        "content": "Une enzyme à forte affinité ne peut jamais libérer son produit.",
        "correct": false,
        "explanation": "La catalyse exige un cycle comprenant la libération des produits."
      },
      {
        "content": "L'affinité dépend du microenvironnement du site de liaison.",
        "correct": true,
        "explanation": "pH, ionisation et conformation peuvent l'influencer."
      }
    ],
    "explanation": "L'affinité décrit la liaison enzyme-substrat ; elle ne doit pas être confondue avec la vitesse de transformation chimique."
  },
  {
    "order": 15,
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
    "order": 16,
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
        "content": "Un groupement prosthétique est lié très fortement, souvent durablement, à la protéine.",
        "correct": true,
        "explanation": "La liaison peut être covalente ou non covalente mais très stable."
      },
      {
        "content": "Un groupement prosthétique est toujours un ion métallique libre.",
        "correct": false,
        "explanation": "Il peut être organique ou métallique et est fortement associé."
      },
      {
        "content": "Un coenzyme est un cofacteur organique.",
        "correct": true,
        "explanation": "NAD+, FAD ou PLP sont des exemples de coenzymes dans différents systèmes."
      },
      {
        "content": "Tout coenzyme est obligatoirement lié covalemment et définitivement à l'enzyme.",
        "correct": false,
        "explanation": "Certains sont des cosubstrats diffusibles."
      }
    ],
    "explanation": "Les coenzymes sont des cofacteurs organiques ; certains sont mobiles, d'autres sont fortement liés comme groupements prosthétiques.",
    "requiredSelectionCount": 2
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le phosphate de pyridoxal et la vitamine B6, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'ALAT utilise le PLP.",
        "correct": true,
        "explanation": "Elle catalyse une transamination entre alanine/pyruvate et glutamate/alpha-cétoglutarate."
      },
      {
        "content": "Le PLP forme des intermédiaires covalents réversibles avec les substrats aminés.",
        "correct": true,
        "explanation": "Cette chimie stabilise des intermédiaires réactionnels."
      },
      {
        "content": "Le PLP dérive de la vitamine B6.",
        "correct": true,
        "explanation": "La pyridoxine et formes apparentées sont des précurseurs vitaminiques du PLP."
      },
      {
        "content": "L'ALAT est une hydrolase du glycogène.",
        "correct": false,
        "explanation": "C'est une aminotransférase."
      },
      {
        "content": "Le PLP est un coenzyme majeur des aminotransférases.",
        "correct": true,
        "explanation": "Il permet notamment le transfert réversible de groupes aminés."
      }
    ],
    "explanation": "Le PLP, dérivé de la vitamine B6, est un coenzyme central des aminotransférases telles que l'ALAT."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant les coenzymes NAD et FAD, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "NAD+ dérive de la vitamine B12.",
        "correct": false,
        "explanation": "Il dérive de la niacine B3."
      },
      {
        "content": "NADP+ est chimiquement proche de NAD+ mais possède un phosphate supplémentaire.",
        "correct": true,
        "explanation": "Cette différence contribue à la spécialisation métabolique des couples NAD(H) et NADP(H)."
      },
      {
        "content": "FAD dérive de la vitamine B6.",
        "correct": false,
        "explanation": "Il dérive de la riboflavine B2."
      },
      {
        "content": "NADH est la forme oxydée du couple NAD+/NADH.",
        "correct": false,
        "explanation": "NADH est la forme réduite."
      },
      {
        "content": "FAD et NAD+ ne participent jamais aux réactions d'oxydoréduction.",
        "correct": false,
        "explanation": "C'est précisément un de leurs rôles majeurs."
      }
    ],
    "explanation": "NAD(P) dérive de la vitamine B3/PP et FAD de la vitamine B2 ; ces coenzymes participent largement aux réactions redox."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement la biotine et le thiamine-pyrophosphate ?",
    "choices": [
      {
        "content": "Le TPP intervient notamment dans la décarboxylation oxydative des alpha-cétoacides.",
        "correct": true,
        "explanation": "Il stabilise un carbanion grâce au noyau thiazolium."
      },
      {
        "content": "La biotine est le coenzyme principal des protéases à sérine.",
        "correct": false,
        "explanation": "Elle intervient surtout dans les carboxylases."
      },
      {
        "content": "Le TPP dérive de la vitamine B2.",
        "correct": false,
        "explanation": "Il dérive de la thiamine B1."
      },
      {
        "content": "Le TPP est un ion métallique.",
        "correct": false,
        "explanation": "C'est un coenzyme organique."
      },
      {
        "content": "La biotine transfère du CO2 activé dans les réactions de carboxylation.",
        "correct": true,
        "explanation": "Les carboxylases biotine-dépendantes créent des liaisons C-C."
      }
    ],
    "explanation": "Biotine et TPP sont des coenzymes vitaminiques : biotine pour les carboxylations, TPP pour plusieurs transferts/décarboxylations de fragments carbonés."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un catalyseur modifie-t-il la constante d'équilibre d'une réaction ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non",
        "non, il ne modifie pas l'équilibre",
        "non, Keq est inchangée"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Un catalyseur agit sur la cinétique en abaissant l'énergie d'activation ; il ne modifie ni le ΔG global ni la constante d'équilibre."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans une autre application, comment appelle-t-on un ARN possédant une activité catalytique ?",
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
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "La spécificité enzymatique est-elle toujours absolue ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non",
        "non, elle peut être relative",
        "non, elle est souvent relative"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La spécificité enzymatique concerne à la fois le type de réaction et la reconnaissance du substrat, avec un degré de sélectivité variable."
  }
];
