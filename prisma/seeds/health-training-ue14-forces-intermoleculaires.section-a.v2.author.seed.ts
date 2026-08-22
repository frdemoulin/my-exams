import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 – Chimie générale – Chapitre 1.4 – Section A – Polarité des molécules */
export const UE14_CH4_POLARITE_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle proposition décrit correctement une liaison covalente polarisée ?",
    "choices": [
      {
        "content": "Le doublet liant est attiré davantage vers l'atome le plus électronégatif, ce qui crée des charges partielles.",
        "correct": true,
        "explanation": "Une différence d'électronégativité déplace la densité électronique sans imposer nécessairement un transfert complet d'électron."
      },
      {
        "content": "Les deux atomes portent nécessairement des charges entières opposées.",
        "correct": false,
        "explanation": "Des charges partielles $\\delta^+$ et $\\delta^-$ suffisent à décrire une liaison covalente polarisée."
      },
      {
        "content": "La liaison ne contient aucun électron partagé.",
        "correct": false,
        "explanation": "Une liaison covalente repose sur un partage électronique."
      },
      {
        "content": "Une liaison entre deux atomes identiques est toujours fortement polarisée.",
        "correct": false,
        "explanation": "Deux atomes identiques ont la même électronégativité."
      },
      {
        "content": "La polarisation dépend uniquement de la masse des noyaux.",
        "correct": false,
        "explanation": "Elle dépend surtout de la distribution électronique et des électronégativités."
      }
    ],
    "explanation": "Une liaison polarisée est une liaison covalente dont la densité électronique est dissymétrique."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Pour une liaison polarisée, on utilise $\\mu=q\\,d$. Si $q=2{,}0\\times10^{-20}\\,\\mathrm C$ et $d=1{,}5\\times10^{-10}\\,\\mathrm m$, quelle est la valeur de $\\mu$ en $\\mathrm{C\\,m}$ ?",
    "answer": {
      "type": "number",
      "value": 3e-30,
      "tolerance": 5e-32
    },
    "explanation": "$\\mu=(2{,}0\\times10^{-20})(1{,}5\\times10^{-10})=3{,}0\\times10^{-30}\\,\\mathrm{C\\,m}$."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le moment dipolaire global d'une molécule, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il est toujours égal à la somme arithmétique des modules des dipôles de liaison.",
        "correct": false,
        "explanation": "Les directions doivent être prises en compte."
      },
      {
        "content": "Il dépend de la polarisation des liaisons.",
        "correct": true,
        "explanation": "Des liaisons très polarisées peuvent contribuer fortement au dipôle moléculaire."
      },
      {
        "content": "Une molécule électriquement neutre a nécessairement un moment dipolaire nul.",
        "correct": false,
        "explanation": "L'eau est neutre mais polaire."
      },
      {
        "content": "Il dépend de la géométrie de la molécule.",
        "correct": true,
        "explanation": "La somme vectorielle peut conduire à une compensation ou à une résultante."
      },
      {
        "content": "Il peut être nul même si certaines liaisons sont polarisées.",
        "correct": true,
        "explanation": "Une géométrie symétrique peut annuler les contributions."
      }
    ],
    "explanation": "La polarité moléculaire est une propriété vectorielle globale : liaison et géométrie doivent être analysées ensemble."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Pourquoi la molécule d'eau $\\ce{H2O}$ est-elle polaire ?",
    "choices": [
      {
        "content": "Parce que l'hydrogène est plus électronégatif que l'oxygène.",
        "correct": false,
        "explanation": "L'oxygène est plus électronégatif."
      },
      {
        "content": "Les liaisons O–H sont polarisées et la géométrie coudée empêche leur compensation.",
        "correct": true,
        "explanation": "Les deux contributions donnent une résultante non nulle."
      },
      {
        "content": "Parce que toute molécule à trois atomes est polaire.",
        "correct": false,
        "explanation": "La géométrie et les liaisons déterminent la polarité."
      },
      {
        "content": "Parce que la molécule porte une charge entière négative.",
        "correct": false,
        "explanation": "L'eau est globalement neutre."
      },
      {
        "content": "Parce que les deux liaisons O–H sont exactement opposées.",
        "correct": false,
        "explanation": "L'angle H–O–H est voisin de 104,5°, pas 180°."
      }
    ],
    "explanation": "L'eau illustre l'importance de la géométrie dans l'addition des moments de liaison."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes concernant $\\ce{BCl3}$.",
    "choices": [
      {
        "content": "Les liaisons B–Cl sont polarisées.",
        "correct": true,
        "explanation": "Le chlore est plus électronégatif que le bore."
      },
      {
        "content": "La molécule est globalement apolaire dans sa géométrie trigonale plane idéale.",
        "correct": true,
        "explanation": "Les trois dipôles se compensent par symétrie."
      },
      {
        "content": "La molécule est pyramidale.",
        "correct": false,
        "explanation": "Le bore central est trigonal plan."
      },
      {
        "content": "Le moment dipolaire global est dirigé vers un chlore privilégié.",
        "correct": false,
        "explanation": "Les trois positions sont équivalentes."
      },
      {
        "content": "Les liaisons B–Cl sont apolaires car la molécule est apolaire.",
        "correct": false,
        "explanation": "Polarité de liaison et polarité moléculaire sont distinctes."
      }
    ],
    "explanation": "BCl3 montre qu'une molécule peut être apolaire alors que toutes ses liaisons sont polarisées."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant $\\ce{CH4}$ et $\\ce{CCl4}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "$\\ce{CCl4}$ possède des liaisons C–Cl polarisées.",
        "correct": true,
        "explanation": "Cl est plus électronégatif que C."
      },
      {
        "content": "Les deux molécules sont tétraédriques.",
        "correct": true,
        "explanation": "Le carbone central possède quatre directions de liaison."
      },
      {
        "content": "Une molécule tétraédrique est toujours apolaire.",
        "correct": false,
        "explanation": "La nature des substituants peut rompre la symétrie."
      },
      {
        "content": "$\\ce{CH4}$ possède un fort moment dipolaire global.",
        "correct": false,
        "explanation": "La molécule est très symétrique et globalement apolaire."
      },
      {
        "content": "$\\ce{CCl4}$ est globalement apolaire dans sa géométrie tétraédrique symétrique.",
        "correct": true,
        "explanation": "Les quatre dipôles se compensent."
      }
    ],
    "explanation": "La symétrie permet de comprendre pourquoi CCl4 est apolaire alors que CH3Cl ne l'est pas."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "On compare les isomères cis- et trans-1,2-dichloroéthène. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les deux isomères doivent avoir exactement le même moment dipolaire car ils ont la même formule brute.",
        "correct": false,
        "explanation": "La géométrie modifie la somme vectorielle."
      },
      {
        "content": "L'isomérie géométrique ne peut jamais influencer une propriété physique.",
        "correct": false,
        "explanation": "Elle peut modifier polarité, température d'ébullition ou solubilité."
      },
      {
        "content": "Dans l'isomère trans idéal, les contributions peuvent se compenser beaucoup plus fortement.",
        "correct": true,
        "explanation": "La géométrie est plus symétrique."
      },
      {
        "content": "L'isomère cis possède généralement une résultante dipolaire non nulle.",
        "correct": true,
        "explanation": "Les dipôles C–Cl ne se compensent pas complètement."
      },
      {
        "content": "La disposition spatiale des liaisons C–Cl diffère entre les deux isomères.",
        "correct": true,
        "explanation": "L'isomérie géométrique change l'orientation relative des dipôles."
      }
    ],
    "explanation": "La formule brute ne suffit pas : la géométrie moléculaire peut modifier fortement la polarité globale."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux molécules globalement polaires.",
    "choices": [
      {
        "content": "$\\ce{BCl3}$.",
        "correct": false,
        "explanation": "La géométrie trigonale plane symétrique annule les contributions."
      },
      {
        "content": "$\\ce{CH3Cl}$.",
        "correct": true,
        "explanation": "La substitution par Cl rompt la symétrie tétraédrique."
      },
      {
        "content": "$\\ce{CCl4}$.",
        "correct": false,
        "explanation": "La symétrie tétraédrique annule les dipôles."
      },
      {
        "content": "$\\ce{CO2}$.",
        "correct": false,
        "explanation": "Les deux dipôles C=O se compensent dans la géométrie linéaire."
      },
      {
        "content": "$\\ce{H2O}$.",
        "correct": true,
        "explanation": "La géométrie coudée donne une résultante non nulle."
      }
    ],
    "explanation": "La polarité moléculaire dépend de la présence de liaisons polarisées et de l'absence de compensation géométrique."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant polarité et miscibilité, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La géométrie moléculaire n'a aucun effet sur la miscibilité.",
        "correct": false,
        "explanation": "Elle influence la polarité et les interactions."
      },
      {
        "content": "Une substance apolaire se mélange souvent mieux avec un solvant apolaire qu'avec l'eau.",
        "correct": true,
        "explanation": "C'est l'idée qualitative « le semblable dissout le semblable »."
      },
      {
        "content": "Deux liquides polaires capables d'interactions favorables ont souvent une bonne miscibilité.",
        "correct": true,
        "explanation": "Les interactions soluté-solvant peuvent compenser la séparation des molécules initiales."
      },
      {
        "content": "La polarité est un facteur important mais ne suffit pas toujours à prédire quantitativement la miscibilité.",
        "correct": true,
        "explanation": "Taille, structure et interactions spécifiques interviennent aussi."
      },
      {
        "content": "Toute substance polaire est miscible à l'eau en toute proportion.",
        "correct": false,
        "explanation": "La polarité seule ne garantit pas une miscibilité totale."
      }
    ],
    "explanation": "La miscibilité se raisonne à partir de l'ensemble des interactions possibles, pas d'une seule étiquette polaire/apolaire."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel énoncé décrit le mieux le méthanol $\\ce{CH3OH}$ ?",
    "choices": [
      {
        "content": "C'est une molécule polaire capable de former des liaisons hydrogène.",
        "correct": true,
        "explanation": "Le groupe O–H est donneur et l'oxygène est accepteur."
      },
      {
        "content": "Elle ne peut interagir qu'avec d'autres molécules de méthanol.",
        "correct": false,
        "explanation": "Elle peut interagir avec de nombreuses espèces polaires."
      },
      {
        "content": "Elle ne possède aucune interaction avec l'eau.",
        "correct": false,
        "explanation": "Elle est miscible à l'eau grâce aux interactions polaires et aux liaisons hydrogène."
      },
      {
        "content": "Son oxygène ne possède aucun doublet non liant.",
        "correct": false,
        "explanation": "L'oxygène en possède deux dans le modèle de Lewis usuel."
      },
      {
        "content": "C'est une molécule apolaire car elle contient un groupe méthyle.",
        "correct": false,
        "explanation": "Le groupe hydroxyle domine fortement le comportement polaire."
      }
    ],
    "explanation": "Le méthanol est un exemple simple de molécule polaire protique."
  }
];

export const UE14_CH4_POLARITE_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 31,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Pour une liaison polarisée, $q=1{,}6\\times10^{-19}\\,\\mathrm C$ et $d=120\\,\\mathrm{pm}$. Quelle est la valeur de $\\mu=q\\,d$ en $\\mathrm{C\\,m}$ ?",
    "answer": {
      "type": "number",
      "value": 1.92e-29,
      "tolerance": 5e-31
    },
    "explanation": "$120\\,\\mathrm{pm}=1{,}20\\times10^{-10}\\,\\mathrm m$, donc $\\mu=1{,}92\\times10^{-29}\\,\\mathrm{C\\,m}$."
  },
  {
    "order": 32,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare $\\ce{CO2}$, linéaire, et $\\ce{SO2}$, coudée. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La formule brute seule suffit à déterminer la polarité.",
        "correct": false,
        "explanation": "La géométrie est indispensable."
      },
      {
        "content": "Dans CO2, les deux moments de liaison C=O se compensent dans la géométrie idéale.",
        "correct": true,
        "explanation": "Ils sont opposés et de même intensité."
      },
      {
        "content": "CO2 est globalement apolaire malgré ses liaisons polarisées.",
        "correct": true,
        "explanation": "La symétrie annule la résultante."
      },
      {
        "content": "SO2 possède une résultante dipolaire non nulle.",
        "correct": true,
        "explanation": "Les deux liaisons ne sont pas colinéaires et opposées."
      },
      {
        "content": "SO2 est apolaire parce que ses deux liaisons S–O sont identiques.",
        "correct": false,
        "explanation": "La géométrie coudée empêche l'annulation."
      }
    ],
    "explanation": "CO2 et SO2 constituent un contraste classique entre compensation géométrique et moment dipolaire non nul."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'ammoniac $\\ce{NH3}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La neutralité de NH3 impose un moment dipolaire nul.",
        "correct": false,
        "explanation": "Neutralité et polarité sont compatibles."
      },
      {
        "content": "Le doublet non liant participe à la géométrie électronique du centre azoté.",
        "correct": true,
        "explanation": "Il contribue au type AX3E1."
      },
      {
        "content": "La molécule possède un moment dipolaire global non nul.",
        "correct": true,
        "explanation": "La géométrie pyramidale ne permet pas une annulation complète."
      },
      {
        "content": "Les liaisons N–H sont polarisées vers l'azote.",
        "correct": true,
        "explanation": "N est plus électronégatif que H."
      },
      {
        "content": "NH3 est trigonal plan.",
        "correct": false,
        "explanation": "La géométrie moléculaire est pyramidale."
      }
    ],
    "explanation": "La géométrie pyramidale de NH3 explique sa polarité moléculaire."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare les molécules tétraédriques $\\ce{CCl4}$ et $\\ce{CH2Cl2}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Toute géométrie tétraédrique implique un moment dipolaire nul.",
        "correct": false,
        "explanation": "Cela dépend des substituants."
      },
      {
        "content": "Dans CCl4, les moments C–Cl se compensent par symétrie.",
        "correct": true,
        "explanation": "Les quatre substituants sont équivalents."
      },
      {
        "content": "CH2Cl2 est plus symétrique que CCl4.",
        "correct": false,
        "explanation": "CCl4 possède la symétrie la plus élevée."
      },
      {
        "content": "CH2Cl2 possède un moment dipolaire global non nul.",
        "correct": true,
        "explanation": "Deux hydrogènes et deux chlores rompent la symétrie."
      },
      {
        "content": "Les deux molécules ont la même géométrie électronique autour du carbone.",
        "correct": true,
        "explanation": "Le centre est tétraédrique."
      }
    ],
    "explanation": "La nature des substituants est aussi importante que la géométrie générale."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition décrit correctement le chlorométhane $\\ce{CH3Cl}$ ?",
    "choices": [
      {
        "content": "La molécule porte nécessairement une charge entière.",
        "correct": false,
        "explanation": "Elle reste neutre."
      },
      {
        "content": "Le chlore porte une charge partielle positive.",
        "correct": false,
        "explanation": "Cl est le pôle partiellement négatif."
      },
      {
        "content": "Il possède un moment dipolaire global non nul, largement influencé par la liaison C–Cl.",
        "correct": true,
        "explanation": "La molécule n'est pas assez symétrique pour annuler cette contribution."
      },
      {
        "content": "Les trois liaisons C–H annulent exactement la liaison C–Cl.",
        "correct": false,
        "explanation": "La compensation n'est pas complète."
      },
      {
        "content": "Il est apolaire comme CCl4.",
        "correct": false,
        "explanation": "Les trois H et le Cl ne sont pas équivalents."
      }
    ],
    "explanation": "CH3Cl illustre comment une seule substitution peut rendre polaire un squelette tétraédrique."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le méthanal $\\ce{H2C=O}$ possède un groupe carbonyle. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La molécule possède un moment dipolaire global non nul.",
        "correct": true,
        "explanation": "Le dipôle du carbonyle n'est pas compensé."
      },
      {
        "content": "Le carbone carbonylé porte une charge partielle positive.",
        "correct": true,
        "explanation": "La densité électronique est déplacée vers O."
      },
      {
        "content": "La présence de deux hydrogènes impose une molécule apolaire.",
        "correct": false,
        "explanation": "La géométrie et le carbonyle conduisent à une résultante."
      },
      {
        "content": "La liaison C=O est fortement polarisée vers l'oxygène.",
        "correct": true,
        "explanation": "O est nettement plus électronégatif que C."
      },
      {
        "content": "Le carbone carbonylé est le pôle partiellement négatif.",
        "correct": false,
        "explanation": "Il est au contraire appauvri en densité électronique."
      }
    ],
    "explanation": "La polarisation du carbonyle est à la fois une propriété physique et un déterminant majeur de sa réactivité."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "On compare $\\ce{BF3}$ et $\\ce{NH3}$. Sélectionnez exactement les deux propositions correctes.",
    "choices": [
      {
        "content": "$\\ce{BF3}$ est globalement apolaire dans sa géométrie trigonale plane idéale.",
        "correct": true,
        "explanation": "Les trois dipôles B–F se compensent."
      },
      {
        "content": "Les deux molécules sont trigonal planes.",
        "correct": false,
        "explanation": "NH3 est pyramidale."
      },
      {
        "content": "Les deux molécules sont apolaires.",
        "correct": false,
        "explanation": "NH3 est polaire."
      },
      {
        "content": "$\\ce{NH3}$ est polaire.",
        "correct": true,
        "explanation": "La géométrie pyramidale donne une résultante."
      },
      {
        "content": "La présence de trois liaisons autour du centre suffit à imposer la même polarité.",
        "correct": false,
        "explanation": "Les doublets non liants et la géométrie changent la résultante."
      }
    ],
    "explanation": "Même nombre de liaisons autour du centre ne signifie pas même géométrie ni même polarité."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La molécule $\\ce{PCl5}$ est bipyramidale trigonale et possède cinq liaisons P–Cl polarisées. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Cinq liaisons polarisées imposent nécessairement une molécule polaire.",
        "correct": false,
        "explanation": "La géométrie peut annuler les contributions."
      },
      {
        "content": "Les deux contributions axiales sont opposées.",
        "correct": true,
        "explanation": "Elles se compensent l'une l'autre."
      },
      {
        "content": "Le chlore est moins électronégatif que le phosphore.",
        "correct": false,
        "explanation": "Le chlore est plus électronégatif."
      },
      {
        "content": "La résultante dipolaire idéale peut être nulle.",
        "correct": true,
        "explanation": "La symétrie globale permet la compensation."
      },
      {
        "content": "Les trois contributions équatoriales peuvent se compenser dans le plan.",
        "correct": true,
        "explanation": "Elles sont séparées de 120° dans le modèle idéal."
      }
    ],
    "explanation": "La polarité moléculaire ne se déduit jamais du seul nombre de liaisons polarisées."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la dissolution d'un composé moléculaire dans un solvant, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La dissolution exige normalement la rupture des liaisons covalentes internes du soluté.",
        "correct": false,
        "explanation": "Une dissolution physique conserve généralement les molécules."
      },
      {
        "content": "La polarité fournit un repère qualitatif utile.",
        "correct": true,
        "explanation": "Elle aide à prévoir les interactions dominantes."
      },
      {
        "content": "La formule brute suffit toujours à prévoir la miscibilité.",
        "correct": false,
        "explanation": "La géométrie et les groupes fonctionnels sont importants."
      },
      {
        "content": "Des interactions soluté-solvant favorables peuvent favoriser la dissolution.",
        "correct": true,
        "explanation": "Elles compensent le coût de séparation des espèces."
      },
      {
        "content": "Il faut considérer les interactions soluté-soluté, solvant-solvant et soluté-solvant.",
        "correct": true,
        "explanation": "La dissolution implique de rompre certaines interactions et d'en créer d'autres."
      }
    ],
    "explanation": "La solubilité est une conséquence thermodynamique de plusieurs contributions, dont les interactions intermoléculaires."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare le cis- et le trans-1,2-dichloroéthène. Quelles conséquences peuvent découler d'une différence de polarité entre les isomères ?",
    "choices": [
      {
        "content": "La température d'ébullition peut être modifiée.",
        "correct": true,
        "explanation": "Les forces intermoléculaires influencent l'énergie nécessaire à la vaporisation."
      },
      {
        "content": "Des interactions dipôle-dipôle plus fortes peuvent apparaître dans l'isomère le plus polaire.",
        "correct": true,
        "explanation": "Un dipôle permanent favorise les interactions de Keesom."
      },
      {
        "content": "La solubilité dans un solvant polaire peut différer.",
        "correct": true,
        "explanation": "La polarité influence les interactions soluté-solvant."
      },
      {
        "content": "La formule brute devient différente.",
        "correct": false,
        "explanation": "Les deux isomères ont la même formule brute."
      },
      {
        "content": "La vaporisation exige de rompre la liaison C=C.",
        "correct": false,
        "explanation": "Un changement d'état rompt surtout des interactions intermoléculaires."
      }
    ],
    "explanation": "Une différence géométrique peut se traduire par des propriétés physiques différentes sans modifier la connectivité atomique."
  },
  {
    "order": 51,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix molécules suivantes, sélectionnez exactement les cinq qui possèdent un moment dipolaire global non nul.",
    "choices": [
      {
        "content": "$\\ce{CH3Cl}$.",
        "correct": true,
        "explanation": "Substitution dissymétrique."
      },
      {
        "content": "$\\ce{SO2}$.",
        "correct": true,
        "explanation": "Coudée."
      },
      {
        "content": "$\\ce{CO2}$.",
        "correct": false,
        "explanation": "Linéaire et symétrique."
      },
      {
        "content": "$\\ce{H2O}$.",
        "correct": true,
        "explanation": "Coudée et polaire."
      },
      {
        "content": "$\\ce{CCl4}$.",
        "correct": false,
        "explanation": "Tétraédrique symétrique."
      },
      {
        "content": "$\\ce{CH4}$.",
        "correct": false,
        "explanation": "Tétraédrique symétrique."
      },
      {
        "content": "$\\ce{CH3OH}$.",
        "correct": true,
        "explanation": "Le groupe O–H et la géométrie donnent un dipôle net."
      },
      {
        "content": "$\\ce{BCl3}$.",
        "correct": false,
        "explanation": "Trigonale plane symétrique."
      },
      {
        "content": "$\\ce{C6H6}$.",
        "correct": false,
        "explanation": "Benzène globalement apolaire."
      },
      {
        "content": "$\\ce{NH3}$.",
        "correct": true,
        "explanation": "Pyramidale et polaire."
      }
    ],
    "explanation": "Le classement exige de combiner polarisation des liaisons et symétrie moléculaire."
  },
  {
    "order": 52,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux molécules dans lesquelles des liaisons polarisées s'annulent globalement par symétrie.",
    "choices": [
      {
        "content": "$\\ce{NH3}$.",
        "correct": false,
        "explanation": "La géométrie pyramidale donne une résultante."
      },
      {
        "content": "$\\ce{CO2}$.",
        "correct": true,
        "explanation": "Les deux contributions C=O sont opposées."
      },
      {
        "content": "$\\ce{CH3Cl}$.",
        "correct": false,
        "explanation": "La substitution dissymétrique laisse un dipôle net."
      },
      {
        "content": "$\\ce{BCl3}$.",
        "correct": true,
        "explanation": "Les trois contributions B–Cl s'annulent dans le plan."
      },
      {
        "content": "$\\ce{H2O}$.",
        "correct": false,
        "explanation": "La géométrie coudée empêche l'annulation."
      }
    ],
    "explanation": "La symétrie de CO2 et BCl3 compense des liaisons pourtant polarisées."
  }
];
