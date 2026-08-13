import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.6 – Section D – Application aux sucres : caractère réducteur, représentations et cyclisation
 */

export const UE14_CH10_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 79,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans le modèle simplifié de la fiche appliqué aux sucres, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un sucre portant une fonction aldéhyde est présenté comme réducteur.",
        "correct": true,
        "explanation": "La fonction aldéhyde est oxydable et peut réduire un agent d'oxydation."
      },
      {
        "content": "Le glucose est cité comme sucre réducteur.",
        "correct": true,
        "explanation": "Exemple explicite."
      },
      {
        "content": "Un sucre portant une fonction cétone est présenté comme non réducteur dans ce modèle.",
        "correct": true,
        "explanation": "C'est la formulation du support."
      },
      {
        "content": "Le fructose est cité comme sucre réducteur dans cette fiche.",
        "correct": false,
        "explanation": "La fiche le classe ici comme non réducteur."
      }
    ],
    "explanation": "La banque suit volontairement le modèle de la fiche : glucose aldéhydique réducteur, fructose cétonique non réducteur."
  },
  {
    "order": 80,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel sucre est cité comme réducteur dans le modèle de la fiche ?",
    "choices": [
      {
        "content": "Glucose.",
        "correct": true,
        "explanation": "Il est relié à une fonction aldéhyde."
      },
      {
        "content": "Fructose.",
        "correct": false,
        "explanation": "La fiche le classe ici comme non réducteur."
      },
      {
        "content": "Aucun sucre.",
        "correct": false,
        "explanation": "Le glucose est explicitement cité."
      },
      {
        "content": "Tous les sucres sans distinction.",
        "correct": false,
        "explanation": "Le support distingue glucose et fructose."
      }
    ],
    "explanation": "Le glucose illustre le lien entre fonction aldéhyde et caractère réducteur dans la fiche."
  },
  {
    "order": 81,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel sucre est cité comme non réducteur dans le modèle simplifié de cette fiche ?",
    "choices": [
      {
        "content": "Fructose.",
        "correct": true,
        "explanation": "La fonction cétone est présentée comme non oxydable dans ce modèle."
      },
      {
        "content": "Glucose.",
        "correct": false,
        "explanation": "Il est donné comme réducteur."
      },
      {
        "content": "Méthanal.",
        "correct": false,
        "explanation": "Ce n'est pas un sucre."
      },
      {
        "content": "Acétone.",
        "correct": false,
        "explanation": "Ce n'est pas un sucre."
      }
    ],
    "explanation": "Pour respecter le support local, le fructose est traité ici comme sucre non réducteur."
  },
  {
    "order": 82,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi un sucre aldéhydique est-il présenté comme réducteur dans la fiche ?",
    "choices": [
      {
        "content": "La fonction aldéhyde est oxydable.",
        "correct": true,
        "explanation": "Point de départ."
      },
      {
        "content": "En s'oxydant, elle peut réduire un agent d'oxydation.",
        "correct": true,
        "explanation": "Lien redox explicitement donné."
      },
      {
        "content": "Le glucose est l'exemple cité.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "Parce que la fonction aldéhyde est inerte à l'oxydation.",
        "correct": false,
        "explanation": "C'est l'inverse."
      }
    ],
    "explanation": "Le caractère réducteur découle ici de l'oxydabilité de la fonction aldéhyde."
  },
  {
    "order": 83,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans la représentation linéaire du glucose présentée dans la fiche, de haut en bas on trouve :",
    "choices": [
      {
        "content": "Une fonction aldéhyde.",
        "correct": true,
        "explanation": "Placée en haut."
      },
      {
        "content": "La chaîne carbonée.",
        "correct": true,
        "explanation": "Partie centrale."
      },
      {
        "content": "Un alcool primaire.",
        "correct": true,
        "explanation": "Placée en bas."
      },
      {
        "content": "Une fonction amide terminale.",
        "correct": false,
        "explanation": "Aucune amide dans ce schéma."
      }
    ],
    "explanation": "Le support donne explicitement cette lecture verticale de la forme linéaire du glucose."
  },
  {
    "order": 84,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel groupe est placé en haut de la représentation linéaire du glucose dans la fiche ?",
    "choices": [
      {
        "content": "$\\mathrm{CHO}$.",
        "correct": true,
        "explanation": "Fonction aldéhyde."
      },
      {
        "content": "$\\mathrm{CH_2OH}$.",
        "correct": false,
        "explanation": "Le groupe alcool primaire est placé en bas."
      },
      {
        "content": "$\\mathrm{COOH}$.",
        "correct": false,
        "explanation": "Ce n'est pas la représentation montrée."
      },
      {
        "content": "$\\mathrm{NH_2}$.",
        "correct": false,
        "explanation": "Pas de fonction amine dans ce schéma."
      }
    ],
    "explanation": "Le groupe CHO terminal est représenté en haut."
  },
  {
    "order": 85,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel groupe est placé en bas de la représentation linéaire du glucose dans la fiche ?",
    "choices": [
      {
        "content": "$\\mathrm{CH_2OH}$.",
        "correct": true,
        "explanation": "Alcool primaire terminal."
      },
      {
        "content": "$\\mathrm{CHO}$.",
        "correct": false,
        "explanation": "Placé en haut."
      },
      {
        "content": "$\\mathrm{COCl}$.",
        "correct": false,
        "explanation": "Chlorure d'acyle."
      },
      {
        "content": "$\\mathrm{MgX}$.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "Le groupe CH2OH terminal se trouve en bas de la projection linéaire donnée."
  },
  {
    "order": 86,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la projection linéaire des sucres dans la fiche :",
    "choices": [
      {
        "content": "Elle est une représentation conventionnelle d'atomes de carbone tétraédriques.",
        "correct": true,
        "explanation": "Le support rappelle le volume du carbone."
      },
      {
        "content": "Les liaisons C-H et C-OH dessinées horizontalement sont décrites comme dirigées vers l'observateur.",
        "correct": true,
        "explanation": "C'est la convention expliquée."
      },
      {
        "content": "Les liaisons C-C de l'axe vertical sont décrites comme dirigées vers l'arrière dans l'explication du support.",
        "correct": true,
        "explanation": "La fiche oppose les directions horizontales et verticales."
      },
      {
        "content": "La molécule réelle est strictement plane.",
        "correct": false,
        "explanation": "Le support insiste sur son caractère tridimensionnel."
      }
    ],
    "explanation": "La projection plane encode une géométrie tridimensionnelle."
  },
  {
    "order": 87,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelle représentation la fiche qualifie-t-elle de plus fidèle à la réalité pour la forme cyclique d'un sucre ?",
    "choices": [
      {
        "content": "La représentation en perspective.",
        "correct": true,
        "explanation": "Le cycle est dessiné dans l'espace."
      },
      {
        "content": "Une simple formule brute.",
        "correct": false,
        "explanation": "Elle ne représente pas la géométrie."
      },
      {
        "content": "Une projection strictement plane comme seule représentation réaliste.",
        "correct": false,
        "explanation": "Le support préfère la perspective."
      },
      {
        "content": "Une écriture RCHO uniquement.",
        "correct": false,
        "explanation": "Elle ne décrit pas tout le sucre cyclique."
      }
    ],
    "explanation": "La perspective rend mieux la disposition spatiale du cycle."
  },
  {
    "order": 88,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la cyclisation d'un sucre aldéhydique selon la fiche :",
    "choices": [
      {
        "content": "La fonction aldéhyde peut réagir avec une fonction alcool de la même molécule.",
        "correct": true,
        "explanation": "Cyclisation intramoléculaire."
      },
      {
        "content": "Un hémiacétal est formé.",
        "correct": true,
        "explanation": "Produit indiqué."
      },
      {
        "content": "La transformation conduit à une forme cyclique.",
        "correct": true,
        "explanation": "Conséquence structurale."
      },
      {
        "content": "La fonction aldéhyde doit obligatoirement rester intacte dans le cycle.",
        "correct": false,
        "explanation": "Elle participe à la formation de l'hémiacétal."
      }
    ],
    "explanation": "La cyclisation est expliquée par la réaction aldéhyde + alcool → hémiacétal."
  },
  {
    "order": 89,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare glucose et fructose dans le modèle simplifié de la fiche. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le glucose porte une fonction aldéhyde dans sa forme linéaire présentée.",
        "correct": true,
        "explanation": "Schéma du support."
      },
      {
        "content": "Le fructose porte une fonction cétone dans la forme linéaire présentée.",
        "correct": true,
        "explanation": "Schéma du support."
      },
      {
        "content": "Le glucose est classé comme réducteur.",
        "correct": true,
        "explanation": "Application de l'oxydabilité."
      },
      {
        "content": "Le fructose est classé comme non réducteur dans ce modèle de cours.",
        "correct": true,
        "explanation": "Formulation du support local."
      }
    ],
    "explanation": "Cette banque reprend explicitement le classement du document local, sans l'étendre à d'autres contextes chimiques."
  },
  {
    "order": 90,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La forme linéaire du glucose est décrite par une fonction aldéhyde en haut et un alcool primaire en bas. Quelles conséquences pédagogiques en tire-t-on ?",
    "choices": [
      {
        "content": "Le groupe CHO permet d'identifier une fonction aldéhyde.",
        "correct": true,
        "explanation": "Reconnaissance fonctionnelle."
      },
      {
        "content": "Le groupe CH2OH correspond à un alcool primaire.",
        "correct": true,
        "explanation": "Lecture de la projection."
      },
      {
        "content": "La molécule porte plusieurs fonctions alcool en plus de l'aldéhyde.",
        "correct": true,
        "explanation": "Le schéma du glucose montre plusieurs OH."
      },
      {
        "content": "La présence d'alcools empêche la fonction aldéhyde d'être identifiée.",
        "correct": false,
        "explanation": "Une molécule peut être polyfonctionnelle."
      }
    ],
    "explanation": "La forme linéaire du glucose permet de relier nomenclature fonctionnelle et représentation des sucres."
  },
  {
    "order": 91,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi la projection linéaire ne doit-elle pas être interprétée comme une molécule réellement plate ?",
    "choices": [
      {
        "content": "Les carbones sont tétraédriques.",
        "correct": true,
        "explanation": "Rappel du support."
      },
      {
        "content": "Les liaisons horizontales et verticales codent des directions différentes dans l'espace.",
        "correct": true,
        "explanation": "Convention expliquée."
      },
      {
        "content": "La fiche propose une représentation tridimensionnelle pour mieux rendre la réalité.",
        "correct": true,
        "explanation": "Section suivante."
      },
      {
        "content": "Parce que toutes les liaisons sont triples.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "La projection est une convention bidimensionnelle d'une géométrie tridimensionnelle."
  },
  {
    "order": 92,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Lors de la cyclisation d'un sucre aldéhydique dans le modèle de la fiche :",
    "choices": [
      {
        "content": "Une fonction alcool attaque/réagit avec la fonction aldéhyde.",
        "correct": true,
        "explanation": "Bilan hémiacétal."
      },
      {
        "content": "Le produit possède une fonction hémiacétal.",
        "correct": true,
        "explanation": "Produit de cyclisation."
      },
      {
        "content": "La chaîne linéaire devient cyclique.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "Une protéase est nécessaire.",
        "correct": false,
        "explanation": "Aucune enzyme spécifique n'est mentionnée ici."
      }
    ],
    "explanation": "La réaction intramoléculaire alcool-aldéhyde explique le passage à la forme cyclique."
  },
  {
    "order": 93,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels éléments sont explicitement associés à la forme cyclique des sucres dans la fiche ?",
    "choices": [
      {
        "content": "Formation d'un hémiacétal.",
        "correct": true,
        "explanation": "Point central."
      },
      {
        "content": "Réaction entre fonction aldéhyde et fonction alcool.",
        "correct": true,
        "explanation": "Origine de la cyclisation."
      },
      {
        "content": "Représentation en perspective pour mieux montrer l'espace.",
        "correct": true,
        "explanation": "Représentation la plus fidèle selon le support."
      },
      {
        "content": "Transformation obligatoire en cétone.",
        "correct": false,
        "explanation": "Ce n'est pas le mécanisme décrit."
      }
    ],
    "explanation": "Structure fonctionnelle et représentation spatiale sont liées dans la dernière partie du chapitre."
  },
  {
    "order": 94,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel groupe fonctionnel se forme lors de la cyclisation d'un sucre aldéhydique avec une de ses fonctions alcool ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "hémiacétal",
        "hemiacetal",
        "fonction hémiacétal",
        "fonction hemiacetal"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "La fiche indique que la réaction aldéhyde + alcool forme un hémiacétal."
  },
  {
    "order": 95,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans la représentation linéaire expliquée par la fiche, les liaisons C-H et C-OH horizontales sont décrites comme :",
    "choices": [
      {
        "content": "Dirigées vers l'observateur.",
        "correct": true,
        "explanation": "Convention explicitement expliquée."
      },
      {
        "content": "Liées à une géométrie tétraédrique du carbone.",
        "correct": true,
        "explanation": "Le support relie la projection au volume."
      },
      {
        "content": "Différentes spatialement des liaisons C-C verticales.",
        "correct": true,
        "explanation": "La projection encode la profondeur."
      },
      {
        "content": "Forcément coplanaires avec toute la chaîne dans la molécule réelle.",
        "correct": false,
        "explanation": "La molécule est tridimensionnelle."
      }
    ],
    "explanation": "Il faut lire la projection comme une convention spatiale et non comme une structure plane réelle."
  },
  {
    "order": 96,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La représentation en perspective d'un sucre cyclique est préférée dans la fiche parce que :",
    "choices": [
      {
        "content": "Elle montre que le cycle occupe l'espace.",
        "correct": true,
        "explanation": "Il n'est plus dessiné comme strictement plan."
      },
      {
        "content": "Elle est présentée comme plus fidèle à la réalité.",
        "correct": true,
        "explanation": "Formulation du support."
      },
      {
        "content": "Elle aide à visualiser la géométrie tridimensionnelle.",
        "correct": true,
        "explanation": "Objectif."
      },
      {
        "content": "Elle supprime toutes les fonctions alcool.",
        "correct": false,
        "explanation": "Les substituants restent présents."
      }
    ],
    "explanation": "La perspective complète la projection linéaire en mettant en évidence la géométrie spatiale."
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un sucre porte dans sa forme linéaire une fonction aldéhyde et plusieurs alcools. Quelles propositions sont cohérentes avec la fiche ?",
    "choices": [
      {
        "content": "Il peut être présenté comme réducteur dans le modèle du support.",
        "correct": true,
        "explanation": "Fonction aldéhyde oxydable."
      },
      {
        "content": "Une fonction alcool peut participer à une cyclisation intramoléculaire.",
        "correct": true,
        "explanation": "Formation d'un hémiacétal."
      },
      {
        "content": "La forme cyclique peut être représentée en perspective.",
        "correct": true,
        "explanation": "Représentation conseillée."
      },
      {
        "content": "La présence des alcools annule toute réactivité de l'aldéhyde.",
        "correct": false,
        "explanation": "La cyclisation repose justement sur leur réaction."
      }
    ],
    "explanation": "Le glucose illustre la convergence entre oxydabilité et cyclisation."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quel enchaînement décrit correctement la cyclisation dans le modèle de la fiche ?",
    "choices": [
      {
        "content": "Forme linéaire avec aldéhyde + fonction alcool interne.",
        "correct": true,
        "explanation": "Réactifs intramoléculaires."
      },
      {
        "content": "Réaction entre ces deux fonctions.",
        "correct": true,
        "explanation": "Étape fonctionnelle."
      },
      {
        "content": "Formation d'un hémiacétal.",
        "correct": true,
        "explanation": "Produit."
      },
      {
        "content": "Obtention d'une forme cyclique.",
        "correct": true,
        "explanation": "Conséquence."
      }
    ],
    "explanation": "L'enchaînement fonctionnel doit pouvoir être restitué sans dépendre d'une figure."
  },
  {
    "order": 99,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux associations correctes selon le modèle simplifié de la fiche.",
    "choices": [
      {
        "content": "Glucose → fonction aldéhyde linéaire → sucre réducteur.",
        "correct": true,
        "explanation": "Association du support."
      },
      {
        "content": "Fructose → fonction cétone linéaire → sucre non réducteur.",
        "correct": true,
        "explanation": "Association du support local."
      },
      {
        "content": "Glucose → cétone → non réducteur.",
        "correct": false,
        "explanation": "Ce n'est pas le classement de la fiche."
      },
      {
        "content": "Fructose → aldéhyde → réducteur.",
        "correct": false,
        "explanation": "Ce n'est pas le modèle présenté."
      }
    ],
    "explanation": "La question reprend strictement les associations enseignées dans la fiche rémoise."
  },
  {
    "order": 100,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes selon la fiche.",
    "choices": [
      {
        "content": "Le glucose est présenté comme sucre réducteur.",
        "correct": true,
        "explanation": "Fonction aldéhyde."
      },
      {
        "content": "Le fructose est présenté comme sucre non réducteur dans le modèle de la fiche.",
        "correct": true,
        "explanation": "Fonction cétone."
      },
      {
        "content": "Le groupe CHO est placé en haut de la forme linéaire du glucose.",
        "correct": true,
        "explanation": "Représentation."
      },
      {
        "content": "Le groupe CH2OH est placé en bas.",
        "correct": true,
        "explanation": "Alcool primaire."
      },
      {
        "content": "La cyclisation forme un hémiacétal.",
        "correct": true,
        "explanation": "Réaction aldéhyde-alcool."
      },
      {
        "content": "La projection linéaire représente une molécule réellement plane.",
        "correct": false,
        "explanation": "Carbones tétraédriques."
      },
      {
        "content": "La perspective est décrite comme moins fidèle à la réalité.",
        "correct": false,
        "explanation": "Elle est plus fidèle."
      },
      {
        "content": "Le fructose est présenté comme aldéhyde.",
        "correct": false,
        "explanation": "Cétone."
      },
      {
        "content": "La cyclisation exige une fonction amide.",
        "correct": false,
        "explanation": "Aldéhyde + alcool."
      },
      {
        "content": "Le glucose ne possède aucune fonction alcool.",
        "correct": false,
        "explanation": "Il en possède plusieurs."
      }
    ],
    "explanation": "Cette sélection couvre caractère réducteur, projection linéaire et cyclisation."
  }
];
