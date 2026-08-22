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
        "explanation": "Une amide comporte un azote lié au carbonyle, alors qu’un thioester comporte un soufre."
      },
      {
        "content": "Un thioester est non hydrolysable.",
        "correct": false,
        "explanation": "Un thioester est hydrolysable et peut redonner un acide carboxylique et un thiol."
      },
      {
        "content": "Les thioesters constituent des esters soufrés.",
        "correct": true,
        "explanation": "Dans un thioester, le soufre remplace l’oxygène alkoxy d’un ester classique."
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
    "explanation": "Un thioester possède le motif $\\ce{R-C(=O)-S-R'}$ : il correspond à l’analogue soufré d’un ester."
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
        "explanation": "Le motif $\\ce{R-C(=O)-OR'}$ correspond à un ester oxygéné, pas à un thioester."
      },
      {
        "content": "$\\mathrm{R{-}C(=O){-}NR'R''}$.",
        "correct": false,
        "explanation": "Le motif $\\ce{R-C(=O)-NR'R''}$ correspond à une amide."
      },
      {
        "content": "$\\mathrm{R{-}C(=O){-}SR'}$.",
        "correct": true,
        "explanation": "Le motif général d’un thioester est $\\ce{R-C(=O)-S-R'}$."
      },
      {
        "content": "$\\mathrm{R{-}SH}$.",
        "correct": false,
        "explanation": "Le motif $\\ce{R-SH}$ correspond à un thiol libre, pas à un thioester."
      },
      {
        "content": "Ammonium quaternaire.",
        "correct": false,
        "explanation": "Un thioester ne se définit pas par un azote tétrasubstitué."
      }
    ],
    "explanation": "Le motif d’un thioester est $\\ce{R-C(=O)-S-R'}$ : le soufre remplace l’oxygène alkoxy d’un ester."
  },
  {
    "order": 81,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Comment peut-on préparer un thioester ?",
    "choices": [
      {
        "content": "Un alcool est le partenaire nécessaire pour former un thioester.",
        "correct": false,
        "explanation": "Un alcool réagit avec un acide activé pour former un ester ; un thioester nécessite un thiol."
      },
      {
        "content": "À partir d'un acide activé et d'un thiol.",
        "correct": true,
        "explanation": "La réaction d’un acide activé avec un thiol conduit à un thioester."
      },
      {
        "content": "Le thiol est noté $\\mathrm{R{-}SH}$.",
        "correct": true,
        "explanation": "Un thiol se caractérise par le groupe $\\ce{R-SH}$, dont le soufre peut être acylé pour former un thioester."
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
    "explanation": "Un thioester se prépare par réaction d’un acide carboxylique activé avec un thiol $\\ce{R-SH}$."
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
        "explanation": "Dans le modèle du thioester, le carbone voisin du carbonyle peut acquérir un caractère nucléophile ; la proposition qui exclut cette possibilité est fausse."
      },
      {
        "content": "Le groupe carbonyle est totalement apolaire.",
        "correct": false,
        "explanation": "La liaison $\\ce{C=O}$ est polarisée : l’oxygène est riche en électrons et le carbone carbonylé est électrophile."
      },
      {
        "content": "Le carbone carbonylé d’un thioester est fortement nucléophile.",
        "correct": false,
        "explanation": "Comme dans un ester, le carbone carbonylé d’un thioester est électrophile et non fortement nucléophile."
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
    "explanation": "Dans un thioester, le carbone carbonylé est électrophile et le carbone alpha peut acquérir un caractère nucléophile selon les conditions."
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
        "explanation": "L’eau peut hydrolyser la liaison thioester lorsque les conditions de pH sont adaptées."
      },
      {
        "content": "À l'aide d'enzymes.",
        "correct": true,
        "explanation": "Dans le contexte biologique considéré, l’interconversion du thioester peut être catalysée par des enzymes."
      },
      {
        "content": "En donnant un acide carboxylique et un thiol.",
        "correct": true,
        "explanation": "L’hydrolyse d’un thioester conduit à l’acide carboxylique et au thiol correspondants."
      },
      {
        "content": "Uniquement en donnant une amide.",
        "correct": false,
        "explanation": "Aucun atome d’azote n’est introduit par cette transformation, donc aucune fonction azotée n’est formée."
      },
      {
        "content": "L’hydrolyse d’un thioester conserve nécessairement la liaison acyle–soufre.",
        "correct": false,
        "explanation": "L’hydrolyse rompt précisément la liaison acyle–soufre du thioester."
      }
    ],
    "explanation": "Un thioester est hydrolysable par l’eau dans des conditions adaptées ou par des enzymes ; l’hydrolyse régénère un acide carboxylique et un thiol."
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
        "explanation": "L’acétyl-CoA contient une liaison thioester ; il ne peut donc pas être assimilé à un simple alcane."
      },
      {
        "content": "Un thioester comporte le motif $\\ce{R-C(=O)-SR'}$.",
        "correct": true,
        "explanation": "Le soufre remplace l’oxygène alkoxy d’un ester classique."
      },
      {
        "content": "L’acétyl-CoA n’est pas un thioester du coenzyme A-SH.",
        "correct": false,
        "explanation": "L’acétyl-CoA est bien un thioester du coenzyme A sous forme $\\ce{CoA-SH}$."
      },
      {
        "content": "Sa fonction thioester explique une partie de sa réactivité.",
        "correct": true,
        "explanation": "La fonction thioester de l’acétyl-CoA peut être hydrolysée et participe ainsi à son comportement réactionnel."
      },
      {
        "content": "Son hydrolyse conduit notamment au coenzyme A-SH.",
        "correct": true,
        "explanation": "L’hydrolyse de l’acétyl-CoA rompt la liaison thioester et régénère le coenzyme A sous forme $\\ce{CoA-SH}$."
      }
    ],
    "explanation": "L’acétyl-CoA est un thioester du coenzyme A-SH ; sa liaison thioester participe à sa réactivité et peut être hydrolysée."
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
        "explanation": "L’hydrolyse rompt la liaison entre le groupe acétyle et le soufre du coenzyme A."
      },
      {
        "content": "À une formation obligatoire de liaison peptidique.",
        "correct": false,
        "explanation": "L’hydrolyse d’un thioester rompt une liaison acyle–soufre ; elle ne forme pas obligatoirement une liaison peptidique."
      },
      {
        "content": "L’hydrolyse de l’acétyl-CoA ne libère pas $\\ce{CoA-SH}$.",
        "correct": false,
        "explanation": "L’hydrolyse de l’acétyl-CoA régénère le coenzyme A sous forme $\\ce{CoA-SH}$."
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
    "question": "À propos de la transformation inverse $\\ce{CoA-SH -> acétyl-CoA}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Cette transformation produit $\\ce{CoA-SH}$ à partir de l’acétyl-CoA.",
        "correct": false,
        "explanation": "La transformation vers l’acétyl-CoA forme la liaison thioester ; elle ne produit pas $\\ce{CoA-SH}$ par hydrolyse."
      },
      {
        "content": "Elle ne fait intervenir aucune enzyme.",
        "correct": false,
        "explanation": "La formation de l’acétyl-CoA à partir de $\\ce{CoA-SH}$ est une transformation enzymatique."
      },
      {
        "content": "Une formation de thioester.",
        "correct": true,
        "explanation": "Le soufre de $\\ce{CoA-SH}$ est acylé et une liaison thioester est formée."
      },
      {
        "content": "Une réaction réalisée par des enzymes.",
        "correct": true,
        "explanation": "Des enzymes permettent de former la liaison thioester entre le groupe acétyle et $\\ce{CoA-SH}$."
      },
      {
        "content": "Une hydrolyse.",
        "correct": false,
        "explanation": "L’hydrolyse correspond au sens inverse, de l’acétyl-CoA vers $\\ce{CoA-SH}$ et l’acide acétique."
      }
    ],
    "explanation": "La transformation $\\ce{CoA-SH -> acétyl-CoA}$ correspond à la formation enzymatique d’une liaison thioester, inverse de son hydrolyse."
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
        "content": "Dans un ester comme dans un thioester, le carbone carbonylé est nucléophile.",
        "correct": false,
        "explanation": "Dans les deux fonctions, la polarisation de $\\ce{C=O}$ rend le carbone carbonylé électrophile."
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
        "explanation": "Une amine réagit avec un acide activé pour former une amide, pas un thioester."
      },
      {
        "content": "Un alcool.",
        "correct": false,
        "explanation": "Un alcool réagit avec un acide activé pour former un ester, pas un thioester."
      },
      {
        "content": "Un alcane.",
        "correct": false,
        "explanation": "Un alcane ne possède pas le groupe $\\ce{-SH}$ nucléophile nécessaire à la formation d’un thioester."
      },
      {
        "content": "Un thiol.",
        "correct": true,
        "explanation": "Le thiol fournit le soufre qui sera directement lié au groupe acyle dans le thioester."
      },
      {
        "content": "Alcène.",
        "correct": false,
        "explanation": "Cette transformation ne crée pas de double liaison carbone-carbone."
      }
    ],
    "explanation": "Un acide carboxylique activé réagit avec un thiol pour former un thioester."
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
        "explanation": "La nature O, N ou S du nucléophile détermine respectivement la formation d’un ester, d’une amide ou d’un thioester."
      },
      {
        "content": "Une amine conduit à un ester.",
        "correct": false,
        "explanation": "Une amine conduit à une amide, pas à un ester, lorsqu’elle réagit avec un chlorure d’acyle."
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
    "explanation": "Avec un même chlorure d’acyle, la nature du nucléophile détermine le produit : alcool → ester, amine → amide, thiol → thioester."
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
        "content": "Le carbone carbonylé du thioester est fortement nucléophile.",
        "correct": false,
        "explanation": "Le carbone carbonylé du thioester est électrophile, pas fortement nucléophile."
      },
      {
        "content": "Le carbone du carbonyle n’est pas électrophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend le carbone carbonylé du thioester électrophile."
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
        "explanation": "L’hydrolyse rompt la liaison entre le groupe acyle et le soufre du thioester."
      },
      {
        "content": "Le thiol est régénéré.",
        "correct": true,
        "explanation": "L’hydrolyse du thioester rompt la liaison acyle–soufre et libère de nouveau le thiol $\\ce{R'SH}$."
      },
      {
        "content": "L'acide carboxylique est régénéré.",
        "correct": true,
        "explanation": "Le fragment acyle est retrouvé sous forme d’acide carboxylique lors de l’hydrolyse du thioester."
      },
      {
        "content": "La fonction thioester est décrite comme non hydrolysable.",
        "correct": false,
        "explanation": "L’hydrolyse d’un thioester rompt la liaison acyle–soufre et régénère notamment un thiol."
      }
    ],
    "explanation": "L’hydrolyse d’un thioester rompt la liaison acyle–soufre et régénère un acide carboxylique ainsi qu’un thiol."
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
        "explanation": "L’hydrolyse de l’acétyl-CoA rompt la liaison thioester et donne $\\ce{CoA-SH}$ et de l’acide acétique."
      },
      {
        "content": "La réaction inverse peut être enzymatique.",
        "correct": true,
        "explanation": "Dans le contexte biologique considéré, l’interconversion du thioester peut être catalysée par des enzymes."
      },
      {
        "content": "L’hydrolyse de l’acétyl-CoA ne régénère pas $\\ce{CoA-SH}$.",
        "correct": false,
        "explanation": "L’hydrolyse de l’acétyl-CoA régénère $\\ce{CoA-SH}$ et libère de l’acide acétique."
      },
      {
        "content": "L'acétyl-CoA est la forme thioester.",
        "correct": true,
        "explanation": "L’acétyl-CoA porte la liaison thioester du couple considéré."
      },
      {
        "content": "CoA-SH porte la fonction thiol utilisée pour reformer le thioester.",
        "correct": true,
        "explanation": "Le groupe $\\ce{-SH}$ du coenzyme A fournit le soufre utilisé pour reformer la liaison thioester."
      }
    ],
    "explanation": "L’acétyl-CoA est la forme thioester ; son hydrolyse donne $\\ce{CoA-SH}$ et de l’acide acétique, et la réaction inverse peut être enzymatique."
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
        "explanation": "L’acétyl-CoA est un thioester biologique du coenzyme A."
      },
      {
        "content": "Il illustre une hydrolyse de thioester.",
        "correct": true,
        "explanation": "L’hydrolyse de l’acétyl-CoA illustre la rupture d’une liaison thioester vers $\\ce{CoA-SH}$ et l’acide acétique."
      },
      {
        "content": "Il illustre la formation enzymatique inverse du thioester.",
        "correct": true,
        "explanation": "La réaction inverse de l’hydrolyse reforme enzymatiquement la liaison thioester de l’acétyl-CoA."
      },
      {
        "content": "Il sert à démontrer que tous les thioesters sont des peptides.",
        "correct": false,
        "explanation": "Un thioester et une liaison peptidique sont des fonctions distinctes ; l’exemple de l’acétyl-CoA ne les confond pas."
      },
      {
        "content": "L’acétyl-CoA ne peut pas être hydrolysé en $\\ce{CoA-SH}$.",
        "correct": false,
        "explanation": "L’acétyl-CoA est hydrolysable : le bilan donne $\\ce{CoA-SH}$ et de l’acide acétique."
      }
    ],
    "explanation": "L’acétyl-CoA illustre à la fois l’existence d’un thioester biologique, son hydrolyse et sa formation enzymatique à partir de $\\ce{CoA-SH}$."
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
    "question": "On compare l’hydrolyse d’un ester et celle d’un thioester. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'ester donne un alcool comme partenaire hétéroatomique.",
        "correct": true,
        "explanation": "Le groupe $\\ce{OR'}$ de l’ester donne l’alcool $\\ce{R'OH}$ après hydrolyse."
      },
      {
        "content": "Le thioester donne un thiol.",
        "correct": true,
        "explanation": "L’hydrolyse du thioester libère le partenaire soufré sous forme de thiol $\\ce{R'SH}$."
      },
      {
        "content": "Les deux donnent nécessairement une amine protonée.",
        "correct": false,
        "explanation": "L’hydrolyse d’un ester ou d’un thioester ne forme pas nécessairement une amine ; les produits dépendent de l’hétéroatome de la fonction."
      },
      {
        "content": "Le thioester ne peut pas libérer de thiol lors de son hydrolyse.",
        "correct": false,
        "explanation": "L’hydrolyse d’un thioester libère précisément le partenaire soufré sous forme de thiol."
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
        "content": "Un thioester est insensible à l’eau dans toutes les conditions.",
        "correct": false,
        "explanation": "Un thioester est hydrolysable ; l’eau peut rompre sa liaison acyle–soufre dans des conditions adaptées."
      },
      {
        "content": "Formation de RCOOH.",
        "correct": true,
        "explanation": "Le fragment acyle est retrouvé sous forme d’acide carboxylique $\\ce{RCOOH}$."
      },
      {
        "content": "Formation de R'SH.",
        "correct": true,
        "explanation": "Le groupe $\\ce{SR'}$ est libéré sous forme du thiol $\\ce{R'SH}$."
      },
      {
        "content": "Disparition de la fonction thioester.",
        "correct": true,
        "explanation": "L’hydrolyse rompt la liaison acyle–soufre : la fonction thioester disparaît."
      },
      {
        "content": "Formation obligatoire d'un ester.",
        "correct": false,
        "explanation": "L’hydrolyse du thioester conduit à un acide carboxylique et à un thiol, pas obligatoirement à un ester."
      }
    ],
    "explanation": "L’hydrolyse d’un thioester $\\ce{RCO-SR'}$ rompt la liaison acyle–soufre et conduit à $\\ce{RCOOH}$ et au thiol $\\ce{R'SH}$."
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des centres réactifs de l'acétyl-thioester simplifié $\\mathrm{CH_3CO{-}SR'}$:",
    "choices": [
      {
        "content": "Cette réactivité est analogue à celle des esters.",
        "correct": true,
        "explanation": "Comme pour un ester, le carbonyle du thioester présente un carbone électrophile et la position alpha peut acquérir un caractère nucléophile."
      },
      {
        "content": "Aucun atome d'oxygène n'est présent.",
        "correct": false,
        "explanation": "Le thioester possède toujours l’oxygène de son groupe carbonyle."
      },
      {
        "content": "Le carbone carbonylé du thioester est fortement nucléophile.",
        "correct": false,
        "explanation": "Dans le thioester, le carbone carbonylé reste électrophile ; il n’est pas fortement nucléophile."
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
        "explanation": "La réaction d’un chlorure d’acyle avec un thiol forme bien un thioester lors de la première étape."
      },
      {
        "content": "La seconde peut régénérer l'acide carboxylique.",
        "correct": true,
        "explanation": "L’hydrolyse du thioester peut régénérer l’acide carboxylique correspondant."
      },
      {
        "content": "La seconde peut régénérer le thiol.",
        "correct": true,
        "explanation": "L’hydrolyse du thioester peut régénérer le thiol correspondant."
      },
      {
        "content": "Le soufre est remplacé par un azote dans le bilan sans autre réactif.",
        "correct": false,
        "explanation": "Aucun partenaire azoté n’est ajouté : l’hydrolyse ne remplace donc pas spontanément le soufre par un azote."
      },
      {
        "content": "L’hydrolyse conserve obligatoirement la fonction thioester.",
        "correct": false,
        "explanation": "L’hydrolyse rompt précisément la liaison thioester ; elle ne conserve pas obligatoirement cette fonction."
      }
    ],
    "explanation": "Le chlorure d’acyle et le thiol forment d’abord un thioester ; son hydrolyse peut ensuite régénérer l’acide carboxylique et le thiol."
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
        "explanation": "Le motif $\\ce{C(=O)-S-R'}$ définit la fonction thioester."
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
        "explanation": "L’acétyl-CoA contient une liaison thioester entre le groupe acétyle et le soufre du coenzyme A."
      },
      {
        "content": "Hydrolyse de l'acétyl-CoA → CoA-SH + acide acétique.",
        "correct": true,
        "explanation": "L’hydrolyse de l’acétyl-CoA conduit à $\\ce{CoA-SH}$ et à l’acide acétique dans le bilan simplifié."
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
        "explanation": "La liaison thioester peut être hydrolysée avec l’aide d’enzymes."
      },
      {
        "content": "CoA-SH est un alcool.",
        "correct": false,
        "explanation": "$\\ce{CoA-SH}$ porte une fonction thiol $\\ce{-SH}$, pas une fonction alcool."
      },
      {
        "content": "La formation d'acétyl-CoA est une hydrolyse.",
        "correct": false,
        "explanation": "La formation de l’acétyl-CoA correspond à la réaction inverse de son hydrolyse, c’est-à-dire à la formation d’un thioester."
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
        "explanation": "La formation enzymatique du thioester relie le groupe acétyle au soufre de $\\ce{CoA-SH}$."
      },
      {
        "content": "Acétyl-CoA → peptide par simple rotation.",
        "correct": false,
        "explanation": "Une simple rotation ne transforme pas un thioester en peptide et ne rompt pas la liaison acyle–soufre."
      },
      {
        "content": "CoA-SH + amine → amide obligatoire.",
        "correct": false,
        "explanation": "Le couple étudié met en jeu le thiol $\\ce{CoA-SH}$ et la fonction thioester, pas une amidification obligatoire."
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
    "explanation": "Dans le couple acétyl-CoA / $\\ce{CoA-SH}$, l’hydrolyse du thioester libère $\\ce{CoA-SH}$ et l’acide acétique, tandis que la réaction enzymatique inverse reforme le thioester."
  }
];
