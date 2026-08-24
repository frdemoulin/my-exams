import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.1 – Section C – Fonctions azotées et soufrées
 */

export const UE14_CH5_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des amines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une amine neutre usuelle possède un azote trivalent.",
        "correct": true,
        "explanation": "Dans une amine neutre usuelle, l'atome d'azote forme trois liaisons covalentes et possède un doublet non liant : il est donc trivalent."
      },
      {
        "content": "Les motifs $\\ce{R-NH2}$, $\\ce{R2NH}$ et $\\ce{R3N}$ correspondent respectivement aux amines primaire, secondaire et tertiaire.",
        "correct": true,
        "explanation": "La classe d'une amine dépend du nombre de groupes carbonés directement liés à l'azote : un pour une amine primaire, deux pour une secondaire et trois pour une tertiaire."
      },
      {
        "content": "Toute molécule contenant un atome d'azote appartient à la famille des amines.",
        "correct": false,
        "explanation": "La seule présence d'azote ne suffit pas à définir une amine : selon son environnement, l'azote peut appartenir notamment à une amide, un nitrile, un carbamate ou un ammonium quaternaire."
      },
      {
        "content": "Une amine tertiaire est dite tertiaire parce que sa molécule contient trois éléments chimiques différents.",
        "correct": false,
        "explanation": "Le terme « tertiaire » ne décrit pas le nombre d'éléments chimiques de la molécule. Il indique que trois groupes carbonés sont directement liés à l'atome d'azote."
      },
      {
        "content": "Une amine primaire neutre possède un seul groupe carboné directement lié à l’azote.",
        "correct": true,
        "explanation": "Une amine primaire est caractérisée par un seul substituant carboné directement lié à l’azote."
      }
    ],
    "explanation": "Pour identifier et classer une amine, il faut examiner l'environnement immédiat de l'azote. Les qualificatifs primaire, secondaire et tertiaire correspondent respectivement à un, deux ou trois substituants carbonés directement liés à un azote neutre."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles associations sont exactes ?",
    "choices": [
      {
        "content": "$\\ce{(CH3)2NH}$ : amine tertiaire.",
        "correct": false,
        "explanation": "L'azote est lié à deux groupes méthyle et à un hydrogène : il s'agit d'une amine secondaire, et non tertiaire."
      },
      {
        "content": "$\\ce{(CH3)3N}$ : amine tertiaire.",
        "correct": true,
        "explanation": "Trois groupes méthyle sont directement liés à l'azote : la triméthylamine est une amine tertiaire."
      },
      {
        "content": "$\\ce{(CH3)4N+}$ : amine tertiaire protonée.",
        "correct": false,
        "explanation": "L'azote porte quatre groupes méthyle et une charge positive : il s'agit d'un ammonium quaternaire. Une amine tertiaire protonée porterait encore un hydrogène sur l'azote."
      },
      {
        "content": "$\\ce{CH3CN}$ : amine primaire.",
        "correct": false,
        "explanation": "$\\ce{CH3CN}$ contient un motif nitrile $\\ce{C#N}$ ; ce n’est pas une amine primaire."
      },
      {
        "content": "$\\ce{CH3NH2}$ : amine primaire.",
        "correct": true,
        "explanation": "L'azote est directement lié à un seul groupe carboné, le groupe méthyle : la molécule est donc une amine primaire."
      }
    ],
    "explanation": "La classe d'une amine dépend du nombre de substituants carbonés directement liés à l'azote. Un azote portant quatre substituants carbonés et une charge positive appartient à un ammonium quaternaire et non à une amine tertiaire."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel critère distingue le mieux un ammonium quaternaire d'une amine tertiaire ?",
    "choices": [
      {
        "content": "Un azote neutre lié à trois groupes carbonés.",
        "correct": false,
        "explanation": "Cette description correspond à une amine tertiaire neutre, pas à un ammonium quaternaire."
      },
      {
        "content": "Un ammonium quaternaire correspond toujours à une amine tertiaire protonée.",
        "correct": false,
        "explanation": "Une amine tertiaire protonée porte encore un hydrogène sur l'azote, alors qu'un ammonium quaternaire possède quatre substituants carbonés et aucun hydrogène directement lié à l'azote."
      },
      {
        "content": "Une amine tertiaire et un ammonium quaternaire possèdent tous deux un azote neutre.",
        "correct": false,
        "explanation": "L'azote d'une amine tertiaire simple est neutre, tandis que celui d'un ammonium quaternaire porte une charge positive."
      },
      {
        "content": "Le nombre de groupes carbonés directement liés à l'azote est identique dans une amine tertiaire et un ammonium quaternaire.",
        "correct": false,
        "explanation": "Une amine tertiaire possède trois groupes carbonés directement liés à l'azote, contre quatre pour un ammonium quaternaire."
      },
      {
        "content": "L'azote de l'ammonium quaternaire est lié à quatre groupes carbonés et porte une charge positive.",
        "correct": true,
        "explanation": "Un ammonium quaternaire possède quatre substituants carbonés liés à l'azote ; celui-ci est tétravalent et porte une charge positive."
      }
    ],
    "explanation": "Une amine tertiaire possède un azote neutre lié à trois groupes carbonés. Dans un ammonium quaternaire, l'azote est lié à quatre groupes carbonés et porte une charge positive."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel motif correspond à une fonction amide ?",
    "choices": [
      {
        "content": "$\\ce{R-C(=O)-NR'R''}$.",
        "correct": true,
        "explanation": "Dans une amide, l'atome d'azote est directement lié au carbone d'un groupe carbonyle $\\ce{C=O}$."
      },
      {
        "content": "$\\ce{R-NH2}$.",
        "correct": false,
        "explanation": "Ce motif correspond à une amine primaire : l'azote n'est pas directement lié à un carbone carbonylé."
      },
      {
        "content": "$\\ce{R-C#N}$.",
        "correct": false,
        "explanation": "La triple liaison $\\ce{C#N}$ caractérise une fonction nitrile, et non une amide."
      },
      {
        "content": "$\\ce{R-SH}$.",
        "correct": false,
        "explanation": "Le groupe $\\ce{-SH}$ caractérise une fonction thiol et ne contient pas d'azote."
      },
      {
        "content": "$\\ce{RO-C(=O)-OR'}$",
        "correct": false,
        "explanation": "Ce motif oxygéné n’est pas une amide : une amide comporte un azote directement lié au carbone carbonylé."
      }
    ],
    "explanation": "Une fonction amide associe un groupe carbonyle et un atome d'azote directement lié au carbone carbonylé. Cette proximité avec le carbonyle permet notamment de distinguer une amide d'une amine."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel nom de fonction correspond au motif $\\ce{R-C#N}$ ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "nitrile",
        "fonction nitrile"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Une triple liaison carbone-azote terminale du type R-C≡N définit un nitrile."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos d'un carbamate de motif général $\\ce{RO-C(=O)-NR'R''}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il comporte un carbone carbonylé lié à la fois à un oxygène et à un azote.",
        "correct": true,
        "explanation": "Dans le motif $\\ce{RO-C(=O)-NR'R''}$, le carbone du groupe $\\ce{C=O}$ est également lié par des liaisons simples à l'oxygène du groupe $\\ce{-OR}$ et à l'azote."
      },
      {
        "content": "L'azote d'un carbamate n'est pas directement lié au carbone carbonylé, car un oxygène s'intercale entre les deux.",
        "correct": false,
        "explanation": "L'oxygène est présent sur un autre substituant du carbone carbonylé. L'azote reste directement lié à ce même carbone dans le motif $\\ce{C(=O)-N}$."
      },
      {
        "content": "Un carbamate est un nitrile auquel un atome d'oxygène a été ajouté.",
        "correct": false,
        "explanation": "Un nitrile est défini par une triple liaison $\\ce{C#N}$. Le carbamate possède au contraire un groupe carbonyle et des liaisons simples vers O et N."
      },
      {
        "content": "Un carbamate est identique à une amide simple dès lors qu'il contient le motif $\\ce{C(=O)-N}$.",
        "correct": false,
        "explanation": "Le motif $\\ce{C(=O)-N}$ est commun aux deux familles, mais le carbamate possède en plus un oxygène de type $\\ce{-OR}$ directement lié au carbone carbonylé : il constitue donc une fonction distincte."
      },
      {
        "content": "Le motif comporte simultanément une liaison $\\ce{C(=O)-O}$ et une liaison $\\ce{C(=O)-N}$.",
        "correct": true,
        "explanation": "Dans un carbamate, le même carbone carbonylé est lié par des liaisons simples à un oxygène et à un azote ; ces deux connexions caractérisent le motif $\\ce{RO-C(=O)-NR'R''}$."
      }
    ],
    "explanation": "Le carbamate se reconnaît par le motif $\\ce{RO-C(=O)-NR'R''}$. Il associe autour du même carbone carbonylé une partie oxygénée et une partie azotée ; il ne doit être confondu ni avec une amide simple ni avec un nitrile."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel nom de fonction correspond au motif $\\ce{R-SH}$ ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "thiol",
        "fonction thiol"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Le groupe sulfhydryle R-SH définit une fonction thiol."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux associations correctes.",
    "choices": [
      {
        "content": "$\\ce{R-CO-NH2}$ → amine primaire.",
        "correct": false,
        "explanation": "L'azote est directement lié au carbone d'un groupe carbonyle : ce motif correspond à une amide et non à une amine primaire libre."
      },
      {
        "content": "$\\ce{R4N+}$ → amine tertiaire neutre.",
        "correct": false,
        "explanation": "Un azote lié à quatre substituants et portant une charge positive correspond à un ammonium quaternaire, et non à une amine tertiaire neutre."
      },
      {
        "content": "$\\ce{R-O-R'}$ → thiol.",
        "correct": false,
        "explanation": "$\\ce{R-O-R'}$ correspond à un éther ; un thiol comporte le motif $\\ce{R-SH}$."
      },
      {
        "content": "$\\ce{R-C#N}$ → nitrile.",
        "correct": true,
        "explanation": "La présence d'une triple liaison carbone-azote $\\ce{C#N}$ constitue le motif caractéristique d'un nitrile."
      },
      {
        "content": "$\\ce{R-SH}$ → thiol.",
        "correct": true,
        "explanation": "Le groupe sulfhydryle $\\ce{-SH}$ lié à un groupe carboné caractérise une fonction thiol."
      }
    ],
    "explanation": "La reconnaissance d'une fonction azotée ou soufrée repose sur l'environnement immédiat de l'hétéroatome : triple liaison $\\ce{C#N}$ pour un nitrile, groupe $\\ce{-SH}$ pour un thiol, proximité d'un carbonyle pour une amide et azote tétravalent positif pour un ammonium quaternaire."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La choline est un nutriment essentiel, notamment important pour le bon fonctionnement du système nerveux. Elle est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle possède un nitrile.",
        "correct": false,
        "explanation": "Aucune triple liaison carbone-azote $\\ce{C#N}$ n'est présente dans la structure de la choline."
      },
      {
        "content": "L’atome d’azote porte une charge positive.",
        "correct": true,
        "explanation": "Dans l’ammonium quaternaire de la choline, l’azote est tétravalent et chargé positivement."
      },
      {
        "content": "Elle possède un groupe hydroxyle.",
        "correct": true,
        "explanation": "La chaîne carbonée porte un groupe terminal $\\ce{-OH}$, identifiable sur la représentation."
      },
      {
        "content": "Son azote est un ammonium quaternaire.",
        "correct": true,
        "explanation": "L'azote est lié à quatre groupes carbonés et porte une charge positive : ces deux caractéristiques définissent un ammonium quaternaire."
      },
      {
        "content": "Son azote est une amine tertiaire neutre.",
        "correct": false,
        "explanation": "Une amine tertiaire neutre possède trois substituants carbonés autour de l'azote. Ici, l'azote en porte quatre et est chargé positivement."
      }
    ],
    "explanation": "La choline associe un groupe hydroxyle et un ammonium quaternaire. Sa structure illustre particulièrement bien la différence entre un azote quaternaire chargé positivement et une amine tertiaire neutre.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "choline-topological"
    }
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La cystéine est un acide aminé soufré présent dans les protéines. Elle est représentée ci-dessous : [[QUESTION_DIAGRAM]] Concernant ses fonctions azotée et soufrée, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le groupe $\\ce{-SH}$ contient un atome d’oxygène.",
        "correct": false,
        "explanation": "Le groupe thiol $\\ce{-SH}$ contient du soufre et de l’hydrogène, pas d’oxygène."
      },
      {
        "content": "Elle possède une fonction thiol.",
        "correct": true,
        "explanation": "La chaîne latérale de la cystéine comporte un groupe sulfhydryle $\\ce{-SH}$, caractéristique d'une fonction thiol."
      },
      {
        "content": "Elle possède une amine primaire dans la représentation proposée.",
        "correct": true,
        "explanation": "L'azote du groupe $\\ce{-NH2}$ est lié à un seul carbone et n'est pas directement lié à un carbone carbonylé : il correspond ici à une amine primaire."
      },
      {
        "content": "Son groupe $\\ce{-NH2}$ constitue une fonction amide parce que la molécule contient aussi un groupe carboxyle.",
        "correct": false,
        "explanation": "La présence d'un carbonyle ailleurs dans la molécule ne suffit pas. Pour former une amide, l'azote doit être directement lié au carbone carbonylé, ce qui n'est pas le cas ici."
      },
      {
        "content": "Le groupe $\\ce{-SH}$ est un nitrile soufré.",
        "correct": false,
        "explanation": "Un nitrile nécessite une triple liaison $\\ce{C#N}$. Le motif $\\ce{-SH}$ correspond à une fonction thiol ; le terme « nitrile soufré » ne décrit pas ce groupe."
      }
    ],
    "explanation": "La cystéine illustre l'importance de lire localement les groupes fonctionnels : son groupe $\\ce{-SH}$ est un thiol et son groupe $\\ce{-NH2}$ correspond ici à une amine primaire. La présence d'autres fonctions dans la même molécule ne change pas automatiquement la nature de ces motifs.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "cysteine-topological"
    }
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L'acétylcholine est un neurotransmetteur impliqué notamment dans la transmission neuromusculaire. Elle est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle possède une fonction ester.",
        "correct": true,
        "explanation": "La structure comporte le motif $\\ce{C(=O)-O-C}$ : le carbone carbonylé est lié à un oxygène lui-même relié à un groupe carboné, ce qui caractérise un ester."
      },
      {
        "content": "Elle possède un ammonium quaternaire.",
        "correct": true,
        "explanation": "L'azote est lié à quatre groupes carbonés et porte une charge positive : il s'agit d'un ammonium quaternaire."
      },
      {
        "content": "La charge positive portée par son azote est une caractéristique du motif ammonium quaternaire représenté.",
        "correct": true,
        "explanation": "Un azote portant quatre substituants carbonés ne peut pas être décrit comme une amine tertiaire neutre ; dans ce motif, il est tétravalent et chargé positivement."
      },
      {
        "content": "L'oxygène simple de son ester constitue en plus une fonction éther indépendante.",
        "correct": false,
        "explanation": "L'oxygène lié par liaison simple au carbone carbonylé appartient au motif ester $\\ce{C(=O)-O-C}$. Il ne faut pas découper artificiellement ce motif pour lui attribuer une fonction éther indépendante."
      },
      {
        "content": "Elle possède une fonction nitrile.",
        "correct": false,
        "explanation": "La structure considérée ne présente pas de motif $\\ce{C#N}$."
      }
    ],
    "explanation": "L'acétylcholine associe une fonction ester et un ammonium quaternaire. Cette question exige de reconnaître les motifs complets : l'oxygène de l'ester ne constitue pas une fonction éther séparée.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "acetylcholine-topological"
    }
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le paracétamol est un médicament antalgique et antipyrétique couramment utilisé. Il est représenté ci-dessous : [[QUESTION_DIAGRAM]] Concernant son azote, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il ne constitue pas une amine libre.",
        "correct": true,
        "explanation": "La liaison directe entre l'azote et le carbone carbonylé classe ce motif parmi les amides ; l'azote ne doit donc pas être interprété comme celui d'une amine libre."
      },
      {
        "content": "Il appartient à un nitrile.",
        "correct": false,
        "explanation": "Un nitrile nécessiterait une triple liaison carbone-azote $\\ce{C#N}$, absente de la structure du paracétamol."
      },
      {
        "content": "La présence d'un atome d'azote suffit à classer la molécule comme amine.",
        "correct": false,
        "explanation": "La fonction chimique dépend de l'environnement de l'azote. Ici, sa liaison directe avec un carbone carbonylé conduit à une amide et non à une amine."
      },
      {
        "content": "Son azote est celui d’un ammonium quaternaire.",
        "correct": false,
        "explanation": "L’azote engagé dans le motif amide n’est pas un ammonium quaternaire."
      },
      {
        "content": "Il appartient à une fonction amide.",
        "correct": true,
        "explanation": "L'atome d'azote est directement lié au carbone d'un groupe carbonyle $\\ce{C=O}$ : cet environnement caractérise une fonction amide."
      }
    ],
    "explanation": "Le paracétamol illustre un piège fréquent : la présence d'un atome d'azote ne suffit pas à identifier une amine. Lorsqu'il est directement lié au carbone d'un groupe carbonyle, l'azote appartient à une fonction amide.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "paracetamol-topological"
    }
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La N-acétylcystéine est un médicament utilisé notamment comme mucolytique. Elle est représentée ci-dessous : [[QUESTION_DIAGRAM]] Concernant ses fonctions azotée et soufrée, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Son azote constitue encore une amine primaire libre, puisqu'il n'est lié qu'à un seul carbone non carbonylé.",
        "correct": false,
        "explanation": "Pour distinguer amine et amide, il faut tenir compte de la liaison directe de l'azote au carbone carbonylé. Cette liaison classe l'azote dans une fonction amide, même s'il porte encore un hydrogène."
      },
      {
        "content": "Son groupe $\\ce{-SH}$ devient une fonction alcool parce que le soufre et l'oxygène appartiennent à la même colonne du tableau périodique.",
        "correct": false,
        "explanation": "Un groupe alcool contient $\\ce{-OH}$, tandis que $\\ce{-SH}$ définit un thiol. Des propriétés périodiques voisines ne rendent pas ces deux fonctions identiques."
      },
      {
        "content": "Elle possède une fonction nitrile.",
        "correct": false,
        "explanation": "Aucune triple liaison $\\ce{C#N}$ n’est présente dans la structure."
      },
      {
        "content": "Elle possède une fonction thiol.",
        "correct": true,
        "explanation": "La structure conserve un groupe sulfhydryle $\\ce{-SH}$, qui correspond à une fonction thiol."
      },
      {
        "content": "Son azote appartient à une fonction amide.",
        "correct": true,
        "explanation": "L'azote est directement lié au carbone d'un groupe carbonyle dans le motif N-acétylé : cet environnement caractérise une amide."
      }
    ],
    "explanation": "La N-acétylcystéine associe notamment un thiol et une fonction amide. Le piège principal consiste à classer l'azote uniquement d'après le nombre de groupes carbonés qui lui sont liés sans remarquer sa liaison directe à un carbone carbonylé.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "n-acetylcysteine-topological"
    }
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "On compare $\\ce{CH3NH2}$ et $\\ce{CH3CONH2}$. Sélectionnez exactement les deux propositions correctes.",
    "choices": [
      {
        "content": "La présence du carbonyle ne change pas la famille fonctionnelle de l'azote.",
        "correct": false,
        "explanation": "Au contraire, la liaison directe de l'azote à un carbone carbonylé est précisément ce qui permet de distinguer une amide d'une amine."
      },
      {
        "content": "$\\ce{CH3CN}$ est une amide.",
        "correct": false,
        "explanation": "$\\ce{CH3CN}$ est un nitrile ; une amide comporte un azote directement lié à un carbone carbonylé."
      },
      {
        "content": "La première molécule est une amine.",
        "correct": true,
        "explanation": "Dans $\\ce{CH3NH2}$, l'azote est lié à un groupe carboné mais n'est pas directement lié à un carbone carbonylé : il s'agit d'une amine primaire."
      },
      {
        "content": "La seconde est une amide.",
        "correct": true,
        "explanation": "Dans $\\ce{CH3CONH2}$, l'azote est directement lié au carbone du groupe carbonyle $\\ce{C=O}$, ce qui caractérise une fonction amide."
      },
      {
        "content": "Les deux sont des nitriles.",
        "correct": false,
        "explanation": "Aucune des deux structures ne comporte de triple liaison carbone-azote $\\ce{C#N}$, motif nécessaire à une fonction nitrile."
      }
    ],
    "explanation": "La comparaison entre $\\ce{CH3NH2}$ et $\\ce{CH3CONH2}$ montre que l'environnement immédiat de l'azote détermine la fonction : amine lorsqu'il n'est pas lié à un carbonyle, amide lorsqu'il l'est directement."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "$\\ce{CH3NH2}$ → amine.",
        "correct": true,
        "explanation": "Dans la méthylamine $\\ce{CH3NH2}$, l'azote est lié à un seul groupe carboné et n'est pas adjacent à un carbonyle : il s'agit d'une amine primaire."
      },
      {
        "content": "$\\ce{CH3CONH2}$ → amide.",
        "correct": true,
        "explanation": "L'azote de $\\ce{CH3CONH2}$ est directement lié au carbone d'un groupe carbonyle, motif caractéristique d'une fonction amide."
      },
      {
        "content": "$\\ce{CH3CN}$ → nitrile.",
        "correct": true,
        "explanation": "La structure comporte une triple liaison carbone-azote $\\ce{C#N}$, qui définit une fonction nitrile."
      },
      {
        "content": "$\\ce{CH3SH}$ → thiol.",
        "correct": true,
        "explanation": "Le groupe $\\ce{-SH}$ lié au groupe méthyle est un groupe sulfhydryle et caractérise une fonction thiol."
      },
      {
        "content": "$\\ce{(CH3)4N+}$ → ammonium quaternaire.",
        "correct": true,
        "explanation": "L'azote est lié à quatre groupes méthyle et porte une charge positive : il s'agit d'un ammonium quaternaire."
      },
      {
        "content": "$\\ce{CH3CONH2}$ → amine primaire libre.",
        "correct": false,
        "explanation": "Même si l'azote porte deux hydrogènes, il est directement lié à un carbone carbonylé : le motif est une amide et non une amine primaire libre."
      },
      {
        "content": "$\\ce{CH3CN}$ → amide.",
        "correct": false,
        "explanation": "Une amide nécessite un azote directement lié à un groupe carbonyle ; $\\ce{CH3CN}$ possède au contraire une triple liaison $\\ce{C#N}$ et correspond à un nitrile."
      },
      {
        "content": "$\\ce{CH3SH}$ → alcool.",
        "correct": false,
        "explanation": "Un alcool comporte un groupe $\\ce{-OH}$. Dans $\\ce{CH3SH}$, l'oxygène est remplacé par un soufre et le groupe $\\ce{-SH}$ caractérise un thiol."
      },
      {
        "content": "$\\ce{(CH3)3N}$ → ammonium quaternaire.",
        "correct": false,
        "explanation": "Dans $\\ce{(CH3)3N}$, l'azote est lié à trois groupes carbonés et reste neutre : il s'agit d'une amine tertiaire, pas d'un ammonium quaternaire."
      },
      {
        "content": "$\\ce{CH3NH2}$ → nitrile.",
        "correct": false,
        "explanation": "La méthylamine ne comporte aucune triple liaison $\\ce{C#N}$ ; son azote appartient à une fonction amine primaire."
      }
    ],
    "explanation": "Pour identifier une fonction azotée ou soufrée, il faut lire le motif structural complet : azote non carbonylé pour une amine, azote lié à un carbonyle pour une amide, $\\ce{C#N}$ pour un nitrile, $\\ce{-SH}$ pour un thiol et azote tétravalent positif pour un ammonium quaternaire."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la triméthylamine $\\ce{(CH3)3N}$ et du tétraméthylammonium $\\ce{(CH3)4N+}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La triméthylamine est une amine tertiaire.",
        "correct": true,
        "explanation": "Trois groupes méthyle sont directement liés à l'azote : le qualificatif « tertiaire » décrit ce nombre de substituants carbonés."
      },
      {
        "content": "Le tétraméthylammonium est un ammonium quaternaire.",
        "correct": true,
        "explanation": "L'azote porte quatre groupes méthyle et une charge positive : ces caractéristiques définissent un ammonium quaternaire."
      },
      {
        "content": "Le mot « tertiaire » signifie simplement que l'azote est trivalent.",
        "correct": false,
        "explanation": "« Tertiaire » et « trivalent » décrivent deux notions différentes. Une amine est dite tertiaire parce que trois groupes carbonés sont liés à l'azote ; la valence décrit, elle, le nombre de liaisons formées par l'atome."
      },
      {
        "content": "Le mot « quaternaire » signifie que la molécule contient exactement quatre atomes de carbone.",
        "correct": false,
        "explanation": "Le qualificatif « quaternaire » se rapporte à l'azote : il est lié à quatre substituants organiques. Il ne fixe pas le nombre total d'atomes de carbone de la molécule."
      },
      {
        "content": "Dans la triméthylamine, trois groupes carbonés sont directement liés à l’azote.",
        "correct": true,
        "explanation": "La triméthylamine est une amine tertiaire : l’azote est lié à trois groupes méthyle."
      }
    ],
    "explanation": "Cette comparaison permet de distinguer plusieurs termes proches mais non synonymes : tertiaire décrit trois substituants carbonés autour de l'azote, tandis que quaternaire décrit un azote portant quatre substituants et une charge positive."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le captopril est un médicament utilisé notamment dans le traitement de l'hypertension artérielle. Il est représenté ci-dessous : [[QUESTION_DIAGRAM]] Concernant ses fonctions azotée et soufrée, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Son azote appartient à une fonction amide.",
        "correct": true,
        "explanation": "L'atome d'azote est directement lié au carbone d'un groupe carbonyle : cet environnement correspond à une fonction amide."
      },
      {
        "content": "Son azote est une amine tertiaire parce qu'il est engagé dans trois liaisons simples.",
        "correct": false,
        "explanation": "Le classement primaire, secondaire ou tertiaire d'une amine ne dépend pas du simple nombre de liaisons de l'azote. Ici, l'azote est directement lié à un carbone carbonylé : il appartient à une amide."
      },
      {
        "content": "Il possède un nitrile parce qu'il contient à la fois du carbone et de l'azote.",
        "correct": false,
        "explanation": "Un nitrile exige une triple liaison $\\ce{C#N}$. La présence séparée d'atomes de carbone et d'azote ne suffit pas à définir cette fonction."
      },
      {
        "content": "Son groupe soufré est un pont disulfure $\\ce{-S-S-}$.",
        "correct": false,
        "explanation": "La structure représentée comporte un thiol $\\ce{-SH}$ et non un pont disulfure."
      },
      {
        "content": "Il possède une fonction thiol.",
        "correct": true,
        "explanation": "La structure comporte un groupe sulfhydryle $\\ce{-SH}$, caractéristique d'une fonction thiol."
      }
    ],
    "explanation": "Le captopril montre qu'une molécule peut contenir plusieurs hétéroatomes sans que leur simple présence suffise à identifier les fonctions. Le groupe $\\ce{-SH}$ est un thiol, tandis que l'azote directement lié à un carbone carbonylé appartient à une amide.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "captopril-topological"
    }
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Dans la triméthylamine $\\ce{N(CH3)3}$, combien de groupes carbonés sont directement liés à l'azote ? Donnez uniquement la valeur numérique.",
    "answer": {
      "type": "number",
      "value": 3
    },
    "explanation": "La notation $\\ce{N(CH3)3}$ indique que trois groupes méthyle $\\ce{CH3}$ sont directement liés à l'atome d'azote. L'azote porte donc trois substituants carbonés, ce qui classe la triméthylamine parmi les amines tertiaires."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos d'un carbamate de motif $\\ce{RO-C(=O)-NR'R''}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbamate est identique à un ester, car les deux fonctions contiennent un motif $\\ce{C(=O)-O}$.",
        "correct": false,
        "explanation": "Le carbamate contient aussi un azote directement lié au carbone carbonylé. Cette partie azotée le distingue d'un ester simple."
      },
      {
        "content": "Le motif comporte un groupe carbonyle $\\ce{C=O}$.",
        "correct": true,
        "explanation": "Le carbone de la fonction amide est un carbone carbonylé."
      },
      {
        "content": "Le carbone carbonylé est lié par des liaisons simples à un oxygène et à un azote.",
        "correct": true,
        "explanation": "Outre sa double liaison à l'oxygène du carbonyle, ce carbone est lié à l'oxygène du groupe $\\ce{-OR}$ et à l'azote du groupe $\\ce{-NR'R''}$."
      },
      {
        "content": "L'azote constitue nécessairement une amine simple dès lors qu'il forme trois liaisons.",
        "correct": false,
        "explanation": "Le nombre de liaisons ne suffit pas à identifier une amine. Dans un carbamate, l'azote est directement lié à un carbone carbonylé et appartient au motif carbamate."
      },
      {
        "content": "Les deux oxygènes du carbamate sont directement liés l'un à l'autre par une liaison $\\ce{O-O}$.",
        "correct": false,
        "explanation": "Les deux oxygènes sont tous deux associés au carbone carbonylé mais ne sont pas liés directement entre eux. Une liaison $\\ce{O-O}$ évoquerait plutôt un motif peroxyde."
      }
    ],
    "explanation": "Le carbamate doit être reconnu comme un motif complet : $\\ce{RO-C(=O)-NR'R''}$. Des fragments comme $\\ce{C(=O)-O}$ ou $\\ce{C(=O)-N}$ peuvent rappeler d'autres fonctions, mais ils ne doivent pas conduire à découper artificiellement le carbamate."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans certaines protéines, deux cystéines peuvent former un pont disulfure $\\ce{-S-S-}$ après oxydation. Dans ce contexte, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le pont formé comporte une liaison directe entre les deux atomes de soufre.",
        "correct": true,
        "explanation": "Un pont disulfure contient le motif $\\ce{-S-S-}$."
      },
      {
        "content": "Les deux groupes thiol initiaux participent à la formation du pont.",
        "correct": true,
        "explanation": "Chaque cystéine apporte l'atome de soufre de son groupe $\\ce{-SH}$ ; après oxydation, les deux soufres deviennent directement liés dans le motif $\\ce{-S-S-}$."
      },
      {
        "content": "Après formation du pont, les deux soufres ne portent plus les hydrogènes des groupes thiol initiaux.",
        "correct": true,
        "explanation": "Le motif disulfure est $\\ce{-S-S-}$ et non $\\ce{-SH}$ : les hydrogènes initialement portés par les soufres ne sont plus présents sur ceux-ci."
      },
      {
        "content": "Un pont disulfure est une variété de nitrile dans laquelle l'azote est remplacé par du soufre.",
        "correct": false,
        "explanation": "Un nitrile est défini par une triple liaison $\\ce{C#N}$. Un pont disulfure correspond à une liaison simple $\\ce{S-S}$ entre deux atomes de soufre."
      },
      {
        "content": "Le pont $\\ce{-S-S-}$ contient encore deux fonctions thiol puisqu'il comporte deux atomes de soufre.",
        "correct": false,
        "explanation": "La présence de soufre ne suffit pas à définir un thiol. Une fonction thiol nécessite un groupe $\\ce{-SH}$ ; dans le pont disulfure, les deux soufres sont liés l'un à l'autre."
      }
    ],
    "explanation": "L'oxydation de deux fonctions thiol peut conduire à un pont disulfure $\\ce{-S-S-}$. Le piège consiste à identifier une fonction uniquement par l'élément présent : deux atomes de soufre ne signifient pas qu'il subsiste deux thiols."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "La formule $\\ce{HS-CH2-CH(NH2)-COOH}$ est celle de la cystéine. Sélectionnez exactement les deux propositions incorrectes.",
    "choices": [
      {
        "content": "Elle contient un nitrile.",
        "correct": true,
        "explanation": "Incorrect : aucune liaison C≡N n'est présente."
      },
      {
        "content": "Elle contient un ammonium quaternaire.",
        "correct": true,
        "explanation": "Incorrect : l'azote est une amine primaire neutre dans cette écriture."
      },
      {
        "content": "Elle contient un thiol.",
        "correct": false,
        "explanation": "Correct : HS- est un thiol."
      },
      {
        "content": "Elle contient un acide carboxylique.",
        "correct": false,
        "explanation": "Correct : COOH est présent."
      },
      {
        "content": "Dans cette écriture, le groupe $\\ce{NH2}$ correspond à une amine primaire.",
        "correct": false,
        "explanation": "Cette affirmation est correcte ; elle ne fait donc pas partie des deux propositions incorrectes à sélectionner."
      }
    ],
    "explanation": "Les deux propositions à sélectionner sont celles qui attribuent à tort un nitrile et un ammonium quaternaire à la cystéine."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles affirmations de synthèse sur les fonctions azotées et soufrées sont exactes ?",
    "choices": [
      {
        "content": "Une triple liaison $\\ce{C#N}$ constitue le motif caractéristique d'un nitrile.",
        "correct": true,
        "explanation": "Dans une fonction nitrile, le carbone et l'azote sont directement liés par une triple liaison $\\ce{C#N}$."
      },
      {
        "content": "Une espèce de motif $\\ce{R-CONH2}$ doit être classée comme amine primaire puisque l'azote est lié à un seul groupe carboné.",
        "correct": false,
        "explanation": "Le nombre de groupes carbonés liés à l'azote ne suffit pas à identifier une amine. Dans $\\ce{R-CONH2}$, l'azote est directement lié à un carbone carbonylé : le motif appartient à une amide, et non à une amine primaire libre."
      },
      {
        "content": "Dans l'expression « ammonium quaternaire », le mot quaternaire indique que la molécule contient quatre atomes de carbone.",
        "correct": false,
        "explanation": "« Quaternaire » qualifie l'environnement de l'azote : celui-ci est lié à quatre substituants organiques et porte une charge positive. Le nombre total d'atomes de carbone de la molécule peut être différent de quatre."
      },
      {
        "content": "$\\ce{R-SH}$ est le motif caractéristique d’un thiol.",
        "correct": true,
        "explanation": "Le motif sulfhydryle $\\ce{R-SH}$ définit la fonction thiol."
      },
      {
        "content": "L'environnement immédiat de l'azote est indispensable pour distinguer notamment amine, amide et ammonium.",
        "correct": true,
        "explanation": "Le même élément, l'azote, peut appartenir à plusieurs fonctions. Il faut examiner ses voisins, la présence éventuelle d'un carbone carbonylé et sa charge pour identifier correctement le motif."
      }
    ],
    "explanation": "Les fonctions azotées et soufrées doivent être reconnues à partir de motifs structuraux complets. Les mots primaire, secondaire, tertiaire ou quaternaire décrivent un environnement atomique précis ; ils ne correspondent ni au nombre total d'éléments ni au nombre total de carbones de la molécule."
  }
];
