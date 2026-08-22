import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie – Chapitre 1.2 – Synthèse
 */

export const UE14_BIOCH_CH2_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels couples ose → caractéristique sont corrects ?",
    "choices": [
      {
        "content": "Glucose → aldose énergétique majeur.",
        "correct": true,
        "explanation": "La forme linéaire du glucose porte une fonction aldéhyde et son catabolisme contribue fortement à la production d'énergie cellulaire."
      },
      {
        "content": "Fructose → cétose présent dans le saccharose.",
        "correct": true,
        "explanation": "La forme linéaire du fructose porte une fonction cétone et le saccharose associe un résidu de fructose à un résidu de glucose."
      },
      {
        "content": "Ribose → pentose de l'ARN.",
        "correct": true,
        "explanation": "Le ribose possède cinq carbones et constitue le sucre des ribonucléotides de l'ARN."
      },
      {
        "content": "Mannose → épimère C4 du glucose.",
        "correct": false,
        "explanation": "Il est épimère C2."
      }
    ],
    "explanation": "Cette question croise classification et rôles des principaux oses."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels couples transformation → produit sont corrects ?",
    "choices": [
      {
        "content": "Glucose oxydé en C6 → acide glucuronique.",
        "correct": true,
        "explanation": "L'oxydation de l'alcool primaire en C6 forme la fonction carboxylique de l'acide glucuronique."
      },
      {
        "content": "Glucose réduit → sorbitol.",
        "correct": true,
        "explanation": "La réduction de la fonction aldéhyde du glucose forme le sorbitol."
      },
      {
        "content": "Mannose réduit → mannitol.",
        "correct": true,
        "explanation": "La réduction de la fonction aldéhyde du mannose forme le mannitol."
      },
      {
        "content": "Glucose phosphorylé → glucosamine.",
        "correct": false,
        "explanation": "La glucosamine implique une fonction amine en C2."
      }
    ],
    "explanation": "Les principales transformations fonctionnelles doivent être distinguées."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule glucidique porte NHCOCH3 en C2. Quelles propositions sont compatibles ?",
    "choices": [
      {
        "content": "Il peut s'agir d'une osamine N-acétylée.",
        "correct": true,
        "explanation": "Le motif NHCOCH3 correspond à une fonction amine portant un groupement acétyl."
      },
      {
        "content": "Elle contient de l'azote.",
        "correct": true,
        "explanation": "Le symbole N du motif NHCOCH3 représente l'atome d'azote."
      },
      {
        "content": "Elle peut participer à un polymère structural.",
        "correct": true,
        "explanation": "La chitine est un polymère structural constitué de N-acétylglucosamine portant ce motif."
      },
      {
        "content": "Elle est obligatoirement un acide uronique.",
        "correct": false,
        "explanation": "Un acide uronique porte une fonction acide terminale."
      }
    ],
    "explanation": "Le motif N-acétylé identifie une famille de dérivés aminés."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels groupements ionisés peuvent contribuer à la charge négative d'un dérivé glucidique ?",
    "choices": [
      {
        "content": "Un carboxylate.",
        "correct": true,
        "explanation": "Le glucuronate et la forme ionisée du Neu5Ac portent notamment un groupement carboxylate COO−."
      },
      {
        "content": "Un sulfate.",
        "correct": true,
        "explanation": "Les esters sulfates ionisés contribuent fortement à la charge négative des GAG sulfatés."
      },
      {
        "content": "Un phosphate.",
        "correct": true,
        "explanation": "Les esters phosphates des oses sont ionisés dans les conditions biologiques usuelles."
      },
      {
        "content": "Uniquement un groupe méthyle.",
        "correct": false,
        "explanation": "Un méthyle n'explique pas cette charge."
      }
    ],
    "explanation": "Carboxylates, sulfates et phosphates peuvent contribuer aux charges négatives."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la réaction de Fehling :",
    "choices": [
      {
        "content": "Elle met en évidence un pouvoir réducteur.",
        "correct": true,
        "explanation": "Un sucre réducteur réduit les ions cuivre(II) pendant qu'il est lui-même oxydé."
      },
      {
        "content": "Le sucre réducteur est oxydé.",
        "correct": true,
        "explanation": "La fonction carbonyle accessible du sucre est oxydée tandis que Cu2+ est réduit."
      },
      {
        "content": "Un précipité rouge brique de Cu2O apparaît.",
        "correct": true,
        "explanation": "La réduction des ions cuivre(II) conduit à l'oxyde de cuivre(I) Cu2O, insoluble et rouge brique."
      },
      {
        "content": "Elle transforme le glucose en sorbitol.",
        "correct": false,
        "explanation": "Le sorbitol résulte d'une réduction différente."
      }
    ],
    "explanation": "Fehling est un test redox, à distinguer de la réduction en polyol."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un patient élimine un médicament sous forme glucuronoconjuguée. Quelles conclusions sont cohérentes ?",
    "choices": [
      {
        "content": "L'acide glucuronique participe à la transformation.",
        "correct": true,
        "explanation": "Un groupement glucuronyle, fourni par l'UDP-acide glucuronique, est transféré sur le médicament ou son métabolite."
      },
      {
        "content": "La solubilité du métabolite augmente.",
        "correct": true,
        "explanation": "Le groupement glucuronyle polaire augmente généralement l'hydrosolubilité du composé conjugué."
      },
      {
        "content": "L'élimination est facilitée.",
        "correct": true,
        "explanation": "La polarité accrue favorise souvent l'excrétion urinaire ou biliaire du glucuronide."
      },
      {
        "content": "Le médicament est nécessairement converti en mannitol.",
        "correct": false,
        "explanation": "Le mannitol provient de la réduction du mannose et n'est pas le produit d'une glucuronoconjugaison."
      }
    ],
    "explanation": "La glucuronoconjugaison est une voie de solubilisation et d'excrétion."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une glycoprotéine de surface riche en acide sialique :",
    "choices": [
      {
        "content": "Peut participer à la reconnaissance cellulaire.",
        "correct": true,
        "explanation": "Les acides sialiques terminaux peuvent servir de déterminants reconnus par certaines lectines."
      },
      {
        "content": "Peut porter des charges négatives.",
        "correct": true,
        "explanation": "Le carboxylate COO− du Neu5Ac confère une charge négative au glycanne."
      },
      {
        "content": "Peut moduler des interactions de surface par répulsion électrostatique.",
        "correct": true,
        "explanation": "La densité de charges négatives peut limiter le rapprochement de surfaces ou de macromolécules voisines."
      },
      {
        "content": "Est dépourvue de glucides.",
        "correct": false,
        "explanation": "Une glycoprotéine contient des glycannes."
      }
    ],
    "explanation": "Le NANA contribue aux propriétés de surface des glycoconjugués."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des précurseurs glucidiques des nucléotides :",
    "choices": [
      {
        "content": "Le ribose-5-phosphate contribue à la biosynthèse des ribonucléotides.",
        "correct": true,
        "explanation": "Le ribose-5-phosphate est converti en PRPP, puis engagé dans la biosynthèse des nucléotides."
      },
      {
        "content": "Les précurseurs désoxyribonucléotidiques de l'ADN sont produits par réduction de ribonucléotides.",
        "correct": true,
        "explanation": "Les ribonucléotide réductases convertissent des ribonucléotides en désoxyribonucléotides."
      },
      {
        "content": "Les nucléotides libres portent leurs phosphates sur le carbone 5′ du pentose.",
        "correct": true,
        "explanation": "Les nucléosides mono-, di- et triphosphates sont phosphorylés sur le groupement hydroxyle 5′."
      },
      {
        "content": "Ce sont des hexoses.",
        "correct": false,
        "explanation": "Ce sont des pentoses."
      }
    ],
    "explanation": "Le ribose-5-phosphate alimente la synthèse des ribonucléotides, dont la réduction fournit les précurseurs de l'ADN."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux polyols obtenus par réduction du glucose ou du mannose.",
    "choices": [
      {
        "content": "Mannitol.",
        "correct": true,
        "explanation": "La réduction de la fonction aldéhyde du mannose produit le mannitol."
      },
      {
        "content": "Sorbitol.",
        "correct": true,
        "explanation": "La réduction de la fonction aldéhyde du glucose produit le sorbitol."
      },
      {
        "content": "NANA.",
        "correct": false,
        "explanation": "Le Neu5Ac est un ose acide à neuf carbones et non un polyol issu de la réduction du glucose ou du mannose."
      },
      {
        "content": "Acide glucuronique.",
        "correct": false,
        "explanation": "L'acide glucuronique est obtenu par oxydation du glucose en C6."
      }
    ],
    "explanation": "Le mannitol résulte de la réduction du mannose et le sorbitol de celle du glucose."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Une osamine peut être N-acétylée.",
        "correct": true,
        "explanation": "La fonction amine d'une osamine peut recevoir un groupement acétyl et former un motif NHCOCH3."
      },
      {
        "content": "Un ose peut être phosphorylé.",
        "correct": true,
        "explanation": "La phosphorylation forme un ester phosphorique sur une fonction hydroxyle de l'ose."
      },
      {
        "content": "Un ose peut être sulfaté.",
        "correct": true,
        "explanation": "La sulfatation forme un ester sulfate sur une fonction hydroxyle de l'ose."
      },
      {
        "content": "Un aldose peut être oxydé lors du test de Fehling.",
        "correct": true,
        "explanation": "L'aldose réduit les ions cuivre(II) et est simultanément oxydé."
      },
      {
        "content": "Chez les espèces capables de le synthétiser, l'acide ascorbique dérive du métabolisme glucidique.",
        "correct": true,
        "explanation": "La voie animale classique part de dérivés du glucose et passe par la L-gulono-1,4-lactone."
      },
      {
        "content": "Toutes ces transformations donnent le même produit.",
        "correct": false,
        "explanation": "N-acétylation, phosphorylation, sulfatation et oxydation modifient des fonctions différentes et produisent des familles distinctes."
      },
      {
        "content": "Le sorbitol est un acide sialique.",
        "correct": false,
        "explanation": "Le sorbitol est le polyol obtenu par réduction du glucose."
      },
      {
        "content": "Le glucuronate est une osamine.",
        "correct": false,
        "explanation": "Le glucuronate est la forme ionisée d'un dérivé oxydé du glucose et ne porte pas la fonction amine caractéristique d'une osamine."
      },
      {
        "content": "La chitine est un ester phosphorique.",
        "correct": false,
        "explanation": "La chitine est un polymère de N-acétylglucosamine liée en β(1→4)."
      },
      {
        "content": "La streptomycine est une vitamine.",
        "correct": false,
        "explanation": "La streptomycine est un antibiotique aminoglycosidique."
      }
    ],
    "explanation": "Ces transformations conduisent à des familles distinctes de dérivés glucidiques aux propriétés différentes."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un ose est d'abord oxydé sur un alcool terminal, tandis qu'un autre exemplaire est réduit sur sa fonction carbonyle. Quelles conclusions sont correctes ?",
    "choices": [
      {
        "content": "Le premier peut devenir un acide uronique.",
        "correct": true,
        "explanation": "L'oxydation de l'alcool primaire en C6 du glucose produit l'acide glucuronique."
      },
      {
        "content": "Le second devient un polyol.",
        "correct": true,
        "explanation": "La réduction de la fonction carbonyle en alcool transforme l'ose en polyol."
      },
      {
        "content": "Les transformations sont de sens redox opposé.",
        "correct": true,
        "explanation": "La première transformation augmente l'état d'oxydation, tandis que la seconde le diminue."
      },
      {
        "content": "Les deux produits sont fonctionnellement identiques.",
        "correct": false,
        "explanation": "Le premier porte une fonction carboxylique, tandis que le second possède une fonction alcool supplémentaire."
      }
    ],
    "explanation": "L'oxydation d'un alcool terminal peut former un acide uronique, tandis que la réduction du carbonyle forme un polyol."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un composé possède à la fois un dérivé aminé et un groupement acétyl lié à l'azote. Quelles propositions sont cohérentes ?",
    "choices": [
      {
        "content": "Il s'agit d'une N-acétylation.",
        "correct": true,
        "explanation": "Le préfixe N-acétyl signifie qu'un groupement acétyl est lié à l'atome d'azote."
      },
      {
        "content": "Le motif est compatible avec une osamine N-acétylée.",
        "correct": true,
        "explanation": "Une osamine N-acétylée porte un motif acétamide NHCOCH3 en C2."
      },
      {
        "content": "La chitine constitue un exemple de polymère lié à ce type de motif.",
        "correct": true,
        "explanation": "Chaque résidu de N-acétylglucosamine de la chitine porte un groupement N-acétyl."
      },
      {
        "content": "La modification correspond à une phosphorylation.",
        "correct": false,
        "explanation": "Ce n'est pas un phosphate."
      }
    ],
    "explanation": "La lecture du motif fonctionnel permet d'identifier la transformation."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la biosynthèse cytosolique du Neu5Ac chez les vertébrés, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le ManNAc-6-P constitue le précurseur glucidique à six carbones.",
        "correct": true,
        "explanation": "Le N-acétyl-D-mannosamine est phosphorylé en C6 avant la condensation."
      },
      {
        "content": "Le phosphoénolpyruvate apporte un fragment à trois carbones.",
        "correct": true,
        "explanation": "Le PEP se condense avec le ManNAc-6-P pour construire le squelette à neuf carbones."
      },
      {
        "content": "Le Neu5Ac-9-phosphate est un intermédiaire de la voie.",
        "correct": true,
        "explanation": "La condensation catalysée par NANS forme le Neu5Ac-9-phosphate."
      },
      {
        "content": "Une déphosphorylation libère le Neu5Ac, principal acide sialique humain.",
        "correct": true,
        "explanation": "Une phosphatase spécifique retire le phosphate avant l'activation ultérieure du Neu5Ac en CMP-Neu5Ac."
      }
    ],
    "explanation": "La voie vertébrée associe ManNAc-6-P, PEP, Neu5Ac-9-P puis une déphosphorylation finale."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une glycoprotéine porte de nombreux NANA ionisés et des chaînes glycaniques étendues. Quel raisonnement est compatible ?",
    "choices": [
      {
        "content": "Les carboxylates COO− se repoussent.",
        "correct": true,
        "explanation": "Deux charges négatives proches peuvent exercer une interaction électrostatique répulsive."
      },
      {
        "content": "Cette répulsion peut limiter le rapprochement de surfaces voisines.",
        "correct": true,
        "explanation": "Une forte densité de charges négatives contribue à des effets électrostatiques répulsifs."
      },
      {
        "content": "Les NANA peuvent participer à la reconnaissance cellulaire.",
        "correct": true,
        "explanation": "Les acides sialiques terminaux peuvent servir de déterminants reconnus par certaines lectines."
      },
      {
        "content": "L'ionisation neutralise toutes les charges.",
        "correct": false,
        "explanation": "La déprotonation du COOH forme au contraire un carboxylate COO− chargé négativement."
      }
    ],
    "explanation": "Le NANA relie chimie acide, électrostatique et biologie cellulaire."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un métabolite est nommé fructose-1,6-bisphosphate. Quelles informations sont directement codées par le nom ?",
    "choices": [
      {
        "content": "Il dérive du fructose.",
        "correct": true,
        "explanation": "Le premier terme de la nomenclature identifie le squelette glucidique comme celui du fructose."
      },
      {
        "content": "Il possède deux phosphates.",
        "correct": true,
        "explanation": "Le préfixe bis- indique la présence de deux groupements phosphate distincts."
      },
      {
        "content": "Les positions sont C1 et C6.",
        "correct": true,
        "explanation": "Les indices 1 et 6 désignent les deux carbones porteurs des phosphates."
      },
      {
        "content": "Il s'agit nécessairement d'une osamine.",
        "correct": false,
        "explanation": "Cette nomenclature décrit un fructose bisphosphorylé et ne comporte aucun motif amino."
      }
    ],
    "explanation": "La nomenclature des esters phosphoriques fournit les positions de substitution."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un GAG porte simultanément une osamine sulfatée et un acide uronique. Quelles propriétés sont cohérentes ?",
    "choices": [
      {
        "content": "Des sulfates peuvent apporter des charges négatives.",
        "correct": true,
        "explanation": "Les esters sulfates sont ionisés aux pH biologiques usuels."
      },
      {
        "content": "Le carboxylate de l'acide uronique peut aussi être négatif.",
        "correct": true,
        "explanation": "La déprotonation de la fonction carboxylique forme un groupement COO−."
      },
      {
        "content": "La molécule peut être fortement hydrophile.",
        "correct": true,
        "explanation": "Les charges et les nombreuses fonctions hydroxyle favorisent les interactions avec l'eau et les contre-ions."
      },
      {
        "content": "Il s'agit nécessairement d'une protéine fibrillaire.",
        "correct": false,
        "explanation": "Un GAG est glucidique."
      }
    ],
    "explanation": "La forte charge de certains GAG vient de plusieurs fonctions ionisables."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel polyol formé par réduction du glucose est utilisé comme édulcorant et comme humectant dans certains dentifrices ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sorbitol",
        "le sorbitol"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le sorbitol résulte de la réduction du glucose ; son goût sucré et son caractère hygroscopique expliquent ses usages comme édulcorant et humectant."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Combien de positions phosphorylées distinctes sont indiquées dans le nom fructose-1,6-bisphosphate ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Les phosphates sont portés en C1 et C6."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la vitamine C, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il s'agit de l'acide ascorbique.",
        "correct": true,
        "explanation": "L'acide L-ascorbique est la forme chimique communément appelée vitamine C."
      },
      {
        "content": "Chez les espèces capables de la synthétiser, elle dérive du glucose via la L-gulono-1,4-lactone.",
        "correct": true,
        "explanation": "La voie animale classique aboutit à la L-gulono-1,4-lactone, ensuite oxydée en L-ascorbate."
      },
      {
        "content": "L'être humain ne possède pas de L-gulonolactone oxydase fonctionnelle.",
        "correct": true,
        "explanation": "L'absence de cette activité enzymatique empêche l'achèvement de la biosynthèse endogène de la vitamine C."
      },
      {
        "content": "L'être humain en synthétise suffisamment à partir du glucose.",
        "correct": false,
        "explanation": "La vitamine C doit être apportée par l'alimentation chez l'être humain."
      }
    ],
    "explanation": "La vitamine C est l'acide L-ascorbique ; elle est essentielle dans l'alimentation humaine faute de biosynthèse endogène complète."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelle substance est un antibiotique aminoglycosidique ?",
    "choices": [
      {
        "content": "Streptomycine.",
        "correct": true,
        "explanation": "La streptomycine est un antibiotique appartenant à la famille des aminoglycosides."
      },
      {
        "content": "Acide ascorbique.",
        "correct": false,
        "explanation": "L'acide ascorbique est la vitamine C, pas un antibiotique."
      },
      {
        "content": "Mannitol.",
        "correct": false,
        "explanation": "Le mannitol est un polyol, pas un antibiotique aminoglycosidique."
      },
      {
        "content": "Glucuronate.",
        "correct": false,
        "explanation": "Le glucuronate est la forme ionisée de l'acide glucuronique."
      }
    ],
    "explanation": "La streptomycine est un antibiotique aminoglycosidique comportant plusieurs unités apparentées à des oses aminés."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelle démarche permet de classer un dérivé d'ose inconnu à partir de sa fonction nouvelle ?",
    "choices": [
      {
        "content": "COOH terminal issu d'une oxydation → dérivé acide/uronique.",
        "correct": true,
        "explanation": "L'oxydation d'un alcool primaire terminal en fonction carboxylique forme un acide uronique."
      },
      {
        "content": "Carbonyle réduit en alcool → polyol.",
        "correct": true,
        "explanation": "La réduction d'une fonction aldéhyde ou cétone en alcool produit un alditol, aussi appelé polyol."
      },
      {
        "content": "NH2 en C2 → osamine.",
        "correct": true,
        "explanation": "Le remplacement du OH de C2 par NH2 caractérise une osamine comme la glucosamine."
      },
      {
        "content": "Phosphate ou sulfate sur OH → ose estérifié.",
        "correct": true,
        "explanation": "La liaison d'un phosphate ou d'un sulfate à l'oxygène d'un OH forme un ester."
      }
    ],
    "explanation": "Les familles de dérivés peuvent être reconnues par la transformation fonctionnelle."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Glucose → acide glucuronique par oxydation de C6.",
        "correct": true,
        "explanation": "L'alcool primaire en C6 est oxydé en fonction carboxylique."
      },
      {
        "content": "Glucose → sorbitol par réduction.",
        "correct": true,
        "explanation": "La fonction aldéhyde du glucose est réduite en alcool primaire."
      },
      {
        "content": "Une osamine porte une amine en C2.",
        "correct": true,
        "explanation": "Dans une osamine comme la glucosamine, NH2 remplace le OH porté par C2."
      },
      {
        "content": "Le Neu5Ac, aussi abrégé NANA, appartient à la famille des acides sialiques.",
        "correct": true,
        "explanation": "Le Neu5Ac est le principal acide sialique chez l'être humain."
      },
      {
        "content": "Le ribose peut être phosphorylé en C5 dans le contexte des acides nucléiques.",
        "correct": true,
        "explanation": "Le ribose-5-phosphate contribue via le PRPP à la biosynthèse des ribonucléotides."
      },
      {
        "content": "Mannose → sorbitol par réduction.",
        "correct": false,
        "explanation": "La réduction du mannose forme le mannitol ; le sorbitol provient de la réduction du glucose."
      },
      {
        "content": "La chitine est un ester sulfurique.",
        "correct": false,
        "explanation": "La chitine est un polymère de N-acétylglucosamine liée en β(1→4)."
      },
      {
        "content": "Le NANA ne peut pas être ionisé.",
        "correct": false,
        "explanation": "Sa fonction carboxylique COOH peut se déprotoner en carboxylate COO−."
      },
      {
        "content": "La streptomycine est la vitamine C.",
        "correct": false,
        "explanation": "La streptomycine est un antibiotique aminoglycosidique ; la vitamine C est l'acide ascorbique."
      },
      {
        "content": "Fehling positif correspond à une réduction de l'aldose en polyol.",
        "correct": false,
        "explanation": "Lors du test de Fehling, l'aldose est oxydé tandis que les ions cuivre(II) sont réduits en Cu2O."
      }
    ],
    "explanation": "Cette sélection mobilise les principales transformations fonctionnelles et quelques rôles biologiques des dérivés glucidiques."
  }
];
