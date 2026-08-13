import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie — Les eicosanoïdes — Synthèse
 * Banque éditoriale auteur — à intégrer via le helper partagé du repo.
 */

export const UE14_BIOCH_CH5_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le schéma général des eicosanoïdes associe :",
    "choices": [
      {
        "content": "Acide arachidonique → COX → prostanoïdes.",
        "correct": true,
        "explanation": "Branche."
      },
      {
        "content": "Acide arachidonique → lipoxygénases → leucotriènes/lipoxines.",
        "correct": true,
        "explanation": "Branche."
      },
      {
        "content": "Un précurseur C20:4 n-6.",
        "correct": true,
        "explanation": "Arachidonique."
      },
      {
        "content": "Le glycogène comme précurseur lipidique unique.",
        "correct": false,
        "explanation": "Incorrect."
      }
    ],
    "explanation": "La synthèse commence par le branchement central du chapitre."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une prostaglandine de série 2 :",
    "choices": [
      {
        "content": "Possède deux doubles liaisons sur les chaînes latérales dans le modèle.",
        "correct": true,
        "explanation": "Série."
      },
      {
        "content": "Est reliée à l’acide arachidonique.",
        "correct": true,
        "explanation": "Précurseur."
      },
      {
        "content": "Appartient à la série la plus fréquente du support.",
        "correct": true,
        "explanation": "Fréquence."
      },
      {
        "content": "Est nécessairement un leucotriène.",
        "correct": false,
        "explanation": "Famille différente."
      }
    ],
    "explanation": "La série 2 domine les exemples du chapitre."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans le vaisseau sanguin :",
    "choices": [
      {
        "content": "TXA₂ est relié aux plaquettes.",
        "correct": true,
        "explanation": "Origine."
      },
      {
        "content": "PGI₂ est reliée à l’endothélium.",
        "correct": true,
        "explanation": "Origine."
      },
      {
        "content": "Leurs effets sur agrégation et tonus vasculaire sont antagonistes.",
        "correct": true,
        "explanation": "Fonctions."
      },
      {
        "content": "Les deux sont proagrégants.",
        "correct": false,
        "explanation": "PGI₂ est antiagrégante."
      }
    ],
    "explanation": "Le couple TXA₂/PGI₂ est une synthèse fonctionnelle majeure."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Les exemples thérapeutiques du chapitre comprennent :",
    "choices": [
      {
        "content": "Misoprostol, analogue de PGE₁.",
        "correct": true,
        "explanation": "Exemple."
      },
      {
        "content": "Aspirine, inhibiteur de COX.",
        "correct": true,
        "explanation": "Exemple."
      },
      {
        "content": "Ibuprofène, inhibiteur de COX.",
        "correct": true,
        "explanation": "Exemple."
      },
      {
        "content": "Lactase comme inhibiteur de COX.",
        "correct": false,
        "explanation": "Enzyme digestive, sans rapport."
      }
    ],
    "explanation": "Le chapitre associe directement certaines molécules pharmacologiques à la voie des eicosanoïdes."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des leucotriènes et de leurs effets biologiques dans le support :",
    "choices": [
      {
        "content": "Peuvent provoquer une bronchoconstriction.",
        "correct": true,
        "explanation": "Effet."
      },
      {
        "content": "Peuvent participer au chimiotactisme.",
        "correct": true,
        "explanation": "Effet immunitaire."
      },
      {
        "content": "Peuvent être produits notamment par des leucocytes et mastocytes.",
        "correct": true,
        "explanation": "Cellules."
      },
      {
        "content": "Sont des glucides de réserve.",
        "correct": false,
        "explanation": "Dérivés lipidiques."
      }
    ],
    "explanation": "Les leucotriènes ont des fonctions musculaires lisses et immunitaires."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "LTA₄ :",
    "choices": [
      {
        "content": "Est produit via la 5-lipoxygénase.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "Possède un pont époxyde C5–C6.",
        "correct": true,
        "explanation": "Structure."
      },
      {
        "content": "Peut conduire à plusieurs produits en aval.",
        "correct": true,
        "explanation": "Carrefour."
      },
      {
        "content": "Est une prostacycline de voie COX.",
        "correct": false,
        "explanation": "Leucotriène/lipoxygénase."
      }
    ],
    "explanation": "LTA₄ relie structure et branchement métabolique."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L’aspirine à faible dose dans la fiche :",
    "choices": [
      {
        "content": "Inhibe la voie COX.",
        "correct": true,
        "explanation": "Mécanisme."
      },
      {
        "content": "Diminue la synthèse de thromboxanes dans le modèle.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "A un effet antiagrégant plaquettaire cité.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "Stimule directement l’agrégation via TXA₂.",
        "correct": false,
        "explanation": "Effet contraire."
      }
    ],
    "explanation": "Le mécanisme est présenté sous une forme volontairement simplifiée."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est le précurseur 20:4 n-6 central du chapitre ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide arachidonique",
        "arachidonique",
        "l'acide arachidonique",
        "l’acide arachidonique"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Il s’agit de l’acide arachidonique."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux médiateurs antagonistes du couple vasculaire majeur du chapitre.",
    "choices": [
      {
        "content": "TXA₂.",
        "correct": true,
        "explanation": "Plaquettes, vasoconstricteur/proagrégant."
      },
      {
        "content": "PGI₂.",
        "correct": true,
        "explanation": "Endothélium, vasodilatatrice/antiagrégante."
      },
      {
        "content": "Lactose.",
        "correct": false,
        "explanation": "Glucide."
      },
      {
        "content": "Glycogène.",
        "correct": false,
        "explanation": "Polyoside de réserve."
      }
    ],
    "explanation": "TXA₂ et PGI₂ constituent le couple antagoniste de référence."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Pour cette synthèse appliquée des eicosanoïdes, sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "Arachidonique = 20:4 n-6.",
        "correct": true,
        "explanation": "Précurseur."
      },
      {
        "content": "COX conduit aux prostanoïdes.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "TXA₂ est proagrégant.",
        "correct": true,
        "explanation": "Effet."
      },
      {
        "content": "PGI₂ est antiagrégante.",
        "correct": true,
        "explanation": "Effet."
      },
      {
        "content": "LTA₄ est formé par la 5-lipoxygénase.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "PGI₂ est produite principalement par les plaquettes.",
        "correct": false,
        "explanation": "Endothélium."
      },
      {
        "content": "TXA₂ est vasodilatateur.",
        "correct": false,
        "explanation": "Vasoconstricteur."
      },
      {
        "content": "Le misoprostol est une glycosidase.",
        "correct": false,
        "explanation": "Analogue PGE₁."
      },
      {
        "content": "Les leucotriènes sont produits par COX.",
        "correct": false,
        "explanation": "Lipoxygénases."
      },
      {
        "content": "L’acide arachidonique est saturé.",
        "correct": false,
        "explanation": "20:4."
      }
    ],
    "explanation": "Cette synthèse PRACTICE couvre précurseur, voies et principaux médiateurs."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une plaquette produit un médiateur à demi-vie ~30 s qui favorise agrégation et vasoconstriction. Il s’agit :",
    "choices": [
      {
        "content": "De TXA₂.",
        "correct": true,
        "explanation": "Tous les indices."
      },
      {
        "content": "D’un prostanoïde.",
        "correct": true,
        "explanation": "Famille."
      },
      {
        "content": "D’un produit en aval de COX.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "De PGI₂.",
        "correct": false,
        "explanation": "Effets opposés."
      }
    ],
    "explanation": "Le contexte regroupe origine cellulaire, demi-vie, fonction et voie."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une cellule endothéliale produit un médiateur à demi-vie ~2–3 min qui est vasodilatateur et antiagrégant. Il s’agit :",
    "choices": [
      {
        "content": "De PGI₂.",
        "correct": true,
        "explanation": "Tous les indices."
      },
      {
        "content": "D’une prostacycline.",
        "correct": true,
        "explanation": "Groupe I."
      },
      {
        "content": "D’un prostanoïde.",
        "correct": true,
        "explanation": "Famille."
      },
      {
        "content": "De TXA₂.",
        "correct": false,
        "explanation": "Plaquettaire et proagrégant."
      }
    ],
    "explanation": "PGI₂ est l’élément endothélial du couple antagoniste."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une femme reçoit du misoprostol pour faciliter un déclenchement obstétrical. Les connaissances du chapitre permettent de dire :",
    "choices": [
      {
        "content": "Le misoprostol est un analogue synthétique de PGE₁.",
        "correct": true,
        "explanation": "Nature."
      },
      {
        "content": "Il favorise la contraction utérine.",
        "correct": true,
        "explanation": "Effet."
      },
      {
        "content": "Il favorise l’assouplissement du col dans ce contexte.",
        "correct": true,
        "explanation": "Effet."
      },
      {
        "content": "Il s’agit d’un leucotriène produit par la 5-lipoxygénase.",
        "correct": false,
        "explanation": "Analogue de prostaglandine."
      }
    ],
    "explanation": "Le contexte clinique reste strictement celui explicitement enseigné."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un traitement inhibe COX. Dans le schéma du cours, cela peut réduire :",
    "choices": [
      {
        "content": "La synthèse des prostaglandines.",
        "correct": true,
        "explanation": "Produits COX."
      },
      {
        "content": "La synthèse des thromboxanes.",
        "correct": true,
        "explanation": "Produits COX."
      },
      {
        "content": "La production globale de prostanoïdes.",
        "correct": true,
        "explanation": "Famille."
      },
      {
        "content": "La formation de LTA₄ par la 5-lipoxygénase par ce seul mécanisme.",
        "correct": false,
        "explanation": "Voie distincte."
      }
    ],
    "explanation": "La connaissance du branchement évite de confondre COX et lipoxygénases."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un médiateur C20 possède quatre doubles liaisons dont trois conjuguées et un pont époxyde C5–C6. On peut conclure :",
    "choices": [
      {
        "content": "Il s’agit de LTA₄.",
        "correct": true,
        "explanation": "Structure."
      },
      {
        "content": "Il dérive de l’acide arachidonique.",
        "correct": true,
        "explanation": "Précurseur."
      },
      {
        "content": "Sa formation fait intervenir la 5-lipoxygénase.",
        "correct": true,
        "explanation": "Enzyme."
      },
      {
        "content": "Il s’agit de PGI₂.",
        "correct": false,
        "explanation": "Prostacycline de voie COX."
      }
    ],
    "explanation": "La structure permet d’identifier LTA₄ et sa voie."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un eicosanoïde participe au chimiotactisme et à la bronchoconstriction. Le profil correspond particulièrement :",
    "choices": [
      {
        "content": "À un leucotriène.",
        "correct": true,
        "explanation": "Effets cités."
      },
      {
        "content": "À un médiateur pouvant être produit par des leucocytes/mastocytes.",
        "correct": true,
        "explanation": "Cellules."
      },
      {
        "content": "À une branche lipoxygénase.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "À un triglycéride de réserve.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "Les leucotriènes relient réponses immunitaires et effets sur muscles lisses."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Dans la synthèse finale, combien de doubles liaisons porte le précurseur arachidonique noté 20:4 ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "Le 20:4 contient quatre doubles liaisons."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel tripeptide est associé à la branche LTC₄ → LTD₄ → LTE₄ ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glutathion",
        "le glutathion"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le glutathion est incorporé puis progressivement clivé dans cette branche."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un étudiant affirme que « tous les prostanoïdes ont le même effet ». Le chapitre permet de corriger :",
    "choices": [
      {
        "content": "PGF₂α et PGE₂ peuvent avoir des effets différents ou contraires.",
        "correct": true,
        "explanation": "Exemple."
      },
      {
        "content": "TXA₂ et PGI₂ ont des effets antagonistes.",
        "correct": true,
        "explanation": "Exemple majeur."
      },
      {
        "content": "La fixation sur des récepteurs spécifiques contribue à la diversité des réponses.",
        "correct": true,
        "explanation": "Mécanisme général."
      },
      {
        "content": "L’appartenance à une même famille impose une fonction unique.",
        "correct": false,
        "explanation": "Le chapitre montre l’inverse."
      }
    ],
    "explanation": "La diversité fonctionnelle est un message central du chapitre."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Le caractère très court de la demi-vie des prostanoïdes :",
    "choices": [
      {
        "content": "Est cohérent avec leur rôle de médiateurs locaux.",
        "correct": true,
        "explanation": "Lien."
      },
      {
        "content": "Est illustré par TXA₂ ~30 s et PGI₂ ~2–3 min.",
        "correct": true,
        "explanation": "Exemples."
      },
      {
        "content": "Limite l’idée d’une action circulante prolongée.",
        "correct": true,
        "explanation": "Conséquence générale."
      },
      {
        "content": "Signifie qu’ils sont stockés pendant plusieurs années dans le plasma.",
        "correct": false,
        "explanation": "Contradictoire."
      }
    ],
    "explanation": "Les valeurs de demi-vie renforcent la notion de signal local."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Sélectionnez exactement les trois associations thérapeutiques ou physiopathologiques conformes au support.",
    "choices": [
      {
        "content": "Misoprostol — analogue PGE₁ — déclenchement de l’accouchement.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "Aspirine faible dose — inhibition des thromboxanes — effet antiagrégant.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "Leucotriènes — bronchoconstriction.",
        "correct": true,
        "explanation": "Effet cité."
      },
      {
        "content": "PGI₂ — agrégation plaquettaire stimulée.",
        "correct": false,
        "explanation": "PGI₂ inhibe l’agrégation."
      }
    ],
    "explanation": "Ces associations donnent un contexte santé directement issu du cours."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Pour la synthèse finale de maîtrise des eicosanoïdes, sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "L’acide arachidonique est 20:4 n-6.",
        "correct": true,
        "explanation": "Précurseur."
      },
      {
        "content": "La série 2 des prostaglandines est la plus fréquente dans la fiche.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "TXA₂ est proagrégant et vasoconstricteur.",
        "correct": true,
        "explanation": "Effets."
      },
      {
        "content": "PGI₂ est antiagrégante et vasodilatatrice.",
        "correct": true,
        "explanation": "Effets."
      },
      {
        "content": "LTA₄ est produit par la 5-lipoxygénase.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "COX produit directement tous les leucotriènes.",
        "correct": false,
        "explanation": "Lipoxygénases."
      },
      {
        "content": "Le misoprostol est un thromboxane naturel.",
        "correct": false,
        "explanation": "Analogue PGE₁."
      },
      {
        "content": "PGI₂ est produite principalement par les plaquettes.",
        "correct": false,
        "explanation": "Endothélium."
      },
      {
        "content": "LTA₄ ne peut donner aucun autre produit.",
        "correct": false,
        "explanation": "Carrefour."
      },
      {
        "content": "Le glutathion n’intervient jamais dans les leucotriènes.",
        "correct": false,
        "explanation": "Il intervient dans la branche C4/D4/E4."
      }
    ],
    "explanation": "Le MASTER final mobilise structure, voies, effets et applications sans sortir du support."
  }
];
