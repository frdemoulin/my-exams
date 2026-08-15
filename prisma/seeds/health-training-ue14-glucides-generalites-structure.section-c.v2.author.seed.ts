import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie – Chapitre 1.1 – Section C – Isomérie, énantiomérie et épimérie
 */

export const UE14_BIOCH_CH1_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Deux isomères :",
    "choices": [
      {
        "content": "Ont la même formule brute.",
        "correct": true,
        "explanation": "Par définition, des isomères ont la même formule brute."
      },
      {
        "content": "Peuvent avoir des formules développées différentes.",
        "correct": true,
        "explanation": "L'isomérie de constitution l'illustre."
      },
      {
        "content": "Sont nécessairement superposables.",
        "correct": false,
        "explanation": "Des isomères sont des espèces distinctes."
      },
      {
        "content": "Peuvent différer par leur fonction.",
        "correct": true,
        "explanation": "Exemple glycéraldéhyde/dihydroxyacétone."
      }
    ],
    "explanation": "Des isomères ont la même formule brute mais diffèrent par leur connectivité ou leur organisation spatiale."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le glycéraldéhyde et la dihydroxyacétone :",
    "choices": [
      {
        "content": "Ont la même formule brute $\\mathrm{C_3H_6O_3}$.",
        "correct": true,
        "explanation": "Formule commune."
      },
      {
        "content": "Diffèrent par la nature de leur fonction carbonyle.",
        "correct": true,
        "explanation": "Aldéhyde versus cétone."
      },
      {
        "content": "Sont des isomères de fonction.",
        "correct": true,
        "explanation": "Le glycéraldéhyde est un aldose et la dihydroxyacétone un cétose."
      },
      {
        "content": "Sont deux énantiomères.",
        "correct": false,
        "explanation": "Leur connectivité diffère."
      }
    ],
    "explanation": "Ils illustrent une isomérie de fonction entre aldotriose et cétotriose."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Des stéréoisomères :",
    "choices": [
      {
        "content": "Conservent la même connectivité atomique.",
        "correct": true,
        "explanation": "Les atomes sont enchaînés de la même façon."
      },
      {
        "content": "Diffèrent par l'organisation spatiale.",
        "correct": true,
        "explanation": "Définition de la stéréoisomérie."
      },
      {
        "content": "Peuvent être des énantiomères ou des diastéréoisomères.",
        "correct": true,
        "explanation": "Grandes relations étudiées."
      },
      {
        "content": "Ont nécessairement des formules brutes différentes.",
        "correct": false,
        "explanation": "La formule brute est commune."
      }
    ],
    "explanation": "Les stéréoisomères se distinguent dans l'espace, pas par la formule brute."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Deux énantiomères :",
    "choices": [
      {
        "content": "Sont images l'un de l'autre dans un miroir.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Ne sont pas superposables.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Dans un environnement achiral, ont les mêmes propriétés physiques usuelles mais des pouvoirs rotatoires opposés.",
        "correct": true,
        "explanation": "Deux énantiomères purs ont des rotations de même valeur absolue et de signes opposés dans les mêmes conditions."
      },
      {
        "content": "Sont obligatoirement des épimères.",
        "correct": false,
        "explanation": "Un épimère est un type de diastéréoisomère, pas un énantiomère."
      }
    ],
    "explanation": "L'énantiomérie combine relation miroir et non-superposabilité."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle propriété optique distingue deux énantiomères purs placés dans les mêmes conditions ?",
    "choices": [
      {
        "content": "Le pouvoir rotatoire.",
        "correct": true,
        "explanation": "Leurs pouvoirs rotatoires ont la même valeur absolue et des signes opposés."
      },
      {
        "content": "La formule brute.",
        "correct": false,
        "explanation": "Elle est identique."
      },
      {
        "content": "Le nombre d'atomes de carbone.",
        "correct": false,
        "explanation": "Identique."
      },
      {
        "content": "La connectivité.",
        "correct": false,
        "explanation": "Elle est identique pour des stéréoisomères."
      }
    ],
    "explanation": "Le signe du pouvoir rotatoire distingue notamment deux énantiomères."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la stéréospécificité enzymatique :",
    "choices": [
      {
        "content": "Certaines enzymes ne métabolisent qu'une forme L ou qu'une forme D.",
        "correct": true,
        "explanation": "Le site actif d'une enzyme peut reconnaître sélectivement une configuration donnée."
      },
      {
        "content": "La configuration spatiale peut donc avoir une conséquence biologique.",
        "correct": true,
        "explanation": "C'est l'intérêt de l'exemple."
      },
      {
        "content": "Toutes les enzymes métabolisent indifféremment tous les stéréoisomères.",
        "correct": false,
        "explanation": "La reconnaissance enzymatique dépend souvent de la stéréochimie du substrat."
      },
      {
        "content": "Elle illustre l'importance biologique de la stéréochimie.",
        "correct": true,
        "explanation": "Conclusion."
      }
    ],
    "explanation": "La reconnaissance enzymatique peut être spécifique d'une configuration."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Deux diastéréoisomères :",
    "choices": [
      {
        "content": "Ont la même connectivité atomique.",
        "correct": true,
        "explanation": "Ce sont des stéréoisomères : leur connectivité est identique et leur organisation spatiale diffère."
      },
      {
        "content": "Ne sont pas énantiomères.",
        "correct": true,
        "explanation": "Ils ne sont pas images miroir l'un de l'autre."
      },
      {
        "content": "Ne sont pas superposables.",
        "correct": true,
        "explanation": "Ils restent des stéréoisomères distincts."
      },
      {
        "content": "Sont nécessairement images miroir.",
        "correct": false,
        "explanation": "Cela définirait des énantiomères."
      }
    ],
    "explanation": "Les diastéréoisomères sont des stéréoisomères non énantiomères."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Deux épimères :",
    "choices": [
      {
        "content": "Sont des diastéréoisomères.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Ne diffèrent que par la configuration d'un seul carbone asymétrique.",
        "correct": true,
        "explanation": "Critère central."
      },
      {
        "content": "Diffèrent obligatoirement sur tous leurs C*.",
        "correct": false,
        "explanation": "Un seul C* diffère."
      },
      {
        "content": "Peuvent être interconvertis par une épimérase.",
        "correct": true,
        "explanation": "Une épimérase catalyse l'inversion de configuration sur un centre stéréogène déterminé."
      }
    ],
    "explanation": "L'épimérie correspond à une différence de configuration sur un seul carbone asymétrique."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel ose est épimère en C4 du D-glucose ?",
    "choices": [
      {
        "content": "D-galactose.",
        "correct": true,
        "explanation": "Le D-galactose ne diffère du D-glucose que par la configuration de C4."
      },
      {
        "content": "D-mannose.",
        "correct": false,
        "explanation": "Il est épimère en C2."
      },
      {
        "content": "D-fructose.",
        "correct": false,
        "explanation": "C'est un cétose."
      },
      {
        "content": "Dihydroxyacétone.",
        "correct": false,
        "explanation": "Triose et autre fonction."
      }
    ],
    "explanation": "Le D-galactose diffère du D-glucose en C4."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel ose est épimère en C2 du D-glucose ?",
    "choices": [
      {
        "content": "D-mannose.",
        "correct": true,
        "explanation": "Le D-mannose ne diffère du D-glucose que par la configuration de C2."
      },
      {
        "content": "D-galactose.",
        "correct": false,
        "explanation": "C4."
      },
      {
        "content": "L-glucose.",
        "correct": false,
        "explanation": "C'est l'énantiomère du D-glucose."
      },
      {
        "content": "Fructose.",
        "correct": false,
        "explanation": "Isomère de fonction à l'échelle hexose."
      }
    ],
    "explanation": "Le D-mannose diffère du D-glucose en C2."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare D-glucose et D-galactose. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils ont la même formule brute.",
        "correct": true,
        "explanation": "Ce sont des stéréoisomères."
      },
      {
        "content": "Ils sont diastéréoisomères.",
        "correct": true,
        "explanation": "Ils ne sont pas images miroir."
      },
      {
        "content": "Ils sont épimères.",
        "correct": true,
        "explanation": "Ils ne diffèrent qu'en C4."
      },
      {
        "content": "Ils sont énantiomères.",
        "correct": false,
        "explanation": "Ils ne diffèrent pas sur tous les C*."
      }
    ],
    "explanation": "Le couple glucose/galactose est l'exemple d'épimérie en C4."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare D-glucose et D-mannose. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils sont stéréoisomères.",
        "correct": true,
        "explanation": "Même connectivité, organisation spatiale différente."
      },
      {
        "content": "Ils sont diastéréoisomères.",
        "correct": true,
        "explanation": "Non images miroir."
      },
      {
        "content": "Ils sont épimères en C2.",
        "correct": true,
        "explanation": "D-glucose et D-mannose ne diffèrent que par la configuration de C2."
      },
      {
        "content": "Ils diffèrent aussi en C4.",
        "correct": false,
        "explanation": "Leur configuration est identique en C4 ; la différence porte sur C2."
      }
    ],
    "explanation": "Le couple glucose/mannose est l'exemple d'épimérie en C2."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du D-galactose et du D-mannose :",
    "choices": [
      {
        "content": "Sont des diastéréoisomères.",
        "correct": true,
        "explanation": "Ils ne sont pas images miroir."
      },
      {
        "content": "Diffèrent sur plus d'un carbone asymétrique.",
        "correct": true,
        "explanation": "Leurs motifs diffèrent notamment par rapport au glucose en C4 et C2."
      },
      {
        "content": "Ne sont donc pas épimères l'un de l'autre.",
        "correct": true,
        "explanation": "L'épimérie exige une seule différence."
      },
      {
        "content": "Sont deux énantiomères.",
        "correct": false,
        "explanation": "Ils appartiennent tous deux à la série D."
      }
    ],
    "explanation": "Comparer leurs relations au glucose permet de conclure qu'ils ne sont pas épimères entre eux."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L'épimérisation :",
    "choices": [
      {
        "content": "Correspond au passage d'un épimère à un autre.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Peut être réalisée chimiquement en milieu alcalin.",
        "correct": true,
        "explanation": "Une énolisation en milieu alcalin peut conduire à une épimérisation."
      },
      {
        "content": "Peut être réalisée enzymatiquement par une épimérase.",
        "correct": true,
        "explanation": "Une épimérase catalyse une épimérisation stéréospécifique."
      },
      {
        "content": "Exige toujours une rupture complète de la chaîne carbonée.",
        "correct": false,
        "explanation": "Ce n'est pas le mécanisme décrit."
      }
    ],
    "explanation": "Une épimérisation peut être obtenue chimiquement, notamment via un intermédiaire énediol en milieu alcalin, ou catalysée par une épimérase."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des épimérases :",
    "choices": [
      {
        "content": "Elles catalysent l'interconversion d'épimères.",
        "correct": true,
        "explanation": "Une épimérase inverse la configuration d'un centre stéréogène déterminé."
      },
      {
        "content": "Elles sont stéréospécifiques par nature de la transformation.",
        "correct": true,
        "explanation": "Elles modifient une configuration déterminée."
      },
      {
        "content": "Un déficit en UDP-galactose 4-épimérase peut provoquer une galactosémie de type III.",
        "correct": true,
        "explanation": "La galactosémie de type III est liée à un déficit de l'enzyme GALE."
      },
      {
        "content": "Elles transforment tous les oses en protéines.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "L'UDP-galactose 4-épimérase catalyse l'interconversion de l'UDP-galactose et de l'UDP-glucose dans la voie de Leloir."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans la galactosémie de type III, un déficit en UDP-galactose 4-épimérase :",
    "choices": [
      {
        "content": "Perturbe l'interconversion de l'UDP-galactose et de l'UDP-glucose.",
        "correct": true,
        "explanation": "L'enzyme GALE catalyse cette interconversion dans la voie de Leloir."
      },
      {
        "content": "Peut conduire à une galactosémie congénitale.",
        "correct": true,
        "explanation": "Le déficit en GALE définit la galactosémie par déficit en épimérase, dite de type III."
      },
      {
        "content": "Illustre l'importance biologique de la stéréospécificité.",
        "correct": true,
        "explanation": "GALE reconnaît des nucléotides-osides et catalyse une transformation stéréochimique précise."
      },
      {
        "content": "Améliore le métabolisme du galactose.",
        "correct": false,
        "explanation": "C'est l'inverse."
      }
    ],
    "explanation": "La galactosémie de type III illustre les conséquences métaboliques d'un déficit en UDP-galactose 4-épimérase."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "D-ribose et L-ribose :",
    "choices": [
      {
        "content": "Sont énantiomères.",
        "correct": true,
        "explanation": "Images miroir non superposables."
      },
      {
        "content": "Ont la même formule brute.",
        "correct": true,
        "explanation": "Stéréoisomères."
      },
      {
        "content": "Diffèrent par la configuration de tous leurs centres correspondants dans le couple miroir.",
        "correct": true,
        "explanation": "Relation d'énantiomérie."
      },
      {
        "content": "Sont épimères.",
        "correct": false,
        "explanation": "Ce ne sont pas des diastéréoisomères."
      }
    ],
    "explanation": "Les séries D et L d'un même ose forment un couple d'énantiomères."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "D-glucose et L-glucose :",
    "choices": [
      {
        "content": "Sont images miroir l'un de l'autre.",
        "correct": true,
        "explanation": "Couple d'énantiomères."
      },
      {
        "content": "Ne sont pas superposables.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Ont des pouvoirs rotatoires de signes opposés dans les mêmes conditions.",
        "correct": true,
        "explanation": "Deux énantiomères purs présentent des rotations de même valeur absolue et de signes opposés dans les mêmes conditions."
      },
      {
        "content": "Sont diastéréoisomères.",
        "correct": false,
        "explanation": "Ils sont énantiomères."
      }
    ],
    "explanation": "Le couple D/L-glucose illustre énantiomérie et pouvoir rotatoire opposé."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelle hiérarchie de relations stéréochimiques est cohérente ?",
    "choices": [
      {
        "content": "Un épimère est un diastéréoisomère.",
        "correct": true,
        "explanation": "Sous-catégorie."
      },
      {
        "content": "Un diastéréoisomère est un stéréoisomère.",
        "correct": true,
        "explanation": "Catégorie plus large."
      },
      {
        "content": "Un énantiomère est aussi un stéréoisomère.",
        "correct": true,
        "explanation": "Autre grande catégorie."
      },
      {
        "content": "Tout diastéréoisomère est un épimère.",
        "correct": false,
        "explanation": "Seulement s'il ne diffère que sur un seul C*."
      }
    ],
    "explanation": "Épimérie et énantiomérie sont des relations particulières à l'intérieur de la stéréoisomérie."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des anomères formés lors de la cyclisation d'un ose :",
    "choices": [
      {
        "content": "Ce sont des diastéréoisomères.",
        "correct": true,
        "explanation": "Ils ne sont pas images miroir l'un de l'autre."
      },
      {
        "content": "Ils peuvent être considérés comme des épimères.",
        "correct": true,
        "explanation": "Ils diffèrent au carbone anomérique."
      },
      {
        "content": "Ils sont nécessairement énantiomères.",
        "correct": false,
        "explanation": "Deux anomères d'un même ose ne sont pas images miroir l'un de l'autre."
      },
      {
        "content": "Ils apparaissent lors de la cyclisation.",
        "correct": true,
        "explanation": "Le carbone anomérique devient un nouveau C*."
      }
    ],
    "explanation": "L'anomérie est une forme particulière de stéréoisomérie créée par la cyclisation."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour identifier deux épimères à partir de projections de Fischer :",
    "choices": [
      {
        "content": "Comparer les positions des OH sur les carbones asymétriques.",
        "correct": true,
        "explanation": "Méthode adaptée."
      },
      {
        "content": "Vérifier qu'une seule configuration diffère.",
        "correct": true,
        "explanation": "Critère de l'épimérie."
      },
      {
        "content": "Vérifier qu'ils ne sont pas images miroir globales.",
        "correct": true,
        "explanation": "Sinon ce seraient des énantiomères."
      },
      {
        "content": "La formule brute seule suffit.",
        "correct": false,
        "explanation": "Elle ne décrit pas la configuration."
      }
    ],
    "explanation": "La comparaison carbone par carbone est la méthode robuste."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Deux énantiomères sont images miroir non superposables.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Deux épimères diffèrent sur un seul carbone asymétrique.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "D-glucose et D-galactose sont épimères en C4.",
        "correct": true,
        "explanation": "Exemple."
      },
      {
        "content": "D-glucose et D-mannose sont épimères en C2.",
        "correct": true,
        "explanation": "Exemple."
      },
      {
        "content": "Une épimérase peut catalyser une épimérisation.",
        "correct": true,
        "explanation": "Voie enzymatique."
      },
      {
        "content": "D-glucose et L-glucose sont diastéréoisomères.",
        "correct": false,
        "explanation": "Énantiomères."
      },
      {
        "content": "Tous les diastéréoisomères sont des épimères.",
        "correct": false,
        "explanation": "Pas nécessairement."
      },
      {
        "content": "La formule brute seule identifie une épimérie.",
        "correct": false,
        "explanation": "Il faut la configuration."
      },
      {
        "content": "La galactosémie de type III résulte d'un excès d'UDP-galactose 4-épimérase.",
        "correct": false,
        "explanation": "Elle résulte d'un déficit en UDP-galactose 4-épimérase, et non d'un excès."
      },
      {
        "content": "Deux énantiomères ont toujours le même pouvoir rotatoire signé.",
        "correct": false,
        "explanation": "Deux énantiomères purs ont des pouvoirs rotatoires de signes opposés dans les mêmes conditions."
      }
    ],
    "explanation": "Cette sélection consolide les principales relations d'isomérie de la section."
  }
];
