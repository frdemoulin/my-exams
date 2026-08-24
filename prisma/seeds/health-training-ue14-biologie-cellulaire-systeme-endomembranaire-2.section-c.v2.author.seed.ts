import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch5 — Section C — Lysosomes et voies de dégradation */
export const UE14_BIOCELL_CH5_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les lysosomes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les protéines LAMP sont abondantes dans la membrane lysosomale.",
        "correct": true,
        "explanation": "Elles contribuent à la stabilité et à l'organisation de la membrane."
      },
      {
        "content": "La V-ATPase lysosomale utilise l'ATP pour pomper des protons vers la lumière.",
        "correct": true,
        "explanation": "Elle contribue au maintien de l'acidité."
      },
      {
        "content": "Les hydrolases lysosomales dégradent protéines, lipides, glucides et acides nucléiques.",
        "correct": true,
        "explanation": "Leurs activités sont optimales en milieu acide."
      },
      {
        "content": "La V-ATPase exporte des protons hors du lysosome pour alcaliniser sa lumière.",
        "correct": false,
        "explanation": "Elle pompe les protons vers la lumière."
      },
      {
        "content": "Les lysosomes ne contiennent aucune protéase.",
        "correct": false,
        "explanation": "Ils contiennent plusieurs classes d'hydrolases acides."
      }
    ],
    "explanation": "Les lysosomes maintiennent un pH acide grâce à une V-ATPase et concentrent des hydrolases adaptées à ce milieu."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les principales voies apportant du matériel aux lysosomes ?",
    "choices": [
      {
        "content": "La phagocytose est une forme de sécrétion.",
        "correct": false,
        "explanation": "C'est une voie d'internalisation."
      },
      {
        "content": "Tous les cargos lysosomaux proviennent uniquement de l'endocytose.",
        "correct": false,
        "explanation": "Autophagie et phagocytose fournissent aussi des substrats."
      },
      {
        "content": "La chaperone-mediated autophagy repose sur des peptides partiellement dégradés par le protéasome puis importés en vrac.",
        "correct": false,
        "explanation": "Elle reconnaît des protéines cytosoliques porteuses d'un motif de type KFERQ."
      },
      {
        "content": "La macroautophagie dégrade les organites directement dans le cytosol sans membrane d'isolement.",
        "correct": false,
        "explanation": "Elle forme des autophagosomes."
      },
      {
        "content": "La phagocytose apporte de grosses particules et microorganismes aux compartiments lysosomaux.",
        "correct": true,
        "explanation": "Le phagosome mature puis fusionne avec des compartiments endolysosomaux."
      }
    ],
    "explanation": "Les lysosomes reçoivent des cargos par endocytose, phagocytose, macroautophagie et certaines voies sélectives comme la CMA."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel motif consensus est associé à de nombreux substrats de chaperone-mediated autophagy ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "KFERQ",
        "motif KFERQ",
        "KFERQ-like"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La CMA cible sélectivement des protéines cytosoliques via Hsc70, un motif de type KFERQ et LAMP2A."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la mucolipidose II et le défaut de ciblage lysosomal, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "De nombreuses hydrolases lysosomales sont sécrétées au lieu d'être correctement adressées.",
        "correct": true,
        "explanation": "Le lysosome manque simultanément de plusieurs enzymes."
      },
      {
        "content": "La maladie touche le système de tri plutôt qu'une seule hydrolase.",
        "correct": true,
        "explanation": "Elle se distingue donc de nombreuses maladies de surcharge monogéniques enzymatiques."
      },
      {
        "content": "La mucolipidose II est due à l'absence spécifique de glucocérébrosidase uniquement.",
        "correct": false,
        "explanation": "Cela correspond à la maladie de Gaucher."
      },
      {
        "content": "La mucolipidose II résulte d'un défaut de GlcNAc-1-phosphotransférase.",
        "correct": true,
        "explanation": "La formation du marqueur M6P de nombreuses hydrolases est alors déficiente."
      },
      {
        "content": "GNPTAB est un gène majeur impliqué dans la phosphotransférase responsable du marquage M6P.",
        "correct": true,
        "explanation": "Des mutations bialléliques peuvent provoquer la mucolipidose II alpha/beta."
      }
    ],
    "explanation": "La mucolipidose II illustre un défaut global de marquage M6P, provoquant une mauvaise livraison de nombreuses hydrolases lysosomales."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur la maladie de Gaucher, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Le type 1 est classiquement non neuronopathique.",
        "correct": true,
        "explanation": "Les types 2 et 3 comportent une atteinte neurologique d'intensité variable."
      },
      {
        "content": "La maladie de Gaucher est due à un déficit en glucocérébrosidase acide.",
        "correct": true,
        "explanation": "Cette enzyme lysosomale hydrolyse le glucosylcéramide."
      },
      {
        "content": "La maladie de Gaucher est une affection exclusivement mitochondriale.",
        "correct": false,
        "explanation": "C'est une maladie lysosomale."
      },
      {
        "content": "La maladie est due à un défaut de récepteur LDL.",
        "correct": false,
        "explanation": "Elle implique la glucocérébrosidase."
      },
      {
        "content": "Toutes les formes de Gaucher provoquent obligatoirement des troubles neurologiques sévères précoces.",
        "correct": false,
        "explanation": "Le type 1 est non neuronopathique."
      }
    ],
    "explanation": "La maladie de Gaucher est une sphingolipidose due au déficit de glucocérébrosidase ; l'atteinte neurologique dépend du type clinique.",
    "requiredSelectionCount": 2
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la cystinose, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "La cystinose est une maladie exclusivement du cytosquelette.",
        "correct": false,
        "explanation": "Elle est lysosomale."
      },
      {
        "content": "La cystine s'accumule parce qu'elle n'est jamais produite dans le lysosome.",
        "correct": false,
        "explanation": "Le problème principal est son export."
      },
      {
        "content": "La cystinose illustre une maladie de surcharge liée à un transporteur membranaire plutôt qu'à une hydrolase.",
        "correct": true,
        "explanation": "Le substrat peut être hydrolysé mais ne quitte pas correctement le lysosome."
      },
      {
        "content": "Le transporteur concerné est la cystinosine, codée par CTNS.",
        "correct": true,
        "explanation": "Il permet normalement la sortie de cystine hors du lysosome."
      },
      {
        "content": "La cystinosine est une enzyme de N-glycosylation du Golgi.",
        "correct": false,
        "explanation": "C'est un transporteur lysosomal."
      }
    ],
    "explanation": "La cystinose est un exemple de maladie de surcharge liée au défaut d'export lysosomal de cystine par la cystinosine."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les matériaux difficilement dégradables dans les phagolysosomes ?",
    "choices": [
      {
        "content": "L'amiante n'a aucun lien avec le mésothéliome.",
        "correct": false,
        "explanation": "L'exposition augmente nettement le risque."
      },
      {
        "content": "Toute particule phagocytée est obligatoirement dégradée en quelques minutes.",
        "correct": false,
        "explanation": "Certaines persistent durablement."
      },
      {
        "content": "La goutte est classiquement une pneumoconiose due à l'inhalation de cristaux d'urate.",
        "correct": false,
        "explanation": "Elle résulte de dépôts de cristaux d'urate dans les articulations et tissus."
      },
      {
        "content": "Les lysosomes hydrolysent complètement la silice en glucose.",
        "correct": false,
        "explanation": "La silice minérale n'est pas un substrat d'hydrolases."
      },
      {
        "content": "Les cristaux d'urate peuvent activer une inflammation aiguë lors d'une crise de goutte.",
        "correct": true,
        "explanation": "Ils ne sont pas des particules inhalées responsables d'une pneumoconiose."
      }
    ],
    "explanation": "Les lysosomes ne peuvent dégrader certaines particules minérales ; leur persistance peut entretenir inflammation et lésions tissulaires."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle pompe maintient l'acidité du lysosome ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "V-ATPase",
        "ATPase vacuolaire",
        "pompe à protons V-ATPase"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les lysosomes maintiennent un pH acide grâce à une V-ATPase et concentrent des hydrolases adaptées à ce milieu."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le substrat principal accumulé est le glycogène.",
        "correct": false,
        "explanation": "Il s'agit surtout de glucosylcéramide."
      },
      {
        "content": "La maladie de Gaucher est une maladie de surcharge lysosomale.",
        "correct": true,
        "explanation": "Elle appartient au groupe des sphingolipidoses."
      },
      {
        "content": "La phagocytose est une forme de sécrétion.",
        "correct": false,
        "explanation": "C'est une voie d'internalisation."
      },
      {
        "content": "Toutes les formes de Gaucher provoquent obligatoirement des troubles neurologiques sévères précoces.",
        "correct": false,
        "explanation": "Le type 1 est non neuronopathique."
      },
      {
        "content": "L'endocytose apporte des molécules et membranes provenant de la surface cellulaire.",
        "correct": true,
        "explanation": "Les endosomes trient puis acheminent une partie du cargo vers la dégradation."
      },
      {
        "content": "La maladie de Gaucher est due à un déficit en glucocérébrosidase acide.",
        "correct": true,
        "explanation": "Cette enzyme lysosomale hydrolyse le glucosylcéramide."
      },
      {
        "content": "Le type 1 est classiquement non neuronopathique.",
        "correct": true,
        "explanation": "Les types 2 et 3 comportent une atteinte neurologique d'intensité variable."
      },
      {
        "content": "La macroautophagie dégrade les organites directement dans le cytosol sans membrane d'isolement.",
        "correct": false,
        "explanation": "Elle forme des autophagosomes."
      },
      {
        "content": "La maladie est due à un défaut de récepteur LDL.",
        "correct": false,
        "explanation": "Elle implique la glucocérébrosidase."
      },
      {
        "content": "La macroautophagie livre du cytoplasme et des organites dans des autophagosomes à double membrane.",
        "correct": true,
        "explanation": "Ceux-ci fusionnent ensuite avec des lysosomes."
      }
    ],
    "explanation": "Les lysosomes reçoivent des cargos par endocytose, phagocytose, macroautophagie et certaines voies sélectives comme la CMA. La maladie de Gaucher est une sphingolipidose due au déficit de glucocérébrosidase ; l'atteinte neurologique dépend du type clinique."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement la chaperone-mediated autophagy ?",
    "choices": [
      {
        "content": "Hsc70 cytosolique reconnaît des protéines porteuses d'un motif de type KFERQ.",
        "correct": true,
        "explanation": "Cette reconnaissance sélectionne les substrats de CMA."
      },
      {
        "content": "La CMA est sélective.",
        "correct": true,
        "explanation": "Elle se distingue de la capture en vrac de certaines formes de macroautophagie."
      },
      {
        "content": "La CMA importe des mitochondries entières à travers LAMP2A.",
        "correct": false,
        "explanation": "Elle concerne des protéines solubles individuelles."
      },
      {
        "content": "La CMA exige la formation d'un autophagosome à double membrane.",
        "correct": false,
        "explanation": "Elle transloque directement des protéines à travers la membrane lysosomale."
      },
      {
        "content": "Les protéines importées sont dépliées avant leur passage dans la lumière lysosomale.",
        "correct": true,
        "explanation": "La translocation ne concerne pas des organites entiers."
      }
    ],
    "explanation": "La CMA cible sélectivement des protéines cytosoliques via Hsc70, un motif de type KFERQ et LAMP2A."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les lysosomes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les lysosomes sont des compartiments acides riches en hydrolases.",
        "correct": true,
        "explanation": "Leur pH luminal est généralement proche de 4,5 à 5."
      },
      {
        "content": "La V-ATPase lysosomale utilise l'ATP pour pomper des protons vers la lumière.",
        "correct": true,
        "explanation": "Elle contribue au maintien de l'acidité."
      },
      {
        "content": "Les protéines LAMP sont abondantes dans la membrane lysosomale.",
        "correct": true,
        "explanation": "Elles contribuent à la stabilité et à l'organisation de la membrane."
      },
      {
        "content": "Les hydrolases lysosomales dégradent protéines, lipides, glucides et acides nucléiques.",
        "correct": true,
        "explanation": "Leurs activités sont optimales en milieu acide."
      },
      {
        "content": "Les lysosomes ne contiennent aucune protéase.",
        "correct": false,
        "explanation": "Ils contiennent plusieurs classes d'hydrolases acides."
      }
    ],
    "explanation": "Les lysosomes maintiennent un pH acide grâce à une V-ATPase et concentrent des hydrolases adaptées à ce milieu."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel récepteur lysosomal est central dans la chaperone-mediated autophagy ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "LAMP2A",
        "LAMP-2A"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les lysosomes reçoivent des cargos par endocytose, phagocytose, macroautophagie et certaines voies sélectives comme la CMA."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur la chaperone-mediated autophagy, laquelle est correcte ?",
    "choices": [
      {
        "content": "La CMA exige la formation d'un autophagosome à double membrane.",
        "correct": false,
        "explanation": "Elle transloque directement des protéines à travers la membrane lysosomale."
      },
      {
        "content": "LAMP2A est une protéine mitochondriale de la chaîne respiratoire.",
        "correct": false,
        "explanation": "C'est un récepteur lysosomal de CMA."
      },
      {
        "content": "Hsc70 cytosolique reconnaît des protéines porteuses d'un motif de type KFERQ.",
        "correct": true,
        "explanation": "Cette reconnaissance sélectionne les substrats de CMA."
      },
      {
        "content": "La CMA importe des mitochondries entières à travers LAMP2A.",
        "correct": false,
        "explanation": "Elle concerne des protéines solubles individuelles."
      },
      {
        "content": "Le motif KFERQ cible surtout les lipides vers le protéasome.",
        "correct": false,
        "explanation": "Il concerne des protéines reconnues par Hsc70."
      }
    ],
    "explanation": "La CMA cible sélectivement des protéines cytosoliques via Hsc70, un motif de type KFERQ et LAMP2A."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement la mucolipidose II et le défaut de ciblage lysosomal ?",
    "choices": [
      {
        "content": "Le M6P est formé dans le noyau.",
        "correct": false,
        "explanation": "Il est généré dans l'appareil de Golgi."
      },
      {
        "content": "La maladie touche le système de tri plutôt qu'une seule hydrolase.",
        "correct": true,
        "explanation": "Elle se distingue donc de nombreuses maladies de surcharge monogéniques enzymatiques."
      },
      {
        "content": "La mucolipidose II est due à l'absence spécifique de glucocérébrosidase uniquement.",
        "correct": false,
        "explanation": "Cela correspond à la maladie de Gaucher."
      },
      {
        "content": "GNPTAB est un gène majeur impliqué dans la phosphotransférase responsable du marquage M6P.",
        "correct": true,
        "explanation": "Des mutations bialléliques peuvent provoquer la mucolipidose II alpha/beta."
      },
      {
        "content": "La mucolipidose II est une anomalie de la tubuline.",
        "correct": false,
        "explanation": "Elle touche le ciblage des hydrolases lysosomales."
      }
    ],
    "explanation": "La mucolipidose II illustre un défaut global de marquage M6P, provoquant une mauvaise livraison de nombreuses hydrolases lysosomales."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Le type 1 de Gaucher est-il classiquement neuronopathique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non",
        "non, il est non neuronopathique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La maladie de Gaucher est une sphingolipidose due au déficit de glucocérébrosidase ; l'atteinte neurologique dépend du type clinique."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant la cystinose.",
    "choices": [
      {
        "content": "La cystinose est une maladie exclusivement du cytosquelette.",
        "correct": false,
        "explanation": "Elle est lysosomale."
      },
      {
        "content": "La cystinose illustre une maladie de surcharge liée à un transporteur membranaire plutôt qu'à une hydrolase.",
        "correct": true,
        "explanation": "Le substrat peut être hydrolysé mais ne quitte pas correctement le lysosome."
      },
      {
        "content": "La cystine s'accumule parce qu'elle n'est jamais produite dans le lysosome.",
        "correct": false,
        "explanation": "Le problème principal est son export."
      },
      {
        "content": "La cystinose est due à l'absence de M6P sur toutes les hydrolases.",
        "correct": false,
        "explanation": "Cela correspond à une anomalie de ciblage comme la mucolipidose II."
      },
      {
        "content": "Le transporteur concerné est la cystinosine, codée par CTNS.",
        "correct": true,
        "explanation": "Il permet normalement la sortie de cystine hors du lysosome."
      }
    ],
    "explanation": "La cystinose est un exemple de maladie de surcharge liée au défaut d'export lysosomal de cystine par la cystinosine.",
    "requiredSelectionCount": 2
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les matériaux difficilement dégradables dans les phagolysosomes ?",
    "choices": [
      {
        "content": "Certaines particules minérales inhalées peuvent persister dans les macrophages pulmonaires.",
        "correct": true,
        "explanation": "Cette persistance participe à des pneumoconioses."
      },
      {
        "content": "Les lysosomes hydrolysent complètement la silice en glucose.",
        "correct": false,
        "explanation": "La silice minérale n'est pas un substrat d'hydrolases."
      },
      {
        "content": "La goutte est classiquement une pneumoconiose due à l'inhalation de cristaux d'urate.",
        "correct": false,
        "explanation": "Elle résulte de dépôts de cristaux d'urate dans les articulations et tissus."
      },
      {
        "content": "Les cristaux d'urate peuvent activer une inflammation aiguë lors d'une crise de goutte.",
        "correct": true,
        "explanation": "Ils ne sont pas des particules inhalées responsables d'une pneumoconiose."
      },
      {
        "content": "La silice cristalline peut provoquer une silicose.",
        "correct": true,
        "explanation": "Elle déclenche inflammation et fibrose pulmonaires."
      }
    ],
    "explanation": "Les lysosomes ne peuvent dégrader certaines particules minérales ; leur persistance peut entretenir inflammation et lésions tissulaires."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur les lysosomes, laquelle est correcte ?",
    "choices": [
      {
        "content": "Les lysosomes ne contiennent aucune protéase.",
        "correct": false,
        "explanation": "Ils contiennent plusieurs classes d'hydrolases acides."
      },
      {
        "content": "La V-ATPase exporte des protons hors du lysosome pour alcaliniser sa lumière.",
        "correct": false,
        "explanation": "Elle pompe les protons vers la lumière."
      },
      {
        "content": "Les lysosomes ont un pH physiologique voisin de 7,4.",
        "correct": false,
        "explanation": "Ils sont nettement acides."
      },
      {
        "content": "Les hydrolases lysosomales dégradent protéines, lipides, glucides et acides nucléiques.",
        "correct": true,
        "explanation": "Leurs activités sont optimales en milieu acide."
      },
      {
        "content": "LAMP est une enzyme soluble du cycle de Krebs.",
        "correct": false,
        "explanation": "Il s'agit de protéines membranaires lysosomales."
      }
    ],
    "explanation": "Les lysosomes maintiennent un pH acide grâce à une V-ATPase et concentrent des hydrolases adaptées à ce milieu."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les principales voies apportant du matériel aux lysosomes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'endocytose apporte des molécules et membranes provenant de la surface cellulaire.",
        "correct": true,
        "explanation": "Les endosomes trient puis acheminent une partie du cargo vers la dégradation."
      },
      {
        "content": "La chaperone-mediated autophagy peut transloquer certaines protéines cytosoliques directement à travers la membrane lysosomale.",
        "correct": true,
        "explanation": "Elle implique notamment Hsc70 et LAMP2A."
      },
      {
        "content": "La macroautophagie livre du cytoplasme et des organites dans des autophagosomes à double membrane.",
        "correct": true,
        "explanation": "Ceux-ci fusionnent ensuite avec des lysosomes."
      },
      {
        "content": "La phagocytose apporte de grosses particules et microorganismes aux compartiments lysosomaux.",
        "correct": true,
        "explanation": "Le phagosome mature puis fusionne avec des compartiments endolysosomaux."
      },
      {
        "content": "Tous les cargos lysosomaux proviennent uniquement de l'endocytose.",
        "correct": false,
        "explanation": "Autophagie et phagocytose fournissent aussi des substrats."
      }
    ],
    "explanation": "Les lysosomes reçoivent des cargos par endocytose, phagocytose, macroautophagie et certaines voies sélectives comme la CMA."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel motif consensus est associé à de nombreux substrats de chaperone-mediated autophagy ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "KFERQ",
        "motif KFERQ",
        "KFERQ-like"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La CMA cible sélectivement des protéines cytosoliques via Hsc70, un motif de type KFERQ et LAMP2A."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement la mucolipidose II et le défaut de ciblage lysosomal ?",
    "choices": [
      {
        "content": "La mucolipidose II est une anomalie de la tubuline.",
        "correct": false,
        "explanation": "Elle touche le ciblage des hydrolases lysosomales."
      },
      {
        "content": "De nombreuses hydrolases lysosomales sont sécrétées au lieu d'être correctement adressées.",
        "correct": true,
        "explanation": "Le lysosome manque simultanément de plusieurs enzymes."
      },
      {
        "content": "Le M6P est formé dans le noyau.",
        "correct": false,
        "explanation": "Il est généré dans l'appareil de Golgi."
      },
      {
        "content": "La mucolipidose II est due à l'absence spécifique de glucocérébrosidase uniquement.",
        "correct": false,
        "explanation": "Cela correspond à la maladie de Gaucher."
      },
      {
        "content": "Le défaut augmente l'adressage de toutes les hydrolases vers les lysosomes.",
        "correct": false,
        "explanation": "Il le perturbe."
      }
    ],
    "explanation": "La mucolipidose II illustre un défaut global de marquage M6P, provoquant une mauvaise livraison de nombreuses hydrolases lysosomales."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans une autre application, le type 1 de Gaucher est-il classiquement neuronopathique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non",
        "non, il est non neuronopathique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La maladie de Gaucher est une sphingolipidose due au déficit de glucocérébrosidase ; l'atteinte neurologique dépend du type clinique."
  }
];
