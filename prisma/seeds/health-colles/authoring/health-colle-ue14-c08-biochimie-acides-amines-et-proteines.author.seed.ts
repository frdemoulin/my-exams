import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';

/**
 * UE14 — Colle C08 — Biochimie — Acides aminés et protéines
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 */
export const UE14_COLLE_C08_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Colle C08 — concernant aa structure, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:aa-structure"
    ],
    "choices": [
      {
        "content": "La glycine possède deux centres stéréogènes.",
        "correct": false,
        "explanation": "Elle est achirale."
      },
      {
        "content": "La liaison peptidique tourne librement comme une liaison simple C–C.",
        "correct": false,
        "explanation": "Son caractère partiel de double liaison limite fortement la rotation."
      },
      {
        "content": "Les acides aminés protéinogènes possèdent généralement un carbone α lié à un groupe amino, un carboxyle, un hydrogène et une chaîne latérale.",
        "correct": true,
        "explanation": "C’est la structure générale, avec la glycine comme cas achiral."
      },
      {
        "content": "Le point isoélectrique signifie qu’aucun groupement de l’acide aminé ne porte de charge.",
        "correct": false,
        "explanation": "La charge nette est nulle, mais des charges positives et négatives peuvent coexister."
      },
      {
        "content": "La glycine est achirale car son carbone α porte deux hydrogènes.",
        "correct": true,
        "explanation": "Elle ne possède pas quatre substituants différents."
      }
    ]
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel est le seul acide aminé protéinogène standard achiral ?",
    "explanation": "La glycine porte deux hydrogènes sur Cα.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glycine",
        "Gly",
        "G"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 3,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de aa structure ?",
    "explanation": "Sa structure rigidifie localement la chaîne polypeptidique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:aa-structure"
    ],
    "choices": [
      {
        "content": "La proline possède une chaîne latérale cyclisée sur l’azote α.",
        "correct": true,
        "explanation": "Sa structure rigidifie localement la chaîne polypeptidique."
      },
      {
        "content": "Le fer fonctionnel de l’hème de l’hémoglobine est Fe3+.",
        "correct": false,
        "explanation": "Il est Fe2+."
      },
      {
        "content": "HbS correspond à une substitution β6 Val→Glu.",
        "correct": false,
        "explanation": "La mutation classique est Glu→Val."
      },
      {
        "content": "Le collagène I est une protéine globulaire monomérique de 67 nm de longueur totale.",
        "correct": false,
        "explanation": "C’est une protéine fibreuse ; 67 nm correspond à la périodicité D, pas à la longueur totale du protomère."
      },
      {
        "content": "Les laminines et les lamines sont deux noms du même réseau protéique nucléaire.",
        "correct": false,
        "explanation": "Les laminines sont extracellulaires ; les lamines sont nucléaires."
      }
    ]
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes dans cette mise en relation de notions de biochimie.",
    "explanation": "Deux propositions seulement sont exactes ; le nombre attendu est volontairement imposé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "À pH physiologique, de nombreux acides aminés libres sont majoritairement sous forme zwitterionique.",
        "correct": true,
        "explanation": "Le carboxyle est souvent déprotoné et l’amine protonée."
      },
      {
        "content": "Les feuillets β sont toujours antiparallèles.",
        "correct": false,
        "explanation": "Ils peuvent être parallèles ou antiparallèles."
      },
      {
        "content": "HbA adulte est composée de quatre chaînes β.",
        "correct": false,
        "explanation": "HbA = α2β2."
      },
      {
        "content": "Une hélice α est stabilisée principalement par des ponts disulfure entre chaque résidu.",
        "correct": false,
        "explanation": "Les liaisons hydrogène du squelette sont la stabilisation fondamentale de l’hélice."
      },
      {
        "content": "La proline possède une chaîne latérale cyclisée sur l’azote α.",
        "correct": true,
        "explanation": "Sa structure rigidifie localement la chaîne polypeptidique."
      }
    ]
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Colle C08 — concernant hemoglobine, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:hemoglobine"
    ],
    "choices": [
      {
        "content": "Le fer fonctionnel de l’hème de l’hémoglobine est Fe3+.",
        "correct": false,
        "explanation": "Il est Fe2+."
      },
      {
        "content": "À pH physiologique, de nombreux acides aminés libres sont majoritairement sous forme zwitterionique.",
        "correct": true,
        "explanation": "Le carboxyle est souvent déprotoné et l’amine protonée."
      },
      {
        "content": "HbA adulte est composée de quatre chaînes β.",
        "correct": false,
        "explanation": "HbA = α2β2."
      },
      {
        "content": "Le point isoélectrique correspond au pH où la charge nette moyenne de l’espèce est nulle.",
        "correct": true,
        "explanation": "Il ne signifie pas absence de charges internes."
      },
      {
        "content": "Les feuillets β sont toujours antiparallèles.",
        "correct": false,
        "explanation": "Ils peuvent être parallèles ou antiparallèles."
      }
    ]
  },
  {
    "order": 6,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de sous-unités possède l’hémoglobine adulte HbA ?",
    "explanation": "HbA est un tétramère α2β2.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    }
  },
  {
    "order": 7,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de acido basique ?",
    "explanation": "Le carboxyle est souvent déprotoné et l’amine protonée.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:acido-basique"
    ],
    "choices": [
      {
        "content": "Les laminines et les lamines sont deux noms du même réseau protéique nucléaire.",
        "correct": false,
        "explanation": "Les laminines sont extracellulaires ; les lamines sont nucléaires."
      },
      {
        "content": "À pH physiologique, de nombreux acides aminés libres sont majoritairement sous forme zwitterionique.",
        "correct": true,
        "explanation": "Le carboxyle est souvent déprotoné et l’amine protonée."
      },
      {
        "content": "Les microtubules sont des polymères d’actine F.",
        "correct": false,
        "explanation": "Ils sont formés de tubuline α/β."
      },
      {
        "content": "Les protéines constituent une réserve énergétique spécialisée comparable au glycogène.",
        "correct": false,
        "explanation": "L’organisme ne possède pas de réserve protéique spécialisée équivalente."
      },
      {
        "content": "La glycine possède deux centres stéréogènes.",
        "correct": false,
        "explanation": "Elle est achirale."
      }
    ]
  },
  {
    "order": 8,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes dans cette mise en relation de notions de biochimie.",
    "explanation": "Deux propositions seulement sont exactes ; le nombre attendu est volontairement imposé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Le fer fonctionnel de l’hème de l’hémoglobine est Fe3+.",
        "correct": false,
        "explanation": "Il est Fe2+."
      },
      {
        "content": "Le collagène I est une protéine globulaire monomérique de 67 nm de longueur totale.",
        "correct": false,
        "explanation": "C’est une protéine fibreuse ; 67 nm correspond à la périodicité D, pas à la longueur totale du protomère."
      },
      {
        "content": "La liaison peptidique présente un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "La résonance limite sa rotation et favorise sa planéité."
      },
      {
        "content": "Le point isoélectrique correspond au pH où la charge nette moyenne de l’espèce est nulle.",
        "correct": true,
        "explanation": "Il ne signifie pas absence de charges internes."
      },
      {
        "content": "HbS correspond à une substitution β6 Val→Glu.",
        "correct": false,
        "explanation": "La mutation classique est Glu→Val."
      }
    ]
  },
  {
    "order": 9,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "explanation": "Cette question longue vérifie la capacité à maintenir une lecture précise sur plusieurs notions transversales.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:synthese-transversale"
    ],
    "choices": [
      {
        "content": "La structure tertiaire décrit l’organisation tridimensionnelle globale d’une chaîne polypeptidique.",
        "correct": true,
        "explanation": "Elle résulte d’interactions entre résidus et avec le milieu."
      },
      {
        "content": "Les feuillets β peuvent être parallèles ou antiparallèles.",
        "correct": true,
        "explanation": "Les brins β s’associent par liaisons hydrogène du squelette."
      },
      {
        "content": "Une hélice α est stabilisée principalement par des liaisons hydrogène intrachaîne du squelette peptidique.",
        "correct": true,
        "explanation": "Les liaisons relient classiquement C=O(i) et N–H(i+4)."
      },
      {
        "content": "Les résidus d’une chaîne polypeptidique sont reliés par des liaisons peptidiques.",
        "correct": true,
        "explanation": "La liaison implique le carboxyle d’un AA et l’amine du suivant."
      },
      {
        "content": "Le collagène I est une protéine globulaire monomérique de 67 nm de longueur totale.",
        "correct": false,
        "explanation": "C’est une protéine fibreuse ; 67 nm correspond à la périodicité D, pas à la longueur totale du protomère."
      },
      {
        "content": "HbA adulte est composée de quatre chaînes β.",
        "correct": false,
        "explanation": "HbA = α2β2."
      },
      {
        "content": "HbS correspond à une substitution β6 Val→Glu.",
        "correct": false,
        "explanation": "La mutation classique est Glu→Val."
      },
      {
        "content": "Le fer fonctionnel de l’hème de l’hémoglobine est Fe3+.",
        "correct": false,
        "explanation": "Il est Fe2+."
      },
      {
        "content": "La liaison peptidique présente un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "La résonance limite sa rotation et favorise sa planéité."
      },
      {
        "content": "Les laminines et les lamines sont deux noms du même réseau protéique nucléaire.",
        "correct": false,
        "explanation": "Les laminines sont extracellulaires ; les lamines sont nucléaires."
      }
    ]
  },
  {
    "order": 10,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Colle C08 — concernant collagene, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:collagene"
    ],
    "choices": [
      {
        "content": "Le collagène I est une protéine globulaire monomérique de 67 nm de longueur totale.",
        "correct": false,
        "explanation": "C’est une protéine fibreuse ; 67 nm correspond à la périodicité D, pas à la longueur totale du protomère."
      },
      {
        "content": "Les microtubules sont des polymères d’actine F.",
        "correct": false,
        "explanation": "Ils sont formés de tubuline α/β."
      },
      {
        "content": "Les laminines et les lamines sont deux noms du même réseau protéique nucléaire.",
        "correct": false,
        "explanation": "Les laminines sont extracellulaires ; les lamines sont nucléaires."
      },
      {
        "content": "Une hélice α est stabilisée principalement par des liaisons hydrogène intrachaîne du squelette peptidique.",
        "correct": true,
        "explanation": "Les liaisons relient classiquement C=O(i) et N–H(i+4)."
      },
      {
        "content": "Les résidus d’une chaîne polypeptidique sont reliés par des liaisons peptidiques.",
        "correct": true,
        "explanation": "La liaison implique le carboxyle d’un AA et l’amine du suivant."
      }
    ]
  },
  {
    "order": 11,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel est l’état d’oxydation du fer fonctionnel de l’hème dans l’hémoglobine capable de fixer O2 ?",
    "explanation": "Le fer fonctionnel est ferreux Fe2+.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Fe2+",
        "Fe²+",
        "II",
        "+2"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de acido basique ?",
    "explanation": "Il ne signifie pas absence de charges internes.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:acido-basique"
    ],
    "choices": [
      {
        "content": "La glycine possède deux centres stéréogènes.",
        "correct": false,
        "explanation": "Elle est achirale."
      },
      {
        "content": "Le point isoélectrique signifie qu’aucun groupement de l’acide aminé ne porte de charge.",
        "correct": false,
        "explanation": "La charge nette est nulle, mais des charges positives et négatives peuvent coexister."
      },
      {
        "content": "Le point isoélectrique correspond au pH où la charge nette moyenne de l’espèce est nulle.",
        "correct": true,
        "explanation": "Il ne signifie pas absence de charges internes."
      },
      {
        "content": "La liaison peptidique tourne librement comme une liaison simple C–C.",
        "correct": false,
        "explanation": "Son caractère partiel de double liaison limite fortement la rotation."
      },
      {
        "content": "Une hélice α est stabilisée principalement par des ponts disulfure entre chaque résidu.",
        "correct": false,
        "explanation": "Les liaisons hydrogène du squelette sont la stabilisation fondamentale de l’hélice."
      }
    ]
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes dans cette mise en relation de notions de biochimie.",
    "explanation": "Deux propositions seulement sont exactes ; le nombre attendu est volontairement imposé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Les laminines et les lamines sont deux noms du même réseau protéique nucléaire.",
        "correct": false,
        "explanation": "Les laminines sont extracellulaires ; les lamines sont nucléaires."
      },
      {
        "content": "Une hélice α est stabilisée principalement par des liaisons hydrogène intrachaîne du squelette peptidique.",
        "correct": true,
        "explanation": "Les liaisons relient classiquement C=O(i) et N–H(i+4)."
      },
      {
        "content": "Les microtubules sont des polymères d’actine F.",
        "correct": false,
        "explanation": "Ils sont formés de tubuline α/β."
      },
      {
        "content": "Les résidus d’une chaîne polypeptidique sont reliés par des liaisons peptidiques.",
        "correct": true,
        "explanation": "La liaison implique le carboxyle d’un AA et l’amine du suivant."
      },
      {
        "content": "Les protéines constituent une réserve énergétique spécialisée comparable au glycogène.",
        "correct": false,
        "explanation": "L’organisme ne possède pas de réserve protéique spécialisée équivalente."
      }
    ]
  },
  {
    "order": 14,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Colle C08 — concernant structure tertiaire, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:structure-tertiaire"
    ],
    "choices": [
      {
        "content": "La structure tertiaire décrit l’organisation tridimensionnelle globale d’une chaîne polypeptidique.",
        "correct": true,
        "explanation": "Elle résulte d’interactions entre résidus et avec le milieu."
      },
      {
        "content": "Le point isoélectrique signifie qu’aucun groupement de l’acide aminé ne porte de charge.",
        "correct": false,
        "explanation": "La charge nette est nulle, mais des charges positives et négatives peuvent coexister."
      },
      {
        "content": "Les ponts disulfure proviennent de l’oxydation de deux résidus cystéine.",
        "correct": true,
        "explanation": "Ils forment une cystine et stabilisent certaines protéines."
      },
      {
        "content": "L’hémoglobine adulte HbA est un tétramère α2β2.",
        "correct": true,
        "explanation": "Elle contient quatre sous-unités et quatre groupes hème."
      },
      {
        "content": "La glycine possède deux centres stéréogènes.",
        "correct": false,
        "explanation": "Elle est achirale."
      }
    ]
  },
  {
    "order": 15,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel acide aminé remplace le glutamate en position β6 dans HbS ?",
    "explanation": "La mutation classique est β6 Glu→Val.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "valine",
        "Val",
        "V"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de liaison peptidique ?",
    "explanation": "La résonance limite sa rotation et favorise sa planéité.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:liaison-peptidique"
    ],
    "choices": [
      {
        "content": "Une hélice α est stabilisée principalement par des ponts disulfure entre chaque résidu.",
        "correct": false,
        "explanation": "Les liaisons hydrogène du squelette sont la stabilisation fondamentale de l’hélice."
      },
      {
        "content": "Les feuillets β sont toujours antiparallèles.",
        "correct": false,
        "explanation": "Ils peuvent être parallèles ou antiparallèles."
      },
      {
        "content": "HbA adulte est composée de quatre chaînes β.",
        "correct": false,
        "explanation": "HbA = α2β2."
      },
      {
        "content": "La liaison peptidique présente un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "La résonance limite sa rotation et favorise sa planéité."
      },
      {
        "content": "Le fer fonctionnel de l’hème de l’hémoglobine est Fe3+.",
        "correct": false,
        "explanation": "Il est Fe2+."
      }
    ]
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes dans cette mise en relation de notions de biochimie.",
    "explanation": "Deux propositions seulement sont exactes ; le nombre attendu est volontairement imposé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "La liaison peptidique tourne librement comme une liaison simple C–C.",
        "correct": false,
        "explanation": "Son caractère partiel de double liaison limite fortement la rotation."
      },
      {
        "content": "Le point isoélectrique signifie qu’aucun groupement de l’acide aminé ne porte de charge.",
        "correct": false,
        "explanation": "La charge nette est nulle, mais des charges positives et négatives peuvent coexister."
      },
      {
        "content": "La structure tertiaire décrit l’organisation tridimensionnelle globale d’une chaîne polypeptidique.",
        "correct": true,
        "explanation": "Elle résulte d’interactions entre résidus et avec le milieu."
      },
      {
        "content": "Les feuillets β peuvent être parallèles ou antiparallèles.",
        "correct": true,
        "explanation": "Les brins β s’associent par liaisons hydrogène du squelette."
      },
      {
        "content": "La glycine possède deux centres stéréogènes.",
        "correct": false,
        "explanation": "Elle est achirale."
      }
    ]
  },
  {
    "order": 18,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Colle C08 — concernant hemoglobine, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:hemoglobine"
    ],
    "choices": [
      {
        "content": "HbA adulte est composée de quatre chaînes β.",
        "correct": false,
        "explanation": "HbA = α2β2."
      },
      {
        "content": "Les feuillets β sont toujours antiparallèles.",
        "correct": false,
        "explanation": "Ils peuvent être parallèles ou antiparallèles."
      },
      {
        "content": "La drépanocytose classique HbS implique une substitution β6 Glu→Val.",
        "correct": true,
        "explanation": "Cette substitution favorise la polymérisation de la désoxy-HbS."
      },
      {
        "content": "Le collagène comporte une triple hélice riche en glycine, proline et hydroxyproline.",
        "correct": true,
        "explanation": "La répétition Gly-X-Y est caractéristique."
      },
      {
        "content": "Chaque groupe hème de l’hémoglobine fonctionnelle contient un fer Fe2+ capable de lier O2.",
        "correct": true,
        "explanation": "L’oxydation en Fe3+ donne de la méthémoglobine incapable de fixer normalement O2."
      }
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle est approximativement, en nm, la périodicité D du collagène I ?",
    "explanation": "La périodicité D est d’environ 67 nm.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "number",
      "value": 67,
      "tolerance": 2
    }
  },
  {
    "order": 20,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de liaison peptidique ?",
    "explanation": "La liaison implique le carboxyle d’un AA et l’amine du suivant.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:liaison-peptidique"
    ],
    "choices": [
      {
        "content": "Le fer fonctionnel de l’hème de l’hémoglobine est Fe3+.",
        "correct": false,
        "explanation": "Il est Fe2+."
      },
      {
        "content": "HbS correspond à une substitution β6 Val→Glu.",
        "correct": false,
        "explanation": "La mutation classique est Glu→Val."
      },
      {
        "content": "Le collagène I est une protéine globulaire monomérique de 67 nm de longueur totale.",
        "correct": false,
        "explanation": "C’est une protéine fibreuse ; 67 nm correspond à la périodicité D, pas à la longueur totale du protomère."
      },
      {
        "content": "Les laminines et les lamines sont deux noms du même réseau protéique nucléaire.",
        "correct": false,
        "explanation": "Les laminines sont extracellulaires ; les lamines sont nucléaires."
      },
      {
        "content": "Les résidus d’une chaîne polypeptidique sont reliés par des liaisons peptidiques.",
        "correct": true,
        "explanation": "La liaison implique le carboxyle d’un AA et l’amine du suivant."
      }
    ]
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Colle C08 — concernant lamines, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:lamines"
    ],
    "choices": [
      {
        "content": "Les lamines nucléaires sont des protéines de filaments intermédiaires de type V.",
        "correct": true,
        "explanation": "Elles constituent la lamina nucléaire sous la membrane interne."
      },
      {
        "content": "Les laminines et les lamines sont deux noms du même réseau protéique nucléaire.",
        "correct": false,
        "explanation": "Les laminines sont extracellulaires ; les lamines sont nucléaires."
      },
      {
        "content": "La périodicité D des fibrilles de collagène I est d’environ 67 nm.",
        "correct": true,
        "explanation": "Elle reflète l’arrangement décalé des molécules de collagène."
      },
      {
        "content": "Les laminines sont des glycoprotéines hétérotrimériques α-β-γ de la matrice extracellulaire.",
        "correct": true,
        "explanation": "Elles sont importantes dans les membranes basales."
      },
      {
        "content": "Le collagène I est une protéine globulaire monomérique de 67 nm de longueur totale.",
        "correct": false,
        "explanation": "C’est une protéine fibreuse ; 67 nm correspond à la périodicité D, pas à la longueur totale du protomère."
      }
    ]
  },
  {
    "order": 22,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Colle C08 — concernant aa structure, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:aa-structure"
    ],
    "choices": [
      {
        "content": "La proline possède une chaîne latérale cyclisée sur l’azote α.",
        "correct": true,
        "explanation": "Sa structure rigidifie localement la chaîne polypeptidique."
      },
      {
        "content": "Les acides aminés protéinogènes possèdent généralement un carbone α lié à un groupe amino, un carboxyle, un hydrogène et une chaîne latérale.",
        "correct": true,
        "explanation": "C’est la structure générale, avec la glycine comme cas achiral."
      },
      {
        "content": "La glycine possède deux centres stéréogènes.",
        "correct": false,
        "explanation": "Elle est achirale."
      },
      {
        "content": "L’actine G est monomérique et l’actine F correspond à un polymère filamentaire.",
        "correct": true,
        "explanation": "La polymérisation de l’actine forme les microfilaments."
      },
      {
        "content": "La glycine est achirale car son carbone α porte deux hydrogènes.",
        "correct": true,
        "explanation": "Elle ne possède pas quatre substituants différents."
      }
    ]
  },
  {
    "order": 23,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Colle C08 — concernant aa structure, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:aa-structure"
    ],
    "choices": [
      {
        "content": "La proline possède une chaîne latérale cyclisée sur l’azote α.",
        "correct": true,
        "explanation": "Sa structure rigidifie localement la chaîne polypeptidique."
      },
      {
        "content": "À pH physiologique, de nombreux acides aminés libres sont majoritairement sous forme zwitterionique.",
        "correct": true,
        "explanation": "Le carboxyle est souvent déprotoné et l’amine protonée."
      },
      {
        "content": "Les feuillets β sont toujours antiparallèles.",
        "correct": false,
        "explanation": "Ils peuvent être parallèles ou antiparallèles."
      },
      {
        "content": "Le point isoélectrique correspond au pH où la charge nette moyenne de l’espèce est nulle.",
        "correct": true,
        "explanation": "Il ne signifie pas absence de charges internes."
      },
      {
        "content": "La liaison peptidique présente un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "La résonance limite sa rotation et favorise sa planéité."
      }
    ]
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sélectionnez le groupement carboxylate de cet acide aminé.",
    "explanation": "La zone attendue correspond à : Groupement carboxylate COO−.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:qzone"
    ],
    "image": {
      "src": "/images/training/ue14/colles/c08/amino-acid-carboxylate-qzone.svg",
      "alt": "Acide aminé sous forme zwitterionique",
      "width": 960,
      "height": 560
    },
    "expectedZones": [
      {
        "id": "target",
        "label": "Groupement carboxylate COO−",
        "x": 0.78,
        "y": 0.51,
        "tolerance": 0.085
      }
    ],
    "defaultTolerance": 0.085
  },
  {
    "order": 25,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Colle C08 — concernant collagene, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:collagene"
    ],
    "choices": [
      {
        "content": "Le collagène I est une protéine globulaire monomérique de 67 nm de longueur totale.",
        "correct": false,
        "explanation": "C’est une protéine fibreuse ; 67 nm correspond à la périodicité D, pas à la longueur totale du protomère."
      },
      {
        "content": "Les résidus d’une chaîne polypeptidique sont reliés par des liaisons peptidiques.",
        "correct": true,
        "explanation": "La liaison implique le carboxyle d’un AA et l’amine du suivant."
      },
      {
        "content": "Les feuillets β peuvent être parallèles ou antiparallèles.",
        "correct": true,
        "explanation": "Les brins β s’associent par liaisons hydrogène du squelette."
      },
      {
        "content": "La liaison peptidique présente un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "La résonance limite sa rotation et favorise sa planéité."
      },
      {
        "content": "Une hélice α est stabilisée principalement par des liaisons hydrogène intrachaîne du squelette peptidique.",
        "correct": true,
        "explanation": "Les liaisons relient classiquement C=O(i) et N–H(i+4)."
      }
    ]
  }
];
