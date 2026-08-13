import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.7 – Section D – Acides, bases et acides nucléiques
 */

export const UE14_CH11_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 79,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans la partie « acides et bases nucléiques », quelles définitions électroniques donne la fiche ?",
    "choices": [
      {
        "content": "Une base est un composé capable de donner des électrons.",
        "correct": true,
        "explanation": "Définition du support."
      },
      {
        "content": "Un acide est un composé capable de capter des électrons.",
        "correct": true,
        "explanation": "Définition du support."
      },
      {
        "content": "Une base est définie ici comme un accepteur d'électrons.",
        "correct": false,
        "explanation": "La fiche dit l'inverse."
      },
      {
        "content": "Un acide est défini ici comme un donneur d'électrons.",
        "correct": false,
        "explanation": "La fiche dit l'inverse."
      }
    ],
    "explanation": "Cette partie du chapitre emploie explicitement un raisonnement donneur/accepteur d'électrons."
  },
  {
    "order": 80,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Selon la définition électronique de cette section, quel comportement correspond à une base ?",
    "choices": [
      {
        "content": "Donner des électrons.",
        "correct": true,
        "explanation": "Définition de la fiche."
      },
      {
        "content": "Capter uniquement des protons sans autre définition.",
        "correct": false,
        "explanation": "Ce n'est pas la définition électronique demandée ici."
      },
      {
        "content": "Capter des électrons.",
        "correct": false,
        "explanation": "C'est la définition de l'acide dans cette section."
      },
      {
        "content": "Libérer obligatoirement CO2.",
        "correct": false,
        "explanation": "Cela concerne la décarboxylation."
      }
    ],
    "explanation": "La base est présentée comme donneuse d'électrons."
  },
  {
    "order": 81,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des bases nucléiques selon la fiche :",
    "choices": [
      {
        "content": "Elles contiennent des atomes d'azote.",
        "correct": true,
        "explanation": "Le support le précise."
      },
      {
        "content": "Elles peuvent contenir des atomes d'oxygène.",
        "correct": true,
        "explanation": "Le support cite O et N comme constituants."
      },
      {
        "content": "Elles sont riches en électrons.",
        "correct": true,
        "explanation": "Point explicitement donné."
      },
      {
        "content": "Elles sont présentées comme des nucléophiles.",
        "correct": true,
        "explanation": "Conséquence de leur caractère basique."
      }
    ],
    "explanation": "Le support relie richesse électronique, basicité et nucléophilie des bases nucléiques."
  },
  {
    "order": 82,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Pourquoi les bases nucléiques sont-elles décrites comme nucléophiles dans la fiche ?",
    "choices": [
      {
        "content": "Parce qu'elles sont riches en électrons et peuvent en donner.",
        "correct": true,
        "explanation": "C'est le raisonnement du support."
      },
      {
        "content": "Parce qu'elles sont de très bons électrophiles.",
        "correct": false,
        "explanation": "La fiche les décrit comme nucléophiles."
      },
      {
        "content": "Parce qu'elles perdent toujours CO2.",
        "correct": false,
        "explanation": "Sans rapport."
      },
      {
        "content": "Parce qu'elles ne contiennent aucun hétéroatome.",
        "correct": false,
        "explanation": "O et N sont cités."
      }
    ],
    "explanation": "La nucléophilie est reliée à la capacité de donner des électrons."
  },
  {
    "order": 83,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Selon la fiche, les dérivés halogénés sont préoccupants pour les êtres vivants car :",
    "choices": [
      {
        "content": "Ils sont décrits comme de bons électrophiles.",
        "correct": true,
        "explanation": "Le support les oppose aux bases nucléiques nucléophiles."
      },
      {
        "content": "Ils peuvent réagir avec les bases nucléiques.",
        "correct": true,
        "explanation": "Point central de l'encadré de toxicité."
      },
      {
        "content": "Cette réaction peut modifier les bases nucléiques.",
        "correct": true,
        "explanation": "La fiche parle de bases modifiées/mutées."
      },
      {
        "content": "Ils sont chimiquement inertes vis-à-vis des bases nucléiques.",
        "correct": false,
        "explanation": "Le support dit l'inverse."
      }
    ],
    "explanation": "La toxicité est expliquée, dans le modèle de la fiche, par la rencontre d'électrophiles halogénés et de bases nucléiques nucléophiles."
  },
  {
    "order": 84,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles conséquences la fiche associe-t-elle à la modification des bases nucléiques par des dérivés halogénés ?",
    "choices": [
      {
        "content": "Des bases nucléiques modifiées.",
        "correct": true,
        "explanation": "Conséquence directe."
      },
      {
        "content": "Des propriétés mutagènes.",
        "correct": true,
        "explanation": "Terme explicitement cité."
      },
      {
        "content": "Des propriétés cancérigènes.",
        "correct": true,
        "explanation": "Terme explicitement cité."
      },
      {
        "content": "Une protection systématique de l'ADN contre toute mutation.",
        "correct": false,
        "explanation": "Le support décrit au contraire un risque de modification."
      }
    ],
    "explanation": "La banque reprend ici le lien toxicologique tel qu'il est formulé dans le support."
  },
  {
    "order": 85,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des nucléosides représentés dans la fiche :",
    "choices": [
      {
        "content": "Le ribose est associé à la série ARN.",
        "correct": true,
        "explanation": "Indication du support."
      },
      {
        "content": "Le 2-désoxyribose est associé à la série ADN.",
        "correct": true,
        "explanation": "Indication du support."
      },
      {
        "content": "La différence entre les deux sucres est explicitement utilisée pour distinguer ARN et ADN.",
        "correct": true,
        "explanation": "C'est le repère donné."
      },
      {
        "content": "Le ribose est présenté comme le sucre de l'ADN dans cette figure.",
        "correct": false,
        "explanation": "Il est associé à l'ARN."
      }
    ],
    "explanation": "La fiche relie nucléosides de l'ARN au ribose et nucléosides de l'ADN au 2-désoxyribose."
  },
  {
    "order": 86,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel sucre est associé à l'ARN dans la fiche ?",
    "choices": [
      {
        "content": "Ribose.",
        "correct": true,
        "explanation": "Association explicite."
      },
      {
        "content": "2-désoxyribose.",
        "correct": false,
        "explanation": "Associé à l'ADN."
      },
      {
        "content": "Glucose.",
        "correct": false,
        "explanation": "Ce n'est pas le sucre indiqué."
      },
      {
        "content": "Fructose.",
        "correct": false,
        "explanation": "Ce n'est pas le sucre indiqué."
      }
    ],
    "explanation": "Le ribose est le sucre représenté pour la série ARN."
  },
  {
    "order": 87,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel sucre est associé à l'ADN dans la fiche ?",
    "choices": [
      {
        "content": "2-désoxyribose.",
        "correct": true,
        "explanation": "Association explicite."
      },
      {
        "content": "Ribose.",
        "correct": false,
        "explanation": "Associé à l'ARN."
      },
      {
        "content": "Galactose.",
        "correct": false,
        "explanation": "Non indiqué."
      },
      {
        "content": "Acide ribonucléique.",
        "correct": false,
        "explanation": "Ce n'est pas un sucre."
      }
    ],
    "explanation": "Le 2-désoxyribose est le sucre représenté pour la série ADN."
  },
  {
    "order": 88,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des nucléotides dans la fiche :",
    "choices": [
      {
        "content": "Ils portent un groupement phosphate.",
        "correct": true,
        "explanation": "Structure représentée."
      },
      {
        "content": "Le phosphate est responsable de leur acidité dans le modèle présenté.",
        "correct": true,
        "explanation": "Point explicite."
      },
      {
        "content": "Le phosphate est comparé au carboxylate des acides carboxyliques.",
        "correct": true,
        "explanation": "Comparaison donnée."
      },
      {
        "content": "Le phosphate est décrit comme responsable de leur caractère alcalin exclusif.",
        "correct": false,
        "explanation": "La fiche l'associe à l'acidité."
      }
    ],
    "explanation": "La fonction phosphate explique l'appellation « acides nucléiques » dans le raisonnement du support."
  },
  {
    "order": 89,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quel enchaînement logique décrit correctement la réactivité toxique des dérivés halogénés selon la fiche ?",
    "choices": [
      {
        "content": "Dérivé halogéné : électrophile.",
        "correct": true,
        "explanation": "Rôle attribué."
      },
      {
        "content": "Base nucléique : nucléophile.",
        "correct": true,
        "explanation": "Rôle attribué."
      },
      {
        "content": "Rencontre des deux → réaction.",
        "correct": true,
        "explanation": "Conséquence chimique."
      },
      {
        "content": "Réaction → base nucléique potentiellement modifiée.",
        "correct": true,
        "explanation": "Conséquence décrite."
      }
    ],
    "explanation": "Le support présente un raisonnement électrophile/nucléophile simple pour expliquer la toxicité."
  },
  {
    "order": 90,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare les rôles électroniques d'une base nucléique et d'un dérivé halogéné dans le modèle de la fiche. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La base nucléique est donneuse d'électrons.",
        "correct": true,
        "explanation": "Comportement de base/nucléophile."
      },
      {
        "content": "Le dérivé halogéné est présenté comme électrophile.",
        "correct": true,
        "explanation": "Il reçoit l'attaque du nucléophile."
      },
      {
        "content": "Leur complémentarité électronique favorise la réaction.",
        "correct": true,
        "explanation": "Raisonnement du support."
      },
      {
        "content": "Ils sont tous deux décrits comme exclusivement nucléophiles.",
        "correct": false,
        "explanation": "Le dérivé halogéné est électrophile."
      }
    ],
    "explanation": "Le risque de réaction découle de la complémentarité nucléophile-électrophile."
  },
  {
    "order": 91,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un composé riche en électrons au niveau de ses hétéroatomes est décrit comme une base dans cette section. Que peut-on en déduire selon le support ?",
    "choices": [
      {
        "content": "Il peut donner des électrons.",
        "correct": true,
        "explanation": "Définition de la base."
      },
      {
        "content": "Il peut présenter un caractère nucléophile.",
        "correct": true,
        "explanation": "Lien explicite avec les bases nucléiques."
      },
      {
        "content": "Il réagit potentiellement avec un électrophile.",
        "correct": true,
        "explanation": "Conséquence du caractère nucléophile."
      },
      {
        "content": "Il est nécessairement un dérivé halogéné.",
        "correct": false,
        "explanation": "Ce sont au contraire les électrophiles du modèle toxicologique."
      }
    ],
    "explanation": "Le support relie base électronique et nucléophile."
  },
  {
    "order": 92,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quel repère permet de distinguer nucléoside et nucléotide dans cette partie de la fiche ?",
    "choices": [
      {
        "content": "Le nucléotide porte un groupement phosphate dans les représentations.",
        "correct": true,
        "explanation": "Point visuel et fonctionnel."
      },
      {
        "content": "Le phosphate est responsable de l'acidité des nucléotides.",
        "correct": true,
        "explanation": "Propriété associée."
      },
      {
        "content": "Les nucléosides sont présentés avec un sucre lié à une base.",
        "correct": true,
        "explanation": "Schémas de la fiche."
      },
      {
        "content": "Le nucléoside est défini ici par la présence obligatoire d'un phosphate.",
        "correct": false,
        "explanation": "Le phosphate caractérise les nucléotides représentés."
      }
    ],
    "explanation": "Le phosphate est le repère majeur du nucléotide dans le support."
  },
  {
    "order": 93,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du phosphate des nucléotides :",
    "choices": [
      {
        "content": "Il est comparé au groupement carboxylate.",
        "correct": true,
        "explanation": "Comparaison explicite."
      },
      {
        "content": "Il est responsable de l'acidité des nucléotides.",
        "correct": true,
        "explanation": "Point explicitement écrit."
      },
      {
        "content": "Il fait partie des éléments représentés dans les nucléotides.",
        "correct": true,
        "explanation": "Schémas."
      },
      {
        "content": "Il transforme le nucléotide en dérivé halogéné.",
        "correct": false,
        "explanation": "Aucun halogène n'est impliqué."
      }
    ],
    "explanation": "Le phosphate relie la chimie des acides à celle des acides nucléiques."
  },
  {
    "order": 94,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un étudiant affirme : « une base nucléique est un bon électrophile ». Quelle correction correspond à la fiche ?",
    "choices": [
      {
        "content": "La base nucléique est décrite comme nucléophile.",
        "correct": true,
        "explanation": "Point du support."
      },
      {
        "content": "Elle est riche en électrons.",
        "correct": true,
        "explanation": "Raison donnée."
      },
      {
        "content": "Elle peut donner des électrons.",
        "correct": true,
        "explanation": "Comportement de base."
      },
      {
        "content": "Le bon électrophile de l'exemple toxicologique est le dérivé halogéné.",
        "correct": true,
        "explanation": "Opposition du support."
      }
    ],
    "explanation": "La confusion entre nucléophile et électrophile est un piège central de cette section."
  },
  {
    "order": 95,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans le modèle toxicologique du support, quelles étapes peuvent relier un dérivé halogéné à un effet mutagène ?",
    "choices": [
      {
        "content": "Réactivité électrophile du dérivé halogéné.",
        "correct": true,
        "explanation": "Première propriété."
      },
      {
        "content": "Attaque/réaction avec une base nucléique nucléophile.",
        "correct": true,
        "explanation": "Interaction chimique."
      },
      {
        "content": "Modification de la base nucléique.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "Propriétés mutagènes possibles de la base modifiée.",
        "correct": true,
        "explanation": "Lien indiqué."
      }
    ],
    "explanation": "La fiche propose une chaîne causale simple allant de la réactivité chimique à la modification des bases."
  },
  {
    "order": 96,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel groupement est responsable de l'acidité des nucléotides selon la fiche ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "phosphate",
        "groupement phosphate",
        "groupe phosphate"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le support attribue l'acidité des nucléotides au groupement phosphate."
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare un nucléoside de série ARN et un nucléoside de série ADN dans la fiche. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le premier est associé au ribose.",
        "correct": true,
        "explanation": "Série ARN."
      },
      {
        "content": "Le second est associé au 2-désoxyribose.",
        "correct": true,
        "explanation": "Série ADN."
      },
      {
        "content": "Le sucre constitue un repère de distinction.",
        "correct": true,
        "explanation": "C'est précisément ce que montrent les schémas."
      },
      {
        "content": "Les deux sont associés au même sucre sans distinction.",
        "correct": false,
        "explanation": "Le support les distingue."
      }
    ],
    "explanation": "Le type de pentose différencie les deux séries dans la fiche."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quel niveau de détail la fiche fournit-elle sur les bases nucléiques ?",
    "choices": [
      {
        "content": "Leur caractère riche en électrons.",
        "correct": true,
        "explanation": "Donné."
      },
      {
        "content": "Leur comportement de bases et de nucléophiles.",
        "correct": true,
        "explanation": "Donné."
      },
      {
        "content": "Leur réactivité avec des électrophiles halogénés.",
        "correct": true,
        "explanation": "Donnée."
      },
      {
        "content": "Un mécanisme détaillé de réplication de l'ADN.",
        "correct": false,
        "explanation": "Ce n'est pas le contenu de cette fiche."
      }
    ],
    "explanation": "La banque reste centrée sur les propriétés chimiques présentées, sans ajouter de biologie moléculaire extérieure."
  },
  {
    "order": 99,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux associations sucre / série d'acide nucléique correctes selon la fiche.",
    "choices": [
      {
        "content": "Ribose → ARN.",
        "correct": true,
        "explanation": "Association du support."
      },
      {
        "content": "2-désoxyribose → ADN.",
        "correct": true,
        "explanation": "Association du support."
      },
      {
        "content": "Ribose → ADN uniquement.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "2-désoxyribose → ARN uniquement.",
        "correct": false,
        "explanation": "Non."
      }
    ],
    "explanation": "Les deux pentoses permettent de distinguer les nucléosides des séries ARN et ADN."
  },
  {
    "order": 100,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes selon la fiche.",
    "choices": [
      {
        "content": "Une base électronique donne des électrons.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Une base nucléique est décrite comme nucléophile.",
        "correct": true,
        "explanation": "Propriété."
      },
      {
        "content": "Un dérivé halogéné est décrit comme électrophile.",
        "correct": true,
        "explanation": "Modèle toxicologique."
      },
      {
        "content": "Le ribose est associé à l'ARN.",
        "correct": true,
        "explanation": "Nucléosides."
      },
      {
        "content": "Le phosphate est responsable de l'acidité des nucléotides.",
        "correct": true,
        "explanation": "Nucléotides."
      },
      {
        "content": "Le 2-désoxyribose est associé à l'ARN dans la fiche.",
        "correct": false,
        "explanation": "Il est associé à l'ADN."
      },
      {
        "content": "Les bases nucléiques sont pauvres en électrons.",
        "correct": false,
        "explanation": "Elles sont riches en électrons."
      },
      {
        "content": "Les dérivés halogénés sont décrits comme chimiquement inertes vis-à-vis des bases.",
        "correct": false,
        "explanation": "Ils peuvent réagir avec elles."
      },
      {
        "content": "Le phosphate est absent des nucléotides représentés.",
        "correct": false,
        "explanation": "Il est présent."
      },
      {
        "content": "La modification des bases est présentée comme protectrice contre les mutations.",
        "correct": false,
        "explanation": "La fiche évoque des propriétés mutagènes/cancérigènes."
      }
    ],
    "explanation": "Cette sélection consolide le vocabulaire électronique et les repères des acides nucléiques."
  }
];
