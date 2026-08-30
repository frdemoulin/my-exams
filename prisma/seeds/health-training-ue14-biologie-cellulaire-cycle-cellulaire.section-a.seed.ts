import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch9 — Renouvellement, interphase et quantité d’ADN — V2 active */
export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de « Renouvellement tissulaire et homéostasie », repérez la seule affirmation correcte.",
    "choices": [
      {
        "content": "L’homéostasie tissulaire exige que 100 % des cellules soient simultanément en phase S.",
        "correct": false,
        "explanation": "Incorrect : L’homéostasie tissulaire exige que 100 % des cellules soient simultanément en phase S. À retenir : Une lésion peut stimuler la réentrée en cycle de certaines cellules normalement peu prolifératives."
      },
      {
        "content": "Un tissu sain maintient son nombre de cellules uniquement en bloquant toute apoptose.",
        "correct": false,
        "explanation": "Incorrect : Un tissu sain maintient son nombre de cellules uniquement en bloquant toute apoptose. À retenir : La durée de vie des cellules varie selon le type cellulaire."
      },
      {
        "content": "Dans un tissu sain, le nombre de cellules résulte d’un équilibre entre production et élimination cellulaires.",
        "correct": true,
        "explanation": "Exact : Dans un tissu sain, le nombre de cellules résulte d’un équilibre entre production et élimination cellulaires. Dans un tissu sain, la prolifération, la différenciation et la mort cellulaire sont coordonnées afin de maintenir l’homéostasie. Les rythmes de renouvellement varient fortement selon les tissus."
      },
      {
        "content": "Toutes les cellules d’un organisme ont la même durée de vie.",
        "correct": false,
        "explanation": "Incorrect : Toutes les cellules d’un organisme ont la même durée de vie. À retenir : Dans un tissu sain, le nombre de cellules résulte d’un équilibre entre production et élimination cellulaires."
      },
      {
        "content": "Toute cellule différenciée est obligatoirement incapable de réentrer en cycle.",
        "correct": false,
        "explanation": "Incorrect : Toute cellule différenciée est obligatoirement incapable de réentrer en cycle. À retenir : Une fraction de cellules peut être quiescente tandis qu’une autre prolifère."
      }
    ],
    "explanation": "Dans un tissu sain, la prolifération, la différenciation et la mort cellulaire sont coordonnées afin de maintenir l’homéostasie. Les rythmes de renouvellement varient fortement selon les tissus."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment nomme-t-on l’état quiescent dans lequel une cellule peut sortir du cycle prolifératif actif ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "G0",
        "phase G0"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "G0 correspond à un état de quiescence ; certaines cellules peuvent réentrer en cycle en réponse à des signaux adaptés."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans le cadre de « Prolifération tumorale », identifiez l’affirmation correcte.",
    "choices": [
      {
        "content": "Une tumeur peut associer augmentation de la prolifération et diminution de l’élimination cellulaire.",
        "correct": true,
        "explanation": "Exact : Une tumeur peut associer augmentation de la prolifération et diminution de l’élimination cellulaire. Les tissus tumoraux présentent une dérégulation de la prolifération et de la survie cellulaire. Les temps de doublement mesurés in vitro dépendent de la lignée et des conditions de culture."
      },
      {
        "content": "Une lignée cultivée in vitro reproduit toujours exactement la vitesse de croissance d’une tumeur chez le patient.",
        "correct": false,
        "explanation": "Incorrect : Une lignée cultivée in vitro reproduit toujours exactement la vitesse de croissance d’une tumeur chez le patient. À retenir : Le temps de doublement d’une lignée cellulaire dépend des conditions expérimentales."
      },
      {
        "content": "Un tissu tumoral se caractérise par un arrêt complet de la prolifération.",
        "correct": false,
        "explanation": "Incorrect : Un tissu tumoral se caractérise par un arrêt complet de la prolifération. À retenir : La perte de contrôle des points de surveillance favorise une prolifération anormale."
      },
      {
        "content": "Toutes les cellules cancéreuses ont exactement le même temps de doublement.",
        "correct": false,
        "explanation": "Incorrect : Toutes les cellules cancéreuses ont exactement le même temps de doublement. À retenir : Une tumeur peut associer augmentation de la prolifération et diminution de l’élimination cellulaire."
      },
      {
        "content": "La transformation tumorale améliore nécessairement tous les mécanismes de contrôle du cycle.",
        "correct": false,
        "explanation": "Incorrect : La transformation tumorale améliore nécessairement tous les mécanismes de contrôle du cycle. À retenir : Des lignées tumorales cultivées in vitro peuvent avoir des temps de doublement proches d’une journée."
      }
    ],
    "explanation": "Les tissus tumoraux présentent une dérégulation de la prolifération et de la survie cellulaire. Les temps de doublement mesurés in vitro dépendent de la lignée et des conditions de culture."
  },
  {
    "order": 4,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Organisation générale du cycle », lesquelles sont incorrectes ?",
    "choices": [
      {
        "content": "La réplication de l’ADN a lieu principalement pendant la métaphase.",
        "correct": true,
        "explanation": "Incorrect : La réplication de l’ADN a lieu principalement pendant la métaphase. À retenir : La phase S est la phase de réplication de l’ADN nucléaire."
      },
      {
        "content": "La phase S se situe après la mitose et avant G1.",
        "correct": true,
        "explanation": "Incorrect : La phase S se situe après la mitose et avant G1. À retenir : L’interphase comprend les phases G1, S et G2."
      },
      {
        "content": "G2 précède G1 dans un cycle cellulaire normal.",
        "correct": true,
        "explanation": "Incorrect : G2 précède G1 dans un cycle cellulaire normal. À retenir : La phase M succède à G2."
      },
      {
        "content": "L’interphase comprend les phases G1, S et G2.",
        "correct": false,
        "explanation": "Exact : L’interphase comprend les phases G1, S et G2. Le cycle des cellules prolifératives comprend l’interphase, formée des phases G1, S et G2, puis la phase M. G0 correspond à un état de quiescence hors du cycle prolifératif actif."
      },
      {
        "content": "G0 est une phase obligatoire entre S et G2.",
        "correct": true,
        "explanation": "Incorrect : G0 est une phase obligatoire entre S et G2. À retenir : G1 précède normalement la phase S."
      }
    ],
    "explanation": "Le cycle des cellules prolifératives comprend l’interphase, formée des phases G1, S et G2, puis la phase M. G0 correspond à un état de quiescence hors du cycle prolifératif actif. Ici, il fallait sélectionner les affirmations incorrectes."
  },
  {
    "order": 5,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Parmi ces affirmations concernant « Quantité d’ADN, chromosomes et chromatides », retenez exactement les 3 justes.",
    "choices": [
      {
        "content": "La phase S fait passer une cellule somatique de 2n à 4n chromosomes.",
        "correct": false,
        "explanation": "Incorrect : La phase S fait passer une cellule somatique de 2n à 4n chromosomes. À retenir : En G1, une cellule somatique diploïde possède 2n chromosomes à une chromatide."
      },
      {
        "content": "En G1, la quantité d’ADN est classiquement notée 2C.",
        "correct": true,
        "explanation": "Exact : En G1, la quantité d’ADN est classiquement notée 2C. Dans une cellule somatique diploïde, G1 correspond à 2n chromosomes et 2C d’ADN. Après réplication, G2 comporte toujours 2n chromosomes mais 4C d’ADN, chaque chromosome possédant deux chromatides sœurs."
      },
      {
        "content": "En G1, une cellule somatique diploïde possède 2n chromosomes à une chromatide.",
        "correct": true,
        "explanation": "Exact : En G1, une cellule somatique diploïde possède 2n chromosomes à une chromatide. Dans une cellule somatique diploïde, G1 correspond à 2n chromosomes et 2C d’ADN. Après réplication, G2 comporte toujours 2n chromosomes mais 4C d’ADN, chaque chromosome possédant deux chromatides sœurs."
      },
      {
        "content": "La phase S double la quantité d’ADN sans doubler le nombre de chromosomes.",
        "correct": true,
        "explanation": "Exact : La phase S double la quantité d’ADN sans doubler le nombre de chromosomes. Dans une cellule somatique diploïde, G1 correspond à 2n chromosomes et 2C d’ADN. Après réplication, G2 comporte toujours 2n chromosomes mais 4C d’ADN, chaque chromosome possédant deux chromatides sœurs."
      },
      {
        "content": "En G2, chaque chromosome ne comporte encore qu’une chromatide.",
        "correct": false,
        "explanation": "Incorrect : En G2, chaque chromosome ne comporte encore qu’une chromatide. À retenir : En G1, la quantité d’ADN est classiquement notée 2C."
      }
    ],
    "explanation": "Dans une cellule somatique diploïde, G1 correspond à 2n chromosomes et 2C d’ADN. Après réplication, G2 comporte toujours 2n chromosomes mais 4C d’ADN, chaque chromosome possédant deux chromatides sœurs."
  },
  {
    "order": 6,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Pour « Phase G1 et point de restriction », quelle proposition doit être retenue ?",
    "choices": [
      {
        "content": "La phase G1 suit la mitose et précède la réplication de l’ADN.",
        "correct": true,
        "explanation": "Exact : La phase G1 suit la mitose et précède la réplication de l’ADN. G1 est une phase de croissance et de préparation à la réplication. Avant l’engagement vers S, la cellule intègre des signaux mitogènes, son état métabolique et l’intégrité de son génome."
      },
      {
        "content": "La progression en G1 est totalement indépendante des signaux extracellulaires.",
        "correct": false,
        "explanation": "Incorrect : La progression en G1 est totalement indépendante des signaux extracellulaires. À retenir : La disponibilité de facteurs de croissance influence la progression de G1."
      },
      {
        "content": "La quantité d’ADN passe obligatoirement de 2C à 4C pendant G1.",
        "correct": false,
        "explanation": "Incorrect : La quantité d’ADN passe obligatoirement de 2C à 4C pendant G1. À retenir : La cellule augmente sa masse et synthétise activement ARN et protéines pendant G1."
      },
      {
        "content": "Le point de restriction se situe après l’anaphase.",
        "correct": false,
        "explanation": "Incorrect : Le point de restriction se situe après l’anaphase. À retenir : Un dommage de l’ADN peut retarder l’entrée en phase S."
      },
      {
        "content": "La phase G1 correspond à la séparation des chromatides sœurs.",
        "correct": false,
        "explanation": "Incorrect : La phase G1 correspond à la séparation des chromatides sœurs. À retenir : La phase G1 suit la mitose et précède la réplication de l’ADN."
      }
    ],
    "explanation": "G1 est une phase de croissance et de préparation à la réplication. Avant l’engagement vers S, la cellule intègre des signaux mitogènes, son état métabolique et l’intégrité de son génome."
  },
  {
    "order": 7,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sélectionnez les affirmations compatibles avec « Phase S ».",
    "choices": [
      {
        "content": "La phase S est la phase principale de séparation des chromosomes.",
        "correct": false,
        "explanation": "Incorrect : La phase S est la phase principale de séparation des chromosomes. À retenir : La phase S assure la duplication de l’ADN nucléaire."
      },
      {
        "content": "La quantité d’ADN augmente progressivement de 2C vers 4C au cours de S.",
        "correct": true,
        "explanation": "Exact : La quantité d’ADN augmente progressivement de 2C vers 4C au cours de S. La phase S assure une réplication unique et complète du génome nucléaire. Elle s’accompagne de la duplication du centrosome et de mécanismes empêchant une nouvelle initiation sur les origines déjà répliquées."
      },
      {
        "content": "La réplication doit être limitée à une fois par cycle pour chaque région du génome.",
        "correct": true,
        "explanation": "Exact : La réplication doit être limitée à une fois par cycle pour chaque région du génome. La phase S assure une réplication unique et complète du génome nucléaire. Elle s’accompagne de la duplication du centrosome et de mécanismes empêchant une nouvelle initiation sur les origines déjà répliquées."
      },
      {
        "content": "La duplication du centrosome est coordonnée au cycle et se déroule autour de la transition G1/S et pendant S.",
        "correct": true,
        "explanation": "Exact : La duplication du centrosome est coordonnée au cycle et se déroule autour de la transition G1/S et pendant S. La phase S assure une réplication unique et complète du génome nucléaire. Elle s’accompagne de la duplication du centrosome et de mécanismes empêchant une nouvelle initiation sur les origines déjà répliquées."
      },
      {
        "content": "La phase S assure la duplication de l’ADN nucléaire.",
        "correct": true,
        "explanation": "Exact : La phase S assure la duplication de l’ADN nucléaire. La phase S assure une réplication unique et complète du génome nucléaire. Elle s’accompagne de la duplication du centrosome et de mécanismes empêchant une nouvelle initiation sur les origines déjà répliquées."
      }
    ],
    "explanation": "La phase S assure une réplication unique et complète du génome nucléaire. Elle s’accompagne de la duplication du centrosome et de mécanismes empêchant une nouvelle initiation sur les origines déjà répliquées."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle phase du cycle cellulaire assure la réplication de l’ADN nucléaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "phase S",
        "S"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La réplication du génome nucléaire a lieu pendant la phase S de l’interphase."
  },
  {
    "order": 9,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes sur « Phase G2 », cinq sont exactes : sélectionnez-les.",
    "choices": [
      {
        "content": "En G2, la réplication de l’ADN nucléaire est normalement achevée.",
        "correct": true,
        "explanation": "Exact : En G2, la réplication de l’ADN nucléaire est normalement achevée. G2 est une phase post-réplicative. La cellule vérifie l’achèvement de la réplication et l’intégrité de l’ADN avant d’activer fortement la Cdk1 mitotique."
      },
      {
        "content": "Des lésions de l’ADN peuvent maintenir une cellule en G2.",
        "correct": true,
        "explanation": "Exact : Des lésions de l’ADN peuvent maintenir une cellule en G2. G2 est une phase post-réplicative. La cellule vérifie l’achèvement de la réplication et l’intégrité de l’ADN avant d’activer fortement la Cdk1 mitotique."
      },
      {
        "content": "G2 se situe normalement entre G1 et S.",
        "correct": false,
        "explanation": "Incorrect : G2 se situe normalement entre G1 et S. À retenir : Une cellule somatique diploïde en G2 contient 4C d’ADN."
      },
      {
        "content": "Une réplication incomplète accélère physiologiquement l’entrée en mitose.",
        "correct": false,
        "explanation": "Incorrect : Une réplication incomplète accélère physiologiquement l’entrée en mitose. À retenir : Des lésions de l’ADN peuvent maintenir une cellule en G2."
      },
      {
        "content": "La préparation du fuseau mitotique s’intensifie à l’approche de la phase M.",
        "correct": true,
        "explanation": "Exact : La préparation du fuseau mitotique s’intensifie à l’approche de la phase M. G2 est une phase post-réplicative. La cellule vérifie l’achèvement de la réplication et l’intégrité de l’ADN avant d’activer fortement la Cdk1 mitotique."
      },
      {
        "content": "Le contrôle G2/M empêche l’entrée en mitose si la réplication est incomplète.",
        "correct": true,
        "explanation": "Exact : Le contrôle G2/M empêche l’entrée en mitose si la réplication est incomplète. G2 est une phase post-réplicative. La cellule vérifie l’achèvement de la réplication et l’intégrité de l’ADN avant d’activer fortement la Cdk1 mitotique."
      },
      {
        "content": "La quantité d’ADN d’une cellule somatique en G2 est 2C.",
        "correct": false,
        "explanation": "Incorrect : La quantité d’ADN d’une cellule somatique en G2 est 2C. À retenir : Le contrôle G2/M empêche l’entrée en mitose si la réplication est incomplète."
      },
      {
        "content": "Une cellule somatique diploïde en G2 contient 4C d’ADN.",
        "correct": true,
        "explanation": "Exact : Une cellule somatique diploïde en G2 contient 4C d’ADN. G2 est une phase post-réplicative. La cellule vérifie l’achèvement de la réplication et l’intégrité de l’ADN avant d’activer fortement la Cdk1 mitotique."
      },
      {
        "content": "Le contrôle G2/M est indépendant de l’état de l’ADN.",
        "correct": false,
        "explanation": "Incorrect : Le contrôle G2/M est indépendant de l’état de l’ADN. À retenir : La préparation du fuseau mitotique s’intensifie à l’approche de la phase M."
      },
      {
        "content": "En G2, l’ADN nucléaire n’a pas encore commencé à être répliqué.",
        "correct": false,
        "explanation": "Incorrect : En G2, l’ADN nucléaire n’a pas encore commencé à être répliqué. À retenir : En G2, la réplication de l’ADN nucléaire est normalement achevée."
      }
    ],
    "explanation": "G2 est une phase post-réplicative. La cellule vérifie l’achèvement de la réplication et l’intégrité de l’ADN avant d’activer fortement la Cdk1 mitotique."
  },
  {
    "order": 10,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les mécanismes de « Renouvellement tissulaire et homéostasie », quelles affirmations sont correctes ?",
    "choices": [
      {
        "content": "Dans une cellule somatique, toute cellule différenciée est obligatoirement incapable de réentrer en cycle.",
        "correct": false,
        "explanation": "Incorrect : Toute cellule différenciée est obligatoirement incapable de réentrer en cycle. À retenir : Une fraction de cellules peut être quiescente tandis qu’une autre prolifère."
      },
      {
        "content": "La durée de vie des cellules varie selon le type cellulaire.",
        "correct": true,
        "explanation": "Exact : La durée de vie des cellules varie selon le type cellulaire. Dans un tissu sain, la prolifération, la différenciation et la mort cellulaire sont coordonnées afin de maintenir l’homéostasie. Les rythmes de renouvellement varient fortement selon les tissus."
      },
      {
        "content": "La prolifération et la mort cellulaire sont deux phénomènes indépendants de l’équilibre tissulaire.",
        "correct": false,
        "explanation": "Incorrect : La prolifération et la mort cellulaire sont deux phénomènes indépendants de l’équilibre tissulaire. À retenir : L’apoptose participe au maintien de l’homéostasie tissulaire."
      },
      {
        "content": "Une fraction de cellules peut être quiescente tandis qu’une autre prolifère.",
        "correct": true,
        "explanation": "Exact : Une fraction de cellules peut être quiescente tandis qu’une autre prolifère. Dans un tissu sain, la prolifération, la différenciation et la mort cellulaire sont coordonnées afin de maintenir l’homéostasie. Les rythmes de renouvellement varient fortement selon les tissus."
      },
      {
        "content": "Dans une cellule somatique, l’homéostasie tissulaire exige que 100 % des cellules soient simultanément en phase S.",
        "correct": false,
        "explanation": "Incorrect : L’homéostasie tissulaire exige que 100 % des cellules soient simultanément en phase S. À retenir : Une lésion peut stimuler la réentrée en cycle de certaines cellules normalement peu prolifératives."
      }
    ],
    "explanation": "Dans un tissu sain, la prolifération, la différenciation et la mort cellulaire sont coordonnées afin de maintenir l’homéostasie. Les rythmes de renouvellement varient fortement selon les tissus."
  },
  {
    "order": 11,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle quantité d’ADN, exprimée en C, possède classiquement une cellule somatique diploïde en G1 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "2C",
        "2 c",
        "2c"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "En G1, la cellule possède 2n chromosomes à une chromatide et 2C d’ADN."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour le thème « Prolifération tumorale », quelles propositions doivent être retenues ?",
    "choices": [
      {
        "content": "Le temps de doublement d’une lignée cellulaire dépend des conditions expérimentales.",
        "correct": true,
        "explanation": "Exact : Le temps de doublement d’une lignée cellulaire dépend des conditions expérimentales. Les tissus tumoraux présentent une dérégulation de la prolifération et de la survie cellulaire. Les temps de doublement mesurés in vitro dépendent de la lignée et des conditions de culture."
      },
      {
        "content": "Une lignée cultivée in vitro reproduit toujours exactement la vitesse de croissance d’une tumeur chez le patient.",
        "correct": false,
        "explanation": "Incorrect : Une lignée cultivée in vitro reproduit toujours exactement la vitesse de croissance d’une tumeur chez le patient. À retenir : Le temps de doublement d’une lignée cellulaire dépend des conditions expérimentales."
      },
      {
        "content": "Des lignées tumorales cultivées in vitro peuvent avoir des temps de doublement proches d’une journée.",
        "correct": true,
        "explanation": "Exact : Des lignées tumorales cultivées in vitro peuvent avoir des temps de doublement proches d’une journée. Les tissus tumoraux présentent une dérégulation de la prolifération et de la survie cellulaire. Les temps de doublement mesurés in vitro dépendent de la lignée et des conditions de culture."
      },
      {
        "content": "La transformation tumorale améliore nécessairement tous les mécanismes de contrôle du cycle.",
        "correct": false,
        "explanation": "Incorrect : La transformation tumorale améliore nécessairement tous les mécanismes de contrôle du cycle. À retenir : Des lignées tumorales cultivées in vitro peuvent avoir des temps de doublement proches d’une journée."
      },
      {
        "content": "La perte de contrôle des points de surveillance favorise une prolifération anormale.",
        "correct": true,
        "explanation": "Exact : La perte de contrôle des points de surveillance favorise une prolifération anormale. Les tissus tumoraux présentent une dérégulation de la prolifération et de la survie cellulaire. Les temps de doublement mesurés in vitro dépendent de la lignée et des conditions de culture."
      }
    ],
    "explanation": "Les tissus tumoraux présentent une dérégulation de la prolifération et de la survie cellulaire. Les temps de doublement mesurés in vitro dépendent de la lignée et des conditions de culture."
  },
  {
    "order": 13,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les éléments suivants relatifs à « Organisation générale du cycle », lesquels sont exacts ?",
    "choices": [
      {
        "content": "La phase S est la phase de réplication de l’ADN nucléaire.",
        "correct": true,
        "explanation": "Exact : La phase S est la phase de réplication de l’ADN nucléaire. Le cycle des cellules prolifératives comprend l’interphase, formée des phases G1, S et G2, puis la phase M. G0 correspond à un état de quiescence hors du cycle prolifératif actif."
      },
      {
        "content": "L’interphase est limitée à la seule phase G1.",
        "correct": false,
        "explanation": "Incorrect : L’interphase est limitée à la seule phase G1. À retenir : G2 suit la réplication de l’ADN."
      },
      {
        "content": "La phase M succède à G2.",
        "correct": true,
        "explanation": "Exact : La phase M succède à G2. Le cycle des cellules prolifératives comprend l’interphase, formée des phases G1, S et G2, puis la phase M. G0 correspond à un état de quiescence hors du cycle prolifératif actif."
      },
      {
        "content": "G0 est une phase obligatoire entre S et G2.",
        "correct": false,
        "explanation": "Incorrect : G0 est une phase obligatoire entre S et G2. À retenir : G1 précède normalement la phase S."
      },
      {
        "content": "La réplication de l’ADN a lieu principalement pendant la métaphase.",
        "correct": false,
        "explanation": "Incorrect : La réplication de l’ADN a lieu principalement pendant la métaphase. À retenir : La phase S est la phase de réplication de l’ADN nucléaire."
      }
    ],
    "explanation": "Le cycle des cellules prolifératives comprend l’interphase, formée des phases G1, S et G2, puis la phase M. G0 correspond à un état de quiescence hors du cycle prolifératif actif."
  },
  {
    "order": 14,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Sélectionnez les affirmations compatibles avec « Quantité d’ADN, chromosomes et chromatides ».",
    "choices": [
      {
        "content": "En G1, la quantité d’ADN est classiquement notée 2C.",
        "correct": true,
        "explanation": "Exact : En G1, la quantité d’ADN est classiquement notée 2C. Dans une cellule somatique diploïde, G1 correspond à 2n chromosomes et 2C d’ADN. Après réplication, G2 comporte toujours 2n chromosomes mais 4C d’ADN, chaque chromosome possédant deux chromatides sœurs."
      },
      {
        "content": "En fin de S, chaque chromosome répliqué comporte deux chromatides sœurs.",
        "correct": true,
        "explanation": "Exact : En fin de S, chaque chromosome répliqué comporte deux chromatides sœurs. Dans une cellule somatique diploïde, G1 correspond à 2n chromosomes et 2C d’ADN. Après réplication, G2 comporte toujours 2n chromosomes mais 4C d’ADN, chaque chromosome possédant deux chromatides sœurs."
      },
      {
        "content": "La réplication de l’ADN divise par deux la quantité d’ADN cellulaire.",
        "correct": false,
        "explanation": "Incorrect : La réplication de l’ADN divise par deux la quantité d’ADN cellulaire. À retenir : En fin de S, chaque chromosome répliqué comporte deux chromatides sœurs."
      },
      {
        "content": "La phase S double la quantité d’ADN sans doubler le nombre de chromosomes.",
        "correct": true,
        "explanation": "Exact : La phase S double la quantité d’ADN sans doubler le nombre de chromosomes. Dans une cellule somatique diploïde, G1 correspond à 2n chromosomes et 2C d’ADN. Après réplication, G2 comporte toujours 2n chromosomes mais 4C d’ADN, chaque chromosome possédant deux chromatides sœurs."
      },
      {
        "content": "En G1, une cellule somatique diploïde contient 4C d’ADN.",
        "correct": false,
        "explanation": "Incorrect : En G1, une cellule somatique diploïde contient 4C d’ADN. À retenir : La phase S double la quantité d’ADN sans doubler le nombre de chromosomes."
      }
    ],
    "explanation": "Dans une cellule somatique diploïde, G1 correspond à 2n chromosomes et 2C d’ADN. Après réplication, G2 comporte toujours 2n chromosomes mais 4C d’ADN, chaque chromosome possédant deux chromatides sœurs."
  },
  {
    "order": 15,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Concernant « Phase G1 et point de restriction », quelle est l’unique proposition exacte ?",
    "choices": [
      {
        "content": "La réparation de l’ADN est impossible pendant G1.",
        "correct": false,
        "explanation": "Incorrect : La réparation de l’ADN est impossible pendant G1. À retenir : Le point de restriction de G1 contribue à décider si la cellule poursuit le cycle."
      },
      {
        "content": "Le point de restriction se situe après l’anaphase.",
        "correct": false,
        "explanation": "Incorrect : Le point de restriction se situe après l’anaphase. À retenir : Un dommage de l’ADN peut retarder l’entrée en phase S."
      },
      {
        "content": "Une cellule en G1 a nécessairement déjà répliqué tout son ADN.",
        "correct": false,
        "explanation": "Incorrect : Une cellule en G1 a nécessairement déjà répliqué tout son ADN. À retenir : Avant le point de restriction, l’absence de signaux mitogènes peut favoriser une entrée en quiescence."
      },
      {
        "content": "La cellule augmente sa masse et synthétise activement ARN et protéines pendant G1.",
        "correct": true,
        "explanation": "Exact : La cellule augmente sa masse et synthétise activement ARN et protéines pendant G1. G1 est une phase de croissance et de préparation à la réplication. Avant l’engagement vers S, la cellule intègre des signaux mitogènes, son état métabolique et l’intégrité de son génome."
      },
      {
        "content": "La progression en G1 est totalement indépendante des signaux extracellulaires.",
        "correct": false,
        "explanation": "Incorrect : La progression en G1 est totalement indépendante des signaux extracellulaires. À retenir : La disponibilité de facteurs de croissance influence la progression de G1."
      }
    ],
    "explanation": "G1 est une phase de croissance et de préparation à la réplication. Avant l’engagement vers S, la cellule intègre des signaux mitogènes, son état métabolique et l’intégrité de son génome."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Parmi ces affirmations concernant « Phase S », retenez exactement les 2 justes.",
    "choices": [
      {
        "content": "La duplication du centrosome est coordonnée au cycle et se déroule autour de la transition G1/S et pendant S.",
        "correct": true,
        "explanation": "Exact : La duplication du centrosome est coordonnée au cycle et se déroule autour de la transition G1/S et pendant S. La phase S assure une réplication unique et complète du génome nucléaire. Elle s’accompagne de la duplication du centrosome et de mécanismes empêchant une nouvelle initiation sur les origines déjà répliquées."
      },
      {
        "content": "La réplication doit être limitée à une fois par cycle pour chaque région du génome.",
        "correct": true,
        "explanation": "Exact : La réplication doit être limitée à une fois par cycle pour chaque région du génome. La phase S assure une réplication unique et complète du génome nucléaire. Elle s’accompagne de la duplication du centrosome et de mécanismes empêchant une nouvelle initiation sur les origines déjà répliquées."
      },
      {
        "content": "La phase S ne concerne que les mitochondries et pas le génome nucléaire.",
        "correct": false,
        "explanation": "Incorrect : La phase S ne concerne que les mitochondries et pas le génome nucléaire. À retenir : Les chromatides sœurs sont produites par réplication de chaque chromosome."
      },
      {
        "content": "Chaque région du génome doit être répliquée plusieurs fois pendant une même phase S.",
        "correct": false,
        "explanation": "Incorrect : Chaque région du génome doit être répliquée plusieurs fois pendant une même phase S. À retenir : La duplication du centrosome est coordonnée au cycle et se déroule autour de la transition G1/S et pendant S."
      },
      {
        "content": "La quantité d’ADN reste exactement à 2C pendant toute la phase S.",
        "correct": false,
        "explanation": "Incorrect : La quantité d’ADN reste exactement à 2C pendant toute la phase S. À retenir : La quantité d’ADN augmente progressivement de 2C vers 4C au cours de S."
      }
    ],
    "explanation": "La phase S assure une réplication unique et complète du génome nucléaire. Elle s’accompagne de la duplication du centrosome et de mécanismes empêchant une nouvelle initiation sur les origines déjà répliquées."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de « Phase G2 », sélectionnez les propositions exactes.",
    "choices": [
      {
        "content": "Des lésions de l’ADN peuvent maintenir une cellule en G2.",
        "correct": true,
        "explanation": "Exact : Des lésions de l’ADN peuvent maintenir une cellule en G2. G2 est une phase post-réplicative. La cellule vérifie l’achèvement de la réplication et l’intégrité de l’ADN avant d’activer fortement la Cdk1 mitotique."
      },
      {
        "content": "La quantité d’ADN d’une cellule somatique en G2 est 2C.",
        "correct": false,
        "explanation": "Incorrect : La quantité d’ADN d’une cellule somatique en G2 est 2C. À retenir : Le contrôle G2/M empêche l’entrée en mitose si la réplication est incomplète."
      },
      {
        "content": "Le contrôle G2/M empêche l’entrée en mitose si la réplication est incomplète.",
        "correct": true,
        "explanation": "Exact : Le contrôle G2/M empêche l’entrée en mitose si la réplication est incomplète. G2 est une phase post-réplicative. La cellule vérifie l’achèvement de la réplication et l’intégrité de l’ADN avant d’activer fortement la Cdk1 mitotique."
      },
      {
        "content": "Une cellule somatique diploïde en G2 contient 4C d’ADN.",
        "correct": true,
        "explanation": "Exact : Une cellule somatique diploïde en G2 contient 4C d’ADN. G2 est une phase post-réplicative. La cellule vérifie l’achèvement de la réplication et l’intégrité de l’ADN avant d’activer fortement la Cdk1 mitotique."
      },
      {
        "content": "Une réplication incomplète accélère physiologiquement l’entrée en mitose.",
        "correct": false,
        "explanation": "Incorrect : Une réplication incomplète accélère physiologiquement l’entrée en mitose. À retenir : Des lésions de l’ADN peuvent maintenir une cellule en G2."
      }
    ],
    "explanation": "G2 est une phase post-réplicative. La cellule vérifie l’achèvement de la réplication et l’intégrité de l’ADN avant d’activer fortement la Cdk1 mitotique."
  },
  {
    "order": 18,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle quantité d’ADN, exprimée en C, possède classiquement une cellule somatique diploïde en G2 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "4C",
        "4 c",
        "4c"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Après réplication, la cellule reste 2n mais contient 4C d’ADN."
  },
  {
    "order": 19,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Parmi les propositions ci-dessous relatives à « Renouvellement tissulaire et homéostasie », laquelle est correcte ?",
    "choices": [
      {
        "content": "La prolifération et la mort cellulaire sont deux phénomènes indépendants de l’équilibre tissulaire.",
        "correct": false,
        "explanation": "Incorrect : La prolifération et la mort cellulaire sont deux phénomènes indépendants de l’équilibre tissulaire. À retenir : L’apoptose participe au maintien de l’homéostasie tissulaire."
      },
      {
        "content": "Toutes les cellules d’un organisme ont la même durée de vie.",
        "correct": false,
        "explanation": "Incorrect : Toutes les cellules d’un organisme ont la même durée de vie. À retenir : Dans un tissu sain, le nombre de cellules résulte d’un équilibre entre production et élimination cellulaires."
      },
      {
        "content": "Le renouvellement cellulaire impose la même vitesse de division à tous les tissus.",
        "correct": false,
        "explanation": "Incorrect : Le renouvellement cellulaire impose la même vitesse de division à tous les tissus. À retenir : Le renouvellement cellulaire n’a pas la même vitesse dans tous les organes."
      },
      {
        "content": "Une fraction de cellules peut être quiescente tandis qu’une autre prolifère.",
        "correct": true,
        "explanation": "Exact : Une fraction de cellules peut être quiescente tandis qu’une autre prolifère. Dans un tissu sain, la prolifération, la différenciation et la mort cellulaire sont coordonnées afin de maintenir l’homéostasie. Les rythmes de renouvellement varient fortement selon les tissus."
      },
      {
        "content": "Un tissu normal est défini par l’absence totale de cellules quiescentes.",
        "correct": false,
        "explanation": "Incorrect : Un tissu normal est défini par l’absence totale de cellules quiescentes. À retenir : Une prolifération excessive peut rompre l’équilibre d’un tissu."
      }
    ],
    "explanation": "Dans un tissu sain, la prolifération, la différenciation et la mort cellulaire sont coordonnées afin de maintenir l’homéostasie. Les rythmes de renouvellement varient fortement selon les tissus."
  },
  {
    "order": 20,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment appelle-t-on la phase située entre la fin de la réplication et l’entrée en mitose ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "G2",
        "phase G2"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "G2 est la phase post-réplicative qui précède la mitose."
  },
  {
    "order": 21,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Sélectionnez les affirmations compatibles avec « Prolifération tumorale ».",
    "choices": [
      {
        "content": "L’apoptose est toujours augmentée dans les cellules tumorales.",
        "correct": false,
        "explanation": "Incorrect : L’apoptose est toujours augmentée dans les cellules tumorales. À retenir : Une cellule tumorale peut continuer à proliférer malgré des signaux qui freinent normalement le cycle."
      },
      {
        "content": "Une cellule tumorale peut continuer à proliférer malgré des signaux qui freinent normalement le cycle.",
        "correct": true,
        "explanation": "Exact : Une cellule tumorale peut continuer à proliférer malgré des signaux qui freinent normalement le cycle. Les tissus tumoraux présentent une dérégulation de la prolifération et de la survie cellulaire. Les temps de doublement mesurés in vitro dépendent de la lignée et des conditions de culture."
      },
      {
        "content": "Dans une cellule somatique, le temps de doublement d’une lignée cellulaire dépend des conditions expérimentales.",
        "correct": true,
        "explanation": "Exact : Le temps de doublement d’une lignée cellulaire dépend des conditions expérimentales. Les tissus tumoraux présentent une dérégulation de la prolifération et de la survie cellulaire. Les temps de doublement mesurés in vitro dépendent de la lignée et des conditions de culture."
      },
      {
        "content": "Dans une cellule somatique, des lignées tumorales cultivées in vitro peuvent avoir des temps de doublement proches d’une journée.",
        "correct": true,
        "explanation": "Exact : Des lignées tumorales cultivées in vitro peuvent avoir des temps de doublement proches d’une journée. Les tissus tumoraux présentent une dérégulation de la prolifération et de la survie cellulaire. Les temps de doublement mesurés in vitro dépendent de la lignée et des conditions de culture."
      },
      {
        "content": "La dérégulation du cycle cellulaire contribue à la croissance tumorale.",
        "correct": true,
        "explanation": "Exact : La dérégulation du cycle cellulaire contribue à la croissance tumorale. Les tissus tumoraux présentent une dérégulation de la prolifération et de la survie cellulaire. Les temps de doublement mesurés in vitro dépendent de la lignée et des conditions de culture."
      }
    ],
    "explanation": "Les tissus tumoraux présentent une dérégulation de la prolifération et de la survie cellulaire. Les temps de doublement mesurés in vitro dépendent de la lignée et des conditions de culture."
  },
  {
    "order": 22,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel terme désigne le point de G1 après lequel une cellule est fortement engagée à poursuivre le cycle ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "point de restriction",
        "restriction point",
        "R point",
        "point R"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le point de restriction est un jalon majeur de G1 contrôlant l’engagement vers la phase S."
  }
];

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "cycle-cellulaire-phases-1",
    "title": "Phases du cycle et homéostasie",
    "description": "Repères essentiels sur G0, G1, S et G2.",
    "stage": "DISCOVER",
    "sectionOrder": 1,
    "questionOrders": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]
  },
  {
    "order": 2,
    "slug": "cycle-cellulaire-phases-2",
    "title": "ADN, chromosomes et engagement en cycle",
    "description": "Appliquer les relations 2n/2C et 2n/4C et raisonner sur G1/S.",
    "stage": "PRACTICE",
    "sectionOrder": 1,
    "questionOrders": [
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22
    ]
  }
];
