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
        "content": "Au cours d’une addition sur $\\ce{C=C}$, la double liaison reste intégralement inchangée.",
        "correct": false,
        "explanation": "La liaison $\\pi$ est consommée pendant l’addition."
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
      },
      {
        "content": "Une réaction d’addition simple sur une double liaison crée une nouvelle liaison $\\pi$ entre les deux carbones.",
        "correct": false,
        "explanation": "L’addition consomme la liaison $\\pi$ de la double liaison."
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
        "content": "Un alcyne de même squelette carboné.",
        "correct": false,
        "explanation": "L’hydrogénation d’un alcène conduit à l’alcane correspondant."
      },
      {
        "content": "À un alcyne.",
        "correct": false,
        "explanation": "Cela augmenterait l'insaturation."
      },
      {
        "content": "À un diol.",
        "correct": false,
        "explanation": "Un diol est obtenu par oxydation modérée dans le modèle étudié."
      },
      {
        "content": "À un époxyde.",
        "correct": false,
        "explanation": "Un époxyde relève de l'oxydation douce."
      },
      {
        "content": "À l'alcane correspondant.",
        "correct": true,
        "explanation": "H2 s'ajoute sur C=C."
      }
    ],
    "explanation": "L'addition de $\\ce{H2}$ sature la double liaison et forme un alcane."
  },
  {
    "order": 43,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Lors de l'halogénation d'un alcène par $\\ce{X2}$ dans le modèle simplifié considéré :",
    "choices": [
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
      },
      {
        "content": "Le produit obtenu après addition d’une mole de $\\ce{X2}$ sur une seule double liaison est plus saturé que l’alcène initial.",
        "correct": true,
        "explanation": "La liaison $\\pi$ est consommée lors de l’addition du dihalogène."
      },
      {
        "content": "Un atome X se fixe sur chacun des deux carbones de la double liaison.",
        "correct": true,
        "explanation": "On obtient un dihalogénoalcane vicinal."
      }
    ],
    "explanation": "L'addition de $\\ce{X2}$ transforme C=C en C–C portant un halogène sur chacun des deux carbones."
  },
  {
    "order": 44,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "L'addition de $\\ce{Br2}$ sur l'éthène $\\ce{CH2=CH2}$ donne :",
    "choices": [
      {
        "content": "$\\ce{CH2Br-CH2Br}$.",
        "correct": true,
        "explanation": "Un Br s'ajoute sur chaque carbone."
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
      },
      {
        "content": "$\\ce{CH2=CHBr}$.",
        "correct": false,
        "explanation": "L’addition de $\\ce{Br2}$ sur l’éthène consomme la double liaison et introduit deux atomes de brome."
      },
      {
        "content": "$\\ce{CH3-CH3}$.",
        "correct": false,
        "explanation": "C'est le produit d'une hydrogénation."
      }
    ],
    "explanation": "Une molécule de dibrome s'additionne sur les deux carbones de la double liaison."
  },
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'addition de $\\ce{HX}$ sur un alcène dissymétrique selon la règle de Markovnikov présentée dans le modèle étudié :",
    "choices": [
      {
        "content": "Selon l’orientation de Markovnikov, X se fixe sur le carbone le plus substitué de la double liaison.",
        "correct": true,
        "explanation": "Le modèle étudié formule la règle en termes de charges partielles."
      },
      {
        "content": "La double liaison reste inchangée.",
        "correct": false,
        "explanation": "Elle est consommée par l'addition."
      },
      {
        "content": "La règle de Markovnikov conduit nécessairement à deux régioisomères en proportions égales.",
        "correct": false,
        "explanation": "Dans le modèle étudié, elle sert au contraire à prévoir l’orientation privilégiée de l’addition."
      },
      {
        "content": "La règle de Markovnikov impose toujours la fixation de l’halogène sur le carbone terminal, quelle que soit la structure de l’alcène.",
        "correct": false,
        "explanation": "Elle dépend de l’asymétrie et de l’orientation de l’addition."
      },
      {
        "content": "La régiosélectivité permet de privilégier un produit.",
        "correct": true,
        "explanation": "Le modèle étudié indique qu'un seul composé est obtenu dans le modèle retenu."
      }
    ],
    "explanation": "La règle de Markovnikov sert à choisir l'orientation de l'addition de HX sur un alcène dissymétrique."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "L'addition de $\\ce{HCl}$ sur le propène $\\ce{CH3-CH=CH2}$ donne majoritairement, dans le modèle de Markovnikov considéré :",
    "choices": [
      {
        "content": "$\\ce{CH3-CH2-CH3}$.",
        "correct": false,
        "explanation": "L’addition de HCl introduit H et Cl ; elle ne donne pas simplement le propane."
      },
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
    "explanation": "Pour un alcène terminal de type $\\ce{R-CH=CH2}$, l’addition de $\\ce{HX}$ selon Markovnikov conduit majoritairement à $\\ce{R-CHX-CH3}$."},
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'hydratation d'un alcène :",
    "choices": [
      {
        "content": "Transforme systématiquement l'alcène en alcyne.",
        "correct": false,
        "explanation": "L'insaturation diminue."
      },
      {
        "content": "L’hydratation conserve la liaison $\\ce{C=C}$ intacte dans le produit final.",
        "correct": false,
        "explanation": "L’eau s’additionne sur la double liaison, qui est consommée."
      },
      {
        "content": "Ajoute H et OH sur les deux carbones de la double liaison.",
        "correct": true,
        "explanation": "Bilan d'addition de l'eau."
      },
      {
        "content": "Conduit à un alcool.",
        "correct": true,
        "explanation": "L’hydratation d’un alcène forme une fonction alcool par addition de H et OH sur la double liaison."},
      {
        "content": "Consomme la double liaison.",
        "correct": true,
        "explanation": "Elle devient simple."
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
        "content": "Propanone directement.",
        "correct": false,
        "explanation": "Ce n'est pas une oxydation."
      },
      {
        "content": "Propane.",
        "correct": false,
        "explanation": "Ce serait une hydrogénation."
      },
      {
        "content": "Propan-2-ol.",
        "correct": true,
        "explanation": "OH se retrouve sur le carbone le plus substitué dans le modèle standard considéré."
      },
      {
        "content": "Éthanol.",
        "correct": false,
        "explanation": "L’hydratation du propène conserve trois carbones ; l’éthanol n’en contient que deux."
      },
      {
        "content": "Propan-1-ol uniquement.",
        "correct": false,
        "explanation": "Ce n'est pas le produit majoritaire Markovnikov."
      }
    ],
    "explanation": "L'orientation Markovnikov de l'hydratation du propène conduit au propan-2-ol."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles additions diminuent le degré d'insaturation d'un alcène ?",
    "choices": [
      {
        "content": "Déshydratation d’un alcool.",
        "correct": false,
        "explanation": "Une déshydratation est une élimination qui peut former un alcène ; ce n’est pas une addition sur un alcène."
      },
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
        "content": "Les alcanes possèdent déjà une double liaison plus forte.",
        "correct": false,
        "explanation": "Les alcanes n'ont pas de double liaison C=C."
      },
      {
        "content": "La réactivité étudiée est liée au caractère insaturé des alcènes.",
        "correct": true,
        "explanation": "Le caractère insaturé de l’alcène, et en particulier sa liaison $\\pi$, est à l’origine de sa réactivité d’addition."},
      {
        "content": "Le caractère insaturé d’un alcène est sans lien avec sa réactivité d’addition.",
        "correct": false,
        "explanation": "La présence de la liaison $\\pi$ de $\\ce{C=C}$ est au cœur de sa réactivité d’addition."
      },
      {
        "content": "Le caractère insaturé des alcènes est sans lien avec leur réactivité d’addition.",
        "correct": false,
        "explanation": "La liaison $\\pi$ est précisément impliquée dans les réactions d’addition."
      },
      {
        "content": "Une addition peut convertir la liaison π en deux nouvelles liaisons σ.",
        "correct": true,
        "explanation": "C'est le gain de saturation."
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
      },
      {
        "content": "L’hydrogénation du but-2-ène conduit à un hydrocarbure de formule $\\ce{C4H8}$.",
        "correct": false,
        "explanation": "L’addition de $\\ce{H2}$ conduit au butane $\\ce{C4H10}$."
      }
    ],
    "explanation": "L'hydrogénation ajoute une molécule de H2 sans modifier le nombre de carbones."
  },
  {
    "order": 52,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On ajoute une mole de $\\ce{Br2}$ à une mole de propène. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le produit est un alcyne.",
        "correct": false,
        "explanation": "Il est plus saturé que le réactif."
      },
      {
        "content": "Aucune liaison carbone-carbone du squelette n’est rompue lors de cette addition de $\\ce{Br2}$.",
        "correct": true,
        "explanation": "L’addition consomme la liaison $\\pi$ mais conserve la liaison $\\sigma$ entre les deux carbones."
      },
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
      },
      {
        "content": "2-bromopropane.",
        "correct": true,
        "explanation": "Br se fixe sur le carbone interne."
      },
      {
        "content": "1,2-dibromopropane.",
        "correct": false,
        "explanation": "Un dibromure correspondrait à l’addition de $\\ce{Br2}$ ; HBr n’introduit qu’un seul atome de brome."
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
        "content": "L’hydratation du propène donne directement un dérivé dibromé.",
        "correct": false,
        "explanation": "L’hydratation ajoute H et OH ; elle n’introduit pas de brome."
      },
      {
        "content": "L’hydrogénation du propène conduit directement à un alcool.",
        "correct": false,
        "explanation": "L’hydrogénation conduit au propane."
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
    "question": "À propos de la règle de Markovnikov :",
    "choices": [
      {
        "content": "Elle permet de choisir entre des régioisomères possibles.",
        "correct": true,
        "explanation": "C'est son intérêt."
      },
      {
        "content": "Elle permet d'attribuer une configuration R/S.",
        "correct": false,
        "explanation": "R/S relève des règles CIP et de la stéréochimie."
      },
      {
        "content": "La règle de Markovnikov concerne l’orientation d’une addition sur une double liaison asymétrique, et non le nombre de carbones.",
        "correct": true,
        "explanation": "Elle sert à prévoir la régiosélectivité de l’addition dans le modèle étudié."
      },
      {
        "content": "Elle intervient pour orienter certaines additions sur un alcène dissymétrique.",
        "correct": true,
        "explanation": "Cas de HX et de l'hydratation dans le cadre considéré."
      },
      {
        "content": "Elle n'est pas nécessaire pour l'addition symétrique de $\\ce{Br2}$.",
        "correct": true,
        "explanation": "Les deux atomes ajoutés sont identiques."
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
        "content": "Butanone directement.",
        "correct": false,
        "explanation": "Ce serait une oxydation."
      },
      {
        "content": "Butane.",
        "correct": false,
        "explanation": "Ce serait une hydrogénation."
      },
      {
        "content": "But-2-yne.",
        "correct": false,
        "explanation": "L’hydratation d’un alcène ne crée pas une triple liaison."
      },
      {
        "content": "Butan-1-ol uniquement.",
        "correct": false,
        "explanation": "Produit non majoritaire dans le modèle Markovnikov."
      },
      {
        "content": "Butan-2-ol.",
        "correct": true,
        "explanation": "OH se place sur le carbone 2."
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
        "content": "Une fonction alcool apparaît nécessairement.",
        "correct": false,
        "explanation": "Aucun O n'est introduit."
      },
      {
        "content": "L’hydrogénation diminue de deux le nombre de carbones de l’alcène.",
        "correct": false,
        "explanation": "Le squelette carboné est conservé lors de cette addition."
      },
      {
        "content": "L’hydrogénation d’un alcène retire deux atomes de carbone au squelette.",
        "correct": false,
        "explanation": "Le nombre de carbones est conservé."
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
        "content": "Le nombre d’atomes de carbone du produit reste celui de l’alcène de départ.",
        "correct": true,
        "explanation": "L’addition de $\\ce{Cl2}$ ne coupe pas le squelette carboné."
      },
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
        "content": "La règle de Markovnikov lorsqu'elle est applicable.",
        "correct": true,
        "explanation": "Elle départage les orientations de HX/H2O."
      },
      {
        "content": "Le nombre de carbones ne joue jamais aucun rôle dans le nom du produit.",
        "correct": false,
        "explanation": "Il fixe le squelette et la nomenclature."
      },
      {
        "content": "La couleur du réactif constitue à elle seule un critère de régiosélectivité.",
        "correct": false,
        "explanation": "La prédiction du produit repose sur la nature du réactif et la structure de l’alcène."
      },
      {
        "content": "La règle de Markovnikov suffit à prédire le produit quel que soit le réactif et quelle que soit la structure de l’alcène.",
        "correct": false,
        "explanation": "La nature du réactif et la structure de l’alcène restent nécessaires."
      },
      {
        "content": "La symétrie ou dissymétrie de l'alcène.",
        "correct": true,
        "explanation": "Elle influence notamment la régiosélectivité."
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
    "question": "Lors de l'addition de $\\ce{HCl}$ sur le propène selon la règle de Markovnikov considéré, cliquez sur le carbone de la double liaison qui reçoit l'atome de chlore.",
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
