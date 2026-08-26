import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';
import { TEX_UNITS, texQuantity } from '../../tex-units';

const U = TEX_UNITS;

/**
 * UE14 — Colle C08 — Biochimie — Acides aminés et protéines
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 */
export const UE14_COLLE_C08_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la structure et les propriétés des acides aminés ainsi que la liaison peptidique et la structure des protéines, quelles propositions sont exactes ?",
    "explanation": "À retenir : Les acides aminés protéinogènes possèdent généralement un carbone α lié à un groupe amino, un carboxyle, un hydrogène et une chaîne latérale. La glycine est achirale car son carbone α porte deux hydrogènes.",
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
    "question": "Quelle affirmation décrit correctement la structure et les propriétés des acides aminés ?",
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
        "content": String.raw`Le collagène I est une protéine globulaire monomérique de $${texQuantity(67, U.NM)}$ de longueur totale.`,
        "correct": false,
        "explanation": String.raw`C’est une protéine fibreuse ; $${texQuantity(67, U.NM)}$ correspond à la périodicité D, pas à la longueur totale du protomère.`
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
    "question": "Sélectionnez exactement les deux propositions exactes concernant la structure et les propriétés des acides aminés.",
    "explanation": "Les deux points à retenir sont les suivants : À pH physiologique, de nombreux acides aminés libres sont majoritairement sous forme zwitterionique. La proline possède une chaîne latérale cyclisée sur l’azote α.",
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
    "question": "Concernant l’hémoglobine ainsi que la structure et les propriétés des acides aminés, quelles propositions sont exactes ?",
    "explanation": "À retenir : À pH physiologique, de nombreux acides aminés libres sont majoritairement sous forme zwitterionique. Le point isoélectrique correspond au pH où la charge nette moyenne de l’espèce est nulle.",
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
    "question": "Concernant la structure et les propriétés des acides aminés, quelle proposition est exacte ?",
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
    "question": "Sélectionnez exactement les deux propositions exactes concernant la structure et les propriétés des acides aminés ainsi que la liaison peptidique et la structure des protéines.",
    "explanation": "Les deux points à retenir sont les suivants : La liaison peptidique présente un caractère partiel de double liaison. Le point isoélectrique correspond au pH où la charge nette moyenne de l’espèce est nulle.",
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
        "content": String.raw`Le collagène I est une protéine globulaire monomérique de $${texQuantity(67, U.NM)}$ de longueur totale.`,
        "correct": false,
        "explanation": String.raw`C’est une protéine fibreuse ; $${texQuantity(67, U.NM)}$ correspond à la périodicité D, pas à la longueur totale du protomère.`
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
    "question": "Parmi ces dix propositions portant sur la liaison peptidique et la structure des protéines, sélectionnez exactement les cinq exactes.",
    "explanation": "Les cinq points à retenir sont les suivants : La structure tertiaire décrit l’organisation tridimensionnelle globale d’une chaîne polypeptidique. Les feuillets β peuvent être parallèles ou antiparallèles. Une hélice α est stabilisée principalement par des liaisons hydrogène intrachaîne du squelette peptidique. Les résidus d’une chaîne polypeptidique sont reliés par des liaisons peptidiques. La liaison peptidique présente un caractère partiel de double liaison.",
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
        "content": String.raw`Le collagène I est une protéine globulaire monomérique de $${texQuantity(67, U.NM)}$ de longueur totale.`,
        "correct": false,
        "explanation": String.raw`C’est une protéine fibreuse ; $${texQuantity(67, U.NM)}$ correspond à la périodicité D, pas à la longueur totale du protomère.`
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
    "question": "Concernant le collagène et les protéines structurales ainsi que la liaison peptidique et la structure des protéines, quelles propositions sont exactes ?",
    "explanation": "À retenir : Une hélice α est stabilisée principalement par des liaisons hydrogène intrachaîne du squelette peptidique. Les résidus d’une chaîne polypeptidique sont reliés par des liaisons peptidiques.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:collagene"
    ],
    "choices": [
      {
        "content": String.raw`Le collagène I est une protéine globulaire monomérique de $${texQuantity(67, U.NM)}$ de longueur totale.`,
        "correct": false,
        "explanation": String.raw`C’est une protéine fibreuse ; $${texQuantity(67, U.NM)}$ correspond à la périodicité D, pas à la longueur totale du protomère.`
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
    "question": "Parmi ces cinq affirmations sur la structure et les propriétés des acides aminés, laquelle est correcte ?",
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
    "question": "Sélectionnez exactement les deux propositions exactes concernant la liaison peptidique et la structure des protéines.",
    "explanation": "Les deux points à retenir sont les suivants : Une hélice α est stabilisée principalement par des liaisons hydrogène intrachaîne du squelette peptidique. Les résidus d’une chaîne polypeptidique sont reliés par des liaisons peptidiques.",
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
    "question": "Concernant la structure et les propriétés des acides aminés, la liaison peptidique et la structure des protéines, ainsi que l’hémoglobine, quelles propositions sont exactes ?",
    "explanation": "À retenir : La structure tertiaire décrit l’organisation tridimensionnelle globale d’une chaîne polypeptidique. Les ponts disulfure proviennent de l’oxydation de deux résidus cystéine. L’hémoglobine adulte HbA est un tétramère α2β2.",
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
    "question": "Quelle affirmation décrit correctement la liaison peptidique et la structure des protéines ?",
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
    "question": "Parmi ces cinq affirmations portant sur la liaison peptidique et la structure des protéines, retenez exactement les deux correctes.",
    "explanation": "Les deux points à retenir sont les suivants : La structure tertiaire décrit l’organisation tridimensionnelle globale d’une chaîne polypeptidique. Les feuillets β peuvent être parallèles ou antiparallèles.",
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
    "question": "Concernant l’hémoglobine, la structure et les propriétés des acides aminés, ainsi que le collagène et les protéines structurales, quelles propositions sont exactes ?",
    "explanation": "À retenir : La drépanocytose classique HbS implique une substitution β6 Glu→Val. Le collagène comporte une triple hélice riche en glycine, proline et hydroxyproline. Chaque groupe hème de l’hémoglobine fonctionnelle contient un fer Fe2+ capable de lier O2.",
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
    "question": String.raw`Quelle est approximativement la périodicité D du collagène I ? Donnez uniquement la valeur numérique, exprimée en $${U.NM}$.`,
    "explanation": String.raw`La périodicité D est d’environ $${texQuantity(67, U.NM)}$.`,
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
      "tolerance": 2,
      "unit": "nm",
      "displayUnit": U.NM
    }
  },
  {
    "order": 20,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Concernant la liaison peptidique et la structure des protéines, quelle proposition est exacte ?",
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
        "content": String.raw`Le collagène I est une protéine globulaire monomérique de $${texQuantity(67, U.NM)}$ de longueur totale.`,
        "correct": false,
        "explanation": String.raw`C’est une protéine fibreuse ; $${texQuantity(67, U.NM)}$ correspond à la périodicité D, pas à la longueur totale du protomère.`
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
    "question": "Sur le collagène et les protéines structurales ainsi que la liaison peptidique et la structure des protéines, quelles affirmations sont correctes ?",
    "explanation": String.raw`À retenir : les lamines nucléaires sont des protéines de filaments intermédiaires de type V ; la périodicité D des fibrilles de collagène I est d’environ $${texQuantity(67, U.NM)}$ ; les laminines sont des glycoprotéines hétérotrimériques α-β-γ de la matrice extracellulaire.`,
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
        "content": String.raw`La périodicité D des fibrilles de collagène I est d’environ $${texQuantity(67, U.NM)}$.`,
        "correct": true,
        "explanation": "Elle reflète l’arrangement décalé des molécules de collagène."
      },
      {
        "content": "Les laminines sont des glycoprotéines hétérotrimériques α-β-γ de la matrice extracellulaire.",
        "correct": true,
        "explanation": "Elles sont importantes dans les membranes basales."
      },
      {
        "content": String.raw`Le collagène I est une protéine globulaire monomérique de $${texQuantity(67, U.NM)}$ de longueur totale.`,
        "correct": false,
        "explanation": String.raw`C’est une protéine fibreuse ; $${texQuantity(67, U.NM)}$ correspond à la périodicité D, pas à la longueur totale du protomère.`
      }
    ]
  },
  {
    "order": 22,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la structure et les propriétés des acides aminés, quelles propositions sont exactes ?",
    "explanation": "À retenir : La proline possède une chaîne latérale cyclisée sur l’azote α. Les acides aminés protéinogènes possèdent généralement un carbone α lié à un groupe amino, un carboxyle, un hydrogène et une chaîne latérale. L’actine G est monomérique et l’actine F correspond à un polymère filamentaire. La glycine est achirale car son carbone α porte deux hydrogènes.",
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
    "question": "Sur la structure et les propriétés des acides aminés ainsi que la liaison peptidique et la structure des protéines, quelles affirmations sont correctes ?",
    "explanation": "À retenir : La proline possède une chaîne latérale cyclisée sur l’azote α. À pH physiologique, de nombreux acides aminés libres sont majoritairement sous forme zwitterionique. Le point isoélectrique correspond au pH où la charge nette moyenne de l’espèce est nulle. La liaison peptidique présente un caractère partiel de double liaison.",
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
    "question": "Concernant la liaison peptidique et la structure des protéines ainsi que le collagène et les protéines structurales, quelles propositions sont exactes ?",
    "explanation": "À retenir : Les résidus d’une chaîne polypeptidique sont reliés par des liaisons peptidiques. Les feuillets β peuvent être parallèles ou antiparallèles. La liaison peptidique présente un caractère partiel de double liaison. Une hélice α est stabilisée principalement par des liaisons hydrogène intrachaîne du squelette peptidique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C08",
      "ec:BIOCHIMIE",
      "theme:collagene"
    ],
    "choices": [
      {
        "content": String.raw`Le collagène I est une protéine globulaire monomérique de $${texQuantity(67, U.NM)}$ de longueur totale.`,
        "correct": false,
        "explanation": String.raw`C’est une protéine fibreuse ; $${texQuantity(67, U.NM)}$ correspond à la périodicité D, pas à la longueur totale du protomère.`
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
