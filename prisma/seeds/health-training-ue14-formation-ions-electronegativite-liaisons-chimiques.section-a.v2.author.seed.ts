import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie générale
 * Chapitre 2 – Formation des ions, électronégativité et liaisons chimiques
 * Section A – Formation des ions et électronégativité
 */

export const UE14_CH2_IONS_ELECTRONEG_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 1,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Quelle proposition décrit correctement la formation d'un cation ?`,
    choices: [
      {
        content: `Un atome gagne un ou plusieurs électrons et devient chargé positivement.`,
        correct: false,
        explanation: `Le gain d'électrons conduit à un anion chargé négativement.`,
      },
      {
        content: `Un atome perd un ou plusieurs électrons et devient chargé positivement.`,
        correct: true,
        explanation: `La perte d'électrons laisse un excès de charges positives : l'espèce formée est un cation.`,
      },
      {
        content: `Un atome gagne des protons sans modifier son cortège électronique.`,
        correct: false,
        explanation: `La formation d'un ion chimique met en jeu les électrons et ne modifie pas le nombre de protons du noyau.`,
      },
      {
        content: `Un atome perd des neutrons jusqu'à atteindre la configuration d'un gaz rare.`,
        correct: false,
        explanation: `La stabilité électronique visée concerne le cortège électronique, pas le nombre de neutrons.`,
      },
    ],
    explanation:
      `Un cation résulte d'une perte d'électrons ; un anion résulte d'un gain d'électrons. Le noyau n'est pas modifié lors de cette ionisation chimique.`,
  },
  {
    order: 2,
    difficulty: 'EASY',
    format: 'QROC',
    question: `L'atome de magnésium possède $\\mathrm{Z}=12$. Combien d'électrons possède l'ion $\\ce{Mg^2+}$ ?`,
    answer: { type: 'number', value: 10, tolerance: 0 },
    explanation:
      `Le magnésium neutre possède 12 électrons. La charge $2+$ correspond à la perte de deux électrons : $12-2=10$.`,
  },
  {
    order: 3,
    difficulty: 'EASY',
    format: 'QRM',
    question: `Concernant les ions $\\ce{Na+}$, $\\ce{Mg^2+}$ et $\\ce{Al^3+}$, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Ils possèdent tous dix électrons.`,
        correct: true,
        explanation: `Na : $11-1=10$ ; Mg : $12-2=10$ ; Al : $13-3=10$.`,
      },
      {
        content: `Ils sont isoélectroniques du néon.`,
        correct: true,
        explanation: `Le néon possède dix électrons : $1\\mathrm{s}^2\,2\\mathrm{s}^2\,2\\mathrm{p}^6$.`,
      },
      {
        content: `Ils ont tous gagné des électrons pour se former.`,
        correct: false,
        explanation: `Ce sont des cations : ils résultent d'une perte d'électrons.`,
      },
      {
        content: `Ils possèdent tous le même nombre de protons.`,
        correct: false,
        explanation: `Le nombre de protons reste propre à chaque élément : 11, 12 et 13.`,
      },
    ],
    explanation:
      `Ces trois cations atteignent la configuration électronique du gaz rare précédent, le néon, tout en conservant chacun leur numéro atomique.`,
  },
  {
    order: 4,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Dans le cadre du cours, quelle situation correspond à l'ionisation positive la plus facile ?`,
    choices: [
      {
        content: `Un gros atome dont l'électron de valence est relativement éloigné du noyau.`,
        correct: true,
        explanation: `L'attraction noyau–électron est alors plus faible et l'énergie d'ionisation tend à diminuer.`,
      },
      {
        content: `Un petit atome très électronégatif situé en haut à droite de la classification.`,
        correct: false,
        explanation: `Ces éléments retiennent fortement leurs électrons et tendent plutôt à capter des électrons.`,
      },
      {
        content: `Un gaz rare dont la couche de valence est complète.`,
        correct: false,
        explanation: `Les gaz rares sont particulièrement peu enclins à perdre ou gagner des électrons.`,
      },
      {
        content: `Un atome dont l'énergie d'ionisation est très élevée.`,
        correct: false,
        explanation: `Une énergie d'ionisation élevée signifie qu'il faut fournir beaucoup d'énergie pour arracher un électron.`,
      },
    ],
    explanation:
      `Plus l'énergie d'ionisation est faible, plus la formation d'un cation est facile. Dans une colonne, cette ionisation devient globalement plus facile lorsque la taille atomique augmente.`,
  },
  {
    order: 5,
    difficulty: 'EASY',
    format: 'QRM',
    question: `Concernant la tendance à former des anions dans le modèle simplifié du cours, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Un atome qui gagne des électrons se rapproche de la configuration du gaz rare suivant.`,
        correct: true,
        explanation: `Le gain d'électrons complète la couche de valence vers le gaz rare suivant.`,
      },
      {
        content: `Les ions $\\ce{N^3-}$, $\\ce{O^2-}$ et $\\ce{F-}$ sont isoélectroniques du néon.`,
        correct: true,
        explanation: `Ces trois ions possèdent chacun dix électrons.`,
      },
      {
        content: `Dans la série $\\ce{N}$, $\\ce{O}$, $\\ce{F}$, la fiche retient l'ordre $\\ce{N} > \\ce{O} > \\ce{F}$ pour la facilité de capture électronique.`,
        correct: false,
        explanation: `La fiche retient au contraire $\\ce{F} > \\ce{O} > \\ce{N}$.`,
      },
      {
        content: `Le fluor tend facilement à former un cation $\\ce{F+}$.`,
        correct: false,
        explanation: `Le fluor est très électronégatif et tend plutôt à gagner un électron pour former $\\ce{F-}$.`,
      },
    ],
    explanation:
      `Les non-métaux très électronégatifs captent plus volontiers des électrons. Les anions formés tendent alors vers la configuration électronique du gaz rare suivant.`,
  },
  {
    order: 6,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Dans le cadre du cours, que traduit principalement l'électronégativité d'un élément ?`,
    choices: [
      {
        content: `Sa tendance à attirer ou capter des électrons plutôt qu'à les céder.`,
        correct: true,
        explanation: `Vrai : l'électronégativité exprime la tendance d'un élément à capter ou attirer les électrons.`,
      },
      {
        content: `Le nombre total d'électrons présents dans son noyau.`,
        correct: false,
        explanation: `Faux : le noyau contient les protons et les neutrons, et non les électrons.`,
      },
      {
        content: `L'énergie libérée lors de la rupture d'une liaison covalente.`,
        correct: false,
        explanation: `Faux : il s'agit de l'énergie de liaison, distincte de l'électronégativité.`,
      },
      {
        content: `La masse atomique moyenne exprimée en unités de masse atomique unifiées.`,
        correct: false,
        explanation: `Faux : la masse atomique dépend des nucléons et non de l'électronégativité.`,
      },
    ],
    explanation:
      `Dans le cours, l'électronégativité traduit la tendance d'un élément à attirer ou capturer les électrons. Une faible électronégativité est associée à la perte d'électrons (formation de cations), tandis qu'une forte électronégativité est associée au gain d'électrons (formation d'anions).`,
  },
  {
    order: 7,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux tendances générales correctes de l'électronégativité dans la classification périodique.`,
    choices: [
      {
        content: `Elle augmente globalement de la gauche vers la droite d'une période.`,
        correct: true,
        explanation: `C'est la tendance horizontale générale.`,
      },
      {
        content: `Elle diminue globalement du haut vers le bas d'une colonne.`,
        correct: true,
        explanation: `C'est la tendance verticale générale.`,
      },
      {
        content: `Elle augmente globalement du haut vers le bas d'une colonne.`,
        correct: false,
        explanation: `Elle diminue généralement dans ce sens.`,
      },
      {
        content: `Elle est maximale dans le coin inférieur gauche du tableau.`,
        correct: false,
        explanation: `Elle augmente globalement vers le coin supérieur droit.`,
      },
    ],
    explanation:
      `L'électronégativité augmente globalement du coin inférieur gauche vers le coin supérieur droit de la classification périodique.`,
  },
  {
    order: 8,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Parmi les éléments suivants, lequel est le plus électronégatif ?`,
    choices: [
      { content: `Hydrogène : $\\chi\\approx2{,}1$.`, correct: false, explanation: `Valeur inférieure à celles de C, N et O.` },
      { content: `Carbone : $\\chi\\approx2{,}5$.`, correct: false, explanation: `Le carbone est moins électronégatif que N et O.` },
      { content: `Azote : $\\chi\\approx3{,}0$.`, correct: false, explanation: `L'oxygène reste plus électronégatif.` },
      { content: `Oxygène : $\\chi\\approx3{,}5$.`, correct: true, explanation: `C'est le plus électronégatif de ces quatre éléments essentiels au vivant.` },
    ],
    explanation:
      `Dans la fiche : $\\chi(\\ce{H})\\approx2{,}1 < \\chi(\\ce{C})\\approx2{,}5 < \\chi(\\ce{N})\\approx3{,}0 < \\chi(\\ce{O})\\approx3{,}5$.`,
  },
  {
    order: 9,
    difficulty: 'EASY',
    format: 'QROC',
    question: `Quelle valeur approximative de l'électronégativité du fluor est retenue dans la fiche du cours ?`,
    answer: { type: 'number', value: 4, tolerance: 0.01 },
    explanation:
      `Le fluor constitue la référence haute de l'échelle présentée dans la fiche, avec $\\chi(\\ce{F})\\approx4{,}0$.`,
  },
  {
    order: 10,
    difficulty: 'EASY',
    format: 'QRM',
    question: `À propos du lien entre électronégativité et formation des ions dans le modèle simplifié du cours, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Une faible électronégativité favorise généralement la perte d'électrons et la formation de cations.`,
        correct: true,
        explanation: `Les métaux peu électronégatifs retiennent moins fortement leurs électrons de valence.`,
      },
      {
        content: `Une électronégativité élevée favorise généralement le gain d'électrons et la formation d'anions.`,
        correct: true,
        explanation: `Les non-métaux très électronégatifs attirent fortement les électrons.`,
      },
      {
        content: `Le carbone et l'hydrogène ont des électronégativités très éloignées dans la fiche.`,
        correct: false,
        explanation: `Leurs valeurs sont proches : environ 2,5 pour C et 2,1 pour H.`,
      },
      {
        content: `Les gaz rares constituent la famille la plus facile à ioniser positivement et négativement.`,
        correct: false,
        explanation: `Leur couche de valence complète les rend au contraire très peu réactifs.`,
      },
    ],
    explanation:
      `La fiche relie l'électronégativité faible à la formation préférentielle de cations et l'électronégativité élevée à la formation préférentielle d'anions.`,
  },
];

export const UE14_CH2_IONS_ELECTRONEG_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 11,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `Le sodium possède $\\mathrm{Z}=11$. Combien d'électrons possède l'ion $\\ce{Na+}$ présent dans une solution de chlorure de sodium ?`,
    answer: { type: 'number', value: 10, tolerance: 0 },
    explanation:
      `L'atome neutre de sodium possède 11 électrons ; l'ion $\\ce{Na+}$ en a perdu un et en possède donc 10.`,
  },
  {
    order: 12,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `Le chlore possède $\\mathrm{Z}=17$. Combien d'électrons possède l'ion chlorure $\\ce{Cl-}$ ?`,
    answer: { type: 'number', value: 18, tolerance: 0 },
    explanation:
      `L'ion chlorure résulte du gain d'un électron : $17+1=18$ électrons, soit la configuration électronique de l'argon.`,
  },
  {
    order: 13,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux espèces isoélectroniques du néon parmi les quatre proposées.`,
    choices: [
      { content: `$\\ce{Na+}$.`, correct: true, explanation: `11-1=10 électrons.` },
      { content: `$\\ce{F-}$.`, correct: true, explanation: `9+1=10 électrons.` },
      { content: `$\\ce{Cl-}$.`, correct: false, explanation: `18 électrons, comme l'argon.` },
      { content: `$\\ce{K+}$.`, correct: false, explanation: `19-1=18 électrons, comme l'argon.` },
    ],
    explanation:
      `Une espèce isoélectronique du néon doit posséder dix électrons. Le calcul se fait à partir de $\\mathrm{Z}$ et de la charge de l'ion.`,
  },
  {
    order: 14,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Le fer peut former les ions $\\ce{Fe^2+}$ et $\\ce{Fe^3+}$. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Pour former $\\ce{Fe^2+}$, les deux électrons $4\\mathrm{s}$ sont retirés avant les électrons $3\\mathrm{d}$.`,
        correct: true,
        explanation: `C'est la règle appliquée aux cations du fer dans le cours.`,
      },
      {
        content: `$\\ce{Fe^2+}$ possède 24 électrons.`,
        correct: true,
        explanation: `$26-2=24$.`,
      },
      {
        content: `$\\ce{Fe^3+}$ possède 26 électrons.`,
        correct: false,
        explanation: `$\\ce{Fe^3+}$ possède $26-3=23$ électrons.`,
      },
      {
        content: `La formation de $\\ce{Fe^3+}$ nécessite le gain de trois électrons.`,
        correct: false,
        explanation: `La charge positive résulte d'une perte de trois électrons.`,
      },
    ],
    explanation:
      `Les métaux de transition peuvent former plusieurs cations. Pour le fer, les électrons $4\\mathrm{s}$ sont retirés avant les électrons $3\\mathrm{d}$.`,
  },
  {
    order: 15,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `Combien d'électrons possède l'ion ferrique $\\ce{Fe^3+}$ si $\\mathrm{Z}(\\ce{Fe})=26$ ?`,
    answer: { type: 'number', value: 23, tolerance: 0 },
    explanation:
      `L'ion ferrique a perdu trois électrons : $26-3=23$.`,
  },
  {
    order: 16,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: `Quel ordre d'électronégativité croissante est conforme aux valeurs du cours ?`,
    choices: [
      { content: `$\\ce{O}<\\ce{N}<\\ce{C}<\\ce{H}$.`, correct: false, explanation: `Ordre inverse de la tendance donnée.` },
      { content: `$\\ce{H}<\\ce{C}<\\ce{N}<\\ce{O}$.`, correct: true, explanation: `2,1 < 2,5 < 3,0 < 3,5.` },
      { content: `$\\ce{C}<\\ce{H}<\\ce{O}<\\ce{N}$.`, correct: false, explanation: `H est moins électronégatif que C et O plus que N.` },
      { content: `$\\ce{H}<\\ce{N}<\\ce{C}<\\ce{O}$.`, correct: false, explanation: `N est plus électronégatif que C.` },
    ],
    explanation:
      `La fiche retient approximativement : H 2,1 ; C 2,5 ; N 3,0 ; O 3,5.`,
  },
  {
    order: 17,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: `Dans la colonne des métaux alcalins, quel ordre d'électronégativité croissante est correct ?`,
    choices: [
      { content: `$\\ce{Li}<\\ce{Na}<\\ce{K}<\\ce{Rb}$.`, correct: false, explanation: `L'électronégativité diminue en descendant la colonne.` },
      { content: `$\\ce{Rb}<\\ce{K}<\\ce{Na}<\\ce{Li}$.`, correct: true, explanation: `L'ordre remonte la colonne du moins au plus électronégatif.` },
      { content: `$\\ce{K}<\\ce{Rb}<\\ce{Li}<\\ce{Na}$.`, correct: false, explanation: `Cet ordre ne suit pas la tendance périodique.` },
      { content: `$\\ce{Na}<\\ce{Li}<\\ce{Rb}<\\ce{K}$.`, correct: false, explanation: `Cet ordre mélange les tendances.` },
    ],
    explanation:
      `Dans une colonne, l'électronégativité diminue globalement du haut vers le bas : le rubidium est donc moins électronégatif que le lithium.`,
  },
  {
    order: 18,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Concernant l'énergie d'ionisation et l'affinité pour les électrons dans le cadre simplifié du cours, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Le potassium perd plus facilement son électron de valence que le lithium.`,
        correct: true,
        explanation: `Le potassium est plus volumineux et son électron externe est moins fortement retenu.`,
      },
      {
        content: `Le fluor capture plus facilement un électron que l'iode dans la tendance présentée par la fiche.`,
        correct: true,
        explanation: `La fiche relie la plus petite taille du fluor à une attraction plus forte.`,
      },
      {
        content: `Le sodium possède une énergie d'ionisation plus élevée que le magnésium dans la comparaison simplifiée du cours.`,
        correct: false,
        explanation: `La fiche présente l'ionisation du sodium comme plus facile que celle du magnésium.`,
      },
      {
        content: `Un atome très électronégatif perd généralement plus facilement un électron qu'un métal alcalin.`,
        correct: false,
        explanation: `Un atome très électronégatif tend plutôt à attirer ou capter des électrons.`,
      },
    ],
    explanation:
      `Les tendances d'ionisation positive et de capture électronique sont liées à la taille atomique et à l'attraction exercée par le noyau sur les électrons.`,
  },
  {
    order: 19,
    difficulty: 'MEDIUM',
    format: 'QRPL',
    requiredSelectionCount: 5,
    question: `Parmi les dix espèces suivantes, sélectionnez exactement les cinq cations.`,
    choices: [
      { content: `$\\ce{Na+}$.`, correct: true, explanation: `Charge positive : cation.` },
      { content: `$\\ce{Mg^2+}$.`, correct: true, explanation: `Charge positive : cation.` },
      { content: `$\\ce{Al^3+}$.`, correct: true, explanation: `Charge positive : cation.` },
      { content: `$\\ce{Fe^2+}$.`, correct: true, explanation: `Charge positive : cation.` },
      { content: `$\\ce{Zn^2+}$.`, correct: true, explanation: `Charge positive : cation.` },
      { content: `$\\ce{F-}$.`, correct: false, explanation: `Charge négative : anion.` },
      { content: `$\\ce{O^2-}$.`, correct: false, explanation: `Charge négative : anion.` },
      { content: `$\\ce{N^3-}$.`, correct: false, explanation: `Charge négative : anion.` },
      { content: `$\\ce{Cl-}$.`, correct: false, explanation: `Charge négative : anion.` },
      { content: `$\\ce{O2}$.`, correct: false, explanation: `Molécule neutre dans cette écriture.` },
    ],
    explanation:
      `Un cation porte une charge globale positive ; un anion porte une charge négative. Cette sélection longue vérifie la lecture immédiate des charges ioniques.`,
  },
  {
    order: 20,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `Un atome neutre possède 13 électrons et en perd trois. Quelle est la valeur entière de la charge de l'ion obtenu, en unités de charge élémentaire ?`,
    answer: { type: 'number', value: 3, tolerance: 0 },
    explanation:
      `La perte de trois électrons conduit à une charge globale $3+$ : l'ion est $\\ce{Al^3+}$ si l'atome considéré est l'aluminium.`,
  },
  {
    order: 61,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `Le calcium possède $\\mathrm{Z}=20$. Combien d'électrons possède l'ion $\\ce{Ca^2+}$ ?`,
    answer: { type: 'number', value: 18, tolerance: 0 },
    explanation:
      `L'ion $\\ce{Ca^2+}$ a perdu deux électrons : $20-2=18$. Il est isoélectronique de l'argon.`,
  },
  {
    order: 62,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `À propos de l'ion $\\ce{Ca^2+}$, sélectionnez exactement les deux propositions correctes.`,
    choices: [
      {
        content: `Il résulte de la perte de deux électrons par l'atome de calcium.`,
        correct: true,
        explanation: `La charge $2+$ correspond à la perte de deux électrons.`,
      },
      {
        content: `Il possède la configuration électronique du gaz rare précédent, l'argon.`,
        correct: true,
        explanation: `Avec 18 électrons, $\\ce{Ca^2+}$ est isoélectronique de l'argon.`,
      },
      {
        content: `Il possède deux protons de moins que l'atome de calcium.`,
        correct: false,
        explanation: `Le nombre de protons reste égal à $\\mathrm{Z}=20$.`,
      },
      {
        content: `Il s'agit d'un anion.`,
        correct: false,
        explanation: `La charge est positive : il s'agit d'un cation.`,
      },
    ],
    explanation:
      `La formation d'un ion chimique modifie le nombre d'électrons mais pas le noyau. Le calcium perd deux électrons et atteint une configuration électronique de gaz rare.`,
  },
];
