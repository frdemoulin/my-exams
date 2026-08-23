import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Rôles biologiques des acides aminés et des peptides — Section A — Besoins et utilisations métaboliques des acides aminés */
export const UE14_BIOCH_CH11_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les acides aminés indispensables chez l’adulte, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L’histidine n’est indispensable que chez le nourrisson.",
        "correct": false,
        "explanation": "Elle est aussi indispensable chez l’adulte."
      },
      {
        "content": "Il n’existe que huit acides aminés indispensables chez l’adulte.",
        "correct": false,
        "explanation": "L’histidine porte le total usuel à neuf."
      },
      {
        "content": "Un acide aminé indispensable est absent des aliments.",
        "correct": false,
        "explanation": "Il doit au contraire être fourni par l’alimentation."
      },
      {
        "content": "Leucine, threonine, lysine, tryptophane, phenylalanine, valine, methionine et isoleucine font partie des acides aminés indispensables.",
        "correct": true,
        "explanation": "Ces huit acides aminés appartiennent bien au groupe des indispensables."
      },
      {
        "content": "L’histidine est également classée parmi les acides aminés indispensables chez l’adulte.",
        "correct": true,
        "explanation": "La liste de référence chez l’adulte sain comporte neuf acides aminés indispensables."
      }
    ],
    "explanation": "Chez l’adulte sain, neuf acides aminés sont indispensables ; l’histidine en fait partie."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les acides aminés indispensables chez l’adulte, laquelle est correcte ?",
    "choices": [
      {
        "content": "Leucine, threonine, lysine, tryptophane, phenylalanine, valine, methionine et isoleucine font partie des acides aminés indispensables.",
        "correct": true,
        "explanation": "Ces huit acides aminés appartiennent bien au groupe des indispensables."
      },
      {
        "content": "Il n’existe que huit acides aminés indispensables chez l’adulte.",
        "correct": false,
        "explanation": "L’histidine porte le total usuel à neuf."
      },
      {
        "content": "Un acide aminé indispensable est absent des aliments.",
        "correct": false,
        "explanation": "Il doit au contraire être fourni par l’alimentation."
      },
      {
        "content": "L’histidine n’est indispensable que chez le nourrisson.",
        "correct": false,
        "explanation": "Elle est aussi indispensable chez l’adulte."
      },
      {
        "content": "La glycine et l’alanine sont toujours indispensables chez l’adulte sain.",
        "correct": false,
        "explanation": "Elles sont généralement synthétisables."
      }
    ],
    "explanation": "Chez l’adulte sain, neuf acides aminés sont indispensables ; l’histidine en fait partie."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel acide aminé peut devenir conditionnellement indispensable lorsque les besoins dépassent les capacités de synthèse endogène ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "arginine",
        "l’arginine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Histidine est indispensable chez l’adulte ; arginine est plutôt conditionnellement indispensable selon le contexte."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l’histidine et l’arginine pendant la croissance, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un apport nutritionnel adéquat contribue à couvrir les besoins de croissance.",
        "correct": true,
        "explanation": "Les besoins en azote et en substrats augmentent pendant la croissance."
      },
      {
        "content": "La croissance supprime les besoins en acides aminés.",
        "correct": false,
        "explanation": "Elle les augmente au contraire."
      },
      {
        "content": "L’histidine devient dispensable après l’enfance.",
        "correct": false,
        "explanation": "Elle reste indispensable chez l’adulte."
      },
      {
        "content": "La notion de besoin conditionnel dépend du contexte physiologique.",
        "correct": true,
        "explanation": "Elle n’est pas une propriété absolue identique à tout âge."
      },
      {
        "content": "L’arginine peut devenir conditionnellement indispensable lorsque les besoins dépassent la synthèse endogène.",
        "correct": true,
        "explanation": "La croissance, certains stress ou pathologies peuvent augmenter le besoin relatif."
      }
    ],
    "explanation": "Histidine est indispensable chez l’adulte ; arginine est plutôt conditionnellement indispensable selon le contexte."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les réactions d’interconversion des acides aminés, laquelle est correcte ?",
    "choices": [
      {
        "content": "Ces réactions concernent uniquement les lipides.",
        "correct": false,
        "explanation": "Elles concernent le métabolisme des acides aminés."
      },
      {
        "content": "Elles rendent inutile tout apport d’acides aminés indispensables.",
        "correct": false,
        "explanation": "Les indispensables ne sont pas synthétisés en quantité suffisante."
      },
      {
        "content": "Les aminotransférases n’utilisent jamais de cofacteur.",
        "correct": false,
        "explanation": "Beaucoup utilisent le PLP."
      },
      {
        "content": "La vitamine B6 sous forme PLP est un cofacteur majeur de nombreuses aminotransférases.",
        "correct": true,
        "explanation": "Le phosphate de pyridoxal accepte temporairement le groupement aminé."
      },
      {
        "content": "Une transamination transforme toujours un acide aminé en acide gras.",
        "correct": false,
        "explanation": "Elle échange un groupement aminé."
      }
    ],
    "explanation": "Les transaminations sont des réactions centrales d’interconversion des acides aminés, généralement PLP-dépendantes."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant les réactions d’interconversion des acides aminés, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Une transamination transforme toujours un acide aminé en acide gras.",
        "correct": false,
        "explanation": "Elle échange un groupement aminé."
      },
      {
        "content": "Les aminotransférases n’utilisent jamais de cofacteur.",
        "correct": false,
        "explanation": "Beaucoup utilisent le PLP."
      },
      {
        "content": "La vitamine B6 sous forme PLP est un cofacteur majeur de nombreuses aminotransférases.",
        "correct": true,
        "explanation": "Le phosphate de pyridoxal accepte temporairement le groupement aminé."
      },
      {
        "content": "Elles rendent inutile tout apport d’acides aminés indispensables.",
        "correct": false,
        "explanation": "Les indispensables ne sont pas synthétisés en quantité suffisante."
      },
      {
        "content": "Les transaminations transfèrent un groupement aminé entre un acide aminé et un alpha-cétoacide.",
        "correct": true,
        "explanation": "Les aminotransférases catalysent ces échanges."
      }
    ],
    "explanation": "Les transaminations sont des réactions centrales d’interconversion des acides aminés, généralement PLP-dépendantes.",
    "requiredSelectionCount": 2
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le rôle structural des acides aminés, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La nature des résidus n’influence jamais la fonction.",
        "correct": false,
        "explanation": "Elle est déterminante."
      },
      {
        "content": "La sérine peut entrer dans la tête polaire de la phosphatidylsérine.",
        "correct": true,
        "explanation": "Un acide aminé peut contribuer à d’autres biomolécules que les protéines."
      },
      {
        "content": "Ils sont les constituants de base des peptides et protéines.",
        "correct": true,
        "explanation": "Les résidus sont reliés par des liaisons peptidiques."
      },
      {
        "content": "La séquence des résidus influence le repliement protéique.",
        "correct": true,
        "explanation": "Structure et fonction dépendent de la séquence."
      },
      {
        "content": "Les acides aminés servent aussi de précurseurs métaboliques.",
        "correct": true,
        "explanation": "Leur rôle dépasse la seule fonction structurale."
      }
    ],
    "explanation": "Les acides aminés sont à la fois briques des protéines et précurseurs de nombreuses molécules."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel acide aminé entre dans la tête polaire de la phosphatidylsérine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sérine",
        "serine",
        "la sérine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les acides aminés sont à la fois briques des protéines et précurseurs de nombreuses molécules."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant le cycle de l’urée ?",
    "choices": [
      {
        "content": "L’ornithine et la citrulline sont des acides gras.",
        "correct": false,
        "explanation": "Ce sont des acides aminés non protéinogènes du cycle."
      },
      {
        "content": "Le cycle de l’urée transforme l’urée en ammoniac pour le stocker.",
        "correct": false,
        "explanation": "Le sens physiologique majeur est la détoxification de l’ammoniac."
      },
      {
        "content": "L’uréogenèse n’a aucun lien avec le catabolisme azoté.",
        "correct": false,
        "explanation": "Elle élimine l’azote excédentaire."
      },
      {
        "content": "Il se déroule exclusivement dans les globules rouges.",
        "correct": false,
        "explanation": "Le foie est le site principal."
      },
      {
        "content": "Il permet de convertir une partie de l’azote ammoniacal en urée moins toxique.",
        "correct": true,
        "explanation": "L’urée est ensuite éliminée principalement par le rein."
      }
    ],
    "explanation": "Le cycle hépatique de l’urée détoxifie l’azote ammoniacal et implique ornithine, citrulline et arginine."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le cycle de l’urée, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L’uréogenèse n’a aucun lien avec le catabolisme azoté.",
        "correct": false,
        "explanation": "Elle élimine l’azote excédentaire."
      },
      {
        "content": "Il permet de convertir une partie de l’azote ammoniacal en urée moins toxique.",
        "correct": true,
        "explanation": "L’urée est ensuite éliminée principalement par le rein."
      },
      {
        "content": "Le cycle de l’urée transforme l’urée en ammoniac pour le stocker.",
        "correct": false,
        "explanation": "Le sens physiologique majeur est la détoxification de l’ammoniac."
      },
      {
        "content": "Le cycle participe à la détoxification de l’ammoniaque produit notamment lors du catabolisme des acides aminés.",
        "correct": true,
        "explanation": "L’hyperammoniémie est neurotoxique."
      },
      {
        "content": "Il se déroule exclusivement dans les globules rouges.",
        "correct": false,
        "explanation": "Le foie est le site principal."
      }
    ],
    "explanation": "Le cycle hépatique de l’urée détoxifie l’azote ammoniacal et implique ornithine, citrulline et arginine."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la méthionine comme donneur de méthyle, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La méthionine est convertie en S-adénosylméthionine, ou SAM.",
        "correct": true,
        "explanation": "SAM est un donneur universel de groupements méthyle."
      },
      {
        "content": "La méthionine donne directement un phosphate et non un méthyle.",
        "correct": false,
        "explanation": "Son dérivé SAM donne des méthyles."
      },
      {
        "content": "La méthionine est un acide aminé indispensable.",
        "correct": true,
        "explanation": "Elle doit être fournie par l’alimentation."
      },
      {
        "content": "Après don du méthyle, le cycle conduit notamment à l’homocystéine.",
        "correct": true,
        "explanation": "La méthionine et l’homocystéine appartiennent au même cycle métabolique."
      },
      {
        "content": "SAM est un monosaccharide.",
        "correct": false,
        "explanation": "C’est un dérivé de la méthionine et de l’adénosine."
      }
    ],
    "explanation": "La méthionine fournit des méthyles principalement via la S-adénosylméthionine, puis le cycle mène à l’homocystéine."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel dérivé activé de la méthionine est un grand donneur cellulaire de groupements méthyle ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "S-adénosylméthionine",
        "SAM",
        "S-adenosylmethionine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La méthionine fournit des méthyles principalement via la S-adénosylméthionine, puis le cycle mène à l’homocystéine."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant la transamination aspartate–2-oxoglutarate ?",
    "choices": [
      {
        "content": "L’aspartate devient acétyl-CoA sans autre étape.",
        "correct": false,
        "explanation": "Il devient oxaloacétate dans cette transamination."
      },
      {
        "content": "Aucune aminotransférase n’intervient.",
        "correct": false,
        "explanation": "L’AST est l’enzyme correspondante."
      },
      {
        "content": "L’aspartate peut transférer son groupement aminé au 2-oxoglutarate.",
        "correct": true,
        "explanation": "L’aspartate aminotransférase catalyse cette réaction."
      },
      {
        "content": "La réaction produit directement glucose et urée.",
        "correct": false,
        "explanation": "Elle produit oxaloacétate et glutamate."
      },
      {
        "content": "Le 2-oxoglutarate donne du lactate.",
        "correct": false,
        "explanation": "Il reçoit l’azote et devient glutamate."
      }
    ],
    "explanation": "AST transfère l’azote de l’aspartate au 2-oxoglutarate : aspartate + 2-oxoglutarate ⇌ oxaloacétate + glutamate."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la transamination aspartate–2-oxoglutarate, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L’aspartate peut transférer son groupement aminé au 2-oxoglutarate.",
        "correct": true,
        "explanation": "L’aspartate aminotransférase catalyse cette réaction."
      },
      {
        "content": "La réaction est réversible.",
        "correct": true,
        "explanation": "Les aminotransférases catalysent des équilibres proches."
      },
      {
        "content": "Les produits sont l’oxaloacétate et le glutamate.",
        "correct": true,
        "explanation": "Le squelette de l’aspartate devient oxaloacétate."
      },
      {
        "content": "La réaction produit directement glucose et urée.",
        "correct": false,
        "explanation": "Elle produit oxaloacétate et glutamate."
      },
      {
        "content": "Le phosphate de pyridoxal participe au mécanisme enzymatique.",
        "correct": true,
        "explanation": "Le PLP transporte transitoirement le groupement aminé."
      }
    ],
    "explanation": "AST transfère l’azote de l’aspartate au 2-oxoglutarate : aspartate + 2-oxoglutarate ⇌ oxaloacétate + glutamate."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant le devenir des acides aminés en excès, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Les squelettes carbonés ne peuvent jamais fournir d’énergie.",
        "correct": false,
        "explanation": "Ils peuvent être oxydés."
      },
      {
        "content": "L’azote en excès est converti principalement en cholestérol.",
        "correct": false,
        "explanation": "Il est surtout éliminé sous forme d’urée."
      },
      {
        "content": "Les protéines de réserve stockent systématiquement tout excès alimentaire chez l’adulte.",
        "correct": false,
        "explanation": "Il n’existe pas de stockage protéique dédié à cet usage."
      },
      {
        "content": "Leur azote est éliminé après transfert et déamination, principalement sous forme d’urée.",
        "correct": true,
        "explanation": "Le foie joue un rôle majeur dans cette élimination."
      },
      {
        "content": "Le squelette carboné peut être oxydé ou converti en intermédiaires métaboliques.",
        "correct": true,
        "explanation": "Il peut rejoindre gluconéogenèse ou cétogenèse selon l’acide aminé."
      }
    ],
    "explanation": "Les acides aminés en excès sont catabolisés : azote vers l’urée, squelette carboné vers les voies énergétiques.",
    "requiredSelectionCount": 2
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le devenir des acides aminés en excès ?",
    "choices": [
      {
        "content": "Le renouvellement des protéines corporelles constitue un important flux d’acides aminés.",
        "correct": true,
        "explanation": "Le pool libre est dynamique."
      },
      {
        "content": "L’azote en excès est converti principalement en cholestérol.",
        "correct": false,
        "explanation": "Il est surtout éliminé sous forme d’urée."
      },
      {
        "content": "Les protéines de réserve stockent systématiquement tout excès alimentaire chez l’adulte.",
        "correct": false,
        "explanation": "Il n’existe pas de stockage protéique dédié à cet usage."
      },
      {
        "content": "Les squelettes carbonés ne peuvent jamais fournir d’énergie.",
        "correct": false,
        "explanation": "Ils peuvent être oxydés."
      },
      {
        "content": "Leur azote est éliminé après transfert et déamination, principalement sous forme d’urée.",
        "correct": true,
        "explanation": "Le foie joue un rôle majeur dans cette élimination."
      }
    ],
    "explanation": "Les acides aminés en excès sont catabolisés : azote vers l’urée, squelette carboné vers les voies énergétiques."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quels sont les deux acides aminés standards exclusivement cétogènes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "leucine et lysine",
        "lysine et leucine",
        "Leu et Lys"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La plupart des acides aminés sont glucogéniques ; leucine et lysine sont exclusivement cétogènes."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les acides aminés glucoformateurs, laquelle est correcte ?",
    "choices": [
      {
        "content": "Glucogénique signifie que l’acide aminé contient du glucose.",
        "correct": false,
        "explanation": "Le terme décrit un devenir métabolique."
      },
      {
        "content": "Le caractère glucogénique concerne le squelette carboné après élimination de l’azote.",
        "correct": true,
        "explanation": "Il ne signifie pas qu’un acide aminé est du glucose."
      },
      {
        "content": "Aucun intermédiaire du cycle de Krebs ne peut contribuer à la néoglucogenèse.",
        "correct": false,
        "explanation": "Plusieurs y contribuent via oxaloacétate."
      },
      {
        "content": "Leucine et lysine sont exclusivement glucogéniques.",
        "correct": false,
        "explanation": "Elles sont exclusivement cétogènes."
      },
      {
        "content": "Tous les acides aminés sont exclusivement glucogéniques.",
        "correct": false,
        "explanation": "Certains sont aussi ou exclusivement cétogènes."
      }
    ],
    "explanation": "La plupart des acides aminés sont glucogéniques ; leucine et lysine sont exclusivement cétogènes."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel métabolite à deux carbones est un produit fréquent du catabolisme des acides aminés cétogènes ?",
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
    "explanation": "Les acides aminés cétogènes fournissent acétyl-CoA/acétoacétate ; leucine et lysine sont exclusivement cétogènes."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un acide aminé peut être à la fois glucogénique et cétogénique.",
        "correct": true,
        "explanation": "Plusieurs acides aminés ont des produits de dégradation mixtes."
      },
      {
        "content": "La leucine et la lysine sont exclusivement cétogènes.",
        "correct": true,
        "explanation": "Elles ne fournissent pas de carbone net pour la néoglucogenèse."
      },
      {
        "content": "Leucine et lysine sont exclusivement glucogéniques.",
        "correct": false,
        "explanation": "Elles sont exclusivement cétogènes."
      },
      {
        "content": "Certains acides aminés sont à la fois cétogènes et glucogéniques.",
        "correct": true,
        "explanation": "Leur catabolisme produit plusieurs types de squelettes."
      },
      {
        "content": "Le caractère cétogène dépend uniquement du nombre d’atomes d’azote.",
        "correct": false,
        "explanation": "Il dépend du devenir du squelette carboné."
      },
      {
        "content": "Glucogénique signifie que l’acide aminé contient du glucose.",
        "correct": false,
        "explanation": "Le terme décrit un devenir métabolique."
      },
      {
        "content": "Cétogène signifie que l’acide aminé produit directement du glucose.",
        "correct": false,
        "explanation": "Le terme renvoie aux précurseurs de corps cétoniques."
      },
      {
        "content": "Tous les acides aminés sont exclusivement cétogènes.",
        "correct": false,
        "explanation": "Les devenirs sont variés."
      },
      {
        "content": "La plupart des acides aminés standards possèdent au moins un devenir glucogénique.",
        "correct": true,
        "explanation": "Leucine et lysine sont les deux exceptions exclusivement cétogènes."
      },
      {
        "content": "Ils donnent des précurseurs pouvant alimenter la néoglucogenèse.",
        "correct": true,
        "explanation": "Pyruvate et plusieurs intermédiaires du cycle de Krebs peuvent mener au glucose."
      }
    ],
    "explanation": "Les acides aminés cétogènes fournissent acétyl-CoA/acétoacétate ; leucine et lysine sont exclusivement cétogènes. La plupart des acides aminés sont glucogéniques ; leucine et lysine sont exclusivement cétogènes."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant la place de l’alimentation dans les besoins en acides aminés, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Les besoins sont identiques chez un adulte et un enfant en croissance.",
        "correct": false,
        "explanation": "Ils varient avec le contexte."
      },
      {
        "content": "Les besoins varient avec l’âge, la croissance et l’état physiologique.",
        "correct": true,
        "explanation": "Il n’existe pas un besoin fixe universel."
      },
      {
        "content": "Tous les aliments protéiques ont exactement le même profil d’acides aminés.",
        "correct": false,
        "explanation": "Les profils diffèrent."
      },
      {
        "content": "Les protéines corporelles sont continuellement synthétisées et dégradées.",
        "correct": true,
        "explanation": "Le pool d’acides aminés est alimenté par le régime et le turnover."
      },
      {
        "content": "La qualité d’une protéine alimentaire dépend notamment de son profil en acides aminés indispensables.",
        "correct": true,
        "explanation": "Un acide aminé limitant peut réduire l’utilisation des autres."
      }
    ],
    "explanation": "L’alimentation doit couvrir les besoins en acides aminés indispensables et en azote total."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type d’acides aminés doit obligatoirement être fourni en quantité suffisante par l’alimentation ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acides aminés indispensables",
        "acides aminés essentiels",
        "AA indispensables"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’alimentation doit couvrir les besoins en acides aminés indispensables et en azote total."
  }
];
