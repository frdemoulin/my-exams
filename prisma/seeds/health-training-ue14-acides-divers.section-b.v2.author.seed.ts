import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.7 – Section B – Préparation des acides carboxyliques
 */

export const UE14_CH11_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles voies permettent de préparer un acide carboxylique dans les transformations étudiées ?",
    "choices": [
      {
        "content": "Oxydation d'un alcool primaire.",
        "correct": true,
        "explanation": "Une oxydation suffisamment poussée d’un alcool primaire conduit à l’acide carboxylique correspondant."
      },
      {
        "content": "Hydrolyse d'un ester.",
        "correct": true,
        "explanation": "L’hydrolyse d’un ester régénère l’acide carboxylique du fragment acyle et libère l’alcool correspondant au groupe $\\ce{OR'}$."
      },
      {
        "content": "Hydrolyse d'une amide.",
        "correct": true,
        "explanation": "L’hydrolyse d’une amide conduit, dans le bilan simplifié, à un acide carboxylique et une amine."
      },
      {
        "content": "Hydrogénation d'un alcane.",
        "correct": false,
        "explanation": "Les voies étudiées vers un acide carboxylique comprennent l’oxydation d’un alcool primaire, l’hydrolyse d’un ester ou d’une amide, l’hydrolyse d’un nitrile et la carboxylation d’un organomagnésien."
      },
      {
        "content": "L’hydrolyse d’un nitrile conduit directement à un alcane sans intermédiaire fonctionnel.",
        "correct": false,
        "explanation": "Le bilan présenté passe par une amide avant d’aboutir à l’acide."
      }
    ],
    "explanation": "Les voies étudiées vers un acide carboxylique comprennent l’oxydation d’un alcool primaire, l’hydrolyse d’un ester ou d’une amide, l’hydrolyse d’un nitrile et la carboxylation d’un organomagnésien."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel produit acide obtient-on par oxydation suffisamment poussée d’un alcool primaire ?",
    "choices": [
      {
        "content": "Une cétone.",
        "correct": false,
        "explanation": "Une cétone est obtenue par oxydation d’un alcool secondaire, pas par oxydation poussée d’un alcool primaire."
      },
      {
        "content": "Une amide.",
        "correct": false,
        "explanation": "Une oxydation suffisamment poussée d’un alcool primaire conduit à l’acide carboxylique correspondant sans ajout de carbone extérieur."
      },
      {
        "content": "Un nitrile.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool primaire n’introduit pas de groupe nitrile ; une oxydation suffisamment poussée conduit à l’acide carboxylique."
      },
      {
        "content": "Un ammonium quaternaire.",
        "correct": false,
        "explanation": "Une oxydation suffisamment poussée d’un alcool primaire conduit à l’acide carboxylique correspondant sans ajout de carbone extérieur."
      },
      {
        "content": "Un acide carboxylique.",
        "correct": true,
        "explanation": "Une oxydation suffisamment poussée d’un alcool primaire conduit à l’acide carboxylique correspondant sans ajout de carbone extérieur."
      }
    ],
    "explanation": "Une oxydation suffisamment poussée d’un alcool primaire conduit à l’acide carboxylique correspondant sans ajout de carbone extérieur."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'hydrolyse d'un ester conduit:",
    "choices": [
      {
        "content": "À un alcool.",
        "correct": true,
        "explanation": "Lors de l’hydrolyse d’un ester, le groupe $\\ce{OR'}$ est libéré sous forme d’alcool $\\ce{R'OH}$."
      },
      {
        "content": "À une rupture de la fonction ester.",
        "correct": true,
        "explanation": "L’hydrolyse d’un ester donne un acide carboxylique et un alcool, sans modifier le nombre de carbones du fragment acyle."
      },
      {
        "content": "À une augmentation d’un carbone du squelette acyle.",
        "correct": false,
        "explanation": "L’hydrolyse d’un ester donne un acide carboxylique et un alcool, sans modifier le nombre de carbones du fragment acyle."
      },
      {
        "content": "À une amine comme seul produit organique.",
        "correct": false,
        "explanation": "L’hydrolyse d’un ester donne un acide carboxylique et un alcool, sans modifier le nombre de carbones du fragment acyle."
      },
      {
        "content": "À un acide carboxylique.",
        "correct": true,
        "explanation": "L’hydrolyse d’un ester donne un acide carboxylique et un alcool, sans modifier le nombre de carbones du fragment acyle."
      }
    ],
    "explanation": "L’hydrolyse d’un ester donne un acide carboxylique et un alcool, sans modifier le nombre de carbones du fragment acyle."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la saponification des esters, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La saponification correspond à une hydrogénation d’un ester.",
        "correct": false,
        "explanation": "La saponification concerne ici les esters ; elle n’est pas présentée comme une hydrogénation."
      },
      {
        "content": "Elle n’est pas mentionnée parmi les voies de préparation des acides.",
        "correct": false,
        "explanation": "La saponification des esters figure bien parmi les voies de préparation des acides, même si elle n’est pas développée."
      },
      {
        "content": "Seul le bilan global est considéré, sans mécanisme détaillé.",
        "correct": true,
        "explanation": "Le point à retenir est l’existence de cette voie ; aucun mécanisme détaillé n’est fourni."
      },
      {
        "content": "Son mécanisme détaillé est indispensable pour répondre aux questions de bilan.",
        "correct": false,
        "explanation": "Le mécanisme n’étant pas développé, il n’est pas nécessaire pour répondre aux questions portant sur le bilan."
      },
      {
        "content": "Il ne faut donc pas exiger des détails mécanistiques absents.",
        "correct": true,
        "explanation": "La saponification est simplement signalée comme voie de préparation des acides, sans détail mécanistique."
      }
    ],
    "explanation": "La saponification des esters est mentionnée comme voie de préparation des acides, mais son mécanisme n’est pas développé."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'hydrolyse d'une amide conduit, dans le bilan:",
    "choices": [
      {
        "content": "À un alcool uniquement.",
        "correct": false,
        "explanation": "L’hydrolyse d’une amide rompt la fonction amide et conduit, dans le bilan simplifié, à un acide carboxylique et une amine."
      },
      {
        "content": "À une rupture de la fonction amide.",
        "correct": true,
        "explanation": "L’hydrolyse d’une amide rompt la fonction amide et conduit, dans le bilan simplifié, à un acide carboxylique et une amine."
      },
      {
        "content": "À un alcool et un acide carboxylique.",
        "correct": false,
        "explanation": "L’hydrolyse d’une amide conduit à une amine et un acide carboxylique, pas à un alcool."
      },
      {
        "content": "À une amine.",
        "correct": true,
        "explanation": "L’hydrolyse d’une amide libère une amine dans le bilan simplifié."
      },
      {
        "content": "À un acide carboxylique.",
        "correct": true,
        "explanation": "L’hydrolyse d’une amide forme également l’acide carboxylique correspondant."
      }
    ],
    "explanation": "L’hydrolyse d’une amide rompt la fonction amide et conduit, dans le bilan simplifié, à un acide carboxylique et une amine."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'hydrolyse des nitriles:",
    "choices": [
      {
        "content": "Le nitrile ne conduit pas d'abord à une amide.",
        "correct": false,
        "explanation": "L’hydrolyse d’un nitrile conduit d’abord à une amide intermédiaire avant de se poursuivre vers l’acide carboxylique."
      },
      {
        "content": "L'amide conduit ensuite à un acide.",
        "correct": true,
        "explanation": "Lors de l’hydrolyse d’un nitrile, l’amide est un intermédiaire qui est ensuite hydrolysé en acide carboxylique."
      },
      {
        "content": "Le bilan global est nitrile → amide → acide.",
        "correct": true,
        "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire avant d’aboutir à l’acide carboxylique."
      },
      {
        "content": "Le nitrile est hydrolysé directement en alcane.",
        "correct": false,
        "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire et conserve le carbone du groupe nitrile jusqu’au carboxyle."
      },
      {
        "content": "L’oxydation d’un alcool primaire peut conduire à un acide carboxylique.",
        "correct": true,
        "explanation": "En poursuivant l’oxydation au-delà de l’aldéhyde, on atteint la fonction acide carboxylique."
      }
    ],
    "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire avant de conduire à l’acide carboxylique, sans perte de carbone."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel intermédiaire fonctionnel se forme entre un nitrile et l’acide carboxylique lors de l’hydrolyse ?",
    "choices": [
      {
        "content": "Amide.",
        "correct": true,
        "explanation": "L’amide est l’intermédiaire fonctionnel de l’hydrolyse du nitrile avant formation de l’acide."
      },
      {
        "content": "Thioester.",
        "correct": false,
        "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire avant de conduire à l’acide carboxylique, sans perte de carbone."
      },
      {
        "content": "Organomagnésien.",
        "correct": false,
        "explanation": "Cette proposition ne respecte pas le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ et son gain d’une unité carbone."
      },
      {
        "content": "Ammonium quaternaire.",
        "correct": false,
        "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire avant de conduire à l’acide carboxylique, sans perte de carbone."
      },
      {
        "content": "Alcène.",
        "correct": false,
        "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire avant de conduire à l’acide carboxylique, sans perte de carbone."
      }
    ],
    "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire avant de conduire à l’acide carboxylique, sans perte de carbone."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la carboxylation d'un organomagnésien par le dioxyde de carbone:",
    "choices": [
      {
        "content": "Le produit final est un acide carboxylique.",
        "correct": true,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "$\\ce{CO2}$ apporte un atome de carbone au produit final.",
        "correct": true,
        "explanation": "Le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ incorpore le carbone du $\\ce{CO2}$ dans la fonction carboxylique."
      },
      {
        "content": "Le nombre de carbones diminue d'une unité.",
        "correct": false,
        "explanation": "La carboxylation par $\\ce{CO2}$ ajoute au contraire une unité carbone au squelette de l’organomagnésien."
      },
      {
        "content": "Pour obtenir un acide à cinq carbones, il faut utiliser un organomagnésien à cinq carbones.",
        "correct": false,
        "explanation": "Le $\\ce{CO2}$ apporte le cinquième carbone ; le fragment R doit donc n’en comporter que quatre."
      },
      {
        "content": "L'organomagnésien ne réagit pas avec $\\ce{CO2}$.",
        "correct": false,
        "explanation": "Cette proposition ne respecte pas le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ et son gain d’une unité carbone."
      }
    ],
    "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Pour préparer un acide à 4 carbones par la voie organomagnésienne, combien de carbones doit contenir le fragment carboné de l'organomagnésien?",
    "choices": [
      {
        "content": "2.",
        "correct": false,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "3.",
        "correct": true,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "4.",
        "correct": false,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "5.",
        "correct": false,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "6.",
        "correct": false,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      }
    ],
    "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions résument correctement le bilan carbone de la carboxylation par CO2?",
    "choices": [
      {
        "content": "Le carbone du CO2 devient le carbone de la fonction carboxylique dans le produit.",
        "correct": true,
        "explanation": "Le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ incorpore le carbone du $\\ce{CO2}$ dans la fonction carboxylique."
      },
      {
        "content": "Deux carbones sont perdus.",
        "correct": false,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "Un organomagnésien peut réagir avec $\\ce{CO2}$ pour conduire à un acide carboxylique après traitement approprié.",
        "correct": true,
        "explanation": "Le carbone du dioxyde de carbone est incorporé au squelette sous forme du carbone carboxylique."
      },
      {
        "content": "Le squelette de R n’est pas conservé.",
        "correct": false,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "Un carbone supplémentaire provient de CO2.",
        "correct": true,
        "explanation": "Le carbone du $\\ce{CO2}$ devient le carbone du nouveau groupe carboxyle, ce qui ajoute une unité carbone au squelette."
      }
    ],
    "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On veut préparer un acide carboxylique à partir d'un ester. Quelles conclusions sont cohérentes?",
    "choices": [
      {
        "content": "Une hydrolyse est une voie.",
        "correct": true,
        "explanation": "L’hydrolyse d’un ester donne un acide carboxylique et un alcool, sans modifier le nombre de carbones du fragment acyle."
      },
      {
        "content": "Un alcool est également formé dans le bilan.",
        "correct": true,
        "explanation": "L’hydrolyse d’un ester donne un acide carboxylique et un alcool, sans modifier le nombre de carbones du fragment acyle."
      },
      {
        "content": "La fonction ester est rompue.",
        "correct": true,
        "explanation": "L’hydrolyse d’un ester donne un acide carboxylique et un alcool, sans modifier le nombre de carbones du fragment acyle."
      },
      {
        "content": "Le squelette carboné de l'acide doit obligatoirement gagner un carbone.",
        "correct": false,
        "explanation": "Ce gain caractérise la voie organomagnésien + CO2."
      },
      {
        "content": "L’hydrolyse d’un ester impose une perte de $\\ce{CO2}$.",
        "correct": false,
        "explanation": "L’hydrolyse d’un ester conserve le squelette du fragment acyle et ne correspond ni à une perte de $\\ce{CO2}$ ni à un gain de carbone."
      }
    ],
    "explanation": "L’hydrolyse d’un ester donne un acide carboxylique et un alcool, sans modifier le nombre de carbones du fragment acyle."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare hydrolyse d'un ester et hydrolyse d'une amide. Quelles associations sont exactes?",
    "choices": [
      {
        "content": "Les deux donnent nécessairement un alcool.",
        "correct": false,
        "explanation": "L'amide donne une amine dans le bilan."
      },
      {
        "content": "L’hydrolyse d’une amide libère un alcool.",
        "correct": false,
        "explanation": "Une amide hydrolysée donne un acide et une amine ; elle ne libère pas un alcool comme produit azoté."
      },
      {
        "content": "Ester → acide + alcool.",
        "correct": true,
        "explanation": "L’hydrolyse d’un ester donne un acide carboxylique et un alcool, sans modifier le nombre de carbones du fragment acyle."
      },
      {
        "content": "Amide → acide + amine.",
        "correct": true,
        "explanation": "L’hydrolyse d’un ester donne un acide carboxylique et un alcool, sans modifier le nombre de carbones du fragment acyle."
      },
      {
        "content": "Les deux donnent un acide carboxylique.",
        "correct": true,
        "explanation": "Les deux voies considérées ont pour produit final une fonction acide carboxylique, même si leurs précurseurs diffèrent."
      }
    ],
    "explanation": "L’hydrolyse d’un ester donne un acide carboxylique et un alcool, sans modifier le nombre de carbones du fragment acyle."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une fonction nitrile est hydrolysée jusqu'à l'acide. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L'acide final possède le même carbone fonctionnel que celui du nitrile initial dans le schéma.",
        "correct": true,
        "explanation": "Le carbone du groupe nitrile devient le carbone du carboxyle."
      },
      {
        "content": "Le carbone du groupe nitrile devient le carbone du groupe carboxyle : le squelette carboné est donc conservé.",
        "correct": true,
        "explanation": "Le bilan de l’hydrolyse est nitrile → amide → acide carboxylique, sans perte de carbone."
      },
      {
        "content": "Le nitrile doit perdre CO2 avant de former l'acide.",
        "correct": false,
        "explanation": "Ce serait une décarboxylation, non le bilan d'hydrolyse."
      },
      {
        "content": "L’hydrolyse d’un ester peut produire un acide carboxylique et un alcool.",
        "correct": true,
        "explanation": "La rupture de la liaison ester restitue les deux fonctions."
      },
      {
        "content": "Une amide apparaît comme intermédiaire.",
        "correct": true,
        "explanation": "L’amide est l’intermédiaire fonctionnel de l’hydrolyse du nitrile avant formation de l’acide."
      }
    ],
    "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire avant de conduire à l’acide carboxylique, sans perte de carbone."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel enchaînement correspond à l'hydrolyse d'un nitrile vers un acide carboxylique ?",
    "choices": [
      {
        "content": "Nitrile → alcool → alcane.",
        "correct": false,
        "explanation": "L'hydrolyse d'un nitrile ne passe pas par un alcool puis un alcane ; elle conduit vers l'amide puis l'acide."
      },
      {
        "content": "Amide → nitrile → acide.",
        "correct": false,
        "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire avant d’aboutir à l’acide carboxylique."
      },
      {
        "content": "Nitrile → amide → acide.",
        "correct": true,
        "explanation": "L’amide est l’intermédiaire fonctionnel de l’hydrolyse du nitrile avant formation de l’acide."
      },
      {
        "content": "Acide → nitrile → amide.",
        "correct": false,
        "explanation": "L’hydrolyse part du nitrile et évolue vers l’amide puis l’acide ; l’enchaînement proposé est dans le mauvais sens."
      },
      {
        "content": "Ammonium quaternaire.",
        "correct": false,
        "explanation": "Les voies d’hydrolyse et d’oxydation décrites ne visent pas la formation d’un ammonium quaternaire."
      }
    ],
    "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire avant de conduire à l’acide carboxylique, sans perte de carbone."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On souhaite préparer l’acide propanoïque par carboxylation d’un organomagnésien. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le produit final comporte un carbone de plus que R.",
        "correct": true,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "Il faut partir d'un fragment R à 4 carbones.",
        "correct": false,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "Le fragment carboné de l’organomagnésien doit comporter 3 carbones.",
        "correct": false,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "Le fragment carboné de l'organomagnésien doit comporter 2 carbones.",
        "correct": true,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "$\\ce{CO2}$ fournit le carbone carboxylique.",
        "correct": true,
        "explanation": "Le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ incorpore le carbone du $\\ce{CO2}$ dans la fonction carboxylique."
      }
    ],
    "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un organomagnésien contient un fragment carboné R de 5 carbones. Combien de carbones comportera l'acide final après réaction avec CO2 dans le modèle?",
    "answer": {
      "type": "number",
      "value": 6,
      "tolerance": 0
    },
    "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On cherche à préparer un acide à 6 carbones par différentes voies. Quelles propositions sont cohérentes avec les bilans?",
    "choices": [
      {
        "content": "Toutes les voies imposent un gain d'un carbone.",
        "correct": false,
        "explanation": "Seule la carboxylation par CO2 impose ce gain."
      },
      {
        "content": "L’hydrolyse d’un nitrile à six carbones conduit à un acide à cinq carbones.",
        "correct": false,
        "explanation": "L’hydrolyse conserve le carbone du groupe nitrile ; un nitrile à six carbones conduit donc à un acide à six carbones."
      },
      {
        "content": "Un organomagnésien à 5 carbones peut être utilisé avec CO2.",
        "correct": true,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "L'hydrolyse d'un ester correspondant peut donner l'acide.",
        "correct": true,
        "explanation": "L’hydrolyse d’un ester rompt la liaison ester et régénère l’acide carboxylique correspondant."
      },
      {
        "content": "L'hydrolyse d'une amide correspondante peut donner l'acide.",
        "correct": true,
        "explanation": "L’hydrolyse rompt la liaison amide et conduit, dans le bilan simplifié, à un acide carboxylique et à une amine."
      }
    ],
    "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Comment choisir la longueur du fragment carboné d’un organomagnésien lors d’une carboxylation par $\\ce{CO2}$ ?",
    "choices": [
      {
        "content": "Retirer un carbone pour obtenir la taille de R.",
        "correct": true,
        "explanation": "Le $\\ce{CO2}$ apportant le carbone du groupe carboxyle, le radical R doit compter un carbone de moins que l’acide final."
      },
      {
        "content": "Le carbone ajouté n’est pas celui de CO2.",
        "correct": false,
        "explanation": "Cette proposition ne respecte pas le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ et son gain d’une unité carbone."
      },
      {
        "content": "Ajouter deux carbones à la taille de R.",
        "correct": false,
        "explanation": "Le $\\ce{CO2}$ apporte une seule unité carbone ; ajouter deux carbones à la taille du fragment R donnerait un acide trop long."
      },
      {
        "content": "Un organomagnésien peut réagir avec $\\ce{CO2}$ pour conduire à un acide carboxylique après traitement approprié.",
        "correct": true,
        "explanation": "Le carbone du dioxyde de carbone est incorporé au squelette sous forme du carbone carboxylique."
      },
      {
        "content": "Compter les carbones de l'acide final désiré.",
        "correct": true,
        "explanation": "Pour choisir l’organomagnésien, on part du nombre de carbones souhaité dans l’acide final puis on retire l’unité apportée par $\\ce{CO2}$."
      }
    ],
    "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'oxydation d'un alcool primaire vers un acide:",
    "choices": [
      {
        "content": "Cette oxydation nécessite obligatoirement une étape nitrile.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool primaire peut conduire directement vers l’acide carboxylique sans passer par une fonction nitrile."
      },
      {
        "content": "Elle est listée comme voie de préparation.",
        "correct": true,
        "explanation": "L’oxydation d’un alcool primaire fait partie des voies permettant d’obtenir un acide carboxylique."
      },
      {
        "content": "Le produit final est une fonction acide carboxylique.",
        "correct": true,
        "explanation": "Une oxydation suffisamment poussée d’un alcool primaire conduit à l’acide carboxylique correspondant sans ajout de carbone extérieur."
      },
      {
        "content": "Cette voie ne nécessite pas l'apport d'un carbone extérieur dans le bilan simplifié.",
        "correct": true,
        "explanation": "L’oxydation d’un alcool primaire conserve le squelette carboné ; contrairement à la carboxylation, elle n’ajoute pas le carbone d’un $\\ce{CO2}$."
      },
      {
        "content": "Le $\\ce{CO2}$ est obligatoirement un réactif de cette oxydation.",
        "correct": false,
        "explanation": "Cette proposition ne respecte pas le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ et son gain d’une unité carbone."
      }
    ],
    "explanation": "Une oxydation suffisamment poussée d’un alcool primaire conduit à l’acide carboxylique correspondant sans ajout de carbone extérieur."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un étudiant confond hydrolyse de nitrile et carboxylation d'un organomagnésien. Quelles distinctions sont correctes?",
    "choices": [
      {
        "content": "La carboxylation augmente le nombre de carbones d'une unité.",
        "correct": true,
        "explanation": "Lors d’une carboxylation d’un organomagnésien, le carbone du $\\ce{CO2}$ devient celui du groupe carboxyle et allonge le squelette d’une unité."
      },
      {
        "content": "L'hydrolyse du nitrile exige un organomagnésien.",
        "correct": false,
        "explanation": "L’hydrolyse d’un nitrile ne nécessite pas d’organomagnésien ; la carboxylation par $\\ce{CO2}$ constitue une voie distincte."
      },
      {
        "content": "Un organomagnésien peut réagir avec $\\ce{CO2}$ pour conduire à un acide carboxylique après traitement approprié.",
        "correct": true,
        "explanation": "Le carbone du dioxyde de carbone est incorporé au squelette sous forme du carbone carboxylique."
      },
      {
        "content": "Le nitrile passe par une amide.",
        "correct": true,
        "explanation": "L’amide est l’intermédiaire fonctionnel de l’hydrolyse du nitrile avant formation de l’acide."
      },
      {
        "content": "La carboxylation utilise CO2.",
        "correct": true,
        "explanation": "Le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ incorpore le carbone du $\\ce{CO2}$ dans la fonction carboxylique."
      }
    ],
    "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On part d’une amide et l’on veut obtenir l’acide correspondant. Quelles propositions sont compatibles avec cette hydrolyse ?",
    "choices": [
      {
        "content": "Une hydrolyse est utilisée.",
        "correct": true,
        "explanation": "L’hydrolyse rompt la fonction amide et conduit à l’acide carboxylique correspondant."
      },
      {
        "content": "Une amine est libérée dans le bilan simplifié.",
        "correct": true,
        "explanation": "L’hydrolyse d’une amide rompt la fonction amide et conduit, dans le bilan simplifié, à un acide carboxylique et une amine."
      },
      {
        "content": "La fonction acide est créée au niveau du groupement acyle.",
        "correct": true,
        "explanation": "L’hydrolyse transforme le dérivé acylé en fonction acide carboxylique tout en conservant le carbone du groupe acyle."
      },
      {
        "content": "L’ajout de $\\ce{CO2}$ est indispensable à l’hydrolyse.",
        "correct": false,
        "explanation": "Cette proposition ne respecte pas le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ et son gain d’une unité carbone."
      },
      {
        "content": "L’hydrolyse transforme l’amide en ester avant de former l’acide.",
        "correct": false,
        "explanation": "L’hydrolyse d’un ester conserve le squelette du fragment acyle et ne correspond ni à une perte de $\\ce{CO2}$ ni à un gain de carbone."
      }
    ],
    "explanation": "L’hydrolyse d’une amide rompt la fonction amide et conduit, dans le bilan simplifié, à un acide carboxylique et une amine."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel intermédiaire fonctionnel est formé lors de l'hydrolyse d'un nitrile avant l'acide?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "amide",
        "une amide"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire avant de conduire à l’acide carboxylique, sans perte de carbone."
  },
  {
    "order": 45,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare quatre voies vers un acide: oxydation d'un alcool primaire, hydrolyse d'un ester, hydrolyse d'une amide et carboxylation d'un organomagnésien. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L'hydrolyse de l'ester libère un alcool.",
        "correct": true,
        "explanation": "L’hydrolyse d’un ester régénère l’acide carboxylique du fragment acyle et libère l’alcool correspondant au groupe $\\ce{OR'}$."
      },
      {
        "content": "L'hydrolyse de l'amide libère une amine.",
        "correct": true,
        "explanation": "L’hydrolyse d’une amide conduit, dans le bilan simplifié, à un acide carboxylique et une amine."
      },
      {
        "content": "La carboxylation par CO2 augmente la longueur du squelette d'un carbone.",
        "correct": true,
        "explanation": "Le carbone du $\\ce{CO2}$ devient celui du groupe carboxyle ; le squelette gagne donc une unité carbone."
      },
      {
        "content": "L’oxydation d’un alcool primaire nécessite l’ajout de $\\ce{CO2}$.",
        "correct": false,
        "explanation": "L’oxydation poussée d’un alcool primaire ne nécessite ni nitrile ni ajout de $\\ce{CO2}$."
      },
      {
        "content": "Les quatre conduisent à une fonction acide carboxylique.",
        "correct": true,
        "explanation": "Malgré des réactifs différents, les quatre voies recensées convergent vers une fonction acide carboxylique."
      }
    ],
    "explanation": "Les voies étudiées vers un acide carboxylique comprennent l’oxydation d’un alcool primaire, l’hydrolyse d’un ester ou d’une amide, l’hydrolyse d’un nitrile et la carboxylation d’un organomagnésien."
  },
  {
    "order": 46,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un acide final comporte 7 carbones et provient d'une carboxylation par CO2. Que peut-on déduire?",
    "choices": [
      {
        "content": "Le fragment carboné de l’organomagnésien comporte 7 carbones.",
        "correct": false,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "Le fragment carboné de l’organomagnésien ne comporte pas 6 carbones.",
        "correct": false,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "Le carbone supplémentaire provient de CO2.",
        "correct": true,
        "explanation": "Dans la carboxylation d’un organomagnésien, l’unité carbone supplémentaire est fournie par le $\\ce{CO2}$."
      },
      {
        "content": "Le carbone du CO2 devient le carbone carboxylique.",
        "correct": true,
        "explanation": "Dans le bilan $\\ce{R-MgX + CO2 -> R-COOH}$, le carbone du $\\ce{CO2}$ devient directement le carbone du groupe carboxyle."
      },
      {
        "content": "Le fragment carboné de l’organomagnésien comporte 8 carbones.",
        "correct": false,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      }
    ],
    "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
  },
  {
    "order": 47,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On part d'un nitrile à 4 carbones et on l'hydrolyse complètement. Quelles propositions sont cohérentes?",
    "choices": [
      {
        "content": "Le carbone du groupe nitrile devient celui du carboxyle.",
        "correct": true,
        "explanation": "Lecture du schéma nitrile → amide → acide."
      },
      {
        "content": "L'acide final possède nécessairement 5 carbones.",
        "correct": false,
        "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire avant de conduire à l’acide carboxylique, sans perte de carbone."
      },
      {
        "content": "L’hydrolyse du nitrile élimine le carbone du groupe nitrile sous forme de $\\ce{CO2}$.",
        "correct": false,
        "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire et conserve le carbone du groupe nitrile jusqu’au carboxyle."
      },
      {
        "content": "Une amide intermédiaire est formée.",
        "correct": true,
        "explanation": "L’amide est l’intermédiaire fonctionnel de l’hydrolyse du nitrile avant formation de l’acide."
      },
      {
        "content": "L'acide final conserve 4 carbones dans le schéma.",
        "correct": true,
        "explanation": "Aucune perte ou addition de carbone n'est indiquée."
      }
    ],
    "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire avant de conduire à l’acide carboxylique, sans perte de carbone."
  },
  {
    "order": 48,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On souhaite obtenir un acide sans modifier le nombre de carbones du précurseur. Quelles voies sont compatibles avec ce bilan ?",
    "choices": [
      {
        "content": "Oxydation d'un alcool primaire correspondant.",
        "correct": true,
        "explanation": "Une oxydation suffisamment poussée d’un alcool primaire conduit à l’acide carboxylique correspondant."
      },
      {
        "content": "Hydrolyse d'un ester correspondant.",
        "correct": true,
        "explanation": "L’hydrolyse d’un ester régénère l’acide carboxylique du fragment acyle et libère l’alcool correspondant au groupe $\\ce{OR'}$."
      },
      {
        "content": "Hydrolyse d'une amide correspondante.",
        "correct": true,
        "explanation": "L’hydrolyse d’une amide conduit, dans le bilan simplifié, à un acide carboxylique et une amine."
      },
      {
        "content": "Carboxylation d’un organomagnésien de même longueur par $\\ce{CO2}$.",
        "correct": false,
        "explanation": "Cette proposition ne respecte pas le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ et son gain d’une unité carbone."
      },
      {
        "content": "Décarboxylation de l’acide correspondant.",
        "correct": false,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      }
    ],
    "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
  },
  {
    "order": 49,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On dispose d'un organomagnésien à 3 carbones. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le produit final doit avoir 2 carbones.",
        "correct": false,
        "explanation": "Le nombre augmente, il ne diminue pas."
      },
      {
        "content": "L’acide obtenu contient un carbone de plus que le radical carboné de l’organomagnésien.",
        "correct": true,
        "explanation": "La carboxylation incorpore le carbone du $\\ce{CO2}$, si bien que l’acide obtenu possède un carbone de plus que le fragment R."
      },
      {
        "content": "Sa réaction avec CO2 peut conduire à un acide à 4 carbones.",
        "correct": true,
        "explanation": "Un organomagnésien à trois carbones gagne l’unité carbone du $\\ce{CO2}$ et conduit à un acide à quatre carbones."
      },
      {
        "content": "Le carbone carboxylique du produit vient de CO2.",
        "correct": true,
        "explanation": "Le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ incorpore le carbone du $\\ce{CO2}$ dans la fonction carboxylique."
      },
      {
        "content": "La règle impose un organomagnésien ayant un carbone de moins que l'acide final.",
        "correct": true,
        "explanation": "Le $\\ce{CO2}$ apporte un carbone ; l’organomagnésien doit donc en posséder un de moins que l’acide final."
      }
    ],
    "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
  },
  {
    "order": 50,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "La carboxylation d'un organomagnésien à deux carbones par CO2 conduit à l'acide propanoïque représenté ci-dessous. Cliquez sur le carbone apporté par le CO2.",
    "image": {
      "src": "/images/training/ue14/acides-divers/carboxylation-co2-carbone-qzone.svg",
      "alt": "Schéma original de l'acide propanoïque CH3-CH2-COOH avec le carbone carboxylique à droite",
      "width": 1200,
      "height": 500
    },
    "expectedZones": [
      {
        "id": "carbone-co2",
        "label": "Carbone carboxylique apporté par CO2",
        "x": 0.7,
        "y": 0.5,
        "tolerance": 0.09
      }
    ],
    "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une stratégie de synthèse prévoit: nitrile → amide → acide. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le nitrile est converti directement en acide sans intermédiaire.",
        "correct": false,
        "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire et conserve le carbone du groupe nitrile jusqu’au carboxyle."
      },
      {
        "content": "Elle correspond à l'hydrolyse du nitrile.",
        "correct": true,
        "explanation": "L’hydrolyse du nitrile conduit vers l’amide puis vers l’acide carboxylique correspondant."
      },
      {
        "content": "L'amide est un intermédiaire.",
        "correct": true,
        "explanation": "L’amide constitue l’intermédiaire fonctionnel entre le nitrile et l’acide carboxylique."
      },
      {
        "content": "Le produit final est une fonction acide carboxylique.",
        "correct": true,
        "explanation": "La poursuite de l’hydrolyse conduit finalement à la fonction acide carboxylique."
      },
      {
        "content": "Cette voie repose sur une perte obligatoire de CO2.",
        "correct": false,
        "explanation": "L’hydrolyse d’un nitrile n’implique aucune perte de $\\ce{CO2}$ ; elle conserve le squelette carboné."
      }
    ],
    "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire avant de conduire à l’acide carboxylique, sans perte de carbone."
  },
  {
    "order": 52,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quels indices permettent d’identifier une carboxylation d’un organomagnésien par $\\ce{CO2}$ ?",
    "choices": [
      {
        "content": "Le produit est un acide avec un carbone de plus que R.",
        "correct": true,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "Une amide intermédiaire est obligatoire.",
        "correct": false,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "Un organomagnésien peut réagir avec $\\ce{CO2}$ pour conduire à un acide carboxylique après traitement approprié.",
        "correct": true,
        "explanation": "Le carbone du dioxyde de carbone est incorporé au squelette sous forme du carbone carboxylique."
      },
      {
        "content": "Le précurseur est un alcool primaire et non un organomagnésien.",
        "correct": false,
        "explanation": "Cette proposition ne respecte pas le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ et son gain d’une unité carbone."
      },
      {
        "content": "CO2 apparaît comme réactif.",
        "correct": true,
        "explanation": "La présence de $\\ce{CO2}$ comme réactif est caractéristique de la carboxylation d’un organomagnésien."
      }
    ],
    "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On veut préparer l'acide pentanoïque par la voie organomagnésienne. Quelles propositions sont cohérentes?",
    "choices": [
      {
        "content": "Le fragment R doit comporter 4 carbones.",
        "correct": true,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "Le CO2 est incorporé dans la fonction carboxylique.",
        "correct": true,
        "explanation": "Le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ incorpore le carbone du $\\ce{CO2}$ dans la fonction carboxylique."
      },
      {
        "content": "La réaction finale est résumée par R-MgX + CO2 → R-COOH.",
        "correct": true,
        "explanation": "Le carbone nucléophile de $\\ce{R-MgX}$ réagit avec $\\ce{CO2}$ puis, après hydrolyse, donne l’acide $\\ce{R-COOH}$."
      },
      {
        "content": "Le fragment R doit comporter 5 carbones.",
        "correct": false,
        "explanation": "On obtiendrait un acide à 6 carbones."
      },
      {
        "content": "Le fragment carboné de l’organomagnésien doit comporter 6 carbones.",
        "correct": false,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      }
    ],
    "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un acide peut être préparé par hydrolyse d'un ester ou par carboxylation d'un organomagnésien. Quelles différences sont correctes?",
    "choices": [
      {
        "content": "L’hydrolyse d’un ester ajoute un carbone au squelette acyle.",
        "correct": false,
        "explanation": "L’hydrolyse d’un ester conserve le squelette du fragment acyle et ne correspond ni à une perte de $\\ce{CO2}$ ni à un gain de carbone."
      },
      {
        "content": "La carboxylation par $\\ce{CO2}$ conserve strictement le nombre de carbones du fragment R.",
        "correct": false,
        "explanation": "Cette proposition ne respecte pas le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ et son gain d’une unité carbone."
      },
      {
        "content": "L'hydrolyse d'ester libère un alcool.",
        "correct": true,
        "explanation": "L’hydrolyse d’un ester libère l’alcool correspondant au groupe $\\ce{OR'}$."
      },
      {
        "content": "La carboxylation utilise CO2.",
        "correct": true,
        "explanation": "$\ce{CO2}$ fournit le carbone supplémentaire qui devient le carbone du groupe carboxyle."
      },
      {
        "content": "La carboxylation ajoute un carbone au squelette de R.",
        "correct": true,
        "explanation": "L’hydrolyse d’un ester donne un acide carboxylique et un alcool, sans modifier le nombre de carbones du fragment acyle."
      }
    ],
    "explanation": "L’hydrolyse d’un ester donne un acide carboxylique et un alcool, sans modifier le nombre de carbones du fragment acyle."
  },
  {
    "order": 55,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Alcool primaire → acide par oxydation.",
        "correct": true,
        "explanation": "Une oxydation suffisamment poussée d’un alcool primaire conduit à l’acide carboxylique correspondant."
      },
      {
        "content": "Ester → acide + alcool par hydrolyse.",
        "correct": true,
        "explanation": "L’hydrolyse d’un ester régénère l’acide carboxylique du fragment acyle et libère l’alcool correspondant au groupe $\\ce{OR'}$."
      },
      {
        "content": "Amide → amine + acide par hydrolyse.",
        "correct": true,
        "explanation": "L’hydrolyse d’une amide conduit, dans le bilan simplifié, à un acide carboxylique et une amine."
      },
      {
        "content": "Nitrile → amide → acide.",
        "correct": true,
        "explanation": "L’amide est l’intermédiaire fonctionnel de l’hydrolyse du nitrile avant formation de l’acide."
      },
      {
        "content": "Organomagnésien + CO2 → acide avec gain d'un carbone.",
        "correct": true,
        "explanation": "Le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ incorpore le carbone du $\\ce{CO2}$ dans la fonction carboxylique."
      },
      {
        "content": "La saponification est détaillée mécanistiquement.",
        "correct": false,
        "explanation": "La saponification est seulement mentionnée comme hydrolyse basique d’un ester ; son mécanisme détaillé n’est pas développé ici."
      },
      {
        "content": "L’hydrolyse d’un nitrile élimine le carbone du nitrile.",
        "correct": false,
        "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire et conserve le carbone du groupe nitrile jusqu’au carboxyle."
      },
      {
        "content": "L’organomagnésien doit contenir un carbone de plus que l’acide cible.",
        "correct": false,
        "explanation": "La carboxylation ajoute une unité carbone au fragment R ; elle ne diminue pas le squelette."
      },
      {
        "content": "L’hydrolyse d’une amide libère un alcool.",
        "correct": false,
        "explanation": "Une amide hydrolysée donne un acide et une amine ; elle ne libère pas un alcool comme produit azoté."
      },
      {
        "content": "CO2 n'apporte aucun carbone au produit.",
        "correct": false,
        "explanation": "Cette proposition ne respecte pas le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ et son gain d’une unité carbone."
      }
    ],
    "explanation": "Les voies étudiées vers un acide carboxylique comprennent l’oxydation d’un alcool primaire, l’hydrolyse d’un ester ou d’une amide, l’hydrolyse d’un nitrile et la carboxylation d’un organomagnésien."
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Un acide cible contient 8 carbones. Combien de carbones doit contenir le fragment carboné R de l'organomagnésien utilisé avec CO2?",
    "answer": {
      "type": "number",
      "value": 7,
      "tolerance": 0
    },
    "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
  }
];
