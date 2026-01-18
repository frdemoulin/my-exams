export type ThemeSeed = {
  title: string;
  shortTitle?: string;
  shortDescription: string;
  longDescription: string;
  description?: string;
};

export const electricityDomainId = '696d0978264393540c77d159';

export const electricityThemes: ThemeSeed[] = [
  {
    title: 'Courant électrique',
    shortTitle: 'Courant électrique',
    shortDescription:
      'Définir, mesurer et interpréter le courant électrique dans un circuit.',
    longDescription:
      'Ce thème porte sur la définition du courant électrique comme déplacement ordonné de charges, sur sa mesure à l’aide d’un ampèremètre et sur son interprétation dans des circuits simples. Il inclut la compréhension du sens conventionnel du courant et de son unité, l’ampère.',
    description:
      'À utiliser lorsque l’exercice insiste sur la notion de courant (intensité, mesure, conservation du courant dans un dipôle ou un nœud), sans nécessairement entrer dans les lois de circuits complètes. Peut être combiné avec les thèmes “Tension électrique”, “Loi d’Ohm” et “Lois des circuits électriques”.',
  },
  {
    title: 'Tension électrique',
    shortTitle: 'Tension électrique',
    shortDescription:
      'Définir, mesurer et interpréter la tension électrique entre deux points.',
    longDescription:
      'Ce thème concerne la tension électrique comme différence de potentiel entre deux points d’un circuit, sa mesure au voltmètre et son interprétation en termes de transfert d’énergie par unité de charge. Il inclut l’unité de la tension, le volt, et la différence entre mesure en dérivation et en série.',
    description:
      'À utiliser lorsque l’énoncé met l’accent sur la notion de tension (lecture de schéma de branchement d’un voltmètre, comparaison de tensions, définition de la tension entre deux points). Peut être combiné avec les thèmes “Courant électrique”, “Loi d’Ohm” et “Lois des circuits électriques”.',
  },
  {
    title: 'Loi d’Ohm',
    shortTitle: 'Loi d’Ohm',
    shortDescription:
      'Relier tension, courant et résistance grâce à la loi d’Ohm.',
    longDescription:
      'Ce thème porte sur la loi d’Ohm, qui relie la tension aux bornes d’un dipôle ohmique, le courant qui le traverse et sa résistance électrique. Il inclut l’exploitation de la relation U = R I, la lecture de caractéristiques U = f(I) et le calcul de résistances équivalentes dans des cas simples.',
    description:
      'À utiliser lorsque l’exercice demande explicitement d’appliquer U = R I, d’exploiter une droite caractéristique d’un dipôle ohmique ou de déterminer une résistance à partir de mesures de courant et de tension. Peut être combiné avec les thèmes “Courant électrique”, “Tension électrique”, “Dipôle résistif” et “Lois des circuits électriques”.',
  },
  {
    title: 'Lois des circuits électriques',
    shortTitle: 'Lois des circuits',
    shortDescription:
      'Appliquer les lois des circuits en série et en dérivation.',
    longDescription:
      'Ce thème concerne l’analyse des circuits électriques à l’aide des lois de base : conservation de l’intensité aux nœuds, additivité des tensions dans les mailles, règles de partage du courant et de la tension en série et en dérivation. Il permet de prédire le comportement de circuits simples et de circuits de distribution domestique idéalisés.',
    description:
      'À utiliser lorsque l’énoncé demande d’analyser un circuit à plusieurs dipôles (série, dérivation, nœuds, mailles) sans se limiter à un seul dipôle ohmique. Typiquement lorsque l’on cherche des intensités ou des tensions en différents points à partir de quelques données. Peut être combiné avec les thèmes “Loi d’Ohm”, “Courant électrique” et “Tension électrique”.',
  },
  {
    title: 'Dipôle résistif',
    shortTitle: 'Dipôle résistif',
    shortDescription:
      'Modéliser un conducteur ohmique comme dipôle résistif.',
    longDescription:
      'Ce thème porte sur le modèle de dipôle résistif (résistance, conducteur ohmique) et sur sa caractéristique électrique. Il permet de relier le comportement d’un composant (lampe, résistances diverses) au modèle R idéal et d’interpréter des écarts éventuels à la loi d’Ohm.',
    description:
      'À utiliser lorsque l’exercice demande de modéliser un composant comme une résistance, de comparer son comportement expérimental à une loi d’Ohm idéale ou de déterminer sa valeur de résistance à partir d’une caractéristique U = f(I). Peut être combiné avec les thèmes “Loi d’Ohm” et “Effet Joule”.',
  },
  {
    title: 'Effet Joule',
    shortTitle: 'Effet Joule',
    shortDescription:
      'Relier le passage du courant à l’échauffement d’un dipôle résistif.',
    longDescription:
      'Ce thème concerne l’effet Joule, c’est-à-dire l’échauffement d’un dipôle résistif parcouru par un courant électrique. Il met en lien la puissance dissipée par effet Joule et la durée de fonctionnement, ainsi que l’énergie transformée en chaleur dans le dipôle.',
    description:
      'À utiliser lorsque l’énoncé met en avant l’échauffement d’un dispositif (résistance, fil, appareil) lié au passage du courant, ou lorsqu’il demande de calculer l’énergie dissipée par effet Joule et sa conséquence pratique (montée en température, sécurité, rendement). Peut être combiné avec les thèmes “Puissance électrique” et “Dipôle résistif”.',
  },
  {
    title: 'Puissance électrique',
    shortTitle: 'Puissance électrique',
    shortDescription:
      'Relier puissance électrique, tension, courant et énergie consommée.',
    longDescription:
      'Ce thème porte sur la puissance électrique échangée dans un dipôle ou un circuit (P = U I) et sur le lien entre puissance, énergie consommée et durée de fonctionnement. Il permet d’interpréter les indications de puissance sur les appareils électriques et d’évaluer la consommation énergétique.',
    description:
      'À utiliser lorsque l’exercice demande de calculer une puissance électrique, de relier puissance, énergie et durée, ou d’interpréter des données de type “appareil 1000 W, alimentation secteur…”. Peut être combiné avec les thèmes “Énergie électrique”, “Effet Joule” et “Courant alternatif sinusoïdal”.',
  },
  {
    title: 'Énergie électrique',
    shortTitle: 'Énergie électrique',
    shortDescription:
      'Exprimer l’énergie électrique échangée dans un circuit en fonction de la puissance et du temps.',
    longDescription:
      'Ce thème concerne l’énergie électrique transférée ou consommée dans un circuit, souvent exprimée à partir de la puissance et de la durée (E = P × Δt). Il permet de relier les calculs d’énergie aux usages quotidiens et à la facturation de l’électricité.',
    description:
      'À utiliser lorsque l’énoncé demande une évaluation d’énergie consommée (en joules, en wattheures ou kilowattheures), par exemple pour un appareil utilisé pendant une certaine durée. Peut être combiné avec les thèmes “Puissance électrique” et “Effet Joule”.',
  },
  {
    title: 'Condensateur',
    shortTitle: 'Condensateur',
    shortDescription:
      'Modéliser et utiliser un condensateur dans un circuit électrique.',
    longDescription:
      'Ce thème porte sur le condensateur en tant que dipôle électrique capable de stocker de l’énergie sous forme électrique. Il permet de décrire le comportement d’un condensateur soumis à une tension, la relation charge–tension et les effets d’association dans des circuits simples.',
    description:
      'À utiliser lorsque l’énoncé introduit un condensateur comme composant, évoque la charge, la capacité, la tension à ses bornes ou l’énergie stockée. Peut être combiné avec les thèmes “Circuit RC” et “Charge et décharge d’un condensateur”.',
  },
  {
    title: 'Circuit RC',
    shortTitle: 'Circuit RC',
    shortDescription:
      'Étudier un circuit associant une résistance et un condensateur.',
    longDescription:
      'Ce thème concerne l’étude qualitative ou quantitative de circuits RC, constitués d’une résistance et d’un condensateur. Il permet de comprendre le rôle de la constante de temps du circuit, les régimes de charge et de décharge et les réponses temporelles à une brusque variation de tension.',
    description:
      'À utiliser lorsque l’énoncé met en jeu un circuit comprenant au minimum une résistance et un condensateur en série, et qu’il s’intéresse à l’évolution temporelle de la tension ou du courant. À combiner avec le thème “Charge et décharge d’un condensateur” lorsque ces phases sont décrites ou exploitées en détail.',
  },
  {
    title: 'Charge et décharge d’un condensateur',
    shortTitle: 'Charge/décharge condensateur',
    shortDescription:
      'Décrire l’évolution de la tension et du courant lors de la charge ou de la décharge d’un condensateur.',
    longDescription:
      'Ce thème porte sur les lois temporelles de la tension aux bornes d’un condensateur et du courant dans un circuit lors des phases de charge et de décharge, en lien avec la constante de temps d’un circuit RC. Il permet d’interpréter des courbes expérimentales et d’anticiper le comportement d’un circuit capacitif simple.',
    description:
      'À utiliser lorsque l’exercice demande de tracer, exploiter ou interpréter la courbe de charge ou de décharge d’un condensateur (évolution temporelle exponentielle, temps caractéristique, approches du régime permanent). À associer au thème “Circuit RC” et, le cas échéant, au thème “Condensateur”.',
  },
  {
    title: 'Courant alternatif sinusoïdal',
    shortTitle: 'Courant alternatif',
    shortDescription:
      'Décrire un courant alternatif sinusoïdal et lire ses caractéristiques.',
    longDescription:
      'Ce thème concerne les courants et tensions alternatifs sinusoïdaux, leur représentation temporelle, et l’identification de leur fréquence, de leur amplitude et éventuellement de leur pulsation. Il permet aussi d’introduire la notion de valeur efficace en lien avec la puissance électrique.',
    description:
      'À utiliser lorsque l’exercice présente des signaux alternatifs sinusoïdaux (secteur, générateur basse fréquence, etc.) et demande d’en extraire les paramètres (fréquence, amplitude, période). Peut être combiné avec les thèmes “Valeur efficace” et “Puissance électrique”.',
  },
  {
    title: 'Valeur efficace',
    shortTitle: 'Valeur efficace',
    shortDescription:
      'Interpréter et utiliser la valeur efficace d’un courant ou d’une tension alternatifs.',
    longDescription:
      'Ce thème porte sur la notion de valeur efficace pour les courants et tensions alternatifs : grandeur équivalente à une valeur continue produisant le même effet thermique (effet Joule) dans une résistance. Il permet d’exploiter les indications de type 230 V sur le réseau domestique et d’effectuer des calculs de puissance électrique en régime alternatif.',
    description:
      'À utiliser lorsque l’énoncé aborde la notion de valeur efficace (indication de tension secteur, calcul de puissance P = U_eff × I_eff, comparaison d’effets thermiques entre courant continu et alternatif). À combiner avec les thèmes “Courant alternatif sinusoïdal”, “Puissance électrique” et “Effet Joule”.',
  },
];
