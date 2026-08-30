import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 – Chimie générale – Chapitre 1.2 – Synthèse */
export const UE14_CH2_SYNTHESIS_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 51,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans le sérum physiologique, combien d'électrons possède l'ion $\\ce{Na+}$ si $Z(\\ce{Na})=11$ ?",
    "answer": {
      "type": "number",
      "value": 10,
      "tolerance": 0
    },
    "explanation": "Le sodium perd un électron."
  },
  {
    "order": 52,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Concernant le chlorure de sodium dissous dans l'eau, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "$\\ce{Na+}$ et $\\ce{Cl-}$ possèdent chacun 18 électrons.",
        "correct": false,
        "explanation": "Na+ en possède 10 ; Cl− en possède 18."
      },
      {
        "content": "Le sodium a perdu un électron lors de la formation de $\\ce{Na+}$.",
        "correct": true,
        "explanation": "La charge +1 correspond à cette perte."
      },
      {
        "content": "Le chlore devient cationique en gagnant un électron.",
        "correct": false,
        "explanation": "Il devient anionique."
      },
      {
        "content": "La solution contient des ions $\\ce{Na+}$ et $\\ce{Cl-}$.",
        "correct": true,
        "explanation": "Le solide ionique se dissocie en solution."
      },
      {
        "content": "La somme des charges positives et négatives reste globalement nulle.",
        "correct": true,
        "explanation": "La solution macroscopique est électroneutre."
      }
    ],
    "explanation": "Le sérum physiologique offre un exemple simple d'ions stables et d'électroneutralité macroscopique.",
    "requiredSelectionCount": 3
  },
  {
    "order": 53,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la formation de l'ion ammonium $\\ce{NH4+}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les quatre liaisons N–H de $\\ce{NH4+}$ sont équivalentes.",
        "correct": true,
        "explanation": "Le mécanisme de formation ne crée pas une liaison durablement différente."
      },
      {
        "content": "$\\ce{H+}$ agit comme accepteur de doublet.",
        "correct": true,
        "explanation": "Le proton reçoit le doublet."
      },
      {
        "content": "Le mécanisme impose une rupture homolytique.",
        "correct": false,
        "explanation": "Il s'agit d'une formation de liaison."
      },
      {
        "content": "$\\ce{NH4+}$ est un anion.",
        "correct": false,
        "explanation": "Sa charge est positive."
      },
      {
        "content": "$\\ce{NH3}$ fournit un doublet au proton.",
        "correct": true,
        "explanation": "L'ammoniac agit comme base de Lewis."
      }
    ],
    "explanation": "Cet exemple relie acidobasicité de Lewis et liaison de coordination."
  },
  {
    "order": 54,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le peroxyde d'hydrogène $\\ce{H-O-O-H}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La molécule possède trois liaisons sigma.",
        "correct": true,
        "explanation": "Deux O–H et une O–O."
      },
      {
        "content": "La liaison O–O est une liaison triple.",
        "correct": false,
        "explanation": "C'est une liaison simple."
      },
      {
        "content": "La molécule ne possède aucun doublet non liant.",
        "correct": false,
        "explanation": "Elle en possède quatre au total."
      },
      {
        "content": "Les liaisons O–H sont polarisées vers l'oxygène.",
        "correct": true,
        "explanation": "O est plus électronégatif que H."
      },
      {
        "content": "Chaque oxygène porte deux doublets non liants dans la structure de Lewis neutre usuelle.",
        "correct": true,
        "explanation": "Chaque O complète son octet."
      }
    ],
    "explanation": "Le peroxyde d'hydrogène réunit liaisons sigma, doublets non liants et polarisation."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Une liaison H–Cl a un moment dipolaire $\\mu=1{,}08\\,\\mathrm D$ et une longueur $d=127\\,\\mathrm{pm}$. Avec $1\\,\\mathrm D=3{,}34\\times10^{-30}\\,\\mathrm{C\\,m}$, quelle charge partielle q obtient-on en coulombs ?",
    "answer": {
      "type": "number",
      "value": 2.84e-20,
      "tolerance": 4e-22
    },
    "explanation": "q=$\\mu/d=(1{,}08\\times3{,}34\\times10^{-30})/(127\\times10^{-12})\\approx2{,}84\\times10^{-20}\\,\\mathrm C$."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le cisplatine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "$\\ce{NH3}$ agit comme ligand donneur via l'azote.",
        "correct": true,
        "explanation": "Le doublet non liant de N participe à la coordination."
      },
      {
        "content": "Le complexe possède une géométrie carrée plane autour de Pt(II).",
        "correct": true,
        "explanation": "C'est la géométrie caractéristique du cisplatine."
      },
      {
        "content": "Le platine est un accepteur de doublets électroniques.",
        "correct": true,
        "explanation": "Le centre métallique reçoit des doublets des ligands."
      },
      {
        "content": "Les deux chlorures sont absents de la sphère de coordination.",
        "correct": false,
        "explanation": "Ils coordonnent directement le platine."
      },
      {
        "content": "Le cisplatine agit uniquement par rupture homolytique de l'eau.",
        "correct": false,
        "explanation": "Son mécanisme repose notamment sur aquation puis liaison à l'ADN."
      }
    ],
    "explanation": "Le cisplatine permet d'appliquer les notions de ligand, centre accepteur et géométrie de coordination."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la fixation du dioxygène à l'hémoglobine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "$\\ce{O2}$ peut occuper une sixième position de coordination.",
        "correct": true,
        "explanation": "La liaison est réversible."
      },
      {
        "content": "Le fer n'a aucun rôle dans la fixation du dioxygène.",
        "correct": false,
        "explanation": "Il est au centre du site de fixation."
      },
      {
        "content": "La fixation de $\\ce{O2}$ nécessite la rupture du noyau de fer.",
        "correct": false,
        "explanation": "Aucune transformation nucléaire."
      },
      {
        "content": "Une histidine proximale fournit également un ligand azoté.",
        "correct": true,
        "explanation": "Elle constitue la cinquième coordination."
      },
      {
        "content": "Le fer de l'hème est coordonné par les azotes de la porphyrine.",
        "correct": true,
        "explanation": "Quatre azotes forment le plan de coordination."
      }
    ],
    "explanation": "La coordination relie directement chimie de Lewis et fonction biologique de l'hémoglobine."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi la liaison peptidique présente-t-elle un caractère partiel de double liaison ?",
    "choices": [
      {
        "content": "La liaison C–N est une liaison ionique pure.",
        "correct": false,
        "explanation": "Elle est covalente avec délocalisation."
      },
      {
        "content": "Le doublet de l'azote peut se délocaliser vers le carbonyle.",
        "correct": true,
        "explanation": "La mésomérie répartit la densité électronique."
      },
      {
        "content": "La rotation autour de C–N est limitée.",
        "correct": true,
        "explanation": "Le caractère de double liaison augmente la rigidité."
      },
      {
        "content": "Des formes mésomères contribuent à la structure réelle.",
        "correct": true,
        "explanation": "La liaison C–N est intermédiaire entre simple et double."
      },
      {
        "content": "Le phénomène exige une rupture permanente de C–N.",
        "correct": false,
        "explanation": "La mésomérie ne correspond pas à une rupture."
      }
    ],
    "explanation": "Cette délocalisation explique la planéité locale du squelette peptidique."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Lors d'une radiolyse de l'eau, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une rupture homolytique partage les électrons du doublet entre les deux fragments.",
        "correct": true,
        "explanation": "Chaque fragment reçoit un électron."
      },
      {
        "content": "La chimie radicalaire est sans conséquence biologique.",
        "correct": false,
        "explanation": "Elle peut contribuer aux lésions cellulaires."
      },
      {
        "content": "Une homolyse produit nécessairement deux ions de charges opposées.",
        "correct": false,
        "explanation": "Cela correspond plutôt à une hétérolyse."
      },
      {
        "content": "Le radical hydroxyle est très réactif.",
        "correct": true,
        "explanation": "Il peut oxyder rapidement des biomolécules."
      },
      {
        "content": "Des radicaux peuvent être générés.",
        "correct": true,
        "explanation": "Les rayonnements ionisants peuvent provoquer des homolyses."
      }
    ],
    "explanation": "La radiolyse met en évidence le lien entre énergie de liaison et réactivité radicalaire."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "L'énergie de dissociation d'une liaison O–H vaut $460\\,\\mathrm{kJ\\,mol^{-1}}$. Avec $N_A=6{,}0\\times10^{23}\\,\\mathrm{mol^{-1}}$, quelle énergie moyenne correspond à une liaison en joules ?",
    "answer": {
      "type": "number",
      "value": 7.67e-19,
      "tolerance": 8e-21
    },
    "explanation": "$460000/(6{,}0\\times10^{23})\\approx7{,}67\\times10^{-19}\\,\\mathrm J$ par liaison."
  }
];

export const UE14_CH2_SYNTHESIS_MASTER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 34,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le chlore ($Z=17$), quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "$\\ce{Cl-}$ possède 18 électrons.",
        "correct": true,
        "explanation": "17+1=18."
      },
      {
        "content": "Il tend souvent à former $\\ce{Cl-}$ en gagnant un électron.",
        "correct": true,
        "explanation": "Il atteint alors la configuration de l'argon."
      },
      {
        "content": "Sa configuration externe est $3s^2 3p^5$.",
        "correct": true,
        "explanation": "Le chlore est un halogène."
      },
      {
        "content": "L'atome neutre possède 17 électrons.",
        "correct": true,
        "explanation": "Neutralité : 17 protons et 17 électrons."
      },
      {
        "content": "Il est moins électronégatif que le sodium.",
        "correct": false,
        "explanation": "Le chlore est nettement plus électronégatif."
      }
    ],
    "explanation": "Une même espèce permet de relier configuration, famille, électronégativité et formation d'ion."
  },
  {
    "order": 42,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Le fluor possède $Z=9$. Combien d'électrons possède $\\ce{F-}$ ?",
    "answer": {
      "type": "number",
      "value": 10,
      "tolerance": 0
    },
    "explanation": "Le fluorure a gagné un électron et devient isoélectronique du néon."
  },
  {
    "order": 43,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On prend $\\chi(\\ce{Na})=0{,}9$ et $\\chi(\\ce{F})=4{,}0$. Quelles propositions sont exactes pour NaF ?",
    "choices": [
      {
        "content": "Le fluor attire fortement la densité électronique.",
        "correct": true,
        "explanation": "Il est beaucoup plus électronégatif."
      },
      {
        "content": "La liaison doit être considérée comme parfaitement covalente apolaire.",
        "correct": false,
        "explanation": "La différence d'électronégativité est au contraire très forte."
      },
      {
        "content": "Le sodium porte la charge négative dans le cristal.",
        "correct": false,
        "explanation": "Le sodium forme le cation."
      },
      {
        "content": "Le modèle ionique $\\ce{Na+F-}$ est pertinent.",
        "correct": true,
        "explanation": "Le transfert électronique est fortement favorisé dans le modèle simple."
      },
      {
        "content": "La différence d'électronégativité est très grande.",
        "correct": true,
        "explanation": "$\\Delta\\chi\\approx3{,}1$."
      }
    ],
    "explanation": "Le caractère ionique ou covalent est un continuum ; NaF se situe très près du modèle ionique."
  },
  {
    "order": 44,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la liaison peptidique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La mésomérie délocalise le doublet de l'azote vers le carbonyle.",
        "correct": true,
        "explanation": "C'est la contribution électronique essentielle."
      },
      {
        "content": "La liaison C–N possède un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "Elle est plus courte et plus rigide qu'une C–N simple ordinaire."
      },
      {
        "content": "L'azote amide est généralement plus basique qu'une amine aliphatique ordinaire.",
        "correct": false,
        "explanation": "Son doublet est délocalisé et moins disponible."
      },
      {
        "content": "Le groupement peptidique est approximativement plan.",
        "correct": true,
        "explanation": "La rotation C–N est restreinte."
      },
      {
        "content": "La mésomérie implique le déplacement des noyaux entre plusieurs structures.",
        "correct": false,
        "explanation": "Les formes limites diffèrent par la distribution électronique."
      }
    ],
    "explanation": "La structure de la liaison peptidique illustre les conséquences géométriques de la délocalisation électronique."
  },
  {
    "order": 45,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Pour H–Cl, on donne $\\mu=1{,}08\\,\\mathrm D$, $d=127\\,\\mathrm{pm}$ et $e=1{,}60\\times10^{-19}\\,\\mathrm C$. La charge partielle calculée vaut environ $2{,}84\\times10^{-20}\\,\\mathrm C$. Quelle fraction de la charge élémentaire e cela représente-t-il ?",
    "answer": {
      "type": "number",
      "value": 0.178,
      "tolerance": 0.005
    },
    "explanation": "$2{,}84\\times10^{-20}/1{,}60\\times10^{-19}\\approx0{,}178$ ; la liaison est polarisée mais ne correspond pas à un transfert d'une charge entière."
  },
  {
    "order": 46,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Dans l'hémoglobine oxygénée, quelles propositions sur la coordination du fer sont exactes ?",
    "choices": [
      {
        "content": "Le dioxygène occupe la sixième position disponible.",
        "correct": true,
        "explanation": "Il se fixe de manière réversible."
      },
      {
        "content": "Quatre azotes de la porphyrine coordonnent le fer.",
        "correct": true,
        "explanation": "Ils forment quatre liaisons de coordination dans le plan."
      },
      {
        "content": "Un azote d'histidine proximale fournit une cinquième coordination.",
        "correct": true,
        "explanation": "Il relie le fer à la globine."
      },
      {
        "content": "Six atomes d'oxygène de la porphyrine coordonnent le fer.",
        "correct": false,
        "explanation": "La porphyrine coordonne par des azotes."
      },
      {
        "content": "Le fer n'est lié à aucun ligand azoté.",
        "correct": false,
        "explanation": "Les ligands azotés sont essentiels."
      }
    ],
    "explanation": "La coordination octaédrique déformée autour du fer permet de relier structure moléculaire et fonction respiratoire."
  },
  {
    "order": 47,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Pourquoi le monoxyde de carbone est-il dangereux pour le transport de l'oxygène par l'hémoglobine ?",
    "choices": [
      {
        "content": "Il supprime tous les électrons de l'hémoglobine.",
        "correct": false,
        "explanation": "Ce n'est pas le mécanisme."
      },
      {
        "content": "Il détruit immédiatement le noyau de fer.",
        "correct": false,
        "explanation": "Le mécanisme est chimique, pas nucléaire."
      },
      {
        "content": "Il rend l'oxygène plus électronégatif que le fluor.",
        "correct": false,
        "explanation": "Cette affirmation est sans rapport."
      },
      {
        "content": "Il transforme tous les ions fer en sodium.",
        "correct": false,
        "explanation": "Aucune transmutation n'a lieu."
      },
      {
        "content": "Il se lie fortement au fer de l'hème et concurrence la fixation de $\\ce{O2}$.",
        "correct": true,
        "explanation": "Cette compétition réduit la capacité de transport de l'oxygène."
      }
    ],
    "explanation": "L'affinité élevée du CO pour l'hème permet d'illustrer l'importance biologique de la coordination compétitive."
  },
  {
    "order": 48,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Avec $E_{\\ce{O-H}}=460\\,\\mathrm{kJ\\,mol^{-1}}$ et $N_A=6{,}0\\times10^{23}\\,\\mathrm{mol^{-1}}$, quelle énergie vaut une liaison O–H en joules ?",
    "answer": {
      "type": "number",
      "value": 7.67e-19,
      "tolerance": 8e-21
    },
    "explanation": "On convertit d'abord 460 kJ en 460000 J puis on divise par le nombre d'Avogadro."
  },
  {
    "order": 49,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les conséquences chimiques d'une rupture homolytique d'une liaison O–H, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle ne nécessite aucune énergie.",
        "correct": false,
        "explanation": "Rompre une liaison demande un apport énergétique."
      },
      {
        "content": "Elle peut produire des radicaux.",
        "correct": true,
        "explanation": "Chaque fragment reçoit un électron."
      },
      {
        "content": "Le radical hydroxyle peut oxyder des constituants cellulaires.",
        "correct": true,
        "explanation": "Sa réactivité est très élevée."
      },
      {
        "content": "Elle conduit nécessairement à deux ions stables.",
        "correct": false,
        "explanation": "Une homolyse produit d'abord des radicaux."
      },
      {
        "content": "Les radicaux formés peuvent amorcer des réactions en chaîne.",
        "correct": true,
        "explanation": "Un radical peut générer un nouveau radical lors d'une réaction."
      }
    ],
    "explanation": "La rupture homolytique est la porte d'entrée de nombreuses réactions radicalaires."
  },
  {
    "order": 35,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le cisplatine et sa coordination à l'ADN, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Après activation en milieu aqueux, des ligands chlorure peuvent être remplacés.",
        "correct": true,
        "explanation": "L'aquation facilite ensuite la liaison à l'ADN."
      },
      {
        "content": "Le mécanisme principal nécessite une rupture homolytique du noyau de platine.",
        "correct": false,
        "explanation": "Il s'agit d'une chimie de substitution de ligands."
      },
      {
        "content": "Le platine(II) est un centre accepteur de doublets.",
        "correct": true,
        "explanation": "Il forme des liaisons de coordination avec les ligands."
      },
      {
        "content": "Le cisplatine ne contient aucun ligand ammoniac.",
        "correct": false,
        "explanation": "Il contient deux ligands $\\ce{NH3}$."
      },
      {
        "content": "Les atomes d'azote de bases nucléiques, notamment N7 de la guanine, peuvent coordonner le platine.",
        "correct": true,
        "explanation": "Cela conduit à des adduits de l'ADN."
      }
    ],
    "explanation": "Le cisplatine relie chimie de coordination, substitution de ligands et effet pharmacologique."
  },
  {
    "order": 65,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les espèces suivantes, lesquelles peuvent agir comme accepteurs de doublet dans une description de Lewis ?",
    "choices": [
      {
        "content": "$\\ce{Cl-}$ lorsqu'il se coordonne à un métal.",
        "correct": false,
        "explanation": "Le chlorure agit comme donneur de doublet."
      },
      {
        "content": "$\\ce{BF3}$.",
        "correct": true,
        "explanation": "Le bore est électron-déficient."
      },
      {
        "content": "$\\ce{NH3}$ dans la formation de $\\ce{NH4+}$.",
        "correct": false,
        "explanation": "L'ammoniac agit alors comme donneur de doublet."
      },
      {
        "content": "$\\ce{H+}$.",
        "correct": true,
        "explanation": "Le proton accepte un doublet."
      },
      {
        "content": "Un cation métallique comme $\\ce{Pt^2+}$.",
        "correct": true,
        "explanation": "Les métaux peuvent accepter des doublets de ligands."
      }
    ],
    "explanation": "Un accepteur de Lewis est une espèce capable de recevoir un doublet électronique.",
    "requiredSelectionCount": 3
  },
  {
    "order": 66,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Une liaison a $\\mu=2{,}00\\,\\mathrm D$ et $d=150\\,\\mathrm{pm}$. Avec $1\\,\\mathrm D=3{,}34\\times10^{-30}\\,\\mathrm{C\\,m}$, quelle charge partielle q obtient-on en coulombs ?",
    "answer": {
      "type": "number",
      "value": 4.45e-20,
      "tolerance": 5e-22
    },
    "explanation": "$q=(2{,}00\\times3{,}34\\times10^{-30})/(150\\times10^{-12})\\approx4{,}45\\times10^{-20}\\,\\mathrm C$."
  }
];
