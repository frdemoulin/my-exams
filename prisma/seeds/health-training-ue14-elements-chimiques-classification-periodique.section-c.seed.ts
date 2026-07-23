import type { SeedQuestion } from './health-training-ue14.shared';

export const SECTION_C_QUESTIONS: SeedQuestion[] = [
  {
      order: 8,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos de la classification périodique :`,
      choices: [
        `Les éléments sont classés par numéro atomique croissant.`,
        `La classification moderne comporte 18 colonnes.`,
        `Les éléments d'une même colonne ont des propriétés chimiques analogues.`,
        `Une période correspond à une colonne.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `La classification périodique moderne range les éléments par numéro atomique croissant. Ses lignes sont les périodes et ses 18 colonnes regroupent généralement des éléments ayant une configuration électronique externe et des propriétés chimiques voisines.`,
      choiceExplanations: [
        `Depuis la classification moderne, l'ordre des éléments est déterminé par le numéro atomique $\\mathrm{Z}$ croissant.`,
        `Le tableau périodique moderne comporte 18 colonnes, également appelées groupes.`,
        `Les éléments d'un même groupe ont souvent le même nombre d'électrons de valence, ce qui explique leurs propriétés chimiques analogues.`,
        `Une période est une ligne horizontale ; une colonne correspond à un groupe ou à une famille.`,
      ],
    },
  {
      order: 9,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `À propos des familles d'éléments :`,
      choices: [
        `$\\ce{B}$, $\\ce{Si}$ et $\\ce{Ge}$ sont des métalloïdes semi-conducteurs.`,
        `Les métaux forment volontiers des cations.`,
        `Les non-métaux sont toujours solides à température ambiante.`,
        `Les gaz rares sont situés dans la colonne 18.`,
      ],
      correctChoiceIndexes: [0, 1, 3],
      explanation: null,
      choiceExplanations: [
        `Le bore, le silicium et le germanium sont bien classés parmi les métalloïdes semi-conducteurs.`,
        `Les métaux perdent volontiers un ou plusieurs électrons et forment alors des ions positifs, appelés cations.`,
        `Les non-métaux peuvent être solides, liquides ou gazeux à température ambiante ; ils ne sont donc pas toujours solides.`,
        `Les gaz nobles, ou gaz rares, occupent le groupe 18 de la classification périodique.`,
      ],
    },
  {
      order: 10,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos des éléments du vivant :`,
      choices: [
        `$\\ce{C}$, $\\ce{H}$, $\\ce{O}$ et $\\ce{N}$ font partie des éléments de base du vivant.`,
        `$\\ce{Fe}$, $\\ce{Zn}$ et $\\ce{Cu}$ font partie des métaux du vivant.`,
        `$\\ce{Cd}$, $\\ce{Hg}$ et $\\ce{Pb}$ sont des oligo-éléments indispensables au vivant.`,
        `$\\ce{F}$, $\\ce{Br}$ et $\\ce{I}$ sont des oligo-éléments non métalliques.`,
      ],
      correctChoiceIndexes: [0, 1, 3],
      explanation: null,
      choiceExplanations: [
        `Le carbone, l'hydrogène, l'oxygène et l'azote constituent l'essentiel des molécules du vivant.`,
        `Le fer, le zinc et le cuivre sont des éléments métalliques nécessaires à diverses fonctions biologiques, généralement en faibles quantités.`,
        `Le cadmium, le mercure et le plomb sont surtout connus pour leur toxicité et ne sont pas des oligoéléments indispensables.`,
        `Le fluor, le brome et l'iode figurent parmi les éléments non métalliques présents à l'état de traces dans le vivant.`,
      ],
    },
  {
      order: 55,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos de la classification périodique des éléments :`,
      choices: [
        `Les éléments y sont classés selon leur numéro atomique $\\mathrm{Z}$ croissant.`,
        `La classification périodique est couramment appelée tableau de Rutherford.`,
        `Les colonnes du tableau périodique sont appelées des périodes.`,
        `Les lanthanides et les actinides constituent deux colonnes placées à droite des gaz nobles.`,
      ],
      correctChoiceIndexes: [0],
      explanation:
        `Le tableau périodique moderne, souvent appelé tableau de Mendeleïev, classe les éléments par numéro atomique croissant. Les colonnes sont les groupes ou familles, les lignes sont les périodes, et le bloc $\\mathrm{f}$ est généralement représenté sous le tableau principal.`,
      choiceExplanations: [
        `Le tableau périodique moderne est ordonné par numéro atomique $\\mathrm{Z}$ croissant.`,
        `On parle usuellement du tableau de Mendeleïev, pas d'un tableau de Rutherford.`,
        `Les colonnes sont appelées groupes ou familles ; les périodes correspondent aux lignes horizontales.`,
        `Les lanthanides et les actinides appartiennent au bloc $\\mathrm{f}$ et sont généralement placés sous le tableau principal, non dans deux colonnes à droite des gaz nobles.`,
      ],
    },
  {
      order: 56,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `Quel est l'ordre correct des six premiers éléments chimiques, classés par numéro atomique $\\mathrm{Z}$ croissant ?`,
      choices: [
        `$\\ce{H} - \\ce{Li} - \\ce{He} - \\ce{Be} - \\ce{B} - \\ce{C}$.`,
        `$\\ce{He} - \\ce{H} - \\ce{Li} - \\ce{Be} - \\ce{C} - \\ce{B}$.`,
        `$\\ce{H} - \\ce{He} - \\ce{Li} - \\ce{Be} - \\ce{B} - \\ce{C}$.`,
        `$\\ce{H} - \\ce{He} - \\ce{Be} - \\ce{Li} - \\ce{B} - \\ce{C}$.`,
      ],
      correctChoiceIndexes: [2],
      explanation:
        `Les six premiers éléments sont, dans l'ordre des numéros atomiques croissants, l'hydrogène, l'hélium, le lithium, le béryllium, le bore puis le carbone.`,
      choiceExplanations: [
        `L'hélium ($\\mathrm{Z}=2$) vient avant le lithium ($\\mathrm{Z}=3$) ; cet ordre est donc incorrect.`,
        `L'hydrogène est le premier élément ($\\mathrm{Z}=1$) : il ne peut pas venir après l'hélium.`,
        `L'ordre $\\ce{H}$, $\\ce{He}$, $\\ce{Li}$, $\\ce{Be}$, $\\ce{B}$, $\\ce{C}$ correspond bien à $\\mathrm{Z}=1$ à $\\mathrm{Z}=6$.`,
        `Le lithium ($\\mathrm{Z}=3$) précède le béryllium ($\\mathrm{Z}=4$) ; les deux éléments sont inversés ici.`,
      ],
    },
  {
      order: 57,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos de la position des blocs $\\mathrm{s}$, $\\mathrm{p}$, $\\mathrm{d}$ et $\\mathrm{f}$ dans la classification périodique :`,
      choices: [
        `Le bloc $\\mathrm{s}$ correspond exclusivement aux deux premières colonnes du tableau.`,
        `Le bloc $\\mathrm{p}$ occupe les six premières colonnes situées à gauche du tableau.`,
        `Le bloc $\\mathrm{d}$ occupe la partie centrale de la classification périodique.`,
        `Le bloc $\\mathrm{f}$ est généralement représenté par deux lignes placées sous le tableau principal.`,
      ],
      correctChoiceIndexes: [2, 3],
      explanation:
        `Le bloc $\\mathrm{d}$ correspond aux métaux de transition placés au centre du tableau. Le bloc $\\mathrm{f}$, formé des lanthanides et des actinides, est généralement représenté sous la classification principale.`,
      choiceExplanations: [
        `Cette affirmation est fausse à strictement parler, car l'hélium a une configuration $1\\mathrm{s}^2$ tout en étant placé dans la dernière colonne du tableau.`,
        `Le bloc $\\mathrm{p}$ occupe les six colonnes situées à droite du tableau, à l'exception de l'hélium.`,
        `Le bloc $\\mathrm{d}$, correspondant aux métaux de transition, se trouve au centre de la classification périodique.`,
        `Les lanthanides et les actinides du bloc $\\mathrm{f}$ sont habituellement dessinés sur deux lignes sous le tableau principal.`,
      ],
    },
  {
      order: 58,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Le magnésium ($\\mathrm{Z} = 12$) est un élément essentiel au fonctionnement musculaire et nerveux en intervenant notamment dans la contraction musculaire et dans l'activité de nombreuses enzymes. Cochez la ou les réponse(s) exacte(s) :`,
      choices: [
        `Il se trouve dans la troisième période et dans la deuxième colonne du tableau périodique.`,
        `Ce n'est pas un élément du bloc $\\mathrm{d}$.`,
        `C'est un élément du bloc $\\mathrm{s}$.`,
        `Il se trouve dans la deuxième période et dans la troisième colonne du tableau périodique.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Le magnésium a pour configuration électronique $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2$. Il appartient donc à la troisième période, à la deuxième colonne du tableau, et relève du bloc $\\mathrm{s}$.`,
      choiceExplanations: [
        `Avec une couche externe $3\\mathrm{s}^2$, le magnésium appartient à la troisième période et à la deuxième colonne.`,
        `Le magnésium ne possède pas d'électrons de valence dans une sous-couche $\\mathrm{d}$ : ce n'est pas un élément du bloc $\\mathrm{d}$.`,
        `Sa sous-couche de valence est $3\\mathrm{s}^2$ : le magnésium appartient donc au bloc $\\mathrm{s}$.`,
        `Cette proposition inverse à la fois la période et la colonne : elle est fausse.`,
      ],
    },
  {
      order: 59,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `On considère l'élément chimique se trouvant dans la troisième période et dans la dix-septième colonne du tableau périodique :`,
      choices: [
        `Cet élément se trouve dans le bloc $\\mathrm{d}$.`,
        `Il possède dix-sept électrons de valence.`,
        `Son numéro atomique est $\\mathrm{Z} = 17$ : c'est le chlore.`,
        `Sa configuration électronique externe est de la forme $\\mathrm{n}\\mathrm{s}\\,\\mathrm{n}\\mathrm{p}$.`,
      ],
      correctChoiceIndexes: [2],
      explanation:
        `L'élément de la troisième période et de la dix-septième colonne est le chlore, de numéro atomique $\\mathrm{Z}=17$. C'est un halogène du bloc $\\mathrm{p}$, dont la configuration électronique externe est de la forme $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^5$.`,
      choiceExplanations: [
        `Le chlore n'appartient pas au bloc $\\mathrm{d}$ mais au bloc $\\mathrm{p}$.`,
        `Le chlore possède sept électrons de valence, pas dix-sept.`,
        `La troisième période et la dix-septième colonne désignent bien le chlore, de numéro atomique $\\mathrm{Z}=17$.`,
        `L'écriture correcte est $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^5$ pour un halogène, et non la forme incomplète proposée.`,
      ],
    },
  {
      order: 60,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos des halogènes :`,
      choices: [
        `Les halogènes représentent une colonne de la classification périodique.`,
        `Les halogènes représentent une ligne de la classification périodique.`,
        `Tous les halogènes ont des configurations électroniques externes semblables.`,
        `Les halogènes donnent tous des anions monoatomiques de charge $-1$ dans leurs composés ioniques usuels.`,
      ],
      correctChoiceIndexes: [0, 2, 3],
      explanation:
        `Les halogènes constituent la colonne 17 de la classification périodique. Ils possèdent la même structure électronique externe générale $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^5$ et forment souvent des anions halogénure de charge $-1$.`,
      choiceExplanations: [
        `Les halogènes occupent une même colonne, correspondant au groupe 17.`,
        `Une ligne du tableau correspond à une période, pas à une famille chimique comme les halogènes.`,
        `Leur configuration électronique externe générale est analogue, ce qui explique leurs propriétés chimiques voisines.`,
        `Dans les composés ioniques simples, les halogènes gagnent typiquement un électron et forment des anions de charge $-1$.`,
      ],
    },
  {
      order: 61,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos des grandes familles d'éléments de la classification périodique :`,
      choices: [
        `Les métaux sont majoritairement situés à gauche du tableau périodique.`,
        `Les métalloïdes, comme le silicium, présentent souvent des propriétés intermédiaires entre celles des métaux et des non-métaux.`,
        `Les non-métaux forment uniquement des ions positifs appelés cations.`,
        `Les gaz rares de la colonne 18 sont généralement très réactifs chimiquement.`,
      ],
      correctChoiceIndexes: [0, 1],
      explanation:
        `Les métaux occupent surtout la partie gauche et centrale du tableau. Les métalloïdes se trouvent à la frontière entre métaux et non-métaux et présentent des propriétés intermédiaires. Les gaz rares sont au contraire très peu réactifs.`,
      choiceExplanations: [
        `La majorité des métaux se situe à gauche et au centre de la classification périodique.`,
        `Le silicium est un métalloïde classique, aux propriétés intermédiaires entre celles des métaux et des non-métaux.`,
        `Les non-métaux forment souvent des ions négatifs, appelés anions, et non uniquement des cations.`,
        `Les gaz rares sont connus pour leur très faible réactivité chimique.`,
      ],
    },
  {
      order: 62,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos des éléments des colonnes 14 à 17 de la classification périodique :`,
      choices: [
        `Les éléments d'une même colonne possèdent une configuration électronique de valence analogue.`,
        `Le carbone, de configuration de valence $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^2$, possède quatre électrons de valence.`,
        `L'oxygène, de configuration de valence $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^4$, possède quatre électrons de valence.`,
        `Le chlore, de configuration de valence $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^5$, possède huit électrons de valence.`,
      ],
      correctChoiceIndexes: [0, 1],
      explanation:
        `Les éléments d'une même colonne ont une configuration électronique externe analogue, ce qui explique leurs propriétés communes. Pour les colonnes 14 à 17, on retrouve respectivement $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^2$, $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^3$, $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^4$ et $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^5$.`,
      choiceExplanations: [
        `Les éléments d'un même groupe présentent une configuration de valence analogue, ce qui sous-tend leurs propriétés chimiques voisines.`,
        `La configuration $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^2$ correspond bien à quatre électrons de valence.`,
        `La configuration $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^4$ correspond à six électrons de valence, et non quatre.`,
        `Le chlore possède sept électrons de valence : $2+5=7$, pas huit.`,
      ],
    },
  {
      order: 64,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `L'iode ($\\mathrm{Z} = 53$) joue un rôle essentiel dans le fonctionnement de la thyroïde. Certains de ses isotopes radioactifs sont également utilisés en médecine nucléaire. Cochez la ou les réponse(s) exacte(s) :`,
      choices: [
        `L'iode appartient à la famille des halogènes.`,
        `Le numéro atomique $\\mathrm{Z} = 53$ signifie que l'iode possède 53 neutrons.`,
        `L'atome d'iode possède 7 électrons sur sa cinquième couche.`,
        `L'iode possède au total 20 électrons dans des sous-couches $\\mathrm{d}$.`,
      ],
      correctChoiceIndexes: [0, 2, 3],
      explanation:
        `L'iode appartient au groupe 17. Sa configuration électronique fondamentale est $[\\mathrm{Kr}]\\,4\\mathrm{d}^{10}\\,5\\mathrm{s}^2\\,5\\mathrm{p}^5$ : il possède donc 7 électrons de valence sur la couche $\\mathrm{n}=5$, et un total de 20 électrons répartis dans les sous-couches $3\\mathrm{d}^{10}$ et $4\\mathrm{d}^{10}$.`,
      choiceExplanations: [
        `L'iode appartient à la colonne 17 de la classification périodique, celle des halogènes.`,
        `Le numéro atomique $\\mathrm{Z} = 53$ correspond au nombre de protons et, pour un atome neutre, au nombre d'électrons ; il ne donne pas directement le nombre de neutrons.`,
        `La couche externe de l'iode est $5\\mathrm{s}^2\\,5\\mathrm{p}^5$, soit sept électrons sur la cinquième couche.`,
        `L'iode possède $3\\mathrm{d}^{10}$ et $4\\mathrm{d}^{10}$, soit vingt électrons au total dans des sous-couches $\\mathrm{d}$.`,
      ],
    },
  {
      order: 65,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos des éléments constituant la matière vivante :`,
      choices: [
        `Le silicium est largement utilisé comme semi-conducteur en électronique ; il ne fait pas partie des éléments constituant la matière vivante.`,
        `L'iode $\\mathrm{I}$ est un oligoélément halogène pouvant se concentrer dans la thyroïde.`,
        `Le cadmium $\\mathrm{Cd}$, le mercure $\\mathrm{Hg}$ et le plomb $\\mathrm{Pb}$ sont indispensables à très faible concentration, mais toxiques à forte dose.`,
        `La majorité des oligoéléments présentés sont des métaux.`,
      ],
      correctChoiceIndexes: [1, 3],
      explanation:
        `La matière vivante comporte des éléments majoritaires et des éléments présents à l'état de traces. Parmi les oligoéléments retenus, plusieurs sont des métaux, tandis que certains éléments comme le cadmium, le mercure et le plomb sont surtout retenus pour leur toxicité.`,
      choiceExplanations: [
        `L'utilisation du silicium en électronique n'exclut pas sa présence dans le vivant : il figure parmi les éléments constituant la matière vivante, à l'état de traces.`,
        `L'iode est bien un halogène cité parmi les oligoéléments ; il peut notamment se concentrer dans la thyroïde.`,
        `Le cadmium, le mercure et le plomb ne sont pas présentés comme indispensables : ils sont classés parmi les éléments inutiles et souvent toxiques.`,
        `Parmi les quinze oligoéléments cités, neuf sont des métaux, contre trois halogènes et trois métalloïdes.`,
      ],
    },
  {
      order: 66,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Quelles propositions décrivent correctement les métaux, les non-métaux et les métalloïdes ?`,
      choices: [
        `Les métaux sont tous solides à température ambiante et conduisent le courant électrique.`,
        `Les non-métaux sont moins nombreux que les métaux ; ils peuvent être solides, liquides ou gazeux et tendent à former des anions.`,
        `Les métalloïdes constituent une famille nettement délimitée occupant une seule colonne de la classification périodique.`,
        `Les métalloïdes présentent des propriétés intermédiaires entre celles des métaux et des non-métaux et peuvent notamment être semi-conducteurs.`,
      ],
      correctChoiceIndexes: [1, 3],
      explanation:
        `Les métaux constituent la catégorie de référence : les non-métaux s'en distinguent nettement, tandis que les métalloïdes n'en possèdent que certaines caractéristiques. Le suffixe « -oïde » signifie « qui ressemble à » : les métalloïdes ont donc des propriétés intermédiaires entre métaux et non-métaux, notamment un comportement de semi-conducteur. La frontière entre ces familles reste toutefois peu nette.`,
      choiceExplanations: [
        `Les métaux sont généralement solides à température ambiante et conducteurs du courant, mais le mercure $\\mathrm{Hg}$ constitue une exception puisqu'il est liquide.`,
        `Les non-métaux sont moins nombreux et peuvent se présenter sous différents états physiques. Ils sont généralement isolants et tendent à gagner des électrons pour former des anions.`,
        `La limite entre métaux et non-métaux est peu nette. Les métalloïdes se situent dans cette zone intermédiaire et ne forment pas une colonne unique.`,
        `Les métalloïdes possèdent des propriétés intermédiaires, notamment un caractère semi-conducteur.`,
      ],
    },
  {
      order: 67,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `En vous appuyant sur les distinctions établies dans la question précédente :`,
      choices: [
        `Le bore $\\mathrm{B}$, le silicium $\\mathrm{Si}$ et le germanium $\\mathrm{Ge}$ sont des métalloïdes situés à la limite entre les métaux et les non-métaux.`,
        `Le fluor $\\mathrm{F}$, le chlore $\\mathrm{Cl}$, le brome $\\mathrm{Br}$ et l'iode $\\mathrm{I}$ sont des métaux situés dans la partie gauche de la classification.`,
        `Le sodium $\\mathrm{Na}$, le magnésium $\\mathrm{Mg}$ et le fer $\\mathrm{Fe}$ sont des métaux situés globalement dans la partie gauche ou centrale de la classification.`,
        `Le soufre $\\mathrm{S}$, le phosphore $\\mathrm{P}$, l'iode $\\mathrm{I}$ et le brome $\\mathrm{Br}$ sont tous gazeux à température ambiante puisqu'ils appartiennent aux non-métaux.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `Les exemples cités permettent de repérer les trois familles dans le tableau : les métalloïdes se trouvent dans une zone frontière, les halogènes appartiennent aux non-métaux situés vers la droite, et les métaux occupent principalement la partie gauche et centrale de la classification.`,
      choiceExplanations: [
        `$\\mathrm{B}$, $\\mathrm{Si}$ et $\\mathrm{Ge}$ sont bien des métalloïdes semi-conducteurs, placés à la frontière entre les deux grandes familles.`,
        `Le fluor, le chlore, le brome et l'iode sont des non-métaux appartenant à la famille des halogènes, située vers la droite du tableau périodique.`,
        `Le sodium et le magnésium sont placés à gauche, tandis que le fer appartient aux métaux de transition situés dans la partie centrale.`,
        `Les non-métaux n'ont pas tous le même état physique : le soufre, le phosphore et l'iode sont solides, tandis que le dibrome $\\mathrm{Br}_2$ est liquide à température ambiante.`,
      ],
    },
  {
      order: 68,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `On considère l'élément chimique situé dans la troisième période et dans la deuxième colonne du tableau périodique :`,
      choices: [
        `Sa configuration électronique externe est de la forme $\\mathrm{n}\\mathrm{s}^2$.`,
        `Il possède deux électrons de valence.`,
        `Cet élément appartient au bloc $\\mathrm{p}$.`,
        `Son numéro atomique est $\\mathrm{Z} = 12$ : il s'agit du magnésium.`,
      ],
      correctChoiceIndexes: [0, 1, 3],
      explanation:
        `L'élément situé dans la troisième période et dans la deuxième colonne est le magnésium. Sa configuration électronique externe est $3\\mathrm{s}^2$ : il appartient donc au bloc $\\mathrm{s}$ et possède deux électrons de valence sur sa couche externe.`,
      choiceExplanations: [
        `Un élément de la deuxième colonne possède une sous-couche externe $\\mathrm{s}$ remplie à deux électrons ; dans ce cas, on a bien une forme générale $\\mathrm{n}\\mathrm{s}^2$.`,
        `Le magnésium a pour couche externe $3\\mathrm{s}^2$ : il possède donc deux électrons de valence.`,
        `La deuxième colonne du tableau appartient au bloc $\\mathrm{s}$, et non au bloc $\\mathrm{p}$.`,
        `L'élément de la troisième période et de la deuxième colonne est bien le magnésium, de numéro atomique $\\mathrm{Z} = 12$.`,
      ],
    },
  {
      order: 69,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Parmi les appellations suivantes, laquelle ne correspond pas à une famille d'éléments chimiques présentée dans la classification périodique ?`,
      choices: [
        `Les halogènes.`,
        `Les métaux alcalino-terreux.`,
        `Les gaz rares.`,
        `Les métaux semi-conducteurs.`,
      ],
      correctChoiceIndexes: [3],
      explanation:
        `Les halogènes, les métaux alcalino-terreux et les gaz rares sont des familles classiques de la classification périodique. En revanche, l'expression « métaux semi-conducteurs » ne désigne pas une famille du tableau : le caractère semi-conducteur est associé aux métalloïdes, comme le bore, le silicium et le germanium.`,
      choiceExplanations: [
        `Les halogènes constituent bien une famille de la classification, située dans la colonne 17 ; elle comprend notamment le fluor, le chlore, le brome et l'iode.`,
        `Les métaux alcalino-terreux constituent bien la famille située dans la deuxième colonne du tableau périodique.`,
        `Les gaz rares constituent bien la famille de la colonne 18, avec notamment l'hélium, le néon et l'argon.`,
        `L'expression « métaux semi-conducteurs » ne correspond pas à une famille de la classification périodique. Le caractère semi-conducteur est associé aux métalloïdes, comme le bore, le silicium et le germanium.`,
      ],
    },
  {
      order: 70,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Retrouver l'ordre dans lequel les éléments chimiques formant la troisième période du tableau périodique sont rangés, par numéro atomique croissant :`,
      choices: [
        `$\\mathrm{Mg}$, $\\mathrm{Na}$, $\\mathrm{Al}$, $\\mathrm{Si}$, $\\mathrm{S}$, $\\mathrm{P}$, $\\mathrm{Cl}$ et $\\mathrm{Ar}$.`,
        `$\\mathrm{Al}$, $\\mathrm{Na}$, $\\mathrm{Mg}$, $\\mathrm{Si}$, $\\mathrm{P}$, $\\mathrm{S}$, $\\mathrm{Cl}$ et $\\mathrm{Ar}$.`,
        `$\\mathrm{Na}$, $\\mathrm{Mg}$, $\\mathrm{Al}$, $\\mathrm{Si}$, $\\mathrm{P}$, $\\mathrm{S}$, $\\mathrm{Cl}$ et $\\mathrm{Ar}$.`,
        `$\\mathrm{Na}$, $\\mathrm{Al}$, $\\mathrm{Mg}$, $\\mathrm{Si}$, $\\mathrm{P}$, $\\mathrm{S}$, $\\mathrm{Ar}$ et $\\mathrm{Cl}$.`,
      ],
      correctChoiceIndexes: [2],
      explanation:
        `Les éléments de la troisième période, classés par numéro atomique croissant, sont : sodium, magnésium, aluminium, silicium, phosphore, soufre, chlore puis argon, soit de $\\mathrm{Z}=11$ à $\\mathrm{Z}=18$.`,
      choiceExplanations: [
        `Le sodium ($\\mathrm{Z}=11$) vient avant le magnésium ($\\mathrm{Z}=12$), et le phosphore ($\\mathrm{Z}=15$) vient avant le soufre ($\\mathrm{Z}=16$) ; cet ordre est donc incorrect.`,
        `L'aluminium ($\\mathrm{Z}=13$) ne peut pas précéder le sodium ($\\mathrm{Z}=11$) ni le magnésium ($\\mathrm{Z}=12$).`,
        `C'est bien l'ordre correct de la troisième période : $\\mathrm{Na}$, $\\mathrm{Mg}$, $\\mathrm{Al}$, $\\mathrm{Si}$, $\\mathrm{P}$, $\\mathrm{S}$, $\\mathrm{Cl}$, $\\mathrm{Ar}$.`,
        `Le magnésium ($\\mathrm{Z}=12$) vient avant l'aluminium ($\\mathrm{Z}=13$), et le chlore ($\\mathrm{Z}=17$) vient avant l'argon ($\\mathrm{Z}=18$).`,
      ],
    },
  {
      order: 72,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `On considère l'élément cuivre ($\\mathrm{Z} = 29$) :`,
      choices: [
        `Il se trouve dans la quatrième période et dans la dixième colonne du tableau périodique.`,
        `La dernière sous-couche remplie est la sous-couche $4\\mathrm{s}$.`,
        `Le gaz noble se trouvant dans la même période que l'élément cuivre est l'élément krypton.`,
        `C'est un métal de transition.`,
      ],
      correctChoiceIndexes: [2, 3],
      explanation:
        `Le cuivre, de numéro atomique $\\mathrm{Z}=29$, appartient à la quatrième période et à la onzième colonne du tableau périodique. Sa configuration électronique fondamentale est $[\\mathrm{Ar}]\\,3\\mathrm{d}^{10}\\,4\\mathrm{s}^1$ : il s'agit donc d'un métal de transition du bloc $\\mathrm{d}$.`,
      choiceExplanations: [
        `Le cuivre est bien dans la quatrième période, mais il appartient à la onzième colonne et non à la dixième.`,
        `Dans la configuration fondamentale du cuivre, la sous-couche $3\\mathrm{d}$ est remplie et la sous-couche $4\\mathrm{s}$ ne contient qu'un seul électron.`,
        `Le cuivre appartient à la quatrième période, dont le gaz noble terminal est bien le krypton.`,
        `Le cuivre est un métal de transition appartenant au bloc $\\mathrm{d}$.`,
      ],
    },
  {
      order: 73,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question: `À propos des séries des lanthanides et des actinides :`,
      choices: [
        `Elles sont représentées sous le tableau principal afin de ne pas élargir excessivement la classification périodique.`,
        `Elles s'insèrent entre les colonnes 3 et 4 de la classification moderne.`,
        `Les lanthanides sont également appelés « terres rares ».`,
        `Les actinides appartiennent à la colonne 18 avec les gaz rares.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Les lanthanides et les actinides correspondent au bloc $\\mathrm{f}$. Ils sont généralement dessinés sous le tableau principal pour garder une classification plus compacte, bien qu'ils s'insèrent en réalité dans la suite des périodes, entre les colonnes 3 et 4. Les lanthanides sont aussi souvent appelés terres rares.`,
      choiceExplanations: [
        `Les deux séries sont le plus souvent représentées sous le tableau principal afin d'éviter d'élargir excessivement la classification périodique.`,
        `Dans la classification longue, ces deux séries s'insèrent dans la continuité des périodes entre les colonnes 3 et 4.`,
        `Les lanthanides sont aussi désignés sous le nom de terres rares.`,
        `La colonne 18 correspond aux gaz rares ; les actinides appartiennent au bloc $\\mathrm{f}$, pas à cette famille.`,
      ],
    },
];
