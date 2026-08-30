import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch5 — Synthèse — Système endomembranaire (2) */
export const UE14_BIOCELL_CH5_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le réticulum endoplasmique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Sa membrane est continue avec la membrane externe de l'enveloppe nucléaire.",
        "correct": true,
        "explanation": "Cette continuité anatomique fait du RE et de l'enveloppe nucléaire un même système membranaire continu."
      },
      {
        "content": "Le Golgi est physiquement continu avec la lumière du RE comme une seule citerne.",
        "correct": false,
        "explanation": "RE et Golgi sont des compartiments distincts reliés par trafic membranaire."
      },
      {
        "content": "Le REL ne porte pas de ribosomes associés à sa surface cytosolique.",
        "correct": true,
        "explanation": "Il est particulièrement développé dans certaines cellules spécialisées dans le métabolisme lipidique ou la détoxification."
      },
      {
        "content": "Le RE participe à la synthèse de protéines, de lipides, au contrôle qualité et au stockage intracellulaire de Ca2+.",
        "correct": true,
        "explanation": "Ses fonctions dépendent du type cellulaire et de la région lisse ou rugueuse."
      },
      {
        "content": "Le RER est rugueux parce que des ribosomes sont fixés sur sa face luminale.",
        "correct": false,
        "explanation": "Les ribosomes sont du côté cytosolique."
      }
    ],
    "explanation": "Le RE est un réseau membranaire continu avec l'enveloppe nucléaire externe ; ses domaines rugueux et lisses assurent des fonctions complémentaires."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel complexe reconnaît classiquement un signal d'adressage au RE sur une chaîne naissante ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "SRP",
        "particule de reconnaissance du signal",
        "Signal Recognition Particle"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La SRP cible le ribosome vers son récepteur puis vers Sec61 ; les signaux d'adressage au RE ne se réduisent pas à une séquence universelle de longueur fixe."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur l'insertion des protéines transmembranaires dans le RE, laquelle est correcte ?",
    "choices": [
      {
        "content": "Une protéine multipass ne peut posséder qu'une seule séquence hydrophobe.",
        "correct": false,
        "explanation": "Elle en possède plusieurs."
      },
      {
        "content": "Les protéines membranaires du lysosome sont synthétisées directement dans la membrane lysosomale.",
        "correct": false,
        "explanation": "Elles passent d'abord par le RE puis le Golgi."
      },
      {
        "content": "La face luminale d'une protéine du RE devient cytosolique après exocytose.",
        "correct": false,
        "explanation": "La topologie membranaire est conservée."
      },
      {
        "content": "Les domaines transmembranaires sont nécessairement clivés comme des peptides signaux.",
        "correct": false,
        "explanation": "Beaucoup deviennent des segments permanents de la protéine."
      },
      {
        "content": "Une protéine transmembranaire destinée au Golgi ou à la membrane plasmique est d'abord insérée dans le RE.",
        "correct": true,
        "explanation": "Le RE est la porte d'entrée de la voie sécrétoire pour ces protéines."
      }
    ],
    "explanation": "Les séquences start-transfer/stop-transfer déterminent la topologie des protéines membranaires dans le RE."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la N-glycosylation dans le RE, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le précurseur oligosaccharidique est assemblé sur un lipide porteur de type dolichol dans la membrane du RE.",
        "correct": true,
        "explanation": "Il est ensuite transféré en bloc à la protéine."
      },
      {
        "content": "Le cycle calnexine/calréticuline exploite l'état des N-glycannes pour aider au contrôle qualité des glycoprotéines.",
        "correct": true,
        "explanation": "Le repliement et la glycosylation sont ainsi couplés."
      },
      {
        "content": "La N-glycosylation ajoute des sucres sur l'oxygène d'une sérine uniquement dans le Golgi.",
        "correct": false,
        "explanation": "Cela correspond plutôt à de nombreuses O-glycosylations."
      },
      {
        "content": "La N-glycosylation transfère un oligosaccharide préassemblé sur l'azote d'une asparagine.",
        "correct": true,
        "explanation": "Le motif classique est Asn-X-Ser/Thr, avec X généralement différent de Pro."
      },
      {
        "content": "La N-glycosylation débute dans le RE et les glycannes sont ensuite remaniés dans le RE et le Golgi.",
        "correct": true,
        "explanation": "Elle ne constitue pas une modification exclusivement golgienne."
      }
    ],
    "explanation": "La N-glycosylation débute dans le RE par transfert d'un oligosaccharide préassemblé sur une asparagine."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans quel compartiment a lieu l'attachement du GPI à la protéine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "lumière du réticulum endoplasmique",
        "RE",
        "lumière du RE"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les ancres GPI sont préassemblées dans le RE puis transférées au C-terminus de protéines spécifiques dans la lumière du RE."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur le repliement et le contrôle qualité dans le RE, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Le milieu luminal du RE favorise la formation de ponts disulfure.",
        "correct": true,
        "explanation": "Il est plus oxydant que le cytosol."
      },
      {
        "content": "Le cytosol est plus oxydant que la lumière du RE pour la formation des ponts disulfure.",
        "correct": false,
        "explanation": "La lumière du RE est plus favorable à leur formation."
      },
      {
        "content": "BiP est une protéine de la matrice mitochondriale.",
        "correct": false,
        "explanation": "C'est une chaperonne du RE."
      },
      {
        "content": "La PDI catalyse la formation, la rupture et le réarrangement de ponts disulfure.",
        "correct": true,
        "explanation": "Elle aide à atteindre la configuration correcte."
      },
      {
        "content": "Les ponts disulfure corrects sont créés uniquement au hasard sans catalyse enzymatique.",
        "correct": false,
        "explanation": "Des enzymes comme PDI accélèrent et corrigent ces réactions."
      }
    ],
    "explanation": "PDI, BiP, calnexine et calréticuline participent au repliement et au contrôle qualité dans le RE.",
    "requiredSelectionCount": 2
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les fonctions lipidiques et calciques du RE ?",
    "choices": [
      {
        "content": "Les récepteurs à l'IP3 peuvent libérer du Ca2+ du RE vers le cytosol.",
        "correct": true,
        "explanation": "Le Ca2+ libéré agit comme second messager."
      },
      {
        "content": "Les phospholipides membranaires sont tous synthétisés dans les lysosomes.",
        "correct": false,
        "explanation": "Le RE est un site central de biosynthèse lipidique."
      },
      {
        "content": "Le RE constitue le principal réservoir intracellulaire de Ca2+ dans de nombreuses cellules.",
        "correct": true,
        "explanation": "Le réticulum sarcoplasmique est la forme spécialisée du RE dans les cellules musculaires."
      },
      {
        "content": "Le réticulum sarcoplasmique n'existe que dans les cellules non musculaires.",
        "correct": false,
        "explanation": "Il est spécialisé dans les cellules musculaires."
      },
      {
        "content": "Le stockage du Ca2+ dans le RE a pour objectif principal de contrôler directement la calcémie sanguine.",
        "correct": false,
        "explanation": "Il participe surtout à l'homéostasie et à la signalisation calciques intracellulaires."
      }
    ],
    "explanation": "Le RE assure une grande part de la synthèse lipidique et constitue un réservoir intracellulaire majeur de Ca2+."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement le chargement des peptides sur le CMH I dans le RE ?",
    "choices": [
      {
        "content": "TAP est le translocon qui fait entrer toutes les protéines sécrétées dans le RE.",
        "correct": false,
        "explanation": "Le translocon des protéines naissantes est Sec61."
      },
      {
        "content": "Le CMH I présente les peptides sous forme soluble dans le milieu extracellulaire.",
        "correct": false,
        "explanation": "Le complexe reste membranaire et est reconnu à la surface cellulaire."
      },
      {
        "content": "Le chargement des peptides sur le CMH I implique un complexe comprenant notamment tapasin, calréticuline et ERp57.",
        "correct": true,
        "explanation": "Ce complexe stabilise et sélectionne les complexes peptide-CMH I."
      },
      {
        "content": "Les lymphocytes T CD4+ sont les partenaires spécifiques classiques du CMH I.",
        "correct": false,
        "explanation": "Le CMH I est reconnu par les lymphocytes T CD8+."
      },
      {
        "content": "Les peptides du CMH I sont chargés directement dans le cytosol sur une molécule de CMH I mature.",
        "correct": false,
        "explanation": "Le chargement principal a lieu dans le RE."
      }
    ],
    "explanation": "Les peptides cytosoliques sont générés par le protéasome, transportés par TAP dans le RE, chargés sur le CMH I puis présentés aux T CD8+ à la surface."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les fonctions spécialisées du REL, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "La glucuronidation diminue toujours l'hydrosolubilité des molécules.",
        "correct": false,
        "explanation": "Elle l'augmente généralement."
      },
      {
        "content": "La glucuronidation est une réaction de conjugaison importante pour augmenter l'hydrosolubilité de nombreuses molécules.",
        "correct": true,
        "explanation": "Des UDP-glucuronosyltransférases sont associées au RE."
      },
      {
        "content": "Le système glucose-6-phosphatase du RE contribue à la production de glucose libre dans des tissus comme le foie et le rein.",
        "correct": true,
        "explanation": "Il intervient dans la glycogénolyse et la néoglucogenèse."
      },
      {
        "content": "Le système glucose-6-phosphatase est uniformément exprimé dans tous les tissus.",
        "correct": false,
        "explanation": "Il est particulièrement important dans le foie, le rein et l'intestin."
      },
      {
        "content": "Les cytochromes P450 du RE participent à l'oxydation de nombreux xénobiotiques.",
        "correct": true,
        "explanation": "Cette biotransformation peut faciliter l'élimination ou parfois activer un composé."
      }
    ],
    "explanation": "Le REL assure des fonctions spécialisées de stéroïdogenèse, détoxification et métabolisme glucidique selon le type cellulaire."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelles sont les trois grandes branches de l'UPR chez les mammifères ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "IRE1, PERK et ATF6",
        "IRE1 PERK ATF6"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'UPR coordonne IRE1, PERK et ATF6 pour adapter la capacité de repliement, la traduction et l'expression génique au stress du RE."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le réticulum endoplasmique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Sa membrane est continue avec la membrane externe de l'enveloppe nucléaire.",
        "correct": true,
        "explanation": "Cette continuité anatomique fait du RE et de l'enveloppe nucléaire un même système membranaire continu."
      },
      {
        "content": "Le RER porte des ribosomes engagés dans la synthèse de protéines destinées au système sécrétoire.",
        "correct": true,
        "explanation": "Les ribosomes se fixent au RE lorsqu'une chaîne naissante porte un signal d'adressage approprié."
      },
      {
        "content": "Le REL ne porte pas de ribosomes associés à sa surface cytosolique.",
        "correct": true,
        "explanation": "Il est particulièrement développé dans certaines cellules spécialisées dans le métabolisme lipidique ou la détoxification."
      },
      {
        "content": "Le RE participe à la synthèse de protéines, de lipides, au contrôle qualité et au stockage intracellulaire de Ca2+.",
        "correct": true,
        "explanation": "Ses fonctions dépendent du type cellulaire et de la région lisse ou rugueuse."
      },
      {
        "content": "Toutes les protéines cellulaires transitent obligatoirement par le RE.",
        "correct": false,
        "explanation": "De nombreuses protéines restent cytosoliques ou sont adressées directement au noyau, aux mitochondries ou aux peroxysomes."
      }
    ],
    "explanation": "Le RE est un réseau membranaire continu avec l'enveloppe nucléaire externe ; ses domaines rugueux et lisses assurent des fonctions complémentaires."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel canal membranaire assure la translocation de nombreuses chaînes naissantes dans le RE ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Sec61",
        "translocon Sec61"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La SRP cible le ribosome vers son récepteur puis vers Sec61 ; les signaux d'adressage au RE ne se réduisent pas à une séquence universelle de longueur fixe."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant l'insertion des protéines transmembranaires dans le RE, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "La face luminale d'une protéine du RE devient cytosolique après exocytose.",
        "correct": false,
        "explanation": "La topologie membranaire est conservée."
      },
      {
        "content": "Les domaines transmembranaires sont nécessairement clivés comme des peptides signaux.",
        "correct": false,
        "explanation": "Beaucoup deviennent des segments permanents de la protéine."
      },
      {
        "content": "Les protéines multipass utilisent plusieurs séquences de démarrage et d'arrêt de transfert.",
        "correct": true,
        "explanation": "Le translocon peut relâcher latéralement les segments hydrophobes dans la bicouche."
      },
      {
        "content": "Des séquences hydrophobes peuvent agir comme signaux de début ou d'arrêt de transfert.",
        "correct": true,
        "explanation": "Elles déterminent l'insertion et l'orientation de segments transmembranaires."
      },
      {
        "content": "Une protéine multipass ne peut posséder qu'une seule séquence hydrophobe.",
        "correct": false,
        "explanation": "Elle en possède plusieurs."
      }
    ],
    "explanation": "Les séquences start-transfer/stop-transfer déterminent la topologie des protéines membranaires dans le RE.",
    "requiredSelectionCount": 2
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement la N-glycosylation dans le RE ?",
    "choices": [
      {
        "content": "La N-glycosylation débute dans le RE et les glycannes sont ensuite remaniés dans le RE et le Golgi.",
        "correct": true,
        "explanation": "Elle ne constitue pas une modification exclusivement golgienne."
      },
      {
        "content": "Elle se produit exclusivement sur des protéines cytosoliques libres.",
        "correct": false,
        "explanation": "Elle concerne des protéines engagées dans la voie sécrétoire."
      },
      {
        "content": "Le précurseur oligosaccharidique est assemblé sur un lipide porteur de type dolichol dans la membrane du RE.",
        "correct": true,
        "explanation": "Il est ensuite transféré en bloc à la protéine."
      },
      {
        "content": "Tous les motifs Asn-X-Ser/Thr d'une protéine sont nécessairement glycosylés.",
        "correct": false,
        "explanation": "L'accessibilité et le contexte structural comptent."
      },
      {
        "content": "Le dolichol est un ribosome spécialisé.",
        "correct": false,
        "explanation": "C'est un lipide porteur membranaire."
      }
    ],
    "explanation": "La N-glycosylation débute dans le RE par transfert d'un oligosaccharide préassemblé sur une asparagine."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement l'ancrage GPI ?",
    "choices": [
      {
        "content": "Le GPI est un acide nucléique de signalisation.",
        "correct": false,
        "explanation": "C'est un glycolipide complexe."
      },
      {
        "content": "Le GPI est ajouté dans le cytosol sur l'extrémité N-terminale de toutes les protéines membranaires.",
        "correct": false,
        "explanation": "L'ajout se fait dans la lumière du RE sur un site C-terminal de protéines spécifiques."
      },
      {
        "content": "Une protéine GPI-ancrée présente son domaine protéique principal du côté cytosolique de la membrane plasmique.",
        "correct": false,
        "explanation": "Il est exposé du côté extracellulaire."
      },
      {
        "content": "L'ancrage GPI peut conférer une mobilité latérale importante et permettre un clivage enzymatique de l'ancre dans certains contextes.",
        "correct": true,
        "explanation": "Il remplace un segment transmembranaire C-terminal de certaines protéines."
      },
      {
        "content": "Toutes les protéines transmembranaires sont converties en protéines GPI-ancrées.",
        "correct": false,
        "explanation": "Seule une sous-population possède le signal approprié."
      }
    ],
    "explanation": "Les ancres GPI sont préassemblées dans le RE puis transférées au C-terminus de protéines spécifiques dans la lumière du RE."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le repliement et le contrôle qualité dans le RE, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "BiP est une chaperonne luminale de la famille Hsp70.",
        "correct": true,
        "explanation": "Elle participe au repliement et au contrôle qualité."
      },
      {
        "content": "BiP est une protéine de la matrice mitochondriale.",
        "correct": false,
        "explanation": "C'est une chaperonne du RE."
      },
      {
        "content": "Le cytosol est plus oxydant que la lumière du RE pour la formation des ponts disulfure.",
        "correct": false,
        "explanation": "La lumière du RE est plus favorable à leur formation."
      },
      {
        "content": "Calnexine et calréticuline assistent le repliement de nombreuses glycoprotéines N-glycosylées.",
        "correct": true,
        "explanation": "Elles reconnaissent des glycannes spécifiques pendant le cycle de contrôle qualité."
      },
      {
        "content": "Le milieu luminal du RE favorise la formation de ponts disulfure.",
        "correct": true,
        "explanation": "Il est plus oxydant que le cytosol."
      }
    ],
    "explanation": "PDI, BiP, calnexine et calréticuline participent au repliement et au contrôle qualité dans le RE."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle pompe ATP-dépendante accumule le Ca2+ dans la lumière du RE ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "SERCA",
        "Ca2+-ATPase du RE",
        "pompe SERCA"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le RE assure une grande part de la synthèse lipidique et constitue un réservoir intracellulaire majeur de Ca2+."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Les peptides du CMH I sont chargés directement dans le cytosol sur une molécule de CMH I mature.",
        "correct": false,
        "explanation": "Le chargement principal a lieu dans le RE."
      },
      {
        "content": "La face trans est l'entrée principale des protéines venant du RE.",
        "correct": false,
        "explanation": "L'entrée se fait principalement par le côté cis."
      },
      {
        "content": "Le TGN est synonyme de l'ensemble des trois citernes cis, médiane et trans.",
        "correct": false,
        "explanation": "C'est un réseau spécialisé du côté trans."
      },
      {
        "content": "Le complexe peptide-CMH I quitte ensuite le RE, traverse le Golgi et atteint la surface cellulaire pour être reconnu par des lymphocytes T CD8+.",
        "correct": true,
        "explanation": "La présentation a lieu à la membrane plasmique, pas dans le milieu extracellulaire libre."
      },
      {
        "content": "Le chargement des peptides sur le CMH I implique un complexe comprenant notamment tapasin, calréticuline et ERp57.",
        "correct": true,
        "explanation": "Ce complexe stabilise et sélectionne les complexes peptide-CMH I."
      },
      {
        "content": "TAP1/TAP2 transportent des peptides du cytosol vers la lumière du RE en utilisant l'ATP.",
        "correct": true,
        "explanation": "TAP est un transporteur ABC associé au traitement antigénique."
      },
      {
        "content": "L'appareil de Golgi est constitué de citernes empilées formant des dictyosomes.",
        "correct": true,
        "explanation": "Les citernes présentent une polarité structurale et fonctionnelle."
      },
      {
        "content": "Le CMH I présente les peptides sous forme soluble dans le milieu extracellulaire.",
        "correct": false,
        "explanation": "Le complexe reste membranaire et est reconnu à la surface cellulaire."
      },
      {
        "content": "Les citernes médianes assurent une partie importante du remaniement des glycannes.",
        "correct": true,
        "explanation": "Des enzymes différentes sont distribuées selon les compartiments."
      },
      {
        "content": "Le Golgi est une simple extension continue de la lumière du RE.",
        "correct": false,
        "explanation": "Il s'agit d'un organite distinct relié au RE par trafic membranaire."
      }
    ],
    "explanation": "Les peptides cytosoliques sont générés par le protéasome, transportés par TAP dans le RE, chargés sur le CMH I puis présentés aux T CD8+ à la surface. Le Golgi est polarisé de cis vers trans et son TGN constitue une station majeure de tri vers les destinations cellulaires."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les fonctions spécialisées du REL, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le système glucose-6-phosphatase du RE contribue à la production de glucose libre dans des tissus comme le foie et le rein.",
        "correct": true,
        "explanation": "Il intervient dans la glycogénolyse et la néoglucogenèse."
      },
      {
        "content": "Le REL est abondant dans certaines cellules stéroïdogènes.",
        "correct": true,
        "explanation": "Des enzymes du REL coopèrent avec les mitochondries pour la synthèse des hormones stéroïdes."
      },
      {
        "content": "Les cytochromes P450 du RE participent à l'oxydation de nombreux xénobiotiques.",
        "correct": true,
        "explanation": "Cette biotransformation peut faciliter l'élimination ou parfois activer un composé."
      },
      {
        "content": "La glucuronidation diminue toujours l'hydrosolubilité des molécules.",
        "correct": false,
        "explanation": "Elle l'augmente généralement."
      },
      {
        "content": "La glucuronidation est une réaction de conjugaison importante pour augmenter l'hydrosolubilité de nombreuses molécules.",
        "correct": true,
        "explanation": "Des UDP-glucuronosyltransférases sont associées au RE."
      }
    ],
    "explanation": "Le REL assure des fonctions spécialisées de stéroïdogenèse, détoxification et métabolisme glucidique selon le type cellulaire."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelles sont les trois grandes branches de l'UPR chez les mammifères ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "IRE1, PERK et ATF6",
        "IRE1 PERK ATF6"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'UPR coordonne IRE1, PERK et ATF6 pour adapter la capacité de repliement, la traduction et l'expression génique au stress du RE."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur l'organisation de l'appareil de Golgi, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "La face trans est l'entrée principale des protéines venant du RE.",
        "correct": false,
        "explanation": "L'entrée se fait principalement par le côté cis."
      },
      {
        "content": "Le TGN est synonyme de l'ensemble des trois citernes cis, médiane et trans.",
        "correct": false,
        "explanation": "C'est un réseau spécialisé du côté trans."
      },
      {
        "content": "La face trans et le réseau trans-Golgien participent au tri vers différentes destinations.",
        "correct": true,
        "explanation": "Le TGN est une station majeure de tri."
      },
      {
        "content": "Les citernes médianes assurent une partie importante du remaniement des glycannes.",
        "correct": true,
        "explanation": "Des enzymes différentes sont distribuées selon les compartiments."
      },
      {
        "content": "Le Golgi est une simple extension continue de la lumière du RE.",
        "correct": false,
        "explanation": "Il s'agit d'un organite distinct relié au RE par trafic membranaire."
      }
    ],
    "explanation": "Le Golgi est polarisé de cis vers trans et son TGN constitue une station majeure de tri vers les destinations cellulaires.",
    "requiredSelectionCount": 2
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Citez un nucléotide-sucre utilisé comme donneur par des glycosyltransférases.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "UDP-galactose",
        "UDP-Gal",
        "UDP-GlcNAc",
        "CMP-acide sialique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le Golgi remanie les N-glycannes et initie de nombreuses O-glycosylations grâce à une distribution ordonnée d'enzymes."
  }
];
