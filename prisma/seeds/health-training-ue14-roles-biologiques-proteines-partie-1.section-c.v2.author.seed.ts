import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Rôles biologiques des protéines, partie 1 — Section C — Récepteurs ionotropiques, pompes et transporteurs ABC */
export const UE14_BIOCH_CH12_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les récepteurs ionotropiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Récepteur et effecteur sont toujours deux protéines complètement séparées.",
        "correct": false,
        "explanation": "Dans un récepteur ionotrope, le canal est le récepteur."
      },
      {
        "content": "Ils ne peuvent pas modifier le potentiel de membrane.",
        "correct": false,
        "explanation": "Le flux ionique le modifie fréquemment."
      },
      {
        "content": "La sélectivité ionique dépend de la structure du pore.",
        "correct": true,
        "explanation": "Différents récepteurs laissent passer des ions différents."
      },
      {
        "content": "Le récepteur et le canal ionique font partie du même complexe moléculaire.",
        "correct": true,
        "explanation": "La fixation du ligand contrôle directement l'ouverture du pore."
      },
      {
        "content": "Ils permettent un flux passif d'ions selon leur gradient électrochimique.",
        "correct": true,
        "explanation": "Ils ne pompent pas les ions contre leur gradient."
      }
    ],
    "explanation": "Un récepteur ionotrope ouvre directement un canal et permet un flux passif selon le gradient électrochimique."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant le récepteur 5-HT3, laquelle est correcte ?",
    "choices": [
      {
        "content": "Son activation hyperpolarise obligatoirement par entrée de Cl−.",
        "correct": false,
        "explanation": "Elle est généralement dépolarisante."
      },
      {
        "content": "Il hydrolyse l'ATP pour pomper le sodium.",
        "correct": false,
        "explanation": "Le flux est passif."
      },
      {
        "content": "Il est sélectif exclusivement du chlorure.",
        "correct": false,
        "explanation": "Il est cationique."
      },
      {
        "content": "C'est un récepteur nucléaire de la sérotonine.",
        "correct": false,
        "explanation": "C'est un canal ligand-dépendant membranaire."
      },
      {
        "content": "C'est un récepteur ionotrope.",
        "correct": true,
        "explanation": "Il se distingue de la plupart des autres récepteurs sérotoninergiques qui sont des RCPG."
      }
    ],
    "explanation": "5-HT3 est un canal cationique activé par la sérotonine et généralement dépolarisant."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel neurotransmetteur active le récepteur GABAA ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "GABA",
        "acide gamma-aminobutyrique",
        "acide γ-aminobutyrique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "GABAA est un canal anionique ligand-dépendant ; son effet dépend du gradient de Cl−/HCO3− et est généralement inhibiteur dans les neurones matures."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien d'ions Na+ la Na+/K+-ATPase expulse-t-elle par cycle ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "La Na+/K+-ATPase hydrolyse l'ATP pour expulser 3 Na+ et faire entrer 2 K+ par cycle."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les transporteurs ABC, laquelle est correcte ?",
    "choices": [
      {
        "content": "Les protéines ABC n'ont aucun domaine transmembranaire.",
        "correct": false,
        "explanation": "Les transporteurs ABC en possèdent."
      },
      {
        "content": "Les seules sous-familles ABC humaines sont B, C et G.",
        "correct": false,
        "explanation": "La superfamille humaine comprend plusieurs sous-familles A à G."
      },
      {
        "content": "ABC signifie Amino Binding Channel.",
        "correct": false,
        "explanation": "ABC signifie ATP-Binding Cassette."
      },
      {
        "content": "ABC signifie ATP-Binding Cassette.",
        "correct": true,
        "explanation": "Les protéines ABC possèdent des domaines de liaison aux nucléotides."
      },
      {
        "content": "Tous les transporteurs ABC sont des canaux passifs indépendants de l'ATP.",
        "correct": false,
        "explanation": "La plupart utilisent directement l'ATP ; CFTR est une exception fonctionnelle comme canal."
      }
    ],
    "explanation": "Les protéines ABC combinent domaines transmembranaires et domaines de liaison aux nucléotides ; plusieurs sous-familles participent au transport de xénobiotiques."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant la P-glycoprotéine ABCB1, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Sa surexpression augmente nécessairement la concentration intracellulaire des cytotoxiques.",
        "correct": false,
        "explanation": "Elle tend au contraire à l'abaisser pour ses substrats."
      },
      {
        "content": "Elle est un récepteur nucléaire.",
        "correct": false,
        "explanation": "C'est un transporteur ABC membranaire."
      },
      {
        "content": "Sa surexpression dans certaines tumeurs contribue à la multirésistance aux médicaments.",
        "correct": true,
        "explanation": "Elle peut diminuer l'accumulation intracellulaire de médicaments cytotoxiques."
      },
      {
        "content": "Elle transporte tous les médicaments sans sélectivité.",
        "correct": false,
        "explanation": "Son spectre est large mais non universel."
      },
      {
        "content": "Elle peut limiter l'absorption et la biodisponibilité de certains médicaments.",
        "correct": true,
        "explanation": "Son efflux s'oppose au passage net vers le sang."
      }
    ],
    "explanation": "P-gp/ABCB1 est une pompe d'efflux ATP-dépendante pouvant limiter l'absorption intestinale et participer à la multirésistance.",
    "requiredSelectionCount": 2
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant CFTR, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Son ouverture est régulée notamment par phosphorylation et liaison/hydrolyse de l'ATP.",
        "correct": true,
        "explanation": "Le contrôle du canal implique ses domaines NBD et son domaine régulateur."
      },
      {
        "content": "Des variants pathogènes de CFTR causent la mucoviscidose.",
        "correct": true,
        "explanation": "F508del est le variant le plus fréquent dans de nombreuses populations européennes, mais il n'est pas le seul."
      },
      {
        "content": "Contrairement à la plupart des ABC humains, CFTR fonctionne principalement comme un canal anionique.",
        "correct": true,
        "explanation": "Il conduit notamment Cl− et HCO3−."
      },
      {
        "content": "CFTR appartient à la famille des protéines ABC.",
        "correct": true,
        "explanation": "Son architecture dérive de celle des transporteurs ABC."
      },
      {
        "content": "La mucoviscidose est due exclusivement à F508del chez tous les patients.",
        "correct": false,
        "explanation": "De nombreux variants pathogènes existent."
      }
    ],
    "explanation": "CFTR est une protéine ABC atypique fonctionnant comme canal anionique, et de nombreux variants peuvent causer la mucoviscidose."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel type de protéine utilise directement l'ATP pour déplacer des ions contre leur gradient : canal ou pompe ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "pompe",
        "pompe ionique",
        "transporteur actif"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Canaux et pompes se distinguent par le couplage énergétique : les canaux suivent le gradient, les pompes peuvent le remonter."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien d'ions K+ la Na+/K+-ATPase fait-elle entrer par cycle ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "La Na+/K+-ATPase hydrolyse l'ATP pour expulser 3 Na+ et faire entrer 2 K+ par cycle."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans une autre application, concernant les récepteurs ionotropiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils permettent un flux passif d'ions selon leur gradient électrochimique.",
        "correct": true,
        "explanation": "Ils ne pompent pas les ions contre leur gradient."
      },
      {
        "content": "Ils utilisent obligatoirement l'ATP pour transporter un ion contre son gradient.",
        "correct": false,
        "explanation": "Cela décrit un transport actif."
      },
      {
        "content": "La sélectivité ionique dépend de la structure du pore.",
        "correct": true,
        "explanation": "Différents récepteurs laissent passer des ions différents."
      },
      {
        "content": "Ils ne peuvent pas modifier le potentiel de membrane.",
        "correct": false,
        "explanation": "Le flux ionique le modifie fréquemment."
      },
      {
        "content": "Le sens du flux ionique est indépendant du gradient électrochimique.",
        "correct": false,
        "explanation": "Le gradient détermine le flux net."
      }
    ],
    "explanation": "Un récepteur ionotrope ouvre directement un canal et permet un flux passif selon le gradient électrochimique."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les récepteurs ionotropiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La sélectivité ionique dépend de la structure du pore.",
        "correct": true,
        "explanation": "Différents récepteurs laissent passer des ions différents."
      },
      {
        "content": "Ils permettent un flux passif d'ions selon leur gradient électrochimique.",
        "correct": true,
        "explanation": "Ils ne pompent pas les ions contre leur gradient."
      },
      {
        "content": "Ils ne peuvent pas modifier le potentiel de membrane.",
        "correct": false,
        "explanation": "Le flux ionique le modifie fréquemment."
      },
      {
        "content": "Leur activation peut modifier rapidement le potentiel de membrane.",
        "correct": true,
        "explanation": "La réponse est généralement plus rapide que celle d'une cascade métabotropique."
      },
      {
        "content": "Ils utilisent obligatoirement l'ATP pour transporter un ion contre son gradient.",
        "correct": false,
        "explanation": "Cela décrit un transport actif."
      }
    ],
    "explanation": "Un récepteur ionotrope ouvre directement un canal et permet un flux passif selon le gradient électrochimique."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel neurotransmetteur active le récepteur 5-HT3 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sérotonine",
        "5-hydroxytryptamine",
        "5-HT"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "5-HT3 est un canal cationique activé par la sérotonine et généralement dépolarisant."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant le récepteur GABAA ?",
    "choices": [
      {
        "content": "C'est un récepteur ionotrope activé par le GABA.",
        "correct": true,
        "explanation": "Il appartient aux canaux ligand-dépendants."
      },
      {
        "content": "Il s'agit d'un RCPG à sept traversées.",
        "correct": false,
        "explanation": "Cela décrit le récepteur GABAB."
      },
      {
        "content": "C'est un canal exclusivement sodique.",
        "correct": false,
        "explanation": "C'est principalement un canal anionique."
      },
      {
        "content": "Son activation est toujours dépolarisante quel que soit le gradient ionique.",
        "correct": false,
        "explanation": "L'effet dépend du gradient et est généralement inhibiteur dans le neurone mature."
      },
      {
        "content": "Il transporte activement le chlorure grâce à l'hydrolyse d'ATP.",
        "correct": false,
        "explanation": "Le flux à travers le canal est passif."
      }
    ],
    "explanation": "GABAA est un canal anionique ligand-dépendant ; son effet dépend du gradient de Cl−/HCO3− et est généralement inhibiteur dans les neurones matures."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la Na+/K+-ATPase, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle fait entrer deux K+ dans le cytosol par cycle.",
        "correct": true,
        "explanation": "Le potassium est transporté vers l'intérieur."
      },
      {
        "content": "Son fonctionnement est électrogène.",
        "correct": true,
        "explanation": "Trois charges positives sortent pour deux qui entrent."
      },
      {
        "content": "Elle fait entrer trois Na+ et sortir deux K+.",
        "correct": false,
        "explanation": "Le sens physiologique est l'inverse."
      },
      {
        "content": "Elle utilise directement l'énergie de l'ATP.",
        "correct": true,
        "explanation": "C'est une pompe de transport actif primaire."
      },
      {
        "content": "Elle expulse trois Na+ du cytosol par cycle.",
        "correct": true,
        "explanation": "Le transport du sodium est dirigé vers l'extérieur."
      }
    ],
    "explanation": "La Na+/K+-ATPase hydrolyse l'ATP pour expulser 3 Na+ et faire entrer 2 K+ par cycle."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de transport la P-glycoprotéine ABCB1 réalise-t-elle principalement vis-à-vis de ses substrats ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "efflux",
        "transport d'efflux",
        "export"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "P-gp/ABCB1 est une pompe d'efflux ATP-dépendante pouvant limiter l'absorption intestinale et participer à la multirésistance."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la P-glycoprotéine ABCB1 ?",
    "choices": [
      {
        "content": "Elle augmente toujours l'absorption intestinale des médicaments en les faisant entrer dans l'entérocyte.",
        "correct": false,
        "explanation": "Elle agit comme pompe d'efflux apicale."
      },
      {
        "content": "C'est un transporteur d'efflux utilisant l'ATP.",
        "correct": true,
        "explanation": "ABCB1 exporte de nombreux substrats hors des cellules."
      },
      {
        "content": "Elle est un récepteur nucléaire.",
        "correct": false,
        "explanation": "C'est un transporteur ABC membranaire."
      },
      {
        "content": "Dans l'intestin, elle est exprimée sur la membrane apicale des entérocytes.",
        "correct": true,
        "explanation": "Elle peut renvoyer des médicaments vers la lumière intestinale."
      },
      {
        "content": "Sa surexpression augmente nécessairement la concentration intracellulaire des cytotoxiques.",
        "correct": false,
        "explanation": "Elle tend au contraire à l'abaisser pour ses substrats."
      }
    ],
    "explanation": "P-gp/ABCB1 est une pompe d'efflux ATP-dépendante pouvant limiter l'absorption intestinale et participer à la multirésistance."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel ion halogénure traverse classiquement le canal CFTR ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "chlorure",
        "Cl-",
        "Cl−"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "CFTR est une protéine ABC atypique fonctionnant comme canal anionique, et de nombreux variants peuvent causer la mucoviscidose."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la différence entre canal et pompe, laquelle est correcte ?",
    "choices": [
      {
        "content": "Un canal ionique peut imposer durablement un flux contre le gradient sans source d'énergie.",
        "correct": false,
        "explanation": "Un canal suit le gradient électrochimique."
      },
      {
        "content": "CFTR illustre une protéine de famille ABC qui fonctionne comme canal plutôt que comme pompe.",
        "correct": true,
        "explanation": "Sa parenté structurale n'impose pas la fonction de pompe."
      },
      {
        "content": "Toute protéine utilisant l'ATP est nécessairement un canal passif.",
        "correct": false,
        "explanation": "L'ATP alimente souvent un transport actif."
      },
      {
        "content": "CFTR transporte le chlorure contre son gradient comme une pompe ABC classique.",
        "correct": false,
        "explanation": "Il fonctionne comme canal."
      },
      {
        "content": "La Na+/K+-ATPase et 5-HT3 ont exactement le même mécanisme.",
        "correct": false,
        "explanation": "L'une est une pompe, l'autre un canal ligand-dépendant."
      }
    ],
    "explanation": "Canaux et pompes se distinguent par le couplage énergétique : les canaux suivent le gradient, les pompes peuvent le remonter."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "CFTR est-il principalement une pompe ABC classique ou un canal anionique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "canal anionique",
        "canal chlorure",
        "canal Cl-",
        "canal ionique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "CFTR est une protéine ABC atypique fonctionnant comme canal anionique, et de nombreux variants peuvent causer la mucoviscidose."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La sélectivité ionique dépend de la structure du pore.",
        "correct": true,
        "explanation": "Différents récepteurs laissent passer des ions différents."
      },
      {
        "content": "Elle fait entrer trois Na+ et sortir deux K+.",
        "correct": false,
        "explanation": "Le sens physiologique est l'inverse."
      },
      {
        "content": "Ils utilisent obligatoirement l'ATP pour transporter un ion contre son gradient.",
        "correct": false,
        "explanation": "Cela décrit un transport actif."
      },
      {
        "content": "Ils permettent un flux passif d'ions selon leur gradient électrochimique.",
        "correct": true,
        "explanation": "Ils ne pompent pas les ions contre leur gradient."
      },
      {
        "content": "Elle fait entrer deux K+ dans le cytosol par cycle.",
        "correct": true,
        "explanation": "Le potassium est transporté vers l'intérieur."
      },
      {
        "content": "Elle utilise directement l'énergie de l'ATP.",
        "correct": true,
        "explanation": "C'est une pompe de transport actif primaire."
      },
      {
        "content": "Le sens du flux ionique est indépendant du gradient électrochimique.",
        "correct": false,
        "explanation": "Le gradient détermine le flux net."
      },
      {
        "content": "Ils ne peuvent pas modifier le potentiel de membrane.",
        "correct": false,
        "explanation": "Le flux ionique le modifie fréquemment."
      },
      {
        "content": "Elle n'utilise jamais d'ATP.",
        "correct": false,
        "explanation": "L'ATP est sa source d'énergie directe."
      },
      {
        "content": "Elle expulse trois Na+ du cytosol par cycle.",
        "correct": true,
        "explanation": "Le transport du sodium est dirigé vers l'extérieur."
      }
    ],
    "explanation": "Un récepteur ionotrope ouvre directement un canal et permet un flux passif selon le gradient électrochimique. La Na+/K+-ATPase hydrolyse l'ATP pour expulser 3 Na+ et faire entrer 2 K+ par cycle."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant le récepteur 5-HT3, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Il hydrolyse l'ATP pour pomper le sodium.",
        "correct": false,
        "explanation": "Le flux est passif."
      },
      {
        "content": "C'est un récepteur nucléaire de la sérotonine.",
        "correct": false,
        "explanation": "C'est un canal ligand-dépendant membranaire."
      },
      {
        "content": "Son canal est perméable aux cations.",
        "correct": true,
        "explanation": "Na+ et K+ contribuent notamment au courant."
      },
      {
        "content": "C'est un récepteur ionotrope.",
        "correct": true,
        "explanation": "Il se distingue de la plupart des autres récepteurs sérotoninergiques qui sont des RCPG."
      },
      {
        "content": "Son activation est généralement dépolarisante.",
        "correct": true,
        "explanation": "L'entrée nette de charges positives favorise une dépolarisation."
      }
    ],
    "explanation": "5-HT3 est un canal cationique activé par la sérotonine et généralement dépolarisant."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel neurotransmetteur active le récepteur GABAA ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "GABA",
        "acide gamma-aminobutyrique",
        "acide γ-aminobutyrique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "GABAA est un canal anionique ligand-dépendant ; son effet dépend du gradient de Cl−/HCO3− et est généralement inhibiteur dans les neurones matures."
  }
];
