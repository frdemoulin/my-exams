/**
 * UE14 – Biologie cellulaire – Chapitre 3
 * Contenu pédagogique fondé sur la fiche 2024-2025 du Tutorat Santé de Reims.
 */
import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
  {
    order: 121,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Parmi les propositions suivantes, lesquelles résument correctement le cytosquelette ?`,
    choices: [
      `Il structure le cytoplasme.`,
      `Il participe à des mouvements.`,
      `Il comporte trois réseaux protéiques principaux.`,
      `Il est constitué uniquement de membranes lipidiques.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Le cytosquelette est une matrice protéique structurale et dynamique.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
  {
    order: 122,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La comparaison des trois réseaux montre que :`,
    choices: [
      `Les microtubules sont les plus larges.`,
      `Les microfilaments d’actine sont les plus fins.`,
      `Les filaments intermédiaires ont un diamètre intermédiaire.`,
      `Les trois réseaux ont exactement la même dynamique.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Les filaments intermédiaires sont plus stabilisés que les microtubules cytosoliques et l’actine.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
  {
    order: 123,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Un transport intracellulaire de longue distance vers la périphérie peut mobiliser :`,
    choices: [
      `Un microtubule polarisé.`,
      `Une kinésine.`,
      `L’hydrolyse de l’ATP.`,
      `Une cytokératine comme moteur antérograde.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La kinésine est le moteur antérograde microtubulaire.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
  {
    order: 124,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Une vésicule se déplaçant vers le centrosome peut mobiliser :`,
    choices: [
      `Une dynéine.`,
      `Un microtubule orienté vers l’extrémité (−).`,
      `Un transport rétrograde.`,
      `Une fimbrine comme moteur principal.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La fimbrine organise l’actine en faisceaux ; elle n’est pas un moteur microtubulaire.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
  {
    order: 125,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La motilité cellulaire peut faire intervenir :`,
    choices: [
      `Les microtubules des cils ou flagelles.`,
      `L’actine des filopodes et lamellipodes.`,
      `Des protéines motrices.`,
      `Uniquement des filaments intermédiaires stabilisés.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La motilité repose surtout sur les réseaux dynamiques et leurs moteurs.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
  {
    order: 126,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Une cellule épithéliale digestive utilise :`,
    choices: [
      `Des microfilaments d’actine dans les microvillosités.`,
      `Des jonctions associées au cytosquelette.`,
      `Des réseaux contribuant à sa forme et à sa polarité.`,
      `Des axonèmes mobiles dans chaque microvillosité.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Les microvillosités sont soutenues par l’actine, contrairement aux cils mobiles soutenus par un axonème.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
  {
    order: 127,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Le maintien d’une architecture cellulaire robuste dépend :`,
    choices: [
      `Des filaments intermédiaires.`,
      `De leur ancrage aux desmosomes et hémidesmosomes.`,
      `De leur résistance aux forces mécaniques.`,
      `Uniquement de la polymérisation de tubuline liée au GTP.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Les filaments intermédiaires assurent une part essentielle de la résistance mécanique.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
  {
    order: 128,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La division cellulaire fait intervenir :`,
    choices: [
      `Les microtubules du fuseau mitotique.`,
      `L’actine dans l’anneau de contraction.`,
      `Des réorganisations du cytosquelette.`,
      `Uniquement les lamines sans autre réseau.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La mitose et la cytocinèse mobilisent plusieurs réseaux du cytosquelette.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
  {
    order: 129,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Observe la figure comparative.

![Comparaison des réseaux](/images/training/ue14/biologie-cellulaire/cytosquelette/comparaison-reseaux-cytosquelette.png)

Quelle(s) proposition(s) est(sont) correcte(s) ?`,
    choices: [
      `La tubuline forme les microtubules.`,
      `L’actine G forme les microfilaments.`,
      `Les filaments intermédiaires regroupent plusieurs familles de protéines.`,
      `Tous les réseaux sont constitués de tubuline α/β.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Chaque réseau possède ses protéines constitutives propres.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
  {
    order: 130,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Quelle synthèse fonctionnelle est correcte ?`,
    choices: [
      `Les microtubules servent de rails et soutiennent cils et flagelles.`,
      `L’actine participe à la contraction et à la migration.`,
      `Les filaments intermédiaires assurent la résistance.`,
      `Le cytosquelette est inutile à la forme cellulaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Les trois réseaux ont des fonctions complémentaires dans l’organisation cellulaire.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
  {
    order: 131,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Une cellule présente un défaut de tubuline β empêchant l’hydrolyse du GTP. On peut prévoir :`,
    choices: [
      `Une perturbation de l’instabilité dynamique des microtubules.`,
      `Une modification de la relation entre cape de GTP et dépolymérisation.`,
      `Des conséquences possibles sur le fuseau et le transport intracellulaire.`,
      `Une disparition automatique de toutes les cytokératines.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Un défaut de tubuline affecterait surtout les fonctions microtubulaires.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
  {
    order: 132,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Une cellule présente une actine incapable de fixer l’ATP. On peut prévoir :`,
    choices: [
      `Une perturbation de la polymérisation de l’actine.`,
      `Une altération du tapis roulant.`,
      `Des défauts possibles de migration ou contraction.`,
      `Une augmentation nécessaire des triplets du centriole.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `L’actine ATPase est essentielle à sa dynamique ; les centrioles relèvent de la tubuline.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
  {
    order: 133,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Une tumeur exprime des cytokératines mais pas de vimentine. D’après le cours, cela peut :`,
    choices: [
      `Orienter vers une origine épithéliale.`,
      `Illustrer l’intérêt diagnostique des filaments intermédiaires.`,
      `Aider à caractériser la nature cellulaire tumorale.`,
      `Prouver à elle seule le stade clinique exact de la tumeur.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Le profil de filaments intermédiaires peut aider à identifier l’origine cellulaire, sans suffire à tout le diagnostic.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
  {
    order: 134,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Une cellule dont la kinésine et la dynéine sont toutes deux inhibées pourrait présenter :`,
    choices: [
      `Des défauts de transport dans les deux directions.`,
      `Une redistribution anormale des organites.`,
      `Des perturbations du trafic intracellulaire.`,
      `Une disparition immédiate de tous les microfilaments d’actine.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Les moteurs microtubulaires contrôlent le trafic sans supprimer directement l’actine.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
  {
    order: 135,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Une cellule en migration dont la gelsoline est inhibée pourrait :`,
    choices: [
      `Avoir plus de difficulté à désassembler l’actine à l’arrière.`,
      `Recycler moins efficacement l’actine G.`,
      `Présenter une rétraction moins efficace.`,
      `Former davantage de centrioles par ce seul mécanisme.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La gelsoline favorise le clivage des filaments d’actine dans la zone de rétraction.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
  {
    order: 136,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Observe les figures suivantes.

![Dynamique et moteurs des microtubules](/images/training/ue14/biologie-cellulaire/cytosquelette/microtubules-dynamique-moteurs.png)

![Actine et migration](/images/training/ue14/biologie-cellulaire/cytosquelette/actine-tapis-roulant-migration.png)

Quelle(s) proposition(s) est(sont) exacte(s) ?`,
    choices: [
      `Les deux réseaux sont polarisés.`,
      `Les deux peuvent utiliser l’hydrolyse de nucléotides dans leur dynamique ou leurs moteurs.`,
      `Les microtubules servent de rails et l’actine organise le front de migration.`,
      `Les deux figures décrivent uniquement des structures immobiles.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Les deux réseaux sont dynamiques mais remplissent des fonctions distinctes et complémentaires.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
  {
    order: 137,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Observe les figures suivantes.

![Structures microtubulaires stabilisées](/images/training/ue14/biologie-cellulaire/cytosquelette/structures-microtubules-stabilises.png)

![Filaments intermédiaires](/images/training/ue14/biologie-cellulaire/cytosquelette/filaments-intermediaires.png)

Quelle(s) proposition(s) est(sont) correcte(s) ?`,
    choices: [
      `Les deux ensembles illustrent des structures relativement stabilisées.`,
      `Les microtubules stabilisés participent à des architectures comme les cils.`,
      `Les filaments intermédiaires participent surtout à la résistance mécanique.`,
      `Les deux ensembles ont exactement la même protéine constitutive.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La stabilité peut servir des fonctions différentes : architecture motile pour certains microtubules, résistance pour les filaments intermédiaires.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
  {
    order: 138,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Une cellule doit simultanément transporter une vésicule, maintenir sa résistance et migrer. Elle peut mobiliser :`,
    choices: [
      `Les microtubules et leurs moteurs pour le transport à distance.`,
      `Les filaments intermédiaires pour la résistance.`,
      `L’actine pour la protrusion et la rétraction.`,
      `Un seul réseau, les autres étant inutiles.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `La cellule coordonne les trois réseaux pour réaliser des fonctions complexes.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
  {
    order: 139,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Les trois figures suivantes présentent les propriétés complémentaires des réseaux du cytosquelette.

![Comparaison des réseaux](/images/training/ue14/biologie-cellulaire/cytosquelette/comparaison-reseaux-cytosquelette.png)

![Microtubules et moteurs](/images/training/ue14/biologie-cellulaire/cytosquelette/microtubules-dynamique-moteurs.png)

![Filaments intermédiaires](/images/training/ue14/biologie-cellulaire/cytosquelette/filaments-intermediaires.png)

En les croisant, quelle(s) proposition(s) est(sont) correcte(s) ?`,
    choices: [
      `La polarité des microtubules permet un transport orienté.`,
      `Les filaments intermédiaires sont surtout stabilisés et résistants.`,
      `Les trois réseaux possèdent des diamètres et des protéines distincts.`,
      `La fonction du cytosquelette se limite au maintien passif de la forme.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Le cytosquelette combine soutien, dynamique, transport, motilité et résistance.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
  {
    order: 140,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Quelle conclusion générale est la plus fidèle au chapitre ?`,
    choices: [
      `Le cytosquelette est une matrice protéique structurale et dynamique.`,
      `Les microtubules, l’actine et les filaments intermédiaires ont des propriétés complémentaires.`,
      `La fonction cellulaire dépend de leur organisation et de leurs protéines associées.`,
      `Les trois réseaux sont interchangeables et assurent exactement les mêmes fonctions.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: `Les trois réseaux coopèrent mais ne sont ni identiques ni interchangeables.`,
    choiceExplanations: [
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Exact : cette proposition correspond aux éléments présentés dans le cours.`,
      `Faux : cette proposition contredit ou dépasse les éléments présentés dans le cours.`,
    ],
  },
];

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    order: 13,
    slug: `cytosquelette-structure-dynamique-et-fonctions`,
    title: `Cytosquelette : structure, dynamique et fonctions`,
    description: `Révision transversale des trois réseaux du cytosquelette.`,
    stage: 'PRACTICE',
    sectionOrder: 5,
    questionOrders: [121, 122, 123, 124, 125, 126, 127, 128, 129, 130],
  },
  {
    order: 14,
    slug: `synthese-experimentale-du-cytosquelette`,
    title: `Synthèse expérimentale du chapitre`,
    description: `Situations intégratives proches de l’examen.`,
    stage: 'MASTER',
    sectionOrder: 5,
    items: [
      {
        type: 'GROUP',
        title: `Dynamique des polymères`,
        sharedStatement: `Une équipe étudie séparément la dynamique de la tubuline et celle de l’actine afin d’identifier les conséquences de mutations affectant l’utilisation du GTP ou de l’ATP.`,
        questionOrders: [131, 132],
      },
      {
        type: 'GROUP',
        title: `Marqueurs et trafic intracellulaire`,
        sharedStatement: `Une seconde équipe utilise les filaments intermédiaires comme marqueurs cellulaires et étudie le déplacement des organites le long des microtubules.`,
        questionOrders: [133, 134],
      },
      {
        type: 'GROUP',
        title: `Migration et lecture de figures`,
        sharedStatement: `Une troisième équipe analyse la migration cellulaire et compare les propriétés des trois réseaux à partir des figures du chapitre.`,
        questionOrders: [135, 136, 137],
      },
      { type: 'QUESTION', questionOrder: 138 },
      { type: 'QUESTION', questionOrder: 139 },
      { type: 'QUESTION', questionOrder: 140 },
    ],
  },
];
