import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch9 — Mitose, fuseau et sortie de mitose — V2 active */
export const SECTION_D_QUESTIONS: SeedQuestion[] = [
  {
    "order": 67,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Dans le cadre de « Phases de la mitose », identifiez l’affirmation correcte.",
    "choices": [
      {
        "content": "La condensation des chromosomes augmente pendant la prophase.",
        "correct": true,
        "explanation": "Exact : La condensation des chromosomes augmente pendant la prophase. La mitose ouverte des cellules animales comprend prophase, prométaphase, métaphase, anaphase et télophase, puis la cytodiérèse achève la séparation physique des cellules filles."
      },
      {
        "content": "La réplication complète du génome se déroule pendant la métaphase.",
        "correct": false,
        "explanation": "Incorrect : La réplication complète du génome se déroule pendant la métaphase. À retenir : La condensation des chromosomes augmente pendant la prophase."
      },
      {
        "content": "L’anaphase précède l’alignement métaphasique des chromosomes.",
        "correct": false,
        "explanation": "Incorrect : L’anaphase précède l’alignement métaphasique des chromosomes. À retenir : En métaphase, les chromosomes sont alignés autour de la plaque équatoriale."
      },
      {
        "content": "La prophase suit normalement la télophase au sein d’une même mitose.",
        "correct": false,
        "explanation": "Incorrect : La prophase suit normalement la télophase au sein d’une même mitose. À retenir : La rupture de l’enveloppe nucléaire permet aux microtubules d’accéder aux kinétochores en prométaphase."
      },
      {
        "content": "La télophase correspond à la phase de duplication des centrosomes.",
        "correct": false,
        "explanation": "Incorrect : La télophase correspond à la phase de duplication des centrosomes. À retenir : L’anaphase débute avec la séparation des chromatides sœurs."
      }
    ],
    "explanation": "La mitose ouverte des cellules animales comprend prophase, prométaphase, métaphase, anaphase et télophase, puis la cytodiérèse achève la séparation physique des cellules filles."
  },
  {
    "order": 68,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement « Fuseau mitotique et microtubules » ?",
    "choices": [
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
        "content": "Le fuseau mitotique est normalement unipolaire dans une cellule somatique humaine saine.",
        "correct": false,
        "explanation": "Incorrect : Le fuseau mitotique est normalement unipolaire dans une cellule somatique humaine saine. À retenir : La dynamique des microtubules est essentielle à la recherche et à la capture des kinétochores."
      },
      {
        "content": "Tous les microtubules du fuseau s’attachent directement à un kinétochore.",
        "correct": false,
        "explanation": "Incorrect : Tous les microtubules du fuseau s’attachent directement à un kinétochore. À retenir : Les microtubules kinétochoriens relient les kinétochores aux pôles du fuseau."
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
    "order": 69,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions ci-dessous relatives à « Centromère, kinétochore et bi-orientation », laquelle est correcte ?",
    "choices": [
      {
        "content": "Le kinétochore est assemblé sur la région centromérique du chromosome.",
        "correct": true,
        "explanation": "Exact : Le kinétochore est assemblé sur la région centromérique du chromosome. Le kinétochore est un assemblage protéique construit sur la région centromérique. En métaphase, les deux kinétochores sœurs doivent être attachés à des pôles opposés, assurant la bi-orientation et une ségrégation fidèle."
      },
      {
        "content": "Le centromère est un organite cytoplasmique contenant des centrioles.",
        "correct": false,
        "explanation": "Incorrect : Le centromère est un organite cytoplasmique contenant des centrioles. À retenir : La bi-orientation signifie que les deux kinétochores sœurs sont reliés à des pôles opposés."
      },
      {
        "content": "Les chromosomes n’interagissent jamais avec les microtubules en métaphase.",
        "correct": false,
        "explanation": "Incorrect : Les chromosomes n’interagissent jamais avec les microtubules en métaphase. À retenir : Un défaut d’attachement kinetochore-microtubule active le checkpoint du fuseau."
      },
      {
        "content": "La bi-orientation relie les deux kinétochores sœurs au même pôle.",
        "correct": false,
        "explanation": "Incorrect : La bi-orientation relie les deux kinétochores sœurs au même pôle. À retenir : Les microtubules kinétochoriens s’attachent aux kinétochores."
      },
      {
        "content": "Le kinétochore est une membrane entourant chaque chromosome.",
        "correct": false,
        "explanation": "Incorrect : Le kinétochore est une membrane entourant chaque chromosome. À retenir : Le kinétochore est assemblé sur la région centromérique du chromosome."
      }
    ],
    "explanation": "Le kinétochore est un assemblage protéique construit sur la région centromérique. En métaphase, les deux kinétochores sœurs doivent être attachés à des pôles opposés, assurant la bi-orientation et une ségrégation fidèle."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Cohésine, sécurine et séparase », lesquelles sont incorrectes ?",
    "choices": [
      {
        "content": "La séparase maintient les chromatides sœurs attachées pendant toute l’anaphase.",
        "correct": true,
        "explanation": "Incorrect : La séparase maintient les chromatides sœurs attachées pendant toute l’anaphase. À retenir : La séparase est inhibée par la sécurine avant l’anaphase."
      },
      {
        "content": "La dégradation de la sécurine libère l’activité de la séparase.",
        "correct": false,
        "explanation": "Exact : La dégradation de la sécurine libère l’activité de la séparase. Les cohésines maintiennent les chromatides sœurs associées. La sécurine inhibe la séparase. Quand APC/C-Cdc20 entraîne la dégradation de la sécurine, la séparase peut cliver la cohésine et permettre l’anaphase."
      },
      {
        "content": "La sécurine est une protéase qui clive directement la cohésine.",
        "correct": true,
        "explanation": "Incorrect : La sécurine est une protéase qui clive directement la cohésine. À retenir : Les cohésines contribuent à maintenir les chromatides sœurs associées avant l’anaphase."
      },
      {
        "content": "Les cohésines contribuent à maintenir les chromatides sœurs associées avant l’anaphase.",
        "correct": false,
        "explanation": "Exact : Les cohésines contribuent à maintenir les chromatides sœurs associées avant l’anaphase. Les cohésines maintiennent les chromatides sœurs associées. La sécurine inhibe la séparase. Quand APC/C-Cdc20 entraîne la dégradation de la sécurine, la séparase peut cliver la cohésine et permettre l’anaphase."
      },
      {
        "content": "La séparase est inhibée par la sécurine avant l’anaphase.",
        "correct": false,
        "explanation": "Exact : La séparase est inhibée par la sécurine avant l’anaphase. Les cohésines maintiennent les chromatides sœurs associées. La sécurine inhibe la séparase. Quand APC/C-Cdc20 entraîne la dégradation de la sécurine, la séparase peut cliver la cohésine et permettre l’anaphase."
      }
    ],
    "explanation": "Les cohésines maintiennent les chromatides sœurs associées. La sécurine inhibe la séparase. Quand APC/C-Cdc20 entraîne la dégradation de la sécurine, la séparase peut cliver la cohésine et permettre l’anaphase. Ici, il fallait sélectionner les affirmations incorrectes."
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "À propos de « Checkpoint d’assemblage du fuseau », identifiez exactement cinq propositions exactes parmi les dix suivantes.",
    "choices": [
      {
        "content": "Le checkpoint du fuseau contrôle principalement la réplication de l’ADN en phase S.",
        "correct": false,
        "explanation": "Incorrect : Le checkpoint du fuseau contrôle principalement la réplication de l’ADN en phase S. À retenir : Le checkpoint du fuseau surveille l’attachement des kinétochores aux microtubules."
      },
      {
        "content": "MAD2 est une cycline de phase G1.",
        "correct": false,
        "explanation": "Incorrect : MAD2 est une cycline de phase G1. À retenir : MAD2 et BUBR1 participent au complexe de checkpoint mitotique."
      },
      {
        "content": "L’extinction du checkpoint permet la dégradation de la sécurine.",
        "correct": true,
        "explanation": "Exact : L’extinction du checkpoint permet la dégradation de la sécurine. Le spindle assembly checkpoint (SAC) bloque l’activation efficace d’APC/C-Cdc20 tant que subsistent des kinétochores non correctement attachés. Les protéines MAD et BUB participent au signal de checkpoint."
      },
      {
        "content": "Le checkpoint du fuseau surveille l’attachement des kinétochores aux microtubules.",
        "correct": true,
        "explanation": "Exact : Le checkpoint du fuseau surveille l’attachement des kinétochores aux microtubules. Le spindle assembly checkpoint (SAC) bloque l’activation efficace d’APC/C-Cdc20 tant que subsistent des kinétochores non correctement attachés. Les protéines MAD et BUB participent au signal de checkpoint."
      },
      {
        "content": "Un kinétochore non attaché peut générer un signal qui retarde l’anaphase.",
        "correct": true,
        "explanation": "Exact : Un kinétochore non attaché peut générer un signal qui retarde l’anaphase. Le spindle assembly checkpoint (SAC) bloque l’activation efficace d’APC/C-Cdc20 tant que subsistent des kinétochores non correctement attachés. Les protéines MAD et BUB participent au signal de checkpoint."
      },
      {
        "content": "Un kinétochore non attaché active APC/C-Cdc20 pour accélérer l’anaphase.",
        "correct": false,
        "explanation": "Incorrect : Un kinétochore non attaché active APC/C-Cdc20 pour accélérer l’anaphase. À retenir : Un kinétochore non attaché peut générer un signal qui retarde l’anaphase."
      },
      {
        "content": "APC/C-Cdc20 est une enzyme de synthèse des microtubules.",
        "correct": false,
        "explanation": "Incorrect : APC/C-Cdc20 est une enzyme de synthèse des microtubules. À retenir : L’extinction du checkpoint permet la dégradation de la sécurine."
      },
      {
        "content": "Le checkpoint du fuseau inhibe fonctionnellement APC/C-Cdc20 tant que les attachements ne sont pas satisfaisants.",
        "correct": true,
        "explanation": "Exact : Le checkpoint du fuseau inhibe fonctionnellement APC/C-Cdc20 tant que les attachements ne sont pas satisfaisants. Le spindle assembly checkpoint (SAC) bloque l’activation efficace d’APC/C-Cdc20 tant que subsistent des kinétochores non correctement attachés. Les protéines MAD et BUB participent au signal de checkpoint."
      },
      {
        "content": "Le checkpoint du fuseau devient inutile avant toute interaction chromosome-microtubule.",
        "correct": false,
        "explanation": "Incorrect : Le checkpoint du fuseau devient inutile avant toute interaction chromosome-microtubule. À retenir : Le checkpoint du fuseau inhibe fonctionnellement APC/C-Cdc20 tant que les attachements ne sont pas satisfaisants."
      },
      {
        "content": "MAD2 et BUBR1 participent au complexe de checkpoint mitotique.",
        "correct": true,
        "explanation": "Exact : MAD2 et BUBR1 participent au complexe de checkpoint mitotique. Le spindle assembly checkpoint (SAC) bloque l’activation efficace d’APC/C-Cdc20 tant que subsistent des kinétochores non correctement attachés. Les protéines MAD et BUB participent au signal de checkpoint."
      }
    ],
    "explanation": "Le spindle assembly checkpoint (SAC) bloque l’activation efficace d’APC/C-Cdc20 tant que subsistent des kinétochores non correctement attachés. Les protéines MAD et BUB participent au signal de checkpoint."
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant « APC/C-Cdc20 et APC/C-Cdh1 » ?",
    "choices": [
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
        "content": "Cdc20 est un composant structural de l’ADN centromérique.",
        "correct": false,
        "explanation": "Incorrect : Cdc20 est un composant structural de l’ADN centromérique. À retenir : APC/C-Cdc20 cible notamment la sécurine et la cycline B."
      },
      {
        "content": "Cdc20 active APC/C au moment de la transition métaphase-anaphase.",
        "correct": true,
        "explanation": "Exact : Cdc20 active APC/C au moment de la transition métaphase-anaphase. APC/C change de coactivateur au cours de la mitose. Cdc20 est essentiel à l’entrée en anaphase, tandis que Cdh1 contribue à la sortie de mitose et au maintien d’un faible niveau d’activité CDK en G1."
      },
      {
        "content": "APC/C est une ubiquitine ligase E3.",
        "correct": true,
        "explanation": "Exact : APC/C est une ubiquitine ligase E3. APC/C change de coactivateur au cours de la mitose. Cdc20 est essentiel à l’entrée en anaphase, tandis que Cdh1 contribue à la sortie de mitose et au maintien d’un faible niveau d’activité CDK en G1."
      }
    ],
    "explanation": "APC/C change de coactivateur au cours de la mitose. Cdc20 est essentiel à l’entrée en anaphase, tandis que Cdh1 contribue à la sortie de mitose et au maintien d’un faible niveau d’activité CDK en G1."
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Parmi ces affirmations concernant « Cytodiérèse », retenez exactement les 2 justes.",
    "choices": [
      {
        "content": "La cytodiérèse des cellules animales dépend d’un anneau de tubuline et de kératine exclusivement.",
        "correct": false,
        "explanation": "Incorrect : La cytodiérèse des cellules animales dépend d’un anneau de tubuline et de kératine exclusivement. À retenir : La cytodiérèse débute généralement avant la fin complète de la mitose nucléaire."
      },
      {
        "content": "La cytodiérèse débute généralement avant la fin complète de la mitose nucléaire.",
        "correct": true,
        "explanation": "Exact : La cytodiérèse débute généralement avant la fin complète de la mitose nucléaire. La cytodiérèse des cellules animales dépend d’un anneau contractile d’actine et de myosine II positionné au cortex équatorial. Sa contraction forme le sillon de clivage puis le corps intermédiaire avant l’abscission."
      },
      {
        "content": "Le sillon de clivage se forme normalement au niveau d’un seul pôle du fuseau.",
        "correct": false,
        "explanation": "Incorrect : Le sillon de clivage se forme normalement au niveau d’un seul pôle du fuseau. À retenir : Un anneau contractile d’actine et de myosine II se forme à l’équateur de la cellule animale."
      },
      {
        "content": "Un anneau contractile d’actine et de myosine II se forme à l’équateur de la cellule animale.",
        "correct": true,
        "explanation": "Exact : Un anneau contractile d’actine et de myosine II se forme à l’équateur de la cellule animale. La cytodiérèse des cellules animales dépend d’un anneau contractile d’actine et de myosine II positionné au cortex équatorial. Sa contraction forme le sillon de clivage puis le corps intermédiaire avant l’abscission."
      },
      {
        "content": "La cytodiérèse correspond à la réplication des chromosomes.",
        "correct": false,
        "explanation": "Incorrect : La cytodiérèse correspond à la réplication des chromosomes. À retenir : La contraction de l’anneau forme un sillon de clivage."
      }
    ],
    "explanation": "La cytodiérèse des cellules animales dépend d’un anneau contractile d’actine et de myosine II positionné au cortex équatorial. Sa contraction forme le sillon de clivage puis le corps intermédiaire avant l’abscission."
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle protéine maintient la séparase inactive avant l’anaphase ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sécurine",
        "securin",
        "securine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La sécurine se lie à la séparase et l’inhibe avant sa dégradation."
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les mécanismes de « Anaphase A et B », quelles affirmations sont correctes ?",
    "choices": [
      {
        "content": "L’anaphase A correspond au mouvement des chromosomes vers les pôles.",
        "correct": true,
        "explanation": "Exact : L’anaphase A correspond au mouvement des chromosomes vers les pôles. Pendant l’anaphase, les chromatides se rapprochent des pôles par raccourcissement des microtubules kinétochoriens (anaphase A) et les pôles s’éloignent notamment grâce aux microtubules interpolaires et aux forces corticales (anaphase B)."
      },
      {
        "content": "Les microtubules kinétochoriens doivent s’allonger indéfiniment pour rapprocher les chromosomes des pôles.",
        "correct": false,
        "explanation": "Incorrect : Les microtubules kinétochoriens doivent s’allonger indéfiniment pour rapprocher les chromosomes des pôles. À retenir : Le raccourcissement des microtubules kinétochoriens contribue à l’anaphase A."
      },
      {
        "content": "L’anaphase A correspond à la réplication des chromosomes au centre du fuseau.",
        "correct": false,
        "explanation": "Incorrect : L’anaphase A correspond à la réplication des chromosomes au centre du fuseau. À retenir : L’anaphase A correspond au mouvement des chromosomes vers les pôles."
      },
      {
        "content": "Le raccourcissement des microtubules kinétochoriens contribue à l’anaphase A.",
        "correct": true,
        "explanation": "Exact : Le raccourcissement des microtubules kinétochoriens contribue à l’anaphase A. Pendant l’anaphase, les chromatides se rapprochent des pôles par raccourcissement des microtubules kinétochoriens (anaphase A) et les pôles s’éloignent notamment grâce aux microtubules interpolaires et aux forces corticales (anaphase B)."
      },
      {
        "content": "L’anaphase B rapproche les deux pôles du fuseau l’un de l’autre.",
        "correct": false,
        "explanation": "Incorrect : L’anaphase B rapproche les deux pôles du fuseau l’un de l’autre. À retenir : L’anaphase B correspond à un éloignement des pôles du fuseau."
      }
    ],
    "explanation": "Pendant l’anaphase, les chromatides se rapprochent des pôles par raccourcissement des microtubules kinétochoriens (anaphase A) et les pôles s’éloignent notamment grâce aux microtubules interpolaires et aux forces corticales (anaphase B)."
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour le thème « Phases de la mitose », quelles propositions doivent être retenues ?",
    "choices": [
      {
        "content": "La rupture de l’enveloppe nucléaire permet aux microtubules d’accéder aux kinétochores en prométaphase.",
        "correct": true,
        "explanation": "Exact : La rupture de l’enveloppe nucléaire permet aux microtubules d’accéder aux kinétochores en prométaphase. La mitose ouverte des cellules animales comprend prophase, prométaphase, métaphase, anaphase et télophase, puis la cytodiérèse achève la séparation physique des cellules filles."
      },
      {
        "content": "Dans une cellule somatique, l’anaphase précède l’alignement métaphasique des chromosomes.",
        "correct": false,
        "explanation": "Incorrect : L’anaphase précède l’alignement métaphasique des chromosomes. À retenir : En métaphase, les chromosomes sont alignés autour de la plaque équatoriale."
      },
      {
        "content": "En télophase, les enveloppes nucléaires se reforment autour des lots chromosomiques.",
        "correct": true,
        "explanation": "Exact : En télophase, les enveloppes nucléaires se reforment autour des lots chromosomiques. La mitose ouverte des cellules animales comprend prophase, prométaphase, métaphase, anaphase et télophase, puis la cytodiérèse achève la séparation physique des cellules filles."
      },
      {
        "content": "En métaphase, les chromosomes sont alignés autour de la plaque équatoriale.",
        "correct": true,
        "explanation": "Exact : En métaphase, les chromosomes sont alignés autour de la plaque équatoriale. La mitose ouverte des cellules animales comprend prophase, prométaphase, métaphase, anaphase et télophase, puis la cytodiérèse achève la séparation physique des cellules filles."
      },
      {
        "content": "L’anaphase débute avec la séparation des chromatides sœurs.",
        "correct": true,
        "explanation": "Exact : L’anaphase débute avec la séparation des chromatides sœurs. La mitose ouverte des cellules animales comprend prophase, prométaphase, métaphase, anaphase et télophase, puis la cytodiérèse achève la séparation physique des cellules filles."
      }
    ],
    "explanation": "La mitose ouverte des cellules animales comprend prophase, prométaphase, métaphase, anaphase et télophase, puis la cytodiérèse achève la séparation physique des cellules filles."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Pour le thème « Fuseau mitotique et microtubules », retenez les cinq affirmations correctes parmi les dix proposées.",
    "choices": [
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
        "content": "La dynamique des microtubules doit être totalement supprimée pour aligner les chromosomes.",
        "correct": false,
        "explanation": "Incorrect : La dynamique des microtubules doit être totalement supprimée pour aligner les chromosomes. À retenir : Le fuseau mitotique est organisé autour de deux pôles dans une mitose bipolaire normale."
      },
      {
        "content": "Les microtubules astraux interagissent avec le cortex cellulaire.",
        "correct": true,
        "explanation": "Exact : Les microtubules astraux interagissent avec le cortex cellulaire. Le fuseau bipolaire comprend des microtubules kinétochoriens, interpolaires et astraux. Leur dynamique et les moteurs moléculaires assurent l’alignement puis la ségrégation des chromosomes et l’écartement des pôles."
      },
      {
        "content": "Des moteurs moléculaires participent aux forces de glissement et de traction du fuseau.",
        "correct": true,
        "explanation": "Exact : Des moteurs moléculaires participent aux forces de glissement et de traction du fuseau. Le fuseau bipolaire comprend des microtubules kinétochoriens, interpolaires et astraux. Leur dynamique et les moteurs moléculaires assurent l’alignement puis la ségrégation des chromosomes et l’écartement des pôles."
      },
      {
        "content": "Les microtubules interpolaires issus de pôles opposés se chevauchent dans la zone médiane du fuseau.",
        "correct": true,
        "explanation": "Exact : Les microtubules interpolaires issus de pôles opposés se chevauchent dans la zone médiane du fuseau. Le fuseau bipolaire comprend des microtubules kinétochoriens, interpolaires et astraux. Leur dynamique et les moteurs moléculaires assurent l’alignement puis la ségrégation des chromosomes et l’écartement des pôles."
      },
      {
        "content": "Le fuseau mitotique est organisé autour de deux pôles dans une mitose bipolaire normale.",
        "correct": true,
        "explanation": "Exact : Le fuseau mitotique est organisé autour de deux pôles dans une mitose bipolaire normale. Le fuseau bipolaire comprend des microtubules kinétochoriens, interpolaires et astraux. Leur dynamique et les moteurs moléculaires assurent l’alignement puis la ségrégation des chromosomes et l’écartement des pôles."
      },
      {
        "content": "Les microtubules interpolaires relient chaque chromosome à son centromère.",
        "correct": false,
        "explanation": "Incorrect : Les microtubules interpolaires relient chaque chromosome à son centromère. À retenir : Des moteurs moléculaires participent aux forces de glissement et de traction du fuseau."
      },
      {
        "content": "La dynamique des microtubules est essentielle à la recherche et à la capture des kinétochores.",
        "correct": true,
        "explanation": "Exact : La dynamique des microtubules est essentielle à la recherche et à la capture des kinétochores. Le fuseau bipolaire comprend des microtubules kinétochoriens, interpolaires et astraux. Leur dynamique et les moteurs moléculaires assurent l’alignement puis la ségrégation des chromosomes et l’écartement des pôles."
      }
    ],
    "explanation": "Le fuseau bipolaire comprend des microtubules kinétochoriens, interpolaires et astraux. Leur dynamique et les moteurs moléculaires assurent l’alignement puis la ségrégation des chromosomes et l’écartement des pôles."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sélectionnez les affirmations compatibles avec « Centromère, kinétochore et bi-orientation ».",
    "choices": [
      {
        "content": "Le centromère est un organite cytoplasmique contenant des centrioles.",
        "correct": false,
        "explanation": "Incorrect : Le centromère est un organite cytoplasmique contenant des centrioles. À retenir : La bi-orientation signifie que les deux kinétochores sœurs sont reliés à des pôles opposés."
      },
      {
        "content": "Les microtubules kinétochoriens s’attachent aux kinétochores.",
        "correct": true,
        "explanation": "Exact : Les microtubules kinétochoriens s’attachent aux kinétochores. Le kinétochore est un assemblage protéique construit sur la région centromérique. En métaphase, les deux kinétochores sœurs doivent être attachés à des pôles opposés, assurant la bi-orientation et une ségrégation fidèle."
      },
      {
        "content": "Les chromosomes n’interagissent jamais avec les microtubules en métaphase.",
        "correct": false,
        "explanation": "Incorrect : Les chromosomes n’interagissent jamais avec les microtubules en métaphase. À retenir : Un défaut d’attachement kinetochore-microtubule active le checkpoint du fuseau."
      },
      {
        "content": "La bi-orientation signifie que les deux kinétochores sœurs sont reliés à des pôles opposés.",
        "correct": true,
        "explanation": "Exact : La bi-orientation signifie que les deux kinétochores sœurs sont reliés à des pôles opposés. Le kinétochore est un assemblage protéique construit sur la région centromérique. En métaphase, les deux kinétochores sœurs doivent être attachés à des pôles opposés, assurant la bi-orientation et une ségrégation fidèle."
      },
      {
        "content": "Un kinétochore non attaché déclenche normalement l’anaphase immédiatement.",
        "correct": false,
        "explanation": "Incorrect : Un kinétochore non attaché déclenche normalement l’anaphase immédiatement. À retenir : La tension entre kinétochores sœurs est associée à un attachement bipolaire correct."
      }
    ],
    "explanation": "Le kinétochore est un assemblage protéique construit sur la région centromérique. En métaphase, les deux kinétochores sœurs doivent être attachés à des pôles opposés, assurant la bi-orientation et une ségrégation fidèle."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant « Cohésine, sécurine et séparase » ?",
    "choices": [
      {
        "content": "La séparase clive une sous-unité de la cohésine au début de l’anaphase.",
        "correct": true,
        "explanation": "Exact : La séparase clive une sous-unité de la cohésine au début de l’anaphase. Les cohésines maintiennent les chromatides sœurs associées. La sécurine inhibe la séparase. Quand APC/C-Cdc20 entraîne la dégradation de la sécurine, la séparase peut cliver la cohésine et permettre l’anaphase."
      },
      {
        "content": "La séparase est inhibée par la sécurine avant l’anaphase.",
        "correct": true,
        "explanation": "Exact : La séparase est inhibée par la sécurine avant l’anaphase. Les cohésines maintiennent les chromatides sœurs associées. La sécurine inhibe la séparase. Quand APC/C-Cdc20 entraîne la dégradation de la sécurine, la séparase peut cliver la cohésine et permettre l’anaphase."
      },
      {
        "content": "La dégradation de la sécurine libère l’activité de la séparase.",
        "correct": true,
        "explanation": "Exact : La dégradation de la sécurine libère l’activité de la séparase. Les cohésines maintiennent les chromatides sœurs associées. La sécurine inhibe la séparase. Quand APC/C-Cdc20 entraîne la dégradation de la sécurine, la séparase peut cliver la cohésine et permettre l’anaphase."
      },
      {
        "content": "APC/C-Cdc20 contribue à déclencher la séparation des chromatides.",
        "correct": true,
        "explanation": "Exact : APC/C-Cdc20 contribue à déclencher la séparation des chromatides. Les cohésines maintiennent les chromatides sœurs associées. La sécurine inhibe la séparase. Quand APC/C-Cdc20 entraîne la dégradation de la sécurine, la séparase peut cliver la cohésine et permettre l’anaphase."
      },
      {
        "content": "Les cohésines sont des microtubules du fuseau.",
        "correct": false,
        "explanation": "Incorrect : Les cohésines sont des microtubules du fuseau. À retenir : La dégradation de la sécurine libère l’activité de la séparase."
      }
    ],
    "explanation": "Les cohésines maintiennent les chromatides sœurs associées. La sécurine inhibe la séparase. Quand APC/C-Cdc20 entraîne la dégradation de la sécurine, la séparase peut cliver la cohésine et permettre l’anaphase."
  },
  {
    "order": 80,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Parmi ces affirmations concernant « Checkpoint d’assemblage du fuseau », retenez exactement les 3 justes.",
    "choices": [
      {
        "content": "Un kinétochore non attaché peut générer un signal qui retarde l’anaphase.",
        "correct": true,
        "explanation": "Exact : Un kinétochore non attaché peut générer un signal qui retarde l’anaphase. Le spindle assembly checkpoint (SAC) bloque l’activation efficace d’APC/C-Cdc20 tant que subsistent des kinétochores non correctement attachés. Les protéines MAD et BUB participent au signal de checkpoint."
      },
      {
        "content": "Le checkpoint du fuseau inhibe fonctionnellement APC/C-Cdc20 tant que les attachements ne sont pas satisfaisants.",
        "correct": true,
        "explanation": "Exact : Le checkpoint du fuseau inhibe fonctionnellement APC/C-Cdc20 tant que les attachements ne sont pas satisfaisants. Le spindle assembly checkpoint (SAC) bloque l’activation efficace d’APC/C-Cdc20 tant que subsistent des kinétochores non correctement attachés. Les protéines MAD et BUB participent au signal de checkpoint."
      },
      {
        "content": "MAD2 et BUBR1 participent au complexe de checkpoint mitotique.",
        "correct": true,
        "explanation": "Exact : MAD2 et BUBR1 participent au complexe de checkpoint mitotique. Le spindle assembly checkpoint (SAC) bloque l’activation efficace d’APC/C-Cdc20 tant que subsistent des kinétochores non correctement attachés. Les protéines MAD et BUB participent au signal de checkpoint."
      },
      {
        "content": "Le checkpoint du fuseau devient inutile avant toute interaction chromosome-microtubule.",
        "correct": false,
        "explanation": "Incorrect : Le checkpoint du fuseau devient inutile avant toute interaction chromosome-microtubule. À retenir : Le checkpoint du fuseau inhibe fonctionnellement APC/C-Cdc20 tant que les attachements ne sont pas satisfaisants."
      },
      {
        "content": "MAD2 est une cycline de phase G1.",
        "correct": false,
        "explanation": "Incorrect : MAD2 est une cycline de phase G1. À retenir : MAD2 et BUBR1 participent au complexe de checkpoint mitotique."
      }
    ],
    "explanation": "Le spindle assembly checkpoint (SAC) bloque l’activation efficace d’APC/C-Cdc20 tant que subsistent des kinétochores non correctement attachés. Les protéines MAD et BUB participent au signal de checkpoint."
  },
  {
    "order": 81,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle protéase clive la cohésine pour permettre la séparation des chromatides sœurs ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "séparase",
        "separase"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La séparase clive une sous-unité de cohésine au déclenchement de l’anaphase."
  },
  {
    "order": 82,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les mécanismes de « APC/C-Cdc20 et APC/C-Cdh1 », quelles affirmations sont correctes ?",
    "choices": [
      {
        "content": "La destruction de cycline B contribue à la sortie de mitose.",
        "correct": true,
        "explanation": "Exact : La destruction de cycline B contribue à la sortie de mitose. APC/C change de coactivateur au cours de la mitose. Cdc20 est essentiel à l’entrée en anaphase, tandis que Cdh1 contribue à la sortie de mitose et au maintien d’un faible niveau d’activité CDK en G1."
      },
      {
        "content": "Cdc20 est un composant structural de l’ADN centromérique.",
        "correct": false,
        "explanation": "Incorrect : Cdc20 est un composant structural de l’ADN centromérique. À retenir : APC/C-Cdc20 cible notamment la sécurine et la cycline B."
      },
      {
        "content": "APC/C-Cdc20 cible notamment la sécurine et la cycline B.",
        "correct": true,
        "explanation": "Exact : APC/C-Cdc20 cible notamment la sécurine et la cycline B. APC/C change de coactivateur au cours de la mitose. Cdc20 est essentiel à l’entrée en anaphase, tandis que Cdh1 contribue à la sortie de mitose et au maintien d’un faible niveau d’activité CDK en G1."
      },
      {
        "content": "Cdh1 devient un coactivateur important d’APC/C lors de la sortie de mitose et en G1.",
        "correct": true,
        "explanation": "Exact : Cdh1 devient un coactivateur important d’APC/C lors de la sortie de mitose et en G1. APC/C change de coactivateur au cours de la mitose. Cdc20 est essentiel à l’entrée en anaphase, tandis que Cdh1 contribue à la sortie de mitose et au maintien d’un faible niveau d’activité CDK en G1."
      },
      {
        "content": "Cdc20 active APC/C au moment de la transition métaphase-anaphase.",
        "correct": true,
        "explanation": "Exact : Cdc20 active APC/C au moment de la transition métaphase-anaphase. APC/C change de coactivateur au cours de la mitose. Cdc20 est essentiel à l’entrée en anaphase, tandis que Cdh1 contribue à la sortie de mitose et au maintien d’un faible niveau d’activité CDK en G1."
      }
    ],
    "explanation": "APC/C change de coactivateur au cours de la mitose. Cdc20 est essentiel à l’entrée en anaphase, tandis que Cdh1 contribue à la sortie de mitose et au maintien d’un faible niveau d’activité CDK en G1."
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles affirmations décrivent correctement « Cytodiérèse » ?",
    "choices": [
      {
        "content": "Le fuseau mitotique participe au positionnement du plan de division.",
        "correct": true,
        "explanation": "Exact : Le fuseau mitotique participe au positionnement du plan de division. La cytodiérèse des cellules animales dépend d’un anneau contractile d’actine et de myosine II positionné au cortex équatorial. Sa contraction forme le sillon de clivage puis le corps intermédiaire avant l’abscission."
      },
      {
        "content": "La myosine II n’intervient jamais dans l’anneau contractile.",
        "correct": false,
        "explanation": "Incorrect : La myosine II n’intervient jamais dans l’anneau contractile. À retenir : Le fuseau mitotique participe au positionnement du plan de division."
      },
      {
        "content": "La contraction de l’anneau forme un sillon de clivage.",
        "correct": true,
        "explanation": "Exact : La contraction de l’anneau forme un sillon de clivage. La cytodiérèse des cellules animales dépend d’un anneau contractile d’actine et de myosine II positionné au cortex équatorial. Sa contraction forme le sillon de clivage puis le corps intermédiaire avant l’abscission."
      },
      {
        "content": "Un anneau contractile d’actine et de myosine II se forme à l’équateur de la cellule animale.",
        "correct": true,
        "explanation": "Exact : Un anneau contractile d’actine et de myosine II se forme à l’équateur de la cellule animale. La cytodiérèse des cellules animales dépend d’un anneau contractile d’actine et de myosine II positionné au cortex équatorial. Sa contraction forme le sillon de clivage puis le corps intermédiaire avant l’abscission."
      },
      {
        "content": "La cytodiérèse correspond à la réplication des chromosomes.",
        "correct": false,
        "explanation": "Incorrect : La cytodiérèse correspond à la réplication des chromosomes. À retenir : La contraction de l’anneau forme un sillon de clivage."
      }
    ],
    "explanation": "La cytodiérèse des cellules animales dépend d’un anneau contractile d’actine et de myosine II positionné au cortex équatorial. Sa contraction forme le sillon de clivage puis le corps intermédiaire avant l’abscission."
  },
  {
    "order": 84,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour le thème « Anaphase A et B », quelles propositions doivent être retenues ?",
    "choices": [
      {
        "content": "Les chromatides restent liées par la cohésine intacte pendant toute l’anaphase.",
        "correct": false,
        "explanation": "Incorrect : Les chromatides restent liées par la cohésine intacte pendant toute l’anaphase. À retenir : Le glissement de microtubules interpolaires contribue à l’anaphase B."
      },
      {
        "content": "La séparation des chromatides divise le nombre de chromosomes par deux dans la cellule avant cytodiérèse.",
        "correct": false,
        "explanation": "Incorrect : La séparation des chromatides divise le nombre de chromosomes par deux dans la cellule avant cytodiérèse. À retenir : Les forces exercées sur les microtubules astraux peuvent contribuer à l’écartement des pôles."
      },
      {
        "content": "L’anaphase B rapproche les deux pôles du fuseau l’un de l’autre.",
        "correct": false,
        "explanation": "Incorrect : L’anaphase B rapproche les deux pôles du fuseau l’un de l’autre. À retenir : L’anaphase B correspond à un éloignement des pôles du fuseau."
      },
      {
        "content": "Le raccourcissement des microtubules kinétochoriens contribue à l’anaphase A.",
        "correct": true,
        "explanation": "Exact : Le raccourcissement des microtubules kinétochoriens contribue à l’anaphase A. Pendant l’anaphase, les chromatides se rapprochent des pôles par raccourcissement des microtubules kinétochoriens (anaphase A) et les pôles s’éloignent notamment grâce aux microtubules interpolaires et aux forces corticales (anaphase B)."
      },
      {
        "content": "L’anaphase B correspond à un éloignement des pôles du fuseau.",
        "correct": true,
        "explanation": "Exact : L’anaphase B correspond à un éloignement des pôles du fuseau. Pendant l’anaphase, les chromatides se rapprochent des pôles par raccourcissement des microtubules kinétochoriens (anaphase A) et les pôles s’éloignent notamment grâce aux microtubules interpolaires et aux forces corticales (anaphase B)."
      }
    ],
    "explanation": "Pendant l’anaphase, les chromatides se rapprochent des pôles par raccourcissement des microtubules kinétochoriens (anaphase A) et les pôles s’éloignent notamment grâce aux microtubules interpolaires et aux forces corticales (anaphase B)."
  },
  {
    "order": 85,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle proposition est compatible avec les mécanismes de « Phases de la mitose » ?",
    "choices": [
      {
        "content": "La cytodiérèse est une étape de réplication de l’ADN nucléaire.",
        "correct": false,
        "explanation": "Incorrect : La cytodiérèse est une étape de réplication de l’ADN nucléaire. À retenir : En télophase, les enveloppes nucléaires se reforment autour des lots chromosomiques."
      },
      {
        "content": "La réplication complète du génome se déroule pendant la métaphase.",
        "correct": false,
        "explanation": "Incorrect : La réplication complète du génome se déroule pendant la métaphase. À retenir : La condensation des chromosomes augmente pendant la prophase."
      },
      {
        "content": "En métaphase, les chromatides sœurs sont déjà toutes séparées aux deux pôles.",
        "correct": false,
        "explanation": "Incorrect : En métaphase, les chromatides sœurs sont déjà toutes séparées aux deux pôles. À retenir : La cytodiérèse sépare physiquement les deux cellules filles."
      },
      {
        "content": "En métaphase, les chromosomes sont alignés autour de la plaque équatoriale.",
        "correct": true,
        "explanation": "Exact : En métaphase, les chromosomes sont alignés autour de la plaque équatoriale. La mitose ouverte des cellules animales comprend prophase, prométaphase, métaphase, anaphase et télophase, puis la cytodiérèse achève la séparation physique des cellules filles."
      },
      {
        "content": "L’enveloppe nucléaire reste intacte pendant toute la prométaphase des cellules animales typiques.",
        "correct": false,
        "explanation": "Incorrect : L’enveloppe nucléaire reste intacte pendant toute la prométaphase des cellules animales typiques. À retenir : La mitose répartit les chromosomes répliqués entre deux noyaux filles."
      }
    ],
    "explanation": "La mitose ouverte des cellules animales comprend prophase, prométaphase, métaphase, anaphase et télophase, puis la cytodiérèse achève la séparation physique des cellules filles."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel complexe E3 ubiquitine ligase déclenche notamment la dégradation de la sécurine à la transition métaphase-anaphase ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "APC/C-Cdc20",
        "APC C Cdc20",
        "APC/C CDC20",
        "APC-Cdc20"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "APC/C activé par Cdc20 ubiquitine notamment la sécurine et la cycline B."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Parmi ces affirmations concernant « Fuseau mitotique et microtubules », retenez exactement les 3 justes.",
    "choices": [
      {
        "content": "Dans une cellule somatique, les microtubules interpolaires relient chaque chromosome à son centromère.",
        "correct": false,
        "explanation": "Incorrect : Les microtubules interpolaires relient chaque chromosome à son centromère. À retenir : Des moteurs moléculaires participent aux forces de glissement et de traction du fuseau."
      },
      {
        "content": "Dans une cellule somatique, les microtubules astraux interagissent avec le cortex cellulaire.",
        "correct": true,
        "explanation": "Exact : Les microtubules astraux interagissent avec le cortex cellulaire. Le fuseau bipolaire comprend des microtubules kinétochoriens, interpolaires et astraux. Leur dynamique et les moteurs moléculaires assurent l’alignement puis la ségrégation des chromosomes et l’écartement des pôles."
      },
      {
        "content": "Dans une cellule somatique, la dynamique des microtubules est essentielle à la recherche et à la capture des kinétochores.",
        "correct": true,
        "explanation": "Exact : La dynamique des microtubules est essentielle à la recherche et à la capture des kinétochores. Le fuseau bipolaire comprend des microtubules kinétochoriens, interpolaires et astraux. Leur dynamique et les moteurs moléculaires assurent l’alignement puis la ségrégation des chromosomes et l’écartement des pôles."
      },
      {
        "content": "Dans une cellule somatique, le fuseau mitotique est organisé autour de deux pôles dans une mitose bipolaire normale.",
        "correct": true,
        "explanation": "Exact : Le fuseau mitotique est organisé autour de deux pôles dans une mitose bipolaire normale. Le fuseau bipolaire comprend des microtubules kinétochoriens, interpolaires et astraux. Leur dynamique et les moteurs moléculaires assurent l’alignement puis la ségrégation des chromosomes et l’écartement des pôles."
      },
      {
        "content": "Dans une cellule somatique, la dynamique des microtubules doit être totalement supprimée pour aligner les chromosomes.",
        "correct": false,
        "explanation": "Incorrect : La dynamique des microtubules doit être totalement supprimée pour aligner les chromosomes. À retenir : Le fuseau mitotique est organisé autour de deux pôles dans une mitose bipolaire normale."
      }
    ],
    "explanation": "Le fuseau bipolaire comprend des microtubules kinétochoriens, interpolaires et astraux. Leur dynamique et les moteurs moléculaires assurent l’alignement puis la ségrégation des chromosomes et l’écartement des pôles."
  },
  {
    "order": 88,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de « Centromère, kinétochore et bi-orientation », sélectionnez les propositions exactes.",
    "choices": [
      {
        "content": "Un défaut d’attachement kinetochore-microtubule active le checkpoint du fuseau.",
        "correct": true,
        "explanation": "Exact : Un défaut d’attachement kinetochore-microtubule active le checkpoint du fuseau. Le kinétochore est un assemblage protéique construit sur la région centromérique. En métaphase, les deux kinétochores sœurs doivent être attachés à des pôles opposés, assurant la bi-orientation et une ségrégation fidèle."
      },
      {
        "content": "Dans une cellule somatique, un kinétochore non attaché déclenche normalement l’anaphase immédiatement.",
        "correct": false,
        "explanation": "Incorrect : Un kinétochore non attaché déclenche normalement l’anaphase immédiatement. À retenir : La tension entre kinétochores sœurs est associée à un attachement bipolaire correct."
      },
      {
        "content": "La tension entre kinétochores sœurs est associée à un attachement bipolaire correct.",
        "correct": true,
        "explanation": "Exact : La tension entre kinétochores sœurs est associée à un attachement bipolaire correct. Le kinétochore est un assemblage protéique construit sur la région centromérique. En métaphase, les deux kinétochores sœurs doivent être attachés à des pôles opposés, assurant la bi-orientation et une ségrégation fidèle."
      },
      {
        "content": "Dans une cellule somatique, la bi-orientation signifie que les deux kinétochores sœurs sont reliés à des pôles opposés.",
        "correct": true,
        "explanation": "Exact : La bi-orientation signifie que les deux kinétochores sœurs sont reliés à des pôles opposés. Le kinétochore est un assemblage protéique construit sur la région centromérique. En métaphase, les deux kinétochores sœurs doivent être attachés à des pôles opposés, assurant la bi-orientation et une ségrégation fidèle."
      },
      {
        "content": "L’alignement métaphasique résulte d’un équilibre dynamique de forces.",
        "correct": true,
        "explanation": "Exact : L’alignement métaphasique résulte d’un équilibre dynamique de forces. Le kinétochore est un assemblage protéique construit sur la région centromérique. En métaphase, les deux kinétochores sœurs doivent être attachés à des pôles opposés, assurant la bi-orientation et une ségrégation fidèle."
      }
    ],
    "explanation": "Le kinétochore est un assemblage protéique construit sur la région centromérique. En métaphase, les deux kinétochores sœurs doivent être attachés à des pôles opposés, assurant la bi-orientation et une ségrégation fidèle."
  },
  {
    "order": 89,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Sur ce schéma simplifié d’une cellule en métaphase, cliquez sur la plaque métaphasique où sont alignés les chromosomes.",
    "image": {
      "src": "/images/training/ue14/biologie-cellulaire/cycle-cellulaire/metaphase-plaque-qzone.svg",
      "alt": "Schéma simplifié d’une cellule en métaphase avec fuseau bipolaire et chromosomes alignés",
      "width": 1200,
      "height": 700
    },
    "expectedZones": [
      {
        "id": "plaque-metaphasique",
        "label": "Plaque métaphasique",
        "x": 0.5,
        "y": 0.5,
        "tolerance": 0.11
      }
    ],
    "defaultTolerance": 0.11,
    "explanation": "En métaphase, les chromosomes bi-orientés s’alignent autour du plan équatorial de la cellule, appelé plaque métaphasique."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel coactivateur de l’APC/C prend une importance majeure lors de la sortie de mitose et en G1 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Cdh1",
        "CDH1"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "APC/C-Cdh1 contribue à la sortie de mitose et au maintien d’une faible activité CDK en G1."
  },
  {
    "order": 91,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour le thème « Cohésine, sécurine et séparase », quelles propositions doivent être retenues ?",
    "choices": [
      {
        "content": "APC/C-Cdc20 contribue à déclencher la séparation des chromatides.",
        "correct": true,
        "explanation": "Exact : APC/C-Cdc20 contribue à déclencher la séparation des chromatides. Les cohésines maintiennent les chromatides sœurs associées. La sécurine inhibe la séparase. Quand APC/C-Cdc20 entraîne la dégradation de la sécurine, la séparase peut cliver la cohésine et permettre l’anaphase."
      },
      {
        "content": "La dégradation de la sécurine libère l’activité de la séparase.",
        "correct": true,
        "explanation": "Exact : La dégradation de la sécurine libère l’activité de la séparase. Les cohésines maintiennent les chromatides sœurs associées. La sécurine inhibe la séparase. Quand APC/C-Cdc20 entraîne la dégradation de la sécurine, la séparase peut cliver la cohésine et permettre l’anaphase."
      },
      {
        "content": "La séparase clive une sous-unité de la cohésine au début de l’anaphase.",
        "correct": true,
        "explanation": "Exact : La séparase clive une sous-unité de la cohésine au début de l’anaphase. Les cohésines maintiennent les chromatides sœurs associées. La sécurine inhibe la séparase. Quand APC/C-Cdc20 entraîne la dégradation de la sécurine, la séparase peut cliver la cohésine et permettre l’anaphase."
      },
      {
        "content": "La cohésine doit être synthétisée pour séparer les chromatides.",
        "correct": false,
        "explanation": "Incorrect : La cohésine doit être synthétisée pour séparer les chromatides. À retenir : APC/C-Cdc20 contribue à déclencher la séparation des chromatides."
      },
      {
        "content": "La dégradation de la sécurine inhibe définitivement la séparase.",
        "correct": false,
        "explanation": "Incorrect : La dégradation de la sécurine inhibe définitivement la séparase. À retenir : La perte de cohésion permet aux chromatides sœurs de migrer vers des pôles opposés."
      }
    ],
    "explanation": "Les cohésines maintiennent les chromatides sœurs associées. La sécurine inhibe la séparase. Quand APC/C-Cdc20 entraîne la dégradation de la sécurine, la séparase peut cliver la cohésine et permettre l’anaphase."
  },
  {
    "order": 92,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle phase de la mitose correspond à l’alignement des chromosomes sur la plaque équatoriale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "métaphase",
        "metaphase"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’alignement sur la plaque équatoriale caractérise la métaphase."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle phase de la mitose débute avec la séparation des chromatides sœurs ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "anaphase"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le déclenchement de l’anaphase suit la perte de cohésion entre chromatides sœurs."
  },
  {
    "order": 94,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle phase voit la reformation des enveloppes nucléaires autour des chromosomes ségrégés ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "télophase",
        "telophase"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La télophase s’accompagne de la reconstitution des noyaux filles."
  },
  {
    "order": 95,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment nomme-t-on la division physique du cytoplasme qui achève la séparation des cellules filles ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cytodiérèse",
        "cytodierese",
        "cytokinese",
        "cytokinesis",
        "cytocinèse",
        "cytocinese"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La cytodiérèse, ou cytokinèse, sépare physiquement les deux cellules filles."
  },
  {
    "order": 96,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de « Checkpoint d’assemblage du fuseau », sélectionnez les propositions exactes.",
    "choices": [
      {
        "content": "Le checkpoint du fuseau inhibe fonctionnellement APC/C-Cdc20 tant que les attachements ne sont pas satisfaisants.",
        "correct": true,
        "explanation": "Exact : Le checkpoint du fuseau inhibe fonctionnellement APC/C-Cdc20 tant que les attachements ne sont pas satisfaisants. Le spindle assembly checkpoint (SAC) bloque l’activation efficace d’APC/C-Cdc20 tant que subsistent des kinétochores non correctement attachés. Les protéines MAD et BUB participent au signal de checkpoint."
      },
      {
        "content": "Le checkpoint du fuseau est localisé exclusivement dans le nucléole interphasique.",
        "correct": false,
        "explanation": "Incorrect : Le checkpoint du fuseau est localisé exclusivement dans le nucléole interphasique. À retenir : Le checkpoint du fuseau contribue à limiter les erreurs de ségrégation chromosomique."
      },
      {
        "content": "MAD2 et BUBR1 participent au complexe de checkpoint mitotique.",
        "correct": true,
        "explanation": "Exact : MAD2 et BUBR1 participent au complexe de checkpoint mitotique. Le spindle assembly checkpoint (SAC) bloque l’activation efficace d’APC/C-Cdc20 tant que subsistent des kinétochores non correctement attachés. Les protéines MAD et BUB participent au signal de checkpoint."
      },
      {
        "content": "Le checkpoint du fuseau contrôle principalement la réplication de l’ADN en phase S.",
        "correct": false,
        "explanation": "Incorrect : Le checkpoint du fuseau contrôle principalement la réplication de l’ADN en phase S. À retenir : Le checkpoint du fuseau surveille l’attachement des kinétochores aux microtubules."
      },
      {
        "content": "APC/C-Cdc20 est une enzyme de synthèse des microtubules.",
        "correct": false,
        "explanation": "Incorrect : APC/C-Cdc20 est une enzyme de synthèse des microtubules. À retenir : L’extinction du checkpoint permet la dégradation de la sécurine."
      }
    ],
    "explanation": "Le spindle assembly checkpoint (SAC) bloque l’activation efficace d’APC/C-Cdc20 tant que subsistent des kinétochores non correctement attachés. Les protéines MAD et BUB participent au signal de checkpoint."
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Dans le cadre de « APC/C-Cdc20 et APC/C-Cdh1 », identifiez l’affirmation correcte.",
    "choices": [
      {
        "content": "APC/C-Cdh1 initie la réplication de l’ADN en phosphorylant directement les origines.",
        "correct": false,
        "explanation": "Incorrect : APC/C-Cdh1 initie la réplication de l’ADN en phosphorylant directement les origines. À retenir : La destruction de cycline B contribue à la sortie de mitose."
      },
      {
        "content": "APC/C-Cdc20 cible notamment la sécurine et la cycline B.",
        "correct": true,
        "explanation": "Exact : APC/C-Cdc20 cible notamment la sécurine et la cycline B. APC/C change de coactivateur au cours de la mitose. Cdc20 est essentiel à l’entrée en anaphase, tandis que Cdh1 contribue à la sortie de mitose et au maintien d’un faible niveau d’activité CDK en G1."
      },
      {
        "content": "APC/C est un canal calcique de la membrane plasmique.",
        "correct": false,
        "explanation": "Incorrect : APC/C est un canal calcique de la membrane plasmique. À retenir : APC/C est une ubiquitine ligase E3."
      },
      {
        "content": "Cdc20 et Cdh1 sont deux histones du nucléosome.",
        "correct": false,
        "explanation": "Incorrect : Cdc20 et Cdh1 sont deux histones du nucléosome. À retenir : La succession Cdc20 puis Cdh1 participe à l’ordre temporel de la fin de mitose."
      },
      {
        "content": "Cdh1 est la protéase qui clive directement la cohésine.",
        "correct": false,
        "explanation": "Incorrect : Cdh1 est la protéase qui clive directement la cohésine. À retenir : Cdc20 active APC/C au moment de la transition métaphase-anaphase."
      }
    ],
    "explanation": "APC/C change de coactivateur au cours de la mitose. Cdc20 est essentiel à l’entrée en anaphase, tandis que Cdh1 contribue à la sortie de mitose et au maintien d’un faible niveau d’activité CDK en G1."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quels deux éléments du cytosquelette forment le moteur principal de l’anneau contractile des cellules animales ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "actine et myosine II",
        "actine myosine II",
        "actine et myosine 2"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’anneau contractile associe des filaments d’actine et la myosine II."
  },
  {
    "order": 99,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour le thème « Cytodiérèse », quelles propositions doivent être retenues ?",
    "choices": [
      {
        "content": "Le fuseau mitotique participe au positionnement du plan de division.",
        "correct": true,
        "explanation": "Exact : Le fuseau mitotique participe au positionnement du plan de division. La cytodiérèse des cellules animales dépend d’un anneau contractile d’actine et de myosine II positionné au cortex équatorial. Sa contraction forme le sillon de clivage puis le corps intermédiaire avant l’abscission."
      },
      {
        "content": "Le corps intermédiaire relie transitoirement les cellules filles avant l’abscission.",
        "correct": true,
        "explanation": "Exact : Le corps intermédiaire relie transitoirement les cellules filles avant l’abscission. La cytodiérèse des cellules animales dépend d’un anneau contractile d’actine et de myosine II positionné au cortex équatorial. Sa contraction forme le sillon de clivage puis le corps intermédiaire avant l’abscission."
      },
      {
        "content": "L’abscission précède normalement la métaphase.",
        "correct": false,
        "explanation": "Incorrect : L’abscission précède normalement la métaphase. À retenir : L’abscission constitue l’étape finale de séparation des cellules filles."
      },
      {
        "content": "La contraction de l’anneau forme un sillon de clivage.",
        "correct": true,
        "explanation": "Exact : La contraction de l’anneau forme un sillon de clivage. La cytodiérèse des cellules animales dépend d’un anneau contractile d’actine et de myosine II positionné au cortex équatorial. Sa contraction forme le sillon de clivage puis le corps intermédiaire avant l’abscission."
      },
      {
        "content": "L’abscission constitue l’étape finale de séparation des cellules filles.",
        "correct": true,
        "explanation": "Exact : L’abscission constitue l’étape finale de séparation des cellules filles. La cytodiérèse des cellules animales dépend d’un anneau contractile d’actine et de myosine II positionné au cortex équatorial. Sa contraction forme le sillon de clivage puis le corps intermédiaire avant l’abscission."
      }
    ],
    "explanation": "La cytodiérèse des cellules animales dépend d’un anneau contractile d’actine et de myosine II positionné au cortex équatorial. Sa contraction forme le sillon de clivage puis le corps intermédiaire avant l’abscission."
  },
  {
    "order": 100,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Pour « Anaphase A et B », quelle proposition doit être retenue ?",
    "choices": [
      {
        "content": "Les microtubules kinétochoriens doivent s’allonger indéfiniment pour rapprocher les chromosomes des pôles.",
        "correct": false,
        "explanation": "Incorrect : Les microtubules kinétochoriens doivent s’allonger indéfiniment pour rapprocher les chromosomes des pôles. À retenir : Le raccourcissement des microtubules kinétochoriens contribue à l’anaphase A."
      },
      {
        "content": "L’anaphase B correspond à un éloignement des pôles du fuseau.",
        "correct": true,
        "explanation": "Exact : L’anaphase B correspond à un éloignement des pôles du fuseau. Pendant l’anaphase, les chromatides se rapprochent des pôles par raccourcissement des microtubules kinétochoriens (anaphase A) et les pôles s’éloignent notamment grâce aux microtubules interpolaires et aux forces corticales (anaphase B)."
      },
      {
        "content": "L’anaphase ne dépend d’aucune force produite par le fuseau.",
        "correct": false,
        "explanation": "Incorrect : L’anaphase ne dépend d’aucune force produite par le fuseau. À retenir : La séparation des chromatides transforme chaque chromatide en chromosome indépendant."
      },
      {
        "content": "L’anaphase A correspond à la réplication des chromosomes au centre du fuseau.",
        "correct": false,
        "explanation": "Incorrect : L’anaphase A correspond à la réplication des chromosomes au centre du fuseau. À retenir : L’anaphase A correspond au mouvement des chromosomes vers les pôles."
      },
      {
        "content": "La séparation des chromatides divise le nombre de chromosomes par deux dans la cellule avant cytodiérèse.",
        "correct": false,
        "explanation": "Incorrect : La séparation des chromatides divise le nombre de chromosomes par deux dans la cellule avant cytodiérèse. À retenir : Les forces exercées sur les microtubules astraux peuvent contribuer à l’écartement des pôles."
      }
    ],
    "explanation": "Pendant l’anaphase, les chromatides se rapprochent des pôles par raccourcissement des microtubules kinétochoriens (anaphase A) et les pôles s’éloignent notamment grâce aux microtubules interpolaires et aux forces corticales (anaphase B)."
  }
];

export const SECTION_D_QUIZZES: SeedQuiz[] = [
  {
    "order": 7,
    "slug": "cycle-cellulaire-mitose-1",
    "title": "Phases de mitose et fuseau",
    "description": "Prophase à anaphase : organisation et mouvements chromosomiques.",
    "stage": "DISCOVER",
    "sectionOrder": 4,
    "questionOrders": [
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76
    ]
  },
  {
    "order": 8,
    "slug": "cycle-cellulaire-mitose-2",
    "title": "Kinétochores, cohésine et checkpoint",
    "description": "Bi-orientation et contrôle de la transition métaphase-anaphase.",
    "stage": "PRACTICE",
    "sectionOrder": 4,
    "questionOrders": [
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88
    ]
  },
  {
    "order": 9,
    "slug": "cycle-cellulaire-mitose-3",
    "title": "Anaphase, télophase et cytodiérèse",
    "description": "APC/C, séparase, sortie de mitose et séparation cellulaire.",
    "stage": "PRACTICE",
    "sectionOrder": 4,
    "questionOrders": [
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100
    ]
  }
];
