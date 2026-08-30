import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 – Chimie générale – Chapitre 1.3 – Section A – Orbitales moléculaires et liaisons sigma/pi */
export const UE14_CH3_OM_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle définition décrit le mieux une orbitale moléculaire ?",
    "choices": [
      {
        "content": "Une propriété réservée aux molécules ioniques.",
        "correct": false,
        "explanation": "Le modèle des orbitales moléculaires s'applique aussi aux molécules covalentes."
      },
      {
        "content": "Un type de nucléon.",
        "correct": false,
        "explanation": "Les orbitales décrivent les électrons, pas les constituants du noyau."
      },
      {
        "content": "Une fonction décrivant un état électronique étendu à l'ensemble de la molécule.",
        "correct": true,
        "explanation": "Une orbitale moléculaire résulte de la combinaison d'orbitales atomiques et peut être délocalisée sur plusieurs noyaux."
      },
      {
        "content": "Une trajectoire circulaire suivie par un électron autour d'un seul noyau.",
        "correct": false,
        "explanation": "Le modèle quantique ne décrit pas les électrons par des trajectoires classiques."
      },
      {
        "content": "Une liaison chimique contenant obligatoirement deux électrons.",
        "correct": false,
        "explanation": "Une orbitale peut être vide, mono- ou bioccupée."
      }
    ],
    "explanation": "Une orbitale moléculaire est un état électronique de la molécule entière ; son occupation détermine notamment la stabilité des liaisons."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant une liaison $\\sigma$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle résulte obligatoirement d'un recouvrement latéral de deux orbitales p.",
        "correct": false,
        "explanation": "Le recouvrement latéral produit une liaison pi."
      },
      {
        "content": "Elle possède une symétrie de révolution autour de l'axe internucléaire.",
        "correct": true,
        "explanation": "C'est une caractéristique d'une liaison sigma."
      },
      {
        "content": "Elle résulte d'un recouvrement axial le long de l'axe internucléaire.",
        "correct": true,
        "explanation": "La densité électronique est concentrée autour de l'axe reliant les noyaux."
      },
      {
        "content": "Elle interdit toujours toute rotation autour de l'axe de liaison.",
        "correct": false,
        "explanation": "Une liaison sigma seule permet généralement une rotation plus libre qu'une liaison multiple."
      },
      {
        "content": "Une liaison simple covalente comporte une composante $\\sigma$.",
        "correct": true,
        "explanation": "Une liaison simple est une liaison sigma."
      }
    ],
    "explanation": "La composante sigma constitue la première liaison entre deux atomes ; les composantes supplémentaires d'une liaison multiple sont de type pi."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quels recouvrements peuvent former une liaison $\\sigma$ lorsqu'ils sont correctement orientés ?",
    "choices": [
      {
        "content": "Deux orbitales sans aucun recouvrement spatial.",
        "correct": false,
        "explanation": "Une liaison covalente nécessite un recouvrement non nul."
      },
      {
        "content": "Un recouvrement s–p axial.",
        "correct": true,
        "explanation": "Une orbitale s et une orbitale p orientée vers l'autre noyau peuvent former une sigma."
      },
      {
        "content": "Un recouvrement p–p axial.",
        "correct": true,
        "explanation": "Deux orbitales p alignées sur l'axe peuvent former une sigma."
      },
      {
        "content": "Un recouvrement s–s axial.",
        "correct": true,
        "explanation": "Deux orbitales s peuvent se recouvrir sur l'axe internucléaire."
      },
      {
        "content": "Un recouvrement p–p strictement latéral.",
        "correct": false,
        "explanation": "Il conduit à une liaison pi."
      }
    ],
    "explanation": "La nature sigma ou pi dépend de la symétrie du recouvrement par rapport à l'axe internucléaire."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Lors de la combinaison de deux orbitales atomiques de même symétrie, que produit le modèle LCAO le plus simple ?",
    "choices": [
      {
        "content": "Deux orbitales moléculaires toutes deux liantes.",
        "correct": false,
        "explanation": "L'une est liante et l'autre antiliante."
      },
      {
        "content": "Un proton et un neutron.",
        "correct": false,
        "explanation": "Il n'y a aucune transformation nucléaire."
      },
      {
        "content": "Une seule orbitale moléculaire.",
        "correct": false,
        "explanation": "Deux orbitales atomiques donnent deux orbitales moléculaires."
      },
      {
        "content": "Une orbitale moléculaire liante et une orbitale moléculaire antiliante.",
        "correct": true,
        "explanation": "La combinaison en phase stabilise ; la combinaison en opposition de phase déstabilise."
      },
      {
        "content": "Deux orbitales atomiques inchangées et sans interaction.",
        "correct": false,
        "explanation": "La combinaison traduit précisément leur interaction."
      }
    ],
    "explanation": "La conservation du nombre d'orbitales est essentielle : deux OA combinées donnent deux OM, l'une plus basse et l'autre plus haute en énergie."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle proposition décrit correctement une liaison $\\pi$ ?",
    "choices": [
      {
        "content": "Elle résulte d'un recouvrement latéral de deux orbitales parallèles, souvent p.",
        "correct": true,
        "explanation": "La densité électronique se situe de part et d'autre de l'axe internucléaire."
      },
      {
        "content": "Elle possède une densité maximale exactement sur l'axe internucléaire.",
        "correct": false,
        "explanation": "La densité pi est nulle sur un plan nodal contenant l'axe."
      },
      {
        "content": "Elle est toujours la seule liaison entre deux atomes.",
        "correct": false,
        "explanation": "Une liaison pi accompagne une liaison sigma dans les liaisons multiples usuelles."
      },
      {
        "content": "Elle est indépendante de l'orientation des orbitales.",
        "correct": false,
        "explanation": "Le parallélisme des orbitales est déterminant."
      },
      {
        "content": "Elle provient d'un recouvrement axial s–s.",
        "correct": false,
        "explanation": "Ce recouvrement forme une sigma."
      }
    ],
    "explanation": "Une liaison pi exige des orbitales correctement orientées ; cette contrainte explique la limitation de rotation des doubles liaisons."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles différences entre liaisons $\\sigma$ et $\\pi$ sont correctes ?",
    "choices": [
      {
        "content": "Une triple liaison comporte une sigma et deux pi.",
        "correct": true,
        "explanation": "Les deux orbitales p non hybridées peuvent former deux pi orthogonales."
      },
      {
        "content": "Une liaison pi est généralement plus forte qu'une sigma formée entre les mêmes types d'atomes.",
        "correct": false,
        "explanation": "Le recouvrement latéral est généralement moins efficace."
      },
      {
        "content": "Le recouvrement sigma est axial, le recouvrement pi est latéral.",
        "correct": true,
        "explanation": "C'est la distinction géométrique fondamentale."
      },
      {
        "content": "Une double liaison comporte une sigma et une pi.",
        "correct": true,
        "explanation": "La deuxième composante est pi."
      },
      {
        "content": "Une liaison simple C–C d'alcane contient une liaison pi.",
        "correct": false,
        "explanation": "Elle contient seulement une sigma."
      }
    ],
    "explanation": "Le décompte sigma/pi permet de relier représentation de Lewis, géométrie et liberté de rotation."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans une représentation locale simple d'une double liaison $\\ce{O=O}$, combien de composantes $\\pi$ comporte la double liaison ?",
    "choices": [
      {
        "content": "Trois.",
        "correct": false,
        "explanation": "Une double liaison ne contient que deux composantes au total."
      },
      {
        "content": "Une.",
        "correct": true,
        "explanation": "Une double liaison se décompose en une sigma et une pi."
      },
      {
        "content": "Quatre.",
        "correct": false,
        "explanation": "Ce nombre ne correspond pas au modèle sigma/pi."
      },
      {
        "content": "Deux.",
        "correct": false,
        "explanation": "Deux pi correspondent à une triple liaison."
      },
      {
        "content": "Zéro.",
        "correct": false,
        "explanation": "Il existe une composante pi."
      }
    ],
    "explanation": "Le modèle local sigma/pi permet de compter simplement les composantes d'une liaison multiple, indépendamment d'une description OM plus complète du dioxygène."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de liaisons $\\sigma$ contient la molécule $\\ce{H-O-O-H}$ ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Les deux liaisons O–H et la liaison O–O sont des liaisons simples, donc trois sigma."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans $\\ce{H-Cl}$, quel recouvrement est le plus directement associé à la liaison $\\sigma$ ?",
    "choices": [
      {
        "content": "Recouvrement entre deux orbitales 1s du chlore.",
        "correct": false,
        "explanation": "Les orbitales de cœur du chlore ne forment pas la liaison H–Cl."
      },
      {
        "content": "Recouvrement latéral entre deux orbitales p parallèles.",
        "correct": false,
        "explanation": "Cela formerait une liaison pi."
      },
      {
        "content": "Absence totale de recouvrement.",
        "correct": false,
        "explanation": "La liaison covalente nécessite un recouvrement."
      },
      {
        "content": "Recouvrement axial entre l'orbitale 1s de H et une orbitale p de Cl orientée selon l'axe de liaison.",
        "correct": true,
        "explanation": "La symétrie axiale conduit à une liaison sigma."
      },
      {
        "content": "Recouvrement de deux orbitales d uniquement.",
        "correct": false,
        "explanation": "L'hydrogène ne possède pas d'orbitale d occupée de valence."
      }
    ],
    "explanation": "La liaison H–Cl illustre qu'une sigma peut résulter d'orbitales atomiques de types différents."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de composantes $\\pi$ comporte une triple liaison covalente classique ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Une triple liaison comporte une composante sigma et deux composantes pi."
  }
];

export const UE14_CH3_OM_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans $\\ce{H-C#N}$, combien de liaisons $\\sigma$ y a-t-il au total ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "H–C fournit une sigma ; C≡N contient une sigma et deux pi. Total : deux sigma."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour l'urée $\\ce{O=C(NH2)2}$ dans une représentation localisée simple, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La molécule contient exactement deux liaisons pi localisées indépendantes.",
        "correct": false,
        "explanation": "La représentation de Lewis simple contient une pi C=O ; la délocalisation amide demande ensuite une description mésomère."
      },
      {
        "content": "Les quatre liaisons N–H sont sigma.",
        "correct": true,
        "explanation": "Ce sont des liaisons simples."
      },
      {
        "content": "La liaison C=O comporte une sigma et une pi.",
        "correct": true,
        "explanation": "Toute double liaison comporte ces deux composantes."
      },
      {
        "content": "Les deux liaisons C–N possèdent une composante sigma.",
        "correct": true,
        "explanation": "Chaque liaison C–N comprend au moins une sigma."
      },
      {
        "content": "La molécule ne contient aucune liaison sigma.",
        "correct": false,
        "explanation": "Elle en contient plusieurs."
      }
    ],
    "explanation": "Le décompte local donne sept sigma et une pi dans une structure de Lewis donnée ; la mésomérie redistribue ensuite le caractère de liaison."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le méthanamide $\\ce{H-C(=O)-NH2}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le groupe amide est librement rotatable comme une liaison C–C d'alcane.",
        "correct": false,
        "explanation": "La rotation est restreinte."
      },
      {
        "content": "Le carbonyle comporte une composante pi.",
        "correct": true,
        "explanation": "C=O est une double liaison."
      },
      {
        "content": "La rotation autour de C–N est plus limitée que pour une liaison simple C–N d'amine.",
        "correct": true,
        "explanation": "Le caractère partiel de double liaison augmente la barrière de rotation."
      },
      {
        "content": "La délocalisation du doublet de l'azote confère un caractère partiel de double liaison à C–N.",
        "correct": true,
        "explanation": "La mésomérie rigidifie l'amide."
      },
      {
        "content": "Le doublet de l'azote est totalement sans interaction avec le carbonyle.",
        "correct": false,
        "explanation": "Il participe à la conjugaison."
      }
    ],
    "explanation": "La description sigma/pi doit être complétée par la mésomérie lorsqu'une délocalisation électronique est importante."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle relation d'énergie est correcte entre une OM liante et l'OM antiliante correspondante ?",
    "choices": [
      {
        "content": "L'OM antiliante est toujours plus basse en énergie.",
        "correct": false,
        "explanation": "Elle est déstabilisante."
      },
      {
        "content": "Une OM liante n'accueille jamais d'électron.",
        "correct": false,
        "explanation": "Elle peut être occupée."
      },
      {
        "content": "L'OM liante est plus basse en énergie que les orbitales atomiques de départ, l'antiliaison est plus haute.",
        "correct": true,
        "explanation": "La combinaison en phase stabilise et l'opposition de phase déstabilise."
      },
      {
        "content": "L'énergie n'a aucun lien avec le caractère liant.",
        "correct": false,
        "explanation": "C'est précisément l'un des effets de la combinaison."
      },
      {
        "content": "Les deux OM ont exactement la même énergie.",
        "correct": false,
        "explanation": "L'interaction lève la dégénérescence."
      }
    ],
    "explanation": "L'occupation préférentielle des OM liantes contribue à stabiliser la molécule."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la densité électronique d'une combinaison liante et antiliante de deux orbitales p alignées axialement, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les deux combinaisons ont la même phase partout.",
        "correct": false,
        "explanation": "Leur différence vient précisément de la relation de phase."
      },
      {
        "content": "L'orbitale antiliante est souvent notée avec une étoile, par exemple $\\sigma^*$.",
        "correct": true,
        "explanation": "L'astérisque signale le caractère antiliant."
      },
      {
        "content": "La combinaison liante augmente la densité électronique entre les noyaux.",
        "correct": true,
        "explanation": "Cette densité favorise l'attraction noyaux-électrons dans la région internucléaire."
      },
      {
        "content": "La combinaison antiliante présente un nœud entre les noyaux.",
        "correct": true,
        "explanation": "La densité électronique s'annule dans cette région."
      },
      {
        "content": "La combinaison liante possède nécessairement un nœud internucléaire supplémentaire.",
        "correct": false,
        "explanation": "C'est l'antiliaison qui possède ce nœud."
      }
    ],
    "explanation": "La phase des orbitales atomiques combinées gouverne le caractère liant ou antiliant."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Deux orbitales p parallèles, perpendiculaires à l'axe internucléaire, se recouvrent latéralement. Quelle liaison forment-elles ?",
    "choices": [
      {
        "content": "Une liaison $\\sigma$.",
        "correct": false,
        "explanation": "La sigma correspond à un recouvrement axial."
      },
      {
        "content": "Aucune liaison possible quelle que soit leur phase.",
        "correct": false,
        "explanation": "Un recouvrement latéral est précisément possible."
      },
      {
        "content": "Une liaison métallique.",
        "correct": false,
        "explanation": "Ce modèle ne correspond pas à la liaison métallique."
      },
      {
        "content": "Une liaison $\\pi$.",
        "correct": true,
        "explanation": "Le recouvrement latéral de deux p parallèles donne une pi."
      },
      {
        "content": "Une liaison ionique pure.",
        "correct": false,
        "explanation": "Le recouvrement décrit une liaison covalente."
      }
    ],
    "explanation": "L'orientation des orbitales p suffit souvent à distinguer sigma et pi."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi une double liaison limite-t-elle la rotation autour de l'axe internucléaire ?",
    "choices": [
      {
        "content": "La rotation est impossible parce que les noyaux sont soudés.",
        "correct": false,
        "explanation": "La limitation est électronique, pas nucléaire."
      },
      {
        "content": "La composante sigma seule n'explique pas cette forte limitation.",
        "correct": true,
        "explanation": "Une sigma permet davantage de rotation."
      },
      {
        "content": "Une liaison simple C–C est tout aussi bloquée par une composante pi.",
        "correct": false,
        "explanation": "Une liaison simple ne possède pas de pi."
      },
      {
        "content": "La composante pi exige le maintien du parallélisme des orbitales p.",
        "correct": true,
        "explanation": "Une rotation désaligne les orbitales."
      },
      {
        "content": "La rotation détruirait progressivement le recouvrement latéral pi.",
        "correct": true,
        "explanation": "La composante pi serait perdue."
      }
    ],
    "explanation": "La rigidité des doubles liaisons est une conséquence directe de la géométrie du recouvrement pi."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans $\\ce{N#N}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle contient deux pi.",
        "correct": true,
        "explanation": "Deux recouvrements latéraux orthogonaux complètent la triple liaison."
      },
      {
        "content": "Aucune orbitale p n'intervient dans les composantes pi.",
        "correct": false,
        "explanation": "Les pi reposent sur des orbitales p non hybridées."
      },
      {
        "content": "Les deux atomes sont reliés par trois sigma.",
        "correct": false,
        "explanation": "Une seule composante est sigma."
      },
      {
        "content": "La triple liaison contient une sigma.",
        "correct": true,
        "explanation": "La première liaison est sigma."
      },
      {
        "content": "La liaison multiple est compatible avec des carbones ou azotes de géométrie locale linéaire dans un modèle sp.",
        "correct": true,
        "explanation": "Deux domaines électroniques conduisent à une organisation linéaire."
      }
    ],
    "explanation": "Une triple liaison classique se décompose en sigma + deux pi."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans $\\ce{O=C=O}$, combien de composantes $\\pi$ sont présentes dans les deux doubles liaisons C=O ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Chaque double liaison apporte une composante pi ; il y en a donc deux."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Une liaison simple contient toujours une pi.",
        "correct": false,
        "explanation": "Elle est sigma."
      },
      {
        "content": "Une liaison pi autorise une rotation libre sans perte de recouvrement.",
        "correct": false,
        "explanation": "Le recouvrement latéral impose une orientation."
      },
      {
        "content": "Une liaison sigma résulte typiquement d'un recouvrement axial.",
        "correct": true,
        "explanation": "C'est sa caractéristique."
      },
      {
        "content": "$\\ce{CO2}$ contient deux liaisons pi.",
        "correct": true,
        "explanation": "Une par double liaison C=O."
      },
      {
        "content": "$\\ce{HCN}$ contient deux liaisons pi.",
        "correct": true,
        "explanation": "La triple liaison C≡N contient deux pi."
      },
      {
        "content": "$\\ce{HCN}$ contient deux liaisons sigma.",
        "correct": true,
        "explanation": "H–C et la composante sigma de C≡N."
      },
      {
        "content": "Une liaison pi résulte typiquement d'un recouvrement latéral.",
        "correct": true,
        "explanation": "C'est sa caractéristique."
      },
      {
        "content": "Une double liaison est formée de deux sigma.",
        "correct": false,
        "explanation": "Elle contient une sigma et une pi."
      },
      {
        "content": "Une OM antiliante est plus stabilisante que l'OM liante correspondante.",
        "correct": false,
        "explanation": "Elle est déstabilisante."
      },
      {
        "content": "$\\ce{N2}$ contient trois liaisons pi.",
        "correct": false,
        "explanation": "Il contient deux pi."
      }
    ],
    "explanation": "Ce bilan rassemble décompte sigma/pi, orientation spatiale et énergie des orbitales moléculaires."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux espèces qui possèdent deux composantes $\\pi$ dans leur représentation de Lewis localisée.",
    "choices": [
      {
        "content": "$\\ce{HCN}$.",
        "correct": true,
        "explanation": "La triple liaison C≡N contient deux pi."
      },
      {
        "content": "$\\ce{CH4}$.",
        "correct": false,
        "explanation": "Le méthane ne contient que des liaisons sigma."
      },
      {
        "content": "$\\ce{CO2}$.",
        "correct": true,
        "explanation": "Les deux doubles liaisons apportent chacune une pi."
      },
      {
        "content": "$\\ce{NH3}$.",
        "correct": false,
        "explanation": "Elle ne possède que des liaisons simples."
      },
      {
        "content": "$\\ce{H2O}$.",
        "correct": false,
        "explanation": "Elle ne possède que des liaisons simples."
      }
    ],
    "explanation": "Deux doubles liaisons ou une triple liaison conduisent ici à deux composantes pi."
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Une molécule comporte trois doubles liaisons indépendantes. Combien de composantes $\\pi$ contient-elle dans ce modèle localisé ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Chaque double liaison comporte une composante pi."
  }
];
