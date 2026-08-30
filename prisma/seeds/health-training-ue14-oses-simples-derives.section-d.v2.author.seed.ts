import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie – Chapitre 1.2 – Section D – Oses estérifiés et autres dérivés */
export const UE14_BIOCH_CH2_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 79,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les oses phosphorylés, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La position du phosphate n'a jamais besoin d'être indiquée.",
        "correct": false,
        "explanation": "Elle distingue des métabolites différents."
      },
      {
        "content": "La phosphorylation ajoute une ou plusieurs charges négatives aux conditions physiologiques.",
        "correct": true,
        "explanation": "Les phosphates sont ionisés."
      },
      {
        "content": "Un ose phosphorylé est un ester phosphorique d'une fonction alcool.",
        "correct": true,
        "explanation": "Le phosphate est lié à un oxygène de l'ose."
      },
      {
        "content": "Une phosphorylation remplace tous les oxygènes par de l'azote.",
        "correct": false,
        "explanation": "Elle ajoute un phosphate sur un OH."
      },
      {
        "content": "La position du phosphate est précisée dans le nom.",
        "correct": true,
        "explanation": "Glucose-6-phosphate indique C6."
      }
    ],
    "explanation": "Les oses phosphorylés sont des esters phosphoriques chargés et centraux dans le métabolisme."
  },
  {
    "order": 80,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos du glucose-6-phosphate, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Il ne participe jamais au métabolisme énergétique.",
        "correct": false,
        "explanation": "Il est un carrefour métabolique."
      },
      {
        "content": "Le phosphate est fixé sur un atome d'azote du glucose.",
        "correct": false,
        "explanation": "Le glucose de base ne possède pas d'azote."
      },
      {
        "content": "Il porte un phosphate en C1.",
        "correct": false,
        "explanation": "Cela décrit le glucose-1-phosphate."
      },
      {
        "content": "Il porte un phosphate en C6.",
        "correct": true,
        "explanation": "Le nom indique directement la position."
      },
      {
        "content": "C'est un acide gras.",
        "correct": false,
        "explanation": "C'est un dérivé du glucose."
      }
    ],
    "explanation": "Le glucose-6-phosphate est un carrefour de la glycolyse, de la voie des pentoses et du métabolisme du glycogène."
  },
  {
    "order": 81,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Sur quel carbone se trouve le phosphate du glucose-1-phosphate ?",
    "answer": {
      "type": "number",
      "value": 1,
      "tolerance": 0
    },
    "explanation": "Glucose-1-phosphate et glucose-6-phosphate sont des isomères de position interconvertibles métaboliquement."
  },
  {
    "order": 82,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le fructose-1,6-bisphosphate, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il est épimère C4 du glucose.",
        "correct": false,
        "explanation": "Ils diffèrent d'abord par la fonction carbonyle."
      },
      {
        "content": "Le fructose est un aldopentose.",
        "correct": false,
        "explanation": "C'est un cétohexose."
      },
      {
        "content": "Il peut adopter une forme furanose.",
        "correct": true,
        "explanation": "Le fructofuranose est courant dans le saccharose."
      },
      {
        "content": "Le D-fructose est lévogyre malgré sa série D.",
        "correct": true,
        "explanation": "Il illustre l'indépendance D/L et +/−."
      },
      {
        "content": "Il entre dans la composition du saccharose.",
        "correct": true,
        "explanation": "Le saccharose associe glucose et fructose."
      }
    ],
    "explanation": "Le fructose est le cétohexose majeur, présent notamment dans le saccharose."
  },
  {
    "order": 83,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos du fructose-2,6-bisphosphate, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Il constitue un polymère de fructose.",
        "correct": false,
        "explanation": "C'est un monosaccharide dérivé."
      },
      {
        "content": "Il porte des phosphates en C1 et C6.",
        "correct": false,
        "explanation": "Cela décrit le fructose-1,6-bisphosphate."
      },
      {
        "content": "Il est identique au fructose-1,6-bisphosphate.",
        "correct": false,
        "explanation": "Ce sont des isomères de position."
      },
      {
        "content": "Il ne possède aucune fonction phosphate.",
        "correct": false,
        "explanation": "Il en possède deux."
      },
      {
        "content": "Il est distinct du fructose-1,6-bisphosphate.",
        "correct": true,
        "explanation": "Les positions et les rôles diffèrent."
      }
    ],
    "explanation": "Le fructose-2,6-bisphosphate est un régulateur distinct du fructose-1,6-bisphosphate glycolytique."
  },
  {
    "order": 84,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur le ribose-5-phosphate, retenez exactement les deux exactes.",
    "choices": [
      {
        "content": "Il sert à la biosynthèse des nucléotides.",
        "correct": true,
        "explanation": "Le ribose est incorporé au PRPP puis aux nucléotides."
      },
      {
        "content": "Il est sans lien avec les nucléotides.",
        "correct": false,
        "explanation": "Il en est un précurseur central."
      },
      {
        "content": "Il porte son phosphate en C1.",
        "correct": false,
        "explanation": "Le nom indique C5."
      },
      {
        "content": "C'est un acide gras phosphorylé.",
        "correct": false,
        "explanation": "C'est un dérivé d'ose."
      },
      {
        "content": "Il est un pentose phosphorylé en C5.",
        "correct": true,
        "explanation": "Le phosphate est sur le carbone terminal."
      }
    ],
    "explanation": "Le ribose-5-phosphate relie voie des pentoses phosphates et biosynthèse des nucléotides.",
    "requiredSelectionCount": 2
  },
  {
    "order": 85,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les oses sulfatés, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'héparine et plusieurs GAG sont fortement sulfatés.",
        "correct": true,
        "explanation": "Cette propriété participe à leurs fonctions."
      },
      {
        "content": "Les sulfates contribuent à une forte charge négative.",
        "correct": true,
        "explanation": "Ils sont ionisés aux conditions physiologiques."
      },
      {
        "content": "Les GAG ne peuvent jamais être sulfatés.",
        "correct": false,
        "explanation": "Plusieurs le sont abondamment."
      },
      {
        "content": "La sulfatation ajoute des groupes sulfate sur des fonctions hydroxyle ou amine de dérivés glucidiques.",
        "correct": true,
        "explanation": "Elle est fréquente dans les GAG."
      },
      {
        "content": "La sulfatation modifie les interactions avec les protéines.",
        "correct": true,
        "explanation": "Les motifs sulfatés sont reconnus par de nombreux partenaires."
      }
    ],
    "explanation": "Les sulfates rendent de nombreux GAG fortement anioniques."
  },
  {
    "order": 86,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel nom chimique usuel correspond à la vitamine C ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide ascorbique",
        "ascorbate",
        "l'acide ascorbique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'acide ascorbique est une vitamine C hydrosoluble et réductrice, apparentée à la chimie des oses."
  },
  {
    "order": 87,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur les oses phosphorylés, laquelle est exacte ?",
    "choices": [
      {
        "content": "Une phosphorylation remplace tous les oxygènes par de l'azote.",
        "correct": false,
        "explanation": "Elle ajoute un phosphate sur un OH."
      },
      {
        "content": "La position du phosphate n'a jamais besoin d'être indiquée.",
        "correct": false,
        "explanation": "Elle distingue des métabolites différents."
      },
      {
        "content": "Le phosphate rend systématiquement la molécule apolaire.",
        "correct": false,
        "explanation": "Il augmente généralement sa charge et sa polarité."
      },
      {
        "content": "Un ose phosphorylé est nécessairement un acide aminé.",
        "correct": false,
        "explanation": "C'est un dérivé glucidique."
      },
      {
        "content": "La position du phosphate est précisée dans le nom.",
        "correct": true,
        "explanation": "Glucose-6-phosphate indique C6."
      }
    ],
    "explanation": "Les oses phosphorylés sont des esters phosphoriques chargés et centraux dans le métabolisme."
  },
  {
    "order": 88,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le glucose-6-phosphate, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le glucose est majoritairement cyclique en solution aqueuse.",
        "correct": true,
        "explanation": "Le glucopyranose domine."
      },
      {
        "content": "Le glucose est un aldohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte contient un aldéhyde et six carbones."
      },
      {
        "content": "Le glucose est exclusivement sous forme ouverte en eau.",
        "correct": false,
        "explanation": "Les formes cycliques dominent."
      },
      {
        "content": "La glycémie désigne la concentration de glucose dans le sang.",
        "correct": true,
        "explanation": "Son contrôle est central dans le diabète."
      },
      {
        "content": "Le glucose est un pentose.",
        "correct": false,
        "explanation": "Il possède six carbones."
      }
    ],
    "explanation": "Le glucose est l'aldohexose énergétique de référence."
  },
  {
    "order": 89,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les oses phosphorylés, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un ose phosphorylé est un ester phosphorique d'une fonction alcool.",
        "correct": true,
        "explanation": "Le phosphate est lié à un oxygène de l'ose."
      },
      {
        "content": "Le phosphate rend systématiquement la molécule apolaire.",
        "correct": false,
        "explanation": "Il augmente généralement sa charge et sa polarité."
      },
      {
        "content": "La phosphorylation ajoute une ou plusieurs charges négatives aux conditions physiologiques.",
        "correct": true,
        "explanation": "Les phosphates sont ionisés."
      },
      {
        "content": "Les oses phosphorylés sont des intermédiaires métaboliques fréquents.",
        "correct": true,
        "explanation": "Glycolyse et voie des pentoses en contiennent."
      },
      {
        "content": "Un ose phosphorylé est nécessairement un acide aminé.",
        "correct": false,
        "explanation": "C'est un dérivé glucidique."
      }
    ],
    "explanation": "Les oses phosphorylés sont des esters phosphoriques chargés et centraux dans le métabolisme."
  },
  {
    "order": 90,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la streptomycine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle agit en hydrolysant l'amidon alimentaire.",
        "correct": false,
        "explanation": "Sa cible est ribosomique."
      },
      {
        "content": "Elle montre qu'un dérivé glucidique peut participer à la structure d'un médicament.",
        "correct": true,
        "explanation": "Les motifs aminoglycosidiques sont pharmacologiquement actifs."
      },
      {
        "content": "Elle comporte des motifs aminés apparentés à des dérivés glucidiques.",
        "correct": true,
        "explanation": "Sa structure est riche en fonctions amines et hydroxyles."
      },
      {
        "content": "La streptomycine est un antibiotique aminoglycoside.",
        "correct": true,
        "explanation": "Elle appartient aux aminosides."
      },
      {
        "content": "Elle cible le ribosome bactérien.",
        "correct": true,
        "explanation": "Elle perturbe la traduction."
      }
    ],
    "explanation": "La streptomycine est un aminoglycoside dont la structure comporte des motifs glucidiques aminés."
  },
  {
    "order": 91,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur le glucose-1-phosphate, laquelle est exacte ?",
    "choices": [
      {
        "content": "Il est identique au glucose-6-phosphate.",
        "correct": false,
        "explanation": "La position du phosphate diffère."
      },
      {
        "content": "C'est un pentose.",
        "correct": false,
        "explanation": "Il conserve six carbones."
      },
      {
        "content": "Il peut être interconverti avec le glucose-6-phosphate par une phosphoglucomutase.",
        "correct": true,
        "explanation": "Le phosphate est déplacé intramoléculairement."
      },
      {
        "content": "Il porte deux phosphates.",
        "correct": false,
        "explanation": "Il n'en porte qu'un."
      },
      {
        "content": "Il est obtenu par réduction complète du glucose.",
        "correct": false,
        "explanation": "Il est phosphorylé."
      }
    ],
    "explanation": "Glucose-1-phosphate et glucose-6-phosphate sont des isomères de position interconvertibles métaboliquement."
  },
  {
    "order": 92,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le fructose-1,6-bisphosphate, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "D-fructose signifie nécessairement dextrogyre.",
        "correct": false,
        "explanation": "Il est classiquement lévogyre."
      },
      {
        "content": "Il est épimère C4 du glucose.",
        "correct": false,
        "explanation": "Ils diffèrent d'abord par la fonction carbonyle."
      },
      {
        "content": "Le fructose est un cétohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte possède une cétone en C2."
      },
      {
        "content": "Le saccharose ne contient aucun fructose.",
        "correct": false,
        "explanation": "Il en contient un résidu."
      },
      {
        "content": "Il peut adopter une forme furanose.",
        "correct": true,
        "explanation": "Le fructofuranose est courant dans le saccharose."
      }
    ],
    "explanation": "Le fructose est le cétohexose majeur, présent notamment dans le saccharose."
  },
  {
    "order": 93,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos du fructose-2,6-bisphosphate, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Il est distinct du fructose-1,6-bisphosphate.",
        "correct": true,
        "explanation": "Les positions et les rôles diffèrent."
      },
      {
        "content": "Il régule fortement la glycolyse et la néoglucogenèse hépatiques.",
        "correct": true,
        "explanation": "Il active PFK-1 et inhibe FBPase-1."
      },
      {
        "content": "Il constitue un polymère de fructose.",
        "correct": false,
        "explanation": "C'est un monosaccharide dérivé."
      },
      {
        "content": "Il est identique au fructose-1,6-bisphosphate.",
        "correct": false,
        "explanation": "Ce sont des isomères de position."
      },
      {
        "content": "Il porte des phosphates en C1 et C6.",
        "correct": false,
        "explanation": "Cela décrit le fructose-1,6-bisphosphate."
      }
    ],
    "explanation": "Le fructose-2,6-bisphosphate est un régulateur distinct du fructose-1,6-bisphosphate glycolytique.",
    "requiredSelectionCount": 2
  },
  {
    "order": 94,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le ribose-5-phosphate, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Il est sans lien avec les nucléotides.",
        "correct": false,
        "explanation": "Il en est un précurseur central."
      },
      {
        "content": "Il est un hexose.",
        "correct": false,
        "explanation": "Il possède cinq carbones."
      },
      {
        "content": "Il porte son phosphate en C1.",
        "correct": false,
        "explanation": "Le nom indique C5."
      },
      {
        "content": "Il possède cinq carbones.",
        "correct": true,
        "explanation": "C'est un pentose."
      },
      {
        "content": "Il est un pentose phosphorylé en C5.",
        "correct": true,
        "explanation": "Le phosphate est sur le carbone terminal."
      }
    ],
    "explanation": "Le ribose-5-phosphate relie voie des pentoses phosphates et biosynthèse des nucléotides."
  },
  {
    "order": 95,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Écrivez le nom du métabolite portant deux phosphates sur le fructose en C1 et C6.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "fructose-1,6-bisphosphate",
        "fructose 1,6 bisphosphate",
        "F1,6BP",
        "F-1,6-BP"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le nom encode directement les deux positions : fructose-1,6-bisphosphate."
  },
  {
    "order": 96,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de l'acide ascorbique, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "L'être humain doit obtenir la vitamine C par l'alimentation.",
        "correct": true,
        "explanation": "La voie de synthèse endogène n'est pas fonctionnelle chez l'humain."
      },
      {
        "content": "L'acide ascorbique est la vitamine D.",
        "correct": false,
        "explanation": "La vitamine C est l'acide ascorbique."
      },
      {
        "content": "La vitamine C est dépourvue de propriétés réductrices.",
        "correct": false,
        "explanation": "Son pouvoir réducteur est central à son rôle antioxydant."
      },
      {
        "content": "L'humain synthétise toujours toute la vitamine C nécessaire.",
        "correct": false,
        "explanation": "Un apport alimentaire est nécessaire."
      },
      {
        "content": "C'est un acide gras essentiel.",
        "correct": false,
        "explanation": "C'est une vitamine hydrosoluble."
      }
    ],
    "explanation": "L'acide ascorbique est une vitamine C hydrosoluble et réductrice, apparentée à la chimie des oses."
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les oses phosphorylés, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La position du phosphate est précisée dans le nom.",
        "correct": true,
        "explanation": "Glucose-6-phosphate indique C6."
      },
      {
        "content": "Un ose phosphorylé est un ester phosphorique d'une fonction alcool.",
        "correct": true,
        "explanation": "Le phosphate est lié à un oxygène de l'ose."
      },
      {
        "content": "La phosphorylation ajoute une ou plusieurs charges négatives aux conditions physiologiques.",
        "correct": true,
        "explanation": "Les phosphates sont ionisés."
      },
      {
        "content": "Les oses phosphorylés sont des intermédiaires métaboliques fréquents.",
        "correct": true,
        "explanation": "Glycolyse et voie des pentoses en contiennent."
      },
      {
        "content": "Un ose phosphorylé est nécessairement un acide aminé.",
        "correct": false,
        "explanation": "C'est un dérivé glucidique."
      }
    ],
    "explanation": "Les oses phosphorylés sont des esters phosphoriques chargés et centraux dans le métabolisme."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Il peut alimenter la voie des pentoses phosphates.",
        "correct": true,
        "explanation": "Il est oxydé par la glucose-6-phosphate déshydrogénase."
      },
      {
        "content": "Il ne participe jamais au métabolisme énergétique.",
        "correct": false,
        "explanation": "Il est un carrefour métabolique."
      },
      {
        "content": "Le phosphate est fixé sur un atome d'azote du glucose.",
        "correct": false,
        "explanation": "Le glucose de base ne possède pas d'azote."
      },
      {
        "content": "C'est un acide gras.",
        "correct": false,
        "explanation": "C'est un dérivé du glucose."
      },
      {
        "content": "Il peut alimenter la glycolyse.",
        "correct": true,
        "explanation": "Il est converti en fructose-6-phosphate."
      },
      {
        "content": "Il régule fortement la glycolyse et la néoglucogenèse hépatiques.",
        "correct": true,
        "explanation": "Il active PFK-1 et inhibe FBPase-1."
      },
      {
        "content": "Il est formé rapidement après entrée du glucose dans de nombreuses cellules.",
        "correct": true,
        "explanation": "Les hexokinases phosphorylent le glucose."
      },
      {
        "content": "Il constitue un polymère de fructose.",
        "correct": false,
        "explanation": "C'est un monosaccharide dérivé."
      },
      {
        "content": "Il porte des phosphates en C2 et C6.",
        "correct": true,
        "explanation": "Le nom indique les positions."
      },
      {
        "content": "Il porte des phosphates en C1 et C6.",
        "correct": false,
        "explanation": "Cela décrit le fructose-1,6-bisphosphate."
      }
    ],
    "explanation": "Le glucose-6-phosphate est un carrefour de la glycolyse, de la voie des pentoses et du métabolisme du glycogène. Le fructose-2,6-bisphosphate est un régulateur distinct du fructose-1,6-bisphosphate glycolytique."
  },
  {
    "order": 99,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du glucose-1-phosphate, quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "Le glucose est exclusivement sous forme ouverte en eau.",
        "correct": false,
        "explanation": "Les formes cycliques dominent."
      },
      {
        "content": "Le glucose est un aldohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte contient un aldéhyde et six carbones."
      },
      {
        "content": "Le glucose est un cétohexose.",
        "correct": false,
        "explanation": "Le fructose est le cétohexose de référence."
      },
      {
        "content": "La glycémie mesure le galactose sanguin.",
        "correct": false,
        "explanation": "Elle mesure le glucose."
      },
      {
        "content": "Le glucose est un substrat énergétique majeur.",
        "correct": true,
        "explanation": "Il alimente notamment la glycolyse."
      }
    ],
    "explanation": "Le glucose est l'aldohexose énergétique de référence."
  },
  {
    "order": 100,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quels carbones portent les phosphates du fructose-1,6-bisphosphate ? Répondez « 1 et 6 ».",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "1 et 6",
        "C1 et C6",
        "1,6"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le fructose-1,6-bisphosphate est un intermédiaire glycolytique portant deux phosphates distincts en C1 et C6."
  }
];
