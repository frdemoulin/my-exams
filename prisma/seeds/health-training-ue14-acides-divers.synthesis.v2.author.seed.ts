import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.7 – Synthèse
 */

export const UE14_CH11_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions relient correctement acidité et activation dans le modèle?",
    "choices": [
      {
        "content": "Un acide carboxylique non activé est plus électrophile qu’un halogénure d’acyle.",
        "correct": false,
        "explanation": "L’acide non activé est moins électrophile qu’un dérivé activé comme un halogénure d’acyle."
      },
      {
        "content": "RCOOH peut libérer H+ et former RCOO−.",
        "correct": true,
        "explanation": "La définition protonique retenue décrit un acide comme une espèce capable de céder un proton."
      },
      {
        "content": "Le carboxylate présente une charge négative délocalisée entre les oxygènes.",
        "correct": true,
        "explanation": "Dans l’ion carboxylate, la charge négative est délocalisée sur les deux atomes d’oxygène, ce qui stabilise l’espèce."
      },
      {
        "content": "L'acide carboxylique est décrit comme peu électrophile.",
        "correct": true,
        "explanation": "La délocalisation électronique du groupe carboxyle diminue le caractère électrophile du carbone carbonylé d’un acide non activé."
      },
      {
        "content": "Un dérivé activé possède un carbone plus électrophile.",
        "correct": true,
        "explanation": "L’activation augmente le caractère électrophile du carbone acylé et facilite l’attaque d’un nucléophile."
      }
    ],
    "explanation": "La déprotonation forme un carboxylate stabilisé par délocalisation, tandis que l’activation d’un acide augmente l’électrophilie de son carbone acylé."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare un acide carboxylique, un alcool et un carbone de type -CH2-CO- dans la hiérarchie. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le carbone -CH2-CO- est le moins acide des trois.",
        "correct": true,
        "explanation": "Dans la hiérarchie retenue, l’hydrogène en alpha d’un carbonyle est moins acide que celui d’un alcool, lui-même moins acide que celui d’un acide carboxylique."
      },
      {
        "content": "La hiérarchie est alcool > acide carboxylique > -CH2-CO-.",
        "correct": false,
        "explanation": "L’acide carboxylique est placé avant l’alcool dans la hiérarchie ; l’ordre proposé inverse donc les deux premiers termes."
      },
      {
        "content": "Dans la hiérarchie donnée, un alcool est plus acide qu’un acide carboxylique.",
        "correct": false,
        "explanation": "La hiérarchie retenue place l’acide carboxylique au-dessus de l’alcool."
      },
      {
        "content": "L’acide carboxylique n’est pas le plus acide des trois.",
        "correct": false,
        "explanation": "La hiérarchie retenue place l’acide carboxylique avant l’alcool, puis l’hydrogène en alpha d’un carbonyle."
      },
      {
        "content": "L'alcool occupe la position intermédiaire.",
        "correct": true,
        "explanation": "La hiérarchie retenue est : acide carboxylique > alcool > hydrogène en alpha d’un carbonyle."
      }
    ],
    "explanation": "La hiérarchie retenue est : acide carboxylique > alcool > hydrogène en alpha d’un carbonyle."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un acide cible peut être obtenu par plusieurs voies considérées. Quelles associations sont exactes?",
    "choices": [
      {
        "content": "Alcool primaire → acide par oxydation.",
        "correct": true,
        "explanation": "Une oxydation suffisamment poussée d’un alcool primaire conduit à l’acide carboxylique correspondant."
      },
      {
        "content": "Ester → acide + alcool par hydrolyse.",
        "correct": true,
        "explanation": "L’hydrolyse d’un ester régénère l’acide carboxylique du fragment acyle et libère l’alcool correspondant au groupe $\\ce{OR'}$."
      },
      {
        "content": "Amide → amine + acide par hydrolyse.",
        "correct": true,
        "explanation": "L’hydrolyse d’une amide conduit, dans le bilan simplifié, à un acide carboxylique et une amine."
      },
      {
        "content": "Nitrile → amide → acide.",
        "correct": true,
        "explanation": "L’amide est l’intermédiaire fonctionnel de l’hydrolyse du nitrile avant formation de l’acide."
      },
      {
        "content": "Nitrile → alcane sans intermédiaire.",
        "correct": false,
        "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire et conserve le carbone du groupe nitrile jusqu’au carboxyle."
      }
    ],
    "explanation": "Les voies étudiées vers un acide carboxylique comprennent l’oxydation d’un alcool primaire, l’hydrolyse d’un ester ou d’une amide, l’hydrolyse d’un nitrile et la carboxylation d’un organomagnésien."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On veut obtenir un acide à 5 carbones par carboxylation d'un organomagnésien. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le produit final contient un carbone de moins que R.",
        "correct": false,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "Un organomagnésien peut réagir avec $\\ce{CO2}$ pour conduire à un acide carboxylique après traitement approprié.",
        "correct": true,
        "explanation": "Le carbone du dioxyde de carbone est incorporé au squelette sous forme du carbone carboxylique."
      },
      {
        "content": "Le fragment R doit contenir 4 carbones.",
        "correct": true,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "$\\ce{CO2}$ n’est pas consommé lors de la carboxylation.",
        "correct": false,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      },
      {
        "content": "Le carbone de CO2 devient le carbone carboxylique.",
        "correct": true,
        "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
      }
    ],
    "explanation": "La carboxylation d’un organomagnésien suit le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ : le $\\ce{CO2}$ apporte le carbone du groupe carboxyle."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare carboxylation et décarboxylation. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "La décarboxylation libère CO2.",
        "correct": true,
        "explanation": "Une décarboxylation élimine un carbone du squelette sous forme de $\\ce{CO2}$."
      },
      {
        "content": "La première ajoute un carbone au squelette de R.",
        "correct": true,
        "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
      },
      {
        "content": "La seconde retire un carbone au squelette organique.",
        "correct": true,
        "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
      },
      {
        "content": "La carboxylation par $\\ce{CO2}$ diminue le squelette d’un carbone.",
        "correct": false,
        "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
      },
      {
        "content": "La carboxylation d'un organomagnésien consomme CO2.",
        "correct": true,
        "explanation": "Le $\\ce{CO2}$ est un réactif de la carboxylation et fournit le carbone du nouveau groupe carboxyle."
      }
    ],
    "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule acide contient la configuration carbonylée favorable décrite. Que faut-il retenir?",
    "choices": [
      {
        "content": "La réaction conduit à un gain de carbone par consommation de $\\ce{CO2}$.",
        "correct": false,
        "explanation": "La décarboxylation est favorisée lorsque la fonction acide carboxylique se trouve dans une structure comportant un autre carbonyle adapté, par exemple de type cétone, aldéhyde, acide ou ester."
      },
      {
        "content": "Une décarboxylation peut être facilitée.",
        "correct": true,
        "explanation": "La décarboxylation est favorisée lorsque la fonction acide carboxylique se trouve dans une structure comportant un autre carbonyle adapté, par exemple de type cétone, aldéhyde, acide ou ester."
      },
      {
        "content": "La réaction peut être chimique.",
        "correct": true,
        "explanation": "Une décarboxylation peut se produire par voie chimique lorsque la structure du substrat la favorise."
      },
      {
        "content": "La réaction peut être enzymatique.",
        "correct": true,
        "explanation": "Une décarboxylation peut être catalysée par une enzyme tout en conservant le bilan global de libération de $\\ce{CO2}$."
      },
      {
        "content": "Le bilan implique une perte de CO2.",
        "correct": true,
        "explanation": "Par définition, le bilan implique une perte de CO2."
      }
    ],
    "explanation": "La décarboxylation est favorisée lorsque la fonction acide carboxylique se trouve dans une structure comportant un autre carbonyle adapté, par exemple de type cétone, aldéhyde, acide ou ester."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans la partie acides nucléiques, quelles relations électroniques sont correctes?",
    "choices": [
      {
        "content": "Base nucléique → nucléophile.",
        "correct": true,
        "explanation": "Les bases nucléiques possèdent des sites riches en électrons qui peuvent se comporter comme des nucléophiles."
      },
      {
        "content": "Dérivé halogéné de l'exemple toxicologique → électrophile.",
        "correct": true,
        "explanation": "La polarisation de la liaison carbone–halogène rend le carbone lié à l’halogène électrophile."
      },
      {
        "content": "Une base électronique capte nécessairement un doublet d’électrons.",
        "correct": false,
        "explanation": "Dans la définition électronique utilisée ici, une base donne des électrons alors qu’un acide les capte."
      },
      {
        "content": "Base → donneuse d'électrons.",
        "correct": true,
        "explanation": "Dans la définition électronique retenue, une base peut donner un doublet d’électrons."
      },
      {
        "content": "Acide → accepteur d'électrons.",
        "correct": true,
        "explanation": "Dans la définition électronique utilisée ici, un acide capte un doublet d’électrons."
      }
    ],
    "explanation": "Dans la définition électronique utilisée ici, une base donne des électrons alors qu’un acide les capte."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels repères distinguent nucléosides et nucléotides?",
    "choices": [
      {
        "content": "Les nucléosides représentés associent une base et un sucre.",
        "correct": true,
        "explanation": "Un nucléoside associe une base nucléique à un sucre."
      },
      {
        "content": "Le ribose est associé à l'ARN.",
        "correct": true,
        "explanation": "Le ribose constitue le sucre de la série ARN."
      },
      {
        "content": "Le 2-désoxyribose est associé à l'ADN.",
        "correct": true,
        "explanation": "Le 2-désoxyribose est le pentose caractéristique de la série ADN."
      },
      {
        "content": "Le phosphate des nucléotides est responsable de leur acidité.",
        "correct": true,
        "explanation": "Le groupement phosphate peut perdre des protons et porter des charges négatives ; il contribue donc au caractère acide des nucléotides."
      },
      {
        "content": "Le ribose est le sucre caractéristique de la série ADN dans le cadre présenté.",
        "correct": false,
        "explanation": "Le ribose est associé à l’ARN; l’ADN contient un 2-désoxyribose."
      }
    ],
    "explanation": "Un nucléoside associe une base à un sucre ; l’ajout d’un phosphate forme un nucléotide, dont le phosphate contribue au caractère acide."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux transformations qui modifient le nombre de carbones du squelette organique dans les bilans considérés.",
    "choices": [
      {
        "content": "Hydrolyse d'une amide.",
        "correct": false,
        "explanation": "Une amide hydrolysée donne un acide et une amine ; elle ne libère pas un alcool comme produit azoté."
      },
      {
        "content": "Oxydation d’un alcool primaire en acide.",
        "correct": false,
        "explanation": "L’oxydation poussée d’un alcool primaire ne nécessite ni nitrile ni ajout de $\\ce{CO2}$."
      },
      {
        "content": "Carboxylation d'un organomagnésien par CO2.",
        "correct": true,
        "explanation": "Lors d’une carboxylation d’un organomagnésien, le carbone du $\\ce{CO2}$ devient celui du groupe carboxyle et allonge le squelette d’une unité."
      },
      {
        "content": "Décarboxylation.",
        "correct": true,
        "explanation": "Une décarboxylation retire une unité carbone du squelette sous forme de $\\ce{CO2}$."
      },
      {
        "content": "Hydrolyse d'un ester.",
        "correct": false,
        "explanation": "L’hydrolyse d’un ester conserve le squelette du fragment acyle et ne correspond ni à une perte de $\\ce{CO2}$ ni à un gain de carbone."
      }
    ],
    "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un dérivé activé est plus électrophile qu'un acide carboxylique dans le modèle.",
        "correct": true,
        "explanation": "L’activation augmente le caractère électrophile du carbone acylé par rapport à l’acide carboxylique."
      },
      {
        "content": "Nitrile → amide → acide.",
        "correct": true,
        "explanation": "L’amide est l’intermédiaire fonctionnel de l’hydrolyse du nitrile avant formation de l’acide."
      },
      {
        "content": "Une décarboxylation libère CO2.",
        "correct": true,
        "explanation": "Une décarboxylation élimine un carbone du squelette organique sous forme de $\\ce{CO2}$."
      },
      {
        "content": "Une base nucléique est décrite comme nucléophile.",
        "correct": true,
        "explanation": "Les sites riches en électrons des bases nucléiques peuvent donner un doublet et se comporter comme des nucléophiles."
      },
      {
        "content": "Le phosphate est responsable de l'acidité des nucléotides.",
        "correct": true,
        "explanation": "La présence de groupements phosphate contribue au caractère acide des nucléotides et des acides nucléiques."
      },
      {
        "content": "L’organomagnésien doit avoir un carbone de plus que l’acide cible.",
        "correct": false,
        "explanation": "La carboxylation ajoute une unité carbone au fragment R ; elle ne diminue pas le squelette."
      },
      {
        "content": "La décarboxylation ajoute un carbone.",
        "correct": false,
        "explanation": "Une décarboxylation correspond à la perte d’un groupe carboxyle sous forme de $\\ce{CO2}$."
      },
      {
        "content": "Le ribose est associé à l’ADN.",
        "correct": false,
        "explanation": "Le ribose est associé à l’ARN et le 2-désoxyribose à l’ADN ; les autres sucres proposés ne correspondent pas à ces séries."
      },
      {
        "content": "Le dérivé halogéné est décrit comme nucléophile dans le modèle toxicologique.",
        "correct": false,
        "explanation": "Dans le modèle toxicologique, le dérivé halogéné est l’électrophile ; la base nucléique est le nucléophile."
      },
      {
        "content": "L'hydrolyse d'une amide donne un alcool.",
        "correct": false,
        "explanation": "Elle donne une amine et un acide."
      }
    ],
    "explanation": "La synthèse associe activation des acides, hydrolyse du nitrile, décarboxylation et propriétés électroniques des bases nucléiques et des nucléotides."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une stratégie comporte d'abord une carboxylation d'un organomagnésien à 4 carbones, puis une décarboxylation unique du produit obtenu. Si l'on raisonne uniquement sur le nombre de carbones:",
    "choices": [
      {
        "content": "Pour obtenir un acide à cinq carbones, il faut nécessairement utiliser un organomagnésien à six carbones.",
        "correct": false,
        "explanation": "Le réactif organomagnésien doit comporter un carbone de moins que l’acide final."
      },
      {
        "content": "Après carboxylation, le produit acide compte 5 carbones.",
        "correct": true,
        "explanation": "Lors d’une carboxylation d’un organomagnésien, le carbone du $\\ce{CO2}$ devient celui du groupe carboxyle et allonge le squelette d’une unité."
      },
      {
        "content": "Après décarboxylation, le produit organique peut revenir à 4 carbones.",
        "correct": true,
        "explanation": "Une décarboxylation correspond à la perte d’un groupe carboxyle sous forme de $\\ce{CO2}$."
      },
      {
        "content": "Les deux opérations ont des effets opposés.",
        "correct": true,
        "explanation": "La carboxylation ajoute un carbone par $\\ce{CO2}$, tandis qu’une décarboxylation en retire un sous forme de $\\ce{CO2}$."
      },
      {
        "content": "Le bilan final impose 6 carbones.",
        "correct": false,
        "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
      }
    ],
    "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare un acide carboxylique et un dérivé activé pour une réaction de couplage. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'électronégativité du nouveau groupement fragilise la liaison.",
        "correct": true,
        "explanation": "Un substituant électronégatif modifie la polarisation de la fonction acylée et peut faciliter la rupture de la liaison au groupe partant."
      },
      {
        "content": "Le dérivé activé est donc présenté comme plus favorable au couplage.",
        "correct": true,
        "explanation": "Un dérivé activé réagit plus facilement avec un nucléophile, ce qui favorise les réactions de couplage."
      },
      {
        "content": "L’activation diminue le caractère électrophile du carbone acylé.",
        "correct": false,
        "explanation": "L’activation augmente au contraire le caractère électrophile du carbone acylé et facilite l’attaque nucléophile."
      },
      {
        "content": "L'acide est décrit comme peu électrophile.",
        "correct": true,
        "explanation": "La délocalisation électronique du groupe carboxyle rend le carbone d’un acide non activé relativement peu électrophile."
      },
      {
        "content": "Le dérivé activé rend le carbone plus électrophile.",
        "correct": true,
        "explanation": "L’activation augmente le caractère électrophile du carbone acylé et facilite l’attaque d’un nucléophile."
      }
    ],
    "explanation": "Un dérivé activé d’acide remplace le groupe $\\ce{-OH}$ par un groupe plus favorable au départ, ce qui augmente l’électrophilie du carbone acylé et facilite les couplages."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un précurseur nitrile à 6 carbones est hydrolysé jusqu'à l'acide, puis cet acide subit une décarboxylation unique. Quelles propositions sont cohérentes avec les bilans?",
    "choices": [
      {
        "content": "L'hydrolyse passe par une amide.",
        "correct": true,
        "explanation": "L’hydrolyse d’une amide conduit, dans le bilan simplifié, à un acide carboxylique et une amine."
      },
      {
        "content": "L'acide issu de l'hydrolyse conserve 6 carbones dans le schéma simplifié.",
        "correct": true,
        "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire avant de conduire à l’acide carboxylique, sans perte de carbone."
      },
      {
        "content": "La décarboxylation conduit ensuite à un produit organique à 5 carbones.",
        "correct": true,
        "explanation": "Une décarboxylation retire une unité carbone du squelette sous forme de $\\ce{CO2}$."
      },
      {
        "content": "L’hydrolyse du nitrile nécessite l’ajout de $\\ce{CO2}$.",
        "correct": false,
        "explanation": "L’hydrolyse du nitrile n’utilise pas de $\\ce{CO2}$ ; ce réactif intervient dans la carboxylation d’un organomagnésien."
      },
      {
        "content": "L’hydrolyse du nitrile élimine le carbone du groupe nitrile.",
        "correct": false,
        "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire et conserve le carbone du groupe nitrile jusqu’au carboxyle."
      }
    ],
    "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire avant de conduire à l’acide carboxylique, sans perte de carbone."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une base nucléique est exposée à un dérivé halogéné dans le modèle toxicologique. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Ces modifications peuvent être associées à des propriétés mutagènes ou cancérigènes.",
        "correct": true,
        "explanation": "Certains dérivés halogénés électrophiles peuvent réagir avec les sites nucléophiles des bases nucléiques, les modifier et favoriser des effets mutagènes ou cancérigènes."
      },
      {
        "content": "La base nucléique joue le rôle d’électrophile.",
        "correct": false,
        "explanation": "Les bases nucléiques sont décrites comme nucléophiles, tandis que le dérivé halogéné joue le rôle d’électrophile."
      },
      {
        "content": "La base nucléique est le partenaire nucléophile.",
        "correct": true,
        "explanation": "Les sites riches en électrons des bases nucléiques peuvent donner un doublet et se comporter comme des nucléophiles."
      },
      {
        "content": "Le dérivé halogéné est le partenaire électrophile.",
        "correct": true,
        "explanation": "Dans le modèle toxicologique, le dérivé halogéné constitue le partenaire électrophile."
      },
      {
        "content": "Une réaction peut modifier la base nucléique.",
        "correct": true,
        "explanation": "La réaction avec l’électrophile peut modifier covalemment la base nucléique."
      }
    ],
    "explanation": "Certains dérivés halogénés électrophiles peuvent réagir avec les sites nucléophiles des bases nucléiques, les modifier et favoriser des effets mutagènes ou cancérigènes."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un étudiant affirme : « un nucléotide est acide parce que sa base nucléique est un électrophile ». Quelles propositions corrigent cette affirmation ?",
    "choices": [
      {
        "content": "Le phosphate est responsable de l'acidité du nucléotide.",
        "correct": true,
        "explanation": "Le groupement phosphate peut perdre des protons et porter des charges négatives ; il contribue donc à l’acidité du nucléotide."
      },
      {
        "content": "Le phosphate est comparé au carboxylate.",
        "correct": true,
        "explanation": "Le phosphate et le carboxylate sont rapprochés comme groupements susceptibles de porter une charge négative."
      },
      {
        "content": "La phrase initiale attribue donc l'acidité au mauvais groupement.",
        "correct": true,
        "explanation": "Un nucléoside associe une base à un sucre ; l’ajout d’un phosphate forme un nucléotide, dont le phosphate contribue au caractère acide."
      },
      {
        "content": "L’acidité du nucléotide provient du caractère électrophile de sa base nucléique.",
        "correct": false,
        "explanation": "Les bases nucléiques sont décrites comme nucléophiles, tandis que le dérivé halogéné joue le rôle d’électrophile."
      },
      {
        "content": "Les bases nucléiques sont décrites comme nucléophiles, pas comme électrophiles.",
        "correct": true,
        "explanation": "Les sites riches en électrons des bases nucléiques peuvent donner un doublet et se comporter comme des nucléophiles."
      }
    ],
    "explanation": "Un nucléoside associe une base à un sucre ; l’ajout d’un phosphate forme un nucléotide, dont le phosphate contribue au caractère acide."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On veut préparer un acide à 7 carbones sans apporter de carbone extérieur. Quelles voies sont compatibles si l’on dispose du précurseur fonctionnel correspondant à 7 carbones ?",
    "choices": [
      {
        "content": "Hydrolyse d’un nitrile à 6 carbones.",
        "correct": false,
        "explanation": "L’hydrolyse conserve le carbone du nitrile : un nitrile à six carbones conduit à un acide à six carbones, pas à sept."
      },
      {
        "content": "Oxydation d'un alcool primaire.",
        "correct": true,
        "explanation": "Une oxydation suffisamment poussée d’un alcool primaire conduit à l’acide carboxylique correspondant."
      },
      {
        "content": "Hydrolyse d'un ester.",
        "correct": true,
        "explanation": "L’hydrolyse d’un ester régénère l’acide carboxylique du fragment acyle et libère l’alcool correspondant au groupe $\\ce{OR'}$."
      },
      {
        "content": "Hydrolyse d'une amide.",
        "correct": true,
        "explanation": "L’hydrolyse d’une amide conduit, dans le bilan simplifié, à un acide carboxylique et une amine."
      },
      {
        "content": "Carboxylation d'un organomagnésien à 7 carbones.",
        "correct": false,
        "explanation": "Elle donnerait un acide à 8 carbones."
      }
    ],
    "explanation": "Les voies étudiées vers un acide carboxylique comprennent l’oxydation d’un alcool primaire, l’hydrolyse d’un ester ou d’une amide, l’hydrolyse d’un nitrile et la carboxylation d’un organomagnésien."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une molécule organique à 8 carbones perd une molécule de $\\ce{CO2}$ par voie enzymatique. Quelles propositions sont compatibles avec cette décarboxylation ?",
    "choices": [
      {
        "content": "La voie enzymatique est prévue par la définition.",
        "correct": true,
        "explanation": "Une décarboxylation peut être réalisée par voie enzymatique tout en conservant le même bilan global de perte de $\\ce{CO2}$."
      },
      {
        "content": "Le produit organique conserve 8 carbones.",
        "correct": false,
        "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
      },
      {
        "content": "La réaction consomme du $\\ce{CO2}$.",
        "correct": false,
        "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
      },
      {
        "content": "Il s'agit d'une décarboxylation.",
        "correct": true,
        "explanation": "La perte d’une molécule de $\\ce{CO2}$ définit une décarboxylation."
      },
      {
        "content": "Le produit organique compte 7 carbones.",
        "correct": true,
        "explanation": "La perte d’un $\\ce{CO2}$ retire un carbone à la molécule organique : huit carbones deviennent sept."
      }
    ],
    "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Un organomagnésien à 9 carbones est carboxylé par CO2. Combien de carbones possède l'acide final?",
    "answer": {
      "type": "number",
      "value": 10,
      "tolerance": 0
    },
    "explanation": "Le raisonnement repose sur le bilan fonctionnel et le comptage des carbones indiqués dans la transformation."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel type de dérivé d'acide obtient-on, dans la nomenclature, lorsque le groupe OH de RCOOH est remplacé par un halogène X?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "halogénure d'acide",
        "halogenure d'acide",
        "halogénure acide",
        "halogenure acide"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le raisonnement repose sur le bilan fonctionnel et le comptage des carbones indiqués dans la transformation."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions relient correctement les deux définitions de la notion « acide » mobilisées ici ?",
    "choices": [
      {
        "content": "Dans la définition électronique de la partie II, un acide capte des électrons.",
        "correct": true,
        "explanation": "Dans la définition électronique utilisée ici, un acide accepte un doublet d’électrons."
      },
      {
        "content": "Ces deux formulations apparaissent toutes deux.",
        "correct": true,
        "explanation": "Les deux définitions sont mobilisées selon le contexte : une définition protonique et une définition électronique."
      },
      {
        "content": "Une affirmation doit être interprétée à partir des conditions chimiques explicitement indiquées dans la question.",
        "correct": true,
        "explanation": "Dans la définition électronique utilisée ici, une base donne des électrons alors qu’un acide les capte."
      },
      {
        "content": "Les deux définitions de l’acide sont identiques et indépendantes du contexte.",
        "correct": false,
        "explanation": "Dans la définition électronique utilisée ici, une base donne des électrons alors qu’un acide les capte."
      },
      {
        "content": "Un acide carboxylique peut libérer un proton.",
        "correct": true,
        "explanation": "Dans la définition protonique, un acide carboxylique peut céder le proton de son groupe $\\ce{-COOH}$."
      }
    ],
    "explanation": "Dans la définition électronique utilisée ici, une base donne des électrons alors qu’un acide les capte."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un composé riche en électrons au niveau de ses hétéroatomes peut réagir avec un électrophile. Quelles propositions sont compatibles avec le comportement d’une base nucléique ?",
    "choices": [
      {
        "content": "Le composé doit être déficient en électrons.",
        "correct": false,
        "explanation": "Les bases nucléiques comportent des sites riches en électrons qui peuvent donner un doublet et se comporter comme des nucléophiles."
      },
      {
        "content": "Le comportement est celui d'un nucléophile.",
        "correct": true,
        "explanation": "La richesse électronique de certains sites des bases nucléiques leur confère un comportement nucléophile."
      },
      {
        "content": "Des atomes d'azote et d'oxygène sont cités comme constituants riches en électrons.",
        "correct": true,
        "explanation": "Les atomes d’azote et, selon la base, d’oxygène fournissent des sites riches en électrons susceptibles d’être nucléophiles."
      },
      {
        "content": "Une réaction avec un dérivé halogéné électrophile peut modifier la base.",
        "correct": true,
        "explanation": "La réaction d’un dérivé halogéné électrophile avec une base nucléique peut modifier covalemment cette base."
      },
      {
        "content": "Une base nucléique peut être liée à un ribose ou à un 2-désoxyribose dans un nucléoside.",
        "correct": true,
        "explanation": "Les bases nucléiques comportent des atomes riches en électrons, notamment des atomes d’azote et parfois d’oxygène, capables de participer à des réactions nucléophiles."
      }
    ],
    "explanation": "Les bases nucléiques comportent des sites riches en électrons qui peuvent donner un doublet et se comporter comme des nucléophiles."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq propositions correctes.",
    "choices": [
      {
        "content": "Acide carboxylique > alcool > -CH2-CO- dans la hiérarchie d'acidité donnée.",
        "correct": true,
        "explanation": "Dans la hiérarchie étudiée, l’acide carboxylique est plus acide que l’alcool, lui-même plus acide que l’hydrogène en alpha du carbonyle."
      },
      {
        "content": "Un dérivé activé est plus électrophile que l'acide correspondant.",
        "correct": true,
        "explanation": "L’activation rend le carbone acylé plus électrophile que celui de l’acide carboxylique correspondant."
      },
      {
        "content": "Organomagnésien + CO2 → acide avec un carbone de plus.",
        "correct": true,
        "explanation": "Le carbone du $\\ce{CO2}$ devient le carbone du groupe carboxyle, ce qui ajoute une unité carbone au squelette."
      },
      {
        "content": "Une décarboxylation peut être enzymatique.",
        "correct": true,
        "explanation": "Une décarboxylation peut être catalysée par une enzyme tout en correspondant à une perte de $\\ce{CO2}$."
      },
      {
        "content": "Le ribose est associé à l'ARN.",
        "correct": true,
        "explanation": "Le ribose est le pentose caractéristique des nucléosides de la série ARN."
      },
      {
        "content": "Le nitrile est hydrolysé directement en alcool sans intermédiaire.",
        "correct": false,
        "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire et conserve le carbone du groupe nitrile jusqu’au carboxyle."
      },
      {
        "content": "Une décarboxylation consomme CO2.",
        "correct": false,
        "explanation": "Une décarboxylation libère du $\\ce{CO2}$ ; elle ne le consomme pas."
      },
      {
        "content": "Le 2-désoxyribose est associé à l'ARN.",
        "correct": false,
        "explanation": "Le 2-désoxyribose est associé à la série ADN, pas à l’ARN."
      },
      {
        "content": "Le phosphate n'a aucun rôle dans l'acidité des nucléotides.",
        "correct": false,
        "explanation": "Le groupement phosphate contribue au caractère acide des nucléotides."
      },
      {
        "content": "Les bases nucléiques sont décrites comme de bons électrophiles.",
        "correct": false,
        "explanation": "Les bases nucléiques sont décrites comme riches en électrons et nucléophiles, pas comme de bons électrophiles."
      }
    ],
    "explanation": "La synthèse combine hiérarchie d’acidité, activation des acides, carboxylation, décarboxylation, hydrolyse des nitriles et repères sur les acides nucléiques."
  }
];
