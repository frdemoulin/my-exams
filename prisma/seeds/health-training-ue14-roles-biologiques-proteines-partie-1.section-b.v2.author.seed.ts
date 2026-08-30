import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Rôles biologiques des protéines, partie 1 — Section B — Régulation : récepteurs nucléaires et métabotropiques */
export const UE14_BIOCH_CH12_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'organisation générale d'un récepteur membranaire à une traversée, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La liaison d'un ligand ne peut jamais modifier son état structural.",
        "correct": false,
        "explanation": "Des changements conformationnels sont fréquents."
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
        "content": "Il possède un segment transmembranaire hydrophobe.",
        "correct": true,
        "explanation": "Ce segment traverse la bicouche lipidique."
      },
      {
        "content": "Ses trois grands domaines sont nécessairement nucléaires.",
        "correct": false,
        "explanation": "Un récepteur membranaire traverse la membrane plasmique."
      }
    ],
    "explanation": "Les récepteurs membranaires possèdent typiquement des domaines extracellulaire, transmembranaire et cytoplasmique."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les récepteurs nucléaires humains, laquelle est correcte ?",
    "choices": [
      {
        "content": "Ils ne possèdent aucun domaine de liaison à l'ADN.",
        "correct": false,
        "explanation": "Un domaine de liaison à l'ADN est caractéristique."
      },
      {
        "content": "Leurs ligands comprennent notamment hormones stéroïdiennes, hormones thyroïdiennes, rétinoïdes et vitamine D.",
        "correct": true,
        "explanation": "Ce sont souvent des ligands lipophiles."
      },
      {
        "content": "Ils ne répondent jamais à des molécules lipophiles.",
        "correct": false,
        "explanation": "De nombreux ligands sont lipophiles."
      },
      {
        "content": "Tous les récepteurs nucléaires sont des canaux ioniques membranaires.",
        "correct": false,
        "explanation": "Ce sont des facteurs de transcription intracellulaires."
      },
      {
        "content": "L'être humain possède plus de 150 récepteurs nucléaires distincts.",
        "correct": false,
        "explanation": "Le nombre de récepteurs nucléaires humains est 48."
      }
    ],
    "explanation": "Les 48 récepteurs nucléaires humains sont des facteurs de transcription modulaires ; certains sont orphelins."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel grand processus cellulaire est directement modulé par les récepteurs nucléaires ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "transcription",
        "expression des gènes",
        "expression génique",
        "regulation transcriptionnelle"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les récepteurs nucléaires sont des facteurs de transcription dont la localisation et le mode de dimérisation varient selon la famille."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel domaine enzymatique intracellulaire porte le récepteur de l'insuline ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "tyrosine kinase",
        "domaine tyrosine kinase",
        "activité tyrosine kinase"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le récepteur de l'insuline est un hétérotétramère α2β2 dont les sous-unités β portent l'activité tyrosine kinase."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la voie IRS–PI3K–AKT du récepteur de l'insuline, laquelle est correcte ?",
    "choices": [
      {
        "content": "PI3K hydrolyse PIP2 en DAG et IP3.",
        "correct": false,
        "explanation": "Cela correspond à une phospholipase C."
      },
      {
        "content": "PIP3 phosphoryle directement AKT sans intervention de kinase.",
        "correct": false,
        "explanation": "PIP3 recrute les acteurs ; l'activation d'AKT nécessite des phosphorylations enzymatiques."
      },
      {
        "content": "PI3K favorise la formation de PIP3 à partir de PIP2.",
        "correct": true,
        "explanation": "PIP3 recrute des protéines de signalisation à la membrane."
      },
      {
        "content": "L'insuline bloque toute phosphorylation du récepteur.",
        "correct": false,
        "explanation": "Elle favorise son activation kinase."
      },
      {
        "content": "IRS désigne un canal chlorure.",
        "correct": false,
        "explanation": "IRS désigne des substrats du récepteur de l'insuline."
      }
    ],
    "explanation": "La voie insulinique classique comprend autophosphorylation du récepteur, IRS, PI3K, PIP3 puis activation d'AKT/PKB."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant les récepteurs couplés aux protéines G, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Tous les RCPG reconnaissent le même ligand.",
        "correct": false,
        "explanation": "Le répertoire de ligands est très divers."
      },
      {
        "content": "Ils possèdent une seule traversée transmembranaire.",
        "correct": false,
        "explanation": "Ils en possèdent sept."
      },
      {
        "content": "La protéine G alpha ne lie aucun nucléotide.",
        "correct": false,
        "explanation": "Elle lie GDP ou GTP."
      },
      {
        "content": "La fixation d'un ligand modifie la conformation du récepteur.",
        "correct": true,
        "explanation": "Cette conformation favorise l'activation de la protéine G."
      },
      {
        "content": "Ils activent des protéines G hétérotrimériques.",
        "correct": true,
        "explanation": "La sous-unité alpha échange GDP contre GTP lors de l'activation."
      }
    ],
    "explanation": "Les RCPG sont des récepteurs 7TM qui activent des protéines G dépendantes du GDP/GTP.",
    "requiredSelectionCount": 2
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la rhodopsine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La lumière augmente directement le cGMP dans les bâtonnets.",
        "correct": false,
        "explanation": "La cascade activée diminue le cGMP."
      },
      {
        "content": "Un photon provoque l'isomérisation vers une forme tout-trans du rétinal.",
        "correct": true,
        "explanation": "Cette photoconversion déclenche le changement conformationnel du récepteur."
      },
      {
        "content": "L'activation ouvre durablement les canaux cationiques dépendants du cGMP.",
        "correct": false,
        "explanation": "Elle conduit à leur fermeture."
      },
      {
        "content": "C'est un RCPG des photorécepteurs bâtonnets.",
        "correct": true,
        "explanation": "Elle intervient dans la vision en faible luminosité."
      },
      {
        "content": "La rhodopsine activée stimule la transducine.",
        "correct": true,
        "explanation": "La cascade réduit le cGMP et ferme des canaux cationiques."
      }
    ],
    "explanation": "La rhodopsine couple l'isomérisation du 11-cis-rétinal à l'activation de la transducine puis à une baisse du cGMP."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quels sont les trois récepteurs opioïdes classiques ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "mu, delta et kappa",
        "μ, δ et κ",
        "mu delta kappa"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les trois récepteurs opioïdes classiques sont μ, δ et κ ; écrire γ à la place de δ est incorrect."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant l'organisation générale d'un récepteur membranaire à une traversée ?",
    "choices": [
      {
        "content": "Le segment transmembranaire est constitué uniquement de sucres.",
        "correct": false,
        "explanation": "Il est protéique et hydrophobe."
      },
      {
        "content": "Il ne possède jamais de partie extracellulaire.",
        "correct": false,
        "explanation": "La reconnaissance du ligand se fait souvent à l'extérieur."
      },
      {
        "content": "La fixation du ligand peut modifier la conformation ou l'association du récepteur.",
        "correct": true,
        "explanation": "Cela permet la transmission de l'information."
      },
      {
        "content": "La liaison d'un ligand ne peut jamais modifier son état structural.",
        "correct": false,
        "explanation": "Des changements conformationnels sont fréquents."
      },
      {
        "content": "Ses trois grands domaines sont nécessairement nucléaires.",
        "correct": false,
        "explanation": "Un récepteur membranaire traverse la membrane plasmique."
      }
    ],
    "explanation": "Les récepteurs membranaires possèdent typiquement des domaines extracellulaire, transmembranaire et cytoplasmique."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les récepteurs nucléaires humains, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils ne possèdent aucun domaine de liaison à l'ADN.",
        "correct": false,
        "explanation": "Un domaine de liaison à l'ADN est caractéristique."
      },
      {
        "content": "Ils forment une superfamille de 48 facteurs de transcription chez l'être humain.",
        "correct": true,
        "explanation": "Le génome humain code 48 récepteurs nucléaires."
      },
      {
        "content": "Ils possèdent un domaine de liaison à l'ADN et un domaine de liaison au ligand.",
        "correct": true,
        "explanation": "Cette architecture modulaire est caractéristique."
      },
      {
        "content": "Leurs ligands comprennent notamment hormones stéroïdiennes, hormones thyroïdiennes, rétinoïdes et vitamine D.",
        "correct": true,
        "explanation": "Ce sont souvent des ligands lipophiles."
      },
      {
        "content": "Certains sont des récepteurs orphelins dont le ligand physiologique n'est pas établi.",
        "correct": true,
        "explanation": "Le terme orphelin ne signifie pas absence de fonction."
      }
    ],
    "explanation": "Les 48 récepteurs nucléaires humains sont des facteurs de transcription modulaires ; certains sont orphelins."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'organisation générale d'un récepteur membranaire à une traversée, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le segment transmembranaire est constitué uniquement de sucres.",
        "correct": false,
        "explanation": "Il est protéique et hydrophobe."
      },
      {
        "content": "Ses trois grands domaines sont nécessairement nucléaires.",
        "correct": false,
        "explanation": "Un récepteur membranaire traverse la membrane plasmique."
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
      },
      {
        "content": "La fixation du ligand peut modifier la conformation ou l'association du récepteur.",
        "correct": true,
        "explanation": "Cela permet la transmission de l'information."
      }
    ],
    "explanation": "Les récepteurs membranaires possèdent typiquement des domaines extracellulaire, transmembranaire et cytoplasmique."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
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
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans une autre application, combien de récepteurs nucléaires sont codés par le génome humain ?",
    "answer": {
      "type": "number",
      "value": 48,
      "tolerance": 0
    },
    "explanation": "Les 48 récepteurs nucléaires humains sont des facteurs de transcription modulaires ; certains sont orphelins."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le récepteur de l'insuline, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les sous-unités bêta traversent la membrane et portent l'activité tyrosine kinase.",
        "correct": true,
        "explanation": "Le domaine kinase est cytoplasmique."
      },
      {
        "content": "Les sous-unités alpha sont extracellulaires.",
        "correct": true,
        "explanation": "Elles participent à la fixation de l'insuline."
      },
      {
        "content": "Le récepteur mature est un monomère soluble.",
        "correct": false,
        "explanation": "C'est un hétérotétramère membranaire."
      },
      {
        "content": "Il possède sept traversées transmembranaires par sous-unité.",
        "correct": false,
        "explanation": "Chaque β possède une traversée."
      },
      {
        "content": "Des ponts disulfure contribuent à maintenir l'assemblage du récepteur.",
        "correct": true,
        "explanation": "Le récepteur mature est covalentement associé."
      }
    ],
    "explanation": "Le récepteur de l'insuline est un hétérotétramère α2β2 dont les sous-unités β portent l'activité tyrosine kinase."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant la voie IRS–PI3K–AKT du récepteur de l'insuline, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "PI3K favorise la formation de PIP3 à partir de PIP2.",
        "correct": true,
        "explanation": "PIP3 recrute des protéines de signalisation à la membrane."
      },
      {
        "content": "PIP3 phosphoryle directement AKT sans intervention de kinase.",
        "correct": false,
        "explanation": "PIP3 recrute les acteurs ; l'activation d'AKT nécessite des phosphorylations enzymatiques."
      },
      {
        "content": "Des protéines IRS sont phosphorylées et servent de plateformes de signalisation.",
        "correct": true,
        "explanation": "Elles transmettent le signal à plusieurs voies."
      },
      {
        "content": "IRS désigne un canal chlorure.",
        "correct": false,
        "explanation": "IRS désigne des substrats du récepteur de l'insuline."
      },
      {
        "content": "PI3K hydrolyse PIP2 en DAG et IP3.",
        "correct": false,
        "explanation": "Cela correspond à une phospholipase C."
      }
    ],
    "explanation": "La voie insulinique classique comprend autophosphorylation du récepteur, IRS, PI3K, PIP3 puis activation d'AKT/PKB.",
    "requiredSelectionCount": 2
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les récepteurs couplés aux protéines G ?",
    "choices": [
      {
        "content": "La fixation d'un ligand modifie la conformation du récepteur.",
        "correct": true,
        "explanation": "Cette conformation favorise l'activation de la protéine G."
      },
      {
        "content": "Tous les RCPG reconnaissent le même ligand.",
        "correct": false,
        "explanation": "Le répertoire de ligands est très divers."
      },
      {
        "content": "Ils activent des protéines G hétérotrimériques.",
        "correct": true,
        "explanation": "La sous-unité alpha échange GDP contre GTP lors de l'activation."
      },
      {
        "content": "Leurs ligands sont très variés.",
        "correct": true,
        "explanation": "Hormones, neurotransmetteurs, odorants et autres signaux peuvent agir via des RCPG."
      },
      {
        "content": "Ils possèdent sept hélices transmembranaires.",
        "correct": true,
        "explanation": "Le motif 7TM est caractéristique des RCPG."
      }
    ],
    "explanation": "Les RCPG sont des récepteurs 7TM qui activent des protéines G dépendantes du GDP/GTP."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel nom porte la protéine G activée par la rhodopsine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "transducine",
        "la transducine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La rhodopsine couple l'isomérisation du 11-cis-rétinal à l'activation de la transducine puis à une baisse du cGMP."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les récepteurs opioïdes classiques, laquelle est correcte ?",
    "choices": [
      {
        "content": "Les trois récepteurs classiques sont mu, gamma et kappa.",
        "correct": false,
        "explanation": "Le sous-type intermédiaire est delta, pas gamma."
      },
      {
        "content": "Le récepteur NOP est apparenté à cette famille mais distinct des trois récepteurs opioïdes classiques.",
        "correct": true,
        "explanation": "Il répond à la nociceptine/orphanine FQ."
      },
      {
        "content": "Ils ne reconnaissent aucun peptide endogène.",
        "correct": false,
        "explanation": "Plusieurs opioïdes endogènes les activent."
      },
      {
        "content": "Les récepteurs mu, delta et kappa sont des canaux chlorure eux-mêmes.",
        "correct": false,
        "explanation": "Ce sont des RCPG."
      },
      {
        "content": "Ce sont tous des récepteurs tyrosine kinase à une traversée.",
        "correct": false,
        "explanation": "Ce sont des RCPG 7TM."
      }
    ],
    "explanation": "Les trois récepteurs opioïdes classiques sont μ, δ et κ ; écrire γ à la place de δ est incorrect."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel sous-type classique de récepteur opioïde complète la série mu – … – kappa ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "delta",
        "δ",
        "récepteur delta",
        "DOP"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les trois récepteurs opioïdes classiques sont μ, δ et κ ; écrire γ à la place de δ est incorrect."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "IRS désigne un canal chlorure.",
        "correct": false,
        "explanation": "IRS désigne des substrats du récepteur de l'insuline."
      },
      {
        "content": "Des protéines IRS sont phosphorylées et servent de plateformes de signalisation.",
        "correct": true,
        "explanation": "Elles transmettent le signal à plusieurs voies."
      },
      {
        "content": "PI3K favorise la formation de PIP3 à partir de PIP2.",
        "correct": true,
        "explanation": "PIP3 recrute des protéines de signalisation à la membrane."
      },
      {
        "content": "Ils ne possèdent aucun domaine de liaison à l'ADN.",
        "correct": false,
        "explanation": "Un domaine de liaison à l'ADN est caractéristique."
      },
      {
        "content": "Ils ne répondent jamais à des molécules lipophiles.",
        "correct": false,
        "explanation": "De nombreux ligands sont lipophiles."
      },
      {
        "content": "Ils forment une superfamille de 48 facteurs de transcription chez l'être humain.",
        "correct": true,
        "explanation": "Le génome humain code 48 récepteurs nucléaires."
      },
      {
        "content": "Tous les récepteurs nucléaires sont des canaux ioniques membranaires.",
        "correct": false,
        "explanation": "Ce sont des facteurs de transcription intracellulaires."
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
        "content": "Ils possèdent un domaine de liaison à l'ADN et un domaine de liaison au ligand.",
        "correct": true,
        "explanation": "Cette architecture modulaire est caractéristique."
      }
    ],
    "explanation": "Les 48 récepteurs nucléaires humains sont des facteurs de transcription modulaires ; certains sont orphelins. La voie insulinique classique comprend autophosphorylation du récepteur, IRS, PI3K, PIP3 puis activation d'AKT/PKB."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant le fonctionnement des récepteurs nucléaires, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Ils agissent sans interaction avec l'ADN ni avec des protéines régulatrices.",
        "correct": false,
        "explanation": "Ils régulent l'expression génique via ADN et corégulateurs."
      },
      {
        "content": "Beaucoup se lient à l'ADN sous forme de dimères.",
        "correct": true,
        "explanation": "Des homodimères et hétérodimères sont fréquents."
      },
      {
        "content": "D'autres, comme certains récepteurs stéroïdiens, peuvent être cytoplasmiques avant activation.",
        "correct": true,
        "explanation": "La fixation du ligand peut favoriser leur translocation nucléaire."
      },
      {
        "content": "Leur seule fonction est d'ouvrir un canal sodium.",
        "correct": false,
        "explanation": "Ils sont principalement des régulateurs transcriptionnels."
      },
      {
        "content": "Tous les récepteurs nucléaires sont obligatoirement cytoplasmiques avant ligand.",
        "correct": false,
        "explanation": "Certains sont constitutivement nucléaires."
      }
    ],
    "explanation": "Les récepteurs nucléaires sont des facteurs de transcription dont la localisation et le mode de dimérisation varient selon la famille."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle activité enzymatique intrinsèque porte la sous-unité bêta du récepteur de l'insuline ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "tyrosine kinase",
        "activité tyrosine kinase",
        "kinase de tyrosine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le récepteur de l'insuline est un hétérotétramère α2β2 dont les sous-unités β portent l'activité tyrosine kinase."
  }
];
