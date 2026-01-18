export type ThemeSeed = {
  title: string;
  shortTitle?: string;
  shortDescription: string;
  longDescription: string;
  description?: string;
};

export const wavesAndSignalsDomainId = '696d08e4264393540c77d158';

export const wavesAndSignalsThemes: ThemeSeed[] = [
  {
    title: 'Ondes mécaniques progressives',
    shortTitle: 'Ondes mécaniques',
    shortDescription:
      'Décrire la propagation d’une onde mécanique dans un milieu matériel.',
    longDescription:
      'Ce thème porte sur la description des ondes mécaniques progressives dans un milieu matériel : déformation locale, propagation de proche en proche, transport d’énergie sans transport global de matière. Il inclut l’identification d’une onde à partir de représentations spatiales ou temporelles.',
    description:
      'À utiliser lorsque l’exercice introduit ou exploite la notion d’onde mécanique progressive (corde, ressort, onde sonore, onde à la surface de l’eau, etc.), en insistant sur l’idée de perturbation se propageant dans un milieu. Peut être combiné avec les thèmes “Propagation d’une onde”, “Célérité d’une onde” ou “Ondes périodiques”.',
  },
  {
    title: 'Propagation d’une onde',
    shortTitle: 'Propagation d’une onde',
    shortDescription:
      'Relier la propagation d’une onde à la distance parcourue et au temps écoulé.',
    longDescription:
      'Ce thème concerne la description de la propagation d’une onde dans un milieu donné, en lien avec la distance parcourue, le temps de propagation et la nature du milieu. Il permet de relier une perturbation locale à son évolution dans l’espace et dans le temps.',
    description:
      'À utiliser lorsque l’énoncé insiste sur la propagation elle-même (temps de parcours, distance atteinte par une perturbation, fronts d’onde, diagrammes d’espace-temps), sans focalisation prioritaire sur le calcul de la célérité. Peut être combiné avec le thème “Célérité d’une onde”.',
  },
  {
    title: 'Célérité d’une onde',
    shortTitle: 'Célérité d’une onde',
    shortDescription:
      'Calculer et interpréter la célérité d’une onde dans un milieu.',
    longDescription:
      'Ce thème porte sur la définition et l’utilisation de la célérité d’une onde, grandeur qui relie la distance parcourue par l’onde au temps de propagation. Il permet d’exploiter la relation v = d / Δt dans des contextes variés (ondes sonores, ondes à la surface de l’eau, signaux sur une corde, etc.).',
    description:
      'À utiliser lorsque l’exercice demande explicitement de déterminer ou d’exploiter la célérité d’une onde (par calcul, mesure graphique ou tableau de données). Peut être combiné avec les thèmes “Propagation d’une onde”, “Longueur d’onde” et “Ondes périodiques”.',
  },
  {
    title: 'Ondes périodiques',
    shortTitle: 'Ondes périodiques',
    shortDescription:
      'Décrire une onde périodique et ses paramètres caractéristiques.',
    longDescription:
      'Ce thème concerne les ondes mécaniques ou électromagnétiques dont l’évolution se répète à intervalles de temps réguliers. Il permet de décrire une onde périodique en termes de période, de fréquence, d’amplitude et, le cas échéant, de longueur d’onde.',
    description:
      'À utiliser lorsque l’exercice précise qu’il s’agit d’une onde périodique et demande d’identifier ou d’exploiter ses paramètres (période, fréquence, amplitude, éventuellement longueur d’onde). Peut être combiné avec les thèmes “Période et fréquence”, “Longueur d’onde” et “Signal périodique”.',
  },
  {
    title: 'Période et fréquence',
    shortTitle: 'Période & fréquence',
    shortDescription:
      'Relier période et fréquence d’un phénomène périodique ou d’un signal.',
    longDescription:
      'Ce thème porte sur la définition de la période et de la fréquence d’un phénomène périodique, ainsi que sur la relation qui les lie. Il inclut la lecture de T ou f à partir de graphes temporels, de tableaux de mesures ou de données expérimentales.',
    description:
      'À utiliser lorsque l’exercice demande de déterminer ou d’exploiter la période ou la fréquence d’une onde ou d’un signal (lecture de T sur un graphe, calcul de f, usage de f = 1/T). Peut être combiné avec les thèmes “Ondes périodiques”, “Signal périodique” et “Analyse fréquentielle d’un signal”.',
  },
  {
    title: 'Longueur d’onde',
    shortTitle: 'Longueur d’onde',
    shortDescription:
      'Utiliser la longueur d’onde pour décrire la propagation d’une onde périodique.',
    longDescription:
      'Ce thème concerne la définition et l’exploitation de la longueur d’onde pour les ondes périodiques. Il permet de relier la distance entre deux points successifs dans le même état de vibration et d’utiliser la relation v = λ × f pour relier longueur d’onde, fréquence et célérité.',
    description:
      'À utiliser lorsque l’exercice fait intervenir la longueur d’onde, par exemple via des mesures spatiales, un schéma d’onde, ou la relation v = λ f. Peut être combiné avec les thèmes “Ondes périodiques”, “Célérité d’une onde” et “Diffraction”.',
  },
  {
    title: 'Diffraction',
    shortTitle: 'Diffraction',
    shortDescription:
      'Observer et exploiter la diffraction d’une onde au passage d’une ouverture ou d’un obstacle.',
    longDescription:
      'Ce thème porte sur le phénomène de diffraction des ondes lors du passage par une ouverture ou au voisinage d’un obstacle. Il met en évidence l’élargissement du faisceau et le rôle de la longueur d’onde et de la taille de l’ouverture ou de l’obstacle sur l’importance du phénomène.',
    description:
      'À utiliser lorsque l’énoncé décrit un élargissement de faisceau, une tache centrale de diffraction ou compare différents dispositifs (ouverture plus ou moins large, longueur d’onde plus ou moins grande). Ne pas confondre avec les franges d’interférences : pour celles-ci, privilégier les thèmes “Interférences” et “Différence de marche”.',
  },
  {
    title: 'Interférences',
    shortTitle: 'Interférences',
    shortDescription:
      'Étudier les interférences entre deux ondes cohérentes.',
    longDescription:
      'Ce thème concerne l’étude des interférences entre deux ondes cohérentes, lorsqu’elles se superposent en un point de l’espace. Il permet de comprendre la formation de franges (zones d’intensité renforcée ou annulée) et de relier ces motifs aux propriétés des ondes sources.',
    description:
      'À utiliser lorsque l’exercice met en scène des franges d’interférences (alternance de maxima et de minima d’intensité) issues de deux sources cohérentes ou de deux trajets d’onde. Peut être combiné avec le thème “Différence de marche”, qui précise les conditions de construction ou de destruction. Ne pas utiliser seul pour une simple diffraction sans motif d’interférences.',
  },
  {
    title: 'Différence de marche',
    shortTitle: 'Différence de marche',
    shortDescription:
      'Relier la différence de marche entre deux ondes aux conditions d’interférences.',
    longDescription:
      'Ce thème porte sur la différence de marche entre deux ondes issues de sources cohérentes ou d’un même faisceau scindé, et sur son rôle dans les conditions d’interférences constructives ou destructives. Il permet de relier la géométrie du dispositif aux positions des franges.',
    description:
      'À utiliser lorsque l’énoncé introduit ou exploite explicitement la différence de marche (δ) pour déterminer les positions de maxima ou de minima d’interférences, ou pour relier la géométrie du dispositif (fentes, interfrange, etc.) à la longueur d’onde. Doit être combiné au thème “Interférences” dans la plupart des cas.',
  },
  {
    title: 'Ondes électromagnétiques',
    shortTitle: 'Ondes électromagnétiques',
    shortDescription:
      'Décrire les ondes électromagnétiques et leurs domaines d’application.',
    longDescription:
      'Ce thème concerne la description des ondes électromagnétiques (lumière visible, ondes radio, micro-ondes, infrarouge, ultraviolet, rayons X, etc.), leur propagation dans le vide ou dans les milieux matériels et les ordres de grandeur associés à leurs principales caractéristiques.',
    description:
      'À utiliser lorsque l’exercice présente ou exploite des ondes électromagnétiques (rayonnements, signaux lumineux, communications, etc.), sans se focaliser uniquement sur la répartition en domaines de longueur d’onde (qui relève du thème “Spectre électromagnétique”). Peut être combiné avec les thèmes “Spectre électromagnétique” et “Effet Doppler”.',
  },
  {
    title: 'Spectre électromagnétique',
    shortTitle: 'Spectre EM',
    shortDescription:
      'Situer une onde dans le spectre électromagnétique et comparer les domaines.',
    longDescription:
      'Ce thème porte sur l’organisation du spectre électromagnétique en différents domaines (ondes radio, micro-ondes, infrarouge, visible, ultraviolet, rayons X, gamma, etc.) et sur la comparaison des longueurs d’onde, fréquences et énergies associées. Il inclut l’identification du domaine pertinent pour une situation donnée.',
    description:
      'À utiliser lorsque l’énoncé demande de situer un type de rayonnement dans le spectre, de comparer des longueurs d’onde ou des fréquences, ou de distinguer différents domaines de rayonnements. Peut être combiné avec le thème “Ondes électromagnétiques” et, dans certains contextes, avec des thèmes de physique moderne ou de risques liés aux rayonnements.',
  },
  {
    title: 'Effet Doppler',
    shortTitle: 'Effet Doppler',
    shortDescription:
      'Interpréter le décalage de fréquence ou de longueur d’onde dû au mouvement relatif.',
    longDescription:
      'Ce thème concerne l’effet Doppler, c’est-à-dire la variation apparente de la fréquence ou de la longueur d’onde perçue lorsque la source et l’observateur sont en mouvement relatif. Il permet d’interpréter des décalages de fréquence dans des contextes variés (acoustique, astrophysique, imagerie médicale, etc.).',
    description:
      'À utiliser lorsque l’énoncé décrit un changement de fréquence ou de longueur d’onde lié au mouvement de la source ou de l’observateur (sirène qui s’approche / s’éloigne, étoile en rapprochement/éloignement, échographie Doppler, radar, etc.). Peut être combiné avec les thèmes “Ondes mécaniques progressives” ou “Ondes électromagnétiques” selon le contexte physique.',
  },
  {
    title: 'Signal périodique',
    shortTitle: 'Signal périodique',
    shortDescription:
      'Décrire un signal périodique et lire ses caractéristiques sur un enregistrement.',
    longDescription:
      'Ce thème porte sur la description de signaux périodiques (électriques, sonores, etc.) à partir d’enregistrements temporels : forme du signal, amplitude, période, fréquence. Il permet de relier ces signaux aux grandeurs physiques associées et à leurs applications pratiques.',
    description:
      'À utiliser lorsque l’exercice présente un enregistrement temporel (oscilloscope, capteur, interface d’acquisition) d’un signal périodique et demande de lire ou d’exploiter ses caractéristiques (T, f, amplitude). Peut être combiné avec les thèmes “Période et fréquence” et “Analyse fréquentielle d’un signal”.',
  },
  {
    title: 'Analyse fréquentielle d’un signal',
    shortTitle: 'Analyse fréquentielle',
    shortDescription:
      'Étudier la répartition des fréquences dans un signal périodique ou quasi périodique.',
    longDescription:
      'Ce thème concerne l’analyse fréquentielle de signaux : décomposition d’un signal périodique en composantes sinusoïdales, identification de la fréquence fondamentale et des harmoniques, représentation par un spectre d’amplitude. Il permet de relier le contenu fréquentiel d’un signal à ses propriétés temporelles et à ses applications (filtrage, transmission, qualité sonore, etc.).',
    description:
      'À utiliser lorsque l’énoncé présente ou exploite le spectre d’un signal (fréquence fondamentale, harmoniques) ou évoque des opérations de filtrage simple en fréquence. Peut être combiné avec les thèmes “Signal périodique” et “Période et fréquence”. Ne pas utiliser pour de simples lectures de période sur un graphe temporel sans dimension fréquentielle.',
  },
];
