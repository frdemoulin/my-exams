import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

export const UE14_CELL_CH1_SECTION_D_V2: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Selon la fiche, quelles propositions concernant « les quatre grandes méthodes de marquage moléculaire de la fiche » sont correctes ?",
    "choices": [
      {
        "content": "La fiche cite l’immunomarquage.",
        "correct": true,
        "explanation": "Quatre grandes stratégies sont comparées dans le support."
      },
      {
        "content": "La fiche cite uniquement la PCR et le séquençage.",
        "correct": false,
        "explanation": "Quatre grandes stratégies sont comparées dans le support."
      },
      {
        "content": "Elle cite l’hybridation in situ.",
        "correct": true,
        "explanation": "Quatre grandes stratégies sont comparées dans le support."
      },
      {
        "content": "L’immunomarquage est explicitement exclu.",
        "correct": false,
        "explanation": "Quatre grandes stratégies sont comparées dans le support."
      }
    ],
    "explanation": "Quatre grandes stratégies sont comparées dans le support."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de « l’immunomarquage », quelle proposition est juste ?",
    "choices": [
      {
        "content": "Un anticorps anti-X reconnaît une partie appelée épitope.",
        "correct": true,
        "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
      },
      {
        "content": "L’épitope est une partie du fluorochrome et non de l’antigène.",
        "correct": false,
        "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
      },
      {
        "content": "Les anticorps en excès ne sont jamais éliminés.",
        "correct": false,
        "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
      },
      {
        "content": "L’immunomarquage repose sur la complémentarité de deux séquences d’ADN sans anticorps.",
        "correct": false,
        "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
      }
    ],
    "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Réponse numérique en nm : quelle longueur d’onde d’excitation est citée pour Alexa 488 ?",
    "answer": {
      "type": "number",
      "value": 488,
      "tolerance": 0
    },
    "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les énoncés suivants, lequel est exact pour « l’hybridation in situ » ?",
    "choices": [
      {
        "content": "Elle repose sur la complémentarité des séquences nucléotidiques.",
        "correct": true,
        "explanation": "La sonde d’hybridation détecte une séquence nucléotidique complémentaire."
      },
      {
        "content": "Elle utilise nécessairement un anticorps anti-épitope.",
        "correct": false,
        "explanation": "La sonde d’hybridation détecte une séquence nucléotidique complémentaire."
      },
      {
        "content": "Elle ne peut jamais cibler l’ARN.",
        "correct": false,
        "explanation": "La sonde d’hybridation détecte une séquence nucléotidique complémentaire."
      },
      {
        "content": "La sonde doit être non complémentaire à la cible.",
        "correct": false,
        "explanation": "La sonde d’hybridation détecte une séquence nucléotidique complémentaire."
      }
    ],
    "explanation": "La sonde d’hybridation détecte une séquence nucléotidique complémentaire."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour caractériser « les protéines autofluorescentes », quelles affirmations sont exactes ?",
    "choices": [
      {
        "content": "Une construction chimérique associe le gène de la protéine étudiée au gène de la protéine fluorescente.",
        "correct": true,
        "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
      },
      {
        "content": "La protéine chimérique est obtenue sans aucun matériel génétique.",
        "correct": false,
        "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
      },
      {
        "content": "La fluorescence peut être observée dans des cellules vivantes.",
        "correct": true,
        "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
      },
      {
        "content": "La fiche exclut toute variante de protéine fluorescente.",
        "correct": false,
        "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
      }
    ],
    "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle proposition est exacte concernant « la transfection selon la fiche » ?",
    "choices": [
      {
        "content": "La transfection sert ici à introduire une construction génétique dans la cellule.",
        "correct": true,
        "explanation": "La formulation locale associe transfection, encapsidation de l’ADN recombinant et fusion membranaire."
      },
      {
        "content": "La fiche parle de transfection uniquement pour des cellules déjà fixées.",
        "correct": false,
        "explanation": "La formulation locale associe transfection, encapsidation de l’ADN recombinant et fusion membranaire."
      },
      {
        "content": "La fiche définit la transfection comme l’injection d’un anticorps dans le noyau.",
        "correct": false,
        "explanation": "La formulation locale associe transfection, encapsidation de l’ADN recombinant et fusion membranaire."
      },
      {
        "content": "La transfection détruit nécessairement la membrane plasmique.",
        "correct": false,
        "explanation": "La formulation locale associe transfection, encapsidation de l’ADN recombinant et fusion membranaire."
      }
    ],
    "explanation": "La formulation locale associe transfection, encapsidation de l’ADN recombinant et fusion membranaire."
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de « l’électroporation », quelles affirmations sont conformes à la fiche ?",
    "choices": [
      {
        "content": "La fiche définit l’électroporation comme une perméabilisation de la membrane par un choc électrique.",
        "correct": true,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      },
      {
        "content": "L’électroporation est une technique d’hybridation in situ.",
        "correct": false,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      },
      {
        "content": "Elle peut servir à introduire la construction génétique dans une cellule.",
        "correct": true,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      },
      {
        "content": "Elle repose sur un choc thermique sans effet membranaire.",
        "correct": false,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      }
    ],
    "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi ces propositions sur « la micro-injection de protéines marquées », laquelle est correcte ?",
    "choices": [
      {
        "content": "La protéine marquée est micro-injectée dans le cytoplasme ou le noyau d’une cellule vivante.",
        "correct": true,
        "explanation": "La micro-injection permet de suivre une protéine préalablement marquée."
      },
      {
        "content": "L’or colloïdal est décrit comme un acide nucléique.",
        "correct": false,
        "explanation": "La micro-injection permet de suivre une protéine préalablement marquée."
      },
      {
        "content": "La protéine marquée ne peut jamais être injectée dans le noyau.",
        "correct": false,
        "explanation": "La micro-injection permet de suivre une protéine préalablement marquée."
      },
      {
        "content": "La micro-injection est réalisée uniquement dans une cellule déjà détruite.",
        "correct": false,
        "explanation": "La micro-injection permet de suivre une protéine préalablement marquée."
      }
    ],
    "explanation": "La micro-injection permet de suivre une protéine préalablement marquée."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour « la compatibilité des méthodes avec cellules vivantes ou fixées », quelles affirmations sont correctes selon le support ?",
    "choices": [
      {
        "content": "Les protéines autofluorescentes et les protéines marquées peuvent être observées sur cellules vivantes ou fixées.",
        "correct": true,
        "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
      },
      {
        "content": "La GFP est incompatible avec toute cellule vivante.",
        "correct": false,
        "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
      },
      {
        "content": "Dans le tableau de la fiche, l’immunomarquage est utilisé sur cellules fixées.",
        "correct": true,
        "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
      },
      {
        "content": "L’immunomarquage est présenté comme une méthode de référence sur cellules vivantes dans ce tableau.",
        "correct": false,
        "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
      }
    ],
    "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Selon le support, quelle affirmation concernant « le choix d’une méthode de localisation moléculaire » est juste ?",
    "choices": [
      {
        "content": "Le choix dépend notamment de la nature de la cible et du besoin d’observer une cellule vivante ou fixée.",
        "correct": true,
        "explanation": "La comparaison des méthodes aide à choisir la stratégie expérimentale adaptée."
      },
      {
        "content": "Toutes les méthodes sont interchangeables sans tenir compte de la cible.",
        "correct": false,
        "explanation": "La comparaison des méthodes aide à choisir la stratégie expérimentale adaptée."
      },
      {
        "content": "Une séquence d’ARN ne peut être localisée par aucune des méthodes de la fiche.",
        "correct": false,
        "explanation": "La comparaison des méthodes aide à choisir la stratégie expérimentale adaptée."
      },
      {
        "content": "Suivre une protéine dans une cellule vivante impose obligatoirement un immunomarquage après fixation.",
        "correct": false,
        "explanation": "La comparaison des méthodes aide à choisir la stratégie expérimentale adaptée."
      }
    ],
    "explanation": "La comparaison des méthodes aide à choisir la stratégie expérimentale adaptée."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans une situation d’application concernant « le fluorochrome Alexa 488 dans l’exemple d’immunofluorescence », quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L’excitation à 488 nm permet l’observation de la protéine d’intérêt dans l’exemple.",
        "correct": true,
        "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
      },
      {
        "content": "L’excitation citée est 488 µm.",
        "correct": false,
        "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
      },
      {
        "content": "Les anticorps non liés sont éliminés par lavage.",
        "correct": true,
        "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
      },
      {
        "content": "Le lavage sert à éliminer les anticorps liés spécifiquement.",
        "correct": false,
        "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
      }
    ],
    "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle donnée relative à « l’hybridation in situ » est correcte ?",
    "choices": [
      {
        "content": "Elle peut permettre de localiser un ADN ou un ARN d’intérêt dans une cellule fixée.",
        "correct": true,
        "explanation": "La sonde d’hybridation détecte une séquence nucléotidique complémentaire."
      },
      {
        "content": "La sonde doit être non complémentaire à la cible.",
        "correct": false,
        "explanation": "La sonde d’hybridation détecte une séquence nucléotidique complémentaire."
      },
      {
        "content": "Elle utilise nécessairement un anticorps anti-épitope.",
        "correct": false,
        "explanation": "La sonde d’hybridation détecte une séquence nucléotidique complémentaire."
      },
      {
        "content": "Elle ne peut jamais cibler l’ARN.",
        "correct": false,
        "explanation": "La sonde d’hybridation détecte une séquence nucléotidique complémentaire."
      }
    ],
    "explanation": "La sonde d’hybridation détecte une séquence nucléotidique complémentaire."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un chercheur souhaite suivre au cours du temps la redistribution d’une protéine dans une cellule vivante. Pour interpréter cette situation, quelles propositions faut-il retenir ?",
    "choices": [
      {
        "content": "La fiche cite la GFP.",
        "correct": true,
        "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
      },
      {
        "content": "La GFP ne peut être utilisée que sur des cellules mortes depuis plusieurs jours.",
        "correct": false,
        "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
      },
      {
        "content": "Une construction chimérique associe le gène de la protéine étudiée au gène de la protéine fluorescente.",
        "correct": true,
        "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
      },
      {
        "content": "La protéine chimérique est obtenue sans aucun matériel génétique.",
        "correct": false,
        "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
      }
    ],
    "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de « la transfection selon la fiche », quelle proposition est juste ?",
    "choices": [
      {
        "content": "Cette structure fusionne ensuite avec la membrane plasmique.",
        "correct": true,
        "explanation": "La formulation locale associe transfection, encapsidation de l’ADN recombinant et fusion membranaire."
      },
      {
        "content": "La transfection détruit nécessairement la membrane plasmique.",
        "correct": false,
        "explanation": "La formulation locale associe transfection, encapsidation de l’ADN recombinant et fusion membranaire."
      },
      {
        "content": "La fiche parle de transfection uniquement pour des cellules déjà fixées.",
        "correct": false,
        "explanation": "La formulation locale associe transfection, encapsidation de l’ADN recombinant et fusion membranaire."
      },
      {
        "content": "La fiche définit la transfection comme l’injection d’un anticorps dans le noyau.",
        "correct": false,
        "explanation": "La formulation locale associe transfection, encapsidation de l’ADN recombinant et fusion membranaire."
      }
    ],
    "explanation": "La formulation locale associe transfection, encapsidation de l’ADN recombinant et fusion membranaire."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels repères sur « l’électroporation » sont utiles dans une situation d’application ?",
    "choices": [
      {
        "content": "Elle constitue une alternative à la transfection dans la séquence GFP.",
        "correct": true,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      },
      {
        "content": "La fiche l’utilise uniquement pour fixer les cellules.",
        "correct": false,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      },
      {
        "content": "La fiche définit l’électroporation comme une perméabilisation de la membrane par un choc électrique.",
        "correct": true,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      },
      {
        "content": "L’électroporation est une technique d’hybridation in situ.",
        "correct": false,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      }
    ],
    "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Application — Réponse numérique en nm : quelle longueur d’onde d’excitation est citée pour Alexa 488 ?",
    "answer": {
      "type": "number",
      "value": 488,
      "tolerance": 0
    },
    "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Application raisonnée de « la compatibilité des méthodes avec cellules vivantes ou fixées » : quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "L’hybridation in situ est utilisée sur cellules fixées.",
        "correct": true,
        "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
      },
      {
        "content": "L’hybridation in situ est réservée aux cellules vivantes.",
        "correct": false,
        "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
      },
      {
        "content": "Les protéines autofluorescentes et les protéines marquées peuvent être observées sur cellules vivantes ou fixées.",
        "correct": true,
        "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
      },
      {
        "content": "La GFP est incompatible avec toute cellule vivante.",
        "correct": false,
        "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
      }
    ],
    "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition est exacte concernant « le choix d’une méthode de localisation moléculaire » ?",
    "choices": [
      {
        "content": "Une séquence d’ARN dans une cellule fixée peut être recherchée par hybridation in situ.",
        "correct": true,
        "explanation": "La comparaison des méthodes aide à choisir la stratégie expérimentale adaptée."
      },
      {
        "content": "Suivre une protéine dans une cellule vivante impose obligatoirement un immunomarquage après fixation.",
        "correct": false,
        "explanation": "La comparaison des méthodes aide à choisir la stratégie expérimentale adaptée."
      },
      {
        "content": "Toutes les méthodes sont interchangeables sans tenir compte de la cible.",
        "correct": false,
        "explanation": "La comparaison des méthodes aide à choisir la stratégie expérimentale adaptée."
      },
      {
        "content": "Une séquence d’ARN ne peut être localisée par aucune des méthodes de la fiche.",
        "correct": false,
        "explanation": "La comparaison des méthodes aide à choisir la stratégie expérimentale adaptée."
      }
    ],
    "explanation": "La comparaison des méthodes aide à choisir la stratégie expérimentale adaptée."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Application transversale autour de « les quatre grandes méthodes de marquage moléculaire de la fiche » — sélectionnez exactement les trois affirmations correctes.",
    "requiredSelectionCount": 3,
    "choices": [
      {
        "content": "Dans le tableau de la fiche, l’immunomarquage est utilisé sur cellules fixées.",
        "correct": true,
        "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
      },
      {
        "content": "Une protéine dynamique dans une cellule vivante peut être suivie avec une stratégie autofluorescente.",
        "correct": true,
        "explanation": "La comparaison des méthodes aide à choisir la stratégie expérimentale adaptée."
      },
      {
        "content": "Elle cite les protéines autofluorescentes et la micro-injection de protéines marquées.",
        "correct": true,
        "explanation": "Quatre grandes stratégies sont comparées dans le support."
      },
      {
        "content": "L’immunomarquage repose sur la complémentarité de deux séquences d’ADN sans anticorps.",
        "correct": false,
        "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
      },
      {
        "content": "L’excitation citée est 488 µm.",
        "correct": false,
        "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
      },
      {
        "content": "La sonde doit être non complémentaire à la cible.",
        "correct": false,
        "explanation": "La sonde d’hybridation détecte une séquence nucléotidique complémentaire."
      }
    ],
    "explanation": "Cette question croise plusieurs repères de la section."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi ces propositions sur « l’immunomarquage », laquelle est correcte ?",
    "choices": [
      {
        "content": "Un anticorps anti-X reconnaît une partie appelée épitope.",
        "correct": true,
        "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
      },
      {
        "content": "L’épitope est une partie du fluorochrome et non de l’antigène.",
        "correct": false,
        "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
      },
      {
        "content": "Les anticorps en excès ne sont jamais éliminés.",
        "correct": false,
        "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
      },
      {
        "content": "L’immunomarquage repose sur la complémentarité de deux séquences d’ADN sans anticorps.",
        "correct": false,
        "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
      }
    ],
    "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Mise en application de « le fluorochrome Alexa 488 dans l’exemple d’immunofluorescence » : quelles affirmations sont justes ?",
    "choices": [
      {
        "content": "Les anticorps non liés sont éliminés par lavage.",
        "correct": true,
        "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
      },
      {
        "content": "Le lavage sert à éliminer les anticorps liés spécifiquement.",
        "correct": false,
        "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
      },
      {
        "content": "La fiche cite Alexa 488 comme exemple de marqueur fluorescent.",
        "correct": true,
        "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
      },
      {
        "content": "Alexa 488 est décrit comme une enzyme de digestion cellulaire.",
        "correct": false,
        "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
      }
    ],
    "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "question": "Consolidation de « les quatre grandes méthodes de marquage moléculaire de la fiche » — sélectionnez exactement les cinq affirmations correctes.",
    "requiredSelectionCount": 5,
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
        "content": "La fiche l’utilise uniquement pour fixer les cellules.",
        "correct": false,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      },
      {
        "content": "La micro-injection est réalisée uniquement dans une cellule déjà détruite.",
        "correct": false,
        "explanation": "La micro-injection permet de suivre une protéine préalablement marquée."
      },
      {
        "content": "L’hybridation in situ est réservée aux cellules vivantes.",
        "correct": false,
        "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
      }
    ],
    "explanation": "La sélection longue vérifie plusieurs notions de la section simultanément."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sur ce schéma original d’une cellule fixée en immunofluorescence, cliquez sur l’anticorps fluorescent qui reconnaît la protéine cible.",
    "image": {
      "src": "/images/training/ue14/biologie-cellulaire/organisation-methodes-etude-cellule/immunomarquage-anticorps-qzone.svg",
      "alt": "Schéma simplifié d’un immunomarquage avec protéine cible, anticorps fluorescent et membrane d’une cellule fixée",
      "width": 900,
      "height": 540
    },
    "expectedZones": [
      {
        "id": "antibody",
        "label": "anticorps fluorescent",
        "x": 0.66,
        "y": 0.39,
        "tolerance": 0.095
      }
    ],
    "explanation": "Dans l’immunomarquage présenté, l’anticorps marqué reconnaît spécifiquement un épitope de la protéine cible dans une cellule fixée."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise transversale — croisez « l’immunomarquage » et « les protéines autofluorescentes ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un anticorps anti-X reconnaît une partie appelée épitope.",
        "correct": true,
        "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
      },
      {
        "content": "La fluorescence peut être observée dans des cellules vivantes.",
        "correct": true,
        "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
      },
      {
        "content": "Les anticorps en excès ne sont jamais éliminés.",
        "correct": false,
        "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
      },
      {
        "content": "La protéine chimérique est obtenue sans aucun matériel génétique.",
        "correct": false,
        "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
      }
    ],
    "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps. La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise transversale — croisez « le fluorochrome Alexa 488 dans l’exemple d’immunofluorescence » et « la transfection selon la fiche ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les anticorps non liés sont éliminés par lavage.",
        "correct": true,
        "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
      },
      {
        "content": "La fiche décrit l’encapsidation de l’ADN recombinant dans une structure de type liposome.",
        "correct": true,
        "explanation": "La formulation locale associe transfection, encapsidation de l’ADN recombinant et fusion membranaire."
      },
      {
        "content": "Alexa 488 est décrit comme une enzyme de digestion cellulaire.",
        "correct": false,
        "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
      },
      {
        "content": "La fiche parle de transfection uniquement pour des cellules déjà fixées.",
        "correct": false,
        "explanation": "La formulation locale associe transfection, encapsidation de l’ADN recombinant et fusion membranaire."
      }
    ],
    "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage. La formulation locale associe transfection, encapsidation de l’ADN recombinant et fusion membranaire."
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise transversale — croisez « l’hybridation in situ » et « l’électroporation ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle repose sur la complémentarité des séquences nucléotidiques.",
        "correct": true,
        "explanation": "La sonde d’hybridation détecte une séquence nucléotidique complémentaire."
      },
      {
        "content": "Elle peut servir à introduire la construction génétique dans une cellule.",
        "correct": true,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      },
      {
        "content": "Elle ne peut jamais cibler l’ARN.",
        "correct": false,
        "explanation": "La sonde d’hybridation détecte une séquence nucléotidique complémentaire."
      },
      {
        "content": "L’électroporation est une technique d’hybridation in situ.",
        "correct": false,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      }
    ],
    "explanation": "La sonde d’hybridation détecte une séquence nucléotidique complémentaire. L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise transversale — croisez « les protéines autofluorescentes » et « la micro-injection de protéines marquées ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une construction chimérique associe le gène de la protéine étudiée au gène de la protéine fluorescente.",
        "correct": true,
        "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
      },
      {
        "content": "Le type de marqueur détermine la technique d’observation.",
        "correct": true,
        "explanation": "La micro-injection permet de suivre une protéine préalablement marquée."
      },
      {
        "content": "La fiche exclut toute variante de protéine fluorescente.",
        "correct": false,
        "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
      },
      {
        "content": "L’or colloïdal est décrit comme un acide nucléique.",
        "correct": false,
        "explanation": "La micro-injection permet de suivre une protéine préalablement marquée."
      }
    ],
    "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule. La micro-injection permet de suivre une protéine préalablement marquée."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise transversale — croisez « la transfection selon la fiche » et « la compatibilité des méthodes avec cellules vivantes ou fixées ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La transfection sert ici à introduire une construction génétique dans la cellule.",
        "correct": true,
        "explanation": "La formulation locale associe transfection, encapsidation de l’ADN recombinant et fusion membranaire."
      },
      {
        "content": "Dans le tableau de la fiche, l’immunomarquage est utilisé sur cellules fixées.",
        "correct": true,
        "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
      },
      {
        "content": "La fiche définit la transfection comme l’injection d’un anticorps dans le noyau.",
        "correct": false,
        "explanation": "La formulation locale associe transfection, encapsidation de l’ADN recombinant et fusion membranaire."
      },
      {
        "content": "La GFP est incompatible avec toute cellule vivante.",
        "correct": false,
        "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
      }
    ],
    "explanation": "La formulation locale associe transfection, encapsidation de l’ADN recombinant et fusion membranaire. Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise transversale — croisez « l’électroporation » et « le choix d’une méthode de localisation moléculaire ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La fiche définit l’électroporation comme une perméabilisation de la membrane par un choc électrique.",
        "correct": true,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      },
      {
        "content": "Une protéine dynamique dans une cellule vivante peut être suivie avec une stratégie autofluorescente.",
        "correct": true,
        "explanation": "La comparaison des méthodes aide à choisir la stratégie expérimentale adaptée."
      },
      {
        "content": "Elle repose sur un choc thermique sans effet membranaire.",
        "correct": false,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      },
      {
        "content": "Toutes les méthodes sont interchangeables sans tenir compte de la cible.",
        "correct": false,
        "explanation": "La comparaison des méthodes aide à choisir la stratégie expérimentale adaptée."
      }
    ],
    "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique. La comparaison des méthodes aide à choisir la stratégie expérimentale adaptée."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise transversale — croisez « la micro-injection de protéines marquées » et « les quatre grandes méthodes de marquage moléculaire de la fiche ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La protéine marquée est micro-injectée dans le cytoplasme ou le noyau d’une cellule vivante.",
        "correct": true,
        "explanation": "La micro-injection permet de suivre une protéine préalablement marquée."
      },
      {
        "content": "Elle cite les protéines autofluorescentes et la micro-injection de protéines marquées.",
        "correct": true,
        "explanation": "Quatre grandes stratégies sont comparées dans le support."
      },
      {
        "content": "La protéine marquée ne peut jamais être injectée dans le noyau.",
        "correct": false,
        "explanation": "La micro-injection permet de suivre une protéine préalablement marquée."
      },
      {
        "content": "L’immunomarquage est explicitement exclu.",
        "correct": false,
        "explanation": "Quatre grandes stratégies sont comparées dans le support."
      }
    ],
    "explanation": "La micro-injection permet de suivre une protéine préalablement marquée. Quatre grandes stratégies sont comparées dans le support."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise transversale — croisez « la compatibilité des méthodes avec cellules vivantes ou fixées » et « l’immunomarquage ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les protéines autofluorescentes et les protéines marquées peuvent être observées sur cellules vivantes ou fixées.",
        "correct": true,
        "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
      },
      {
        "content": "L’immunomarquage repose sur l’affinité d’un anticorps pour un antigène.",
        "correct": true,
        "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
      },
      {
        "content": "L’immunomarquage est présenté comme une méthode de référence sur cellules vivantes dans ce tableau.",
        "correct": false,
        "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
      },
      {
        "content": "Les anticorps en excès ne sont jamais éliminés.",
        "correct": false,
        "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
      }
    ],
    "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant. La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Maîtrise — sélectionnez exactement les trois affirmations correctes.",
    "requiredSelectionCount": 3,
    "choices": [
      {
        "content": "Le choix dépend notamment de la nature de la cible et du besoin d’observer une cellule vivante ou fixée.",
        "correct": true,
        "explanation": "La comparaison des méthodes aide à choisir la stratégie expérimentale adaptée."
      },
      {
        "content": "Elle cite l’hybridation in situ.",
        "correct": true,
        "explanation": "Quatre grandes stratégies sont comparées dans le support."
      },
      {
        "content": "Dans l’exemple, des anticorps marqués peuvent être détectés par fluorescence.",
        "correct": true,
        "explanation": "La fiche fonde l’immunomarquage sur la reconnaissance spécifique antigène-anticorps."
      },
      {
        "content": "Alexa 488 est décrit comme une enzyme de digestion cellulaire.",
        "correct": false,
        "explanation": "Alexa 488 est l’exemple pédagogique de fluorochrome utilisé dans l’immunomarquage."
      },
      {
        "content": "Elle ne peut jamais cibler l’ARN.",
        "correct": false,
        "explanation": "La sonde d’hybridation détecte une séquence nucléotidique complémentaire."
      },
      {
        "content": "La fiche exclut toute variante de protéine fluorescente.",
        "correct": false,
        "explanation": "La stratégie GFP permet de suivre une protéine chimérique produite par la cellule."
      }
    ],
    "explanation": "Cette question croise plusieurs repères de la section."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise transversale — croisez « les quatre grandes méthodes de marquage moléculaire de la fiche » et « l’hybridation in situ ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle cite l’hybridation in situ.",
        "correct": true,
        "explanation": "Quatre grandes stratégies sont comparées dans le support."
      },
      {
        "content": "Elle peut permettre de localiser un ADN ou un ARN d’intérêt dans une cellule fixée.",
        "correct": true,
        "explanation": "La sonde d’hybridation détecte une séquence nucléotidique complémentaire."
      },
      {
        "content": "Aucune méthode ne permet de localiser une protéine.",
        "correct": false,
        "explanation": "Quatre grandes stratégies sont comparées dans le support."
      },
      {
        "content": "Elle ne peut jamais cibler l’ARN.",
        "correct": false,
        "explanation": "La sonde d’hybridation détecte une séquence nucléotidique complémentaire."
      }
    ],
    "explanation": "Quatre grandes stratégies sont comparées dans le support. La sonde d’hybridation détecte une séquence nucléotidique complémentaire."
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRPL",
    "question": "Maîtrise — sélectionnez exactement les cinq affirmations correctes.",
    "requiredSelectionCount": 5,
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
        "content": "La fiche l’utilise uniquement pour fixer les cellules.",
        "correct": false,
        "explanation": "L’électroporation augmente transitoirement la perméabilité membranaire par une impulsion électrique."
      },
      {
        "content": "La micro-injection est réalisée uniquement dans une cellule déjà détruite.",
        "correct": false,
        "explanation": "La micro-injection permet de suivre une protéine préalablement marquée."
      },
      {
        "content": "L’hybridation in situ est réservée aux cellules vivantes.",
        "correct": false,
        "explanation": "Le tableau final oppose les méthodes nécessitant la fixation à celles permettant un suivi vivant."
      }
    ],
    "explanation": "La sélection longue vérifie plusieurs notions de la section simultanément."
  }
];
