import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.3 – Section C – Réactions d'addition sur les alcènes
 */

export const UE14_CH7_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 41,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos d'une réaction d'addition sur une double liaison $\\ce{C=C}$ :",
    "choices": [
      {
        "content": "La liaison double est consommée.",
        "correct": true,
        "explanation": "L'addition transforme les deux carbones sp2 en une liaison simple dans les exemples du chapitre."
      },
      {
        "content": "Deux nouveaux groupes peuvent se fixer sur les deux carbones de l'ancienne double liaison.",
        "correct": true,
        "explanation": "C'est le principe d'une addition."
      },
      {
        "content": "Le squelette carboné est nécessairement coupé en deux.",
        "correct": false,
        "explanation": "La coupure est caractéristique de certaines oxydations fortes, pas d'une addition simple."
      },
      {
        "content": "Une addition augmente généralement le degré de saturation.",
        "correct": true,
        "explanation": "On remplace une liaison π par de nouvelles liaisons σ."
      }
    ],
    "explanation": "La double liaison constitue un site réactif sur lequel des espèces peuvent s'additionner."
  },
  {
    "order": 42,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "L'hydrogénation catalytique d'un alcène conduit principalement :",
    "choices": [
      {
        "content": "À l'alcane correspondant.",
        "correct": true,
        "explanation": "H2 s'ajoute sur C=C."
      },
      {
        "content": "À un alcyne.",
        "correct": false,
        "explanation": "Cela augmenterait l'insaturation."
      },
      {
        "content": "À un diol.",
        "correct": false,
        "explanation": "Un diol est obtenu par oxydation modérée dans la fiche."
      },
      {
        "content": "À un époxyde.",
        "correct": false,
        "explanation": "Un époxyde relève de l'oxydation douce."
      }
    ],
    "explanation": "L'addition de $\\ce{H2}$ sature la double liaison et forme un alcane."
  },
  {
    "order": 43,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Lors de l'halogénation d'un alcène par $\\ce{X2}$ dans le modèle du cours :",
    "choices": [
      {
        "content": "Un atome X se fixe sur chacun des deux carbones de la double liaison.",
        "correct": true,
        "explanation": "On obtient un dihalogénoalcane vicinal."
      },
      {
        "content": "La double liaison disparaît.",
        "correct": true,
        "explanation": "Elle devient une liaison simple."
      },
      {
        "content": "Le nombre de carbones est conservé.",
        "correct": true,
        "explanation": "Aucune coupure du squelette."
      },
      {
        "content": "Une molécule d'eau est nécessairement éliminée.",
        "correct": false,
        "explanation": "Ce n'est pas une déshydratation."
      }
    ],
    "explanation": "L'addition de $\\ce{X2}$ transforme C=C en C–C portant un halogène sur chacun des deux carbones."
  },
  {
    "order": 44,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "L'addition de $\\ce{Br2}$ sur l'éthène $\\ce{CH2=CH2}$ donne, dans le modèle du chapitre :",
    "choices": [
      {
        "content": "$\\ce{CH2Br-CH2Br}$.",
        "correct": true,
        "explanation": "Un Br s'ajoute sur chaque carbone."
      },
      {
        "content": "$\\ce{CH3-CH3}$.",
        "correct": false,
        "explanation": "C'est le produit d'une hydrogénation."
      },
      {
        "content": "$\\ce{CH3-CH2Br}$.",
        "correct": false,
        "explanation": "Il manquerait un second Br."
      },
      {
        "content": "$\\ce{CH#CH}$.",
        "correct": false,
        "explanation": "Cela formerait une triple liaison."
      }
    ],
    "explanation": "Une molécule de dibrome s'additionne sur les deux carbones de la double liaison."
  },
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'addition de $\\ce{HX}$ sur un alcène dissymétrique selon la règle de Markovnikov présentée dans la fiche :",
    "choices": [
      {
        "content": "H et X s'ajoutent sur les deux carbones de la double liaison.",
        "correct": true,
        "explanation": "C'est une hydrohalogénation."
      },
      {
        "content": "La régiosélectivité permet de privilégier un produit.",
        "correct": true,
        "explanation": "La fiche indique qu'un seul composé est obtenu dans le modèle retenu."
      },
      {
        "content": "X se retrouve sur le carbone correspondant au site positif dans la représentation polarisée de la fiche.",
        "correct": true,
        "explanation": "La fiche formule la règle en termes de charges partielles."
      },
      {
        "content": "La double liaison reste inchangée.",
        "correct": false,
        "explanation": "Elle est consommée par l'addition."
      }
    ],
    "explanation": "La règle de Markovnikov sert à choisir l'orientation de l'addition de HX sur un alcène dissymétrique."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "L'addition de $\\ce{HCl}$ sur le propène $\\ce{CH3-CH=CH2}$ donne majoritairement, dans le modèle de Markovnikov du cours :",
    "choices": [
      {
        "content": "$\\ce{CH3-CHCl-CH3}$.",
        "correct": true,
        "explanation": "Cl se fixe sur le carbone interne et H sur le carbone terminal."
      },
      {
        "content": "$\\ce{CH3-CH2-CH2Cl}$.",
        "correct": false,
        "explanation": "C'est l'autre régioisomère."
      },
      {
        "content": "$\\ce{CH3-C#CH}$.",
        "correct": false,
        "explanation": "Aucune triple liaison n'est créée."
      },
      {
        "content": "$\\ce{CH3-CH(OH)-CH3}$.",
        "correct": false,
        "explanation": "Ce serait le produit d'une hydratation."
      }
    ],
    "explanation": "Dans l'exemple de la fiche, $\\ce{R-CH=CH2 + HX}$ conduit à $\\ce{R-CHX-CH3}$."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'hydratation d'un alcène :",
    "choices": [
      {
        "content": "Ajoute H et OH sur les deux carbones de la double liaison.",
        "correct": true,
        "explanation": "Bilan d'addition de l'eau."
      },
      {
        "content": "Conduit à un alcool.",
        "correct": true,
        "explanation": "C'est rappelé dans l'auto-évaluation de la fiche."
      },
      {
        "content": "Consomme la double liaison.",
        "correct": true,
        "explanation": "Elle devient simple."
      },
      {
        "content": "Transforme systématiquement l'alcène en alcyne.",
        "correct": false,
        "explanation": "L'insaturation diminue."
      }
    ],
    "explanation": "L'hydratation est une réaction d'addition conduisant à une fonction alcool."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "L'hydratation acido-catalysée du propène conduit majoritairement, selon Markovnikov, à :",
    "choices": [
      {
        "content": "Propan-2-ol.",
        "correct": true,
        "explanation": "OH se retrouve sur le carbone le plus substitué dans le modèle standard du cours."
      },
      {
        "content": "Propan-1-ol uniquement.",
        "correct": false,
        "explanation": "Ce n'est pas le produit majoritaire Markovnikov."
      },
      {
        "content": "Propanone directement.",
        "correct": false,
        "explanation": "Ce n'est pas une oxydation."
      },
      {
        "content": "Propane.",
        "correct": false,
        "explanation": "Ce serait une hydrogénation."
      }
    ],
    "explanation": "L'orientation Markovnikov de l'hydratation du propène conduit au propan-2-ol."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles additions diminuent le degré d'insaturation d'un alcène dans ce chapitre ?",
    "choices": [
      {
        "content": "Hydrogénation par $\\ce{H2}$.",
        "correct": true,
        "explanation": "C=C devient C–C."
      },
      {
        "content": "Halogénation par $\\ce{X2}$.",
        "correct": true,
        "explanation": "Deux liaisons C–X se forment."
      },
      {
        "content": "Hydrohalogénation par $\\ce{HX}$.",
        "correct": true,
        "explanation": "H et X s'ajoutent."
      },
      {
        "content": "Hydratation par $\\ce{H2O}$.",
        "correct": true,
        "explanation": "H et OH s'ajoutent."
      }
    ],
    "explanation": "Toutes ces réactions utilisent la liaison π de C=C pour former de nouvelles liaisons simples."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi les alcènes sont-ils plus réactifs que les alcanes vis-à-vis des additions étudiées ?",
    "choices": [
      {
        "content": "La double liaison comporte une liaison π disponible pour des transformations d'addition.",
        "correct": true,
        "explanation": "La liaison π est le site réactif principal."
      },
      {
        "content": "Une addition peut convertir la liaison π en deux nouvelles liaisons σ.",
        "correct": true,
        "explanation": "C'est le gain de saturation."
      },
      {
        "content": "Les alcanes possèdent déjà une double liaison plus forte.",
        "correct": false,
        "explanation": "Les alcanes n'ont pas de double liaison C=C."
      },
      {
        "content": "La réactivité étudiée est liée au caractère insaturé des alcènes.",
        "correct": true,
        "explanation": "C'est le fil conducteur de la section."
      }
    ],
    "explanation": "Le caractère insaturé des alcènes explique leur aptitude aux réactions d'addition."
  },
  {
    "order": 51,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L'hydrogénation catalytique du but-2-ène donne :",
    "choices": [
      {
        "content": "Butane.",
        "correct": true,
        "explanation": "La double liaison est saturée."
      },
      {
        "content": "Un produit possédant quatre carbones.",
        "correct": true,
        "explanation": "Le squelette carboné est conservé."
      },
      {
        "content": "Un produit de formule $\\ce{C4H10}$.",
        "correct": true,
        "explanation": "L'alcène C4H8 gagne H2."
      },
      {
        "content": "Un butyne.",
        "correct": false,
        "explanation": "Cela augmenterait l'insaturation."
      }
    ],
    "explanation": "L'hydrogénation ajoute une molécule de H2 sans modifier le nombre de carbones."
  },
  {
    "order": 52,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On ajoute une mole de $\\ce{Br2}$ à une mole de propène. Dans le modèle simplifié du chapitre :",
    "choices": [
      {
        "content": "La double liaison est consommée.",
        "correct": true,
        "explanation": "Addition électrophile."
      },
      {
        "content": "Deux atomes de Br sont incorporés au produit.",
        "correct": true,
        "explanation": "Un sur chacun des carbones de l'ancienne double liaison."
      },
      {
        "content": "Le produit comporte toujours trois carbones.",
        "correct": true,
        "explanation": "Pas de coupure."
      },
      {
        "content": "Le produit est un alcyne.",
        "correct": false,
        "explanation": "Il est plus saturé que le réactif."
      }
    ],
    "explanation": "L'halogénation conserve le squelette et ajoute les deux atomes de l'halogène."
  },
  {
    "order": 53,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel produit majoritaire prévoit-on pour $\\ce{CH3-CH=CH2 + HBr}$ selon Markovnikov ?",
    "choices": [
      {
        "content": "2-bromopropane.",
        "correct": true,
        "explanation": "Br se fixe sur le carbone interne."
      },
      {
        "content": "1-bromopropane.",
        "correct": false,
        "explanation": "Régioisomère non retenu par la règle dans ce modèle."
      },
      {
        "content": "Propane.",
        "correct": false,
        "explanation": "Il faudrait H2."
      },
      {
        "content": "Propan-2-ol.",
        "correct": false,
        "explanation": "Il faudrait H2O."
      }
    ],
    "explanation": "L'hydrohalogénation du propène oriente Br vers le carbone secondaire."
  },
  {
    "order": 54,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare hydrogénation, hydratation et hydrohalogénation du propène. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'hydrogénation donne un alcane.",
        "correct": true,
        "explanation": "Propane."
      },
      {
        "content": "L'hydratation donne un alcool.",
        "correct": true,
        "explanation": "Majoritairement propan-2-ol."
      },
      {
        "content": "L'hydrohalogénation donne un dérivé halogéné.",
        "correct": true,
        "explanation": "Par exemple 2-bromopropane avec HBr."
      },
      {
        "content": "Ces trois réactions coupent la chaîne carbonée.",
        "correct": false,
        "explanation": "Elles conservent le squelette."
      }
    ],
    "explanation": "Une même double liaison peut conduire à des familles de produits différentes selon le réactif ajouté."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la règle de Markovnikov utilisée dans le chapitre :",
    "choices": [
      {
        "content": "Elle intervient pour orienter certaines additions sur un alcène dissymétrique.",
        "correct": true,
        "explanation": "Cas de HX et de l'hydratation dans le cadre du cours."
      },
      {
        "content": "Elle n'est pas nécessaire pour l'addition symétrique de $\\ce{Br2}$.",
        "correct": true,
        "explanation": "Les deux atomes ajoutés sont identiques."
      },
      {
        "content": "Elle permet de choisir entre des régioisomères possibles.",
        "correct": true,
        "explanation": "C'est son intérêt."
      },
      {
        "content": "Elle permet d'attribuer une configuration R/S.",
        "correct": false,
        "explanation": "R/S relève des règles CIP et de la stéréochimie."
      }
    ],
    "explanation": "Markovnikov est une règle de régiosélectivité, pas un descripteur stéréochimique."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "L'hydratation du but-1-ène selon Markovnikov conduit majoritairement à :",
    "choices": [
      {
        "content": "Butan-2-ol.",
        "correct": true,
        "explanation": "OH se place sur le carbone 2."
      },
      {
        "content": "Butan-1-ol uniquement.",
        "correct": false,
        "explanation": "Produit non majoritaire dans le modèle Markovnikov."
      },
      {
        "content": "Butanone directement.",
        "correct": false,
        "explanation": "Ce serait une oxydation."
      },
      {
        "content": "Butane.",
        "correct": false,
        "explanation": "Ce serait une hydrogénation."
      }
    ],
    "explanation": "L'hydratation du but-1-ène donne majoritairement le butan-2-ol."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule d'alcène réagit avec $\\ce{H2}$ puis le produit avec aucun autre réactif. Quelles conclusions sont justifiées ?",
    "choices": [
      {
        "content": "Une double liaison a été saturée.",
        "correct": true,
        "explanation": "H2 s'ajoute sur C=C."
      },
      {
        "content": "Le nombre d'hydrogènes de la molécule augmente de 2 pour une double liaison hydrogénée.",
        "correct": true,
        "explanation": "Bilan stœchiométrique."
      },
      {
        "content": "Le nombre de carbones est inchangé.",
        "correct": true,
        "explanation": "Pas de coupure."
      },
      {
        "content": "Une fonction alcool apparaît nécessairement.",
        "correct": false,
        "explanation": "Aucun O n'est introduit."
      }
    ],
    "explanation": "L'hydrogénation modifie l'insaturation sans changer le squelette carboné."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Une mole de but-2-ène subit une hydrogénation complète de son unique double liaison. Combien de moles de $\\ce{H2}$ sont consommées ?",
    "answer": {
      "type": "number",
      "value": 1,
      "tolerance": 0
    },
    "explanation": "Une double liaison consomme une mole de H2 par mole d'alcène dans cette hydrogénation."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Lors d'une addition de $\\ce{Cl2}$ sur un alcène comportant une seule double liaison :",
    "choices": [
      {
        "content": "Deux liaisons C–Cl sont formées.",
        "correct": true,
        "explanation": "Un Cl sur chacun des deux carbones de l'ancienne double liaison."
      },
      {
        "content": "La liaison π disparaît.",
        "correct": true,
        "explanation": "La double liaison devient simple."
      },
      {
        "content": "La formule brute gagne $\\ce{Cl2}$.",
        "correct": true,
        "explanation": "Deux Cl sont ajoutés."
      },
      {
        "content": "Une molécule de HCl est obligatoirement éliminée.",
        "correct": false,
        "explanation": "Il s'agit d'une addition, non d'une élimination."
      }
    ],
    "explanation": "L'halogénation est une addition simple sur C=C."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour choisir le produit d'une addition sur un alcène, quelles informations sont pertinentes ?",
    "choices": [
      {
        "content": "La nature du réactif ajouté.",
        "correct": true,
        "explanation": "H2, X2, HX ou H2O donnent des produits différents."
      },
      {
        "content": "La symétrie ou dissymétrie de l'alcène.",
        "correct": true,
        "explanation": "Elle influence notamment la régiosélectivité."
      },
      {
        "content": "La règle de Markovnikov lorsqu'elle est applicable.",
        "correct": true,
        "explanation": "Elle départage les orientations de HX/H2O."
      },
      {
        "content": "Le nombre de carbones ne joue jamais aucun rôle dans le nom du produit.",
        "correct": false,
        "explanation": "Il fixe le squelette et la nomenclature."
      }
    ],
    "explanation": "La prédiction du produit combine structure de l'alcène et nature du réactif."
  },
  {
    "order": 125,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations réaction → produit/famille, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Alcène + $\\ce{H2}$ → alcane.",
        "correct": true,
        "explanation": "Hydrogénation."
      },
      {
        "content": "Alcène + $\\ce{Br2}$ → dibromure vicinal dans le modèle simple.",
        "correct": true,
        "explanation": "Halogénation."
      },
      {
        "content": "Alcène + $\\ce{H2O/H+}$ → alcool.",
        "correct": true,
        "explanation": "Hydratation."
      },
      {
        "content": "Propène + HCl → majoritairement 2-chloropropane.",
        "correct": true,
        "explanation": "Markovnikov."
      },
      {
        "content": "But-1-ène + eau/H+ → majoritairement butan-2-ol.",
        "correct": true,
        "explanation": "Markovnikov."
      },
      {
        "content": "Alcène + $\\ce{H2}$ → alcyne.",
        "correct": false,
        "explanation": "L'insaturation diminue."
      },
      {
        "content": "Alcène + $\\ce{Br2}$ → alcane sans brome.",
        "correct": false,
        "explanation": "Le brome est incorporé."
      },
      {
        "content": "Propène + HCl → uniquement propan-2-ol.",
        "correct": false,
        "explanation": "Il n'y a pas d'eau."
      },
      {
        "content": "Hydratation d'un alcène → cétone directement.",
        "correct": false,
        "explanation": "Le produit immédiat étudié est un alcool."
      },
      {
        "content": "Hydrohalogénation → élimination de HX.",
        "correct": false,
        "explanation": "HX est ajouté, pas éliminé."
      }
    ],
    "explanation": "Cette sélection consolide les quatre grandes additions étudiées."
  },
  {
    "order": 126,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Lors de l'addition de $\\ce{HCl}$ sur le propène selon la règle de Markovnikov du cours, cliquez sur le carbone de la double liaison qui reçoit l'atome de chlore.",
    "image": {
      "src": "/images/training/ue14/hydrocarbures/propene-markovnikov-qzone.svg",
      "alt": "Schéma simplifié du propène CH3-CH=CH2 avec les deux carbones de la double liaison explicitement représentés",
      "width": 1100,
      "height": 480
    },
    "expectedZones": [
      {
        "id": "carbone-interne",
        "label": "Carbone interne recevant Cl",
        "x": 0.5,
        "y": 0.5,
        "tolerance": 0.085
      }
    ],
    "explanation": "Dans $\\ce{CH3-CH=CH2 + HCl}$, le produit majoritaire retenu est $\\ce{CH3-CHCl-CH3}$. Le chlore se fixe donc sur le carbone interne de la double liaison."
  }
];
