import type { SeedQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch2 — Structure et composition de la membrane — V2 active */
export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de « Organisation générale de la membrane plasmique », sélectionnez les affirmations fausses.",
    "explanation": "La membrane plasmique est une bicouche lipidique d’environ quelques nanomètres qui sépare cytosol et milieu extracellulaire. Elle est sélectivement perméable, dynamique et capable de fusion/remodelage lors de processus cellulaires.",
    "choices": [
      {
        "content": "La membrane plasmique empêche absolument tout échange entre la cellule et son environnement.",
        "correct": true,
        "explanation": "Incorrect. La membrane plasmique est une bicouche lipidique d’environ quelques nanomètres qui sépare cytosol et milieu extracellulaire. Elle est sélectivement perméable, dynamique et capable de fusion/remodelage lors de processus cellulaires."
      },
      {
        "content": "Toutes les membranes plasmatiques ont exactement la même composition lipidique et protéique.",
        "correct": true,
        "explanation": "Incorrect. La membrane plasmique est une bicouche lipidique d’environ quelques nanomètres qui sépare cytosol et milieu extracellulaire. Elle est sélectivement perméable, dynamique et capable de fusion/remodelage lors de processus cellulaires."
      },
      {
        "content": "La membrane plasmique sépare le cytosol du milieu extracellulaire.",
        "correct": false,
        "explanation": "Exact. La membrane plasmique est une bicouche lipidique d’environ quelques nanomètres qui sépare cytosol et milieu extracellulaire. Elle est sélectivement perméable, dynamique et capable de fusion/remodelage lors de processus cellulaires."
      },
      {
        "content": "Deux membranes cellulaires ne peuvent jamais fusionner dans aucune situation biologique.",
        "correct": true,
        "explanation": "Incorrect. La membrane plasmique est une bicouche lipidique d’environ quelques nanomètres qui sépare cytosol et milieu extracellulaire. Elle est sélectivement perméable, dynamique et capable de fusion/remodelage lors de processus cellulaires."
      },
      {
        "content": "La membrane plasmique mesure plusieurs micromètres d’épaisseur.",
        "correct": true,
        "explanation": "Incorrect. La membrane plasmique est une bicouche lipidique d’environ quelques nanomètres qui sépare cytosol et milieu extracellulaire. Elle est sélectivement perméable, dynamique et capable de fusion/remodelage lors de processus cellulaires."
      }
    ]
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment nomme-t-on la structure lipidique fondamentale formée par deux feuillets opposés ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "bicouche lipidique",
        "bicouche phospholipidique",
        "bicouche de phospholipides"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La membrane plasmique repose sur une bicouche de lipides amphiphiles."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant « Phospholipides, cholestérol et amphiphilie », quelles affirmations sont correctes ?",
    "explanation": "Les phospholipides sont amphiphiles : têtes hydrophiles vers les milieux aqueux, chaînes hydrophobes au cœur de la bicouche. Le cholestérol module fluidité et perméabilité plutôt que de simplement rigidifier la membrane.",
    "choices": [
      {
        "content": "Les chaînes d’acides gras des phospholipides sont exposées au milieu aqueux tandis que les têtes polaires sont enfouies au centre.",
        "correct": false,
        "explanation": "Incorrect. Les phospholipides sont amphiphiles : têtes hydrophiles vers les milieux aqueux, chaînes hydrophobes au cœur de la bicouche. Le cholestérol module fluidité et perméabilité plutôt que de simplement rigidifier la membrane."
      },
      {
        "content": "Les phospholipides membranaires possèdent une région hydrophile et une région hydrophobe.",
        "correct": true,
        "explanation": "Exact. Les phospholipides sont amphiphiles : têtes hydrophiles vers les milieux aqueux, chaînes hydrophobes au cœur de la bicouche. Le cholestérol module fluidité et perméabilité plutôt que de simplement rigidifier la membrane."
      },
      {
        "content": "Les têtes polaires des phospholipides sont exposées aux milieux aqueux de part et d’autre de la bicouche.",
        "correct": true,
        "explanation": "Exact. Les phospholipides sont amphiphiles : têtes hydrophiles vers les milieux aqueux, chaînes hydrophobes au cœur de la bicouche. Le cholestérol module fluidité et perméabilité plutôt que de simplement rigidifier la membrane."
      },
      {
        "content": "Dans une bicouche, les chaînes hydrophobes sont majoritairement orientées vers le cœur de la membrane.",
        "correct": true,
        "explanation": "Exact. Les phospholipides sont amphiphiles : têtes hydrophiles vers les milieux aqueux, chaînes hydrophobes au cœur de la bicouche. Le cholestérol module fluidité et perméabilité plutôt que de simplement rigidifier la membrane."
      },
      {
        "content": "Le cholestérol s’intercale entre les phospholipides des membranes animales.",
        "correct": true,
        "explanation": "Exact. Les phospholipides sont amphiphiles : têtes hydrophiles vers les milieux aqueux, chaînes hydrophobes au cœur de la bicouche. Le cholestérol module fluidité et perméabilité plutôt que de simplement rigidifier la membrane."
      }
    ]
  },
  {
    "order": 4,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles affirmations décrivent correctement « Protéines membranaires et topologie » ?",
    "explanation": "Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle.",
    "choices": [
      {
        "content": "Toute protéine transmembranaire possède obligatoirement son N-terminal extracellulaire et son C-terminal cytosolique.",
        "correct": false,
        "explanation": "Incorrect. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Une protéine transmembranaire peut traverser la bicouche une ou plusieurs fois.",
        "correct": true,
        "explanation": "Exact. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Les segments transmembranaires alpha-hélicoïdaux sont souvent enrichis en résidus hydrophobes.",
        "correct": true,
        "explanation": "Exact. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Les segments transmembranaires alpha-hélicoïdaux sont formés exclusivement d’acides aminés chargés.",
        "correct": false,
        "explanation": "Incorrect. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Une protéine membranaire doit forcément traverser la bicouche.",
        "correct": false,
        "explanation": "Incorrect. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      }
    ]
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel terme décrit une molécule possédant à la fois une région hydrophile et une région hydrophobe ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "amphiphile",
        "amphipathique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les phospholipides membranaires sont des molécules amphiphiles."
  },
  {
    "order": 6,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sélectionnez les affirmations compatibles avec « Ancrages lipidiques des protéines ».",
    "explanation": "Des modifications lipidiques peuvent fixer des protéines à une face membranaire : acylation/prénylation du côté cytosolique et ancre GPI du côté exoplasmique. Ces ancrages n’impliquent pas nécessairement un domaine transmembranaire.",
    "choices": [
      {
        "content": "L’ancre GPI fixe une protéine directement au cytosquelette sur la face cytosolique.",
        "correct": false,
        "explanation": "Incorrect. Des modifications lipidiques peuvent fixer des protéines à une face membranaire : acylation/prénylation du côté cytosolique et ancre GPI du côté exoplasmique. Ces ancrages n’impliquent pas nécessairement un domaine transmembranaire."
      },
      {
        "content": "La myristoylation ou la palmitoylation peut contribuer à l’association d’une protéine avec la face cytosolique.",
        "correct": true,
        "explanation": "Exact. Des modifications lipidiques peuvent fixer des protéines à une face membranaire : acylation/prénylation du côté cytosolique et ancre GPI du côté exoplasmique. Ces ancrages n’impliquent pas nécessairement un domaine transmembranaire."
      },
      {
        "content": "Un ancrage lipidique permet à certaines protéines de rester membranaires sans segment transmembranaire complet.",
        "correct": true,
        "explanation": "Exact. Des modifications lipidiques peuvent fixer des protéines à une face membranaire : acylation/prénylation du côté cytosolique et ancre GPI du côté exoplasmique. Ces ancrages n’impliquent pas nécessairement un domaine transmembranaire."
      },
      {
        "content": "Toute protéine acylée est obligatoirement une protéine transmembranaire multipasse.",
        "correct": false,
        "explanation": "Incorrect. Des modifications lipidiques peuvent fixer des protéines à une face membranaire : acylation/prénylation du côté cytosolique et ancre GPI du côté exoplasmique. Ces ancrages n’impliquent pas nécessairement un domaine transmembranaire."
      },
      {
        "content": "Une protéine à ancre GPI est reliée au feuillet exoplasmique de la membrane plasmique.",
        "correct": true,
        "explanation": "Exact. Des modifications lipidiques peuvent fixer des protéines à une face membranaire : acylation/prénylation du côté cytosolique et ancre GPI du côté exoplasmique. Ces ancrages n’impliquent pas nécessairement un domaine transmembranaire."
      }
    ]
  },
  {
    "order": 7,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi ces affirmations concernant « Membrane de l’hématie et cytosquelette sous-membranaire », retenez exactement les 3 justes.",
    "explanation": "Dans l’hématie, AE1/bande 3 est un échangeur Cl−/HCO3− ; ankyrine, spectrine, actine et protéine 4.1 organisent le réseau sous-membranaire. La glycophorine est fortement glycosylée et contribue à la charge négative de surface.",
    "choices": [
      {
        "content": "La spectrine est une glycoprotéine exposée majoritairement à la surface extracellulaire.",
        "correct": false,
        "explanation": "Incorrect. Dans l’hématie, AE1/bande 3 est un échangeur Cl−/HCO3− ; ankyrine, spectrine, actine et protéine 4.1 organisent le réseau sous-membranaire. La glycophorine est fortement glycosylée et contribue à la charge négative de surface."
      },
      {
        "content": "La bande 3 est uniquement un canal à eau de type aquaporine.",
        "correct": false,
        "explanation": "Incorrect. Dans l’hématie, AE1/bande 3 est un échangeur Cl−/HCO3− ; ankyrine, spectrine, actine et protéine 4.1 organisent le réseau sous-membranaire. La glycophorine est fortement glycosylée et contribue à la charge négative de surface."
      },
      {
        "content": "L’échange Cl−/HCO3− de la bande 3 participe indirectement au transport du CO2 dans le sang.",
        "correct": true,
        "explanation": "Exact. Dans l’hématie, AE1/bande 3 est un échangeur Cl−/HCO3− ; ankyrine, spectrine, actine et protéine 4.1 organisent le réseau sous-membranaire. La glycophorine est fortement glycosylée et contribue à la charge négative de surface."
      },
      {
        "content": "L’ankyrine relie notamment la bande 3 au réseau de spectrine sur la face cytosolique.",
        "correct": true,
        "explanation": "Exact. Dans l’hématie, AE1/bande 3 est un échangeur Cl−/HCO3− ; ankyrine, spectrine, actine et protéine 4.1 organisent le réseau sous-membranaire. La glycophorine est fortement glycosylée et contribue à la charge négative de surface."
      },
      {
        "content": "La bande 3, ou AE1, est une protéine transmembranaire échangeant principalement chlorure et bicarbonate.",
        "correct": true,
        "explanation": "Exact. Dans l’hématie, AE1/bande 3 est un échangeur Cl−/HCO3− ; ankyrine, spectrine, actine et protéine 4.1 organisent le réseau sous-membranaire. La glycophorine est fortement glycosylée et contribue à la charge négative de surface."
      }
    ],
    "requiredSelectionCount": 3
  },
  {
    "order": 8,
    "difficulty": "HARD",
    "format": "QRPL",
    "question": "Pour le thème « Glycocalyx et système ABO », retenez les cinq affirmations correctes parmi les dix proposées.",
    "explanation": "Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B.",
    "choices": [
      {
        "content": "Le glycocalyx participe à la protection et à la reconnaissance de la surface cellulaire.",
        "correct": true,
        "explanation": "Exact. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      },
      {
        "content": "Les antigènes ABO sont des segments d’ADN exposés à la surface de l’hématie.",
        "correct": false,
        "explanation": "Incorrect. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      },
      {
        "content": "Une hématie de groupe O possède néanmoins des structures glucidiques membranaires, dont l’antigène H.",
        "correct": true,
        "explanation": "Exact. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      },
      {
        "content": "Les antigènes A et B du système ABO diffèrent par leurs motifs glucidiques terminaux.",
        "correct": true,
        "explanation": "Exact. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      },
      {
        "content": "Les glucides membranaires du glycocalyx sont majoritairement exposés dans le cytosol.",
        "correct": false,
        "explanation": "Incorrect. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      },
      {
        "content": "Les chaînes glucidiques des glycoprotéines et glycolipides de la membrane plasmique sont exposées du côté extracellulaire.",
        "correct": true,
        "explanation": "Exact. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      },
      {
        "content": "Le groupe O ne porte ni déterminant A ni déterminant B sur l’antigène H.",
        "correct": true,
        "explanation": "Exact. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      },
      {
        "content": "Le glycocalyx est exclusivement constitué de cholestérol.",
        "correct": false,
        "explanation": "Incorrect. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      },
      {
        "content": "Le groupe O exprime simultanément les déterminants A et B.",
        "correct": false,
        "explanation": "Incorrect. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      },
      {
        "content": "Une hématie de groupe O est totalement dépourvue de glucides membranaires.",
        "correct": false,
        "explanation": "Incorrect. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      }
    ],
    "requiredSelectionCount": 5
  },
  {
    "order": 9,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel stérol module fortement la fluidité et la perméabilité des membranes animales ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cholestérol",
        "cholesterol"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le cholestérol s’intercale entre les phospholipides et tamponne les propriétés physiques de la bicouche."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement « Organisation générale de la membrane plasmique » ?",
    "explanation": "La membrane plasmique est une bicouche lipidique d’environ quelques nanomètres qui sépare cytosol et milieu extracellulaire. Elle est sélectivement perméable, dynamique et capable de fusion/remodelage lors de processus cellulaires.",
    "choices": [
      {
        "content": "Dans ce contexte, la membrane plasmique mesure plusieurs micromètres d’épaisseur.",
        "correct": false,
        "explanation": "Incorrect. La membrane plasmique est une bicouche lipidique d’environ quelques nanomètres qui sépare cytosol et milieu extracellulaire. Elle est sélectivement perméable, dynamique et capable de fusion/remodelage lors de processus cellulaires."
      },
      {
        "content": "La membrane plasmique est absente des cellules procaryotes.",
        "correct": false,
        "explanation": "Incorrect. La membrane plasmique est une bicouche lipidique d’environ quelques nanomètres qui sépare cytosol et milieu extracellulaire. Elle est sélectivement perméable, dynamique et capable de fusion/remodelage lors de processus cellulaires."
      },
      {
        "content": "La membrane plasmique est une barrière sélective plutôt qu’une paroi totalement imperméable.",
        "correct": true,
        "explanation": "Exact. La membrane plasmique est une bicouche lipidique d’environ quelques nanomètres qui sépare cytosol et milieu extracellulaire. Elle est sélectivement perméable, dynamique et capable de fusion/remodelage lors de processus cellulaires."
      },
      {
        "content": "Dans ce contexte, toutes les membranes plasmatiques ont exactement la même composition lipidique et protéique.",
        "correct": false,
        "explanation": "Incorrect. La membrane plasmique est une bicouche lipidique d’environ quelques nanomètres qui sépare cytosol et milieu extracellulaire. Elle est sélectivement perméable, dynamique et capable de fusion/remodelage lors de processus cellulaires."
      },
      {
        "content": "La membrane plasmique est constituée uniquement de protéines.",
        "correct": false,
        "explanation": "Incorrect. La membrane plasmique est une bicouche lipidique d’environ quelques nanomètres qui sépare cytosol et milieu extracellulaire. Elle est sélectivement perméable, dynamique et capable de fusion/remodelage lors de processus cellulaires."
      }
    ]
  },
  {
    "order": 11,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions ci-dessous relatives à « Phospholipides, cholestérol et amphiphilie », laquelle est correcte ?",
    "explanation": "Les phospholipides sont amphiphiles : têtes hydrophiles vers les milieux aqueux, chaînes hydrophobes au cœur de la bicouche. Le cholestérol module fluidité et perméabilité plutôt que de simplement rigidifier la membrane.",
    "choices": [
      {
        "content": "Dans une bicouche, les chaînes hydrophobes sont majoritairement orientées vers le cœur de la membrane.",
        "correct": true,
        "explanation": "Exact. Les phospholipides sont amphiphiles : têtes hydrophiles vers les milieux aqueux, chaînes hydrophobes au cœur de la bicouche. Le cholestérol module fluidité et perméabilité plutôt que de simplement rigidifier la membrane."
      },
      {
        "content": "Les phospholipides membranaires sont entièrement hydrophiles.",
        "correct": false,
        "explanation": "Incorrect. Les phospholipides sont amphiphiles : têtes hydrophiles vers les milieux aqueux, chaînes hydrophobes au cœur de la bicouche. Le cholestérol module fluidité et perméabilité plutôt que de simplement rigidifier la membrane."
      },
      {
        "content": "L’amphiphilie signifie qu’une molécule est exclusivement soluble dans les hydrocarbures.",
        "correct": false,
        "explanation": "Incorrect. Les phospholipides sont amphiphiles : têtes hydrophiles vers les milieux aqueux, chaînes hydrophobes au cœur de la bicouche. Le cholestérol module fluidité et perméabilité plutôt que de simplement rigidifier la membrane."
      },
      {
        "content": "Une bicouche lipidique pure laisse librement diffuser tous les ions.",
        "correct": false,
        "explanation": "Incorrect. Les phospholipides sont amphiphiles : têtes hydrophiles vers les milieux aqueux, chaînes hydrophobes au cœur de la bicouche. Le cholestérol module fluidité et perméabilité plutôt que de simplement rigidifier la membrane."
      },
      {
        "content": "Le cholestérol est absent des membranes des cellules animales.",
        "correct": false,
        "explanation": "Incorrect. Les phospholipides sont amphiphiles : têtes hydrophiles vers les milieux aqueux, chaînes hydrophobes au cœur de la bicouche. Le cholestérol module fluidité et perméabilité plutôt que de simplement rigidifier la membrane."
      }
    ]
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sélectionnez les affirmations compatibles avec « Protéines membranaires et topologie ».",
    "explanation": "Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle.",
    "choices": [
      {
        "content": "Les segments transmembranaires alpha-hélicoïdaux sont formés exclusivement d’acides aminés chargés.",
        "correct": false,
        "explanation": "Incorrect. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Une protéine périphérique traverse nécessairement plusieurs fois la bicouche.",
        "correct": false,
        "explanation": "Incorrect. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "L’orientation des extrémités N- et C-terminales dépend de la topologie propre à chaque protéine.",
        "correct": true,
        "explanation": "Exact. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Une protéine à ancre GPI est exposée sur la face cytosolique de la membrane plasmique.",
        "correct": false,
        "explanation": "Incorrect. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Les segments transmembranaires alpha-hélicoïdaux sont souvent enrichis en résidus hydrophobes.",
        "correct": true,
        "explanation": "Exact. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      }
    ]
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant « Ancrages lipidiques des protéines » ?",
    "explanation": "Des modifications lipidiques peuvent fixer des protéines à une face membranaire : acylation/prénylation du côté cytosolique et ancre GPI du côté exoplasmique. Ces ancrages n’impliquent pas nécessairement un domaine transmembranaire.",
    "choices": [
      {
        "content": "Un ancrage lipidique permet à certaines protéines de rester membranaires sans segment transmembranaire complet.",
        "correct": true,
        "explanation": "Exact. Des modifications lipidiques peuvent fixer des protéines à une face membranaire : acylation/prénylation du côté cytosolique et ancre GPI du côté exoplasmique. Ces ancrages n’impliquent pas nécessairement un domaine transmembranaire."
      },
      {
        "content": "Une ancre lipidique ne peut jamais être régulée ni participer au ciblage membranaire.",
        "correct": false,
        "explanation": "Incorrect. Des modifications lipidiques peuvent fixer des protéines à une face membranaire : acylation/prénylation du côté cytosolique et ancre GPI du côté exoplasmique. Ces ancrages n’impliquent pas nécessairement un domaine transmembranaire."
      },
      {
        "content": "Une protéine à ancre GPI est reliée au feuillet exoplasmique de la membrane plasmique.",
        "correct": true,
        "explanation": "Exact. Des modifications lipidiques peuvent fixer des protéines à une face membranaire : acylation/prénylation du côté cytosolique et ancre GPI du côté exoplasmique. Ces ancrages n’impliquent pas nécessairement un domaine transmembranaire."
      },
      {
        "content": "La palmitoylation expose nécessairement la protéine dans le milieu extracellulaire.",
        "correct": false,
        "explanation": "Incorrect. Des modifications lipidiques peuvent fixer des protéines à une face membranaire : acylation/prénylation du côté cytosolique et ancre GPI du côté exoplasmique. Ces ancrages n’impliquent pas nécessairement un domaine transmembranaire."
      },
      {
        "content": "Des protéines de signalisation peuvent être ciblées vers la membrane grâce à des modifications lipidiques.",
        "correct": true,
        "explanation": "Exact. Des modifications lipidiques peuvent fixer des protéines à une face membranaire : acylation/prénylation du côté cytosolique et ancre GPI du côté exoplasmique. Ces ancrages n’impliquent pas nécessairement un domaine transmembranaire."
      }
    ]
  },
  {
    "order": 14,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de « Membrane de l’hématie et cytosquelette sous-membranaire », repérez la seule affirmation correcte.",
    "explanation": "Dans l’hématie, AE1/bande 3 est un échangeur Cl−/HCO3− ; ankyrine, spectrine, actine et protéine 4.1 organisent le réseau sous-membranaire. La glycophorine est fortement glycosylée et contribue à la charge négative de surface.",
    "choices": [
      {
        "content": "L’échange Cl−/HCO3− de la bande 3 participe indirectement au transport du CO2 dans le sang.",
        "correct": true,
        "explanation": "Exact. Dans l’hématie, AE1/bande 3 est un échangeur Cl−/HCO3− ; ankyrine, spectrine, actine et protéine 4.1 organisent le réseau sous-membranaire. La glycophorine est fortement glycosylée et contribue à la charge négative de surface."
      },
      {
        "content": "La glycophorine est dépourvue de glucides.",
        "correct": false,
        "explanation": "Incorrect. Dans l’hématie, AE1/bande 3 est un échangeur Cl−/HCO3− ; ankyrine, spectrine, actine et protéine 4.1 organisent le réseau sous-membranaire. La glycophorine est fortement glycosylée et contribue à la charge négative de surface."
      },
      {
        "content": "La bande 3 est un récepteur nucléaire soluble.",
        "correct": false,
        "explanation": "Incorrect. Dans l’hématie, AE1/bande 3 est un échangeur Cl−/HCO3− ; ankyrine, spectrine, actine et protéine 4.1 organisent le réseau sous-membranaire. La glycophorine est fortement glycosylée et contribue à la charge négative de surface."
      },
      {
        "content": "L’ankyrine est une protéine multipasse qui assure le transport du glucose.",
        "correct": false,
        "explanation": "Incorrect. Dans l’hématie, AE1/bande 3 est un échangeur Cl−/HCO3− ; ankyrine, spectrine, actine et protéine 4.1 organisent le réseau sous-membranaire. La glycophorine est fortement glycosylée et contribue à la charge négative de surface."
      },
      {
        "content": "Le cytosquelette sous-membranaire rend l’hématie totalement indéformable.",
        "correct": false,
        "explanation": "Incorrect. Dans l’hématie, AE1/bande 3 est un échangeur Cl−/HCO3− ; ankyrine, spectrine, actine et protéine 4.1 organisent le réseau sous-membranaire. La glycophorine est fortement glycosylée et contribue à la charge négative de surface."
      }
    ]
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type d’ancre lipidique expose une protéine sur la face extracellulaire de la membrane plasmique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "GPI",
        "ancre GPI",
        "glycosylphosphatidylinositol"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Une ancre GPI est insérée dans le feuillet exoplasmique."
  },
  {
    "order": 16,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel nom porte la protéine érythrocytaire AE1 assurant l’échange chlorure/bicarbonate ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "bande 3",
        "band 3",
        "AE1",
        "SLC4A1"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La bande 3/AE1 est l’échangeur anionique majeur de l’hématie."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sur le thème « Glycocalyx et système ABO », sélectionnez exactement 2 propositions exactes.",
    "explanation": "Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B.",
    "choices": [
      {
        "content": "Les antigènes ABO sont des segments d’ADN exposés à la surface de l’hématie.",
        "correct": false,
        "explanation": "Incorrect. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      },
      {
        "content": "Le groupe O exprime simultanément les déterminants A et B.",
        "correct": false,
        "explanation": "Incorrect. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      },
      {
        "content": "Les antigènes A et B du système ABO diffèrent par leurs motifs glucidiques terminaux.",
        "correct": true,
        "explanation": "Exact. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      },
      {
        "content": "Le glycocalyx participe à la protection et à la reconnaissance de la surface cellulaire.",
        "correct": true,
        "explanation": "Exact. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      },
      {
        "content": "Le glycocalyx est exclusivement constitué de cholestérol.",
        "correct": false,
        "explanation": "Incorrect. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      }
    ],
    "requiredSelectionCount": 2
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Pour « Organisation générale de la membrane plasmique », quelle proposition doit être retenue ?",
    "explanation": "La membrane plasmique est une bicouche lipidique d’environ quelques nanomètres qui sépare cytosol et milieu extracellulaire. Elle est sélectivement perméable, dynamique et capable de fusion/remodelage lors de processus cellulaires.",
    "choices": [
      {
        "content": "La membrane plasmique est constituée uniquement de protéines.",
        "correct": false,
        "explanation": "Incorrect. La membrane plasmique est une bicouche lipidique d’environ quelques nanomètres qui sépare cytosol et milieu extracellulaire. Elle est sélectivement perméable, dynamique et capable de fusion/remodelage lors de processus cellulaires."
      },
      {
        "content": "La membrane plasmique est absente des cellules procaryotes.",
        "correct": false,
        "explanation": "Incorrect. La membrane plasmique est une bicouche lipidique d’environ quelques nanomètres qui sépare cytosol et milieu extracellulaire. Elle est sélectivement perméable, dynamique et capable de fusion/remodelage lors de processus cellulaires."
      },
      {
        "content": "La bicouche lipidique est une structure rigide et dépourvue de mouvements moléculaires.",
        "correct": false,
        "explanation": "Incorrect. La membrane plasmique est une bicouche lipidique d’environ quelques nanomètres qui sépare cytosol et milieu extracellulaire. Elle est sélectivement perméable, dynamique et capable de fusion/remodelage lors de processus cellulaires."
      },
      {
        "content": "Son épaisseur est de l’ordre de quelques nanomètres, typiquement autour de 7 à 10 nm.",
        "correct": true,
        "explanation": "Exact. La membrane plasmique est une bicouche lipidique d’environ quelques nanomètres qui sépare cytosol et milieu extracellulaire. Elle est sélectivement perméable, dynamique et capable de fusion/remodelage lors de processus cellulaires."
      },
      {
        "content": "La membrane plasmique empêche absolument tout échange entre la cellule et son environnement.",
        "correct": false,
        "explanation": "Incorrect. La membrane plasmique est une bicouche lipidique d’environ quelques nanomètres qui sépare cytosol et milieu extracellulaire. Elle est sélectivement perméable, dynamique et capable de fusion/remodelage lors de processus cellulaires."
      }
    ]
  },
  {
    "order": 19,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant « Phospholipides, cholestérol et amphiphilie » ?",
    "explanation": "Les phospholipides sont amphiphiles : têtes hydrophiles vers les milieux aqueux, chaînes hydrophobes au cœur de la bicouche. Le cholestérol module fluidité et perméabilité plutôt que de simplement rigidifier la membrane.",
    "choices": [
      {
        "content": "Le cholestérol s’intercale entre les phospholipides des membranes animales.",
        "correct": true,
        "explanation": "Exact. Les phospholipides sont amphiphiles : têtes hydrophiles vers les milieux aqueux, chaînes hydrophobes au cœur de la bicouche. Le cholestérol module fluidité et perméabilité plutôt que de simplement rigidifier la membrane."
      },
      {
        "content": "Dans ce contexte, l’amphiphilie signifie qu’une molécule est exclusivement soluble dans les hydrocarbures.",
        "correct": false,
        "explanation": "Incorrect. Les phospholipides sont amphiphiles : têtes hydrophiles vers les milieux aqueux, chaînes hydrophobes au cœur de la bicouche. Le cholestérol module fluidité et perméabilité plutôt que de simplement rigidifier la membrane."
      },
      {
        "content": "Dans ce contexte, le cholestérol est absent des membranes des cellules animales.",
        "correct": false,
        "explanation": "Incorrect. Les phospholipides sont amphiphiles : têtes hydrophiles vers les milieux aqueux, chaînes hydrophobes au cœur de la bicouche. Le cholestérol module fluidité et perméabilité plutôt que de simplement rigidifier la membrane."
      },
      {
        "content": "Les têtes polaires des phospholipides sont exposées aux milieux aqueux de part et d’autre de la bicouche.",
        "correct": true,
        "explanation": "Exact. Les phospholipides sont amphiphiles : têtes hydrophiles vers les milieux aqueux, chaînes hydrophobes au cœur de la bicouche. Le cholestérol module fluidité et perméabilité plutôt que de simplement rigidifier la membrane."
      },
      {
        "content": "Le cholestérol réduit la perméabilité de la bicouche à de nombreuses petites molécules hydrophiles.",
        "correct": true,
        "explanation": "Exact. Les phospholipides sont amphiphiles : têtes hydrophiles vers les milieux aqueux, chaînes hydrophobes au cœur de la bicouche. Le cholestérol module fluidité et perméabilité plutôt que de simplement rigidifier la membrane."
      }
    ]
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment nomme-t-on la couche glucidique présente à la surface externe de nombreuses cellules ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glycocalyx",
        "glycocalix"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le glycocalyx est formé par les chaînes glucidiques des glycoprotéines et glycolipides exposés à l’extérieur."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Sur le thème « Protéines membranaires et topologie », quelle proposition est exacte ?",
    "explanation": "Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle.",
    "choices": [
      {
        "content": "Toute protéine transmembranaire possède obligatoirement son N-terminal extracellulaire et son C-terminal cytosolique.",
        "correct": false,
        "explanation": "Incorrect. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Les protéines membranaires n’ont aucun rôle dans le transport de solutés.",
        "correct": false,
        "explanation": "Incorrect. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Dans ce contexte, une protéine périphérique traverse nécessairement plusieurs fois la bicouche.",
        "correct": false,
        "explanation": "Incorrect. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Dans ce contexte, l’orientation des extrémités N- et C-terminales dépend de la topologie propre à chaque protéine.",
        "correct": true,
        "explanation": "Exact. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "La topologie des protéines membranaires change au hasard à chaque diffusion latérale.",
        "correct": false,
        "explanation": "Incorrect. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      }
    ]
  },
  {
    "order": 22,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant « Ancrages lipidiques des protéines », quelles affirmations sont correctes ?",
    "explanation": "Des modifications lipidiques peuvent fixer des protéines à une face membranaire : acylation/prénylation du côté cytosolique et ancre GPI du côté exoplasmique. Ces ancrages n’impliquent pas nécessairement un domaine transmembranaire.",
    "choices": [
      {
        "content": "La face extracellulaire d’une protéine GPI correspond topologiquement à la lumière du RE lors de sa maturation.",
        "correct": true,
        "explanation": "Exact. Des modifications lipidiques peuvent fixer des protéines à une face membranaire : acylation/prénylation du côté cytosolique et ancre GPI du côté exoplasmique. Ces ancrages n’impliquent pas nécessairement un domaine transmembranaire."
      },
      {
        "content": "Dans ce contexte, des protéines de signalisation peuvent être ciblées vers la membrane grâce à des modifications lipidiques.",
        "correct": true,
        "explanation": "Exact. Des modifications lipidiques peuvent fixer des protéines à une face membranaire : acylation/prénylation du côté cytosolique et ancre GPI du côté exoplasmique. Ces ancrages n’impliquent pas nécessairement un domaine transmembranaire."
      },
      {
        "content": "Les protéines à ancre GPI traversent la bicouche par une longue hélice alpha.",
        "correct": false,
        "explanation": "Incorrect. Des modifications lipidiques peuvent fixer des protéines à une face membranaire : acylation/prénylation du côté cytosolique et ancre GPI du côté exoplasmique. Ces ancrages n’impliquent pas nécessairement un domaine transmembranaire."
      },
      {
        "content": "L’orientation d’un ancrage lipidique dépend de la voie de biosynthèse de la protéine.",
        "correct": true,
        "explanation": "Exact. Des modifications lipidiques peuvent fixer des protéines à une face membranaire : acylation/prénylation du côté cytosolique et ancre GPI du côté exoplasmique. Ces ancrages n’impliquent pas nécessairement un domaine transmembranaire."
      },
      {
        "content": "Dans ce contexte, un ancrage lipidique permet à certaines protéines de rester membranaires sans segment transmembranaire complet.",
        "correct": true,
        "explanation": "Exact. Des modifications lipidiques peuvent fixer des protéines à une face membranaire : acylation/prénylation du côté cytosolique et ancre GPI du côté exoplasmique. Ces ancrages n’impliquent pas nécessairement un domaine transmembranaire."
      }
    ]
  }
];
