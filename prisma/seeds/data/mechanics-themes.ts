export type ThemeSeed = {
  title: string;
  shortTitle?: string;
  shortDescription: string;
  longDescription: string;
  description?: string;
};

export const mechanicsDomainId = '696d0842264393540c77d157';

export const mechanicsThemes: ThemeSeed[] = [
  {
    title: 'Caractérisation d’un mouvement',
    shortDescription:
      'Décrire la nature d’un mouvement à partir de la position, de la vitesse et de l’accélération.',
    longDescription:
      'Ce thème porte sur la description d’un mouvement à partir de la trajectoire, de l’évolution de la position, de la vitesse et éventuellement de l’accélération. Il inclut l’identification de mouvements rectilignes, circulaires, uniformes ou non, à partir de données expérimentales ou de graphes.',
    description:
      'À utiliser lorsque l’exercice demande avant tout de décrire ou reconnaître un mouvement (rectiligne, circulaire, uniforme, varié) à partir de graphiques x(t), v(t), a(t), de tableaux de mesures ou de schémas. Peut être combiné avec les thèmes “Référentiels et description du mouvement” et “Vecteurs vitesse et accélération”.',
  },
  {
    title: 'Référentiels et description du mouvement',
    shortTitle: 'Référentiels & description',
    shortDescription:
      'Choisir un référentiel et décrire le mouvement d’un système dans ce référentiel.',
    longDescription:
      'Ce thème concerne le choix d’un référentiel (terrestre, géocentrique, héliocentrique…) et la description du mouvement d’un système dans ce référentiel. Il inclut la distinction entre mouvement relatif et absolu, et l’influence du choix de référentiel sur l’interprétation du mouvement.',
    description:
      'À utiliser lorsque l’énoncé aborde explicitement la notion de référentiel (changement de référentiel, référentiel terrestre, géocentrique, héliocentrique, etc.) ou compare des descriptions d’un même mouvement dans plusieurs référentiels. Peut être combiné avec les thèmes “Caractérisation d’un mouvement” et “Mouvements orbitaux et lois de Kepler”.',
  },
  {
    title: 'Vecteurs vitesse et accélération',
    shortTitle: 'Vitesse & accélération',
    shortDescription:
      'Représenter et interpréter les vecteurs vitesse et accélération d’un point en mouvement.',
    longDescription:
      'Ce thème porte sur la représentation et l’interprétation des vecteurs vitesse et accélération d’un point matériel, ainsi que sur le lien entre la direction de ces vecteurs et la trajectoire. Il couvre la notion de variation de la vitesse et d’accélération tangentielle ou normale dans les mouvements curvilignes.',
    description:
      'À utiliser lorsque l’exercice demande de tracer, comparer ou interpréter les vecteurs vitesse et accélération, ou de relier leur direction et leur norme à la trajectoire (mouvements curvilignes, circulaires…). Inclut l’utilisation implicite ou explicite du repère de Frenet. Peut être associé au thème “Mouvements circulaires et orbitaux”.',
  },
  {
    title: 'Forces et interactions',
    shortDescription:
      'Identifier les forces qui s’exercent sur un système et réaliser un bilan des interactions.',
    longDescription:
      'Ce thème concerne l’identification des forces qui s’exercent sur un système et la réalisation d’un bilan des interactions, en distinguant les interactions à distance (gravitation, électrique…) et de contact (frottements, tension, réaction du support…). Il inclut la représentation des forces par des vecteurs.',
    description:
      'À utiliser lorsque l’exercice demande un bilan des forces ou un diagramme des interactions, ou qu’il s’intéresse à la nature des forces en jeu (contact, gravitation…). Peut être combiné avec les thèmes “Lois de Newton”, “Interaction gravitationnelle” ou “Travail d’une force”.',
  },
  {
    title: 'Lois de Newton',
    shortDescription:
      'Relier les forces appliquées à un système à son mouvement grâce aux lois de Newton.',
    longDescription:
      'Ce thème porte sur l’application des lois de Newton pour relier le bilan des forces à l’évolution du mouvement d’un système. Il inclut l’écriture de la deuxième loi de Newton, sous forme vectorielle ou projetée sur un axe, et l’interprétation des régimes particulier (repos, mouvement rectiligne uniforme, mouvement accéléré).',
    description:
      'À utiliser lorsque l’exercice demande explicitement d’appliquer une loi de Newton, d’écrire une équation du mouvement à partir des forces ou de prévoir l’évolution du mouvement en fonction du bilan des forces. Peut être combiné avec les thèmes “Forces et interactions”, “Mouvements circulaires et orbitaux” ou “Interaction gravitationnelle”.',
  },
  {
    title: 'Travail d’une force',
    shortTitle: 'Travail d’une force',
    shortDescription:
      'Calculer et interpréter le travail d’une force lors du déplacement d’un système.',
    longDescription:
      'Ce thème concerne la définition et le calcul du travail d’une force lors du déplacement d’un système, ainsi que l’interprétation du signe et de la valeur de ce travail dans le contexte de la situation étudiée. Il est souvent utilisé pour relier forces, énergie et variation de l’état d’un système.',
    description:
      'À utiliser lorsque l’énoncé parle de travail d’une force, de travail moteur ou résistant, ou de travail total des forces sur un trajet donné. Souvent combiné avec les thèmes “Énergie cinétique”, “Énergie potentielle de pesanteur” ou “Énergie mécanique”.',
  },
  {
    title: 'Énergie cinétique',
    shortTitle: 'Énergie cinétique',
    shortDescription:
      'Exprimer et exploiter l’énergie cinétique d’un système en mouvement.',
    longDescription:
      'Ce thème porte sur l’expression de l’énergie cinétique d’un point matériel ou d’un système assimilé et sur l’étude de ses variations lors d’un mouvement. Il permet de relier l’état de mouvement d’un système à son énergie cinétique, notamment à travers des bilans énergétiques.',
    description:
      'À utiliser lorsque l’exercice fait intervenir l’énergie cinétique, sous la forme Ec = 1/2 m v² ou équivalente, pour comparer des situations ou pour établir un bilan énergétique. Peut être combiné avec les thèmes “Travail d’une force”, “Énergie potentielle de pesanteur” et “Énergie mécanique”.',
  },
  {
    title: 'Énergie potentielle de pesanteur',
    shortTitle: 'Énergie potentielle',
    shortDescription:
      'Utiliser l’énergie potentielle de pesanteur pour décrire l’état d’un système en altitude.',
    longDescription:
      'Ce thème concerne l’expression et l’exploitation de l’énergie potentielle de pesanteur pour décrire l’état d’un système dans un champ de pesanteur. Il est utilisé pour relier la position verticale d’un système à son énergie et pour établir des bilans énergétiques lors de mouvements dans un champ de pesanteur.',
    description:
      'À utiliser lorsque l’exercice fait intervenir une variation d’altitude ou un bilan énergétique dans un champ de pesanteur (chute, montée, lancement, etc.). Peut être combiné avec les thèmes “Énergie cinétique”, “Énergie mécanique” et “Mouvement dans un champ de gravitation”.',
  },
  {
    title: 'Énergie mécanique',
    shortDescription:
      'Relier énergie cinétique et potentielle pour décrire l’état mécanique d’un système.',
    longDescription:
      'Ce thème porte sur la définition de l’énergie mécanique comme somme des énergies cinétique et potentielle, et sur son utilisation pour décrire l’état d’un système. Il sert de base aux bilans énergétiques et aux raisonnements sur les transformations d’énergie.',
    description:
      'À utiliser lorsque l’énoncé parle d’énergie mécanique ou demande de regrouper énergie cinétique et potentielle dans un bilan énergétique. À combiner avec le thème “Conservation de l’énergie mécanique” lorsque la conservation (ou non) de cette grandeur est au cœur de l’exercice.',
  },
  {
    title: 'Conservation de l’énergie mécanique',
    shortTitle: 'Conservation énergie méc.',
    shortDescription:
      'Appliquer la conservation (ou la non-conservation) de l’énergie mécanique.',
    longDescription:
      'Ce thème concerne l’application du principe de conservation (ou de non-conservation) de l’énergie mécanique dans des situations où seules certaines forces, comme le poids, travaillent. Il permet de relier des états initial et final d’un système pour déterminer des vitesses, des hauteurs ou des positions.',
    description:
      'À utiliser lorsque l’exercice repose sur l’égalité ou la comparaison d’énergies mécaniques entre deux positions (avec ou sans pertes). Typiquement, lorsqu’on écrit Em1 = Em2 ou Em1 + W_pertes = Em2. Peut être combiné avec les thèmes “Énergie mécanique”, “Énergie cinétique” et “Énergie potentielle de pesanteur”.',
  },
  {
    title: 'Puissance d’une force',
    shortTitle: 'Puissance d’une force',
    shortDescription:
      'Relier puissance, travail d’une force et durée d’action.',
    longDescription:
      'Ce thème porte sur la définition et l’utilisation de la puissance d’une force ou d’un dispositif, en lien avec le travail effectué par unité de temps. Il permet d’analyser l’efficacité d’un système à fournir ou à dissiper de l’énergie.',
    description:
      'À utiliser lorsque l’énoncé parle de puissance développée par une force, par un moteur ou par un dispositif, ou demande de relier travail, énergie et durée. Peut être combiné avec les thèmes “Travail d’une force” et “Énergie électrique” (pour la puissance électrique).',
  },
  {
    title: 'Quantité de mouvement',
    shortTitle: 'Quantité de mouvement',
    shortDescription:
      'Définir et exploiter la quantité de mouvement d’un système.',
    longDescription:
      'Ce thème porte sur la définition de la quantité de mouvement d’un point matériel ou d’un système et sur son utilisation pour décrire l’état cinétique d’un système. Il prépare ou accompagne l’étude de la conservation de la quantité de mouvement.',
    description:
      'À utiliser lorsque l’exercice introduit ou exploite la grandeur quantité de mouvement, souvent notée p = m v, pour comparer des états avant et après un évènement ou pour préparer une conservation. Peut être combiné avec le thème “Conservation de la quantité de mouvement”.',
  },
  {
    title: 'Conservation de la quantité de mouvement',
    shortTitle: 'Conservation quantité de mvt',
    shortDescription:
      'Appliquer la conservation de la quantité de mouvement dans un système isolé.',
    longDescription:
      'Ce thème concerne l’application du principe de conservation de la quantité de mouvement dans un système isolé ou supposé tel. Il est particulièrement utilisé pour analyser des chocs, des collisions ou des répartitions de vitesses après interaction.',
    description:
      'À utiliser lorsque l’énoncé demande d’appliquer la conservation de la quantité de mouvement (avant/après choc, explosion, séparation, etc.). Se combine très fréquemment avec le thème “Chocs (élastiques et inélastiques)”.',
  },
  {
    title: 'Chocs (élastiques et inélastiques)',
    shortTitle: 'Chocs',
    shortDescription:
      'Étudier des chocs entre systèmes en quantité de mouvement et en énergie.',
    longDescription:
      'Ce thème porte sur l’analyse de chocs entre systèmes (élastiques ou inélastiques) en utilisant la conservation de la quantité de mouvement, et éventuellement des considérations énergétiques. Il permet de déterminer des vitesses après choc et de comparer différents types de collisions.',
    description:
      'À utiliser lorsque l’exercice met en scène des collisions, rebonds, agglomérations ou séparations de systèmes, et demande de comparer l’état avant et après le choc. À associer au thème “Conservation de la quantité de mouvement”, et éventuellement à “Énergie mécanique” lorsque les pertes d’énergie sont étudiées.',
  },
  {
    title: 'Interaction gravitationnelle',
    shortTitle: 'Interaction gravitationnelle',
    shortDescription:
      'Décrire l’interaction gravitationnelle entre deux masses.',
    longDescription:
      'Ce thème concerne la description de l’interaction gravitationnelle entre deux corps massiques, en termes de forces attractives, de dépendance en fonction des masses et de la distance. Il sert de base à l’étude des champs gravitationnels et des mouvements orbitaux.',
    description:
      'À utiliser lorsque l’exercice introduit ou exploite la force gravitationnelle entre deux corps (par exemple, loi de la gravitation universelle ou proportionnalités associées). Peut être combiné avec les thèmes “Champ gravitationnel”, “Mouvement dans un champ de gravitation” et “Mouvements orbitaux et lois de Kepler”.',
  },
  {
    title: 'Champ gravitationnel',
    shortTitle: 'Champ gravitationnel',
    shortDescription:
      'Modéliser l’action gravitationnelle par un champ associé à un astre.',
    longDescription:
      'Ce thème porte sur la notion de champ gravitationnel créé par un astre, permettant de modéliser l’action gravitationnelle exercée sur une masse test en tout point de l’espace. Il relie la force gravitationnelle au champ et à la masse du corps soumis à cette action.',
    description:
      'À utiliser lorsque l’énoncé parle explicitement de champ gravitationnel, de valeur du champ à la surface d’un astre ou à une certaine distance, ou de modélisation de l’action gravitationnelle par un champ. Peut être combiné avec les thèmes “Interaction gravitationnelle” et “Mouvement dans un champ de gravitation”.',
  },
  {
    title: 'Mouvement dans un champ de gravitation',
    shortTitle: 'Mvt dans un champ gravitationnel',
    shortDescription:
      'Étudier le mouvement d’un système soumis à un champ de gravitation.',
    longDescription:
      'Ce thème concerne l’étude du mouvement d’un système soumis à un champ de gravitation, en lien avec les forces gravitationnelles et les énergies potentielle et mécanique associées. Il permet de décrire des chutes, ascensions ou trajectoires dans le voisinage d’un astre.',
    description:
      'À utiliser lorsque le mouvement est explicitement étudié dans un champ gravitationnel (chute vers un astre, lancement, trajectoire dans l’approximation locale du champ, etc.), avec prise en compte de l’énergie potentielle de pesanteur. Peut être combiné avec les thèmes “Énergie potentielle de pesanteur”, “Énergie mécanique” et “Interaction gravitationnelle”.',
  },
  {
    title: 'Mouvements circulaires et orbitaux',
    shortTitle: 'Mouv. circ. & orbitaux',
    shortDescription:
      'Analyser le mouvement d’un objet sur une trajectoire circulaire ou orbitale.',
    longDescription:
      'Ce thème porte sur l’étude des mouvements circulaires ou assimilés, en lien avec la vitesse, l’accélération et les forces qui s’exercent sur le système. Il permet de relier la courbure de la trajectoire et l’accélération centripète aux lois de Newton, notamment pour des satellites ou des objets en rotation.',
    description:
      'À utiliser lorsque l’exercice porte sur l’analyse locale du mouvement sur une trajectoire circulaire ou quasi circulaire : vitesse orbitale, accélération centripète, lien entre force et courbure de la trajectoire. Ce thème couvre les raisonnements dynamiques (Newton) appliqués à des trajectoires circulaires ou orbitales, y compris l’utilisation implicite ou explicite du repère de Frenet. Ne pas utiliser seul pour des exercices centrés sur les lois de Kepler ou la forme globale de l’orbite.',
  },
  {
    title: 'Mouvements orbitaux et lois de Kepler',
    shortTitle: 'Orbite & Kepler',
    shortDescription:
      'Décrire les mouvements des planètes et satellites à l’aide des lois de Kepler.',
    longDescription:
      'Ce thème permet de caractériser les mouvements orbitaux des planètes et des satellites à partir des lois de Kepler : forme des orbites, position de l’astre attracteur, variation de la vitesse le long de l’orbite et relation entre période de révolution et distance à l’astre central.',
    description:
      'À utiliser lorsque l’exercice mobilise explicitement une ou plusieurs lois de Kepler (orbite elliptique, foyer, loi des aires, relation période–rayon ou période–demi-grand axe). Ce thème correspond à une approche globale et descriptive du mouvement orbital. Peut être combiné avec le thème “Mouvements circulaires et orbitaux” si l’exercice utilise aussi la dynamique newtonienne (accélération centripète, vitesse orbitale).',
  },
];
