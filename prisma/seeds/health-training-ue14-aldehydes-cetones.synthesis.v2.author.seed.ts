import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.6 – Synthèse
 */

export const UE14_CH10_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles associations fondamentales du chapitre sont exactes ?",
    "choices": [
      {
        "content": "Alcool primaire + oxydation ménagée → aldéhyde.",
        "correct": true,
        "explanation": "Préparation."
      },
      {
        "content": "Alcool secondaire + oxydation → cétone.",
        "correct": true,
        "explanation": "Préparation."
      },
      {
        "content": "Aldéhyde + réduction par hydrure → alcool primaire.",
        "correct": true,
        "explanation": "Réduction."
      },
      {
        "content": "Cétone + réduction par hydrure → alcool secondaire.",
        "correct": true,
        "explanation": "Réduction."
      }
    ],
    "explanation": "Ces quatre transformations relient directement alcools et composés carbonylés."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare aldéhyde et cétone. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les deux possèdent un carbonyle.",
        "correct": true,
        "explanation": "Point commun."
      },
      {
        "content": "Le carbone carbonylé est électrophile dans les deux cas.",
        "correct": true,
        "explanation": "Polarité."
      },
      {
        "content": "L'aldéhyde est oxydable en acide carboxylique.",
        "correct": true,
        "explanation": "Oxydabilité."
      },
      {
        "content": "La cétone est décrite comme inerte à l'oxydation dans la fiche.",
        "correct": true,
        "explanation": "Contraste."
      }
    ],
    "explanation": "Le chapitre oppose surtout leur position de carbonyle et leur oxydabilité, tout en partageant une polarité commune."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un composé carbonylé réagit avec $\\ce{NaBH4}$ puis, dans une autre expérience, avec un organomagnésien. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "NaBH4 apporte un hydrure nucléophile.",
        "correct": true,
        "explanation": "Réduction."
      },
      {
        "content": "L'organomagnésien apporte un fragment carboné nucléophile.",
        "correct": true,
        "explanation": "Addition C-C."
      },
      {
        "content": "Le carbone carbonylé est le centre électrophile attaqué dans les deux cas.",
        "correct": true,
        "explanation": "Polarité commune."
      },
      {
        "content": "Seul l'organomagnésien crée une nouvelle liaison C-C.",
        "correct": true,
        "explanation": "Différence essentielle."
      }
    ],
    "explanation": "Les deux réactifs sont nucléophiles mais n'ont pas le même impact sur le squelette carboné."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On souhaite préparer un aldéhyde à partir d'un dérivé d'acide. Quelles propositions sont conformes à la fiche ?",
    "choices": [
      {
        "content": "La réduction directe d'un acide carboxylique est difficile à arrêter au stade aldéhyde.",
        "correct": true,
        "explanation": "Conditions fortes."
      },
      {
        "content": "L'aldéhyde peut être réduit ensuite en alcool si les conditions sont fortes.",
        "correct": true,
        "explanation": "Difficulté d'isolement."
      },
      {
        "content": "Un chlorure d'acyle peut être réduit en aldéhyde.",
        "correct": true,
        "explanation": "Voie sélective présentée."
      },
      {
        "content": "L'activation de l'acide peut faciliter l'accès au stade aldéhyde.",
        "correct": true,
        "explanation": "Conclusion du support."
      }
    ],
    "explanation": "La préparation d'un aldéhyde à partir d'un dérivé d'acide repose sur la notion d'activation et de sélectivité."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des réactions avec les amines :",
    "choices": [
      {
        "content": "Amine primaire + aldéhyde ou cétone → imine.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Amine secondaire + aldéhyde ou cétone → iminium.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "L'amine est nucléophile.",
        "correct": true,
        "explanation": "Rôle."
      },
      {
        "content": "L'élimination d'eau est indiquée pour pousser la réaction dans le modèle.",
        "correct": true,
        "explanation": "Condition."
      }
    ],
    "explanation": "La classe de l'amine détermine le type de produit carbone-azote."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un carbone alpha d'un aldéhyde ou d'une cétone porte un hydrogène. Quelles propositions sont cohérentes ?",
    "choices": [
      {
        "content": "Une base forte peut mettre en valeur son caractère nucléophile.",
        "correct": true,
        "explanation": "Première étape."
      },
      {
        "content": "Un électrophile peut ensuite réagir avec ce carbone.",
        "correct": true,
        "explanation": "Deuxième étape."
      },
      {
        "content": "Une nouvelle liaison C-E peut être créée.",
        "correct": true,
        "explanation": "Fonctionnalisation alpha."
      },
      {
        "content": "Le carbone carbonylé reste le centre électrophile de la fonction.",
        "correct": true,
        "explanation": "Les deux réactivités coexistent selon les conditions."
      }
    ],
    "explanation": "La fiche présente deux centres de réactivité complémentaires : carbonyle électrophile et position alpha nucléophile sous base forte."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans l'application aux sucres, selon le modèle simplifié du document :",
    "choices": [
      {
        "content": "Le glucose est relié à une fonction aldéhyde linéaire.",
        "correct": true,
        "explanation": "Forme présentée."
      },
      {
        "content": "Il est classé comme réducteur.",
        "correct": true,
        "explanation": "Fonction aldéhyde oxydable."
      },
      {
        "content": "Le fructose est relié à une fonction cétone linéaire.",
        "correct": true,
        "explanation": "Forme présentée."
      },
      {
        "content": "Il est classé comme non réducteur dans cette fiche.",
        "correct": true,
        "explanation": "Modèle local."
      }
    ],
    "explanation": "La banque conserve ce classement comme donnée du support et ne l'étend pas à d'autres contextes."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La cyclisation d'un sucre aldéhydique permet de relier quelles notions ?",
    "choices": [
      {
        "content": "Fonction aldéhyde.",
        "correct": true,
        "explanation": "Partenaire carbonylé."
      },
      {
        "content": "Fonction alcool.",
        "correct": true,
        "explanation": "Partenaire intramoléculaire."
      },
      {
        "content": "Formation d'un hémiacétal.",
        "correct": true,
        "explanation": "Produit."
      },
      {
        "content": "Passage d'une forme linéaire à une forme cyclique.",
        "correct": true,
        "explanation": "Conséquence."
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
      },
      {
        "content": "Oxydation d'un aldéhyde en acide.",
        "correct": false,
        "explanation": "Aucune nouvelle liaison C-C."
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
        "explanation": "Polarité."
      },
      {
        "content": "Aldéhyde + NaBH4 → alcool primaire.",
        "correct": true,
        "explanation": "Réduction."
      },
      {
        "content": "Cétone + organomagnésien → alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Grignard."
      },
      {
        "content": "Amine primaire + carbonyle → imine.",
        "correct": true,
        "explanation": "Condensation."
      },
      {
        "content": "Aldéhyde + oxydation → acide carboxylique.",
        "correct": true,
        "explanation": "Oxydabilité."
      },
      {
        "content": "Cétone + NaBH4 → alcool tertiaire.",
        "correct": false,
        "explanation": "Secondaire."
      },
      {
        "content": "Amine secondaire + carbonyle → imine.",
        "correct": false,
        "explanation": "Iminium."
      },
      {
        "content": "Une cétone est décrite comme facilement oxydable dans la fiche.",
        "correct": false,
        "explanation": "Inerte."
      },
      {
        "content": "Le carbone alpha est toujours nucléophile même sans hydrogène.",
        "correct": false,
        "explanation": "Condition de H."
      },
      {
        "content": "La cyclisation d'un sucre aldéhydique forme une amide.",
        "correct": false,
        "explanation": "Hémiacétal."
      }
    ],
    "explanation": "Cette synthèse rassemble les transformations essentielles."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une séquence comporte : chlorure d'acyle → composé A par réduction contrôlée ; puis A + organomagnésien → composé B après hydrolyse. Quelles propositions sont cohérentes ?",
    "choices": [
      {
        "content": "A est un aldéhyde.",
        "correct": true,
        "explanation": "Réduction du chlorure d'acyle."
      },
      {
        "content": "B est un alcool secondaire dans le cadre général présenté.",
        "correct": true,
        "explanation": "Aldéhyde + Grignard."
      },
      {
        "content": "La seconde étape crée une liaison C-C.",
        "correct": true,
        "explanation": "Addition du Grignard."
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
    "question": "Une cétone est traitée soit par NaBH4, soit par un organomagnésien. Quel raisonnement permet de distinguer les produits ?",
    "choices": [
      {
        "content": "NaBH4 donne un alcool secondaire.",
        "correct": true,
        "explanation": "Réduction."
      },
      {
        "content": "Le Grignard donne un alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Addition carbonée."
      },
      {
        "content": "Le Grignard augmente le squelette carboné.",
        "correct": true,
        "explanation": "Nouveau substituant."
      },
      {
        "content": "NaBH4 et Grignard ont exactement le même bilan carboné.",
        "correct": false,
        "explanation": "Seul le Grignard ajoute du carbone."
      }
    ],
    "explanation": "Le bilan carboné et la classe d'alcool final permettent d'identifier la voie."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé carbonylé porte un CH2 alpha. Il est traité par base forte puis par un électrophile. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le CH2 alpha devient le centre nucléophile mobilisé.",
        "correct": true,
        "explanation": "Activation."
      },
      {
        "content": "L'électrophile est ajouté dans un second temps.",
        "correct": true,
        "explanation": "Ordre."
      },
      {
        "content": "La liaison formée implique le carbone voisin du carbonyle.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "Cette transformation est différente de l'attaque d'un nucléophile sur le carbone carbonylé.",
        "correct": true,
        "explanation": "Sites et rôles inversés."
      }
    ],
    "explanation": "Le MASTER doit distinguer nettement réactivité du carbonyle et réactivité alpha."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un aldéhyde est soumis successivement à une réduction puis à une oxydation adaptée. Quelles propositions sont cohérentes ?",
    "choices": [
      {
        "content": "La réduction peut donner un alcool primaire.",
        "correct": true,
        "explanation": "Hydrure."
      },
      {
        "content": "L'oxydation d'un alcool primaire peut redonner un aldéhyde si elle est ménagée.",
        "correct": true,
        "explanation": "Préparation."
      },
      {
        "content": "Une oxydation trop forte peut aller jusqu'à l'acide carboxylique.",
        "correct": true,
        "explanation": "Suroxydation."
      },
      {
        "content": "La cétone est obligatoirement intermédiaire.",
        "correct": false,
        "explanation": "Pas dans ce couple."
      }
    ],
    "explanation": "Le couple alcool primaire/aldéhyde doit être relié au contrôle du degré d'oxydation."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un produit carbonylé est oxydable en acide carboxylique et réagit avec NaBH4 en donnant un alcool primaire. Quelle famille est compatible ?",
    "choices": [
      {
        "content": "Aldéhyde.",
        "correct": true,
        "explanation": "Les deux propriétés concordent."
      },
      {
        "content": "Cétone dans le modèle de la fiche.",
        "correct": false,
        "explanation": "Elle est inerte à l'oxydation et sa réduction donne un alcool secondaire."
      },
      {
        "content": "Le carbone carbonylé porte un hydrogène dans le motif général.",
        "correct": true,
        "explanation": "RCHO."
      },
      {
        "content": "Le suffixe de nomenclature est -al.",
        "correct": true,
        "explanation": "Aldéhyde."
      }
    ],
    "explanation": "Croiser plusieurs propriétés permet d'identifier la fonction sans structure complète."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un produit carbonylé est inerte à l'oxydation dans le modèle du support et sa réduction donne un alcool secondaire. Quelle fonction est cohérente ?",
    "choices": [
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
        "content": "Le carbone carbonylé est lié à deux substituants carbonés.",
        "correct": true,
        "explanation": "Motif de cétone."
      },
      {
        "content": "Le suffixe est -one.",
        "correct": true,
        "explanation": "Nomenclature."
      }
    ],
    "explanation": "Réactivité et nomenclature convergent vers l'identification de la cétone."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Dans le modèle de la fiche appliqué aux sucres, une forme linéaire porte CHO en haut et CH2OH en bas. Quelles propositions sont cohérentes ?",
    "choices": [
      {
        "content": "La fonction du haut est un aldéhyde.",
        "correct": true,
        "explanation": "CHO."
      },
      {
        "content": "La fonction du bas est un alcool primaire.",
        "correct": true,
        "explanation": "CH2OH."
      },
      {
        "content": "Le sucre peut cycliser par formation d'un hémiacétal.",
        "correct": true,
        "explanation": "Réaction d'un OH avec l'aldéhyde."
      },
      {
        "content": "La projection doit être comprise comme une convention d'une structure tridimensionnelle.",
        "correct": true,
        "explanation": "Carbones tétraédriques."
      }
    ],
    "explanation": "La lecture fonctionnelle de la projection doit être reliée à la cyclisation et à la géométrie."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Pourquoi la forme cyclique d'un sucre ne doit-elle pas être comprise comme un simple dessin plan ?",
    "choices": [
      {
        "content": "La fiche rappelle la géométrie tétraédrique des carbones.",
        "correct": true,
        "explanation": "Structure 3D."
      },
      {
        "content": "Elle qualifie la représentation en perspective de plus fidèle à la réalité.",
        "correct": true,
        "explanation": "Point explicite."
      },
      {
        "content": "La cyclisation forme une structure qui occupe l'espace.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "La projection linéaire encode déjà des liaisons vers l'observateur et vers l'arrière.",
        "correct": true,
        "explanation": "Convention."
      }
    ],
    "explanation": "La dernière partie du chapitre insiste autant sur la chimie fonctionnelle que sur la représentation spatiale."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel produit fonctionnel obtient-on après réaction d'une amine secondaire avec un aldéhyde ou une cétone selon la fiche ?",
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
    "question": "Dans la séquence de fonctionnalisation alpha décrite dans la fiche, combien d'étapes principales sont explicitement indiquées : base forte puis électrophile ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "La fiche présente deux étapes : 1) base forte, 2) réaction avec l'électrophile."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions relient correctement préparation, propriétés et réactivité ?",
    "choices": [
      {
        "content": "Alcool primaire → aldéhyde par oxydation contrôlée.",
        "correct": true,
        "explanation": "Préparation."
      },
      {
        "content": "Aldéhyde → alcool primaire par réduction.",
        "correct": true,
        "explanation": "Réactivité."
      },
      {
        "content": "Le carbone carbonylé électrophile peut recevoir un nucléophile.",
        "correct": true,
        "explanation": "Propriété."
      },
      {
        "content": "Le carbone alpha portant H peut, après base forte, réagir avec un électrophile.",
        "correct": true,
        "explanation": "Réactivité complémentaire."
      }
    ],
    "explanation": "Le chapitre s'organise autour de la réversibilité de certaines transformations et de deux centres de réactivité."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes selon la fiche.",
    "choices": [
      {
        "content": "Le méthanal est le formaldéhyde.",
        "correct": true,
        "explanation": "Rappel."
      },
      {
        "content": "La propanone est l'acétone.",
        "correct": true,
        "explanation": "Rappel."
      },
      {
        "content": "Un aldéhyde est oxydable en acide carboxylique.",
        "correct": true,
        "explanation": "Oxydabilité."
      },
      {
        "content": "Une cétone + organomagnésien donne un alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Grignard."
      },
      {
        "content": "La cyclisation d'un sucre aldéhydique forme un hémiacétal.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "Un aldéhyde + NaBH4 donne un alcool secondaire.",
        "correct": false,
        "explanation": "Primaire."
      },
      {
        "content": "Une cétone est décrite comme oxydable en acide dans la fiche.",
        "correct": false,
        "explanation": "Inerte."
      },
      {
        "content": "Amine primaire + carbonyle → iminium.",
        "correct": false,
        "explanation": "Imine."
      },
      {
        "content": "Le carbone carbonylé est nucléophile.",
        "correct": false,
        "explanation": "Électrophile."
      },
      {
        "content": "Dans le modèle de la fiche, le glucose est classé non réducteur.",
        "correct": false,
        "explanation": "Il est classé réducteur."
      }
    ],
    "explanation": "La dernière question mobilise les cinq axes du chapitre sans dépendre d'une seule section."
  }
];
