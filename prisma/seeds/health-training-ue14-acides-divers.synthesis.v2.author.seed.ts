import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.7 – Synthèse
 */

export const UE14_CH11_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions relient correctement acidité et activation dans le modèle?",
    "choices": [
      {
        "content": "La déprotonation d’un acide carboxylique forme nécessairement un ammonium quaternaire.",
        "correct": false,
        "explanation": "Elle forme un ion carboxylate et ne crée aucun azote."
      },
      {
        "content": "RCOOH peut libérer H+ et former RCOO−.",
        "correct": true,
        "explanation": "Définition protonique: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le carboxylate présente une charge négative délocalisée entre les oxygènes.",
        "correct": true,
        "explanation": "Modèle: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'acide carboxylique est décrit comme peu électrophile.",
        "correct": true,
        "explanation": "Propriété: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un dérivé activé possède un carbone plus électrophile.",
        "correct": true,
        "explanation": "But de l'activation: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La synthèse doit relier dissociation acide, délocalisation et intérêt des dérivés activés."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare un acide carboxylique, un alcool et un carbone de type -CH2-CO- dans la hiérarchie. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le carbone -CH2-CO- est le moins acide des trois.",
        "correct": true,
        "explanation": "Acidité faible: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La hiérarchie est alcool > acide carboxylique > -CH2-CO-.",
        "correct": false,
        "explanation": "L'acide carboxylique est placé en tête."
      },
      {
        "content": "Dans la hiérarchie donnée, un alcool est plus acide qu’un acide carboxylique.",
        "correct": false,
        "explanation": "Le classement du chapitre place l’acide carboxylique au-dessus de l’alcool."
      },
      {
        "content": "L'acide carboxylique n’est pas le plus acide des trois.",
        "correct": false,
        "explanation": "La relation correcte est: « L'acide carboxylique est le plus acide des trois ». La négation proposée est donc fausse."
      },
      {
        "content": "L'alcool occupe la position intermédiaire.",
        "correct": true,
        "explanation": "Acidité moyenne dans cette comparaison."
      }
    ],
    "explanation": "La hiérarchie locale doit pouvoir être restituée sans confondre nature de la fonction et intensité de l'acidité."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un acide cible peut être obtenu par plusieurs voies du chapitre. Quelles associations sont exactes?",
    "choices": [
      {
        "content": "Alcool primaire → acide par oxydation.",
        "correct": true,
        "explanation": "Voie de préparation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Ester → acide + alcool par hydrolyse.",
        "correct": true,
        "explanation": "Voie de préparation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Amide → amine + acide par hydrolyse.",
        "correct": true,
        "explanation": "Voie de préparation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Nitrile → amide → acide.",
        "correct": true,
        "explanation": "Voie de préparation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L’hydrolyse d’un nitrile conduit directement à un alcane sans intermédiaire fonctionnel.",
        "correct": false,
        "explanation": "Le bilan présenté passe par une amide avant d’aboutir à l’acide."
      }
    ],
    "explanation": "La propose plusieurs accès fonctionnels à la fonction acide carboxylique."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On veut obtenir un acide à 5 carbones par carboxylation d'un organomagnésien. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le produit final contient un carbone de moins que R.",
        "correct": false,
        "explanation": "Il en contient un de plus."
      },
      {
        "content": "Un organomagnésien peut réagir avec $\\ce{CO2}$ pour conduire à un acide carboxylique après traitement approprié.",
        "correct": true,
        "explanation": "Le carbone du dioxyde de carbone est incorporé au squelette sous forme du carbone carboxylique."
      },
      {
        "content": "Le fragment R doit contenir 4 carbones.",
        "correct": true,
        "explanation": "Le CO2 apporte le cinquième."
      },
      {
        "content": "CO2 n’est pas consommé.",
        "correct": false,
        "explanation": "La relation correcte est: « CO2 est consommé ». La négation proposée est donc fausse."
      },
      {
        "content": "Le carbone de CO2 devient le carbone carboxylique.",
        "correct": true,
        "explanation": "Bilan R-MgX + CO2 → R-COOH."
      }
    ],
    "explanation": "La carboxylation se distingue des hydrolyses par un gain d'une unité carbone."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare carboxylation et décarboxylation. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "La décarboxylation libère CO2.",
        "correct": true,
        "explanation": "Produit: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La première ajoute un carbone au squelette de R.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "La seconde retire un carbone au squelette organique.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Pour obtenir un acide à cinq carbones, il faut nécessairement utiliser un organomagnésien à six carbones.",
        "correct": false,
        "explanation": "Le réactif organomagnésien doit comporter un carbone de moins que l’acide final."
      },
      {
        "content": "La carboxylation d'un organomagnésien consomme CO2.",
        "correct": true,
        "explanation": "Réactif: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Ces deux transformations sont opposées du point de vue du bilan carbone."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule acide contient la configuration carbonylée favorable décrite. Que faut-il retenir?",
    "choices": [
      {
        "content": "Une décarboxylation ajoute un atome de carbone provenant de $\\ce{CO2}$.",
        "correct": false,
        "explanation": "L’ajout de $\\ce{CO2}$ intervient au contraire dans la carboxylation d’un organomagnésien."
      },
      {
        "content": "Une décarboxylation peut être facilitée.",
        "correct": true,
        "explanation": "Point structural: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La réaction peut être chimique.",
        "correct": true,
        "explanation": "Voie possible: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La réaction peut être enzymatique.",
        "correct": true,
        "explanation": "Voie possible: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le bilan implique une perte de CO2.",
        "correct": true,
        "explanation": "Définition: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La décarboxylation combine reconnaissance structurale et bilan carbone."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans la partie acides nucléiques, quelles relations électroniques sont correctes?",
    "choices": [
      {
        "content": "Base nucléique → nucléophile.",
        "correct": true,
        "explanation": "Les bases nucléiques possèdent des sites riches en électrons qui peuvent se comporter comme des nucléophiles."
      },
      {
        "content": "Dérivé halogéné de l'exemple toxicologique → électrophile.",
        "correct": true,
        "explanation": "Propriété donnée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      },
      {
        "content": "Base → donneuse d'électrons.",
        "correct": true,
        "explanation": "Une base est ici décrite comme une espèce capable de donner un doublet d’électrons."
      },
      {
        "content": "Acide → accepteur d'électrons.",
        "correct": true,
        "explanation": "Définition: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le chapitre réutilise le couple donneur/accepteur pour expliquer une interaction chimique avec les bases nucléiques."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels repères distinguent nucléosides et nucléotides?",
    "choices": [
      {
        "content": "Les nucléosides représentés associent une base et un sucre.",
        "correct": true,
        "explanation": "Un nucléoside associe une base nucléique à un sucre."
      },
      {
        "content": "Le ribose est associé à l'ARN.",
        "correct": true,
        "explanation": "Le ribose constitue le sucre de la série ARN."
      },
      {
        "content": "Le 2-désoxyribose est associé à l'ADN.",
        "correct": true,
        "explanation": "Repère: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le phosphate des nucléotides est responsable de leur acidité.",
        "correct": true,
        "explanation": "Point: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le ribose est le sucre caractéristique de la série ADN dans le cadre présenté.",
        "correct": false,
        "explanation": "Le ribose est associé à l’ARN; l’ADN contient un 2-désoxyribose."
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
        "content": "Hydrolyse d'une amide.",
        "correct": false,
        "explanation": "Pas de gain/perte carbonée dans le bilan donné."
      },
      {
        "content": "Pour obtenir un acide à cinq carbones, il faut nécessairement utiliser un organomagnésien à six carbones.",
        "correct": false,
        "explanation": "Le réactif organomagnésien doit comporter un carbone de moins que l’acide final."
      },
      {
        "content": "Carboxylation d'un organomagnésien par CO2.",
        "correct": true,
        "explanation": "Gain d'un carbone: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Décarboxylation.",
        "correct": true,
        "explanation": "Perte d'un carbone: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Hydrolyse d'un ester.",
        "correct": false,
        "explanation": "Pas de changement du squelette acyle dans le bilan simplifié."
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
        "content": "Un dérivé activé est plus électrophile qu'un acide carboxylique dans le modèle.",
        "correct": true,
        "explanation": "Activation : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Nitrile → amide → acide.",
        "correct": true,
        "explanation": "L’hydrolyse rompt la liaison fonctionnelle en présence d’eau et conduit aux produits indiqués."
      },
      {
        "content": "Une décarboxylation libère CO2.",
        "correct": true,
        "explanation": "Définition : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une base nucléique est décrite comme nucléophile.",
        "correct": true,
        "explanation": "Propriété : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le phosphate est responsable de l'acidité des nucléotides.",
        "correct": true,
        "explanation": "Acides nucléiques : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'organomagnésien doit avoir un carbone de plus que l'acide cible.",
        "correct": false,
        "explanation": "Un de moins : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La décarboxylation ajoute un carbone.",
        "correct": false,
        "explanation": "Elle en retire un : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le ribose est associé à l'ADN.",
        "correct": false,
        "explanation": "ARN : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un dérivé halogéné est décrit comme nucléophile dans l'exemple toxicologique.",
        "correct": false,
        "explanation": "Le centre considéré est déficient en électrons et peut donc être attaqué par un nucléophile."
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
    "question": "Une stratégie comporte d'abord une carboxylation d'un organomagnésien à 4 carbones, puis une décarboxylation unique du produit obtenu. Si l'on raisonne uniquement sur le nombre de carbones:",
    "choices": [
      {
        "content": "Pour obtenir un acide à cinq carbones, il faut nécessairement utiliser un organomagnésien à six carbones.",
        "correct": false,
        "explanation": "Le réactif organomagnésien doit comporter un carbone de moins que l’acide final."
      },
      {
        "content": "Après carboxylation, le produit acide compte 5 carbones.",
        "correct": true,
        "explanation": "CO2 apporte un carbone: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Après décarboxylation, le produit organique peut revenir à 4 carbones.",
        "correct": true,
        "explanation": "Perte d'une unité: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Les deux opérations ont des effets opposés.",
        "correct": true,
        "explanation": "+1 puis −1: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "question": "On veut choisir entre un acide carboxylique et un dérivé activé pour un couplage, en restant dans le modèle. Quelles propositions sont pertinentes?",
    "choices": [
      {
        "content": "L'électronégativité du nouveau groupement fragilise la liaison.",
        "correct": true,
        "explanation": "Explication donnée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le dérivé activé est donc présenté comme plus favorable au couplage.",
        "correct": true,
        "explanation": "Rendement augmenté: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      },
      {
        "content": "L'acide est décrit comme peu électrophile.",
        "correct": true,
        "explanation": "La présence du groupe fonctionnel conditionne la réactivité et les propriétés de cette famille."
      },
      {
        "content": "Le dérivé activé rend le carbone plus électrophile.",
        "correct": true,
        "explanation": "But de l'activation: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La notion d'activation doit être reliée à l'objectif réactionnel."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un précurseur nitrile à 6 carbones est hydrolysé jusqu'à l'acide, puis cet acide subit une décarboxylation unique. Quelles propositions sont cohérentes avec les bilans?",
    "choices": [
      {
        "content": "L'hydrolyse passe par une amide.",
        "correct": true,
        "explanation": "Nitrile → amide → acide."
      },
      {
        "content": "L'acide issu de l'hydrolyse conserve 6 carbones dans le schéma simplifié.",
        "correct": true,
        "explanation": "Cette proposition est écartée: de gain/perte indiquée ne correspond pas au bilan ou à la propriété attendue."
      },
      {
        "content": "La décarboxylation conduit ensuite à un produit organique à 5 carbones.",
        "correct": true,
        "explanation": "Perte d'un carbone: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La première étape utilise obligatoirement CO2.",
        "correct": false,
        "explanation": "CO2 intervient dans la carboxylation, pas l'hydrolyse du nitrile."
      },
      {
        "content": "L’hydrolyse d’un nitrile conduit directement à un alcane sans intermédiaire fonctionnel.",
        "correct": false,
        "explanation": "Le bilan présenté passe par une amide avant d’aboutir à l’acide."
      }
    ],
    "explanation": "Cette séquence croise deux transformations distinctes du chapitre."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une base nucléique est exposée à un dérivé halogéné dans le modèle toxicologique. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "La associe ces modifications à des propriétés mutagènes/cancérigènes.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      },
      {
        "content": "La base nucléique est le partenaire nucléophile.",
        "correct": true,
        "explanation": "Riche en électrons: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le dérivé halogéné est le partenaire électrophile.",
        "correct": true,
        "explanation": "Rôle attribué: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une réaction peut modifier la base nucléique.",
        "correct": true,
        "explanation": "Conséquence décrite: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La question reprend le raisonnement chimique utilisé par la pour expliquer la toxicité."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un étudiant affirme: « un nucléotide est acide parce que sa base nucléique est un électrophile ». Quelles corrections correspondent à la?",
    "choices": [
      {
        "content": "Le phosphate est responsable de l'acidité du nucléotide.",
        "correct": true,
        "explanation": "Cette relation constitue l’un des éléments directement utiles pour prévoir le produit de la réaction."
      },
      {
        "content": "Le phosphate est comparé au carboxylate.",
        "correct": true,
        "explanation": "Comparaison: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La phrase initiale attribue donc l'acidité au mauvais groupement.",
        "correct": true,
        "explanation": "C'est le phosphate qui est mis en avant."
      },
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      },
      {
        "content": "Les bases nucléiques sont décrites comme nucléophiles, pas comme électrophiles.",
        "correct": true,
        "explanation": "Propriété: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La distingue nucléophilie de la base et acidité portée par le phosphate."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On veut préparer un acide à 7 carbones sans apporter de carbone extérieur. Quelles voies sont compatibles avec le tableau si l'on dispose du précurseur fonctionnel correspondant à 7 carbones?",
    "choices": [
      {
        "content": "L’hydrolyse d’un nitrile conduit directement à un alcane sans intermédiaire fonctionnel.",
        "correct": false,
        "explanation": "Le bilan présenté passe par une amide avant d’aboutir à l’acide."
      },
      {
        "content": "Oxydation d'un alcool primaire.",
        "correct": true,
        "explanation": "Pas de gain carboné explicite."
      },
      {
        "content": "Hydrolyse d'un ester.",
        "correct": true,
        "explanation": "Squelette acyle conservé: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Hydrolyse d'une amide.",
        "correct": true,
        "explanation": "Squelette acyle conservé: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "question": "Une molécule organique à 8 carbones perd une molécule de $\\ce{CO2}$ par voie enzymatique. Quelles propositions sont compatibles avec cette décarboxylation ?",
    "choices": [
      {
        "content": "La voie enzymatique est prévue par la définition.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "La réaction correspond à une hydrolyse de nitrile.",
        "correct": false,
        "explanation": "Ce n'est pas le critère donné."
      },
      {
        "content": "Une décarboxylation ajoute un atome de carbone provenant de $\\ce{CO2}$.",
        "correct": false,
        "explanation": "L’ajout de $\\ce{CO2}$ intervient au contraire dans la carboxylation d’un organomagnésien."
      },
      {
        "content": "Il s'agit d'une décarboxylation.",
        "correct": true,
        "explanation": "Perte de CO2: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le produit organique compte 7 carbones.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      }
    ],
    "explanation": "Le mode enzymatique ne change pas le bilan définissant la décarboxylation."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Un organomagnésien à 9 carbones est carboxylé par CO2. Combien de carbones possède l'acide final?",
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
    "question": "Quel type de dérivé d'acide obtient-on, dans la nomenclature, lorsque le groupe OH de RCOOH est remplacé par un halogène X?",
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
    "question": "Quelles propositions relient correctement les deux usages de la notion « acide » dans le chapitre?",
    "choices": [
      {
        "content": "Dans la définition électronique de la partie II, un acide capte des électrons.",
        "correct": true,
        "explanation": "Définition donnée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Ces deux formulations apparaissent toutes deux.",
        "correct": true,
        "explanation": "Le chapitre utilise les deux cadres."
      },
      {
        "content": "Une affirmation doit être interprétée à partir des conditions chimiques explicitement indiquées dans la question.",
        "correct": true,
        "explanation": "Les conditions réactionnelles précisées dans l'énoncé déterminent quelles transformations sont pertinentes."
      },
      {
        "content": "La déprotonation d’un acide carboxylique forme nécessairement un ammonium quaternaire.",
        "correct": false,
        "explanation": "Elle forme un ion carboxylate et ne crée aucun azote."
      },
      {
        "content": "Un acide carboxylique peut libérer un proton.",
        "correct": true,
        "explanation": "Définition protonique: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La juxtapose deux cadres d'acidité; les questions les contextualisent au lieu de les fusionner silencieusement."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un composé du chapitre est riche en électrons et peut réagir avec un électrophile. Quelles propositions permettent de l'identifier comme une base nucléique dans le cadre?",
    "choices": [
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      },
      {
        "content": "Le comportement est celui d'un nucléophile.",
        "correct": true,
        "explanation": "Propriété des bases nucléiques: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Des atomes d'azote et d'oxygène sont cités comme constituants riches en électrons.",
        "correct": true,
        "explanation": "Description: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une réaction avec un dérivé halogéné électrophile peut modifier la base.",
        "correct": true,
        "explanation": "Application toxicologique: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le groupement phosphate du nucléotide est un autre élément du chapitre, responsable de l'acidité des nucléotides.",
        "correct": true,
        "explanation": "La présence du groupe fonctionnel conditionne la réactivité et les propriétés de cette famille."
      }
    ],
    "explanation": "La dernière partie associe propriétés électroniques des bases et acidité des nucléotides sans les confondre."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes rémoise.",
    "choices": [
      {
        "content": "Acide carboxylique > alcool > -CH2-CO- dans la hiérarchie d'acidité donnée.",
        "correct": true,
        "explanation": "Hiérarchie : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un dérivé activé est plus électrophile que l'acide correspondant.",
        "correct": true,
        "explanation": "Activation : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Organomagnésien + CO2 → acide avec un carbone de plus.",
        "correct": true,
        "explanation": "Carboxylation : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une décarboxylation peut être enzymatique.",
        "correct": true,
        "explanation": "Définition : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le ribose est associé à l'ARN.",
        "correct": true,
        "explanation": "Nucléosides : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le nitrile est hydrolysé directement en alcool sans intermédiaire.",
        "correct": false,
        "explanation": "Il passe par une amide."
      },
      {
        "content": "Une décarboxylation consomme CO2.",
        "correct": false,
        "explanation": "Elle le libère : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le 2-désoxyribose est associé à l'ARN.",
        "correct": false,
        "explanation": "ADN : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le phosphate n'a aucun rôle dans l'acidité des nucléotides.",
        "correct": false,
        "explanation": "Il en est responsable : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Les bases nucléiques sont décrites comme de bons électrophiles.",
        "correct": false,
        "explanation": "Elles sont nucléophiles : cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le MASTER final mobilise les points de vigilance et les raisonnements transversaux du chapitre."
  }
];
