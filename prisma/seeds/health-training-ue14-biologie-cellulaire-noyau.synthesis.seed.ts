import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch8 — Synthèse transversale — V2 active */
export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le thème « Organisation générale du noyau », quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le noyau est limité par une seule bicouche lipidique.",
        "correct": false,
        "explanation": "L’enveloppe nucléaire est formée de deux membranes."
      },
      {
        "content": "Les nucléoles sont des organites cytoplasmiques.",
        "correct": false,
        "explanation": "Les nucléoles sont des domaines du noyau."
      },
      {
        "content": "Le noyau contient la quasi-totalité de l’information génétique d’une cellule humaine nucléée.",
        "correct": true,
        "explanation": "Une petite fraction du génome cellulaire se trouve dans les mitochondries."
      },
      {
        "content": "Le noyau est délimité par une enveloppe nucléaire constituée de deux membranes.",
        "correct": true,
        "explanation": "L’enveloppe nucléaire possède une membrane interne et une membrane externe."
      },
      {
        "content": "Les nucléoles sont des domaines nucléaires non entourés d’une membrane propre.",
        "correct": true,
        "explanation": "Le nucléole est un condensat nucléaire spécialisé dans la biogenèse ribosomale."
      }
    ],
    "explanation": "Le noyau délimite le nucléoplasme, contient l’essentiel du génome nucléaire sous forme de chromatine et comporte des domaines non membranaires comme les nucléoles."
  },
  {
    "order": 102,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Sur le thème « Structure de l’enveloppe nucléaire », sélectionnez les affirmations exactes.",
    "choices": [
      {
        "content": "La membrane externe peut porter des ribosomes sur sa face cytosolique.",
        "correct": true,
        "explanation": "Elle est en continuité avec le RER."
      },
      {
        "content": "La lamina est accolée à la face nucléoplasmique de la membrane interne.",
        "correct": true,
        "explanation": "La lamina nucléaire forme un réseau sous-jacent à la membrane interne."
      },
      {
        "content": "L’espace périnucléaire est identique au nucléoplasme.",
        "correct": false,
        "explanation": "Le nucléoplasme est à l’intérieur de la membrane interne ; l’espace périnucléaire se trouve entre les deux membranes."
      },
      {
        "content": "L’espace périnucléaire est situé entre les membranes interne et externe de l’enveloppe nucléaire.",
        "correct": true,
        "explanation": "Il sépare les deux membranes nucléaires."
      },
      {
        "content": "Les complexes de pores traversent les deux membranes au niveau de leurs zones de fusion.",
        "correct": true,
        "explanation": "Le pore nucléaire établit une continuité contrôlée entre nucléoplasme et cytosol."
      }
    ],
    "explanation": "L’enveloppe nucléaire comprend deux membranes séparées par l’espace périnucléaire et percées de complexes de pores nucléaires ; sa membrane externe est continue avec le RE."
  },
  {
    "order": 103,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le thème « Signal de localisation nucléaire », quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un NLS classique est souvent enrichi en résidus basiques lysine et arginine.",
        "correct": true,
        "explanation": "Les importines reconnaissent fréquemment des motifs basiques."
      },
      {
        "content": "Un NLS fonctionnel est obligatoirement excisé après import.",
        "correct": false,
        "explanation": "Il est généralement conservé, ce qui permet des cycles d’import répétés."
      },
      {
        "content": "Le NLS est un lipide membranaire du pore nucléaire.",
        "correct": false,
        "explanation": "Il s’agit d’un motif porté par une protéine cargo."
      },
      {
        "content": "Le NLS reste généralement présent sur la protéine après son entrée dans le noyau.",
        "correct": true,
        "explanation": "Contrairement à de nombreux peptides signaux du RE ou de la mitochondrie, il n’est généralement pas clivé."
      },
      {
        "content": "Tout NLS humain est constitué exactement de cinq acides aminés identiques.",
        "correct": false,
        "explanation": "Les NLS ont des séquences et des organisations variables."
      }
    ],
    "explanation": "Un NLS est un motif d’adressage reconnu par la machinerie d’import nucléaire ; les NLS classiques sont souvent riches en lysine et arginine et ne sont généralement pas excisés après import."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel sigle désigne le signal qui adresse une protéine vers le noyau ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "NLS"
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
    "order": 105,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Concernant « Complexe du pore nucléaire », cinq affirmations sont exactes : sélectionnez-les.",
    "choices": [
      {
        "content": "La lamina est située au contact de la face nucléoplasmique de la membrane interne.",
        "correct": true,
        "explanation": "Elle tapisse la périphérie interne du noyau."
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
        "content": "Un même pore peut assurer des transports dans les deux directions.",
        "correct": true,
        "explanation": "Import et export peuvent se produire simultanément."
      },
      {
        "content": "Les lamines sont des microtubules constitués de tubuline.",
        "correct": false,
        "explanation": "Elles appartiennent aux filaments intermédiaires."
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
        "content": "Les lamines appartiennent à la famille des filaments intermédiaires de type V.",
        "correct": true,
        "explanation": "Les lamines sont les filaments intermédiaires nucléaires."
      },
      {
        "content": "Les pores nucléaires sont fermés à toute petite molécule.",
        "correct": false,
        "explanation": "Les petites molécules peuvent diffuser passivement selon leur taille et leurs propriétés."
      },
      {
        "content": "La lamina est constituée de laminine.",
        "correct": false,
        "explanation": "La laminine est une glycoprotéine extracellulaire ; la lamina nucléaire est faite de lamines."
      }
    ],
    "explanation": "Le complexe du pore nucléaire est un assemblage de nucléoporines à symétrie approximativement octogonale qui contrôle des transports passifs et récepteur-dépendants dans les deux sens. La lamina est un réseau de filaments intermédiaires de type V, constitué de lamines A/C et B, sous la membrane nucléaire interne ; elle participe à la forme nucléaire, à l’organisation des pores et à l’ancrage de domaines chromatinien."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur « Lamina et lamines », laquelle est exacte ?",
    "choices": [
      {
        "content": "La lamina est constituée de laminine.",
        "correct": false,
        "explanation": "La laminine est une glycoprotéine extracellulaire ; la lamina nucléaire est faite de lamines."
      },
      {
        "content": "Les lamines sont des microtubules constitués de tubuline.",
        "correct": false,
        "explanation": "Elles appartiennent aux filaments intermédiaires."
      },
      {
        "content": "La lamina se trouve dans la lumière du réticulum endoplasmique.",
        "correct": false,
        "explanation": "Elle est du côté nucléoplasmique de la membrane interne."
      },
      {
        "content": "La lamina n’a aucun lien avec l’organisation de la chromatine.",
        "correct": false,
        "explanation": "Elle interagit avec des domaines chromatinien et contribue à l’architecture nucléaire."
      },
      {
        "content": "Les lamines appartiennent à la famille des filaments intermédiaires de type V.",
        "correct": true,
        "explanation": "Les lamines sont les filaments intermédiaires nucléaires."
      }
    ],
    "explanation": "La lamina est un réseau de filaments intermédiaires de type V, constitué de lamines A/C et B, sous la membrane nucléaire interne ; elle participe à la forme nucléaire, à l’organisation des pores et à l’ancrage de domaines chromatinien."
  },
  {
    "order": 107,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel est le nom de l’unité fondamentale de compaction de la chromatine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "nucléosome",
        "nucleosome"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le nucléosome est l’unité fondamentale de la chromatine : environ 147 paires de bases d’ADN s’enroulent autour d’un octamère d’histones."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Sur le thème « Nucléosome », sélectionnez exactement 3 propositions exactes.",
    "choices": [
      {
        "content": "Des segments d’ADN linker relient les nucléosomes successifs.",
        "correct": true,
        "explanation": "L’ADN internucléosomique relie les particules nucléosomiques."
      },
      {
        "content": "L’ADN reste entièrement rectiligne et ne s’enroule pas autour des histones.",
        "correct": false,
        "explanation": "L’enroulement de l’ADN autour du cœur d’histones est la base de la compaction."
      },
      {
        "content": "Chaque nucléosome contient une seule histone H3 et aucune H4.",
        "correct": false,
        "explanation": "Le cœur contient deux copies de chacune des histones H2A, H2B, H3 et H4."
      },
      {
        "content": "L’ADN effectue environ 1,65 tour autour du cœur d’histones.",
        "correct": true,
        "explanation": "Il ne s’agit pas de deux tours complets."
      },
      {
        "content": "Le cœur nucléosomique contient deux copies de H2A, H2B, H3 et H4.",
        "correct": true,
        "explanation": "Ces huit histones forment l’octamère du cœur."
      }
    ],
    "explanation": "Le nucléosome est l’unité fondamentale de la chromatine : environ 147 paires de bases d’ADN s’enroulent en ~1,65 tour autour d’un octamère contenant deux copies de H2A, H2B, H3 et H4."
  },
  {
    "order": 109,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sur le thème « Euchromatine et hétérochromatine », sélectionnez exactement 2 propositions exactes.",
    "choices": [
      {
        "content": "L’activité transcriptionnelle est en moyenne plus élevée dans l’euchromatine.",
        "correct": true,
        "explanation": "L’accessibilité aux facteurs de transcription y est généralement supérieure."
      },
      {
        "content": "Une chromatine plus accessible empêche toute transcription.",
        "correct": false,
        "explanation": "L’accessibilité favorise généralement la transcription."
      },
      {
        "content": "La compaction chromatinienne peut varier au cours du temps et selon le type cellulaire.",
        "correct": true,
        "explanation": "Les états chromatinien sont régulés."
      },
      {
        "content": "Toute hétérochromatine est définitivement inactive dans toutes les cellules.",
        "correct": false,
        "explanation": "Certaines régions peuvent changer d’état selon le contexte et l’hétérochromatine n’est pas une catégorie absolue."
      },
      {
        "content": "L’hétérochromatine est dépourvue d’ADN.",
        "correct": false,
        "explanation": "Il s’agit bien de chromatine, donc d’ADN associé à des protéines."
      }
    ],
    "explanation": "L’euchromatine est généralement plus accessible et plus transcriptionnellement active ; l’hétérochromatine est plus compacte et souvent moins active, sans que ces catégories soient absolues."
  },
  {
    "order": 110,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur « Territoires chromosomiques », laquelle est exacte ?",
    "choices": [
      {
        "content": "Chaque chromosome interphasique occupe préférentiellement un territoire nucléaire.",
        "correct": true,
        "explanation": "Les chromosomes ne sont pas totalement mélangés au hasard."
      },
      {
        "content": "En interphase, tous les chromosomes sont uniformément mélangés sans organisation spatiale.",
        "correct": false,
        "explanation": "Ils occupent des territoires préférentiels."
      },
      {
        "content": "Un territoire chromosomique est une membrane entourant un chromosome.",
        "correct": false,
        "explanation": "Il s’agit d’un volume préférentiel, sans membrane propre."
      },
      {
        "content": "La FISH détruit nécessairement la séquence d’ADN qu’elle détecte.",
        "correct": false,
        "explanation": "Elle utilise des sondes complémentaires pour localiser des séquences."
      },
      {
        "content": "Les territoires chromosomiques n’existent que pendant la mitose.",
        "correct": false,
        "explanation": "Ils sont particulièrement étudiés dans le noyau interphasique."
      }
    ],
    "explanation": "En interphase, chaque chromosome occupe préférentiellement un territoire nucléaire distinct, tout en conservant des interfaces et interactions avec d’autres régions du génome."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Sur le thème « Nucléole », sélectionnez les affirmations exactes.",
    "choices": [
      {
        "content": "Les sous-unités ribosomales sont ensuite exportées séparément vers le cytoplasme.",
        "correct": true,
        "explanation": "Elles terminent leur maturation avant de participer à la traduction."
      },
      {
        "content": "Le nucléole est le lieu principal de la traduction des protéines cytosoliques.",
        "correct": false,
        "explanation": "La traduction a lieu sur les ribosomes du cytoplasme ou du RER."
      },
      {
        "content": "Le nucléole n’est pas entouré d’une membrane.",
        "correct": true,
        "explanation": "Il s’agit d’un domaine nucléaire formé par auto-organisation de macromolécules."
      },
      {
        "content": "Les chromosomes ne contribuent jamais à l’organisation du nucléole.",
        "correct": false,
        "explanation": "Les régions organisatrices nucléolaires contenant l’ADNr participent à sa formation."
      },
      {
        "content": "L’assemblage précoce des sous-unités ribosomales se déroule dans le nucléole.",
        "correct": true,
        "explanation": "Les ARNr s’associent à des protéines ribosomales importées."
      }
    ],
    "explanation": "Le nucléole est un domaine nucléaire non membranaire organisé autour de régions portant les gènes ribosomaux ; il assure la transcription et la maturation d’une grande partie des ARNr ainsi que l’assemblage précoce des sous-unités ribosomales."
  },
  {
    "order": 112,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur « ADNr et ARNr », laquelle est exacte ?",
    "choices": [
      {
        "content": "Les gènes ribosomaux n’existent qu’en un seul exemplaire par cellule humaine.",
        "correct": false,
        "explanation": "Ils sont présents en répétitions multicopies."
      },
      {
        "content": "Le pré-ARNr 45S donne notamment les ARNr 18S, 5,8S et 28S.",
        "correct": true,
        "explanation": "Ces ARNr sont produits par clivages et modifications du précurseur."
      },
      {
        "content": "Le précurseur 45S donne l’ARNr 5S comme unique produit.",
        "correct": false,
        "explanation": "Il donne 18S, 5,8S et 28S ; le 5S est transcrit séparément."
      },
      {
        "content": "L’ADNr est situé exclusivement dans les mitochondries.",
        "correct": false,
        "explanation": "Les gènes ribosomaux nucléaires sont portés par des chromosomes nucléaires."
      },
      {
        "content": "L’ARN polymérase II produit directement tous les ARNr du ribosome.",
        "correct": false,
        "explanation": "Pol I transcrit le 45S et Pol III le 5S."
      }
    ],
    "explanation": "Chez l’humain, les gènes ribosomaux 45S sont regroupés en répétitions sur les bras courts des chromosomes acrocentriques ; l’ARN polymérase I produit un précurseur donnant les ARNr 18S, 5,8S et 28S, tandis que le 5S est transcrit par l’ARN polymérase III hors du nucléole."
  },
  {
    "order": 113,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sur le thème « Biogenèse des sous-unités ribosomales », sélectionnez les affirmations exactes.",
    "choices": [
      {
        "content": "Les protéines ribosomales sont synthétisées dans le cytoplasme.",
        "correct": true,
        "explanation": "Comme la plupart des protéines nucléaires, elles sont traduites sur des ribosomes cytosoliques."
      },
      {
        "content": "Les protéines ribosomales sont synthétisées exclusivement dans le nucléole.",
        "correct": false,
        "explanation": "Elles sont traduites dans le cytoplasme."
      },
      {
        "content": "Les protéines ribosomales sont ensuite importées dans le noyau et le nucléole.",
        "correct": true,
        "explanation": "Elles y rejoignent les ARNr en cours de maturation."
      },
      {
        "content": "Les pré-sous-unités ribosomales sont exportées par les pores nucléaires.",
        "correct": true,
        "explanation": "Petite et grande sous-unités quittent le noyau séparément."
      },
      {
        "content": "La traduction débute après l’assemblage fonctionnel des sous-unités dans le cytoplasme.",
        "correct": true,
        "explanation": "Les sous-unités s’associent sur un ARNm lors de l’initiation de la traduction."
      }
    ],
    "explanation": "Les protéines ribosomales sont synthétisées dans le cytoplasme puis importées dans le noyau ; elles s’associent aux ARNr pour former des pré-sous-unités, qui sont exportées vers le cytoplasme."
  },
  {
    "order": 114,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel domaine nucléaire non membranaire est dédié à la biogenèse ribosomale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "nucléole",
        "nucleole"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le nucléole est un domaine nucléaire non membranaire consacré à la transcription et à la maturation d’une grande partie des ARNr et à l’assemblage précoce des sous-unités ribosomales."
  },
  {
    "order": 115,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Concernant « Organisation générale du noyau », cinq affirmations sont exactes : sélectionnez-les.",
    "choices": [
      {
        "content": "Le noyau contient la quasi-totalité de l’information génétique d’une cellule humaine nucléée.",
        "correct": true,
        "explanation": "Une petite fraction du génome cellulaire se trouve dans les mitochondries."
      },
      {
        "content": "La membrane externe peut porter des ribosomes sur sa face cytosolique.",
        "correct": true,
        "explanation": "Elle est en continuité avec le RER."
      },
      {
        "content": "Le noyau est délimité par une enveloppe nucléaire constituée de deux membranes.",
        "correct": true,
        "explanation": "L’enveloppe nucléaire possède une membrane interne et une membrane externe."
      },
      {
        "content": "La membrane externe est totalement indépendante du réticulum endoplasmique.",
        "correct": false,
        "explanation": "Elle est continue avec le RE."
      },
      {
        "content": "L’ADN mitochondrial est normalement inclus dans le noyau.",
        "correct": false,
        "explanation": "L’ADN mitochondrial est localisé dans les mitochondries."
      },
      {
        "content": "L’espace périnucléaire est situé entre les membranes interne et externe de l’enveloppe nucléaire.",
        "correct": true,
        "explanation": "Il sépare les deux membranes nucléaires."
      },
      {
        "content": "Le volume interne délimité par l’enveloppe nucléaire est le nucléoplasme.",
        "correct": true,
        "explanation": "Le nucléoplasme correspond au compartiment interne du noyau."
      },
      {
        "content": "Le nucléoplasme est un compartiment cytoplasmique extérieur à l’enveloppe nucléaire.",
        "correct": false,
        "explanation": "Le nucléoplasme est à l’intérieur du noyau."
      },
      {
        "content": "Le noyau est limité par une seule bicouche lipidique.",
        "correct": false,
        "explanation": "L’enveloppe nucléaire est formée de deux membranes."
      },
      {
        "content": "L’espace périnucléaire est identique au nucléoplasme.",
        "correct": false,
        "explanation": "Le nucléoplasme est à l’intérieur de la membrane interne ; l’espace périnucléaire se trouve entre les deux membranes."
      }
    ],
    "explanation": "Le noyau délimite le nucléoplasme, contient l’essentiel du génome nucléaire sous forme de chromatine et comporte des domaines non membranaires comme les nucléoles. L’enveloppe nucléaire comprend deux membranes séparées par l’espace périnucléaire et percées de complexes de pores nucléaires ; sa membrane externe est continue avec le RE."
  },
  {
    "order": 116,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le thème « Structure de l’enveloppe nucléaire » ?",
    "choices": [
      {
        "content": "L’espace périnucléaire est identique au nucléoplasme.",
        "correct": false,
        "explanation": "Le nucléoplasme est à l’intérieur de la membrane interne ; l’espace périnucléaire se trouve entre les deux membranes."
      },
      {
        "content": "La lamina est située sur la face cytosolique de la membrane externe.",
        "correct": false,
        "explanation": "Elle se trouve du côté nucléoplasmique de la membrane interne."
      },
      {
        "content": "Les pores nucléaires sont des ruptures non protéiques de l’enveloppe.",
        "correct": false,
        "explanation": "Ils sont occupés par de grands complexes protéiques de nucléoporines."
      },
      {
        "content": "Les complexes de pores traversent les deux membranes au niveau de leurs zones de fusion.",
        "correct": true,
        "explanation": "Le pore nucléaire établit une continuité contrôlée entre nucléoplasme et cytosol."
      },
      {
        "content": "La lamina est accolée à la face nucléoplasmique de la membrane interne.",
        "correct": true,
        "explanation": "La lamina nucléaire forme un réseau sous-jacent à la membrane interne."
      }
    ],
    "explanation": "L’enveloppe nucléaire comprend deux membranes séparées par l’espace périnucléaire et percées de complexes de pores nucléaires ; sa membrane externe est continue avec le RE."
  },
  {
    "order": 117,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur « Signal de localisation nucléaire », laquelle est exacte ?",
    "choices": [
      {
        "content": "Un NLS fonctionnel est obligatoirement excisé après import.",
        "correct": false,
        "explanation": "Il est généralement conservé, ce qui permet des cycles d’import répétés."
      },
      {
        "content": "Les NLS sont reconnus directement par l’ADN chromosomique sans récepteur de transport.",
        "correct": false,
        "explanation": "Des récepteurs d’import, notamment les importines, participent à la reconnaissance et au transport."
      },
      {
        "content": "Une mutation d’un NLS peut empêcher l’accumulation nucléaire d’une protéine.",
        "correct": true,
        "explanation": "La reconnaissance par la machinerie d’import peut être compromise."
      },
      {
        "content": "Tout NLS humain est constitué exactement de cinq acides aminés identiques.",
        "correct": false,
        "explanation": "Les NLS ont des séquences et des organisations variables."
      },
      {
        "content": "Le NLS est un lipide membranaire du pore nucléaire.",
        "correct": false,
        "explanation": "Il s’agit d’un motif porté par une protéine cargo."
      }
    ],
    "explanation": "Un NLS est un motif d’adressage reconnu par la machinerie d’import nucléaire ; les NLS classiques sont souvent riches en lysine et arginine et ne sont généralement pas excisés après import."
  },
  {
    "order": 118,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel réseau de filaments intermédiaires tapisse la membrane nucléaire interne ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "lamina",
        "lamina nucléaire",
        "lamina nucleaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La lamina est un réseau de lamines, filaments intermédiaires de type V, appliqué contre la face nucléoplasmique de la membrane interne."
  },
  {
    "order": 119,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment nomme-t-on la forme de chromatine généralement la plus accessible à la transcription ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "euchromatine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’euchromatine est en moyenne moins compacte et plus accessible à la machinerie transcriptionnelle que l’hétérochromatine."
  },
  {
    "order": 120,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le thème « Complexe du pore nucléaire » ?",
    "choices": [
      {
        "content": "L’architecture globale du pore présente une symétrie d’ordre huit.",
        "correct": true,
        "explanation": "Le complexe du pore possède une organisation annulaire approximativement octogonale."
      },
      {
        "content": "Le pore nucléaire coupe physiquement l’ADN pour permettre son export.",
        "correct": false,
        "explanation": "L’ADN chromosomique n’est pas exporté de cette manière."
      },
      {
        "content": "Le canal central participe au transport sélectif des macromolécules.",
        "correct": true,
        "explanation": "Les cargos récepteur-dépendants traversent la barrière de nucléoporines FG du canal central."
      },
      {
        "content": "Les pores nucléaires sont composés uniquement de lipides.",
        "correct": false,
        "explanation": "Ce sont de grands complexes protéiques insérés dans l’enveloppe."
      },
      {
        "content": "Le complexe du pore nucléaire est constitué de nombreuses protéines appelées nucléoporines.",
        "correct": true,
        "explanation": "Les nucléoporines s’assemblent en un complexe macromoléculaire traversant l’enveloppe."
      }
    ],
    "explanation": "Le complexe du pore nucléaire est un assemblage de nucléoporines à symétrie approximativement octogonale qui contrôle des transports passifs et récepteur-dépendants dans les deux sens."
  },
  {
    "order": 121,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel terme désigne un domaine chromatinien associé à la lamina ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "LAD"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Un LAD est un domaine chromatinien associé à la lamina nucléaire, souvent lié à une chromatine relativement peu active."
  },
  {
    "order": 122,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le thème « Lamina et lamines », quelles propositions sont incorrectes ?",
    "choices": [
      {
        "content": "Les lamines appartiennent à la famille des filaments intermédiaires de type V.",
        "correct": false,
        "explanation": "Cette affirmation est exacte biologiquement ; elle ne doit donc pas être sélectionnée ici. Les lamines sont les filaments intermédiaires nucléaires."
      },
      {
        "content": "La lamina se trouve dans la lumière du réticulum endoplasmique.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. Elle est du côté nucléoplasmique de la membrane interne."
      },
      {
        "content": "Les lamines sont des microtubules constitués de tubuline.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. Elles appartiennent aux filaments intermédiaires."
      },
      {
        "content": "La lamina est constituée de laminine.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. La laminine est une glycoprotéine extracellulaire ; la lamina nucléaire est faite de lamines."
      },
      {
        "content": "La lamina n’a aucun lien avec l’organisation de la chromatine.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. Elle interagit avec des domaines chromatinien et contribue à l’architecture nucléaire."
      }
    ],
    "explanation": "La lamina est un réseau de filaments intermédiaires de type V, constitué de lamines A/C et B, sous la membrane nucléaire interne ; elle participe à la forme nucléaire, à l’organisation des pores et à l’ancrage de domaines chromatinien."
  }
];

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    "order": 10,
    "slug": "noyau-synthese-1",
    "title": "Synthèse du noyau",
    "description": "Réviser transversalement le chapitre.",
    "stage": "PRACTICE",
    "sectionOrder": 5,
    "questionOrders": [
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110
    ]
  },
  {
    "order": 11,
    "slug": "noyau-synthese-2",
    "title": "Maîtriser le noyau",
    "description": "Résoudre des questions intégratives de fin de chapitre.",
    "stage": "MASTER",
    "sectionOrder": 5,
    "questionOrders": [
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122
    ]
  }
];
