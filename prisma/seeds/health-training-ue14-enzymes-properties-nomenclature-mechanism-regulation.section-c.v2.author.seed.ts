import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Enzymologie 4.1 — Section C — Mécanisme d'action et site actif */
export const UE14_BIOCH_CH14_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les modèles de reconnaissance enzyme-substrat, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les deux modèles prouvent que les protéines sont immobiles.",
        "correct": false,
        "explanation": "Les protéines sont dynamiques."
      },
      {
        "content": "Koshland décrit une serrure parfaitement rigide.",
        "correct": false,
        "explanation": "Il a proposé l'ajustement induit."
      },
      {
        "content": "Le modèle clé-serrure de Fischer est un modèle historique de complémentarité préexistante.",
        "correct": true,
        "explanation": "Il souligne la complémentarité géométrique."
      },
      {
        "content": "Les enzymes sont des molécules dynamiques explorant plusieurs conformations.",
        "correct": true,
        "explanation": "La reconnaissance peut aussi comporter une composante de sélection conformationnelle."
      },
      {
        "content": "Le modèle de Fischer affirme que l'enzyme change obligatoirement complètement de structure après fixation.",
        "correct": false,
        "explanation": "Il repose plutôt sur une complémentarité préexistante."
      }
    ],
    "explanation": "Fischer a proposé le modèle clé-serrure ; Koshland a introduit l'ajustement induit, plus compatible avec la dynamique des protéines."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant l'énergie d'activation en catalyse enzymatique, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Une enzyme accélère une réaction en rendant ΔG° plus négatif.",
        "correct": false,
        "explanation": "Elle ne modifie pas le ΔG° de la réaction."
      },
      {
        "content": "La catalyse enzymatique exige toujours une seule étape élémentaire.",
        "correct": false,
        "explanation": "Plusieurs étapes/intermédiaires sont fréquents."
      },
      {
        "content": "Seule la réaction directe voit sa barrière diminuée ; la réaction inverse est inchangée.",
        "correct": false,
        "explanation": "Le catalyseur agit sur le chemin réactionnel dans les deux sens."
      },
      {
        "content": "La catalyse peut décomposer une réaction en plusieurs étapes de plus faible barrière.",
        "correct": true,
        "explanation": "Des intermédiaires enzymatiques peuvent apparaître."
      },
      {
        "content": "Une enzyme augmente ΔG‡ pour stabiliser le substrat.",
        "correct": false,
        "explanation": "Elle diminue la barrière vers l'état de transition."
      }
    ],
    "explanation": "Les enzymes accélèrent les réactions en abaissant ΔG‡, sans modifier le ΔG global ni l'équilibre."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Une enzyme modifie-t-elle la constante d'équilibre Keq ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non",
        "non, Keq est inchangée",
        "non"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La catalyse enzymatique modifie la vitesse, pas la thermodynamique : ΔG° et Keq restent inchangés."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les complexes ES et EP, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'enzyme disparaît chimiquement après la libération du produit.",
        "correct": false,
        "explanation": "Elle est régénérée."
      },
      {
        "content": "ES signifie enzyme-synthétase.",
        "correct": false,
        "explanation": "ES signifie enzyme-substrat."
      },
      {
        "content": "ES désigne le complexe enzyme-substrat.",
        "correct": true,
        "explanation": "Il précède la transformation chimique dans un schéma simple."
      },
      {
        "content": "La catalyse réelle peut comporter plusieurs intermédiaires au-delà d'un simple schéma E+S↔ES↔EP↔E+P.",
        "correct": true,
        "explanation": "Le schéma simplifié reste pédagogique."
      },
      {
        "content": "L'enzyme libre est régénérée après la libération du ou des produits.",
        "correct": true,
        "explanation": "Elle peut entamer un nouveau cycle."
      }
    ],
    "explanation": "Les schémas ES et EP représentent des complexes transitoires ; l'enzyme est libérée à la fin du cycle."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant le site actif enzymatique.",
    "choices": [
      {
        "content": "Le site actif est indépendant de la structure tridimensionnelle.",
        "correct": false,
        "explanation": "Le repliement est essentiel à sa formation."
      },
      {
        "content": "Le site actif réunit les fonctions nécessaires à la reconnaissance et à la catalyse.",
        "correct": true,
        "explanation": "Des résidus de liaison et des résidus catalytiques y contribuent."
      },
      {
        "content": "Tous les résidus du site actif sont nécessairement voisins dans la séquence primaire.",
        "correct": false,
        "explanation": "Ils peuvent être rapprochés uniquement après repliement."
      },
      {
        "content": "Les résidus de liaison ne peuvent jamais participer à la catalyse.",
        "correct": false,
        "explanation": "Les fonctions peuvent se chevaucher."
      },
      {
        "content": "Les fonctions de fixation et de catalyse peuvent être partiellement imbriquées.",
        "correct": true,
        "explanation": "Il n'existe pas toujours deux zones totalement séparées."
      }
    ],
    "explanation": "Le site actif est une poche tridimensionnelle combinant reconnaissance et catalyse, formée par des résidus parfois éloignés dans la séquence.",
    "requiredSelectionCount": 2
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la spécificité de la chymotrypsine, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Elle hydrolyse préférentiellement les liaisons peptidiques après des résidus aromatiques tels que Tyr, Trp et Phe.",
        "correct": true,
        "explanation": "Sa poche S1 favorise les chaînes latérales volumineuses et hydrophobes."
      },
      {
        "content": "La reconnaissance du résidu P1 et la réaction catalytique sont deux aspects distincts du site actif.",
        "correct": true,
        "explanation": "La poche de spécificité positionne le substrat pour la catalyse."
      },
      {
        "content": "La chymotrypsine coupe exclusivement après arginine et lysine.",
        "correct": false,
        "explanation": "Cette spécificité caractérise plutôt la trypsine."
      },
      {
        "content": "Leucine peut également être un résidu P1 préférentiel dans la nomenclature IUBMB de la chymotrypsine.",
        "correct": true,
        "explanation": "La spécificité n'est donc pas limitée à Phe et Trp."
      },
      {
        "content": "La chymotrypsine est une sérine protéase digestive.",
        "correct": true,
        "explanation": "Son site actif comporte une triade catalytique Ser-His-Asp."
      }
    ],
    "explanation": "La chymotrypsine est une sérine protéase qui préfère notamment Tyr, Trp et Phe, avec une spécificité plus large que deux résidus seulement."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement la triade catalytique de la chymotrypsine ?",
    "choices": [
      {
        "content": "His57 agit comme base puis comme acide général au cours du mécanisme.",
        "correct": true,
        "explanation": "Elle transfère des protons à plusieurs étapes."
      },
      {
        "content": "Ser195 est uniquement un résidu structural sans rôle chimique.",
        "correct": false,
        "explanation": "Elle agit comme nucléophile."
      },
      {
        "content": "His57 ne participe à aucun transfert de proton.",
        "correct": false,
        "explanation": "Elle joue un rôle acide-base."
      },
      {
        "content": "La triade est Lys-Arg-Glu.",
        "correct": false,
        "explanation": "La triade classique est Ser-His-Asp."
      },
      {
        "content": "Asp102 attaque directement le carbonyle comme nucléophile principal.",
        "correct": false,
        "explanation": "Le nucléophile principal est Ser195."
      }
    ],
    "explanation": "La triade Ser-His-Asp active la sérine nucléophile et orchestre les transferts de proton de la chymotrypsine."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment appelle-t-on l'intermédiaire covalent où le substrat est lié à la sérine catalytique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acyl-enzyme",
        "intermédiaire acyl-enzyme",
        "acyl enzyme"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les sérine protéases passent par des intermédiaires tétraédriques et un acyl-enzyme, puis l'eau régénère l'enzyme."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "EP désigne un complexe enzyme-produit avant libération du produit.",
        "correct": true,
        "explanation": "Il peut être transitoire."
      },
      {
        "content": "Les deux modèles prouvent que les protéines sont immobiles.",
        "correct": false,
        "explanation": "Les protéines sont dynamiques."
      },
      {
        "content": "Koshland décrit une serrure parfaitement rigide.",
        "correct": false,
        "explanation": "Il a proposé l'ajustement induit."
      },
      {
        "content": "La reconnaissance enzyme-substrat ne dépend jamais de la conformation.",
        "correct": false,
        "explanation": "La conformation est déterminante."
      },
      {
        "content": "Le modèle d'ajustement induit de Koshland introduit une modification conformationnelle lors de la liaison.",
        "correct": true,
        "explanation": "L'enzyme et le substrat ne sont pas nécessairement rigides."
      },
      {
        "content": "Toutes les enzymes suivent exactement un mécanisme en une seule étape sans intermédiaire.",
        "correct": false,
        "explanation": "Les mécanismes peuvent être complexes."
      },
      {
        "content": "La catalyse réelle peut comporter plusieurs intermédiaires au-delà d'un simple schéma E+S↔ES↔EP↔E+P.",
        "correct": true,
        "explanation": "Le schéma simplifié reste pédagogique."
      },
      {
        "content": "L'ajustement induit reste un modèle utile pour comprendre la spécificité et la catalyse.",
        "correct": true,
        "explanation": "Il évite de représenter le site actif comme totalement rigide."
      },
      {
        "content": "ES désigne le complexe enzyme-substrat.",
        "correct": true,
        "explanation": "Il précède la transformation chimique dans un schéma simple."
      },
      {
        "content": "Le modèle de Fischer affirme que l'enzyme change obligatoirement complètement de structure après fixation.",
        "correct": false,
        "explanation": "Il repose plutôt sur une complémentarité préexistante."
      }
    ],
    "explanation": "Fischer a proposé le modèle clé-serrure ; Koshland a introduit l'ajustement induit, plus compatible avec la dynamique des protéines. Les schémas ES et EP représentent des complexes transitoires ; l'enzyme est libérée à la fin du cycle."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'énergie d'activation en catalyse enzymatique ?",
    "choices": [
      {
        "content": "La catalyse enzymatique exige toujours une seule étape élémentaire.",
        "correct": false,
        "explanation": "Plusieurs étapes/intermédiaires sont fréquents."
      },
      {
        "content": "Une enzyme augmente ΔG‡ pour stabiliser le substrat.",
        "correct": false,
        "explanation": "Elle diminue la barrière vers l'état de transition."
      },
      {
        "content": "La catalyse peut décomposer une réaction en plusieurs étapes de plus faible barrière.",
        "correct": true,
        "explanation": "Des intermédiaires enzymatiques peuvent apparaître."
      },
      {
        "content": "Une enzyme stabilise l'état de transition relativement aux réactifs.",
        "correct": true,
        "explanation": "Cette stabilisation réduit ΔG‡."
      },
      {
        "content": "Une enzyme accélère une réaction en rendant ΔG° plus négatif.",
        "correct": false,
        "explanation": "Elle ne modifie pas le ΔG° de la réaction."
      }
    ],
    "explanation": "Les enzymes accélèrent les réactions en abaissant ΔG‡, sans modifier le ΔG global ni l'équilibre."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les modèles de reconnaissance enzyme-substrat, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'ajustement induit reste un modèle utile pour comprendre la spécificité et la catalyse.",
        "correct": true,
        "explanation": "Il évite de représenter le site actif comme totalement rigide."
      },
      {
        "content": "Le modèle clé-serrure de Fischer est un modèle historique de complémentarité préexistante.",
        "correct": true,
        "explanation": "Il souligne la complémentarité géométrique."
      },
      {
        "content": "Les deux modèles prouvent que les protéines sont immobiles.",
        "correct": false,
        "explanation": "Les protéines sont dynamiques."
      },
      {
        "content": "Le modèle de Fischer affirme que l'enzyme change obligatoirement complètement de structure après fixation.",
        "correct": false,
        "explanation": "Il repose plutôt sur une complémentarité préexistante."
      },
      {
        "content": "Le modèle d'ajustement induit de Koshland introduit une modification conformationnelle lors de la liaison.",
        "correct": true,
        "explanation": "L'enzyme et le substrat ne sont pas nécessairement rigides."
      }
    ],
    "explanation": "Fischer a proposé le modèle clé-serrure ; Koshland a introduit l'ajustement induit, plus compatible avec la dynamique des protéines."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Sur le diagramme énergétique, cliquez sur le sommet de la barrière d'activation de la voie catalysée par l'enzyme.",
    "image": {
      "src": "/images/training/ue14/biochimie/proprietes-nomenclature-mecanisme-action-regulation/energie-activation-qzone.svg",
      "alt": "Diagramme original comparant une voie non catalysée à haute barrière et une voie catalysée à barrière plus basse",
      "width": 1100,
      "height": 650
    },
    "expectedZones": [
      {
        "id": "catalyzed-ts",
        "label": "Sommet catalysé",
        "x": 0.495,
        "y": 0.462,
        "tolerance": 0.07
      }
    ],
    "explanation": "La voie catalysée passe par une barrière d'activation plus basse ; le ΔG global entre substrat et produit reste inchangé."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur la thermodynamique d'une réaction enzymatique, laquelle est correcte ?",
    "choices": [
      {
        "content": "Une enzyme déplace Keq vers les produits.",
        "correct": false,
        "explanation": "Keq est inchangée."
      },
      {
        "content": "Une enzyme n'accélère jamais la réaction inverse.",
        "correct": false,
        "explanation": "Elle abaisse aussi la barrière inverse."
      },
      {
        "content": "L'enzyme accélère à la fois la réaction directe et la réaction inverse.",
        "correct": true,
        "explanation": "C'est une conséquence de l'abaissement de la barrière commune."
      },
      {
        "content": "Une enzyme peut changer directement le signe du ΔG d'une réaction isolée sans couplage.",
        "correct": false,
        "explanation": "Elle ne change pas la thermodynamique de la réaction."
      },
      {
        "content": "À l'équilibre, une enzyme maintient un flux net permanent vers les produits.",
        "correct": false,
        "explanation": "Le flux net est nul à l'équilibre."
      }
    ],
    "explanation": "La catalyse enzymatique modifie la vitesse, pas la thermodynamique : ΔG° et Keq restent inchangés."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les complexes ES et EP ?",
    "choices": [
      {
        "content": "La catalyse réelle peut comporter plusieurs intermédiaires au-delà d'un simple schéma E+S↔ES↔EP↔E+P.",
        "correct": true,
        "explanation": "Le schéma simplifié reste pédagogique."
      },
      {
        "content": "ES désigne le complexe enzyme-substrat.",
        "correct": true,
        "explanation": "Il précède la transformation chimique dans un schéma simple."
      },
      {
        "content": "L'enzyme libre est régénérée après la libération du ou des produits.",
        "correct": true,
        "explanation": "Elle peut entamer un nouveau cycle."
      },
      {
        "content": "Toutes les enzymes suivent exactement un mécanisme en une seule étape sans intermédiaire.",
        "correct": false,
        "explanation": "Les mécanismes peuvent être complexes."
      },
      {
        "content": "EP désigne un complexe enzyme-produit avant libération du produit.",
        "correct": true,
        "explanation": "Il peut être transitoire."
      }
    ],
    "explanation": "Les schémas ES et EP représentent des complexes transitoires ; l'enzyme est libérée à la fin du cycle."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel niveau de structure rapproche souvent des résidus éloignés dans la séquence pour former un site actif ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "structure tertiaire",
        "repliement tridimensionnel",
        "structure 3D"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le site actif est une poche tridimensionnelle combinant reconnaissance et catalyse, formée par des résidus parfois éloignés dans la séquence."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur la spécificité de la chymotrypsine, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Elle hydrolyse préférentiellement les liaisons peptidiques après des résidus aromatiques tels que Tyr, Trp et Phe.",
        "correct": true,
        "explanation": "Sa poche S1 favorise les chaînes latérales volumineuses et hydrophobes."
      },
      {
        "content": "Sa spécificité est strictement limitée à une seule liaison Phe-Gly dans toutes les protéines.",
        "correct": false,
        "explanation": "Elle reconnaît plusieurs résidus hydrophobes/aromatiques."
      },
      {
        "content": "Leucine peut également être un résidu P1 préférentiel dans la nomenclature IUBMB de la chymotrypsine.",
        "correct": true,
        "explanation": "La spécificité n'est donc pas limitée à Phe et Trp."
      },
      {
        "content": "Elle est une métallo-protéase sans sérine catalytique.",
        "correct": false,
        "explanation": "C'est une sérine protéase."
      },
      {
        "content": "La chymotrypsine coupe exclusivement après arginine et lysine.",
        "correct": false,
        "explanation": "Cette spécificité caractérise plutôt la trypsine."
      }
    ],
    "explanation": "La chymotrypsine est une sérine protéase qui préfère notamment Tyr, Trp et Phe, avec une spécificité plus large que deux résidus seulement.",
    "requiredSelectionCount": 2
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement la triade catalytique de la chymotrypsine ?",
    "choices": [
      {
        "content": "His57 agit comme base puis comme acide général au cours du mécanisme.",
        "correct": true,
        "explanation": "Elle transfère des protons à plusieurs étapes."
      },
      {
        "content": "Ser195 fournit le nucléophile qui attaque le carbonyle de la liaison peptidique.",
        "correct": true,
        "explanation": "Un intermédiaire acyl-enzyme se forme ensuite."
      },
      {
        "content": "His57 ne participe à aucun transfert de proton.",
        "correct": false,
        "explanation": "Elle joue un rôle acide-base."
      },
      {
        "content": "Ser195 est uniquement un résidu structural sans rôle chimique.",
        "correct": false,
        "explanation": "Elle agit comme nucléophile."
      },
      {
        "content": "La triade est Lys-Arg-Glu.",
        "correct": false,
        "explanation": "La triade classique est Ser-His-Asp."
      }
    ],
    "explanation": "La triade Ser-His-Asp active la sérine nucléophile et orchestre les transferts de proton de la chymotrypsine."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant le mécanisme des sérine protéases, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Un second intermédiaire tétraédrique précède la régénération de l'enzyme.",
        "correct": true,
        "explanation": "La sérine est finalement libérée."
      },
      {
        "content": "La réaction ne comporte aucun intermédiaire tétraédrique.",
        "correct": false,
        "explanation": "Il y en a classiquement deux."
      },
      {
        "content": "L'enzyme reste définitivement acylée après une molécule de substrat.",
        "correct": false,
        "explanation": "Elle est régénérée à la fin du cycle."
      },
      {
        "content": "L'eau n'intervient à aucune étape.",
        "correct": false,
        "explanation": "Elle est nécessaire à la désacylation."
      },
      {
        "content": "La sérine catalytique ne forme jamais de liaison covalente transitoire avec le substrat.",
        "correct": false,
        "explanation": "Un acyl-enzyme covalent est central."
      }
    ],
    "explanation": "Les sérine protéases passent par des intermédiaires tétraédriques et un acyl-enzyme, puis l'eau régénère l'enzyme."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans une autre application, concernant les modèles de reconnaissance enzyme-substrat, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le modèle clé-serrure de Fischer est un modèle historique de complémentarité préexistante.",
        "correct": true,
        "explanation": "Il souligne la complémentarité géométrique."
      },
      {
        "content": "Le modèle d'ajustement induit de Koshland introduit une modification conformationnelle lors de la liaison.",
        "correct": true,
        "explanation": "L'enzyme et le substrat ne sont pas nécessairement rigides."
      },
      {
        "content": "Koshland décrit une serrure parfaitement rigide.",
        "correct": false,
        "explanation": "Il a proposé l'ajustement induit."
      },
      {
        "content": "Les deux modèles prouvent que les protéines sont immobiles.",
        "correct": false,
        "explanation": "Les protéines sont dynamiques."
      },
      {
        "content": "L'ajustement induit reste un modèle utile pour comprendre la spécificité et la catalyse.",
        "correct": true,
        "explanation": "Il évite de représenter le site actif comme totalement rigide."
      }
    ],
    "explanation": "Fischer a proposé le modèle clé-serrure ; Koshland a introduit l'ajustement induit, plus compatible avec la dynamique des protéines."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Une enzyme augmente-t-elle ou diminue-t-elle l'énergie d'activation ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "diminue",
        "elle diminue l'énergie d'activation",
        "abaisse"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les enzymes accélèrent les réactions en abaissant ΔG‡, sans modifier le ΔG global ni l'équilibre."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La reconnaissance du résidu P1 et la réaction catalytique sont deux aspects distincts du site actif.",
        "correct": true,
        "explanation": "La poche de spécificité positionne le substrat pour la catalyse."
      },
      {
        "content": "Elle est une métallo-protéase sans sérine catalytique.",
        "correct": false,
        "explanation": "C'est une sérine protéase."
      },
      {
        "content": "Elle n'altère pas la constante d'équilibre Keq.",
        "correct": true,
        "explanation": "Elle accélère simplement l'établissement de l'équilibre."
      },
      {
        "content": "L'enzyme accélère à la fois la réaction directe et la réaction inverse.",
        "correct": true,
        "explanation": "C'est une conséquence de l'abaissement de la barrière commune."
      },
      {
        "content": "Une enzyme n'accélère jamais la réaction inverse.",
        "correct": false,
        "explanation": "Elle abaisse aussi la barrière inverse."
      },
      {
        "content": "La chymotrypsine est une sérine protéase digestive.",
        "correct": true,
        "explanation": "Son site actif comporte une triade catalytique Ser-His-Asp."
      },
      {
        "content": "La chymotrypsine coupe exclusivement après arginine et lysine.",
        "correct": false,
        "explanation": "Cette spécificité caractérise plutôt la trypsine."
      },
      {
        "content": "Sa spécificité est strictement limitée à une seule liaison Phe-Gly dans toutes les protéines.",
        "correct": false,
        "explanation": "Elle reconnaît plusieurs résidus hydrophobes/aromatiques."
      },
      {
        "content": "Une réaction thermodynamiquement défavorable ne devient pas favorable par la seule présence de l'enzyme.",
        "correct": true,
        "explanation": "Un couplage énergétique peut en revanche changer le bilan global."
      },
      {
        "content": "Elle ne peut hydrolyser aucune liaison après tyrosine.",
        "correct": false,
        "explanation": "Tyr est un substrat préférentiel."
      }
    ],
    "explanation": "La catalyse enzymatique modifie la vitesse, pas la thermodynamique : ΔG° et Keq restent inchangés. La chymotrypsine est une sérine protéase qui préfère notamment Tyr, Trp et Phe, avec une spécificité plus large que deux résidus seulement."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Que signifie l'abréviation EP ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "enzyme-produit",
        "complexe enzyme-produit",
        "enzyme produit"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les schémas ES et EP représentent des complexes transitoires ; l'enzyme est libérée à la fin du cycle."
  }
];
