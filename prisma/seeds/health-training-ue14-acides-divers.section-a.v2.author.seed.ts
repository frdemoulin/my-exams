import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.7 – Section A – Acides carboxyliques : acidité, nomenclature et dérivés activés
 */

export const UE14_CH11_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Selon la fiche, quelles propositions décrivent un acide ?",
    "choices": [
      {
        "content": "Une espèce pouvant libérer un proton.",
        "correct": true,
        "explanation": "La fiche donne l'exemple RCOOH → RCOO− + H+."
      },
      {
        "content": "Une espèce pouvant capter des électrons.",
        "correct": true,
        "explanation": "La fiche donne également cette définition électronique."
      },
      {
        "content": "Une espèce nécessairement dépourvue d'hydrogène.",
        "correct": false,
        "explanation": "La libération d'un proton suppose au contraire un proton mobile dans le premier modèle."
      },
      {
        "content": "Une espèce définie uniquement par la fonction carboxylique.",
        "correct": false,
        "explanation": "La fiche précise que l'acidité dépasse la seule désignation de la fonction carboxylique."
      }
    ],
    "explanation": "La fiche juxtapose une définition protonique et une définition électronique de l'acide."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel bilan illustre la libération d'un proton par un acide carboxylique ?",
    "choices": [
      {
        "content": "$\\mathrm{RCOOH \\rightarrow RCOO^- + H^+}$.",
        "correct": true,
        "explanation": "C'est le bilan donné dans la fiche."
      },
      {
        "content": "$\\mathrm{RCOO^- \\rightarrow RCOOH + e^-}$.",
        "correct": false,
        "explanation": "Ce n'est pas le bilan présenté."
      },
      {
        "content": "$\\mathrm{ROH \\rightarrow RCOOH}$.",
        "correct": false,
        "explanation": "Il s'agit d'une transformation fonctionnelle, pas d'une dissociation acide."
      },
      {
        "content": "$\\mathrm{RCOOH \\rightarrow RNH_2}$.",
        "correct": false,
        "explanation": "Aucun lien avec la définition."
      }
    ],
    "explanation": "La dissociation RCOOH → RCOO− + H+ illustre le caractère acide protonique."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la nomenclature des premiers acides carboxyliques dans la fiche :",
    "choices": [
      {
        "content": "$\\mathrm{HCOOH}$ est l'acide méthanoïque.",
        "correct": true,
        "explanation": "Nom systématique donné."
      },
      {
        "content": "$\\mathrm{HCOOH}$ est aussi appelé acide formique.",
        "correct": true,
        "explanation": "Nom usuel donné."
      },
      {
        "content": "$\\mathrm{CH_3COOH}$ est l'acide éthanoïque.",
        "correct": true,
        "explanation": "Nom systématique donné."
      },
      {
        "content": "$\\mathrm{CH_3COOH}$ est l'acide propionique.",
        "correct": false,
        "explanation": "La fiche l'appelle acide acétique."
      }
    ],
    "explanation": "Les noms systématiques et usuels des premiers acides sont explicitement listés."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles associations sont exactes selon la fiche ?",
    "choices": [
      {
        "content": "$\\mathrm{CH_3COOH}$ → acide acétique.",
        "correct": true,
        "explanation": "Nom usuel de l'acide éthanoïque."
      },
      {
        "content": "$\\mathrm{CH_3CH_2COOH}$ → acide propanoïque.",
        "correct": true,
        "explanation": "Nom systématique."
      },
      {
        "content": "$\\mathrm{CH_3CH_2COOH}$ → acide propionique.",
        "correct": true,
        "explanation": "Nom usuel."
      },
      {
        "content": "$\\mathrm{CH_3CH_2CH_2COOH}$ → acide méthanoïque.",
        "correct": false,
        "explanation": "C'est l'acide butanoïque."
      }
    ],
    "explanation": "Le support associe systématiquement les noms usuels aux quatre premiers acides."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel est le nom usuel de l'acide butanoïque dans la fiche ?",
    "choices": [
      {
        "content": "Acide butyrique.",
        "correct": true,
        "explanation": "C'est le nom usuel donné."
      },
      {
        "content": "Acide formique.",
        "correct": false,
        "explanation": "Acide méthanoïque."
      },
      {
        "content": "Acide acétique.",
        "correct": false,
        "explanation": "Acide éthanoïque."
      },
      {
        "content": "Acide propionique.",
        "correct": false,
        "explanation": "Acide propanoïque."
      }
    ],
    "explanation": "L'acide butanoïque est aussi appelé acide butyrique."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos du carboxylate, quelles propositions sont soutenues par la fiche ?",
    "choices": [
      {
        "content": "Il résulte de la perte du proton d'un acide carboxylique.",
        "correct": true,
        "explanation": "RCOOH → RCOO− + H+."
      },
      {
        "content": "La charge négative est délocalisée entre les deux oxygènes.",
        "correct": true,
        "explanation": "Point explicitement décrit."
      },
      {
        "content": "Cette délocalisation est liée à la faible électrophilie du carbone de la fonction acide.",
        "correct": true,
        "explanation": "C'est le raisonnement proposé dans la fiche."
      },
      {
        "content": "La charge négative reste localisée sur un seul carbone.",
        "correct": false,
        "explanation": "La fiche insiste sur sa délocalisation entre les oxygènes."
      }
    ],
    "explanation": "La délocalisation de la charge du carboxylate participe au modèle de faible réactivité électrophile de l'acide."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Selon la hiérarchie d'acidité de la fiche :",
    "choices": [
      {
        "content": "Un acide carboxylique est plus acide qu'un alcool.",
        "correct": true,
        "explanation": "Hiérarchie donnée."
      },
      {
        "content": "Un alcool est plus acide qu'un hydrogène porté par un carbone voisin d'un carbonyle dans l'exemple indiqué.",
        "correct": true,
        "explanation": "La fiche classe R-COOH > R-OH > -CH2-CO-."
      },
      {
        "content": "Le groupe -CH2-CO- est placé au niveau d'acidité le plus faible des trois.",
        "correct": true,
        "explanation": "C'est le dernier terme de la hiérarchie."
      },
      {
        "content": "L'alcool est plus acide que l'acide carboxylique.",
        "correct": false,
        "explanation": "C'est l'inverse."
      }
    ],
    "explanation": "La fiche propose la hiérarchie : acide carboxylique > alcool > hydrogène du carbone voisin d'un carbonyle."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel groupe est le plus acide dans la hiérarchie simplifiée du support ?",
    "choices": [
      {
        "content": "Acide carboxylique $\\mathrm{R{-}COOH}$.",
        "correct": true,
        "explanation": "Il est classé en premier."
      },
      {
        "content": "Alcool $\\mathrm{R{-}OH}$.",
        "correct": false,
        "explanation": "Acidité moyenne dans cette comparaison."
      },
      {
        "content": "Carbone $\\mathrm{-CH_2{-}CO-}$.",
        "correct": false,
        "explanation": "Acidité faible dans cette comparaison."
      },
      {
        "content": "Alcane sans autre précision.",
        "correct": false,
        "explanation": "Il n'est pas placé en tête de la hiérarchie."
      }
    ],
    "explanation": "Le groupe carboxylique occupe le sommet de la hiérarchie proposée."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La fiche précise que l'acidité ne se limite pas aux acides carboxyliques. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'hydrogène d'un alcool possède également un caractère acide.",
        "correct": true,
        "explanation": "Exemple explicitement donné."
      },
      {
        "content": "L'acidité est liée à la mobilité d'un proton.",
        "correct": true,
        "explanation": "Formulation du support."
      },
      {
        "content": "Seule la fonction COOH peut être acide.",
        "correct": false,
        "explanation": "La fiche dit l'inverse."
      },
      {
        "content": "Comparer plusieurs fonctions permet d'établir une hiérarchie d'acidité.",
        "correct": true,
        "explanation": "Le tableau RCOOH > ROH > -CH2-CO- l'illustre."
      }
    ],
    "explanation": "Le chapitre élargit la notion d'acidité au-delà de la seule fonction carboxylique."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la réactivité électrophile d'un acide carboxylique dans le modèle de la fiche :",
    "choices": [
      {
        "content": "Le carbone est décrit comme très peu électrophile.",
        "correct": true,
        "explanation": "C'est l'intitulé de la rubrique."
      },
      {
        "content": "La délocalisation électronique entre les oxygènes contribue à cette faible réactivité.",
        "correct": true,
        "explanation": "Explication donnée."
      },
      {
        "content": "Les acides ont une faible réactivité en tant qu'électrophiles.",
        "correct": true,
        "explanation": "Point explicitement écrit."
      },
      {
        "content": "Le carbone carboxylique est présenté comme l'électrophile le plus réactif du chapitre.",
        "correct": false,
        "explanation": "La fiche dit le contraire."
      }
    ],
    "explanation": "Le modèle du support explique pourquoi on utilise des dérivés activés pour les réactions de couplage."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos d'un acide activé selon la fiche :",
    "choices": [
      {
        "content": "Il s'agit d'un dérivé de l'acide carboxylique.",
        "correct": true,
        "explanation": "Définition donnée."
      },
      {
        "content": "Le but est d'augmenter le caractère électrophile du carbone porteur de la fonction.",
        "correct": true,
        "explanation": "Conséquence explicitement indiquée."
      },
      {
        "content": "Un halogène peut remplacer le groupe OH.",
        "correct": true,
        "explanation": "Cas des halogénures d'acide."
      },
      {
        "content": "L'activation rend le carbone moins réactif dans les couplages.",
        "correct": false,
        "explanation": "Elle augmente au contraire le rendement des couplages."
      }
    ],
    "explanation": "L'activation vise à rendre le centre acyle plus électrophile et donc plus réactif."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels dérivés sont explicitement associés à l'activation des acides dans la fiche ?",
    "choices": [
      {
        "content": "Halogénures d'acide.",
        "correct": true,
        "explanation": "OH est remplacé par X, souvent Cl."
      },
      {
        "content": "Anhydrides d'acide.",
        "correct": true,
        "explanation": "OH est remplacé par un motif de type -OCOR."
      },
      {
        "content": "Esters, dans la définition élargie présentée par la fiche.",
        "correct": true,
        "explanation": "La fiche inclut OR' dans sa liste de dérivés activés."
      },
      {
        "content": "Alcanes.",
        "correct": false,
        "explanation": "Ils ne sont pas des dérivés activés de l'acide."
      }
    ],
    "explanation": "La banque reprend ici strictement la classification donnée par le support local."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel remplacement conduit à un halogénure d'acide ?",
    "choices": [
      {
        "content": "Remplacer le groupe OH de l'acide par X.",
        "correct": true,
        "explanation": "C'est la définition donnée."
      },
      {
        "content": "Remplacer le carbonyle par NH2.",
        "correct": false,
        "explanation": "Ce n'est pas l'halogénure d'acide."
      },
      {
        "content": "Ajouter H2 sans autre changement.",
        "correct": false,
        "explanation": "Ce n'est pas une activation de l'acide."
      },
      {
        "content": "Supprimer tout le groupe COOH.",
        "correct": false,
        "explanation": "Ce serait une autre transformation."
      }
    ],
    "explanation": "Un halogénure d'acide s'obtient, dans le schéma du cours, en remplaçant OH par un halogène."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des anhydrides d'acide dans le support :",
    "choices": [
      {
        "content": "Ils appartiennent aux dérivés d'acides.",
        "correct": true,
        "explanation": "Ils sont explicitement cités."
      },
      {
        "content": "Ils peuvent être représentés par un motif acyle-O-acyle.",
        "correct": true,
        "explanation": "La fiche montre le motif de type RCO-O-COR."
      },
      {
        "content": "Ils sont présentés comme des acides activés.",
        "correct": true,
        "explanation": "Classement local."
      },
      {
        "content": "Ils correspondent à un simple alcool.",
        "correct": false,
        "explanation": "Ils comportent deux fragments acyle autour d'un oxygène."
      }
    ],
    "explanation": "L'anhydride est un dérivé activé de l'acide dans la fiche."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi les nouveaux groupements des dérivés d'acides améliorent-ils les réactions de couplage selon la fiche ?",
    "choices": [
      {
        "content": "Leur électronégativité fragilise la liaison concernée.",
        "correct": true,
        "explanation": "Explication donnée."
      },
      {
        "content": "Le carbone porteur de la fonction devient plus électrophile.",
        "correct": true,
        "explanation": "Conséquence de l'activation."
      },
      {
        "content": "Le rendement des réactions de couplage augmente.",
        "correct": true,
        "explanation": "Point explicitement indiqué."
      },
      {
        "content": "Le carbone devient totalement inerte.",
        "correct": false,
        "explanation": "L'objectif est précisément d'augmenter sa réactivité."
      }
    ],
    "explanation": "La notion d'activation relie structure électronique et efficacité des couplages."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare un acide carboxylique et un dérivé activé. Quelles propositions sont cohérentes avec le support ?",
    "choices": [
      {
        "content": "L'acide carboxylique est décrit comme faiblement électrophile.",
        "correct": true,
        "explanation": "Faible réactivité."
      },
      {
        "content": "Le dérivé activé est plus électrophile.",
        "correct": true,
        "explanation": "But de l'activation."
      },
      {
        "content": "Le dérivé activé est plus adapté aux réactions de couplage.",
        "correct": true,
        "explanation": "Le rendement est amélioré."
      },
      {
        "content": "Les deux sont décrits comme strictement identiques en réactivité.",
        "correct": false,
        "explanation": "La fiche les oppose."
      }
    ],
    "explanation": "L'activation répond à la faible électrophilie de l'acide carboxylique."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quel raisonnement relie carboxylate et faible électrophilie de l'acide dans la fiche ?",
    "choices": [
      {
        "content": "Les électrons peuvent être délocalisés entre les deux oxygènes.",
        "correct": true,
        "explanation": "Schéma de la fiche."
      },
      {
        "content": "Cette délocalisation stabilise la distribution électronique.",
        "correct": true,
        "explanation": "C'est le sens du schéma proposé."
      },
      {
        "content": "Le carbone de la fonction acide est donc présenté comme peu électrophile.",
        "correct": true,
        "explanation": "Conclusion du support."
      },
      {
        "content": "La charge négative est confinée sur le proton acide.",
        "correct": false,
        "explanation": "Elle est représentée sur les oxygènes du carboxylate."
      }
    ],
    "explanation": "Le support utilise la délocalisation pour expliquer le comportement électronique de la fonction acide."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel nom usuel la fiche donne-t-elle à l'acide éthanoïque ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide acétique",
        "acide acetique",
        "acétique",
        "acetique"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "L'acide éthanoïque CH3COOH est l'acide acétique."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel nom usuel la fiche donne-t-elle à l'acide méthanoïque ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide formique",
        "formique"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "L'acide méthanoïque HCOOH est l'acide formique."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux familles de dérivés d'acide formées, dans la fiche, par remplacement du groupe OH respectivement par X et par un motif acyle-oxy.",
    "choices": [
      {
        "content": "Halogénure d'acide.",
        "correct": true,
        "explanation": "OH remplacé par X."
      },
      {
        "content": "Anhydride d'acide.",
        "correct": true,
        "explanation": "Motif acyle-O-acyle."
      },
      {
        "content": "Alcane.",
        "correct": false,
        "explanation": "Ce n'est pas un dérivé d'acide."
      },
      {
        "content": "Alcool.",
        "correct": false,
        "explanation": "Ce n'est pas la famille formée par ces remplacements."
      }
    ],
    "explanation": "Les deux familles explicitement illustrées sont halogénures et anhydrides d'acide."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes selon la fiche.",
    "choices": [
      {
        "content": "RCOOH peut libérer H+ et donner RCOO−.",
        "correct": true,
        "explanation": "Définition protonique."
      },
      {
        "content": "Une base électronique donne des électrons.",
        "correct": true,
        "explanation": "Définition utilisée ensuite dans le chapitre."
      },
      {
        "content": "Le carbone d'un acide carboxylique est décrit comme peu électrophile.",
        "correct": true,
        "explanation": "Propriété."
      },
      {
        "content": "Un dérivé activé possède un carbone plus électrophile.",
        "correct": true,
        "explanation": "Activation."
      },
      {
        "content": "Un alcool est moins acide qu'un acide carboxylique dans la hiérarchie du support.",
        "correct": true,
        "explanation": "Hiérarchie."
      },
      {
        "content": "L'acide méthanoïque est l'acide acétique.",
        "correct": false,
        "explanation": "Il s'agit de l'acide formique."
      },
      {
        "content": "Un halogénure d'acide résulte du remplacement de OH par NH2.",
        "correct": false,
        "explanation": "OH est remplacé par X."
      },
      {
        "content": "L'activation diminue le rendement des couplages.",
        "correct": false,
        "explanation": "Elle l'augmente."
      },
      {
        "content": "Le carboxylate porte une charge positive délocalisée.",
        "correct": false,
        "explanation": "La charge est négative."
      },
      {
        "content": "Seuls les acides carboxyliques peuvent présenter une acidité.",
        "correct": false,
        "explanation": "La fiche cite aussi les alcools."
      }
    ],
    "explanation": "Cette sélection consolide les repères d'acidité, de nomenclature et d'activation."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien d'acides carboxyliques successifs sont nommés explicitement dans la fiche, du méthanoïque au butanoïque ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "La fiche liste les acides méthanoïque, éthanoïque, propanoïque et butanoïque."
  }
];
