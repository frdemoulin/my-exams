import type { SeedQuestion } from './health-training-ue14.shared';

export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  {
      order: 1,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos de la notion d'orbitale moléculaire :`,
      choices: [
        `Une orbitale moléculaire est un volume associé à une molécule dans lequel peuvent évoluer des électrons.`,
        `Une orbitale moléculaire décrit la trajectoire précise d'un électron autour d'un seul noyau.`,
        `Une orbitale moléculaire peut résulter de la combinaison et du recouvrement d'orbitales atomiques.`,
        `Une orbitale moléculaire appartient nécessairement à un seul atome.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `Une orbitale moléculaire résulte de l'association d'orbitales atomiques lorsque des atomes forment une molécule. Elle décrit une répartition probable des électrons à l'échelle de l'édifice moléculaire, et non une trajectoire précise autour d'un noyau.`,
      choiceExplanations: [
        `L'orbitale moléculaire décrit une région de l'espace associée à l'ensemble de la molécule et susceptible d'être occupée par des électrons.`,
        `La mécanique quantique ne décrit pas une trajectoire précise de l'électron ; de plus, une orbitale moléculaire s'étend sur plusieurs atomes.`,
        `La combinaison d'orbitales atomiques compatibles permet de former de nouvelles orbitales moléculaires.`,
        `Une orbitale moléculaire n'est pas localisée sur un seul atome : elle appartient à l'édifice moléculaire.`,
      ],
    },
  {
      order: 2,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `Lors de la formation d'une liaison $\\sigma$ entre deux atomes :`,
      choices: [
        `Le recouvrement des orbitales atomiques s'effectue selon l'axe reliant les deux noyaux.`,
        `Dans l'orbitale liante, la densité électronique est importante entre les deux noyaux.`,
        `La liaison obtenue ne possède aucune symétrie autour de l'axe internucléaire.`,
        `La symétrie axiale d'une liaison $\\sigma$ autorise en principe une rotation autour de l'axe de la liaison.`,
      ],
      correctChoiceIndexes: [0, 1, 3],
      explanation:
        `Une liaison $\\sigma$ provient d'un recouvrement axial d'orbitales atomiques. L'orbitale moléculaire liante présente une densité électronique élevée entre les noyaux et possède une symétrie axiale, ce qui permet en principe la rotation autour d'une liaison simple isolée.`,
      choiceExplanations: [
        `Le recouvrement à l'origine d'une liaison $\\sigma$ est dirigé dans l'axe internucléaire.`,
        `La présence d'électrons entre les noyaux contribue à leur attraction mutuelle et à la stabilisation de la liaison.`,
        `Une liaison $\\sigma$ possède au contraire une symétrie axiale autour de l'axe reliant les noyaux.`,
        `La rotation autour de l'axe conserve le recouvrement axial d'une liaison $\\sigma$ ; elle n'est donc pas empêchée par cette liaison seule.`,
      ],
    },
  {
      order: 3,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `Quelles combinaisons d'orbitales atomiques peuvent former une liaison $\\sigma$ lorsqu'elles sont correctement orientées selon l'axe des noyaux ?`,
      choices: [
        `Le recouvrement de deux orbitales $\\mathrm{s}$.`,
        `Le recouvrement d'une orbitale $\\mathrm{s}$ et d'une orbitale $\\mathrm{p}$.`,
        `Le recouvrement axial de deux orbitales $\\mathrm{p}$.`,
        `Tous les items précédents sont faux.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Une liaison $\\sigma$ peut résulter d'un recouvrement axial de type $\\mathrm{s-s}$, $\\mathrm{s-p}$ ou $\\mathrm{p-p}$. Les trois premières propositions sont donc exactes : l'item affirmant qu'elles seraient toutes fausses est incorrect.`,
      choiceExplanations: [
        `Deux orbitales $\\mathrm{s}$ peuvent se recouvrir dans l'axe internucléaire et former une liaison $\\sigma$.`,
        `Une orbitale $\\mathrm{s}$ et une orbitale $\\mathrm{p}$ orientée vers elle peuvent former une liaison $\\sigma$.`,
        `Deux orbitales $\\mathrm{p}$ orientées face à face selon l'axe des noyaux peuvent former une liaison $\\sigma$.`,
        `Les trois propositions précédentes décrivent des recouvrements axiaux capables de former une liaison $\\sigma$ ; elles ne sont donc pas toutes fausses.`,
      ],
    },
  {
      order: 4,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `À propos des orbitales moléculaires liante $\\sigma$ et antiliante $\\sigma^*$ :`,
      choices: [
        `L'orbitale liante $\\sigma$ présente une densité électronique importante entre les noyaux.`,
        `L'orbitale antiliante $\\sigma^*$ présente une densité électronique très faible ou nulle entre les noyaux.`,
        `L'occupation d'une orbitale liante contribue à stabiliser la molécule.`,
        `L'astérisque de $\\sigma^*$ indique que l'orbitale porte nécessairement une charge positive.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `La combinaison de deux orbitales atomiques produit une orbitale moléculaire liante et une orbitale moléculaire antiliante. L'orbitale liante concentre la densité électronique entre les noyaux et stabilise la molécule, tandis que l'orbitale $\\sigma^*$ possède un nœud entre eux et s'oppose à la liaison.`,
      choiceExplanations: [
        `La densité électronique entre les noyaux favorise leur cohésion : c'est le caractère liant de l'orbitale $\\sigma$.`,
        `L'orbitale $\\sigma^*$ présente un nœud entre les noyaux, c'est-à-dire une zone de densité électronique nulle ou très faible.`,
        `Des électrons placés dans une orbitale liante abaissent l'énergie de l'édifice moléculaire.`,
        `L'astérisque signifie « antiliante » ; il ne représente pas une charge électrique.`,
      ],
    },
  {
      order: 5,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `À propos d'une liaison $\\pi$ :`,
      choices: [
        `Elle provient du recouvrement latéral de deux orbitales $\\mathrm{p}$ parallèles.`,
        `Sa densité électronique se répartit de part et d'autre de l'axe internucléaire.`,
        `Elle possède une symétrie axiale qui permet une libre rotation sans modifier le recouvrement.`,
        `Lorsqu'une liaison multiple se forme, le premier doublet partagé constitue toujours une liaison $\\pi$.`,
      ],
      correctChoiceIndexes: [0, 1],
      explanation:
        `Une liaison $\\pi$ est créée par le recouvrement latéral de deux orbitales $\\mathrm{p}$ parallèles. Sa densité électronique se situe au-dessus et au-dessous, ou de part et d'autre, de l'axe internucléaire. Elle ne possède pas de symétrie axiale et limite donc la rotation.`,
      choiceExplanations: [
        `Deux orbitales $\\mathrm{p}$ parallèles peuvent se recouvrir latéralement et former une liaison $\\pi$.`,
        `La densité électronique d'une liaison $\\pi$ n'est pas centrée sur l'axe : elle se trouve dans deux régions situées de part et d'autre de celui-ci.`,
        `La rotation désalignerait les orbitales $\\mathrm{p}$ et détruirait leur recouvrement ; elle est donc limitée par la liaison $\\pi$.`,
        `Le premier doublet partagé entre deux atomes forme une liaison $\\sigma$ ; les doublets supplémentaires forment des liaisons $\\pi$.`,
      ],
    },
  {
      order: 6,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question: `En comparant les liaisons $\\sigma$ et $\\pi$ :`,
      choices: [
        `Une liaison $\\sigma$ résulte généralement d'un recouvrement plus important que celui d'une liaison $\\pi$.`,
        `Une liaison $\\pi$ est généralement moins stable qu'une liaison $\\sigma$ entre les mêmes atomes.`,
        `La présence d'une liaison $\\pi$ limite la rotation autour de l'axe internucléaire.`,
        `Une double liaison est constituée de deux liaisons $\\pi$ et d'aucune liaison $\\sigma$.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Le recouvrement axial d'une liaison $\\sigma$ est plus efficace que le recouvrement latéral d'une liaison $\\pi$. La liaison $\\sigma$ est donc généralement plus stable. Une double liaison associe une liaison $\\sigma$ et une liaison $\\pi$, cette dernière empêchant la libre rotation.`,
      choiceExplanations: [
        `Le recouvrement axial concentre davantage les orbitales l'une vers l'autre que le recouvrement latéral.`,
        `Le plus faible recouvrement des orbitales $\\mathrm{p}$ rend la liaison $\\pi$ généralement plus fragile que la liaison $\\sigma$ correspondante.`,
        `Une rotation désalignerait les orbitales $\\mathrm{p}$ responsables de la liaison $\\pi$ ; elle est donc défavorisée.`,
        `Une double liaison est formée d'une liaison $\\sigma$ et d'une liaison $\\pi$.`,
      ],
    },
  {
      order: 7,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `Le dioxygène $\\mathrm{O_2}$, transporté dans le sang par l'hémoglobine, est représenté par une double liaison $\\mathrm{O=O}$. Cette double liaison comporte :`,
      choices: [
        `Une liaison $\\sigma$ et une liaison $\\pi$.`,
        `Deux liaisons $\\sigma$ et aucune liaison $\\pi$.`,
        `Deux liaisons $\\pi$ et aucune liaison $\\sigma$.`,
        `Une seule liaison $\\sigma$.`,
      ],
      correctChoiceIndexes: [0],
      explanation:
        `Dans le modèle des liaisons multiples utilisé ici, le premier doublet partagé forme une liaison $\\sigma$ et le second forme une liaison $\\pi$. La double liaison $\\mathrm{O=O}$ comporte donc une liaison $\\sigma$ et une liaison $\\pi$.`,
      choiceExplanations: [
        `C'est la composition générale d'une double liaison : une liaison $\\sigma$ et une liaison $\\pi$.`,
        `Deux liaisons $\\sigma$ ne peuvent pas être formées simultanément entre les mêmes atomes selon le même axe.`,
        `Une liaison multiple contient toujours une première liaison $\\sigma$ avant les éventuelles liaisons $\\pi$.`,
        `Cette proposition ne tient pas compte du second doublet partagé qui forme une liaison $\\pi$.`,
      ],
    },
  {
      order: 8,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `Le peroxyde d'hydrogène $\\mathrm{H-O-O-H}$ est notamment utilisé dans certains produits d'éclaircissement dentaire. En considérant sa formule développée, combien comporte-t-il de liaisons $\\sigma$ et de liaisons $\\pi$ ?`,
      choices: [
        `2 liaisons $\\sigma$ et 1 liaison $\\pi$.`,
        `1 liaison $\\sigma$ et 2 liaisons $\\pi$.`,
        `3 liaisons $\\pi$ et aucune liaison $\\sigma$.`,
        `Tous les items précédents sont faux.`,
      ],
      correctChoiceIndexes: [3],
      explanation:
        `La formule $\\mathrm{H-O-O-H}$ comporte trois liaisons simples : deux liaisons $\\mathrm{O-H}$ et une liaison $\\mathrm{O-O}$. Toute liaison simple est une liaison $\\sigma$ ; la molécule possède donc trois liaisons $\\sigma$ et aucune liaison $\\pi$. Aucune des trois premières propositions ne donne ce résultat.`,
      choiceExplanations: [
        `La molécule ne contient aucune liaison multiple : elle ne possède donc pas de liaison $\\pi$. Elle comporte en outre trois liaisons $\\sigma$, et non deux.`,
        `Les trois liaisons représentées sont simples et correspondent toutes à des liaisons $\\sigma$.`,
        `Une liaison $\\pi$ n'apparaît que dans une liaison multiple ; le peroxyde d'hydrogène présenté ici n'en comporte aucune.`,
        `Les trois premières propositions sont fausses : la réponse correcte est trois liaisons $\\sigma$ et aucune liaison $\\pi$.`,
      ],
    },
  {
      order: 9,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `Le chlorure d'hydrogène $\\mathrm{HCl}$ est à l'origine de l'acidité gastrique lorsqu'il est dissous dans l'eau. À propos de la liaison $\\mathrm{H-Cl}$ dans la molécule gazeuse :`,
      choices: [
        `$\\mathrm{HCl}$ est une molécule diatomique.`,
        `La liaison simple $\\mathrm{H-Cl}$ est une liaison $\\sigma$.`,
        `Dans une représentation simplifiée, elle peut résulter d'un recouvrement axial de type $\\mathrm{s-p}$.`,
        `La molécule contient nécessairement une liaison $\\pi$.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `$\\mathrm{HCl}$ est une molécule diatomique possédant une seule liaison covalente. Cette liaison est de type $\\sigma$ et peut être décrite simplement par le recouvrement axial de l'orbitale $1\\mathrm{s}$ de l'hydrogène avec une orbitale $\\mathrm{p}$ du chlore orientée selon l'axe internucléaire.`,
      choiceExplanations: [
        `La molécule $\\mathrm{HCl}$ est constituée de deux atomes : elle est donc diatomique.`,
        `Toute liaison simple entre deux atomes est une liaison $\\sigma$.`,
        `Le recouvrement axial d'une orbitale $\\mathrm{s}$ avec une orbitale $\\mathrm{p}$ correctement orientée peut produire une liaison $\\sigma$.`,
        `Une liaison $\\pi$ nécessite un recouvrement latéral supplémentaire ; elle n'est pas présente dans la liaison simple $\\mathrm{H-Cl}$.`,
      ],
    },
  {
      order: 10,
      difficulty: 'EASY',
      answerFormat: 'MULTIPLE',
      question:
        `Le diazote $\\mathrm{N_2}$ peut être employé comme gaz inerte pour protéger certains aliments ou préparations pharmaceutiques. Dans le modèle simplifié, sa triple liaison $\\mathrm{N\\equiv N}$ comporte :`,
      choices: [
        `1 liaison $\\sigma$ et 2 liaisons $\\pi$.`,
        `2 liaisons $\\sigma$ et 1 liaison $\\pi$.`,
        `3 liaisons $\\sigma$ et aucune liaison $\\pi$.`,
        `Tous les items précédents sont faux.`,
      ],
      correctChoiceIndexes: [0],
      explanation:
        `Une triple liaison est constituée d'une première liaison $\\sigma$ formée selon l'axe internucléaire, puis de deux liaisons $\\pi$ formées par deux recouvrements latéraux indépendants d'orbitales $\\mathrm{p}$. La première proposition étant exacte, l'item « Tous les items précédents sont faux » est lui-même faux.`,
      choiceExplanations: [
        `C'est la composition générale d'une triple liaison : une liaison $\\sigma$ et deux liaisons $\\pi$.`,
        `Il ne peut y avoir qu'une liaison $\\sigma$ selon l'axe internucléaire entre les deux atomes.`,
        `Les deux doublets supplémentaires ne forment pas des liaisons $\\sigma$, mais deux liaisons $\\pi$.`,
        `La première proposition est exacte ; les items précédents ne sont donc pas tous faux.`,
      ],
    },
  {
      order: 11,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Le cyanure d'hydrogène $\\mathrm{HCN}$ est un composé extrêmement toxique, car l'ion cyanure peut bloquer la respiration cellulaire. On retient la représentation simplifiée $\\mathrm{H-C\\equiv N}$. À propos de cette molécule :`,
      choices: [
        `Elle comporte 2 liaisons $\\sigma$.`,
        `Elle comporte 2 liaisons $\\pi$.`,
        `La triple liaison $\\mathrm{C\\equiv N}$ est constituée d'une liaison $\\sigma$ et de deux liaisons $\\pi$.`,
        `La liaison $\\mathrm{H-C}$ est une orbitale atomique $\\sigma$ localisée exclusivement sur le carbone.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `La liaison simple $\\mathrm{H-C}$ est une liaison $\\sigma$. La triple liaison $\\mathrm{C\\equiv N}$ contient une liaison $\\sigma$ et deux liaisons $\\pi$. La molécule possède donc au total 2 liaisons $\\sigma$ et 2 liaisons $\\pi$. Une liaison $\\sigma$ relève du modèle moléculaire : elle n'est pas une orbitale atomique localisée sur un seul atome.`,
      choiceExplanations: [
        `On compte une liaison $\\sigma$ dans $\\mathrm{H-C}$ et une autre dans $\\mathrm{C\\equiv N}$, soit deux au total.`,
        `Les deux doublets supplémentaires de la triple liaison $\\mathrm{C\\equiv N}$ forment deux liaisons $\\pi$.`,
        `Une triple liaison associe une première liaison $\\sigma$ et deux liaisons $\\pi$.`,
        `La liaison $\\mathrm{H-C}$ résulte d'un recouvrement d'orbitales atomiques, mais la liaison formée est décrite à l'échelle de la molécule.`,
      ],
    },
  {
      order: 12,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `L'urée $\\mathrm{O=C(NH_2)_2}$ est le principal déchet azoté éliminé dans les urines ; son dosage participe à l'évaluation de la fonction rénale. Sa formule développée comporte une liaison $\\mathrm{C=O}$, deux liaisons $\\mathrm{C-N}$ et quatre liaisons $\\mathrm{N-H}$.`,
      choices: [
        `Une molécule d'urée comporte 7 liaisons $\\sigma$ et 1 liaison $\\pi$.`,
        `$0{,}10\\,\\mathrm{mol}$ d'urée correspondent à $0{,}70\\,\\mathrm{mol}$ de liaisons $\\sigma$ et à $0{,}10\\,\\mathrm{mol}$ de liaisons $\\pi$.`,
        `La liaison $\\pi$ du carbonyle est une orbitale atomique appartenant exclusivement à l'oxygène.`,
        `La double liaison $\\mathrm{C=O}$ contient deux liaisons $\\sigma$ superposées sur le même axe.`,
      ],
      correctChoiceIndexes: [0, 1],
      explanation:
        `Les six liaisons simples de l'urée sont des liaisons $\\sigma$ : quatre $\\mathrm{N-H}$ et deux $\\mathrm{C-N}$. La double liaison $\\mathrm{C=O}$ ajoute une liaison $\\sigma$ et une liaison $\\pi$, soit 7 $\\sigma$ et 1 $\\pi$. Pour $0{,}10\\,\\mathrm{mol}$ de molécules, on obtient $7\\times0{,}10=0{,}70\\,\\mathrm{mol}$ de liaisons $\\sigma$ et $0{,}10\\,\\mathrm{mol}$ de liaisons $\\pi$.`,
      choiceExplanations: [
        `Les quatre liaisons $\\mathrm{N-H}$, les deux liaisons $\\mathrm{C-N}$ et la composante $\\sigma$ du carbonyle donnent sept liaisons $\\sigma$ ; le carbonyle ajoute une liaison $\\pi$.`,
        `La quantité de chaque type de liaison est obtenue en multipliant le nombre de liaisons par molécule par la quantité de matière de molécules.`,
        `La liaison $\\pi$ résulte du recouvrement de deux orbitales atomiques, mais elle est décrite par une orbitale moléculaire étendue sur le groupe carbonyle.`,
        `Une double liaison associe une liaison $\\sigma$ et une liaison $\\pi$, et non deux liaisons $\\sigma$.`,
      ],
    },
  {
      order: 13,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Le méthanamide $\\mathrm{H-C(=O)-NH_2}$ est l'amide le plus simple ; la fonction amide est très fréquente dans les protéines et dans de nombreux médicaments. On le compare à l'urée $\\mathrm{O=C(NH_2)_2}$.`,
      choices: [
        `Le méthanamide comporte 5 liaisons $\\sigma$ et 1 liaison $\\pi$.`,
        `Il possède deux liaisons $\\sigma$ de moins que l'urée, mais le même nombre de liaisons $\\pi$.`,
        `La liaison $\\pi$ du groupe carbonyle résulte d'un recouvrement latéral d'orbitales atomiques $\\mathrm{p}$.`,
        `La symétrie axiale de la composante $\\sigma$ suffit à permettre une libre rotation autour de la liaison double $\\mathrm{C=O}$.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Le méthanamide possède quatre liaisons simples et la composante $\\sigma$ du carbonyle, soit 5 liaisons $\\sigma$, ainsi qu'une liaison $\\pi$. L'urée possède 7 liaisons $\\sigma$ et une liaison $\\pi$. La composante $\\pi$, issue d'un recouvrement latéral, empêche la libre rotation autour de la double liaison.`,
      choiceExplanations: [
        `Les liaisons $\\mathrm{H-C}$, $\\mathrm{C-N}$, les deux $\\mathrm{N-H}$ et la composante $\\sigma$ de $\\mathrm{C=O}$ donnent cinq liaisons $\\sigma$ ; le carbonyle apporte une liaison $\\pi$.`,
        `Le remplacement d'un groupe $\\mathrm{-NH_2}$ par un hydrogène retire globalement deux liaisons $\\sigma$, sans supprimer le carbonyle.`,
        `La composante $\\pi$ d'une double liaison provient du recouvrement latéral de deux orbitales $\\mathrm{p}$ parallèles.`,
        `La rotation désalignerait les orbitales $\\mathrm{p}$ responsables de la liaison $\\pi$ ; elle n'est donc pas libre.`,
      ],
    },
  {
      order: 14,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Deux orbitales atomiques compatibles se combinent. On retient l'ordre énergétique simplifié $E(\\sigma)<E(\\mathrm{OA})<E(\\sigma^*)$.`,
      choices: [
        `La combinaison de 2 orbitales atomiques conduit à 2 orbitales moléculaires.`,
        `Le niveau $\\sigma$, plus bas en énergie, correspond à une orbitale moléculaire liante.`,
        `Le niveau $\\sigma^*$ est une orbitale atomique antiliante plus énergétique.`,
        `Tous les items précédents sont vrais.`,
      ],
      correctChoiceIndexes: [0, 1],
      explanation:
        `Le nombre d'orbitales est conservé : deux orbitales atomiques donnent deux orbitales moléculaires, l'une liante $\\sigma$ et l'autre antiliante $\\sigma^*$. Le piège porte sur le vocabulaire : $\\sigma^*$ est une orbitale moléculaire, et non une orbitale atomique.`,
      choiceExplanations: [
        `Deux fonctions orbitalaires initiales donnent deux combinaisons indépendantes, donc deux orbitales moléculaires.`,
        `L'orbitale liante est stabilisée par rapport aux orbitales atomiques de départ.`,
        `$\\sigma^*$ est bien antiliante et plus énergétique, mais elle appartient à l'édifice moléculaire.`,
        `Le troisième item étant faux, les trois items précédents ne sont pas tous vrais.`,
      ],
    },
  {
      order: 15,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Les deux profils ci-dessous représentent schématiquement la densité électronique $\\rho(x)$ le long de l'axe internucléaire. Le point $x=0$ est situé exactement entre les deux noyaux.\n\n![Profils A et B de densité électronique le long de l'axe internucléaire](/images/training/ue14/orbitales-moleculaires/profils-densite-electronique-sigma.png)`,
      choices: [
        `Le profil A est compatible avec une orbitale moléculaire liante $\\sigma$.`,
        `Le profil B est compatible avec une orbitale moléculaire antiliante $\\sigma^*$.`,
        `La valeur $\\rho_B(0)=0$ traduit la présence d'un nœud entre les deux noyaux.`,
        `Le profil B est nécessairement plus stable que le profil A, car ses maxima sont proches des noyaux.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Une orbitale liante concentre la densité électronique entre les noyaux : le profil A est maximal dans la région internucléaire. Une orbitale antiliante présente au contraire un nœud entre les noyaux : le profil B s'annule en $x=0$. La proximité de maxima avec les noyaux ne suffit pas à rendre l'orbitale antiliante plus stable.`,
      choiceExplanations: [
        `Une densité importante entre les noyaux favorise leur cohésion et caractérise le profil liante.`,
        `Le profil B présente une annulation au milieu des noyaux, caractéristique d'une orbitale antiliante.`,
        `Un nœud est une région où la densité électronique s'annule.`,
        `La stabilité dépend surtout de la densité internucléaire : le nœud du profil B s'oppose à la liaison.`,
      ],
    },
  {
      order: 16,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Les schémas suivants montrent deux orientations possibles de deux orbitales atomiques $\\mathrm{p}$ avant leur combinaison.\n\n![Deux orientations possibles de deux orbitales atomiques $\\mathrm{p}$](/images/training/ue14/orbitales-moleculaires/recouvrements-orbitales-p.png)`,
      choices: [
        `Le schéma 1 peut conduire à une liaison $\\sigma$ par recouvrement axial.`,
        `Le schéma 2 peut conduire à une liaison $\\pi$ par recouvrement latéral.`,
        `Le schéma 1 représente déjà deux orbitales moléculaires antiliantes $\\sigma^*$.`,
        `Dans le schéma 2, les orbitales $\\mathrm{p}$ doivent rester parallèles pour conserver le recouvrement.`,
      ],
      correctChoiceIndexes: [0, 1, 3],
      explanation:
        `Deux orbitales $\\mathrm{p}$ placées face à face selon l'axe internucléaire donnent un recouvrement axial de type $\\sigma$. Deux orbitales $\\mathrm{p}$ parallèles peuvent se recouvrir latéralement pour former une liaison $\\pi$ ; leur parallélisme doit être conservé. Les lobes dessinés avant combinaison sont des orbitales atomiques, pas déjà des orbitales moléculaires.`,
      choiceExplanations: [
        `Le face-à-face des lobes selon l'axe des noyaux correspond à un recouvrement axial.`,
        `Le recouvrement de deux orbitales $\\mathrm{p}$ parallèles de part et d'autre de l'axe produit une liaison $\\pi$.`,
        `Le schéma montre des orbitales atomiques sur les deux atomes avant leur combinaison.`,
        `Une rotation désalignerait les orbitales et diminuerait, voire supprimerait, le recouvrement latéral.`,
      ],
    },
  {
      order: 17,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Le dioxygène $\\mathrm{O_2}$ transporté par l'hémoglobine est représenté par une double liaison $\\mathrm{O=O}$.`,
      choices: [
        `La double liaison comporte une liaison $\\sigma$ et une liaison $\\pi$.`,
        `Une rotation autour de l'axe $\\mathrm{O-O}$ désalignerait les orbitales $\\mathrm{p}$ responsables de la liaison $\\pi$.`,
        `La liaison $\\pi$ est une orbitale atomique appartenant exclusivement à l'un des deux atomes d'oxygène.`,
        `La double liaison est constituée de deux liaisons $\\sigma$ superposées sur le même axe.`,
      ],
      correctChoiceIndexes: [0, 1],
      explanation:
        `Une double liaison associe une liaison $\\sigma$, issue d'un recouvrement axial, et une liaison $\\pi$, issue d'un recouvrement latéral de deux orbitales $\\mathrm{p}$. Une rotation désalignerait ces orbitales et détruirait leur recouvrement. La liaison $\\pi$ appartient à l'édifice moléculaire et n'est pas une orbitale atomique localisée sur un seul oxygène.`,
      choiceExplanations: [
        `C'est la composition générale d'une double liaison.`,
        `Le maintien du parallélisme des orbitales $\\mathrm{p}$ est indispensable au recouvrement latéral.`,
        `La liaison $\\pi$ est décrite par une orbitale moléculaire étendue sur les deux atomes.`,
        `Il ne peut exister qu'une composante $\\sigma$ selon l'axe internucléaire ; le second doublet forme une liaison $\\pi$.`,
      ],
    },
  {
      order: 18,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Le diazote $\\mathrm{N_2}$ est utilisé pour créer une atmosphère protectrice dans certains conditionnements alimentaires et pharmaceutiques. On considère un ensemble de 100 molécules de $\\mathrm{N_2}$, chacune possédant une triple liaison.`,
      choices: [
        `L'ensemble comporte 100 liaisons $\\sigma$.`,
        `L'ensemble comporte 200 liaisons $\\pi$.`,
        `La triple liaison représente au total 300 doublets liants pour les 100 molécules.`,
        `L'ensemble comporte 300 liaisons $\\sigma$.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Chaque triple liaison contient une liaison $\\sigma$ et deux liaisons $\\pi$, soit trois doublets liants. Pour 100 molécules, on compte donc 100 liaisons $\\sigma$, 200 liaisons $\\pi$ et 300 doublets liants.`,
      choiceExplanations: [
        `Il existe une liaison $\\sigma$ par molécule de diazote.`,
        `Deux liaisons $\\pi$ par molécule donnent 200 liaisons $\\pi$ pour 100 molécules.`,
        `Une triple liaison représente trois doublets liants ; 100 molécules en comportent donc 300.`,
        `Une triple liaison ne contient qu'une seule liaison $\\sigma$, pas trois.`,
      ],
    },
  {
      order: 19,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Le dioxyde de carbone $\\mathrm{O=C=O}$ est produit par le métabolisme cellulaire puis éliminé par la ventilation pulmonaire. On considère 25 molécules de $\\mathrm{CO_2}$.`,
      choices: [
        `Chaque molécule comporte 2 liaisons $\\sigma$ et 2 liaisons $\\pi$.`,
        `Les 25 molécules comportent au total 50 liaisons $\\sigma$ et 50 liaisons $\\pi$.`,
        `En additionnant les composantes $\\sigma$ et $\\pi$, l'ensemble comporte 100 composantes de liaison.`,
        `Les 25 molécules mettent en jeu seulement 100 électrons dans leurs liaisons covalentes.`,
      ],
      correctChoiceIndexes: [0, 1, 2],
      explanation:
        `Chaque liaison double $\\mathrm{C=O}$ comporte une liaison $\\sigma$ et une liaison $\\pi$. Le dioxyde de carbone en possède deux : cela donne 2 $\\sigma$ et 2 $\\pi$ par molécule. Pour 25 molécules, on compte 50 de chaque type, soit 100 composantes de liaison. Chaque composante contient deux électrons : 200 électrons sont donc engagés dans ces liaisons, et non 100.`,
      choiceExplanations: [
        `Les deux doubles liaisons apportent chacune une liaison $\\sigma$ et une liaison $\\pi$.`,
        `On multiplie deux liaisons de chaque type par 25 molécules.`,
        `Chaque molécule possède quatre composantes de liaison ; $25\\times4=100$.`,
        `Les 100 composantes de liaison contiennent chacune deux électrons, soit 200 électrons au total.`,
      ],
    },
  {
      order: 20,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Un compte rendu compare quatre molécules rencontrées en toxicologie, en physiologie respiratoire ou en biochimie : $\\mathrm{HCN}$, $\\mathrm{CO_2}$, l'urée $\\mathrm{O=C(NH_2)_2}$ et le méthanamide $\\mathrm{H-C(=O)-NH_2}$.`,
      choices: [
        `$\\mathrm{HCN}$ et $\\mathrm{CO_2}$ comportent chacun 3 liaisons $\\sigma$ et 1 liaison $\\pi$.`,
        `L'urée et le méthanamide comportent chacun 2 liaisons $\\pi$.`,
        `Le méthanamide possède davantage de liaisons $\\sigma$ que l'urée.`,
        `Aucun des items précédents n'est vrai.`,
      ],
      correctChoiceIndexes: [3],
      explanation:
        `$\\mathrm{HCN}$ et $\\mathrm{CO_2}$ comportent chacun 2 liaisons $\\sigma$ et 2 liaisons $\\pi$. L'urée et le méthanamide possèdent chacun un seul carbonyle, donc une seule liaison $\\pi$. Enfin, l'urée possède 7 liaisons $\\sigma$, contre 5 pour le méthanamide. Les trois premiers items sont donc faux.`,
      choiceExplanations: [
        `$\\mathrm{HCN}$ possède une liaison simple et une liaison triple, soit 2 $\\sigma$ et 2 $\\pi$ ; $\\mathrm{CO_2}$ possède deux doubles liaisons, soit également 2 $\\sigma$ et 2 $\\pi$.`,
        `Dans les deux molécules, le seul carbonyle apporte une seule liaison $\\pi$.`,
        `L'urée possède deux liaisons $\\sigma$ de plus que le méthanamide, et non l'inverse.`,
        `Les trois propositions précédentes sont fausses ; cet item est donc exact.`,
      ],
    },
];
