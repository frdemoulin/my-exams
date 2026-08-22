import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 – Chimie générale – Chapitre 1.1 – Section C – Classification périodique */
export const UE14_CH1_CLASSIFICATION_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'organisation générale de la classification périodique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les colonnes verticales sont appelées groupes.",
        "correct": true,
        "explanation": "Les groupes rassemblent souvent des éléments aux propriétés voisines."
      },
      {
        "content": "Le numéro atomique Z augmente globalement de gauche à droite au sein d'une période.",
        "correct": true,
        "explanation": "Les éléments sont ordonnés par numéro atomique croissant."
      },
      {
        "content": "Les gaz nobles occupent le groupe 1.",
        "correct": false,
        "explanation": "Ils occupent le groupe 18."
      },
      {
        "content": "Les lignes horizontales sont appelées périodes.",
        "correct": true,
        "explanation": "Les périodes sont numérotées de 1 à 7."
      },
      {
        "content": "Tous les éléments d'une même période ont le même nombre d'électrons de valence.",
        "correct": false,
        "explanation": "C'est plutôt au sein d'un même groupe principal que les configurations de valence sont analogues."
      }
    ],
    "explanation": "La classification moderne ordonne les éléments par Z croissant et met en évidence les récurrences de configuration électronique."
  },
  {
    "order": 57,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Où se situe principalement le bloc p dans la classification périodique ?",
    "choices": [
      {
        "content": "Il n'existe que dans la première période.",
        "correct": false,
        "explanation": "Le bloc p apparaît à partir de la deuxième période."
      },
      {
        "content": "Uniquement dans les deux premières colonnes.",
        "correct": false,
        "explanation": "Ces colonnes appartiennent au bloc s."
      },
      {
        "content": "Dans la partie droite du tableau, groupes 13 à 18, à l'exception de l'hélium qui appartient au bloc s.",
        "correct": true,
        "explanation": "Le bloc p correspond au remplissage d'une sous-couche np."
      },
      {
        "content": "Dans les deux lignes séparées en bas.",
        "correct": false,
        "explanation": "Ces séries correspondent au bloc f."
      },
      {
        "content": "Uniquement dans la zone centrale des métaux de transition.",
        "correct": false,
        "explanation": "Cette zone correspond au bloc d."
      }
    ],
    "explanation": "Le bloc p occupe la partie droite de la classification, avec l'exception structurale de l'hélium."
  },
  {
    "order": 56,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel élément possède le numéro atomique $Z=8$ ?",
    "choices": [
      {
        "content": "L'azote.",
        "correct": false,
        "explanation": "L'azote a Z=7."
      },
      {
        "content": "Le carbone.",
        "correct": false,
        "explanation": "Le carbone a Z=6."
      },
      {
        "content": "Le néon.",
        "correct": false,
        "explanation": "Le néon a Z=10."
      },
      {
        "content": "L'oxygène.",
        "correct": true,
        "explanation": "L'oxygène possède 8 protons."
      },
      {
        "content": "Le fluor.",
        "correct": false,
        "explanation": "Le fluor a Z=9."
      }
    ],
    "explanation": "Le numéro atomique est l'identifiant de l'élément : Z=8 correspond à O."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle famille occupe le groupe 18 de la classification périodique ?",
    "choices": [
      {
        "content": "Les halogènes.",
        "correct": false,
        "explanation": "Les halogènes occupent le groupe 17."
      },
      {
        "content": "Les alcalino-terreux.",
        "correct": false,
        "explanation": "Ils occupent le groupe 2."
      },
      {
        "content": "Les gaz nobles.",
        "correct": true,
        "explanation": "He, Ne, Ar, Kr, Xe, Rn et Og sont placés dans le groupe 18."
      },
      {
        "content": "Les métaux alcalins.",
        "correct": false,
        "explanation": "Ils occupent le groupe 1 hors hydrogène."
      },
      {
        "content": "Les chalcogènes.",
        "correct": false,
        "explanation": "Ils occupent le groupe 16."
      }
    ],
    "explanation": "Les gaz nobles possèdent une couche externe fermée dans les configurations atomiques usuelles, ce qui explique leur faible réactivité générale."
  },
  {
    "order": 58,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Le sodium neutre a pour configuration fondamentale $[\\mathrm{Ne}]\\,3s^1$. Que peut-on en déduire ?",
    "choices": [
      {
        "content": "Il appartient au bloc p.",
        "correct": false,
        "explanation": "Le dernier électron occupe une sous-couche s."
      },
      {
        "content": "Il se situe en période 3 et dans le groupe 1.",
        "correct": true,
        "explanation": "Le plus grand n est 3 et la configuration externe ns¹ caractérise le groupe 1."
      },
      {
        "content": "Il appartient au groupe 18.",
        "correct": false,
        "explanation": "Le groupe 18 correspond aux gaz nobles."
      },
      {
        "content": "Il possède une couche externe complète.",
        "correct": false,
        "explanation": "3s¹ n'est pas une couche fermée."
      },
      {
        "content": "Il se situe en période 1 et dans le groupe 3.",
        "correct": false,
        "explanation": "n=3 indique la période 3."
      }
    ],
    "explanation": "La configuration électronique permet de relier période, bloc et groupe pour les éléments des groupes principaux."
  },
  {
    "order": 59,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Le magnésium neutre a pour configuration $[\\mathrm{Ne}]\\,3s^2$. Indiquez sa période et son groupe sous la forme « période X, groupe Y ».",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "période 3, groupe 2",
        "periode 3, groupe 2",
        "3, 2"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le plus grand n occupé est 3 : période 3. La configuration externe 3s² correspond au groupe 2."
  },
  {
    "order": 60,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les halogènes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils tendent souvent à gagner un électron pour atteindre une configuration proche d'un gaz noble.",
        "correct": true,
        "explanation": "Cela conduit fréquemment à des anions monovalents."
      },
      {
        "content": "Ils appartiennent tous au bloc d.",
        "correct": false,
        "explanation": "Ils appartiennent au bloc p."
      },
      {
        "content": "Ils occupent le groupe 17.",
        "correct": true,
        "explanation": "F, Cl, Br, I et At appartiennent au groupe 17."
      },
      {
        "content": "Le chlore est un métal alcalin.",
        "correct": false,
        "explanation": "Le chlore est un halogène non métallique."
      },
      {
        "content": "Leur configuration externe générale est $ns^2np^5$.",
        "correct": true,
        "explanation": "Ils possèdent sept électrons de valence dans les groupes principaux."
      }
    ],
    "explanation": "Les halogènes sont des non-métaux du groupe 17, caractérisés par une configuration externe $ns^2np^5$."
  },
  {
    "order": 61,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant métaux, non-métaux et métalloïdes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Tous les non-métaux sont des gaz.",
        "correct": false,
        "explanation": "Le soufre est solide et le brome est liquide, par exemple."
      },
      {
        "content": "Tous les métaux sont solides à température ambiante.",
        "correct": false,
        "explanation": "Le mercure est liquide à température ambiante."
      },
      {
        "content": "Les métaux occupent majoritairement la gauche et le centre du tableau.",
        "correct": true,
        "explanation": "Ils constituent la majorité des éléments."
      },
      {
        "content": "Les non-métaux sont surtout situés dans la partie droite du tableau, avec l'hydrogène comme exception de position.",
        "correct": true,
        "explanation": "La plupart se trouvent à droite de la ligne des métalloïdes."
      },
      {
        "content": "Les métalloïdes présentent des propriétés intermédiaires entre métaux et non-métaux.",
        "correct": true,
        "explanation": "Le silicium et le germanium en sont des exemples classiques."
      }
    ],
    "explanation": "La frontière métal/non-métal n'est pas absolue ; les métalloïdes occupent une zone intermédiaire de propriétés."
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle configuration électronique externe est caractéristique d'un élément du bloc p ?",
    "choices": [
      {
        "content": "$ns^1$ uniquement.",
        "correct": false,
        "explanation": "Cette forme caractérise le bloc s."
      },
      {
        "content": "$(n-2)f^7ns^2$.",
        "correct": false,
        "explanation": "Cette forme correspond au bloc f."
      },
      {
        "content": "$ns^2np^3$.",
        "correct": true,
        "explanation": "Le dernier électron entre dans une sous-couche p."
      },
      {
        "content": "$(n-1)d^5ns^2$.",
        "correct": false,
        "explanation": "Cette forme correspond au bloc d."
      },
      {
        "content": "$1s^2$ uniquement pour tous les éléments.",
        "correct": false,
        "explanation": "Seul l'hélium possède cette configuration complète."
      }
    ],
    "explanation": "Un élément du bloc p possède son électron différenciant dans une sous-couche p."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux éléments classiquement considérés comme des oligoéléments essentiels chez l'être humain parmi cette liste.",
    "choices": [
      {
        "content": "Oxygène (O).",
        "correct": false,
        "explanation": "L'oxygène est un élément majeur du vivant, pas un oligoélément."
      },
      {
        "content": "Hydrogène (H).",
        "correct": false,
        "explanation": "L'hydrogène est un élément majeur du vivant."
      },
      {
        "content": "Carbone (C).",
        "correct": false,
        "explanation": "Le carbone est un élément majeur de la matière organique."
      },
      {
        "content": "Iode (I).",
        "correct": true,
        "explanation": "L'iode est nécessaire à la synthèse des hormones thyroïdiennes."
      },
      {
        "content": "Fer (Fe).",
        "correct": true,
        "explanation": "Le fer est requis en faible quantité et joue notamment un rôle dans l'hémoglobine."
      }
    ],
    "explanation": "Un oligoélément est nécessaire en très faible quantité ; fer et iode en sont deux exemples importants en physiologie humaine."
  }
];

export const UE14_CH1_CLASSIFICATION_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles affirmations relient correctement configuration électronique et classification périodique ?",
    "choices": [
      {
        "content": "La classification moderne est ordonnée par masse atomique croissante.",
        "correct": false,
        "explanation": "Elle est ordonnée par numéro atomique Z croissant."
      },
      {
        "content": "Le numéro de groupe est toujours égal au nombre total d'électrons de l'atome.",
        "correct": false,
        "explanation": "Le groupe ne correspond pas au nombre total d'électrons."
      },
      {
        "content": "Le bloc est déterminé par le type de sous-couche en cours de remplissage.",
        "correct": true,
        "explanation": "On distingue les blocs s, p, d et f."
      },
      {
        "content": "Les éléments d'un même groupe principal ont des configurations électroniques externes analogues.",
        "correct": true,
        "explanation": "Cela explique leurs propriétés chimiques voisines."
      },
      {
        "content": "La période est liée au plus grand nombre quantique principal occupé dans l'état fondamental.",
        "correct": true,
        "explanation": "Pour les éléments usuels, le plus grand n occupé donne la période."
      }
    ],
    "explanation": "La structure du tableau périodique reflète le remplissage progressif des sous-couches électroniques."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'iode ($Z=53$), quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il appartient au groupe 17.",
        "correct": true,
        "explanation": "L'iode est un halogène."
      },
      {
        "content": "Il appartient au bloc p.",
        "correct": true,
        "explanation": "Son électron différenciant occupe une sous-couche p."
      },
      {
        "content": "Il est situé en période 4.",
        "correct": false,
        "explanation": "L'iode est en période 5."
      },
      {
        "content": "Sa configuration externe est de type $5s^2 5p^5$.",
        "correct": true,
        "explanation": "Il possède sept électrons sur sa couche externe."
      },
      {
        "content": "C'est un métal alcalin.",
        "correct": false,
        "explanation": "C'est un non-métal halogène."
      }
    ],
    "explanation": "L'iode est un halogène de période 5, groupe 17, bloc p."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux métalloïdes classiques parmi les éléments proposés.",
    "choices": [
      {
        "content": "Calcium (Ca).",
        "correct": false,
        "explanation": "Le calcium est un métal alcalino-terreux."
      },
      {
        "content": "Sodium (Na).",
        "correct": false,
        "explanation": "Le sodium est un métal alcalin."
      },
      {
        "content": "Silicium (Si).",
        "correct": true,
        "explanation": "Le silicium est un métalloïde classique."
      },
      {
        "content": "Chlore (Cl).",
        "correct": false,
        "explanation": "Le chlore est un non-métal halogène."
      },
      {
        "content": "Germanium (Ge).",
        "correct": true,
        "explanation": "Le germanium est également classé parmi les métalloïdes."
      }
    ],
    "explanation": "Les métalloïdes occupent la zone frontière entre métaux et non-métaux ; Si et Ge sont des exemples usuels."
  },
  {
    "order": 67,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propriétés générales sont correctement associées aux grandes familles métalliques ou non métalliques ?",
    "choices": [
      {
        "content": "Les gaz nobles sont parmi les éléments les plus réactifs du tableau.",
        "correct": false,
        "explanation": "Ils sont généralement peu réactifs."
      },
      {
        "content": "Les métalloïdes peuvent présenter un comportement semi-conducteur.",
        "correct": true,
        "explanation": "Le silicium en est l'exemple emblématique."
      },
      {
        "content": "Les non-métaux ont souvent tendance à gagner ou partager des électrons dans leurs composés.",
        "correct": true,
        "explanation": "Ils forment fréquemment des anions ou des liaisons covalentes."
      },
      {
        "content": "Les métaux sont généralement de bons conducteurs électriques.",
        "correct": true,
        "explanation": "La présence d'électrons délocalisables favorise la conduction."
      },
      {
        "content": "Tous les métaux forment uniquement des anions.",
        "correct": false,
        "explanation": "Les métaux forment fréquemment des cations."
      }
    ],
    "explanation": "Les grandes tendances métalliques, non métalliques et métalloïdes permettent d'anticiper certaines propriétés physiques et chimiques."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix éléments suivants, sélectionnez exactement les cinq oligoéléments essentiels classiquement cités chez l'être humain.",
    "choices": [
      {
        "content": "Calcium (Ca).",
        "correct": false,
        "explanation": "Le calcium est un macroélément minéral, requis en quantité bien supérieure à celle des oligoéléments."
      },
      {
        "content": "Hydrogène (H).",
        "correct": false,
        "explanation": "L'hydrogène est un élément majeur."
      },
      {
        "content": "Zinc (Zn).",
        "correct": true,
        "explanation": "Le zinc est un oligoélément essentiel."
      },
      {
        "content": "Carbone (C).",
        "correct": false,
        "explanation": "Le carbone est un élément majeur du vivant."
      },
      {
        "content": "Sélénium (Se).",
        "correct": true,
        "explanation": "Le sélénium est requis à l'état de traces."
      },
      {
        "content": "Azote (N).",
        "correct": false,
        "explanation": "L'azote est un élément majeur."
      },
      {
        "content": "Iode (I).",
        "correct": true,
        "explanation": "L'iode est un oligoélément essentiel."
      },
      {
        "content": "Oxygène (O).",
        "correct": false,
        "explanation": "L'oxygène est un élément majeur."
      },
      {
        "content": "Cuivre (Cu).",
        "correct": true,
        "explanation": "Le cuivre est un oligoélément essentiel."
      },
      {
        "content": "Fer (Fe).",
        "correct": true,
        "explanation": "Le fer est un oligoélément essentiel."
      }
    ],
    "explanation": "Les oligoéléments sont nécessaires en très faibles quantités. Fe, Zn, Cu, I et Se font partie des exemples classiques."
  },
  {
    "order": 68,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Un atome neutre possède une configuration se terminant par $3s^2$. Quelle identification est la plus cohérente ?",
    "choices": [
      {
        "content": "Magnésium, période 3, groupe 2.",
        "correct": true,
        "explanation": "$[Ne]3s^2$ correspond au magnésium."
      },
      {
        "content": "Néon, période 2, groupe 18.",
        "correct": false,
        "explanation": "Le néon se termine par 2p⁶."
      },
      {
        "content": "Calcium, période 4, groupe 2.",
        "correct": false,
        "explanation": "Le calcium se termine par 4s²."
      },
      {
        "content": "Sodium, période 3, groupe 1.",
        "correct": false,
        "explanation": "Le sodium se termine par 3s¹."
      },
      {
        "content": "Aluminium, période 3, groupe 13.",
        "correct": false,
        "explanation": "L'aluminium se termine par 3p¹."
      }
    ],
    "explanation": "La configuration $[Ne]3s^2$ identifie Mg : période 3, groupe 2, bloc s."
  },
  {
    "order": 69,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Pour un élément des groupes principaux de configuration externe générale $ns^2$, quelle famille est généralement concernée, en excluant l'hélium ?",
    "choices": [
      {
        "content": "Les chalcogènes du groupe 16.",
        "correct": false,
        "explanation": "Ils ont généralement ns²np⁴."
      },
      {
        "content": "Les gaz nobles du groupe 18.",
        "correct": false,
        "explanation": "À l'exception de He, ils ont ns²np⁶."
      },
      {
        "content": "Les halogènes du groupe 17.",
        "correct": false,
        "explanation": "Ils ont une configuration externe ns²np⁵."
      },
      {
        "content": "Les métaux alcalins du groupe 1.",
        "correct": false,
        "explanation": "Ils ont généralement ns¹."
      },
      {
        "content": "Les métaux alcalino-terreux du groupe 2.",
        "correct": true,
        "explanation": "Be, Mg, Ca, Sr, Ba et Ra ont une configuration externe ns²."
      }
    ],
    "explanation": "L'exception hélium rappelle qu'une configuration ns² ne suffit pas sans tenir compte de la période."
  },
  {
    "order": 70,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Le chlore ($Z=17$) a pour configuration $[Ne]3s^2 3p^5$. Indiquez sa période et son groupe sous la forme « période X, groupe Y ».",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "période 3, groupe 17",
        "periode 3, groupe 17",
        "3, 17"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le plus grand n est 3 et la configuration externe ns²np⁵ caractérise le groupe 17."
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Le zirconium ($Z=40$) est utilisé dans certains biomatériaux. Quelle proposition décrit correctement sa position dans la classification ?",
    "choices": [
      {
        "content": "C'est un gaz noble du groupe 18.",
        "correct": false,
        "explanation": "Le zirconium est un métal."
      },
      {
        "content": "C'est un halogène du bloc p.",
        "correct": false,
        "explanation": "Il ne possède pas une configuration externe de type halogène."
      },
      {
        "content": "C'est un lanthanide du bloc f.",
        "correct": false,
        "explanation": "Le zirconium précède la série des lanthanides."
      },
      {
        "content": "C'est un métal de transition du bloc d, situé en période 5.",
        "correct": true,
        "explanation": "Le zirconium appartient au groupe 4, période 5, bloc d."
      },
      {
        "content": "C'est un métal alcalin du groupe 1.",
        "correct": false,
        "explanation": "Il appartient au groupe 4."
      }
    ],
    "explanation": "Le zirconium est un métal de transition du bloc d, ce qui contribue à ses propriétés métalliques utiles en ingénierie des matériaux."
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant lanthanides, actinides et bloc f, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les lanthanides appartiennent à la période 6.",
        "correct": true,
        "explanation": "Ils correspondent au remplissage progressif de la sous-couche 4f."
      },
      {
        "content": "Le bloc f ne contient aucune orbitale f.",
        "correct": false,
        "explanation": "Il est précisément défini par le remplissage des orbitales f."
      },
      {
        "content": "Tous les lanthanides sont des gaz nobles.",
        "correct": false,
        "explanation": "Ce sont des métaux."
      },
      {
        "content": "Ces deux séries sont généralement représentées séparément sous le corps principal du tableau.",
        "correct": true,
        "explanation": "Cette présentation compacte évite d'élargir excessivement la classification."
      },
      {
        "content": "Les actinides appartiennent à la période 7.",
        "correct": true,
        "explanation": "Ils correspondent au remplissage progressif de 5f."
      }
    ],
    "explanation": "Les deux séries f sont intégrées aux périodes 6 et 7 même si elles sont souvent dessinées en dessous du tableau principal."
  }
];
