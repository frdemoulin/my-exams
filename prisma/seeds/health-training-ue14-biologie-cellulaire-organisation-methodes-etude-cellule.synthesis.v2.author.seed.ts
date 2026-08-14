import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

export const UE14_CELL_CH1_SYNTHESIS_V2: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse — croisez « la définition de la cellule » et « les conditions d’incubation de la fiche ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La cellule est présentée comme la plus petite unité vivante.",
        "correct": true,
        "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
      },
      {
        "content": "Elle indique 5 % de CO2.",
        "correct": true,
        "explanation": "Les repères locaux d’incubation sont 37 °C, 5 % CO2 et 80–85 % d’humidité."
      },
      {
        "content": "La cellule est décrite comme une structure sans frontière avec le milieu extérieur.",
        "correct": false,
        "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
      },
      {
        "content": "Elle impose 50 % de CO2.",
        "correct": false,
        "explanation": "Les repères locaux d’incubation sont 37 °C, 5 % CO2 et 80–85 % d’humidité."
      }
    ],
    "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane. Les repères locaux d’incubation sont 37 °C, 5 % CO2 et 80–85 % d’humidité."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse — croisez « les fonctions générales de la cellule » et « la durée de vie des cultures normales ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La production d’énergie et les échanges avec l’extérieur sont cités.",
        "correct": true,
        "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
      },
      {
        "content": "Le support donne l’ordre de grandeur de quelques semaines.",
        "correct": true,
        "explanation": "La fiche oppose la durée de vie limitée des cellules normales à l’immortalité de certaines lignées."
      },
      {
        "content": "La communication cellulaire est explicitement exclue.",
        "correct": false,
        "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
      },
      {
        "content": "La fiche attribue une durée de vie infinie à toutes les cultures primaires.",
        "correct": false,
        "explanation": "La fiche oppose la durée de vie limitée des cellules normales à l’immortalité de certaines lignées."
      }
    ],
    "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire. La fiche oppose la durée de vie limitée des cellules normales à l’immortalité de certaines lignées."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse — croisez « l’observation et la manipulation des cultures » et « les modèles cellulaires 3D ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le support peut être en verre ou en polycarbonate pour certaines cellules.",
        "correct": true,
        "explanation": "Le support associe microscope inversé, PSM et supports adaptés à la culture."
      },
      {
        "content": "Les cellules peuvent être replacées dans une matrice extracellulaire.",
        "correct": true,
        "explanation": "Les modèles 3D cherchent à rapprocher l’organisation de celle observée in vivo."
      },
      {
        "content": "La fiche interdit tout support solide pour les cellules adhérentes.",
        "correct": false,
        "explanation": "Le support associe microscope inversé, PSM et supports adaptés à la culture."
      },
      {
        "content": "Un modèle 3D signifie obligatoirement une monocouche plane.",
        "correct": false,
        "explanation": "Les modèles 3D cherchent à rapprocher l’organisation de celle observée in vivo."
      }
    ],
    "explanation": "Le support associe microscope inversé, PSM et supports adaptés à la culture. Les modèles 3D cherchent à rapprocher l’organisation de celle observée in vivo."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse — croisez « les lignées cellulaires tumorales ou transformées » et « l’immunomarquage ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Des cellules tumorales peuvent donner des lignées à capacité illimitée de division.",
        "correct": true,
        "explanation": "La fiche associe les lignées immortelles aux cellules tumorales ou à une transformation oncogénique."
      },
      {
        "content": "Un anticorps anti-X reconnaît une partie appelée épitope.",
        "correct": true,
        "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
      },
      {
        "content": "Une lignée tumorale est toujours limitée à un seul passage.",
        "correct": false,
        "explanation": "La fiche associe les lignées immortelles aux cellules tumorales ou à une transformation oncogénique."
      },
      {
        "content": "L’épitope est une partie du fluorochrome et non de l’antigène.",
        "correct": false,
        "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
      }
    ],
    "explanation": "La fiche associe les lignées immortelles aux cellules tumorales ou à une transformation oncogénique. La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse — croisez « la culture en interface air-liquide » et « l’électroporation ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elles sont ensuite placées en interface air-liquide.",
        "correct": true,
        "explanation": "L’interface air-liquide est présentée comme un modèle de différenciation épithéliale."
      },
      {
        "content": "Elle constitue une alternative à la transfection dans la séquence GFP.",
        "correct": true,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      },
      {
        "content": "La confluence doit être évitée dans ce modèle selon la fiche.",
        "correct": false,
        "explanation": "L’interface air-liquide est présentée comme un modèle de différenciation épithéliale."
      },
      {
        "content": "La fiche l’utilise uniquement pour fixer les cellules.",
        "correct": false,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      }
    ],
    "explanation": "L’interface air-liquide est présentée comme un modèle de différenciation épithéliale. L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse — croisez « le fluorochrome Alexa 488 dans l’exemple d’immunofluorescence » et « les principaux éléments chimiques cellulaires ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les anticorps non liés sont éliminés par lavage.",
        "correct": true,
        "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
      },
      {
        "content": "Les quatre éléments principaux cités sont le carbone, l’hydrogène, l’oxygène et l’azote.",
        "correct": true,
        "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
      },
      {
        "content": "Le lavage sert à éliminer les anticorps liés spécifiquement.",
        "correct": false,
        "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
      },
      {
        "content": "L’hélium remplace l’hydrogène parmi les quatre éléments principaux de la fiche.",
        "correct": false,
        "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
      }
    ],
    "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage. Le support cite C, H, O et N comme composants chimiques principaux."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse — croisez « la micro-injection de protéines marquées » et « les étapes de la vie cellulaire citées ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une protéine purifiée peut être couplée à un fluorochrome et/ou à de l’or colloïdal.",
        "correct": true,
        "explanation": "La micro-injection permet de suivre une protéine préalablement marquée."
      },
      {
        "content": "La différenciation et la migration sont citées.",
        "correct": true,
        "explanation": "La fiche relie les fonctions cellulaires à croissance, division, différenciation, migration et mort."
      },
      {
        "content": "La micro-injection est réalisée uniquement dans une cellule déjà détruite.",
        "correct": false,
        "explanation": "La micro-injection permet de suivre une protéine préalablement marquée."
      },
      {
        "content": "La migration est décrite comme impossible pour toute cellule.",
        "correct": false,
        "explanation": "La fiche relie les fonctions cellulaires à croissance, division, différenciation, migration et mort."
      }
    ],
    "explanation": "La micro-injection permet de suivre une protéine préalablement marquée. La fiche relie les fonctions cellulaires à croissance, division, différenciation, migration et mort."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse — croisez « la proportion d’eau dans la cellule selon la fiche » et « la cryoconservation ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La fraction non aqueuse est présentée autour de 30 %.",
        "correct": true,
        "explanation": "Le repère local est environ 70 % d’eau."
      },
      {
        "content": "La fiche indique que leur patrimoine génétique peut être conservé.",
        "correct": true,
        "explanation": "La cryothèque permet de conserver des cellules pour un usage ultérieur."
      },
      {
        "content": "L’eau représente moins de 5 % de la cellule.",
        "correct": false,
        "explanation": "Le repère local est environ 70 % d’eau."
      },
      {
        "content": "La fiche interdit toute remise en culture après congélation.",
        "correct": false,
        "explanation": "La cryothèque permet de conserver des cellules pour un usage ultérieur."
      }
    ],
    "explanation": "Le repère local est environ 70 % d’eau. La cryothèque permet de conserver des cellules pour un usage ultérieur."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Synthèse — sélectionnez exactement les trois affirmations correctes.",
    "requiredSelectionCount": 3,
    "choices": [
      {
        "content": "L’immunomarquage repose sur l’affinité d’un anticorps pour un antigène.",
        "correct": true,
        "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
      },
      {
        "content": "L’excitation à 488 nm permet l’observation de la protéine d’intérêt dans l’exemple.",
        "correct": true,
        "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
      },
      {
        "content": "Elle peut permettre de localiser un ADN ou un ARN d’intérêt dans une cellule fixée.",
        "correct": true,
        "explanation": "La sonde d’hybridation détecte une séquence nucléotidique complémentaire."
      },
      {
        "content": "La GFP ne peut être utilisée que sur des cellules mortes depuis plusieurs jours.",
        "correct": false,
        "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
      },
      {
        "content": "La transfection détruit nécessairement la membrane plasmique.",
        "correct": false,
        "explanation": "La formulation locale associe transfection, encapsidation de l’ADN recombinant et fusion membranaire."
      },
      {
        "content": "La fiche l’utilise uniquement pour fixer les cellules.",
        "correct": false,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      }
    ],
    "explanation": "Cette question croise plusieurs repères de la section."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "question": "Synthèse — sélectionnez exactement les cinq affirmations correctes.",
    "requiredSelectionCount": 5,
    "choices": [
      {
        "content": "La fiche cite la GFP.",
        "correct": true,
        "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
      },
      {
        "content": "Cette structure fusionne ensuite avec la membrane plasmique.",
        "correct": true,
        "explanation": "La formulation locale associe transfection, encapsidation de l’ADN recombinant et fusion membranaire."
      },
      {
        "content": "Elle constitue une alternative à la transfection dans la séquence GFP.",
        "correct": true,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      },
      {
        "content": "Une protéine purifiée peut être couplée à un fluorochrome et/ou à de l’or colloïdal.",
        "correct": true,
        "explanation": "La micro-injection permet de suivre une protéine préalablement marquée."
      },
      {
        "content": "L’hybridation in situ est utilisée sur cellules fixées.",
        "correct": true,
        "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
      },
      {
        "content": "Suivre une protéine dans une cellule vivante impose obligatoirement un immunomarquage après fixation.",
        "correct": false,
        "explanation": "La comparaison des méthodes aide à choisir la stratégie expérimentale adaptée."
      },
      {
        "content": "La cellule est décrite comme une structure sans frontière avec le milieu extérieur.",
        "correct": false,
        "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
      },
      {
        "content": "Le sodium, le potassium, le calcium et le chlore sont les quatre seuls éléments cités.",
        "correct": false,
        "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
      }
    ],
    "explanation": "La sélection longue vérifie plusieurs notions de la section simultanément."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez « les principaux éléments chimiques cellulaires », « les fonctions générales de la cellule » et « la culture primaire ».",
    "choices": [
      {
        "content": "Les quatre éléments principaux cités sont le carbone, l’hydrogène, l’oxygène et l’azote.",
        "correct": true,
        "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
      },
      {
        "content": "La production d’énergie et les échanges avec l’extérieur sont cités.",
        "correct": true,
        "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
      },
      {
        "content": "Une culture primaire doit nécessairement provenir d’une lignée immortelle commerciale.",
        "correct": false,
        "explanation": "La fiche décrit plusieurs origines possibles pour une culture primaire."
      },
      {
        "content": "Les macromolécules ne contiennent aucun des quatre éléments principaux.",
        "correct": false,
        "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
      }
    ],
    "explanation": "Le support cite C, H, O et N comme composants chimiques principaux. Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire. La fiche décrit plusieurs origines possibles pour une culture primaire."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez « la définition de la culture cellulaire », « les explants » et « le fluorochrome Alexa 488 dans l’exemple d’immunofluorescence ».",
    "choices": [
      {
        "content": "Les cellules sont isolées de leur environnement naturel.",
        "correct": true,
        "explanation": "La fiche définit la culture comme un maintien/multiplication ex vivo dans un milieu artificiel."
      },
      {
        "content": "La fiche cite un lambeau cilié nasal et un fragment de vaisseau sanguin comme exemples.",
        "correct": true,
        "explanation": "L’explant maintient un fragment tissulaire comme point de départ de la culture."
      },
      {
        "content": "L’excitation citée est 488 µm.",
        "correct": false,
        "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
      },
      {
        "content": "La culture cellulaire impose de conserver les cellules dans leur organisme.",
        "correct": false,
        "explanation": "La fiche définit la culture comme un maintien/multiplication ex vivo dans un milieu artificiel."
      }
    ],
    "explanation": "La fiche définit la culture comme un maintien/multiplication ex vivo dans un milieu artificiel. L’explant maintient un fragment tissulaire comme point de départ de la culture. Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez « les lignées cellulaires tumorales ou transformées », « les protéines autofluorescentes » et « les fonctions générales de la cellule ».",
    "choices": [
      {
        "content": "Une lignée peut aussi provenir de la transformation d’une cellule normale par un oncogène.",
        "correct": true,
        "explanation": "La fiche associe les lignées immortelles aux cellules tumorales ou à une transformation oncogénique."
      },
      {
        "content": "La fiche cite la GFP.",
        "correct": true,
        "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
      },
      {
        "content": "La cellule ne transporte aucune molécule en son sein.",
        "correct": false,
        "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
      },
      {
        "content": "Le terme immortel signifie que la cellule ne se divise jamais.",
        "correct": false,
        "explanation": "La fiche associe les lignées immortelles aux cellules tumorales ou à une transformation oncogénique."
      }
    ],
    "explanation": "La fiche associe les lignées immortelles aux cellules tumorales ou à une transformation oncogénique. La stratégie GFP permet de suivre une protéine chimérique produite par la cellule. Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez « la différence entre modèle in vitro et situation in vivo », « les fonctions générales de la cellule » et « les cellules dissociées en 2D ».",
    "choices": [
      {
        "content": "La culture in vitro isole les cellules de leur environnement naturel.",
        "correct": true,
        "explanation": "La fiche présente la culture comme une simplification expérimentale utile, avec des modèles plus ou moins proches de l’in vivo."
      },
      {
        "content": "La production d’énergie et les échanges avec l’extérieur sont cités.",
        "correct": true,
        "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
      },
      {
        "content": "Une culture 2D impose une organisation sphérique multicouche.",
        "correct": false,
        "explanation": "Le modèle 2D est une culture en monocouche de cellules dissociées."
      },
      {
        "content": "Une culture ne modifie jamais l’environnement de la cellule.",
        "correct": false,
        "explanation": "La fiche présente la culture comme une simplification expérimentale utile, avec des modèles plus ou moins proches de l’in vivo."
      }
    ],
    "explanation": "La fiche présente la culture comme une simplification expérimentale utile, avec des modèles plus ou moins proches de l’in vivo. Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire. Le modèle 2D est une culture en monocouche de cellules dissociées."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez « l’électroporation », « les explants » et « la compatibilité des méthodes avec cellules vivantes ou fixées ».",
    "choices": [
      {
        "content": "Elle peut servir à introduire la construction génétique dans une cellule.",
        "correct": true,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      },
      {
        "content": "La fiche cite un lambeau cilié nasal et un fragment de vaisseau sanguin comme exemples.",
        "correct": true,
        "explanation": "L’explant maintient un fragment tissulaire comme point de départ de la culture."
      },
      {
        "content": "L’hybridation in situ est réservée aux cellules vivantes.",
        "correct": false,
        "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
      },
      {
        "content": "L’électroporation est une technique d’hybridation in situ.",
        "correct": false,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      }
    ],
    "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique. L’explant maintient un fragment tissulaire comme point de départ de la culture. Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez « les proportions de macromolécules indiquées dans la fiche », « les protéines autofluorescentes » et « la cryoconservation ».",
    "choices": [
      {
        "content": "Elle cite environ 1 % d’ADN.",
        "correct": true,
        "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche."
      },
      {
        "content": "La fiche cite la GFP.",
        "correct": true,
        "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
      },
      {
        "content": "La fiche interdit toute remise en culture après congélation.",
        "correct": false,
        "explanation": "La cryothèque permet de conserver des cellules pour un usage ultérieur."
      },
      {
        "content": "Les protéines sont données à 1 % et l’ADN à 15 %.",
        "correct": false,
        "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche."
      }
    ],
    "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche. La stratégie GFP permet de suivre une protéine chimérique produite par la cellule. La cryothèque permet de conserver des cellules pour un usage ultérieur."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Maîtrise de synthèse — Réponse numérique : quelle température d’incubation en °C est indiquée pour les cultures cellulaires ?",
    "answer": {
      "type": "number",
      "value": 37,
      "tolerance": 0
    },
    "explanation": "Les repères locaux d’incubation sont 37 °C, 5 % CO2 et 80–85 % d’humidité."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez « l’intérêt clinique des explants cité dans la fiche », « les explants » et « les grandes structures cellulaires ».",
    "choices": [
      {
        "content": "La dyskinésie ciliaire est citée comme contexte d’étude.",
        "correct": true,
        "explanation": "La fiche donne deux applications directement reliées à l’observation clinique ou pharmacologique."
      },
      {
        "content": "La fiche cite un lambeau cilié nasal et un fragment de vaisseau sanguin comme exemples.",
        "correct": true,
        "explanation": "L’explant maintient un fragment tissulaire comme point de départ de la culture."
      },
      {
        "content": "Les mitochondries sont présentées comme des structures extracellulaires.",
        "correct": false,
        "explanation": "La fiche dresse un panorama introductif des grands compartiments et structures."
      },
      {
        "content": "La fiche relie l’explant cilié au dosage de l’hémoglobine.",
        "correct": false,
        "explanation": "La fiche donne deux applications directement reliées à l’observation clinique ou pharmacologique."
      }
    ],
    "explanation": "La fiche donne deux applications directement reliées à l’observation clinique ou pharmacologique. L’explant maintient un fragment tissulaire comme point de départ de la culture. La fiche dresse un panorama introductif des grands compartiments et structures."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez « l’immunomarquage », « les protéines autofluorescentes » et « l’intérêt clinique des explants cité dans la fiche ».",
    "choices": [
      {
        "content": "Dans l’exemple, des anticorps marqués peuvent être détectés par fluorescence.",
        "correct": true,
        "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
      },
      {
        "content": "La fiche cite la GFP.",
        "correct": true,
        "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
      },
      {
        "content": "Un explant vasculaire ne peut jamais servir à étudier une réponse pharmacologique.",
        "correct": false,
        "explanation": "La fiche donne deux applications directement reliées à l’observation clinique ou pharmacologique."
      },
      {
        "content": "L’épitope est une partie du fluorochrome et non de l’antigène.",
        "correct": false,
        "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
      }
    ],
    "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps. La stratégie GFP permet de suivre une protéine chimérique produite par la cellule. La fiche donne deux applications directement reliées à l’observation clinique ou pharmacologique."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez « la compatibilité des méthodes avec cellules vivantes ou fixées », « les fonctions générales de la cellule » et « la micro-injection de protéines marquées ».",
    "choices": [
      {
        "content": "Dans le tableau de la fiche, l’immunomarquage est utilisé sur cellules fixées.",
        "correct": true,
        "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
      },
      {
        "content": "La production d’énergie et les échanges avec l’extérieur sont cités.",
        "correct": true,
        "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
      },
      {
        "content": "La micro-injection est réalisée uniquement dans une cellule déjà détruite.",
        "correct": false,
        "explanation": "La micro-injection permet de suivre une protéine préalablement marquée."
      },
      {
        "content": "La GFP est incompatible avec toute cellule vivante.",
        "correct": false,
        "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
      }
    ],
    "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant. Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire. La micro-injection permet de suivre une protéine préalablement marquée."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Maîtrise de synthèse — sélectionnez exactement les trois affirmations correctes.",
    "requiredSelectionCount": 3,
    "choices": [
      {
        "content": "La fiche cite membrane, cytoplasme et cytosquelette.",
        "correct": true,
        "explanation": "La fiche dresse un panorama introductif des grands compartiments et structures."
      },
      {
        "content": "La production d’énergie et les échanges avec l’extérieur sont cités.",
        "correct": true,
        "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
      },
      {
        "content": "La mort cellulaire figure parmi les étapes listées.",
        "correct": true,
        "explanation": "La fiche relie les fonctions cellulaires à croissance, division, différenciation, migration et mort."
      },
      {
        "content": "La fiche attribue les microvillosités intestinales à l’hématie.",
        "correct": false,
        "explanation": "La morphologie cellulaire est reliée à la fonction ; l’entérocyte est l’exemple d’une cellule absorbante."
      },
      {
        "content": "Une culture cellulaire exclut tout milieu nutritif artificiel.",
        "correct": false,
        "explanation": "La fiche définit la culture comme un maintien/multiplication ex vivo dans un milieu artificiel."
      },
      {
        "content": "L’humidité est donnée à moins de 10 %.",
        "correct": false,
        "explanation": "Les repères locaux d’incubation sont 37 °C, 5 % CO2 et 80–85 % d’humidité."
      }
    ],
    "explanation": "Cette question croise plusieurs repères de la section."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "question": "Maîtrise de synthèse — sélectionnez exactement les cinq affirmations correctes.",
    "requiredSelectionCount": 5,
    "choices": [
      {
        "content": "Les cellules non utilisées peuvent être congelées dans une cryothèque.",
        "correct": true,
        "explanation": "La cryothèque permet de conserver des cellules pour un usage ultérieur."
      },
      {
        "content": "Elle peut provenir de tissus normaux ou tumoraux.",
        "correct": true,
        "explanation": "La fiche décrit plusieurs origines possibles pour une culture primaire."
      },
      {
        "content": "Après le premier passage, la fiche parle de culture secondaire.",
        "correct": true,
        "explanation": "Le passage cellulaire est résumé dans la fiche par « décoller les cellules et repiquer »."
      },
      {
        "content": "Les cellules provenant de tissus normaux finissent par mourir après plusieurs passages.",
        "correct": true,
        "explanation": "La fiche oppose la durée de vie limitée des cellules normales à l’immortalité de certaines lignées."
      },
      {
        "content": "La fiche qualifie ces lignées d’immortelles.",
        "correct": true,
        "explanation": "La fiche associe les lignées immortelles aux cellules tumorales ou à une transformation oncogénique."
      },
      {
        "content": "La fiche ne donne aucun exemple clinique d’explant.",
        "correct": false,
        "explanation": "L’explant maintient un fragment tissulaire comme point de départ de la culture."
      },
      {
        "content": "La fiche relie l’explant cilié au dosage de l’hémoglobine.",
        "correct": false,
        "explanation": "La fiche donne deux applications directement reliées à l’observation clinique ou pharmacologique."
      },
      {
        "content": "Les cellules dissociées ne peuvent jamais adhérer à un support.",
        "correct": false,
        "explanation": "Le modèle 2D est une culture en monocouche de cellules dissociées."
      }
    ],
    "explanation": "La sélection longue vérifie plusieurs notions de la section simultanément."
  }
];
