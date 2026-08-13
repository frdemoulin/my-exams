import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie — Chapitre 1.3 — Les osides — Section A
 * Banque éditoriale auteur — à intégrer via le helper partagé du repo.
 */

export const UE14_BIOCH_CH3_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des osides :",
    "choices": [
      {
        "content": "Ils sont caractérisés par des liaisons O-glycosidiques dans le support.",
        "correct": true,
        "explanation": "Repère structural du chapitre."
      },
      {
        "content": "Un holoside ne comporte que des résidus glucidiques.",
        "correct": true,
        "explanation": "La partie liée à l’ose est elle-même glucidique."
      },
      {
        "content": "Un hétéroside associe une partie glucidique à un aglycone non glucidique.",
        "correct": true,
        "explanation": "Définition de l’hétéroside."
      },
      {
        "content": "Un oside contient toujours exactement deux oses.",
        "correct": false,
        "explanation": "Il peut contenir deux, trois, quatre ou de nombreux résidus."
      }
    ],
    "explanation": "Les osides regroupent des assemblages glucidiques variés, notamment reliés par des liaisons O-glycosidiques."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Un holoside formé de trois résidus d’oses est appelé :",
    "choices": [
      {
        "content": "Triholoside.",
        "correct": true,
        "explanation": "Trois résidus → tri-."
      },
      {
        "content": "Diholoside.",
        "correct": false,
        "explanation": "Deux résidus."
      },
      {
        "content": "Tétraholoside.",
        "correct": false,
        "explanation": "Quatre résidus."
      },
      {
        "content": "Hétéroside.",
        "correct": false,
        "explanation": "Ce terme dépend de la présence d’un aglycone, pas du nombre de résidus."
      }
    ],
    "explanation": "Trois résidus d’oses correspondent à un triholoside."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Lors de la condensation formant un diholoside :",
    "choices": [
      {
        "content": "Une molécule d’eau est perdue.",
        "correct": true,
        "explanation": "C’est une condensation."
      },
      {
        "content": "Deux fonctions hémiacétaliques peuvent être engagées.",
        "correct": true,
        "explanation": "Ce cas conduit à un diholoside non réducteur."
      },
      {
        "content": "Une fonction hémiacétalique et une fonction alcool peuvent être engagées.",
        "correct": true,
        "explanation": "Ce cas laisse un centre hémiacétalique libre."
      },
      {
        "content": "Il s’agit nécessairement d’une hydrolyse.",
        "correct": false,
        "explanation": "L’hydrolyse est le clivage de la liaison."
      }
    ],
    "explanation": "Deux modes de condensation sont distingués selon les fonctions engagées."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Si les deux fonctions hémiacétaliques réductrices participent à la liaison du diholoside, le produit est :",
    "choices": [
      {
        "content": "Non réducteur.",
        "correct": true,
        "explanation": "Aucun centre hémiacétalique libre ne subsiste."
      },
      {
        "content": "Toujours β(1→4).",
        "correct": false,
        "explanation": "Le caractère non réducteur ne fixe pas à lui seul la position/anomérie."
      },
      {
        "content": "Un acide uronique.",
        "correct": false,
        "explanation": "Il ne s’agit pas d’une oxydation."
      },
      {
        "content": "Un polyol.",
        "correct": false,
        "explanation": "Il ne s’agit pas d’une réduction."
      }
    ],
    "explanation": "L’engagement des deux centres anomériques supprime le pouvoir réducteur."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l’hydrolyse des liaisons glycosidiques :",
    "choices": [
      {
        "content": "Les osidases/glycosidases peuvent catalyser une hydrolyse enzymatique.",
        "correct": true,
        "explanation": "Enzymes citées."
      },
      {
        "content": "L’hydrolyse enzymatique est très spécifique.",
        "correct": true,
        "explanation": "Point du support."
      },
      {
        "content": "Certaines enzymes sont spécifiques d’un anomère.",
        "correct": true,
        "explanation": "Spécificité anomérique possible."
      },
      {
        "content": "L’hydrolyse chimique est plus spécifique que l’hydrolyse enzymatique.",
        "correct": false,
        "explanation": "Elle est décrite comme peu spécifique."
      }
    ],
    "explanation": "L’hydrolyse enzymatique est spécifique, contrairement à l’hydrolyse chimique acide peu spécifique."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le lactose :",
    "choices": [
      {
        "content": "Associe un résidu de galactose et un résidu de glucose.",
        "correct": true,
        "explanation": "Composition."
      },
      {
        "content": "Possède une liaison β(1→4) dans la fiche.",
        "correct": true,
        "explanation": "Liaison caractéristique."
      },
      {
        "content": "Conserve un centre hémiacétalique libre.",
        "correct": true,
        "explanation": "Il est donc réducteur."
      },
      {
        "content": "Est non réducteur comme le saccharose.",
        "correct": false,
        "explanation": "Le lactose est réducteur."
      }
    ],
    "explanation": "Le lactose est un diholoside réducteur galactose–glucose."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La digestion du lactose :",
    "choices": [
      {
        "content": "Fait intervenir la lactase.",
        "correct": true,
        "explanation": "Enzyme intestinale citée."
      },
      {
        "content": "La lactase est aussi décrite comme une β-galactosidase.",
        "correct": true,
        "explanation": "Deux appellations du support."
      },
      {
        "content": "Libère glucose et galactose.",
        "correct": true,
        "explanation": "Produits d’hydrolyse."
      },
      {
        "content": "Libère glucose et fructose.",
        "correct": false,
        "explanation": "Ce sont les produits du saccharose."
      }
    ],
    "explanation": "La lactase/β-galactosidase hydrolyse le lactose en glucose et galactose."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le saccharose :",
    "choices": [
      {
        "content": "Associe glucose et fructose.",
        "correct": true,
        "explanation": "Composition."
      },
      {
        "content": "Engage les deux centres anomériques.",
        "correct": true,
        "explanation": "Liaison entre C1 du glucose et C2 du fructose."
      },
      {
        "content": "Est non réducteur.",
        "correct": true,
        "explanation": "Aucun centre hémiacétalique libre."
      },
      {
        "content": "Libère du galactose lors de son hydrolyse.",
        "correct": false,
        "explanation": "Il libère glucose et fructose."
      }
    ],
    "explanation": "Le saccharose est un diholoside non réducteur glucose–fructose."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le maltose :",
    "choices": [
      {
        "content": "Associe deux résidus de glucose.",
        "correct": true,
        "explanation": "Composition."
      },
      {
        "content": "Possède une liaison α(1→4).",
        "correct": true,
        "explanation": "Liaison caractéristique."
      },
      {
        "content": "Peut résulter de l’hydrolyse de l’amidon ou du glycogène.",
        "correct": true,
        "explanation": "Origines citées."
      },
      {
        "content": "Est très abondant à l’état libre.",
        "correct": false,
        "explanation": "Il est peu présent à l’état libre."
      }
    ],
    "explanation": "Le maltose est un diglucoside réducteur α(1→4)."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi lactose, saccharose et maltose, quel diholoside est non réducteur ?",
    "choices": [
      {
        "content": "Saccharose.",
        "correct": true,
        "explanation": "Ses deux centres anomériques sont engagés."
      },
      {
        "content": "Lactose.",
        "correct": false,
        "explanation": "Réducteur."
      },
      {
        "content": "Maltose.",
        "correct": false,
        "explanation": "Réducteur."
      },
      {
        "content": "Les trois.",
        "correct": false,
        "explanation": "Un seul des trois est non réducteur."
      }
    ],
    "explanation": "Le saccharose se distingue par l’absence de centre hémiacétalique libre."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une activité lactasique intestinale insuffisante diminue la digestion du lactose. D’après le chapitre :",
    "choices": [
      {
        "content": "La liaison β(1→4) du lactose est moins efficacement hydrolysée.",
        "correct": true,
        "explanation": "La lactase hydrolyse cette liaison."
      },
      {
        "content": "La libération de glucose et de galactose diminue.",
        "correct": true,
        "explanation": "Ce sont les produits attendus."
      },
      {
        "content": "Le problème concerne la digestion d’un diholoside.",
        "correct": true,
        "explanation": "Le lactose est un diholoside."
      },
      {
        "content": "Cela correspond nécessairement à une allergie aux protéines du lait.",
        "correct": false,
        "explanation": "Le mécanisme glucidique est distinct d’une allergie protéique."
      }
    ],
    "explanation": "Le contexte clinique reste directement relié à la spécificité de la lactase."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Lors de la fermentation fromagère citée :",
    "choices": [
      {
        "content": "Des lactobacilles utilisent le lactose.",
        "correct": true,
        "explanation": "Substrat cité."
      },
      {
        "content": "De l’acide lactique est formé.",
        "correct": true,
        "explanation": "Produit cité."
      },
      {
        "content": "Le phénomène concerne un sucre du lait.",
        "correct": true,
        "explanation": "Le lactose est le sucre du lait."
      },
      {
        "content": "Le saccharose est l’unique substrat cité.",
        "correct": false,
        "explanation": "Le support parle du lactose."
      }
    ],
    "explanation": "La fermentation illustre une transformation biologique du lactose."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du saccharose alimentaire :",
    "choices": [
      {
        "content": "Il correspond au sucre de table.",
        "correct": true,
        "explanation": "Usage courant cité."
      },
      {
        "content": "Il est très soluble dans l’eau.",
        "correct": true,
        "explanation": "Propriété du support."
      },
      {
        "content": "Il provient notamment de la betterave et de la canne à sucre.",
        "correct": true,
        "explanation": "Origines citées."
      },
      {
        "content": "Son hydrolyse donne glucose et galactose.",
        "correct": false,
        "explanation": "Elle donne glucose et fructose."
      }
    ],
    "explanation": "Le saccharose est un diholoside végétal, très soluble et non réducteur."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez le nom de l’enzyme intestinale citée pour hydrolyser le lactose.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "lactase",
        "la lactase",
        "beta-galactosidase",
        "β-galactosidase",
        "beta galactosidase"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "La fiche cite la lactase, aussi appelée β-galactosidase."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un tétraholoside linéaire contient 4 résidus successifs. Combien de liaisons glycosidiques relient ces 4 résidus ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Quatre résidus successifs nécessitent trois liaisons entre voisins."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux diholosides réducteurs parmi les trois étudiés en détail.",
    "choices": [
      {
        "content": "Lactose.",
        "correct": true,
        "explanation": "Centre anomérique libre."
      },
      {
        "content": "Maltose.",
        "correct": true,
        "explanation": "Centre anomérique libre."
      },
      {
        "content": "Saccharose.",
        "correct": false,
        "explanation": "Deux centres anomériques engagés."
      },
      {
        "content": "Aucun.",
        "correct": false,
        "explanation": "Deux des trois sont réducteurs."
      }
    ],
    "explanation": "Lactose et maltose sont réducteurs ; le saccharose ne l’est pas."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Les produits d’hydrolyse des diholosides :",
    "choices": [
      {
        "content": "Lactose → glucose + galactose.",
        "correct": true,
        "explanation": "Composition du lactose."
      },
      {
        "content": "Saccharose → glucose + fructose.",
        "correct": true,
        "explanation": "Composition du saccharose."
      },
      {
        "content": "Maltose → deux glucoses.",
        "correct": true,
        "explanation": "Composition du maltose."
      },
      {
        "content": "Maltose → fructose + galactose.",
        "correct": false,
        "explanation": "Ces résidus ne constituent pas le maltose."
      }
    ],
    "explanation": "Les produits d’hydrolyse reflètent directement la composition du diholoside."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quels sont les deux oses libérés par hydrolyse du saccharose ? Répondez « X et Y ».",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glucose et fructose",
        "fructose et glucose"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le saccharose est formé d’un glucose et d’un fructose."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une glycosidase ne reconnaît qu’une configuration anomérique précise. Cela illustre :",
    "choices": [
      {
        "content": "La grande spécificité de l’hydrolyse enzymatique.",
        "correct": true,
        "explanation": "Principe du support."
      },
      {
        "content": "Une spécificité possible vis-à-vis de l’anomère.",
        "correct": true,
        "explanation": "Point explicite."
      },
      {
        "content": "Une différence avec l’hydrolyse chimique acide.",
        "correct": true,
        "explanation": "La voie chimique est peu spécifique."
      },
      {
        "content": "L’absence de rôle des enzymes dans l’hydrolyse.",
        "correct": false,
        "explanation": "Les glycosidases catalysent précisément ces réactions."
      }
    ],
    "explanation": "La spécificité enzymatique peut aller jusqu’à la reconnaissance de l’anomérie."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L’exemple d’hydrolyse chimique donné dans la fiche utilise :",
    "choices": [
      {
        "content": "Un milieu acide.",
        "correct": true,
        "explanation": "Condition citée."
      },
      {
        "content": "Une température de 60 °C.",
        "correct": true,
        "explanation": "Condition citée."
      },
      {
        "content": "Une durée d’environ une heure.",
        "correct": true,
        "explanation": "Condition citée."
      },
      {
        "content": "Un clivage hautement spécifique d’un anomère.",
        "correct": false,
        "explanation": "Le clivage chimique est peu spécifique."
      }
    ],
    "explanation": "Le support donne un exemple d’hydrolyse chimique acide à 60 °C pendant environ une heure."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Composition, pouvoir réducteur et hydrolyse des diholosides : sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "Le lactose contient du galactose.",
        "correct": true,
        "explanation": "Composition."
      },
      {
        "content": "Le saccharose contient du fructose.",
        "correct": true,
        "explanation": "Composition."
      },
      {
        "content": "Le maltose contient deux glucoses.",
        "correct": true,
        "explanation": "Composition."
      },
      {
        "content": "Le lactose est réducteur.",
        "correct": true,
        "explanation": "Centre anomérique libre."
      },
      {
        "content": "Le saccharose est non réducteur.",
        "correct": true,
        "explanation": "Deux centres engagés."
      },
      {
        "content": "Le maltose est non réducteur.",
        "correct": false,
        "explanation": "Il est réducteur."
      },
      {
        "content": "La lactase hydrolyse le saccharose.",
        "correct": false,
        "explanation": "Elle hydrolyse le lactose."
      },
      {
        "content": "Le saccharose libère du galactose.",
        "correct": false,
        "explanation": "Glucose + fructose."
      },
      {
        "content": "L’hydrolyse enzymatique est peu spécifique.",
        "correct": false,
        "explanation": "Elle est très spécifique."
      },
      {
        "content": "La condensation consomme de l’eau.",
        "correct": false,
        "explanation": "Elle s’accompagne d’une perte d’eau."
      }
    ],
    "explanation": "Cette question consolide composition, pouvoir réducteur et hydrolyse."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Après hydrolyse complète d’une molécule de lactose, sélectionnez exactement les deux résidus obtenus.",
    "choices": [
      {
        "content": "Glucose.",
        "correct": true,
        "explanation": "Constituant du lactose."
      },
      {
        "content": "Galactose.",
        "correct": true,
        "explanation": "Constituant du lactose."
      },
      {
        "content": "Fructose.",
        "correct": false,
        "explanation": "Constituant du saccharose."
      },
      {
        "content": "Mannose.",
        "correct": false,
        "explanation": "Non présent dans le lactose."
      }
    ],
    "explanation": "Le lactose fournit un glucose et un galactose."
  }
];
