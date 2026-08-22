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
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
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
    "explanation": "Le borohydrure est un réducteur; le produit attendu est un alcool secondaire."
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
        "explanation": "Les esters et les thioesters possèdent tous deux un groupe carbonyle."
      },
      {
        "content": "Le carbone carbonylé est électrophile dans les deux cas.",
        "correct": true,
        "explanation": "La polarisation de la liaison $\\ce{C=O}$ appauvrit le carbone en électrons et lui confère un caractère électrophile."
      }
    ],
    "explanation": "Dans le modèle simplifié retenu, la cétone est considérée comme inerte à l’oxydation, contrairement à l’aldéhyde."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un composé carbonylé réagit avec $\\ce{NaBH4}$ puis, dans une autre expérience, avec un organomagnésien. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "NaBH4 apporte un hydrure nucléophile.",
        "correct": true,
        "explanation": "Cette transformation diminue le degré d’oxydation de la fonction concernée: il s’agit bien d’une réduction."
      },
      {
        "content": "L'organomagnésien apporte un fragment carboné nucléophile.",
        "correct": true,
        "explanation": "L’addition ou l’hydratation sur la double liaison constitue une voie d’accès directe à ce produit."
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
    "explanation": "Cette transformation diminue le degré d’oxydation de la fonction concernée: il s’agit bien d’une réduction."
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
    "explanation": "La réduction contrôlée d’un dérivé d’acide activé, tel qu’un chlorure d’acyle, permet d’accéder plus sélectivement au stade aldéhyde."
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
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
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
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      }
    ],
    "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un carbone alpha d'un aldéhyde ou d'une cétone porte un hydrogène. Quelles propositions sont cohérentes?",
    "choices": [
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Une base forte peut mettre en valeur son caractère nucléophile.",
        "correct": true,
        "explanation": "Une base forte peut mettre en valeur son caractère nucléophile. Cette étape intervient en premier dans l’enchaînement réactionnel considéré."
      },
      {
        "content": "Un électrophile peut ensuite réagir avec ce carbone.",
        "correct": true,
        "explanation": "Un électrophile peut ensuite réagir avec ce carbone. Cette étape suit la première transformation de l’enchaînement."
      },
      {
        "content": "Une nouvelle liaison C-E peut être créée.",
        "correct": true,
        "explanation": "Après déprotonation en alpha, le carbone nucléophile formé peut attaquer $\\ce{E+}$ et créer une nouvelle liaison C–E."
      },
      {
        "content": "Le carbone carbonylé reste le centre électrophile de la fonction.",
        "correct": true,
        "explanation": "Les deux réactivités coexistent selon les conditions."
      }
    ],
    "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
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
        "content": "Il est classé comme non réducteur.",
        "correct": true,
        "explanation": "Dans le modèle simplifié retenu, le fructose est associé à une fonction cétone linéaire et classé comme non réducteur."
      },
      {
        "content": "La formation d’un hémiacétal cyclique exige la suppression de tous les groupes hydroxyle du sucre.",
        "correct": false,
        "explanation": "Au contraire, une fonction alcool participe à la fermeture du cycle."
      },
      {
        "content": "Le glucose est relié à une fonction aldéhyde linéaire.",
        "correct": true,
        "explanation": "Dans sa forme linéaire considérée ici, le glucose porte une fonction aldéhyde."
      },
      {
        "content": "Il est classé comme réducteur.",
        "correct": true,
        "explanation": "Le caractère oxydable de la fonction aldéhyde explique le classement du glucose comme sucre réducteur dans ce modèle."
      }
    ],
    "explanation": "Dans le modèle simplifié retenu, le fructose est associé à une fonction cétone linéaire et classé comme non réducteur."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La cyclisation d'un sucre aldéhydique permet de relier quelles notions?",
    "choices": [
      {
        "content": "Fonction aldéhyde.",
        "correct": true,
        "explanation": "Cette catégorie de composés constitue l’un des réactifs clés de cette transformation."
      },
      {
        "content": "Fonction alcool.",
        "correct": true,
        "explanation": "Cette catégorie de composés constitue l’un des réactifs clés de cette transformation."
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
        "content": "La formation d’un hémiacétal cyclique exige la suppression de tous les groupes hydroxyle du sucre.",
        "correct": false,
        "explanation": "Au contraire, une fonction alcool participe à la fermeture du cycle."
      }
    ],
    "explanation": "Cette catégorie de composés constitue l’un des réactifs clés de cette transformation."
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
        "explanation": "Un aldéhyde peut être oxydé en acide carboxylique dans le modèle étudié."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Addition d'un organomagnésien sur un carbonyle.",
        "correct": true,
        "explanation": "Le fragment carboné du Grignard est ajouté."
      },
      {
        "content": "Fonctionnalisation alpha par base forte puis électrophile carboné.",
        "correct": true,
        "explanation": "Une liaison est formée entre le carbone alpha et l'électrophile."
      },
      {
        "content": "Réduction d'une cétone par NaBH4.",
        "correct": false,
        "explanation": "Aucun nouveau carbone n'est ajouté."
      }
    ],
    "explanation": "Une liaison est formée entre le carbone alpha et l'électrophile. Le fragment carboné du Grignard est ajouté."
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
        "explanation": "Le produit considéré correspond bien à un ion iminium."
      },
      {
        "content": "Une cétone est décrite comme facilement oxydable.",
        "correct": false,
        "explanation": "Dans le modèle simplifié retenu, la cétone est considérée comme inerte à l’oxydation, contrairement à l’aldéhyde."
      },
      {
        "content": "Le carbone alpha est toujours nucléophile même sans hydrogène.",
        "correct": false,
        "explanation": "Une base forte peut arracher un hydrogène en position alpha du carbonyle et créer un centre carboné nucléophile."
      },
      {
        "content": "La cyclisation d'un sucre aldéhydique forme une amide.",
        "correct": false,
        "explanation": "La cyclisation d’un sucre aldéhydique forme un hémiacétal par réaction intramoléculaire entre une fonction alcool et l’aldéhyde."
      }
    ],
    "explanation": "La polarisation de la liaison $\\ce{C=O}$ appauvrit le carbone en électrons et lui confère un caractère électrophile."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une séquence comporte: chlorure d'acyle → composé A par réduction contrôlée; puis A + organomagnésien → composé B après hydrolyse. Quelles propositions sont cohérentes?",
    "choices": [
      {
        "content": "Un acide carboxylique est toujours plus facile à réduire qu’un aldéhyde.",
        "correct": false,
        "explanation": "La fonction acide carboxylique est plus difficile à réduire que les aldéhydes et les cétones."
      },
      {
        "content": "A est un aldéhyde.",
        "correct": true,
        "explanation": "La réduction du groupe fonctionnel conduit à la formation du produit correspondant."
      },
      {
        "content": "B est un alcool secondaire dans le cadre général présenté.",
        "correct": true,
        "explanation": "L’addition d’un organomagnésien sur un aldéhyde conduit, après hydrolyse, à un alcool secondaire dans le cas général."
      },
      {
        "content": "La seconde étape crée une liaison C-C.",
        "correct": true,
        "explanation": "L’addition ou l’hydratation sur la double liaison constitue une voie d’accès directe à ce produit."
      },
      {
        "content": "B est nécessairement une cétone.",
        "correct": false,
        "explanation": "Le carbonyle est converti en alcool."
      }
    ],
    "explanation": "La fonction acide carboxylique est plus difficile à réduire que les aldéhydes et les cétones."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une cétone est traitée soit par NaBH4, soit par un organomagnésien. Quel raisonnement permet de distinguer les produits?",
    "choices": [
      {
        "content": "Le Grignard augmente le squelette carboné.",
        "correct": true,
        "explanation": "Un organomagnésien apporte un fragment carboné nucléophile qui forme une nouvelle liaison carbone–carbone avec un centre électrophile."
      },
      {
        "content": "NaBH4 et Grignard ont exactement le même bilan carboné.",
        "correct": false,
        "explanation": "Seul le Grignard ajoute du carbone."
      },
      {
        "content": "Un hydrure comme $\\ce{NaBH4}$ peut réduire un aldéhyde en alcool primaire.",
        "correct": true,
        "explanation": "L’addition d’hydrure sur le carbonyle puis la protonation conduit à l’alcool primaire."
      },
      {
        "content": "NaBH4 ne donne pas un alcool secondaire.",
        "correct": false,
        "explanation": "La relation correcte est: « NaBH4 donne un alcool secondaire ». La négation proposée est donc fausse."
      },
      {
        "content": "Le Grignard donne un alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "L’addition ou l’hydratation sur la double liaison constitue une voie d’accès directe à ce produit."
      }
    ],
    "explanation": "$\\ce{NaBH4}$ réduit le carbonyle sans ajouter de carbone, tandis qu’un organomagnésien crée une nouvelle liaison C–C avant l’hydrolyse finale."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé carbonylé porte un CH2 alpha. Il est traité par base forte puis par un électrophile. Quelles propositions sont exactes?",
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
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
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
    "explanation": "Ici, le carbone alpha devient nucléophile et attaque un électrophile ; dans l’autre voie, c’est le carbone carbonylé électrophile qui est attaqué."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un aldéhyde est soumis successivement à une réduction puis à une oxydation adaptée. Quelles propositions sont cohérentes?",
    "choices": [
      {
        "content": "La cétone est obligatoirement intermédiaire.",
        "correct": false,
        "explanation": "Cette proposition est écartée: dans ce couple ne correspond pas au bilan ou à la propriété attendue."
      },
      {
        "content": "Un acide carboxylique est toujours plus facile à réduire qu’un aldéhyde.",
        "correct": false,
        "explanation": "La fonction acide carboxylique est plus difficile à réduire que les aldéhydes et les cétones."
      },
      {
        "content": "La réduction ne peut pas donner un alcool primaire.",
        "correct": false,
        "explanation": "La relation correcte est: « La réduction peut donner un alcool primaire ». La négation proposée est donc fausse."
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
    "explanation": "Cette proposition est écartée: dans ce couple ne correspond pas au bilan ou à la propriété attendue."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un produit carbonylé est oxydable en acide carboxylique et réagit avec NaBH4 en donnant un alcool primaire. Quelle famille est compatible?",
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
        "explanation": "Le motif ou le produit considéré correspond bien à une fonction aldéhyde."
      },
      {
        "content": "$\\ce{NaBH4}$ transforme une cétone directement en acide carboxylique.",
        "correct": false,
        "explanation": "Le borohydrure est un réducteur; le produit attendu est un alcool secondaire."
      },
      {
        "content": "Aldéhyde.",
        "correct": true,
        "explanation": "Oxydable et donne un alcool primaire."
      }
    ],
    "explanation": "Elle est inerte à l'oxydation et sa réduction donne un alcool secondaire."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un produit carbonylé est inerte à l'oxydation dans le modèle et sa réduction donne un alcool secondaire. Quelle fonction est cohérente?",
    "choices": [
      {
        "content": "L’oxydation ménagée d’un alcool primaire peut conduire à un aldéhyde.",
        "correct": true,
        "explanation": "L’aldéhyde correspond au premier produit d’oxydation retenu avant la sur-oxydation en acide."
      },
      {
        "content": "Cétone.",
        "correct": true,
        "explanation": "Deux propriétés caractéristiques."
      },
      {
        "content": "Aldéhyde.",
        "correct": false,
        "explanation": "Oxydable et donne un alcool primaire."
      },
      {
        "content": "Le carbone carbonylé n’est pas lié à deux substituants carbonés.",
        "correct": false,
        "explanation": "La relation correcte est: « Le carbone carbonylé est lié à deux substituants carbonés ». La négation proposée est donc fausse."
      },
      {
        "content": "Le suffixe est -one.",
        "correct": true,
        "explanation": "Le suffixe « -one » est utilisé dans la nomenclature des cétones."
      }
    ],
    "explanation": "L’aldéhyde correspond au premier produit d’oxydation retenu avant la sur-oxydation en acide."
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
        "explanation": "Réaction d'un OH avec l'aldéhyde."
      },
      {
        "content": "La projection doit être comprise comme une convention d'une structure tridimensionnelle.",
        "correct": true,
        "explanation": "La projection plane code une molécule tridimensionnelle dont les carbones saturés présentent une géométrie tétraédrique."
      },
      {
        "content": "La formation d’un hémiacétal cyclique exige la suppression de tous les groupes hydroxyle du sucre.",
        "correct": false,
        "explanation": "Au contraire, une fonction alcool participe à la fermeture du cycle."
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
    "explanation": "Réaction d'un OH avec l'aldéhyde."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Pourquoi la forme cyclique d'un sucre ne doit-elle pas être comprise comme un simple dessin plan?",
    "choices": [
      {
        "content": "la géométrie tétraédrique des carbones.",
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
        "content": "La formation d’un hémiacétal cyclique exige la suppression de tous les groupes hydroxyle du sucre.",
        "correct": false,
        "explanation": "Au contraire, une fonction alcool participe à la fermeture du cycle."
      }
    ],
    "explanation": "Dans la projection linéaire, les liaisons horizontales et verticales codent des orientations spatiales différentes autour des carbones tétraédriques."
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
    "explanation": "Une amine secondaire réagissant avec un composé carbonylé conduit à un ion iminium dans le bilan étudié."
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
    "explanation": "deux étapes: 1) base forte, 2) réaction avec l'électrophile."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions relient correctement préparation, propriétés et réactivité?",
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
        "explanation": "La présence du groupe fonctionnel conditionne la réactivité et les propriétés de cette famille."
      },
      {
        "content": "Le carbone carbonylé électrophile peut recevoir un nucléophile.",
        "correct": true,
        "explanation": "La polarisation de la liaison $\\ce{C=O}$ appauvrit le carbone en électrons et lui confère un caractère électrophile."
      },
      {
        "content": "Le carbone alpha portant H peut, après base forte, réagir avec un électrophile.",
        "correct": true,
        "explanation": "La présence du groupe fonctionnel conditionne la réactivité et les propriétés de cette famille."
      }
    ],
    "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
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
        "explanation": "La proposition est fausse : un aldéhyde est oxydable en acide carboxylique."
      },
      {
        "content": "Amine primaire + carbonyle → iminium.",
        "correct": false,
        "explanation": "Le produit considéré correspond bien à une imine."
      },
      {
        "content": "Le carbone carbonylé est nucléophile.",
        "correct": false,
        "explanation": "Le centre considéré est déficient en électrons et peut donc être attaqué par un nucléophile."
      },
      {
        "content": "Dans le modèle, le glucose est classé non réducteur.",
        "correct": false,
        "explanation": "Dans le modèle simplifié retenu, la fonction aldéhyde de la forme linéaire du glucose explique son classement comme sucre réducteur."
      }
    ],
    "explanation": "Le réactif organomagnésien apporte un groupe carboné nucléophile qui crée une nouvelle liaison carbone-carbone."
  }
];
