import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 – Chimie générale – Chapitre 1.3 – Section D – Règle de Gillespie et géométrie moléculaire */
export const UE14_CH3_GILLESPIE_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le modèle VSEPR (règle de Gillespie), quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une liaison multiple compte comme un seul domaine de liaison autour du centre.",
        "correct": true,
        "explanation": "Elle occupe une direction principale."
      },
      {
        "content": "Les domaines électroniques de valence autour d'un centre se repoussent.",
        "correct": true,
        "explanation": "Ils tendent à maximiser leur séparation."
      },
      {
        "content": "Le modèle prédit exactement toutes les longueurs de liaison.",
        "correct": false,
        "explanation": "Il vise surtout la géométrie qualitative."
      },
      {
        "content": "Seuls les atomes visibles comptent pour la géométrie.",
        "correct": false,
        "explanation": "Les doublets non liants modifient la forme."
      },
      {
        "content": "Les doublets non liants doivent être pris en compte.",
        "correct": true,
        "explanation": "Ils occupent un volume important."
      }
    ],
    "explanation": "VSEPR fournit une géométrie à partir du nombre de domaines liants et non liants autour de l'atome central."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Dans la notation $\\mathrm{AX}_m\\mathrm{E}_n$, sélectionnez exactement les deux propositions correctes.",
    "choices": [
      {
        "content": "X représente les neutrons du noyau.",
        "correct": false,
        "explanation": "X représente des atomes liés au centre."
      },
      {
        "content": "E désigne les doublets non liants portés par A.",
        "correct": true,
        "explanation": "n est leur nombre."
      },
      {
        "content": "E désigne obligatoirement un élément chimique.",
        "correct": false,
        "explanation": "Ici E signifie doublet non liant."
      },
      {
        "content": "m est le nombre total d'électrons de la molécule.",
        "correct": false,
        "explanation": "m compte les directions de liaison X."
      },
      {
        "content": "A désigne l'atome central.",
        "correct": true,
        "explanation": "C'est le centre étudié."
      }
    ],
    "explanation": "La notation AXmEn sépare les domaines liants X et les doublets non liants E."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QZONE",
    "question": "Cliquez sur la géométrie moléculaire correspondant à un centre de type $\\mathrm{AX}_3\\mathrm{E}_1$, comme dans $\\ce{NH3}$.",
    "image": {
      "src": "/images/training/ue14/chimie/vsepr-geometries-qzone.svg",
      "alt": "Six géométries moléculaires schématiques : linéaire, trigonale plane, tétraédrique, pyramidale, coudée et octaédrique",
      "width": 1200,
      "height": 700
    },
    "expectedZones": [
      {
        "id": "pyramidale-ax3e1",
        "label": "Géométrie pyramidale AX3E1",
        "x": 0.17,
        "y": 0.73,
        "tolerance": 0.1
      }
    ],
    "explanation": "AX3E1 possède quatre domaines électroniques mais seulement trois liaisons visibles ; la géométrie moléculaire est pyramidale."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant $\\ce{CO2}$ dans le modèle VSEPR, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone central possède deux domaines de liaison.",
        "correct": true,
        "explanation": "Chaque double liaison compte comme un domaine."
      },
      {
        "content": "La géométrie est linéaire.",
        "correct": true,
        "explanation": "Deux domaines se placent à 180°."
      },
      {
        "content": "Les deux doubles liaisons imposent AX4.",
        "correct": false,
        "explanation": "Le multiplicité de liaison ne multiplie pas le nombre de domaines."
      },
      {
        "content": "Le type est AX2.",
        "correct": true,
        "explanation": "Deux atomes périphériques et aucun doublet non liant sur C."
      },
      {
        "content": "La géométrie est coudée.",
        "correct": false,
        "explanation": "Elle est linéaire."
      }
    ],
    "explanation": "CO2 illustre la règle fondamentale : une liaison multiple compte comme une seule direction en VSEPR."
  },
  {
    "order": 55,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux associations correctes.",
    "choices": [
      {
        "content": "$\\ce{SO2}$ : AX2, linéaire.",
        "correct": false,
        "explanation": "Le doublet non liant modifie la forme."
      },
      {
        "content": "$\\ce{BH3}$ : AX3, trigonale plane.",
        "correct": true,
        "explanation": "Trois liaisons et aucun doublet non liant sur B."
      },
      {
        "content": "$\\ce{BH3}$ : AX4, tétraédrique.",
        "correct": false,
        "explanation": "Il n'y a que trois domaines."
      },
      {
        "content": "$\\ce{NH4+}$ : AX3E1.",
        "correct": false,
        "explanation": "NH4+ est AX4."
      },
      {
        "content": "$\\ce{SO2}$ : AX2E1, coudée.",
        "correct": true,
        "explanation": "Deux directions de liaison et un doublet non liant."
      }
    ],
    "explanation": "Le nombre total de domaines électroniques fixe l'organisation ; les doublets E déterminent la forme moléculaire visible."
  },
  {
    "order": 56,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Dans $\\ce{NH4+}$, combien de directions de liaison entourent l'azote ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "L'ion ammonium est AX4 et tétraédrique."
  },
  {
    "order": 57,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de $\\ce{NH3}$ et $\\ce{H2O}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "$\\ce{H2O}$ est AX2E2 et coudée.",
        "correct": true,
        "explanation": "Deux liaisons, deux doublets."
      },
      {
        "content": "Les deux molécules sont linéaires.",
        "correct": false,
        "explanation": "Elles sont pyramidale et coudée."
      },
      {
        "content": "Les doublets non liants réduisent les angles par rapport au tétraèdre idéal.",
        "correct": true,
        "explanation": "Leur répulsion est forte."
      },
      {
        "content": "$\\ce{NH3}$ est AX3E1 et pyramidale.",
        "correct": true,
        "explanation": "Trois liaisons, un doublet."
      },
      {
        "content": "H2O ne possède aucun doublet non liant.",
        "correct": false,
        "explanation": "Elle en possède deux."
      }
    ],
    "explanation": "NH3 et H2O illustrent l'effet des doublets non liants sur une organisation électronique à quatre domaines."
  },
  {
    "order": 58,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux espèces de type AX3E1.",
    "choices": [
      {
        "content": "$\\ce{CH4}$.",
        "correct": false,
        "explanation": "AX4."
      },
      {
        "content": "$\\ce{H2O}$.",
        "correct": false,
        "explanation": "AX2E2."
      },
      {
        "content": "$\\ce{CO2}$.",
        "correct": false,
        "explanation": "AX2."
      },
      {
        "content": "$\\ce{H3O+}$.",
        "correct": true,
        "explanation": "Trois liaisons et un doublet."
      },
      {
        "content": "$\\ce{NH3}$.",
        "correct": true,
        "explanation": "Trois liaisons et un doublet."
      }
    ],
    "explanation": "NH3 et H3O+ sont pyramidaux de type AX3E1."
  },
  {
    "order": 59,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de $\\ce{PCl5}$ et $\\ce{SF6}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Dans PCl5, on rencontre des angles de 90° et 120°.",
        "correct": true,
        "explanation": "Positions axiales et équatoriales."
      },
      {
        "content": "PCl5 est tétraédrique.",
        "correct": false,
        "explanation": "Il possède cinq domaines."
      },
      {
        "content": "$\\ce{PCl5}$ est AX5 et bipyramidal trigonale.",
        "correct": true,
        "explanation": "Cinq directions de liaison."
      },
      {
        "content": "SF6 est linéaire.",
        "correct": false,
        "explanation": "Il est octaédrique."
      },
      {
        "content": "$\\ce{SF6}$ est AX6 et octaédrique.",
        "correct": true,
        "explanation": "Six directions de liaison."
      }
    ],
    "explanation": "VSEPR s'étend aux coordinences cinq et six, au-delà des géométries sp/sp2/sp3 simples."
  },
  {
    "order": 60,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles correspondances molécule → type VSEPR sont exactes ?",
    "choices": [
      {
        "content": "$\\ce{CH4}$ → AX4.",
        "correct": true,
        "explanation": "Tétraédrique."
      },
      {
        "content": "$\\ce{BeH2}$ → AX2.",
        "correct": true,
        "explanation": "Linéaire."
      },
      {
        "content": "$\\ce{BH3}$ → AX3.",
        "correct": true,
        "explanation": "Trigonale plane."
      },
      {
        "content": "$\\ce{H2O}$ → AX4.",
        "correct": false,
        "explanation": "La notation détaillée est AX2E2."
      },
      {
        "content": "$\\ce{NH3}$ → AX2E2.",
        "correct": false,
        "explanation": "NH3 est AX3E1."
      }
    ],
    "explanation": "La notation détaillée distingue les atomes liés X et les doublets non liants E."
  }
];
