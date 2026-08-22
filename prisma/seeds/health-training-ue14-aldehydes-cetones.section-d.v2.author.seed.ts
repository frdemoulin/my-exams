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
        "explanation": "Dans le modèle simplifié retenu, le fructose est classé comme non réducteur."
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
        "explanation": "Dans le modèle simplifié retenu, un sucre portant une fonction cétone linéaire est classé comme non réducteur."
      }
    ],
    "explanation": "Dans le modèle simplifié retenu, un sucre portant une fonction cétone linéaire est classé comme non réducteur."
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
        "explanation": "La fonction cétone est présentée comme non oxydable dans ce modèle."
      },
      {
        "content": "Glucose.",
        "correct": true,
        "explanation": "Il est relié à une fonction aldéhyde."
      },
      {
        "content": "Aucun sucre.",
        "correct": false,
        "explanation": "Le glucose est l’exemple de sucre réducteur retenu dans ce modèle."
      },
      {
        "content": "Tous les sucres sans distinction.",
        "correct": false,
        "explanation": "Le modèle simplifié distingue le glucose, classé réducteur, du fructose, classé non réducteur."
      },
      {
        "content": "Dans ce modèle, la fonction aldéhyde est décrite comme non oxydable.",
        "correct": false,
        "explanation": "Elle est au contraire utilisée pour expliquer le caractère réducteur des sucres portant un aldéhyde."
      }
    ],
    "explanation": "Il est relié à une fonction aldéhyde."
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
    "explanation": "Ce n'est pas un sucre."
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
        "explanation": "Le glucose est l’exemple de sucre réducteur retenu dans le modèle simplifié."
      },
      {
        "content": "Parce que la fonction aldéhyde est inerte à l'oxydation.",
        "correct": false,
        "explanation": "Un aldéhyde peut être oxydé en acide carboxylique dans le modèle étudié."
      },
      {
        "content": "L’oxydation d’un alcool secondaire conduit directement à un aldéhyde.",
        "correct": false,
        "explanation": "Un alcool secondaire donne une cétone dans le modèle étudié."
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
    "explanation": "Le glucose est l’exemple de sucre réducteur retenu dans le modèle simplifié."
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
        "explanation": "Dans la forme linéaire du glucose, le groupe terminal $\\ce{CHO}$ correspond à une fonction aldéhyde."
      },
      {
        "content": "La chaîne carbonée.",
        "correct": true,
        "explanation": "La projection linéaire permet de suivre la chaîne carbonée portant les différentes fonctions alcool."
      },
      {
        "content": "Un alcool primaire.",
        "correct": true,
        "explanation": "La réduction du groupe fonctionnel conduit à la formation du produit correspondant."
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
    "explanation": "Dans la forme linéaire du glucose, le groupe terminal $\\ce{CHO}$ correspond à une fonction aldéhyde."
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
        "explanation": "Le groupe $\\ce{CHO}$ est le motif caractéristique de la fonction aldéhyde."
      },
      {
        "content": "Fructose.",
        "correct": false,
        "explanation": "Dans le modèle simplifié retenu, le fructose est classé comme non réducteur."
      }
    ],
    "explanation": "Le groupe alcool primaire est placé en bas."
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
        "explanation": "La proposition est fausse : $\\mathrm{CH_2OH}$."
      },
      {
        "content": "$\\mathrm{MgX}$.",
        "correct": false,
        "explanation": "Cette proposition ne correspond pas à la transformation ou à la propriété demandée."
      },
      {
        "content": "Fructose.",
        "correct": false,
        "explanation": "Dans le modèle simplifié retenu, le fructose est classé comme non réducteur."
      },
      {
        "content": "$\\mathrm{CHO}$.",
        "correct": false,
        "explanation": "Le groupe $\\ce{CHO}$ est le motif caractéristique de la fonction aldéhyde."
      },
      {
        "content": "$\\mathrm{CH_2OH}$.",
        "correct": true,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      }
    ],
    "explanation": "Le groupe terminal $\\ce{CH2OH}$ placé en bas de la projection correspond à une fonction alcool primaire."
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
        "explanation": "Dans cette convention de projection, les liaisons horizontales sont dirigées vers l’observateur."
      },
      {
        "content": "Les liaisons C-C de l'axe vertical sont décrites comme dirigées vers l'arrière dans l'explication.",
        "correct": true,
        "explanation": "Dans une projection de Fischer, les liaisons horizontales et verticales représentent des orientations spatiales différentes."
      },
      {
        "content": "La molécule réelle est strictement plane.",
        "correct": false,
        "explanation": "La projection est plane, mais la molécule réelle est tridimensionnelle et les carbones saturés sont tétraédriques."
      }
    ],
    "explanation": "Au contraire, une fonction alcool participe à la fermeture du cycle."
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
    "explanation": "La représentation en perspective rend mieux compte de la géométrie tridimensionnelle du cycle."
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
        "explanation": "La réaction intramoléculaire entre l’aldéhyde et une fonction alcool forme un hémiacétal."
      },
      {
        "content": "La transformation conduit à une forme cyclique.",
        "correct": true,
        "explanation": "La formation de l’hémiacétal ferme la chaîne et conduit à une structure cyclique."
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
    "explanation": "La relation correcte est: « La fonction aldéhyde peut réagir avec une fonction alcool de la même molécule ». La négation proposée est donc fausse."
  },
  {
    "order": 89,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare glucose et fructose dans le modèle simplifié. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Dans ce modèle simplifié, le fructose est classé comme non réducteur.",
        "correct": true,
        "explanation": "Dans le modèle simplifié retenu, le fructose est classé comme non réducteur."
      },
      {
        "content": "Dans ce modèle, la fonction aldéhyde est décrite comme non oxydable.",
        "correct": false,
        "explanation": "Elle est au contraire utilisée pour expliquer le caractère réducteur des sucres portant un aldéhyde."
      },
      {
        "content": "Le glucose porte une fonction aldéhyde dans sa forme linéaire présentée.",
        "correct": true,
        "explanation": "Dans la forme linéaire considérée, le glucose porte un groupe aldéhyde terminal."
      },
      {
        "content": "Le fructose porte une fonction cétone dans la forme linéaire présentée.",
        "correct": true,
        "explanation": "Dans la forme linéaire considérée, le fructose porte une fonction cétone."
      },
      {
        "content": "Le glucose est classé comme réducteur.",
        "correct": true,
        "explanation": "Dans le modèle simplifié, le caractère oxydable de la fonction aldéhyde conduit à classer le glucose comme réducteur."
      }
    ],
    "explanation": "Dans le modèle simplifié retenu, le glucose est associé à une fonction aldéhyde et classé réducteur, tandis que le fructose est associé à une cétone et classé non réducteur."
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
        "explanation": "Le groupe terminal $\\ce{CH2OH}$ correspond à une fonction alcool primaire."
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
        "explanation": "Un alcool secondaire donne une cétone dans le modèle étudié."
      },
      {
        "content": "Le groupe CHO ne permet pas d'identifier une fonction aldéhyde.",
        "correct": false,
        "explanation": "La relation correcte est: « Le groupe CHO permet d'identifier une fonction aldéhyde ». La négation proposée est donc fausse."
      }
    ],
    "explanation": "Dans la forme linéaire du glucose, le groupe $\\ce{CHO}$ correspond à un aldéhyde et le groupe terminal $\\ce{CH2OH}$ à un alcool primaire."
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
        "explanation": "Les carbones saturés ont une géométrie tétraédrique ; la projection plane n’est qu’une convention de représentation."
      },
      {
        "content": "Les liaisons horizontales et verticales codent des directions différentes dans l'espace.",
        "correct": true,
        "explanation": "Dans une projection de Fischer, les liaisons horizontales et verticales codent des orientations spatiales différentes."
      },
      {
        "content": "Une représentation tridimensionnelle rend mieux compte de la géométrie réelle.",
        "correct": true,
        "explanation": "La représentation en perspective rend mieux compte de la disposition tridimensionnelle réelle du cycle et de ses substituants."
      },
      {
        "content": "Parce que toutes les liaisons sont triples.",
        "correct": false,
        "explanation": "Cette proposition ne correspond pas à la transformation ou à la propriété demandée."
      }
    ],
    "explanation": "Cette réaction forme une fonction hémiacétal et ferme le cycle."
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
        "explanation": "La réaction intramoléculaire entre une fonction alcool et le carbonyle ferme la chaîne et produit une forme cyclique."
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
        "explanation": "Un hémiacétal se forme par addition d’une fonction alcool sur un groupe carbonyle, notamment lors de la cyclisation de certains sucres."
      }
    ],
    "explanation": "Un hémiacétal se forme par addition d’une fonction alcool sur un groupe carbonyle, notamment lors de la cyclisation de certains sucres."
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
        "explanation": "Un hémiacétal se forme par addition d’une fonction alcool sur un groupe carbonyle, notamment lors de la cyclisation de certains sucres."
      },
      {
        "content": "Réaction entre fonction aldéhyde et fonction alcool.",
        "correct": true,
        "explanation": "La cyclisation résulte de l’addition intramoléculaire d’une fonction alcool sur la fonction aldéhyde."
      },
      {
        "content": "Représentation en perspective pour mieux montrer l'espace.",
        "correct": true,
        "explanation": "La représentation en perspective rend mieux compte de la disposition tridimensionnelle réelle du cycle et de ses substituants."
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
    "explanation": "Un hémiacétal se forme par addition d’une fonction alcool sur un groupe carbonyle, notamment lors de la cyclisation de certains sucres."
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
        "explanation": "Les substituants ne sont pas tous coplanaires dans la molécule réelle, car les carbones saturés sont tétraédriques."
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
    "explanation": "La projection plane code une géométrie tridimensionnelle autour des carbones tétraédriques."
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
        "explanation": "La représentation en perspective montre plus clairement l’orientation spatiale des liaisons et des substituants."
      },
      {
        "content": "Elle supprime toutes les fonctions alcool.",
        "correct": false,
        "explanation": "La cyclisation conserve plusieurs groupes hydroxyle ; elle ne supprime pas les fonctions alcool du sucre."
      }
    ],
    "explanation": "Cette réaction forme une fonction hémiacétal et ferme le cycle."
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
        "explanation": "Une représentation en perspective permet de rendre visible la géométrie tridimensionnelle de la forme cyclique."
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
        "explanation": "Dans le modèle simplifié, la fonction aldéhyde de la forme linéaire explique le caractère réducteur du glucose."
      },
      {
        "content": "Une fonction alcool peut participer à une cyclisation intramoléculaire.",
        "correct": true,
        "explanation": "Une fonction alcool interne peut attaquer le carbonyle de la même molécule et former un hémiacétal cyclique."
      }
    ],
    "explanation": "Une représentation en perspective permet de rendre visible la géométrie tridimensionnelle de la forme cyclique."
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
        "explanation": "La forme linéaire réunit dans la même molécule une fonction aldéhyde et des fonctions alcool, ce qui permet une cyclisation intramoléculaire."
      },
      {
        "content": "Réaction entre ces deux fonctions.",
        "correct": true,
        "explanation": "L’alcool intramoléculaire attaque la fonction aldéhyde ; cette addition est l’étape fonctionnelle de la cyclisation."
      },
      {
        "content": "Formation d'un hémiacétal.",
        "correct": true,
        "explanation": "Un hémiacétal se forme par addition d’une fonction alcool sur un groupe carbonyle, notamment lors de la cyclisation de certains sucres."
      },
      {
        "content": "Obtention d'une forme cyclique.",
        "correct": true,
        "explanation": "La réaction intramoléculaire entre une fonction alcool et le carbonyle ferme la chaîne et produit une forme cyclique."
      },
      {
        "content": "La formation d’un hémiacétal cyclique exige la suppression de tous les groupes hydroxyle du sucre.",
        "correct": false,
        "explanation": "Au contraire, une fonction alcool participe à la fermeture du cycle."
      }
    ],
    "explanation": "La forme linéaire réunit dans la même molécule une fonction aldéhyde et des fonctions alcool, ce qui permet une cyclisation intramoléculaire."
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
        "explanation": "Dans le modèle simplifié, le glucose possède une fonction aldéhyde linéaire oxydable, d’où son classement comme sucre réducteur."
      },
      {
        "content": "Fructose → fonction cétone linéaire → sucre non réducteur.",
        "correct": true,
        "explanation": "Dans le modèle simplifié retenu, le fructose est associé à une fonction cétone linéaire et classé comme non réducteur."
      },
      {
        "content": "Glucose → cétone → non réducteur.",
        "correct": false,
        "explanation": "Ce n'est pas le classement."
      }
    ],
    "explanation": "Ce n'est pas le modèle présenté."
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
        "explanation": "Dans le modèle simplifié retenu, la fonction aldéhyde de la forme linéaire du glucose explique son classement comme sucre réducteur."
      },
      {
        "content": "Le fructose est présenté comme sucre non réducteur dans le modèle.",
        "correct": true,
        "explanation": "Dans le modèle simplifié retenu, le fructose est classé comme sucre non réducteur."
      },
      {
        "content": "Le groupe CHO est placé en haut de la forme linéaire du glucose.",
        "correct": true,
        "explanation": "Dans la projection linéaire considérée, le groupe aldéhyde $\\ce{CHO}$ est placé à l’extrémité supérieure."
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
        "explanation": "La projection linéaire est une convention graphique : les carbones restent tétraédriques dans l’espace."
      },
      {
        "content": "La perspective est décrite comme moins fidèle à la réalité.",
        "correct": false,
        "explanation": "La représentation en perspective est au contraire plus fidèle que la projection plane pour rendre la géométrie réelle."
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
        "explanation": "Le glucose comporte plusieurs groupes hydroxyle ; il possède donc plusieurs fonctions alcool."
      }
    ],
    "explanation": "Dans le modèle simplifié retenu, la fonction aldéhyde de la forme linéaire du glucose explique son classement comme sucre réducteur."
  }
];
