import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.4 – Section D – Dérivés halogénés, organomagnésiens et substitutions nucléophiles
 */

export const UE14_CH8_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des dérivés halogénés de la fiche :",
    "choices": [
      {
        "content": "Ils sont notés de façon générale $\\ce{R-X}$.",
        "correct": true,
        "explanation": "R est un radical et X un halogène."
      },
      {
        "content": "X représente un halogène.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Ils sont décrits comme des produits généralement très toxiques.",
        "correct": true,
        "explanation": "Propriété explicitement mentionnée."
      },
      {
        "content": "Ils sont tous des alcools.",
        "correct": false,
        "explanation": "Le groupe caractéristique est C-X, pas C-OH."
      }
    ],
    "explanation": "La fiche introduit les dérivés halogénés par la notation RX et attire l'attention sur leur toxicité générale."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une voie de préparation d'un dérivé halogéné est l'addition de $\\ce{HX}$ sur un alcène. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "H et X s'ajoutent de part et d'autre de l'ancienne double liaison.",
        "correct": true,
        "explanation": "Bilan de l'addition électrophile."
      },
      {
        "content": "La double liaison est consommée.",
        "correct": true,
        "explanation": "Le produit est saturé au niveau de ces carbones."
      },
      {
        "content": "Le produit appartient à la famille RX.",
        "correct": true,
        "explanation": "Dérivé halogéné."
      },
      {
        "content": "Le magnésium est obligatoirement présent dans cette première étape.",
        "correct": false,
        "explanation": "Mg intervient ensuite pour former un organomagnésien."
      }
    ],
    "explanation": "Alcène + HX constitue une voie directe de préparation de RX."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une autre voie de préparation d'un dérivé halogéné part d'un alcool. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un agent halogénant est utilisé.",
        "correct": true,
        "explanation": "La fiche le précise."
      },
      {
        "content": "La fonction OH est remplacée par X.",
        "correct": true,
        "explanation": "Bilan simplifié alcool → RX."
      },
      {
        "content": "Le produit peut être un chlorure ou un bromure selon l'agent.",
        "correct": true,
        "explanation": "La fiche donne des agents adaptés."
      },
      {
        "content": "Le produit est nécessairement une amide.",
        "correct": false,
        "explanation": "Il s'agit d'un dérivé halogéné."
      }
    ],
    "explanation": "Un alcool peut être converti en dérivé halogéné par substitution du groupe hydroxyle."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les agents halogénants cités dans la fiche :",
    "choices": [
      {
        "content": "$\\ce{PCl5}$ est cité pour obtenir un dérivé chloré.",
        "correct": true,
        "explanation": "Cité dans la fiche."
      },
      {
        "content": "$\\ce{SOCl2}$ est cité pour obtenir un dérivé chloré.",
        "correct": true,
        "explanation": "Cité dans la fiche."
      },
      {
        "content": "$\\ce{POCl3}$ est cité pour obtenir un dérivé chloré.",
        "correct": true,
        "explanation": "Cité dans la fiche."
      },
      {
        "content": "La fiche cite aussi $\\ce{BBr5}$ pour obtenir un dérivé bromé.",
        "correct": true,
        "explanation": "On reprend ici strictement l'agent indiqué dans le support local."
      }
    ],
    "explanation": "Le choix de l'agent halogénant dépend du dérivé halogéné que l'on souhaite préparer ; cette question reprend les exemples tels qu'ils apparaissent dans la fiche."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la préparation d'un organomagnésien $\\ce{RMgX}$ :",
    "choices": [
      {
        "content": "Elle part d'un dérivé halogéné $\\ce{R-X}$.",
        "correct": true,
        "explanation": "Substrat du Grignard."
      },
      {
        "content": "Le magnésium est ajouté.",
        "correct": true,
        "explanation": "Bilan : RX + Mg → RMgX."
      },
      {
        "content": "Le produit est appelé réactif de Grignard.",
        "correct": true,
        "explanation": "Nom donné dans la fiche."
      },
      {
        "content": "Le carbone du radical R devient plus nucléophile dans le modèle du cours.",
        "correct": true,
        "explanation": "La fiche insiste sur le renversement du caractère du carbone."
      }
    ],
    "explanation": "La formation de RMgX transforme le dérivé halogéné en réactif organométallique fortement nucléophile."
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans $\\ce{RCH2-X}$ avant réaction avec Mg, le carbone porteur de X est décrit dans la fiche comme :",
    "choices": [
      {
        "content": "Électrophile.",
        "correct": true,
        "explanation": "La polarisation C-X lui confère ce caractère dans le modèle du cours."
      },
      {
        "content": "Capable de réagir avec un nucléophile.",
        "correct": true,
        "explanation": "Conséquence de son caractère électrophile."
      },
      {
        "content": "Déjà chargé négativement comme dans RMgX.",
        "correct": false,
        "explanation": "La charge négative est attribuée après formation du Grignard."
      },
      {
        "content": "Nécessairement un carbocation libre.",
        "correct": false,
        "explanation": "La fiche parle de caractère électrophile, pas d'un carbocation isolé."
      }
    ],
    "explanation": "Le passage RX → RMgX inverse le rôle réactif du carbone dans le modèle pédagogique."
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Après formation de $\\ce{RMgX}$, le carbone du fragment R est décrit comme :",
    "choices": [
      {
        "content": "Nucléophile.",
        "correct": true,
        "explanation": "Il porte un caractère négatif."
      },
      {
        "content": "Riche en électrons.",
        "correct": true,
        "explanation": "C'est la logique du Grignard."
      },
      {
        "content": "Capable de réagir avec un carbone électrophile.",
        "correct": true,
        "explanation": "Aldéhydes, cétones et esters sont cités."
      },
      {
        "content": "Strictement électrophile comme dans RX.",
        "correct": false,
        "explanation": "Le caractère est inversé."
      }
    ],
    "explanation": "Le Grignard est un nucléophile carboné utile pour créer de nouvelles liaisons C-C."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les organomagnésiens de la fiche peuvent réagir avec :",
    "choices": [
      {
        "content": "Des aldéhydes.",
        "correct": true,
        "explanation": "Composés carbonylés électrophiles."
      },
      {
        "content": "Des cétones.",
        "correct": true,
        "explanation": "Composés carbonylés électrophiles."
      },
      {
        "content": "Des esters.",
        "correct": true,
        "explanation": "Composés à carbone électrophile."
      },
      {
        "content": "Tous les composés possédant un carbone électrophile dans le modèle du cours.",
        "correct": true,
        "explanation": "Formulation générale de la fiche."
      }
    ],
    "explanation": "La réactivité du Grignard dépend de sa nucléophilie face à un carbone électrophile."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel bilan résume la formation d'un réactif de Grignard ?",
    "choices": [
      {
        "content": "$\\ce{R-X + Mg -> RMgX}$.",
        "correct": true,
        "explanation": "Bilan de la fiche."
      },
      {
        "content": "$\\ce{R-OH + Mg -> R-X}$.",
        "correct": false,
        "explanation": "Mg seul ne halogène pas l'alcool."
      },
      {
        "content": "$\\ce{R-X + H2O -> RMgX}$.",
        "correct": false,
        "explanation": "Ce n'est pas le bilan."
      },
      {
        "content": "$\\ce{R-NH2 + Mg -> R-OH}$.",
        "correct": false,
        "explanation": "Aucun lien avec la réaction."
      }
    ],
    "explanation": "Le magnésium s'insère dans la liaison carbone-halogène pour donner l'organomagnésien."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos d'une substitution nucléophile sur un dérivé halogéné :",
    "choices": [
      {
        "content": "Le nucléophile remplace X sur le carbone.",
        "correct": true,
        "explanation": "Bilan général."
      },
      {
        "content": "$\\ce{X^-}$ peut jouer le rôle de groupe partant dans le bilan.",
        "correct": true,
        "explanation": "La fiche écrit RX + Nu → R-Nu + X−."
      },
      {
        "content": "Le carbone portant X est le site attaqué.",
        "correct": true,
        "explanation": "C'est le centre électrophile."
      },
      {
        "content": "La réaction transforme toujours RX en alcane.",
        "correct": false,
        "explanation": "Le groupe installé dépend du nucléophile."
      }
    ],
    "explanation": "Le bilan général d'une SN est $\\ce{R-X + Nu -> R-Nu + X^-}$."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans le mécanisme SN1 présenté dans la fiche :",
    "choices": [
      {
        "content": "La réaction se déroule en deux temps.",
        "correct": true,
        "explanation": "Caractéristique explicitement donnée."
      },
      {
        "content": "Le départ de X conduit à un carbocation.",
        "correct": true,
        "explanation": "Intermédiaire du mécanisme."
      },
      {
        "content": "Le carbocation est plan.",
        "correct": true,
        "explanation": "Point clé de la stéréochimie."
      },
      {
        "content": "Le nucléophile attaque avant le départ de X dans une étape concertée.",
        "correct": false,
        "explanation": "Cela décrit plutôt la SN2."
      }
    ],
    "explanation": "SN1 passe par un carbocation plan formé après le départ du groupe partant."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi une SN1 sur un centre asymétrique conduit-elle à une racémisation dans le modèle du cours ?",
    "choices": [
      {
        "content": "Le carbocation intermédiaire est plan.",
        "correct": true,
        "explanation": "Il peut être attaqué sur ses deux faces."
      },
      {
        "content": "Le nucléophile peut arriver d'un côté ou de l'autre du plan.",
        "correct": true,
        "explanation": "La fiche retient des probabilités égales dans le modèle idéal."
      },
      {
        "content": "Les deux configurations peuvent donc être formées.",
        "correct": true,
        "explanation": "Origine du mélange racémique."
      },
      {
        "content": "Parce que le mécanisme impose une attaque d'un seul côté.",
        "correct": false,
        "explanation": "C'est la SN2 qui impose l'approche opposée au groupe partant."
      }
    ],
    "explanation": "Le caractère plan de l'intermédiaire SN1 explique la perte d'information stéréochimique dans le modèle simplifié."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Combien d'étapes élémentaires sont retenues pour une SN1 dans la fiche ?",
    "choices": [
      {
        "content": "Deux.",
        "correct": true,
        "explanation": "Formation du carbocation puis attaque nucléophile."
      },
      {
        "content": "Une.",
        "correct": false,
        "explanation": "Une étape concertée correspond à SN2."
      },
      {
        "content": "Trois obligatoirement.",
        "correct": false,
        "explanation": "Pas dans le modèle enseigné."
      },
      {
        "content": "Aucune.",
        "correct": false,
        "explanation": "Il s'agit bien d'un mécanisme réactionnel."
      }
    ],
    "explanation": "Le support oppose explicitement SN1 en deux temps et SN2 en un temps."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos d'une SN2 selon la fiche :",
    "choices": [
      {
        "content": "Elle se déroule en un temps.",
        "correct": true,
        "explanation": "Mécanisme concerté."
      },
      {
        "content": "Le nucléophile s'approche pendant que X est repoussé.",
        "correct": true,
        "explanation": "Description du support."
      },
      {
        "content": "Un carbocation plan libre n'est pas l'intermédiaire du mécanisme.",
        "correct": true,
        "explanation": "La réaction est concertée."
      },
      {
        "content": "Elle conduit à une racémisation par attaque des deux faces.",
        "correct": false,
        "explanation": "Le support associe SN2 à une inversion."
      }
    ],
    "explanation": "La SN2 couple formation de la liaison Nu-C et départ de X dans une seule étape."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Conséquences stéréochimiques d'une SN2 sur un centre asymétrique dans le modèle du cours :",
    "choices": [
      {
        "content": "Il y a inversion de configuration géométrique au centre attaqué.",
        "correct": true,
        "explanation": "Conséquence explicitement décrite."
      },
      {
        "content": "L'asymétrie est conservée.",
        "correct": true,
        "explanation": "Le centre reste chiral si les quatre substituants restent différents."
      },
      {
        "content": "Un seul produit stéréochimique est obtenu dans le modèle idéal.",
        "correct": true,
        "explanation": "Attaque imposée d'un seul côté."
      },
      {
        "content": "Le produit est un racémate 50/50.",
        "correct": false,
        "explanation": "C'est la conséquence associée à SN1."
      }
    ],
    "explanation": "La SN2 est stéréospécifique dans le modèle du support : inversion et produit optiquement pur."
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel mécanisme est qualifié de concerté dans la comparaison SN1/SN2 ?",
    "choices": [
      {
        "content": "SN2.",
        "correct": true,
        "explanation": "Une seule étape."
      },
      {
        "content": "SN1.",
        "correct": false,
        "explanation": "Deux étapes avec carbocation."
      },
      {
        "content": "Hydratation d'alcène uniquement.",
        "correct": false,
        "explanation": "La question concerne les substitutions."
      },
      {
        "content": "Formation du Grignard.",
        "correct": false,
        "explanation": "Ce n'est pas une SN1/SN2 dans ce cadre."
      }
    ],
    "explanation": "SN2 est le mécanisme concerté de la fiche."
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelle comparaison SN1/SN2 est correcte ?",
    "choices": [
      {
        "content": "SN1 : carbocation plan.",
        "correct": true,
        "explanation": "Intermédiaire."
      },
      {
        "content": "SN1 : racémisation dans le modèle idéal.",
        "correct": true,
        "explanation": "Attaque des deux faces."
      },
      {
        "content": "SN2 : inversion de configuration.",
        "correct": true,
        "explanation": "Attaque imposée par l'arrière dans le modèle."
      },
      {
        "content": "SN2 : carbocation plan obligatoire.",
        "correct": false,
        "explanation": "Pas d'intermédiaire carbocationique libre."
      }
    ],
    "explanation": "Les conséquences stéréochimiques constituent le contraste majeur de la section."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La fiche indique que plusieurs facteurs peuvent orienter le choix entre SN1 et SN2. Sont cités :",
    "choices": [
      {
        "content": "La nature du nucléophile.",
        "correct": true,
        "explanation": "Facteur explicitement mentionné."
      },
      {
        "content": "Le solvant.",
        "correct": true,
        "explanation": "Facteur explicitement mentionné."
      },
      {
        "content": "La nature des substituants autour du carbone réactif.",
        "correct": true,
        "explanation": "La fiche évoque la nature de B et C."
      },
      {
        "content": "La couleur du flacon.",
        "correct": false,
        "explanation": "Aucun rôle mécanistique."
      }
    ],
    "explanation": "La voie de substitution dépend du contexte réactionnel ; le support indique qu'on peut souvent chercher à privilégier SN2."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi la SN2 est-elle présentée comme souvent intéressante dans le support ?",
    "choices": [
      {
        "content": "Elle évite la racémisation dans le modèle idéal.",
        "correct": true,
        "explanation": "Le produit reste optiquement pur."
      },
      {
        "content": "Elle conserve l'asymétrie tout en inversant la configuration géométrique.",
        "correct": true,
        "explanation": "Conséquence stéréochimique."
      },
      {
        "content": "Elle permet un contrôle stéréochimique plus net.",
        "correct": true,
        "explanation": "C'est l'intérêt par rapport au mélange racémique SN1."
      },
      {
        "content": "Elle forme nécessairement un mélange racémique.",
        "correct": false,
        "explanation": "C'est précisément ce qu'elle évite."
      }
    ],
    "explanation": "Le contrôle de la stéréochimie explique l'intérêt de favoriser SN2 dans certains contextes de synthèse."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel intermédiaire plan caractérise la SN1 dans le modèle de la fiche ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "carbocation",
        "un carbocation",
        "carbocation plan",
        "un carbocation plan"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "La première étape de SN1 forme un carbocation plan après départ de X."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans un contexte de synthèse pharmaceutique, pourquoi la distinction SN1/SN2 peut-elle être importante ?",
    "choices": [
      {
        "content": "Une molécule chirale peut donner un mélange racémique par SN1 dans le modèle du cours.",
        "correct": true,
        "explanation": "Deux faces du carbocation sont attaquées."
      },
      {
        "content": "SN2 peut conduire à un produit stéréochimiquement unique avec inversion.",
        "correct": true,
        "explanation": "Contrôle plus précis."
      },
      {
        "content": "Deux stéréoisomères peuvent avoir des comportements biologiques différents.",
        "correct": true,
        "explanation": "Contexte cohérent avec le chapitre d'isomérie déjà étudié, sans être requis pour le mécanisme."
      },
      {
        "content": "La stéréochimie n'a aucun intérêt dès qu'un halogène est présent.",
        "correct": false,
        "explanation": "Le centre chiral peut être déterminant."
      }
    ],
    "explanation": "La substitution d'un intermédiaire chiral peut modifier la pureté stéréochimique du produit final."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans le modèle idéal de la fiche, une SN1 sur un substrat optiquement pur donne 50 % d'attaque sur chaque face du carbocation. Quel est alors l'excès énantiomérique attendu, en pourcentage ?",
    "answer": {
      "type": "number",
      "value": 0,
      "tolerance": 0
    },
    "explanation": "Un mélange 50/50 est racémique et son excès énantiomérique est nul."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On part d'un dérivé halogéné $\\ce{R-X}$. Quelles voies du chapitre peuvent être envisagées ?",
    "choices": [
      {
        "content": "Réaction avec Mg pour former $\\ce{RMgX}$.",
        "correct": true,
        "explanation": "Voie organomagnésienne."
      },
      {
        "content": "Substitution par un nucléophile pour former R-Nu.",
        "correct": true,
        "explanation": "Voie SN."
      },
      {
        "content": "Utilisation comme partenaire d'alkylation d'une amine.",
        "correct": true,
        "explanation": "Réactivité étudiée dans la section amines."
      },
      {
        "content": "Conversion automatique en alcool tertiaire sans autre réactif.",
        "correct": false,
        "explanation": "Aucune transformation automatique de ce type."
      }
    ],
    "explanation": "RX est un carrefour de synthèse : organomagnésien, substitution ou alkylation d'un nucléophile comme une amine."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Le schéma simplifié ci-dessous représente une SN1 en trois vignettes. Cliquez sur l'espèce intermédiaire plane qui explique la racémisation.",
    "image": {
      "src": "/images/training/ue14/derives-monofonctionnels/sn1-carbocation-plan-qzone.svg",
      "alt": "Schéma original d'une SN1 montrant substrat halogéné, carbocation plan et deux produits issus des deux faces",
      "width": 1200,
      "height": 520
    },
    "expectedZones": [
      {
        "id": "carbocation-plan",
        "label": "Carbocation plan intermédiaire",
        "x": 0.5,
        "y": 0.5,
        "tolerance": 0.1
      }
    ],
    "explanation": "La SN1 passe par un carbocation plan après départ de X. Le nucléophile peut ensuite attaquer les deux faces, ce qui explique la racémisation dans le modèle idéal du cours."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé halogéné chiral réagit par SN1. Quelles propositions sont exactes dans le modèle du cours ?",
    "choices": [
      {
        "content": "Le groupe partant X quitte le carbone avant l'attaque du nucléophile.",
        "correct": true,
        "explanation": "Première étape."
      },
      {
        "content": "Un carbocation plan est formé.",
        "correct": true,
        "explanation": "Intermédiaire."
      },
      {
        "content": "Le nucléophile peut attaquer les deux faces.",
        "correct": true,
        "explanation": "Origine du racémate."
      },
      {
        "content": "La configuration initiale est conservée à 100 %.",
        "correct": false,
        "explanation": "La racémisation efface la pureté stéréochimique."
      }
    ],
    "explanation": "La SN1 est un mécanisme séquentiel associé à une perte de contrôle stéréochimique."
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Le même dérivé halogéné chiral réagit par SN2. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'attaque nucléophile et le départ de X sont couplés dans une seule étape.",
        "correct": true,
        "explanation": "Mécanisme concerté."
      },
      {
        "content": "Un carbocation plan libre n'est pas formé.",
        "correct": true,
        "explanation": "Différence avec SN1."
      },
      {
        "content": "Le produit subit une inversion de configuration géométrique.",
        "correct": true,
        "explanation": "Conséquence stéréochimique."
      },
      {
        "content": "Le produit attendu est un racémate dans le modèle idéal.",
        "correct": false,
        "explanation": "Un seul produit stéréochimique est obtenu."
      }
    ],
    "explanation": "SN2 conserve l'asymétrie tout en inversant l'arrangement spatial au centre réactif."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare la conversion d'un alcool en RX puis la conversion de RX en RMgX. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La première étape remplace OH par un halogène.",
        "correct": true,
        "explanation": "Agent halogénant."
      },
      {
        "content": "La seconde utilise Mg.",
        "correct": true,
        "explanation": "Formation du Grignard."
      },
      {
        "content": "Le carbone, électrophile dans RX, devient nucléophile dans RMgX dans le modèle du cours.",
        "correct": true,
        "explanation": "Renversement de polarité."
      },
      {
        "content": "Les deux étapes transforment le carbone en carbonyle.",
        "correct": false,
        "explanation": "Aucun C=O n'est créé."
      }
    ],
    "explanation": "Cette séquence illustre le changement profond de réactivité du carbone porteur du groupe fonctionnel."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un organomagnésien issu d'un dérivé halogéné est ensuite mis en présence d'une cétone. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone du Grignard agit comme nucléophile.",
        "correct": true,
        "explanation": "Il attaque le carbone électrophile du carbonyle."
      },
      {
        "content": "Une nouvelle liaison C-C est formée.",
        "correct": true,
        "explanation": "Principe de la réaction."
      },
      {
        "content": "Après hydrolyse, un alcool tertiaire est obtenu.",
        "correct": true,
        "explanation": "Bilan du chapitre."
      },
      {
        "content": "Le produit final reste le dérivé halogéné de départ.",
        "correct": false,
        "explanation": "La fonction a été profondément transformée."
      }
    ],
    "explanation": "La chimie de RX peut donc être reliée à la préparation d'alcools via l'intermédiaire organomagnésien."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelle séquence permet de passer conceptuellement d'un alcène à un alcool tertiaire en utilisant des transformations du chapitre ?",
    "choices": [
      {
        "content": "Alcène + HX → dérivé halogéné.",
        "correct": true,
        "explanation": "Préparation de RX."
      },
      {
        "content": "RX + Mg → organomagnésien.",
        "correct": true,
        "explanation": "Formation du Grignard."
      },
      {
        "content": "Organomagnésien + cétone, puis hydrolyse → alcool tertiaire.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Chaque étape conserve nécessairement le même nombre de carbones.",
        "correct": false,
        "explanation": "L'addition du Grignard sur une cétone allonge le squelette."
      }
    ],
    "explanation": "La séquence croise préparation de RX, Grignard et préparation des alcools tertiaires."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la pureté optique après substitution dans le modèle du support :",
    "choices": [
      {
        "content": "SN1 conduit à un mélange racémique à partir d'un centre chiral idéalement symétrique dans ses deux faces.",
        "correct": true,
        "explanation": "Modèle du cours."
      },
      {
        "content": "SN2 conduit à un seul produit avec inversion.",
        "correct": true,
        "explanation": "Modèle du cours."
      },
      {
        "content": "SN2 est associée à un produit optiquement pur à 100 % dans la simplification enseignée.",
        "correct": true,
        "explanation": "Formulation de la fiche."
      },
      {
        "content": "SN1 conserve toujours un ee de 100 %.",
        "correct": false,
        "explanation": "Elle racémise."
      }
    ],
    "explanation": "Le chapitre rattache directement le mécanisme de substitution à la stéréochimie du produit."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Pour distinguer SN1 et SN2 à partir d'une description de mécanisme :",
    "choices": [
      {
        "content": "Chercher un carbocation intermédiaire oriente vers SN1.",
        "correct": true,
        "explanation": "Signature de SN1."
      },
      {
        "content": "Chercher une étape concertée oriente vers SN2.",
        "correct": true,
        "explanation": "Signature de SN2."
      },
      {
        "content": "Une racémisation oriente vers SN1 dans le modèle du cours.",
        "correct": true,
        "explanation": "Conséquence du carbocation plan."
      },
      {
        "content": "Une inversion stéréochimique unique oriente vers SN2.",
        "correct": true,
        "explanation": "Conséquence de l'attaque imposée."
      }
    ],
    "explanation": "Mécanisme et stéréochimie se répondent et permettent d'identifier la voie réactionnelle."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé halogéné optiquement pur donne après substitution un mélange 50/50 de deux énantiomères. Quelle interprétation est cohérente avec le cours ?",
    "choices": [
      {
        "content": "Une voie SN1 est compatible.",
        "correct": true,
        "explanation": "Carbocation plan et attaque des deux faces."
      },
      {
        "content": "Une racémisation a eu lieu.",
        "correct": true,
        "explanation": "50/50."
      },
      {
        "content": "Une voie SN2 idéale seule expliquerait ce résultat.",
        "correct": false,
        "explanation": "SN2 donne un produit inversé unique."
      },
      {
        "content": "L'excès énantiomérique final est nul.",
        "correct": true,
        "explanation": "Mélange racémique."
      }
    ],
    "explanation": "La composition du produit peut être reliée au mécanisme dans le modèle simplifié enseigné."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé halogéné optiquement pur donne après substitution un seul stéréoisomère avec inversion. Quelle interprétation est cohérente ?",
    "choices": [
      {
        "content": "Une voie SN2 est compatible.",
        "correct": true,
        "explanation": "Signature stéréochimique."
      },
      {
        "content": "Le mécanisme peut être concerté.",
        "correct": true,
        "explanation": "Une étape."
      },
      {
        "content": "Un carbocation plan libre est indispensable.",
        "correct": false,
        "explanation": "Ce serait SN1."
      },
      {
        "content": "L'asymétrie du centre peut être conservée malgré l'inversion.",
        "correct": true,
        "explanation": "Les quatre substituants restent différents."
      }
    ],
    "explanation": "L'inversion unique est le repère essentiel de la SN2 dans la fiche."
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "RX + Mg → RMgX.",
        "correct": true,
        "explanation": "Grignard."
      },
      {
        "content": "Le carbone de RX est décrit comme électrophile.",
        "correct": true,
        "explanation": "Avant Mg."
      },
      {
        "content": "Le carbone de RMgX est décrit comme nucléophile.",
        "correct": true,
        "explanation": "Après Mg."
      },
      {
        "content": "SN1 passe par un carbocation plan.",
        "correct": true,
        "explanation": "Deux étapes."
      },
      {
        "content": "SN2 est concertée et conduit à une inversion.",
        "correct": true,
        "explanation": "Une étape."
      },
      {
        "content": "SN1 est concertée.",
        "correct": false,
        "explanation": "Deux étapes."
      },
      {
        "content": "SN2 donne un racémate dans le modèle idéal.",
        "correct": false,
        "explanation": "Produit unique inversé."
      },
      {
        "content": "RMgX est un électrophile carboné dans le modèle.",
        "correct": false,
        "explanation": "Nucléophile."
      },
      {
        "content": "SN1 conserve toujours l'ee initial à 100 %.",
        "correct": false,
        "explanation": "Racémisation."
      },
      {
        "content": "Le carbone de RX est déjà chargé négativement comme celui du Grignard.",
        "correct": false,
        "explanation": "Ce caractère apparaît après formation de RMgX."
      }
    ],
    "explanation": "Cette question rassemble polarité de RX/RMgX et mécanismes SN1/SN2."
  }
];
