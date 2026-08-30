import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch9 — Synthèse du cycle cellulaire — V2 active */
export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Quantité d’ADN, chromosomes et chromatides », lesquelles sont incorrectes ?",
    "choices": [
      {
        "content": "La séparation des chromatides en anaphase correspond à une nouvelle réplication de l’ADN.",
        "correct": true,
        "explanation": "Incorrect : La séparation des chromatides en anaphase correspond à une nouvelle réplication de l’ADN. À retenir : Le nombre de chromosomes est défini par le nombre de centromères, pas par le nombre de molécules d’ADN."
      },
      {
        "content": "En fin de S, chaque chromosome répliqué comporte deux chromatides sœurs.",
        "correct": false,
        "explanation": "Exact : En fin de S, chaque chromosome répliqué comporte deux chromatides sœurs. Dans une cellule somatique diploïde, G1 correspond à 2n chromosomes et 2C d’ADN. Après réplication, G2 comporte toujours 2n chromosomes mais 4C d’ADN, chaque chromosome possédant deux chromatides sœurs."
      },
      {
        "content": "Après la phase S, le nombre de centromères double nécessairement.",
        "correct": true,
        "explanation": "Incorrect : Après la phase S, le nombre de centromères double nécessairement. À retenir : En G2, une cellule somatique diploïde possède 2n chromosomes et 4C d’ADN."
      },
      {
        "content": "Une cellule en G2 possède deux fois plus de chromosomes qu’en G1.",
        "correct": true,
        "explanation": "Incorrect : Une cellule en G2 possède deux fois plus de chromosomes qu’en G1. À retenir : Après une mitose normale et la cytodiérèse, chaque cellule fille retrouve 2C d’ADN."
      },
      {
        "content": "La phase S double la quantité d’ADN sans doubler le nombre de chromosomes.",
        "correct": false,
        "explanation": "Exact : La phase S double la quantité d’ADN sans doubler le nombre de chromosomes. Dans une cellule somatique diploïde, G1 correspond à 2n chromosomes et 2C d’ADN. Après réplication, G2 comporte toujours 2n chromosomes mais 4C d’ADN, chaque chromosome possédant deux chromatides sœurs."
      }
    ],
    "explanation": "Dans une cellule somatique diploïde, G1 correspond à 2n chromosomes et 2C d’ADN. Après réplication, G2 comporte toujours 2n chromosomes mais 4C d’ADN, chaque chromosome possédant deux chromatides sœurs. Ici, il fallait sélectionner les affirmations incorrectes."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment appelle-t-on l’attachement des deux kinétochores sœurs à des pôles opposés du fuseau ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "bi-orientation",
        "biorientation",
        "bi orientation"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La bi-orientation crée un attachement bipolaire compatible avec une ségrégation fidèle."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de « Cycline D-CDK4/6 et Rb-E2F », sélectionnez les propositions exactes.",
    "choices": [
      {
        "content": "Des inhibiteurs de CDK4/6 peuvent freiner la progression de certaines cellules tumorales.",
        "correct": true,
        "explanation": "Exact : Des inhibiteurs de CDK4/6 peuvent freiner la progression de certaines cellules tumorales. Les mitogènes stimulent l’expression de cyclines D. Les complexes cycline D-CDK4/6 phosphorylent notamment la protéine Rb, ce qui favorise l’activité des facteurs E2F et l’expression de gènes nécessaires à l’entrée en phase S."
      },
      {
        "content": "L’activité cycline D-CDK4/6 participe à la progression en G1.",
        "correct": true,
        "explanation": "Exact : L’activité cycline D-CDK4/6 participe à la progression en G1. Les mitogènes stimulent l’expression de cyclines D. Les complexes cycline D-CDK4/6 phosphorylent notamment la protéine Rb, ce qui favorise l’activité des facteurs E2F et l’expression de gènes nécessaires à l’entrée en phase S."
      },
      {
        "content": "E2F stimule l’expression de gènes nécessaires à la transition G1/S.",
        "correct": true,
        "explanation": "Exact : E2F stimule l’expression de gènes nécessaires à la transition G1/S. Les mitogènes stimulent l’expression de cyclines D. Les complexes cycline D-CDK4/6 phosphorylent notamment la protéine Rb, ce qui favorise l’activité des facteurs E2F et l’expression de gènes nécessaires à l’entrée en phase S."
      },
      {
        "content": "La cycline D s’associe exclusivement à CDK1 pour déclencher l’anaphase.",
        "correct": false,
        "explanation": "Incorrect : La cycline D s’associe exclusivement à CDK1 pour déclencher l’anaphase. À retenir : Les signaux mitogènes favorisent l’expression des cyclines D."
      },
      {
        "content": "Les signaux mitogènes favorisent l’expression des cyclines D.",
        "correct": true,
        "explanation": "Exact : Les signaux mitogènes favorisent l’expression des cyclines D. Les mitogènes stimulent l’expression de cyclines D. Les complexes cycline D-CDK4/6 phosphorylent notamment la protéine Rb, ce qui favorise l’activité des facteurs E2F et l’expression de gènes nécessaires à l’entrée en phase S."
      }
    ],
    "explanation": "Les mitogènes stimulent l’expression de cyclines D. Les complexes cycline D-CDK4/6 phosphorylent notamment la protéine Rb, ce qui favorise l’activité des facteurs E2F et l’expression de gènes nécessaires à l’entrée en phase S."
  },
  {
    "order": 104,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de « Cycline B-CDK1 et entrée en mitose », sélectionnez les propositions exactes.",
    "choices": [
      {
        "content": "Cycline B-CDK1 participe au désassemblage de l’enveloppe nucléaire.",
        "correct": true,
        "explanation": "Exact : Cycline B-CDK1 participe au désassemblage de l’enveloppe nucléaire. Cycline B-CDK1, historiquement appelée MPF, déclenche de nombreux événements de l’entrée en mitose : condensation chromosomique, réorganisation des microtubules et désassemblage de l’enveloppe nucléaire."
      },
      {
        "content": "CDK1 est une phosphatase qui déphosphoryle toutes les protéines mitotiques.",
        "correct": false,
        "explanation": "Incorrect : CDK1 est une phosphatase qui déphosphoryle toutes les protéines mitotiques. À retenir : L’activation de CDK1 contribue à la réorganisation du réseau de microtubules en fuseau mitotique."
      },
      {
        "content": "L’activation de CDK1 favorise la condensation des chromosomes.",
        "correct": true,
        "explanation": "Exact : L’activation de CDK1 favorise la condensation des chromosomes. Cycline B-CDK1, historiquement appelée MPF, déclenche de nombreux événements de l’entrée en mitose : condensation chromosomique, réorganisation des microtubules et désassemblage de l’enveloppe nucléaire."
      },
      {
        "content": "Cycline B-CDK1 est le complexe principal de réplication de l’ADN en milieu de phase S.",
        "correct": false,
        "explanation": "Incorrect : Cycline B-CDK1 est le complexe principal de réplication de l’ADN en milieu de phase S. À retenir : Cycline B s’associe à CDK1 pour former une activité majeure d’entrée en mitose."
      },
      {
        "content": "Cycline B-CDK1 provoque directement la synthèse de facteurs de croissance extracellulaires.",
        "correct": false,
        "explanation": "Incorrect : Cycline B-CDK1 provoque directement la synthèse de facteurs de croissance extracellulaires. À retenir : La destruction de cycline B contribue à l’inactivation de CDK1 lors de la sortie de mitose."
      }
    ],
    "explanation": "Cycline B-CDK1, historiquement appelée MPF, déclenche de nombreux événements de l’entrée en mitose : condensation chromosomique, réorganisation des microtubules et désassemblage de l’enveloppe nucléaire."
  },
  {
    "order": 105,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sur le thème « Dommages de l’ADN, p53 et p21 », sélectionnez exactement 2 propositions exactes.",
    "choices": [
      {
        "content": "L’activation de p21 peut freiner la transition G1/S.",
        "correct": true,
        "explanation": "Exact : L’activation de p21 peut freiner la transition G1/S. En réponse à des dommages de l’ADN, p53 peut être stabilisée et induire l’expression de p21. p21 inhibe des complexes cycline-CDK et contribue à bloquer l’entrée en phase S, laissant du temps à la réparation ou favorisant d’autres réponses si les dommages persistent."
      },
      {
        "content": "Des dommages de l’ADN doivent toujours accélérer l’entrée en phase S.",
        "correct": false,
        "explanation": "Incorrect : Des dommages de l’ADN doivent toujours accélérer l’entrée en phase S. À retenir : p21 est un inhibiteur de complexes cycline-CDK."
      },
      {
        "content": "Un arrêt du cycle peut laisser du temps aux systèmes de réparation de l’ADN.",
        "correct": true,
        "explanation": "Exact : Un arrêt du cycle peut laisser du temps aux systèmes de réparation de l’ADN. En réponse à des dommages de l’ADN, p53 peut être stabilisée et induire l’expression de p21. p21 inhibe des complexes cycline-CDK et contribue à bloquer l’entrée en phase S, laissant du temps à la réparation ou favorisant d’autres réponses si les dommages persistent."
      },
      {
        "content": "p53 est une sous-unité constitutive de l’ATP synthase.",
        "correct": false,
        "explanation": "Incorrect : p53 est une sous-unité constitutive de l’ATP synthase. À retenir : p53 peut stimuler la transcription du gène codant p21."
      },
      {
        "content": "p21 est une cycline qui active directement CDK2.",
        "correct": false,
        "explanation": "Incorrect : p21 est une cycline qui active directement CDK2. À retenir : Des dommages de l’ADN peuvent stabiliser et activer p53."
      }
    ],
    "explanation": "En réponse à des dommages de l’ADN, p53 peut être stabilisée et induire l’expression de p21. p21 inhibe des complexes cycline-CDK et contribue à bloquer l’entrée en phase S, laissant du temps à la réparation ou favorisant d’autres réponses si les dommages persistent."
  },
  {
    "order": 106,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour le thème « Contrôle G2/M, Cdc25 et Wee1 », quelles propositions doivent être retenues ?",
    "choices": [
      {
        "content": "Wee1 active CDK1 en retirant son phosphate inhibiteur.",
        "correct": false,
        "explanation": "Incorrect : Wee1 active CDK1 en retirant son phosphate inhibiteur. À retenir : Wee1 peut maintenir CDK1 dans un état inhibé par phosphorylation."
      },
      {
        "content": "L’activation de cycline B-CDK1 est au cœur de la transition G2/M.",
        "correct": true,
        "explanation": "Exact : L’activation de cycline B-CDK1 est au cœur de la transition G2/M. L’entrée en mitose repose sur l’activation de CDK1. Wee1 ajoute une phosphorylation inhibitrice à CDK1, tandis que Cdc25 retire cette phosphorylation. Les voies de dommages de l’ADN peuvent inhiber Cdc25 et maintenir l’arrêt G2/M."
      },
      {
        "content": "Une réplication incomplète peut empêcher l’activation complète de la machinerie mitotique.",
        "correct": true,
        "explanation": "Exact : Une réplication incomplète peut empêcher l’activation complète de la machinerie mitotique. L’entrée en mitose repose sur l’activation de CDK1. Wee1 ajoute une phosphorylation inhibitrice à CDK1, tandis que Cdc25 retire cette phosphorylation. Les voies de dommages de l’ADN peuvent inhiber Cdc25 et maintenir l’arrêt G2/M."
      },
      {
        "content": "Wee1 peut maintenir CDK1 dans un état inhibé par phosphorylation.",
        "correct": true,
        "explanation": "Exact : Wee1 peut maintenir CDK1 dans un état inhibé par phosphorylation. L’entrée en mitose repose sur l’activation de CDK1. Wee1 ajoute une phosphorylation inhibitrice à CDK1, tandis que Cdc25 retire cette phosphorylation. Les voies de dommages de l’ADN peuvent inhiber Cdc25 et maintenir l’arrêt G2/M."
      },
      {
        "content": "Le contrôle G2/M protège contre l’entrée en mitose avec un génome insuffisamment répliqué ou endommagé.",
        "correct": true,
        "explanation": "Exact : Le contrôle G2/M protège contre l’entrée en mitose avec un génome insuffisamment répliqué ou endommagé. L’entrée en mitose repose sur l’activation de CDK1. Wee1 ajoute une phosphorylation inhibitrice à CDK1, tandis que Cdc25 retire cette phosphorylation. Les voies de dommages de l’ADN peuvent inhiber Cdc25 et maintenir l’arrêt G2/M."
      }
    ],
    "explanation": "L’entrée en mitose repose sur l’activation de CDK1. Wee1 ajoute une phosphorylation inhibitrice à CDK1, tandis que Cdc25 retire cette phosphorylation. Les voies de dommages de l’ADN peuvent inhiber Cdc25 et maintenir l’arrêt G2/M."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Concernant « Phases de la mitose », choisissez exactement 2 affirmations correctes.",
    "choices": [
      {
        "content": "L’anaphase débute avec la séparation des chromatides sœurs.",
        "correct": true,
        "explanation": "Exact : L’anaphase débute avec la séparation des chromatides sœurs. La mitose ouverte des cellules animales comprend prophase, prométaphase, métaphase, anaphase et télophase, puis la cytodiérèse achève la séparation physique des cellules filles."
      },
      {
        "content": "La réplication complète du génome se déroule pendant la métaphase.",
        "correct": false,
        "explanation": "Incorrect : La réplication complète du génome se déroule pendant la métaphase. À retenir : La condensation des chromosomes augmente pendant la prophase."
      },
      {
        "content": "En télophase, les enveloppes nucléaires se reforment autour des lots chromosomiques.",
        "correct": true,
        "explanation": "Exact : En télophase, les enveloppes nucléaires se reforment autour des lots chromosomiques. La mitose ouverte des cellules animales comprend prophase, prométaphase, métaphase, anaphase et télophase, puis la cytodiérèse achève la séparation physique des cellules filles."
      },
      {
        "content": "L’enveloppe nucléaire reste intacte pendant toute la prométaphase des cellules animales typiques.",
        "correct": false,
        "explanation": "Incorrect : L’enveloppe nucléaire reste intacte pendant toute la prométaphase des cellules animales typiques. À retenir : La mitose répartit les chromosomes répliqués entre deux noyaux filles."
      },
      {
        "content": "La prophase suit normalement la télophase au sein d’une même mitose.",
        "correct": false,
        "explanation": "Incorrect : La prophase suit normalement la télophase au sein d’une même mitose. À retenir : La rupture de l’enveloppe nucléaire permet aux microtubules d’accéder aux kinétochores en prométaphase."
      }
    ],
    "explanation": "La mitose ouverte des cellules animales comprend prophase, prométaphase, métaphase, anaphase et télophase, puis la cytodiérèse achève la séparation physique des cellules filles."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "À propos de « Fuseau mitotique et microtubules », identifiez exactement cinq propositions exactes parmi les dix suivantes.",
    "choices": [
      {
        "content": "Les microtubules interpolaires issus de pôles opposés se chevauchent dans la zone médiane du fuseau.",
        "correct": true,
        "explanation": "Exact : Les microtubules interpolaires issus de pôles opposés se chevauchent dans la zone médiane du fuseau. Le fuseau bipolaire comprend des microtubules kinétochoriens, interpolaires et astraux. Leur dynamique et les moteurs moléculaires assurent l’alignement puis la ségrégation des chromosomes et l’écartement des pôles."
      },
      {
        "content": "La dynamique des microtubules est essentielle à la recherche et à la capture des kinétochores.",
        "correct": true,
        "explanation": "Exact : La dynamique des microtubules est essentielle à la recherche et à la capture des kinétochores. Le fuseau bipolaire comprend des microtubules kinétochoriens, interpolaires et astraux. Leur dynamique et les moteurs moléculaires assurent l’alignement puis la ségrégation des chromosomes et l’écartement des pôles."
      },
      {
        "content": "La dynamique des microtubules doit être totalement supprimée pour aligner les chromosomes.",
        "correct": false,
        "explanation": "Incorrect : La dynamique des microtubules doit être totalement supprimée pour aligner les chromosomes. À retenir : Le fuseau mitotique est organisé autour de deux pôles dans une mitose bipolaire normale."
      },
      {
        "content": "Des moteurs moléculaires participent aux forces de glissement et de traction du fuseau.",
        "correct": true,
        "explanation": "Exact : Des moteurs moléculaires participent aux forces de glissement et de traction du fuseau. Le fuseau bipolaire comprend des microtubules kinétochoriens, interpolaires et astraux. Leur dynamique et les moteurs moléculaires assurent l’alignement puis la ségrégation des chromosomes et l’écartement des pôles."
      },
      {
        "content": "Le fuseau mitotique est organisé autour de deux pôles dans une mitose bipolaire normale.",
        "correct": true,
        "explanation": "Exact : Le fuseau mitotique est organisé autour de deux pôles dans une mitose bipolaire normale. Le fuseau bipolaire comprend des microtubules kinétochoriens, interpolaires et astraux. Leur dynamique et les moteurs moléculaires assurent l’alignement puis la ségrégation des chromosomes et l’écartement des pôles."
      },
      {
        "content": "Les microtubules astraux constituent la chromatine des chromosomes.",
        "correct": false,
        "explanation": "Incorrect : Les microtubules astraux constituent la chromatine des chromosomes. À retenir : Les microtubules interpolaires issus de pôles opposés se chevauchent dans la zone médiane du fuseau."
      },
      {
        "content": "Les microtubules sont des filaments d’actine associés à la myosine II.",
        "correct": false,
        "explanation": "Incorrect : Les microtubules sont des filaments d’actine associés à la myosine II. À retenir : Les microtubules astraux interagissent avec le cortex cellulaire."
      },
      {
        "content": "Tous les microtubules du fuseau s’attachent directement à un kinétochore.",
        "correct": false,
        "explanation": "Incorrect : Tous les microtubules du fuseau s’attachent directement à un kinétochore. À retenir : Les microtubules kinétochoriens relient les kinétochores aux pôles du fuseau."
      },
      {
        "content": "Le fuseau mitotique est normalement unipolaire dans une cellule somatique humaine saine.",
        "correct": false,
        "explanation": "Incorrect : Le fuseau mitotique est normalement unipolaire dans une cellule somatique humaine saine. À retenir : La dynamique des microtubules est essentielle à la recherche et à la capture des kinétochores."
      },
      {
        "content": "Les microtubules kinétochoriens relient les kinétochores aux pôles du fuseau.",
        "correct": true,
        "explanation": "Exact : Les microtubules kinétochoriens relient les kinétochores aux pôles du fuseau. Le fuseau bipolaire comprend des microtubules kinétochoriens, interpolaires et astraux. Leur dynamique et les moteurs moléculaires assurent l’alignement puis la ségrégation des chromosomes et l’écartement des pôles."
      }
    ],
    "explanation": "Le fuseau bipolaire comprend des microtubules kinétochoriens, interpolaires et astraux. Leur dynamique et les moteurs moléculaires assurent l’alignement puis la ségrégation des chromosomes et l’écartement des pôles."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle protéine assure principalement la cohésion des chromatides sœurs avant l’anaphase ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cohésine",
        "cohesine",
        "cohesin"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le complexe cohésine maintient les chromatides sœurs associées jusqu’au déclenchement de l’anaphase."
  },
  {
    "order": 110,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de « Centromère, kinétochore et bi-orientation », repérez la seule affirmation correcte.",
    "choices": [
      {
        "content": "Les chromosomes n’interagissent jamais avec les microtubules en métaphase.",
        "correct": false,
        "explanation": "Incorrect : Les chromosomes n’interagissent jamais avec les microtubules en métaphase. À retenir : Un défaut d’attachement kinetochore-microtubule active le checkpoint du fuseau."
      },
      {
        "content": "Le kinétochore est une membrane entourant chaque chromosome.",
        "correct": false,
        "explanation": "Incorrect : Le kinétochore est une membrane entourant chaque chromosome. À retenir : Le kinétochore est assemblé sur la région centromérique du chromosome."
      },
      {
        "content": "Le centromère est un organite cytoplasmique contenant des centrioles.",
        "correct": false,
        "explanation": "Incorrect : Le centromère est un organite cytoplasmique contenant des centrioles. À retenir : La bi-orientation signifie que les deux kinétochores sœurs sont reliés à des pôles opposés."
      },
      {
        "content": "La bi-orientation relie les deux kinétochores sœurs au même pôle.",
        "correct": false,
        "explanation": "Incorrect : La bi-orientation relie les deux kinétochores sœurs au même pôle. À retenir : Les microtubules kinétochoriens s’attachent aux kinétochores."
      },
      {
        "content": "Un défaut d’attachement kinetochore-microtubule active le checkpoint du fuseau.",
        "correct": true,
        "explanation": "Exact : Un défaut d’attachement kinetochore-microtubule active le checkpoint du fuseau. Le kinétochore est un assemblage protéique construit sur la région centromérique. En métaphase, les deux kinétochores sœurs doivent être attachés à des pôles opposés, assurant la bi-orientation et une ségrégation fidèle."
      }
    ],
    "explanation": "Le kinétochore est un assemblage protéique construit sur la région centromérique. En métaphase, les deux kinétochores sœurs doivent être attachés à des pôles opposés, assurant la bi-orientation et une ségrégation fidèle."
  },
  {
    "order": 111,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Sur le thème « Cohésine, sécurine et séparase », quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Les cohésines sont des microtubules du fuseau.",
        "correct": false,
        "explanation": "Incorrect : Les cohésines sont des microtubules du fuseau. À retenir : La dégradation de la sécurine libère l’activité de la séparase."
      },
      {
        "content": "La séparase clive une sous-unité de la cohésine au début de l’anaphase.",
        "correct": true,
        "explanation": "Exact : La séparase clive une sous-unité de la cohésine au début de l’anaphase. Les cohésines maintiennent les chromatides sœurs associées. La sécurine inhibe la séparase. Quand APC/C-Cdc20 entraîne la dégradation de la sécurine, la séparase peut cliver la cohésine et permettre l’anaphase."
      },
      {
        "content": "La sécurine est une protéase qui clive directement la cohésine.",
        "correct": false,
        "explanation": "Incorrect : La sécurine est une protéase qui clive directement la cohésine. À retenir : Les cohésines contribuent à maintenir les chromatides sœurs associées avant l’anaphase."
      },
      {
        "content": "La séparase maintient les chromatides sœurs attachées pendant toute l’anaphase.",
        "correct": false,
        "explanation": "Incorrect : La séparase maintient les chromatides sœurs attachées pendant toute l’anaphase. À retenir : La séparase est inhibée par la sécurine avant l’anaphase."
      },
      {
        "content": "APC/C-Cdc20 stabilise la sécurine pour empêcher sa dégradation après satisfaction du checkpoint.",
        "correct": false,
        "explanation": "Incorrect : APC/C-Cdc20 stabilise la sécurine pour empêcher sa dégradation après satisfaction du checkpoint. À retenir : La séparase clive une sous-unité de la cohésine au début de l’anaphase."
      }
    ],
    "explanation": "Les cohésines maintiennent les chromatides sœurs associées. La sécurine inhibe la séparase. Quand APC/C-Cdc20 entraîne la dégradation de la sécurine, la séparase peut cliver la cohésine et permettre l’anaphase."
  },
  {
    "order": 112,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les mécanismes de « Checkpoint d’assemblage du fuseau », quelles affirmations sont correctes ?",
    "choices": [
      {
        "content": "Le checkpoint du fuseau inhibe fonctionnellement APC/C-Cdc20 tant que les attachements ne sont pas satisfaisants.",
        "correct": true,
        "explanation": "Exact : Le checkpoint du fuseau inhibe fonctionnellement APC/C-Cdc20 tant que les attachements ne sont pas satisfaisants. Le spindle assembly checkpoint (SAC) bloque l’activation efficace d’APC/C-Cdc20 tant que subsistent des kinétochores non correctement attachés. Les protéines MAD et BUB participent au signal de checkpoint."
      },
      {
        "content": "Un kinétochore non attaché active APC/C-Cdc20 pour accélérer l’anaphase.",
        "correct": false,
        "explanation": "Incorrect : Un kinétochore non attaché active APC/C-Cdc20 pour accélérer l’anaphase. À retenir : Un kinétochore non attaché peut générer un signal qui retarde l’anaphase."
      },
      {
        "content": "L’extinction du checkpoint permet la dégradation de la sécurine.",
        "correct": true,
        "explanation": "Exact : L’extinction du checkpoint permet la dégradation de la sécurine. Le spindle assembly checkpoint (SAC) bloque l’activation efficace d’APC/C-Cdc20 tant que subsistent des kinétochores non correctement attachés. Les protéines MAD et BUB participent au signal de checkpoint."
      },
      {
        "content": "Le checkpoint du fuseau contribue à limiter les erreurs de ségrégation chromosomique.",
        "correct": true,
        "explanation": "Exact : Le checkpoint du fuseau contribue à limiter les erreurs de ségrégation chromosomique. Le spindle assembly checkpoint (SAC) bloque l’activation efficace d’APC/C-Cdc20 tant que subsistent des kinétochores non correctement attachés. Les protéines MAD et BUB participent au signal de checkpoint."
      },
      {
        "content": "Le checkpoint du fuseau contrôle principalement la réplication de l’ADN en phase S.",
        "correct": false,
        "explanation": "Incorrect : Le checkpoint du fuseau contrôle principalement la réplication de l’ADN en phase S. À retenir : Le checkpoint du fuseau surveille l’attachement des kinétochores aux microtubules."
      }
    ],
    "explanation": "Le spindle assembly checkpoint (SAC) bloque l’activation efficace d’APC/C-Cdc20 tant que subsistent des kinétochores non correctement attachés. Les protéines MAD et BUB participent au signal de checkpoint."
  },
  {
    "order": 113,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles affirmations décrivent correctement « APC/C-Cdc20 et APC/C-Cdh1 » ?",
    "choices": [
      {
        "content": "Cdh1 devient un coactivateur important d’APC/C lors de la sortie de mitose et en G1.",
        "correct": true,
        "explanation": "Exact : Cdh1 devient un coactivateur important d’APC/C lors de la sortie de mitose et en G1. APC/C change de coactivateur au cours de la mitose. Cdc20 est essentiel à l’entrée en anaphase, tandis que Cdh1 contribue à la sortie de mitose et au maintien d’un faible niveau d’activité CDK en G1."
      },
      {
        "content": "Cdh1 est la protéase qui clive directement la cohésine.",
        "correct": false,
        "explanation": "Incorrect : Cdh1 est la protéase qui clive directement la cohésine. À retenir : Cdc20 active APC/C au moment de la transition métaphase-anaphase."
      },
      {
        "content": "APC/C est un canal calcique de la membrane plasmique.",
        "correct": false,
        "explanation": "Incorrect : APC/C est un canal calcique de la membrane plasmique. À retenir : APC/C est une ubiquitine ligase E3."
      },
      {
        "content": "La destruction de cycline B contribue à la sortie de mitose.",
        "correct": true,
        "explanation": "Exact : La destruction de cycline B contribue à la sortie de mitose. APC/C change de coactivateur au cours de la mitose. Cdc20 est essentiel à l’entrée en anaphase, tandis que Cdh1 contribue à la sortie de mitose et au maintien d’un faible niveau d’activité CDK en G1."
      },
      {
        "content": "La succession Cdc20 puis Cdh1 participe à l’ordre temporel de la fin de mitose.",
        "correct": true,
        "explanation": "Exact : La succession Cdc20 puis Cdh1 participe à l’ordre temporel de la fin de mitose. APC/C change de coactivateur au cours de la mitose. Cdc20 est essentiel à l’entrée en anaphase, tandis que Cdh1 contribue à la sortie de mitose et au maintien d’un faible niveau d’activité CDK en G1."
      }
    ],
    "explanation": "APC/C change de coactivateur au cours de la mitose. Cdc20 est essentiel à l’entrée en anaphase, tandis que Cdh1 contribue à la sortie de mitose et au maintien d’un faible niveau d’activité CDK en G1."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel type de microtubule relie directement un kinétochore à un pôle du fuseau ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "microtubule kinétochorien",
        "microtubule kinetochorien",
        "microtubules kinétochoriens",
        "microtubules kinetochoriens"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les microtubules kinétochoriens s’attachent aux kinétochores et participent au mouvement chromosomique."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel événement moléculaire majeur permet l’inactivation de CDK1 lors de la sortie de mitose ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "dégradation de la cycline B",
        "degradation de la cycline B",
        "destruction de la cycline B",
        "protéolyse de la cycline B",
        "proteolyse de la cycline B"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La destruction de cycline B par la voie ubiquitine-protéasome entraîne la chute de l’activité CDK1."
  },
  {
    "order": 116,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel terme désigne l’éloignement des deux pôles du fuseau pendant l’anaphase ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "anaphase B"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’anaphase B correspond à l’allongement du fuseau et à l’écartement des pôles."
  },
  {
    "order": 117,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Concernant « Cytodiérèse », sélectionnez exactement les cinq propositions exactes parmi les dix proposées.",
    "choices": [
      {
        "content": "La cytodiérèse débute généralement avant la fin complète de la mitose nucléaire.",
        "correct": true,
        "explanation": "Exact : La cytodiérèse débute généralement avant la fin complète de la mitose nucléaire. La cytodiérèse des cellules animales dépend d’un anneau contractile d’actine et de myosine II positionné au cortex équatorial. Sa contraction forme le sillon de clivage puis le corps intermédiaire avant l’abscission."
      },
      {
        "content": "L’abscission précède normalement la métaphase.",
        "correct": false,
        "explanation": "Incorrect : L’abscission précède normalement la métaphase. À retenir : L’abscission constitue l’étape finale de séparation des cellules filles."
      },
      {
        "content": "Le corps intermédiaire relie transitoirement les cellules filles avant l’abscission.",
        "correct": true,
        "explanation": "Exact : Le corps intermédiaire relie transitoirement les cellules filles avant l’abscission. La cytodiérèse des cellules animales dépend d’un anneau contractile d’actine et de myosine II positionné au cortex équatorial. Sa contraction forme le sillon de clivage puis le corps intermédiaire avant l’abscission."
      },
      {
        "content": "La cytodiérèse correspond à la réplication des chromosomes.",
        "correct": false,
        "explanation": "Incorrect : La cytodiérèse correspond à la réplication des chromosomes. À retenir : La contraction de l’anneau forme un sillon de clivage."
      },
      {
        "content": "La cytodiérèse des cellules animales dépend d’un anneau de tubuline et de kératine exclusivement.",
        "correct": false,
        "explanation": "Incorrect : La cytodiérèse des cellules animales dépend d’un anneau de tubuline et de kératine exclusivement. À retenir : La cytodiérèse débute généralement avant la fin complète de la mitose nucléaire."
      },
      {
        "content": "La myosine II n’intervient jamais dans l’anneau contractile.",
        "correct": false,
        "explanation": "Incorrect : La myosine II n’intervient jamais dans l’anneau contractile. À retenir : Le fuseau mitotique participe au positionnement du plan de division."
      },
      {
        "content": "Le fuseau mitotique participe au positionnement du plan de division.",
        "correct": true,
        "explanation": "Exact : Le fuseau mitotique participe au positionnement du plan de division. La cytodiérèse des cellules animales dépend d’un anneau contractile d’actine et de myosine II positionné au cortex équatorial. Sa contraction forme le sillon de clivage puis le corps intermédiaire avant l’abscission."
      },
      {
        "content": "Un anneau contractile d’actine et de myosine II se forme à l’équateur de la cellule animale.",
        "correct": true,
        "explanation": "Exact : Un anneau contractile d’actine et de myosine II se forme à l’équateur de la cellule animale. La cytodiérèse des cellules animales dépend d’un anneau contractile d’actine et de myosine II positionné au cortex équatorial. Sa contraction forme le sillon de clivage puis le corps intermédiaire avant l’abscission."
      },
      {
        "content": "L’abscission constitue l’étape finale de séparation des cellules filles.",
        "correct": true,
        "explanation": "Exact : L’abscission constitue l’étape finale de séparation des cellules filles. La cytodiérèse des cellules animales dépend d’un anneau contractile d’actine et de myosine II positionné au cortex équatorial. Sa contraction forme le sillon de clivage puis le corps intermédiaire avant l’abscission."
      },
      {
        "content": "Le sillon de clivage se forme normalement au niveau d’un seul pôle du fuseau.",
        "correct": false,
        "explanation": "Incorrect : Le sillon de clivage se forme normalement au niveau d’un seul pôle du fuseau. À retenir : Un anneau contractile d’actine et de myosine II se forme à l’équateur de la cellule animale."
      }
    ],
    "explanation": "La cytodiérèse des cellules animales dépend d’un anneau contractile d’actine et de myosine II positionné au cortex équatorial. Sa contraction forme le sillon de clivage puis le corps intermédiaire avant l’abscission."
  },
  {
    "order": 118,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de « Quantité d’ADN, chromosomes et chromatides », repérez la seule affirmation correcte.",
    "choices": [
      {
        "content": "La phase S fait passer une cellule somatique de 2n à 4n chromosomes.",
        "correct": false,
        "explanation": "Incorrect : La phase S fait passer une cellule somatique de 2n à 4n chromosomes. À retenir : En G1, une cellule somatique diploïde possède 2n chromosomes à une chromatide."
      },
      {
        "content": "En G1, une cellule somatique diploïde contient 4C d’ADN.",
        "correct": false,
        "explanation": "Incorrect : En G1, une cellule somatique diploïde contient 4C d’ADN. À retenir : La phase S double la quantité d’ADN sans doubler le nombre de chromosomes."
      },
      {
        "content": "La séparation des chromatides en anaphase correspond à une nouvelle réplication de l’ADN.",
        "correct": false,
        "explanation": "Incorrect : La séparation des chromatides en anaphase correspond à une nouvelle réplication de l’ADN. À retenir : Le nombre de chromosomes est défini par le nombre de centromères, pas par le nombre de molécules d’ADN."
      },
      {
        "content": "En G2, chaque chromosome ne comporte encore qu’une chromatide.",
        "correct": false,
        "explanation": "Incorrect : En G2, chaque chromosome ne comporte encore qu’une chromatide. À retenir : En G1, la quantité d’ADN est classiquement notée 2C."
      },
      {
        "content": "En fin de S, chaque chromosome répliqué comporte deux chromatides sœurs.",
        "correct": true,
        "explanation": "Exact : En fin de S, chaque chromosome répliqué comporte deux chromatides sœurs. Dans une cellule somatique diploïde, G1 correspond à 2n chromosomes et 2C d’ADN. Après réplication, G2 comporte toujours 2n chromosomes mais 4C d’ADN, chaque chromosome possédant deux chromatides sœurs."
      }
    ],
    "explanation": "Dans une cellule somatique diploïde, G1 correspond à 2n chromosomes et 2C d’ADN. Après réplication, G2 comporte toujours 2n chromosomes mais 4C d’ADN, chaque chromosome possédant deux chromatides sœurs."
  },
  {
    "order": 119,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans une cellule somatique proliférative, concernant les mécanismes de « Cycline D-CDK4/6 et Rb-E2F », quelles affirmations sont correctes ?",
    "choices": [
      {
        "content": "Des inhibiteurs de CDK4/6 peuvent freiner la progression de certaines cellules tumorales.",
        "correct": true,
        "explanation": "Exact : Des inhibiteurs de CDK4/6 peuvent freiner la progression de certaines cellules tumorales. Les mitogènes stimulent l’expression de cyclines D. Les complexes cycline D-CDK4/6 phosphorylent notamment la protéine Rb, ce qui favorise l’activité des facteurs E2F et l’expression de gènes nécessaires à l’entrée en phase S."
      },
      {
        "content": "E2F est une protéase qui dégrade les cohésines.",
        "correct": false,
        "explanation": "Incorrect : E2F est une protéase qui dégrade les cohésines. À retenir : L’activité cycline D-CDK4/6 participe à la progression en G1."
      },
      {
        "content": "CDK4 et CDK6 sont les principales kinases de séparation des chromatides en anaphase.",
        "correct": false,
        "explanation": "Incorrect : CDK4 et CDK6 sont les principales kinases de séparation des chromatides en anaphase. À retenir : E2F stimule l’expression de gènes nécessaires à la transition G1/S."
      },
      {
        "content": "L’activité cycline D-CDK4/6 participe à la progression en G1.",
        "correct": true,
        "explanation": "Exact : L’activité cycline D-CDK4/6 participe à la progression en G1. Les mitogènes stimulent l’expression de cyclines D. Les complexes cycline D-CDK4/6 phosphorylent notamment la protéine Rb, ce qui favorise l’activité des facteurs E2F et l’expression de gènes nécessaires à l’entrée en phase S."
      },
      {
        "content": "Les facteurs de croissance suppriment systématiquement la synthèse de cycline D.",
        "correct": false,
        "explanation": "Incorrect : Les facteurs de croissance suppriment systématiquement la synthèse de cycline D. À retenir : La phosphorylation de Rb réduit son frein sur les facteurs E2F."
      }
    ],
    "explanation": "Les mitogènes stimulent l’expression de cyclines D. Les complexes cycline D-CDK4/6 phosphorylent notamment la protéine Rb, ce qui favorise l’activité des facteurs E2F et l’expression de gènes nécessaires à l’entrée en phase S."
  },
  {
    "order": 120,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel terme désigne le mouvement des chromosomes vers les pôles pendant l’anaphase ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "anaphase A"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’anaphase A correspond au mouvement poleward des chromosomes, lié notamment au raccourcissement des microtubules kinétochoriens."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement « Cycline B-CDK1 et entrée en mitose » ?",
    "choices": [
      {
        "content": "Cycline B-CDK1 est le complexe principal de réplication de l’ADN en milieu de phase S.",
        "correct": false,
        "explanation": "Incorrect : Cycline B-CDK1 est le complexe principal de réplication de l’ADN en milieu de phase S. À retenir : Cycline B s’associe à CDK1 pour former une activité majeure d’entrée en mitose."
      },
      {
        "content": "MPF désigne un complexe formé par p53 et p21.",
        "correct": false,
        "explanation": "Incorrect : MPF désigne un complexe formé par p53 et p21. À retenir : L’activation de CDK1 favorise la condensation des chromosomes."
      },
      {
        "content": "Cycline B-CDK1 participe au désassemblage de l’enveloppe nucléaire.",
        "correct": true,
        "explanation": "Exact : Cycline B-CDK1 participe au désassemblage de l’enveloppe nucléaire. Cycline B-CDK1, historiquement appelée MPF, déclenche de nombreux événements de l’entrée en mitose : condensation chromosomique, réorganisation des microtubules et désassemblage de l’enveloppe nucléaire."
      },
      {
        "content": "La cycline B doit rester stable à forte concentration pour permettre la sortie de mitose.",
        "correct": false,
        "explanation": "Incorrect : La cycline B doit rester stable à forte concentration pour permettre la sortie de mitose. À retenir : Cycline B-CDK1 participe au désassemblage de l’enveloppe nucléaire."
      },
      {
        "content": "L’activation de CDK1 maintient obligatoirement l’enveloppe nucléaire intacte.",
        "correct": false,
        "explanation": "Incorrect : L’activation de CDK1 maintient obligatoirement l’enveloppe nucléaire intacte. À retenir : Cycline B-CDK1 est historiquement appelée MPF."
      }
    ],
    "explanation": "Cycline B-CDK1, historiquement appelée MPF, déclenche de nombreux événements de l’entrée en mitose : condensation chromosomique, réorganisation des microtubules et désassemblage de l’enveloppe nucléaire."
  },
  {
    "order": 122,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les éléments suivants relatifs à « Dommages de l’ADN, p53 et p21 », lesquels sont exacts ?",
    "choices": [
      {
        "content": "Des dommages de l’ADN doivent toujours accélérer l’entrée en phase S.",
        "correct": false,
        "explanation": "Incorrect : Des dommages de l’ADN doivent toujours accélérer l’entrée en phase S. À retenir : p21 est un inhibiteur de complexes cycline-CDK."
      },
      {
        "content": "Des dommages de l’ADN peuvent stabiliser et activer p53.",
        "correct": true,
        "explanation": "Exact : Des dommages de l’ADN peuvent stabiliser et activer p53. En réponse à des dommages de l’ADN, p53 peut être stabilisée et induire l’expression de p21. p21 inhibe des complexes cycline-CDK et contribue à bloquer l’entrée en phase S, laissant du temps à la réparation ou favorisant d’autres réponses si les dommages persistent."
      },
      {
        "content": "Un arrêt du cycle peut laisser du temps aux systèmes de réparation de l’ADN.",
        "correct": true,
        "explanation": "Exact : Un arrêt du cycle peut laisser du temps aux systèmes de réparation de l’ADN. En réponse à des dommages de l’ADN, p53 peut être stabilisée et induire l’expression de p21. p21 inhibe des complexes cycline-CDK et contribue à bloquer l’entrée en phase S, laissant du temps à la réparation ou favorisant d’autres réponses si les dommages persistent."
      },
      {
        "content": "Si les dommages sont trop importants, p53 peut aussi contribuer à des programmes de sénescence ou d’apoptose.",
        "correct": true,
        "explanation": "Exact : Si les dommages sont trop importants, p53 peut aussi contribuer à des programmes de sénescence ou d’apoptose. En réponse à des dommages de l’ADN, p53 peut être stabilisée et induire l’expression de p21. p21 inhibe des complexes cycline-CDK et contribue à bloquer l’entrée en phase S, laissant du temps à la réparation ou favorisant d’autres réponses si les dommages persistent."
      },
      {
        "content": "p21 active directement la séparase en métaphase.",
        "correct": false,
        "explanation": "Incorrect : p21 active directement la séparase en métaphase. À retenir : L’activation de p21 peut freiner la transition G1/S."
      }
    ],
    "explanation": "En réponse à des dommages de l’ADN, p53 peut être stabilisée et induire l’expression de p21. p21 inhibe des complexes cycline-CDK et contribue à bloquer l’entrée en phase S, laissant du temps à la réparation ou favorisant d’autres réponses si les dommages persistent."
  }
];

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    "order": 10,
    "slug": "cycle-cellulaire-synthese-1",
    "title": "Synthèse du cycle cellulaire",
    "description": "Consolider les mécanismes majeurs du chapitre.",
    "stage": "PRACTICE",
    "sectionOrder": 5,
    "questionOrders": [
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110
    ]
  },
  {
    "order": 11,
    "slug": "cycle-cellulaire-synthese-2",
    "title": "Maîtriser le cycle cellulaire",
    "description": "Mobiliser les notions dans des situations transversales.",
    "stage": "MASTER",
    "sectionOrder": 5,
    "questionOrders": [
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122
    ]
  }
];
