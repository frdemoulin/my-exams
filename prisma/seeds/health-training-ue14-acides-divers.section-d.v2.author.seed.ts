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
        "explanation": "La proposition est fausse : un acide est un composé capable de capter des électrons."
      },
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      },
      {
        "content": "Une base est un composé capable de donner des électrons.",
        "correct": true,
        "explanation": "Par définition, une base est un composé capable de donner des électrons."
      },
      {
        "content": "Un acide est un composé capable de capter des électrons.",
        "correct": true,
        "explanation": "Par définition, un acide est un composé capable de capter des électrons."
      },
      {
        "content": "Une base est définie ici comme un accepteur d'électrons.",
        "correct": false,
        "explanation": "La proposition est fausse : une base est un composé capable de donner des électrons."
      }
    ],
    "explanation": "Par définition, une base est un composé capable de donner des électrons."
  },
  {
    "order": 80,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Selon la définition électronique retenue, quel comportement correspond à une base ?",
    "choices": [
      {
        "content": "Capter uniquement des protons sans autre définition.",
        "correct": false,
        "explanation": "Ce n'est pas la définition électronique demandée ici."
      },
      {
        "content": "Donner des électrons.",
        "correct": true,
        "explanation": "Par définition, donner des électrons."
      },
      {
        "content": "Capter des électrons.",
        "correct": false,
        "explanation": "Capter un doublet d’électrons correspond au comportement d’un acide électronique, pas d’une base."
      },
      {
        "content": "Libérer obligatoirement CO2.",
        "correct": false,
        "explanation": "La libération de $\\ce{CO2}$ caractérise une décarboxylation ; elle n’est pas une conséquence générale de la réactivité des dérivés halogénés."
      },
      {
        "content": "Électrophile donneur de doublet.",
        "correct": false,
        "explanation": "Un électrophile est au contraire un accepteur d’électrons."
      }
    ],
    "explanation": "Ce n'est pas la définition électronique demandée ici."
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
        "explanation": "Les bases nucléiques comportent des hétéroatomes azotés dont certains portent des doublets électroniques."
      },
      {
        "content": "Elles peuvent contenir des atomes d'oxygène.",
        "correct": true,
        "explanation": "Les bases nucléiques contiennent notamment des atomes d'azote et, pour certaines, d'oxygène."
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
    "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
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
        "explanation": "La richesse électronique de certains atomes permet aux bases nucléiques de donner un doublet et d’agir comme nucléophiles."
      },
      {
        "content": "Parce qu'elles sont de très bons électrophiles.",
        "correct": false,
        "explanation": "La proposition est fausse : parce qu'elles sont riches en électrons et peuvent en donner."
      },
      {
        "content": "Parce qu'elles perdent toujours CO2.",
        "correct": false,
        "explanation": "Cette proposition ne renseigne pas le caractère nucléophile ou électrophile étudié ici."
      }
    ],
    "explanation": "O et N sont cités."
  },
  {
    "order": 83,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi certains dérivés halogénés sont-ils préoccupants pour les êtres vivants ?",
    "choices": [
      {
        "content": "Ils sont décrits comme de bons électrophiles.",
        "correct": true,
        "explanation": "Les dérivés halogénés électrophiles peuvent réagir avec des sites riches en électrons des bases nucléiques."
      },
      {
        "content": "Ils peuvent réagir avec les bases nucléiques.",
        "correct": true,
        "explanation": "Point central de l'encadré de toxicité."
      },
      {
        "content": "Cette réaction peut modifier les bases nucléiques.",
        "correct": true,
        "explanation": "La réaction covalente d’un électrophile avec une base nucléique peut modifier sa structure et favoriser une mutation."
      },
      {
        "content": "Ils sont chimiquement inertes vis-à-vis des bases nucléiques.",
        "correct": false,
        "explanation": "Certains dérivés halogénés sont électrophiles et peuvent réagir avec des sites nucléophiles des bases nucléiques."
      },
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      }
    ],
    "explanation": "Les dérivés halogénés électrophiles peuvent réagir avec des sites riches en électrons des bases nucléiques."
  },
  {
    "order": 84,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles conséquences peuvent résulter de la modification des bases nucléiques par des dérivés halogénés ?",
    "choices": [
      {
        "content": "Une protection systématique de l'ADN contre toute mutation.",
        "correct": false,
        "explanation": "Une modification chimique d’une base nucléique peut au contraire favoriser une mutation ; elle n’assure aucune protection systématique de l’ADN."
      },
      {
        "content": "Des dérivés halogénés électrophiles peuvent réagir avec des sites nucléophiles des bases nucléiques.",
        "correct": true,
        "explanation": "Cette réactivité peut modifier chimiquement les bases et altérer l’information génétique."
      },
      {
        "content": "Des bases nucléiques modifiées.",
        "correct": true,
        "explanation": "Une réaction covalente avec un électrophile peut modifier la structure d’une base nucléique."
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
    "explanation": "Une réaction covalente avec un électrophile peut modifier la structure d’une base nucléique. Cette réactivité peut modifier chimiquement les bases et altérer l’information génétique."
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
        "explanation": "Le 2-désoxyribose est le pentose caractéristique de la série ADN."
      },
      {
        "content": "La différence entre les deux sucres est explicitement utilisée pour distinguer ARN et ADN.",
        "correct": true,
        "explanation": "Le ribose caractérise la série ARN, tandis que le 2-désoxyribose caractérise la série ADN."
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
        "explanation": "Le ribose est le pentose caractéristique de la série ARN."
      }
    ],
    "explanation": "Le ribose caractérise la série ARN, tandis que le 2-désoxyribose caractérise la série ADN."
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
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Ribose.",
        "correct": true,
        "explanation": "Le ribose est le sucre associé aux nucléosides de la série ARN."
      },
      {
        "content": "Glucose.",
        "correct": false,
        "explanation": "Ce n'est pas le sucre indiqué."
      }
    ],
    "explanation": "Ce n'est pas le sucre indiqué."
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
        "explanation": "Le ribose est associé à l’ARN et non à l’ADN."
      },
      {
        "content": "Galactose.",
        "correct": false,
        "explanation": "Le galactose n’est pas le pentose constitutif de l’ADN ; celui-ci contient du 2-désoxyribose."
      },
      {
        "content": "Acide ribonucléique.",
        "correct": false,
        "explanation": "Ce n'est pas un sucre."
      },
      {
        "content": "2-désoxyribose.",
        "correct": true,
        "explanation": "Le 2-désoxyribose est le sucre associé aux nucléosides de la série ADN."
      }
    ],
    "explanation": "Le 2-désoxyribose est associé à la série ADN."
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
        "explanation": "Un nucléotide se distingue d’un nucléoside notamment par la présence d’un groupement phosphate."
      },
      {
        "content": "Le phosphate n’est pas responsable de leur acidité dans le modèle présenté.",
        "correct": false,
        "explanation": "La relation correcte est: « Le phosphate est responsable de leur acidité dans le modèle présenté ». La négation proposée est donc fausse."
      },
      {
        "content": "Le phosphate est comparé au carboxylate des acides carboxyliques.",
        "correct": true,
        "explanation": "Le phosphate et le carboxylate sont tous deux présentés comme des groupements pouvant porter une charge négative."
      },
      {
        "content": "Le phosphate est décrit comme responsable de leur caractère alcalin exclusif.",
        "correct": false,
        "explanation": "Le groupement phosphate contribue au caractère acide des nucléotides ; il n’est pas responsable d’un caractère alcalin exclusif."
      },
      {
        "content": "Le groupement phosphate contribue au caractère acide des nucléotides.",
        "correct": true,
        "explanation": "Le phosphate peut perdre des protons et porter des charges négatives ; il contribue ainsi au caractère acide des nucléotides."
      }
    ],
    "explanation": "Le phosphate peut perdre des protons et porter des charges négatives ; il contribue ainsi au caractère acide des nucléotides."
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
        "explanation": "La réaction d’un dérivé halogéné électrophile avec une base nucléique peut conduire à une base chimiquement modifiée."
      },
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      },
      {
        "content": "Dérivé halogéné: électrophile.",
        "correct": true,
        "explanation": "Dans le modèle toxicologique, le dérivé halogéné joue le rôle d’électrophile."
      },
      {
        "content": "Base nucléique: nucléophile.",
        "correct": true,
        "explanation": "Les sites riches en électrons des bases nucléiques leur permettent de se comporter comme des nucléophiles."
      },
      {
        "content": "Rencontre des deux → réaction.",
        "correct": true,
        "explanation": "La complémentarité entre électrophile et nucléophile permet une réaction covalente susceptible de modifier la base."
      }
    ],
    "explanation": "La réaction d’un dérivé halogéné électrophile avec une base nucléique peut conduire à une base chimiquement modifiée."
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
        "explanation": "Un centre électrophile et un centre nucléophile présentent une complémentarité électronique favorable à la réaction."
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
    "explanation": "Il reçoit l'attaque du nucléophile."
  },
  {
    "order": 91,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un composé riche en électrons au niveau de ses hétéroatomes est décrit comme une base. Que peut-on en déduire ?",
    "choices": [
      {
        "content": "Dans la description électronique retenue, une base peut donner un doublet d’électrons et se comporter comme un nucléophile.",
        "correct": true,
        "explanation": "Les atomes riches en électrons peuvent fournir un doublet à un centre électrophile."
      },
      {
        "content": "Il peut donner des électrons.",
        "correct": true,
        "explanation": "Par définition, il peut donner des électrons."
      },
      {
        "content": "Il peut présenter un caractère nucléophile.",
        "correct": true,
        "explanation": "Lien explicite avec les bases nucléiques."
      },
      {
        "content": "Il réagit potentiellement avec un électrophile.",
        "correct": true,
        "explanation": "Un site nucléophile riche en électrons peut former une liaison avec un centre électrophile."
      },
      {
        "content": "Il est nécessairement un dérivé halogéné.",
        "correct": false,
        "explanation": "Ce sont au contraire les électrophiles du modèle toxicologique."
      }
    ],
    "explanation": "Les atomes riches en électrons peuvent fournir un doublet à un centre électrophile."
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
        "explanation": "Un nucléoside associe une base nucléique à un sucre ; l’ajout d’un phosphate forme un nucléotide."
      },
      {
        "content": "Le nucléoside est défini ici par la présence obligatoire d'un phosphate.",
        "correct": false,
        "explanation": "Le phosphate caractérise les nucléotides représentés."
      },
      {
        "content": "Le groupement phosphate contribue au caractère acide des nucléotides.",
        "correct": true,
        "explanation": "Le phosphate peut perdre des protons et porter des charges négatives ; il contribue ainsi au caractère acide des nucléotides."
      },
      {
        "content": "Le nucléotide porte un groupement phosphate dans les représentations.",
        "correct": true,
        "explanation": "La présence d’un groupement phosphate distingue un nucléotide du nucléoside correspondant."
      },
      {
        "content": "Le phosphate n’est pas responsable de l'acidité des nucléotides.",
        "correct": false,
        "explanation": "La relation correcte est: « Le phosphate est responsable de l'acidité des nucléotides ». La négation proposée est donc fausse."
      }
    ],
    "explanation": "Le phosphate peut perdre des protons et porter des charges négatives ; il contribue ainsi au caractère acide des nucléotides."
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
        "explanation": "Le phosphate est rapproché du carboxylate pour illustrer des groupements capables de porter une charge négative."
      },
      {
        "content": "Il est responsable de l'acidité des nucléotides.",
        "correct": true,
        "explanation": "La capacité du phosphate à perdre des protons et à porter des charges négatives contribue à l’acidité des nucléotides."
      },
      {
        "content": "Il fait partie des éléments représentés dans les nucléotides.",
        "correct": true,
        "explanation": "Le groupement phosphate fait partie de la structure d’un nucléotide."
      },
      {
        "content": "Il transforme le nucléotide en dérivé halogéné.",
        "correct": false,
        "explanation": "L’ajout d’un phosphate ne transforme pas un nucléotide en dérivé halogéné ; aucun halogène n’est introduit."
      },
      {
        "content": "Un nucléotide ne contient jamais de groupement phosphate.",
        "correct": false,
        "explanation": "Le phosphate distingue le nucléotide du nucléoside dans la définition retenue."
      }
    ],
    "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
  },
  {
    "order": 94,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un étudiant affirme : « une base nucléique est un bon électrophile ». Quelles propositions corrigent cette affirmation ?",
    "choices": [
      {
        "content": "Le bon électrophile de l'exemple toxicologique est le dérivé halogéné.",
        "correct": true,
        "explanation": "Dans le modèle toxicologique, le dérivé halogéné est l’électrophile qui réagit avec la base nucléique."
      },
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      },
      {
        "content": "La base nucléique est décrite comme nucléophile.",
        "correct": true,
        "explanation": "Les sites riches en électrons de la base nucléique lui confèrent un comportement nucléophile."
      },
      {
        "content": "Elle est riche en électrons.",
        "correct": true,
        "explanation": "La richesse électronique de certains atomes de la base nucléique explique sa nucléophilie."
      },
      {
        "content": "Elle peut donner des électrons.",
        "correct": true,
        "explanation": "Une base électronique peut fournir un doublet d’électrons à un centre électrophile."
      }
    ],
    "explanation": "Dans le modèle toxicologique, le dérivé halogéné est l’électrophile qui réagit avec la base nucléique."
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
        "explanation": "Le dérivé halogéné électrophile peut être attaqué par un site nucléophile d’une base nucléique."
      },
      {
        "content": "Modification de la base nucléique.",
        "correct": true,
        "explanation": "La réaction covalente peut modifier la structure de la base nucléique."
      },
      {
        "content": "Propriétés mutagènes possibles de la base modifiée.",
        "correct": true,
        "explanation": "La richesse électronique de certains atomes des bases nucléiques explique leur comportement nucléophile."
      },
      {
        "content": "Un électrophile est défini ici comme une espèce qui donne spontanément un doublet d’électrons à un nucléophile.",
        "correct": false,
        "explanation": "L’électrophile accepte des électrons; le nucléophile les fournit."
      },
      {
        "content": "Réactivité électrophile du dérivé halogéné.",
        "correct": true,
        "explanation": "La polarisation de la liaison carbone–halogène rend le carbone lié à l’halogène électrophile."
      }
    ],
    "explanation": "La richesse électronique de certains atomes des bases nucléiques explique leur comportement nucléophile."
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
    "explanation": "Le groupement phosphate peut perdre des protons et porter des charges négatives ; il contribue ainsi au caractère acide des nucléotides."
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
        "explanation": "Les deux séries se distinguent notamment par la nature du sucre : ribose pour l’ARN et 2-désoxyribose pour l’ADN."
      },
      {
        "content": "Le ribose est le sucre caractéristique de la série ADN dans le cadre présenté.",
        "correct": false,
        "explanation": "Le ribose est associé à l’ARN; l’ADN contient un 2-désoxyribose."
      },
      {
        "content": "Le premier est associé au ribose.",
        "correct": true,
        "explanation": "Le ribose est le sucre associé à la série ARN."
      },
      {
        "content": "Le second est associé au 2-désoxyribose.",
        "correct": true,
        "explanation": "Le 2-désoxyribose est le sucre associé à la série ADN."
      }
    ],
    "explanation": "C'est précisément ce que montrent les schémas."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propriétés électroniques caractérisent les bases nucléiques ?",
    "choices": [
      {
        "content": "Leur caractère riche en électrons.",
        "correct": true,
        "explanation": "Les atomes riches en électrons constituent les sites susceptibles de réagir avec un électrophile."
      },
      {
        "content": "Leur comportement de bases et de nucléophiles.",
        "correct": true,
        "explanation": "Leur richesse électronique permet aux bases nucléiques de se comporter comme des nucléophiles."
      },
      {
        "content": "Leur réactivité avec des électrophiles halogénés.",
        "correct": true,
        "explanation": "Les sites nucléophiles des bases nucléiques peuvent réagir avec certains dérivés halogénés électrophiles."
      },
      {
        "content": "Un mécanisme détaillé de réplication de l'ADN.",
        "correct": false,
        "explanation": "Ce n'est pas le contenu."
      },
      {
        "content": "Dans la description électronique retenue, une base peut donner un doublet d’électrons et se comporter comme un nucléophile.",
        "correct": true,
        "explanation": "Les atomes riches en électrons peuvent fournir un doublet à un centre électrophile."
      }
    ],
    "explanation": "Les sites nucléophiles des bases nucléiques peuvent réagir avec certains dérivés halogénés électrophiles."
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
        "explanation": "Le ribose est le pentose associé à la série ARN."
      },
      {
        "content": "2-désoxyribose → ADN.",
        "correct": true,
        "explanation": "Le 2-désoxyribose est le pentose associé à la série ADN."
      },
      {
        "content": "Ribose → ADN uniquement.",
        "correct": false,
        "explanation": "Cette affirmation ne correspond pas à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Cette affirmation ne correspond pas à la propriété ou à la transformation décrite."
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
        "explanation": "Dans la définition électronique utilisée ici, une base donne un doublet d’électrons."
      },
      {
        "content": "Une base nucléique est décrite comme nucléophile.",
        "correct": true,
        "explanation": "La richesse électronique de la base nucléique lui permet d’attaquer un centre électrophile."
      },
      {
        "content": "Un dérivé halogéné est décrit comme électrophile.",
        "correct": true,
        "explanation": "La polarisation de la liaison carbone-halogène rend le carbone suffisamment électrophile pour réagir avec un nucléophile."
      },
      {
        "content": "Le ribose est associé à l'ARN.",
        "correct": true,
        "explanation": "Les nucléosides de la série ARN contiennent un ribose."
      },
      {
        "content": "Le phosphate est responsable de l'acidité des nucléotides.",
        "correct": true,
        "explanation": "Le groupement phosphate peut perdre des protons et porter des charges négatives ; il contribue donc au caractère acide des nucléotides."
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
        "explanation": "La présence d’un groupement phosphate distingue un nucléotide du nucléoside correspondant."
      },
      {
        "content": "La modification des bases est présentée comme protectrice contre les mutations.",
        "correct": false,
        "explanation": "La modification covalente d’une base peut être mutagène ; elle n’est pas présentée comme protectrice."
      }
    ],
    "explanation": "Le groupement phosphate peut perdre des protons et porter des charges négatives ; il contribue donc au caractère acide des nucléotides."
  }
];
