import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

export const UE14_CELL_CH2_SECTION_A_V2: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de « les fonctions générales de la membrane plasmique », quelles affirmations sont conformes à la fiche ?",
    "choices": [
      {
        "content": "La membrane plasmique entoure totalement la cellule.",
        "correct": true,
        "explanation": "La membrane délimite la cellule et contrôle des échanges avec le milieu extérieur."
      },
      {
        "content": "La membrane plasmique ne se trouve qu’autour du noyau.",
        "correct": false,
        "explanation": "La membrane délimite la cellule et contrôle des échanges avec le milieu extérieur."
      },
      {
        "content": "Elle sépare le cytosol du milieu extracellulaire.",
        "correct": true,
        "explanation": "La membrane délimite la cellule et contrôle des échanges avec le milieu extérieur."
      },
      {
        "content": "Elle met directement en continuité le cytosol et le milieu extracellulaire sans barrière.",
        "correct": false,
        "explanation": "La membrane délimite la cellule et contrôle des échanges avec le milieu extérieur."
      }
    ],
    "explanation": "La membrane délimite la cellule et contrôle des échanges avec le milieu extérieur."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi ces propositions sur « l’épaisseur de la membrane plasmique selon la fiche », laquelle est correcte ?",
    "choices": [
      {
        "content": "Cette finesse explique qu’elle soit observée en microscopie électronique.",
        "correct": true,
        "explanation": "Le repère local est environ 7,5 nm et une visualisation en microscopie électronique."
      },
      {
        "content": "La membrane est facilement visible à l’œil nu.",
        "correct": false,
        "explanation": "Le repère local est environ 7,5 nm et une visualisation en microscopie électronique."
      },
      {
        "content": "Elle est décrite comme deux feuillets denses aux photons.",
        "correct": false,
        "explanation": "Le repère local est environ 7,5 nm et une visualisation en microscopie électronique."
      },
      {
        "content": "La fiche indique une épaisseur de 7,5 µm.",
        "correct": false,
        "explanation": "Le repère local est environ 7,5 nm et une visualisation en microscopie électronique."
      }
    ],
    "explanation": "Le repère local est environ 7,5 nm et une visualisation en microscopie électronique."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Réponse numérique : quel pourcentage de lipides est donné pour la membrane plasmique dans la fiche ?",
    "answer": {
      "type": "number",
      "value": 70,
      "tolerance": 0
    },
    "explanation": "La proportion 70 % lipides / 30 % protéines est un repère propre à cette fiche."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Selon le support, quelle affirmation concernant « les phospholipides amphiphiles » est juste ?",
    "choices": [
      {
        "content": "Les phospholipides possèdent une tête hydrophile.",
        "correct": true,
        "explanation": "L’amphiphilie des phospholipides explique leur organisation en bicouche entre deux milieux aqueux."
      },
      {
        "content": "La tête des phospholipides est décrite comme hydrophobe et la queue comme hydrophile.",
        "correct": false,
        "explanation": "L’amphiphilie des phospholipides explique leur organisation en bicouche entre deux milieux aqueux."
      },
      {
        "content": "Les phospholipides sont entièrement solubles dans l’eau sans organisation.",
        "correct": false,
        "explanation": "L’amphiphilie des phospholipides explique leur organisation en bicouche entre deux milieux aqueux."
      },
      {
        "content": "La bicouche oriente toutes les têtes vers son cœur hydrophobe.",
        "correct": false,
        "explanation": "L’amphiphilie des phospholipides explique leur organisation en bicouche entre deux milieux aqueux."
      }
    ],
    "explanation": "L’amphiphilie des phospholipides explique leur organisation en bicouche entre deux milieux aqueux."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles affirmations décrivent correctement « le rôle du cholestérol dans la fiche » ?",
    "choices": [
      {
        "content": "Il stabilise la bicouche phospholipidique.",
        "correct": true,
        "explanation": "Le support associe le cholestérol à la stabilisation de la bicouche et à la fluidité."
      },
      {
        "content": "Il est absent de la membrane plasmique dans la fiche.",
        "correct": false,
        "explanation": "Le support associe le cholestérol à la stabilisation de la bicouche et à la fluidité."
      },
      {
        "content": "La quantité de cholestérol participe aux propriétés de fluidité.",
        "correct": true,
        "explanation": "Le support associe le cholestérol à la stabilisation de la bicouche et à la fluidité."
      },
      {
        "content": "Il rend la bicouche nécessairement perméable à tous les ions.",
        "correct": false,
        "explanation": "Le support associe le cholestérol à la stabilisation de la bicouche et à la fluidité."
      }
    ],
    "explanation": "Le support associe le cholestérol à la stabilisation de la bicouche et à la fluidité."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle donnée est correcte concernant « les protéines transmembranaires » ?",
    "choices": [
      {
        "content": "Elles participent notamment à la perméabilité sélective et aux contacts avec les milieux intra- et extracellulaires.",
        "correct": true,
        "explanation": "Les protéines transmembranaires associent segments hydrophobes membranaires et domaines hydrophiles."
      },
      {
        "content": "Elles ne participent à aucune fonction membranaire.",
        "correct": false,
        "explanation": "Les protéines transmembranaires associent segments hydrophobes membranaires et domaines hydrophiles."
      },
      {
        "content": "Elles sont constituées uniquement de séquences hydrophiles flottant dans le cytosol.",
        "correct": false,
        "explanation": "Les protéines transmembranaires associent segments hydrophobes membranaires et domaines hydrophiles."
      },
      {
        "content": "Une protéine transmembranaire ne traverse jamais la bicouche.",
        "correct": false,
        "explanation": "Les protéines transmembranaires associent segments hydrophobes membranaires et domaines hydrophiles."
      }
    ],
    "explanation": "Les protéines transmembranaires associent segments hydrophobes membranaires et domaines hydrophiles."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Selon la fiche, quelles propositions concernant « l’orientation générale des protéines transmembranaires selon la fiche » sont correctes ?",
    "choices": [
      {
        "content": "La fiche indique généralement un domaine COOH vers l’intérieur.",
        "correct": true,
        "explanation": "Le support donne une orientation générale, tout en présentant ensuite des exemples particuliers."
      },
      {
        "content": "La fiche affirme que le COOH est toujours extracellulaire pour toutes les protéines.",
        "correct": false,
        "explanation": "Le support donne une orientation générale, tout en présentant ensuite des exemples particuliers."
      },
      {
        "content": "Elle indique généralement un domaine NH2 vers l’extérieur.",
        "correct": true,
        "explanation": "Le support donne une orientation générale, tout en présentant ensuite des exemples particuliers."
      },
      {
        "content": "La rhodopsine est présentée comme une protéine sans traversée membranaire.",
        "correct": false,
        "explanation": "Le support donne une orientation générale, tout en présentant ensuite des exemples particuliers."
      }
    ],
    "explanation": "Le support donne une orientation générale, tout en présentant ensuite des exemples particuliers."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de « les modes d’ancrage des protéines membranaires », quelle proposition est juste ?",
    "choices": [
      {
        "content": "Un ancrage GPI est associé à la face extracellulaire.",
        "correct": true,
        "explanation": "La fiche compare ancrage lipidique intracellulaire, GPI extracellulaire et boucle hydrophobe."
      },
      {
        "content": "Les acides gras fixent toujours la protéine sur la face extracellulaire selon la fiche.",
        "correct": false,
        "explanation": "La fiche compare ancrage lipidique intracellulaire, GPI extracellulaire et boucle hydrophobe."
      },
      {
        "content": "La cavéoline est un exemple d’ADN membranaire.",
        "correct": false,
        "explanation": "La fiche compare ancrage lipidique intracellulaire, GPI extracellulaire et boucle hydrophobe."
      },
      {
        "content": "Le GPI est présenté comme un ancrage exclusivement nucléaire.",
        "correct": false,
        "explanation": "La fiche compare ancrage lipidique intracellulaire, GPI extracellulaire et boucle hydrophobe."
      }
    ],
    "explanation": "La fiche compare ancrage lipidique intracellulaire, GPI extracellulaire et boucle hydrophobe."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Au sujet de « la membrane de l’hématie », quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "La spectrine constitue un élément majeur du cytosquelette de l’hématie.",
        "correct": true,
        "explanation": "La membrane de l’hématie sert d’exemple d’organisation associant protéines transmembranaires et cytosquelette."
      },
      {
        "content": "La bande 3 est une protéine nucléaire.",
        "correct": false,
        "explanation": "La membrane de l’hématie sert d’exemple d’organisation associant protéines transmembranaires et cytosquelette."
      },
      {
        "content": "La bande 3 est une protéine transmembranaire citée.",
        "correct": true,
        "explanation": "La membrane de l’hématie sert d’exemple d’organisation associant protéines transmembranaires et cytosquelette."
      },
      {
        "content": "L’ankyrine est une protéine transmembranaire selon la fiche.",
        "correct": false,
        "explanation": "La membrane de l’hématie sert d’exemple d’organisation associant protéines transmembranaires et cytosquelette."
      }
    ],
    "explanation": "La membrane de l’hématie sert d’exemple d’organisation associant protéines transmembranaires et cytosquelette."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les énoncés suivants, lequel est exact pour « les groupes sanguins ABO dans la fiche » ?",
    "choices": [
      {
        "content": "La présence ou l’absence de certains motifs glucidiques membranaires distingue les groupes A, B et O.",
        "correct": true,
        "explanation": "La fiche utilise le système ABO comme exemple de rôle des glucides membranaires."
      },
      {
        "content": "Les groupes ABO sont déterminés uniquement par la quantité de spectrine.",
        "correct": false,
        "explanation": "La fiche utilise le système ABO comme exemple de rôle des glucides membranaires."
      },
      {
        "content": "La fiche décrit l’antigène ABO comme un segment d’ADN nucléaire.",
        "correct": false,
        "explanation": "La fiche utilise le système ABO comme exemple de rôle des glucides membranaires."
      },
      {
        "content": "La présence de cholestérol détermine à elle seule le groupe ABO.",
        "correct": false,
        "explanation": "La fiche utilise le système ABO comme exemple de rôle des glucides membranaires."
      }
    ],
    "explanation": "La fiche utilise le système ABO comme exemple de rôle des glucides membranaires."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans une situation d’application concernant « la composition globale de la membrane selon la fiche », quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle donne environ 30 % de protéines.",
        "correct": true,
        "explanation": "La proportion 70 % lipides / 30 % protéines est un repère propre à cette fiche."
      },
      {
        "content": "Elle présente les protéines comme totalement absentes.",
        "correct": false,
        "explanation": "La proportion 70 % lipides / 30 % protéines est un repère propre à cette fiche."
      },
      {
        "content": "Elle mentionne en plus une petite quantité de glucides.",
        "correct": true,
        "explanation": "La proportion 70 % lipides / 30 % protéines est un repère propre à cette fiche."
      },
      {
        "content": "La membrane est décrite comme composée exclusivement d’eau.",
        "correct": false,
        "explanation": "La proportion 70 % lipides / 30 % protéines est un repère propre à cette fiche."
      }
    ],
    "explanation": "La proportion 70 % lipides / 30 % protéines est un repère propre à cette fiche."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition est exacte concernant « les phospholipides amphiphiles » ?",
    "choices": [
      {
        "content": "Dans l’eau, leur organisation contribue à former une bicouche.",
        "correct": true,
        "explanation": "L’amphiphilie des phospholipides explique leur organisation en bicouche entre deux milieux aqueux."
      },
      {
        "content": "La bicouche oriente toutes les têtes vers son cœur hydrophobe.",
        "correct": false,
        "explanation": "L’amphiphilie des phospholipides explique leur organisation en bicouche entre deux milieux aqueux."
      },
      {
        "content": "La tête des phospholipides est décrite comme hydrophobe et la queue comme hydrophile.",
        "correct": false,
        "explanation": "L’amphiphilie des phospholipides explique leur organisation en bicouche entre deux milieux aqueux."
      },
      {
        "content": "Les phospholipides sont entièrement solubles dans l’eau sans organisation.",
        "correct": false,
        "explanation": "L’amphiphilie des phospholipides explique leur organisation en bicouche entre deux milieux aqueux."
      }
    ],
    "explanation": "L’amphiphilie des phospholipides explique leur organisation en bicouche entre deux milieux aqueux."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour appliquer les notions sur « le rôle du cholestérol dans la fiche », quelles propositions faut-il retenir ?",
    "choices": [
      {
        "content": "Le cholestérol fait partie des lipides membranaires cités.",
        "correct": true,
        "explanation": "Le support associe le cholestérol à la stabilisation de la bicouche et à la fluidité."
      },
      {
        "content": "Le cholestérol est décrit comme une protéine transmembranaire.",
        "correct": false,
        "explanation": "Le support associe le cholestérol à la stabilisation de la bicouche et à la fluidité."
      },
      {
        "content": "Il stabilise la bicouche phospholipidique.",
        "correct": true,
        "explanation": "Le support associe le cholestérol à la stabilisation de la bicouche et à la fluidité."
      },
      {
        "content": "Il est absent de la membrane plasmique dans la fiche.",
        "correct": false,
        "explanation": "Le support associe le cholestérol à la stabilisation de la bicouche et à la fluidité."
      }
    ],
    "explanation": "Le support associe le cholestérol à la stabilisation de la bicouche et à la fluidité."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi ces propositions sur « les protéines transmembranaires », laquelle est correcte ?",
    "choices": [
      {
        "content": "Ces segments peuvent être organisés en hélices α.",
        "correct": true,
        "explanation": "Les protéines transmembranaires associent segments hydrophobes membranaires et domaines hydrophiles."
      },
      {
        "content": "Une protéine transmembranaire ne traverse jamais la bicouche.",
        "correct": false,
        "explanation": "Les protéines transmembranaires associent segments hydrophobes membranaires et domaines hydrophiles."
      },
      {
        "content": "Elles ne participent à aucune fonction membranaire.",
        "correct": false,
        "explanation": "Les protéines transmembranaires associent segments hydrophobes membranaires et domaines hydrophiles."
      },
      {
        "content": "Elles sont constituées uniquement de séquences hydrophiles flottant dans le cytosol.",
        "correct": false,
        "explanation": "Les protéines transmembranaires associent segments hydrophobes membranaires et domaines hydrophiles."
      }
    ],
    "explanation": "Les protéines transmembranaires associent segments hydrophobes membranaires et domaines hydrophiles."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels repères sur « l’orientation générale des protéines transmembranaires selon la fiche » sont utiles dans une situation d’application ?",
    "choices": [
      {
        "content": "La rhodopsine illustre une protéine possédant plusieurs hélices transmembranaires.",
        "correct": true,
        "explanation": "Le support donne une orientation générale, tout en présentant ensuite des exemples particuliers."
      },
      {
        "content": "NH2 et COOH sont décrits comme deux lipides membranaires.",
        "correct": false,
        "explanation": "Le support donne une orientation générale, tout en présentant ensuite des exemples particuliers."
      },
      {
        "content": "La fiche indique généralement un domaine COOH vers l’intérieur.",
        "correct": true,
        "explanation": "Le support donne une orientation générale, tout en présentant ensuite des exemples particuliers."
      },
      {
        "content": "La fiche affirme que le COOH est toujours extracellulaire pour toutes les protéines.",
        "correct": false,
        "explanation": "Le support donne une orientation générale, tout en présentant ensuite des exemples particuliers."
      }
    ],
    "explanation": "Le support donne une orientation générale, tout en présentant ensuite des exemples particuliers."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Application — Réponse numérique en nm : quelle épaisseur approximative de membrane plasmique est indiquée dans la fiche ?",
    "answer": {
      "type": "number",
      "value": 7.5,
      "tolerance": 0.1
    },
    "explanation": "Le repère local est environ 7,5 nm et une visualisation en microscopie électronique."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une anomalie du cytosquelette membranaire d’une hématie peut modifier sa capacité à conserver sa forme biconcave. Quelles propositions décrivent correctement le mécanisme en jeu ?",
    "choices": [
      {
        "content": "L’ankyrine est une protéine périphérique de la face interne.",
        "correct": true,
        "explanation": "La membrane de l’hématie sert d’exemple d’organisation associant protéines transmembranaires et cytosquelette."
      },
      {
        "content": "La spectrine est un antigène glucidique du système ABO.",
        "correct": false,
        "explanation": "La membrane de l’hématie sert d’exemple d’organisation associant protéines transmembranaires et cytosquelette."
      },
      {
        "content": "La spectrine constitue un élément majeur du cytosquelette de l’hématie.",
        "correct": true,
        "explanation": "La membrane de l’hématie sert d’exemple d’organisation associant protéines transmembranaires et cytosquelette."
      },
      {
        "content": "La bande 3 est une protéine nucléaire.",
        "correct": false,
        "explanation": "La membrane de l’hématie sert d’exemple d’organisation associant protéines transmembranaires et cytosquelette."
      }
    ],
    "explanation": "La membrane de l’hématie sert d’exemple d’organisation associant protéines transmembranaires et cytosquelette."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle donnée est correcte concernant « les groupes sanguins ABO dans la fiche » ?",
    "choices": [
      {
        "content": "Des anticorps correspondants sont présents dans le sérum selon le groupe.",
        "correct": true,
        "explanation": "La fiche utilise le système ABO comme exemple de rôle des glucides membranaires."
      },
      {
        "content": "La présence de cholestérol détermine à elle seule le groupe ABO.",
        "correct": false,
        "explanation": "La fiche utilise le système ABO comme exemple de rôle des glucides membranaires."
      },
      {
        "content": "Les groupes ABO sont déterminés uniquement par la quantité de spectrine.",
        "correct": false,
        "explanation": "La fiche utilise le système ABO comme exemple de rôle des glucides membranaires."
      },
      {
        "content": "La fiche décrit l’antigène ABO comme un segment d’ADN nucléaire.",
        "correct": false,
        "explanation": "La fiche utilise le système ABO comme exemple de rôle des glucides membranaires."
      }
    ],
    "explanation": "La fiche utilise le système ABO comme exemple de rôle des glucides membranaires."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Application transversale autour de « les fonctions générales de la membrane plasmique » — sélectionnez exactement les trois affirmations correctes.",
    "requiredSelectionCount": 3,
    "choices": [
      {
        "content": "La bande 3 est une protéine transmembranaire citée.",
        "correct": true,
        "explanation": "La membrane de l’hématie sert d’exemple d’organisation associant protéines transmembranaires et cytosquelette."
      },
      {
        "content": "La fiche relie les antigènes ABO à des structures glucidiques des globules rouges.",
        "correct": true,
        "explanation": "La fiche utilise le système ABO comme exemple de rôle des glucides membranaires."
      },
      {
        "content": "Elle se comporte comme un filtre sélectif.",
        "correct": true,
        "explanation": "La membrane délimite la cellule et contrôle des échanges avec le milieu extérieur."
      },
      {
        "content": "La fiche indique une épaisseur de 7,5 µm.",
        "correct": false,
        "explanation": "Le repère local est environ 7,5 nm et une visualisation en microscopie électronique."
      },
      {
        "content": "Elle présente les protéines comme totalement absentes.",
        "correct": false,
        "explanation": "La proportion 70 % lipides / 30 % protéines est un repère propre à cette fiche."
      },
      {
        "content": "La bicouche oriente toutes les têtes vers son cœur hydrophobe.",
        "correct": false,
        "explanation": "L’amphiphilie des phospholipides explique leur organisation en bicouche entre deux milieux aqueux."
      }
    ],
    "explanation": "Cette question croise plusieurs repères de la section."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de « l’épaisseur de la membrane plasmique selon la fiche », quelle proposition est juste ?",
    "choices": [
      {
        "content": "Cette finesse explique qu’elle soit observée en microscopie électronique.",
        "correct": true,
        "explanation": "Le repère local est environ 7,5 nm et une visualisation en microscopie électronique."
      },
      {
        "content": "La membrane est facilement visible à l’œil nu.",
        "correct": false,
        "explanation": "Le repère local est environ 7,5 nm et une visualisation en microscopie électronique."
      },
      {
        "content": "Elle est décrite comme deux feuillets denses aux photons.",
        "correct": false,
        "explanation": "Le repère local est environ 7,5 nm et une visualisation en microscopie électronique."
      },
      {
        "content": "La fiche indique une épaisseur de 7,5 µm.",
        "correct": false,
        "explanation": "Le repère local est environ 7,5 nm et une visualisation en microscopie électronique."
      }
    ],
    "explanation": "Le repère local est environ 7,5 nm et une visualisation en microscopie électronique."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Mise en application de « la composition globale de la membrane selon la fiche » : quelles affirmations sont justes ?",
    "choices": [
      {
        "content": "Elle mentionne en plus une petite quantité de glucides.",
        "correct": true,
        "explanation": "La proportion 70 % lipides / 30 % protéines est un repère propre à cette fiche."
      },
      {
        "content": "La membrane est décrite comme composée exclusivement d’eau.",
        "correct": false,
        "explanation": "La proportion 70 % lipides / 30 % protéines est un repère propre à cette fiche."
      },
      {
        "content": "La fiche donne environ 70 % de lipides.",
        "correct": true,
        "explanation": "La proportion 70 % lipides / 30 % protéines est un repère propre à cette fiche."
      },
      {
        "content": "La fiche donne environ 70 % d’ADN.",
        "correct": false,
        "explanation": "La proportion 70 % lipides / 30 % protéines est un repère propre à cette fiche."
      }
    ],
    "explanation": "La proportion 70 % lipides / 30 % protéines est un repère propre à cette fiche."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "question": "Consolidation — « les fonctions générales de la membrane plasmique » : sélectionnez exactement les cinq affirmations correctes.",
    "requiredSelectionCount": 5,
    "choices": [
      {
        "content": "La fiche indique une épaisseur d’environ 7,5 nm.",
        "correct": true,
        "explanation": "Le repère local est environ 7,5 nm et une visualisation en microscopie électronique."
      },
      {
        "content": "Elle donne environ 30 % de protéines.",
        "correct": true,
        "explanation": "La proportion 70 % lipides / 30 % protéines est un repère propre à cette fiche."
      },
      {
        "content": "Dans l’eau, leur organisation contribue à former une bicouche.",
        "correct": true,
        "explanation": "L’amphiphilie des phospholipides explique leur organisation en bicouche entre deux milieux aqueux."
      },
      {
        "content": "Le cholestérol fait partie des lipides membranaires cités.",
        "correct": true,
        "explanation": "Le support associe le cholestérol à la stabilisation de la bicouche et à la fluidité."
      },
      {
        "content": "Ces segments peuvent être organisés en hélices α.",
        "correct": true,
        "explanation": "Les protéines transmembranaires associent segments hydrophobes membranaires et domaines hydrophiles."
      },
      {
        "content": "NH2 et COOH sont décrits comme deux lipides membranaires.",
        "correct": false,
        "explanation": "Le support donne une orientation générale, tout en présentant ensuite des exemples particuliers."
      },
      {
        "content": "Le GPI est présenté comme un ancrage exclusivement nucléaire.",
        "correct": false,
        "explanation": "La fiche compare ancrage lipidique intracellulaire, GPI extracellulaire et boucle hydrophobe."
      },
      {
        "content": "La spectrine est un antigène glucidique du système ABO.",
        "correct": false,
        "explanation": "La membrane de l’hématie sert d’exemple d’organisation associant protéines transmembranaires et cytosquelette."
      }
    ],
    "explanation": "La sélection longue vérifie plusieurs notions de la section simultanément."
  }
];
