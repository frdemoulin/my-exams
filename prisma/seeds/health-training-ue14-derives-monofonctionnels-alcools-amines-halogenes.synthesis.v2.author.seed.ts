import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.4 – Synthèse
 */

export const UE14_CH8_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des principales voies de préparation des alcools du chapitre, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'hydratation d'un alcène conduit à un alcool.",
        "correct": true,
        "explanation": "C'est une voie explicitement donnée."
      },
      {
        "content": "La réduction d'un aldéhyde par $\\ce{NaBH4}$ conduit à un alcool primaire.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "La réduction d'une cétone par $\\ce{NaBH4}$ conduit à un alcool secondaire.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "Un organomagnésien et une cétone peuvent conduire à un alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Bilan du support."
      }
    ],
    "explanation": "La préparation des alcools mobilise hydratation, réduction et addition d'organomagnésiens."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On transforme la propanone $\\ce{CH3COCH3}$ par $\\ce{NaBH4}$ dans une première expérience, et par $\\ce{CH3MgBr}$ puis hydrolyse dans une seconde. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Avec $\\ce{NaBH4}$, on obtient un alcool secondaire.",
        "correct": true,
        "explanation": "Une cétone réduite donne un alcool secondaire."
      },
      {
        "content": "Avec $\\ce{CH3MgBr}$, on obtient un alcool tertiaire.",
        "correct": true,
        "explanation": "Une cétone + Grignard donne un alcool tertiaire."
      },
      {
        "content": "La réaction avec le Grignard crée une nouvelle liaison C-C.",
        "correct": true,
        "explanation": "Le groupe méthyle est ajouté au carbone carbonylé."
      },
      {
        "content": "Les deux transformations donnent nécessairement le même alcool.",
        "correct": false,
        "explanation": "Les produits diffèrent par leur squelette et leur classe."
      }
    ],
    "explanation": "La même cétone peut être soit réduite, soit allongée par addition d'un organomagnésien."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un alcool primaire est soumis successivement à une oxydation douce puis à une oxydation plus poussée. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'oxydation douce conduit à un aldéhyde.",
        "correct": true,
        "explanation": "Premier niveau du tableau."
      },
      {
        "content": "L'oxydation forte conduit finalement à un acide carboxylique.",
        "correct": true,
        "explanation": "Deuxième niveau."
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
      }
    ],
    "explanation": "Le support relie alcool primaire, aldéhyde et acide par degré croissant d'oxydation."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La formation d'un hémiacétal est illustrée par la cyclisation des sucres. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle met en jeu une fonction alcool et une fonction aldéhyde dans le bilan simplifié de la fiche.",
        "correct": true,
        "explanation": "Bilan alcool + aldéhyde → hémiacétal."
      },
      {
        "content": "La forme hémiacétalique est indiquée comme fréquente dans les sucres cyclisés.",
        "correct": true,
        "explanation": "C'est l'exemple biologique donné."
      },
      {
        "content": "Elle correspond à une hydrogénation catalytique.",
        "correct": false,
        "explanation": "Aucun dihydrogène n'est ajouté."
      },
      {
        "content": "Le produit est un hémiacétal.",
        "correct": true,
        "explanation": "Bilan explicite."
      }
    ],
    "explanation": "Cette réaction permet de relier la chimie organique fonctionnelle à la cyclisation des oses."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une amine primaire réagit avec un acide activé dans une synthèse de motif peptidique. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une fonction amide peut être obtenue.",
        "correct": true,
        "explanation": "Bilan : amine + acide activé ↔ amide."
      },
      {
        "content": "La fiche relie les amides aux peptides et protéines.",
        "correct": true,
        "explanation": "Contexte explicitement donné."
      },
      {
        "content": "Un chlorure d'acide peut être l'acide activé.",
        "correct": true,
        "explanation": "Exemple du cours."
      },
      {
        "content": "La réaction conduit nécessairement à un iminium.",
        "correct": false,
        "explanation": "L'iminium provient d'une amine secondaire avec un carbonyle."
      }
    ],
    "explanation": "L'amidification constitue le lien direct entre la réactivité des amines et les fonctions amides des peptides."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare la réaction d'une cétone avec une amine primaire puis avec une amine secondaire. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'amine primaire conduit à une imine.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "L'amine secondaire conduit à un iminium.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "De l'eau est formée dans les deux bilans.",
        "correct": true,
        "explanation": "Condensation avec élimination d'eau."
      },
      {
        "content": "Ces réactions sont présentées comme irréversibles.",
        "correct": false,
        "explanation": "La fiche mentionne leur hydrolyse possible."
      }
    ],
    "explanation": "La classe de l'amine permet de distinguer imine et iminium."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On part d'un dérivé halogéné $\\ce{R-X}$ puis on ajoute Mg. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "On forme un organomagnésien $\\ce{RMgX}$.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "Le carbone de RX, décrit comme électrophile, devient nucléophile dans le Grignard.",
        "correct": true,
        "explanation": "Renversement de polarité du modèle."
      },
      {
        "content": "Le produit peut ensuite réagir avec un carbone électrophile.",
        "correct": true,
        "explanation": "Aldéhydes, cétones et esters sont cités."
      },
      {
        "content": "Le produit est une amide.",
        "correct": false,
        "explanation": "Aucun acide activé ni amine n'intervient."
      }
    ],
    "explanation": "La formation du Grignard est un changement majeur de réactivité du carbone lié initialement à X."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions comparent correctement SN1 et SN2 dans le modèle du cours ?",
    "choices": [
      {
        "content": "SN1 se déroule en deux temps avec un carbocation plan.",
        "correct": true,
        "explanation": "Mécanisme enseigné."
      },
      {
        "content": "SN1 peut conduire à une racémisation.",
        "correct": true,
        "explanation": "Attaque des deux faces."
      },
      {
        "content": "SN2 est concertée et conduit à une inversion.",
        "correct": true,
        "explanation": "Une seule étape."
      },
      {
        "content": "SN2 passe obligatoirement par le même carbocation plan que SN1.",
        "correct": false,
        "explanation": "Le mécanisme est concerté."
      }
    ],
    "explanation": "Les deux mécanismes se distinguent à la fois par le nombre d'étapes et par leurs conséquences stéréochimiques."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On souhaite relier trois transformations du chapitre : alcool → dérivé halogéné → organomagnésien → alcool. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un agent halogénant peut convertir l'alcool en RX.",
        "correct": true,
        "explanation": "Préparation de dérivé halogéné."
      },
      {
        "content": "Mg convertit RX en RMgX.",
        "correct": true,
        "explanation": "Formation du Grignard."
      },
      {
        "content": "RMgX peut réagir avec une cétone puis, après hydrolyse, donner un alcool tertiaire.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Cette séquence interdit toute création de liaison C-C.",
        "correct": false,
        "explanation": "Le Grignard crée précisément une nouvelle liaison C-C."
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
        "explanation": "Oxydation."
      },
      {
        "content": "Alcool secondaire + oxydation → cétone.",
        "correct": true,
        "explanation": "Oxydation."
      },
      {
        "content": "Amine primaire + carbonyle → imine.",
        "correct": true,
        "explanation": "Condensation."
      },
      {
        "content": "RX + Mg → RMgX.",
        "correct": true,
        "explanation": "Grignard."
      },
      {
        "content": "SN2 → inversion de configuration dans le modèle du cours.",
        "correct": true,
        "explanation": "Conséquence stéréochimique."
      },
      {
        "content": "Alcool tertiaire + oxydation simple → aldéhyde.",
        "correct": false,
        "explanation": "Pas de réaction dans le modèle."
      },
      {
        "content": "Amine secondaire + carbonyle → imine.",
        "correct": false,
        "explanation": "Iminium."
      },
      {
        "content": "SN1 est concertée.",
        "correct": false,
        "explanation": "Deux temps."
      },
      {
        "content": "RMgX est un électrophile carboné.",
        "correct": false,
        "explanation": "Nucléophile."
      },
      {
        "content": "Alcool + déshydratation → amide.",
        "correct": false,
        "explanation": "Alcène."
      }
    ],
    "explanation": "Cette synthèse croise les transformations majeures sans introduire de mécanisme extérieur au support."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On part de la propanone. Quelle séquence permet, avec les réactions du chapitre, d'obtenir d'abord un alcool puis de recréer une fonction carbonyle ?",
    "choices": [
      {
        "content": "Réduction par $\\ce{NaBH4}$ → propan-2-ol.",
        "correct": true,
        "explanation": "Cétone → alcool secondaire."
      },
      {
        "content": "Oxydation du propan-2-ol → propanone.",
        "correct": true,
        "explanation": "Alcool secondaire → cétone."
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
    "question": "On compare l'action d'un organomagnésien sur un aldéhyde, une cétone et un ester. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Aldéhyde → alcool secondaire après hydrolyse.",
        "correct": true,
        "explanation": "Bilan du cours."
      },
      {
        "content": "Cétone → alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Bilan du cours."
      },
      {
        "content": "Ester → alcool tertiaire après deux réactions de l'organomagnésien.",
        "correct": true,
        "explanation": "Particularité explicitement enseignée."
      },
      {
        "content": "Dans les trois cas, le Grignard ne crée aucune liaison C-C.",
        "correct": false,
        "explanation": "Il apporte un substituant carboné."
      }
    ],
    "explanation": "La nature du substrat carbonylé détermine la classe d'alcool obtenue et, pour l'ester, le nombre d'additions."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé halogéné chiral donne après substitution un mélange racémique. Quelle interprétation est cohérente avec le support ?",
    "choices": [
      {
        "content": "Une voie SN1 est compatible.",
        "correct": true,
        "explanation": "Carbocation plan."
      },
      {
        "content": "Le nucléophile a pu attaquer les deux faces de l'intermédiaire.",
        "correct": true,
        "explanation": "Explication de la racémisation."
      },
      {
        "content": "Un carbocation plan a pu être formé.",
        "correct": true,
        "explanation": "Intermédiaire de SN1."
      },
      {
        "content": "Une SN2 idéale seule expliquerait ce mélange 50/50.",
        "correct": false,
        "explanation": "SN2 donne un seul produit inversé dans le modèle."
      }
    ],
    "explanation": "Le résultat stéréochimique permet de relier le produit au mécanisme SN1."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé halogéné chiral donne un seul produit avec inversion de configuration. Quelles propositions sont cohérentes ?",
    "choices": [
      {
        "content": "Une voie SN2 est compatible.",
        "correct": true,
        "explanation": "Signature du mécanisme."
      },
      {
        "content": "Le mécanisme peut être concerté.",
        "correct": true,
        "explanation": "Une seule étape."
      },
      {
        "content": "L'asymétrie du centre peut être conservée.",
        "correct": true,
        "explanation": "Le centre reste chiral si les substituants restent différents."
      },
      {
        "content": "Une racémisation est nécessairement obtenue.",
        "correct": false,
        "explanation": "Le produit est unique dans le modèle."
      }
    ],
    "explanation": "Le support associe SN2 à une inversion et à un produit optiquement pur."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos du même carbone avant et après formation d'un Grignard à partir de $\\ce{RCH2-X}$ :",
    "choices": [
      {
        "content": "Dans RX, il est décrit comme électrophile.",
        "correct": true,
        "explanation": "Polarisation C-X du modèle."
      },
      {
        "content": "Dans RMgX, il est décrit comme nucléophile.",
        "correct": true,
        "explanation": "Caractère négatif après insertion de Mg."
      },
      {
        "content": "La transformation constitue un renversement de polarité dans le raisonnement du cours.",
        "correct": true,
        "explanation": "Même centre, réactivité opposée."
      },
      {
        "content": "Dans les deux espèces, il est nécessairement un carbocation libre.",
        "correct": false,
        "explanation": "Ce n'est pas la description donnée."
      }
    ],
    "explanation": "Le contraste RX/RMgX est un repère de réactivité essentiel."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un chlorure d'acide $\\ce{R-COCl}$ peut servir d'acide activé dans deux parties du chapitre. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Avec un alcool, il peut conduire à un ester.",
        "correct": true,
        "explanation": "Estérification."
      },
      {
        "content": "Avec une amine primaire ou secondaire, il peut conduire à une amide.",
        "correct": true,
        "explanation": "Amidification."
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
    "question": "Un alcool primaire peut subir deux transformations très différentes. Quelles propositions les distinguent ?",
    "choices": [
      {
        "content": "Oxydation forte → acide carboxylique.",
        "correct": true,
        "explanation": "Bilan du tableau."
      },
      {
        "content": "Déshydratation → alcène + eau.",
        "correct": true,
        "explanation": "Bilan d'élimination."
      },
      {
        "content": "Les deux réactions produisent nécessairement le même groupe fonctionnel.",
        "correct": false,
        "explanation": "Acide contre alcène."
      },
      {
        "content": "Le choix du réactif/conditions détermine donc la voie.",
        "correct": true,
        "explanation": "La fonction alcool est un carrefour réactionnel."
      }
    ],
    "explanation": "La réactivité d'un alcool ne se déduit pas seulement de sa classe : la nature des conditions est déterminante."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé halogéné $\\ce{R-X}$ peut participer à plusieurs transformations du chapitre. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Avec Mg, il peut former un organomagnésien.",
        "correct": true,
        "explanation": "RX + Mg → RMgX."
      },
      {
        "content": "Avec un nucléophile, il peut subir une substitution.",
        "correct": true,
        "explanation": "Bilan SN."
      },
      {
        "content": "Avec l'ammoniac, il peut participer à la formation d'une amine primaire.",
        "correct": true,
        "explanation": "Séquence d'Hoffman."
      },
      {
        "content": "Il n'a aucun rôle de carrefour synthétique.",
        "correct": false,
        "explanation": "Il relie plusieurs parties du chapitre."
      }
    ],
    "explanation": "RX relie la chimie des amines, celle des organomagnésiens et les substitutions nucléophiles."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Pourquoi la réaction d'un organomagnésien avec un ester se distingue-t-elle de celle avec une cétone dans la fiche ?",
    "choices": [
      {
        "content": "L'organomagnésien réagit deux fois avec l'ester.",
        "correct": true,
        "explanation": "Point spécifique du support."
      },
      {
        "content": "Le substituant apporté par le Grignard apparaît deux fois dans l'alcool final.",
        "correct": true,
        "explanation": "Conséquence explicitement signalée."
      },
      {
        "content": "Le produit final est un alcool tertiaire.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Aucune hydrolyse n'est nécessaire dans le bilan.",
        "correct": false,
        "explanation": "La fiche mentionne l'hydrolyse pour obtenir l'alcool."
      }
    ],
    "explanation": "Le double ajout du Grignard est la particularité à retenir pour les esters."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une amine secondaire et une amine primaire sont mises séparément en présence du même aldéhyde. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'amine primaire peut donner une imine.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "L'amine secondaire peut donner un iminium.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Les deux bilans font apparaître de l'eau.",
        "correct": true,
        "explanation": "Condensation."
      },
      {
        "content": "Les deux réactions sont présentées comme réversibles.",
        "correct": true,
        "explanation": "Hydrolyse possible des produits."
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
        "explanation": "Pas de carbonyle créé."
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
        "explanation": "Réduction."
      },
      {
        "content": "Cétone + organomagnésien → alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Grignard."
      },
      {
        "content": "Alcool primaire + oxydation douce → aldéhyde.",
        "correct": true,
        "explanation": "Oxydation."
      },
      {
        "content": "Amine primaire + carbonyle → imine.",
        "correct": true,
        "explanation": "Condensation."
      },
      {
        "content": "SN1 peut racémiser un centre chiral dans le modèle du cours.",
        "correct": true,
        "explanation": "Carbocation plan."
      },
      {
        "content": "Alcool tertiaire + oxydation → acide carboxylique dans le tableau.",
        "correct": false,
        "explanation": "Pas de réaction."
      },
      {
        "content": "Amine secondaire + carbonyle → imine.",
        "correct": false,
        "explanation": "Iminium."
      },
      {
        "content": "SN2 passe par un carbocation plan.",
        "correct": false,
        "explanation": "Mécanisme concerté."
      },
      {
        "content": "RMgX est obtenu par hydrolyse de RX.",
        "correct": false,
        "explanation": "Il est obtenu avec Mg."
      },
      {
        "content": "Ammonium quaternaire = amine tertiaire neutre.",
        "correct": false,
        "explanation": "La fiche les distingue."
      }
    ],
    "explanation": "Le MASTER final croise préparation, réactivité fonctionnelle, Grignard et stéréochimie des substitutions."
  }
];
