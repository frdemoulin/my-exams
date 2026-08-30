import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch6 — Peroxysomes — Métabolismes lipidiques et autres fonctions — V2 active */
export const SECTION_C_QUESTIONS: SeedQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Repérez les propositions scientifiquement correctes sur le thème suivant : les autres fonctions métaboliques et leur régulation.",
    "choices": [
      {
        "content": "Une hyperuricémie peut favoriser des dépôts de cristaux d’urate dans les articulations.",
        "correct": true,
        "explanation": "Ces dépôts sont responsables des crises de goutte."
      },
      {
        "content": "La goutte et la lithiase urique sont deux complications distinctes possibles d’un excès d’urate.",
        "correct": true,
        "explanation": "La première touche surtout les articulations ; la seconde correspond à des calculs urinaires."
      },
      {
        "content": "PPARα est un récepteur nucléaire impliqué dans la régulation de gènes du métabolisme lipidique.",
        "correct": true,
        "explanation": "Son activation modifie la transcription de nombreux gènes d’oxydation des acides gras."
      },
      {
        "content": "Chez l’humain, l’urate oxydase convertit normalement l’acide urique en allantoïne.",
        "correct": false,
        "explanation": "L’humain ne possède pas d’urate oxydase fonctionnelle."
      },
      {
        "content": "L’adénine et la guanine sont des bases pyrimidiques.",
        "correct": false,
        "explanation": "Ce sont des bases puriques."
      }
    ],
    "explanation": "Les peroxysomes participent à plusieurs voies métaboliques ; chez l’humain, l’absence d’urate oxydase fait de l’acide urique le produit final majeur du catabolisme des purines, et PPARα régule de nombreux gènes du métabolisme lipidique."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Identifiez la seule proposition scientifiquement correcte sur le thème suivant : les fonctions lipidiques des peroxysomes.",
    "choices": [
      {
        "content": "Un défaut peroxysomal de β-oxydation entraîne nécessairement une diminution des acides gras à très longue chaîne.",
        "correct": false,
        "explanation": "Il peut au contraire provoquer leur accumulation."
      },
      {
        "content": "La β-oxydation peroxysomale est spécialisée exclusivement dans les acides gras à chaîne courte.",
        "correct": false,
        "explanation": "Elle intervient particulièrement pour les acides gras à très longue chaîne."
      },
      {
        "content": "Le peroxysome oxyde systématiquement tous les acides gras jusqu’au CO2 sans intervention mitochondriale.",
        "correct": false,
        "explanation": "Il raccourcit souvent les chaînes ; l’oxydation complète implique d’autres compartiments, notamment la mitochondrie."
      },
      {
        "content": "La membrane peroxysomale contient une ATP synthase responsable du rendement énergétique de la β-oxydation.",
        "correct": false,
        "explanation": "La phosphorylation oxydative est mitochondriale."
      },
      {
        "content": "Les peroxysomes participent au raccourcissement de la chaîne latérale de certains intermédiaires des acides biliaires.",
        "correct": true,
        "explanation": "Cette étape peroxysomale contribue à la maturation des acides biliaires."
      }
    ],
    "explanation": "Les peroxysomes raccourcissent notamment les acides gras à très longue chaîne, participent à la synthèse des plasmalogènes et à certaines étapes du métabolisme des acides biliaires."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel type d’acides gras est particulièrement pris en charge par la β-oxydation peroxysomale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acides gras à très longue chaîne",
        "AG à très longue chaîne",
        "VLCFA",
        "très longues chaînes"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le peroxysome raccourcit préférentiellement des acides gras à très longue chaîne avant relais métabolique."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les cinq affirmations proposées, lesquelles sont justes sur le thème suivant : les autres fonctions métaboliques et leur régulation ?",
    "choices": [
      {
        "content": "Les fibrates sont des agonistes pharmacologiques de PPARα.",
        "correct": true,
        "explanation": "Ils sont utilisés notamment pour réduire les triglycérides plasmatiques."
      },
      {
        "content": "L’activation de PPARα augmente l’expression de plusieurs enzymes du catabolisme des acides gras.",
        "correct": true,
        "explanation": "L’effet passe par la régulation transcriptionnelle et ne se réduit pas au nombre d’organites."
      },
      {
        "content": "Les oxydases peroxysomales d’acides aminés n’utilisent jamais d’oxygène.",
        "correct": false,
        "explanation": "Par définition, les oxydases transfèrent des électrons à l’oxygène."
      },
      {
        "content": "La prolifération peroxysomale induite par les agonistes PPARα est beaucoup plus marquée chez certains rongeurs que chez l’humain.",
        "correct": true,
        "explanation": "Les réponses d’espèce diffèrent fortement."
      },
      {
        "content": "Certaines oxydases d’acides aminés sont localisées dans les peroxysomes.",
        "correct": true,
        "explanation": "Elles participent au métabolisme de certains acides aminés en produisant notamment du H2O2."
      }
    ],
    "explanation": "Les peroxysomes participent à plusieurs voies métaboliques ; chez l’humain, l’absence d’urate oxydase fait de l’acide urique le produit final majeur du catabolisme des purines, et PPARα régule de nombreux gènes du métabolisme lipidique."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Sur le thème suivant — les fonctions lipidiques des peroxysomes — choisissez exactement les deux propositions exactes.",
    "choices": [
      {
        "content": "La β-oxydation peroxysomale prend en charge préférentiellement des acides gras à très longue chaîne.",
        "correct": true,
        "explanation": "Elle raccourcit des substrats que la mitochondrie oxyde moins efficacement au départ."
      },
      {
        "content": "La β-oxydation peroxysomale raccourcit les chaînes carbonées par cycles successifs.",
        "correct": true,
        "explanation": "Elle produit des acyl-CoA plus courts et de l’acétyl-CoA."
      },
      {
        "content": "La β-oxydation peroxysomale ne produit jamais de chaîne acylée raccourcie.",
        "correct": false,
        "explanation": "Le raccourcissement des chaînes est précisément l’un de ses résultats."
      },
      {
        "content": "L’acyl-CoA oxydase est une enzyme de la synthèse des protéines ribosomales.",
        "correct": false,
        "explanation": "C’est une enzyme de la β-oxydation peroxysomale."
      },
      {
        "content": "Le peroxysome est l’organite principal du cycle de Krebs.",
        "correct": false,
        "explanation": "Le cycle de Krebs se déroule dans la matrice mitochondriale."
      }
    ],
    "explanation": "Les peroxysomes raccourcissent notamment les acides gras à très longue chaîne, participent à la synthèse des plasmalogènes et à certaines étapes du métabolisme des acides biliaires.",
    "requiredSelectionCount": 2
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles affirmations sont correctes à propos du thème suivant : les fonctions lipidiques des peroxysomes ?",
    "choices": [
      {
        "content": "La β-oxydation peroxysomale ne produit jamais de chaîne acylée raccourcie.",
        "correct": false,
        "explanation": "Le raccourcissement des chaînes est précisément l’un de ses résultats."
      },
      {
        "content": "L’acyl-CoA oxydase est une enzyme de la synthèse des protéines ribosomales.",
        "correct": false,
        "explanation": "C’est une enzyme de la β-oxydation peroxysomale."
      },
      {
        "content": "La β-oxydation peroxysomale ne fournit pas directement de l’ATP par phosphorylation oxydative.",
        "correct": true,
        "explanation": "Le peroxysome ne possède pas de chaîne respiratoire complète couplée à une ATP synthase."
      },
      {
        "content": "Les premières étapes de la synthèse des plasmalogènes se déroulent dans les peroxysomes.",
        "correct": true,
        "explanation": "La synthèse est ensuite poursuivie dans le réticulum endoplasmique."
      },
      {
        "content": "Le peroxysome est l’organite principal du cycle de Krebs.",
        "correct": false,
        "explanation": "Le cycle de Krebs se déroule dans la matrice mitochondriale."
      }
    ],
    "explanation": "Les peroxysomes raccourcissent notamment les acides gras à très longue chaîne, participent à la synthèse des plasmalogènes et à certaines étapes du métabolisme des acides biliaires."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant le thème suivant — les autres fonctions métaboliques et leur régulation — identifiez l’unique proposition exacte.",
    "choices": [
      {
        "content": "Une hyperuricémie protège de la formation de cristaux articulaires.",
        "correct": false,
        "explanation": "Elle augmente au contraire le risque de dépôts d’urate et de goutte."
      },
      {
        "content": "La lithiase urique correspond à une démyélinisation du système nerveux central.",
        "correct": false,
        "explanation": "Il s’agit de calculs urinaires d’acide urique/urate."
      },
      {
        "content": "Les oxydases peroxysomales d’acides aminés n’utilisent jamais d’oxygène.",
        "correct": false,
        "explanation": "Par définition, les oxydases transfèrent des électrons à l’oxygène."
      },
      {
        "content": "PPARα est un enzyme de la matrice peroxysomale qui hydrolyse l’ATP.",
        "correct": false,
        "explanation": "C’est un facteur de transcription de la famille des récepteurs nucléaires."
      },
      {
        "content": "Les peroxysomes contribuent à la détoxification de certaines espèces réactives de l’oxygène.",
        "correct": true,
        "explanation": "La catalase est centrale dans le contrôle du H2O2."
      }
    ],
    "explanation": "Les peroxysomes participent à plusieurs voies métaboliques ; chez l’humain, l’absence d’urate oxydase fait de l’acide urique le produit final majeur du catabolisme des purines, et PPARα régule de nombreux gènes du métabolisme lipidique."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel fragment à deux carbones est libéré au cours de la β-oxydation peroxysomale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acétyl-CoA",
        "acetyl-CoA",
        "acétyl coenzyme A"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Chaque cycle de β-oxydation libère notamment de l’acétyl-CoA."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRPL",
    "question": "Pour le thème suivant — les fonctions lipidiques des peroxysomes — identifiez exactement les cinq affirmations exactes parmi les dix.",
    "choices": [
      {
        "content": "La synthèse des acides biliaires est entièrement lysosomale.",
        "correct": false,
        "explanation": "Certaines étapes se déroulent notamment dans le RE, la mitochondrie et le peroxysome selon les intermédiaires."
      },
      {
        "content": "Les peroxysomes participent au raccourcissement de la chaîne latérale de certains intermédiaires des acides biliaires.",
        "correct": true,
        "explanation": "Cette étape peroxysomale contribue à la maturation des acides biliaires."
      },
      {
        "content": "L’acide phytanique entre directement dans une β-oxydation classique sans étape préalable.",
        "correct": false,
        "explanation": "Son ramification impose une α-oxydation initiale."
      },
      {
        "content": "La mitochondrie et le peroxysome ont exactement le même spectre de substrats pour la β-oxydation.",
        "correct": false,
        "explanation": "Le peroxysome intervient préférentiellement dans certains substrats, dont les très longues chaînes."
      },
      {
        "content": "L’α-oxydation peroxysomale est importante pour le catabolisme de l’acide phytanique.",
        "correct": true,
        "explanation": "Le groupement méthyle en position β empêche une β-oxydation classique initiale."
      },
      {
        "content": "L’acide phytanique est un acide gras ramifié.",
        "correct": true,
        "explanation": "Sa structure nécessite une voie d’α-oxydation avant d’autres étapes cataboliques."
      },
      {
        "content": "La membrane peroxysomale contient des transporteurs permettant l’entrée de substrats lipidiques.",
        "correct": true,
        "explanation": "Les protéines ABCD jouent un rôle majeur pour plusieurs acyl-CoA."
      },
      {
        "content": "La β-oxydation peroxysomale ne produit jamais de chaîne acylée raccourcie.",
        "correct": false,
        "explanation": "Le raccourcissement des chaînes est précisément l’un de ses résultats."
      },
      {
        "content": "L’acyl-CoA oxydase est une enzyme de la synthèse des protéines ribosomales.",
        "correct": false,
        "explanation": "C’est une enzyme de la β-oxydation peroxysomale."
      },
      {
        "content": "La β-oxydation peroxysomale prend en charge préférentiellement des acides gras à très longue chaîne.",
        "correct": true,
        "explanation": "Elle raccourcit des substrats que la mitochondrie oxyde moins efficacement au départ."
      }
    ],
    "explanation": "Les peroxysomes raccourcissent notamment les acides gras à très longue chaîne, participent à la synthèse des plasmalogènes et à certaines étapes du métabolisme des acides biliaires.",
    "requiredSelectionCount": 5
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi ces propositions relatives au thème suivant, lesquelles sont correctes : les autres fonctions métaboliques et leur régulation ?",
    "choices": [
      {
        "content": "Chez l’humain, l’urate oxydase fonctionnelle est absente.",
        "correct": true,
        "explanation": "L’acide urique constitue donc le produit final majeur du catabolisme des purines."
      },
      {
        "content": "Plusieurs autres mammifères possèdent une uricase permettant de convertir l’urate en allantoïne.",
        "correct": true,
        "explanation": "Cette différence d’espèce explique que l’allantoïne ne soit pas le produit final normal chez l’humain."
      },
      {
        "content": "Les fibrates inhibent PPARα.",
        "correct": false,
        "explanation": "Ils l’activent comme agonistes."
      },
      {
        "content": "L’effet des fibrates se résume à fabriquer mécaniquement des milliers de peroxysomes chez l’humain.",
        "correct": false,
        "explanation": "Leur effet clinique repose surtout sur la régulation transcriptionnelle du métabolisme lipidique ; la prolifération massive est surtout observée chez certains rongeurs."
      },
      {
        "content": "Une hyperuricémie peut favoriser des dépôts de cristaux d’urate dans les articulations.",
        "correct": true,
        "explanation": "Ces dépôts sont responsables des crises de goutte."
      }
    ],
    "explanation": "Les peroxysomes participent à plusieurs voies métaboliques ; chez l’humain, l’absence d’urate oxydase fait de l’acide urique le produit final majeur du catabolisme des purines, et PPARα régule de nombreux gènes du métabolisme lipidique."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement le thème suivant : les fonctions lipidiques des peroxysomes ?",
    "choices": [
      {
        "content": "Les premières étapes de la synthèse des plasmalogènes se déroulent dans les peroxysomes.",
        "correct": true,
        "explanation": "La synthèse est ensuite poursuivie dans le réticulum endoplasmique."
      },
      {
        "content": "Les plasmalogènes sont particulièrement abondants dans certains tissus, notamment le système nerveux et le cœur.",
        "correct": true,
        "explanation": "Ce sont des phospholipides éther importants des membranes."
      },
      {
        "content": "Les peroxysomes participent au raccourcissement de la chaîne latérale de certains intermédiaires des acides biliaires.",
        "correct": true,
        "explanation": "Cette étape peroxysomale contribue à la maturation des acides biliaires."
      },
      {
        "content": "L’α-oxydation peroxysomale est importante pour le catabolisme de l’acide phytanique.",
        "correct": true,
        "explanation": "Le groupement méthyle en position β empêche une β-oxydation classique initiale."
      },
      {
        "content": "Les plasmalogènes sont synthétisés exclusivement dans l’appareil de Golgi.",
        "correct": false,
        "explanation": "Leurs premières étapes de synthèse sont peroxysomales puis la voie se poursuit dans le RE."
      }
    ],
    "explanation": "Les peroxysomes raccourcissent notamment les acides gras à très longue chaîne, participent à la synthèse des plasmalogènes et à certaines étapes du métabolisme des acides biliaires."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans quel organite débutent les premières étapes de synthèse des plasmalogènes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "peroxysome",
        "peroxysomes",
        "dans le peroxysome"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les premières étapes sont peroxysomales puis la synthèse se poursuit dans le RE."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Sur le thème suivant — les autres fonctions métaboliques et leur régulation — quelle affirmation est juste ?",
    "choices": [
      {
        "content": "La goutte est un synonyme strict de lithiase urique.",
        "correct": false,
        "explanation": "Ce sont deux manifestations différentes liées au métabolisme de l’urate."
      },
      {
        "content": "PPARα est un récepteur membranaire couplé aux protéines G.",
        "correct": false,
        "explanation": "C’est un récepteur nucléaire régulant la transcription."
      },
      {
        "content": "PPARα est un récepteur nucléaire impliqué dans la régulation de gènes du métabolisme lipidique.",
        "correct": true,
        "explanation": "Son activation modifie la transcription de nombreux gènes d’oxydation des acides gras."
      },
      {
        "content": "Les fibrates inhibent PPARα.",
        "correct": false,
        "explanation": "Ils l’activent comme agonistes."
      },
      {
        "content": "L’effet des fibrates se résume à fabriquer mécaniquement des milliers de peroxysomes chez l’humain.",
        "correct": false,
        "explanation": "Leur effet clinique repose surtout sur la régulation transcriptionnelle du métabolisme lipidique ; la prolifération massive est surtout observée chez certains rongeurs."
      }
    ],
    "explanation": "Les peroxysomes participent à plusieurs voies métaboliques ; chez l’humain, l’absence d’urate oxydase fait de l’acide urique le produit final majeur du catabolisme des purines, et PPARα régule de nombreux gènes du métabolisme lipidique."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour le thème suivant — les fonctions lipidiques des peroxysomes — quelles affirmations sont exactes ?",
    "choices": [
      {
        "content": "Le peroxysome oxyde systématiquement tous les acides gras jusqu’au CO2 sans intervention mitochondriale.",
        "correct": false,
        "explanation": "Il raccourcit souvent les chaînes ; l’oxydation complète implique d’autres compartiments, notamment la mitochondrie."
      },
      {
        "content": "L’acide phytanique est un acide gras ramifié.",
        "correct": true,
        "explanation": "Sa structure nécessite une voie d’α-oxydation avant d’autres étapes cataboliques."
      },
      {
        "content": "La membrane peroxysomale contient une ATP synthase responsable du rendement énergétique de la β-oxydation.",
        "correct": false,
        "explanation": "La phosphorylation oxydative est mitochondriale."
      },
      {
        "content": "La membrane peroxysomale contient des transporteurs permettant l’entrée de substrats lipidiques.",
        "correct": true,
        "explanation": "Les protéines ABCD jouent un rôle majeur pour plusieurs acyl-CoA."
      },
      {
        "content": "Les peroxysomes sont incapables de produire de l’acétyl-CoA.",
        "correct": false,
        "explanation": "La β-oxydation peroxysomale en produit."
      }
    ],
    "explanation": "Les peroxysomes raccourcissent notamment les acides gras à très longue chaîne, participent à la synthèse des plasmalogènes et à certaines étapes du métabolisme des acides biliaires."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel organite participe au raccourcissement de la chaîne latérale de certains précurseurs des acides biliaires ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "peroxysome",
        "peroxysomes"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Des étapes de β-oxydation peroxysomale participent à la maturation de certains acides biliaires."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi ces cinq propositions, retenez exactement les deux exactes pour le thème suivant : les autres fonctions métaboliques et leur régulation.",
    "choices": [
      {
        "content": "Chez l’humain, l’urate oxydase convertit normalement l’acide urique en allantoïne.",
        "correct": false,
        "explanation": "L’humain ne possède pas d’urate oxydase fonctionnelle."
      },
      {
        "content": "La prolifération peroxysomale induite par les agonistes PPARα est beaucoup plus marquée chez certains rongeurs que chez l’humain.",
        "correct": true,
        "explanation": "Les réponses d’espèce diffèrent fortement."
      },
      {
        "content": "L’adénine et la guanine sont des bases pyrimidiques.",
        "correct": false,
        "explanation": "Ce sont des bases puriques."
      },
      {
        "content": "La goutte est un synonyme strict de lithiase urique.",
        "correct": false,
        "explanation": "Ce sont deux manifestations différentes liées au métabolisme de l’urate."
      },
      {
        "content": "Certaines oxydases d’acides aminés sont localisées dans les peroxysomes.",
        "correct": true,
        "explanation": "Elles participent au métabolisme de certains acides aminés en produisant notamment du H2O2."
      }
    ],
    "explanation": "Les peroxysomes participent à plusieurs voies métaboliques ; chez l’humain, l’absence d’urate oxydase fait de l’acide urique le produit final majeur du catabolisme des purines, et PPARα régule de nombreux gènes du métabolisme lipidique.",
    "requiredSelectionCount": 2
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les fonctions lipidiques des peroxysomes, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La β-oxydation peroxysomale raccourcit les chaînes carbonées par cycles successifs.",
        "correct": true,
        "explanation": "Elle produit des acyl-CoA plus courts et de l’acétyl-CoA."
      },
      {
        "content": "Un défaut peroxysomal de β-oxydation entraîne nécessairement une diminution des acides gras à très longue chaîne.",
        "correct": false,
        "explanation": "Il peut au contraire provoquer leur accumulation."
      },
      {
        "content": "La β-oxydation peroxysomale est spécialisée exclusivement dans les acides gras à chaîne courte.",
        "correct": false,
        "explanation": "Elle intervient particulièrement pour les acides gras à très longue chaîne."
      },
      {
        "content": "L’acétyl-CoA peut être produit lors de la β-oxydation peroxysomale.",
        "correct": true,
        "explanation": "Chaque cycle libère une unité à deux carbones sous forme d’acétyl-CoA."
      },
      {
        "content": "Des produits raccourcis de la β-oxydation peroxysomale peuvent être transférés vers la mitochondrie.",
        "correct": true,
        "explanation": "La mitochondrie peut alors poursuivre leur oxydation énergétique."
      }
    ],
    "explanation": "Les peroxysomes raccourcissent notamment les acides gras à très longue chaîne, participent à la synthèse des plasmalogènes et à certaines étapes du métabolisme des acides biliaires."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur les fonctions lipidiques des peroxysomes, laquelle est exacte ?",
    "choices": [
      {
        "content": "Le peroxysome est l’organite principal du cycle de Krebs.",
        "correct": false,
        "explanation": "Le cycle de Krebs se déroule dans la matrice mitochondriale."
      },
      {
        "content": "Un défaut peroxysomal de β-oxydation entraîne nécessairement une diminution des acides gras à très longue chaîne.",
        "correct": false,
        "explanation": "Il peut au contraire provoquer leur accumulation."
      },
      {
        "content": "La β-oxydation peroxysomale est spécialisée exclusivement dans les acides gras à chaîne courte.",
        "correct": false,
        "explanation": "Elle intervient particulièrement pour les acides gras à très longue chaîne."
      },
      {
        "content": "Les premières étapes de la synthèse des plasmalogènes se déroulent dans les peroxysomes.",
        "correct": true,
        "explanation": "La synthèse est ensuite poursuivie dans le réticulum endoplasmique."
      },
      {
        "content": "Le peroxysome oxyde systématiquement tous les acides gras jusqu’au CO2 sans intervention mitochondriale.",
        "correct": false,
        "explanation": "Il raccourcit souvent les chaînes ; l’oxydation complète implique d’autres compartiments, notamment la mitochondrie."
      }
    ],
    "explanation": "Les peroxysomes raccourcissent notamment les acides gras à très longue chaîne, participent à la synthèse des plasmalogènes et à certaines étapes du métabolisme des acides biliaires."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sélectionnez les propositions exactes sur le thème suivant : les autres fonctions métaboliques et leur régulation.",
    "choices": [
      {
        "content": "L’acide urique provient du catabolisme des purines.",
        "correct": true,
        "explanation": "Les purines comprennent notamment l’adénine et la guanine."
      },
      {
        "content": "Chez l’humain, l’urate oxydase fonctionnelle est absente.",
        "correct": true,
        "explanation": "L’acide urique constitue donc le produit final majeur du catabolisme des purines."
      },
      {
        "content": "Plusieurs autres mammifères possèdent une uricase permettant de convertir l’urate en allantoïne.",
        "correct": true,
        "explanation": "Cette différence d’espèce explique que l’allantoïne ne soit pas le produit final normal chez l’humain."
      },
      {
        "content": "Une hyperuricémie peut favoriser des dépôts de cristaux d’urate dans les articulations.",
        "correct": true,
        "explanation": "Ces dépôts sont responsables des crises de goutte."
      },
      {
        "content": "Les oxydases peroxysomales d’acides aminés n’utilisent jamais d’oxygène.",
        "correct": false,
        "explanation": "Par définition, les oxydases transfèrent des électrons à l’oxygène."
      }
    ],
    "explanation": "Les peroxysomes participent à plusieurs voies métaboliques ; chez l’humain, l’absence d’urate oxydase fait de l’acide urique le produit final majeur du catabolisme des purines, et PPARα régule de nombreux gènes du métabolisme lipidique."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel acide gras ramifié est classiquement dégradé après une α-oxydation peroxysomale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide phytanique",
        "phytanate",
        "phytanic acid"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La ramification de l’acide phytanique empêche une β-oxydation classique initiale."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Pour le thème suivant — les fonctions lipidiques des peroxysomes — quelle est l’unique proposition juste ?",
    "choices": [
      {
        "content": "La β-oxydation peroxysomale ne produit jamais de chaîne acylée raccourcie.",
        "correct": false,
        "explanation": "Le raccourcissement des chaînes est précisément l’un de ses résultats."
      },
      {
        "content": "L’acide phytanique est un acide gras ramifié.",
        "correct": true,
        "explanation": "Sa structure nécessite une voie d’α-oxydation avant d’autres étapes cataboliques."
      },
      {
        "content": "L’acyl-CoA oxydase est une enzyme de la synthèse des protéines ribosomales.",
        "correct": false,
        "explanation": "C’est une enzyme de la β-oxydation peroxysomale."
      },
      {
        "content": "Le peroxysome est l’organite principal du cycle de Krebs.",
        "correct": false,
        "explanation": "Le cycle de Krebs se déroule dans la matrice mitochondriale."
      },
      {
        "content": "Un défaut peroxysomal de β-oxydation entraîne nécessairement une diminution des acides gras à très longue chaîne.",
        "correct": false,
        "explanation": "Il peut au contraire provoquer leur accumulation."
      }
    ],
    "explanation": "Les peroxysomes raccourcissent notamment les acides gras à très longue chaîne, participent à la synthèse des plasmalogènes et à certaines étapes du métabolisme des acides biliaires."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "L’humain possède-t-il une urate oxydase fonctionnelle ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Chez l’humain, l’acide urique est le produit final majeur du catabolisme des purines."
  }
];

export const SECTION_C_QUIZZES: SeedQuiz[] = [
  {
    "order": 5,
    "slug": "peroxysomes-5",
    "title": "β-oxydation peroxysomale",
    "description": "Découvrir : β-oxydation peroxysomale.",
    "stage": "DISCOVER",
    "sectionOrder": 3,
    "questionOrders": [
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54
    ]
  },
  {
    "order": 6,
    "slug": "peroxysomes-6",
    "title": "Métabolismes et coopération cellulaire",
    "description": "Approfondir : métabolismes et coopération cellulaire.",
    "stage": "PRACTICE",
    "sectionOrder": 3,
    "questionOrders": [
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66
    ]
  }
];
