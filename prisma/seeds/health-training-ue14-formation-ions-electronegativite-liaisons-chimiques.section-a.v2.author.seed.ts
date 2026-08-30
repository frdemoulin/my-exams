import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 – Chimie générale – Chapitre 1.2 – Section A – Ions et électronégativité */
export const UE14_CH2_IONS_ELECTRONEG_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle proposition décrit correctement la formation d'un cation ?",
    "choices": [
      {
        "content": "Un atome perd un ou plusieurs électrons et devient chargé positivement.",
        "correct": true,
        "explanation": "La perte d'électrons laisse un excès de charges positives."
      },
      {
        "content": "Un cation est nécessairement électriquement neutre.",
        "correct": false,
        "explanation": "Un cation porte une charge positive."
      },
      {
        "content": "L'atome perd uniquement des neutrons.",
        "correct": false,
        "explanation": "Les neutrons ne sont pas concernés par une ionisation chimique."
      },
      {
        "content": "Un atome gagne des électrons et devient chargé positivement.",
        "correct": false,
        "explanation": "Un gain d'électrons conduit à un anion."
      },
      {
        "content": "Le noyau gagne des protons pendant l'ionisation chimique.",
        "correct": false,
        "explanation": "L'ionisation chimique modifie le cortège électronique, pas le noyau."
      }
    ],
    "explanation": "Un cation résulte d'une perte d'électrons ; un anion résulte d'un gain d'électrons."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "L'atome de magnésium possède $Z=12$. Combien d'électrons possède $\\ce{Mg^2+}$ ?",
    "answer": {
      "type": "number",
      "value": 10,
      "tolerance": 0
    },
    "explanation": "Le magnésium neutre possède 12 électrons ; la charge 2+ correspond à la perte de deux électrons."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant $\\ce{Na+}$, $\\ce{Mg^2+}$ et $\\ce{Al^3+}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils sont isoélectroniques du néon.",
        "correct": true,
        "explanation": "Le néon possède dix électrons."
      },
      {
        "content": "Ils ont tous gagné des électrons.",
        "correct": false,
        "explanation": "Ce sont des cations formés par perte d'électrons."
      },
      {
        "content": "Ils possèdent la même configuration électronique mais pas la même charge nucléaire.",
        "correct": true,
        "explanation": "Leur cortège électronique est identique, tandis que Z diffère."
      },
      {
        "content": "Ils possèdent tous le même nombre de protons.",
        "correct": false,
        "explanation": "Leurs numéros atomiques sont différents."
      },
      {
        "content": "Ils possèdent tous dix électrons.",
        "correct": true,
        "explanation": "11−1=10, 12−2=10 et 13−3=10."
      }
    ],
    "explanation": "Des espèces isoélectroniques possèdent le même nombre d'électrons sans être nécessairement le même élément ni porter la même charge.",
    "requiredSelectionCount": 3
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle situation favorise généralement une faible énergie de première ionisation ?",
    "choices": [
      {
        "content": "Un électron de valence relativement éloigné du noyau et fortement écranté.",
        "correct": true,
        "explanation": "L'attraction effective est plus faible, donc l'arrachement de l'électron est facilité."
      },
      {
        "content": "Une couche de valence complète de gaz noble.",
        "correct": false,
        "explanation": "Les gaz nobles ont généralement des énergies d'ionisation élevées."
      },
      {
        "content": "La présence d'un électron supplémentaire déjà arraché.",
        "correct": false,
        "explanation": "La première ionisation concerne l'atome neutre."
      },
      {
        "content": "Une augmentation systématique de la charge nucléaire sans effet d'écran.",
        "correct": false,
        "explanation": "Cela renforcerait l'attraction des électrons."
      },
      {
        "content": "Un petit atome dont les électrons de valence sont fortement attirés par le noyau.",
        "correct": false,
        "explanation": "Une attraction forte tend à augmenter l'énergie d'ionisation."
      }
    ],
    "explanation": "L'énergie d'ionisation dépend notamment de la distance au noyau, de l'écrantage et de la charge nucléaire effective."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle proposition décrit correctement la formation d'un anion monoatomique ?",
    "choices": [
      {
        "content": "Le nombre de neutrons diminue.",
        "correct": false,
        "explanation": "L'ionisation ne modifie pas le noyau."
      },
      {
        "content": "L'atome gagne un ou plusieurs électrons.",
        "correct": true,
        "explanation": "Un gain d'électrons donne une charge nette négative."
      },
      {
        "content": "Le noyau devient négatif.",
        "correct": false,
        "explanation": "Le noyau reste positivement chargé."
      },
      {
        "content": "L'atome perd nécessairement deux électrons.",
        "correct": false,
        "explanation": "La charge dépend de l'espèce considérée."
      },
      {
        "content": "L'atome perd des protons.",
        "correct": false,
        "explanation": "Une transformation chimique ne modifie pas Z."
      }
    ],
    "explanation": "Un anion se forme par capture d'électrons ; sa charge négative correspond à un excès d'électrons par rapport aux protons."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle définition correspond à l'électronégativité d'un atome engagé dans une liaison ?",
    "choices": [
      {
        "content": "La charge entière portée par l'atome isolé.",
        "correct": false,
        "explanation": "L'électronégativité n'est pas une charge."
      },
      {
        "content": "Sa tendance à attirer vers lui les électrons de la liaison.",
        "correct": true,
        "explanation": "L'électronégativité décrit l'attraction exercée sur le doublet liant."
      },
      {
        "content": "L'énergie nécessaire pour arracher un neutron.",
        "correct": false,
        "explanation": "Cela relève de la physique nucléaire."
      },
      {
        "content": "La capacité maximale de sa couche électronique.",
        "correct": false,
        "explanation": "Il s'agit d'une propriété différente."
      },
      {
        "content": "Le nombre total d'électrons de l'atome.",
        "correct": false,
        "explanation": "Ce nombre dépend de Z et n'est pas une électronégativité."
      }
    ],
    "explanation": "L'électronégativité est une grandeur relative utilisée pour prévoir la polarisation des liaisons."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'évolution générale de l'électronégativité dans la classification périodique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les métaux alcalins sont parmi les éléments les plus électronégatifs.",
        "correct": false,
        "explanation": "Ils sont au contraire peu électronégatifs."
      },
      {
        "content": "Elle tend à augmenter de gauche à droite au sein d'une période.",
        "correct": true,
        "explanation": "La charge nucléaire effective augmente globalement."
      },
      {
        "content": "Le fluor est l'élément le plus électronégatif sur l'échelle de Pauling.",
        "correct": true,
        "explanation": "Sa valeur est voisine de 4,0."
      },
      {
        "content": "L'électronégativité augmente systématiquement en descendant un groupe.",
        "correct": false,
        "explanation": "La tendance générale est inverse."
      },
      {
        "content": "Elle tend à diminuer du haut vers le bas d'un groupe.",
        "correct": true,
        "explanation": "La taille atomique et l'écrantage augmentent."
      }
    ],
    "explanation": "Les tendances périodiques permettent d'anticiper le sens de polarisation d'une liaison."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi H, C, N et O, quel ordre d'électronégativité croissante est correct ?",
    "choices": [
      {
        "content": "$\\ce{O < N < C < H}$.",
        "correct": false,
        "explanation": "L'ordre est inversé."
      },
      {
        "content": "$\\ce{C < H < O < N}$.",
        "correct": false,
        "explanation": "N est moins électronégatif que O."
      },
      {
        "content": "$\\ce{H < O < C < N}$.",
        "correct": false,
        "explanation": "O est le plus électronégatif de cette liste."
      },
      {
        "content": "$\\ce{N < O < H < C}$.",
        "correct": false,
        "explanation": "H et C sont moins électronégatifs que N et O."
      },
      {
        "content": "$\\ce{H < C < N < O}$.",
        "correct": true,
        "explanation": "Sur l'échelle de Pauling : H≈2,2 ; C≈2,6 ; N≈3,0 ; O≈3,4."
      }
    ],
    "explanation": "Cet ordre est particulièrement utile pour prévoir la polarisation des liaisons en chimie organique et biologique."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel élément possède l'électronégativité la plus élevée sur l'échelle de Pauling ?",
    "choices": [
      {
        "content": "Le césium.",
        "correct": false,
        "explanation": "Le césium est parmi les éléments les moins électronégatifs."
      },
      {
        "content": "Le magnésium.",
        "correct": false,
        "explanation": "Le magnésium est nettement moins électronégatif que le fluor."
      },
      {
        "content": "Le fluor.",
        "correct": true,
        "explanation": "Le fluor est la référence la plus électronégative de l'échelle de Pauling."
      },
      {
        "content": "L'aluminium.",
        "correct": false,
        "explanation": "L'aluminium est moins électronégatif que le fluor."
      },
      {
        "content": "Le sodium.",
        "correct": false,
        "explanation": "Le sodium est faiblement électronégatif."
      }
    ],
    "explanation": "La forte électronégativité du fluor explique la polarisation très marquée de nombreuses liaisons F–X."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles relations entre électronégativité et comportement chimique sont généralement correctes ?",
    "choices": [
      {
        "content": "Une électronégativité élevée signifie que l'atome perd toujours facilement ses électrons.",
        "correct": false,
        "explanation": "C'est plutôt l'inverse."
      },
      {
        "content": "Électronégativité et charge ionique sont deux grandeurs identiques.",
        "correct": false,
        "explanation": "L'électronégativité est une tendance relative ; la charge ionique est une charge nette."
      },
      {
        "content": "Un élément très électronégatif attire fortement les électrons partagés d'une liaison.",
        "correct": true,
        "explanation": "C'est la définition pratique de l'électronégativité."
      },
      {
        "content": "Un métal alcalin a généralement tendance à former un cation plutôt qu'un anion.",
        "correct": true,
        "explanation": "La perte d'un électron conduit à une configuration plus stable."
      },
      {
        "content": "Un halogène a souvent tendance à capter un électron pour former un anion monovalent.",
        "correct": true,
        "explanation": "Sa configuration externe ns²np⁵ favorise ce gain."
      }
    ],
    "explanation": "Électronégativité, énergie d'ionisation et tendance ionique sont liées mais ne doivent pas être confondues."
  }
];

export const UE14_CH2_IONS_ELECTRONEG_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "On donne $Z(\\ce{Na})=11$. Combien d'électrons possède $\\ce{Na+}$ ?",
    "answer": {
      "type": "number",
      "value": 10,
      "tolerance": 0
    },
    "explanation": "La charge +1 correspond à la perte d'un électron."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "On donne $Z(\\ce{Cl})=17$. Combien d'électrons possède $\\ce{Cl-}$ ?",
    "answer": {
      "type": "number",
      "value": 18,
      "tolerance": 0
    },
    "explanation": "La charge −1 correspond au gain d'un électron."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les espèces suivantes, lesquelles sont isoélectroniques du néon ?",
    "choices": [
      {
        "content": "$\\ce{O^-}$.",
        "correct": false,
        "explanation": "8+1=9 électrons."
      },
      {
        "content": "$\\ce{F-}$.",
        "correct": true,
        "explanation": "9+1=10 électrons."
      },
      {
        "content": "$\\ce{Al^2+}$.",
        "correct": false,
        "explanation": "13−2=11 électrons."
      },
      {
        "content": "$\\ce{Mg^2+}$.",
        "correct": true,
        "explanation": "12−2=10 électrons."
      },
      {
        "content": "$\\ce{Na+}$.",
        "correct": true,
        "explanation": "11−1=10 électrons."
      }
    ],
    "explanation": "Le néon possède dix électrons ; il suffit de compter les électrons après ionisation."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant $\\ce{Fe^2+}$ et $\\ce{Fe^3+}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les deux ions possèdent le même nombre de protons.",
        "correct": true,
        "explanation": "Ils appartiennent au même élément, Z=26."
      },
      {
        "content": "La transformation $\\ce{Fe^2+ -> Fe^3+}$ correspond à une perte d'électron.",
        "correct": true,
        "explanation": "L'oxydation augmente la charge positive d'une unité."
      },
      {
        "content": "$\\ce{Fe^3+}$ possède un électron de moins que $\\ce{Fe^2+}$.",
        "correct": true,
        "explanation": "Les charges diffèrent d'une unité positive."
      },
      {
        "content": "$\\ce{Fe^2+}$ est plus oxydé que $\\ce{Fe^3+}$.",
        "correct": false,
        "explanation": "Fe(III) est à un degré d'oxydation plus élevé."
      },
      {
        "content": "Ces ions sont isotopes l'un de l'autre.",
        "correct": false,
        "explanation": "Ils diffèrent par leur nombre d'électrons, pas par leur nombre de neutrons."
      }
    ],
    "explanation": "Deux états ioniques d'un même élément conservent le même noyau et diffèrent par leur cortège électronique."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Le fer possède $Z=26$. Combien d'électrons possède $\\ce{Fe^3+}$ ?",
    "answer": {
      "type": "number",
      "value": 23,
      "tolerance": 0
    },
    "explanation": "La charge 3+ signifie que trois électrons ont été retirés : 26−3=23."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel classement d'électronégativité croissante est correct pour H, C, N et O ?",
    "choices": [
      {
        "content": "$\\ce{O < N < C < H}$.",
        "correct": false,
        "explanation": "C'est l'ordre inverse."
      },
      {
        "content": "$\\ce{N < C < H < O}$.",
        "correct": false,
        "explanation": "N est plus électronégatif que C et H."
      },
      {
        "content": "$\\ce{H < C < N < O}$.",
        "correct": true,
        "explanation": "C'est l'ordre approximatif des valeurs de Pauling."
      },
      {
        "content": "$\\ce{C < H < N < O}$.",
        "correct": false,
        "explanation": "H est légèrement moins électronégatif que C."
      },
      {
        "content": "$\\ce{H < N < C < O}$.",
        "correct": false,
        "explanation": "C est moins électronégatif que N."
      }
    ],
    "explanation": "Ce classement aide à prévoir les charges partielles dans les molécules biologiques."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est la plus juste pour les métaux alcalins ?",
    "choices": [
      {
        "content": "Ils sont tous chimiquement inertes.",
        "correct": false,
        "explanation": "Ils sont au contraire très réactifs."
      },
      {
        "content": "Ils appartiennent au groupe 17.",
        "correct": false,
        "explanation": "Ils appartiennent au groupe 1."
      },
      {
        "content": "Ils ont tous une électronégativité supérieure à celle du fluor.",
        "correct": false,
        "explanation": "Le fluor est le plus électronégatif."
      },
      {
        "content": "Ils ont une faible électronégativité et perdent facilement leur électron de valence.",
        "correct": true,
        "explanation": "La configuration ns¹ favorise la formation de cations +1."
      },
      {
        "content": "Ils gagnent typiquement deux électrons.",
        "correct": false,
        "explanation": "Ils perdent généralement un électron."
      }
    ],
    "explanation": "La faible énergie d'ionisation et la faible électronégativité caractérisent les métaux alcalins."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Quelles propositions décrivent correctement les tendances générales de formation des ions ?",
    "choices": [
      {
        "content": "Les éléments du groupe 1 forment souvent des cations +1.",
        "correct": true,
        "explanation": "Ils perdent leur électron ns¹."
      },
      {
        "content": "Les halogènes forment souvent des anions −1.",
        "correct": true,
        "explanation": "Ils gagnent un électron pour compléter np⁶."
      },
      {
        "content": "Les alcalino-terreux forment souvent des cations +2.",
        "correct": true,
        "explanation": "Ils perdent leurs deux électrons ns²."
      },
      {
        "content": "Tous les non-métaux forment systématiquement des anions monoatomiques.",
        "correct": false,
        "explanation": "Beaucoup forment surtout des liaisons covalentes."
      },
      {
        "content": "Les gaz nobles forment facilement des ions monoatomiques stables.",
        "correct": false,
        "explanation": "Leur couche externe complète les rend peu enclins à l'ionisation chimique."
      }
    ],
    "explanation": "Les tendances de groupe sont utiles mais ne remplacent pas l'analyse chimique du contexte.",
    "requiredSelectionCount": 3
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix espèces suivantes, sélectionnez exactement les cinq cations.",
    "choices": [
      {
        "content": "$\\ce{OH-}$.",
        "correct": false,
        "explanation": "Anion."
      },
      {
        "content": "$\\ce{Fe^3+}$.",
        "correct": true,
        "explanation": "Charge positive."
      },
      {
        "content": "$\\ce{NH4+}$.",
        "correct": true,
        "explanation": "Ion polyatomique positif."
      },
      {
        "content": "$\\ce{NO3-}$.",
        "correct": false,
        "explanation": "Anion."
      },
      {
        "content": "$\\ce{O^2-}$.",
        "correct": false,
        "explanation": "Anion."
      },
      {
        "content": "$\\ce{Na+}$.",
        "correct": true,
        "explanation": "Charge positive."
      },
      {
        "content": "$\\ce{SO4^2-}$.",
        "correct": false,
        "explanation": "Anion."
      },
      {
        "content": "$\\ce{Ca^2+}$.",
        "correct": true,
        "explanation": "Charge positive."
      },
      {
        "content": "$\\ce{Cl-}$.",
        "correct": false,
        "explanation": "Anion."
      },
      {
        "content": "$\\ce{H3O+}$.",
        "correct": true,
        "explanation": "Ion oxonium positif."
      }
    ],
    "explanation": "Un cation se reconnaît à sa charge nette positive, qu'il soit monoatomique ou polyatomique."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un atome neutre perd trois électrons. Quelle est la valeur numérique de sa charge en unités de charge élémentaire e ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "La perte de trois électrons conduit à une charge +3e."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "On donne $Z(\\ce{Ca})=20$. Combien d'électrons possède $\\ce{Ca^2+}$ ?",
    "answer": {
      "type": "number",
      "value": 18,
      "tolerance": 0
    },
    "explanation": "Le calcium perd deux électrons et devient isoélectronique de l'argon."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la formation de $\\ce{Ca^2+}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le calcium devient un anion.",
        "correct": false,
        "explanation": "Il devient un cation."
      },
      {
        "content": "$\\ce{Ca^2+}$ possède 18 électrons.",
        "correct": true,
        "explanation": "20−2=18."
      },
      {
        "content": "Le calcium neutre perd deux électrons.",
        "correct": true,
        "explanation": "La charge 2+ correspond à la perte de deux électrons."
      },
      {
        "content": "$\\ce{Ca^2+}$ est isoélectronique de l'argon.",
        "correct": true,
        "explanation": "Ar possède 18 électrons."
      },
      {
        "content": "Le noyau de calcium perd deux protons.",
        "correct": false,
        "explanation": "Le noyau reste inchangé."
      }
    ],
    "explanation": "La formation de l'ion calcium est un exemple classique d'accès à une configuration électronique de gaz noble."
  }
];
