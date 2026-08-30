import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch9 — Cyclines, CDK et transitions — V2 active */
export const SECTION_B_QUESTIONS: SeedQuestion[] = [
  {
    "order": 23,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de protéine est une CDK sur le plan enzymatique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "kinase",
        "protéine kinase",
        "serine threonine kinase",
        "sérine thréonine kinase"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les CDK sont des protéines kinases qui phosphorylent leurs substrats lorsqu’elles sont activées."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant « Principe cyclines-CDK », quelle est l’unique proposition exacte ?",
    "choices": [
      {
        "content": "Les CDK phosphorylent des protéines cibles lorsqu’elles sont activées.",
        "correct": true,
        "explanation": "Exact : Les CDK phosphorylent des protéines cibles lorsqu’elles sont activées. Les CDK sont des kinases dont l’activité dépend de leur association à des cyclines et de modifications régulatrices. Les concentrations des cyclines oscillent davantage que celles des CDK."
      },
      {
        "content": "Les CDK sont actives au maximum en permanence, indépendamment des cyclines.",
        "correct": false,
        "explanation": "Incorrect : Les CDK sont actives au maximum en permanence, indépendamment des cyclines. À retenir : L’association à une cycline est nécessaire à l’activation fonctionnelle d’une CDK du cycle."
      },
      {
        "content": "Les concentrations de toutes les CDK oscillent de zéro à un maximum à chaque phase.",
        "correct": false,
        "explanation": "Incorrect : Les concentrations de toutes les CDK oscillent de zéro à un maximum à chaque phase. À retenir : La concentration de nombreuses cyclines varie au cours du cycle cellulaire."
      },
      {
        "content": "La dégradation des cyclines est sans effet sur la progression du cycle.",
        "correct": false,
        "explanation": "Incorrect : La dégradation des cyclines est sans effet sur la progression du cycle. À retenir : Les CDK sont régulées aussi par des phosphorylations activatrices ou inhibitrices."
      },
      {
        "content": "Les cyclines sont des phosphatases qui retirent le phosphate des CDK.",
        "correct": false,
        "explanation": "Incorrect : Les cyclines sont des phosphatases qui retirent le phosphate des CDK. À retenir : Les CDK phosphorylent des protéines cibles lorsqu’elles sont activées."
      }
    ],
    "explanation": "Les CDK sont des kinases dont l’activité dépend de leur association à des cyclines et de modifications régulatrices. Les concentrations des cyclines oscillent davantage que celles des CDK."
  },
  {
    "order": 25,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de « Cycline D-CDK4/6 et Rb-E2F », repérez la seule affirmation correcte.",
    "choices": [
      {
        "content": "Les facteurs de croissance suppriment systématiquement la synthèse de cycline D.",
        "correct": false,
        "explanation": "Incorrect : Les facteurs de croissance suppriment systématiquement la synthèse de cycline D. À retenir : La phosphorylation de Rb réduit son frein sur les facteurs E2F."
      },
      {
        "content": "CDK4 et CDK6 sont les principales kinases de séparation des chromatides en anaphase.",
        "correct": false,
        "explanation": "Incorrect : CDK4 et CDK6 sont les principales kinases de séparation des chromatides en anaphase. À retenir : E2F stimule l’expression de gènes nécessaires à la transition G1/S."
      },
      {
        "content": "Les signaux mitogènes favorisent l’expression des cyclines D.",
        "correct": true,
        "explanation": "Exact : Les signaux mitogènes favorisent l’expression des cyclines D. Les mitogènes stimulent l’expression de cyclines D. Les complexes cycline D-CDK4/6 phosphorylent notamment la protéine Rb, ce qui favorise l’activité des facteurs E2F et l’expression de gènes nécessaires à l’entrée en phase S."
      },
      {
        "content": "Rb activée stimule directement E2F en le libérant de toute inhibition.",
        "correct": false,
        "explanation": "Incorrect : Rb activée stimule directement E2F en le libérant de toute inhibition. À retenir : Les cyclines D s’associent principalement à CDK4 et CDK6."
      },
      {
        "content": "La cycline D s’associe exclusivement à CDK1 pour déclencher l’anaphase.",
        "correct": false,
        "explanation": "Incorrect : La cycline D s’associe exclusivement à CDK1 pour déclencher l’anaphase. À retenir : Les signaux mitogènes favorisent l’expression des cyclines D."
      }
    ],
    "explanation": "Les mitogènes stimulent l’expression de cyclines D. Les complexes cycline D-CDK4/6 phosphorylent notamment la protéine Rb, ce qui favorise l’activité des facteurs E2F et l’expression de gènes nécessaires à l’entrée en phase S."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle cycline s’associe principalement à CDK4 et CDK6 en G1 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cycline D",
        "D"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les complexes cycline D-CDK4/6 relaient notamment les signaux mitogènes en G1."
  },
  {
    "order": 27,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle CDK est le partenaire classique de la cycline E à la transition G1/S ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "CDK2",
        "cdk2"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Cycline E-CDK2 est un complexe majeur de la transition G1/S."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Cycline E-CDK2 », lesquelles sont incorrectes ?",
    "choices": [
      {
        "content": "La cycline E s’associe à CDK2.",
        "correct": false,
        "explanation": "Exact : La cycline E s’associe à CDK2. Le complexe cycline E-CDK2 est particulièrement actif à la transition G1/S et contribue à l’engagement dans la réplication."
      },
      {
        "content": "La cycline E est absente de toute transition G1/S.",
        "correct": true,
        "explanation": "Incorrect : La cycline E est absente de toute transition G1/S. À retenir : L’activité cycline E-CDK2 augmente autour de la transition G1/S."
      },
      {
        "content": "L’activité cycline E-CDK2 augmente autour de la transition G1/S.",
        "correct": false,
        "explanation": "Exact : L’activité cycline E-CDK2 augmente autour de la transition G1/S. Le complexe cycline E-CDK2 est particulièrement actif à la transition G1/S et contribue à l’engagement dans la réplication."
      },
      {
        "content": "Cycline E-CDK2 contribue à l’engagement de la cellule vers la phase S.",
        "correct": false,
        "explanation": "Exact : Cycline E-CDK2 contribue à l’engagement de la cellule vers la phase S. Le complexe cycline E-CDK2 est particulièrement actif à la transition G1/S et contribue à l’engagement dans la réplication."
      },
      {
        "content": "Cycline E-CDK2 constitue le principal complexe de sortie d’anaphase.",
        "correct": true,
        "explanation": "Incorrect : Cycline E-CDK2 constitue le principal complexe de sortie d’anaphase. À retenir : La cycline E s’associe à CDK2."
      }
    ],
    "explanation": "Le complexe cycline E-CDK2 est particulièrement actif à la transition G1/S et contribue à l’engagement dans la réplication. Ici, il fallait sélectionner les affirmations incorrectes."
  },
  {
    "order": 29,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Pour le thème « Cycline A et phase S », quelles propositions doivent être retenues ?",
    "choices": [
      {
        "content": "La cycline A peut s’associer à CDK1 à l’approche de la mitose.",
        "correct": true,
        "explanation": "Exact : La cycline A peut s’associer à CDK1 à l’approche de la mitose. La cycline A s’associe à CDK2 pendant la phase S puis à CDK1 à l’approche de la mitose. Elle contribue à la progression de S et à empêcher une nouvelle initiation de réplication."
      },
      {
        "content": "La cycline A est uniquement présente en G0.",
        "correct": false,
        "explanation": "Incorrect : La cycline A est uniquement présente en G0. À retenir : Cycline A-CDK2 participe à la progression de la phase S."
      },
      {
        "content": "Cycline A-CDK2 participe à la progression de la phase S.",
        "correct": true,
        "explanation": "Exact : Cycline A-CDK2 participe à la progression de la phase S. La cycline A s’associe à CDK2 pendant la phase S puis à CDK1 à l’approche de la mitose. Elle contribue à la progression de S et à empêcher une nouvelle initiation de réplication."
      },
      {
        "content": "Cycline A-CDK2 est le complexe qui assemble directement l’anneau actomyosine de cytodiérèse.",
        "correct": false,
        "explanation": "Incorrect : Cycline A-CDK2 est le complexe qui assemble directement l’anneau actomyosine de cytodiérèse. À retenir : La cycline A peut s’associer à CDK1 à l’approche de la mitose."
      },
      {
        "content": "L’activité des CDK de phase S contribue à empêcher une nouvelle initiation sur des origines déjà utilisées.",
        "correct": true,
        "explanation": "Exact : L’activité des CDK de phase S contribue à empêcher une nouvelle initiation sur des origines déjà utilisées. La cycline A s’associe à CDK2 pendant la phase S puis à CDK1 à l’approche de la mitose. Elle contribue à la progression de S et à empêcher une nouvelle initiation de réplication."
      }
    ],
    "explanation": "La cycline A s’associe à CDK2 pendant la phase S puis à CDK1 à l’approche de la mitose. Elle contribue à la progression de S et à empêcher une nouvelle initiation de réplication."
  },
  {
    "order": 30,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel complexe cycline-CDK, historiquement appelé MPF, déclenche l’entrée en mitose ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cycline B-CDK1",
        "cycline B cdk1",
        "CDK1-cycline B",
        "MPF"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le MPF correspond à l’activité cycline B-CDK1."
  },
  {
    "order": 31,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Pour « Cycline B-CDK1 et entrée en mitose », quelles sont exactement les 3 propositions exactes ?",
    "choices": [
      {
        "content": "L’activation de CDK1 favorise la condensation des chromosomes.",
        "correct": true,
        "explanation": "Exact : L’activation de CDK1 favorise la condensation des chromosomes. Cycline B-CDK1, historiquement appelée MPF, déclenche de nombreux événements de l’entrée en mitose : condensation chromosomique, réorganisation des microtubules et désassemblage de l’enveloppe nucléaire."
      },
      {
        "content": "Cycline B s’associe à CDK1 pour former une activité majeure d’entrée en mitose.",
        "correct": true,
        "explanation": "Exact : Cycline B s’associe à CDK1 pour former une activité majeure d’entrée en mitose. Cycline B-CDK1, historiquement appelée MPF, déclenche de nombreux événements de l’entrée en mitose : condensation chromosomique, réorganisation des microtubules et désassemblage de l’enveloppe nucléaire."
      },
      {
        "content": "L’activation de CDK1 maintient obligatoirement l’enveloppe nucléaire intacte.",
        "correct": false,
        "explanation": "Incorrect : L’activation de CDK1 maintient obligatoirement l’enveloppe nucléaire intacte. À retenir : Cycline B-CDK1 est historiquement appelée MPF."
      },
      {
        "content": "Cycline B-CDK1 est historiquement appelée MPF.",
        "correct": true,
        "explanation": "Exact : Cycline B-CDK1 est historiquement appelée MPF. Cycline B-CDK1, historiquement appelée MPF, déclenche de nombreux événements de l’entrée en mitose : condensation chromosomique, réorganisation des microtubules et désassemblage de l’enveloppe nucléaire."
      },
      {
        "content": "Cycline B-CDK1 est le complexe principal de réplication de l’ADN en milieu de phase S.",
        "correct": false,
        "explanation": "Incorrect : Cycline B-CDK1 est le complexe principal de réplication de l’ADN en milieu de phase S. À retenir : Cycline B s’associe à CDK1 pour former une activité majeure d’entrée en mitose."
      }
    ],
    "explanation": "Cycline B-CDK1, historiquement appelée MPF, déclenche de nombreux événements de l’entrée en mitose : condensation chromosomique, réorganisation des microtubules et désassemblage de l’enveloppe nucléaire."
  },
  {
    "order": 32,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant « Protéolyse et transitions » ?",
    "choices": [
      {
        "content": "L’APC/C est une ubiquitine ligase E3.",
        "correct": true,
        "explanation": "Exact : L’APC/C est une ubiquitine ligase E3. Le système ubiquitine-protéasome impose la disparition de régulateurs à des moments précis. L’APC/C est une E3 ubiquitine ligase essentielle pour l’anaphase et la sortie de mitose."
      },
      {
        "content": "L’ubiquitination protège toujours une protéine de toute dégradation.",
        "correct": false,
        "explanation": "Incorrect : L’ubiquitination protège toujours une protéine de toute dégradation. À retenir : L’APC/C est une ubiquitine ligase E3."
      },
      {
        "content": "L’APC/C est une ADN polymérase.",
        "correct": false,
        "explanation": "Incorrect : L’APC/C est une ADN polymérase. À retenir : L’ubiquitination peut cibler une protéine régulatrice vers le protéasome."
      },
      {
        "content": "La sécurine active la séparase tant qu’elle lui reste liée.",
        "correct": false,
        "explanation": "Incorrect : La sécurine active la séparase tant qu’elle lui reste liée. À retenir : APC/C-Cdc20 contribue à la dégradation de la sécurine."
      },
      {
        "content": "L’ubiquitination peut cibler une protéine régulatrice vers le protéasome.",
        "correct": true,
        "explanation": "Exact : L’ubiquitination peut cibler une protéine régulatrice vers le protéasome. Le système ubiquitine-protéasome impose la disparition de régulateurs à des moments précis. L’APC/C est une E3 ubiquitine ligase essentielle pour l’anaphase et la sortie de mitose."
      }
    ],
    "explanation": "Le système ubiquitine-protéasome impose la disparition de régulateurs à des moments précis. L’APC/C est une E3 ubiquitine ligase essentielle pour l’anaphase et la sortie de mitose."
  },
  {
    "order": 33,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Sur le thème « Principe cyclines-CDK », quelle proposition est exacte ?",
    "choices": [
      {
        "content": "La dégradation des cyclines est sans effet sur la progression du cycle.",
        "correct": false,
        "explanation": "Incorrect : La dégradation des cyclines est sans effet sur la progression du cycle. À retenir : Les CDK sont régulées aussi par des phosphorylations activatrices ou inhibitrices."
      },
      {
        "content": "Les concentrations de toutes les CDK oscillent de zéro à un maximum à chaque phase.",
        "correct": false,
        "explanation": "Incorrect : Les concentrations de toutes les CDK oscillent de zéro à un maximum à chaque phase. À retenir : La concentration de nombreuses cyclines varie au cours du cycle cellulaire."
      },
      {
        "content": "L’association à une cycline est nécessaire à l’activation fonctionnelle d’une CDK du cycle.",
        "correct": true,
        "explanation": "Exact : L’association à une cycline est nécessaire à l’activation fonctionnelle d’une CDK du cycle. Les CDK sont des kinases dont l’activité dépend de leur association à des cyclines et de modifications régulatrices. Les concentrations des cyclines oscillent davantage que celles des CDK."
      },
      {
        "content": "Une cycline reste obligatoirement stable pendant toute la vie de la cellule.",
        "correct": false,
        "explanation": "Incorrect : Une cycline reste obligatoirement stable pendant toute la vie de la cellule. À retenir : Une même CDK peut s’associer à différentes cyclines selon le contexte."
      },
      {
        "content": "Les CDK catalysent directement la synthèse de l’ADN sans phosphoryler de substrats.",
        "correct": false,
        "explanation": "Incorrect : Les CDK catalysent directement la synthèse de l’ADN sans phosphoryler de substrats. À retenir : La dégradation contrôlée de cyclines contribue à rendre les transitions du cycle irréversibles."
      }
    ],
    "explanation": "Les CDK sont des kinases dont l’activité dépend de leur association à des cyclines et de modifications régulatrices. Les concentrations des cyclines oscillent davantage que celles des CDK."
  },
  {
    "order": 34,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les mécanismes de « Cycline D-CDK4/6 et Rb-E2F », quelles affirmations sont correctes ?",
    "choices": [
      {
        "content": "Les facteurs de croissance suppriment systématiquement la synthèse de cycline D.",
        "correct": false,
        "explanation": "Incorrect : Les facteurs de croissance suppriment systématiquement la synthèse de cycline D. À retenir : La phosphorylation de Rb réduit son frein sur les facteurs E2F."
      },
      {
        "content": "Les cyclines D s’associent principalement à CDK4 et CDK6.",
        "correct": true,
        "explanation": "Exact : Les cyclines D s’associent principalement à CDK4 et CDK6. Les mitogènes stimulent l’expression de cyclines D. Les complexes cycline D-CDK4/6 phosphorylent notamment la protéine Rb, ce qui favorise l’activité des facteurs E2F et l’expression de gènes nécessaires à l’entrée en phase S."
      },
      {
        "content": "La phosphorylation de Rb réduit son frein sur les facteurs E2F.",
        "correct": true,
        "explanation": "Exact : La phosphorylation de Rb réduit son frein sur les facteurs E2F. Les mitogènes stimulent l’expression de cyclines D. Les complexes cycline D-CDK4/6 phosphorylent notamment la protéine Rb, ce qui favorise l’activité des facteurs E2F et l’expression de gènes nécessaires à l’entrée en phase S."
      },
      {
        "content": "CDK4 et CDK6 sont les principales kinases de séparation des chromatides en anaphase.",
        "correct": false,
        "explanation": "Incorrect : CDK4 et CDK6 sont les principales kinases de séparation des chromatides en anaphase. À retenir : E2F stimule l’expression de gènes nécessaires à la transition G1/S."
      },
      {
        "content": "E2F stimule l’expression de gènes nécessaires à la transition G1/S.",
        "correct": true,
        "explanation": "Exact : E2F stimule l’expression de gènes nécessaires à la transition G1/S. Les mitogènes stimulent l’expression de cyclines D. Les complexes cycline D-CDK4/6 phosphorylent notamment la protéine Rb, ce qui favorise l’activité des facteurs E2F et l’expression de gènes nécessaires à l’entrée en phase S."
      }
    ],
    "explanation": "Les mitogènes stimulent l’expression de cyclines D. Les complexes cycline D-CDK4/6 phosphorylent notamment la protéine Rb, ce qui favorise l’activité des facteurs E2F et l’expression de gènes nécessaires à l’entrée en phase S."
  },
  {
    "order": 35,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sur le thème « Cycline E-CDK2 », sélectionnez exactement 2 propositions exactes.",
    "choices": [
      {
        "content": "Cycline E-CDK2 contribue à l’engagement de la cellule vers la phase S.",
        "correct": true,
        "explanation": "Exact : Cycline E-CDK2 contribue à l’engagement de la cellule vers la phase S. Le complexe cycline E-CDK2 est particulièrement actif à la transition G1/S et contribue à l’engagement dans la réplication."
      },
      {
        "content": "La cycline E est une protéine structurale du kinétochore.",
        "correct": false,
        "explanation": "Incorrect : La cycline E est une protéine structurale du kinétochore. À retenir : Cycline E-CDK2 agit en aval de mécanismes de progression de G1."
      },
      {
        "content": "L’activité cycline E-CDK2 augmente autour de la transition G1/S.",
        "correct": true,
        "explanation": "Exact : L’activité cycline E-CDK2 augmente autour de la transition G1/S. Le complexe cycline E-CDK2 est particulièrement actif à la transition G1/S et contribue à l’engagement dans la réplication."
      },
      {
        "content": "CDK2 est une ubiquitine ligase du complexe APC/C.",
        "correct": false,
        "explanation": "Incorrect : CDK2 est une ubiquitine ligase du complexe APC/C. À retenir : Cycline E-CDK2 contribue à l’engagement de la cellule vers la phase S."
      },
      {
        "content": "Cycline E-CDK2 sépare directement les chromatides en clivant la cohésine.",
        "correct": false,
        "explanation": "Incorrect : Cycline E-CDK2 sépare directement les chromatides en clivant la cohésine. À retenir : Une dérégulation de cycline E peut perturber le contrôle de la réplication."
      }
    ],
    "explanation": "Le complexe cycline E-CDK2 est particulièrement actif à la transition G1/S et contribue à l’engagement dans la réplication."
  },
  {
    "order": 36,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel facteur de transcription est libéré progressivement du frein exercé par Rb lors de la progression G1/S ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "E2F",
        "facteur E2F"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La phosphorylation de Rb favorise l’activité des facteurs E2F et l’expression de gènes de phase S."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les éléments suivants relatifs à « Cycline A et phase S », lesquels sont exacts ?",
    "choices": [
      {
        "content": "La cycline A est dégradée au cours de la mitose.",
        "correct": true,
        "explanation": "Exact : La cycline A est dégradée au cours de la mitose. La cycline A s’associe à CDK2 pendant la phase S puis à CDK1 à l’approche de la mitose. Elle contribue à la progression de S et à empêcher une nouvelle initiation de réplication."
      },
      {
        "content": "La cycline A doit empêcher toute réplication de l’ADN pendant la phase S.",
        "correct": false,
        "explanation": "Incorrect : La cycline A doit empêcher toute réplication de l’ADN pendant la phase S. À retenir : L’activité des CDK de phase S contribue à empêcher une nouvelle initiation sur des origines déjà utilisées."
      },
      {
        "content": "Cycline A-CDK2 participe à la coordination entre réplication et progression du cycle.",
        "correct": true,
        "explanation": "Exact : Cycline A-CDK2 participe à la coordination entre réplication et progression du cycle. La cycline A s’associe à CDK2 pendant la phase S puis à CDK1 à l’approche de la mitose. Elle contribue à la progression de S et à empêcher une nouvelle initiation de réplication."
      },
      {
        "content": "La cycline A peut s’associer à CDK1 à l’approche de la mitose.",
        "correct": true,
        "explanation": "Exact : La cycline A peut s’associer à CDK1 à l’approche de la mitose. La cycline A s’associe à CDK2 pendant la phase S puis à CDK1 à l’approche de la mitose. Elle contribue à la progression de S et à empêcher une nouvelle initiation de réplication."
      },
      {
        "content": "L’activité des CDK de phase S contribue à empêcher une nouvelle initiation sur des origines déjà utilisées.",
        "correct": true,
        "explanation": "Exact : L’activité des CDK de phase S contribue à empêcher une nouvelle initiation sur des origines déjà utilisées. La cycline A s’associe à CDK2 pendant la phase S puis à CDK1 à l’approche de la mitose. Elle contribue à la progression de S et à empêcher une nouvelle initiation de réplication."
      }
    ],
    "explanation": "La cycline A s’associe à CDK2 pendant la phase S puis à CDK1 à l’approche de la mitose. Elle contribue à la progression de S et à empêcher une nouvelle initiation de réplication."
  },
  {
    "order": 38,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "À propos de « Cycline B-CDK1 et entrée en mitose », identifiez exactement cinq propositions exactes parmi les dix suivantes.",
    "choices": [
      {
        "content": "L’activation de CDK1 favorise la condensation des chromosomes.",
        "correct": true,
        "explanation": "Exact : L’activation de CDK1 favorise la condensation des chromosomes. Cycline B-CDK1, historiquement appelée MPF, déclenche de nombreux événements de l’entrée en mitose : condensation chromosomique, réorganisation des microtubules et désassemblage de l’enveloppe nucléaire."
      },
      {
        "content": "L’activation de CDK1 contribue à la réorganisation du réseau de microtubules en fuseau mitotique.",
        "correct": true,
        "explanation": "Exact : L’activation de CDK1 contribue à la réorganisation du réseau de microtubules en fuseau mitotique. Cycline B-CDK1, historiquement appelée MPF, déclenche de nombreux événements de l’entrée en mitose : condensation chromosomique, réorganisation des microtubules et désassemblage de l’enveloppe nucléaire."
      },
      {
        "content": "Cycline B-CDK1 est historiquement appelée MPF.",
        "correct": true,
        "explanation": "Exact : Cycline B-CDK1 est historiquement appelée MPF. Cycline B-CDK1, historiquement appelée MPF, déclenche de nombreux événements de l’entrée en mitose : condensation chromosomique, réorganisation des microtubules et désassemblage de l’enveloppe nucléaire."
      },
      {
        "content": "La destruction de cycline B contribue à l’inactivation de CDK1 lors de la sortie de mitose.",
        "correct": true,
        "explanation": "Exact : La destruction de cycline B contribue à l’inactivation de CDK1 lors de la sortie de mitose. Cycline B-CDK1, historiquement appelée MPF, déclenche de nombreux événements de l’entrée en mitose : condensation chromosomique, réorganisation des microtubules et désassemblage de l’enveloppe nucléaire."
      },
      {
        "content": "MPF désigne un complexe formé par p53 et p21.",
        "correct": false,
        "explanation": "Incorrect : MPF désigne un complexe formé par p53 et p21. À retenir : L’activation de CDK1 favorise la condensation des chromosomes."
      },
      {
        "content": "Cycline B-CDK1 participe au désassemblage de l’enveloppe nucléaire.",
        "correct": true,
        "explanation": "Exact : Cycline B-CDK1 participe au désassemblage de l’enveloppe nucléaire. Cycline B-CDK1, historiquement appelée MPF, déclenche de nombreux événements de l’entrée en mitose : condensation chromosomique, réorganisation des microtubules et désassemblage de l’enveloppe nucléaire."
      },
      {
        "content": "CDK1 est une phosphatase qui déphosphoryle toutes les protéines mitotiques.",
        "correct": false,
        "explanation": "Incorrect : CDK1 est une phosphatase qui déphosphoryle toutes les protéines mitotiques. À retenir : L’activation de CDK1 contribue à la réorganisation du réseau de microtubules en fuseau mitotique."
      },
      {
        "content": "Cycline B-CDK1 provoque directement la synthèse de facteurs de croissance extracellulaires.",
        "correct": false,
        "explanation": "Incorrect : Cycline B-CDK1 provoque directement la synthèse de facteurs de croissance extracellulaires. À retenir : La destruction de cycline B contribue à l’inactivation de CDK1 lors de la sortie de mitose."
      },
      {
        "content": "Cycline B-CDK1 est le complexe principal de réplication de l’ADN en milieu de phase S.",
        "correct": false,
        "explanation": "Incorrect : Cycline B-CDK1 est le complexe principal de réplication de l’ADN en milieu de phase S. À retenir : Cycline B s’associe à CDK1 pour former une activité majeure d’entrée en mitose."
      },
      {
        "content": "La cycline B doit rester stable à forte concentration pour permettre la sortie de mitose.",
        "correct": false,
        "explanation": "Incorrect : La cycline B doit rester stable à forte concentration pour permettre la sortie de mitose. À retenir : Cycline B-CDK1 participe au désassemblage de l’enveloppe nucléaire."
      }
    ],
    "explanation": "Cycline B-CDK1, historiquement appelée MPF, déclenche de nombreux événements de l’entrée en mitose : condensation chromosomique, réorganisation des microtubules et désassemblage de l’enveloppe nucléaire."
  },
  {
    "order": 39,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans une cellule somatique proliférative, quelles propositions sont exactes concernant « Protéolyse et transitions » ?",
    "choices": [
      {
        "content": "L’APC/C est une ubiquitine ligase E3.",
        "correct": true,
        "explanation": "Exact : L’APC/C est une ubiquitine ligase E3. Le système ubiquitine-protéasome impose la disparition de régulateurs à des moments précis. L’APC/C est une E3 ubiquitine ligase essentielle pour l’anaphase et la sortie de mitose."
      },
      {
        "content": "APC/C-Cdc20 contribue à la dégradation de la sécurine.",
        "correct": true,
        "explanation": "Exact : APC/C-Cdc20 contribue à la dégradation de la sécurine. Le système ubiquitine-protéasome impose la disparition de régulateurs à des moments précis. L’APC/C est une E3 ubiquitine ligase essentielle pour l’anaphase et la sortie de mitose."
      },
      {
        "content": "La sécurine active la séparase tant qu’elle lui reste liée.",
        "correct": false,
        "explanation": "Incorrect : La sécurine active la séparase tant qu’elle lui reste liée. À retenir : APC/C-Cdc20 contribue à la dégradation de la sécurine."
      },
      {
        "content": "La dégradation de la sécurine permet l’activation de la séparase.",
        "correct": true,
        "explanation": "Exact : La dégradation de la sécurine permet l’activation de la séparase. Le système ubiquitine-protéasome impose la disparition de régulateurs à des moments précis. L’APC/C est une E3 ubiquitine ligase essentielle pour l’anaphase et la sortie de mitose."
      },
      {
        "content": "La dégradation de cycline B favorise la diminution de l’activité CDK1.",
        "correct": true,
        "explanation": "Exact : La dégradation de cycline B favorise la diminution de l’activité CDK1. Le système ubiquitine-protéasome impose la disparition de régulateurs à des moments précis. L’APC/C est une E3 ubiquitine ligase essentielle pour l’anaphase et la sortie de mitose."
      }
    ],
    "explanation": "Le système ubiquitine-protéasome impose la disparition de régulateurs à des moments précis. L’APC/C est une E3 ubiquitine ligase essentielle pour l’anaphase et la sortie de mitose."
  },
  {
    "order": 40,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Concernant « Principe cyclines-CDK », choisissez exactement 2 affirmations correctes.",
    "choices": [
      {
        "content": "Dans une cellule somatique, les CDK catalysent directement la synthèse de l’ADN sans phosphoryler de substrats.",
        "correct": false,
        "explanation": "Incorrect : Les CDK catalysent directement la synthèse de l’ADN sans phosphoryler de substrats. À retenir : La dégradation contrôlée de cyclines contribue à rendre les transitions du cycle irréversibles."
      },
      {
        "content": "Dans une cellule somatique, une cycline reste obligatoirement stable pendant toute la vie de la cellule.",
        "correct": false,
        "explanation": "Incorrect : Une cycline reste obligatoirement stable pendant toute la vie de la cellule. À retenir : Une même CDK peut s’associer à différentes cyclines selon le contexte."
      },
      {
        "content": "Les CDK sont régulées aussi par des phosphorylations activatrices ou inhibitrices.",
        "correct": true,
        "explanation": "Exact : Les CDK sont régulées aussi par des phosphorylations activatrices ou inhibitrices. Les CDK sont des kinases dont l’activité dépend de leur association à des cyclines et de modifications régulatrices. Les concentrations des cyclines oscillent davantage que celles des CDK."
      },
      {
        "content": "L’activité d’une CDK ne peut jamais être modulée par phosphorylation.",
        "correct": false,
        "explanation": "Incorrect : L’activité d’une CDK ne peut jamais être modulée par phosphorylation. À retenir : Les complexes cycline-CDK déclenchent des programmes de phosphorylation adaptés à chaque phase."
      },
      {
        "content": "La concentration de nombreuses cyclines varie au cours du cycle cellulaire.",
        "correct": true,
        "explanation": "Exact : La concentration de nombreuses cyclines varie au cours du cycle cellulaire. Les CDK sont des kinases dont l’activité dépend de leur association à des cyclines et de modifications régulatrices. Les concentrations des cyclines oscillent davantage que celles des CDK."
      }
    ],
    "explanation": "Les CDK sont des kinases dont l’activité dépend de leur association à des cyclines et de modifications régulatrices. Les concentrations des cyclines oscillent davantage que celles des CDK."
  },
  {
    "order": 41,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle phosphatase active CDK1 en retirant une phosphorylation inhibitrice à l’entrée en mitose ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Cdc25",
        "CDC25"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Cdc25 retire des phosphates inhibiteurs de CDK1 et favorise l’activation du complexe mitotique."
  },
  {
    "order": 42,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles affirmations décrivent correctement « Cycline D-CDK4/6 et Rb-E2F » ?",
    "choices": [
      {
        "content": "Dans une cellule somatique, la phosphorylation de Rb réduit son frein sur les facteurs E2F.",
        "correct": true,
        "explanation": "Exact : La phosphorylation de Rb réduit son frein sur les facteurs E2F. Les mitogènes stimulent l’expression de cyclines D. Les complexes cycline D-CDK4/6 phosphorylent notamment la protéine Rb, ce qui favorise l’activité des facteurs E2F et l’expression de gènes nécessaires à l’entrée en phase S."
      },
      {
        "content": "Dans une cellule somatique, e2F stimule l’expression de gènes nécessaires à la transition G1/S.",
        "correct": true,
        "explanation": "Exact : E2F stimule l’expression de gènes nécessaires à la transition G1/S. Les mitogènes stimulent l’expression de cyclines D. Les complexes cycline D-CDK4/6 phosphorylent notamment la protéine Rb, ce qui favorise l’activité des facteurs E2F et l’expression de gènes nécessaires à l’entrée en phase S."
      },
      {
        "content": "La voie cycline D-CDK4/6 n’intervient jamais dans la phase G1.",
        "correct": false,
        "explanation": "Incorrect : La voie cycline D-CDK4/6 n’intervient jamais dans la phase G1. À retenir : Des inhibiteurs de CDK4/6 peuvent freiner la progression de certaines cellules tumorales."
      },
      {
        "content": "E2F est une protéase qui dégrade les cohésines.",
        "correct": false,
        "explanation": "Incorrect : E2F est une protéase qui dégrade les cohésines. À retenir : L’activité cycline D-CDK4/6 participe à la progression en G1."
      },
      {
        "content": "L’activité cycline D-CDK4/6 participe à la progression en G1.",
        "correct": true,
        "explanation": "Exact : L’activité cycline D-CDK4/6 participe à la progression en G1. Les mitogènes stimulent l’expression de cyclines D. Les complexes cycline D-CDK4/6 phosphorylent notamment la protéine Rb, ce qui favorise l’activité des facteurs E2F et l’expression de gènes nécessaires à l’entrée en phase S."
      }
    ],
    "explanation": "Les mitogènes stimulent l’expression de cyclines D. Les complexes cycline D-CDK4/6 phosphorylent notamment la protéine Rb, ce qui favorise l’activité des facteurs E2F et l’expression de gènes nécessaires à l’entrée en phase S."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions ci-dessous relatives à « Cycline E-CDK2 », laquelle est correcte ?",
    "choices": [
      {
        "content": "Cycline E-CDK2 constitue le principal complexe de sortie d’anaphase.",
        "correct": false,
        "explanation": "Incorrect : Cycline E-CDK2 constitue le principal complexe de sortie d’anaphase. À retenir : La cycline E s’associe à CDK2."
      },
      {
        "content": "Dans une cellule somatique, cycline E-CDK2 contribue à l’engagement de la cellule vers la phase S.",
        "correct": true,
        "explanation": "Exact : Cycline E-CDK2 contribue à l’engagement de la cellule vers la phase S. Le complexe cycline E-CDK2 est particulièrement actif à la transition G1/S et contribue à l’engagement dans la réplication."
      },
      {
        "content": "Dans une cellule somatique, cDK2 est une ubiquitine ligase du complexe APC/C.",
        "correct": false,
        "explanation": "Incorrect : CDK2 est une ubiquitine ligase du complexe APC/C. À retenir : Cycline E-CDK2 contribue à l’engagement de la cellule vers la phase S."
      },
      {
        "content": "Dans une cellule somatique, la cycline E est une protéine structurale du kinétochore.",
        "correct": false,
        "explanation": "Incorrect : La cycline E est une protéine structurale du kinétochore. À retenir : Cycline E-CDK2 agit en aval de mécanismes de progression de G1."
      },
      {
        "content": "La cycline E est absente de toute transition G1/S.",
        "correct": false,
        "explanation": "Incorrect : La cycline E est absente de toute transition G1/S. À retenir : L’activité cycline E-CDK2 augmente autour de la transition G1/S."
      }
    ],
    "explanation": "Le complexe cycline E-CDK2 est particulièrement actif à la transition G1/S et contribue à l’engagement dans la réplication."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans une cellule somatique proliférative, parmi les éléments suivants relatifs à « Cycline A et phase S », lesquels sont exacts ?",
    "choices": [
      {
        "content": "Dans une cellule somatique, l’activité des CDK de phase S contribue à empêcher une nouvelle initiation sur des origines déjà utilisées.",
        "correct": true,
        "explanation": "Exact : L’activité des CDK de phase S contribue à empêcher une nouvelle initiation sur des origines déjà utilisées. La cycline A s’associe à CDK2 pendant la phase S puis à CDK1 à l’approche de la mitose. Elle contribue à la progression de S et à empêcher une nouvelle initiation de réplication."
      },
      {
        "content": "Dans une cellule somatique, la cycline A est dégradée au cours de la mitose.",
        "correct": true,
        "explanation": "Exact : La cycline A est dégradée au cours de la mitose. La cycline A s’associe à CDK2 pendant la phase S puis à CDK1 à l’approche de la mitose. Elle contribue à la progression de S et à empêcher une nouvelle initiation de réplication."
      },
      {
        "content": "Dans une cellule somatique, cycline A-CDK2 participe à la coordination entre réplication et progression du cycle.",
        "correct": true,
        "explanation": "Exact : Cycline A-CDK2 participe à la coordination entre réplication et progression du cycle. La cycline A s’associe à CDK2 pendant la phase S puis à CDK1 à l’approche de la mitose. Elle contribue à la progression de S et à empêcher une nouvelle initiation de réplication."
      },
      {
        "content": "Cycline A-CDK2 participe à la progression de la phase S.",
        "correct": true,
        "explanation": "Exact : Cycline A-CDK2 participe à la progression de la phase S. La cycline A s’associe à CDK2 pendant la phase S puis à CDK1 à l’approche de la mitose. Elle contribue à la progression de S et à empêcher une nouvelle initiation de réplication."
      },
      {
        "content": "Cycline A ne peut s’associer à aucune CDK.",
        "correct": false,
        "explanation": "Incorrect : Cycline A ne peut s’associer à aucune CDK. À retenir : Cycline A-CDK2 participe à la coordination entre réplication et progression du cycle."
      }
    ],
    "explanation": "La cycline A s’associe à CDK2 pendant la phase S puis à CDK1 à l’approche de la mitose. Elle contribue à la progression de S et à empêcher une nouvelle initiation de réplication."
  }
];

export const SECTION_B_QUIZZES: SeedQuiz[] = [
  {
    "order": 3,
    "slug": "cycle-cellulaire-cyclines-1",
    "title": "Cyclines D/E et progression G1/S",
    "description": "Comprendre les premières transitions contrôlées par les cyclines et CDK.",
    "stage": "DISCOVER",
    "sectionOrder": 2,
    "questionOrders": [
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32
    ]
  },
  {
    "order": 4,
    "slug": "cycle-cellulaire-cyclines-2",
    "title": "Cyclines A/B et entrée en mitose",
    "description": "Relier réplication, CDK1 et protéolyse régulée.",
    "stage": "PRACTICE",
    "sectionOrder": 2,
    "questionOrders": [
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44
    ]
  }
];
