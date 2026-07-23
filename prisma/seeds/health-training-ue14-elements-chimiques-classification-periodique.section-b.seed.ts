import type { SeedQuestion } from './health-training-ue14.shared';

export const SECTION_B_QUESTIONS: SeedQuestion[] = [
  {
      order: 5,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `À propos des couches, sous-couches et orbitales :`,
      choices: [
        `La couche $\\mathrm{M}$ comporte les sous-couches $3\\mathrm{s}$, $3\\mathrm{p}$ et $3\\mathrm{d}$.`,
        `Une sous-couche $\\mathrm{p}$ contient trois orbitales.`,
        `Une orbitale peut contenir au maximum deux électrons.`,
        `Une sous-couche $\\mathrm{s}$ correspond à $\\ell = 1$.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Une couche de nombre quantique principal $\\mathrm{n}$ contient les sous-couches correspondant à $\\ell = 0$ jusqu'à $\\ell = \\mathrm{n}-1$. Une sous-couche contient $2\\ell+1$ orbitales, et chaque orbitale peut accueillir au maximum deux électrons.`,
      choiceExplanations: [
        `La couche $\\mathrm{M}$ correspond à $\\mathrm{n} = 3$ ; elle peut donc contenir les sous-couches $3\\mathrm{s}$, $3\\mathrm{p}$ et $3\\mathrm{d}$.`,
        `Pour une sous-couche $\\mathrm{p}$, $\\ell = 1$ et le nombre d'orbitales vaut $2\\ell+1 = 3$.`,
        `Le principe d'exclusion de Pauli limite l'occupation d'une orbitale à deux électrons de spins opposés.`,
        `La lettre $\\mathrm{s}$ correspond à $\\ell = 0$ ; $\\ell = 1$ correspond à une sous-couche $\\mathrm{p}$.`,
      ],
    },
  {
      order: 6,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `À propos des nombres quantiques et du remplissage :`,
      choices: [
        `Le nombre quantique principal $\\mathrm{n}$ définit la couche électronique.`,
        `Une couche $\\mathrm{n}$ comporte $\\mathrm{n}$ sous-couches.`,
        `En cas d'égalité de $\\mathrm{n} + \\ell$, la sous-couche de plus grand $\\mathrm{n}$ se remplit d'abord.`,
        `La règle de Hund conduit d'abord à placer un électron par orbitale dans une sous-couche donnée.`,
      ],
      correctChoiceIndexes: [0, 1, 3],
      explanation:
        `Le remplissage électronique suit l'ordre croissant d'énergie des sous-couches. La règle de Klechkowski classe d'abord selon $\\mathrm{n}+\\ell$, puis selon le plus petit $\\mathrm{n}$ en cas d'égalité ; la règle de Hund impose ensuite l'occupation séparée des orbitales dégénérées avant l'appariement.`,
      choiceExplanations: [
        `Le nombre quantique principal $\\mathrm{n}$ identifie la couche électronique.`,
        `Pour une valeur donnée de $\\mathrm{n}$, $\\ell$ peut prendre $\\mathrm{n}$ valeurs, de $0$ à $\\mathrm{n}-1$ : la couche comporte donc $\\mathrm{n}$ sous-couches.`,
        `À égalité de $\\mathrm{n}+\\ell$, la sous-couche de plus petit $\\mathrm{n}$ est la plus basse en énergie et se remplit en premier.`,
        `Dans une même sous-couche, les électrons occupent d'abord les orbitales une par une, avec des spins parallèles, avant de former des doublets.`,
      ],
    },
  {
      order: 7,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `À propos des configurations électroniques suivantes :`,
      choices: [
        `$\\ce{H}$ a pour configuration $1\\mathrm{s}^1$.`,
        `$\\ce{Ne}$ a pour configuration $\\mathrm{K}\\,\\mathrm{L}$.`,
        `$\\ce{Li}$ possède deux électrons sur sa couche de valence.`,
        `Pour $\\ce{Fe}$, dans la convention simplifiée retenue, la couche de valence est $4\\mathrm{s}^2$.`,
      ],
      correctChoiceIndexes: [0, 1, 3],
      explanation: null,
      choiceExplanations: [
        `L'hydrogène possède un seul électron ; sa configuration fondamentale est donc $1\\mathrm{s}^1$.`,
        `Le néon possède dix électrons : les couches $\\mathrm{K}$ et $\\mathrm{L}$ sont complètes, soit $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6$.`,
        `Le lithium a pour configuration $1\\mathrm{s}^2\\,2\\mathrm{s}^1$ : il ne possède qu'un électron sur sa couche de valence.`,
        `Dans la convention simplifiée retenue, les électrons de la couche externe du fer sont les deux électrons $4\\mathrm{s}^2$.`,
      ],
    },
  {
      order: 28,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos des nombres quantiques :`,
      choices: [
        `Le nombre quantique principal $\\mathrm{n}$ repère la couche électronique.`,
        `Pour $\\mathrm{n} = 2$, le nombre quantique $\\ell$ peut prendre les valeurs $0$, $1$ et $2$.`,
        `Pour $\\ell = 1$, le nombre quantique magnétique $\\mathrm{m}$ peut prendre trois valeurs : $-1$, $0$ et $+1$.`,
        `Le spin d'un électron ne peut prendre que la valeur $+\\dfrac{1}{2}$.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `Les quatre nombres quantiques décrivent l'état d'un électron : $\\mathrm{n}$ pour la couche, $\\ell$ pour la sous-couche, $\\mathrm{m}$ pour l'orbitale et $\\mathrm{s}$ pour le spin. Les valeurs autorisées sont contraintes par $0\\leq\\ell\\leq\\mathrm{n}-1$, $-\\ell\\leq\\mathrm{m}\\leq+\\ell$ et $\\mathrm{s}=\\pm\\dfrac12$.`,
      choiceExplanations: [
        `Le nombre quantique principal $\\mathrm{n}$ repère bien la couche électronique.`,
        `Pour $\\mathrm{n}=2$, $\\ell$ peut seulement valoir 0 ou 1 ; la valeur 2 est interdite car $\\ell\\leq\\mathrm{n}-1$.`,
        `Lorsque $\\ell=1$, $\\mathrm{m}$ prend les trois valeurs entières de $-1$ à $+1$.`,
        `Le nombre quantique de spin peut prendre deux valeurs : $+\\dfrac12$ ou $-\\dfrac12$.`,
      ],
    },
  {
      order: 29,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos des sous-couches et des orbitales :`,
      choices: [
        `L'écriture $4\\mathrm{f}$ signifie que $\\mathrm{n} = 4$ et $\\ell = 3$.`,
        `Une sous-couche $\\mathrm{d}$ contient $2\\ell$ orbitales, soit 4 orbitales.`,
        `Une sous-couche $\\mathrm{p}$ comporte trois orbitales.`,
        `Une orbitale peut contenir au maximum 3 électrons.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `La lettre de la sous-couche traduit la valeur de $\\ell$ : $\\mathrm{s}=0$, $\\mathrm{p}=1$, $\\mathrm{d}=2$ et $\\mathrm{f}=3$. Une sous-couche contient $2\\ell+1$ orbitales et peut donc accueillir au maximum $2(2\\ell+1)$ électrons.`,
      choiceExplanations: [
        `Dans $4\\mathrm{f}$, le chiffre 4 donne $\\mathrm{n}=4$ et la lettre $\\mathrm{f}$ correspond à $\\ell=3$.`,
        `Le nombre d'orbitales vaut $2\\ell+1$ : pour une sous-couche $\\mathrm{d}$, $\\ell=2$ et il y a donc 5 orbitales, pas 4.`,
        `Une sous-couche $\\mathrm{p}$ possède $2\\times1+1=3$ orbitales.`,
        `Une orbitale individuelle ne peut contenir que deux électrons au maximum, avec des spins opposés.`,
      ],
    },
  {
      order: 30,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos des nombres quantiques :`,
      choices: [
        `Le nombre quantique principal $\\mathrm{n}$ indique la couche électronique occupée par l'électron.`,
        `Le nombre quantique secondaire $\\ell$ indique le nombre total d'électrons de l'atome.`,
        `Le nombre quantique magnétique $\\mathrm{m}$ indique la charge électrique de l'électron.`,
        `Le nombre quantique de spin $\\mathrm{s}$ indique la distance exacte entre l'électron et le noyau.`,
      ],
      correctChoiceIndexes: [0],
      explanation:
        `Les nombres quantiques ne décrivent ni une trajectoire ni une position exacte. Ils caractérisent la couche $\\mathrm{n}$, la sous-couche $\\ell$, l'orientation de l'orbitale $\\mathrm{m}$ et le spin de l'électron $\\mathrm{s}$.`,
      choiceExplanations: [
        `Le nombre quantique principal $\\mathrm{n}$ indique bien la couche à laquelle appartient l'électron.`,
        `Le nombre quantique secondaire $\\ell$ caractérise la sous-couche et la forme de l'orbitale, pas le nombre total d'électrons de l'atome.`,
        `Le nombre quantique magnétique $\\mathrm{m}$ distingue les orientations orbitalaires possibles ; la charge de l'électron est toujours la même.`,
        `Le spin caractérise un degré de liberté quantique de l'électron et ne fournit aucune distance exacte au noyau.`,
      ],
    },
  {
      order: 31,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos du nombre quantique secondaire $\\ell$ :`,
      choices: [
        `Il précise le type de sous-couche occupée par l'électron : $\\mathrm{s}$, $\\mathrm{p}$, $\\mathrm{d}$ ou $\\mathrm{f}$.`,
        `Il intervient dans la forme générale de l'orbitale associée.`,
        `Il donne le nombre de protons contenus dans le noyau.`,
        `Il précise le sens du spin de l'électron.`,
      ],
      correctChoiceIndexes: [0, 1],
      explanation:
        `Le nombre quantique secondaire $\\ell$ détermine le type de sous-couche et participe à la forme de l'orbitale : $\\ell=0,1,2,3$ correspondent respectivement à $\\mathrm{s}$, $\\mathrm{p}$, $\\mathrm{d}$ et $\\mathrm{f}$. Il ne renseigne ni sur le noyau ni sur le spin.`,
      choiceExplanations: [
        `La valeur de $\\ell$ permet d'identifier la sous-couche $\\mathrm{s}$, $\\mathrm{p}$, $\\mathrm{d}$ ou $\\mathrm{f}$.`,
        `Le nombre quantique $\\ell$ est associé au moment cinétique orbital et à la forme générale de l'orbitale.`,
        `Le nombre de protons est donné par le numéro atomique $\\mathrm{Z}$, indépendamment des nombres quantiques électroniques.`,
        `Le sens du spin est décrit par le nombre quantique de spin $\\mathrm{s}$, et non par $\\ell$.`,
      ],
    },
  {
      order: 32,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `Parmi les configurations électroniques suivantes :`,
      choices: [
        `$\\mathrm{C}\\,(\\mathrm{Z} = 6) : \\mathrm{K}\\,2\\mathrm{s}^2\\,2\\mathrm{p}^2$.`,
        `$\\mathrm{F}\\,(\\mathrm{Z} = 9) : \\mathrm{K}\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6$.`,
        `$\\mathrm{Na}\\,(\\mathrm{Z} = 11) : \\mathrm{K}\\,\\mathrm{L}\\,3\\mathrm{s}^1$.`,
        `$\\mathrm{Al}\\,(\\mathrm{Z} = 13) : \\mathrm{K}\\,\\mathrm{L}\\,3\\mathrm{s}^2\\,3\\mathrm{p}^2$.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `Pour un atome neutre, on répartit exactement $\\mathrm{Z}$ électrons selon l'ordre de remplissage. Les configurations attendues sont ici $\\mathrm{C}:1\\mathrm{s}^2 2\\mathrm{s}^2 2\\mathrm{p}^2$, $\\mathrm{F}:1\\mathrm{s}^2 2\\mathrm{s}^2 2\\mathrm{p}^5$, $\\mathrm{Na}:\\mathrm{K}\\mathrm{L}3\\mathrm{s}^1$ et $\\mathrm{Al}:\\mathrm{K}\\mathrm{L}3\\mathrm{s}^2 3\\mathrm{p}^1$.`,
      choiceExplanations: [
        `Le carbone possède six électrons : deux sur $1\\mathrm{s}$, deux sur $2\\mathrm{s}$ et deux sur $2\\mathrm{p}$.`,
        `Cette proposition compte dix électrons et correspond au néon ; le fluor n'en a que neuf et se termine par $2\\mathrm{p}^5$.`,
        `Après les couches $\\mathrm{K}$ et $\\mathrm{L}$ complètes, le onzième électron du sodium occupe $3\\mathrm{s}$.`,
        `L'aluminium possède treize électrons et se termine par $3\\mathrm{s}^2 3\\mathrm{p}^1$ ; $3\\mathrm{p}^2$ donnerait quatorze électrons.`,
      ],
    },
  {
      order: 33,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos du nombre quantique principal $\\mathrm{n}$ :`,
      choices: [
        `Il indique la couche électronique occupée par l'électron.`,
        `Il donne une indication sur le niveau d'énergie de l'électron.`,
        `Il indique la position exacte de l'électron autour du noyau.`,
        `Il donne le nombre de neutrons de l'atome.`,
      ],
      correctChoiceIndexes: [0, 1],
      explanation: null,
      choiceExplanations: [
        `Le nombre quantique principal $\\mathrm{n}$ repère la couche électronique.`,
        `En général, une augmentation de $\\mathrm{n}$ correspond à des niveaux électroniques plus élevés et à une extension spatiale plus grande.`,
        `La mécanique quantique ne fournit pas une position exacte ou une trajectoire définie de l'électron.`,
        `Le nombre de neutrons est une propriété du noyau donnée par $\\mathrm{A}-\\mathrm{Z}$, sans lien avec $\\mathrm{n}$.`,
      ],
    },
  {
      order: 34,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `Choisir la configuration électronique correspondant à un atome d'azote dans son état fondamental :`,
      choices: [
        {
          type: 'quantum-boxes',
          orbitals: [
            { label: '1\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{s}', boxes: ['empty'] },
            { label: '2\\mathrm{p}', boxes: ['pair', 'pair', 'up'] },
          ],
        },
        {
          type: 'quantum-boxes',
          orbitals: [
            { label: '1\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{s}', boxes: ['up'] },
            { label: '2\\mathrm{p}', boxes: ['pair', 'pair', 'empty'] },
          ],
        },
        {
          type: 'quantum-boxes',
          orbitals: [
            { label: '1\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{p}', boxes: ['pair', 'up', 'empty'] },
          ],
        },
        {
          type: 'quantum-boxes',
          orbitals: [
            { label: '1\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{p}', boxes: ['up', 'up', 'up'] },
          ],
        },
      ],
      correctChoiceIndexes: [3],
      explanation:
        `L'azote possède sept électrons : sa configuration fondamentale est $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^3$. Dans $2\\mathrm{p}$, la règle de Hund impose un électron dans chacune des trois orbitales, avec des spins parallèles, avant tout appariement : $[\\uparrow][\\uparrow][\\uparrow]$.`,
      choiceExplanations: [
        `Cette représentation laisse $2\\mathrm{s}$ vide alors que cette sous-couche, plus basse en énergie, doit être remplie avant $2\\mathrm{p}$.`,
        `Elle ne remplit pas complètement $2\\mathrm{s}$ avant $2\\mathrm{p}$ et apparie déjà des électrons dans $2\\mathrm{p}$ : elle ne décrit pas l'état fondamental.`,
        `Le nombre total d'électrons est correct, mais le doublet formé dans $2\\mathrm{p}$ viole la règle de Hund puisque la troisième orbitale est encore vide.`,
        `Cette représentation correspond bien à $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^3$ et respecte la règle de Hund.`,
      ],
    },
  {
      order: 35,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos des correspondances entre $\\ell$ et les sous-couches :`,
      choices: [
        `$\\ell = 0$ correspond à une sous-couche $\\mathrm{s}$.`,
        `$\\ell = 1$ correspond à une sous-couche $\\mathrm{p}$.`,
        `$\\ell = 2$ correspond à une sous-couche $\\mathrm{d}$.`,
        `Tous les items précédents sont faux.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation: null,
      choiceExplanations: [
        `La sous-couche $\\mathrm{s}$ est définie par $\\ell=0$.`,
        `La sous-couche $\\mathrm{p}$ est définie par $\\ell=1$.`,
        `La sous-couche $\\mathrm{d}$ est définie par $\\ell=2$ ; la sous-couche $\\mathrm{f}$ correspondrait à $\\ell=3$.`,
        `Les trois premières correspondances étant exactes, l'affirmation selon laquelle elles seraient toutes fausses est incorrecte.`,
      ],
    },
  {
      order: 36,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `On donne la configuration électronique simplifiée du zinc : $\\mathrm{K}\\,\\mathrm{L}\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,4\\mathrm{s}^2\\,3\\mathrm{d}^{10}$. À propos de sa couche de valence :`,
      choices: [
        `La couche de valence du zinc est la couche $\\mathrm{N}$.`,
        `La couche de valence du zinc est la couche $\\mathrm{M}$, car la dernière sous-couche remplie est $3\\mathrm{d}^{10}$.`,
        `Dans cette approche, le zinc possède 2 électrons de valence.`,
        `La couche de valence correspond à la couche de nombre $\\mathrm{n}$ le plus élevé.`,
      ],
      correctChoiceIndexes: [0, 2, 3],
      explanation:
        `Dans la convention simplifiée retenue, la couche de valence est la couche occupée de plus grand nombre quantique principal $\\mathrm{n}$. Pour le zinc, la valeur maximale est $\\mathrm{n}=4$ : la couche de valence est donc $\\mathrm{N}$ et contient les deux électrons $4\\mathrm{s}^2$. Les électrons $3\\mathrm{d}^{10}$ peuvent toutefois intervenir dans une description plus complète de la chimie des métaux de transition.`,
      choiceExplanations: [
        `La couche $\\mathrm{N}$ correspond à $\\mathrm{n}=4$, valeur la plus élevée présente dans la configuration du zinc.`,
        `La dernière sous-couche écrite ou remplie ne suffit pas à définir la couche externe : $3\\mathrm{d}$ appartient à $\\mathrm{n}=3$, alors que $4\\mathrm{s}$ appartient à $\\mathrm{n}=4$.`,
        `Dans l'approche retenue ici, les deux électrons de la couche externe sont les électrons $4\\mathrm{s}^2$.`,
        `La couche de valence est bien identifiée ici par le plus grand nombre quantique principal occupé, soit $\\mathrm{n}=4$.`,
      ],
    },
  {
      order: 37,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `Pour une couche de nombre quantique principal $\\mathrm{n} = 2$ :`,
      choices: [
        `La sous-couche $2\\mathrm{s}$ peut exister.`,
        `La sous-couche $2\\mathrm{p}$ peut exister.`,
        `La sous-couche $2\\mathrm{d}$ peut exister.`,
        `Pour $\\mathrm{n} = 2$, $\\ell$ peut valoir $0$ ou $1$.`,
      ],
      correctChoiceIndexes: [0, 1, 3],
      explanation:
        `Pour une couche donnée, le nombre quantique secondaire vérifie $0\\leq\\ell\\leq\\mathrm{n}-1$. Lorsque $\\mathrm{n}=2$, seules les valeurs $\\ell=0$ et $\\ell=1$ sont possibles, correspondant aux sous-couches $2\\mathrm{s}$ et $2\\mathrm{p}$.`,
      choiceExplanations: [
        `La valeur $\\ell=0$ est autorisée pour $\\mathrm{n}=2$ et correspond à la sous-couche $2\\mathrm{s}$.`,
        `La valeur $\\ell=1$ est autorisée pour $\\mathrm{n}=2$ et correspond à la sous-couche $2\\mathrm{p}$.`,
        `Une sous-couche $\\mathrm{d}$ exige $\\ell=2$, valeur interdite lorsque $\\mathrm{n}=2$ puisque $\\ell$ doit être au plus égal à 1.`,
        `La règle $\\ell=0,\\ldots,\\mathrm{n}-1$ donne bien les deux valeurs 0 et 1.`,
      ],
    },
  {
      order: 38,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos d'une orbitale atomique :`,
      choices: [
        `Elle peut contenir au maximum 2 électrons.`,
        `Elle peut contenir au maximum 6 électrons.`,
        `Elle correspond toujours à une couche complète.`,
        `Elle correspond toujours à un électron célibataire.`,
      ],
      correctChoiceIndexes: [0],
      explanation: null,
      choiceExplanations: [
        `Une orbitale peut accueillir zéro, un ou deux électrons ; deux électrons qui l'occupent doivent avoir des spins opposés.`,
        `Six électrons constituent la capacité maximale d'une sous-couche $\\mathrm{p}$ entière, formée de trois orbitales, et non d'une seule orbitale.`,
        `Une orbitale est une composante d'une sous-couche ; elle ne représente pas à elle seule une couche électronique complète.`,
        `Une orbitale peut être vide, contenir un électron célibataire ou contenir un doublet : elle n'est donc pas toujours associée à un électron célibataire.`,
      ],
    },
  {
      order: 39,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos de la règle de Hund :`,
      choices: [
        `Les électrons occupent d'abord séparément les orbitales d'une même sous-couche.`,
        `Les doublets se forment après occupation simple des orbitales disponibles.`,
        `On place obligatoirement deux électrons dans la première orbitale avant de passer à la suivante.`,
        `Une orbitale peut contenir trois électrons si la sous-couche n'est pas pleine.`,
      ],
      correctChoiceIndexes: [0, 1],
      explanation:
        `La règle de Hund s'applique aux orbitales de même énergie d'une sous-couche : les électrons les occupent d'abord séparément avec des spins parallèles, puis les doublets se forment. Elle ne modifie pas la limite de deux électrons par orbitale imposée par Pauli.`,
      choiceExplanations: [
        `Les orbitales équivalentes d'une sous-couche reçoivent d'abord chacune un électron avant tout appariement.`,
        `Un doublet n'apparaît qu'une fois toutes les orbitales disponibles occupées individuellement.`,
        `Remplir immédiatement la première orbitale avec deux électrons alors que d'autres sont vides est précisément contraire à la règle de Hund.`,
        `Aucune orbitale ne peut contenir trois électrons, même si la sous-couche n'est pas complète.`,
      ],
    },
  {
      order: 40,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `Choisir la configuration électronique correspondant à un atome d'oxygène dans son état fondamental :`,
      choices: [
        {
          type: 'quantum-boxes',
          orbitals: [
            { label: '1\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{p}', boxes: ['pair', 'up', 'up'] },
          ],
        },
        {
          type: 'quantum-boxes',
          orbitals: [
            { label: '1\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{p}', boxes: ['pair', 'pair', 'empty'] },
          ],
        },
        {
          type: 'quantum-boxes',
          orbitals: [
            { label: '1\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{s}', boxes: ['up'] },
            { label: '2\\mathrm{p}', boxes: ['pair', 'pair', 'up'] },
          ],
        },
        {
          type: 'quantum-boxes',
          orbitals: [
            { label: '1\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{s}', boxes: ['empty'] },
            { label: '2\\mathrm{p}', boxes: ['pair', 'pair', 'pair'] },
          ],
        },
      ],
      correctChoiceIndexes: [0],
      explanation:
        `L'oxygène possède huit électrons, soit $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^4$. Après avoir placé un électron dans chacune des trois orbitales $2\\mathrm{p}$, le quatrième forme un premier doublet : la répartition fondamentale est donc $[\\uparrow\\downarrow][\\uparrow][\\uparrow]$, à permutation des orbitales près.`,
      choiceExplanations: [
        `Cette représentation compte bien quatre électrons dans $2\\mathrm{p}$ et respecte la règle de Hund : un seul doublet et deux électrons célibataires.`,
        `Deux orbitales sont déjà appariées alors que la troisième est vide ; cette distribution viole la règle de Hund.`,
        `Le nombre total d'électrons est huit, mais $2\\mathrm{s}$ doit être complète avant que cinq électrons occupent $2\\mathrm{p}$ : ce n'est pas l'état fondamental.`,
        `Cette représentation remplit $2\\mathrm{p}$ tout en laissant $2\\mathrm{s}$ vide, en contradiction avec l'ordre énergétique de remplissage.`,
      ],
    },
  {
      order: 41,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Dans l'hypothèse où la configuration électronique $\\mathrm{K}\\,\\mathrm{L}$ [[QUESTION_DIAGRAM]] correspond à un atome dans son état fondamental, quel principe ou quelle règle permettant d'établir une configuration électronique n'est pas respecté(e) ?`,
      questionDiagram: {
        type: 'quantum-boxes',
        orbitals: [
          { label: '3\\mathrm{s}', boxes: ['pair'] },
          { label: '3\\mathrm{p}', boxes: ['pair', 'up', 'empty'] },
        ],
      },
      choices: [
        `Hund`,
        `Klechkowski`,
        `Pauli`,
        `Bohr`,
      ],
      correctChoiceIndexes: [0],
      explanation:
        `Le diagramme représente $3\\mathrm{p}^3$ sous la forme d'un doublet, d'un électron célibataire et d'une orbitale vide. La règle de Hund exige au contraire trois occupations simples parallèles, une dans chaque orbitale $3\\mathrm{p}$ ; c'est donc cette règle qui est violée.`,
      choiceExplanations: [
        `La règle de Hund n'est pas respectée : les trois électrons $3\\mathrm{p}$ devraient occuper séparément les trois orbitales avant tout appariement.`,
        `Les sous-couches $3\\mathrm{s}$ puis $3\\mathrm{p}$ sont occupées dans le bon ordre énergétique ; la règle de Klechkowski n'est pas en cause.`,
        `Le doublet d'une même orbitale peut respecter Pauli s'il contient deux électrons de spins opposés ; l'anomalie porte ici sur la répartition entre orbitales.`,
        `Le modèle de Bohr décrit des niveaux d'énergie, mais il ne fournit pas la règle de répartition des électrons entre les trois orbitales $\\mathrm{p}$.`,
      ],
    },
  {
      order: 42,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos d'une orbitale atomique, quelles propositions sont exactes ?`,
      choices: [
        `Une orbitale atomique correspond à une zone où la probabilité de présence de l'électron est élevée.`,
        `Une orbitale atomique décrit la trajectoire précise suivie par l'électron autour du noyau.`,
        `Une orbitale atomique permet de connaître avec certitude la position exacte de l'électron à chaque instant.`,
        `Une orbitale atomique peut contenir au maximum deux électrons.`,
      ],
      correctChoiceIndexes: [0, 3],
      explanation:
        `Une orbitale atomique est décrite par une fonction d'onde et correspond, dans une représentation simplifiée, à une région où la probabilité de présence de l'électron est importante. Elle ne constitue ni une trajectoire classique ni une position certaine, et elle peut accueillir au maximum deux électrons.`,
      choiceExplanations: [
        `Une orbitale délimite conventionnellement une région de forte probabilité de présence de l'électron.`,
        `L'électron n'y suit pas une trajectoire précise analogue à l'orbite d'une planète.`,
        `La description quantique ne permet pas d'assigner avec certitude une position exacte à chaque instant.`,
        `Deux électrons au maximum peuvent partager une orbitale, à condition d'avoir des spins opposés.`,
      ],
    },
  {
      order: 43,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos de la forme des orbitales atomiques, quelles propositions sont exactes ?`,
      choices: [
        `Une orbitale $\\mathrm{s}$ a une forme globalement sphérique.`,
        `Une orbitale $\\mathrm{p}$ est généralement représentée par deux lobes orientés dans l'espace.`,
        `Toutes les orbitales atomiques ont exactement la même forme.`,
        `La forme de l'orbitale dépend notamment du type de sous-couche : $\\mathrm{s}$, $\\mathrm{p}$, $\\mathrm{d}$ ou $\\mathrm{f}$.`,
      ],
      correctChoiceIndexes: [0, 1, 3],
      explanation:
        `La forme d'une orbitale dépend notamment du nombre quantique secondaire $\\ell$. Les orbitales $\\mathrm{s}$ sont globalement sphériques, les orbitales $\\mathrm{p}$ présentent deux lobes séparés par un plan nodal, et les orbitales $\\mathrm{d}$ ou $\\mathrm{f}$ ont des géométries plus complexes.`,
      choiceExplanations: [
        `La densité de probabilité d'une orbitale $\\mathrm{s}$ possède une symétrie sphérique autour du noyau.`,
        `Une orbitale $\\mathrm{p}$ est classiquement représentée par deux lobes orientés selon un axe.`,
        `Les formes varient selon $\\ell$ et, au sein d'une sous-couche, selon l'orientation de l'orbitale ; elles ne sont donc pas toutes identiques.`,
        `Les familles $\\mathrm{s}$, $\\mathrm{p}$, $\\mathrm{d}$ et $\\mathrm{f}$ correspondent à des valeurs différentes de $\\ell$ et à des formes orbitalaires différentes.`,
      ],
    },
  {
      order: 44,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Parmi les propositions suivantes, laquelle correspond à la configuration électronique de cet élément dans son état fondamental :`,
      choices: [
        `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^8\\,4\\mathrm{s}^0$.`,
        `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^6\\,4\\mathrm{s}^2$.`,
        `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^8\\,3\\mathrm{d}^4\\,4\\mathrm{s}^2$.`,
        `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^4\\,4\\mathrm{s}^2\\,4\\mathrm{p}^2$.`,
      ],
      correctChoiceIndexes: [1],
      explanation:
        `Le fer possède 26 électrons. Après le cœur électronique de l'argon, qui en représente 18, les huit électrons restants occupent $4\\mathrm{s}^2$ puis $3\\mathrm{d}^6$ : la configuration fondamentale est $\\mathrm{K}\\mathrm{L}\\mathrm{M}\\,3\\mathrm{d}^6\\,4\\mathrm{s}^2$.`,
      choiceExplanations: [
        `Cette écriture compte bien 26 électrons, mais la redistribution $3\\mathrm{d}^8\\,4\\mathrm{s}^0$ ne correspond pas à l'état fondamental du fer neutre.`,
        `Le cœur $[\\mathrm{Ar}]$ apporte 18 électrons et $3\\mathrm{d}^6\\,4\\mathrm{s}^2$ en apporte huit : on retrouve bien les 26 électrons du fer.`,
        `Une sous-couche $\\mathrm{p}$ ne contient que trois orbitales et peut donc accueillir au maximum six électrons ; $3\\mathrm{p}^8$ est impossible.`,
        `Dans l'état fondamental du fer, les électrons restant après $4\\mathrm{s}^2$ occupent $3\\mathrm{d}$ ; la sous-couche $4\\mathrm{p}$ reste vide.`,
      ],
    },
  {
      order: 45,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Parmi les propositions suivantes, quelle est la couche de valence de l'élément fer ?`,
      choices: [
        `N.`,
        `L.`,
        `K.`,
        `M.`,
      ],
      correctChoiceIndexes: [0],
      explanation:
        `Dans la définition simplifiée utilisée ici, la couche de valence est la couche occupée de plus grand $\\mathrm{n}$. Pour le fer $[\\mathrm{Ar}]\\,3\\mathrm{d}^6\\,4\\mathrm{s}^2$, le plus grand nombre quantique principal est $\\mathrm{n}=4$, correspondant à la couche $\\mathrm{N}$. La sous-couche $3\\mathrm{d}$ peut néanmoins participer à la chimie du métal de transition.`,
      choiceExplanations: [
        `La couche $\\mathrm{N}$ correspond à $\\mathrm{n}=4$ et contient ici les électrons externes $4\\mathrm{s}^2$.`,
        `La couche $\\mathrm{L}$ correspond à $\\mathrm{n}=2$ et appartient au cœur électronique du fer.`,
        `La couche $\\mathrm{K}$ correspond à $\\mathrm{n}=1$ et constitue la couche la plus interne.`,
        `La couche $\\mathrm{M}$ contient notamment $3\\mathrm{d}^6$, mais elle n'est pas la couche de plus grand $\\mathrm{n}$ dans la convention demandée.`,
      ],
    },
  {
      order: 46,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Déterminer le(s) quadruplet(s) $(\\mathrm{n} ; \\ell ; \\mathrm{m} ; \\mathrm{s})$ de nombres quantiques inexact(s) :`,
      choices: [
        `$(5 ; 2 ; -1 ; +\\dfrac{1}{2})$.`,
        `$(3 ; 3 ; 0 ; -\\dfrac{1}{2})$.`,
        `$(4 ; 1 ; 2 ; +\\dfrac{1}{2})$.`,
        `$(2 ; 0 ; 0 ; -\\dfrac{1}{2})$.`,
      ],
      correctChoiceIndexes: [1, 2],
      explanation:
        `Un quadruplet est admissible si $\\mathrm{n}\\geq1$, $0\\leq\\ell\\leq\\mathrm{n}-1$, $\\mathrm{m}$ est un entier compris entre $-\\ell$ et $+\\ell$, et le spin vaut $\\pm\\dfrac12$. Il suffit qu'une seule de ces conditions soit violée pour rendre le quadruplet impossible.`,
      choiceExplanations: [
        `Pour $\\mathrm{n}=5$ et $\\ell=2$, $\\mathrm{m}$ peut varier de $-2$ à $+2$ ; la valeur $-1$ et le spin $+\\dfrac12$ sont autorisés.`,
        `Avec $\\mathrm{n}=3$, la valeur maximale de $\\ell$ est 2 ; $\\ell=3$ est donc impossible.`,
        `Lorsque $\\ell=1$, $\\mathrm{m}$ ne peut valoir que $-1$, 0 ou $+1$ ; la valeur 2 est interdite.`,
        `Pour $\\mathrm{n}=2$ et $\\ell=0$, la seule valeur possible de $\\mathrm{m}$ est 0, et le spin $-\\dfrac12$ est autorisé.`,
      ],
    },
  {
      order: 47,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos du remplissage des sous-couches électroniques, quelles propositions sont exactes ?`,
      choices: [
        `Les sous-couches se remplissent toujours dans l'ordre croissant de $\\mathrm{n}$, quelle que soit leur énergie.`,
        `La sous-couche $2\\mathrm{p}$ se remplit avant la sous-couche $3\\mathrm{s}$, car elles ont le même $\\mathrm{n} + \\ell$, mais $2\\mathrm{p}$ a le plus petit $\\mathrm{n}$.`,
        `La sous-couche $4\\mathrm{s}$ se remplit avant la sous-couche $3\\mathrm{d}$, même si $4\\mathrm{s}$ appartient à une couche de nombre $\\mathrm{n}$ plus élevé.`,
        `En cas d'égalité de $\\mathrm{n} + \\ell$, la sous-couche ayant le plus grand $\\mathrm{n}$ est remplie en premier.`,
      ],
      correctChoiceIndexes: [1, 2],
      explanation:
        `La règle de Klechkowski ordonne les sous-couches selon la valeur croissante de $\\mathrm{n}+\\ell$ ; en cas d'égalité, celle de plus petit $\\mathrm{n}$ se remplit d'abord. On obtient ainsi notamment $2\\mathrm{p}$ avant $3\\mathrm{s}$ et $4\\mathrm{s}$ avant $3\\mathrm{d}$.`,
      choiceExplanations: [
        `Le nombre quantique principal seul ne suffit pas : l'ordre de remplissage dépend de l'énergie des sous-couches et donc de $\\mathrm{n}+\\ell$ dans cette règle.`,
        `Pour $2\\mathrm{p}$ et $3\\mathrm{s}$, $\\mathrm{n}+\\ell=3$ dans les deux cas ; le plus petit $\\mathrm{n}$ donne la priorité à $2\\mathrm{p}$.`,
        `Pour $4\\mathrm{s}$, $\\mathrm{n}+\\ell=4$, contre 5 pour $3\\mathrm{d}$ ; $4\\mathrm{s}$ se remplit donc d'abord.`,
        `À égalité de $\\mathrm{n}+\\ell$, c'est la sous-couche de plus petit $\\mathrm{n}$, et non de plus grand $\\mathrm{n}$, qui est prioritaire.`,
      ],
    },
];
