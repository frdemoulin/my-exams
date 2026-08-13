import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.5 – Section D – Thioesters et acétyl-CoA
 */

export const UE14_CH9_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 79,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des thioesters dans la fiche :",
    "choices": [
      {
        "content": "Ils sont présentés comme un cas particulier d'ester contenant du soufre.",
        "correct": true,
        "explanation": "Le support parle d'ester soufré."
      },
      {
        "content": "Le motif général est de type $\\mathrm{R{-}C(=O){-}SR'}$.",
        "correct": true,
        "explanation": "Structure donnée."
      },
      {
        "content": "Ils contiennent un atome de soufre à la place de l'oxygène alkoxy d'un ester classique.",
        "correct": true,
        "explanation": "Différence structurale essentielle."
      },
      {
        "content": "Ils sont identiques aux amides.",
        "correct": false,
        "explanation": "Une amide porte N, pas S."
      }
    ],
    "explanation": "Le thioester est l'analogue soufré de l'ester au niveau du groupe lié au carbonyle."
  },
  {
    "order": 80,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel motif correspond à un thioester ?",
    "choices": [
      {
        "content": "$\\mathrm{R{-}C(=O){-}SR'}$.",
        "correct": true,
        "explanation": "Motif général."
      },
      {
        "content": "$\\mathrm{R{-}C(=O){-}OR'}$.",
        "correct": false,
        "explanation": "Ester."
      },
      {
        "content": "$\\mathrm{R{-}C(=O){-}NR'R''}$.",
        "correct": false,
        "explanation": "Amide."
      },
      {
        "content": "$\\mathrm{R{-}SH}$.",
        "correct": false,
        "explanation": "Thiol."
      }
    ],
    "explanation": "Le thioester se reconnaît par C(=O)-S-R'."
  },
  {
    "order": 81,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Comment prépare-t-on un thioester dans le cadre de la fiche ?",
    "choices": [
      {
        "content": "À partir d'un acide activé et d'un thiol.",
        "correct": true,
        "explanation": "Bilan explicite."
      },
      {
        "content": "Le thiol est noté $\\mathrm{R{-}SH}$.",
        "correct": true,
        "explanation": "Définition rappelée."
      },
      {
        "content": "Un chlorure d'acyle peut être l'acide activé.",
        "correct": true,
        "explanation": "Cité."
      },
      {
        "content": "Un anhydride d'acide peut être l'acide activé.",
        "correct": true,
        "explanation": "Cité."
      }
    ],
    "explanation": "La préparation du thioester est l'analogue soufré de l'estérification."
  },
  {
    "order": 82,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la polarisation d'un thioester selon la fiche :",
    "choices": [
      {
        "content": "L'oxygène du carbonyle exerce un effet électroattracteur.",
        "correct": true,
        "explanation": "Comme pour les esters."
      },
      {
        "content": "Le carbone carbonylé possède un caractère électrophile.",
        "correct": true,
        "explanation": "Conséquence indiquée."
      },
      {
        "content": "Le carbone du groupement CH3 voisin du carbonyle peut présenter un caractère nucléophile dans l'exemple.",
        "correct": true,
        "explanation": "Autre conséquence indiquée."
      },
      {
        "content": "La fiche décrit le carbonyle comme totalement apolaire.",
        "correct": false,
        "explanation": "La polarisation est centrale."
      }
    ],
    "explanation": "Le support transpose aux thioesters le modèle de centres électrophile et nucléophile présenté pour les esters."
  },
  {
    "order": 83,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La liaison thioester est hydrolysable :",
    "choices": [
      {
        "content": "Avec de l'eau dans des conditions de pH adaptées.",
        "correct": true,
        "explanation": "Possibilité explicitement citée."
      },
      {
        "content": "À l'aide d'enzymes.",
        "correct": true,
        "explanation": "Deuxième possibilité citée."
      },
      {
        "content": "En donnant un acide carboxylique et un thiol.",
        "correct": true,
        "explanation": "Bilan de l'hydrolyse."
      },
      {
        "content": "Uniquement en donnant une amide.",
        "correct": false,
        "explanation": "Aucun azote n'est requis."
      }
    ],
    "explanation": "L'hydrolyse d'un thioester régénère la fonction acide et le thiol."
  },
  {
    "order": 84,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'acétyl-CoA dans la fiche :",
    "choices": [
      {
        "content": "Il est présenté comme un thioester du coenzyme A-SH.",
        "correct": true,
        "explanation": "Application biologique centrale."
      },
      {
        "content": "Sa fonction thioester explique une partie de sa réactivité.",
        "correct": true,
        "explanation": "La fiche le dit explicitement."
      },
      {
        "content": "Son hydrolyse conduit notamment au coenzyme A-SH.",
        "correct": true,
        "explanation": "Produit indiqué."
      },
      {
        "content": "Il est décrit comme un simple alcane.",
        "correct": false,
        "explanation": "Il contient une fonction thioester."
      }
    ],
    "explanation": "L'acétyl-CoA est l'exemple biologique majeur du thioester."
  },
  {
    "order": 85,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'hydrolyse de l'acétyl-CoA, dans le bilan simplifié de la fiche, conduit :",
    "choices": [
      {
        "content": "Au coenzyme A-SH.",
        "correct": true,
        "explanation": "Le thiol est régénéré."
      },
      {
        "content": "À l'acide acétique.",
        "correct": true,
        "explanation": "Produit acide cité."
      },
      {
        "content": "À une rupture de la liaison thioester.",
        "correct": true,
        "explanation": "C'est la transformation."
      },
      {
        "content": "À une formation obligatoire de liaison peptidique.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "Le bilan relie acétyl-CoA, CoA-SH et acide acétique."
  },
  {
    "order": 86,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La transformation inverse CoA-SH → acétyl-CoA est présentée comme :",
    "choices": [
      {
        "content": "Une estérification enzymatique au sens large du support.",
        "correct": true,
        "explanation": "La fiche emploie ce terme pour la formation du thioester."
      },
      {
        "content": "Une formation de thioester.",
        "correct": true,
        "explanation": "Le soufre est acylé."
      },
      {
        "content": "Une réaction réalisée par des enzymes.",
        "correct": true,
        "explanation": "Précision du support."
      },
      {
        "content": "Une hydrolyse.",
        "correct": false,
        "explanation": "C'est la réaction inverse."
      }
    ],
    "explanation": "Le passage CoA-SH → acétyl-CoA reforme la liaison thioester."
  },
  {
    "order": 87,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles analogies ester/thioester sont explicitement ou directement soutenues par la fiche ?",
    "choices": [
      {
        "content": "Les deux possèdent un carbonyle.",
        "correct": true,
        "explanation": "Motif commun."
      },
      {
        "content": "Les deux peuvent être hydrolysés.",
        "correct": true,
        "explanation": "Hydrolysabilité décrite."
      },
      {
        "content": "Le carbone carbonylé peut être électrophile.",
        "correct": true,
        "explanation": "Modèle électronique commun."
      },
      {
        "content": "Ils diffèrent par O versus S dans le groupe lié au carbonyle.",
        "correct": true,
        "explanation": "Différence structurale."
      }
    ],
    "explanation": "Le thioester est présenté comme un ester soufré avec une réactivité apparentée."
  },
  {
    "order": 88,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel partenaire réagit avec un acide activé pour former un thioester ?",
    "choices": [
      {
        "content": "Un thiol.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "Une amine.",
        "correct": false,
        "explanation": "Elle donnerait une amide."
      },
      {
        "content": "Un alcool.",
        "correct": false,
        "explanation": "Il donnerait un ester."
      },
      {
        "content": "Un alcane.",
        "correct": false,
        "explanation": "Ce n'est pas le nucléophile utilisé."
      }
    ],
    "explanation": "Le thiol R-SH est le partenaire de formation du thioester."
  },
  {
    "order": 89,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare la synthèse de trois dérivés d'acide à partir du même chlorure d'acyle. Quelles associations sont exactes ?",
    "choices": [
      {
        "content": "Alcool → ester.",
        "correct": true,
        "explanation": "Acylation de O."
      },
      {
        "content": "Amine → amide.",
        "correct": true,
        "explanation": "Acylation de N."
      },
      {
        "content": "Thiol → thioester.",
        "correct": true,
        "explanation": "Acylation de S."
      },
      {
        "content": "Le produit ne dépend pas de la nature du partenaire.",
        "correct": false,
        "explanation": "O, N ou S déterminent la fonction."
      }
    ],
    "explanation": "Un même fragment acyle peut donner trois familles en changeant le nucléophile."
  },
  {
    "order": 90,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un thioester $\\mathrm{CH_3{-}CO{-}SR'}$ est analysé selon le modèle électronique de la fiche. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone du carbonyle est électrophile.",
        "correct": true,
        "explanation": "Effet électroattracteur de O."
      },
      {
        "content": "Le carbone du CH3 adjacent peut présenter un caractère nucléophile.",
        "correct": true,
        "explanation": "Le support le précise."
      },
      {
        "content": "La fonction possède donc deux zones de polarité réactive dans le modèle simplifié.",
        "correct": true,
        "explanation": "Analogie avec l'ester."
      },
      {
        "content": "Le soufre supprime toute polarisation du carbonyle.",
        "correct": false,
        "explanation": "La fiche décrit explicitement la polarisation."
      }
    ],
    "explanation": "Le thioester reprend le schéma carbonyle électrophile / carbone alpha nucléophile."
  },
  {
    "order": 91,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'hydrolyse d'un thioester :",
    "choices": [
      {
        "content": "Elle rompt la liaison acyle-soufre dans le bilan simplifié.",
        "correct": true,
        "explanation": "On retrouve acide + thiol."
      },
      {
        "content": "Le thiol est régénéré.",
        "correct": true,
        "explanation": "R'SH."
      },
      {
        "content": "L'acide carboxylique est régénéré.",
        "correct": true,
        "explanation": "RCOOH."
      },
      {
        "content": "La fonction thioester est décrite comme non hydrolysable.",
        "correct": false,
        "explanation": "Elle est hydrolysable."
      }
    ],
    "explanation": "L'hydrolyse restitue les deux partenaires fonctionnels du thioester."
  },
  {
    "order": 92,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans le couple acétyl-CoA / CoA-SH, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'acétyl-CoA est la forme thioester.",
        "correct": true,
        "explanation": "Définition du support."
      },
      {
        "content": "CoA-SH porte la fonction thiol utilisée pour reformer le thioester.",
        "correct": true,
        "explanation": "Le groupe SH est le partenaire."
      },
      {
        "content": "L'hydrolyse va de l'acétyl-CoA vers CoA-SH + acide acétique.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "La réaction inverse peut être enzymatique.",
        "correct": true,
        "explanation": "La fiche le précise."
      }
    ],
    "explanation": "Le support utilise ce couple pour illustrer l'interconversion biologique d'un thioester."
  },
  {
    "order": 93,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi l'acétyl-CoA est-il un bon exemple pédagogique pour cette section ?",
    "choices": [
      {
        "content": "Il montre qu'une fonction thioester existe dans un composé biologique majeur du cours.",
        "correct": true,
        "explanation": "Application explicite."
      },
      {
        "content": "Il illustre une hydrolyse de thioester.",
        "correct": true,
        "explanation": "Acétyl-CoA → CoA-SH + acide acétique."
      },
      {
        "content": "Il illustre la formation enzymatique inverse du thioester.",
        "correct": true,
        "explanation": "CoA-SH → acétyl-CoA."
      },
      {
        "content": "Il sert à démontrer que tous les thioesters sont des peptides.",
        "correct": false,
        "explanation": "Ce sont des fonctions différentes."
      }
    ],
    "explanation": "L'exemple relie structure, hydrolyse et formation du thioester dans un contexte biologique."
  },
  {
    "order": 94,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel groupe fonctionnel du coenzyme A-SH réagit pour former la liaison thioester de l'acétyl-CoA ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "thiol",
        "fonction thiol",
        "SH",
        "groupe thiol",
        "groupement thiol"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le coenzyme A-SH apporte la fonction thiol R-SH."
  },
  {
    "order": 95,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare l'hydrolyse d'un ester et celle d'un thioester. Quelles propositions sont exactes dans le cadre de la fiche ?",
    "choices": [
      {
        "content": "Les deux fonctions sont hydrolysables.",
        "correct": true,
        "explanation": "Propriété commune."
      },
      {
        "content": "L'ester donne un alcool comme partenaire hétéroatomique.",
        "correct": true,
        "explanation": "R'OH."
      },
      {
        "content": "Le thioester donne un thiol.",
        "correct": true,
        "explanation": "R'SH."
      },
      {
        "content": "Les deux donnent nécessairement une amine protonée.",
        "correct": false,
        "explanation": "Cela concerne l'amide."
      }
    ],
    "explanation": "Le produit hétéroatomique révèle la nature O ou S du dérivé initial."
  },
  {
    "order": 96,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une enzyme hydrolyse un thioester de type $\\mathrm{RCO{-}SR'}$. Quel bilan fonctionnel est attendu ?",
    "choices": [
      {
        "content": "Formation de RCOOH.",
        "correct": true,
        "explanation": "Acide carboxylique."
      },
      {
        "content": "Formation de R'SH.",
        "correct": true,
        "explanation": "Thiol."
      },
      {
        "content": "Disparition de la fonction thioester.",
        "correct": true,
        "explanation": "La liaison acyle-S est rompue."
      },
      {
        "content": "Formation obligatoire d'un ester.",
        "correct": false,
        "explanation": "Ce n'est pas le bilan de l'hydrolyse."
      }
    ],
    "explanation": "L'enzyme réalise le même bilan fonctionnel général que l'hydrolyse par l'eau."
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des centres réactifs de l'acétyl-thioester simplifié $\\mathrm{CH_3CO{-}SR'}$ dans la fiche :",
    "choices": [
      {
        "content": "Le carbone carbonylé est électrophile.",
        "correct": true,
        "explanation": "Polarisation du C=O."
      },
      {
        "content": "Le carbone du CH3 voisin peut présenter un caractère nucléophile.",
        "correct": true,
        "explanation": "Point indiqué."
      },
      {
        "content": "Cette réactivité est présentée comme analogue à celle des esters.",
        "correct": true,
        "explanation": "Le support dit « de la même façon que les esters »."
      },
      {
        "content": "Aucun atome d'oxygène n'est présent.",
        "correct": false,
        "explanation": "Le carbonyle contient un oxygène."
      }
    ],
    "explanation": "Le thioester conserve l'oxygène carbonylé responsable de la polarisation."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une préparation utilise successivement chlorure d'acyle + thiol, puis hydrolyse du produit. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La première étape forme un thioester.",
        "correct": true,
        "explanation": "Acide activé + thiol."
      },
      {
        "content": "La seconde peut régénérer l'acide carboxylique.",
        "correct": true,
        "explanation": "Hydrolyse."
      },
      {
        "content": "La seconde peut régénérer le thiol.",
        "correct": true,
        "explanation": "Hydrolyse."
      },
      {
        "content": "Le soufre est remplacé par un azote dans le bilan sans autre réactif.",
        "correct": false,
        "explanation": "Aucune amine n'est introduite."
      }
    ],
    "explanation": "La séquence formation/hydrolyse est réversible au niveau fonctionnel dans le schéma du cours."
  },
  {
    "order": 99,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un thioester possède le motif C(=O)-S-R'.",
        "correct": true,
        "explanation": "Structure."
      },
      {
        "content": "Acide activé + thiol → thioester.",
        "correct": true,
        "explanation": "Préparation."
      },
      {
        "content": "Un thioester est hydrolysable.",
        "correct": true,
        "explanation": "Propriété."
      },
      {
        "content": "L'acétyl-CoA est un thioester du CoA-SH.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "Hydrolyse de l'acétyl-CoA → CoA-SH + acide acétique.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Un thioester est une amide.",
        "correct": false,
        "explanation": "S remplace N."
      },
      {
        "content": "Le carbone carbonylé du thioester est toujours nucléophile.",
        "correct": false,
        "explanation": "Il est électrophile."
      },
      {
        "content": "Un thioester ne peut jamais être hydrolysé par une enzyme.",
        "correct": false,
        "explanation": "La fiche cite les enzymes."
      },
      {
        "content": "CoA-SH est un alcool.",
        "correct": false,
        "explanation": "Le groupe mis en avant est un thiol."
      },
      {
        "content": "La formation d'acétyl-CoA est une hydrolyse.",
        "correct": false,
        "explanation": "C'est la réaction inverse."
      }
    ],
    "explanation": "Cette sélection consolide structure, préparation, hydrolyse et application acétyl-CoA."
  },
  {
    "order": 100,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux transformations correspondant au couple acétyl-CoA / CoA-SH dans la fiche.",
    "choices": [
      {
        "content": "Acétyl-CoA + eau → CoA-SH + acide acétique.",
        "correct": true,
        "explanation": "Hydrolyse."
      },
      {
        "content": "CoA-SH → acétyl-CoA par une réaction enzymatique de formation du thioester.",
        "correct": true,
        "explanation": "Réaction inverse."
      },
      {
        "content": "Acétyl-CoA → peptide par simple rotation.",
        "correct": false,
        "explanation": "Sans rapport."
      },
      {
        "content": "CoA-SH + amine → amide obligatoire.",
        "correct": false,
        "explanation": "Ce n'est pas le cycle décrit."
      }
    ],
    "explanation": "Les deux sens illustrent hydrolyse et reformation enzymatique du thioester."
  }
];
