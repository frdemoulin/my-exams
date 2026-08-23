import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Rôles biologiques des acides aminés et des peptides — Synthèse — Rôles biologiques des acides aminés et peptides */
export const UE14_BIOCH_CH11_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les acides aminés indispensables chez l’adulte, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le groupe Leu-Thr-Lys-Trp-Phe-Val-Met-Ile constitue donc un sous-ensemble de huit des neuf indispensables.",
        "correct": true,
        "explanation": "Ce groupe constitue un sous-ensemble de huit des neuf indispensables."
      },
      {
        "content": "L’histidine n’est indispensable que chez le nourrisson.",
        "correct": false,
        "explanation": "Elle est aussi indispensable chez l’adulte."
      },
      {
        "content": "Leucine, threonine, lysine, tryptophane, phenylalanine, valine, methionine et isoleucine font partie des acides aminés indispensables.",
        "correct": true,
        "explanation": "Ces huit acides aminés appartiennent bien au groupe des indispensables."
      },
      {
        "content": "Ils doivent être apportés en quantité suffisante par l’alimentation.",
        "correct": true,
        "explanation": "La synthèse endogène ne permet pas de couvrir le besoin en acides aminés indispensables."
      },
      {
        "content": "La glycine et l’alanine sont toujours indispensables chez l’adulte sain.",
        "correct": false,
        "explanation": "Elles sont généralement synthétisables."
      }
    ],
    "explanation": "Chez l’adulte sain, neuf acides aminés sont indispensables ; l’histidine en fait partie."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien d’acides aminés sont classiquement indispensables chez l’adulte humain sain ?",
    "answer": {
      "type": "number",
      "value": 9,
      "tolerance": 0
    },
    "explanation": "Chez l’adulte sain, neuf acides aminés sont indispensables ; l’histidine en fait partie."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant le cycle de l’urée ?",
    "choices": [
      {
        "content": "Le cycle de l’urée transforme l’urée en ammoniac pour le stocker.",
        "correct": false,
        "explanation": "Le sens physiologique majeur est la détoxification de l’ammoniac."
      },
      {
        "content": "Le foie est l’organe majeur de l’uréogenèse.",
        "correct": true,
        "explanation": "Les hépatocytes expriment l’ensemble des enzymes du cycle."
      },
      {
        "content": "L’ornithine et la citrulline sont des acides gras.",
        "correct": false,
        "explanation": "Ce sont des acides aminés non protéinogènes du cycle."
      },
      {
        "content": "L’uréogenèse n’a aucun lien avec le catabolisme azoté.",
        "correct": false,
        "explanation": "Elle élimine l’azote excédentaire."
      },
      {
        "content": "Il se déroule exclusivement dans les globules rouges.",
        "correct": false,
        "explanation": "Le foie est le site principal."
      }
    ],
    "explanation": "Le cycle hépatique de l’urée détoxifie l’azote ammoniacal et implique ornithine, citrulline et arginine."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le cycle de l’urée, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le foie est l’organe majeur de l’uréogenèse.",
        "correct": true,
        "explanation": "Les hépatocytes expriment l’ensemble des enzymes du cycle."
      },
      {
        "content": "Le cycle participe à la détoxification de l’ammoniaque produit notamment lors du catabolisme des acides aminés.",
        "correct": true,
        "explanation": "L’hyperammoniémie est neurotoxique."
      },
      {
        "content": "Il permet de convertir une partie de l’azote ammoniacal en urée moins toxique.",
        "correct": true,
        "explanation": "L’urée est ensuite éliminée principalement par le rein."
      },
      {
        "content": "Il se déroule exclusivement dans les globules rouges.",
        "correct": false,
        "explanation": "Le foie est le site principal."
      },
      {
        "content": "L’ornithine, la citrulline et l’arginine sont des intermédiaires du cycle.",
        "correct": true,
        "explanation": "Ils assurent la progression cyclique de l’azote."
      }
    ],
    "explanation": "Le cycle hépatique de l’urée détoxifie l’azote ammoniacal et implique ornithine, citrulline et arginine."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant les acides aminés glucoformateurs, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Leucine et lysine sont exclusivement glucogéniques.",
        "correct": false,
        "explanation": "Elles sont exclusivement cétogènes."
      },
      {
        "content": "Tous les acides aminés sont exclusivement glucogéniques.",
        "correct": false,
        "explanation": "Certains sont aussi ou exclusivement cétogènes."
      },
      {
        "content": "Un acide aminé peut être à la fois glucogénique et cétogénique.",
        "correct": true,
        "explanation": "Plusieurs acides aminés ont des produits de dégradation mixtes."
      },
      {
        "content": "Le caractère glucogénique concerne le squelette carboné après élimination de l’azote.",
        "correct": true,
        "explanation": "Il ne signifie pas qu’un acide aminé est du glucose."
      },
      {
        "content": "Aucun intermédiaire du cycle de Krebs ne peut contribuer à la néoglucogenèse.",
        "correct": false,
        "explanation": "Plusieurs y contribuent via oxaloacétate."
      }
    ],
    "explanation": "La plupart des acides aminés sont glucogéniques ; leucine et lysine sont exclusivement cétogènes.",
    "requiredSelectionCount": 2
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les acides aminés glucoformateurs ?",
    "choices": [
      {
        "content": "La plupart des acides aminés standards possèdent au moins un devenir glucogénique.",
        "correct": true,
        "explanation": "Leucine et lysine sont les deux exceptions exclusivement cétogènes."
      },
      {
        "content": "Tous les acides aminés sont exclusivement glucogéniques.",
        "correct": false,
        "explanation": "Certains sont aussi ou exclusivement cétogènes."
      },
      {
        "content": "Aucun intermédiaire du cycle de Krebs ne peut contribuer à la néoglucogenèse.",
        "correct": false,
        "explanation": "Plusieurs y contribuent via oxaloacétate."
      },
      {
        "content": "Le caractère glucogénique concerne le squelette carboné après élimination de l’azote.",
        "correct": true,
        "explanation": "Il ne signifie pas qu’un acide aminé est du glucose."
      },
      {
        "content": "Leucine et lysine sont exclusivement glucogéniques.",
        "correct": false,
        "explanation": "Elles sont exclusivement cétogènes."
      }
    ],
    "explanation": "La plupart des acides aminés sont glucogéniques ; leucine et lysine sont exclusivement cétogènes."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle famille de neurotransmetteurs comprend dopamine, noradrénaline et adrénaline dérivées de la tyrosine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "catécholamines",
        "catecholamines"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La tyrosine est un précurseur des catécholamines, de la mélanine et contribue aux hormones thyroïdiennes."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la tyrosine comme précurseur, laquelle est correcte ?",
    "choices": [
      {
        "content": "Les catécholamines dérivent exclusivement de la glycine.",
        "correct": false,
        "explanation": "Elles dérivent de la tyrosine."
      },
      {
        "content": "La tyrosine est un acide gras.",
        "correct": false,
        "explanation": "C’est un acide aminé aromatique."
      },
      {
        "content": "Elle ne participe jamais à la synthèse hormonale.",
        "correct": false,
        "explanation": "Elle contribue aux hormones thyroïdiennes."
      },
      {
        "content": "La tyrosine est le précurseur direct du GABA par décarboxylation.",
        "correct": false,
        "explanation": "Le GABA dérive du glutamate."
      },
      {
        "content": "La mélanine dérive aussi de la voie de la tyrosine.",
        "correct": true,
        "explanation": "La tyrosinase initie cette voie."
      }
    ],
    "explanation": "La tyrosine est un précurseur des catécholamines, de la mélanine et contribue aux hormones thyroïdiennes."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le glutamate dans le système nerveux ?",
    "choices": [
      {
        "content": "La formation du GABA est une phosphorylation du glutamate.",
        "correct": false,
        "explanation": "C’est une décarboxylation."
      },
      {
        "content": "Le glutamate est un neurotransmetteur excitateur majeur du système nerveux central.",
        "correct": true,
        "explanation": "Il agit via des récepteurs ionotropiques et métabotropiques."
      },
      {
        "content": "Le GABA est un neurotransmetteur inhibiteur majeur du cerveau adulte.",
        "correct": true,
        "explanation": "Il diminue l’excitabilité de nombreux neurones."
      },
      {
        "content": "La glutamate décarboxylase utilise le PLP dérivé de la vitamine B6.",
        "correct": true,
        "explanation": "Le PLP est cofacteur de nombreuses décarboxylases d’acides aminés."
      },
      {
        "content": "Le glutamate n’a aucun rôle dans le système nerveux.",
        "correct": false,
        "explanation": "Il y joue un rôle majeur."
      }
    ],
    "explanation": "Glutamate est excitateur et précurseur du GABA inhibiteur par décarboxylation PLP-dépendante."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le glutamate est uniquement un neurotransmetteur inhibiteur.",
        "correct": false,
        "explanation": "Il est principalement excitateur."
      },
      {
        "content": "Le GABA est formé par décarboxylation du glutamate.",
        "correct": true,
        "explanation": "La glutamate décarboxylase catalyse cette réaction."
      },
      {
        "content": "Elle ne participe jamais à la synthèse hormonale.",
        "correct": false,
        "explanation": "Elle contribue aux hormones thyroïdiennes."
      },
      {
        "content": "La glutamate décarboxylase utilise le PLP dérivé de la vitamine B6.",
        "correct": true,
        "explanation": "Le PLP est cofacteur de nombreuses décarboxylases d’acides aminés."
      },
      {
        "content": "Les catécholamines dérivent exclusivement de la glycine.",
        "correct": false,
        "explanation": "Elles dérivent de la tyrosine."
      },
      {
        "content": "La tyrosine peut être synthétisée à partir de phénylalanine.",
        "correct": true,
        "explanation": "La phénylalanine hydroxylase catalyse cette conversion."
      },
      {
        "content": "Elle est un précurseur des catécholamines.",
        "correct": true,
        "explanation": "Dopamine, noradrénaline et adrénaline dérivent de la tyrosine."
      },
      {
        "content": "La mélanine dérive aussi de la voie de la tyrosine.",
        "correct": true,
        "explanation": "La tyrosinase initie cette voie."
      },
      {
        "content": "La tyrosine est un acide gras.",
        "correct": false,
        "explanation": "C’est un acide aminé aromatique."
      },
      {
        "content": "La formation du GABA est une phosphorylation du glutamate.",
        "correct": false,
        "explanation": "C’est une décarboxylation."
      }
    ],
    "explanation": "Glutamate est excitateur et précurseur du GABA inhibiteur par décarboxylation PLP-dépendante. La tyrosine est un précurseur des catécholamines, de la mélanine et contribue aux hormones thyroïdiennes."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la formation de l’insuline, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La traduction produit d’abord la préproinsuline.",
        "correct": true,
        "explanation": "Elle contient un peptide signal N-terminal."
      },
      {
        "content": "La proinsuline contient les futures chaînes B et A reliées par le peptide C.",
        "correct": true,
        "explanation": "Elle se replie et forme ses ponts disulfure."
      },
      {
        "content": "Le retrait du peptide signal donne la proinsuline.",
        "correct": true,
        "explanation": "Cette étape a lieu dans le réticulum endoplasmique."
      },
      {
        "content": "La préproinsuline est un glucide.",
        "correct": false,
        "explanation": "C’est un précurseur polypeptidique."
      },
      {
        "content": "Le clivage du peptide C et de segments dibasiques donne l’insuline mature.",
        "correct": true,
        "explanation": "La maturation a lieu dans la voie sécrétoire."
      }
    ],
    "explanation": "Préproinsuline → proinsuline → insuline + peptide C : la maturation associe retrait du signal, repliement et clivages."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel précurseur apparaît immédiatement après retrait du peptide signal de la préproinsuline ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "proinsuline",
        "la proinsuline"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Préproinsuline → proinsuline → insuline + peptide C : la maturation associe retrait du signal, repliement et clivages."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant l’insuline mature, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Elle ne possède aucun pont disulfure.",
        "correct": false,
        "explanation": "Elle en possède trois au total."
      },
      {
        "content": "Elle possède trois chaînes A, B et C dans sa forme mature.",
        "correct": false,
        "explanation": "Le peptide C est clivé."
      },
      {
        "content": "Elle abaisse la glycémie en favorisant l’utilisation et le stockage du glucose selon les tissus.",
        "correct": true,
        "explanation": "C’est l’hormone hypoglycémiante majeure."
      },
      {
        "content": "Deux ponts disulfure relient les chaînes A et B.",
        "correct": true,
        "explanation": "Un troisième pont disulfure est intrachaîne dans A."
      },
      {
        "content": "Elle comporte 29 acides aminés.",
        "correct": false,
        "explanation": "Ce nombre correspond au glucagon."
      }
    ],
    "explanation": "L’insuline humaine mature compte 51 résidus, deux chaînes et trois ponts disulfure au total.",
    "requiredSelectionCount": 2
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant l’insuline mature, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle abaisse la glycémie en favorisant l’utilisation et le stockage du glucose selon les tissus.",
        "correct": true,
        "explanation": "C’est l’hormone hypoglycémiante majeure."
      },
      {
        "content": "L’insuline humaine mature comporte 51 acides aminés.",
        "correct": true,
        "explanation": "La chaîne A en contient 21 et la chaîne B 30."
      },
      {
        "content": "Elle possède trois chaînes A, B et C dans sa forme mature.",
        "correct": false,
        "explanation": "Le peptide C est clivé."
      },
      {
        "content": "Elle augmente la glycémie comme fonction principale.",
        "correct": false,
        "explanation": "Elle est hypoglycémiante."
      },
      {
        "content": "Elle ne possède aucun pont disulfure.",
        "correct": false,
        "explanation": "Elle en possède trois au total."
      }
    ],
    "explanation": "L’insuline humaine mature compte 51 résidus, deux chaînes et trois ponts disulfure au total."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la pro-opiomélanocortine, laquelle est correcte ?",
    "choices": [
      {
        "content": "La POMC est un monosaccharide.",
        "correct": false,
        "explanation": "C’est une prohormone polypeptidique."
      },
      {
        "content": "L’ACTH dérive de la POMC.",
        "correct": true,
        "explanation": "Elle stimule le cortex surrénalien."
      },
      {
        "content": "L’ACTH est synthétisée à partir du cholestérol et non d’un précurseur peptidique.",
        "correct": false,
        "explanation": "Elle dérive de POMC."
      },
      {
        "content": "La bêta-endorphine ne possède aucun lien avec POMC.",
        "correct": false,
        "explanation": "Elle en dérive."
      },
      {
        "content": "Elle ne peut donner qu’un seul peptide final.",
        "correct": false,
        "explanation": "Elle donne plusieurs produits."
      }
    ],
    "explanation": "La POMC illustre la production de plusieurs peptides par clivages tissulaires d’un même précurseur."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel précurseur polypeptidique donne notamment ACTH et bêta-endorphine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "POMC",
        "pro-opiomélanocortine",
        "proopiomelanocortine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La POMC illustre la production de plusieurs peptides par clivages tissulaires d’un même précurseur."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Combien d’acides aminés comporte le glucagon humain mature ?",
    "answer": {
      "type": "number",
      "value": 29,
      "tolerance": 0
    },
    "explanation": "Le glucagon est un peptide de 29 résidus sécrété par les cellules alpha et augmente la production hépatique de glucose."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Il est sécrété principalement par les cellules alpha pancréatiques.",
        "correct": true,
        "explanation": "Il s’oppose fonctionnellement à l’insuline sur la glycémie."
      },
      {
        "content": "Le profil de clivage dépend du tissu et des convertases exprimées.",
        "correct": true,
        "explanation": "Un même précurseur peut donner des produits différents."
      },
      {
        "content": "La POMC est un précurseur polypeptidique.",
        "correct": true,
        "explanation": "Elle est clivée en plusieurs peptides biologiquement actifs."
      },
      {
        "content": "Il est un stéroïde dérivé du cholestérol.",
        "correct": false,
        "explanation": "C’est un peptide."
      },
      {
        "content": "Il favorise la glycogénolyse et la néoglucogenèse hépatiques.",
        "correct": true,
        "explanation": "Ces actions augmentent la production hépatique de glucose."
      },
      {
        "content": "Le glucagon est sécrété principalement par les cellules bêta.",
        "correct": false,
        "explanation": "Les cellules alpha le produisent."
      },
      {
        "content": "Il dérive du proglucagon par maturation protéolytique.",
        "correct": true,
        "explanation": "Le tissu détermine les peptides issus du précurseur."
      },
      {
        "content": "L’ACTH est synthétisée à partir du cholestérol et non d’un précurseur peptidique.",
        "correct": false,
        "explanation": "Elle dérive de POMC."
      },
      {
        "content": "Il est principalement hypoglycémiant.",
        "correct": false,
        "explanation": "Il est hyperglycémiant."
      },
      {
        "content": "Il comporte 51 résidus répartis en deux chaînes.",
        "correct": false,
        "explanation": "Cela décrit l’insuline."
      }
    ],
    "explanation": "Le glucagon est un peptide de 29 résidus sécrété par les cellules alpha et augmente la production hépatique de glucose. La POMC illustre la production de plusieurs peptides par clivages tissulaires d’un même précurseur."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le BNP et le NT-proBNP en biologie clinique ?",
    "choices": [
      {
        "content": "Le NT-proBNP est une hormone hyperglycémiante pancréatique.",
        "correct": false,
        "explanation": "C’est un fragment du proBNP."
      },
      {
        "content": "Le NT-proBNP possède une demi-vie circulante plus longue que le BNP.",
        "correct": true,
        "explanation": "Cela contribue à des concentrations plasmatiques plus élevées."
      },
      {
        "content": "BNP et NT-proBNP peuvent aider au diagnostic et au suivi de l’insuffisance cardiaque.",
        "correct": true,
        "explanation": "Leur interprétation dépend de l’âge, de la fonction rénale et du contexte clinique."
      },
      {
        "content": "Le BNP est un stéroïde.",
        "correct": false,
        "explanation": "C’est un peptide."
      },
      {
        "content": "Le NT-proBNP est biologiquement beaucoup moins actif que le BNP.",
        "correct": true,
        "explanation": "Il sert principalement de biomarqueur."
      }
    ],
    "explanation": "BNP actif et NT-proBNP marqueur sont issus du proBNP ; leur dosage aide à évaluer l’insuffisance cardiaque."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel précurseur est clivé en BNP et NT-proBNP ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "proBNP",
        "pro-BNP"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "BNP actif et NT-proBNP marqueur sont issus du proBNP ; leur dosage aide à évaluer l’insuffisance cardiaque."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant les endorphines et les encéphalines, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Ce sont des peptides opioïdes endogènes.",
        "correct": true,
        "explanation": "Ils activent des récepteurs opioïdes."
      },
      {
        "content": "La bêta-endorphine est un stéroïde.",
        "correct": false,
        "explanation": "C’est un peptide."
      },
      {
        "content": "Les encéphalines sont des protéines de 500 résidus.",
        "correct": false,
        "explanation": "Ce sont des pentapeptides."
      },
      {
        "content": "Les encéphalines sont des pentapeptides.",
        "correct": true,
        "explanation": "Met- et Leu-encéphaline diffèrent par leur résidu C-terminal."
      },
      {
        "content": "Ils ont une structure chimique identique à la morphine.",
        "correct": false,
        "explanation": "Ils partagent des récepteurs/effets opioïdes mais pas la même structure chimique."
      }
    ],
    "explanation": "Endorphines et encéphalines sont des peptides opioïdes endogènes ; ils ne sont pas structurellement identiques à la morphine.",
    "requiredSelectionCount": 2
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les endorphines et les encéphalines ?",
    "choices": [
      {
        "content": "La bêta-endorphine est un peptide issu de la POMC.",
        "correct": true,
        "explanation": "Elle est plus longue que les encéphalines."
      },
      {
        "content": "Ils modulent notamment la nociception.",
        "correct": true,
        "explanation": "Leur activation de récepteurs opioïdes peut réduire la transmission de la douleur."
      },
      {
        "content": "Les encéphalines sont des pentapeptides.",
        "correct": true,
        "explanation": "Met- et Leu-encéphaline diffèrent par leur résidu C-terminal."
      },
      {
        "content": "Ce sont des peptides opioïdes endogènes.",
        "correct": true,
        "explanation": "Ils activent des récepteurs opioïdes."
      },
      {
        "content": "Ils n’interagissent jamais avec les récepteurs opioïdes.",
        "correct": false,
        "explanation": "C’est leur cible majeure."
      }
    ],
    "explanation": "Endorphines et encéphalines sont des peptides opioïdes endogènes ; ils ne sont pas structurellement identiques à la morphine."
  }
];
