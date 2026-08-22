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
        "explanation": "Le glucose est l’exemple de sucre réducteur retenu, en lien avec sa fonction aldéhyde linéaire."
      },
      {
        "content": "Un sucre portant une fonction cétone est présenté comme non réducteur dans ce modèle.",
        "correct": true,
        "explanation": "Dans le modèle simplifié retenu, un sucre portant une fonction cétone linéaire est classé comme non réducteur."
      }
    ],
    "explanation": "Dans le modèle simplifié retenu, un sucre portant une fonction aldéhyde est classé réducteur, tandis qu'un sucre portant une fonction cétone est classé non réducteur."
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
        "explanation": "Le glucose est l’exemple de sucre réducteur retenu dans ce modèle."
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
        "content": "Ni le glucose ni le fructose.",
        "correct": false,
        "explanation": "Le glucose est précisément l’exemple de sucre réducteur retenu dans le modèle."
      }
    ],
    "explanation": "Le glucose est l'exemple de sucre réducteur retenu, car sa forme linéaire est associée à une fonction aldéhyde."
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
        "explanation": "Le méthanal est un aldéhyde simple, pas un sucre."
      },
      {
        "content": "Acétone.",
        "correct": false,
        "explanation": "L’acétone est une cétone simple, pas un sucre."
      },
      {
        "content": "Fructose.",
        "correct": true,
        "explanation": "La fonction cétone est présentée comme non oxydable dans ce modèle."
      },
      {
        "content": "Éthanal.",
        "correct": false,
        "explanation": "L’éthanal est un aldéhyde à deux carbones, pas un sucre."
      },
      {
        "content": "Glucose.",
        "correct": false,
        "explanation": "Le glucose est l’exemple de sucre réducteur retenu dans ce modèle."
      }
    ],
    "explanation": "Le fructose est classé comme sucre non réducteur dans le modèle simplifié retenu."
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
        "content": "Le caractère réducteur provient d'une fonction cétone inerte à l'oxydation.",
        "correct": false,
        "explanation": "Dans le modèle simplifié, le caractère réducteur est associé à une fonction aldéhyde oxydable, pas à une fonction cétone inerte."
      },
      {
        "content": "La fonction aldéhyde doit être réduite pour que le sucre soit réducteur.",
        "correct": false,
        "explanation": "Le sucre est dit réducteur parce que sa fonction aldéhyde s’oxyde et réduit simultanément l’agent oxydant."
      },
      {
        "content": "En s'oxydant, elle peut réduire un agent d'oxydation.",
        "correct": true,
        "explanation": "L’oxydation de la fonction aldéhyde s’accompagne de la réduction de l’agent oxydant, d’où le terme « sucre réducteur »."
      }
    ],
    "explanation": "Un sucre aldéhydique est dit réducteur parce que sa fonction aldéhyde peut s'oxyder et réduire l'agent oxydant."
  },
  {
    "order": 83,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans la représentation linéaire du glucose, quels éléments trouve-t-on de haut en bas ?",
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
        "explanation": "Le groupe terminal $\\ce{CH2OH}$ placé en bas de la forme linéaire correspond à une fonction alcool primaire."
      },
      {
        "content": "Une fonction amide terminale.",
        "correct": false,
        "explanation": "La représentation du glucose ne comporte pas de fonction amide terminale."
      },
      {
        "content": "Une fonction cétone en bas de la chaîne.",
        "correct": false,
        "explanation": "Le bas de la projection du glucose porte un groupe $\\ce{CH2OH}$, pas une fonction cétone."
      }
    ],
    "explanation": "Dans la forme linéaire du glucose, on trouve en haut la fonction aldéhyde, puis la chaîne carbonée, et en bas un alcool primaire."
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
        "explanation": "Le groupe $\\ce{CH2OH}$ correspond à l’alcool primaire placé en bas de la représentation linéaire, pas en haut."
      },
      {
        "content": "$\\mathrm{COOH}$.",
        "correct": false,
        "explanation": "La représentation linéaire du glucose ne porte pas $\\ce{COOH}$ en haut ; elle commence par le groupe aldéhyde $\\ce{CHO}$."
      },
      {
        "content": "$\\mathrm{NH_2}$.",
        "correct": false,
        "explanation": "La représentation linéaire du glucose ne comporte pas de groupe amine $\\ce{NH2}$ en haut ; elle porte un aldéhyde $\\ce{CHO}$."
      },
      {
        "content": "$\\mathrm{CHO}$.",
        "correct": true,
        "explanation": "Le groupe $\\ce{CHO}$ est le motif caractéristique de la fonction aldéhyde."
      },
      {
        "content": "$\\mathrm{RCOR'}$.",
        "correct": false,
        "explanation": "$\\ce{RCOR'}$ représente une cétone ; le haut de la représentation linéaire du glucose porte le groupe aldéhyde $\\ce{CHO}$."
      }
    ],
    "explanation": "Le groupe $\\ce{CHO}$, caractéristique de l'aldéhyde, est placé en haut de la représentation linéaire du glucose."
  },
  {
    "order": 85,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel groupe est placé en bas de la représentation linéaire du glucose?",
    "choices": [
      {
        "content": "$\\mathrm{COOH}$.",
        "correct": false,
        "explanation": "La projection linéaire du glucose ne se termine pas par $\\ce{COOH}$ ; elle porte $\\ce{CH2OH}$ en bas."
      },
      {
        "content": "$\\mathrm{CHO}$.",
        "correct": false,
        "explanation": "Le groupe $\\ce{CHO}$ est placé en haut, et non en bas, de la représentation linéaire du glucose."
      },
      {
        "content": "$\\mathrm{CO{-}R}$.",
        "correct": false,
        "explanation": "Le groupe terminal inférieur du glucose est $\\ce{CH2OH}$, pas une fonction cétone."
      },
      {
        "content": "$\\mathrm{CH_3}$.",
        "correct": false,
        "explanation": "Le groupe terminal inférieur du glucose est $\\ce{CH2OH}$, et non un groupe méthyle $\\ce{CH3}$."
      },
      {
        "content": "$\\mathrm{CH_2OH}$.",
        "correct": true,
        "explanation": "Le groupe $\\ce{CH2OH}$ placé en bas correspond à un alcool primaire."
      }
    ],
    "explanation": "Le groupe terminal $\\ce{CH2OH}$ placé en bas correspond à un alcool primaire."
  },
  {
    "order": 86,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la projection linéaire des sucres, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les liaisons horizontales sont décrites comme dirigées vers l'arrière.",
        "correct": false,
        "explanation": "Dans la convention retenue, les liaisons horizontales $\\ce{C-H}$ et $\\ce{C-OH}$ sont dirigées vers l’observateur."
      },
      {
        "content": "Les carbones saturés de la chaîne sont réellement plans.",
        "correct": false,
        "explanation": "Les carbones saturés sont tétraédriques ; la projection plane est une convention de représentation."
      },
      {
        "content": "Les liaisons C-H et C-OH dessinées horizontalement sont décrites comme dirigées vers l'observateur.",
        "correct": true,
        "explanation": "Dans cette convention de projection, les liaisons horizontales sont dirigées vers l’observateur."
      },
      {
        "content": "Les liaisons C-C de l'axe vertical sont décrites comme dirigées vers l'arrière dans l'explication.",
        "correct": true,
        "explanation": "Dans la convention de projection retenue, les liaisons de l’axe vertical sont représentées vers l’arrière, contrairement aux liaisons horizontales."
      },
      {
        "content": "La molécule réelle est strictement plane.",
        "correct": false,
        "explanation": "La projection est plane, mais la molécule réelle est tridimensionnelle et les carbones saturés sont tétraédriques."
      }
    ],
    "explanation": "La projection linéaire est une convention : les liaisons horizontales sont orientées vers l'observateur et les carbones saturés restent tétraédriques."
  },
  {
    "order": 87,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement la représentation tridimensionnelle d'un sucre cyclique ?",
    "choices": [
      {
        "content": "Une projection strictement plane comme seule représentation réaliste.",
        "correct": false,
        "explanation": "La représentation en perspective rend mieux compte de la géométrie tridimensionnelle du cycle."
      },
      {
        "content": "Une écriture RCHO uniquement.",
        "correct": false,
        "explanation": "L’écriture $\\ce{RCHO}$ décrit seulement un motif aldéhydique et ne rend pas compte de la géométrie du sucre cyclique."
      },
      {
        "content": "Le cycle n'est pas réellement limité à un plan.",
        "correct": true,
        "explanation": "La géométrie du sucre cyclique est tridimensionnelle ; la représentation en perspective rend ce volume plus fidèlement."
      },
      {
        "content": "La représentation en perspective.",
        "correct": true,
        "explanation": "La représentation en perspective rend mieux compte de l’organisation tridimensionnelle du cycle et de ses substituants."
      },
      {
        "content": "Une simple formule brute.",
        "correct": false,
        "explanation": "Une formule brute indique la composition mais ne décrit pas la géométrie tridimensionnelle du sucre."
      }
    ],
    "explanation": "Une représentation en perspective rend mieux compte de la géométrie tridimensionnelle réelle d'un sucre cyclique."
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
        "explanation": "Une fonction alcool de la même molécule peut réagir avec l’aldéhyde et conduire à l’hémiacétal cyclique."
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
        "explanation": "La fonction aldéhyde participe à la formation de l’hémiacétal ; elle n’est donc pas conservée intacte sous sa forme initiale."
      },
      {
        "content": "La cyclisation d’un sucre peut résulter de la réaction intramoléculaire d’une fonction aldéhyde avec une fonction alcool.",
        "correct": true,
        "explanation": "Cette réaction forme une fonction hémiacétal et ferme le cycle."
      }
    ],
    "explanation": "La cyclisation d'un sucre aldéhydique résulte de la réaction intramoléculaire d'une fonction alcool avec l'aldéhyde et forme un hémiacétal."
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
    "explanation": "Dans le modèle simplifié, le glucose est associé à un aldéhyde et classé réducteur ; le fructose est associé à une cétone et classé non réducteur."
  },
  {
    "order": 90,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La forme linéaire du glucose présente une fonction aldéhyde en haut et un alcool primaire en bas. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le groupe CH2OH correspond à un alcool primaire.",
        "correct": true,
        "explanation": "Le groupe terminal $\\ce{CH2OH}$ correspond à une fonction alcool primaire."
      },
      {
        "content": "La molécule porte plusieurs fonctions alcool en plus de l'aldéhyde.",
        "correct": true,
        "explanation": "La forme linéaire du glucose montre plusieurs groupes hydroxyle en plus du groupe aldéhyde terminal."
      },
      {
        "content": "La présence d'alcools empêche la fonction aldéhyde d'être identifiée.",
        "correct": false,
        "explanation": "Une molécule peut porter plusieurs fonctions différentes ; les groupes alcool n’empêchent pas d’identifier le groupe aldéhyde."
      },
      {
        "content": "La fonction aldéhyde est nécessairement située en bas de la chaîne.",
        "correct": false,
        "explanation": "Dans la représentation linéaire du glucose décrite ici, le groupe aldéhyde $\\ce{CHO}$ est placé en haut de la chaîne."
      },
      {
        "content": "Le groupe CHO ne permet pas d'identifier une fonction aldéhyde.",
        "correct": false,
        "explanation": "Le groupe $\\ce{CHO}$ permet au contraire d’identifier la fonction aldéhyde dans la forme linéaire."
      }
    ],
    "explanation": "La représentation linéaire du glucose permet d'identifier simultanément une fonction aldéhyde et plusieurs fonctions alcool, dont un alcool primaire terminal."
  },
  {
    "order": 91,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi la projection linéaire d'un sucre ne doit-elle pas être interprétée comme une molécule réellement plane ?",
    "choices": [
      {
        "content": "La projection plane est une convention de représentation.",
        "correct": true,
        "explanation": "La projection plane code une structure tridimensionnelle : elle ne signifie pas que la molécule réelle est plane."
      },
      {
        "content": "Les carbones sont tétraédriques.",
        "correct": true,
        "explanation": "Les carbones saturés ont une géométrie tétraédrique ; la projection plane n’est qu’une convention de représentation."
      },
      {
        "content": "Les liaisons horizontales et verticales codent des directions différentes dans l'espace.",
        "correct": true,
        "explanation": "Dans la convention de projection utilisée, les liaisons horizontales et verticales correspondent à des orientations spatiales différentes."
      },
      {
        "content": "Une représentation tridimensionnelle rend mieux compte de la géométrie réelle.",
        "correct": true,
        "explanation": "La représentation en perspective rend mieux compte de la disposition tridimensionnelle réelle du cycle et de ses substituants."
      },
      {
        "content": "Les liaisons horizontales et verticales indiquent toutes la même orientation dans l'espace.",
        "correct": false,
        "explanation": "Les liaisons horizontales et verticales codent au contraire des orientations spatiales différentes."
      }
    ],
    "explanation": "La projection linéaire code une structure tridimensionnelle : les carbones saturés sont tétraédriques et les directions des liaisons sont conventionnelles."
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
        "content": "La cyclisation nécessite d'abord l'oxydation de l'aldéhyde en acide carboxylique.",
        "correct": false,
        "explanation": "La cyclisation résulte de la réaction intramoléculaire entre l’aldéhyde et une fonction alcool ; aucune oxydation préalable en acide n’est requise."
      },
      {
        "content": "La cyclisation d’un sucre peut résulter de la réaction intramoléculaire d’une fonction aldéhyde avec une fonction alcool.",
        "correct": true,
        "explanation": "Cette réaction forme une fonction hémiacétal et ferme le cycle."
      },
      {
        "content": "Une fonction alcool de la même molécule ne peut pas réagir avec l'aldéhyde.",
        "correct": false,
        "explanation": "Une fonction alcool de la même molécule peut au contraire réagir avec l’aldéhyde et former l’hémiacétal cyclique."
      },
      {
        "content": "Le produit possède une fonction hémiacétal.",
        "correct": true,
        "explanation": "Un hémiacétal se forme par addition d’une fonction alcool sur un groupe carbonyle, notamment lors de la cyclisation de certains sucres."
      }
    ],
    "explanation": "La cyclisation d'un sucre aldéhydique met en jeu une fonction alcool de la même molécule et forme un hémiacétal cyclique."
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
        "explanation": "La cyclisation forme un hémiacétal ; elle ne transforme pas obligatoirement l’aldéhyde en cétone."
      },
      {
        "content": "La représentation en perspective impose un cycle parfaitement plan.",
        "correct": false,
        "explanation": "La perspective est justement utilisée pour rendre compte de la géométrie tridimensionnelle du cycle."
      }
    ],
    "explanation": "La forme cyclique est associée à la formation d'un hémiacétal et se représente plus fidèlement en perspective."
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
    "explanation": "La réaction intramoléculaire d'une fonction alcool avec l'aldéhyde forme un hémiacétal."
  },
  {
    "order": 95,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans la représentation linéaire d'un sucre, comment interprète-t-on les liaisons $\\ce{C-H}$ et $\\ce{C-OH}$ horizontales ?",
    "choices": [
      {
        "content": "Liées à une géométrie tétraédrique du carbone.",
        "correct": true,
        "explanation": "La projection plane code une géométrie tridimensionnelle autour des carbones tétraédriques."
      },
      {
        "content": "Différentes spatialement des liaisons C-C verticales.",
        "correct": true,
        "explanation": "Les liaisons horizontales et celles de l’axe vertical codent des orientations spatiales différentes dans cette projection."
      },
      {
        "content": "Forcément coplanaires avec toute la chaîne dans la molécule réelle.",
        "correct": false,
        "explanation": "Les substituants ne sont pas tous coplanaires dans la molécule réelle, car les carbones saturés sont tétraédriques."
      },
      {
        "content": "Les liaisons horizontales sont décrites comme dirigées vers l'arrière.",
        "correct": false,
        "explanation": "Dans la convention retenue, les liaisons horizontales $\\ce{C-H}$ et $\\ce{C-OH}$ sont dirigées vers l’observateur, pas vers l’arrière."
      },
      {
        "content": "Dirigées vers l'observateur.",
        "correct": true,
        "explanation": "Dans cette projection, les liaisons horizontales sont représentées comme dirigées vers l’observateur."
      }
    ],
    "explanation": "Dans la projection linéaire, les liaisons horizontales $\\ce{C-H}$ et $\\ce{C-OH}$ sont orientées vers l'observateur."
  },
  {
    "order": 96,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi la représentation en perspective d'un sucre cyclique est-elle plus fidèle à sa géométrie réelle ?",
    "choices": [
      {
        "content": "Le cycle n'est pas réellement limité à un plan.",
        "correct": true,
        "explanation": "Le cycle adopte une géométrie tridimensionnelle ; la perspective la représente plus fidèlement."
      },
      {
        "content": "Elle montre que le cycle occupe l'espace.",
        "correct": true,
        "explanation": "La perspective montre que le cycle et ses substituants occupent l’espace au lieu d’être réellement coplanaires."
      },
      {
        "content": "Elle n’est pas présentée comme plus fidèle à la réalité.",
        "correct": false,
        "explanation": "La perspective est au contraire présentée comme plus fidèle à la géométrie réelle du sucre cyclique."
      },
      {
        "content": "Elle aide à visualiser la géométrie tridimensionnelle.",
        "correct": true,
        "explanation": "La représentation en perspective montre plus clairement l’orientation spatiale des liaisons et des substituants."
      },
      {
        "content": "La perspective montre que tous les atomes du cycle sont coplanaires.",
        "correct": false,
        "explanation": "La représentation en perspective met au contraire en évidence une géométrie tridimensionnelle et non strictement coplanaire."
      }
    ],
    "explanation": "La représentation en perspective montre le cycle et ses substituants dans l'espace et est donc plus fidèle à la géométrie réelle."
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un sucre porte, dans sa forme linéaire, une fonction aldéhyde et plusieurs fonctions alcool. Quelles propositions sont cohérentes ?",
    "choices": [
      {
        "content": "La forme cyclique peut être représentée en perspective.",
        "correct": true,
        "explanation": "Une représentation en perspective permet de rendre visible la géométrie tridimensionnelle de la forme cyclique."
      },
      {
        "content": "La présence des alcools annule toute réactivité de l'aldéhyde.",
        "correct": false,
        "explanation": "Les fonctions alcool participent au contraire à la cyclisation en réagissant avec l’aldéhyde de la même molécule."
      },
      {
        "content": "La cyclisation transforme nécessairement l'aldéhyde en cétone.",
        "correct": false,
        "explanation": "La cyclisation forme un hémiacétal par réaction de l’aldéhyde avec une fonction alcool ; elle ne forme pas nécessairement une cétone."
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
    "explanation": "La coexistence d'une fonction aldéhyde et de fonctions alcool permet à la fois le caractère réducteur retenu dans le modèle et la cyclisation en hémiacétal."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quel enchaînement décrit correctement la cyclisation d'un sucre aldéhydique dans le modèle ?",
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
        "content": "La fonction aldéhyde reste intacte après la cyclisation.",
        "correct": false,
        "explanation": "La fonction aldéhyde participe à la formation de l’hémiacétal et n’est donc pas conservée intacte sous sa forme initiale."
      }
    ],
    "explanation": "Une fonction alcool interne attaque l'aldéhyde de la même molécule, forme un hémiacétal et ferme la chaîne."
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
        "explanation": "Dans le modèle retenu, le fructose est associé à une cétone linéaire et classé non réducteur."
      },
      {
        "content": "Glucose → fonction aldéhyde linéaire → sucre non réducteur.",
        "correct": false,
        "explanation": "Dans le modèle simplifié, la fonction aldéhyde linéaire du glucose conduit au contraire à le classer comme sucre réducteur."
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
        "explanation": "Le glucose est associé à une fonction aldéhyde linéaire et classé réducteur dans ce modèle."
      }
    ],
    "explanation": "Dans le modèle simplifié retenu : glucose → aldéhyde linéaire → sucre réducteur ; fructose → cétone linéaire → sucre non réducteur."
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
        "explanation": "Dans la représentation linéaire du glucose, le groupe terminal $\\ce{CH2OH}$ est placé en bas."
      },
      {
        "content": "La cyclisation forme un hémiacétal.",
        "correct": true,
        "explanation": "La cyclisation par réaction intramoléculaire entre l’aldéhyde et un alcool forme un hémiacétal."
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
        "explanation": "Le fructose est associé à une fonction cétone dans sa forme linéaire présentée."
      },
      {
        "content": "La cyclisation exige une fonction amide.",
        "correct": false,
        "explanation": "La cyclisation met en jeu une fonction aldéhyde et une fonction alcool ; aucune amide n’est nécessaire."
      },
      {
        "content": "Le glucose ne possède aucune fonction alcool.",
        "correct": false,
        "explanation": "Le glucose comporte plusieurs groupes hydroxyle ; il possède donc plusieurs fonctions alcool."
      }
    ],
    "explanation": "La forme linéaire du glucose présente $\\ce{CHO}$ en haut et $\\ce{CH2OH}$ en bas ; la cyclisation forme un hémiacétal et la perspective rend mieux compte du volume."
  }
];
