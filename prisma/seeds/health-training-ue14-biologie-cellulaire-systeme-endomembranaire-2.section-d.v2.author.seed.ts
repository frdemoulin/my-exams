import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch5 — Section D — Flux membranaires, manteaux, adressage et récupération */
export const UE14_BIOCELL_CH5_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le transport COPII du RE vers le Golgi, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Sar1 hydrolyse uniquement l'ATP.",
        "correct": false,
        "explanation": "Sar1 est une GTPase."
      },
      {
        "content": "Les vésicules COPII perdent leur manteau avant les étapes terminales d'amarrage et de fusion.",
        "correct": true,
        "explanation": "Le déshabillage permet l'accès à la machinerie de fusion."
      },
      {
        "content": "COPII assure principalement le retour rétrograde du Golgi vers le RE.",
        "correct": false,
        "explanation": "Ce rôle est surtout associé à COPI."
      },
      {
        "content": "COPII est le manteau classique de l'endocytose du LDL à la membrane plasmique.",
        "correct": false,
        "explanation": "Cette voie utilise la clathrine."
      },
      {
        "content": "Les complexes Sec23/Sec24 et Sec13/Sec31 participent au manteau COPII.",
        "correct": true,
        "explanation": "Sec24 contribue fortement à la sélection des cargos."
      }
    ],
    "explanation": "COPII et Sar1 assurent principalement l'export du RE vers le compartiment intermédiaire et le Golgi."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur le transport COPI et le retour vers le RE, laquelle est correcte ?",
    "choices": [
      {
        "content": "COPI est le manteau principal de l'export du RE vers le Golgi.",
        "correct": false,
        "explanation": "Ce rôle revient principalement à COPII."
      },
      {
        "content": "ARF1 est une protéase qui clive les SNARE.",
        "correct": false,
        "explanation": "C'est une petite GTPase."
      },
      {
        "content": "ARF1 est une petite GTPase importante dans l'assemblage du manteau COPI.",
        "correct": true,
        "explanation": "Son activation favorise le recrutement du coatomer."
      },
      {
        "content": "Le coatomer est un récepteur luminal du M6P.",
        "correct": false,
        "explanation": "C'est un complexe de manteau cytosolique."
      },
      {
        "content": "COPI ne participe jamais au trafic intra-Golgi.",
        "correct": false,
        "explanation": "Il peut y contribuer."
      }
    ],
    "explanation": "COPI, sous le contrôle d'ARF1, participe au trafic rétrograde vers le RE et à certains transports intra-Golgi."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel motif C-terminal caractérise de nombreuses protéines solubles résidentes du RE ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "KDEL"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "KDEL est un signal de récupération : les protéines solubles du RE échappées au Golgi sont reconnues par KDELR puis ramenées vers le RE."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les signaux cytosoliques de récupération des protéines membranaires du RE, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Certaines protéines transmembranaires du RE portent un motif C-terminal de type KKXX sur leur domaine cytosolique.",
        "correct": true,
        "explanation": "Ce motif favorise leur récupération par COPI."
      },
      {
        "content": "Le signal doit être exposé au cytosol pour interagir avec la machinerie de manteau.",
        "correct": true,
        "explanation": "La topologie membranaire est déterminante."
      },
      {
        "content": "Le motif KKXX agit depuis la lumière du Golgi sans contact avec le cytosol.",
        "correct": false,
        "explanation": "Il doit être cytosolique."
      },
      {
        "content": "KKXX est un signal luminal reconnu par le récepteur M6P.",
        "correct": false,
        "explanation": "C'est un motif cytosolique de récupération vers le RE."
      },
      {
        "content": "Les motifs dilysine servent surtout à la récupération de protéines membranaires du RE ayant atteint le Golgi.",
        "correct": true,
        "explanation": "Ils ne constituent pas un signal lysosomal universel."
      }
    ],
    "explanation": "Les motifs dilysine cytosoliques de type KKXX favorisent le tri COPI de certaines protéines membranaires vers le RE."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur l'amarrage et la fusion des transporteurs, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Les transporteurs sont généralement déshabillés avant la fusion.",
        "correct": true,
        "explanation": "Les manteaux servent surtout à la formation et au tri."
      },
      {
        "content": "Une vésicule doit conserver son manteau intact pour fusionner.",
        "correct": false,
        "explanation": "Elle est généralement déshabillée auparavant."
      },
      {
        "content": "Rab est une ATPase de déshabillage de la clathrine.",
        "correct": false,
        "explanation": "Rab est une petite GTPase d'adressage et d'amarrage."
      },
      {
        "content": "La fusion se produit au hasard sans reconnaissance de la membrane cible.",
        "correct": false,
        "explanation": "Plusieurs systèmes de spécificité coopèrent."
      },
      {
        "content": "Les SNAREs assurent le rapprochement final des membranes et participent directement à leur fusion.",
        "correct": true,
        "explanation": "L'appariement spécifique de SNAREs contribue à la fidélité du trafic."
      }
    ],
    "explanation": "Rab, facteurs d'amarrage et SNAREs assurent la reconnaissance et la fusion des transporteurs avec leur compartiment cible.",
    "requiredSelectionCount": 2
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'action de la bréfeldine A ?",
    "choices": [
      {
        "content": "Elle perturbe rapidement l'assemblage de manteaux COPI et l'organisation du Golgi.",
        "correct": true,
        "explanation": "Le Golgi peut se redistribuer vers le RE dans des cellules sensibles."
      },
      {
        "content": "Elle détruit irréversiblement tous les lysosomes.",
        "correct": false,
        "explanation": "Son effet principal porte sur certaines voies ARF/COPI et le Golgi."
      },
      {
        "content": "La bréfeldine A inhibe plusieurs facteurs d'échange nucléotidique de type ARF-GEF.",
        "correct": true,
        "explanation": "Cela empêche l'activation normale d'ARF1 dans plusieurs compartiments."
      },
      {
        "content": "Son effet est souvent réversible après retrait du médicament.",
        "correct": true,
        "explanation": "Elle est largement utilisée comme outil expérimental de perturbation du trafic."
      },
      {
        "content": "Elle ne bloque pas directement toutes les petites GTPases de la cellule.",
        "correct": true,
        "explanation": "Son action est plus ciblée sur certaines ARF-GEF."
      }
    ],
    "explanation": "La bréfeldine A perturbe des ARF-GEF, l'activation d'ARF1 et le trafic COPI, entraînant une désorganisation réversible du Golgi."
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur le système endomembranaire pendant la mitose, laquelle est correcte ?",
    "choices": [
      {
        "content": "Le Golgi reste une pile de citernes intacte pendant toute la mitose.",
        "correct": false,
        "explanation": "Il se fragmente."
      },
      {
        "content": "L'appareil de Golgi se fragmente fortement pendant la mitose.",
        "correct": true,
        "explanation": "Il se réassemble dans les cellules filles."
      },
      {
        "content": "L'enveloppe nucléaire reste intacte dans toutes les cellules animales pendant la mitose.",
        "correct": false,
        "explanation": "Elle se désassemble dans la mitose ouverte."
      },
      {
        "content": "Le RE disparaît entièrement pendant toute la mitose.",
        "correct": false,
        "explanation": "Il persiste sous forme de réseau membranaire réorganisé."
      },
      {
        "content": "La mitose prouve que tous les flux membranaires sont totalement abolis dans toutes les cellules.",
        "correct": false,
        "explanation": "Ils sont réorganisés et souvent diminués, pas selon une règle absolue universelle."
      }
    ],
    "explanation": "Pendant la mitose, Golgi et enveloppe nucléaire sont fortement réorganisés, tandis que le RE persiste comme réseau membranaire."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle petite GTPase initie l'assemblage de COPII ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Sar1",
        "Sar1-GTP"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "COPII et Sar1 assurent principalement l'export du RE vers le compartiment intermédiaire et le Golgi."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le coatomer est le complexe protéique formant le manteau COPI.",
        "correct": true,
        "explanation": "Il reconnaît indirectement ou directement des signaux de tri cytosoliques."
      },
      {
        "content": "ARF1 est une protéase qui clive les SNARE.",
        "correct": false,
        "explanation": "C'est une petite GTPase."
      },
      {
        "content": "La fusion se produit au hasard sans reconnaissance de la membrane cible.",
        "correct": false,
        "explanation": "Plusieurs systèmes de spécificité coopèrent."
      },
      {
        "content": "COPI est le manteau principal de l'export du RE vers le Golgi.",
        "correct": false,
        "explanation": "Ce rôle revient principalement à COPII."
      },
      {
        "content": "Le GTP et l'ATP interviennent dans des étapes différentes du trafic membranaire.",
        "correct": true,
        "explanation": "Il n'existe pas une exigence unique de GTP pour toutes les sous-étapes."
      },
      {
        "content": "ARF1 est une petite GTPase importante dans l'assemblage du manteau COPI.",
        "correct": true,
        "explanation": "Son activation favorise le recrutement du coatomer."
      },
      {
        "content": "COPI ne participe jamais au trafic intra-Golgi.",
        "correct": false,
        "explanation": "Il peut y contribuer."
      },
      {
        "content": "COPI intervient aussi dans des transports intra-Golgi.",
        "correct": true,
        "explanation": "Il ne se limite pas à un seul trajet."
      },
      {
        "content": "Les Rab GTPases contribuent à l'identité des compartiments et à la reconnaissance des transporteurs.",
        "correct": true,
        "explanation": "Elles recrutent des effecteurs d'amarrage."
      },
      {
        "content": "Les SNAREs forment le manteau COPII.",
        "correct": false,
        "explanation": "Elles sont surtout des protéines de fusion."
      }
    ],
    "explanation": "COPI, sous le contrôle d'ARF1, participe au trafic rétrograde vers le RE et à certains transports intra-Golgi. Rab, facteurs d'amarrage et SNAREs assurent la reconnaissance et la fusion des transporteurs avec leur compartiment cible."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la récupération des protéines solubles résidentes du RE, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le complexe récepteur-cargo revient vers le RE par un trafic principalement COPI-dépendant.",
        "correct": true,
        "explanation": "Le récepteur recycle ensuite."
      },
      {
        "content": "KDEL cible les protéines vers le lysosome via M6P.",
        "correct": false,
        "explanation": "Ce sont deux systèmes de tri distincts."
      },
      {
        "content": "Le récepteur KDEL reconnaît ces protéines lorsqu'elles ont échappé vers le Golgi.",
        "correct": true,
        "explanation": "Il permet leur récupération plutôt qu'une rétention absolue dans le RE."
      },
      {
        "content": "KDEL est un signal N-terminal de translocation mitochondriale.",
        "correct": false,
        "explanation": "C'est un motif C-terminal de récupération de protéines solubles du RE."
      },
      {
        "content": "BiP est normalement sécrétée en grande quantité car KDEL l'adresse à la membrane plasmique.",
        "correct": false,
        "explanation": "KDEL permet sa récupération vers le RE."
      }
    ],
    "explanation": "KDEL est un signal de récupération : les protéines solubles du RE échappées au Golgi sont reconnues par KDELR puis ramenées vers le RE."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le transport COPII du RE vers le Golgi, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "COPII est le manteau classique de l'endocytose du LDL à la membrane plasmique.",
        "correct": false,
        "explanation": "Cette voie utilise la clathrine."
      },
      {
        "content": "Les complexes Sec23/Sec24 et Sec13/Sec31 participent au manteau COPII.",
        "correct": true,
        "explanation": "Sec24 contribue fortement à la sélection des cargos."
      },
      {
        "content": "Sar1 hydrolyse uniquement l'ATP.",
        "correct": false,
        "explanation": "Sar1 est une GTPase."
      },
      {
        "content": "COPII assure principalement l'export antérograde du RE vers l'ERGIC et le Golgi.",
        "correct": true,
        "explanation": "Il concentre de nombreux cargos quittant le RE."
      },
      {
        "content": "Les vésicules COPII perdent leur manteau avant les étapes terminales d'amarrage et de fusion.",
        "correct": true,
        "explanation": "Le déshabillage permet l'accès à la machinerie de fusion."
      }
    ],
    "explanation": "COPII et Sar1 assurent principalement l'export du RE vers le compartiment intermédiaire et le Golgi."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle petite GTPase recrute classiquement le coatomer COPI ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "ARF1",
        "ARF-1"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "COPI, sous le contrôle d'ARF1, participe au trafic rétrograde vers le RE et à certains transports intra-Golgi."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant la récupération des protéines solubles résidentes du RE, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "BiP est normalement sécrétée en grande quantité car KDEL l'adresse à la membrane plasmique.",
        "correct": false,
        "explanation": "KDEL permet sa récupération vers le RE."
      },
      {
        "content": "KDEL cible les protéines vers le lysosome via M6P.",
        "correct": false,
        "explanation": "Ce sont deux systèmes de tri distincts."
      },
      {
        "content": "Le récepteur KDEL est appelé universellement ERD et reste uniquement dans le RE.",
        "correct": false,
        "explanation": "La nomenclature moderne parle de KDELR et il circule entre Golgi et RE."
      },
      {
        "content": "KDEL est un signal N-terminal de translocation mitochondriale.",
        "correct": false,
        "explanation": "C'est un motif C-terminal de récupération de protéines solubles du RE."
      },
      {
        "content": "Le motif KDEL est porté par la protéine soluble cargo, pas par le récepteur lui-même.",
        "correct": true,
        "explanation": "La reconnaissance dépend aussi du pH des compartiments."
      }
    ],
    "explanation": "KDEL est un signal de récupération : les protéines solubles du RE échappées au Golgi sont reconnues par KDELR puis ramenées vers le RE."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les signaux cytosoliques de récupération des protéines membranaires du RE, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le motif KKXX agit depuis la lumière du Golgi sans contact avec le cytosol.",
        "correct": false,
        "explanation": "Il doit être cytosolique."
      },
      {
        "content": "Les motifs dilysine servent surtout à la récupération de protéines membranaires du RE ayant atteint le Golgi.",
        "correct": true,
        "explanation": "Ils ne constituent pas un signal lysosomal universel."
      },
      {
        "content": "COPI reconnaît ces cargos directement ou via des adaptateurs du coatomer.",
        "correct": true,
        "explanation": "Le tri se fait sur la face cytosolique."
      },
      {
        "content": "Le signal doit être exposé au cytosol pour interagir avec la machinerie de manteau.",
        "correct": true,
        "explanation": "La topologie membranaire est déterminante."
      },
      {
        "content": "Certaines protéines transmembranaires du RE portent un motif C-terminal de type KKXX sur leur domaine cytosolique.",
        "correct": true,
        "explanation": "Ce motif favorise leur récupération par COPI."
      }
    ],
    "explanation": "Les motifs dilysine cytosoliques de type KKXX favorisent le tri COPI de certaines protéines membranaires vers le RE."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle famille de protéines participe directement à la fusion membranaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "SNARE",
        "SNAREs",
        "protéines SNARE"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Rab, facteurs d'amarrage et SNAREs assurent la reconnaissance et la fusion des transporteurs avec leur compartiment cible."
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant l'action de la bréfeldine A.",
    "choices": [
      {
        "content": "Elle détruit irréversiblement tous les lysosomes.",
        "correct": false,
        "explanation": "Son effet principal porte sur certaines voies ARF/COPI et le Golgi."
      },
      {
        "content": "Elle ne bloque pas directement toutes les petites GTPases de la cellule.",
        "correct": true,
        "explanation": "Son action est plus ciblée sur certaines ARF-GEF."
      },
      {
        "content": "La bréfeldine A clive directement les SNAREs comme la toxine botulique.",
        "correct": false,
        "explanation": "Les mécanismes sont différents."
      },
      {
        "content": "Elle est un constituant physiologique normal du Golgi humain.",
        "correct": false,
        "explanation": "C'est un métabolite fongique utilisé expérimentalement."
      },
      {
        "content": "La bréfeldine A inhibe plusieurs facteurs d'échange nucléotidique de type ARF-GEF.",
        "correct": true,
        "explanation": "Cela empêche l'activation normale d'ARF1 dans plusieurs compartiments."
      }
    ],
    "explanation": "La bréfeldine A perturbe des ARF-GEF, l'activation d'ARF1 et le trafic COPI, entraînant une désorganisation réversible du Golgi.",
    "requiredSelectionCount": 2
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le système endomembranaire pendant la mitose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le RE persiste comme réseau membranaire pendant la mitose, même si son organisation change.",
        "correct": true,
        "explanation": "Il ne disparaît pas complètement."
      },
      {
        "content": "L'enveloppe nucléaire reste intacte dans toutes les cellules animales pendant la mitose.",
        "correct": false,
        "explanation": "Elle se désassemble dans la mitose ouverte."
      },
      {
        "content": "Le RE disparaît entièrement pendant toute la mitose.",
        "correct": false,
        "explanation": "Il persiste sous forme de réseau membranaire réorganisé."
      },
      {
        "content": "Le Golgi reste une pile de citernes intacte pendant toute la mitose.",
        "correct": false,
        "explanation": "Il se fragmente."
      },
      {
        "content": "Le trafic sécrétoire est fortement réorganisé et souvent réduit pendant la mitose.",
        "correct": true,
        "explanation": "Il n'est pas pertinent de définir la mitose comme le seul « blocage in vivo » possible des flux membranaires."
      }
    ],
    "explanation": "Pendant la mitose, Golgi et enveloppe nucléaire sont fortement réorganisés, tandis que le RE persiste comme réseau membranaire."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant le transport COPII du RE vers le Golgi, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Sec24 est une hydrolase lysosomale.",
        "correct": false,
        "explanation": "C'est un composant du manteau COPII."
      },
      {
        "content": "COPII assure principalement le retour rétrograde du Golgi vers le RE.",
        "correct": false,
        "explanation": "Ce rôle est surtout associé à COPI."
      },
      {
        "content": "Sar1 est une petite GTPase qui initie l'assemblage du manteau COPII.",
        "correct": true,
        "explanation": "Son cycle GTP contrôle le recrutement du manteau."
      },
      {
        "content": "COPII est le manteau classique de l'endocytose du LDL à la membrane plasmique.",
        "correct": false,
        "explanation": "Cette voie utilise la clathrine."
      },
      {
        "content": "Sar1 hydrolyse uniquement l'ATP.",
        "correct": false,
        "explanation": "Sar1 est une GTPase."
      }
    ],
    "explanation": "COPII et Sar1 assurent principalement l'export du RE vers le compartiment intermédiaire et le Golgi."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le transport COPI et le retour vers le RE, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "COPI intervient aussi dans des transports intra-Golgi.",
        "correct": true,
        "explanation": "Il ne se limite pas à un seul trajet."
      },
      {
        "content": "Le coatomer est un récepteur luminal du M6P.",
        "correct": false,
        "explanation": "C'est un complexe de manteau cytosolique."
      },
      {
        "content": "Le coatomer est le complexe protéique formant le manteau COPI.",
        "correct": true,
        "explanation": "Il reconnaît indirectement ou directement des signaux de tri cytosoliques."
      },
      {
        "content": "ARF1 est une petite GTPase importante dans l'assemblage du manteau COPI.",
        "correct": true,
        "explanation": "Son activation favorise le recrutement du coatomer."
      },
      {
        "content": "COPI est le manteau principal de l'export du RE vers le Golgi.",
        "correct": false,
        "explanation": "Ce rôle revient principalement à COPII."
      }
    ],
    "explanation": "COPI, sous le contrôle d'ARF1, participe au trafic rétrograde vers le RE et à certains transports intra-Golgi."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel motif C-terminal caractérise de nombreuses protéines solubles résidentes du RE ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "KDEL"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "KDEL est un signal de récupération : les protéines solubles du RE échappées au Golgi sont reconnues par KDELR puis ramenées vers le RE."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "L'enveloppe nucléaire reste intacte dans toutes les cellules animales pendant la mitose.",
        "correct": false,
        "explanation": "Elle se désassemble dans la mitose ouverte."
      },
      {
        "content": "Le signal doit être exposé au cytosol pour interagir avec la machinerie de manteau.",
        "correct": true,
        "explanation": "La topologie membranaire est déterminante."
      },
      {
        "content": "Les motifs dilysine servent surtout à la récupération de protéines membranaires du RE ayant atteint le Golgi.",
        "correct": true,
        "explanation": "Ils ne constituent pas un signal lysosomal universel."
      },
      {
        "content": "Le RE persiste comme réseau membranaire pendant la mitose, même si son organisation change.",
        "correct": true,
        "explanation": "Il ne disparaît pas complètement."
      },
      {
        "content": "La mitose prouve que tous les flux membranaires sont totalement abolis dans toutes les cellules.",
        "correct": false,
        "explanation": "Ils sont réorganisés et souvent diminués, pas selon une règle absolue universelle."
      },
      {
        "content": "L'appareil de Golgi se fragmente fortement pendant la mitose.",
        "correct": true,
        "explanation": "Il se réassemble dans les cellules filles."
      },
      {
        "content": "Le RE disparaît entièrement pendant toute la mitose.",
        "correct": false,
        "explanation": "Il persiste sous forme de réseau membranaire réorganisé."
      },
      {
        "content": "Le motif KKXX agit depuis la lumière du Golgi sans contact avec le cytosol.",
        "correct": false,
        "explanation": "Il doit être cytosolique."
      },
      {
        "content": "L'enveloppe nucléaire se désassemble lors de la mitose ouverte des cellules animales.",
        "correct": true,
        "explanation": "Ses membranes et protéines sont ensuite réorganisées lors de la reformation des noyaux."
      },
      {
        "content": "Toute protéine lysosomale membranaire porte nécessairement KKXX.",
        "correct": false,
        "explanation": "Les protéines lysosomales utilisent d'autres motifs de tri."
      }
    ],
    "explanation": "Les motifs dilysine cytosoliques de type KKXX favorisent le tri COPI de certaines protéines membranaires vers le RE. Pendant la mitose, Golgi et enveloppe nucléaire sont fortement réorganisés, tandis que le RE persiste comme réseau membranaire."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'amarrage et la fusion des transporteurs, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Les SNAREs assurent le rapprochement final des membranes et participent directement à leur fusion.",
        "correct": true,
        "explanation": "L'appariement spécifique de SNAREs contribue à la fidélité du trafic."
      },
      {
        "content": "Les Rab GTPases contribuent à l'identité des compartiments et à la reconnaissance des transporteurs.",
        "correct": true,
        "explanation": "Elles recrutent des effecteurs d'amarrage."
      },
      {
        "content": "Une vésicule doit conserver son manteau intact pour fusionner.",
        "correct": false,
        "explanation": "Elle est généralement déshabillée auparavant."
      },
      {
        "content": "Le GTP et l'ATP interviennent dans des étapes différentes du trafic membranaire.",
        "correct": true,
        "explanation": "Il n'existe pas une exigence unique de GTP pour toutes les sous-étapes."
      },
      {
        "content": "Les transporteurs sont généralement déshabillés avant la fusion.",
        "correct": true,
        "explanation": "Les manteaux servent surtout à la formation et au tri."
      }
    ],
    "explanation": "Rab, facteurs d'amarrage et SNAREs assurent la reconnaissance et la fusion des transporteurs avec leur compartiment cible."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sur ce schéma d'adressage d'une hydrolase lysosomale marquée M6P, cliquez sur le compartiment où le récepteur M6P concentre le cargo avant son transport vers l'endosome.",
    "image": {
      "src": "/images/training/ue14/biologie-cellulaire/systeme-endomembranaire-2/adressage-m6p-qzone.svg",
      "alt": "Schéma original montrant cis-Golgi, TGN, endosome et lysosome dans la voie mannose-6-phosphate",
      "width": 1200,
      "height": 700
    },
    "expectedZones": [
      {
        "id": "tgn",
        "label": "Réseau trans-Golgien (TGN)",
        "x": 0.47,
        "y": 0.38,
        "tolerance": 0.1
      }
    ],
    "explanation": "Les hydrolases marquées M6P sont reconnues par leurs récepteurs principalement au TGN, puis concentrées dans des transporteurs à clathrine vers les endosomes."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel manteau participe principalement au retour Golgi → RE ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "COPI",
        "manteau COPI"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "COPI, sous le contrôle d'ARF1, participe au trafic rétrograde vers le RE et à certains transports intra-Golgi."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant la récupération des protéines solubles résidentes du RE, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Le complexe récepteur-cargo revient vers le RE par un trafic principalement COPI-dépendant.",
        "correct": true,
        "explanation": "Le récepteur recycle ensuite."
      },
      {
        "content": "Le récepteur KDEL est appelé universellement ERD et reste uniquement dans le RE.",
        "correct": false,
        "explanation": "La nomenclature moderne parle de KDELR et il circule entre Golgi et RE."
      },
      {
        "content": "BiP est normalement sécrétée en grande quantité car KDEL l'adresse à la membrane plasmique.",
        "correct": false,
        "explanation": "KDEL permet sa récupération vers le RE."
      },
      {
        "content": "KDEL cible les protéines vers le lysosome via M6P.",
        "correct": false,
        "explanation": "Ce sont deux systèmes de tri distincts."
      },
      {
        "content": "Le récepteur KDEL reconnaît ces protéines lorsqu'elles ont échappé vers le Golgi.",
        "correct": true,
        "explanation": "Il permet leur récupération plutôt qu'une rétention absolue dans le RE."
      }
    ],
    "explanation": "KDEL est un signal de récupération : les protéines solubles du RE échappées au Golgi sont reconnues par KDELR puis ramenées vers le RE.",
    "requiredSelectionCount": 2
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les signaux cytosoliques de récupération des protéines membranaires du RE, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "KKXX est un signal luminal reconnu par le récepteur M6P.",
        "correct": false,
        "explanation": "C'est un motif cytosolique de récupération vers le RE."
      },
      {
        "content": "Les motifs dilysine servent surtout à la récupération de protéines membranaires du RE ayant atteint le Golgi.",
        "correct": true,
        "explanation": "Ils ne constituent pas un signal lysosomal universel."
      },
      {
        "content": "KKXX est un motif de quatre sucres.",
        "correct": false,
        "explanation": "C'est un motif peptidique."
      },
      {
        "content": "Le signal doit être exposé au cytosol pour interagir avec la machinerie de manteau.",
        "correct": true,
        "explanation": "La topologie membranaire est déterminante."
      },
      {
        "content": "Toute protéine lysosomale membranaire porte nécessairement KKXX.",
        "correct": false,
        "explanation": "Les protéines lysosomales utilisent d'autres motifs de tri."
      }
    ],
    "explanation": "Les motifs dilysine cytosoliques de type KKXX favorisent le tri COPI de certaines protéines membranaires vers le RE."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Concernant l'amarrage et la fusion des transporteurs, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Rab est une ATPase de déshabillage de la clathrine.",
        "correct": false,
        "explanation": "Rab est une petite GTPase d'adressage et d'amarrage."
      },
      {
        "content": "Une vésicule doit conserver son manteau intact pour fusionner.",
        "correct": false,
        "explanation": "Elle est généralement déshabillée auparavant."
      },
      {
        "content": "Le GTP et l'ATP interviennent dans des étapes différentes du trafic membranaire.",
        "correct": true,
        "explanation": "Il n'existe pas une exigence unique de GTP pour toutes les sous-étapes."
      },
      {
        "content": "La fusion se produit au hasard sans reconnaissance de la membrane cible.",
        "correct": false,
        "explanation": "Plusieurs systèmes de spécificité coopèrent."
      },
      {
        "content": "Les SNAREs forment le manteau COPII.",
        "correct": false,
        "explanation": "Elles sont surtout des protéines de fusion."
      }
    ],
    "explanation": "Rab, facteurs d'amarrage et SNAREs assurent la reconnaissance et la fusion des transporteurs avec leur compartiment cible."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant l'action de la bréfeldine A, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Son effet est souvent réversible après retrait du médicament.",
        "correct": true,
        "explanation": "Elle est largement utilisée comme outil expérimental de perturbation du trafic."
      },
      {
        "content": "La bréfeldine A inhibe plusieurs facteurs d'échange nucléotidique de type ARF-GEF.",
        "correct": true,
        "explanation": "Cela empêche l'activation normale d'ARF1 dans plusieurs compartiments."
      },
      {
        "content": "Elle perturbe rapidement l'assemblage de manteaux COPI et l'organisation du Golgi.",
        "correct": true,
        "explanation": "Le Golgi peut se redistribuer vers le RE dans des cellules sensibles."
      },
      {
        "content": "Elle active ARF1 de façon permanente.",
        "correct": false,
        "explanation": "Elle empêche son activation normale en inhibant des GEF."
      },
      {
        "content": "Elle est un constituant physiologique normal du Golgi humain.",
        "correct": false,
        "explanation": "C'est un métabolite fongique utilisé expérimentalement."
      }
    ],
    "explanation": "La bréfeldine A perturbe des ARF-GEF, l'activation d'ARF1 et le trafic COPI, entraînant une désorganisation réversible du Golgi."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel organite se fragmente fortement pendant la mitose animale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "appareil de Golgi",
        "Golgi"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Pendant la mitose, Golgi et enveloppe nucléaire sont fortement réorganisés, tandis que le RE persiste comme réseau membranaire."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Les vésicules COPII perdent leur manteau avant les étapes terminales d'amarrage et de fusion.",
        "correct": true,
        "explanation": "Le déshabillage permet l'accès à la machinerie de fusion."
      },
      {
        "content": "KKXX est un signal luminal reconnu par le récepteur M6P.",
        "correct": false,
        "explanation": "C'est un motif cytosolique de récupération vers le RE."
      },
      {
        "content": "Sec24 est une hydrolase lysosomale.",
        "correct": false,
        "explanation": "C'est un composant du manteau COPII."
      },
      {
        "content": "KKXX est un motif de quatre sucres.",
        "correct": false,
        "explanation": "C'est un motif peptidique."
      },
      {
        "content": "Sar1 hydrolyse uniquement l'ATP.",
        "correct": false,
        "explanation": "Sar1 est une GTPase."
      },
      {
        "content": "Le signal doit être exposé au cytosol pour interagir avec la machinerie de manteau.",
        "correct": true,
        "explanation": "La topologie membranaire est déterminante."
      },
      {
        "content": "Certaines protéines transmembranaires du RE portent un motif C-terminal de type KKXX sur leur domaine cytosolique.",
        "correct": true,
        "explanation": "Ce motif favorise leur récupération par COPI."
      },
      {
        "content": "COPII assure principalement le retour rétrograde du Golgi vers le RE.",
        "correct": false,
        "explanation": "Ce rôle est surtout associé à COPI."
      },
      {
        "content": "COPII assure principalement l'export antérograde du RE vers l'ERGIC et le Golgi.",
        "correct": true,
        "explanation": "Il concentre de nombreux cargos quittant le RE."
      },
      {
        "content": "Les complexes Sec23/Sec24 et Sec13/Sec31 participent au manteau COPII.",
        "correct": true,
        "explanation": "Sec24 contribue fortement à la sélection des cargos."
      }
    ],
    "explanation": "COPII et Sar1 assurent principalement l'export du RE vers le compartiment intermédiaire et le Golgi. Les motifs dilysine cytosoliques de type KKXX favorisent le tri COPI de certaines protéines membranaires vers le RE."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le transport COPI et le retour vers le RE, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "COPI intervient aussi dans des transports intra-Golgi.",
        "correct": true,
        "explanation": "Il ne se limite pas à un seul trajet."
      },
      {
        "content": "Le coatomer est le complexe protéique formant le manteau COPI.",
        "correct": true,
        "explanation": "Il reconnaît indirectement ou directement des signaux de tri cytosoliques."
      },
      {
        "content": "COPI est le manteau principal de l'export du RE vers le Golgi.",
        "correct": false,
        "explanation": "Ce rôle revient principalement à COPII."
      },
      {
        "content": "ARF1 est une petite GTPase importante dans l'assemblage du manteau COPI.",
        "correct": true,
        "explanation": "Son activation favorise le recrutement du coatomer."
      },
      {
        "content": "COPI participe au trafic rétrograde du Golgi vers le RE.",
        "correct": true,
        "explanation": "Il récupère notamment des protéines résidentes ayant échappé au RE."
      }
    ],
    "explanation": "COPI, sous le contrôle d'ARF1, participe au trafic rétrograde vers le RE et à certains transports intra-Golgi."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel manteau participe au retour du récepteur KDEL vers le RE ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "COPI",
        "manteau COPI"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "KDEL est un signal de récupération : les protéines solubles du RE échappées au Golgi sont reconnues par KDELR puis ramenées vers le RE."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant les signaux cytosoliques de récupération des protéines membranaires du RE, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Le signal doit être exposé au cytosol pour interagir avec la machinerie de manteau.",
        "correct": true,
        "explanation": "La topologie membranaire est déterminante."
      },
      {
        "content": "KKXX est un signal luminal reconnu par le récepteur M6P.",
        "correct": false,
        "explanation": "C'est un motif cytosolique de récupération vers le RE."
      },
      {
        "content": "Toute protéine lysosomale membranaire porte nécessairement KKXX.",
        "correct": false,
        "explanation": "Les protéines lysosomales utilisent d'autres motifs de tri."
      },
      {
        "content": "Les motifs dilysine servent surtout à la récupération de protéines membranaires du RE ayant atteint le Golgi.",
        "correct": true,
        "explanation": "Ils ne constituent pas un signal lysosomal universel."
      },
      {
        "content": "KKXX est un motif de quatre sucres.",
        "correct": false,
        "explanation": "C'est un motif peptidique."
      }
    ],
    "explanation": "Les motifs dilysine cytosoliques de type KKXX favorisent le tri COPI de certaines protéines membranaires vers le RE.",
    "requiredSelectionCount": 2
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'amarrage et la fusion des transporteurs ?",
    "choices": [
      {
        "content": "Le GTP et l'ATP interviennent dans des étapes différentes du trafic membranaire.",
        "correct": true,
        "explanation": "Il n'existe pas une exigence unique de GTP pour toutes les sous-étapes."
      },
      {
        "content": "Une vésicule doit conserver son manteau intact pour fusionner.",
        "correct": false,
        "explanation": "Elle est généralement déshabillée auparavant."
      },
      {
        "content": "Les SNAREs forment le manteau COPII.",
        "correct": false,
        "explanation": "Elles sont surtout des protéines de fusion."
      },
      {
        "content": "La fusion se produit au hasard sans reconnaissance de la membrane cible.",
        "correct": false,
        "explanation": "Plusieurs systèmes de spécificité coopèrent."
      },
      {
        "content": "Les Rab GTPases contribuent à l'identité des compartiments et à la reconnaissance des transporteurs.",
        "correct": true,
        "explanation": "Elles recrutent des effecteurs d'amarrage."
      }
    ],
    "explanation": "Rab, facteurs d'amarrage et SNAREs assurent la reconnaissance et la fusion des transporteurs avec leur compartiment cible."
  }
];
