import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch8 — Échanges nucléocytoplasmiques, NLS et pores */
export const UE14_BIOCELL_CH8_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Sur le thème « Expérience de la nucléoplasmine », repérez l’unique affirmation correcte.",
    "choices": [
      {
        "content": "La région caudale empêche l’entrée de la nucléoplasmine dans le noyau.",
        "correct": false,
        "explanation": "Elle contient au contraire le signal nécessaire à l’import."
      },
      {
        "content": "L’expérience montre que toute protéine globulaire diffuse librement dans le noyau quelle que soit sa taille.",
        "correct": false,
        "explanation": "L’import de macromolécules est sélectif et dépend de signaux et récepteurs."
      },
      {
        "content": "La partie globulaire seule est suffisante pour l’import nucléaire depuis le cytoplasme.",
        "correct": false,
        "explanation": "Elle n’assure pas l’import efficace sans la région portant le NLS."
      },
      {
        "content": "La nucléoplasmine doit être clivée dans le cytoplasme avant d’entrer dans le noyau.",
        "correct": false,
        "explanation": "Le clivage expérimental sert à localiser le déterminant d’adressage ; il n’est pas une étape physiologique obligatoire."
      },
      {
        "content": "La partie globulaire injectée directement dans le noyau peut y rester.",
        "correct": true,
        "explanation": "L’expérience distingue import et rétention nucléaire."
      }
    ],
    "explanation": "Les expériences de micro-injection de nucléoplasmine ont montré qu’un déterminant porté par la région caudale est nécessaire à son import nucléaire, tandis que la région globulaire peut être retenue dans le noyau une fois injectée directement."
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le thème « Signal de localisation nucléaire », quelles propositions sont incorrectes ?",
    "choices": [
      {
        "content": "Un NLS fonctionnel est obligatoirement excisé après import.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. Il est généralement conservé, ce qui permet des cycles d’import répétés."
      },
      {
        "content": "Tout NLS humain est constitué exactement de cinq acides aminés identiques.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. Les NLS ont des séquences et des organisations variables."
      },
      {
        "content": "Le NLS du grand antigène T de SV40 est un exemple classique de signal nucléaire basique.",
        "correct": false,
        "explanation": "Cette affirmation est exacte biologiquement ; elle ne doit donc pas être sélectionnée ici. Ce motif a joué un rôle historique dans l’étude de l’adressage nucléaire."
      },
      {
        "content": "Les NLS sont reconnus directement par l’ADN chromosomique sans récepteur de transport.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. Des récepteurs d’import, notamment les importines, participent à la reconnaissance et au transport."
      },
      {
        "content": "Le NLS est un lipide membranaire du pore nucléaire.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. Il s’agit d’un motif porté par une protéine cargo."
      }
    ],
    "explanation": "Un NLS est un motif d’adressage reconnu par la machinerie d’import nucléaire ; les NLS classiques sont souvent riches en lysine et arginine et ne sont généralement pas excisés après import."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Parmi ces propositions concernant « Complexe du pore nucléaire », retenez exactement les 2 affirmations justes.",
    "choices": [
      {
        "content": "Le canal central participe au transport sélectif des macromolécules.",
        "correct": true,
        "explanation": "Les cargos récepteur-dépendants traversent la barrière de nucléoporines FG du canal central."
      },
      {
        "content": "Le pore nucléaire coupe physiquement l’ADN pour permettre son export.",
        "correct": false,
        "explanation": "L’ADN chromosomique n’est pas exporté de cette manière."
      },
      {
        "content": "Un même pore peut assurer des transports dans les deux directions.",
        "correct": true,
        "explanation": "Import et export peuvent se produire simultanément."
      },
      {
        "content": "Les pores nucléaires sont composés uniquement de lipides.",
        "correct": false,
        "explanation": "Ce sont de grands complexes protéiques insérés dans l’enveloppe."
      },
      {
        "content": "Les pores nucléaires sont fermés à toute petite molécule.",
        "correct": false,
        "explanation": "Les petites molécules peuvent diffuser passivement selon leur taille et leurs propriétés."
      }
    ],
    "explanation": "Le complexe du pore nucléaire est un assemblage de nucléoporines à symétrie approximativement octogonale qui contrôle des transports passifs et récepteur-dépendants dans les deux sens."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Transport nucléocytoplasmique », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le système Ran-GTP/Ran-GDP contribue à la directionnalité de nombreux transports nucléaires.",
        "correct": true,
        "explanation": "Le gradient de Ran fournit une asymétrie fonctionnelle entre noyau et cytoplasme."
      },
      {
        "content": "Les ARN ribosomaux matures sont importés depuis le cytoplasme pour former le nucléole.",
        "correct": false,
        "explanation": "Les ARNr sont synthétisés et maturés dans le noyau, puis les sous-unités ribosomales sont exportées."
      },
      {
        "content": "Les ARN matures sont exportés sous forme de complexes ribonucléoprotéiques.",
        "correct": true,
        "explanation": "Leur export est organisé et récepteur-dépendant."
      },
      {
        "content": "Les protéines nucléaires sont synthétisées dans le noyau puis exportées vers le cytosol.",
        "correct": false,
        "explanation": "La traduction des protéines nucléaires a lieu dans le cytosol, puis elles sont importées."
      },
      {
        "content": "Tous les échanges noyau-cytoplasme sont strictement passifs.",
        "correct": false,
        "explanation": "Les macromolécules utilisent des transports sélectifs et énergétiquement couplés."
      }
    ],
    "explanation": "Les petites molécules peuvent diffuser passivement à travers le pore, alors que de nombreuses macromolécules utilisent des récepteurs de transport et le système Ran pour un transport sélectif."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel sigle désigne un signal de localisation nucléaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "NLS",
        "signal de localisation nucléaire",
        "signal de localisation nucleaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Un NLS est un signal porté par une protéine cargo et reconnu par la machinerie d’import nucléaire ; il n’est généralement pas clivé après import."
  },
  {
    "order": 28,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Dans une vérification ciblée, sur le thème « Expérience de la nucléoplasmine », repérez l’unique affirmation correcte.",
    "choices": [
      {
        "content": "La région caudale de la nucléoplasmine contient l’information nécessaire à l’import nucléaire.",
        "correct": true,
        "explanation": "Cette région porte un signal de localisation nucléaire."
      },
      {
        "content": "La nucléoplasmine doit être clivée dans le cytoplasme avant d’entrer dans le noyau.",
        "correct": false,
        "explanation": "Le clivage expérimental sert à localiser le déterminant d’adressage ; il n’est pas une étape physiologique obligatoire."
      },
      {
        "content": "La région caudale empêche l’entrée de la nucléoplasmine dans le noyau.",
        "correct": false,
        "explanation": "Elle contient au contraire le signal nécessaire à l’import."
      },
      {
        "content": "L’expérience montre que toute protéine globulaire diffuse librement dans le noyau quelle que soit sa taille.",
        "correct": false,
        "explanation": "L’import de macromolécules est sélectif et dépend de signaux et récepteurs."
      },
      {
        "content": "La partie globulaire seule est suffisante pour l’import nucléaire depuis le cytoplasme.",
        "correct": false,
        "explanation": "Elle n’assure pas l’import efficace sans la région portant le NLS."
      }
    ],
    "explanation": "Les expériences de micro-injection de nucléoplasmine ont montré qu’un déterminant porté par la région caudale est nécessaire à son import nucléaire, tandis que la région globulaire peut être retenue dans le noyau une fois injectée directement."
  },
  {
    "order": 29,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle protéine historique a servi à démontrer expérimentalement l’existence d’un signal d’import nucléaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "nucléoplasmine",
        "nucleoplasmine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La nucléoplasmine a servi de modèle expérimental pour montrer qu’une séquence portée par sa région caudale permet l’import nucléaire."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Sur le thème « Signal de localisation nucléaire », sélectionnez exactement les cinq propositions exactes parmi les dix proposées.",
    "choices": [
      {
        "content": "Un NLS classique est souvent enrichi en résidus basiques lysine et arginine.",
        "correct": true,
        "explanation": "Les importines reconnaissent fréquemment des motifs basiques."
      },
      {
        "content": "Tout NLS humain est constitué exactement de cinq acides aminés identiques.",
        "correct": false,
        "explanation": "Les NLS ont des séquences et des organisations variables."
      },
      {
        "content": "Un NLS fonctionnel est obligatoirement excisé après import.",
        "correct": false,
        "explanation": "Il est généralement conservé, ce qui permet des cycles d’import répétés."
      },
      {
        "content": "Le NLS reste généralement présent sur la protéine après son entrée dans le noyau.",
        "correct": true,
        "explanation": "Contrairement à de nombreux peptides signaux du RE ou de la mitochondrie, il n’est généralement pas clivé."
      },
      {
        "content": "L’architecture globale du pore présente une symétrie d’ordre huit.",
        "correct": true,
        "explanation": "Le complexe du pore possède une organisation annulaire approximativement octogonale."
      },
      {
        "content": "Les pores nucléaires sont composés uniquement de lipides.",
        "correct": false,
        "explanation": "Ce sont de grands complexes protéiques insérés dans l’enveloppe."
      },
      {
        "content": "Une mutation d’un NLS peut empêcher l’accumulation nucléaire d’une protéine.",
        "correct": true,
        "explanation": "La reconnaissance par la machinerie d’import peut être compromise."
      },
      {
        "content": "Chaque pore ne fonctionne que dans le sens cytoplasme vers noyau.",
        "correct": false,
        "explanation": "Le transport est bidirectionnel."
      },
      {
        "content": "Le complexe du pore nucléaire est constitué de nombreuses protéines appelées nucléoporines.",
        "correct": true,
        "explanation": "Les nucléoporines s’assemblent en un complexe macromoléculaire traversant l’enveloppe."
      },
      {
        "content": "Le NLS est un lipide membranaire du pore nucléaire.",
        "correct": false,
        "explanation": "Il s’agit d’un motif porté par une protéine cargo."
      }
    ],
    "explanation": "Un NLS est un motif d’adressage reconnu par la machinerie d’import nucléaire ; les NLS classiques sont souvent riches en lysine et arginine et ne sont généralement pas excisés après import. Le complexe du pore nucléaire est un assemblage de nucléoporines à symétrie approximativement octogonale qui contrôle des transports passifs et récepteur-dépendants dans les deux sens."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Sur le thème « Complexe du pore nucléaire », repérez l’unique affirmation correcte.",
    "choices": [
      {
        "content": "Les pores nucléaires sont composés uniquement de lipides.",
        "correct": false,
        "explanation": "Ce sont de grands complexes protéiques insérés dans l’enveloppe."
      },
      {
        "content": "Le complexe du pore nucléaire est constitué de nombreuses protéines appelées nucléoporines.",
        "correct": true,
        "explanation": "Les nucléoporines s’assemblent en un complexe macromoléculaire traversant l’enveloppe."
      },
      {
        "content": "Chaque pore ne fonctionne que dans le sens cytoplasme vers noyau.",
        "correct": false,
        "explanation": "Le transport est bidirectionnel."
      },
      {
        "content": "Les pores nucléaires sont fermés à toute petite molécule.",
        "correct": false,
        "explanation": "Les petites molécules peuvent diffuser passivement selon leur taille et leurs propriétés."
      },
      {
        "content": "Le pore nucléaire coupe physiquement l’ADN pour permettre son export.",
        "correct": false,
        "explanation": "L’ADN chromosomique n’est pas exporté de cette manière."
      }
    ],
    "explanation": "Le complexe du pore nucléaire est un assemblage de nucléoporines à symétrie approximativement octogonale qui contrôle des transports passifs et récepteur-dépendants dans les deux sens."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment nomme-t-on les protéines constitutives du complexe du pore nucléaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "nucléoporines",
        "nucleoporines"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les nucléoporines sont les protéines qui s’assemblent pour former le complexe du pore nucléaire."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Sur le thème « Transport nucléocytoplasmique », sélectionnez exactement 3 propositions exactes.",
    "choices": [
      {
        "content": "Tous les échanges noyau-cytoplasme sont strictement passifs.",
        "correct": false,
        "explanation": "Les macromolécules utilisent des transports sélectifs et énergétiquement couplés."
      },
      {
        "content": "De petites molécules peuvent traverser passivement le complexe du pore nucléaire.",
        "correct": true,
        "explanation": "La diffusion passive est possible pour de petites espèces."
      },
      {
        "content": "Les protéines nucléaires de grande taille utilisent souvent des récepteurs d’import.",
        "correct": true,
        "explanation": "Les importines reconnaissent des cargos porteurs de signaux d’adressage."
      },
      {
        "content": "Le système Ran-GTP/Ran-GDP contribue à la directionnalité de nombreux transports nucléaires.",
        "correct": true,
        "explanation": "Le gradient de Ran fournit une asymétrie fonctionnelle entre noyau et cytoplasme."
      },
      {
        "content": "Les ARN ribosomaux matures sont importés depuis le cytoplasme pour former le nucléole.",
        "correct": false,
        "explanation": "Les ARNr sont synthétisés et maturés dans le noyau, puis les sous-unités ribosomales sont exportées."
      }
    ],
    "explanation": "Les petites molécules peuvent diffuser passivement à travers le pore, alors que de nombreuses macromolécules utilisent des récepteurs de transport et le système Ran pour un transport sélectif."
  },
  {
    "order": 34,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel type de récepteur reconnaît fréquemment un NLS classique pour l’import nucléaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "importine",
        "importines"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les importines reconnaissent de nombreux cargos porteurs d’un NLS et les accompagnent à travers le pore nucléaire."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Sur le thème « Expérience de la nucléoplasmine », repérez l’unique affirmation correcte.",
    "choices": [
      {
        "content": "La région caudale empêche l’entrée de la nucléoplasmine dans le noyau.",
        "correct": false,
        "explanation": "Elle contient au contraire le signal nécessaire à l’import."
      },
      {
        "content": "L’expérience montre que toute protéine globulaire diffuse librement dans le noyau quelle que soit sa taille.",
        "correct": false,
        "explanation": "L’import de macromolécules est sélectif et dépend de signaux et récepteurs."
      },
      {
        "content": "La partie globulaire injectée directement dans le noyau peut y rester.",
        "correct": true,
        "explanation": "L’expérience distingue import et rétention nucléaire."
      },
      {
        "content": "La partie globulaire seule est suffisante pour l’import nucléaire depuis le cytoplasme.",
        "correct": false,
        "explanation": "Elle n’assure pas l’import efficace sans la région portant le NLS."
      },
      {
        "content": "La nucléoplasmine doit être clivée dans le cytoplasme avant d’entrer dans le noyau.",
        "correct": false,
        "explanation": "Le clivage expérimental sert à localiser le déterminant d’adressage ; il n’est pas une étape physiologique obligatoire."
      }
    ],
    "explanation": "Les expériences de micro-injection de nucléoplasmine ont montré qu’un déterminant porté par la région caudale est nécessaire à son import nucléaire, tandis que la région globulaire peut être retenue dans le noyau une fois injectée directement."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le thème « Signal de localisation nucléaire » ?",
    "choices": [
      {
        "content": "Le NLS du grand antigène T de SV40 est un exemple classique de signal nucléaire basique.",
        "correct": true,
        "explanation": "Ce motif a joué un rôle historique dans l’étude de l’adressage nucléaire."
      },
      {
        "content": "Tout NLS humain est constitué exactement de cinq acides aminés identiques.",
        "correct": false,
        "explanation": "Les NLS ont des séquences et des organisations variables."
      },
      {
        "content": "Le NLS reste généralement présent sur la protéine après son entrée dans le noyau.",
        "correct": true,
        "explanation": "Contrairement à de nombreux peptides signaux du RE ou de la mitochondrie, il n’est généralement pas clivé."
      },
      {
        "content": "Un NLS classique est souvent enrichi en résidus basiques lysine et arginine.",
        "correct": true,
        "explanation": "Les importines reconnaissent fréquemment des motifs basiques."
      },
      {
        "content": "Les NLS sont reconnus directement par l’ADN chromosomique sans récepteur de transport.",
        "correct": false,
        "explanation": "Des récepteurs d’import, notamment les importines, participent à la reconnaissance et au transport."
      }
    ],
    "explanation": "Un NLS est un motif d’adressage reconnu par la machinerie d’import nucléaire ; les NLS classiques sont souvent riches en lysine et arginine et ne sont généralement pas excisés après import."
  },
  {
    "order": 37,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Complexe du pore nucléaire », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Les pores nucléaires sont fermés à toute petite molécule.",
        "correct": false,
        "explanation": "Les petites molécules peuvent diffuser passivement selon leur taille et leurs propriétés."
      },
      {
        "content": "Un même pore peut assurer des transports dans les deux directions.",
        "correct": true,
        "explanation": "Import et export peuvent se produire simultanément."
      },
      {
        "content": "Le complexe du pore nucléaire est constitué de nombreuses protéines appelées nucléoporines.",
        "correct": true,
        "explanation": "Les nucléoporines s’assemblent en un complexe macromoléculaire traversant l’enveloppe."
      },
      {
        "content": "L’architecture globale du pore présente une symétrie d’ordre huit.",
        "correct": true,
        "explanation": "Le complexe du pore possède une organisation annulaire approximativement octogonale."
      },
      {
        "content": "Le canal central participe au transport sélectif des macromolécules.",
        "correct": true,
        "explanation": "Les cargos récepteur-dépendants traversent la barrière de nucléoporines FG du canal central."
      }
    ],
    "explanation": "Le complexe du pore nucléaire est un assemblage de nucléoporines à symétrie approximativement octogonale qui contrôle des transports passifs et récepteur-dépendants dans les deux sens."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sur le thème « Transport nucléocytoplasmique », sélectionnez exactement 2 propositions exactes.",
    "choices": [
      {
        "content": "Les protéines nucléaires sont synthétisées dans le noyau puis exportées vers le cytosol.",
        "correct": false,
        "explanation": "La traduction des protéines nucléaires a lieu dans le cytosol, puis elles sont importées."
      },
      {
        "content": "Les ARN matures sont exportés sous forme de complexes ribonucléoprotéiques.",
        "correct": true,
        "explanation": "Leur export est organisé et récepteur-dépendant."
      },
      {
        "content": "Tous les échanges noyau-cytoplasme sont strictement passifs.",
        "correct": false,
        "explanation": "Les macromolécules utilisent des transports sélectifs et énergétiquement couplés."
      },
      {
        "content": "Les ARN ribosomaux matures sont importés depuis le cytoplasme pour former le nucléole.",
        "correct": false,
        "explanation": "Les ARNr sont synthétisés et maturés dans le noyau, puis les sous-unités ribosomales sont exportées."
      },
      {
        "content": "Le système Ran-GTP/Ran-GDP contribue à la directionnalité de nombreux transports nucléaires.",
        "correct": true,
        "explanation": "Le gradient de Ran fournit une asymétrie fonctionnelle entre noyau et cytoplasme."
      }
    ],
    "explanation": "Les petites molécules peuvent diffuser passivement à travers le pore, alors que de nombreuses macromolécules utilisent des récepteurs de transport et le système Ran pour un transport sélectif."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Expérience de la nucléoplasmine », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La partie globulaire seule est suffisante pour l’import nucléaire depuis le cytoplasme.",
        "correct": false,
        "explanation": "Elle n’assure pas l’import efficace sans la région portant le NLS."
      },
      {
        "content": "L’expérience montre que toute protéine globulaire diffuse librement dans le noyau quelle que soit sa taille.",
        "correct": false,
        "explanation": "L’import de macromolécules est sélectif et dépend de signaux et récepteurs."
      },
      {
        "content": "La partie globulaire injectée directement dans le noyau peut y rester.",
        "correct": true,
        "explanation": "L’expérience distingue import et rétention nucléaire."
      },
      {
        "content": "La partie globulaire seule injectée dans le cytoplasme ne s’accumule pas efficacement dans le noyau.",
        "correct": true,
        "explanation": "Elle ne possède pas le déterminant d’import porté par la région caudale."
      },
      {
        "content": "La région caudale empêche l’entrée de la nucléoplasmine dans le noyau.",
        "correct": false,
        "explanation": "Elle contient au contraire le signal nécessaire à l’import."
      }
    ],
    "explanation": "Les expériences de micro-injection de nucléoplasmine ont montré qu’un déterminant porté par la région caudale est nécessaire à son import nucléaire, tandis que la région globulaire peut être retenue dans le noyau une fois injectée directement."
  },
  {
    "order": 40,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Sur le thème « Signal de localisation nucléaire », sélectionnez les affirmations exactes.",
    "choices": [
      {
        "content": "Le NLS du grand antigène T de SV40 est un exemple classique de signal nucléaire basique.",
        "correct": true,
        "explanation": "Ce motif a joué un rôle historique dans l’étude de l’adressage nucléaire."
      },
      {
        "content": "Un NLS classique est souvent enrichi en résidus basiques lysine et arginine.",
        "correct": true,
        "explanation": "Les importines reconnaissent fréquemment des motifs basiques."
      },
      {
        "content": "Les NLS sont reconnus directement par l’ADN chromosomique sans récepteur de transport.",
        "correct": false,
        "explanation": "Des récepteurs d’import, notamment les importines, participent à la reconnaissance et au transport."
      },
      {
        "content": "Tout NLS humain est constitué exactement de cinq acides aminés identiques.",
        "correct": false,
        "explanation": "Les NLS ont des séquences et des organisations variables."
      },
      {
        "content": "Le NLS reste généralement présent sur la protéine après son entrée dans le noyau.",
        "correct": true,
        "explanation": "Contrairement à de nombreux peptides signaux du RE ou de la mitochondrie, il n’est généralement pas clivé."
      }
    ],
    "explanation": "Un NLS est un motif d’adressage reconnu par la machinerie d’import nucléaire ; les NLS classiques sont souvent riches en lysine et arginine et ne sont généralement pas excisés après import."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle petite GTPase organise la directionnalité de nombreux transports nucléocytoplasmiques ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Ran",
        "Ran GTPase",
        "GTPase Ran"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La petite GTPase Ran contribue à imposer la directionnalité de nombreux cycles d’import et d’export nucléocytoplasmiques."
  },
  {
    "order": 42,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel grand complexe protéique traverse l’enveloppe nucléaire et contrôle les échanges ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "complexe du pore nucléaire",
        "pore nucléaire",
        "pore nucleaire",
        "NPC"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le complexe du pore nucléaire traverse l’enveloppe et constitue la voie sélective principale des échanges macromoléculaires entre noyau et cytoplasme."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le thème « Complexe du pore nucléaire », quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le canal central participe au transport sélectif des macromolécules.",
        "correct": true,
        "explanation": "Les cargos récepteur-dépendants traversent la barrière de nucléoporines FG du canal central."
      },
      {
        "content": "Le complexe du pore nucléaire est constitué de nombreuses protéines appelées nucléoporines.",
        "correct": true,
        "explanation": "Les nucléoporines s’assemblent en un complexe macromoléculaire traversant l’enveloppe."
      },
      {
        "content": "Les pores nucléaires sont composés uniquement de lipides.",
        "correct": false,
        "explanation": "Ce sont de grands complexes protéiques insérés dans l’enveloppe."
      },
      {
        "content": "L’architecture globale du pore présente une symétrie d’ordre huit.",
        "correct": true,
        "explanation": "Le complexe du pore possède une organisation annulaire approximativement octogonale."
      },
      {
        "content": "Un même pore peut assurer des transports dans les deux directions.",
        "correct": true,
        "explanation": "Import et export peuvent se produire simultanément."
      }
    ],
    "explanation": "Le complexe du pore nucléaire est un assemblage de nucléoporines à symétrie approximativement octogonale qui contrôle des transports passifs et récepteur-dépendants dans les deux sens."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le thème « Transport nucléocytoplasmique » ?",
    "choices": [
      {
        "content": "De petites molécules peuvent traverser passivement le complexe du pore nucléaire.",
        "correct": true,
        "explanation": "La diffusion passive est possible pour de petites espèces."
      },
      {
        "content": "Les chromosomes entiers diffusent librement au travers des pores en interphase.",
        "correct": false,
        "explanation": "L’ADN chromosomique reste dans le noyau."
      },
      {
        "content": "Tous les échanges noyau-cytoplasme sont strictement passifs.",
        "correct": false,
        "explanation": "Les macromolécules utilisent des transports sélectifs et énergétiquement couplés."
      },
      {
        "content": "Les protéines nucléaires de grande taille utilisent souvent des récepteurs d’import.",
        "correct": true,
        "explanation": "Les importines reconnaissent des cargos porteurs de signaux d’adressage."
      },
      {
        "content": "Les protéines nucléaires sont synthétisées dans le noyau puis exportées vers le cytosol.",
        "correct": false,
        "explanation": "La traduction des protéines nucléaires a lieu dans le cytosol, puis elles sont importées."
      }
    ],
    "explanation": "Les petites molécules peuvent diffuser passivement à travers le pore, alors que de nombreuses macromolécules utilisent des récepteurs de transport et le système Ran pour un transport sélectif."
  }
];
