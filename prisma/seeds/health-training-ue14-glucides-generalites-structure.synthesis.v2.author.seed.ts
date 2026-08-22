import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie – Chapitre 1.1 – Synthèse
 */

export const UE14_BIOCH_CH1_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos d'un ose linéaire de formule $\\mathrm{C_5H_{10}O_5}$ :",
    "choices": [
      {
        "content": "Il s'agit d'un pentose.",
        "correct": true,
        "explanation": "Cinq carbones."
      },
      {
        "content": "Il peut appartenir à la famille des aldoses ou des cétoses.",
        "correct": true,
        "explanation": "La formule brute seule ne distingue pas la fonction."
      },
      {
        "content": "Sa formule brute suffit à déterminer sa série D/L.",
        "correct": false,
        "explanation": "La série dépend de la configuration spatiale."
      },
      {
        "content": "Il respecte la formule générale $\\mathrm{C_nH_{2n}O_n}$.",
        "correct": true,
        "explanation": "n=5."
      }
    ],
    "explanation": "La formule brute renseigne sur le nombre de carbones mais pas sur toute la stéréochimie."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le glycéraldéhyde et la dihydroxyacétone illustrent simultanément :",
    "choices": [
      {
        "content": "Deux trioses.",
        "correct": true,
        "explanation": "Trois carbones."
      },
      {
        "content": "Une isomérie de fonction.",
        "correct": true,
        "explanation": "Aldéhyde versus cétone."
      },
      {
        "content": "Une différence chiral/achiral.",
        "correct": true,
        "explanation": "Glycéraldéhyde chiral, dihydroxyacétone achirale."
      },
      {
        "content": "Une paire d'énantiomères.",
        "correct": false,
        "explanation": "Leur connectivité diffère."
      }
    ],
    "explanation": "Ces deux molécules sont un exemple transversal particulièrement utile du chapitre."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un aldohexose de série D dans le modèle de filiation :",
    "choices": [
      {
        "content": "Possède quatre carbones asymétriques en forme linéaire.",
        "correct": true,
        "explanation": "n−2=4."
      },
      {
        "content": "Appartient à un ensemble de 16 stéréoisomères.",
        "correct": true,
        "explanation": "$2^4$."
      },
      {
        "content": "A son OH du dernier C* à droite en Fischer.",
        "correct": true,
        "explanation": "Critère D."
      },
      {
        "content": "Est nécessairement dextrogyre.",
        "correct": false,
        "explanation": "D/L et +/− sont indépendants."
      }
    ],
    "explanation": "Cette question croise filiation et lecture de Fischer."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "D-glucose, D-galactose et D-mannose :",
    "choices": [
      {
        "content": "Sont des aldohexoses.",
        "correct": true,
        "explanation": "Même famille générale."
      },
      {
        "content": "D-galactose est épimère en C4 du D-glucose.",
        "correct": true,
        "explanation": "Le D-galactose ne diffère du D-glucose que par la configuration de C4."
      },
      {
        "content": "D-mannose est épimère en C2 du D-glucose.",
        "correct": true,
        "explanation": "Le D-mannose ne diffère du D-glucose que par la configuration de C2."
      },
      {
        "content": "Les trois sont tous énantiomères entre eux.",
        "correct": false,
        "explanation": "Ils sont de série D et diffèrent localement."
      }
    ],
    "explanation": "Les relations d'épimérie relient directement filiation et isomérie."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la cyclisation prédominante du D-glucose en solution aqueuse :",
    "choices": [
      {
        "content": "Donne un pyranose.",
        "correct": true,
        "explanation": "Les formes glucopyraniques prédominent en solution aqueuse."
      },
      {
        "content": "Relie C1 et C5.",
        "correct": true,
        "explanation": "Pont de cyclisation."
      },
      {
        "content": "Crée un carbone anomérique en C1.",
        "correct": true,
        "explanation": "Nouveau C*."
      },
      {
        "content": "Produit uniquement un anomère α.",
        "correct": false,
        "explanation": "α et β sont possibles."
      }
    ],
    "explanation": "La cyclisation transforme le carbonyle linéaire en centre anomérique."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des anomères du glucose :",
    "choices": [
      {
        "content": "α et β diffèrent au C1.",
        "correct": true,
        "explanation": "Carbone anomérique."
      },
      {
        "content": "Ils sont des diastéréoisomères.",
        "correct": true,
        "explanation": "Ils diffèrent sur un centre stéréogène sans être images miroir l'un de l'autre."
      },
      {
        "content": "Ils peuvent être considérés comme épimères.",
        "correct": true,
        "explanation": "Différence sur un seul C*."
      },
      {
        "content": "Ils ont exactement le même pouvoir rotatoire.",
        "correct": false,
        "explanation": "Les anomères α et β du glucose ont des pouvoirs rotatoires spécifiques différents."
      }
    ],
    "explanation": "L'anomérie est une relation stéréochimique créée par la cyclisation."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour le D-glucose à l'équilibre en solution aqueuse proche de pH 7 :",
    "choices": [
      {
        "content": "Les formes cycliques sont très majoritaires.",
        "correct": true,
        "explanation": "Plus de 99 % des molécules de D-glucose sont sous forme cyclique."
      },
      {
        "content": "La forme β est environ deux fois plus abondante que la forme α.",
        "correct": true,
        "explanation": "Le β-D-glucopyranose représente environ deux tiers du mélange, contre environ un tiers pour la forme α."
      },
      {
        "content": "La forme linéaire est très minoritaire.",
        "correct": true,
        "explanation": "La forme ouverte représente une fraction très inférieure à 1 %."
      },
      {
        "content": "99 % des molécules sont linéaires.",
        "correct": false,
        "explanation": "À l'équilibre dans l'eau, le D-glucose est presque entièrement cyclique."
      }
    ],
    "explanation": "À l'équilibre en solution aqueuse, les formes cycliques α et β du D-glucose sont très majoritaires et la forme linéaire est transitoire."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sur le pouvoir rotatoire sont exactes ?",
    "choices": [
      {
        "content": "Dextrogyre correspond à (+).",
        "correct": true,
        "explanation": "Déviation vers la droite."
      },
      {
        "content": "Lévogyre correspond à (−).",
        "correct": true,
        "explanation": "Déviation vers la gauche."
      },
      {
        "content": "D/L et +/− sont indépendants.",
        "correct": true,
        "explanation": "Avertissement majeur."
      },
      {
        "content": "Le fructose naturel est l'exemple D(−).",
        "correct": true,
        "explanation": "Le D-fructose naturel est lévogyre."
      }
    ],
    "explanation": "Série structurale et signe optique doivent rester distincts."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la galactosémie par déficit en UDP-galactose 4-épimérase, dite de type III :",
    "choices": [
      {
        "content": "Un déficit en UDP-galactose 4-épimérase est impliqué.",
        "correct": true,
        "explanation": "La galactosémie de type III est liée à un déficit de l'enzyme GALE."
      },
      {
        "content": "L'interconversion de l'UDP-galactose et de l'UDP-glucose est perturbée.",
        "correct": true,
        "explanation": "GALE catalyse cette interconversion dans la voie de Leloir."
      },
      {
        "content": "L'exemple illustre la stéréospécificité enzymatique.",
        "correct": true,
        "explanation": "Lien pédagogique."
      },
      {
        "content": "Le problème est une absence de fonction carbonyle dans tous les oses.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "La galactosémie de type III illustre les conséquences métaboliques d'un déficit touchant une épimérase stéréospécifique."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le glucose est un aldohexose.",
        "correct": true,
        "explanation": "Classification."
      },
      {
        "content": "Le fructose est un cétohexose.",
        "correct": true,
        "explanation": "Classification."
      },
      {
        "content": "D-glucose et L-glucose sont énantiomères.",
        "correct": true,
        "explanation": "Relation miroir."
      },
      {
        "content": "Le glucopyranose se forme par cyclisation C1-C5.",
        "correct": true,
        "explanation": "Cyclisation."
      },
      {
        "content": "D/L est indépendant de +/−.",
        "correct": true,
        "explanation": "Pouvoir rotatoire."
      },
      {
        "content": "Un 2-cétose porte son carbonyle en C1.",
        "correct": false,
        "explanation": "C2."
      },
      {
        "content": "Le D-galactose est épimère en C2 du D-glucose.",
        "correct": false,
        "explanation": "C4."
      },
      {
        "content": "Une forme furanique possède six sommets.",
        "correct": false,
        "explanation": "Cinq."
      },
      {
        "content": "Un ose réducteur reste exclusivement sous une forme cyclique unique en milieu basique.",
        "correct": false,
        "explanation": "L'ouverture du cycle et des interconversions via un intermédiaire énediol peuvent se produire."
      },
      {
        "content": "La dihydroxyacétone est chirale.",
        "correct": false,
        "explanation": "Achirale."
      }
    ],
    "explanation": "Cette synthèse consolide les cinq axes structuraux du chapitre."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un ose linéaire possède six carbones, une fonction cétone en C2 et trois carbones asymétriques. Quelles conclusions sont cohérentes ?",
    "choices": [
      {
        "content": "Il s'agit d'un cétohexose.",
        "correct": true,
        "explanation": "Six carbones + cétone."
      },
      {
        "content": "Le modèle de filiation prévoit huit stéréoisomères.",
        "correct": true,
        "explanation": "$2^3$."
      },
      {
        "content": "Le fructose appartient à cette famille.",
        "correct": true,
        "explanation": "Exemple majeur."
      },
      {
        "content": "Il s'agit nécessairement du glucose.",
        "correct": false,
        "explanation": "Le glucose est un aldohexose."
      }
    ],
    "explanation": "Structure, nomenclature et filiation permettent d'identifier la famille."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une projection de Fischer d'un hexose a le OH du dernier C* à gauche. Quelles propositions sont justifiées ?",
    "choices": [
      {
        "content": "L'ose appartient à la série L.",
        "correct": true,
        "explanation": "Dans une projection de Fischer conventionnelle, OH à gauche sur le dernier C* définit la série L."
      },
      {
        "content": "Le signe de son pouvoir rotatoire reste indéterminé par cette seule information.",
        "correct": true,
        "explanation": "Indépendance."
      },
      {
        "content": "Il est nécessairement lévogyre.",
        "correct": false,
        "explanation": "L ne signifie pas −."
      },
      {
        "content": "La lecture se fait sur le dernier carbone asymétrique.",
        "correct": true,
        "explanation": "Règle."
      }
    ],
    "explanation": "La série D/L est une information de configuration, non une mesure optique."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare D-glucose, D-galactose et D-mannose. Quelle analyse est correcte ?",
    "choices": [
      {
        "content": "Glucose/galactose : épimères en C4.",
        "correct": true,
        "explanation": "Exemple."
      },
      {
        "content": "Glucose/mannose : épimères en C2.",
        "correct": true,
        "explanation": "Exemple."
      },
      {
        "content": "Galactose/mannose diffèrent sur plus d'un C*.",
        "correct": true,
        "explanation": "Ils ne sont donc pas épimères l'un de l'autre."
      },
      {
        "content": "Les trois ont la même formule brute.",
        "correct": true,
        "explanation": "Stéréoisomères de la même famille générale."
      }
    ],
    "explanation": "L'analyse carbone par carbone distingue correctement les relations."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un D-glucose passe de la forme linéaire à la forme pyranique. Quelles conséquences structurales sont attendues ?",
    "choices": [
      {
        "content": "C1 devient asymétrique.",
        "correct": true,
        "explanation": "Carbone anomérique."
      },
      {
        "content": "Deux anomères peuvent apparaître.",
        "correct": true,
        "explanation": "α et β."
      },
      {
        "content": "La molécule devient un hétérocycle à six sommets.",
        "correct": true,
        "explanation": "Pyranose."
      },
      {
        "content": "La série D devient automatiquement L.",
        "correct": false,
        "explanation": "La cyclisation ne change pas ainsi la série."
      }
    ],
    "explanation": "La cyclisation ajoute une information stéréochimique sans inverser la série globale."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un D-fructose cyclise sous sa forme furanique la plus fréquente. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La fermeture implique C2 et C5.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Le carbone anomérique est C2.",
        "correct": true,
        "explanation": "Ancien carbone cétonique."
      },
      {
        "content": "Le cycle comporte cinq sommets.",
        "correct": true,
        "explanation": "Furanose."
      },
      {
        "content": "Cette cyclisation est C1-C5.",
        "correct": false,
        "explanation": "C1-C5 correspond au glucose pyranique."
      }
    ],
    "explanation": "Le fructose illustre la différence de cyclisation entre aldoses et cétoses."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une solution contient uniquement α-D-glucose au départ puis atteint l'équilibre en solution. Pourquoi la rotation mesurée peut-elle évoluer ?",
    "choices": [
      {
        "content": "α et β ont des pouvoirs rotatoires différents.",
        "correct": true,
        "explanation": "Les valeurs usuelles sont proches de +112° pour α et +19° pour β."
      },
      {
        "content": "Les anomères s'interconvertissent via la forme linéaire.",
        "correct": true,
        "explanation": "L'ouverture du cycle donne une forme linéaire qui peut se refermer sous l'un ou l'autre anomère."
      },
      {
        "content": "Les proportions changent au cours du temps.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "La molécule devient obligatoirement L-glucose.",
        "correct": false,
        "explanation": "La série D est conservée."
      }
    ],
    "explanation": "La mutarotation résulte de l'évolution de la composition anomérique."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Un mélange équimolaire de D-glucose (+52,5°) et L-glucose (−52,5°) a quelle rotation résultante, en degrés ?",
    "answer": {
      "type": "number",
      "value": 0,
      "tolerance": 0
    },
    "explanation": "Les rotations opposées et égales s'annulent."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "On admet qu'à l'équilibre en solution aqueuse, environ deux tiers des molécules cycliques de D-glucose sont sous forme β. Combien de molécules β attend-on parmi 600 molécules cycliques ?",
    "answer": {
      "type": "number",
      "value": 400,
      "tolerance": 0
    },
    "explanation": "Deux tiers de 600 donnent 400."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une molécule D(−) est observée. Quelle conclusion est correcte ?",
    "choices": [
      {
        "content": "Elle appartient à la série D.",
        "correct": true,
        "explanation": "Information structurale."
      },
      {
        "content": "Elle est lévogyre.",
        "correct": true,
        "explanation": "Signe négatif."
      },
      {
        "content": "Cette association est possible.",
        "correct": true,
        "explanation": "Le D-fructose naturel est lévogyre : il constitue un exemple D(−)."
      },
      {
        "content": "Elle viole la règle D = +.",
        "correct": false,
        "explanation": "Il n'existe pas de règle D = + : D/L et le signe du pouvoir rotatoire sont indépendants."
      }
    ],
    "explanation": "L'existence d'un composé D(−) démontre que la série D/L ne prédit pas le signe du pouvoir rotatoire."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos des conformations des cycles :",
    "choices": [
      {
        "content": "Le pyranose peut adopter une chaise.",
        "correct": true,
        "explanation": "Une conformation chaise limite la tension du cycle pyranique."
      },
      {
        "content": "Une conformation chaise est généralement plus stable qu'une conformation bateau pour un même pyranose.",
        "correct": true,
        "explanation": "La chaise limite les interactions défavorables et la tension du cycle."
      },
      {
        "content": "Le furanose peut adopter une enveloppe.",
        "correct": true,
        "explanation": "Le plissement d'un cycle furanique peut produire une conformation enveloppe."
      },
      {
        "content": "Ces conformations rappellent que les cycles ne sont pas strictement plans.",
        "correct": true,
        "explanation": "Le plissement du cycle réduit les contraintes géométriques ; ces conformations sont donc tridimensionnelles."
      }
    ],
    "explanation": "La représentation cyclique doit rester tridimensionnelle."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelle démarche permet de classer complètement un ose simple à partir d'une formule linéaire de Fischer ?",
    "choices": [
      {
        "content": "Compter les carbones.",
        "correct": true,
        "explanation": "Triose à heptose."
      },
      {
        "content": "Identifier aldéhyde ou cétone.",
        "correct": true,
        "explanation": "Aldose/cétose."
      },
      {
        "content": "Repérer le dernier carbone asymétrique pour D/L.",
        "correct": true,
        "explanation": "Série."
      },
      {
        "content": "Comparer les configurations des C* pour identifier éventuellement épimères ou énantiomères.",
        "correct": true,
        "explanation": "Stéréochimie."
      }
    ],
    "explanation": "La classification combine constitution, longueur de chaîne et configuration."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un aldohexose linéaire non substitué possède quatre C*.",
        "correct": true,
        "explanation": "n−2."
      },
      {
        "content": "Un 2-cétohexose linéaire non substitué possède huit stéréoisomères.",
        "correct": true,
        "explanation": "$2^3$."
      },
      {
        "content": "Les anomères α et β sont des diastéréoisomères.",
        "correct": true,
        "explanation": "Ils diffèrent au carbone anomérique sans être images miroir l'un de l'autre."
      },
      {
        "content": "À l'équilibre dans l'eau, les formes cycliques du D-glucose dominent largement.",
        "correct": true,
        "explanation": "99 %."
      },
      {
        "content": "L'α-D-glucose a un pouvoir rotatoire spécifique plus élevé que le β-D-glucose.",
        "correct": true,
        "explanation": "Les valeurs usuelles sont proches de +112° pour α et +19° pour β."
      },
      {
        "content": "D-glucose et L-glucose sont épimères.",
        "correct": false,
        "explanation": "Énantiomères."
      },
      {
        "content": "Le glucose furanique C1-C4 est la forme la plus fréquente.",
        "correct": false,
        "explanation": "Peu fréquente."
      },
      {
        "content": "Le OH à gauche sur le dernier C* définit la série D.",
        "correct": false,
        "explanation": "Série L."
      },
      {
        "content": "Une dihydroxyacétone possède un C*.",
        "correct": false,
        "explanation": "Aucun."
      },
      {
        "content": "D/L permet de connaître automatiquement le signe optique.",
        "correct": false,
        "explanation": "Indépendance."
      }
    ],
    "explanation": "Le MASTER final croise filiation, stéréochimie, cyclisation et activité optique."
  }
];
