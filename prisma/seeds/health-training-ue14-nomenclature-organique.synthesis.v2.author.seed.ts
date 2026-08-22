import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.8 – Synthèse du chapitre – Nomenclature organique
 * Ordres 111–132 (22 questions)
 * Synthèse PRACTICE : ordres 111–120, 10 questions
 * Synthèse MASTER : ordres 121–132, 12 questions
 */

export const UE14_CH12_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 111,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{CH3-CH(CH3)-CH(OH)-CH3}$ ?",
    "choices": [
      {
        "content": "3-méthylbutan-2-ol.",
        "correct": true,
        "explanation": "La chaîne principale comporte quatre carbones et doit donner au groupe hydroxyle le locant 2 ; le méthyle est alors en C3."
      },
      {
        "content": "2-méthylbutan-3-ol.",
        "correct": false,
        "explanation": "La fonction alcool principale doit recevoir le plus petit locant : 2 plutôt que 3."
      },
      {
        "content": "2-méthylbutan-2-ol.",
        "correct": false,
        "explanation": "Le méthyle et le groupe hydroxyle ne sont pas portés par le même carbone dans cette structure."
      },
      {
        "content": "3-méthylbutan-3-ol.",
        "correct": false,
        "explanation": "La numérotation correcte place le groupe hydroxyle en C2."
      },
      {
        "content": "Pentan-2-ol.",
        "correct": false,
        "explanation": "Les cinq carbones totaux ne forment pas une chaîne continue de cinq carbones."
      }
    ],
    "explanation": "Méthode complète : fonction alcool → chaîne principale de quatre carbones → numérotation donnant -OH en C2 → substituant méthyle en C3 → 3-méthylbutan-2-ol."
  },
  {
    "order": 112,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour vérifier un nom de molécule organique avant de le valider, quelles étapes sont pertinentes ?",
    "choices": [
      {
        "content": "Vérifier que la fonction principale a été correctement identifiée.",
        "correct": true,
        "explanation": "Une erreur de priorité fonctionnelle fausse le suffixe, le parent et souvent la numérotation."
      },
      {
        "content": "Vérifier que la chaîne principale respecte la fonction principale.",
        "correct": true,
        "explanation": "Le parent doit être choisi selon les règles correspondant à la fonction principale."
      },
      {
        "content": "Vérifier les locants de la fonction principale, des insaturations et des substituants.",
        "correct": true,
        "explanation": "Les positions doivent être cohérentes avec le sens de numérotation retenu."
      },
      {
        "content": "Relire la correspondance entre préfixes, radical carboné et suffixe.",
        "correct": true,
        "explanation": "Cette relecture permet de détecter une fonction secondaire mal exprimée ou un parent mal nommé."
      },
      {
        "content": "Conserver obligatoirement le sens gauche-droite du dessin initial.",
        "correct": false,
        "explanation": "L'orientation du dessin n'impose jamais la numérotation."
      }
    ],
    "explanation": "La nomenclature est une procédure contrôlable : fonctions → priorité → parent → numérotation → préfixes/substituants → suffixe → relecture."
  },
  {
    "order": 113,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{(CH3)2CH-C(=O)-O-CH3}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "2-méthylpropanoate de méthyle",
        "2-methylpropanoate de methyle",
        "2-methylpropanoate de méthyle",
        "2-méthylpropanoate de methyle"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Le carbone carbonylé est C1 de la partie « …oate ». Le parent est propanoate avec un méthyle en C2 ; le groupe porté par l'oxygène est méthyle. D'où 2-méthylpropanoate de méthyle."
  },
  {
    "order": 114,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "À propos de $\\ce{HO-CH2-CH2-C#N}$, sélectionnez exactement les deux propositions incorrectes.",
    "choices": [
      {
        "content": "Le nitrile est prioritaire sur l'alcool.",
        "correct": false,
        "explanation": "Correct : le nitrile fournit le suffixe principal."
      },
      {
        "content": "Le carbone du groupe $\\ce{C#N}$ constitue C1.",
        "correct": false,
        "explanation": "Correct : ce carbone appartient au parent."
      },
      {
        "content": "Le groupe hydroxyle est exprimé par le préfixe hydroxy-.",
        "correct": false,
        "explanation": "Correct : l'alcool est ici une fonction secondaire."
      },
      {
        "content": "Le nom est 1-cyanoéthanol.",
        "correct": true,
        "explanation": "Incorrect : cette proposition traite à tort l'alcool comme fonction principale."
      },
      {
        "content": "Le parent ne compte que deux carbones car le carbone du nitrile est exclu.",
        "correct": true,
        "explanation": "Incorrect : le carbone du nitrile est inclus, ce qui donne un parent à trois carbones."
      }
    ],
    "explanation": "Le nom attendu est 3-hydroxypropanenitrile : nitrile principal, carbone nitrile C1, alcool secondaire en C3."
  },
  {
    "order": 115,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "$\\ce{CH3-CH2-CHO}$ : propanal.",
        "correct": true,
        "explanation": "Le carbone aldéhydique compte dans le parent de trois carbones."
      },
      {
        "content": "$\\ce{CH3-C(=O)-CH2-CH3}$ : butan-2-one.",
        "correct": true,
        "explanation": "Le carbonyle de la cétone reçoit le locant 2."
      },
      {
        "content": "$\\ce{CH3-CH2-C#N}$ : propanenitrile.",
        "correct": true,
        "explanation": "Le carbone nitrile compte comme C1."
      },
      {
        "content": "$\\ce{CH3-C(=O)-NH-CH3}$ : N-méthyléthanamide.",
        "correct": true,
        "explanation": "Le méthyle est directement porté par l'azote de l'amide."
      },
      {
        "content": "$\\ce{CH3-C(=O)-O-CH2-CH3}$ : éthanoate d'éthyle.",
        "correct": true,
        "explanation": "La partie acyle est éthanoate et le groupe porté par O est éthyle."
      },
      {
        "content": "$\\ce{CH3-CH2-CHO}$ : propan-1-one.",
        "correct": false,
        "explanation": "Le groupe terminal $\\ce{-CHO}$ est un aldéhyde, pas une cétone."
      },
      {
        "content": "$\\ce{CH3-C(=O)-CH2-CH3}$ : butanal.",
        "correct": false,
        "explanation": "Le carbonyle est interne : il s'agit d'une cétone."
      },
      {
        "content": "$\\ce{CH3-CH2-C#N}$ : éthanenitrile.",
        "correct": false,
        "explanation": "Cette proposition oublie le carbone du nitrile."
      },
      {
        "content": "$\\ce{CH3-C(=O)-NH-CH3}$ : 2-méthyléthanamide.",
        "correct": false,
        "explanation": "Le méthyle est porté par l'azote et doit être localisé par N-."
      },
      {
        "content": "$\\ce{CH3-C(=O)-O-CH2-CH3}$ : propanoate de méthyle.",
        "correct": false,
        "explanation": "Les deux fragments de l'ester sont mal identifiés."
      }
    ],
    "explanation": "Cette révision mélange cinq familles et oblige à mobiliser les règles de comptage, de locant et de lecture des fonctions."
  },
  {
    "order": 116,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "La molécule représentée possède une fonction amide et une fonction alcool. Cliquez sur la fonction qui détermine le suffixe principal du nom.",
    "image": {
      "src": "/images/training/ue14/chimie/nomenclature-organique/synthesis-amide-alcohol-priority-qzone.svg",
      "alt": "Structure simplifiée d'une hydroxyamide comportant un groupe alcool et une fonction amide",
      "width": 1200,
      "height": 500
    },
    "expectedZones": [
      {
        "id": "amide-principal-function",
        "label": "Fonction amide prioritaire",
        "x": 0.79,
        "y": 0.5,
        "tolerance": 0.1
      }
    ],
    "explanation": "L'amide est prioritaire sur l'alcool dans l'ordre retenu. Elle fournit le suffixe -amide ; le groupe $\\ce{-OH}$ devient hydroxy-."
  },
  {
    "order": 117,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{HO-CH2-CH(NH2)-CH3}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "2-aminopropan-1-ol"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "L'alcool est prioritaire sur l'amine. Le parent est propan-1-ol et le groupe amino est en C2 : 2-aminopropan-1-ol."
  },
  {
    "order": 118,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Que peut-on déduire du nom « acide 3-oxobutanoïque » ?",
    "choices": [
      {
        "content": "La fonction principale est un acide carboxylique.",
        "correct": true,
        "explanation": "La forme « acide …oïque » indique la fonction principale."
      },
      {
        "content": "Le parent comporte quatre carbones, carbone carboxylique compris.",
        "correct": true,
        "explanation": "Butanoïque correspond à quatre carbones."
      },
      {
        "content": "Le carbone du groupe carboxyle est C1.",
        "correct": true,
        "explanation": "La numérotation part de la fonction acide carboxylique."
      },
      {
        "content": "Un groupe carbonylé secondaire est situé en C3.",
        "correct": true,
        "explanation": "Le préfixe 3-oxo- localise ce groupe carbonyle."
      },
      {
        "content": "La cétone est la fonction principale parce que oxo- apparaît avant le nom du parent.",
        "correct": false,
        "explanation": "Oxo- est précisément un préfixe de fonction secondaire."
      }
    ],
    "explanation": "Lire le nom par blocs permet de reconstruire la hiérarchie : acide principal, parent butanoïque, groupe oxo secondaire en C3."
  },
  {
    "order": 119,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{CH3-C(=O)-CH2-COOH}$ ?",
    "choices": [
      {
        "content": "Acide 3-oxobutanoïque.",
        "correct": true,
        "explanation": "L'acide carboxylique est prioritaire ; son carbone est C1 et le carbonyle secondaire est en C3."
      },
      {
        "content": "Acide 2-oxobutanoïque.",
        "correct": false,
        "explanation": "En comptant depuis le carbone carboxylique C1, le groupe oxo est en C3."
      },
      {
        "content": "4-carboxybutan-2-one.",
        "correct": false,
        "explanation": "Cette proposition traite à tort la cétone comme fonction principale."
      },
      {
        "content": "Butan-2-one-4-oïque.",
        "correct": false,
        "explanation": "On n'assemble pas deux suffixes fonctionnels de cette façon."
      },
      {
        "content": "Acide 3-hydroxybutanoïque.",
        "correct": false,
        "explanation": "La fonction secondaire est un groupe carbonyle, pas un alcool."
      }
    ],
    "explanation": "Acide carboxylique > cétone. La fonction acide impose le suffixe et C1 ; la cétone secondaire devient 3-oxo-."
  },
  {
    "order": 120,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{NH2-CH2-CH2-CHO}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "3-aminopropanal"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "L'aldéhyde est prioritaire sur l'amine. Le carbone aldéhydique est C1 ; l'amine secondaire est en C3 et devient amino-. Le nom est 3-aminopropanal."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{HOOC-CH(NH2)-CH2-OH}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide 2-amino-3-hydroxypropanoïque",
        "acide 2-amino-3-hydroxypropanoique"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "L'acide carboxylique est prioritaire et son carbone est C1. L'amine devient amino- en C2 et l'alcool devient hydroxy- en C3. Les préfixes sont assemblés avant le parent : acide 2-amino-3-hydroxypropanoïque."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Pour nommer correctement une molécule possédant plusieurs fonctions secondaires et plusieurs substituants, quelles vérifications sont utiles ?",
    "choices": [
      {
        "content": "Distinguer les préfixes correspondant à des fonctions secondaires des substituants alkyles ou halogénés.",
        "correct": true,
        "explanation": "Tous apparaissent avant le parent, mais ils ne traduisent pas le même type d'information."
      },
      {
        "content": "Associer chaque préfixe à son locant avant d'assembler le nom.",
        "correct": true,
        "explanation": "Chaque fonction secondaire ou substituant doit être localisé correctement."
      },
      {
        "content": "Respecter l'ordre de présentation prévu pour les préfixes lors de l'assemblage final.",
        "correct": true,
        "explanation": "L'assemblage final doit être cohérent et non dépendre de l'ordre de découverte sur le dessin."
      },
      {
        "content": "Conserver le suffixe de la fonction principale sans ajouter un second suffixe pour chaque autre fonction.",
        "correct": true,
        "explanation": "Les fonctions secondaires sont généralement exprimées par des préfixes."
      },
      {
        "content": "Numéroter chaque fonction indépendamment avec sa propre chaîne principale.",
        "correct": false,
        "explanation": "Le nom final repose sur un parent unique et une numérotation cohérente."
      }
    ],
    "explanation": "Au niveau MASTER, le risque n'est plus seulement d'oublier une règle isolée, mais de perdre la cohérence globale du nom. Toutes les informations doivent converger vers un parent et une numérotation uniques."
  },
  {
    "order": 123,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{CH3-CH(OH)-CH2-C(=O)-O-CH3}$ ?",
    "choices": [
      {
        "content": "3-hydroxybutanoate de méthyle.",
        "correct": true,
        "explanation": "L'ester est prioritaire sur l'alcool. Le carbone carbonylé est C1 de la partie butanoate et le groupe hydroxy est en C3."
      },
      {
        "content": "2-hydroxybutanoate de méthyle.",
        "correct": false,
        "explanation": "En comptant depuis le carbone carbonylé C1, le groupe hydroxyle est porté par C3."
      },
      {
        "content": "Méthanoate de 3-hydroxybutyle.",
        "correct": false,
        "explanation": "Cette proposition inverse la partie acyle et le groupe porté par l'oxygène."
      },
      {
        "content": "4-méthoxy-4-oxobutan-2-ol.",
        "correct": false,
        "explanation": "Cette formulation ne respecte pas le choix de l'ester comme fonction principale dans le cadre étudié."
      },
      {
        "content": "Acide 3-hydroxybutanoïque.",
        "correct": false,
        "explanation": "La fonction carboxylique est estérifiée ; la molécule n'est pas l'acide libre."
      }
    ],
    "explanation": "Ester > alcool. On nomme la partie acyle en partant du carbone carbonylé C1 : butanoate avec hydroxy en C3, puis « de méthyle »."
  },
  {
    "order": 124,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "La molécule représentée porte un acide carboxylique, une cétone et une amine. Cliquez sur l'atome de carbone qui doit être numéroté C1 pour construire le nom.",
    "image": {
      "src": "/images/training/ue14/chimie/nomenclature-organique/synthesis-acid-ketone-amine-c1-qzone.svg",
      "alt": "Structure simplifiée d'un acide carboxylique portant également une cétone et une amine",
      "width": 1200,
      "height": 500
    },
    "expectedZones": [
      {
        "id": "carboxylic-carbon-c1",
        "label": "Carbone du groupe carboxyle, C1",
        "x": 0.82,
        "y": 0.51,
        "tolerance": 0.07
      }
    ],
    "explanation": "L'acide carboxylique est la fonction prioritaire. Son carbone appartient au parent et constitue obligatoirement C1 ; la cétone et l'amine seront exprimées comme fonctions secondaires."
  },
  {
    "order": 125,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions incorrectes à propos de la nomenclature polyfonctionnelle.",
    "choices": [
      {
        "content": "La fonction principale est déterminée avant le choix définitif du suffixe.",
        "correct": false,
        "explanation": "Correct : le suffixe dépend de la fonction principale."
      },
      {
        "content": "Une fonction secondaire peut être traduite par un préfixe tel que hydroxy-, amino-, oxo- ou cyano-.",
        "correct": false,
        "explanation": "Correct : ces préfixes permettent d'exprimer des fonctions devenues secondaires."
      },
      {
        "content": "Le parent et la numérotation doivent rester cohérents avec la fonction principale.",
        "correct": false,
        "explanation": "Correct : c'est un principe central de la méthode."
      },
      {
        "content": "Chaque fonction présente doit obligatoirement conserver son suffixe propre dans le nom final.",
        "correct": true,
        "explanation": "Incorrect : une seule fonction principale fournit le suffixe ; les autres deviennent généralement des préfixes."
      },
      {
        "content": "La fonction dessinée le plus à gauche devient toujours la fonction principale.",
        "correct": true,
        "explanation": "Incorrect : l'orientation du dessin ne joue aucun rôle dans l'ordre de priorité."
      }
    ],
    "explanation": "Le nom polyfonctionnel n'est pas un empilement de suffixes : une fonction principale structure le nom, les autres sont intégrées comme préfixes."
  },
  {
    "order": 126,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "$\\ce{HOOC-CH(NH2)-CH2-OH}$ : acide 2-amino-3-hydroxypropanoïque.",
        "correct": true,
        "explanation": "Acide principal, amino en C2 et hydroxy en C3."
      },
      {
        "content": "$\\ce{HO-CH2-CH2-CHO}$ : 3-hydroxypropanal.",
        "correct": true,
        "explanation": "Aldéhyde principal, carbone aldéhydique C1, hydroxy en C3."
      },
      {
        "content": "$\\ce{CH3-C(=O)-CH(OH)-CH3}$ : 3-hydroxybutan-2-one.",
        "correct": true,
        "explanation": "Cétone principale en C2, hydroxy en C3."
      },
      {
        "content": "$\\ce{NH2-CH2-CH2-COOH}$ : acide 3-aminopropanoïque.",
        "correct": true,
        "explanation": "Acide principal et amino en C3."
      },
      {
        "content": "$\\ce{HO-CH2-CH2-C#N}$ : 3-hydroxypropanenitrile.",
        "correct": true,
        "explanation": "Nitrile principal, carbone nitrile C1, hydroxy en C3."
      },
      {
        "content": "$\\ce{HOOC-CH(NH2)-CH2-OH}$ : 1-carboxy-2-amino-propan-3-ol.",
        "correct": false,
        "explanation": "Cette proposition ne traite pas l'acide carboxylique comme fonction principale."
      },
      {
        "content": "$\\ce{HO-CH2-CH2-CHO}$ : propan-1-al-3-ol.",
        "correct": false,
        "explanation": "On n'emploie pas deux suffixes fonctionnels de cette manière."
      },
      {
        "content": "$\\ce{CH3-C(=O)-CH(OH)-CH3}$ : 2-oxobutan-3-ol.",
        "correct": false,
        "explanation": "La cétone est prioritaire sur l'alcool et doit fournir le suffixe -one."
      },
      {
        "content": "$\\ce{NH2-CH2-CH2-COOH}$ : acide 1-aminopropanoïque.",
        "correct": false,
        "explanation": "Le groupe amino est en C3 lorsque le carbone carboxylique est C1."
      },
      {
        "content": "$\\ce{HO-CH2-CH2-C#N}$ : 1-cyanoéthanol.",
        "correct": false,
        "explanation": "Le nitrile est la fonction principale et son carbone doit être inclus dans le parent."
      }
    ],
    "explanation": "Cette question réunit les principaux couples de fonctions du chapitre. La bonne réponse dépend toujours de la priorité puis d'un comptage correct à partir de la fonction principale."
  },
  {
    "order": 127,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{HO-CH2-CH2-C(=O)-NH-CH3}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "3-hydroxy-N-méthylpropanamide",
        "3-hydroxy-N-methylpropanamide",
        "3-hydroxy-n-méthylpropanamide",
        "3-hydroxy-n-methylpropanamide"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "L'amide est prioritaire sur l'alcool. Le carbone carbonylé est C1 du propanamide ; le groupe hydroxy est en C3 et le méthyle est porté directement par l'azote : 3-hydroxy-N-méthylpropanamide."
  },
  {
    "order": 128,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Que peut-on déduire du nom « 3-hydroxy-N-méthylpropanamide » ?",
    "choices": [
      {
        "content": "La fonction principale est une amide.",
        "correct": true,
        "explanation": "Le suffixe -amide identifie la fonction principale."
      },
      {
        "content": "Le parent comporte trois carbones, carbone carbonylé compris.",
        "correct": true,
        "explanation": "Propanamide correspond à trois carbones."
      },
      {
        "content": "Un groupe hydroxyle est porté par le carbone 3.",
        "correct": true,
        "explanation": "Le préfixe 3-hydroxy- localise la fonction alcool secondaire."
      },
      {
        "content": "Un groupe méthyle est directement lié à l'azote.",
        "correct": true,
        "explanation": "Le locant N- indique une substitution sur l'azote."
      },
      {
        "content": "Le groupe méthyle est porté par le carbone 1 du parent.",
        "correct": false,
        "explanation": "N-méthyl- indique explicitement qu'il est porté par l'azote."
      }
    ],
    "explanation": "Le niveau MASTER exige aussi de savoir reconstruire une structure à partir d'un nom : suffixe, parent, locants et substituants sur hétéroatome doivent tous être lus correctement."
  },
  {
    "order": 129,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{CH3-C(=O)-CH2-C#N}$ ?",
    "choices": [
      {
        "content": "3-oxobutanenitrile.",
        "correct": true,
        "explanation": "Le nitrile est prioritaire sur la cétone. Son carbone est C1 ; le groupe carbonyle secondaire est en C3 et devient oxo-."
      },
      {
        "content": "2-oxobutanenitrile.",
        "correct": false,
        "explanation": "En numérotant depuis le carbone nitrile C1, le groupe oxo est en C3."
      },
      {
        "content": "4-cyanobutan-2-one.",
        "correct": false,
        "explanation": "Cette proposition traite à tort la cétone comme fonction principale."
      },
      {
        "content": "Butan-2-one-4-nitrile.",
        "correct": false,
        "explanation": "On n'assemble pas deux suffixes fonctionnels de cette manière."
      },
      {
        "content": "3-hydroxybutanenitrile.",
        "correct": false,
        "explanation": "La fonction secondaire est un carbonyle, pas un alcool."
      }
    ],
    "explanation": "Nitrile > cétone. Le carbone de $\\ce{C#N}$ est C1 ; le carbonyle secondaire se trouve en C3 et est exprimé par oxo- : 3-oxobutanenitrile."
  },
  {
    "order": 130,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-CH(SH)-CH(NH2)-CH3}$ selon la hiérarchie de fonctions utilisée dans ce chapitre.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "3-aminobutan-2-thiol"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Le thiol est prioritaire sur l'amine dans le tableau utilisé. La numérotation donne le locant 2 au thiol et place l'amine secondaire en C3 : 3-aminobutan-2-thiol."
  },
  {
    "order": 131,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Face à une structure complexe, quelles stratégies réduisent le risque d'erreur de nomenclature ?",
    "choices": [
      {
        "content": "Annoter d'abord toutes les fonctions présentes avant de chercher le nom complet.",
        "correct": true,
        "explanation": "Cela évite de choisir trop tôt un mauvais suffixe."
      },
      {
        "content": "Écrire explicitement l'ordre de priorité entre les fonctions présentes.",
        "correct": true,
        "explanation": "Cette comparaison identifie la fonction principale."
      },
      {
        "content": "Numéroter le parent sur le schéma avant d'assembler les préfixes et le suffixe.",
        "correct": true,
        "explanation": "Les locants deviennent alors vérifiables visuellement."
      },
      {
        "content": "Relire le nom obtenu dans le sens inverse pour vérifier qu'il reconstruit bien la structure.",
        "correct": true,
        "explanation": "C'est un excellent contrôle final : préfixes, locants, parent et suffixe doivent restituer la molécule."
      },
      {
        "content": "Choisir directement le nom qui paraît le plus court sans analyser les fonctions.",
        "correct": false,
        "explanation": "La longueur du nom n'est pas un critère de validité."
      }
    ],
    "explanation": "La méthode devient réellement robuste lorsqu'elle est appliquée dans les deux sens : structure → nom, puis nom → structure pour contrôler le résultat."
  },
  {
    "order": 132,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{HOOC-CH(NH2)-CH(OH)-CH3}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide 2-amino-3-hydroxybutanoïque",
        "acide 2-amino-3-hydroxybutanoique"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "L'acide carboxylique est prioritaire et son carbone est C1. Le groupe amino est en C2 et le groupe hydroxy en C3. Le parent comporte quatre carbones : acide 2-amino-3-hydroxybutanoïque."
  }
];
