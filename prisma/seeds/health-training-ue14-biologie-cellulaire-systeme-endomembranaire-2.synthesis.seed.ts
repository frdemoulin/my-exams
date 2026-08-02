/**
 * UE14 – Biologie cellulaire – Chapitre 5
 * Contenu pédagogique fondé sur la fiche 2024-2025 du Tutorat Santé de Reims.
 */
import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
  {
    order: 121,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Le trajet d’une protéine sécrétée comprend généralement :`,
    choices: [
      `Synthèse et translocation dans le RER.`,
      `Maturation dans le RE et le Golgi.`,
      `Tri au TGN.`,
      `Diffusion directe du ribosome vers la MEC sans membrane.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La voie sécrétoire utilise successivement RE, Golgi, vésicules puis membrane plasmique.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 122,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Une protéine résidente soluble du RE :`,
    choices: [
      `Peut porter KDEL.`,
      `Peut être reconnue par le récepteur ERD dans le Golgi.`,
      `Peut être ramenée vers le RE.`,
      `Doit porter un M6P pour revenir au RE.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Le M6P oriente vers les lysosomes, pas vers le RE.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 123,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Une hydrolase lysosomale :`,
    choices: [
      `Est synthétisée dans le RE.`,
      `Reçoit un M6P dans le Golgi.`,
      `Est triée via un récepteur M6P.`,
      `Reste dans le cytosol après sa traduction.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Les hydrolases lysosomales suivent la voie luminale du SEM.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 124,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Le maintien du pH lysosomal dépend :`,
    choices: [
      `D’une pompe H+ ATPase.`,
      `De l’entrée de protons.`,
      `De l’ATP.`,
      `Du motif KDEL de toutes les hydrolases.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `KDEL est un signal de rétention du RE, non un mécanisme d’acidification.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 125,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Le RE et le Golgi ont en commun :`,
    choices: [
      `Des fonctions de maturation des protéines.`,
      `Un stockage possible du Ca2+.`,
      `Une participation à la voie sécrétoire.`,
      `La présence d’hydrolases acides fonctionnant toutes à pH 5.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Le pH 5 et les hydrolases acides caractérisent surtout le lysosome.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 126,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Une anomalie de repliement dans le RE peut :`,
    choices: [
      `Activer une réponse de contrôle de qualité.`,
      `Augmenter la synthèse de chaperonnes.`,
      `Modifier la régulation transcriptionnelle.`,
      `Être obligatoirement corrigée par le récepteur M6P.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Le M6P concerne l’adressage lysosomal, non le repliement dans le RE.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 127,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Une mutation affectant la GlcNAc-phosphotransférase pourrait :`,
    choices: [
      `Réduire le marquage M6P.`,
      `Désadresser de nombreuses hydrolases lysosomales.`,
      `Provoquer une mucolipidose de type II.`,
      `Améliorer le catabolisme lysosomal.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Le défaut de marquage M6P diminue la livraison enzymatique aux lysosomes.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 128,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Le transport vésiculaire entre RE, Golgi et lysosomes implique :`,
    choices: [
      `Des protéines de revêtement.`,
      `Des moteurs cytosquelettiques.`,
      `Des protéines d’amarrage et de fusion.`,
      `Une absence de consommation énergétique.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `GTP et ATP interviennent à plusieurs étapes du trafic.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 129,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Le Golgi intervient dans :`,
    choices: [
      `La O-glycosylation.`,
      `La synthèse de sphingolipides.`,
      `Le tri de protéines au TGN.`,
      `La traduction des ARNm par des ribosomes golgiens.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La traduction se déroule sur des ribosomes cytosoliques ou associés au RER.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 130,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Le lysosome reçoit du matériel :`,
    choices: [
      `Par endocytose.`,
      `Par phagocytose.`,
      `Par autophagie.`,
      `Uniquement par le flux principal du RE.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Les lysosomes reçoivent du matériel par plusieurs voies convergentes.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 131,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Une protéine transmembranaire du RE perd son motif KKXX. On peut prévoir :`,
    choices: [
      `Une récupération moins efficace vers le RE.`,
      `Une progression possible vers le Golgi.`,
      `Une mauvaise localisation membranaire.`,
      `Une conversion automatique en hydrolase soluble.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La perte du signal de rétention perturbe le tri, sans changer la nature de la protéine.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 132,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Une toxine bloque Rab-GTP :`,
    choices: [
      `L’amarrage vésiculaire peut être perturbé.`,
      `Le rapprochement des membranes peut diminuer.`,
      `La fusion et la livraison des cargaisons peuvent être affectées.`,
      `La N-glycosylation devient nécessairement plus rapide.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Rab est un acteur de l’amarrage, non de la N-glycosylation.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 133,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Une cellule sécrétrice endocrine très active devrait présenter :`,
    choices: [
      `Un RE et un Golgi développés.`,
      `De nombreux grains de sécrétion.`,
      `Une forte activité de maturation et de tri.`,
      `Une absence de flux vésiculaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Une activité sécrétoire intense implique au contraire un trafic abondant.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 134,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Une enzyme lysosomale exocytée par erreur dans la MEC :`,
    choices: [
      `Peut avoir une activité temporaire en milieu extracellulaire.`,
      `Peut être recaptée par un récepteur M6P.`,
      `Peut retourner dans le compartiment lysosomal.`,
      `Ne peut jamais être récupérée.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Le système M6P permet aussi la recapture de certaines hydrolases extracellulaires.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 135,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Une perte d’acidité lysosomale pourrait :`,
    choices: [
      `Diminuer l’efficacité des hydrolases acides.`,
      `Favoriser une accumulation de substrats.`,
      `Contribuer à une pathologie acquise.`,
      `Accroître systématiquement toutes les réactions hydrolytiques.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Les hydrolases acides nécessitent un pH bas pour fonctionner efficacement.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 136,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Une molécule hydrophobe à détoxifier dans un hépatocyte peut :`,
    choices: [
      `Être hydroxylée par un cytochrome P450.`,
      `Subir une glycuronoconjugaison.`,
      `Devenir plus hydrosoluble.`,
      `Être adressée au lysosome uniquement grâce à KDEL.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `KDEL est un signal de rétention de protéines du RE, sans rapport avec la détoxification d’une drogue.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 137,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Les deux figures suivantes présentent la translocation cotraductionnelle dans le RER et l’organisation fonctionnelle de l’appareil de Golgi.

![Translocation dans le RER](/images/training/ue14/biologie-cellulaire/systeme-endomembranaire-2/translocation-proteine-rer.png)

![Organisation du Golgi](/images/training/ue14/biologie-cellulaire/systeme-endomembranaire-2/golgi-compartiments-tri.png)

En croisant ces deux figures, quelle(s) proposition(s) est(sont) exacte(s) ?`,
    choices: [
      `Le RE initie la synthèse et les premières modifications.`,
      `Le Golgi poursuit la maturation et le tri.`,
      `Les protéines peuvent circuler par des vésicules entre ces compartiments.`,
      `Le Golgi précède toujours le RE dans la voie sécrétoire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Dans le flux principal, le RE précède le Golgi.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 138,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Les deux figures suivantes présentent l’adressage des hydrolases lysosomales par le M6P et les voies d’entrée dans le lysosome.

![Adressage M6P](/images/training/ue14/biologie-cellulaire/systeme-endomembranaire-2/adressage-m6p-lysosome.png)

![Voies d’entrée lysosomales](/images/training/ue14/biologie-cellulaire/systeme-endomembranaire-2/voies-entree-lysosome.png)

En croisant ces deux figures, quelle(s) proposition(s) est(sont) exacte(s) ?`,
    choices: [
      `Les hydrolases et les substrats n’entrent pas par les mêmes mécanismes.`,
      `Les hydrolases sont adressées depuis le Golgi.`,
      `Les substrats peuvent arriver par endocytose ou autophagie.`,
      `Le lysosome synthétise lui-même toutes ses hydrolases.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Les hydrolases sont synthétisées au RER puis triées par le Golgi.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 139,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Les cinq figures suivantes résument les principaux compartiments, flux et signaux d’adressage du chapitre.

![Translocation dans le RER](/images/training/ue14/biologie-cellulaire/systeme-endomembranaire-2/translocation-proteine-rer.png)

![Organisation du Golgi](/images/training/ue14/biologie-cellulaire/systeme-endomembranaire-2/golgi-compartiments-tri.png)

![Adressage M6P](/images/training/ue14/biologie-cellulaire/systeme-endomembranaire-2/adressage-m6p-lysosome.png)

![Voies d’entrée lysosomales](/images/training/ue14/biologie-cellulaire/systeme-endomembranaire-2/voies-entree-lysosome.png)

![Signaux d’adressage](/images/training/ue14/biologie-cellulaire/systeme-endomembranaire-2/signaux-adressage-retention.png)

En les croisant, quelle(s) proposition(s) est(sont) exacte(s) ?`,
    choices: [
      `Le SEM est un réseau de compartiments reliés par des flux.`,
      `Les signaux d’adressage déterminent la destination des protéines.`,
      `Le lysosome reçoit enzymes et substrats par des voies coordonnées.`,
      `Le trafic intracellulaire se déroule sans contrôle moléculaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Le trafic est contrôlé par signaux, revêtements, moteurs et protéines d’amarrage.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
  {
    order: 140,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Quelle conclusion générale est la plus fidèle au chapitre ?`,
    choices: [
      `Le RE synthétise et contrôle, le Golgi modifie et trie, le lysosome dégrade.`,
      `Les flux membranaires assurent la continuité fonctionnelle entre compartiments.`,
      `Les défauts de maturation, d’adressage ou de catabolisme peuvent provoquer des pathologies.`,
      `Chaque compartiment fonctionne indépendamment des autres.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Le système endomembranaire fonctionne comme un réseau intégré et dynamique.`,
    choiceExplanations: [
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Exact : conforme aux éléments de la fiche.`,
      `Faux : contredit ou dépasse les éléments de la fiche.`,
    ],
  },
];

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    order: 13,
    slug: `reticulum-golgi-lysosomes-flux`,
    title: `Réticulum, Golgi, lysosomes et flux`,
    description: `Révision transversale des fonctions et des relations entre les compartiments du SEM.`,
    stage: 'PRACTICE',
    sectionOrder: 5,
    questionOrders: [121, 122, 123, 124, 125, 126, 127, 128, 129, 130],
  },
  {
    order: 14,
    slug: `synthese-experimentale-systeme-endomembranaire-2`,
    title: `Synthèse expérimentale du chapitre`,
    description: `Situations intégratives sur la maturation, l’adressage et le catabolisme dans le SEM.`,
    stage: 'MASTER',
    sectionOrder: 5,
    items: [
      {
        type: 'GROUP',
        title: `Rétention et adressage des protéines`,
        sharedStatement: `Une équipe modifie successivement les signaux KKXX, KDEL et M6P afin d’étudier la localisation de protéines du système endomembranaire.`,
        questionOrders: [131, 132],
      },
      {
        type: 'GROUP',
        title: `Cellule sécrétrice et contrôle de qualité`,
        sharedStatement: `Une cellule endocrine très active est soumise à une accumulation de protéines mal repliées puis à une perturbation du Golgi.`,
        questionOrders: [133, 134, 135, 136],
      },
      { type: 'QUESTION', questionOrder: 137 },
      { type: 'QUESTION', questionOrder: 138 },
      { type: 'QUESTION', questionOrder: 139 },
      { type: 'QUESTION', questionOrder: 140 },
    ],
  },
];
