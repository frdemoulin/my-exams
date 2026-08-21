import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.4 – Synthèse
 */

export const UE14_CH8_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des principales voies de préparation des alcools du chapitre, quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Un alcool secondaire s’oxyde en aldéhyde dans le modèle étudié.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      },
      {
        "content": "L'hydratation d'un alcène conduit à un alcool.",
        "correct": true,
        "explanation": "C'est une voie explicitement donnée."
      },
      {
        "content": "La réduction d'un aldéhyde par $\\ce{NaBH4}$ conduit à un alcool primaire.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "La réduction d'une cétone par $\\ce{NaBH4}$ conduit à un alcool secondaire.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Un organomagnésien et une cétone peuvent conduire à un alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      }
    ],
    "explanation": "La préparation des alcools mobilise hydratation, réduction et addition d'organomagnésiens."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On transforme la propanone $\\ce{CH3COCH3}$ par $\\ce{NaBH4}$ dans une première expérience, et par $\\ce{CH3MgBr}$ puis hydrolyse dans une seconde. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "La réaction avec le Grignard crée une nouvelle liaison C-C.",
        "correct": true,
        "explanation": "Le groupe méthyle est ajouté au carbone carbonylé."
      },
      {
        "content": "Les deux transformations donnent nécessairement le même alcool.",
        "correct": false,
        "explanation": "Les produits diffèrent par leur squelette et leur classe."
      },
      {
        "content": "Un alcool secondaire s’oxyde en aldéhyde dans le modèle étudié.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      },
      {
        "content": "Avec $\\ce{NaBH4}$, on obtient un alcool secondaire.",
        "correct": true,
        "explanation": "Une cétone réduite donne un alcool secondaire."
      },
      {
        "content": "Avec $\\ce{CH3MgBr}$, on obtient un alcool tertiaire.",
        "correct": true,
        "explanation": "Une cétone + Grignard donne un alcool tertiaire."
      }
    ],
    "explanation": "La même cétone peut être soit réduite, soit allongée par addition d'un organomagnésien."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un alcool primaire est soumis successivement à une oxydation douce puis à une oxydation plus poussée. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L'oxydation douce conduit à un aldéhyde.",
        "correct": true,
        "explanation": "Premier niveau du tableau: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'oxydation forte conduit finalement à un acide carboxylique.",
        "correct": true,
        "explanation": "Deuxième niveau: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La cétone est l'intermédiaire obligatoire.",
        "correct": false,
        "explanation": "Ce n'est pas le trajet d'un alcool primaire."
      },
      {
        "content": "La classe initiale de l'alcool conditionne les produits.",
        "correct": true,
        "explanation": "C'est un point central de la section."
      },
      {
        "content": "Un alcool secondaire s’oxyde en aldéhyde dans le modèle étudié.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      }
    ],
    "explanation": "L'oxydation d'un alcool primaire conduit d'abord à l'aldéhyde puis, si elle est poursuivie, à l'acide carboxylique."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La formation d'un hémiacétal est illustrée par la cyclisation des sucres. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le produit est un hémiacétal.",
        "correct": true,
        "explanation": "Ce bilan reprend directement la transformation attendue dans cette réaction."
      },
      {
        "content": "Un alcool et un aldéhyde peuvent former un hémiacétal.",
        "correct": true,
        "explanation": "La formation d’un hémiacétal résulte de l’addition d’une fonction alcool sur une fonction aldéhyde."
      },
      {
        "content": "La formation d'un hémiacétal met en jeu une fonction alcool et une fonction aldéhyde dans le bilan simplifié.",
        "correct": true,
        "explanation": "Une fonction alcool s'additionne sur la fonction aldéhyde pour former un hémiacétal."
      },
      {
        "content": "La forme hémiacétalique n'est pas fréquente dans les sucres cyclisés.",
        "correct": false,
        "explanation": "La relation correcte est: « La forme hémiacétalique est indiquée comme fréquente dans les sucres cyclisés ». La négation proposée est donc fausse."
      },
      {
        "content": "La formation d'un hémiacétal correspond à une hydrogénation catalytique.",
        "correct": false,
        "explanation": "La formation d'un hémiacétal n'implique aucune addition de dihydrogène."
      }
    ],
    "explanation": "Cette réaction permet de relier la chimie organique fonctionnelle à la cyclisation des oses."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une amine primaire réagit avec un acide activé dans une synthèse de motif peptidique. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Les fonctions amides sont présentes dans les peptides et les protéines.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Un chlorure d'acide peut être l'acide activé.",
        "correct": true,
        "explanation": "Exemple: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La réaction conduit nécessairement à un iminium.",
        "correct": false,
        "explanation": "L'iminium provient d'une amine secondaire avec un carbonyle."
      },
      {
        "content": "Un alcool peut réagir avec un acide activé pour former un ester.",
        "correct": true,
        "explanation": "Le chlorure d’acyle ou l’anhydride d’acide fournit un carbone acylé suffisamment réactif pour former l’ester."
      },
      {
        "content": "Une fonction amide peut être obtenue.",
        "correct": true,
        "explanation": "L'amine attaque le dérivé acylé activé et conduit à la formation d'une fonction amide."
      }
    ],
    "explanation": "L'amidification constitue le lien direct entre la réactivité des amines et les fonctions amides des peptides."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare la réaction d'une cétone avec une amine primaire puis avec une amine secondaire. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Une amine secondaire réagissant avec un composé carbonylé conduit à une imine neutre dans le bilan étudié.",
        "correct": false,
        "explanation": "Le produit retenu pour une amine secondaire est un ion iminium."
      },
      {
        "content": "L'amine primaire ne conduit pas à une imine.",
        "correct": false,
        "explanation": "La relation correcte est: « L'amine primaire conduit à une imine ». La négation proposée est donc fausse."
      },
      {
        "content": "L'amine secondaire conduit à un iminium.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "De l'eau est formée dans les deux bilans.",
        "correct": true,
        "explanation": "Condensation avec élimination d'eau: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Ces réactions sont présentées comme irréversibles.",
        "correct": false,
        "explanation": "La mentionne leur hydrolyse possible."
      }
    ],
    "explanation": "La classe de l'amine permet de distinguer imine et iminium."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On part d'un dérivé halogéné $\\ce{R-X}$ puis on ajoute Mg. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le produit peut ensuite réagir avec un carbone électrophile.",
        "correct": true,
        "explanation": "Aldéhydes, cétones et esters sont cités."
      },
      {
        "content": "Le produit est une amide.",
        "correct": false,
        "explanation": "Aucun acide activé ni amine n'intervient."
      },
      {
        "content": "Un dérivé halogéné se forme nécessairement par réduction d’un aldéhyde avec $\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "Cette réduction conduit à un alcool et n’introduit pas d’halogène."
      },
      {
        "content": "On forme un organomagnésien $\\ce{RMgX}$.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Le carbone de RX, décrit comme électrophile, devient nucléophile dans le Grignard.",
        "correct": true,
        "explanation": "Renversement de polarité du modèle."
      }
    ],
    "explanation": "La formation du Grignard est un changement majeur de réactivité du carbone lié initialement à X."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions comparent correctement SN1 et SN2 dans le modèle étudié?",
    "choices": [
      {
        "content": "SN1 se déroule en deux temps avec un carbocation plan.",
        "correct": true,
        "explanation": "Mécanisme enseigné: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "SN1 ne peut pas conduire à une racémisation.",
        "correct": false,
        "explanation": "La relation correcte est: « SN1 peut conduire à une racémisation ». La négation proposée est donc fausse."
      },
      {
        "content": "SN2 est concertée et conduit à une inversion.",
        "correct": true,
        "explanation": "Une seule étape: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "SN2 passe obligatoirement par le même carbocation plan que SN1.",
        "correct": false,
        "explanation": "Le mécanisme est concerté: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une SN1 passe par un carbocation plan dans le modèle étudié.",
        "correct": true,
        "explanation": "Le départ du groupe partant précède l’attaque du nucléophile, ce qui crée un intermédiaire carbocationique plan."
      }
    ],
    "explanation": "Les deux mécanismes se distinguent à la fois par le nombre d'étapes et par leurs conséquences stéréochimiques."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On souhaite relier trois transformations du chapitre: alcool → dérivé halogéné → organomagnésien → alcool. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Cette séquence interdit toute création de liaison C-C.",
        "correct": false,
        "explanation": "Le Grignard crée précisément une nouvelle liaison C-C."
      },
      {
        "content": "Un dérivé halogéné se forme nécessairement par réduction d’un aldéhyde avec $\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "Cette réduction conduit à un alcool et n’introduit pas d’halogène."
      },
      {
        "content": "Un agent halogénant peut convertir l'alcool en RX.",
        "correct": true,
        "explanation": "Préparation de dérivé halogéné: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Mg convertit RX en RMgX.",
        "correct": true,
        "explanation": "Formation du Grignard: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "RMgX peut réagir avec une cétone puis, après hydrolyse, donner un alcool tertiaire.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      }
    ],
    "explanation": "Le chapitre relie ainsi les trois familles fonctionnelles dans une séquence de synthèse cohérente."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Alcool primaire + oxydation douce → aldéhyde.",
        "correct": true,
        "explanation": "Cette transformation augmente le degré d’oxydation de la fonction concernée."
      },
      {
        "content": "Alcool secondaire + oxydation → cétone.",
        "correct": true,
        "explanation": "Cette transformation augmente le degré d’oxydation de la fonction concernée."
      },
      {
        "content": "Amine primaire + carbonyle → imine.",
        "correct": true,
        "explanation": "La réaction de condensation associe les deux fonctions et s’accompagne ici d’une élimination d’eau."
      },
      {
        "content": "RX + Mg → RMgX.",
        "correct": true,
        "explanation": "Le réactif organomagnésien apporte un groupe carboné nucléophile qui crée une nouvelle liaison carbone-carbone."
      },
      {
        "content": "SN2 → inversion de configuration dans le modèle étudié.",
        "correct": true,
        "explanation": "Conséquence stéréochimique : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Alcool tertiaire + oxydation simple → aldéhyde.",
        "correct": false,
        "explanation": "Pas de réaction dans le modèle."
      },
      {
        "content": "Amine secondaire + carbonyle → imine.",
        "correct": false,
        "explanation": "Le produit considéré correspond bien à un ion iminium."
      },
      {
        "content": "SN1 est concertée.",
        "correct": false,
        "explanation": "Deux temps : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "RMgX est un électrophile carboné.",
        "correct": false,
        "explanation": "Le centre considéré est riche en électrons et peut donc se comporter comme un nucléophile."
      },
      {
        "content": "Alcool + déshydratation → amide.",
        "correct": false,
        "explanation": "Alcène : cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Cette synthèse croise les transformations majeures sans introduire de mécanisme extérieur au support."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On part de la propanone. Quelle séquence permet, avec les réactions du chapitre, d'obtenir d'abord un alcool puis de recréer une fonction carbonyle?",
    "choices": [
      {
        "content": "La réduction d’une cétone par $\\ce{NaBH4}$ conduit à un alcool tertiaire.",
        "correct": false,
        "explanation": "Dans le cadre du chapitre, une cétone réduite par $\\ce{NaBH4}$ donne un alcool secondaire."
      },
      {
        "content": "Réduction par $\\ce{NaBH4}$ → propan-2-ol.",
        "correct": true,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      },
      {
        "content": "Oxydation du propan-2-ol → propanone.",
        "correct": true,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      },
      {
        "content": "La séquence est réversible au sens synthétique avec des réactifs différents.",
        "correct": true,
        "explanation": "Réduction puis oxydation font circuler entre les deux fonctions."
      },
      {
        "content": "L'étape d'oxydation donne un aldéhyde.",
        "correct": false,
        "explanation": "Un alcool secondaire donne une cétone."
      }
    ],
    "explanation": "Cette question vérifie la cohérence entre les tableaux de préparation et de réactivité des alcools."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare l'action d'un organomagnésien sur un aldéhyde, une cétone et un ester. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Ester → alcool tertiaire après deux réactions de l'organomagnésien.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Dans les trois cas, le Grignard ne crée aucune liaison C-C.",
        "correct": false,
        "explanation": "Il apporte un substituant carboné."
      },
      {
        "content": "Une oxydation douce d’un alcool primaire peut conduire à un aldéhyde.",
        "correct": true,
        "explanation": "L’aldéhyde correspond au premier niveau d’oxydation retenu pour un alcool primaire."
      },
      {
        "content": "Aldéhyde → alcool secondaire après hydrolyse.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Cétone → alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      }
    ],
    "explanation": "La nature du substrat carbonylé détermine la classe d'alcool obtenue et, pour l'ester, le nombre d'additions."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé halogéné chiral donne après substitution un mélange racémique. Quelle interprétation est cohérente avec le support?",
    "choices": [
      {
        "content": "Une voie SN1 est compatible.",
        "correct": true,
        "explanation": "Carbocation plan: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le nucléophile a pu attaquer les deux faces de l'intermédiaire.",
        "correct": true,
        "explanation": "Explication de la racémisation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un carbocation plan a pu être formé.",
        "correct": true,
        "explanation": "Intermédiaire de SN1: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une SN2 idéale seule expliquerait ce mélange 50/50.",
        "correct": false,
        "explanation": "SN2 donne un seul produit inversé dans le modèle."
      },
      {
        "content": "Une SN1 est décrite comme un mécanisme concerté en une seule étape.",
        "correct": false,
        "explanation": "Le mécanisme SN1 est présenté en deux étapes, contrairement à la SN2 concertée."
      }
    ],
    "explanation": "Le résultat stéréochimique permet de relier le produit au mécanisme SN1."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé halogéné chiral donne un seul produit avec inversion de configuration. Quelles propositions sont cohérentes?",
    "choices": [
      {
        "content": "Une racémisation est nécessairement obtenue.",
        "correct": false,
        "explanation": "Le produit est unique dans le modèle."
      },
      {
        "content": "Un dérivé halogéné se forme nécessairement par réduction d’un aldéhyde avec $\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "Cette réduction conduit à un alcool et n’introduit pas d’halogène."
      },
      {
        "content": "Une voie SN2 n’est pas compatible.",
        "correct": false,
        "explanation": "La relation correcte est: « Une voie SN2 est compatible ». La négation proposée est donc fausse."
      },
      {
        "content": "Le mécanisme peut être concerté.",
        "correct": true,
        "explanation": "Une seule étape: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'asymétrie du centre peut être conservée.",
        "correct": true,
        "explanation": "Le centre reste chiral si les substituants restent différents."
      }
    ],
    "explanation": "Le support associe SN2 à une inversion et à un produit optiquement pur."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos du même carbone avant et après formation d'un Grignard à partir de $\\ce{RCH2-X}$:",
    "choices": [
      {
        "content": "Dans RMgX, il est décrit comme nucléophile.",
        "correct": true,
        "explanation": "Caractère négatif après insertion de Mg."
      },
      {
        "content": "La transformation constitue un renversement de polarité dans le raisonnement.",
        "correct": true,
        "explanation": "La présence du groupe fonctionnel conditionne la réactivité et les propriétés de cette famille."
      },
      {
        "content": "Dans les deux espèces, il est nécessairement un carbocation libre.",
        "correct": false,
        "explanation": "Ce n'est pas la description donnée."
      },
      {
        "content": "Un organomagnésien réagit avec un ester une seule fois avant l’alcool tertiaire final.",
        "correct": false,
        "explanation": "Le cas de l’ester nécessite deux additions du même organomagnésien dans le modèle étudié."
      },
      {
        "content": "Dans RX, il est décrit comme électrophile.",
        "correct": true,
        "explanation": "Polarisation C-X du modèle: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le contraste RX/RMgX est un repère de réactivité essentiel."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un chlorure d'acide $\\ce{R-COCl}$ peut servir d'acide activé dans deux parties du chapitre. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Un alcool peut réagir avec un acide activé pour former un ester.",
        "correct": true,
        "explanation": "Le chlorure d’acyle ou l’anhydride d’acide fournit un carbone acylé suffisamment réactif pour former l’ester."
      },
      {
        "content": "Avec un alcool, il ne peut pas conduire à un ester.",
        "correct": false,
        "explanation": "La relation correcte est: « Avec un alcool, il peut conduire à un ester ». La négation proposée est donc fausse."
      },
      {
        "content": "Avec une amine primaire ou secondaire, il peut conduire à une amide.",
        "correct": true,
        "explanation": "Cette transformation forme une fonction amide à partir d’une amine et d’un dérivé acylé adapté."
      },
      {
        "content": "Dans les deux cas, le carbone acyle joue le rôle de centre électrophile dans le raisonnement fonctionnel.",
        "correct": true,
        "explanation": "Le nucléophile O ou N réagit sur le carbone activé."
      },
      {
        "content": "Il conduit toujours à un organomagnésien sans Mg.",
        "correct": false,
        "explanation": "La formation de Grignard requiert un dérivé halogéné carboné et Mg."
      }
    ],
    "explanation": "Un même acide activé permet d'acylater soit un alcool, soit une amine."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un alcool primaire peut subir deux transformations très différentes. Quelles propositions les distinguent?",
    "choices": [
      {
        "content": "Les deux réactions produisent nécessairement le même groupe fonctionnel.",
        "correct": false,
        "explanation": "Acide contre alcène: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le choix du réactif/conditions détermine donc la voie.",
        "correct": true,
        "explanation": "La fonction alcool est un carrefour réactionnel."
      },
      {
        "content": "Un alcool secondaire s’oxyde en aldéhyde dans le modèle étudié.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      },
      {
        "content": "Oxydation forte → acide carboxylique.",
        "correct": true,
        "explanation": "Le bilan du tableau conduit bien au produit indiqué pour cette transformation."
      },
      {
        "content": "Déshydratation → alcène + eau.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      }
    ],
    "explanation": "La réactivité d'un alcool ne se déduit pas seulement de sa classe: la nature des conditions est déterminante."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé halogéné $\\ce{R-X}$ peut participer à plusieurs transformations du chapitre. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Avec Mg, il ne peut pas former un organomagnésien.",
        "correct": false,
        "explanation": "La relation correcte est: « Avec Mg, il peut former un organomagnésien ». La négation proposée est donc fausse."
      },
      {
        "content": "Avec un nucléophile, il peut subir une substitution.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Avec l'ammoniac, il peut participer à la formation d'une amine primaire.",
        "correct": true,
        "explanation": "Séquence d'Hoffman: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Il n'a aucun rôle de carrefour synthétique.",
        "correct": false,
        "explanation": "Il relie plusieurs parties du chapitre."
      },
      {
        "content": "Un dérivé halogéné se forme nécessairement par réduction d’un aldéhyde avec $\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "Cette réduction conduit à un alcool et n’introduit pas d’halogène."
      }
    ],
    "explanation": "RX relie la chimie des amines, celle des organomagnésiens et les substitutions nucléophiles."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Pourquoi la réaction d'un organomagnésien avec un ester se distingue-t-elle de celle avec une cétone?",
    "choices": [
      {
        "content": "Aucune hydrolyse n'est nécessaire dans le bilan.",
        "correct": false,
        "explanation": "La mentionne l'hydrolyse pour obtenir l'alcool."
      },
      {
        "content": "Un organomagnésien apporte un groupe carboné nucléophile au carbone électrophile du carbonyle.",
        "correct": true,
        "explanation": "Le carbone porté par le réactif de Grignard forme une nouvelle liaison carbone-carbone avec le carbone du carbonyle."
      },
      {
        "content": "L'organomagnésien réagit deux fois avec l'ester.",
        "correct": true,
        "explanation": "Point spécifique: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le substituant apporté par le Grignard apparaît deux fois dans l'alcool final.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Le produit final est un alcool tertiaire.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      }
    ],
    "explanation": "Le double ajout du Grignard est la particularité à retenir pour les esters."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une amine secondaire et une amine primaire sont mises séparément en présence du même aldéhyde. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L'amine secondaire peut donner un iminium.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Les deux bilans font apparaître de l'eau.",
        "correct": true,
        "explanation": "La réaction de condensation associe les deux fonctions et s’accompagne ici d’une élimination d’eau."
      },
      {
        "content": "Les deux réactions sont présentées comme réversibles.",
        "correct": true,
        "explanation": "Hydrolyse possible des produits: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une amine secondaire réagissant avec un composé carbonylé conduit à une imine neutre dans le bilan étudié.",
        "correct": false,
        "explanation": "Le produit retenu pour une amine secondaire est un ion iminium."
      },
      {
        "content": "L'amine primaire peut donner une imine.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      }
    ],
    "explanation": "La distinction primaire/secondaire permet de prédire imine versus iminium."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux transformations conduisant directement à un dérivé carboxylique acylé contenant encore un carbonyle.",
    "choices": [
      {
        "content": "L’estérification étudiée transforme l’alcool en ammonium quaternaire.",
        "correct": false,
        "explanation": "La réaction avec un acide activé conduit à un ester et ne quaternise pas un atome d’azote."
      },
      {
        "content": "Alcool + chlorure d'acyle → ester.",
        "correct": true,
        "explanation": "L'ester conserve le carbonyle acyle."
      },
      {
        "content": "Amine + chlorure d'acide → amide.",
        "correct": true,
        "explanation": "L'amide conserve le carbonyle acyle."
      },
      {
        "content": "RX + Mg → RMgX.",
        "correct": false,
        "explanation": "Cette transformation ne crée pas de groupe carbonyle dans le produit considéré."
      },
      {
        "content": "SN2 sur RX → R-Nu.",
        "correct": false,
        "explanation": "La présence d'un carbonyle dépendrait du nucléophile, elle n'est pas intrinsèque au bilan."
      }
    ],
    "explanation": "Estérification et amidification avec un acide activé sont les deux réactions d'acylation directes du chapitre."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Aldéhyde + $\\ce{NaBH4}$ → alcool primaire.",
        "correct": true,
        "explanation": "Cette transformation diminue le degré d’oxydation de la fonction concernée : il s’agit bien d’une réduction."
      },
      {
        "content": "Cétone + organomagnésien → alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Le réactif organomagnésien apporte un groupe carboné nucléophile qui crée une nouvelle liaison carbone-carbone."
      },
      {
        "content": "Alcool primaire + oxydation douce → aldéhyde.",
        "correct": true,
        "explanation": "Cette transformation augmente le degré d’oxydation de la fonction concernée."
      },
      {
        "content": "Amine primaire + carbonyle → imine.",
        "correct": true,
        "explanation": "La réaction de condensation associe les deux fonctions et s’accompagne ici d’une élimination d’eau."
      },
      {
        "content": "SN1 peut racémiser un centre chiral dans le modèle étudié.",
        "correct": true,
        "explanation": "Carbocation plan : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Alcool tertiaire + oxydation → acide carboxylique dans le tableau.",
        "correct": false,
        "explanation": "Aucune transformation de ce type n’est attendue dans le cadre simplifié considéré."
      },
      {
        "content": "Amine secondaire + carbonyle → imine.",
        "correct": false,
        "explanation": "Le produit considéré correspond bien à un ion iminium."
      },
      {
        "content": "SN2 passe par un carbocation plan.",
        "correct": false,
        "explanation": "Mécanisme concerté : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "RMgX est obtenu par hydrolyse de RX.",
        "correct": false,
        "explanation": "Il est obtenu avec Mg."
      },
      {
        "content": "Ammonium quaternaire = amine tertiaire neutre.",
        "correct": false,
        "explanation": "La les distingue : cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le MASTER final croise préparation, réactivité fonctionnelle, Grignard et stéréochimie des substitutions."
  }
];
