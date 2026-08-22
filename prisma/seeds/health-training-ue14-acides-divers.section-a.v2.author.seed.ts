import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.7 – Section A – Acides carboxyliques : acidité, nomenclature et dérivés activés
 */

export const UE14_CH11_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la notion d'acide, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Dans la hiérarchie donnée, un alcool est plus acide qu’un acide carboxylique.",
        "correct": false,
        "explanation": "La hiérarchie retenue place l’acide carboxylique au-dessus de l’alcool."
      },
      {
        "content": "Une espèce pouvant libérer un proton.",
        "correct": true,
        "explanation": "l'exemple RCOOH → RCOO− + H+."
      },
      {
        "content": "Une espèce pouvant capter des électrons.",
        "correct": true,
        "explanation": "Dans la définition électronique utilisée ici, un acide accepte un doublet d’électrons."
      },
      {
        "content": "Une espèce nécessairement dépourvue d'hydrogène.",
        "correct": false,
        "explanation": "La libération d'un proton suppose au contraire un proton mobile dans le premier modèle."
      },
      {
        "content": "Une espèce définie uniquement par la fonction carboxylique.",
        "correct": false,
        "explanation": "l'acidité dépasse la seule désignation de la fonction carboxylique."
      }
    ],
    "explanation": "La hiérarchie retenue place l’acide carboxylique au-dessus de l’alcool."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel bilan illustre la libération d'un proton par un acide carboxylique?",
    "choices": [
      {
        "content": "$\\mathrm{RCOOH \\rightarrow RCOO^- + H^+}$.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "$\\mathrm{RCOOH \\rightarrow RNH_2}$.",
        "correct": false,
        "explanation": "Aucun lien avec la définition."
      },
      {
        "content": "Alcane.",
        "correct": false,
        "explanation": "La déprotonation du groupe carboxyle ne transforme pas la molécule en alcane."
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
      }
    ],
    "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la nomenclature des premiers acides carboxyliques:",
    "choices": [
      {
        "content": "$\\mathrm{HCOOH}$ est l'acide méthanoïque.",
        "correct": true,
        "explanation": "$\\mathrm{HCOOH}$ est l'acide méthanoïque."
      },
      {
        "content": "$\\mathrm{HCOOH}$ est aussi appelé acide formique.",
        "correct": true,
        "explanation": "$\\ce{HCOOH}$ est l’acide méthanoïque, dont le nom usuel est acide formique."
      },
      {
        "content": "$\\mathrm{CH_3COOH}$ est l'acide éthanoïque.",
        "correct": true,
        "explanation": "$\\mathrm{CH_3COOH}$ est l'acide éthanoïque."
      },
      {
        "content": "$\\mathrm{CH_3COOH}$ est l'acide propionique.",
        "correct": false,
        "explanation": "$\\mathrm{CH_3COOH}$ est l'acide éthanoïque, aussi appelé acide acétique ; ce n'est pas l'acide propionique."
      },
      {
        "content": "L’acide méthanoïque est aussi appelé acide butyrique.",
        "correct": false,
        "explanation": "L’acide méthanoïque correspond à l’acide formique; l’acide butyrique est l’acide butanoïque."
      }
    ],
    "explanation": "$\\ce{HCOOH}$ est l’acide méthanoïque, dont le nom usuel est acide formique. $\\mathrm{CH_3COOH}$ est l'acide éthanoïque."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles associations sont exactes?",
    "choices": [
      {
        "content": "$\\mathrm{CH_3CH_2CH_2COOH}$ → acide méthanoïque.",
        "correct": false,
        "explanation": "La proposition est fausse : $\\mathrm{CH_3CH_2COOH}$ → acide propanoïque."
      },
      {
        "content": "L’acide méthanoïque est aussi appelé acide butyrique.",
        "correct": false,
        "explanation": "L’acide méthanoïque correspond à l’acide formique; l’acide butyrique est l’acide butanoïque."
      },
      {
        "content": "$\\mathrm{CH_3COOH}$ → acide acétique.",
        "correct": true,
        "explanation": "Nom usuel de l'acide éthanoïque."
      },
      {
        "content": "$\\mathrm{CH_3CH_2COOH}$ → acide propanoïque.",
        "correct": true,
        "explanation": "$\\mathrm{CH_3CH_2COOH}$ → acide propanoïque."
      },
      {
        "content": "$\\mathrm{CH_3CH_2COOH}$ → acide propionique.",
        "correct": true,
        "explanation": "$\\ce{CH3CH2COOH}$ est l’acide propanoïque, aussi appelé acide propionique."
      }
    ],
    "explanation": "$\\ce{CH3CH2COOH}$ est l’acide propanoïque, aussi appelé acide propionique. Nom usuel de l'acide éthanoïque."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel est le nom usuel de l'acide butanoïque?",
    "choices": [
      {
        "content": "Acide acétique.",
        "correct": false,
        "explanation": "L’acide acétique est le nom usuel de l’acide éthanoïque, et non de l’acide butanoïque."
      },
      {
        "content": "Acide butyrique.",
        "correct": true,
        "explanation": "C'est le nom usuel donné."
      },
      {
        "content": "Acide propionique.",
        "correct": false,
        "explanation": "L’acide propionique est le nom usuel de l’acide propanoïque, et non de l’acide butanoïque."
      },
      {
        "content": "L’acide méthanoïque est aussi appelé acide butyrique.",
        "correct": false,
        "explanation": "L’acide méthanoïque correspond à l’acide formique; l’acide butyrique est l’acide butanoïque."
      },
      {
        "content": "Acide formique.",
        "correct": false,
        "explanation": "La proposition est fausse : acide butyrique."
      }
    ],
    "explanation": "L’acide acétique est le nom usuel de l’acide éthanoïque, et non de l’acide butanoïque."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'ion carboxylate, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La déprotonation d’un acide carboxylique forme nécessairement un ammonium quaternaire.",
        "correct": false,
        "explanation": "Elle forme un ion carboxylate et ne crée aucun azote."
      },
      {
        "content": "Il résulte de la perte du proton d'un acide carboxylique.",
        "correct": true,
        "explanation": "RCOOH → RCOO− + H+."
      },
      {
        "content": "La charge négative n’est pas délocalisée entre les deux oxygènes.",
        "correct": false,
        "explanation": "La relation correcte est: « La charge négative est délocalisée entre les deux oxygènes ». La négation proposée est donc fausse."
      },
      {
        "content": "Cette délocalisation est liée à la faible électrophilie du carbone de la fonction acide.",
        "correct": true,
        "explanation": "La délocalisation électronique stabilise la fonction carboxylique et contribue à diminuer le caractère électrophile du carbone carbonylé."
      },
      {
        "content": "La charge négative reste localisée sur un seul carbone.",
        "correct": false,
        "explanation": "Dans l'ion carboxylate, la charge négative est délocalisée sur les deux atomes d'oxygène."
      }
    ],
    "explanation": "Elle forme un ion carboxylate et ne crée aucun azote."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Selon la hiérarchie d'acidité:",
    "choices": [
      {
        "content": "Le groupe -CH2-CO- est placé au niveau d'acidité le plus faible des trois.",
        "correct": true,
        "explanation": "C'est le dernier terme de la hiérarchie."
      },
      {
        "content": "L'alcool est plus acide que l'acide carboxylique.",
        "correct": false,
        "explanation": "Dans la hiérarchie retenue, l’acide carboxylique est plus acide que l’alcool."
      },
      {
        "content": "Dans la hiérarchie donnée, un acide carboxylique est plus acide qu’un alcool.",
        "correct": true,
        "explanation": "Le proton du groupe carboxyle est plus facilement libéré que celui d’un alcool dans le classement présenté."
      },
      {
        "content": "Un acide carboxylique est plus acide qu'un alcool.",
        "correct": true,
        "explanation": "Le proton du groupe carboxyle est plus facilement libéré que celui d’un alcool dans la hiérarchie étudiée."
      },
      {
        "content": "Un alcool est plus acide qu'un hydrogène porté par un carbone voisin d'un carbonyle dans l'exemple indiqué.",
        "correct": true,
        "explanation": "La classe R-COOH > R-OH > -CH2-CO-."
      }
    ],
    "explanation": "C'est le dernier terme de la hiérarchie."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel groupe est le plus acide dans la hiérarchie simplifiée?",
    "choices": [
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
        "content": "Acide carboxylique $\\mathrm{R{-}COOH}$.",
        "correct": true,
        "explanation": "Il est classé en premier."
      },
      {
        "content": "Alcane sans autre précision.",
        "correct": false,
        "explanation": "Il n'est pas placé en tête de la hiérarchie."
      },
      {
        "content": "Carbone $\\ce{-CH2-}$ voisin d’un carbonyle.",
        "correct": false,
        "explanation": "Ce site est classé moins acide que l’alcool et l’acide carboxylique dans la hiérarchie donnée."
      }
    ],
    "explanation": "Acidité moyenne dans cette comparaison."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "l'acidité ne se limite pas aux acides carboxyliques. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Comparer plusieurs fonctions permet d'établir une hiérarchie d'acidité.",
        "correct": true,
        "explanation": "Comparer ces fonctions permet d’établir la hiérarchie : acide carboxylique > alcool > hydrogène en alpha d’un carbonyle."
      },
      {
        "content": "Dans la hiérarchie donnée, un alcool est plus acide qu’un acide carboxylique.",
        "correct": false,
        "explanation": "La hiérarchie retenue place l’acide carboxylique au-dessus de l’alcool."
      },
      {
        "content": "L'hydrogène d'un alcool possède également un caractère acide.",
        "correct": true,
        "explanation": "Le proton du groupe hydroxyle d’un alcool peut être cédé, même si l’alcool est moins acide qu’un acide carboxylique."
      },
      {
        "content": "L'acidité est liée à la mobilité d'un proton.",
        "correct": true,
        "explanation": "L’acidité traduit ici la possibilité pour une espèce de céder un proton."
      },
      {
        "content": "Seule la fonction COOH peut être acide.",
        "correct": false,
        "explanation": "L’acidité ne se limite pas au groupe $\ce{-COOH}$ : un alcool ou certains hydrogènes en alpha d’un carbonyle peuvent aussi présenter un caractère acide."
      }
    ],
    "explanation": "La hiérarchie d’acidité retenue est : acide carboxylique > alcool > hydrogène en alpha d’un carbonyle."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la réactivité électrophile d'un acide carboxylique dans le modèle :",
    "choices": [
      {
        "content": "La délocalisation électronique entre les oxygènes contribue à cette faible réactivité.",
        "correct": true,
        "explanation": "La délocalisation électronique entre les deux oxygènes stabilise la fonction carboxylique et contribue à sa faible électrophilie."
      },
      {
        "content": "Les acides ont une faible réactivité en tant qu'électrophiles.",
        "correct": true,
        "explanation": "La faible électrophilie du carbone carboxylique explique pourquoi l’acide non activé réagit moins facilement avec un nucléophile."
      },
      {
        "content": "Le carbone carboxylique est l’électrophile le plus réactif parmi les dérivés étudiés.",
        "correct": false,
        "explanation": "Le carbone carboxylique d’un acide non activé n’est pas le centre électrophile le plus réactif parmi les dérivés étudiés."
      },
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      },
      {
        "content": "Le carbone n’est pas décrit comme très peu électrophile.",
        "correct": false,
        "explanation": "La délocalisation électronique du groupe carboxyle stabilise la fonction et rend le carbone de l’acide non activé relativement peu électrophile."
      }
    ],
    "explanation": "La délocalisation électronique entre les deux oxygènes stabilise la fonction carboxylique et contribue à sa faible électrophilie."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos d'un acide activé:",
    "choices": [
      {
        "content": "Le remplacement du groupe $\\ce{-OH}$ d’un acide par un halogène rend toujours le carbone carbonylé moins électrophile.",
        "correct": false,
        "explanation": "Le dérivé halogéné d’acide est au contraire présenté comme plus réactif et plus électrophile."
      },
      {
        "content": "Il s'agit d'un dérivé de l'acide carboxylique.",
        "correct": true,
        "explanation": "Par définition, il s'agit d'un dérivé de l'acide carboxylique."
      },
      {
        "content": "Le but est d'augmenter le caractère électrophile du carbone porteur de la fonction.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Un halogène peut remplacer le groupe OH.",
        "correct": true,
        "explanation": "Le remplacement du groupe $\\ce{-OH}$ d’un acide carboxylique par un halogène conduit à un halogénure d’acyle."
      },
      {
        "content": "L'activation rend le carbone moins réactif dans les couplages.",
        "correct": false,
        "explanation": "Elle augmente au contraire le rendement des couplages."
      }
    ],
    "explanation": "Le dérivé halogéné d’acide est au contraire présenté comme plus réactif et plus électrophile."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels dérivés sont explicitement associés à l'activation des acides?",
    "choices": [
      {
        "content": "Les esters font partie des dérivés d'acides considérés dans cette classification.",
        "correct": true,
        "explanation": "Dans cette classification, le groupe $\\ce{OR'}$ fait partie des substituants envisagés pour les dérivés d'acides."
      },
      {
        "content": "Alcanes.",
        "correct": false,
        "explanation": "Ils ne sont pas des dérivés activés de l'acide."
      },
      {
        "content": "Le remplacement du groupe $\\ce{-OH}$ d’un acide par un halogène rend toujours le carbone carbonylé moins électrophile.",
        "correct": false,
        "explanation": "Le dérivé halogéné d’acide est au contraire présenté comme plus réactif et plus électrophile."
      },
      {
        "content": "Halogénures d'acide.",
        "correct": true,
        "explanation": "OH est remplacé par X, souvent Cl."
      },
      {
        "content": "Anhydrides d'acide.",
        "correct": true,
        "explanation": "OH est remplacé par un motif de type -OCOR."
      }
    ],
    "explanation": "Dans cette classification, le groupe $\\ce{OR'}$ fait partie des substituants envisagés pour les dérivés d'acides."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel remplacement conduit à un halogénure d'acide?",
    "choices": [
      {
        "content": "Ajouter H2 sans autre changement.",
        "correct": false,
        "explanation": "Ce n'est pas une activation de l'acide."
      },
      {
        "content": "Supprimer tout le groupe COOH.",
        "correct": false,
        "explanation": "Ce serait une autre transformation."
      },
      {
        "content": "Alcane.",
        "correct": false,
        "explanation": "Un alcane n’est pas un dérivé activé d’acide carboxylique."
      },
      {
        "content": "Remplacer le groupe OH de l'acide par X.",
        "correct": true,
        "explanation": "Le remplacement du groupe $\\ce{-OH}$ d’un acide carboxylique par un halogène conduit à un halogénure d’acyle."
      },
      {
        "content": "Remplacer le carbonyle par NH2.",
        "correct": false,
        "explanation": "Ce n'est pas l'halogénure d'acide."
      }
    ],
    "explanation": "Ce n'est pas une activation de l'acide."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des anhydrides d'acide:",
    "choices": [
      {
        "content": "Ils correspondent à un simple alcool.",
        "correct": false,
        "explanation": "Ils comportent deux fragments acyle autour d'un oxygène."
      },
      {
        "content": "Le remplacement du groupe $\\ce{-OH}$ d’un acide par un halogène rend toujours le carbone carbonylé moins électrophile.",
        "correct": false,
        "explanation": "Le dérivé halogéné d’acide est au contraire présenté comme plus réactif et plus électrophile."
      },
      {
        "content": "Ils appartiennent aux dérivés d'acides.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Ils peuvent être représentés par un motif acyle-O-acyle.",
        "correct": true,
        "explanation": "le motif de type RCO-O-COR."
      },
      {
        "content": "Ils ne sont pas présentés comme des acides activés.",
        "correct": false,
        "explanation": "La relation correcte est: « Ils sont présentés comme des acides activés ». La négation proposée est donc fausse."
      }
    ],
    "explanation": "Ils comportent deux fragments acyle autour d'un oxygène."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi les nouveaux groupements des dérivés d'acides améliorent-ils les réactions de couplage?",
    "choices": [
      {
        "content": "Le carbone porteur de la fonction devient plus électrophile.",
        "correct": true,
        "explanation": "L’activation diminue la stabilisation de la fonction et augmente le caractère électrophile du carbone acylé."
      },
      {
        "content": "Le rendement des réactions de couplage augmente.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Le carbone devient totalement inerte.",
        "correct": false,
        "explanation": "L'objectif est précisément d'augmenter sa réactivité."
      },
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      },
      {
        "content": "Leur électronégativité fragilise la liaison concernée.",
        "correct": true,
        "explanation": "L’électronégativité du substituant lié au groupe acyle influence la polarisation de la liaison et la réactivité du dérivé."
      }
    ],
    "explanation": "L’électronégativité du substituant lié au groupe acyle influence la polarisation de la liaison et la réactivité du dérivé."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare un acide carboxylique et un dérivé activé. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un dérivé activé d’acide possède un carbone acylé plus électrophile que celui de l’acide carboxylique correspondant.",
        "correct": true,
        "explanation": "L’activation diminue la stabilisation électronique associée au groupe hydroxyle et facilite l’attaque nucléophile."
      },
      {
        "content": "L'acide carboxylique n’est pas décrit comme faiblement électrophile.",
        "correct": false,
        "explanation": "La relation correcte est: « L'acide carboxylique est décrit comme faiblement électrophile ». La négation proposée est donc fausse."
      },
      {
        "content": "Le dérivé activé est plus électrophile.",
        "correct": true,
        "explanation": "L’activation rend le carbone acylé plus électrophile et donc plus réactif vis-à-vis d’un nucléophile."
      },
      {
        "content": "Le dérivé activé est plus adapté aux réactions de couplage.",
        "correct": true,
        "explanation": "La plus grande électrophilie du dérivé activé facilite les réactions de couplage avec un nucléophile."
      },
      {
        "content": "Les deux sont décrits comme strictement identiques en réactivité.",
        "correct": false,
        "explanation": "Un acide carboxylique et son dérivé activé n’ont pas la même réactivité : le dérivé activé est plus électrophile."
      }
    ],
    "explanation": "L’activation diminue la stabilisation électronique associée au groupe hydroxyle et facilite l’attaque nucléophile."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quel raisonnement relie carboxylate et faible électrophilie de l'acide?",
    "choices": [
      {
        "content": "Le carbone de la fonction acide est donc présenté comme peu électrophile.",
        "correct": true,
        "explanation": "La délocalisation électronique du groupe carboxyle stabilise la fonction et rend le carbone de l’acide non activé relativement peu électrophile."
      },
      {
        "content": "La charge négative est confinée sur le proton acide.",
        "correct": false,
        "explanation": "Elle est représentée sur les oxygènes du carboxylate."
      },
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      },
      {
        "content": "Les électrons peuvent être délocalisés entre les deux oxygènes.",
        "correct": true,
        "explanation": "Dans le groupement carboxyle/carboxylate, la délocalisation électronique implique les deux oxygènes et contribue à la stabilisation de la fonction."
      },
      {
        "content": "Cette délocalisation stabilise la distribution électronique.",
        "correct": true,
        "explanation": "C'est le sens du schéma proposé."
      }
    ],
    "explanation": "Dans le groupement carboxyle/carboxylate, la délocalisation électronique implique les deux oxygènes et contribue à la stabilisation de la fonction."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est le nom usuel de l'acide éthanoïque ?",
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
    "question": "Quel est le nom usuel de l’acide méthanoïque ?",
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
    "question": "Sélectionnez exactement les deux familles de dérivés d’acide formées par remplacement du groupe $\\ce{-OH}$ respectivement par X et par un motif acyle-oxy.",
    "choices": [
      {
        "content": "Anhydride d'acide.",
        "correct": true,
        "explanation": "Un anhydride d’acide fait partie des dérivés activés d’acides carboxyliques."
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
      },
      {
        "content": "Le remplacement du groupe $\\ce{-OH}$ d’un acide par un halogène rend toujours le carbone carbonylé moins électrophile.",
        "correct": false,
        "explanation": "Le dérivé halogéné d’acide est au contraire présenté comme plus réactif et plus électrophile."
      },
      {
        "content": "Halogénure d'acide.",
        "correct": true,
        "explanation": "Un halogénure d’acyle est un dérivé d’acide dans lequel le groupe $\\ce{-OH}$ est remplacé par un halogène."
      }
    ],
    "explanation": "Un halogénure d’acyle est un dérivé d’acide dans lequel le groupe $\\ce{-OH}$ est remplacé par un halogène."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "RCOOH peut libérer H+ et donner RCOO−.",
        "correct": true,
        "explanation": "Un acide carboxylique peut céder le proton de $\\ce{-COOH}$ pour former l’ion carboxylate $\\ce{RCOO^-}$."
      },
      {
        "content": "Une base électronique donne des électrons.",
        "correct": true,
        "explanation": "Cette définition électronique distingue les espèces selon leur capacité à accepter ou à donner un doublet d’électrons."
      },
      {
        "content": "Le carbone d'un acide carboxylique est décrit comme peu électrophile.",
        "correct": true,
        "explanation": "La délocalisation électronique du groupe carboxyle stabilise la fonction et rend le carbone de l’acide non activé relativement peu électrophile."
      },
      {
        "content": "Un dérivé activé possède un carbone plus électrophile.",
        "correct": true,
        "explanation": "L’activation augmente le caractère électrophile du carbone acylé par rapport à l’acide carboxylique correspondant."
      },
      {
        "content": "Un alcool est moins acide qu'un acide carboxylique dans la hiérarchie.",
        "correct": true,
        "explanation": "Dans la hiérarchie donnée, l’acide carboxylique est plus acide que l’alcool."
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
        "explanation": "L’activation facilite l’attaque nucléophile et améliore ainsi l’efficacité des réactions de couplage."
      },
      {
        "content": "Le carboxylate porte une charge positive délocalisée.",
        "correct": false,
        "explanation": "L’ion carboxylate porte une charge négative délocalisée sur les deux oxygènes."
      },
      {
        "content": "Seuls les acides carboxyliques peuvent présenter une acidité.",
        "correct": false,
        "explanation": "L’exemple retenu est aussi les alcools."
      }
    ],
    "explanation": "La délocalisation électronique du groupe carboxyle stabilise la fonction et rend le carbone de l’acide non activé relativement peu électrophile."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien d'acides carboxyliques successifs sont nommés explicitement, du méthanoïque au butanoïque?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "La liste les acides méthanoïque, éthanoïque, propanoïque et butanoïque."
  }
];
