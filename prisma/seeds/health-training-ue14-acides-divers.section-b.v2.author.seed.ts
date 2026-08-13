import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.7 – Section B – Préparation des acides carboxyliques
 */

export const UE14_CH11_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles voies de préparation d'un acide carboxylique sont explicitement listées dans la fiche ?",
    "choices": [
      {
        "content": "Oxydation d'un alcool primaire.",
        "correct": true,
        "explanation": "Bilan : alcool primaire → acide."
      },
      {
        "content": "Hydrolyse d'un ester.",
        "correct": true,
        "explanation": "Bilan : ester → acide + alcool."
      },
      {
        "content": "Hydrolyse d'une amide.",
        "correct": true,
        "explanation": "Bilan : amide → amine + acide."
      },
      {
        "content": "Hydrogénation d'un alcane.",
        "correct": false,
        "explanation": "Cette voie n'est pas listée."
      }
    ],
    "explanation": "La fiche rassemble plusieurs voies fonctionnelles de préparation des acides carboxyliques."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel produit acide est obtenu par oxydation d'un alcool primaire dans le tableau de la fiche ?",
    "choices": [
      {
        "content": "Un acide carboxylique.",
        "correct": true,
        "explanation": "Bilan directement indiqué."
      },
      {
        "content": "Une cétone.",
        "correct": false,
        "explanation": "Ce n'est pas le bilan du tableau."
      },
      {
        "content": "Une amide.",
        "correct": false,
        "explanation": "Pas d'azote introduit."
      },
      {
        "content": "Un nitrile.",
        "correct": false,
        "explanation": "Pas de groupe CN introduit."
      }
    ],
    "explanation": "Le bilan simplifié est alcool primaire → acide."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'hydrolyse d'un ester dans la fiche conduit :",
    "choices": [
      {
        "content": "À un acide carboxylique.",
        "correct": true,
        "explanation": "Fragment acyle."
      },
      {
        "content": "À un alcool.",
        "correct": true,
        "explanation": "Fragment OR'."
      },
      {
        "content": "À une rupture de la fonction ester.",
        "correct": true,
        "explanation": "C'est l'hydrolyse."
      },
      {
        "content": "À un organomagnésien.",
        "correct": false,
        "explanation": "Aucun Mg n'intervient."
      }
    ],
    "explanation": "Le bilan du support est ester → acide + alcool."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la saponification des esters dans cette fiche 2.7 :",
    "choices": [
      {
        "content": "Elle est mentionnée comme voie de préparation des acides.",
        "correct": true,
        "explanation": "Elle apparaît dans le tableau."
      },
      {
        "content": "Elle n'est pas développée dans ce chapitre.",
        "correct": true,
        "explanation": "Le tableau indique « Pas développé »."
      },
      {
        "content": "La fiche détaille ici tout son mécanisme.",
        "correct": false,
        "explanation": "Elle ne le développe pas."
      },
      {
        "content": "Il ne faut donc pas exiger des détails mécanistiques absents du support.",
        "correct": true,
        "explanation": "La banque reste au niveau explicitement fourni."
      }
    ],
    "explanation": "La saponification est seulement signalée dans ce chapitre, sans développement supplémentaire."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'hydrolyse d'une amide conduit, dans le bilan de la fiche :",
    "choices": [
      {
        "content": "À une amine.",
        "correct": true,
        "explanation": "Produit azoté indiqué."
      },
      {
        "content": "À un acide carboxylique.",
        "correct": true,
        "explanation": "Produit acide indiqué."
      },
      {
        "content": "À un alcool uniquement.",
        "correct": false,
        "explanation": "Ce bilan correspondrait à l'ester."
      },
      {
        "content": "À une rupture de la fonction amide.",
        "correct": true,
        "explanation": "Principe de l'hydrolyse."
      }
    ],
    "explanation": "Le support résume : amide → amine + acide."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'hydrolyse des nitriles :",
    "choices": [
      {
        "content": "Le nitrile conduit d'abord à une amide.",
        "correct": true,
        "explanation": "Premier terme du bilan."
      },
      {
        "content": "L'amide conduit ensuite à un acide.",
        "correct": true,
        "explanation": "Deuxième terme."
      },
      {
        "content": "Le bilan global est nitrile → amide → acide.",
        "correct": true,
        "explanation": "Écriture du support."
      },
      {
        "content": "Le nitrile conduit directement à un alcane sans intermédiaire.",
        "correct": false,
        "explanation": "Ce n'est pas le bilan présenté."
      }
    ],
    "explanation": "La fiche insiste sur l'intermédiaire amide dans l'hydrolyse du nitrile."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel intermédiaire est explicitement placé entre nitrile et acide ?",
    "choices": [
      {
        "content": "Amide.",
        "correct": true,
        "explanation": "Nitrile → amide → acide."
      },
      {
        "content": "Alcène.",
        "correct": false,
        "explanation": "Pas dans le bilan."
      },
      {
        "content": "Thioester.",
        "correct": false,
        "explanation": "Pas dans le bilan."
      },
      {
        "content": "Organomagnésien.",
        "correct": false,
        "explanation": "C'est une autre voie de préparation."
      }
    ],
    "explanation": "L'amide est l'intermédiaire de la séquence d'hydrolyse du nitrile."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la carboxylation d'un organomagnésien par le dioxyde de carbone :",
    "choices": [
      {
        "content": "L'organomagnésien réagit avec $\\ce{CO2}$.",
        "correct": true,
        "explanation": "Bilan de la fiche."
      },
      {
        "content": "Le produit final est un acide carboxylique.",
        "correct": true,
        "explanation": "R-MgX + CO2 → R-COOH."
      },
      {
        "content": "$\\ce{CO2}$ apporte un atome de carbone au produit final.",
        "correct": true,
        "explanation": "Point explicitement souligné."
      },
      {
        "content": "Le nombre de carbones diminue d'une unité.",
        "correct": false,
        "explanation": "Il augmente d'une unité."
      }
    ],
    "explanation": "La carboxylation par CO2 permet d'allonger le squelette carboné d'un carbone."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Pour préparer un acide à 4 carbones par la voie organomagnésienne de la fiche, combien de carbones doit contenir le fragment carboné de l'organomagnésien ?",
    "choices": [
      {
        "content": "3.",
        "correct": true,
        "explanation": "CO2 apporte le quatrième carbone."
      },
      {
        "content": "4.",
        "correct": false,
        "explanation": "On obtiendrait un acide à 5 carbones dans le raisonnement du support."
      },
      {
        "content": "2.",
        "correct": false,
        "explanation": "On obtiendrait un acide à 3 carbones."
      },
      {
        "content": "5.",
        "correct": false,
        "explanation": "Le produit final serait plus long."
      }
    ],
    "explanation": "L'organomagnésien doit contenir un carbone de moins que l'acide final."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions résument correctement le bilan carbone de la carboxylation par CO2 ?",
    "choices": [
      {
        "content": "Le squelette de R est conservé.",
        "correct": true,
        "explanation": "R devient le substituant de la fonction acide."
      },
      {
        "content": "Un carbone supplémentaire provient de CO2.",
        "correct": true,
        "explanation": "Point explicite."
      },
      {
        "content": "Le carbone du CO2 devient le carbone de la fonction carboxylique dans le produit.",
        "correct": true,
        "explanation": "C'est le bilan R-MgX + CO2 → R-COOH."
      },
      {
        "content": "Deux carbones sont perdus.",
        "correct": false,
        "explanation": "Aucun tel bilan n'est donné."
      }
    ],
    "explanation": "La carboxylation est une réaction d'allongement d'une unité carbone."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On veut préparer un acide carboxylique à partir d'un ester. Quelles conclusions sont cohérentes ?",
    "choices": [
      {
        "content": "Une hydrolyse est une voie du support.",
        "correct": true,
        "explanation": "Elle est explicitement listée."
      },
      {
        "content": "Un alcool est également formé dans le bilan.",
        "correct": true,
        "explanation": "Ester → acide + alcool."
      },
      {
        "content": "La fonction ester est rompue.",
        "correct": true,
        "explanation": "C'est l'hydrolyse."
      },
      {
        "content": "Le squelette carboné de l'acide doit obligatoirement gagner un carbone.",
        "correct": false,
        "explanation": "Ce gain caractérise la voie organomagnésien + CO2."
      }
    ],
    "explanation": "L'hydrolyse d'un ester et la carboxylation d'un organomagnésien conduisent toutes deux à un acide, mais par des bilans différents."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare hydrolyse d'un ester et hydrolyse d'une amide. Quelles associations sont exactes ?",
    "choices": [
      {
        "content": "Ester → acide + alcool.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "Amide → acide + amine.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "Les deux donnent un acide carboxylique.",
        "correct": true,
        "explanation": "Point commun."
      },
      {
        "content": "Les deux donnent nécessairement un alcool.",
        "correct": false,
        "explanation": "L'amide donne une amine dans le bilan."
      }
    ],
    "explanation": "Identifier le partenaire libéré permet de distinguer les deux hydrolyses."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une fonction nitrile est hydrolysée jusqu'à l'acide. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une amide apparaît comme intermédiaire.",
        "correct": true,
        "explanation": "Nitrile → amide → acide."
      },
      {
        "content": "L'acide final possède le même carbone fonctionnel que celui du nitrile initial dans le schéma de la fiche.",
        "correct": true,
        "explanation": "Le carbone du groupe nitrile devient le carbone du carboxyle."
      },
      {
        "content": "Le support ne présente pas de perte de carbone dans cette voie.",
        "correct": true,
        "explanation": "Le bilan conserve le squelette."
      },
      {
        "content": "Le nitrile doit perdre CO2 avant de former l'acide.",
        "correct": false,
        "explanation": "Ce serait une décarboxylation, non le bilan d'hydrolyse."
      }
    ],
    "explanation": "La séquence nitrile → amide → acide conserve le carbone fonctionnel dans le bilan représenté."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel enchaînement est conforme au support ?",
    "choices": [
      {
        "content": "Nitrile → amide → acide.",
        "correct": true,
        "explanation": "Séquence exacte."
      },
      {
        "content": "Nitrile → alcool → alcane.",
        "correct": false,
        "explanation": "Non enseigné ici."
      },
      {
        "content": "Amide → nitrile → acide.",
        "correct": false,
        "explanation": "Ordre inverse."
      },
      {
        "content": "Acide → nitrile → amide.",
        "correct": false,
        "explanation": "Pas le bilan présenté."
      }
    ],
    "explanation": "L'hydrolyse progressive du nitrile passe par l'amide."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On souhaite préparer l'acide propanoïque par carboxylation d'un organomagnésien. Selon la règle de la fiche :",
    "choices": [
      {
        "content": "Le fragment carboné de l'organomagnésien doit comporter 2 carbones.",
        "correct": true,
        "explanation": "Le CO2 apporte le troisième."
      },
      {
        "content": "$\\ce{CO2}$ fournit le carbone carboxylique.",
        "correct": true,
        "explanation": "Bilan de la carboxylation."
      },
      {
        "content": "Le produit final comporte un carbone de plus que R.",
        "correct": true,
        "explanation": "Règle explicitement donnée."
      },
      {
        "content": "Il faut partir d'un fragment R à 4 carbones.",
        "correct": false,
        "explanation": "Le produit serait plus long."
      }
    ],
    "explanation": "Pour un acide C3, l'organomagnésien doit porter un fragment C2."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un organomagnésien contient un fragment carboné R de 5 carbones. Combien de carbones comportera l'acide final après réaction avec CO2 dans le modèle de la fiche ?",
    "answer": {
      "type": "number",
      "value": 6,
      "tolerance": 0
    },
    "explanation": "Le CO2 ajoute un carbone au squelette de R."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On cherche à préparer un acide à 6 carbones par différentes voies. Quelles propositions sont cohérentes avec les bilans de la fiche ?",
    "choices": [
      {
        "content": "Un organomagnésien à 5 carbones peut être utilisé avec CO2.",
        "correct": true,
        "explanation": "CO2 apporte le sixième carbone."
      },
      {
        "content": "L'hydrolyse d'un ester correspondant peut donner l'acide.",
        "correct": true,
        "explanation": "Voie listée."
      },
      {
        "content": "L'hydrolyse d'une amide correspondante peut donner l'acide.",
        "correct": true,
        "explanation": "Voie listée."
      },
      {
        "content": "Toutes les voies imposent un gain d'un carbone.",
        "correct": false,
        "explanation": "Seule la carboxylation par CO2 impose ce gain."
      }
    ],
    "explanation": "Le chapitre présente plusieurs voies d'accès à un même type de fonction acide."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quel repère permet de choisir la longueur de l'organomagnésien lors d'une carboxylation ?",
    "choices": [
      {
        "content": "Compter les carbones de l'acide final désiré.",
        "correct": true,
        "explanation": "Point de départ."
      },
      {
        "content": "Retirer un carbone pour obtenir la taille de R.",
        "correct": true,
        "explanation": "CO2 apportera l'unité manquante."
      },
      {
        "content": "Le carbone ajouté est celui de CO2.",
        "correct": true,
        "explanation": "Règle du support."
      },
      {
        "content": "Ajouter deux carbones à la taille de R.",
        "correct": false,
        "explanation": "Le gain est d'une seule unité."
      }
    ],
    "explanation": "La règle est simple : taille de R = taille de l'acide final − 1."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'oxydation d'un alcool primaire vers un acide :",
    "choices": [
      {
        "content": "Elle est listée comme voie de préparation.",
        "correct": true,
        "explanation": "Tableau du support."
      },
      {
        "content": "Le produit final est une fonction acide carboxylique.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Cette voie ne nécessite pas l'apport d'un carbone extérieur dans le bilan simplifié.",
        "correct": true,
        "explanation": "Contrairement à la carboxylation par CO2."
      },
      {
        "content": "Le CO2 est obligatoirement utilisé.",
        "correct": false,
        "explanation": "Pas dans cette voie."
      }
    ],
    "explanation": "La comparaison des voies repose notamment sur le bilan carbone."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un étudiant confond hydrolyse de nitrile et carboxylation d'un organomagnésien. Quelles distinctions sont correctes ?",
    "choices": [
      {
        "content": "Le nitrile passe par une amide.",
        "correct": true,
        "explanation": "Intermédiaire explicite."
      },
      {
        "content": "La carboxylation utilise CO2.",
        "correct": true,
        "explanation": "Réactif explicite."
      },
      {
        "content": "La carboxylation augmente le nombre de carbones d'une unité.",
        "correct": true,
        "explanation": "CO2 apporte un carbone."
      },
      {
        "content": "L'hydrolyse du nitrile exige un organomagnésien.",
        "correct": false,
        "explanation": "Ce sont deux voies différentes."
      }
    ],
    "explanation": "Les deux voies convergent vers un acide mais n'ont ni le même intermédiaire ni le même bilan carbone."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On part d'une amide et l'on veut obtenir l'acide correspondant. Quelles propositions sont compatibles avec le support ?",
    "choices": [
      {
        "content": "Une hydrolyse est utilisée.",
        "correct": true,
        "explanation": "Voie listée."
      },
      {
        "content": "Une amine est libérée dans le bilan simplifié.",
        "correct": true,
        "explanation": "Amide → amine + acide."
      },
      {
        "content": "La fonction acide est créée au niveau du groupement acyle.",
        "correct": true,
        "explanation": "Le schéma fonctionnel l'indique."
      },
      {
        "content": "CO2 doit obligatoirement être ajouté.",
        "correct": false,
        "explanation": "Pas dans cette voie."
      }
    ],
    "explanation": "L'hydrolyse des amides constitue une voie directe de formation des acides dans la fiche."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel intermédiaire fonctionnel est formé lors de l'hydrolyse d'un nitrile avant l'acide ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "amide",
        "une amide"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le bilan du support est nitrile → amide → acide."
  },
  {
    "order": 45,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare quatre voies vers un acide : oxydation d'un alcool primaire, hydrolyse d'un ester, hydrolyse d'une amide et carboxylation d'un organomagnésien. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les quatre conduisent à une fonction acide carboxylique.",
        "correct": true,
        "explanation": "C'est leur point commun."
      },
      {
        "content": "L'hydrolyse de l'ester libère un alcool.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "L'hydrolyse de l'amide libère une amine.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "La carboxylation par CO2 augmente la longueur du squelette d'un carbone.",
        "correct": true,
        "explanation": "Spécificité."
      }
    ],
    "explanation": "Le MASTER doit faire distinguer les bilans associés à chaque voie."
  },
  {
    "order": 46,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un acide final comporte 7 carbones et provient d'une carboxylation par CO2. Que peut-on déduire ?",
    "choices": [
      {
        "content": "Le fragment R de l'organomagnésien comporte 6 carbones.",
        "correct": true,
        "explanation": "Règle n−1."
      },
      {
        "content": "Le carbone supplémentaire provient de CO2.",
        "correct": true,
        "explanation": "Règle du support."
      },
      {
        "content": "Le carbone du CO2 devient le carbone carboxylique.",
        "correct": true,
        "explanation": "Bilan R-MgX + CO2 → R-COOH."
      },
      {
        "content": "L'organomagnésien devait comporter 8 carbones.",
        "correct": false,
        "explanation": "Ce serait trop long."
      }
    ],
    "explanation": "La carboxylation est l'occasion de vérifier un bilan carbone simple mais fréquent."
  },
  {
    "order": 47,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On part d'un nitrile à 4 carbones et on l'hydrolyse complètement selon la fiche. Quelles propositions sont cohérentes ?",
    "choices": [
      {
        "content": "Une amide intermédiaire est formée.",
        "correct": true,
        "explanation": "Étape du bilan."
      },
      {
        "content": "L'acide final conserve 4 carbones dans le schéma de la fiche.",
        "correct": true,
        "explanation": "Aucune perte ou addition de carbone n'est indiquée."
      },
      {
        "content": "Le carbone du groupe nitrile devient celui du carboxyle.",
        "correct": true,
        "explanation": "Lecture du schéma nitrile → amide → acide."
      },
      {
        "content": "L'acide final possède nécessairement 5 carbones.",
        "correct": false,
        "explanation": "Aucun CO2 n'est ajouté."
      }
    ],
    "explanation": "L'hydrolyse du nitrile se distingue de la carboxylation par l'absence de gain carboné."
  },
  {
    "order": 48,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On souhaite obtenir un acide sans modifier le nombre de carbones du précurseur. Quelles voies du tableau sont compatibles dans leur bilan simplifié ?",
    "choices": [
      {
        "content": "Oxydation d'un alcool primaire correspondant.",
        "correct": true,
        "explanation": "Pas de gain carboné explicite."
      },
      {
        "content": "Hydrolyse d'un ester correspondant.",
        "correct": true,
        "explanation": "Le squelette acyle est conservé."
      },
      {
        "content": "Hydrolyse d'une amide correspondante.",
        "correct": true,
        "explanation": "Le squelette acyle est conservé."
      },
      {
        "content": "Carboxylation d'un organomagnésien par CO2.",
        "correct": false,
        "explanation": "Elle ajoute un carbone."
      }
    ],
    "explanation": "Le bilan carbone permet de classer rapidement les voies."
  },
  {
    "order": 49,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On dispose d'un organomagnésien à 3 carbones. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Sa réaction avec CO2 peut conduire à un acide à 4 carbones.",
        "correct": true,
        "explanation": "Gain d'un carbone."
      },
      {
        "content": "Le carbone carboxylique du produit vient de CO2.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "La règle de la fiche impose un organomagnésien ayant un carbone de moins que l'acide final.",
        "correct": true,
        "explanation": "Application directe."
      },
      {
        "content": "Le produit final doit avoir 2 carbones.",
        "correct": false,
        "explanation": "Le nombre augmente, il ne diminue pas."
      }
    ],
    "explanation": "La règle n−1 doit pouvoir être appliquée dans les deux sens."
  },
  {
    "order": 50,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "La carboxylation d'un organomagnésien à deux carbones par CO2 conduit à l'acide propanoïque représenté ci-dessous. Cliquez sur le carbone apporté par le CO2.",
    "image": {
      "src": "/images/training/ue14/acides-divers/carboxylation-co2-carbone-qzone.svg",
      "alt": "Schéma original de l'acide propanoïque CH3-CH2-COOH avec le carbone carboxylique à droite",
      "width": 1200,
      "height": 500
    },
    "expectedZones": [
      {
        "id": "carbone-co2",
        "label": "Carbone carboxylique apporté par CO2",
        "x": 0.7,
        "y": 0.5,
        "tolerance": 0.09
      }
    ],
    "explanation": "Dans le bilan R-MgX + CO2 → R-COOH, le carbone du CO2 devient le carbone de la fonction carboxylique."
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une stratégie de synthèse prévoit : nitrile → amide → acide. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle correspond à l'hydrolyse du nitrile.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "L'amide est un intermédiaire.",
        "correct": true,
        "explanation": "Étape centrale."
      },
      {
        "content": "Le produit final est une fonction acide carboxylique.",
        "correct": true,
        "explanation": "Dernier terme."
      },
      {
        "content": "Cette voie repose sur une perte obligatoire de CO2.",
        "correct": false,
        "explanation": "Aucune décarboxylation n'est impliquée."
      }
    ],
    "explanation": "Il faut distinguer hydrolyse du nitrile et décarboxylation."
  },
  {
    "order": 52,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quel raisonnement permet d'identifier une carboxylation par CO2 parmi plusieurs réactions de préparation ?",
    "choices": [
      {
        "content": "Le précurseur est un organomagnésien.",
        "correct": true,
        "explanation": "R-MgX."
      },
      {
        "content": "CO2 apparaît comme réactif.",
        "correct": true,
        "explanation": "Signature de la voie."
      },
      {
        "content": "Le produit est un acide avec un carbone de plus que R.",
        "correct": true,
        "explanation": "Bilan carbone."
      },
      {
        "content": "Une amide intermédiaire est obligatoire.",
        "correct": false,
        "explanation": "Cela concerne l'hydrolyse d'un nitrile."
      }
    ],
    "explanation": "La combinaison organomagnésien + CO2 + gain d'un carbone identifie la carboxylation."
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On veut préparer l'acide pentanoïque par la voie organomagnésienne. Quelles propositions sont cohérentes ?",
    "choices": [
      {
        "content": "Le fragment R doit comporter 4 carbones.",
        "correct": true,
        "explanation": "Le CO2 apporte le cinquième."
      },
      {
        "content": "Le CO2 est incorporé dans la fonction carboxylique.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "La réaction finale est résumée par R-MgX + CO2 → R-COOH.",
        "correct": true,
        "explanation": "Écriture du support."
      },
      {
        "content": "Le fragment R doit comporter 5 carbones.",
        "correct": false,
        "explanation": "On obtiendrait un acide à 6 carbones."
      }
    ],
    "explanation": "La longueur du précurseur se déduit directement de l'acide cible."
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un acide peut être préparé par hydrolyse d'un ester ou par carboxylation d'un organomagnésien. Quelles différences sont correctes ?",
    "choices": [
      {
        "content": "L'hydrolyse d'ester libère un alcool.",
        "correct": true,
        "explanation": "Produit associé."
      },
      {
        "content": "La carboxylation utilise CO2.",
        "correct": true,
        "explanation": "Réactif associé."
      },
      {
        "content": "La carboxylation ajoute un carbone au squelette de R.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "L'hydrolyse d'ester ajoute obligatoirement un carbone.",
        "correct": false,
        "explanation": "Ce n'est pas le bilan."
      }
    ],
    "explanation": "Le raisonnement croise nature des réactifs, co-produits et bilan carbone."
  },
  {
    "order": 55,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Alcool primaire → acide par oxydation.",
        "correct": true,
        "explanation": "Voie de préparation."
      },
      {
        "content": "Ester → acide + alcool par hydrolyse.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Amide → amine + acide par hydrolyse.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Nitrile → amide → acide.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Organomagnésien + CO2 → acide avec gain d'un carbone.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "La saponification est détaillée mécanistiquement dans cette fiche.",
        "correct": false,
        "explanation": "Elle est seulement mentionnée."
      },
      {
        "content": "Le nitrile perd un carbone lors de l'hydrolyse.",
        "correct": false,
        "explanation": "Aucune perte n'est indiquée."
      },
      {
        "content": "L'organomagnésien doit contenir un carbone de plus que l'acide cible.",
        "correct": false,
        "explanation": "Un de moins."
      },
      {
        "content": "L'hydrolyse d'une amide libère un alcool.",
        "correct": false,
        "explanation": "Elle libère une amine."
      },
      {
        "content": "CO2 n'apporte aucun carbone au produit.",
        "correct": false,
        "explanation": "Il apporte le carbone carboxylique."
      }
    ],
    "explanation": "Cette question rassemble toutes les voies de préparation explicitement données."
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Un acide cible contient 8 carbones. Combien de carbones doit contenir le fragment carboné R de l'organomagnésien utilisé avec CO2 ?",
    "answer": {
      "type": "number",
      "value": 7,
      "tolerance": 0
    },
    "explanation": "La règle de la fiche est : l'organomagnésien contient un carbone de moins que l'acide final."
  }
];
