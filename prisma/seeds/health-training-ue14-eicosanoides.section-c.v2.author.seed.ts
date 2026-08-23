import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Les eicosanoïdes — Section C — Effets biologiques et thérapeutiques des prostanoïdes */
export const UE14_BIOCH_CH5_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le caractère local des prostanoïdes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils agissent souvent à courte distance.",
        "correct": true,
        "explanation": "Ils sont des médiateurs autocrines/paracrines."
      },
      {
        "content": "Ils agissent sans aucun récepteur.",
        "correct": false,
        "explanation": "De nombreux effets passent par des récepteurs spécifiques."
      },
      {
        "content": "Ils agissent via des récepteurs spécifiques.",
        "correct": true,
        "explanation": "Le récepteur conditionne la réponse cellulaire."
      },
      {
        "content": "Ils sont tous des hormones stables circulant plusieurs jours.",
        "correct": false,
        "explanation": "Beaucoup sont des médiateurs locaux et brefs."
      },
      {
        "content": "Une demi-vie courte empêche toute action biologique.",
        "correct": false,
        "explanation": "Ils peuvent être très puissants localement."
      }
    ],
    "explanation": "Les prostanoïdes sont souvent produits à la demande, agissent localement et sont rapidement inactivés."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de l'antagonisme TXA2-PGI2, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "PGI2 favorise l'agrégation plaquettaire.",
        "correct": false,
        "explanation": "Elle l'inhibe."
      },
      {
        "content": "TXA2 et PGI2 ont exactement les mêmes effets.",
        "correct": false,
        "explanation": "Ils sont antagonistes sur plusieurs fonctions."
      },
      {
        "content": "PGI2 inhibe l'agrégation plaquettaire.",
        "correct": true,
        "explanation": "Elle est produite notamment par l'endothélium."
      },
      {
        "content": "Aucun de ces médiateurs n'agit sur les plaquettes.",
        "correct": false,
        "explanation": "Tous deux participent à leur régulation."
      },
      {
        "content": "TXA2 est le vasodilatateur endothélial majeur du couple.",
        "correct": false,
        "explanation": "Ce rôle correspond à PGI2."
      }
    ],
    "explanation": "Le couple TXA2/PGI2 illustre un antagonisme local entre signal plaquettaire proagrégant et signal endothélial antiagrégant."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel ordre de grandeur convient à la demi-vie du TXA2 : secondes, heures ou jours ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "secondes",
        "quelques dizaines de secondes",
        "environ 30 secondes"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "TXA2 a une demi-vie de l'ordre de dizaines de secondes, adaptée à un signal local rapide."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la demi-vie de PGI2, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Sa durée de vie est plus longue que celle de TXA2 mais reste brève.",
        "correct": true,
        "explanation": "On parle d'environ quelques minutes."
      },
      {
        "content": "PGI2 est stockée durablement dans des granules endothéliaux.",
        "correct": false,
        "explanation": "Elle est synthétisée à la demande."
      },
      {
        "content": "Elle inhibe l'agrégation plaquettaire pendant son action.",
        "correct": true,
        "explanation": "Elle s'oppose à TXA2."
      },
      {
        "content": "PGI2 a une demi-vie courte, de l'ordre de quelques minutes.",
        "correct": true,
        "explanation": "Elle est néanmoins un puissant médiateur local."
      },
      {
        "content": "Sa demi-vie est exactement celle d'un globule rouge.",
        "correct": false,
        "explanation": "Les ordres de grandeur sont sans rapport."
      }
    ],
    "explanation": "PGI2 est un médiateur très bref, avec une demi-vie de l'ordre de quelques minutes."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de l'aspirine et la synthèse de TXA2, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "L'aspirine stimule la synthèse de TXA2.",
        "correct": false,
        "explanation": "Elle la diminue."
      },
      {
        "content": "La diminution de TXA2 réduit un signal proagrégant.",
        "correct": true,
        "explanation": "C'est le principe pharmacologique recherché."
      },
      {
        "content": "Elle est un analogue de PGE1 utilisé pour le déclenchement de l'accouchement.",
        "correct": false,
        "explanation": "Cela décrit le misoprostol."
      },
      {
        "content": "Elle agit principalement en hydrolysant le fibrinogène.",
        "correct": false,
        "explanation": "Ce n'est pas son mécanisme."
      },
      {
        "content": "Elle augmente l'agrégation en activant directement TXA2.",
        "correct": false,
        "explanation": "Son faible dosage est utilisé comme antiagrégant."
      }
    ],
    "explanation": "L'aspirine à faible dose diminue durablement la synthèse plaquettaire de TXA2 et réduit ainsi un signal proagrégant."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur l'ibuprofène et la COX, sélectionnez exactement les deux exactes.",
    "choices": [
      {
        "content": "Il ne possède aucune action sur la voie COX.",
        "correct": false,
        "explanation": "C'est sa cible pharmacologique majeure."
      },
      {
        "content": "Il augmente directement la synthèse de PGE2.",
        "correct": false,
        "explanation": "Il la réduit via l'inhibition de COX."
      },
      {
        "content": "Il n'est pas un analogue de prostaglandine.",
        "correct": true,
        "explanation": "Il inhibe leur synthèse plutôt qu'il n'en mime directement une."
      },
      {
        "content": "L'ibuprofène active la 5-LOX pour augmenter les leucotriènes.",
        "correct": false,
        "explanation": "Ce n'est pas son mécanisme principal."
      },
      {
        "content": "Il diminue la synthèse de plusieurs prostanoïdes.",
        "correct": true,
        "explanation": "Cela contribue à ses effets antalgique et anti-inflammatoire."
      }
    ],
    "explanation": "L'ibuprofène est un AINS qui inhibe réversiblement COX et réduit la synthèse de prostanoïdes.",
    "requiredSelectionCount": 2
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le misoprostol, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le misoprostol est un analogue synthétique de PGE1.",
        "correct": true,
        "explanation": "Il mime certaines actions prostaglandines."
      },
      {
        "content": "Il ne doit pas être confondu avec un inhibiteur de COX.",
        "correct": true,
        "explanation": "Il est un analogue de prostaglandine."
      },
      {
        "content": "Il peut être utilisé pour la maturation cervicale et le déclenchement du travail dans des indications encadrées.",
        "correct": true,
        "explanation": "L'utilisation obstétricale relève de protocoles médicaux."
      },
      {
        "content": "Il peut stimuler la contractilité utérine.",
        "correct": true,
        "explanation": "C'est une propriété prostaglandine exploitée en obstétrique."
      },
      {
        "content": "Il est un thromboxane naturel.",
        "correct": false,
        "explanation": "C'est un analogue synthétique de PGE1."
      }
    ],
    "explanation": "Le misoprostol est un analogue de PGE1 utilisé notamment pour ses effets sur le col et l'utérus dans des indications médicales."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel élément cellulaire explique qu'un même médiateur puisse avoir des effets différents selon le tissu ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "récepteur",
        "récepteurs spécifiques",
        "type de récepteur",
        "récepteur cellulaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les effets des prostanoïdes dépendent du médiateur, du récepteur exprimé et du tissu cible."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur le caractère local des prostanoïdes, laquelle est exacte ?",
    "choices": [
      {
        "content": "Tous les tissus produisent exactement le même prostanoïde.",
        "correct": false,
        "explanation": "Le profil enzymatique diffère."
      },
      {
        "content": "Ils agissent via des récepteurs spécifiques.",
        "correct": true,
        "explanation": "Le récepteur conditionne la réponse cellulaire."
      },
      {
        "content": "Une demi-vie courte empêche toute action biologique.",
        "correct": false,
        "explanation": "Ils peuvent être très puissants localement."
      },
      {
        "content": "Ils agissent sans aucun récepteur.",
        "correct": false,
        "explanation": "De nombreux effets passent par des récepteurs spécifiques."
      },
      {
        "content": "Ils sont tous des hormones stables circulant plusieurs jours.",
        "correct": false,
        "explanation": "Beaucoup sont des médiateurs locaux et brefs."
      }
    ],
    "explanation": "Les prostanoïdes sont souvent produits à la demande, agissent localement et sont rapidement inactivés."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'antagonisme TXA2-PGI2, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "TXA2 favorise la vasoconstriction.",
        "correct": true,
        "explanation": "Il augmente localement le tonus vasculaire."
      },
      {
        "content": "Aucun de ces médiateurs n'agit sur les plaquettes.",
        "correct": false,
        "explanation": "Tous deux participent à leur régulation."
      },
      {
        "content": "TXA2 favorise l'agrégation plaquettaire.",
        "correct": true,
        "explanation": "Il est produit notamment par les plaquettes."
      },
      {
        "content": "TXA2 est le vasodilatateur endothélial majeur du couple.",
        "correct": false,
        "explanation": "Ce rôle correspond à PGI2."
      },
      {
        "content": "TXA2 et PGI2 ont exactement les mêmes effets.",
        "correct": false,
        "explanation": "Ils sont antagonistes sur plusieurs fonctions."
      }
    ],
    "explanation": "Le couple TXA2/PGI2 illustre un antagonisme local entre signal plaquettaire proagrégant et signal endothélial antiagrégant."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le caractère local des prostanoïdes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils agissent via des récepteurs spécifiques.",
        "correct": true,
        "explanation": "Le récepteur conditionne la réponse cellulaire."
      },
      {
        "content": "Ils agissent sans aucun récepteur.",
        "correct": false,
        "explanation": "De nombreux effets passent par des récepteurs spécifiques."
      },
      {
        "content": "Une demi-vie courte empêche toute action biologique.",
        "correct": false,
        "explanation": "Ils peuvent être très puissants localement."
      },
      {
        "content": "Ils sont tous des hormones stables circulant plusieurs jours.",
        "correct": false,
        "explanation": "Beaucoup sont des médiateurs locaux et brefs."
      },
      {
        "content": "Leur demi-vie est généralement courte.",
        "correct": true,
        "explanation": "Ils sont rapidement métabolisés."
      }
    ],
    "explanation": "Les prostanoïdes sont souvent produits à la demande, agissent localement et sont rapidement inactivés."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel prostanoïde endothélial inhibe l'agrégation plaquettaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "PGI2",
        "PGI₂",
        "prostacycline"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le couple TXA2/PGI2 illustre un antagonisme local entre signal plaquettaire proagrégant et signal endothélial antiagrégant."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur la demi-vie de TXA2, laquelle est exacte ?",
    "choices": [
      {
        "content": "TXA2 est stocké durablement dans les plaquettes avant activation.",
        "correct": false,
        "explanation": "Il est produit à la demande."
      },
      {
        "content": "TXA2 est très instable.",
        "correct": true,
        "explanation": "Sa demi-vie est de l'ordre de dizaines de secondes."
      },
      {
        "content": "TXA2 circule intact pendant plusieurs jours.",
        "correct": false,
        "explanation": "Il est très instable."
      },
      {
        "content": "Sa demi-vie courte signifie qu'il ne peut pas activer de récepteur.",
        "correct": false,
        "explanation": "Il agit avant sa dégradation."
      },
      {
        "content": "Une demi-vie courte rend tout effet vasculaire impossible.",
        "correct": false,
        "explanation": "Il peut être très puissant localement."
      }
    ],
    "explanation": "TXA2 a une demi-vie de l'ordre de dizaines de secondes, adaptée à un signal local rapide."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la demi-vie de PGI2, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Sa durée de vie est plus longue que celle de TXA2 mais reste brève.",
        "correct": true,
        "explanation": "On parle d'environ quelques minutes."
      },
      {
        "content": "Une demi-vie courte empêche tout effet sur les vaisseaux.",
        "correct": false,
        "explanation": "Elle agit puissamment localement."
      },
      {
        "content": "Son action vasculaire est rapidement modulable.",
        "correct": true,
        "explanation": "Sa production dépend de l'endothélium."
      },
      {
        "content": "PGI2 persiste plusieurs semaines dans le plasma.",
        "correct": false,
        "explanation": "Elle est instable."
      },
      {
        "content": "Elle inhibe l'agrégation plaquettaire pendant son action.",
        "correct": true,
        "explanation": "Elle s'oppose à TXA2."
      }
    ],
    "explanation": "PGI2 est un médiateur très bref, avec une demi-vie de l'ordre de quelques minutes."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos de l'aspirine et la synthèse de TXA2, retenez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Elle agit principalement en hydrolysant le fibrinogène.",
        "correct": false,
        "explanation": "Ce n'est pas son mécanisme."
      },
      {
        "content": "L'effet de l'aspirine est distinct d'une inhibition directe des récepteurs de l'ADP.",
        "correct": true,
        "explanation": "Ce sont d'autres antiagrégants qui ciblent P2Y12."
      },
      {
        "content": "L'aspirine inhibe la cyclo-oxygénase.",
        "correct": true,
        "explanation": "Elle diminue la synthèse de prostanoïdes."
      },
      {
        "content": "Elle augmente l'agrégation en activant directement TXA2.",
        "correct": false,
        "explanation": "Son faible dosage est utilisé comme antiagrégant."
      },
      {
        "content": "Elle est un analogue de PGE1 utilisé pour le déclenchement de l'accouchement.",
        "correct": false,
        "explanation": "Cela décrit le misoprostol."
      }
    ],
    "explanation": "L'aspirine à faible dose diminue durablement la synthèse plaquettaire de TXA2 et réduit ainsi un signal proagrégant.",
    "requiredSelectionCount": 2
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur l'ibuprofène et la COX, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "L'ibuprofène active la 5-LOX pour augmenter les leucotriènes.",
        "correct": false,
        "explanation": "Ce n'est pas son mécanisme principal."
      },
      {
        "content": "Il diminue la synthèse de plusieurs prostanoïdes.",
        "correct": true,
        "explanation": "Cela contribue à ses effets antalgique et anti-inflammatoire."
      },
      {
        "content": "L'ibuprofène est un anti-inflammatoire non stéroïdien.",
        "correct": true,
        "explanation": "Il inhibe de façon réversible les cyclo-oxygénases."
      },
      {
        "content": "Il n'est pas un analogue de prostaglandine.",
        "correct": true,
        "explanation": "Il inhibe leur synthèse plutôt qu'il n'en mime directement une."
      },
      {
        "content": "Son mécanisme COX le distingue d'un antagoniste des leucotriènes.",
        "correct": true,
        "explanation": "Les voies ciblées ne sont pas les mêmes."
      }
    ],
    "explanation": "L'ibuprofène est un AINS qui inhibe réversiblement COX et réduit la synthèse de prostanoïdes."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "De quelle prostaglandine le misoprostol est-il un analogue synthétique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "PGE1",
        "PGE₁",
        "prostaglandine E1",
        "prostaglandine E₁"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le misoprostol est un analogue de PGE1 utilisé notamment pour ses effets sur le col et l'utérus dans des indications médicales."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de la diversité des effets des prostaglandines, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "L'effet biologique dépend uniquement du nombre total de carbones.",
        "correct": false,
        "explanation": "Le type de médiateur et le récepteur sont déterminants."
      },
      {
        "content": "Toutes les prostaglandines ont exactement le même récepteur et le même effet.",
        "correct": false,
        "explanation": "La diversité des récepteurs est majeure."
      },
      {
        "content": "Une différence de groupe structural n'a aucune conséquence possible.",
        "correct": false,
        "explanation": "Elle peut modifier l'affinité et l'effet."
      },
      {
        "content": "PGF2α peut contracter certains muscles lisses.",
        "correct": true,
        "explanation": "C'est un exemple de diversité fonctionnelle."
      },
      {
        "content": "PGF2α est obligatoirement identique à PGE2.",
        "correct": false,
        "explanation": "Ce sont des prostaglandines distinctes."
      }
    ],
    "explanation": "Les effets des prostanoïdes dépendent du médiateur, du récepteur exprimé et du tissu cible."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "PGI2 a une demi-vie de l'ordre de 2 à 3 minutes. Quelle valeur, en minutes, correspond à la borne haute de cet intervalle ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "La borne haute de l'intervalle 2–3 minutes est 3 minutes."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux effets caractéristiques du TXA2.",
    "choices": [
      {
        "content": "Chimiotactisme majeur des neutrophiles.",
        "correct": false,
        "explanation": "Ce rôle est particulièrement associé à LTB4."
      },
      {
        "content": "Agrégation plaquettaire.",
        "correct": true,
        "explanation": "TXA2 est un signal proagrégant majeur des plaquettes."
      },
      {
        "content": "Inhibition de l'agrégation plaquettaire.",
        "correct": false,
        "explanation": "Cet effet caractérise plutôt PGI2."
      },
      {
        "content": "Vasodilatation.",
        "correct": false,
        "explanation": "La vasodilatation caractérise plutôt PGI2 dans ce couple."
      },
      {
        "content": "Vasoconstriction.",
        "correct": true,
        "explanation": "TXA2 augmente le tonus vasculaire local."
      }
    ],
    "explanation": "TXA2 est vasoconstricteur et proagrégant ; PGI2 exerce les effets opposés sur ces deux fonctions.",
    "requiredSelectionCount": 2
  },
  {
    "order": 65,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Dans ce schéma simplifié d'un vaisseau, cliquez sur l'endothélium, principale source vasculaire de PGI2.",
    "image": {
      "src": "/images/training/ue14/biochimie/eicosanoides/pgi2-txa2-endothelium-qzone.svg",
      "alt": "Schéma simplifié d'un vaisseau avec plaquettes dans la lumière et endothélium en bas",
      "width": 1200,
      "height": 600
    },
    "expectedZones": [
      {
        "id": "endothelium",
        "label": "Endothélium vasculaire",
        "x": 0.5,
        "y": 0.74,
        "tolerance": 0.09
      }
    ],
    "explanation": "PGI2 est produite notamment par l'endothélium vasculaire ; elle est vasodilatatrice et antiagrégante, à l'opposé du TXA2 plaquettaire."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel ordre de grandeur convient à la demi-vie de PGI2 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "quelques minutes",
        "minutes",
        "2 à 3 minutes",
        "2-3 minutes"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "PGI2 est un médiateur très bref, avec une demi-vie de l'ordre de quelques minutes."
  },
  {
    "order": 67,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le caractère local des prostanoïdes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une demi-vie courte empêche toute action biologique.",
        "correct": false,
        "explanation": "Ils peuvent être très puissants localement."
      },
      {
        "content": "Ils sont tous des hormones stables circulant plusieurs jours.",
        "correct": false,
        "explanation": "Beaucoup sont des médiateurs locaux et brefs."
      },
      {
        "content": "Ils agissent souvent à courte distance.",
        "correct": true,
        "explanation": "Ils sont des médiateurs autocrines/paracrines."
      },
      {
        "content": "Ils agissent sans aucun récepteur.",
        "correct": false,
        "explanation": "De nombreux effets passent par des récepteurs spécifiques."
      },
      {
        "content": "Leur demi-vie est généralement courte.",
        "correct": true,
        "explanation": "Ils sont rapidement métabolisés."
      }
    ],
    "explanation": "Les prostanoïdes sont souvent produits à la demande, agissent localement et sont rapidement inactivés."
  },
  {
    "order": 68,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel prostanoïde endothélial inhibe l'agrégation plaquettaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "PGI2",
        "PGI₂",
        "prostacycline"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le couple TXA2/PGI2 illustre un antagonisme local entre signal plaquettaire proagrégant et signal endothélial antiagrégant."
  },
  {
    "order": 69,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel analogue synthétique de PGE1 est utilisé notamment en obstétrique pour la maturation cervicale et le déclenchement du travail dans des indications encadrées ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "misoprostol",
        "le misoprostol"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le misoprostol est un analogue synthétique de PGE1 ; son emploi obstétrical relève d'indications et de protocoles médicaux."
  },
  {
    "order": 70,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la demi-vie de PGI2, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Sa durée de vie est plus longue que celle de TXA2 mais reste brève.",
        "correct": true,
        "explanation": "On parle d'environ quelques minutes."
      },
      {
        "content": "Sa demi-vie est exactement celle d'un globule rouge.",
        "correct": false,
        "explanation": "Les ordres de grandeur sont sans rapport."
      },
      {
        "content": "PGI2 persiste plusieurs semaines dans le plasma.",
        "correct": false,
        "explanation": "Elle est instable."
      },
      {
        "content": "Son action vasculaire est rapidement modulable.",
        "correct": true,
        "explanation": "Sa production dépend de l'endothélium."
      },
      {
        "content": "PGI2 a une demi-vie courte, de l'ordre de quelques minutes.",
        "correct": true,
        "explanation": "Elle est néanmoins un puissant médiateur local."
      }
    ],
    "explanation": "PGI2 est un médiateur très bref, avec une demi-vie de l'ordre de quelques minutes."
  },
  {
    "order": 71,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "À propos de l'aspirine et la synthèse de TXA2, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "L'aspirine stimule la synthèse de TXA2.",
        "correct": false,
        "explanation": "Elle la diminue."
      },
      {
        "content": "Elle augmente l'agrégation en activant directement TXA2.",
        "correct": false,
        "explanation": "Son faible dosage est utilisé comme antiagrégant."
      },
      {
        "content": "À faible dose, l'effet plaquettaire sur TXA2 contribue à l'action antiagrégante.",
        "correct": true,
        "explanation": "Les plaquettes ne renouvellent pas efficacement la COX acétylée."
      },
      {
        "content": "Elle est un analogue de PGE1 utilisé pour le déclenchement de l'accouchement.",
        "correct": false,
        "explanation": "Cela décrit le misoprostol."
      },
      {
        "content": "Elle agit principalement en hydrolysant le fibrinogène.",
        "correct": false,
        "explanation": "Ce n'est pas son mécanisme."
      }
    ],
    "explanation": "L'aspirine à faible dose diminue durablement la synthèse plaquettaire de TXA2 et réduit ainsi un signal proagrégant."
  },
  {
    "order": 72,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur l'ibuprofène et la COX, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Il n'est pas un analogue de prostaglandine.",
        "correct": true,
        "explanation": "Il inhibe leur synthèse plutôt qu'il n'en mime directement une."
      },
      {
        "content": "L'ibuprofène active la 5-LOX pour augmenter les leucotriènes.",
        "correct": false,
        "explanation": "Ce n'est pas son mécanisme principal."
      },
      {
        "content": "Son mécanisme COX le distingue d'un antagoniste des leucotriènes.",
        "correct": true,
        "explanation": "Les voies ciblées ne sont pas les mêmes."
      },
      {
        "content": "L'ibuprofène est un anti-inflammatoire non stéroïdien.",
        "correct": true,
        "explanation": "Il inhibe de façon réversible les cyclo-oxygénases."
      },
      {
        "content": "Il diminue la synthèse de plusieurs prostanoïdes.",
        "correct": true,
        "explanation": "Cela contribue à ses effets antalgique et anti-inflammatoire."
      }
    ],
    "explanation": "L'ibuprofène est un AINS qui inhibe réversiblement COX et réduit la synthèse de prostanoïdes."
  },
  {
    "order": 73,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "De quelle prostaglandine le misoprostol est-il un analogue synthétique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "PGE1",
        "PGE₁",
        "prostaglandine E1",
        "prostaglandine E₁"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le misoprostol est un analogue de PGE1 utilisé notamment pour ses effets sur le col et l'utérus dans des indications médicales."
  },
  {
    "order": 74,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "L'effet biologique dépend uniquement du nombre total de carbones.",
        "correct": false,
        "explanation": "Le type de médiateur et le récepteur sont déterminants."
      },
      {
        "content": "TXA2 circule intact pendant plusieurs jours.",
        "correct": false,
        "explanation": "Il est très instable."
      },
      {
        "content": "Sa demi-vie courte signifie qu'il ne peut pas activer de récepteur.",
        "correct": false,
        "explanation": "Il agit avant sa dégradation."
      },
      {
        "content": "PGE2 possède plusieurs sous-types de récepteurs EP.",
        "correct": true,
        "explanation": "Des récepteurs différents expliquent des réponses variées."
      },
      {
        "content": "Une nomenclature structurale proche ne permet pas de prédire à elle seule l'effet biologique complet.",
        "correct": true,
        "explanation": "La pharmacologie des récepteurs compte."
      },
      {
        "content": "Toutes les prostaglandines ont exactement le même récepteur et le même effet.",
        "correct": false,
        "explanation": "La diversité des récepteurs est majeure."
      },
      {
        "content": "Des prostaglandines proches peuvent avoir des effets différents voire opposés.",
        "correct": true,
        "explanation": "Le type de récepteur et le tissu cible sont déterminants."
      },
      {
        "content": "Son action est donc très locale.",
        "correct": true,
        "explanation": "Il se transforme rapidement en métabolites plus stables."
      },
      {
        "content": "Une demi-vie courte rend tout effet vasculaire impossible.",
        "correct": false,
        "explanation": "Il peut être très puissant localement."
      },
      {
        "content": "TXA2 est très instable.",
        "correct": true,
        "explanation": "Sa demi-vie est de l'ordre de dizaines de secondes."
      }
    ],
    "explanation": "Les effets des prostanoïdes dépendent du médiateur, du récepteur exprimé et du tissu cible. TXA2 a une demi-vie de l'ordre de dizaines de secondes, adaptée à un signal local rapide."
  },
  {
    "order": 75,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel médiateur plaquettaire est réduit par l'aspirine à faible dose, expliquant une part majeure de son effet antiagrégant ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "TXA2",
        "TXA₂",
        "thromboxane A2",
        "thromboxane A₂"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'aspirine inhibe la COX plaquettaire et réduit durablement la formation de TXA2 pendant la vie de la plaquette."
  },
  {
    "order": 76,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Dans une situation d'application, quel prostanoïde endothélial inhibe l'agrégation plaquettaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "PGI2",
        "PGI₂",
        "prostacycline"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le couple TXA2/PGI2 illustre un antagonisme local entre signal plaquettaire proagrégant et signal endothélial antiagrégant."
  },
  {
    "order": 77,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "À propos de la demi-vie de TXA2, retenez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "TXA2 circule intact pendant plusieurs jours.",
        "correct": false,
        "explanation": "Il est très instable."
      },
      {
        "content": "TXA2 est stocké durablement dans les plaquettes avant activation.",
        "correct": false,
        "explanation": "Il est produit à la demande."
      },
      {
        "content": "Son action est donc très locale.",
        "correct": true,
        "explanation": "Il se transforme rapidement en métabolites plus stables."
      },
      {
        "content": "Son instabilité est cohérente avec une régulation fine de l'hémostase locale.",
        "correct": true,
        "explanation": "Le signal ne persiste pas durablement."
      },
      {
        "content": "Une demi-vie courte rend tout effet vasculaire impossible.",
        "correct": false,
        "explanation": "Il peut être très puissant localement."
      }
    ],
    "explanation": "TXA2 a une demi-vie de l'ordre de dizaines de secondes, adaptée à un signal local rapide.",
    "requiredSelectionCount": 2
  },
  {
    "order": 78,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur la demi-vie de PGI2, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Sa durée de vie est plus longue que celle de TXA2 mais reste brève.",
        "correct": true,
        "explanation": "On parle d'environ quelques minutes."
      },
      {
        "content": "Son action vasculaire est rapidement modulable.",
        "correct": true,
        "explanation": "Sa production dépend de l'endothélium."
      },
      {
        "content": "Sa demi-vie est exactement celle d'un globule rouge.",
        "correct": false,
        "explanation": "Les ordres de grandeur sont sans rapport."
      },
      {
        "content": "PGI2 persiste plusieurs semaines dans le plasma.",
        "correct": false,
        "explanation": "Elle est instable."
      },
      {
        "content": "Elle inhibe l'agrégation plaquettaire pendant son action.",
        "correct": true,
        "explanation": "Elle s'oppose à TXA2."
      }
    ],
    "explanation": "PGI2 est un médiateur très bref, avec une demi-vie de l'ordre de quelques minutes."
  }
];
