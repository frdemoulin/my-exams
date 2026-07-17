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
    slug: 'synthese-ions-electronegativite-liaisons-chimiques',
    title: `Synthèse – Ions et liaisons chimiques`,
    description:
      `QCM de synthèse transversal sur les ions, l'électronégativité et les liaisons chimiques.`,
    stage: 'MASTER',
    sectionOrder: 3,
    questionOrders: [34],
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
      34: [`Élément chlore : structure électronique et électronégativité`],
    },
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3],
  });
}
