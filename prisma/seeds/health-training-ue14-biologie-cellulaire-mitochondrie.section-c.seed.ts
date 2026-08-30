import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch7 — Mitochondrie — ATP synthase, inhibiteurs et rendement énergétique — V2 active */
export const SECTION_C_QUESTIONS: SeedQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions sont correctes concernant la chaîne respiratoire mitochondriale ?",
    "choices": [
      {
        "content": "Les complexes I, III et IV contribuent au pompage de protons.",
        "correct": true,
        "explanation": "Ils participent à l’établissement du gradient électrochimique."
      },
      {
        "content": "La réduction de l’oxygène en eau se produit au complexe IV.",
        "correct": true,
        "explanation": "Le cytochrome c oxydase catalyse cette étape terminale."
      },
      {
        "content": "La chaîne respiratoire est localisée dans la membrane externe.",
        "correct": false,
        "explanation": "Elle est localisée dans la membrane interne."
      },
      {
        "content": "L’oxydation du NADH et du FADH2 permet de convertir une partie de l’énergie redox en force proton-motrice.",
        "correct": true,
        "explanation": "Le pompage de H+ couple transfert d’électrons et stockage d’énergie électrochimique."
      },
      {
        "content": "Le complexe IV produit directement de l’ATP.",
        "correct": false,
        "explanation": "Il transfère les électrons à l’O2 et pompe des protons ; l’ATP est synthétisé par l’ATP synthase."
      }
    ],
    "explanation": "Les complexes I à IV transfèrent les électrons vers l’oxygène ; I, III et IV pompent des protons, tandis que l’ubiquinone et le cytochrome c assurent des transferts mobiles."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle proposition est scientifiquement correcte concernant la force proton-motrice et l’ATP synthase ?",
    "choices": [
      {
        "content": "Un découplant peut augmenter la consommation d’oxygène tout en diminuant le rendement de synthèse d’ATP.",
        "correct": true,
        "explanation": "Il dissipe la force proton-motrice sous forme de chaleur."
      },
      {
        "content": "Le domaine F1 traverse la membrane interne et constitue le principal canal à protons.",
        "correct": false,
        "explanation": "F1 porte les sites catalytiques du côté matriciel ; le canal transmembranaire est F0."
      },
      {
        "content": "La force proton-motrice correspond uniquement à une différence de concentration en ATP.",
        "correct": false,
        "explanation": "Elle associe un potentiel électrique et un gradient de protons."
      },
      {
        "content": "L’ATP synthase pompe normalement les protons de la matrice vers l’espace intermembranaire pendant la synthèse d’ATP.",
        "correct": false,
        "explanation": "Pendant la synthèse, le flux de protons est dans le sens espace intermembranaire vers matrice."
      },
      {
        "content": "L’ATP synthase produit de l’ATP directement à partir de NADH.",
        "correct": false,
        "explanation": "Elle utilise ADP + Pi et l’énergie de la force proton-motrice."
      }
    ],
    "explanation": "La chaîne respiratoire établit une force proton-motrice utilisée par l’ATP synthase F0F1 pour phosphoryler l’ADP dans la matrice."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel est l’accepteur final des électrons de la chaîne respiratoire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "oxygène",
        "O2",
        "dioxygène",
        "oxygène moléculaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’O2 est réduit en eau par le complexe IV."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant les navettes et transporteurs mitochondriaux, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La navette glycérol-3-phosphate transfère des électrons vers l’ubiquinone en contournant le complexe I.",
        "correct": true,
        "explanation": "La glycérol-3-phosphate déshydrogénase mitochondriale utilise FAD et réduit la coenzyme Q."
      },
      {
        "content": "Le NAD+ et le NADH cytosoliques diffusent librement à travers la membrane interne.",
        "correct": false,
        "explanation": "La membrane interne est imperméable à ces coenzymes ; les navettes transfèrent les équivalents réducteurs."
      },
      {
        "content": "La navette malate-aspartate peut transférer les équivalents réducteurs du NADH cytosolique vers du NADH matriciel.",
        "correct": true,
        "explanation": "Les électrons peuvent ensuite entrer dans la chaîne au complexe I."
      },
      {
        "content": "Le transporteur ADP/ATP échange l’ADP cytosolique contre l’ATP matriciel à travers la membrane interne.",
        "correct": true,
        "explanation": "L’ANT assure cet antiport essentiel."
      },
      {
        "content": "Le NADH cytosolique ne traverse pas librement la membrane interne mitochondriale.",
        "correct": true,
        "explanation": "Ses équivalents réducteurs sont transférés par des navettes."
      }
    ],
    "explanation": "La membrane interne impose des échanges sélectifs : navettes redox et transporteurs permettent le couplage entre métabolisme cytosolique et mitochondrial."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant les membranes, crêtes et compartiments mitochondriaux, sélectionnez exactement les deux propositions exactes.",
    "choices": [
      {
        "content": "La glycolyse se déroule dans la matrice mitochondriale.",
        "correct": false,
        "explanation": "La glycolyse est cytosolique ; le pyruvate formé peut ensuite entrer dans la mitochondrie."
      },
      {
        "content": "L’espace intermembranaire se situe entre les membranes externe et interne.",
        "correct": true,
        "explanation": "Il reçoit notamment les protons pompés par la chaîne respiratoire."
      },
      {
        "content": "La membrane externe est aussi imperméable aux petits métabolites que la membrane interne.",
        "correct": false,
        "explanation": "La membrane externe est relativement perméable aux petites molécules grâce aux VDAC, contrairement à la membrane interne."
      },
      {
        "content": "La matrice contient les enzymes du cycle de Krebs.",
        "correct": true,
        "explanation": "La plupart des enzymes du cycle de l’acide citrique sont matricielles ; la succinate déshydrogénase est intégrée à la membrane interne."
      },
      {
        "content": "La membrane interne est librement perméable aux protons.",
        "correct": false,
        "explanation": "Sa faible perméabilité aux H+ est indispensable au maintien de la force proton-motrice."
      }
    ],
    "explanation": "La membrane externe est relativement perméable aux petits métabolites, tandis que la membrane interne, riche en protéines et organisée en crêtes, maintient la force proton-motrice.",
    "requiredSelectionCount": 2
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la chaîne respiratoire mitochondriale, sélectionnez les affirmations exactes.",
    "choices": [
      {
        "content": "Les électrons se déplacent spontanément de l’oxygène vers le NADH au cours de la respiration.",
        "correct": false,
        "explanation": "Le flux physiologique va des donneurs réduits vers l’O2."
      },
      {
        "content": "Le complexe II pompe des protons de la matrice vers l’espace intermembranaire.",
        "correct": false,
        "explanation": "Contrairement aux complexes I, III et IV, le complexe II ne pompe pas de protons."
      },
      {
        "content": "Le cytochrome c transfère des électrons du complexe III au complexe IV.",
        "correct": true,
        "explanation": "C’est un transporteur périphérique de l’espace intermembranaire."
      },
      {
        "content": "L’ubiquinone transporte des électrons dans la membrane interne entre les complexes I/II et III.",
        "correct": true,
        "explanation": "La coenzyme Q est un transporteur liposoluble mobile."
      },
      {
        "content": "Le complexe IV produit directement de l’ATP.",
        "correct": false,
        "explanation": "Il transfère les électrons à l’O2 et pompe des protons ; l’ATP est synthétisé par l’ATP synthase."
      }
    ],
    "explanation": "Les complexes I à IV transfèrent les électrons vers l’oxygène ; I, III et IV pompent des protons, tandis que l’ubiquinone et le cytochrome c assurent des transferts mobiles."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de la force proton-motrice et l’ATP synthase, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "La phosphorylation oxydative se déroule dans le cytosol.",
        "correct": false,
        "explanation": "Elle dépend de la membrane interne mitochondriale."
      },
      {
        "content": "Le domaine F0 forme la voie transmembranaire des protons.",
        "correct": true,
        "explanation": "F0 est inséré dans la membrane interne."
      },
      {
        "content": "Le gradient protonique est créé parce que les complexes respiratoires synthétisent de nouveaux protons.",
        "correct": false,
        "explanation": "Ils déplacent des protons préexistants de la matrice vers l’espace intermembranaire."
      },
      {
        "content": "La force proton-motrice correspond uniquement à une différence de concentration en ATP.",
        "correct": false,
        "explanation": "Elle associe un potentiel électrique et un gradient de protons."
      },
      {
        "content": "L’ATP synthase pompe normalement les protons de la matrice vers l’espace intermembranaire pendant la synthèse d’ATP.",
        "correct": false,
        "explanation": "Pendant la synthèse, le flux de protons est dans le sens espace intermembranaire vers matrice."
      }
    ],
    "explanation": "La chaîne respiratoire établit une force proton-motrice utilisée par l’ATP synthase F0F1 pour phosphoryler l’ADP dans la matrice."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel transporteur mobile transfère les électrons des complexes I et II vers le complexe III ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "ubiquinone",
        "coenzyme Q",
        "CoQ",
        "Q"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’ubiquinone est un transporteur liposoluble de la membrane interne."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRPL",
    "question": "Cinq propositions sont exactes à propos des navettes et transporteurs mitochondriaux. Sélectionnez-les.",
    "choices": [
      {
        "content": "Les transporteurs de la membrane interne contribuent au couplage entre métabolisme cytosolique et mitochondrial.",
        "correct": true,
        "explanation": "Ils assurent des échanges sélectifs de métabolites et de nucléotides."
      },
      {
        "content": "Le pyruvate traverse la membrane interne uniquement par diffusion simple.",
        "correct": false,
        "explanation": "Un transporteur mitochondrial du pyruvate intervient."
      },
      {
        "content": "Le NAD+ et le NADH cytosoliques diffusent librement à travers la membrane interne.",
        "correct": false,
        "explanation": "La membrane interne est imperméable à ces coenzymes ; les navettes transfèrent les équivalents réducteurs."
      },
      {
        "content": "Les acides gras à longue chaîne utilisent notamment la navette carnitine pour accéder à la β-oxydation mitochondriale.",
        "correct": true,
        "explanation": "La carnitine permet le transfert des groupements acyles à travers la membrane interne."
      },
      {
        "content": "Le phosphate inorganique doit aussi être importé dans la matrice pour former de l’ATP.",
        "correct": true,
        "explanation": "Un transporteur de phosphate contribue à fournir Pi à l’ATP synthase."
      },
      {
        "content": "La navette malate-aspartate peut transférer les équivalents réducteurs du NADH cytosolique vers du NADH matriciel.",
        "correct": true,
        "explanation": "Les électrons peuvent ensuite entrer dans la chaîne au complexe I."
      },
      {
        "content": "La navette glycérol-3-phosphate injecte directement des électrons dans le complexe II.",
        "correct": false,
        "explanation": "Elle réduit l’ubiquinone via une déshydrogénase distincte du complexe II."
      },
      {
        "content": "L’ATP synthétisé dans la matrice reste définitivement dans la mitochondrie.",
        "correct": false,
        "explanation": "Il est exporté vers le cytosol via l’ANT."
      },
      {
        "content": "La navette malate-aspartate impose un rendement identique à celui de la navette glycérol-3-phosphate.",
        "correct": false,
        "explanation": "Le point d’entrée différent dans la chaîne peut modifier le rendement en ATP."
      },
      {
        "content": "La navette glycérol-3-phosphate transfère des électrons vers l’ubiquinone en contournant le complexe I.",
        "correct": true,
        "explanation": "La glycérol-3-phosphate déshydrogénase mitochondriale utilise FAD et réduit la coenzyme Q."
      }
    ],
    "explanation": "La membrane interne impose des échanges sélectifs : navettes redox et transporteurs permettent le couplage entre métabolisme cytosolique et mitochondrial.",
    "requiredSelectionCount": 5
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Sur le thème des membranes, crêtes et compartiments mitochondriaux, quelles affirmations sont exactes ?",
    "choices": [
      {
        "content": "La cardiolipine est un phospholipide caractéristique particulièrement abondant dans la membrane interne.",
        "correct": true,
        "explanation": "La cardiolipine contribue à l’organisation et au fonctionnement de protéines de la membrane interne."
      },
      {
        "content": "La membrane interne porte l’ATP synthase.",
        "correct": true,
        "explanation": "Le complexe F0F1 utilise la force proton-motrice pour synthétiser l’ATP."
      },
      {
        "content": "Les crêtes sont des replis de la membrane externe.",
        "correct": false,
        "explanation": "Les crêtes sont des replis de la membrane interne."
      },
      {
        "content": "Les complexes respiratoires sont principalement localisés dans la membrane interne.",
        "correct": true,
        "explanation": "Les complexes I à IV et l’ATP synthase sont associés à la membrane interne."
      },
      {
        "content": "Le cholestérol est absent de toute membrane mitochondriale.",
        "correct": false,
        "explanation": "Il est peu abondant par rapport à la membrane plasmique mais il peut être présent et sert notamment de substrat à la stéroïdogenèse."
      }
    ],
    "explanation": "La membrane externe est relativement perméable aux petits métabolites, tandis que la membrane interne, riche en protéines et organisée en crêtes, maintient la force proton-motrice."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi ces propositions relatives à la force proton-motrice et l’ATP synthase, lesquelles sont justes ?",
    "choices": [
      {
        "content": "Le domaine F1 traverse la membrane interne et constitue le principal canal à protons.",
        "correct": false,
        "explanation": "F1 porte les sites catalytiques du côté matriciel ; le canal transmembranaire est F0."
      },
      {
        "content": "Le domaine F1 porte les sites catalytiques de synthèse d’ATP.",
        "correct": true,
        "explanation": "F1 fait saillie du côté matriciel."
      },
      {
        "content": "L’oligomycine bloque le canal F0 de l’ATP synthase.",
        "correct": true,
        "explanation": "Elle empêche le retour des protons et inhibe la synthèse d’ATP."
      },
      {
        "content": "Le domaine F0 forme la voie transmembranaire des protons.",
        "correct": true,
        "explanation": "F0 est inséré dans la membrane interne."
      },
      {
        "content": "La phosphorylation oxydative nécessite un gradient de protons intact.",
        "correct": true,
        "explanation": "La dissipation du gradient découple la respiration de la synthèse d’ATP."
      }
    ],
    "explanation": "La chaîne respiratoire établit une force proton-motrice utilisée par l’ATP synthase F0F1 pour phosphoryler l’ADP dans la matrice."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans quel sens les protons traversent-ils normalement l’ATP synthase pendant la synthèse d’ATP ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "espace intermembranaire vers matrice",
        "de l’espace intermembranaire vers la matrice",
        "IM vers matrice",
        "intermembranaire vers matrice"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le retour des H+ vers la matrice fournit l’énergie à l’ATP synthase."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est juste à propos de la chaîne respiratoire mitochondriale ?",
    "choices": [
      {
        "content": "Le complexe IV produit directement de l’ATP.",
        "correct": false,
        "explanation": "Il transfère les électrons à l’O2 et pompe des protons ; l’ATP est synthétisé par l’ATP synthase."
      },
      {
        "content": "La chaîne respiratoire est localisée dans la membrane externe.",
        "correct": false,
        "explanation": "Elle est localisée dans la membrane interne."
      },
      {
        "content": "Les complexes I, III et IV contribuent au pompage de protons.",
        "correct": true,
        "explanation": "Ils participent à l’établissement du gradient électrochimique."
      },
      {
        "content": "Les électrons se déplacent spontanément de l’oxygène vers le NADH au cours de la respiration.",
        "correct": false,
        "explanation": "Le flux physiologique va des donneurs réduits vers l’O2."
      },
      {
        "content": "Le complexe II pompe des protons de la matrice vers l’espace intermembranaire.",
        "correct": false,
        "explanation": "Contrairement aux complexes I, III et IV, le complexe II ne pompe pas de protons."
      }
    ],
    "explanation": "Les complexes I à IV transfèrent les électrons vers l’oxygène ; I, III et IV pompent des protons, tandis que l’ubiquinone et le cytochrome c assurent des transferts mobiles."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des navettes et transporteurs mitochondriaux, sélectionnez les affirmations exactes.",
    "choices": [
      {
        "content": "L’ATP synthétisé dans la matrice reste définitivement dans la mitochondrie.",
        "correct": false,
        "explanation": "Il est exporté vers le cytosol via l’ANT."
      },
      {
        "content": "La navette glycérol-3-phosphate transfère des électrons vers l’ubiquinone en contournant le complexe I.",
        "correct": true,
        "explanation": "La glycérol-3-phosphate déshydrogénase mitochondriale utilise FAD et réduit la coenzyme Q."
      },
      {
        "content": "Le pyruvate traverse la membrane interne uniquement par diffusion simple.",
        "correct": false,
        "explanation": "Un transporteur mitochondrial du pyruvate intervient."
      },
      {
        "content": "La navette malate-aspartate peut transférer les équivalents réducteurs du NADH cytosolique vers du NADH matriciel.",
        "correct": true,
        "explanation": "Les électrons peuvent ensuite entrer dans la chaîne au complexe I."
      },
      {
        "content": "La navette malate-aspartate impose un rendement identique à celui de la navette glycérol-3-phosphate.",
        "correct": false,
        "explanation": "Le point d’entrée différent dans la chaîne peut modifier le rendement en ATP."
      }
    ],
    "explanation": "La membrane interne impose des échanges sélectifs : navettes redox et transporteurs permettent le couplage entre métabolisme cytosolique et mitochondrial."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel domaine de l’ATP synthase forme le canal transmembranaire à protons ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "F0",
        "F₀",
        "fo",
        "domaine F0"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "F0 est inséré dans la membrane interne et constitue la voie de passage des protons."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux affirmations exactes concernant l’organisation des membranes et compartiments mitochondriaux.",
    "choices": [
      {
        "content": "La membrane externe est aussi imperméable aux petits métabolites que la membrane interne.",
        "correct": false,
        "explanation": "La membrane externe est relativement perméable aux petites molécules grâce aux VDAC, contrairement à la membrane interne."
      },
      {
        "content": "Les crêtes sont des replis de la membrane externe.",
        "correct": false,
        "explanation": "Les crêtes sont des replis de la membrane interne."
      },
      {
        "content": "L’espace intermembranaire se situe entre les membranes externe et interne.",
        "correct": true,
        "explanation": "Il reçoit notamment les protons pompés par la chaîne respiratoire."
      },
      {
        "content": "La matrice contient les enzymes du cycle de Krebs.",
        "correct": true,
        "explanation": "La plupart des enzymes du cycle de l’acide citrique sont matricielles ; la succinate déshydrogénase est intégrée à la membrane interne."
      },
      {
        "content": "La membrane interne est librement perméable aux protons.",
        "correct": false,
        "explanation": "Sa faible perméabilité aux H+ est indispensable au maintien de la force proton-motrice."
      }
    ],
    "explanation": "La membrane externe est relativement perméable aux petits métabolites, tandis que la membrane interne, riche en protéines et organisée en crêtes, maintient la force proton-motrice.",
    "requiredSelectionCount": 2
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont correctes concernant la force proton-motrice et l’ATP synthase ?",
    "choices": [
      {
        "content": "Un découplant peut augmenter la consommation d’oxygène tout en diminuant le rendement de synthèse d’ATP.",
        "correct": true,
        "explanation": "Il dissipe la force proton-motrice sous forme de chaleur."
      },
      {
        "content": "L’ATP synthase pompe normalement les protons de la matrice vers l’espace intermembranaire pendant la synthèse d’ATP.",
        "correct": false,
        "explanation": "Pendant la synthèse, le flux de protons est dans le sens espace intermembranaire vers matrice."
      },
      {
        "content": "L’ATP synthase produit de l’ATP directement à partir de NADH.",
        "correct": false,
        "explanation": "Elle utilise ADP + Pi et l’énergie de la force proton-motrice."
      },
      {
        "content": "En conditions particulières, l’ATP synthase peut fonctionner en sens inverse et hydrolyser l’ATP.",
        "correct": true,
        "explanation": "Le fonctionnement réversible peut contribuer au maintien du gradient lorsque la respiration est insuffisante."
      },
      {
        "content": "La force proton-motrice comporte une composante électrique et une composante chimique.",
        "correct": true,
        "explanation": "Elle résulte du potentiel de membrane et du gradient de pH."
      }
    ],
    "explanation": "La chaîne respiratoire établit une force proton-motrice utilisée par l’ATP synthase F0F1 pour phosphoryler l’ADP dans la matrice."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition est scientifiquement correcte concernant la chaîne respiratoire mitochondriale ?",
    "choices": [
      {
        "content": "Les électrons se déplacent spontanément de l’oxygène vers le NADH au cours de la respiration.",
        "correct": false,
        "explanation": "Le flux physiologique va des donneurs réduits vers l’O2."
      },
      {
        "content": "Le complexe II pompe des protons de la matrice vers l’espace intermembranaire.",
        "correct": false,
        "explanation": "Contrairement aux complexes I, III et IV, le complexe II ne pompe pas de protons."
      },
      {
        "content": "Le complexe IV produit directement de l’ATP.",
        "correct": false,
        "explanation": "Il transfère les électrons à l’O2 et pompe des protons ; l’ATP est synthétisé par l’ATP synthase."
      },
      {
        "content": "L’oxygène est l’accepteur final des électrons au complexe IV.",
        "correct": true,
        "explanation": "Il est réduit en eau."
      },
      {
        "content": "La chaîne respiratoire est localisée dans la membrane externe.",
        "correct": false,
        "explanation": "Elle est localisée dans la membrane interne."
      }
    ],
    "explanation": "Les complexes I à IV transfèrent les électrons vers l’oxygène ; I, III et IV pompent des protons, tandis que l’ubiquinone et le cytochrome c assurent des transferts mobiles."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels énoncés décrivent correctement les navettes redox et les transporteurs de la membrane interne mitochondriale ?",
    "choices": [
      {
        "content": "Les acides gras à longue chaîne utilisent notamment la navette carnitine pour accéder à la β-oxydation mitochondriale.",
        "correct": true,
        "explanation": "La carnitine permet le transfert des groupements acyles à travers la membrane interne."
      },
      {
        "content": "Le phosphate inorganique doit aussi être importé dans la matrice pour former de l’ATP.",
        "correct": true,
        "explanation": "Un transporteur de phosphate contribue à fournir Pi à l’ATP synthase."
      },
      {
        "content": "Le transporteur ADP/ATP échange l’ADP cytosolique contre l’ATP matriciel à travers la membrane interne.",
        "correct": true,
        "explanation": "L’ANT assure cet antiport essentiel."
      },
      {
        "content": "Les transporteurs de la membrane interne contribuent au couplage entre métabolisme cytosolique et mitochondrial.",
        "correct": true,
        "explanation": "Ils assurent des échanges sélectifs de métabolites et de nucléotides."
      },
      {
        "content": "Le NAD+ et le NADH cytosoliques diffusent librement à travers la membrane interne.",
        "correct": false,
        "explanation": "La membrane interne est imperméable à ces coenzymes ; les navettes transfèrent les équivalents réducteurs."
      }
    ],
    "explanation": "La membrane interne impose des échanges sélectifs : navettes redox et transporteurs permettent le couplage entre métabolisme cytosolique et mitochondrial."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel antiporteur échange l’ADP cytosolique contre l’ATP matriciel ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "ANT",
        "translocase ADP ATP",
        "adénine nucléotide translocase",
        "adenine nucleotide translocase"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’ANT échange ADP et ATP à travers la membrane interne."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est juste à propos des membranes, crêtes et compartiments mitochondriaux ?",
    "choices": [
      {
        "content": "La glycolyse se déroule dans la matrice mitochondriale.",
        "correct": false,
        "explanation": "La glycolyse est cytosolique ; le pyruvate formé peut ensuite entrer dans la mitochondrie."
      },
      {
        "content": "Le cholestérol est absent de toute membrane mitochondriale.",
        "correct": false,
        "explanation": "Il est peu abondant par rapport à la membrane plasmique mais il peut être présent et sert notamment de substrat à la stéroïdogenèse."
      },
      {
        "content": "Les crêtes sont des replis de la membrane externe.",
        "correct": false,
        "explanation": "Les crêtes sont des replis de la membrane interne."
      },
      {
        "content": "La membrane externe est aussi imperméable aux petits métabolites que la membrane interne.",
        "correct": false,
        "explanation": "La membrane externe est relativement perméable aux petites molécules grâce aux VDAC, contrairement à la membrane interne."
      },
      {
        "content": "Les complexes respiratoires sont principalement localisés dans la membrane interne.",
        "correct": true,
        "explanation": "Les complexes I à IV et l’ATP synthase sont associés à la membrane interne."
      }
    ],
    "explanation": "La membrane externe est relativement perméable aux petits métabolites, tandis que la membrane interne, riche en protéines et organisée en crêtes, maintient la force proton-motrice."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle navette fait entrer les électrons du NADH cytosolique au niveau de l’ubiquinone en contournant le complexe I ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "navette glycérol-3-phosphate",
        "glycérol-3-phosphate",
        "glycerol-3-phosphate",
        "navette glycérol phosphate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La navette glycérol-3-phosphate réduit l’ubiquinone via une déshydrogénase FAD-dépendante."
  }
];

export const SECTION_C_QUIZZES: SeedQuiz[] = [
  {
    "order": 5,
    "slug": "mitochondrie-5",
    "title": "ATP synthase et gradient protonique",
    "description": "Découvrir : atp synthase et gradient protonique.",
    "stage": "DISCOVER",
    "sectionOrder": 3,
    "questionOrders": [
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54
    ]
  },
  {
    "order": 6,
    "slug": "mitochondrie-6",
    "title": "Rendement et inhibiteurs",
    "description": "Approfondir : rendement et inhibiteurs.",
    "stage": "PRACTICE",
    "sectionOrder": 3,
    "questionOrders": [
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66
    ]
  }
];
