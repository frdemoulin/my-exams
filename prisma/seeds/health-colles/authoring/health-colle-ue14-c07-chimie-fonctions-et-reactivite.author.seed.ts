import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';

/**
 * UE14 — Colle C07 — Chimie — Fonctions et réactivité
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 * Périmètre : Chimie organique Ch. 2.4 à 2.7.
 */
export const UE14_COLLE_C07_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un alcool primaire est soumis à des conditions d’oxydation puis comparé à un alcool secondaire et à un alcool tertiaire. Quelles propositions sont exactes ?",
    "explanation": "L’oxydation distingue nettement les classes d’alcools : un alcool primaire peut conduire à un aldéhyde puis à un acide carboxylique ; un alcool secondaire donne une cétone ; l’alcool tertiaire usuel ne possède pas d’hydrogène sur le carbone porteur de $\\mathrm{OH}$ et résiste à l’oxydation douce classique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:alcools-oxydation"
    ],
    "choices": [
      {
        "content": "Une oxydation douce d’un alcool primaire peut conduire à un aldéhyde.",
        "correct": true,
        "explanation": "Le carbone portant $\\mathrm{OH}$ devient un carbone carbonylé aldéhydique si l’oxydation est contrôlée."
      },
      {
        "content": "Une oxydation plus poussée d’un alcool primaire peut conduire à un acide carboxylique.",
        "correct": true,
        "explanation": "L’aldéhyde intermédiaire est lui-même facilement oxydable en acide carboxylique."
      },
      {
        "content": "L’oxydation d’un alcool secondaire conduit classiquement à une cétone.",
        "correct": true,
        "explanation": "Le carbone porteur de $\\mathrm{OH}$ étant lié à deux groupes carbonés, son oxydation donne un carbonyle cétonique."
      },
      {
        "content": "L’oxydation douce d’un alcool tertiaire fournit systématiquement un aldéhyde.",
        "correct": false,
        "explanation": "Un alcool tertiaire ne donne pas d’aldéhyde par l’oxydation usuelle décrite dans ce périmètre."
      },
      {
        "content": "Un alcool secondaire s’oxyde d’abord en acide carboxylique sans passer par une cétone.",
        "correct": false,
        "explanation": "Le produit d’oxydation attendu d’un alcool secondaire est une cétone."
      }
    ]
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Après hydrolyse, quel type d’alcool obtient-on classiquement par addition d’un organomagnésien sur une cétone ?",
    "explanation": "L’addition nucléophile d’un organomagnésien sur une cétone crée une nouvelle liaison $\\ce{C-C}$ ; après hydrolyse, le carbone anciennement carbonylé porte $\\mathrm{OH}$ et trois substituants carbonés : l’alcool est tertiaire.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:organomagnesien-cetone"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "alcool tertiaire",
        "tertiaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true,
        "normalizeUnicode": true
      }
    }
  },
  {
    "order": 3,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Un chimiste veut transformer un alcool en dérivé chloré $\\mathrm{R-Cl}$. Quelle proposition est correcte ?",
    "explanation": "La substitution de $\\mathrm{OH}$ par $\\mathrm{Cl}$ peut être réalisée avec des agents chlorants adaptés, notamment le chlorure de thionyle $\\ce{SOCl2}$ dans les conditions usuelles de chimie organique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:halogenation-alcool"
    ],
    "choices": [
      {
        "content": "Le chlorure de thionyle $\\ce{SOCl2}$ peut être utilisé comme agent chlorant.",
        "correct": true,
        "explanation": "$\\ce{SOCl2}$ est un réactif classique permettant de convertir un alcool en dérivé chloré."
      },
      {
        "content": "Il faut obligatoirement oxyder d’abord l’alcool en cétone, quelle que soit sa classe.",
        "correct": false,
        "explanation": "La conversion en halogénure ne nécessite pas cette oxydation préalable."
      },
      {
        "content": "Le produit $\\mathrm{R-Cl}$ est un alcool secondaire.",
        "correct": false,
        "explanation": "$\\mathrm{R-Cl}$ est un dérivé halogéné, pas un alcool."
      },
      {
        "content": "Le chlore se fixe sur l’oxygène tout en conservant intacte la liaison $\\ce{C-OH}$.",
        "correct": false,
        "explanation": "La transformation recherchée remplace le groupe hydroxyle par le chlore au niveau du carbone."
      },
      {
        "content": "Cette transformation transforme nécessairement le carbone en nucléophile avant toute réaction.",
        "correct": false,
        "explanation": "Le carbone lié au groupe partant est au contraire le centre attaqué lors d’une substitution nucléophile."
      }
    ]
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant les amines et leur réactivité.",
    "explanation": "L’azote d’une amine porte un doublet non liant qui lui confère un caractère basique et nucléophile. Une amine primaire peut réagir avec un composé carbonylé pour conduire à une imine après élimination d’eau.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:amines-reactivite"
    ],
    "requiredSelectionCount": 2,
    "choices": [
      {
        "content": "Le doublet non liant de l’azote participe au caractère nucléophile d’une amine.",
        "correct": true,
        "explanation": "Le doublet peut être engagé dans la formation d’une nouvelle liaison avec un centre électrophile."
      },
      {
        "content": "Une amine primaire peut donner une imine avec un aldéhyde ou une cétone.",
        "correct": true,
        "explanation": "La condensation d’une amine primaire avec un carbonyle conduit à une imine avec élimination d’eau."
      },
      {
        "content": "Une amine tertiaire possède nécessairement une liaison $\\ce{N-H}$.",
        "correct": false,
        "explanation": "Une amine tertiaire est liée à trois substituants carbonés et ne porte pas d’hydrogène sur l’azote."
      },
      {
        "content": "Un ammonium quaternaire est simplement une amine tertiaire neutre.",
        "correct": false,
        "explanation": "L’ammonium quaternaire possède quatre substituants sur N et porte une charge positive."
      },
      {
        "content": "Une amine secondaire réagit avec un carbonyle pour donner obligatoirement une amide.",
        "correct": false,
        "explanation": "Avec un aldéhyde ou une cétone, une amine secondaire conduit à une espèce de type iminium/énamine selon les conditions, pas à une amidification directe."
      }
    ]
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l’estérification et de l’hydrolyse des esters, quelles propositions sont exactes ?",
    "explanation": "Un ester peut être préparé à partir d’un acide activé et d’un alcool. Son hydrolyse acide est réversible, tandis que son hydrolyse basique conduit à un carboxylate et porte le nom de saponification.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:esters-hydrolyse"
    ],
    "choices": [
      {
        "content": "Un chlorure d’acyle peut réagir avec un alcool pour former un ester.",
        "correct": true,
        "explanation": "Le chlorure d’acyle est un dérivé d’acide activé très réactif vis-à-vis des alcools."
      },
      {
        "content": "L’hydrolyse basique d’un ester est appelée saponification.",
        "correct": true,
        "explanation": "Elle forme notamment un carboxylate et un alcool dans les conditions usuelles."
      },
      {
        "content": "La saponification transforme directement l’ester en amide.",
        "correct": false,
        "explanation": "Le produit carboxylé de l’hydrolyse basique est un carboxylate, pas une amide."
      },
      {
        "content": "Un ester contient nécessairement une liaison $\\ce{N-C=O}$.",
        "correct": false,
        "explanation": "Cette liaison caractérise une amide ; un ester contient le motif $\\ce{C(=O)-O}$."
      },
      {
        "content": "Un ester ne peut jamais être hydrolysé par l’eau.",
        "correct": false,
        "explanation": "L’hydrolyse est précisément une réaction de coupure impliquant l’eau, catalysable en milieu acide ou basique."
      }
    ]
  },
  {
    "order": 6,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de substituants carbonés sont directement liés au carbone portant le groupe hydroxyle dans un alcool tertiaire ? Donnez uniquement la valeur numérique.",
    "explanation": "Dans un alcool tertiaire, le carbone porteur de $-\\mathrm{OH}$ est lié à trois groupes carbonés et ne porte donc aucun hydrogène.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:alcool-tertiaire"
    ],
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    }
  },
  {
    "order": 7,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Une substitution nucléophile se déroule en une seule étape concertée sur un carbone stéréogène. Quelle conséquence stéréochimique est attendue dans le modèle $\\text{S}_\\text{N}2$ classique ?",
    "explanation": "La $\\text{S}_\\text{N}2$ est concertée : l’attaque arrière du nucléophile et le départ du groupe partant conduisent à une inversion de la configuration géométrique au centre réactionnel.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:sn2-stereochimie"
    ],
    "choices": [
      {
        "content": "Formation préalable d’un carbocation plan puis racémisation complète.",
        "correct": false,
        "explanation": "Ce schéma correspond au modèle $\\text{S}_\\text{N}1$, pas à une $\\text{S}_\\text{N}2$ concertée."
      },
      {
        "content": "Inversion de configuration au centre attaqué.",
        "correct": true,
        "explanation": "L’attaque arrière caractéristique de la $\\text{S}_\\text{N}2$ provoque l’inversion dite de Walden."
      },
      {
        "content": "Conservation obligatoire de la configuration sans aucun réarrangement spatial.",
        "correct": false,
        "explanation": "La géométrie au centre attaqué est inversée lors d’une $\\text{S}_\\text{N}2$."
      },
      {
        "content": "Formation de deux carbocations énantiomères isolables.",
        "correct": false,
        "explanation": "La $\\text{S}_\\text{N}2$ ne passe pas par un carbocation intermédiaire."
      },
      {
        "content": "Rupture préalable de toutes les liaisons $\\ce{C-C}$ voisines.",
        "correct": false,
        "explanation": "La substitution concerne la liaison au groupe partant, sans rupture générale du squelette carboné."
      }
    ]
  },
  {
    "order": 8,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes permettant de distinguer une amide d’une amine.",
    "explanation": "Dans une amide, l’azote est directement lié au carbone d’un carbonyle et son doublet est délocalisé par résonance, ce qui rigidifie la liaison $\\ce{C-N}$ et diminue fortement sa basicité par rapport à une amine analogue.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:amide-vs-amine"
    ],
    "requiredSelectionCount": 2,
    "choices": [
      {
        "content": "Dans une amide, l’azote est directement lié au carbone d’un groupement carbonyle.",
        "correct": true,
        "explanation": "Le motif général est $\\mathrm{R-C(=O)-NR'R''}$."
      },
      {
        "content": "La conjugaison du doublet de l’azote avec le carbonyle confère un caractère partiel de double liaison à $\\ce{C-N}$.",
        "correct": true,
        "explanation": "Cette délocalisation électronique explique la planéité et la rotation limitée de la fonction amide."
      },
      {
        "content": "Une amide est plus basique qu’une amine parce que son doublet est plus disponible.",
        "correct": false,
        "explanation": "Le doublet amidique est au contraire délocalisé vers le carbonyle et donc moins disponible pour capter un proton."
      },
      {
        "content": "Une amine doit obligatoirement contenir un groupe carbonyle adjacent à l’azote.",
        "correct": false,
        "explanation": "Une amine ne comporte pas nécessairement de carbonyle ; sa présence directe sur N caractérise l’amide."
      },
      {
        "content": "Amide et ammonium quaternaire désignent exactement la même fonction.",
        "correct": false,
        "explanation": "Ce sont deux fonctions distinctes : l’amide contient un carbonyle adjacent à N, l’ammonium quaternaire est un azote tétrasubstitué chargé positivement."
      }
    ]
  },
  {
    "order": 9,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "question": "Parmi les dix propositions suivantes sur les fonctions des chapitres 2.4 à 2.7, sélectionnez exactement les cinq correctes.",
    "explanation": "Cette synthèse croise alcools, amines, esters, amides, carbonyles et acides carboxyliques. Les points discriminants sont la nature du centre électrophile, le devenir à l’oxydation ou à la réduction et la stabilisation par résonance.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:synthese-fonctions-reactivite"
    ],
    "requiredSelectionCount": 5,
    "choices": [
      {
        "content": "La réduction d’un aldéhyde par $\\ce{NaBH4}$ conduit classiquement à un alcool primaire.",
        "correct": true,
        "explanation": "Le carbonyle aldéhydique est réduit sans changer le nombre de carbones du squelette."
      },
      {
        "content": "La réduction d’une cétone par $\\ce{NaBH4}$ conduit classiquement à un alcool secondaire.",
        "correct": true,
        "explanation": "Le carbone carbonylé conserve ses deux substituants carbonés et porte ensuite $\\mathrm{OH}$."
      },
      {
        "content": "Un organomagnésien est un réactif riche en électrons au niveau du carbone lié au magnésium.",
        "correct": true,
        "explanation": "Ce carbone se comporte comme un nucléophile vis-à-vis d’un centre électrophile tel qu’un carbonyle."
      },
      {
        "content": "Le carbone du groupe $\\ce{C=O}$ d’un aldéhyde ou d’une cétone est électrophile.",
        "correct": true,
        "explanation": "La polarisation de $\\ce{C=O}$ déplace la densité électronique vers l’oxygène."
      },
      {
        "content": "La base conjuguée d’un acide carboxylique est stabilisée par délocalisation de la charge sur deux oxygènes.",
        "correct": true,
        "explanation": "Les deux formes mésomères du carboxylate contribuent à sa stabilisation."
      },
      {
        "content": "Une amide s’hydrolyse toujours plus facilement qu’un ester dans des conditions douces.",
        "correct": false,
        "explanation": "La fonction amide est généralement plus résistante à l’hydrolyse que la fonction ester."
      },
      {
        "content": "Une cétone simple s’oxyde spontanément en acide carboxylique dans les conditions où un aldéhyde s’oxyde facilement.",
        "correct": false,
        "explanation": "L’aldéhyde s’oxyde facilement ; la cétone est beaucoup plus résistante à l’oxydation usuelle."
      },
      {
        "content": "La saponification est une hydrogénation catalytique de l’ester.",
        "correct": false,
        "explanation": "La saponification est une hydrolyse basique de l’ester."
      },
      {
        "content": "Un thioester est dépourvu de soufre.",
        "correct": false,
        "explanation": "Le motif thioester contient un soufre : $\\mathrm{R-C(=O)-S-R'}$."
      },
      {
        "content": "La décarboxylation ajoute une molécule de $\\ce{CO2}$ au substrat.",
        "correct": false,
        "explanation": "La décarboxylation correspond au contraire à une perte de $\\ce{CO2}$."
      }
    ]
  },
  {
    "order": 10,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un ester et une amide sont soumis à des conditions d’hydrolyse. Quelles propositions sont exactes ?",
    "explanation": "La fonction amide est stabilisée par résonance et s’hydrolyse plus difficilement qu’un ester. Dans une molécule portant les deux fonctions, des conditions suffisamment douces peuvent hydrolyser préférentiellement l’ester ; des conditions assez vigoureuses pour hydrolyser l’amide ont généralement déjà affecté l’ester.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:hydrolyse-ester-amide"
    ],
    "choices": [
      {
        "content": "La liaison $\\ce{C-N}$ d’une amide possède un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "La délocalisation du doublet de l’azote vers le carbonyle rigidifie la liaison $\\ce{C-N}$."
      },
      {
        "content": "L’amide est généralement plus résistante à l’hydrolyse que l’ester.",
        "correct": true,
        "explanation": "La stabilisation par résonance rend l’amide moins réactive vis-à-vis d’une substitution nucléophile acyle."
      },
      {
        "content": "Dans une molécule portant une amide et un ester, des conditions douces peuvent hydrolyser l’ester sans hydrolyser l’amide.",
        "correct": true,
        "explanation": "Cette différence de réactivité peut être exploitée sélectivement."
      },
      {
        "content": "Des protéases réalisent in vivo l’hydrolyse sélective de liaisons amide peptidiques.",
        "correct": true,
        "explanation": "Les peptidases/protéases catalysent l’hydrolyse des liaisons peptidiques, qui sont des amides."
      },
      {
        "content": "La fonction amide se saponifie toujours instantanément à température ambiante.",
        "correct": false,
        "explanation": "La saponification concerne classiquement les esters ; l’amide est nettement plus résistante."
      }
    ]
  },
  {
    "order": 11,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien d’atomes d’oxygène comporte le groupe fonctionnel d’un ester simple de type $\\mathrm{R-C(=O)-O-R'}$ ? Donnez uniquement la valeur numérique.",
    "explanation": "La fonction ester comporte deux oxygènes : l’oxygène du carbonyle $\\ce{C=O}$ et l’oxygène engagé dans la liaison $\\ce{C-O-R'}$.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:structure-ester"
    ],
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    }
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle fonction caractérise le produit X obtenu après réduction de l’aldéhyde A par $\\ce{NaBH4}$ puis hydrolyse ?",
    "explanation": "$\\ce{NaBH4}$ apporte un hydrure nucléophile sur le carbone carbonylé de l’aldéhyde. Après protonation, la fonction aldéhyde est transformée en alcool primaire. Le propanal A conduit ainsi au propan-1-ol.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:reduction-aldehyde"
    ],
    "choices": [
      {
        "content": "Un acide carboxylique.",
        "correct": false,
        "explanation": "Cela correspondrait à une oxydation de l’aldéhyde, pas à sa réduction."
      },
      {
        "content": "Une cétone.",
        "correct": false,
        "explanation": "Une cétone ne résulte pas de la réduction d’un aldéhyde."
      },
      {
        "content": "Un alcool primaire.",
        "correct": true,
        "explanation": "Le groupe $-\\mathrm{CHO}$ devient $-\\mathrm{CH_2OH}$."
      },
      {
        "content": "Un ester.",
        "correct": false,
        "explanation": "Aucune estérification n’est impliquée dans cette réduction."
      },
      {
        "content": "Un ammonium quaternaire.",
        "correct": false,
        "explanation": "Cette fonction azotée n’a aucun lien avec la réduction du carbonyle par $\\ce{NaBH4}$."
      }
    ]
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À partir des transformations B et C, sélectionnez exactement les deux affirmations correctes.",
    "explanation": "Dans B, le carbone porté par l’organomagnésien attaque le carbone électrophile de la cétone ; après hydrolyse, le carbone portant le groupe hydroxyle est lié à trois substituants carbonés et l’on obtient un alcool tertiaire. Dans C, le carbone du $\\ce{CO2}$ est incorporé au squelette et devient celui du groupe carboxyle : le produit acide possède donc un carbone de plus que le fragment carboné initial de l’organomagnésien.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:organomagnesiens"
    ],
    "requiredSelectionCount": 2,
    "choices": [
      {
        "content": "Après hydrolyse, la transformation B conduit à un alcool tertiaire.",
        "correct": true,
        "explanation": "Le carbone nucléophile R s’ajoute au carbone carbonylé déjà lié à deux groupes carbonés."
      },
      {
        "content": "Le carbone du $\\ce{CO2}$ utilisé dans la transformation C devient le carbone de la fonction carboxylique du produit Z.",
        "correct": true,
        "explanation": "Le carbone du $\\ce{CO2}$ devient le carbone carboxylique du produit."
      },
      {
        "content": "La transformation B convertit directement la cétone en amide.",
        "correct": false,
        "explanation": "L’addition sur une cétone conduit après hydrolyse à un alcool tertiaire, pas à une amide."
      },
      {
        "content": "Dans les transformations B et C, le carbone lié au magnésium se comporte exclusivement comme un centre électrophile.",
        "correct": false,
        "explanation": "Le carbone lié au magnésium possède au contraire un fort caractère nucléophile."
      },
      {
        "content": "La transformation C raccourcit d’un carbone le groupe carboné porté initialement par l’organomagnésien.",
        "correct": false,
        "explanation": "Elle ajoute au contraire le carbone du $\\ce{CO2}$ au squelette du groupe R."
      }
    ]
  },
  {
    "order": 14,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "En vous appuyant sur les substrats carbonylés A et B et sur leur réactivité, quelles propositions sont exactes ?",
    "explanation": "La polarisation de la liaison $\\ce{C=O}$ rend le carbone carbonylé électrophile. Les nucléophiles, notamment le fragment carboné d’un organomagnésien, peuvent donc l’attaquer. Les aldéhydes s’oxydent classiquement en acides carboxyliques, alors que les cétones simples sont plus résistantes à l’oxydation. La réduction d’une cétone conduit classiquement à un alcool secondaire.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:aldehydes-cetones-reactivite"
    ],
    "choices": [
      {
        "content": "Le carbone du groupe carbonyle est appauvri en densité électronique et constitue un centre électrophile.",
        "correct": true,
        "explanation": "L’oxygène, plus électronégatif, polarise la liaison $\\ce{C=O}$ vers lui."
      },
      {
        "content": "Un aldéhyde peut être oxydé en acide carboxylique.",
        "correct": true,
        "explanation": "Le groupe $-\\mathrm{CHO}$ possède un hydrogène sur le carbone carbonylé et s’oxyde facilement en $-\\mathrm{COOH}$."
      },
      {
        "content": "Un organomagnésien peut attaquer nucléophiliquement le carbone d’un aldéhyde ou d’une cétone.",
        "correct": true,
        "explanation": "Le carbone du $\\mathrm{RMgX}$ apporte un équivalent carbanionique au centre électrophile du carbonyle."
      },
      {
        "content": "Une cétone simple est plus facilement oxydée en acide carboxylique qu’un aldéhyde dans les conditions usuelles étudiées.",
        "correct": false,
        "explanation": "L’ordre est inverse dans les conditions usuelles : l’aldéhyde s’oxyde facilement, la cétone résiste davantage."
      },
      {
        "content": "La réduction d’une cétone par un hydrure forme obligatoirement un alcool primaire.",
        "correct": false,
        "explanation": "Elle forme classiquement un alcool secondaire."
      }
    ]
  },
  {
    "order": 15,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Comment appelle-t-on l’ion obtenu par déprotonation d’un acide carboxylique $\\mathrm{R-COOH}$ ?",
    "explanation": "La perte de $\\ce{H+}$ par $\\mathrm{R-COOH}$ donne $\\mathrm{R-COO^-}$. La charge négative est délocalisée sur les deux oxygènes, ce qui stabilise la base conjuguée.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:carboxylate"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "carboxylate",
        "ion carboxylate",
        "un carboxylate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true,
        "normalizeUnicode": true
      }
    }
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Pourquoi un chlorure d’acyle est-il généralement plus réactif qu’un acide carboxylique vis-à-vis d’un nucléophile ?",
    "explanation": "Dans un dérivé d’acide activé tel qu’un chlorure d’acyle, le carbone carbonylé est fortement électrophile et le chlorure constitue un bon groupe partant, ce qui favorise la substitution nucléophile acyle.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:acides-actives"
    ],
    "choices": [
      {
        "content": "Parce que le chlore rend le carbone carbonylé nucléophile.",
        "correct": false,
        "explanation": "Le centre carbonylé doit au contraire être électrophile pour être attaqué par un nucléophile."
      },
      {
        "content": "Parce que le chlorure d’acyle ne contient plus de groupe carbonyle.",
        "correct": false,
        "explanation": "Le groupe $\\ce{C=O}$ est toujours présent dans un chlorure d’acyle."
      },
      {
        "content": "Parce que la molécule est totalement apolaire.",
        "correct": false,
        "explanation": "La liaison $\\ce{C=O}$ reste fortement polarisée."
      },
      {
        "content": "Parce que le carbone carbonylé est fortement électrophile et que $\\ce{Cl-}$ peut jouer le rôle de groupe partant.",
        "correct": true,
        "explanation": "Ces deux propriétés rendent le chlorure d’acyle particulièrement réactif dans les substitutions nucléophiles acyles."
      },
      {
        "content": "Parce qu’il ne peut réagir qu’avec des électrophiles.",
        "correct": false,
        "explanation": "Le chlorure d’acyle réagit précisément avec des nucléophiles sur son carbone carbonylé."
      }
    ]
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant les thioesters.",
    "explanation": "Un thioester possède le motif $\\mathrm{R-C(=O)-S-R'}$. Sa liaison acyle–soufre peut être hydrolysée pour redonner un acide carboxylique et un thiol ; l’acétyl-CoA est un exemple biologique majeur de thioester.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:thioesters"
    ],
    "requiredSelectionCount": 2,
    "choices": [
      {
        "content": "L’acétyl-CoA est un exemple de thioester.",
        "correct": true,
        "explanation": "Le groupe acétyle est lié au soufre du coenzyme A par une liaison thioester."
      },
      {
        "content": "L’hydrolyse d’un thioester peut redonner un acide carboxylique et un thiol.",
        "correct": true,
        "explanation": "La coupure de la liaison acyle–soufre régénère ces deux fonctions."
      },
      {
        "content": "Un thioester se reconnaît au motif $\\mathrm{R-C(=O)-O-R'}$.",
        "correct": false,
        "explanation": "Ce motif est celui d’un ester oxygéné ; le thioester contient un soufre à la place de l’oxygène alkoxy."
      },
      {
        "content": "Un thioester ne contient aucun groupement carbonyle.",
        "correct": false,
        "explanation": "Le motif $\\ce{C=O}$ est constitutif de la fonction thioester."
      },
      {
        "content": "L’acétyl-CoA est un ammonium quaternaire et non un dérivé d’acide.",
        "correct": false,
        "explanation": "Sa fonction réactive majeure considérée ici est une liaison thioester."
      }
    ]
  },
  {
    "order": 18,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les acides carboxyliques et leurs dérivés ?",
    "explanation": "Un acide carboxylique peut céder $\\ce{H+}$ pour former un carboxylate stabilisé par résonance. Les chlorures d’acyle et anhydrides sont des dérivés d’acides activés plus réactifs vis-à-vis des nucléophiles.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:acides-carboxyliques"
    ],
    "choices": [
      {
        "content": "La déprotonation de $\\mathrm{R-COOH}$ conduit à $\\mathrm{R-COO^-}$.",
        "correct": true,
        "explanation": "Le proton acide est porté par le groupe carboxyle."
      },
      {
        "content": "La charge négative du carboxylate est délocalisée sur les deux oxygènes.",
        "correct": true,
        "explanation": "Cette délocalisation par résonance stabilise l’ion carboxylate."
      },
      {
        "content": "Un acide carboxylique ne peut jamais former de dérivé d’acide.",
        "correct": false,
        "explanation": "Il peut être converti en chlorure d’acyle, anhydride, ester, amide, etc."
      },
      {
        "content": "Un chlorure d’acyle est moins électrophile que le carboxylate correspondant.",
        "correct": false,
        "explanation": "Le chlorure d’acyle est un dérivé activé, tandis que le carboxylate est fortement stabilisé et peu électrophile."
      },
      {
        "content": "La décarboxylation correspond à l’addition d’un groupe carboxyle.",
        "correct": false,
        "explanation": "Elle correspond à une perte de $\\ce{CO2}$."
      }
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Lorsqu’un organomagnésien $\\mathrm{R-MgX}$ réagit avec $\\ce{CO2}$ puis est hydrolysé, de combien d’atomes de carbone la chaîne du produit acide s’allonge-t-elle par rapport au groupe R initial ?",
    "explanation": "Le carbone de $\\ce{CO2}$ devient le carbone du groupe carboxyle. L’acide carboxylique final contient donc un atome de carbone de plus que le fragment R du réactif organomagnésien.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:carboxylation-organomagnesien"
    ],
    "answer": {
      "type": "number",
      "value": 1,
      "tolerance": 0
    }
  },
  {
    "order": 20,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Un substrat carbonylé réagit avec une amine primaire puis perd une molécule d’eau. Quelle fonction azotée est attendue ?",
    "explanation": "La condensation d’une amine primaire avec un aldéhyde ou une cétone conduit à une imine : le carbone initialement carbonylé devient lié par une double liaison à l’azote.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:imines"
    ],
    "choices": [
      {
        "content": "Un thioester.",
        "correct": false,
        "explanation": "Un thioester nécessite un soufre lié au carbone acyle."
      },
      {
        "content": "Un carboxylate.",
        "correct": false,
        "explanation": "La formation d’un carboxylate relève d’une déprotonation d’acide carboxylique."
      },
      {
        "content": "Un ion ammonium quaternaire.",
        "correct": false,
        "explanation": "Cette fonction requiert quatre substituants sur l’azote et ne résulte pas de la condensation décrite."
      },
      {
        "content": "Une amide par simple perte d’eau, sans activation de l’acide.",
        "correct": false,
        "explanation": "La condensation d’une amine primaire avec un aldéhyde ou une cétone conduit à une imine, pas à une amide."
      },
      {
        "content": "Une imine.",
        "correct": true,
        "explanation": "C’est le produit caractéristique de la condensation d’une amine primaire avec un composé carbonylé."
      }
    ]
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une réaction de substitution nucléophile sur un dérivé halogéné $\\mathrm{R-X}$ est envisagée. Quelles propositions sont exactes ?",
    "explanation": "Le carbone lié à l’halogène est électrophile et le nucléophile remplace le groupe partant $\\mathrm{X^-}$. Une $\\text{S}_\\text{N}1$ passe par un carbocation et peut conduire à une perte de stéréospécificité ; une $\\text{S}_\\text{N}2$ est concertée et provoque une inversion au centre attaqué.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:sn1-sn2"
    ],
    "choices": [
      {
        "content": "Dans $\\mathrm{R-X}$, le carbone lié à X peut constituer un centre électrophile.",
        "correct": true,
        "explanation": "La polarisation $\\ce{C-X}$ rend le carbone susceptible d’être attaqué par un nucléophile."
      },
      {
        "content": "Une $\\text{S}_\\text{N}2$ est une réaction concertée en une étape cinétique élémentaire.",
        "correct": true,
        "explanation": "La formation de la liaison au nucléophile et la rupture de $\\ce{C-X}$ sont couplées dans l’état de transition."
      },
      {
        "content": "Une $\\text{S}_\\text{N}2$ sur un centre stéréogène conduit à une inversion de configuration géométrique.",
        "correct": true,
        "explanation": "L’attaque arrière impose l’inversion au carbone réactif."
      },
      {
        "content": "Une $\\text{S}_\\text{N}1$ implique la formation d’un carbocation intermédiaire.",
        "correct": true,
        "explanation": "Le départ du groupe partant précède l’attaque du nucléophile."
      },
      {
        "content": "Une $\\text{S}_\\text{N}1$ est toujours plus stéréospécifique qu’une $\\text{S}_\\text{N}2$ et donne un seul énantiomère pur.",
        "correct": false,
        "explanation": "Le carbocation plan de la $\\text{S}_\\text{N}1$ favorise généralement une racémisation ou au moins une perte de stéréospécificité."
      }
    ]
  },
  {
    "order": 22,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des relations entre fonctions alcool, aldéhyde, cétone et acide carboxylique, quelles propositions sont exactes ?",
    "explanation": "L’alcool primaire et l’aldéhyde appartiennent à une même séquence d’oxydation vers l’acide carboxylique. L’alcool secondaire s’oxyde en cétone. Ces relations permettent de prévoir le sens des transformations usuelles.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:relations-fonctions"
    ],
    "choices": [
      {
        "content": "Alcool primaire → aldéhyde est une oxydation possible.",
        "correct": true,
        "explanation": "Une oxydation contrôlée permet d’arrêter la transformation au stade aldéhyde."
      },
      {
        "content": "Alcool secondaire → cétone est une oxydation possible.",
        "correct": true,
        "explanation": "La perte de deux hydrogènes conduit au groupe carbonyle cétonique."
      },
      {
        "content": "Cétone → alcool primaire est le produit normal d’une réduction par $\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "Une cétone donne un alcool secondaire."
      },
      {
        "content": "Aldéhyde → amide est une simple oxydation sans autre réactif.",
        "correct": false,
        "explanation": "L’oxydation d’un aldéhyde donne un acide carboxylique ; une amide nécessite une transformation d’acyle avec une amine."
      },
      {
        "content": "Alcool tertiaire → aldéhyde est l’oxydation douce caractéristique des alcools tertiaires.",
        "correct": false,
        "explanation": "Les alcools tertiaires ne donnent pas d’aldéhyde par cette voie usuelle."
      }
    ]
  },
  {
    "order": 23,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la décarboxylation et de la préparation des acides carboxyliques, quelles propositions sont exactes ?",
    "explanation": "Une décarboxylation élimine $\\ce{CO2}$, particulièrement facilement pour certains substrats activés par un carbonyle voisin. À l’inverse, la carboxylation d’un organomagnésien par $\\ce{CO2}$ ajoute un carbone ; l’hydrolyse d’un nitrile ou d’un ester peut également conduire à un acide carboxylique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:acides-preparation-decarboxylation"
    ],
    "choices": [
      {
        "content": "Une décarboxylation correspond à une perte de $\\ce{CO2}$.",
        "correct": true,
        "explanation": "Le groupe carboxyle est éliminé sous forme de dioxyde de carbone."
      },
      {
        "content": "La présence d’un autre groupement carbonyle en position favorable empêche toute décarboxylation.",
        "correct": false,
        "explanation": "Au contraire, certaines structures comportant un carbonyle voisin, comme les $\\beta$-cétoacides, se décarboxylent particulièrement facilement."
      },
      {
        "content": "L’hydrolyse d’un nitrile peut conduire, via une amide, à un acide carboxylique.",
        "correct": true,
        "explanation": "Le nitrile est hydrolysé progressivement jusqu’à la fonction acide."
      },
      {
        "content": "L’hydrolyse d’un ester peut donner un acide carboxylique et un alcool en milieu acide.",
        "correct": true,
        "explanation": "C’est la réaction inverse de l’estérification de Fischer dans un cadre général."
      },
      {
        "content": "La carboxylation d’un organomagnésien par $\\ce{CO2}$ raccourcit toujours la chaîne carbonée d’un atome.",
        "correct": false,
        "explanation": "Elle ajoute au contraire le carbone du $\\ce{CO2}$ au squelette du groupe R."
      }
    ]
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sur la molécule A, sélectionnez le carbone carbonylé de la fonction ester.",
    "explanation": "Dans un ester, la liaison $\\ce{C=O}$ est polarisée : l’oxygène attire davantage la densité électronique et le carbone carbonylé devient un centre électrophile. C’est ce carbone qui peut être attaqué par un nucléophile lors d’une substitution nucléophile acyle.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:qzone-ester-carbonyle"
    ],
    "image": {
      "src": "/images/training/ue14/colles/c07/acyl-derivatives-linked-q24-q25.svg",
      "alt": "Quatre structures organiques A à D montrant respectivement un ester, une amide, un chlorure d’acyle et un ion carboxylate sans nommer les fonctions.",
      "width": 1200,
      "height": 700
    },
    "expectedZones": [
      {
        "id": "target-ester-carbonyl-carbon",
        "label": "Carbone carbonylé de la fonction ester",
        "x": 0.225,
        "y": 0.2857,
        "tolerance": 0.04
      }
    ],
    "defaultTolerance": 0.04
  },
  {
    "order": 25,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "En vous appuyant sur les structures A à D, quelles propositions permettent de prévoir correctement leur réactivité ?",
    "explanation": "Les quatre structures illustrent des comportements différents du motif acyle. Dans une amide, le doublet de l’azote est délocalisé vers le carbonyle, ce qui stabilise la fonction et réduit la disponibilité du doublet. Dans un ester, le carbone carbonylé reste un centre électrophile susceptible d’une substitution nucléophile acyle. Le carboxylate est stabilisé par délocalisation de la charge sur les deux oxygènes. Le chlorure d’acyle est un dérivé activé particulièrement réactif vis-à-vis des nucléophiles.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:integration-derives-acides"
    ],
    "choices": [
      {
        "content": "Dans la molécule B, le doublet non liant de l’azote est délocalisé vers le carbonyle, ce qui diminue sa disponibilité par rapport à celui d’une amine simple.",
        "correct": true,
        "explanation": "Cette conjugaison explique le caractère partiel de double liaison $\\ce{C-N}$ et la moindre basicité de l’azote."
      },
      {
        "content": "La molécule A peut subir une substitution nucléophile acyle au niveau de son carbone carbonylé.",
        "correct": true,
        "explanation": "Le nucléophile attaque le centre électrophile $\\ce{C=O}$ et le groupe alkoxy peut être remplacé selon les conditions."
      },
      {
        "content": "Dans la molécule D, la charge négative est stabilisée par délocalisation entre les deux oxygènes.",
        "correct": true,
        "explanation": "La charge négative est répartie entre deux formes mésomères équivalentes ou proches."
      },
      {
        "content": "La molécule C est un dérivé d’acide activé : son carbone carbonylé est fortement électrophile et l’ion chlorure peut jouer le rôle de groupe partant.",
        "correct": true,
        "explanation": "Le groupe chlorure est bon partant et renforce la réactivité du carbone acyle."
      },
      {
        "content": "Les molécules B et une amine simple présentent nécessairement la même nucléophilie puisque le doublet de l’azote y est toujours également disponible.",
        "correct": false,
        "explanation": "Dans l’amide, le doublet est conjugué au carbonyle et donc beaucoup moins disponible."
      }
    ]
  }
];
