import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.4 – Section D – Dérivés halogénés, organomagnésiens et substitutions nucléophiles
 */

export const UE14_CH8_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des dérivés halogénés:",
    "choices": [
      {
        "content": "Ils sont décrits comme des produits généralement très toxiques.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Ils sont tous des alcools.",
        "correct": false,
        "explanation": "Le groupe caractéristique est C-X, pas C-OH."
      },
      {
        "content": "Un dérivé halogéné se forme nécessairement par réduction d’un aldéhyde avec $\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "Cette réduction conduit à un alcool et n’introduit pas d’halogène."
      },
      {
        "content": "Ils sont notés de façon générale $\\ce{R-X}$.",
        "correct": true,
        "explanation": "R est un radical et X un halogène."
      },
      {
        "content": "X représente un halogène.",
        "correct": true,
        "explanation": "Par définition, x représente un halogène."
      }
    ],
    "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une voie de préparation d'un dérivé halogéné est l'addition de $\\ce{HX}$ sur un alcène. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "H et X s'ajoutent de part et d'autre de l'ancienne double liaison.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "La double liaison n’est pas consommée.",
        "correct": false,
        "explanation": "La relation correcte est: « La double liaison est consommée ». La négation proposée est donc fausse."
      },
      {
        "content": "Le produit appartient à la famille RX.",
        "correct": true,
        "explanation": "L’addition de $\\ce{HX}$ sur un alcène forme un dérivé halogéné de type $\\ce{R-X}$."
      },
      {
        "content": "Le magnésium est obligatoirement présent dans cette première étape.",
        "correct": false,
        "explanation": "Mg intervient ensuite pour former un organomagnésien."
      },
      {
        "content": "Dans un dérivé halogéné $\\ce{R-X}$, le carbone lié à l’halogène présente un caractère électrophile.",
        "correct": true,
        "explanation": "La polarisation de la liaison carbone-halogène rend ce carbone sensible à l’attaque d’un nucléophile."
      }
    ],
    "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une autre voie de préparation d'un dérivé halogéné part d'un alcool. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le produit est nécessairement une amide.",
        "correct": false,
        "explanation": "Il s'agit d'un dérivé halogéné."
      },
      {
        "content": "Un dérivé halogéné se forme nécessairement par réduction d’un aldéhyde avec $\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "Cette réduction conduit à un alcool et n’introduit pas d’halogène."
      },
      {
        "content": "Un agent halogénant est utilisé.",
        "correct": true,
        "explanation": "La conversion d’un alcool en dérivé halogéné nécessite un agent capable de remplacer le groupe $\\ce{-OH}$ par un halogène."
      },
      {
        "content": "La fonction OH est remplacée par X.",
        "correct": true,
        "explanation": "Bilan simplifié alcool → RX."
      },
      {
        "content": "Le produit peut être un chlorure ou un bromure selon l'agent.",
        "correct": true,
        "explanation": "Le choix de l’agent halogénant détermine si le produit est notamment un dérivé chloré ou bromé."
      }
    ],
    "explanation": "Il s'agit d'un dérivé halogéné."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les agents halogénants cités :",
    "choices": [
      {
        "content": "$\\ce{SOCl2}$ est cité pour obtenir un dérivé chloré.",
        "correct": true,
        "explanation": "$\\ce{SOCl2}$ permet de remplacer le groupe hydroxyle d’un alcool par un chlore."
      },
      {
        "content": "$\\ce{POCl3}$ est cité pour obtenir un dérivé chloré.",
        "correct": true,
        "explanation": "$\\ce{POCl3}$ fait partie des agents chlorants retenus pour préparer un dérivé chloré."
      },
      {
        "content": "L’exemple retenu est aussi $\\ce{BBr5}$ pour obtenir un dérivé bromé.",
        "correct": true,
        "explanation": "On reprend ici strictement l'agent indiqué local."
      },
      {
        "content": "Un dérivé halogéné se forme nécessairement par réduction d’un aldéhyde avec $\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "Cette réduction conduit à un alcool et n’introduit pas d’halogène."
      },
      {
        "content": "$\\ce{PCl5}$ est cité pour obtenir un dérivé chloré.",
        "correct": true,
        "explanation": "$\\ce{PCl5}$ fait partie des agents permettant de convertir un alcool en dérivé chloré."
      }
    ],
    "explanation": "$\\ce{PCl5}$ fait partie des agents permettant de convertir un alcool en dérivé chloré. $\\ce{SOCl2}$ permet de remplacer le groupe hydroxyle d’un alcool par un chlore."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la préparation d'un organomagnésien $\\ce{RMgX}$:",
    "choices": [
      {
        "content": "Un organomagnésien réagit avec un ester une seule fois avant l’alcool tertiaire final.",
        "correct": false,
        "explanation": "Le cas de l’ester nécessite deux additions du même organomagnésien dans le modèle étudié."
      },
      {
        "content": "Elle part d'un dérivé halogéné $\\ce{R-X}$.",
        "correct": true,
        "explanation": "La préparation d’un organomagnésien commence à partir d’un dérivé halogéné $\\ce{R-X}$."
      },
      {
        "content": "Le magnésium est ajouté.",
        "correct": true,
        "explanation": "Bilan: RX + Mg → RMgX."
      },
      {
        "content": "Le produit est appelé réactif de Grignard.",
        "correct": true,
        "explanation": "Le composé $\\ce{RMgX}$ obtenu est appelé réactif de Grignard ou organomagnésien."
      },
      {
        "content": "Le carbone du radical R devient plus nucléophile dans le modèle étudié.",
        "correct": true,
        "explanation": "L’insertion du magnésium inverse la polarité du carbone : électrophile dans $\\ce{R-X}$, il devient nucléophile dans $\\ce{RMgX}$."
      }
    ],
    "explanation": "Le cas de l’ester nécessite deux additions du même organomagnésien dans le modèle étudié."
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans $\\ce{RCH2-X}$ avant réaction avec Mg, le carbone porteur de X est décrit comme:",
    "choices": [
      {
        "content": "Déjà chargé négativement comme dans RMgX.",
        "correct": false,
        "explanation": "La charge négative est attribuée après formation du Grignard."
      },
      {
        "content": "Nécessairement un carbocation libre.",
        "correct": false,
        "explanation": "Un carbocation plan est l’intermédiaire caractéristique de la SN1 et peut être attaqué par les deux faces."
      },
      {
        "content": "Une SN1 passe par un carbocation plan dans le modèle étudié.",
        "correct": true,
        "explanation": "Le départ du groupe partant précède l’attaque du nucléophile, ce qui crée un intermédiaire carbocationique plan."
      },
      {
        "content": "Électrophile.",
        "correct": true,
        "explanation": "La polarisation C-X lui confère ce caractère dans le modèle étudié."
      },
      {
        "content": "Capable de réagir avec un nucléophile.",
        "correct": true,
        "explanation": "Conséquence de son caractère électrophile."
      }
    ],
    "explanation": "La charge négative est attribuée après formation du Grignard."
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Après formation de $\\ce{RMgX}$, le carbone du fragment R est décrit comme:",
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
        "explanation": "Après insertion du magnésium, le carbone du fragment $\ce{R}$ acquiert un caractère nucléophile ; il n’est plus décrit comme électrophile."
      },
      {
        "content": "Un dérivé halogéné se forme nécessairement par réduction d’un aldéhyde avec $\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "Cette réduction conduit à un alcool et n’introduit pas d’halogène."
      }
    ],
    "explanation": "Il porte un caractère négatif."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les organomagnésiens peuvent réagir avec:",
    "choices": [
      {
        "content": "Tous les composés possédant un carbone électrophile dans le modèle étudié.",
        "correct": true,
        "explanation": "Un organomagnésien réagit avec un centre carboné électrophile, notamment celui d’un groupe carbonyle."
      },
      {
        "content": "La réduction d’une cétone par $\\ce{NaBH4}$ conduit à un alcool tertiaire.",
        "correct": false,
        "explanation": "une cétone réduite par $\\ce{NaBH4}$ donne un alcool secondaire."
      },
      {
        "content": "Des aldéhydes.",
        "correct": true,
        "explanation": "Le carbone carbonylé d’un aldéhyde est électrophile et peut être attaqué par le carbone nucléophile d’un organomagnésien."
      },
      {
        "content": "Des cétones.",
        "correct": true,
        "explanation": "Le carbone carbonylé d’une cétone est électrophile et peut être attaqué par un organomagnésien."
      },
      {
        "content": "Des esters.",
        "correct": true,
        "explanation": "La polarisation du groupe carbonyle rend le carbone carbonylé électrophile et donc sensible à l’attaque d’un nucléophile."
      }
    ],
    "explanation": "Un organomagnésien réagit avec un centre carboné électrophile, notamment celui d’un groupe carbonyle."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel bilan résume la formation d'un réactif de Grignard?",
    "choices": [
      {
        "content": "Alcool primaire.",
        "correct": false,
        "explanation": "Une cétone ou un ester traité par un organomagnésien ne conduit pas à un alcool primaire dans les bilans étudiés."
      },
      {
        "content": "$\\ce{R-X + Mg -> RMgX}$.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
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
    "explanation": "Une cétone ou un ester traité par un organomagnésien ne conduit pas à un alcool primaire dans les bilans étudiés."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos d'une substitution nucléophile sur un dérivé halogéné:",
    "choices": [
      {
        "content": "Dans un dérivé halogéné $\\ce{R-X}$, le carbone lié à l’halogène présente un caractère électrophile.",
        "correct": true,
        "explanation": "La polarisation de la liaison carbone-halogène rend ce carbone sensible à l’attaque d’un nucléophile."
      },
      {
        "content": "Le nucléophile remplace X sur le carbone.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "$\\ce{X^-}$ ne peut pas jouer le rôle de groupe partant dans le bilan.",
        "correct": false,
        "explanation": "La relation correcte est: « $\\ce{X^-}$ peut jouer le rôle de groupe partant dans le bilan ». La négation proposée est donc fausse."
      },
      {
        "content": "Le carbone portant X est le site attaqué.",
        "correct": true,
        "explanation": "La polarisation du groupe carbonyle rend le carbone carbonylé électrophile et donc sensible à l’attaque d’un nucléophile."
      },
      {
        "content": "La réaction transforme toujours RX en alcane.",
        "correct": false,
        "explanation": "Le groupe installé dépend du nucléophile."
      }
    ],
    "explanation": "La polarisation de la liaison carbone-halogène rend ce carbone sensible à l’attaque d’un nucléophile."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans le mécanisme SN1 présenté:",
    "choices": [
      {
        "content": "Le carbocation est plan.",
        "correct": true,
        "explanation": "Point clé de la stéréochimie."
      },
      {
        "content": "Le nucléophile attaque avant le départ de X dans une étape concertée.",
        "correct": false,
        "explanation": "Cela décrit plutôt la SN2."
      },
      {
        "content": "Une SN1 passe par un carbocation plan dans le modèle étudié.",
        "correct": true,
        "explanation": "Le départ du groupe partant précède l’attaque du nucléophile, ce qui crée un intermédiaire carbocationique plan."
      },
      {
        "content": "La réaction se déroule en deux temps.",
        "correct": true,
        "explanation": "La SN1 se déroule en deux étapes : départ du groupe partant puis attaque du nucléophile."
      },
      {
        "content": "Le départ de X conduit à un carbocation.",
        "correct": true,
        "explanation": "Le départ du groupe partant forme le carbocation intermédiaire caractéristique de la SN1."
      }
    ],
    "explanation": "Point clé de la stéréochimie."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi une SN1 sur un centre asymétrique conduit-elle à une racémisation dans le modèle étudié?",
    "choices": [
      {
        "content": "Le carbocation intermédiaire n’est pas plan.",
        "correct": false,
        "explanation": "La relation correcte est: « Le carbocation intermédiaire est plan ». La négation proposée est donc fausse."
      },
      {
        "content": "Le nucléophile peut arriver d'un côté ou de l'autre du plan.",
        "correct": true,
        "explanation": "Le carbocation plan peut être attaqué par les deux faces dans le modèle idéal."
      },
      {
        "content": "Les deux configurations peuvent donc être formées.",
        "correct": true,
        "explanation": "L’attaque possible sur les deux faces du carbocation permet de former les deux configurations et conduit à la racémisation dans le modèle idéal."
      },
      {
        "content": "Parce que le mécanisme impose une attaque d'un seul côté.",
        "correct": false,
        "explanation": "C'est la SN2 qui impose l'approche opposée au groupe partant."
      },
      {
        "content": "Une SN1 est décrite comme un mécanisme concerté en une seule étape.",
        "correct": false,
        "explanation": "Le mécanisme SN1 est présenté en deux étapes, contrairement à la SN2 concertée."
      }
    ],
    "explanation": "La relation correcte est: « Le carbocation intermédiaire est plan ». La négation proposée est donc fausse."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Combien d'étapes élémentaires sont retenues pour une SN1?",
    "choices": [
      {
        "content": "Une seule étape concertée.",
        "correct": false,
        "explanation": "Cette description correspond à la SN2, pas à la SN1."
      },
      {
        "content": "Une.",
        "correct": false,
        "explanation": "Une étape concertée correspond à SN2."
      },
      {
        "content": "Deux.",
        "correct": true,
        "explanation": "Formation du carbocation puis attaque nucléophile."
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
    "explanation": "Cette description correspond à la SN2, pas à la SN1."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos d'une SN2:",
    "choices": [
      {
        "content": "Le nucléophile s'approche pendant que X n’est pas repoussé.",
        "correct": false,
        "explanation": "La relation correcte est: « Le nucléophile s'approche pendant que X est repoussé ». La négation proposée est donc fausse."
      },
      {
        "content": "Un carbocation plan libre n'est pas l'intermédiaire du mécanisme.",
        "correct": true,
        "explanation": "Un carbocation plan est l’intermédiaire caractéristique de la SN1 et peut être attaqué par les deux faces."
      },
      {
        "content": "Elle conduit à une racémisation par attaque des deux faces.",
        "correct": false,
        "explanation": "Une SN2 conduit à une inversion de configuration ; la racémisation par attaque des deux faces caractérise la SN1 dans le modèle idéal."
      },
      {
        "content": "Une SN1 passe par un carbocation plan dans le modèle étudié.",
        "correct": true,
        "explanation": "Le départ du groupe partant précède l’attaque du nucléophile, ce qui crée un intermédiaire carbocationique plan."
      },
      {
        "content": "Elle se déroule en un temps.",
        "correct": true,
        "explanation": "La SN2 est concertée : l’attaque nucléophile et le départ du groupe partant ont lieu dans une même étape."
      }
    ],
    "explanation": "La relation correcte est: « Le nucléophile s'approche pendant que X est repoussé ». La négation proposée est donc fausse."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Conséquences stéréochimiques d'une SN2 sur un centre asymétrique dans le modèle étudié:",
    "choices": [
      {
        "content": "Une SN2 passe obligatoirement par un carbocation plan et donne un racémate.",
        "correct": false,
        "explanation": "Le carbocation plan et la racémisation caractérisent ici la SN1."
      },
      {
        "content": "Il y a inversion de configuration géométrique au centre attaqué.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
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
    "explanation": "Le carbocation plan et la racémisation caractérisent ici la SN1."
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel mécanisme est qualifié de concerté dans la comparaison SN1/SN2?",
    "choices": [
      {
        "content": "Formation du Grignard.",
        "correct": false,
        "explanation": "Ce n'est pas une SN1/SN2 dans ce cadre."
      },
      {
        "content": "$\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "Le borohydrure est utilisé comme réducteur des composés carbonylés, pas comme réactif d’hydratation d’un alcène."
      },
      {
        "content": "SN1.",
        "correct": false,
        "explanation": "Une SN1 comporte deux étapes avec formation d’un carbocation ; elle n’est donc pas concertée."
      },
      {
        "content": "SN2.",
        "correct": true,
        "explanation": "La SN2 est concertée : l’attaque nucléophile et le départ du groupe partant ont lieu dans la même étape."
      },
      {
        "content": "Hydratation d'alcène uniquement.",
        "correct": false,
        "explanation": "La question concerne les substitutions."
      }
    ],
    "explanation": "Ce n'est pas une SN1/SN2 dans ce cadre."
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelle comparaison SN1/SN2 est correcte?",
    "choices": [
      {
        "content": "SN1: carbocation plan.",
        "correct": true,
        "explanation": "La formation d’un carbocation plan est le repère mécanistique caractéristique de la SN1."
      },
      {
        "content": "SN1: racémisation dans le modèle idéal.",
        "correct": true,
        "explanation": "Le carbocation plan peut être attaqué par ses deux faces, ce qui explique la racémisation dans le modèle idéal."
      },
      {
        "content": "SN2: inversion de configuration.",
        "correct": true,
        "explanation": "Attaque imposée par l'arrière dans le modèle."
      },
      {
        "content": "SN2: carbocation plan obligatoire.",
        "correct": false,
        "explanation": "La SN2 est concertée et ne passe pas par un carbocation libre."
      },
      {
        "content": "Une SN1 est décrite comme un mécanisme concerté en une seule étape.",
        "correct": false,
        "explanation": "Le mécanisme SN1 est présenté en deux étapes, contrairement à la SN2 concertée."
      }
    ],
    "explanation": "La formation d’un carbocation plan est le repère mécanistique caractéristique de la SN1."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Plusieurs facteurs peuvent orienter le choix entre SN1 et SN2. Lesquels sont à prendre en compte ?",
    "choices": [
      {
        "content": "La couleur du flacon.",
        "correct": false,
        "explanation": "La proposition est fausse : la nature du nucléophile."
      },
      {
        "content": "Une SN1 passe par un carbocation plan dans le modèle étudié.",
        "correct": true,
        "explanation": "Le départ du groupe partant précède l’attaque du nucléophile, ce qui crée un intermédiaire carbocationique plan."
      },
      {
        "content": "La nature du nucléophile.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Le solvant.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "La nature des substituants autour du carbone réactif.",
        "correct": true,
        "explanation": "La substitution autour du carbone réactif modifie son encombrement et peut orienter le choix entre SN1 et SN2."
      }
    ],
    "explanation": "Le choix entre SN1 et SN2 dépend notamment de la nature du nucléophile, du solvant et de la substitution autour du carbone réactif."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi la SN2 est-elle présentée comme souvent intéressante?",
    "choices": [
      {
        "content": "La SN2 conserve un centre stéréogène tout en inversant sa configuration.",
        "correct": true,
        "explanation": "L’attaque arrière en SN2 inverse la configuration tout en conservant un centre stéréogène si les quatre substituants restent différents."
      },
      {
        "content": "La SN2 permet un contrôle stéréochimique plus net.",
        "correct": true,
        "explanation": "C'est l'intérêt par rapport au mélange racémique SN1."
      },
      {
        "content": "La SN2 forme nécessairement un mélange racémique.",
        "correct": false,
        "explanation": "C'est précisément ce qu'elle évite."
      },
      {
        "content": "Une SN2 passe obligatoirement par un carbocation plan et donne un racémate.",
        "correct": false,
        "explanation": "Le carbocation plan et la racémisation caractérisent ici la SN1."
      },
      {
        "content": "La SN2 évite la racémisation dans le modèle idéal.",
        "correct": true,
        "explanation": "Le produit reste optiquement pur."
      }
    ],
    "explanation": "L’attaque arrière en SN2 inverse la configuration tout en conservant un centre stéréogène si les quatre substituants restent différents."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel intermédiaire plan caractérise la SN1 dans le modèle?",
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
    "question": "Dans un contexte de synthèse pharmaceutique, pourquoi la distinction SN1/SN2 peut-elle être importante?",
    "choices": [
      {
        "content": "Deux stéréoisomères peuvent avoir des comportements biologiques différents.",
        "correct": true,
        "explanation": "La stéréochimie peut modifier le comportement biologique d’une molécule ; ce point complète l’analyse du mécanisme de substitution."
      },
      {
        "content": "La stéréochimie n'a aucun intérêt dès qu'un halogène est présent.",
        "correct": false,
        "explanation": "Le centre chiral peut être déterminant."
      },
      {
        "content": "Une SN2 passe obligatoirement par un carbocation plan et donne un racémate.",
        "correct": false,
        "explanation": "Le carbocation plan et la racémisation caractérisent ici la SN1."
      },
      {
        "content": "Une molécule chirale peut donner un mélange racémique par SN1 dans le modèle étudié.",
        "correct": true,
        "explanation": "Deux faces du carbocation sont attaquées."
      },
      {
        "content": "SN2 peut conduire à un produit stéréochimiquement unique avec inversion.",
        "correct": true,
        "explanation": "L’attaque arrière du nucléophile en SN2 entraîne une inversion de configuration au centre réactif."
      }
    ],
    "explanation": "La stéréochimie peut modifier le comportement biologique d’une molécule ; ce point complète l’analyse du mécanisme de substitution."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans le modèle idéal, une SN1 sur un substrat optiquement pur donne 50 % d'attaque sur chaque face du carbocation. Quel est alors l'excès énantiomérique attendu, en pourcentage?",
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
    "question": "On part d’un dérivé halogéné $\\ce{R-X}$. Quelles transformations peuvent être envisagées ?",
    "choices": [
      {
        "content": "Conversion automatique en alcool tertiaire sans autre réactif.",
        "correct": false,
        "explanation": "Aucune transformation automatique de ce type."
      },
      {
        "content": "Un dérivé halogéné se forme nécessairement par réduction d’un aldéhyde avec $\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "Cette réduction conduit à un alcool et n’introduit pas d’halogène."
      },
      {
        "content": "Réaction avec Mg pour former $\\ce{RMgX}$.",
        "correct": true,
        "explanation": "L’addition d’un organomagnésien sur le carbonyle permet d’obtenir le produit correspondant après hydrolyse."
      },
      {
        "content": "Substitution par un nucléophile pour former R-Nu.",
        "correct": true,
        "explanation": "Un nucléophile attaque le carbone électrophile de $\\ce{R-X}$ et remplace le groupe partant pour former $\\ce{R-Nu}$."
      },
      {
        "content": "Utilisation comme partenaire d'alkylation d'une amine.",
        "correct": true,
        "explanation": "Un dérivé halogéné peut subir une alkylation par une amine nucléophile."
      }
    ],
    "explanation": "Aucune transformation automatique de ce type."
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
    "explanation": "La SN1 passe par un carbocation plan après départ de X. Le nucléophile peut ensuite attaquer les deux faces, ce qui explique la racémisation dans le modèle idéal."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé halogéné chiral réagit par SN1. Quelles propositions sont exactes dans le modèle étudié?",
    "choices": [
      {
        "content": "Une SN1 passe par un carbocation plan dans le modèle étudié.",
        "correct": true,
        "explanation": "Le départ du groupe partant précède l’attaque du nucléophile, ce qui crée un intermédiaire carbocationique plan."
      },
      {
        "content": "Le groupe partant X quitte le carbone avant l'attaque du nucléophile.",
        "correct": true,
        "explanation": "En SN1, le groupe partant quitte d’abord le carbone, ce qui permet la formation du carbocation intermédiaire."
      },
      {
        "content": "Un carbocation plan est formé.",
        "correct": true,
        "explanation": "La SN1 passe par un carbocation plan avant l’attaque du nucléophile."
      },
      {
        "content": "Le nucléophile peut attaquer les deux faces.",
        "correct": true,
        "explanation": "Le carbocation plan peut être attaqué par les deux faces, ce qui explique la racémisation dans le modèle idéal."
      },
      {
        "content": "La configuration initiale est conservée à 100 %.",
        "correct": false,
        "explanation": "La racémisation efface la pureté stéréochimique."
      }
    ],
    "explanation": "Le départ du groupe partant précède l’attaque du nucléophile, ce qui crée un intermédiaire carbocationique plan."
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Le même dérivé halogéné chiral réagit par SN2. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le produit subit une inversion de configuration géométrique.",
        "correct": true,
        "explanation": "L’attaque arrière caractéristique de la SN2 entraîne une inversion de configuration au centre réactif."
      },
      {
        "content": "Le produit attendu est un racémate dans le modèle idéal.",
        "correct": false,
        "explanation": "Un seul produit stéréochimique est obtenu."
      },
      {
        "content": "Une SN2 sur un centre asymétrique conduit à une inversion de configuration dans le modèle étudié.",
        "correct": true,
        "explanation": "L’attaque par la face opposée au groupe partant entraîne l’inversion géométrique décrite."
      },
      {
        "content": "L'attaque nucléophile et le départ de X ne sont pas couplés dans une seule étape.",
        "correct": false,
        "explanation": "La relation correcte est: « L'attaque nucléophile et le départ de X sont couplés dans une seule étape ». La négation proposée est donc fausse."
      },
      {
        "content": "Un carbocation plan libre n'est pas formé.",
        "correct": true,
        "explanation": "La SN2 est concertée et ne passe donc pas par un carbocation libre, contrairement à la SN1."
      }
    ],
    "explanation": "L’attaque arrière caractéristique de la SN2 entraîne une inversion de configuration au centre réactif."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare la conversion d'un alcool en RX puis la conversion de RX en RMgX. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "La première étape remplace OH par un halogène.",
        "correct": true,
        "explanation": "La première transformation remplace le groupe $\\ce{-OH}$ de l’alcool par un halogène pour former $\\ce{R-X}$."
      },
      {
        "content": "La seconde utilise Mg.",
        "correct": true,
        "explanation": "L’étape suivante fait réagir $\\ce{R-X}$ avec le magnésium pour former l’organomagnésien $\\ce{RMgX}$."
      },
      {
        "content": "Le carbone, électrophile dans RX, devient nucléophile dans RMgX dans le modèle étudié.",
        "correct": true,
        "explanation": "La formation de $\\ce{RMgX}$ transforme le carbone initialement électrophile de $\\ce{R-X}$ en centre nucléophile."
      },
      {
        "content": "Les deux étapes transforment le carbone en carbonyle.",
        "correct": false,
        "explanation": "Ni l’halogénation de l’alcool ni la formation de $\\ce{RMgX}$ ne crée de groupe carbonyle."
      },
      {
        "content": "Un dérivé halogéné se forme nécessairement par réduction d’un aldéhyde avec $\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "Cette réduction conduit à un alcool et n’introduit pas d’halogène."
      }
    ],
    "explanation": "La formation de $\\ce{RMgX}$ transforme le carbone initialement électrophile de $\\ce{R-X}$ en centre nucléophile."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un organomagnésien issu d'un dérivé halogéné est ensuite mis en présence d'une cétone. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le produit final reste le dérivé halogéné de départ.",
        "correct": false,
        "explanation": "La fonction a été profondément transformée."
      },
      {
        "content": "Un organomagnésien réagit avec un ester une seule fois avant l’alcool tertiaire final.",
        "correct": false,
        "explanation": "Le cas de l’ester nécessite deux additions du même organomagnésien dans le modèle étudié."
      },
      {
        "content": "Le carbone du Grignard agit comme nucléophile.",
        "correct": true,
        "explanation": "Il attaque le carbone électrophile du carbonyle."
      },
      {
        "content": "Une nouvelle liaison C-C n’est pas formée.",
        "correct": false,
        "explanation": "La relation correcte est: « Une nouvelle liaison C-C est formée ». La négation proposée est donc fausse."
      },
      {
        "content": "Après hydrolyse, un alcool tertiaire est obtenu.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      }
    ],
    "explanation": "La fonction a été profondément transformée."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelle séquence permet de passer conceptuellement d’un alcène à un alcool tertiaire en utilisant les transformations étudiées ?",
    "choices": [
      {
        "content": "RX + Mg → organomagnésien.",
        "correct": true,
        "explanation": "L’insertion du magnésium dans la liaison $\ce{C-X}$ permet de former l’organomagnésien $\ce{RMgX}$."
      },
      {
        "content": "Organomagnésien + cétone, puis hydrolyse → alcool tertiaire.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Chaque étape conserve nécessairement le même nombre de carbones.",
        "correct": false,
        "explanation": "L'addition du Grignard sur une cétone allonge le squelette."
      },
      {
        "content": "Un dérivé halogéné se forme nécessairement par réduction d’un aldéhyde avec $\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "Cette réduction conduit à un alcool et n’introduit pas d’halogène."
      },
      {
        "content": "Alcène + HX → dérivé halogéné.",
        "correct": true,
        "explanation": "L’addition de $\ce{HX}$ sur un alcène peut conduire à un dérivé halogéné $\ce{R-X}$."
      }
    ],
    "explanation": "La séquence croise préparation de RX, Grignard et préparation des alcools tertiaires."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la pureté optique après substitution dans le modèle :",
    "choices": [
      {
        "content": "Une SN2 est décrite comme un mécanisme concerté en une seule étape.",
        "correct": true,
        "explanation": "Le nucléophile attaque pendant que le groupe partant s’éloigne, sans carbocation intermédiaire."
      },
      {
        "content": "SN1 ne conduit pas à un mélange racémique à partir d'un centre chiral idéalement symétrique dans ses deux faces.",
        "correct": false,
        "explanation": "La relation correcte est: « SN1 conduit à un mélange racémique à partir d'un centre chiral idéalement symétrique dans ses deux faces ». La négation proposée est donc fausse."
      },
      {
        "content": "SN2 conduit à un seul produit avec inversion.",
        "correct": true,
        "explanation": "La SN2 conduit à un seul produit de substitution avec inversion de configuration dans le modèle idéal."
      },
      {
        "content": "SN2 est associée à un produit optiquement pur à 100 % dans la simplification enseignée.",
        "correct": true,
        "explanation": "Dans la simplification retenue, la SN2 conserve un seul produit stéréochimique et donc une pureté optique maximale."
      },
      {
        "content": "SN1 conserve toujours un ee de 100 %.",
        "correct": false,
        "explanation": "Une SN1 sur un centre chiral conduit à une racémisation dans le modèle idéal ; l’excès énantiomérique n’est donc pas conservé à 100 %."
      }
    ],
    "explanation": "Le nucléophile attaque pendant que le groupe partant s’éloigne, sans carbocation intermédiaire."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Pour distinguer SN1 et SN2 à partir d'une description de mécanisme:",
    "choices": [
      {
        "content": "Une racémisation oriente vers SN1 dans le modèle étudié.",
        "correct": true,
        "explanation": "Une racémisation est cohérente avec une SN1, car le carbocation plan peut être attaqué par les deux faces."
      },
      {
        "content": "Une inversion stéréochimique unique oriente vers SN2.",
        "correct": true,
        "explanation": "Une inversion unique est la signature attendue d’une SN2, liée à l’attaque arrière du nucléophile."
      },
      {
        "content": "Une SN1 est décrite comme un mécanisme concerté en une seule étape.",
        "correct": false,
        "explanation": "Le mécanisme SN1 est présenté en deux étapes, contrairement à la SN2 concertée."
      },
      {
        "content": "Chercher un carbocation intermédiaire oriente vers SN1.",
        "correct": true,
        "explanation": "La présence d’un carbocation intermédiaire oriente vers un mécanisme SN1."
      },
      {
        "content": "Chercher une étape concertée oriente vers SN2.",
        "correct": true,
        "explanation": "Une substitution concertée sans carbocation intermédiaire correspond à une SN2."
      }
    ],
    "explanation": "La SN1 passe par un carbocation plan et peut racémiser un centre chiral, tandis que la SN2 est concertée et conduit à une inversion."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé halogéné optiquement pur donne après substitution un mélange 50/50 de deux énantiomères. Quelle interprétation est cohérente avec ce résultat ?",
    "choices": [
      {
        "content": "Une voie SN1 n’est pas compatible.",
        "correct": false,
        "explanation": "La relation correcte est: « Une voie SN1 est compatible ». La négation proposée est donc fausse."
      },
      {
        "content": "Une racémisation a eu lieu.",
        "correct": true,
        "explanation": "Un mélange contenant les deux formes en proportions 50/50 correspond à un mélange racémique."
      },
      {
        "content": "Une voie SN2 idéale seule expliquerait ce résultat.",
        "correct": false,
        "explanation": "SN2 donne un produit inversé unique."
      },
      {
        "content": "L'excès énantiomérique final est nul.",
        "correct": true,
        "explanation": "Un mélange 50/50 des deux énantiomères est racémique ; son excès énantiomérique est donc nul."
      },
      {
        "content": "Un dérivé halogéné se forme nécessairement par réduction d’un aldéhyde avec $\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "Cette réduction conduit à un alcool et n’introduit pas d’halogène."
      }
    ],
    "explanation": "La relation correcte est: « Une voie SN1 est compatible ». La négation proposée est donc fausse."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé halogéné optiquement pur donne après substitution un seul stéréoisomère avec inversion. Quelle interprétation est cohérente?",
    "choices": [
      {
        "content": "L'asymétrie du centre peut être conservée malgré l'inversion.",
        "correct": true,
        "explanation": "Les quatre substituants restent différents."
      },
      {
        "content": "Une SN2 passe obligatoirement par un carbocation plan et donne un racémate.",
        "correct": false,
        "explanation": "Le carbocation plan et la racémisation caractérisent ici la SN1."
      },
      {
        "content": "Une voie SN2 est compatible.",
        "correct": true,
        "explanation": "L’inversion unique de configuration est la signature stéréochimique attendue pour une SN2."
      },
      {
        "content": "Le mécanisme peut être concerté.",
        "correct": true,
        "explanation": "L’obtention d’un produit inversé unique est compatible avec une SN2, mécanisme concerté sans carbocation libre."
      },
      {
        "content": "Un carbocation plan libre est indispensable.",
        "correct": false,
        "explanation": "Un carbocation plan libre caractérise une SN1, pas une SN2."
      }
    ],
    "explanation": "Les quatre substituants restent différents."
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
        "explanation": "Le réactif organomagnésien apporte un groupe carboné nucléophile qui crée une nouvelle liaison carbone-carbone."
      },
      {
        "content": "Le carbone de RX est décrit comme électrophile.",
        "correct": true,
        "explanation": "Dans le dérivé halogéné $\ce{R-X}$, la polarisation de la liaison rend le carbone électrophile."
      },
      {
        "content": "Le carbone de RMgX est décrit comme nucléophile.",
        "correct": true,
        "explanation": "Après formation de $\ce{RMgX}$, le carbone du fragment $\ce{R}$ présente un caractère nucléophile."
      },
      {
        "content": "SN1 passe par un carbocation plan.",
        "correct": true,
        "explanation": "Le mécanisme considéré se déroule en deux étapes avec formation d’un intermédiaire avant l’attaque du nucléophile."
      },
      {
        "content": "SN2 est concertée et conduit à une inversion.",
        "correct": true,
        "explanation": "L’attaque arrière du nucléophile en SN2 entraîne une inversion de configuration au centre réactif."
      },
      {
        "content": "SN1 est concertée.",
        "correct": false,
        "explanation": "Le mécanisme considéré se déroule en deux étapes avec formation d’un intermédiaire avant l’attaque du nucléophile."
      },
      {
        "content": "SN2 donne un racémate dans le modèle idéal.",
        "correct": false,
        "explanation": "Dans le modèle idéal, une SN2 donne un produit inversé unique et non un racémate."
      },
      {
        "content": "RMgX est un électrophile carboné dans le modèle.",
        "correct": false,
        "explanation": "Le centre considéré est riche en électrons et peut donc se comporter comme un nucléophile."
      },
      {
        "content": "SN1 conserve toujours l'ee initial à 100 %.",
        "correct": false,
        "explanation": "La racémisation associée à une SN1 fait diminuer l’excès énantiomérique ; il n’est donc pas conservé à 100 %."
      },
      {
        "content": "Le carbone de RX est déjà chargé négativement comme celui du Grignard.",
        "correct": false,
        "explanation": "Ce caractère apparaît après formation de RMgX."
      }
    ],
    "explanation": "Le réactif organomagnésien apporte un groupe carboné nucléophile qui crée une nouvelle liaison carbone-carbone."
  }
];
