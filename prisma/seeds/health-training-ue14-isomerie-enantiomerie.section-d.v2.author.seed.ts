import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.2 – Section D – Configuration absolue R/S et règles CIP
 */

export const UE14_CH6_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 61,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Selon les règles de Cahn-Ingold-Prelog (CIP), quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "On compare d'abord les numéros atomiques des atomes directement liés au centre.",
        "correct": true,
        "explanation": "Numéro atomique plus élevé = priorité plus élevée."
      },
      {
        "content": "Dans la série H, C, N, O, l'ordre est O > N > C > H.",
        "correct": true,
        "explanation": "8 > 7 > 6 > 1."
      },
      {
        "content": "Le groupe de rang 4 est le moins prioritaire.",
        "correct": true,
        "explanation": "On oriente ensuite l'observation par rapport à lui."
      },
      {
        "content": "La priorité dépend uniquement de la masse molaire du groupe complet.",
        "correct": false,
        "explanation": "La comparaison est locale et séquentielle."
      }
    ],
    "explanation": "Les règles CIP classent les substituants par numéro atomique au premier point de différence."
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Autour d'un centre lié directement à O, N, C et H, quel substituant a la priorité la plus élevée ?",
    "choices": [
      {
        "content": "O.",
        "correct": true,
        "explanation": "Z=8 est le plus élevé."
      },
      {
        "content": "N.",
        "correct": false,
        "explanation": "Z=7."
      },
      {
        "content": "C.",
        "correct": false,
        "explanation": "Z=6."
      },
      {
        "content": "H.",
        "correct": false,
        "explanation": "Z=1."
      }
    ],
    "explanation": "Le numéro atomique de l'atome directement lié décide ici immédiatement."
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "En cas d'égalité entre deux substituants commençant tous deux par un carbone :",
    "choices": [
      {
        "content": "On compare les atomes liés à ces carbones.",
        "correct": true,
        "explanation": "On progresse d'un niveau."
      },
      {
        "content": "On s'arrête au premier point de différence.",
        "correct": true,
        "explanation": "C'est le principe de la comparaison CIP."
      },
      {
        "content": "On choisit toujours le groupe le plus long.",
        "correct": false,
        "explanation": "La longueur totale n'est pas le critère direct."
      },
      {
        "content": "On additionne tous les numéros atomiques du substituant.",
        "correct": false,
        "explanation": "On ne fait pas de somme globale."
      }
    ],
    "explanation": "La comparaison est lexicographique par niveaux successifs d'atomes."
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Lorsque deux isotopes d'un même élément doivent être départagés :",
    "choices": [
      {
        "content": "L'isotope de masse atomique la plus élevée est prioritaire.",
        "correct": true,
        "explanation": "C'est la règle indiquée dans la fiche."
      },
      {
        "content": "Le numéro atomique ne les départage pas puisqu'il est identique.",
        "correct": true,
        "explanation": "Ils appartiennent au même élément."
      },
      {
        "content": "$\\ce{^{2}H}$ est prioritaire sur $\\ce{^{1}H}$.",
        "correct": true,
        "explanation": "Le deutérium a la masse isotopique la plus élevée."
      },
      {
        "content": "Les isotopes ont toujours la même priorité.",
        "correct": false,
        "explanation": "La masse permet de les classer."
      }
    ],
    "explanation": "Après égalité de numéro atomique, la masse isotopique départage les isotopes."
  },
  {
    "order": 65,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans les règles CIP, une liaison multiple est traitée de façon formelle comme si :",
    "choices": [
      {
        "content": "Les atomes engagés étaient dupliqués ou tripliqués pour la comparaison.",
        "correct": true,
        "explanation": "C'est la convention CIP."
      },
      {
        "content": "Le groupe carbonyle pouvait ainsi être comparé correctement à un carbone saturé.",
        "correct": true,
        "explanation": "La duplication des O intervient au niveau suivant."
      },
      {
        "content": "Toute double liaison donnait automatiquement la priorité maximale.",
        "correct": false,
        "explanation": "Il faut toujours comparer les numéros atomiques."
      },
      {
        "content": "On ignorait complètement les atomes liés par double liaison.",
        "correct": false,
        "explanation": "Ils sont au contraire pris en compte de façon formelle."
      }
    ],
    "explanation": "La convention de duplication permet de comparer de façon cohérente les liaisons multiples."
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour l'alanine $\\ce{NH2-CH(CH3)-COOH}$, l'ordre CIP autour du carbone α est :",
    "choices": [
      {
        "content": "$\\ce{NH2}$ > $\\ce{COOH}$ > $\\ce{CH3}$ > H.",
        "correct": true,
        "explanation": "N est premier ; entre les deux C, le carboxyle l'emporte ; H est dernier."
      },
      {
        "content": "H est de rang 4.",
        "correct": true,
        "explanation": "Plus faible numéro atomique."
      },
      {
        "content": "$\\ce{CH3}$ est prioritaire sur $\\ce{COOH}$.",
        "correct": false,
        "explanation": "Le carbone carboxylique est lié formellement à O,O,O."
      },
      {
        "content": "$\\ce{COOH}$ est prioritaire sur $\\ce{NH2}$.",
        "correct": false,
        "explanation": "N directement lié (Z=7) bat C (Z=6)."
      }
    ],
    "explanation": "C'est le classement donné dans l'application du cours."
  },
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour la sérine $\\ce{NH2-CH(CH2OH)-COOH}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'ordre est $\\ce{NH2}$ > $\\ce{COOH}$ > $\\ce{CH2OH}$ > H.",
        "correct": true,
        "explanation": "Classement attendu dans la fiche."
      },
      {
        "content": "H est de rang 4.",
        "correct": true,
        "explanation": "Il est le moins prioritaire."
      },
      {
        "content": "$\\ce{CH2OH}$ est prioritaire sur $\\ce{COOH}$.",
        "correct": false,
        "explanation": "Le carboxyle gagne au niveau suivant."
      },
      {
        "content": "$\\ce{NH2}$ est de rang 1.",
        "correct": true,
        "explanation": "N directement lié a Z=7."
      }
    ],
    "explanation": "Le carboxyle reste prioritaire sur CH2OH après égalité initiale sur C."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour la cystéine $\\ce{NH2-CH(CH2SH)-COOH}$ :",
    "choices": [
      {
        "content": "L'ordre CIP est $\\ce{NH2}$ > $\\ce{CH2SH}$ > $\\ce{COOH}$ > H.",
        "correct": true,
        "explanation": "Le soufre au niveau suivant donne l'avantage à CH2SH."
      },
      {
        "content": "$\\ce{CH2SH}$ est prioritaire sur $\\ce{COOH}$.",
        "correct": true,
        "explanation": "S (16) apparaît au premier point de différence pertinent."
      },
      {
        "content": "H est de rang 4.",
        "correct": true,
        "explanation": "Comme pour les autres acides aminés cités."
      },
      {
        "content": "La cystéine suit forcément le même ordre COOH > chaîne latérale que la sérine.",
        "correct": false,
        "explanation": "Le soufre inverse l'ordre relatif."
      }
    ],
    "explanation": "La cystéine est le piège classique : la présence du soufre modifie la priorité de la chaîne latérale."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Si le substituant de rang 4 est orienté vers l'arrière et que le trajet 1 → 2 → 3 est horaire, la configuration est :",
    "choices": [
      {
        "content": "R.",
        "correct": true,
        "explanation": "Avec le groupe 4 derrière, horaire = R."
      },
      {
        "content": "S.",
        "correct": false,
        "explanation": "S correspondrait à un trajet antihoraire."
      },
      {
        "content": "E.",
        "correct": false,
        "explanation": "E/Z concerne une double liaison."
      },
      {
        "content": "Indéterminable.",
        "correct": false,
        "explanation": "Toutes les informations utiles sont données."
      }
    ],
    "explanation": "R se lit directement lorsque le groupe de rang 4 pointe vers l'arrière."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Si le substituant de rang 4 est orienté vers l'arrière et que le trajet 1 → 2 → 3 est antihoraire, la configuration est :",
    "choices": [
      {
        "content": "S.",
        "correct": true,
        "explanation": "Avec le groupe 4 derrière, antihoraire = S."
      },
      {
        "content": "R.",
        "correct": false,
        "explanation": "R serait horaire."
      },
      {
        "content": "Z.",
        "correct": false,
        "explanation": "Z concerne les doubles liaisons."
      },
      {
        "content": "Toujours racémique.",
        "correct": false,
        "explanation": "R/S décrit une molécule, pas la composition d'un mélange."
      }
    ],
    "explanation": "L'orientation du groupe 4 doit toujours être vérifiée avant de conclure."
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Entre les substituants $\\ce{OH}$, $\\ce{NH2}$, $\\ce{COOH}$ et H directement liés au centre, quel ordre commence correctement ?",
    "choices": [
      {
        "content": "$\\ce{OH}$ > $\\ce{NH2}$ > $\\ce{COOH}$ > H.",
        "correct": true,
        "explanation": "O > N > C > H au premier atome."
      },
      {
        "content": "$\\ce{COOH}$ > $\\ce{OH}$ > $\\ce{NH2}$ > H.",
        "correct": false,
        "explanation": "Le carbone du COOH a Z=6."
      },
      {
        "content": "H > $\\ce{OH}$ > $\\ce{NH2}$ > $\\ce{COOH}$.",
        "correct": false,
        "explanation": "H est le moins prioritaire."
      },
      {
        "content": "$\\ce{NH2}$ > $\\ce{OH}$ > H > $\\ce{COOH}$.",
        "correct": false,
        "explanation": "O bat N."
      }
    ],
    "explanation": "Quand les premiers atomes sont différents, le classement est immédiat."
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi $\\ce{CH2Cl}$, $\\ce{CH2OH}$, $\\ce{CH2CH3}$ et $\\ce{CH3}$, quel ordre CIP est correct ?",
    "choices": [
      {
        "content": "$\\ce{CH2Cl}$ > $\\ce{CH2OH}$ > $\\ce{CH2CH3}$ > $\\ce{CH3}$.",
        "correct": true,
        "explanation": "Après C/C : Cl > O > C > H au premier point de différence."
      },
      {
        "content": "$\\ce{CH3}$ > $\\ce{CH2CH3}$ > $\\ce{CH2OH}$ > $\\ce{CH2Cl}$.",
        "correct": false,
        "explanation": "Ordre inversé."
      },
      {
        "content": "$\\ce{CH2OH}$ > $\\ce{CH2Cl}$ > $\\ce{CH3}$ > $\\ce{CH2CH3}$.",
        "correct": false,
        "explanation": "Cl bat O."
      },
      {
        "content": "Les quatre groupes ont la même priorité.",
        "correct": false,
        "explanation": "Les niveaux suivants les départagent."
      }
    ],
    "explanation": "Cette série entraîne la comparaison de substituants commençant tous par C."
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Entre $\\ce{COOH}$ et $\\ce{CH2OH}$, quel groupe est prioritaire autour d'un centre chiral ?",
    "choices": [
      {
        "content": "$\\ce{COOH}$.",
        "correct": true,
        "explanation": "Le carbone carboxylique est comparé comme lié à O,O,O contre O,H,H."
      },
      {
        "content": "$\\ce{CH2OH}$.",
        "correct": false,
        "explanation": "Il perd au second atome comparé."
      },
      {
        "content": "Ils sont toujours égaux.",
        "correct": false,
        "explanation": "La convention de liaison multiple les départage."
      },
      {
        "content": "La priorité dépend du signe du pouvoir rotatoire.",
        "correct": false,
        "explanation": "Aucun lien."
      }
    ],
    "explanation": "La convention CIP des doubles liaisons explique COOH > CH2OH."
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La figure représente l'alanine : ![Alanine](/images/training/ue14/isomerie-enantiomerie/figure-d3-alanine.svg)\n\nQuelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'ordre est $\\ce{NH2}$ > $\\ce{COOH}$ > $\\ce{CH3}$ > H.",
        "correct": true,
        "explanation": "Ordre CIP de l'alanine."
      },
      {
        "content": "H est orienté vers l'arrière dans la figure.",
        "correct": true,
        "explanation": "La liaison hachurée correspond à H."
      },
      {
        "content": "Le trajet 1 → 2 → 3 est antihoraire.",
        "correct": true,
        "explanation": "Lecture de la figure."
      },
      {
        "content": "La configuration représentée est S.",
        "correct": true,
        "explanation": "Antihoraire avec H derrière = S."
      }
    ],
    "explanation": "La figure reproduit l'application pédagogique de la fiche : alanine S."
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La figure représente la sérine : ![Sérine](/images/training/ue14/isomerie-enantiomerie/figure-d4-serine.svg)\n\nQuelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'ordre est $\\ce{NH2}$ > $\\ce{COOH}$ > $\\ce{CH2OH}$ > H.",
        "correct": true,
        "explanation": "Ordre CIP."
      },
      {
        "content": "H est le substituant de rang 4.",
        "correct": true,
        "explanation": "Le moins prioritaire."
      },
      {
        "content": "La configuration représentée est S.",
        "correct": true,
        "explanation": "La figure est construite pour ce cas."
      },
      {
        "content": "$\\ce{CH2OH}$ est prioritaire sur $\\ce{COOH}$.",
        "correct": false,
        "explanation": "Le carboxyle est prioritaire."
      }
    ],
    "explanation": "La sérine de la fiche est de configuration S dans la représentation indiquée."
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La figure représente la cystéine : ![Cystéine](/images/training/ue14/isomerie-enantiomerie/figure-d5-cysteine.svg)\n\nQuelles propositions sont exactes ?",
    "choices": [
      {
        "content": "$\\ce{NH2}$ est de rang 1.",
        "correct": true,
        "explanation": "N directement lié."
      },
      {
        "content": "$\\ce{CH2SH}$ est prioritaire sur $\\ce{COOH}$.",
        "correct": true,
        "explanation": "Le soufre départage la chaîne latérale."
      },
      {
        "content": "H est de rang 4.",
        "correct": true,
        "explanation": "Le moins prioritaire."
      },
      {
        "content": "La configuration représentée est R.",
        "correct": true,
        "explanation": "C'est le cas particulier présenté dans la fiche."
      }
    ],
    "explanation": "La cystéine est R dans l'application du cours alors que alanine et sérine y sont S."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La figure suivante montre un centre dont le substituant de rang 4 est vers l'avant : ![Rang 4 vers l'avant](/images/training/ue14/isomerie-enantiomerie/figure-d6-rang-4-vers-avant.svg)\n\nQuelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le trajet apparent 1 → 2 → 3 est horaire.",
        "correct": true,
        "explanation": "Lecture de la figure."
      },
      {
        "content": "On ne peut pas conclure R directement car le rang 4 est vers l'avant.",
        "correct": true,
        "explanation": "Il faut inverser la conclusion apparente."
      },
      {
        "content": "Après inversion, la configuration réelle est S.",
        "correct": true,
        "explanation": "Horaire apparent avec 4 devant → S."
      },
      {
        "content": "Le sens du groupe 4 est sans importance.",
        "correct": false,
        "explanation": "C'est un piège majeur."
      }
    ],
    "explanation": "Lorsque le rang 4 pointe vers l'observateur, on inverse le résultat apparent."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Le rang 4 est dirigé vers l'avant et le trajet apparent 1 → 2 → 3 est antihoraire. La configuration réelle est :",
    "choices": [
      {
        "content": "R.",
        "correct": true,
        "explanation": "Antihoraire apparent donnerait S avec 4 derrière ; on inverse donc en R."
      },
      {
        "content": "S.",
        "correct": false,
        "explanation": "Il faut inverser."
      },
      {
        "content": "E.",
        "correct": false,
        "explanation": "E/Z n'est pas concerné."
      },
      {
        "content": "Impossible à attribuer.",
        "correct": false,
        "explanation": "L'orientation est précisée."
      }
    ],
    "explanation": "Avec le groupe 4 vers l'avant, on inverse la lecture habituelle."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La figure suivante comporte deux centres asymétriques : ![Deux centres](/images/training/ue14/isomerie-enantiomerie/figure-d7-deux-centres-asymetriques.svg)\n\nQuelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les deux centres doivent être attribués séparément.",
        "correct": true,
        "explanation": "Chaque centre a son propre classement CIP."
      },
      {
        "content": "Le premier centre de la figure est S.",
        "correct": true,
        "explanation": "C'est la construction de l'asset existant."
      },
      {
        "content": "Le second centre de la figure est R.",
        "correct": true,
        "explanation": "C'est la construction de l'asset."
      },
      {
        "content": "Une notation globale peut préciser les deux configurations, par exemple (2S,3R).",
        "correct": true,
        "explanation": "On indique chaque locant et descripteur."
      }
    ],
    "explanation": "Une molécule à plusieurs centres reçoit un descripteur pour chacun d'eux."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la notation R/S :",
    "choices": [
      {
        "content": "Elle décrit une configuration absolue.",
        "correct": true,
        "explanation": "C'est son rôle."
      },
      {
        "content": "Elle ne doit pas être appelée « conformation R » ou « conformation S ».",
        "correct": true,
        "explanation": "Le cours met en garde contre cette confusion."
      },
      {
        "content": "Elle n'indique pas à elle seule le signe (+) ou (-) du pouvoir rotatoire.",
        "correct": true,
        "explanation": "Aucune relation universelle R↔+ ou S↔-."
      },
      {
        "content": "Elle est synonyme de E/Z.",
        "correct": false,
        "explanation": "Les descripteurs concernent des éléments stéréogènes différents."
      }
    ],
    "explanation": "R/S, E/Z et le signe du pouvoir rotatoire sont trois informations distinctes."
  },
  {
    "order": 127,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix comparaisons CIP suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "O > N.",
        "correct": true,
        "explanation": "8 > 7."
      },
      {
        "content": "N > C.",
        "correct": true,
        "explanation": "7 > 6."
      },
      {
        "content": "C > H.",
        "correct": true,
        "explanation": "6 > 1."
      },
      {
        "content": "$\\ce{CH2Cl}$ > $\\ce{CH2OH}$.",
        "correct": true,
        "explanation": "Cl > O au niveau suivant."
      },
      {
        "content": "$\\ce{COOH}$ > $\\ce{CH2OH}$.",
        "correct": true,
        "explanation": "O,O,O > O,H,H."
      },
      {
        "content": "H > C.",
        "correct": false,
        "explanation": "Ordre inverse."
      },
      {
        "content": "$\\ce{CH3}$ > $\\ce{CH2OH}$.",
        "correct": false,
        "explanation": "CH2OH est prioritaire."
      },
      {
        "content": "$\\ce{CH2OH}$ > $\\ce{CH2Cl}$.",
        "correct": false,
        "explanation": "Cl bat O."
      },
      {
        "content": "$\\ce{CH3}$ > $\\ce{COOH}$.",
        "correct": false,
        "explanation": "Le carboxyle est prioritaire."
      },
      {
        "content": "$\\ce{^{1}H}$ > $\\ce{^{2}H}$.",
        "correct": false,
        "explanation": "L'isotope de masse 2 est prioritaire."
      }
    ],
    "explanation": "La priorité s'appuie sur le numéro atomique et, en cas d'égalité, sur les niveaux suivants ou la masse isotopique."
  },
  {
    "order": 128,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Le substituant de rang 4 est orienté vers l'arrière. Le trajet 1 → 2 → 3 est horaire. Quelle lettre désigne la configuration absolue ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "R",
        "r"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Avec le rang 4 vers l'arrière, un parcours horaire correspond à R."
  }
];
