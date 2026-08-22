import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.1 – Section B – Fonctions oxygénées
 */

export const UE14_CH5_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la fonction alcool, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'eau est un alcool organique.",
        "correct": false,
        "explanation": "L'eau ne possède aucun groupe carboné et n'appartient donc pas à la famille des alcools organiques."
      },
      {
        "content": "Le motif $\\ce{R-O-R'}$ caractérise à lui seul une fonction alcool.",
        "correct": false,
        "explanation": "Le motif $\\ce{R-O-R'}$ correspond à un éther ; un alcool comporte un groupe $\\ce{-OH}$."
      },
      {
        "content": "Elle comporte un groupe hydroxyle $\\ce{-OH}$.",
        "correct": true,
        "explanation": "Le groupe hydroxyle $\\ce{-OH}$ constitue le motif caractéristique de la fonction alcool."
      },
      {
        "content": "Dans un alcool aliphatique, le groupe hydroxyle est porté par un carbone saturé.",
        "correct": true,
        "explanation": "Dans un alcool aliphatique, le groupe $\\ce{-OH}$ est lié à un carbone saturé. Lorsqu'il est directement porté par un cycle aromatique, on parle d'un phénol."
      },
      {
        "content": "Toute molécule contenant un atome d'oxygène est un alcool.",
        "correct": false,
        "explanation": "La présence d'oxygène ne suffit pas à caractériser un alcool : éthers, aldéhydes, cétones, esters ou acides carboxyliques contiennent également de l'oxygène."
      }
    ],
    "explanation": "Une fonction alcool est caractérisée par un groupe hydroxyle porté par un carbone saturé. Elle doit être distinguée des autres fonctions oxygénées et des phénols, dont le groupe hydroxyle est directement lié à un cycle aromatique."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les classes d'alcools, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La classe primaire, secondaire ou tertiaire d’un alcool est déterminée par le nombre total de carbones de la molécule.",
        "correct": false,
        "explanation": "La classe dépend de l’environnement carboné du carbone portant le groupe $\\ce{-OH}$, pas de la longueur totale de la chaîne."
      },
      {
        "content": "Un alcool primaire possède un carbone fonctionnel lié à au plus un autre carbone dans les cas usuels.",
        "correct": true,
        "explanation": "Dans un alcool primaire, le carbone portant le groupe $\\ce{-OH}$ est lié à un seul autre carbone ; le méthanol constitue le cas limite, puisqu'il n'est lié à aucun autre carbone."
      },
      {
        "content": "Un alcool secondaire possède un carbone fonctionnel lié à deux carbones.",
        "correct": true,
        "explanation": "Le carbone portant le groupe $\\ce{-OH}$ est lié à deux autres carbones, comme dans le motif $\\ce{R-CH(OH)-R'}$."
      },
      {
        "content": "Un alcool tertiaire possède un carbone fonctionnel lié à trois carbones.",
        "correct": true,
        "explanation": "Le carbone portant le groupe $\\ce{-OH}$ est lié à trois autres carbones, comme dans un motif de type $\\ce{R3C-OH}$."
      },
      {
        "content": "Le terme tertiaire signifie que la molécule possède trois groupes hydroxyle.",
        "correct": false,
        "explanation": "Primaire, secondaire et tertiaire décrivent l'environnement carboné du carbone portant le groupe $\\ce{-OH}$, et non le nombre de groupes hydroxyle présents dans la molécule."
      }
    ],
    "explanation": "La classe d'un alcool dépend du nombre de carbones directement liés au carbone portant le groupe hydroxyle : un pour un alcool primaire, deux pour un secondaire et trois pour un tertiaire, avec le méthanol comme cas particulier des alcools primaires."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "$\\ce{CH3-CH(OH)-CH3}$ est :",
    "choices": [
      {
        "content": "Un alcool tertiaire.",
        "correct": false,
        "explanation": "Un alcool tertiaire possède un carbone porteur de $\\ce{-OH}$ lié à trois autres carbones ; ici, il n'en a que deux."
      },
      {
        "content": "Un éther.",
        "correct": false,
        "explanation": "Dans un éther, l'oxygène est inséré entre deux groupes carbonés selon un motif $\\ce{R-O-R'}$, ce qui n'est pas le cas ici."
      },
      {
        "content": "Un alcool secondaire.",
        "correct": true,
        "explanation": "Le carbone portant le groupe $\\ce{-OH}$ est lié aux deux carbones des groupes $\\ce{CH3}$ : l'alcool est donc secondaire."
      },
      {
        "content": "Un acide carboxylique.",
        "correct": false,
        "explanation": "La structure ne comporte pas le motif $\\ce{-COOH}$ caractéristique d’un acide carboxylique."
      },
      {
        "content": "Un alcool primaire.",
        "correct": false,
        "explanation": "Un alcool primaire possède un carbone porteur de $\\ce{-OH}$ lié à au plus un autre carbone ; ici, il est lié à deux carbones."
      }
    ],
    "explanation": "Dans le propan-2-ol, le carbone portant le groupe hydroxyle est lié à deux autres carbones : il s'agit donc d'un alcool secondaire."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles associations motif → fonction sont exactes ?",
    "choices": [
      {
        "content": "$\\ce{R-O-R'}$ → éther.",
        "correct": true,
        "explanation": "Dans un éther, un atome d'oxygène est relié par deux liaisons simples à deux groupes carbonés."
      },
      {
        "content": "$\\ce{R-COO-R'}$ → ester.",
        "correct": true,
        "explanation": "Le motif $\\ce{R-C(=O)-O-R'}$ associe un carbonyle et un oxygène lié à un groupe carboné : il caractérise une fonction ester."
      },
      {
        "content": "$\\ce{R-CO-R'}$ → aldéhyde lorsque R et R' sont carbonés.",
        "correct": false,
        "explanation": "Lorsque le carbone du groupe carbonyle est lié à deux groupes carbonés, le carbonyle est interne et la fonction est une cétone. Un aldéhyde possède au contraire au moins un hydrogène directement lié au carbone carbonylé."
      },
      {
        "content": "$\\ce{R-CHO}$ → cétone.",
        "correct": false,
        "explanation": "Le motif $\\ce{R-CHO}$ correspond à un aldéhyde, pas à une cétone."
      },
      {
        "content": "$\\ce{R-COOH}$ → acide carboxylique.",
        "correct": true,
        "explanation": "Le motif $\\ce{-COOH}$ correspond au groupe carboxyle et caractérise une fonction acide carboxylique."
      }
    ],
    "explanation": "La reconnaissance d'une fonction oxygénée repose sur l'identification du motif complet et sur l'environnement du carbone fonctionnel, notamment autour d'un groupe carbonyle."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle formule représente un aldéhyde ?",
    "choices": [
      {
        "content": "$\\ce{R-COOH}$",
        "correct": false,
        "explanation": "Le motif $\\ce{R-COOH}$ correspond à un acide carboxylique."
      },
      {
        "content": "$\\ce{R-CO-R'}$.",
        "correct": false,
        "explanation": "Lorsque le carbone carbonylé est lié à deux groupes carbonés, la fonction correspond à une cétone."
      },
      {
        "content": "$\\ce{R-O-R'}$.",
        "correct": false,
        "explanation": "Ce motif comporte un oxygène entre deux groupes carbonés et correspond à une fonction éther."
      },
      {
        "content": "$\\ce{R-CHO}$.",
        "correct": true,
        "explanation": "Le carbone du groupe carbonyle est lié à un hydrogène : le carbonyle est terminal, ce qui caractérise un aldéhyde."
      },
      {
        "content": "$\\ce{R-COO-R'}$.",
        "correct": false,
        "explanation": "Le motif $\\ce{R-C(=O)-O-R'}$ correspond à une fonction ester."
      }
    ],
    "explanation": "Un aldéhyde possède un groupe carbonyle terminal dont le carbone porte un hydrogène, selon le motif général $\\ce{R-CHO}$."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux motifs contenant une liaison $\\ce{O-O}$.",
    "choices": [
      {
        "content": "Ester $\\ce{R-COO-R'}$.",
        "correct": false,
        "explanation": "Un ester comporte deux atomes d'oxygène, mais ils sont tous deux liés au carbone fonctionnel et ne sont pas directement liés l'un à l'autre."
      },
      {
        "content": "Méthanol $\\ce{CH3OH}$.",
        "correct": false,
        "explanation": "Le méthanol contient un seul atome d’oxygène et aucune liaison $\\ce{O-O}$."
      },
      {
        "content": "Peroxyde $\\ce{R-O-O-R'}$.",
        "correct": true,
        "explanation": "Le motif peroxyde comporte une liaison covalente directe entre deux atomes d'oxygène."
      },
      {
        "content": "Peroxyde d'hydrogène $\\ce{H-O-O-H}$.",
        "correct": true,
        "explanation": "Le peroxyde d'hydrogène contient lui aussi une liaison directe $\\ce{O-O}$."
      },
      {
        "content": "Éther $\\ce{R-O-R'}$.",
        "correct": false,
        "explanation": "Un éther ne comporte qu'un seul atome d'oxygène entre deux groupes carbonés et ne possède donc pas de liaison $\\ce{O-O}$."
      }
    ],
    "explanation": "Un peroxyde se reconnaît par la présence d'une liaison directe $\\ce{O-O}$, qu'il s'agisse d'un peroxyde organique ou du peroxyde d'hydrogène."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la fonction carbonate organique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un carbonate organique ne comporte qu’un seul atome d’oxygène.",
        "correct": false,
        "explanation": "Le motif carbonate présenté comporte plusieurs oxygènes autour du carbone carbonylé."
      },
      {
        "content": "Elle comporte un groupe carbonyle.",
        "correct": true,
        "explanation": "Le carbone central du carbonate est doublement lié à un oxygène : il comporte donc un groupe carbonyle $\\ce{C=O}$."
      },
      {
        "content": "Elle peut être représentée par $\\ce{RO-C(=O)-OR'}$.",
        "correct": true,
        "explanation": "Un carbonate organique peut être représenté par le motif $\\ce{RO-C(=O)-OR'}$, avec deux oxygènes liés par liaison simple au carbone carbonylé."
      },
      {
        "content": "Elle est identique à un éther simple.",
        "correct": false,
        "explanation": "Un éther simple possède le motif $\\ce{R-O-R'}$ et ne comporte pas de groupe carbonyle, contrairement à un carbonate organique."
      },
      {
        "content": "Elle contient deux oxygènes liés au carbone carbonylé par des liaisons simples.",
        "correct": true,
        "explanation": "Dans le motif $\\ce{RO-C(=O)-OR'}$, deux oxygènes sont liés par liaison simple au carbone du groupe carbonyle."
      }
    ],
    "explanation": "Un carbonate organique comporte un carbone carbonylé lié à deux oxygènes par des liaisons simples. Il se distingue donc d'un éther simple et également d'un ester, qui ne possède qu'un seul oxygène simple lié au carbone carbonylé."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les molécules suivantes, quelles associations sont exactes ?",
    "choices": [
      {
        "content": "$\\ce{CH3CH2OH}$ : alcool.",
        "correct": true,
        "explanation": "Le groupe $\\ce{-OH}$ est porté par un carbone saturé : l'éthanol possède donc une fonction alcool."
      },
      {
        "content": "$\\ce{CH3COCH3}$ : cétone.",
        "correct": true,
        "explanation": "Le carbone du groupe carbonyle est lié à deux carbones : le carbonyle est interne, ce qui caractérise une cétone."
      },
      {
        "content": "$\\ce{CH3CHO}$ : cétone.",
        "correct": false,
        "explanation": "Dans $\\ce{CH3CHO}$, le carbone carbonylé est terminal et porte un hydrogène : il s'agit d'un aldéhyde et non d'une cétone."
      },
      {
        "content": "$\\ce{CH3OCH3}$ : éther.",
        "correct": true,
        "explanation": "L'atome d'oxygène est relié à deux groupes méthyle selon le motif $\\ce{R-O-R'}$ : la fonction est un éther."
      },
      {
        "content": "$\\ce{CH3COOH}$ : ester.",
        "correct": false,
        "explanation": "$\\ce{CH3COOH}$ possède une fonction acide carboxylique, pas une fonction ester."
      }
    ],
    "explanation": "Pour identifier une fonction oxygénée, il faut examiner le motif complet et, pour les fonctions carbonylées, déterminer si le carbone du carbonyle est terminal ou lié à deux groupes carbonés."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel nom de fonction correspond au motif $\\ce{R-COO-R'}$ ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "ester",
        "fonction ester"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Le motif $\\ce{R-C(=O)-O-R'}$ définit une fonction ester : le carbone carbonylé est lié à un second oxygène, lui-même lié à un groupe carboné."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel nom de fonction correspond au motif $\\ce{R-CHO}$ ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "aldéhyde",
        "aldehyde",
        "fonction aldéhyde",
        "fonction aldehyde"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Le motif $\\ce{R-CHO}$ comporte un groupe carbonyle terminal dont le carbone est directement lié à un hydrogène : il caractérise une fonction aldéhyde."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le paracétamol est représenté ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Son azote appartient à une amine libre.",
        "correct": false,
        "explanation": "L'azote est directement lié au carbone carbonylé : il appartient à une fonction amide et ne constitue donc pas une amine libre."
      },
      {
        "content": "Il possède une fonction nitrile.",
        "correct": false,
        "explanation": "Aucun motif $\\ce{C#N}$ n’est présent dans la structure représentée."
      },
      {
        "content": "Il possède un groupe hydroxyle phénolique.",
        "correct": true,
        "explanation": "Le groupe $\\ce{-OH}$ est directement lié au cycle aromatique : il s'agit donc d'un hydroxyle phénolique et non d'un alcool aliphatique."
      },
      {
        "content": "Il possède une fonction amide.",
        "correct": true,
        "explanation": "L'azote est directement lié au carbone d'un groupe carbonyle, ce qui forme le motif caractéristique d'une fonction amide."
      },
      {
        "content": "Il possède une fonction ester.",
        "correct": false,
        "explanation": "Une fonction ester nécessite un motif $\\ce{C(=O)-O-R}$. Dans le paracétamol, le carbonyle est lié à un azote et appartient à une amide."
      }
    ],
    "explanation": "Le paracétamol est une molécule polyfonctionnelle. La lecture de l'environnement de chaque hétéroatome permet d'y reconnaître un phénol et une amide sans découper artificiellement ces fonctions en motifs plus simples.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "paracetamol-topological"
    }
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L'aspirine est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles fonctions oxygénées y reconnaît-on ?",
    "choices": [
      {
        "content": "Un peroxyde.",
        "correct": false,
        "explanation": "La structure ne présente pas de liaison directe $\\ce{O-O}$ caractéristique d’un peroxyde."
      },
      {
        "content": "Un acide carboxylique.",
        "correct": true,
        "explanation": "La structure comporte un groupe $\\ce{-COOH}$, motif caractéristique d'une fonction acide carboxylique."
      },
      {
        "content": "Un ester.",
        "correct": true,
        "explanation": "Le groupe acétyloxy comporte le motif $\\ce{C(=O)-O-C}$, qui caractérise une fonction ester."
      },
      {
        "content": "Une cétone libre.",
        "correct": false,
        "explanation": "Les groupes carbonyle présents appartiennent respectivement à l'acide carboxylique et à l'ester ; aucun ne constitue une cétone indépendante."
      },
      {
        "content": "Un alcool libre.",
        "correct": false,
        "explanation": "Le groupe $\\ce{-OH}$ visible appartient au carboxyle $\\ce{-COOH}$ ; il ne constitue donc pas une fonction alcool indépendante."
      }
    ],
    "explanation": "L'aspirine est une molécule polyfonctionnelle associant une fonction acide carboxylique et une fonction ester. Il faut analyser les groupes dans leur environnement pour éviter de compter séparément un carbonyle ou un hydroxyle appartenant déjà à une fonction plus complexe.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "aspirin-topological"
    }
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux molécules comportant une fonction alcool, c'est-à-dire un groupe hydroxyle porté par un carbone saturé.",
    "choices": [
      {
        "content": "$\\ce{CH3CH2OH}$.",
        "correct": true,
        "explanation": "Dans l'éthanol, le groupe $\\ce{-OH}$ est porté par un carbone saturé : il s'agit bien d'une fonction alcool."
      },
      {
        "content": "$\\ce{CH3CH(OH)CH3}$.",
        "correct": true,
        "explanation": "Dans le propan-2-ol, le groupe $\\ce{-OH}$ est porté par un carbone saturé : la molécule possède une fonction alcool."
      },
      {
        "content": "$\\ce{CH3COOH}$.",
        "correct": false,
        "explanation": "Le groupe $\\ce{-OH}$ appartient au groupe carboxyle $\\ce{-COOH}$ ; il fait donc partie d'une fonction acide carboxylique et ne constitue pas une fonction alcool indépendante."
      },
      {
        "content": "$\\ce{CH3OCH3}$.",
        "correct": false,
        "explanation": "Cette molécule possède un oxygène entre deux groupes carbonés et correspond à un éther ; elle ne contient aucun groupe hydroxyle $\\ce{-OH}$."
      },
      {
        "content": "Phénol $\\ce{C6H5OH}$.",
        "correct": false,
        "explanation": "Dans ce classement, le groupe $\\ce{-OH}$ est directement porté par un cycle aromatique : il s’agit d’un phénol, pas d’un alcool aliphatique."
      }
    ],
    "explanation": "La présence d'un groupe $\\ce{-OH}$ ne suffit pas toujours à conclure à une fonction alcool : il faut vérifier qu'il est porté par un carbone saturé et qu'il n'appartient pas à une fonction plus complexe comme un acide carboxylique."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare $\\ce{CH3CHO}$ et $\\ce{CH3COCH3}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La seconde molécule est une cétone.",
        "correct": true,
        "explanation": "Dans $\\ce{CH3COCH3}$, le carbone du groupe carbonyle est lié à deux carbones : le carbonyle est interne et la fonction est une cétone."
      },
      {
        "content": "Les deux molécules contiennent un groupe carbonyle.",
        "correct": true,
        "explanation": "Aldéhydes et cétones comportent tous deux un groupe carbonyle $\\ce{C=O}$ ; ils se distinguent par les substituants portés par le carbone carbonylé."
      },
      {
        "content": "Les deux molécules sont des esters.",
        "correct": false,
        "explanation": "Une fonction ester exige le motif $\\ce{C(=O)-O-R}$. Aucun oxygène simple lié au carbone carbonylé n'est présent dans ces deux molécules."
      },
      {
        "content": "Les deux molécules ont la même formule brute.",
        "correct": false,
        "explanation": "L’éthanal et la propanone n’ont pas le même nombre de carbones et n’ont donc pas la même formule brute."
      },
      {
        "content": "La première molécule est un aldéhyde.",
        "correct": true,
        "explanation": "Dans $\\ce{CH3CHO}$, le carbone du groupe carbonyle porte un hydrogène : il s'agit d'un aldéhyde."
      }
    ],
    "explanation": "Aldéhydes et cétones partagent un groupe carbonyle. Un aldéhyde possède un carbonyle terminal portant un hydrogène, tandis qu'une cétone possède un carbone carbonylé lié à deux groupes carbonés."
  },
  {
    "order": 37,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Dans la formule semi-développée $\\ce{HO-CH2-CH2-OH}$, combien de fonctions alcool sont présentes ? Donnez uniquement la valeur numérique.",
    "answer": {
      "type": "number",
      "value": 2
    },
    "explanation": "La molécule possède deux groupes $\\ce{-OH}$, chacun porté par un carbone saturé. Chacun correspond donc à une fonction alcool : l'éthane-1,2-diol en possède deux."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de $\\ce{CH3COOCH3}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle possède une fonction acide carboxylique.",
        "correct": false,
        "explanation": "Une fonction acide carboxylique nécessite un groupe $\\ce{-COOH}$. Ici, le carbone carbonylé est lié à $\\ce{-OCH3}$ et non à $\\ce{-OH}$."
      },
      {
        "content": "Elle comporte une liaison directe $\\ce{O-O}$.",
        "correct": false,
        "explanation": "Dans un ester, les deux oxygènes ne sont pas directement liés l’un à l’autre."
      },
      {
        "content": "La molécule possède une fonction ester.",
        "correct": true,
        "explanation": "Le motif $\\ce{C(=O)-O-C}$ associe un groupe carbonyle à un oxygène lié à un groupe carboné : il caractérise une fonction ester."
      },
      {
        "content": "Elle contient deux atomes d'oxygène.",
        "correct": true,
        "explanation": "L'un des oxygènes appartient au groupe carbonyle et le second est lié par une liaison simple au carbone carbonylé."
      },
      {
        "content": "Elle possède une fonction éther indépendante.",
        "correct": false,
        "explanation": "L'oxygène lié par liaison simple fait partie du motif ester complet. Il ne doit pas être compté comme une fonction éther indépendante."
      }
    ],
    "explanation": "Une fonction complexe doit être reconnue comme un motif complet. Dans $\\ce{CH3COOCH3}$, les deux oxygènes appartiennent à une unique fonction ester ; il ne faut pas la découper artificiellement en carbonyle et éther."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le peroxyde d'hydrogène $\\ce{H2O2}$ est utilisé comme oxydant et antiseptique dans certaines préparations. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il contient au moins un atome de carbone.",
        "correct": false,
        "explanation": "Le peroxyde d’hydrogène $\\ce{H2O2}$ ne contient aucun atome de carbone."
      },
      {
        "content": "Il contient une liaison $\\ce{O-O}$.",
        "correct": true,
        "explanation": "La formule développée $\\ce{H-O-O-H}$ montre une liaison directe entre les deux atomes d'oxygène, caractéristique d'un peroxyde."
      },
      {
        "content": "Il n'est pas un éther.",
        "correct": true,
        "explanation": "Un éther possède un oxygène relié à deux groupes carbonés selon $\\ce{R-O-R'}$. Le peroxyde d'hydrogène ne contient aucun carbone et comporte une liaison $\\ce{O-O}$."
      },
      {
        "content": "Il contient une fonction ester.",
        "correct": false,
        "explanation": "Une fonction ester nécessite notamment un groupe carbonyle $\\ce{C=O}$, absent dans $\\ce{H2O2}$."
      },
      {
        "content": "Sa formule brute contient deux atomes d'oxygène.",
        "correct": true,
        "explanation": "L'indice 2 dans $\\ce{H2O2}$ indique la présence de deux atomes d'oxygène."
      }
    ],
    "explanation": "Le peroxyde d'hydrogène se caractérise par une liaison directe $\\ce{O-O}$. Cette liaison permet de le distinguer des éthers et des autres fonctions oxygénées."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le propofol, anesthésique, est représenté ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il comporte un groupe hydroxyle porté par un cycle aromatique.",
        "correct": true,
        "explanation": "Le groupe $\\ce{-OH}$ est directement lié à un carbone du noyau benzénique."
      },
      {
        "content": "Ce groupe correspond à un phénol plutôt qu'à un alcool aliphatique au sens strict.",
        "correct": true,
        "explanation": "Un hydroxyle directement lié à un carbone aromatique définit un phénol ; dans un alcool aliphatique, le groupe $\\ce{-OH}$ est porté par un carbone saturé."
      },
      {
        "content": "Il possède une fonction ester.",
        "correct": false,
        "explanation": "Une fonction ester nécessiterait un motif $\\ce{C(=O)-O-R}$. Aucun groupe carbonyle n'est présent dans la structure du propofol."
      },
      {
        "content": "Il possède une fonction amide.",
        "correct": false,
        "explanation": "Une fonction amide contient un atome d'azote lié à un carbone carbonylé. Le propofol ne contient aucun atome d'azote."
      },
      {
        "content": "Le groupe $\\ce{-OH}$ est porté par un carbone saturé.",
        "correct": false,
        "explanation": "Dans la structure représentée, le groupe hydroxyle est directement porté par le cycle aromatique."
      }
    ],
    "explanation": "La position du groupe hydroxyle est déterminante : dans le propofol, il est directement porté par un cycle aromatique et correspond donc à une fonction phénol, et non à un alcool aliphatique.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "propofol-topological"
    }
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "$\\ce{CH3OH}$ → alcool.",
        "correct": true,
        "explanation": "Dans le méthanol, le groupe $\\ce{-OH}$ constitue une fonction alcool ; il s'agit du plus simple des alcools."
      },
      {
        "content": "$\\ce{CH3OCH3}$ → éther.",
        "correct": true,
        "explanation": "L'atome d'oxygène est relié à deux groupes méthyle selon le motif $\\ce{R-O-R'}$, caractéristique d'un éther."
      },
      {
        "content": "$\\ce{CH3COOH}$ → acide carboxylique.",
        "correct": true,
        "explanation": "La molécule comporte le groupe carboxyle $\\ce{-COOH}$, caractéristique d'un acide carboxylique."
      },
      {
        "content": "$\\ce{CH3COCH3}$ → cétone.",
        "correct": true,
        "explanation": "Le carbone du groupe carbonyle est lié à deux carbones : le carbonyle est interne, ce qui caractérise une cétone."
      },
      {
        "content": "$\\ce{CH3CHO}$ → aldéhyde.",
        "correct": true,
        "explanation": "Le carbone du groupe carbonyle porte un hydrogène : il s'agit d'un aldéhyde."
      },
      {
        "content": "$\\ce{CH3COOCH3}$ → éther simple.",
        "correct": false,
        "explanation": "La présence du motif $\\ce{C(=O)-O-C}$ caractérise une fonction ester. L'oxygène simple fait partie de cette fonction et ne constitue pas un éther indépendant."
      },
      {
        "content": "$\\ce{H2O2}$ → alcool.",
        "correct": false,
        "explanation": "Le peroxyde d'hydrogène contient une liaison $\\ce{O-O}$ et ne possède aucun groupe carboné : il s'agit d'un peroxyde, pas d'un alcool organique."
      },
      {
        "content": "$\\ce{CH3CH2OH}$ → cétone.",
        "correct": false,
        "explanation": "L'éthanol possède un groupe $\\ce{-OH}$ porté par un carbone saturé et ne comporte aucun groupe carbonyle : c'est un alcool."
      },
      {
        "content": "$\\ce{CH3OCH3}$ → ester.",
        "correct": false,
        "explanation": "Cette molécule ne possède aucun groupe carbonyle. Son oxygène est relié à deux groupes carbonés : il s'agit d'un éther."
      },
      {
        "content": "$\\ce{CH3COCH3}$ → aldéhyde.",
        "correct": false,
        "explanation": "Dans cette molécule, le carbone carbonylé est lié à deux groupes carbonés et ne porte aucun hydrogène : la fonction est une cétone, pas un aldéhyde."
      }
    ],
    "explanation": "La reconnaissance des principales fonctions oxygénées repose sur quelques critères structuraux : position du groupe hydroxyle, présence d'un carbonyle, substituants du carbone carbonylé et éventuelle présence d'un oxygène directement lié à ce carbone."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des molécules comportant plusieurs fonctions oxygénées, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La présence d'une fonction ester interdit toute autre fonction dans la même molécule.",
        "correct": false,
        "explanation": "Il n'existe aucune règle d'exclusion de ce type : une molécule peut porter une fonction ester ainsi qu'une ou plusieurs autres fonctions."
      },
      {
        "content": "Il faut analyser chaque groupe caractéristique dans son environnement avant d'attribuer une fonction.",
        "correct": true,
        "explanation": "L'environnement évite les faux découpages : par exemple, l'oxygène simple d'un ester appartient au motif ester complet et ne constitue pas nécessairement une fonction éther indépendante."
      },
      {
        "content": "Chaque atome d’oxygène présent doit être compté comme une fonction chimique indépendante.",
        "correct": false,
        "explanation": "Une fonction se reconnaît par un motif complet ; plusieurs oxygènes peuvent appartenir à une seule fonction, comme dans un ester ou un acide carboxylique."
      },
      {
        "content": "Une molécule polyfonctionnelle peut combiner plusieurs motifs fonctionnels différents.",
        "correct": true,
        "explanation": "Une même molécule peut comporter plusieurs groupes caractéristiques appartenant à des fonctions différentes, ce qui est fréquent dans les molécules biologiques et les médicaments."
      },
      {
        "content": "L'aspirine associe par exemple une fonction acide carboxylique et une fonction ester.",
        "correct": true,
        "explanation": "La structure de l'aspirine comporte à la fois un groupe $\\ce{-COOH}$ et un motif ester $\\ce{C(=O)-O-C}$."
      }
    ],
    "explanation": "Dans une molécule polyfonctionnelle, chaque groupe caractéristique doit être analysé dans son environnement. Cette lecture globale permet d'identifier correctement les fonctions sans découper artificiellement une fonction complexe en plusieurs fonctions simples."
  },
  {
    "order": 43,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel nom de fonction correspond à $\\ce{R-O-R'}$ avec R et R' carbonés ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "éther",
        "ether",
        "fonction éther",
        "fonction ether"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Lorsqu'un atome d'oxygène est relié par deux liaisons simples à deux groupes carbonés selon le motif $\\ce{R-O-R'}$, la fonction correspond à un éther."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans un ester $\\ce{R-C(=O)-O-R'}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone carbonylé porte nécessairement un groupe $\\ce{-OH}$.",
        "correct": false,
        "explanation": "Un groupe carbonyle $\\ce{C=O}$ peut appartenir à plusieurs fonctions ; il ne porte pas nécessairement un groupe hydroxyle."
      },
      {
        "content": "Le carbone carbonylé est doublement lié à un oxygène.",
        "correct": true,
        "explanation": "Le carbone fonctionnel porte une double liaison $\\ce{C=O}$ : c'est le groupe carbonyle de l'ester."
      },
      {
        "content": "Un second oxygène est lié par une liaison simple au carbone carbonylé.",
        "correct": true,
        "explanation": "Dans le motif ester, le carbone carbonylé est également lié par une liaison simple à un oxygène, lui-même relié au groupe $\\ce{R'}$."
      },
      {
        "content": "Le motif comprend une liaison $\\ce{O-O}$.",
        "correct": false,
        "explanation": "Les deux oxygènes d'un ester sont tous deux liés au carbone fonctionnel et ne sont pas directement liés entre eux."
      },
      {
        "content": "Le groupe est différent d'un acide carboxylique.",
        "correct": true,
        "explanation": "Dans un ester, le carbone carbonylé est lié à $\\ce{-OR'}$, tandis que dans un acide carboxylique il est lié à $\\ce{-OH}$."
      }
    ],
    "explanation": "Ester et acide carboxylique partagent un groupe carbonyle, mais diffèrent par le substituant oxygéné lié au carbone carbonylé : $\\ce{-OR'}$ pour l'ester et $\\ce{-OH}$ pour l'acide carboxylique."
  }
];
