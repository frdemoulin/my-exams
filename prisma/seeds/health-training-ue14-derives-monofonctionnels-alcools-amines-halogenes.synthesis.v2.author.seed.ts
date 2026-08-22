import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.4 – Synthèse
 */

export const UE14_CH8_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des principales voies de préparation des alcools étudiées, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un alcool secondaire s’oxyde en aldéhyde dans le modèle étudié.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      },
      {
        "content": "L'hydratation d'un alcène conduit à un alcool.",
        "correct": true,
        "explanation": "L’hydratation ajoute les éléments de l’eau sur un alcène et conduit à une fonction alcool."
      },
      {
        "content": "La réduction d'un aldéhyde par $\\ce{NaBH4}$ conduit à un alcool primaire.",
        "correct": true,
        "explanation": "$\\ce{NaBH4}$ réduit un aldéhyde en alcool primaire."
      },
      {
        "content": "La réduction d'une cétone par $\\ce{NaBH4}$ conduit à un alcool secondaire.",
        "correct": true,
        "explanation": "$\\ce{NaBH4}$ réduit une cétone en alcool secondaire."
      },
      {
        "content": "Un organomagnésien et une cétone peuvent conduire à un alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "L’addition d’un organomagnésien sur une cétone puis hydrolyse conduit à un alcool tertiaire."
      }
    ],
    "explanation": "Les voies étudiées de préparation des alcools comprennent l’hydratation, la réduction et l’addition d’organomagnésiens sur des composés carbonylés."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On transforme la propanone $\\ce{CH3COCH3}$ par $\\ce{NaBH4}$ dans une première expérience, et par $\\ce{CH3MgBr}$ puis hydrolyse dans une seconde. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "La réaction avec le Grignard crée une nouvelle liaison C-C.",
        "correct": true,
        "explanation": "Le groupe méthyle de $\\ce{CH3MgBr}$ se fixe sur le carbone carbonylé de la propanone et crée une nouvelle liaison C-C."
      },
      {
        "content": "Les deux transformations donnent nécessairement le même alcool.",
        "correct": false,
        "explanation": "Les produits diffèrent par leur squelette et leur classe."
      },
      {
        "content": "Avec $\\ce{NaBH4}$, une nouvelle liaison C-C est créée.",
        "correct": false,
        "explanation": "$\\ce{NaBH4}$ réduit le groupe carbonyle sans ajouter de fragment carboné ; la nouvelle liaison C-C est créée dans la réaction avec $\\ce{CH3MgBr}$."
      },
      {
        "content": "Avec $\\ce{NaBH4}$, on obtient un alcool secondaire.",
        "correct": true,
        "explanation": "La propanone est une cétone ; sa réduction par $\\ce{NaBH4}$ conduit donc à un alcool secondaire."
      },
      {
        "content": "Avec $\\ce{CH3MgBr}$, on obtient un alcool tertiaire.",
        "correct": true,
        "explanation": "L’addition de $\\ce{CH3MgBr}$ sur la propanone suivie d’une hydrolyse conduit à un alcool tertiaire."
      }
    ],
    "explanation": "Le $\\ce{NaBH4}$ réduit la propanone en alcool secondaire, tandis que $\\ce{CH3MgBr}$ ajoute un groupe méthyle et conduit après hydrolyse à un alcool tertiaire."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un alcool primaire est soumis successivement à une oxydation douce puis à une oxydation plus poussée. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L'oxydation douce conduit à un aldéhyde.",
        "correct": true,
        "explanation": "Une oxydation douce d’un alcool primaire conduit d’abord à l’aldéhyde correspondant."
      },
      {
        "content": "L'oxydation forte conduit finalement à un acide carboxylique.",
        "correct": true,
        "explanation": "Une oxydation suffisamment poussée d’un alcool primaire dépasse le stade aldéhyde et conduit à l’acide carboxylique."
      },
      {
        "content": "La cétone est l'intermédiaire obligatoire.",
        "correct": false,
        "explanation": "Dans l’oxydation progressive d’un alcool primaire, l’intermédiaire est un aldéhyde ; une cétone n’est pas obligatoire."
      },
      {
        "content": "La classe initiale de l'alcool conditionne les produits.",
        "correct": true,
        "explanation": "La classe initiale de l’alcool détermine les produits accessibles par oxydation."
      },
      {
        "content": "L’oxydation douce conduit directement à un acide carboxylique.",
        "correct": false,
        "explanation": "L’oxydation douce d’un alcool primaire s’arrête au stade aldéhyde ; l’acide carboxylique correspond à une oxydation plus poussée."
      }
    ],
    "explanation": "Un alcool primaire s’oxyde d’abord en aldéhyde puis, si l’oxydation est poursuivie, en acide carboxylique."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La formation d'un hémiacétal est illustrée par la cyclisation des sucres. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le produit est un hémiacétal.",
        "correct": true,
        "explanation": "La réaction intramoléculaire entre une fonction alcool et une fonction aldéhyde d’un sucre peut former un hémiacétal cyclique."
      },
      {
        "content": "Un alcool et un aldéhyde peuvent former un hémiacétal.",
        "correct": true,
        "explanation": "La formation d’un hémiacétal résulte de l’addition d’une fonction alcool sur une fonction aldéhyde."
      },
      {
        "content": "La formation d'un hémiacétal met en jeu une fonction alcool et une fonction aldéhyde dans le bilan simplifié.",
        "correct": true,
        "explanation": "Une fonction alcool s'additionne sur la fonction aldéhyde pour former un hémiacétal."
      },
      {
        "content": "La forme hémiacétalique n'est pas fréquente dans les sucres cyclisés.",
        "correct": false,
        "explanation": "La forme hémiacétalique est au contraire décrite comme fréquente lors de la cyclisation des sucres."
      },
      {
        "content": "La formation d'un hémiacétal correspond à une hydrogénation catalytique.",
        "correct": false,
        "explanation": "La formation d'un hémiacétal n'implique aucune addition de dihydrogène."
      }
    ],
    "explanation": "Une fonction alcool peut réagir avec une fonction aldéhyde pour former un hémiacétal ; cette cyclisation est fréquente pour les sucres."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une amine primaire réagit avec un acide activé dans une synthèse de motif peptidique. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Les fonctions amides sont présentes dans les peptides et les protéines.",
        "correct": true,
        "explanation": "Les peptides et les protéines contiennent des fonctions amides, correspondant notamment aux liaisons peptidiques."
      },
      {
        "content": "Un chlorure d'acide peut être l'acide activé.",
        "correct": true,
        "explanation": "Un chlorure d’acide est un dérivé activé capable d’être attaqué par une amine pour former une amide."
      },
      {
        "content": "La réaction conduit nécessairement à un iminium.",
        "correct": false,
        "explanation": "L'iminium provient d'une amine secondaire avec un carbonyle."
      },
      {
        "content": "Une amine secondaire peut aussi être amidifiée par un acide activé.",
        "correct": true,
        "explanation": "L’amidification concerne aussi une amine secondaire : une amine primaire ou secondaire peut réagir avec un acide activé pour former une amide."
      },
      {
        "content": "Une fonction amide peut être obtenue.",
        "correct": true,
        "explanation": "L'amine attaque le dérivé acylé activé et conduit à la formation d'une fonction amide."
      }
    ],
    "explanation": "Une amine peut réagir avec un acide activé pour former une amide, fonction retrouvée dans les peptides et les protéines."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare la réaction d'une cétone avec une amine primaire puis avec une amine secondaire. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Une amine secondaire réagissant avec un composé carbonylé conduit à une imine neutre dans le bilan étudié.",
        "correct": false,
        "explanation": "Une amine secondaire conduit à un ion iminium avec une cétone, et non à une imine neutre."
      },
      {
        "content": "L'amine primaire ne conduit pas à une imine.",
        "correct": false,
        "explanation": "Une amine primaire conduit bien à une imine avec une cétone ; la proposition affirme l’inverse."
      },
      {
        "content": "L'amine secondaire conduit à un iminium.",
        "correct": true,
        "explanation": "Avec une amine secondaire, la condensation sur une cétone conduit à un ion iminium."
      },
      {
        "content": "De l'eau est formée dans les deux bilans.",
        "correct": true,
        "explanation": "Les condensations d’un composé carbonylé avec une amine primaire ou secondaire s’accompagnent toutes deux d’une élimination d’eau."
      },
      {
        "content": "Ces réactions sont présentées comme irréversibles.",
        "correct": false,
        "explanation": "La formation d’une imine ou d’un iminium est réversible : l’hydrolyse peut régénérer les partenaires de départ."
      }
    ],
    "explanation": "Une cétone donne une imine avec une amine primaire et un iminium avec une amine secondaire ; les deux condensations libèrent de l’eau et sont réversibles."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On part d'un dérivé halogéné $\\ce{R-X}$ puis on ajoute Mg. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le produit peut ensuite réagir avec un carbone électrophile.",
        "correct": true,
        "explanation": "Le carbone de $\\ce{RMgX}$ est nucléophile et peut donc attaquer un carbone électrophile, notamment celui d’un composé carbonylé."
      },
      {
        "content": "Le produit est une amide.",
        "correct": false,
        "explanation": "La réaction de $\\ce{R-X}$ avec Mg forme un organomagnésien ; aucune amine ni acide activé n’intervient pour former une amide."
      },
      {
        "content": "L’eau remplace le magnésium lors de la formation initiale de $\\ce{RMgX}$.",
        "correct": false,
        "explanation": "La formation de $\\ce{RMgX}$ exige Mg ; l’eau n’est pas le réactif qui forme l’organomagnésien à partir de $\\ce{R-X}$."
      },
      {
        "content": "On forme un organomagnésien $\\ce{RMgX}$.",
        "correct": true,
        "explanation": "L’insertion du magnésium dans le dérivé halogéné transforme $\\ce{R-X}$ en organomagnésien $\\ce{RMgX}$."
      },
      {
        "content": "Le carbone de RX, décrit comme électrophile, devient nucléophile dans le Grignard.",
        "correct": true,
        "explanation": "L’insertion de Mg transforme le carbone de $\\ce{R-X}$, électrophile, en carbone nucléophile dans $\\ce{RMgX}$."
      }
    ],
    "explanation": "La réaction de $\\ce{R-X}$ avec Mg forme $\\ce{RMgX}$ ; le carbone du fragment R devient nucléophile et peut ensuite attaquer un carbone électrophile."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions comparent correctement SN1 et SN2 dans le modèle étudié?",
    "choices": [
      {
        "content": "SN1 se déroule en deux temps avec un carbocation plan.",
        "correct": true,
        "explanation": "La SN1 se déroule en deux étapes avec formation intermédiaire d’un carbocation ; elle n’est pas concertée."
      },
      {
        "content": "SN1 ne peut pas conduire à une racémisation.",
        "correct": false,
        "explanation": "Une SN1 peut conduire à une racémisation parce que le carbocation plan peut être attaqué par les deux faces."
      },
      {
        "content": "SN2 est concertée et conduit à une inversion.",
        "correct": true,
        "explanation": "L’attaque arrière du nucléophile en SN2 entraîne une inversion de configuration au centre réactif."
      },
      {
        "content": "SN2 passe obligatoirement par le même carbocation plan que SN1.",
        "correct": false,
        "explanation": "La SN1 passe par un carbocation plan formé après le départ du groupe partant."
      },
      {
        "content": "SN1 peut conduire à une racémisation dans le modèle idéal.",
        "correct": true,
        "explanation": "Le carbocation plan formé en SN1 peut être attaqué par les deux faces, ce qui permet une racémisation."
      }
    ],
    "explanation": "La SN1 se déroule en deux étapes avec formation intermédiaire d’un carbocation ; elle n’est pas concertée."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On souhaite relier trois transformations considérées : alcool → dérivé halogéné → organomagnésien → alcool. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Cette séquence interdit toute création de liaison C-C.",
        "correct": false,
        "explanation": "La dernière étape faisant intervenir $\\ce{RMgX}$ et un carbonyle crée précisément une nouvelle liaison C-C."
      },
      {
        "content": "La formation de $\\ce{RMgX}$ se fait directement à partir de l’alcool sans dérivé halogéné.",
        "correct": false,
        "explanation": "La séquence passe par un dérivé halogéné : l’alcool est d’abord transformé en $\\ce{R-X}$, puis Mg permet d’obtenir $\\ce{RMgX}$."
      },
      {
        "content": "Un agent halogénant peut convertir l'alcool en RX.",
        "correct": true,
        "explanation": "Un agent halogénant remplace le groupe $\\ce{-OH}$ de l’alcool par un halogène et forme le dérivé $\\ce{R-X}$."
      },
      {
        "content": "Mg convertit RX en RMgX.",
        "correct": true,
        "explanation": "L’insertion du magnésium dans la liaison carbone–halogène transforme $\\ce{R-X}$ en organomagnésien $\\ce{RMgX}$."
      },
      {
        "content": "RMgX peut réagir avec une cétone puis, après hydrolyse, donner un alcool tertiaire.",
        "correct": true,
        "explanation": "Le carbone nucléophile de $\\ce{RMgX}$ s’ajoute sur la cétone et l’hydrolyse finale conduit à un alcool tertiaire."
      }
    ],
    "explanation": "La séquence alcool → dérivé halogéné → organomagnésien → alcool associe halogénation, formation du Grignard puis addition sur un carbonyle suivie d’une hydrolyse."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Alcool primaire + oxydation douce → aldéhyde.",
        "correct": true,
        "explanation": "Une oxydation douce d’un alcool primaire conduit à un aldéhyde."
      },
      {
        "content": "Alcool secondaire + oxydation → cétone.",
        "correct": true,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      },
      {
        "content": "Amine primaire + carbonyle → imine.",
        "correct": true,
        "explanation": "La réaction de condensation associe les deux fonctions et s’accompagne ici d’une élimination d’eau."
      },
      {
        "content": "RX + Mg → RMgX.",
        "correct": true,
        "explanation": "Le magnésium transforme le dérivé halogéné $\\ce{R-X}$ en organomagnésien $\\ce{RMgX}$ ; la nouvelle liaison C-C sera créée lors d’une réaction ultérieure avec un carbone électrophile."
      },
      {
        "content": "SN2 → inversion de configuration dans le modèle étudié.",
        "correct": true,
        "explanation": "La SN2 est associée à une inversion de configuration au centre réactif."
      },
      {
        "content": "Alcool tertiaire + oxydation simple → aldéhyde.",
        "correct": false,
        "explanation": "Dans le modèle étudié, un alcool tertiaire est insensible à l’oxydation considérée et ne donne donc pas d’aldéhyde."
      },
      {
        "content": "Amine secondaire + carbonyle → imine.",
        "correct": false,
        "explanation": "Une amine secondaire avec un composé carbonylé forme un iminium ; l’imine est associée à une amine primaire."
      },
      {
        "content": "SN1 est concertée.",
        "correct": false,
        "explanation": "La SN1 n’est pas concertée : elle passe par deux étapes avec formation d’un carbocation intermédiaire."
      },
      {
        "content": "RMgX est un électrophile carboné.",
        "correct": false,
        "explanation": "Le carbone de $\\ce{RMgX}$ est riche en électrons et se comporte comme un nucléophile, pas comme un électrophile."
      },
      {
        "content": "Alcool + déshydratation → amide.",
        "correct": false,
        "explanation": "La déshydratation d’un alcool forme un alcène et de l’eau, pas une amide."
      }
    ],
    "explanation": "Les cinq associations correctes résument l’oxydation des alcools, la formation d’une imine, la préparation d’un organomagnésien et la stéréochimie de la SN2."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On part de la propanone. Quelle séquence permet, avec les réactions considérées, d'obtenir d'abord un alcool puis de recréer une fonction carbonyle?",
    "choices": [
      {
        "content": "La réduction d’une cétone par $\\ce{NaBH4}$ conduit à un alcool tertiaire.",
        "correct": false,
        "explanation": "Une cétone réduite par $\\ce{NaBH4}$ donne un alcool secondaire."
      },
      {
        "content": "Réduction par $\\ce{NaBH4}$ → propan-2-ol.",
        "correct": true,
        "explanation": "$\\ce{NaBH4}$ réduit la propanone, une cétone, en propan-2-ol, qui est un alcool secondaire."
      },
      {
        "content": "Oxydation du propan-2-ol → propanone.",
        "correct": true,
        "explanation": "L’oxydation d’un alcool secondaire comme le propan-2-ol conduit à la cétone correspondante."
      },
      {
        "content": "La séquence est réversible au sens synthétique avec des réactifs différents.",
        "correct": true,
        "explanation": "Réduction puis oxydation font circuler entre les deux fonctions."
      },
      {
        "content": "L'étape d'oxydation donne un aldéhyde.",
        "correct": false,
        "explanation": "Le propan-2-ol est secondaire ; son oxydation conduit à une cétone et non à un aldéhyde."
      }
    ],
    "explanation": "Le $\\ce{NaBH4}$ réduit la propanone en alcool secondaire ; l’oxydation de cet alcool permet de reformer une cétone."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare l'action d'un organomagnésien sur un aldéhyde, une cétone et un ester. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Ester → alcool tertiaire après deux réactions de l'organomagnésien.",
        "correct": true,
        "explanation": "Avec un ester, deux additions successives de l’organomagnésien sont nécessaires avant l’hydrolyse qui donne l’alcool tertiaire."
      },
      {
        "content": "Dans les trois cas, le Grignard ne crée aucune liaison C-C.",
        "correct": false,
        "explanation": "Dans chaque réaction avec un aldéhyde, une cétone ou un ester, le fragment carboné du Grignard forme une nouvelle liaison C-C."
      },
      {
        "content": "Dans les trois cas, une hydrolyse finale est utilisée pour obtenir l’alcool.",
        "correct": true,
        "explanation": "Les bilans avec aldéhyde, cétone et ester comportent une hydrolyse finale permettant d’obtenir l’alcool."
      },
      {
        "content": "Aldéhyde → alcool secondaire après hydrolyse.",
        "correct": true,
        "explanation": "Un aldéhyde réagit avec un organomagnésien pour donner, après hydrolyse, un alcool secondaire."
      },
      {
        "content": "Cétone → alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Une cétone réagit avec un organomagnésien pour donner, après hydrolyse, un alcool tertiaire."
      }
    ],
    "explanation": "Avec un organomagnésien, un aldéhyde donne un alcool secondaire, une cétone un alcool tertiaire et un ester un alcool tertiaire après deux additions."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé halogéné chiral donne après substitution un mélange racémique. Quelle interprétation est cohérente avec ce résultat ?",
    "choices": [
      {
        "content": "Une voie SN1 est compatible.",
        "correct": true,
        "explanation": "Une voie SN1 est compatible car elle passe par un carbocation plan susceptible d’être attaqué par les deux faces."
      },
      {
        "content": "Le nucléophile a pu attaquer les deux faces de l'intermédiaire.",
        "correct": true,
        "explanation": "L’attaque possible sur les deux faces du carbocation permet de former les deux énantiomères."
      },
      {
        "content": "Un carbocation plan a pu être formé.",
        "correct": true,
        "explanation": "La présence d’un carbocation plan est cohérente avec une SN1 et avec la racémisation observée."
      },
      {
        "content": "Une SN2 idéale seule expliquerait ce mélange 50/50.",
        "correct": false,
        "explanation": "Une SN2 donne un seul produit inversé dans le modèle idéal ; elle ne produit pas un mélange racémique 50/50."
      },
      {
        "content": "Une SN1 est décrite comme un mécanisme concerté en une seule étape.",
        "correct": false,
        "explanation": "La SN1 est un mécanisme en deux étapes passant par un carbocation ; elle n’est donc pas concertée."
      }
    ],
    "explanation": "Une voie SN1 est compatible car elle passe par un carbocation plan susceptible d’être attaqué par les deux faces."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé halogéné chiral donne un seul produit avec inversion de configuration. Quelles propositions sont cohérentes?",
    "choices": [
      {
        "content": "Une racémisation est nécessairement obtenue.",
        "correct": false,
        "explanation": "Une racémisation donnerait deux énantiomères ; elle est incompatible avec l’observation d’un seul produit inversé."
      },
      {
        "content": "Un mécanisme passant par un carbocation plan est nécessaire pour obtenir ce produit unique inversé.",
        "correct": false,
        "explanation": "Un carbocation plan caractérise la SN1 et favorise la racémisation ; un produit unique inversé est au contraire compatible avec une SN2."
      },
      {
        "content": "Une voie SN2 n’est pas compatible.",
        "correct": false,
        "explanation": "Un produit unique avec inversion est précisément compatible avec une SN2 ; la proposition affirme l’inverse."
      },
      {
        "content": "Le mécanisme peut être concerté.",
        "correct": true,
        "explanation": "Un produit inversé unique est compatible avec une SN2, qui se déroule de manière concertée."
      },
      {
        "content": "L'asymétrie du centre peut être conservée.",
        "correct": true,
        "explanation": "Le centre reste chiral si les substituants restent différents."
      }
    ],
    "explanation": "Un produit unique avec inversion de configuration est compatible avec une SN2 et non avec une racémisation de type SN1."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos du même carbone avant et après formation d'un Grignard à partir de $\\ce{RCH2-X}$:",
    "choices": [
      {
        "content": "Dans RMgX, il est décrit comme nucléophile.",
        "correct": true,
        "explanation": "Après insertion de Mg, le carbone de $\\ce{RMgX}$ porte un caractère négatif et se comporte comme un nucléophile."
      },
      {
        "content": "La transformation constitue un renversement de polarité dans le raisonnement.",
        "correct": true,
        "explanation": "L’insertion de Mg inverse le caractère du carbone : électrophile dans $\\ce{R-X}$, il devient nucléophile dans $\\ce{RMgX}$."
      },
      {
        "content": "Dans les deux espèces, il est nécessairement un carbocation libre.",
        "correct": false,
        "explanation": "Ni le carbone de $\\ce{R-X}$ ni celui de $\\ce{RMgX}$ n’est décrit comme un carbocation libre dans cette comparaison de polarité."
      },
      {
        "content": "L’insertion de Mg ne modifie pas le caractère électronique de ce carbone.",
        "correct": false,
        "explanation": "Le carbone est électrophile dans $\\ce{R-X}$ puis devient nucléophile dans $\\ce{RMgX}$ : son caractère électronique est donc inversé."
      },
      {
        "content": "Dans RX, il est décrit comme électrophile.",
        "correct": true,
        "explanation": "La polarisation de la liaison carbone–halogène rend le carbone lié à l’halogène électrophile."
      }
    ],
    "explanation": "Le carbone de $\\ce{R-X}$ est électrophile ; après insertion de Mg dans $\\ce{RMgX}$, il devient nucléophile."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un chlorure d'acide $\\ce{R-COCl}$ peut servir d'acide activé dans deux types de transformation. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Un alcool peut réagir avec un acide activé pour former un ester.",
        "correct": true,
        "explanation": "Le chlorure d’acyle ou l’anhydride d’acide fournit un carbone acylé suffisamment réactif pour former l’ester."
      },
      {
        "content": "Avec un alcool, il ne peut pas conduire à un ester.",
        "correct": false,
        "explanation": "Un chlorure d’acyle peut réagir avec un alcool pour former un ester ; la proposition nie cette réactivité."
      },
      {
        "content": "Avec une amine primaire ou secondaire, il peut conduire à une amide.",
        "correct": true,
        "explanation": "Une amine primaire ou secondaire peut attaquer un chlorure d’acyle pour former une amide."
      },
      {
        "content": "Dans les deux cas, le chlorure d’acyle fournit le groupe acyle du produit.",
        "correct": true,
        "explanation": "Le groupe acyle du chlorure d’acyle est retrouvé dans la fonction ester ou amide formée."
      },
      {
        "content": "Il conduit toujours à un organomagnésien sans Mg.",
        "correct": false,
        "explanation": "La formation de Grignard requiert un dérivé halogéné carboné et Mg."
      }
    ],
    "explanation": "Un chlorure d’acyle est un acide activé pouvant réagir avec un alcool pour former un ester ou avec une amine primaire/secondaire pour former une amide."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un alcool primaire peut subir deux transformations très différentes. Quelles propositions les distinguent?",
    "choices": [
      {
        "content": "Les deux réactions produisent nécessairement le même groupe fonctionnel.",
        "correct": false,
        "explanation": "L’oxydation forte d’un alcool primaire donne un acide carboxylique, tandis que sa déshydratation donne un alcène : les fonctions finales diffèrent."
      },
      {
        "content": "Le choix du réactif/conditions détermine donc la voie.",
        "correct": true,
        "explanation": "Selon les réactifs, un alcool primaire peut être oxydé ou déshydraté ; les conditions choisies déterminent donc le produit final."
      },
      {
        "content": "Une oxydation douce d’un alcool primaire conduit directement à un acide carboxylique.",
        "correct": false,
        "explanation": "Une oxydation douce d’un alcool primaire conduit d’abord à un aldéhyde ; l’acide carboxylique nécessite une oxydation plus poussée."
      },
      {
        "content": "Oxydation forte → acide carboxylique.",
        "correct": true,
        "explanation": "Une oxydation suffisamment poussée d’un alcool primaire conduit à un acide carboxylique."
      },
      {
        "content": "Déshydratation → alcène + eau.",
        "correct": true,
        "explanation": "La déshydratation d’un alcool élimine une molécule d’eau et forme un alcène."
      }
    ],
    "explanation": "Une oxydation forte d’un alcool primaire conduit à un acide carboxylique, tandis qu’une déshydratation conduit à un alcène et à de l’eau."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé halogéné $\\ce{R-X}$ peut participer à plusieurs transformations étudiées. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Avec Mg, il ne peut pas former un organomagnésien.",
        "correct": false,
        "explanation": "Un dérivé halogéné peut réagir avec Mg pour former un organomagnésien $\\ce{RMgX}$ ; la proposition nie cette voie."
      },
      {
        "content": "Avec un nucléophile, il peut subir une substitution.",
        "correct": true,
        "explanation": "Dans une substitution nucléophile, le nucléophile attaque le carbone électrophile de $\\ce{R-X}$ et remplace X."
      },
      {
        "content": "Avec l'ammoniac, il peut participer à la formation d'une amine primaire.",
        "correct": true,
        "explanation": "L’ammoniac attaque le carbone électrophile d’un dérivé halogéné ; une première alkylation conduit à une amine primaire."
      },
      {
        "content": "Il ne peut participer qu’à une seule des transformations considérées.",
        "correct": false,
        "explanation": "$\\ce{R-X}$ peut subir plusieurs transformations : substitution nucléophile, alkylation d’une amine ou formation d’un organomagnésien avec Mg."
      },
      {
        "content": "Avec Mg, $\\ce{R-X}$ donne directement un alcool sans former d’organomagnésien.",
        "correct": false,
        "explanation": "Avec Mg, $\\ce{R-X}$ forme d’abord $\\ce{RMgX}$ ; l’obtention d’un alcool nécessite ensuite une réaction adaptée puis une hydrolyse."
      }
    ],
    "explanation": "Un dérivé halogéné $\\ce{R-X}$ peut subir une substitution nucléophile, réagir avec l’ammoniac pour former une amine ou réagir avec Mg pour former un organomagnésien."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de la réaction d’un organomagnésien avec un ester, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Aucune hydrolyse n'est nécessaire dans le bilan.",
        "correct": false,
        "explanation": "Après l’addition de l’organomagnésien sur l’ester, une hydrolyse finale est nécessaire pour protoner l’intermédiaire et obtenir l’alcool."
      },
      {
        "content": "Un organomagnésien apporte un groupe carboné nucléophile au carbone électrophile du carbonyle.",
        "correct": true,
        "explanation": "Le carbone porté par le réactif de Grignard forme une nouvelle liaison carbone-carbone avec le carbone du carbonyle."
      },
      {
        "content": "L'organomagnésien réagit deux fois avec l'ester.",
        "correct": true,
        "explanation": "Avec un ester, deux additions successives du même organomagnésien sont nécessaires avant l’hydrolyse finale."
      },
      {
        "content": "Le substituant apporté par le Grignard apparaît deux fois dans l'alcool final.",
        "correct": true,
        "explanation": "Deux additions du même organomagnésien sur l’ester expliquent que le substituant qu’il apporte apparaisse deux fois dans l’alcool final."
      },
      {
        "content": "Le produit final est un alcool tertiaire.",
        "correct": true,
        "explanation": "Après les deux additions puis l’hydrolyse, l’ester conduit à un alcool tertiaire."
      }
    ],
    "explanation": "Avec un ester, deux additions successives de l’organomagnésien sont nécessaires avant l’hydrolyse qui conduit à l’alcool tertiaire."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une amine secondaire et une amine primaire sont mises séparément en présence du même aldéhyde. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L'amine secondaire peut donner un iminium.",
        "correct": true,
        "explanation": "Une amine secondaire réagissant avec un aldéhyde conduit à un ion iminium dans le bilan étudié."
      },
      {
        "content": "Les deux bilans font apparaître de l'eau.",
        "correct": true,
        "explanation": "La réaction de condensation associe les deux fonctions et s’accompagne ici d’une élimination d’eau."
      },
      {
        "content": "Les deux réactions sont présentées comme réversibles.",
        "correct": true,
        "explanation": "Les imines et les ions iminium peuvent être hydrolysés ; leurs condensations avec le carbonyle sont donc réversibles."
      },
      {
        "content": "Une amine secondaire réagissant avec un composé carbonylé conduit à une imine neutre dans le bilan étudié.",
        "correct": false,
        "explanation": "Une amine secondaire réagissant avec un aldéhyde forme un iminium, et non une imine neutre."
      },
      {
        "content": "L'amine primaire peut donner une imine.",
        "correct": true,
        "explanation": "Une amine primaire réagissant avec un aldéhyde conduit à une imine."
      }
    ],
    "explanation": "Une amine primaire forme une imine avec un aldéhyde, tandis qu’une amine secondaire forme un iminium ; les deux condensations libèrent de l’eau et sont réversibles."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux transformations formant directement un ester ou une amide contenant encore un groupe carbonyle.",
    "choices": [
      {
        "content": "Alcool + chlorure d’acyle → ammonium quaternaire.",
        "correct": false,
        "explanation": "Un alcool réagit avec un chlorure d’acyle pour former un ester ; aucun ammonium quaternaire n’est formé."
      },
      {
        "content": "Alcool + chlorure d'acyle → ester.",
        "correct": true,
        "explanation": "Un alcool réagissant avec un chlorure d’acyle forme un ester qui conserve le groupe carbonyle du fragment acyle."
      },
      {
        "content": "Amine + chlorure d'acide → amide.",
        "correct": true,
        "explanation": "Une amine réagissant avec un chlorure d’acide forme une amide qui conserve le groupe carbonyle du fragment acyle."
      },
      {
        "content": "RX + Mg → RMgX.",
        "correct": false,
        "explanation": "La réaction $\\ce{R-X + Mg -> RMgX}$ forme un organomagnésien et ne produit ni ester ni amide."
      },
      {
        "content": "SN2 sur RX → R-Nu.",
        "correct": false,
        "explanation": "La présence d'un carbonyle dépendrait du nucléophile, elle n'est pas intrinsèque au bilan."
      }
    ],
    "explanation": "L’estérification et l’amidification avec un chlorure d’acyle conduisent respectivement à un ester et à une amide, deux fonctions qui conservent le groupe carbonyle acyle."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Aldéhyde + $\\ce{NaBH4}$ → alcool primaire.",
        "correct": true,
        "explanation": "$\\ce{NaBH4}$ réduit un aldéhyde en alcool primaire."
      },
      {
        "content": "Cétone + organomagnésien → alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Le réactif organomagnésien apporte un groupe carboné nucléophile qui crée une nouvelle liaison carbone-carbone."
      },
      {
        "content": "Alcool primaire + oxydation douce → aldéhyde.",
        "correct": true,
        "explanation": "Une oxydation douce d’un alcool primaire conduit à l’aldéhyde correspondant."
      },
      {
        "content": "Amine primaire + carbonyle → imine.",
        "correct": true,
        "explanation": "La réaction de condensation associe les deux fonctions et s’accompagne ici d’une élimination d’eau."
      },
      {
        "content": "SN1 peut racémiser un centre chiral dans le modèle étudié.",
        "correct": true,
        "explanation": "Le carbocation plan peut être attaqué par les deux faces, ce qui conduit à une racémisation dans le modèle idéal."
      },
      {
        "content": "Alcool tertiaire + oxydation → acide carboxylique dans le modèle simplifié.",
        "correct": false,
        "explanation": "Un alcool tertiaire est décrit comme insensible à l’oxydation considérée ; il ne conduit pas à un acide carboxylique."
      },
      {
        "content": "Amine secondaire + carbonyle → imine.",
        "correct": false,
        "explanation": "Une amine secondaire avec un composé carbonylé forme un iminium ; la formation d’une imine correspond à une amine primaire."
      },
      {
        "content": "SN2 passe par un carbocation plan.",
        "correct": false,
        "explanation": "La SN2 est concertée et ne passe pas par un carbocation libre."
      },
      {
        "content": "RMgX est obtenu par hydrolyse de RX.",
        "correct": false,
        "explanation": "$\\ce{RMgX}$ est obtenu par réaction de $\\ce{R-X}$ avec Mg ; l’hydrolyse intervient ensuite dans les réactions donnant des alcools."
      },
      {
        "content": "Ammonium quaternaire = amine tertiaire neutre.",
        "correct": false,
        "explanation": "Une amine tertiaire est neutre et porte trois substituants carbonés ; un ammonium quaternaire en porte quatre et est chargé positivement."
      }
    ],
    "explanation": "Les propositions mobilisent la préparation et l’oxydation des alcools, les réactions des amines, les organomagnésiens et les substitutions nucléophiles."}
];
