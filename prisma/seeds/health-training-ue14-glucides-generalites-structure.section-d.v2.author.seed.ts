import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie – Chapitre 1.1 – Section D – Cyclisation, anomères et pouvoir rotatoire */
export const UE14_BIOCH_CH1_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la cyclisation des aldoses, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une seule configuration anomérique peut exister.",
        "correct": false,
        "explanation": "Les formes alpha et bêta existent."
      },
      {
        "content": "La cyclisation crée un nouveau centre stéréogène au carbone anomérique.",
        "correct": true,
        "explanation": "Deux anomères deviennent possibles."
      },
      {
        "content": "Le carbone anomérique du glucose est C6.",
        "correct": false,
        "explanation": "Il est C1."
      },
      {
        "content": "La cyclisation d'un aldose peut former un hémiacétal intramoléculaire.",
        "correct": true,
        "explanation": "Le carbonyle réagit avec un hydroxyle de la même molécule."
      },
      {
        "content": "Dans le glucose, C1 devient le carbone anomérique après cyclisation.",
        "correct": true,
        "explanation": "Il provient de l'ancien carbone carbonylé."
      }
    ],
    "explanation": "La cyclisation de l'aldéhyde C1 du glucose avec un OH intramoléculaire forme un hémiacétal."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos des pyranoses, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Un pyranose possède un cycle à six sommets incluant un oxygène.",
        "correct": true,
        "explanation": "Cinq carbones et un oxygène forment le cycle du glucopyranose."
      },
      {
        "content": "Le carbone anomérique du glucopyranose est C6.",
        "correct": false,
        "explanation": "Il est C1."
      },
      {
        "content": "Le glucopyranose est obligatoirement plan.",
        "correct": false,
        "explanation": "Le cycle adopte des conformations non planes."
      },
      {
        "content": "Un pyranose ne contient pas d'oxygène dans le cycle.",
        "correct": false,
        "explanation": "Un oxygène fait partie du cycle."
      },
      {
        "content": "Un pyranose possède un cycle à cinq sommets.",
        "correct": false,
        "explanation": "Cela décrit un furanose."
      }
    ],
    "explanation": "Un pyranose est un hétérocycle à six sommets, généralement cinq carbones et un oxygène."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de sommets possède un cycle furanose ?",
    "answer": {
      "type": "number",
      "value": 5,
      "tolerance": 0
    },
    "explanation": "Un furanose est un cycle à cinq sommets incluant un oxygène."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les anomères alpha et bêta, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les anomères diffèrent à tous les centres asymétriques.",
        "correct": false,
        "explanation": "Ils diffèrent au carbone anomérique."
      },
      {
        "content": "Pour un D-glucopyranose, bêta place l'OH anomérique du même côté que le CH2OH de C5.",
        "correct": true,
        "explanation": "Relation cis dans la convention de Haworth."
      },
      {
        "content": "Pour un D-ose en Haworth usuelle, alpha place le substituant anomérique du côté opposé au CH2OH de référence.",
        "correct": true,
        "explanation": "On parle de relation trans dans cette convention."
      },
      {
        "content": "Deux anomères diffèrent uniquement par la configuration du carbone anomérique.",
        "correct": true,
        "explanation": "Ils sont des diastéréoisomères particuliers."
      },
      {
        "content": "Les anomères peuvent s'interconvertir en solution via la forme ouverte.",
        "correct": true,
        "explanation": "C'est la mutarotation."
      }
    ],
    "explanation": "Les anomères alpha et bêta diffèrent uniquement au carbone anomérique."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de la mutarotation, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Le pouvoir rotatoire d'un mélange ne dépend pas de sa composition.",
        "correct": false,
        "explanation": "Il dépend des fractions de chaque forme."
      },
      {
        "content": "Elle implique uniquement une forme alpha sans bêta.",
        "correct": false,
        "explanation": "Les deux anomères coexistent."
      },
      {
        "content": "Elle nécessite la rupture du squelette carboné.",
        "correct": false,
        "explanation": "Seule la fonction hémiacétal s'ouvre et se referme."
      },
      {
        "content": "Elle passe par une petite fraction de forme ouverte.",
        "correct": true,
        "explanation": "Cette forme permet la reformation des deux anomères."
      },
      {
        "content": "La mutarotation change D-glucose en L-glucose.",
        "correct": false,
        "explanation": "La série D/L n'est pas inversée."
      }
    ],
    "explanation": "La mutarotation résulte de l'équilibre dynamique entre anomères via une forme ouverte."
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur l'équilibre des formes du D-glucose, retenez exactement les deux exactes.",
    "choices": [
      {
        "content": "Les formes cycliques ne peuvent jamais s'ouvrir.",
        "correct": false,
        "explanation": "Elles sont en équilibre avec une faible fraction ouverte."
      },
      {
        "content": "Le bêta-D-glucopyranose est généralement plus abondant que l'alpha-D-glucopyranose.",
        "correct": true,
        "explanation": "Sa conformation place les substituants volumineux dans des positions favorables."
      },
      {
        "content": "L'alpha-D-glucopyranose est toujours présent à 99 %.",
        "correct": false,
        "explanation": "Le bêta est généralement majoritaire."
      },
      {
        "content": "En solution aqueuse, les formes cycliques du D-glucose sont très majoritaires.",
        "correct": true,
        "explanation": "La forme ouverte est présente à l'état de trace."
      },
      {
        "content": "La forme ouverte représente la quasi-totalité du glucose en eau neutre.",
        "correct": false,
        "explanation": "Elle est très minoritaire."
      }
    ],
    "explanation": "Le D-glucose est presque entièrement cyclique en eau, avec une faible fraction ouverte permettant la mutarotation.",
    "requiredSelectionCount": 2
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le pouvoir rotatoire des oses, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le signe négatif correspond à une rotation lévogyre.",
        "correct": true,
        "explanation": "Le sens est opposé au cas positif."
      },
      {
        "content": "Tout D-ose a un pouvoir rotatoire positif.",
        "correct": false,
        "explanation": "Le D-fructose est un contre-exemple classique."
      },
      {
        "content": "Une substance chirale peut dévier le plan de la lumière polarisée.",
        "correct": true,
        "explanation": "Le phénomène est mesuré par polarimétrie."
      },
      {
        "content": "D/L ne permet pas de prédire le signe +/−.",
        "correct": true,
        "explanation": "Ce sont deux classifications indépendantes."
      },
      {
        "content": "Le signe positif correspond conventionnellement à une rotation dextrogyre.",
        "correct": true,
        "explanation": "Il décrit un sens de rotation mesuré."
      }
    ],
    "explanation": "Le pouvoir rotatoire est une propriété expérimentale liée à la chiralité et indépendante de la notation D/L."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle est la rotation optique nette idéale d'un mélange racémique ?",
    "answer": {
      "type": "number",
      "value": 0,
      "tolerance": 0.01
    },
    "explanation": "Un racémique est un mélange équimolaire d'énantiomères dont les rotations s'annulent."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur la cyclisation des aldoses, laquelle est exacte ?",
    "choices": [
      {
        "content": "Une seule configuration anomérique peut exister.",
        "correct": false,
        "explanation": "Les formes alpha et bêta existent."
      },
      {
        "content": "La cyclisation d'un aldose peut former un hémiacétal intramoléculaire.",
        "correct": true,
        "explanation": "Le carbonyle réagit avec un hydroxyle de la même molécule."
      },
      {
        "content": "La cyclisation détruit le squelette carboné.",
        "correct": false,
        "explanation": "La chaîne se referme sans perte de carbone."
      },
      {
        "content": "La cyclisation transforme le glucose en un autre élément chimique.",
        "correct": false,
        "explanation": "Il s'agit d'un changement de forme moléculaire."
      },
      {
        "content": "Le carbone anomérique du glucose est C6.",
        "correct": false,
        "explanation": "Il est C1."
      }
    ],
    "explanation": "La cyclisation de l'aldéhyde C1 du glucose avec un OH intramoléculaire forme un hémiacétal."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les pyranoses, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le glucopyranose peut exister en anomères alpha et bêta.",
        "correct": true,
        "explanation": "Ils diffèrent au carbone C1."
      },
      {
        "content": "Un pyranose possède un cycle à cinq sommets.",
        "correct": false,
        "explanation": "Cela décrit un furanose."
      },
      {
        "content": "Une conformation chaise est favorable pour de nombreux pyranoses.",
        "correct": true,
        "explanation": "Elle limite les interactions stériques."
      },
      {
        "content": "Un pyranose possède un cycle à six sommets incluant un oxygène.",
        "correct": true,
        "explanation": "Cinq carbones et un oxygène forment le cycle du glucopyranose."
      },
      {
        "content": "Le glucose est majoritairement sous forme pyranique en solution aqueuse.",
        "correct": true,
        "explanation": "Les formes ouvertes sont très minoritaires."
      }
    ],
    "explanation": "Un pyranose est un hétérocycle à six sommets, généralement cinq carbones et un oxygène."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la cyclisation des aldoses, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Dans le glucose, C1 devient le carbone anomérique après cyclisation.",
        "correct": true,
        "explanation": "Il provient de l'ancien carbone carbonylé."
      },
      {
        "content": "La cyclisation crée un nouveau centre stéréogène au carbone anomérique.",
        "correct": true,
        "explanation": "Deux anomères deviennent possibles."
      },
      {
        "content": "Une seule configuration anomérique peut exister.",
        "correct": false,
        "explanation": "Les formes alpha et bêta existent."
      },
      {
        "content": "La chaîne carbonée reste intacte lors de la cyclisation.",
        "correct": true,
        "explanation": "La réaction forme un cycle sans perte de carbone."
      },
      {
        "content": "La cyclisation d'un aldose peut former un hémiacétal intramoléculaire.",
        "correct": true,
        "explanation": "Le carbonyle réagit avec un hydroxyle de la même molécule."
      }
    ],
    "explanation": "La cyclisation de l'aldéhyde C1 du glucose avec un OH intramoléculaire forme un hémiacétal."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de sommets possède un cycle pyranose ?",
    "answer": {
      "type": "number",
      "value": 6,
      "tolerance": 0
    },
    "explanation": "Un pyranose est un hétérocycle à six sommets, généralement cinq carbones et un oxygène."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur les furanoses, laquelle est exacte ?",
    "choices": [
      {
        "content": "Un furanose est dépourvu d'oxygène cyclique.",
        "correct": false,
        "explanation": "Il en possède un."
      },
      {
        "content": "Le ribose est souvent représenté sous forme furanose dans les nucléotides.",
        "correct": true,
        "explanation": "Le ribofuranose constitue le sucre de l'ARN."
      },
      {
        "content": "Le fructose ne peut jamais se cycliser.",
        "correct": false,
        "explanation": "Il forme des furanoses et des pyranoses."
      },
      {
        "content": "Un furanose possède six sommets.",
        "correct": false,
        "explanation": "Cela décrit un pyranose."
      },
      {
        "content": "La forme furanose impose la série L.",
        "correct": false,
        "explanation": "D/L est indépendante de la taille du cycle."
      }
    ],
    "explanation": "Un furanose est un cycle à cinq sommets incluant un oxygène."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les anomères alpha et bêta, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Alpha et bêta diffèrent par la série D/L.",
        "correct": false,
        "explanation": "La série D/L reste la même."
      },
      {
        "content": "Deux anomères diffèrent uniquement par la configuration du carbone anomérique.",
        "correct": true,
        "explanation": "Ils sont des diastéréoisomères particuliers."
      },
      {
        "content": "Pour un D-ose en Haworth usuelle, alpha place le substituant anomérique du côté opposé au CH2OH de référence.",
        "correct": true,
        "explanation": "On parle de relation trans dans cette convention."
      },
      {
        "content": "Pour un D-glucopyranose, bêta place l'OH anomérique du même côté que le CH2OH de C5.",
        "correct": true,
        "explanation": "Relation cis dans la convention de Haworth."
      },
      {
        "content": "Les anomères peuvent s'interconvertir en solution via la forme ouverte.",
        "correct": true,
        "explanation": "C'est la mutarotation."
      }
    ],
    "explanation": "Les anomères alpha et bêta diffèrent uniquement au carbone anomérique."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos de la mutarotation, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Elle implique uniquement une forme alpha sans bêta.",
        "correct": false,
        "explanation": "Les deux anomères coexistent."
      },
      {
        "content": "Elle correspond à l'évolution du pouvoir rotatoire lors de l'interconversion des anomères.",
        "correct": true,
        "explanation": "L'ouverture et la refermeture modifient les proportions alpha/bêta."
      },
      {
        "content": "Le pouvoir rotatoire final dépend des proportions des formes présentes.",
        "correct": true,
        "explanation": "Il s'agit d'une moyenne pondérée."
      },
      {
        "content": "La mutarotation change D-glucose en L-glucose.",
        "correct": false,
        "explanation": "La série D/L n'est pas inversée."
      },
      {
        "content": "Le pouvoir rotatoire d'un mélange ne dépend pas de sa composition.",
        "correct": false,
        "explanation": "Il dépend des fractions de chaque forme."
      }
    ],
    "explanation": "La mutarotation résulte de l'équilibre dynamique entre anomères via une forme ouverte.",
    "requiredSelectionCount": 2
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'équilibre des formes du D-glucose, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La forme ouverte représente la quasi-totalité du glucose en eau neutre.",
        "correct": false,
        "explanation": "Elle est très minoritaire."
      },
      {
        "content": "L'alpha-D-glucopyranose est toujours présent à 99 %.",
        "correct": false,
        "explanation": "Le bêta est généralement majoritaire."
      },
      {
        "content": "La forme ouverte permet l'interconversion alpha/bêta.",
        "correct": true,
        "explanation": "Elle est indispensable à la mutarotation."
      },
      {
        "content": "Le bêta-D-glucopyranose est généralement plus abondant que l'alpha-D-glucopyranose.",
        "correct": true,
        "explanation": "Sa conformation place les substituants volumineux dans des positions favorables."
      },
      {
        "content": "Les formes cycliques ne peuvent jamais s'ouvrir.",
        "correct": false,
        "explanation": "Elles sont en équilibre avec une faible fraction ouverte."
      }
    ],
    "explanation": "Le D-glucose est presque entièrement cyclique en eau, avec une faible fraction ouverte permettant la mutarotation."
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel instrument mesure le pouvoir rotatoire d'une solution ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "polarimètre",
        "polarimetre",
        "un polarimètre",
        "un polarimetre"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le pouvoir rotatoire est une propriété expérimentale liée à la chiralité et indépendante de la notation D/L."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos d'un mélange racémique, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Un mélange racémique contient uniquement un énantiomère.",
        "correct": false,
        "explanation": "Il en contient deux en proportions égales."
      },
      {
        "content": "Un racémique est nécessairement une molécule achirale unique.",
        "correct": false,
        "explanation": "C'est un mélange de molécules chirales."
      },
      {
        "content": "Un racémique possède une rotation deux fois plus forte qu'un énantiomère pur.",
        "correct": false,
        "explanation": "Les rotations se compensent."
      },
      {
        "content": "Un mélange alpha/bêta à 50/50 est automatiquement un racémique.",
        "correct": false,
        "explanation": "Alpha et bêta sont des anomères, pas des énantiomères."
      },
      {
        "content": "Les rotations optiques des énantiomères se compensent dans les mêmes conditions.",
        "correct": true,
        "explanation": "Le mélange a une rotation nette nulle."
      }
    ],
    "explanation": "Un racémique est un mélange équimolaire d'énantiomères dont les rotations s'annulent."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la cyclisation des aldoses, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Dans le glucose, C1 devient le carbone anomérique après cyclisation.",
        "correct": true,
        "explanation": "Il provient de l'ancien carbone carbonylé."
      },
      {
        "content": "La cyclisation crée un nouveau centre stéréogène au carbone anomérique.",
        "correct": true,
        "explanation": "Deux anomères deviennent possibles."
      },
      {
        "content": "La cyclisation transforme le glucose en un autre élément chimique.",
        "correct": false,
        "explanation": "Il s'agit d'un changement de forme moléculaire."
      },
      {
        "content": "Le carbone anomérique du glucose est C6.",
        "correct": false,
        "explanation": "Il est C1."
      },
      {
        "content": "Une seule configuration anomérique peut exister.",
        "correct": false,
        "explanation": "Les formes alpha et bêta existent."
      }
    ],
    "explanation": "La cyclisation de l'aldéhyde C1 du glucose avec un OH intramoléculaire forme un hémiacétal."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un pyranose possède un cycle à cinq sommets.",
        "correct": false,
        "explanation": "Cela décrit un furanose."
      },
      {
        "content": "Elle passe par une petite fraction de forme ouverte.",
        "correct": true,
        "explanation": "Cette forme permet la reformation des deux anomères."
      },
      {
        "content": "Elle correspond à l'évolution du pouvoir rotatoire lors de l'interconversion des anomères.",
        "correct": true,
        "explanation": "L'ouverture et la refermeture modifient les proportions alpha/bêta."
      },
      {
        "content": "Une conformation chaise est favorable pour de nombreux pyranoses.",
        "correct": true,
        "explanation": "Elle limite les interactions stériques."
      },
      {
        "content": "Le carbone anomérique du glucopyranose est C6.",
        "correct": false,
        "explanation": "Il est C1."
      },
      {
        "content": "Un pyranose possède un cycle à six sommets incluant un oxygène.",
        "correct": true,
        "explanation": "Cinq carbones et un oxygène forment le cycle du glucopyranose."
      },
      {
        "content": "À l'équilibre, alpha- et bêta-D-glucopyranose coexistent.",
        "correct": true,
        "explanation": "Le bêta est généralement majoritaire en eau."
      },
      {
        "content": "Le pouvoir rotatoire d'un mélange ne dépend pas de sa composition.",
        "correct": false,
        "explanation": "Il dépend des fractions de chaque forme."
      },
      {
        "content": "La mutarotation change D-glucose en L-glucose.",
        "correct": false,
        "explanation": "La série D/L n'est pas inversée."
      },
      {
        "content": "Elle nécessite la rupture du squelette carboné.",
        "correct": false,
        "explanation": "Seule la fonction hémiacétal s'ouvre et se referme."
      }
    ],
    "explanation": "Un pyranose est un hétérocycle à six sommets, généralement cinq carbones et un oxygène. La mutarotation résulte de l'équilibre dynamique entre anomères via une forme ouverte."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des furanoses, quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "Un furanose possède un cycle à cinq sommets incluant un oxygène.",
        "correct": true,
        "explanation": "Quatre carbones et un oxygène forment le cycle."
      },
      {
        "content": "Le fructose peut adopter une forme fructofuranose.",
        "correct": true,
        "explanation": "La cyclisation peut impliquer C2 et l'OH de C5."
      },
      {
        "content": "Le ribose est souvent représenté sous forme furanose dans les nucléotides.",
        "correct": true,
        "explanation": "Le ribofuranose constitue le sucre de l'ARN."
      },
      {
        "content": "Le fructose ne peut jamais se cycliser.",
        "correct": false,
        "explanation": "Il forme des furanoses et des pyranoses."
      },
      {
        "content": "Un furanose peut posséder des anomères alpha et bêta.",
        "correct": true,
        "explanation": "La cyclisation crée un carbone anomérique."
      }
    ],
    "explanation": "Un furanose est un cycle à cinq sommets incluant un oxygène."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel terme désigne deux oses cycliques qui ne diffèrent que par la configuration du carbone anomérique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "anomères",
        "anomeres",
        "anomère",
        "anomere"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les anomères alpha et bêta diffèrent uniquement au carbone anomérique."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Cliquez sur le carbone anomérique du glucopyranose représenté.",
    "image": {
      "src": "/images/training/ue14/biochimie/glucides/ch1-glucopyranose-c1-qzone.svg",
      "alt": "Cycle glucopyranose simplifié avec carbones numérotés",
      "width": 1200,
      "height": 600
    },
    "expectedZones": [
      {
        "id": "zone-89",
        "label": "Carbone anomérique C1",
        "x": 0.65,
        "y": 0.35,
        "tolerance": 0.075
      }
    ],
    "explanation": "Dans le glucose, l'ancien carbone aldéhydique C1 devient le carbone anomérique lors de la cyclisation."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Combien de sommets possède un cycle pyranose ?",
    "answer": {
      "type": "number",
      "value": 6,
      "tolerance": 0
    },
    "explanation": "Un pyranose est un hétérocycle à six sommets, généralement cinq carbones et un oxygène."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur les furanoses, retenez exactement les deux exactes.",
    "choices": [
      {
        "content": "Le fructose ne peut jamais se cycliser.",
        "correct": false,
        "explanation": "Il forme des furanoses et des pyranoses."
      },
      {
        "content": "La forme furanose impose la série L.",
        "correct": false,
        "explanation": "D/L est indépendante de la taille du cycle."
      },
      {
        "content": "Un furanose possède un cycle à cinq sommets incluant un oxygène.",
        "correct": true,
        "explanation": "Quatre carbones et un oxygène forment le cycle."
      },
      {
        "content": "Un furanose possède six sommets.",
        "correct": false,
        "explanation": "Cela décrit un pyranose."
      },
      {
        "content": "Un furanose peut posséder des anomères alpha et bêta.",
        "correct": true,
        "explanation": "La cyclisation crée un carbone anomérique."
      }
    ],
    "explanation": "Un furanose est un cycle à cinq sommets incluant un oxygène.",
    "requiredSelectionCount": 2
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les anomères alpha et bêta, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Alpha et bêta diffèrent par la série D/L.",
        "correct": false,
        "explanation": "La série D/L reste la même."
      },
      {
        "content": "Les anomères ne peuvent jamais s'interconvertir en solution.",
        "correct": false,
        "explanation": "Ils s'interconvertissent par ouverture et fermeture."
      },
      {
        "content": "Deux anomères diffèrent uniquement par la configuration du carbone anomérique.",
        "correct": true,
        "explanation": "Ils sont des diastéréoisomères particuliers."
      },
      {
        "content": "Les anomères peuvent s'interconvertir en solution via la forme ouverte.",
        "correct": true,
        "explanation": "C'est la mutarotation."
      },
      {
        "content": "Pour un D-ose en Haworth usuelle, alpha place le substituant anomérique du côté opposé au CH2OH de référence.",
        "correct": true,
        "explanation": "On parle de relation trans dans cette convention."
      }
    ],
    "explanation": "Les anomères alpha et bêta diffèrent uniquement au carbone anomérique."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Une solution contient 40 % d'alpha-D-glucopyranose de rotation spécifique +112° et 60 % de bêta-D-glucopyranose de rotation +19°. En supposant l'additivité pondérée, quelle rotation moyenne obtient-on en degrés ?",
    "answer": {
      "type": "number",
      "value": 56.2,
      "tolerance": 0.2
    },
    "explanation": "La moyenne pondérée vaut $0{,}40\\times112+0{,}60\\times19=56{,}2^\\circ$."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Un mélange contient 50 % de D-glucose et 50 % de L-glucose, de pouvoirs rotatoires opposés de même module. Quelle rotation nette attend-on en degrés ?",
    "answer": {
      "type": "number",
      "value": 0,
      "tolerance": 0.01
    },
    "explanation": "Un mélange racémique équimolaire d'énantiomères a une rotation nette nulle par compensation."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel instrument mesure le pouvoir rotatoire d'une solution ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "polarimètre",
        "polarimetre",
        "un polarimètre",
        "un polarimetre"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le pouvoir rotatoire est une propriété expérimentale liée à la chiralité et indépendante de la notation D/L."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un mélange racémique contient uniquement un énantiomère.",
        "correct": false,
        "explanation": "Il en contient deux en proportions égales."
      },
      {
        "content": "Un racémique est nécessairement une molécule achirale unique.",
        "correct": false,
        "explanation": "C'est un mélange de molécules chirales."
      },
      {
        "content": "Un furanose possède six sommets.",
        "correct": false,
        "explanation": "Cela décrit un pyranose."
      },
      {
        "content": "Un racémique est optiquement inactif par compensation.",
        "correct": true,
        "explanation": "Chaque énantiomère reste individuellement chiral."
      },
      {
        "content": "Un furanose possède un cycle à cinq sommets incluant un oxygène.",
        "correct": true,
        "explanation": "Quatre carbones et un oxygène forment le cycle."
      },
      {
        "content": "Le fructose peut adopter une forme fructofuranose.",
        "correct": true,
        "explanation": "La cyclisation peut impliquer C2 et l'OH de C5."
      },
      {
        "content": "La forme furanose impose la série L.",
        "correct": false,
        "explanation": "D/L est indépendante de la taille du cycle."
      },
      {
        "content": "Un furanose est dépourvu d'oxygène cyclique.",
        "correct": false,
        "explanation": "Il en possède un."
      },
      {
        "content": "Il contient des quantités égales de deux énantiomères.",
        "correct": true,
        "explanation": "Les fractions molaires sont égales."
      },
      {
        "content": "Un furanose peut posséder des anomères alpha et bêta.",
        "correct": true,
        "explanation": "La cyclisation crée un carbone anomérique."
      }
    ],
    "explanation": "Un racémique est un mélange équimolaire d'énantiomères dont les rotations s'annulent. Un furanose est un cycle à cinq sommets incluant un oxygène."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la cyclisation des aldoses, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le carbone anomérique du glucose est C6.",
        "correct": false,
        "explanation": "Il est C1."
      },
      {
        "content": "La chaîne carbonée reste intacte lors de la cyclisation.",
        "correct": true,
        "explanation": "La réaction forme un cycle sans perte de carbone."
      },
      {
        "content": "La cyclisation transforme le glucose en un autre élément chimique.",
        "correct": false,
        "explanation": "Il s'agit d'un changement de forme moléculaire."
      },
      {
        "content": "La cyclisation d'un aldose peut former un hémiacétal intramoléculaire.",
        "correct": true,
        "explanation": "Le carbonyle réagit avec un hydroxyle de la même molécule."
      },
      {
        "content": "Une seule configuration anomérique peut exister.",
        "correct": false,
        "explanation": "Les formes alpha et bêta existent."
      }
    ],
    "explanation": "La cyclisation de l'aldéhyde C1 du glucose avec un OH intramoléculaire forme un hémiacétal."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel nom donne-t-on au cycle à cinq sommets adopté notamment par le ribose dans les nucléotides ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "furanose",
        "forme furanose",
        "cycle furanose"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Un furanose est un hétérocycle à cinq sommets, généralement quatre carbones et un oxygène."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "À propos des furanoses, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "La forme furanose impose la série L.",
        "correct": false,
        "explanation": "D/L est indépendante de la taille du cycle."
      },
      {
        "content": "Le fructose peut adopter une forme fructofuranose.",
        "correct": true,
        "explanation": "La cyclisation peut impliquer C2 et l'OH de C5."
      },
      {
        "content": "Le fructose ne peut jamais se cycliser.",
        "correct": false,
        "explanation": "Il forme des furanoses et des pyranoses."
      },
      {
        "content": "Un furanose possède six sommets.",
        "correct": false,
        "explanation": "Cela décrit un pyranose."
      },
      {
        "content": "Le ribose est souvent représenté sous forme furanose dans les nucléotides.",
        "correct": true,
        "explanation": "Le ribofuranose constitue le sucre de l'ARN."
      }
    ],
    "explanation": "Un furanose est un cycle à cinq sommets incluant un oxygène.",
    "requiredSelectionCount": 2
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les anomères alpha et bêta, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le carbone anomérique n'existe que dans la forme ouverte.",
        "correct": false,
        "explanation": "Il apparaît lors de la cyclisation."
      },
      {
        "content": "Les anomères peuvent s'interconvertir en solution via la forme ouverte.",
        "correct": true,
        "explanation": "C'est la mutarotation."
      },
      {
        "content": "Alpha et bêta diffèrent par la série D/L.",
        "correct": false,
        "explanation": "La série D/L reste la même."
      },
      {
        "content": "Les anomères diffèrent à tous les centres asymétriques.",
        "correct": false,
        "explanation": "Ils diffèrent au carbone anomérique."
      },
      {
        "content": "Pour un D-ose en Haworth usuelle, alpha place le substituant anomérique du côté opposé au CH2OH de référence.",
        "correct": true,
        "explanation": "On parle de relation trans dans cette convention."
      }
    ],
    "explanation": "Les anomères alpha et bêta diffèrent uniquement au carbone anomérique."
  }
];
