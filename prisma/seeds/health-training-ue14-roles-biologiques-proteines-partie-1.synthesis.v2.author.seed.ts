import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Rôles biologiques des protéines, partie 1 — Synthèse — Rôles biologiques des protéines, partie 1 */
export const UE14_BIOCH_CH12_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les immunoglobulines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ce sont des glycoprotéines de la réponse immunitaire adaptative.",
        "correct": true,
        "explanation": "Les anticorps appartiennent à la famille des immunoglobulines."
      },
      {
        "content": "Un antigène ne peut porter qu'un seul épitope.",
        "correct": false,
        "explanation": "Il peut en porter plusieurs."
      },
      {
        "content": "Les antigènes reconnus peuvent être de nature chimique variée.",
        "correct": true,
        "explanation": "Protéines, glycoconjugués ou autres structures peuvent porter des épitopes."
      },
      {
        "content": "Les immunoglobulines sont des triacylglycérols.",
        "correct": false,
        "explanation": "Ce sont des protéines glycosylées."
      },
      {
        "content": "Un même antigène peut porter plusieurs épitopes différents.",
        "correct": true,
        "explanation": "Plusieurs clones lymphocytaires peuvent donc reconnaître un même antigène."
      }
    ],
    "explanation": "Une immunoglobuline reconnaît un épitope précis porté par un antigène."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de chaînes polypeptidiques comporte l'unité H2L2 d'une immunoglobuline ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "L'unité de base d'une immunoglobuline est H2L2 : deux chaînes lourdes et deux chaînes légères."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant les classes d'immunoglobulines humaines ?",
    "choices": [
      {
        "content": "Il existe seulement trois classes d'immunoglobulines humaines.",
        "correct": false,
        "explanation": "On en distingue cinq."
      },
      {
        "content": "IgG est définie par une chaîne lourde delta.",
        "correct": false,
        "explanation": "δ définit IgD."
      },
      {
        "content": "IgE est définie par une chaîne lourde bêta.",
        "correct": false,
        "explanation": "IgE possède une chaîne lourde ε."
      },
      {
        "content": "IgM possède une chaîne lourde mu.",
        "correct": true,
        "explanation": "La chaîne μ définit IgM."
      },
      {
        "content": "IgM est définie par une chaîne lourde kappa.",
        "correct": false,
        "explanation": "κ est un type de chaîne légère."
      }
    ],
    "explanation": "Les cinq classes IgA, IgD, IgE, IgG et IgM sont définies par leurs chaînes lourdes."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les chaînes légères des immunoglobulines humaines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les chaînes légères participent au site de liaison à l'antigène.",
        "correct": true,
        "explanation": "Le domaine VL contribue au paratope."
      },
      {
        "content": "Une même immunoglobuline possède deux chaînes légères de même type.",
        "correct": true,
        "explanation": "Elle ne mélange pas une κ et une λ au sein d'une même molécule."
      },
      {
        "content": "Les chaînes légères comportent un domaine variable et un domaine constant.",
        "correct": true,
        "explanation": "VL et CL composent la chaîne légère classique."
      },
      {
        "content": "Les seules chaînes légères humaines sont alpha et gamma.",
        "correct": false,
        "explanation": "α et γ sont des chaînes lourdes."
      },
      {
        "content": "Les deux types de chaînes légères sont kappa et lambda.",
        "correct": true,
        "explanation": "Une immunoglobuline donnée porte l'un ou l'autre type."
      }
    ],
    "explanation": "Les chaînes légères humaines sont κ ou λ ; la classe de l'Ig dépend en revanche de la chaîne lourde."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant les domaines d'immunoglobuline, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Un domaine d'Ig est formé de sept domaines bêta distincts.",
        "correct": false,
        "explanation": "Il s'agit de brins bêta organisés en feuillets, pas de sept domaines."
      },
      {
        "content": "Les domaines variables sont situés exclusivement aux extrémités C-terminales.",
        "correct": false,
        "explanation": "Ils sont N-terminaux."
      },
      {
        "content": "Un pont disulfure intradomaine stabilise de nombreux domaines d'Ig.",
        "correct": true,
        "explanation": "Des cystéines conservées participent à cette stabilisation."
      },
      {
        "content": "Les domaines d'Ig sont dépourvus de toute structure secondaire bêta.",
        "correct": false,
        "explanation": "Ils sont au contraire riches en brins bêta."
      },
      {
        "content": "Les domaines variables sont situés vers les extrémités N-terminales des chaînes.",
        "correct": true,
        "explanation": "VH et VL forment ensemble les sites de liaison antigénique."
      }
    ],
    "explanation": "Un domaine d'immunoglobuline est un module compact en sandwich bêta, et non une succession de « domaines bêta ».",
    "requiredSelectionCount": 2
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les fragments Fab et Fc d'une IgG ?",
    "choices": [
      {
        "content": "La papaïne produit un seul Fab et deux Fc.",
        "correct": false,
        "explanation": "Elle produit deux Fab et un Fc."
      },
      {
        "content": "Fab signifie fragment activating beta.",
        "correct": false,
        "explanation": "Fab signifie antigen binding."
      },
      {
        "content": "La papaïne transforme l'IgG en acides aminés libres uniquement.",
        "correct": false,
        "explanation": "Le clivage limité produit de grands fragments fonctionnels."
      },
      {
        "content": "Chaque fragment Fab conserve un site de liaison à l'antigène.",
        "correct": true,
        "explanation": "Fab signifie fragment antigen binding."
      },
      {
        "content": "Le Fc peut interagir avec des récepteurs Fc et des éléments du complément selon la classe.",
        "correct": true,
        "explanation": "Il ne porte pas le site antigénique principal."
      }
    ],
    "explanation": "La papaïne clive classiquement une IgG en 2 Fab capables de lier l'antigène et 1 Fc effecteur."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle forme moléculaire domine pour l'IgA sécrétoire humaine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "dimère",
        "dimérique",
        "IgA dimérique",
        "dimerique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Il faut distinguer l'IgA sérique, surtout monomérique, de l'IgA sécrétoire, surtout dimérique ; l'IgM sécrétée est classiquement pentamérique."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les fonctions effectrices du fragment Fc, laquelle est correcte ?",
    "choices": [
      {
        "content": "Le Fc est identique dans toutes les classes d'immunoglobulines.",
        "correct": false,
        "explanation": "Les régions constantes de chaîne lourde diffèrent selon la classe."
      },
      {
        "content": "Le Fc contribue aux propriétés pharmacocinétiques des IgG.",
        "correct": true,
        "explanation": "Il interagit notamment avec FcRn."
      },
      {
        "content": "Le Fc est un glucide libre détaché de la protéine.",
        "correct": false,
        "explanation": "Il s'agit d'un fragment protéique glycosylé."
      },
      {
        "content": "Le Fc ne peut interagir avec aucune cellule.",
        "correct": false,
        "explanation": "Il interagit avec des récepteurs Fc."
      },
      {
        "content": "Le Fc contient à lui seul le paratope complet de l'anticorps.",
        "correct": false,
        "explanation": "Le paratope est porté par les régions variables des Fab."
      }
    ],
    "explanation": "Le Fc porte les principales fonctions effectrices et de transport, tandis que les Fab portent la reconnaissance antigénique."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant l'organisation générale d'un récepteur membranaire à une traversée ?",
    "choices": [
      {
        "content": "Il possède un domaine cytoplasmique assurant ou recrutant la transduction du signal.",
        "correct": true,
        "explanation": "La signalisation se poursuit dans la cellule."
      },
      {
        "content": "La fixation du ligand peut modifier la conformation ou l'association du récepteur.",
        "correct": true,
        "explanation": "Cela permet la transmission de l'information."
      },
      {
        "content": "Le segment transmembranaire est constitué uniquement de sucres.",
        "correct": false,
        "explanation": "Il est protéique et hydrophobe."
      },
      {
        "content": "Il possède un domaine extracellulaire capable de reconnaître un ligand.",
        "correct": true,
        "explanation": "Ce domaine est exposé au milieu extracellulaire."
      },
      {
        "content": "La liaison d'un ligand ne peut jamais modifier son état structural.",
        "correct": false,
        "explanation": "Des changements conformationnels sont fréquents."
      }
    ],
    "explanation": "Les récepteurs membranaires possèdent typiquement des domaines extracellulaire, transmembranaire et cytoplasmique."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Ils possèdent un domaine de liaison à l'ADN et un domaine de liaison au ligand.",
        "correct": true,
        "explanation": "Cette architecture modulaire est caractéristique."
      },
      {
        "content": "PI3K hydrolyse PIP2 en DAG et IP3.",
        "correct": false,
        "explanation": "Cela correspond à une phospholipase C."
      },
      {
        "content": "La fixation de l'insuline favorise l'autophosphorylation de tyrosines du récepteur.",
        "correct": true,
        "explanation": "Cela crée des sites de recrutement intracellulaires."
      },
      {
        "content": "AKT est aussi appelée protéine kinase B.",
        "correct": true,
        "explanation": "PKB est un autre nom d'AKT."
      },
      {
        "content": "L'être humain possède plus de 150 récepteurs nucléaires distincts.",
        "correct": false,
        "explanation": "Le nombre de récepteurs nucléaires humains est 48."
      },
      {
        "content": "L'insuline bloque toute phosphorylation du récepteur.",
        "correct": false,
        "explanation": "Elle favorise son activation kinase."
      },
      {
        "content": "Leurs ligands comprennent notamment hormones stéroïdiennes, hormones thyroïdiennes, rétinoïdes et vitamine D.",
        "correct": true,
        "explanation": "Ce sont souvent des ligands lipophiles."
      },
      {
        "content": "Ils ne possèdent aucun domaine de liaison à l'ADN.",
        "correct": false,
        "explanation": "Un domaine de liaison à l'ADN est caractéristique."
      },
      {
        "content": "IRS désigne un canal chlorure.",
        "correct": false,
        "explanation": "IRS désigne des substrats du récepteur de l'insuline."
      },
      {
        "content": "PI3K favorise la formation de PIP3 à partir de PIP2.",
        "correct": true,
        "explanation": "PIP3 recrute des protéines de signalisation à la membrane."
      }
    ],
    "explanation": "Les 48 récepteurs nucléaires humains sont des facteurs de transcription modulaires ; certains sont orphelins. La voie insulinique classique comprend autophosphorylation du récepteur, IRS, PI3K, PIP3 puis activation d'AKT/PKB."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les immunoglobulines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elles reconnaissent des déterminants antigéniques appelés épitopes.",
        "correct": true,
        "explanation": "Un anticorps ne reconnaît qu'une partie précise d'un antigène."
      },
      {
        "content": "Ce sont des glycoprotéines de la réponse immunitaire adaptative.",
        "correct": true,
        "explanation": "Les anticorps appartiennent à la famille des immunoglobulines."
      },
      {
        "content": "Un même antigène peut porter plusieurs épitopes différents.",
        "correct": true,
        "explanation": "Plusieurs clones lymphocytaires peuvent donc reconnaître un même antigène."
      },
      {
        "content": "Les immunoglobulines appartiennent à l'immunité innée exclusivement.",
        "correct": false,
        "explanation": "Elles sont des effecteurs majeurs de l'immunité adaptative."
      },
      {
        "content": "Les antigènes reconnus peuvent être de nature chimique variée.",
        "correct": true,
        "explanation": "Protéines, glycoconjugués ou autres structures peuvent porter des épitopes."
      }
    ],
    "explanation": "Une immunoglobuline reconnaît un épitope précis porté par un antigène."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Combien de chaînes polypeptidiques comporte l'unité H2L2 d'une immunoglobuline ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "L'unité de base d'une immunoglobuline est H2L2 : deux chaînes lourdes et deux chaînes légères."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Combien de sous-unités alpha et bêta, prises ensemble, composent un hétérodimère d'intégrine ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Une intégrine fonctionnelle associe une sous-unité alpha et une sous-unité bêta."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les chaînes légères des immunoglobulines humaines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les seules chaînes légères humaines sont alpha et gamma.",
        "correct": false,
        "explanation": "α et γ sont des chaînes lourdes."
      },
      {
        "content": "La chaîne légère ne possède aucun domaine variable.",
        "correct": false,
        "explanation": "Elle possède un domaine VL."
      },
      {
        "content": "Une immunoglobuline H2L2 contient obligatoirement une chaîne κ et une λ.",
        "correct": false,
        "explanation": "Les deux chaînes légères sont du même type."
      },
      {
        "content": "Les deux types de chaînes légères sont kappa et lambda.",
        "correct": true,
        "explanation": "Une immunoglobuline donnée porte l'un ou l'autre type."
      },
      {
        "content": "Les chaînes légères participent au site de liaison à l'antigène.",
        "correct": true,
        "explanation": "Le domaine VL contribue au paratope."
      }
    ],
    "explanation": "Les chaînes légères humaines sont κ ou λ ; la classe de l'Ig dépend en revanche de la chaîne lourde."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les domaines d'immunoglobuline, laquelle est correcte ?",
    "choices": [
      {
        "content": "Un pont disulfure intradomaine stabilise de nombreux domaines d'Ig.",
        "correct": true,
        "explanation": "Des cystéines conservées participent à cette stabilisation."
      },
      {
        "content": "Les domaines d'Ig sont dépourvus de toute structure secondaire bêta.",
        "correct": false,
        "explanation": "Ils sont au contraire riches en brins bêta."
      },
      {
        "content": "Un domaine d'Ig est formé de sept domaines bêta distincts.",
        "correct": false,
        "explanation": "Il s'agit de brins bêta organisés en feuillets, pas de sept domaines."
      },
      {
        "content": "Le repliement immunoglobuline est une unique hélice alpha.",
        "correct": false,
        "explanation": "Il s'agit d'un sandwich bêta."
      },
      {
        "content": "Les domaines variables sont situés exclusivement aux extrémités C-terminales.",
        "correct": false,
        "explanation": "Ils sont N-terminaux."
      }
    ],
    "explanation": "Un domaine d'immunoglobuline est un module compact en sandwich bêta, et non une succession de « domaines bêta »."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les fragments Fab et Fc d'une IgG ?",
    "choices": [
      {
        "content": "Le Fc contient les deux sites de reconnaissance antigénique.",
        "correct": false,
        "explanation": "Ils se trouvent dans les Fab."
      },
      {
        "content": "Le Fc peut interagir avec des récepteurs Fc et des éléments du complément selon la classe.",
        "correct": true,
        "explanation": "Il ne porte pas le site antigénique principal."
      },
      {
        "content": "Le fragment Fc est constitué des régions C-terminales des chaînes lourdes.",
        "correct": true,
        "explanation": "Il porte des fonctions effectrices de l'anticorps."
      },
      {
        "content": "Chaque fragment Fab conserve un site de liaison à l'antigène.",
        "correct": true,
        "explanation": "Fab signifie fragment antigen binding."
      },
      {
        "content": "La papaïne produit un seul Fab et deux Fc.",
        "correct": false,
        "explanation": "Elle produit deux Fab et un Fc."
      }
    ],
    "explanation": "La papaïne clive classiquement une IgG en 2 Fab capables de lier l'antigène et 1 Fc effecteur."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle forme moléculaire domine pour l'IgA sécrétoire humaine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "dimère",
        "dimérique",
        "IgA dimérique",
        "dimerique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Il faut distinguer l'IgA sérique, surtout monomérique, de l'IgA sécrétoire, surtout dimérique ; l'IgM sécrétée est classiquement pentamérique."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Beaucoup se lient à l'ADN sous forme de dimères.",
        "correct": true,
        "explanation": "Des homodimères et hétérodimères sont fréquents."
      },
      {
        "content": "La liaison du ligand peut modifier le recrutement de corégulateurs.",
        "correct": true,
        "explanation": "Coactivateurs et corépresseurs modulent la transcription."
      },
      {
        "content": "Le Fc contient à lui seul le paratope complet de l'anticorps.",
        "correct": false,
        "explanation": "Le paratope est porté par les régions variables des Fab."
      },
      {
        "content": "Le Fc ne peut interagir avec aucune cellule.",
        "correct": false,
        "explanation": "Il interagit avec des récepteurs Fc."
      },
      {
        "content": "La région Fc ne détermine pas la spécificité fine de reconnaissance de l'épitope.",
        "correct": true,
        "explanation": "Cette spécificité dépend des régions variables des Fab."
      },
      {
        "content": "Le Fc contribue aux propriétés pharmacocinétiques des IgG.",
        "correct": true,
        "explanation": "Il interagit notamment avec FcRn."
      },
      {
        "content": "Certaines classes d'Ig peuvent activer le complément via leur région Fc.",
        "correct": true,
        "explanation": "La capacité varie selon la classe et la sous-classe."
      },
      {
        "content": "Ils forment toujours exactement le même homodimère.",
        "correct": false,
        "explanation": "Le mode d'association varie selon le récepteur."
      },
      {
        "content": "Le Fc est identique dans toutes les classes d'immunoglobulines.",
        "correct": false,
        "explanation": "Les régions constantes de chaîne lourde diffèrent selon la classe."
      },
      {
        "content": "Le Fc est un glucide libre détaché de la protéine.",
        "correct": false,
        "explanation": "Il s'agit d'un fragment protéique glycosylé."
      }
    ],
    "explanation": "Le Fc porte les principales fonctions effectrices et de transport, tandis que les Fab portent la reconnaissance antigénique. Les récepteurs nucléaires sont des facteurs de transcription dont la localisation et le mode de dimérisation varient selon la famille."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel fragment d'une IgG porte principalement les fonctions effectrices via les récepteurs Fc ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Fc",
        "fragment Fc",
        "région Fc"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le Fc porte les principales fonctions effectrices et de transport, tandis que les Fab portent la reconnaissance antigénique."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Combien de récepteurs nucléaires sont codés par le génome humain ?",
    "answer": {
      "type": "number",
      "value": 48,
      "tolerance": 0
    },
    "explanation": "Les 48 récepteurs nucléaires humains sont des facteurs de transcription modulaires ; certains sont orphelins."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant le fonctionnement des récepteurs nucléaires, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Ils agissent sans interaction avec l'ADN ni avec des protéines régulatrices.",
        "correct": false,
        "explanation": "Ils régulent l'expression génique via ADN et corégulateurs."
      },
      {
        "content": "Tous les récepteurs nucléaires sont obligatoirement cytoplasmiques avant ligand.",
        "correct": false,
        "explanation": "Certains sont constitutivement nucléaires."
      },
      {
        "content": "La liaison du ligand peut modifier le recrutement de corégulateurs.",
        "correct": true,
        "explanation": "Coactivateurs et corépresseurs modulent la transcription."
      },
      {
        "content": "Beaucoup se lient à l'ADN sous forme de dimères.",
        "correct": true,
        "explanation": "Des homodimères et hétérodimères sont fréquents."
      },
      {
        "content": "Ils forment toujours exactement le même homodimère.",
        "correct": false,
        "explanation": "Le mode d'association varie selon le récepteur."
      }
    ],
    "explanation": "Les récepteurs nucléaires sont des facteurs de transcription dont la localisation et le mode de dimérisation varient selon la famille.",
    "requiredSelectionCount": 2
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le récepteur de l'insuline ?",
    "choices": [
      {
        "content": "Les sous-unités alpha sont extracellulaires.",
        "correct": true,
        "explanation": "Elles participent à la fixation de l'insuline."
      },
      {
        "content": "Des ponts disulfure contribuent à maintenir l'assemblage du récepteur.",
        "correct": true,
        "explanation": "Le récepteur mature est covalentement associé."
      },
      {
        "content": "Le récepteur mature est un hétérotétramère alpha2bêta2.",
        "correct": true,
        "explanation": "Deux sous-unités α et deux β forment le récepteur."
      },
      {
        "content": "Les sous-unités bêta traversent la membrane et portent l'activité tyrosine kinase.",
        "correct": true,
        "explanation": "Le domaine kinase est cytoplasmique."
      },
      {
        "content": "Il est dépourvu de toute activité enzymatique intrinsèque.",
        "correct": false,
        "explanation": "Il possède une activité tyrosine kinase."
      }
    ],
    "explanation": "Le récepteur de l'insuline est un hétérotétramère α2β2 dont les sous-unités β portent l'activité tyrosine kinase."
  }
];
