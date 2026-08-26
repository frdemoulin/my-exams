import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';
import { TEX_UNITS, texQuantity } from '../../tex-units';

const U = TEX_UNITS;

/**
 * UE14 — Colle C11 — Biochimie — Colle cumulative EC
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 * Périmètre : toute la Biochimie — glucides, lipides, acides aminés/protéines et enzymologie.
 */
export const UE14_COLLE_C11_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 1,
    difficulty: 'EASY',
    format: 'QRM',
    question: "À propos des oses et de leur stéréochimie, quelles propositions sont exactes ?",
    explanation: "Les oses sont classés notamment selon la nature du carbonyle et le nombre de carbones. La série D/L est une configuration relative indépendante du signe du pouvoir rotatoire.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:glucides-stereochimie'],
    choices: [
      {
        content: "Le D-glucose est un aldohexose.",
        correct: true,
        explanation: "Sa forme ouverte comporte une fonction aldéhyde et six carbones.",
      },
      {
        content: "Le D-fructose est un aldohexose.",
        correct: false,
        explanation: "Le D-fructose est un cétohexose : sa forme ouverte comporte une fonction cétone.",
      },
      {
        content: "Le D-glucose et le D-mannose sont épimères en C2.",
        correct: true,
        explanation: "Ils diffèrent uniquement par la configuration du carbone 2.",
      },
      {
        content: "La lettre D signifie nécessairement que le pouvoir rotatoire de l’ose est positif.",
        correct: false,
        explanation: "D/L et +/− décrivent deux propriétés différentes et indépendantes.",
      },
      {
        content: "La cyclisation d’un ose supprime définitivement toute présence de forme ouverte en solution.",
        correct: false,
        explanation: "Un équilibre subsiste entre formes cycliques et une faible proportion de forme ouverte.",
      },
    ],
  },
  {
    order: 2,
    difficulty: 'HARD',
    format: 'QROC',
    question: "Quel carbone du D-glucose devient le carbone anomérique lors de la cyclisation en glucopyranose ? Donnez uniquement son numéro.",
    explanation: "Le carbone de la fonction aldéhyde de la forme ouverte, C1, devient le carbone anomérique après formation de l’hémiacétal intramoléculaire.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:glucose-anomerie'],
    answer: {
      type: 'number',
      value: 1,
      tolerance: 0,
    },
  },
  {
    order: 3,
    difficulty: 'HARD',
    format: 'QRU',
    question: "Quelle proposition décrit correctement un diholoside réducteur ?",
    explanation: "Un diholoside est réducteur lorsqu’au moins un carbone anomérique reste libre et peut retrouver une forme carbonylée ouverte.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:diholosides'],
    choices: [
      {
        content: "Le maltose possède un carbone anomérique libre et est réducteur.",
        correct: true,
        explanation: "Un seul des deux carbones anomériques est engagé dans la liaison osidique du maltose.",
      },
      {
        content: "Le saccharose possède deux carbones anomériques libres.",
        correct: false,
        explanation: "Les deux carbones anomériques sont engagés dans la liaison osidique du saccharose.",
      },
      {
        content: "Le lactose est formé de glucose et de fructose.",
        correct: false,
        explanation: "Le lactose associe galactose et glucose.",
      },
      {
        content: "Tout diholoside est non réducteur dès qu’il possède une liaison osidique.",
        correct: false,
        explanation: "Le caractère réducteur dépend de la disponibilité d’un carbone anomérique, pas de la simple présence d’une liaison osidique.",
      },
      {
        content: "Le pouvoir réducteur impose une liaison β(1→4).",
        correct: false,
        explanation: "Plusieurs architectures de liaison sont compatibles avec un carbone anomérique libre.",
      },
    ],
  },
  {
    order: 4,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux propositions correctes concernant glycogène et glycosaminoglycanes.",
    explanation: "Le glycogène est un homopolymère ramifié de glucose, tandis que les GAG sont des polysaccharides hétérogènes constitués de motifs disaccharidiques répétés et souvent chargés.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:polyosides-gag'],
    choices: [
      {
        content: "Le glycogène contient principalement des liaisons α(1→4) et des branchements α(1→6).",
        correct: true,
        explanation: "Les liaisons α(1→4) forment les chaînes et les liaisons α(1→6) les points de branchement.",
      },
      {
        content: "L’héparine appartient aux glycosaminoglycanes et possède une activité anticoagulante.",
        correct: true,
        explanation: "Elle potentialise notamment l’action de l’antithrombine.",
      },
      {
        content: "Le glycogène est un polymère linéaire de glucose exclusivement relié en β(1→4).",
        correct: false,
        explanation: "Cette description ne correspond pas au glycogène, qui est ramifié et utilise des liaisons α.",
      },
      {
        content: "Un protéoglycane est constitué uniquement d’une chaîne polypeptidique sans fraction glucidique.",
        correct: false,
        explanation: "Il associe une protéine cœur à une ou plusieurs chaînes de GAG.",
      },
      {
        content: "Tous les GAG sont des réserves énergétiques rapidement hydrolysées en glucose.",
        correct: false,
        explanation: "Leurs fonctions sont surtout structurales, mécaniques ou de signalisation selon les tissus.",
      },
    ],
  },
  {
    order: 5,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "À propos des acides gras et des eicosanoïdes, quelles propositions sont exactes ?",
    explanation: "La nomenclature n-3/n-6 est comptée depuis l’extrémité méthyle. Les acides linoléique et α-linolénique sont indispensables chez l’Homme, et les eicosanoïdes sont généralement produits à la demande.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:acides-gras-eicosanoides'],
    choices: [
      {
        content: "La série n-6 d’un acide gras se détermine en comptant depuis l’extrémité méthyle.",
        correct: true,
        explanation: "La nomenclature oméga part du carbone méthyle terminal.",
      },
      {
        content: "L’acide linoléique est un acide gras indispensable de la série n-6.",
        correct: true,
        explanation: "L’Homme ne peut pas introduire de novo certaines doubles liaisons nécessaires à sa synthèse.",
      },
      {
        content: "L’acide α-linolénique appartient à la série n-6.",
        correct: false,
        explanation: "L’acide α-linolénique appartient à la série n-3.",
      },
      {
        content: "Les leucotriènes dérivent principalement de l’action des cyclo-oxygénases.",
        correct: false,
        explanation: "Ils sont produits par les voies des lipoxygénases.",
      },
      {
        content: "Les eicosanoïdes sont stockés en grande quantité dans des vésicules sécrétoires avant leur utilisation.",
        correct: false,
        explanation: "Ils sont généralement synthétisés à la demande à partir de précurseurs lipidiques membranaires.",
      },
    ],
  },
  {
    order: 6,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: "Quel phospholipide est hydrolysé en position sn-2 par la phospholipase A2 pour libérer notamment un acide gras pouvant être l’acide arachidonique ? Répondez par le nom générique de la classe.",
    explanation: "La phospholipase A2 agit sur les glycérophospholipides et hydrolyse l’ester porté en position sn-2 du glycérol.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:phospholipases'],
    answer: {
      type: 'text',
      acceptedAnswers: ['glycérophospholipide', 'glycerophospholipide', 'glycérophospholipides', 'glycerophospholipides', 'phosphoglycéride', 'phosphoglyceride'],
      normalization: {
        trim: true,
        collapseWhitespace: true,
        caseSensitive: false,
        ignoreAccents: true,
        normalizeUnicode: true,
      },
    },
  },
  {
    order: 7,
    difficulty: 'EASY',
    format: 'QRU',
    question: "Quelle proposition décrit correctement un céramide ?",
    explanation: "Le céramide est le noyau structural de nombreux sphingolipides : il associe une sphingosine et un acide gras lié par une liaison amide.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:sphingolipides'],
    choices: [
      {
        content: "Il s’agit d’un triester du glycérol portant trois acides gras.",
        correct: false,
        explanation: "Cette structure correspond à un triacylglycérol.",
      },
      {
        content: "Il associe une sphingosine et un acide gras lié par une liaison amide.",
        correct: true,
        explanation: "C’est la définition structurale du céramide.",
      },
      {
        content: "Il possède obligatoirement un groupement phosphate et une choline.",
        correct: false,
        explanation: "Cette tête polaire caractérise la sphingomyéline, pas tous les céramides.",
      },
      {
        content: "Il est constitué de cholestérol estérifié par un acide gras.",
        correct: false,
        explanation: "Cette structure correspond à un stéride.",
      },
      {
        content: "Il est un glycosaminoglycane sulfaté de la matrice extracellulaire.",
        correct: false,
        explanation: "Un céramide est un lipide, pas un GAG.",
      },
    ],
  },
  {
    order: 8,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux propositions correctes à propos du cholestérol et de ses dérivés.",
    explanation: "Le cholestérol est un stérol membranaire et un précurseur de nombreuses molécules stéroïdiennes. Son estérification transforme son hydroxyle en fonction ester et augmente son caractère hydrophobe.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:sterols-steroides'],
    choices: [
      {
        content: "Le cholestérol libre possède une fonction alcool et appartient aux stérols.",
        correct: true,
        explanation: "Le suffixe stérol renvoie notamment à la présence du groupe hydroxyle.",
      },
      {
        content: "Un ester de cholestérol est plus hydrophobe que le cholestérol libre.",
        correct: true,
        explanation: "L’estérification masque le groupe hydroxyle polaire du cholestérol.",
      },
      {
        content: "Le cholestérol est un triacylglycérol à trois chaînes d’acides gras.",
        correct: false,
        explanation: "Il possède un noyau stéroïdien tétracyclique.",
      },
      {
        content: "Toutes les hormones stéroïdiennes sont des protéines glycosylées.",
        correct: false,
        explanation: "Elles sont des dérivés lipidiques du cholestérol.",
      },
      {
        content: "Un stéride est obligatoirement un phospholipide membranaire.",
        correct: false,
        explanation: "Un stéride est un ester entre un stérol et un acide gras.",
      },
    ],
  },
  {
    order: 9,
    difficulty: 'MEDIUM',
    format: 'QRPL',
    requiredSelectionCount: 5,
    question: "Parmi ces dix propositions sur glucides et lipides, sélectionnez exactement les cinq exactes.",
    explanation: "Cette synthèse associe propriétés des oses, pouvoir réducteur, polysaccharides, acides gras et classes lipidiques.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:synthese-glucides-lipides'],
    choices: [
      {
        content: "La mutarotation traduit l’interconversion des anomères en solution.",
        correct: true,
        explanation: "Le passage transitoire par la forme ouverte permet l’interconversion α ↔ β.",
      },
      {
        content: "Le saccharose est non réducteur car ses deux carbones anomériques sont engagés.",
        correct: true,
        explanation: "Aucun carbone anomérique libre ne peut retrouver directement une forme carbonylée.",
      },
      {
        content: "Le glycogène est généralement plus ramifié que l’amylopectine.",
        correct: true,
        explanation: "Ses points de branchement α(1→6) sont globalement plus fréquents.",
      },
      {
        content: "Une double liaison cis tend à introduire un coude dans une chaîne d’acide gras.",
        correct: true,
        explanation: "Cette géométrie diminue l’empilement régulier des chaînes.",
      },
      {
        content: "Un triacylglycérol est formé par estérification des trois hydroxyles du glycérol.",
        correct: true,
        explanation: "Il comporte donc trois fonctions ester.",
      },
      {
        content: "Le D-glucose et le D-galactose sont épimères en C2.",
        correct: false,
        explanation: "Ils sont épimères en C4.",
      },
      {
        content: "La cellulose est constituée de glucose relié principalement en α(1→4).",
        correct: false,
        explanation: "La cellulose comporte des liaisons β(1→4).",
      },
      {
        content: "La phospholipase A2 coupe la liaison entre le phosphate et la tête polaire.",
        correct: false,
        explanation: "Elle hydrolyse la liaison ester de l’acide gras en sn-2.",
      },
      {
        content: "Un céramide est composé de glycérol et de trois acides gras.",
        correct: false,
        explanation: "Il associe sphingosine et acide gras.",
      },
      {
        content: "Le cholestérol est dépourvu de tout rôle de précurseur métabolique.",
        correct: false,
        explanation: "Il est notamment précurseur d’hormones stéroïdiennes, d’acides biliaires et de vitamine D.",
      },
    ],
  },
  {
    order: 10,
    difficulty: 'EASY',
    format: 'QRM',
    question: "À propos de la structure des acides aminés et des protéines, quelles propositions sont exactes ?",
    explanation: "Les acides aminés protéinogènes partagent une structure α commune, à l’exception de particularités comme la glycine achirale et la proline cyclique.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:aa-structure'],
    choices: [
      {
        content: "La glycine est achirale car son carbone α porte deux hydrogènes.",
        correct: true,
        explanation: "Le carbone α ne possède donc pas quatre substituants différents.",
      },
      {
        content: "La proline possède une chaîne latérale cyclisée sur l’azote α.",
        correct: true,
        explanation: "Cette structure réduit la flexibilité locale de la chaîne polypeptidique.",
      },
      {
        content: "Le point isoélectrique correspond au pH où la charge nette moyenne de l’espèce est nulle.",
        correct: true,
        explanation: "Des charges positives et négatives internes peuvent cependant rester présentes.",
      },
      {
        content: "Tous les acides aminés protéinogènes ont un carbone α asymétrique.",
        correct: false,
        explanation: "La glycine est l’exception classique.",
      },
      {
        content: "À pH physiologique, un acide aminé libre ne peut porter simultanément une charge positive et une charge négative.",
        correct: false,
        explanation: "De nombreux acides aminés libres sont majoritairement zwitterioniques.",
      },
    ],
  },
  {
    order: 11,
    difficulty: 'EASY',
    format: 'QROC',
    question: "Quel acide aminé protéinogène standard est achiral ?",
    explanation: "La glycine possède deux hydrogènes sur son carbone α ; elle ne présente donc pas de centre stéréogène à ce niveau.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:glycine'],
    answer: {
      type: 'text',
      acceptedAnswers: ['glycine', 'Gly'],
      normalization: {
        trim: true,
        collapseWhitespace: true,
        caseSensitive: false,
        ignoreAccents: true,
        normalizeUnicode: true,
      },
    },
  },
  {
    order: 12,
    difficulty: 'HARD',
    format: 'QRU',
    question: "Quelle proposition décrit correctement la liaison peptidique ?",
    explanation: "La délocalisation électronique entre l’azote et le carbonyle confère à la liaison C–N peptidique un caractère partiel de double liaison, limitant sa rotation.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:liaison-peptidique'],
    choices: [
      {
        content: "Elle possède une rotation totalement libre comparable à une liaison C–C simple.",
        correct: false,
        explanation: "La mésomérie limite fortement la rotation autour de C–N.",
      },
      {
        content: "Elle ne contient jamais d’atome d’azote.",
        correct: false,
        explanation: "La liaison peptidique relie le carbone carbonylé d’un résidu à l’azote du suivant.",
      },
      {
        content: "Elle possède un caractère partiel de double liaison et favorise la planéité du groupement peptidique.",
        correct: true,
        explanation: "La résonance explique à la fois la planéité et la limitation de rotation.",
      },
      {
        content: "Elle correspond à un pont disulfure entre deux cystéines.",
        correct: false,
        explanation: "Un pont disulfure est une liaison covalente S–S distincte.",
      },
      {
        content: "Elle est rompue spontanément et instantanément dans l’eau à pH neutre.",
        correct: false,
        explanation: "Son hydrolyse non catalysée est lente dans les conditions physiologiques.",
      },
    ],
  },
  {
    order: 13,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux propositions correctes concernant les structures secondaires des protéines.",
    explanation: "L’hélice α et le feuillet β reposent principalement sur des liaisons hydrogène du squelette peptidique. La proline tend à perturber une hélice α lorsqu’elle est placée en position interne.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:structures-secondaires'],
    choices: [
      {
        content: "Dans une hélice α, une liaison hydrogène relie classiquement C=O(i) à N–H(i+4).",
        correct: true,
        explanation: "Ce motif répétitif stabilise l’hélice.",
      },
      {
        content: "Les feuillets β peuvent être parallèles ou antiparallèles.",
        correct: true,
        explanation: "Les deux organisations existent dans les protéines.",
      },
      {
        content: "La proline interne stabilise toujours une hélice α longue et régulière.",
        correct: false,
        explanation: "Sa rigidité et l’absence d’un N–H peptidique classique tendent à perturber l’hélice.",
      },
      {
        content: "Une structure secondaire est définie uniquement par des ponts disulfure entre cystéines.",
        correct: false,
        explanation: "Les liaisons hydrogène du squelette constituent l’élément majeur des hélices et feuillets.",
      },
      {
        content: "Un feuillet β est nécessairement constitué d’une seule chaîne polypeptidique continue.",
        correct: false,
        explanation: "Il peut associer des segments éloignés d’une même chaîne ou appartenant à des chaînes différentes.",
      },
    ],
  },
  {
    order: 14,
    difficulty: 'EASY',
    format: 'QRM',
    question: "À propos de quelques rôles biologiques des acides aminés, peptides et protéines, quelles propositions sont exactes ?",
    explanation: "Les acides aminés sont aussi des précurseurs métaboliques ; les peptides et protéines assurent des fonctions de signalisation, transport et défense.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:roles-biologiques'],
    choices: [
      {
        content: "Le tryptophane est un précurseur de la sérotonine.",
        correct: true,
        explanation: "La voie de biosynthèse de la sérotonine dérive du tryptophane.",
      },
      {
        content: "Le glutamate peut être décarboxylé en GABA.",
        correct: true,
        explanation: "Le GABA est un neurotransmetteur inhibiteur dérivé du glutamate.",
      },
      {
        content: "L’insuline mature comporte deux chaînes reliées par des ponts disulfure.",
        correct: true,
        explanation: "Les chaînes A et B sont issues de la maturation de la proinsuline.",
      },
      {
        content: "Le peptide C constitue l’unique fraction de l’insuline capable de se lier au récepteur à l’insuline.",
        correct: false,
        explanation: "Le peptide C est libéré lors de la maturation ; il ne constitue pas l’insuline mature.",
      },
      {
        content: "Les cytokines sont obligatoirement des lipides stéroïdiens.",
        correct: false,
        explanation: "Les cytokines sont des protéines ou peptides de signalisation.",
      },
    ],
  },
  {
    order: 15,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: "Quelle mutation classique de la chaîne β de l’hémoglobine est associée à l’HbS dans la drépanocytose ? Répondez sous la forme « acide aminé → acide aminé ».",
    explanation: "L’HbS comporte classiquement une substitution Glu6Val sur la chaîne β : un glutamate est remplacé par une valine en position 6.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:hemoglobine-hbs'],
    answer: {
      type: 'text',
      acceptedAnswers: ['Glu → Val', 'Glu->Val', 'Glu Val', 'glutamate → valine', 'glutamate->valine', 'acide glutamique → valine', 'E6V'],
      normalization: {
        trim: true,
        collapseWhitespace: true,
        caseSensitive: false,
        ignoreAccents: true,
        normalizeUnicode: true,
      },
    },
  },
  {
    order: 16,
    difficulty: 'HARD',
    format: 'QRU',
    question: "Quelle proposition décrit correctement une immunoglobuline G monomérique ?",
    explanation: "Une IgG possède deux chaînes lourdes et deux chaînes légères. Les fragments Fab portent les sites de liaison à l’antigène ; la région Fc assure d’autres fonctions effectrices.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:immunoglobulines'],
    choices: [
      {
        content: "Elle est formée d’une seule chaîne polypeptidique contenant quatre sites catalytiques.",
        correct: false,
        explanation: "Une IgG est constituée de quatre chaînes polypeptidiques.",
      },
      {
        content: "Ses deux fragments Fab sont dépourvus de toute capacité à reconnaître l’antigène.",
        correct: false,
        explanation: "Les fragments Fab contiennent les régions variables qui reconnaissent l’antigène.",
      },
      {
        content: "Sa région Fc porte l’ensemble des régions variables de reconnaissance de l’antigène.",
        correct: false,
        explanation: "Les régions variables sont localisées dans les bras Fab.",
      },
      {
        content: "Elle possède deux chaînes lourdes et deux chaînes légères reliées notamment par des ponts disulfure.",
        correct: true,
        explanation: "C’est l’organisation H2L2 caractéristique de l’IgG monomérique.",
      },
      {
        content: "Elle appartient aux glycosaminoglycanes de la matrice extracellulaire.",
        correct: false,
        explanation: "Une immunoglobuline est une glycoprotéine.",
      },
    ],
  },
  {
    order: 17,
    difficulty: 'HARD',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux associations correctes entre protéine et fonction.",
    explanation: "L’albumine contribue fortement à la pression oncotique et transporte de nombreux ligands. Le collagène IV est un constituant majeur des membranes basales et s’organise en réseau.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:proteines-fonctions'],
    choices: [
      {
        content: "Albumine — contribution majeure à la pression oncotique plasmatique.",
        correct: true,
        explanation: "Sa forte concentration plasmatique joue un rôle important dans la pression colloïdo-osmotique.",
      },
      {
        content: "Collagène IV — formation de réseaux dans les membranes basales.",
        correct: true,
        explanation: "Le collagène IV est caractéristique des lames basales et ne forme pas les mêmes fibrilles que le collagène I.",
      },
      {
        content: "Laminine — filament intermédiaire de la lamina nucléaire.",
        correct: false,
        explanation: "La laminine est une glycoprotéine de matrice extracellulaire ; les lamines sont nucléaires.",
      },
      {
        content: "Myosine II — constituant principal de l’octamère nucléosomique.",
        correct: false,
        explanation: "La myosine II est un moteur moléculaire associé à l’actine.",
      },
      {
        content: "Hémoglobine A — homotétramère β4 chez l’adulte sain.",
        correct: false,
        explanation: "L’HbA principale est α2β2.",
      },
    ],
  },
  {
    order: 18,
    difficulty: 'HARD',
    format: 'QRPL',
    requiredSelectionCount: 5,
    question: "Parmi ces dix propositions sur acides aminés, peptides et protéines, sélectionnez exactement les cinq exactes.",
    explanation: "Cette synthèse relie structure chimique, architecture protéique, maturation et fonctions biologiques.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:synthese-protides'],
    choices: [
      {
        content: "Une liaison peptidique possède un caractère partiel de double liaison.",
        correct: true,
        explanation: "La mésomérie C–N explique sa planéité et la rotation limitée.",
      },
      {
        content: "La proinsuline est maturée par clivage avec libération du peptide C.",
        correct: true,
        explanation: "L’insuline mature conserve les chaînes A et B reliées par des ponts disulfure.",
      },
      {
        content: "Le récepteur de l’insuline possède une activité tyrosine kinase portée par ses chaînes β.",
        correct: true,
        explanation: "Les domaines cytoplasmiques des chaînes β portent l’activité kinase.",
      },
      {
        content: "Le fer fonctionnel de l’hème doit être à l’état Fe2+ pour lier réversiblement O2.",
        correct: true,
        explanation: "L’oxydation en Fe3+ produit de la méthémoglobine, incapable de fixer normalement O2.",
      },
      {
        content: "Les intégrines sont des hétérodimères α/β transmembranaires impliqués dans l’adhérence.",
        correct: true,
        explanation: "Elles relient notamment la matrice extracellulaire à des complexes intracellulaires associés au cytosquelette.",
      },
      {
        content: "La glycine possède deux centres stéréogènes.",
        correct: false,
        explanation: "Elle est achirale au carbone α.",
      },
      {
        content: "Une hélice α est stabilisée principalement par des ponts disulfure répétés entre résidus successifs.",
        correct: false,
        explanation: "Sa stabilisation repose surtout sur les liaisons hydrogène du squelette.",
      },
      {
        content: "Le fragment Fc d’une IgG constitue son site principal de reconnaissance spécifique de l’antigène.",
        correct: false,
        explanation: "La reconnaissance spécifique est portée par les régions variables des Fab.",
      },
      {
        content: "Le collagène I forme préférentiellement le réseau moléculaire des membranes basales à la place du collagène IV.",
        correct: false,
        explanation: "Le collagène IV est typique des réseaux de membrane basale.",
      },
      {
        content: "La laminine et la lamine désignent la même protéine.",
        correct: false,
        explanation: "La laminine appartient à la matrice extracellulaire ; les lamines sont des filaments intermédiaires nucléaires.",
      },
    ],
  },
  {
    order: 19,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "À propos des enzymes, de leur classification et de leurs cofacteurs, quelles propositions sont exactes ?",
    explanation: "La classification EC actuelle comporte sept classes. Une enzyme peut nécessiter un cofacteur ; une apoenzyme associée au cofacteur requis constitue une holoenzyme fonctionnelle.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:enzymes-classification-cofacteurs'],
    choices: [
      {
        content: "La classification EC actuelle comporte sept grandes classes, dont les translocases.",
        correct: true,
        explanation: "Les translocases constituent la septième classe de la classification EC actuelle.",
      },
      {
        content: "Une coenzyme est un cofacteur organique.",
        correct: true,
        explanation: "Les coenzymes comprennent notamment des dérivés vitaminiques participant à la catalyse.",
      },
      {
        content: "Une apoenzyme dépourvue de son cofacteur requis est déjà une holoenzyme.",
        correct: false,
        explanation: "Lorsque le cofacteur est requis, l’holoenzyme correspond à l’apoenzyme associée à ce cofacteur.",
      },
      {
        content: "Une enzyme modifie la constante d’équilibre Keq afin de rendre une réaction spontanée.",
        correct: false,
        explanation: "Elle modifie la cinétique, pas l’équilibre thermodynamique.",
      },
      {
        content: "Tout groupement prosthétique est obligatoirement lié de façon covalente et irréversible.",
        correct: false,
        explanation: "Un groupement prosthétique est fortement lié, sans que la covalence permanente soit une définition universelle.",
      },
    ],
  },
  {
    order: 20,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: "Pour une enzyme suivant le modèle de Michaelis-Menten, quelle fraction de Vmax vaut v0 lorsque [S] = Km ? Donnez uniquement la valeur numérique.",
    explanation: "En remplaçant [S] par Km dans v0 = Vmax[S]/(Km+[S]), on obtient v0 = Vmax/2.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:michaelis-menten'],
    answer: {
      type: 'number',
      value: 0.5,
      tolerance: 0.01,
    },
  },
  {
    order: 21,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: "Quelle proposition décrit correctement l’action d’une enzyme sur une réaction chimique ?",
    explanation: "Une enzyme accélère l’approche de l’équilibre en abaissant l’énergie libre d’activation ΔG‡, sans modifier ΔG° ni Keq.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:catalyse-thermodynamique'],
    choices: [
      {
        content: "Elle rend toujours ΔG° plus négatif.",
        correct: false,
        explanation: "ΔG° est une grandeur thermodynamique indépendante de la présence du catalyseur.",
      },
      {
        content: "Elle déplace obligatoirement l’équilibre vers les produits.",
        correct: false,
        explanation: "Keq n’est pas modifiée par le catalyseur.",
      },
      {
        content: "Elle est consommée stœchiométriquement à chaque cycle catalytique.",
        correct: false,
        explanation: "Une enzyme est régénérée au terme du cycle catalytique.",
      },
      {
        content: "Elle n’accélère que la réaction directe et ralentit la réaction inverse.",
        correct: false,
        explanation: "Un catalyseur accélère les deux sens d’une réaction réversible.",
      },
      {
        content: "Elle diminue l’énergie libre d’activation sans modifier la constante d’équilibre.",
        correct: true,
        explanation: "C’est le principe fondamental de la catalyse enzymatique.",
      },
    ],
  },
  {
    order: 22,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "À propos de la régulation de l’activité enzymatique, quelles propositions sont exactes ?",
    explanation: "L’activité enzymatique peut être modulée par allostérie, modifications covalentes, sous-unités régulatrices ou protéolyse limitée. Ces mécanismes n’ont pas tous le même effet selon l’enzyme.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:regulation-enzymatique'],
    choices: [
      {
        content: "Un effecteur allostérique se fixe sur un site distinct du site actif et peut modifier l’activité.",
        correct: true,
        explanation: "La fixation allostérique modifie l’équilibre conformationnel de l’enzyme.",
      },
      {
        content: "La phosphorylation peut activer ou inhiber une protéine selon le contexte.",
        correct: true,
        explanation: "L’effet d’une phosphorylation n’a pas de direction universelle.",
      },
      {
        content: "Une protéolyse limitée peut activer un zymogène.",
        correct: true,
        explanation: "Le clivage ciblé de précurseurs inactifs est un mécanisme classique d’activation irréversible.",
      },
      {
        content: "Toutes les ubiquitinations conduisent nécessairement à la dégradation immédiate par le protéasome.",
        correct: false,
        explanation: "L’ubiquitination peut remplir plusieurs fonctions selon son type et son contexte.",
      },
      {
        content: "L’allostérie est impossible chez une protéine monomérique.",
        correct: false,
        explanation: "Des protéines monomériques peuvent également subir une régulation allostérique.",
      },
    ],
  },
  {
    order: 23,
    difficulty: 'HARD',
    format: 'QROC',
    question: String.raw`Une préparation enzymatique transforme $${texQuantity(9, U.MICROMOL)}$ de substrat en $3\,${U.MIN}$. Quelle est son activité ? Donnez uniquement la valeur numérique, exprimée en $${U.ENZYME_UNIT}$.

Données : $${texQuantity(1, U.ENZYME_UNIT)} = ${texQuantity(1, U.MICROMOL_PER_MIN)}$.`,
    explanation: String.raw`L’activité vaut $9/3=${texQuantity(3, U.MICROMOL_PER_MIN)}$, soit $${texQuantity(3, U.ENZYME_UNIT)}$.`,
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:calcul-activite-enzymatique'],
    answer: {
      type: 'number',
      value: 3,
      tolerance: 0,
      unit: 'U',
      displayUnit: U.ENZYME_UNIT,
    },
  },
  {
    order: 24,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: "Quel effet cinétique caractérise une inhibition compétitive pure dans le modèle de Michaelis-Menten ?",
    explanation: "Un inhibiteur compétitif pur augmente le Km apparent sans modifier Vmax, car un excès de substrat peut surmonter la compétition au site actif.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:inhibition-competitive'],
    choices: [
      {
        content: "Km diminue et Vmax diminue dans la même proportion.",
        correct: false,
        explanation: "Ce motif correspond à une inhibition incompétitive idéale.",
      },
      {
        content: "Km apparent augmente et Vmax reste inchangée.",
        correct: true,
        explanation: "C’est le comportement attendu d’une inhibition compétitive pure.",
      },
      {
        content: "Km reste inchangé et Vmax augmente.",
        correct: false,
        explanation: "Ce n’est pas le comportement d’une inhibition compétitive.",
      },
      {
        content: "Km et Vmax deviennent tous deux nuls.",
        correct: false,
        explanation: "Une inhibition réversible ne conduit pas à cette situation générale.",
      },
      {
        content: "Km n’a plus d’unité et devient un temps caractéristique.",
        correct: false,
        explanation: "Km conserve l’unité d’une concentration.",
      },
    ],
  },
  {
    order: 25,
    difficulty: 'EASY',
    format: 'QRM',
    question: "À propos de la mesure d’une activité enzymatique et des unités utilisées, quelles propositions sont exactes ?",
    explanation: "La vitesse initiale est mesurée dans la portion initiale approximativement linéaire. L’unité U et le katal décrivent des activités catalytiques avec des échelles différentes.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:unites-activite'],
    choices: [
      {
        content: "Une unité enzymatique U correspond à une micromole de substrat transformée par minute dans des conditions définies.",
        correct: true,
        explanation: String.raw`Par définition, $${texQuantity(1, U.ENZYME_UNIT)} = ${texQuantity(1, U.MICROMOL_PER_MIN)}$.`,
      },
      {
        content: String.raw`Un katal correspond à $${texQuantity(1, U.MOL_PER_S)}$.`,
        correct: true,
        explanation: "Le katal est l’unité SI d’activité catalytique.",
      },
      {
        content: "L’activité spécifique s’exprime typiquement en U/L, sans rapport à une masse de protéines.",
        correct: false,
        explanation: "L’activité spécifique rapporte typiquement une activité à une masse de protéines, par exemple en U/mg.",
      },
      {
        content: "Km s’exprime nécessairement en secondes.",
        correct: false,
        explanation: "Km possède l’unité d’une concentration.",
      },
      {
        content: "La vitesse initiale doit être mesurée seulement après épuisement complet du substrat.",
        correct: false,
        explanation: "Elle est au contraire mesurée au début de la réaction, avant les perturbations dues à l’épuisement du substrat ou à l’accumulation du produit.",
      },
    ],
  },
  {
    order: 26,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "À propos de la relation de Michaelis-Menten et de la représentation de Lineweaver-Burk, quelles propositions sont exactes ?",
    explanation: "Michaelis-Menten relie v0, Vmax, Km et [S]. La double réciproque fournit une droite dont la pente vaut Km/Vmax, l’ordonnée 1/Vmax et l’abscisse −1/Km.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:michaelis-lineweaver'],
    choices: [
      {
        content: "À [S] = Km, v0 = Vmax/2.",
        correct: true,
        explanation: "C’est une conséquence directe de l’équation de Michaelis-Menten.",
      },
      {
        content: "Sur Lineweaver-Burk, l’ordonnée à l’origine vaut 1/Vmax.",
        correct: true,
        explanation: "On l’obtient pour 1/[S] = 0.",
      },
      {
        content: "Sur Lineweaver-Burk, l’abscisse à l’origine vaut −1/Km.",
        correct: true,
        explanation: "La droite coupe l’axe x lorsque 1/v0 = 0.",
      },
      {
        content: "Dans le modèle michaelien simple, Vmax = kcat[E]t.",
        correct: true,
        explanation: "La vitesse maximale est proportionnelle à la concentration totale en enzyme active.",
      },
      {
        content: "À très forte concentration de substrat, v0 croît sans limite de façon proportionnelle à [S].",
        correct: false,
        explanation: "L’enzyme se sature et v0 tend vers Vmax.",
      },
    ],
  },
  {
    order: 27,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "Une mesure spectrophotométrique suit une réaction enzymatique. Quelles propositions sont exactes ?",
    explanation: "La loi de Beer-Lambert relie absorbance et concentration lorsque ε et la longueur de trajet optique sont constants. Une pente d’absorbance peut donc être convertie en vitesse de concentration.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:beer-lambert'],
    choices: [
      {
        content: "La loi de Beer-Lambert s’écrit A = ε·l·c.",
        correct: true,
        explanation: "A est proportionnelle au coefficient d’extinction, au trajet optique et à la concentration.",
      },
      {
        content: "À ε et l constants, si l’absorbance est divisée par deux, la concentration correspondante est divisée par deux.",
        correct: true,
        explanation: "La relation entre A et c est linéaire dans le domaine de validité de la loi.",
      },
      {
        content: "Une vitesse enzymatique peut être déterminée à partir de la pente initiale d’absorbance si ε et l sont connus.",
        correct: true,
        explanation: "La pente dA/dt peut être convertie en dc/dt par division par ε·l.",
      },
      {
        content: "L’absorbance est une grandeur sans dimension.",
        correct: true,
        explanation: "Elle correspond au logarithme d’un rapport d’intensités et ne porte donc pas d’unité.",
      },
      {
        content: "Beer-Lambert implique que la concentration est inversement proportionnelle à l’absorbance.",
        correct: false,
        explanation: "À ε et l constants, absorbance et concentration sont directement proportionnelles.",
      },
    ],
  },
  {
    order: 28,
    difficulty: 'HARD',
    format: 'QRM',
    question: "On confronte plusieurs situations d’inhibition enzymatique. Quelles propositions sont exactes ?",
    explanation: "Les profils idéaux diffèrent selon le mode d’inhibition : compétitive, incompétitive, non compétitive pure et mixte général.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:inhibitions-reversibles'],
    choices: [
      {
        content: "Une inhibition compétitive pure augmente Km apparent sans modifier Vmax.",
        correct: true,
        explanation: "La compétition peut être surmontée par une forte concentration de substrat.",
      },
      {
        content: "Une inhibition incompétitive pure diminue Km et Vmax dans la même proportion.",
        correct: true,
        explanation: "Les droites de Lineweaver-Burk idéales sont alors parallèles.",
      },
      {
        content: "Une inhibition non compétitive pure diminue Vmax sans modifier Km.",
        correct: true,
        explanation: "C’est un cas particulier d’inhibition mixte où l’affinité apparente pour le substrat reste inchangée.",
      },
      {
        content: "Dans une inhibition mixte générale, Vmax diminue et Km peut augmenter ou diminuer.",
        correct: true,
        explanation: "Le sens de variation de Km dépend des affinités relatives de l’inhibiteur pour E et ES.",
      },
      {
        content: "Une inhibition compétitive pure diminue toujours Vmax à zéro quelle que soit [S].",
        correct: false,
        explanation: "Dans le modèle idéal, Vmax est inchangée.",
      },
    ],
  },
  {
    order: 29,
    difficulty: 'MEDIUM',
    format: 'QZONE',
    question: "Sélectionnez sur l’axe des abscisses l’intersection correspondant à $-1/K_m$.",
    explanation: "Dans une représentation de Lineweaver-Burk, l’abscisse à l’origine vaut −1/Km.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:qzone-lineweaver-burk'],
    image: {
      src: '/images/training/ue14/colles/c11/lineweaver-burk-intercept-qzone.svg',
      alt: 'Droite de Lineweaver-Burk',
      width: 960,
      height: 560,
    },
    expectedZones: [
      {
        id: 'target',
        label: 'Abscisse à l’origine −1/Km',
        x: 0.28,
        y: 0.8,
        tolerance: 0.07,
      },
    ],
    defaultTolerance: 0.07,
  },
  {
    order: 30,
    difficulty: 'HARD',
    format: 'QRM',
    question: "Pour cette synthèse cumulative de toute l’EC de Biochimie, quelles propositions sont exactes ?",
    explanation: "Une maîtrise cumulative suppose de relier structure, fonction et mesure : glucides, lipides, protéines et enzymes mobilisent des notions chimiques communes mais des organisations biologiques différentes.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C11', 'ec:BIOCHIMIE', 'theme:synthese-finale'],
    choices: [
      {
        content: "Le saccharose est non réducteur car ses deux carbones anomériques sont engagés dans sa liaison osidique.",
        correct: true,
        explanation: "Aucun carbone anomérique libre n’est disponible pour retrouver directement une forme carbonylée.",
      },
      {
        content: "La phospholipase A2 peut libérer un acide gras en position sn-2 d’un glycérophospholipide.",
        correct: true,
        explanation: "Cette position peut notamment porter de l’acide arachidonique.",
      },
      {
        content: "Une enzyme accélère l’approche de l’équilibre sans modifier Keq.",
        correct: true,
        explanation: "Elle abaisse l’énergie d’activation des réactions directe et inverse.",
      },
      {
        content: "L’HbA adulte principale est constituée de quatre chaînes β.",
        correct: false,
        explanation: "La forme principale est α2β2.",
      },
      {
        content: "À très forte [S], une enzyme michaelienne non inhibée produit une vitesse qui dépasse indéfiniment Vmax.",
        correct: false,
        explanation: "La saturation conduit vers une asymptote Vmax.",
      },
    ],
  },
];
