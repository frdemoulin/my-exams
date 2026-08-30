import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch1 — Synthèse du chapitre */
export const UE14_CELL_CH1_SYNTHESIS_V2: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Définition et diversité des cellules », lesquelles sont incorrectes ?",
    "choices": [
      {
        "content": "Seuls les organismes pluricellulaires sont constitués de cellules.",
        "correct": true,
        "explanation": "Incorrect. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Une cellule peut rester une cellule malgré l’absence de noyau, comme l’hématie humaine mature.",
        "correct": false,
        "explanation": "Exact. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Les cellules d’un même tissu ont nécessairement une forme et une fonction parfaitement identiques.",
        "correct": true,
        "explanation": "Incorrect. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Toutes les cellules vivantes possèdent exactement la même structure interne.",
        "correct": true,
        "explanation": "Incorrect. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Un organisme pluricellulaire comporte des types cellulaires spécialisés dont la structure est adaptée à la fonction.",
        "correct": false,
        "explanation": "Exact. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      }
    ],
    "explanation": "La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire. Ici, il fallait sélectionner les affirmations incorrectes."
  },
  {
    "order": 102,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment appelle-t-on l’introduction expérimentale d’acides nucléiques dans des cellules eucaryotes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "transfection"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La transfection recouvre plusieurs méthodes chimiques, lipidiques ou physiques de délivrance d’acides nucléiques."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Compartiments et structures cellulaires », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Les ribosomes cytosoliques ou associés au RER assurent la traduction des protéines.",
        "correct": true,
        "explanation": "Exact. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "Le noyau contient l’essentiel du génome nucléaire des cellules eucaryotes.",
        "correct": true,
        "explanation": "Exact. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "Les mitochondries participent notamment à la production d’ATP par phosphorylation oxydative.",
        "correct": true,
        "explanation": "Exact. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "Le cytosol est synonyme exact de l’ensemble du cytoplasme, organites compris.",
        "correct": false,
        "explanation": "Incorrect. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "Le centrosome est un centre organisateur majeur des microtubules dans de nombreuses cellules animales.",
        "correct": true,
        "explanation": "Exact. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      }
    ],
    "explanation": "Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
  },
  {
    "order": 104,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans ce contexte, parmi les affirmations suivantes sur « Culture primaire et culture secondaire », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le premier repiquage d’une culture primaire conduit à une culture secondaire.",
        "correct": true,
        "explanation": "Exact. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "Les cultures primaires sont toujours parfaitement homogènes et identiques entre donneurs.",
        "correct": false,
        "explanation": "Incorrect. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "Des cellules d’un tissu peuvent être isolées par dissociation mécanique et/ou enzymatique.",
        "correct": true,
        "explanation": "Exact. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "Seules les tumeurs peuvent fournir des cultures primaires.",
        "correct": false,
        "explanation": "Incorrect. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "La dissociation d’un tissu exclut toute utilisation d’enzymes.",
        "correct": false,
        "explanation": "Incorrect. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      }
    ],
    "explanation": "Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Dans ce contexte, concernant « Durée de vie des cultures et lignées cellulaires », choisissez exactement 2 affirmations correctes.",
    "choices": [
      {
        "content": "Des cellules issues de tumeurs peuvent donner naissance à des lignées capables de proliférer durablement.",
        "correct": true,
        "explanation": "Exact. La plupart des cellules somatiques normales ont une capacité de prolifération finie en culture et peuvent entrer en sénescence réplicative. Des lignées immortalisées, souvent tumorales ou transformées, peuvent proliférer durablement mais ne reproduisent pas parfaitement un tissu normal."
      },
      {
        "content": "Une lignée tumorale constitue toujours un modèle parfait de la tumeur d’un patient.",
        "correct": false,
        "explanation": "Incorrect. La plupart des cellules somatiques normales ont une capacité de prolifération finie en culture et peuvent entrer en sénescence réplicative. Des lignées immortalisées, souvent tumorales ou transformées, peuvent proliférer durablement mais ne reproduisent pas parfaitement un tissu normal."
      },
      {
        "content": "Une cellule normale peut être immortalisée expérimentalement par certaines transformations génétiques.",
        "correct": true,
        "explanation": "Exact. La plupart des cellules somatiques normales ont une capacité de prolifération finie en culture et peuvent entrer en sénescence réplicative. Des lignées immortalisées, souvent tumorales ou transformées, peuvent proliférer durablement mais ne reproduisent pas parfaitement un tissu normal."
      },
      {
        "content": "Le nombre de passages n’a aucun effet possible sur la biologie d’une lignée.",
        "correct": false,
        "explanation": "Incorrect. La plupart des cellules somatiques normales ont une capacité de prolifération finie en culture et peuvent entrer en sénescence réplicative. Des lignées immortalisées, souvent tumorales ou transformées, peuvent proliférer durablement mais ne reproduisent pas parfaitement un tissu normal."
      },
      {
        "content": "Une lignée cellulaire ne peut jamais dériver d’une transformation expérimentale.",
        "correct": false,
        "explanation": "Incorrect. La plupart des cellules somatiques normales ont une capacité de prolifération finie en culture et peuvent entrer en sénescence réplicative. Des lignées immortalisées, souvent tumorales ou transformées, peuvent proliférer durablement mais ne reproduisent pas parfaitement un tissu normal."
      }
    ],
    "explanation": "La plupart des cellules somatiques normales ont une capacité de prolifération finie en culture et peuvent entrer en sénescence réplicative. Des lignées immortalisées, souvent tumorales ou transformées, peuvent proliférer durablement mais ne reproduisent pas parfaitement un tissu normal."
  },
  {
    "order": 106,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant « Cryoconservation des cellules », quelles affirmations sont correctes ?",
    "choices": [
      {
        "content": "La cryoconservation impose de maintenir les cellules à 37 °C pendant tout le stockage.",
        "correct": false,
        "explanation": "Incorrect. La cryoconservation ralentit fortement les processus biologiques et permet de constituer des stocks. Des cryoprotecteurs comme le DMSO limitent les dommages liés à la glace ; la congélation et la décongélation doivent être contrôlées et peuvent réduire la viabilité."
      },
      {
        "content": "Une congélation contrôlée améliore souvent la survie après décongélation.",
        "correct": true,
        "explanation": "Exact. La cryoconservation ralentit fortement les processus biologiques et permet de constituer des stocks. Des cryoprotecteurs comme le DMSO limitent les dommages liés à la glace ; la congélation et la décongélation doivent être contrôlées et peuvent réduire la viabilité."
      },
      {
        "content": "La formation de cristaux de glace peut endommager les cellules lors de la congélation.",
        "correct": true,
        "explanation": "Exact. La cryoconservation ralentit fortement les processus biologiques et permet de constituer des stocks. Des cryoprotecteurs comme le DMSO limitent les dommages liés à la glace ; la congélation et la décongélation doivent être contrôlées et peuvent réduire la viabilité."
      },
      {
        "content": "La cryoconservation facilite la constitution d’une banque de lots cellulaires de référence.",
        "correct": true,
        "explanation": "Exact. La cryoconservation ralentit fortement les processus biologiques et permet de constituer des stocks. Des cryoprotecteurs comme le DMSO limitent les dommages liés à la glace ; la congélation et la décongélation doivent être contrôlées et peuvent réduire la viabilité."
      },
      {
        "content": "La décongélation doit être suivie d’une évaluation de la viabilité cellulaire.",
        "correct": true,
        "explanation": "Exact. La cryoconservation ralentit fortement les processus biologiques et permet de constituer des stocks. Des cryoprotecteurs comme le DMSO limitent les dommages liés à la glace ; la congélation et la décongélation doivent être contrôlées et peuvent réduire la viabilité."
      }
    ],
    "explanation": "La cryoconservation ralentit fortement les processus biologiques et permet de constituer des stocks. Des cryoprotecteurs comme le DMSO limitent les dommages liés à la glace ; la congélation et la décongélation doivent être contrôlées et peuvent réduire la viabilité."
  },
  {
    "order": 107,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Concernant « Modèles de culture 3D », choisissez exactement 2 affirmations correctes.",
    "choices": [
      {
        "content": "Une matrice extracellulaire ou un hydrogel peut servir de support à certaines cultures 3D.",
        "correct": true,
        "explanation": "Exact. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      },
      {
        "content": "Un modèle 3D est par définition une monocouche parfaitement plane.",
        "correct": false,
        "explanation": "Incorrect. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      },
      {
        "content": "Les modèles 3D peuvent modifier la réponse à un médicament par rapport à une culture 2D.",
        "correct": true,
        "explanation": "Exact. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      },
      {
        "content": "Une culture 3D ne contient jamais d’interactions cellule-cellule.",
        "correct": false,
        "explanation": "Incorrect. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      },
      {
        "content": "Les gradients de diffusion sont impossibles dans un sphéroïde.",
        "correct": false,
        "explanation": "Incorrect. Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
      }
    ],
    "explanation": "Les modèles 3D, tels que sphéroïdes et organoïdes selon le système, restaurent certaines interactions et certains gradients absents d’une monocouche. Ils sont plus proches de certains aspects tissulaires mais plus complexes à standardiser et analyser."
  },
  {
    "order": 108,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Pour le thème « Intérêt et limites des modèles in vitro », retenez les cinq affirmations correctes parmi les dix proposées.",
    "choices": [
      {
        "content": "La pertinence d’un modèle dépend de la question biologique posée.",
        "correct": true,
        "explanation": "Exact. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      },
      {
        "content": "Un modèle in vitro simplifie nécessairement une partie de l’environnement tissulaire réel.",
        "correct": true,
        "explanation": "Exact. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      },
      {
        "content": "Un modèle in vitro simple possède automatiquement une vascularisation fonctionnelle.",
        "correct": false,
        "explanation": "Incorrect. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      },
      {
        "content": "Des résultats in vitro peuvent nécessiter une validation dans des modèles plus intégrés.",
        "correct": true,
        "explanation": "Exact. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      },
      {
        "content": "Les interactions avec les cellules immunitaires ou les vaisseaux peuvent manquer dans un modèle simple.",
        "correct": true,
        "explanation": "Exact. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      },
      {
        "content": "Les cellules en culture ne subissent jamais de sélection ou d’adaptation.",
        "correct": false,
        "explanation": "Incorrect. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      },
      {
        "content": "Un modèle plus complexe est toujours supérieur pour toute question expérimentale.",
        "correct": false,
        "explanation": "Incorrect. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      },
      {
        "content": "Tous les effets observés en 2D se reproduisent nécessairement dans un tissu.",
        "correct": false,
        "explanation": "Incorrect. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      },
      {
        "content": "Un résultat obtenu dans une lignée cellulaire suffit toujours à démontrer un effet chez l’être humain.",
        "correct": false,
        "explanation": "Incorrect. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      },
      {
        "content": "Comparer plusieurs modèles peut renforcer la robustesse d’une conclusion.",
        "correct": true,
        "explanation": "Exact. Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
      }
    ],
    "explanation": "Les modèles in vitro permettent de contrôler des variables, répéter des expériences et analyser des mécanismes. Ils simplifient cependant le microenvironnement, la vascularisation, l’innervation, l’immunité et les interactions systémiques ; plusieurs modèles complémentaires sont souvent nécessaires."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel sigle désigne l’hybridation in situ utilisant une détection fluorescente ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "FISH",
        "fluorescence in situ hybridization",
        "fluorescent in situ hybridization"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "FISH est une hybridation in situ révélée par fluorescence."
  },
  {
    "order": 110,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "À propos de « Immunofluorescence directe et indirecte », repérez la seule affirmation correcte.",
    "choices": [
      {
        "content": "L’immunofluorescence ne peut jamais localiser une protéine intracellulaire.",
        "correct": false,
        "explanation": "Incorrect. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      },
      {
        "content": "Un immunomarquage ne nécessite aucun contrôle expérimental.",
        "correct": false,
        "explanation": "Incorrect. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      },
      {
        "content": "Un fluorophore émet de la lumière sans avoir besoin d’être excité.",
        "correct": false,
        "explanation": "Incorrect. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      },
      {
        "content": "En immunofluorescence indirecte, le secondaire remplace l’antigène dans la cellule.",
        "correct": false,
        "explanation": "Incorrect. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      },
      {
        "content": "Le fluorophore émet de la lumière après excitation par une longueur d’onde appropriée.",
        "correct": true,
        "explanation": "Exact. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      }
    ],
    "explanation": "L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
  },
  {
    "order": 111,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de « Fixation et perméabilisation », repérez la seule affirmation correcte.",
    "choices": [
      {
        "content": "Une cellule fixée peut encore être utilisée pour suivre sa migration en temps réel.",
        "correct": false,
        "explanation": "Incorrect. La fixation immobilise les structures et molécules mais peut modifier certains épitopes. Pour détecter une cible intracellulaire par anticorps, une perméabilisation est généralement nécessaire afin de franchir la membrane plasmique ; elle n’est pas toujours requise pour une cible de surface."
      },
      {
        "content": "Une perméabilisation facilite l’accès des anticorps aux protéines intracellulaires.",
        "correct": true,
        "explanation": "Exact. La fixation immobilise les structures et molécules mais peut modifier certains épitopes. Pour détecter une cible intracellulaire par anticorps, une perméabilisation est généralement nécessaire afin de franchir la membrane plasmique ; elle n’est pas toujours requise pour une cible de surface."
      },
      {
        "content": "Tous les fixateurs conviennent de manière identique à toutes les protéines.",
        "correct": false,
        "explanation": "Incorrect. La fixation immobilise les structures et molécules mais peut modifier certains épitopes. Pour détecter une cible intracellulaire par anticorps, une perméabilisation est généralement nécessaire afin de franchir la membrane plasmique ; elle n’est pas toujours requise pour une cible de surface."
      },
      {
        "content": "La perméabilisation augmente toujours la viabilité de la cellule.",
        "correct": false,
        "explanation": "Incorrect. La fixation immobilise les structures et molécules mais peut modifier certains épitopes. Pour détecter une cible intracellulaire par anticorps, une perméabilisation est généralement nécessaire afin de franchir la membrane plasmique ; elle n’est pas toujours requise pour une cible de surface."
      },
      {
        "content": "La fixation maintient une cellule vivante et métaboliquement active pendant plusieurs heures d’imagerie.",
        "correct": false,
        "explanation": "Incorrect. La fixation immobilise les structures et molécules mais peut modifier certains épitopes. Pour détecter une cible intracellulaire par anticorps, une perméabilisation est généralement nécessaire afin de franchir la membrane plasmique ; elle n’est pas toujours requise pour une cible de surface."
      }
    ],
    "explanation": "La fixation immobilise les structures et molécules mais peut modifier certains épitopes. Pour détecter une cible intracellulaire par anticorps, une perméabilisation est généralement nécessaire afin de franchir la membrane plasmique ; elle n’est pas toujours requise pour une cible de surface."
  },
  {
    "order": 112,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans ce contexte, à propos de « Hybridation in situ », sélectionnez les propositions exactes.",
    "choices": [
      {
        "content": "Une sonde peut être révélée par fluorescence dans une expérience de FISH.",
        "correct": true,
        "explanation": "Exact. L’hybridation in situ détecte une séquence d’ADN ou d’ARN grâce à une sonde nucléique complémentaire. La sonde peut porter ou révéler un marqueur fluorescent ou colorimétrique ; la spécificité dépend notamment de la complémentarité et des conditions d’hybridation."
      },
      {
        "content": "Une sonde dépourvue de toute complémentarité donne nécessairement le même signal spécifique.",
        "correct": false,
        "explanation": "Incorrect. L’hybridation in situ détecte une séquence d’ADN ou d’ARN grâce à une sonde nucléique complémentaire. La sonde peut porter ou révéler un marqueur fluorescent ou colorimétrique ; la spécificité dépend notamment de la complémentarité et des conditions d’hybridation."
      },
      {
        "content": "L’hybridation in situ peut aussi cibler une séquence d’ADN.",
        "correct": true,
        "explanation": "Exact. L’hybridation in situ détecte une séquence d’ADN ou d’ARN grâce à une sonde nucléique complémentaire. La sonde peut porter ou révéler un marqueur fluorescent ou colorimétrique ; la spécificité dépend notamment de la complémentarité et des conditions d’hybridation."
      },
      {
        "content": "La stringence d’hybridation influence la spécificité de la liaison sonde-cible.",
        "correct": true,
        "explanation": "Exact. L’hybridation in situ détecte une séquence d’ADN ou d’ARN grâce à une sonde nucléique complémentaire. La sonde peut porter ou révéler un marqueur fluorescent ou colorimétrique ; la spécificité dépend notamment de la complémentarité et des conditions d’hybridation."
      },
      {
        "content": "La température et la composition du tampon n’influencent pas l’hybridation.",
        "correct": false,
        "explanation": "Incorrect. L’hybridation in situ détecte une séquence d’ADN ou d’ARN grâce à une sonde nucléique complémentaire. La sonde peut porter ou révéler un marqueur fluorescent ou colorimétrique ; la spécificité dépend notamment de la complémentarité et des conditions d’hybridation."
      }
    ],
    "explanation": "L’hybridation in situ détecte une séquence d’ADN ou d’ARN grâce à une sonde nucléique complémentaire. La sonde peut porter ou révéler un marqueur fluorescent ou colorimétrique ; la spécificité dépend notamment de la complémentarité et des conditions d’hybridation."
  },
  {
    "order": 113,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant « Protéines fluorescentes et GFP », quelles affirmations sont correctes ?",
    "choices": [
      {
        "content": "Une protéine de fusion GFP peut être observée dans une cellule vivante.",
        "correct": true,
        "explanation": "Exact. La GFP et ses dérivés sont des marqueurs fluorescents génétiquement codés. En fusion avec une protéine d’intérêt, ils permettent de suivre sa localisation et sa dynamique dans des cellules vivantes, sous réserve que le tag ne perturbe pas la fonction de la protéine."
      },
      {
        "content": "Une construction GFP ne contient aucun acide nucléique codant le fluorophore.",
        "correct": false,
        "explanation": "Incorrect. La GFP et ses dérivés sont des marqueurs fluorescents génétiquement codés. En fusion avec une protéine d’intérêt, ils permettent de suivre sa localisation et sa dynamique dans des cellules vivantes, sous réserve que le tag ne perturbe pas la fonction de la protéine."
      },
      {
        "content": "La fluorescence GFP nécessite systématiquement l’ajout d’un anticorps fluorescent pour exister.",
        "correct": false,
        "explanation": "Incorrect. La GFP et ses dérivés sont des marqueurs fluorescents génétiquement codés. En fusion avec une protéine d’intérêt, ils permettent de suivre sa localisation et sa dynamique dans des cellules vivantes, sous réserve que le tag ne perturbe pas la fonction de la protéine."
      },
      {
        "content": "L’expression d’un tag fluorescent nécessite l’introduction ou l’expression d’une construction génétique adaptée.",
        "correct": true,
        "explanation": "Exact. La GFP et ses dérivés sont des marqueurs fluorescents génétiquement codés. En fusion avec une protéine d’intérêt, ils permettent de suivre sa localisation et sa dynamique dans des cellules vivantes, sous réserve que le tag ne perturbe pas la fonction de la protéine."
      },
      {
        "content": "Le site de fusion du tag doit être choisi pour limiter les perturbations de la protéine étudiée.",
        "correct": true,
        "explanation": "Exact. La GFP et ses dérivés sont des marqueurs fluorescents génétiquement codés. En fusion avec une protéine d’intérêt, ils permettent de suivre sa localisation et sa dynamique dans des cellules vivantes, sous réserve que le tag ne perturbe pas la fonction de la protéine."
      }
    ],
    "explanation": "La GFP et ses dérivés sont des marqueurs fluorescents génétiquement codés. En fusion avec une protéine d’intérêt, ils permettent de suivre sa localisation et sa dynamique dans des cellules vivantes, sous réserve que le tag ne perturbe pas la fonction de la protéine."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle microscopie est particulièrement adaptée à la localisation ultrastructurale de particules d’or colloïdal ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "MET",
        "microscopie électronique en transmission",
        "microscopie electronique en transmission"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’immunogold est classiquement analysé en MET."
  },
  {
    "order": 115,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment appelle-t-on une population cellulaire capable de proliférer durablement au cours de passages successifs ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "lignée immortalisée",
        "lignee immortalisee",
        "lignée cellulaire immortalisée",
        "lignee cellulaire immortalisee",
        "lignée immortelle",
        "lignee immortelle"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Une lignée immortalisée peut proliférer durablement mais ne reproduit pas nécessairement un tissu normal."
  },
  {
    "order": 116,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel terme désigne l’observation répétée d’une cellule vivante au cours du temps ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "imagerie en cellule vivante",
        "imagerie de cellule vivante",
        "live-cell imaging",
        "imagerie live"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’imagerie en cellule vivante permet d’étudier les dynamiques temporelles."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Pour le thème « Transfection et délivrance d’acides nucléiques », retenez les cinq affirmations correctes parmi les dix proposées.",
    "choices": [
      {
        "content": "L’ARN peut également être introduit par certaines méthodes de transfection.",
        "correct": true,
        "explanation": "Exact. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      },
      {
        "content": "La lipofection exige que le plasmide soit une protéine membranaire.",
        "correct": false,
        "explanation": "Incorrect. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      },
      {
        "content": "L’efficacité et la toxicité d’une transfection dépendent du type cellulaire.",
        "correct": true,
        "explanation": "Exact. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      },
      {
        "content": "La toxicité d’un réactif de transfection est toujours nulle.",
        "correct": false,
        "explanation": "Incorrect. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      },
      {
        "content": "Les ARN ne peuvent jamais être introduits dans une cellule par transfection.",
        "correct": false,
        "explanation": "Incorrect. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      },
      {
        "content": "La transfection signifie uniquement l’introduction d’une protéine purifiée sans acide nucléique.",
        "correct": false,
        "explanation": "Incorrect. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      },
      {
        "content": "Une transfection peut conduire à une expression transitoire d’un plasmide.",
        "correct": true,
        "explanation": "Exact. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      },
      {
        "content": "L’électroporation est une méthode physique pouvant servir à transfecter des cellules.",
        "correct": true,
        "explanation": "Exact. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      },
      {
        "content": "Une expression stable nécessite généralement une intégration ou un maintien durable et une sélection adaptée.",
        "correct": true,
        "explanation": "Exact. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      },
      {
        "content": "L’électroporation n’a aucun rapport avec l’introduction d’acides nucléiques.",
        "correct": false,
        "explanation": "Incorrect. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      }
    ],
    "explanation": "La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
  },
  {
    "order": 118,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de « Choix entre cellules vivantes et cellules fixées », repérez la seule affirmation correcte.",
    "choices": [
      {
        "content": "Toute fixation préserve parfaitement toutes les structures et tous les épitopes.",
        "correct": false,
        "explanation": "Incorrect. Le choix dépend de la question. Les cellules vivantes permettent le suivi temporel, souvent avec des protéines fluorescentes ou des sondes compatibles. La fixation donne un instantané et facilite l’accès à des cibles intracellulaires pour immunomarquage ou hybridation in situ."
      },
      {
        "content": "Une cellule fixée continue à migrer normalement pendant l’acquisition.",
        "correct": false,
        "explanation": "Incorrect. Le choix dépend de la question. Les cellules vivantes permettent le suivi temporel, souvent avec des protéines fluorescentes ou des sondes compatibles. La fixation donne un instantané et facilite l’accès à des cibles intracellulaires pour immunomarquage ou hybridation in situ."
      },
      {
        "content": "Le choix d’une technique est indépendant de la dynamique que l’on souhaite mesurer.",
        "correct": false,
        "explanation": "Incorrect. Le choix dépend de la question. Les cellules vivantes permettent le suivi temporel, souvent avec des protéines fluorescentes ou des sondes compatibles. La fixation donne un instantané et facilite l’accès à des cibles intracellulaires pour immunomarquage ou hybridation in situ."
      },
      {
        "content": "L’imagerie en cellule vivante est toujours non toxique quelle que soit l’intensité lumineuse.",
        "correct": false,
        "explanation": "Incorrect. Le choix dépend de la question. Les cellules vivantes permettent le suivi temporel, souvent avec des protéines fluorescentes ou des sondes compatibles. La fixation donne un instantané et facilite l’accès à des cibles intracellulaires pour immunomarquage ou hybridation in situ."
      },
      {
        "content": "Les protéines fluorescentes génétiquement codées sont adaptées à de nombreux suivis en cellule vivante.",
        "correct": true,
        "explanation": "Exact. Le choix dépend de la question. Les cellules vivantes permettent le suivi temporel, souvent avec des protéines fluorescentes ou des sondes compatibles. La fixation donne un instantané et facilite l’accès à des cibles intracellulaires pour immunomarquage ou hybridation in situ."
      }
    ],
    "explanation": "Le choix dépend de la question. Les cellules vivantes permettent le suivi temporel, souvent avec des protéines fluorescentes ou des sondes compatibles. La fixation donne un instantané et facilite l’accès à des cibles intracellulaires pour immunomarquage ou hybridation in situ."
  },
  {
    "order": 119,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles affirmations décrivent correctement « Définition et diversité des cellules » ?",
    "choices": [
      {
        "content": "La forme d’une cellule peut être étroitement liée à sa fonction biologique.",
        "correct": true,
        "explanation": "Exact. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "La membrane plasmique est absente des cellules procaryotes.",
        "correct": false,
        "explanation": "Incorrect. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Toute cellule eucaryote mature possède obligatoirement un noyau.",
        "correct": false,
        "explanation": "Incorrect. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Une cellule peut rester une cellule malgré l’absence de noyau, comme l’hématie humaine mature.",
        "correct": true,
        "explanation": "Exact. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Seuls les organismes pluricellulaires sont constitués de cellules.",
        "correct": false,
        "explanation": "Incorrect. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      }
    ],
    "explanation": "La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
  },
  {
    "order": 120,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de construction associe génétiquement une protéine d’intérêt à un tag fluorescent ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "protéine de fusion",
        "proteine de fusion",
        "construction chimérique",
        "construction chimerique",
        "fusion GFP"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Une protéine de fusion est produite à partir d’une construction génétique codant la protéine d’intérêt et le tag."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Pour « Compartiments et structures cellulaires », quelle proposition doit être retenue ?",
    "choices": [
      {
        "content": "L’appareil de Golgi est une structure extracellulaire.",
        "correct": false,
        "explanation": "Incorrect. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "Les mitochondries sont dépourvues de membrane.",
        "correct": false,
        "explanation": "Incorrect. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "Le noyau contient l’essentiel du génome nucléaire des cellules eucaryotes.",
        "correct": true,
        "explanation": "Exact. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "Le noyau est le site principal de traduction des protéines cytosoliques.",
        "correct": false,
        "explanation": "Incorrect. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "Le cytosquelette est une structure rigide et définitivement immobile.",
        "correct": false,
        "explanation": "Incorrect. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      }
    ],
    "explanation": "Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
  },
  {
    "order": 122,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sélectionnez les affirmations compatibles avec « Culture primaire et culture secondaire ».",
    "choices": [
      {
        "content": "Seules les tumeurs peuvent fournir des cultures primaires.",
        "correct": false,
        "explanation": "Incorrect. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "Une culture primaire peut provenir d’un tissu normal ou tumoral.",
        "correct": true,
        "explanation": "Exact. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "Le premier repiquage d’une culture primaire conduit à une culture secondaire.",
        "correct": true,
        "explanation": "Exact. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "Les cultures primaires conservent souvent davantage de caractéristiques du tissu d’origine que certaines lignées établies.",
        "correct": true,
        "explanation": "Exact. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "Une culture primaire est nécessairement une lignée immortelle établie depuis des années.",
        "correct": false,
        "explanation": "Incorrect. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      }
    ],
    "explanation": "Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
  }
];
