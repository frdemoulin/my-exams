import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Enzymologie 4.1 — Section D — Régulation de l'activité enzymatique */
export const UE14_BIOCH_CH14_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les stratégies de régulation enzymatique, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "La quantité d'enzyme peut être modulée par synthèse et dégradation.",
        "correct": true,
        "explanation": "La régulation de l'abondance agit plus lentement que certaines modifications directes."
      },
      {
        "content": "La protéolyse limitée est toujours une dégradation totale de la protéine.",
        "correct": false,
        "explanation": "Elle enlève seulement un ou quelques segments ciblés."
      },
      {
        "content": "Des sous-unités régulatrices peuvent contrôler l'accès ou l'activité de sous-unités catalytiques.",
        "correct": true,
        "explanation": "La PKA en est un exemple."
      },
      {
        "content": "Une protéolyse limitée peut activer irréversiblement certains zymogènes.",
        "correct": true,
        "explanation": "C'est fréquent dans les protéases digestives et la coagulation."
      },
      {
        "content": "Des modifications covalentes réversibles peuvent modifier l'activité.",
        "correct": true,
        "explanation": "Phosphorylation et déphosphorylation sont des exemples majeurs."
      }
    ],
    "explanation": "L'activité enzymatique se régule par allostérie, sous-unités, modifications covalentes, abondance protéique ou protéolyse limitée."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant l'allostérie, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Un effecteur allostérique doit se fixer dans le site actif exactement à la place du substrat.",
        "correct": false,
        "explanation": "Le site allostérique est distinct."
      },
      {
        "content": "Toute allostérie exige au moins quatre sous-unités.",
        "correct": false,
        "explanation": "Elle peut exister dans des protéines monomériques."
      },
      {
        "content": "Un activateur allostérique agit toujours en phosphorylant covalemment l'enzyme.",
        "correct": false,
        "explanation": "La liaison allostérique est généralement non covalente."
      },
      {
        "content": "Un ligand allostérique se fixe sur un site distinct du site actif.",
        "correct": true,
        "explanation": "Cette liaison modifie l'équilibre conformationnel de l'enzyme."
      },
      {
        "content": "L'allostérie ne peut jamais modifier l'affinité pour un substrat.",
        "correct": false,
        "explanation": "Elle le peut."
      }
    ],
    "explanation": "L'allostérie correspond à l'action d'un ligand sur un site distinct du site actif, avec modification de l'état fonctionnel de l'enzyme."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle est la composition du holoenzyme PKA inactif ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "R2C2",
        "2 sous-unités régulatrices et 2 catalytiques",
        "deux R et deux C"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La PKA est régulée par l'AMPc : le holoenzyme R2C2 fixe jusqu'à quatre AMPc et libère deux sous-unités catalytiques actives."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la régulation par phosphorylation, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La modification peut changer conformation, interactions, localisation ou activité catalytique.",
        "correct": true,
        "explanation": "Le phosphate apporte charge et possibilités d'interaction."
      },
      {
        "content": "Une phosphatase retire des groupes phosphate par hydrolyse.",
        "correct": true,
        "explanation": "La phosphorylation est donc souvent réversible."
      },
      {
        "content": "La phosphorylation ne modifie jamais la charge locale d'une protéine.",
        "correct": false,
        "explanation": "Le phosphate apporte des charges négatives."
      },
      {
        "content": "Une kinase retire un phosphate et une phosphatase l'ajoute.",
        "correct": false,
        "explanation": "C'est l'inverse."
      },
      {
        "content": "Toute phosphorylation active nécessairement l'enzyme ciblée.",
        "correct": false,
        "explanation": "Elle peut activer ou inhiber."
      }
    ],
    "explanation": "La phosphorylation est une modification covalente réversible dont l'effet fonctionnel peut être activateur ou inhibiteur."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant les autres modifications covalentes régulatrices.",
    "choices": [
      {
        "content": "L'ADP-ribosylation ne concerne jamais les protéines.",
        "correct": false,
        "explanation": "Elle est une modification protéique bien établie."
      },
      {
        "content": "L'acétylation signifie toujours destruction de la protéine.",
        "correct": false,
        "explanation": "Elle peut être une modification régulatrice réversible."
      },
      {
        "content": "Le site modifié n'a jamais d'importance.",
        "correct": false,
        "explanation": "Le résidu et sa position sont déterminants."
      },
      {
        "content": "L'ADP-ribosylation peut modifier des protéines de manière régulée.",
        "correct": true,
        "explanation": "Des enzymes spécialisées ajoutent ou retirent ces modifications."
      },
      {
        "content": "L'acétylation peut modifier l'activité ou les interactions de protéines.",
        "correct": true,
        "explanation": "Elle est souvent réversible grâce à des acétyltransférases et désacétylases."
      }
    ],
    "explanation": "Phosphorylation, acétylation, ADP-ribosylation et autres modifications peuvent réguler l'activité de façon contextuelle.",
    "requiredSelectionCount": 2
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'ubiquitination ?",
    "choices": [
      {
        "content": "E3 contribue à reconnaître le substrat et catalyse/organise le transfert d'ubiquitine.",
        "correct": true,
        "explanation": "Les ligases E3 donnent une grande partie de la spécificité."
      },
      {
        "content": "Toutes les chaînes de polyubiquitine ne signifient pas automatiquement dégradation protéasomale.",
        "correct": true,
        "explanation": "La topologie de la chaîne code des fonctions différentes."
      },
      {
        "content": "E1 est la ligase qui reconnaît spécifiquement chaque substrat final.",
        "correct": false,
        "explanation": "Cette fonction revient surtout aux E3."
      },
      {
        "content": "Toute monoubiquitination entraîne obligatoirement une dégradation immédiate par le protéasome.",
        "correct": false,
        "explanation": "L'ubiquitination a des fonctions diverses."
      },
      {
        "content": "L'ubiquitine humaine mature comporte 76 acides aminés.",
        "correct": true,
        "explanation": "C'est une petite protéine très conservée."
      }
    ],
    "explanation": "L'ubiquitination utilise la cascade E1–E2–E3 ; certaines chaînes dirigent les substrats vers le protéasome, mais l'ubiquitine possède aussi d'autres fonctions."
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement le protéasome ubiquitine-dépendant ?",
    "choices": [
      {
        "content": "Toute protéine cellulaire est dégradée exclusivement par le protéasome.",
        "correct": false,
        "explanation": "D'autres voies, dont l'autophagie/lysosome, existent."
      },
      {
        "content": "Le protéasome synthétise les protéines à partir d'acides aminés.",
        "correct": false,
        "explanation": "Il les dégrade."
      },
      {
        "content": "Le protéasome ne dégrade pas uniquement des protéines dénaturées accidentellement.",
        "correct": true,
        "explanation": "Des protéines régulatrices natives sont ciblées de manière programmée."
      },
      {
        "content": "Seules les protéines déjà totalement dénaturées peuvent être ubiquitinées.",
        "correct": false,
        "explanation": "Des protéines correctement repliées peuvent être ciblées réglementairement."
      },
      {
        "content": "Le protéasome ne consomme jamais d'ATP.",
        "correct": false,
        "explanation": "La particule 19S utilise de l'ATP pour plusieurs étapes."
      }
    ],
    "explanation": "Le système ubiquitine-protéasome contrôle la qualité mais aussi la demi-vie programmée de nombreuses protéines régulatrices."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment appelle-t-on le précurseur inactif d'une enzyme activable par protéolyse ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "zymogène",
        "proenzyme",
        "zymogene"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La protéolyse limitée active irréversiblement certains zymogènes par clivage ciblé d'une ou quelques liaisons peptidiques."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La quantité d'enzyme ne peut jamais influencer le flux catalytique.",
        "correct": false,
        "explanation": "L'abondance de l'enzyme est un déterminant important."
      },
      {
        "content": "Une protéolyse limitée peut activer irréversiblement certains zymogènes.",
        "correct": true,
        "explanation": "C'est fréquent dans les protéases digestives et la coagulation."
      },
      {
        "content": "Une enzyme ne peut être régulée que par modification de son gène.",
        "correct": false,
        "explanation": "La régulation peut être rapide et post-traductionnelle."
      },
      {
        "content": "La trypsine ne peut activer aucun autre zymogène.",
        "correct": false,
        "explanation": "Elle en active plusieurs."
      },
      {
        "content": "Toutes les régulations enzymatiques sont irréversibles.",
        "correct": false,
        "explanation": "De nombreuses régulations sont réversibles."
      },
      {
        "content": "Chez l'humain, l'activation initiale repose sur le clivage d'une liaison après Lys15 du trypsinogène cationique.",
        "correct": true,
        "explanation": "La rupture Lys15–Ile16 crée le nouveau N-terminal actif."
      },
      {
        "content": "Des sous-unités régulatrices peuvent contrôler l'accès ou l'activité de sous-unités catalytiques.",
        "correct": true,
        "explanation": "La PKA en est un exemple."
      },
      {
        "content": "L'activité peut être modulée par allostérie.",
        "correct": true,
        "explanation": "Un effecteur modifie l'activité via un site distinct du site catalytique."
      },
      {
        "content": "L'activation initiale exige obligatoirement trois clivages simultanés du trypsinogène.",
        "correct": false,
        "explanation": "Un clivage clé suffit à former la trypsine active."
      },
      {
        "content": "La quantité d'enzyme peut être modulée par synthèse et dégradation.",
        "correct": true,
        "explanation": "La régulation de l'abondance agit plus lentement que certaines modifications directes."
      }
    ],
    "explanation": "L'entéropeptidase clive le trypsinogène au site activateur, puis la trypsine amplifie l'activation et déclenche celle d'autres zymogènes. L'activité enzymatique se régule par allostérie, sous-unités, modifications covalentes, abondance protéique ou protéolyse limitée."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la cascade d'activation des zymogènes pancréatiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La trypsine active le chymotrypsinogène en initiant sa maturation en chymotrypsine.",
        "correct": true,
        "explanation": "D'autres clivages complètent ensuite la maturation de certaines formes."
      },
      {
        "content": "La procarboxypeptidase est déjà la forme mature active.",
        "correct": false,
        "explanation": "Elle est un précurseur."
      },
      {
        "content": "La trypsine peut activer des proélastases.",
        "correct": true,
        "explanation": "Cela participe à la mise en route de la digestion protéique."
      },
      {
        "content": "La trypsine active des procarboxypeptidases.",
        "correct": true,
        "explanation": "Les carboxypeptidases sont des exopeptidases."
      },
      {
        "content": "La cascade permet une activation rapide dans la lumière intestinale plutôt que dans le pancréas.",
        "correct": true,
        "explanation": "Ce compartimentage limite l'autodigestion."
      }
    ],
    "explanation": "L'entéropeptidase déclenche la trypsine, puis la trypsine lance une cascade de maturation des zymogènes digestifs dans l'intestin."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les stratégies de régulation enzymatique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La quantité d'enzyme ne peut jamais influencer le flux catalytique.",
        "correct": false,
        "explanation": "L'abondance de l'enzyme est un déterminant important."
      },
      {
        "content": "Toutes les régulations enzymatiques sont irréversibles.",
        "correct": false,
        "explanation": "De nombreuses régulations sont réversibles."
      },
      {
        "content": "La protéolyse limitée est toujours une dégradation totale de la protéine.",
        "correct": false,
        "explanation": "Elle enlève seulement un ou quelques segments ciblés."
      },
      {
        "content": "Des modifications covalentes réversibles peuvent modifier l'activité.",
        "correct": true,
        "explanation": "Phosphorylation et déphosphorylation sont des exemples majeurs."
      },
      {
        "content": "Des sous-unités régulatrices peuvent contrôler l'accès ou l'activité de sous-unités catalytiques.",
        "correct": true,
        "explanation": "La PKA en est un exemple."
      }
    ],
    "explanation": "L'activité enzymatique se régule par allostérie, sous-unités, modifications covalentes, abondance protéique ou protéolyse limitée."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Où se fixe un effecteur allostérique par rapport au site actif ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sur un site distinct",
        "site allostérique",
        "sur un site allostérique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'allostérie correspond à l'action d'un ligand sur un site distinct du site actif, avec modification de l'état fonctionnel de l'enzyme."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur la régulation de la protéine kinase A, laquelle est correcte ?",
    "choices": [
      {
        "content": "Les sous-unités régulatrices deviennent les enzymes catalytiques après liaison de l'AMPc.",
        "correct": false,
        "explanation": "Les sous-unités C préexistantes sont libérées."
      },
      {
        "content": "La PKA inactive est un monomère dépourvu de sous-unité régulatrice.",
        "correct": false,
        "explanation": "Le holoenzyme classique est R2C2."
      },
      {
        "content": "Une seule molécule d'AMPc suffit à saturer les quatre sites régulateurs.",
        "correct": false,
        "explanation": "Quatre AMPc peuvent se lier."
      },
      {
        "content": "La PKA est une tyrosine phosphatase.",
        "correct": false,
        "explanation": "C'est une sérine/thréonine kinase."
      },
      {
        "content": "La PKA phosphoryle des résidus sérine ou thréonine de protéines cibles.",
        "correct": true,
        "explanation": "Elle est une sérine/thréonine kinase."
      }
    ],
    "explanation": "La PKA est régulée par l'AMPc : le holoenzyme R2C2 fixe jusqu'à quatre AMPc et libère deux sous-unités catalytiques actives."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la régulation par phosphorylation, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Toute phosphorylation active nécessairement l'enzyme ciblée.",
        "correct": false,
        "explanation": "Elle peut activer ou inhiber."
      },
      {
        "content": "La modification peut changer conformation, interactions, localisation ou activité catalytique.",
        "correct": true,
        "explanation": "Le phosphate apporte charge et possibilités d'interaction."
      },
      {
        "content": "Une kinase retire un phosphate et une phosphatase l'ajoute.",
        "correct": false,
        "explanation": "C'est l'inverse."
      },
      {
        "content": "Une phosphatase retire des groupes phosphate par hydrolyse.",
        "correct": true,
        "explanation": "La phosphorylation est donc souvent réversible."
      },
      {
        "content": "La phosphorylation peut activer ou inhiber une enzyme selon le contexte.",
        "correct": true,
        "explanation": "Il n'existe pas de direction universelle de l'effet."
      }
    ],
    "explanation": "La phosphorylation est une modification covalente réversible dont l'effet fonctionnel peut être activateur ou inhibiteur."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Citez une modification covalente régulatrice autre que la phosphorylation.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acétylation",
        "ADP-ribosylation",
        "adénylation",
        "uridylylation"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Phosphorylation, acétylation, ADP-ribosylation et autres modifications peuvent réguler l'activité de façon contextuelle."
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur l'ubiquitination, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Toute monoubiquitination entraîne obligatoirement une dégradation immédiate par le protéasome.",
        "correct": false,
        "explanation": "L'ubiquitination a des fonctions diverses."
      },
      {
        "content": "E1 active l'ubiquitine de manière ATP-dépendante.",
        "correct": true,
        "explanation": "C'est la première étape de la cascade."
      },
      {
        "content": "E2 porte l'ubiquitine activée avant son transfert au substrat.",
        "correct": true,
        "explanation": "E2 est l'enzyme conjugante."
      },
      {
        "content": "L'ubiquitine comporte environ 760 acides aminés.",
        "correct": false,
        "explanation": "Elle en comporte 76."
      },
      {
        "content": "E1 est la ligase qui reconnaît spécifiquement chaque substrat final.",
        "correct": false,
        "explanation": "Cette fonction revient surtout aux E3."
      }
    ],
    "explanation": "L'ubiquitination utilise la cascade E1–E2–E3 ; certaines chaînes dirigent les substrats vers le protéasome, mais l'ubiquitine possède aussi d'autres fonctions.",
    "requiredSelectionCount": 2
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le protéasome ubiquitine-dépendant, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le protéasome ne consomme jamais d'ATP.",
        "correct": false,
        "explanation": "La particule 19S utilise de l'ATP pour plusieurs étapes."
      },
      {
        "content": "La régulation de la demi-vie d'une enzyme peut moduler durablement son activité cellulaire.",
        "correct": true,
        "explanation": "Moins d'enzyme disponible signifie généralement une capacité catalytique moindre."
      },
      {
        "content": "Le protéasome ne dégrade pas uniquement des protéines dénaturées accidentellement.",
        "correct": true,
        "explanation": "Des protéines régulatrices natives sont ciblées de manière programmée."
      },
      {
        "content": "La dégradation protéasomale nécessite le dépliement du substrat.",
        "correct": true,
        "explanation": "Les ATPases du 19S participent au déroulement et à la translocation."
      },
      {
        "content": "Le protéasome 26S dégrade de nombreuses protéines polyubiquitinées.",
        "correct": true,
        "explanation": "Il associe un cœur 20S et des particules régulatrices 19S."
      }
    ],
    "explanation": "Le système ubiquitine-protéasome contrôle la qualité mais aussi la demi-vie programmée de nombreuses protéines régulatrices."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant les zymogènes et la protéolyse limitée, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Les protéases digestives sont des exemples classiques d'enzymes synthétisées comme zymogènes.",
        "correct": true,
        "explanation": "Trypsinogène et chymotrypsinogène sont des précurseurs."
      },
      {
        "content": "Les enzymes digestives sont toutes synthétisées directement sous forme active dans les cellules productrices.",
        "correct": false,
        "explanation": "Plusieurs sont synthétisées comme zymogènes."
      },
      {
        "content": "Un zymogène est une enzyme qui a obligatoirement été totalement dégradée.",
        "correct": false,
        "explanation": "C'est un précurseur intact activable."
      },
      {
        "content": "La protéolyse limitée doit toujours couper exactement trois liaisons.",
        "correct": false,
        "explanation": "Le nombre varie selon le zymogène."
      },
      {
        "content": "L'activation d'un zymogène est une phosphorylation toujours réversible.",
        "correct": false,
        "explanation": "Il s'agit d'un clivage protéolytique."
      }
    ],
    "explanation": "La protéolyse limitée active irréversiblement certains zymogènes par clivage ciblé d'une ou quelques liaisons peptidiques."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'activation du trypsinogène, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "L'entéropeptidase transforme directement le chymotrypsinogène en hémoglobine.",
        "correct": false,
        "explanation": "Elle active surtout le trypsinogène."
      },
      {
        "content": "La trypsine active aussi plusieurs autres zymogènes pancréatiques.",
        "correct": true,
        "explanation": "Elle participe à une cascade digestive."
      },
      {
        "content": "L'entéropeptidase du duodénum initie l'activation du trypsinogène.",
        "correct": true,
        "explanation": "Elle clive le peptide d'activation du trypsinogène."
      },
      {
        "content": "L'activation initiale exige obligatoirement trois clivages simultanés du trypsinogène.",
        "correct": false,
        "explanation": "Un clivage clé suffit à former la trypsine active."
      },
      {
        "content": "La trypsine ne peut activer aucun autre zymogène.",
        "correct": false,
        "explanation": "Elle en active plusieurs."
      }
    ],
    "explanation": "L'entéropeptidase clive le trypsinogène au site activateur, puis la trypsine amplifie l'activation et déclenche celle d'autres zymogènes."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans quel compartiment l'activation physiologique des zymogènes digestifs doit-elle principalement se produire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "lumière intestinale",
        "duodénum",
        "intestin grêle"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'entéropeptidase déclenche la trypsine, puis la trypsine lance une cascade de maturation des zymogènes digestifs dans l'intestin."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Toutes les protéines cellulaires suivent exactement la même demi-vie.",
        "correct": false,
        "explanation": "Les demi-vies sont très diverses."
      },
      {
        "content": "La PKA phosphoryle des résidus sérine ou thréonine de protéines cibles.",
        "correct": true,
        "explanation": "Elle est une sérine/thréonine kinase."
      },
      {
        "content": "Des voies protéolytiques différentes peuvent contrôler la demi-vie des protéines.",
        "correct": true,
        "explanation": "Le protéasome n'est pas l'unique système de dégradation cellulaire."
      },
      {
        "content": "Quatre molécules d'AMPc peuvent se lier au dimère régulateur.",
        "correct": true,
        "explanation": "Chaque sous-unité R possède deux sites de liaison à l'AMPc."
      },
      {
        "content": "La PKA inactive est un monomère dépourvu de sous-unité régulatrice.",
        "correct": false,
        "explanation": "Le holoenzyme classique est R2C2."
      },
      {
        "content": "Toute régulation de l'activité implique une modification covalente du site actif.",
        "correct": false,
        "explanation": "L'abondance peut varier sans modifier les molécules restantes."
      },
      {
        "content": "Une diminution de la quantité d'enzyme n'implique pas nécessairement une modification de l'activité intrinsèque de chaque molécule restante.",
        "correct": true,
        "explanation": "Concentration enzymatique et propriétés moléculaires sont distinctes."
      },
      {
        "content": "La synthèse et la dégradation des enzymes régulent leur abondance.",
        "correct": true,
        "explanation": "Cette régulation est souvent plus lente que l'allostérie."
      },
      {
        "content": "Dégrader une enzyme augmente nécessairement sa concentration.",
        "correct": false,
        "explanation": "Elle la diminue."
      },
      {
        "content": "La PKA est une tyrosine phosphatase.",
        "correct": false,
        "explanation": "C'est une sérine/thréonine kinase."
      }
    ],
    "explanation": "L'activité cellulaire dépend à la fois de l'état fonctionnel de chaque enzyme et de la quantité d'enzyme présente. La PKA est régulée par l'AMPc : le holoenzyme R2C2 fixe jusqu'à quatre AMPc et libère deux sous-unités catalytiques actives."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les stratégies de régulation enzymatique, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "La quantité d'enzyme peut être modulée par synthèse et dégradation.",
        "correct": true,
        "explanation": "La régulation de l'abondance agit plus lentement que certaines modifications directes."
      },
      {
        "content": "Toutes les régulations enzymatiques sont irréversibles.",
        "correct": false,
        "explanation": "De nombreuses régulations sont réversibles."
      },
      {
        "content": "Des sous-unités régulatrices peuvent contrôler l'accès ou l'activité de sous-unités catalytiques.",
        "correct": true,
        "explanation": "La PKA en est un exemple."
      },
      {
        "content": "Une enzyme ne peut être régulée que par modification de son gène.",
        "correct": false,
        "explanation": "La régulation peut être rapide et post-traductionnelle."
      },
      {
        "content": "L'activité peut être modulée par allostérie.",
        "correct": true,
        "explanation": "Un effecteur modifie l'activité via un site distinct du site catalytique."
      }
    ],
    "explanation": "L'activité enzymatique se régule par allostérie, sous-unités, modifications covalentes, abondance protéique ou protéolyse limitée."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les stratégies de régulation enzymatique ?",
    "choices": [
      {
        "content": "Une protéolyse limitée peut activer irréversiblement certains zymogènes.",
        "correct": true,
        "explanation": "C'est fréquent dans les protéases digestives et la coagulation."
      },
      {
        "content": "Des modifications covalentes réversibles peuvent modifier l'activité.",
        "correct": true,
        "explanation": "Phosphorylation et déphosphorylation sont des exemples majeurs."
      },
      {
        "content": "Toutes les régulations enzymatiques sont irréversibles.",
        "correct": false,
        "explanation": "De nombreuses régulations sont réversibles."
      },
      {
        "content": "Des sous-unités régulatrices peuvent contrôler l'accès ou l'activité de sous-unités catalytiques.",
        "correct": true,
        "explanation": "La PKA en est un exemple."
      },
      {
        "content": "L'activité peut être modulée par allostérie.",
        "correct": true,
        "explanation": "Un effecteur modifie l'activité via un site distinct du site catalytique."
      }
    ],
    "explanation": "L'activité enzymatique se régule par allostérie, sous-unités, modifications covalentes, abondance protéique ou protéolyse limitée."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Une enzyme doit-elle obligatoirement être oligomérique pour être allostérique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non",
        "non, une enzyme monomérique peut être allostérique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'allostérie correspond à l'action d'un ligand sur un site distinct du site actif, avec modification de l'état fonctionnel de l'enzyme."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant la régulation de la protéine kinase A, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "La PKA inactive est un monomère dépourvu de sous-unité régulatrice.",
        "correct": false,
        "explanation": "Le holoenzyme classique est R2C2."
      },
      {
        "content": "La PKA inactive est classiquement un holoenzyme R2C2.",
        "correct": true,
        "explanation": "Deux sous-unités régulatrices retiennent deux sous-unités catalytiques."
      },
      {
        "content": "La liaison de l'AMPc diminue l'affinité des sous-unités régulatrices pour les catalytiques.",
        "correct": true,
        "explanation": "Les sous-unités C sont libérées et actives."
      },
      {
        "content": "Les sous-unités régulatrices deviennent les enzymes catalytiques après liaison de l'AMPc.",
        "correct": false,
        "explanation": "Les sous-unités C préexistantes sont libérées."
      },
      {
        "content": "Une seule molécule d'AMPc suffit à saturer les quatre sites régulateurs.",
        "correct": false,
        "explanation": "Quatre AMPc peuvent se lier."
      }
    ],
    "explanation": "La PKA est régulée par l'AMPc : le holoenzyme R2C2 fixe jusqu'à quatre AMPc et libère deux sous-unités catalytiques actives.",
    "requiredSelectionCount": 2
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la régulation par phosphorylation, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "La modification peut changer conformation, interactions, localisation ou activité catalytique.",
        "correct": true,
        "explanation": "Le phosphate apporte charge et possibilités d'interaction."
      },
      {
        "content": "La phosphorylation ne modifie jamais la charge locale d'une protéine.",
        "correct": false,
        "explanation": "Le phosphate apporte des charges négatives."
      },
      {
        "content": "Les modifications covalentes sont toujours irréversibles.",
        "correct": false,
        "explanation": "La phosphorylation est typiquement réversible."
      },
      {
        "content": "La phosphorylation peut activer ou inhiber une enzyme selon le contexte.",
        "correct": true,
        "explanation": "Il n'existe pas de direction universelle de l'effet."
      },
      {
        "content": "Une kinase retire un phosphate et une phosphatase l'ajoute.",
        "correct": false,
        "explanation": "C'est l'inverse."
      }
    ],
    "explanation": "La phosphorylation est une modification covalente réversible dont l'effet fonctionnel peut être activateur ou inhibiteur."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Concernant les autres modifications covalentes régulatrices, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Le site modifié n'a jamais d'importance.",
        "correct": false,
        "explanation": "Le résidu et sa position sont déterminants."
      },
      {
        "content": "L'ADP-ribosylation ne concerne jamais les protéines.",
        "correct": false,
        "explanation": "Elle est une modification protéique bien établie."
      },
      {
        "content": "L'acétylation peut modifier l'activité ou les interactions de protéines.",
        "correct": true,
        "explanation": "Elle est souvent réversible grâce à des acétyltransférases et désacétylases."
      },
      {
        "content": "Toutes les modifications covalentes utilisent un phosphate.",
        "correct": false,
        "explanation": "Acétyle, ADP-ribose et autres groupes existent."
      },
      {
        "content": "L'acétylation signifie toujours destruction de la protéine.",
        "correct": false,
        "explanation": "Elle peut être une modification régulatrice réversible."
      }
    ],
    "explanation": "Phosphorylation, acétylation, ADP-ribosylation et autres modifications peuvent réguler l'activité de façon contextuelle."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant l'ubiquitination, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "E1 est la ligase qui reconnaît spécifiquement chaque substrat final.",
        "correct": false,
        "explanation": "Cette fonction revient surtout aux E3."
      },
      {
        "content": "L'ubiquitine humaine mature comporte 76 acides aminés.",
        "correct": true,
        "explanation": "C'est une petite protéine très conservée."
      },
      {
        "content": "E1 active l'ubiquitine de manière ATP-dépendante.",
        "correct": true,
        "explanation": "C'est la première étape de la cascade."
      },
      {
        "content": "E3 contribue à reconnaître le substrat et catalyse/organise le transfert d'ubiquitine.",
        "correct": true,
        "explanation": "Les ligases E3 donnent une grande partie de la spécificité."
      },
      {
        "content": "E2 hydrolyse les protéines dans le protéasome.",
        "correct": false,
        "explanation": "E2 conjugue l'ubiquitine."
      }
    ],
    "explanation": "L'ubiquitination utilise la cascade E1–E2–E3 ; certaines chaînes dirigent les substrats vers le protéasome, mais l'ubiquitine possède aussi d'autres fonctions."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel grand complexe protéolytique dégrade de nombreuses protéines polyubiquitinées ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "protéasome",
        "proteasome",
        "protéasome 26S"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le système ubiquitine-protéasome contrôle la qualité mais aussi la demi-vie programmée de nombreuses protéines régulatrices."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La vitesse maximale possible d'une réaction dépend notamment de la quantité d'enzyme active disponible.",
        "correct": true,
        "explanation": "À substrat saturant, davantage d'enzyme augmente la capacité catalytique."
      },
      {
        "content": "La synthèse et la dégradation des enzymes régulent leur abondance.",
        "correct": true,
        "explanation": "Cette régulation est souvent plus lente que l'allostérie."
      },
      {
        "content": "Les enzymes digestives sont toutes synthétisées directement sous forme active dans les cellules productrices.",
        "correct": false,
        "explanation": "Plusieurs sont synthétisées comme zymogènes."
      },
      {
        "content": "L'activation d'un zymogène est une phosphorylation toujours réversible.",
        "correct": false,
        "explanation": "Il s'agit d'un clivage protéolytique."
      },
      {
        "content": "La protéolyse limitée hydrolyse une ou quelques liaisons peptidiques ciblées.",
        "correct": true,
        "explanation": "Il n'existe pas une règle universelle de exactement deux ou trois liaisons."
      },
      {
        "content": "Un zymogène est une enzyme qui a obligatoirement été totalement dégradée.",
        "correct": false,
        "explanation": "C'est un précurseur intact activable."
      },
      {
        "content": "Des voies protéolytiques différentes peuvent contrôler la demi-vie des protéines.",
        "correct": true,
        "explanation": "Le protéasome n'est pas l'unique système de dégradation cellulaire."
      },
      {
        "content": "Les protéases digestives sont des exemples classiques d'enzymes synthétisées comme zymogènes.",
        "correct": true,
        "explanation": "Trypsinogène et chymotrypsinogène sont des précurseurs."
      },
      {
        "content": "Toutes les protéines cellulaires suivent exactement la même demi-vie.",
        "correct": false,
        "explanation": "Les demi-vies sont très diverses."
      },
      {
        "content": "La protéolyse limitée doit toujours couper exactement trois liaisons.",
        "correct": false,
        "explanation": "Le nombre varie selon le zymogène."
      }
    ],
    "explanation": "La protéolyse limitée active irréversiblement certains zymogènes par clivage ciblé d'une ou quelques liaisons peptidiques. L'activité cellulaire dépend à la fois de l'état fonctionnel de chaque enzyme et de la quantité d'enzyme présente."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant l'activation du trypsinogène, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La trypsine active aussi plusieurs autres zymogènes pancréatiques.",
        "correct": true,
        "explanation": "Elle participe à une cascade digestive."
      },
      {
        "content": "La trypsine formée peut activer d'autres molécules de trypsinogène.",
        "correct": true,
        "explanation": "Une amplification autocatalytique devient possible."
      },
      {
        "content": "La trypsine ne peut activer aucun autre zymogène.",
        "correct": false,
        "explanation": "Elle en active plusieurs."
      },
      {
        "content": "L'entéropeptidase du duodénum initie l'activation du trypsinogène.",
        "correct": true,
        "explanation": "Elle clive le peptide d'activation du trypsinogène."
      },
      {
        "content": "Chez l'humain, l'activation initiale repose sur le clivage d'une liaison après Lys15 du trypsinogène cationique.",
        "correct": true,
        "explanation": "La rupture Lys15–Ile16 crée le nouveau N-terminal actif."
      }
    ],
    "explanation": "L'entéropeptidase clive le trypsinogène au site activateur, puis la trypsine amplifie l'activation et déclenche celle d'autres zymogènes."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle protéase active de nombreux zymogènes pancréatiques après son activation intestinale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "trypsine",
        "la trypsine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'entéropeptidase déclenche la trypsine, puis la trypsine lance une cascade de maturation des zymogènes digestifs dans l'intestin."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur la régulation de l'activité par l'abondance enzymatique, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Toutes les protéines cellulaires suivent exactement la même demi-vie.",
        "correct": false,
        "explanation": "Les demi-vies sont très diverses."
      },
      {
        "content": "La synthèse et la dégradation des enzymes régulent leur abondance.",
        "correct": true,
        "explanation": "Cette régulation est souvent plus lente que l'allostérie."
      },
      {
        "content": "Toute régulation de l'activité implique une modification covalente du site actif.",
        "correct": false,
        "explanation": "L'abondance peut varier sans modifier les molécules restantes."
      },
      {
        "content": "Dégrader une enzyme augmente nécessairement sa concentration.",
        "correct": false,
        "explanation": "Elle la diminue."
      },
      {
        "content": "Des voies protéolytiques différentes peuvent contrôler la demi-vie des protéines.",
        "correct": true,
        "explanation": "Le protéasome n'est pas l'unique système de dégradation cellulaire."
      }
    ],
    "explanation": "L'activité cellulaire dépend à la fois de l'état fonctionnel de chaque enzyme et de la quantité d'enzyme présente.",
    "requiredSelectionCount": 2
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Dans une autre application, quelles propositions décrivent correctement les stratégies de régulation enzymatique ?",
    "choices": [
      {
        "content": "Une enzyme ne peut être régulée que par modification de son gène.",
        "correct": false,
        "explanation": "La régulation peut être rapide et post-traductionnelle."
      },
      {
        "content": "L'activité peut être modulée par allostérie.",
        "correct": true,
        "explanation": "Un effecteur modifie l'activité via un site distinct du site catalytique."
      },
      {
        "content": "La quantité d'enzyme peut être modulée par synthèse et dégradation.",
        "correct": true,
        "explanation": "La régulation de l'abondance agit plus lentement que certaines modifications directes."
      },
      {
        "content": "Toutes les régulations enzymatiques sont irréversibles.",
        "correct": false,
        "explanation": "De nombreuses régulations sont réversibles."
      },
      {
        "content": "La quantité d'enzyme ne peut jamais influencer le flux catalytique.",
        "correct": false,
        "explanation": "L'abondance de l'enzyme est un déterminant important."
      }
    ],
    "explanation": "L'activité enzymatique se régule par allostérie, sous-unités, modifications covalentes, abondance protéique ou protéolyse limitée."
  }
];
