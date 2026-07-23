import type { SeedQuestion } from './health-training-ue14.shared';

export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
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
        `Le cisplatine est un médicament de chimiothérapie contenant du platine, utilisé dans le traitement de plusieurs cancers. Son action repose notamment sur sa capacité à former de nouvelles liaisons de coordination avec l'ADN des cellules tumorales. Dans le modèle considéré, le platine central est initialement entouré de deux ligands chlorure et de deux molécules d'ammoniac. À proximité de l'ADN, les deux ligands chlorure sont remplacés par des atomes d'azote appartenant à des bases azotées. Concernant la structure et le mécanisme d'action du cisplatine, quelles propositions sont exactes ?`,
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
        `Dans ce modèle, le platine se lie aux atomes d'azote des bases de l'ADN. Il en modifie la conformation plutôt qu'il ne provoque directement sa coupure.`,
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
      order: 51,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `À partir des données de l'énoncé commun, quelles propositions sont exactes ?`,
      choices: [
        `L'ion $\\mathrm{Na^{+}}$ possède 10 électrons et présente la même configuration électronique que le néon.`,
        `L'ion $\\mathrm{Cl^{-}}$ possède 16 électrons, car il porte une charge négative.`,
        `La formation de $\\mathrm{Na^{+}}$ ou de $\\mathrm{Cl^{-}}$ ne modifie pas le nombre de protons de leur noyau.`,
        `Les ions $\\mathrm{Na^{+}}$ et $\\mathrm{Cl^{-}}$ sont isoélectroniques l'un de l'autre.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `La charge d'un ion traduit une perte ou un gain d'électrons, sans modification du noyau. Le sodium perd un électron et forme $\\mathrm{Na^{+}}$, qui possède 10 électrons comme le néon. Le chlore gagne un électron et forme $\\mathrm{Cl^{-}}$, qui possède 18 électrons comme l'argon.`,
      choiceExplanations: [
        `Le sodium neutre possède 11 électrons. Après la perte d'un électron, $\\mathrm{Na^{+}}$ en possède 10 et devient isoélectronique du néon.`,
        `Le chlore neutre possède 17 électrons. La charge négative traduit le gain d'un électron : $\\mathrm{Cl^{-}}$ possède donc 18 électrons.`,
        `Une ionisation modifie seulement le cortège électronique. Le numéro atomique et le nombre de protons restent inchangés.`,
        `$\\mathrm{Na^{+}}$ possède 10 électrons, tandis que $\\mathrm{Cl^{-}}$ en possède 18 : leurs configurations électroniques sont différentes.`,
      ],
    },
  {
      order: 52,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Concernant l'association du sodium et du chlore dans le chlorure de sodium, quelles propositions sont exactes ?`,
      choices: [
        `La formule $\\mathrm{NaCl}$ traduit l'association d'un ion $\\mathrm{Na^{+}}$ et d'un ion $\\mathrm{Cl^{-}}$ dans des proportions électriquement neutres.`,
        `Deux ions chlorure sont nécessaires pour compenser la charge d'un seul ion sodium.`,
        `La cohésion du solide ionique repose sur l'attraction électrostatique entre ions de charges opposées.`,
        `La liaison ionique est décrite comme le partage localisé d'un doublet liant entre le sodium et le chlore.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `Dans le modèle ionique, le sodium cède un électron et le chlore le capte. Les charges $+1$ et $-1$ se compensent dans la proportion 1:1, d'où la formule $\\mathrm{NaCl}$. La cohésion résulte de l'attraction électrostatique entre les ions du réseau.`,
      choiceExplanations: [
        `La somme des charges vaut $+1+(-1)=0$ : une proportion 1:1 assure l'électroneutralité.`,
        `Un ion sodium porte la charge $+1$ ; un seul ion chlorure de charge $-1$ suffit à la compenser.`,
        `Les ions de charges opposées s'attirent dans le réseau cristallin : c'est le modèle de la liaison ionique.`,
        `Le partage d'un doublet localisé caractérise une liaison covalente. La liaison ionique est décrite par l'attraction entre ions.`,
      ],
    },
  {
      order: 53,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Dans certains équilibres acido-basiques biologiques, l'ammoniac peut fixer un proton selon $\\mathrm{NH_{3}+H^{+}\\rightarrow NH_{4}^{+}}$. Quelles propositions sont exactes ?`,
      choices: [
        `L'ammoniac joue le rôle de donneur de doublet et l'ion $\\mathrm{H^{+}}$ celui d'accepteur.`,
        `Le proton fournit les deux électrons nécessaires à la nouvelle liaison $\\mathrm{N-H}$.`,
        `Une fois $\\mathrm{NH_{4}^{+}}$ formé, ses quatre liaisons $\\mathrm{N-H}$ sont équivalentes.`,
        `La charge positive reste localisée sur l'hydrogène qui provenait initialement de $\\mathrm{H^{+}}$.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `Le doublet non liant de l'azote est donné à $\\mathrm{H^{+}}$, qui ne possède aucun électron. La liaison ainsi formée est une liaison de coordination par son mode de formation ; dans l'ion ammonium obtenu, les quatre liaisons $\\mathrm{N-H}$ sont équivalentes et la charge est globale.`,
      choiceExplanations: [
        `L'azote de $\\mathrm{NH_{3}}$ fournit son doublet non liant ; $\\mathrm{H^{+}}$ possède une orbitale vacante et l'accepte.`,
        `$\\mathrm{H^{+}}$ ne possède aucun électron. Les deux électrons de la liaison proviennent initialement du doublet de l'azote.`,
        `Après formation de l'ion, la liaison issue de la coordination ne peut plus être distinguée des trois autres liaisons $\\mathrm{N-H}$.`,
        `La charge $+$ caractérise l'ensemble de l'ion ammonium et ne reste pas attachée à un hydrogène identifiable.`,
      ],
    },
  {
      order: 54,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Le peroxyde d'hydrogène $\\mathrm{H_{2}O_{2}}$, utilisé notamment dans certains produits d'éclaircissement dentaire, possède la formule développée $\\mathrm{H-O-O-H}$. Quelles propositions sont exactes ?`,
      choices: [
        `La molécule comporte trois liaisons simples, donc trois liaisons $\\sigma$.`,
        `Dans sa représentation de Lewis usuelle, chaque atome d'oxygène porte deux doublets non liants.`,
        `La liaison $\\mathrm{O-O}$ est une liaison double constituée d'une liaison $\\sigma$ et d'une liaison $\\pi$.`,
        `Tous les électrons de valence des atomes d'oxygène participent à des liaisons.`,
      ],
      correctChoiceIndexes: [0, 1],
      explanation:
        `La formule $\\mathrm{H-O-O-H}$ contient deux liaisons $\\mathrm{O-H}$ et une liaison $\\mathrm{O-O}$, toutes simples et donc de type $\\sigma$. Chaque oxygène forme deux liaisons et conserve deux doublets non liants afin de compléter son octet.`,
      choiceExplanations: [
        `Les deux liaisons $\\mathrm{O-H}$ et la liaison $\\mathrm{O-O}$ sont simples : il y a donc trois liaisons $\\sigma$.`,
        `Chaque oxygène possède six électrons de valence ; après deux liaisons simples, quatre électrons restent sous forme de deux doublets non liants.`,
        `La liaison $\\mathrm{O-O}$ de $\\mathrm{H_{2}O_{2}}$ est simple et ne comporte aucune composante $\\pi$.`,
        `Une partie des électrons de valence des oxygènes reste localisée dans les doublets non liants.`,
      ],
    },
  {
      order: 55,
      difficulty: 'MEDIUM',
      answerFormat: 'SINGLE',
      question:
        `L'acide chlorhydrique participe à l'acidité gastrique. Pour une liaison $\\mathrm{H-Cl}$, on mesure $\\mu=3{,}2\\times10^{-30}\\ \\mathrm{C\\cdot m}$ et $d=160\\ \\mathrm{pm}$. On donne la charge élémentaire $e=1{,}60\\times10^{-19}\\ \\mathrm{C}$. La valeur absolue de la charge partielle $\\delta$, exprimée en fraction de $e$, vaut approximativement :`,
      choices: [
        `$0{,}013e$.`,
        `$0{,}13e$.`,
        `$1{,}3e$.`,
        `$13e$.`,
      ],
      correctChoiceIndexes: [1],
      explanation:
        `On utilise $\\mu=\\delta d$. Avec $160\\ \\mathrm{pm}=1{,}60\\times10^{-10}\\ \\mathrm{m}$, on obtient $\\delta=\\dfrac{3{,}2\\times10^{-30}}{1{,}60\\times10^{-10}}=2{,}0\\times10^{-20}\\ \\mathrm{C}$. Le rapport à la charge élémentaire vaut $\\delta/e=2{,}0\\times10^{-20}/1{,}60\\times10^{-19}=0{,}125\\approx0{,}13$.`,
      choiceExplanations: [
        `Cette valeur est dix fois trop faible ; elle résulte d'une erreur sur les puissances de dix.`,
        `C'est la bonne réponse : $\\delta\\approx0{,}125e$, soit environ $0{,}13e$.`,
        `Une charge partielle supérieure à une charge élémentaire est incompatible avec le résultat du calcul proposé.`,
        `Cette valeur est cent fois trop grande et correspond à une erreur de conversion ou de puissance de dix.`,
      ],
    },
  {
      order: 56,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Le cisplatine est un médicament anticancéreux dont le platine peut former des liaisons de coordination avec des atomes d'azote de l'ADN. Quelles propositions sont exactes ?`,
      choices: [
        `Le platine constitue le centre accepteur du complexe.`,
        `Les ligands sont des espèces capables de fournir un doublet électronique au platine.`,
        `Le remplacement de ligands chlorure par des atomes d'azote de l'ADN supprime toutes les liaisons de coordination autour du platine.`,
        `Une liaison de coordination exige nécessairement un transfert complet d'électrons et la formation de deux ions de charges opposées.`,
      ],
      correctChoiceIndexes: [0, 1],
      explanation:
        `Dans un complexe de coordination, le centre métallique accepte les doublets fournis par les ligands. Dans le mécanisme simplifié du cisplatine, les ligands chlorure libérés sont remplacés par des donneurs azotés de l'ADN : il s'agit d'une substitution de ligands, pas d'une disparition des liaisons de coordination.`,
      choiceExplanations: [
        `Le platine possède des orbitales disponibles et reçoit les doublets des ligands : il joue le rôle d'accepteur.`,
        `Un ligand est une espèce donneuse de doublet liée au centre métallique par une liaison de coordination.`,
        `Les liaisons $\\mathrm{Pt-Cl}$ rompues sont remplacées par de nouvelles liaisons entre le platine et des azotes de l'ADN.`,
        `La liaison de coordination est une liaison covalente dont le doublet provient initialement d'un seul partenaire ; elle ne suppose pas nécessairement une liaison ionique.`,
      ],
    },
  {
      order: 57,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Dans l'hémoglobine, l'ion $\\mathrm{Fe^{2+}}$ de l'hème peut fixer réversiblement le dioxygène. Quelles propositions sont exactes ?`,
      choices: [
        `Quatre azotes de l'hème et un azote d'une histidine occupent cinq positions de coordination autour du fer.`,
        `Le dioxygène se fixe sur une sixième position de coordination disponible.`,
        `La fixation de $\\mathrm{O_{2}}$ exige la rupture préalable d'une liaison entre le fer et un azote de l'hème.`,
        `Lorsque le monoxyde de carbone remplace $\\mathrm{O_{2}}$, il s'agit d'une substitution de ligand.`,
      ],
      correctChoiceIndexes: [0, 1, 3],
      explanation:
        `Dans le modèle considéré, cinq positions de coordination sont occupées de manière stable par quatre azotes de l'hème et un azote d'histidine. La sixième peut accueillir $\\mathrm{O_{2}}$ ou, en compétition, $\\mathrm{CO}$. Le remplacement d'un ligand par un autre est une substitution de ligand.`,
      choiceExplanations: [
        `Ces cinq liaisons assurent l'intégration du fer dans l'hème et son rattachement à la globine.`,
        `La sixième position reste disponible pour la fixation réversible du dioxygène.`,
        `Les quatre liaisons fer-azote de l'hème restent en place lors de la fixation du dioxygène.`,
        `Le monoxyde de carbone prend la place du dioxygène sur la position disponible : c'est une substitution de ligand.`,
      ],
    },
  {
      order: 58,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `La liaison peptidique relie les acides aminés dans les protéines et comporte le groupement $\\mathrm{O-C-N}$. Concernant sa mésomérie, quelles propositions sont exactes ?`,
      choices: [
        `La délocalisation électronique concerne le groupement $\\mathrm{O-C-N}$ sans déplacement des noyaux atomiques.`,
        `La liaison $\\mathrm{C-N}$ possède un caractère partiel de double liaison, ce qui limite sa rotation.`,
        `Les formes mésomères sont deux molécules distinctes qui s'échangent rapidement.`,
        `La mésomérie favorise une organisation localement plane du groupement peptidique.`,
      ],
      correctChoiceIndexes: [0, 1, 3],
      explanation:
        `Les formes mésomères sont plusieurs écritures de Lewis d'une même structure réelle. La délocalisation des électrons sur $\\mathrm{O-C-N}$ donne à la liaison $\\mathrm{C-N}$ un caractère intermédiaire entre liaison simple et liaison double, limite sa rotation et favorise la planéité locale.`,
      choiceExplanations: [
        `Le squelette atomique reste identique ; seuls certains doublets électroniques sont redistribués.`,
        `Le caractère partiel de double liaison rigidifie la liaison $\\mathrm{C-N}$ et freine sa rotation.`,
        `La structure réelle est un hybride de résonance ; les formes canoniques ne sont pas des espèces séparées en équilibre.`,
        `La limitation de la rotation autour de $\\mathrm{C-N}$ contribue à la planéité du groupement peptidique.`,
      ],
    },
  {
      order: 59,
      difficulty: 'MEDIUM',
      answerFormat: 'MULTIPLE',
      question:
        `Concernant la réaction de radiolyse présentée dans l'énoncé commun, quelles propositions sont exactes ?`,
      choices: [
        `Lors d'une rupture homolytique, chacun des deux fragments récupère un électron du doublet liant.`,
        `Le point $\\bullet$ de $\\mathrm{HO^{\\bullet}}$ représente une charge électrique négative.`,
        `Les radicaux formés sont généralement très réactifs et peuvent endommager l'ADN.`,
        `$\\mathrm{HO^{\\bullet}}$ et $\\mathrm{HO^{-}}$ désignent la même espèce chimique.`,
      ],
      correctChoiceIndexes: [0, 2],
      explanation:
        `La rupture homolytique partage les deux électrons de la liaison entre les fragments et produit des espèces possédant un électron célibataire. Le point signale cet électron non apparié ; il ne constitue pas une charge. Les radicaux sont très réactifs et peuvent participer aux lésions biologiques provoquées par l'irradiation.`,
      choiceExplanations: [
        `Chaque fragment reçoit un électron de la liaison rompue et devient radicalaire.`,
        `Le symbole $\\bullet$ désigne un électron célibataire. Une charge négative est indiquée par un exposant $-$.`,
        `Le radical hydroxyle peut réagir rapidement avec les constituants cellulaires, notamment l'ADN.`,
        `$\\mathrm{HO^{\\bullet}}$ est le radical hydroxyle, tandis que $\\mathrm{HO^{-}}$ est l'ion hydroxyde.`,
      ],
    },
  {
      order: 60,
      difficulty: 'MEDIUM',
      answerFormat: 'SINGLE',
      question:
        `Quelle énergie faut-il fournir pour rompre une liaison $\\mathrm{O-H}$ par molécule dans $1{,}0\\ \\mathrm{mmol}$ de molécules d'eau ?`,
      choices: [
        `$0{,}46\\ \\mathrm{J}$.`,
        `$46\\ \\mathrm{J}$.`,
        `$460\\ \\mathrm{J}$.`,
        `$460\\ \\mathrm{kJ}$.`,
      ],
      correctChoiceIndexes: [2],
      explanation:
        `L'énergie de liaison est donnée par mole de liaisons. Pour $1{,}0\\ \\mathrm{mmol}=1{,}0\\times10^{-3}\\ \\mathrm{mol}$ de liaisons rompues : $E=nE_{\\mathrm{O-H}}=1{,}0\\times10^{-3}\\times460\\ \\mathrm{kJ}=0{,}460\\ \\mathrm{kJ}=460\\ \\mathrm{J}$.`,
      choiceExplanations: [
        `Cette valeur est mille fois trop faible : $0{,}460\\ \\mathrm{kJ}$ vaut $460\\ \\mathrm{J}$.`,
        `Cette valeur est dix fois trop faible.`,
        `C'est la bonne réponse : $1{,}0\\times10^{-3}\\times460\\ \\mathrm{kJ}=460\\ \\mathrm{J}$.`,
        `Cette valeur correspond à une mole de liaisons, et non à $1{,}0\\ \\mathrm{mmol}$.`,
      ],
    },
];
