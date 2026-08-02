/**
 * UE14 – Biologie cellulaire – Chapitre 6
 * Contenu pédagogique fondé sur la fiche 2024-2025 du Tutorat Santé de Reims.
 */
import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
  {
    order: 121,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de l’identité du peroxysome :`,
    choices: [
      `Organite à membrane unique.`,
      `Organite sans génome.`,
      `Organite indépendant du SEM.`,
      `Organite dépourvu d’enzymes.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Le peroxysome est un organite enzymatique à membrane unique, sans génome et hors du SEM.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit les éléments de la fiche ou attribue au peroxysome une propriété non décrite.`,
    ],
  },
  {
    order: 122,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La biogenèse peroxysomale associe :`,
    choices: [
      `Bourgeonnement d’un réseau préexistant.`,
      `Import de protéines cytosoliques.`,
      `Apport de phospholipides depuis le RE.`,
      `Formation obligatoire à partir d’un lysosome.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La biogenèse dépend du réseau peroxysomal et des apports cytosoliques, non d’une conversion lysosomale.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit les éléments de la fiche ou attribue au peroxysome une propriété non décrite.`,
    ],
  },
  {
    order: 123,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Les PPAR permettent de relier :`,
    choices: [
      `Des signaux lipidiques.`,
      `Des récepteurs nucléaires.`,
      `La transcription de gènes peroxysomaux.`,
      `La production directe de H2O2 par le noyau.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Les PPAR régulent l’expression génique, alors que le H2O2 est produit par les oxydases dans la matrice.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit les éléments de la fiche ou attribue au peroxysome une propriété non décrite.`,
    ],
  },
  {
    order: 124,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La membrane peroxysomale comporte :`,
    choices: [
      `Des perméases ABC utilisant l’ATP.`,
      `Des complexes d’import de protéines.`,
      `Des systèmes de récepteurs et d’adressage.`,
      `Une enveloppe nucléaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La membrane peroxysomale est spécialisée dans les échanges de solutés et de protéines.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit les éléments de la fiche ou attribue au peroxysome une propriété non décrite.`,
    ],
  },
  {
    order: 125,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `L’équilibre oxydases–catalase permet :`,
    choices: [
      `La production contrôlée de H2O2.`,
      `L’utilisation du H2O2 dans certaines oxydations.`,
      `La destruction de l’excès de H2O2.`,
      `La synthèse d’un génome peroxysomal.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Cette coopération assure des fonctions oxydatives tout en limitant l’accumulation de H2O2.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit les éléments de la fiche ou attribue au peroxysome une propriété non décrite.`,
    ],
  },
  {
    order: 126,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Le peroxysome et la mitochondrie coopèrent car :`,
    choices: [
      `Le peroxysome raccourcit les très longues chaînes.`,
      `Les produits peuvent rejoindre la mitochondrie.`,
      `L’acétyl-CoA peut être utilisé pour produire de l’énergie.`,
      `Les deux organites fusionnent définitivement.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La coopération repose sur un transfert de métabolites, non sur une fusion permanente.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit les éléments de la fiche ou attribue au peroxysome une propriété non décrite.`,
    ],
  },
  {
    order: 127,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Les fonctions peroxysomales citées comprennent :`,
    choices: [
      `La β-oxydation.`,
      `La synthèse d’acides biliaires.`,
      `La dégradation d’acides aminés.`,
      `Le catabolisme de l’acide urique chez les animaux possédant l’urate oxydase.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation: `La fiche présente plusieurs fonctions lipidiques, oxydatives et cataboliques.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
    ],
  },
  {
    order: 128,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `En observant la figure suivante :

![Adressage et régulation](/images/training/ue14/biologie-cellulaire/peroxysomes/adressage-regulation-peroxysome.png)

Quelle(s) proposition(s) est(sont) correcte(s) ?`,
    choices: [
      `La construction de l’organite dépend du cytosol.`,
      `Le RE apporte des phospholipides.`,
      `Les PPAR modulent l’expression de protéines peroxysomales.`,
      `Le peroxysome possède une autonomie génétique complète.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La figure illustre la dépendance envers le cytosol, le RE et la régulation nucléaire.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit les éléments de la fiche ou attribue au peroxysome une propriété non décrite.`,
    ],
  },
  {
    order: 129,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Les pathologies peroxysomales peuvent associer :`,
    choices: [
      `Accumulation d’acides gras à très longue chaîne.`,
      `Leucodystrophie.`,
      `Atteinte surrénale dans l’adrénoleucodystrophie liée à l’X.`,
      `Polymalformations dans le syndrome de Zellweger.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation: `Les exemples cliniques reflètent la diversité et la gravité des déficits peroxysomaux.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
    ],
  },
  {
    order: 130,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Quelle synthèse générale est correcte ?`,
    choices: [
      `Le peroxysome est dynamique et renouvelé.`,
      `Il assure des fonctions métaboliques et détoxifiantes.`,
      `Il coopère avec d’autres organites sans appartenir au SEM.`,
      `Il est inutile dans le métabolisme lipidique.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Le peroxysome combine dynamique structurale, échanges et fonctions métaboliques essentielles.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit les éléments de la fiche ou attribue au peroxysome une propriété non décrite.`,
    ],
  },
  {
    order: 131,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Après administration d’un fibrate, on observe une augmentation du nombre de peroxysomes dans des hépatocytes. Cette observation est cohérente avec :`,
    choices: [
      `La stimulation de la synthèse de peroxysomes.`,
      `Une augmentation potentielle de la prise en charge des acides gras à très longue chaîne.`,
      `Une action hypolipémiante décrite dans la fiche.`,
      `Une suppression de toute β-oxydation.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Les fibrates stimulent la prolifération peroxysomale et favorisent la diminution des très longues chaînes.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit les éléments de la fiche ou attribue au peroxysome une propriété non décrite.`,
    ],
  },
  {
    order: 132,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Dans la même expérience, la concentration d’acides gras à très longue chaîne diminue. On peut relier ce résultat à :`,
    choices: [
      `La β-oxydation peroxysomale.`,
      `L’augmentation de la capacité de raccourcissement des chaînes.`,
      `La coopération ultérieure avec les mitochondries.`,
      `Une nouvelle synthèse d’acides gras à très longue chaîne par les fibrates.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `L’augmentation du nombre de peroxysomes améliore la prise en charge initiale de ces acides gras.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit les éléments de la fiche ou attribue au peroxysome une propriété non décrite.`,
    ],
  },
  {
    order: 133,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Lors du catabolisme hépatique de l’alcool, l’acétaldéhyde s’accumule. Cela peut être cohérent avec :`,
    choices: [
      `Une détoxification insuffisante par la catalase.`,
      `Une toxicité pour le cytosquelette.`,
      `Un blocage possible du transport axonal.`,
      `Une fonction protectrice directe de l’acétaldéhyde.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La fiche présente l’acétaldéhyde comme un intermédiaire dangereux détruit grâce à la catalase.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit les éléments de la fiche ou attribue au peroxysome une propriété non décrite.`,
    ],
  },
  {
    order: 134,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Dans cette situation, une catalase fonctionnelle contribue à :`,
    choices: [
      `Utiliser le H2O2 produit par les oxydases.`,
      `Oxyder et détruire l’acétaldéhyde.`,
      `Limiter l’excès de H2O2.`,
      `Produire le génome peroxysomal.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La catalase combine détoxification de substrats et contrôle du H2O2.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit les éléments de la fiche ou attribue au peroxysome une propriété non décrite.`,
    ],
  },
  {
    order: 135,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Un enfant présente une hypotonie, une épilepsie, une dysfonction rénale et des malformations. Le tableau est compatible avec :`,
    choices: [
      `Le syndrome de Zellweger.`,
      `Un syndrome hépato-cérébro-rénal.`,
      `Une maladie peroxysomale.`,
      `Une simple crise de goutte isolée.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La fiche décrit ce regroupement de manifestations dans le syndrome de Zellweger.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit les éléments de la fiche ou attribue au peroxysome une propriété non décrite.`,
    ],
  },
  {
    order: 136,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Un adolescent présente une démyélinisation progressive et une insuffisance surrénale. Le diagnostic évoqué dans la fiche est :`,
    choices: [
      `L’adrénoleucodystrophie liée à l’X.`,
      `Une leucodystrophie peroxysomale.`,
      `Une maladie neurodégénérative sévère.`,
      `Une conséquence normale de l’urate oxydase humaine.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Ces caractéristiques correspondent à l’adrénoleucodystrophie liée à l’X.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit les éléments de la fiche ou attribue au peroxysome une propriété non décrite.`,
    ],
  },
  {
    order: 137,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `À partir de la figure suivante :

![Structure et biogenèse](/images/training/ue14/biologie-cellulaire/peroxysomes/structure-biogenese-peroxysome.png)

Quelle(s) proposition(s) est(sont) correcte(s) ?`,
    choices: [
      `La structure représentée est limitée par une seule membrane.`,
      `Le réseau peroxysomal peut bourgeonner.`,
      `La région paracristalline contient des enzymes oxydatives.`,
      `Le schéma représente un compartiment du Golgi.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La figure reprend la morphologie et la biogenèse propres aux peroxysomes.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit les éléments de la fiche ou attribue au peroxysome une propriété non décrite.`,
    ],
  },
  {
    order: 138,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `À partir de la figure suivante :

![β-oxydation et mitochondrie](/images/training/ue14/biologie-cellulaire/peroxysomes/beta-oxydation-cooperation-mitochondrie.png)

Quelle(s) proposition(s) est(sont) correcte(s) ?`,
    choices: [
      `Le peroxysome intervient en amont de la mitochondrie pour les très longues chaînes.`,
      `Les acides gras raccourcis peuvent être transférés.`,
      `L’acétyl-CoA peut rejoindre le cycle de Krebs mitochondrial.`,
      `Les fibrates inhibent la synthèse des peroxysomes.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Le schéma illustre le relais métabolique entre peroxysome et mitochondrie et l’effet stimulant des fibrates.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit les éléments de la fiche ou attribue au peroxysome une propriété non décrite.`,
    ],
  },
  {
    order: 139,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Les trois figures suivantes présentent l’organisation, les réactions oxydatives et les conséquences métaboliques des peroxysomes.

![Structure](/images/training/ue14/biologie-cellulaire/peroxysomes/structure-biogenese-peroxysome.png)

![Oxydases et catalase](/images/training/ue14/biologie-cellulaire/peroxysomes/oxydases-catalase-h2o2.png)

![Pathologies](/images/training/ue14/biologie-cellulaire/peroxysomes/acide-urique-pathologies-peroxysomales.png)

En croisant ces informations :`,
    choices: [
      `Le peroxysome est un organite dynamique et enzymatique.`,
      `Ses oxydases produisent du H2O2 contrôlé par la catalase.`,
      `Ses déficits peuvent provoquer une accumulation de métabolites.`,
      `Son rôle est exclusivement structural.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Les figures montrent une articulation entre organisation, métabolisme oxydatif et pathologies.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit les éléments de la fiche ou attribue au peroxysome une propriété non décrite.`,
    ],
  },
  {
    order: 140,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Quelle conclusion générale est la plus fidèle au chapitre ?`,
    choices: [
      `Les peroxysomes sont des organites sans génome mais riches en enzymes importées.`,
      `Ils participent à la détoxification et au métabolisme lipidique.`,
      `Ils se renouvellent et coopèrent avec le cytosquelette, le RE, les lysosomes et les mitochondries.`,
      `Ils appartiennent au système endomembranaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Le peroxysome est un organite autonome sur le plan structural mais dépendant d’imports et de coopérations, tout en restant hors du SEM.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit les éléments de la fiche ou attribue au peroxysome une propriété non décrite.`,
    ],
  },
];

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    order: 13,
    slug: `organisation-metabolisme-pathologies-peroxysomes`,
    title: `Organisation, métabolisme et pathologies des peroxysomes`,
    description: `Révision transversale de la structure, des fonctions et des principales pathologies.`,
    stage: 'PRACTICE',
    sectionOrder: 5,
    questionOrders: [121, 122, 123, 124, 125, 126, 127, 128, 129, 130],
  },
  {
    order: 14,
    slug: `synthese-clinique-experimentale-peroxysomes`,
    title: `Synthèse clinique et expérimentale du chapitre`,
    description: `Situations intégratives sur les fibrates, la détoxification et les maladies peroxysomales.`,
    stage: 'MASTER',
    sectionOrder: 5,
    items: [
      {
        type: 'GROUP',
        title: `Fibrates et acides gras à très longue chaîne`,
        sharedStatement: `Des hépatocytes sont exposés à un médicament hypolipémiant de la famille des fibrates. Le nombre de peroxysomes augmente et la concentration en acides gras à très longue chaîne diminue.`,
        questionOrders: [131, 132],
      },
      {
        type: 'GROUP',
        title: `Détoxification de l’alcool`,
        sharedStatement: `Une équipe analyse l’accumulation d’acétaldéhyde dans des cellules hépatiques et le rôle du système oxydases–catalase.`,
        questionOrders: [133, 134],
      },
      {
        type: 'GROUP',
        title: `Maladies peroxysomales`,
        sharedStatement: `Deux dossiers cliniques sont comparés : un enfant présentant une polymalformation hépato-cérébro-rénale et un adolescent présentant une démyélinisation progressive associée à une insuffisance surrénale.`,
        questionOrders: [135, 136],
      },
      { type: 'QUESTION', questionOrder: 137 },
      { type: 'QUESTION', questionOrder: 138 },
      { type: 'QUESTION', questionOrder: 139 },
      { type: 'QUESTION', questionOrder: 140 },
    ],
  },
];
