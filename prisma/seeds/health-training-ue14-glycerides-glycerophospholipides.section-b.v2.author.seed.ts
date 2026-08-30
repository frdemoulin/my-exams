import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Glycérides et glycérophospholipides — Section B — Triacylglycérols : propriétés, stockage et rôles */
export const UE14_BIOCH_CH6_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le stockage des triacylglycérols, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils représentent une réserve énergétique majeure.",
        "correct": true,
        "explanation": "Leur hydrolyse libère des acides gras oxydables."
      },
      {
        "content": "Le tissu adipeux ne contient pratiquement aucun TAG.",
        "correct": false,
        "explanation": "Il en est le principal site de stockage."
      },
      {
        "content": "Ils stockent des acides gras sous une forme globalement neutre et très hydrophobe.",
        "correct": true,
        "explanation": "Ils s'accumulent dans des gouttelettes lipidiques."
      },
      {
        "content": "Ils sont stockés principalement dans le noyau sous forme de chromosomes.",
        "correct": false,
        "explanation": "Ils s'accumulent dans des gouttelettes lipidiques."
      },
      {
        "content": "Ils sont fortement solubles dans le cytosol aqueux.",
        "correct": false,
        "explanation": "Ils sont hydrophobes."
      }
    ],
    "explanation": "Les TAG constituent la grande réserve lipidique des adipocytes sous forme de gouttelettes hydrophobes."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la réserve énergétique des triacylglycérols, laquelle est correcte ?",
    "choices": [
      {
        "content": "La mobilisation des TAG ne dépend jamais de l'état métabolique.",
        "correct": false,
        "explanation": "Elle est régulée."
      },
      {
        "content": "Leur hydrolyse produit uniquement du glucose.",
        "correct": false,
        "explanation": "Elle libère glycérol et acides gras."
      },
      {
        "content": "Leur hydrolyse libère du glycérol et des acides gras.",
        "correct": true,
        "explanation": "Les acides gras peuvent ensuite être oxydés."
      },
      {
        "content": "Les TAG ne peuvent fournir aucune énergie.",
        "correct": false,
        "explanation": "Leurs acides gras sont des substrats énergétiques majeurs."
      },
      {
        "content": "Ils sont les principaux constituants amphiphiles de la bicouche plasmique.",
        "correct": false,
        "explanation": "Ce rôle revient surtout aux phospholipides."
      }
    ],
    "explanation": "Les TAG stockent des acides gras mobilisables ; leur hydrolyse libère glycérol et acides gras."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel effet général une augmentation de l'insaturation cis a-t-elle sur le point de fusion d'un TAG comparable ?",
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
    "explanation": "Le point de fusion des TAG dépend de leur composition ; l'insaturation cis tend à l'abaisser."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les propriétés physiques des réserves lipidiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les TAG sont d'excellents conducteurs électriques et thermiques.",
        "correct": false,
        "explanation": "Ils sont de mauvais conducteurs thermiques."
      },
      {
        "content": "Le tissu adipeux n'a aucun effet mécanique local.",
        "correct": false,
        "explanation": "Il peut amortir et soutenir certains organes."
      },
      {
        "content": "Les TAG conduisent mal la chaleur comparativement à l'eau et aux tissus riches en eau.",
        "correct": true,
        "explanation": "Le tissu adipeux participe à l'isolation thermique."
      },
      {
        "content": "La faible polarité des TAG favorise leur stockage sans eau associée en grande quantité.",
        "correct": true,
        "explanation": "Cela contribue à la densité énergétique du stockage."
      },
      {
        "content": "Le tissu adipeux peut amortir mécaniquement certains organes.",
        "correct": true,
        "explanation": "La localisation des dépôts lipidiques participe à cette protection."
      }
    ],
    "explanation": "Le stockage de TAG contribue à la réserve énergétique mais aussi à l'isolation thermique et à la protection mécanique."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les triacylglycérols alimentaires, laquelle est correcte ?",
    "choices": [
      {
        "content": "Leur composition en acides gras dépend de la source alimentaire.",
        "correct": true,
        "explanation": "Une huile végétale et une graisse animale peuvent avoir des profils différents."
      },
      {
        "content": "Un TAG est directement soluble en grande quantité dans l'eau intestinale sans émulsification ni digestion.",
        "correct": false,
        "explanation": "Son hydrophobicité nécessite une prise en charge digestive adaptée."
      },
      {
        "content": "La composition en acides gras n'a aucun effet sur les propriétés physiques d'une graisse.",
        "correct": false,
        "explanation": "Elle les influence fortement."
      },
      {
        "content": "Les lipides alimentaires ne contiennent jamais de TAG.",
        "correct": false,
        "explanation": "Ils en contiennent souvent beaucoup."
      },
      {
        "content": "Tous les TAG alimentaires ont exactement les mêmes acides gras.",
        "correct": false,
        "explanation": "La composition dépend de la source."
      }
    ],
    "explanation": "Les TAG sont des constituants majeurs des huiles et graisses alimentaires ; leur composition en acides gras détermine une partie de leurs propriétés."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant l'huile de palme comme mélange de triacylglycérols, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Elle ne contient aucun acide gras mono-insaturé.",
        "correct": false,
        "explanation": "Elle contient notamment de l'oléique."
      },
      {
        "content": "Elle contient aussi de l'acide oléique.",
        "correct": true,
        "explanation": "Son profil n'est donc pas exclusivement saturé."
      },
      {
        "content": "Elle est constituée d'une seule molécule de tripalmitine pure.",
        "correct": false,
        "explanation": "C'est un mélange complexe."
      },
      {
        "content": "Elle contient une proportion importante d'acide palmitique dans ses TAG.",
        "correct": true,
        "explanation": "Cette composition explique son nom."
      },
      {
        "content": "Elle est toujours liquide, quelle que soit la température.",
        "correct": false,
        "explanation": "Son état physique varie avec la température."
      }
    ],
    "explanation": "L'huile de palme est un mélange de TAG riche notamment en palmitate et contenant aussi des acides gras insaturés.",
    "requiredSelectionCount": 2
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la neutralité globale des triacylglycérols, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les TAG sont globalement neutres aux pH physiologiques usuels.",
        "correct": true,
        "explanation": "Ils ne possèdent pas de tête ionique comme les phospholipides."
      },
      {
        "content": "Les TAG sont très hydrosolubles.",
        "correct": false,
        "explanation": "Ils sont fortement hydrophobes."
      },
      {
        "content": "Les trois fonctions alcool du glycérol sont estérifiées dans un TAG.",
        "correct": true,
        "explanation": "Aucun OH du glycérol ne reste libre."
      },
      {
        "content": "Le carboxyle de chaque acide gras est engagé dans une liaison ester.",
        "correct": true,
        "explanation": "Les chaînes ne portent plus un carboxylate libre."
      },
      {
        "content": "Cette neutralité contribue à leur forte hydrophobicité.",
        "correct": true,
        "explanation": "Ils se regroupent dans des phases lipidiques."
      }
    ],
    "explanation": "Les TAG sont des lipides neutres et hydrophobes, adaptés au stockage dans des gouttelettes lipidiques."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle grande famille est principalement structurale dans les bicouches : TAG ou glycérophospholipides ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glycérophospholipides",
        "glycerophospholipides",
        "phospholipides"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "TAG et glycérophospholipides partagent le glycérol mais diffèrent fortement par structure, polarité et rôle dominant."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant le stockage des triacylglycérols ?",
    "choices": [
      {
        "content": "Le tissu adipeux ne contient pratiquement aucun TAG.",
        "correct": false,
        "explanation": "Il en est le principal site de stockage."
      },
      {
        "content": "Ils sont stockés principalement dans le noyau sous forme de chromosomes.",
        "correct": false,
        "explanation": "Ils s'accumulent dans des gouttelettes lipidiques."
      },
      {
        "content": "Ils sont fortement solubles dans le cytosol aqueux.",
        "correct": false,
        "explanation": "Ils sont hydrophobes."
      },
      {
        "content": "Ils stockent des acides gras sous une forme globalement neutre et très hydrophobe.",
        "correct": true,
        "explanation": "Ils s'accumulent dans des gouttelettes lipidiques."
      },
      {
        "content": "Ils constituent une réserve de glucose polymérisé.",
        "correct": false,
        "explanation": "Cela décrit le glycogène."
      }
    ],
    "explanation": "Les TAG constituent la grande réserve lipidique des adipocytes sous forme de gouttelettes hydrophobes."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la réserve énergétique des triacylglycérols, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les TAG ne peuvent fournir aucune énergie.",
        "correct": false,
        "explanation": "Leurs acides gras sont des substrats énergétiques majeurs."
      },
      {
        "content": "Leur hydrolyse libère du glycérol et des acides gras.",
        "correct": true,
        "explanation": "Les acides gras peuvent ensuite être oxydés."
      },
      {
        "content": "La mobilisation des TAG ne dépend jamais de l'état métabolique.",
        "correct": false,
        "explanation": "Elle est régulée."
      },
      {
        "content": "La fonction de stockage est distincte du rôle structural des phospholipides membranaires.",
        "correct": true,
        "explanation": "TAG et phospholipides ont des fonctions dominantes différentes."
      },
      {
        "content": "Leur hydrolyse produit uniquement du glucose.",
        "correct": false,
        "explanation": "Elle libère glycérol et acides gras."
      }
    ],
    "explanation": "Les TAG stockent des acides gras mobilisables ; leur hydrolyse libère glycérol et acides gras."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le stockage des triacylglycérols, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils représentent une réserve énergétique majeure.",
        "correct": true,
        "explanation": "Leur hydrolyse libère des acides gras oxydables."
      },
      {
        "content": "Ils sont stockés principalement dans le noyau sous forme de chromosomes.",
        "correct": false,
        "explanation": "Ils s'accumulent dans des gouttelettes lipidiques."
      },
      {
        "content": "Les triacylglycérols sont stockés en grande quantité dans les adipocytes.",
        "correct": true,
        "explanation": "Le tissu adipeux constitue le principal réservoir."
      },
      {
        "content": "Le tissu adipeux ne contient pratiquement aucun TAG.",
        "correct": false,
        "explanation": "Il en est le principal site de stockage."
      },
      {
        "content": "Ils sont fortement solubles dans le cytosol aqueux.",
        "correct": false,
        "explanation": "Ils sont hydrophobes."
      }
    ],
    "explanation": "Les TAG constituent la grande réserve lipidique des adipocytes sous forme de gouttelettes hydrophobes."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quels deux types de produits principaux résultent de l'hydrolyse complète d'un triacylglycérol ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glycérol et acides gras",
        "acides gras et glycérol",
        "glycerol et acides gras"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les TAG stockent des acides gras mobilisables ; leur hydrolyse libère glycérol et acides gras."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant le point de fusion des triacylglycérols ?",
    "choices": [
      {
        "content": "Un mélange naturel de TAG peut avoir un comportement de fusion étalé.",
        "correct": true,
        "explanation": "Il ne s'agit pas nécessairement d'un composé pur."
      },
      {
        "content": "Le point de fusion est indépendant des chaînes acyles.",
        "correct": false,
        "explanation": "Leur structure est déterminante."
      },
      {
        "content": "Ajouter des doubles liaisons cis élève toujours fortement le point de fusion.",
        "correct": false,
        "explanation": "La tendance est inverse."
      },
      {
        "content": "Tous les TAG naturels ont un point de fusion unique identique.",
        "correct": false,
        "explanation": "Leur composition varie."
      },
      {
        "content": "Tous les TAG contenant un acide gras saturé sont nécessairement solides à 37 °C.",
        "correct": false,
        "explanation": "La propriété dépend de l'ensemble de la composition."
      }
    ],
    "explanation": "Le point de fusion des TAG dépend de leur composition ; l'insaturation cis tend à l'abaisser."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les propriétés physiques des réserves lipidiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La protection thermique est due à une charge phosphate des TAG.",
        "correct": false,
        "explanation": "Les TAG ne possèdent pas de phosphate par définition."
      },
      {
        "content": "Le tissu adipeux n'a aucun effet mécanique local.",
        "correct": false,
        "explanation": "Il peut amortir et soutenir certains organes."
      },
      {
        "content": "Le tissu adipeux peut amortir mécaniquement certains organes.",
        "correct": true,
        "explanation": "La localisation des dépôts lipidiques participe à cette protection."
      },
      {
        "content": "Les TAG conduisent mal la chaleur comparativement à l'eau et aux tissus riches en eau.",
        "correct": true,
        "explanation": "Le tissu adipeux participe à l'isolation thermique."
      },
      {
        "content": "Ces propriétés complètent leur fonction de réserve énergétique.",
        "correct": true,
        "explanation": "Un même tissu peut avoir plusieurs fonctions."
      }
    ],
    "explanation": "Le stockage de TAG contribue à la réserve énergétique mais aussi à l'isolation thermique et à la protection mécanique."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant les triacylglycérols alimentaires, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Un TAG est directement soluble en grande quantité dans l'eau intestinale sans émulsification ni digestion.",
        "correct": false,
        "explanation": "Son hydrophobicité nécessite une prise en charge digestive adaptée."
      },
      {
        "content": "La composition en acides gras n'a aucun effet sur les propriétés physiques d'une graisse.",
        "correct": false,
        "explanation": "Elle les influence fortement."
      },
      {
        "content": "La digestion doit hydrolyser les liaisons ester avant absorption des principaux produits.",
        "correct": true,
        "explanation": "Des lipases assurent cette hydrolyse."
      },
      {
        "content": "Les lipides alimentaires ne contiennent jamais de TAG.",
        "correct": false,
        "explanation": "Ils en contiennent souvent beaucoup."
      },
      {
        "content": "Les propriétés physiques d'une huile dépendent du mélange d'acides gras des TAG.",
        "correct": true,
        "explanation": "Saturation et insaturation sont déterminantes."
      }
    ],
    "explanation": "Les TAG sont des constituants majeurs des huiles et graisses alimentaires ; leur composition en acides gras détermine une partie de leurs propriétés.",
    "requiredSelectionCount": 2
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant l'huile de palme comme mélange de triacylglycérols ?",
    "choices": [
      {
        "content": "Son état physique dépend de la température et de sa composition.",
        "correct": true,
        "explanation": "Elle est souvent semi-solide à température ambiante usuelle."
      },
      {
        "content": "Elle contient une proportion importante d'acide palmitique dans ses TAG.",
        "correct": true,
        "explanation": "Cette composition explique son nom."
      },
      {
        "content": "Elle contient aussi de l'acide oléique.",
        "correct": true,
        "explanation": "Son profil n'est donc pas exclusivement saturé."
      },
      {
        "content": "Elle est principalement constituée de protéines.",
        "correct": false,
        "explanation": "C'est une matière grasse riche en TAG."
      },
      {
        "content": "Elle est un mélange de nombreux triacylglycérols.",
        "correct": true,
        "explanation": "Ce n'est pas une molécule pure."
      }
    ],
    "explanation": "L'huile de palme est un mélange de TAG riche notamment en palmitate et contenant aussi des acides gras insaturés."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel acide gras saturé C16 est particulièrement abondant dans l'huile de palme ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide palmitique",
        "palmitique",
        "acide hexadécanoïque",
        "acide hexadecanoique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'huile de palme est un mélange de TAG riche notamment en palmitate ; elle contient aussi des acides gras insaturés comme l'oléate."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la distinction stockage lipidique et structure membranaire, laquelle est correcte ?",
    "choices": [
      {
        "content": "Les TAG sont les principaux constituants amphiphiles de la bicouche.",
        "correct": false,
        "explanation": "Ils sont des lipides neutres de stockage."
      },
      {
        "content": "TAG et phosphatidylcholine sont chimiquement identiques.",
        "correct": false,
        "explanation": "La phosphatidylcholine porte phosphate et choline."
      },
      {
        "content": "Le phosphate n'a aucun effet sur l'amphiphilie.",
        "correct": false,
        "explanation": "Il contribue fortement à la tête polaire."
      },
      {
        "content": "Un TAG possède trois chaînes acyles et pas de phosphate.",
        "correct": true,
        "explanation": "Un glycérophospholipide classique possède deux chaînes acyles et un phosphate."
      },
      {
        "content": "Tous les glycérophospholipides possèdent trois chaînes acyles.",
        "correct": false,
        "explanation": "Ils en possèdent classiquement deux."
      }
    ],
    "explanation": "TAG et glycérophospholipides partagent le glycérol mais diffèrent fortement par structure, polarité et rôle dominant."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le stockage des triacylglycérols ?",
    "choices": [
      {
        "content": "Ils sont stockés principalement dans le noyau sous forme de chromosomes.",
        "correct": false,
        "explanation": "Ils s'accumulent dans des gouttelettes lipidiques."
      },
      {
        "content": "Le stockage sous forme de TAG évite d'accumuler de fortes concentrations d'acides gras libres.",
        "correct": true,
        "explanation": "Les acides gras libres peuvent perturber les membranes et le métabolisme."
      },
      {
        "content": "Ils sont fortement solubles dans le cytosol aqueux.",
        "correct": false,
        "explanation": "Ils sont hydrophobes."
      },
      {
        "content": "Les triacylglycérols sont stockés en grande quantité dans les adipocytes.",
        "correct": true,
        "explanation": "Le tissu adipeux constitue le principal réservoir."
      },
      {
        "content": "Le tissu adipeux ne contient pratiquement aucun TAG.",
        "correct": false,
        "explanation": "Il en est le principal site de stockage."
      }
    ],
    "explanation": "Les TAG constituent la grande réserve lipidique des adipocytes sous forme de gouttelettes hydrophobes."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant l'état physique d'un mélange de triacylglycérols.",
    "choices": [
      {
        "content": "Des doubles liaisons cis tendent à diminuer le point de fusion.",
        "correct": true,
        "explanation": "Les coudes cis perturbent l'empilement des chaînes."
      },
      {
        "content": "Tout TAG contenant au moins un acide gras saturé est obligatoirement solide à 37 °C.",
        "correct": false,
        "explanation": "L'état physique dépend de l'ensemble des chaînes acyles et de leur mélange."
      },
      {
        "content": "Une chaîne cis augmente toujours le point de fusion par rapport à la chaîne saturée correspondante.",
        "correct": false,
        "explanation": "La tendance générale est inverse."
      },
      {
        "content": "L'état physique est indépendant de la composition en acides gras.",
        "correct": false,
        "explanation": "La composition est un déterminant majeur."
      },
      {
        "content": "Une proportion plus élevée de chaînes saturées tend à augmenter le point de fusion.",
        "correct": true,
        "explanation": "Les chaînes saturées s'empilent plus efficacement."
      }
    ],
    "explanation": "Le point de fusion dépend de l'ensemble de la composition ; il faut éviter les règles absolues basées sur une seule chaîne acyle.",
    "requiredSelectionCount": 2
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant le point de fusion des triacylglycérols, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Tous les TAG naturels ont un point de fusion unique identique.",
        "correct": false,
        "explanation": "Leur composition varie."
      },
      {
        "content": "Des chaînes plus saturées favorisent généralement un point de fusion plus élevé.",
        "correct": true,
        "explanation": "Elles s'empilent plus efficacement."
      },
      {
        "content": "Un mélange naturel de TAG peut avoir un comportement de fusion étalé.",
        "correct": true,
        "explanation": "Il ne s'agit pas nécessairement d'un composé pur."
      },
      {
        "content": "Des doubles liaisons cis abaissent généralement le point de fusion.",
        "correct": true,
        "explanation": "Elles introduisent des coudes dans les chaînes."
      },
      {
        "content": "Le point de fusion est indépendant des chaînes acyles.",
        "correct": false,
        "explanation": "Leur structure est déterminante."
      }
    ],
    "explanation": "Le point de fusion des TAG dépend de leur composition ; l'insaturation cis tend à l'abaisser."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle propriété du tissu adipeux contribue à limiter les pertes de chaleur ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "isolation thermique",
        "faible conduction de chaleur",
        "mauvaise conduction thermique",
        "isolant thermique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le stockage de TAG contribue à la réserve énergétique mais aussi à l'isolation thermique et à la protection mécanique."
  }
];
