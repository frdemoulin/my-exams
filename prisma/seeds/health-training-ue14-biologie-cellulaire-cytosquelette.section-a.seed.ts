import type { SeedQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch3 — Organisation générale et microtubules — V2 active */
export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de « Organisation générale du cytosquelette », sélectionnez les affirmations fausses.",
    "explanation": "Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires.",
    "choices": [
      {
        "content": "Le cytosquelette est une paroi extracellulaire minérale comparable à l’os.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      },
      {
        "content": "Le cytosquelette n’a aucun rôle dans les mouvements cellulaires.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      },
      {
        "content": "Les microtubules, les filaments d’actine et les filaments intermédiaires constituent les trois grandes familles du cytosquelette eucaryote.",
        "correct": false,
        "explanation": "Cette affirmation est correcte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      },
      {
        "content": "Les trois familles du cytosquelette sont constituées de la même protéine monomérique.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      },
      {
        "content": "Le cytosquelette n’existe que dans les cellules musculaires.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      }
    ]
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Sur le thème « Dimensions et constituants des polymères du cytosquelette », quelle proposition est exacte ?",
    "explanation": "Les microtubules ont un diamètre externe d’environ 25 nm, les filaments intermédiaires autour de 10 nm et les filaments d’actine autour de 7 nm. Microtubules et actine sont formés de sous-unités globulaires ; les FI proviennent de protéines fibreuses.",
    "choices": [
      {
        "content": "Les filaments intermédiaires sont constitués exclusivement de tubuline.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les microtubules ont un diamètre externe d’environ 25 nm, les filaments intermédiaires autour de 10 nm et les filaments d’actine autour de 7 nm. Microtubules et actine sont formés de sous-unités globulaires ; les FI proviennent de protéines fibreuses."
      },
      {
        "content": "Les microtubules sont les plus fins des trois grandes familles du cytosquelette.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les microtubules ont un diamètre externe d’environ 25 nm, les filaments intermédiaires autour de 10 nm et les filaments d’actine autour de 7 nm. Microtubules et actine sont formés de sous-unités globulaires ; les FI proviennent de protéines fibreuses."
      },
      {
        "content": "Le diamètre externe d’un microtubule est de l’ordre de 25 nm.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les microtubules ont un diamètre externe d’environ 25 nm, les filaments intermédiaires autour de 10 nm et les filaments d’actine autour de 7 nm. Microtubules et actine sont formés de sous-unités globulaires ; les FI proviennent de protéines fibreuses."
      },
      {
        "content": "Les microtubules sont constitués de monomères d’actine.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les microtubules ont un diamètre externe d’environ 25 nm, les filaments intermédiaires autour de 10 nm et les filaments d’actine autour de 7 nm. Microtubules et actine sont formés de sous-unités globulaires ; les FI proviennent de protéines fibreuses."
      },
      {
        "content": "Les filaments d’actine ont typiquement un diamètre de 25 nm.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les microtubules ont un diamètre externe d’environ 25 nm, les filaments intermédiaires autour de 10 nm et les filaments d’actine autour de 7 nm. Microtubules et actine sont formés de sous-unités globulaires ; les FI proviennent de protéines fibreuses."
      }
    ]
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelles sont les trois grandes familles de polymères du cytosquelette ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "microtubules, filaments d'actine, filaments intermédiaires",
        "microtubules, microfilaments d'actine, filaments intermédiaires",
        "microtubules actine filaments intermédiaires"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
  },
  {
    "order": 4,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement « Structure et polarité des microtubules » ?",
    "explanation": "Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes.",
    "choices": [
      {
        "content": "Un microtubule cytoplasmique canonique comporte généralement 13 protofilaments.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      },
      {
        "content": "Les microtubules sont dépourvus de polarité structurale.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      },
      {
        "content": "Un microtubule canonique est un câble plein dépourvu de lumière centrale.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      },
      {
        "content": "Les extrémités plus et moins ont toujours exactement la même dynamique.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      },
      {
        "content": "Les protofilaments sont constitués uniquement de tubuline alpha.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      }
    ]
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions ci-dessous relatives à « Centrosome et nucléation des microtubules », laquelle est correcte ?",
    "explanation": "Le centrosome est le principal centre organisateur des microtubules de nombreuses cellules animales. Il contient deux centrioles entourés de matériel péricentriolaire riche notamment en complexes à γ-tubuline qui nucléent les microtubules.",
    "choices": [
      {
        "content": "Dans de nombreuses cellules animales, le centrosome constitue un centre organisateur majeur des microtubules.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le centrosome est le principal centre organisateur des microtubules de nombreuses cellules animales. Il contient deux centrioles entourés de matériel péricentriolaire riche notamment en complexes à γ-tubuline qui nucléent les microtubules."
      },
      {
        "content": "Le centrosome est un organite entouré d’une double membrane.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le centrosome est le principal centre organisateur des microtubules de nombreuses cellules animales. Il contient deux centrioles entourés de matériel péricentriolaire riche notamment en complexes à γ-tubuline qui nucléent les microtubules."
      },
      {
        "content": "Les centrioles sont constitués de neuf doublets de microfilaments d’actine.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le centrosome est le principal centre organisateur des microtubules de nombreuses cellules animales. Il contient deux centrioles entourés de matériel péricentriolaire riche notamment en complexes à γ-tubuline qui nucléent les microtubules."
      },
      {
        "content": "La nucléation des microtubules est assurée par l’actine G.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le centrosome est le principal centre organisateur des microtubules de nombreuses cellules animales. Il contient deux centrioles entourés de matériel péricentriolaire riche notamment en complexes à γ-tubuline qui nucléent les microtubules."
      },
      {
        "content": "Toutes les extrémités plus des microtubules sont obligatoirement fixées au centrosome.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le centrosome est le principal centre organisateur des microtubules de nombreuses cellules animales. Il contient deux centrioles entourés de matériel péricentriolaire riche notamment en complexes à γ-tubuline qui nucléent les microtubules."
      }
    ]
  },
  {
    "order": 6,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sélectionnez les affirmations compatibles avec « Instabilité dynamique des microtubules ».",
    "explanation": "La tubuline β lie un GTP échangeable qui est hydrolysé après incorporation. Une coiffe riche en tubuline-GTP stabilise l’extrémité en croissance ; sa perte favorise une catastrophe. Des sauvetages peuvent reprendre la croissance.",
    "choices": [
      {
        "content": "La perte de la coiffe GTP peut déclencher une catastrophe microtubulaire.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. La tubuline β lie un GTP échangeable qui est hydrolysé après incorporation. Une coiffe riche en tubuline-GTP stabilise l’extrémité en croissance ; sa perte favorise une catastrophe. Des sauvetages peuvent reprendre la croissance."
      },
      {
        "content": "La tubuline bêta porte un GTP échangeable qui peut être hydrolysé après incorporation au microtubule.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. La tubuline β lie un GTP échangeable qui est hydrolysé après incorporation. Une coiffe riche en tubuline-GTP stabilise l’extrémité en croissance ; sa perte favorise une catastrophe. Des sauvetages peuvent reprendre la croissance."
      },
      {
        "content": "Une coiffe de tubuline liée au GTP favorise la stabilité de l’extrémité en croissance.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. La tubuline β lie un GTP échangeable qui est hydrolysé après incorporation. Une coiffe riche en tubuline-GTP stabilise l’extrémité en croissance ; sa perte favorise une catastrophe. Des sauvetages peuvent reprendre la croissance."
      },
      {
        "content": "L’hydrolyse du GTP par la tubuline bêta se produit uniquement avant toute incorporation au polymère.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. La tubuline β lie un GTP échangeable qui est hydrolysé après incorporation. Une coiffe riche en tubuline-GTP stabilise l’extrémité en croissance ; sa perte favorise une catastrophe. Des sauvetages peuvent reprendre la croissance."
      },
      {
        "content": "La tubuline alpha porte un GTP non échangeable dans l’hétérodimère.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. La tubuline β lie un GTP échangeable qui est hydrolysé après incorporation. Une coiffe riche en tubuline-GTP stabilise l’extrémité en croissance ; sa perte favorise une catastrophe. Des sauvetages peuvent reprendre la croissance."
      }
    ]
  },
  {
    "order": 7,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Organisation générale du cytosquelette », lesquelles sont exactes ?",
    "explanation": "Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires.",
    "choices": [
      {
        "content": "Tous les polymères du cytosquelette sont immobiles et permanents.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      },
      {
        "content": "Dans ce contexte, le cytosquelette n’existe que dans les cellules musculaires.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      },
      {
        "content": "Le cytosquelette participe à des mouvements cellulaires et intracellulaires.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      },
      {
        "content": "Dans ce contexte, le cytosquelette n’a aucun rôle dans les mouvements cellulaires.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      },
      {
        "content": "Le cytosquelette contribue à l’organisation spatiale du cytoplasme.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      }
    ]
  },
  {
    "order": 8,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de « Dimensions et constituants des polymères du cytosquelette », sélectionnez les propositions exactes.",
    "explanation": "Les microtubules ont un diamètre externe d’environ 25 nm, les filaments intermédiaires autour de 10 nm et les filaments d’actine autour de 7 nm. Microtubules et actine sont formés de sous-unités globulaires ; les FI proviennent de protéines fibreuses.",
    "choices": [
      {
        "content": "Les microtubules sont construits à partir d’hétérodimères de tubuline alpha/bêta.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les microtubules ont un diamètre externe d’environ 25 nm, les filaments intermédiaires autour de 10 nm et les filaments d’actine autour de 7 nm. Microtubules et actine sont formés de sous-unités globulaires ; les FI proviennent de protéines fibreuses."
      },
      {
        "content": "Un filament d’actine a un diamètre d’environ 7 nm.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les microtubules ont un diamètre externe d’environ 25 nm, les filaments intermédiaires autour de 10 nm et les filaments d’actine autour de 7 nm. Microtubules et actine sont formés de sous-unités globulaires ; les FI proviennent de protéines fibreuses."
      },
      {
        "content": "Les filaments intermédiaires ont un diamètre proche de 10 nm.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les microtubules ont un diamètre externe d’environ 25 nm, les filaments intermédiaires autour de 10 nm et les filaments d’actine autour de 7 nm. Microtubules et actine sont formés de sous-unités globulaires ; les FI proviennent de protéines fibreuses."
      },
      {
        "content": "Dans ce contexte, les microtubules sont constitués de monomères d’actine.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les microtubules ont un diamètre externe d’environ 25 nm, les filaments intermédiaires autour de 10 nm et les filaments d’actine autour de 7 nm. Microtubules et actine sont formés de sous-unités globulaires ; les FI proviennent de protéines fibreuses."
      },
      {
        "content": "Dans ce contexte, les filaments intermédiaires sont constitués exclusivement de tubuline.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les microtubules ont un diamètre externe d’environ 25 nm, les filaments intermédiaires autour de 10 nm et les filaments d’actine autour de 7 nm. Microtubules et actine sont formés de sous-unités globulaires ; les FI proviennent de protéines fibreuses."
      }
    ]
  },
  {
    "order": 9,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "question": "Parmi les dix affirmations suivantes sur « Structure et polarité des microtubules », cinq sont exactes : sélectionnez-les.",
    "explanation": "Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes.",
    "choices": [
      {
        "content": "Les protofilaments sont constitués d’hétérodimères alpha/bêta-tubuline alignés tête-bêche de façon répétitive.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      },
      {
        "content": "Un microtubule est un cylindre creux.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      },
      {
        "content": "Dans ce contexte, les extrémités plus et moins ont toujours exactement la même dynamique.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      },
      {
        "content": "Les microtubules cytoplasmiques sont constitués de 9 triplets de tubuline.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      },
      {
        "content": "Les extrémités plus et moins d’un microtubule ne sont pas équivalentes.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      },
      {
        "content": "L’extrémité plus d’un microtubule est généralement la plus dynamique dans une cellule interphasique.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      },
      {
        "content": "Un microtubule est formé d’une seule chaîne continue de 13 tubulines.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      },
      {
        "content": "L’orientation parallèle des dimères confère une polarité au microtubule.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      },
      {
        "content": "La polarité d’un microtubule dépend de l’orientation du noyau plutôt que de l’assemblage des dimères.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      },
      {
        "content": "Dans ce contexte, les protofilaments sont constitués uniquement de tubuline alpha.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      }
    ],
    "requiredSelectionCount": 5
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel est le diamètre approximatif d’un microtubule ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "25 nm",
        "24 nm",
        "environ 25 nm",
        "environ 24 nm"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Un microtubule a un diamètre externe voisin de 25 nm."
  },
  {
    "order": 11,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de protofilaments comporte généralement un microtubule cytoplasmique canonique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "13",
        "treize",
        "13 protofilaments"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Un microtubule canonique est généralement constitué de 13 protofilaments."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sélectionnez les affirmations compatibles avec « Centrosome et nucléation des microtubules ».",
    "explanation": "Le centrosome est le principal centre organisateur des microtubules de nombreuses cellules animales. Il contient deux centrioles entourés de matériel péricentriolaire riche notamment en complexes à γ-tubuline qui nucléent les microtubules.",
    "choices": [
      {
        "content": "Les centrioles sont constitués de neuf doublets de microfilaments d’actine.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le centrosome est le principal centre organisateur des microtubules de nombreuses cellules animales. Il contient deux centrioles entourés de matériel péricentriolaire riche notamment en complexes à γ-tubuline qui nucléent les microtubules."
      },
      {
        "content": "Aucun microtubule ne peut exister en dehors d’un réseau strictement centrosomal.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le centrosome est le principal centre organisateur des microtubules de nombreuses cellules animales. Il contient deux centrioles entourés de matériel péricentriolaire riche notamment en complexes à γ-tubuline qui nucléent les microtubules."
      },
      {
        "content": "Les centrioles sont généralement disposés approximativement perpendiculairement l’un à l’autre dans un centrosome interphasique.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le centrosome est le principal centre organisateur des microtubules de nombreuses cellules animales. Il contient deux centrioles entourés de matériel péricentriolaire riche notamment en complexes à γ-tubuline qui nucléent les microtubules."
      },
      {
        "content": "Toutes les extrémités plus des microtubules sont obligatoirement fixées au centrosome.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le centrosome est le principal centre organisateur des microtubules de nombreuses cellules animales. Il contient deux centrioles entourés de matériel péricentriolaire riche notamment en complexes à γ-tubuline qui nucléent les microtubules."
      },
      {
        "content": "Un centrosome comprend typiquement une paire de centrioles entourée de matériel péricentriolaire.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le centrosome est le principal centre organisateur des microtubules de nombreuses cellules animales. Il contient deux centrioles entourés de matériel péricentriolaire riche notamment en complexes à γ-tubuline qui nucléent les microtubules."
      }
    ]
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Concernant « Instabilité dynamique des microtubules », choisissez exactement 3 affirmations correctes.",
    "explanation": "La tubuline β lie un GTP échangeable qui est hydrolysé après incorporation. Une coiffe riche en tubuline-GTP stabilise l’extrémité en croissance ; sa perte favorise une catastrophe. Des sauvetages peuvent reprendre la croissance.",
    "choices": [
      {
        "content": "Une coiffe de tubuline liée au GTP favorise la stabilité de l’extrémité en croissance.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. La tubuline β lie un GTP échangeable qui est hydrolysé après incorporation. Une coiffe riche en tubuline-GTP stabilise l’extrémité en croissance ; sa perte favorise une catastrophe. Des sauvetages peuvent reprendre la croissance."
      },
      {
        "content": "Une catastrophe désigne la fusion de deux microtubules en un seul.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. La tubuline β lie un GTP échangeable qui est hydrolysé après incorporation. Une coiffe riche en tubuline-GTP stabilise l’extrémité en croissance ; sa perte favorise une catastrophe. Des sauvetages peuvent reprendre la croissance."
      },
      {
        "content": "La tubuline alpha porte un GTP non échangeable dans l’hétérodimère.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. La tubuline β lie un GTP échangeable qui est hydrolysé après incorporation. Une coiffe riche en tubuline-GTP stabilise l’extrémité en croissance ; sa perte favorise une catastrophe. Des sauvetages peuvent reprendre la croissance."
      },
      {
        "content": "Les microtubules cytosoliques ont une longueur fixe pendant toute la vie cellulaire.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. La tubuline β lie un GTP échangeable qui est hydrolysé après incorporation. Une coiffe riche en tubuline-GTP stabilise l’extrémité en croissance ; sa perte favorise une catastrophe. Des sauvetages peuvent reprendre la croissance."
      },
      {
        "content": "La perte de la coiffe GTP peut déclencher une catastrophe microtubulaire.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. La tubuline β lie un GTP échangeable qui est hydrolysé après incorporation. Une coiffe riche en tubuline-GTP stabilise l’extrémité en croissance ; sa perte favorise une catastrophe. Des sauvetages peuvent reprendre la croissance."
      }
    ],
    "requiredSelectionCount": 3
  },
  {
    "order": 14,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de « Organisation générale du cytosquelette », sélectionnez les propositions exactes.",
    "explanation": "Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires.",
    "choices": [
      {
        "content": "Le cytosquelette participe à des mouvements cellulaires et intracellulaires.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      },
      {
        "content": "Des protéines associées régulent l’assemblage, l’organisation et les fonctions des polymères du cytosquelette.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      },
      {
        "content": "Les lysosomes constituent l’une des trois familles du cytosquelette.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      },
      {
        "content": "Les différents polymères du cytosquelette ont des compositions et des propriétés mécaniques distinctes.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      },
      {
        "content": "Tous les polymères du cytosquelette sont immobiles et permanents.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      }
    ]
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant « Dimensions et constituants des polymères du cytosquelette », quelles affirmations sont correctes ?",
    "explanation": "Les microtubules ont un diamètre externe d’environ 25 nm, les filaments intermédiaires autour de 10 nm et les filaments d’actine autour de 7 nm. Microtubules et actine sont formés de sous-unités globulaires ; les FI proviennent de protéines fibreuses.",
    "choices": [
      {
        "content": "Les filaments intermédiaires sont des bicouches lipidiques.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les microtubules ont un diamètre externe d’environ 25 nm, les filaments intermédiaires autour de 10 nm et les filaments d’actine autour de 7 nm. Microtubules et actine sont formés de sous-unités globulaires ; les FI proviennent de protéines fibreuses."
      },
      {
        "content": "Les filaments d’actine sont des polymères d’actine globulaire.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les microtubules ont un diamètre externe d’environ 25 nm, les filaments intermédiaires autour de 10 nm et les filaments d’actine autour de 7 nm. Microtubules et actine sont formés de sous-unités globulaires ; les FI proviennent de protéines fibreuses."
      },
      {
        "content": "Les trois familles ont toutes exactement le même diamètre.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les microtubules ont un diamètre externe d’environ 25 nm, les filaments intermédiaires autour de 10 nm et les filaments d’actine autour de 7 nm. Microtubules et actine sont formés de sous-unités globulaires ; les FI proviennent de protéines fibreuses."
      },
      {
        "content": "Les filaments intermédiaires ont un diamètre proche de 10 nm.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les microtubules ont un diamètre externe d’environ 25 nm, les filaments intermédiaires autour de 10 nm et les filaments d’actine autour de 7 nm. Microtubules et actine sont formés de sous-unités globulaires ; les FI proviennent de protéines fibreuses."
      },
      {
        "content": "Les microtubules sont construits à partir d’hétérodimères de tubuline alpha/bêta.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les microtubules ont un diamètre externe d’environ 25 nm, les filaments intermédiaires autour de 10 nm et les filaments d’actine autour de 7 nm. Microtubules et actine sont formés de sous-unités globulaires ; les FI proviennent de protéines fibreuses."
      }
    ]
  },
  {
    "order": 16,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Dans ce contexte, quelle affirmation décrit correctement « Structure et polarité des microtubules » ?",
    "explanation": "Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes.",
    "choices": [
      {
        "content": "Un microtubule est formé d’une seule chaîne continue de 13 tubulines.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      },
      {
        "content": "Les microtubules cytoplasmiques sont constitués de 9 triplets de tubuline.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      },
      {
        "content": "Un microtubule canonique est un câble plein dépourvu de lumière centrale.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      },
      {
        "content": "L’orientation parallèle des dimères confère une polarité au microtubule.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      },
      {
        "content": "La polarité d’un microtubule dépend de l’orientation du noyau plutôt que de l’assemblage des dimères.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un microtubule est un cylindre creux généralement formé de 13 protofilaments. Chaque protofilament aligne des hétérodimères α/β-tubuline dans une même orientation, ce qui crée des extrémités + et − non équivalentes."
      }
    ]
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour le thème « Centrosome et nucléation des microtubules », quelles propositions doivent être retenues ?",
    "explanation": "Le centrosome est le principal centre organisateur des microtubules de nombreuses cellules animales. Il contient deux centrioles entourés de matériel péricentriolaire riche notamment en complexes à γ-tubuline qui nucléent les microtubules.",
    "choices": [
      {
        "content": "Les extrémités moins de nombreux microtubules sont stabilisées ou ancrées près du centrosome.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le centrosome est le principal centre organisateur des microtubules de nombreuses cellules animales. Il contient deux centrioles entourés de matériel péricentriolaire riche notamment en complexes à γ-tubuline qui nucléent les microtubules."
      },
      {
        "content": "Les extrémités plus de nombreux microtubules s’étendent vers la périphérie cellulaire.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le centrosome est le principal centre organisateur des microtubules de nombreuses cellules animales. Il contient deux centrioles entourés de matériel péricentriolaire riche notamment en complexes à γ-tubuline qui nucléent les microtubules."
      },
      {
        "content": "Les complexes à gamma-tubuline du matériel péricentriolaire participent à la nucléation des microtubules.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le centrosome est le principal centre organisateur des microtubules de nombreuses cellules animales. Il contient deux centrioles entourés de matériel péricentriolaire riche notamment en complexes à γ-tubuline qui nucléent les microtubules."
      },
      {
        "content": "Dans ce contexte, les centrioles sont généralement disposés approximativement perpendiculairement l’un à l’autre dans un centrosome interphasique.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le centrosome est le principal centre organisateur des microtubules de nombreuses cellules animales. Il contient deux centrioles entourés de matériel péricentriolaire riche notamment en complexes à γ-tubuline qui nucléent les microtubules."
      },
      {
        "content": "Dans ce contexte, aucun microtubule ne peut exister en dehors d’un réseau strictement centrosomal.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le centrosome est le principal centre organisateur des microtubules de nombreuses cellules animales. Il contient deux centrioles entourés de matériel péricentriolaire riche notamment en complexes à γ-tubuline qui nucléent les microtubules."
      }
    ]
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelles deux sous-unités forment l’hétérodimère de tubuline ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "alpha et bêta tubuline",
        "tubuline alpha et beta",
        "alpha beta",
        "α et β tubuline"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le dimère élémentaire associe une tubuline α et une tubuline β."
  },
  {
    "order": 19,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel centre organisateur majeur nucléé les microtubules dans de nombreuses cellules animales ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "centrosome",
        "le centrosome"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le centrosome est un MTOC majeur des cellules animales."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle tubuline participe à la nucléation des microtubules dans le matériel péricentriolaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "gamma tubuline",
        "γ-tubuline",
        "tubuline gamma"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La γ-tubuline est un composant des complexes de nucléation des microtubules."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Concernant « Instabilité dynamique des microtubules », choisissez exactement 2 affirmations correctes.",
    "explanation": "La tubuline β lie un GTP échangeable qui est hydrolysé après incorporation. Une coiffe riche en tubuline-GTP stabilise l’extrémité en croissance ; sa perte favorise une catastrophe. Des sauvetages peuvent reprendre la croissance.",
    "choices": [
      {
        "content": "Un sauvetage est une transition de croissance vers dépolymérisation rapide.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. La tubuline β lie un GTP échangeable qui est hydrolysé après incorporation. Une coiffe riche en tubuline-GTP stabilise l’extrémité en croissance ; sa perte favorise une catastrophe. Des sauvetages peuvent reprendre la croissance."
      },
      {
        "content": "Le GTP n’a aucun rôle dans la dynamique des microtubules.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. La tubuline β lie un GTP échangeable qui est hydrolysé après incorporation. Une coiffe riche en tubuline-GTP stabilise l’extrémité en croissance ; sa perte favorise une catastrophe. Des sauvetages peuvent reprendre la croissance."
      },
      {
        "content": "Dans ce contexte, la perte de la coiffe GTP peut déclencher une catastrophe microtubulaire.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. La tubuline β lie un GTP échangeable qui est hydrolysé après incorporation. Une coiffe riche en tubuline-GTP stabilise l’extrémité en croissance ; sa perte favorise une catastrophe. Des sauvetages peuvent reprendre la croissance."
      },
      {
        "content": "Dans ce contexte, une coiffe de tubuline liée au GTP favorise la stabilité de l’extrémité en croissance.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. La tubuline β lie un GTP échangeable qui est hydrolysé après incorporation. Une coiffe riche en tubuline-GTP stabilise l’extrémité en croissance ; sa perte favorise une catastrophe. Des sauvetages peuvent reprendre la croissance."
      },
      {
        "content": "La dynamique des microtubules dépend uniquement de la concentration globale de GTP cellulaire et d’aucune protéine régulatrice.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. La tubuline β lie un GTP échangeable qui est hydrolysé après incorporation. Une coiffe riche en tubuline-GTP stabilise l’extrémité en croissance ; sa perte favorise une catastrophe. Des sauvetages peuvent reprendre la croissance."
      }
    ],
    "requiredSelectionCount": 2
  },
  {
    "order": 22,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement « Organisation générale du cytosquelette » ?",
    "explanation": "Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires.",
    "choices": [
      {
        "content": "Les trois familles du cytosquelette sont constituées de la même protéine monomérique.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      },
      {
        "content": "Le cytosquelette est limité au noyau et absent du cytoplasme.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      },
      {
        "content": "Le cytosquelette n’a aucun rôle dans les mouvements cellulaires.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      },
      {
        "content": "Dans ce contexte, les différents polymères du cytosquelette ont des compositions et des propriétés mécaniques distinctes.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      },
      {
        "content": "Le cytosquelette est une paroi extracellulaire minérale comparable à l’os.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le cytosquelette est un réseau dynamique de polymères protéiques qui organise la forme, la polarité, les mouvements et le trafic intracellulaire. Les trois grandes familles sont les microtubules, les filaments d’actine et les filaments intermédiaires."
      }
    ]
  }
];
