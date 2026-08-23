import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Glycérides et glycérophospholipides — Section D — Membranes, phospholipases et signalisation */
export const UE14_BIOCH_CH6_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'organisation des glycérophospholipides en bicouche, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une bicouche biologique est parfaitement rigide.",
        "correct": false,
        "explanation": "Elle est dynamique et fluide."
      },
      {
        "content": "Les liposomes sont de simples protéines globulaires.",
        "correct": false,
        "explanation": "Ce sont des vésicules lipidiques."
      },
      {
        "content": "Deux chaînes hydrophobes favorisent une géométrie compatible avec les bicouches.",
        "correct": true,
        "explanation": "Les phospholipides diacylés forment spontanément des structures lamellaires."
      },
      {
        "content": "Les glycérophospholipides diacylés forment obligatoirement uniquement des micelles sphériques simples.",
        "correct": false,
        "explanation": "Leur géométrie favorise surtout les bicouches."
      },
      {
        "content": "Les têtes polaires se tournent vers les milieux aqueux.",
        "correct": true,
        "explanation": "Les chaînes hydrophobes s'associent au cœur de la bicouche."
      }
    ],
    "explanation": "Les glycérophospholipides diacylés sont adaptés aux bicouches ; les liposomes sont des vésicules formées de bicouches."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la phospholipase A1, laquelle est correcte ?",
    "choices": [
      {
        "content": "La régiospécificité permet de prévoir le lysophospholipide formé.",
        "correct": true,
        "explanation": "La chaîne restante dépend du site hydrolysé."
      },
      {
        "content": "Elle hydrolyse spécifiquement l'acyle sn-2.",
        "correct": false,
        "explanation": "Cela décrit PLA2."
      },
      {
        "content": "Elle transforme directement PIP2 en PIP3.",
        "correct": false,
        "explanation": "Cela relève de PI3K."
      },
      {
        "content": "Elle coupe entre phosphate et tête polaire comme PLD.",
        "correct": false,
        "explanation": "Ce n'est pas son site."
      },
      {
        "content": "Elle ajoute une chaîne acyle au phospholipide.",
        "correct": false,
        "explanation": "C'est une hydrolase."
      }
    ],
    "explanation": "PLA1 hydrolyse l'acyle sn-1 d'un glycérophospholipide."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle position est hydrolysée par la phospholipase A2 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sn-2",
        "C2",
        "position 2",
        "2"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "PLA2 cible l'acyle sn-2 et peut libérer l'acide arachidonique en laissant un lysophospholipide."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la phospholipase C, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle coupe la liaison phosphodiester entre le glycérol et le phosphate du phosphoinositide.",
        "correct": true,
        "explanation": "Le DAG reste dans la membrane."
      },
      {
        "content": "Elle hydrolyse l'acyle sn-2 comme PLA2.",
        "correct": false,
        "explanation": "Son site est différent."
      },
      {
        "content": "L'IP3 peut déclencher la libération de Ca2+ depuis le réticulum endoplasmique.",
        "correct": true,
        "explanation": "Il diffuse dans le cytosol."
      },
      {
        "content": "Sur PIP2, elle produit du DAG et de l'IP3.",
        "correct": true,
        "explanation": "Ces deux produits sont des seconds messagers."
      },
      {
        "content": "Elle produit uniquement deux acides gras libres.",
        "correct": false,
        "explanation": "Sur PIP2, les produits clés sont DAG et IP3."
      }
    ],
    "explanation": "La PLC hydrolyse PIP2 en DAG membranaire et IP3 soluble, déclenchant deux branches de signalisation."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la phospholipase D, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elle hydrolyse uniquement l'acyle sn-2.",
        "correct": false,
        "explanation": "Cela décrit PLA2."
      },
      {
        "content": "Elle produit obligatoirement IP3 à partir de PIP2.",
        "correct": false,
        "explanation": "Cela décrit une activité PLC spécifique."
      },
      {
        "content": "Elle ajoute un phosphate en C3 de l'inositol.",
        "correct": false,
        "explanation": "Cela relève de PI3K."
      },
      {
        "content": "Elle est une lipase digestive des TAG uniquement.",
        "correct": false,
        "explanation": "C'est une phospholipase."
      },
      {
        "content": "Elle hydrolyse la liaison entre le phosphate et la tête polaire.",
        "correct": true,
        "explanation": "Elle peut former de l'acide phosphatidique."
      }
    ],
    "explanation": "PLD coupe du côté de la tête polaire et peut laisser un acide phosphatidique."
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant le PIP2, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "PIP2 est un triacylglycérol de stockage.",
        "correct": false,
        "explanation": "C'est un phosphoinositide membranaire."
      },
      {
        "content": "PI3K peut le phosphoryler en position 3 pour former PIP3.",
        "correct": true,
        "explanation": "Le produit est alors PI(3,4,5)P3."
      },
      {
        "content": "La PLC peut l'hydrolyser en DAG et IP3.",
        "correct": true,
        "explanation": "Cette réaction produit deux seconds messagers."
      },
      {
        "content": "Le terme bisphosphate signifie qu'une liaison pyrophosphate P-O-P relie nécessairement les deux phosphates.",
        "correct": false,
        "explanation": "Les phosphates sont portés sur des positions différentes de l'inositol."
      },
      {
        "content": "Il ne peut être substrat d'aucune phospholipase.",
        "correct": false,
        "explanation": "La PLC l'hydrolyse."
      }
    ],
    "explanation": "PIP2 est PI(4,5)P2, phosphoinositide du feuillet cytosolique et précurseur de DAG/IP3 ou de PIP3.",
    "requiredSelectionCount": 2
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les seconds messagers DAG et IP3, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'IP3 est le produit direct de la bêta-oxydation.",
        "correct": false,
        "explanation": "Il provient notamment de PIP2 via PLC."
      },
      {
        "content": "Le DAG peut contribuer à l'activation de la protéine kinase C.",
        "correct": true,
        "explanation": "L'activation dépend aussi du contexte et de l'isoforme."
      },
      {
        "content": "Le DAG reste dans la membrane plasmique.",
        "correct": true,
        "explanation": "Ses deux chaînes acyles lui confèrent un caractère hydrophobe."
      },
      {
        "content": "L'IP3 diffuse dans le cytosol.",
        "correct": true,
        "explanation": "Il ne possède pas de chaîne acyle."
      },
      {
        "content": "L'IP3 ouvre des canaux calciques du réticulum endoplasmique via son récepteur.",
        "correct": true,
        "explanation": "Le Ca2+ cytosolique augmente rapidement."
      }
    ],
    "explanation": "DAG et IP3 sont les deux branches majeures de la signalisation PLC sur PIP2."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel phosphoinositide est produit par PI3K à partir de PIP2 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "PIP3",
        "PIP₃",
        "PI(3,4,5)P3",
        "phosphatidylinositol-3,4,5-trisphosphate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "PI3K convertit PIP2 en PIP3 ; PIP3 recrute AKT et permet son activation par phosphorylation enzymatique."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant PTEN ?",
    "choices": [
      {
        "content": "PTEN hydrolyse principalement les TAG alimentaires.",
        "correct": false,
        "explanation": "Ce n'est pas sa fonction majeure."
      },
      {
        "content": "PTEN ajoute un phosphate en C3 pour former PIP3.",
        "correct": false,
        "explanation": "Cela décrit PI3K."
      },
      {
        "content": "PTEN active obligatoirement AKT en augmentant PIP3.",
        "correct": false,
        "explanation": "Elle réduit PIP3."
      },
      {
        "content": "PTEN possède une activité phosphatase lipidique.",
        "correct": true,
        "explanation": "Elle retire notamment le phosphate en position 3 de PIP3."
      },
      {
        "content": "PTEN est un type de triacylglycérol.",
        "correct": false,
        "explanation": "C'est une protéine phosphatase."
      }
    ],
    "explanation": "PTEN déphosphoryle PIP3 en position 3 et freine la voie PI3K-AKT."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les plasmalogènes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils sont absents du système nerveux.",
        "correct": false,
        "explanation": "Le cerveau en contient beaucoup."
      },
      {
        "content": "Tout plasmalogène est un triacylglycérol.",
        "correct": false,
        "explanation": "C'est un glycérophospholipide éther."
      },
      {
        "content": "Un plasmalogène porte obligatoirement un acide gras en sn-1 par liaison ester.",
        "correct": false,
        "explanation": "La liaison sn-1 est un vinyl-éther."
      },
      {
        "content": "Ce sont des glycérophospholipides éther particuliers.",
        "correct": true,
        "explanation": "Ils se distinguent des phospholipides diacylés classiques."
      },
      {
        "content": "La tête polaire est souvent éthanolamine ou choline.",
        "correct": true,
        "explanation": "Les plasmalogènes d'éthanolamine sont particulièrement abondants dans certains tissus."
      }
    ],
    "explanation": "Les plasmalogènes sont des glycérophospholipides à vinyl-éther en sn-1, distincts des simples alkyl-éthers."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'organisation des glycérophospholipides en bicouche, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les liposomes sont des vésicules fermées délimitées par une ou plusieurs bicouches.",
        "correct": true,
        "explanation": "Ils peuvent encapsuler des molécules hydrophiles."
      },
      {
        "content": "Les têtes polaires se tournent vers les milieux aqueux.",
        "correct": true,
        "explanation": "Les chaînes hydrophobes s'associent au cœur de la bicouche."
      },
      {
        "content": "Les liposomes sont de simples protéines globulaires.",
        "correct": false,
        "explanation": "Ce sont des vésicules lipidiques."
      },
      {
        "content": "Une bicouche biologique est parfaitement rigide.",
        "correct": false,
        "explanation": "Elle est dynamique et fluide."
      },
      {
        "content": "Les glycérophospholipides diacylés forment obligatoirement uniquement des micelles sphériques simples.",
        "correct": false,
        "explanation": "Leur géométrie favorise surtout les bicouches."
      }
    ],
    "explanation": "Les glycérophospholipides diacylés sont adaptés aux bicouches ; les liposomes sont des vésicules formées de bicouches."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quels deux seconds messagers sont formés lors de l'hydrolyse du PIP2 par la phospholipase C ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "DAG et IP3",
        "IP3 et DAG",
        "diacylglycérol et inositol-1,4,5-trisphosphate",
        "DAG + IP3"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La PLC hydrolyse PIP2 en DAG, qui reste membranaire, et IP3, qui diffuse dans le cytosol."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant la phospholipase A2 ?",
    "choices": [
      {
        "content": "Elle ajoute un acide gras en sn-2.",
        "correct": false,
        "explanation": "Elle l'enlève par hydrolyse."
      },
      {
        "content": "Elle hydrolyse l'ester acyle en sn-2.",
        "correct": true,
        "explanation": "Elle libère l'acide gras de cette position."
      },
      {
        "content": "Elle ne peut jamais libérer d'acide arachidonique.",
        "correct": false,
        "explanation": "C'est une fonction biologique importante."
      },
      {
        "content": "Elle hydrolyse spécifiquement la liaison entre phosphate et choline.",
        "correct": false,
        "explanation": "Cela correspond à PLD."
      },
      {
        "content": "Elle forme PIP3 à partir de PIP2.",
        "correct": false,
        "explanation": "Cela relève de PI3K."
      }
    ],
    "explanation": "PLA2 cible l'acyle sn-2 et peut libérer l'acide arachidonique en laissant un lysophospholipide."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la phospholipase C, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le DAG peut activer certaines isoformes de protéine kinase C.",
        "correct": true,
        "explanation": "Il reste hydrophobe et membranaire."
      },
      {
        "content": "L'IP3 peut déclencher la libération de Ca2+ depuis le réticulum endoplasmique.",
        "correct": true,
        "explanation": "Il diffuse dans le cytosol."
      },
      {
        "content": "L'IP3 reste ancré dans la membrane par deux chaînes acyles.",
        "correct": false,
        "explanation": "Il est soluble et dépourvu de chaînes acyles."
      },
      {
        "content": "Elle hydrolyse l'acyle sn-2 comme PLA2.",
        "correct": false,
        "explanation": "Son site est différent."
      },
      {
        "content": "Elle coupe la liaison phosphodiester entre le glycérol et le phosphate du phosphoinositide.",
        "correct": true,
        "explanation": "Le DAG reste dans la membrane."
      }
    ],
    "explanation": "La PLC hydrolyse PIP2 en DAG membranaire et IP3 soluble, déclenchant deux branches de signalisation."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant la phospholipase D, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Elle est une lipase digestive des TAG uniquement.",
        "correct": false,
        "explanation": "C'est une phospholipase."
      },
      {
        "content": "Sur une phosphatidylcholine, elle peut libérer de la choline.",
        "correct": true,
        "explanation": "Le phosphatidate reste dans la membrane."
      },
      {
        "content": "Elle hydrolyse uniquement l'acyle sn-2.",
        "correct": false,
        "explanation": "Cela décrit PLA2."
      },
      {
        "content": "Elle contribue à des voies de signalisation et de remodelage membranaire.",
        "correct": true,
        "explanation": "L'acide phosphatidique est lui-même bioactif."
      },
      {
        "content": "Elle ajoute un phosphate en C3 de l'inositol.",
        "correct": false,
        "explanation": "Cela relève de PI3K."
      }
    ],
    "explanation": "PLD coupe du côté de la tête polaire et peut laisser un acide phosphatidique.",
    "requiredSelectionCount": 2
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le PIP2 ?",
    "choices": [
      {
        "content": "Il est enrichi dans le feuillet cytosolique de la membrane plasmique.",
        "correct": true,
        "explanation": "Il sert de plateforme de signalisation."
      },
      {
        "content": "Il s'agit du phosphatidylinositol-4,5-bisphosphate.",
        "correct": true,
        "explanation": "Les positions 4 et 5 de l'inositol portent des phosphates supplémentaires."
      },
      {
        "content": "PI3K peut le phosphoryler en position 3 pour former PIP3.",
        "correct": true,
        "explanation": "Le produit est alors PI(3,4,5)P3."
      },
      {
        "content": "PIP2 est un triacylglycérol de stockage.",
        "correct": false,
        "explanation": "C'est un phosphoinositide membranaire."
      },
      {
        "content": "La PLC peut l'hydrolyser en DAG et IP3.",
        "correct": true,
        "explanation": "Cette réaction produit deux seconds messagers."
      }
    ],
    "explanation": "PIP2 est PI(4,5)P2, phosphoinositide du feuillet cytosolique et précurseur de DAG/IP3 ou de PIP3."
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel phosphoinositide est produit lorsque PI3K phosphoryle PIP2 en position 3 de l'inositol ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "PIP3",
        "PIP₃",
        "PI(3,4,5)P3",
        "phosphatidylinositol-3,4,5-trisphosphate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "PI3K transforme PI(4,5)P2 en PI(3,4,5)P3."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la voie PI3K-AKT, laquelle est correcte ?",
    "choices": [
      {
        "content": "PI3K hydrolyse PIP2 en DAG et IP3.",
        "correct": false,
        "explanation": "Cela relève de PLC."
      },
      {
        "content": "PIP3 recrute à la membrane des protéines possédant des domaines de liaison adaptés, dont AKT.",
        "correct": true,
        "explanation": "PIP3 sert de plateforme de recrutement."
      },
      {
        "content": "PIP3 phosphoryle chimiquement AKT sans intervention d'enzymes.",
        "correct": false,
        "explanation": "Il recrute AKT et des kinases d'activation."
      },
      {
        "content": "PIP3 est une enzyme protéique.",
        "correct": false,
        "explanation": "C'est un phosphoinositide."
      },
      {
        "content": "La voie PI3K-AKT n'a aucun lien avec la signalisation cellulaire.",
        "correct": false,
        "explanation": "C'est une voie centrale."
      }
    ],
    "explanation": "PI3K convertit PIP2 en PIP3 ; PIP3 recrute AKT et permet son activation par phosphorylation enzymatique."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant PTEN ?",
    "choices": [
      {
        "content": "PTEN ajoute un phosphate en C3 pour former PIP3.",
        "correct": false,
        "explanation": "Cela décrit PI3K."
      },
      {
        "content": "PTEN est un type de triacylglycérol.",
        "correct": false,
        "explanation": "C'est une protéine phosphatase."
      },
      {
        "content": "PTEN limite la signalisation PI3K-AKT.",
        "correct": true,
        "explanation": "Sa perte peut favoriser une activation excessive de la voie."
      },
      {
        "content": "PTEN hydrolyse principalement les TAG alimentaires.",
        "correct": false,
        "explanation": "Ce n'est pas sa fonction majeure."
      },
      {
        "content": "PTEN possède une activité phosphatase lipidique.",
        "correct": true,
        "explanation": "Elle retire notamment le phosphate en position 3 de PIP3."
      }
    ],
    "explanation": "PTEN déphosphoryle PIP3 en position 3 et freine la voie PI3K-AKT."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Une bicouche biologique est parfaitement rigide.",
        "correct": false,
        "explanation": "Elle est dynamique et fluide."
      },
      {
        "content": "La bicouche reste fluide et déformable.",
        "correct": true,
        "explanation": "Elle n'est pas un cristal rigide."
      },
      {
        "content": "Les liposomes sont des vésicules fermées délimitées par une ou plusieurs bicouches.",
        "correct": true,
        "explanation": "Ils peuvent encapsuler des molécules hydrophiles."
      },
      {
        "content": "Leur liaison sn-1 est une liaison amide.",
        "correct": false,
        "explanation": "C'est une liaison vinyl-éther."
      },
      {
        "content": "Deux chaînes hydrophobes favorisent une géométrie compatible avec les bicouches.",
        "correct": true,
        "explanation": "Les phospholipides diacylés forment spontanément des structures lamellaires."
      },
      {
        "content": "Ce sont des glycérophospholipides éther particuliers.",
        "correct": true,
        "explanation": "Ils se distinguent des phospholipides diacylés classiques."
      },
      {
        "content": "Ils sont absents du système nerveux.",
        "correct": false,
        "explanation": "Le cerveau en contient beaucoup."
      },
      {
        "content": "Tout plasmalogène est un triacylglycérol.",
        "correct": false,
        "explanation": "C'est un glycérophospholipide éther."
      },
      {
        "content": "En sn-1, ils portent typiquement une chaîne alk-1'-ényl liée par un vinyl-éther.",
        "correct": true,
        "explanation": "La liaison vinyl-éther est leur signature structurale."
      },
      {
        "content": "Les chaînes acyles sont orientées vers l'eau tandis que les têtes polaires se cachent au centre.",
        "correct": false,
        "explanation": "L'organisation est inverse."
      }
    ],
    "explanation": "Les plasmalogènes sont des glycérophospholipides à vinyl-éther en sn-1, distincts des simples alkyl-éthers. Les glycérophospholipides diacylés sont adaptés aux bicouches ; les liposomes sont des vésicules formées de bicouches."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant le facteur d'activation plaquettaire PAF, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Il porte une chaîne alkyle en sn-1 par liaison éther.",
        "correct": true,
        "explanation": "Cette liaison n'est pas le vinyl-éther caractéristique d'un plasmalogène."
      },
      {
        "content": "Il porte un groupement acétyle court en sn-2.",
        "correct": true,
        "explanation": "Cette particularité le distingue de nombreux phospholipides structuraux."
      },
      {
        "content": "PAF est un plasmalogène typique à liaison vinyl-éther en sn-1.",
        "correct": false,
        "explanation": "Il porte un alkyl-éther non vinylique."
      },
      {
        "content": "Sa tête polaire est une phosphocholine.",
        "correct": true,
        "explanation": "Il appartient aux éther-glycérophospholipides."
      },
      {
        "content": "PAF porte trois longues chaînes d'acides gras.",
        "correct": false,
        "explanation": "Il porte une chaîne alkyle en sn-1 et un acétyle court en sn-2."
      }
    ],
    "explanation": "PAF est un éther-glycérophospholipide bioactif à alkyl-éther sn-1, acétyle sn-2 et phosphocholine sn-3."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel effet respiratoire important peut être induit par le PAF ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "bronchoconstriction",
        "constriction bronchique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "PAF est un médiateur phospholipidique puissant pouvant favoriser agrégation plaquettaire, bronchoconstriction et inflammation."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sur ce glycérophospholipide simplifié, cliquez sur la liaison ester en C2 ciblée par une phospholipase A2.",
    "image": {
      "src": "/images/training/ue14/biochimie/glycerides-glycerophospholipides/phospholipase-a2-c2-qzone.svg",
      "alt": "Schéma d'un glycérophospholipide avec glycérol vertical, chaînes acyles en C1 et C2 et phosphate en C3",
      "width": 1000,
      "height": 650
    },
    "expectedZones": [
      {
        "id": "ester-c2",
        "label": "Liaison ester de C2",
        "x": 0.455,
        "y": 0.48,
        "tolerance": 0.075
      }
    ],
    "explanation": "La phospholipase A2 hydrolyse spécifiquement la liaison ester portant l'acide gras en sn-2."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle position acyle du glycérol est hydrolysée par la phospholipase A1 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sn-1",
        "C1",
        "position 1",
        "1"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "PLA1 hydrolyse l'acyle sn-1 d'un glycérophospholipide."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant la phospholipase A2, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Elle ne peut jamais libérer d'acide arachidonique.",
        "correct": false,
        "explanation": "C'est une fonction biologique importante."
      },
      {
        "content": "Elle ajoute un acide gras en sn-2.",
        "correct": false,
        "explanation": "Elle l'enlève par hydrolyse."
      },
      {
        "content": "Elle forme PIP3 à partir de PIP2.",
        "correct": false,
        "explanation": "Cela relève de PI3K."
      },
      {
        "content": "Son action relie métabolisme membranaire et médiateurs inflammatoires.",
        "correct": true,
        "explanation": "L'acide arachidonique est un précurseur majeur."
      },
      {
        "content": "Elle peut libérer de l'acide arachidonique à partir de phospholipides membranaires.",
        "correct": true,
        "explanation": "Cela alimente la synthèse d'eicosanoïdes."
      }
    ],
    "explanation": "PLA2 cible l'acyle sn-2 et peut libérer l'acide arachidonique en laissant un lysophospholipide.",
    "requiredSelectionCount": 2
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel type de liaison en sn-1 caractérise un plasmalogène authentique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "vinyl-éther",
        "vinyl ether",
        "liaison vinyl-éther",
        "alk-1'-ényl éther"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les plasmalogènes possèdent une liaison vinyl-éther en sn-1 ; un simple alkyl-éther non vinylique, comme dans le PAF, ne suffit pas à définir un plasmalogène."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la phospholipase D, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elle est une lipase digestive des TAG uniquement.",
        "correct": false,
        "explanation": "C'est une phospholipase."
      },
      {
        "content": "Elle produit obligatoirement IP3 à partir de PIP2.",
        "correct": false,
        "explanation": "Cela décrit une activité PLC spécifique."
      },
      {
        "content": "Elle hydrolyse uniquement l'acyle sn-2.",
        "correct": false,
        "explanation": "Cela décrit PLA2."
      },
      {
        "content": "Elle hydrolyse la liaison entre le phosphate et la tête polaire.",
        "correct": true,
        "explanation": "Elle peut former de l'acide phosphatidique."
      },
      {
        "content": "Elle ajoute un phosphate en C3 de l'inositol.",
        "correct": false,
        "explanation": "Cela relève de PI3K."
      }
    ],
    "explanation": "PLD coupe du côté de la tête polaire et peut laisser un acide phosphatidique."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le PIP2 ?",
    "choices": [
      {
        "content": "Il est localisé exclusivement dans la lumière du réticulum endoplasmique.",
        "correct": false,
        "explanation": "Il est notamment dans le feuillet cytosolique de la membrane plasmique."
      },
      {
        "content": "La PLC peut l'hydrolyser en DAG et IP3.",
        "correct": true,
        "explanation": "Cette réaction produit deux seconds messagers."
      },
      {
        "content": "PI3K peut le phosphoryler en position 3 pour former PIP3.",
        "correct": true,
        "explanation": "Le produit est alors PI(3,4,5)P3."
      },
      {
        "content": "Le terme bisphosphate signifie qu'une liaison pyrophosphate P-O-P relie nécessairement les deux phosphates.",
        "correct": false,
        "explanation": "Les phosphates sont portés sur des positions différentes de l'inositol."
      },
      {
        "content": "Il s'agit du phosphatidylinositol-4,5-bisphosphate.",
        "correct": true,
        "explanation": "Les positions 4 et 5 de l'inositol portent des phosphates supplémentaires."
      }
    ],
    "explanation": "PIP2 est PI(4,5)P2, phosphoinositide du feuillet cytosolique et précurseur de DAG/IP3 ou de PIP3."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel médiateur éther-phospholipidique comporte une chaîne alkyle en sn-1, un acétyle en sn-2 et une phosphocholine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "PAF",
        "Platelet-Activating Factor",
        "facteur d'activation plaquettaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le PAF est un éther-glycérophospholipide bioactif distinct d'un plasmalogène à vinyl-éther."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "L'activation d'AKT nécessite des phosphorylations catalysées par des kinases.",
        "correct": true,
        "explanation": "PIP3 ne phosphoryle pas lui-même AKT."
      },
      {
        "content": "PAF est dépourvu de groupement phosphate.",
        "correct": false,
        "explanation": "Il possède une phosphocholine."
      },
      {
        "content": "PIP3 phosphoryle chimiquement AKT sans intervention d'enzymes.",
        "correct": false,
        "explanation": "Il recrute AKT et des kinases d'activation."
      },
      {
        "content": "PI3K phosphoryle PIP2 en position 3 de l'inositol.",
        "correct": true,
        "explanation": "Elle forme PI(3,4,5)P3."
      },
      {
        "content": "PAF est un plasmalogène typique à liaison vinyl-éther en sn-1.",
        "correct": false,
        "explanation": "Il porte un alkyl-éther non vinylique."
      },
      {
        "content": "La voie PI3K-AKT n'a aucun lien avec la signalisation cellulaire.",
        "correct": false,
        "explanation": "C'est une voie centrale."
      },
      {
        "content": "PI3K hydrolyse PIP2 en DAG et IP3.",
        "correct": false,
        "explanation": "Cela relève de PLC."
      },
      {
        "content": "Il porte un groupement acétyle court en sn-2.",
        "correct": true,
        "explanation": "Cette particularité le distingue de nombreux phospholipides structuraux."
      },
      {
        "content": "PAF signifie Platelet-Activating Factor.",
        "correct": true,
        "explanation": "C'est un médiateur phospholipidique puissant."
      },
      {
        "content": "La voie PI3K-AKT participe à la survie, la croissance et la prolifération cellulaires.",
        "correct": true,
        "explanation": "Sa dérégulation est fréquente en cancérologie."
      }
    ],
    "explanation": "PI3K convertit PIP2 en PIP3 ; PIP3 recrute AKT et permet son activation par phosphorylation enzymatique. PAF est un éther-glycérophospholipide bioactif à alkyl-éther sn-1, acétyle sn-2 et phosphocholine sn-3."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant PTEN ?",
    "choices": [
      {
        "content": "PTEN possède une activité phosphatase lipidique.",
        "correct": true,
        "explanation": "Elle retire notamment le phosphate en position 3 de PIP3."
      },
      {
        "content": "PTEN limite la signalisation PI3K-AKT.",
        "correct": true,
        "explanation": "Sa perte peut favoriser une activation excessive de la voie."
      },
      {
        "content": "PTEN convertit PIP3 vers PIP2.",
        "correct": true,
        "explanation": "Elle s'oppose fonctionnellement à PI3K."
      },
      {
        "content": "PTEN active obligatoirement AKT en augmentant PIP3.",
        "correct": false,
        "explanation": "Elle réduit PIP3."
      },
      {
        "content": "PTEN est un suppresseur de tumeur majeur.",
        "correct": true,
        "explanation": "Son inactivation est observée dans de nombreux cancers."
      }
    ],
    "explanation": "PTEN déphosphoryle PIP3 en position 3 et freine la voie PI3K-AKT."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel type de liaison caractérise la chaîne sn-1 d'un plasmalogène ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "vinyl-éther",
        "vinyl ether",
        "liaison vinyl-éther",
        "liaison vinyl ether",
        "alk-1'-ényl éther"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les plasmalogènes sont des glycérophospholipides à vinyl-éther en sn-1, distincts des simples alkyl-éthers."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant le facteur d'activation plaquettaire PAF, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Il porte un groupement acétyle court en sn-2.",
        "correct": true,
        "explanation": "Cette particularité le distingue de nombreux phospholipides structuraux."
      },
      {
        "content": "Il porte une chaîne alkyle en sn-1 par liaison éther.",
        "correct": true,
        "explanation": "Cette liaison n'est pas le vinyl-éther caractéristique d'un plasmalogène."
      },
      {
        "content": "PAF porte trois longues chaînes d'acides gras.",
        "correct": false,
        "explanation": "Il porte une chaîne alkyle en sn-1 et un acétyle court en sn-2."
      },
      {
        "content": "PAF est un plasmalogène typique à liaison vinyl-éther en sn-1.",
        "correct": false,
        "explanation": "Il porte un alkyl-éther non vinylique."
      },
      {
        "content": "PAF est dépourvu de groupement phosphate.",
        "correct": false,
        "explanation": "Il possède une phosphocholine."
      }
    ],
    "explanation": "PAF est un éther-glycérophospholipide bioactif à alkyl-éther sn-1, acétyle sn-2 et phosphocholine sn-3.",
    "requiredSelectionCount": 2
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les effets biologiques du PAF ?",
    "choices": [
      {
        "content": "PAF est exclusivement un médiateur anti-inflammatoire.",
        "correct": false,
        "explanation": "Il est fortement pro-inflammatoire dans plusieurs contextes."
      },
      {
        "content": "PAF est dépourvu de tout effet sur les plaquettes.",
        "correct": false,
        "explanation": "Il peut les activer."
      },
      {
        "content": "PAF ne peut agir sur aucun muscle lisse.",
        "correct": false,
        "explanation": "Il peut notamment favoriser la bronchoconstriction."
      },
      {
        "content": "Il peut moduler le tonus vasculaire.",
        "correct": true,
        "explanation": "Ses effets vasculaires dépendent du contexte et du lit vasculaire."
      },
      {
        "content": "Il peut provoquer une bronchoconstriction.",
        "correct": true,
        "explanation": "Il participe à certaines réponses inflammatoires et allergiques."
      }
    ],
    "explanation": "PAF est un médiateur phospholipidique puissant pouvant favoriser agrégation plaquettaire, bronchoconstriction et inflammation."
  }
];
