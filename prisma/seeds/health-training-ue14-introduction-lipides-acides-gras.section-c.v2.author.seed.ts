import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie — Introduction générale sur les lipides et acides gras — Section C
 * Banque éditoriale auteur — à intégrer via le helper partagé du repo.
 */

export const UE14_BIOCH_CH4_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les acides gras désaturés :",
    "choices": [
      {
        "content": "Possèdent une ou plusieurs doubles liaisons.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Peuvent être monodésaturés ou polydésaturés.",
        "correct": true,
        "explanation": "Sous-classes."
      },
      {
        "content": "Sont caractérisés par la position et la configuration des doubles liaisons.",
        "correct": true,
        "explanation": "Repères."
      },
      {
        "content": "Sont obligatoirement dépourvus de carbone.",
        "correct": false,
        "explanation": "Ils possèdent une chaîne carbonée."
      }
    ],
    "explanation": "La désaturation est décrite par le nombre, la position et la configuration des doubles liaisons."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la configuration des doubles liaisons :",
    "choices": [
      {
        "content": "Les acides gras naturels sont majoritairement cis selon la fiche.",
        "correct": true,
        "explanation": "Point du support."
      },
      {
        "content": "Les configurations cis et trans sont distinguées.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "La configuration influence la géométrie de la chaîne.",
        "correct": true,
        "explanation": "Conséquence structurale."
      },
      {
        "content": "Toutes les doubles liaisons naturelles sont obligatoirement trans.",
        "correct": false,
        "explanation": "Le support indique majoritairement cis."
      }
    ],
    "explanation": "La configuration cis est le repère dominant des acides gras naturels étudiés."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L’acide palmitoléique :",
    "choices": [
      {
        "content": "Possède 16 carbones.",
        "correct": true,
        "explanation": "16:1."
      },
      {
        "content": "Possède une double liaison.",
        "correct": true,
        "explanation": "Monodésaturé."
      },
      {
        "content": "La double liaison est en Δ9.",
        "correct": true,
        "explanation": "Position."
      },
      {
        "content": "Appartient à la série ω3.",
        "correct": false,
        "explanation": "Il est ω7."
      }
    ],
    "explanation": "Le palmitoléique est le repère 16:1 Δ9, série ω7."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L’acide oléique :",
    "choices": [
      {
        "content": "Possède 18 carbones.",
        "correct": true,
        "explanation": "18:1."
      },
      {
        "content": "Est monodésaturé.",
        "correct": true,
        "explanation": "Une double liaison."
      },
      {
        "content": "Sa double liaison est en Δ9.",
        "correct": true,
        "explanation": "Position."
      },
      {
        "content": "Appartient à la série ω3.",
        "correct": false,
        "explanation": "Il est ω9."
      }
    ],
    "explanation": "L’acide oléique est 18:1 Δ9, série ω9."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "La notation 18:1 indique :",
    "choices": [
      {
        "content": "18 carbones et 1 double liaison.",
        "correct": true,
        "explanation": "Convention."
      },
      {
        "content": "18 doubles liaisons et 1 carbone.",
        "correct": false,
        "explanation": "Inversé."
      },
      {
        "content": "Une série ω18.",
        "correct": false,
        "explanation": "La série ω se calcule autrement."
      },
      {
        "content": "Un acide gras saturé.",
        "correct": false,
        "explanation": "Il possède une double liaison."
      }
    ],
    "explanation": "Dans C:D, C est le nombre de carbones et D le nombre de doubles liaisons."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La notation Δ9 pour une double liaison signifie :",
    "choices": [
      {
        "content": "Que la position est comptée depuis l’extrémité carboxylique selon la numérotation officielle.",
        "correct": true,
        "explanation": "Principe Δ."
      },
      {
        "content": "Que le premier carbone impliqué dans la double liaison est le C9.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Qu’elle se situe entre C9 et C10.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "Que l’acide gras possède forcément 9 carbones.",
        "correct": false,
        "explanation": "Δ9 indique une position, pas la longueur totale."
      }
    ],
    "explanation": "La notation Δ repère la double liaison depuis le C1 carboxylique."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La série ω d’un acide gras désaturé :",
    "choices": [
      {
        "content": "Se détermine en comptant depuis l’extrémité oméga.",
        "correct": true,
        "explanation": "Principe."
      },
      {
        "content": "Dépend de la double liaison la plus proche du carbone ω.",
        "correct": true,
        "explanation": "Principe."
      },
      {
        "content": "Peut être notée n-3, n-6, n-9, etc.",
        "correct": true,
        "explanation": "Notation."
      },
      {
        "content": "Correspond toujours au nombre total de doubles liaisons.",
        "correct": false,
        "explanation": "La série dépend de leur position depuis ω."
      }
    ],
    "explanation": "La série ω est définie depuis l’extrémité méthyle de la chaîne."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L’acide linoléique :",
    "choices": [
      {
        "content": "Est un acide gras polydésaturé.",
        "correct": true,
        "explanation": "Deux doubles liaisons."
      },
      {
        "content": "A pour symbole 18:2 Δ9,12.",
        "correct": true,
        "explanation": "Notation."
      },
      {
        "content": "Appartient à la série ω6.",
        "correct": true,
        "explanation": "Série."
      },
      {
        "content": "Est le 18:0.",
        "correct": false,
        "explanation": "Le 18:0 est stéarique."
      }
    ],
    "explanation": "Le linoléique est 18:2 Δ9,12, série ω6."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L’acide linolénique présenté dans la fiche :",
    "choices": [
      {
        "content": "Est un acide gras polydésaturé.",
        "correct": true,
        "explanation": "Trois doubles liaisons."
      },
      {
        "content": "A pour symbole 18:3 Δ9,12,15.",
        "correct": true,
        "explanation": "Notation."
      },
      {
        "content": "Appartient à la série ω3.",
        "correct": true,
        "explanation": "Série."
      },
      {
        "content": "Est saturé.",
        "correct": false,
        "explanation": "Il comporte trois doubles liaisons."
      }
    ],
    "explanation": "Le linolénique est 18:3 Δ9,12,15, série ω3."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Certains acides gras polyinsaturés sont dits essentiels/indispensables parce que :",
    "choices": [
      {
        "content": "Les mammifères ne peuvent pas les synthétiser.",
        "correct": true,
        "explanation": "Raison."
      },
      {
        "content": "Ils doivent être apportés par l’alimentation.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "Le linoléique et le linolénique sont cités comme exemples.",
        "correct": true,
        "explanation": "Exemples."
      },
      {
        "content": "Ils sont tous saturés.",
        "correct": false,
        "explanation": "Ils sont polyinsaturés."
      }
    ],
    "explanation": "L’indispensabilité correspond ici à une impossibilité de synthèse et donc à un besoin d’apport alimentaire."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour passer d’une notation Δ à une série ω sur un acide gras monodésaturé, il faut :",
    "choices": [
      {
        "content": "Connaître le nombre total de carbones.",
        "correct": true,
        "explanation": "Donnée nécessaire."
      },
      {
        "content": "Connaître la position de la double liaison depuis le carboxyle.",
        "correct": true,
        "explanation": "Donnée Δ."
      },
      {
        "content": "Compter la position de la première double liaison depuis l’extrémité ω.",
        "correct": true,
        "explanation": "Principe."
      },
      {
        "content": "Ignorer complètement la longueur de chaîne.",
        "correct": false,
        "explanation": "Elle est nécessaire pour convertir les repères."
      }
    ],
    "explanation": "La conversion combine longueur de chaîne et position de la double liaison."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Pour un acide gras 18:1 Δ9, à combien de carbones de l’extrémité ω se trouve la première double liaison, c’est-à-dire quelle est sa série ω ?",
    "answer": {
      "type": "number",
      "value": 9,
      "tolerance": 0
    },
    "explanation": "18:1 Δ9 correspond à une série ω9 dans l’exemple de l’acide oléique."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Pour un acide gras 16:1 Δ9, quelle est sa série ω ?",
    "answer": {
      "type": "number",
      "value": 7,
      "tolerance": 0
    },
    "explanation": "Le palmitoléique 16:1 Δ9 est ω7."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La comparaison palmitoléique/oléique montre que :",
    "choices": [
      {
        "content": "Les deux ont une double liaison en Δ9.",
        "correct": true,
        "explanation": "Point commun."
      },
      {
        "content": "Le palmitoléique est 16:1 et l’oléique 18:1.",
        "correct": true,
        "explanation": "Longueurs différentes."
      },
      {
        "content": "Ils appartiennent à des séries ω différentes.",
        "correct": true,
        "explanation": "ω7 versus ω9."
      },
      {
        "content": "Ils sont tous les deux saturés.",
        "correct": false,
        "explanation": "Ils sont monodésaturés."
      }
    ],
    "explanation": "Une même position Δ ne conduit pas à la même série ω si la longueur de chaîne change."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du linoléique 18:2 Δ9,12 :",
    "choices": [
      {
        "content": "Il possède deux doubles liaisons.",
        "correct": true,
        "explanation": "18:2."
      },
      {
        "content": "La double liaison la plus proche de ω conduit à la série ω6.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Les doubles liaisons sont décrites comme cis dans le nom systématique.",
        "correct": true,
        "explanation": "Toutes-cis."
      },
      {
        "content": "Il appartient à la série ω3.",
        "correct": false,
        "explanation": "Il est ω6."
      }
    ],
    "explanation": "Le linoléique est le repère essentiel ω6."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du linolénique 18:3 Δ9,12,15 :",
    "choices": [
      {
        "content": "Il possède trois doubles liaisons.",
        "correct": true,
        "explanation": "18:3."
      },
      {
        "content": "La série est ω3.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Les positions Δ sont 9, 12 et 15.",
        "correct": true,
        "explanation": "Notation."
      },
      {
        "content": "Il est monodésaturé.",
        "correct": false,
        "explanation": "Il est polydésaturé."
      }
    ],
    "explanation": "Le linolénique est le repère essentiel ω3."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est le nom commun de l’acide gras 18:1 Δ9 de série ω9 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide oleique",
        "acide oléique",
        "oleique",
        "oléique",
        "l'acide oléique"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Il s’agit de l’acide oléique."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est le nom commun de l’acide gras 16:1 Δ9 de série ω7 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide palmitoleique",
        "acide palmitoléique",
        "palmitoleique",
        "palmitoléique",
        "l'acide palmitoléique"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Il s’agit de l’acide palmitoléique."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux acides gras indispensables cités dans la fiche.",
    "choices": [
      {
        "content": "Acide linoléique.",
        "correct": true,
        "explanation": "Exemple essentiel."
      },
      {
        "content": "Acide linolénique.",
        "correct": true,
        "explanation": "Exemple essentiel."
      },
      {
        "content": "Acide palmitique.",
        "correct": false,
        "explanation": "Saturé, non cité comme essentiel."
      },
      {
        "content": "Acide stéarique.",
        "correct": false,
        "explanation": "Saturé, non cité comme essentiel."
      }
    ],
    "explanation": "Le support cite les acides linoléique et linolénique comme indispensables."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Acides gras désaturés de référence : sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "Oléique : 18:1 Δ9.",
        "correct": true,
        "explanation": "Notation."
      },
      {
        "content": "Oléique : ω9.",
        "correct": true,
        "explanation": "Série."
      },
      {
        "content": "Palmitoléique : 16:1 Δ9.",
        "correct": true,
        "explanation": "Notation."
      },
      {
        "content": "Linoléique : 18:2 Δ9,12.",
        "correct": true,
        "explanation": "Notation."
      },
      {
        "content": "Linolénique : 18:3 Δ9,12,15.",
        "correct": true,
        "explanation": "Notation."
      },
      {
        "content": "Palmitoléique : ω9.",
        "correct": false,
        "explanation": "ω7."
      },
      {
        "content": "Linoléique : ω3.",
        "correct": false,
        "explanation": "ω6."
      },
      {
        "content": "Linolénique : saturé.",
        "correct": false,
        "explanation": "Polydésaturé."
      },
      {
        "content": "Oléique : 18:0.",
        "correct": false,
        "explanation": "18:1."
      },
      {
        "content": "Une série ω se compte depuis le carboxyle.",
        "correct": false,
        "explanation": "Depuis l’extrémité ω."
      }
    ],
    "explanation": "Cette QRPL consolide les quatre acides gras désaturés de référence."
  },
  {
    "order": 65,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sur ce schéma original simplifié de l’acide oléique 18:1 Δ9, cliquez sur la double liaison Δ9 (entre C9 et C10).",
    "image": {
      "src": "/images/training/ue14/biochimie/introduction-lipides-acides-gras/acide-oleique-delta9-qzone.svg",
      "alt": "Chaîne simplifiée de l’acide oléique numérotée depuis le carbone carboxylique",
      "width": 1200,
      "height": 420
    },
    "expectedZones": [
      {
        "id": "delta9",
        "label": "Double liaison Δ9",
        "x": 0.5,
        "y": 0.52,
        "tolerance": 0.075
      }
    ],
    "explanation": "Dans l’acide oléique 18:1 Δ9, la double liaison se situe entre les carbones C9 et C10."
  },
  {
    "order": 66,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un acide gras 18:1 Δ9 est identifié. Quelles conclusions sont justifiées ?",
    "choices": [
      {
        "content": "Il est monodésaturé.",
        "correct": true,
        "explanation": "Une double liaison."
      },
      {
        "content": "Il correspond à l’acide oléique du support.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Il appartient à la série ω9.",
        "correct": true,
        "explanation": "Conversion."
      },
      {
        "content": "Il correspond au linoléique.",
        "correct": false,
        "explanation": "Le linoléique est 18:2 Δ9,12."
      }
    ],
    "explanation": "Longueur, nombre de doubles liaisons et position permettent d’identifier l’oléique."
  },
  {
    "order": 67,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un acide gras 18:2 Δ9,12 est identifié. Quelles conclusions sont justifiées ?",
    "choices": [
      {
        "content": "Il est polydésaturé.",
        "correct": true,
        "explanation": "Deux doubles liaisons."
      },
      {
        "content": "Il correspond au linoléique.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Il appartient à la série ω6.",
        "correct": true,
        "explanation": "Conversion."
      },
      {
        "content": "Il correspond au linolénique.",
        "correct": false,
        "explanation": "Linolénique = 18:3 Δ9,12,15."
      }
    ],
    "explanation": "Le linoléique combine deux doubles liaisons et une série ω6."
  },
  {
    "order": 68,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un acide gras 18:3 Δ9,12,15 est identifié. Quelles conclusions sont justifiées ?",
    "choices": [
      {
        "content": "Il est polydésaturé.",
        "correct": true,
        "explanation": "Trois doubles liaisons."
      },
      {
        "content": "Il correspond au linolénique.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Il appartient à la série ω3.",
        "correct": true,
        "explanation": "Conversion."
      },
      {
        "content": "Il est saturé.",
        "correct": false,
        "explanation": "Trois doubles liaisons."
      }
    ],
    "explanation": "Le linolénique est le repère ω3 indispensable du support."
  },
  {
    "order": 69,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Deux acides gras possèdent chacun une double liaison Δ9 mais l’un a 16 carbones et l’autre 18. On peut prévoir :",
    "choices": [
      {
        "content": "Des séries ω différentes.",
        "correct": true,
        "explanation": "ω7 versus ω9."
      },
      {
        "content": "Le 16:1 Δ9 est palmitoléique.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Le 18:1 Δ9 est oléique.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "La série ω dépend uniquement de Δ et jamais de la longueur de chaîne.",
        "correct": false,
        "explanation": "La longueur totale intervient."
      }
    ],
    "explanation": "Cette comparaison teste le raisonnement entre repères Δ et ω."
  },
  {
    "order": 70,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Dans la logique du cours, un acide gras indispensable :",
    "choices": [
      {
        "content": "Ne peut pas être synthétisé par les mammifères dans le cadre étudié.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Doit donc être apporté par l’alimentation.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "Peut être un acide gras polyinsaturé.",
        "correct": true,
        "explanation": "Exemples linoléique/linolénique."
      },
      {
        "content": "Est nécessairement un acide gras saturé court.",
        "correct": false,
        "explanation": "Les exemples sont polyinsaturés."
      }
    ],
    "explanation": "L’indispensabilité est une notion métabolique reliée à l’alimentation."
  },
  {
    "order": 71,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un étudiant confond « Δ9 » et « ω9 ». Quelle correction est nécessaire ?",
    "choices": [
      {
        "content": "Δ9 repère la double liaison depuis l’extrémité carboxylique.",
        "correct": true,
        "explanation": "Convention Δ."
      },
      {
        "content": "ω9 repère la première double liaison depuis l’extrémité oméga.",
        "correct": true,
        "explanation": "Convention ω."
      },
      {
        "content": "Les deux valeurs peuvent coïncider pour 18:1 Δ9.",
        "correct": true,
        "explanation": "Cas de l’oléique."
      },
      {
        "content": "Les deux notations sont toujours identiques pour n’importe quelle longueur.",
        "correct": false,
        "explanation": "Exemple du 16:1 Δ9 = ω7."
      }
    ],
    "explanation": "L’acide palmitoléique montre pourquoi Δ9 ne signifie pas toujours ω9."
  },
  {
    "order": 72,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Pour un acide gras 18:2 Δ9,12, la double liaison la plus proche de l’extrémité ω conduit à quelle série n- ?",
    "answer": {
      "type": "number",
      "value": 6,
      "tolerance": 0
    },
    "explanation": "Le linoléique 18:2 Δ9,12 est n-6/ω6."
  },
  {
    "order": 73,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Pour un acide gras 18:3 Δ9,12,15, la double liaison la plus proche de l’extrémité ω conduit à quelle série n- ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Le linolénique 18:3 Δ9,12,15 est n-3/ω3."
  },
  {
    "order": 74,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "La configuration cis majoritaire des acides gras naturels étudiés signifie :",
    "choices": [
      {
        "content": "Que la géométrie autour de la double liaison est prise en compte.",
        "correct": true,
        "explanation": "La configuration est un caractère structural."
      },
      {
        "content": "Qu’elle s’oppose à une configuration trans.",
        "correct": true,
        "explanation": "Deux configurations."
      },
      {
        "content": "Qu’elle n’indique pas à elle seule la longueur de chaîne.",
        "correct": true,
        "explanation": "Information différente."
      },
      {
        "content": "Qu’un acide gras cis est nécessairement saturé.",
        "correct": false,
        "explanation": "Il possède au moins une double liaison."
      }
    ],
    "explanation": "La configuration complète la description du nombre et de la position des doubles liaisons."
  },
  {
    "order": 75,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un apport alimentaire contient des acides linoléique et linolénique. D’après la fiche :",
    "choices": [
      {
        "content": "Ils peuvent contribuer à l’apport d’acides gras indispensables.",
        "correct": true,
        "explanation": "Exemples cités."
      },
      {
        "content": "Le linoléique est ω6.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Le linolénique est ω3.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Les deux sont des acides gras saturés.",
        "correct": false,
        "explanation": "Ils sont polyinsaturés."
      }
    ],
    "explanation": "Le contexte nutritionnel reste limité à la notion d’acides gras indispensables du support."
  },
  {
    "order": 76,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Comparer notation 18:2 et 18:3 :",
    "choices": [
      {
        "content": "Le premier nombre indique la même longueur de 18 carbones.",
        "correct": true,
        "explanation": "Notation."
      },
      {
        "content": "Le second nombre distingue 2 et 3 doubles liaisons.",
        "correct": true,
        "explanation": "Notation."
      },
      {
        "content": "Le 18:3 est plus insaturé que le 18:2.",
        "correct": true,
        "explanation": "Trois versus deux doubles liaisons."
      },
      {
        "content": "Le second nombre indique le nombre de carbones.",
        "correct": false,
        "explanation": "Il indique le nombre de doubles liaisons."
      }
    ],
    "explanation": "La notation C:D permet une lecture immédiate de la longueur et du degré d’insaturation."
  },
  {
    "order": 77,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Acides gras désaturés : sélectionnez exactement les trois associations complètes correctes.",
    "choices": [
      {
        "content": "16:1 Δ9 — palmitoléique — ω7.",
        "correct": true,
        "explanation": "Association complète."
      },
      {
        "content": "18:1 Δ9 — oléique — ω9.",
        "correct": true,
        "explanation": "Association complète."
      },
      {
        "content": "18:2 Δ9,12 — linoléique — ω6.",
        "correct": true,
        "explanation": "Association complète."
      },
      {
        "content": "18:3 Δ9,12,15 — stéarique — ω3.",
        "correct": false,
        "explanation": "18:3 correspond au linolénique, pas au stéarique."
      }
    ],
    "explanation": "Trois associations testent simultanément nom, notation Δ et série ω."
  },
  {
    "order": 78,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Nomenclature Δ/ω et séries des acides gras : sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "Les doubles liaisons naturelles sont majoritairement cis dans la fiche.",
        "correct": true,
        "explanation": "Configuration."
      },
      {
        "content": "Le palmitoléique est ω7.",
        "correct": true,
        "explanation": "Série."
      },
      {
        "content": "L’oléique est ω9.",
        "correct": true,
        "explanation": "Série."
      },
      {
        "content": "Le linoléique est ω6.",
        "correct": true,
        "explanation": "Série."
      },
      {
        "content": "Le linolénique est ω3.",
        "correct": true,
        "explanation": "Série."
      },
      {
        "content": "Le palmitoléique est 18:1.",
        "correct": false,
        "explanation": "16:1."
      },
      {
        "content": "L’oléique est 18:0.",
        "correct": false,
        "explanation": "18:1."
      },
      {
        "content": "Le linoléique est saturé.",
        "correct": false,
        "explanation": "18:2."
      },
      {
        "content": "Le linolénique a deux doubles liaisons.",
        "correct": false,
        "explanation": "Trois."
      },
      {
        "content": "La série ω se compte depuis le C1 carboxylique.",
        "correct": false,
        "explanation": "Depuis l’extrémité ω."
      }
    ],
    "explanation": "Le MASTER fixe les repères de nomenclature et d’indispensabilité."
  }
];
