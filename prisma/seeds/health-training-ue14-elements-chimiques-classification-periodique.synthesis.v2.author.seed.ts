import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie générale
 * Chapitre 1 – Éléments chimiques et classification périodique
 * Section D – Synthèse
 */

export const UE14_CH1_SYNTHESIS_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 75,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question:
      `Combien de neutrons de plus possède $\\ce{^{131}_{53}I}$ par rapport à $\\ce{^{127}_{53}I}$ ?`,
    answer: { type: 'number', value: 4, tolerance: 0 },
    explanation:
      `Les deux nucléides ont le même $\\mathrm{Z}=53$. Leurs nombres de neutrons valent respectivement 78 et 74, soit une différence de 4.`,
  },
  {
    order: 76,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Concernant les deux nucléides de l'iode présentés dans l'énoncé commun, quelles propositions sont exactes ?`,
    choices: [
      { content: `Ils appartiennent au même élément chimique.`, correct: true, explanation: `Ils ont le même numéro atomique.` },
      { content: `Ils ont le même nombre de protons.`, correct: true, explanation: `Leur $\\mathrm{Z}$ vaut 53.` },
      { content: `Ils possèdent exactement la même masse.`, correct: false, explanation: `Leurs nombres de masse sont différents.` },
      { content: `Leurs propriétés chimiques sont très proches sous forme d'atomes neutres.`, correct: true, explanation: `Leur cortège électronique est identique à l'état neutre.` },
    ],
    explanation:
      `Ce sont deux isotopes de l'iode : même numéro atomique, nombres de neutrons et masses différents, propriétés chimiques très proches.`,
  },
  {
    order: 77,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question:
      `Le cobalt 60 est un radionucléide émetteur utilisé comme source de rayonnements gamma en radiothérapie. On donne $\\ce{^{60}_{27}Co}$ et une configuration électronique de l'atome neutre se terminant par $4\\mathrm{s}^2\\,3\\mathrm{d}^7$. Quelles propositions sont exactes ?`,
    choices: [
      { content: `Son noyau contient 33 neutrons.`, correct: true, explanation: `$60-27=33$.` },
      { content: `L'atome neutre possède 27 électrons.`, correct: true, explanation: `Un atome neutre possède autant d'électrons que de protons.` },
      { content: `Le cobalt appartient au bloc $\\mathrm{d}$.`, correct: true, explanation: `La sous-couche d est en cours de remplissage.` },
      { content: `Le cobalt appartient à la deuxième période.`, correct: false, explanation: `Le plus grand $\\mathrm{n}$ occupé est 4.` },
    ],
    explanation:
      `Cette question combine composition nucléaire, neutralité électronique et lecture de configuration. Le contexte thérapeutique ne change pas les calculs.`,
  },
  {
    order: 78,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: `Quelle configuration correspond au calcium neutre ($\\mathrm{Z}=20$) présenté dans l'énoncé commun ?`,
    choices: [
      { content: `$[\\mathrm{Ar}]\\,4\\mathrm{s}^2$`, correct: true, explanation: `Le calcium possède 20 électrons et se termine par $4\\mathrm{s}^2$.` },
      { content: `$[\\mathrm{Ar}]\\,4\\mathrm{s}^1$`, correct: false, explanation: `Cette configuration correspond au potassium.` },
      { content: `$[\\mathrm{Ne}]\\,3\\mathrm{s}^2$`, correct: false, explanation: `Cette configuration correspond au magnésium.` },
      { content: `$[\\mathrm{Ar}]\\,3\\mathrm{d}^2$`, correct: false, explanation: `Le remplissage de $4\\mathrm{s}$ précède celui de $3\\mathrm{d}$.` },
    ],
    explanation:
      `Le calcium appartient à la quatrième période et à la colonne 2 ; sa configuration externe est $4\\mathrm{s}^2$.`,
  },
  {
    order: 79,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `Quelle valeur de $\\ell$ caractérise les électrons de valence $4\\mathrm{s}$ du calcium ?`,
    answer: { type: 'number', value: 0, tolerance: 0 },
    explanation:
      `Une sous-couche $\\mathrm{s}$ correspond toujours à $\\ell=0$.`,
  },
  {
    order: 80,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: `Quelle représentation correspond à la couche de valence du phosphore ($\\mathrm{Z}=15$) présenté dans l'énoncé commun ?`,
    choices: [
      {
        content: { type: 'quantum-boxes', orbitals: [{ label: '3\\mathrm{s}', boxes: ['pair'] }, { label: '3\\mathrm{p}', boxes: ['up', 'up', 'up'] }] },
        correct: true,
        explanation: `Vrai : le phosphore possède $3\\mathrm{s}^2\\,3\\mathrm{p}^3$.`,
      },
      {
        content: { type: 'quantum-boxes', orbitals: [{ label: '3\\mathrm{s}', boxes: ['pair'] }, { label: '3\\mathrm{p}', boxes: ['pair', 'up', 'empty'] }] },
        correct: false,
        explanation: `Le nombre d'électrons est correct mais la règle de Hund n'est pas respectée.`,
      },
      {
        content: { type: 'quantum-boxes', orbitals: [{ label: '3\\mathrm{s}', boxes: ['up'] }, { label: '3\\mathrm{p}', boxes: ['pair', 'up', 'up'] }] },
        correct: false,
        explanation: `La sous-couche $3\\mathrm{s}$ doit être remplie.`,
      },
      {
        content: { type: 'quantum-boxes', orbitals: [{ label: '3\\mathrm{s}', boxes: ['pair'] }, { label: '3\\mathrm{p}', boxes: ['pair', 'pair', 'empty'] }] },
        correct: false,
        explanation: `Cette représentation contient six électrons de valence.`,
      },
    ],
    explanation:
      `La configuration externe du phosphore est $3\\mathrm{s}^2\\,3\\mathrm{p}^3$ ; les trois électrons p restent célibataires dans trois orbitales distinctes.`,
  },
  {
    order: 81,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `Combien d'électrons célibataires trouve-t-on dans la sous-couche $3\\mathrm{p}$ du phosphore à l'état fondamental ?`,
    answer: { type: 'number', value: 3, tolerance: 0 },
    explanation:
      `Pour $3\\mathrm{p}^3$, Hund impose un électron dans chacune des trois orbitales p : les trois sont donc célibataires.`,
  },
  {
    order: 82,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question:
      `Le bore 10 peut être utilisé en thérapie par capture neutronique du bore. Une préparation contient 80 % de $\\ce{^{10}B}$ de masse $10\\,\\mathrm{u}$ et 20 % de $\\ce{^{11}B}$ de masse $11\\,\\mathrm{u}$. Quelle est sa masse atomique moyenne en $\\mathrm{u}$ ? Saisissez uniquement la valeur numérique.`,
    answer: { type: 'number', value: 10.2, tolerance: 0.01 },
    explanation:
      `Moyenne pondérée : $0{,}80\\times10+0{,}20\\times11=10{,}2\\,\\mathrm{u}$. Le contexte thérapeutique illustre l'intérêt d'un isotope particulier mais n'est pas nécessaire au calcul.`,
  },
  {
    order: 83,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question:
      `Le sélénium est un oligoélément. On donne une configuration se terminant par $4\\mathrm{s}^2\\,4\\mathrm{p}^4$. Sélectionnez exactement les deux propositions correctes.`,
    choices: [
      { content: `Il appartient à la quatrième période.`, correct: true, explanation: `Le plus grand nombre quantique principal occupé est 4.` },
      { content: `Il appartient à la colonne 16.`, correct: true, explanation: `La configuration externe $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^4$ correspond à la colonne 16.` },
      { content: `Il appartient au bloc $\\mathrm{d}$.`, correct: false, explanation: `La dernière sous-couche occupée est p.` },
      { content: `Il possède deux électrons de valence.`, correct: false, explanation: `Il en possède six : $4\\mathrm{s}^2\\,4\\mathrm{p}^4$.` },
    ],
    explanation:
      `La configuration externe permet de déduire simultanément la période, le bloc et la colonne.`,
  },
  {
    order: 84,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question:
      `Le gadolinium entre dans la composition de certains agents de contraste utilisés en IRM. Il possède $\\mathrm{Z}=64$. Quelles propositions sont exactes ?`,
    choices: [
      { content: `Le gadolinium est un lanthanide.`, correct: true, explanation: `Vrai.` },
      { content: `Il appartient au bloc $\\mathrm{f}$.`, correct: true, explanation: `Les lanthanides correspondent au remplissage du bloc f.` },
      { content: `C'est un élément métallique.`, correct: true, explanation: `Les lanthanides sont des métaux.` },
      { content: `Il appartient à la colonne 18 des gaz rares.`, correct: false, explanation: `Faux.` },
    ],
    explanation:
      `Le gadolinium est un lanthanide du bloc f. Le contexte d'IRM donne un usage concret de cet élément sans modifier la compétence de classification évaluée.`,
  },
];

export const UE14_CH1_SYNTHESIS_MASTER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 27,
    difficulty: 'HARD',
    format: 'QRM',
    question: `Concernant le modèle atomique et nucléaire, quelles propositions sont exactes ?`,
    choices: [
      { content: `Certains nucléides présents naturellement sont radioactifs.`, correct: true, explanation: `Vrai.` },
      { content: `La masse d'un noyau lié est légèrement inférieure à la somme des masses de ses nucléons séparés.`, correct: true, explanation: `C'est le défaut de masse.` },
      { content: `La dimension d'un noyau est de l'ordre de $10^{-10}\\,\\mathrm{m}$.`, correct: false, explanation: `Elle est de l'ordre de $10^{-15}\\,\\mathrm{m}$.` },
      { content: `Dans un atome neutre, le nombre d'électrons est égal au nombre de protons.`, correct: true, explanation: `C'est la condition de neutralité.` },
    ],
    explanation:
      `La synthèse du modèle atomique associe dimensions, composition, neutralité et défaut de masse.`,
  },
  {
    order: 48,
    difficulty: 'HARD',
    format: 'QROC',
    question: `Combien d'électrons peut contenir au maximum une sous-couche $\\mathrm{f}$ ?`,
    answer: { type: 'number', value: 14, tolerance: 0 },
    explanation:
      `Pour $\\ell=3$, il existe $2\\ell+1=7$ orbitales. À deux électrons par orbitale, la capacité maximale est 14.`,
  },
  {
    order: 49,
    difficulty: 'HARD',
    format: 'QRM',
    question: `Concernant les orbitales atomiques, quelles propositions sont exactes ?`,
    choices: [
      { content: `Une sous-couche $\\mathrm{p}$ comporte trois orbitales.`, correct: true, explanation: `Vrai.` },
      { content: `Chaque orbitale peut contenir au maximum deux électrons.`, correct: true, explanation: `Vrai.` },
      { content: `Une orbitale $\\mathrm{s}$ présente une symétrie sphérique dans la représentation qualitative du cours.`, correct: true, explanation: `Vrai.` },
      { content: `Une orbitale correspond à la trajectoire exacte de l'électron autour du noyau.`, correct: false, explanation: `Faux : elle décrit une probabilité de présence.` },
    ],
    explanation:
      `La notion d'orbitale remplace l'idée de trajectoire classique par une distribution spatiale de probabilité.`,
  },
  {
    order: 50,
    difficulty: 'HARD',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Selon la règle $\\mathrm{n}+\\ell$, sélectionnez exactement les deux relations d'ordre énergétique correctes.`,
    choices: [
      { content: `$4\\mathrm{s}$ est remplie avant $3\\mathrm{d}$.`, correct: true, explanation: `Pour $4\\mathrm{s}$, $\\mathrm{n}+\\ell=4+0=4$ ; pour $3\\mathrm{d}$, $\\mathrm{n}+\\ell=3+2=5$. La sous-couche $4\\mathrm{s}$ est donc remplie avant $3\\mathrm{d}$.` },
      { content: `$3\\mathrm{d}$ est remplie avant $4\\mathrm{p}$.`, correct: true, explanation: `Les deux ont $\\mathrm{n}+\\ell=5$ ; le plus petit $\\mathrm{n}$, donc 3d, est plus bas.` },
      { content: `$3\\mathrm{d}$ est remplie avant $4\\mathrm{s}$.`, correct: false, explanation: `C'est l'inverse dans l'ordre présenté.` },
      { content: `$4\\mathrm{p}$ est remplie avant $3\\mathrm{d}$.`, correct: false, explanation: `À $\\mathrm{n}+\\ell$ égal, le plus petit $\\mathrm{n}$ est prioritaire.` },
    ],
    explanation:
      `La règle combine la valeur de $\\mathrm{n}+\\ell$ puis, en cas d'égalité, la plus petite valeur de $\\mathrm{n}$.`,
  },
  {
    order: 51,
    difficulty: 'HARD',
    format: 'QROC',
    question:
      `Un atome neutre a pour configuration $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^5$. Quel est son élément chimique ?`,
    answer: {
      type: 'text',
      acceptedAnswers: ['chlore', 'Cl'],
      normalization: { trim: true, collapseWhitespace: true, caseSensitive: false, ignoreAccents: true },
    },
    explanation:
      `La configuration comporte 17 électrons : $\\mathrm{Z}=17$. Il s'agit du chlore, halogène de la troisième période.`,
  },
  {
    order: 52,
    difficulty: 'HARD',
    format: 'QROC',
    question: `Pour le nickel de l'énoncé commun, dont la configuration se termine par $4\\mathrm{s}^2\\,3\\mathrm{d}^8$, combien d'électrons occupent la sous-couche $3\\mathrm{d}$ ?`,
    answer: { type: 'number', value: 8, tolerance: 0 },
    explanation: `L'exposant de $3\\mathrm{d}^8$ donne directement huit électrons dans la sous-couche d.`,
  },
  {
    order: 53,
    difficulty: 'HARD',
    format: 'QRU',
    question: `Selon la convention de couche de valence du cours, quelle proposition est correcte pour le nickel de l'énoncé commun ?`,
    choices: [
      { content: `Sa couche de valence est $\\mathrm{n}=4$ et contient $4\\mathrm{s}^2$.`, correct: true, explanation: `Le plus grand n occupé est 4.` },
      { content: `Sa couche de valence est $\\mathrm{n}=3$ car la sous-couche $3\\mathrm{d}$ contient davantage d'électrons.`, correct: false, explanation: `Le cours retient la couche de plus grand n.` },
      { content: `Sa couche de valence est la couche $\\mathrm{L}$.`, correct: false, explanation: `L correspond à n=2.` },
      { content: `Le nickel ne possède pas de couche de valence car c'est un métal de transition.`, correct: false, explanation: `Tout atome possède une couche externe.` },
    ],
    explanation:
      `Dans la convention explicitement retenue par la fiche, la couche de valence correspond au plus grand nombre quantique principal occupé.`,
  },
  {
    order: 54,
    difficulty: 'HARD',
    format: 'QRM',
    question:
      `Un atome neutre possède une configuration se terminant par $5\\mathrm{s}^2$, après remplissage complet des sous-couches jusqu'à $4\\mathrm{p}^6$. Quelles propositions sont exactes ?`,
    choices: [
      { content: `Il appartient à la cinquième période.`, correct: true, explanation: `Le plus grand n occupé est 5.` },
      { content: `Il appartient à la colonne 2.`, correct: true, explanation: `La configuration externe ns2 correspond à la colonne 2.` },
      { content: `Il appartient au bloc $\\mathrm{s}$.`, correct: true, explanation: `La dernière sous-couche occupée est s.` },
      { content: `Il appartient à la famille des halogènes.`, correct: false, explanation: `Les halogènes ont une configuration externe ns2np5.` },
    ],
    explanation:
      `Cette configuration correspond notamment au strontium : période 5, colonne 2, bloc s.`,
  },
  {
    order: 71,
    difficulty: 'HARD',
    format: 'QRU',
    question: `Quel ordre correspond correctement aux éléments de la deuxième période par numéro atomique croissant ?`,
    choices: [
      { content: `$\\ce{Li},\\ce{Be},\\ce{B},\\ce{C},\\ce{N},\\ce{O},\\ce{F},\\ce{Ne}$`, correct: true, explanation: `Ordre de Z=3 à Z=10.` },
      { content: `$\\ce{Be},\\ce{Li},\\ce{B},\\ce{C},\\ce{N},\\ce{O},\\ce{F},\\ce{Ne}$`, correct: false, explanation: `Li précède Be.` },
      { content: `$\\ce{Li},\\ce{Be},\\ce{C},\\ce{B},\\ce{N},\\ce{O},\\ce{F},\\ce{Ne}$`, correct: false, explanation: `B précède C.` },
      { content: `$\\ce{Li},\\ce{Be},\\ce{B},\\ce{C},\\ce{O},\\ce{N},\\ce{F},\\ce{Ne}$`, correct: false, explanation: `N précède O.` },
    ],
    explanation:
      `La deuxième période s'étend du lithium ($\\mathrm{Z}=3$) au néon ($\\mathrm{Z}=10$).`,
  },
  {
    order: 74,
    difficulty: 'HARD',
    format: 'QRM',
    question:
      `On donne la configuration d'un atome neutre : $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,4\\mathrm{s}^2\\,3\\mathrm{d}^6$. Quelles propositions sont exactes ?`,
    choices: [
      { content: `Son numéro atomique est $\\mathrm{Z}=26$.`, correct: true, explanation: `La somme des électrons vaut 26.` },
      { content: `Il s'agit du fer.`, correct: true, explanation: `Z=26 correspond au fer.` },
      { content: `Il appartient à la quatrième période.`, correct: true, explanation: `Le plus grand nombre quantique principal occupé est 4.` },
      { content: `Il appartient au bloc $\\mathrm{p}$.`, correct: false, explanation: `La sous-couche d est en cours de remplissage : bloc d.` },
    ],
    explanation:
      `Le comptage des électrons et la sous-couche en cours de remplissage permettent d'identifier simultanément l'élément et sa position dans le tableau.`,
  },
  {
    order: 7,
    difficulty: 'HARD',
    format: 'QROC',
    question: `Combien d'électrons peut contenir au maximum une couche complète de nombre quantique principal $\\mathrm{n}=4$ ?`,
    answer: { type: 'number', value: 32, tolerance: 0 },
    explanation:
      `La couche $\\mathrm{n}=4$ comprend $4\\mathrm{s}^2$, $4\\mathrm{p}^6$, $4\\mathrm{d}^{10}$ et $4\\mathrm{f}^{14}$, soit $2+6+10+14=32$ électrons.`,
  },
  {
    order: 63,
    difficulty: 'HARD',
    format: 'QROC',
    question:
      `Un échantillon théorique de chlore contient 75 % de $\\ce{^{35}Cl}$ de masse $35\\,\\mathrm{u}$ et 25 % de $\\ce{^{37}Cl}$ de masse $37\\,\\mathrm{u}$. Quelle est sa masse atomique moyenne en $\\mathrm{u}$ ? Saisissez uniquement la valeur numérique.`,
    answer: { type: 'number', value: 35.5, tolerance: 0.01 },
    explanation:
      `La moyenne pondérée vaut $0{,}75\\times35+0{,}25\\times37=35{,}5\\,\\mathrm{u}$. Cette question mobilise la notion de mélange isotopique jusqu'au calcul.`,
  },
];
