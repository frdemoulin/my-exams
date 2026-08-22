import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie – Chapitre 1.2 – Section C – Osamines et acides sialiques
 */

export const UE14_BIOCH_CH2_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une osamine telle que la glucosamine se caractérise par :",
    "choices": [
      {
        "content": "Remplacement d'une fonction alcool en C2 par une fonction amine primaire.",
        "correct": true,
        "explanation": "Dans un 2-amino-2-désoxyhexose, la fonction hydroxyle portée par C2 est remplacée par une fonction amine."
      },
      {
        "content": "Introduction d'un groupe NH2 en C2.",
        "correct": true,
        "explanation": "Le remplacement de OH par NH2 en C2 est le repère structural d'une osamine comme la glucosamine."
      },
      {
        "content": "Conservation possible d'une forme α ou β.",
        "correct": true,
        "explanation": "La fonction anomérique reste présente ; des formes α et β peuvent donc exister."
      },
      {
        "content": "Oxydation de C6 en COOH.",
        "correct": false,
        "explanation": "Cela forme un acide uronique, pas une osamine."
      }
    ],
    "explanation": "L'osamine est un dérivé aminé obtenu par substitution du OH de C2."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans une osamine comme la glucosamine, sur quel carbone la fonction amine remplace-t-elle une fonction hydroxyle ?",
    "choices": [
      {
        "content": "C2.",
        "correct": true,
        "explanation": "La glucosamine est un 2-amino-2-désoxyose : le groupe NH2 remplace le OH porté par C2."
      },
      {
        "content": "C1.",
        "correct": false,
        "explanation": "C1 est le carbone anomérique ; dans la glucosamine, la substitution aminée concerne C2."
      },
      {
        "content": "C5.",
        "correct": false,
        "explanation": "La glucosamine conserve un hydroxyle en C5 ; l'amine est portée par C2."
      },
      {
        "content": "C6.",
        "correct": false,
        "explanation": "C6 porte une fonction alcool primaire ; l'amine de la glucosamine est introduite en C2."
      }
    ],
    "explanation": "La substitution OH → NH2 concerne C2."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les osamines peuvent entrer dans la composition de :",
    "choices": [
      {
        "content": "Glycosaminoglycanes.",
        "correct": true,
        "explanation": "Plusieurs GAG contiennent des osamines, notamment la N-acétylglucosamine ou la N-acétylgalactosamine."
      },
      {
        "content": "Glycoprotéines.",
        "correct": true,
        "explanation": "Les glycannes de nombreuses glycoprotéines contiennent des osamines N-acétylées."
      },
      {
        "content": "Protéoglycanes.",
        "correct": true,
        "explanation": "Les chaînes de GAG des protéoglycanes comportent fréquemment des osamines N-acétylées."
      },
      {
        "content": "Glycolipides, notamment sphingolipides.",
        "correct": true,
        "explanation": "Des osamines N-acétylées sont présentes dans les glycannes de plusieurs glycolipides, notamment des glycosphingolipides."
      }
    ],
    "explanation": "Les osamines sont très présentes dans les glycoconjugués."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une osamine N-acétylée :",
    "choices": [
      {
        "content": "Porte un groupement acétyl sur la fonction amine en C2.",
        "correct": true,
        "explanation": "La N-acétylation transforme l'amine en groupement acétamide NHCOCH3."
      },
      {
        "content": "Contient un motif dérivé de CH3CO lié à l'azote.",
        "correct": true,
        "explanation": "Le préfixe N-acétyl signifie que le groupement acétyl CH3CO est lié à l'atome d'azote."
      },
      {
        "content": "Peut être présente dans la paroi bactérienne.",
        "correct": true,
        "explanation": "Le peptidoglycane bactérien contient notamment de la N-acétylglucosamine et de l'acide N-acétylmuramique."
      },
      {
        "content": "Résulte uniquement d'une phosphorylation.",
        "correct": false,
        "explanation": "La transformation est une N-acétylation."
      }
    ],
    "explanation": "La N-acétylation modifie l'amine de l'osamine."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel homopolymère est constitué de résidus de N-acétylglucosamine liés en β(1→4) ?",
    "choices": [
      {
        "content": "La chitine.",
        "correct": true,
        "explanation": "La chitine est un homopolymère linéaire de N-acétylglucosamine liée en β(1→4)."
      },
      {
        "content": "Le glycogène.",
        "correct": false,
        "explanation": "Le glycogène est un polymère ramifié de glucose lié principalement en α(1→4) et α(1→6)."
      },
      {
        "content": "L'amidon.",
        "correct": false,
        "explanation": "L'amidon est constitué de polymères de glucose, l'amylose et l'amylopectine."
      },
      {
        "content": "Le collagène.",
        "correct": false,
        "explanation": "Ce n'est pas un polymère glucidique."
      }
    ],
    "explanation": "La chitine est un homopolymère structural de résidus de N-acétylglucosamine liés en β(1→4)."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la chitine :",
    "choices": [
      {
        "content": "Elle est présente dans la carapace des insectes.",
        "correct": true,
        "explanation": "La chitine est un constituant structural majeur de l'exosquelette des arthropodes, dont les insectes."
      },
      {
        "content": "Elle est présente dans la carapace des crustacés.",
        "correct": true,
        "explanation": "L'exosquelette des crustacés contient de la chitine associée notamment à des protéines et à des minéraux."
      },
      {
        "content": "Elle est constituée d'un polymère de N-acétylglucosamine lié en β(1→4).",
        "correct": true,
        "explanation": "La chitine est un homopolymère linéaire de résidus de N-acétylglucosamine liés en β(1→4)."
      },
      {
        "content": "C'est un polyol issu de la réduction du glucose.",
        "correct": false,
        "explanation": "La chitine est un polysaccharide structural ; le polyol issu de la réduction du glucose est le sorbitol."
      }
    ],
    "explanation": "La chitine illustre un rôle structural majeur des osamines N-acétylées."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la biosynthèse cytosolique du Neu5Ac chez les vertébrés :",
    "choices": [
      {
        "content": "Le N-acétyl-D-mannosamine-6-phosphate (ManNAc-6-P) est un précurseur.",
        "correct": true,
        "explanation": "Le ManNAc-6-P est le précurseur glucidique engagé dans la synthèse du Neu5Ac."
      },
      {
        "content": "Le phosphoénolpyruvate (PEP) fournit un fragment de trois carbones.",
        "correct": true,
        "explanation": "Le PEP se condense avec le ManNAc-6-P pour former un ose à neuf carbones."
      },
      {
        "content": "Le Neu5Ac-9-phosphate est formé comme intermédiaire.",
        "correct": true,
        "explanation": "La condensation produit d'abord le Neu5Ac-9-phosphate, qui sera ensuite déphosphorylé."
      },
      {
        "content": "Le sorbitol et le mannitol en sont les seuls précurseurs.",
        "correct": false,
        "explanation": "Ces polyols ne participent pas à la voie de biosynthèse du Neu5Ac."
      }
    ],
    "explanation": "Chez les vertébrés, le ManNAc-6-P et le PEP forment le Neu5Ac-9-phosphate, ensuite déphosphorylé en Neu5Ac."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel composé à trois carbones se condense avec le ManNAc-6-P pour former le Neu5Ac-9-phosphate ?",
    "choices": [
      {
        "content": "Phosphoénolpyruvate (PEP).",
        "correct": true,
        "explanation": "La N-acétylneuraminate-9-phosphate synthase condense le ManNAc-6-P avec le PEP."
      },
      {
        "content": "Acide ascorbique.",
        "correct": false,
        "explanation": "L'acide ascorbique est un dérivé du métabolisme glucidique, mais il ne fournit pas les trois carbones de cette condensation."
      },
      {
        "content": "Acide glucuronique.",
        "correct": false,
        "explanation": "L'acide glucuronique est un acide uronique à six carbones et n'est pas le co-substrat de la synthase."
      },
      {
        "content": "Acide sulfurique.",
        "correct": false,
        "explanation": "L'acide sulfurique ne fournit aucun squelette carboné à la biosynthèse du Neu5Ac."
      }
    ],
    "explanation": "Le PEP fournit trois carbones qui s'ajoutent aux six carbones du ManNAc-6-P."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des dernières étapes de biosynthèse du Neu5Ac chez les vertébrés :",
    "choices": [
      {
        "content": "La condensation du ManNAc-6-P et du PEP forme le Neu5Ac-9-phosphate.",
        "correct": true,
        "explanation": "Le produit direct de la synthase est un intermédiaire phosphorylé à neuf carbones."
      },
      {
        "content": "Une phosphatase spécifique libère ensuite le Neu5Ac.",
        "correct": true,
        "explanation": "La déphosphorylation du Neu5Ac-9-phosphate produit le Neu5Ac libre."
      },
      {
        "content": "La N-acétylation n'intervient qu'après la formation de l'acide neuraminique.",
        "correct": false,
        "explanation": "Le précurseur ManNAc-6-P est déjà N-acétylé avant la condensation avec le PEP."
      },
      {
        "content": "La condensation conduit à un composé comportant neuf carbones.",
        "correct": true,
        "explanation": "Les six carbones du ManNAc-6-P et les trois carbones apportés par le PEP donnent le squelette à neuf carbones du Neu5Ac."
      }
    ],
    "explanation": "La biosynthèse vertébrée du Neu5Ac passe par le Neu5Ac-9-phosphate, puis par sa déphosphorylation."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel type d'enzyme libère le Neu5Ac à partir du Neu5Ac-9-phosphate ?",
    "choices": [
      {
        "content": "Une phosphatase spécifique.",
        "correct": true,
        "explanation": "Une phosphatase retire le phosphate porté par le Neu5Ac-9-phosphate."
      },
      {
        "content": "Une protéase.",
        "correct": false,
        "explanation": "Une protéase hydrolyse des liaisons peptidiques ; elle ne déphosphoryle pas un ose."
      },
      {
        "content": "Une kinase ajoutant un second phosphate.",
        "correct": false,
        "explanation": "Une kinase ajoute un phosphate, alors que cette étape doit retirer celui du Neu5Ac-9-phosphate."
      },
      {
        "content": "Une ADN polymérase.",
        "correct": false,
        "explanation": "Une ADN polymérase synthétise de l'ADN et n'intervient pas dans cette déphosphorylation."
      }
    ],
    "explanation": "La déphosphorylation du Neu5Ac-9-phosphate est catalysée par une phosphatase spécifique."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'acide N-acétylneuraminique (Neu5Ac ou NANA) :",
    "choices": [
      {
        "content": "Il porte un groupement N-acétyl en C5.",
        "correct": true,
        "explanation": "Le nom N-acétylneuraminique traduit la présence d'un groupement acétyl lié à l'azote porté en C5."
      },
      {
        "content": "Son squelette comporte neuf carbones.",
        "correct": true,
        "explanation": "Le Neu5Ac appartient aux nonulosonates, des oses acides à neuf carbones."
      },
      {
        "content": "Le produit est l'acide N-acétylneuraminique.",
        "correct": true,
        "explanation": "Neu5Ac et NANA sont deux abréviations de l'acide N-acétylneuraminique."
      },
      {
        "content": "Il constitue le principal acide sialique chez l'être humain.",
        "correct": true,
        "explanation": "Le terme acides sialiques désigne une famille dont le Neu5Ac est le représentant majeur chez l'être humain."
      }
    ],
    "explanation": "Le Neu5Ac ou NANA est un ose acide à neuf carbones et le principal membre de la famille des acides sialiques chez l'être humain."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "NANA signifie :",
    "choices": [
      {
        "content": "Acide N-acétylneuraminique.",
        "correct": true,
        "explanation": "NANA est l'abréviation historique anglaise de N-acetylneuraminic acid, soit acide N-acétylneuraminique."
      },
      {
        "content": "N-acétyl-nicotinamide.",
        "correct": false,
        "explanation": "La nicotinamide n'entre pas dans le développement de l'abréviation NANA."
      },
      {
        "content": "Acide N-nitro-aminé.",
        "correct": false,
        "explanation": "NANA ne désigne pas un composé nitro ; ses lettres renvoient à l'acide N-acétylneuraminique."
      },
      {
        "content": "Noyau anomérique non acétylé.",
        "correct": false,
        "explanation": "Le terme N-acétyl indique au contraire la présence d'un groupement acétyl lié à l'azote."
      }
    ],
    "explanation": "NANA = acide N-acétylneuraminique."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le Neu5Ac, principal acide sialique humain, peut être présent dans :",
    "choices": [
      {
        "content": "Glycoprotéines de la surface des cellules eucaryotes.",
        "correct": true,
        "explanation": "Les acides sialiques occupent fréquemment l'extrémité des glycannes portés par les glycoprotéines de surface."
      },
      {
        "content": "Glycolipides des cellules eucaryotes.",
        "correct": true,
        "explanation": "Les gangliosides sont des glycosphingolipides contenant un ou plusieurs résidus d'acide sialique."
      },
      {
        "content": "Structures impliquées dans la reconnaissance cellulaire.",
        "correct": true,
        "explanation": "Les acides sialiques terminaux peuvent servir de déterminants reconnus par des lectines et moduler les interactions entre cellules."
      },
      {
        "content": "Uniquement des triglycérides.",
        "correct": false,
        "explanation": "Les triglycérides ne portent pas de chaîne glycannique ; les acides sialiques se trouvent notamment sur des glycoprotéines et des glycolipides."
      }
    ],
    "explanation": "Le NANA intervient dans les glycoconjugués de surface et la reconnaissance cellulaire."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la fonction acide du NANA :",
    "choices": [
      {
        "content": "Le COOH peut s'ioniser en COO−.",
        "correct": true,
        "explanation": "La fonction carboxylique peut perdre un proton et devenir un carboxylate COO−."
      },
      {
        "content": "La forme COO− porte une charge négative.",
        "correct": true,
        "explanation": "La déprotonation laisse une charge négative délocalisée sur les deux oxygènes du carboxylate."
      },
      {
        "content": "Les charges négatives peuvent se repousser.",
        "correct": true,
        "explanation": "Deux carboxylates proches portent des charges de même signe et peuvent donc exercer une répulsion électrostatique."
      },
      {
        "content": "L'ionisation transforme le NANA en polyol neutre.",
        "correct": false,
        "explanation": "La charge est au contraire négative."
      }
    ],
    "explanation": "L'ionisation du COOH confère une charge négative au NANA."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles conséquences peuvent avoir les charges négatives des acides sialiques de surface ?",
    "choices": [
      {
        "content": "Contribuer à la répulsion entre surfaces ou macromolécules proches.",
        "correct": true,
        "explanation": "Une forte densité de charges négatives peut limiter le rapprochement de structures voisines."
      },
      {
        "content": "Produire une répulsion lorsque des carboxylates COO− de même signe sont rapprochés.",
        "correct": true,
        "explanation": "Des charges électriques de même signe se repoussent."
      },
      {
        "content": "Moduler des interactions avec des protéines ou des ions.",
        "correct": true,
        "explanation": "La charge des acides sialiques contribue à leurs interactions électrostatiques avec l'environnement moléculaire."
      },
      {
        "content": "Résultant d'une attraction entre charges opposées.",
        "correct": false,
        "explanation": "Il s'agit d'une répulsion."
      }
    ],
    "explanation": "Les carboxylates des acides sialiques contribuent aux propriétés électrostatiques des surfaces cellulaires et des glycoconjugués."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Comparer osamine et osamine N-acétylée permet d'affirmer que :",
    "choices": [
      {
        "content": "L'osamine porte une amine primaire en C2.",
        "correct": true,
        "explanation": "Dans une osamine comme la glucosamine, le OH de C2 est remplacé par NH2."
      },
      {
        "content": "L'osamine N-acétylée porte un groupement acétyl sur cet azote.",
        "correct": true,
        "explanation": "La N-acétylation transforme le groupe amine en motif acétamide NHCOCH3."
      },
      {
        "content": "La N-acétylation ajoute un motif CH3CO.",
        "correct": true,
        "explanation": "Le groupement acétyl CH3CO est fixé sur l'azote de l'osamine."
      },
      {
        "content": "La N-acétylation retire tout atome d'azote.",
        "correct": false,
        "explanation": "L'azote est conservé et acétylé."
      }
    ],
    "explanation": "La N-acétylation modifie la fonction amine sans supprimer l'azote."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un dérivé glucidique est retrouvé dans une paroi bactérienne et possède un motif N-acétylé en C2. Quelle famille est compatible ?",
    "choices": [
      {
        "content": "Osamine N-acétylée.",
        "correct": true,
        "explanation": "Un motif N-acétylé en C2 correspond à une osamine dont l'amine a été acétylée."
      },
      {
        "content": "Dérivé aminé d'ose.",
        "correct": true,
        "explanation": "La présence d'un atome d'azote sur le squelette glucidique classe la molécule parmi les dérivés aminés d'oses."
      },
      {
        "content": "Polyol nécessairement.",
        "correct": false,
        "explanation": "Ce n'est pas un produit de réduction du carbonyle."
      },
      {
        "content": "Dérivé pouvant correspondre à un motif de N-acétylglucosamine ou de N-acétylmuramique.",
        "correct": true,
        "explanation": "Le peptidoglycane bactérien contient des résidus de N-acétylglucosamine et de N-acétylmuramique."
      }
    ],
    "explanation": "Le peptidoglycane de la paroi bactérienne contient des osamines N-acétylées, notamment la N-acétylglucosamine et l'acide N-acétylmuramique."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule de surface cellulaire porte un acide sialique terminal. Quelles propriétés sont cohérentes ?",
    "choices": [
      {
        "content": "Elle peut participer à la reconnaissance cellulaire.",
        "correct": true,
        "explanation": "Un acide sialique terminal peut être reconnu par des lectines et moduler des interactions cellulaires."
      },
      {
        "content": "Elle peut porter une charge négative via COO−.",
        "correct": true,
        "explanation": "La fonction carboxylique de l'acide sialique peut être déprotonée sous forme COO−."
      },
      {
        "content": "Elle peut moduler des interactions intermoléculaires par sa charge.",
        "correct": true,
        "explanation": "La charge négative des acides sialiques intervient dans des phénomènes de répulsion et dans des interactions avec des protéines ou des ions."
      },
      {
        "content": "Elle est dépourvue de glucide.",
        "correct": false,
        "explanation": "L'acide sialique est un dérivé glucidique."
      }
    ],
    "explanation": "Le NANA relie structure, charge et reconnaissance cellulaire."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez soit l'abréviation historique à quatre lettres de l'acide N-acétylneuraminique, soit le nom de la famille à laquelle il appartient.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide sialique",
        "sialique",
        "NANA",
        "nana"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "L'acide N-acétylneuraminique est abrégé NANA ou Neu5Ac ; il appartient à la famille des acides sialiques."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quel enchaînement respecte la biosynthèse cytosolique du Neu5Ac chez les vertébrés ?",
    "choices": [
      {
        "content": "UDP-GlcNAc → ManNAc-6-P après épimérisation et phosphorylation.",
        "correct": true,
        "explanation": "L'enzyme bifonctionnelle GNE forme le ManNAc puis le phosphoryle en ManNAc-6-P."
      },
      {
        "content": "ManNAc-6-P + PEP → Neu5Ac-9-P.",
        "correct": true,
        "explanation": "La N-acétylneuraminate-9-phosphate synthase catalyse cette condensation."
      },
      {
        "content": "Neu5Ac-9-P → Neu5Ac par déphosphorylation.",
        "correct": true,
        "explanation": "Une phosphatase spécifique libère le Neu5Ac non phosphorylé."
      },
      {
        "content": "NANA → D-mannosamine par simple phosphorylation.",
        "correct": false,
        "explanation": "La voie va de l'UDP-GlcNAc au ManNAc-6-P puis au Neu5Ac ; une simple phosphorylation du Neu5Ac ne produit pas la mannosamine."
      }
    ],
    "explanation": "La voie vertébrée passe par le ManNAc-6-P et le Neu5Ac-9-P avant de produire le Neu5Ac libre."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels couples structure/rôle sont corrects ?",
    "choices": [
      {
        "content": "Osamine → NH2 en C2.",
        "correct": true,
        "explanation": "Dans une osamine comme la glucosamine, le OH de C2 est remplacé par NH2."
      },
      {
        "content": "Osamine N-acétylée → groupement acétyl sur N.",
        "correct": true,
        "explanation": "Le groupement acétyl CH3CO est fixé sur l'azote de l'osamine."
      },
      {
        "content": "NANA → reconnaissance cellulaire.",
        "correct": true,
        "explanation": "Le Neu5Ac terminal des glycoconjugués peut participer à la reconnaissance par des lectines."
      },
      {
        "content": "NANA → absence de toute fonction acide.",
        "correct": false,
        "explanation": "Il possède un COOH ionisable."
      }
    ],
    "explanation": "Les dérivés aminés se distinguent par leurs substitutions et leurs rôles biologiques."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La chitine et le NANA illustrent deux usages biologiques différents des dérivés aminés :",
    "choices": [
      {
        "content": "Chitine : rôle structural.",
        "correct": true,
        "explanation": "La chitine contribue à la rigidité des exosquelettes d'insectes et de crustacés."
      },
      {
        "content": "NANA : rôle dans la reconnaissance cellulaire.",
        "correct": true,
        "explanation": "Le Neu5Ac terminal peut être reconnu par des protéines de liaison aux acides sialiques et moduler les interactions cellulaires."
      },
      {
        "content": "Tous deux sont des dérivés d'oses comportant de l'azote.",
        "correct": true,
        "explanation": "La chitine est constituée de N-acétylglucosamine et le NANA porte un groupement N-acétyl."
      },
      {
        "content": "Tous deux sont des polyols issus d'une simple réduction.",
        "correct": false,
        "explanation": "La chitine est un polysaccharide d'osamine N-acétylée et le Neu5Ac résulte d'une voie biosynthétique distincte impliquant ManNAc-6-P et PEP."
      }
    ],
    "explanation": "Les dérivés aminés ont des fonctions structurales et de signalisation/reconnaissance."
  },
  {
    "order": 67,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sur ce schéma original simplifié d'une osamine, cliquez sur le carbone C2 portant la fonction amine qui remplace le OH.",
    "image": {
      "src": "/images/training/ue14/biochimie/oses-simples-derives/osamine-c2-qzone.svg",
      "alt": "Projection simplifiée d'une osamine linéaire avec C1 à C6 et NH2 porté par C2",
      "width": 700,
      "height": 900
    },
    "expectedZones": [
      {
        "id": "c2",
        "label": "C2 portant NH2",
        "x": 0.5,
        "y": 0.28,
        "tolerance": 0.075
      }
    ],
    "explanation": "Dans une osamine telle que la glucosamine, la fonction hydroxyle portée par C2 est remplacée par une fonction amine primaire."
  },
  {
    "order": 68,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé glucidique possède NHCOCH3 en C2. Quelles conclusions sont justifiées ?",
    "choices": [
      {
        "content": "Il est compatible avec une osamine N-acétylée.",
        "correct": true,
        "explanation": "Le motif NHCOCH3 correspond à une amine portant un groupement acétyl."
      },
      {
        "content": "Le groupement acétyl est lié à l'azote.",
        "correct": true,
        "explanation": "Dans NHCOCH3, le carbonyle du groupement acétyl est directement lié à l'azote."
      },
      {
        "content": "Ce type de dérivé peut participer à des polymères structuraux comme la chitine.",
        "correct": true,
        "explanation": "La chitine est constituée de résidus de N-acétylglucosamine, qui portent ce motif en C2."
      },
      {
        "content": "Il s'agit nécessairement d'acide glucuronique.",
        "correct": false,
        "explanation": "L'acide glucuronique est un dérivé oxydé de C6."
      }
    ],
    "explanation": "Le motif NHCOCH3 est le repère fonctionnel d'une osamine N-acétylée."
  },
  {
    "order": 69,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un NANA est représenté sous forme ionisée. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Son groupement carboxylique est sous forme COO−.",
        "correct": true,
        "explanation": "La forme ionisée résulte de la déprotonation du COOH en carboxylate COO−."
      },
      {
        "content": "La molécule porte une charge négative.",
        "correct": true,
        "explanation": "Le carboxylate COO− confère une charge négative à la molécule."
      },
      {
        "content": "Des NANA proches peuvent contribuer à des répulsions électrostatiques.",
        "correct": true,
        "explanation": "Des charges négatives voisines peuvent engendrer des interactions électrostatiques répulsives."
      },
      {
        "content": "Le COOH ionisé devient NH2.",
        "correct": false,
        "explanation": "L'ionisation transforme COOH en COO− ; elle ne convertit pas une fonction carboxylique en fonction amine."
      }
    ],
    "explanation": "L'état ionisé explique une partie des propriétés de surface du NANA."
  },
  {
    "order": 70,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une surface cellulaire est riche en glycannes terminés par du Neu5Ac. Quel raisonnement est cohérent ?",
    "choices": [
      {
        "content": "Les carboxylates portent des charges négatives.",
        "correct": true,
        "explanation": "La déprotonation du groupement carboxylique produit la forme COO−."
      },
      {
        "content": "Les charges de même signe se repoussent.",
        "correct": true,
        "explanation": "Deux charges négatives proches exercent une interaction électrostatique répulsive."
      },
      {
        "content": "Cette répulsion peut limiter le rapprochement de surfaces voisines.",
        "correct": true,
        "explanation": "La densité de charges négatives peut contribuer à des effets anti-adhésifs ou de répulsion électrostatique."
      },
      {
        "content": "La reconnaissance cellulaire peut être impliquée.",
        "correct": true,
        "explanation": "Les résidus terminaux de Neu5Ac peuvent servir de déterminants reconnus par certaines lectines."
      }
    ],
    "explanation": "Les carboxylates du Neu5Ac contribuent aux propriétés électrostatiques de la surface, tandis que ses résidus terminaux peuvent participer à la reconnaissance moléculaire."
  },
  {
    "order": 71,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare glucosamine, osamine N-acétylée et NANA. Quelles propositions sont cohérentes ?",
    "choices": [
      {
        "content": "La glucosamine illustre une osamine.",
        "correct": true,
        "explanation": "Dans la glucosamine, le groupement NH2 remplace le OH porté par C2 du glucose."
      },
      {
        "content": "L'osamine N-acétylée porte un acétyl sur N.",
        "correct": true,
        "explanation": "La N-acétylation fixe le groupement CH3CO sur l'atome d'azote de l'osamine."
      },
      {
        "content": "Le NANA possède une fonction acide ionisable.",
        "correct": true,
        "explanation": "Sa fonction carboxylique COOH peut se déprotoner en carboxylate COO−."
      },
      {
        "content": "Les trois sont des dérivés glucidiques.",
        "correct": true,
        "explanation": "La glucosamine, les osamines N-acétylées et le Neu5Ac possèdent tous un squelette dérivé d'un ose."
      }
    ],
    "explanation": "Ces trois niveaux de dérivés aminés doivent être distingués."
  },
  {
    "order": 72,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une molécule est décrite comme acide N-acétylneuraminique. Quelles informations peut-on déduire de ce nom ?",
    "choices": [
      {
        "content": "Elle est N-acétylée.",
        "correct": true,
        "explanation": "Le préfixe N-acétyl signifie qu'un groupement acétyl est lié à un atome d'azote."
      },
      {
        "content": "Elle dérive de l'acide neuraminique.",
        "correct": true,
        "explanation": "Le terme neuraminique identifie le squelette parent, modifié ici par N-acétylation."
      },
      {
        "content": "Elle appartient à la famille des acides sialiques.",
        "correct": true,
        "explanation": "Le Neu5Ac est le principal représentant humain de la famille des acides sialiques."
      },
      {
        "content": "Elle ne contient aucune fonction acide.",
        "correct": false,
        "explanation": "L'acide N-acétylneuraminique porte une fonction carboxylique ionisable."
      }
    ],
    "explanation": "Le nom complet résume l'origine et la modification du NANA."
  },
  {
    "order": 73,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Dans la biosynthèse cytosolique du Neu5Ac chez les vertébrés, quels éléments doivent être reconnus ?",
    "choices": [
      {
        "content": "Formation de ManNAc-6-P.",
        "correct": true,
        "explanation": "Le ManNAc est phosphorylé en C6 avant la condensation qui construit le squelette à neuf carbones."
      },
      {
        "content": "Condensation avec le phosphoénolpyruvate.",
        "correct": true,
        "explanation": "Le PEP apporte trois carbones au précurseur ManNAc-6-P."
      },
      {
        "content": "Formation de Neu5Ac-9-phosphate.",
        "correct": true,
        "explanation": "Le produit direct de la condensation est le Neu5Ac-9-phosphate."
      },
      {
        "content": "Déphosphorylation en Neu5Ac.",
        "correct": true,
        "explanation": "Le retrait du phosphate libère le Neu5Ac, aussi abrégé NANA."
      }
    ],
    "explanation": "La voie vertébrée associe ManNAc-6-P, PEP, Neu5Ac-9-P puis une déphosphorylation finale."
  },
  {
    "order": 74,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Après la formation du ManNAc-6-P, combien d'étapes enzymatiques distinctes conduisent au Neu5Ac libre : condensation avec le PEP, puis déphosphorylation ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Deux étapes sont nécessaires : formation du Neu5Ac-9-phosphate par condensation, puis déphosphorylation en Neu5Ac."
  },
  {
    "order": 75,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quel parallèle est correct entre glucuronate et NANA ionisé ?",
    "choices": [
      {
        "content": "Les deux peuvent porter un carboxylate COO−.",
        "correct": true,
        "explanation": "La déprotonation de leur fonction carboxylique produit dans les deux cas un groupement COO−."
      },
      {
        "content": "Les deux peuvent donc contribuer à une charge négative.",
        "correct": true,
        "explanation": "Chaque groupement carboxylate porte une charge négative."
      },
      {
        "content": "Ils sont obtenus par la même transformation structurale.",
        "correct": false,
        "explanation": "Le glucuronate dérive de l'oxydation du glucose, tandis que le Neu5Ac est notamment formé à partir de ManNAc-6-P et de PEP."
      },
      {
        "content": "Ce sont deux dérivés d'oses.",
        "correct": true,
        "explanation": "Le glucuronate dérive du glucose et le Neu5Ac est un nonulosonate issu du métabolisme d'une osamine N-acétylée."
      }
    ],
    "explanation": "La présence d'un carboxylate est commune, mais leurs origines structurales diffèrent."
  },
  {
    "order": 76,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos des localisations biologiques des dérivés aminés :",
    "choices": [
      {
        "content": "Osamines : GAG, glycoprotéines, protéoglycanes, glycolipides.",
        "correct": true,
        "explanation": "Des osamines N-acétylées sont intégrées aux glycannes de ces macromolécules et glycoconjugués."
      },
      {
        "content": "Osamines N-acétylées : paroi bactérienne.",
        "correct": true,
        "explanation": "Le peptidoglycane bactérien contient de la N-acétylglucosamine et de l'acide N-acétylmuramique."
      },
      {
        "content": "Chitine : insectes et crustacés.",
        "correct": true,
        "explanation": "La chitine est un constituant structural de l'exosquelette des insectes et des crustacés."
      },
      {
        "content": "NANA : glycoconjugués de surface des cellules eucaryotes.",
        "correct": true,
        "explanation": "Le Neu5Ac occupe fréquemment l'extrémité des glycannes de glycoprotéines et de glycolipides membranaires."
      }
    ],
    "explanation": "La section associe chaque dérivé à des structures biologiques caractéristiques."
  },
  {
    "order": 77,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux modifications qui permettent de passer d'un ose à une osamine puis à une osamine N-acétylée.",
    "choices": [
      {
        "content": "Substitution OH de C2 par NH2.",
        "correct": true,
        "explanation": "Le remplacement du OH de C2 par NH2 transforme l'ose en 2-amino-2-désoxyose."
      },
      {
        "content": "Ajout d'un groupement acétyl sur N.",
        "correct": true,
        "explanation": "La fixation de CH3CO sur l'azote forme le motif acétamide de l'osamine N-acétylée."
      },
      {
        "content": "Oxydation C6 en COOH.",
        "correct": false,
        "explanation": "L'oxydation de C6 en COOH forme un acide uronique et n'introduit pas d'azote."
      },
      {
        "content": "Réduction du carbonyle en alcool.",
        "correct": false,
        "explanation": "La réduction du carbonyle forme un polyol, pas une osamine."
      }
    ],
    "explanation": "Les deux transformations azotées sont amination de C2 puis N-acétylation."
  },
  {
    "order": 78,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Une osamine porte NH2 en C2.",
        "correct": true,
        "explanation": "Dans une osamine comme la glucosamine, NH2 remplace le OH porté par C2."
      },
      {
        "content": "Une osamine peut être N-acétylée.",
        "correct": true,
        "explanation": "La fonction amine peut recevoir un groupement acétyl et former un motif NHCOCH3."
      },
      {
        "content": "La chitine est un polymère de N-acétylglucosamine liée en β(1→4).",
        "correct": true,
        "explanation": "La chitine est un homopolymère structural linéaire de N-acétylglucosamine."
      },
      {
        "content": "Le Neu5Ac, aussi abrégé NANA, appartient à la famille des acides sialiques.",
        "correct": true,
        "explanation": "Le Neu5Ac est le principal acide sialique chez l'être humain."
      },
      {
        "content": "Le NANA participe à la reconnaissance cellulaire.",
        "correct": true,
        "explanation": "Le Neu5Ac terminal des glycoconjugués peut être reconnu par des lectines et moduler les interactions cellulaires."
      },
      {
        "content": "La formation du NANA commence par la réduction du glucose en sorbitol.",
        "correct": false,
        "explanation": "La voie vertébrée part de l'UDP-GlcNAc et passe par le ManNAc-6-P, sans étape initiale de formation du sorbitol."
      },
      {
        "content": "Le NANA est dépourvu de fonction acide.",
        "correct": false,
        "explanation": "Le Neu5Ac porte une fonction carboxylique pouvant s'ioniser en COO−."
      },
      {
        "content": "La biosynthèse vertébrée du Neu5Ac ne fait intervenir ni PEP ni intermédiaire phosphorylé.",
        "correct": false,
        "explanation": "Elle fait intervenir le PEP et passe par le Neu5Ac-9-phosphate."
      },
      {
        "content": "Une osamine résulte de l'oxydation de C6.",
        "correct": false,
        "explanation": "Une osamine résulte de la substitution du OH de C2 par NH2 ; l'oxydation de C6 forme un acide uronique."
      },
      {
        "content": "La chitine est un triglycéride.",
        "correct": false,
        "explanation": "La chitine est un polysaccharide structural, alors qu'un triglycéride associe du glycérol à trois acides gras."
      }
    ],
    "explanation": "Cette sélection consolide structure, transformations et rôles des dérivés aminés."
  }
];
