import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie – Chapitre 1.2 – Section A – Principaux oses simples et propriétés
 */

export const UE14_BIOCH_CH2_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos du glycéraldéhyde et de la dihydroxyacétone :",
    "choices": [
      {
        "content": "Ce sont des oses à trois carbones.",
        "correct": true,
        "explanation": "Le glycéraldéhyde et la dihydroxyacétone comportent chacun trois atomes de carbone : ce sont des trioses."
      },
      {
        "content": "Le glycéraldéhyde est un aldose.",
        "correct": true,
        "explanation": "Il porte une fonction aldéhyde."
      },
      {
        "content": "La dihydroxyacétone est un cétose.",
        "correct": true,
        "explanation": "Elle porte une fonction cétone."
      },
      {
        "content": "Leurs formes phosphorylées sont étrangères à la glycolyse.",
        "correct": false,
        "explanation": "Le glycéraldéhyde-3-phosphate et la dihydroxyacétone phosphate sont des intermédiaires interconvertibles de la glycolyse."
      }
    ],
    "explanation": "Ces deux trioses servent de repères structuraux et métaboliques."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la glycolyse :",
    "choices": [
      {
        "content": "Elle correspond au catabolisme du glucose.",
        "correct": true,
        "explanation": "La glycolyse est une voie catabolique qui convertit le glucose en pyruvate."
      },
      {
        "content": "Elle conduit vers des voies métaboliques fournissant de l'énergie à la cellule.",
        "correct": true,
        "explanation": "La glycolyse fournit directement de l'ATP et des équivalents réducteurs utilisables par la cellule."
      },
      {
        "content": "Les formes phosphorylées du glycéraldéhyde et de la dihydroxyacétone y participent.",
        "correct": true,
        "explanation": "Le glycéraldéhyde-3-phosphate et la dihydroxyacétone phosphate sont deux trioses phosphorylés de cette voie."
      },
      {
        "content": "Elle désigne la synthèse des protéines.",
        "correct": false,
        "explanation": "Ce n'est pas une voie protéique."
      }
    ],
    "explanation": "La glycolyse est une voie centrale du catabolisme glucidique dans laquelle interviennent deux trioses phosphorylés."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos du glucose :",
    "choices": [
      {
        "content": "Il est aussi appelé dextrose.",
        "correct": true,
        "explanation": "Le terme dextrose est un nom usuel du D-glucose."
      },
      {
        "content": "C'est un aldose.",
        "correct": true,
        "explanation": "Sous sa forme linéaire, le glucose porte une fonction aldéhyde : il appartient donc à la famille des aldoses."
      },
      {
        "content": "Ses formes pyraniques représentent plus de 99 % du D-glucose à l'équilibre en solution aqueuse.",
        "correct": true,
        "explanation": "Les anomères α- et β-D-glucopyranose dominent très largement ; les formes furanoses et linéaire sont très minoritaires."
      },
      {
        "content": "Sa forme majoritaire en solution aqueuse est furanique.",
        "correct": false,
        "explanation": "En solution aqueuse, le D-glucose est très majoritairement présent sous forme pyranose."
      }
    ],
    "explanation": "Le glucose est l'aldose de référence, majoritairement pyranique."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les rôles ou caractéristiques biologiques du glucose :",
    "choices": [
      {
        "content": "Il est l'un des oses les plus répandus dans la nature.",
        "correct": true,
        "explanation": "Le D-glucose libre ou engagé dans des glucides complexes est très largement distribué dans le vivant."
      },
      {
        "content": "Il est une source d'énergie majeure.",
        "correct": true,
        "explanation": "Son oxydation alimente notamment la glycolyse et contribue à la production d'ATP."
      },
      {
        "content": "Il constitue un substrat énergétique majeur du fœtus.",
        "correct": true,
        "explanation": "Le glucose maternel transféré à travers le placenta contribue fortement au métabolisme énergétique fœtal, sans en être l'unique substrat."
      },
      {
        "content": "Sa concentration sanguine n'a aucun lien avec le diabète.",
        "correct": false,
        "explanation": "La glycémie mal contrôlée est reliée au diabète."
      }
    ],
    "explanation": "Le glucose cumule importance biologique, énergétique et clinique."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Comment appelle-t-on la concentration sanguine du glucose ?",
    "choices": [
      {
        "content": "La glycémie.",
        "correct": true,
        "explanation": "La glycémie désigne la concentration de glucose dans le sang."
      },
      {
        "content": "La galactosémie.",
        "correct": false,
        "explanation": "La galactosémie concerne une anomalie du métabolisme du galactose."
      },
      {
        "content": "La glucuronémie.",
        "correct": false,
        "explanation": "Ce terme n'est pas celui utilisé."
      },
      {
        "content": "La glycolyse.",
        "correct": false,
        "explanation": "La glycolyse est une voie métabolique."
      }
    ],
    "explanation": "La glycémie est la concentration du glucose dans le sang."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le galactose :",
    "choices": [
      {
        "content": "C'est un aldose.",
        "correct": true,
        "explanation": "Sous sa forme linéaire, le galactose porte une fonction aldéhyde : c'est un aldose."
      },
      {
        "content": "Sa forme la plus fréquente est pyranique.",
        "correct": true,
        "explanation": "Comme le glucose, le galactose adopte principalement des formes pyranoses en solution."
      },
      {
        "content": "Il entre dans la composition du lactose avec le glucose.",
        "correct": true,
        "explanation": "Le lactose est un diholoside constitué d'un résidu de galactose et d'un résidu de glucose."
      },
      {
        "content": "Il est épimère en C2 du glucose.",
        "correct": false,
        "explanation": "Il est épimère en C4."
      }
    ],
    "explanation": "Le galactose est un aldohexose apparenté au glucose et composant du lactose."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos du galactose dans l'organisme :",
    "choices": [
      {
        "content": "Son métabolisme est connecté à celui du glucose.",
        "correct": true,
        "explanation": "Le galactose est notamment converti en glucose-1-phosphate, ce qui relie son métabolisme à celui du glucose."
      },
      {
        "content": "Des dérivés sont présents au niveau du cerveau.",
        "correct": true,
        "explanation": "Les galactocérébrosides sont des glycolipides abondants dans la myéline du système nerveux."
      },
      {
        "content": "Il peut être présent dans des glycoprotéines et glycolipides.",
        "correct": true,
        "explanation": "Le galactose entre dans la composition de chaînes glucidiques portées par des protéines et des lipides."
      },
      {
        "content": "Il est absent des glycoconjugués.",
        "correct": false,
        "explanation": "De nombreux glycoconjugués contiennent du galactose ; il n'en est donc pas absent."
      }
    ],
    "explanation": "Le galactose intervient dans des glycoconjugués et son métabolisme rejoint celui du glucose."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Le galactose est l'épimère du glucose en :",
    "choices": [
      {
        "content": "C4.",
        "correct": true,
        "explanation": "Le D-galactose et le D-glucose ne diffèrent que par la configuration du carbone C4."
      },
      {
        "content": "C1.",
        "correct": false,
        "explanation": "Une différence en C1 cyclique correspondrait à une relation d'anomérie, pas à l'épimérie glucose-galactose."
      },
      {
        "content": "C2.",
        "correct": false,
        "explanation": "C2 correspond au mannose."
      },
      {
        "content": "C6.",
        "correct": false,
        "explanation": "Le carbone C6 porte la fonction alcool primaire et ne distingue pas le glucose du galactose."
      }
    ],
    "explanation": "Le couple glucose-galactose diffère en C4."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le mannose :",
    "choices": [
      {
        "content": "C'est un aldose.",
        "correct": true,
        "explanation": "Sous sa forme linéaire, le mannose porte une fonction aldéhyde : c'est un aldose."
      },
      {
        "content": "Il entre dans la composition de polysaccharides végétaux appelés mannanes.",
        "correct": true,
        "explanation": "Les mannanes et glucomannanes sont des polysaccharides végétaux riches en résidus de mannose."
      },
      {
        "content": "Il est présent en quantité importante dans les glycoprotéines.",
        "correct": true,
        "explanation": "Les glycannes de nombreuses glycoprotéines contiennent des résidus de mannose."
      },
      {
        "content": "Il est épimère en C4 du glucose.",
        "correct": false,
        "explanation": "Il est épimère en C2."
      }
    ],
    "explanation": "Le mannose est un aldose, épimère C2 du glucose, fréquent dans les glycoprotéines."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Le mannose est l'épimère du glucose en :",
    "choices": [
      {
        "content": "C2.",
        "correct": true,
        "explanation": "Le D-mannose et le D-glucose ne diffèrent que par la configuration du carbone C2."
      },
      {
        "content": "C4.",
        "correct": false,
        "explanation": "C4 correspond au galactose."
      },
      {
        "content": "C5.",
        "correct": false,
        "explanation": "Le glucose et le mannose ont la même configuration en C5."
      },
      {
        "content": "C6.",
        "correct": false,
        "explanation": "Le carbone C6 ne porte pas le centre stéréogène qui distingue le glucose du mannose."
      }
    ],
    "explanation": "Le couple glucose-mannose diffère en C2."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le fructose :",
    "choices": [
      {
        "content": "Il est aussi appelé lévulose.",
        "correct": true,
        "explanation": "Lévulose est un nom usuel historique du D-fructose."
      },
      {
        "content": "C'est un cétose.",
        "correct": true,
        "explanation": "Sous sa forme linéaire, le fructose porte une fonction cétone : c'est un cétose."
      },
      {
        "content": "Il peut adopter des formes cycliques furanoses et pyranoses.",
        "correct": true,
        "explanation": "Le D-fructose existe sous plusieurs formes cycliques ; en solution aqueuse, la forme β-D-fructopyranose est majoritaire."
      },
      {
        "content": "Il est absent des fruits et du miel.",
        "correct": false,
        "explanation": "Le fructose est naturellement présent dans de nombreux fruits et dans le miel."
      }
    ],
    "explanation": "Le fructose est un cétohexose naturellement présent dans fruits et miel."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les caractéristiques biologiques du fructose :",
    "choices": [
      {
        "content": "Il est présent dans le saccharose avec le glucose.",
        "correct": true,
        "explanation": "Le saccharose associe un résidu de glucose à un résidu de fructose."
      },
      {
        "content": "Son pouvoir sucrant est important.",
        "correct": true,
        "explanation": "Le fructose possède un pouvoir sucrant supérieur à celui du glucose dans les conditions usuelles."
      },
      {
        "content": "Après phosphorylation, il peut rejoindre la glycolyse sous forme d'intermédiaires métaboliques.",
        "correct": true,
        "explanation": "Selon le tissu, le fructose est converti en fructose-6-phosphate ou en trioses phosphates qui alimentent la glycolyse."
      },
      {
        "content": "C'est un aldose.",
        "correct": false,
        "explanation": "La forme linéaire du fructose porte une fonction cétone : il appartient à la famille des cétoses."
      }
    ],
    "explanation": "Le fructose associe rôle alimentaire et place dans le métabolisme glucidique."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du ribose et du 2-désoxyribose :",
    "choices": [
      {
        "content": "Le ribose est associé à l'ARN.",
        "correct": true,
        "explanation": "Le ribose constitue le pentose des ribonucléotides de l'ARN."
      },
      {
        "content": "Le 2-désoxyribose est associé à l'ADN.",
        "correct": true,
        "explanation": "Le 2-désoxyribose constitue le pentose des désoxyribonucléotides de l'ADN."
      },
      {
        "content": "Ce sont des pentoses.",
        "correct": true,
        "explanation": "Ils possèdent cinq carbones."
      },
      {
        "content": "Le ribose est un hexose.",
        "correct": false,
        "explanation": "Il possède cinq carbones."
      }
    ],
    "explanation": "Les pentoses des acides nucléiques sont ribose et 2-désoxyribose."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Les propriétés physiques des oses simples incluent :",
    "choices": [
      {
        "content": "De multiples liaisons hydrogène grâce aux OH.",
        "correct": true,
        "explanation": "Les fonctions hydroxyle des oses peuvent former de nombreuses liaisons hydrogène entre molécules et avec l'eau."
      },
      {
        "content": "Une bonne hydrosolubilité.",
        "correct": true,
        "explanation": "Les nombreuses fonctions hydroxyle interagissent avec l'eau par liaisons hydrogène."
      },
      {
        "content": "Une thermodégradabilité avec caramélisation.",
        "correct": true,
        "explanation": "Sous l'effet de la chaleur, les oses peuvent subir des réactions de déshydratation et de polymérisation responsables de la caramélisation."
      },
      {
        "content": "Une absence d'interactions moléculaires.",
        "correct": false,
        "explanation": "Les liaisons hydrogène sont nombreuses."
      }
    ],
    "explanation": "Les fonctions hydroxyle expliquent l'hydrosolubilité et de nombreuses interactions."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle propriété explique principalement l'hydrosolubilité des oses simples ?",
    "choices": [
      {
        "content": "La richesse en fonctions alcool.",
        "correct": true,
        "explanation": "Les OH établissent des liaisons hydrogène avec l'eau."
      },
      {
        "content": "L'absence d'oxygène.",
        "correct": false,
        "explanation": "Les oses sont riches en oxygène."
      },
      {
        "content": "Une longue chaîne hydrocarbonée apolaire.",
        "correct": false,
        "explanation": "Ce n'est pas leur caractéristique."
      },
      {
        "content": "La présence obligatoire d'un métal.",
        "correct": false,
        "explanation": "Aucun métal n'est requis."
      }
    ],
    "explanation": "Les fonctions OH rendent les oses fortement hydrophiles."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propriétés utilisées pour caractériser les oses simples :",
    "choices": [
      {
        "content": "Un goût sucré.",
        "correct": true,
        "explanation": "De nombreux oses simples activent les récepteurs du goût sucré, avec une intensité variable selon l'ose."
      },
      {
        "content": "Un pouvoir réducteur pour les aldoses.",
        "correct": true,
        "explanation": "La fonction aldéhyde accessible après ouverture du cycle peut être oxydée, ce qui confère un pouvoir réducteur."
      },
      {
        "content": "Une réaction avec la liqueur de Fehling.",
        "correct": true,
        "explanation": "Un ose réducteur peut réduire les ions cuivre(II) de la liqueur de Fehling et former un précipité de Cu2O."
      },
      {
        "content": "Une impossibilité totale d'oxydation.",
        "correct": false,
        "explanation": "Le test de Fehling repose justement sur l'oxydation de l'aldose."
      }
    ],
    "explanation": "Le pouvoir réducteur des aldoses constitue la propriété chimique majeure de cette section."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La réaction de Fehling appliquée à un aldose :",
    "choices": [
      {
        "content": "Met en jeu une oxydation de l'aldose.",
        "correct": true,
        "explanation": "La fonction aldéhyde R-CHO est oxydée en carboxylate."
      },
      {
        "content": "Réduit des ions cuivre(II).",
        "correct": true,
        "explanation": "Les ions Cu2+ gagnent des électrons et sont réduits en cuivre(I) dans Cu2O."
      },
      {
        "content": "Conduit à un précipité rouge brique de Cu2O.",
        "correct": true,
        "explanation": "L'oxyde de cuivre(I) Cu2O forme le précipité rouge brique caractéristique d'un test positif."
      },
      {
        "content": "Réduit l'aldose en polyol.",
        "correct": false,
        "explanation": "Dans la réaction de Fehling, l'aldose est oxydé ; sa réduction en polyol correspond à une réaction différente."
      }
    ],
    "explanation": "Le sucre réducteur s'oxyde tandis que Cu2+ est réduit en Cu2O."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel composé rouge brique précipite lors d'une réaction positive à la liqueur de Fehling ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Cu2O",
        "oxyde cuivreux",
        "oxyde de cuivre I",
        "oxyde de cuivre (I)"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le précipité caractéristique est l'oxyde cuivreux Cu2O."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Comparer glucose, mannose et galactose permet d'affirmer que :",
    "choices": [
      {
        "content": "Ce sont des aldoses.",
        "correct": true,
        "explanation": "Le glucose, le mannose et le galactose portent chacun une fonction aldéhyde sous leur forme linéaire."
      },
      {
        "content": "Le mannose est épimère C2 du glucose.",
        "correct": true,
        "explanation": "Le D-mannose et le D-glucose ne diffèrent que par la configuration du carbone C2."
      },
      {
        "content": "Le galactose est épimère C4 du glucose.",
        "correct": true,
        "explanation": "Le D-galactose et le D-glucose ne diffèrent que par la configuration du carbone C4."
      },
      {
        "content": "Le galactose est un cétose.",
        "correct": false,
        "explanation": "La forme linéaire du galactose porte une fonction aldéhyde : c'est un aldose."
      }
    ],
    "explanation": "Le mannose et le galactose se distinguent du glucose par un seul centre stéréogène, respectivement en C2 et en C4."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Comparer glucose et fructose permet d'affirmer que :",
    "choices": [
      {
        "content": "Ils ont chacun six carbones.",
        "correct": true,
        "explanation": "Ce sont des hexoses."
      },
      {
        "content": "Le glucose est un aldose.",
        "correct": true,
        "explanation": "La forme linéaire du glucose porte une fonction aldéhyde."
      },
      {
        "content": "Le fructose est un cétose.",
        "correct": true,
        "explanation": "La forme linéaire du fructose porte une fonction cétone."
      },
      {
        "content": "Ils sont épimères.",
        "correct": false,
        "explanation": "Ils diffèrent par la nature/position de la fonction carbonyle."
      }
    ],
    "explanation": "Glucose et fructose sont deux hexoses de familles fonctionnelles différentes."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux associations d'épimérie correctes.",
    "choices": [
      {
        "content": "Glucose ↔ mannose : C2.",
        "correct": true,
        "explanation": "Le D-mannose ne diffère du D-glucose que par la configuration du carbone C2."
      },
      {
        "content": "Glucose ↔ galactose : C4.",
        "correct": true,
        "explanation": "Le D-galactose ne diffère du D-glucose que par la configuration du carbone C4."
      },
      {
        "content": "Glucose ↔ fructose : C2.",
        "correct": false,
        "explanation": "Ils ne sont pas épimères."
      },
      {
        "content": "Mannose ↔ glucose : C4.",
        "correct": false,
        "explanation": "Le mannose et le glucose sont épimères en C2, et non en C4."
      }
    ],
    "explanation": "Les épiméries à retenir sont glucose/mannose C2 et glucose/galactose C4."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le glucose est un aldose.",
        "correct": true,
        "explanation": "La forme linéaire du glucose porte une fonction aldéhyde."
      },
      {
        "content": "Le fructose est un cétose.",
        "correct": true,
        "explanation": "La forme linéaire du fructose porte une fonction cétone."
      },
      {
        "content": "Le ribose est associé à l'ARN.",
        "correct": true,
        "explanation": "Le ribose constitue le pentose des ribonucléotides de l'ARN."
      },
      {
        "content": "Les aldoses possèdent un pouvoir réducteur.",
        "correct": true,
        "explanation": "L'ouverture du cycle rend accessible une fonction aldéhyde oxydable, à l'origine du pouvoir réducteur."
      },
      {
        "content": "Fehling positif donne un précipité rouge brique.",
        "correct": true,
        "explanation": "Le précipité rouge brique formé est l'oxyde de cuivre(I) Cu2O."
      },
      {
        "content": "Le mannose est épimère C4 du glucose.",
        "correct": false,
        "explanation": "Le mannose est l'épimère en C2 du glucose."
      },
      {
        "content": "Le galactose est un cétose.",
        "correct": false,
        "explanation": "Le galactose est un aldose, car sa forme linéaire porte une fonction aldéhyde."
      },
      {
        "content": "Les oses sont insolubles dans l'eau.",
        "correct": false,
        "explanation": "Leurs nombreuses fonctions hydroxyle rendent les oses généralement hydrosolubles."
      },
      {
        "content": "Le fructose est absent du saccharose.",
        "correct": false,
        "explanation": "Il y est présent."
      },
      {
        "content": "La dihydroxyacétone est un aldose.",
        "correct": false,
        "explanation": "La dihydroxyacétone porte une fonction cétone : c'est un cétotriose."
      }
    ],
    "explanation": "Cette sélection consolide oses simples, propriétés et test de Fehling."
  }
];
