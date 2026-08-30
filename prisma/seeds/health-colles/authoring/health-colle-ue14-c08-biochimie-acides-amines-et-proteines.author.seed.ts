import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';
import { TEX_UNITS, texQuantity } from '../../tex-units';

const U = TEX_UNITS;

/**
 * UE14 — Colle C08 — Biochimie — Acides aminés et protéines
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 * Périmètre : Biochimie Ch. 3.1 à 3.5 — AA, peptides, protéines et rôles biologiques.
 */
export const UE14_COLLE_C08_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 1,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "À propos des formes représentées pour A et B et de l’ionisation des acides aminés, quelles propositions sont exactes ?",
    explanation: "Les acides aminés possèdent au minimum les fonctions $\\alpha$-carboxyle et $\\alpha$-amine, dont l’état de protonation dépend du pH. Une forme zwitterionique comporte simultanément des charges formelles opposées ; sa charge nette peut être nulle sans que les fonctions soient toutes non chargées. Le point isoélectrique correspond à un pH pour lequel la charge nette moyenne de l’espèce est nulle.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:aa-ionisation'],
    choices: [
      {
        content: "Un acide aminé possède au minimum une fonction carboxylique et une fonction amine susceptibles de participer à son ionisation.",
        correct: true,
        explanation: "Vrai. Les fonctions $\\alpha$-carboxyle et $\\alpha$-amine constituent au minimum deux fonctions ionisables.",
      },
      {
        content: "Au point isoélectrique, toutes les fonctions ionisables d’un acide aminé sont nécessairement sous forme non chargée.",
        correct: false,
        explanation: "Faux. Une charge nette nulle peut résulter de charges positives et négatives qui se compensent.",
      },
      {
        content: "Un acide aminé peut porter simultanément une charge positive et une charge négative tout en ayant une charge nette nulle.",
        correct: true,
        explanation: "Vrai. C’est précisément le principe d’une forme zwitterionique.",
      },
      {
        content: "La charge globale d’un acide aminé dépend notamment du pH du milieu.",
        correct: true,
        explanation: "Vrai. Le pH détermine l’état de protonation des fonctions ionisables.",
      },
      {
        content: "La présence d’une forme zwitterionique signifie que la molécule ne comporte aucune charge formelle.",
        correct: false,
        explanation: "Faux. Un zwitterion comporte des charges formelles locales opposées.",
      },
    ],
  },
  {
    order: 2,
    difficulty: 'EASY',
    format: 'QROC',
    question: "Quel est l’acide aminé A, dont la chaîne latérale est $-\\mathrm{CH_2-SH}$ ?",
    explanation: "La cystéine possède une chaîne latérale $-\\mathrm{CH_2-SH}$ contenant une fonction thiol. Elle se distingue notamment de la méthionine, qui contient un thioéther.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:aa-soufres'],
    answer: {
      type: 'text',
      acceptedAnswers: ['cystéine', 'cysteine', 'Cys', 'C'],
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
    order: 3,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: "Dans le dipeptide A–B, quelle propriété explique directement la faible liberté de rotation autour de la liaison $\\ce{C-N}$ du motif $\\ce{C(=O)-NH}$ ?",
    explanation: "La liaison peptidique présente une délocalisation électronique entre le carbonyle et l’azote. La liaison $\\ce{C-N}$ acquiert ainsi un caractère partiel de double liaison, ce qui rend le motif peptidique plan et limite fortement la rotation autour de cette liaison.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:liaison-peptidique'],
    choices: [
      {
        content: "La délocalisation électronique confère à la liaison $\\ce{C-N}$ un caractère partiel de double liaison.",
        correct: true,
        explanation: "La délocalisation électronique confère à la liaison $\\ce{C-N}$ un caractère partiel de double liaison.",
      },
      {
        content: "La liaison $\\ce{C-N}$ est une liaison ionique entre les deux résidus.",
        correct: false,
        explanation: "La liaison $\\ce{C-N}$ est une liaison ionique entre les deux résidus.",
      },
      {
        content: "Le motif $\\ce{C-N}$ est rigidifié par l’hydrolyse permanente d’ATP.",
        correct: false,
        explanation: "Le motif $\\ce{C-N}$ est rigidifié par l’hydrolyse permanente d’ATP.",
      },
      {
        content: "La rigidité provient obligatoirement d’un pont disulfure entre A et B.",
        correct: false,
        explanation: "La rigidité provient obligatoirement d’un pont disulfure entre A et B.",
      },
      {
        content: "Toute rotation est empêchée par la présence d’une glycine en position B, indépendamment de la liaison peptidique.",
        correct: false,
        explanation: "Toute rotation est empêchée par la présence d’une glycine en position B, indépendamment de la liaison peptidique.",
      },
    ],
  },
  {
    order: 4,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux associations correctes entre un acide aminé et sa chaîne latérale.",
    explanation: "La sérine porte un alcool primaire et la méthionine un thioéther. Les autres associations proposées inversent des caractéristiques structurales classiques.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:aa-chaines-laterales'],
    choices: [
      {
        content: "Sérine — groupement alcool primaire.",
        correct: true,
        explanation: "La chaîne latérale de la sérine est $-\\mathrm{CH_2OH}$.",
      },
      {
        content: "Méthionine — groupement thioéther.",
        correct: true,
        explanation: "Le soufre de la méthionine appartient à un thioéther, contrairement au thiol de la cystéine.",
      },
      {
        content: "Tryptophane — groupement phénol.",
        correct: false,
        explanation: "Le tryptophane porte un noyau indole ; le groupement phénol caractérise la tyrosine.",
      },
      {
        content: "Arginine — second groupement carboxyle.",
        correct: false,
        explanation: "L’arginine porte un groupement guanidinium ; un second carboxyle caractérise notamment l’aspartate et le glutamate.",
      },
      {
        content: "Asparagine — chaîne latérale hydrocarbonée totalement apolaire dépourvue d’hétéroatome.",
        correct: false,
        explanation: "L’asparagine porte une fonction amide et appartient aux acides aminés polaires neutres.",
      },
    ],
  },
  {
    order: 5,
    difficulty: 'EASY',
    format: 'QRM',
    question: "À propos des niveaux d’organisation structurale des protéines, quelles propositions sont exactes ?",
    explanation: "La structure secondaire comprend notamment hélices $\\alpha$ et feuillets $\\beta$, tandis que la structure quaternaire correspond à l’association de plusieurs sous-unités polypeptidiques.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:niveaux-structure'],
    choices: [
      {
        content: "Une hélice $\\alpha$ et un feuillet $\\beta$ sont des éléments de structure secondaire.",
        correct: true,
        explanation: "Ces organisations locales régulières sont stabilisées principalement par des liaisons hydrogène du squelette peptidique.",
      },
      {
        content: "La structure quaternaire implique l’association de plusieurs chaînes polypeptidiques lorsqu’elle existe.",
        correct: true,
        explanation: "Elle décrit l’organisation d’un complexe formé de plusieurs sous-unités.",
      },
      {
        content: "La structure primaire correspond uniquement à l’arrangement spatial des hélices et feuillets.",
        correct: false,
        explanation: "La structure primaire correspond à la séquence des résidus d’acides aminés.",
      },
      {
        content: "La structure tertiaire est obligatoirement identique pour toutes les protéines possédant le même nombre de résidus.",
        correct: false,
        explanation: "La conformation dépend notamment de la séquence, des interactions entre résidus et du milieu.",
      },
      {
        content: "Une protéine monomérique doit nécessairement posséder une structure quaternaire.",
        correct: false,
        explanation: "Une structure quaternaire n’existe que lorsqu’au moins plusieurs sous-unités s’associent.",
      },
    ],
  },
  {
    order: 6,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: "Combien d’acides aminés trouve-t-on en moyenne par tour d’une hélice $\\alpha$ ? Donnez uniquement la valeur numérique.",
    explanation: "Une hélice $\\alpha$ comporte en moyenne environ 3,6 résidus par tour.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:helice-alpha'],
    answer: {
      type: 'number',
      value: 3.6,
      tolerance: 0.1,
    },
  },
  {
    order: 7,
    difficulty: 'HARD',
    format: 'QRU',
    question: "Lors de la maturation de l’insuline, quel événement transforme directement la pro-insuline en insuline mature ?",
    explanation: "La pro-insuline est clivée : le peptide C est libéré et les chaînes A et B restent associées notamment par des ponts disulfure.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:insuline-maturation'],
    choices: [
      {
        content: "L’ajout d’un groupement hème sur chacune des chaînes peptidiques.",
        correct: false,
        explanation: "L’insuline ne contient pas de groupement hème.",
      },
      {
        content: "Le clivage protéolytique libérant le peptide C.",
        correct: true,
        explanation: "Cette étape convertit la pro-insuline en insuline mature formée des chaînes A et B.",
      },
      {
        content: "La polymérisation de la pro-insuline en un tétramère $\\alpha_2\\beta_2$.",
        correct: false,
        explanation: "La notation $\\alpha_2\\beta_2$ correspond à l’hémoglobine A, pas à l’insuline.",
      },
      {
        content: "La réduction complète de tous les ponts disulfure.",
        correct: false,
        explanation: "Les ponts disulfure participent à la structure de l’insuline mature.",
      },
      {
        content: "Le remplacement du peptide C par une chaîne glucidique de type glycogène.",
        correct: false,
        explanation: "La maturation repose sur des clivages protéolytiques et non sur cette substitution.",
      },
    ],
  },
  {
    order: 8,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux relations précurseur → produit correctes.",
    explanation: "La tyrosine est un précurseur de catécholamines et le tryptophane de la sérotonine. Ces relations illustrent les rôles fonctionnels des acides aminés au-delà de la synthèse protéique.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:aa-precurseurs'],
    choices: [
      {
        content: "Tyrosine → catécholamines.",
        correct: true,
        explanation: "La tyrosine participe notamment à la biosynthèse de l’adrénaline et de la noradrénaline.",
      },
      {
        content: "Tryptophane → sérotonine.",
        correct: true,
        explanation: "Le tryptophane est un précurseur de la sérotonine puis de la mélatonine.",
      },
      {
        content: "Glutamate → cholestérol comme unique voie physiologique.",
        correct: false,
        explanation: "Le glutamate est notamment neurotransmetteur et précurseur du GABA ; cette relation n’est pas celle décrite ici.",
      },
      {
        content: "Glycine → adrénaline par simple décarboxylation.",
        correct: false,
        explanation: "Les catécholamines dérivent de la tyrosine et non de la glycine.",
      },
      {
        content: "Méthionine → GABA par perte directe de $\\ce{CO2}$.",
        correct: false,
        explanation: "Le GABA est formé par décarboxylation du glutamate.",
      },
    ],
  },
  {
    order: 9,
    difficulty: 'MEDIUM',
    format: 'QRPL',
    requiredSelectionCount: 5,
    question: "Parmi ces dix propositions sur les acides aminés, peptides et protéines, sélectionnez exactement les cinq correctes.",
    explanation: "Cette synthèse croise structure, maturation et rôles biologiques : cystéine et ponts disulfure, orientation N→C des peptides, proline, glutathion, hémoglobine et matrice extracellulaire.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:synthese-aa-proteines'],
    choices: [
      {
        content: "L’oxydation de deux cystéines peut former une cystine et établir un pont disulfure.",
        correct: true,
        explanation: "Le pont disulfure est une liaison covalente entre deux résidus cystéine oxydés.",
      },
      {
        content: "Une chaîne peptidique est conventionnellement écrite de l’extrémité C-terminale vers l’extrémité N-terminale.",
        correct: false,
        explanation: "La convention d’écriture va de l’extrémité $\\mathrm{N}$-terminale vers l’extrémité $\\mathrm{C}$-terminale.",
      },
      {
        content: "La proline peut introduire une angulation dans une chaîne polypeptidique.",
        correct: true,
        explanation: "Sa structure cyclique impose des contraintes conformationnelles particulières.",
      },
      {
        content: "Le glutathion est un tripeptide comportant glutamate, cystéine et glycine.",
        correct: true,
        explanation: "Il s’agit du tripeptide $\\gamma\\text{Glu-Cys-Gly}$, important dans la défense antioxydante.",
      },
      {
        content: "L’hémoglobine A adulte comporte deux chaînes $\\alpha$ et deux chaînes $\\beta$.",
        correct: true,
        explanation: "HbA est un hétérotétramère $\\alpha_2\\beta_2$.",
      },
      {
        content: "Une immunoglobuline G est constituée d’une seule chaîne polypeptidique continue.",
        correct: false,
        explanation: "La structure générale d’une immunoglobuline comporte deux chaînes lourdes et deux chaînes légères.",
      },
      {
        content: "Le collagène de type IV est un constituant typique des membranes basales.",
        correct: true,
        explanation: "Ce collagène forme des réseaux caractéristiques des membranes basales.",
      },
      {
        content: "La méthémoglobine fixe normalement l’oxygène grâce à un fer $\\ce{Fe^3+}$ plus performant que $\\ce{Fe^2+}$.",
        correct: false,
        explanation: "L’oxydation du fer en $\\ce{Fe^3+}$ produit une méthémoglobine incapable de fixer normalement $\\ce{O2}$.",
      },
      {
        content: "Les microtubules sont constitués de myosine II polymérisée.",
        correct: false,
        explanation: "Les microtubules sont constitués de tubuline ; la myosine II est un moteur associé à l’actine.",
      },
      {
        content: "L’albumine est une protéine exclusivement intracellulaire du cytosquelette.",
        correct: false,
        explanation: "L’albumine est une protéine plasmatique majeure synthétisée par le foie et assure notamment transport et pression oncotique.",
      },
    ],
  },
  {
    order: 10,
    difficulty: 'HARD',
    format: 'QRM',
    question: "À propos des immunoglobulines et de leurs fragments, quelles propositions sont exactes ?",
    explanation: "Une immunoglobuline possède deux chaînes lourdes et deux chaînes légères. Les fragments Fab portent les sites de liaison à l’antigène, tandis que le fragment Fc est formé par les parties C-terminales des chaînes lourdes et assure des fonctions effectrices.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:immunoglobulines'],
    choices: [
      {
        content: "La structure générale d’une immunoglobuline est $\\mathrm{H_2L_2}$.",
        correct: true,
        explanation: "Elle comporte deux chaînes lourdes identiques et deux chaînes légères identiques.",
      },
      {
        content: "Un fragment Fab conserve la capacité de reconnaître l’antigène.",
        correct: true,
        explanation: "Fab signifie antigen binding et comprend les domaines participant à la reconnaissance de l’épitope.",
      },
      {
        content: "Le fragment Fc dérive des portions $\\mathrm{C}$-terminales des chaînes lourdes.",
        correct: true,
        explanation: "Il porte notamment des fonctions d’interaction avec des récepteurs cellulaires et le complément.",
      },
      {
        content: "Des ponts disulfure participent à l’association des chaînes de l’anticorps.",
        correct: true,
        explanation: "Ils relient notamment chaînes lourdes entre elles et chaînes lourdes aux chaînes légères.",
      },
      {
        content: "Les cinq classes d’immunoglobulines sont définies par la nature de leur chaîne légère $\\kappa$ ou $\\lambda$.",
        correct: false,
        explanation: "Les classes IgA, IgD, IgE, IgG et IgM sont définies par la nature de la chaîne lourde.",
      },
    ],
  },
  {
    order: 11,
    difficulty: 'EASY',
    format: 'QROC',
    question: "Combien de groupements hème contient une molécule d’hémoglobine A adulte fonctionnelle ?",
    explanation: "HbA possède quatre sous-unités et chaque chaîne porte un groupement hème : il y a donc quatre hèmes par tétramère.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:hemoglobine'],
    answer: {
      type: 'number',
      value: 4,
      tolerance: 0,
    },
  },
  {
    order: 12,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: "Quelle proposition décrit correctement le récepteur de l’insuline ?",
    explanation: "Le récepteur de l’insuline est un récepteur membranaire à activité tyrosine kinase intrinsèque, formé de sous-unités $\\alpha$ et $\\beta$.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:recepteur-insuline'],
    choices: [
      {
        content: "Il s’agit d’un canal chlorure de la famille CFTR.",
        correct: false,
        explanation: "CFTR est une autre protéine membranaire appartenant à la famille ABC.",
      },
      {
        content: "Il est constitué d’une seule chaîne soluble dépourvue de domaine transmembranaire.",
        correct: false,
        explanation: "Le récepteur de l’insuline est une glycoprotéine membranaire oligomérique.",
      },
      {
        content: "Il possède une activité tyrosine kinase portée par ses sous-unités $\\beta$.",
        correct: true,
        explanation: "Les sous-unités $\\beta$ comportent le domaine transmembranaire et le domaine tyrosine kinase cytoplasmique.",
      },
      {
        content: "Son activation consiste uniquement à ouvrir un pore passif pour l’insuline.",
        correct: false,
        explanation: "La fixation de l’insuline déclenche une cascade de phosphorylation et de signalisation intracellulaire.",
      },
      {
        content: "Il appartient obligatoirement aux récepteurs nucléaires des hormones stéroïdiennes.",
        correct: false,
        explanation: "L’insuline agit via un récepteur membranaire et non via un récepteur nucléaire.",
      },
    ],
  },
  {
    order: 13,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux propositions correctes sur des protéines membranaires assurant un transport.",
    explanation: "La $\\ce{Na+/K+}$-ATPase utilise directement l’ATP pour déplacer 3 $\\ce{Na+}$ vers l’extérieur et 2 $\\ce{K+}$ vers l’intérieur. Les transporteurs ABC utilisent eux aussi l’énergie de l’hydrolyse de l’ATP.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:transporteurs-membranaires'],
    choices: [
      {
        content: "La $\\ce{Na+/K+}$-ATPase expulse trois ions $\\ce{Na+}$ et fait entrer deux ions $\\ce{K+}$ par cycle de fonctionnement.",
        correct: true,
        explanation: "Cette stœchiométrie participe au maintien des gradients électrochimiques transmembranaires.",
      },
      {
        content: "Les transporteurs ABC utilisent l’énergie issue de l’hydrolyse de l’ATP.",
        correct: true,
        explanation: "ABC signifie ATP Binding Cassette et ces transporteurs comportent des domaines de liaison aux nucléotides.",
      },
      {
        content: "Un canal ionique passif peut déplacer durablement un ion contre son gradient électrochimique sans apport d’énergie.",
        correct: false,
        explanation: "Un canal facilite un passage selon le gradient électrochimique ; il n’assure pas un pompage actif contre ce gradient.",
      },
      {
        content: "La P-glycoprotéine est une enzyme soluble du noyau qui ne traverse jamais la membrane.",
        correct: false,
        explanation: "La P-glycoprotéine est un transporteur membranaire de la famille ABC.",
      },
      {
        content: "Tous les transporteurs membranaires appartiennent à une seule et même famille structurale.",
        correct: false,
        explanation: "Les protéines de transport comprennent de nombreuses familles aux structures et mécanismes différents.",
      },
    ],
  },
  {
    order: 14,
    difficulty: 'HARD',
    format: 'QRM',
    question: "Un patient présente une drépanocytose et l’on compare HbA, HbS et la méthémoglobine. Quelles propositions sont exactes ?",
    explanation: "HbA est $\\alpha_2\\beta_2$ et contient du fer ferreux $\\ce{Fe^2+}$ dans l’hème. HbS résulte classiquement d’une substitution $\\text{Glu}\\rightarrow\\text{Val}$ en position $6$ de la chaîne $\\beta$. L’oxydation de $\\ce{Fe^2+}$ en $\\ce{Fe^3+}$ produit la méthémoglobine, qui ne fixe pas normalement l’oxygène.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:hemoglobine-pathologie'],
    choices: [
      {
        content: "Dans HbA fonctionnelle, le fer de l’hème est à l’état $\\ce{Fe^2+}$.",
        correct: true,
        explanation: "Le fer ferreux permet la fixation réversible de l’oxygène.",
      },
      {
        content: "La mutation classique d’HbS remplace un glutamate par une valine en position $6$ de la chaîne $\\beta$.",
        correct: true,
        explanation: "Cette substitution modifie les propriétés de l’hémoglobine et favorise l’agrégation de la forme désoxygénée.",
      },
      {
        content: "Le passage du fer de $\\ce{Fe^2+}$ à $\\ce{Fe^3+}$ conduit à une méthémoglobine qui fixe moins efficacement, voire pas normalement, $\\ce{O2}$.",
        correct: true,
        explanation: "Le fer ferrique n’assure pas la fixation physiologique de l’oxygène.",
      },
      {
        content: "HbS résulte d’un remplacement de la valine $\\beta 6$ par un glutamate.",
        correct: false,
        explanation: "Le sens de la substitution est inverse : $\\text{Glu}\\rightarrow\\text{Val}$.",
      },
      {
        content: "L’hémoglobine A adulte ne possède qu’un seul site de fixation de l’oxygène par tétramère.",
        correct: false,
        explanation: "Chaque sous-unité possède un hème ; HbA offre donc quatre sites de fixation de l’oxygène.",
      },
    ],
  },
  {
    order: 15,
    difficulty: 'HARD',
    format: 'QROC',
    question: "Quel précurseur protéique peut donner, après clivages protéolytiques différenciés selon les tissus, notamment l’ACTH et la $\\beta$-endorphine ?",
    explanation: "La pro-opiomélanocortine (POMC) est un précurseur protéique pouvant être clivé en plusieurs peptides biologiquement actifs, dont l’ACTH et la $\\beta$-endorphine.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:pomc'],
    answer: {
      type: 'text',
      acceptedAnswers: ['POMC', 'pro-opiomélanocortine', 'proopiomélanocortine', 'pro-opiomelanocortine', 'proopiomelanocortine'],
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
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: "Quelle proposition caractérise correctement le collagène de type IV ?",
    explanation: "Le collagène IV forme des réseaux et constitue un élément majeur des membranes basales, contrairement au collagène I qui forme des fibrilles et fibres.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:collagene-iv'],
    choices: [
      {
        content: "Il est le principal pigment respiratoire des hématies.",
        correct: false,
        explanation: "Le pigment respiratoire des hématies est l’hémoglobine.",
      },
      {
        content: "Il constitue exclusivement des microtubules cytoplasmiques.",
        correct: false,
        explanation: "Les microtubules sont des polymères de tubuline.",
      },
      {
        content: "Il est une hormone peptidique produite par les cellules $\\beta$ du pancréas.",
        correct: false,
        explanation: "Cette description correspond à l’insuline, pas au collagène IV.",
      },
      {
        content: "Il forme des réseaux caractéristiques des membranes basales.",
        correct: true,
        explanation: "Le collagène IV est un collagène de réseau très représenté dans les membranes basales.",
      },
      {
        content: "Il est une immunoglobuline pentamérique liée par une chaîne J.",
        correct: false,
        explanation: "Cette organisation correspond à l’IgM.",
      },
    ],
  },
  {
    order: 17,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement les deux associations correctes concernant la matrice extracellulaire.",
    explanation: "La fibronectine peut interagir avec les intégrines et les laminines sont des hétérotrimères $\\alpha-\\beta-\\gamma$ particulièrement importants dans les membranes basales.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:matrice-extracellulaire'],
    choices: [
      {
        content: "Fibronectine — interaction avec des récepteurs de type intégrine.",
        correct: true,
        explanation: "La fibronectine participe aux interactions cellule–matrice via des intégrines.",
      },
      {
        content: "Laminine — hétérotrimère comportant des chaînes $\\alpha$, $\\beta$ et $\\gamma$.",
        correct: true,
        explanation: "Les laminines sont des glycoprotéines de la matrice extracellulaire très importantes dans les membranes basales.",
      },
      {
        content: "Collagène I — protéine globulaire circulante assurant la pression oncotique.",
        correct: false,
        explanation: "La pression oncotique plasmatique est notamment assurée par l’albumine ; le collagène I est une protéine fibrillaire de la matrice.",
      },
      {
        content: "Élastine — sous-unité légère des immunoglobulines.",
        correct: false,
        explanation: "L’élastine est une protéine matricielle des fibres élastiques.",
      },
      {
        content: "Protéoglycane — moteur moléculaire hydrolysant l’ATP sur les microtubules.",
        correct: false,
        explanation: "Les protéoglycanes sont des composants de la matrice extracellulaire et ne sont pas des moteurs microtubulaires.",
      },
    ],
  },
  {
    order: 18,
    difficulty: 'EASY',
    format: 'QRM',
    question: "À propos des protéines impliquées dans la motilité cellulaire, quelles propositions sont exactes ?",
    explanation: "Les myosines sont des moteurs moléculaires dépendants de l’ATP et la myosine II participe notamment à la contraction musculaire avec les filaments d’actine.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:myosines'],
    choices: [
      {
        content: "Les myosines utilisent l’énergie de l’hydrolyse de l’ATP.",
        correct: true,
        explanation: "L’hydrolyse de l’ATP alimente le cycle mécanique des myosines.",
      },
      {
        content: "La myosine II participe à la contraction en interagissant avec l’actine.",
        correct: true,
        explanation: "L’interaction actine–myosine II est centrale dans la contraction musculaire.",
      },
      {
        content: "Toutes les myosines sont des protéines de la matrice extracellulaire sécrétées hors de la cellule.",
        correct: false,
        explanation: "Les myosines sont des moteurs moléculaires intracellulaires.",
      },
      {
        content: "La myosine constitue le monomère de base des microtubules.",
        correct: false,
        explanation: "Les microtubules sont formés de tubuline $\\alpha/\\beta$.",
      },
      {
        content: "La contraction musculaire nécessite la conversion irréversible de l’actine F en collagène.",
        correct: false,
        explanation: "Actine et collagène sont des protéines distinctes ; la contraction repose sur l’interaction actine–myosine.",
      },
    ],
  },
  {
    order: 19,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: String.raw`Quelle est approximativement la périodicité D observée dans les fibrilles de collagène de type I ? Donnez uniquement la valeur numérique, exprimée en $${U.NM}$.`,
    explanation: String.raw`L’agencement décalé des molécules de tropocollagène donne une striation périodique d’environ $${texQuantity(67, U.NM)}$.`,
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:collagene-periodicite'],
    answer: {
      type: 'number',
      value: 67,
      tolerance: 2,
      unit: 'nm',
      displayUnit: U.NM,
    },
  },
  {
    order: 20,
    difficulty: 'HARD',
    format: 'QRU',
    question: "Quelle proposition décrit correctement CFTR ?",
    explanation: "CFTR appartient à la famille ABC mais fonctionne comme un canal chlorure régulé ; de nombreuses mutations du gène CFTR, dont $\\Delta\\text{F508}$, sont responsables de mucoviscidose.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:cftr'],
    choices: [
      {
        content: "CFTR est une immunoglobuline soluble assurant la reconnaissance des épitopes.",
        correct: false,
        explanation: "CFTR est une protéine membranaire et non un anticorps.",
      },
      {
        content: "CFTR est une chaîne de collagène constitutive de la membrane basale.",
        correct: false,
        explanation: "Le collagène IV participe aux membranes basales ; CFTR est un canal membranaire.",
      },
      {
        content: "CFTR est le récepteur nucléaire de la vitamine D.",
        correct: false,
        explanation: "Le récepteur de la vitamine D est VDR, un récepteur nucléaire distinct.",
      },
      {
        content: "CFTR pompe trois $\\ce{Na+}$ vers l’extérieur pour deux $\\ce{K+}$ vers l’intérieur.",
        correct: false,
        explanation: "Cette stœchiométrie correspond à la $\\ce{Na+/K+}$-ATPase.",
      },
      {
        content: "CFTR est un canal chlorure de la famille ABC et la mutation $\\Delta\\text{F508}$ est classiquement associée à la mucoviscidose.",
        correct: true,
        explanation: "CFTR possède des domaines caractéristiques des protéines ABC et régule un flux de chlorure à travers la membrane.",
      },
    ],
  },
  {
    order: 21,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "Concernant quelques peptides et petites protéines de signalisation, quelles propositions sont exactes ?",
    explanation: "Les peptides biologiquement actifs peuvent être issus de précurseurs et agir comme hormones ou médiateurs. Le glucagon est une hormone peptidique hyperglycémiante, les peptides natriurétiques participent à la régulation volémique, et les cytokines assurent des fonctions de communication intercellulaire.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:peptides-signalisation'],
    choices: [
      {
        content: "Le glucagon est une hormone peptidique de 29 acides aminés.",
        correct: true,
        explanation: "Il est produit à partir du proglucagon et exerce une action hyperglycémiante.",
      },
      {
        content: "Le BNP favorise la natriurèse et son dosage peut contribuer à l’évaluation d’une insuffisance cardiaque.",
        correct: true,
        explanation: "BNP et NT-proBNP sont utilisés en pratique biologique dans ce contexte.",
      },
      {
        content: "Les cytokines comprennent notamment des interleukines, des interférons et des chimiokines.",
        correct: true,
        explanation: "Ces familles participent à la communication et à la régulation des réponses immunitaires et inflammatoires.",
      },
      {
        content: "La $\\beta$-endorphine peut dériver du clivage de la POMC.",
        correct: true,
        explanation: "La POMC est un précurseur commun de plusieurs peptides actifs selon le tissu et les clivages.",
      },
      {
        content: "Toutes les hormones peptidiques traversent spontanément la membrane plasmique pour se fixer exclusivement à des récepteurs nucléaires.",
        correct: false,
        explanation: "Les hormones peptidiques agissent typiquement via des récepteurs membranaires.",
      },
    ],
  },
  {
    order: 22,
    difficulty: 'EASY',
    format: 'QRM',
    question: "À propos des chaînes latérales des résidus Tyr et His représentés dans le segment, quelles propositions sont exactes ?",
    explanation: "La tyrosine est un acide aminé aromatique portant un groupement phénol. L’histidine contient un noyau imidazole. Le thiol caractérise notamment la cystéine, tandis que le groupement guanidinium est porté par l’arginine.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:aa-groupements'],
    choices: [
      {
        content: "La tyrosine porte un groupement phénol.",
        correct: true,
        explanation: "Son cycle aromatique hydroxylé correspond à une fonction phénol.",
      },
      {
        content: "L’histidine possède un noyau imidazole dans sa chaîne latérale.",
        correct: true,
        explanation: "L’imidazole confère à l’histidine des propriétés acido-basiques particulières.",
      },
      {
        content: "La tyrosine porte une fonction thiol identique à celle de la cystéine.",
        correct: false,
        explanation: "La tyrosine porte un phénol, pas un thiol.",
      },
      {
        content: "L’histidine porte un groupement guanidinium caractéristique de l’arginine.",
        correct: false,
        explanation: "Le groupement guanidinium caractérise l’arginine ; l’histidine porte un noyau imidazole.",
      },
      {
        content: "La chaîne latérale de la tyrosine est dépourvue de tout atome d’oxygène.",
        correct: false,
        explanation: "Le phénol de la tyrosine comporte un atome d’oxygène ($\\mathrm{OH}$).",
      },
    ],
  },
  {
    order: 23,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "La protéine représentée subit une modification importante de pH et de température. Quelles propositions sont exactes à propos de sa conformation ?",
    explanation: "La conformation d’une protéine dépend d’interactions covalentes et non covalentes sensibles à son environnement. Des variations importantes de pH ou de température peuvent altérer ces interactions et provoquer une dénaturation. Celle-ci peut diminuer ou abolir l’activité biologique sans hydrolyser la chaîne polypeptidique, et sa réversibilité dépend de la protéine et des conditions.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:conformation-denaturation'],
    choices: [
      {
        content: "Une variation importante de pH peut modifier les interactions stabilisant la conformation d’une protéine.",
        correct: true,
        explanation: "Le pH modifie l’état d’ionisation de nombreux groupements et peut perturber les interactions stabilisatrices.",
      },
      {
        content: "Une élévation importante de température peut favoriser une dénaturation.",
        correct: true,
        explanation: "L’agitation thermique peut rompre des liaisons faibles stabilisant la conformation nativale.",
      },
      {
        content: "Une dénaturation peut entraîner une perte d’activité biologique sans nécessiter la coupure de toutes les liaisons peptidiques.",
        correct: true,
        explanation: "La dénaturation touche principalement les niveaux supérieurs d’organisation et peut laisser la structure primaire intacte.",
      },
      {
        content: "Une dénaturation remplace nécessairement la séquence primaire par une nouvelle séquence d’acides aminés.",
        correct: false,
        explanation: "Une modification de conformation n’entraîne pas une réécriture de la séquence d’acides aminés.",
      },
      {
        content: "Toute dénaturation est nécessairement totalement réversible dès que le pH initial est restauré.",
        correct: false,
        explanation: "Selon la protéine et les conditions, la dénaturation peut être réversible ou irréversible.",
      },
    ],
  },
  {
    order: 24,
    difficulty: 'HARD',
    format: 'QZONE',
    question: "Sur le segment Tyr–His–Asp, sélectionnez le groupement carboxylate porté par la chaîne latérale de l’aspartate, et non le carboxylate de l’extrémité C-terminale.",
    explanation: "L’aspartate possède dans sa chaîne latérale un second groupement carboxylique. À pH 7,4, ce groupement est majoritairement déprotoné sous forme carboxylate $-\\mathrm{COO^-}$. Il faut le distinguer ici du carboxylate porté par l’extrémité $\\mathrm{C}$-terminale du peptide.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:qzone-aa-carboxylate'],
    image: {
      src: '/images/training/ue14/colles/c08/peptide-ionization-linked-q22-q24.svg',
      alt: 'Segment peptidique Tyr–His–Asp à pH 7,4 avec extrémités N- et C-terminales, accompagné d’une représentation schématique d’une protéine native et d’une forme dénaturée.',
      width: 1200,
      height: 700,
    },
    expectedZones: [
      {
        id: 'target-asp-sidechain-carboxylate',
        label: 'Groupement carboxylate latéral de l’aspartate',
        x: 0.5583,
        y: 0.2000,
        tolerance: 0.05,
      },
    ],
    defaultTolerance: 0.05,
  },
  {
    order: 25,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: "Pour relier structure et fonction des protéines, quelles propositions sont exactes ?",
    explanation: "La structure conditionne fortement la fonction : l’hémoglobine assure un transport grâce à son hème et à son organisation quaternaire, le collagène fournit une architecture fibrillaire ou en réseau, les intégrines relient matrice et cytosquelette, et l’albumine contribue au transport plasmatique et à la pression oncotique.",
    tags: ['usage:COLLE', 'ue:UE14', 'colle:C08', 'ec:BIOCHIMIE', 'theme:synthese-structure-fonction'],
    choices: [
      {
        content: "L’organisation quaternaire $\\alpha_2\\beta_2$ de l’hémoglobine A est compatible avec quatre groupes hème.",
        correct: true,
        explanation: "Chaque chaîne de globine porte un hème, soit quatre hèmes par tétramère HbA.",
      },
      {
        content: "Les collagènes associent des motifs structuraux répétés à des assemblages supramoléculaires adaptés au rôle mécanique de la matrice.",
        correct: true,
        explanation: "Le motif Gly-X-X’ et les triples hélices participent à l’architecture des collagènes.",
      },
      {
        content: "Les intégrines sont des hétérodimères $\\alpha/\\beta$ pouvant relier la matrice extracellulaire au cytosquelette et transmettre un signal.",
        correct: true,
        explanation: "Les intégrines participent à l’adhérence cellule–matrice et aux plaques d’adhésion focale.",
      },
      {
        content: "L’albumine contribue à la pression oncotique et au transport de nombreuses molécules dans le sang.",
        correct: true,
        explanation: "Elle transporte notamment des acides gras, hormones et médicaments et représente une part majeure des protéines sériques.",
      },
      {
        content: "Une mutation modifiant la séquence d’une protéine ne peut jamais modifier sa conformation ni sa fonction.",
        correct: false,
        explanation: "La drépanocytose illustre au contraire qu’une substitution d’acide aminé peut modifier les propriétés d’une protéine et avoir des conséquences physiopathologiques majeures.",
      },
    ],
  },
];
