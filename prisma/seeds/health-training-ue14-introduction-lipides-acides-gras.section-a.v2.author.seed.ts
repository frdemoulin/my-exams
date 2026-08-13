import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie — Introduction générale sur les lipides et acides gras — Section A
 * Banque éditoriale auteur — à intégrer via le helper partagé du repo.
 */

export const UE14_BIOCH_CH4_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des lipides :",
    "choices": [
      {
        "content": "Ils forment un groupe hétérogène de composés.",
        "correct": true,
        "explanation": "Définition du support."
      },
      {
        "content": "Leur propriété physique commune mise en avant est l’insolubilité dans l’eau.",
        "correct": true,
        "explanation": "Caractéristique commune."
      },
      {
        "content": "Le groupe comprend notamment graisses, huiles, cires et stéroïdes.",
        "correct": true,
        "explanation": "Exemples cités."
      },
      {
        "content": "Tous les lipides possèdent exactement la même structure chimique.",
        "correct": false,
        "explanation": "Le groupe est au contraire hétérogène."
      }
    ],
    "explanation": "La notion de lipide repose ici sur une propriété physique commune plutôt que sur une structure unique."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La classification simplifiée des lipides du support comprend :",
    "choices": [
      {
        "content": "Des lipides simples.",
        "correct": true,
        "explanation": "Première catégorie."
      },
      {
        "content": "Des lipides complexes.",
        "correct": true,
        "explanation": "Deuxième catégorie."
      },
      {
        "content": "Les acides gras parmi les lipides simples.",
        "correct": true,
        "explanation": "Classement donné."
      },
      {
        "content": "Les phospholipides parmi les lipides simples uniquement.",
        "correct": false,
        "explanation": "Ils sont classés parmi les lipides complexes."
      }
    ],
    "explanation": "La fiche distingue schématiquement lipides simples et complexes."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans la classification de la fiche, les sphingolipides appartiennent aux :",
    "choices": [
      {
        "content": "Lipides complexes.",
        "correct": true,
        "explanation": "Classement du support."
      },
      {
        "content": "Glucides simples.",
        "correct": false,
        "explanation": "Autre famille."
      },
      {
        "content": "Acides aminés.",
        "correct": false,
        "explanation": "Autre famille."
      },
      {
        "content": "Lipides simples exclusivement.",
        "correct": false,
        "explanation": "Ils sont classés parmi les lipides complexes."
      }
    ],
    "explanation": "Les sphingolipides sont des lipides complexes dans le schéma du cours."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Un acide gras est décrit comme :",
    "choices": [
      {
        "content": "Un acide carboxylique à longue chaîne carbonée.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Une molécule comportant une fonction –COOH.",
        "correct": true,
        "explanation": "Fonction acide carboxylique."
      },
      {
        "content": "Une molécule avec une longue chaîne R contribuant au caractère hydrophobe.",
        "correct": true,
        "explanation": "Rôle de la chaîne."
      },
      {
        "content": "Une protéine riche en fonctions amines.",
        "correct": false,
        "explanation": "Un acide gras n’est pas une protéine."
      }
    ],
    "explanation": "La structure associe une fonction carboxylique polaire à une longue chaîne carbonée hydrophobe."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans la représentation simplifiée d’un acide gras :",
    "choices": [
      {
        "content": "Le pôle hydrophile correspond à la fonction acide carboxylique.",
        "correct": true,
        "explanation": "Pôle polaire."
      },
      {
        "content": "Le pôle hydrophobe correspond à la chaîne carbonée.",
        "correct": true,
        "explanation": "Pôle apolaire."
      },
      {
        "content": "La molécule possède donc deux régions de propriétés différentes.",
        "correct": true,
        "explanation": "Principe amphiphile de la représentation."
      },
      {
        "content": "La chaîne hydrocarbonée est le pôle le plus hydrophile.",
        "correct": false,
        "explanation": "Elle est hydrophobe."
      }
    ],
    "explanation": "La représentation cercle + chaîne matérialise les deux pôles."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Deux critères principaux de classification des acides gras sont :",
    "choices": [
      {
        "content": "Le nombre d’atomes de carbone.",
        "correct": true,
        "explanation": "Premier critère."
      },
      {
        "content": "La présence et le nombre de doubles liaisons.",
        "correct": true,
        "explanation": "Deuxième critère."
      },
      {
        "content": "La saturation ou désaturation découle du nombre de doubles liaisons.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "La couleur de la molécule en solution.",
        "correct": false,
        "explanation": "Ce n’est pas un critère du cours."
      }
    ],
    "explanation": "Longueur de chaîne et degré d’insaturation structurent la classification des acides gras."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Un acide gras sans double liaison est dit :",
    "choices": [
      {
        "content": "Saturé.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Monodésaturé.",
        "correct": false,
        "explanation": "Une double liaison."
      },
      {
        "content": "Polydésaturé.",
        "correct": false,
        "explanation": "Plusieurs doubles liaisons."
      },
      {
        "content": "Aromatique.",
        "correct": false,
        "explanation": "Ce terme n’est pas la classification utilisée ici."
      }
    ],
    "explanation": "L’absence de double liaison définit un acide gras saturé."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La numérotation officielle de la chaîne d’un acide gras :",
    "choices": [
      {
        "content": "Attribue le numéro 1 au carbone de la fonction carboxylique.",
        "correct": true,
        "explanation": "C1 = carbone le plus oxydé."
      },
      {
        "content": "Progresse ensuite le long de la chaîne carbonée.",
        "correct": true,
        "explanation": "Principe."
      },
      {
        "content": "Diffère de la nomenclature traditionnelle α/β/ω.",
        "correct": true,
        "explanation": "Deux systèmes coexistent."
      },
      {
        "content": "Attribue toujours le numéro 1 au carbone oméga.",
        "correct": false,
        "explanation": "Le carbone oméga est à l’extrémité opposée."
      }
    ],
    "explanation": "Le C1 officiel est le carbone carboxylique."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans la nomenclature traditionnelle :",
    "choices": [
      {
        "content": "Le carbone adjacent au carboxyle est appelé carbone α.",
        "correct": true,
        "explanation": "C2 officiel."
      },
      {
        "content": "Le dernier carbone de la chaîne est appelé carbone ω.",
        "correct": true,
        "explanation": "Extrémité méthyle."
      },
      {
        "content": "Des lettres grecques sont utilisées à partir du carbone α.",
        "correct": true,
        "explanation": "Convention."
      },
      {
        "content": "Le carbone carboxylique est appelé carbone ω.",
        "correct": false,
        "explanation": "Le carbone ω est à l’autre extrémité."
      }
    ],
    "explanation": "La nomenclature traditionnelle repère la chaîne depuis le carbone α et l’extrémité ω."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans une chaîne d’acide gras, quel carbone est le carbone α dans la numérotation officielle ?",
    "choices": [
      {
        "content": "C2.",
        "correct": true,
        "explanation": "Le carbone α est adjacent au C1 carboxylique."
      },
      {
        "content": "C1.",
        "correct": false,
        "explanation": "C1 est le carbone carboxylique."
      },
      {
        "content": "Le dernier carbone.",
        "correct": false,
        "explanation": "C’est le carbone ω."
      },
      {
        "content": "Toujours C18.",
        "correct": false,
        "explanation": "Cela dépend de la longueur de chaîne."
      }
    ],
    "explanation": "Le carbone α correspond au C2 officiel."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un étudiant analyse une molécule R–COOH à longue chaîne carbonée. Les indices compatibles avec un acide gras sont :",
    "choices": [
      {
        "content": "La présence d’une fonction acide carboxylique.",
        "correct": true,
        "explanation": "Critère structural."
      },
      {
        "content": "Une longue chaîne hydrocarbonée hydrophobe.",
        "correct": true,
        "explanation": "Critère structural."
      },
      {
        "content": "Un pôle hydrophile au niveau du carboxyle.",
        "correct": true,
        "explanation": "Représentation du support."
      },
      {
        "content": "L’obligation de posséder une double liaison.",
        "correct": false,
        "explanation": "Un acide gras peut être saturé."
      }
    ],
    "explanation": "La structure générique d’un acide gras suffit à reconnaître la famille."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Classer un acide gras selon sa longueur de chaîne revient à utiliser :",
    "choices": [
      {
        "content": "Le nombre total d’atomes de carbone.",
        "correct": true,
        "explanation": "Critère."
      },
      {
        "content": "Des catégories courte, moyenne, longue et très longue chaîne.",
        "correct": true,
        "explanation": "Catégories citées."
      },
      {
        "content": "Un critère distinct du degré d’insaturation.",
        "correct": true,
        "explanation": "Deux axes indépendants."
      },
      {
        "content": "Uniquement le nombre d’atomes d’oxygène.",
        "correct": false,
        "explanation": "Ce n’est pas le critère utilisé."
      }
    ],
    "explanation": "La longueur de chaîne constitue un axe de classification indépendant de l’insaturation."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment appelle-t-on le dernier carbone de la chaîne dans la nomenclature traditionnelle ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "omega",
        "oméga",
        "carbone omega",
        "carbone oméga",
        "ω"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Il s’agit du carbone oméga (ω)."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans la numérotation officielle, quel numéro porte le carbone α ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Le carbone α est le carbone immédiatement voisin du carbone carboxylique C1."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux grands critères de classification des acides gras donnés dans la fiche.",
    "choices": [
      {
        "content": "Nombre d’atomes de carbone.",
        "correct": true,
        "explanation": "Critère de longueur."
      },
      {
        "content": "Présence et nombre de doubles liaisons.",
        "correct": true,
        "explanation": "Critère d’insaturation."
      },
      {
        "content": "Nombre de fonctions amines.",
        "correct": false,
        "explanation": "Non pertinent."
      },
      {
        "content": "Couleur en solution.",
        "correct": false,
        "explanation": "Non pertinent."
      }
    ],
    "explanation": "Longueur de chaîne et insaturation sont les deux critères principaux."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un acide gras possède une tête carboxylique et une longue chaîne carbonée. On peut en déduire :",
    "choices": [
      {
        "content": "La tête carboxylique constitue le pôle hydrophile.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "La chaîne contribue au caractère hydrophobe.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "L’allongement de la chaîne renforce globalement la part hydrophobe.",
        "correct": true,
        "explanation": "Cohérent avec la structure."
      },
      {
        "content": "La fonction –COOH est le pôle hydrophobe dans le modèle.",
        "correct": false,
        "explanation": "Elle est hydrophile."
      }
    ],
    "explanation": "Les deux régions expliquent le comportement des acides gras dans l’eau."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans la classification de la fiche :",
    "choices": [
      {
        "content": "Les glycérides sont rangés parmi les lipides simples.",
        "correct": true,
        "explanation": "Classement."
      },
      {
        "content": "Les phospholipides sont rangés parmi les lipides complexes.",
        "correct": true,
        "explanation": "Classement."
      },
      {
        "content": "Les sphingolipides sont rangés parmi les lipides complexes.",
        "correct": true,
        "explanation": "Classement."
      },
      {
        "content": "Les acides gras sont rangés parmi les glucides.",
        "correct": false,
        "explanation": "Ils sont des lipides simples."
      }
    ],
    "explanation": "La classification annonce les familles développées dans les chapitres suivants."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La présence d’une ou plusieurs doubles liaisons dans un acide gras :",
    "choices": [
      {
        "content": "Le classe parmi les acides gras désaturés.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Constitue un critère structural majeur.",
        "correct": true,
        "explanation": "Classification."
      },
      {
        "content": "Permet ensuite de distinguer mono- et polydésaturés.",
        "correct": true,
        "explanation": "Sous-classification."
      },
      {
        "content": "Transforme nécessairement l’acide gras en stéroïde.",
        "correct": false,
        "explanation": "Famille différente."
      }
    ],
    "explanation": "Le nombre de doubles liaisons précise le degré d’insaturation."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un acide gras à 18 carbones est numéroté selon deux conventions. Quelles affirmations sont cohérentes ?",
    "choices": [
      {
        "content": "Le carbone carboxylique est C1 en nomenclature officielle.",
        "correct": true,
        "explanation": "Convention."
      },
      {
        "content": "Le carbone adjacent est α en nomenclature traditionnelle.",
        "correct": true,
        "explanation": "Convention."
      },
      {
        "content": "Le carbone terminal opposé est ω.",
        "correct": true,
        "explanation": "Convention."
      },
      {
        "content": "Le carbone α est obligatoirement le dernier carbone.",
        "correct": false,
        "explanation": "C’est le carbone adjacent au carboxyle."
      }
    ],
    "explanation": "Les deux nomenclatures décrivent la même chaîne avec des repères différents."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le terme « gras » dans acide gras est relié dans la fiche :",
    "choices": [
      {
        "content": "À la longue chaîne carbonée.",
        "correct": true,
        "explanation": "Origine du caractère hydrophobe."
      },
      {
        "content": "À l’insolubilité dans l’eau conférée par la chaîne.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "À un comportement différent du seul groupement carboxyle.",
        "correct": true,
        "explanation": "La molécule associe deux pôles."
      },
      {
        "content": "À l’absence de carbone dans la molécule.",
        "correct": false,
        "explanation": "La chaîne est carbonée."
      }
    ],
    "explanation": "La longue chaîne hydrocarbonée explique le caractère hydrophobe associé au terme « gras »."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Définitions, classification et numérotation des acides gras : sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "Les lipides sont un groupe hétérogène.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Les acides gras sont des acides carboxyliques à longue chaîne.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Le carboxyle constitue le pôle hydrophile.",
        "correct": true,
        "explanation": "Structure."
      },
      {
        "content": "Le carbone carboxylique est C1.",
        "correct": true,
        "explanation": "Numérotation."
      },
      {
        "content": "Le dernier carbone est appelé ω.",
        "correct": true,
        "explanation": "Convention."
      },
      {
        "content": "Tous les lipides ont la même structure.",
        "correct": false,
        "explanation": "Groupe hétérogène."
      },
      {
        "content": "Le carbone α est C1.",
        "correct": false,
        "explanation": "C2."
      },
      {
        "content": "Un acide gras saturé possède au moins une double liaison.",
        "correct": false,
        "explanation": "Aucune double liaison."
      },
      {
        "content": "Les sphingolipides sont des glucides simples.",
        "correct": false,
        "explanation": "Lipides complexes."
      },
      {
        "content": "La chaîne hydrocarbonée est le pôle hydrophile.",
        "correct": false,
        "explanation": "Hydrophobe."
      }
    ],
    "explanation": "Cette QRPL consolide définitions, classification et numérotation."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux pôles de la représentation simplifiée d’un acide gras.",
    "choices": [
      {
        "content": "Pôle hydrophile : fonction carboxylique.",
        "correct": true,
        "explanation": "Tête polaire."
      },
      {
        "content": "Pôle hydrophobe : chaîne carbonée.",
        "correct": true,
        "explanation": "Queue apolaire."
      },
      {
        "content": "Pôle hydrophile : carbone ω uniquement.",
        "correct": false,
        "explanation": "Le repère ω ne définit pas un pôle chimique."
      },
      {
        "content": "Pôle hydrophobe : groupement –COOH.",
        "correct": false,
        "explanation": "Le –COOH est hydrophile."
      }
    ],
    "explanation": "Un acide gras possède une tête carboxylique hydrophile et une chaîne hydrophobe."
  }
];
