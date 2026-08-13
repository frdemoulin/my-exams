import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie – Chapitre 1.2 – Section C – Osamines et acides sialiques
 */

export const UE14_BIOCH_CH2_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une osamine est formée, dans le modèle de la fiche, par :",
    "choices": [
      {
        "content": "Remplacement d'une fonction alcool en C2 par une fonction amine primaire.",
        "correct": true,
        "explanation": "Définition donnée."
      },
      {
        "content": "Introduction d'un groupe NH2 en C2.",
        "correct": true,
        "explanation": "Conséquence du remplacement."
      },
      {
        "content": "Conservation possible d'une forme α ou β.",
        "correct": true,
        "explanation": "Point du support."
      },
      {
        "content": "Oxydation de C6 en COOH.",
        "correct": false,
        "explanation": "Cela forme un acide uronique, pas une osamine."
      }
    ],
    "explanation": "L'osamine est un dérivé aminé obtenu par substitution du OH de C2."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Sur quel carbone la fonction amine est-elle introduite dans les osamines décrites ?",
    "choices": [
      {
        "content": "C2.",
        "correct": true,
        "explanation": "Position donnée."
      },
      {
        "content": "C1.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "C5.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "C6.",
        "correct": false,
        "explanation": "Non."
      }
    ],
    "explanation": "La substitution OH → NH2 concerne C2."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les osamines sont citées comme constituants de :",
    "choices": [
      {
        "content": "Glycosaminoglycanes.",
        "correct": true,
        "explanation": "Liste du support."
      },
      {
        "content": "Glycoprotéines.",
        "correct": true,
        "explanation": "Liste du support."
      },
      {
        "content": "Protéoglycanes.",
        "correct": true,
        "explanation": "Liste du support."
      },
      {
        "content": "Glycolipides, notamment sphingolipides.",
        "correct": true,
        "explanation": "Liste du support."
      }
    ],
    "explanation": "Les osamines sont très présentes dans les glycoconjugués."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une osamine N-acétylée :",
    "choices": [
      {
        "content": "Porte un groupement acétyl sur la fonction amine en C2.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Contient un motif dérivé de CH3CO lié à l'azote.",
        "correct": true,
        "explanation": "N-acétylation."
      },
      {
        "content": "Peut être présente dans la paroi bactérienne.",
        "correct": true,
        "explanation": "Application citée."
      },
      {
        "content": "Résulte uniquement d'une phosphorylation.",
        "correct": false,
        "explanation": "La transformation est une N-acétylation."
      }
    ],
    "explanation": "La N-acétylation modifie l'amine de l'osamine."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel polymère β1→4 de glucosamine N-acétylée est cité dans la fiche ?",
    "choices": [
      {
        "content": "La chitine.",
        "correct": true,
        "explanation": "Polymère structural cité."
      },
      {
        "content": "Le glycogène.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "L'amidon.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "Le collagène.",
        "correct": false,
        "explanation": "Ce n'est pas un polymère glucidique."
      }
    ],
    "explanation": "La chitine est le polymère β1→4 cité."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la chitine :",
    "choices": [
      {
        "content": "Elle est présente dans la carapace des insectes.",
        "correct": true,
        "explanation": "Exemple cité."
      },
      {
        "content": "Elle est présente dans la carapace des crustacés.",
        "correct": true,
        "explanation": "Exemple cité."
      },
      {
        "content": "Elle repose sur un polymère β1→4 de glucosamine N-acétylée dans le support.",
        "correct": true,
        "explanation": "Description."
      },
      {
        "content": "C'est un polyol issu de la réduction du glucose.",
        "correct": false,
        "explanation": "Ce n'est pas sa nature."
      }
    ],
    "explanation": "La chitine illustre un rôle structural majeur des osamines N-acétylées."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La formation de l'acide neuraminique décrite dans la fiche part de :",
    "choices": [
      {
        "content": "D-mannosamine.",
        "correct": true,
        "explanation": "Précurseur indiqué."
      },
      {
        "content": "Acide pyruvique.",
        "correct": true,
        "explanation": "Partenaire ajouté."
      },
      {
        "content": "Une osamine portant une amine en C2.",
        "correct": true,
        "explanation": "La D-mannosamine est explicitement décrite ainsi."
      },
      {
        "content": "Sorbitol et mannitol uniquement.",
        "correct": false,
        "explanation": "Ils ne sont pas les précurseurs cités."
      }
    ],
    "explanation": "D-mannosamine + acide pyruvique conduisent à l'acide neuraminique."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel composé est ajouté à la D-mannosamine pour former l'acide neuraminique dans le schéma du support ?",
    "choices": [
      {
        "content": "Acide pyruvique.",
        "correct": true,
        "explanation": "Réactif cité."
      },
      {
        "content": "Acide ascorbique.",
        "correct": false,
        "explanation": "Autre dérivé glucidique."
      },
      {
        "content": "Acide glucuronique.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "Acide sulfurique.",
        "correct": false,
        "explanation": "Non."
      }
    ],
    "explanation": "L'acide pyruvique est ajouté à la D-mannosamine."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'acide neuraminique peut se cycliser :",
    "choices": [
      {
        "content": "Entre C2 et C6.",
        "correct": true,
        "explanation": "Cyclisation explicitement indiquée."
      },
      {
        "content": "En créant une forme cyclique avant N-acétylation.",
        "correct": true,
        "explanation": "Ordre du schéma."
      },
      {
        "content": "Entre C1 et C4 uniquement.",
        "correct": false,
        "explanation": "Ce n'est pas le couple donné."
      },
      {
        "content": "Sans modifier le nombre de carbones.",
        "correct": true,
        "explanation": "La cyclisation ne retire pas de carbone."
      }
    ],
    "explanation": "Le support indique une cyclisation C2-C6 de l'acide neuraminique."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel couple de carbones participe à la cyclisation de l'acide neuraminique ?",
    "choices": [
      {
        "content": "C2-C6.",
        "correct": true,
        "explanation": "Couple donné."
      },
      {
        "content": "C1-C5.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "C2-C5.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "C1-C6.",
        "correct": false,
        "explanation": "Non."
      }
    ],
    "explanation": "La cyclisation est C2-C6."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour obtenir le NANA à partir de l'acide neuraminique cyclisé :",
    "choices": [
      {
        "content": "Un groupement acétyl est ajouté sur le NH2.",
        "correct": true,
        "explanation": "N-acétylation."
      },
      {
        "content": "Le NH2 concerné est fixé en C5 dans le produit décrit.",
        "correct": true,
        "explanation": "Point explicite."
      },
      {
        "content": "Le produit est l'acide N-acétylneuraminique.",
        "correct": true,
        "explanation": "Nom développé."
      },
      {
        "content": "Le produit est aussi appelé acide sialique.",
        "correct": true,
        "explanation": "Synonyme donné."
      }
    ],
    "explanation": "Le NANA est la forme N-acétylée de l'acide neuraminique."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "NANA signifie :",
    "choices": [
      {
        "content": "Acide N-acétylneuraminique.",
        "correct": true,
        "explanation": "Développement donné."
      },
      {
        "content": "N-acétyl-nicotinamide.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "Acide N-nitro-aminé.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "Noyau anomérique non acétylé.",
        "correct": false,
        "explanation": "Non."
      }
    ],
    "explanation": "NANA = acide N-acétylneuraminique."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L'acide sialique/NANA est cité comme constituant de :",
    "choices": [
      {
        "content": "Glycoprotéines de la paroi/surface des cellules eucaryotes.",
        "correct": true,
        "explanation": "Point du support."
      },
      {
        "content": "Glycolipides des cellules eucaryotes.",
        "correct": true,
        "explanation": "Point du support."
      },
      {
        "content": "Structures impliquées dans la reconnaissance cellulaire.",
        "correct": true,
        "explanation": "Rôle cité."
      },
      {
        "content": "Uniquement des triglycérides.",
        "correct": false,
        "explanation": "Non."
      }
    ],
    "explanation": "Le NANA intervient dans les glycoconjugués de surface et la reconnaissance cellulaire."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la fonction acide du NANA :",
    "choices": [
      {
        "content": "Le COOH peut s'ioniser en COO−.",
        "correct": true,
        "explanation": "Point explicite."
      },
      {
        "content": "La forme COO− porte une charge négative.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "Les charges négatives peuvent se repousser.",
        "correct": true,
        "explanation": "Mécanisme décrit."
      },
      {
        "content": "L'ionisation transforme le NANA en polyol neutre.",
        "correct": false,
        "explanation": "La charge est au contraire négative."
      }
    ],
    "explanation": "L'ionisation du COOH confère une charge négative au NANA."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La répulsion électrostatique entre carboxylates du NANA est présentée comme :",
    "choices": [
      {
        "content": "Contribuant au maintien d'une structure en bâtonnet des chaînes glycaniques.",
        "correct": true,
        "explanation": "Effet décrit."
      },
      {
        "content": "Résultant de charges COO− de même signe.",
        "correct": true,
        "explanation": "Principe."
      },
      {
        "content": "Favorisant l'extension de chaînes de glycoprotéines.",
        "correct": true,
        "explanation": "Interprétation du support."
      },
      {
        "content": "Résultant d'une attraction entre charges opposées.",
        "correct": false,
        "explanation": "Il s'agit d'une répulsion."
      }
    ],
    "explanation": "Les carboxylates négatifs contribuent à une conformation étendue des chaînes."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Comparer osamine et osamine N-acétylée permet d'affirmer que :",
    "choices": [
      {
        "content": "L'osamine porte une amine primaire en C2.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "L'osamine N-acétylée porte un groupement acétyl sur cet azote.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "La N-acétylation ajoute un motif CH3CO.",
        "correct": true,
        "explanation": "Groupement acétyl."
      },
      {
        "content": "La N-acétylation retire tout atome d'azote.",
        "correct": false,
        "explanation": "L'azote est conservé et acétylé."
      }
    ],
    "explanation": "La N-acétylation modifie la fonction amine sans supprimer l'azote."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un dérivé glucidique est retrouvé dans une paroi bactérienne et possède un motif N-acétylé en C2. Quelle famille est compatible ?",
    "choices": [
      {
        "content": "Osamine N-acétylée.",
        "correct": true,
        "explanation": "Contexte et structure concordent."
      },
      {
        "content": "Dérivé aminé d'ose.",
        "correct": true,
        "explanation": "Famille générale."
      },
      {
        "content": "Polyol nécessairement.",
        "correct": false,
        "explanation": "Ce n'est pas un produit de réduction du carbonyle."
      },
      {
        "content": "Dérivé pouvant être apparenté aux motifs structuraux décrits dans la fiche.",
        "correct": true,
        "explanation": "La paroi bactérienne est citée."
      }
    ],
    "explanation": "La paroi bactérienne est une localisation explicitement associée aux osamines N-acétylées."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule de surface cellulaire porte un acide sialique terminal. Quelles propriétés sont cohérentes avec la fiche ?",
    "choices": [
      {
        "content": "Elle peut participer à la reconnaissance cellulaire.",
        "correct": true,
        "explanation": "Rôle cité."
      },
      {
        "content": "Elle peut porter une charge négative via COO−.",
        "correct": true,
        "explanation": "Ionisation."
      },
      {
        "content": "Elle peut contribuer à une structure glycanique étendue.",
        "correct": true,
        "explanation": "Répulsion électrostatique."
      },
      {
        "content": "Elle est dépourvue de glucide.",
        "correct": false,
        "explanation": "L'acide sialique est un dérivé glucidique."
      }
    ],
    "explanation": "Le NANA relie structure, charge et reconnaissance cellulaire."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel autre nom la fiche donne-t-elle à l'acide N-acétylneuraminique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide sialique",
        "sialique",
        "NANA",
        "nana"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "L'acide N-acétylneuraminique est aussi appelé NANA ou acide sialique."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quel ordre de transformations respecte le schéma du support ?",
    "choices": [
      {
        "content": "D-mannosamine + acide pyruvique → acide neuraminique.",
        "correct": true,
        "explanation": "Première étape."
      },
      {
        "content": "Acide neuraminique → cyclisation C2-C6.",
        "correct": true,
        "explanation": "Étape suivante."
      },
      {
        "content": "Ajout d'un groupement acétyl sur le NH2 → NANA.",
        "correct": true,
        "explanation": "Dernière transformation décrite."
      },
      {
        "content": "NANA → D-mannosamine par simple phosphorylation.",
        "correct": false,
        "explanation": "Ce n'est pas la séquence."
      }
    ],
    "explanation": "Le schéma suit formation, cyclisation puis N-acétylation."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels couples structure/rôle sont corrects ?",
    "choices": [
      {
        "content": "Osamine → NH2 en C2.",
        "correct": true,
        "explanation": "Structure."
      },
      {
        "content": "Osamine N-acétylée → groupement acétyl sur N.",
        "correct": true,
        "explanation": "Structure."
      },
      {
        "content": "NANA → reconnaissance cellulaire.",
        "correct": true,
        "explanation": "Rôle."
      },
      {
        "content": "NANA → absence de toute fonction acide.",
        "correct": false,
        "explanation": "Il possède un COOH ionisable."
      }
    ],
    "explanation": "Les dérivés aminés se distinguent par leurs substitutions et leurs rôles biologiques."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La chitine et le NANA illustrent deux usages biologiques différents des dérivés aminés :",
    "choices": [
      {
        "content": "Chitine : rôle structural.",
        "correct": true,
        "explanation": "Carapaces des insectes/crustacés."
      },
      {
        "content": "NANA : rôle dans la reconnaissance cellulaire.",
        "correct": true,
        "explanation": "Rôle cité."
      },
      {
        "content": "Tous deux sont des dérivés d'oses comportant de l'azote.",
        "correct": true,
        "explanation": "Point commun."
      },
      {
        "content": "Tous deux sont des polyols issus d'une simple réduction.",
        "correct": false,
        "explanation": "Ce n'est pas leur origine."
      }
    ],
    "explanation": "Les dérivés aminés ont des fonctions structurales et de signalisation/reconnaissance."
  },
  {
    "order": 67,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sur ce schéma original simplifié d'une osamine, cliquez sur le carbone C2 portant la fonction amine qui remplace le OH.",
    "image": {
      "src": "/images/training/ue14/biochimie/oses-simples-derives/osamine-c2-qzone.svg",
      "alt": "Projection simplifiée d'une osamine linéaire avec C1 à C6 et NH2 porté par C2",
      "width": 700,
      "height": 900
    },
    "expectedZones": [
      {
        "id": "c2",
        "label": "C2 portant NH2",
        "x": 0.5,
        "y": 0.28,
        "tolerance": 0.075
      }
    ],
    "explanation": "Dans les osamines de la fiche, la fonction alcool portée par C2 est remplacée par une fonction amine primaire."
  },
  {
    "order": 68,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé glucidique possède NHCOCH3 en C2. Quelles conclusions sont justifiées ?",
    "choices": [
      {
        "content": "Il est compatible avec une osamine N-acétylée.",
        "correct": true,
        "explanation": "Le motif traduit une N-acétylation."
      },
      {
        "content": "Le groupement acétyl est lié à l'azote.",
        "correct": true,
        "explanation": "N-acétylation."
      },
      {
        "content": "Ce type de dérivé peut participer à des polymères structuraux comme la chitine.",
        "correct": true,
        "explanation": "Exemple du support."
      },
      {
        "content": "Il s'agit nécessairement d'acide glucuronique.",
        "correct": false,
        "explanation": "L'acide glucuronique est un dérivé oxydé de C6."
      }
    ],
    "explanation": "Le motif NHCOCH3 est le repère fonctionnel d'une osamine N-acétylée."
  },
  {
    "order": 69,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un NANA est représenté sous forme ionisée. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Son groupement carboxylique est sous forme COO−.",
        "correct": true,
        "explanation": "Ionisation."
      },
      {
        "content": "La molécule porte une charge négative.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "Des NANA proches peuvent contribuer à des répulsions électrostatiques.",
        "correct": true,
        "explanation": "Modèle du support."
      },
      {
        "content": "Le COOH ionisé devient NH2.",
        "correct": false,
        "explanation": "Fonctions distinctes."
      }
    ],
    "explanation": "L'état ionisé explique une partie des propriétés de surface du NANA."
  },
  {
    "order": 70,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une chaîne glycanique de surface est riche en NANA. Quel raisonnement est cohérent ?",
    "choices": [
      {
        "content": "Les carboxylates portent des charges négatives.",
        "correct": true,
        "explanation": "COO−."
      },
      {
        "content": "Les charges de même signe se repoussent.",
        "correct": true,
        "explanation": "Principe."
      },
      {
        "content": "Cette répulsion peut favoriser une structure étendue.",
        "correct": true,
        "explanation": "Bâtonnet dans le support."
      },
      {
        "content": "La reconnaissance cellulaire peut être impliquée.",
        "correct": true,
        "explanation": "Rôle du NANA."
      }
    ],
    "explanation": "Le NANA combine charge, géométrie des chaînes et reconnaissance."
  },
  {
    "order": 71,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare glucosamine, osamine N-acétylée et NANA. Quelles propositions sont cohérentes ?",
    "choices": [
      {
        "content": "La glucosamine illustre une osamine.",
        "correct": true,
        "explanation": "NH2 remplace OH en C2."
      },
      {
        "content": "L'osamine N-acétylée porte un acétyl sur N.",
        "correct": true,
        "explanation": "Modification supplémentaire."
      },
      {
        "content": "Le NANA possède une fonction acide ionisable.",
        "correct": true,
        "explanation": "COOH/COO−."
      },
      {
        "content": "Les trois sont des dérivés glucidiques.",
        "correct": true,
        "explanation": "Famille générale."
      }
    ],
    "explanation": "Ces trois niveaux de dérivés aminés doivent être distingués."
  },
  {
    "order": 72,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une molécule est décrite comme acide N-acétylneuraminique. Quelles informations peut-on récupérer directement de son nom et du support ?",
    "choices": [
      {
        "content": "Elle est N-acétylée.",
        "correct": true,
        "explanation": "Le nom l'indique."
      },
      {
        "content": "Elle dérive de l'acide neuraminique.",
        "correct": true,
        "explanation": "Nom."
      },
      {
        "content": "Elle est aussi appelée acide sialique.",
        "correct": true,
        "explanation": "Synonyme."
      },
      {
        "content": "Elle ne contient aucune fonction acide.",
        "correct": false,
        "explanation": "Le nom et la structure indiquent une fonction acide."
      }
    ],
    "explanation": "Le nom complet résume l'origine et la modification du NANA."
  },
  {
    "order": 73,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une D-mannosamine est convertie en NANA selon la fiche. Quelles étapes/intermédiaires doivent être reconnus ?",
    "choices": [
      {
        "content": "Addition d'acide pyruvique.",
        "correct": true,
        "explanation": "Première transformation."
      },
      {
        "content": "Formation d'acide neuraminique.",
        "correct": true,
        "explanation": "Intermédiaire."
      },
      {
        "content": "Cyclisation C2-C6.",
        "correct": true,
        "explanation": "Étape."
      },
      {
        "content": "N-acétylation.",
        "correct": true,
        "explanation": "Formation du NANA."
      }
    ],
    "explanation": "Le parcours vers le NANA est l'enchaînement le plus complexe du chapitre."
  },
  {
    "order": 74,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Combien de carbones sont explicitement impliqués comme extrémités de la cyclisation de l'acide neuraminique : C2 et C6 ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "La cyclisation est décrite entre deux positions : C2 et C6."
  },
  {
    "order": 75,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quel parallèle est correct entre glucuronate et NANA ionisé ?",
    "choices": [
      {
        "content": "Les deux peuvent porter un carboxylate COO−.",
        "correct": true,
        "explanation": "Forme ionisée d'une fonction acide."
      },
      {
        "content": "Les deux peuvent donc contribuer à une charge négative.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "Ils sont obtenus par la même transformation structurale.",
        "correct": false,
        "explanation": "Glucuronate vient de l'oxydation du glucose, NANA d'une voie aminée plus complexe."
      },
      {
        "content": "Ce sont deux dérivés d'oses.",
        "correct": true,
        "explanation": "Point commun."
      }
    ],
    "explanation": "La présence d'un carboxylate est commune, mais leurs origines structurales diffèrent."
  },
  {
    "order": 76,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos des localisations biologiques des dérivés aminés :",
    "choices": [
      {
        "content": "Osamines : GAG, glycoprotéines, protéoglycanes, glycolipides.",
        "correct": true,
        "explanation": "Liste."
      },
      {
        "content": "Osamines N-acétylées : paroi bactérienne.",
        "correct": true,
        "explanation": "Exemple."
      },
      {
        "content": "Chitine : insectes et crustacés.",
        "correct": true,
        "explanation": "Exemple."
      },
      {
        "content": "NANA : glycoconjugués de surface des cellules eucaryotes.",
        "correct": true,
        "explanation": "Exemple."
      }
    ],
    "explanation": "La section associe chaque dérivé à des structures biologiques caractéristiques."
  },
  {
    "order": 77,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux modifications azotées successives distinguées dans la fiche.",
    "choices": [
      {
        "content": "Substitution OH de C2 par NH2.",
        "correct": true,
        "explanation": "Formation d'une osamine."
      },
      {
        "content": "Ajout d'un groupement acétyl sur N.",
        "correct": true,
        "explanation": "N-acétylation."
      },
      {
        "content": "Oxydation C6 en COOH.",
        "correct": false,
        "explanation": "Formation d'un acide uronique."
      },
      {
        "content": "Réduction du carbonyle en alcool.",
        "correct": false,
        "explanation": "Formation d'un polyol."
      }
    ],
    "explanation": "Les deux transformations azotées sont amination de C2 puis N-acétylation."
  },
  {
    "order": 78,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Une osamine porte NH2 en C2.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Une osamine peut être N-acétylée.",
        "correct": true,
        "explanation": "Transformation."
      },
      {
        "content": "La chitine est un polymère β1→4 cité.",
        "correct": true,
        "explanation": "Exemple."
      },
      {
        "content": "Le NANA est aussi appelé acide sialique.",
        "correct": true,
        "explanation": "Synonyme."
      },
      {
        "content": "Le NANA participe à la reconnaissance cellulaire.",
        "correct": true,
        "explanation": "Rôle."
      },
      {
        "content": "La formation du NANA commence par la réduction du glucose en sorbitol.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "Le NANA est dépourvu de fonction acide.",
        "correct": false,
        "explanation": "COOH."
      },
      {
        "content": "La cyclisation de l'acide neuraminique est C1-C4.",
        "correct": false,
        "explanation": "C2-C6."
      },
      {
        "content": "Une osamine résulte de l'oxydation de C6.",
        "correct": false,
        "explanation": "NH2 en C2."
      },
      {
        "content": "La chitine est un triglycéride.",
        "correct": false,
        "explanation": "Polymère glucidique."
      }
    ],
    "explanation": "Cette sélection consolide structure, transformations et rôles des dérivés aminés."
  }
];
