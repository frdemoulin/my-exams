import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Rôles biologiques des protéines, partie 1 — Section D — Molécules d'adhérence, intégrines et connexines */
export const UE14_BIOCH_CH12_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les grandes familles de molécules d'adhérence, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Leurs ligands peuvent être des protéines ou des glycanes.",
        "correct": true,
        "explanation": "La nature du ligand dépend de la famille."
      },
      {
        "content": "Les quatre familles possèdent exactement la même structure et les mêmes ligands.",
        "correct": false,
        "explanation": "Leurs structures et mécanismes diffèrent."
      },
      {
        "content": "Les molécules d'adhérence participent à la migration cellulaire.",
        "correct": true,
        "explanation": "Elles organisent des contacts dynamiques."
      },
      {
        "content": "Les sélectines, cadhérines, intégrines et protéines de la superfamille des immunoglobulines sont des familles majeures d'adhérence.",
        "correct": true,
        "explanation": "Elles assurent des interactions cellule-cellule ou cellule-matrice."
      },
      {
        "content": "Certaines transmettent aussi des signaux intracellulaires.",
        "correct": true,
        "explanation": "Les intégrines en sont un exemple majeur."
      }
    ],
    "explanation": "Sélectines, cadhérines, Ig-CAM et intégrines sont des familles majeures de molécules d'adhérence."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les sélectines, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elles n'interviennent jamais dans le recrutement leucocytaire.",
        "correct": false,
        "explanation": "Elles jouent un rôle clé dans le roulement."
      },
      {
        "content": "Il existe uniquement une sélectine appelée G-sélectine.",
        "correct": false,
        "explanation": "Les trois classiques sont E, L et P."
      },
      {
        "content": "Les sélectines sont des pompes ATP-dépendantes.",
        "correct": false,
        "explanation": "Ce sont des molécules d'adhérence."
      },
      {
        "content": "Elles reconnaissent uniquement le motif peptidique RGD.",
        "correct": false,
        "explanation": "Leur reconnaissance porte surtout sur des glycannes sialylés."
      },
      {
        "content": "Les trois sélectines classiques sont E-, L- et P-sélectine.",
        "correct": true,
        "explanation": "Leur nom reflète historiquement leur distribution préférentielle."
      }
    ],
    "explanation": "Les sélectines E/L/P reconnaissent des glycannes sialylés et participent au roulement leucocytaire."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les cadhérines ?",
    "choices": [
      {
        "content": "Les cadhérines sont exclusivement des protéines nucléaires.",
        "correct": false,
        "explanation": "Ce sont des protéines transmembranaires."
      },
      {
        "content": "E-cadhérine est une pompe sodium-potassium.",
        "correct": false,
        "explanation": "C'est une molécule d'adhérence."
      },
      {
        "content": "E-cadhérine est caractéristique de nombreuses cellules épithéliales.",
        "correct": true,
        "explanation": "Sa perte est associée à des altérations d'adhérence dans certains cancers."
      },
      {
        "content": "Les cadhérines sont indépendantes du calcium.",
        "correct": false,
        "explanation": "Le Ca2+ est nécessaire à leur fonction d'adhérence classique."
      },
      {
        "content": "Elles assurent souvent des interactions homophiles entre molécules de même type.",
        "correct": true,
        "explanation": "E-cadhérine interagit typiquement avec E-cadhérine."
      }
    ],
    "explanation": "Les cadhérines sont des molécules d'adhérence Ca2+-dépendantes, souvent homophiles."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les Ig-CAM, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elles appartiennent à la superfamille des immunoglobulines.",
        "correct": true,
        "explanation": "Elles possèdent des domaines de type immunoglobuline."
      },
      {
        "content": "Elles peuvent participer à l'adhérence et à la signalisation.",
        "correct": true,
        "explanation": "Leurs domaines cytoplasmiques ou partenaires transmettent des effets."
      },
      {
        "content": "ICAM-1 est un triacylglycérol.",
        "correct": false,
        "explanation": "C'est une glycoprotéine membranaire."
      },
      {
        "content": "Elles sont des anticorps circulants H2L2.",
        "correct": false,
        "explanation": "Elles sont des molécules cellulaires de superfamille Ig."
      },
      {
        "content": "ICAM-1 est un exemple important dans les interactions leucocyte-endothélium.",
        "correct": true,
        "explanation": "Elle se lie notamment à certaines intégrines leucocytaires."
      }
    ],
    "explanation": "Les Ig-CAM portent des domaines de type immunoglobuline et peuvent assurer des interactions homo- ou hétérophiles."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien d'hétérodimères d'intégrines humaines sont classiquement reconnus ?",
    "answer": {
      "type": "number",
      "value": 24,
      "tolerance": 0
    },
    "explanation": "Les 18 sous-unités α et 8 β humaines s'associent en 24 hétérodimères d'intégrines."
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant les ligands et le motif RGD des intégrines, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Toutes les intégrines ne reconnaissent pas RGD.",
        "correct": true,
        "explanation": "Certaines reconnaissent collagènes, laminines ou molécules de surface cellulaire."
      },
      {
        "content": "La fibronectine est un ligand majeur de plusieurs intégrines.",
        "correct": true,
        "explanation": "Elle comporte notamment des sites reconnus par des intégrines."
      },
      {
        "content": "Les intégrines ne lient jamais de protéines de matrice extracellulaire.",
        "correct": false,
        "explanation": "De nombreuses intégrines les reconnaissent."
      },
      {
        "content": "Toutes les 24 intégrines reconnaissent obligatoirement RGD.",
        "correct": false,
        "explanation": "Seul un sous-ensemble est RGD-dépendant."
      },
      {
        "content": "La fixation du ligand est indépendante de tout cation divalent.",
        "correct": false,
        "explanation": "Les cations divalents sont importants pour de nombreuses intégrines."
      }
    ],
    "explanation": "RGD signifie Arg-Gly-Asp et n'est reconnu que par un sous-ensemble d'intégrines.",
    "requiredSelectionCount": 2
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la signalisation des intégrines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le changement conformationnel n'influence jamais l'affinité.",
        "correct": false,
        "explanation": "L'extension et l'ouverture modifient l'affinité."
      },
      {
        "content": "Le regroupement latéral peut augmenter l'avidité globale pour un ligand multivalent.",
        "correct": true,
        "explanation": "Le clustering complète les changements d'affinité."
      },
      {
        "content": "Les intégrines peuvent transmettre des signaux de l'extérieur vers l'intérieur.",
        "correct": true,
        "explanation": "C'est la signalisation outside-in."
      },
      {
        "content": "Des signaux intracellulaires peuvent augmenter l'affinité des intégrines.",
        "correct": true,
        "explanation": "C'est la signalisation inside-out."
      },
      {
        "content": "Les intégrines ne possèdent pas de kinase intrinsèque classique.",
        "correct": true,
        "explanation": "Elles recrutent des protéines adaptatrices et kinases."
      }
    ],
    "explanation": "Les intégrines assurent une signalisation bidirectionnelle : inside-out et outside-in."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel type de filament cytosquelettique est relié aux intégrines dans les adhésions focales ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "actine",
        "filaments d'actine",
        "microfilaments d'actine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les adhésions focales connectent intégrines, protéines de signalisation et filaments d'actine."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de connexines s'assemblent pour former un connexon ?",
    "answer": {
      "type": "number",
      "value": 6,
      "tolerance": 0
    },
    "explanation": "Six connexines forment un connexon ; deux connexons appariés forment un canal de jonction communicante."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les jonctions communicantes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elles sont toujours ouvertes de manière irréversible.",
        "correct": false,
        "explanation": "Leur ouverture est régulée."
      },
      {
        "content": "Des mutations de certaines connexines peuvent provoquer des surdités héréditaires.",
        "correct": true,
        "explanation": "GJB2/connexine 26 en est un exemple fréquent."
      },
      {
        "content": "Elles fusionnent complètement les membranes de deux cellules.",
        "correct": false,
        "explanation": "Les membranes restent distinctes."
      },
      {
        "content": "Elles permettent librement le passage de protéines de très grande taille.",
        "correct": false,
        "explanation": "Le pore est limité aux petites molécules/ions."
      },
      {
        "content": "Elles permettent le passage direct de petits solutés et d'ions entre cellules voisines.",
        "correct": true,
        "explanation": "Les canaux relient directement les cytoplasmes."
      }
    ],
    "explanation": "Les jonctions communicantes relient directement deux cytoplasmes grâce à l'apposition de deux connexons."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les grandes familles de molécules d'adhérence, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les sélectines, cadhérines, intégrines et protéines de la superfamille des immunoglobulines sont des familles majeures d'adhérence.",
        "correct": true,
        "explanation": "Elles assurent des interactions cellule-cellule ou cellule-matrice."
      },
      {
        "content": "Elles servent uniquement à immobiliser définitivement les cellules.",
        "correct": false,
        "explanation": "Elles participent aussi à des adhérences transitoires et à la migration."
      },
      {
        "content": "Leurs ligands peuvent être des protéines ou des glycanes.",
        "correct": true,
        "explanation": "La nature du ligand dépend de la famille."
      },
      {
        "content": "Les quatre familles possèdent exactement la même structure et les mêmes ligands.",
        "correct": false,
        "explanation": "Leurs structures et mécanismes diffèrent."
      },
      {
        "content": "Les molécules d'adhérence participent à la migration cellulaire.",
        "correct": true,
        "explanation": "Elles organisent des contacts dynamiques."
      }
    ],
    "explanation": "Sélectines, cadhérines, Ig-CAM et intégrines sont des familles majeures de molécules d'adhérence."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel motif glucidique sialylé est un ligand classique de sélectines ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sialyl-Lewis x",
        "sialyl Lewis x",
        "sLeX",
        "sialyl-Lewis X"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les sélectines E/L/P reconnaissent des glycannes sialylés et participent au roulement leucocytaire."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant les cadhérines ?",
    "choices": [
      {
        "content": "Les cadhérines sont exclusivement des protéines nucléaires.",
        "correct": false,
        "explanation": "Ce sont des protéines transmembranaires."
      },
      {
        "content": "Les cadhérines sont indépendantes du calcium.",
        "correct": false,
        "explanation": "Le Ca2+ est nécessaire à leur fonction d'adhérence classique."
      },
      {
        "content": "E-cadhérine est une pompe sodium-potassium.",
        "correct": false,
        "explanation": "C'est une molécule d'adhérence."
      },
      {
        "content": "Elles reconnaissent principalement sialyl-Lewis x comme les sélectines.",
        "correct": false,
        "explanation": "Le mécanisme de reconnaissance est différent."
      },
      {
        "content": "Elles assurent souvent des interactions homophiles entre molécules de même type.",
        "correct": true,
        "explanation": "E-cadhérine interagit typiquement avec E-cadhérine."
      }
    ],
    "explanation": "Les cadhérines sont des molécules d'adhérence Ca2+-dépendantes, souvent homophiles."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les Ig-CAM, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Selon la molécule, les interactions peuvent être homophiles ou hétérophiles.",
        "correct": true,
        "explanation": "Il ne faut pas réduire toute la famille à un seul mode d'adhérence."
      },
      {
        "content": "Elles peuvent participer à l'adhérence et à la signalisation.",
        "correct": true,
        "explanation": "Leurs domaines cytoplasmiques ou partenaires transmettent des effets."
      },
      {
        "content": "Elles appartiennent à la superfamille des immunoglobulines.",
        "correct": true,
        "explanation": "Elles possèdent des domaines de type immunoglobuline."
      },
      {
        "content": "Toutes les Ig-CAM ont exclusivement des interactions hétérophiles.",
        "correct": false,
        "explanation": "Certaines interactions sont homophiles."
      },
      {
        "content": "ICAM-1 est un exemple important dans les interactions leucocyte-endothélium.",
        "correct": true,
        "explanation": "Elle se lie notamment à certaines intégrines leucocytaires."
      }
    ],
    "explanation": "Les Ig-CAM portent des domaines de type immunoglobuline et peuvent assurer des interactions homo- ou hétérophiles."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant la structure des intégrines, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Les intégrines sont dépourvues de domaine extracellulaire.",
        "correct": false,
        "explanation": "Leur grand domaine extracellulaire lie les ligands."
      },
      {
        "content": "Les 18 alpha et 8 bêta forment exactement 23 hétérodimères.",
        "correct": false,
        "explanation": "La nomenclature actuelle retient 24 hétérodimères."
      },
      {
        "content": "Le génome humain code 18 sous-unités alpha et 8 bêta.",
        "correct": true,
        "explanation": "Elles s'assemblent en combinaisons définies."
      },
      {
        "content": "Ces sous-unités forment 24 hétérodimères d'intégrines humaines connus.",
        "correct": true,
        "explanation": "Toutes les combinaisons théoriques ne sont pas réalisées."
      },
      {
        "content": "Une intégrine est un homotrimère de trois sous-unités alpha.",
        "correct": false,
        "explanation": "C'est un hétérodimère αβ."
      }
    ],
    "explanation": "Les 18 sous-unités α et 8 β humaines s'associent en 24 hétérodimères d'intégrines.",
    "requiredSelectionCount": 2
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les ligands et le motif RGD des intégrines ?",
    "choices": [
      {
        "content": "Toutes les 24 intégrines reconnaissent obligatoirement RGD.",
        "correct": false,
        "explanation": "Seul un sous-ensemble est RGD-dépendant."
      },
      {
        "content": "RGD signifie Arg-Glu-Asp.",
        "correct": false,
        "explanation": "Le résidu central est Gly."
      },
      {
        "content": "La fixation du ligand est indépendante de tout cation divalent.",
        "correct": false,
        "explanation": "Les cations divalents sont importants pour de nombreuses intégrines."
      },
      {
        "content": "La fibronectine est un ligand majeur de plusieurs intégrines.",
        "correct": true,
        "explanation": "Elle comporte notamment des sites reconnus par des intégrines."
      },
      {
        "content": "Toutes les intégrines ne reconnaissent pas RGD.",
        "correct": true,
        "explanation": "Certaines reconnaissent collagènes, laminines ou molécules de surface cellulaire."
      }
    ],
    "explanation": "RGD signifie Arg-Gly-Asp et n'est reconnu que par un sous-ensemble d'intégrines."
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel tripeptide reconnu par certaines intégrines est abrégé RGD ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Arg-Gly-Asp",
        "arginine-glycine-aspartate",
        "arginine glycine aspartate",
        "RGD"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "RGD signifie Arg-Gly-Asp et n'est reconnu que par un sous-ensemble d'intégrines."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les adhésions focales, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elles sont dépourvues de protéines de signalisation.",
        "correct": false,
        "explanation": "Elles en recrutent de nombreuses."
      },
      {
        "content": "Elles empêchent tout mouvement cellulaire.",
        "correct": false,
        "explanation": "Leur dynamique est essentielle à la migration."
      },
      {
        "content": "Elles relient directement l'ADN au glycogène.",
        "correct": false,
        "explanation": "Elles relient membrane, matrice et cytosquelette."
      },
      {
        "content": "Elles sont dynamiques pendant la migration cellulaire.",
        "correct": true,
        "explanation": "Elles se forment et se désassemblent."
      },
      {
        "content": "Elles sont totalement indépendantes des intégrines.",
        "correct": false,
        "explanation": "Les intégrines sont centrales."
      }
    ],
    "explanation": "Les adhésions focales connectent intégrines, protéines de signalisation et filaments d'actine."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les connexines et les connexons ?",
    "choices": [
      {
        "content": "Les connexons peuvent être homo- ou hétéromériques selon les connexines exprimées.",
        "correct": true,
        "explanation": "La composition influence les propriétés du canal."
      },
      {
        "content": "Six connexines s'assemblent pour former un connexon.",
        "correct": true,
        "explanation": "Le connexon est aussi appelé hémicanal."
      },
      {
        "content": "Deux connexons de cellules adjacentes s'alignent pour former un canal de jonction communicante.",
        "correct": true,
        "explanation": "Le canal relie directement les cytoplasmes."
      },
      {
        "content": "Un connexon contient deux connexines.",
        "correct": false,
        "explanation": "Il en contient six."
      },
      {
        "content": "Les jonctions communicantes sont constituées de triacylglycérols.",
        "correct": false,
        "explanation": "Elles reposent sur des protéines connexines."
      }
    ],
    "explanation": "Six connexines forment un connexon ; deux connexons appariés forment un canal de jonction communicante."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Les cadhérines participent aux jonctions d'adhérence.",
        "correct": true,
        "explanation": "Elles se couplent au cytosquelette via des protéines adaptatrices."
      },
      {
        "content": "Elles fusionnent complètement les membranes de deux cellules.",
        "correct": false,
        "explanation": "Les membranes restent distinctes."
      },
      {
        "content": "Leur adhérence dépend du calcium extracellulaire.",
        "correct": true,
        "explanation": "Ca2+ rigidifie leurs domaines extracellulaires."
      },
      {
        "content": "Elles reconnaissent principalement sialyl-Lewis x comme les sélectines.",
        "correct": false,
        "explanation": "Le mécanisme de reconnaissance est différent."
      },
      {
        "content": "Les cadhérines sont indépendantes du calcium.",
        "correct": false,
        "explanation": "Le Ca2+ est nécessaire à leur fonction d'adhérence classique."
      },
      {
        "content": "Des mutations de certaines connexines peuvent provoquer des surdités héréditaires.",
        "correct": true,
        "explanation": "GJB2/connexine 26 en est un exemple fréquent."
      },
      {
        "content": "E-cadhérine est caractéristique de nombreuses cellules épithéliales.",
        "correct": true,
        "explanation": "Sa perte est associée à des altérations d'adhérence dans certains cancers."
      },
      {
        "content": "Elles permettent librement le passage de protéines de très grande taille.",
        "correct": false,
        "explanation": "Le pore est limité aux petites molécules/ions."
      },
      {
        "content": "Elles favorisent le couplage électrique de certains tissus.",
        "correct": true,
        "explanation": "Le cœur fournit un exemple fonctionnel majeur."
      },
      {
        "content": "Elles fonctionnent sans protéines membranaires.",
        "correct": false,
        "explanation": "Les connexines les constituent."
      }
    ],
    "explanation": "Les jonctions communicantes relient directement deux cytoplasmes grâce à l'apposition de deux connexons. Les cadhérines sont des molécules d'adhérence Ca2+-dépendantes, souvent homophiles."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant les grandes familles de molécules d'adhérence, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Les molécules d'adhérence participent à la migration cellulaire.",
        "correct": true,
        "explanation": "Elles organisent des contacts dynamiques."
      },
      {
        "content": "Les sélectines, cadhérines, intégrines et protéines de la superfamille des immunoglobulines sont des familles majeures d'adhérence.",
        "correct": true,
        "explanation": "Elles assurent des interactions cellule-cellule ou cellule-matrice."
      },
      {
        "content": "Aucune molécule d'adhérence ne participe à la signalisation.",
        "correct": false,
        "explanation": "Plusieurs transmettent des signaux."
      },
      {
        "content": "Certaines transmettent aussi des signaux intracellulaires.",
        "correct": true,
        "explanation": "Les intégrines en sont un exemple majeur."
      },
      {
        "content": "Leurs ligands peuvent être des protéines ou des glycanes.",
        "correct": true,
        "explanation": "La nature du ligand dépend de la famille."
      }
    ],
    "explanation": "Sélectines, cadhérines, Ig-CAM et intégrines sont des familles majeures de molécules d'adhérence."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans une autre application, quel motif glucidique sialylé est un ligand classique de sélectines ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sialyl-Lewis x",
        "sialyl Lewis x",
        "sLeX",
        "sialyl-Lewis X"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les sélectines E/L/P reconnaissent des glycannes sialylés et participent au roulement leucocytaire."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les grandes familles de molécules d'adhérence, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Aucune molécule d'adhérence ne participe à la signalisation.",
        "correct": false,
        "explanation": "Plusieurs transmettent des signaux."
      },
      {
        "content": "Les quatre familles possèdent exactement la même structure et les mêmes ligands.",
        "correct": false,
        "explanation": "Leurs structures et mécanismes diffèrent."
      },
      {
        "content": "Les sélectines, cadhérines, intégrines et protéines de la superfamille des immunoglobulines sont des familles majeures d'adhérence.",
        "correct": true,
        "explanation": "Elles assurent des interactions cellule-cellule ou cellule-matrice."
      },
      {
        "content": "Leurs ligands peuvent être des protéines ou des glycanes.",
        "correct": true,
        "explanation": "La nature du ligand dépend de la famille."
      },
      {
        "content": "Toutes les molécules d'adhérence sont des enzymes solubles.",
        "correct": false,
        "explanation": "Beaucoup sont des protéines membranaires."
      }
    ],
    "explanation": "Sélectines, cadhérines, Ig-CAM et intégrines sont des familles majeures de molécules d'adhérence."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel motif glucidique sialylé est un ligand classique de sélectines ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sialyl-Lewis x",
        "sialyl Lewis x",
        "sLeX",
        "sialyl-Lewis X"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les sélectines E/L/P reconnaissent des glycannes sialylés et participent au roulement leucocytaire."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant les cadhérines, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Leur adhérence dépend du calcium extracellulaire.",
        "correct": true,
        "explanation": "Ca2+ rigidifie leurs domaines extracellulaires."
      },
      {
        "content": "Les cadhérines sont exclusivement des protéines nucléaires.",
        "correct": false,
        "explanation": "Ce sont des protéines transmembranaires."
      },
      {
        "content": "Les cadhérines sont indépendantes du calcium.",
        "correct": false,
        "explanation": "Le Ca2+ est nécessaire à leur fonction d'adhérence classique."
      },
      {
        "content": "Elles reconnaissent principalement sialyl-Lewis x comme les sélectines.",
        "correct": false,
        "explanation": "Le mécanisme de reconnaissance est différent."
      },
      {
        "content": "Elles assurent souvent des interactions homophiles entre molécules de même type.",
        "correct": true,
        "explanation": "E-cadhérine interagit typiquement avec E-cadhérine."
      }
    ],
    "explanation": "Les cadhérines sont des molécules d'adhérence Ca2+-dépendantes, souvent homophiles.",
    "requiredSelectionCount": 2
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel mécanisme d'activation des intégrines correspond à un signal intracellulaire qui augmente leur affinité pour un ligand extracellulaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "inside-out",
        "signalisation inside-out",
        "activation inside-out"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les intégrines assurent une signalisation bidirectionnelle : inside-out et outside-in."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la structure des intégrines, laquelle est correcte ?",
    "choices": [
      {
        "content": "Les intégrines sont dépourvues de domaine extracellulaire.",
        "correct": false,
        "explanation": "Leur grand domaine extracellulaire lie les ligands."
      },
      {
        "content": "Chaque sous-unité traverse la membrane sept fois.",
        "correct": false,
        "explanation": "Chaque sous-unité est à une traversée."
      },
      {
        "content": "Chaque sous-unité traverse une fois la membrane.",
        "correct": true,
        "explanation": "Les intégrines sont des récepteurs transmembranaires."
      },
      {
        "content": "Les 18 alpha et 8 bêta forment exactement 23 hétérodimères.",
        "correct": false,
        "explanation": "La nomenclature actuelle retient 24 hétérodimères."
      },
      {
        "content": "Une intégrine est un homotrimère de trois sous-unités alpha.",
        "correct": false,
        "explanation": "C'est un hétérodimère αβ."
      }
    ],
    "explanation": "Les 18 sous-unités α et 8 β humaines s'associent en 24 hétérodimères d'intégrines."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les ligands et le motif RGD des intégrines ?",
    "choices": [
      {
        "content": "Toutes les intégrines ne reconnaissent pas RGD.",
        "correct": true,
        "explanation": "Certaines reconnaissent collagènes, laminines ou molécules de surface cellulaire."
      },
      {
        "content": "RGD signifie Arg-Glu-Asp.",
        "correct": false,
        "explanation": "Le résidu central est Gly."
      },
      {
        "content": "Toutes les 24 intégrines reconnaissent obligatoirement RGD.",
        "correct": false,
        "explanation": "Seul un sous-ensemble est RGD-dépendant."
      },
      {
        "content": "Certaines intégrines reconnaissent le motif Arg-Gly-Asp.",
        "correct": true,
        "explanation": "RGD est présent dans plusieurs protéines de matrice."
      },
      {
        "content": "La fibronectine est un ligand majeur de plusieurs intégrines.",
        "correct": true,
        "explanation": "Elle comporte notamment des sites reconnus par des intégrines."
      }
    ],
    "explanation": "RGD signifie Arg-Gly-Asp et n'est reconnu que par un sous-ensemble d'intégrines."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Comment appelle-t-on l'activation d'une intégrine par des signaux provenant du cytoplasme ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "inside-out",
        "signalisation inside-out",
        "activation inside-out"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les intégrines assurent une signalisation bidirectionnelle : inside-out et outside-in."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel type de filament du cytosquelette est relié aux intégrines dans une adhésion focale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "actine",
        "filaments d'actine",
        "microfilaments"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les adhésions focales connectent intégrines, protéines de signalisation et filaments d'actine."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les connexines et les connexons ?",
    "choices": [
      {
        "content": "Une connexine possède quatre segments transmembranaires.",
        "correct": true,
        "explanation": "C'est une protéine membranaire de jonction."
      },
      {
        "content": "Les jonctions communicantes sont constituées de triacylglycérols.",
        "correct": false,
        "explanation": "Elles reposent sur des protéines connexines."
      },
      {
        "content": "Six connexines s'assemblent pour former un connexon.",
        "correct": true,
        "explanation": "Le connexon est aussi appelé hémicanal."
      },
      {
        "content": "Deux connexons de cellules adjacentes s'alignent pour former un canal de jonction communicante.",
        "correct": true,
        "explanation": "Le canal relie directement les cytoplasmes."
      },
      {
        "content": "Les connexons peuvent être homo- ou hétéromériques selon les connexines exprimées.",
        "correct": true,
        "explanation": "La composition influence les propriétés du canal."
      }
    ],
    "explanation": "Six connexines forment un connexon ; deux connexons appariés forment un canal de jonction communicante."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel nom donne-t-on au canal intercellulaire formé par l'apposition de deux connexons ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "jonction communicante",
        "gap junction",
        "canal de gap junction",
        "jonction gap"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les jonctions communicantes relient directement deux cytoplasmes grâce à l'apposition de deux connexons."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant les grandes familles de molécules d'adhérence, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Les molécules d'adhérence participent à la migration cellulaire.",
        "correct": true,
        "explanation": "Elles organisent des contacts dynamiques."
      },
      {
        "content": "Toutes les molécules d'adhérence sont des enzymes solubles.",
        "correct": false,
        "explanation": "Beaucoup sont des protéines membranaires."
      },
      {
        "content": "Les quatre familles possèdent exactement la même structure et les mêmes ligands.",
        "correct": false,
        "explanation": "Leurs structures et mécanismes diffèrent."
      },
      {
        "content": "Aucune molécule d'adhérence ne participe à la signalisation.",
        "correct": false,
        "explanation": "Plusieurs transmettent des signaux."
      },
      {
        "content": "Certaines transmettent aussi des signaux intracellulaires.",
        "correct": true,
        "explanation": "Les intégrines en sont un exemple majeur."
      }
    ],
    "explanation": "Sélectines, cadhérines, Ig-CAM et intégrines sont des familles majeures de molécules d'adhérence.",
    "requiredSelectionCount": 2
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les sélectines ?",
    "choices": [
      {
        "content": "Elles participent au roulement des leucocytes sur l'endothélium.",
        "correct": true,
        "explanation": "Ces interactions faibles et transitoires sont centrales dans l'inflammation."
      },
      {
        "content": "Les sélectines sont des pompes ATP-dépendantes.",
        "correct": false,
        "explanation": "Ce sont des molécules d'adhérence."
      },
      {
        "content": "Elles reconnaissent des motifs glucidiques sialylés.",
        "correct": true,
        "explanation": "Sialyl-Lewis x est un ligand classique."
      },
      {
        "content": "Il existe uniquement une sélectine appelée G-sélectine.",
        "correct": false,
        "explanation": "Les trois classiques sont E, L et P."
      },
      {
        "content": "Elles reconnaissent uniquement le motif peptidique RGD.",
        "correct": false,
        "explanation": "Leur reconnaissance porte surtout sur des glycannes sialylés."
      }
    ],
    "explanation": "Les sélectines E/L/P reconnaissent des glycannes sialylés et participent au roulement leucocytaire."
  }
];
