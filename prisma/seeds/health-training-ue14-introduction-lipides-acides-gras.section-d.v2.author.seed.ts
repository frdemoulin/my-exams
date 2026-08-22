import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Chapitre 2.1–2.2 — Lipides et acides gras — Section D — Propriétés physiques, chimiques et biologiques */
export const UE14_BIOCH_CH4_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 79,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la solubilité aqueuse des acides gras, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La solubilité aqueuse diminue généralement quand la chaîne hydrocarbonée s'allonge.",
        "correct": true,
        "explanation": "La part hydrophobe devient plus importante."
      },
      {
        "content": "Le pH ne peut jamais influencer la solubilité d'un acide gras.",
        "correct": false,
        "explanation": "L'état d'ionisation du carboxyle dépend du pH."
      },
      {
        "content": "Un acide gras à longue chaîne est aussi soluble que le glucose.",
        "correct": false,
        "explanation": "Le glucose est beaucoup plus hydrophile."
      },
      {
        "content": "Les acides gras à longue chaîne sont très peu solubles dans l'eau sous forme non ionisée.",
        "correct": true,
        "explanation": "Ils nécessitent souvent des transporteurs ou des assemblages lipidiques en biologie."
      },
      {
        "content": "Allonger la chaîne augmente fortement la solubilité dans l'eau.",
        "correct": false,
        "explanation": "La tendance générale est inverse."
      }
    ],
    "explanation": "La longue chaîne hydrocarbonée réduit la solubilité dans l'eau, tandis que l'ionisation du carboxyle favorise la dispersion."
  },
  {
    "order": 80,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos du point de fusion et la longueur de chaîne, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "Allonger une chaîne saturée abaisse toujours son point de fusion.",
        "correct": false,
        "explanation": "La tendance est plutôt à l'augmenter."
      },
      {
        "content": "Une chaîne plus longue possède nécessairement moins d'interactions de dispersion.",
        "correct": false,
        "explanation": "Elle en possède généralement davantage."
      },
      {
        "content": "La comparaison doit tenir compte à la fois de la longueur et de l'insaturation.",
        "correct": true,
        "explanation": "Ces deux paramètres interagissent."
      },
      {
        "content": "Le point de fusion décrit le passage liquide-gaz.",
        "correct": false,
        "explanation": "Cela correspond à l'ébullition."
      },
      {
        "content": "Le point de fusion ne dépend jamais de la structure moléculaire.",
        "correct": false,
        "explanation": "La longueur et l'insaturation sont déterminantes."
      }
    ],
    "explanation": "Les chaînes plus longues ont généralement un point de fusion plus élevé à degré d'insaturation comparable."
  },
  {
    "order": 81,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel effet général une double liaison cis a-t-elle sur le point de fusion d'un acide gras de longueur comparable ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "elle l'abaisse",
        "diminution",
        "abaissement",
        "le point de fusion diminue"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les doubles liaisons cis perturbent l'empilement et abaissent généralement le point de fusion."
  },
  {
    "order": 82,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel acide gras C18 mono-insaturé cis, noté 18:1 Δ9, est liquide à température ambiante ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide oléique",
        "oléique",
        "oleique",
        "acide oleique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'acide oléique 18:1 cis-Δ9 a un point de fusion nettement plus bas que l'acide stéarique 18:0 de même longueur."
  },
  {
    "order": 83,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de l'estérification des acides gras, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "Des phospholipides comportent aussi des acides gras liés par ester dans de nombreuses familles.",
        "correct": true,
        "explanation": "C'est le cas des glycérophospholipides."
      },
      {
        "content": "L'estérification transforme un acide gras en acide aminé.",
        "correct": false,
        "explanation": "Elle forme un ester."
      },
      {
        "content": "Une liaison ester se forme entre deux fonctions amine.",
        "correct": false,
        "explanation": "Elle implique ici un acide carboxylique et un alcool."
      },
      {
        "content": "Un ester est une double liaison C=C.",
        "correct": false,
        "explanation": "C'est une fonction contenant C(=O)-O."
      },
      {
        "content": "Le glycérol ne possède aucune fonction alcool.",
        "correct": false,
        "explanation": "Il en possède trois."
      }
    ],
    "explanation": "L'estérification du carboxyle d'un acide gras par un alcool forme une liaison ester."
  },
  {
    "order": 84,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur les rôles biologiques des acides gras, sélectionnez exactement les deux exactes.",
    "choices": [
      {
        "content": "Aucun acide gras ne sert de précurseur de médiateur.",
        "correct": false,
        "explanation": "L'arachidonique en est un exemple important."
      },
      {
        "content": "Ils sont des constituants de lipides membranaires.",
        "correct": true,
        "explanation": "Ils forment les chaînes hydrophobes des phospholipides et sphingolipides."
      },
      {
        "content": "Les acides gras sont des substrats énergétiques importants.",
        "correct": true,
        "explanation": "Leur oxydation fournit beaucoup d'énergie."
      },
      {
        "content": "Les acides gras n'ont aucun rôle énergétique.",
        "correct": false,
        "explanation": "Leur oxydation est une source majeure d'énergie."
      },
      {
        "content": "Ils sont absents des membranes biologiques.",
        "correct": false,
        "explanation": "Ils entrent dans de nombreux lipides membranaires."
      }
    ],
    "explanation": "Les acides gras ont des rôles énergétiques, structuraux et précurseurs de médiateurs ; ils sont stockés notamment dans les triacylglycérols.",
    "requiredSelectionCount": 2
  },
  {
    "order": 85,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les acides gras oméga-3, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "EPA et DHA appartiennent également à la série n-3.",
        "correct": true,
        "explanation": "Ils sont des acides gras à plus longue chaîne."
      },
      {
        "content": "La conversion de l'alpha-linolénique en EPA puis DHA est limitée chez l'être humain.",
        "correct": true,
        "explanation": "L'alimentation peut donc apporter directement des n-3 à longue chaîne."
      },
      {
        "content": "La conversion d'ALA en DHA est toujours quantitative et complète.",
        "correct": false,
        "explanation": "Elle est limitée."
      },
      {
        "content": "Le DHA est important dans les membranes du système nerveux et de la rétine.",
        "correct": true,
        "explanation": "Il est très enrichi dans ces tissus."
      },
      {
        "content": "L'acide alpha-linolénique est le précurseur indispensable n-3.",
        "correct": true,
        "explanation": "Il doit être apporté par l'alimentation."
      }
    ],
    "explanation": "L'alpha-linolénique est indispensable ; la conversion humaine vers EPA/DHA existe mais reste limitée."
  },
  {
    "order": 86,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle partie d'un acide gras se place préférentiellement au contact de l'eau dans une couche interfaciale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "tête carboxylique",
        "tête polaire",
        "carboxyle",
        "carboxylate",
        "groupement carboxylique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les acides gras sont amphiphiles ; leur organisation interfaciale dépend de l'équilibre entre tête polaire et chaîne hydrophobe."
  },
  {
    "order": 87,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur la solubilité aqueuse des acides gras, laquelle est exacte ?",
    "choices": [
      {
        "content": "Allonger la chaîne augmente fortement la solubilité dans l'eau.",
        "correct": false,
        "explanation": "La tendance générale est inverse."
      },
      {
        "content": "La solubilité aqueuse diminue généralement quand la chaîne hydrocarbonée s'allonge.",
        "correct": true,
        "explanation": "La part hydrophobe devient plus importante."
      },
      {
        "content": "Un acide gras à longue chaîne est aussi soluble que le glucose.",
        "correct": false,
        "explanation": "Le glucose est beaucoup plus hydrophile."
      },
      {
        "content": "Le pH ne peut jamais influencer la solubilité d'un acide gras.",
        "correct": false,
        "explanation": "L'état d'ionisation du carboxyle dépend du pH."
      },
      {
        "content": "Les solvants organiques ne dissolvent jamais les lipides.",
        "correct": false,
        "explanation": "De nombreux lipides y sont solubles."
      }
    ],
    "explanation": "La longue chaîne hydrocarbonée réduit la solubilité dans l'eau, tandis que l'ionisation du carboxyle favorise la dispersion."
  },
  {
    "order": 88,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le point de fusion et la longueur de chaîne, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les acides gras saturés longs s'empilent efficacement.",
        "correct": true,
        "explanation": "Leurs chaînes rectilignes favorisent les contacts."
      },
      {
        "content": "Allonger une chaîne saturée abaisse toujours son point de fusion.",
        "correct": false,
        "explanation": "La tendance est plutôt à l'augmenter."
      },
      {
        "content": "Le point de fusion est une propriété physique mesurable.",
        "correct": true,
        "explanation": "Il correspond au passage solide-liquide."
      },
      {
        "content": "Une chaîne plus longue possède nécessairement moins d'interactions de dispersion.",
        "correct": false,
        "explanation": "Elle en possède généralement davantage."
      },
      {
        "content": "Le point de fusion décrit le passage liquide-gaz.",
        "correct": false,
        "explanation": "Cela correspond à l'ébullition."
      }
    ],
    "explanation": "Les chaînes plus longues ont généralement un point de fusion plus élevé à degré d'insaturation comparable."
  },
  {
    "order": 89,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la solubilité aqueuse des acides gras, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Allonger la chaîne augmente fortement la solubilité dans l'eau.",
        "correct": false,
        "explanation": "La tendance générale est inverse."
      },
      {
        "content": "L'ionisation du carboxyle augmente le caractère hydrophile de la tête.",
        "correct": true,
        "explanation": "Le carboxylate est chargé."
      },
      {
        "content": "La solubilité aqueuse diminue généralement quand la chaîne hydrocarbonée s'allonge.",
        "correct": true,
        "explanation": "La part hydrophobe devient plus importante."
      },
      {
        "content": "Le pH ne peut jamais influencer la solubilité d'un acide gras.",
        "correct": false,
        "explanation": "L'état d'ionisation du carboxyle dépend du pH."
      },
      {
        "content": "Un acide gras à longue chaîne est aussi soluble que le glucose.",
        "correct": false,
        "explanation": "Le glucose est beaucoup plus hydrophile."
      }
    ],
    "explanation": "La longue chaîne hydrocarbonée réduit la solubilité dans l'eau, tandis que l'ionisation du carboxyle favorise la dispersion."
  },
  {
    "order": 90,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "À saturation comparable, comment évolue généralement le point de fusion quand la chaîne s'allonge ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "il augmente",
        "augmentation",
        "augmente",
        "hausse"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les chaînes plus longues ont généralement un point de fusion plus élevé à degré d'insaturation comparable."
  },
  {
    "order": 91,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le comportement d'un acide gras à longue chaîne en milieu aqueux, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Sa solubilité sous forme non ionisée est faible.",
        "correct": true,
        "explanation": "La longue chaîne hydrocarbonée domine le comportement hydrophobe."
      },
      {
        "content": "Tout acide gras forme obligatoirement la même micelle stable, quel que soit le pH.",
        "correct": false,
        "explanation": "L'agrégation des acides gras dépend fortement de leurs conditions physicochimiques."
      },
      {
        "content": "Son état d'ionisation dépend du pH et modifie sa dispersibilité.",
        "correct": true,
        "explanation": "Le carboxylate chargé est plus hydrophile que la forme COOH."
      },
      {
        "content": "Des organisations interfaciales ou agrégées sont possibles selon les conditions.",
        "correct": true,
        "explanation": "Concentration, pH, longueur de chaîne et environnement déterminent l'organisation."
      },
      {
        "content": "La chaîne hydrocarbonée constitue la région la plus hydrophile.",
        "correct": false,
        "explanation": "Elle est la région hydrophobe."
      }
    ],
    "explanation": "Le comportement aqueux des acides gras est amphiphile mais dépend du pH, de la longueur de chaîne et de la concentration."
  },
  {
    "order": 92,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les acides gras trans, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une double liaison trans crée toujours un coude plus marqué qu'une cis.",
        "correct": false,
        "explanation": "C'est généralement l'inverse."
      },
      {
        "content": "Une double liaison trans maintient une chaîne plus rectiligne qu'une double liaison cis.",
        "correct": true,
        "explanation": "L'empilement est plus efficace."
      },
      {
        "content": "Une consommation élevée d'acides gras trans industriels augmente le risque cardiovasculaire.",
        "correct": true,
        "explanation": "Ils dégradent notamment le profil lipidique sanguin."
      },
      {
        "content": "Cis et trans n'ont aucun effet sur les propriétés physiques.",
        "correct": false,
        "explanation": "La géométrie modifie l'empilement."
      },
      {
        "content": "Réduire les acides gras trans industriels fait partie des recommandations de santé publique.",
        "correct": true,
        "explanation": "Leur apport doit être très faible."
      }
    ],
    "explanation": "Les acides gras trans industriels sont associés à un risque cardiovasculaire accru ; l'effet n'a pas besoin d'être étendu à des affirmations non établies."
  },
  {
    "order": 93,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos de l'estérification des acides gras, retenez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Un ester est une double liaison C=C.",
        "correct": false,
        "explanation": "C'est une fonction contenant C(=O)-O."
      },
      {
        "content": "Une liaison ester se forme entre deux fonctions amine.",
        "correct": false,
        "explanation": "Elle implique ici un acide carboxylique et un alcool."
      },
      {
        "content": "L'estérification transforme un acide gras en acide aminé.",
        "correct": false,
        "explanation": "Elle forme un ester."
      },
      {
        "content": "Une fonction carboxylique peut réagir avec une fonction alcool pour former un ester.",
        "correct": true,
        "explanation": "C'est le principe de l'estérification."
      },
      {
        "content": "Des phospholipides comportent aussi des acides gras liés par ester dans de nombreuses familles.",
        "correct": true,
        "explanation": "C'est le cas des glycérophospholipides."
      }
    ],
    "explanation": "L'estérification du carboxyle d'un acide gras par un alcool forme une liaison ester.",
    "requiredSelectionCount": 2
  },
  {
    "order": 94,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur les rôles biologiques des acides gras, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Ils peuvent être stockés dans les triacylglycérols.",
        "correct": true,
        "explanation": "Cela constitue une réserve énergétique dense."
      },
      {
        "content": "Les acides gras sont des substrats énergétiques importants.",
        "correct": true,
        "explanation": "Leur oxydation fournit beaucoup d'énergie."
      },
      {
        "content": "Ils sont des constituants de lipides membranaires.",
        "correct": true,
        "explanation": "Ils forment les chaînes hydrophobes des phospholipides et sphingolipides."
      },
      {
        "content": "Certains acides gras servent de précurseurs à des médiateurs lipidiques.",
        "correct": true,
        "explanation": "L'acide arachidonique est un précurseur d'eicosanoïdes."
      },
      {
        "content": "Ils ne peuvent jamais être stockés.",
        "correct": false,
        "explanation": "Ils sont stockés notamment sous forme de triacylglycérols."
      }
    ],
    "explanation": "Les acides gras ont des rôles énergétiques, structuraux et précurseurs de médiateurs ; ils sont stockés notamment dans les triacylglycérols."
  },
  {
    "order": 95,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel acide gras polyinsaturé C20 sert de précurseur majeur aux eicosanoïdes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide arachidonique",
        "arachidonique",
        "acide arachidonique 20:4"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'acide arachidonique 20:4 n-6 est un précurseur majeur de nombreux eicosanoïdes."
  },
  {
    "order": 96,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de l'organisation des acides gras à une interface, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "Le pH ne peut influencer aucune organisation interfaciale.",
        "correct": false,
        "explanation": "L'ionisation du carboxyle dépend du pH."
      },
      {
        "content": "La tête polaire tend à interagir avec l'eau.",
        "correct": true,
        "explanation": "Elle se place préférentiellement vers la phase aqueuse."
      },
      {
        "content": "La chaîne hydrocarbonée recherche préférentiellement le contact avec l'eau.",
        "correct": false,
        "explanation": "Elle est hydrophobe."
      },
      {
        "content": "Tous les acides gras forment spontanément la même micelle stable dans toutes les conditions.",
        "correct": false,
        "explanation": "L'agrégation dépend du pH, de la longueur et de la concentration."
      },
      {
        "content": "Une interface eau-air force la tête polaire à pointer vers l'air.",
        "correct": false,
        "explanation": "La tête interagit préférentiellement avec l'eau."
      }
    ],
    "explanation": "Les acides gras sont amphiphiles ; leur organisation interfaciale dépend de l'équilibre entre tête polaire et chaîne hydrophobe."
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur la solubilité aqueuse des acides gras, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le pH ne peut jamais influencer la solubilité d'un acide gras.",
        "correct": false,
        "explanation": "L'état d'ionisation du carboxyle dépend du pH."
      },
      {
        "content": "Les solvants organiques ne dissolvent jamais les lipides.",
        "correct": false,
        "explanation": "De nombreux lipides y sont solubles."
      },
      {
        "content": "Allonger la chaîne augmente fortement la solubilité dans l'eau.",
        "correct": false,
        "explanation": "La tendance générale est inverse."
      },
      {
        "content": "Les acides gras à longue chaîne sont très peu solubles dans l'eau sous forme non ionisée.",
        "correct": true,
        "explanation": "Ils nécessitent souvent des transporteurs ou des assemblages lipidiques en biologie."
      },
      {
        "content": "Les acides gras sont solubles dans de nombreux solvants organiques.",
        "correct": true,
        "explanation": "Leur chaîne hydrocarbonée y est mieux solvatisée."
      }
    ],
    "explanation": "La longue chaîne hydrocarbonée réduit la solubilité dans l'eau, tandis que l'ionisation du carboxyle favorise la dispersion."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions correctes concernant les acides gras trans d'origine industrielle.",
    "choices": [
      {
        "content": "Ils sont recommandés pour prévenir les maladies cardiovasculaires.",
        "correct": false,
        "explanation": "Les recommandations vont au contraire vers une consommation minimale."
      },
      {
        "content": "Une consommation élevée est associée à une augmentation du risque cardiovasculaire.",
        "correct": true,
        "explanation": "Les données nutritionnelles justifient de réduire fortement leur consommation."
      },
      {
        "content": "Ils sont démontrés comme cause unique de tous les cancers.",
        "correct": false,
        "explanation": "Cette généralisation n'est ni nécessaire ni scientifiquement justifiée."
      },
      {
        "content": "Ils sont chimiquement des acides gras saturés dépourvus de double liaison.",
        "correct": false,
        "explanation": "Une configuration trans suppose une double liaison C=C."
      },
      {
        "content": "Ils peuvent altérer défavorablement le profil des lipoprotéines sanguines.",
        "correct": true,
        "explanation": "Ils tendent notamment à augmenter le LDL-cholestérol et à dégrader le profil lipidique."
      }
    ],
    "explanation": "Le risque cardiovasculaire est le point robuste à retenir ; il faut éviter les généralisations causales excessives.",
    "requiredSelectionCount": 2
  },
  {
    "order": 99,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'effet d'une double liaison cis sur le point de fusion, quelles affirmations sont correctes ?",
    "choices": [
      {
        "content": "Une double liaison cis augmente toujours le point de fusion.",
        "correct": false,
        "explanation": "Elle le diminue généralement."
      },
      {
        "content": "Plusieurs doubles liaisons cis peuvent accentuer la désorganisation des chaînes.",
        "correct": true,
        "explanation": "Les polyinsaturés ont souvent des points de fusion bas."
      },
      {
        "content": "Une double liaison cis rend la chaîne plus rectiligne qu'une chaîne saturée.",
        "correct": false,
        "explanation": "Elle crée un coude."
      },
      {
        "content": "Une double liaison cis introduit un coude dans la chaîne.",
        "correct": true,
        "explanation": "Elle perturbe l'empilement des chaînes."
      },
      {
        "content": "À longueur comparable, une double liaison cis tend à abaisser le point de fusion.",
        "correct": true,
        "explanation": "La cohésion du solide diminue."
      }
    ],
    "explanation": "Les doubles liaisons cis perturbent l'empilement et abaissent généralement le point de fusion."
  },
  {
    "order": 100,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de risque est solidement associé à une consommation élevée d'acides gras trans industriels ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "risque cardiovasculaire",
        "maladies cardiovasculaires",
        "risque cardio-vasculaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les acides gras trans industriels sont associés à un risque cardiovasculaire accru ; l'effet n'a pas besoin d'être étendu à des affirmations non établies."
  }
];
