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
        "explanation": "Un thioester est l’analogue soufré d’un ester : le soufre remplace l’oxygène alkoxy."
      },
      {
        "content": "Le motif général est de type $\\mathrm{R{-}C(=O){-}SR'}$.",
        "correct": true,
        "explanation": "Le motif général d’un thioester est $\\ce{R-C(=O)-S-R'}$."
      },
      {
        "content": "Ils contiennent un atome de soufre à la place de l'oxygène alkoxy d'un ester classique.",
        "correct": true,
        "explanation": "Dans un thioester, le soufre remplace l’oxygène alkoxy de l’ester tout en conservant le groupe carbonyle."
      }
    ],
    "explanation": "Une amide porte N, pas S."
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
        "explanation": "Le motif général d’un thioester est $\\ce{R-C(=O)-S-R'}$."
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
    "explanation": "Le motif ou le produit considéré correspond bien à une fonction ester."
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
        "explanation": "Par définition, le thiol est noté $\\mathrm{R{-}SH}$."
      },
      {
        "content": "Un chlorure d'acyle peut être l'acide activé.",
        "correct": true,
        "explanation": "Un chlorure d’acyle peut fournir le groupe acyle nécessaire à la formation d’un thioester avec un thiol."
      },
      {
        "content": "Un anhydride d'acide peut être l'acide activé.",
        "correct": true,
        "explanation": "Un anhydride d’acide peut également acyler un thiol pour former un thioester."
      }
    ],
    "explanation": "L’ester est formé ici à partir d’un alcool et d’un acide activé."
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
        "content": "Le groupe carbonyle est totalement apolaire.",
        "correct": false,
        "explanation": "La liaison $\\ce{C=O}$ est polarisée : l’oxygène est riche en électrons et le carbone carbonylé est électrophile."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "L'oxygène du carbonyle exerce un effet électroattracteur.",
        "correct": true,
        "explanation": "Comme dans un ester, l’oxygène du carbonyle attire la densité électronique et rend le carbone carbonylé électrophile."
      },
      {
        "content": "Le carbone carbonylé possède un caractère électrophile.",
        "correct": true,
        "explanation": "La polarisation de la liaison $\\ce{C=O}$ rend le carbone carbonylé électrophile."
      }
    ],
    "explanation": "La relation correcte est: « Le carbone du groupement CH3 voisin du carbonyle peut présenter un caractère nucléophile dans l'exemple ». La négation proposée est donc fausse."
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
        "explanation": "Dans le contexte biologique considéré, l’interconversion du thioester peut être catalysée par des enzymes."
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
    "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
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
        "explanation": "L’hydrolyse de l’acétyl-CoA rompt la liaison thioester et régénère le coenzyme A sous forme $\\ce{CoA-SH}$."
      }
    ],
    "explanation": "Il contient une fonction thioester."
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
        "explanation": "L’hydrolyse de l’acétyl-CoA libère le fragment acétyle sous forme d’acide acétique dans le bilan simplifié."
      },
      {
        "content": "À une rupture de la liaison thioester.",
        "correct": true,
        "explanation": "Un thioester est l’analogue soufré d’un ester et possède le motif $\\ce{R-C(=O)-S-R'}$."
      },
      {
        "content": "À une formation obligatoire de liaison peptidique.",
        "correct": false,
        "explanation": "Cette proposition ne correspond pas au bilan d’hydrolyse considéré."
      },
      {
        "content": "L’hydrolyse d’un thioester ne peut jamais régénérer un thiol.",
        "correct": false,
        "explanation": "L’hydrolyse conduit à l’acide carboxylique et au thiol correspondant."
      },
      {
        "content": "Au coenzyme A-SH.",
        "correct": true,
        "explanation": "La rupture de la liaison thioester régénère le thiol du coenzyme A, $\\ce{CoA-SH}$."
      }
    ],
    "explanation": "L’hydrolyse de l’acétyl-CoA libère le fragment acétyle sous forme d’acide acétique dans le bilan simplifié."
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
        "explanation": "Le soufre du coenzyme A est acylé pour former la liaison thioester de l’acétyl-CoA."
      },
      {
        "content": "Une réaction réalisée par des enzymes.",
        "correct": true,
        "explanation": "La formation de l’acétyl-CoA est réalisée enzymatiquement dans le contexte biologique considéré."
      },
      {
        "content": "Une hydrolyse.",
        "correct": false,
        "explanation": "L’hydrolyse rompt la liaison thioester ; elle correspond donc à la réaction inverse de sa formation."
      }
    ],
    "explanation": "L’hydrolyse conduit à l’acide carboxylique et au thiol correspondant."
  },
  {
    "order": 87,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles analogies entre ester et thioester sont exactes ?",
    "choices": [
      {
        "content": "Le carbone carbonylé peut être électrophile.",
        "correct": true,
        "explanation": "Dans un ester comme dans un thioester, la polarisation du carbonyle rend le carbone carbonylé électrophile."
      },
      {
        "content": "Ils diffèrent par O versus S dans le groupe lié au carbonyle.",
        "correct": true,
        "explanation": "L’ester porte un oxygène dans le motif acyle-hétéroatome, tandis que le thioester porte un soufre."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "Les deux possèdent un carbonyle.",
        "correct": true,
        "explanation": "Les esters et les thioesters possèdent tous deux un groupe carbonyle."
      },
      {
        "content": "Les deux peuvent être hydrolysés.",
        "correct": true,
        "explanation": "Esters et thioesters possèdent une liaison acyle–hétéroatome pouvant être rompue par hydrolyse."
      }
    ],
    "explanation": "Dans un ester comme dans un thioester, la polarisation du carbonyle rend le carbone carbonylé électrophile."
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
        "explanation": "Ce n'est pas la voie décrite."
      },
      {
        "content": "Un alcool.",
        "correct": false,
        "explanation": "La fonction alcool apporte l’oxygène qui participe à la formation de l’hémiacétal."
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
    "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
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
        "explanation": "L’oxygène de l’alcool attaque le carbone acylé électrophile et forme la liaison ester."
      },
      {
        "content": "Amine → amide.",
        "correct": true,
        "explanation": "L’azote de l’amine attaque le carbone acylé électrophile et forme la liaison amide."
      },
      {
        "content": "Thiol → thioester.",
        "correct": true,
        "explanation": "Un thioester est l’analogue soufré d’un ester et possède le motif $\\ce{R-C(=O)-S-R'}$."
      }
    ],
    "explanation": "O, N ou S déterminent la fonction."
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
        "explanation": "Après déprotonation en alpha, le carbone du groupe méthyle voisin du carbonyle peut acquérir un caractère nucléophile."
      },
      {
        "content": "La fonction possède donc deux zones de polarité réactive dans le modèle simplifié.",
        "correct": true,
        "explanation": "Le carbone carbonylé est électrophile, tandis que le carbone alpha peut devenir nucléophile après déprotonation."
      },
      {
        "content": "Le soufre supprime toute polarisation du carbonyle.",
        "correct": false,
        "explanation": "La présence du soufre n’annule pas la polarisation du groupe carbonyle ; le carbone carbonylé reste électrophile."
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
    "explanation": "Après déprotonation en alpha, le carbone du groupe méthyle voisin du carbonyle peut acquérir un caractère nucléophile."
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
        "content": "L'hydrolyse d'un thioester rompt la liaison acyle-soufre dans le bilan simplifié.",
        "correct": true,
        "explanation": "On retrouve acide + thiol."
      },
      {
        "content": "Le thiol est régénéré.",
        "correct": true,
        "explanation": "L’hydrolyse du thioester rompt la liaison acyle–soufre et libère de nouveau le thiol $\\ce{R'SH}$."
      },
      {
        "content": "L'acide carboxylique est régénéré.",
        "correct": true,
        "explanation": "En hydrolyse acide d’un ester, le fragment acyle est retrouvé sous forme d’acide carboxylique $\\ce{RCOOH}$."
      },
      {
        "content": "La fonction thioester est décrite comme non hydrolysable.",
        "correct": false,
        "explanation": "L’hydrolyse d’un thioester rompt la liaison acyle–soufre et régénère notamment un thiol."
      }
    ],
    "explanation": "Le groupe acétyle est lié au soufre de la CoA par une liaison thioester."
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
        "explanation": "Dans le contexte biologique considéré, l’interconversion du thioester peut être catalysée par des enzymes."
      },
      {
        "content": "L’hydrolyse d’un thioester ne peut jamais régénérer un thiol.",
        "correct": false,
        "explanation": "L’hydrolyse conduit à l’acide carboxylique et au thiol correspondant."
      },
      {
        "content": "L'acétyl-CoA est la forme thioester.",
        "correct": true,
        "explanation": "Par définition, l'acétyl-CoA est la forme thioester."
      },
      {
        "content": "CoA-SH porte la fonction thiol utilisée pour reformer le thioester.",
        "correct": true,
        "explanation": "Le groupe SH est le partenaire."
      }
    ],
    "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
  },
  {
    "order": 93,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi l’acétyl-CoA est-il un bon exemple de thioester biologique ?",
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
        "explanation": "Un thioester est l’analogue soufré d’un ester et possède le motif $\\ce{R-C(=O)-S-R'}$."
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
    "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
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
        "explanation": "Le groupe $\\ce{OR'}$ de l’ester donne l’alcool $\\ce{R'OH}$ après hydrolyse."
      },
      {
        "content": "Le thioester donne un thiol.",
        "correct": true,
        "explanation": "Un thioester est l’analogue soufré d’un ester et possède le motif $\\ce{R-C(=O)-S-R'}$."
      },
      {
        "content": "Les deux donnent nécessairement une amine protonée.",
        "correct": false,
        "explanation": "L’hydrolyse d’un ester ou d’un thioester ne forme pas nécessairement une amine ; les produits dépendent de l’hétéroatome de la fonction."
      },
      {
        "content": "L’hydrolyse d’un thioester ne peut jamais régénérer un thiol.",
        "correct": false,
        "explanation": "L’hydrolyse conduit à l’acide carboxylique et au thiol correspondant."
      },
      {
        "content": "Les deux fonctions sont hydrolysables.",
        "correct": true,
        "explanation": "Esters et thioesters possèdent une liaison acyle–hétéroatome pouvant être rompue par hydrolyse."
      }
    ],
    "explanation": "Esters et thioesters possèdent une liaison acyle–hétéroatome pouvant être rompue par hydrolyse."
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
        "explanation": "En hydrolyse acide d’un ester, le fragment acyle est retrouvé sous forme d’acide carboxylique $\\ce{RCOOH}$."
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
    "explanation": "La fonction ester est hydrolysable en milieu acide ou basique dans les conditions appropriées."
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
        "explanation": "La polarisation du carbonyle et la réactivité en position alpha sont traitées de manière analogue à celles des esters."
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
        "explanation": "La liaison $\\ce{C=O}$ est polarisée : l’oxygène est riche en électrons et le carbone carbonylé est électrophile."
      },
      {
        "content": "Le carbone du CH3 voisin peut présenter un caractère nucléophile.",
        "correct": true,
        "explanation": "Après déprotonation en alpha du carbonyle, le carbone du groupe méthyle voisin peut acquérir un caractère nucléophile."
      }
    ],
    "explanation": "La polarisation du carbonyle et la réactivité en position alpha sont traitées de manière analogue à celles des esters."
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
    "explanation": "La relation correcte est: « La première étape forme un thioester ». La négation proposée est donc fausse."
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
        "explanation": "Le motif d’un thioester est $\\ce{R-C(=O)-S-R'}$."
      },
      {
        "content": "Acide activé + thiol → thioester.",
        "correct": true,
        "explanation": "L’acylation d’un thiol par un dérivé d’acide activé conduit à un thioester."
      },
      {
        "content": "Un thioester est hydrolysable.",
        "correct": true,
        "explanation": "L’hydrolyse d’un thioester rompt la liaison acyle-soufre et régénère notamment un thiol."
      },
      {
        "content": "L'acétyl-CoA est un thioester du CoA-SH.",
        "correct": true,
        "explanation": "Un thioester est l’analogue soufré d’un ester et possède le motif $\\ce{R-C(=O)-S-R'}$."
      },
      {
        "content": "Hydrolyse de l'acétyl-CoA → CoA-SH + acide acétique.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Un thioester est une amide.",
        "correct": false,
        "explanation": "Un thioester comporte un soufre lié au groupe acyle, alors qu’une amide comporte un azote."
      },
      {
        "content": "Le carbone carbonylé du thioester est toujours nucléophile.",
        "correct": false,
        "explanation": "Le carbone du groupe carbonyle d’un thioester est électrophile et peut être attaqué par un nucléophile."
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
        "explanation": "La proposition est fausse : l'acétyl-CoA est un thioester du CoA-SH."
      }
    ],
    "explanation": "L’hydrolyse d’un thioester rompt la liaison acyle-soufre et régénère notamment un thiol. Un thioester est l’analogue soufré d’un ester et possède le motif $\\ce{R-C(=O)-S-R'}$."
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
        "explanation": "Un thioester est l’analogue soufré d’un ester et possède le motif $\\ce{R-C(=O)-S-R'}$."
      },
      {
        "content": "Acétyl-CoA → peptide par simple rotation.",
        "correct": false,
        "explanation": "Cette proposition ne correspond pas à la transformation ou à la propriété demandée."
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
    "explanation": "L’hydrolyse rompt la liaison fonctionnelle en présence d’eau et conduit aux produits indiqués. Un thioester est l’analogue soufré d’un ester et possède le motif $\\ce{R-C(=O)-S-R'}$."
  }
];
