import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie générale
 * Chapitre 1 – Éléments chimiques et classification périodique
 * Section C – Classification périodique des éléments
 */

export const UE14_CH1_CLASSIFICATION_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 8,
    difficulty: 'EASY',
    format: 'QRM',
    question: `Concernant la classification périodique moderne, quelles propositions sont exactes ?`,
    choices: [
      { content: `Les éléments sont rangés par numéro atomique croissant.`, correct: true, explanation: `Vrai.` },
      { content: `Le tableau comporte 18 colonnes.`, correct: true, explanation: `Vrai dans la classification moderne.` },
      { content: `Une période correspond à une ligne.`, correct: true, explanation: `Vrai.` },
      { content: `Deux éléments d'une même colonne ont nécessairement le même numéro atomique.`, correct: false, explanation: `Faux : chaque élément possède son propre numéro atomique.` },
    ],
    explanation:
      `La classification moderne est ordonnée par $\\mathrm{Z}$ croissant. Les lignes sont les périodes et les colonnes regroupent des éléments aux propriétés chimiques souvent analogues.`,
  },
  {
    order: 57,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Où se situe principalement le bloc $\\mathrm{p}$ dans la classification périodique ?`,
    choices: [
      { content: `Dans la partie droite du tableau.`, correct: true, explanation: `Le bloc p occupe principalement les six colonnes de droite.` },
      { content: `Uniquement dans les deux premières colonnes.`, correct: false, explanation: `Ces colonnes correspondent au bloc s.` },
      { content: `Uniquement dans les séries des lanthanides et actinides.`, correct: false, explanation: `Ces séries correspondent au bloc f.` },
      { content: `Uniquement au centre, entre les colonnes 3 et 12.`, correct: false, explanation: `Cette zone correspond au bloc d.` },
    ],
    explanation:
      `La structure du tableau reflète le remplissage des sous-couches : bloc $\\mathrm{s}$ à gauche, bloc $\\mathrm{d}$ au centre, bloc $\\mathrm{p}$ à droite et bloc $\\mathrm{f}$ en séries séparées.`,
  },
  {
    order: 56,
    difficulty: 'EASY',
    format: 'QROC',
    question: `Quel élément chimique possède le numéro atomique $\\mathrm{Z}=8$ ?`,
    answer: {
      type: 'text',
      acceptedAnswers: ['oxygène', 'oxygene', 'O'],
      normalization: { trim: true, collapseWhitespace: true, caseSensitive: false, ignoreAccents: true },
    },
    explanation: `Le numéro atomique 8 correspond à l'oxygène, symbole $\\ce{O}$.`,
  },
  {
    order: 9,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Quelle famille occupe la colonne 18 de la classification périodique ?`,
    choices: [
      { content: `Les métaux alcalins.`, correct: false, explanation: `Ils occupent la colonne 1, hors hydrogène.` },
      { content: `Les halogènes.`, correct: false, explanation: `Ils occupent la colonne 17.` },
      { content: `Les gaz rares.`, correct: true, explanation: `La colonne 18 correspond aux gaz rares.` },
      { content: `Les métaux alcalino-terreux.`, correct: false, explanation: `Ils occupent la colonne 2.` },
    ],
    explanation:
      `Les gaz rares occupent la colonne 18 et présentent une très faible réactivité chimique dans les conditions usuelles.`,
  },
  {
    order: 58,
    difficulty: 'EASY',
    format: 'QROC',
    question:
      `Un atome neutre possède la configuration $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^1$. Quel est son symbole chimique ?`,
    answer: {
      type: 'text',
      acceptedAnswers: ['Na', 'sodium'],
      normalization: { trim: true, collapseWhitespace: true, caseSensitive: false, ignoreAccents: true },
    },
    explanation:
      `La configuration contient 11 électrons, donc $\\mathrm{Z}=11$. Il s'agit du sodium, $\\ce{Na}$, situé en troisième période et colonne 1.`,
  },
  {
    order: 59,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Quel élément se situe dans la troisième période et la deuxième colonne du tableau périodique ?`,
    choices: [
      { content: `Sodium ($\\ce{Na}$).`, correct: false, explanation: `Le sodium est en colonne 1.` },
      { content: `Magnésium ($\\ce{Mg}$).`, correct: true, explanation: `Le magnésium est en période 3, colonne 2.` },
      { content: `Calcium ($\\ce{Ca}$).`, correct: false, explanation: `Le calcium est en période 4.` },
      { content: `Aluminium ($\\ce{Al}$).`, correct: false, explanation: `L'aluminium est en période 3, colonne 13.` },
    ],
    explanation:
      `Le magnésium possède $\\mathrm{Z}=12$ et une configuration externe $3\\mathrm{s}^2$, caractéristique de la deuxième colonne.`,
  },
  {
    order: 60,
    difficulty: 'EASY',
    format: 'QRM',
    question: `À propos des halogènes, quelles propositions sont exactes ?`,
    choices: [
      { content: `Ils occupent la colonne 17.`, correct: true, explanation: `Vrai.` },
      { content: `Leur configuration externe générale est de type $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^5$.`, correct: true, explanation: `Vrai.` },
      { content: `Le fluor, le chlore, le brome et l'iode en font partie.`, correct: true, explanation: `Vrai.` },
      { content: `Ils appartiennent tous au bloc $\\mathrm{s}$.`, correct: false, explanation: `Faux : ils appartiennent au bloc p.` },
    ],
    explanation:
      `La famille des halogènes occupe la colonne 17 et partage une configuration externe de type $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^5$.`,
  },
  {
    order: 61,
    difficulty: 'EASY',
    format: 'QRM',
    question: `Concernant métaux, métalloïdes et non-métaux, quelles propositions sont exactes ?`,
    choices: [
      { content: `Les métaux occupent majoritairement la partie gauche et centrale du tableau.`, correct: true, explanation: `Vrai.` },
      { content: `Le silicium est classé parmi les métalloïdes dans la fiche du cours.`, correct: true, explanation: `Vrai.` },
      { content: `Les non-métaux se trouvent principalement vers la droite du tableau.`, correct: true, explanation: `Vrai.` },
      { content: `Tous les non-métaux sont gazeux à température ambiante.`, correct: false, explanation: `Faux : soufre, phosphore et iode sont notamment solides.` },
    ],
    explanation:
      `La classification distingue une majorité de métaux, une frontière de métalloïdes et des non-métaux situés principalement à droite.`,
  },
  {
    order: 62,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux configurations externes appartenant au bloc $\\mathrm{p}$.`,
    choices: [
      { content: `$\\mathrm{n}\\mathrm{s}^1$.`, correct: false, explanation: `Cette configuration appartient au bloc s.` },
      { content: `$\\mathrm{n}\\mathrm{s}^2$.`, correct: false, explanation: `Cette configuration appartient au bloc s.` },
      { content: `$\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^1$.`, correct: true, explanation: `La dernière sous-couche occupée est p.` },
      { content: `$\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^5$.`, correct: true, explanation: `La dernière sous-couche occupée est p.` },
    ],
    explanation:
      `L'appartenance à un bloc dépend de la sous-couche en cours de remplissage. Une configuration externe comportant $\\mathrm{p}$ appartient au bloc p.`,
  },
  {
    order: 10,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Parmi les quatre éléments suivants, sélectionnez exactement les deux classés comme oligoéléments dans la fiche du cours.`,
    choices: [
      { content: `Carbone ($\\ce{C}$).`, correct: false, explanation: `Le carbone fait partie des éléments de base du vivant.` },
      { content: `Oxygène ($\\ce{O}$).`, correct: false, explanation: `L'oxygène fait partie des éléments de base du vivant.` },
      { content: `Zinc ($\\ce{Zn}$).`, correct: true, explanation: `Le zinc figure parmi les métaux oligoéléments.` },
      { content: `Iode ($\\ce{I}$).`, correct: true, explanation: `L'iode figure parmi les oligoéléments non métalliques.` },
    ],
    explanation:
      `La fiche distingue 12 éléments de base du vivant et 15 oligoéléments présents en très petites proportions mais indispensables.`,
  },
];

export const UE14_CH1_CLASSIFICATION_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 55,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Concernant l'organisation de la classification périodique, quelles propositions sont exactes ?`,
    choices: [
      { content: `Les éléments d'une même colonne présentent souvent des propriétés chimiques analogues.`, correct: true, explanation: `Vrai.` },
      { content: `Le numéro de période est lié au plus grand nombre quantique principal occupé.`, correct: true, explanation: `Vrai dans le cadre du cours.` },
      { content: `Le bloc $\\mathrm{d}$ occupe la zone centrale du tableau.`, correct: true, explanation: `Vrai.` },
      { content: `Les lanthanides et actinides appartiennent au bloc $\\mathrm{p}$.`, correct: false, explanation: `Faux : ils correspondent au bloc f.` },
    ],
    explanation:
      `La position d'un élément traduit sa structure électronique : période, groupe et bloc sont reliés au remplissage des sous-couches.`,
  },
  {
    order: 64,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question:
      `L'iode est un oligoélément du vivant. Quelle proposition décrit correctement sa position dans la classification ?`,
    choices: [
      { content: `C'est un halogène de la colonne 17, avec une configuration externe de type $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^5$.`, correct: true, explanation: `Vrai.` },
      { content: `C'est un gaz rare de la colonne 18.`, correct: false, explanation: `Faux : l'iode est un halogène.` },
      { content: `C'est un métal alcalino-terreux de la colonne 2.`, correct: false, explanation: `Faux.` },
      { content: `C'est un lanthanide du bloc $\\mathrm{f}$.`, correct: false, explanation: `Faux.` },
    ],
    explanation:
      `L'iode appartient à la famille des halogènes, comme le fluor, le chlore et le brome.`,
  },
  {
    order: 66,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux éléments classés comme métalloïdes dans la fiche du cours.`,
    choices: [
      { content: `Bore ($\\ce{B}$).`, correct: true, explanation: `Le bore est cité parmi les métalloïdes.` },
      { content: `Silicium ($\\ce{Si}$).`, correct: true, explanation: `Le silicium est cité parmi les métalloïdes.` },
      { content: `Sodium ($\\ce{Na}$).`, correct: false, explanation: `Le sodium est un métal alcalin.` },
      { content: `Chlore ($\\ce{Cl}$).`, correct: false, explanation: `Le chlore est un non-métal halogène.` },
    ],
    explanation:
      `Dans la fiche, les métalloïdes comprennent notamment le bore, le silicium et le germanium.`,
  },
  {
    order: 67,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Concernant les trois grandes familles décrites dans l'énoncé commun, quelles propositions sont exactes ?`,
    choices: [
      { content: `Les métaux sont généralement conducteurs du courant électrique.`, correct: true, explanation: `Vrai.` },
      { content: `Les métalloïdes présentent des propriétés intermédiaires et peuvent être semi-conducteurs.`, correct: true, explanation: `Vrai.` },
      { content: `Les non-métaux forment fréquemment des anions dans les composés ioniques.`, correct: true, explanation: `Vrai dans les exemples du cours.` },
      { content: `Le mercure est cité comme exemple de métal gazeux à température ambiante.`, correct: false, explanation: `Faux : le mercure est l'exception liquide parmi les métaux cités.` },
    ],
    explanation:
      `La distinction métal/métalloïde/non-métal associe position dans le tableau et propriétés générales, sans constituer des règles absolues pour toute situation chimique.`,
  },
  {
    order: 65,
    difficulty: 'MEDIUM',
    format: 'QRPL',
    requiredSelectionCount: 5,
    question: `Parmi la liste suivante, sélectionnez les cinq éléments classés comme oligoéléments dans la fiche du cours.`,
    choices: [
      { content: `Fer ($\\ce{Fe}$).`, correct: true, explanation: `Métal oligoélément.` },
      { content: `Zinc ($\\ce{Zn}$).`, correct: true, explanation: `Métal oligoélément.` },
      { content: `Iode ($\\ce{I}$).`, correct: true, explanation: `Oligoélément non métallique.` },
      { content: `Sélénium ($\\ce{Se}$).`, correct: true, explanation: `Oligoélément non métallique.` },
      { content: `Cuivre ($\\ce{Cu}$).`, correct: true, explanation: `Métal oligoélément.` },
      { content: `Carbone ($\\ce{C}$).`, correct: false, explanation: `Élément de base du vivant.` },
      { content: `Hydrogène ($\\ce{H}$).`, correct: false, explanation: `Élément de base du vivant.` },
      { content: `Oxygène ($\\ce{O}$).`, correct: false, explanation: `Élément de base du vivant.` },
      { content: `Azote ($\\ce{N}$).`, correct: false, explanation: `Élément de base du vivant.` },
      { content: `Sodium ($\\ce{Na}$).`, correct: false, explanation: `Élément de base du vivant.` },
      { content: `Calcium ($\\ce{Ca}$).`, correct: false, explanation: `Élément de base du vivant.` },
      { content: `Magnésium ($\\ce{Mg}$).`, correct: false, explanation: `Élément de base du vivant.` },
    ],
    explanation:
      `La fiche distingue notamment neuf métaux oligoéléments et six oligoéléments non métalliques. Ici, Fe, Zn, I, Se et Cu appartiennent à cette catégorie.`,
  },
  {
    order: 68,
    difficulty: 'MEDIUM',
    format: 'QZONE',
    question:
      `Un atome possède une configuration électronique externe $3\\mathrm{s}^2$. Cliquez sur sa position dans la classification périodique simplifiée ci-dessous.`,
    image: {
      src: '/images/training/ue14/chimie/classification-periodique-qzone.svg',
      alt: 'Classification périodique simplifiée avec numéros de colonnes et de périodes',
      width: 1200,
      height: 600,
    },
    expectedZones: [
      {
        id: 'periode-3-colonne-2',
        label: 'Période 3, colonne 2',
        x: 0.14625,
        y: 0.3725,
        tolerance: 0.035,
      },
    ],
    explanation:
      `La configuration externe $3\\mathrm{s}^2$ indique la troisième période ($\\mathrm{n}=3$) et la deuxième colonne du bloc $\\mathrm{s}$ : c'est la position du magnésium.`,
  },
  {
    order: 69,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: `Un élément possède une configuration électronique externe $5\\mathrm{s}^2$. À quelle famille appartient-il ?`,
    choices: [
      { content: `Métaux alcalins, colonne 1.`, correct: false, explanation: `La colonne 1 correspond à $\\mathrm{n}\\mathrm{s}^1$.` },
      { content: `Métaux alcalino-terreux, colonne 2.`, correct: true, explanation: `La configuration externe $\\mathrm{n}\\mathrm{s}^2$ caractérise la colonne 2.` },
      { content: `Halogènes, colonne 17.`, correct: false, explanation: `Les halogènes ont une configuration $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^5$.` },
      { content: `Gaz rares, colonne 18.`, correct: false, explanation: `La couche externe des gaz rares est complète.` },
    ],
    explanation:
      `Une configuration $5\\mathrm{s}^2$ place l'élément en période 5, colonne 2 ; le strontium en est l'exemple.`,
  },
  {
    order: 70,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `Quel élément se trouve en troisième période et colonne 17 ?`,
    answer: {
      type: 'text',
      acceptedAnswers: ['chlore', 'Cl'],
      normalization: { trim: true, collapseWhitespace: true, caseSensitive: false, ignoreAccents: true },
    },
    explanation:
      `En troisième période, la colonne 17 correspond au chlore, $\\ce{Cl}$, de configuration externe $3\\mathrm{s}^2\\,3\\mathrm{p}^5$.`,
  },
  {
    order: 72,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question:
      `Le zirconium est utilisé dans certains matériaux destinés aux implants. On donne $\\mathrm{Z}=40$ et une configuration se terminant par $5\\mathrm{s}^2\\,4\\mathrm{d}^2$. Quelles propositions sont exactes ?`,
    choices: [
      { content: `Le zirconium appartient au bloc $\\mathrm{d}$.`, correct: true, explanation: `La sous-couche $4\\mathrm{d}$ est en cours de remplissage.` },
      { content: `Il se situe dans la cinquième période.`, correct: true, explanation: `Le plus grand nombre quantique principal occupé est 5.` },
      { content: `C'est un métal de transition.`, correct: true, explanation: `Sa position dans le bloc d central correspond aux métaux de transition.` },
      { content: `Il appartient à la série des actinides.`, correct: false, explanation: `Les actinides appartiennent au bloc f.` },
    ],
    explanation:
      `La configuration fournie suffit pour relier le zirconium au bloc d, à la période 5 et aux métaux de transition ; le contexte biomédical n'est pas nécessaire pour répondre.`,
  },
  {
    order: 73,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `À propos des lanthanides et des actinides, quelles propositions sont exactes ?`,
    choices: [
      { content: `Ils correspondent au bloc $\\mathrm{f}$.`, correct: true, explanation: `Vrai.` },
      { content: `Ils sont généralement représentés sous le tableau principal pour limiter sa largeur.`, correct: true, explanation: `Vrai.` },
      { content: `Les lanthanides sont aussi appelés terres rares dans la fiche.`, correct: true, explanation: `Vrai.` },
      { content: `Les actinides constituent la colonne 18 des gaz rares.`, correct: false, explanation: `Faux.` },
    ],
    explanation:
      `Les deux séries du bloc f sont placées sous le tableau principal dans sa représentation compacte ; elles s'insèrent dans la continuité des périodes.`,
  },
];
