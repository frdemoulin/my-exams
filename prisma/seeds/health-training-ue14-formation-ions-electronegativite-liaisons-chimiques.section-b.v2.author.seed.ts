import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 – Chimie générale – Chapitre 1.2 – Section B – Liaisons chimiques */
export const UE14_CH2_LIAISONS_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 21,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle proposition décrit le mieux une liaison covalente ?",
    "choices": [
      {
        "content": "Deux neutrons sont échangés.",
        "correct": false,
        "explanation": "Les neutrons ne participent pas aux liaisons chimiques ordinaires."
      },
      {
        "content": "Aucun électron n'intervient.",
        "correct": false,
        "explanation": "Les électrons de valence sont au cœur de la liaison."
      },
      {
        "content": "Deux noyaux fusionnent.",
        "correct": false,
        "explanation": "Une liaison chimique ne modifie pas les noyaux."
      },
      {
        "content": "Un électron est toujours totalement transféré d'un atome à l'autre.",
        "correct": false,
        "explanation": "Cela décrit le modèle limite d'une liaison ionique."
      },
      {
        "content": "Deux atomes partagent un ou plusieurs doublets d'électrons.",
        "correct": true,
        "explanation": "La liaison covalente repose sur le partage électronique."
      }
    ],
    "explanation": "Une liaison covalente peut être simple, double ou triple selon le nombre de doublets partagés."
  },
  {
    "order": 22,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant doublets liants et non liants, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un doublet non liant reste localisé principalement sur un atome.",
        "correct": true,
        "explanation": "Il n'est pas engagé dans une liaison covalente ordinaire."
      },
      {
        "content": "Un doublet liant contient toujours quatre électrons.",
        "correct": false,
        "explanation": "Un doublet contient deux électrons."
      },
      {
        "content": "Un doublet non liant ne peut jamais participer à une réaction.",
        "correct": false,
        "explanation": "Il peut agir comme donneur d'électrons."
      },
      {
        "content": "Un doublet liant est partagé entre deux atomes dans une liaison covalente.",
        "correct": true,
        "explanation": "Il contribue directement à la liaison."
      },
      {
        "content": "Les doublets non liants peuvent influencer la géométrie moléculaire.",
        "correct": true,
        "explanation": "Ils exercent des répulsions électroniques."
      }
    ],
    "explanation": "La distinction liant/non liant est essentielle pour comprendre géométrie, réactivité et coordination.",
    "requiredSelectionCount": 3
  },
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de doublets non liants porte l'azote dans une molécule neutre d'ammoniac $\\ce{NH3}$ ?",
    "answer": {
      "type": "number",
      "value": 1,
      "tolerance": 0
    },
    "explanation": "L'azote forme trois liaisons N–H et conserve un doublet non liant."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Qu'est-ce qu'une liaison de coordination dans le modèle de Lewis ?",
    "choices": [
      {
        "content": "Une liaison exclusivement entre deux anions.",
        "correct": false,
        "explanation": "Elle implique un donneur et un accepteur de doublet."
      },
      {
        "content": "Une liaison ne comportant aucun électron.",
        "correct": false,
        "explanation": "Elle repose au contraire sur un doublet."
      },
      {
        "content": "Une liaison créée par transfert d'un neutron.",
        "correct": false,
        "explanation": "Aucun neutron n'intervient."
      },
      {
        "content": "Une liaison covalente dont les deux électrons du doublet liant proviennent initialement du même partenaire.",
        "correct": true,
        "explanation": "Un donneur fournit un doublet à un accepteur."
      },
      {
        "content": "Une interaction qui reste toujours différente des autres liaisons après formation.",
        "correct": false,
        "explanation": "Après formation, elle peut devenir indiscernable de liaisons covalentes équivalentes."
      }
    ],
    "explanation": "La notion de coordination décrit l'origine du doublet lors de la formation de la liaison."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans un complexe de coordination, quel rôle joue un ligand donneur ?",
    "choices": [
      {
        "content": "Il fournit un doublet électronique au centre accepteur.",
        "correct": true,
        "explanation": "Le ligand agit comme base de Lewis."
      },
      {
        "content": "Il détruit le noyau du métal.",
        "correct": false,
        "explanation": "Aucune transformation nucléaire n'a lieu."
      },
      {
        "content": "Il fournit un neutron au métal.",
        "correct": false,
        "explanation": "La coordination est électronique."
      },
      {
        "content": "Il doit toujours être chargé négativement.",
        "correct": false,
        "explanation": "Des ligands neutres comme $\\ce{NH3}$ existent."
      },
      {
        "content": "Il capte nécessairement un proton.",
        "correct": false,
        "explanation": "Ce n'est pas la définition d'un ligand."
      }
    ],
    "explanation": "La liaison métal-ligand est souvent décrite comme une interaction donneur-accepteur de doublet."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans une liaison polarisée A–B, si B est plus électronégatif que A, quelle notation est cohérente ?",
    "choices": [
      {
        "content": "La liaison est nécessairement apolaire.",
        "correct": false,
        "explanation": "Une différence d'électronégativité entraîne une polarisation."
      },
      {
        "content": "$\\ce{A^{\\delta-}-B^{\\delta+}}$.",
        "correct": false,
        "explanation": "Les charges partielles seraient inversées."
      },
      {
        "content": "A et B portent nécessairement des charges entières.",
        "correct": false,
        "explanation": "Une liaison polarisée covalente porte des charges partielles."
      },
      {
        "content": "$\\ce{A^{\\delta+}-B^{\\delta-}}$.",
        "correct": true,
        "explanation": "Le doublet est déplacé vers l'atome le plus électronégatif."
      },
      {
        "content": "B perd obligatoirement tous ses électrons de valence.",
        "correct": false,
        "explanation": "Une polarisation ne correspond pas à un transfert total."
      }
    ],
    "explanation": "Le symbole δ traduit une charge partielle, différente d'une charge ionique entière."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "On prend $\\chi(\\ce{C})=2{,}5$ et $\\chi(\\ce{O})=3{,}5$. Quelle est la différence d'électronégativité $\\Delta\\chi$ de la liaison C–O ?",
    "answer": {
      "type": "number",
      "value": 1.0,
      "tolerance": 0.01
    },
    "explanation": "$\\Delta\\chi=|3{,}5-2{,}5|=1{,}0$."
  },
  {
    "order": 33,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle définition correspond à la mésomérie (résonance) ?",
    "choices": [
      {
        "content": "Plusieurs formules limites décrivent une même structure électronique délocalisée.",
        "correct": true,
        "explanation": "La structure réelle est un hybride de résonance."
      },
      {
        "content": "Les noyaux changent de place entre les formes limites.",
        "correct": false,
        "explanation": "Seule la représentation électronique diffère."
      },
      {
        "content": "Elle n'existe que pour les ions métalliques.",
        "correct": false,
        "explanation": "Elle est fréquente en chimie organique et inorganique."
      },
      {
        "content": "La molécule alterne physiquement entre plusieurs structures indépendantes.",
        "correct": false,
        "explanation": "Les formes limites ne sont pas des espèces qui s'interconvertissent."
      },
      {
        "content": "La mésomérie implique toujours une rupture de liaison.",
        "correct": false,
        "explanation": "Elle décrit une délocalisation électronique."
      }
    ],
    "explanation": "La mésomérie traduit une délocalisation d'électrons qu'une seule formule de Lewis représente imparfaitement."
  },
  {
    "order": 37,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle rupture d'une liaison covalente conduit directement à deux espèces radicalaires ?",
    "choices": [
      {
        "content": "Une rupture hétérolytique.",
        "correct": false,
        "explanation": "Le doublet va entièrement vers un fragment, donnant des ions."
      },
      {
        "content": "Une rupture homolytique.",
        "correct": true,
        "explanation": "Chaque fragment récupère un électron du doublet liant."
      },
      {
        "content": "Une coordination.",
        "correct": false,
        "explanation": "La coordination forme une liaison."
      },
      {
        "content": "Une protonation.",
        "correct": false,
        "explanation": "Ce n'est pas un mode de rupture de liaison."
      },
      {
        "content": "Une solvatation.",
        "correct": false,
        "explanation": "La solvatation n'implique pas nécessairement une rupture covalente."
      }
    ],
    "explanation": "La rupture homolytique produit des radicaux, alors que la rupture hétérolytique produit des espèces ioniques."
  },
  {
    "order": 38,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'effet inductif, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il nécessite obligatoirement une conjugaison pi.",
        "correct": false,
        "explanation": "La conjugaison est plutôt associée aux effets mésomères."
      },
      {
        "content": "Un substituant électronégatif peut exercer un effet inductif attracteur.",
        "correct": true,
        "explanation": "Il attire la densité électronique à travers les liaisons σ."
      },
      {
        "content": "Il implique le déplacement des noyaux atomiques.",
        "correct": false,
        "explanation": "Il s'agit d'une redistribution électronique."
      },
      {
        "content": "Il décroît généralement avec la distance.",
        "correct": true,
        "explanation": "Son influence s'atténue rapidement."
      },
      {
        "content": "Il correspond à une polarisation transmise au travers des liaisons sigma.",
        "correct": true,
        "explanation": "L'effet se propage le long du squelette σ."
      }
    ],
    "explanation": "Effets inductif et mésomère sont deux modes distincts de redistribution électronique."
  }
];

export const UE14_CH2_LIAISONS_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 25,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les liaisons simple, double et triple entre deux atomes de carbone, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une double liaison C=C comporte une sigma et une pi.",
        "correct": true,
        "explanation": "La première liaison est σ, la seconde π."
      },
      {
        "content": "Une liaison pi résulte typiquement d'un recouvrement axial.",
        "correct": false,
        "explanation": "Le recouvrement axial donne σ ; le recouvrement latéral donne π."
      },
      {
        "content": "Une triple liaison C≡C comporte une sigma et deux pi.",
        "correct": true,
        "explanation": "Une triple liaison est σ+2π."
      },
      {
        "content": "Une triple liaison contient trois liaisons sigma.",
        "correct": false,
        "explanation": "Elle contient une seule σ."
      },
      {
        "content": "Une liaison simple C–C comporte une liaison sigma.",
        "correct": true,
        "explanation": "Une liaison simple est une liaison σ."
      }
    ],
    "explanation": "Le décompte σ/π prépare directement l'étude de l'hybridation et de la géométrie moléculaire."
  },
  {
    "order": 24,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sur les valences usuelles du carbone et du phosphore sont exactes ?",
    "choices": [
      {
        "content": "Le phosphore ne peut jamais dépasser l'octet dans les modèles usuels.",
        "correct": false,
        "explanation": "Des descriptions hypervalentes sont courantes pour des composés du phosphore."
      },
      {
        "content": "Le carbone neutre forme très souvent quatre liaisons covalentes dans les molécules organiques.",
        "correct": true,
        "explanation": "La tétravalence du carbone est fondamentale."
      },
      {
        "content": "Le carbone forme typiquement six liaisons simples simultanées dans les molécules organiques neutres usuelles.",
        "correct": false,
        "explanation": "Ce n'est pas sa valence usuelle."
      },
      {
        "content": "Le carbone respecte couramment l'octet dans les molécules organiques stables.",
        "correct": true,
        "explanation": "Quatre liaisons lui donnent huit électrons autour de lui."
      },
      {
        "content": "Le phosphore peut former plus de quatre liaisons dans certains composés.",
        "correct": true,
        "explanation": "Des espèces hypercoordonnées du phosphore existent."
      }
    ],
    "explanation": "Le carbone est typiquement tétravalent ; le phosphore présente une chimie de coordination plus variée."
  },
  {
    "order": 27,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Lors de $\\ce{NH3 + H+ -> NH4+}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Après formation de $\\ce{NH4+}$, les quatre liaisons N–H sont équivalentes.",
        "correct": true,
        "explanation": "L'origine différente d'une liaison n'est plus distinguable dans l'ion tétraédrique."
      },
      {
        "content": "Le proton agit comme accepteur de doublet.",
        "correct": true,
        "explanation": "$\\ce{H+}$ ne possède pas d'électron à partager."
      },
      {
        "content": "Le doublet non liant de l'azote est donné au proton lors de la formation de la nouvelle liaison.",
        "correct": true,
        "explanation": "L'ammoniac agit comme donneur de doublet."
      },
      {
        "content": "La réaction implique une rupture homolytique.",
        "correct": false,
        "explanation": "Il s'agit d'une formation de liaison par donation de doublet."
      },
      {
        "content": "L'azote perd un proton.",
        "correct": false,
        "explanation": "Il fixe au contraire un proton."
      }
    ],
    "explanation": "La liaison dite dative décrit le mécanisme de formation, pas une différence permanente entre les quatre liaisons N–H."
  },
  {
    "order": 29,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la coordination du fer de l'hème dans l'hémoglobine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le fer est lié à l'hème par des liaisons exclusivement ioniques sans donation de doublet.",
        "correct": false,
        "explanation": "La coordination implique des interactions donneur-accepteur."
      },
      {
        "content": "Un azote d'une histidine proximale coordonne également le fer.",
        "correct": true,
        "explanation": "Il constitue le cinquième ligand."
      },
      {
        "content": "Quatre atomes d'azote de la porphyrine coordonnent le fer.",
        "correct": true,
        "explanation": "Ils occupent quatre positions dans le plan de l'hème."
      },
      {
        "content": "Le fer de l'hème est un atome d'hydrogène.",
        "correct": false,
        "explanation": "Il s'agit d'un ion ferreux dans l'hémoglobine fonctionnelle."
      },
      {
        "content": "Le dioxygène peut occuper transitoirement une sixième position de coordination.",
        "correct": true,
        "explanation": "C'est la base de la fixation réversible de O2."
      }
    ],
    "explanation": "La géométrie de coordination du fer de l'hème est centrale pour le transport du dioxygène."
  },
  {
    "order": 31,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Une liaison possède un moment dipolaire $\\mu=1{,}0\\,\\mathrm{D}$ et une distance internucléaire $d=100\\,\\mathrm{pm}$. Avec $1\\,\\mathrm{D}=3{,}34\\times10^{-30}\\,\\mathrm{C\\,m}$, quelle charge partielle q obtient-on en coulombs avec $\\mu=q d$ ?",
    "answer": {
      "type": "number",
      "value": 3.34e-20,
      "tolerance": 3e-22
    },
    "explanation": "$d=100\\,\\mathrm{pm}=10^{-10}\\,\\mathrm{m}$ ; q=$3{,}34\\times10^{-30}/10^{-10}=3{,}34\\times10^{-20}\\,\\mathrm C$."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Concernant la mésomérie du protoxyde d'azote $\\ce{N2O}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les atomes changent d'ordre entre les formes mésomères.",
        "correct": false,
        "explanation": "Le squelette atomique reste identique."
      },
      {
        "content": "La mésomérie signifie que la molécule se casse puis se reforme.",
        "correct": false,
        "explanation": "Il n'y a pas rupture et recombinaison."
      },
      {
        "content": "La structure réelle est mieux décrite comme un hybride de ces formes.",
        "correct": true,
        "explanation": "Les électrons sont délocalisés."
      },
      {
        "content": "Une seule formule de Lewis suffit toujours à décrire exactement la distribution électronique.",
        "correct": false,
        "explanation": "La mésomérie apparaît précisément lorsque ce n'est pas le cas."
      },
      {
        "content": "Plusieurs formules de Lewis limites peuvent contribuer à sa description.",
        "correct": true,
        "explanation": "La répartition des charges et des liaisons peut être représentée par plusieurs formes limites."
      }
    ],
    "explanation": "La mésomérie est une propriété de la description électronique, pas une oscillation structurale.",
    "requiredSelectionCount": 2
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans une liaison amide $\\ce{-C(=O)-NH-}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La liaison C–N acquiert un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "La délocalisation raccourcit et rigidifie la liaison C–N."
      },
      {
        "content": "La rotation autour de C–N est plus limitée que pour une liaison simple ordinaire.",
        "correct": true,
        "explanation": "Le caractère partiel de double liaison augmente la barrière de rotation."
      },
      {
        "content": "Le doublet de l'azote peut être délocalisé vers le groupe carbonyle.",
        "correct": true,
        "explanation": "C'est une contribution mésomère importante."
      },
      {
        "content": "La liaison amide est librement rotatable comme une simple liaison C–C d'alcane.",
        "correct": false,
        "explanation": "La rotation est restreinte."
      },
      {
        "content": "Le doublet de l'azote est totalement sans influence sur le carbonyle.",
        "correct": false,
        "explanation": "Il participe à la conjugaison."
      }
    ],
    "explanation": "La mésomérie explique la planéité et la rigidité de la liaison peptidique."
  },
  {
    "order": 50,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle définition décrit correctement une espèce radicalaire ?",
    "choices": [
      {
        "content": "Une espèce nécessairement métallique.",
        "correct": false,
        "explanation": "De nombreux radicaux sont organiques."
      },
      {
        "content": "Une espèce dont tous les électrons sont appariés.",
        "correct": false,
        "explanation": "Cela exclurait précisément le caractère radicalaire."
      },
      {
        "content": "Une espèce possédant au moins un électron non apparié.",
        "correct": true,
        "explanation": "C'est la caractéristique électronique d'un radical."
      },
      {
        "content": "Une espèce possédant obligatoirement une charge négative.",
        "correct": false,
        "explanation": "Un radical peut être neutre ou chargé."
      },
      {
        "content": "Une espèce ne contenant aucun électron.",
        "correct": false,
        "explanation": "Un radical contient des électrons."
      }
    ],
    "explanation": "La présence d'un électron célibataire explique souvent la forte réactivité des radicaux."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Lors de la radiolyse de l'eau par rupture homolytique d'une liaison O–H, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La transformation implique une réaction nucléaire.",
        "correct": false,
        "explanation": "Il s'agit d'une transformation électronique."
      },
      {
        "content": "La rupture est hétérolytique.",
        "correct": false,
        "explanation": "Une hétérolyse attribuerait les deux électrons au même fragment."
      },
      {
        "content": "Chaque fragment récupère un électron du doublet liant.",
        "correct": true,
        "explanation": "C'est la définition de l'homolyse."
      },
      {
        "content": "Le radical hydroxyle peut participer à des dommages oxydatifs biomoléculaires.",
        "correct": true,
        "explanation": "$\\ce{HO.}$ est extrêmement réactif."
      },
      {
        "content": "Des espèces radicalaires peuvent être formées.",
        "correct": true,
        "explanation": "Par exemple $\\ce{HO.}$ et $\\ce{H.}$."
      }
    ],
    "explanation": "La radiolyse de l'eau constitue un lien important entre énergie ionisante et chimie radicalaire."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "L'énergie de dissociation d'une liaison O–H vaut $460\\,\\mathrm{kJ\\,mol^{-1}}$. Quelle énergie cela représente-t-il en joules par mole ?",
    "answer": {
      "type": "number",
      "value": 460000,
      "tolerance": 1
    },
    "explanation": "$460\\,\\mathrm{kJ\\,mol^{-1}}=460000\\,\\mathrm{J\\,mol^{-1}}$."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans le cisplatine $\\ce{[PtCl2(NH3)2]}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les ions chlorure sont également des ligands du platine.",
        "correct": true,
        "explanation": "Ils occupent deux positions de coordination."
      },
      {
        "content": "Le platine est le centre de coordination.",
        "correct": true,
        "explanation": "Pt(II) accepte des doublets de ligands."
      },
      {
        "content": "Le complexe ne contient aucune liaison de coordination.",
        "correct": false,
        "explanation": "La coordination est au cœur de sa structure."
      },
      {
        "content": "Les molécules d'ammoniac coordonnent le platine par l'azote.",
        "correct": true,
        "explanation": "Le doublet de N est donneur."
      },
      {
        "content": "Le platine agit comme donneur principal de doublet vers l'ammoniac.",
        "correct": false,
        "explanation": "Le métal agit comme accepteur de doublet dans le modèle de Lewis."
      }
    ],
    "explanation": "Le cisplatine illustre la chimie donneur-accepteur des complexes métalliques."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les liaisons polarisées et apolaires, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une liaison H–Cl est polarisée vers l'hydrogène.",
        "correct": false,
        "explanation": "Cl est plus électronégatif que H."
      },
      {
        "content": "Une liaison polarisée implique obligatoirement des charges entières.",
        "correct": false,
        "explanation": "Elle peut porter seulement des charges partielles."
      },
      {
        "content": "Une liaison C–O est polarisée vers l'oxygène.",
        "correct": true,
        "explanation": "O est plus électronégatif que C."
      },
      {
        "content": "Une différence d'électronégativité crée généralement une polarisation de liaison.",
        "correct": true,
        "explanation": "Le doublet est attiré vers l'atome le plus électronégatif."
      },
      {
        "content": "Une liaison entre deux atomes identiques est apolaire dans le modèle simple.",
        "correct": true,
        "explanation": "Les électronégativités sont identiques."
      }
    ],
    "explanation": "La polarité de liaison est une notion continue, distincte de l'attribution formelle de charges entières."
  }
];
