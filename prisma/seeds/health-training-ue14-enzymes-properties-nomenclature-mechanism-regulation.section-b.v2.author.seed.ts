import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Enzymologie 4.1 — Section B — Nomenclature, classification EC et isoenzymes */
export const UE14_BIOCH_CH14_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement la nomenclature fonctionnelle des enzymes ?",
    "choices": [
      {
        "content": "De nombreux noms d'enzymes associent le substrat ou le type de réaction au suffixe -ase.",
        "correct": true,
        "explanation": "Glucose-6-phosphate isomérase en est un exemple."
      },
      {
        "content": "Le nom d'une enzyme ne peut jamais mentionner son substrat.",
        "correct": false,
        "explanation": "C'est au contraire fréquent."
      },
      {
        "content": "Les noms historiques ne suivent pas toujours parfaitement les règles systématiques.",
        "correct": true,
        "explanation": "Trypsine et pepsine sont des exemples de noms traditionnels."
      },
      {
        "content": "Une transférase peut être nommée en précisant donneur, accepteur et groupe transféré.",
        "correct": true,
        "explanation": "La nomenclature fonctionnelle cherche à décrire la réaction."
      },
      {
        "content": "Toutes les enzymes ont obligatoirement un nom terminé par -ase sans exception.",
        "correct": false,
        "explanation": "Des noms historiques comme trypsine existent."
      }
    ],
    "explanation": "La nomenclature fonctionnelle décrit souvent substrat et réaction, tandis que la nomenclature EC classe la réaction de façon structurée."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant le numéro EC, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Un numéro EC code directement la séquence d'acides aminés de l'enzyme.",
        "correct": false,
        "explanation": "Il classe une réaction enzymatique."
      },
      {
        "content": "Le premier nombre indique la classe principale de réaction.",
        "correct": true,
        "explanation": "Il existe actuellement sept classes principales."
      },
      {
        "content": "Le premier chiffre ne peut prendre que les valeurs 1 à 6 dans la classification actuelle.",
        "correct": false,
        "explanation": "La classe EC 7 des translocases existe."
      },
      {
        "content": "Tout numéro se terminant par 99 signifie universellement que l'enzyme est mal caractérisée.",
        "correct": false,
        "explanation": "Le suffixe 99 sert souvent à une catégorie « autres » dans une subdivision, pas à une règle générale d'incomplétude."
      },
      {
        "content": "Le quatrième nombre est toujours la masse moléculaire en kDa.",
        "correct": false,
        "explanation": "C'est un numéro d'ordre/entrée dans la sous-sous-classe."
      }
    ],
    "explanation": "Le numéro EC x.x.x.x classe une activité enzymatique selon la réaction ; la classification actuelle comporte sept classes principales."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel type de réaction catalyse une déshydrogénase ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "oxydoréduction",
        "réaction redox",
        "transfert d'électrons ou d'hydrogènes"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "EC 1 regroupe les oxydoréductases, dont de nombreuses déshydrogénases."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les transférases EC 2 ?",
    "choices": [
      {
        "content": "Les aminotransférases appartiennent à EC 2.",
        "correct": true,
        "explanation": "Elles transfèrent un groupe amine."
      },
      {
        "content": "Les kinases sont des transférases lorsqu'elles transfèrent un phosphate depuis un nucléotide.",
        "correct": true,
        "explanation": "Elles appartiennent classiquement à EC 2.7."
      },
      {
        "content": "Toutes les transférases utilisent forcément l'eau comme réactif de coupure.",
        "correct": false,
        "explanation": "Cela décrit une hydrolyse."
      },
      {
        "content": "Elles transfèrent un groupe fonctionnel d'un donneur vers un accepteur.",
        "correct": true,
        "explanation": "Le groupe peut être phosphate, méthyle, amine ou autre."
      },
      {
        "content": "La première composante EC vaut 2 pour cette classe.",
        "correct": true,
        "explanation": "EC 2 identifie les transférases."
      }
    ],
    "explanation": "EC 2 regroupe les enzymes transférant des groupes fonctionnels entre donneur et accepteur."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant les hydrolases EC 3.",
    "choices": [
      {
        "content": "La première composante EC vaut 3.",
        "correct": true,
        "explanation": "EC 3 identifie les hydrolases."
      },
      {
        "content": "Toutes les hydrolases nécessitent un coenzyme organique.",
        "correct": false,
        "explanation": "Ce n'est pas une exigence générale."
      },
      {
        "content": "Les peptidases et protéases hydrolytiques appartiennent à EC 3.4.",
        "correct": true,
        "explanation": "Elles hydrolysent les liaisons peptidiques."
      },
      {
        "content": "Une hydrolyse ne consomme jamais d'eau.",
        "correct": false,
        "explanation": "L'eau participe à la coupure."
      },
      {
        "content": "Les hydrolases forment systématiquement une liaison entre deux molécules au prix d'ATP.",
        "correct": false,
        "explanation": "Cela décrit typiquement une ligase."
      }
    ],
    "explanation": "EC 3 regroupe les hydrolases, qui coupent des liaisons en utilisant l'eau.",
    "requiredSelectionCount": 2
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les lyases EC 4, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les lyases sont définies par l'hydrolyse d'une liaison avec de l'eau.",
        "correct": false,
        "explanation": "Cela décrit EC 3."
      },
      {
        "content": "Toute lyase est nécessairement une synthase utilisant l'ATP.",
        "correct": false,
        "explanation": "Le terme synthase n'implique ni ATP ni appartenance exclusive à EC 4."
      },
      {
        "content": "La première composante EC vaut 4.",
        "correct": true,
        "explanation": "EC 4 identifie les lyases."
      },
      {
        "content": "Une synthase n'est pas synonyme universel de lyase.",
        "correct": true,
        "explanation": "Le suffixe synthase est historique/fonctionnel et peut apparaître dans plusieurs classes."
      },
      {
        "content": "EC 4 désigne les translocases.",
        "correct": false,
        "explanation": "Les translocases sont EC 7."
      }
    ],
    "explanation": "EC 4 regroupe les lyases ; le terme « synthase » ne doit pas être assimilé automatiquement à cette classe."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les isomérases EC 5 ?",
    "choices": [
      {
        "content": "Une isomérase ajoute systématiquement une seconde molécule par ligation ATP-dépendante.",
        "correct": false,
        "explanation": "Cela correspond à une ligase."
      },
      {
        "content": "Les racémases, épimérases et certaines mutases appartiennent à cette classe.",
        "correct": true,
        "explanation": "Le type de réarrangement détermine la sous-classe."
      },
      {
        "content": "EC 5 désigne les hydrolases.",
        "correct": false,
        "explanation": "Les hydrolases sont EC 3."
      },
      {
        "content": "Une épimérase est nécessairement une oxydoréductase EC 1.",
        "correct": false,
        "explanation": "Les épimérases sont classées parmi les isomérases."
      },
      {
        "content": "Une isomérisation change obligatoirement le nombre total d'atomes de la molécule.",
        "correct": false,
        "explanation": "Elle réarrange la structure sans changement net de composition."
      }
    ],
    "explanation": "EC 5 regroupe les isomérases, qui réarrangent la structure d'une molécule."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel numéro de classe EC correspond aux ligases ?",
    "answer": {
      "type": "number",
      "value": 6,
      "tolerance": 0
    },
    "explanation": "EC 6 regroupe les ligases, qui forment des liaisons covalentes souvent au prix de l'hydrolyse d'un NTP."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Les noms historiques ne suivent pas toujours parfaitement les règles systématiques.",
        "correct": true,
        "explanation": "Trypsine et pepsine sont des exemples de noms traditionnels."
      },
      {
        "content": "Elles catalysent la translocation d'ions ou de molécules à travers ou dans des membranes.",
        "correct": true,
        "explanation": "Le déplacement est la fonction réactionnelle classée."
      },
      {
        "content": "Une aminotransférase ne transfère aucun groupe amine.",
        "correct": false,
        "explanation": "C'est sa réaction caractéristique."
      },
      {
        "content": "Les translocases constituent la septième classe EC actuelle.",
        "correct": true,
        "explanation": "EC 7 a été ajoutée à la classification moderne."
      },
      {
        "content": "L'existence d'EC 7 rend obsolète l'affirmation selon laquelle la classification principale ne comporterait que six classes.",
        "correct": true,
        "explanation": "La nomenclature actuelle en compte sept."
      },
      {
        "content": "Le nom d'une enzyme ne peut jamais mentionner son substrat.",
        "correct": false,
        "explanation": "C'est au contraire fréquent."
      },
      {
        "content": "Toutes les enzymes ont obligatoirement un nom terminé par -ase sans exception.",
        "correct": false,
        "explanation": "Des noms historiques comme trypsine existent."
      },
      {
        "content": "Le nom usuel remplace totalement toute classification EC.",
        "correct": false,
        "explanation": "Les deux systèmes coexistent."
      },
      {
        "content": "Le nom usuel et le nom systématique IUBMB peuvent coexister.",
        "correct": true,
        "explanation": "Le numéro EC fournit une classification de la réaction."
      },
      {
        "content": "La classification EC actuelle s'arrête obligatoirement à EC 6.",
        "correct": false,
        "explanation": "EC 7 existe."
      }
    ],
    "explanation": "La classification EC actuelle compte sept classes ; EC 7 regroupe les translocases. La nomenclature fonctionnelle décrit souvent substrat et réaction, tandis que la nomenclature EC classe la réaction de façon structurée."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les isoenzymes de créatine kinase, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "CK-MB est relativement enrichie dans le myocarde.",
        "correct": true,
        "explanation": "Elle n'est pas strictement spécifique du cœur."
      },
      {
        "content": "La CK cytosolique est un tétramère H/M comme la LDH.",
        "correct": false,
        "explanation": "La CK est dimérique."
      },
      {
        "content": "Il existe cinq isoenzymes cytosoliques CK issues des sous-unités M et B.",
        "correct": false,
        "explanation": "Les combinaisons donnent trois dimères."
      },
      {
        "content": "La créatine kinase cytosolique classique est un dimère.",
        "correct": true,
        "explanation": "Deux sous-unités composent une isoenzyme CK."
      },
      {
        "content": "Les sous-unités cytosoliques M et B peuvent former CK-MM, CK-MB et CK-BB.",
        "correct": true,
        "explanation": "Ces isoenzymes catalysent la même réaction globale."
      }
    ],
    "explanation": "Les trois isoenzymes cytosoliques CK-MM, CK-MB et CK-BB partagent la même activité mais diffèrent par leurs sous-unités et leur distribution tissulaire."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement la nomenclature fonctionnelle des enzymes ?",
    "choices": [
      {
        "content": "Une transférase peut être nommée en précisant donneur, accepteur et groupe transféré.",
        "correct": true,
        "explanation": "La nomenclature fonctionnelle cherche à décrire la réaction."
      },
      {
        "content": "Les noms historiques ne suivent pas toujours parfaitement les règles systématiques.",
        "correct": true,
        "explanation": "Trypsine et pepsine sont des exemples de noms traditionnels."
      },
      {
        "content": "De nombreux noms d'enzymes associent le substrat ou le type de réaction au suffixe -ase.",
        "correct": true,
        "explanation": "Glucose-6-phosphate isomérase en est un exemple."
      },
      {
        "content": "Le nom usuel et le nom systématique IUBMB peuvent coexister.",
        "correct": true,
        "explanation": "Le numéro EC fournit une classification de la réaction."
      },
      {
        "content": "Le nom usuel remplace totalement toute classification EC.",
        "correct": false,
        "explanation": "Les deux systèmes coexistent."
      }
    ],
    "explanation": "La nomenclature fonctionnelle décrit souvent substrat et réaction, tandis que la nomenclature EC classe la réaction de façon structurée."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de composantes numériques comporte un numéro EC complet ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "Le numéro EC x.x.x.x classe une activité enzymatique selon la réaction ; la classification actuelle comporte sept classes principales."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur les oxydoréductases EC 1, laquelle est correcte ?",
    "choices": [
      {
        "content": "Une déshydrogénase est nécessairement une isomérase EC 5.",
        "correct": false,
        "explanation": "Elle appartient typiquement à EC 1."
      },
      {
        "content": "EC 1 désigne les ligases.",
        "correct": false,
        "explanation": "Les ligases sont EC 6."
      },
      {
        "content": "Toutes les oxydoréductases hydrolysent obligatoirement une liaison avec de l'eau.",
        "correct": false,
        "explanation": "Cela caractérise les hydrolases."
      },
      {
        "content": "Les réactions redox n'impliquent jamais de transfert d'électrons.",
        "correct": false,
        "explanation": "Le transfert d'électrons est central."
      },
      {
        "content": "La première composante EC vaut 1 pour les oxydoréductases.",
        "correct": true,
        "explanation": "EC 1 identifie cette classe."
      }
    ],
    "explanation": "EC 1 regroupe les oxydoréductases, dont de nombreuses déshydrogénases."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les transférases EC 2, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "La première composante EC vaut 2 pour cette classe.",
        "correct": true,
        "explanation": "EC 2 identifie les transférases."
      },
      {
        "content": "Une kinase qui phosphoryle un substrat n'effectue aucun transfert.",
        "correct": false,
        "explanation": "Elle transfère un groupe phosphoryle."
      },
      {
        "content": "Une aminotransférase est une translocase EC 7.",
        "correct": false,
        "explanation": "C'est une transférase EC 2."
      },
      {
        "content": "Toutes les transférases utilisent forcément l'eau comme réactif de coupure.",
        "correct": false,
        "explanation": "Cela décrit une hydrolyse."
      },
      {
        "content": "Elles transfèrent un groupe fonctionnel d'un donneur vers un accepteur.",
        "correct": true,
        "explanation": "Le groupe peut être phosphate, méthyle, amine ou autre."
      }
    ],
    "explanation": "EC 2 regroupe les enzymes transférant des groupes fonctionnels entre donneur et accepteur."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel numéro de classe EC correspond aux hydrolases ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "EC 3 regroupe les hydrolases, qui coupent des liaisons en utilisant l'eau."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur les lyases EC 4, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Les lyases sont définies par l'hydrolyse d'une liaison avec de l'eau.",
        "correct": false,
        "explanation": "Cela décrit EC 3."
      },
      {
        "content": "Une synthase n'est pas synonyme universel de lyase.",
        "correct": true,
        "explanation": "Le suffixe synthase est historique/fonctionnel et peut apparaître dans plusieurs classes."
      },
      {
        "content": "Toute lyase est nécessairement une synthase utilisant l'ATP.",
        "correct": false,
        "explanation": "Le terme synthase n'implique ni ATP ni appartenance exclusive à EC 4."
      },
      {
        "content": "EC 4 désigne les translocases.",
        "correct": false,
        "explanation": "Les translocases sont EC 7."
      },
      {
        "content": "La première composante EC vaut 4.",
        "correct": true,
        "explanation": "EC 4 identifie les lyases."
      }
    ],
    "explanation": "EC 4 regroupe les lyases ; le terme « synthase » ne doit pas être assimilé automatiquement à cette classe.",
    "requiredSelectionCount": 2
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les isomérases EC 5, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Elles catalysent des réarrangements au sein d'une même molécule.",
        "correct": true,
        "explanation": "La formule brute globale est souvent inchangée."
      },
      {
        "content": "Une épimérase est nécessairement une oxydoréductase EC 1.",
        "correct": false,
        "explanation": "Les épimérases sont classées parmi les isomérases."
      },
      {
        "content": "EC 5 désigne les hydrolases.",
        "correct": false,
        "explanation": "Les hydrolases sont EC 3."
      },
      {
        "content": "Une isomérase peut interconvertir deux isomères sans ajout net d'atomes.",
        "correct": true,
        "explanation": "La réaction réorganise la structure."
      },
      {
        "content": "Les racémases, épimérases et certaines mutases appartiennent à cette classe.",
        "correct": true,
        "explanation": "Le type de réarrangement détermine la sous-classe."
      }
    ],
    "explanation": "EC 5 regroupe les isomérases, qui réarrangent la structure d'une molécule."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant les ligases EC 6, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Une ligase ne peut jamais utiliser d'ATP.",
        "correct": false,
        "explanation": "L'utilisation d'un NTP est fréquente."
      },
      {
        "content": "Les ligases sont des enzymes dont la seule fonction est de couper une liaison avec de l'eau.",
        "correct": false,
        "explanation": "Cela décrit des hydrolases."
      },
      {
        "content": "EC 6 désigne les oxydoréductases.",
        "correct": false,
        "explanation": "Les oxydoréductases sont EC 1."
      },
      {
        "content": "Les ligases forment de nouvelles liaisons covalentes entre deux molécules ou fragments.",
        "correct": true,
        "explanation": "Elles couplent souvent cette réaction à l'hydrolyse d'un NTP."
      },
      {
        "content": "Le terme synthase garantit à lui seul qu'une enzyme est une ligase EC 6.",
        "correct": false,
        "explanation": "Les noms usuels ne suffisent pas à conclure."
      }
    ],
    "explanation": "EC 6 regroupe les ligases, qui forment des liaisons covalentes souvent au prix de l'hydrolyse d'un NTP."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les translocases EC 7, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'existence d'EC 7 rend obsolète l'affirmation selon laquelle la classification principale ne comporterait que six classes.",
        "correct": true,
        "explanation": "La nomenclature actuelle en compte sept."
      },
      {
        "content": "Aucune translocase ne peut être couplée à l'ATP.",
        "correct": false,
        "explanation": "De nombreuses translocases sont ATP-dépendantes."
      },
      {
        "content": "Certaines translocases couplent la translocation à l'hydrolyse d'un nucléoside triphosphate.",
        "correct": true,
        "explanation": "C'est le cas de plusieurs transporteurs actifs."
      },
      {
        "content": "Elles catalysent la translocation d'ions ou de molécules à travers ou dans des membranes.",
        "correct": true,
        "explanation": "Le déplacement est la fonction réactionnelle classée."
      },
      {
        "content": "Les translocases constituent la septième classe EC actuelle.",
        "correct": true,
        "explanation": "EC 7 a été ajoutée à la classification moderne."
      }
    ],
    "explanation": "La classification EC actuelle compte sept classes ; EC 7 regroupe les translocases."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle isoenzyme CK associe une sous-unité M et une sous-unité B ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "CK-MB",
        "CKMB"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les trois isoenzymes cytosoliques CK-MM, CK-MB et CK-BB partagent la même activité mais diffèrent par leurs sous-unités et leur distribution tissulaire."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur les isoenzymes de lactate déshydrogénase, laquelle est correcte ?",
    "choices": [
      {
        "content": "La LDH cytosolique classique est un tétramère.",
        "correct": true,
        "explanation": "Quatre sous-unités composent chaque isoenzyme."
      },
      {
        "content": "La LDH fonctionne sans aucun couple redox nicotinamide.",
        "correct": false,
        "explanation": "Elle utilise NADH/NAD+."
      },
      {
        "content": "Les isoenzymes LDH catalysent chacune une réaction totalement différente.",
        "correct": false,
        "explanation": "Elles catalysent la même interconversion lactate/pyruvate."
      },
      {
        "content": "LDH-5 est H4.",
        "correct": false,
        "explanation": "LDH-5 est M4."
      },
      {
        "content": "La LDH classique est un dimère à seulement trois isoenzymes.",
        "correct": false,
        "explanation": "Cela décrit plutôt le modèle CK M/B."
      }
    ],
    "explanation": "La LDH est tétramérique et les sous-unités H/M donnent cinq isoenzymes classiques partageant la même activité."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel suffixe est fréquent dans les noms fonctionnels d'enzymes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "-ase",
        "ase"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La nomenclature fonctionnelle décrit souvent substrat et réaction, tandis que la nomenclature EC classe la réaction de façon structurée."
  }
];
