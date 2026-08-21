import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.3 – Section A – Alcanes et cyclanes
 */

export const UE14_CH7_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des alcanes acycliques saturés, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les alcanes sont nécessairement cycliques.",
        "correct": false,
        "explanation": "Un alcane peut être acyclique ; les cyclanes constituent une famille cyclique distincte."
      },
      {
        "content": "Leur formule générale est $\\ce{C_nH_{2n+2}}$.",
        "correct": true,
        "explanation": "C'est la formule donnée dans le modèle étudié pour les alcanes acycliques."
      },
      {
        "content": "Ils sont issus notamment du pétrole.",
        "correct": true,
        "explanation": "Le modèle étudié cite cette origine."
      },
      {
        "content": "Ils contiennent nécessairement une double liaison $\\ce{C=C}$.",
        "correct": false,
        "explanation": "Une double liaison caractérise un alcène, pas un alcane."
      },
      {
        "content": "Un alcane acyclique saturé de formule générale $\\ce{C_nH_{2n}}$ appartient à la même famille qu’un cyclane.",
        "correct": false,
        "explanation": "Un alcane acyclique saturé suit $\\ce{C_nH_{2n+2}}$ ; $\\ce{C_nH_{2n}}$ correspond notamment à un cyclane monocyclique saturé."
      }
    ],
    "explanation": "Les alcanes sont des hydrocarbures saturés acycliques répondant à la formule générale $\\ce{C_nH_{2n+2}}$."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle est la formule brute du pentane ?",
    "choices": [
      {
        "content": "$\\ce{C5H12}$",
        "correct": true,
        "explanation": "Pour n=5, 2n+2=12."
      },
      {
        "content": "$\\ce{C5H6}$.",
        "correct": false,
        "explanation": "Le pentane est un alcane acyclique saturé : sa formule est $\\ce{C5H12}$."
      },
      {
        "content": "$\\ce{C5H10}$",
        "correct": false,
        "explanation": "Cette formule correspondrait notamment à un cyclane monocyclique ou à un alcène acyclique."
      },
      {
        "content": "$\\ce{C5H8}$",
        "correct": false,
        "explanation": "Cette formule est trop insaturée pour un alcane."
      },
      {
        "content": "$\\ce{C6H14}$",
        "correct": false,
        "explanation": "C'est l'hexane."
      }
    ],
    "explanation": "Le pentane est l'alcane à cinq carbones : $\\ce{C5H12}$."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles associations nom → formule sont exactes ?",
    "choices": [
      {
        "content": "Éthane → $\\ce{C2H6}$.",
        "correct": true,
        "explanation": "n=2."
      },
      {
        "content": "Propane → $\\ce{C3H8}$.",
        "correct": true,
        "explanation": "n=3."
      },
      {
        "content": "Butane → $\\ce{C4H10}$.",
        "correct": true,
        "explanation": "n=4."
      },
      {
        "content": "Pentane — $\\ce{C5H10}$.",
        "correct": false,
        "explanation": "Le pentane contient cinq carbones et suit $\\ce{C_nH_{2n+2}}$, soit $\\ce{C5H12}$."
      },
      {
        "content": "Méthane → $\\ce{CH4}$.",
        "correct": true,
        "explanation": "n=1."
      }
    ],
    "explanation": "Les premiers alcanes suivent directement la formule $\\ce{C_nH_{2n+2}}$."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Un alcane acyclique saturé contient 8 atomes de carbone. Combien d'atomes d'hydrogène contient-il ?",
    "answer": {
      "type": "number",
      "value": 18,
      "tolerance": 0
    },
    "explanation": "Pour un alcane, $H=2n+2=2\\times8+2=18$."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les cyclanes monocycliques saturés étudiés dans le modèle étudié :",
    "choices": [
      {
        "content": "Le cyclopropane possède trois carbones.",
        "correct": true,
        "explanation": "Le préfixe prop- signifie 3."
      },
      {
        "content": "Le cyclohexane possède une formule $\\ce{C6H14}$.",
        "correct": false,
        "explanation": "Un cyclane à six carbones est $\\ce{C6H12}$."
      },
      {
        "content": "La fermeture d’un cycle ajoute deux hydrogènes par rapport à l’alcane acyclique de même nombre de carbones.",
        "correct": false,
        "explanation": "La fermeture d’un cycle retire l’équivalent de deux hydrogènes : un cyclane monocyclique saturé suit $\\ce{C_nH_{2n}}$."
      },
      {
        "content": "Les cyclanes monocycliques saturés suivent $\\ce{C_nH_{2n+2}}$.",
        "correct": false,
        "explanation": "Ils suivent $\\ce{C_nH_{2n}}$."
      },
      {
        "content": "Leur formule générale est $\\ce{C_nH_{2n}}$.",
        "correct": true,
        "explanation": "La fermeture du cycle enlève deux H par rapport à l'alcane acyclique."
      }
    ],
    "explanation": "Les cyclanes saturés monocycliques ont la formule $\\ce{C_nH_{2n}}$."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle est la formule brute du cyclohexane ?",
    "choices": [
      {
        "content": "$\\ce{C6H8}$.",
        "correct": false,
        "explanation": "Le cyclohexane est un cyclane saturé à six carbones : $\\ce{C6H12}$."
      },
      {
        "content": "$\\ce{C6H12}$",
        "correct": true,
        "explanation": "Pour un cyclane, H=2n."
      },
      {
        "content": "$\\ce{C6H14}$",
        "correct": false,
        "explanation": "C'est l'hexane acyclique."
      },
      {
        "content": "$\\ce{C6H10}$",
        "correct": false,
        "explanation": "Trop insaturé pour le cyclane saturé étudié."
      },
      {
        "content": "$\\ce{C5H10}$",
        "correct": false,
        "explanation": "C'est la formule du cyclopentane."
      }
    ],
    "explanation": "Le cyclohexane est un cyclane saturé : $\\ce{C6H12}$."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la stabilité des petits cyclanes dans le modèle étudié :",
    "choices": [
      {
        "content": "Tous les cyclanes ont exactement la même stabilité.",
        "correct": false,
        "explanation": "La stabilité varie avec la taille du cycle."
      },
      {
        "content": "Le cyclodécane est présenté comme plus stable que le cyclohexane.",
        "correct": false,
        "explanation": "La stabilité est élevée pour le cyclopentane et le cyclohexane puis diminue lorsque la taille du cycle augmente."
      },
      {
        "content": "Le cyclopropane fait partie des cycles les moins tendus et les plus stables.",
        "correct": false,
        "explanation": "Le cyclopropane est un cycle tendu et énergétiquement défavorisé."
      },
      {
        "content": "Le cyclobutane est également tendu et relativement instable.",
        "correct": true,
        "explanation": "Il est cité avec le cyclopropane."
      },
      {
        "content": "Le cyclopentane et le cyclohexane sont très stables.",
        "correct": true,
        "explanation": "Ce sont les cycles cités comme très stables."
      }
    ],
    "explanation": "Le modèle étudié oppose les petits cycles tendus aux cycles à cinq et six carbones, beaucoup plus stables."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions relient correctement alcane et cyclane ?",
    "choices": [
      {
        "content": "Les cyclanes ont des propriétés générales proches de celles des alcanes.",
        "correct": true,
        "explanation": "Le modèle étudié le précise."
      },
      {
        "content": "Cyclohexane et hexane ont la même formule brute.",
        "correct": false,
        "explanation": "C6H12 contre C6H14."
      },
      {
        "content": "La présence du préfixe cyclo- indique une structure cyclique.",
        "correct": true,
        "explanation": "C'est le rôle du préfixe."
      },
      {
        "content": "Un cyclane monocyclique saturé peut avoir la même formule brute qu’un alcène acyclique comportant une seule double liaison.",
        "correct": true,
        "explanation": "Ces deux familles peuvent suivre $\\ce{C_nH_{2n}}$ ; la formule brute seule ne suffit donc pas toujours à les distinguer."
      },
      {
        "content": "Un alcane acyclique à n carbones a deux hydrogènes de plus que le cyclane monocyclique saturé de même n.",
        "correct": true,
        "explanation": "C_nH_{2n+2} contre C_nH_{2n}."
      }
    ],
    "explanation": "La fermeture d'un cycle modifie la formule brute tout en conservant le caractère saturé."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les molécules suivantes, laquelle est un cyclane saturé ?",
    "choices": [
      {
        "content": "$\\ce{C5H12}$ pentane.",
        "correct": false,
        "explanation": "C'est un alcane acyclique."
      },
      {
        "content": "$\\ce{C5H8}$ pentyne.",
        "correct": false,
        "explanation": "C'est un alcyne."
      },
      {
        "content": "$\\ce{C5H10}$ sous forme cyclopentane.",
        "correct": true,
        "explanation": "Cyclopentane est un cycle saturé."
      },
      {
        "content": "$\\ce{C5H10}$ pentène.",
        "correct": false,
        "explanation": "Même formule brute possible, mais la proposition décrit ici un alcène."
      },
      {
        "content": "$\\ce{C6H14}$ sous forme cyclique saturée.",
        "correct": false,
        "explanation": "Un cycle saturé à six carbones suit $\\ce{C_nH_{2n}}$, donc $\\ce{C6H12}$."
      }
    ],
    "explanation": "La formule seule peut être ambiguë : $\\ce{C5H10}$ peut correspondre à un cyclane ou à un alcène ; la structure ou le nom complète l'information."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes.",
    "choices": [
      {
        "content": "Le méthane est un cyclane.",
        "correct": false,
        "explanation": "C'est l'alcane le plus simple."
      },
      {
        "content": "Le cyclopropane appartient à la série $\\ce{C_nH_{2n+2}}$.",
        "correct": false,
        "explanation": "Un cyclane suit $\\ce{C_nH_{2n}}$."
      },
      {
        "content": "Le cyclohexane appartient à la série $\\ce{C_nH_{2n+2}}$.",
        "correct": false,
        "explanation": "Le cyclohexane est un cyclane monocyclique saturé : $\\ce{C6H12}$."
      },
      {
        "content": "Le propane et le butane sont cités pour des applications industrielles de chauffage.",
        "correct": true,
        "explanation": "Le modèle étudié donne cet exemple."
      },
      {
        "content": "Les applications thérapeutiques directes des alcanes sont décrites comme beaucoup plus limitées.",
        "correct": true,
        "explanation": "C'est le contraste présenté."
      }
    ],
    "explanation": "Le chapitre situe les alcanes dans leur contexte industriel tout en restant centré sur leurs propriétés structurales."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un hydrocarbure saturé acyclique a pour formule $\\ce{C7H16}$. Combien de liaisons C–C possède une chaîne linéaire de 7 carbones ?",
    "answer": {
      "type": "number",
      "value": 6,
      "tolerance": 0
    },
    "explanation": "Une chaîne acyclique linéaire de 7 carbones comporte 6 liaisons C–C."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare hexane et cyclohexane. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le cyclohexane possède nécessairement une double liaison.",
        "correct": false,
        "explanation": "Il est saturé."
      },
      {
        "content": "À nombre de carbones égal, la fermeture du cycle augmente de deux le nombre d’hydrogènes.",
        "correct": false,
        "explanation": "Elle diminue de deux le nombre d’hydrogènes par rapport à l’alcane acyclique correspondant."
      },
      {
        "content": "L’hexane a pour formule $\\ce{C6H12}$.",
        "correct": false,
        "explanation": "L’hexane est $\\ce{C6H14}$ ; $\\ce{C6H12}$ correspond notamment au cyclohexane."
      },
      {
        "content": "Le cyclohexane a pour formule $\\ce{C6H12}$.",
        "correct": true,
        "explanation": "Cyclane saturé."
      },
      {
        "content": "Le cyclohexane présente une insaturation au sens du calcul de formule, liée à la fermeture du cycle.",
        "correct": true,
        "explanation": "Le cycle retire deux H sans introduire de double liaison."
      }
    ],
    "explanation": "Une insaturation de formule peut correspondre à un cycle et non à une liaison multiple."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Un composé saturé monocyclique possède 9 carbones. Quelle formule générale permet de prévoir sa formule brute ?",
    "choices": [
      {
        "content": "$\\ce{C_nH_{2n+2}}$.",
        "correct": false,
        "explanation": "Alcane acyclique."
      },
      {
        "content": "$\\ce{C_nH_{2n-2}}$.",
        "correct": false,
        "explanation": "Alcyne acyclique avec une triple liaison."
      },
      {
        "content": "$\\ce{C_nH_n}$.",
        "correct": false,
        "explanation": "Ce n'est pas la série étudiée."
      },
      {
        "content": "$\\ce{C_nH_{2n}}$.",
        "correct": true,
        "explanation": "C'est un cyclane monocyclique saturé."
      },
      {
        "content": "$\\ce{C_nH_{2n+4}}$.",
        "correct": false,
        "explanation": "Un cyclane monocyclique saturé suit $\\ce{C_nH_{2n}}$."
      }
    ],
    "explanation": "Pour n=9, un cyclane saturé a donc la formule $\\ce{C9H18}$."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien d'atomes d'hydrogène possède le cyclooctane ?",
    "answer": {
      "type": "number",
      "value": 16,
      "tolerance": 0
    },
    "explanation": "Pour un cyclane, $H=2n=16$."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des noms des hydrocarbures saturés étudiés :",
    "choices": [
      {
        "content": "Nonane contient 9 carbones.",
        "correct": true,
        "explanation": "Non- = 9."
      },
      {
        "content": "Décane contient 10 carbones.",
        "correct": true,
        "explanation": "Déc- = 10."
      },
      {
        "content": "Le décane contient neuf atomes de carbone.",
        "correct": false,
        "explanation": "Le préfixe déc- correspond à dix carbones."
      },
      {
        "content": "Heptane contient 7 carbones.",
        "correct": true,
        "explanation": "Hept- = 7."
      },
      {
        "content": "Octane contient 8 carbones.",
        "correct": true,
        "explanation": "Oct- = 8."
      }
    ],
    "explanation": "Les préfixes de chaîne réutilisent la nomenclature travaillée au chapitre précédent."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare cyclopropane, cyclobutane, cyclopentane et cyclohexane dans le modèle étudié. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les deux premiers sont particulièrement contraints.",
        "correct": true,
        "explanation": "Cyclopropane et cyclobutane sont décrits comme tendus."
      },
      {
        "content": "Cyclopentane et cyclohexane sont très stables.",
        "correct": true,
        "explanation": "C'est la tendance donnée."
      },
      {
        "content": "La stabilité augmente indéfiniment avec la taille du cycle.",
        "correct": false,
        "explanation": "Le modèle étudié indique qu'elle redécroît ensuite lorsque le cycle s'agrandit."
      },
      {
        "content": "La taille du cycle influence son énergie.",
        "correct": true,
        "explanation": "C'est précisément la notion de tension cyclique."
      },
      {
        "content": "La stabilité d’un cyclane ne croît pas indéfiniment avec la taille du cycle.",
        "correct": true,
        "explanation": "Après les cycles particulièrement stables à cinq et six carbones, la stabilité diminue à nouveau lorsque le cycle s’agrandit."
      }
    ],
    "explanation": "La stabilité maximale n'est pas attribuée aux plus grands cycles mais aux cycles à cinq et six carbones dans le cadre considéré."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Laquelle de ces formules peut correspondre à la fois à un cyclane saturé monocyclique et à un alcène acyclique comportant une seule double liaison ?",
    "choices": [
      {
        "content": "$\\ce{C6H14}$",
        "correct": false,
        "explanation": "Alcane acyclique."
      },
      {
        "content": "$\\ce{C6H10}$",
        "correct": false,
        "explanation": "Formule d'un alcyne acyclique à une triple liaison ou d'autres structures plus insaturées."
      },
      {
        "content": "$\\ce{C6H6}$",
        "correct": false,
        "explanation": "Beaucoup plus insaturé."
      },
      {
        "content": "$\\ce{C6H16}$.",
        "correct": false,
        "explanation": "$\\ce{C6H12}$ peut correspondre à un cyclane ou à un alcène ; $\\ce{C6H16}$ ne convient pas."
      },
      {
        "content": "$\\ce{C6H12}$",
        "correct": true,
        "explanation": "Les deux familles partagent la formule générale C_nH_{2n}."
      }
    ],
    "explanation": "Une même formule générale peut correspondre à des familles structurales différentes ; le motif de liaison ou le cycle doit être identifié."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un hydrocarbure saturé est décrit comme « cyclique et sans double liaison ». Quelles conclusions sont justifiées ?",
    "choices": [
      {
        "content": "Sa formule peut être $\\ce{C_nH_{2n}}$ s'il est monocyclique.",
        "correct": true,
        "explanation": "Formule générale étudiée."
      },
      {
        "content": "Il est nécessairement un alcène.",
        "correct": false,
        "explanation": "Il n'y a justement pas de double liaison."
      },
      {
        "content": "La présence du cycle suffit à expliquer deux hydrogènes de moins que l'alcane acyclique correspondant.",
        "correct": true,
        "explanation": "Fermeture du cycle."
      },
      {
        "content": "Le caractère saturé d’un hydrocarbure interdit la présence d’un cycle.",
        "correct": false,
        "explanation": "Un cyclane est un hydrocarbure cyclique saturé."
      },
      {
        "content": "Un hydrocarbure cyclique saturé suit nécessairement $\\ce{C_nH_{2n+2}}$.",
        "correct": false,
        "explanation": "Un cyclane monocyclique saturé suit $\\ce{C_nH_{2n}}$."
      }
    ],
    "explanation": "Il faut distinguer insaturation structurale par cycle et insaturation par liaison multiple."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est le nom de l'alcane acyclique saturé à dix carbones ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "décane",
        "decane"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "L'alcane à dix carbones est le décane."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour identifier correctement un hydrocarbure comme alcane ou cyclane, quelles informations sont utiles ?",
    "choices": [
      {
        "content": "La présence ou non d'une liaison multiple.",
        "correct": true,
        "explanation": "Les familles saturées n'en comportent pas."
      },
      {
        "content": "La seule couleur du composé.",
        "correct": false,
        "explanation": "Elle n'est pas un critère de nomenclature."
      },
      {
        "content": "La formule brute peut être insuffisante pour distinguer un cyclane d’un alcène.",
        "correct": true,
        "explanation": "Un cyclane monocyclique saturé et un alcène acyclique monounsaturé peuvent tous deux suivre $\\ce{C_nH_{2n}}$."
      },
      {
        "content": "Le nombre d'atomes de carbone.",
        "correct": true,
        "explanation": "Il permet d'appliquer les formules générales."
      },
      {
        "content": "La présence ou non d'un cycle.",
        "correct": true,
        "explanation": "C'est le critère de structure."
      }
    ],
    "explanation": "Formule brute et structure doivent être combinées : certaines formules peuvent appartenir à plusieurs familles."
  },
  {
    "order": 121,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Pentane → $\\ce{C5H12}$.",
        "correct": true,
        "explanation": "Alcane."
      },
      {
        "content": "Cyclopentane → $\\ce{C5H10}$.",
        "correct": true,
        "explanation": "Cyclane."
      },
      {
        "content": "Hexane → $\\ce{C6H14}$.",
        "correct": true,
        "explanation": "Alcane."
      },
      {
        "content": "Cyclohexane → $\\ce{C6H12}$.",
        "correct": true,
        "explanation": "Cyclane."
      },
      {
        "content": "Décane → $\\ce{C10H22}$.",
        "correct": true,
        "explanation": "Alcane."
      },
      {
        "content": "Butane → $\\ce{C4H8}$.",
        "correct": false,
        "explanation": "Butane = C4H10."
      },
      {
        "content": "Cyclobutane → $\\ce{C4H10}$.",
        "correct": false,
        "explanation": "Cyclobutane = C4H8."
      },
      {
        "content": "Heptane → $\\ce{C7H12}$.",
        "correct": false,
        "explanation": "Heptane = C7H16."
      },
      {
        "content": "Cycloheptane → $\\ce{C7H16}$.",
        "correct": false,
        "explanation": "Cycloheptane = C7H14."
      },
      {
        "content": "Méthane → $\\ce{CH2}$.",
        "correct": false,
        "explanation": "Méthane = CH4."
      }
    ],
    "explanation": "Les formules des alcanes et cyclanes se déduisent directement de leurs deux séries générales."
  },
  {
    "order": 122,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un alcane acyclique saturé possède 12 atomes d'hydrogène. Combien possède-t-il d'atomes de carbone ?",
    "answer": {
      "type": "number",
      "value": 5,
      "tolerance": 0
    },
    "explanation": "On résout $2n+2=12$, donc $2n=10$ et $n=5$ : il s'agit du pentane."
  }
];
