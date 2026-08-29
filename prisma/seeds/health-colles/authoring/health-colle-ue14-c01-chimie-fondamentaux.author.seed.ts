import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';

/**
 * UE14 — Colle C01 — Chimie : Fondamentaux
 * 20 questions dédiées à l'évaluation (ne pas exposer dans les quiz de chapitre).
 */
export const UE14_COLLE_C01_CHIMIE_FONDAMENTAUX_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de ces deux atomes, quelles propositions sont exactes ?",
    "explanation": "Les deux atomes ont le même numéro atomique $Z=17$ : ils appartiennent donc au même élément chimique et possèdent chacun 17 protons. Comme ils sont neutres, ils possèdent également chacun 17 électrons. Leur nombre de neutrons diffère puisque leur nombre de masse $A$ est différent : ce sont deux isotopes du chlore.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.1",
      "theme:isotopes"
    ],
    "choices": [
      {
        "content": "Ils possèdent le même nombre de protons.",
        "correct": true,
        "explanation": "Le numéro atomique $\\mathrm{Z}$ est identique : chacun possède 17 protons."
      },
      {
        "content": "Ils possèdent le même nombre de neutrons.",
        "correct": false,
        "explanation": "Le nombre de neutrons vaut $\\mathrm{N}=\\mathrm{A}-\\mathrm{Z}$ : 18 pour $\\ce{^{35}Cl}$ et 20 pour $\\ce{^{37}Cl}$."
      },
      {
        "content": "Ce sont deux isotopes du chlore.",
        "correct": true,
        "explanation": "Des isotopes ont le même $\\mathrm{Z}$ mais des nombres de neutrons différents."
      },
      {
        "content": "Ils possèdent le même nombre d’électrons lorsqu’ils sont neutres.",
        "correct": true,
        "explanation": "Un atome neutre possède autant d’électrons que de protons, donc 17 ici."
      },
      {
        "content": "Ils ont nécessairement la même masse atomique individuelle.",
        "correct": false,
        "explanation": "Leurs nombres de masse diffèrent : 35 et 37."
      }
    ]
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de neutrons contient le noyau de $\\ce{^{37}_{17}Cl}$ ?",
    "explanation": "Le nombre de neutrons vaut $\\mathrm{N}=\\mathrm{A}-\\mathrm{Z}=37-17=20$.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.1",
      "theme:nuclide"
    ],
    "answer": {
      "type": "number",
      "value": 20,
      "tolerance": 0
    }
  },
  {
    "order": 3,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Un atome neutre possède la configuration électronique de valence $3\\mathrm{s}^2\\,3\\mathrm{p}^5$. À quelle famille appartient-il ?",
    "explanation": "Une configuration externe $n\\mathrm{s}^2\\,n\\mathrm{p}^5$ caractérise les halogènes du groupe 17. Pour $\\mathrm{n}=3$, il s’agit du chlore.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.1",
      "theme:classification"
    ],
    "choices": [
      {
        "content": "Aux alcalins.",
        "correct": false,
        "explanation": "Les alcalins ont typiquement une configuration externe $n\\mathrm{s}^1$."
      },
      {
        "content": "Aux alcalino-terreux.",
        "correct": false,
        "explanation": "Les alcalino-terreux ont typiquement une configuration externe $n\\mathrm{s}^2$."
      },
      {
        "content": "Aux chalcogènes.",
        "correct": false,
        "explanation": "Les chalcogènes du groupe 16 ont typiquement $n\\mathrm{s}^2\\,n\\mathrm{p}^4$."
      },
      {
        "content": "Aux halogènes.",
        "correct": true,
        "explanation": "Les halogènes du groupe 17 présentent typiquement $n\\mathrm{s}^2\\,n\\mathrm{p}^5$."
      },
      {
        "content": "Aux gaz nobles.",
        "correct": false,
        "explanation": "Les gaz nobles ont une couche externe complète, typiquement $n\\mathrm{s}^2\\,n\\mathrm{p}^6$ hors hélium."
      }
    ]
  },
  {
    "order": 4,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Concernant les tendances périodiques générales, sélectionnez exactement les deux propositions correctes.",
    "explanation": "Dans les tendances générales, l’électronégativité augmente globalement de gauche à droite d’une période et le rayon atomique augmente en descendant une famille. Les autres formulations sont trop absolues ou scientifiquement fausses.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.1",
      "chapter:1.2",
      "theme:periodic-trends"
    ],
    "requiredSelectionCount": 2,
    "choices": [
      {
        "content": "L’électronégativité augmente globalement de gauche à droite au sein d’une période.",
        "correct": true,
        "explanation": "La charge nucléaire effective augmente globalement vers la droite, ce qui favorise l’attraction des électrons de liaison."
      },
      {
        "content": "Le rayon atomique augmente globalement lorsqu’on descend dans une famille.",
        "correct": true,
        "explanation": "Des couches électroniques supplémentaires sont occupées en descendant dans une colonne."
      },
      {
        "content": "L’énergie d’ionisation diminue sans exception de gauche à droite dans une période.",
        "correct": false,
        "explanation": "La tendance générale est plutôt à l’augmentation, avec des exceptions locales."
      },
      {
        "content": "Le fluor possède nécessairement l’affinité électronique la plus élevée de tous les éléments.",
        "correct": false,
        "explanation": "Le fluor est le plus électronégatif, mais l’affinité électronique ne suit pas exactement le même classement ; celle du chlore est notamment très élevée et légèrement plus exothermique selon la convention usuelle."
      },
      {
        "content": "Tous les éléments d’une même période possèdent la même configuration électronique de valence.",
        "correct": false,
        "explanation": "Au sein d’une période, le remplissage de la couche de valence évolue d’un élément au suivant."
      }
    ]
  },
  {
    "order": 5,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos d’une liaison de coordination, quelles propositions sont exactes ?",
    "explanation": "Une liaison de coordination se forme lorsqu’un donneur apporte un doublet déjà constitué vers une orbitale vacante d’un accepteur. Une fois formée, elle est une liaison covalente ; dans $\\ce{NH4+}$, les quatre liaisons N–H sont équivalentes.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.2",
      "theme:coordination-bond"
    ],
    "choices": [
      {
        "content": "Le donneur fournit les deux électrons du doublet engagé dans la liaison.",
        "correct": true,
        "explanation": "Le doublet liant provient initialement du donneur."
      },
      {
        "content": "L’accepteur doit disposer d’une orbitale vacante susceptible de recevoir le doublet.",
        "correct": true,
        "explanation": "Une orbitale disponible est nécessaire pour accueillir le doublet donneur."
      },
      {
        "content": "La liaison de coordination est nécessairement une liaison ionique.",
        "correct": false,
        "explanation": "Il s’agit d’une liaison covalente décrite par son mode de formation, pas d’une liaison ionique par nature."
      },
      {
        "content": "La formation de $\\ce{NH4+}$ à partir de $\\ce{NH3}$ et $\\ce{H+}$ peut être décrite par une donation du doublet libre de l’azote.",
        "correct": true,
        "explanation": "Le doublet non liant de l’azote est donné au proton pour former une nouvelle liaison N–H."
      },
      {
        "content": "Après formation de $\\ce{NH4+}$, une seule liaison N–H reste chimiquement distinguable comme « liaison dative ».",
        "correct": false,
        "explanation": "Dans l’ion ammonium tétraédrique, les quatre liaisons N–H sont équivalentes."
      }
    ]
  },
  {
    "order": 6,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Le fer a pour numéro atomique $\\mathrm{Z}=26$. Combien d’électrons possède l’ion $\\ce{Fe^{3+}}$ ?",
    "explanation": "Un atome neutre de fer possède 26 électrons. La charge $3+$ correspond à la perte de trois électrons : $26-3=23$.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.1",
      "chapter:1.2",
      "theme:ions"
    ],
    "answer": {
      "type": "number",
      "value": 23,
      "tolerance": 0
    }
  },
  {
    "order": 7,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant électronégativité, polarisation des liaisons et moment dipolaire, quelles propositions sont exactes ?",
    "explanation": "Une différence d’électronégativité polarise une liaison et le vecteur de moment dipolaire chimique est orienté du pôle partiellement positif vers le pôle partiellement négatif. La polarité globale dépend ensuite de la somme vectorielle des moments de liaison.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.2",
      "chapter:1.4",
      "theme:polarity"
    ],
    "choices": [
      {
        "content": "Dans une liaison C–O, la densité électronique est davantage attirée vers l’oxygène.",
        "correct": true,
        "explanation": "L’oxygène est plus électronégatif que le carbone."
      },
      {
        "content": "Électronégativité et affinité électronique sont deux noms strictement synonymes d’une même grandeur.",
        "correct": false,
        "explanation": "L’électronégativité décrit l’attraction des électrons dans une liaison, alors que l’affinité électronique est liée à l’ajout d’un électron à une espèce isolée."
      },
      {
        "content": "Une molécule peut posséder plusieurs liaisons polarisées et pourtant être globalement apolaire.",
        "correct": true,
        "explanation": "Les moments de liaison peuvent s’annuler par symétrie, comme dans $\\ce{CO2}$ ou $\\ce{BCl3}$."
      },
      {
        "content": "Dans la convention chimique usuelle, le vecteur moment dipolaire est orienté du pôle $\\delta+$ vers le pôle $\\delta-$.",
        "correct": true,
        "explanation": "Le vecteur pointe vers la zone la plus électronégative dans la convention chimique."
      },
      {
        "content": "Une liaison C–H est totalement incapable d’être polarisée ou polarisable.",
        "correct": false,
        "explanation": "La liaison C–H est peu polarisée, mais sa densité électronique reste polarisable."
      }
    ]
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle description correspond à une double liaison carbone–carbone $\\ce{C=C}$ ?",
    "explanation": "Une double liaison comporte une liaison $\\sigma$ issue d’un recouvrement axial et une liaison $\\pi$ issue d’un recouvrement latéral.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.3",
      "theme:sigma-pi"
    ],
    "choices": [
      {
        "content": "Deux liaisons $\\sigma$ et aucune liaison $\\pi$.",
        "correct": false,
        "explanation": "La seconde composante d’une double liaison est une liaison $\\pi$."
      },
      {
        "content": "Une liaison $\\sigma$ et une liaison $\\pi$.",
        "correct": true,
        "explanation": "C’est la composition standard d’une double liaison."
      },
      {
        "content": "Une liaison $\\pi$ uniquement.",
        "correct": false,
        "explanation": "La première liaison entre les deux atomes est une liaison $\\sigma$."
      },
      {
        "content": "Deux liaisons $\\pi$ et aucune liaison $\\sigma$.",
        "correct": false,
        "explanation": "Deux liaisons $\\pi$ apparaissent dans une triple liaison, en plus d’une $\\sigma$."
      },
      {
        "content": "Trois liaisons $\\sigma$.",
        "correct": false,
        "explanation": "Une double liaison ne comporte pas trois liaisons $\\sigma$."
      }
    ]
  },
  {
    "order": 9,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de l’hybridation et de la géométrie moléculaire, quelles propositions sont exactes ?",
    "explanation": "L’hybridation $sp$ est associée à une disposition digonale, c’est-à-dire linéaire à 180°. Le terme « diagonale » est une confusion lexicale. $sp^2$ conduit à une organisation trigonale plane et $sp^3$ à une organisation tétraédrique des domaines électroniques.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.3",
      "theme:hybridization",
      "trap:lexical-digonale-diagonale"
    ],
    "choices": [
      {
        "content": "Une hybridation $sp$ est associée à une géométrie digonale, donc linéaire à 180°.",
        "correct": true,
        "explanation": "Deux orbitales hybrides $sp$ s’orientent en sens opposés."
      },
      {
        "content": "Le terme scientifique attendu pour la géométrie $sp$ est « diagonale », car les orbitales se disposent en diagonale.",
        "correct": false,
        "explanation": "Le terme est « digonale » (ou plus couramment linéaire), pas « diagonale »."
      },
      {
        "content": "Une hybridation $sp^2$ est compatible avec une disposition trigonale plane à environ 120°.",
        "correct": true,
        "explanation": "Trois orbitales $sp^2$ coplanaires sont séparées d’environ 120°."
      },
      {
        "content": "Quatre domaines électroniques associés à une hybridation $sp^3$ adoptent une organisation tétraédrique.",
        "correct": true,
        "explanation": "L’angle tétraédrique idéal vaut environ 109,5°."
      },
      {
        "content": "La liaison $\\pi$ d’une double liaison C=C autorise la libre rotation autour de l’axe C–C.",
        "correct": false,
        "explanation": "La rotation détruirait le recouvrement latéral des orbitales p ; elle est donc fortement empêchée."
      }
    ]
  },
  {
    "order": 10,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Selon le modèle VSEPR, quelle notation $\\mathrm{AX}_m\\mathrm{E}_n$ décrit la molécule $\\ce{NH3}$ autour de l’atome d’azote ?",
    "explanation": "L’azote de $\\ce{NH3}$ possède trois doublets liants et un doublet non liant : $\\mathrm{AX}_3\\mathrm{E}_1$.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.3",
      "theme:VSEPR"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "AX3E1",
        "AX3E",
        "AX₃E₁"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux associations géométrie–polarité correctes.",
    "explanation": "La polarité globale dépend de la géométrie et de la somme vectorielle des moments de liaison. $\\ce{CO2}$ est linéaire et apolaire ; $\\ce{H2O}$ est coudée et polaire.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.3",
      "chapter:1.4",
      "theme:geometry-polarity"
    ],
    "requiredSelectionCount": 2,
    "choices": [
      {
        "content": "$\\ce{CO2}$ : linéaire et globalement apolaire.",
        "correct": true,
        "explanation": "Les deux moments C=O opposés s’annulent dans la géométrie linéaire."
      },
      {
        "content": "$\\ce{H2O}$ : coudée et polaire.",
        "correct": true,
        "explanation": "La géométrie coudée empêche l’annulation des moments O–H."
      },
      {
        "content": "$\\ce{BCl3}$ : trigonale plane et nécessairement polaire.",
        "correct": false,
        "explanation": "La molécule est trigonale plane et symétrique ; les moments B–Cl s’annulent."
      },
      {
        "content": "$\\ce{NH3}$ : trigonale plane et apolaire.",
        "correct": false,
        "explanation": "$\\ce{NH3}$ est pyramidale trigonale et possède un moment dipolaire net."
      },
      {
        "content": "$\\ce{CH4}$ : tétraédrique avec un carbone central $sp^2$.",
        "correct": false,
        "explanation": "Le carbone de $\\ce{CH4}$ est classiquement décrit comme $sp^3$."
      }
    ]
  },
  {
    "order": 12,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions concernant la polarité globale des molécules sont exactes ?",
    "explanation": "La présence de liaisons polarisées ne suffit pas à rendre une molécule polaire : leur disposition spatiale est déterminante. Les molécules symétriques peuvent présenter une somme vectorielle nulle.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.4",
      "theme:molecular-polarity"
    ],
    "choices": [
      {
        "content": "Toute molécule qui contient au moins une liaison polarisée possède nécessairement un moment dipolaire global non nul.",
        "correct": false,
        "explanation": "Des moments de liaison peuvent s’annuler par symétrie."
      },
      {
        "content": "Dans $\\ce{BCl3}$, les trois moments de liaison B–Cl s’annulent dans la géométrie trigonale plane.",
        "correct": true,
        "explanation": "Les trois vecteurs de même intensité sont séparés de 120° et leur somme est nulle."
      },
      {
        "content": "L’isomère cis-1,2-dichloroéthène possède un moment dipolaire global non nul.",
        "correct": true,
        "explanation": "Les moments C–Cl ne sont pas opposés et ne s’annulent pas."
      },
      {
        "content": "Dans l’isomère trans-1,2-dichloroéthène symétrique, les moments C–Cl peuvent s’annuler.",
        "correct": true,
        "explanation": "La disposition opposée conduit idéalement à une somme vectorielle nulle."
      },
      {
        "content": "$\\ce{CCl4}$ est fortement polaire uniquement parce que chaque liaison C–Cl est polarisée.",
        "correct": false,
        "explanation": "La géométrie tétraédrique symétrique annule les moments de liaison."
      }
    ]
  },
  {
    "order": 13,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle proposition décrit correctement les forces de dispersion de London ?",
    "explanation": "Les fluctuations instantanées du nuage électronique génèrent des dipôles instantanés et induits. Ces interactions existent entre toutes les espèces polarisables et sont particulièrement déterminantes pour les molécules apolaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.4",
      "theme:london-dispersion"
    ],
    "choices": [
      {
        "content": "Elles n’existent que dans les molécules possédant un dipôle permanent.",
        "correct": false,
        "explanation": "Les forces de London existent aussi, et notamment, entre molécules apolaires."
      },
      {
        "content": "Elles résultent de dipôles instantanés et induits et existent entre toutes les espèces polarisables.",
        "correct": true,
        "explanation": "Elles proviennent des fluctuations de la distribution électronique."
      },
      {
        "content": "Elles nécessitent obligatoirement une liaison O–H, N–H ou F–H.",
        "correct": false,
        "explanation": "Cette condition concerne la donation d’une liaison hydrogène, pas les forces de London."
      },
      {
        "content": "Elles sont plus fortes qu’une liaison covalente ordinaire.",
        "correct": false,
        "explanation": "Ce sont des interactions non covalentes bien plus faibles individuellement."
      },
      {
        "content": "Elles disparaissent totalement dès qu’une molécule est polaire.",
        "correct": false,
        "explanation": "Les molécules polaires présentent aussi des forces de dispersion."
      }
    ]
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les liaisons hydrogène, quelles propositions sont exactes ?",
    "explanation": "Une liaison hydrogène nécessite un donneur portant un hydrogène lié à un atome électronégatif et un accepteur disposant d’un doublet disponible. Une même molécule peut être donneuse, accepteuse, les deux, ou aucun des deux.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.4",
      "theme:hydrogen-bond"
    ],
    "choices": [
      {
        "content": "Le méthanol peut donner et accepter des liaisons hydrogène.",
        "correct": true,
        "explanation": "Son groupe O–H fournit un hydrogène donneur et l’oxygène possède des doublets accepteurs."
      },
      {
        "content": "L’acétone peut accepter une liaison hydrogène mais ne possède pas de groupe O–H ou N–H capable d’en donner une.",
        "correct": true,
        "explanation": "L’oxygène carbonylé est accepteur, mais l’acétone ne porte pas d’hydrogène donneur lié à O, N ou F."
      },
      {
        "content": "L’ammoniac peut participer comme donneur et comme accepteur de liaison hydrogène.",
        "correct": true,
        "explanation": "Les liaisons N–H peuvent donner et le doublet libre de l’azote peut accepter."
      },
      {
        "content": "Le méthane est un donneur classique de liaison hydrogène forte grâce à ses liaisons C–H.",
        "correct": false,
        "explanation": "Les liaisons C–H ordinaires ne constituent pas les donneurs classiques O–H/N–H/F–H de liaison hydrogène."
      },
      {
        "content": "Une liaison hydrogène entre deux molécules est identique à la liaison covalente O–H interne à une molécule d’eau.",
        "correct": false,
        "explanation": "La liaison hydrogène est une interaction non covalente distincte de la liaison O–H covalente."
      }
    ]
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de liaisons $\\pi$ comporte la molécule d’éthyne $\\ce{HC#CH}$ ?",
    "explanation": "La triple liaison C≡C comporte une liaison $\\sigma$ et deux liaisons $\\pi$.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.3",
      "theme:sigma-pi"
    ],
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    }
  },
  {
    "order": 16,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions correctes concernant les interactions intermoléculaires et la solubilité.",
    "explanation": "Les interactions réellement possibles dépendent des groupes fonctionnels et de la polarité. Les forces de London restent présentes dans les molécules polaires comme apolaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.4",
      "theme:intermolecular-forces"
    ],
    "requiredSelectionCount": 2,
    "choices": [
      {
        "content": "À masse molaire comparable, la possibilité de former un réseau de liaisons hydrogène tend à élever la température d’ébullition.",
        "correct": true,
        "explanation": "Un réseau de liaisons hydrogène augmente généralement la cohésion du liquide."
      },
      {
        "content": "L’hexane et l’eau sont totalement miscibles parce qu’ils possèdent tous deux des forces de London.",
        "correct": false,
        "explanation": "La présence universelle des forces de London ne suffit pas à compenser la forte différence de polarité entre eau et hexane."
      },
      {
        "content": "L’oxygène carbonylé de l’acétone peut accepter une liaison hydrogène provenant de l’eau.",
        "correct": true,
        "explanation": "Le doublet de l’oxygène carbonylé peut interagir avec un hydrogène donneur de l’eau."
      },
      {
        "content": "Toutes les molécules polaires forment nécessairement entre elles des liaisons hydrogène.",
        "correct": false,
        "explanation": "La polarité est insuffisante : il faut disposer de donneurs et d’accepteurs compatibles."
      },
      {
        "content": "Les forces de London sont absentes des molécules polaires car elles sont remplacées par les interactions dipôle–dipôle.",
        "correct": false,
        "explanation": "Les différents types d’interactions peuvent coexister."
      }
    ]
  },
  {
    "order": 17,
    "difficulty": "HARD",
    "format": "QRPL",
    "question": "En vous appuyant sur la classification périodique proposée et sur les propriétés périodiques étudiées, sélectionnez exactement les cinq propositions correctes.",
    "explanation": "La position dans le tableau permet de relier famille chimique, configuration électronique externe et propriétés périodiques. Na et K sont des alcalins de configuration externe $ns^1$ et forment couramment des cations $+1$. C et Si appartiennent au groupe 14, tandis que Cl et Br sont des halogènes de configuration externe $ns^2np^5$. Dans une même famille, l'électronégativité augmente globalement vers le haut : O est donc plus électronégatif que S, et Cl plus électronégatif que Br.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.1",
      "chapter:1.2",
      "theme:periodic-trends"
    ],
    "requiredSelectionCount": 5,
    "choices": [
      {
        "content": "$\\ce{Na}$ et $\\ce{K}$ appartiennent à la même famille chimique et leur configuration électronique externe est de type $ns^1$.",
        "correct": true,
        "explanation": "Vrai. Na et K sont dans le groupe 1 ; leur couche externe est de type $ns^1$."
      },
      {
        "content": "$\\ce{C}$ et $\\ce{Si}$ appartiennent à la même famille chimique et possèdent chacun quatre électrons de valence dans leur état fondamental.",
        "correct": true,
        "explanation": "Vrai. C et Si appartiennent au groupe 14 et possèdent quatre électrons de valence."
      },
      {
        "content": "$\\ce{Cl}$ et $\\ce{Br}$ appartiennent à la famille des halogènes et leur configuration électronique externe est de type $ns^2np^5$.",
        "correct": true,
        "explanation": "Vrai. Les halogènes appartiennent au groupe 17 et présentent une configuration externe générale $ns^2np^5$."
      },
      {
        "content": "L'oxygène est plus électronégatif que le soufre.",
        "correct": true,
        "explanation": "Vrai. O et S appartiennent à la même famille ; l'électronégativité augmente globalement lorsqu'on remonte dans une colonne."
      },
      {
        "content": "Le sodium et le potassium tendent à former des cations monoatomiques de charge $+1$.",
        "correct": true,
        "explanation": "Vrai. Les alcalins perdent facilement leur électron externe et donnent couramment des cations $+1$."
      },
      {
        "content": "Le calcium appartient au bloc $p$.",
        "correct": false,
        "explanation": "Faux. Ca appartient au groupe 2 et au bloc $s$."
      },
      {
        "content": "Le fer et le cobalt appartiennent à la même famille chimique puisqu'ils sont situés sur la même période.",
        "correct": false,
        "explanation": "Faux. Être sur la même période signifie être sur la même ligne ; une famille correspond à une même colonne."
      },
      {
        "content": "Le brome est plus électronégatif que le chlore.",
        "correct": false,
        "explanation": "Faux. Dans le groupe 17, l'électronégativité augmente vers le haut : Cl est plus électronégatif que Br."
      },
      {
        "content": "Le silicium possède six électrons de valence puisqu'il se trouve dans le bloc $p$.",
        "correct": false,
        "explanation": "Faux. Si appartient au groupe 14 et possède quatre électrons de valence."
      },
      {
        "content": "Le néon et l'argon appartiennent à la famille des halogènes et possèdent sept électrons de valence.",
        "correct": false,
        "explanation": "Faux. Ne et Ar sont des gaz nobles du groupe 18 ; ce ne sont pas des halogènes."
      }
    ]
  },
  {
    "order": 18,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "On compare notamment $\\ce{Cl}$ et $\\ce{Br}$ dans la classification proposée. Quelle grandeur décrit la capacité d'un atome engagé dans une liaison chimique à attirer vers lui le doublet liant ?",
    "explanation": "L'électronégativité traduit la tendance d'un atome engagé dans une liaison à attirer vers lui la densité électronique de cette liaison. Elle doit être distinguée notamment de l'affinité électronique, qui décrit l'aspect énergétique associé à l'ajout d'un électron à une espèce isolée.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.2",
      "theme:electronegativity-definition"
    ],
    "choices": [
      {
        "content": "L'électronégativité.",
        "correct": true,
        "explanation": "C'est la définition même de l'électronégativité."
      },
      {
        "content": "L'affinité électronique.",
        "correct": false,
        "explanation": "L'affinité électronique concerne l'ajout d'un électron à une espèce isolée."
      },
      {
        "content": "L'énergie d'ionisation.",
        "correct": false,
        "explanation": "L'énergie d'ionisation est l'énergie nécessaire pour arracher un électron à un atome isolé."
      },
      {
        "content": "Le rayon atomique.",
        "correct": false,
        "explanation": "Le rayon atomique mesure la taille de l'atome."
      },
      {
        "content": "Le nombre de masse.",
        "correct": false,
        "explanation": "Le nombre de masse $A$ est le nombre total de nucléons."
      }
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Dans la famille contenant $\\ce{Cl}$ et $\\ce{Br}$, l'électronégativité augmente globalement vers le haut. Sélectionnez la case vide correspondant à l'élément de cette famille situé en deuxième période.",
    "explanation": "$\\ce{Cl}$ et $\\ce{Br}$ sont alignés dans le groupe 17, celui des halogènes. L'élément de cette famille situé au-dessus du chlore, en deuxième période, est le fluor $\\ce{F}$. L'électronégativité augmente globalement lorsqu'on remonte dans une famille ; le fluor est ainsi l'élément le plus électronégatif.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.1",
      "chapter:1.2",
      "theme:periodic-table"
    ],
    "image": {
      "src": "/images/training/ue14/colles/c01/periodic-table-linked-q17-q19.svg",
      "alt": "Classification périodique simplifiée des quatre premières périodes avec plusieurs éléments repères et certaines cases laissées vides.",
      "width": 960,
      "height": 390
    },
    "expectedZones": [
      {
        "id": "fluor",
        "label": "Fluor (F)",
        "x": 0.8875,
        "y": 0.4308,
        "tolerance": 0.035
      }
    ],
    "defaultTolerance": 0.035
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On considère une molécule de méthanol $\\ce{CH3OH}$. Quelles propositions sont exactes ?",
    "explanation": "Le méthanol permet de relier polarisation des liaisons, géométrie locale et interactions intermoléculaires : il est polaire et peut à la fois donner et accepter des liaisons hydrogène.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C01",
      "ec:CHIMIE",
      "chapter:1.2",
      "chapter:1.3",
      "chapter:1.4",
      "theme:integration-methanol"
    ],
    "choices": [
      {
        "content": "Les liaisons C–O et O–H sont polarisées vers l’oxygène.",
        "correct": true,
        "explanation": "L’oxygène est plus électronégatif que le carbone et l’hydrogène."
      },
      {
        "content": "L’oxygène du méthanol peut accepter une liaison hydrogène.",
        "correct": true,
        "explanation": "Ses doublets non liants peuvent jouer le rôle d’accepteurs."
      },
      {
        "content": "L’hydrogène porté par l’oxygène peut participer comme donneur de liaison hydrogène.",
        "correct": true,
        "explanation": "Le groupe O–H est un donneur classique."
      },
      {
        "content": "Le méthanol possède un moment dipolaire moléculaire global non nul.",
        "correct": true,
        "explanation": "La géométrie ne permet pas l’annulation de ses moments de liaison polarisés."
      },
      {
        "content": "Le carbone du groupe $\\ce{CH3}$ est décrit comme $sp^2$ et trigonal plan.",
        "correct": false,
        "explanation": "Dans le méthanol, le carbone forme quatre liaisons $\\sigma$ et est classiquement décrit comme $sp^3$ tétraédrique."
      }
    ]
  }
];
