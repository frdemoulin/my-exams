import type { SeedQuestion } from './health-training-ue14.shared';

export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  {
      order: 1,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos de la notion d'atome :`,
      choices: [
        `Le noyau contient des protons et des neutrons.`,
        `Dans un atome, le nombre d'électrons est toujours égal au nombre de protons.`,
        `Le nuage électronique a une dimension de l'ordre de $10^{-15}\\,\\mathrm{m}$.`,
        `La quasi-totalité de la masse de l'atome est concentrée dans le noyau.`,
      ],
      correctChoiceIndexes: [0, 1, 3],
      explanation:
        `Un atome neutre est constitué d'un noyau positif, formé de protons et de neutrons, entouré d'un cortège électronique. Le noyau a une dimension de l'ordre de $10^{-15}\\,\\mathrm{m}$, contre environ $10^{-10}\\,\\mathrm{m}$ pour l'atome, mais il concentre presque toute sa masse.`,
      choiceExplanations: [
        `Le noyau atomique contient des protons et, sauf pour le noyau de l'hydrogène $^{1}\\mathrm{H}$, des neutrons.`,
        `Un atome est électriquement neutre : sa charge totale impose donc autant d'électrons que de protons.`,
        `La dimension du nuage électronique est de l'ordre de $10^{-10}\\,\\mathrm{m}$. La valeur $10^{-15}\\,\\mathrm{m}$ correspond plutôt à l'ordre de grandeur du noyau.`,
        `Les protons et les neutrons étant beaucoup plus massifs que les électrons, la quasi-totalité de la masse de l'atome est concentrée dans le noyau.`,
      ],
    },
  {
      order: 2,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `À propos du numéro atomique $\\mathrm{Z}$ et du nombre de masse $\\mathrm{A}$ :`,
      choices: [
        `$\\mathrm{Z}$ correspond au nombre de protons du noyau.`,
        `$\\mathrm{A}$ est égal à $\\mathrm{Z} + \\mathrm{N}$.`,
        `Deux éléments chimiques différents peuvent avoir le même $\\mathrm{Z}$.`,
        `Un nucléide est caractérisé par $\\mathrm{Z}$ protons et $\\mathrm{N}$ neutrons.`,
      ],
      correctChoiceIndexes: [0, 1, 3],
      explanation:
        `Le numéro atomique $\\mathrm{Z}$ est le nombre de protons et identifie l'élément chimique. Le nombre de masse $\\mathrm{A}$ compte tous les nucléons : $\\mathrm{A} = \\mathrm{Z} + \\mathrm{N}$, avec $\\mathrm{N}$ le nombre de neutrons.`,
      choiceExplanations: [
        `Par définition, le numéro atomique $\\mathrm{Z}$ est égal au nombre de protons du noyau.`,
        `Le noyau contenant $\\mathrm{Z}$ protons et $\\mathrm{N}$ neutrons, son nombre total de nucléons est $\\mathrm{A} = \\mathrm{Z} + \\mathrm{N}$.`,
        `Deux éléments chimiques différents ont nécessairement des numéros atomiques différents, puisque $\\mathrm{Z}$ définit l'élément.`,
        `Un nucléide est caractérisé par la composition de son noyau, c'est-à-dire par ses $\\mathrm{Z}$ protons et ses $\\mathrm{N}$ neutrons.`,
      ],
    },
  {
      order: 3,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos des isotopes :`,
      choices: [
        `Des isotopes d'un même élément ont le même numéro atomique.`,
        `Des isotopes d'un même élément ont toujours le même nombre de masse.`,
        `Leurs propriétés chimiques sont voisines car leur nuage électronique est identique.`,
        `Ils diffèrent uniquement par leur nombre de neutrons.`,
      ],
      correctChoiceIndexes: [0, 2, 3],
      explanation:
        `Deux isotopes appartiennent au même élément chimique : ils ont donc le même numéro atomique $\\mathrm{Z}$. Ils diffèrent par leur nombre de neutrons, et par conséquent par leur nombre de masse $\\mathrm{A}$.`,
      choiceExplanations: [
        `Des isotopes d'un même élément possèdent le même nombre de protons, donc le même numéro atomique $\\mathrm{Z}$.`,
        `Leur nombre de masse n'est pas le même, puisqu'ils diffèrent précisément par leur nombre de neutrons.`,
        `Pour des atomes neutres, le même $\\mathrm{Z}$ conduit à la même configuration électronique ; leurs propriétés chimiques sont donc très voisines, malgré de possibles effets isotopiques faibles.`,
        `À numéro atomique identique, la différence entre deux isotopes porte sur le nombre de neutrons.`,
      ],
    },
  {
      order: 4,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos des unités et des ordres de grandeur :`,
      choices: [
        `$1\\,\\text{Å}$ correspond à $0{,}1\\,\\mathrm{nm}$.`,
        `La taille d'un atome est de l'ordre de $10^{-10}\\,\\mathrm{m}$.`,
        `$1\\,\\mathrm{Da}$ est utilisé en biochimie comme synonyme de $1\\,\\mathrm{u}$.`,
        `Le noyau est plus vaste que le nuage électronique.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Les dimensions atomiques sont couramment exprimées en nanomètres ou en ångströms : $1\\,\\text{Å} = 10^{-10}\\,\\mathrm{m} = 0{,}1\\,\\mathrm{nm}$. L'atome mesure typiquement autour de $10^{-10}\\,\\mathrm{m}$, alors que son noyau est environ cent mille fois plus petit.`,
      choiceExplanations: [
        `Comme $1\\,\\text{Å} = 10^{-10}\\,\\mathrm{m}$ et $1\\,\\mathrm{nm} = 10^{-9}\\,\\mathrm{m}$, on a bien $1\\,\\text{Å} = 0{,}1\\,\\mathrm{nm}$.`,
        `Le diamètre d'un atome est typiquement de l'ordre de $10^{-10}\\,\\mathrm{m}$.`,
        `Le dalton, de symbole $\\mathrm{Da}$, est utilisé en biochimie comme unité équivalente à l'unité de masse atomique $\\mathrm{u}$.`,
        `Le noyau est beaucoup plus petit que le nuage électronique : environ $10^{-15}\\,\\mathrm{m}$ contre $10^{-10}\\,\\mathrm{m}$.`,
      ],
    },
  {
      order: 11,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `À propos du nucléide noté $^{\\mathrm{A}}_{\\mathrm{Z}}\\mathrm{X}$ :`,
      choices: [
        `$\\mathrm{A}$ est le nombre de masse et $\\mathrm{Z}$ le numéro atomique.`,
        `Écrire $^{\\mathrm{Z}}_{\\mathrm{A}}\\mathrm{X}$ revient au même : on a seulement changé la mise en page.`,
        `Un nucléide est défini par son noyau, donc par $\\mathrm{Z}$ protons et $\\mathrm{N} = \\mathrm{A} - \\mathrm{Z}$ neutrons.`,
        `Le symbole $\\mathrm{X}$ seul suffit à définir complètement un nucléide.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `Dans la notation $^{\\mathrm{A}}_{\\mathrm{Z}}\\mathrm{X}$, $\\mathrm{Z}$ indique le nombre de protons et $\\mathrm{A}$ le nombre total de nucléons. Le nombre de neutrons se calcule donc par $\\mathrm{N} = \\mathrm{A}-\\mathrm{Z}$ ; le symbole $\\mathrm{X}$ identifie seulement l'élément chimique.`,
      choiceExplanations: [
        `L'indice inférieur $\\mathrm{Z}$ est le numéro atomique et l'exposant supérieur $\\mathrm{A}$ est le nombre de masse.`,
        `Échanger $\\mathrm{A}$ et $\\mathrm{Z}$ modifie la signification de la notation et peut conduire à une composition nucléaire impossible.`,
        `Le noyau contient $\\mathrm{Z}$ protons et $\\mathrm{A}-\\mathrm{Z}$ neutrons ; ces deux nombres définissent le nucléide.`,
        `Le symbole $\\mathrm{X}$ fixe $\\mathrm{Z}$, mais pas le nombre de neutrons : il ne distingue donc pas les isotopes de l'élément.`,
      ],
    },
  {
      order: 12,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos de l'atome $^{23}_{11}\\mathrm{Na}$ :`,
      choices: [
        `Il présente 11 protons, 12 neutrons et 23 nucléons.`,
        `Il présente 12 protons, 11 neutrons et 23 nucléons.`,
        `Comme il s'agit d'un atome, il présente 11 électrons.`,
        `Il présente 44 nucléons en tout.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `Pour $^{23}_{11}\\mathrm{Na}$, $\\mathrm{Z}=11$ donne 11 protons et $\\mathrm{A}=23$ donne 23 nucléons. Le nombre de neutrons vaut $23-11=12$ et, puisqu'il s'agit d'un atome neutre, le nombre d'électrons vaut 11.`,
      choiceExplanations: [
        `Le noyau contient 11 protons et $23-11=12$ neutrons, soit 23 nucléons au total.`,
        `Cette proposition inverse les nombres de protons et de neutrons : $\\mathrm{Z}$ donne les protons, pas les neutrons.`,
        `Un atome neutre possède autant d'électrons que de protons ; il contient donc 11 électrons.`,
        `Le nombre de nucléons est directement donné par $\\mathrm{A}=23$ ; on ne doit pas additionner $\\mathrm{A}$ et $\\mathrm{Z}$.`,
      ],
    },
  {
      order: 13,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `À propos des termes atome, élément chimique, nucléide et isotope :`,
      choices: [
        `L'élément chimique carbone est défini par $\\mathrm{Z} = 6$.`,
        `Le nucléide $^{14}_{6}\\mathrm{C}$ et l'atome $^{14}_{6}\\mathrm{C}$ désignent exactement la même réalité.`,
        `Les nucléides $^{12}_{6}\\mathrm{C}$ et $^{14}_{6}\\mathrm{C}$ sont deux isotopes d'un même élément chimique.`,
        `Deux isotopes d'un même élément chimique ont nécessairement le même nombre de neutrons.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `Un élément chimique est défini par son numéro atomique $\\mathrm{Z}$. Un nucléide précise la composition du noyau par $\\mathrm{A}$ et $\\mathrm{Z}$, tandis qu'un atome comprend ce noyau et son cortège électronique ; deux nucléides de même $\\mathrm{Z}$ mais de $\\mathrm{A}$ différents sont des isotopes.`,
      choiceExplanations: [
        `Tous les noyaux de carbone possèdent six protons : l'élément carbone est donc défini par $\\mathrm{Z}=6$.`,
        `Le terme « nucléide » désigne une espèce nucléaire définie par $\\mathrm{A}$ et $\\mathrm{Z}$, alors que l'atome inclut également les électrons ; les notions sont liées mais ne sont pas strictement synonymes.`,
        `Ces deux nucléides ont le même $\\mathrm{Z}=6$ mais des nombres de masse différents : ce sont deux isotopes du carbone.`,
        `À $\\mathrm{Z}$ identique, des isotopes se distinguent précisément par leur nombre de neutrons.`,
      ],
    },
  {
      order: 14,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos des propriétés des isotopes :`,
      choices: [
        `Des isotopes ont des propriétés physiques et des propriétés chimiques voisines.`,
        `Des isotopes ont des propriétés physiques voisines, mais des propriétés chimiques différentes.`,
        `Des isotopes ont des propriétés physiques différentes, mais des propriétés chimiques voisines.`,
        `Des isotopes ont des propriétés physiques et des propriétés chimiques différentes.`,
      ],
      correctChoiceIndexes: [2],
      explanation:
        `Les isotopes d'un même élément ont des propriétés chimiques très voisines, car leurs configurations électroniques sont identiques pour les atomes neutres. Leurs propriétés physiques peuvent en revanche différer, notamment en raison de leur masse et de leur stabilité nucléaire.`,
      choiceExplanations: [
        `Les propriétés chimiques sont voisines, mais les propriétés physiques ne sont pas considérées comme équivalentes dans la distinction attendue.`,
        `La différence de masse porte surtout sur les propriétés physiques ; elle ne rend pas les propriétés chimiques radicalement différentes.`,
        `C'est la distinction attendue : les propriétés physiques peuvent différer, tandis que les propriétés chimiques restent très voisines.`,
        `Les isotopes ne diffèrent pas fortement sur les deux plans : leur même configuration électronique conserve des propriétés chimiques proches.`,
      ],
    },
  {
      order: 15,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Un échantillon naturel de bore contient environ 20 % de $^{10}\\mathrm{B}$ de masse $10\\,\\mathrm{u}$ et 80 % de $^{11}\\mathrm{B}$ de masse $11\\,\\mathrm{u}$ :`,
      choices: [
        `La masse atomique moyenne vaut environ $10{,}8\\,\\mathrm{u}$.`,
        `La masse atomique moyenne est forcément un nombre entier, car elle correspond au nombre de nucléons.`,
        `La masse atomique moyenne vaut $10{,}5\\,\\mathrm{u}$ car on fait la moyenne simple de 10 et 11.`,
        `La masse moyenne est plus proche de $11\\,\\mathrm{u}$ que de $10\\,\\mathrm{u}$.`,
      ],
      correctChoiceIndexes: [0, 3],
      explanation:
        `La masse atomique d'un élément naturel est une moyenne pondérée par les abondances isotopiques. Ici, $\\overline{m}=0{,}20\\times10+0{,}80\\times11=10{,}8\\,\\mathrm{u}$ ; la valeur est logiquement plus proche de $11\\,\\mathrm{u}$, puisque $^{11}\\mathrm{B}$ est majoritaire.`,
      choiceExplanations: [
        `Le calcul pondéré donne $0{,}20\\times10+0{,}80\\times11=10{,}8\\,\\mathrm{u}$.`,
        `La moyenne isotopique dépend des abondances relatives et n'est donc pas nécessairement un entier ni le nombre de nucléons d'un isotope particulier.`,
        `La moyenne simple $10{,}5\\,\\mathrm{u}$ supposerait des abondances égales, ce qui n'est pas le cas ici.`,
        `Comme 80 % des atomes sont du bore 11, la moyenne est davantage influencée par la masse $11\\,\\mathrm{u}$.`,
      ],
    },
  {
      order: 16,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos de l'atome :`,
      choices: [
        `Le noyau d'un atome, au repos, a une masse toujours plus faible que celle de ses constituants séparés et au repos.`,
        `Un électron est environ $1\\,000$ fois moins massif qu'un nucléon.`,
        `Le noyau d'un atome contient nécessairement au moins un proton et au moins un neutron.`,
        `Un atome contient toujours autant d'électrons que de nucléons.`,
      ],
      correctChoiceIndexes: [0, 1],
      explanation:
        `La formation d'un noyau lié s'accompagne d'un défaut de masse : sa masse est inférieure à la somme des masses de ses nucléons séparés, la différence correspondant à l'énergie de liaison. Par ailleurs, la masse d'un électron est environ deux mille fois plus faible que celle d'un nucléon, donc de l'ordre de mille fois plus faible.`,
      choiceExplanations: [
        `Pour un noyau lié, le défaut de masse implique une masse inférieure à celle des protons et neutrons séparés au repos.`,
        `La masse d'un électron est environ $1/1\\,800$ de celle d'un proton ; « environ 1 000 fois moins massif » donne le bon ordre de grandeur.`,
        `Le noyau du protium $^{1}\\mathrm{H}$ ne contient qu'un proton et aucun neutron : un neutron n'est donc pas toujours présent.`,
        `Dans un atome neutre, le nombre d'électrons égale le nombre de protons $\\mathrm{Z}$, et non le nombre total de nucléons $\\mathrm{A}$.`,
      ],
    },
  {
      order: 17,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos du nucléide $^{1}_{3}\\mathrm{X}$ :`,
      choices: [
        `C'est un isotope de l'élément hydrogène.`,
        `Son noyau contient un proton et deux neutrons.`,
        `Afin de satisfaire à la règle du duet, cet atome a tendance à gagner un électron.`,
        `Toutes les affirmations précédentes sont fausses, le nucléide $^{1}_{3}\\mathrm{X}$ n'existe pas.`,
      ],
      correctChoiceIndexes: [3],
      explanation:
        `Une notation nucléaire doit vérifier $\\mathrm{A}\\geq\\mathrm{Z}$, puisque le nombre de neutrons vaut $\\mathrm{N}=\\mathrm{A}-\\mathrm{Z}$ et ne peut pas être négatif. Pour $^{1}_{3}\\mathrm{X}$, on obtiendrait $\\mathrm{N}=-2$ : cette écriture ne correspond donc à aucun nucléide.`,
      choiceExplanations: [
        `Un isotope de l'hydrogène doit avoir $\\mathrm{Z}=1$ ; ici l'indice inférieur vaut 3.`,
        `La proposition attribue trois nucléons au noyau alors que $\\mathrm{A}=1$ ; surtout, $\\mathrm{A}<\\mathrm{Z}$ rend la composition impossible.`,
        `On ne peut pas déduire une tendance électronique d'un nucléide dont la notation est physiquement impossible.`,
        `Comme $\\mathrm{A}<\\mathrm{Z}$, le nombre de neutrons serait négatif : les trois affirmations précédentes sont donc fausses.`,
      ],
    },
  {
      order: 18,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos des nombres de protons, neutrons et électrons dans un atome :`,
      choices: [
        `Un atome peut avoir plus de neutrons que de protons.`,
        `Un atome ne peut pas avoir moins de protons que de neutrons.`,
        `Un atome peut avoir plus de neutrons que d'électrons.`,
        `Un atome peut avoir plus de protons que d'électrons.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation: null,
      choiceExplanations: [
        `De nombreux noyaux, notamment parmi les éléments lourds, contiennent davantage de neutrons que de protons.`,
        `Cette impossibilité n'existe pas : un atome peut parfaitement avoir moins de protons que de neutrons.`,
        `Dans un atome neutre, le nombre d'électrons égale celui des protons ; s'il y a plus de neutrons que de protons, il y a aussi plus de neutrons que d'électrons.`,
        `Un atome étant neutre, il possède exactement autant de protons que d'électrons. Une espèce ayant moins d'électrons serait un cation, pas un atome neutre.`,
      ],
    },
  {
      order: 19,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos de la masse et de la structure de l'atome :`,
      choices: [
        `La quasi-totalité de la masse d'un atome est concentrée dans son noyau.`,
        `Les électrons de cœur appartiennent au noyau car ils sont proches de lui.`,
        `Un électron est environ $1\\,800$ fois moins massif qu'un proton.`,
        `La masse d'un atome est essentiellement déterminée par son nombre de nucléons.`,
      ],
      correctChoiceIndexes: [0, 2, 3],
      explanation:
        `La masse atomique provient presque entièrement des nucléons du noyau. Les électrons, qu'ils soient de cœur ou de valence, appartiennent tous au cortège électronique et leur masse est négligeable à cette échelle.`,
      choiceExplanations: [
        `Les protons et les neutrons portent presque toute la masse de l'atome ; ils sont regroupés dans le noyau.`,
        `Les électrons de cœur sont proches du noyau, mais ils restent dans le cortège électronique et ne font pas partie du noyau.`,
        `La masse du proton est environ $1\\,800$ fois celle de l'électron ; l'ordre de grandeur proposé est correct.`,
        `Comme la contribution des électrons est très faible, la masse d'un atome dépend principalement de son nombre de nucléons.`,
      ],
    },
  {
      order: 20,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos des nucléides et des isotopes :`,
      choices: [
        `Le nucléide $^{222}_{86}\\mathrm{Rn}$ est composé de 86 protons, 136 neutrons et 86 électrons.`,
        `Les isotopes d'un élément chimique ont tous le même numéro atomique.`,
        `Tous les nucléides d'un même élément chimique ont les mêmes valeurs du couple de nombres $\\mathrm{A}$ et $\\mathrm{Z}$.`,
        `Les nucléides $^{73}_{38}\\mathrm{Sr}$ et $^{97}_{38}\\mathrm{Sr}$ ont des masses différentes.`,
      ],
      correctChoiceIndexes: [1, 3],
      explanation:
        `Le terme « nucléide » décrit strictement une espèce nucléaire définie par $\\mathrm{A}$ et $\\mathrm{Z}$ ; les électrons appartiennent à l'atome ou à l'ion associé. Les isotopes d'un élément ont le même $\\mathrm{Z}$ mais des nombres de masse $\\mathrm{A}$ différents.`,
      choiceExplanations: [
        `Le noyau $^{222}_{86}\\mathrm{Rn}$ contient bien 86 protons et $222-86=136$ neutrons, mais les 86 électrons décrivent l'atome neutre de radon, pas le nucléide au sens strict.`,
        `Le numéro atomique identifie l'élément : tous ses isotopes possèdent donc le même $\\mathrm{Z}$.`,
        `Les nucléides d'un même élément ont le même $\\mathrm{Z}$, mais leurs nombres de neutrons et donc leurs nombres de masse $\\mathrm{A}$ peuvent différer.`,
        `Les deux noyaux ont le même $\\mathrm{Z}=38$ mais des nombres de masse 73 et 97 ; leurs masses sont donc différentes.`,
      ],
    },
  {
      order: 21,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos des éléments naturels et artificiels :`,
      choices: [
        `Dans la convention simplifiée retenue, les éléments naturels ont un numéro atomique $\\mathrm{Z} \\leq 92$.`,
        `L'uranium, de numéro atomique $\\mathrm{Z} = 92$, est présenté comme la limite des éléments naturels.`,
        `Les éléments de numéro atomique $\\mathrm{Z} > 92$ sont appelés transuraniens et sont artificiels.`,
        `Un élément naturel est nécessairement stable : il ne peut pas être radioactif.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `La convention simplifiée retenue considère que les éléments naturels s'étendent jusqu'à l'uranium, $\\mathrm{Z}=92$, et que les éléments au-delà sont qualifiés de transuraniens artificiels. Cette classification ne signifie pas que tous les éléments naturels sont stables.`,
      choiceExplanations: [
        `Dans la convention retenue, la limite des éléments naturels est fixée à $\\mathrm{Z}=92$.`,
        `L'uranium, de numéro atomique 92, est bien présenté comme le dernier élément naturel de cette classification simplifiée.`,
        `Les éléments de numéro atomique supérieur à 92 sont appelés transuraniens et sont obtenus artificiellement dans cette classification simplifiée.`,
        `Plusieurs éléments naturels sont radioactifs, notamment l'uranium ; naturel ne signifie donc pas stable.`,
      ],
    },
  {
      order: 22,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos d'un atome et de ses constituants :`,
      choices: [
        `Un atome contient autant d'électrons que de protons.`,
        `Un électron est beaucoup moins massif qu'un proton ou qu'un neutron.`,
        `Le noyau contient toujours au moins un proton, mais pas forcément un neutron.`,
        `Un atome contient toujours autant d'électrons que de nucléons.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation: null,
      choiceExplanations: [
        `La neutralité électrique de l'atome impose autant d'électrons que de protons.`,
        `Un électron est environ $1\\,800$ fois moins massif qu'un proton et d'un ordre de grandeur comparable face au neutron.`,
        `Tout noyau atomique contient au moins un proton ; celui de l'hydrogène $^{1}\\mathrm{H}$ ne contient cependant aucun neutron.`,
        `Le nombre d'électrons d'un atome vaut $\\mathrm{Z}$, tandis que son nombre de nucléons vaut $\\mathrm{A}$ ; ces deux nombres ne sont généralement pas égaux.`,
      ],
    },
  {
      order: 23,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos de l'unité de masse atomique :`,
      choices: [
        `Elle est définie comme le douzième de la masse d'un atome de carbone 12.`,
        `Son symbole usuel est $u$.`,
        `Dans l'usage biochimique courant, $1\\,\\mathrm{Da}$ est assimilé à $1\\,u$.`,
        `Elle correspond exactement à la masse d'un proton isolé.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `L'unité de masse atomique unifiée, de symbole $\\mathrm{u}$, est définie comme le douzième de la masse d'un atome de carbone 12. Le dalton est utilisé comme unité équivalente, mais la masse d'un proton isolé est seulement proche de $1\\,\\mathrm{u}$, pas exactement égale.`,
      choiceExplanations: [
        `Par définition, $1\\,\\mathrm{u}$ vaut un douzième de la masse d'un atome de carbone 12.`,
        `Le symbole normalisé de l'unité de masse atomique unifiée est $\\mathrm{u}$.`,
        `Dans l'usage biochimique courant, $1\\,\\mathrm{Da}$ et $1\\,\\mathrm{u}$ désignent la même valeur de masse.`,
        `La masse d'un proton isolé est voisine de $1\\,\\mathrm{u}$ mais n'est pas exactement égale à cette unité définie à partir du carbone 12.`,
      ],
    },
  {
      order: 24,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos de quelques ordres de grandeur utiles en médecine :`,
      choices: [
        `Une cellule animale typique, de diamètre de l'ordre de $10\\,\\mathrm{\\mu m}$, n'est qu'environ dix fois plus grande qu'un petit peptide.`,
        `Une protéine comme l'hémoglobine a une taille caractéristique de l'ordre de $10\\,\\mathrm{nm}$, soit environ $10\\,\\text{Å}$.`,
        `Un petit peptide a une taille caractéristique de l'ordre de $1\\,\\mathrm{nm}$, soit environ $100\\,\\text{Å}$.`,
        `Un globule rouge a un diamètre de l'ordre de $10\\,\\mathrm{\\mu m}$, soit environ $100\\,000\\,\\text{Å}$.`,
      ],
      correctChoiceIndexes: [3],
      explanation:
        `Les conversions utiles sont $1\\,\\mathrm{nm}=10\\,\\text{Å}$ et $1\\,\\mathrm{\\mu m}=10^4\\,\\text{Å}$. Ainsi, une cellule ou un globule rouge de l'ordre de $10\\,\\mathrm{\\mu m}$ est environ dix mille fois plus grand qu'un objet de l'ordre du nanomètre.`,
      choiceExplanations: [
        `Le rapport entre $10\\,\\mathrm{\\mu m}=10^{-5}\\,\\mathrm{m}$ et $1\\,\\mathrm{nm}=10^{-9}\\,\\mathrm{m}$ vaut $10^4$, et non 10.`,
        `Comme $1\\,\\mathrm{nm}=10\\,\\text{Å}$, une taille de $10\\,\\mathrm{nm}$ correspond à $100\\,\\text{Å}$.`,
        `Un petit peptide de $1\\,\\mathrm{nm}$ mesure environ $10\\,\\text{Å}$, pas $100\\,\\text{Å}$.`,
        `$10\\,\\mathrm{\\mu m}=10^{-5}\\,\\mathrm{m}$ et $1\\,\\text{Å}=10^{-10}\\,\\mathrm{m}$ ; le rapport vaut donc $10^5$, soit $100\\,000\\,\\text{Å}$.`,
      ],
    },
  {
      order: 25,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos des conversions de longueur :`,
      choices: [
        `Une longueur de $1\\,\\mathrm{nm}$ correspond à $10\\,\\text{Å}$, soit $10^{-9}\\,\\mathrm{m}$.`,
        `Une longueur de $1\\,\\text{Å}$ correspond à $10\\,\\mathrm{nm}$, soit $10^{-8}\\,\\mathrm{m}$.`,
        `Une longueur de $50\\,\\text{Å}$ correspond à $5\\,\\mathrm{nm}$, soit $5 \\times 10^{-9}\\,\\mathrm{m}$.`,
        `Une longueur de $10^{-10}\\,\\mathrm{m}$ correspond à $1\\,\\mathrm{nm}$, soit $10\\,\\text{Å}$.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `On utilise les équivalences $1\\,\\mathrm{nm}=10^{-9}\\,\\mathrm{m}=10\\,\\text{Å}$ et $1\\,\\text{Å}=10^{-10}\\,\\mathrm{m}=0{,}1\\,\\mathrm{nm}$. Elles permettent de convertir directement toutes les longueurs proposées.`,
      choiceExplanations: [
        `Cette égalité reprend directement la définition : $1\\,\\mathrm{nm}=10\\,\\text{Å}=10^{-9}\\,\\mathrm{m}$.`,
        `Les facteurs sont inversés : $1\\,\\text{Å}=0{,}1\\,\\mathrm{nm}=10^{-10}\\,\\mathrm{m}$.`,
        `En divisant par 10, $50\\,\\text{Å}=5\\,\\mathrm{nm}$, soit $5\\times10^{-9}\\,\\mathrm{m}$.`,
        `$10^{-10}\\,\\mathrm{m}$ correspond à $1\\,\\text{Å}$ et donc à $0{,}1\\,\\mathrm{nm}$, pas à $1\\,\\mathrm{nm}$.`,
      ],
    },
  {
      order: 26,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos de l'ion $^{27}_{13}\\mathrm{Al}^{3+}$ :`,
      choices: [
        `Il présente 13 protons.`,
        `Il présente 27 nucléons.`,
        `Il présente 13 électrons.`,
        `Il présente 14 neutrons.`,
      ],
      correctChoiceIndexes: [0, 1, 3],
      explanation:
        `Dans $^{27}_{13}\\mathrm{Al}^{3+}$, $\\mathrm{Z}=13$ donne 13 protons, $\\mathrm{A}=27$ donne 27 nucléons et $\\mathrm{N}=27-13=14$ neutrons. La charge $3+$ indique la perte de trois électrons : l'ion n'en possède donc que 10.`,
      choiceExplanations: [
        `Le numéro atomique $\\mathrm{Z}=13$ fixe le nombre de protons à 13, quelle que soit la charge de l'ion.`,
        `Le nombre de masse $\\mathrm{A}=27$ est le nombre total de protons et de neutrons.`,
        `L'atome neutre d'aluminium aurait 13 électrons, mais l'ion $\\mathrm{Al}^{3+}$ en a perdu trois et n'en possède plus que 10.`,
        `Le nombre de neutrons vaut $\\mathrm{A}-\\mathrm{Z}=27-13=14$.`,
      ],
    },
];
