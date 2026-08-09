import type { HealthTrainingAuthorQuestion } from "@/core/questions";

export const healthTrainingDemoAuthorQuestions: HealthTrainingAuthorQuestion[] = [
  {
    order: 1,
    difficulty: "EASY",
    format: "QRU",
    question: "Quelle est la principale organite responsable de la synthèse d'ATP lors de la respiration cellulaire ?",
    choices: [
      {
        content: "Appareil de Golgi",
        correct: false,
        explanation: "L'appareil de Golgi est impliqué dans la maturation et le tri des protéines.",
      },
      {
        content: "Mitochondrie",
        correct: true,
        explanation: "La mitochondrie est la centrale énergétique cellulaire produisant l'ATP par phosphorylation oxydative.",
      },
      {
        content: "Lysosome",
        correct: false,
        explanation: "Le lysosome est le compartiment de dégradation hydrolytique.",
      },
      {
        content: "Réticulum endoplasmique lisse",
        correct: false,
        explanation: "Le REL intervient principalement dans la synthèse des lipides et le stockage du calcium.",
      },
    ],
    explanation: "La mitochondrie possède une membrane interne repliée en crêtes contenant la chaîne de transport des électrons et l'ATP synthétase.",
  },
  {
    order: 2,
    difficulty: "EASY",
    format: "QRM",
    question: "Parmi les propositions suivantes concernant les acides gras insaturés, lesquelles sont exactes ?",
    choices: [
      {
        content: "Ils possèdent au moins une double liaison carbone-carbone.",
        correct: true,
        explanation: "La présence d'au moins une double liaison C=C définit un acide gras insaturé.",
      },
      {
        content: "La conformation cis induit un coude dans la chaîne hydrocarbonée.",
        correct: true,
        explanation: "La double liaison cis naturelle crée une rigidité et une courbure spatiale.",
      },
      {
        content: "Ils ont une température de fusion plus élevée que leurs homologues saturés de même longueur.",
        correct: false,
        explanation: "Leur température de fusion est plus basse en raison de la diminution des interactions de Van der Waals.",
      },
      {
        content: "L'acide oléique est un acide gras mono-insaturé en omega-9.",
        correct: true,
        explanation: "L'acide oléique (18:1 cis-9) est un acide gras mono-insaturé n-9.",
      },
    ],
    explanation: "Les doubles liaisons des acides gras naturels sont majoritairement de configuration cis, abaissant le point de fusion.",
  },
  {
    order: 3,
    difficulty: "MEDIUM",
    format: "QRP",
    requiredSelectionCount: 2,
    question: "Sélectionnez les deux enzymes clés régulatrices et irréversibles de la glycolyse.",
    choices: [
      {
        content: "Phosphofructokinase-1 (PFK-1)",
        correct: true,
        explanation: "La PFK-1 est l'enzyme clé régulatrice majeure de la glycolyse.",
      },
      {
        content: "Phosphoglucose isomérase",
        correct: false,
        explanation: "C'est une réaction réversible proche de l'équilibre.",
      },
      {
        content: "Pyruvate kinase",
        correct: true,
        explanation: "La pyruvate kinase catalyse la troisième étape irréversible produisant de l'ATP.",
      },
      {
        content: "Aldolase",
        correct: false,
        explanation: "L'aldolase catalyse un clivage réversible du fructose-1,6-bisphosphate.",
      },
    ],
    explanation: "La glycolyse comporte 3 réactions irréversibles catalysées par l'hexokinase/glucokinase, la PFK-1 et la pyruvate kinase.",
  },
  {
    order: 4,
    difficulty: "MEDIUM",
    format: "QRPL",
    requiredSelectionCount: 3,
    question: "Parmi la liste suivante d'acides aminés, sélectionnez les trois acides aminés à chaîne latérale strictement aromatique.",
    choices: [
      {
        content: "Phénylalanine",
        correct: true,
        explanation: "La phénylalanine possède un noyau benzénique aromatique.",
      },
      {
        content: "Tyrosine",
        correct: true,
        explanation: "La tyrosine possède un noyau phénol aromatique.",
      },
      {
        content: "Tryptophane",
        correct: true,
        explanation: "Le tryptophane possède un noyau indole aromatique.",
      },
      {
        content: "Alanine",
        correct: false,
        explanation: "L'alanine possède un groupement méthyle aliphatique.",
      },
      {
        content: "Leucine",
        correct: false,
        explanation: "La leucine est un acide aminé ramifié aliphatique.",
      },
      {
        content: "Lysine",
        correct: false,
        explanation: "La lysine est un acide aminé basique aliphatique.",
      },
      {
        content: "Sérine",
        correct: false,
        explanation: "La sérine possède une fonction alcool aliphatique.",
      },
      {
        content: "Proline",
        correct: false,
        explanation: "La proline est un iminoacide cyclique aliphatique.",
      },
    ],
    explanation: "Les 3 acides aminés aromatiques sont la Phénylalanine, la Tyrosine et le Tryptophane. Ils absorbent les UV à 280 nm.",
  },
  {
    order: 5,
    difficulty: "MEDIUM",
    format: "QROC",
    question: "Quel organite membranaire est le siège principal de la N-glycosylation initiale des protéines ?",
    answer: {
      type: "text",
      acceptedAnswers: [
        "réticulum endoplasmique rugueux",
        "réticulum endoplasmique granuleux",
        "RER",
        "REG",
        "reticulum endoplasmique rugueux",
      ],
      normalization: {
        trim: true,
        collapseWhitespace: true,
        caseSensitive: false,
        ignoreAccents: true,
      },
    },
    explanation: "La N-glycosylation débute dans la lumière du RER/REG par le transfert en bloc d'un oligosaccharide composé de 14 oses.",
  },
  {
    order: 6,
    difficulty: "MEDIUM",
    format: "QROC",
    question: "Quelle est la valeur cible du pH physiologique moyen du sang artériel chez l'humain ?",
    answer: {
      type: "number",
      value: 7.4,
      tolerance: 0.05,
      unit: "pH",
    },
    explanation: "Le pH du sang artériel est strictement régulé entre 7,35 et 7,45 (moyenne 7,40).",
  },
  {
    order: 7,
    difficulty: "HARD",
    format: "QZONE",
    question: "Cliquez sur la mitochondrie au sein de ce schéma d'organisation cellulaire.",
    image: {
      src: "/images/training/demo/cell-structure-demo.png",
      alt: "Schéma interactif d'une cellule animale",
      width: 800,
      height: 600,
    },
    expectedZones: [
      {
        id: "mitochondrie-target",
        label: "Mitochondrie",
        x: 0.45,
        y: 0.6,
        tolerance: 0.08,
      },
    ],
    explanation: "La zone ciblée à (x=0,45, y=0,60) correspond à la mitochondrie identifiable par ses crêtes membranaires internes.",
  },
];
