import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.7 – Section D – Acides, bases et acides nucléiques
 */

export const UE14_CH11_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 79,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans la partie « acides et bases nucléiques », quelles définitions électroniques donne la?",
    "choices": [
      {
        "content": "Un acide est défini ici comme un donneur d'électrons.",
        "correct": false,
        "explanation": "La dit l'inverse: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      },
      {
        "content": "Une base est un composé capable de donner des électrons.",
        "correct": true,
        "explanation": "Définition: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un acide est un composé capable de capter des électrons.",
        "correct": true,
        "explanation": "Définition: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une base est définie ici comme un accepteur d'électrons.",
        "correct": false,
        "explanation": "La dit l'inverse: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Cette partie du chapitre emploie explicitement un raisonnement donneur/accepteur d'électrons."
  },
  {
    "order": 80,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Selon la définition électronique de cette section, quel comportement correspond à une base?",
    "choices": [
      {
        "content": "Capter uniquement des protons sans autre définition.",
        "correct": false,
        "explanation": "Ce n'est pas la définition électronique demandée ici."
      },
      {
        "content": "Donner des électrons.",
        "correct": true,
        "explanation": "Définition: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Capter des électrons.",
        "correct": false,
        "explanation": "C'est la définition de l'acide dans cette section."
      },
      {
        "content": "Libérer obligatoirement CO2.",
        "correct": false,
        "explanation": "Cela concerne la décarboxylation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Électrophile donneur de doublet.",
        "correct": false,
        "explanation": "Un électrophile est au contraire un accepteur d’électrons."
      }
    ],
    "explanation": "La base est présentée comme donneuse d'électrons."
  },
  {
    "order": 81,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des bases nucléiques:",
    "choices": [
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      },
      {
        "content": "Elles contiennent des atomes d'azote.",
        "correct": true,
        "explanation": "Le support le précise: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Elles peuvent contenir des atomes d'oxygène.",
        "correct": true,
        "explanation": "Le support cite O et N comme constituants."
      },
      {
        "content": "Elles sont riches en électrons.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
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
    "question": "Pourquoi les bases nucléiques sont-elles décrites comme nucléophiles?",
    "choices": [
      {
        "content": "Parce qu'elles ne contiennent aucun hétéroatome.",
        "correct": false,
        "explanation": "O et N sont cités."
      },
      {
        "content": "Électrophile donneur de doublet.",
        "correct": false,
        "explanation": "Un électrophile est au contraire un accepteur d’électrons."
      },
      {
        "content": "Parce qu'elles sont riches en électrons et peuvent en donner.",
        "correct": true,
        "explanation": "C'est le raisonnement: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Parce qu'elles sont de très bons électrophiles.",
        "correct": false,
        "explanation": "La les décrit comme nucléophiles."
      },
      {
        "content": "Parce qu'elles perdent toujours CO2.",
        "correct": false,
        "explanation": "Sans rapport: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La nucléophilie est reliée à la capacité de donner des électrons."
  },
  {
    "order": 83,
    "difficulty": "EASY",
    "format": "QRM",
    "question": ", les dérivés halogénés sont préoccupants pour les êtres vivants car:",
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
        "explanation": "La parle de bases modifiées/mutées."
      },
      {
        "content": "Ils sont chimiquement inertes vis-à-vis des bases nucléiques.",
        "correct": false,
        "explanation": "Le support dit l'inverse: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      }
    ],
    "explanation": "La toxicité est expliquée, dans le modèle, par la rencontre d'électrophiles halogénés et de bases nucléiques nucléophiles."
  },
  {
    "order": 84,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles conséquences la associe-t-elle à la modification des bases nucléiques par des dérivés halogénés?",
    "choices": [
      {
        "content": "Une protection systématique de l'ADN contre toute mutation.",
        "correct": false,
        "explanation": "Le support décrit au contraire un risque de modification."
      },
      {
        "content": "Des dérivés halogénés électrophiles peuvent réagir avec des sites nucléophiles des bases nucléiques.",
        "correct": true,
        "explanation": "Cette réactivité peut modifier chimiquement les bases et altérer l’information génétique."
      },
      {
        "content": "Des bases nucléiques modifiées.",
        "correct": true,
        "explanation": "Conséquence directe: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Des propriétés mutagènes.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Des propriétés cancérigènes.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      }
    ],
    "explanation": "La banque reprend ici le lien toxicologique tel qu'il est formulé."
  },
  {
    "order": 85,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des nucléosides représentés:",
    "choices": [
      {
        "content": "Le 2-désoxyribose est associé à la série ADN.",
        "correct": true,
        "explanation": "Indication: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La différence entre les deux sucres est explicitement utilisée pour distinguer ARN et ADN.",
        "correct": true,
        "explanation": "C'est le repère donné: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le ribose est présenté comme le sucre de l'ADN dans cette figure.",
        "correct": false,
        "explanation": "Il est associé à l'ARN."
      },
      {
        "content": "Le ribose est le sucre caractéristique de la série ADN dans le cadre présenté.",
        "correct": false,
        "explanation": "Le ribose est associé à l’ARN; l’ADN contient un 2-désoxyribose."
      },
      {
        "content": "Le ribose est associé à la série ARN.",
        "correct": true,
        "explanation": "Indication: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La relie nucléosides de l'ARN au ribose et nucléosides de l'ADN au 2-désoxyribose."
  },
  {
    "order": 86,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel sucre est associé à l'ARN?",
    "choices": [
      {
        "content": "Fructose.",
        "correct": false,
        "explanation": "Ce n'est pas le sucre indiqué."
      },
      {
        "content": "2-désoxyribose pour l’ARN.",
        "correct": false,
        "explanation": "Le 2-désoxyribose est associé à la série ADN."
      },
      {
        "content": "2-désoxyribose.",
        "correct": false,
        "explanation": "Associé à l'ADN: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Ribose.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Glucose.",
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
    "question": "Quel sucre est associé à l'ADN?",
    "choices": [
      {
        "content": "2-désoxyribose pour l’ARN.",
        "correct": false,
        "explanation": "Le 2-désoxyribose est associé à la série ADN."
      },
      {
        "content": "Ribose.",
        "correct": false,
        "explanation": "Associé à l'ARN: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Galactose.",
        "correct": false,
        "explanation": "Non indiqué: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Acide ribonucléique.",
        "correct": false,
        "explanation": "Ce n'est pas un sucre."
      },
      {
        "content": "2-désoxyribose.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      }
    ],
    "explanation": "Le 2-désoxyribose est le sucre représenté pour la série ADN."
  },
  {
    "order": 88,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des nucléotides:",
    "choices": [
      {
        "content": "Ils portent un groupement phosphate.",
        "correct": true,
        "explanation": "Structure représentée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le phosphate n’est pas responsable de leur acidité dans le modèle présenté.",
        "correct": false,
        "explanation": "La relation correcte est: « Le phosphate est responsable de leur acidité dans le modèle présenté ». La négation proposée est donc fausse."
      },
      {
        "content": "Le phosphate est comparé au carboxylate des acides carboxyliques.",
        "correct": true,
        "explanation": "Comparaison donnée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le phosphate est décrit comme responsable de leur caractère alcalin exclusif.",
        "correct": false,
        "explanation": "La l'associe à l'acidité: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le groupement phosphate contribue au caractère acide des nucléotides.",
        "correct": true,
        "explanation": "Le phosphate peut porter des charges négatives après perte de protons et explique l’acidité mise en avant dans le chapitre."
      }
    ],
    "explanation": "La fonction phosphate explique l'appellation « acides nucléiques » dans le raisonnement."
  },
  {
    "order": 89,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quel enchaînement logique décrit correctement la réactivité toxique des dérivés halogénés?",
    "choices": [
      {
        "content": "Réaction → base nucléique potentiellement modifiée.",
        "correct": true,
        "explanation": "Conséquence décrite: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      },
      {
        "content": "Dérivé halogéné: électrophile.",
        "correct": true,
        "explanation": "Rôle attribué: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Base nucléique: nucléophile.",
        "correct": true,
        "explanation": "Rôle attribué: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Rencontre des deux → réaction.",
        "correct": true,
        "explanation": "Conséquence chimique: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "un raisonnement électrophile/nucléophile simple pour expliquer la toxicité."
  },
  {
    "order": 90,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare les rôles électroniques d'une base nucléique et d'un dérivé halogéné dans le modèle. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le dérivé halogéné est présenté comme électrophile.",
        "correct": true,
        "explanation": "Il reçoit l'attaque du nucléophile."
      },
      {
        "content": "Leur complémentarité électronique favorise la réaction.",
        "correct": true,
        "explanation": "Raisonnement: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Ils sont tous deux décrits comme exclusivement nucléophiles.",
        "correct": false,
        "explanation": "Le dérivé halogéné est électrophile."
      },
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      },
      {
        "content": "La base nucléique n’est pas donneuse d'électrons.",
        "correct": false,
        "explanation": "La relation correcte est: « La base nucléique est donneuse d'électrons ». La négation proposée est donc fausse."
      }
    ],
    "explanation": "Le risque de réaction découle de la complémentarité nucléophile-électrophile."
  },
  {
    "order": 91,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un composé riche en électrons au niveau de ses hétéroatomes est décrit comme une base dans cette section. Que peut-on en déduire?",
    "choices": [
      {
        "content": "Dans la description électronique du chapitre, une base peut donner un doublet d’électrons et se comporter comme un nucléophile.",
        "correct": true,
        "explanation": "Les atomes riches en électrons peuvent fournir un doublet à un centre électrophile."
      },
      {
        "content": "Il peut donner des électrons.",
        "correct": true,
        "explanation": "Définition de la base: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Il peut présenter un caractère nucléophile.",
        "correct": true,
        "explanation": "Lien explicite avec les bases nucléiques."
      },
      {
        "content": "Il réagit potentiellement avec un électrophile.",
        "correct": true,
        "explanation": "Conséquence du caractère nucléophile: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "question": "Quel repère permet de distinguer nucléoside et nucléotide dans cette partie?",
    "choices": [
      {
        "content": "Les nucléosides sont présentés avec un sucre lié à une base.",
        "correct": true,
        "explanation": "Schémas: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le nucléoside est défini ici par la présence obligatoire d'un phosphate.",
        "correct": false,
        "explanation": "Le phosphate caractérise les nucléotides représentés."
      },
      {
        "content": "Le groupement phosphate contribue au caractère acide des nucléotides.",
        "correct": true,
        "explanation": "Le phosphate peut porter des charges négatives après perte de protons et explique l’acidité mise en avant dans le chapitre."
      },
      {
        "content": "Le nucléotide porte un groupement phosphate dans les représentations.",
        "correct": true,
        "explanation": "Point visuel et fonctionnel: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le phosphate n’est pas responsable de l'acidité des nucléotides.",
        "correct": false,
        "explanation": "La relation correcte est: « Le phosphate est responsable de l'acidité des nucléotides ». La négation proposée est donc fausse."
      }
    ],
    "explanation": "Le phosphate est le repère majeur du nucléotide."
  },
  {
    "order": 93,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du phosphate des nucléotides:",
    "choices": [
      {
        "content": "Il est comparé au groupement carboxylate.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Il est responsable de l'acidité des nucléotides.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Il fait partie des éléments représentés dans les nucléotides.",
        "correct": true,
        "explanation": "Schémas: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Il transforme le nucléotide en dérivé halogéné.",
        "correct": false,
        "explanation": "Aucun halogène n'est impliqué: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un nucléotide ne contient jamais de groupement phosphate.",
        "correct": false,
        "explanation": "Le phosphate distingue le nucléotide du nucléoside dans la présentation du chapitre."
      }
    ],
    "explanation": "Le phosphate relie la chimie des acides à celle des acides nucléiques."
  },
  {
    "order": 94,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un étudiant affirme: « une base nucléique est un bon électrophile ». Quelle correction correspond à la?",
    "choices": [
      {
        "content": "Le bon électrophile de l'exemple toxicologique est le dérivé halogéné.",
        "correct": true,
        "explanation": "Opposition: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      },
      {
        "content": "La base nucléique est décrite comme nucléophile.",
        "correct": true,
        "explanation": "Point: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Elle est riche en électrons.",
        "correct": true,
        "explanation": "Raison donnée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Elle peut donner des électrons.",
        "correct": true,
        "explanation": "Comportement de base: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La confusion entre nucléophile et électrophile est un piège central de cette section."
  },
  {
    "order": 95,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans le modèle toxicologique, quelles étapes peuvent relier un dérivé halogéné à un effet mutagène?",
    "choices": [
      {
        "content": "Attaque/réaction avec une base nucléique nucléophile.",
        "correct": true,
        "explanation": "Interaction chimique: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Modification de la base nucléique.",
        "correct": true,
        "explanation": "Conséquence: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Propriétés mutagènes possibles de la base modifiée.",
        "correct": true,
        "explanation": "Lien indiqué: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      },
      {
        "content": "Réactivité électrophile du dérivé halogéné.",
        "correct": true,
        "explanation": "Première propriété: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La propose une chaîne causale simple allant de la réactivité chimique à la modification des bases."
  },
  {
    "order": 96,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel groupement est responsable de l'acidité des nucléotides?",
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
    "question": "On compare un nucléoside de série ARN et un nucléoside de série ADN. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le sucre constitue un repère de distinction.",
        "correct": true,
        "explanation": "C'est précisément ce que montrent les schémas."
      },
      {
        "content": "Les deux sont associés au même sucre sans distinction.",
        "correct": false,
        "explanation": "Le support les distingue: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le ribose est le sucre caractéristique de la série ADN dans le cadre présenté.",
        "correct": false,
        "explanation": "Le ribose est associé à l’ARN; l’ADN contient un 2-désoxyribose."
      },
      {
        "content": "Le premier est associé au ribose.",
        "correct": true,
        "explanation": "Série ARN: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le second est associé au 2-désoxyribose.",
        "correct": true,
        "explanation": "Série ADN: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le type de pentose différencie les deux séries."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quel niveau de détail la fournit-elle sur les bases nucléiques?",
    "choices": [
      {
        "content": "Leur caractère riche en électrons.",
        "correct": true,
        "explanation": "Donné: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Leur comportement de bases et de nucléophiles.",
        "correct": true,
        "explanation": "Donné: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Leur réactivité avec des électrophiles halogénés.",
        "correct": true,
        "explanation": "Donnée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un mécanisme détaillé de réplication de l'ADN.",
        "correct": false,
        "explanation": "Ce n'est pas le contenu."
      },
      {
        "content": "Dans la description électronique du chapitre, une base peut donner un doublet d’électrons et se comporter comme un nucléophile.",
        "correct": true,
        "explanation": "Les atomes riches en électrons peuvent fournir un doublet à un centre électrophile."
      }
    ],
    "explanation": "La banque reste centrée sur les propriétés chimiques présentées, sans ajouter de biologie moléculaire extérieure."
  },
  {
    "order": 99,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux associations sucre / série d'acide nucléique correctes.",
    "choices": [
      {
        "content": "2-désoxyribose → ARN uniquement.",
        "correct": false,
        "explanation": "Cette affirmation ne correspond pas à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le ribose est le sucre caractéristique de la série ADN dans le cadre présenté.",
        "correct": false,
        "explanation": "Le ribose est associé à l’ARN; l’ADN contient un 2-désoxyribose."
      },
      {
        "content": "Ribose → ARN.",
        "correct": true,
        "explanation": "Association: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "2-désoxyribose → ADN.",
        "correct": true,
        "explanation": "Association: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Ribose → ADN uniquement.",
        "correct": false,
        "explanation": "Cette affirmation ne correspond pas à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Les deux pentoses permettent de distinguer les nucléosides des séries ARN et ADN."
  },
  {
    "order": 100,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Une base électronique donne des électrons.",
        "correct": true,
        "explanation": "Définition : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une base nucléique est décrite comme nucléophile.",
        "correct": true,
        "explanation": "Propriété : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un dérivé halogéné est décrit comme électrophile.",
        "correct": true,
        "explanation": "Modèle toxicologique : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le ribose est associé à l'ARN.",
        "correct": true,
        "explanation": "Nucléosides : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le phosphate est responsable de l'acidité des nucléotides.",
        "correct": true,
        "explanation": "Nucléotides : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le 2-désoxyribose est associé à l'ARN.",
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
        "explanation": "Il est présent : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La modification des bases est présentée comme protectrice contre les mutations.",
        "correct": false,
        "explanation": "La évoque des propriétés mutagènes/cancérigènes."
      }
    ],
    "explanation": "Cette sélection consolide le vocabulaire électronique et les repères des acides nucléiques."
  }
];
