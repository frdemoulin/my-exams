import type { SeedQuestion } from './health-training-ue14.shared';

export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
  {
      order: 27,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos du modèle atomique :`,
      choices: [
        `Le nucléide $^{1}_{3}\\mathrm{X}$ est un isotope de l'hydrogène.`,
        `La masse d'un noyau au repos est supérieure à la somme des masses des nucléons isolés et au repos qui le constituent.`,
        `Certains nucléides présents dans la nature sont radioactifs.`,
        `Les noyaux atomiques ont une dimension de l'ordre de $1\\,\\mathrm{nm}$.`,
      ],
      correctChoiceIndexes: [2],
      explanation:
        '',
      choiceExplanations: [
        `Un isotope de l'hydrogène doit avoir $\\mathrm{Z}=1$ ; de plus, $^{1}_{3}\\mathrm{X}$ est impossible car $\\mathrm{A}<\\mathrm{Z}$.`,
        `Le défaut de masse signifie au contraire que la masse d'un noyau lié est inférieure à la somme des masses de ses nucléons isolés.`,
        `Des nucléides naturels comme le potassium 40 ou l'uranium 238 sont radioactifs.`,
        `La dimension d'un noyau est de l'ordre du femtomètre, soit environ $10^{-15}\\,\\mathrm{m}$, et non du nanomètre.`,
      ],
    },
  {
      order: 48,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `En mammographie, le rhodium (symbole $\\mathrm{Rh}$) peut entrer dans la composition de la cible ou du filtre du tube à rayons X, afin d’adapter l’énergie du faisceau à l’épaisseur et à la densité du sein examiné. De numéro atomique $\\mathrm{Z} = 45$, il possède :`,
      choices: [
        `9 électrons $\\mathrm{s}$, 18 électrons $\\mathrm{p}$ et 18 électrons $\\mathrm{d}$.`,
        `10 électrons $\\mathrm{s}$, 18 électrons $\\mathrm{p}$ et 17 électrons $\\mathrm{d}$.`,
        `8 électrons $\\mathrm{s}$, 18 électrons $\\mathrm{p}$ et 19 électrons $\\mathrm{d}$.`,
        `9 électrons $\\mathrm{s}$, 24 électrons $\\mathrm{p}$ et 12 électrons $\\mathrm{d}$.`,
      ],
      correctChoiceIndexes: [0],
      explanation:
        `Le rhodium neutre est décrit ici par $[\\mathrm{Kr}]\\,4\\mathrm{d}^8\\,5\\mathrm{s}^1$. Le cœur $[\\mathrm{Kr}]$ contient 8 électrons $\\mathrm{s}$, 18 électrons $\\mathrm{p}$ et 10 électrons $\\mathrm{d}$ ; l'ajout de $4\\mathrm{d}^8\\,5\\mathrm{s}^1$ conduit donc à 9 électrons $\\mathrm{s}$, 18 électrons $\\mathrm{p}$ et 18 électrons $\\mathrm{d}$.`,
      choiceExplanations: [
        `Le décompte issu de $[\\mathrm{Kr}]\\,4\\mathrm{d}^8\\,5\\mathrm{s}^1$ donne bien $9$ électrons $\\mathrm{s}$, $18$ électrons $\\mathrm{p}$ et $18$ électrons $\\mathrm{d}$, soit 45 électrons au total.`,
        `Cette répartition totalise bien 45 électrons, mais elle correspondrait à dix électrons $\\mathrm{s}$ et seulement dix-sept électrons $\\mathrm{d}$ ; ce n'est pas la répartition de la configuration fondamentale retenue pour le rhodium.`,
        `Cette répartition totalise également 45 électrons, mais elle retire un électron aux sous-couches $\\mathrm{s}$ et en ajoute un aux sous-couches $\\mathrm{d}$ par rapport à $[\\mathrm{Kr}]\\,4\\mathrm{d}^8\\,5\\mathrm{s}^1$.`,
        `Une sous-couche $\\mathrm{p}$ complète apparaît dans les couches 2, 3 et 4, soit $18$ électrons $\\mathrm{p}$ au total, et non 24.`,
      ],
    },
  {
      order: 49,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos des orbitales atomiques :`,
      choices: [
        `Une orbitale atomique $\\mathrm{s}$ possède une symétrie axiale, alors qu'une orbitale atomique $\\mathrm{p}$ possède une symétrie centrale.`,
        `Une orbitale atomique $\\mathrm{s}$ a une forme sphérique.`,
        `Contrairement à une orbitale $\\mathrm{s}$, une orbitale $\\mathrm{p}$ possède un plan nodal.`,
        `Les orbitales atomiques $2\\mathrm{p}_x$, $2\\mathrm{p}_y$ et $2\\mathrm{p}_z$ possèdent un axe de symétrie en commun.`,
      ],
      correctChoiceIndexes: [1, 2],
      explanation:
        `Une orbitale $\\mathrm{s}$ possède une symétrie sphérique. Une orbitale $\\mathrm{p}$ est orientée selon un axe et présente un plan nodal passant par le noyau ; les orbitales $2\\mathrm{p}_x$, $2\\mathrm{p}_y$ et $2\\mathrm{p}_z$ ont donc des axes d'orientation différents.`,
      choiceExplanations: [
        `La description est inversée : une orbitale $\\mathrm{s}$ est sphérique, tandis qu'une orbitale $\\mathrm{p}$ possède une symétrie axiale et un plan nodal.`,
        `La densité de probabilité d'une orbitale $\\mathrm{s}$ est globalement sphérique autour du noyau.`,
        `Une orbitale $\\mathrm{p}$ possède un plan nodal passant par le noyau, contrairement à l'orbitale $1\\mathrm{s}$ considérée à ce niveau.`,
        `Les trois orbitales $2\\mathrm{p}$ sont orientées respectivement selon les axes $x$, $y$ et $z$ ; elles n'ont donc pas un même axe de symétrie propre.`,
      ],
    },
  {
      order: 50,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Dans le modèle de l'atome d'hydrogène de Bohr, l'énergie, exprimée en $\\mathrm{eV}$, d'un électron se trouvant dans la couche de nombre $\\mathrm{n}$ est donnée par la formule $E_{\\mathrm{n}} = -\\dfrac{13{,}6}{\\mathrm{n}^2}$. Un électron de la couche $\\mathrm{L}$ a une énergie égale à :`,
      choices: [
        `$4{,}3\\,\\mathrm{eV}$.`,
        `$3{,}6\\,\\mathrm{eV}$.`,
        `$-4{,}3\\,\\mathrm{eV}$.`,
        `$-3{,}4\\,\\mathrm{eV}$.`,
      ],
      correctChoiceIndexes: [3],
      explanation:
        `La couche $\\mathrm{L}$ correspond à $\\mathrm{n}=2$. L'application directe de la formule donne : $E_2=-\\dfrac{13{,}6}{2^2}=-\\dfrac{13{,}6}{4}=-3{,}4\\,\\mathrm{eV}$ Le signe négatif traduit un état lié de l'électron.`,
      choiceExplanations: [``, ``, ``, ``],
    },
  {
      order: 51,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `On rappelle qu'un édifice atomique désigne un atome ou un ion :`,
      choices: [
        `Deux édifices atomiques ayant des configurations électroniques différentes correspondent obligatoirement à des éléments chimiques différents.`,
        `Deux édifices atomiques correspondant à des éléments chimiques différents ne peuvent pas présenter la même configuration électronique.`,
        `Si deux édifices atomiques présentent la même configuration électronique, alors ils appartiennent forcément au même élément chimique.`,
        `Un édifice atomique peut avoir différentes configurations électroniques.`,
      ],
      correctChoiceIndexes: [3],
      explanation:
        `La configuration électronique dépend à la fois du nombre d'électrons et de l'état électronique. Des espèces d'éléments différents peuvent être isoélectroniques, tandis qu'un même atome ou ion peut présenter une configuration fondamentale ou une configuration excitée.`,
      choiceExplanations: [
        `Un même élément peut former plusieurs ions et donc plusieurs édifices possédant des nombres d'électrons et des configurations différents.`,
        `Des espèces d'éléments différents peuvent avoir le même nombre d'électrons : par exemple, des ions isoélectroniques partagent une même configuration.`,
        `Une même configuration électronique n'identifie pas à elle seule l'élément, car elle peut appartenir à plusieurs espèces isoélectroniques de charges nucléaires différentes.`,
        `Un même édifice peut se trouver dans son état fondamental ou dans un état excité, auxquels correspondent des configurations électroniques différentes.`,
      ],
    },
  {
      order: 52,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Parmi les propositions suivantes, laquelle correspond à la configuration électronique de cet élément dans son état fondamental :`,
      choices: [
        `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^{10}\\,4\\mathrm{s}^0$.`,
        `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^8\\,4\\mathrm{s}^2$.`,
        `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^8\\,3\\mathrm{d}^6\\,4\\mathrm{s}^2$.`,
        `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^6\\,4\\mathrm{s}^2\\,4\\mathrm{p}^2$.`,
      ],
      correctChoiceIndexes: [1],
      explanation:
        `Le nickel possède 28 électrons. Après le cœur $[\\mathrm{Ar}]$ de 18 électrons, les dix électrons restants se répartissent en $3\\mathrm{d}^8\\,4\\mathrm{s}^2$ dans la configuration fondamentale retenue : $[\\mathrm{Ar}]\\,3\\mathrm{d}^8\\,4\\mathrm{s}^2$.`,
      choiceExplanations: [
        `Cette écriture compte 28 électrons, mais $3\\mathrm{d}^{10}\\,4\\mathrm{s}^0$ ne correspond pas à la configuration fondamentale retenue pour le nickel neutre.`,
        `Le cœur $[\\mathrm{Ar}]$ contient 18 électrons et $3\\mathrm{d}^8\\,4\\mathrm{s}^2$ en ajoute dix : on obtient bien les 28 électrons du nickel.`,
        `Une sous-couche $3\\mathrm{p}$ ne peut contenir que six électrons ; l'écriture $3\\mathrm{p}^8$ est impossible.`,
        `La sous-couche $4\\mathrm{p}$ reste vide dans l'état fondamental du nickel ; les électrons concernés occupent $3\\mathrm{d}$.`,
      ],
    },
  {
      order: 53,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Parmi les propositions suivantes, quelle est la couche de valence de l'élément nickel ?`,
      choices: [
        `$\\mathrm{N}$.`,
        `$\\mathrm{L}$.`,
        `$\\mathrm{K}$.`,
        `$\\mathrm{M}$.`,
      ],
      correctChoiceIndexes: [0],
      explanation:
        `Avec la définition simplifiée retenue, la couche de valence est celle de plus grand nombre quantique principal occupé. Dans $[\\mathrm{Ar}]\\,3\\mathrm{d}^8\\,4\\mathrm{s}^2$, le plus grand $\\mathrm{n}$ est 4 : la couche de valence est donc $\\mathrm{N}$, même si les électrons $3\\mathrm{d}$ participent aussi à la chimie du nickel.`,
      choiceExplanations: [
        `La couche $\\mathrm{N}$ correspond à $\\mathrm{n}=4$ et contient les électrons externes $4\\mathrm{s}^2$.`,
        `La couche $\\mathrm{L}$, de nombre quantique principal 2, appartient au cœur électronique.`,
        `La couche $\\mathrm{K}$, de nombre quantique principal 1, est la couche la plus interne.`,
        `La couche $\\mathrm{M}$ contient $3\\mathrm{d}^8$, mais elle n'est pas la couche de plus grand $\\mathrm{n}$ dans la définition demandée.`,
      ],
    },
  {
      order: 54,
      difficulty: 'HARD',
      answerFormat: 'MULTIPLE',
      question:
        `Un composé organique inconnu est formé des éléments $\\mathrm{C}$, $\\mathrm{H}$ et $\\mathrm{Cl}$. La détermination expérimentale de sa masse molaire donne $M = 50\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ et une analyse montre qu'un échantillon de masse quelconque les contient dans les proportions massiques respectives 24 %, 6 % et 70 %. Déterminer la formule brute correspondant à cette espèce chimique.\n\nDonnées : $M_{\\mathrm{C}} = 12\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ ; $M_{\\mathrm{H}} = 1{,}0\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ ; $M_{\\mathrm{Cl}} = 35\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
      choices: [
        `$\\mathrm{C}_2\\mathrm{H}_5\\mathrm{Cl}$.`,
        `$\\mathrm{C}_2\\mathrm{H}_4\\mathrm{Cl}_2$.`,
        `$\\mathrm{CH}_3\\mathrm{Cl}$.`,
        `$\\mathrm{CH}_2\\mathrm{Cl}_2$.`,
      ],
      correctChoiceIndexes: [2],
      explanation:
        `On peut raisonner sur $100\\,\\mathrm{g}$ de composé : $n(\\mathrm{C})=24/12=2\\,\\mathrm{mol}$, $n(\\mathrm{H})=6/1=6\\,\\mathrm{mol}$ et $n(\\mathrm{Cl})=70/35=2\\,\\mathrm{mol}$. Le rapport molaire $2:6:2$ se simplifie en $1:3:1$, d'où la formule $\\mathrm{CH}_3\\mathrm{Cl}$, dont la masse molaire vaut $12+3+35=50\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
      choiceExplanations: [
        `$\\mathrm{C}_2\\mathrm{H}_5\\mathrm{Cl}$ a une masse molaire de $64\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ et ne respecte ni la masse molaire ni les proportions indiquées.`,
        `$\\mathrm{C}_2\\mathrm{H}_4\\mathrm{Cl}_2$ a une masse molaire de $98\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ et contient une proportion de chlore incompatible avec l'énoncé.`,
        `Le rapport des quantités de matière est $1:3:1$ et la masse molaire de $\\mathrm{CH}_3\\mathrm{Cl}$ est bien $50\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
        `$\\mathrm{CH}_2\\mathrm{Cl}_2$ a une masse molaire de $84\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ et contient beaucoup plus de chlore que les 70 % annoncés.`,
      ],
    },
  {
      order: 71,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Retrouver l'ordre dans lequel les éléments chimiques formant la deuxième période du tableau périodique sont rangés, par numéro atomique croissant :`,
      choices: [
        `$\\mathrm{Be}$, $\\mathrm{Li}$, $\\mathrm{B}$, $\\mathrm{C}$, $\\mathrm{O}$, $\\mathrm{N}$, $\\mathrm{F}$ et $\\mathrm{Ne}$.`,
        `$\\mathrm{B}$, $\\mathrm{Li}$, $\\mathrm{Be}$, $\\mathrm{C}$, $\\mathrm{O}$, $\\mathrm{N}$, $\\mathrm{F}$ et $\\mathrm{Ne}$.`,
        `$\\mathrm{Li}$, $\\mathrm{Be}$, $\\mathrm{B}$, $\\mathrm{C}$, $\\mathrm{N}$, $\\mathrm{O}$, $\\mathrm{F}$ et $\\mathrm{Ne}$.`,
        `$\\mathrm{B}$, $\\mathrm{Li}$, $\\mathrm{Be}$, $\\mathrm{C}$, $\\mathrm{N}$, $\\mathrm{O}$, $\\mathrm{F}$ et $\\mathrm{Ne}$.`,
      ],
      correctChoiceIndexes: [2],
      explanation:
        `Les éléments de la deuxième période, classés par numéro atomique croissant, sont : lithium, béryllium, bore, carbone, azote, oxygène, fluor puis néon, soit de $\\mathrm{Z}=3$ à $\\mathrm{Z}=10$.`,
      choiceExplanations: [
        `Le lithium ($\\mathrm{Z}=3$) vient avant le béryllium ($\\mathrm{Z}=4$), et l'azote ($\\mathrm{Z}=7$) vient avant l'oxygène ($\\mathrm{Z}=8$) ; cet ordre est donc incorrect.`,
        `Le bore ($\\mathrm{Z}=5$) ne peut pas précéder le lithium ($\\mathrm{Z}=3$) ni le béryllium ($\\mathrm{Z}=4$).`,
        `C'est bien l'ordre correct de la deuxième période : $\\mathrm{Li}$, $\\mathrm{Be}$, $\\mathrm{B}$, $\\mathrm{C}$, $\\mathrm{N}$, $\\mathrm{O}$, $\\mathrm{F}$, $\\mathrm{Ne}$.`,
        `Le bore ($\\mathrm{Z}=5$) ne peut pas venir avant le lithium ($\\mathrm{Z}=3$) et le béryllium ($\\mathrm{Z}=4$).`,
      ],
    },
  {
      order: 74,
      difficulty: 'HARD',
      answerFormat: 'MULTIPLE',
      question:
        `On donne la configuration électronique d'un atome : $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^{10}\\,4\\mathrm{s}^1$.`,
      choices: [
        `Cet atome n'est pas dans son état fondamental.`,
        `Le numéro atomique de cet atome est égal à $\\mathrm{Z} = 29$.`,
        `Cet élément se situe dans la quatrième période, dans la première colonne et dans le bloc $\\mathrm{s}$ du tableau périodique.`,
        `Dans l'approche retenue, sa couche de valence est la couche $\\mathrm{N}$ et elle contient un électron.`,
      ],
      correctChoiceIndexes: [1, 3],
      explanation:
        `La configuration comporte 29 électrons : elle correspond donc au cuivre $\\mathrm{Cu}$, dont l'état fondamental constitue une exception au remplissage usuel avec $3\\mathrm{d}^{10}\\,4\\mathrm{s}^1$. Le nombre quantique principal le plus élevé est $\\mathrm{n}=4$, ce qui place l'élément dans la quatrième période et définit ici la couche $\\mathrm{N}$ comme couche de valence. Le cuivre appartient toutefois au bloc $\\mathrm{d}$ et à la colonne 11, et non à la première colonne.`,
      choiceExplanations: [
        `Cette configuration est bien celle de l'état fondamental du cuivre : la sous-couche $3\\mathrm{d}$ est complète et la sous-couche $4\\mathrm{s}$ contient un électron.`,
        `La somme des électrons vaut $2+2+6+2+6+10+1=29$. Pour un atome neutre, ce total est égal au numéro atomique $\\mathrm{Z}$.`,
        `Le cuivre appartient à la quatrième période, dans le bloc $\\mathrm{d}$ et est situé dans la colonne 11.`,
        `Selon la définition retenue, la couche de valence est celle de plus grand nombre quantique principal. Ici, $\\mathrm{n}=4$ correspond à la couche $\\mathrm{N}$, qui contient l'électron $4\\mathrm{s}^1$.`,
      ],
    },
  {
      order: 75,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À partir des données de l'énoncé commun, quelles propositions sont exactes ?`,
      choices: [
        `Les deux nucléides possèdent 53 protons dans leur noyau.`,
        `Le nucléide $^{131}_{53}\\mathrm{I}$ possède 78 neutrons.`,
        `Un atome neutre de $^{131}_{53}\\mathrm{I}$ possède 131 électrons.`,
        `Les deux nucléides appartiennent au même élément chimique, car ils ont le même numéro atomique.`,
      ],
      correctChoiceIndexes: [0, 1, 3],
      explanation:
        `Le numéro atomique $\\mathrm{Z}=53$ fixe le nombre de protons et identifie l'élément iode. Pour $^{131}_{53}\\mathrm{I}$, le nombre de neutrons vaut $\\mathrm{N}=131-53=78$. Un atome neutre d'iode possède 53 électrons, quel que soit l'isotope considéré.`,
      choiceExplanations: [
        `Les deux écritures ont le même indice inférieur $\\mathrm{Z}=53$ : leurs noyaux contiennent donc chacun 53 protons.`,
        `Le nombre de neutrons vaut $\\mathrm{A}-\\mathrm{Z}=131-53=78$.`,
        `Dans un atome neutre, le nombre d'électrons est égal au nombre de protons, soit 53. Le nombre de masse 131 compte les nucléons, pas les électrons.`,
        `Le numéro atomique définit l'élément chimique. Les deux nucléides sont donc deux formes de l'élément iode.`,
      ],
    },
  {
      order: 76,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `Concernant les deux nucléides de l'énoncé commun, quelles propositions sont exactes ?`,
      choices: [
        `Ils sont isotopes l'un de l'autre.`,
        `Leurs propriétés chimiques sont voisines, car les atomes neutres correspondants possèdent le même nuage électronique.`,
        `Ils ont nécessairement les mêmes propriétés physiques, puisqu'ils appartiennent au même élément chimique.`,
        `La masse atomique moyenne de l'iode naturel est nécessairement égale à la moyenne simple $\\dfrac{127+131}{2}=129\\,\\mathrm{u}$.`,
      ],
      correctChoiceIndexes: [0, 1],
      explanation:
        `Des isotopes possèdent le même numéro atomique, mais des nombres de neutrons et des nombres de masse différents. Leur configuration électronique est identique à l'état neutre, ce qui explique leurs propriétés chimiques voisines. Leurs propriétés physiques peuvent différer, et la masse atomique moyenne dépend des abondances isotopiques, non d'une moyenne arithmétique systématique.`,
      choiceExplanations: [
        `Les deux nucléides ont le même $\\mathrm{Z}=53$ mais des nombres de masse différents : ce sont des isotopes.`,
        `Les atomes neutres correspondants possèdent chacun 53 électrons et la même configuration électronique ; leurs propriétés chimiques sont donc voisines.`,
        `La différence de masse peut entraîner des propriétés physiques différentes, même lorsque les propriétés chimiques restent proches.`,
        `Une masse atomique moyenne est une moyenne pondérée par les abondances naturelles des isotopes. Elle n'est égale à 129 u que si les deux isotopes sont présents en proportions égales.`,
      ],
    },
  {
      order: 77,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Le cobalt 60, noté $^{60}_{27}\\mathrm{Co}$, est un radionucléide utilisé dans certaines techniques de radiothérapie. On donne pour l'atome neutre de cobalt la configuration électronique $[\\mathrm{Ar}]\\,3\\mathrm{d}^{7}\\,4\\mathrm{s}^{2}$. Quelles propositions sont exactes ?`,
      choices: [
        `Le noyau de cobalt 60 contient 27 protons et 33 neutrons.`,
        `Un atome neutre de cobalt 60 possède 60 électrons.`,
        `La configuration donnée comporte 27 électrons et place le cobalt dans la quatrième période et dans le bloc $\\mathrm{d}$.`,
        `Le cobalt 59 et le cobalt 60 ont des propriétés chimiques très différentes, car ils ne possèdent pas le même nombre de neutrons.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `Pour $^{60}_{27}\\mathrm{Co}$, le noyau contient $\\mathrm{Z}=27$ protons et $\\mathrm{N}=60-27=33$ neutrons. L'atome neutre possède 27 électrons. La configuration $[\\mathrm{Ar}]\\,3\\mathrm{d}^{7}\\,4\\mathrm{s}^{2}$ totalise bien 27 électrons ; le plus grand nombre quantique principal occupé est $\\mathrm{n}=4$ et la sous-couche caractéristique est une sous-couche $\\mathrm{d}$. Les isotopes d'un même élément ont des propriétés chimiques voisines, car leurs atomes neutres possèdent le même nuage électronique.`,
      choiceExplanations: [
        `Le nombre de protons est donné par $\\mathrm{Z}=27$ et le nombre de neutrons vaut $\\mathrm{A}-\\mathrm{Z}=60-27=33$.`,
        `La neutralité impose autant d'électrons que de protons : l'atome neutre de cobalt possède 27 électrons, et non 60.`,
        `Le cœur $[\\mathrm{Ar}]$ contient 18 électrons ; $3\\mathrm{d}^{7}\\,4\\mathrm{s}^{2}$ en ajoute neuf. Le cobalt appartient à la période 4 et au bloc $\\mathrm{d}$.`,
        `Les deux isotopes possèdent le même numéro atomique et, à l'état neutre, la même configuration électronique. Leurs propriétés chimiques sont donc voisines malgré leur différence de masse.`,
      ],
    },
  {
      order: 78,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos de l'atome de calcium décrit dans l'énoncé commun :`,
      choices: [
        `Il possède 20 protons et 20 électrons.`,
        `Sa configuration électronique fondamentale peut s'écrire $\\mathrm{K}\\,\\mathrm{L}\\,3\\mathrm{s}^{2}\\,3\\mathrm{p}^{6}\\,4\\mathrm{s}^{2}$.`,
        `Sa couche de valence est la couche $\\mathrm{M}$, car la sous-couche $3\\mathrm{p}$ est complète.`,
        `Dans l'approche retenue, il possède deux électrons de valence.`,
      ],
      correctChoiceIndexes: [0, 1, 3],
      explanation:
        `Un atome neutre de calcium possède 20 protons et 20 électrons. Son remplissage conduit à $[\\mathrm{Ar}]\\,4\\mathrm{s}^{2}$, soit $\\mathrm{K}\\,\\mathrm{L}\\,3\\mathrm{s}^{2}\\,3\\mathrm{p}^{6}\\,4\\mathrm{s}^{2}$. La couche occupée de plus grand nombre quantique principal est $\\mathrm{n}=4$, la couche $\\mathrm{N}$, qui contient deux électrons de valence.`,
      choiceExplanations: [
        `Le numéro atomique fixe 20 protons et la neutralité de l'atome impose 20 électrons.`,
        `Les 20 électrons se répartissent jusqu'à la sous-couche $4\\mathrm{s}^{2}$.`,
        `La couche de valence est la couche occupée de plus grand $\\mathrm{n}$ : ici $\\mathrm{n}=4$, donc la couche $\\mathrm{N}$.`,
        `La couche externe contient les deux électrons $4\\mathrm{s}^{2}$.`,
      ],
    },
  {
      order: 79,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `La configuration électronique externe du calcium est $4\\mathrm{s}^{2}$. Parmi les quadruplets $(\\mathrm{n};\\ell;\\mathrm{m};\\mathrm{s})$ suivants, lesquels peuvent décrire l'un de ses deux électrons de valence ?`,
      choices: [
        `$(4;0;0;+\\dfrac{1}{2})$.`,
        `$(4;0;0;-\\dfrac{1}{2})$.`,
        `$(4;1;0;+\\dfrac{1}{2})$.`,
        `$(4;0;1;-\\dfrac{1}{2})$.`,
      ],
      correctChoiceIndexes: [0, 1],
      explanation:
        `Une sous-couche $4\\mathrm{s}$ est définie par $\\mathrm{n}=4$ et $\\ell=0$. Lorsque $\\ell=0$, la seule valeur possible de $\\mathrm{m}$ est 0. Les deux électrons occupant la même orbitale doivent avoir des spins opposés, $+\\dfrac{1}{2}$ et $-\\dfrac{1}{2}$.`,
      choiceExplanations: [
        `Ce quadruplet est autorisé pour un électron $4\\mathrm{s}$ : $\\mathrm{n}=4$, $\\ell=0$, $\\mathrm{m}=0$ et spin positif.`,
        `Ce quadruplet décrit le second électron de l'orbitale $4\\mathrm{s}$, avec le spin opposé au premier.`,
        `La valeur $\\ell=1$ correspond à une sous-couche $4\\mathrm{p}$, et non à la sous-couche $4\\mathrm{s}$.`,
        `Pour $\\ell=0$, le nombre quantique magnétique $\\mathrm{m}$ ne peut prendre que la valeur 0 ; $\\mathrm{m}=1$ est impossible.`,
      ],
    },
  {
      order: 80,
      difficulty: 'MEDIUM',
      answerFormat: 'SINGLE',
      question:
        `Le phosphore possède le numéro atomique $\\mathrm{Z}=15$. Choisir la représentation en cases quantiques de sa couche de valence dans l'état fondamental :`,
      choices: [
        {
          type: 'quantum-boxes',
          orbitals: [
            { label: '3\\mathrm{s}', boxes: ['pair'] },
            { label: '3\\mathrm{p}', boxes: ['up', 'up', 'up'] },
          ],
        },
        {
          type: 'quantum-boxes',
          orbitals: [
            { label: '3\\mathrm{s}', boxes: ['pair'] },
            { label: '3\\mathrm{p}', boxes: ['pair', 'up', 'empty'] },
          ],
        },
        {
          type: 'quantum-boxes',
          orbitals: [
            { label: '3\\mathrm{s}', boxes: ['up'] },
            { label: '3\\mathrm{p}', boxes: ['pair', 'up', 'up'] },
          ],
        },
        {
          type: 'quantum-boxes',
          orbitals: [
            { label: '3\\mathrm{s}', boxes: ['pair'] },
            { label: '3\\mathrm{p}', boxes: ['pair', 'pair', 'empty'] },
          ],
        },
      ],
      correctChoiceIndexes: [0],
      explanation:
        `Le phosphore possède la configuration $[\\mathrm{Ne}]\\,3\\mathrm{s}^{2}\\,3\\mathrm{p}^{3}$. La règle de Hund impose de placer d'abord un électron dans chacune des trois orbitales $3\\mathrm{p}$ avant tout appariement.`,
      choiceExplanations: [
        `Cette représentation correspond à $3\\mathrm{s}^{2}\\,3\\mathrm{p}^{3}$ et respecte la règle de Hund.`,
        `Le nombre d'électrons est correct, mais un doublet est formé alors qu'une orbitale $3\\mathrm{p}$ reste vide : la règle de Hund n'est pas respectée.`,
        `La sous-couche $3\\mathrm{s}$ doit être remplie avant la sous-couche $3\\mathrm{p}$ dans l'état fondamental.`,
        `Cette représentation correspond à six électrons de valence, et non aux cinq électrons du phosphore.`,
      ],
    },
  {
      order: 81,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Le phosphore possède la configuration électronique externe $3\\mathrm{s}^{2}\\,3\\mathrm{p}^{3}$. En considérant l'ensemble de la couche $\\mathrm{M}$, de nombre quantique principal $\\mathrm{n}=3$, quelles propositions sont exactes ?`,
      choices: [
        `La couche $\\mathrm{M}$ comprend au total neuf orbitales : une orbitale $3\\mathrm{s}$, trois orbitales $3\\mathrm{p}$ et cinq orbitales $3\\mathrm{d}$.`,
        `La couche $\\mathrm{M}$ peut contenir au maximum 18 électrons.`,
        `Dans l'atome de phosphore à l'état fondamental, toutes les orbitales de la couche $\\mathrm{M}$ sont occupées.`,
        `La répartition $3\\mathrm{p}^{3}$ comporte nécessairement un doublet, un électron célibataire et une orbitale vacante.`,
      ],
      correctChoiceIndexes: [0, 1],
      explanation:
        `Pour $\\mathrm{n}=3$, les valeurs possibles de $\\ell$ sont 0, 1 et 2, correspondant aux sous-couches $3\\mathrm{s}$, $3\\mathrm{p}$ et $3\\mathrm{d}$. Elles contiennent respectivement 1, 3 et 5 orbitales, soit 9 orbitales et une capacité maximale de 18 électrons. Dans le phosphore, seules $3\\mathrm{s}$ et $3\\mathrm{p}$ sont occupées ; conformément à la règle de Hund, les trois électrons $3\\mathrm{p}$ occupent trois orbitales différentes.`,
      choiceExplanations: [
        `Le nombre d'orbitales vaut $1+3+5=9$ pour les sous-couches $3\\mathrm{s}$, $3\\mathrm{p}$ et $3\\mathrm{d}$.`,
        `Chaque orbitale pouvant accueillir deux électrons, la capacité maximale est $9\\times2=18$ électrons.`,
        `Les cinq orbitales $3\\mathrm{d}$ sont vacantes dans l'état fondamental du phosphore.`,
        `La règle de Hund impose ici trois électrons célibataires répartis dans les trois orbitales $3\\mathrm{p}$, sans doublet.`,
      ],
    },
  {
      order: 82,
      difficulty: 'MEDIUM',
      answerFormat: 'SINGLE',
      question:
        `Le bore 10 est utilisé dans la thérapie par capture neutronique du bore. On modélise le bore naturel comme un mélange de $^{10}\\mathrm{B}$ de masse $10\\,\\mathrm{u}$ et de $^{11}\\mathrm{B}$ de masse $11\\,\\mathrm{u}$. Sa masse atomique moyenne vaut environ $10{,}8\\,\\mathrm{u}$. La proportion approximative de $^{10}\\mathrm{B}$ dans ce mélange est :`,
      choices: [
        `10 %.`,
        `20 %.`,
        `50 %.`,
        `80 %.`,
      ],
      correctChoiceIndexes: [1],
      explanation:
        `Si $x$ est la proportion de $^{10}\\mathrm{B}$, la proportion de $^{11}\\mathrm{B}$ vaut $1-x$. La moyenne vérifie $10x+11(1-x)=10{,}8$, soit $11-x=10{,}8$ et donc $x=0{,}20$. Le mélange contient ainsi environ 20 % de bore 10.`,
      choiceExplanations: [
        `Avec 10 % de $^{10}\\mathrm{B}$, la masse moyenne serait $10{,}9\\,\\mathrm{u}$.`,
        `La relation $10x+11(1-x)=10{,}8$ donne $x=0{,}20$, soit 20 %.`,
        `Une répartition à parts égales conduirait à une masse moyenne de $10{,}5\\,\\mathrm{u}$.`,
        `Une proportion de 80 % de $^{10}\\mathrm{B}$ donnerait une masse moyenne proche de $10{,}2\\,\\mathrm{u}$.`,
      ],
    },
  {
      order: 83,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Le sélénium $\\mathrm{Se}$ est cité parmi les éléments présents à l'état de traces dans le vivant. On donne sa configuration électronique fondamentale : $[\\mathrm{Ar}]\\,3\\mathrm{d}^{10}\\,4\\mathrm{s}^{2}\\,4\\mathrm{p}^{4}$. Quelles propositions sont exactes ?`,
      choices: [
        `Son numéro atomique est $\\mathrm{Z}=34$.`,
        `Il appartient à la quatrième période, à la seizième colonne et au bloc $\\mathrm{p}$.`,
        `Dans l'approche retenue, il possède six électrons de valence.`,
        `La présence de la sous-couche $3\\mathrm{d}^{10}$ suffit à classer le sélénium parmi les métaux de transition.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Le cœur $[\\mathrm{Ar}]$ contient 18 électrons ; l'ajout de $3\\mathrm{d}^{10}\\,4\\mathrm{s}^{2}\\,4\\mathrm{p}^{4}$ conduit à $18+10+2+4=34$ électrons. Le plus grand $\\mathrm{n}$ est 4 et la configuration externe $4\\mathrm{s}^{2}\\,4\\mathrm{p}^{4}$ correspond à six électrons de valence, à la colonne 16 et au bloc $\\mathrm{p}$.`,
      choiceExplanations: [
        `Le total des électrons vaut $18+10+2+4=34$ ; pour l'atome neutre, ce total est égal à $\\mathrm{Z}$.`,
        `La couche externe est la couche 4 et la dernière sous-couche occupée appartient au bloc $\\mathrm{p}$ ; $\\mathrm{n}\\mathrm{s}^{2}\\,\\mathrm{n}\\mathrm{p}^{4}$ correspond à la colonne 16.`,
        `La couche externe contient $4\\mathrm{s}^{2}\\,4\\mathrm{p}^{4}$, soit six électrons.`,
        `Les électrons $3\\mathrm{d}^{10}$ appartiennent à une sous-couche interne complète. Le sélénium est un élément du bloc $\\mathrm{p}$, pas un métal de transition.`,
      ],
    },
  {
      order: 84,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Le gadolinium $\\mathrm{Gd}$ entre dans la composition de certains produits de contraste utilisés en imagerie par résonance magnétique. Son numéro atomique est $\\mathrm{Z}=64$ et sa configuration électronique fondamentale peut s'écrire $[\\mathrm{Xe}]\\,4\\mathrm{f}^{7}\\,5\\mathrm{d}^{1}\\,6\\mathrm{s}^{2}$. Quelles propositions sont exactes ?`,
      choices: [
        `La configuration donnée totalise 64 électrons pour l'atome neutre.`,
        `Le gadolinium appartient à la sixième période de la classification périodique.`,
        `Le gadolinium appartient à la série des lanthanides, généralement représentée dans le bloc $\\mathrm{f}$ sous le tableau principal.`,
        `Le cœur électronique $[\\mathrm{Xe}]$ implique que le gadolinium appartient à la colonne 18 des gaz rares.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Le cœur $[\\mathrm{Xe}]$ contient 54 électrons ; les termes $4\\mathrm{f}^{7}$, $5\\mathrm{d}^{1}$ et $6\\mathrm{s}^{2}$ en ajoutent dix, soit 64 électrons au total. Le plus grand nombre quantique principal occupé est $\\mathrm{n}=6$, ce qui situe le gadolinium dans la sixième période. Il appartient aux lanthanides, série du bloc $\\mathrm{f}$ généralement placée sous le tableau principal. La notation abrégée par le cœur xénon ne transforme pas l'élément en gaz rare.`,
      choiceExplanations: [
        `Le total vaut $54+7+1+2=64$ électrons, conformément au numéro atomique de l'atome neutre.`,
        `La présence de la sous-couche $6\\mathrm{s}$ occupée montre que le plus grand $\\mathrm{n}$ vaut 6.`,
        `Le gadolinium fait partie des lanthanides, aussi appelés terres rares, rattachés au bloc $\\mathrm{f}$.`,
        `Le symbole $[\\mathrm{Xe}]$ représente seulement un cœur électronique interne. La position de l'élément dépend de l'ensemble de sa configuration.`,
      ],
    },
];
