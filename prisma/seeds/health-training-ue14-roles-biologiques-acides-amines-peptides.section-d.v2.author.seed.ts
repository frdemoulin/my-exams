import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Rôles biologiques des acides aminés et des peptides — Section D — Facteurs de croissance, cytokines, neuromédiateurs et amyloïde */
export const UE14_BIOCH_CH11_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l’ANP et le BNP, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le BNP est produit exclusivement par les neurones.",
        "correct": false,
        "explanation": "Le cœur est sa source clinique majeure."
      },
      {
        "content": "Ils diminuent systématiquement le GMPc.",
        "correct": false,
        "explanation": "Leurs récepteurs augmentent le GMPc."
      },
      {
        "content": "Ils sont dépourvus de toute action rénale.",
        "correct": false,
        "explanation": "Ils favorisent la natriurèse."
      },
      {
        "content": "L’ANP est particulièrement libéré par les oreillettes en réponse à leur distension.",
        "correct": true,
        "explanation": "Son nom historique Atrial Natriuretic Peptide reflète cette origine."
      },
      {
        "content": "Le BNP augmente notamment lors d’une augmentation de la tension pariétale ventriculaire.",
        "correct": true,
        "explanation": "Il est utile dans l’insuffisance cardiaque."
      }
    ],
    "explanation": "ANP et BNP sont des peptides cardiaques qui activent des récepteurs guanylate cyclase et augmentent le GMPc."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant l’ANP et le BNP, laquelle est correcte ?",
    "choices": [
      {
        "content": "Ils sont dépourvus de toute action rénale.",
        "correct": false,
        "explanation": "Ils favorisent la natriurèse."
      },
      {
        "content": "Ils diminuent systématiquement le GMPc.",
        "correct": false,
        "explanation": "Leurs récepteurs augmentent le GMPc."
      },
      {
        "content": "Le BNP est produit exclusivement par les neurones.",
        "correct": false,
        "explanation": "Le cœur est sa source clinique majeure."
      },
      {
        "content": "L’ANP est particulièrement libéré par les oreillettes en réponse à leur distension.",
        "correct": true,
        "explanation": "Son nom historique Atrial Natriuretic Peptide reflète cette origine."
      },
      {
        "content": "ANP et BNP sont des catécholamines.",
        "correct": false,
        "explanation": "Ce sont des hormones peptidiques."
      }
    ],
    "explanation": "ANP et BNP sont des peptides cardiaques qui activent des récepteurs guanylate cyclase et augmentent le GMPc."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel terme désigne l’augmentation de l’excrétion urinaire de sodium ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "natriurèse",
        "natriurese"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les peptides natriurétiques favorisent natriurèse, diurèse et réduction du volume/pression."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les effets des peptides natriurétiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils favorisent la natriurèse.",
        "correct": true,
        "explanation": "Ils augmentent l’excrétion rénale de sodium."
      },
      {
        "content": "Ils augmentent obligatoirement la pression artérielle.",
        "correct": false,
        "explanation": "Ils tendent à la diminuer."
      },
      {
        "content": "Ils peuvent favoriser la diurèse.",
        "correct": true,
        "explanation": "L’excrétion d’eau accompagne les effets hydro-sodés."
      },
      {
        "content": "Ils n’ont aucun effet rénal.",
        "correct": false,
        "explanation": "Le rein est une cible majeure."
      },
      {
        "content": "Ils inhibent notamment la sécrétion de rénine et d’aldostérone dans plusieurs contextes.",
        "correct": true,
        "explanation": "Ils antagonisent le système rénine-angiotensine-aldostérone."
      }
    ],
    "explanation": "Les peptides natriurétiques favorisent natriurèse, diurèse et réduction du volume/pression."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant le BNP et le NT-proBNP en biologie clinique, laquelle est correcte ?",
    "choices": [
      {
        "content": "Un taux élevé suffit à lui seul à diagnostiquer toute dyspnée comme insuffisance cardiaque.",
        "correct": false,
        "explanation": "Le biomarqueur doit être interprété dans le contexte."
      },
      {
        "content": "Le BNP est un stéroïde.",
        "correct": false,
        "explanation": "C’est un peptide."
      },
      {
        "content": "Le NT-proBNP possède une demi-vie circulante plus longue que le BNP.",
        "correct": true,
        "explanation": "Cela contribue à des concentrations plasmatiques plus élevées."
      },
      {
        "content": "Le NT-proBNP est une hormone hyperglycémiante pancréatique.",
        "correct": false,
        "explanation": "C’est un fragment du proBNP."
      },
      {
        "content": "Le NT-proBNP est produit par clivage de l’insuline.",
        "correct": false,
        "explanation": "Il dérive du proBNP."
      }
    ],
    "explanation": "BNP actif et NT-proBNP marqueur sont issus du proBNP ; leur dosage aide à évaluer l’insuffisance cardiaque."
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant le BNP et le NT-proBNP en biologie clinique, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "BNP et NT-proBNP peuvent aider au diagnostic et au suivi de l’insuffisance cardiaque.",
        "correct": true,
        "explanation": "Leur interprétation dépend de l’âge, de la fonction rénale et du contexte clinique."
      },
      {
        "content": "Le NT-proBNP est une hormone hyperglycémiante pancréatique.",
        "correct": false,
        "explanation": "C’est un fragment du proBNP."
      },
      {
        "content": "Le BNP est un stéroïde.",
        "correct": false,
        "explanation": "C’est un peptide."
      },
      {
        "content": "Le NT-proBNP est produit par clivage de l’insuline.",
        "correct": false,
        "explanation": "Il dérive du proBNP."
      },
      {
        "content": "Le NT-proBNP est biologiquement beaucoup moins actif que le BNP.",
        "correct": true,
        "explanation": "Il sert principalement de biomarqueur."
      }
    ],
    "explanation": "BNP actif et NT-proBNP marqueur sont issus du proBNP ; leur dosage aide à évaluer l’insuffisance cardiaque.",
    "requiredSelectionCount": 2
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les facteurs de croissance, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Leur dérégulation peut contribuer à des maladies dont des cancers.",
        "correct": true,
        "explanation": "Les voies de croissance sont fortement régulées."
      },
      {
        "content": "Ils peuvent contrôler prolifération, survie, migration ou différenciation.",
        "correct": true,
        "explanation": "Leur effet dépend du facteur et du tissu."
      },
      {
        "content": "Ils se lient à des récepteurs spécifiques.",
        "correct": true,
        "explanation": "La liaison déclenche une signalisation intracellulaire."
      },
      {
        "content": "Tous les facteurs de croissance ont exactement le même récepteur.",
        "correct": false,
        "explanation": "Les familles sont diverses."
      },
      {
        "content": "EGF, TGF-bêta, IGF et FGF sont des exemples de familles de facteurs de croissance.",
        "correct": true,
        "explanation": "IGF signifie insulin-like growth factor."
      }
    ],
    "explanation": "Les facteurs de croissance activent des récepteurs spécifiques et contrôlent plusieurs dimensions du comportement cellulaire."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Que signifie l’abréviation IGF ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Insulin-like Growth Factor",
        "insulin like growth factor",
        "facteur de croissance de type insulinique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les facteurs de croissance activent des récepteurs spécifiques et contrôlent plusieurs dimensions du comportement cellulaire."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant les cytokines ?",
    "choices": [
      {
        "content": "Une cytokine agit sans récepteur.",
        "correct": false,
        "explanation": "Elle agit via des récepteurs spécifiques."
      },
      {
        "content": "Elles sont toutes produites uniquement par les lymphocytes.",
        "correct": false,
        "explanation": "De nombreuses cellules en produisent."
      },
      {
        "content": "Toutes les cytokines sont exclusivement anti-inflammatoires.",
        "correct": false,
        "explanation": "Certaines sont pro-, anti- ou pléiotropes."
      },
      {
        "content": "Elles sont des triglycérides.",
        "correct": false,
        "explanation": "Ce sont des signaux protéiques/peptidiques."
      },
      {
        "content": "Ce sont des protéines ou peptides de signalisation intercellulaire.",
        "correct": true,
        "explanation": "Elles sont produites par de nombreux types cellulaires."
      }
    ],
    "explanation": "Les cytokines sont des signaux intercellulaires pléiotropes produits par de nombreux types cellulaires."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les cytokines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elles sont toutes produites uniquement par les lymphocytes.",
        "correct": false,
        "explanation": "De nombreuses cellules en produisent."
      },
      {
        "content": "Ce sont des protéines ou peptides de signalisation intercellulaire.",
        "correct": true,
        "explanation": "Elles sont produites par de nombreux types cellulaires."
      },
      {
        "content": "Une même cytokine peut avoir des effets différents selon la cellule cible.",
        "correct": true,
        "explanation": "La réponse dépend des récepteurs et de l’état cellulaire."
      },
      {
        "content": "Toutes les cytokines sont exclusivement anti-inflammatoires.",
        "correct": false,
        "explanation": "Certaines sont pro-, anti- ou pléiotropes."
      },
      {
        "content": "Une cytokine agit sans récepteur.",
        "correct": false,
        "explanation": "Elle agit via des récepteurs spécifiques."
      }
    ],
    "explanation": "Les cytokines sont des signaux intercellulaires pléiotropes produits par de nombreux types cellulaires."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les interleukines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "IL-1 et IL-6 ont de nombreux effets pro-inflammatoires.",
        "correct": true,
        "explanation": "Elles participent à la réponse systémique et locale."
      },
      {
        "content": "Les interleukines ne communiquent jamais avec les tissus épithéliaux.",
        "correct": false,
        "explanation": "Elles peuvent agir sur de nombreux tissus."
      },
      {
        "content": "Une même interleukine peut avoir plusieurs cellules cibles.",
        "correct": true,
        "explanation": "Les effets sont souvent pléiotropes."
      },
      {
        "content": "Les interleukines assurent une communication entre cellules immunitaires et avec d’autres tissus.",
        "correct": true,
        "explanation": "Leur nom historique ne limite pas leur source aux leucocytes."
      },
      {
        "content": "IL-10 est un médiateur exclusivement pro-inflammatoire.",
        "correct": false,
        "explanation": "Elle est surtout anti-inflammatoire."
      }
    ],
    "explanation": "Les interleukines ont des fonctions variées ; IL-1/IL-6 sont souvent pro-inflammatoires et IL-10 anti-inflammatoire."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle interleukine est classiquement considérée comme fortement anti-inflammatoire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "IL-10",
        "interleukine 10",
        "IL10"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les interleukines ont des fonctions variées ; IL-1/IL-6 sont souvent pro-inflammatoires et IL-10 anti-inflammatoire."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant les interférons de type I ?",
    "choices": [
      {
        "content": "Les IFN-alpha et IFN-bêta appartiennent aux interférons de type I.",
        "correct": true,
        "explanation": "Ils utilisent un récepteur commun de type I."
      },
      {
        "content": "Les IFN de type I sont produits uniquement par les hépatocytes.",
        "correct": false,
        "explanation": "De nombreuses cellules peuvent en produire."
      },
      {
        "content": "IFN-gamma est un interféron de type I.",
        "correct": false,
        "explanation": "Il est de type II."
      },
      {
        "content": "Ils stimulent directement la réplication virale.",
        "correct": false,
        "explanation": "Ils induisent un état antiviral."
      },
      {
        "content": "Il n’existe que deux types d’interférons chez l’humain.",
        "correct": false,
        "explanation": "Un type III, les IFN-lambda, existe aussi."
      }
    ],
    "explanation": "IFN-alpha et IFN-bêta sont des interférons de type I à activité antivirale ; l’humain possède aussi des IFN de type III."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les interférons de type I, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "IFN-gamma est un interféron de type I.",
        "correct": false,
        "explanation": "Il est de type II."
      },
      {
        "content": "Ils induisent un état antiviral dans les cellules cibles.",
        "correct": true,
        "explanation": "Ils activent l’expression de gènes stimulés par l’interféron."
      },
      {
        "content": "Ils peuvent être produits par de nombreux types cellulaires lors d’une infection virale.",
        "correct": true,
        "explanation": "Les acides nucléiques viraux déclenchent leur production."
      },
      {
        "content": "Ils modulent aussi l’immunité innée et adaptative.",
        "correct": true,
        "explanation": "Leurs effets dépassent l’action antivirale directe."
      },
      {
        "content": "Les IFN-alpha et IFN-bêta appartiennent aux interférons de type I.",
        "correct": true,
        "explanation": "Ils utilisent un récepteur commun de type I."
      }
    ],
    "explanation": "IFN-alpha et IFN-bêta sont des interférons de type I à activité antivirale ; l’humain possède aussi des IFN de type III."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant l’interféron gamma, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "IFN-gamma appartient au type I avec IFN-alpha.",
        "correct": false,
        "explanation": "Il est de type II."
      },
      {
        "content": "Il n’a aucun rôle immunitaire.",
        "correct": false,
        "explanation": "Il est une cytokine immunitaire majeure."
      },
      {
        "content": "Il est produit uniquement par les cardiomyocytes.",
        "correct": false,
        "explanation": "Des cellules immunitaires en sont les sources majeures."
      },
      {
        "content": "Il active fortement les macrophages.",
        "correct": true,
        "explanation": "Il renforce leurs fonctions microbicides et de présentation antigénique."
      },
      {
        "content": "Il favorise des réponses immunitaires de type Th1.",
        "correct": true,
        "explanation": "Il joue un rôle majeur contre les pathogènes intracellulaires."
      }
    ],
    "explanation": "IFN-gamma est l’interféron de type II, produit notamment par lymphocytes T et NK et activateur des macrophages.",
    "requiredSelectionCount": 2
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "À quel type d’interféron appartient IFN-gamma ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "type II",
        "interféron de type II",
        "II"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "IFN-gamma est l’interféron de type II, produit notamment par lymphocytes T et NK et activateur des macrophages."
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel terme décrit la capacité des chimiokines à orienter la migration des cellules ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "chimiotactisme",
        "chemotaxie",
        "chimiotaxie"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les chimiokines sont des cytokines chimiotactiques classées notamment selon des motifs de cystéines conservées."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les chimiokines, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elles sont des acides gras.",
        "correct": false,
        "explanation": "Ce sont des cytokines protéiques."
      },
      {
        "content": "Leur classification ne tient jamais compte des cystéines.",
        "correct": false,
        "explanation": "La disposition des cystéines est un critère classique."
      },
      {
        "content": "Elles agissent souvent via des récepteurs couplés aux protéines G.",
        "correct": true,
        "explanation": "Les récepteurs CCR et CXCR en sont des exemples."
      },
      {
        "content": "Elles ne possèdent aucun récepteur.",
        "correct": false,
        "explanation": "Des récepteurs spécifiques les reconnaissent."
      },
      {
        "content": "Elles repoussent obligatoirement toutes les cellules immunitaires.",
        "correct": false,
        "explanation": "Elles peuvent diriger leur migration selon des gradients."
      }
    ],
    "explanation": "Les chimiokines sont des cytokines chimiotactiques classées notamment selon des motifs de cystéines conservées."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les endorphines et les encéphalines ?",
    "choices": [
      {
        "content": "La bêta-endorphine est un peptide issu de la POMC.",
        "correct": true,
        "explanation": "Elle est plus longue que les encéphalines."
      },
      {
        "content": "Les encéphalines sont des pentapeptides.",
        "correct": true,
        "explanation": "Met- et Leu-encéphaline diffèrent par leur résidu C-terminal."
      },
      {
        "content": "La bêta-endorphine est un stéroïde.",
        "correct": false,
        "explanation": "C’est un peptide."
      },
      {
        "content": "Ils n’interagissent jamais avec les récepteurs opioïdes.",
        "correct": false,
        "explanation": "C’est leur cible majeure."
      },
      {
        "content": "Ils ont une structure chimique identique à la morphine.",
        "correct": false,
        "explanation": "Ils partagent des récepteurs/effets opioïdes mais pas la même structure chimique."
      }
    ],
    "explanation": "Endorphines et encéphalines sont des peptides opioïdes endogènes ; ils ne sont pas structurellement identiques à la morphine."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Les encéphalines sont des pentapeptides.",
        "correct": true,
        "explanation": "Met- et Leu-encéphaline diffèrent par leur résidu C-terminal."
      },
      {
        "content": "Les encéphalines sont des protéines de 500 résidus.",
        "correct": false,
        "explanation": "Ce sont des pentapeptides."
      },
      {
        "content": "Des cystéines conservées structurent plusieurs familles de chimiokines.",
        "correct": true,
        "explanation": "Les motifs CC et CXC participent à leur classification."
      },
      {
        "content": "Elles sont des acides gras.",
        "correct": false,
        "explanation": "Ce sont des cytokines protéiques."
      },
      {
        "content": "Elles sont souvent produites lors de réactions inflammatoires.",
        "correct": true,
        "explanation": "Elles recrutent des leucocytes vers les tissus."
      },
      {
        "content": "Elles agissent souvent via des récepteurs couplés aux protéines G.",
        "correct": true,
        "explanation": "Les récepteurs CCR et CXCR en sont des exemples."
      },
      {
        "content": "Ils ont une structure chimique identique à la morphine.",
        "correct": false,
        "explanation": "Ils partagent des récepteurs/effets opioïdes mais pas la même structure chimique."
      },
      {
        "content": "Ils modulent notamment la nociception.",
        "correct": true,
        "explanation": "Leur activation de récepteurs opioïdes peut réduire la transmission de la douleur."
      },
      {
        "content": "Elles repoussent obligatoirement toutes les cellules immunitaires.",
        "correct": false,
        "explanation": "Elles peuvent diriger leur migration selon des gradients."
      },
      {
        "content": "La bêta-endorphine est un stéroïde.",
        "correct": false,
        "explanation": "C’est un peptide."
      }
    ],
    "explanation": "Endorphines et encéphalines sont des peptides opioïdes endogènes ; ils ne sont pas structurellement identiques à la morphine. Les chimiokines sont des cytokines chimiotactiques classées notamment selon des motifs de cystéines conservées."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant le peptide bêta-amyloïde et la maladie d’Alzheimer, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Les peptides Aβ sont produits par clivages protéolytiques de l’APP.",
        "correct": true,
        "explanation": "La voie amyloïdogénique implique bêta- puis gamma-sécrétase."
      },
      {
        "content": "Les plaques amyloïdes et les dégénérescences neurofibrillaires sont deux lésions caractéristiques de la maladie d’Alzheimer.",
        "correct": true,
        "explanation": "La pathologie ne se réduit pas à un seul biomarqueur."
      },
      {
        "content": "Aβ42 contient moins de résidus qu’Aβ40.",
        "correct": false,
        "explanation": "Il en contient deux de plus."
      },
      {
        "content": "Les peptides Aβ sont produits par traduction directe d’un gène Aβ indépendant.",
        "correct": false,
        "explanation": "Ils proviennent du clivage d’APP."
      },
      {
        "content": "Aβ42 est plus hydrophobe et plus agrégant que Aβ40.",
        "correct": true,
        "explanation": "Il est fortement impliqué dans la formation de plaques."
      }
    ],
    "explanation": "Aβ40/Aβ42 proviennent de l’APP ; Aβ42 est plus agrégant et les mutations ne sont pas nécessaires à toute production amyloïdogénique."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle forme, Aβ40 ou Aβ42, est généralement la plus agrégante ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Aβ42",
        "Abeta42",
        "A beta 42",
        "amyloïde bêta 42"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Aβ40/Aβ42 proviennent de l’APP ; Aβ42 est plus agrégant et les mutations ne sont pas nécessaires à toute production amyloïdogénique."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant l’intégration clinique des signaux peptidiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "BNP/NT-proBNP renseignent sur la contrainte cardiaque mais ne suffisent pas seuls à un diagnostic.",
        "correct": true,
        "explanation": "Ils s’intègrent à l’examen clinique et à l’imagerie."
      },
      {
        "content": "Le NT-proBNP est totalement indépendant de la fonction rénale.",
        "correct": false,
        "explanation": "La fonction rénale influence ses concentrations."
      },
      {
        "content": "Un biomarqueur peptidique doit être interprété avec le contexte clinique.",
        "correct": true,
        "explanation": "Âge, fonction rénale, traitements et délai peuvent influencer la concentration."
      },
      {
        "content": "Peptide C renseigne sur la sécrétion endogène d’insuline.",
        "correct": true,
        "explanation": "Il est libéré équimolairement avec l’insuline endogène."
      },
      {
        "content": "La concentration d’un peptide dépend aussi de sa production et de sa clairance.",
        "correct": true,
        "explanation": "Un taux élevé n’implique pas nécessairement une production seule augmentée."
      }
    ],
    "explanation": "Les peptides cliniques sont des biomarqueurs contextuels : peptide C pour l’insuline endogène, BNP/NT-proBNP pour le stress cardiaque."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel peptide est particulièrement utile pour estimer la sécrétion endogène d’insuline ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "peptide C",
        "C-peptide"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les peptides cliniques sont des biomarqueurs contextuels : peptide C pour l’insuline endogène, BNP/NT-proBNP pour le stress cardiaque."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant l’opposition fonctionnelle insuline–glucagon, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Le glucagon favorise la production hépatique de glucose.",
        "correct": true,
        "explanation": "Il stimule notamment glycogénolyse et néoglucogenèse."
      },
      {
        "content": "L’insuline favorise globalement la baisse de la glycémie.",
        "correct": true,
        "explanation": "Elle stimule l’utilisation et le stockage des substrats."
      },
      {
        "content": "Le foie ne répond jamais au glucagon.",
        "correct": false,
        "explanation": "C’est une cible majeure."
      },
      {
        "content": "Insuline et glucagon sont tous deux principalement hypoglycémiants.",
        "correct": false,
        "explanation": "Le glucagon est hyperglycémiant."
      },
      {
        "content": "Le glucagon est produit par les cellules bêta.",
        "correct": false,
        "explanation": "Il est surtout produit par les cellules alpha."
      }
    ],
    "explanation": "Insuline et glucagon sont des hormones peptidiques antagonistes sur la disponibilité du glucose.",
    "requiredSelectionCount": 2
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant l’opposition fonctionnelle insuline–glucagon, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le rapport insuline/glucagon aide à orienter le métabolisme vers stockage ou mobilisation.",
        "correct": true,
        "explanation": "Il varie entre état nourri et jeûne."
      },
      {
        "content": "L’insuline est une hormone stéroïdienne.",
        "correct": false,
        "explanation": "C’est un peptide."
      },
      {
        "content": "Le glucagon favorise la production hépatique de glucose.",
        "correct": true,
        "explanation": "Il stimule notamment glycogénolyse et néoglucogenèse."
      },
      {
        "content": "Le foie ne répond jamais au glucagon.",
        "correct": false,
        "explanation": "C’est une cible majeure."
      },
      {
        "content": "Insuline et glucagon sont tous deux principalement hypoglycémiants.",
        "correct": false,
        "explanation": "Le glucagon est hyperglycémiant."
      }
    ],
    "explanation": "Insuline et glucagon sont des hormones peptidiques antagonistes sur la disponibilité du glucose."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les précurseurs polypeptidiques, laquelle est correcte ?",
    "choices": [
      {
        "content": "Les enzymes de maturation sont identiques dans tous les tissus.",
        "correct": false,
        "explanation": "Leur expression peut différer."
      },
      {
        "content": "Le clivage protéolytique ajoute des résidus au précurseur.",
        "correct": false,
        "explanation": "Il coupe la chaîne."
      },
      {
        "content": "La proinsuline donne insuline et peptide C.",
        "correct": true,
        "explanation": "Le précurseur est traité dans les granules sécrétoires."
      },
      {
        "content": "Toutes les prohormones sont des stéroïdes.",
        "correct": false,
        "explanation": "Ce sont des précurseurs protéiques."
      },
      {
        "content": "Un précurseur polypeptidique ne peut produire qu’un seul produit final.",
        "correct": false,
        "explanation": "Plusieurs produits sont possibles."
      }
    ],
    "explanation": "La maturation protéolytique convertit des précurseurs en peptides et peut être tissu-spécifique."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les précurseurs polypeptidiques ?",
    "choices": [
      {
        "content": "La POMC donne plusieurs peptides selon le tissu.",
        "correct": true,
        "explanation": "Les convertases exprimées déterminent le profil de produits."
      },
      {
        "content": "Une prohormone peut donner un ou plusieurs peptides actifs après clivage.",
        "correct": true,
        "explanation": "La maturation protéolytique est un mécanisme fréquent."
      },
      {
        "content": "Le clivage protéolytique ajoute des résidus au précurseur.",
        "correct": false,
        "explanation": "Il coupe la chaîne."
      },
      {
        "content": "Un précurseur polypeptidique ne peut produire qu’un seul produit final.",
        "correct": false,
        "explanation": "Plusieurs produits sont possibles."
      },
      {
        "content": "La proinsuline donne insuline et peptide C.",
        "correct": true,
        "explanation": "Le précurseur est traité dans les granules sécrétoires."
      }
    ],
    "explanation": "La maturation protéolytique convertit des précurseurs en peptides et peut être tissu-spécifique."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle cytokine est un repère classique de régulation anti-inflammatoire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "IL-10",
        "IL10",
        "interleukine 10"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’inflammation associe cytokines pro- et anti-inflammatoires et chimiokines de recrutement."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Des cytokines anti-inflammatoires limitent la réponse.",
        "correct": true,
        "explanation": "IL-10 est un exemple majeur."
      },
      {
        "content": "Les chimiokines n’influencent jamais la migration.",
        "correct": false,
        "explanation": "C’est une fonction majeure."
      },
      {
        "content": "Le proglucagon peut donner des peptides différents selon le tissu.",
        "correct": true,
        "explanation": "Pancréas et intestin n’expriment pas les mêmes convertases."
      },
      {
        "content": "Les cytokines pro-inflammatoires coordonnent recrutement et activation cellulaires.",
        "correct": true,
        "explanation": "IL-1, IL-6 et TNF en sont des exemples importants."
      },
      {
        "content": "IL-10 amplifie obligatoirement toute inflammation.",
        "correct": false,
        "explanation": "Elle est principalement régulatrice/anti-inflammatoire."
      },
      {
        "content": "La POMC donne plusieurs peptides selon le tissu.",
        "correct": true,
        "explanation": "Les convertases exprimées déterminent le profil de produits."
      },
      {
        "content": "Les chimiokines contribuent au recrutement spatial des leucocytes.",
        "correct": true,
        "explanation": "Elles établissent des gradients chimiotactiques."
      },
      {
        "content": "Toute cytokine inflammatoire a exactement le même effet.",
        "correct": false,
        "explanation": "Les fonctions sont pléiotropes."
      },
      {
        "content": "Toutes les prohormones sont des stéroïdes.",
        "correct": false,
        "explanation": "Ce sont des précurseurs protéiques."
      },
      {
        "content": "Le clivage protéolytique ajoute des résidus au précurseur.",
        "correct": false,
        "explanation": "Il coupe la chaîne."
      }
    ],
    "explanation": "L’inflammation associe cytokines pro- et anti-inflammatoires et chimiokines de recrutement. La maturation protéolytique convertit des précurseurs en peptides et peut être tissu-spécifique."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la signalisation cardiaque par peptides natriurétiques ?",
    "choices": [
      {
        "content": "L’étirement myocardique augmente la synthèse/libération de peptides natriurétiques.",
        "correct": true,
        "explanation": "Ils signalent une surcharge de pression ou de volume."
      },
      {
        "content": "Le dosage du BNP ou NT-proBNP exploite cette physiologie en clinique.",
        "correct": true,
        "explanation": "Une forte contrainte cardiaque peut augmenter les concentrations."
      },
      {
        "content": "Leurs récepteurs membranaires produisent du GMPc.",
        "correct": true,
        "explanation": "La guanylate cyclase est intrinsèque à certains récepteurs natriurétiques."
      },
      {
        "content": "Le BNP n’a aucun lien avec le cœur.",
        "correct": false,
        "explanation": "Il est un peptide cardiaque majeur."
      },
      {
        "content": "Ils s’opposent à plusieurs mécanismes de rétention hydro-sodée.",
        "correct": true,
        "explanation": "Ils favorisent natriurèse et vasodilatation."
      }
    ],
    "explanation": "Les peptides natriurétiques convertissent un signal d’étirement cardiaque en réponse endocrine via le GMPc."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel nucléotide cyclique relaie classiquement le signal de l’ANP et du BNP ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "GMPc",
        "cGMP"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les peptides natriurétiques convertissent un signal d’étirement cardiaque en réponse endocrine via le GMPc."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant les peptides opioïdes et les peptides amyloïdes, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Les peptides ne peuvent jamais former d’agrégats.",
        "correct": false,
        "explanation": "Certains peptides amyloïdes s’agrègent fortement."
      },
      {
        "content": "Bêta-endorphine et Aβ ont des origines et des fonctions radicalement différentes.",
        "correct": true,
        "explanation": "La première est un neuromédiateur opioïde, le second un produit de clivage d’APP."
      },
      {
        "content": "Bêta-endorphine et Aβ sont la même molécule.",
        "correct": false,
        "explanation": "Ils sont totalement distincts."
      },
      {
        "content": "Aβ est une hormone pancréatique.",
        "correct": false,
        "explanation": "Il dérive d’APP."
      },
      {
        "content": "Les peptides amyloïdes peuvent s’agréger en structures riches en feuillets bêta.",
        "correct": true,
        "explanation": "L’agrégation modifie leurs propriétés physiques."
      }
    ],
    "explanation": "Les peptides ont des fonctions extrêmement diverses, des opioïdes endogènes aux peptides amyloïdes pathologiques.",
    "requiredSelectionCount": 2
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les peptides opioïdes et les peptides amyloïdes ?",
    "choices": [
      {
        "content": "Aβ est une hormone pancréatique.",
        "correct": false,
        "explanation": "Il dérive d’APP."
      },
      {
        "content": "Bêta-endorphine et Aβ sont la même molécule.",
        "correct": false,
        "explanation": "Ils sont totalement distincts."
      },
      {
        "content": "Bêta-endorphine et Aβ ont des origines et des fonctions radicalement différentes.",
        "correct": true,
        "explanation": "La première est un neuromédiateur opioïde, le second un produit de clivage d’APP."
      },
      {
        "content": "Tous les peptides se lient aux récepteurs opioïdes.",
        "correct": false,
        "explanation": "Seuls certains peptides opioïdes le font."
      },
      {
        "content": "Les peptides amyloïdes peuvent s’agréger en structures riches en feuillets bêta.",
        "correct": true,
        "explanation": "L’agrégation modifie leurs propriétés physiques."
      }
    ],
    "explanation": "Les peptides ont des fonctions extrêmement diverses, des opioïdes endogènes aux peptides amyloïdes pathologiques."
  }
];
