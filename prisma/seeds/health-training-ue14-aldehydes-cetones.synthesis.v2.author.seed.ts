import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.6 – Synthèse
 */

export const UE14_CH10_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles associations fondamentales du chapitre sont exactes?",
    "choices": [
      {
        "content": "$\\ce{NaBH4}$ transforme une cétone directement en acide carboxylique.",
        "correct": false,
        "explanation": "Le borohydrure est un réducteur; le produit attendu est un alcool secondaire."
      },
      {
        "content": "Alcool primaire + oxydation ménagée → aldéhyde.",
        "correct": true,
        "explanation": "Préparation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Alcool secondaire + oxydation → cétone.",
        "correct": true,
        "explanation": "Préparation: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Ces quatre transformations relient directement alcools et composés carbonylés."
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
        "explanation": "Oxydabilité: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La cétone est décrite comme inerte à l'oxydation.",
        "correct": true,
        "explanation": "Contraste: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Les deux possèdent un carbonyle.",
        "correct": true,
        "explanation": "Point commun: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le carbone carbonylé est électrophile dans les deux cas.",
        "correct": true,
        "explanation": "Polarité: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le chapitre oppose surtout leur position de carbonyle et leur oxydabilité, tout en partageant une polarité commune."
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
        "explanation": "Polarité commune: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Seul l'organomagnésien crée une nouvelle liaison C-C.",
        "correct": true,
        "explanation": "Différence essentielle: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      }
    ],
    "explanation": "Les deux réactifs sont nucléophiles mais n'ont pas le même impact sur le squelette carboné."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On souhaite préparer un aldéhyde à partir d'un dérivé d'acide. Quelles propositions sont conformes à la?",
    "choices": [
      {
        "content": "L'activation de l'acide peut faciliter l'accès au stade aldéhyde.",
        "correct": true,
        "explanation": "Conclusion: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un acide carboxylique est toujours plus facile à réduire qu’un aldéhyde.",
        "correct": false,
        "explanation": "Le chapitre souligne au contraire que la fonction acide est plus difficile à réduire."
      },
      {
        "content": "La réduction directe d'un acide carboxylique est difficile à arrêter au stade aldéhyde.",
        "correct": true,
        "explanation": "Conditions fortes: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'aldéhyde peut être réduit ensuite en alcool si les conditions sont fortes.",
        "correct": true,
        "explanation": "Difficulté d'isolement: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un chlorure d'acyle peut être réduit en aldéhyde.",
        "correct": true,
        "explanation": "Voie sélective présentée: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La préparation d'un aldéhyde à partir d'un dérivé d'acide repose sur la notion d'activation et de sélectivité."
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
        "explanation": "Rôle: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'élimination d'eau est indiquée pour pousser la réaction dans le modèle.",
        "correct": true,
        "explanation": "Condition: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "La classe de l'amine détermine le type de produit carbone-azote."
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
        "explanation": "Première étape: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un électrophile peut ensuite réagir avec ce carbone.",
        "correct": true,
        "explanation": "Deuxième étape: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une nouvelle liaison C-E peut être créée.",
        "correct": true,
        "explanation": "Fonctionnalisation alpha: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le carbone carbonylé reste le centre électrophile de la fonction.",
        "correct": true,
        "explanation": "Les deux réactivités coexistent selon les conditions."
      }
    ],
    "explanation": "deux centres de réactivité complémentaires: carbonyle électrophile et position alpha nucléophile sous base forte."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans l'application aux sucres, selon le modèle simplifié du document:",
    "choices": [
      {
        "content": "Le fructose est relié à une fonction cétone linéaire.",
        "correct": true,
        "explanation": "Forme présentée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Il est classé comme non réducteur.",
        "correct": true,
        "explanation": "Modèle local: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La formation d’un hémiacétal cyclique exige la suppression de tous les groupes hydroxyle du sucre.",
        "correct": false,
        "explanation": "Au contraire, une fonction alcool participe à la fermeture du cycle."
      },
      {
        "content": "Le glucose est relié à une fonction aldéhyde linéaire.",
        "correct": true,
        "explanation": "Forme présentée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Il est classé comme réducteur.",
        "correct": true,
        "explanation": "Fonction aldéhyde oxydable: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La banque conserve ce classement comme donnée et ne l'étend pas à d'autres contextes."
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
        "explanation": "Produit: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Passage d'une forme linéaire à une forme cyclique.",
        "correct": true,
        "explanation": "Conséquence: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La formation d’un hémiacétal cyclique exige la suppression de tous les groupes hydroxyle du sucre.",
        "correct": false,
        "explanation": "Au contraire, une fonction alcool participe à la fermeture du cycle."
      }
    ],
    "explanation": "La cyclisation constitue l'application structurale finale du chapitre."
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
        "explanation": "Aucune nouvelle liaison C-C: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Les deux voies de construction carbonée du chapitre passent par un nucléophile carboné."
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
        "explanation": "Polarité : cette relation est conforme à la propriété ou à la transformation décrite."
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
        "explanation": "Oxydabilité : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Cétone + NaBH4 → alcool tertiaire.",
        "correct": false,
        "explanation": "Secondaire : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Amine secondaire + carbonyle → imine.",
        "correct": false,
        "explanation": "Le produit considéré correspond bien à un ion iminium."
      },
      {
        "content": "Une cétone est décrite comme facilement oxydable.",
        "correct": false,
        "explanation": "Inerte : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le carbone alpha est toujours nucléophile même sans hydrogène.",
        "correct": false,
        "explanation": "Condition de H : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La cyclisation d'un sucre aldéhydique forme une amide.",
        "correct": false,
        "explanation": "Hémiacétal : cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Cette synthèse rassemble les transformations essentielles."
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
        "explanation": "Le chapitre souligne au contraire que la fonction acide est plus difficile à réduire."
      },
      {
        "content": "A est un aldéhyde.",
        "correct": true,
        "explanation": "La réduction du groupe fonctionnel conduit à la formation du produit correspondant."
      },
      {
        "content": "B est un alcool secondaire dans le cadre général présenté.",
        "correct": true,
        "explanation": "Aldéhyde + Grignard: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Cette séquence relie préparation de l'aldéhyde et réaction d'organomagnésien."
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
        "explanation": "Nouveau substituant: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Le bilan carboné et la classe d'alcool final permettent d'identifier la voie."
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
        "explanation": "Activation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'électrophile est ajouté dans un second temps.",
        "correct": true,
        "explanation": "Ordre: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La liaison formée implique le carbone voisin du carbonyle.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Cette transformation est différente de l'attaque d'un nucléophile sur le carbone carbonylé.",
        "correct": true,
        "explanation": "Sites et rôles inversés: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      }
    ],
    "explanation": "Le MASTER doit distinguer nettement réactivité du carbonyle et réactivité alpha."
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
        "explanation": "Le chapitre souligne au contraire que la fonction acide est plus difficile à réduire."
      },
      {
        "content": "La réduction ne peut pas donner un alcool primaire.",
        "correct": false,
        "explanation": "La relation correcte est: « La réduction peut donner un alcool primaire ». La négation proposée est donc fausse."
      },
      {
        "content": "L'oxydation d'un alcool primaire peut redonner un aldéhyde si elle est ménagée.",
        "correct": true,
        "explanation": "Préparation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une oxydation trop forte peut aller jusqu'à l'acide carboxylique.",
        "correct": true,
        "explanation": "Suroxydation: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le couple alcool primaire/aldéhyde doit être relié au contrôle du degré d'oxydation."
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
        "explanation": "RCHO: cette relation est conforme à la propriété ou à la transformation décrite."
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
        "explanation": "Les deux propriétés concordent: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Croiser plusieurs propriétés permet d'identifier la fonction sans structure complète."
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
        "explanation": "Deux propriétés caractéristiques du chapitre."
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
        "explanation": "Nomenclature: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Réactivité et nomenclature convergent vers l'identification de la cétone."
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
        "explanation": "Carbones tétraédriques: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La formation d’un hémiacétal cyclique exige la suppression de tous les groupes hydroxyle du sucre.",
        "correct": false,
        "explanation": "Au contraire, une fonction alcool participe à la fermeture du cycle."
      },
      {
        "content": "La fonction du haut est un aldéhyde.",
        "correct": true,
        "explanation": "CHO: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La fonction du bas est un alcool primaire.",
        "correct": true,
        "explanation": "CH2OH: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La lecture fonctionnelle de la projection doit être reliée à la cyclisation et à la géométrie."
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
        "explanation": "Structure 3D: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Elle qualifie la représentation en perspective de plus fidèle à la réalité.",
        "correct": true,
        "explanation": "Cette relation constitue l’un des éléments directement utiles pour prévoir le produit de la réaction."
      },
      {
        "content": "La cyclisation forme une structure qui occupe l'espace.",
        "correct": true,
        "explanation": "Conséquence: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La projection linéaire encode déjà des liaisons vers l'observateur et vers l'arrière.",
        "correct": true,
        "explanation": "Convention: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La formation d’un hémiacétal cyclique exige la suppression de tous les groupes hydroxyle du sucre.",
        "correct": false,
        "explanation": "Au contraire, une fonction alcool participe à la fermeture du cycle."
      }
    ],
    "explanation": "La dernière partie du chapitre insiste autant sur la chimie fonctionnelle que sur la représentation spatiale."
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
    "explanation": "Le support associe amine secondaire et composé carbonylé à un iminium."
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
        "explanation": "Préparation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Aldéhyde → alcool primaire par réduction.",
        "correct": true,
        "explanation": "La présence du groupe fonctionnel conditionne la réactivité et les propriétés de cette famille."
      },
      {
        "content": "Le carbone carbonylé électrophile peut recevoir un nucléophile.",
        "correct": true,
        "explanation": "Propriété: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le carbone alpha portant H peut, après base forte, réagir avec un électrophile.",
        "correct": true,
        "explanation": "La présence du groupe fonctionnel conditionne la réactivité et les propriétés de cette famille."
      }
    ],
    "explanation": "Le chapitre s'organise autour de la réversibilité de certaines transformations et de deux centres de réactivité."
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
        "explanation": "Rappel : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La propanone est l'acétone.",
        "correct": true,
        "explanation": "Rappel : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un aldéhyde est oxydable en acide carboxylique.",
        "correct": true,
        "explanation": "Oxydabilité : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une cétone + organomagnésien donne un alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Le réactif organomagnésien apporte un groupe carboné nucléophile qui crée une nouvelle liaison carbone-carbone."
      },
      {
        "content": "La cyclisation d'un sucre aldéhydique forme un hémiacétal.",
        "correct": true,
        "explanation": "Application : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un aldéhyde + NaBH4 donne un alcool secondaire.",
        "correct": false,
        "explanation": "Primaire : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une cétone est décrite comme oxydable en acide.",
        "correct": false,
        "explanation": "Inerte : cette relation est conforme à la propriété ou à la transformation décrite."
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
        "explanation": "Il est classé réducteur : cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La dernière question mobilise les cinq axes du chapitre sans dépendre d'une seule section."
  }
];
