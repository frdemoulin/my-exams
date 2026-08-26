import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';

/**
 * UE14 — Colle C06 — Biologie cellulaire — Trafic et compartiments
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 * Périmètre : Biologie cellulaire Ch. 4 à 6 — système endomembranaire (1 et 2), lysosomes, peroxysomes.
 * La mitochondrie (Ch. 7) est hors périmètre.
 */
export const UE14_COLLE_C06_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 1,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "Parmi les structures suivantes, lesquelles appartiennent au système endomembranaire d’une cellule eucaryote ?",
    explanation: "Le système endomembranaire regroupe notamment le réticulum endoplasmique, l’appareil de Golgi, les endosomes et les lysosomes, reliés fonctionnellement par des flux membranaires. Les peroxysomes constituent un compartiment distinct.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:systeme-endomembranaire'],
    choices: [
      {
        content: "Le réticulum endoplasmique.",
        correct: true,
        explanation: "Le RE est un compartiment majeur de la voie biosynthétique et sécrétoire.",
      },
      {
        content: "L’appareil de Golgi.",
        correct: true,
        explanation: "Le Golgi reçoit, modifie et trie de nombreux cargos issus du RE.",
      },
      {
        content: "Les endosomes et les lysosomes.",
        correct: true,
        explanation: "Ils appartiennent à la voie endocytaire et communiquent avec d’autres compartiments du système endomembranaire.",
      },
      {
        content: "Les peroxysomes.",
        correct: false,
        explanation: "Les peroxysomes ne font pas partie du système endomembranaire classique.",
      },
      {
        content: "La membrane interne de la mitochondrie.",
        correct: false,
        explanation: "La mitochondrie constitue un organite distinct du système endomembranaire.",
      },
    ],
  },
  {
    order: 2,
    difficulty: 'EASY',
    format: 'QROC',
    question: "Comment appelle-t-on le transfert d’un cargo à travers une cellule polarisée, avec endocytose à un pôle puis exocytose à l’autre ?",
    explanation: "La transcytose combine endocytose, transport intracellulaire et exocytose afin de faire traverser une cellule à un cargo sans le dégrader.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:transcytose'],
    answer: {
      type: 'text',
      acceptedAnswers: ['transcytose', 'la transcytose'],
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
    question: "Après endocytose d’un complexe LDL–récepteur LDL dans un puits recouvert de clathrine, quel devenir est le plus caractéristique ?",
    explanation: "L’acidification endosomale favorise la dissociation ligand–récepteur. Le récepteur LDL est majoritairement recyclé vers la membrane plasmique, tandis que le LDL poursuit vers la voie endolysosomale où ses constituants sont dégradés.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:endocytose-ldl'],
    choices: [
      {
        content: "Le LDL et son récepteur sont tous deux exportés immédiatement par exocytose constitutive.",
        correct: false,
        explanation: "La voie endocytaire trie le ligand et son récepteur au lieu de les réexporter ensemble immédiatement.",
      },
      {
        content: "Le récepteur LDL est dégradé systématiquement avec le ligand dans le lysosome.",
        correct: false,
        explanation: "Le récepteur est le plus souvent recyclé, ce qui permet plusieurs cycles d’endocytose.",
      },
      {
        content: "Le récepteur LDL peut être recyclé vers la membrane, tandis que le LDL est dirigé vers la voie endolysosomale.",
        correct: true,
        explanation: "C’est le devenir classique après dissociation du complexe dans l’endosome.",
      },
      {
        content: "La clathrine reste fixée jusqu’à l’intérieur du lysosome et devient une hydrolase acide.",
        correct: false,
        explanation: "Le manteau de clathrine est retiré rapidement après la scission de la vésicule.",
      },
      {
        content: "Le LDL est importé dans un peroxysome par PEX5.",
        correct: false,
        explanation: "PEX5 importe des protéines matricielles peroxysomales portant un signal PTS1 ; il n’intervient pas dans l’endocytose des LDL.",
      },
    ],
  },
  {
    order: 4,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux associations correctes entre un manteau vésiculaire et une direction de trafic.",
    explanation: "COPII assure classiquement le trafic antérograde du RE vers le Golgi, tandis que COPI participe notamment au trafic rétrograde du Golgi vers le RE.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:copi-copii'],
    choices: [
      {
        content: "COPII — réticulum endoplasmique vers Golgi.",
        correct: true,
        explanation: "Le recrutement de COPII, notamment sous le contrôle de Sar1, permet le bourgeonnement de transporteurs quittant le RE.",
      },
      {
        content: "COPI — Golgi vers réticulum endoplasmique.",
        correct: true,
        explanation: "COPI intervient dans des voies rétrogrades, notamment pour récupérer des constituants résidents du RE.",
      },
      {
        content: "Clathrine — import direct des protéines PTS1 dans la matrice peroxysomale.",
        correct: false,
        explanation: "L’import PTS1 repose sur la machinerie PEX, pas sur un manteau de clathrine.",
      },
      {
        content: "COPII — membrane plasmique vers endosome précoce.",
        correct: false,
        explanation: "L’endocytose depuis la membrane plasmique utilise d’autres machineries, notamment des puits de clathrine selon le cargo.",
      },
      {
        content: "COPI — formation du phagosome autour d’une bactérie.",
        correct: false,
        explanation: "La phagocytose dépend de récepteurs, de l’actine et de machineries membranaires distinctes.",
      },
    ],
  },
  {
    order: 5,
    difficulty: 'HARD',
    format: 'QRM',
    question: "Une protéine soluble destinée à être sécrétée est en cours de synthèse. Quelles propositions décrivent correctement son entrée et sa maturation initiale dans la voie sécrétoire ?",
    explanation: "De nombreuses protéines sécrétées sont adressées co-traductionnellement au RE par la SRP. La translocation s’effectue via Sec61 ; le RE initie des modifications comme la N-glycosylation et assure un contrôle de qualité impliquant notamment des chaperonnes et la PDI.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:adressage-re'],
    choices: [
      {
        content: "La SRP peut reconnaître un peptide signal hydrophobe de la chaîne naissante.",
        correct: true,
        explanation: "La Signal Recognition Particle cible alors le complexe ribosome–chaîne naissante vers le RE.",
      },
      {
        content: "Le translocon Sec61 permet le passage de la chaîne polypeptidique à travers la membrane du RE.",
        correct: true,
        explanation: "Sec61 forme le canal central de translocation de nombreuses protéines de la voie sécrétoire.",
      },
      {
        content: "La N-glycosylation de nombreuses protéines débute dans la lumière du RE.",
        correct: true,
        explanation: "Un précurseur oligosaccharidique porté par le dolichol est transféré sur une asparagine de la protéine.",
      },
      {
        content: "La PDI participe à la formation et au réarrangement des ponts disulfure.",
        correct: true,
        explanation: "La protein disulfide isomerase contribue au repliement correct des protéines dans le milieu oxydant du RE.",
      },
      {
        content: "Le signal KDEL est ajouté à toute protéine sécrétée afin de favoriser son export vers la membrane plasmique.",
        correct: false,
        explanation: "KDEL sert au contraire à récupérer vers le RE certaines protéines solubles résidentes qui se sont échappées vers le Golgi.",
      },
    ],
  },
  {
    order: 6,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: "Quel motif C-terminal permet classiquement la récupération vers le réticulum endoplasmique de protéines solubles résidentes comme BiP ou PDI ?",
    explanation: "Le motif KDEL est reconnu dans le Golgi par le récepteur KDEL, qui permet le retour de ces protéines résidentes vers le RE.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:kdel'],
    answer: {
      type: 'text',
      acceptedAnswers: ['KDEL', 'kdel'],
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
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: "À quel niveau de la voie sécrétoire le récepteur du mannose-6-phosphate trie-t-il principalement les hydrolases lysosomales vers les endosomes ?",
    explanation: "Les hydrolases reçoivent le marquage M6P au cours de leur passage golgien. Le récepteur du M6P les concentre surtout au réseau trans-golgien, d’où elles sont acheminées vers les endosomes avant d’atteindre les lysosomes.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:m6p'],
    choices: [
      {
        content: "Au réseau trans-golgien (TGN).",
        correct: true,
        explanation: "Le TGN est une plateforme majeure de tri vers la voie endosomale.",
      },
      {
        content: "Dans la matrice peroxysomale.",
        correct: false,
        explanation: "L’import peroxysomal utilise des signaux PTS et la machinerie PEX.",
      },
      {
        content: "Dans le nucléole.",
        correct: false,
        explanation: "Le nucléole participe à la biogenèse ribosomique et n’assure pas le tri M6P.",
      },
      {
        content: "Sur la membrane interne mitochondriale.",
        correct: false,
        explanation: "La mitochondrie ne fait pas partie de cette voie de tri endomembranaire.",
      },
      {
        content: "Uniquement à la surface cellulaire après exocytose.",
        correct: false,
        explanation: "Le tri majeur des hydrolases lysosomales précède leur arrivée éventuelle à la surface.",
      },
    ],
  },
  {
    order: 8,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "Quelles propositions décrivent correctement le fonctionnement d’un lysosome ?",
    explanation: "Le lysosome est un compartiment acide, enrichi en hydrolases, dont le pH est maintenu par une V-ATPase. Il reçoit des cargos endocytés, phagocytés ou issus de l’autophagie.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:lysosome'],
    choices: [
      {
        content: "Son pH luminal est typiquement voisin de 4,5 à 5.",
        correct: true,
        explanation: "Cette acidité favorise l’activité des hydrolases lysosomales.",
      },
      {
        content: "Une V-ATPase membranaire contribue à acidifier sa lumière.",
        correct: true,
        explanation: "La pompe utilise l’ATP pour accumuler des protons dans le lysosome.",
      },
      {
        content: "La macroautophagie peut lui apporter des constituants cytoplasmiques et des organites à dégrader.",
        correct: true,
        explanation: "L’autophagosome fusionne avec le compartiment lysosomal pour permettre la dégradation du contenu séquestré.",
      },
      {
        content: "Les protéines LAMP sont des hydrolases acides solubles libres dans la lumière.",
        correct: false,
        explanation: "Les LAMP sont principalement des glycoprotéines de membrane lysosomale.",
      },
      {
        content: "Le protéasome constitue la pompe à protons qui maintient le pH lysosomal.",
        correct: false,
        explanation: "Le protéasome dégrade surtout des protéines cytosoliques ou nucléaires ; l’acidification lysosomale dépend de la V-ATPase.",
      },
    ],
  },
  {
    order: 9,
    difficulty: 'HARD',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux associations pathologie–mécanisme correctement appariées.",
    explanation: "La mucolipidose II résulte d’un défaut de marquage M6P des hydrolases lysosomales. La cystinose est liée à un défaut du transporteur lysosomal de la cystine, codé par CTNS.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:pathologies-lysosomales'],
    choices: [
      {
        content: "Mucolipidose II — défaut de GlcNAc-1-phosphotransférase et de marquage M6P.",
        correct: true,
        explanation: "Le défaut de phosphorylation des mannoses perturbe l’adressage de nombreuses hydrolases vers les lysosomes.",
      },
      {
        content: "Cystinose — défaut de cystinosine entraînant une accumulation lysosomale de cystine.",
        correct: true,
        explanation: "La cystinosine, codée par CTNS, permet normalement la sortie de cystine du lysosome.",
      },
      {
        content: "Maladie de Gaucher — déficit en hexosaminidase A avec accumulation de GM2.",
        correct: false,
        explanation: "Cette association correspond à la maladie de Tay-Sachs ; Gaucher implique surtout un déficit en glucocérébrosidase.",
      },
      {
        content: "Maladie de Tay-Sachs — déficit en glucocérébrosidase avec accumulation de glucosylcéramide.",
        correct: false,
        explanation: "Cette association correspond à la maladie de Gaucher.",
      },
      {
        content: "Cystinose — absence de V-ATPase provoquant exclusivement une alcalinisation du Golgi.",
        correct: false,
        explanation: "La cystinose est une maladie de transport lysosomal de la cystine, pas une maladie définie par l’absence de V-ATPase.",
      },
    ],
  },
  {
    order: 10,
    difficulty: 'MEDIUM',
    format: 'QRPL',
    requiredSelectionCount: 5,
    question: "Parmi ces dix propositions sur le trafic intracellulaire, les lysosomes et les peroxysomes, sélectionnez exactement les cinq correctes.",
    explanation: "Cette synthèse distingue la voie endomembranaire de l’import peroxysomal et mobilise les principales étapes de tri, d’acidification et de dégradation.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:synthese-ch4-ch6'],
    choices: [
      {
        content: "La dynamine participe à la scission de nombreuses vésicules d’endocytose à clathrine.",
        correct: true,
        explanation: "La dynamine est une grande GTPase qui contribue à séparer la vésicule de la membrane plasmique.",
      },
      {
        content: "Un endosome précoce est déjà plus acide que le milieu extracellulaire.",
        correct: true,
        explanation: "Son acidification participe au tri des complexes ligand–récepteur.",
      },
      {
        content: "COPII assure classiquement le trafic rétrograde du Golgi vers le RE.",
        correct: false,
        explanation: "COPII est surtout associé au trafic antérograde RE vers Golgi ; COPI participe au retour Golgi vers RE.",
      },
      {
        content: "Le motif KDEL favorise la récupération de certaines protéines solubles résidentes du RE.",
        correct: true,
        explanation: "Le récepteur KDEL les récupère dans le Golgi et permet leur retour au RE.",
      },
      {
        content: "Les hydrolases lysosomales sont actives de façon optimale dans un milieu fortement alcalin.",
        correct: false,
        explanation: "Elles sont dites acides car elles fonctionnent efficacement dans l’environnement acide du lysosome.",
      },
      {
        content: "Un peroxysome possède une membrane unique et ne possède pas de génome propre.",
        correct: true,
        explanation: "Ses protéines sont codées par le noyau puis importées depuis le cytosol.",
      },
      {
        content: "Le signal PTS1 prototype est situé à l’extrémité C-terminale d’une protéine matricielle peroxysomale.",
        correct: true,
        explanation: "Le prototype PTS1 est le tripeptide C-terminal SKL, reconnu par PEX5.",
      },
      {
        content: "La catalase est la principale source de H2O2 du peroxysome et n’est jamais capable de le dégrader.",
        correct: false,
        explanation: "Les oxydases peuvent produire du H2O2 ; la catalase contribue au contraire à sa détoxification.",
      },
      {
        content: "Le peroxysome appartient au même continuum luminal que le réticulum endoplasmique.",
        correct: false,
        explanation: "Il constitue un compartiment distinct et n’est pas relié au RE par un continuum luminal.",
      },
      {
        content: "Toutes les protéines de la matrice peroxysomale transitent obligatoirement par le Golgi.",
        correct: false,
        explanation: "Elles sont majoritairement synthétisées sur des ribosomes libres puis importées directement depuis le cytosol.",
      },
    ],
  },
  {
    order: 11,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: "Quel récepteur cytosolique reconnaît classiquement le signal PTS1 des protéines destinées à la matrice peroxysomale ?",
    explanation: "PEX5 reconnaît le signal PTS1, généralement C-terminal, puis participe à l’import de la protéine dans le peroxysome.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:pts1-pex5'],
    answer: {
      type: 'text',
      acceptedAnswers: ['PEX5', 'pex5'],
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
    difficulty: 'EASY',
    format: 'QRU',
    question: "Quelle proposition caractérise correctement un peroxysome humain ?",
    explanation: "Le peroxysome est entouré d’une seule membrane, ne contient ni ADN propre ni ribosomes et importe l’essentiel de ses protéines depuis le cytosol.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:identite-peroxysome'],
    choices: [
      {
        content: "Il est entouré de deux membranes et possède un génome circulaire.",
        correct: false,
        explanation: "Cette description ne correspond pas au peroxysome.",
      },
      {
        content: "Il est un sous-compartiment du lysosome formé uniquement après phagocytose.",
        correct: false,
        explanation: "Le peroxysome est un organite autonome distinct du lysosome.",
      },
      {
        content: "Il porte des ribosomes sur sa face cytosolique comme le RER.",
        correct: false,
        explanation: "Les protéines peroxysomales sont synthétisées sur des ribosomes cytosoliques puis importées.",
      },
      {
        content: "Il est entouré d’une seule membrane et ne possède pas de génome propre.",
        correct: true,
        explanation: "C’est une caractéristique structurale majeure du peroxysome.",
      },
      {
        content: "Il communique avec le Golgi par une lumière continue.",
        correct: false,
        explanation: "Le peroxysome n’appartient pas au continuum du système endomembranaire.",
      },
    ],
  },
  {
    order: 13,
    difficulty: 'HARD',
    format: 'QRM',
    question: "Quelles fonctions sont correctement associées au peroxysome ?",
    explanation: "Le peroxysome réalise plusieurs oxydations, notamment la β-oxydation préférentielle des acides gras à très longue chaîne. Ces réactions peuvent produire du H2O2, détoxifié par la catalase. Il participe aussi aux premières étapes de synthèse des plasmalogènes.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:metabolisme-peroxysomal'],
    choices: [
      {
        content: "Raccourcissement par β-oxydation de nombreux acides gras à très longue chaîne.",
        correct: true,
        explanation: "Le peroxysome prend en charge préférentiellement des VLCFA avant un éventuel relais métabolique par d’autres compartiments.",
      },
      {
        content: "Production de H2O2 par certaines oxydases.",
        correct: true,
        explanation: "Le transfert direct d’électrons vers l’oxygène lors de certaines oxydations produit du peroxyde d’hydrogène.",
      },
      {
        content: "Détoxification du H2O2 par la catalase.",
        correct: true,
        explanation: "La catalase peut convertir le H2O2 en eau et oxygène.",
      },
      {
        content: "Participation aux premières étapes de biosynthèse des plasmalogènes.",
        correct: true,
        explanation: "La synthèse de ces éther-phospholipides débute dans le peroxysome puis se poursuit notamment dans le RE.",
      },
      {
        content: "Production d’ATP par une chaîne respiratoire couplée à une ATP synthase peroxysomale.",
        correct: false,
        explanation: "Le peroxysome ne possède pas de chaîne respiratoire couplée à une ATP synthase.",
      },
    ],
  },
  {
    order: 14,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux associations correctes concernant des maladies peroxysomales.",
    explanation: "L’adrénoleucodystrophie liée à l’X est associée au transporteur ABCD1 et à l’accumulation de VLCFA. Le spectre de Zellweger correspond à des défauts de biogenèse peroxysomale liés à des gènes PEX.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:pathologies-peroxysomales'],
    choices: [
      {
        content: "Adrénoleucodystrophie liée à l’X — altération d’ABCD1 et accumulation d’acides gras à très longue chaîne.",
        correct: true,
        explanation: "ABCD1 code un transporteur peroxysomal ; son déficit perturbe l’entrée de substrats lipidiques nécessaires à leur dégradation.",
      },
      {
        content: "Syndrome de Zellweger — anomalie de biogenèse peroxysomale liée à des gènes PEX.",
        correct: true,
        explanation: "Les troubles du spectre de Zellweger affectent l’assemblage ou le fonctionnement global des peroxysomes.",
      },
      {
        content: "Maladie de Tay-Sachs — mutation d’ABCD1 provoquant une accumulation de VLCFA.",
        correct: false,
        explanation: "Tay-Sachs est une sphingolipidose lysosomale liée à l’hexosaminidase A.",
      },
      {
        content: "Mucolipidose II — défaut de PEX5 empêchant l’import des protéines PTS1.",
        correct: false,
        explanation: "La mucolipidose II est principalement liée au défaut de marquage M6P des hydrolases lysosomales.",
      },
      {
        content: "Cystinose — défaut global de biogenèse des peroxysomes.",
        correct: false,
        explanation: "La cystinose est une maladie de transport lysosomal de la cystine.",
      },
    ],
  },
  {
    order: 15,
    difficulty: 'EASY',
    format: 'QROC',
    question: "Quelle ATPase membranaire est principalement responsable de l’acidification de la lumière des lysosomes ?",
    explanation: "La V-ATPase utilise l’énergie de l’ATP pour pomper des protons dans la lumière lysosomale et maintenir un pH acide.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:v-atpase'],
    answer: {
      type: 'text',
      acceptedAnswers: ['V-ATPase', 'V ATPase', 'v-atpase', 'v atpase', 'ATPase vacuolaire'],
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
    difficulty: 'HARD',
    format: 'QRU',
    question: "Dans une cellule endocrine, un potentiel d’action ouvre des canaux calciques et provoque une hausse rapide de Ca2+ cytosolique. Quel événement est le plus directement favorisé pour des granules de sécrétion déjà prêts à fusionner ?",
    explanation: "Dans de nombreuses cellules sécrétrices, l’élévation du Ca2+ cytosolique sert de signal déclencheur à la fusion des granules avec la membrane plasmique : c’est une exocytose régulée.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:exocytose-regulee'],
    choices: [
      {
        content: "La conversion des granules en peroxysomes.",
        correct: false,
        explanation: "Les peroxysomes suivent une biogenèse distincte de la voie sécrétoire.",
      },
      {
        content: "La fusion des granules avec la membrane plasmique par exocytose régulée.",
        correct: true,
        explanation: "Le signal calcique déclenche la fusion de granules préformés dans de nombreux systèmes sécrétoires.",
      },
      {
        content: "Le retour de toutes les protéines sécrétées vers le RE par le récepteur KDEL.",
        correct: false,
        explanation: "KDEL sert à récupérer certaines protéines résidentes du RE, pas les cargos destinés à être sécrétés.",
      },
      {
        content: "La neutralisation obligatoire du lysosome avant toute fusion membranaire.",
        correct: false,
        explanation: "L’acidification lysosomale est maintenue indépendamment de ce mécanisme de sécrétion.",
      },
      {
        content: "L’import du contenu des granules dans le noyau par les pores nucléaires.",
        correct: false,
        explanation: "Les granules de sécrétion fusionnent avec la membrane plasmique et libèrent leur contenu à l’extérieur.",
      },
    ],
  },
  {
    order: 17,
    difficulty: 'HARD',
    format: 'QRM',
    question: "Une vésicule a quitté son compartiment donneur et doit atteindre puis fusionner avec sa membrane cible. Quelles propositions sont exactes ?",
    explanation: "Le trafic post-bourgeonnement combine transport le long du cytosquelette, reconnaissance de la cible par des GTPases comme Rab et fusion membranaire grâce aux SNARE.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:rab-snare-cytosquelette'],
    choices: [
      {
        content: "Des protéines Rab participent à la spécificité d’adressage et à l’amarrage des vésicules.",
        correct: true,
        explanation: "Les Rab recrutent des effecteurs qui contribuent à reconnaître et rapprocher la membrane cible.",
      },
      {
        content: "Des protéines SNARE participent directement à la fusion des deux membranes.",
        correct: true,
        explanation: "L’appariement de SNARE vésiculaires et cibles rapproche les bicouches jusqu’à la fusion.",
      },
      {
        content: "Des moteurs associés aux microtubules peuvent assurer une partie du transport intracellulaire à longue distance.",
        correct: true,
        explanation: "Kinésines et dynéines transportent de nombreux cargos le long des microtubules.",
      },
      {
        content: "La clathrine est le moteur qui hydrolyse l’ATP pour faire progresser la vésicule sur les microtubules.",
        correct: false,
        explanation: "La clathrine est une protéine de manteau ; elle n’est pas un moteur microtubulaire.",
      },
      {
        content: "Toute fusion membranaire du système endomembranaire exige un marquage du cargo par mannose-6-phosphate.",
        correct: false,
        explanation: "Le M6P concerne surtout le tri de nombreuses hydrolases lysosomales et n’est pas un signal universel de fusion.",
      },
    ],
  },
  {
    order: 18,
    difficulty: 'EASY',
    format: 'QRM',
    question: "À propos des peroxysomes, quelles propositions sont exactes ?",
    explanation: "Les peroxysomes sont distincts du système endomembranaire et importent de nombreuses protéines directement depuis le cytosol. Ils peuvent être éliminés sélectivement par pexophagie.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:peroxysomes-generalites'],
    choices: [
      {
        content: "Ils ne font pas partie du système endomembranaire classique.",
        correct: true,
        explanation: "Ils ne sont pas reliés au RE, au Golgi ou aux endosomes par un trafic vésiculaire continu de type endomembranaire.",
      },
      {
        content: "De nombreuses protéines matricielles y sont importées depuis le cytosol après leur synthèse.",
        correct: true,
        explanation: "Les signaux PTS et les peroxines assurent cet import principalement post-traductionnel.",
      },
      {
        content: "Ils possèdent obligatoirement leur propre ADN et des ribosomes internes.",
        correct: false,
        explanation: "Ils ne possèdent ni génome propre ni ribosomes.",
      },
      {
        content: "Leur matrice est acidifiée à pH 4,5 par une V-ATPase afin d’activer des hydrolases acides.",
        correct: false,
        explanation: "Cette description correspond au lysosome, pas au peroxysome.",
      },
      {
        content: "Ils sont formés exclusivement par maturation d’endosomes tardifs.",
        correct: false,
        explanation: "La biogenèse peroxysomale implique croissance/fission de peroxysomes préexistants et des voies de novo liées notamment au RE.",
      },
    ],
  },
  {
    order: 19,
    difficulty: 'MEDIUM',
    format: 'QZONE',
    question: "Sélectionnez le lysosome sur ce schéma de trafic intracellulaire.",
    explanation: "Le lysosome est le compartiment terminal acide de nombreuses voies de dégradation issues de l’endocytose, de la phagocytose et de l’autophagie.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:qzone-lysosome'],
    image: {
      src: '/images/training/ue14/colles/c06/secretory-pathway-lysosome-qzone.svg',
      alt: 'Voie sécrétoire et compartiments',
      width: 960,
      height: 560,
    },
    expectedZones: [
      {
        id: 'target',
        label: 'Lysosome',
        x: 0.83,
        y: 0.72,
        tolerance: 0.09,
      },
    ],
    defaultTolerance: 0.09,
  },
  {
    order: 20,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "Une hydrolase lysosomale soluble vient d’être synthétisée. Quelles étapes appartiennent à son trajet normal vers le compartiment lysosomal ?",
    explanation: "Une hydrolase lysosomale entre d’abord dans le RE, transite par le Golgi où son N-glycanne reçoit le signal M6P, puis est reconnue au TGN par le récepteur M6P et acheminée vers la voie endosomale.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C06', 'ec:BIOLOGIE_CELLULAIRE', 'theme:hydrolase-lysosomale-trajet'],
    choices: [
      {
        content: "Entrée dans la lumière du RE au cours de sa biosynthèse via la machinerie de translocation.",
        correct: true,
        explanation: "Comme de nombreuses protéines de la voie sécrétoire, l’hydrolase est adressée au RE puis transloquée.",
      },
      {
        content: "Marquage par mannose-6-phosphate puis reconnaissance par le récepteur M6P au niveau du TGN.",
        correct: true,
        explanation: "Ce système permet son tri vers les endosomes et finalement les lysosomes.",
      },
      {
        content: "Maintien permanent dans le RE grâce à un motif KDEL destiné aux hydrolases lysosomales.",
        correct: false,
        explanation: "KDEL concerne la récupération de protéines résidentes du RE, pas l’adressage des hydrolases vers les lysosomes.",
      },
      {
        content: "Import direct depuis le cytosol par PEX5 grâce à un signal PTS1.",
        correct: false,
        explanation: "PEX5 cible la matrice peroxysomale, pas les lysosomes.",
      },
      {
        content: "Endocytose préalable depuis la membrane plasmique comme étape obligatoire pour toutes les hydrolases nouvellement synthétisées.",
        correct: false,
        explanation: "La voie principale les conduit du RE au Golgi puis au TGN et aux endosomes sans passage obligatoire par la surface.",
      },
    ],
  },
];
