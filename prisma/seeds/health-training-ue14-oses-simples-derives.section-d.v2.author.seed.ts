import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie – Chapitre 1.2 – Section D – Oses estérifiés et autres dérivés
 */

export const UE14_BIOCH_CH2_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 79,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une estérification est définie dans la fiche comme :",
    "choices": [
      {
        "content": "La fixation d'un acide sur un alcool.",
        "correct": true,
        "explanation": "Définition donnée."
      },
      {
        "content": "Une transformation pouvant concerner les OH des oses.",
        "correct": true,
        "explanation": "Application aux oses estérifiés."
      },
      {
        "content": "La suppression de tous les oxygènes d'un ose.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "Une réaction conduisant à des esters phosphoriques ou sulfuriques.",
        "correct": true,
        "explanation": "Exemples du support."
      }
    ],
    "explanation": "Les fonctions alcool des oses peuvent former différents esters."
  },
  {
    "order": 80,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Un ose phosphorylé :",
    "choices": [
      {
        "content": "Porte un ester phosphorique.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Résulte d'une estérification d'une fonction alcool par un dérivé phosphorique dans le modèle du support.",
        "correct": true,
        "explanation": "Principe."
      },
      {
        "content": "Peut intervenir dans des voies métaboliques.",
        "correct": true,
        "explanation": "La glycolyse est citée."
      },
      {
        "content": "Est nécessairement un polyol non chargé.",
        "correct": false,
        "explanation": "Un phosphate apporte des charges dans les formes ionisées usuelles."
      }
    ],
    "explanation": "La phosphorylation transforme une fonction alcool de l'ose en ester phosphorique."
  },
  {
    "order": 81,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À partir du glucose, la fiche cite une phosphorylation :",
    "choices": [
      {
        "content": "En C1.",
        "correct": true,
        "explanation": "Position citée."
      },
      {
        "content": "En C6.",
        "correct": true,
        "explanation": "Position particulièrement mise en avant."
      },
      {
        "content": "En C6 avec un rôle dans la glycolyse.",
        "correct": true,
        "explanation": "Point explicite."
      },
      {
        "content": "Uniquement en C3.",
        "correct": false,
        "explanation": "C3 n'est pas la position citée ici."
      }
    ],
    "explanation": "Glucose-1-phosphate et surtout glucose-6-phosphate sont les dérivés cités."
  },
  {
    "order": 82,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle position phosphorylée du glucose est particulièrement mise en avant dans la glycolyse ?",
    "choices": [
      {
        "content": "C6.",
        "correct": true,
        "explanation": "Le glucose-6-phosphate est signalé +++."
      },
      {
        "content": "C2.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "C4.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "C5.",
        "correct": false,
        "explanation": "Non."
      }
    ],
    "explanation": "La phosphorylation en C6 est la position majeure citée."
  },
  {
    "order": 83,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À partir du fructose, la fiche cite des phosphorylations :",
    "choices": [
      {
        "content": "En C1.",
        "correct": true,
        "explanation": "Position citée."
      },
      {
        "content": "En C6.",
        "correct": true,
        "explanation": "Position citée et reliée à la glycolyse."
      },
      {
        "content": "Simultanément en C1 et C6.",
        "correct": true,
        "explanation": "Fructose-1,6-bisphosphate."
      },
      {
        "content": "Simultanément en C2 et C6.",
        "correct": true,
        "explanation": "Dérivé également cité."
      }
    ],
    "explanation": "Plusieurs esters phosphoriques du fructose sont présentés."
  },
  {
    "order": 84,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Un fructose phosphorylé en C1 et C6 est appelé :",
    "choices": [
      {
        "content": "Fructose-1,6-bisphosphate.",
        "correct": true,
        "explanation": "Nom rappelé dans l'auto-évaluation."
      },
      {
        "content": "Fructose-6-phosphate uniquement.",
        "correct": false,
        "explanation": "Il porte deux phosphates."
      },
      {
        "content": "Glucose-1,6-bisphosphate.",
        "correct": false,
        "explanation": "Mauvais ose."
      },
      {
        "content": "Fructose-2-phosphate.",
        "correct": false,
        "explanation": "Mauvaise position/nombre."
      }
    ],
    "explanation": "Deux phosphates distincts en C1 et C6 justifient le préfixe bis-."
  },
  {
    "order": 85,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour le ribose et le 2-désoxyribose :",
    "choices": [
      {
        "content": "La phosphorylation en C5 est mise en avant.",
        "correct": true,
        "explanation": "Position donnée."
      },
      {
        "content": "Le ribose-5-phosphate est associé à l'ARN.",
        "correct": true,
        "explanation": "Point du support."
      },
      {
        "content": "Le 2-désoxyribose-5-phosphate est associé à l'ADN.",
        "correct": true,
        "explanation": "Point du support."
      },
      {
        "content": "La phosphorylation en C5 est sans lien avec les acides nucléiques.",
        "correct": false,
        "explanation": "Elle est précisément reliée à leur synthèse."
      }
    ],
    "explanation": "La phosphorylation C5 des pentoses est présentée dans le contexte de la synthèse des acides nucléiques."
  },
  {
    "order": 86,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel dérivé phosphorylé est associé à l'ARN ?",
    "choices": [
      {
        "content": "Ribose-5-phosphate.",
        "correct": true,
        "explanation": "Association du support."
      },
      {
        "content": "2-désoxyribose-5-phosphate.",
        "correct": false,
        "explanation": "Associé à l'ADN."
      },
      {
        "content": "Mannitol-5-phosphate.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "Acide glucuronique.",
        "correct": false,
        "explanation": "Non."
      }
    ],
    "explanation": "Le ribose-5-phosphate est le pentose phosphorylé associé à l'ARN."
  },
  {
    "order": 87,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les esters sulfuriques des oses :",
    "choices": [
      {
        "content": "Sont cités dans les glycosaminoglycanes sulfatés.",
        "correct": true,
        "explanation": "Localisation donnée."
      },
      {
        "content": "Confèrent une charge négative à la molécule.",
        "correct": true,
        "explanation": "Conséquence explicitement donnée."
      },
      {
        "content": "Résultent d'une estérification d'une fonction alcool.",
        "correct": true,
        "explanation": "Schéma Ose-OH + H2SO4 → ester sulfurique."
      },
      {
        "content": "Sont nécessairement neutres.",
        "correct": false,
        "explanation": "Le support souligne leur charge négative."
      }
    ],
    "explanation": "La sulfatation contribue fortement à la charge des GAG."
  },
  {
    "order": 88,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'acide ascorbique :",
    "choices": [
      {
        "content": "Il est mieux connu sous le nom de vitamine C.",
        "correct": true,
        "explanation": "Synonyme."
      },
      {
        "content": "Il provient initialement du L-gulose selon le schéma du support.",
        "correct": true,
        "explanation": "Origine citée."
      },
      {
        "content": "Sa formation implique plusieurs transformations dont doubles liaisons et cyclisations.",
        "correct": true,
        "explanation": "Point du support."
      },
      {
        "content": "La fiche demande de connaître sa formule chimique par cœur.",
        "correct": false,
        "explanation": "Elle indique explicitement de ne pas connaître la formule."
      }
    ],
    "explanation": "L'acide ascorbique est présenté comme un exemple de dérivé glucidique complexe."
  },
  {
    "order": 89,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel dérivé glucidique est aussi appelé vitamine C ?",
    "choices": [
      {
        "content": "Acide ascorbique.",
        "correct": true,
        "explanation": "Synonyme."
      },
      {
        "content": "Sorbitol.",
        "correct": false,
        "explanation": "Polyol."
      },
      {
        "content": "NANA.",
        "correct": false,
        "explanation": "Acide sialique."
      },
      {
        "content": "Glucuronate.",
        "correct": false,
        "explanation": "Forme ionisée de l'acide glucuronique."
      }
    ],
    "explanation": "Vitamine C = acide ascorbique."
  },
  {
    "order": 90,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel exemple de dérivé glucidique est cité comme antibiotique ?",
    "choices": [
      {
        "content": "Streptomycine.",
        "correct": true,
        "explanation": "Application donnée."
      },
      {
        "content": "Acide ascorbique.",
        "correct": false,
        "explanation": "Vitamine."
      },
      {
        "content": "Mannitol.",
        "correct": false,
        "explanation": "Polyol."
      },
      {
        "content": "Acide glucuronique.",
        "correct": false,
        "explanation": "Dérivé oxydé."
      }
    ],
    "explanation": "La streptomycine est l'exemple antibiotique de la fiche."
  },
  {
    "order": 91,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Comparer glucose-6-phosphate et fructose-1,6-bisphosphate permet d'affirmer que :",
    "choices": [
      {
        "content": "Le premier porte un phosphate en C6.",
        "correct": true,
        "explanation": "Nom."
      },
      {
        "content": "Le second porte deux phosphates.",
        "correct": true,
        "explanation": "C1 et C6."
      },
      {
        "content": "Les deux sont reliés à la glycolyse dans la fiche.",
        "correct": true,
        "explanation": "Contexte."
      },
      {
        "content": "Le préfixe bis- signifie qu'il n'y a aucun phosphate.",
        "correct": false,
        "explanation": "Il indique deux groupes phosphates distincts."
      }
    ],
    "explanation": "La nomenclature indique directement nombre et position des phosphates."
  },
  {
    "order": 92,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un ose est phosphorylé en C6. Quelles conclusions sont compatibles avec le chapitre ?",
    "choices": [
      {
        "content": "Une fonction alcool de C6 a été estérifiée.",
        "correct": true,
        "explanation": "Principe."
      },
      {
        "content": "Un ester phosphorique a été formé.",
        "correct": true,
        "explanation": "Famille."
      },
      {
        "content": "Le glucose-6-phosphate est un exemple.",
        "correct": true,
        "explanation": "Exemple."
      },
      {
        "content": "L'ose est nécessairement devenu une osamine.",
        "correct": false,
        "explanation": "Aucune amine n'est introduite."
      }
    ],
    "explanation": "Phosphorylation et amination sont deux modifications fonctionnelles différentes."
  },
  {
    "order": 93,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un GAG sulfaté possède des groupes sulfate. Quelles propositions sont exactes selon la fiche ?",
    "choices": [
      {
        "content": "Ces groupes proviennent d'esters sulfuriques.",
        "correct": true,
        "explanation": "Famille."
      },
      {
        "content": "Ils confèrent des charges négatives.",
        "correct": true,
        "explanation": "Point du support."
      },
      {
        "content": "Ils peuvent contribuer à la forte polarité/hydrophilie de la molécule.",
        "correct": true,
        "explanation": "Conséquence cohérente avec la présence de charges."
      },
      {
        "content": "Ils sont équivalents à une réduction en polyol.",
        "correct": false,
        "explanation": "Ce sont des estérifications."
      }
    ],
    "explanation": "La sulfatation des GAG est une modification ionique des fonctions alcool."
  },
  {
    "order": 94,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des positions de phosphorylation citées :",
    "choices": [
      {
        "content": "Glucose : C1 ou C6.",
        "correct": true,
        "explanation": "Positions données."
      },
      {
        "content": "Fructose : C1, C6, C1+C6 ou C2+C6.",
        "correct": true,
        "explanation": "Ensemble du support."
      },
      {
        "content": "Ribose : C5.",
        "correct": true,
        "explanation": "Position donnée."
      },
      {
        "content": "2-désoxyribose : C5.",
        "correct": true,
        "explanation": "Position donnée."
      }
    ],
    "explanation": "Les positions doivent être reliées à l'ose concerné."
  },
  {
    "order": 95,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel nom porte le fructose phosphorylé en C1 et C6 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "fructose-1,6-bisphosphate",
        "fructose 1,6 bisphosphate",
        "fructose-1-6-bisphosphate"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le fructose portant des phosphates en C1 et C6 est le fructose-1,6-bisphosphate."
  },
  {
    "order": 96,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule glucidique porte un sulfate et un phosphate. Quelles conclusions générales sont cohérentes avec la fiche ?",
    "choices": [
      {
        "content": "Elle a subi des estérifications de fonctions alcool.",
        "correct": true,
        "explanation": "Principe commun."
      },
      {
        "content": "Elle peut porter plusieurs charges négatives.",
        "correct": true,
        "explanation": "Sulfates et phosphates sont ionisables."
      },
      {
        "content": "Les deux modifications sont distinctes d'une N-acétylation.",
        "correct": true,
        "explanation": "Elles concernent O plutôt que l'azote."
      },
      {
        "content": "Elle est nécessairement une vitamine.",
        "correct": false,
        "explanation": "Aucune telle conclusion."
      }
    ],
    "explanation": "Phosphorylation et sulfatation sont deux familles d'estérification des oses."
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans un contexte de synthèse des acides nucléiques :",
    "choices": [
      {
        "content": "Le ribose-5-phosphate est pertinent pour l'ARN.",
        "correct": true,
        "explanation": "Association du support."
      },
      {
        "content": "Le 2-désoxyribose-5-phosphate est pertinent pour l'ADN.",
        "correct": true,
        "explanation": "Association du support."
      },
      {
        "content": "La position C5 est mise en avant pour les deux pentoses.",
        "correct": true,
        "explanation": "Point commun."
      },
      {
        "content": "Le fructose-1,6-bisphosphate est présenté comme le pentose de l'ADN.",
        "correct": false,
        "explanation": "C'est un hexose métabolique."
      }
    ],
    "explanation": "Les pentoses phosphorylés en C5 constituent le repère de cette application."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'acide ascorbique et la streptomycine :",
    "choices": [
      {
        "content": "Ce sont deux exemples de dérivés glucidiques dans la fiche.",
        "correct": true,
        "explanation": "Section finale."
      },
      {
        "content": "L'acide ascorbique est une vitamine.",
        "correct": true,
        "explanation": "Vitamine C."
      },
      {
        "content": "La streptomycine est un antibiotique.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "La fiche exige la mémorisation détaillée de leur structure complète.",
        "correct": false,
        "explanation": "Elle dit explicitement de ne pas connaître la formule de la vitamine C et ne développe pas la structure de la streptomycine."
      }
    ],
    "explanation": "Ces exemples élargissent les applications des dérivés glucidiques."
  },
  {
    "order": 99,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un dérivé est nommé glucose-1-phosphate. Que peut-on déduire ?",
    "choices": [
      {
        "content": "Le phosphate est porté en C1.",
        "correct": true,
        "explanation": "Nomenclature."
      },
      {
        "content": "Il s'agit d'un ester phosphorique d'un ose.",
        "correct": true,
        "explanation": "Famille."
      },
      {
        "content": "Le dérivé est issu du glucose.",
        "correct": true,
        "explanation": "Nom."
      },
      {
        "content": "Il porte nécessairement deux phosphates.",
        "correct": false,
        "explanation": "Le nom n'en indique qu'un."
      }
    ],
    "explanation": "Le nom encode l'ose et la position de phosphorylation."
  },
  {
    "order": 100,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le glucose peut être phosphorylé en C6.",
        "correct": true,
        "explanation": "Point majeur."
      },
      {
        "content": "Le fructose-1,6-bisphosphate porte deux phosphates.",
        "correct": true,
        "explanation": "C1 et C6."
      },
      {
        "content": "Le ribose-5-phosphate est associé à l'ARN.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "Les esters sulfuriques contribuent à une charge négative des GAG.",
        "correct": true,
        "explanation": "Point du support."
      },
      {
        "content": "L'acide ascorbique est la vitamine C.",
        "correct": true,
        "explanation": "Synonyme."
      },
      {
        "content": "La streptomycine est un polyol du glucose.",
        "correct": false,
        "explanation": "Antibiotique."
      },
      {
        "content": "Le 2-désoxyribose-5-phosphate est associé à l'ARN.",
        "correct": false,
        "explanation": "ADN."
      },
      {
        "content": "La phosphorylation est une réduction du carbonyle.",
        "correct": false,
        "explanation": "Estérification."
      },
      {
        "content": "Le fructose ne peut jamais porter deux phosphates.",
        "correct": false,
        "explanation": "Fructose-1,6-bisphosphate."
      },
      {
        "content": "La fiche demande de connaître par cœur la formule de la vitamine C.",
        "correct": false,
        "explanation": "Elle dit l'inverse."
      }
    ],
    "explanation": "Cette sélection consolide esters d'oses et exemples de dérivés."
  }
];
