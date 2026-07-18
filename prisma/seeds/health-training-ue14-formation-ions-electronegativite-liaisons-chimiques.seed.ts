import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'formation-ions-electronegativite-liaisons-chimiques';

const sections: SeedSection[] = [
  {
    order: 1,
    title: `Formation des ions et électronégativité`,
    description:
      `Formation des cations et des anions, énergie d'ionisation, affinité électronique et comparaison de l'aptitude des atomes à attirer les électrons.`,
    kind: 'THEME',
  },
  {
    order: 2,
    title: `Liaisons chimiques`,
    description:
      `Liaisons ioniques, covalentes et premiers repères structuraux autour des liaisons chimiques.`,
    kind: 'THEME',
  },
  {
    order: 3,
    title: `Synthèse`,
    description:
      `Section de consolidation transversale sur les ions, l'électronégativité et les liaisons chimiques.`,
    kind: 'SYNTHESIS',
  },
];

const questions: SeedQuestion[] = [
  {
    order: 1,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant la formation des ions :`,
    choices: [
      `Un cation se forme lorsqu'un atome gagne un ou plusieurs électrons.`,
      `L'atome de sodium tend à former l'ion $\\mathrm{Na}^{+}$.`,
      `Un anion porte une charge électrique positive.`,
      `Le gain de deux électrons par un atome d'oxygène conduit à l'ion $\\mathrm{O}^{2-}$.`,
    ],
    correctChoiceIndexes: [1, 3],
    explanation:
      `La formation d'un ion dépend d'un transfert d'électrons. La perte d'électrons forme un cation chargé positivement, alors que le gain d'électrons forme un anion chargé négativement.`,
    choiceExplanations: [
      `Un cation se forme lorsqu'un atome perd un ou plusieurs électrons. Il porte alors une charge positive.`,
      `L'atome de sodium tend à perdre un électron afin d'acquérir la configuration électronique du gaz rare précédent. Il forme ainsi l'ion $\\mathrm{Na}^{+}$.`,
      `Un anion porte une charge électrique négative, car il résulte du gain d'un ou plusieurs électrons.`,
      `L'atome d'oxygène gagne deux électrons et forme l'ion $\\mathrm{O}^{2-}$, qui possède la même configuration électronique que le néon.`,
    ],
  },
  {
    order: 2,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant l'énergie d'ionisation :`,
    choices: [
      `Elle correspond à l'énergie libérée lorsqu'un atome gagne un électron.`,
      `Elle correspond à l'énergie minimale nécessaire pour arracher un électron à un atome isolé, à l'état gazeux et dans son état fondamental, afin de former un cation.`,
      `Elle est négative puisque l'ion formé porte une charge positive.`,
      `Plus l'énergie d'ionisation est faible, plus la formation du cation est facile.`,
    ],
    correctChoiceIndexes: [1, 3],
    explanation:
      `L'énergie d'ionisation mesure l'énergie qu'il faut fournir pour arracher un électron à un atome isolé et gazeux. Comme il faut apporter de l'énergie pour former le cation, cette grandeur est positive ; plus elle est faible, plus la formation du cation est facile.`,
    choiceExplanations: [
      `Le gain d'un électron conduit à la formation d'un anion. L'énergie d'ionisation concerne au contraire l'arrachement d'un électron.`,
      `L'énergie d'ionisation est l'énergie minimale à fournir pour arracher un électron à un atome isolé, gazeux et dans son état fondamental, ce qui entraîne la formation d'un cation.`,
      `Le signe positif du cation ne détermine pas le signe de l'énergie. L'arrachement d'un électron nécessite un apport d'énergie : l'énergie d'ionisation est donc positive.`,
      `Plus l'énergie d'ionisation est faible, moins il faut fournir d'énergie pour arracher l'électron et plus le cation se forme facilement.`,
    ],
  },
  {
    order: 3,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant la tendance des métaux à former des ions :`,
    choices: [
      `Les métaux des blocs $\\mathrm{s}$ et $\\mathrm{d}$ tendent généralement à perdre des électrons pour former des cations.`,
      `Plus un métal est peu électronégatif, plus il forme facilement un anion.`,
      `Les atomes de sodium, de magnésium et d'aluminium tendent respectivement à former les ions $\\mathrm{Na}^{+}$, $\\mathrm{Mg}^{2+}$ et $\\mathrm{Al}^{3+}$.`,
      `Les métaux de transition du bloc $\\mathrm{d}$ ne peuvent former qu'un seul type de cation.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Les métaux perdent en général un ou plusieurs électrons de valence et forment ainsi des cations. Cette tendance est nette pour les métaux des blocs $\\mathrm{s}$ et $\\mathrm{d}$, même si les métaux de transition peuvent présenter plusieurs états d'oxydation possibles.`,
    choiceExplanations: [
      `Les métaux perdent généralement un ou plusieurs électrons de valence. Ils forment alors des ions positifs appelés cations.`,
      `Un métal peu électronégatif retient faiblement ses électrons et tend donc à les perdre pour former un cation, et non un anion.`,
      `Le sodium perd un électron, le magnésium en perd deux et l'aluminium en perd trois, formant respectivement $\\mathrm{Na}^{+}$, $\\mathrm{Mg}^{2+}$ et $\\mathrm{Al}^{3+}$.`,
      `Certains métaux de transition du bloc $\\mathrm{d}$ peuvent former plusieurs cations. Le fer peut par exemple former $\\mathrm{Fe}^{2+}$ ou $\\mathrm{Fe}^{3+}$.`,
    ],
  },
  {
    order: 4,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant l'affinité électronique :`,
    choices: [
      `Elle traduit la tendance d'un atome à capter des électrons.`,
      `Parmi $\\mathrm{N}$, $\\mathrm{O}$ et $\\mathrm{F}$, l'azote possède l'affinité électronique la plus élevée, car il peut gagner trois électrons.`,
      `Dans une même colonne, l'affinité électronique augmente généralement lorsque la taille de l'atome augmente.`,
      `Une affinité électronique élevée favorise la formation d'un anion.`,
    ],
    correctChoiceIndexes: [0, 3],
    explanation:
      `L'affinité électronique traduit la tendance d'un atome à capter un électron. Plus elle est élevée, plus la formation d'un anion est favorisée ; elle est généralement plus marquée pour les petits atomes.`,
    choiceExplanations: [
      `L'affinité électronique traduit la tendance d'un atome à capter un ou plusieurs électrons.`,
      `Parmi ces trois éléments, l'ordre indiqué dans le cours est $\\mathrm{F} > \\mathrm{O} > \\mathrm{N}$. Le fluor ne doit gagner qu'un électron pour compléter sa couche de valence.`,
      `Selon le cours, l'affinité électronique est plus importante pour les petits atomes, dont le noyau attire plus fortement l'électron capté. Ainsi, $\\mathrm{F} > \\mathrm{I}$.`,
      `Plus un atome tend à capter des électrons, plus il forme facilement un ion négatif, appelé anion.`,
    ],
  },
  {
    order: 5,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant la configuration électronique des ions formés par certains éléments du bloc $\\mathrm{p}$ :`,
    choices: [
      `Un atome qui gagne des électrons tend à acquérir la configuration électronique du gaz rare précédent.`,
      `Les ions $\\mathrm{N}^{3-}$, $\\mathrm{O}^{2-}$ et $\\mathrm{F}^{-}$ possèdent la même configuration électronique que le néon.`,
      `L'ion $\\mathrm{Al}^{3+}$ possède la configuration électronique de l'argon, car l'aluminium appartient au bloc $\\mathrm{p}$.`,
      `Un anion tend vers la configuration du gaz rare suivant, tandis qu'un cation tend vers celle du gaz rare précédent.`,
    ],
    correctChoiceIndexes: [1, 3],
    explanation:
      `Le gain d'électrons rapproche un atome de la configuration électronique du gaz rare suivant, alors que la perte d'électrons le rapproche du gaz rare précédent. Plusieurs ions du bloc $\\mathrm{p}$ deviennent ainsi isoélectroniques d'un gaz rare.`,
    choiceExplanations: [
      `Lorsqu'un atome gagne des électrons, il tend à acquérir la configuration électronique du gaz rare suivant.`,
      `Les ions $\\mathrm{N}^{3-}$, $\\mathrm{O}^{2-}$ et $\\mathrm{F}^{-}$ possèdent chacun dix électrons et sont donc isoélectroniques du néon : $1\\mathrm{s}^{2}\\,2\\mathrm{s}^{2}\\,2\\mathrm{p}^{6}$.`,
      `L'aluminium perd trois électrons pour former $\\mathrm{Al}^{3+}$. Cet ion possède alors la configuration électronique du néon, gaz rare précédent, et non celle de l'argon.`,
      `Le gain d'électrons rapproche l'atome du gaz rare suivant, tandis que leur perte le rapproche du gaz rare précédent.`,
    ],
  },
  {
    order: 6,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant l'électronégativité d'un élément chimique :`,
    choices: [
      `Elle s'exprime en électronvolts ($\\mathrm{eV}$).`,
      `Elle est généralement notée par la lettre grecque $\\chi$, appelée « khi » et prononcée « ki » en français.`,
      `Elle peut prendre des valeurs négatives sur l'échelle de Pauling.`,
      `Elle traduit la capacité d'un atome engagé dans une liaison à attirer vers lui les électrons de cette liaison.`,
    ],
    correctChoiceIndexes: [1, 3],
    explanation:
      `L'électronégativité ne caractérise pas un atome isolé, mais sa tendance à attirer les électrons lorsqu'il est engagé dans une liaison. Elle est sans unité et augmente globalement de la gauche vers la droite et du bas vers le haut de la classification périodique.`,
    choiceExplanations: [
      `L'électronégativité est une grandeur sans unité ; elle ne s'exprime donc pas en électronvolts.`,
      `Elle est notée $\\chi$, lettre grecque appelée « khi », prononcée « ki » en français.`,
      `Sur l'échelle de Pauling, les valeurs d'électronégativité sont positives.`,
      `Plus un atome est électronégatif, plus il attire vers lui les électrons partagés dans une liaison chimique.`,
    ],
  },
  {
    order: 7,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant l'évolution générale de l'électronégativité dans la classification périodique :`,
    choices: [
      `Elle augmente globalement de la gauche vers la droite d'une période.`,
      `Elle diminue globalement du haut vers le bas d'une colonne.`,
      `Elle augmente lorsque l'on se déplace du coin supérieur droit vers le coin inférieur gauche de la classification.`,
      `Dans une même colonne, les éléments situés en bas sont généralement plus électronégatifs, car ils possèdent davantage de couches électroniques.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `L'électronégativité augmente globalement du coin inférieur gauche vers le coin supérieur droit de la classification périodique. Elle tend donc à augmenter de la gauche vers la droite au sein d'une période et à diminuer du haut vers le bas dans une colonne.`,
    choiceExplanations: [
      `L'électronégativité augmente globalement de la gauche vers la droite de la classification.`,
      `Dans une même colonne, elle diminue généralement du haut vers le bas.`,
      `L'électronégativité augmente au contraire du coin inférieur gauche vers le coin supérieur droit de la classification.`,
      `L'augmentation du nombre de couches électroniques éloigne les électrons de valence du noyau et renforce l'effet d'écran. L'attraction exercée sur les électrons est donc généralement plus faible en bas d'une colonne.`,
    ],
  },
  {
    order: 8,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `Parmi les quatre éléments essentiels au vivant suivants, lequel possède l'électronégativité la plus élevée ?`,
    choices: [`Le carbone.`, `L'hydrogène.`, `L'oxygène.`, `L'azote.`],
    correctChoiceIndexes: [2],
    explanation:
      `L'oxygène est le plus électronégatif des quatre éléments proposés, avec une électronégativité de 3,5, devant l'azote (3), le carbone (2,5) et l'hydrogène (2,1). Il attire donc fortement vers lui les électrons des liaisons $\\mathrm{O-H}$ et $\\mathrm{C-O}$, ce qui les rend polarisées : l'oxygène porte une charge partielle négative $\\delta^{-}$, tandis que l'autre atome porte une charge partielle positive $\\delta^{+}$. Cette polarisation joue un rôle majeur dans les propriétés des biomolécules, notamment leur solubilité dans l'eau et la formation de liaisons hydrogène.`,
  },
  {
    order: 9,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `Dans l'échelle usuelle, l'électronégativité varie approximativement :`,
    choices: [`De $-4{,}0$ à $4{,}0$.`, `De $0$ à $1$.`, `De $0{,}7$ à $4{,}0$.`, `De $1$ à $10$.`],
    correctChoiceIndexes: [2],
    explanation:
      `L'électronégativité varie approximativement de $0{,}7$ à $4{,}0$ dans l'échelle usuelle. La valeur minimale est associée au francium ($\\mathrm{Fr}$), tandis que la valeur maximale correspond au fluor ($\\mathrm{F}$), élément le plus électronégatif.`,
  },
  {
    order: 10,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant la facilité avec laquelle un élément peut perdre un électron pour former un cation :`,
    choices: [
      `Plus un atome est volumineux, plus son ionisation positive est généralement facile.`,
      `Dans une même colonne, la formation d'un cation devient généralement plus facile du haut vers le bas.`,
      `Dans une même période, la formation d'un cation devient généralement plus facile de la gauche vers la droite.`,
      `Le magnésium forme plus facilement un cation que le sodium, car il possède davantage d'électrons de valence.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `L'ionisation positive est d'autant plus facile que les électrons de valence sont éloignés du noyau et faiblement retenus. Elle est donc globalement favorisée pour les gros atomes, augmente du haut vers le bas dans une colonne et devient au contraire plus difficile de la gauche vers la droite dans une période.`,
    choiceExplanations: [
      `Lorsque l'atome est plus grand, ses électrons de valence sont plus éloignés du noyau et moins fortement attirés. Ils sont donc plus faciles à arracher.`,
      `Du haut vers le bas d'une colonne, la taille atomique augmente et l'énergie d'ionisation diminue généralement : la formation d'un cation est donc facilitée.`,
      `Dans une période, l'ionisation positive devient globalement plus difficile de la gauche vers la droite. Elle est plus facile pour les éléments situés à gauche de la classification.`,
      `Le sodium perd plus facilement son unique électron de valence que le magnésium : son énergie d'ionisation est plus faible.`,
    ],
  },
  {
    order: 11,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant la facilité avec laquelle un élément peut gagner un électron pour former un anion :`,
    choices: [
      `Elle augmente globalement de la gauche vers la droite d'une période.`,
      `Dans une même colonne, elle augmente généralement du haut vers le bas.`,
      `Elle est globalement maximale dans la partie supérieure droite de la classification périodique.`,
      `Parmi les halogènes, l'iode forme plus facilement un anion que le fluor, car son atome est plus volumineux.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `La formation d'un anion est favorisée lorsque l'atome attire facilement un électron. Cette tendance augmente globalement vers la droite et vers le haut de la classification périodique, notamment chez les halogènes.`,
    choiceExplanations: [
      `De la gauche vers la droite d'une période, les atomes tendent davantage à capter des électrons pour compléter leur couche de valence.`,
      `Dans une même colonne, la facilité à gagner un électron diminue généralement du haut vers le bas, car l'électron capté est plus éloigné du noyau.`,
      `La formation des anions est globalement favorisée vers le haut et la droite de la classification, notamment chez les halogènes.`,
      `Le fluor capte plus facilement un électron que l'iode. Sa petite taille permet une attraction plus forte entre le noyau et l'électron ajouté.`,
    ],
  },
  {
    order: 12,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Concernant la formation d'un cation à partir d'un atome :`,
    choices: [
      `La configuration électronique de $\\mathrm{X}^{n+}$ s'obtient en retirant $n$ électrons à l'atome $\\mathrm{X}$.`,
      `La formation d'un cation augmente le nombre de protons du noyau.`,
      `L'ion $\\mathrm{Mg}^{2+}$, issu du magnésium de numéro atomique $\\mathrm{Z} = 12$, possède 14 électrons.`,
      `Un cation possède moins d'électrons que l'atome neutre dont il dérive.`,
    ],
    correctChoiceIndexes: [0, 3],
    explanation:
      `Former un cation consiste à retirer un ou plusieurs électrons sans modifier le noyau. Le nombre de protons reste donc constant, alors que le nombre d'électrons diminue.`,
    choiceExplanations: [
      `La charge $n+$ traduit la perte de $n$ électrons.`,
      `L'ionisation ne modifie pas le noyau : le nombre de protons reste inchangé.`,
      `Le magnésium neutre possède 12 électrons. L'ion $\\mathrm{Mg}^{2+}$ en possède donc $12 - 2 = 10$.`,
      `Un cation résulte de la perte d'un ou plusieurs électrons.`,
    ],
  },
  {
    order: 13,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `On donne $\\mathrm{Z}(\\mathrm{Na}) = 11$, $\\mathrm{Z}(\\mathrm{Mg}) = 12$, $\\mathrm{Z}(\\mathrm{Al}) = 13$, $\\mathrm{Z}(\\mathrm{Ne}) = 10$ et $\\mathrm{Z}(\\mathrm{Ar}) = 18$. Concernant les cations formés par ces éléments :`,
    choices: [
      `L'ion $\\mathrm{Na}^{+}$ possède la même configuration électronique que le néon.`,
      `L'ion $\\mathrm{Mg}^{2+}$ possède la même configuration électronique que l'argon.`,
      `L'ion $\\mathrm{Al}^{3+}$ possède la configuration $1\\mathrm{s}^{2}\\,2\\mathrm{s}^{2}\\,2\\mathrm{p}^{6}$.`,
      `La formation de ces cations conduit les atomes vers la configuration du gaz rare suivant.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `La perte d'électrons conduit ici les atomes vers la configuration électronique du gaz rare précédent. Pour $\\mathrm{Na}^{+}$, $\\mathrm{Mg}^{2+}$ et $\\mathrm{Al}^{3+}$, on aboutit à 10 électrons, comme le néon.`,
    choiceExplanations: [
      `L'ion $\\mathrm{Na}^{+}$ possède $11 - 1 = 10$ électrons, comme le néon.`,
      `L'ion $\\mathrm{Mg}^{2+}$ possède $12 - 2 = 10$ électrons : il est isoélectronique du néon, et non de l'argon.`,
      `L'ion $\\mathrm{Al}^{3+}$ possède $13 - 3 = 10$ électrons, soit la configuration $1\\mathrm{s}^{2}\\,2\\mathrm{s}^{2}\\,2\\mathrm{p}^{6}$.`,
      `La perte d'électrons conduit ici vers la configuration du gaz rare précédent.`,
    ],
  },
  {
    order: 14,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `On donne $\\mathrm{Z}(\\mathrm{Fe}) = 26$ et $\\mathrm{Z}(\\mathrm{Cu}) = 29$. Concernant les configurations électroniques fondamentales de leurs ions :`,
    choices: [
      `$\\mathrm{Fe}^{2+}$ possède la configuration $\\mathrm{K}\\,\\mathrm{L}\\,\\mathrm{M}\\,3\\mathrm{d}^{6}$.`,
      `$\\mathrm{Fe}^{3+}$ possède la configuration $\\mathrm{K}\\,\\mathrm{L}\\,\\mathrm{M}\\,3\\mathrm{d}^{5}$.`,
      `$\\mathrm{Cu}^{+}$ possède la configuration $\\mathrm{K}\\,\\mathrm{L}\\,\\mathrm{M}\\,3\\mathrm{d}^{9}$.`,
      `$\\mathrm{Cu}^{2+}$ possède la configuration $\\mathrm{K}\\,\\mathrm{L}\\,\\mathrm{M}\\,3\\mathrm{d}^{10}$.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Pour les cations des métaux de transition, les électrons $4\\mathrm{s}$ sont retirés avant les électrons $3\\mathrm{d}$. C'est ce qui permet de retrouver les configurations de $\\mathrm{Fe}^{2+}$, $\\mathrm{Fe}^{3+}$, $\\mathrm{Cu}^{+}$ et $\\mathrm{Cu}^{2+}$.`,
    choiceExplanations: [
      `Le fer neutre est $\\mathrm{K}\\,\\mathrm{L}\\,\\mathrm{M}\\,3\\mathrm{d}^{6}\\,4\\mathrm{s}^{2}$. La perte des deux électrons $4\\mathrm{s}$ donne $\\mathrm{Fe}^{2+} : \\mathrm{K}\\,\\mathrm{L}\\,\\mathrm{M}\\,3\\mathrm{d}^{6}$.`,
      `$\\mathrm{Fe}^{3+}$ perd les deux électrons $4\\mathrm{s}$, puis un électron $3\\mathrm{d}$, d'où $\\mathrm{K}\\,\\mathrm{L}\\,\\mathrm{M}\\,3\\mathrm{d}^{5}$.`,
      `Le cuivre neutre est $\\mathrm{K}\\,\\mathrm{L}\\,\\mathrm{M}\\,3\\mathrm{d}^{10}\\,4\\mathrm{s}^{1}$. La perte de l'électron $4\\mathrm{s}$ donne $\\mathrm{Cu}^{+} : \\mathrm{K}\\,\\mathrm{L}\\,\\mathrm{M}\\,3\\mathrm{d}^{10}$.`,
      `$\\mathrm{Cu}^{2+}$ possède la configuration $\\mathrm{K}\\,\\mathrm{L}\\,\\mathrm{M}\\,3\\mathrm{d}^{9}$. Dans les cations des métaux de transition, les électrons $4\\mathrm{s}$ sont retirés avant les électrons $3\\mathrm{d}$.`,
    ],
  },
  {
    order: 15,
    difficulty: 'MEDIUM',
    answerFormat: 'SINGLE',
    question:
      `Dans l'échelle de Pauling, retrouvez l'ordre dans lequel les éléments chimiques suivants sont rangés par électronégativité décroissante :`,
    choices: [
      `Na, H, C et O.`,
      `C, O, Na et H.`,
      `O, C, Na et H.`,
      `O, C, H et Na.`,
    ],
    correctChoiceIndexes: [3],
    explanation:
      `Les électronégativités sont approximativement : $\\chi(\\mathrm{O}) = 3{,}5 > \\chi(\\mathrm{C}) = 2{,}5 > \\chi(\\mathrm{H}) = 2{,}1 > \\chi(\\mathrm{Na}) \\approx 0{,}9$. L'ordre décroissant est donc : $\\mathrm{O} > \\mathrm{C} > \\mathrm{H} > \\mathrm{Na}$.`,
    choiceExplanations: [
      `L'ordre proposé est croissant, et non décroissant.`,
      `L'oxygène est plus électronégatif que le carbone, et l'hydrogène plus électronégatif que le sodium.`,
      `Le sodium et l'hydrogène sont inversés.`,
      `L'oxygène est le plus électronégatif, suivi du carbone, de l'hydrogène puis du sodium.`,
    ],
  },
  {
    order: 16,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos de l'électronégativité :`,
    choices: [
      `Le silicium est moins électronégatif que le phosphore.`,
      `Le brome est plus électronégatif que le chlore.`,
      `Le fluor est l'élément le plus électronégatif de la classification périodique.`,
      `Le césium est plus électronégatif que le sodium.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `L'électronégativité augmente globalement de la gauche vers la droite au sein d'une période et diminue du haut vers le bas dans une colonne. Le fluor est l'élément le plus électronégatif de la classification périodique.`,
    choiceExplanations: [
      `Dans une même période, l'électronégativité augmente globalement de la gauche vers la droite. Le phosphore est donc plus électronégatif que le silicium.`,
      `Dans la colonne des halogènes, l'électronégativité diminue du haut vers le bas. Le chlore est donc plus électronégatif que le brome.`,
      `Le fluor possède l'électronégativité la plus élevée sur l'échelle de Pauling, avec une valeur de 4,0.`,
      `Dans la colonne des métaux alcalins, l'électronégativité diminue du haut vers le bas. Le césium est donc moins électronégatif que le sodium.`,
    ],
  },
  {
    order: 17,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question:
      `Dans l'échelle de Pauling, retrouvez l'ordre dans lequel les éléments de la famille des métaux alcalins sont rangés par électronégativité croissante :`,
    choices: [
      `Li, Na, K et Rb.`,
      `Rb, K, Na et Li.`,
      `K, Rb, Li et Na.`,
      `Na, Li, Rb et K.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `Dans une même colonne, l'électronégativité diminue globalement du haut vers le bas. Le rubidium est donc le moins électronégatif des quatre éléments proposés, tandis que le lithium est le plus électronégatif : $\\mathrm{Rb} < \\mathrm{K} < \\mathrm{Na} < \\mathrm{Li}$.`,
    choiceExplanations: [
      `Cet ordre correspond à une électronégativité décroissante.`,
      `L'ordre suit la colonne des métaux alcalins du bas vers le haut.`,
      `Le potassium est plus électronégatif que le rubidium, et le lithium plus électronégatif que le sodium.`,
      `L'ordre ne respecte pas l'évolution régulière de l'électronégativité dans la colonne.`,
    ],
  },
  {
    order: 18,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question:
      `Parmi les quatre éléments essentiels au vivant suivants, lequel possède l'électronégativité la plus faible ?`,
    choices: [`L'oxygène.`, `Le carbone.`, `L'hydrogène.`, `L'azote.`],
    correctChoiceIndexes: [2],
    explanation:
      `L'hydrogène est le moins électronégatif des quatre éléments proposés : $\\chi(\\mathrm{H}) = 2{,}1 < \\chi(\\mathrm{C}) = 2{,}5 < \\chi(\\mathrm{N}) = 3{,}0 < \\chi(\\mathrm{O}) = 3{,}5$. Les électronégativités proches du carbone et de l'hydrogène expliquent que la liaison $\\mathrm{C-H}$ soit généralement considérée comme peu ou non polarisée.`,
  },
  {
    order: 19,
    difficulty: 'MEDIUM',
    answerFormat: 'SINGLE',
    question:
      `Le fer possède le numéro atomique $\\mathrm{Z} = 26$. Quelle est la configuration électronique, dans l'état fondamental, de l'ion ferreux ?`,
    choices: [
      `$\\mathrm{K}\\,\\mathrm{L}\\,3\\mathrm{s}^{2}\\,3\\mathrm{p}^{6}\\,3\\mathrm{d}^{6}\\,4\\mathrm{s}^{2}$`,
      `$\\mathrm{K}\\,\\mathrm{L}\\,3\\mathrm{s}^{2}\\,3\\mathrm{p}^{6}\\,3\\mathrm{d}^{4}\\,4\\mathrm{s}^{2}$`,
      `$\\mathrm{K}\\,\\mathrm{L}\\,3\\mathrm{s}^{2}\\,3\\mathrm{p}^{6}\\,3\\mathrm{d}^{6}$`,
      `$\\mathrm{K}\\,\\mathrm{L}\\,3\\mathrm{s}^{2}\\,3\\mathrm{p}^{6}\\,3\\mathrm{d}^{5}$`,
    ],
    correctChoiceIndexes: [2],
    explanation:
      `L'atome de fer possède la configuration $\\mathrm{K}\\,\\mathrm{L}\\,3\\mathrm{s}^{2}\\,3\\mathrm{p}^{6}\\,3\\mathrm{d}^{6}\\,4\\mathrm{s}^{2}$. L'ion ferreux résulte de la perte de deux électrons. Les électrons de la sous-couche $4\\mathrm{s}$ sont retirés avant ceux de la sous-couche $3\\mathrm{d}$. Sa configuration devient donc $\\mathrm{K}\\,\\mathrm{L}\\,3\\mathrm{s}^{2}\\,3\\mathrm{p}^{6}\\,3\\mathrm{d}^{6}$.`,
    choiceExplanations: [
      `Il s'agit de la configuration de l'atome de fer neutre.`,
      `Les électrons $4\\mathrm{s}$ sont retirés avant les électrons $3\\mathrm{d}$.`,
      `La perte des deux électrons $4\\mathrm{s}$ conduit à cette configuration.`,
      `Cette configuration correspond à l'ion ferrique, qui a perdu trois électrons.`,
    ],
  },
  {
    order: 20,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant le lien entre l'électronégativité d'un atome et l'ion qu'il tend à former :`,
    choices: [
      `Lorsque $\\chi$ est faible, entre $0{,}7$ et $2$, l'atome forme facilement un anion très électronégatif.`,
      `Lorsque $\\chi$ est élevée, supérieure à $2{,}5$, l'atome forme facilement un cation peu électronégatif.`,
      `Lorsque $\\chi$ est faible, entre $0{,}7$ et $2$, l'atome forme facilement un cation peu électronégatif.`,
      `Lorsque $\\chi$ est élevée, supérieure à $2{,}5$, l'atome forme facilement un anion très électronégatif.`,
    ],
    correctChoiceIndexes: [2, 3],
    explanation:
      `Une faible électronégativité traduit une faible attraction des électrons : l'atome les perd plus facilement et forme un cation. À l'inverse, une électronégativité élevée traduit une forte attraction des électrons : l'atome en gagne plus facilement et forme un anion.`,
    choiceExplanations: [
      `Un atome peu électronégatif tend à perdre des électrons et à former un cation.`,
      `Un atome très électronégatif tend à gagner des électrons et à former un anion.`,
      `Une faible électronégativité traduit une faible attraction des électrons : l'atome les perd plus facilement et forme un cation.`,
      `Une électronégativité élevée traduit une forte attraction des électrons : l'atome en gagne plus facilement et forme un anion.`,
    ],
  },
  {
    order: 21,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `Concernant la liaison de covalence :`,
    choices: [
      `Elle résulte de la mise en commun de deux électrons célibataires, qui forment un doublet liant commun aux deux atomes.`,
      `Le doublet liant reste exclusivement associé à l'un des deux atomes.`,
      `Une liaison covalente simple correspond à une liaison $\\pi$.`,
      `Tous les doublets électroniques présents dans une molécule participent nécessairement à une liaison.`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `Il ne faut pas confondre doublet liant, partagé entre deux atomes, et doublet non liant, localisé sur un seul atome.`,
    choiceExplanations: [
      `Chaque atome apporte généralement un électron célibataire ; leur appariement forme un doublet électronique commun.`,
      `Le doublet liant est partagé entre les deux atomes, même s'il peut être davantage attiré par l'atome le plus électronégatif.`,
      `Une liaison covalente simple est une liaison $\\sigma$.`,
      `Certains doublets ne participent à aucune liaison : ce sont les doublets non liants.`,
    ],
  },
  {
    order: 22,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `Choisir la(les) proposition(s) exacte(s) :`,
    choices: [
      `Dans le chlorure d'hydrogène $\\mathrm{H-Cl}$, le chlore ne possède aucun doublet non liant.`,
      `Dans l'ammoniac $\\mathrm{NH_{3}}$, l'azote forme trois liaisons covalentes et conserve un doublet non liant.`,
      `Dans la molécule $\\mathrm{O_{2}}$, la double liaison est constituée de deux liaisons $\\sigma$.`,
      `Dans l'acétylène $\\mathrm{H-C\\equiv C-H}$, la liaison triple entre les carbones est constituée de trois liaisons $\\pi$.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `Dans l'ammoniac, l'azote forme trois liaisons covalentes $\\mathrm{N-H}$ et conserve un doublet non liant. Une double liaison comprend une liaison $\\sigma$ et une liaison $\\pi$, tandis qu'une triple liaison comprend une liaison $\\sigma$ et deux liaisons $\\pi$.`,
    choiceExplanations: [
      `Le chlore forme une liaison avec l'hydrogène et possède encore trois doublets non liants.`,
      `L'azote possède trois doublets liants $\\mathrm{N-H}$ et un doublet non liant.`,
      `Une double liaison comprend une liaison $\\sigma$ et une liaison $\\pi$.`,
      `Une triple liaison comprend une liaison $\\sigma$ et deux liaisons $\\pi$.`,
    ],
  },
  {
    order: 23,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les représentations de Lewis suivantes, lesquelles sont correctes ?`,
    choices: [
      {
        type: 'lewis-atom',
        element: 'C',
        electrons: {
          top: 'single',
          right: 'single',
          bottom: 'single',
          left: 'single',
        },
      },
      {
        type: 'lewis-atom',
        element: 'O',
        electrons: {
          top: 'pair',
          right: 'single',
          bottom: 'single',
          left: 'pair',
        },
      },
      {
        type: 'lewis-atom',
        element: 'N',
        electrons: {
          top: 'pair',
          right: 'single',
          bottom: 'none',
          left: 'single',
        },
      },
      {
        type: 'lewis-atom',
        element: 'Cl',
        electrons: {
          top: 'pair',
          right: 'pair',
          bottom: 'pair',
          left: 'pair',
        },
      },
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le nombre d'électrons célibataires permet notamment d'anticiper le nombre habituel de liaisons covalentes formées par l'atome.`,
    choiceExplanations: [
      `Le carbone possède quatre électrons de valence, tous représentés comme célibataires.`,
      `L'oxygène possède six électrons de valence : deux doublets et deux électrons célibataires.`,
      `Quatre électrons seulement sont représentés. L'azote en possède cinq : un doublet et trois électrons célibataires.`,
      `Quatre doublets, soit huit électrons, sont représentés. Le chlore neutre possède sept électrons de valence : trois doublets et un électron célibataire.`,
    ],
  },
  {
    order: 24,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Le phosphore $\\mathrm{P}$, de numéro atomique $\\mathrm{Z} = 15$, possède 5 électrons sur sa couche de valence $\\mathrm{M}$. La règle $8 - n$, où $n$ désigne le nombre d'électrons de valence, permet de prévoir son nombre usuel de liaisons covalentes. Chaque liaison $\\mathrm{P-Cl}$ est ici une liaison simple $\\sigma$. Quelles propositions sont exactes ?`,
    choices: [
      `Dans $\\mathrm{PCl_{3}}$, le phosphore forme trois liaisons $\\sigma$ et porte un doublet non liant.`,
      `Dans $\\mathrm{PCl_{3}}$, les cinq électrons de valence du phosphore participent à des liaisons $\\mathrm{P-Cl}$.`,
      `Dans $\\mathrm{PCl_{5}}$, le phosphore forme cinq liaisons $\\sigma$ et ne porte aucun doublet non liant.`,
      `Dans $\\mathrm{PCl_{5}}$, le phosphore respecte strictement la règle de l'octet.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `La règle $8 - n$ permet de prévoir le nombre habituel de liaisons covalentes d'un atome à partir de ses électrons de valence. Elle conduit ici à $8 - 5 = 3$ liaisons pour le phosphore, ce qui correspond à $\\mathrm{PCl_{3}}$, où le phosphore possède également un doublet non liant. Dans $\\mathrm{PCl_{5}}$, il forme toutefois cinq liaisons $\\sigma$ et se trouve entouré de dix électrons : il est dit hypervalent, c'est-à-dire entouré de plus de huit électrons.`,
    choiceExplanations: [
      `La règle $8 - 5 = 3$ prévoit trois liaisons pour le phosphore. Dans $\\mathrm{PCl_{3}}$, les deux électrons restants forment un doublet non liant.`,
      `Trois électrons participent aux liaisons $\\mathrm{P-Cl}$ ; deux constituent le doublet non liant.`,
      `Dans $\\mathrm{PCl_{5}}$, le phosphore est entouré de cinq liaisons simples, donc de cinq liaisons $\\sigma$, sans doublet non liant.`,
      `Dans la représentation de Lewis usuelle de $\\mathrm{PCl_{5}}$, le phosphore est entouré de dix électrons : il constitue une exception à la règle de l'octet.`,
    ],
  },
  {
    order: 25,
    difficulty: 'MEDIUM',
    answerFormat: 'SINGLE',
    question:
      `Concernant l'application des règles du duet et de l'octet dans les représentations de Lewis :`,
    choices: [
      `Dans le méthane $\\mathrm{CH_{4}}$, chaque hydrogène est entouré de deux électrons et le carbone de huit électrons.`,
      `Dans l'ammoniac $\\mathrm{NH_{3}}$, l'azote n'est entouré que de six électrons, puisqu'il forme trois liaisons simples.`,
      `Une liaison covalente double apporte deux électrons au décompte de l'octet de chacun des deux atomes liés.`,
      `Toute structure de Lewis dans laquelle un atome est entouré de plus de huit électrons est nécessairement impossible.`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `Dans une structure de Lewis, tous les électrons d'une liaison sont comptabilisés autour de chacun des deux atomes liés. Les atomes d'hydrogène tendent vers un duet, tandis que la plupart des éléments courants tendent vers un octet, constitué des doublets liants et non liants. Cette règle permet de vérifier de nombreuses structures, mais elle n'est pas absolue : il existe notamment des espèces déficientes en électrons et des atomes hypervalents.`,
    choiceExplanations: [
      `Chaque liaison $\\mathrm{C-H}$ contient un doublet liant. Chaque hydrogène partage donc deux électrons et respecte la règle du duet, tandis que les quatre liaisons entourent le carbone de huit électrons.`,
      `Les trois liaisons représentent six électrons, mais l'azote possède également un doublet non liant : il est donc entouré de huit électrons.`,
      `Une liaison double comporte deux doublets liants, soit quatre électrons comptabilisés autour de chacun des deux atomes.`,
      `La règle de l'octet comporte des exceptions. Certains atomes, comme le phosphore dans $\\mathrm{PCl_{5}}$, peuvent être hypervalents, donc entourés de plus de huit électrons.`,
    ],
  },
  {
    order: 26,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Concernant la définition et le vocabulaire associés à une liaison de coordination, quelles propositions sont exactes ?`,
    choices: [
      `Une liaison de coordination est également appelée liaison de coordinence ou liaison dative.`,
      `Une fois formée, une liaison de coordination reste physiquement distincte d'une liaison covalente classique et peut toujours être identifiée dans la molécule.`,
      `Le doublet liant provient initialement en totalité d'un doublet non liant porté par l'espèce donneuse.`,
      `Lors de la formation de l'ion ammonium $\\mathrm{NH_{4}^{+}}$, l'ion $\\mathrm{H^{+}}$ joue le rôle de donneur et l'ammoniac celui d'accepteur.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Une liaison de coordination se forme entre un donneur, porteur d'un doublet non liant, et un accepteur, possédant une orbitale vacante. Sa particularité concerne donc l'origine du doublet liant. Après sa formation, elle est assimilable à une liaison covalente ordinaire : dans $\\mathrm{NH_{4}^{+}}$, les quatre liaisons $\\mathrm{N-H}$ sont équivalentes.`,
    choiceExplanations: [
      `Les expressions liaison de coordination, liaison de coordinence et liaison dative désignent la même notion.`,
      `Une fois formée, une liaison de coordination se comporte comme une liaison covalente classique. Son origine peut être indiquée lors de sa formation, mais elle n'est plus intrinsèquement distinguable des autres liaisons équivalentes de la molécule.`,
      `Les deux électrons du doublet liant sont initialement apportés par la même espèce, appelée donneur de doublet.`,
      `Dans la réaction $\\mathrm{NH_{3} + H^{+} \\rightarrow NH_{4}^{+}}$, l'ammoniac fournit le doublet non liant : il est le donneur, tandis que $\\mathrm{H^{+}}$, qui possède une orbitale vide, est l'accepteur.`,
    ],
  },
  {
    order: 27,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `L'ion ammonium se forme selon la réaction $\\mathrm{NH_{3} + H^{+} \\rightarrow NH_{4}^{+}}$. Concernant la formation et la structure de l'ion ammonium, quelles propositions sont exactes ?`,
    choices: [
      `L'ion $\\mathrm{H^{+}}$ fournit un doublet non liant à l'azote de l'ammoniac pour former la quatrième liaison $\\mathrm{N-H}$.`,
      `Après la formation de $\\mathrm{NH_{4}^{+}}$, la charge positive reste localisée sur l'atome d'hydrogène initialement apporté par $\\mathrm{H^{+}}$.`,
      `Une fois l'ion $\\mathrm{NH_{4}^{+}}$ formé, ses quatre liaisons $\\mathrm{N-H}$ sont équivalentes et la liaison issue de la coordination ne peut plus être distinguée des autres.`,
      `La charge $+$ correspond à la charge globale de l'ion ammonium et ne peut pas être attribuée à un atome d'hydrogène particulier.`,
    ],
    correctChoiceIndexes: [2, 3],
    explanation:
      `Lors de la réaction, l'azote de l'ammoniac fournit son doublet non liant à $\\mathrm{H^{+}}$. La particularité de la liaison de coordination concerne uniquement son mode de formation. Dans l'ion obtenu, les quatre liaisons $\\mathrm{N-H}$ sont indissociables et la charge positive caractérise l'ensemble de $\\mathrm{NH_{4}^{+}}$.`,
    choiceExplanations: [
      `L'ion $\\mathrm{H^{+}}$ ne possède aucun électron. Le doublet non liant est fourni par l'azote de $\\mathrm{NH_{3}}$, qui joue le rôle de donneur.`,
      `Une fois l'ion formé, l'hydrogène provenant initialement de $\\mathrm{H^{+}}$ ne se distingue plus des trois autres hydrogènes.`,
      `Après la formation de l'ion ammonium, les quatre liaisons $\\mathrm{N-H}$ sont équivalentes. La liaison formée initialement par coordination se comporte comme les autres liaisons covalentes.`,
      `Le symbole $+$, placé à l'extérieur de la formule $\\mathrm{NH_{4}^{+}}$, désigne la charge globale de l'ion. Elle ne reste pas portée par un hydrogène identifiable.`,
    ],
  },
  {
    order: 28,
    difficulty: 'MEDIUM',
    answerFormat: 'SINGLE',
    question:
      `Concernant la définition et le vocabulaire associés aux complexes de coordination :`,
    choices: [
      `Un complexe de coordination comprend une espèce centrale, souvent un ion métallique, entourée d'espèces donneuses de doublets appelées ligands.`,
      `Le terme ligand désigne la liaison de coordination qui relie une molécule à l'ion métallique central.`,
      `Le mot complexe indique nécessairement que l'espèce possède une structure compliquée comportant plusieurs ions métalliques.`,
      `Dans un complexe formé d'un ion métallique entouré de molécules d'ammoniac, le métal est le donneur de doublets et l'ammoniac l'accepteur.`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `Un complexe de coordination associe un centre accepteur, souvent métallique, à un ou plusieurs ligands donneurs de doublets. Il ne faut donc pas confondre le ligand avec la liaison qui l'unit au centre, ni interpréter le mot complexe dans son sens courant de « structure compliquée ». Le cours illustre cette organisation par un ion métallique central entouré de quatre molécules d'ammoniac.`,
    choiceExplanations: [
      `L'espèce centrale, fréquemment un ion métallique, accepte les doublets non liants fournis par les ligands qui l'entourent.`,
      `Le ligand est une espèce chimique liée au centre métallique, et non la liaison elle-même. La liaison formée est une liaison de coordination.`,
      `Le mot complexe est ici un terme de vocabulaire chimique : il ne signifie pas simplement « compliqué ». Un complexe peut ne comporter qu'un seul ion métallique central.`,
      `Les rôles sont inversés : l'ammoniac donne le doublet non liant de son azote, tandis que l'ion métallique possède des orbitales vacantes et joue le rôle d'accepteur.`,
    ],
  },
  {
    order: 29,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Lors de la formation de l'ion ferreux $\\mathrm{Fe^{2+}}$, l'atome de fer perd deux électrons. Dans le modèle simplifié présenté dans le cours, sa configuration électronique de valence est représentée ainsi :`,
    questionDiagram: {
      type: 'quantum-boxes',
      orbitals: [
        { label: '4\\mathrm{s}', boxes: ['empty'] },
        { label: '3\\mathrm{d}', boxes: ['pair', 'pair', 'pair', 'empty', 'empty'] },
        { label: '4\\mathrm{p}', boxes: ['empty', 'empty', 'empty'] },
      ],
    },
    choices: [
      `La formation de $\\mathrm{Fe^{2+}}$ à partir de l'atome de fer correspond notamment à la perte des deux électrons de la sous-couche $4\\mathrm{s}$.`,
      `Le diagramme ne comporte que deux cases quantiques vacantes ; l'ion $\\mathrm{Fe^{2+}}$ ne peut donc former que deux liaisons de coordination.`,
      `Quatre azotes de l'hème et un azote d'une histidine occupent cinq positions de coordination autour du fer, laissant une sixième position disponible pour le dioxygène.`,
      `La fixation du dioxygène nécessite la rupture préalable de l'une des quatre liaisons entre le fer et les azotes de l'hème.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Dans le modèle pédagogique du cours, les orbitales vacantes de $\\mathrm{Fe^{2+}}$ peuvent recevoir les doublets non liants fournis par les ligands. Cette représentation est mise en relation avec les six liaisons de coordination du fer dans l'hémoglobine : cinq assurent son intégration dans l'hème et son rattachement à la globine, tandis que la sixième permet la fixation réversible du dioxygène.`,
    choiceExplanations: [
      `L'atome de fer possède deux électrons dans la sous-couche $4\\mathrm{s}$. Leur perte conduit à l'ion $\\mathrm{Fe^{2+}}$, de configuration électronique $[\\mathrm{Ar}]\\,3\\mathrm{d}^{6}$.`,
      `L'item ne considère que les deux cases vacantes de la sous-couche $3\\mathrm{d}$. Dans le modèle simplifié fourni, les cases vacantes de $4\\mathrm{s}$ et de $4\\mathrm{p}$ sont également représentées et mises en relation avec la formation des six liaisons de coordination.`,
      `Le fer est lié de manière stable à quatre azotes de l'hème et à l'azote d'une histidine de la globine. La sixième position de coordination peut accueillir transitoirement une molécule de $\\mathrm{O_{2}}$.`,
      `Les quatre liaisons entre le fer et les azotes de l'hème restent en place. Le dioxygène se fixe sur la sixième position de coordination disponible.`,
    ],
  },
  {
    order: 30,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `On considère une liaison covalente entre deux atomes $\\mathrm{A}$ et $\\mathrm{B}$, avec $\\chi(\\mathrm{A}) < \\chi(\\mathrm{B})$. Le moment dipolaire de cette liaison est noté $\\vec{\\mu}_{\\mathrm{A-B}}$. Quelles propositions sont exactes ?`,
    choices: [
      `L'atome $\\mathrm{A}$, moins électronégatif, porte une charge partielle $\\delta^{+}$, tandis que l'atome $\\mathrm{B}$ porte une charge partielle $\\delta^{-}$.`,
      `Selon la convention utilisée en chimie dans ce cours, le vecteur $\\vec{\\mu}_{\\mathrm{A-B}}$ est orienté de l'atome $\\mathrm{B}$ vers l'atome $\\mathrm{A}$.`,
      `La norme du moment dipolaire de liaison peut s'écrire $\\mu = \\delta d$, où $d$ est la longueur de la liaison.`,
      `La présence de charges partielles $\\delta^{+}$ et $\\delta^{-}$ implique que l'ensemble formé par $\\mathrm{A}$ et $\\mathrm{B}$ possède nécessairement une charge électrique globale non nulle.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Une différence d'électronégativité déplace partiellement le doublet liant vers l'atome le plus électronégatif. La liaison devient alors polarisée et se comporte comme un dipôle. Le moment dipolaire est une grandeur vectorielle portée par l'axe de la liaison, orientée de $\\delta^{+}$ vers $\\delta^{-}$ dans la convention chimique du cours. Sa norme s'exprime en $\\mathrm{C \\cdot m}$ ou, plus couramment en chimie, en debyes.`,
    choiceExplanations: [
      `Le doublet liant est davantage attiré par l'atome le plus électronégatif $\\mathrm{B}$, qui acquiert une charge partielle $\\delta^{-}$. L'atome $\\mathrm{A}$ porte alors une charge partielle $\\delta^{+}$.`,
      `Dans la convention chimique retenue à Reims, le vecteur moment dipolaire est orienté du pôle positif vers le pôle négatif, donc de $\\mathrm{A}$ vers $\\mathrm{B}$.`,
      `La norme du moment dipolaire dépend de la valeur absolue $\\delta$ des charges partielles et de leur distance $d$ : $\\mu = \\delta d$.`,
      `Les deux charges partielles sont opposées et de même valeur absolue. L'édifice peut donc rester électriquement neutre tout en possédant une liaison polarisée.`,
    ],
  },
  {
    order: 31,
    difficulty: 'MEDIUM',
    answerFormat: 'SINGLE',
    question:
      `Le moment dipolaire de la molécule de bromure d'hydrogène a pour valeur $\\mu_{\\mathrm{H-Br}} = 2{,}8 \\times 10^{-30}\\ \\mathrm{C \\cdot m}$. Sachant que la liaison $\\mathrm{H-Br}$ a pour longueur $140\\ \\mathrm{pm}$, la valeur absolue commune $\\delta$ des charges partielles portées par les atomes $\\mathrm{H}$ et $\\mathrm{Br}$ est égale, avec deux chiffres significatifs, à :`,
    choices: [
      `$2{,}0 \\times 10^{-23}\\ \\mathrm{C}$.`,
      `$2{,}0 \\times 10^{-20}\\ \\mathrm{C}$.`,
      `$2{,}0 \\times 10^{-18}\\ \\mathrm{C}$.`,
      `$2{,}0 \\times 10^{-19}\\ \\mathrm{C}$.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `La norme du moment dipolaire vérifie $\\mu = \\delta d$, d'où $\\delta = \\dfrac{\\mu}{d}$. La longueur doit d'abord être convertie en mètres : $140\\ \\mathrm{pm} = 140 \\times 10^{-12}\\ \\mathrm{m} = 1{,}40 \\times 10^{-10}\\ \\mathrm{m}$. On obtient alors $\\delta = \\dfrac{2{,}8 \\times 10^{-30}}{1{,}40 \\times 10^{-10}} = 2{,}0 \\times 10^{-20}\\ \\mathrm{C}$.`,
    choiceExplanations: [
      `Cette valeur correspond à une erreur de manipulation des puissances de dix lors du calcul de $\\delta = \\mu / d$.`,
      `C'est la bonne réponse : après conversion de $140\\ \\mathrm{pm}$ en $1{,}40 \\times 10^{-10}\\ \\mathrm{m}$, on trouve $\\delta = 2{,}0 \\times 10^{-20}\\ \\mathrm{C}$.`,
      `Cette valeur est trop grande ; elle traduit notamment une erreur de conversion du picomètre ou de calcul d'ordre de grandeur.`,
      `Cette valeur est proche mais incorrecte ; elle résulte d'une erreur sur les puissances de dix lors du quotient.`,
    ],
  },
  {
    order: 32,
    difficulty: 'MEDIUM',
    answerFormat: 'SINGLE',
    question:
      `On rappelle la relation approchée : $1\\ \\mathrm{C \\cdot m} \\approx 3{,}0 \\times 10^{29}\\ \\mathrm{D}$. Un moment dipolaire de liaison vaut $\\mu = 7{,}2 \\times 10^{-30}\\ \\mathrm{C \\cdot m}$. Sa valeur en debyes, avec deux chiffres significatifs, est égale à :`,
    choices: [
      `$0{,}22\\ \\mathrm{D}$.`,
      `$2{,}2\\ \\mathrm{D}$.`,
      `$2{,}4\\ \\mathrm{D}$.`,
      `$22\\ \\mathrm{D}$.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `On convertit directement en debyes : $\\mu_{\\mathrm{D}} = 3{,}0 \\times 10^{29} \\times 7{,}2 \\times 10^{-30} = (3{,}0 \\times 7{,}2) \\times 10^{-1} = 21{,}6 \\times 10^{-1} = 2{,}16\\ \\mathrm{D}$. Avec deux chiffres significatifs, on obtient $\\mu_{\\mathrm{D}} \\approx 2{,}2\\ \\mathrm{D}$.`,
    choiceExplanations: [
      `Cette valeur correspond à une erreur sur la puissance de dix lors de la conversion en debyes.`,
      `C'est la bonne réponse : $\\mu = 2{,}16\\ \\mathrm{D}$, soit $2{,}2\\ \\mathrm{D}$ avec deux chiffres significatifs.`,
      `Cette valeur résulte d'un calcul ou d'un arrondi incorrect.`,
      `Cette valeur correspond à une erreur sur la puissance de dix lors de la conversion.`,
    ],
  },
  {
    order: 33,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Concernant la mésomérie, quelles propositions sont exactes ?`,
    choices: [
      `La mésomérie traduit une délocalisation de plusieurs électrons au sein d'un même édifice, sans déplacement des noyaux atomiques.`,
      `Les différentes formes mésomères sont des molécules distinctes qui se transforment rapidement les unes dans les autres.`,
      `Dans une liaison peptidique, la mésomérie confère à la liaison $\\mathrm{C-N}$ un caractère partiel de double liaison, ce qui limite sa rotation et favorise la planéité du groupement.`,
      `Lors du passage d'une forme mésomère à une autre, seuls les électrons célibataires peuvent être déplacés ; les doublets liants et non liants restent fixes.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Les différentes écritures mésomères sont plusieurs représentations de Lewis d'une même structure réelle, dans laquelle certains électrons sont délocalisés. Cette délocalisation stabilise l'édifice et peut modifier les propriétés des liaisons : dans une liaison peptidique, la liaison $\\mathrm{C-N}$ n'est ni totalement simple ni totalement double.`,
    choiceExplanations: [
      `La mésomérie correspond à une délocalisation électronique : plusieurs doublets peuvent être redistribués, tandis que l'enchaînement des atomes reste inchangé.`,
      `Les formes mésomères, aussi appelées formes canoniques, ne sont pas des molécules séparées en équilibre. La structure réelle est un hybride de résonance.`,
      `Dans la liaison peptidique, les électrons sont délocalisés sur le groupement $\\mathrm{O-C-N}$. La liaison $\\mathrm{C-N}$ acquiert ainsi un caractère partiel de double liaison, qui freine sa rotation et contribue à la planéité locale.`,
      `La mésomérie met précisément en jeu le déplacement de doublets liants ou non liants, et non le déplacement des atomes.`,
    ],
  },
  {
    order: 34,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de l'élément chlore ($\\mathrm{Z} = 17$) :`,
    choices: [
      `L'élément chlore est un halogène.`,
      `Sa configuration électronique, dans l'état fondamental, est $1\\mathrm{s}^{2}\\,2\\mathrm{s}^{2}\\,2\\mathrm{p}^{6}\\,3\\mathrm{s}^{2}\\,3\\mathrm{p}^{5}$.`,
      `Selon l'échelle de Pauling, le chlore est plus électronégatif que le brome.`,
      `Les données de l'énoncé sont insuffisantes pour déterminer entièrement la composition du noyau de l'élément chlore.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `Le chlore appartient à la famille des halogènes, possède 17 électrons à l'état neutre et sa configuration électronique fondamentale est $1\\mathrm{s}^{2}\\,2\\mathrm{s}^{2}\\,2\\mathrm{p}^{6}\\,3\\mathrm{s}^{2}\\,3\\mathrm{p}^{5}$. Le numéro atomique permet d'identifier le nombre de protons, mais pas le nombre de neutrons sans connaître l'isotope considéré.`,
    choiceExplanations: [
      `Le chlore appartient à la colonne 17 de la classification périodique, qui correspond à la famille des halogènes.`,
      `Le chlore neutre possède 17 électrons, d'où la configuration électronique fondamentale $1\\mathrm{s}^{2}\\,2\\mathrm{s}^{2}\\,2\\mathrm{p}^{6}\\,3\\mathrm{s}^{2}\\,3\\mathrm{p}^{5}$.`,
      `Dans une même colonne, l'électronégativité diminue globalement du haut vers le bas. Le chlore est donc plus électronégatif que le brome.`,
      `Le numéro atomique $\\mathrm{Z} = 17$ donne le nombre de protons du noyau, mais le nombre de neutrons ne peut pas être déterminé sans connaître le nombre de masse ou l'isotope considéré.`,
    ],
  },
  {
    order: 35,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Le cisplatine est un médicament de chimiothérapie contenant du platine, utilisé dans le traitement de plusieurs cancers. Son action repose notamment sur sa capacité à former de nouvelles liaisons de coordination avec l'ADN des cellules tumorales. Dans le modèle présenté dans le cours, le platine central est initialement entouré de deux ligands chlorure et de deux molécules d'ammoniac. À proximité de l'ADN, les deux ligands chlorure sont remplacés par des atomes d'azote appartenant à des bases azotées. Concernant la structure et le mécanisme d'action du cisplatine, quelles propositions sont exactes ?`,
    choices: [
      `Dans le cisplatine, le platine constitue le centre accepteur, tandis que les espèces qui lui fournissent un doublet électronique jouent le rôle de ligands.`,
      `Lorsque les deux ligands chlorure sont libérés, le platine ne conserve plus que deux liaisons de coordination.`,
      `Des atomes d'azote de bases telles que l'adénine ou la guanine peuvent remplacer les ligands chlorure et former deux nouvelles liaisons de coordination avec le platine.`,
      `Le cisplatine agit principalement en établissant des liaisons avec les atomes d'oxygène du squelette de l'ADN, ce qui provoque immédiatement sa coupure.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Le mécanisme du cisplatine illustre une substitution de ligands : deux ligands chlorure quittent le complexe et sont remplacés par deux donneurs azotés de l'ADN. Ces nouvelles liaisons déforment l'ADN, perturbent sa réplication et sa transcription, puis freinent la mitose et la division des cellules tumorales.`,
    choiceExplanations: [
      `Le platine constitue le centre accepteur du complexe, tandis que les ligands lui fournissent des doublets électroniques.`,
      `Les deux liaisons $\\mathrm{Pt-Cl}$ rompues sont remplacées par deux nouvelles liaisons avec des bases de l'ADN. Le platine reste donc engagé dans quatre liaisons de coordination.`,
      `Des atomes d'azote de l'adénine ou de la guanine fournissent un doublet non liant au platine et remplacent les ligands chlorure.`,
      `Dans le modèle du cours, le platine se lie aux atomes d'azote des bases de l'ADN. Il en modifie la conformation plutôt qu'il ne provoque directement sa coupure.`,
    ],
  },
  {
    order: 36,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Le protoxyde d'azote $\\mathrm{N_{2}O}$ est un gaz utilisé en médecine pour ses propriétés antalgiques et sédatives. Sa structure électronique peut être représentée par les deux formes mésomères suivantes : [[QUESTION_DIAGRAM]] Concernant ces représentations du protoxyde d'azote, quelles propositions sont exactes ?`,
    questionDiagram: {
      type: 'lewis-resonance',
      forms: [
        {
          atoms: [
            { element: 'N', lonePairs: ['left'] },
            { element: 'N', charge: 1, lonePairs: [] },
            { element: 'O', charge: -1, lonePairs: ['top', 'right', 'bottom'] },
          ],
          bonds: ['triple', 'single'],
        },
        {
          atoms: [
            { element: 'N', charge: -1, lonePairs: ['top', 'bottom'] },
            { element: 'N', charge: 1, lonePairs: [] },
            { element: 'O', lonePairs: ['top', 'bottom'] },
          ],
          bonds: ['double', 'double'],
        },
      ],
    },
    choices: [
      `Les deux formes conservent le même enchaînement atomique $\\mathrm{N-N-O}$ et diffèrent uniquement par la répartition des électrons.`,
      `Dans les deux formes représentées, l'atome d'azote central porte une charge formelle positive.`,
      `La double flèche indique un équilibre chimique entre deux molécules distinctes qui se transforment continuellement l'une en l'autre.`,
      `La molécule réelle adopte successivement l'une puis l'autre de ces deux structures de Lewis.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Les formes mésomères sont plusieurs représentations de Lewis d'une même molécule. Elles conservent le même squelette atomique, mais proposent différentes localisations des doublets et des charges formelles. La structure réelle est intermédiaire entre ces représentations : les électrons concernés sont dits délocalisés.`,
    choiceExplanations: [
      `Lorsqu'on passe d'une forme mésomère à l'autre, les noyaux atomiques ne sont pas déplacés : seul le positionnement des doublets électroniques change.`,
      `Dans chacune des deux écritures, l'azote central possède une charge formelle $+1$.`,
      `Les deux formes mésomères ne sont pas deux espèces chimiques distinctes en équilibre. La double flèche traduit ici la mésomérie, et non une réaction réversible.`,
      `La molécule réelle n'oscille pas entre les deux dessins. Sa structure correspond à un hybride de résonance, dans lequel certains électrons sont délocalisés sur le groupement $\\mathrm{N-N-O}$.`,
    ],
  },
  {
    order: 37,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `On appelle énergie de liaison l'énergie associée à la rupture ou à la formation d'une liaison covalente. Concernant cette grandeur, quelles propositions sont exactes ?`,
    choices: [
      `L'énergie de dissociation d'une liaison correspond à l'énergie nécessaire pour rompre une mole de liaisons considérées, généralement à l'état gazeux.`,
      `Elle s'exprime couramment en $\\mathrm{kJ \\cdot mol^{-1}}$.`,
      `La rupture d'une liaison libère de l'énergie : son enthalpie de dissociation est donc négative.`,
      `Plus l'énergie de liaison est élevée, plus la liaison est facile à rompre.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Rompre une liaison nécessite de fournir de l'énergie, tandis que sa formation libère approximativement la même quantité d'énergie. Les énergies tabulées sont souvent des valeurs moyennes : elles peuvent varier légèrement selon l'environnement chimique de la liaison. Une liaison covalente peut notamment être rompue sous l'action d'une forte quantité d'énergie, par exemple un rayonnement ou une température élevée.`,
    choiceExplanations: [
      `Une énergie de liaison caractérise généralement la rupture d'une mole de liaisons dans des espèces gazeuses.`,
      `L'unité couramment utilisée est le $\\mathrm{kJ \\cdot mol^{-1}}$.`,
      `La rupture d'une liaison nécessite un apport d'énergie : elle est endothermique et son enthalpie est positive. La formation de la liaison correspondante libère de l'énergie.`,
      `Une énergie de liaison élevée caractérise une liaison plus forte, donc plus difficile à rompre.`,
    ],
  },
  {
    order: 38,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question:
      `Le peroxyde d'hydrogène $\\mathrm{H_{2}O_{2}}$ est un agent oxydant utilisé dans certains procédés d'éclaircissement dentaire. Sa formule développée est $\\mathrm{H-O-O-H}$. On donne les énergies moyennes de liaison : $E_{\\mathrm{O-H}} = 460\\ \\mathrm{kJ \\cdot mol^{-1}}$ et $E_{\\mathrm{O-O}} = 150\\ \\mathrm{kJ \\cdot mol^{-1}}$. En supposant les énergies additives, quelle énergie faut-il fournir pour rompre toutes les liaisons contenues dans $0{,}50\\ \\mathrm{mol}$ de molécules de $\\mathrm{H_{2}O_{2}}$ gazeux ?`,
    choices: [`305 kJ`, `460 kJ`, `535 kJ`, `1070 kJ`],
    correctChoiceIndexes: [2],
    explanation:
      `Pour estimer l'énergie nécessaire à la dissociation complète d'une molécule, il faut d'abord identifier et compter chacune de ses liaisons, puis additionner leurs énergies. Le résultat est ensuite adapté à la quantité de matière considérée. Il s'agit ici d'une approximation fondée sur des énergies moyennes de liaison.`,
    choiceExplanations: [
      `Une mole de molécules de $\\mathrm{H_{2}O_{2}}$ contient deux liaisons $\\mathrm{O-H}$ et une liaison $\\mathrm{O-O}$, soit une énergie totale de $2 \\times 460 + 150 = 1070\\ \\mathrm{kJ}$. Pour $0{,}50\\ \\mathrm{mol}$, il faut donc fournir $535\\ \\mathrm{kJ}$.`,
      `La valeur $460\\ \\mathrm{kJ}$ correspond à l'énergie d'une seule mole de liaisons $\\mathrm{O-H}$, pas à la dissociation complète de $0{,}50\\ \\mathrm{mol}$ de peroxyde d'hydrogène.`,
      `Une molécule de $\\mathrm{H_{2}O_{2}}$ comporte deux liaisons $\\mathrm{O-H}$ et une liaison $\\mathrm{O-O}$. Pour une mole de molécules, l'énergie vaut $2E_{\\mathrm{O-H}} + E_{\\mathrm{O-O}} = 2 \\times 460 + 150 = 1070\\ \\mathrm{kJ}$. Pour $0{,}50\\ \\mathrm{mol}$, on obtient $0{,}50 \\times 1070 = 535\\ \\mathrm{kJ}$.`,
      `La valeur $1070\\ \\mathrm{kJ}$ correspond à une mole entière de molécules de $\\mathrm{H_{2}O_{2}}$, alors que l'énoncé porte sur $0{,}50\\ \\mathrm{mol}$.`,
    ],
  },
  {
    order: 39,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Le benzène $\\mathrm{C_{6}H_{6}}$ peut être représenté par deux formes de Kekulé comportant une alternance de liaisons simples et doubles. Dans la molécule réelle, les six électrons $\\pi$ sont délocalisés sur l'ensemble du cycle. [[QUESTION_DIAGRAM]] Concernant les liaisons carbone-carbone du benzène, quelles propositions sont exactes ?`,
    questionDiagram: {
      type: 'benzene-kekule',
    },
    choices: [
      `Les deux formes mésomères conservent le même cycle formé de six atomes de carbone et ne diffèrent que par la répartition des électrons $\\pi$.`,
      `Dans la molécule réelle, le cycle comporte trois liaisons $\\mathrm{C-C}$ simples de longueur $1{,}54\\ \\text{Å}$ et trois liaisons $\\mathrm{C=C}$ doubles de longueur $1{,}35\\ \\text{Å}$.`,
      `Les six liaisons $\\mathrm{C-C}$ du cycle sont équivalentes et présentent une longueur intermédiaire, voisine de $1{,}40\\ \\text{Å}$.`,
      `Le cercle dessiné à l'intérieur de l'hexagone représente six liaisons doubles indépendantes entre les atomes de carbone.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Les formes de Kekulé sont plusieurs représentations de Lewis d'une même molécule. Le benzène réel n'oscille pas entre elles : il correspond à un hybride de résonance dans lequel les six électrons $\\pi$ sont délocalisés sur les six atomes de carbone. Cette délocalisation rend toutes les liaisons $\\mathrm{C-C}$ équivalentes et contribue à la stabilité particulière du cycle aromatique.`,
    choiceExplanations: [
      `Le squelette des six atomes de carbone reste inchangé. Seule la localisation apparente des trois doublets $\\pi$ varie entre les deux formes mésomères.`,
      `Dans le benzène réel, il n'existe pas trois liaisons simples distinctes et trois liaisons doubles distinctes. Les six liaisons $\\mathrm{C-C}$ sont équivalentes.`,
      `Leur longueur est intermédiaire entre celle d'une liaison simple $\\mathrm{C-C}$ et celle d'une liaison double $\\mathrm{C=C}$, ce qui traduit leur caractère intermédiaire.`,
      `Le cercle symbolise la délocalisation des six électrons $\\pi$ sur tout le cycle, et non six liaisons doubles localisées.`,
    ],
  },
  {
    order: 40,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Concernant la réaction présentée, quelles propositions sont exactes ?`,
    choices: [
      `Lors de la rupture homolytique, chacun des deux fragments récupère un électron du doublet liant.`,
      `Le point $\\bullet$ porté par $\\mathrm{HO^{\\bullet}}$ indique que cette espèce possède une charge négative.`,
      `Le radical hydroxyle est une espèce très réactive susceptible d'endommager des molécules biologiques, notamment l'ADN.`,
      `Les radicaux libres formés sont généralement stables et persistent longtemps dans la cellule.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `La rupture d'une liaison covalente nécessite un apport d'énergie. Lorsqu'elle est homolytique, chaque fragment récupère un électron du doublet liant et devient radicalaire. En radiothérapie, la radiolyse de l'eau peut ainsi produire des radicaux très réactifs, capables de participer aux dommages provoqués dans les cellules irradiées.`,
    choiceExplanations: [
      `Lors d'une rupture homolytique, les deux électrons de la liaison sont répartis entre les deux fragments : chacun possède alors un électron célibataire.`,
      `Le point représente un électron non apparié, et non une charge électrique. Il ne faut pas confondre $\\mathrm{HO^{\\bullet}}$, radical hydroxyle, avec $\\mathrm{HO^{-}}$, ion hydroxyde.`,
      `Le radical hydroxyle est extrêmement réactif et peut provoquer des altérations de molécules cellulaires, notamment des lésions de l'ADN.`,
      `Les radicaux libres ont généralement une durée de vie courte, précisément en raison de leur forte réactivité.`,
    ],
  },
  {
    order: 41,
    difficulty: 'MEDIUM',
    answerFormat: 'SINGLE',
    question: `Quelle énergie faut-il fournir pour rompre une liaison $\\mathrm{O-H}$ par molécule dans $2{,}5\\ \\mathrm{mmol}$ de molécules d'eau ?`,
    choices: [`1,15 J`, `1,15 kJ`, `2,30 kJ`, `115 kJ`],
    correctChoiceIndexes: [1],
    explanation:
      `La rupture d'une liaison covalente nécessite un apport d'énergie. Lorsqu'elle est homolytique, chaque fragment récupère un électron du doublet liant et devient radicalaire. En radiothérapie, la radiolyse de l'eau peut ainsi produire des radicaux très réactifs, capables de participer aux dommages provoqués dans les cellules irradiées.`,
    choiceExplanations: [
      `La quantité de liaisons $\\mathrm{O-H}$ rompues est égale à la quantité de molécules considérées, puisqu'une seule liaison est rompue par molécule : $n = 2{,}5\\ \\mathrm{mmol} = 2{,}5 \\times 10^{-3}\\ \\mathrm{mol}$. L'énergie nécessaire vaut donc $E = nE_{\\mathrm{O-H}} = 2{,}5 \\times 10^{-3} \\times 460 = 1{,}15\\ \\mathrm{kJ}$, et non $1{,}15\\ \\mathrm{J}$.`,
      `La quantité de liaisons $\\mathrm{O-H}$ rompues est égale à la quantité de molécules considérées, puisqu'une seule liaison est rompue par molécule : $n = 2{,}5\\ \\mathrm{mmol} = 2{,}5 \\times 10^{-3}\\ \\mathrm{mol}$. L'énergie nécessaire vaut donc $E = nE_{\\mathrm{O-H}} = 2{,}5 \\times 10^{-3} \\times 460 = 1{,}15\\ \\mathrm{kJ}$.`,
      `La valeur $2{,}30\\ \\mathrm{kJ}$ correspondrait à la rupture des deux liaisons $\\mathrm{O-H}$ de chaque molécule d'eau.`,
      `La quantité de matière $2{,}5\\ \\mathrm{mmol}$ doit être convertie en moles avant le calcul, soit $2{,}5 \\times 10^{-3}\\ \\mathrm{mol}$.`,
    ],
  },
  {
    order: 42,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `À partir des données de l'énoncé commun, quelles propositions sont exactes ?`,
    choices: [
      `Les ions $\\mathrm{Na^{+}}$ et $\\mathrm{F^{-}}$ possèdent chacun 10 électrons et sont isoélectroniques du néon.`,
      `L'ion $\\mathrm{Ca^{2+}}$ possède 22 électrons.`,
      `L'ion fluorure $\\mathrm{F^{-}}$ possède la configuration électronique $1\\mathrm{s}^{2}\\,2\\mathrm{s}^{2}\\,2\\mathrm{p}^{6}$.`,
      `La formation de $\\mathrm{F^{-}}$ correspond à l'arrachement d'un électron et met directement en jeu l'énergie d'ionisation du fluor.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `La charge d'un ion permet de déduire son nombre d'électrons sans modifier son noyau. Le sodium perd un électron et le fluor en gagne un : $\\mathrm{Na^{+}}$ et $\\mathrm{F^{-}}$ possèdent donc chacun 10 électrons, comme le néon. Le calcium perd deux électrons et $\\mathrm{Ca^{2+}}$ n'en possède plus que 18.`,
    choiceExplanations: [
      `Le sodium neutre possède 11 électrons et le fluor neutre 9. Après perte ou gain d'un électron, les deux ions en possèdent 10 et partagent la configuration du néon.`,
      `Le calcium neutre possède 20 électrons. L'ion $\\mathrm{Ca^{2+}}$ en a perdu deux et n'en possède donc que 18.`,
      `L'ion $\\mathrm{F^{-}}$ possède 10 électrons : sa configuration est bien $1\\mathrm{s}^{2}\\,2\\mathrm{s}^{2}\\,2\\mathrm{p}^{6}$.`,
      `Le fluor forme $\\mathrm{F^{-}}$ en gagnant un électron. L'énergie d'ionisation concerne au contraire l'arrachement d'un électron et la formation d'un cation.`,
    ],
  },
  {
    order: 43,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `On considère maintenant l'association des ions calcium et fluorure. Quelles propositions sont exactes ?`,
    choices: [
      `La formule électriquement neutre de l'espèce ionique formée est $\\mathrm{CaF_{2}}$.`,
      `Un ion $\\mathrm{Ca^{2+}}$ compense exactement la charge de deux ions $\\mathrm{F^{-}}$.`,
      `Dans le modèle ionique, chaque liaison $\\mathrm{Ca-F}$ résulte du partage localisé d'un doublet électronique entre les deux atomes.`,
      `La grande différence d'électronégativité entre le calcium et le fluor favorise un transfert d'électrons et la formation d'ions de charges entières.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La neutralité électrique impose d'associer un cation $\\mathrm{Ca^{2+}}$ à deux anions $\\mathrm{F^{-}}$, d'où la formule $\\mathrm{CaF_{2}}$. Dans le modèle ionique, la cohésion résulte de l'attraction électrostatique entre ions de charges opposées, favorisée ici par la forte différence d'électronégativité.`,
    choiceExplanations: [
      `La charge totale vaut $+2 + 2\\times(-1)=0$ : la formule neutre est donc $\\mathrm{CaF_{2}}$.`,
      `Deux ions fluorure apportent une charge totale $-2$, qui compense celle de l'ion calcium $\\mathrm{Ca^{2+}}$.`,
      `Cette description correspondrait à une liaison covalente localisée. Dans un solide ionique, la cohésion est décrite par l'attraction électrostatique entre les ions du réseau.`,
      `Le calcium est peu électronégatif et le fluor très électronégatif : le transfert d'électrons et la formation de $\\mathrm{Ca^{2+}}$ et $\\mathrm{F^{-}}$ sont favorisés.`,
    ],
  },
  {
    order: 44,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `De nombreux médicaments, notamment certains anesthésiques locaux, possèdent une fonction amide. On modélise ce motif par l'acétamide $\\mathrm{CH_{3}-C(=O)-NH_{2}}$. Quelles propositions sont exactes ?`,
    choices: [
      `La molécule comporte huit liaisons $\\sigma$ et une liaison $\\pi$.`,
      `La liaison $\\mathrm{C=O}$ est constituée de deux liaisons $\\sigma$.`,
      `La délocalisation électronique confère à la liaison $\\mathrm{C-N}$ un caractère partiel de double liaison et limite sa rotation.`,
      `Les formes mésomères de l'amide sont deux molécules distinctes qui s'interconvertissent rapidement.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Le motif $\\mathrm{CH_{3}-C(=O)-NH_{2}}$ comporte huit liaisons $\\sigma$ : trois $\\mathrm{C-H}$, une $\\mathrm{C-C}$, une composante $\\sigma$ de $\\mathrm{C=O}$, une $\\mathrm{C-N}$ et deux $\\mathrm{N-H}$. La liaison carbonyle apporte en plus une liaison $\\pi$. La mésomérie délocalise le doublet de l'azote sur le groupement $\\mathrm{O-C-N}$ et rigidifie partiellement la liaison $\\mathrm{C-N}$.`,
    choiceExplanations: [
      `Le décompte donne bien huit liaisons $\\sigma$ et une liaison $\\pi$.`,
      `Une double liaison comprend une liaison $\\sigma$ et une liaison $\\pi$, et non deux liaisons $\\sigma$.`,
      `La délocalisation du doublet de l'azote donne à la liaison $\\mathrm{C-N}$ un caractère intermédiaire entre liaison simple et liaison double, ce qui limite la rotation.`,
      `Les formes mésomères sont plusieurs écritures de Lewis d'une même structure réelle ; elles ne correspondent pas à deux molécules séparées en équilibre.`,
    ],
  },
  {
    order: 45,
    difficulty: 'HARD',
    answerFormat: 'SINGLE',
    question:
      `L'acide chlorhydrique participe à l'acidité gastrique. Pour une liaison $\\mathrm{H-Cl}$, on modélise les charges partielles par $\\delta = 0{,}18e$ et la longueur de liaison par $d = 127\\ \\mathrm{pm}$. On donne $e = 1{,}60 \\times 10^{-19}\\ \\mathrm{C}$ et $1\\ \\mathrm{C \\cdot m} \\approx 3{,}0 \\times 10^{29}\\ \\mathrm{D}$. La norme du moment dipolaire vaut approximativement :`,
    choices: [
      `$0{,}11\\ \\mathrm{D}$.`,
      `$1{,}1\\ \\mathrm{D}$.`,
      `$3{,}7\\ \\mathrm{D}$.`,
      `$11\\ \\mathrm{D}$.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `La charge partielle vaut $\\delta = 0{,}18 \\times 1{,}60 \\times 10^{-19} = 2{,}88 \\times 10^{-20}\\ \\mathrm{C}$. Avec $d = 127 \\times 10^{-12} = 1{,}27 \\times 10^{-10}\\ \\mathrm{m}$, on obtient $\\mu = \\delta d \\approx 3{,}66 \\times 10^{-30}\\ \\mathrm{C \\cdot m}$, soit $\\mu \\approx 3{,}0 \\times 10^{29} \\times 3{,}66 \\times 10^{-30} \\approx 1{,}1\\ \\mathrm{D}$.`,
    choiceExplanations: [
      `Cette valeur correspond à une erreur d'un facteur 10 lors de la conversion en debyes.`,
      `C'est la bonne réponse : $\\mu \\approx 3{,}66 \\times 10^{-30}\\ \\mathrm{C \\cdot m} \\approx 1{,}1\\ \\mathrm{D}$.`,
      `Cette valeur correspond approximativement à la norme en $10^{-30}\\ \\mathrm{C \\cdot m}$, mais pas à sa valeur en debyes.`,
      `Cette valeur résulte d'une erreur d'un facteur 10 dans le traitement des puissances de dix.`,
    ],
  },
  {
    order: 46,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `À partir de l'énoncé commun, quelles propositions sont exactes ?`,
    choices: [
      `L'ion $\\mathrm{Fe^{2+}}$, issu du fer de numéro atomique $\\mathrm{Z}=26$, possède 24 électrons.`,
      `Quatre azotes de l'hème et un azote d'une histidine occupent cinq positions de coordination autour du fer.`,
      `La fixation du dioxygène exige la rupture de la liaison entre le fer et l'histidine.`,
      `Dans ces liaisons de coordination, le fer fournit ses doublets non liants aux ligands.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le fer perd deux électrons pour former $\\mathrm{Fe^{2+}}$ et possède alors 24 électrons. Dans l'hème, quatre azotes de la porphyrine et l'azote d'une histidine occupent cinq positions de coordination ; une sixième position reste disponible pour un ligand tel que $\\mathrm{O_{2}}$ ou $\\mathrm{CO}$.`,
    choiceExplanations: [
      `Le fer neutre possède 26 électrons ; la charge $2+$ traduit la perte de deux électrons, soit 24 électrons restants.`,
      `Les quatre azotes de l'hème et l'azote de l'histidine assurent cinq liaisons de coordination stables autour du fer.`,
      `La liaison fer-histidine reste en place : le dioxygène se fixe sur la sixième position de coordination disponible.`,
      `Les ligands donnent leurs doublets non liants au centre métallique accepteur ; les rôles sont donc inversés.`,
    ],
  },
  {
    order: 47,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Lorsque le monoxyde de carbone remplace le dioxygène sur l'hème, quelles propositions sont exactes ?`,
    choices: [
      `Il s'agit d'une substitution de ligand sur la sixième position de coordination du fer.`,
      `Le remplacement de $\\mathrm{O_{2}}$ par $\\mathrm{CO}$ impose nécessairement l'oxydation de $\\mathrm{Fe^{2+}}$ en $\\mathrm{Fe^{3+}}$.`,
      `Le monoxyde de carbone joue le rôle de donneur de doublet et le fer celui d'accepteur.`,
      `Une liaison $\\mathrm{Fe-CO}$ plus stable que la liaison $\\mathrm{Fe-O_{2}}$ favorise la libération du monoxyde de carbone.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Le monoxyde de carbone entre en compétition avec le dioxygène pour la sixième position de coordination. Il fournit un doublet au fer, qui joue le rôle d'accepteur. Cette substitution de ligand ne correspond pas nécessairement à une modification de l'état d'oxydation du fer ; une liaison plus stable rend au contraire la dissociation du ligand plus difficile.`,
    choiceExplanations: [
      `Le ligand occupant la sixième position est remplacé : il s'agit bien d'une substitution de ligand.`,
      `Un changement de ligand n'implique pas à lui seul un transfert d'électron ni un changement obligatoire de l'état d'oxydation du fer.`,
      `Le ligand $\\mathrm{CO}$ apporte un doublet électronique à une orbitale vacante du centre métallique.`,
      `Une liaison plus stable se dissocie moins facilement ; elle favorise donc la rétention du monoxyde de carbone sur l'hème.`,
    ],
  },
  {
    order: 48,
    difficulty: 'HARD',
    answerFormat: 'SINGLE',
    question:
      `Quelle est, à deux chiffres significatifs, l'énergie moyenne nécessaire pour rompre une seule liaison $\\mathrm{O-H}$ ?`,
    choices: [
      `$7{,}7 \\times 10^{-22}\\ \\mathrm{J}$.`,
      `$7{,}7 \\times 10^{-19}\\ \\mathrm{J}$.`,
      `$2{,}8 \\times 10^{-18}\\ \\mathrm{J}$.`,
      `$4{,}6 \\times 10^{5}\\ \\mathrm{J}$.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `L'énergie $460\\ \\mathrm{kJ \\cdot mol^{-1}}$ correspond à une mole de liaisons. Pour une seule liaison : $E = \\dfrac{460 \\times 10^{3}}{6{,}0 \\times 10^{23}} \\approx 7{,}7 \\times 10^{-19}\\ \\mathrm{J}$.`,
    choiceExplanations: [
      `Cette valeur est trop faible d'un facteur $10^{3}$ : les kilojoules n'ont pas été convertis en joules.`,
      `C'est la bonne réponse : $460 \\times 10^{3} / (6{,}0 \\times 10^{23}) \\approx 7{,}7 \\times 10^{-19}\\ \\mathrm{J}$.`,
      `Cette valeur correspond à un quotient incorrect entre l'énergie molaire et le nombre d'Avogadro.`,
      `Cette valeur est l'énergie associée à une mole de liaisons exprimée en joules, et non à une seule liaison.`,
    ],
  },
  {
    order: 49,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Un événement d'irradiation transfère $8{,}0 \\times 10^{-19}\\ \\mathrm{J}$ à une molécule d'eau. Dans le modèle simplifié de l'énoncé, quelles propositions sont exactes ?`,
    choices: [
      `L'énergie transférée est légèrement supérieure à l'énergie moyenne calculée pour une liaison $\\mathrm{O-H}$ ; la rupture d'une telle liaison est donc énergétiquement possible dans ce modèle.`,
      `Une rupture homolytique de $\\mathrm{O-H}$ forme directement les ions $\\mathrm{HO^{-}}$ et $\\mathrm{H^{+}}$.`,
      `Lors de la rupture homolytique, chaque fragment récupère un électron du doublet liant et devient radicalaire.`,
      `Le point $\\bullet$ de $\\mathrm{HO^{\\bullet}}$ indique une charge électrique négative.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `L'énergie transférée, $8{,}0 \\times 10^{-19}\\ \\mathrm{J}$, est légèrement supérieure à l'énergie moyenne d'une liaison $\\mathrm{O-H}$, environ $7{,}7 \\times 10^{-19}\\ \\mathrm{J}$. Dans cette modélisation, la rupture est donc possible. Si elle est homolytique, les deux fragments récupèrent chacun un électron et forment des radicaux, sans que le point ne représente une charge.`,
    choiceExplanations: [
      `Comme $8{,}0 \\times 10^{-19} > 7{,}7 \\times 10^{-19}\\ \\mathrm{J}$, l'apport est suffisant dans le cadre simplifié proposé.`,
      `Les ions $\\mathrm{HO^{-}}$ et $\\mathrm{H^{+}}$ résulteraient d'une rupture hétérolytique ; la rupture homolytique forme des radicaux.`,
      `Chaque fragment récupère un électron de la liaison : on obtient $\\mathrm{HO^{\\bullet}}$ et $\\mathrm{H^{\\bullet}}$.`,
      `Le point signale un électron célibataire, pas une charge négative.`,
    ],
  },

  {
    order: 50,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Le monoxyde d'azote $\\mathrm{NO^{\\bullet}}$ est une molécule produite notamment par l'endothélium vasculaire ; il participe à la relaxation des vaisseaux sanguins. On donne $\\mathrm{Z}(\\mathrm{N}) = 7$ et $\\mathrm{Z}(\\mathrm{O}) = 8$. Concernant sa structure électronique, quelles propositions sont exactes ?`,
    choices: [
      `La molécule neutre $\\mathrm{NO^{\\bullet}}$ possède au total 11 électrons de valence.`,
      `Tous les électrons de valence de $\\mathrm{NO^{\\bullet}}$ peuvent être regroupés en doublets dans une représentation de Lewis.`,
      `Le point $\\bullet$ signale la présence d'un électron célibataire et non une charge électrique négative.`,
      `Le monoxyde d'azote est nécessairement un anion, car l'oxygène est plus électronégatif que l'azote.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `L'azote possède cinq électrons de valence et l'oxygène en possède six, soit 11 électrons de valence au total. Ce nombre impair impose la présence d'au moins un électron non apparié : $\\mathrm{NO^{\\bullet}}$ est donc un radical. Le symbole $\\bullet$ ne représente pas une charge, et une espèce radicalaire peut être électriquement neutre.`,
    choiceExplanations: [
      `L'azote apporte cinq électrons de valence et l'oxygène six : $5 + 6 = 11$.`,
      `Un nombre impair d'électrons ne permet pas de les apparier tous : il subsiste au moins un électron célibataire.`,
      `Le point est la notation d'un électron non apparié. Une charge négative serait indiquée par le symbole $-$ en exposant.`,
      `Une différence d'électronégativité peut polariser une liaison, mais elle ne transforme pas automatiquement la molécule neutre en anion.`,
    ],
  },
];

const quizSeeds: SeedQuiz[] = [
  {
    order: 1,
    slug: 'decouvrir-formation-ions',
    title: `Découvrir – Formation des ions`,
    description:
      `Premier niveau d'entraînement sur la section A – Formation des ions et électronégativité.`,
    stage: 'DISCOVER',
    sectionOrder: 1,
    questionOrders: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    order: 2,
    slug: 'sentrainer-formation-ions',
    title: `S'entraîner – Formation des ions`,
    description:
      `Niveau intermédiaire d'entraînement sur la section A – Formation des ions et électronégativité.`,
    stage: 'PRACTICE',
    sectionOrder: 1,
    questionOrders: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  },
  {
    order: 1,
    slug: 'decouvrir-liaisons-chimiques',
    title: `Découvrir – Liaisons chimiques`,
    description:
      `Premier niveau d'entraînement sur la section B – Liaisons chimiques.`,
    stage: 'DISCOVER',
    sectionOrder: 2,
    questionOrders: [21, 22, 23, 26, 28, 30, 32, 33, 37, 38],
  },
  {
    order: 2,
    slug: 'sentrainer-liaisons-chimiques',
    title: `S'entraîner – Liaisons chimiques`,
    description:
      `Niveau intermédiaire d'entraînement sur la section B – Liaisons chimiques.`,
    stage: 'PRACTICE',
    sectionOrder: 2,
    questionOrders: [25, 24, 27, 29, 31, 36, 39, 50],
    questionGroups: [
      {
        order: 1,
        title: `Radiolyse de l'eau et formation de radicaux libres`,
        sharedStatement:
          `En radiothérapie, les rayonnements ionisants peuvent interagir avec l'eau, très abondante dans les cellules. Une première étape simplifiée de cette radiolyse correspond à la rupture homolytique d'une liaison $\\mathrm{O-H}$ : $$\\mathrm{H_{2}O} \\xrightarrow{\\gamma} \\mathrm{HO^{\\bullet}} + \\mathrm{H^{\\bullet}}$$ On donne l'énergie moyenne de dissociation d'une liaison $\\mathrm{O-H}$ : $$E_{\\mathrm{O-H}} = 460\\ \\mathrm{kJ \\cdot mol^{-1}}$$`,
        questionOrders: [40, 41],
      },
    ],
  },
  {
    order: 1,
    slug: 'synthese-ions-electronegativite-liaisons-chimiques',
    title: `Synthèse – Ions et liaisons chimiques`,
    description:
      `QCM de synthèse transversal et contextualisé sur les ions, l'électronégativité, les liaisons chimiques et leurs applications médicales.`,
    stage: 'MASTER',
    sectionOrder: 3,
    items: [
      { type: 'QUESTION', questionOrder: 34 },
      {
        type: 'GROUP',
        title: `Fluorures et prévention dentaire`,
        sharedStatement:
          `Les ions fluorure sont utilisés dans la prévention de la carie dentaire. On considère notamment le fluorure de sodium $\\mathrm{NaF}$ et l'association du calcium avec le fluor. Données : $\\mathrm{Z}(\\mathrm{Na})=11$, $\\mathrm{Z}(\\mathrm{F})=9$, $\\mathrm{Z}(\\mathrm{Ca})=20$, $\\chi(\\mathrm{Na})\\approx0{,}9$, $\\chi(\\mathrm{Ca})\\approx1{,}0$ et $\\chi(\\mathrm{F})=4{,}0$.`,
        questionOrders: [42, 43],
      },
      { type: 'QUESTION', questionOrder: 44 },
      { type: 'QUESTION', questionOrder: 45 },
      {
        type: 'GROUP',
        title: `Hémoglobine et intoxication au monoxyde de carbone`,
        sharedStatement:
          `Dans l'hémoglobine, l'ion ferreux $\\mathrm{Fe^{2+}}$ constitue le centre métallique de l'hème. Il est coordonné à quatre atomes d'azote de l'hème et à un azote d'une histidine ; une sixième position peut fixer réversiblement $\\mathrm{O_{2}}$. Le monoxyde de carbone $\\mathrm{CO}$ peut entrer en compétition avec le dioxygène pour cette position.`,
        questionOrders: [46, 47],
      },
      { type: 'QUESTION', questionOrder: 35 },
      {
        type: 'GROUP',
        title: `Radiothérapie et radiolyse de l'eau`,
        sharedStatement:
          `En radiothérapie, un rayonnement ionisant peut transférer de l'énergie à l'eau cellulaire et provoquer une rupture homolytique d'une liaison $\\mathrm{O-H}$. On donne l'énergie moyenne de dissociation $E_{\\mathrm{O-H}}=460\\ \\mathrm{kJ \\cdot mol^{-1}}$ et le nombre d'Avogadro $N_{\\mathrm{A}}=6{,}0 \\times 10^{23}\\ \\mathrm{mol^{-1}}$.`,
        questionOrders: [48, 49],
      },
    ],
  },
];

export async function seedHealthTrainingUe14FormationIonsElectronegativiteLiaisonsChimiques(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 2',
    questionThemeLabelsByOrder: {
      1: [`Formation des cations et des anions`],
      2: [`Énergie d'ionisation et formation des cations`],
      3: [`Tendance des métaux à former des cations`],
      4: [`Affinité électronique et formation des anions`],
      5: [`Configuration électronique cible des ions du bloc p`],
      6: [`Définition et notation de l'électronégativité`],
      7: [`Évolution de l'électronégativité dans la classification périodique`],
      8: [`Électronégativité des éléments du vivant`],
      9: [`Ordre de grandeur de l'électronégativité`],
      10: [`Facilité d'ionisation positive`],
      11: [`Facilité d'ionisation négative`],
      12: [`Configuration électronique d'un cation`],
      13: [`Configuration électronique du gaz rare précédent`],
      14: [`Cations du fer et du cuivre`],
      15: [`Comparaison des électronégativités sur l'échelle de Pauling`],
      16: [`Comparaison d'électronégativités dans la classification périodique`],
      17: [`Électronégativité croissante des métaux alcalins`],
      18: [`Électronégativité la plus faible parmi les éléments du vivant`],
      19: [`Configuration électronique de l'ion ferreux`],
      20: [`Lien entre électronégativité et formation des ions`],
      21: [`Formation du doublet liant en liaison covalente`],
      22: [`Doublets liants et non liants dans quelques molécules`],
      23: [`Représentations de Lewis des atomes`],
      24: [`Liaisons covalentes dans PCl3 et PCl5`],
      25: [`Règles du duet et de l'octet`],
      26: [`Liaison de coordination`],
      27: [`Formation et charge de l'ion ammonium`],
      28: [`Complexes de coordination`],
      29: [`Configuration électronique et coordination du fer dans l'hémoglobine`],
      30: [`Moment dipolaire d'une liaison`],
      31: [`Calcul d'une charge partielle`],
      32: [`Conversion du moment dipolaire en debyes`],
      33: [`Mésomérie et délocalisation électronique`],
      34: [`Élément chlore : structure électronique et électronégativité`],
      35: [`Cisplatine et substitution de ligands sur l'ADN`],
      36: [`Protoxyde d'azote et mésomérie`],
      37: [`Énergie de liaison`],
      38: [`Application à l'éclaircissement dentaire`],
      39: [`Mésomérie dans le cycle benzénique`],
      40: [`Radicaux libres et radiolyse de l'eau`],
      41: [`Énergie de rupture d'une liaison O-H`],
      42: [`Fluorures dentaires et configurations électroniques des ions`],
      43: [`Fluorure de calcium et liaison ionique`],
      44: [`Fonction amide : liaisons sigma, pi et mésomérie`],
      45: [`Moment dipolaire de la liaison H-Cl`],
      46: [`Coordination du fer dans l'hémoglobine`],
      47: [`Substitution de ligand par le monoxyde de carbone`],
      48: [`Énergie microscopique de rupture d'une liaison O-H`],
      49: [`Radiolyse de l'eau et formation de radicaux`],
      50: [`Monoxyde d'azote et espèce radicalaire`],
    },
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3],
  });
}
