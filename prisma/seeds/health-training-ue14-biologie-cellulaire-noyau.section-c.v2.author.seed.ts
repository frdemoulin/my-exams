import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch8 — Lamina, matrice nucléaire et nucléosome */
export const UE14_BIOCELL_CH8_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Sur le thème « Matrice nucléaire : concept opérationnel », repérez l’unique affirmation correcte.",
    "choices": [
      {
        "content": "La matrice nucléaire est composée uniquement d’ADN.",
        "correct": false,
        "explanation": "Le concept décrit au contraire un résidu principalement protéique après extraction des acides nucléiques."
      },
      {
        "content": "La lamina est une couche de laminine extracellulaire.",
        "correct": false,
        "explanation": "La lamina nucléaire est formée de lamines, différentes de la laminine de la matrice extracellulaire."
      },
      {
        "content": "NuMA est une histone du cœur nucléosomique.",
        "correct": false,
        "explanation": "NuMA est une grande protéine nucléaire et mitotique, pas une histone du nucléosome."
      },
      {
        "content": "Le terme matrice nucléaire a été défini historiquement à partir de résidus obtenus après extractions biochimiques.",
        "correct": true,
        "explanation": "Il s’agit d’un concept opérationnel issu de protocoles d’extraction."
      },
      {
        "content": "Un réseau fibreux interne unique et immuable a été démontré comme squelette universel de tous les noyaux vivants.",
        "correct": false,
        "explanation": "La notion de matrice nucléaire interne rigide et universelle reste controversée."
      }
    ],
    "explanation": "La « matrice nucléaire » désigne historiquement un résidu protéique obtenu après extractions ; certaines structures comme la lamina sont bien établies, tandis que l’existence d’un réseau interne unique et stable reste un concept expérimental à manier avec prudence."
  },
  {
    "order": 46,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sur le thème « Lamina et lamines », sélectionnez les affirmations exactes.",
    "choices": [
      {
        "content": "Les lamines appartiennent à la famille des filaments intermédiaires de type V.",
        "correct": true,
        "explanation": "Les lamines sont les filaments intermédiaires nucléaires."
      },
      {
        "content": "La lamina est située au contact de la face nucléoplasmique de la membrane interne.",
        "correct": true,
        "explanation": "Elle tapisse la périphérie interne du noyau."
      },
      {
        "content": "Les lamines sont des microtubules constitués de tubuline.",
        "correct": false,
        "explanation": "Elles appartiennent aux filaments intermédiaires."
      },
      {
        "content": "Les lamines A et C proviennent du gène LMNA par épissage alternatif.",
        "correct": true,
        "explanation": "LMNA code notamment les lamines A et C."
      },
      {
        "content": "La lamina est constituée de laminine.",
        "correct": false,
        "explanation": "La laminine est une glycoprotéine extracellulaire ; la lamina nucléaire est faite de lamines."
      }
    ],
    "explanation": "La lamina est un réseau de filaments intermédiaires de type V, constitué de lamines A/C et B, sous la membrane nucléaire interne ; elle participe à la forme nucléaire, à l’organisation des pores et à l’ancrage de domaines chromatinien."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle famille de protéines forme l’essentiel de la lamina nucléaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "lamines",
        "lamine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les lamines sont les filaments intermédiaires nucléaires qui constituent l’armature principale de la lamina."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le thème « LAD et MAR », quelles propositions sont incorrectes ?",
    "choices": [
      {
        "content": "LAD est le nom d’une sous-unité du ribosome.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. Il s’agit d’un domaine chromatinien associé à la lamina."
      },
      {
        "content": "Les interactions de chromatine avec la périphérie contribuent à l’organisation tridimensionnelle du génome.",
        "correct": false,
        "explanation": "Cette affirmation est exacte biologiquement ; elle ne doit donc pas être sélectionnée ici. L’architecture nucléaire influence la disposition et l’activité chromatiniennes."
      },
      {
        "content": "MAR est une protéine motrice des microtubules.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. MAR désigne une région d’ADN associée à la matrice dans les préparations expérimentales."
      },
      {
        "content": "Toute chromatine associée à la lamina est obligatoirement transcrite à très haut niveau.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. Les LAD sont au contraire souvent relativement réprimés."
      },
      {
        "content": "L’organisation tridimensionnelle du génome est totalement aléatoire.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. Les chromosomes et domaines chromatinien occupent des positions organisées."
      }
    ],
    "explanation": "Les LAD désignent des domaines chromatinien associés à la lamina ; les MAR/SAR sont des régions d’ADN identifiées par leur association à la matrice ou au squelette nucléaire dans des préparations expérimentales."
  },
  {
    "order": 49,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Sur le thème « Nucléosome », repérez l’unique affirmation correcte.",
    "choices": [
      {
        "content": "Le nucléosome est constitué exclusivement d’ARN.",
        "correct": false,
        "explanation": "Il associe ADN et histones."
      },
      {
        "content": "Chaque nucléosome contient une seule histone H3 et aucune H4.",
        "correct": false,
        "explanation": "Le cœur contient deux copies de chacune des histones H2A, H2B, H3 et H4."
      },
      {
        "content": "L’ADN reste entièrement rectiligne et ne s’enroule pas autour des histones.",
        "correct": false,
        "explanation": "L’enroulement de l’ADN autour du cœur d’histones est la base de la compaction."
      },
      {
        "content": "L’histone H1 fait partie des huit histones du cœur nucléosomique.",
        "correct": false,
        "explanation": "H1 est une histone de liaison associée à l’ADN linker et à l’entrée/sortie du nucléosome."
      },
      {
        "content": "Environ 147 paires de bases d’ADN sont enroulées autour de l’octamère.",
        "correct": true,
        "explanation": "C’est la longueur canonique de l’ADN du cœur nucléosomique."
      }
    ],
    "explanation": "Le nucléosome est l’unité fondamentale de la chromatine : environ 147 paires de bases d’ADN s’enroulent en ~1,65 tour autour d’un octamère contenant deux copies de H2A, H2B, H3 et H4."
  },
  {
    "order": 50,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le thème « Histone H1 et compaction », quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "H1 favorise des états de chromatine plus compacts.",
        "correct": true,
        "explanation": "Elle contribue à rapprocher et organiser les nucléosomes."
      },
      {
        "content": "H1 remplace les histones H3 et H4 dans le cœur nucléosomique.",
        "correct": false,
        "explanation": "Elle est une histone de liaison distincte du cœur."
      },
      {
        "content": "La chromatine ne peut exister que sous un seul niveau de compaction.",
        "correct": false,
        "explanation": "Elle adopte de nombreux états structuraux."
      },
      {
        "content": "Une chromatine plus compacte est toujours plus active transcriptionnellement.",
        "correct": false,
        "explanation": "Une compaction élevée est généralement associée à une moindre accessibilité."
      },
      {
        "content": "L’histone H1 est associée à l’ADN linker.",
        "correct": true,
        "explanation": "Elle stabilise l’organisation de l’ADN entre nucléosomes."
      }
    ],
    "explanation": "H1 est une histone de liaison qui interagit avec l’ADN linker et les zones d’entrée/sortie du nucléosome ; elle favorise la compaction sans appartenir à l’octamère du cœur."
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le thème « Matrice nucléaire : concept opérationnel », quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "NuMA est une histone du cœur nucléosomique.",
        "correct": false,
        "explanation": "NuMA est une grande protéine nucléaire et mitotique, pas une histone du nucléosome."
      },
      {
        "content": "Le terme matrice nucléaire a été défini historiquement à partir de résidus obtenus après extractions biochimiques.",
        "correct": true,
        "explanation": "Il s’agit d’un concept opérationnel issu de protocoles d’extraction."
      },
      {
        "content": "La lamina nucléaire est une structure protéique bien établie sous la membrane interne.",
        "correct": true,
        "explanation": "Elle est constituée principalement de lamines."
      },
      {
        "content": "NuMA est une protéine nucléaire importante notamment pour l’organisation du fuseau mitotique.",
        "correct": true,
        "explanation": "NuMA se redistribue en mitose et participe à l’organisation des pôles du fuseau."
      },
      {
        "content": "Un réseau fibreux interne unique et immuable a été démontré comme squelette universel de tous les noyaux vivants.",
        "correct": false,
        "explanation": "La notion de matrice nucléaire interne rigide et universelle reste controversée."
      }
    ],
    "explanation": "La « matrice nucléaire » désigne historiquement un résidu protéique obtenu après extractions ; certaines structures comme la lamina sont bien établies, tandis que l’existence d’un réseau interne unique et stable reste un concept expérimental à manier avec prudence."
  },
  {
    "order": 52,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Sur le thème « Lamina et lamines », repérez l’unique affirmation correcte.",
    "choices": [
      {
        "content": "Les lamines A et C proviennent du gène LMNA par épissage alternatif.",
        "correct": true,
        "explanation": "LMNA code notamment les lamines A et C."
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
        "content": "La lamina est constituée de laminine.",
        "correct": false,
        "explanation": "La laminine est une glycoprotéine extracellulaire ; la lamina nucléaire est faite de lamines."
      },
      {
        "content": "Les lamines sont des microtubules constitués de tubuline.",
        "correct": false,
        "explanation": "Elles appartiennent aux filaments intermédiaires."
      }
    ],
    "explanation": "La lamina est un réseau de filaments intermédiaires de type V, constitué de lamines A/C et B, sous la membrane nucléaire interne ; elle participe à la forme nucléaire, à l’organisation des pores et à l’ancrage de domaines chromatinien."
  },
  {
    "order": 53,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Parmi ces propositions concernant « LAD et MAR », retenez exactement les 3 affirmations justes.",
    "choices": [
      {
        "content": "L’organisation tridimensionnelle du génome est totalement aléatoire.",
        "correct": false,
        "explanation": "Les chromosomes et domaines chromatinien occupent des positions organisées."
      },
      {
        "content": "Toute chromatine associée à la lamina est obligatoirement transcrite à très haut niveau.",
        "correct": false,
        "explanation": "Les LAD sont au contraire souvent relativement réprimés."
      },
      {
        "content": "Les interactions de chromatine avec la périphérie contribuent à l’organisation tridimensionnelle du génome.",
        "correct": true,
        "explanation": "L’architecture nucléaire influence la disposition et l’activité chromatiniennes."
      },
      {
        "content": "LAD signifie Lamina-Associated Domain.",
        "correct": true,
        "explanation": "Un LAD est un domaine chromatinien en contact avec la lamina."
      },
      {
        "content": "MAR désigne une région d’ADN associée à la matrice nucléaire dans des approches expérimentales.",
        "correct": true,
        "explanation": "Le terme signifie Matrix-Associated Region."
      }
    ],
    "explanation": "Les LAD désignent des domaines chromatinien associés à la lamina ; les MAR/SAR sont des régions d’ADN identifiées par leur association à la matrice ou au squelette nucléaire dans des préparations expérimentales."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le thème « Nucléosome », quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L’ADN effectue environ 1,65 tour autour du cœur d’histones.",
        "correct": true,
        "explanation": "Il ne s’agit pas de deux tours complets."
      },
      {
        "content": "Environ 147 paires de bases d’ADN sont enroulées autour de l’octamère.",
        "correct": true,
        "explanation": "C’est la longueur canonique de l’ADN du cœur nucléosomique."
      },
      {
        "content": "Des segments d’ADN linker relient les nucléosomes successifs.",
        "correct": true,
        "explanation": "L’ADN internucléosomique relie les particules nucléosomiques."
      },
      {
        "content": "L’histone H1 fait partie des huit histones du cœur nucléosomique.",
        "correct": false,
        "explanation": "H1 est une histone de liaison associée à l’ADN linker et à l’entrée/sortie du nucléosome."
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
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Histone H1 et compaction », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La chromatine ne peut exister que sous un seul niveau de compaction.",
        "correct": false,
        "explanation": "Elle adopte de nombreux états structuraux."
      },
      {
        "content": "La compaction de la chromatine est dynamique et modulable localement.",
        "correct": true,
        "explanation": "Elle varie selon l’activité transcriptionnelle et d’autres processus."
      },
      {
        "content": "H1 est une ADN polymérase nucléaire.",
        "correct": false,
        "explanation": "H1 est une histone de liaison."
      },
      {
        "content": "H1 remplace les histones H3 et H4 dans le cœur nucléosomique.",
        "correct": false,
        "explanation": "Elle est une histone de liaison distincte du cœur."
      },
      {
        "content": "L’histone H1 est associée à l’ADN linker.",
        "correct": true,
        "explanation": "Elle stabilise l’organisation de l’ADN entre nucléosomes."
      }
    ],
    "explanation": "H1 est une histone de liaison qui interagit avec l’ADN linker et les zones d’entrée/sortie du nucléosome ; elle favorise la compaction sans appartenir à l’octamère du cœur."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Parmi ces propositions concernant « Matrice nucléaire : concept opérationnel », retenez exactement les 2 affirmations justes.",
    "choices": [
      {
        "content": "NuMA est une protéine nucléaire importante notamment pour l’organisation du fuseau mitotique.",
        "correct": true,
        "explanation": "NuMA se redistribue en mitose et participe à l’organisation des pôles du fuseau."
      },
      {
        "content": "Des domaines de chromatine peuvent être associés à la lamina nucléaire.",
        "correct": true,
        "explanation": "Les LAD correspondent à des régions chromatiniennes associées à la lamina."
      },
      {
        "content": "NuMA est une histone du cœur nucléosomique.",
        "correct": false,
        "explanation": "NuMA est une grande protéine nucléaire et mitotique, pas une histone du nucléosome."
      },
      {
        "content": "La lamina est une couche de laminine extracellulaire.",
        "correct": false,
        "explanation": "La lamina nucléaire est formée de lamines, différentes de la laminine de la matrice extracellulaire."
      },
      {
        "content": "Un réseau fibreux interne unique et immuable a été démontré comme squelette universel de tous les noyaux vivants.",
        "correct": false,
        "explanation": "La notion de matrice nucléaire interne rigide et universelle reste controversée."
      }
    ],
    "explanation": "La « matrice nucléaire » désigne historiquement un résidu protéique obtenu après extractions ; certaines structures comme la lamina sont bien établies, tandis que l’existence d’un réseau interne unique et stable reste un concept expérimental à manier avec prudence."
  },
  {
    "order": 57,
    "difficulty": "EASY",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Sur le thème « Lamina et lamines », sélectionnez exactement les cinq propositions exactes parmi les dix proposées.",
    "choices": [
      {
        "content": "La lamina est située au contact de la face nucléoplasmique de la membrane interne.",
        "correct": true,
        "explanation": "Elle tapisse la périphérie interne du noyau."
      },
      {
        "content": "Les LAD sont fréquemment enrichis en chromatine peu transcriptionnellement active.",
        "correct": true,
        "explanation": "La périphérie nucléaire associée à la lamina est souvent répressive."
      },
      {
        "content": "Les lamines A et C proviennent du gène LMNA par épissage alternatif.",
        "correct": true,
        "explanation": "LMNA code notamment les lamines A et C."
      },
      {
        "content": "Les lamines appartiennent à la famille des filaments intermédiaires de type V.",
        "correct": true,
        "explanation": "Les lamines sont les filaments intermédiaires nucléaires."
      },
      {
        "content": "LAD est le nom d’une sous-unité du ribosome.",
        "correct": false,
        "explanation": "Il s’agit d’un domaine chromatinien associé à la lamina."
      },
      {
        "content": "MAR est une protéine motrice des microtubules.",
        "correct": false,
        "explanation": "MAR désigne une région d’ADN associée à la matrice dans les préparations expérimentales."
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
        "content": "La lamina est constituée de laminine.",
        "correct": false,
        "explanation": "La laminine est une glycoprotéine extracellulaire ; la lamina nucléaire est faite de lamines."
      },
      {
        "content": "LAD signifie Lamina-Associated Domain.",
        "correct": true,
        "explanation": "Un LAD est un domaine chromatinien en contact avec la lamina."
      }
    ],
    "explanation": "La lamina est un réseau de filaments intermédiaires de type V, constitué de lamines A/C et B, sous la membrane nucléaire interne ; elle participe à la forme nucléaire, à l’organisation des pores et à l’ancrage de domaines chromatinien. Les LAD désignent des domaines chromatinien associés à la lamina ; les MAR/SAR sont des régions d’ADN identifiées par leur association à la matrice ou au squelette nucléaire dans des préparations expérimentales."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Parmi ces propositions concernant « LAD et MAR », retenez exactement les 3 affirmations justes.",
    "choices": [
      {
        "content": "MAR est une protéine motrice des microtubules.",
        "correct": false,
        "explanation": "MAR désigne une région d’ADN associée à la matrice dans les préparations expérimentales."
      },
      {
        "content": "Les LAD sont fréquemment enrichis en chromatine peu transcriptionnellement active.",
        "correct": true,
        "explanation": "La périphérie nucléaire associée à la lamina est souvent répressive."
      },
      {
        "content": "Les interactions de chromatine avec la périphérie contribuent à l’organisation tridimensionnelle du génome.",
        "correct": true,
        "explanation": "L’architecture nucléaire influence la disposition et l’activité chromatiniennes."
      },
      {
        "content": "Toute chromatine associée à la lamina est obligatoirement transcrite à très haut niveau.",
        "correct": false,
        "explanation": "Les LAD sont au contraire souvent relativement réprimés."
      },
      {
        "content": "MAR désigne une région d’ADN associée à la matrice nucléaire dans des approches expérimentales.",
        "correct": true,
        "explanation": "Le terme signifie Matrix-Associated Region."
      }
    ],
    "explanation": "Les LAD désignent des domaines chromatinien associés à la lamina ; les MAR/SAR sont des régions d’ADN identifiées par leur association à la matrice ou au squelette nucléaire dans des préparations expérimentales."
  },
  {
    "order": 59,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel sigle désigne un domaine chromatinien associé à la lamina ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "LAD",
        "Lamina-Associated Domain",
        "Lamina Associated Domain"
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
    "order": 60,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur « Nucléosome », laquelle est exacte ?",
    "choices": [
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
        "content": "L’ADN reste entièrement rectiligne et ne s’enroule pas autour des histones.",
        "correct": false,
        "explanation": "L’enroulement de l’ADN autour du cœur d’histones est la base de la compaction."
      },
      {
        "content": "L’histone H1 fait partie des huit histones du cœur nucléosomique.",
        "correct": false,
        "explanation": "H1 est une histone de liaison associée à l’ADN linker et à l’entrée/sortie du nucléosome."
      },
      {
        "content": "Le nucléosome est constitué exclusivement d’ARN.",
        "correct": false,
        "explanation": "Il associe ADN et histones."
      }
    ],
    "explanation": "Le nucléosome est l’unité fondamentale de la chromatine : environ 147 paires de bases d’ADN s’enroulent en ~1,65 tour autour d’un octamère contenant deux copies de H2A, H2B, H3 et H4."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sur le thème « Histone H1 et compaction », sélectionnez les affirmations exactes.",
    "choices": [
      {
        "content": "H1 ne fait pas partie de l’octamère H2A-H2B-H3-H4 du cœur nucléosomique.",
        "correct": true,
        "explanation": "Le cœur est constitué des quatre histones en double exemplaire."
      },
      {
        "content": "La compaction de la chromatine est dynamique et modulable localement.",
        "correct": true,
        "explanation": "Elle varie selon l’activité transcriptionnelle et d’autres processus."
      },
      {
        "content": "Une chromatine plus compacte est toujours plus active transcriptionnellement.",
        "correct": false,
        "explanation": "Une compaction élevée est généralement associée à une moindre accessibilité."
      },
      {
        "content": "La chromatine ne peut exister que sous un seul niveau de compaction.",
        "correct": false,
        "explanation": "Elle adopte de nombreux états structuraux."
      },
      {
        "content": "H1 favorise des états de chromatine plus compacts.",
        "correct": true,
        "explanation": "Elle contribue à rapprocher et organiser les nucléosomes."
      }
    ],
    "explanation": "H1 est une histone de liaison qui interagit avec l’ADN linker et les zones d’entrée/sortie du nucléosome ; elle favorise la compaction sans appartenir à l’octamère du cœur."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel sigle désigne une région d’ADN associée à la matrice nucléaire dans les approches historiques ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "MAR",
        "Matrix-Associated Region",
        "Matrix Associated Region"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Une MAR est une région d’ADN définie expérimentalement par son association à la matrice ou au squelette nucléaire."
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment nomme-t-on l’unité fondamentale constituée d’ADN enroulé autour d’un octamère d’histones ?",
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
    "order": 64,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle histone de liaison est associée à l’ADN linker ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "H1",
        "histone H1"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "H1 est une histone de liaison associée à l’ADN linker ; elle ne fait pas partie de l’octamère d’histones du cœur nucléosomique."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien d’histones composent le cœur d’un nucléosome ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "8",
        "huit",
        "octamère",
        "octamere"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le cœur nucléosomique est un octamère : deux copies de chacune des histones H2A, H2B, H3 et H4."
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le thème « Matrice nucléaire : concept opérationnel » ?",
    "choices": [
      {
        "content": "Un réseau fibreux interne unique et immuable a été démontré comme squelette universel de tous les noyaux vivants.",
        "correct": false,
        "explanation": "La notion de matrice nucléaire interne rigide et universelle reste controversée."
      },
      {
        "content": "La lamina nucléaire est une structure protéique bien établie sous la membrane interne.",
        "correct": true,
        "explanation": "Elle est constituée principalement de lamines."
      },
      {
        "content": "Des domaines de chromatine peuvent être associés à la lamina nucléaire.",
        "correct": true,
        "explanation": "Les LAD correspondent à des régions chromatiniennes associées à la lamina."
      },
      {
        "content": "NuMA est une protéine nucléaire importante notamment pour l’organisation du fuseau mitotique.",
        "correct": true,
        "explanation": "NuMA se redistribue en mitose et participe à l’organisation des pôles du fuseau."
      },
      {
        "content": "Le terme matrice nucléaire a été défini historiquement à partir de résidus obtenus après extractions biochimiques.",
        "correct": true,
        "explanation": "Il s’agit d’un concept opérationnel issu de protocoles d’extraction."
      }
    ],
    "explanation": "La « matrice nucléaire » désigne historiquement un résidu protéique obtenu après extractions ; certaines structures comme la lamina sont bien établies, tandis que l’existence d’un réseau interne unique et stable reste un concept expérimental à manier avec prudence."
  }
];
