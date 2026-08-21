import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.5 – Section D – Thioesters et acétyl-CoA
 */

export const UE14_CH9_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 79,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des thioesters:",
    "choices": [
      {
        "content": "Ils sont identiques aux amides.",
        "correct": false,
        "explanation": "Une amide porte N, pas S."
      },
      {
        "content": "L’hydrolyse d’un thioester ne peut jamais régénérer un thiol.",
        "correct": false,
        "explanation": "L’hydrolyse conduit à l’acide carboxylique et au thiol correspondant."
      },
      {
        "content": "Ils sont présentés comme un cas particulier d'ester contenant du soufre.",
        "correct": true,
        "explanation": "Le support parle d'ester soufré."
      },
      {
        "content": "Le motif général est de type $\\mathrm{R{-}C(=O){-}SR'}$.",
        "correct": true,
        "explanation": "Structure donnée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Ils contiennent un atome de soufre à la place de l'oxygène alkoxy d'un ester classique.",
        "correct": true,
        "explanation": "Différence structurale essentielle: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le thioester est l'analogue soufré de l'ester au niveau du groupe lié au carbonyle."
  },
  {
    "order": 80,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel motif correspond à un thioester?",
    "choices": [
      {
        "content": "$\\mathrm{R{-}C(=O){-}OR'}$.",
        "correct": false,
        "explanation": "Le motif ou le produit considéré correspond bien à une fonction ester."
      },
      {
        "content": "$\\mathrm{R{-}C(=O){-}NR'R''}$.",
        "correct": false,
        "explanation": "Le motif ou le produit considéré correspond bien à une fonction amide."
      },
      {
        "content": "$\\mathrm{R{-}C(=O){-}SR'}$.",
        "correct": true,
        "explanation": "Motif général: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "$\\mathrm{R{-}SH}$.",
        "correct": false,
        "explanation": "Le motif considéré correspond bien à une fonction thiol."
      },
      {
        "content": "Ammonium quaternaire.",
        "correct": false,
        "explanation": "Un thioester ne se définit pas par un azote tétrasubstitué."
      }
    ],
    "explanation": "Le thioester se reconnaît par C(=O)-S-R'."
  },
  {
    "order": 81,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Comment prépare-t-on un thioester dans le cadre?",
    "choices": [
      {
        "content": "La préparation d’un ester étudiée exige nécessairement une amine comme nucléophile.",
        "correct": false,
        "explanation": "L’ester est formé ici à partir d’un alcool et d’un acide activé."
      },
      {
        "content": "À partir d'un acide activé et d'un thiol.",
        "correct": true,
        "explanation": "Ce bilan reprend directement la transformation attendue dans cette réaction."
      },
      {
        "content": "Le thiol est noté $\\mathrm{R{-}SH}$.",
        "correct": true,
        "explanation": "Définition rappelée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un chlorure d'acyle peut être l'acide activé.",
        "correct": true,
        "explanation": "Cité: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un anhydride d'acide peut être l'acide activé.",
        "correct": true,
        "explanation": "Cité: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La préparation du thioester est l'analogue soufré de l'estérification."
  },
  {
    "order": 82,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la polarisation d'un thioester:",
    "choices": [
      {
        "content": "Le carbone du groupement CH3 voisin du carbonyle ne peut pas présenter un caractère nucléophile dans l'exemple.",
        "correct": false,
        "explanation": "La relation correcte est: « Le carbone du groupement CH3 voisin du carbonyle peut présenter un caractère nucléophile dans l'exemple ». La négation proposée est donc fausse."
      },
      {
        "content": "La décrit le carbonyle comme totalement apolaire.",
        "correct": false,
        "explanation": "La polarisation est centrale: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "L'oxygène du carbonyle exerce un effet électroattracteur.",
        "correct": true,
        "explanation": "Comme pour les esters: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le carbone carbonylé possède un caractère électrophile.",
        "correct": true,
        "explanation": "Conséquence indiquée: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le support transpose aux thioesters le modèle de centres électrophile et nucléophile présenté pour les esters."
  },
  {
    "order": 83,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La liaison thioester est hydrolysable:",
    "choices": [
      {
        "content": "Avec de l'eau dans des conditions de pH adaptées.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "À l'aide d'enzymes.",
        "correct": true,
        "explanation": "Deuxième possibilité citée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "En donnant un acide carboxylique et un thiol.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Uniquement en donnant une amide.",
        "correct": false,
        "explanation": "Aucun atome d’azote n’est introduit par cette transformation, donc aucune fonction azotée n’est formée."
      },
      {
        "content": "L’hydrolyse d’un thioester ne peut jamais régénérer un thiol.",
        "correct": false,
        "explanation": "L’hydrolyse conduit à l’acide carboxylique et au thiol correspondant."
      }
    ],
    "explanation": "L'hydrolyse d'un thioester régénère la fonction acide et le thiol."
  },
  {
    "order": 84,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'acétyl-CoA:",
    "choices": [
      {
        "content": "Il est décrit comme un simple alcane.",
        "correct": false,
        "explanation": "Il contient une fonction thioester."
      },
      {
        "content": "Un thioester comporte le motif $\\ce{R-C(=O)-SR'}$.",
        "correct": true,
        "explanation": "Le soufre remplace l’oxygène alkoxy d’un ester classique."
      },
      {
        "content": "Il n’est pas présenté comme un thioester du coenzyme A-SH.",
        "correct": false,
        "explanation": "La relation correcte est: « Il est présenté comme un thioester du coenzyme A-SH ». La négation proposée est donc fausse."
      },
      {
        "content": "Sa fonction thioester explique une partie de sa réactivité.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Son hydrolyse conduit notamment au coenzyme A-SH.",
        "correct": true,
        "explanation": "Produit indiqué: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "L'acétyl-CoA est l'exemple biologique majeur du thioester."
  },
  {
    "order": 85,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'hydrolyse de l'acétyl-CoA, dans le bilan simplifié, conduit:",
    "choices": [
      {
        "content": "À l'acide acétique.",
        "correct": true,
        "explanation": "Produit acide cité: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "À une rupture de la liaison thioester.",
        "correct": true,
        "explanation": "C'est la transformation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "À une formation obligatoire de liaison peptidique.",
        "correct": false,
        "explanation": "Sans rapport: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L’hydrolyse d’un thioester ne peut jamais régénérer un thiol.",
        "correct": false,
        "explanation": "L’hydrolyse conduit à l’acide carboxylique et au thiol correspondant."
      },
      {
        "content": "Au coenzyme A-SH.",
        "correct": true,
        "explanation": "Le thiol est régénéré: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le bilan relie acétyl-CoA, CoA-SH et acide acétique."
  },
  {
    "order": 86,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La transformation inverse CoA-SH → acétyl-CoA est présentée comme:",
    "choices": [
      {
        "content": "L’hydrolyse d’un thioester ne peut jamais régénérer un thiol.",
        "correct": false,
        "explanation": "L’hydrolyse conduit à l’acide carboxylique et au thiol correspondant."
      },
      {
        "content": "Une n’est pasérification enzymatique au sens large.",
        "correct": false,
        "explanation": "La relation correcte est: « Une estérification enzymatique au sens large ». La négation proposée est donc fausse."
      },
      {
        "content": "Une formation de thioester.",
        "correct": true,
        "explanation": "Le soufre est acylé: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une réaction réalisée par des enzymes.",
        "correct": true,
        "explanation": "Précision: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une hydrolyse.",
        "correct": false,
        "explanation": "C'est la réaction inverse: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le passage CoA-SH → acétyl-CoA reforme la liaison thioester."
  },
  {
    "order": 87,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles analogies ester/thioester sont explicitement ou directement soutenues par la?",
    "choices": [
      {
        "content": "Le carbone carbonylé peut être électrophile.",
        "correct": true,
        "explanation": "Modèle électronique commun: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Ils diffèrent par O versus S dans le groupe lié au carbonyle.",
        "correct": true,
        "explanation": "Différence structurale: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "Les deux possèdent un carbonyle.",
        "correct": true,
        "explanation": "Motif commun: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Les deux peuvent être hydrolysés.",
        "correct": true,
        "explanation": "Hydrolysabilité décrite: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le thioester est présenté comme un ester soufré avec une réactivité apparentée."
  },
  {
    "order": 88,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel partenaire réagit avec un acide activé pour former un thioester?",
    "choices": [
      {
        "content": "Une amine.",
        "correct": false,
        "explanation": "Elle donnerait une amide: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un alcool.",
        "correct": false,
        "explanation": "Il donnerait un ester: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un alcane.",
        "correct": false,
        "explanation": "Ce n'est pas le nucléophile utilisé."
      },
      {
        "content": "Un thiol.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Alcène.",
        "correct": false,
        "explanation": "Cette transformation ne crée pas de double liaison carbone-carbone."
      }
    ],
    "explanation": "Le thiol R-SH est le partenaire de formation du thioester."
  },
  {
    "order": 89,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare la synthèse de trois dérivés d'acide à partir du même chlorure d'acyle. Quelles associations sont exactes?",
    "choices": [
      {
        "content": "Le produit ne dépend pas de la nature du partenaire.",
        "correct": false,
        "explanation": "O, N ou S déterminent la fonction."
      },
      {
        "content": "La préparation d’un ester étudiée exige nécessairement une amine comme nucléophile.",
        "correct": false,
        "explanation": "L’ester est formé ici à partir d’un alcool et d’un acide activé."
      },
      {
        "content": "Alcool → ester.",
        "correct": true,
        "explanation": "Acylation de O: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Amine → amide.",
        "correct": true,
        "explanation": "Acylation de N: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Thiol → thioester.",
        "correct": true,
        "explanation": "Acylation de S: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Un même fragment acyle peut donner trois familles en changeant le nucléophile."
  },
  {
    "order": 90,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un thioester $\\mathrm{CH_3{-}CO{-}SR'}$ est analysé selon le modèle électronique. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le carbone du CH3 adjacent peut présenter un caractère nucléophile.",
        "correct": true,
        "explanation": "Le support le précise: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La fonction possède donc deux zones de polarité réactive dans le modèle simplifié.",
        "correct": true,
        "explanation": "Analogie avec l'ester: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le soufre supprime toute polarisation du carbonyle.",
        "correct": false,
        "explanation": "La décrit explicitement la polarisation."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "Le carbone du carbonyle n’est pas électrophile.",
        "correct": false,
        "explanation": "La relation correcte est: « Le carbone du carbonyle est électrophile ». La négation proposée est donc fausse."
      }
    ],
    "explanation": "Le thioester reprend le schéma carbonyle électrophile / carbone alpha nucléophile."
  },
  {
    "order": 91,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'hydrolyse d'un thioester:",
    "choices": [
      {
        "content": "L’acétyl-CoA est un thioester du coenzyme A sous forme thiol.",
        "correct": true,
        "explanation": "Le groupe acétyle est lié au soufre de la CoA par une liaison thioester."
      },
      {
        "content": "Elle rompt la liaison acyle-soufre dans le bilan simplifié.",
        "correct": true,
        "explanation": "On retrouve acide + thiol."
      },
      {
        "content": "Le thiol est régénéré.",
        "correct": true,
        "explanation": "R'SH: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'acide carboxylique est régénéré.",
        "correct": true,
        "explanation": "RCOOH: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La fonction thioester est décrite comme non hydrolysable.",
        "correct": false,
        "explanation": "Elle est hydrolysable: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "L'hydrolyse restitue les deux partenaires fonctionnels du thioester."
  },
  {
    "order": 92,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans le couple acétyl-CoA / CoA-SH, quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L'hydrolyse va de l'acétyl-CoA vers CoA-SH + acide acétique.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "La réaction inverse peut être enzymatique.",
        "correct": true,
        "explanation": "La le précise: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L’hydrolyse d’un thioester ne peut jamais régénérer un thiol.",
        "correct": false,
        "explanation": "L’hydrolyse conduit à l’acide carboxylique et au thiol correspondant."
      },
      {
        "content": "L'acétyl-CoA est la forme thioester.",
        "correct": true,
        "explanation": "Définition: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "CoA-SH porte la fonction thiol utilisée pour reformer le thioester.",
        "correct": true,
        "explanation": "Le groupe SH est le partenaire."
      }
    ],
    "explanation": "Le support utilise ce couple pour illustrer l'interconversion biologique d'un thioester."
  },
  {
    "order": 93,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi l'acétyl-CoA est-il un bon exemple pédagogique pour cette section?",
    "choices": [
      {
        "content": "Il montre qu'une fonction thioester existe dans un composé biologique majeur.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Il illustre une hydrolyse de thioester.",
        "correct": true,
        "explanation": "Acétyl-CoA → CoA-SH + acide acétique."
      },
      {
        "content": "Il illustre la formation enzymatique inverse du thioester.",
        "correct": true,
        "explanation": "CoA-SH → acétyl-CoA: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Il sert à démontrer que tous les thioesters sont des peptides.",
        "correct": false,
        "explanation": "Ce sont des fonctions différentes."
      },
      {
        "content": "L’hydrolyse d’un thioester ne peut jamais régénérer un thiol.",
        "correct": false,
        "explanation": "L’hydrolyse conduit à l’acide carboxylique et au thiol correspondant."
      }
    ],
    "explanation": "L'exemple relie structure, hydrolyse et formation du thioester dans un contexte biologique."
  },
  {
    "order": 94,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel groupe fonctionnel du coenzyme A-SH réagit pour former la liaison thioester de l'acétyl-CoA?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "thiol",
        "fonction thiol",
        "SH",
        "groupe thiol",
        "groupement thiol"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le coenzyme A-SH apporte la fonction thiol R-SH."
  },
  {
    "order": 95,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare l'hydrolyse d'un ester et celle d'un thioester. Quelles propositions sont exactes dans le cadre?",
    "choices": [
      {
        "content": "L'ester donne un alcool comme partenaire hétéroatomique.",
        "correct": true,
        "explanation": "R'OH: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le thioester donne un thiol.",
        "correct": true,
        "explanation": "R'SH: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Les deux donnent nécessairement une amine protonée.",
        "correct": false,
        "explanation": "Cela concerne l'amide: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L’hydrolyse d’un thioester ne peut jamais régénérer un thiol.",
        "correct": false,
        "explanation": "L’hydrolyse conduit à l’acide carboxylique et au thiol correspondant."
      },
      {
        "content": "Les deux fonctions sont hydrolysables.",
        "correct": true,
        "explanation": "Propriété commune: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le produit hétéroatomique révèle la nature O ou S du dérivé initial."
  },
  {
    "order": 96,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une enzyme hydrolyse un thioester de type $\\mathrm{RCO{-}SR'}$. Quel bilan fonctionnel est attendu?",
    "choices": [
      {
        "content": "Un ester est totalement insensible à l’eau quelles que soient les conditions.",
        "correct": false,
        "explanation": "La fonction ester est hydrolysable en milieu acide ou basique dans les conditions appropriées."
      },
      {
        "content": "Formation de RCOOH.",
        "correct": true,
        "explanation": "Acide carboxylique: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Formation de R'SH.",
        "correct": true,
        "explanation": "Le motif considéré correspond bien à une fonction thiol."
      },
      {
        "content": "Disparition de la fonction thioester.",
        "correct": true,
        "explanation": "La liaison acyle-S est rompue."
      },
      {
        "content": "Formation obligatoire d'un ester.",
        "correct": false,
        "explanation": "Ce n'est pas le bilan de l'hydrolyse."
      }
    ],
    "explanation": "L'enzyme réalise le même bilan fonctionnel général que l'hydrolyse par l'eau."
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des centres réactifs de l'acétyl-thioester simplifié $\\mathrm{CH_3CO{-}SR'}$:",
    "choices": [
      {
        "content": "Cette réactivité est présentée comme analogue à celle des esters.",
        "correct": true,
        "explanation": "Le support dit « de la même façon que les esters »."
      },
      {
        "content": "Aucun atome d'oxygène n'est présent.",
        "correct": false,
        "explanation": "Le carbonyle contient un oxygène."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "Le carbone carbonylé est électrophile.",
        "correct": true,
        "explanation": "Polarisation du C=O: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le carbone du CH3 voisin peut présenter un caractère nucléophile.",
        "correct": true,
        "explanation": "Point indiqué: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le thioester conserve l'oxygène carbonylé responsable de la polarisation."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une préparation utilise successivement chlorure d'acyle + thiol, puis hydrolyse du produit. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "La première étape ne forme pas un thioester.",
        "correct": false,
        "explanation": "La relation correcte est: « La première étape forme un thioester ». La négation proposée est donc fausse."
      },
      {
        "content": "La seconde peut régénérer l'acide carboxylique.",
        "correct": true,
        "explanation": "L’hydrolyse rompt la liaison fonctionnelle en présence d’eau et conduit aux produits indiqués."
      },
      {
        "content": "La seconde peut régénérer le thiol.",
        "correct": true,
        "explanation": "L’hydrolyse rompt la liaison fonctionnelle en présence d’eau et conduit aux produits indiqués."
      },
      {
        "content": "Le soufre est remplacé par un azote dans le bilan sans autre réactif.",
        "correct": false,
        "explanation": "Le composé comporte un groupe amino lié à la chaîne carbonée: il s’agit de la classe d’amine attendue."
      },
      {
        "content": "La préparation d’un ester étudiée exige nécessairement une amine comme nucléophile.",
        "correct": false,
        "explanation": "L’ester est formé ici à partir d’un alcool et d’un acide activé."
      }
    ],
    "explanation": "La séquence formation/hydrolyse est réversible au niveau fonctionnel dans le schéma."
  },
  {
    "order": 99,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un thioester possède le motif C(=O)-S-R'.",
        "correct": true,
        "explanation": "Structure : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Acide activé + thiol → thioester.",
        "correct": true,
        "explanation": "Préparation : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un thioester est hydrolysable.",
        "correct": true,
        "explanation": "Propriété : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'acétyl-CoA est un thioester du CoA-SH.",
        "correct": true,
        "explanation": "Application : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Hydrolyse de l'acétyl-CoA → CoA-SH + acide acétique.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Un thioester est une amide.",
        "correct": false,
        "explanation": "S remplace N : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le carbone carbonylé du thioester est toujours nucléophile.",
        "correct": false,
        "explanation": "Il est électrophile : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un thioester ne peut jamais être hydrolysé par une enzyme.",
        "correct": false,
        "explanation": "L’exemple retenu est les enzymes."
      },
      {
        "content": "CoA-SH est un alcool.",
        "correct": false,
        "explanation": "Le groupe mis en avant est un thiol."
      },
      {
        "content": "La formation d'acétyl-CoA est une hydrolyse.",
        "correct": false,
        "explanation": "C'est la réaction inverse : cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Cette sélection consolide structure, préparation, hydrolyse et application acétyl-CoA."
  },
  {
    "order": 100,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux transformations correspondant au couple acétyl-CoA / CoA-SH.",
    "choices": [
      {
        "content": "CoA-SH → acétyl-CoA par une réaction enzymatique de formation du thioester.",
        "correct": true,
        "explanation": "Réaction inverse: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Acétyl-CoA → peptide par simple rotation.",
        "correct": false,
        "explanation": "Sans rapport: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "CoA-SH + amine → amide obligatoire.",
        "correct": false,
        "explanation": "Ce n'est pas le cycle décrit."
      },
      {
        "content": "Un acide carboxylique non activé et une amine donnent directement et quantitativement une amide dans les conditions ordinaires décrites.",
        "correct": false,
        "explanation": "Le couple acide non activé/amine conduit d’abord à une réaction acido-basique et à un sel."
      },
      {
        "content": "Acétyl-CoA + eau → CoA-SH + acide acétique.",
        "correct": true,
        "explanation": "L’hydrolyse rompt la liaison fonctionnelle en présence d’eau et conduit aux produits indiqués."
      }
    ],
    "explanation": "Les deux sens illustrent hydrolyse et reformation enzymatique du thioester."
  }
];
