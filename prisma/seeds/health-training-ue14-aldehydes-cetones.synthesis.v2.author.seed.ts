import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.6 – Synthèse
 */

export const UE14_CH10_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles associations fondamentales sont exactes ?",
    "choices": [
      {
        "content": "$\\ce{NaBH4}$ transforme une cétone directement en acide carboxylique.",
        "correct": false,
        "explanation": "Le borohydrure est un réducteur; le produit attendu est un alcool secondaire."
      },
      {
        "content": "Alcool primaire + oxydation ménagée → aldéhyde.",
        "correct": true,
        "explanation": "Une oxydation ménagée d’un alcool primaire conduit d’abord à l’aldéhyde correspondant."
      },
      {
        "content": "Alcool secondaire + oxydation → cétone.",
        "correct": true,
        "explanation": "L’oxydation d’un alcool secondaire transforme le carbone portant $\\ce{-OH}$ en carbone carbonylé et donne une cétone."
      },
      {
        "content": "Aldéhyde + réduction par hydrure → alcool primaire.",
        "correct": true,
        "explanation": "Cette transformation diminue le degré d’oxydation de la fonction concernée: il s’agit bien d’une réduction."
      },
      {
        "content": "Cétone + réduction par hydrure → alcool secondaire.",
        "correct": true,
        "explanation": "Cette transformation diminue le degré d’oxydation de la fonction concernée: il s’agit bien d’une réduction."
      }
    ],
    "explanation": "Les transformations fondamentales relient oxydation des alcools et réduction des composés carbonylés par hydrure."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare aldéhyde et cétone. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L'aldéhyde est oxydable en acide carboxylique.",
        "correct": true,
        "explanation": "Un aldéhyde peut être oxydé en acide carboxylique dans le modèle étudié."
      },
      {
        "content": "La cétone est décrite comme inerte à l'oxydation.",
        "correct": true,
        "explanation": "Dans le modèle simplifié retenu, la cétone est considérée comme inerte à l’oxydation, contrairement à l’aldéhyde."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Les deux possèdent un carbonyle.",
        "correct": true,
        "explanation": "Aldéhydes et cétones possèdent tous deux un groupe carbonyle $\\ce{C=O}$."
      },
      {
        "content": "Le carbone carbonylé est électrophile dans les deux cas.",
        "correct": true,
        "explanation": "La polarisation de la liaison $\\ce{C=O}$ appauvrit le carbone en électrons et lui confère un caractère électrophile."
      }
    ],
    "explanation": "Aldéhyde et cétone possèdent un carbonyle électrophile ; l'aldéhyde est oxydable en acide, tandis que la cétone est considérée comme inerte à l'oxydation."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un composé carbonylé est traité par $\\ce{NaBH4}$ puis, dans une autre expérience, par un organomagnésien. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "NaBH4 apporte un hydrure nucléophile.",
        "correct": true,
        "explanation": "$\\ce{NaBH4}$ fournit un hydrure riche en électrons, qui agit comme nucléophile sur le carbone carbonylé électrophile."
      },
      {
        "content": "L'organomagnésien apporte un fragment carboné nucléophile.",
        "correct": true,
        "explanation": "L’organomagnésien apporte un fragment carboné nucléophile qui forme une nouvelle liaison C–C avec le carbone carbonylé."
      },
      {
        "content": "Le carbone carbonylé est le centre électrophile attaqué dans les deux cas.",
        "correct": true,
        "explanation": "La polarisation de la liaison $\\ce{C=O}$ appauvrit le carbone en électrons et lui confère un caractère électrophile."
      },
      {
        "content": "Seul l'organomagnésien crée une nouvelle liaison C-C.",
        "correct": true,
        "explanation": "Un organomagnésien apporte un fragment carboné nucléophile qui forme une nouvelle liaison carbone–carbone avec un centre électrophile."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      }
    ],
    "explanation": "$\\ce{NaBH4}$ apporte un hydrure sans carbone ; l'organomagnésien apporte un fragment carboné. Dans les deux cas, le carbone carbonylé est le centre électrophile attaqué."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On souhaite préparer un aldéhyde à partir d’un dérivé d’acide. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'activation de l'acide peut faciliter l'accès au stade aldéhyde.",
        "correct": true,
        "explanation": "L’activation transforme l’acide en dérivé plus réactif et permet une réduction mieux contrôlée vers l’aldéhyde."
      },
      {
        "content": "Un acide carboxylique est toujours plus facile à réduire qu’un aldéhyde.",
        "correct": false,
        "explanation": "La fonction acide carboxylique est plus difficile à réduire que les aldéhydes et les cétones."
      },
      {
        "content": "La réduction directe d'un acide carboxylique est difficile à arrêter au stade aldéhyde.",
        "correct": true,
        "explanation": "La réduction d’un acide carboxylique libre exige des conditions fortes, ce qui rend difficile l’arrêt sélectif au stade aldéhyde."
      },
      {
        "content": "L'aldéhyde peut être réduit ensuite en alcool si les conditions sont fortes.",
        "correct": true,
        "explanation": "Si la réduction est poursuivie, l’aldéhyde formé peut être réduit en alcool ; son isolement nécessite donc des conditions contrôlées."
      },
      {
        "content": "Un chlorure d'acyle peut être réduit en aldéhyde.",
        "correct": true,
        "explanation": "La réduction contrôlée d’un chlorure d’acyle constitue une voie sélective d’accès à un aldéhyde."
      }
    ],
    "explanation": "L'activation d'un acide facilite une réduction contrôlée au stade aldéhyde ; un chlorure d'acyle peut notamment être réduit en aldéhyde."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des réactions avec les amines:",
    "choices": [
      {
        "content": "Amine secondaire + aldéhyde ou cétone → iminium.",
        "correct": true,
        "explanation": "Une amine secondaire se condense avec un aldéhyde ou une cétone pour former un ion iminium."
      },
      {
        "content": "L'amine est nucléophile.",
        "correct": true,
        "explanation": "Le doublet non liant de l’azote rend l’amine nucléophile vis-à-vis du carbone carbonylé électrophile."
      },
      {
        "content": "L'élimination d'eau est indiquée pour pousser la réaction dans le modèle.",
        "correct": true,
        "explanation": "Comme l’eau est un produit de la condensation, son élimination favorise la formation de l’imine ou de l’iminium."
      },
      {
        "content": "Une amine secondaire donne nécessairement une amide lorsqu’elle réagit avec une cétone.",
        "correct": false,
        "explanation": "Avec une cétone ou un aldéhyde, le produit étudié est un iminium, pas une amide."
      },
      {
        "content": "Amine primaire + aldéhyde ou cétone → imine.",
        "correct": true,
        "explanation": "Une amine primaire se condense avec un aldéhyde ou une cétone pour former une imine."
      }
    ],
    "explanation": "Une amine primaire forme une imine et une amine secondaire un iminium avec un aldéhyde ou une cétone ; l'eau est éliminée."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un carbone alpha d'un aldéhyde ou d'une cétone porte un hydrogène. Quelles propositions sont cohérentes ?",
    "choices": [
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Une base forte peut mettre en valeur son caractère nucléophile.",
        "correct": true,
        "explanation": "La base forte arrache un hydrogène en alpha et transforme ce carbone en centre nucléophile."
      },
      {
        "content": "Un électrophile peut ensuite réagir avec ce carbone.",
        "correct": true,
        "explanation": "Après la déprotonation, le carbone alpha nucléophile peut réagir avec un électrophile ajouté dans un second temps."
      },
      {
        "content": "Une nouvelle liaison C-E peut être créée.",
        "correct": true,
        "explanation": "Après déprotonation en alpha, le carbone nucléophile formé peut attaquer $\\ce{E+}$ et créer une nouvelle liaison C–E."
      },
      {
        "content": "Le carbone carbonylé reste le centre électrophile de la fonction.",
        "correct": true,
        "explanation": "La réactivité en alpha n’annule pas la polarisation du carbonyle : son carbone reste électrophile."
      }
    ],
    "explanation": "Un hydrogène en alpha permet la création, par une base forte, d'un centre carboné nucléophile qui peut ensuite réagir avec un électrophile."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans l’application aux sucres, quelles propositions sont exactes dans le modèle simplifié retenu ?",
    "choices": [
      {
        "content": "Le fructose est relié à une fonction cétone linéaire.",
        "correct": true,
        "explanation": "Dans sa forme linéaire considérée ici, le fructose porte une fonction cétone."
      },
      {
        "content": "Le fructose est classé comme non réducteur.",
        "correct": true,
        "explanation": "Dans le modèle simplifié retenu, le fructose est associé à une fonction cétone linéaire et classé comme non réducteur."
      },
      {
        "content": "Le glucose est relié à une fonction cétone linéaire.",
        "correct": false,
        "explanation": "Dans le modèle simplifié retenu, le glucose est associé à une fonction aldéhyde linéaire, et non à une fonction cétone."
      },
      {
        "content": "Le glucose est relié à une fonction aldéhyde linéaire.",
        "correct": true,
        "explanation": "Dans sa forme linéaire considérée ici, le glucose porte une fonction aldéhyde."
      },
      {
        "content": "Le glucose est classé comme réducteur.",
        "correct": true,
        "explanation": "Le caractère oxydable de la fonction aldéhyde explique le classement du glucose comme sucre réducteur dans ce modèle."
      }
    ],
    "explanation": "Dans le modèle simplifié, la forme linéaire du glucose porte un aldéhyde et est classée réductrice ; celle du fructose porte une cétone et est classée non réductrice."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La cyclisation d'un sucre aldéhydique relie quelles notions ?",
    "choices": [
      {
        "content": "Fonction aldéhyde.",
        "correct": true,
        "explanation": "La fonction aldéhyde fournit le carbone carbonylé qui réagit avec une fonction alcool de la même molécule."
      },
      {
        "content": "Fonction alcool.",
        "correct": true,
        "explanation": "Une fonction alcool du sucre attaque intramoléculairement la fonction aldéhyde et participe à la fermeture du cycle."
      },
      {
        "content": "Formation d'un hémiacétal.",
        "correct": true,
        "explanation": "Un hémiacétal se forme par addition d’une fonction alcool sur un groupe carbonyle, notamment lors de la cyclisation de certains sucres."
      },
      {
        "content": "Passage d'une forme linéaire à une forme cyclique.",
        "correct": true,
        "explanation": "L’addition intramoléculaire d’une fonction alcool sur le carbonyle ferme la chaîne et produit une forme cyclique."
      },
      {
        "content": "La cyclisation transforme nécessairement l'aldéhyde en cétone.",
        "correct": false,
        "explanation": "La cyclisation forme un hémiacétal par réaction entre l’aldéhyde et une fonction alcool ; elle ne produit pas nécessairement une cétone."
      }
    ],
    "explanation": "La cyclisation relie fonction aldéhyde, fonction alcool, formation d'un hémiacétal et passage de la forme linéaire à la forme cyclique."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux transformations qui créent une nouvelle liaison carbone-carbone dans les situations proposées.",
    "choices": [
      {
        "content": "Oxydation d'un aldéhyde en acide.",
        "correct": false,
        "explanation": "L’oxydation d’un aldéhyde modifie sa fonction en acide carboxylique sans créer de nouvelle liaison carbone–carbone."
      },
      {
        "content": "Réduction d'un aldéhyde par $\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "$\\ce{NaBH4}$ réduit l’aldéhyde en alcool primaire en apportant un hydrure, sans créer de nouvelle liaison carbone–carbone."
      },
      {
        "content": "Addition d'un organomagnésien sur un carbonyle.",
        "correct": true,
        "explanation": "Le fragment carboné de l’organomagnésien s’ajoute au carbonyle et crée une nouvelle liaison C–C."
      },
      {
        "content": "Fonctionnalisation alpha par base forte puis électrophile carboné.",
        "correct": true,
        "explanation": "Si l’électrophile ajouté est carboné, le carbone alpha nucléophile forme avec lui une nouvelle liaison carbone–carbone."
      },
      {
        "content": "Réduction d'une cétone par NaBH4.",
        "correct": false,
        "explanation": "$\\ce{NaBH4}$ réduit le carbonyle sans apporter de carbone ; aucune nouvelle liaison C–C n’est créée."
      }
    ],
    "explanation": "Une nouvelle liaison C–C est créée par addition d'un organomagnésien sur un carbonyle et par fonctionnalisation alpha lorsque l'électrophile ajouté est carboné."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le carbone carbonylé est électrophile.",
        "correct": true,
        "explanation": "La polarisation de la liaison $\\ce{C=O}$ appauvrit le carbone en électrons et lui confère un caractère électrophile."
      },
      {
        "content": "Aldéhyde + NaBH4 → alcool primaire.",
        "correct": true,
        "explanation": "Cette transformation diminue le degré d’oxydation de la fonction concernée : il s’agit bien d’une réduction."
      },
      {
        "content": "Cétone + organomagnésien → alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Le réactif organomagnésien apporte un groupe carboné nucléophile qui crée une nouvelle liaison carbone-carbone."
      },
      {
        "content": "Amine primaire + carbonyle → imine.",
        "correct": true,
        "explanation": "La réaction de condensation associe les deux fonctions et s’accompagne ici d’une élimination d’eau."
      },
      {
        "content": "Aldéhyde + oxydation → acide carboxylique.",
        "correct": true,
        "explanation": "Un aldéhyde peut être oxydé en acide carboxylique dans le modèle étudié."
      },
      {
        "content": "Cétone + NaBH4 → alcool tertiaire.",
        "correct": false,
        "explanation": "La réduction d’une cétone par $\\ce{NaBH4}$ conduit à un alcool secondaire, et non tertiaire."
      },
      {
        "content": "Amine secondaire + carbonyle → imine.",
        "correct": false,
        "explanation": "Une amine secondaire forme un iminium avec un composé carbonylé ; l’imine correspond au cas d’une amine primaire."
      },
      {
        "content": "Une cétone est décrite comme facilement oxydable.",
        "correct": false,
        "explanation": "Dans le modèle simplifié retenu, la cétone est considérée comme inerte à l’oxydation, contrairement à l’aldéhyde."
      },
      {
        "content": "Le carbone alpha est toujours nucléophile même sans hydrogène.",
        "correct": false,
        "explanation": "Sans hydrogène en position alpha, la déprotonation nécessaire à la formation du centre nucléophile ne peut pas avoir lieu."
      },
      {
        "content": "La cyclisation d'un sucre aldéhydique forme une amide.",
        "correct": false,
        "explanation": "La cyclisation d’un sucre aldéhydique forme un hémiacétal par réaction intramoléculaire entre une fonction alcool et l’aldéhyde."
      }
    ],
    "explanation": "Les notions centrales associent électrophilie du carbonyle, réduction par hydrure, addition d'un organomagnésien, condensation des amines et oxydation de l'aldéhyde."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une séquence comporte : chlorure d'acyle → composé A par réduction contrôlée ; puis A + organomagnésien → composé B après hydrolyse. Quelles propositions sont cohérentes ?",
    "choices": [
      {
        "content": "Le composé A est une cétone.",
        "correct": false,
        "explanation": "La réduction contrôlée du chlorure d’acyle donne un aldéhyde, pas une cétone."
      },
      {
        "content": "A est un aldéhyde.",
        "correct": true,
        "explanation": "La réduction contrôlée d’un chlorure d’acyle conduit à l’aldéhyde correspondant ; le composé A est donc un aldéhyde."
      },
      {
        "content": "B est un alcool secondaire dans le cadre général présenté.",
        "correct": true,
        "explanation": "L’addition d’un organomagnésien sur un aldéhyde conduit, après hydrolyse, à un alcool secondaire dans le cas général."
      },
      {
        "content": "La seconde étape crée une liaison C-C.",
        "correct": true,
        "explanation": "Le fragment carboné de l’organomagnésien s’ajoute au carbone carbonylé et crée une nouvelle liaison carbone–carbone."
      },
      {
        "content": "B est nécessairement une cétone.",
        "correct": false,
        "explanation": "L’addition de l’organomagnésien transforme le carbonyle en alcool après hydrolyse ; B n’est pas une cétone."
      }
    ],
    "explanation": "La réduction contrôlée du chlorure d'acyle donne l'aldéhyde A ; l'addition d'un organomagnésien sur A crée une liaison C–C et conduit à l'alcool secondaire B après hydrolyse."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une cétone est traitée soit par $\\ce{NaBH4}$, soit par un organomagnésien. Quelles différences attend-on entre les produits ?",
    "choices": [
      {
        "content": "Le Grignard augmente le squelette carboné.",
        "correct": true,
        "explanation": "Un organomagnésien apporte un fragment carboné nucléophile qui forme une nouvelle liaison carbone–carbone avec un centre électrophile."
      },
      {
        "content": "NaBH4 et Grignard ont exactement le même bilan carboné.",
        "correct": false,
        "explanation": "$\\ce{NaBH4}$ n’ajoute pas de carbone, tandis que l’organomagnésien apporte un fragment carboné et allonge le squelette."
      },
      {
        "content": "L'organomagnésien crée une nouvelle liaison C-C.",
        "correct": true,
        "explanation": "Le fragment carboné de l’organomagnésien s’ajoute au carbone carbonylé de la cétone et crée une nouvelle liaison C–C."
      },
      {
        "content": "NaBH4 ne donne pas un alcool secondaire.",
        "correct": false,
        "explanation": "La réduction d’une cétone par $\\ce{NaBH4}$ conduit bien à un alcool secondaire."
      },
      {
        "content": "Le Grignard donne un alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "L’addition d’un organomagnésien sur une cétone forme, après hydrolyse, un alcool tertiaire."
      }
    ],
    "explanation": "Sur une cétone, $\\ce{NaBH4}$ donne un alcool secondaire sans ajouter de carbone ; un organomagnésien donne un alcool tertiaire en créant une liaison C–C."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé carbonylé porte un $\\ce{CH2}$ en alpha. Il est traité par une base forte puis par un électrophile. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le CH2 alpha devient le centre nucléophile mobilisé.",
        "correct": true,
        "explanation": "Une base forte peut arracher un hydrogène en position alpha du carbonyle et créer un centre carboné nucléophile."
      },
      {
        "content": "L'électrophile est ajouté dans un second temps.",
        "correct": true,
        "explanation": "La base forte crée d’abord le centre nucléophile en alpha ; l’électrophile est ensuite ajouté pour former la nouvelle liaison."
      },
      {
        "content": "La liaison formée implique le carbone voisin du carbonyle.",
        "correct": true,
        "explanation": "La nouvelle liaison se forme au niveau du carbone alpha, voisin du carbonyle."
      },
      {
        "content": "Cette transformation est différente de l'attaque d'un nucléophile sur le carbone carbonylé.",
        "correct": true,
        "explanation": "Ici, le carbone alpha devient nucléophile et attaque un électrophile ; dans l’autre voie, c’est le carbone carbonylé électrophile qui est attaqué."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      }
    ],
    "explanation": "La base forte transforme le carbone alpha en centre nucléophile ; celui-ci réagit ensuite avec un électrophile pour former une nouvelle liaison."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un aldéhyde est soumis successivement à une réduction puis à une oxydation adaptée. Quelles propositions sont cohérentes ?",
    "choices": [
      {
        "content": "La cétone est obligatoirement intermédiaire.",
        "correct": false,
        "explanation": "La séquence aldéhyde → alcool primaire → aldéhyde n’exige pas de passer par une cétone."
      },
      {
        "content": "Une oxydation ménagée de l'alcool primaire redonne nécessairement une cétone.",
        "correct": false,
        "explanation": "Une oxydation ménagée de l’alcool primaire conduit à l’aldéhyde, pas à une cétone."
      },
      {
        "content": "La réduction ne peut pas donner un alcool primaire.",
        "correct": false,
        "explanation": "La réduction d’un aldéhyde peut précisément conduire à l’alcool primaire correspondant."
      },
      {
        "content": "L'oxydation d'un alcool primaire peut redonner un aldéhyde si elle est ménagée.",
        "correct": true,
        "explanation": "Une oxydation ménagée d’un alcool primaire conduit d’abord à l’aldéhyde correspondant."
      },
      {
        "content": "Une oxydation trop forte peut aller jusqu'à l'acide carboxylique.",
        "correct": true,
        "explanation": "Une oxydation trop poussée d’un aldéhyde peut conduire à l’acide carboxylique correspondant."
      }
    ],
    "explanation": "La réduction d'un aldéhyde peut donner un alcool primaire ; une oxydation ménagée de cet alcool peut redonner l'aldéhyde, tandis qu'une oxydation poussée mène à l'acide."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un composé carbonylé est oxydable en acide carboxylique et sa réduction par $\\ce{NaBH4}$ donne un alcool primaire. Quelle famille est compatible ?",
    "choices": [
      {
        "content": "Cétone dans le modèle.",
        "correct": false,
        "explanation": "Elle est inerte à l'oxydation et sa réduction donne un alcool secondaire."
      },
      {
        "content": "Le carbone carbonylé porte un hydrogène dans le motif général.",
        "correct": true,
        "explanation": "Dans un aldéhyde $\\ce{R-CHO}$, le carbone carbonylé est directement lié à un hydrogène."
      },
      {
        "content": "Le suffixe de nomenclature est -al.",
        "correct": true,
        "explanation": "Le suffixe « -al » est caractéristique des aldéhydes."
      },
      {
        "content": "Sa réduction par $\\ce{NaBH4}$ donne un alcool secondaire.",
        "correct": false,
        "explanation": "Un aldéhyde réduit par $\\ce{NaBH4}$ donne un alcool primaire ; un alcool secondaire correspond à la réduction d’une cétone."
      },
      {
        "content": "Aldéhyde.",
        "correct": true,
        "explanation": "Les deux propriétés données — oxydation en acide et réduction en alcool primaire — sont caractéristiques d’un aldéhyde."
      }
    ],
    "explanation": "Un composé carbonylé à la fois oxydable en acide et réductible en alcool primaire correspond à un aldéhyde."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un composé carbonylé est inerte à l'oxydation dans le modèle et sa réduction donne un alcool secondaire. Quelles propositions sont cohérentes ?",
    "choices": [
      {
        "content": "Le carbone carbonylé est lié à deux substituants carbonés.",
        "correct": true,
        "explanation": "Une cétone possède un carbone carbonylé lié à deux groupes carbonés."
      },
      {
        "content": "Cétone.",
        "correct": true,
        "explanation": "Une cétone est cohérente avec l’inertie à l’oxydation retenue ici et avec la formation d’un alcool secondaire par réduction."
      },
      {
        "content": "Aldéhyde.",
        "correct": false,
        "explanation": "Un aldéhyde est oxydable et sa réduction donne un alcool primaire ; il ne correspond donc pas aux propriétés décrites."
      },
      {
        "content": "Le carbone carbonylé n’est pas lié à deux substituants carbonés.",
        "correct": false,
        "explanation": "Dans une cétone, le carbone carbonylé est bien lié à deux substituants carbonés."
      },
      {
        "content": "Le suffixe est -one.",
        "correct": true,
        "explanation": "Le suffixe « -one » est utilisé dans la nomenclature des cétones."
      }
    ],
    "explanation": "Une cétone est considérée comme inerte à l'oxydation dans ce modèle et sa réduction conduit à un alcool secondaire."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Dans le modèle appliqué aux sucres, une forme linéaire porte CHO en haut et CH2OH en bas. Quelles propositions sont cohérentes?",
    "choices": [
      {
        "content": "Le sucre peut cycliser par formation d'un hémiacétal.",
        "correct": true,
        "explanation": "La réaction intramoléculaire d’une fonction alcool avec l’aldéhyde forme un hémiacétal et ferme le cycle."
      },
      {
        "content": "La projection doit être comprise comme une convention d'une structure tridimensionnelle.",
        "correct": true,
        "explanation": "La projection plane code une molécule tridimensionnelle dont les carbones saturés présentent une géométrie tétraédrique."
      },
      {
        "content": "La présence de fonctions alcool empêche toute cyclisation.",
        "correct": false,
        "explanation": "Une fonction alcool de la même molécule participe au contraire à la cyclisation en attaquant la fonction aldéhyde."
      },
      {
        "content": "La fonction du haut est un aldéhyde.",
        "correct": true,
        "explanation": "Le groupe terminal $\\ce{CHO}$ placé en haut de la projection correspond à une fonction aldéhyde."
      },
      {
        "content": "La fonction du bas est un alcool primaire.",
        "correct": true,
        "explanation": "Le groupe terminal $\\ce{CH2OH}$ correspond à une fonction alcool primaire."
      }
    ],
    "explanation": "Dans la forme linéaire considérée, $\\ce{CHO}$ correspond à l'aldéhyde et $\\ce{CH2OH}$ à l'alcool primaire ; la molécule peut cycliser en hémiacétal."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Pourquoi la forme cyclique d'un sucre ne doit-elle pas être comprise comme un simple dessin plan ?",
    "choices": [
      {
        "content": "La géométrie tétraédrique des carbones.",
        "correct": true,
        "explanation": "La géométrie tétraédrique des carbones montre que le cycle ne doit pas être interprété comme une structure réellement plane."
      },
      {
        "content": "La représentation en perspective rend mieux compte de la géométrie réelle du sucre cyclique.",
        "correct": true,
        "explanation": "La perspective représente plus fidèlement la disposition spatiale des substituants autour du cycle."
      },
      {
        "content": "La cyclisation forme une structure qui occupe l'espace.",
        "correct": true,
        "explanation": "La forme cyclique est tridimensionnelle ; une représentation en perspective rend mieux compte de sa géométrie."
      },
      {
        "content": "La projection linéaire encode déjà des liaisons vers l'observateur et vers l'arrière.",
        "correct": true,
        "explanation": "Dans la projection linéaire, les liaisons horizontales et verticales codent des orientations spatiales différentes autour des carbones tétraédriques."
      },
      {
        "content": "Une représentation strictement plane est nécessairement plus fidèle à la réalité.",
        "correct": false,
        "explanation": "La représentation en perspective est plus fidèle, car elle rend compte de la géométrie tridimensionnelle du cycle."
      }
    ],
    "explanation": "Le cycle est tridimensionnel et les carbones saturés sont tétraédriques ; une représentation en perspective est donc plus fidèle qu'un simple dessin plan."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel produit fonctionnel obtient-on après réaction d'une amine secondaire avec un aldéhyde ou une cétone?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "iminium",
        "un iminium",
        "imminium",
        "un imminium"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Une amine secondaire réagissant avec un aldéhyde ou une cétone forme un ion iminium."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Dans la séquence de fonctionnalisation alpha décrite, combien d'étapes principales sont explicitement indiquées: base forte puis électrophile?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "La fonctionnalisation alpha se déroule en deux étapes principales : base forte, puis réaction avec l'électrophile."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions relient correctement préparation, propriétés et réactivité des aldéhydes et cétones ?",
    "choices": [
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Alcool primaire → aldéhyde par oxydation contrôlée.",
        "correct": true,
        "explanation": "Une oxydation ménagée d’un alcool primaire conduit d’abord à l’aldéhyde correspondant."
      },
      {
        "content": "Aldéhyde → alcool primaire par réduction.",
        "correct": true,
        "explanation": "La réduction du groupe $\\ce{-CHO}$ conduit au groupe $\\ce{-CH2OH}$ d’un alcool primaire."
      },
      {
        "content": "Le carbone carbonylé électrophile peut recevoir un nucléophile.",
        "correct": true,
        "explanation": "La polarisation de la liaison $\\ce{C=O}$ appauvrit le carbone en électrons et lui confère un caractère électrophile."
      },
      {
        "content": "Le carbone alpha portant H peut, après base forte, réagir avec un électrophile.",
        "correct": true,
        "explanation": "Après déprotonation par une base forte, le carbone alpha devient nucléophile et peut attaquer l’électrophile."
      }
    ],
    "explanation": "Les aldéhydes et cétones associent un carbone carbonylé électrophile à des transformations d'oxydation, de réduction et de fonctionnalisation en alpha selon le substrat."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le méthanal est le formaldéhyde.",
        "correct": true,
        "explanation": "Le méthanal et le formaldéhyde désignent le même aldéhyde à un carbone."
      },
      {
        "content": "La propanone est l'acétone.",
        "correct": true,
        "explanation": "La propanone est le nom systématique de l’acétone."
      },
      {
        "content": "Un aldéhyde est oxydable en acide carboxylique.",
        "correct": true,
        "explanation": "Un aldéhyde peut être oxydé en acide carboxylique dans le modèle étudié."
      },
      {
        "content": "Une cétone + organomagnésien donne un alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Le réactif organomagnésien apporte un groupe carboné nucléophile qui crée une nouvelle liaison carbone-carbone."
      },
      {
        "content": "La cyclisation d'un sucre aldéhydique forme un hémiacétal.",
        "correct": true,
        "explanation": "Une fonction alcool du sucre s’additionne intramoléculairement sur l’aldéhyde et forme un hémiacétal cyclique."
      },
      {
        "content": "Un aldéhyde + NaBH4 donne un alcool secondaire.",
        "correct": false,
        "explanation": "$\\ce{NaBH4}$ réduit un aldéhyde en alcool primaire, et non en alcool secondaire."
      },
      {
        "content": "Une cétone est décrite comme oxydable en acide.",
        "correct": false,
        "explanation": "Dans le modèle simplifié, une cétone est considérée comme inerte à l’oxydation et ne donne pas un acide carboxylique."
      },
      {
        "content": "Amine primaire + carbonyle → iminium.",
        "correct": false,
        "explanation": "Une amine primaire forme une imine avec un carbonyle ; l’iminium est associé à une amine secondaire."
      },
      {
        "content": "Le carbone carbonylé est nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend le carbone carbonylé électrophile, et non nucléophile."
      },
      {
        "content": "Dans le modèle, le glucose est classé non réducteur.",
        "correct": false,
        "explanation": "Dans le modèle simplifié retenu, la fonction aldéhyde de la forme linéaire du glucose explique son classement comme sucre réducteur."
      }
    ],
    "explanation": "La synthèse mobilise nomenclature, oxydabilité, addition d'un organomagnésien, condensation des amines et cyclisation des sucres."
  }
];
