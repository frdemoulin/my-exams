import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie — Chapitre 1.3 — Les osides — Synthèse
 * Banque éditoriale auteur — à intégrer via le helper partagé du repo.
 */

export const UE14_BIOCH_CH3_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Associer les diholosides à leurs constituants :",
    "choices": [
      {
        "content": "Lactose → galactose + glucose.",
        "correct": true,
        "explanation": "L’hydrolyse du lactose libère un galactose et un glucose."
      },
      {
        "content": "Saccharose → glucose + fructose.",
        "correct": true,
        "explanation": "L’hydrolyse du saccharose libère un glucose et un fructose."
      },
      {
        "content": "Maltose → glucose + glucose.",
        "correct": true,
        "explanation": "Le maltose est constitué de deux résidus de glucose."
      },
      {
        "content": "Saccharose → galactose + mannose.",
        "correct": false,
        "explanation": "Le saccharose associe glucose et fructose, sans galactose ni mannose."
      }
    ],
    "explanation": "Les trois diholosides se distinguent par leur composition."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Comparer amidon, glycogène et cellulose :",
    "choices": [
      {
        "content": "Amidon : réserve végétale.",
        "correct": true,
        "explanation": "L’amidon est la principale forme de réserve glucidique des végétaux."
      },
      {
        "content": "Glycogène : réserve animale.",
        "correct": true,
        "explanation": "Le glycogène permet le stockage intracellulaire du glucose chez les animaux."
      },
      {
        "content": "Cellulose : structure végétale.",
        "correct": true,
        "explanation": "La cellulose est un constituant structural majeur de la paroi végétale."
      },
      {
        "content": "Cellulose : réserve musculaire humaine.",
        "correct": false,
        "explanation": "La réserve glucidique du muscle humain est le glycogène, et non la cellulose."
      }
    ],
    "explanation": "Les trois glucanes ont des rôles biologiques différents."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un branchement α(1→6) peut être rencontré dans :",
    "choices": [
      {
        "content": "L’amylopectine.",
        "correct": true,
        "explanation": "Les points de branchement de l’amylopectine sont constitués de liaisons α(1→6)."
      },
      {
        "content": "Le glycogène.",
        "correct": true,
        "explanation": "Les nombreux embranchements du glycogène utilisent des liaisons α(1→6)."
      },
      {
        "content": "Des glucanes de réserve ramifiés.",
        "correct": true,
        "explanation": "L’amylopectine et le glycogène sont des glucanes de réserve ramifiés."
      },
      {
        "content": "La chaîne de cellulose β(1→4).",
        "correct": false,
        "explanation": "Cellulose non ramifiée dans ce modèle."
      }
    ],
    "explanation": "Les liaisons α1→6 caractérisent les branchements des réserves glucidiques."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les charges des GAG :",
    "choices": [
      {
        "content": "Les carboxylates peuvent apporter des charges négatives.",
        "correct": true,
        "explanation": "Les fonctions carboxylates des acides uroniques sont chargées négativement au pH physiologique."
      },
      {
        "content": "Les sulfates peuvent apporter des charges négatives.",
        "correct": true,
        "explanation": "Les esters sulfate augmentent la densité de charges négatives des GAG sulfatés."
      },
      {
        "content": "La chondroïtine sulfate est un polyanion.",
        "correct": true,
        "explanation": "Ses carboxylates et ses groupements sulfate lui confèrent de nombreuses charges négatives."
      },
      {
        "content": "L’acide hyaluronique n’a aucune charge car il n’est pas sulfaté.",
        "correct": false,
        "explanation": "Ses COO− apportent des charges."
      }
    ],
    "explanation": "La charge négative peut provenir des carboxylates et/ou des sulfates."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du GAG utilisé comme anticoagulant dans un contexte de thrombose :",
    "choices": [
      {
        "content": "L’héparine.",
        "correct": true,
        "explanation": "L’héparine est utilisée pour prévenir ou traiter des événements thromboemboliques."
      },
      {
        "content": "Il est fortement sulfaté.",
        "correct": true,
        "explanation": "L’héparine possède une densité particulièrement élevée de groupements sulfate."
      },
      {
        "content": "Il est proche de l’héparane sulfate.",
        "correct": true,
        "explanation": "L’héparine et l’héparane sulfate appartiennent à la même famille structurale."
      },
      {
        "content": "La cellulose.",
        "correct": false,
        "explanation": "La cellulose est un polyoside structural végétal dépourvu d’activité anticoagulante."
      }
    ],
    "explanation": "L’héparine est un GAG très sulfaté dont l’activité anticoagulante est exploitée en thérapeutique."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans le contexte de la fécondation :",
    "choices": [
      {
        "content": "Une hyaluronidase peut intervenir.",
        "correct": true,
        "explanation": "Des hyaluronidases associées aux spermatozoïdes participent au franchissement de la matrice du cumulus."
      },
      {
        "content": "Elle hydrolyse l’acide hyaluronique.",
        "correct": true,
        "explanation": "Les hyaluronidases catalysent la dégradation de l’acide hyaluronique."
      },
      {
        "content": "Cette action participe à la progression du spermatozoïde à travers le cumulus.",
        "correct": true,
        "explanation": "La dégradation de la matrice riche en hyaluronane facilite la progression à travers le cumulus."
      },
      {
        "content": "Elle hydrolyse spécifiquement le glycogène musculaire.",
        "correct": false,
        "explanation": "Le glycogène est dégradé par des enzymes distinctes des hyaluronidases."
      }
    ],
    "explanation": "Lors de la fécondation, des hyaluronidases facilitent la progression du spermatozoïde dans la matrice hyaluronique du cumulus."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une glycoprotéine de surface peut contribuer :",
    "choices": [
      {
        "content": "À la reconnaissance spécifique.",
        "correct": true,
        "explanation": "Les glycanes de surface peuvent former des déterminants de reconnaissance spécifique."
      },
      {
        "content": "Aux interactions cellulaires.",
        "correct": true,
        "explanation": "Les glycoprotéines membranaires participent aux interactions entre cellules."
      },
      {
        "content": "À la spécificité de groupes sanguins.",
        "correct": true,
        "explanation": "Certains déterminants de groupes sanguins sont portés par des glycoconjugués de surface."
      },
      {
        "content": "Uniquement à la réserve énergétique.",
        "correct": false,
        "explanation": "Les fonctions des glycoprotéines dépassent largement le stockage énergétique."
      }
    ],
    "explanation": "La fraction glucidique des glycoprotéines joue de nombreux rôles de surface."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est le polyoside de réserve principal des cellules animales ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glycogene",
        "glycogène",
        "le glycogène",
        "le glycogene"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Il s’agit du glycogène."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux GAG correspondant respectivement aux propriétés « non sulfaté » et « très fortement sulfaté ».",
    "choices": [
      {
        "content": "Acide hyaluronique.",
        "correct": true,
        "explanation": "L’acide hyaluronique est un GAG dépourvu de groupements sulfate."
      },
      {
        "content": "Héparine.",
        "correct": true,
        "explanation": "L’héparine se caractérise par une sulfatation particulièrement importante."
      },
      {
        "content": "Amylose.",
        "correct": false,
        "explanation": "L’amylose est un glucane de réserve végétal et non un GAG."
      },
      {
        "content": "Maltose.",
        "correct": false,
        "explanation": "Le maltose est un diholoside de glucose et non un GAG."
      }
    ],
    "explanation": "Acide hyaluronique et héparine représentent deux extrêmes utiles à comparer."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Pour cette synthèse appliquée des osides, sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "Le saccharose est non réducteur.",
        "correct": true,
        "explanation": "Les deux carbones anomériques du saccharose participent à la liaison osidique."
      },
      {
        "content": "Le glycogène est associé à la glycogénine.",
        "correct": true,
        "explanation": "La glycogénine sert d’amorce protéique à la synthèse du glycogène."
      },
      {
        "content": "La cellulose n’est pas digérée par l’Homme.",
        "correct": true,
        "explanation": "Les enzymes digestives humaines ne rompent pas les liaisons β(1→4) de la cellulose."
      },
      {
        "content": "L’acide hyaluronique participe à l’hydratation tissulaire.",
        "correct": true,
        "explanation": "L’acide hyaluronique retient l’eau et contribue à l’hydratation de la matrice."
      },
      {
        "content": "L’héparine est anticoagulante.",
        "correct": true,
        "explanation": "L’héparine potentialise l’antithrombine et est utilisée comme anticoagulant."
      },
      {
        "content": "Le lactose contient du fructose.",
        "correct": false,
        "explanation": "Le lactose associe un galactose à un glucose et ne contient pas de fructose."
      },
      {
        "content": "L’amylose est fortement ramifiée.",
        "correct": false,
        "explanation": "L’amylose est essentiellement une chaîne linéaire de glucoses liés en α(1→4)."
      },
      {
        "content": "La cellulose est α1→4.",
        "correct": false,
        "explanation": "La cellulose est constituée de glucoses reliés par des liaisons β(1→4)."
      },
      {
        "content": "L’acide hyaluronique est fortement sulfaté.",
        "correct": false,
        "explanation": "L’acide hyaluronique ne porte pas de groupements sulfate."
      },
      {
        "content": "Les glycoprotéines sont dépourvues de glucides.",
        "correct": false,
        "explanation": "Par définition, elles en contiennent."
      }
    ],
    "explanation": "Ce bilan mobilise la structure, la digestion et les fonctions biologiques des principaux osides."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une personne présente une faible activité lactasique et consomme du lait. Quelles notions sont directement mobilisées ?",
    "choices": [
      {
        "content": "Le lactose est le diholoside concerné.",
        "correct": true,
        "explanation": "Le lactose est le principal diholoside naturellement présent dans le lait."
      },
      {
        "content": "La lactase est une β-galactosidase.",
        "correct": true,
        "explanation": "La lactase hydrolyse la liaison β-galactosidique du lactose."
      },
      {
        "content": "Les produits d’hydrolyse attendus sont glucose et galactose.",
        "correct": true,
        "explanation": "L’hydrolyse du lactose libère un glucose et un galactose."
      },
      {
        "content": "Le mécanisme concerne l’hydrolyse de cellulose.",
        "correct": false,
        "explanation": "La cellulose est un polymère β(1→4) distinct du lactose."
      }
    ],
    "explanation": "Le contexte médical est entièrement résoluble à partir de la digestion du lactose."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une réserve glucidique présente des chaînes α1→4 et de nombreux embranchements α1→6 dans une cellule musculaire. Il s’agit probablement :",
    "choices": [
      {
        "content": "De glycogène.",
        "correct": true,
        "explanation": "Réserve musculaire et architecture."
      },
      {
        "content": "D’un glucane ramifié.",
        "correct": true,
        "explanation": "Le glycogène est un homopolymère ramifié de résidus de glucose."
      },
      {
        "content": "D’un polymère associé à la glycogénine.",
        "correct": true,
        "explanation": "La glycogénine constitue l’amorce protéique située au cœur d’une particule de glycogène."
      },
      {
        "content": "De cellulose.",
        "correct": false,
        "explanation": "La cellulose est un polymère végétal linéaire en β(1→4), distinct du glycogène."
      }
    ],
    "explanation": "La localisation cellulaire et l’architecture convergent vers le glycogène."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un polysaccharide végétal est β(1→4), hydrophile mais insoluble, et non digéré par l’Homme. Il s’agit :",
    "choices": [
      {
        "content": "De cellulose.",
        "correct": true,
        "explanation": "Tous les indices concordent."
      },
      {
        "content": "D’un polymère de glucose.",
        "correct": true,
        "explanation": "La cellulose est un homopolymère constitué exclusivement de résidus de glucose."
      },
      {
        "content": "D’une fibre alimentaire.",
        "correct": true,
        "explanation": "Non hydrolysée par les enzymes digestives humaines, la cellulose appartient aux fibres alimentaires."
      },
      {
        "content": "D’amylopectine.",
        "correct": false,
        "explanation": "L’amylopectine est un α-glucane ramifié digestible, contrairement à la cellulose."
      }
    ],
    "explanation": "La cellulose se reconnaît par sa liaison β1→4 et son rôle structural."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un GAG de MEC est non sulfaté, riche en COO− et impliqué dans la viscoélasticité. Il s’agit :",
    "choices": [
      {
        "content": "D’acide hyaluronique.",
        "correct": true,
        "explanation": "Tous les indices concordent."
      },
      {
        "content": "D’un polymère contribuant à l’hydratation.",
        "correct": true,
        "explanation": "Ses nombreuses charges favorisent la rétention d’eau et la viscoélasticité de la matrice."
      },
      {
        "content": "D’un GAG généralement non lié de façon covalente à une protéine cœur.",
        "correct": true,
        "explanation": "Contrairement aux autres GAG, l’acide hyaluronique n’est généralement pas synthétisé comme chaîne d’un protéoglycane."
      },
      {
        "content": "D’héparine.",
        "correct": false,
        "explanation": "Très sulfatée et anticoagulante."
      }
    ],
    "explanation": "Le profil structural et fonctionnel identifie l’acide hyaluronique."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un GAG est stocké dans les granulations mastocytaires et utilisé en thérapeutique pour son activité anticoagulante :",
    "choices": [
      {
        "content": "Il s’agit de l’héparine.",
        "correct": true,
        "explanation": "Les indices de stockage mastocytaire et d’usage anticoagulant identifient l’héparine."
      },
      {
        "content": "Le GAG est fortement sulfaté.",
        "correct": true,
        "explanation": "L’héparine présente une sulfatation plus extensive que l’héparane sulfate."
      },
      {
        "content": "Il est proche de l’héparane sulfate.",
        "correct": true,
        "explanation": "L’héparine et l’héparane sulfate appartiennent à la même famille structurale."
      },
      {
        "content": "Il s’agit d’un homoglycane de glucose.",
        "correct": false,
        "explanation": "L’héparine est un hétéropolyoside comportant des osamines et des acides uroniques."
      }
    ],
    "explanation": "L’héparine est un GAG très sulfaté produit notamment par les mastocytes et utilisé comme anticoagulant."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une glycoprotéine porte des déterminants glucidiques responsables d’une reconnaissance spécifique. Cette propriété peut être reliée :",
    "choices": [
      {
        "content": "Aux interactions cellulaires.",
        "correct": true,
        "explanation": "Les glycanes de surface participent aux interactions entre cellules."
      },
      {
        "content": "À la spécificité de certains groupes sanguins.",
        "correct": true,
        "explanation": "Certains antigènes de groupes sanguins correspondent à des structures glucidiques de surface."
      },
      {
        "content": "À une fraction glucidique pouvant contenir fucose ou NANA.",
        "correct": true,
        "explanation": "Le fucose et l’acide N-acétylneuraminique peuvent appartenir aux glycanes."
      },
      {
        "content": "À l’absence totale de ramifications glucidiques.",
        "correct": false,
        "explanation": "La fraction peut être très ramifiée."
      }
    ],
    "explanation": "Les glycanes de surface portent des déterminants qui participent à la reconnaissance moléculaire et aux interactions cellulaires."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Dans un modèle simplifié, un amidon contient environ 20 % d’amylose et 80 % d’amylopectine. Quelle est la somme de ces proportions, en pourcentage ?",
    "answer": {
      "type": "number",
      "value": 100,
      "tolerance": 0
    },
    "explanation": "Les deux fractions représentent l’ensemble de l’amidon dans cette présentation simplifiée."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel nom porte le dimère de deux β-D-glucoses liés en β(1→4), représentatif de l’enchaînement de la cellulose ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cellobiose",
        "la cellobiose"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Il s’agit de la cellobiose."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Comparer pouvoir réducteur et hydrolyse :",
    "choices": [
      {
        "content": "Le saccharose est non réducteur mais hydrolysable.",
        "correct": true,
        "explanation": "Le saccharose reste hydrolysable bien que ses deux carbones anomériques soient engagés."
      },
      {
        "content": "Le lactose est réducteur et hydrolysable par la lactase.",
        "correct": true,
        "explanation": "Le lactose conserve un carbone anomérique libre et sa liaison est hydrolysée par la lactase."
      },
      {
        "content": "Le maltose est réducteur et hydrolysable par la maltase.",
        "correct": true,
        "explanation": "Le maltose possède un carbone anomérique libre et peut être hydrolysé par la maltase."
      },
      {
        "content": "« Non réducteur » signifie « impossible à hydrolyser ».",
        "correct": false,
        "explanation": "Les notions sont différentes."
      }
    ],
    "explanation": "Le pouvoir réducteur dépend du centre anomérique libre, pas de la possibilité d’hydrolyse."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Comparer acide hyaluronique et agrégats de protéoglycanes :",
    "choices": [
      {
        "content": "L’acide hyaluronique peut constituer un long axe moléculaire.",
        "correct": true,
        "explanation": "Une longue chaîne d’acide hyaluronique forme l’axe central de certains agrégats."
      },
      {
        "content": "Plusieurs protéoglycanes peuvent s’y fixer.",
        "correct": true,
        "explanation": "De nombreux protéoglycanes peuvent s’associer le long de cet axe hyaluronique."
      },
      {
        "content": "Les protéoglycanes possèdent des protéines cœur.",
        "correct": true,
        "explanation": "Chaque protéoglycane possède une protéine cœur portant des chaînes de GAG."
      },
      {
        "content": "Le filament hyaluronique doit être fortement sulfaté.",
        "correct": false,
        "explanation": "L’acide hyaluronique est non sulfaté."
      }
    ],
    "explanation": "La structure des agrégats est un exemple transversal d’organisation de la MEC."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Sélectionnez exactement trois associations biologiques ou médicales correctes.",
    "choices": [
      {
        "content": "Héparine — anticoagulation.",
        "correct": true,
        "explanation": "L’héparine est utilisée en thérapeutique pour son activité anticoagulante."
      },
      {
        "content": "Hyaluronidase — fécondation.",
        "correct": true,
        "explanation": "Des hyaluronidases facilitent la progression du spermatozoïde à travers la matrice du cumulus."
      },
      {
        "content": "Glycoprotéines — spécificité des groupes sanguins.",
        "correct": true,
        "explanation": "Certains déterminants de groupes sanguins sont portés par les glycanes de glycoprotéines."
      },
      {
        "content": "Cellulose — réserve énergétique des neurones.",
        "correct": false,
        "explanation": "Les neurones n’utilisent pas la cellulose comme réserve énergétique."
      }
    ],
    "explanation": "Ces associations donnent du sens biologique aux structures glucidiques."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Pour la synthèse finale de maîtrise des osides, sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "Lactose : galactose + glucose.",
        "correct": true,
        "explanation": "Le lactose est constitué d’un galactose et d’un glucose."
      },
      {
        "content": "Amidon : réserve végétale.",
        "correct": true,
        "explanation": "L’amidon est la principale forme de réserve glucidique des végétaux."
      },
      {
        "content": "Glycogène : réserve animale.",
        "correct": true,
        "explanation": "Le glycogène assure le stockage intracellulaire du glucose chez les animaux."
      },
      {
        "content": "Cellulose : liaisons β(1→4).",
        "correct": true,
        "explanation": "Les glucoses de la cellulose sont reliés par des liaisons β(1→4)."
      },
      {
        "content": "Héparine : anticoagulant fortement sulfaté.",
        "correct": true,
        "explanation": "L’héparine est un GAG très sulfaté utilisé comme médicament anticoagulant."
      },
      {
        "content": "Saccharose : réducteur.",
        "correct": false,
        "explanation": "Le saccharose est non réducteur car ses deux carbones anomériques sont engagés."
      },
      {
        "content": "Amylose : ramifiée α1→6.",
        "correct": false,
        "explanation": "L’amylose est essentiellement linéaire et comporte des liaisons α(1→4)."
      },
      {
        "content": "Acide hyaluronique : fortement sulfaté.",
        "correct": false,
        "explanation": "L’acide hyaluronique est un glycosaminoglycane dépourvu de groupements sulfate."
      },
      {
        "content": "Kératane : homoglycane de glucose.",
        "correct": false,
        "explanation": "Le kératane sulfate associe galactose et N-acétylglucosamine."
      },
      {
        "content": "Protéoglycane : dépourvu de protéine cœur.",
        "correct": false,
        "explanation": "Un protéoglycane possède une protéine cœur portant ses chaînes de GAG."
      }
    ],
    "explanation": "Ce bilan final mobilise la composition, les liaisons, l’organisation et les fonctions des principaux osides."
  }
];
