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
        "explanation": "Les dérivés halogénés sont décrits comme des composés généralement très toxiques."
      },
      {
        "content": "Ils sont tous des alcools.",
        "correct": false,
        "explanation": "Un dérivé halogéné possède un motif $\\ce{C-X}$ ; il ne correspond donc pas à la fonction alcool $\\ce{C-OH}$."
      },
      {
        "content": "X représente un groupe hydroxyle.",
        "correct": false,
        "explanation": "Dans la notation $\\ce{R-X}$, X représente un halogène et non un groupe hydroxyle."
      },
      {
        "content": "Ils sont notés de façon générale $\\ce{R-X}$.",
        "correct": true,
        "explanation": "La notation générale $\\ce{R-X}$ associe un radical carboné R à un halogène X."
      },
      {
        "content": "X représente un halogène.",
        "correct": true,
        "explanation": "Dans la notation $\\ce{R-X}$, X désigne l’atome d’halogène."
      }
    ],
    "explanation": "Un dérivé halogéné se note $\\ce{R-X}$, avec X représentant un halogène ; ces composés sont décrits comme généralement très toxiques."
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
        "explanation": "Lors de l’addition de $\\ce{HX}$, la double liaison est consommée et H et X se fixent sur les deux carbones qui la constituaient."
      },
      {
        "content": "La double liaison n’est pas consommée.",
        "correct": false,
        "explanation": "L’addition de $\\ce{HX}$ consomme la double liaison de l’alcène ; elle ne la laisse pas intacte."
      },
      {
        "content": "Le produit appartient à la famille RX.",
        "correct": true,
        "explanation": "L’addition de $\\ce{HX}$ sur un alcène forme un dérivé halogéné de type $\\ce{R-X}$."
      },
      {
        "content": "Le magnésium est obligatoirement présent dans cette première étape.",
        "correct": false,
        "explanation": "L’addition de $\\ce{HX}$ sur l’alcène ne nécessite pas Mg ; le magnésium intervient ensuite pour former un organomagnésien à partir de $\\ce{R-X}$."
      },
      {
        "content": "Dans un dérivé halogéné $\\ce{R-X}$, le carbone lié à l’halogène présente un caractère électrophile.",
        "correct": true,
        "explanation": "La polarisation de la liaison carbone-halogène rend ce carbone sensible à l’attaque d’un nucléophile."
      }
    ],
    "explanation": "L’addition de $\\ce{HX}$ sur un alcène consomme la double liaison et ajoute H et X pour former un dérivé halogéné."
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
        "explanation": "La conversion d’un alcool par un agent halogénant conduit à un dérivé halogéné $\\ce{R-X}$, pas à une amide."
      },
      {
        "content": "Le magnésium est l’agent halogénant utilisé pour remplacer $\\ce{-OH}$ par X.",
        "correct": false,
        "explanation": "Le magnésium sert à transformer $\\ce{R-X}$ en organomagnésien $\\ce{RMgX}$ ; ce n’est pas l’agent qui remplace $\\ce{-OH}$ par X."
      },
      {
        "content": "Un agent halogénant est utilisé.",
        "correct": true,
        "explanation": "La conversion d’un alcool en dérivé halogéné nécessite un agent capable de remplacer le groupe $\\ce{-OH}$ par un halogène."
      },
      {
        "content": "La fonction OH est remplacée par X.",
        "correct": true,
        "explanation": "L’agent halogénant remplace le groupe $\\ce{-OH}$ de l’alcool par un halogène X pour former $\\ce{R-X}$."
      },
      {
        "content": "Le produit peut être un chlorure ou un bromure selon l'agent.",
        "correct": true,
        "explanation": "Le choix de l’agent halogénant détermine si le produit est notamment un dérivé chloré ou bromé."
      }
    ],
    "explanation": "Un alcool peut être converti en dérivé halogéné par remplacement du groupe $\\ce{-OH}$ par X à l’aide d’un agent halogénant."
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
        "explanation": "$\\ce{BBr5}$ est l’agent bromant indiqué pour convertir un alcool en dérivé bromé $\\ce{R-Br}$."
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
    "explanation": "Les agents cités permettent d’adapter l’halogène introduit : $\\ce{PCl5}$, $\\ce{SOCl2}$ et $\\ce{POCl3}$ conduisent à des dérivés chlorés, tandis que $\\ce{BBr5}$ est indiqué pour un dérivé bromé."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la préparation d'un organomagnésien $\\ce{RMgX}$:",
    "choices": [
      {
        "content": "La préparation de $\\ce{RMgX}$ part directement d’un alcool sans passer par un dérivé halogéné.",
        "correct": false,
        "explanation": "La préparation de $\\ce{RMgX}$ nécessite d’abord un dérivé halogéné $\\ce{R-X}$, puis l’ajout de magnésium."
      },
      {
        "content": "Elle part d'un dérivé halogéné $\\ce{R-X}$.",
        "correct": true,
        "explanation": "La préparation d’un organomagnésien commence à partir d’un dérivé halogéné $\\ce{R-X}$."
      },
      {
        "content": "Le magnésium est ajouté.",
        "correct": true,
        "explanation": "Le magnésium réagit avec le dérivé halogéné $\\ce{R-X}$ pour former l’organomagnésien $\\ce{RMgX}$."
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
    "explanation": "Un organomagnésien $\\ce{RMgX}$ se prépare à partir de $\\ce{R-X}$ et de Mg ; le carbone passe alors d’un caractère électrophile à nucléophile."
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
        "explanation": "Le caractère négatif du carbone est attribué à $\\ce{RMgX}$ après réaction avec Mg, pas au dérivé halogéné initial."
      },
      {
        "content": "Nucléophile comme le carbone de $\\ce{RMgX}$.",
        "correct": false,
        "explanation": "Avant l’insertion du magnésium, le carbone lié à X est électrophile ; le caractère nucléophile apparaît après formation de $\\ce{RMgX}$."
      },
      {
        "content": "La liaison $\\ce{C-X}$ est polarisée de façon à rendre ce carbone sensible à l’attaque d’un nucléophile.",
        "correct": true,
        "explanation": "La polarisation de la liaison $\\ce{C-X}$ rend le carbone lié à X électrophile et donc sensible à l’attaque d’un nucléophile."
      },
      {
        "content": "Électrophile.",
        "correct": true,
        "explanation": "La polarisation C-X lui confère ce caractère dans le modèle étudié."
      },
      {
        "content": "Capable de réagir avec un nucléophile.",
        "correct": true,
        "explanation": "Parce que le carbone lié à X est électrophile, il constitue un site susceptible d’être attaqué par un nucléophile."
      }
    ],
    "explanation": "Dans $\\ce{RCH2-X}$ avant réaction avec Mg, le carbone lié à X est électrophile et peut être attaqué par un nucléophile."
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
        "explanation": "Dans $\\ce{RMgX}$, le carbone du fragment R porte un caractère négatif et se comporte donc comme un nucléophile."
      },
      {
        "content": "Riche en électrons.",
        "correct": true,
        "explanation": "Le caractère négatif attribué au carbone de $\\ce{RMgX}$ correspond à un carbone riche en électrons."
      },
      {
        "content": "Capable de réagir avec un carbone électrophile.",
        "correct": true,
        "explanation": "Le carbone nucléophile de $\\ce{RMgX}$ peut réagir avec des carbones électrophiles, notamment ceux des aldéhydes, cétones et esters."
      },
      {
        "content": "Strictement électrophile comme dans RX.",
        "correct": false,
        "explanation": "Après insertion du magnésium, le carbone du fragment $\ce{R}$ acquiert un caractère nucléophile ; il n’est plus décrit comme électrophile."
      },
      {
        "content": "Déjà chargé positivement et électrophile comme un carbocation.",
        "correct": false,
        "explanation": "Dans $\\ce{RMgX}$, le carbone du fragment R porte au contraire un caractère négatif et nucléophile."
      }
    ],
    "explanation": "Après formation de $\\ce{RMgX}$, le carbone du fragment R porte un caractère négatif et devient nucléophile."
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
        "content": "Des alcanes saturés ne présentant pas de carbone électrophile dans le modèle étudié.",
        "correct": false,
        "explanation": "Les organomagnésiens réagissent avec des carbones électrophiles ; un alcane saturé dépourvu d’un tel centre ne correspond pas aux partenaires indiqués."
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
        "content": "$\\ce{R-X + Mg -> R-OH}$.",
        "correct": false,
        "explanation": "La réaction de $\\ce{R-X}$ avec Mg ne forme pas directement un alcool : elle conduit à l’organomagnésien $\\ce{RMgX}$."
      },
      {
        "content": "$\\ce{R-X + Mg -> RMgX}$.",
        "correct": true,
        "explanation": "La préparation d’un réactif de Grignard suit le bilan $\\ce{R-X + Mg -> RMgX}$."
      },
      {
        "content": "$\\ce{R-OH + Mg -> R-X}$.",
        "correct": false,
        "explanation": "Le magnésium ne remplace pas directement $\\ce{-OH}$ par X ; l’organomagnésien est préparé à partir d’un dérivé halogéné."
      },
      {
        "content": "$\\ce{R-X + H2O -> RMgX}$.",
        "correct": false,
        "explanation": "L’eau ne forme pas $\\ce{RMgX}$ à partir de $\\ce{R-X}$ ; le réactif nécessaire est le magnésium."
      },
      {
        "content": "$\\ce{R-NH2 + Mg -> R-OH}$.",
        "correct": false,
        "explanation": "La formation de $\\ce{RMgX}$ part de $\\ce{R-X}$ et de Mg ; le bilan proposé avec une amine ne correspond pas à cette préparation."
      }
    ],
    "explanation": "Le réactif de Grignard $\\ce{RMgX}$ est obtenu par réaction d’un dérivé halogéné $\\ce{R-X}$ avec le magnésium."
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
        "explanation": "Dans une substitution nucléophile, le nucléophile se fixe sur le carbone et X quitte la molécule sous forme de groupe partant."
      },
      {
        "content": "$\\ce{X^-}$ ne peut pas jouer le rôle de groupe partant dans le bilan.",
        "correct": false,
        "explanation": "Dans le bilan de substitution, X quitte le carbone sous forme de groupe partant ; la proposition nie cette possibilité."
      },
      {
        "content": "Le carbone portant X est le site attaqué.",
        "correct": true,
        "explanation": "Dans $\\ce{R-X}$, la polarisation de la liaison carbone-halogène rend le carbone lié à X électrophile ; c’est ce carbone qui est attaqué par le nucléophile."
      },
      {
        "content": "La réaction transforme toujours RX en alcane.",
        "correct": false,
        "explanation": "Le produit d’une substitution dépend du nucléophile qui remplace X ; $\\ce{R-X}$ n’est donc pas systématiquement transformé en alcane."
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
        "explanation": "Le carbocation intermédiaire de la SN1 est plan, ce qui permet une attaque du nucléophile sur ses deux faces."
      },
      {
        "content": "Le nucléophile attaque avant le départ de X dans une étape concertée.",
        "correct": false,
        "explanation": "Une attaque concertée du nucléophile pendant le départ de X décrit la SN2 ; en SN1, X part avant l’attaque."
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
    "explanation": "La SN1 se déroule en deux étapes via un carbocation plan ; cet intermédiaire explique la possibilité d’une racémisation."
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
        "explanation": "Le carbocation intermédiaire de la SN1 est plan, condition permettant l’attaque par les deux faces."
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
        "explanation": "La SN1 n’est pas concertée : elle comporte d’abord le départ de X et la formation du carbocation, puis l’attaque du nucléophile."
      }
    ],
    "explanation": "Le carbocation plan formé en SN1 peut être attaqué par les deux faces, ce qui conduit aux deux configurations et à une racémisation dans le modèle idéal."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Combien d'étapes élémentaires sont retenues pour une SN1?",
    "choices": [
      {
        "content": "Quatre.",
        "correct": false,
        "explanation": "La SN1 n’est pas décrite en quatre étapes ; le modèle retient deux étapes."
      },
      {
        "content": "Une.",
        "correct": false,
        "explanation": "Une seule étape correspond à la SN2 concertée ; la SN1 est décrite en deux étapes."
      },
      {
        "content": "Deux.",
        "correct": true,
        "explanation": "La SN1 comporte deux étapes : formation du carbocation après départ de X, puis attaque du nucléophile."
      },
      {
        "content": "Trois obligatoirement.",
        "correct": false,
        "explanation": "Le modèle retient deux étapes pour la SN1, et non trois."
      },
      {
        "content": "Cinq.",
        "correct": false,
        "explanation": "La SN1 n’est pas décrite en cinq étapes ; le modèle retient deux étapes."
      }
    ],
    "explanation": "La SN1 est décrite en deux étapes : formation du carbocation puis attaque du nucléophile."
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
        "explanation": "En SN2, l’approche du nucléophile est couplée au départ de X ; le groupe partant est repoussé au cours de la même étape."
      },
      {
        "content": "Un carbocation plan libre n'est pas l'intermédiaire du mécanisme.",
        "correct": true,
        "explanation": "La SN2 est concertée et ne passe pas par un carbocation libre ; ce dernier caractérise la SN1."
      },
      {
        "content": "Elle conduit à une racémisation par attaque des deux faces.",
        "correct": false,
        "explanation": "Une SN2 conduit à une inversion de configuration ; la racémisation par attaque des deux faces caractérise la SN1 dans le modèle idéal."
      },
      {
        "content": "Le nucléophile s’approche pendant que le groupe partant X s’éloigne.",
        "correct": true,
        "explanation": "En SN2, l’approche du nucléophile et le départ de X ont lieu au cours de la même étape concertée."
      },
      {
        "content": "Elle se déroule en un temps.",
        "correct": true,
        "explanation": "La SN2 est concertée : l’attaque nucléophile et le départ du groupe partant ont lieu dans une même étape."
      }
    ],
    "explanation": "La SN2 est concertée en une étape : le nucléophile s’approche pendant que X part, sans formation d’un carbocation libre."
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
        "explanation": "L’approche du nucléophile par le côté opposé au groupe partant entraîne une inversion de configuration au centre attaqué."
      },
      {
        "content": "L'asymétrie est conservée.",
        "correct": true,
        "explanation": "Le centre reste chiral si les quatre substituants restent différents."
      },
      {
        "content": "Un seul produit stéréochimique est obtenu dans le modèle idéal.",
        "correct": true,
        "explanation": "L’attaque de la SN2 est imposée d’un seul côté ; un seul produit stéréochimique est donc obtenu dans le modèle idéal."
      },
      {
        "content": "Le produit est un racémate 50/50.",
        "correct": false,
        "explanation": "Un racémate 50/50 résulte de l’attaque des deux faces d’un carbocation plan en SN1, pas d’une SN2."
      }
    ],
    "explanation": "Sur un centre asymétrique, la SN2 conduit à une inversion de configuration tout en conservant l’asymétrie dans le modèle étudié."
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
        "explanation": "La formation d’un Grignard est une transformation distincte ; la comparaison « concerté ou non » porte ici sur SN1 et SN2."
      },
      {
        "content": "Réduction d’un composé carbonylé par $\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "La réduction par $\\ce{NaBH4}$ est une transformation des composés carbonylés, mais elle n’est pas le mécanisme SN concerté comparé ici."
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
        "explanation": "L’hydratation d’un alcène est une autre transformation ; dans la comparaison demandée, c’est la SN2 qui est concertée."
      }
    ],
    "explanation": "Dans la comparaison SN1/SN2, la SN2 est le mécanisme décrit comme concerté en une seule étape."
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
        "explanation": "En SN2, l’attaque du nucléophile se fait du côté opposé au groupe partant et entraîne une inversion de configuration."
      },
      {
        "content": "SN2: carbocation plan obligatoire.",
        "correct": false,
        "explanation": "La SN2 est concertée et ne passe pas par un carbocation libre."
      },
      {
        "content": "Une SN1 est décrite comme un mécanisme concerté en une seule étape.",
        "correct": false,
        "explanation": "La SN1 se déroule en deux étapes avec un carbocation intermédiaire ; le mécanisme concerté en une étape correspond à la SN2."
      }
    ],
    "explanation": "La formation d’un carbocation plan est le repère mécanistique caractéristique de la SN1."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les facteurs suivants, lesquels sont pris en compte pour orienter une substitution vers SN1 ou SN2 ?",
    "choices": [
      {
        "content": "La couleur du flacon.",
        "correct": false,
        "explanation": "La couleur du flacon n’est pas un facteur mécanistique de choix entre SN1 et SN2."
      },
      {
        "content": "La nature du groupe B porté par le carbone réactif.",
        "correct": true,
        "explanation": "La nature du groupe B fait partie des caractéristiques du substrat prises en compte pour orienter le mécanisme."
      },
      {
        "content": "La nature du nucléophile.",
        "correct": true,
        "explanation": "La nature du nucléophile fait partie des facteurs pris en compte pour orienter la substitution."
      },
      {
        "content": "Le solvant.",
        "correct": true,
        "explanation": "Le solvant fait partie des facteurs pris en compte pour orienter la substitution."
      },
      {
        "content": "La nature du groupe C porté par le carbone réactif.",
        "correct": true,
        "explanation": "La nature du groupe C fait partie des caractéristiques du substrat prises en compte pour orienter le mécanisme."
      }
    ],
    "explanation": "Les facteurs indiqués sont la nature du nucléophile, le solvant et la nature des groupes B et C portés par le carbone réactif."
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
        "explanation": "La SN2 donne un produit unique avec inversion dans le modèle, ce qui évite la perte de pureté optique liée à la racémisation."
      },
      {
        "content": "La SN2 forme nécessairement un mélange racémique.",
        "correct": false,
        "explanation": "La racémisation est associée à la SN1 ; la SN2 donne au contraire un produit stéréochimique unique dans le modèle."
      },
      {
        "content": "Une SN2 passe obligatoirement par un carbocation plan et donne un racémate.",
        "correct": false,
        "explanation": "Le carbocation plan et la racémisation caractérisent ici la SN1."
      },
      {
        "content": "La SN2 évite la racémisation dans le modèle idéal.",
        "correct": true,
        "explanation": "La SN2 ne passe pas par un carbocation plan attaquable sur deux faces ; elle évite donc la racémisation dans le modèle idéal."
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
    "question": "Pourquoi la distinction SN1/SN2 est-elle importante lorsqu’on cherche à préserver la pureté optique d’un produit chiral ?",
    "choices": [
      {
        "content": "Une SN1 peut faire perdre la pureté optique initiale par racémisation.",
        "correct": true,
        "explanation": "La SN1 passe par un carbocation plan qui peut être attaqué par les deux faces ; la racémisation peut donc diminuer la pureté optique."
      },
      {
        "content": "Une SN1 garantit toujours un produit optiquement pur à 100 %.",
        "correct": false,
        "explanation": "Une SN1 peut conduire à un mélange racémique ; elle ne garantit donc pas un produit optiquement pur à 100 %."
      },
      {
        "content": "Une SN2 passe obligatoirement par un carbocation plan et donne un racémate.",
        "correct": false,
        "explanation": "Le carbocation plan et la racémisation caractérisent ici la SN1."
      },
      {
        "content": "Le carbocation plan d’une SN1 peut être attaqué par les deux faces.",
        "correct": true,
        "explanation": "Le carbocation plan de la SN1 peut être attaqué des deux côtés, ce qui explique la formation des deux configurations."
      },
      {
        "content": "SN2 peut conduire à un produit stéréochimiquement unique avec inversion.",
        "correct": true,
        "explanation": "L’attaque arrière du nucléophile en SN2 entraîne une inversion de configuration au centre réactif."
      }
    ],
    "explanation": "La SN1 peut racémiser un centre chiral, tandis que la SN2 conduit dans le modèle étudié à un produit unique avec inversion ; cette différence conditionne la pureté optique du produit."
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
        "explanation": "Sans autre réactif, $\\ce{R-X}$ ne devient pas spontanément un alcool tertiaire ; une transformation chimique supplémentaire est nécessaire."
      },
      {
        "content": "Un dérivé halogéné ne peut pas réagir avec le magnésium.",
        "correct": false,
        "explanation": "Un dérivé halogéné $\\ce{R-X}$ peut réagir avec Mg pour former l’organomagnésien $\\ce{RMgX}$."
      },
      {
        "content": "Réaction avec Mg pour former $\\ce{RMgX}$.",
        "correct": true,
        "explanation": "La réaction de $\\ce{R-X}$ avec Mg forme directement l’organomagnésien $\\ce{RMgX}$."
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
    "explanation": "Un dérivé halogéné $\\ce{R-X}$ peut subir une substitution nucléophile, participer à l’alkylation d’une amine ou réagir avec Mg pour former $\\ce{RMgX}$."
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
        "explanation": "La SN1 peut racémiser le centre chiral ; la configuration initiale n’est donc pas conservée à 100 %."
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
        "explanation": "La SN2 conduit à un seul produit avec inversion dans le modèle idéal, et non à un mélange racémique."
      },
      {
        "content": "Une SN2 sur un centre asymétrique conduit à une inversion de configuration dans le modèle étudié.",
        "correct": true,
        "explanation": "L’attaque par la face opposée au groupe partant entraîne l’inversion géométrique décrite."
      },
      {
        "content": "L'attaque nucléophile et le départ de X ne sont pas couplés dans une seule étape.",
        "correct": false,
        "explanation": "En SN2, l’attaque du nucléophile et le départ de X sont couplés dans une même étape concertée."
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
        "content": "Le carbone de $\\ce{R-X}$ reste nucléophile avant comme après insertion du magnésium.",
        "correct": false,
        "explanation": "Dans $\\ce{R-X}$, le carbone est électrophile ; après formation de $\\ce{RMgX}$, il devient nucléophile."
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
        "explanation": "Le dérivé halogéné sert d’abord à former $\\ce{RMgX}$ ; après réaction avec la cétone et hydrolyse, le produit n’est plus le dérivé halogéné initial."
      },
      {
        "content": "Un organomagnésien réagit avec un ester une seule fois avant l’alcool tertiaire final.",
        "correct": false,
        "explanation": "Le cas de l’ester nécessite deux additions du même organomagnésien dans le modèle étudié."
      },
      {
        "content": "Le carbone du Grignard agit comme nucléophile.",
        "correct": true,
        "explanation": "Le carbone du Grignard est nucléophile et attaque le carbone électrophile du groupe carbonyle de la cétone."
      },
      {
        "content": "Une nouvelle liaison C-C n’est pas formée.",
        "correct": false,
        "explanation": "L’attaque du carbone nucléophile de $\\ce{RMgX}$ sur le carbone carbonylé de la cétone forme bien une nouvelle liaison C-C."
      },
      {
        "content": "Après hydrolyse, un alcool tertiaire est obtenu.",
        "correct": true,
        "explanation": "L’addition du carbone nucléophile de l’organomagnésien sur une cétone conduit, après hydrolyse, à un alcool tertiaire."
      }
    ],
    "explanation": "Le carbone nucléophile de $\\ce{RMgX}$ attaque la cétone, crée une liaison C-C et conduit après hydrolyse à un alcool tertiaire."
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
        "explanation": "L’organomagnésien attaque le carbone électrophile de la cétone ; après hydrolyse, le produit est un alcool tertiaire."
      },
      {
        "content": "Chaque étape conserve nécessairement le même nombre de carbones.",
        "correct": false,
        "explanation": "L'addition du Grignard sur une cétone allonge le squelette."
      },
      {
        "content": "La réaction de $\\ce{R-X}$ avec Mg détruit le squelette carboné avant l’étape sur la cétone.",
        "correct": false,
        "explanation": "La réaction de $\\ce{R-X}$ avec Mg conserve le squelette carboné et forme $\\ce{RMgX}$ ; elle ne détruit pas le fragment R."
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
        "explanation": "Dans le modèle idéal, une SN1 sur un centre chiral peut conduire à un mélange racémique ; la proposition affirme l’inverse."
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
        "explanation": "La présence d’un carbocation intermédiaire et d’un mécanisme en deux étapes oriente vers SN1, pas vers une SN1 concertée."
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
        "explanation": "Une voie SN1 est compatible avec un mélange racémique 50/50, car elle passe par un carbocation plan attaquable sur les deux faces."
      },
      {
        "content": "Une racémisation a eu lieu.",
        "correct": true,
        "explanation": "Un mélange contenant les deux formes en proportions 50/50 correspond à un mélange racémique."
      },
      {
        "content": "Une voie SN2 idéale seule expliquerait ce résultat.",
        "correct": false,
        "explanation": "Une SN2 idéale donne un produit unique inversé ; elle n’explique donc pas à elle seule un mélange racémique 50/50."
      },
      {
        "content": "L'excès énantiomérique final est nul.",
        "correct": true,
        "explanation": "Un mélange 50/50 des deux énantiomères est racémique ; son excès énantiomérique est donc nul."
      },
      {
        "content": "Une racémisation 50/50 correspond à un excès énantiomérique de 100 %.",
        "correct": false,
        "explanation": "Un mélange 50/50 des deux énantiomères est racémique ; son excès énantiomérique est nul et non égal à 100 %."
      }
    ],
    "explanation": "Un mélange 50/50 de deux énantiomères est un racémate ; ce résultat est compatible avec une SN1 passant par un carbocation plan."
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
        "explanation": "L’inversion change la configuration mais peut conserver un centre asymétrique si les quatre substituants restent différents."
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
    "explanation": "Un produit unique avec inversion est compatible avec une SN2 ; l’asymétrie peut être conservée si le centre reste stéréogène."
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
        "explanation": "Le magnésium réagit avec le dérivé halogéné $\\ce{R-X}$ pour former l’organomagnésien $\\ce{RMgX}$ ; cette étape ne crée pas encore de liaison C-C avec un carbonyle."
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
        "explanation": "La SN1 comporte deux étapes et passe par un carbocation plan avant l’attaque du nucléophile."
      },
      {
        "content": "SN2 est concertée et conduit à une inversion.",
        "correct": true,
        "explanation": "L’attaque arrière du nucléophile en SN2 entraîne une inversion de configuration au centre réactif."
      },
      {
        "content": "SN1 est concertée.",
        "correct": false,
        "explanation": "La SN1 n’est pas concertée : le départ du groupe partant et l’attaque du nucléophile ont lieu en deux étapes."
      },
      {
        "content": "SN2 donne un racémate dans le modèle idéal.",
        "correct": false,
        "explanation": "Dans le modèle idéal, une SN2 donne un produit inversé unique et non un racémate."
      },
      {
        "content": "RMgX est un électrophile carboné dans le modèle.",
        "correct": false,
        "explanation": "Dans $\\ce{RMgX}$, le carbone du fragment R est riche en électrons et nucléophile, et non électrophile."
      },
      {
        "content": "SN1 conserve toujours l'ee initial à 100 %.",
        "correct": false,
        "explanation": "La racémisation associée à une SN1 fait diminuer l’excès énantiomérique ; il n’est donc pas conservé à 100 %."
      },
      {
        "content": "Le carbone de RX est déjà chargé négativement comme celui du Grignard.",
        "correct": false,
        "explanation": "Dans $\\ce{R-X}$, le carbone est électrophile ; le caractère négatif apparaît après formation de $\\ce{RMgX}$."
      }
    ],
    "explanation": "Le réactif organomagnésien apporte un groupe carboné nucléophile qui crée une nouvelle liaison carbone-carbone."
  }
];
