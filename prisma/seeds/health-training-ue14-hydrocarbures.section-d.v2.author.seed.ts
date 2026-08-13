import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.3 – Section D – Oxydation des alcènes
 */

export const UE14_CH7_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 61,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans le modèle de la fiche, l'oxydation douce d'un alcène :",
    "choices": [
      {
        "content": "Conduit à un époxyde.",
        "correct": true,
        "explanation": "C'est le produit indiqué."
      },
      {
        "content": "Conserve le squelette carboné.",
        "correct": true,
        "explanation": "Pas de coupure de la chaîne."
      },
      {
        "content": "Transforme la double liaison en un cycle à trois chaînons comportant O.",
        "correct": true,
        "explanation": "Description d'un époxyde."
      },
      {
        "content": "Conduit directement à deux aldéhydes séparés.",
        "correct": false,
        "explanation": "Cela relève de la coupure oxydante forte."
      }
    ],
    "explanation": "L'oxydation douce transforme C=C en époxyde sans couper la liaison entre les deux carbones."
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'oxydation modérée d'un alcène conduit, dans la fiche :",
    "choices": [
      {
        "content": "À un 1,2-diol.",
        "correct": true,
        "explanation": "Un OH se retrouve sur chacun des deux carbones."
      },
      {
        "content": "À deux fonctions alcool portées par des carbones voisins.",
        "correct": true,
        "explanation": "C'est un diol vicinal."
      },
      {
        "content": "À une coupure systématique de la chaîne.",
        "correct": false,
        "explanation": "La liaison C–C est conservée."
      },
      {
        "content": "À un alcyne.",
        "correct": false,
        "explanation": "L'oxydation n'augmente pas l'insaturation ici."
      }
    ],
    "explanation": "L'oxydation modérée remplace la double liaison par deux groupes hydroxyle voisins."
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'oxydation forte d'un alcène, selon le modèle simplifié de la fiche :",
    "choices": [
      {
        "content": "Coupe la liaison entre les deux carbones de l'ancienne double liaison.",
        "correct": true,
        "explanation": "La chaîne est scindée au niveau de C=C."
      },
      {
        "content": "Forme des composés carbonylés.",
        "correct": true,
        "explanation": "Aldéhydes ou cétones selon la substitution."
      },
      {
        "content": "Peut produire des aldéhydes si les carbones de l'alcène portaient des hydrogènes.",
        "correct": true,
        "explanation": "C'est le cas illustré par R-CH=CH-R'."
      },
      {
        "content": "Conserve toujours la molécule en un seul fragment.",
        "correct": false,
        "explanation": "La coupure peut donner deux fragments."
      }
    ],
    "explanation": "La fiche associe l'oxydation forte à une coupure de C=C en fonctions carbonylées."
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel niveau d'oxydation conduit à un époxyde dans la fiche ?",
    "choices": [
      {
        "content": "Oxydation douce.",
        "correct": true,
        "explanation": "Époxyde."
      },
      {
        "content": "Oxydation modérée.",
        "correct": false,
        "explanation": "1,2-diol."
      },
      {
        "content": "Oxydation forte.",
        "correct": false,
        "explanation": "Coupure carbonylée."
      },
      {
        "content": "Hydrogénation.",
        "correct": false,
        "explanation": "Alcane."
      }
    ],
    "explanation": "Le triptyque à retenir est douce → époxyde, modérée → diol, forte → coupure carbonylée."
  },
  {
    "order": 65,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel niveau d'oxydation conduit à un 1,2-diol ?",
    "choices": [
      {
        "content": "Oxydation modérée.",
        "correct": true,
        "explanation": "Produit de la fiche."
      },
      {
        "content": "Oxydation douce.",
        "correct": false,
        "explanation": "Époxyde."
      },
      {
        "content": "Oxydation forte.",
        "correct": false,
        "explanation": "Carbonyles séparés."
      },
      {
        "content": "Hydrohalogénation.",
        "correct": false,
        "explanation": "Dérivé halogéné."
      }
    ],
    "explanation": "L'oxydation modérée ajoute deux OH sur les carbones voisins de l'ancienne double liaison."
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel niveau d'oxydation permet une coupure de la double liaison en composés carbonylés ?",
    "choices": [
      {
        "content": "Oxydation forte.",
        "correct": true,
        "explanation": "C'est la transformation indiquée."
      },
      {
        "content": "Oxydation douce.",
        "correct": false,
        "explanation": "Époxyde."
      },
      {
        "content": "Oxydation modérée.",
        "correct": false,
        "explanation": "Diol."
      },
      {
        "content": "Hydratation.",
        "correct": false,
        "explanation": "Alcool."
      }
    ],
    "explanation": "La coupure du squelette au niveau de C=C est le marqueur de l'oxydation forte dans ce chapitre."
  },
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos d'un époxyde obtenu à partir d'un alcène :",
    "choices": [
      {
        "content": "Il contient un atome d'oxygène reliant les deux carbones initialement engagés dans C=C.",
        "correct": true,
        "explanation": "Cycle à trois chaînons."
      },
      {
        "content": "Les deux carbones restent liés entre eux.",
        "correct": true,
        "explanation": "Pas de coupure."
      },
      {
        "content": "Il s'agit du produit de l'oxydation douce.",
        "correct": true,
        "explanation": "Selon la fiche."
      },
      {
        "content": "Il comporte obligatoirement deux groupes OH.",
        "correct": false,
        "explanation": "Ce serait un diol."
      }
    ],
    "explanation": "Époxyde et diol doivent être distingués : le premier est cyclique, le second porte deux hydroxyles."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos du 1,2-diol issu d'une oxydation modérée :",
    "choices": [
      {
        "content": "Les deux OH sont portés par des carbones voisins.",
        "correct": true,
        "explanation": "D'où 1,2-diol."
      },
      {
        "content": "Le nombre de carbones de la molécule est conservé.",
        "correct": true,
        "explanation": "Pas de coupure."
      },
      {
        "content": "Le produit contient deux oxygènes.",
        "correct": true,
        "explanation": "Un dans chaque groupe OH."
      },
      {
        "content": "La chaîne est obligatoirement coupée en deux.",
        "correct": false,
        "explanation": "La liaison C–C reste présente."
      }
    ],
    "explanation": "La dihydroxylation modérée conserve le squelette carboné."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans le modèle de coupure forte $\\ce{R-CH=CH-R' -> R-CHO + R'-CHO}$ :",
    "choices": [
      {
        "content": "Chaque carbone de la double liaison devient un carbone carbonylé.",
        "correct": true,
        "explanation": "C=C est convertie en deux C=O."
      },
      {
        "content": "Les groupes R et R' restent associés à leurs carbones respectifs.",
        "correct": true,
        "explanation": "Ils deviennent les substituants des carbonyles."
      },
      {
        "content": "Deux aldéhydes sont obtenus dans ce cas où chaque carbone portait H.",
        "correct": true,
        "explanation": "Motif R-CH=."
      },
      {
        "content": "Une seule molécule cyclique est formée.",
        "correct": false,
        "explanation": "La liaison entre les deux carbones est rompue."
      }
    ],
    "explanation": "La structure de l'alcène permet de prévoir les fragments carbonylés formés."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi l'oxydation forte peut-elle être utile pour raisonner sur la structure d'un alcène ?",
    "choices": [
      {
        "content": "Les produits carbonylés renseignent sur les substituants portés par les carbones de C=C.",
        "correct": true,
        "explanation": "La coupure conserve l'environnement de chaque carbone sous forme carbonylée."
      },
      {
        "content": "Elle coupe précisément la double liaison.",
        "correct": true,
        "explanation": "Le site de coupure est informatif."
      },
      {
        "content": "Elle ne donne aucune information sur le squelette initial.",
        "correct": false,
        "explanation": "Les fragments permettent au contraire d'en reconstruire des éléments."
      },
      {
        "content": "Elle permet de distinguer des alcènes qui donneraient des fragments différents.",
        "correct": true,
        "explanation": "C'est une application structurale classique."
      }
    ],
    "explanation": "L'analyse des produits de coupure peut remonter à la substitution de la double liaison."
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans le modèle simplifié de la fiche, l'oxydation forte du but-2-ène $\\ce{CH3-CH=CH-CH3}$ conduit :",
    "choices": [
      {
        "content": "À deux fragments carbonylés identiques.",
        "correct": true,
        "explanation": "La molécule est symétrique."
      },
      {
        "content": "À deux molécules d'éthanal $\\ce{CH3CHO}$.",
        "correct": true,
        "explanation": "Chaque carbone de C=C portait H et CH3."
      },
      {
        "content": "À une coupure de la liaison entre les deux carbones sp2.",
        "correct": true,
        "explanation": "C'est l'oxydation forte."
      },
      {
        "content": "À du butane.",
        "correct": false,
        "explanation": "Ce serait une hydrogénation."
      }
    ],
    "explanation": "La symétrie du but-2-ène conduit à deux molécules identiques d'éthanal dans le modèle du cours."
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans le modèle simplifié de la fiche, l'oxydation forte du 2,3-diméthylbut-2-ène $\\ce{(CH3)2C=C(CH3)2}$ conduit :",
    "choices": [
      {
        "content": "À deux fragments carbonylés identiques.",
        "correct": true,
        "explanation": "L'alcène est symétrique."
      },
      {
        "content": "À deux molécules de propanone.",
        "correct": true,
        "explanation": "Chaque carbone de C=C était lié à deux groupes méthyle et à aucun H."
      },
      {
        "content": "À des fonctions cétone.",
        "correct": true,
        "explanation": "Un alcène tétrasubstitué donne des cétones dans le modèle de la fiche."
      },
      {
        "content": "À deux éthanals.",
        "correct": false,
        "explanation": "Les carbones de la double liaison ne portaient aucun hydrogène."
      }
    ],
    "explanation": "Cet exemple applique directement la précision de la fiche : une double liaison tétrasubstituée conduit à des cétones lors de la coupure forte."
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On soumet le même alcène successivement à une oxydation douce ou modérée, dans deux expériences séparées. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'oxydation douce peut donner un époxyde.",
        "correct": true,
        "explanation": "Produit attendu."
      },
      {
        "content": "L'oxydation modérée peut donner un 1,2-diol.",
        "correct": true,
        "explanation": "Produit attendu."
      },
      {
        "content": "Dans les deux cas, le squelette carboné reste non coupé.",
        "correct": true,
        "explanation": "La coupure est réservée au niveau fort dans la fiche."
      },
      {
        "content": "Les deux réactions donnent exactement le même groupe fonctionnel.",
        "correct": false,
        "explanation": "Époxyde et diol sont différents."
      }
    ],
    "explanation": "Le niveau d'oxydation contrôle la nature du produit tout en conservant le squelette aux niveaux doux et modéré."
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Un produit d'oxydation contient deux groupes OH sur des carbones voisins et le squelette n'est pas coupé. Quelle transformation du chapitre est la plus cohérente ?",
    "choices": [
      {
        "content": "Oxydation modérée d'un alcène.",
        "correct": true,
        "explanation": "1,2-diol."
      },
      {
        "content": "Oxydation douce.",
        "correct": false,
        "explanation": "Époxyde."
      },
      {
        "content": "Oxydation forte.",
        "correct": false,
        "explanation": "Coupure carbonylée."
      },
      {
        "content": "Hydrogénation.",
        "correct": false,
        "explanation": "Aucun O ne serait ajouté."
      }
    ],
    "explanation": "Deux OH vicinaux signent le produit modéré dans le cadre de cette fiche."
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Un produit possède un cycle à trois chaînons C–O–C formé sur l'ancienne double liaison. Il correspond :",
    "choices": [
      {
        "content": "À un époxyde.",
        "correct": true,
        "explanation": "Produit de l'oxydation douce."
      },
      {
        "content": "À un 1,2-diol.",
        "correct": false,
        "explanation": "Deux OH séparés."
      },
      {
        "content": "À un alcane.",
        "correct": false,
        "explanation": "Pas d'oxygène."
      },
      {
        "content": "À un alcyne.",
        "correct": false,
        "explanation": "Pas de triple liaison."
      }
    ],
    "explanation": "L'époxyde est le motif oxygéné cyclique à trois chaînons."
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare oxydation forte et hydrogénation d'un alcène. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'hydrogénation conserve la chaîne carbonée.",
        "correct": true,
        "explanation": "C=C devient C–C."
      },
      {
        "content": "L'oxydation forte peut couper la chaîne au niveau de C=C.",
        "correct": true,
        "explanation": "Produits carbonylés."
      },
      {
        "content": "L'hydrogénation introduit de l'oxygène.",
        "correct": false,
        "explanation": "Elle ajoute H2."
      },
      {
        "content": "Les deux transformations diminuent le caractère de double liaison initiale.",
        "correct": true,
        "explanation": "La liaison C=C disparaît dans les deux cas."
      }
    ],
    "explanation": "La disparition de C=C peut conduire soit à saturation, soit à coupure selon le réactif."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour prévoir les produits d'une coupure oxydante forte dans le modèle du cours, il faut examiner :",
    "choices": [
      {
        "content": "Les substituants de chacun des deux carbones de C=C.",
        "correct": true,
        "explanation": "Ils deviennent ceux des carbonyles."
      },
      {
        "content": "La présence ou non d'hydrogène sur chaque carbone de C=C.",
        "correct": true,
        "explanation": "Elle oriente aldéhyde ou cétone dans le modèle simplifié."
      },
      {
        "content": "La symétrie éventuelle de l'alcène.",
        "correct": true,
        "explanation": "Elle peut conduire à deux produits identiques."
      },
      {
        "content": "Seulement la masse molaire totale.",
        "correct": false,
        "explanation": "Elle ne suffit pas à attribuer les fragments."
      }
    ],
    "explanation": "La structure locale autour de la double liaison est l'information déterminante."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans le modèle de coupure forte, une molécule de but-2-ène donne combien de molécules d'éthanal par molécule d'alcène consommée ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "La double liaison symétrique est coupée en deux fragments identiques : deux éthanals."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un alcène tétrasubstitué ne porte aucun hydrogène sur les deux carbones de sa double liaison. Dans le modèle de la fiche, une coupure forte conduit :",
    "choices": [
      {
        "content": "À des fonctions cétone sur les deux fragments.",
        "correct": true,
        "explanation": "Chaque carbone carbonylé reste lié à deux groupes carbonés."
      },
      {
        "content": "À des aldéhydes imposant un hydrogène absent du réactif.",
        "correct": false,
        "explanation": "Aucun H n'était porté par les carbones sp2."
      },
      {
        "content": "À une rupture du lien entre les deux carbones de C=C.",
        "correct": true,
        "explanation": "Coupure forte."
      },
      {
        "content": "À un produit nécessairement unique même si l'alcène est dissymétrique.",
        "correct": false,
        "explanation": "Deux cétones différentes peuvent être obtenues."
      }
    ],
    "explanation": "La fiche précise que des cétones sont obtenues pour un alcène tétrasubstitué."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelle stratégie permet de distinguer les trois niveaux d'oxydation de la fiche ?",
    "choices": [
      {
        "content": "Douce : rechercher un époxyde.",
        "correct": true,
        "explanation": "Motif caractéristique."
      },
      {
        "content": "Modérée : rechercher un 1,2-diol.",
        "correct": true,
        "explanation": "Deux OH voisins."
      },
      {
        "content": "Forte : rechercher une coupure en carbonyles.",
        "correct": true,
        "explanation": "Aldéhydes/cétones."
      },
      {
        "content": "Attribuer systématiquement un alcane comme produit final.",
        "correct": false,
        "explanation": "Cela correspond à l'hydrogénation."
      }
    ],
    "explanation": "Les produits fonctionnels permettent d'identifier immédiatement le niveau d'oxydation."
  },
  {
    "order": 127,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Oxydation douce → époxyde.",
        "correct": true,
        "explanation": "Selon la fiche."
      },
      {
        "content": "Oxydation modérée → 1,2-diol.",
        "correct": true,
        "explanation": "Selon la fiche."
      },
      {
        "content": "Oxydation forte → coupure carbonylée.",
        "correct": true,
        "explanation": "Selon la fiche."
      },
      {
        "content": "But-2-ène fortement oxydé → deux éthanals dans le modèle simplifié.",
        "correct": true,
        "explanation": "Alcène symétrique."
      },
      {
        "content": "Alcène tétrasubstitué fortement oxydé → cétones.",
        "correct": true,
        "explanation": "Aucun H sur les carbones sp2."
      },
      {
        "content": "Oxydation douce → alcane.",
        "correct": false,
        "explanation": "Hydrogénation."
      },
      {
        "content": "Oxydation modérée → alcyne.",
        "correct": false,
        "explanation": "Pas de triple liaison."
      },
      {
        "content": "Oxydation forte → 1,2-diol uniquement.",
        "correct": false,
        "explanation": "La chaîne est coupée."
      },
      {
        "content": "Époxyde → produit spécifique de l'hydrogénation.",
        "correct": false,
        "explanation": "Produit d'oxydation douce."
      },
      {
        "content": "Coupure forte → conservation obligatoire d'une seule molécule.",
        "correct": false,
        "explanation": "Deux fragments peuvent apparaître."
      }
    ],
    "explanation": "Cette sélection rassemble les trois niveaux d'oxydation et leurs produits caractéristiques."
  },
  {
    "order": 128,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Une molécule possède deux doubles liaisons indépendantes et chacune subit une coupure oxydante complète. Combien de liaisons C=C sont rompues ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Chaque double liaison est un site de coupure ; deux doubles liaisons donnent deux coupures."
  }
];
