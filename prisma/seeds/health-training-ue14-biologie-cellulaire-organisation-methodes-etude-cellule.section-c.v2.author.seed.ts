import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch1 — Types de cultures et modèles */
export const UE14_CELL_CH1_SECTION_C_V2: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Sur le thème « Culture d’explants », sélectionnez exactement 3 propositions exactes.",
    "choices": [
      {
        "content": "Un explant peut préserver localement des interactions cellule-cellule et cellule-matrice.",
        "correct": true,
        "explanation": "Exact. Un explant est un fragment de tissu maintenu en culture sans dissociation complète. Il conserve localement des relations entre cellules et matrice, ce qui peut être utile pour étudier des fonctions tissulaires, tout en restant un modèle ex vivo simplifié."
      },
      {
        "content": "Un explant nécessite obligatoirement la dissociation complète de toutes les cellules avant culture.",
        "correct": false,
        "explanation": "Incorrect. Un explant est un fragment de tissu maintenu en culture sans dissociation complète. Il conserve localement des relations entre cellules et matrice, ce qui peut être utile pour étudier des fonctions tissulaires, tout en restant un modèle ex vivo simplifié."
      },
      {
        "content": "Un explant est par définition une suspension de cellules isolées.",
        "correct": false,
        "explanation": "Incorrect. Un explant est un fragment de tissu maintenu en culture sans dissociation complète. Il conserve localement des relations entre cellules et matrice, ce qui peut être utile pour étudier des fonctions tissulaires, tout en restant un modèle ex vivo simplifié."
      },
      {
        "content": "Un explant est un fragment de tissu placé directement en culture.",
        "correct": true,
        "explanation": "Exact. Un explant est un fragment de tissu maintenu en culture sans dissociation complète. Il conserve localement des relations entre cellules et matrice, ce qui peut être utile pour étudier des fonctions tissulaires, tout en restant un modèle ex vivo simplifié."
      },
      {
        "content": "Des cellules peuvent migrer hors d’un explant et former une excroissance autour du fragment.",
        "correct": true,
        "explanation": "Exact. Un explant est un fragment de tissu maintenu en culture sans dissociation complète. Il conserve localement des relations entre cellules et matrice, ce qui peut être utile pour étudier des fonctions tissulaires, tout en restant un modèle ex vivo simplifié."
      }
    ],
    "explanation": "Un explant est un fragment de tissu maintenu en culture sans dissociation complète. Il conserve localement des relations entre cellules et matrice, ce qui peut être utile pour étudier des fonctions tissulaires, tout en restant un modèle ex vivo simplifié."
  },
  {
    "order": 46,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Cellules dissociées et isolement tissulaire », lesquelles sont incorrectes ?",
    "choices": [
      {
        "content": "Des protéases comme la trypsine peuvent être utilisées dans certains protocoles de dissociation ou de passage.",
        "correct": false,
        "explanation": "Exact. La dissociation transforme un tissu en cellules isolées ou petits amas par des procédés mécaniques et/ou enzymatiques. Elle facilite le comptage et l’ensemencement mais rompt une partie des interactions tissulaires natives."
      },
      {
        "content": "La dissociation facilite l’ensemencement de cellules à une densité définie.",
        "correct": false,
        "explanation": "Exact. La dissociation transforme un tissu en cellules isolées ou petits amas par des procédés mécaniques et/ou enzymatiques. Elle facilite le comptage et l’ensemencement mais rompt une partie des interactions tissulaires natives."
      },
      {
        "content": "La dissociation tissulaire conserve obligatoirement toutes les interactions du tissu intact.",
        "correct": true,
        "explanation": "Incorrect. La dissociation transforme un tissu en cellules isolées ou petits amas par des procédés mécaniques et/ou enzymatiques. Elle facilite le comptage et l’ensemencement mais rompt une partie des interactions tissulaires natives."
      },
      {
        "content": "Aucune enzyme ne peut être utilisée pour isoler des cellules d’un tissu.",
        "correct": true,
        "explanation": "Incorrect. La dissociation transforme un tissu en cellules isolées ou petits amas par des procédés mécaniques et/ou enzymatiques. Elle facilite le comptage et l’ensemencement mais rompt une partie des interactions tissulaires natives."
      },
      {
        "content": "La dissociation d’un tissu peut utiliser des forces mécaniques et des enzymes.",
        "correct": false,
        "explanation": "Exact. La dissociation transforme un tissu en cellules isolées ou petits amas par des procédés mécaniques et/ou enzymatiques. Elle facilite le comptage et l’ensemencement mais rompt une partie des interactions tissulaires natives."
      }
    ],
    "explanation": "La dissociation transforme un tissu en cellules isolées ou petits amas par des procédés mécaniques et/ou enzymatiques. Elle facilite le comptage et l’ensemencement mais rompt une partie des interactions tissulaires natives. Ici, il fallait sélectionner les affirmations incorrectes."
  },
  {
    "order": 47,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions ci-dessous relatives à « Culture en monocouche 2D », laquelle est correcte ?",
    "choices": [
      {
        "content": "La monocouche 2D interdit toute observation microscopique.",
        "correct": false,
        "explanation": "Incorrect. Dans une culture 2D, les cellules adhérentes se développent sur une surface plane. Ce système est simple, accessible à l’imagerie et aux manipulations, mais l’architecture et les gradients du tissu in vivo sont imparfaitement reproduits."
      },
      {
        "content": "Une culture 2D de cellules adhérentes se développe principalement sur une surface plane.",
        "correct": true,
        "explanation": "Exact. Dans une culture 2D, les cellules adhérentes se développent sur une surface plane. Ce système est simple, accessible à l’imagerie et aux manipulations, mais l’architecture et les gradients du tissu in vivo sont imparfaitement reproduits."
      },
      {
        "content": "Une culture 2D reproduit nécessairement toute l’architecture tridimensionnelle d’un tissu.",
        "correct": false,
        "explanation": "Incorrect. Dans une culture 2D, les cellules adhérentes se développent sur une surface plane. Ce système est simple, accessible à l’imagerie et aux manipulations, mais l’architecture et les gradients du tissu in vivo sont imparfaitement reproduits."
      },
      {
        "content": "Les cellules en 2D ne peuvent jamais adhérer à un support.",
        "correct": false,
        "explanation": "Incorrect. Dans une culture 2D, les cellules adhérentes se développent sur une surface plane. Ce système est simple, accessible à l’imagerie et aux manipulations, mais l’architecture et les gradients du tissu in vivo sont imparfaitement reproduits."
      },
      {
        "content": "Les modèles 2D sont toujours inutiles dès qu’un modèle 3D existe.",
        "correct": false,
        "explanation": "Incorrect. Dans une culture 2D, les cellules adhérentes se développent sur une surface plane. Ce système est simple, accessible à l’imagerie et aux manipulations, mais l’architecture et les gradients du tissu in vivo sont imparfaitement reproduits."
      }
    ],
    "explanation": "Dans une culture 2D, les cellules adhérentes se développent sur une surface plane. Ce système est simple, accessible à l’imagerie et aux manipulations, mais l’architecture et les gradients du tissu in vivo sont imparfaitement reproduits."
  },
  {
    "order": 48,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Sur le thème « Modèles de culture 3D », sélectionnez exactement 3 propositions exactes.",
    "choices": [
      {
        "content": "Un sphéroïde est un agrégat cellulaire tridimensionnel.",
        "correct": true,
        "explanation": "Exact. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      },
      {
        "content": "Les interactions cellule-cellule sont souvent plus nombreuses en 3D qu’en monocouche.",
        "correct": true,
        "explanation": "Exact. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      },
      {
        "content": "Les gradients de diffusion sont impossibles dans un sphéroïde.",
        "correct": false,
        "explanation": "Incorrect. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      },
      {
        "content": "Un modèle 3D est par définition une monocouche parfaitement plane.",
        "correct": false,
        "explanation": "Incorrect. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      },
      {
        "content": "Un modèle 3D peut recréer des gradients d’oxygène et de nutriments.",
        "correct": true,
        "explanation": "Exact. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      }
    ],
    "explanation": "Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
  },
  {
    "order": 49,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes sur « Culture en interface air-liquide », cinq sont exactes : sélectionnez-les.",
    "choices": [
      {
        "content": "Dans une interface air-liquide, les deux faces de l’épithélium sont obligatoirement immergées dans le même volume de milieu.",
        "correct": false,
        "explanation": "Incorrect. Dans une culture en interface air-liquide, le pôle basal d’un épithélium est nourri par le milieu tandis que le pôle apical est exposé à l’air. Cette configuration favorise la différenciation de certains épithéliums, notamment respiratoires."
      },
      {
        "content": "Une culture en interface air-liquide expose le pôle apical de l’épithélium à l’air.",
        "correct": true,
        "explanation": "Exact. Dans une culture en interface air-liquide, le pôle basal d’un épithélium est nourri par le milieu tandis que le pôle apical est exposé à l’air. Cette configuration favorise la différenciation de certains épithéliums, notamment respiratoires."
      },
      {
        "content": "Le pôle basal d’un modèle air-liquide est privé de tout apport nutritif.",
        "correct": false,
        "explanation": "Incorrect. Dans une culture en interface air-liquide, le pôle basal d’un épithélium est nourri par le milieu tandis que le pôle apical est exposé à l’air. Cette configuration favorise la différenciation de certains épithéliums, notamment respiratoires."
      },
      {
        "content": "Cette configuration peut favoriser la différenciation d’un épithélium respiratoire.",
        "correct": true,
        "explanation": "Exact. Dans une culture en interface air-liquide, le pôle basal d’un épithélium est nourri par le milieu tandis que le pôle apical est exposé à l’air. Cette configuration favorise la différenciation de certains épithéliums, notamment respiratoires."
      },
      {
        "content": "L’interface air-liquide empêche toute différenciation épithéliale.",
        "correct": false,
        "explanation": "Incorrect. Dans une culture en interface air-liquide, le pôle basal d’un épithélium est nourri par le milieu tandis que le pôle apical est exposé à l’air. Cette configuration favorise la différenciation de certains épithéliums, notamment respiratoires."
      },
      {
        "content": "Un modèle air-liquide reproduit automatiquement tous les organes d’un individu.",
        "correct": false,
        "explanation": "Incorrect. Dans une culture en interface air-liquide, le pôle basal d’un épithélium est nourri par le milieu tandis que le pôle apical est exposé à l’air. Cette configuration favorise la différenciation de certains épithéliums, notamment respiratoires."
      },
      {
        "content": "Des cellules ciliées et sécrétrices peuvent apparaître dans certains modèles respiratoires différenciés.",
        "correct": true,
        "explanation": "Exact. Dans une culture en interface air-liquide, le pôle basal d’un épithélium est nourri par le milieu tandis que le pôle apical est exposé à l’air. Cette configuration favorise la différenciation de certains épithéliums, notamment respiratoires."
      },
      {
        "content": "La mise en interface est généralement réalisée après l’établissement d’une couche cellulaire sur un support perméable.",
        "correct": true,
        "explanation": "Exact. Dans une culture en interface air-liquide, le pôle basal d’un épithélium est nourri par le milieu tandis que le pôle apical est exposé à l’air. Cette configuration favorise la différenciation de certains épithéliums, notamment respiratoires."
      },
      {
        "content": "Ce type de modèle est réservé aux cellules sanguines en suspension.",
        "correct": false,
        "explanation": "Incorrect. Dans une culture en interface air-liquide, le pôle basal d’un épithélium est nourri par le milieu tandis que le pôle apical est exposé à l’air. Cette configuration favorise la différenciation de certains épithéliums, notamment respiratoires."
      },
      {
        "content": "Le pôle basal reste en contact avec le milieu nutritif.",
        "correct": true,
        "explanation": "Exact. Dans une culture en interface air-liquide, le pôle basal d’un épithélium est nourri par le milieu tandis que le pôle apical est exposé à l’air. Cette configuration favorise la différenciation de certains épithéliums, notamment respiratoires."
      }
    ],
    "explanation": "Dans une culture en interface air-liquide, le pôle basal d’un épithélium est nourri par le milieu tandis que le pôle apical est exposé à l’air. Cette configuration favorise la différenciation de certains épithéliums, notamment respiratoires."
  },
  {
    "order": 50,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Intérêt et limites des modèles in vitro », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Un modèle in vitro simple possède automatiquement une vascularisation fonctionnelle.",
        "correct": false,
        "explanation": "Incorrect. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      },
      {
        "content": "Un résultat obtenu dans une lignée cellulaire suffit toujours à démontrer un effet chez l’être humain.",
        "correct": false,
        "explanation": "Incorrect. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      },
      {
        "content": "Un modèle in vitro simplifie nécessairement une partie de l’environnement tissulaire réel.",
        "correct": true,
        "explanation": "Exact. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      },
      {
        "content": "Les répétitions techniques et biologiques améliorent l’interprétation d’une expérience in vitro.",
        "correct": true,
        "explanation": "Exact. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      },
      {
        "content": "Une culture cellulaire permet de modifier une variable expérimentale de manière contrôlée.",
        "correct": true,
        "explanation": "Exact. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      }
    ],
    "explanation": "Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
  },
  {
    "order": 51,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant « Culture d’explants », quelles affirmations sont correctes ?",
    "choices": [
      {
        "content": "Un explant peut permettre d’observer rapidement une fonction tissulaire déjà présente.",
        "correct": true,
        "explanation": "Exact. Un explant est un fragment de tissu maintenu en culture sans dissociation complète. Il conserve localement des relations entre cellules et matrice, ce qui peut être utile pour étudier des fonctions tissulaires, tout en restant un modèle ex vivo simplifié."
      },
      {
        "content": "Aucune cellule ne peut migrer à partir d’un explant.",
        "correct": false,
        "explanation": "Incorrect. Un explant est un fragment de tissu maintenu en culture sans dissociation complète. Il conserve localement des relations entre cellules et matrice, ce qui peut être utile pour étudier des fonctions tissulaires, tout en restant un modèle ex vivo simplifié."
      },
      {
        "content": "La culture d’explant reproduit exactement tous les paramètres d’un organe vivant.",
        "correct": false,
        "explanation": "Incorrect. Un explant est un fragment de tissu maintenu en culture sans dissociation complète. Il conserve localement des relations entre cellules et matrice, ce qui peut être utile pour étudier des fonctions tissulaires, tout en restant un modèle ex vivo simplifié."
      },
      {
        "content": "Dans ce cadre, des cellules peuvent migrer hors d’un explant et former une excroissance autour du fragment.",
        "correct": true,
        "explanation": "Exact. Un explant est un fragment de tissu maintenu en culture sans dissociation complète. Il conserve localement des relations entre cellules et matrice, ce qui peut être utile pour étudier des fonctions tissulaires, tout en restant un modèle ex vivo simplifié."
      },
      {
        "content": "Dans ce cadre, un explant peut préserver localement des interactions cellule-cellule et cellule-matrice.",
        "correct": true,
        "explanation": "Exact. Un explant est un fragment de tissu maintenu en culture sans dissociation complète. Il conserve localement des relations entre cellules et matrice, ce qui peut être utile pour étudier des fonctions tissulaires, tout en restant un modèle ex vivo simplifié."
      }
    ],
    "explanation": "Un explant est un fragment de tissu maintenu en culture sans dissociation complète. Il conserve localement des relations entre cellules et matrice, ce qui peut être utile pour étudier des fonctions tissulaires, tout en restant un modèle ex vivo simplifié."
  },
  {
    "order": 52,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles affirmations décrivent correctement « Cellules dissociées et isolement tissulaire » ?",
    "choices": [
      {
        "content": "La dissociation rompt une partie des interactions cellule-cellule présentes dans le tissu.",
        "correct": true,
        "explanation": "Exact. La dissociation transforme un tissu en cellules isolées ou petits amas par des procédés mécaniques et/ou enzymatiques. Elle facilite le comptage et l’ensemencement mais rompt une partie des interactions tissulaires natives."
      },
      {
        "content": "Dans ce cadre, la dissociation facilite l’ensemencement de cellules à une densité définie.",
        "correct": true,
        "explanation": "Exact. La dissociation transforme un tissu en cellules isolées ou petits amas par des procédés mécaniques et/ou enzymatiques. Elle facilite le comptage et l’ensemencement mais rompt une partie des interactions tissulaires natives."
      },
      {
        "content": "Toutes les cellules résistent de la même manière à un traitement enzymatique.",
        "correct": false,
        "explanation": "Incorrect. La dissociation transforme un tissu en cellules isolées ou petits amas par des procédés mécaniques et/ou enzymatiques. Elle facilite le comptage et l’ensemencement mais rompt une partie des interactions tissulaires natives."
      },
      {
        "content": "Dans ce cadre, des protéases comme la trypsine peuvent être utilisées dans certains protocoles de dissociation ou de passage.",
        "correct": true,
        "explanation": "Exact. La dissociation transforme un tissu en cellules isolées ou petits amas par des procédés mécaniques et/ou enzymatiques. Elle facilite le comptage et l’ensemencement mais rompt une partie des interactions tissulaires natives."
      },
      {
        "content": "La dissociation rend impossible tout comptage cellulaire.",
        "correct": false,
        "explanation": "Incorrect. La dissociation transforme un tissu en cellules isolées ou petits amas par des procédés mécaniques et/ou enzymatiques. Elle facilite le comptage et l’ensemencement mais rompt une partie des interactions tissulaires natives."
      }
    ],
    "explanation": "La dissociation transforme un tissu en cellules isolées ou petits amas par des procédés mécaniques et/ou enzymatiques. Elle facilite le comptage et l’ensemencement mais rompt une partie des interactions tissulaires natives."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment appelle-t-on un fragment de tissu placé directement en culture sans dissociation complète ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "explant",
        "un explant"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Un explant conserve une partie de l’architecture tissulaire locale."
  },
  {
    "order": 54,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sélectionnez les affirmations compatibles avec « Culture en monocouche 2D ».",
    "choices": [
      {
        "content": "La culture 2D permet de contrôler facilement la composition du milieu.",
        "correct": true,
        "explanation": "Exact. Dans une culture 2D, les cellules adhérentes se développent sur une surface plane. Ce système est simple, accessible à l’imagerie et aux manipulations, mais l’architecture et les gradients du tissu in vivo sont imparfaitement reproduits."
      },
      {
        "content": "Dans ce cadre, les cellules en 2D ne peuvent jamais adhérer à un support.",
        "correct": false,
        "explanation": "Incorrect. Dans une culture 2D, les cellules adhérentes se développent sur une surface plane. Ce système est simple, accessible à l’imagerie et aux manipulations, mais l’architecture et les gradients du tissu in vivo sont imparfaitement reproduits."
      },
      {
        "content": "Dans ce cadre, les modèles 2D sont toujours inutiles dès qu’un modèle 3D existe.",
        "correct": false,
        "explanation": "Incorrect. Dans une culture 2D, les cellules adhérentes se développent sur une surface plane. Ce système est simple, accessible à l’imagerie et aux manipulations, mais l’architecture et les gradients du tissu in vivo sont imparfaitement reproduits."
      },
      {
        "content": "La composition du milieu n’a aucun effet sur une culture 2D.",
        "correct": false,
        "explanation": "Incorrect. Dans une culture 2D, les cellules adhérentes se développent sur une surface plane. Ce système est simple, accessible à l’imagerie et aux manipulations, mais l’architecture et les gradients du tissu in vivo sont imparfaitement reproduits."
      },
      {
        "content": "La monocouche 2D facilite souvent l’observation au microscope et le comptage des cellules.",
        "correct": true,
        "explanation": "Exact. Dans une culture 2D, les cellules adhérentes se développent sur une surface plane. Ce système est simple, accessible à l’imagerie et aux manipulations, mais l’architecture et les gradients du tissu in vivo sont imparfaitement reproduits."
      }
    ],
    "explanation": "Dans une culture 2D, les cellules adhérentes se développent sur une surface plane. Ce système est simple, accessible à l’imagerie et aux manipulations, mais l’architecture et les gradients du tissu in vivo sont imparfaitement reproduits."
  },
  {
    "order": 55,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel terme général désigne la séparation d’un tissu en cellules isolées ou petits amas ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "dissociation",
        "dissociation cellulaire",
        "dissociation tissulaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La dissociation peut être mécanique et/ou enzymatique."
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Modèles de culture 3D », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Les interactions cellule-cellule sont souvent plus nombreuses en 3D qu’en monocouche.",
        "correct": true,
        "explanation": "Exact. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      },
      {
        "content": "La matrice extracellulaire ne peut jamais être utilisée dans un modèle 3D.",
        "correct": false,
        "explanation": "Incorrect. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      },
      {
        "content": "Toute culture 3D reproduit exactement un organe humain complet.",
        "correct": false,
        "explanation": "Incorrect. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      },
      {
        "content": "Les modèles 3D sont toujours plus simples à imager qu’une monocouche.",
        "correct": false,
        "explanation": "Incorrect. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      },
      {
        "content": "Un modèle 3D peut recréer des gradients d’oxygène et de nutriments.",
        "correct": true,
        "explanation": "Exact. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      }
    ],
    "explanation": "Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
  },
  {
    "order": 57,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de « Culture en interface air-liquide », sélectionnez les propositions exactes.",
    "choices": [
      {
        "content": "L’interface air-liquide empêche toute différenciation épithéliale.",
        "correct": false,
        "explanation": "Incorrect. Dans une culture en interface air-liquide, le pôle basal d’un épithélium est nourri par le milieu tandis que le pôle apical est exposé à l’air. Cette configuration favorise la différenciation de certains épithéliums, notamment respiratoires."
      },
      {
        "content": "Cette configuration peut favoriser la différenciation d’un épithélium respiratoire.",
        "correct": true,
        "explanation": "Exact. Dans une culture en interface air-liquide, le pôle basal d’un épithélium est nourri par le milieu tandis que le pôle apical est exposé à l’air. Cette configuration favorise la différenciation de certains épithéliums, notamment respiratoires."
      },
      {
        "content": "Le pôle basal reste en contact avec le milieu nutritif.",
        "correct": true,
        "explanation": "Exact. Dans une culture en interface air-liquide, le pôle basal d’un épithélium est nourri par le milieu tandis que le pôle apical est exposé à l’air. Cette configuration favorise la différenciation de certains épithéliums, notamment respiratoires."
      },
      {
        "content": "La mise en interface est généralement réalisée après l’établissement d’une couche cellulaire sur un support perméable.",
        "correct": true,
        "explanation": "Exact. Dans une culture en interface air-liquide, le pôle basal d’un épithélium est nourri par le milieu tandis que le pôle apical est exposé à l’air. Cette configuration favorise la différenciation de certains épithéliums, notamment respiratoires."
      },
      {
        "content": "Des cellules ciliées et sécrétrices peuvent apparaître dans certains modèles respiratoires différenciés.",
        "correct": true,
        "explanation": "Exact. Dans une culture en interface air-liquide, le pôle basal d’un épithélium est nourri par le milieu tandis que le pôle apical est exposé à l’air. Cette configuration favorise la différenciation de certains épithéliums, notamment respiratoires."
      }
    ],
    "explanation": "Dans une culture en interface air-liquide, le pôle basal d’un épithélium est nourri par le milieu tandis que le pôle apical est exposé à l’air. Cette configuration favorise la différenciation de certains épithéliums, notamment respiratoires."
  },
  {
    "order": 58,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans le cadre de « Intérêt et limites des modèles in vitro », identifiez l’affirmation correcte.",
    "choices": [
      {
        "content": "Les cellules en culture ne subissent jamais de sélection ou d’adaptation.",
        "correct": false,
        "explanation": "Incorrect. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      },
      {
        "content": "La reproductibilité expérimentale ne dépend pas du nombre de répétitions.",
        "correct": false,
        "explanation": "Incorrect. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      },
      {
        "content": "Tous les effets observés en 2D se reproduisent nécessairement dans un tissu.",
        "correct": false,
        "explanation": "Incorrect. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      },
      {
        "content": "La sélection du modèle est indépendante de la question scientifique.",
        "correct": false,
        "explanation": "Incorrect. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      },
      {
        "content": "Les répétitions techniques et biologiques améliorent l’interprétation d’une expérience in vitro.",
        "correct": true,
        "explanation": "Exact. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      }
    ],
    "explanation": "Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions ci-dessous relatives à « Culture d’explants », laquelle est correcte ?",
    "choices": [
      {
        "content": "Les explants sont inutilisables pour étudier une réponse pharmacologique.",
        "correct": false,
        "explanation": "Incorrect. Un explant est un fragment de tissu maintenu en culture sans dissociation complète. Il conserve localement des relations entre cellules et matrice, ce qui peut être utile pour étudier des fonctions tissulaires, tout en restant un modèle ex vivo simplifié."
      },
      {
        "content": "Un explant nécessite obligatoirement la dissociation complète de toutes les cellules avant culture.",
        "correct": false,
        "explanation": "Incorrect. Un explant est un fragment de tissu maintenu en culture sans dissociation complète. Il conserve localement des relations entre cellules et matrice, ce qui peut être utile pour étudier des fonctions tissulaires, tout en restant un modèle ex vivo simplifié."
      },
      {
        "content": "Des cellules peuvent migrer hors d’un explant et former une excroissance autour du fragment.",
        "correct": true,
        "explanation": "Exact. Un explant est un fragment de tissu maintenu en culture sans dissociation complète. Il conserve localement des relations entre cellules et matrice, ce qui peut être utile pour étudier des fonctions tissulaires, tout en restant un modèle ex vivo simplifié."
      },
      {
        "content": "La culture d’explant est identique à une lignée cellulaire immortalisée.",
        "correct": false,
        "explanation": "Incorrect. Un explant est un fragment de tissu maintenu en culture sans dissociation complète. Il conserve localement des relations entre cellules et matrice, ce qui peut être utile pour étudier des fonctions tissulaires, tout en restant un modèle ex vivo simplifié."
      },
      {
        "content": "Un explant ne contient jamais de matrice extracellulaire.",
        "correct": false,
        "explanation": "Incorrect. Un explant est un fragment de tissu maintenu en culture sans dissociation complète. Il conserve localement des relations entre cellules et matrice, ce qui peut être utile pour étudier des fonctions tissulaires, tout en restant un modèle ex vivo simplifié."
      }
    ],
    "explanation": "Un explant est un fragment de tissu maintenu en culture sans dissociation complète. Il conserve localement des relations entre cellules et matrice, ce qui peut être utile pour étudier des fonctions tissulaires, tout en restant un modèle ex vivo simplifié."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment appelle-t-on une culture de cellules adhérentes développée principalement sur une surface plane ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "culture 2D",
        "2D",
        "monocouche",
        "culture en monocouche"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La monocouche 2D est un modèle simple et facilement observable."
  },
  {
    "order": 61,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant « Cellules dissociées et isolement tissulaire », quelle est l’unique proposition exacte ?",
    "choices": [
      {
        "content": "La dissociation transforme automatiquement une cellule normale en cellule immortelle.",
        "correct": false,
        "explanation": "Incorrect. La dissociation transforme un tissu en cellules isolées ou petits amas par des procédés mécaniques et/ou enzymatiques. Elle facilite le comptage et l’ensemencement mais rompt une partie des interactions tissulaires natives."
      },
      {
        "content": "La dissociation tissulaire conserve obligatoirement toutes les interactions du tissu intact.",
        "correct": false,
        "explanation": "Incorrect. La dissociation transforme un tissu en cellules isolées ou petits amas par des procédés mécaniques et/ou enzymatiques. Elle facilite le comptage et l’ensemencement mais rompt une partie des interactions tissulaires natives."
      },
      {
        "content": "Une dissociation plus longue améliore toujours la viabilité cellulaire.",
        "correct": false,
        "explanation": "Incorrect. La dissociation transforme un tissu en cellules isolées ou petits amas par des procédés mécaniques et/ou enzymatiques. Elle facilite le comptage et l’ensemencement mais rompt une partie des interactions tissulaires natives."
      },
      {
        "content": "La dissociation facilite l’ensemencement de cellules à une densité définie.",
        "correct": true,
        "explanation": "Exact. La dissociation transforme un tissu en cellules isolées ou petits amas par des procédés mécaniques et/ou enzymatiques. Elle facilite le comptage et l’ensemencement mais rompt une partie des interactions tissulaires natives."
      },
      {
        "content": "Les cellules dissociées ne peuvent jamais être remises en culture.",
        "correct": false,
        "explanation": "Incorrect. La dissociation transforme un tissu en cellules isolées ou petits amas par des procédés mécaniques et/ou enzymatiques. Elle facilite le comptage et l’ensemencement mais rompt une partie des interactions tissulaires natives."
      }
    ],
    "explanation": "La dissociation transforme un tissu en cellules isolées ou petits amas par des procédés mécaniques et/ou enzymatiques. Elle facilite le comptage et l’ensemencement mais rompt une partie des interactions tissulaires natives."
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Parmi ces affirmations concernant « Culture en monocouche 2D », retenez exactement les 2 justes.",
    "choices": [
      {
        "content": "La culture 2D crée spontanément un organe vascularisé complet.",
        "correct": false,
        "explanation": "Incorrect. Dans une culture 2D, les cellules adhérentes se développent sur une surface plane. Ce système est simple, accessible à l’imagerie et aux manipulations, mais l’architecture et les gradients du tissu in vivo sont imparfaitement reproduits."
      },
      {
        "content": "La culture 2D permet de contrôler facilement la composition du milieu.",
        "correct": true,
        "explanation": "Exact. Dans une culture 2D, les cellules adhérentes se développent sur une surface plane. Ce système est simple, accessible à l’imagerie et aux manipulations, mais l’architecture et les gradients du tissu in vivo sont imparfaitement reproduits."
      },
      {
        "content": "La polarité et la différenciation de certaines cellules peuvent être différentes en 2D et in vivo.",
        "correct": true,
        "explanation": "Exact. Dans une culture 2D, les cellules adhérentes se développent sur une surface plane. Ce système est simple, accessible à l’imagerie et aux manipulations, mais l’architecture et les gradients du tissu in vivo sont imparfaitement reproduits."
      },
      {
        "content": "La composition du milieu n’a aucun effet sur une culture 2D.",
        "correct": false,
        "explanation": "Incorrect. Dans une culture 2D, les cellules adhérentes se développent sur une surface plane. Ce système est simple, accessible à l’imagerie et aux manipulations, mais l’architecture et les gradients du tissu in vivo sont imparfaitement reproduits."
      },
      {
        "content": "Une cellule cultivée en 2D conserve obligatoirement un phénotype identique à celui observé in vivo.",
        "correct": false,
        "explanation": "Incorrect. Dans une culture 2D, les cellules adhérentes se développent sur une surface plane. Ce système est simple, accessible à l’imagerie et aux manipulations, mais l’architecture et les gradients du tissu in vivo sont imparfaitement reproduits."
      }
    ],
    "explanation": "Dans une culture 2D, les cellules adhérentes se développent sur une surface plane. Ce système est simple, accessible à l’imagerie et aux manipulations, mais l’architecture et les gradients du tissu in vivo sont imparfaitement reproduits."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel terme désigne un agrégat cellulaire tridimensionnel sphérique utilisé comme modèle 3D ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sphéroïde",
        "spheroide",
        "sphéroïdes",
        "spheroides"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les sphéroïdes sont des agrégats cellulaires 3D."
  },
  {
    "order": 64,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant « Modèles de culture 3D », quelles affirmations sont correctes ?",
    "choices": [
      {
        "content": "L’imagerie et la quantification peuvent être plus complexes dans un objet 3D épais.",
        "correct": true,
        "explanation": "Exact. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      },
      {
        "content": "Les modèles 3D peuvent modifier la réponse à un médicament par rapport à une culture 2D.",
        "correct": true,
        "explanation": "Exact. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      },
      {
        "content": "Dans ce cadre, les modèles 3D sont toujours plus simples à imager qu’une monocouche.",
        "correct": false,
        "explanation": "Incorrect. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      },
      {
        "content": "Une matrice extracellulaire ou un hydrogel peut servir de support à certaines cultures 3D.",
        "correct": true,
        "explanation": "Exact. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      },
      {
        "content": "Dans ce cadre, les interactions cellule-cellule sont souvent plus nombreuses en 3D qu’en monocouche.",
        "correct": true,
        "explanation": "Exact. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      }
    ],
    "explanation": "Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
  },
  {
    "order": 65,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Comment nomme-t-on la configuration où le pôle apical d’un épithélium est exposé à l’air tandis que le pôle basal reste nourri par le milieu ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "interface air-liquide",
        "culture air-liquide",
        "air-liquid interface",
        "ALI"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’interface air-liquide favorise la différenciation de certains épithéliums."
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel terme oppose une expérience réalisée hors de l’organisme à une étude in vivo ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "in vitro"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "In vitro désigne une expérimentation réalisée hors de l’organisme dans un système contrôlé."
  }
];
