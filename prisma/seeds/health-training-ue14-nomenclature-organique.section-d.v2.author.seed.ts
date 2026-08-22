import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.8 – D – Acides, esters et amides
 * Ordres 67–88 (22 questions)
 * Version éditoriale finale : réponses brassées, nomenclature transversale et contrôle des biais.
 */
export const UE14_CH12_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{H-COOH}$ ?",
    "choices": [
      {
        "content": "Acide méthanoïque.",
        "correct": true,
        "explanation": "La fonction principale est un acide carboxylique et le parent comporte un seul carbone : acide méthanoïque."
      },
      {
        "content": "Acide éthanoïque.",
        "correct": false,
        "explanation": "L'acide éthanoïque comporte deux carbones."
      },
      {
        "content": "Méthanol.",
        "correct": false,
        "explanation": "Méthanol désigne un alcool."
      },
      {
        "content": "Méthanal.",
        "correct": false,
        "explanation": "Méthanal désigne un aldéhyde, pas un acide carboxylique."
      },
      {
        "content": "Méthanoate.",
        "correct": false,
        "explanation": "Méthanoate désigne l'anion ou apparaît dans le nom d'un ester ; l'acide libre se nomme acide méthanoïque."
      }
    ],
    "explanation": "Le carbone du groupe $\\ce{-COOH}$ appartient au parent. Un seul carbone donne méthan-, et la fonction principale conduit à « acide …oïque » : acide méthanoïque."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour nommer un acide carboxylique aliphatique simple lorsque $\\ce{-COOH}$ est la fonction principale, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone du groupe $\\ce{-COOH}$ est exclu lorsqu'on compte la longueur de chaîne.",
        "correct": false,
        "explanation": "L'exclure ferait perdre un carbone au parent."
      },
      {
        "content": "Le carbone du groupe carboxyle appartient à la chaîne principale.",
        "correct": true,
        "explanation": "Le carbone carbonylé du groupe $\\ce{-COOH}$ est inclus dans le parent."
      },
      {
        "content": "Le nom utilise la forme « acide …oïque ».",
        "correct": true,
        "explanation": "On obtient par exemple acide éthanoïque ou acide propanoïque."
      },
      {
        "content": "Le suffixe -one est celui d'un acide carboxylique.",
        "correct": false,
        "explanation": "Le suffixe -one correspond à une cétone."
      },
      {
        "content": "Le carbone du groupe carboxyle correspond au carbone 1.",
        "correct": true,
        "explanation": "La fonction acide carboxylique fixe l'origine de la numérotation."
      }
    ],
    "explanation": "Réflexe : $\\ce{-COOH}$ est la fonction principale, son carbone compte dans le parent et vaut C1, puis le nom est construit sous la forme « acide …oïque »."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-CH2-CH2-COOH}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide butanoïque",
        "acide butanoique"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Le carbone du groupe carboxyle est inclus : la chaîne comporte quatre carbones. Le nom est acide butanoïque."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel est le nom systématique de l'ester $\\ce{CH3-C(=O)-O-CH2-CH3}$ ?",
    "choices": [
      {
        "content": "Éthanoate d'éthyle.",
        "correct": true,
        "explanation": "La partie acyle dérive de l'acide éthanoïque et la partie liée à l'oxygène est un groupe éthyle : éthanoate d'éthyle."
      },
      {
        "content": "Éthanoate de méthyle.",
        "correct": false,
        "explanation": "Le groupe porté par l'oxygène contient deux carbones : il s'agit d'éthyle, pas de méthyle."
      },
      {
        "content": "Éthanamide.",
        "correct": false,
        "explanation": "Éthanamide correspond à une fonction amide $\\ce{-CONH2}$."
      },
      {
        "content": "Éthyl éthanoïque.",
        "correct": false,
        "explanation": "La nomenclature de l'ester s'exprime sous la forme « …oate de … »."
      },
      {
        "content": "Propanoate de méthyle.",
        "correct": false,
        "explanation": "La partie acyle ne comporte que deux carbones, carbone carbonylé compris."
      }
    ],
    "explanation": "Pour un ester $\\ce{R-C(=O)-O-R'}$, on nomme d'abord la partie issue de l'acide en « …oate », puis le groupe alkyle $R'$ après « de » : éthanoate d'éthyle."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la nomenclature d'un ester simple $\\ce{R-C(=O)-O-R'}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le groupe carboné lié à l'oxygène fournit le nom placé après « de ».",
        "correct": true,
        "explanation": "Par exemple, $\\ce{-O-CH3}$ donne « de méthyle »."
      },
      {
        "content": "Le carbone carbonylé est inclus dans le comptage de la partie « …oate ».",
        "correct": true,
        "explanation": "Dans éthanoate, les deux carbones comprennent le carbone du groupe carbonyle."
      },
      {
        "content": "Les deux côtés de l'oxygène sont fusionnés en une seule chaîne carbonée continue.",
        "correct": false,
        "explanation": "L'oxygène interrompt la continuité carbonée ; les deux parties sont nommées séparément."
      },
      {
        "content": "La partie contenant le carbone carbonylé fournit le nom en « …oate ».",
        "correct": true,
        "explanation": "Elle correspond à la partie dérivée de l'acide carboxylique."
      },
      {
        "content": "Le groupe alkyle lié à l'oxygène est nommé avant la partie « …oate » dans la forme française utilisée ici.",
        "correct": false,
        "explanation": "On écrit par exemple éthanoate d'éthyle : la partie « …oate » vient d'abord."
      }
    ],
    "explanation": "Méthode d'un ester : repérer $\\ce{C(=O)-O}$, traiter séparément la partie acyle et la partie alkyle liée à l'oxygène, puis assembler « …oate de … »."
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-CH2-C(=O)-O-CH3}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "propanoate de méthyle",
        "propanoate de methyle"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "La partie acyle possède trois carbones, carbone carbonylé compris : propanoate. Le groupe porté par l'oxygène est méthyle. Le nom est propanoate de méthyle."
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{CH3-C(=O)-NH2}$ ?",
    "choices": [
      {
        "content": "Méthanamide.",
        "correct": false,
        "explanation": "La structure comporte deux carbones au total."
      },
      {
        "content": "Éthanamine.",
        "correct": false,
        "explanation": "Une amine ne comporte pas le motif carbonyle-amide $\\ce{C(=O)-N}$."
      },
      {
        "content": "Éthanal.",
        "correct": false,
        "explanation": "Éthanal est un aldéhyde."
      },
      {
        "content": "Éthanamide.",
        "correct": true,
        "explanation": "Le parent contient deux carbones, carbone carbonylé compris, et la fonction principale est une amide : éthanamide."
      },
      {
        "content": "Éthanoate d'ammonium.",
        "correct": false,
        "explanation": "La structure représentée est une amide covalente, pas un sel d'ammonium."
      }
    ],
    "explanation": "Le carbone carbonylé de l'amide appartient au parent. Deux carbones + suffixe -amide donnent éthanamide."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour nommer une amide aliphatique simple lorsque la fonction amide est principale, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le suffixe -amide est utilisé.",
        "correct": true,
        "explanation": "Des noms comme éthanamide ou propanamide utilisent ce suffixe."
      },
      {
        "content": "Le suffixe -amine et le suffixe -amide sont interchangeables.",
        "correct": false,
        "explanation": "Une amine et une amide sont deux fonctions différentes."
      },
      {
        "content": "Le carbone carbonylé est ignoré dans le nombre de carbones du parent.",
        "correct": false,
        "explanation": "Il doit être compté."
      },
      {
        "content": "Le carbone carbonylé de $\\ce{-CONH2}$ appartient au parent.",
        "correct": true,
        "explanation": "Il est inclus dans la chaîne principale."
      },
      {
        "content": "Un substituant porté directement par l'azote peut être localisé par N-.",
        "correct": true,
        "explanation": "Par exemple, $N$-méthyléthanamide signale un méthyle lié à l'azote."
      }
    ],
    "explanation": "Pour les amides : compter le carbone carbonylé dans le parent, utiliser -amide, puis repérer séparément les éventuels substituants portés par l'azote avec N-."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-CH2-C(=O)-NH2}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "propanamide"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Le parent comporte trois carbones en incluant le carbone carbonylé. La fonction principale est une amide : propanamide."
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "À propos de l'ester $\\ce{CH3-CH2-C(=O)-O-CH2-CH3}$, sélectionnez exactement les deux propositions incorrectes.",
    "choices": [
      {
        "content": "La partie « …oate » comporte trois carbones.",
        "correct": false,
        "explanation": "Correct : carbone carbonylé compris, la partie acyle correspond à propanoate."
      },
      {
        "content": "Le carbone carbonylé ne doit pas être compté dans la partie propanoate.",
        "correct": true,
        "explanation": "Incorrect : ce carbone appartient à la partie issue de l'acide et compte dans le parent."
      },
      {
        "content": "Le groupe lié à l'oxygène est un groupe éthyle.",
        "correct": false,
        "explanation": "Correct : $\\ce{-O-CH2-CH3}$ correspond à éthyle."
      },
      {
        "content": "Le nom doit être éthanoate de propyle.",
        "correct": true,
        "explanation": "Incorrect : cette proposition inverse les deux fragments de l'ester."
      },
      {
        "content": "Le nom est propanoate d'éthyle.",
        "correct": false,
        "explanation": "Correct : l'assemblage des deux parties donne propanoate d'éthyle."
      }
    ],
    "explanation": "Pour éviter les inversions, repérer d'abord le carbone carbonylé : son côté fournit « propanoate ». Le groupe attaché à l'oxygène est ensuite nommé « d'éthyle »."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "$\\ce{CH3-C(=O)-NH2}$ : éthanamine.",
        "correct": false,
        "explanation": "Le motif $\\ce{C(=O)-NH2}$ est une amide, pas une amine."
      },
      {
        "content": "$\\ce{CH3-COOH}$ : acide méthanoïque.",
        "correct": false,
        "explanation": "Le carbone du carboxyle compte : il y a deux carbones."
      },
      {
        "content": "$\\ce{CH3-C(=O)-O-CH3}$ : méthanoate d'éthyle.",
        "correct": false,
        "explanation": "Les fragments sont inversés : la partie acyle est éthanoate et la partie O-alkyle est méthyle."
      },
      {
        "content": "$\\ce{CH3-CH2-C(=O)-O-CH3}$ : propanoate de méthyle.",
        "correct": true,
        "explanation": "La partie acyle possède trois carbones et l'alkyle porté par O est méthyle."
      },
      {
        "content": "$\\ce{CH3-CH2-COOH}$ : acide propanoïque.",
        "correct": true,
        "explanation": "Trois carbones au total donnent propanoïque."
      },
      {
        "content": "$\\ce{CH3-C(=O)-NH2}$ : éthanamide.",
        "correct": true,
        "explanation": "Deux carbones et fonction amide : éthanamide."
      },
      {
        "content": "$\\ce{CH3-CH2-COOH}$ : acide éthanoïque.",
        "correct": false,
        "explanation": "La chaîne compte trois carbones, pas deux."
      },
      {
        "content": "$\\ce{CH3-COOH}$ : acide éthanoïque.",
        "correct": true,
        "explanation": "Deux carbones, carbone carboxylique compris : acide éthanoïque."
      },
      {
        "content": "$\\ce{CH3-C(=O)-O-CH3}$ : éthanoate de méthyle.",
        "correct": true,
        "explanation": "Partie acyle éthanoate et groupe méthyle lié à l'oxygène."
      },
      {
        "content": "$\\ce{CH3-CH2-C(=O)-O-CH3}$ : éthanoate d'éthyle.",
        "correct": false,
        "explanation": "La partie acyle possède trois carbones et correspond à propanoate."
      }
    ],
    "explanation": "Ce premier bilan force à compter correctement le carbone carbonylé et à distinguer les trois syntaxes : « acide …oïque », « …oate de … » et « …amide »."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{(CH3)2CH-COOH}$ ?",
    "choices": [
      {
        "content": "Propanoate de méthyle.",
        "correct": false,
        "explanation": "La structure est un acide carboxylique, pas un ester."
      },
      {
        "content": "Acide 2-méthylpropanoïque.",
        "correct": true,
        "explanation": "Le carbone carboxylique est C1, le parent comporte trois carbones et un méthyle est porté par C2."
      },
      {
        "content": "Acide 2-méthylbutanoïque.",
        "correct": false,
        "explanation": "Il n'existe pas ici de chaîne principale continue de quatre carbones incluant le carbone carboxylique."
      },
      {
        "content": "Acide 3-méthylpropanoïque.",
        "correct": false,
        "explanation": "La numérotation commence au carbone carboxylique ; le méthyle est en C2."
      },
      {
        "content": "2-méthylpropanal.",
        "correct": false,
        "explanation": "Le groupe fonctionnel est $\\ce{-COOH}$, pas $\\ce{-CHO}$."
      }
    ],
    "explanation": "Fonction acide → carbone du $\\ce{-COOH}$ = C1 → parent propanoïque → méthyle en C2 : acide 2-méthylpropanoïque."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-CH(CH3)-CH2-COOH}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide 3-méthylbutanoïque",
        "acide 3-methylbutanoique",
        "acide 3-methylbutanoïque",
        "acide 3-méthylbutanoique"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Le carbone carboxylique est C1. La chaîne principale comporte quatre carbones et le substituant méthyle est porté par C3 : acide 3-méthylbutanoïque."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Dans l'ester représenté, cliquez sur le carbone qui constitue le carbone 1 de la partie servant à construire le nom en « …oate ».",
    "image": {
      "src": "/images/training/ue14/chimie/nomenclature-organique/section-d-ester-carbonyl-c1-qzone.svg",
      "alt": "Formule topologique simplifiée d'un ester de type 3-méthylbutanoate de méthyle",
      "width": 1200,
      "height": 500
    },
    "expectedZones": [
      {
        "id": "ester-carbonyl-c1",
        "label": "Carbone carbonylé de la partie carboxylate",
        "x": 0.645,
        "y": 0.56,
        "tolerance": 0.065
      }
    ],
    "explanation": "Dans un ester, le carbone carbonylé appartient à la partie issue de l'acide et constitue son carbone 1. La chaîne servant à former « …oate » est donc comptée à partir de ce carbone."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{CH3-CH(CH3)-CH2-C(=O)-O-CH3}$ ?",
    "choices": [
      {
        "content": "Méthanoate de 3-méthylbutyle.",
        "correct": false,
        "explanation": "Cette réponse inverse les deux fragments de l'ester."
      },
      {
        "content": "3-méthylbutanoate de méthyle.",
        "correct": true,
        "explanation": "Le carbone carbonylé est C1 de la partie butanoate ; le méthyle est en C3 et le groupe lié à l'oxygène est méthyle."
      },
      {
        "content": "3-méthylbutanamide.",
        "correct": false,
        "explanation": "La structure contient $\\ce{-COO-}$, pas $\\ce{-CONH-}$."
      },
      {
        "content": "2-méthylbutanoate de méthyle.",
        "correct": false,
        "explanation": "En comptant depuis le carbone carbonylé C1, le substituant méthyle est en C3."
      },
      {
        "content": "Acide 3-méthylbutanoïque.",
        "correct": false,
        "explanation": "La fonction acide a été estérifiée ; la structure n'est plus un acide carboxylique libre."
      }
    ],
    "explanation": "Méthode de l'ester ramifié : partir du carbone carbonylé C1 pour nommer la partie « …oate », puis nommer séparément le groupe attaché à l'oxygène."
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-C(=O)-O-CH(CH3)2}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "éthanoate de propan-2-yle",
        "ethanoate de propan-2-yle"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "La partie acyle est éthanoate. Le groupe attaché à l'oxygène est propan-2-yle ; le nom systématique est éthanoate de propan-2-yle."
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'ester nommé « 2-méthylpropanoate d'éthyle », quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone carbonylé de l'ester n'est pas compté dans « propanoate ».",
        "correct": false,
        "explanation": "Il est inclus et constitue C1 de cette partie."
      },
      {
        "content": "La partie issue de l'acide possède un parent de trois carbones.",
        "correct": true,
        "explanation": "Propanoate indique trois carbones, carbone carbonylé compris."
      },
      {
        "content": "Un substituant méthyle est porté par le carbone 2 de cette partie.",
        "correct": true,
        "explanation": "Le préfixe 2-méthyl- localise la ramification sur C2."
      },
      {
        "content": "Le nom indique que le groupe éthyle appartient à la chaîne principale de la partie propanoate.",
        "correct": false,
        "explanation": "Les deux fragments sont séparés par l'oxygène de l'ester."
      },
      {
        "content": "Le groupe lié à l'oxygène de l'ester est un groupe éthyle.",
        "correct": true,
        "explanation": "« d'éthyle » décrit le groupe porté par l'oxygène."
      }
    ],
    "explanation": "Lire un ester à rebours : « 2-méthylpropanoate » décrit la partie acyle, tandis que « d'éthyle » décrit le groupe fixé à l'oxygène."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{CH3-C(=O)-NH-CH3}$ ?",
    "choices": [
      {
        "content": "N-méthyléthanamine.",
        "correct": false,
        "explanation": "La présence du groupe carbonyle lié à l'azote caractérise une amide."
      },
      {
        "content": "2-méthyléthanamide.",
        "correct": false,
        "explanation": "Le méthyle n'est pas porté par un carbone du parent ; il est lié à l'azote."
      },
      {
        "content": "N-méthyléthanamide.",
        "correct": true,
        "explanation": "Le parent est éthanamide et le groupe méthyle est porté directement par l'azote : N-méthyléthanamide."
      },
      {
        "content": "Éthanoate de méthylammonium.",
        "correct": false,
        "explanation": "La structure est une amide covalente et non un sel."
      },
      {
        "content": "N-éthylméthanamide.",
        "correct": false,
        "explanation": "Cette proposition choisit incorrectement la partie carbonylée : $\\ce{CH3-CO-}$ correspond à éthanamide."
      }
    ],
    "explanation": "Comme pour les amines N-substituées, N- localise un substituant porté directement par l'azote. Le parent reste ici éthanamide."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-CH2-C(=O)-NH-CH3}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "N-méthylpropanamide",
        "N-methylpropanamide",
        "n-méthylpropanamide",
        "n-methylpropanamide"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "La partie carbonylée fournit le parent propanamide. Le méthyle est directement lié à l'azote : N-méthylpropanamide."
  },
  {
    "order": 86,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant $\\ce{CH3-C(=O)-N(CH3)2}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le préfixe N,N-diméthyl- permet de localiser ces deux substituants.",
        "correct": true,
        "explanation": "N,N- indique que les deux méthyles sont portés par l'azote."
      },
      {
        "content": "Le nom systématique est N,N-diméthyléthanamide.",
        "correct": true,
        "explanation": "C'est l'assemblage correct du parent éthanamide et des deux substituants N-méthyle."
      },
      {
        "content": "L'azote porte deux substituants méthyle.",
        "correct": true,
        "explanation": "Les deux groupes $\\ce{CH3}$ sont directement liés à l'azote."
      },
      {
        "content": "Le nom correct est 2,2-diméthyléthanamide.",
        "correct": false,
        "explanation": "Les groupes méthyle ne sont pas portés par le carbone 2 ; ils sont liés à l'azote."
      },
      {
        "content": "Le parent est éthanamide.",
        "correct": true,
        "explanation": "La partie carbonylée comporte deux carbones, carbone carbonylé compris."
      }
    ],
    "explanation": "Le locant N évite de confondre une substitution sur l'azote avec une ramification du squelette carboné. Ici : N,N-diméthyléthanamide."
  },
  {
    "order": 87,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions incorrectes concernant acides carboxyliques, esters et amides.",
    "choices": [
      {
        "content": "Dans propanamide, le carbone carbonylé est exclu des trois carbones du parent.",
        "correct": true,
        "explanation": "Incorrect : il est inclus dans les trois carbones du parent."
      },
      {
        "content": "Dans éthanoate de méthyle, le groupe méthyle appartient à la chaîne carbonée de l'éthanoate.",
        "correct": true,
        "explanation": "Incorrect : le méthyle est lié à l'oxygène et constitue le second fragment de l'ester."
      },
      {
        "content": "Dans un acide carboxylique simple, le carbone de $\\ce{-COOH}$ appartient au parent.",
        "correct": false,
        "explanation": "Correct : il est inclus dans le comptage."
      },
      {
        "content": "Dans une amide, un substituant porté par l'azote peut être indiqué par N-.",
        "correct": false,
        "explanation": "Correct : N-méthyl- en est un exemple."
      },
      {
        "content": "Dans un ester, le carbone carbonylé appartient à la partie nommée en « …oate ».",
        "correct": false,
        "explanation": "Correct : il constitue C1 de la partie dérivée de l'acide."
      }
    ],
    "explanation": "Le fil directeur est le même dans les trois familles : savoir exactement quels atomes appartiennent au parent et lesquels sont décrits séparément."
  },
  {
    "order": 88,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "$\\ce{CH3-CH2-C(=O)-O-CH2-CH3}$ se nomme propanoate d'éthyle.",
        "correct": true,
        "explanation": "La partie acyle est propanoate et la partie O-alkyle est éthyle."
      },
      {
        "content": "$\\ce{CH3-CH2-C(=O)-O-CH2-CH3}$ se nomme éthanoate de propyle.",
        "correct": false,
        "explanation": "Cette proposition inverse les deux fragments."
      },
      {
        "content": "Dans 3-méthylbutanoate de méthyle, le carbone carbonylé est C1 de la partie butanoate.",
        "correct": true,
        "explanation": "La numérotation de cette partie commence au carbone carbonylé."
      },
      {
        "content": "$\\ce{CH3-CH(CH3)-COOH}$ se nomme acide 3-méthylpropanoïque.",
        "correct": false,
        "explanation": "Le méthyle est en C2 lorsque le carbone carboxylique vaut C1."
      },
      {
        "content": "$\\ce{CH3-C(=O)-NH-CH3}$ se nomme N-méthyléthanamide.",
        "correct": true,
        "explanation": "Le parent est éthanamide et le méthyle est porté par l'azote."
      },
      {
        "content": "Dans N,N-diméthyléthanamide, les deux groupes méthyle sont directement liés à l'azote.",
        "correct": true,
        "explanation": "C'est précisément ce qu'indique N,N-."
      },
      {
        "content": "Dans un acide carboxylique, on peut choisir de ne pas compter le carbone de $\\ce{-COOH}$ si cela donne un nom plus court.",
        "correct": false,
        "explanation": "Le carbone carboxylique appartient obligatoirement au parent et constitue C1."
      },
      {
        "content": "$\\ce{CH3-C(=O)-NH-CH3}$ se nomme 2-méthyléthanamide.",
        "correct": false,
        "explanation": "Le méthyle est porté par l'azote et doit être localisé par N-."
      },
      {
        "content": "Dans un ester, le groupe alkyle lié à l'oxygène est toujours incorporé à la chaîne servant à former « …oate ».",
        "correct": false,
        "explanation": "Il est nommé séparément après « de »."
      },
      {
        "content": "$\\ce{CH3-CH(CH3)-COOH}$ se nomme acide 2-méthylpropanoïque.",
        "correct": true,
        "explanation": "Le carbone carboxylique est C1 et le méthyle est en C2."
      }
    ],
    "explanation": "Cette synthèse PRACTICE mobilise les trois méthodes de nommage et les pièges associés : carbone carbonylé inclus, lecture en deux fragments des esters, et locants N- pour les amides substituées."
  }
];
