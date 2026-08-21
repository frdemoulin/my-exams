import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.6 – Section D – Application aux sucres : caractère réducteur, représentations et cyclisation
 */

export const UE14_CH10_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 79,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans le modèle simplifié appliqué aux sucres, quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le fructose est cité comme sucre réducteur.",
        "correct": false,
        "explanation": "La le classe ici comme non réducteur."
      },
      {
        "content": "Dans ce modèle, la fonction aldéhyde est décrite comme non oxydable.",
        "correct": false,
        "explanation": "Elle est au contraire utilisée pour expliquer le caractère réducteur des sucres portant un aldéhyde."
      },
      {
        "content": "Un sucre portant une fonction aldéhyde est présenté comme réducteur.",
        "correct": true,
        "explanation": "La fonction aldéhyde est oxydable et peut réduire un agent d'oxydation."
      },
      {
        "content": "Le glucose est cité comme sucre réducteur.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Un sucre portant une fonction cétone est présenté comme non réducteur dans ce modèle.",
        "correct": true,
        "explanation": "C'est la formulation: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La banque suit volontairement le modèle: glucose aldéhydique réducteur, fructose cétonique non réducteur."
  },
  {
    "order": 80,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel sucre est cité comme réducteur dans le modèle?",
    "choices": [
      {
        "content": "Fructose.",
        "correct": false,
        "explanation": "La le classe ici comme non réducteur."
      },
      {
        "content": "Glucose.",
        "correct": true,
        "explanation": "Il est relié à une fonction aldéhyde."
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
      },
      {
        "content": "Dans ce modèle, la fonction aldéhyde est décrite comme non oxydable.",
        "correct": false,
        "explanation": "Elle est au contraire utilisée pour expliquer le caractère réducteur des sucres portant un aldéhyde."
      }
    ],
    "explanation": "Le glucose illustre le lien entre fonction aldéhyde et caractère réducteur."
  },
  {
    "order": 81,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel sucre est cité comme non réducteur dans le modèle simplifié?",
    "choices": [
      {
        "content": "Méthanal.",
        "correct": false,
        "explanation": "Ce n'est pas un sucre."
      },
      {
        "content": "Acétone.",
        "correct": false,
        "explanation": "Ce n'est pas un sucre."
      },
      {
        "content": "Fructose.",
        "correct": true,
        "explanation": "La fonction cétone est présentée comme non oxydable dans ce modèle."
      },
      {
        "content": "Éthanal.",
        "correct": false,
        "explanation": "L’éthanal porte une fonction aldéhyde."
      },
      {
        "content": "Glucose.",
        "correct": false,
        "explanation": "Il est donné comme réducteur."
      }
    ],
    "explanation": "Pour respecter le support local, le fructose est traité ici comme sucre non réducteur."
  },
  {
    "order": 82,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi un sucre aldéhydique est-il présenté comme réducteur?",
    "choices": [
      {
        "content": "Le glucose est l'exemple cité.",
        "correct": true,
        "explanation": "Application: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Parce que la fonction aldéhyde est inerte à l'oxydation.",
        "correct": false,
        "explanation": "C'est l'inverse: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L’oxydation d’un alcool secondaire conduit directement à un aldéhyde.",
        "correct": false,
        "explanation": "Un alcool secondaire donne une cétone dans le cadre du chapitre."
      },
      {
        "content": "La fonction aldéhyde n’est pas oxydable.",
        "correct": false,
        "explanation": "La relation correcte est: « La fonction aldéhyde est oxydable ». La négation proposée est donc fausse."
      },
      {
        "content": "En s'oxydant, elle peut réduire un agent d'oxydation.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      }
    ],
    "explanation": "Le caractère réducteur découle ici de l'oxydabilité de la fonction aldéhyde."
  },
  {
    "order": 83,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans la représentation linéaire du glucose présentée, de haut en bas on trouve:",
    "choices": [
      {
        "content": "Une fonction aldéhyde.",
        "correct": true,
        "explanation": "Placée en haut: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La chaîne carbonée.",
        "correct": true,
        "explanation": "Partie centrale: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un alcool primaire.",
        "correct": true,
        "explanation": "Placée en bas: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une fonction amide terminale.",
        "correct": false,
        "explanation": "Aucune amide dans ce schéma."
      },
      {
        "content": "$\\ce{NaBH4}$ transforme une cétone directement en acide carboxylique.",
        "correct": false,
        "explanation": "Le borohydrure est un réducteur; le produit attendu est un alcool secondaire."
      }
    ],
    "explanation": "explicitement cette lecture verticale de la forme linéaire du glucose."
  },
  {
    "order": 84,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel groupe est placé en haut de la représentation linéaire du glucose?",
    "choices": [
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
      },
      {
        "content": "$\\mathrm{CHO}$.",
        "correct": true,
        "explanation": "Fonction aldéhyde: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Fructose.",
        "correct": false,
        "explanation": "Le support classe le fructose parmi les sucres non réducteurs dans ce modèle simplifié."
      }
    ],
    "explanation": "Le groupe CHO terminal est représenté en haut."
  },
  {
    "order": 85,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel groupe est placé en bas de la représentation linéaire du glucose?",
    "choices": [
      {
        "content": "$\\mathrm{COCl}$.",
        "correct": false,
        "explanation": "Chlorure d'acyle: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "$\\mathrm{MgX}$.",
        "correct": false,
        "explanation": "Sans rapport: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Fructose.",
        "correct": false,
        "explanation": "Le support classe le fructose parmi les sucres non réducteurs dans ce modèle simplifié."
      },
      {
        "content": "$\\mathrm{CHO}$.",
        "correct": false,
        "explanation": "Placé en haut: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "$\\mathrm{CH_2OH}$.",
        "correct": true,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      }
    ],
    "explanation": "Le groupe CH2OH terminal se trouve en bas de la projection linéaire donnée."
  },
  {
    "order": 86,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la projection linéaire des sucres:",
    "choices": [
      {
        "content": "La formation d’un hémiacétal cyclique exige la suppression de tous les groupes hydroxyle du sucre.",
        "correct": false,
        "explanation": "Au contraire, une fonction alcool participe à la fermeture du cycle."
      },
      {
        "content": "Elle n’est pas une représentation conventionnelle d'atomes de carbone tétraédriques.",
        "correct": false,
        "explanation": "La relation correcte est: « Elle est une représentation conventionnelle d'atomes de carbone tétraédriques ». La négation proposée est donc fausse."
      },
      {
        "content": "Les liaisons C-H et C-OH dessinées horizontalement sont décrites comme dirigées vers l'observateur.",
        "correct": true,
        "explanation": "C'est la convention expliquée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Les liaisons C-C de l'axe vertical sont décrites comme dirigées vers l'arrière dans l'explication.",
        "correct": true,
        "explanation": "La oppose les directions horizontales et verticales."
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
    "question": "Quelle représentation rend le mieux compte de la géométrie tridimensionnelle de la forme cyclique d'un sucre ?",
    "choices": [
      {
        "content": "Une projection strictement plane comme seule représentation réaliste.",
        "correct": false,
        "explanation": "La représentation en perspective rend mieux compte de la géométrie tridimensionnelle du cycle."
      },
      {
        "content": "Une écriture RCHO uniquement.",
        "correct": false,
        "explanation": "Elle ne décrit pas tout le sucre cyclique."
      },
      {
        "content": "La cyclisation d’un sucre peut résulter de la réaction intramoléculaire d’une fonction aldéhyde avec une fonction alcool.",
        "correct": true,
        "explanation": "Cette réaction forme une fonction hémiacétal et ferme le cycle."
      },
      {
        "content": "La représentation en perspective.",
        "correct": true,
        "explanation": "Le cycle est dessiné dans l'espace."
      },
      {
        "content": "Une simple formule brute.",
        "correct": false,
        "explanation": "Elle ne représente pas la géométrie."
      }
    ],
    "explanation": "La perspective rend mieux la disposition spatiale du cycle."
  },
  {
    "order": 88,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la cyclisation d'un sucre aldéhydique:",
    "choices": [
      {
        "content": "La fonction aldéhyde ne peut pas réagir avec une fonction alcool de la même molécule.",
        "correct": false,
        "explanation": "La relation correcte est: « La fonction aldéhyde peut réagir avec une fonction alcool de la même molécule ». La négation proposée est donc fausse."
      },
      {
        "content": "Un hémiacétal est formé.",
        "correct": true,
        "explanation": "Produit indiqué: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La transformation conduit à une forme cyclique.",
        "correct": true,
        "explanation": "Conséquence structurale: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La fonction aldéhyde doit obligatoirement rester intacte dans le cycle.",
        "correct": false,
        "explanation": "Elle participe à la formation de l'hémiacétal."
      },
      {
        "content": "La cyclisation d’un sucre peut résulter de la réaction intramoléculaire d’une fonction aldéhyde avec une fonction alcool.",
        "correct": true,
        "explanation": "Cette réaction forme une fonction hémiacétal et ferme le cycle."
      }
    ],
    "explanation": "La cyclisation est expliquée par la réaction aldéhyde + alcool → hémiacétal."
  },
  {
    "order": 89,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare glucose et fructose dans le modèle simplifié. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le fructose est classé comme non réducteur dans ce modèle de cours.",
        "correct": true,
        "explanation": "Formulation local: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Dans ce modèle, la fonction aldéhyde est décrite comme non oxydable.",
        "correct": false,
        "explanation": "Elle est au contraire utilisée pour expliquer le caractère réducteur des sucres portant un aldéhyde."
      },
      {
        "content": "Le glucose porte une fonction aldéhyde dans sa forme linéaire présentée.",
        "correct": true,
        "explanation": "Schéma: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le fructose porte une fonction cétone dans la forme linéaire présentée.",
        "correct": true,
        "explanation": "Schéma: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le glucose est classé comme réducteur.",
        "correct": true,
        "explanation": "Application de l'oxydabilité: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Cette banque reprend explicitement le classement du document local, sans l'étendre à d'autres contextes chimiques."
  },
  {
    "order": 90,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La forme linéaire du glucose est décrite par une fonction aldéhyde en haut et un alcool primaire en bas. Quelles conséquences pédagogiques en tire-t-on?",
    "choices": [
      {
        "content": "Le groupe CH2OH correspond à un alcool primaire.",
        "correct": true,
        "explanation": "Lecture de la projection: cette relation est conforme à la propriété ou à la transformation décrite."
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
      },
      {
        "content": "L’oxydation d’un alcool secondaire conduit directement à un aldéhyde.",
        "correct": false,
        "explanation": "Un alcool secondaire donne une cétone dans le cadre du chapitre."
      },
      {
        "content": "Le groupe CHO ne permet pas d'identifier une fonction aldéhyde.",
        "correct": false,
        "explanation": "La relation correcte est: « Le groupe CHO permet d'identifier une fonction aldéhyde ». La négation proposée est donc fausse."
      }
    ],
    "explanation": "La forme linéaire du glucose permet de relier nomenclature fonctionnelle et représentation des sucres."
  },
  {
    "order": 91,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi la projection linéaire ne doit-elle pas être interprétée comme une molécule réellement plate?",
    "choices": [
      {
        "content": "La cyclisation d’un sucre peut résulter de la réaction intramoléculaire d’une fonction aldéhyde avec une fonction alcool.",
        "correct": true,
        "explanation": "Cette réaction forme une fonction hémiacétal et ferme le cycle."
      },
      {
        "content": "Les carbones sont tétraédriques.",
        "correct": true,
        "explanation": "Rappel: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Les liaisons horizontales et verticales codent des directions différentes dans l'espace.",
        "correct": true,
        "explanation": "Convention expliquée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La propose une représentation tridimensionnelle pour mieux rendre la réalité.",
        "correct": true,
        "explanation": "Section suivante: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Parce que toutes les liaisons sont triples.",
        "correct": false,
        "explanation": "Sans rapport: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La projection est une convention bidimensionnelle d'une géométrie tridimensionnelle."
  },
  {
    "order": 92,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Lors de la cyclisation d'un sucre aldéhydique dans le modèle:",
    "choices": [
      {
        "content": "La chaîne linéaire devient cyclique.",
        "correct": true,
        "explanation": "Conséquence: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une protéase est nécessaire.",
        "correct": false,
        "explanation": "Aucune enzyme spécifique n'est mentionnée ici."
      },
      {
        "content": "La cyclisation d’un sucre peut résulter de la réaction intramoléculaire d’une fonction aldéhyde avec une fonction alcool.",
        "correct": true,
        "explanation": "Cette réaction forme une fonction hémiacétal et ferme le cycle."
      },
      {
        "content": "Une fonction alcool attaque/ne réagit pas avec la fonction aldéhyde.",
        "correct": false,
        "explanation": "La relation correcte est: « Une fonction alcool attaque/réagit avec la fonction aldéhyde ». La négation proposée est donc fausse."
      },
      {
        "content": "Le produit possède une fonction hémiacétal.",
        "correct": true,
        "explanation": "Produit de cyclisation: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La réaction intramoléculaire alcool-aldéhyde explique le passage à la forme cyclique."
  },
  {
    "order": 93,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels éléments sont explicitement associés à la forme cyclique des sucres?",
    "choices": [
      {
        "content": "Formation d'un hémiacétal.",
        "correct": true,
        "explanation": "Point central: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Réaction entre fonction aldéhyde et fonction alcool.",
        "correct": true,
        "explanation": "Origine de la cyclisation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Représentation en perspective pour mieux montrer l'espace.",
        "correct": true,
        "explanation": "Représentation la plus fidèle: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Transformation obligatoire en cétone.",
        "correct": false,
        "explanation": "Ce n'est pas le mécanisme décrit."
      },
      {
        "content": "La formation d’un hémiacétal cyclique exige la suppression de tous les groupes hydroxyle du sucre.",
        "correct": false,
        "explanation": "Au contraire, une fonction alcool participe à la fermeture du cycle."
      }
    ],
    "explanation": "Structure fonctionnelle et représentation spatiale sont liées dans la dernière partie du chapitre."
  },
  {
    "order": 94,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel groupe fonctionnel se forme lors de la cyclisation d'un sucre aldéhydique avec une de ses fonctions alcool?",
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
    "explanation": "la réaction aldéhyde + alcool forme un hémiacétal."
  },
  {
    "order": 95,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans la représentation linéaire, comment interprète-t-on les liaisons C-H et C-OH horizontales ?",
    "choices": [
      {
        "content": "Liées à une géométrie tétraédrique du carbone.",
        "correct": true,
        "explanation": "La projection plane code une géométrie tridimensionnelle autour des carbones tétraédriques."
      },
      {
        "content": "Différentes spatialement des liaisons C-C verticales.",
        "correct": true,
        "explanation": "La projection encode la profondeur."
      },
      {
        "content": "Forcément coplanaires avec toute la chaîne dans la molécule réelle.",
        "correct": false,
        "explanation": "La molécule est tridimensionnelle: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La formation d’un hémiacétal cyclique exige la suppression de tous les groupes hydroxyle du sucre.",
        "correct": false,
        "explanation": "Au contraire, une fonction alcool participe à la fermeture du cycle."
      },
      {
        "content": "Dirigées vers l'observateur.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      }
    ],
    "explanation": "Il faut lire la projection comme une convention spatiale et non comme une structure plane réelle."
  },
  {
    "order": 96,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La représentation en perspective d'un sucre cyclique est préférée parce que:",
    "choices": [
      {
        "content": "La cyclisation d’un sucre peut résulter de la réaction intramoléculaire d’une fonction aldéhyde avec une fonction alcool.",
        "correct": true,
        "explanation": "Cette réaction forme une fonction hémiacétal et ferme le cycle."
      },
      {
        "content": "Elle montre que le cycle occupe l'espace.",
        "correct": true,
        "explanation": "Il n'est plus dessiné comme strictement plan."
      },
      {
        "content": "Elle n’est pas présentée comme plus fidèle à la réalité.",
        "correct": false,
        "explanation": "La relation correcte est: « Elle est présentée comme plus fidèle à la réalité ». La négation proposée est donc fausse."
      },
      {
        "content": "Elle aide à visualiser la géométrie tridimensionnelle.",
        "correct": true,
        "explanation": "Objectif: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Elle supprime toutes les fonctions alcool.",
        "correct": false,
        "explanation": "Les substituants restent présents: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La perspective complète la projection linéaire en mettant en évidence la géométrie spatiale."
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un sucre porte dans sa forme linéaire une fonction aldéhyde et plusieurs alcools. Quelles propositions sont cohérentes avec ces fonctions ?",
    "choices": [
      {
        "content": "La forme cyclique peut être représentée en perspective.",
        "correct": true,
        "explanation": "Représentation conseillée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La présence des alcools annule toute réactivité de l'aldéhyde.",
        "correct": false,
        "explanation": "La cyclisation repose justement sur leur réaction."
      },
      {
        "content": "La formation d’un hémiacétal cyclique exige la suppression de tous les groupes hydroxyle du sucre.",
        "correct": false,
        "explanation": "Au contraire, une fonction alcool participe à la fermeture du cycle."
      },
      {
        "content": "Il peut être présenté comme réducteur dans le modèle.",
        "correct": true,
        "explanation": "Fonction aldéhyde oxydable: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une fonction alcool peut participer à une cyclisation intramoléculaire.",
        "correct": true,
        "explanation": "Formation d'un hémiacétal: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le glucose illustre la convergence entre oxydabilité et cyclisation."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quel enchaînement décrit correctement la cyclisation dans le modèle?",
    "choices": [
      {
        "content": "Forme linéaire avec aldéhyde + fonction alcool interne.",
        "correct": true,
        "explanation": "Réactifs intramoléculaires: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Réaction entre ces deux fonctions.",
        "correct": true,
        "explanation": "Étape fonctionnelle: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Formation d'un hémiacétal.",
        "correct": true,
        "explanation": "Produit: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Obtention d'une forme cyclique.",
        "correct": true,
        "explanation": "Conséquence: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La formation d’un hémiacétal cyclique exige la suppression de tous les groupes hydroxyle du sucre.",
        "correct": false,
        "explanation": "Au contraire, une fonction alcool participe à la fermeture du cycle."
      }
    ],
    "explanation": "L'enchaînement fonctionnel doit pouvoir être restitué sans dépendre d'une figure."
  },
  {
    "order": 99,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux associations correctes selon le modèle simplifié.",
    "choices": [
      {
        "content": "Fructose → aldéhyde → réducteur.",
        "correct": false,
        "explanation": "Ce n'est pas le modèle présenté."
      },
      {
        "content": "Dans ce modèle, la fonction aldéhyde est décrite comme non oxydable.",
        "correct": false,
        "explanation": "Elle est au contraire utilisée pour expliquer le caractère réducteur des sucres portant un aldéhyde."
      },
      {
        "content": "Glucose → fonction aldéhyde linéaire → sucre réducteur.",
        "correct": true,
        "explanation": "Association: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Fructose → fonction cétone linéaire → sucre non réducteur.",
        "correct": true,
        "explanation": "Association local: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Glucose → cétone → non réducteur.",
        "correct": false,
        "explanation": "Ce n'est pas le classement."
      }
    ],
    "explanation": "La question reprend strictement les associations enseignées rémoise."
  },
  {
    "order": 100,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le glucose est présenté comme sucre réducteur.",
        "correct": true,
        "explanation": "Fonction aldéhyde : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le fructose est présenté comme sucre non réducteur dans le modèle.",
        "correct": true,
        "explanation": "Fonction cétone : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le groupe CHO est placé en haut de la forme linéaire du glucose.",
        "correct": true,
        "explanation": "Représentation : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le groupe CH2OH est placé en bas.",
        "correct": true,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      },
      {
        "content": "La cyclisation forme un hémiacétal.",
        "correct": true,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      },
      {
        "content": "La projection linéaire représente une molécule réellement plane.",
        "correct": false,
        "explanation": "Carbones tétraédriques : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La perspective est décrite comme moins fidèle à la réalité.",
        "correct": false,
        "explanation": "Elle est plus fidèle : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le fructose est présenté comme aldéhyde.",
        "correct": false,
        "explanation": "Le motif ou le produit considéré correspond bien à une fonction cétone."
      },
      {
        "content": "La cyclisation exige une fonction amide.",
        "correct": false,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      },
      {
        "content": "Le glucose ne possède aucune fonction alcool.",
        "correct": false,
        "explanation": "Il en possède plusieurs : cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Cette sélection couvre caractère réducteur, projection linéaire et cyclisation."
  }
];
