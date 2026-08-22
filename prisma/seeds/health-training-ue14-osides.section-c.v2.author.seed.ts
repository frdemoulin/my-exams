import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie – Chapitre 1.3 – Section C – Cellulose, fibres et premiers GAG */
export const UE14_BIOCH_CH3_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la cellulose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les chaînes s'associent par de nombreuses liaisons hydrogène.",
        "correct": true,
        "explanation": "Elles forment des microfibrilles résistantes."
      },
      {
        "content": "Ses glucoses sont reliés en bêta(1→4).",
        "correct": true,
        "explanation": "Cette liaison donne des chaînes étendues."
      },
      {
        "content": "La cellulose est un glucane structural des végétaux.",
        "correct": true,
        "explanation": "Elle renforce les parois cellulaires."
      },
      {
        "content": "La cellulose est hydrophile mais insoluble dans l'eau.",
        "correct": true,
        "explanation": "Les OH interagissent avec l'eau mais le réseau interchaînes limite la dissolution."
      },
      {
        "content": "Elle est un polymère alpha(1→4) fortement ramifié.",
        "correct": false,
        "explanation": "Elle est bêta(1→4) et linéaire."
      }
    ],
    "explanation": "La cellulose est un glucane linéaire bêta(1→4) structural des végétaux."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de la cellobiose, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Sa liaison est alpha(1→4).",
        "correct": false,
        "explanation": "Cela décrit le maltose."
      },
      {
        "content": "La cellobiose est réductrice.",
        "correct": true,
        "explanation": "Un carbone anomérique reste libre."
      },
      {
        "content": "La cellobiose associe glucose et fructose.",
        "correct": false,
        "explanation": "Cela décrit le saccharose."
      },
      {
        "content": "Elle est le motif principal de branchement alpha(1→6) du glycogène.",
        "correct": false,
        "explanation": "Elle correspond à la cellulose."
      },
      {
        "content": "La cellobiose est identique au lactose.",
        "correct": false,
        "explanation": "Le lactose contient du galactose."
      }
    ],
    "explanation": "Cellobiose et maltose diffèrent par bêta(1→4) versus alpha(1→4)."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Pourquoi l'être humain ne digère-t-il pas efficacement la cellulose ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "absence de cellulase",
        "absence de bêta-glucosidase digestive",
        "absence de beta-glucosidase digestive",
        "pas d'enzyme pour les liaisons beta(1→4)",
        "pas de cellulase digestive"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'être humain ne possède pas les glycosidases digestives capables d'hydrolyser efficacement la cellulose bêta(1→4)."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les fibres alimentaires, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Certaines fibres sont fermentées par le microbiote.",
        "correct": true,
        "explanation": "Des acides gras à chaîne courte peuvent être produits."
      },
      {
        "content": "Elles peuvent augmenter le volume des selles et modifier le transit.",
        "correct": true,
        "explanation": "Leur rétention d'eau et leur fermentation interviennent."
      },
      {
        "content": "Les fibres n'interagissent jamais avec le microbiote.",
        "correct": false,
        "explanation": "Certaines sont fermentescibles."
      },
      {
        "content": "Les fibres incluent notamment cellulose, hémicelluloses et pectines.",
        "correct": true,
        "explanation": "Ce sont des composants végétaux peu ou non digérés dans l'intestin grêle."
      },
      {
        "content": "Une alimentation riche en fibres est associée à plusieurs bénéfices de santé.",
        "correct": true,
        "explanation": "Les recommandations encouragent la consommation de végétaux."
      }
    ],
    "explanation": "Les fibres alimentaires comprennent plusieurs polysaccharides végétaux non digérés par les enzymes humaines."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de les glycosaminoglycanes, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Ils sont très hydrophiles.",
        "correct": true,
        "explanation": "Leur charge attire les ions et l'eau."
      },
      {
        "content": "Un GAG contient toujours uniquement du glucose non modifié.",
        "correct": false,
        "explanation": "Les motifs utilisent des dérivés variés."
      },
      {
        "content": "Tous les GAG sont des protéines.",
        "correct": false,
        "explanation": "Ce sont des polysaccharides."
      },
      {
        "content": "Tous les GAG sont neutres.",
        "correct": false,
        "explanation": "Beaucoup sont fortement anioniques."
      },
      {
        "content": "Les GAG sont dépourvus d'intérêt structural.",
        "correct": false,
        "explanation": "Ils sont majeurs dans la matrice extracellulaire."
      }
    ],
    "explanation": "Les GAG sont des polysaccharides anioniques hydrophiles à motifs répétés."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur l'acide hyaluronique, retenez exactement les deux exactes.",
    "choices": [
      {
        "content": "C'est un diholoside alimentaire simple.",
        "correct": false,
        "explanation": "C'est un polysaccharide."
      },
      {
        "content": "Il est constitué uniquement de fructose.",
        "correct": false,
        "explanation": "Il contient glucuronate et GlcNAc."
      },
      {
        "content": "Il est présent dans la matrice extracellulaire et le liquide synovial.",
        "correct": true,
        "explanation": "Il contribue aux propriétés mécaniques."
      },
      {
        "content": "Il est très hydrophile et contribue à la viscosité de matrices.",
        "correct": true,
        "explanation": "Il retient beaucoup d'eau."
      },
      {
        "content": "Il est totalement hydrophobe.",
        "correct": false,
        "explanation": "Il est très hydrophile."
      }
    ],
    "explanation": "L'hyaluronane est un GAG non sulfaté très hydrophile de la matrice extracellulaire.",
    "requiredSelectionCount": 2
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la chondroïtine sulfate, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle est absente de la matrice extracellulaire.",
        "correct": false,
        "explanation": "Elle est particulièrement importante dans le cartilage."
      },
      {
        "content": "La chondroïtine sulfate est un GAG sulfaté.",
        "correct": true,
        "explanation": "Elle porte des groupements sulfate."
      },
      {
        "content": "Son motif comprend un acide glucuronique et une N-acétylgalactosamine.",
        "correct": true,
        "explanation": "GalNAc peut être sulfatée."
      },
      {
        "content": "Elle est abondante dans le cartilage.",
        "correct": true,
        "explanation": "Elle contribue aux propriétés mécaniques de la matrice."
      },
      {
        "content": "Ses charges négatives favorisent l'hydratation.",
        "correct": true,
        "explanation": "Les contre-ions et l'eau sont attirés."
      }
    ],
    "explanation": "La chondroïtine sulfate associe glucuronate et GalNAc sulfatée dans un GAG de matrice."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel polysaccharide est le substrat des hyaluronidases ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide hyaluronique",
        "hyaluronane",
        "hyaluronate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les hyaluronidases clivent l'hyaluronane et participent à plusieurs processus de remodelage matriciel."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur la cellulose, laquelle est exacte ?",
    "choices": [
      {
        "content": "Elle est un polymère alpha(1→4) fortement ramifié.",
        "correct": false,
        "explanation": "Elle est bêta(1→4) et linéaire."
      },
      {
        "content": "Elle est constituée de fructose.",
        "correct": false,
        "explanation": "Elle est constituée de glucose."
      },
      {
        "content": "La cellulose est hydrophile mais insoluble dans l'eau.",
        "correct": true,
        "explanation": "Les OH interagissent avec l'eau mais le réseau interchaînes limite la dissolution."
      },
      {
        "content": "Elle ne possède aucun groupe hydroxyle.",
        "correct": false,
        "explanation": "Chaque résidu en porte plusieurs."
      },
      {
        "content": "La cellulose est la réserve glucidique principale du foie humain.",
        "correct": false,
        "explanation": "Le foie stocke du glycogène."
      }
    ],
    "explanation": "La cellulose est un glucane linéaire bêta(1→4) structural des végétaux."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la cellobiose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La cellobiose associe deux résidus de glucose.",
        "correct": true,
        "explanation": "C'est un diholoside."
      },
      {
        "content": "La cellobiose associe glucose et fructose.",
        "correct": false,
        "explanation": "Cela décrit le saccharose."
      },
      {
        "content": "La cellobiose est identique au lactose.",
        "correct": false,
        "explanation": "Le lactose contient du galactose."
      },
      {
        "content": "Elle diffère du maltose par l'anomérie de la liaison.",
        "correct": true,
        "explanation": "Le maltose est alpha(1→4)."
      },
      {
        "content": "Sa liaison est bêta(1→4).",
        "correct": true,
        "explanation": "Elle correspond au motif de la cellulose."
      }
    ],
    "explanation": "Cellobiose et maltose diffèrent par bêta(1→4) versus alpha(1→4)."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la cellulose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La cellulose est un glucane structural des végétaux.",
        "correct": true,
        "explanation": "Elle renforce les parois cellulaires."
      },
      {
        "content": "La cellulose est hydrophile mais insoluble dans l'eau.",
        "correct": true,
        "explanation": "Les OH interagissent avec l'eau mais le réseau interchaînes limite la dissolution."
      },
      {
        "content": "Les chaînes s'associent par de nombreuses liaisons hydrogène.",
        "correct": true,
        "explanation": "Elles forment des microfibrilles résistantes."
      },
      {
        "content": "Elle est constituée de fructose.",
        "correct": false,
        "explanation": "Elle est constituée de glucose."
      },
      {
        "content": "Elle ne possède aucun groupe hydroxyle.",
        "correct": false,
        "explanation": "Chaque résidu en porte plusieurs."
      }
    ],
    "explanation": "La cellulose est un glucane linéaire bêta(1→4) structural des végétaux."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel GAG non sulfaté est dégradé par les hyaluronidases ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide hyaluronique",
        "hyaluronane",
        "hyaluronate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les hyaluronidases clivent l'hyaluronane, un GAG non sulfaté de la matrice extracellulaire."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur la non-digestibilité humaine de la cellulose, laquelle est exacte ?",
    "choices": [
      {
        "content": "L'humain digère la cellulose aussi efficacement que l'amidon grâce à l'alpha-amylase.",
        "correct": false,
        "explanation": "L'alpha-amylase ne clive pas bêta(1→4)."
      },
      {
        "content": "La cellulose est hydrolysée par la lactase.",
        "correct": false,
        "explanation": "La lactase cible le lactose."
      },
      {
        "content": "Une fibre est nécessairement sans aucun effet biologique.",
        "correct": false,
        "explanation": "Les fibres ont des effets physiologiques."
      },
      {
        "content": "La cellulose constitue une fibre alimentaire.",
        "correct": true,
        "explanation": "Elle contribue au contenu fibreux végétal."
      },
      {
        "content": "La cellulose est absorbée intacte comme un monosaccharide.",
        "correct": false,
        "explanation": "Elle n'est pas absorbée comme telle."
      }
    ],
    "explanation": "L'être humain ne possède pas les glycosidases digestives capables d'hydrolyser efficacement la cellulose bêta(1→4)."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les fibres alimentaires, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les fibres n'interagissent jamais avec le microbiote.",
        "correct": false,
        "explanation": "Certaines sont fermentescibles."
      },
      {
        "content": "La cellulose est un lipide.",
        "correct": false,
        "explanation": "C'est un glucide polymérique."
      },
      {
        "content": "Les fibres incluent notamment cellulose, hémicelluloses et pectines.",
        "correct": true,
        "explanation": "Ce sont des composants végétaux peu ou non digérés dans l'intestin grêle."
      },
      {
        "content": "Certaines fibres sont fermentées par le microbiote.",
        "correct": true,
        "explanation": "Des acides gras à chaîne courte peuvent être produits."
      },
      {
        "content": "Une alimentation riche en fibres est associée à plusieurs bénéfices de santé.",
        "correct": true,
        "explanation": "Les recommandations encouragent la consommation de végétaux."
      }
    ],
    "explanation": "Les fibres alimentaires comprennent plusieurs polysaccharides végétaux non digérés par les enzymes humaines."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos de les glycosaminoglycanes, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Un GAG contient toujours uniquement du glucose non modifié.",
        "correct": false,
        "explanation": "Les motifs utilisent des dérivés variés."
      },
      {
        "content": "Tous les GAG sont des protéines.",
        "correct": false,
        "explanation": "Ce sont des polysaccharides."
      },
      {
        "content": "Beaucoup de GAG sont fortement chargés négativement.",
        "correct": true,
        "explanation": "Carboxylates et sulfates y contribuent."
      },
      {
        "content": "Ils sont très hydrophiles.",
        "correct": true,
        "explanation": "Leur charge attire les ions et l'eau."
      },
      {
        "content": "Les GAG sont dépourvus d'intérêt structural.",
        "correct": false,
        "explanation": "Ils sont majeurs dans la matrice extracellulaire."
      }
    ],
    "explanation": "Les GAG sont des polysaccharides anioniques hydrophiles à motifs répétés.",
    "requiredSelectionCount": 2
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'acide hyaluronique, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Il est très hydrophile et contribue à la viscosité de matrices.",
        "correct": true,
        "explanation": "Il retient beaucoup d'eau."
      },
      {
        "content": "C'est un diholoside alimentaire simple.",
        "correct": false,
        "explanation": "C'est un polysaccharide."
      },
      {
        "content": "Son motif répété contient acide D-glucuronique et N-acétylglucosamine.",
        "correct": true,
        "explanation": "Deux dérivés glucidiques alternent."
      },
      {
        "content": "L'acide hyaluronique est fortement sulfaté.",
        "correct": false,
        "explanation": "Il n'est pas sulfaté."
      },
      {
        "content": "Il est constitué uniquement de fructose.",
        "correct": false,
        "explanation": "Il contient glucuronate et GlcNAc."
      }
    ],
    "explanation": "L'hyaluronane est un GAG non sulfaté très hydrophile de la matrice extracellulaire."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle osamine N-acétylée entre dans la chondroïtine sulfate ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "N-acétylgalactosamine",
        "GalNAc",
        "N-acetylgalactosamine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La chondroïtine sulfate associe glucuronate et GalNAc sulfatée dans un GAG de matrice."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de les hyaluronidases, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Elles transforment l'hyaluronane en cellulose.",
        "correct": false,
        "explanation": "Elles le fragmentent."
      },
      {
        "content": "Les hyaluronidases synthétisent exclusivement du glycogène.",
        "correct": false,
        "explanation": "Elles agissent sur l'hyaluronane."
      },
      {
        "content": "La fécondation ne met en jeu aucune interaction avec la matrice extracellulaire ovocytaire.",
        "correct": false,
        "explanation": "Le cumulus riche en hyaluronane est traversé."
      },
      {
        "content": "La dégradation de l'hyaluronane réduit localement son organisation matricielle.",
        "correct": true,
        "explanation": "La chaîne polymérique est fragmentée."
      },
      {
        "content": "Une hyaluronidase est un GAG.",
        "correct": false,
        "explanation": "C'est une enzyme protéique."
      }
    ],
    "explanation": "Les hyaluronidases clivent l'hyaluronane et participent à plusieurs processus de remodelage matriciel."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la cellulose, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Ses glucoses sont reliés en bêta(1→4).",
        "correct": true,
        "explanation": "Cette liaison donne des chaînes étendues."
      },
      {
        "content": "Elle ne possède aucun groupe hydroxyle.",
        "correct": false,
        "explanation": "Chaque résidu en porte plusieurs."
      },
      {
        "content": "La cellulose est hydrophile mais insoluble dans l'eau.",
        "correct": true,
        "explanation": "Les OH interagissent avec l'eau mais le réseau interchaînes limite la dissolution."
      },
      {
        "content": "Les chaînes s'associent par de nombreuses liaisons hydrogène.",
        "correct": true,
        "explanation": "Elles forment des microfibrilles résistantes."
      },
      {
        "content": "La cellulose est un glucane structural des végétaux.",
        "correct": true,
        "explanation": "Elle renforce les parois cellulaires."
      }
    ],
    "explanation": "La cellulose est un glucane linéaire bêta(1→4) structural des végétaux."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La cellobiose associe deux résidus de glucose.",
        "correct": true,
        "explanation": "C'est un diholoside."
      },
      {
        "content": "Les GAG sont dépourvus d'intérêt structural.",
        "correct": false,
        "explanation": "Ils sont majeurs dans la matrice extracellulaire."
      },
      {
        "content": "Tous les GAG sont neutres.",
        "correct": false,
        "explanation": "Beaucoup sont fortement anioniques."
      },
      {
        "content": "Ils participent à la matrice extracellulaire et aux surfaces cellulaires.",
        "correct": true,
        "explanation": "Leur localisation dépend du GAG."
      },
      {
        "content": "Elle diffère du maltose par l'anomérie de la liaison.",
        "correct": true,
        "explanation": "Le maltose est alpha(1→4)."
      },
      {
        "content": "Un GAG contient toujours uniquement du glucose non modifié.",
        "correct": false,
        "explanation": "Les motifs utilisent des dérivés variés."
      },
      {
        "content": "Beaucoup de GAG sont fortement chargés négativement.",
        "correct": true,
        "explanation": "Carboxylates et sulfates y contribuent."
      },
      {
        "content": "Ils sont très hydrophiles.",
        "correct": true,
        "explanation": "Leur charge attire les ions et l'eau."
      },
      {
        "content": "La cellobiose est identique au lactose.",
        "correct": false,
        "explanation": "Le lactose contient du galactose."
      },
      {
        "content": "Sa liaison est alpha(1→4).",
        "correct": false,
        "explanation": "Cela décrit le maltose."
      }
    ],
    "explanation": "Cellobiose et maltose diffèrent par bêta(1→4) versus alpha(1→4). Les GAG sont des polysaccharides anioniques hydrophiles à motifs répétés."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la non-digestibilité humaine de la cellulose, quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "Ses glucoses sont reliés en bêta(1→4).",
        "correct": true,
        "explanation": "Cette liaison donne des chaînes étendues."
      },
      {
        "content": "La cellulose est la réserve glucidique principale du foie humain.",
        "correct": false,
        "explanation": "Le foie stocke du glycogène."
      },
      {
        "content": "La cellulose est un glucane structural des végétaux.",
        "correct": true,
        "explanation": "Elle renforce les parois cellulaires."
      },
      {
        "content": "Les chaînes s'associent par de nombreuses liaisons hydrogène.",
        "correct": true,
        "explanation": "Elles forment des microfibrilles résistantes."
      },
      {
        "content": "La cellulose est hydrophile mais insoluble dans l'eau.",
        "correct": true,
        "explanation": "Les OH interagissent avec l'eau mais le réseau interchaînes limite la dissolution."
      }
    ],
    "explanation": "La cellulose est un glucane linéaire bêta(1→4) structural des végétaux."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Citez un polysaccharide végétal classiquement considéré comme fibre alimentaire.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cellulose",
        "hémicellulose",
        "pectine",
        "cellulose ou hémicellulose ou pectine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les fibres alimentaires comprennent plusieurs polysaccharides végétaux non digérés par les enzymes humaines."
  }
];
