import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

export const UE14_BIOCH_CH15_SECTION_C_V2: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la courbe de Michaelis-Menten :",
    "choices": [
      {
        "content": "La vitesse initiale augmente avec la concentration en substrat.",
        "correct": true,
        "explanation": "La courbe v0=f([S]) tend vers Vmax."
      },
      {
        "content": "La vitesse décroît toujours quand [S] augmente.",
        "correct": false,
        "explanation": "La courbe v0=f([S]) tend vers Vmax."
      },
      {
        "content": "Elle tend vers un plateau Vmax.",
        "correct": true,
        "explanation": "La courbe v0=f([S]) tend vers Vmax."
      },
      {
        "content": "La courbe ne présente aucun plateau.",
        "correct": false,
        "explanation": "La courbe v0=f([S]) tend vers Vmax."
      }
    ],
    "explanation": "La courbe v0=f([S]) tend vers Vmax."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle proposition décrit correctement la définition de Km par Vmax/2 selon la fiche ?",
    "choices": [
      {
        "content": "Km est donc lu sur l’axe des concentrations à mi-vitesse maximale.",
        "correct": true,
        "explanation": "Km correspond à [S] lorsque v0 vaut la moitié de Vmax."
      },
      {
        "content": "Km est lu lorsque v0=0.",
        "correct": false,
        "explanation": "Km correspond à [S] lorsque v0 vaut la moitié de Vmax."
      },
      {
        "content": "Km est une masse d’enzyme.",
        "correct": false,
        "explanation": "Km correspond à [S] lorsque v0 vaut la moitié de Vmax."
      },
      {
        "content": "Km est la vitesse maximale elle-même.",
        "correct": false,
        "explanation": "Km correspond à [S] lorsque v0 vaut la moitié de Vmax."
      }
    ],
    "explanation": "Km correspond à [S] lorsque v0 vaut la moitié de Vmax."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Repères fondamentaux sur l’affinité et Km :",
    "choices": [
      {
        "content": "Km dépend des conditions expérimentales comme le pH et la température.",
        "correct": true,
        "explanation": "Dans le modèle pédagogique, l’affinité varie en sens inverse de Km."
      },
      {
        "content": "Un Km élevé signifie nécessairement une meilleure fixation du substrat.",
        "correct": false,
        "explanation": "Dans le modèle pédagogique, l’affinité varie en sens inverse de Km."
      },
      {
        "content": "Un Km faible traduit une forte affinité de l’enzyme pour le substrat.",
        "correct": true,
        "explanation": "Dans le modèle pédagogique, l’affinité varie en sens inverse de Km."
      },
      {
        "content": "Un Km faible traduit toujours une faible affinité.",
        "correct": false,
        "explanation": "Dans le modèle pédagogique, l’affinité varie en sens inverse de Km."
      }
    ],
    "explanation": "Dans le modèle pédagogique, l’affinité varie en sens inverse de Km."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur les exemples de Km, laquelle est exacte ?",
    "choices": [
      {
        "content": "La fiche cite β-galactosidase/lactose avec Km d’environ 4000 µM.",
        "correct": true,
        "explanation": "Les exemples illustrent des Km très différents."
      },
      {
        "content": "La pénicillinase/benzylpénicilline est donnée à 12000 mM.",
        "correct": false,
        "explanation": "Les exemples illustrent des Km très différents."
      },
      {
        "content": "Elle cite anhydrase carbonique/CO2 avec environ 12000 µM.",
        "correct": true,
        "explanation": "Les exemples illustrent des Km très différents."
      },
      {
        "content": "Aucun exemple chiffré de Km n’est fourni.",
        "correct": false,
        "explanation": "Les exemples illustrent des Km très différents."
      }
    ],
    "explanation": "Les exemples illustrent des Km très différents."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant l’équation de Michaelis-Menten :",
    "choices": [
      {
        "content": "Si [S]=Km, alors v0=Vmax/2.",
        "correct": true,
        "explanation": "L’équation de Michaelis-Menten permet de relier les paramètres cinétiques."
      },
      {
        "content": "Si [S]=Km, alors v0=2Vmax.",
        "correct": false,
        "explanation": "L’équation de Michaelis-Menten permet de relier les paramètres cinétiques."
      },
      {
        "content": "L’équation ne comporte pas la concentration en substrat.",
        "correct": false,
        "explanation": "L’équation de Michaelis-Menten permet de relier les paramètres cinétiques."
      },
      {
        "content": "La fiche donne v0 = Km/[S] sans Vmax.",
        "correct": false,
        "explanation": "L’équation de Michaelis-Menten permet de relier les paramètres cinétiques."
      }
    ],
    "explanation": "L’équation de Michaelis-Menten permet de relier les paramètres cinétiques."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelle proposition décrit correctement la réaction d’ordre zéro selon la fiche ?",
    "choices": [
      {
        "content": "Cette notion est distincte d’une réaction d’ordre 1.",
        "correct": true,
        "explanation": "Ordre zéro : vitesse constante par rapport à la concentration considérée."
      },
      {
        "content": "Sa vitesse est forcément nulle.",
        "correct": false,
        "explanation": "Ordre zéro : vitesse constante par rapport à la concentration considérée."
      },
      {
        "content": "Dans le rappel de la fiche, une réaction d’ordre zéro a une vitesse constante.",
        "correct": true,
        "explanation": "Ordre zéro : vitesse constante par rapport à la concentration considérée."
      },
      {
        "content": "Une réaction d’ordre zéro suit v=k[A].",
        "correct": false,
        "explanation": "Ordre zéro : vitesse constante par rapport à la concentration considérée."
      }
    ],
    "explanation": "Ordre zéro : vitesse constante par rapport à la concentration considérée."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Repères fondamentaux sur la réaction d’ordre un :",
    "choices": [
      {
        "content": "La fiche donne v=k[A].",
        "correct": true,
        "explanation": "Ordre un : vitesse proportionnelle à la concentration du substrat."
      },
      {
        "content": "La vitesse est toujours constante quelle que soit [A].",
        "correct": false,
        "explanation": "Ordre un : vitesse proportionnelle à la concentration du substrat."
      },
      {
        "content": "La vitesse est directement proportionnelle à [A].",
        "correct": true,
        "explanation": "Ordre un : vitesse proportionnelle à la concentration du substrat."
      },
      {
        "content": "La formule donnée est v=k[A][B].",
        "correct": false,
        "explanation": "Ordre un : vitesse proportionnelle à la concentration du substrat."
      }
    ],
    "explanation": "Ordre un : vitesse proportionnelle à la concentration du substrat."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur la réaction d’ordre deux, laquelle est exacte ?",
    "choices": [
      {
        "content": "La vitesse est proportionnelle au produit [A][B].",
        "correct": true,
        "explanation": "Ordre deux : vitesse proportionnelle au produit des concentrations de deux réactifs."
      },
      {
        "content": "La vitesse est indépendante des concentrations.",
        "correct": false,
        "explanation": "Ordre deux : vitesse proportionnelle au produit des concentrations de deux réactifs."
      },
      {
        "content": "La relation est v=k uniquement.",
        "correct": false,
        "explanation": "Ordre deux : vitesse proportionnelle au produit des concentrations de deux réactifs."
      },
      {
        "content": "La réaction d’ordre deux comporte nécessairement un seul substrat.",
        "correct": false,
        "explanation": "Ordre deux : vitesse proportionnelle au produit des concentrations de deux réactifs."
      }
    ],
    "explanation": "Ordre deux : vitesse proportionnelle au produit des concentrations de deux réactifs."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la représentation de Lineweaver-Burk :",
    "choices": [
      {
        "content": "L’ordonnée à l’origine vaut 1/Vmax.",
        "correct": true,
        "explanation": "La double inverse linéarise la relation de Michaelis-Menten."
      },
      {
        "content": "L’ordonnée à l’origine vaut Km.",
        "correct": false,
        "explanation": "La double inverse linéarise la relation de Michaelis-Menten."
      },
      {
        "content": "La fiche représente 1/v0 en fonction de 1/[S].",
        "correct": true,
        "explanation": "La double inverse linéarise la relation de Michaelis-Menten."
      },
      {
        "content": "La représentation porte v0 en fonction du temps.",
        "correct": false,
        "explanation": "La double inverse linéarise la relation de Michaelis-Menten."
      }
    ],
    "explanation": "La double inverse linéarise la relation de Michaelis-Menten."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelle proposition décrit correctement le repère d’abscisse de Lineweaver-Burk dans la fiche selon la fiche ?",
    "choices": [
      {
        "content": "Le support imprimé indique que la droite coupe l’axe des abscisses en 1/Km.",
        "correct": true,
        "explanation": "Le support local imprime 1/Km pour l’abscisse ; la banque le signale explicitement sans le corriger silencieusement."
      },
      {
        "content": "Le support indique que l’abscisse d’intersection vaut Vmax.",
        "correct": false,
        "explanation": "Le support local imprime 1/Km pour l’abscisse ; la banque le signale explicitement sans le corriger silencieusement."
      },
      {
        "content": "Cette formulation est conservée comme convention locale du support.",
        "correct": true,
        "explanation": "Le support local imprime 1/Km pour l’abscisse ; la banque le signale explicitement sans le corriger silencieusement."
      },
      {
        "content": "Le support affirme que l’ordonnée à l’origine vaut Km/Vmax.",
        "correct": false,
        "explanation": "Le support local imprime 1/Km pour l’abscisse ; la banque le signale explicitement sans le corriger silencieusement."
      }
    ],
    "explanation": "Le support local imprime 1/Km pour l’abscisse ; la banque le signale explicitement sans le corriger silencieusement."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Application : quelles propositions relatives à l’affinité et Km sont correctes ?",
    "choices": [
      {
        "content": "Un Km élevé traduit une faible affinité.",
        "correct": true,
        "explanation": "Dans le modèle pédagogique, l’affinité varie en sens inverse de Km."
      },
      {
        "content": "Km est indépendant des conditions expérimentales selon la fiche.",
        "correct": false,
        "explanation": "Dans le modèle pédagogique, l’affinité varie en sens inverse de Km."
      },
      {
        "content": "Km dépend des conditions expérimentales comme le pH et la température.",
        "correct": true,
        "explanation": "Dans le modèle pédagogique, l’affinité varie en sens inverse de Km."
      },
      {
        "content": "Un Km élevé signifie nécessairement une meilleure fixation du substrat.",
        "correct": false,
        "explanation": "Dans le modèle pédagogique, l’affinité varie en sens inverse de Km."
      }
    ],
    "explanation": "Dans le modèle pédagogique, l’affinité varie en sens inverse de Km."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Dans une situation d’application, quelle affirmation sur les exemples de Km faut-il retenir ?",
    "choices": [
      {
        "content": "Elle cite pénicillinase/benzylpénicilline avec environ 50 µM.",
        "correct": true,
        "explanation": "Les exemples illustrent des Km très différents."
      },
      {
        "content": "La β-galactosidase/lactose a un Km de 0 selon la fiche.",
        "correct": false,
        "explanation": "Les exemples illustrent des Km très différents."
      },
      {
        "content": "La pénicillinase/benzylpénicilline est donnée à 12000 mM.",
        "correct": false,
        "explanation": "Les exemples illustrent des Km très différents."
      },
      {
        "content": "Aucun exemple chiffré de Km n’est fourni.",
        "correct": false,
        "explanation": "Les exemples illustrent des Km très différents."
      }
    ],
    "explanation": "Les exemples illustrent des Km très différents."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour raisonner à partir de la fiche, quelles affirmations sur l’équation de Michaelis-Menten sont exactes ?",
    "choices": [
      {
        "content": "La fiche donne v0 = Vmax[S]/(Km+[S]).",
        "correct": true,
        "explanation": "L’équation de Michaelis-Menten permet de relier les paramètres cinétiques."
      },
      {
        "content": "La fiche donne v0 = Km/[S] sans Vmax.",
        "correct": false,
        "explanation": "L’équation de Michaelis-Menten permet de relier les paramètres cinétiques."
      },
      {
        "content": "Si [S]=Km, alors v0=Vmax/2.",
        "correct": true,
        "explanation": "L’équation de Michaelis-Menten permet de relier les paramètres cinétiques."
      },
      {
        "content": "Si [S]=Km, alors v0=2Vmax.",
        "correct": false,
        "explanation": "L’équation de Michaelis-Menten permet de relier les paramètres cinétiques."
      }
    ],
    "explanation": "L’équation de Michaelis-Menten permet de relier les paramètres cinétiques."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Application : quelles propositions relatives à la réaction d’ordre zéro sont correctes ?",
    "choices": [
      {
        "content": "La vitesse ne varie pas avec la diminution de [A] dans ce modèle.",
        "correct": true,
        "explanation": "Ordre zéro : vitesse constante par rapport à la concentration considérée."
      },
      {
        "content": "Sa vitesse est proportionnelle à [A][B].",
        "correct": false,
        "explanation": "Ordre zéro : vitesse constante par rapport à la concentration considérée."
      },
      {
        "content": "Sa vitesse est forcément nulle.",
        "correct": false,
        "explanation": "Ordre zéro : vitesse constante par rapport à la concentration considérée."
      },
      {
        "content": "Une réaction d’ordre zéro suit v=k[A].",
        "correct": false,
        "explanation": "Ordre zéro : vitesse constante par rapport à la concentration considérée."
      }
    ],
    "explanation": "Ordre zéro : vitesse constante par rapport à la concentration considérée."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans une situation d’application, quelle affirmation sur la réaction d’ordre un faut-il retenir ?",
    "choices": [
      {
        "content": "Le modèle concerne la transformation d’un substrat en produit.",
        "correct": true,
        "explanation": "Ordre un : vitesse proportionnelle à la concentration du substrat."
      },
      {
        "content": "L’ordre un implique obligatoirement deux substrats.",
        "correct": false,
        "explanation": "Ordre un : vitesse proportionnelle à la concentration du substrat."
      },
      {
        "content": "La fiche donne v=k[A].",
        "correct": true,
        "explanation": "Ordre un : vitesse proportionnelle à la concentration du substrat."
      },
      {
        "content": "La vitesse est toujours constante quelle que soit [A].",
        "correct": false,
        "explanation": "Ordre un : vitesse proportionnelle à la concentration du substrat."
      }
    ],
    "explanation": "Ordre un : vitesse proportionnelle à la concentration du substrat."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Si Vmax = 120 unités de vitesse, quelle vitesse correspond au point où [S] = Km ?",
    "answer": {
      "type": "number",
      "value": 60,
      "tolerance": 0
    },
    "explanation": "Km correspond à [S] lorsque v0 vaut la moitié de Vmax."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Application : quelles propositions relatives à la représentation de Lineweaver-Burk sont correctes ?",
    "choices": [
      {
        "content": "L’équation est une droite dont la pente vaut Km/Vmax.",
        "correct": true,
        "explanation": "La double inverse linéarise la relation de Michaelis-Menten."
      },
      {
        "content": "La pente vaut Vmax/Km dans la formule donnée.",
        "correct": false,
        "explanation": "La double inverse linéarise la relation de Michaelis-Menten."
      },
      {
        "content": "L’ordonnée à l’origine vaut 1/Vmax.",
        "correct": true,
        "explanation": "La double inverse linéarise la relation de Michaelis-Menten."
      },
      {
        "content": "L’ordonnée à l’origine vaut Km.",
        "correct": false,
        "explanation": "La double inverse linéarise la relation de Michaelis-Menten."
      }
    ],
    "explanation": "La double inverse linéarise la relation de Michaelis-Menten."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Dans une situation d’application, quelle affirmation sur le repère d’abscisse de Lineweaver-Burk dans la fiche faut-il retenir ?",
    "choices": [
      {
        "content": "L’ordonnée à l’origine est donnée comme 1/Vmax.",
        "correct": true,
        "explanation": "Le support local imprime 1/Km pour l’abscisse ; la banque le signale explicitement sans le corriger silencieusement."
      },
      {
        "content": "La fiche n’aborde aucune représentation double inverse.",
        "correct": false,
        "explanation": "Le support local imprime 1/Km pour l’abscisse ; la banque le signale explicitement sans le corriger silencieusement."
      },
      {
        "content": "Le support indique que l’abscisse d’intersection vaut Vmax.",
        "correct": false,
        "explanation": "Le support local imprime 1/Km pour l’abscisse ; la banque le signale explicitement sans le corriger silencieusement."
      },
      {
        "content": "Le support affirme que l’ordonnée à l’origine vaut Km/Vmax.",
        "correct": false,
        "explanation": "Le support local imprime 1/Km pour l’abscisse ; la banque le signale explicitement sans le corriger silencieusement."
      }
    ],
    "explanation": "Le support local imprime 1/Km pour l’abscisse ; la banque le signale explicitement sans le corriger silencieusement."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour raisonner à partir de la fiche, quelles affirmations sur la détermination pratique de Km et Vmax sont exactes ?",
    "choices": [
      {
        "content": "La fiche présente Lineweaver-Burk comme une représentation utilisée pour déterminer Km et Vmax précisément.",
        "correct": true,
        "explanation": "Deux représentations permettent de relier les données expérimentales à Km/Vmax."
      },
      {
        "content": "Km se détermine uniquement par la masse moléculaire de l’enzyme.",
        "correct": false,
        "explanation": "Deux représentations permettent de relier les données expérimentales à Km/Vmax."
      },
      {
        "content": "Vmax peut aussi être repérée sur le plateau de la courbe de Michaelis-Menten.",
        "correct": true,
        "explanation": "Deux représentations permettent de relier les données expérimentales à Km/Vmax."
      },
      {
        "content": "Vmax correspond à l’intersection de la courbe avec [S]=0.",
        "correct": false,
        "explanation": "Deux représentations permettent de relier les données expérimentales à Km/Vmax."
      }
    ],
    "explanation": "Deux représentations permettent de relier les données expérimentales à Km/Vmax."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Application : quelles propositions relatives à la courbe de Michaelis-Menten sont correctes ?",
    "choices": [
      {
        "content": "Elle tend vers un plateau Vmax.",
        "correct": true,
        "explanation": "La courbe v0=f([S]) tend vers Vmax."
      },
      {
        "content": "La courbe ne présente aucun plateau.",
        "correct": false,
        "explanation": "La courbe v0=f([S]) tend vers Vmax."
      },
      {
        "content": "Une seule valeur de substrat suffit à définir toute la courbe sans hypothèse.",
        "correct": false,
        "explanation": "La courbe v0=f([S]) tend vers Vmax."
      },
      {
        "content": "La vitesse décroît toujours quand [S] augmente.",
        "correct": false,
        "explanation": "La courbe v0=f([S]) tend vers Vmax."
      }
    ],
    "explanation": "La courbe v0=f([S]) tend vers Vmax."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Autour de la courbe de Michaelis-Menten : sélectionnez exactement les trois affirmations correctes parmi les propositions suivantes.",
    "requiredSelectionCount": 3,
    "choices": [
      {
        "content": "La fiche présente Lineweaver-Burk comme une représentation utilisée pour déterminer Km et Vmax précisément.",
        "correct": true,
        "explanation": "Deux représentations permettent de relier les données expérimentales à Km/Vmax."
      },
      {
        "content": "Elle tend vers un plateau Vmax.",
        "correct": true,
        "explanation": "La courbe v0=f([S]) tend vers Vmax."
      },
      {
        "content": "La fiche relie Km au couple enzyme-substrat.",
        "correct": true,
        "explanation": "Km correspond à [S] lorsque v0 vaut la moitié de Vmax."
      },
      {
        "content": "Un Km faible traduit toujours une faible affinité.",
        "correct": false,
        "explanation": "Dans le modèle pédagogique, l’affinité varie en sens inverse de Km."
      },
      {
        "content": "Aucun exemple chiffré de Km n’est fourni.",
        "correct": false,
        "explanation": "Les exemples illustrent des Km très différents."
      },
      {
        "content": "L’équation ne comporte pas la concentration en substrat.",
        "correct": false,
        "explanation": "L’équation de Michaelis-Menten permet de relier les paramètres cinétiques."
      }
    ],
    "explanation": "Cette question croise plusieurs repères de la section ; chaque proposition doit être évaluée séparément."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Consolidation de la courbe de Michaelis-Menten : sélectionnez exactement les cinq affirmations correctes.",
    "requiredSelectionCount": 5,
    "choices": [
      {
        "content": "La vitesse initiale augmente avec la concentration en substrat.",
        "correct": true,
        "explanation": "La courbe v0=f([S]) tend vers Vmax."
      },
      {
        "content": "Km est donc lu sur l’axe des concentrations à mi-vitesse maximale.",
        "correct": true,
        "explanation": "Km correspond à [S] lorsque v0 vaut la moitié de Vmax."
      },
      {
        "content": "Km dépend des conditions expérimentales comme le pH et la température.",
        "correct": true,
        "explanation": "Dans le modèle pédagogique, l’affinité varie en sens inverse de Km."
      },
      {
        "content": "La fiche cite β-galactosidase/lactose avec Km d’environ 4000 µM.",
        "correct": true,
        "explanation": "Les exemples illustrent des Km très différents."
      },
      {
        "content": "Si [S]=Km, alors v0=Vmax/2.",
        "correct": true,
        "explanation": "L’équation de Michaelis-Menten permet de relier les paramètres cinétiques."
      },
      {
        "content": "Sa vitesse est forcément nulle.",
        "correct": false,
        "explanation": "Ordre zéro : vitesse constante par rapport à la concentration considérée."
      },
      {
        "content": "La vitesse est toujours constante quelle que soit [A].",
        "correct": false,
        "explanation": "Ordre un : vitesse proportionnelle à la concentration du substrat."
      },
      {
        "content": "La vitesse est indépendante des concentrations.",
        "correct": false,
        "explanation": "Ordre deux : vitesse proportionnelle au produit des concentrations de deux réactifs."
      }
    ],
    "explanation": "La sélection longue vérifie la maîtrise simultanée de plusieurs notions du chapitre."
  }
];
