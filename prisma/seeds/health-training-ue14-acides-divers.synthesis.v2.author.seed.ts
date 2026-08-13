import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.7 – Synthèse
 */

export const UE14_CH11_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions relient correctement acidité et activation dans le modèle de la fiche ?",
    "choices": [
      {
        "content": "RCOOH peut libérer H+ et former RCOO−.",
        "correct": true,
        "explanation": "Définition protonique."
      },
      {
        "content": "Le carboxylate présente une charge négative délocalisée entre les oxygènes.",
        "correct": true,
        "explanation": "Modèle du support."
      },
      {
        "content": "L'acide carboxylique est décrit comme peu électrophile.",
        "correct": true,
        "explanation": "Propriété."
      },
      {
        "content": "Un dérivé activé possède un carbone plus électrophile.",
        "correct": true,
        "explanation": "But de l'activation."
      }
    ],
    "explanation": "La synthèse doit relier dissociation acide, délocalisation et intérêt des dérivés activés."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare un acide carboxylique, un alcool et un carbone de type -CH2-CO- dans la hiérarchie du support. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'acide carboxylique est le plus acide des trois.",
        "correct": true,
        "explanation": "Hiérarchie donnée."
      },
      {
        "content": "L'alcool occupe la position intermédiaire.",
        "correct": true,
        "explanation": "Acidité moyenne dans cette comparaison."
      },
      {
        "content": "Le carbone -CH2-CO- est le moins acide des trois.",
        "correct": true,
        "explanation": "Acidité faible."
      },
      {
        "content": "La hiérarchie est alcool > acide carboxylique > -CH2-CO-.",
        "correct": false,
        "explanation": "L'acide carboxylique est placé en tête."
      }
    ],
    "explanation": "La hiérarchie locale doit pouvoir être restituée sans confondre nature de la fonction et intensité de l'acidité."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un acide cible peut être obtenu par plusieurs voies du chapitre. Quelles associations sont exactes ?",
    "choices": [
      {
        "content": "Alcool primaire → acide par oxydation.",
        "correct": true,
        "explanation": "Voie de préparation."
      },
      {
        "content": "Ester → acide + alcool par hydrolyse.",
        "correct": true,
        "explanation": "Voie de préparation."
      },
      {
        "content": "Amide → amine + acide par hydrolyse.",
        "correct": true,
        "explanation": "Voie de préparation."
      },
      {
        "content": "Nitrile → amide → acide.",
        "correct": true,
        "explanation": "Voie de préparation."
      }
    ],
    "explanation": "La fiche propose plusieurs accès fonctionnels à la fonction acide carboxylique."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On veut obtenir un acide à 5 carbones par carboxylation d'un organomagnésien. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le fragment R doit contenir 4 carbones.",
        "correct": true,
        "explanation": "Le CO2 apporte le cinquième."
      },
      {
        "content": "CO2 est consommé.",
        "correct": true,
        "explanation": "Réactif de carboxylation."
      },
      {
        "content": "Le carbone de CO2 devient le carbone carboxylique.",
        "correct": true,
        "explanation": "Bilan R-MgX + CO2 → R-COOH."
      },
      {
        "content": "Le produit final contient un carbone de moins que R.",
        "correct": false,
        "explanation": "Il en contient un de plus."
      }
    ],
    "explanation": "La carboxylation se distingue des hydrolyses par un gain d'une unité carbone."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare carboxylation et décarboxylation. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La carboxylation d'un organomagnésien consomme CO2.",
        "correct": true,
        "explanation": "Réactif."
      },
      {
        "content": "La décarboxylation libère CO2.",
        "correct": true,
        "explanation": "Produit."
      },
      {
        "content": "La première ajoute un carbone au squelette de R.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "La seconde retire un carbone au squelette organique.",
        "correct": true,
        "explanation": "Bilan."
      }
    ],
    "explanation": "Ces deux transformations sont opposées du point de vue du bilan carbone."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule acide contient la configuration carbonylée favorable décrite dans la fiche. Que faut-il retenir ?",
    "choices": [
      {
        "content": "Une décarboxylation peut être facilitée.",
        "correct": true,
        "explanation": "Point structural du support."
      },
      {
        "content": "La réaction peut être chimique.",
        "correct": true,
        "explanation": "Voie possible."
      },
      {
        "content": "La réaction peut être enzymatique.",
        "correct": true,
        "explanation": "Voie possible."
      },
      {
        "content": "Le bilan implique une perte de CO2.",
        "correct": true,
        "explanation": "Définition."
      }
    ],
    "explanation": "La décarboxylation combine reconnaissance structurale et bilan carbone."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans la partie acides nucléiques, quelles relations électroniques sont correctes ?",
    "choices": [
      {
        "content": "Base → donneuse d'électrons.",
        "correct": true,
        "explanation": "Définition du support."
      },
      {
        "content": "Acide → accepteur d'électrons.",
        "correct": true,
        "explanation": "Définition du support."
      },
      {
        "content": "Base nucléique → nucléophile.",
        "correct": true,
        "explanation": "Propriété donnée."
      },
      {
        "content": "Dérivé halogéné de l'exemple toxicologique → électrophile.",
        "correct": true,
        "explanation": "Propriété donnée."
      }
    ],
    "explanation": "Le chapitre réutilise le couple donneur/accepteur pour expliquer une interaction chimique avec les bases nucléiques."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels repères distinguent nucléosides et nucléotides dans la fiche ?",
    "choices": [
      {
        "content": "Les nucléosides représentés associent une base et un sucre.",
        "correct": true,
        "explanation": "Schémas du support."
      },
      {
        "content": "Le ribose est associé à l'ARN.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Le 2-désoxyribose est associé à l'ADN.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Le phosphate des nucléotides est responsable de leur acidité.",
        "correct": true,
        "explanation": "Point du support."
      }
    ],
    "explanation": "Cette synthèse relie structure des sucres et acidité du phosphate."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux transformations qui modifient le nombre de carbones du squelette organique dans les bilans du chapitre.",
    "choices": [
      {
        "content": "Carboxylation d'un organomagnésien par CO2.",
        "correct": true,
        "explanation": "Gain d'un carbone."
      },
      {
        "content": "Décarboxylation.",
        "correct": true,
        "explanation": "Perte d'un carbone."
      },
      {
        "content": "Hydrolyse d'un ester.",
        "correct": false,
        "explanation": "Pas de changement du squelette acyle dans le bilan simplifié."
      },
      {
        "content": "Hydrolyse d'une amide.",
        "correct": false,
        "explanation": "Pas de gain/perte carbonée dans le bilan donné."
      }
    ],
    "explanation": "Les deux transformations opposées sur le bilan carbone sont carboxylation et décarboxylation."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un dérivé activé est plus électrophile qu'un acide carboxylique dans le modèle de la fiche.",
        "correct": true,
        "explanation": "Activation."
      },
      {
        "content": "Nitrile → amide → acide.",
        "correct": true,
        "explanation": "Hydrolyse."
      },
      {
        "content": "Une décarboxylation libère CO2.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Une base nucléique est décrite comme nucléophile.",
        "correct": true,
        "explanation": "Propriété."
      },
      {
        "content": "Le phosphate est responsable de l'acidité des nucléotides.",
        "correct": true,
        "explanation": "Acides nucléiques."
      },
      {
        "content": "L'organomagnésien doit avoir un carbone de plus que l'acide cible.",
        "correct": false,
        "explanation": "Un de moins."
      },
      {
        "content": "La décarboxylation ajoute un carbone.",
        "correct": false,
        "explanation": "Elle en retire un."
      },
      {
        "content": "Le ribose est associé à l'ADN dans la fiche.",
        "correct": false,
        "explanation": "ARN."
      },
      {
        "content": "Un dérivé halogéné est décrit comme nucléophile dans l'exemple toxicologique.",
        "correct": false,
        "explanation": "Électrophile."
      },
      {
        "content": "L'hydrolyse d'une amide donne un alcool.",
        "correct": false,
        "explanation": "Elle donne une amine et un acide."
      }
    ],
    "explanation": "Cette question croise les quatre sections thématiques."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une stratégie comporte d'abord une carboxylation d'un organomagnésien à 4 carbones, puis une décarboxylation unique du produit obtenu. Si l'on raisonne uniquement sur le nombre de carbones :",
    "choices": [
      {
        "content": "Après carboxylation, le produit acide compte 5 carbones.",
        "correct": true,
        "explanation": "CO2 apporte un carbone."
      },
      {
        "content": "Après décarboxylation, le produit organique peut revenir à 4 carbones.",
        "correct": true,
        "explanation": "Perte d'une unité."
      },
      {
        "content": "Les deux opérations ont des effets opposés.",
        "correct": true,
        "explanation": "+1 puis −1."
      },
      {
        "content": "Le bilan final impose 6 carbones.",
        "correct": false,
        "explanation": "Ce n'est pas le résultat du comptage."
      }
    ],
    "explanation": "La question teste le bilan carbone sans supposer une voie synthétique réelle particulière."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On veut choisir entre un acide carboxylique et un dérivé activé pour un couplage, en restant dans le modèle de la fiche. Quelles propositions sont pertinentes ?",
    "choices": [
      {
        "content": "L'acide est décrit comme peu électrophile.",
        "correct": true,
        "explanation": "Faible réactivité."
      },
      {
        "content": "Le dérivé activé rend le carbone plus électrophile.",
        "correct": true,
        "explanation": "But de l'activation."
      },
      {
        "content": "L'électronégativité du nouveau groupement fragilise la liaison selon le support.",
        "correct": true,
        "explanation": "Explication donnée."
      },
      {
        "content": "Le dérivé activé est donc présenté comme plus favorable au couplage.",
        "correct": true,
        "explanation": "Rendement augmenté."
      }
    ],
    "explanation": "La notion d'activation doit être reliée à l'objectif réactionnel."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un précurseur nitrile à 6 carbones est hydrolysé jusqu'à l'acide, puis cet acide subit une décarboxylation unique. Quelles propositions sont cohérentes avec les bilans du support ?",
    "choices": [
      {
        "content": "L'hydrolyse passe par une amide.",
        "correct": true,
        "explanation": "Nitrile → amide → acide."
      },
      {
        "content": "L'acide issu de l'hydrolyse conserve 6 carbones dans le schéma simplifié.",
        "correct": true,
        "explanation": "Pas de gain/perte indiquée."
      },
      {
        "content": "La décarboxylation conduit ensuite à un produit organique à 5 carbones.",
        "correct": true,
        "explanation": "Perte d'un carbone."
      },
      {
        "content": "La première étape utilise obligatoirement CO2.",
        "correct": false,
        "explanation": "CO2 intervient dans la carboxylation, pas l'hydrolyse du nitrile."
      }
    ],
    "explanation": "Cette séquence croise deux transformations distinctes du chapitre."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une base nucléique est exposée à un dérivé halogéné dans le modèle toxicologique du support. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La base nucléique est le partenaire nucléophile.",
        "correct": true,
        "explanation": "Riche en électrons."
      },
      {
        "content": "Le dérivé halogéné est le partenaire électrophile.",
        "correct": true,
        "explanation": "Rôle attribué."
      },
      {
        "content": "Une réaction peut modifier la base nucléique.",
        "correct": true,
        "explanation": "Conséquence décrite."
      },
      {
        "content": "La fiche associe ces modifications à des propriétés mutagènes/cancérigènes.",
        "correct": true,
        "explanation": "Lien explicite."
      }
    ],
    "explanation": "La question reprend le raisonnement chimique utilisé par la fiche pour expliquer la toxicité."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un étudiant affirme : « un nucléotide est acide parce que sa base nucléique est un électrophile ». Quelles corrections correspondent à la fiche ?",
    "choices": [
      {
        "content": "Les bases nucléiques sont décrites comme nucléophiles, pas comme électrophiles.",
        "correct": true,
        "explanation": "Propriété."
      },
      {
        "content": "Le phosphate est responsable de l'acidité du nucléotide.",
        "correct": true,
        "explanation": "Point explicite."
      },
      {
        "content": "Le phosphate est comparé au carboxylate.",
        "correct": true,
        "explanation": "Comparaison du support."
      },
      {
        "content": "La phrase initiale attribue donc l'acidité au mauvais groupement.",
        "correct": true,
        "explanation": "C'est le phosphate qui est mis en avant."
      }
    ],
    "explanation": "La fiche distingue nucléophilie de la base et acidité portée par le phosphate."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On veut préparer un acide à 7 carbones sans apporter de carbone extérieur. Quelles voies sont compatibles avec le tableau si l'on dispose du précurseur fonctionnel correspondant à 7 carbones ?",
    "choices": [
      {
        "content": "Oxydation d'un alcool primaire.",
        "correct": true,
        "explanation": "Pas de gain carboné explicite."
      },
      {
        "content": "Hydrolyse d'un ester.",
        "correct": true,
        "explanation": "Squelette acyle conservé."
      },
      {
        "content": "Hydrolyse d'une amide.",
        "correct": true,
        "explanation": "Squelette acyle conservé."
      },
      {
        "content": "Carboxylation d'un organomagnésien à 7 carbones.",
        "correct": false,
        "explanation": "Elle donnerait un acide à 8 carbones."
      }
    ],
    "explanation": "Le bilan carbone permet d'écarter la carboxylation si l'on ne veut pas ajouter d'unité."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une molécule organique à 8 carbones perd une molécule de CO2 par voie enzymatique. Quelles propositions sont compatibles avec la fiche ?",
    "choices": [
      {
        "content": "Il s'agit d'une décarboxylation.",
        "correct": true,
        "explanation": "Perte de CO2."
      },
      {
        "content": "Le produit organique compte 7 carbones.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "La voie enzymatique est prévue par la définition.",
        "correct": true,
        "explanation": "Explicitement citée."
      },
      {
        "content": "La réaction correspond à une hydrolyse de nitrile.",
        "correct": false,
        "explanation": "Ce n'est pas le critère donné."
      }
    ],
    "explanation": "Le mode enzymatique ne change pas le bilan définissant la décarboxylation."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Un organomagnésien à 9 carbones est carboxylé par CO2. Combien de carbones possède l'acide final ?",
    "answer": {
      "type": "number",
      "value": 10,
      "tolerance": 0
    },
    "explanation": "Le CO2 apporte un carbone supplémentaire."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel type de dérivé d'acide obtient-on, dans la nomenclature de la fiche, lorsque le groupe OH de RCOOH est remplacé par un halogène X ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "halogénure d'acide",
        "halogenure d'acide",
        "halogénure acide",
        "halogenure acide"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le remplacement de OH par X forme un halogénure d'acide."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions relient correctement les deux usages de la notion « acide » dans le chapitre ?",
    "choices": [
      {
        "content": "Un acide carboxylique peut libérer un proton.",
        "correct": true,
        "explanation": "Définition protonique."
      },
      {
        "content": "Dans la définition électronique de la partie II, un acide capte des électrons.",
        "correct": true,
        "explanation": "Définition donnée."
      },
      {
        "content": "Ces deux formulations apparaissent toutes deux dans la fiche.",
        "correct": true,
        "explanation": "Le chapitre utilise les deux cadres."
      },
      {
        "content": "Il faut donc lire chaque question selon le cadre explicitement indiqué.",
        "correct": true,
        "explanation": "Principe éditorial nécessaire pour respecter le support."
      }
    ],
    "explanation": "La fiche juxtapose deux cadres d'acidité ; les questions les contextualisent au lieu de les fusionner silencieusement."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un composé du chapitre est riche en électrons et peut réagir avec un électrophile. Quelles propositions permettent de l'identifier comme une base nucléique dans le cadre de la fiche ?",
    "choices": [
      {
        "content": "Le comportement est celui d'un nucléophile.",
        "correct": true,
        "explanation": "Propriété des bases nucléiques."
      },
      {
        "content": "Des atomes d'azote et d'oxygène sont cités comme constituants riches en électrons.",
        "correct": true,
        "explanation": "Description du support."
      },
      {
        "content": "Une réaction avec un dérivé halogéné électrophile peut modifier la base.",
        "correct": true,
        "explanation": "Application toxicologique."
      },
      {
        "content": "Le groupement phosphate du nucléotide est un autre élément du chapitre, responsable de l'acidité des nucléotides.",
        "correct": true,
        "explanation": "Distinction structure/réactivité."
      }
    ],
    "explanation": "La dernière partie du cours associe propriétés électroniques des bases et acidité des nucléotides sans les confondre."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes selon la fiche rémoise.",
    "choices": [
      {
        "content": "Acide carboxylique > alcool > -CH2-CO- dans la hiérarchie d'acidité donnée.",
        "correct": true,
        "explanation": "Hiérarchie."
      },
      {
        "content": "Un dérivé activé est plus électrophile que l'acide correspondant.",
        "correct": true,
        "explanation": "Activation."
      },
      {
        "content": "Organomagnésien + CO2 → acide avec un carbone de plus.",
        "correct": true,
        "explanation": "Carboxylation."
      },
      {
        "content": "Une décarboxylation peut être enzymatique.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Le ribose est associé à l'ARN.",
        "correct": true,
        "explanation": "Nucléosides."
      },
      {
        "content": "Le nitrile est hydrolysé directement en alcool sans intermédiaire.",
        "correct": false,
        "explanation": "Il passe par une amide."
      },
      {
        "content": "Une décarboxylation consomme CO2.",
        "correct": false,
        "explanation": "Elle le libère."
      },
      {
        "content": "Le 2-désoxyribose est associé à l'ARN.",
        "correct": false,
        "explanation": "ADN."
      },
      {
        "content": "Le phosphate n'a aucun rôle dans l'acidité des nucléotides.",
        "correct": false,
        "explanation": "Il en est responsable selon la fiche."
      },
      {
        "content": "Les bases nucléiques sont décrites comme de bons électrophiles.",
        "correct": false,
        "explanation": "Elles sont nucléophiles."
      }
    ],
    "explanation": "Le MASTER final mobilise les points de vigilance et les raisonnements transversaux du chapitre."
  }
];
