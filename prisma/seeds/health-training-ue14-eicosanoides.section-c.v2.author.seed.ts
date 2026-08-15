import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie — Les eicosanoïdes — Section C
 * Banque éditoriale auteur — à intégrer via le helper partagé du repo.
 */

export const UE14_BIOCH_CH5_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les prostanoïdes sont décrits comme :",
    "choices": [
      {
        "content": "Des médiateurs locaux.",
        "correct": true,
        "explanation": "Rôle."
      },
      {
        "content": "Synthétisés par de nombreux tissus.",
        "correct": true,
        "explanation": "Origine."
      },
      {
        "content": "Ayant souvent une demi-vie très courte.",
        "correct": true,
        "explanation": "Quelques minutes."
      },
      {
        "content": "Des hormones circulantes à demi-vie de plusieurs années.",
        "correct": false,
        "explanation": "Les prostanoïdes agissent surtout localement et sont rapidement inactivés."
      }
    ],
    "explanation": "Les prostanoïdes sont des médiateurs locaux à action rapide et brève."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L’action des prostanoïdes :",
    "choices": [
      {
        "content": "Passe par des récepteurs cellulaires spécifiques.",
        "correct": true,
        "explanation": "Mécanisme général."
      },
      {
        "content": "Peut varier selon le composé/la série.",
        "correct": true,
        "explanation": "Fonctions parfois contraires."
      },
      {
        "content": "Peut conduire à des effets biologiques opposés entre molécules proches.",
        "correct": true,
        "explanation": "Le récepteur exprimé et le tissu cible déterminent la réponse."
      },
      {
        "content": "Est identique pour toutes les prostaglandines.",
        "correct": false,
        "explanation": "Les effets peuvent être très différents."
      }
    ],
    "explanation": "Une structure proche n’implique pas un effet biologique identique."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de PGF₂α :",
    "choices": [
      {
        "content": "Structurellement proche de PGE₂.",
        "correct": true,
        "explanation": "Comparaison."
      },
      {
        "content": "Dont les effets dépendent des récepteurs et des tissus cibles.",
        "correct": true,
        "explanation": "Des prostaglandines proches peuvent activer des récepteurs distincts."
      },
      {
        "content": "Associée notamment à vasoconstriction et bronchoconstriction dans les exemples.",
        "correct": true,
        "explanation": "PGF₂α peut contracter différents muscles lisses."
      },
      {
        "content": "Toujours identique à PGE₂ sur le plan fonctionnel.",
        "correct": false,
        "explanation": "Une proximité structurale n'impose pas des effets identiques."
      }
    ],
    "explanation": "PGF₂α illustre la diversité fonctionnelle des prostaglandines."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos du misoprostol :",
    "choices": [
      {
        "content": "Est un analogue synthétique de PGE₁.",
        "correct": true,
        "explanation": "Nature."
      },
      {
        "content": "Peut être utilisé pour faciliter le déclenchement de l’accouchement.",
        "correct": true,
        "explanation": "Son usage obstétrical est encadré par des protocoles médicaux."
      },
      {
        "content": "Favorise la contraction utérine et l’assouplissement du col dans ce contexte.",
        "correct": true,
        "explanation": "Il favorise la maturation cervicale et l'activité utérine."
      },
      {
        "content": "Est une enzyme de la voie COX.",
        "correct": false,
        "explanation": "C’est un analogue de prostaglandine."
      }
    ],
    "explanation": "Le misoprostol fournit une application thérapeutique directe des prostaglandines."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le TXA₂ :",
    "choices": [
      {
        "content": "Est synthétisé notamment par les plaquettes.",
        "correct": true,
        "explanation": "Origine."
      },
      {
        "content": "Est un puissant vasoconstricteur.",
        "correct": true,
        "explanation": "TXA₂ contracte le muscle lisse vasculaire."
      },
      {
        "content": "Favorise l’agrégation plaquettaire.",
        "correct": true,
        "explanation": "Effet."
      },
      {
        "content": "Est produit surtout par l’endothélium et inhibe l’agrégation.",
        "correct": false,
        "explanation": "Cette description correspond à PGI₂."
      }
    ],
    "explanation": "TXA₂ favorise vasoconstriction et agrégation plaquettaire."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La PGI₂ :",
    "choices": [
      {
        "content": "Est synthétisée par l’endothélium vasculaire.",
        "correct": true,
        "explanation": "Origine."
      },
      {
        "content": "Est un puissant vasodilatateur.",
        "correct": true,
        "explanation": "PGI₂ favorise la relaxation du muscle lisse vasculaire."
      },
      {
        "content": "Inhibe l’agrégation plaquettaire.",
        "correct": true,
        "explanation": "Effet."
      },
      {
        "content": "Est le principal thromboxane plaquettaire proagrégant.",
        "correct": false,
        "explanation": "Cette description correspond à TXA₂."
      }
    ],
    "explanation": "PGI₂ s’oppose localement à plusieurs effets du TXA₂."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Comparer TXA₂ et PGI₂ :",
    "choices": [
      {
        "content": "Leurs effets vasculaires sont antagonistes.",
        "correct": true,
        "explanation": "Vasoconstriction versus vasodilatation."
      },
      {
        "content": "Leurs effets sur l’agrégation plaquettaire sont antagonistes.",
        "correct": true,
        "explanation": "Activation versus inhibition."
      },
      {
        "content": "Ils participent à un équilibre local.",
        "correct": true,
        "explanation": "Leur balance contribue à la régulation de l'hémostase vasculaire."
      },
      {
        "content": "Ils ont exactement la même origine cellulaire.",
        "correct": false,
        "explanation": "Plaquettes versus endothélium."
      }
    ],
    "explanation": "Le couple TXA₂/PGI₂ illustre un antagonisme local entre plaquettes et endothélium."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La demi-vie du TXA₂ est donnée comme :",
    "choices": [
      {
        "content": "Très courte.",
        "correct": true,
        "explanation": "Environ 30 s."
      },
      {
        "content": "De l’ordre de 30 secondes.",
        "correct": true,
        "explanation": "TXA₂ a une demi-vie d'environ 30 secondes."
      },
      {
        "content": "Compatible avec une action locale rapide.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "De plusieurs jours.",
        "correct": false,
        "explanation": "TXA₂ s'hydrolyse spontanément en quelques dizaines de secondes."
      }
    ],
    "explanation": "TXA₂ est un médiateur extrêmement fugace."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La demi-vie de PGI₂ est donnée comme :",
    "choices": [
      {
        "content": "Très courte.",
        "correct": true,
        "explanation": "Quelques minutes."
      },
      {
        "content": "De l’ordre de 2 à 3 minutes.",
        "correct": true,
        "explanation": "PGI₂ a une demi-vie de l'ordre de quelques minutes."
      },
      {
        "content": "Compatible avec une action locale.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "De plusieurs semaines.",
        "correct": false,
        "explanation": "PGI₂ est instable et sa demi-vie est de l'ordre de quelques minutes."
      }
    ],
    "explanation": "PGI₂ agit localement avec une demi-vie brève."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de COX, de l’aspirine et de l’ibuprofène :",
    "choices": [
      {
        "content": "L’aspirine peut inhiber COX.",
        "correct": true,
        "explanation": "L'aspirine acétyle et inhibe COX."
      },
      {
        "content": "L’ibuprofène peut inhiber COX.",
        "correct": true,
        "explanation": "L'ibuprofène est un inhibiteur réversible de COX."
      },
      {
        "content": "L’inhibition de COX réduit la production de prostanoïdes en aval.",
        "correct": true,
        "explanation": "Raisonnement de voie."
      },
      {
        "content": "COX est stimulée obligatoirement par l’aspirine.",
        "correct": false,
        "explanation": "L'aspirine acétyle et inhibe la cyclo-oxygénase."
      }
    ],
    "explanation": "L'aspirine et l'ibuprofène inhibent COX selon des mécanismes différents."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une plaquette activée produit un médiateur entraînant vasoconstriction et agrégation. Le profil correspond à :",
    "choices": [
      {
        "content": "TXA₂.",
        "correct": true,
        "explanation": "Origine + effets."
      },
      {
        "content": "Un prostanoïde.",
        "correct": true,
        "explanation": "Famille."
      },
      {
        "content": "Un médiateur à demi-vie très courte.",
        "correct": true,
        "explanation": "Environ 30 s."
      },
      {
        "content": "PGI₂.",
        "correct": false,
        "explanation": "PGI₂ est vasodilatatrice et antiagrégante."
      }
    ],
    "explanation": "Le contexte vasculaire permet d’identifier le thromboxane A₂."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une cellule endothéliale produit un médiateur qui dilate le vaisseau et limite l’agrégation plaquettaire. Le profil correspond à :",
    "choices": [
      {
        "content": "PGI₂.",
        "correct": true,
        "explanation": "Origine + effets."
      },
      {
        "content": "Une prostacycline.",
        "correct": true,
        "explanation": "PGI."
      },
      {
        "content": "Un médiateur à demi-vie de quelques minutes.",
        "correct": true,
        "explanation": "2–3 min."
      },
      {
        "content": "TXA₂.",
        "correct": false,
        "explanation": "TXA₂ produit l’effet opposé."
      }
    ],
    "explanation": "Le contexte endothélial permet d’identifier la prostacycline PGI₂."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L’équilibre local TXA₂/PGI₂ :",
    "choices": [
      {
        "content": "Oppose une action plaquettaire proagrégante à une action endothéliale antiagrégante.",
        "correct": true,
        "explanation": "Antagonisme."
      },
      {
        "content": "Oppose vasoconstriction et vasodilatation.",
        "correct": true,
        "explanation": "Antagonisme."
      },
      {
        "content": "Illustre que deux eicosanoïdes proches peuvent avoir des effets contraires.",
        "correct": true,
        "explanation": "Principe."
      },
      {
        "content": "Implique que les deux molécules sont identiques.",
        "correct": false,
        "explanation": "Elles sont distinctes."
      }
    ],
    "explanation": "Le couple TXA₂/PGI₂ est un exemple majeur de régulation locale antagoniste."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L’aspirine à faible dose est antiagrégante parce que :",
    "choices": [
      {
        "content": "Elle diminue durablement la synthèse plaquettaire de TXA₂.",
        "correct": true,
        "explanation": "L'inhibition irréversible de COX-1 persiste dans la plaquette anucléée."
      },
      {
        "content": "Elle agit via l’inhibition de COX.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "La diminution de TXA₂ réduit un signal proagrégant.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "Elle augmente directement la synthèse de TXA₂.",
        "correct": false,
        "explanation": "Une augmentation de TXA₂ favoriserait au contraire l'agrégation."
      }
    ],
    "explanation": "À faible dose, l'aspirine inhibe irréversiblement la COX-1 plaquettaire, réduit TXA₂ et freine l'agrégation."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le misoprostol dans le déclenchement de l’accouchement :",
    "choices": [
      {
        "content": "Mime fonctionnellement une prostaglandine de type PGE₁.",
        "correct": true,
        "explanation": "Analogue synthétique."
      },
      {
        "content": "Favorise les contractions utérines.",
        "correct": true,
        "explanation": "Le misoprostol favorise les contractions utérines."
      },
      {
        "content": "Contribue à l’assouplissement du col.",
        "correct": true,
        "explanation": "Le misoprostol favorise la maturation cervicale."
      },
      {
        "content": "Est utilisé pour inhiber toute contraction utérine dans ce contexte.",
        "correct": false,
        "explanation": "Le misoprostol favorise au contraire la maturation cervicale et les contractions."
      }
    ],
    "explanation": "Le misoprostol est un analogue de PGE₁ utilisé en obstétrique selon des protocoles médicaux."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel prostanoïde plaquettaire est proagrégant et vasoconstricteur ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "txa2",
        "TXA2",
        "TXA₂",
        "thromboxane a2",
        "thromboxane A2"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Il s’agit du thromboxane A₂, TXA₂."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel prostanoïde endothélial est vasodilatateur et antiagrégant ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "pgi2",
        "PGI2",
        "PGI₂",
        "prostacycline",
        "prostacycline pgi2"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Il s’agit de PGI₂, une prostacycline."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle demi-vie approximative en secondes est donnée pour TXA₂ ?",
    "answer": {
      "type": "number",
      "value": 30,
      "tolerance": 0
    },
    "explanation": "La demi-vie de TXA₂ est d'environ 30 secondes."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle est, en minutes, la borne haute d'une demi-vie de PGI₂ estimée à 2–3 minutes ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "La borne haute de l'intervalle 2–3 minutes est 3 minutes."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux effets caractéristiques du TXA₂.",
    "choices": [
      {
        "content": "Vasoconstriction.",
        "correct": true,
        "explanation": "Effet."
      },
      {
        "content": "Agrégation plaquettaire.",
        "correct": true,
        "explanation": "Effet."
      },
      {
        "content": "Vasodilatation.",
        "correct": false,
        "explanation": "PGI₂."
      },
      {
        "content": "Inhibition de l’agrégation.",
        "correct": false,
        "explanation": "PGI₂."
      }
    ],
    "explanation": "TXA₂ favorise vasoconstriction et agrégation."
  },
  {
    "order": 65,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Dans ce schéma simplifié d’un vaisseau, cliquez sur l’endothélium, principale source vasculaire de PGI₂.",
    "image": {
      "src": "/images/training/ue14/biochimie/eicosanoides/pgi2-txa2-endothelium-qzone.svg",
      "alt": "Schéma simplifié d’un vaisseau avec plaquettes dans la lumière et endothélium en bas",
      "width": 1200,
      "height": 600
    },
    "expectedZones": [
      {
        "id": "endothelium",
        "label": "Endothélium vasculaire",
        "x": 0.5,
        "y": 0.74,
        "tolerance": 0.09
      }
    ],
    "explanation": "La PGI₂ est synthétisée par l’endothélium vasculaire et s’oppose localement au TXA₂ plaquettaire."
  },
  {
    "order": 66,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une baisse de la production plaquettaire de TXA₂ devrait tendre à :",
    "choices": [
      {
        "content": "Diminuer un signal d’agrégation plaquettaire.",
        "correct": true,
        "explanation": "TXA₂ est proagrégant."
      },
      {
        "content": "Diminuer un signal vasoconstricteur.",
        "correct": true,
        "explanation": "TXA₂ est vasoconstricteur."
      },
      {
        "content": "Être cohérente avec l’effet antiagrégant de l’aspirine à faible dose.",
        "correct": true,
        "explanation": "L'aspirine à faible dose réduit la synthèse plaquettaire de TXA₂."
      },
      {
        "content": "Augmenter nécessairement l’action proagrégante du TXA₂.",
        "correct": false,
        "explanation": "Contradiction."
      }
    ],
    "explanation": "Le raisonnement se limite aux effets explicitement attribués à TXA₂."
  },
  {
    "order": 67,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une baisse de la production endothéliale de PGI₂ signifie la diminution :",
    "choices": [
      {
        "content": "D’un signal vasodilatateur.",
        "correct": true,
        "explanation": "Effet PGI₂."
      },
      {
        "content": "D’un signal antiagrégant.",
        "correct": true,
        "explanation": "Effet PGI₂."
      },
      {
        "content": "D’un médiateur produit par l’endothélium.",
        "correct": true,
        "explanation": "Origine."
      },
      {
        "content": "Du principal signal proagrégant produit par les plaquettes.",
        "correct": false,
        "explanation": "Cela correspond à TXA₂."
      }
    ],
    "explanation": "PGI₂ est l’élément endothélial vasodilatateur et antiagrégant du couple."
  },
  {
    "order": 68,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelle prostaglandine peut provoquer une vasoconstriction et une bronchoconstriction par contraction du muscle lisse ?",
    "choices": [
      {
        "content": "PGF₂α.",
        "correct": true,
        "explanation": "PGF₂α peut contracter différents muscles lisses."
      },
      {
        "content": "Une prostaglandine.",
        "correct": true,
        "explanation": "Famille."
      },
      {
        "content": "Un exemple d’effets différents malgré une structure proche.",
        "correct": true,
        "explanation": "Message pédagogique."
      },
      {
        "content": "Du glycogène.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "PGF₂α illustre la diversité fonctionnelle des prostaglandines."
  },
  {
    "order": 69,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un analogue synthétique de PGE₁ est utilisé en obstétrique. Quelles conclusions sont justifiées ?",
    "choices": [
      {
        "content": "Il s’agit du misoprostol.",
        "correct": true,
        "explanation": "Le misoprostol est un analogue de PGE₁."
      },
      {
        "content": "Il facilite le déclenchement de l’accouchement.",
        "correct": true,
        "explanation": "Il est utilisé pour la maturation cervicale et le déclenchement selon des protocoles médicaux."
      },
      {
        "content": "Il favorise contraction utérine et assouplissement cervical.",
        "correct": true,
        "explanation": "Effets."
      },
      {
        "content": "Il agit comme une β-glucosidase intestinale.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "Le contexte obstétrical relie une application thérapeutique à la famille des prostaglandines."
  },
  {
    "order": 70,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Aspirine et ibuprofène ont en commun :",
    "choices": [
      {
        "content": "D’être des inhibiteurs de COX.",
        "correct": true,
        "explanation": "Tous deux inhibent une cyclo-oxygénase, selon des mécanismes différents."
      },
      {
        "content": "D’agir en amont des prostanoïdes dans le schéma simplifié.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "De pouvoir réduire la synthèse de produits de la voie COX.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "D’être décrits comme activateurs de la 5-lipoxygénase.",
        "correct": false,
        "explanation": "Ces médicaments n'activent pas directement la 5-lipoxygénase."
      }
    ],
    "explanation": "Le point commun demandé est strictement l’inhibition de COX."
  },
  {
    "order": 71,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un étudiant affirme : « TXA₂ et PGI₂ ont les mêmes effets car ils sont tous deux des prostanoïdes ». La correction est :",
    "choices": [
      {
        "content": "Ils ont des effets vasculaires opposés.",
        "correct": true,
        "explanation": "Vasoconstriction/vasodilatation."
      },
      {
        "content": "Ils ont des effets opposés sur l’agrégation.",
        "correct": true,
        "explanation": "Pro-/antiagrégation."
      },
      {
        "content": "Leur origine cellulaire principale diffère.",
        "correct": true,
        "explanation": "Plaquettes/endothélium."
      },
      {
        "content": "L’appartenance à une même famille impose des effets identiques.",
        "correct": false,
        "explanation": "TXA₂ et PGI₂ illustrent au contraire des effets antagonistes."
      }
    ],
    "explanation": "L’appartenance à la même famille n’empêche pas des fonctions antagonistes."
  },
  {
    "order": 72,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Le caractère local des prostanoïdes est cohérent avec :",
    "choices": [
      {
        "content": "Une synthèse par de nombreux tissus.",
        "correct": true,
        "explanation": "Origine locale."
      },
      {
        "content": "Des demi-vies courtes.",
        "correct": true,
        "explanation": "Brièveté."
      },
      {
        "content": "Une action via des récepteurs cellulaires spécifiques.",
        "correct": true,
        "explanation": "Signalisation."
      },
      {
        "content": "Une obligation de circuler plusieurs mois dans le sang.",
        "correct": false,
        "explanation": "Contradictoire avec la demi-vie courte."
      }
    ],
    "explanation": "Synthèse locale, demi-vie courte et récepteurs spécifiques caractérisent ces médiateurs."
  },
  {
    "order": 73,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "En comparant les demi-vies de TXA₂ et de PGI₂, on peut retenir :",
    "choices": [
      {
        "content": "TXA₂ ≈ 30 s.",
        "correct": true,
        "explanation": "Valeur."
      },
      {
        "content": "PGI₂ ≈ 2–3 min.",
        "correct": true,
        "explanation": "Valeur."
      },
      {
        "content": "Les deux restent des médiateurs très brefs.",
        "correct": true,
        "explanation": "Ordre de grandeur."
      },
      {
        "content": "PGI₂ a une demi-vie de plusieurs jours.",
        "correct": false,
        "explanation": "Quelques minutes."
      }
    ],
    "explanation": "Les deux médiateurs agissent rapidement et localement."
  },
  {
    "order": 74,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Dans un schéma vasculaire, une plaquette et une cellule endothéliale produisent des médiateurs antagonistes. Les associations correctes sont :",
    "choices": [
      {
        "content": "Plaquette → TXA₂.",
        "correct": true,
        "explanation": "Origine."
      },
      {
        "content": "Endothélium → PGI₂.",
        "correct": true,
        "explanation": "Origine."
      },
      {
        "content": "TXA₂ → agrégation.",
        "correct": true,
        "explanation": "Effet."
      },
      {
        "content": "PGI₂ → agrégation plaquettaire accrue.",
        "correct": false,
        "explanation": "PGI₂ l’inhibe."
      }
    ],
    "explanation": "Le couple cellule–médiateur–effet constitue un repère transversal."
  },
  {
    "order": 75,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Dans le modèle simplifié de l’aspirine à faible dose :",
    "choices": [
      {
        "content": "La cible de voie est COX.",
        "correct": true,
        "explanation": "Inhibition."
      },
      {
        "content": "La synthèse de thromboxanes est diminuée.",
        "correct": true,
        "explanation": "L'inhibition de COX-1 diminue la production plaquettaire de TXA₂."
      },
      {
        "content": "L’agrégation plaquettaire est freinée.",
        "correct": true,
        "explanation": "Effet antiagrégant."
      },
      {
        "content": "La synthèse de TXA₂ est stimulée.",
        "correct": false,
        "explanation": "Contradiction."
      }
    ],
    "explanation": "L'inhibition plaquettaire de COX-1 diminue TXA₂ et freine l'agrégation."
  },
  {
    "order": 76,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Comparer le misoprostol et l’aspirine à faible dose :",
    "choices": [
      {
        "content": "Le misoprostol est un analogue de PGE₁.",
        "correct": true,
        "explanation": "Nature."
      },
      {
        "content": "L’aspirine inhibe la voie COX.",
        "correct": true,
        "explanation": "L'aspirine acétyle et inhibe la cyclo-oxygénase."
      },
      {
        "content": "Les deux illustrent des applications thérapeutiques des eicosanoïdes ou de leur voie.",
        "correct": true,
        "explanation": "Point commun."
      },
      {
        "content": "Les deux sont des glycosidases digestives.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "Ces deux médicaments illustrent des actions pharmacologiques sur un prostanoïde ou sur sa voie de synthèse."
  },
  {
    "order": 77,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Sélectionnez exactement les trois associations correctes.",
    "choices": [
      {
        "content": "TXA₂ — plaquettes — proagrégant.",
        "correct": true,
        "explanation": "Association."
      },
      {
        "content": "PGI₂ — endothélium — antiagrégant.",
        "correct": true,
        "explanation": "Association."
      },
      {
        "content": "Misoprostol — analogue PGE₁ — déclenchement de l’accouchement.",
        "correct": true,
        "explanation": "Association."
      },
      {
        "content": "Ibuprofène — activation obligatoire de COX.",
        "correct": false,
        "explanation": "L'ibuprofène inhibe COX."
      }
    ],
    "explanation": "Ces associations résument les principaux contextes biologiques et thérapeutiques de la section."
  },
  {
    "order": 78,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "TXA₂, PGI₂, COX et applications thérapeutiques : sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "TXA₂ favorise l’agrégation plaquettaire.",
        "correct": true,
        "explanation": "Effet."
      },
      {
        "content": "TXA₂ est vasoconstricteur.",
        "correct": true,
        "explanation": "Effet."
      },
      {
        "content": "PGI₂ inhibe l’agrégation.",
        "correct": true,
        "explanation": "Effet."
      },
      {
        "content": "PGI₂ est vasodilatatrice.",
        "correct": true,
        "explanation": "Effet."
      },
      {
        "content": "L’aspirine à faible dose est antiagrégante.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "TXA₂ est produit principalement par l’endothélium.",
        "correct": false,
        "explanation": "Plaquettes."
      },
      {
        "content": "PGI₂ est principalement proagrégante.",
        "correct": false,
        "explanation": "Antiagrégante."
      },
      {
        "content": "Le misoprostol inhibe les contractions utérines dans l’exemple.",
        "correct": false,
        "explanation": "Il les favorise."
      },
      {
        "content": "L’ibuprofène active COX.",
        "correct": false,
        "explanation": "Il l’inhibe."
      },
      {
        "content": "Les prostanoïdes ont tous des effets identiques.",
        "correct": false,
        "explanation": "Effets variés, parfois contraires."
      }
    ],
    "explanation": "Cette question consolide l'équilibre vasculaire TXA₂/PGI₂ et les applications pharmacologiques de leur voie."
  }
];
