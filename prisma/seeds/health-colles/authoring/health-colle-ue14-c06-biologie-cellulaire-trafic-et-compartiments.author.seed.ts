import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';

/**
 * UE14 — Colle C06 — Biologie cellulaire — Trafic et compartiments
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 */
export const UE14_COLLE_C06_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant l’adressage des protéines et le système endomembranaire ainsi que le trafic vésiculaire, quelles propositions sont exactes ?",
    "explanation": "À retenir : La membrane du réticulum endoplasmique est en continuité avec l’enveloppe nucléaire externe. Le réticulum endoplasmique rugueux porte des ribosomes sur sa face cytosolique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:RER"
    ],
    "choices": [
      {
        "content": "La membrane du réticulum endoplasmique est en continuité avec l’enveloppe nucléaire externe.",
        "correct": true,
        "explanation": "Le RE et l’enveloppe nucléaire appartiennent au même continuum membranaire."
      },
      {
        "content": "COPII assure principalement le transport rétrograde Golgi vers RE.",
        "correct": false,
        "explanation": "COPII est principalement antérograde RE→Golgi ; COPI intervient dans le rétrograde."
      },
      {
        "content": "La clathrine est la protéine motrice qui hydrolyse l’ATP pour déplacer les vésicules sur les microtubules.",
        "correct": false,
        "explanation": "La clathrine est une protéine de manteau ; les moteurs sont notamment kinésines/dynéines."
      },
      {
        "content": "Toutes les protéines du cytosol traversent obligatoirement le RE avant d’atteindre leur destination.",
        "correct": false,
        "explanation": "De nombreuses protéines restent cytosoliques ou sont adressées directement au noyau, mitochondries ou peroxysomes."
      },
      {
        "content": "Le réticulum endoplasmique rugueux porte des ribosomes sur sa face cytosolique.",
        "correct": true,
        "explanation": "Les ribosomes associés traduisent des protéines adressées à la voie sécrétoire."
      }
    ]
  },
  {
    "order": 2,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel manteau vésiculaire est classiquement associé au transport antérograde RE vers Golgi ?",
    "explanation": "COPII assure le transport antérograde RE→Golgi.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "COPII",
        "COP II"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 3,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement l’adressage des protéines et le système endomembranaire ?",
    "explanation": "Elle cible le ribosome vers le récepteur de SRP et le translocon.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:adressage"
    ],
    "choices": [
      {
        "content": "La SRP reconnaît un peptide signal hydrophobe de nombreuses protéines destinées au RE.",
        "correct": true,
        "explanation": "Elle cible le ribosome vers le récepteur de SRP et le translocon."
      },
      {
        "content": "Les SNARE déterminent la synthèse des phospholipides membranaires.",
        "correct": false,
        "explanation": "Elles participent surtout à l’arrimage/fusion membranaire."
      },
      {
        "content": "Les peroxysomes possèdent leur propre ADN circulaire comme les mitochondries.",
        "correct": false,
        "explanation": "Ils n’ont pas de génome propre."
      },
      {
        "content": "Les peroxysomes appartiennent au système endomembranaire au même titre que Golgi et lysosomes.",
        "correct": false,
        "explanation": "Ils sont considérés comme distincts du SEM classique."
      },
      {
        "content": "La catalase produit le H2O2 comme unique fonction.",
        "correct": false,
        "explanation": "Elle est surtout impliquée dans sa détoxification, même si les peroxysomes réalisent aussi des oxydations productrices de H2O2."
      }
    ]
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions exactes concernant l’adressage des protéines et le système endomembranaire.",
    "explanation": "Les deux points à retenir sont les suivants : Le translocon permet le passage ou l’insertion de la chaîne polypeptidique au niveau du RE. La SRP reconnaît un peptide signal hydrophobe de nombreuses protéines destinées au RE.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "L’endocytose médiée par récepteur est totalement indépendante de protéines de manteau.",
        "correct": false,
        "explanation": "La clathrine intervient fréquemment dans ce processus."
      },
      {
        "content": "Les lysosomes ont un pH luminal fortement alcalin.",
        "correct": false,
        "explanation": "Leur lumière est acide."
      },
      {
        "content": "Le translocon permet le passage ou l’insertion de la chaîne polypeptidique au niveau du RE.",
        "correct": true,
        "explanation": "Il forme un canal membranaire de translocation."
      },
      {
        "content": "Le mannose-6-phosphate est le signal classique d’import des protéines dans la mitochondrie.",
        "correct": false,
        "explanation": "Il adresse des hydrolases lysosomales ; les protéines mitochondriales utilisent d’autres signaux."
      },
      {
        "content": "La SRP reconnaît un peptide signal hydrophobe de nombreuses protéines destinées au RE.",
        "correct": true,
        "explanation": "Elle cible le ribosome vers le récepteur de SRP et le translocon."
      }
    ]
  },
  {
    "order": 5,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sur l’adressage des protéines et le système endomembranaire ainsi que le trafic vésiculaire, quelles affirmations sont correctes ?",
    "explanation": "À retenir : Le translocon permet le passage ou l’insertion de la chaîne polypeptidique au niveau du RE. L’appareil de Golgi participe à la maturation et au tri de protéines issues du RE.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:SNARE"
    ],
    "choices": [
      {
        "content": "Les SNARE déterminent la synthèse des phospholipides membranaires.",
        "correct": false,
        "explanation": "Elles participent surtout à l’arrimage/fusion membranaire."
      },
      {
        "content": "Le translocon permet le passage ou l’insertion de la chaîne polypeptidique au niveau du RE.",
        "correct": true,
        "explanation": "Il forme un canal membranaire de translocation."
      },
      {
        "content": "L’endocytose médiée par récepteur est totalement indépendante de protéines de manteau.",
        "correct": false,
        "explanation": "La clathrine intervient fréquemment dans ce processus."
      },
      {
        "content": "Le mannose-6-phosphate est le signal classique d’import des protéines dans la mitochondrie.",
        "correct": false,
        "explanation": "Il adresse des hydrolases lysosomales ; les protéines mitochondriales utilisent d’autres signaux."
      },
      {
        "content": "L’appareil de Golgi participe à la maturation et au tri de protéines issues du RE.",
        "correct": true,
        "explanation": "Les cargaisons traversent des compartiments golgiens avant leur destination."
      }
    ]
  },
  {
    "order": 6,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel manteau vésiculaire participe notamment au transport rétrograde Golgi vers RE ?",
    "explanation": "COPI intervient dans le transport rétrograde.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "COPI",
        "COP I"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 7,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant l’adressage des protéines et le système endomembranaire, quelle proposition est exacte ?",
    "explanation": "Il forme un canal membranaire de translocation.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:adressage"
    ],
    "choices": [
      {
        "content": "La catalase produit le H2O2 comme unique fonction.",
        "correct": false,
        "explanation": "Elle est surtout impliquée dans sa détoxification, même si les peroxysomes réalisent aussi des oxydations productrices de H2O2."
      },
      {
        "content": "Le translocon permet le passage ou l’insertion de la chaîne polypeptidique au niveau du RE.",
        "correct": true,
        "explanation": "Il forme un canal membranaire de translocation."
      },
      {
        "content": "L’exocytose régulée est en permanence maximale et indépendante du calcium.",
        "correct": false,
        "explanation": "Elle dépend d’un stimulus et fréquemment du Ca2+."
      },
      {
        "content": "Toutes les protéines du cytosol traversent obligatoirement le RE avant d’atteindre leur destination.",
        "correct": false,
        "explanation": "De nombreuses protéines restent cytosoliques ou sont adressées directement au noyau, mitochondries ou peroxysomes."
      },
      {
        "content": "COPII assure principalement le transport rétrograde Golgi vers RE.",
        "correct": false,
        "explanation": "COPII est principalement antérograde RE→Golgi ; COPI intervient dans le rétrograde."
      }
    ]
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions exactes concernant l’adressage des protéines et le système endomembranaire ainsi que le trafic vésiculaire.",
    "explanation": "Les deux points à retenir sont les suivants : L’appareil de Golgi participe à la maturation et au tri de protéines issues du RE. Les vésicules COPII assurent classiquement le transport antérograde du RE vers le Golgi.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Les peroxysomes possèdent leur propre ADN circulaire comme les mitochondries.",
        "correct": false,
        "explanation": "Ils n’ont pas de génome propre."
      },
      {
        "content": "L’appareil de Golgi participe à la maturation et au tri de protéines issues du RE.",
        "correct": true,
        "explanation": "Les cargaisons traversent des compartiments golgiens avant leur destination."
      },
      {
        "content": "Les vésicules COPII assurent classiquement le transport antérograde du RE vers le Golgi.",
        "correct": true,
        "explanation": "COPII bourgeonne à partir des sites de sortie du RE."
      },
      {
        "content": "Les peroxysomes appartiennent au système endomembranaire au même titre que Golgi et lysosomes.",
        "correct": false,
        "explanation": "Ils sont considérés comme distincts du SEM classique."
      },
      {
        "content": "Les SNARE déterminent la synthèse des phospholipides membranaires.",
        "correct": false,
        "explanation": "Elles participent surtout à l’arrimage/fusion membranaire."
      }
    ]
  },
  {
    "order": 9,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi ces dix propositions portant sur le trafic vésiculaire ainsi que l’adressage des protéines et le système endomembranaire, sélectionnez exactement les cinq exactes.",
    "explanation": "Les cinq points à retenir sont les suivants : Les vésicules COPII assurent classiquement le transport antérograde du RE vers le Golgi. La clathrine intervient dans l’endocytose médiée par récepteur et dans certains transports depuis le TGN. Les protéines SNARE participent à la fusion spécifique des membranes. Les protéines Rab participent à la spécificité d’adressage et d’arrimage des vésicules. Les vésicules COPI participent notamment au transport rétrograde Golgi vers RE.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:synthese-transversale"
    ],
    "choices": [
      {
        "content": "Les vésicules COPII assurent classiquement le transport antérograde du RE vers le Golgi.",
        "correct": true,
        "explanation": "COPII bourgeonne à partir des sites de sortie du RE."
      },
      {
        "content": "La clathrine intervient dans l’endocytose médiée par récepteur et dans certains transports depuis le TGN.",
        "correct": true,
        "explanation": "Elle forme des manteaux avec des adaptateurs."
      },
      {
        "content": "La catalase produit le H2O2 comme unique fonction.",
        "correct": false,
        "explanation": "Elle est surtout impliquée dans sa détoxification, même si les peroxysomes réalisent aussi des oxydations productrices de H2O2."
      },
      {
        "content": "Les protéines SNARE participent à la fusion spécifique des membranes.",
        "correct": true,
        "explanation": "L’appariement v-SNARE/t-SNARE contribue au rapprochement des bicouches."
      },
      {
        "content": "Les protéines Rab participent à la spécificité d’adressage et d’arrimage des vésicules.",
        "correct": true,
        "explanation": "Les Rab GTPases organisent l’identité et le ciblage membranaires."
      },
      {
        "content": "Les peroxysomes possèdent leur propre ADN circulaire comme les mitochondries.",
        "correct": false,
        "explanation": "Ils n’ont pas de génome propre."
      },
      {
        "content": "Les vésicules COPI participent notamment au transport rétrograde Golgi vers RE.",
        "correct": true,
        "explanation": "COPI contribue au recyclage de composants vers le RE."
      },
      {
        "content": "L’endocytose médiée par récepteur est totalement indépendante de protéines de manteau.",
        "correct": false,
        "explanation": "La clathrine intervient fréquemment dans ce processus."
      },
      {
        "content": "Les SNARE déterminent la synthèse des phospholipides membranaires.",
        "correct": false,
        "explanation": "Elles participent surtout à l’arrimage/fusion membranaire."
      },
      {
        "content": "Les peroxysomes appartiennent au système endomembranaire au même titre que Golgi et lysosomes.",
        "correct": false,
        "explanation": "Ils sont considérés comme distincts du SEM classique."
      }
    ]
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l’adressage des protéines et le système endomembranaire, le trafic vésiculaire, ainsi que les peroxysomes, quelles propositions sont exactes ?",
    "explanation": "À retenir : La clathrine intervient dans l’endocytose médiée par récepteur et dans certains transports depuis le TGN. Les vésicules COPI participent notamment au transport rétrograde Golgi vers RE.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:peroxysomes"
    ],
    "choices": [
      {
        "content": "Les peroxysomes appartiennent au système endomembranaire au même titre que Golgi et lysosomes.",
        "correct": false,
        "explanation": "Ils sont considérés comme distincts du SEM classique."
      },
      {
        "content": "La clathrine intervient dans l’endocytose médiée par récepteur et dans certains transports depuis le TGN.",
        "correct": true,
        "explanation": "Elle forme des manteaux avec des adaptateurs."
      },
      {
        "content": "La catalase produit le H2O2 comme unique fonction.",
        "correct": false,
        "explanation": "Elle est surtout impliquée dans sa détoxification, même si les peroxysomes réalisent aussi des oxydations productrices de H2O2."
      },
      {
        "content": "L’exocytose régulée est en permanence maximale et indépendante du calcium.",
        "correct": false,
        "explanation": "Elle dépend d’un stimulus et fréquemment du Ca2+."
      },
      {
        "content": "Les vésicules COPI participent notamment au transport rétrograde Golgi vers RE.",
        "correct": true,
        "explanation": "COPI contribue au recyclage de composants vers le RE."
      }
    ]
  },
  {
    "order": 11,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel signal glucidique cible de nombreuses hydrolases lysosomales ?",
    "explanation": "Le M6P est reconnu par son récepteur au TGN.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "mannose-6-phosphate",
        "M6P",
        "mannose 6 phosphate"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi ces cinq affirmations sur l’adressage des protéines et le système endomembranaire, laquelle est correcte ?",
    "explanation": "Les cargaisons traversent des compartiments golgiens avant leur destination.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:Golgi"
    ],
    "choices": [
      {
        "content": "COPII assure principalement le transport rétrograde Golgi vers RE.",
        "correct": false,
        "explanation": "COPII est principalement antérograde RE→Golgi ; COPI intervient dans le rétrograde."
      },
      {
        "content": "La clathrine est la protéine motrice qui hydrolyse l’ATP pour déplacer les vésicules sur les microtubules.",
        "correct": false,
        "explanation": "La clathrine est une protéine de manteau ; les moteurs sont notamment kinésines/dynéines."
      },
      {
        "content": "L’appareil de Golgi participe à la maturation et au tri de protéines issues du RE.",
        "correct": true,
        "explanation": "Les cargaisons traversent des compartiments golgiens avant leur destination."
      },
      {
        "content": "Les lysosomes ont un pH luminal fortement alcalin.",
        "correct": false,
        "explanation": "Leur lumière est acide."
      },
      {
        "content": "Le mannose-6-phosphate est le signal classique d’import des protéines dans la mitochondrie.",
        "correct": false,
        "explanation": "Il adresse des hydrolases lysosomales ; les protéines mitochondriales utilisent d’autres signaux."
      }
    ]
  },
  {
    "order": 13,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions exactes concernant le trafic vésiculaire ainsi que l’adressage des protéines et le système endomembranaire.",
    "explanation": "Les deux points à retenir sont les suivants : Les vésicules COPI participent notamment au transport rétrograde Golgi vers RE. La clathrine intervient dans l’endocytose médiée par récepteur et dans certains transports depuis le TGN.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "L’exocytose régulée est en permanence maximale et indépendante du calcium.",
        "correct": false,
        "explanation": "Elle dépend d’un stimulus et fréquemment du Ca2+."
      },
      {
        "content": "Les vésicules COPI participent notamment au transport rétrograde Golgi vers RE.",
        "correct": true,
        "explanation": "COPI contribue au recyclage de composants vers le RE."
      },
      {
        "content": "La clathrine intervient dans l’endocytose médiée par récepteur et dans certains transports depuis le TGN.",
        "correct": true,
        "explanation": "Elle forme des manteaux avec des adaptateurs."
      },
      {
        "content": "La catalase produit le H2O2 comme unique fonction.",
        "correct": false,
        "explanation": "Elle est surtout impliquée dans sa détoxification, même si les peroxysomes réalisent aussi des oxydations productrices de H2O2."
      },
      {
        "content": "Toutes les protéines du cytosol traversent obligatoirement le RE avant d’atteindre leur destination.",
        "correct": false,
        "explanation": "De nombreuses protéines restent cytosoliques ou sont adressées directement au noyau, mitochondries ou peroxysomes."
      }
    ]
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le trafic vésiculaire ainsi que l’adressage des protéines et le système endomembranaire, quelles propositions sont exactes ?",
    "explanation": "À retenir : Les protéines SNARE participent à la fusion spécifique des membranes. Les lysosomes maintiennent un pH luminal acide grâce à des pompes à protons. Le récepteur du mannose-6-phosphate participe à l’adressage d’hydrolases vers les lysosomes.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:clathrine"
    ],
    "choices": [
      {
        "content": "La clathrine est la protéine motrice qui hydrolyse l’ATP pour déplacer les vésicules sur les microtubules.",
        "correct": false,
        "explanation": "La clathrine est une protéine de manteau ; les moteurs sont notamment kinésines/dynéines."
      },
      {
        "content": "COPII assure principalement le transport rétrograde Golgi vers RE.",
        "correct": false,
        "explanation": "COPII est principalement antérograde RE→Golgi ; COPI intervient dans le rétrograde."
      },
      {
        "content": "Les protéines SNARE participent à la fusion spécifique des membranes.",
        "correct": true,
        "explanation": "L’appariement v-SNARE/t-SNARE contribue au rapprochement des bicouches."
      },
      {
        "content": "Les lysosomes maintiennent un pH luminal acide grâce à des pompes à protons.",
        "correct": true,
        "explanation": "Les V-ATPases acidifient la lumière lysosomale."
      },
      {
        "content": "Le récepteur du mannose-6-phosphate participe à l’adressage d’hydrolases vers les lysosomes.",
        "correct": true,
        "explanation": "Le signal M6P est reconnu au niveau du réseau trans-golgien."
      }
    ]
  },
  {
    "order": 15,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle enzyme peroxysomale dégrade le peroxyde d’hydrogène ?",
    "explanation": "La catalase est une enzyme emblématique des peroxysomes.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "catalase"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 16,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement le trafic vésiculaire ainsi que l’adressage des protéines et le système endomembranaire ?",
    "explanation": "COPII bourgeonne à partir des sites de sortie du RE.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:coats"
    ],
    "choices": [
      {
        "content": "Le mannose-6-phosphate est le signal classique d’import des protéines dans la mitochondrie.",
        "correct": false,
        "explanation": "Il adresse des hydrolases lysosomales ; les protéines mitochondriales utilisent d’autres signaux."
      },
      {
        "content": "L’endocytose médiée par récepteur est totalement indépendante de protéines de manteau.",
        "correct": false,
        "explanation": "La clathrine intervient fréquemment dans ce processus."
      },
      {
        "content": "Les SNARE déterminent la synthèse des phospholipides membranaires.",
        "correct": false,
        "explanation": "Elles participent surtout à l’arrimage/fusion membranaire."
      },
      {
        "content": "Les vésicules COPII assurent classiquement le transport antérograde du RE vers le Golgi.",
        "correct": true,
        "explanation": "COPII bourgeonne à partir des sites de sortie du RE."
      },
      {
        "content": "Les peroxysomes possèdent leur propre ADN circulaire comme les mitochondries.",
        "correct": false,
        "explanation": "Ils n’ont pas de génome propre."
      }
    ]
  },
  {
    "order": 17,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les peroxysomes, quelles propositions sont exactes ?",
    "explanation": "À retenir : Les peroxysomes possèdent une membrane unique et ne possèdent pas de génome propre. Les endosomes précoces constituent un compartiment de tri de la voie endocytaire. L’exocytose régulée nécessite un signal, souvent impliquant une augmentation de Ca2+ cytosolique. L’exocytose constitutive fonctionne dans de nombreuses cellules sans signal déclencheur spécifique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:peroxysomes"
    ],
    "choices": [
      {
        "content": "Les peroxysomes possèdent une membrane unique et ne possèdent pas de génome propre.",
        "correct": true,
        "explanation": "Leurs protéines sont codées par le noyau et importées."
      },
      {
        "content": "L’endocytose médiée par récepteur est totalement indépendante de protéines de manteau.",
        "correct": false,
        "explanation": "La clathrine intervient fréquemment dans ce processus."
      },
      {
        "content": "Les endosomes précoces constituent un compartiment de tri de la voie endocytaire.",
        "correct": true,
        "explanation": "Des récepteurs peuvent être recyclés ou dirigés vers des endosomes plus tardifs."
      },
      {
        "content": "L’exocytose régulée nécessite un signal, souvent impliquant une augmentation de Ca2+ cytosolique.",
        "correct": true,
        "explanation": "C’est le cas de nombreuses cellules sécrétrices."
      },
      {
        "content": "L’exocytose constitutive fonctionne dans de nombreuses cellules sans signal déclencheur spécifique.",
        "correct": true,
        "explanation": "Elle renouvelle la membrane et exporte continuellement certaines protéines."
      }
    ]
  },
  {
    "order": 18,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les peroxysomes ainsi que l’adressage des protéines et le système endomembranaire, quelles propositions sont exactes ?",
    "explanation": "À retenir : Les peroxysomes ne font pas partie du système endomembranaire classique malgré certains échanges lipidiques avec le RE. La catalase peroxysomale dégrade le peroxyde d’hydrogène. Le réticulum endoplasmique rugueux porte des ribosomes sur sa face cytosolique. Les peroxysomes possèdent une membrane unique et ne possèdent pas de génome propre.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:peroxysomes"
    ],
    "choices": [
      {
        "content": "Les peroxysomes ne font pas partie du système endomembranaire classique malgré certains échanges lipidiques avec le RE.",
        "correct": true,
        "explanation": "Ils constituent un compartiment distinct."
      },
      {
        "content": "La catalase peroxysomale dégrade le peroxyde d’hydrogène.",
        "correct": true,
        "explanation": "Elle convertit H2O2 en eau et oxygène selon les conditions."
      },
      {
        "content": "Le réticulum endoplasmique rugueux porte des ribosomes sur sa face cytosolique.",
        "correct": true,
        "explanation": "Les ribosomes associés traduisent des protéines adressées à la voie sécrétoire."
      },
      {
        "content": "Les peroxysomes possèdent une membrane unique et ne possèdent pas de génome propre.",
        "correct": true,
        "explanation": "Leurs protéines sont codées par le noyau et importées."
      },
      {
        "content": "La catalase produit le H2O2 comme unique fonction.",
        "correct": false,
        "explanation": "Elle est surtout impliquée dans sa détoxification, même si les peroxysomes réalisent aussi des oxydations productrices de H2O2."
      }
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Sélectionnez le lysosome sur ce schéma de trafic intracellulaire.",
    "explanation": "La zone attendue correspond à : Lysosome.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qzone"
    ],
    "image": {
      "src": "/images/training/ue14/colles/c06/secretory-pathway-lysosome-qzone.svg",
      "alt": "Voie sécrétoire et compartiments",
      "width": 960,
      "height": 560
    },
    "expectedZones": [
      {
        "id": "target",
        "label": "Lysosome",
        "x": 0.83,
        "y": 0.72,
        "tolerance": 0.09
      }
    ],
    "defaultTolerance": 0.09
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propositions suivantes portant sur l’adressage des protéines et le système endomembranaire ainsi que le trafic vésiculaire, lesquelles sont exactes ?",
    "explanation": "À retenir : Le translocon permet le passage ou l’insertion de la chaîne polypeptidique au niveau du RE. La membrane du réticulum endoplasmique est en continuité avec l’enveloppe nucléaire externe. Le réticulum endoplasmique rugueux porte des ribosomes sur sa face cytosolique. La SRP reconnaît un peptide signal hydrophobe de nombreuses protéines destinées au RE.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C06",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:adressage"
    ],
    "choices": [
      {
        "content": "Le translocon permet le passage ou l’insertion de la chaîne polypeptidique au niveau du RE.",
        "correct": true,
        "explanation": "Il forme un canal membranaire de translocation."
      },
      {
        "content": "La membrane du réticulum endoplasmique est en continuité avec l’enveloppe nucléaire externe.",
        "correct": true,
        "explanation": "Le RE et l’enveloppe nucléaire appartiennent au même continuum membranaire."
      },
      {
        "content": "La clathrine est la protéine motrice qui hydrolyse l’ATP pour déplacer les vésicules sur les microtubules.",
        "correct": false,
        "explanation": "La clathrine est une protéine de manteau ; les moteurs sont notamment kinésines/dynéines."
      },
      {
        "content": "Le réticulum endoplasmique rugueux porte des ribosomes sur sa face cytosolique.",
        "correct": true,
        "explanation": "Les ribosomes associés traduisent des protéines adressées à la voie sécrétoire."
      },
      {
        "content": "La SRP reconnaît un peptide signal hydrophobe de nombreuses protéines destinées au RE.",
        "correct": true,
        "explanation": "Elle cible le ribosome vers le récepteur de SRP et le translocon."
      }
    ]
  }
];
