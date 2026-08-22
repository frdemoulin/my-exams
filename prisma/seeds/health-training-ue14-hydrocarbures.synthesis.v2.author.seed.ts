import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.3 – Synthèse
 */

export const UE14_CH7_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare pentane, cyclopentane, pent-1-ène et pent-1-yne. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le cyclopentane suit la formule générale des alcanes acycliques $\\ce{C_nH_{2n+2}}$.",
        "correct": false,
        "explanation": "Le cyclopentane suit CnH2n."
      },
      {
        "content": "Cyclopentane et pent-1-ène peuvent tous deux avoir pour formule $\\ce{C5H10}$.",
        "correct": true,
        "explanation": "Cycle ou double liaison donnent un degré d'insaturation."
      },
      {
        "content": "Pent-1-yne a pour formule $\\ce{C5H8}$.",
        "correct": true,
        "explanation": "Alcyne."
      },
      {
        "content": "La formule brute suffit à distinguer cyclopentane et pent-1-ène.",
        "correct": false,
        "explanation": "Ils partagent C5H10."
      },
      {
        "content": "Le cyclopentane a pour formule $\\ce{C5H12}$.",
        "correct": false,
        "explanation": "Un cyclane monocyclique saturé à cinq carbones suit $\\ce{C_nH_{2n}}$, soit $\\ce{C5H10}$."
      }
    ],
    "explanation": "Les trois formules générales doivent être reliées à la structure réelle."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un hydrocarbure acyclique a pour formule $\\ce{C7H12}$ et comporte une seule triple liaison. Combien de carbones possède-t-il ?",
    "answer": {
      "type": "number",
      "value": 7,
      "tolerance": 0
    },
    "explanation": "La formule d'un alcyne est $\\ce{C_nH_{2n-2}}$ ; ici n=7."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un alcène est soumis, dans trois expériences séparées, à H2, à une oxydation modérée et à une oxydation forte. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'oxydation modérée donne un 1,2-diol.",
        "correct": true,
        "explanation": "Selon le modèle étudié."
      },
      {
        "content": "L'oxydation forte coupe C=C en composés carbonylés.",
        "correct": true,
        "explanation": "Selon le modèle étudié."
      },
      {
        "content": "Les trois transformations donnent le même produit.",
        "correct": false,
        "explanation": "Les familles de produits diffèrent."
      },
      {
        "content": "L’oxydation modérée d’un alcène conduit à l’époxyde.",
        "correct": false,
        "explanation": "Dans le modèle étudié, l’oxydation modérée conduit au 1,2-diol."
      },
      {
        "content": "L’oxydation modérée d’un alcène donne directement l’alcane correspondant.",
        "correct": false,
        "explanation": "Elle conduit au 1,2-diol."
      }
    ],
    "explanation": "Cette comparaison relie addition et oxydation autour d'une même double liaison."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du propène $\\ce{CH3-CH=CH2}$ :",
    "choices": [
      {
        "content": "L’addition de $\\ce{Br2}$ sur le propène introduit deux atomes de brome tout en conservant le squelette à trois carbones.",
        "correct": true,
        "explanation": "La liaison $\\pi$ est consommée sans coupure du squelette."
      },
      {
        "content": "Une hydrogénation donne le propane.",
        "correct": true,
        "explanation": "Addition de H2."
      },
      {
        "content": "Une hydratation selon Markovnikov donne majoritairement le propan-2-ol.",
        "correct": true,
        "explanation": "OH sur le carbone interne."
      },
      {
        "content": "Une hydrohalogénation par HCl donne majoritairement le 2-chloropropane.",
        "correct": true,
        "explanation": "Markovnikov."
      },
      {
        "content": "Une addition de Br2 donne du propane sans brome.",
        "correct": false,
        "explanation": "Deux Br sont incorporés."
      }
    ],
    "explanation": "Le propène permet de comparer l’hydrogénation, l’halogénation, l’hydratation et l’hydrohalogénation d’un alcène."},
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On souhaite obtenir un alcène à partir d'un précurseur. Quelles voies permettent cette préparation ?",
    "choices": [
      {
        "content": "Hydrogénation partielle d'un alcyne.",
        "correct": true,
        "explanation": "Réduction contrôlée."
      },
      {
        "content": "Hydrogénation complète de l'alcène lui-même.",
        "correct": false,
        "explanation": "Elle conduit à l'alcane."
      },
      {
        "content": "L’hydrogénation complète d’un alcyne est une méthode permettant de s’arrêter directement au stade alcène.",
        "correct": false,
        "explanation": "Une hydrogénation complète conduit à l’alcane ; l’arrêt au stade alcène nécessite une hydrogénation partielle contrôlée."
      },
      {
        "content": "L’hydratation d’un alcane constitue une méthode directe de préparation d’un alcène.",
        "correct": false,
        "explanation": "Les méthodes étudiées de préparation des alcènes reposent notamment sur des éliminations ou une hydrogénation partielle d’alcyne."
      },
      {
        "content": "Déshydrohalogénation.",
        "correct": true,
        "explanation": "Élimination de HX."
      }
    ],
    "explanation": "Les voies de préparation convergent vers la création ou la conservation contrôlée de C=C."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare un alcène et un alcyne de même nombre de carbones. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'alcyne possède deux hydrogènes de moins que l'alcène.",
        "correct": true,
        "explanation": "2n−2 contre 2n."
      },
      {
        "content": "L'alcyne peut consommer deux équivalents de H2 jusqu'à l'alcane.",
        "correct": true,
        "explanation": "Deux liaisons π."
      },
      {
        "content": "L'alcène en consomme un jusqu'à l'alcane.",
        "correct": true,
        "explanation": "Une liaison π."
      },
      {
        "content": "L'alcyne est plus saturé que l'alcène.",
        "correct": false,
        "explanation": "Il est plus insaturé."
      },
      {
        "content": "À nombre de carbones égal, un alcène et un alcyne simple n’ont pas la même teneur en hydrogène.",
        "correct": true,
        "explanation": "L’alcène suit $\\ce{C_nH_{2n}}$ et l’alcyne $\\ce{C_nH_{2n-2}}$."
      }
    ],
    "explanation": "La formule brute traduit directement le degré d'insaturation."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels produits associer aux trois niveaux d'oxydation d'un alcène ?",
    "choices": [
      {
        "content": "Forte → alcane.",
        "correct": false,
        "explanation": "Ce serait une hydrogénation."
      },
      {
        "content": "Oxydation douce → 1,2-diol.",
        "correct": false,
        "explanation": "Dans le modèle étudié, l’oxydation douce conduit à l’époxyde et l’oxydation modérée au diol."
      },
      {
        "content": "Douce → époxyde.",
        "correct": true,
        "explanation": "Premier niveau."
      },
      {
        "content": "Modérée → 1,2-diol.",
        "correct": true,
        "explanation": "Deux OH voisins."
      },
      {
        "content": "Forte → carbonyles après coupure.",
        "correct": true,
        "explanation": "Aldéhydes/cétones."
      }
    ],
    "explanation": "Le niveau d'oxydation détermine si la chaîne est conservée ou coupée."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un alcyne à une triple liaison est hydrogéné jusqu'à l'alcane. Combien de liaisons π sont supprimées au total ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Une triple liaison C≡C contient deux liaisons π ; l'alcane n'en contient aucune."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L'hydratation d'un alcyne vrai fait intervenir deux notions de chapitres successifs. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L’hydratation d’un alcyne terminal conserve durablement la triple liaison dans le produit final.",
        "correct": false,
        "explanation": "La triple liaison est consommée ; l’énol formé se tautomérise en cétone."
      },
      {
        "content": "La régiosélectivité de Markovnikov intervient.",
        "correct": true,
        "explanation": "Le modèle étudié l'indique pour l'alcyne vrai."
      },
      {
        "content": "Une forme énol est obtenue transitoirement.",
        "correct": true,
        "explanation": "Produit initial."
      },
      {
        "content": "Une tautomérie conduit ensuite à la cétone.",
        "correct": true,
        "explanation": "La tautomérie énol-cétone transforme ensuite l’énol transitoire en cétone."},
      {
        "content": "Le produit final retenu est une méthylcétone.",
        "correct": true,
        "explanation": "R-CO-CH3."
      }
    ],
    "explanation": "Cette réaction croise régiosélectivité et tautomérie."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix transformations suivantes, sélectionnez exactement les cinq associations correctes.",
    "choices": [
      {
        "content": "Alcène + H2 → alcane.",
        "correct": true,
        "explanation": "Hydrogénation."
      },
      {
        "content": "Alcène + H2O/H+ → alcool.",
        "correct": true,
        "explanation": "Hydratation."
      },
      {
        "content": "Alcène + oxydation modérée → 1,2-diol.",
        "correct": true,
        "explanation": "Dihydroxylation."
      },
      {
        "content": "Alcyne + 2 H2 → alcane.",
        "correct": true,
        "explanation": "Hydrogénation complète."
      },
      {
        "content": "Alcyne vrai + H2O → méthylcétone après tautomérie.",
        "correct": true,
        "explanation": "Selon le modèle étudié."
      },
      {
        "content": "Alcène + H2 → alcyne.",
        "correct": false,
        "explanation": "Sens inverse."
      },
      {
        "content": "Alcène + oxydation douce → alcane.",
        "correct": false,
        "explanation": "Époxyde."
      },
      {
        "content": "Alcyne + H2O → cyclane.",
        "correct": false,
        "explanation": "Produit carbonylé."
      },
      {
        "content": "Alcane + H2 → alcène.",
        "correct": false,
        "explanation": "Une hydrogénation ne crée pas l'insaturation."
      },
      {
        "content": "Alcène + Br2 → alcool.",
        "correct": false,
        "explanation": "Dihalogénure."
      }
    ],
    "explanation": "La synthèse distingue préparation, addition, oxydation et hydratation des familles étudiées."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une formule brute $\\ce{C6H12}$ est donnée sans structure. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "$\\ce{C6H12}$ suffit à identifier une structure unique.",
        "correct": false,
        "explanation": "Cette formule peut correspondre à plusieurs structures, notamment un alcène ou un cyclane."
      },
      {
        "content": "Elle peut correspondre à un cyclane monocyclique saturé.",
        "correct": true,
        "explanation": "Même formule générale."
      },
      {
        "content": "Elle ne suffit pas à déterminer la famille.",
        "correct": true,
        "explanation": "La structure doit être connue."
      },
      {
        "content": "Elle correspond nécessairement à l'hexane.",
        "correct": false,
        "explanation": "Hexane = C6H14."
      },
      {
        "content": "$\\ce{C6H12}$ exclut toute structure cyclique saturée.",
        "correct": false,
        "explanation": "Cette formule peut correspondre à un cyclane monocyclique saturé ou à un alcène acyclique monounsaturé."
      }
    ],
    "explanation": "La maîtrise nécessite de repérer les ambiguïtés de formule brute et de demander l'information structurale manquante."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un composé acyclique $\\ce{C6H10}$ est annoncé comme ne comportant qu'une seule liaison multiple. Quelle hypothèse est cohérente ?",
    "choices": [
      {
        "content": "Une hydrogénation complète de sa triple liaison demanderait deux équivalents de H2.",
        "correct": true,
        "explanation": "Pour atteindre C6H14."
      },
      {
        "content": "L’hydrogénation complète d’un hydrocarbure $\\ce{C6H10}$ à une triple liaison conduit à $\\ce{C6H12}$.",
        "correct": false,
        "explanation": "La réduction complète ajoute deux équivalents de $\\ce{H2}$ et conduit à $\\ce{C6H14}$."
      },
      {
        "content": "Il peut être un hexyne comportant une triple liaison.",
        "correct": true,
        "explanation": "C6H10 suit C_nH_2n−2."
      },
      {
        "content": "Il s'agit d'un alcane saturé.",
        "correct": false,
        "explanation": "Un hexane serait C6H14."
      },
      {
        "content": "Il possède quatre hydrogènes de moins que l'alcane C6 correspondant.",
        "correct": true,
        "explanation": "14−10=4."
      }
    ],
    "explanation": "Formule brute et bilan d'hydrogénation conduisent à la même conclusion."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On part du but-2-yne et on souhaite obtenir du butane en contrôlant les étapes. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une seconde hydrogénation donne le butane.",
        "correct": true,
        "explanation": "Saturation complète."
      },
      {
        "content": "Deux équivalents de H2 sont consommés au total.",
        "correct": true,
        "explanation": "Deux liaisons π."
      },
      {
        "content": "Une oxydation forte est nécessaire pour conserver le squelette C4.",
        "correct": false,
        "explanation": "Elle pourrait au contraire couper la chaîne."
      },
      {
        "content": "Un seul équivalent de $\\ce{H2}$ suffit pour transformer complètement le but-2-yne en butane.",
        "correct": false,
        "explanation": "Deux étapes d’hydrogénation sont nécessaires pour passer de la triple liaison à l’alcane."
      },
      {
        "content": "Une première hydrogénation partielle peut donner un but-2-ène.",
        "correct": true,
        "explanation": "Stade intermédiaire."
      }
    ],
    "explanation": "La séquence alcyne → alcène → alcane illustre le contrôle du degré de saturation."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un alcène dissymétrique est traité par HBr puis, dans une autre expérience, par Br2. Quelles propositions distinguent correctement les réactions ?",
    "choices": [
      {
        "content": "$\\ce{Br2}$ introduit deux atomes de brome alors que HBr introduit un atome de brome et un hydrogène.",
        "correct": true,
        "explanation": "Les deux réactifs s’additionnent sur la double liaison mais n’apportent pas les mêmes groupes."
      },
      {
        "content": "Avec HBr, une règle de régiosélectivité peut être nécessaire.",
        "correct": true,
        "explanation": "Markovnikov."
      },
      {
        "content": "Avec Br2, les deux atomes ajoutés sont identiques et un Br se fixe sur chaque carbone.",
        "correct": true,
        "explanation": "Pas de choix H/X."
      },
      {
        "content": "Les deux réactions consomment la double liaison.",
        "correct": true,
        "explanation": "Deux additions."
      },
      {
        "content": "Br2 conduit nécessairement au même produit que HBr.",
        "correct": false,
        "explanation": "La composition du produit diffère."
      }
    ],
    "explanation": "Hydrohalogénation et halogénation sont deux additions distinctes."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "L'oxydation forte du but-2-ène fournit deux éthanals. Quelles informations structurales peut-on en déduire ?",
    "choices": [
      {
        "content": "La coupure a lieu au niveau de C=C.",
        "correct": true,
        "explanation": "Principe de l'oxydation forte."
      },
      {
        "content": "Le réactif initial était nécessairement un alcyne.",
        "correct": false,
        "explanation": "Il s'agissait d'un alcène."
      },
      {
        "content": "Les fragments carbonylés obtenus après coupure forte ne donnent aucune information sur la substitution de la double liaison initiale.",
        "correct": false,
        "explanation": "La nature des fragments dépend des substituants portés par les carbones de la double liaison."
      },
      {
        "content": "La double liaison initiale était symétrique dans cet exemple.",
        "correct": true,
        "explanation": "Les deux fragments sont identiques."
      },
      {
        "content": "Chaque carbone de la double liaison portait un groupe CH3 et un H.",
        "correct": true,
        "explanation": "Cela régénère CH3CHO de chaque côté."
      }
    ],
    "explanation": "Les fragments carbonylés permettent de reconstruire l'environnement de la double liaison."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Une mole d'un hydrocarbure possédant deux doubles liaisons indépendantes est hydrogénée complètement sans autre insaturation. Combien de moles de H2 sont consommées ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Chaque double liaison consomme une mole de H2 : deux doubles liaisons → deux moles de H2."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare un diène comportant deux doubles liaisons et un alcyne comportant une triple liaison, à nombre de carbones égal et structures acycliques. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils ont nécessairement la même connectivité.",
        "correct": false,
        "explanation": "Les motifs de liaison sont différents."
      },
      {
        "content": "Deux doubles liaisons et une triple liaison correspondent chacune, au total, à deux liaisons $\\pi$.",
        "correct": true,
        "explanation": "Une double liaison comporte une liaison $\\pi$ ; une triple liaison en comporte deux."
      },
      {
        "content": "Ils présentent tous deux deux degrés d'insaturation dus aux liaisons multiples.",
        "correct": true,
        "explanation": "Deux C=C ou une C≡C."
      },
      {
        "content": "Ils peuvent avoir la même formule générale $\\ce{C_nH_{2n-2}}$ dans ces cas simples.",
        "correct": true,
        "explanation": "Deux doubles liaisons ou une triple retirent quatre H par rapport à l'alcane."
      },
      {
        "content": "Une hydrogénation complète consomme deux équivalents de H2 dans les deux cas.",
        "correct": true,
        "explanation": "Deux liaisons π au total."
      }
    ],
    "explanation": "La formule brute peut masquer la nature exacte des insaturations."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Dans une synthèse, on transforme successivement un alcool en alcène par déshydratation, puis l'alcène en alcane par hydrogénation. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La seconde est une addition.",
        "correct": true,
        "explanation": "Ajout de H2."
      },
      {
        "content": "La double liaison est créée puis consommée.",
        "correct": true,
        "explanation": "C'est le rôle des deux étapes."
      },
      {
        "content": "Le nombre de carbones doit nécessairement changer.",
        "correct": false,
        "explanation": "Le squelette peut être conservé."
      },
      {
        "content": "La seconde étape d’hydrogénation restaure la double liaison précédemment formée.",
        "correct": false,
        "explanation": "L’hydrogénation consomme la double liaison et conduit à l’alcane."
      },
      {
        "content": "La déshydratation initiale est une réaction d’addition.",
        "correct": false,
        "explanation": "La déshydratation est une élimination qui forme la double liaison."
      }
    ],
    "explanation": "La déshydratation crée la double liaison par élimination, puis l’hydrogénation la consomme par addition de $\\ce{H2}$."},
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On hydrate un alcyne interne dissymétrique puis on laisse les énols se tautomériser. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La formule brute est conservée lors de la tautomérie énol-cétone.",
        "correct": true,
        "explanation": "La tautomérie réorganise les liaisons et la position d’un hydrogène sans changer la composition globale."
      },
      {
        "content": "Deux orientations d'hydratation peuvent conduire à deux énols.",
        "correct": true,
        "explanation": "Alcyne interne dissymétrique."
      },
      {
        "content": "Ces énols peuvent évoluer vers deux cétones.",
        "correct": true,
        "explanation": "Tautomérie."
      },
      {
        "content": "La tautomérie change la formule brute.",
        "correct": false,
        "explanation": "Elle conserve la composition."
      },
      {
        "content": "Le produit final est nécessairement une méthylcétone unique.",
        "correct": false,
        "explanation": "Ce résultat est spécialement retenu pour l'alcyne vrai."
      }
    ],
    "explanation": "Le caractère terminal ou interne de l'alcyne modifie le nombre et la nature des produits attendus."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sur les alcanes, alcènes et alcynes sont correctes ?",
    "choices": [
      {
        "content": "Alcynes : hydrocarbures à triple liaison, capables d'additions successives.",
        "correct": true,
        "explanation": "Deux liaisons π."
      },
      {
        "content": "La formule brute seule identifie toujours sans ambiguïté la structure.",
        "correct": false,
        "explanation": "Cycles et isomères créent des ambiguïtés."
      },
      {
        "content": "Les alcanes acycliques et les alcynes acycliques à une triple liaison suivent la même formule générale.",
        "correct": false,
        "explanation": "Les alcanes suivent $\\ce{C_nH_{2n+2}}$ et les alcynes $\\ce{C_nH_{2n-2}}$."
      },
      {
        "content": "Alcanes : hydrocarbures saturés acycliques $\\ce{C_nH_{2n+2}}$.",
        "correct": true,
        "explanation": "Série de base."
      },
      {
        "content": "Alcènes : hydrocarbures à double liaison, réactifs vis-à-vis des additions et oxydations étudiées.",
        "correct": true,
        "explanation": "Cœur des sections B-D."
      }
    ],
    "explanation": "La maîtrise combine familles, formules générales, nomenclature et logique des transformations."
  },
  {
    "order": 131,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un hydrocarbure acyclique contient six carbones et consomme exactement deux moles de H2 par mole pour devenir un alcane, sans autre réaction. Quelles propositions sont compatibles ?",
    "choices": [
      {
        "content": "La consommation de deux équivalents de $\\ce{H2}$ prouve la présence d’une seule double liaison.",
        "correct": false,
        "explanation": "Deux équivalents peuvent correspondre à deux doubles liaisons ou à une triple liaison."
      },
      {
        "content": "Il peut contenir deux doubles liaisons.",
        "correct": true,
        "explanation": "Deux C=C consomment deux H2."
      },
      {
        "content": "Sa formule brute peut être $\\ce{C6H10}$ dans ces cas simples.",
        "correct": true,
        "explanation": "Deux degrés d'insaturation."
      },
      {
        "content": "Il est nécessairement un alcane au départ.",
        "correct": false,
        "explanation": "Un alcane ne consommerait pas H2 pour saturer des liaisons multiples."
      },
      {
        "content": "Un hydrocarbure consommant deux équivalents de $\\ce{H2}$ ne peut contenir qu’une seule double liaison.",
        "correct": false,
        "explanation": "Deux degrés d’insaturation réductibles peuvent correspondre à deux doubles liaisons ou à une triple liaison."
      }
    ],
    "explanation": "Le bilan d'hydrogénation renseigne sur le nombre total de liaisons π mais pas toujours sur leur répartition."
  },
  {
    "order": 132,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "$\\ce{C_nH_{2n+2}}$ est la formule des alcanes acycliques saturés.",
        "correct": true,
        "explanation": "Alcanes."
      },
      {
        "content": "$\\ce{C_nH_{2n}}$ peut décrire un alcène acyclique mono-insaturé ou un cyclane monocyclique.",
        "correct": true,
        "explanation": "Ambiguïté structurale."
      },
      {
        "content": "$\\ce{C_nH_{2n-2}}$ décrit notamment un alcyne acyclique à une triple liaison.",
        "correct": true,
        "explanation": "Alcynes."
      },
      {
        "content": "Markovnikov oriente certaines additions sur des alcènes dissymétriques.",
        "correct": true,
        "explanation": "HX/hydratation."
      },
      {
        "content": "L'hydratation d'un alcyne vrai donne une méthylcétone après tautomérie.",
        "correct": true,
        "explanation": "L’hydratation d’un alcyne terminal conduit, après tautomérie, à une méthylcétone."},
      {
        "content": "L'oxydation modérée d'un alcène donne un alcane.",
        "correct": false,
        "explanation": "Elle donne un 1,2-diol."
      },
      {
        "content": "Une hydrogénation complète d'un alcyne consomme une seule mole de H2.",
        "correct": false,
        "explanation": "Deux."
      },
      {
        "content": "Un cyclane saturé monocyclique suit $\\ce{C_nH_{2n+2}}$.",
        "correct": false,
        "explanation": "C_nH_2n."
      },
      {
        "content": "Une addition de Br2 sur un alcène élimine HBr.",
        "correct": false,
        "explanation": "Br2 est ajouté."
      },
      {
        "content": "Une formule brute distingue toujours un cycle d'une double liaison.",
        "correct": false,
        "explanation": "C_nH_2n est commun."
      }
    ],
    "explanation": "La dernière question exige de mobiliser les formules générales et la logique de réactivité sans confondre les familles."
  }
];
