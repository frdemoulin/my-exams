import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch5 — Section A — Réticulum endoplasmique : adressage, maturation et fonctions */
export const UE14_BIOCELL_CH5_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le réticulum endoplasmique, lesquelles sont correctes ?",
    "choices": [
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
        "content": "Toutes les protéines cellulaires transitent obligatoirement par le RE.",
        "correct": false,
        "explanation": "De nombreuses protéines restent cytosoliques ou sont adressées directement au noyau, aux mitochondries ou aux peroxysomes."
      },
      {
        "content": "Le RER est rugueux parce que des ribosomes sont fixés sur sa face luminale.",
        "correct": false,
        "explanation": "Les ribosomes sont du côté cytosolique."
      },
      {
        "content": "Le RE participe à la synthèse de protéines, de lipides, au contrôle qualité et au stockage intracellulaire de Ca2+.",
        "correct": true,
        "explanation": "Ses fonctions dépendent du type cellulaire et de la région lisse ou rugueuse."
      }
    ],
    "explanation": "Le RE est un réseau membranaire continu avec l'enveloppe nucléaire externe ; ses domaines rugueux et lisses assurent des fonctions complémentaires."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant l'adressage cotraductionnel au RE, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Le translocon principal du RE est un canal appelé TAP.",
        "correct": false,
        "explanation": "Le canal de translocation est Sec61 ; TAP transporte des peptides antigéniques pour le CMH I."
      },
      {
        "content": "Le peptide signal N-terminal de nombreuses protéines solubles est clivé par une signal peptidase.",
        "correct": true,
        "explanation": "Il n'est pas conservé dans la protéine mature."
      },
      {
        "content": "SRP signifie « Signal de Reconnaissance Protéique ».",
        "correct": false,
        "explanation": "L'appellation correcte est Signal Recognition Particle, particule de reconnaissance du signal."
      },
      {
        "content": "Toute protéine destinée au RE possède exactement 20 acides aminés hydrophobes en N-terminal.",
        "correct": false,
        "explanation": "Les signaux varient en longueur, position et architecture."
      },
      {
        "content": "La traduction est obligatoirement terminée avant que le ribosome rejoigne le RE chez les mammifères.",
        "correct": false,
        "explanation": "La voie cotraductionnelle est prédominante pour de nombreuses protéines sécrétées."
      }
    ],
    "explanation": "La SRP cible le ribosome vers son récepteur puis vers Sec61 ; les signaux d'adressage au RE ne se réduisent pas à une séquence universelle de longueur fixe."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "La topologie d'une protéine membranaire acquise dans le RE est-elle globalement conservée jusqu'à la membrane plasmique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "oui",
        "oui, la topologie est conservée"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les séquences start-transfer/stop-transfer déterminent la topologie des protéines membranaires dans le RE."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la N-glycosylation dans le RE, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Le cycle calnexine/calréticuline exploite l'état des N-glycannes pour aider au contrôle qualité des glycoprotéines.",
        "correct": true,
        "explanation": "Le repliement et la glycosylation sont ainsi couplés."
      },
      {
        "content": "Le dolichol est un ribosome spécialisé.",
        "correct": false,
        "explanation": "C'est un lipide porteur membranaire."
      },
      {
        "content": "Le précurseur oligosaccharidique est assemblé sur un lipide porteur de type dolichol dans la membrane du RE.",
        "correct": true,
        "explanation": "Il est ensuite transféré en bloc à la protéine."
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
      }
    ],
    "explanation": "La N-glycosylation débute dans le RE par transfert d'un oligosaccharide préassemblé sur une asparagine."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant l'ancrage GPI.",
    "choices": [
      {
        "content": "Le GPI est un acide nucléique de signalisation.",
        "correct": false,
        "explanation": "C'est un glycolipide complexe."
      },
      {
        "content": "Un précurseur GPI est assemblé dans la membrane du RE.",
        "correct": true,
        "explanation": "Sa biosynthèse est un processus membranaire complexe et non un simple lipide libre venant du cytosol."
      },
      {
        "content": "Le GPI est ajouté dans le cytosol sur l'extrémité N-terminale de toutes les protéines membranaires.",
        "correct": false,
        "explanation": "L'ajout se fait dans la lumière du RE sur un site C-terminal de protéines spécifiques."
      },
      {
        "content": "Le GPI est transféré à l'extrémité C-terminale d'une protéine dans la lumière du RE.",
        "correct": true,
        "explanation": "Le signal C-terminal d'addition du GPI est clivé au cours de la réaction."
      },
      {
        "content": "Toutes les protéines transmembranaires sont converties en protéines GPI-ancrées.",
        "correct": false,
        "explanation": "Seule une sous-population possède le signal approprié."
      }
    ],
    "explanation": "Les ancres GPI sont préassemblées dans le RE puis transférées au C-terminus de protéines spécifiques dans la lumière du RE.",
    "requiredSelectionCount": 2
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le repliement et le contrôle qualité dans le RE, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le milieu luminal du RE favorise la formation de ponts disulfure.",
        "correct": true,
        "explanation": "Il est plus oxydant que le cytosol."
      },
      {
        "content": "Calnexine et calréticuline assistent le repliement de nombreuses glycoprotéines N-glycosylées.",
        "correct": true,
        "explanation": "Elles reconnaissent des glycannes spécifiques pendant le cycle de contrôle qualité."
      },
      {
        "content": "BiP est une chaperonne luminale de la famille Hsp70.",
        "correct": true,
        "explanation": "Elle participe au repliement et au contrôle qualité."
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
    "explanation": "PDI, BiP, calnexine et calréticuline participent au repliement et au contrôle qualité dans le RE."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant les fonctions lipidiques et calciques du RE, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Le RE est un site majeur de synthèse de phospholipides membranaires.",
        "correct": true,
        "explanation": "De nombreux lipides sont synthétisés sur le feuillet cytosolique puis redistribués entre feuillets et organites."
      },
      {
        "content": "Les phospholipides membranaires sont tous synthétisés dans les lysosomes.",
        "correct": false,
        "explanation": "Le RE est un site central de biosynthèse lipidique."
      },
      {
        "content": "SERCA hydrolyse le GTP pour expulser le Ca2+ hors de la cellule.",
        "correct": false,
        "explanation": "Elle hydrolyse l'ATP pour pomper le Ca2+ dans le RE."
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
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel transporteur fait entrer de nombreux peptides antigéniques cytosoliques dans le RE ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "TAP",
        "TAP1/TAP2"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les peptides cytosoliques sont générés par le protéasome, transportés par TAP dans le RE, chargés sur le CMH I puis présentés aux T CD8+ à la surface."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "SRP signifie « Signal de Reconnaissance Protéique ».",
        "correct": false,
        "explanation": "L'appellation correcte est Signal Recognition Particle, particule de reconnaissance du signal."
      },
      {
        "content": "La prégnénolone est synthétisée exclusivement dans le REL à partir du cholestérol.",
        "correct": false,
        "explanation": "La première conversion du cholestérol en prégnénolone se déroule dans la mitochondrie via CYP11A1."
      },
      {
        "content": "La traduction est obligatoirement terminée avant que le ribosome rejoigne le RE chez les mammifères.",
        "correct": false,
        "explanation": "La voie cotraductionnelle est prédominante pour de nombreuses protéines sécrétées."
      },
      {
        "content": "Toutes les cellules possèdent la même abondance de REL et la même activité P450.",
        "correct": false,
        "explanation": "Ces fonctions varient selon les tissus."
      },
      {
        "content": "Le peptide signal N-terminal de nombreuses protéines solubles est clivé par une signal peptidase.",
        "correct": true,
        "explanation": "Il n'est pas conservé dans la protéine mature."
      },
      {
        "content": "Toute protéine destinée au RE possède exactement 20 acides aminés hydrophobes en N-terminal.",
        "correct": false,
        "explanation": "Les signaux varient en longueur, position et architecture."
      },
      {
        "content": "La glucuronidation est une réaction de conjugaison importante pour augmenter l'hydrosolubilité de nombreuses molécules.",
        "correct": true,
        "explanation": "Des UDP-glucuronosyltransférases sont associées au RE."
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
        "content": "Le système glucose-6-phosphatase du RE contribue à la production de glucose libre dans des tissus comme le foie et le rein.",
        "correct": true,
        "explanation": "Il intervient dans la glycogénolyse et la néoglucogenèse."
      }
    ],
    "explanation": "Le REL assure des fonctions spécialisées de stéroïdogenèse, détoxification et métabolisme glucidique selon le type cellulaire. La SRP cible le ribosome vers son récepteur puis vers Sec61 ; les signaux d'adressage au RE ne se réduisent pas à une séquence universelle de longueur fixe."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la réponse aux protéines mal repliées du RE, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "IRE1, PERK et ATF6 constituent les trois grandes branches de l'UPR chez les mammifères.",
        "correct": true,
        "explanation": "Elles modulent traduction, transcription et capacités de repliement."
      },
      {
        "content": "ATF6 est une hydrolase lysosomale.",
        "correct": false,
        "explanation": "C'est un facteur de signalisation du stress du RE."
      },
      {
        "content": "L'UPR est une voie exclusivement mitochondriale.",
        "correct": false,
        "explanation": "Elle répond au stress du RE."
      },
      {
        "content": "L'accumulation de protéines mal repliées peut déclencher l'UPR, ou unfolded protein response.",
        "correct": true,
        "explanation": "Cette réponse vise à restaurer l'homéostasie protéique du RE."
      },
      {
        "content": "La présence de protéines mal repliées n'influence jamais l'expression des chaperonnes.",
        "correct": false,
        "explanation": "L'UPR peut augmenter leur expression."
      }
    ],
    "explanation": "L'UPR coordonne IRE1, PERK et ATF6 pour adapter la capacité de repliement, la traduction et l'expression génique au stress du RE."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le réticulum endoplasmique, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Le RER porte des ribosomes engagés dans la synthèse de protéines destinées au système sécrétoire.",
        "correct": true,
        "explanation": "Les ribosomes se fixent au RE lorsqu'une chaîne naissante porte un signal d'adressage approprié."
      },
      {
        "content": "Le RE participe à la synthèse de protéines, de lipides, au contrôle qualité et au stockage intracellulaire de Ca2+.",
        "correct": true,
        "explanation": "Ses fonctions dépendent du type cellulaire et de la région lisse ou rugueuse."
      },
      {
        "content": "Sa membrane est continue avec la membrane externe de l'enveloppe nucléaire.",
        "correct": true,
        "explanation": "Cette continuité anatomique fait du RE et de l'enveloppe nucléaire un même système membranaire continu."
      },
      {
        "content": "Toutes les protéines cellulaires transitent obligatoirement par le RE.",
        "correct": false,
        "explanation": "De nombreuses protéines restent cytosoliques ou sont adressées directement au noyau, aux mitochondries ou aux peroxysomes."
      },
      {
        "content": "Le Golgi est physiquement continu avec la lumière du RE comme une seule citerne.",
        "correct": false,
        "explanation": "RE et Golgi sont des compartiments distincts reliés par trafic membranaire."
      }
    ],
    "explanation": "Le RE est un réseau membranaire continu avec l'enveloppe nucléaire externe ; ses domaines rugueux et lisses assurent des fonctions complémentaires."
  },
  {
    "order": 12,
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
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement l'insertion des protéines transmembranaires dans le RE ?",
    "choices": [
      {
        "content": "Les protéines multipass utilisent plusieurs séquences de démarrage et d'arrêt de transfert.",
        "correct": true,
        "explanation": "Le translocon peut relâcher latéralement les segments hydrophobes dans la bicouche."
      },
      {
        "content": "Les domaines transmembranaires sont nécessairement clivés comme des peptides signaux.",
        "correct": false,
        "explanation": "Beaucoup deviennent des segments permanents de la protéine."
      },
      {
        "content": "Les protéines membranaires du lysosome sont synthétisées directement dans la membrane lysosomale.",
        "correct": false,
        "explanation": "Elles passent d'abord par le RE puis le Golgi."
      },
      {
        "content": "Une protéine multipass ne peut posséder qu'une seule séquence hydrophobe.",
        "correct": false,
        "explanation": "Elle en possède plusieurs."
      },
      {
        "content": "La face luminale d'une protéine du RE devient cytosolique après exocytose.",
        "correct": false,
        "explanation": "La topologie membranaire est conservée."
      }
    ],
    "explanation": "Les séquences start-transfer/stop-transfer déterminent la topologie des protéines membranaires dans le RE."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la N-glycosylation dans le RE, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle se produit exclusivement sur des protéines cytosoliques libres.",
        "correct": false,
        "explanation": "Elle concerne des protéines engagées dans la voie sécrétoire."
      },
      {
        "content": "La N-glycosylation débute dans le RE et les glycannes sont ensuite remaniés dans le RE et le Golgi.",
        "correct": true,
        "explanation": "Elle ne constitue pas une modification exclusivement golgienne."
      },
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
        "content": "La N-glycosylation transfère un oligosaccharide préassemblé sur l'azote d'une asparagine.",
        "correct": true,
        "explanation": "Le motif classique est Asn-X-Ser/Thr, avec X généralement différent de Pro."
      }
    ],
    "explanation": "La N-glycosylation débute dans le RE par transfert d'un oligosaccharide préassemblé sur une asparagine."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "À quelle extrémité d'une protéine est attachée l'ancre GPI ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "C-terminale",
        "extrémité C-terminale",
        "C-terminus"
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
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Concernant le repliement et le contrôle qualité dans le RE, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "La PDI catalyse la formation, la rupture et le réarrangement de ponts disulfure.",
        "correct": true,
        "explanation": "Elle aide à atteindre la configuration correcte."
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
        "content": "Le milieu luminal du RE favorise la formation de ponts disulfure.",
        "correct": true,
        "explanation": "Il est plus oxydant que le cytosol."
      },
      {
        "content": "La calnexine est une hydrolase lysosomale.",
        "correct": false,
        "explanation": "C'est une chaperonne membranaire du RE."
      }
    ],
    "explanation": "PDI, BiP, calnexine et calréticuline participent au repliement et au contrôle qualité dans le RE.",
    "requiredSelectionCount": 2
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les fonctions lipidiques et calciques du RE, quelles propositions sont exactes ?",
    "choices": [
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
        "content": "SERCA hydrolyse le GTP pour expulser le Ca2+ hors de la cellule.",
        "correct": false,
        "explanation": "Elle hydrolyse l'ATP pour pomper le Ca2+ dans le RE."
      },
      {
        "content": "Les récepteurs à l'IP3 peuvent libérer du Ca2+ du RE vers le cytosol.",
        "correct": true,
        "explanation": "Le Ca2+ libéré agit comme second messager."
      },
      {
        "content": "Le réticulum sarcoplasmique n'existe que dans les cellules non musculaires.",
        "correct": false,
        "explanation": "Il est spécialisé dans les cellules musculaires."
      }
    ],
    "explanation": "Le RE assure une grande part de la synthèse lipidique et constitue un réservoir intracellulaire majeur de Ca2+."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant le chargement des peptides sur le CMH I dans le RE, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "TAP est le translocon qui fait entrer toutes les protéines sécrétées dans le RE.",
        "correct": false,
        "explanation": "Le translocon des protéines naissantes est Sec61."
      },
      {
        "content": "Les peptides du CMH I sont chargés directement dans le cytosol sur une molécule de CMH I mature.",
        "correct": false,
        "explanation": "Le chargement principal a lieu dans le RE."
      },
      {
        "content": "Le CMH I présente les peptides sous forme soluble dans le milieu extracellulaire.",
        "correct": false,
        "explanation": "Le complexe reste membranaire et est reconnu à la surface cellulaire."
      },
      {
        "content": "Le complexe peptide-CMH I quitte ensuite le RE, traverse le Golgi et atteint la surface cellulaire pour être reconnu par des lymphocytes T CD8+.",
        "correct": true,
        "explanation": "La présentation a lieu à la membrane plasmique, pas dans le milieu extracellulaire libre."
      },
      {
        "content": "Les lymphocytes T CD4+ sont les partenaires spécifiques classiques du CMH I.",
        "correct": false,
        "explanation": "Le CMH I est reconnu par les lymphocytes T CD8+."
      }
    ],
    "explanation": "Les peptides cytosoliques sont générés par le protéasome, transportés par TAP dans le RE, chargés sur le CMH I puis présentés aux T CD8+ à la surface."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les fonctions spécialisées du REL ?",
    "choices": [
      {
        "content": "Les cytochromes P450 du RE participent à l'oxydation de nombreux xénobiotiques.",
        "correct": true,
        "explanation": "Cette biotransformation peut faciliter l'élimination ou parfois activer un composé."
      },
      {
        "content": "Le système glucose-6-phosphatase du RE contribue à la production de glucose libre dans des tissus comme le foie et le rein.",
        "correct": true,
        "explanation": "Il intervient dans la glycogénolyse et la néoglucogenèse."
      },
      {
        "content": "Toutes les cellules possèdent la même abondance de REL et la même activité P450.",
        "correct": false,
        "explanation": "Ces fonctions varient selon les tissus."
      },
      {
        "content": "Le REL est abondant dans certaines cellules stéroïdogènes.",
        "correct": true,
        "explanation": "Des enzymes du REL coopèrent avec les mitochondries pour la synthèse des hormones stéroïdes."
      },
      {
        "content": "La glucuronidation diminue toujours l'hydrosolubilité des molécules.",
        "correct": false,
        "explanation": "Elle l'augmente généralement."
      }
    ],
    "explanation": "Le REL assure des fonctions spécialisées de stéroïdogenèse, détoxification et métabolisme glucidique selon le type cellulaire."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment appelle-t-on la réponse cellulaire déclenchée par l'accumulation de protéines mal repliées dans le RE ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "UPR",
        "unfolded protein response",
        "réponse aux protéines mal repliées"
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
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant le réticulum endoplasmique, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Toutes les protéines cellulaires transitent obligatoirement par le RE.",
        "correct": false,
        "explanation": "De nombreuses protéines restent cytosoliques ou sont adressées directement au noyau, aux mitochondries ou aux peroxysomes."
      },
      {
        "content": "Le RER est rugueux parce que des ribosomes sont fixés sur sa face luminale.",
        "correct": false,
        "explanation": "Les ribosomes sont du côté cytosolique."
      },
      {
        "content": "Le REL est dépourvu de toute membrane.",
        "correct": false,
        "explanation": "C'est un réseau membranaire sans ribosomes associés."
      },
      {
        "content": "Le REL ne porte pas de ribosomes associés à sa surface cytosolique.",
        "correct": true,
        "explanation": "Il est particulièrement développé dans certaines cellules spécialisées dans le métabolisme lipidique ou la détoxification."
      },
      {
        "content": "Le Golgi est physiquement continu avec la lumière du RE comme une seule citerne.",
        "correct": false,
        "explanation": "RE et Golgi sont des compartiments distincts reliés par trafic membranaire."
      }
    ],
    "explanation": "Le RE est un réseau membranaire continu avec l'enveloppe nucléaire externe ; ses domaines rugueux et lisses assurent des fonctions complémentaires."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
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
  }
];
