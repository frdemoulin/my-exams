import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch9 — Points de contrôle et dommages de l’ADN */
export const UE14_BIOCELL_CH9_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Parmi ces affirmations concernant « Point de restriction et mitogènes », retenez exactement les 3 justes.",
    "choices": [
      {
        "content": "Une privation de mitogènes en G1 précoce peut favoriser la quiescence.",
        "correct": true,
        "explanation": "Exact : Une privation de mitogènes en G1 précoce peut favoriser la quiescence. Avant le point de restriction en G1, la progression dépend fortement des signaux mitogènes et de l’état de la cellule. Après engagement, la cellule est moins dépendante de ces signaux pour achever le cycle en cours."
      },
      {
        "content": "Le point de restriction est un contrôle spécifique de l’attachement des kinétochores en métaphase.",
        "correct": false,
        "explanation": "Incorrect : Le point de restriction est un contrôle spécifique de l’attachement des kinétochores en métaphase. À retenir : Les facteurs de croissance jouent un rôle particulièrement important avant le point de restriction."
      },
      {
        "content": "Les mitogènes n’ont aucun effet sur l’entrée en cycle des cellules mammaliennes.",
        "correct": false,
        "explanation": "Incorrect : Les mitogènes n’ont aucun effet sur l’entrée en cycle des cellules mammaliennes. À retenir : Une privation de mitogènes en G1 précoce peut favoriser la quiescence."
      },
      {
        "content": "Les facteurs de croissance jouent un rôle particulièrement important avant le point de restriction.",
        "correct": true,
        "explanation": "Exact : Les facteurs de croissance jouent un rôle particulièrement important avant le point de restriction. Avant le point de restriction en G1, la progression dépend fortement des signaux mitogènes et de l’état de la cellule. Après engagement, la cellule est moins dépendante de ces signaux pour achever le cycle en cours."
      },
      {
        "content": "Le point de restriction se situe en G1 avant l’entrée en phase S.",
        "correct": true,
        "explanation": "Exact : Le point de restriction se situe en G1 avant l’entrée en phase S. Avant le point de restriction en G1, la progression dépend fortement des signaux mitogènes et de l’état de la cellule. Après engagement, la cellule est moins dépendante de ces signaux pour achever le cycle en cours."
      }
    ],
    "explanation": "Avant le point de restriction en G1, la progression dépend fortement des signaux mitogènes et de l’état de la cellule. Après engagement, la cellule est moins dépendante de ces signaux pour achever le cycle en cours."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Dommages de l’ADN, p53 et p21 », lesquelles sont incorrectes ?",
    "choices": [
      {
        "content": "p53 peut stimuler la transcription du gène codant p21.",
        "correct": false,
        "explanation": "Exact : p53 peut stimuler la transcription du gène codant p21. En réponse à des dommages de l’ADN, p53 peut être stabilisée et induire l’expression de p21. p21 inhibe des complexes cycline-CDK et contribue à bloquer l’entrée en phase S, laissant du temps à la réparation ou favorisant d’autres réponses si les dommages persistent."
      },
      {
        "content": "p21 est un inhibiteur de complexes cycline-CDK.",
        "correct": false,
        "explanation": "Exact : p21 est un inhibiteur de complexes cycline-CDK. En réponse à des dommages de l’ADN, p53 peut être stabilisée et induire l’expression de p21. p21 inhibe des complexes cycline-CDK et contribue à bloquer l’entrée en phase S, laissant du temps à la réparation ou favorisant d’autres réponses si les dommages persistent."
      },
      {
        "content": "p21 est une cycline qui active directement CDK2.",
        "correct": true,
        "explanation": "Incorrect : p21 est une cycline qui active directement CDK2. À retenir : Des dommages de l’ADN peuvent stabiliser et activer p53."
      },
      {
        "content": "p53 est une sous-unité constitutive de l’ATP synthase.",
        "correct": true,
        "explanation": "Incorrect : p53 est une sous-unité constitutive de l’ATP synthase. À retenir : p53 peut stimuler la transcription du gène codant p21."
      },
      {
        "content": "Des dommages de l’ADN peuvent stabiliser et activer p53.",
        "correct": false,
        "explanation": "Exact : Des dommages de l’ADN peuvent stabiliser et activer p53. En réponse à des dommages de l’ADN, p53 peut être stabilisée et induire l’expression de p21. p21 inhibe des complexes cycline-CDK et contribue à bloquer l’entrée en phase S, laissant du temps à la réparation ou favorisant d’autres réponses si les dommages persistent."
      }
    ],
    "explanation": "En réponse à des dommages de l’ADN, p53 peut être stabilisée et induire l’expression de p21. p21 inhibe des complexes cycline-CDK et contribue à bloquer l’entrée en phase S, laissant du temps à la réparation ou favorisant d’autres réponses si les dommages persistent. Ici, il fallait sélectionner les affirmations incorrectes."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle proposition est compatible avec les mécanismes de « p16 et CDK4/6 » ?",
    "choices": [
      {
        "content": "p16 active directement CDK4 et CDK6.",
        "correct": false,
        "explanation": "Incorrect : p16 active directement CDK4 et CDK6. À retenir : L’activation de p16 peut maintenir Rb dans un état plus inhibiteur vis-à-vis d’E2F."
      },
      {
        "content": "p16 inhibe CDK4 et CDK6.",
        "correct": true,
        "explanation": "Exact : p16 inhibe CDK4 et CDK6. p16INK4A est un inhibiteur de CDK4 et CDK6. Il freine la phosphorylation de Rb et limite ainsi la progression G1/S. Il ne doit pas être confondu avec la réponse aiguë p53-p21 aux dommages de l’ADN."
      },
      {
        "content": "p16 est la principale cycline mitotique associée à CDK1.",
        "correct": false,
        "explanation": "Incorrect : p16 est la principale cycline mitotique associée à CDK1. À retenir : p16 inhibe CDK4 et CDK6."
      },
      {
        "content": "p16 est l’enzyme qui clive les cohésines en anaphase.",
        "correct": false,
        "explanation": "Incorrect : p16 est l’enzyme qui clive les cohésines en anaphase. À retenir : p16 appartient à la famille des inhibiteurs INK4."
      },
      {
        "content": "p16 et cycline B désignent la même protéine.",
        "correct": false,
        "explanation": "Incorrect : p16 et cycline B désignent la même protéine. À retenir : Une augmentation de p16 peut freiner la progression en G1."
      }
    ],
    "explanation": "p16INK4A est un inhibiteur de CDK4 et CDK6. Il freine la phosphorylation de Rb et limite ainsi la progression G1/S. Il ne doit pas être confondu avec la réponse aiguë p53-p21 aux dommages de l’ADN."
  },
  {
    "order": 48,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Sur le thème « Contrôle G2/M, Cdc25 et Wee1 », sélectionnez exactement 3 propositions exactes.",
    "choices": [
      {
        "content": "Wee1 peut maintenir CDK1 dans un état inhibé par phosphorylation.",
        "correct": true,
        "explanation": "Exact : Wee1 peut maintenir CDK1 dans un état inhibé par phosphorylation. L’entrée en mitose repose sur l’activation de CDK1. Wee1 ajoute une phosphorylation inhibitrice à CDK1, tandis que Cdc25 retire cette phosphorylation. Les voies de dommages de l’ADN peuvent inhiber Cdc25 et maintenir l’arrêt G2/M."
      },
      {
        "content": "Des lésions de l’ADN peuvent inhiber Cdc25.",
        "correct": true,
        "explanation": "Exact : Des lésions de l’ADN peuvent inhiber Cdc25. L’entrée en mitose repose sur l’activation de CDK1. Wee1 ajoute une phosphorylation inhibitrice à CDK1, tandis que Cdc25 retire cette phosphorylation. Les voies de dommages de l’ADN peuvent inhiber Cdc25 et maintenir l’arrêt G2/M."
      },
      {
        "content": "Cdc25 est une ubiquitine ligase qui détruit la sécurine.",
        "correct": false,
        "explanation": "Incorrect : Cdc25 est une ubiquitine ligase qui détruit la sécurine. À retenir : Cdc25 est une phosphatase qui favorise l’activation de CDK1."
      },
      {
        "content": "Wee1 active CDK1 en retirant son phosphate inhibiteur.",
        "correct": false,
        "explanation": "Incorrect : Wee1 active CDK1 en retirant son phosphate inhibiteur. À retenir : Wee1 peut maintenir CDK1 dans un état inhibé par phosphorylation."
      },
      {
        "content": "Cdc25 est une phosphatase qui favorise l’activation de CDK1.",
        "correct": true,
        "explanation": "Exact : Cdc25 est une phosphatase qui favorise l’activation de CDK1. L’entrée en mitose repose sur l’activation de CDK1. Wee1 ajoute une phosphorylation inhibitrice à CDK1, tandis que Cdc25 retire cette phosphorylation. Les voies de dommages de l’ADN peuvent inhiber Cdc25 et maintenir l’arrêt G2/M."
      }
    ],
    "explanation": "L’entrée en mitose repose sur l’activation de CDK1. Wee1 ajoute une phosphorylation inhibitrice à CDK1, tandis que Cdc25 retire cette phosphorylation. Les voies de dommages de l’ADN peuvent inhiber Cdc25 et maintenir l’arrêt G2/M."
  },
  {
    "order": 49,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes sur « CAK et activation des CDK », cinq sont exactes : sélectionnez-les.",
    "choices": [
      {
        "content": "CAK est une phosphatase qui détruit les microtubules du fuseau.",
        "correct": false,
        "explanation": "Incorrect : CAK est une phosphatase qui détruit les microtubules du fuseau. À retenir : CAK signifie CDK-activating kinase."
      },
      {
        "content": "CAK signifie CDK-activating kinase.",
        "correct": true,
        "explanation": "Exact : CAK signifie CDK-activating kinase. La CAK (CDK-activating kinase) ajoute une phosphorylation activatrice sur certaines CDK. L’activité finale de CDK1 dépend à la fois de cette activation, de l’association à la cycline B et du retrait de phosphorylations inhibitrices par Cdc25."
      },
      {
        "content": "CAK désigne un type de chromatide sœur.",
        "correct": false,
        "explanation": "Incorrect : CAK désigne un type de chromatide sœur. À retenir : CAK peut phosphoryler un site activateur d’une CDK."
      },
      {
        "content": "L’activité de CDK1 résulte de plusieurs niveaux de régulation.",
        "correct": true,
        "explanation": "Exact : L’activité de CDK1 résulte de plusieurs niveaux de régulation. La CAK (CDK-activating kinase) ajoute une phosphorylation activatrice sur certaines CDK. L’activité finale de CDK1 dépend à la fois de cette activation, de l’association à la cycline B et du retrait de phosphorylations inhibitrices par Cdc25."
      },
      {
        "content": "L’activité de CDK1 ne dépend jamais de phosphorylations.",
        "correct": false,
        "explanation": "Incorrect : L’activité de CDK1 ne dépend jamais de phosphorylations. À retenir : L’activité de CDK1 résulte de plusieurs niveaux de régulation."
      },
      {
        "content": "La cycline B est une enzyme E3 du protéasome.",
        "correct": false,
        "explanation": "Incorrect : La cycline B est une enzyme E3 du protéasome. À retenir : Cdc25 et Wee1 exercent des effets opposés sur l’état de phosphorylation inhibitrice de CDK1."
      },
      {
        "content": "L’association à la cycline B ne suffit pas à résumer toute la régulation de CDK1.",
        "correct": true,
        "explanation": "Exact : L’association à la cycline B ne suffit pas à résumer toute la régulation de CDK1. La CAK (CDK-activating kinase) ajoute une phosphorylation activatrice sur certaines CDK. L’activité finale de CDK1 dépend à la fois de cette activation, de l’association à la cycline B et du retrait de phosphorylations inhibitrices par Cdc25."
      },
      {
        "content": "Cdc25 et Wee1 exercent des effets opposés sur l’état de phosphorylation inhibitrice de CDK1.",
        "correct": true,
        "explanation": "Exact : Cdc25 et Wee1 exercent des effets opposés sur l’état de phosphorylation inhibitrice de CDK1. La CAK (CDK-activating kinase) ajoute une phosphorylation activatrice sur certaines CDK. L’activité finale de CDK1 dépend à la fois de cette activation, de l’association à la cycline B et du retrait de phosphorylations inhibitrices par Cdc25."
      },
      {
        "content": "Wee1 et Cdc25 activent CDK1 exactement par le même mécanisme.",
        "correct": false,
        "explanation": "Incorrect : Wee1 et Cdc25 activent CDK1 exactement par le même mécanisme. À retenir : L’association à la cycline B ne suffit pas à résumer toute la régulation de CDK1."
      },
      {
        "content": "CAK peut phosphoryler un site activateur d’une CDK.",
        "correct": true,
        "explanation": "Exact : CAK peut phosphoryler un site activateur d’une CDK. La CAK (CDK-activating kinase) ajoute une phosphorylation activatrice sur certaines CDK. L’activité finale de CDK1 dépend à la fois de cette activation, de l’association à la cycline B et du retrait de phosphorylations inhibitrices par Cdc25."
      }
    ],
    "explanation": "La CAK (CDK-activating kinase) ajoute une phosphorylation activatrice sur certaines CDK. L’activité finale de CDK1 dépend à la fois de cette activation, de l’association à la cycline B et du retrait de phosphorylations inhibitrices par Cdc25."
  },
  {
    "order": 50,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles affirmations décrivent correctement « Protéolyse et transitions » ?",
    "choices": [
      {
        "content": "APC/C-Cdc20 est activé par les kinétochores non attachés pour déclencher immédiatement l’anaphase.",
        "correct": false,
        "explanation": "Incorrect : APC/C-Cdc20 est activé par les kinétochores non attachés pour déclencher immédiatement l’anaphase. À retenir : La protéolyse contrôlée participe à l’irréversibilité de certaines transitions du cycle."
      },
      {
        "content": "Le protéasome réplique les chromosomes avant la phase S.",
        "correct": false,
        "explanation": "Incorrect : Le protéasome réplique les chromosomes avant la phase S. À retenir : La dégradation de cycline B favorise la diminution de l’activité CDK1."
      },
      {
        "content": "La dégradation de cycline B favorise la diminution de l’activité CDK1.",
        "correct": true,
        "explanation": "Exact : La dégradation de cycline B favorise la diminution de l’activité CDK1. Le système ubiquitine-protéasome impose la disparition de régulateurs à des moments précis. L’APC/C est une E3 ubiquitine ligase essentielle pour l’anaphase et la sortie de mitose."
      },
      {
        "content": "La dégradation de la sécurine permet l’activation de la séparase.",
        "correct": true,
        "explanation": "Exact : La dégradation de la sécurine permet l’activation de la séparase. Le système ubiquitine-protéasome impose la disparition de régulateurs à des moments précis. L’APC/C est une E3 ubiquitine ligase essentielle pour l’anaphase et la sortie de mitose."
      },
      {
        "content": "APC/C-Cdc20 contribue à la dégradation de la sécurine.",
        "correct": true,
        "explanation": "Exact : APC/C-Cdc20 contribue à la dégradation de la sécurine. Le système ubiquitine-protéasome impose la disparition de régulateurs à des moments précis. L’APC/C est une E3 ubiquitine ligase essentielle pour l’anaphase et la sortie de mitose."
      }
    ],
    "explanation": "Le système ubiquitine-protéasome impose la disparition de régulateurs à des moments précis. L’APC/C est une E3 ubiquitine ligase essentielle pour l’anaphase et la sortie de mitose."
  },
  {
    "order": 51,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles affirmations décrivent correctement « Point de restriction et mitogènes » ?",
    "choices": [
      {
        "content": "La taille et l’état métabolique de la cellule peuvent influencer l’engagement dans le cycle.",
        "correct": true,
        "explanation": "Exact : La taille et l’état métabolique de la cellule peuvent influencer l’engagement dans le cycle. Avant le point de restriction en G1, la progression dépend fortement des signaux mitogènes et de l’état de la cellule. Après engagement, la cellule est moins dépendante de ces signaux pour achever le cycle en cours."
      },
      {
        "content": "Une cellule privée de facteurs de croissance en G1 précoce doit obligatoirement entrer en mitose.",
        "correct": false,
        "explanation": "Incorrect : Une cellule privée de facteurs de croissance en G1 précoce doit obligatoirement entrer en mitose. À retenir : La taille et l’état métabolique de la cellule peuvent influencer l’engagement dans le cycle."
      },
      {
        "content": "Le point de restriction se situe normalement après la télophase mais avant la cytodiérèse.",
        "correct": false,
        "explanation": "Incorrect : Le point de restriction se situe normalement après la télophase mais avant la cytodiérèse. À retenir : Le point de restriction se situe en G1 avant l’entrée en phase S."
      },
      {
        "content": "Dans une cellule somatique, le point de restriction se situe en G1 avant l’entrée en phase S.",
        "correct": true,
        "explanation": "Exact : Le point de restriction se situe en G1 avant l’entrée en phase S. Avant le point de restriction en G1, la progression dépend fortement des signaux mitogènes et de l’état de la cellule. Après engagement, la cellule est moins dépendante de ces signaux pour achever le cycle en cours."
      },
      {
        "content": "Dans une cellule somatique, une privation de mitogènes en G1 précoce peut favoriser la quiescence.",
        "correct": true,
        "explanation": "Exact : Une privation de mitogènes en G1 précoce peut favoriser la quiescence. Avant le point de restriction en G1, la progression dépend fortement des signaux mitogènes et de l’état de la cellule. Après engagement, la cellule est moins dépendante de ces signaux pour achever le cycle en cours."
      }
    ],
    "explanation": "Avant le point de restriction en G1, la progression dépend fortement des signaux mitogènes et de l’état de la cellule. Après engagement, la cellule est moins dépendante de ces signaux pour achever le cycle en cours."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour le thème « Dommages de l’ADN, p53 et p21 », quelles propositions doivent être retenues ?",
    "choices": [
      {
        "content": "L’activation de p21 peut freiner la transition G1/S.",
        "correct": true,
        "explanation": "Exact : L’activation de p21 peut freiner la transition G1/S. En réponse à des dommages de l’ADN, p53 peut être stabilisée et induire l’expression de p21. p21 inhibe des complexes cycline-CDK et contribue à bloquer l’entrée en phase S, laissant du temps à la réparation ou favorisant d’autres réponses si les dommages persistent."
      },
      {
        "content": "Dans une cellule somatique, p21 est un inhibiteur de complexes cycline-CDK.",
        "correct": true,
        "explanation": "Exact : p21 est un inhibiteur de complexes cycline-CDK. En réponse à des dommages de l’ADN, p53 peut être stabilisée et induire l’expression de p21. p21 inhibe des complexes cycline-CDK et contribue à bloquer l’entrée en phase S, laissant du temps à la réparation ou favorisant d’autres réponses si les dommages persistent."
      },
      {
        "content": "p21 active directement la séparase en métaphase.",
        "correct": false,
        "explanation": "Incorrect : p21 active directement la séparase en métaphase. À retenir : L’activation de p21 peut freiner la transition G1/S."
      },
      {
        "content": "Dans une cellule somatique, p53 peut stimuler la transcription du gène codant p21.",
        "correct": true,
        "explanation": "Exact : p53 peut stimuler la transcription du gène codant p21. En réponse à des dommages de l’ADN, p53 peut être stabilisée et induire l’expression de p21. p21 inhibe des complexes cycline-CDK et contribue à bloquer l’entrée en phase S, laissant du temps à la réparation ou favorisant d’autres réponses si les dommages persistent."
      },
      {
        "content": "Des dommages de l’ADN doivent toujours accélérer l’entrée en phase S.",
        "correct": false,
        "explanation": "Incorrect : Des dommages de l’ADN doivent toujours accélérer l’entrée en phase S. À retenir : p21 est un inhibiteur de complexes cycline-CDK."
      }
    ],
    "explanation": "En réponse à des dommages de l’ADN, p53 peut être stabilisée et induire l’expression de p21. p21 inhibe des complexes cycline-CDK et contribue à bloquer l’entrée en phase S, laissant du temps à la réparation ou favorisant d’autres réponses si les dommages persistent."
  },
  {
    "order": 53,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle kinase maintient CDK1 inhibée en ajoutant une phosphorylation inhibitrice ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Wee1",
        "WEE1"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Wee1 phosphoryle CDK1 sur un site inhibiteur et s’oppose ainsi à l’entrée en mitose."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Sélectionnez les affirmations compatibles avec « p16 et CDK4/6 ».",
    "choices": [
      {
        "content": "p16 appartient à la famille des inhibiteurs INK4.",
        "correct": true,
        "explanation": "Exact : p16 appartient à la famille des inhibiteurs INK4. p16INK4A est un inhibiteur de CDK4 et CDK6. Il freine la phosphorylation de Rb et limite ainsi la progression G1/S. Il ne doit pas être confondu avec la réponse aiguë p53-p21 aux dommages de l’ADN."
      },
      {
        "content": "Dans une cellule somatique, p16 est l’enzyme qui clive les cohésines en anaphase.",
        "correct": false,
        "explanation": "Incorrect : p16 est l’enzyme qui clive les cohésines en anaphase. À retenir : p16 appartient à la famille des inhibiteurs INK4."
      },
      {
        "content": "Dans une cellule somatique, p16 et cycline B désignent la même protéine.",
        "correct": false,
        "explanation": "Incorrect : p16 et cycline B désignent la même protéine. À retenir : Une augmentation de p16 peut freiner la progression en G1."
      },
      {
        "content": "p16 est un constituant du microtubule kinétochorien.",
        "correct": false,
        "explanation": "Incorrect : p16 est un constituant du microtubule kinétochorien. À retenir : p16 et p21 sont deux inhibiteurs de CDK mais n’ont pas exactement les mêmes cibles."
      },
      {
        "content": "L’activation de p16 peut maintenir Rb dans un état plus inhibiteur vis-à-vis d’E2F.",
        "correct": true,
        "explanation": "Exact : L’activation de p16 peut maintenir Rb dans un état plus inhibiteur vis-à-vis d’E2F. p16INK4A est un inhibiteur de CDK4 et CDK6. Il freine la phosphorylation de Rb et limite ainsi la progression G1/S. Il ne doit pas être confondu avec la réponse aiguë p53-p21 aux dommages de l’ADN."
      }
    ],
    "explanation": "p16INK4A est un inhibiteur de CDK4 et CDK6. Il freine la phosphorylation de Rb et limite ainsi la progression G1/S. Il ne doit pas être confondu avec la réponse aiguë p53-p21 aux dommages de l’ADN."
  },
  {
    "order": 55,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel suppresseur de tumeur peut induire p21 après détection de dommages de l’ADN ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "p53",
        "TP53"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "p53 peut stimuler l’expression de p21 et contribuer à l’arrêt du cycle après dommage de l’ADN."
  },
  {
    "order": 56,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Contrôle G2/M, Cdc25 et Wee1 », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Des lésions de l’ADN peuvent inhiber Cdc25.",
        "correct": true,
        "explanation": "Exact : Des lésions de l’ADN peuvent inhiber Cdc25. L’entrée en mitose repose sur l’activation de CDK1. Wee1 ajoute une phosphorylation inhibitrice à CDK1, tandis que Cdc25 retire cette phosphorylation. Les voies de dommages de l’ADN peuvent inhiber Cdc25 et maintenir l’arrêt G2/M."
      },
      {
        "content": "La transition G2/M est indépendante de l’état de la réplication.",
        "correct": false,
        "explanation": "Incorrect : La transition G2/M est indépendante de l’état de la réplication. À retenir : Une réplication incomplète peut empêcher l’activation complète de la machinerie mitotique."
      },
      {
        "content": "Un ADN endommagé doit activer immédiatement cycline B-CDK1 au maximum.",
        "correct": false,
        "explanation": "Incorrect : Un ADN endommagé doit activer immédiatement cycline B-CDK1 au maximum. À retenir : Des lésions de l’ADN peuvent inhiber Cdc25."
      },
      {
        "content": "CDK1 n’intervient pas dans l’entrée en mitose.",
        "correct": false,
        "explanation": "Incorrect : CDK1 n’intervient pas dans l’entrée en mitose. À retenir : L’activation de cycline B-CDK1 est au cœur de la transition G2/M."
      },
      {
        "content": "Cdc25 est une phosphatase qui favorise l’activation de CDK1.",
        "correct": true,
        "explanation": "Exact : Cdc25 est une phosphatase qui favorise l’activation de CDK1. L’entrée en mitose repose sur l’activation de CDK1. Wee1 ajoute une phosphorylation inhibitrice à CDK1, tandis que Cdc25 retire cette phosphorylation. Les voies de dommages de l’ADN peuvent inhiber Cdc25 et maintenir l’arrêt G2/M."
      }
    ],
    "explanation": "L’entrée en mitose repose sur l’activation de CDK1. Wee1 ajoute une phosphorylation inhibitrice à CDK1, tandis que Cdc25 retire cette phosphorylation. Les voies de dommages de l’ADN peuvent inhiber Cdc25 et maintenir l’arrêt G2/M."
  },
  {
    "order": 57,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de « CAK et activation des CDK », sélectionnez les propositions exactes.",
    "choices": [
      {
        "content": "L’activité de CDK1 ne dépend jamais de phosphorylations.",
        "correct": false,
        "explanation": "Incorrect : L’activité de CDK1 ne dépend jamais de phosphorylations. À retenir : L’activité de CDK1 résulte de plusieurs niveaux de régulation."
      },
      {
        "content": "L’activité de CDK1 résulte de plusieurs niveaux de régulation.",
        "correct": true,
        "explanation": "Exact : L’activité de CDK1 résulte de plusieurs niveaux de régulation. La CAK (CDK-activating kinase) ajoute une phosphorylation activatrice sur certaines CDK. L’activité finale de CDK1 dépend à la fois de cette activation, de l’association à la cycline B et du retrait de phosphorylations inhibitrices par Cdc25."
      },
      {
        "content": "CAK peut phosphoryler un site activateur d’une CDK.",
        "correct": true,
        "explanation": "Exact : CAK peut phosphoryler un site activateur d’une CDK. La CAK (CDK-activating kinase) ajoute une phosphorylation activatrice sur certaines CDK. L’activité finale de CDK1 dépend à la fois de cette activation, de l’association à la cycline B et du retrait de phosphorylations inhibitrices par Cdc25."
      },
      {
        "content": "Cdc25 et Wee1 exercent des effets opposés sur l’état de phosphorylation inhibitrice de CDK1.",
        "correct": true,
        "explanation": "Exact : Cdc25 et Wee1 exercent des effets opposés sur l’état de phosphorylation inhibitrice de CDK1. La CAK (CDK-activating kinase) ajoute une phosphorylation activatrice sur certaines CDK. L’activité finale de CDK1 dépend à la fois de cette activation, de l’association à la cycline B et du retrait de phosphorylations inhibitrices par Cdc25."
      },
      {
        "content": "L’association à la cycline B ne suffit pas à résumer toute la régulation de CDK1.",
        "correct": true,
        "explanation": "Exact : L’association à la cycline B ne suffit pas à résumer toute la régulation de CDK1. La CAK (CDK-activating kinase) ajoute une phosphorylation activatrice sur certaines CDK. L’activité finale de CDK1 dépend à la fois de cette activation, de l’association à la cycline B et du retrait de phosphorylations inhibitrices par Cdc25."
      }
    ],
    "explanation": "La CAK (CDK-activating kinase) ajoute une phosphorylation activatrice sur certaines CDK. L’activité finale de CDK1 dépend à la fois de cette activation, de l’association à la cycline B et du retrait de phosphorylations inhibitrices par Cdc25."
  },
  {
    "order": 58,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Parmi les propositions ci-dessous relatives à « Protéolyse et transitions », laquelle est correcte ?",
    "choices": [
      {
        "content": "La dégradation de cycline B maintient CDK1 pleinement active.",
        "correct": false,
        "explanation": "Incorrect : La dégradation de cycline B maintient CDK1 pleinement active. À retenir : La dégradation de la sécurine permet l’activation de la séparase."
      },
      {
        "content": "L’APC/C est une ADN polymérase.",
        "correct": false,
        "explanation": "Incorrect : L’APC/C est une ADN polymérase. À retenir : L’ubiquitination peut cibler une protéine régulatrice vers le protéasome."
      },
      {
        "content": "La sécurine active la séparase tant qu’elle lui reste liée.",
        "correct": false,
        "explanation": "Incorrect : La sécurine active la séparase tant qu’elle lui reste liée. À retenir : APC/C-Cdc20 contribue à la dégradation de la sécurine."
      },
      {
        "content": "L’ubiquitination protège toujours une protéine de toute dégradation.",
        "correct": false,
        "explanation": "Incorrect : L’ubiquitination protège toujours une protéine de toute dégradation. À retenir : L’APC/C est une ubiquitine ligase E3."
      },
      {
        "content": "La dégradation de la sécurine permet l’activation de la séparase.",
        "correct": true,
        "explanation": "Exact : La dégradation de la sécurine permet l’activation de la séparase. Le système ubiquitine-protéasome impose la disparition de régulateurs à des moments précis. L’APC/C est une E3 ubiquitine ligase essentielle pour l’anaphase et la sortie de mitose."
      }
    ],
    "explanation": "Le système ubiquitine-protéasome impose la disparition de régulateurs à des moments précis. L’APC/C est une E3 ubiquitine ligase essentielle pour l’anaphase et la sortie de mitose."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions ci-dessous relatives à « Point de restriction et mitogènes », laquelle est correcte ?",
    "choices": [
      {
        "content": "Le point de restriction double directement la quantité d’ADN de 2C à 4C.",
        "correct": false,
        "explanation": "Incorrect : Le point de restriction double directement la quantité d’ADN de 2C à 4C. À retenir : Après franchissement du point de restriction, la cellule est davantage engagée vers la réplication."
      },
      {
        "content": "Les mitogènes n’ont aucun effet sur l’entrée en cycle des cellules mammaliennes.",
        "correct": false,
        "explanation": "Incorrect : Les mitogènes n’ont aucun effet sur l’entrée en cycle des cellules mammaliennes. À retenir : Une privation de mitogènes en G1 précoce peut favoriser la quiescence."
      },
      {
        "content": "Le point de restriction se situe en G1 avant l’entrée en phase S.",
        "correct": true,
        "explanation": "Exact : Le point de restriction se situe en G1 avant l’entrée en phase S. Avant le point de restriction en G1, la progression dépend fortement des signaux mitogènes et de l’état de la cellule. Après engagement, la cellule est moins dépendante de ces signaux pour achever le cycle en cours."
      },
      {
        "content": "Le point de restriction est un contrôle spécifique de l’attachement des kinétochores en métaphase.",
        "correct": false,
        "explanation": "Incorrect : Le point de restriction est un contrôle spécifique de l’attachement des kinétochores en métaphase. À retenir : Les facteurs de croissance jouent un rôle particulièrement important avant le point de restriction."
      },
      {
        "content": "La progression en G1 est indépendante de l’état nutritionnel de la cellule.",
        "correct": false,
        "explanation": "Incorrect : La progression en G1 est indépendante de l’état nutritionnel de la cellule. À retenir : La voie cycline D-CDK4/6 participe à la réponse aux mitogènes."
      }
    ],
    "explanation": "Avant le point de restriction en G1, la progression dépend fortement des signaux mitogènes et de l’état de la cellule. Après engagement, la cellule est moins dépendante de ces signaux pour achever le cycle en cours."
  },
  {
    "order": 60,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel inhibiteur de CDK est une cible transcriptionnelle classique de p53 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "p21",
        "CDKN1A"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "p21, codée par CDKN1A, inhibe plusieurs complexes cycline-CDK et peut bloquer la transition G1/S."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition est compatible avec les mécanismes de « Dommages de l’ADN, p53 et p21 » ?",
    "choices": [
      {
        "content": "p21 est une cycline qui active directement CDK2.",
        "correct": false,
        "explanation": "Incorrect : p21 est une cycline qui active directement CDK2. À retenir : Des dommages de l’ADN peuvent stabiliser et activer p53."
      },
      {
        "content": "p53 est une sous-unité constitutive de l’ATP synthase.",
        "correct": false,
        "explanation": "Incorrect : p53 est une sous-unité constitutive de l’ATP synthase. À retenir : p53 peut stimuler la transcription du gène codant p21."
      },
      {
        "content": "p53 ne peut influencer aucune transcription.",
        "correct": false,
        "explanation": "Incorrect : p53 ne peut influencer aucune transcription. À retenir : Un arrêt du cycle peut laisser du temps aux systèmes de réparation de l’ADN."
      },
      {
        "content": "p21 est un inhibiteur de complexes cycline-CDK.",
        "correct": true,
        "explanation": "Exact : p21 est un inhibiteur de complexes cycline-CDK. En réponse à des dommages de l’ADN, p53 peut être stabilisée et induire l’expression de p21. p21 inhibe des complexes cycline-CDK et contribue à bloquer l’entrée en phase S, laissant du temps à la réparation ou favorisant d’autres réponses si les dommages persistent."
      },
      {
        "content": "L’arrêt G1/S empêche toute possibilité de réparation de l’ADN.",
        "correct": false,
        "explanation": "Incorrect : L’arrêt G1/S empêche toute possibilité de réparation de l’ADN. À retenir : Si les dommages sont trop importants, p53 peut aussi contribuer à des programmes de sénescence ou d’apoptose."
      }
    ],
    "explanation": "En réponse à des dommages de l’ADN, p53 peut être stabilisée et induire l’expression de p21. p21 inhibe des complexes cycline-CDK et contribue à bloquer l’entrée en phase S, laissant du temps à la réparation ou favorisant d’autres réponses si les dommages persistent."
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sur le thème « p16 et CDK4/6 », sélectionnez exactement 2 propositions exactes.",
    "choices": [
      {
        "content": "p16 active directement CDK4 et CDK6.",
        "correct": false,
        "explanation": "Incorrect : p16 active directement CDK4 et CDK6. À retenir : L’activation de p16 peut maintenir Rb dans un état plus inhibiteur vis-à-vis d’E2F."
      },
      {
        "content": "p16 appartient à la famille des inhibiteurs INK4.",
        "correct": true,
        "explanation": "Exact : p16 appartient à la famille des inhibiteurs INK4. p16INK4A est un inhibiteur de CDK4 et CDK6. Il freine la phosphorylation de Rb et limite ainsi la progression G1/S. Il ne doit pas être confondu avec la réponse aiguë p53-p21 aux dommages de l’ADN."
      },
      {
        "content": "Une augmentation de p16 peut freiner la progression en G1.",
        "correct": true,
        "explanation": "Exact : Une augmentation de p16 peut freiner la progression en G1. p16INK4A est un inhibiteur de CDK4 et CDK6. Il freine la phosphorylation de Rb et limite ainsi la progression G1/S. Il ne doit pas être confondu avec la réponse aiguë p53-p21 aux dommages de l’ADN."
      },
      {
        "content": "p16 est un constituant du microtubule kinétochorien.",
        "correct": false,
        "explanation": "Incorrect : p16 est un constituant du microtubule kinétochorien. À retenir : p16 et p21 sont deux inhibiteurs de CDK mais n’ont pas exactement les mêmes cibles."
      },
      {
        "content": "p16 est la principale cycline mitotique associée à CDK1.",
        "correct": false,
        "explanation": "Incorrect : p16 est la principale cycline mitotique associée à CDK1. À retenir : p16 inhibe CDK4 et CDK6."
      }
    ],
    "explanation": "p16INK4A est un inhibiteur de CDK4 et CDK6. Il freine la phosphorylation de Rb et limite ainsi la progression G1/S. Il ne doit pas être confondu avec la réponse aiguë p53-p21 aux dommages de l’ADN."
  },
  {
    "order": 63,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel inhibiteur de CDK de la famille INK4 cible préférentiellement CDK4 et CDK6 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "p16",
        "p16INK4A",
        "p16 INK4A",
        "CDKN2A"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "p16INK4A inhibe CDK4/6 et freine la phosphorylation de Rb."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de « Contrôle G2/M, Cdc25 et Wee1 », sélectionnez les propositions exactes.",
    "choices": [
      {
        "content": "Le contrôle G2/M protège contre l’entrée en mitose avec un génome insuffisamment répliqué ou endommagé.",
        "correct": true,
        "explanation": "Exact : Le contrôle G2/M protège contre l’entrée en mitose avec un génome insuffisamment répliqué ou endommagé. L’entrée en mitose repose sur l’activation de CDK1. Wee1 ajoute une phosphorylation inhibitrice à CDK1, tandis que Cdc25 retire cette phosphorylation. Les voies de dommages de l’ADN peuvent inhiber Cdc25 et maintenir l’arrêt G2/M."
      },
      {
        "content": "L’activation de cycline B-CDK1 est au cœur de la transition G2/M.",
        "correct": true,
        "explanation": "Exact : L’activation de cycline B-CDK1 est au cœur de la transition G2/M. L’entrée en mitose repose sur l’activation de CDK1. Wee1 ajoute une phosphorylation inhibitrice à CDK1, tandis que Cdc25 retire cette phosphorylation. Les voies de dommages de l’ADN peuvent inhiber Cdc25 et maintenir l’arrêt G2/M."
      },
      {
        "content": "Dans une cellule somatique, cDK1 n’intervient pas dans l’entrée en mitose.",
        "correct": false,
        "explanation": "Incorrect : CDK1 n’intervient pas dans l’entrée en mitose. À retenir : L’activation de cycline B-CDK1 est au cœur de la transition G2/M."
      },
      {
        "content": "Une réplication incomplète peut empêcher l’activation complète de la machinerie mitotique.",
        "correct": true,
        "explanation": "Exact : Une réplication incomplète peut empêcher l’activation complète de la machinerie mitotique. L’entrée en mitose repose sur l’activation de CDK1. Wee1 ajoute une phosphorylation inhibitrice à CDK1, tandis que Cdc25 retire cette phosphorylation. Les voies de dommages de l’ADN peuvent inhiber Cdc25 et maintenir l’arrêt G2/M."
      },
      {
        "content": "Dans une cellule somatique, des lésions de l’ADN peuvent inhiber Cdc25.",
        "correct": true,
        "explanation": "Exact : Des lésions de l’ADN peuvent inhiber Cdc25. L’entrée en mitose repose sur l’activation de CDK1. Wee1 ajoute une phosphorylation inhibitrice à CDK1, tandis que Cdc25 retire cette phosphorylation. Les voies de dommages de l’ADN peuvent inhiber Cdc25 et maintenir l’arrêt G2/M."
      }
    ],
    "explanation": "L’entrée en mitose repose sur l’activation de CDK1. Wee1 ajoute une phosphorylation inhibitrice à CDK1, tandis que Cdc25 retire cette phosphorylation. Les voies de dommages de l’ADN peuvent inhiber Cdc25 et maintenir l’arrêt G2/M."
  },
  {
    "order": 65,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Comment nomme-t-on la structure protéique assemblée sur le centromère qui attache les microtubules du fuseau ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "kinétochore",
        "kinetochore"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le kinétochore est la plateforme d’attachement des microtubules sur la région centromérique."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel complexe de surveillance bloque l’anaphase tant que des kinétochores ne sont pas correctement attachés ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "checkpoint du fuseau",
        "spindle assembly checkpoint",
        "SAC",
        "checkpoint d'assemblage du fuseau"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le SAC retarde l’activation d’APC/C-Cdc20 tant que subsistent des attachements incorrects."
  }
];
