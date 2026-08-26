import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';

/**
 * UE14 — Colle C09 — Biologie cellulaire — Cellule intégrée
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 * Périmètre : Biologie cellulaire Ch. 7 à 9 + rappels Ch. 1 à 6.
 */
export const UE14_COLLE_C09_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 1,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "À propos de l’organisation fonctionnelle de la mitochondrie, quelles propositions sont exactes ?",
    explanation: "La mitochondrie possède deux membranes aux propriétés différentes. La membrane externe constitue la première étape de l’import de nombreuses protéines via le complexe TOM, tandis que la membrane interne porte la chaîne respiratoire et l’ATP synthase.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:mitochondrie-organisation'],
    choices: [
      {
        content: "Le complexe TOM participe au passage initial de nombreuses protéines mitochondriales à travers la membrane externe.",
        correct: true,
        explanation: "TOM constitue la porte d’entrée principale de nombreuses protéines synthétisées dans le cytosol et destinées à la mitochondrie.",
      },
      {
        content: "La membrane interne mitochondriale porte les principaux complexes de la chaîne respiratoire.",
        correct: true,
        explanation: "Les complexes I à IV ainsi que l’ATP synthase sont associés à la membrane interne.",
      },
      {
        content: "La glycolyse constitue une voie métabolique propre à la matrice mitochondriale.",
        correct: false,
        explanation: "La glycolyse se déroule dans le cytosol ; la matrice accueille notamment l’oxydation du pyruvate et le cycle de Krebs.",
      },
      {
        content: "La membrane externe est le siège principal de la phosphorylation oxydative.",
        correct: false,
        explanation: "La phosphorylation oxydative dépend de la membrane interne, qui établit le gradient protonique et porte l’ATP synthase.",
      },
      {
        content: "Toutes les protéines mitochondriales sont traduites à partir de l’ADN mitochondrial.",
        correct: false,
        explanation: "La grande majorité des protéines mitochondriales est codée par le génome nucléaire puis importée.",
      },
    ],
  },
  {
    order: 2,
    difficulty: 'EASY',
    format: 'QROC',
    question: "Quel est l’accepteur final des électrons de la chaîne respiratoire mitochondriale ?",
    explanation: "Au niveau du complexe IV, le dioxygène accepte les électrons et est réduit en eau.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:chaine-respiratoire'],
    answer: {
      type: 'text',
      acceptedAnswers: ['dioxygène', 'dioxygene', 'oxygène', 'oxygene', 'O2', 'O₂'],
      normalization: {
        trim: true,
        collapseWhitespace: true,
        caseSensitive: false,
        ignoreAccents: true,
        normalizeUnicode: true,
      },
    },
  },
  {
    order: 3,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: "Quelle proposition décrit correctement la chaîne respiratoire mitochondriale ?",
    explanation: "Les complexes I, III et IV contribuent au pompage des protons de la matrice vers l’espace intermembranaire. Le complexe II transfère des électrons à l’ubiquinone sans pomper directement de protons.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:chaine-respiratoire'],
    choices: [
      {
        content: "Le complexe II alimente l’ubiquinone en électrons mais ne participe pas directement au pompage des protons.",
        correct: true,
        explanation: "La succinate-déshydrogénase transfère des électrons vers l’ubiquinone sans translocation protonique couplée.",
      },
      {
        content: "Le cytochrome c transporte les électrons du complexe I directement vers le complexe II.",
        correct: false,
        explanation: "Le cytochrome c assure le transfert d’électrons du complexe III vers le complexe IV.",
      },
      {
        content: "Le complexe IV réduit l’ATP en ADP pour fournir l’énergie de la respiration.",
        correct: false,
        explanation: "Le complexe IV transfère les électrons au dioxygène ; l’ATP synthase utilise ensuite la force proton-motrice pour synthétiser l’ATP.",
      },
      {
        content: "L’ubiquinone est un transporteur soluble de l’espace intermembranaire analogue au cytochrome c.",
        correct: false,
        explanation: "L’ubiquinone est une molécule lipophile mobile dans la membrane interne.",
      },
      {
        content: "Les quatre complexes respiratoires expulsent une quantité identique de protons à chaque transfert d’électrons.",
        correct: false,
        explanation: "Le complexe II ne pompe pas de protons, et la stœchiométrie n’est pas identique entre les complexes qui en pompent.",
      },
    ],
  },
  {
    order: 4,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux différences correctes entre mitochondrie et peroxysome.",
    explanation: "La mitochondrie possède son propre génome, contrairement au peroxysome. Le peroxysome participe préférentiellement au raccourcissement des acides gras à très longue chaîne avant un relais métabolique possible vers la mitochondrie.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:mitochondrie-peroxysome'],
    choices: [
      {
        content: "La mitochondrie possède un ADN propre alors que le peroxysome ne possède pas de génome.",
        correct: true,
        explanation: "L’ADN mitochondrial est distinct de l’ADN nucléaire ; les peroxysomes sont dépourvus de génome propre.",
      },
      {
        content: "Le peroxysome participe au raccourcissement des acides gras à très longue chaîne avant un relais possible vers la mitochondrie.",
        correct: true,
        explanation: "La β-oxydation peroxysomale raccourcit notamment des VLCFA et peut fournir des produits ensuite pris en charge par la mitochondrie.",
      },
      {
        content: "Le peroxysome possède deux membranes alors que la mitochondrie n’en possède qu’une.",
        correct: false,
        explanation: "Le peroxysome est limité par une membrane ; la mitochondrie possède une membrane externe et une membrane interne.",
      },
      {
        content: "La chaîne respiratoire est portée par la membrane du peroxysome et non par celle de la mitochondrie.",
        correct: false,
        explanation: "La chaîne respiratoire est localisée dans la membrane interne mitochondriale.",
      },
      {
        content: "Les deux organites appartiennent au système endomembranaire classique et échangent leur contenu par des vésicules.",
        correct: false,
        explanation: "Ni la mitochondrie ni le peroxysome n’appartiennent au système endomembranaire classique.",
      },
    ],
  },
  {
    order: 5,
    difficulty: 'EASY',
    format: 'QRM',
    question: "À propos du génome mitochondrial humain et de l’expression des protéines mitochondriales, quelles propositions sont exactes ?",
    explanation: "L’ADN mitochondrial humain est une petite molécule circulaire d’environ 16,6 kb. Il code une fraction très limitée des protéines de la phosphorylation oxydative, tandis que l’immense majorité des protéines mitochondriales est codée par le noyau.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:genome-mitochondrial'],
    choices: [
      {
        content: "L’ADN mitochondrial humain est circulaire et mesure environ 16,6 kb.",
        correct: true,
        explanation: "Le génome mitochondrial humain est compact et très petit par rapport au génome nucléaire.",
      },
      {
        content: "Il code treize polypeptides participant à la phosphorylation oxydative.",
        correct: true,
        explanation: "Le génome mitochondrial code 13 protéines de complexes de phosphorylation oxydative, ainsi que des ARNt et ARNr mitochondriaux.",
      },
      {
        content: "La majorité des protéines nécessaires au fonctionnement mitochondrial est codée par le noyau.",
        correct: true,
        explanation: "Ces protéines sont synthétisées dans le cytosol puis importées dans l’organite.",
      },
      {
        content: "La réplication de l’ADN mitochondrial ne peut avoir lieu que pendant la phase S du cycle cellulaire.",
        correct: false,
        explanation: "La réplication de l’ADN mitochondrial n’est pas strictement couplée à la phase S nucléaire.",
      },
      {
        content: "Les ribosomes cytosoliques traduisent directement l’ensemble des protéines codées par l’ADN mitochondrial.",
        correct: false,
        explanation: "Les protéines codées par l’ADN mitochondrial sont traduites par les ribosomes mitochondriaux.",
      },
    ],
  },
  {
    order: 6,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: "Quel complexe de translocation constitue la principale porte d’entrée des protéines à travers la membrane mitochondriale externe ?",
    explanation: "Le complexe TOM, pour Translocase of the Outer Membrane, constitue la voie d’entrée majeure de nombreuses protéines mitochondriales synthétisées dans le cytosol.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:import-mitochondrial'],
    answer: {
      type: 'text',
      acceptedAnswers: ['TOM', 'complexe TOM', 'translocase TOM', 'Translocase of the Outer Membrane'],
      normalization: {
        trim: true,
        collapseWhitespace: true,
        caseSensitive: false,
        ignoreAccents: true,
        normalizeUnicode: true,
      },
    },
  },
  {
    order: 7,
    difficulty: 'HARD',
    format: 'QRU',
    question: "Quelle proposition décrit correctement le devenir des électrons du NADH cytosolique selon les navettes mitochondriales ?",
    explanation: "La navette malate-aspartate permet de former du NADH dans la matrice, dont les électrons rejoignent le complexe I. La navette glycérol-3-phosphate transfère les électrons vers l’ubiquinone et contourne le complexe I.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:navettes-electrons'],
    choices: [
      {
        content: "Les deux navettes font entrer physiquement le NADH cytosolique intact dans la matrice.",
        correct: false,
        explanation: "Le NADH cytosolique ne traverse pas directement la membrane interne ; les navettes transfèrent ses équivalents réducteurs.",
      },
      {
        content: "La navette glycérol-3-phosphate transfère les électrons vers l’ubiquinone en contournant le complexe I.",
        correct: true,
        explanation: "Cette navette alimente le pool d’ubiquinone à un niveau énergétique inférieur à celui du NADH matriciel entrant par le complexe I.",
      },
      {
        content: "La navette malate-aspartate délivre directement ses électrons au complexe IV.",
        correct: false,
        explanation: "Elle permet de régénérer du NADH matriciel dont les électrons entrent au niveau du complexe I.",
      },
      {
        content: "La navette glycérol-3-phosphate est une variante du complexe II mitochondrial.",
        correct: false,
        explanation: "Elle utilise une glycérol-3-phosphate déshydrogénase mitochondriale distincte du complexe II.",
      },
      {
        content: "Les navettes ne modifient jamais le rendement énergétique associé à l’oxydation du NADH cytosolique.",
        correct: false,
        explanation: "Le point d’entrée des électrons dans la chaîne respiratoire influence le nombre de protons pompés et donc le rendement en ATP.",
      },
    ],
  },
  {
    order: 8,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux propositions correctes sur des fonctions mitochondriales autres que la production directe d’ATP.",
    explanation: "La mitochondrie intervient aussi dans la thermogenèse et l’apoptose. UCP1 dissipe une partie du gradient protonique sous forme de chaleur, tandis que la perméabilisation de la membrane externe peut libérer le cytochrome c et engager l’apoptose intrinsèque.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:mitochondrie-autres-fonctions'],
    choices: [
      {
        content: "UCP1 peut dissiper une partie de la force proton-motrice sous forme de chaleur dans le tissu adipeux brun.",
        correct: true,
        explanation: "UCP1 permet un retour des protons qui court-circuite en partie la synthèse d’ATP et produit de la chaleur.",
      },
      {
        content: "La perméabilisation de la membrane externe mitochondriale peut conduire à la libération de cytochrome c dans le cytosol.",
        correct: true,
        explanation: "Le cytochrome c cytosolique participe ensuite à la formation de l’apoptosome avec Apaf-1.",
      },
      {
        content: "La mitochondrie libère directement de la procaspase-9 préformée depuis sa matrice.",
        correct: false,
        explanation: "La procaspase-9 est cytosolique ; son activation est favorisée par l’apoptosome.",
      },
      {
        content: "UCP1 augmente le rendement de synthèse d’ATP en renforçant le gradient protonique.",
        correct: false,
        explanation: "UCP1 dissipe le gradient au lieu de le renforcer.",
      },
      {
        content: "Les espèces réactives de l’oxygène ne peuvent pas être produites au niveau de la chaîne respiratoire.",
        correct: false,
        explanation: "Des ROS peuvent notamment être générées aux complexes I et III.",
      },
    ],
  },
  {
    order: 9,
    difficulty: 'MEDIUM',
    format: 'QRPL',
    requiredSelectionCount: 5,
    question: "Parmi ces dix propositions couvrant compartiments, noyau, mitochondrie et cycle cellulaire, sélectionnez exactement les cinq exactes.",
    explanation: "Cette synthèse remobilise les chapitres précédents : trafic endomembranaire, peroxysomes et cytosquelette sont articulés avec les nouveaux acquis sur mitochondrie, noyau et division cellulaire.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:synthese-cellulaire'],
    choices: [
      {
        content: "L’endocytose du LDL peut faire intervenir des puits recouverts de clathrine.",
        correct: true,
        explanation: "Le complexe LDL–récepteur peut être concentré dans des puits recouverts avant internalisation.",
      },
      {
        content: "Un peroxysome possède un chromosome circulaire autonome comparable à l’ADN mitochondrial.",
        correct: false,
        explanation: "Le peroxysome ne possède pas de génome propre.",
      },
      {
        content: "Le complexe TOM participe à l’import de nombreuses protéines mitochondriales synthétisées dans le cytosol.",
        correct: true,
        explanation: "TOM est localisé dans la membrane externe mitochondriale.",
      },
      {
        content: "L’ARN polymérase I transcrit le précurseur des ARNr 18S, 5,8S et 28S.",
        correct: true,
        explanation: "Ces ARNr dérivent du précurseur 45S transcrit dans le nucléole par l’ARN polymérase I.",
      },
      {
        content: "L’histone H1 appartient à l’octamère central formé de H2A, H2B, H3 et H4.",
        correct: false,
        explanation: "H1 est une histone de liaison et ne fait pas partie de l’octamère central.",
      },
      {
        content: "Une cellule diploïde après réplication, avant mitose, est classiquement décrite 2n/4C.",
        correct: true,
        explanation: "La quantité d’ADN a doublé sans doubler le nombre de chromosomes.",
      },
      {
        content: "Les vésicules COPII assurent principalement le retour du Golgi vers le réticulum endoplasmique.",
        correct: false,
        explanation: "COPII assure surtout le trafic RE vers Golgi ; COPI participe notamment au trafic rétrograde Golgi vers RE.",
      },
      {
        content: "La cytodiérèse animale implique un anneau contractile riche en actine et myosine II.",
        correct: true,
        explanation: "L’actomyosine contractile forme le sillon de clivage.",
      },
      {
        content: "Le nucléole est entouré d’une membrane propre qui l’isole du nucléoplasme.",
        correct: false,
        explanation: "Le nucléole est un compartiment nucléaire non membranaire.",
      },
      {
        content: "Le complexe II est l’un des principaux complexes de pompage des protons de la chaîne respiratoire.",
        correct: false,
        explanation: "Le complexe II transfère des électrons mais ne pompe pas directement de protons.",
      },
    ],
  },
  {
    order: 10,
    difficulty: 'HARD',
    format: 'QRM',
    question: "À propos de l’enveloppe nucléaire, de la chromatine et du nucléole, quelles propositions sont exactes ?",
    explanation: "Le noyau associe une enveloppe à double membrane percée de pores nucléaires, une chromatine organisée en nucléosomes et des compartiments non membranaires comme le nucléole.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:noyau-chromatine'],
    choices: [
      {
        content: "La membrane nucléaire externe est en continuité avec le réticulum endoplasmique.",
        correct: true,
        explanation: "L’espace périnucléaire est lui-même en continuité avec la lumière du RE.",
      },
      {
        content: "Les complexes de pores nucléaires sont constitués de protéines appelées nucléoporines.",
        correct: true,
        explanation: "Les nucléoporines forment l’architecture du pore et participent aux échanges nucléocytoplasmiques.",
      },
      {
        content: "L’histone H1 est associée à l’ADN de liaison mais ne fait pas partie de l’octamère nucléosomique canonique.",
        correct: true,
        explanation: "Le cœur du nucléosome contient deux copies de H2A, H2B, H3 et H4.",
      },
      {
        content: "L’euchromatine est en moyenne plus accessible et plus compatible avec la transcription que l’hétérochromatine condensée.",
        correct: true,
        explanation: "Il s’agit d’une tendance fonctionnelle liée au degré de compaction de la chromatine.",
      },
      {
        content: "Le nucléole est délimité par une bicouche lipidique dérivée de l’enveloppe nucléaire.",
        correct: false,
        explanation: "Le nucléole n’est pas entouré d’une membrane.",
      },
    ],
  },
  {
    order: 11,
    difficulty: 'EASY',
    format: 'QROC',
    question: "Quelle ARN polymérase transcrit le précurseur 45S des ARNr majeurs dans le nucléole ?",
    explanation: "L’ARN polymérase I transcrit le précurseur 45S, ensuite maturé en ARNr 18S, 5,8S et 28S.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:nucleole'],
    answer: {
      type: 'text',
      acceptedAnswers: ['ARN polymérase I', 'ARN polymerase I', 'Pol I', 'ARN pol I', 'RNA polymerase I'],
      normalization: {
        trim: true,
        collapseWhitespace: true,
        caseSensitive: false,
        ignoreAccents: true,
        normalizeUnicode: true,
      },
    },
  },
  {
    order: 12,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: "Quelle proposition caractérise correctement le nucléole ?",
    explanation: "Le nucléole est un compartiment nucléaire non membranaire spécialisé dans la transcription et la maturation d’une grande partie des ARNr ainsi que dans l’assemblage précoce des sous-unités ribosomales.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:nucleole'],
    choices: [
      {
        content: "Il assure la réplication de l’ADN mitochondrial avant chaque mitose.",
        correct: false,
        explanation: "La réplication de l’ADN mitochondrial se déroule dans les mitochondries et n’est pas une fonction du nucléole.",
      },
      {
        content: "Il contient les complexes I à IV de la chaîne respiratoire.",
        correct: false,
        explanation: "Ces complexes sont associés à la membrane interne mitochondriale.",
      },
      {
        content: "Il participe à la biogenèse des ribosomes sans être limité par une membrane.",
        correct: true,
        explanation: "Le nucléole organise la synthèse et la maturation de plusieurs ARNr et l’assemblage initial des sous-unités ribosomales.",
      },
      {
        content: "Il constitue une vésicule du système endomembranaire située dans le nucléoplasme.",
        correct: false,
        explanation: "Le nucléole est un condensat nucléaire non membranaire.",
      },
      {
        content: "Il disparaît définitivement lorsqu’une cellule entre pour la première fois en mitose.",
        correct: false,
        explanation: "Le nucléole se désorganise pendant la mitose puis se reconstitue en fin de division.",
      },
    ],
  },
  {
    order: 13,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux propositions correctes concernant le nucléosome canonique.",
    explanation: "Le nucléosome comprend environ 147 paires de bases d’ADN enroulées autour d’un octamère formé de deux copies de H2A, H2B, H3 et H4.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:nucleosome'],
    choices: [
      {
        content: "Son cœur contient quatre copies identiques de l’histone H1.",
        correct: false,
        explanation: "H1 est une histone de liaison ; elle n’entre pas dans la composition de l’octamère central.",
      },
      {
        content: "Environ 147 paires de bases d’ADN s’enroulent autour de son cœur histonique.",
        correct: true,
        explanation: "Cette valeur correspond à l’ADN directement associé au cœur nucléosomique canonique.",
      },
      {
        content: "Il est construit autour d’un tétramère unique de tubuline α/β.",
        correct: false,
        explanation: "La tubuline appartient aux microtubules, pas à la chromatine.",
      },
      {
        content: "Le cœur histonique comporte deux copies de H2A, H2B, H3 et H4.",
        correct: true,
        explanation: "L’ensemble forme un octamère histonique.",
      },
      {
        content: "Il n’existe que dans l’hétérochromatine et disparaît de l’euchromatine.",
        correct: false,
        explanation: "Les nucléosomes organisent la chromatine dans les régions euchromatiques comme hétérochromatiques.",
      },
    ],
  },
  {
    order: 14,
    difficulty: 'HARD',
    format: 'QRM',
    question: "À propos des échanges nucléocytoplasmiques, quelles propositions sont exactes ?",
    explanation: "Le pore nucléaire autorise une diffusion des petites molécules et assure un transport sélectif des macromolécules. Les signaux de localisation nucléaire classiques sont souvent riches en acides aminés basiques.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:transport-nucleaire'],
    choices: [
      {
        content: "De nombreux signaux de localisation nucléaire sont enrichis en lysine et arginine.",
        correct: true,
        explanation: "Les NLS classiques sont fréquemment basiques, même s’il n’existe pas un unique motif universel.",
      },
      {
        content: "Le passage des grandes protéines à travers les pores nucléaires est un transport sélectif faisant intervenir des récepteurs de transport.",
        correct: true,
        explanation: "Les importines et exportines reconnaissent des signaux de transport et utilisent le système Ran.",
      },
      {
        content: "Toute molécule entrant dans le noyau doit obligatoirement traverser une bicouche lipidique.",
        correct: false,
        explanation: "Les échanges passent par les complexes de pores qui interrompent l’enveloppe nucléaire.",
      },
      {
        content: "Les pores nucléaires sont formés principalement de laminine extracellulaire.",
        correct: false,
        explanation: "Ils sont constitués de nucléoporines ; la laminine appartient à la matrice extracellulaire.",
      },
      {
        content: "Un signal de localisation nucléaire est systématiquement clivé dès l’arrivée de la protéine dans le nucléoplasme.",
        correct: false,
        explanation: "Contrairement à certains peptides d’adressage vers d’autres organites, de nombreux NLS ne sont pas excisés.",
      },
    ],
  },
  {
    order: 15,
    difficulty: 'HARD',
    format: 'QROC',
    question: "Quel complexe ubiquitine-ligase associé à Cdc20 favorise le déclenchement de l’anaphase en ciblant notamment la sécurine ?",
    explanation: "APC/C-Cdc20 favorise l’ubiquitinylation de la sécurine et de la cycline B. La disparition de la sécurine permet l’activation de la séparase.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:apc-c'],
    answer: {
      type: 'text',
      acceptedAnswers: ['APC/C', 'APC-C', 'APC/C-Cdc20', 'APC Cdc20', 'anaphase-promoting complex', 'anaphase promoting complex'],
      normalization: {
        trim: true,
        collapseWhitespace: true,
        caseSensitive: false,
        ignoreAccents: true,
        normalizeUnicode: true,
      },
    },
  },
  {
    order: 16,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: "Quel complexe cycline-CDK joue le rôle classique de MPF et favorise l’entrée en mitose ?",
    explanation: "Le MPF classique correspond au complexe cycline B–CDK1, dont l’activation déclenche de nombreux événements de l’entrée en phase M.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:cyclines-cdk'],
    choices: [
      {
        content: "Cycline D–CDK4/6.",
        correct: false,
        explanation: "Ce complexe participe surtout à la progression en G1 et à la phosphorylation de Rb.",
      },
      {
        content: "Cycline E–CDK2.",
        correct: false,
        explanation: "Cycline E–CDK2 est surtout impliqué dans la transition G1/S.",
      },
      {
        content: "Cycline A–CDK2.",
        correct: false,
        explanation: "Cycline A–CDK2 intervient principalement au cours de la phase S.",
      },
      {
        content: "Cycline B–CDK1.",
        correct: true,
        explanation: "C’est le complexe MPF classique de l’entrée en mitose.",
      },
      {
        content: "Cycline H–CDK7 comme unique moteur de la cytodiérèse.",
        correct: false,
        explanation: "CDK7 a notamment un rôle de CDK-activating kinase et ne constitue pas le MPF classique.",
      },
    ],
  },
  {
    order: 17,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux relations correctes concernant le contrôle de la transition G1/S.",
    explanation: "La progression en G1 mobilise notamment cycline D–CDK4/6 et Rb/E2F. En cas de dommages de l’ADN, la voie p53–p21 peut freiner l’activité des CDK et retarder l’entrée en phase S.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:controle-g1-s'],
    choices: [
      {
        content: "Cycline D–CDK4/6 — phosphorylation progressive de Rb et facilitation de l’activité d’E2F.",
        correct: true,
        explanation: "La phosphorylation de Rb libère progressivement E2F et favorise l’expression de gènes nécessaires à la progression du cycle.",
      },
      {
        content: "p53–p21 — frein à la progression du cycle après certains dommages de l’ADN.",
        correct: true,
        explanation: "p53 peut induire p21, inhibiteur de CDK, afin de retarder la progression du cycle.",
      },
      {
        content: "Wee1 — activation de CDK1 par déphosphorylation.",
        correct: false,
        explanation: "Wee1 ajoute des phosphorylations inhibitrices sur CDK1 ; Cdc25 contribue à les retirer.",
      },
      {
        content: "Séparase — phosphorylation de Rb au cours de la phase G1.",
        correct: false,
        explanation: "La séparase intervient lors de l’anaphase en clivant les cohésines.",
      },
      {
        content: "APC/C-Cdh1 — accumulation maximale de cycline B au début de G1.",
        correct: false,
        explanation: "APC/C-Cdh1 contribue au contraire à maintenir une faible activité CDK en G1 en favorisant la dégradation de plusieurs protéines mitotiques.",
      },
    ],
  },
  {
    order: 18,
    difficulty: 'EASY',
    format: 'QRM',
    question: "À propos de la quantité d’ADN et du nombre de chromosomes au cours du cycle d’une cellule diploïde, quelles propositions sont exactes ?",
    explanation: "La phase S double la quantité d’ADN mais pas le nombre de chromosomes. Une cellule diploïde est classiquement 2n/2C en G1 puis 2n/4C en G2.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:ploidie-adn'],
    choices: [
      {
        content: "En G1, avant réplication, une cellule diploïde est classiquement 2n/2C.",
        correct: true,
        explanation: "Chaque chromosome ne comporte alors qu’une chromatide.",
      },
      {
        content: "Après la phase S, la cellule reste 2n mais sa quantité d’ADN atteint 4C.",
        correct: true,
        explanation: "Chaque chromosome possède alors deux chromatides sœurs.",
      },
      {
        content: "La phase S double la quantité d’ADN sans doubler le nombre de chromosomes.",
        correct: true,
        explanation: "Le nombre de chromosomes est défini par le nombre de centromères, qui reste inchangé après réplication.",
      },
      {
        content: "Une cellule humaine somatique normale devient 4n dès qu’elle termine la réplication de son ADN.",
        correct: false,
        explanation: "Elle demeure diploïde 2n en G2 ; seule la quantité d’ADN a doublé.",
      },
      {
        content: "Toute cellule entrant en G0 est définitivement incapable de réintégrer le cycle.",
        correct: false,
        explanation: "Certaines cellules quiescentes peuvent réentrer dans le cycle en réponse à des signaux appropriés.",
      },
    ],
  },
  {
    order: 19,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: "Quelle quantité d’ADN, exprimée en C, possède classiquement une cellule diploïde en G2 ?",
    explanation: "Après la phase S, la quantité d’ADN a doublé : la cellule est 2n/4C tant que les chromatides sœurs n’ont pas été séparées entre deux cellules filles.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:ploidie-adn'],
    answer: {
      type: 'text',
      acceptedAnswers: ['4C', '4 C', '4c', '4 c'],
      normalization: {
        trim: true,
        collapseWhitespace: true,
        caseSensitive: false,
        ignoreAccents: true,
        normalizeUnicode: true,
      },
    },
  },
  {
    order: 20,
    difficulty: 'HARD',
    format: 'QRU',
    question: "Quel événement correspond le mieux au rôle du point de contrôle du fuseau mitotique ?",
    explanation: "Le spindle assembly checkpoint surveille l’attachement des kinétochores et freine l’activation efficace d’APC/C-Cdc20 tant que tous les chromosomes ne sont pas correctement attachés au fuseau.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:checkpoint-fuseau'],
    choices: [
      {
        content: "Il déclenche la réplication de l’ADN dès qu’un chromosome atteint la plaque métaphasique.",
        correct: false,
        explanation: "La réplication a lieu en phase S, bien avant la métaphase.",
      },
      {
        content: "Il active la séparase tant qu’un kinétochore reste non attaché.",
        correct: false,
        explanation: "Un kinétochore non correctement attaché maintient au contraire l’inhibition de la transition vers l’anaphase.",
      },
      {
        content: "Il provoque la disparition immédiate de l’ensemble des microtubules kinétochoriens.",
        correct: false,
        explanation: "Le checkpoint contrôle les attachements ; il ne détruit pas systématiquement le fuseau.",
      },
      {
        content: "Il impose la dégradation de Rb pour permettre la transition G1/S.",
        correct: false,
        explanation: "Rb intervient principalement dans le contrôle G1/S, pas dans le checkpoint métaphase-anaphase.",
      },
      {
        content: "Il retarde l’activation efficace d’APC/C-Cdc20 tant que des kinétochores ne sont pas correctement attachés.",
        correct: true,
        explanation: "Les protéines MAD/BUB participent à ce contrôle et préviennent une séparation prématurée des chromatides.",
      },
    ],
  },
  {
    order: 21,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "Lorsque toutes les chromatides sont correctement attachées au fuseau et que l’anaphase peut débuter, quelles propositions sont exactes ?",
    explanation: "L’activation d’APC/C-Cdc20 conduit notamment à la dégradation de la sécurine et de la cycline B. La séparase libérée clive les cohésines et la baisse d’activité CDK1 favorise la sortie de mitose ; la cytodiérèse repose ensuite sur l’actomyosine.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:anaphase-cytodierese'],
    choices: [
      {
        content: "La dégradation de la sécurine permet l’activation de la séparase.",
        correct: true,
        explanation: "La sécurine inhibe la séparase tant qu’elle n’est pas ciblée pour dégradation.",
      },
      {
        content: "La séparase clive des cohésines qui maintenaient les chromatides sœurs associées.",
        correct: true,
        explanation: "Ce clivage permet la séparation physique des chromatides sœurs.",
      },
      {
        content: "La dégradation de la cycline B contribue à la diminution de l’activité CDK1 et à la sortie de mitose.",
        correct: true,
        explanation: "La chute d’activité du MPF accompagne les événements de fin de mitose.",
      },
      {
        content: "La cytodiérèse animale fait intervenir un anneau contractile d’actine et de myosine II.",
        correct: true,
        explanation: "Cet anneau forme le sillon de clivage puis se contracte lors de la séparation des cellules filles.",
      },
      {
        content: "L’enveloppe nucléaire reste intégralement intacte de la prophase à la télophase.",
        correct: false,
        explanation: "Chez les cellules animales, l’enveloppe nucléaire se désassemble au début de la mitose puis se reforme en fin de division.",
      },
    ],
  },
  {
    order: 22,
    difficulty: 'EASY',
    format: 'QRM',
    question: "En remobilisant les chapitres sur le trafic intracellulaire, quelles propositions sont exactes ?",
    explanation: "Le trafic RE–Golgi et l’adressage lysosomal obéissent à des signaux et revêtements spécifiques. COPII assure principalement la sortie du RE vers le Golgi, tandis que le mannose-6-phosphate permet le tri de nombreuses hydrolases lysosomales.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:rappels-trafic'],
    choices: [
      {
        content: "COPII participe principalement au transport des cargos du réticulum endoplasmique vers le Golgi.",
        correct: true,
        explanation: "Les vésicules COPII assurent le trafic antérograde de nombreux cargos du RE vers le Golgi.",
      },
      {
        content: "Le mannose-6-phosphate participe au tri de nombreuses hydrolases destinées aux lysosomes.",
        correct: true,
        explanation: "Le récepteur du M6P au TGN permet leur acheminement vers la voie endosomale.",
      },
      {
        content: "Les mitochondries rejoignent le Golgi par des vésicules COPI avant chaque division cellulaire.",
        correct: false,
        explanation: "La mitochondrie n’appartient pas au système endomembranaire et ne transite pas par le Golgi.",
      },
      {
        content: "Le complexe TOM est un revêtement vésiculaire du système endosomal.",
        correct: false,
        explanation: "TOM est une translocase de la membrane externe mitochondriale.",
      },
      {
        content: "La kinésine est un moteur moléculaire spécifique des filaments d’actine corticaux.",
        correct: false,
        explanation: "Les kinésines se déplacent principalement le long des microtubules ; les myosines sont associées à l’actine.",
      },
    ],
  },
  {
    order: 23,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "Une cellule sécrétrice augmente simultanément sa synthèse protéique, ses besoins énergétiques et l’expression de certains gènes. Quelles propositions sont exactes ?",
    explanation: "Une réponse cellulaire intégrée mobilise plusieurs compartiments : les protéines destinées à la sécrétion entrent dans la voie du RER, les mitochondries fournissent une part majeure de l’ATP aérobie et le noyau ajuste l’expression génique.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:integration-compartiments'],
    choices: [
      {
        content: "Une protéine destinée à la sécrétion peut être transloquée dans le RER au cours de sa synthèse.",
        correct: true,
        explanation: "Un peptide signal reconnu par la SRP peut orienter le ribosome vers le translocon du RE.",
      },
      {
        content: "La phosphorylation oxydative mitochondriale peut répondre à une partie importante de l’augmentation des besoins en ATP.",
        correct: true,
        explanation: "En aérobiose, la mitochondrie produit une grande part de l’ATP cellulaire par phosphorylation oxydative.",
      },
      {
        content: "Une modification durable de l’expression de protéines peut nécessiter une régulation de la transcription nucléaire.",
        correct: true,
        explanation: "Le noyau contrôle l’expression d’une grande partie des protéines cellulaires en modulant transcription et maturation des ARN.",
      },
      {
        content: "Le peroxysome exporte les ARNm vers le cytosol grâce à ses pores nucléaires.",
        correct: false,
        explanation: "Les pores nucléaires appartiennent à l’enveloppe du noyau ; le peroxysome n’a pas de génome ni de pores nucléaires.",
      },
      {
        content: "Le lysosome possède une chaîne respiratoire autonome qui remplace l’ATP synthase mitochondriale.",
        correct: false,
        explanation: "Le lysosome est un compartiment de dégradation acide ; il ne possède pas de chaîne respiratoire.",
      },
    ],
  },
  {
    order: 24,
    difficulty: 'HARD',
    format: 'QZONE',
    question: "Sélectionnez la plaque métaphasique.",
    explanation: "En métaphase, les chromosomes condensés sont alignés dans le plan équatorial de la cellule : cette zone constitue la plaque métaphasique.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:qzone-metaphase'],
    image: {
      src: '/images/training/ue14/colles/c09/metaphase-plate-qzone.svg',
      alt: 'Cellule en métaphase avec chromosomes alignés',
      width: 960,
      height: 560,
    },
    expectedZones: [
      {
        id: 'target',
        label: 'Plaque métaphasique',
        x: 0.5,
        y: 0.5,
        tolerance: 0.1,
      },
    ],
    defaultTolerance: 0.1,
  },
  {
    order: 25,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "Pour cette synthèse finale de la cellule intégrée, quelles propositions sont exactes ?",
    explanation: "Les compartiments cellulaires restent fonctionnellement interconnectés : le RE est continu avec la membrane nucléaire externe, la mitochondrie assure la respiration, le nucléole participe à la biogenèse ribosomale et le cycle cellulaire coordonne fidèlement la séparation du génome.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C09', 'ec:BIOLOGIE_CELLULAIRE', 'theme:synthese-finale'],
    choices: [
      {
        content: "La membrane nucléaire externe est directement continue avec la membrane du réticulum endoplasmique.",
        correct: true,
        explanation: "Cette continuité structurale relie l’enveloppe nucléaire au système endomembranaire.",
      },
      {
        content: "Au complexe IV, le dioxygène reçoit les électrons terminaux et contribue à la formation d’eau.",
        correct: true,
        explanation: "Le complexe IV est la cytochrome c oxydase et utilise O₂ comme accepteur final.",
      },
      {
        content: "La transcription du précurseur 45S des ARNr majeurs est assurée par l’ARN polymérase I.",
        correct: true,
        explanation: "Le précurseur 45S donnera les ARNr 18S, 5,8S et 28S après maturation.",
      },
      {
        content: "APC/C-Cdc20 favorise la disparition de la sécurine lorsque le checkpoint du fuseau est satisfait.",
        correct: true,
        explanation: "La séparase peut alors cliver les cohésines et permettre l’entrée en anaphase.",
      },
      {
        content: "Le peroxysome contient un génome propre indispensable à la duplication des chromosomes nucléaires.",
        correct: false,
        explanation: "Le peroxysome ne possède pas de génome et n’assure pas la réplication des chromosomes nucléaires.",
      },
    ],
  },
];
