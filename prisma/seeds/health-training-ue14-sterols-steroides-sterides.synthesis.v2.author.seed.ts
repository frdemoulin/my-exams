import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Stérols, stéroïdes et stérides — Synthèse — Stérols, stéroïdes et stérides */
export const UE14_BIOCH_CH8_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le noyau stéroïdien de base, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le squelette parent comporte 27 carbones.",
        "correct": false,
        "explanation": "Le cholestérol en possède 27 ; le noyau parent est C17."
      },
      {
        "content": "Les cycles A, B et C sont à six chaînons et le cycle D à cinq chaînons.",
        "correct": true,
        "explanation": "Cette architecture est un repère majeur."
      },
      {
        "content": "Le cycle D est un cycle à six chaînons.",
        "correct": false,
        "explanation": "Le cycle D est à cinq chaînons."
      },
      {
        "content": "Tous les stéroïdes ont exactement les mêmes substituants.",
        "correct": false,
        "explanation": "Les substituants différencient les familles."
      },
      {
        "content": "Il comporte quatre cycles fusionnés.",
        "correct": true,
        "explanation": "Le squelette stéroïdien est tétracyclique."
      }
    ],
    "explanation": "Le squelette stéroïdien de base est tétracyclique : trois cycles à six chaînons et un cycle à cinq chaînons."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle fonction caractéristique porte le cholestérol en C3 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "hydroxyle",
        "fonction alcool",
        "OH",
        "groupement hydroxyle"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les stérols associent un squelette stéroïdien à une fonction alcool, classiquement en C3."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant les stérides ou esters de stérol ?",
    "choices": [
      {
        "content": "Ils résultent de l'estérification de la fonction alcool d'un stérol par un acide gras.",
        "correct": true,
        "explanation": "Le cholestérol estérifié en est l'exemple majeur."
      },
      {
        "content": "Ils sont des glycosphingolipides.",
        "correct": false,
        "explanation": "Ils appartiennent à une autre famille."
      },
      {
        "content": "Un stéride contient obligatoirement du glycérol.",
        "correct": false,
        "explanation": "Ce n'est pas requis."
      },
      {
        "content": "L'estérification augmente la polarité du cholestérol.",
        "correct": false,
        "explanation": "Elle masque son OH et accroît son hydrophobicité."
      },
      {
        "content": "La liaison formée est une liaison peptidique.",
        "correct": false,
        "explanation": "C'est une liaison ester."
      }
    ],
    "explanation": "Un stéride est un ester de stérol, particulièrement hydrophobe et adapté au stockage/transport dans un cœur lipidique."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le squalène et la biosynthèse stéroïdienne, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il est un produit final de la glycolyse.",
        "correct": false,
        "explanation": "Il appartient à la voie des isoprénoïdes."
      },
      {
        "content": "Le squalène est un hydrocarbure isoprénique à 30 carbones.",
        "correct": true,
        "explanation": "Il appartient à la voie de biosynthèse du cholestérol."
      },
      {
        "content": "Le squalène est un acide aminé à 30 carbones.",
        "correct": false,
        "explanation": "C'est un hydrocarbure isoprénique."
      },
      {
        "content": "La voie du mévalonate fournit les unités isopréniques conduisant au squalène.",
        "correct": true,
        "explanation": "Elle relie acétyl-CoA et biosynthèse des stérols."
      },
      {
        "content": "Le cholestérol n'est donc pas synthétisé directement à partir d'un acide gras préformé.",
        "correct": true,
        "explanation": "Sa biosynthèse passe par des unités isopréniques."
      }
    ],
    "explanation": "Le squalène C30 est un précurseur isoprénique acyclique de la biosynthèse du cholestérol et des stéroïdes."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant la distinction stérol, stéride et stéroïde, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Le cholestérol libre ne possède aucun groupement polaire.",
        "correct": false,
        "explanation": "Son OH en C3 constitue un petit pôle hydrophile."
      },
      {
        "content": "Un stéride est un ester de stérol.",
        "correct": true,
        "explanation": "Il résulte d'une transformation de la fonction alcool."
      },
      {
        "content": "Un stéride est nécessairement une hormone.",
        "correct": false,
        "explanation": "C'est un ester de stérol."
      },
      {
        "content": "Le cholestérol libre est un stérol.",
        "correct": true,
        "explanation": "Il possède un OH libre en C3."
      },
      {
        "content": "Stérol et triacylglycérol sont synonymes.",
        "correct": false,
        "explanation": "Ce sont des classes distinctes."
      }
    ],
    "explanation": "Stéroïde, stérol et stéride ne sont pas synonymes : le cholestérol libre est un stérol et son ester est un stéride.",
    "requiredSelectionCount": 2
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la numérotation du squelette stéroïdien ?",
    "choices": [
      {
        "content": "La numérotation des carbones suit une convention fixe propre au squelette stéroïdien.",
        "correct": true,
        "explanation": "Elle permet de localiser substituants et doubles liaisons."
      },
      {
        "content": "Le groupement OH du cholestérol est en C17.",
        "correct": false,
        "explanation": "Il est en C3."
      },
      {
        "content": "C3 est la position de l'OH du cholestérol.",
        "correct": true,
        "explanation": "C'est un repère très utilisé."
      },
      {
        "content": "C17 porte la chaîne latérale du cholestérol.",
        "correct": true,
        "explanation": "Cette chaîne contribue au total de 27 carbones."
      },
      {
        "content": "La double liaison du cholestérol se situe entre C5 et C6.",
        "correct": true,
        "explanation": "Le cholestérol est un cholest-5-én-3β-ol."
      }
    ],
    "explanation": "La numérotation du squelette stéroïdien permet de repérer l'OH C3, la double liaison C5-C6 et la chaîne latérale C17 du cholestérol."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de carbones comporte le cholestérol ?",
    "answer": {
      "type": "number",
      "value": 27,
      "tolerance": 0
    },
    "explanation": "Le cholestérol est un stérol C27 avec OH C3, double liaison C5-C6 et chaîne latérale C17."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant le cholestérol dans les membranes, laquelle est correcte ?",
    "choices": [
      {
        "content": "Il constitue une protéine transmembranaire.",
        "correct": false,
        "explanation": "C'est un lipide."
      },
      {
        "content": "Il rend la membrane toujours plus fluide quelle que soit la température.",
        "correct": false,
        "explanation": "Son effet est tampon et dépend du contexte."
      },
      {
        "content": "Le cholestérol libre s'insère dans les membranes cellulaires animales.",
        "correct": true,
        "explanation": "Son OH se place près des têtes polaires et son squelette dans la zone hydrophobe."
      },
      {
        "content": "Le cholestérol estérifié est la forme principale insérée dans la bicouche.",
        "correct": false,
        "explanation": "La forme libre avec OH est la forme membranaire adaptée."
      },
      {
        "content": "Le cholestérol est absent des membranes animales.",
        "correct": false,
        "explanation": "Il en est un constituant majeur."
      }
    ],
    "explanation": "Le cholestérol libre est amphiphile et membranaire ; l'ester de cholestérol est fortement hydrophobe et se stocke dans des phases lipidiques."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le transport du cholestérol par les lipoprotéines ?",
    "choices": [
      {
        "content": "LDL et HDL désignent des classes de particules, pas deux formes chimiques de cholestérol.",
        "correct": true,
        "explanation": "Une même molécule de cholestérol peut être transportée par différentes lipoprotéines."
      },
      {
        "content": "Les esters de cholestérol se trouvent surtout dans le cœur hydrophobe des lipoprotéines.",
        "correct": true,
        "explanation": "Ils n'ont plus d'OH libre."
      },
      {
        "content": "LDL est une molécule de cholestérol modifiée chimiquement.",
        "correct": false,
        "explanation": "LDL est une particule lipoprotéique."
      },
      {
        "content": "Les esters de cholestérol sont exposés à l'eau à la surface de la particule.",
        "correct": false,
        "explanation": "Ils se placent dans le cœur hydrophobe."
      },
      {
        "content": "HDL signifie que le cholestérol est devenu hydrosoluble par lui-même.",
        "correct": false,
        "explanation": "Le transport repose sur une particule amphiphile."
      }
    ],
    "explanation": "Les lipoprotéines transportent cholestérol libre en surface et esters de cholestérol dans leur cœur hydrophobe."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Ils sont synthétisés à partir du cholestérol dans le foie.",
        "correct": true,
        "explanation": "Le cholestérol est leur précurseur."
      },
      {
        "content": "La prégnénolone est un précurseur commun à plusieurs branches hormonales.",
        "correct": true,
        "explanation": "Elle mène notamment aux glucocorticoïdes, minéralocorticoïdes et hormones sexuelles."
      },
      {
        "content": "Ils empêchent toute absorption lipidique.",
        "correct": false,
        "explanation": "Ils la facilitent."
      },
      {
        "content": "Elles sont toutes stockées en grande quantité dans des vésicules avant sécrétion.",
        "correct": false,
        "explanation": "Elles sont en général synthétisées à la demande."
      },
      {
        "content": "Ils possèdent un squelette C24 après raccourcissement de la chaîne latérale.",
        "correct": true,
        "explanation": "Le noyau cholane sert de repère structural."
      },
      {
        "content": "Ils sont des protéines digestives.",
        "correct": false,
        "explanation": "Ce sont des dérivés stéroïdiens."
      },
      {
        "content": "Ils sont sécrétés dans la bile puis majoritairement réabsorbés dans la circulation entérohépatique.",
        "correct": true,
        "explanation": "Le recyclage limite la synthèse de novo nécessaire."
      },
      {
        "content": "Leur caractère amphiphile favorise l'émulsification et la digestion des lipides.",
        "correct": true,
        "explanation": "Ils contribuent à la formation de micelles mixtes intestinales."
      },
      {
        "content": "Les hormones stéroïdiennes sont synthétisées à partir du glycogène sans cholestérol.",
        "correct": false,
        "explanation": "Le cholestérol est leur précurseur."
      },
      {
        "content": "Ils sont synthétisés uniquement par le pancréas.",
        "correct": false,
        "explanation": "La synthèse principale est hépatique."
      }
    ],
    "explanation": "Les acides biliaires sont des dérivés C24 du cholestérol synthétisés par le foie et essentiels à la digestion/absorption des lipides. Le cholestérol est converti en prégnénolone puis en diverses hormones stéroïdiennes dans les tissus stéroïdogènes."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le noyau stéroïdien de base, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il comporte trois cycles seulement.",
        "correct": false,
        "explanation": "Le squelette stéroïdien en comporte quatre."
      },
      {
        "content": "Le squelette carboné de référence comporte 17 carbones.",
        "correct": true,
        "explanation": "Le gonane est le parent C17 des stéroïdes."
      },
      {
        "content": "Tous les stéroïdes ont exactement les mêmes substituants.",
        "correct": false,
        "explanation": "Les substituants différencient les familles."
      },
      {
        "content": "Le squelette parent comporte 27 carbones.",
        "correct": false,
        "explanation": "Le cholestérol en possède 27 ; le noyau parent est C17."
      },
      {
        "content": "Il comporte quatre cycles fusionnés.",
        "correct": true,
        "explanation": "Le squelette stéroïdien est tétracyclique."
      }
    ],
    "explanation": "Le squelette stéroïdien de base est tétracyclique : trois cycles à six chaînons et un cycle à cinq chaînons."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle fonction caractéristique porte le cholestérol en C3 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "hydroxyle",
        "fonction alcool",
        "OH",
        "groupement hydroxyle"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les stérols associent un squelette stéroïdien à une fonction alcool, classiquement en C3."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant les stérides ou esters de stérol, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "La liaison formée est une liaison ester.",
        "correct": true,
        "explanation": "Elle unit l'alcool du stérol au carboxyle de l'acide gras."
      },
      {
        "content": "Ils résultent de l'estérification de la fonction alcool d'un stérol par un acide gras.",
        "correct": true,
        "explanation": "Le cholestérol estérifié en est l'exemple majeur."
      },
      {
        "content": "Un stéride contient obligatoirement du glycérol.",
        "correct": false,
        "explanation": "Ce n'est pas requis."
      },
      {
        "content": "La liaison formée est une liaison peptidique.",
        "correct": false,
        "explanation": "C'est une liaison ester."
      },
      {
        "content": "Ils sont des glycosphingolipides.",
        "correct": false,
        "explanation": "Ils appartiennent à une autre famille."
      }
    ],
    "explanation": "Un stéride est un ester de stérol, particulièrement hydrophobe et adapté au stockage/transport dans un cœur lipidique.",
    "requiredSelectionCount": 2
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le squalène et la biosynthèse stéroïdienne, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La voie du mévalonate fournit les unités isopréniques conduisant au squalène.",
        "correct": true,
        "explanation": "Elle relie acétyl-CoA et biosynthèse des stérols."
      },
      {
        "content": "Il est un produit final de la glycolyse.",
        "correct": false,
        "explanation": "Il appartient à la voie des isoprénoïdes."
      },
      {
        "content": "Il précède la formation du squelette stéroïdien au cours de la biosynthèse.",
        "correct": true,
        "explanation": "Sa cyclisation intervient après conversion en époxyde."
      },
      {
        "content": "Le squalène est un acide aminé à 30 carbones.",
        "correct": false,
        "explanation": "C'est un hydrocarbure isoprénique."
      },
      {
        "content": "Le squalène est un hydrocarbure isoprénique à 30 carbones.",
        "correct": true,
        "explanation": "Il appartient à la voie de biosynthèse du cholestérol."
      }
    ],
    "explanation": "Le squalène C30 est un précurseur isoprénique acyclique de la biosynthèse du cholestérol et des stéroïdes."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel corticostéroïde est le principal minéralocorticoïde physiologique humain ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "aldostérone",
        "l'aldostérone"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'aldostérone est le principal minéralocorticoïde chez l'être humain."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la numérotation du squelette stéroïdien ?",
    "choices": [
      {
        "content": "C17 porte la chaîne latérale du cholestérol.",
        "correct": true,
        "explanation": "Cette chaîne contribue au total de 27 carbones."
      },
      {
        "content": "La numérotation des carbones suit une convention fixe propre au squelette stéroïdien.",
        "correct": true,
        "explanation": "Elle permet de localiser substituants et doubles liaisons."
      },
      {
        "content": "La double liaison du cholestérol se situe entre C1 et C2.",
        "correct": false,
        "explanation": "Elle est C5-C6."
      },
      {
        "content": "C3 est la position de l'OH du cholestérol.",
        "correct": true,
        "explanation": "C'est un repère très utilisé."
      },
      {
        "content": "La double liaison du cholestérol se situe entre C5 et C6.",
        "correct": true,
        "explanation": "Le cholestérol est un cholest-5-én-3β-ol."
      }
    ],
    "explanation": "La numérotation du squelette stéroïdien permet de repérer l'OH C3, la double liaison C5-C6 et la chaîne latérale C17 du cholestérol."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Combien de carbones comporte le cholestérol ?",
    "answer": {
      "type": "number",
      "value": 27,
      "tolerance": 0
    },
    "explanation": "Le cholestérol est un stérol C27 avec OH C3, double liaison C5-C6 et chaîne latérale C17."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Il participe à l'organisation de domaines membranaires riches en sphingolipides.",
        "correct": true,
        "explanation": "Cette association est importante dans certaines microstructures membranaires."
      },
      {
        "content": "Le cholestérol est absent des membranes animales.",
        "correct": false,
        "explanation": "Il en est un constituant majeur."
      },
      {
        "content": "Il module la fluidité membranaire.",
        "correct": true,
        "explanation": "Son effet dépend notamment de la température et de la composition lipidique."
      },
      {
        "content": "Il diminue la perméabilité de la bicouche à certaines petites molécules polaires.",
        "correct": true,
        "explanation": "Son noyau rigide contribue à ordonner les chaînes lipidiques."
      },
      {
        "content": "Elle est un triacylglycérol.",
        "correct": false,
        "explanation": "C'est un sécostéroïde."
      },
      {
        "content": "Elle n'a aucun lien avec le cholestérol.",
        "correct": false,
        "explanation": "Son précurseur cutané est un dérivé du cholestérol."
      },
      {
        "content": "La vitamine D est un sécostéroïde.",
        "correct": true,
        "explanation": "Un cycle du squelette stéroïdien est ouvert."
      },
      {
        "content": "Elle contribue à la minéralisation osseuse en assurant une disponibilité adéquate en calcium et phosphate.",
        "correct": true,
        "explanation": "Son effet dépend de l'état physiologique."
      },
      {
        "content": "Il constitue une protéine transmembranaire.",
        "correct": false,
        "explanation": "C'est un lipide."
      },
      {
        "content": "Le cholestérol estérifié est la forme principale insérée dans la bicouche.",
        "correct": false,
        "explanation": "La forme libre avec OH est la forme membranaire adaptée."
      }
    ],
    "explanation": "Le cholestérol libre est amphiphile et membranaire ; l'ester de cholestérol est fortement hydrophobe et se stocke dans des phases lipidiques. La vitamine D3 dérive du 7-déhydrocholestérol ; sa forme active régule surtout calcium et phosphate."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel stéroïde C19 constitue l'androgène majeur produit par les cellules de Leydig ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "testostérone",
        "testosterone",
        "la testostérone"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La testostérone est l'androgène majeur sécrété par les cellules de Leydig."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel organe synthétise les acides biliaires à partir du cholestérol ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "foie",
        "le foie",
        "hépatocyte",
        "hépatocytes"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les acides biliaires sont des dérivés C24 du cholestérol synthétisés par le foie et essentiels à la digestion/absorption des lipides."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant la vitamine D comme dérivé stéroïdien, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "La vitamine D favorise spécifiquement l'absorption du potassium à la place du phosphate.",
        "correct": false,
        "explanation": "Le couple majeur est calcium-phosphate."
      },
      {
        "content": "Elle contribue à la minéralisation osseuse en assurant une disponibilité adéquate en calcium et phosphate.",
        "correct": true,
        "explanation": "Son effet dépend de l'état physiologique."
      },
      {
        "content": "Elle est un triacylglycérol.",
        "correct": false,
        "explanation": "C'est un sécostéroïde."
      },
      {
        "content": "Après hydroxylations hépatique puis rénale, sa forme active participe à l'homéostasie phosphocalcique.",
        "correct": true,
        "explanation": "Le calcitriol augmente notamment l'absorption intestinale du calcium et du phosphate."
      },
      {
        "content": "Elle est synthétisée à partir du glycogène cutané.",
        "correct": false,
        "explanation": "Le précurseur est le 7-déhydrocholestérol."
      }
    ],
    "explanation": "La vitamine D3 dérive du 7-déhydrocholestérol ; sa forme active régule surtout calcium et phosphate.",
    "requiredSelectionCount": 2
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant l'estérification du cholestérol ?",
    "choices": [
      {
        "content": "Dans le plasma, LCAT contribue à l'estérification du cholestérol associé aux HDL.",
        "correct": true,
        "explanation": "LCAT utilise une phosphatidylcholine comme donneur d'acyle."
      },
      {
        "content": "L'estérification porte sur le groupement OH de C3.",
        "correct": true,
        "explanation": "Un acide gras forme alors une liaison ester."
      },
      {
        "content": "Dans les cellules, ACAT/SOAT peut estérifier le cholestérol.",
        "correct": true,
        "explanation": "Cette réaction favorise son stockage intracellulaire."
      },
      {
        "content": "L'ester de cholestérol est plus amphiphile que la forme libre.",
        "correct": false,
        "explanation": "Il est plus hydrophobe."
      },
      {
        "content": "ACAT transforme le cholestérol en acide biliaire en une étape.",
        "correct": false,
        "explanation": "Ce n'est pas sa fonction."
      }
    ],
    "explanation": "L'estérification du OH C3 transforme le cholestérol libre amphiphile en ester de cholestérol fortement hydrophobe."
  }
];
