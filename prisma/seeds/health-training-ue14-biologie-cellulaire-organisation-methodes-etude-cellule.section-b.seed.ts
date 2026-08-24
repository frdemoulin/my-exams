import type { SeedQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch1 — Culture cellulaire : principes — V2 active */
export const SECTION_B_QUESTIONS: SeedQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment nomme-t-on une culture établie directement à partir d’un prélèvement biologique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "culture primaire",
        "primaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Une culture primaire est obtenue directement à partir d’un tissu ou d’un prélèvement."
  },
  {
    "order": 24,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Dans le cadre de « Principes de culture cellulaire », identifiez l’affirmation correcte.",
    "choices": [
      {
        "content": "La culture cellulaire est une approche in vitro réalisée hors de l’environnement tissulaire naturel.",
        "correct": true,
        "explanation": "Exact. La culture cellulaire maintient ou multiplie des cellules hors de l’organisme dans un environnement contrôlé. Le milieu fournit nutriments, ions et facteurs adaptés ; température, pH, gaz et asepsie sont ajustés au type cellulaire."
      },
      {
        "content": "Le milieu de culture peut être dépourvu de toute source de nutriments.",
        "correct": false,
        "explanation": "Incorrect. La culture cellulaire maintient ou multiplie des cellules hors de l’organisme dans un environnement contrôlé. Le milieu fournit nutriments, ions et facteurs adaptés ; température, pH, gaz et asepsie sont ajustés au type cellulaire."
      },
      {
        "content": "Toutes les cellules mammaliennes se cultivent dans exactement le même milieu.",
        "correct": false,
        "explanation": "Incorrect. La culture cellulaire maintient ou multiplie des cellules hors de l’organisme dans un environnement contrôlé. Le milieu fournit nutriments, ions et facteurs adaptés ; température, pH, gaz et asepsie sont ajustés au type cellulaire."
      },
      {
        "content": "La culture cellulaire est une méthode exclusivement in vivo.",
        "correct": false,
        "explanation": "Incorrect. La culture cellulaire maintient ou multiplie des cellules hors de l’organisme dans un environnement contrôlé. Le milieu fournit nutriments, ions et facteurs adaptés ; température, pH, gaz et asepsie sont ajustés au type cellulaire."
      },
      {
        "content": "Une culture cellulaire reproduit nécessairement toutes les propriétés d’un tissu intact.",
        "correct": false,
        "explanation": "Incorrect. La culture cellulaire maintient ou multiplie des cellules hors de l’organisme dans un environnement contrôlé. Le milieu fournit nutriments, ions et facteurs adaptés ; température, pH, gaz et asepsie sont ajustés au type cellulaire."
      }
    ],
    "explanation": "La culture cellulaire maintient ou multiplie des cellules hors de l’organisme dans un environnement contrôlé. Le milieu fournit nutriments, ions et facteurs adaptés ; température, pH, gaz et asepsie sont ajustés au type cellulaire."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement « Incubation et environnement de culture » ?",
    "choices": [
      {
        "content": "Une culture humaine standard est habituellement incubée à 4 °C pour favoriser la prolifération.",
        "correct": false,
        "explanation": "Incorrect. Pour de nombreuses cellules humaines, 37 °C et environ 5 % de CO2 sont des conditions courantes lorsque le milieu utilise un tampon bicarbonate. Une atmosphère humide limite l’évaporation, mais les paramètres varient selon le système biologique."
      },
      {
        "content": "L’évaporation du milieu n’a aucun effet sur son osmolarité.",
        "correct": false,
        "explanation": "Incorrect. Pour de nombreuses cellules humaines, 37 °C et environ 5 % de CO2 sont des conditions courantes lorsque le milieu utilise un tampon bicarbonate. Une atmosphère humide limite l’évaporation, mais les paramètres varient selon le système biologique."
      },
      {
        "content": "Une température proche de 37 °C est couramment utilisée pour des cellules humaines.",
        "correct": true,
        "explanation": "Exact. Pour de nombreuses cellules humaines, 37 °C et environ 5 % de CO2 sont des conditions courantes lorsque le milieu utilise un tampon bicarbonate. Une atmosphère humide limite l’évaporation, mais les paramètres varient selon le système biologique."
      },
      {
        "content": "Le CO2 d’un incubateur est sans relation avec le pH des milieux bicarbonatés.",
        "correct": false,
        "explanation": "Incorrect. Pour de nombreuses cellules humaines, 37 °C et environ 5 % de CO2 sont des conditions courantes lorsque le milieu utilise un tampon bicarbonate. Une atmosphère humide limite l’évaporation, mais les paramètres varient selon le système biologique."
      },
      {
        "content": "Toutes les cultures mammaliennes exigent exactement 5,00 % de CO2.",
        "correct": false,
        "explanation": "Incorrect. Pour de nombreuses cellules humaines, 37 °C et environ 5 % de CO2 sont des conditions courantes lorsque le milieu utilise un tampon bicarbonate. Une atmosphère humide limite l’évaporation, mais les paramètres varient selon le système biologique."
      }
    ],
    "explanation": "Pour de nombreuses cellules humaines, 37 °C et environ 5 % de CO2 sont des conditions courantes lorsque le milieu utilise un tampon bicarbonate. Une atmosphère humide limite l’évaporation, mais les paramètres varient selon le système biologique."
  },
  {
    "order": 26,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment nomme-t-on l’opération consistant à transférer une partie des cellules vers un nouveau récipient de culture ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "passage cellulaire",
        "passage",
        "repiquage",
        "repiquage cellulaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le passage ou repiquage permet de poursuivre la culture à une densité adaptée."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel terme décrit le pourcentage de surface couvert par des cellules adhérentes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "confluence"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La confluence décrit la couverture de la surface par une culture adhérente."
  },
  {
    "order": 28,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Asepsie et poste de sécurité microbiologique », lesquelles sont incorrectes ?",
    "choices": [
      {
        "content": "La technique aseptique vise à éviter l’introduction de microorganismes dans une culture.",
        "correct": false,
        "explanation": "Exact. Les manipulations de culture nécessitent une technique aseptique. Un PSM adapté, notamment de classe II, contribue à limiter les contaminations et peut protéger l’opérateur, l’échantillon et l’environnement lorsqu’il est utilisé selon les procédures appropriées."
      },
      {
        "content": "Une contamination microbienne n’a aucun effet sur le métabolisme des cellules cultivées.",
        "correct": true,
        "explanation": "Incorrect. Les manipulations de culture nécessitent une technique aseptique. Un PSM adapté, notamment de classe II, contribue à limiter les contaminations et peut protéger l’opérateur, l’échantillon et l’environnement lorsqu’il est utilisé selon les procédures appropriées."
      },
      {
        "content": "Un poste de sécurité microbiologique adapté utilise un flux d’air filtré.",
        "correct": false,
        "explanation": "Exact. Les manipulations de culture nécessitent une technique aseptique. Un PSM adapté, notamment de classe II, contribue à limiter les contaminations et peut protéger l’opérateur, l’échantillon et l’environnement lorsqu’il est utilisé selon les procédures appropriées."
      },
      {
        "content": "Un PSM de classe II peut contribuer à protéger à la fois l’opérateur, le produit biologique et l’environnement.",
        "correct": false,
        "explanation": "Exact. Les manipulations de culture nécessitent une technique aseptique. Un PSM adapté, notamment de classe II, contribue à limiter les contaminations et peut protéger l’opérateur, l’échantillon et l’environnement lorsqu’il est utilisé selon les procédures appropriées."
      },
      {
        "content": "Le PSM remplace toute nécessité de respecter une technique aseptique.",
        "correct": true,
        "explanation": "Incorrect. Les manipulations de culture nécessitent une technique aseptique. Un PSM adapté, notamment de classe II, contribue à limiter les contaminations et peut protéger l’opérateur, l’échantillon et l’environnement lorsqu’il est utilisé selon les procédures appropriées."
      }
    ],
    "explanation": "Les manipulations de culture nécessitent une technique aseptique. Un PSM adapté, notamment de classe II, contribue à limiter les contaminations et peut protéger l’opérateur, l’échantillon et l’environnement lorsqu’il est utilisé selon les procédures appropriées. Ici, il fallait sélectionner les affirmations incorrectes."
  },
  {
    "order": 29,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Culture primaire et culture secondaire », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Des cellules circulantes peuvent être isolées à partir d’un prélèvement sanguin.",
        "correct": true,
        "explanation": "Exact. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "Une culture primaire est nécessairement une lignée immortelle établie depuis des années.",
        "correct": false,
        "explanation": "Incorrect. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "Une culture primaire est obtenue directement à partir d’un prélèvement biologique.",
        "correct": true,
        "explanation": "Exact. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "Une culture primaire ne peut jamais provenir de sang.",
        "correct": false,
        "explanation": "Incorrect. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "Des cellules d’un tissu peuvent être isolées par dissociation mécanique et/ou enzymatique.",
        "correct": true,
        "explanation": "Exact. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      }
    ],
    "explanation": "Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment nomme-t-on l’arrêt durable de prolifération observé après un nombre fini de divisions de nombreuses cellules normales ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sénescence réplicative",
        "senescence replicative",
        "sénescence",
        "senescence"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La sénescence réplicative limite la durée de vie de nombreuses cellules somatiques normales en culture."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Parmi ces affirmations concernant « Confluence et passage cellulaire », retenez exactement les 3 justes.",
    "choices": [
      {
        "content": "Les cellules adhérentes peuvent être détachées par des méthodes enzymatiques ou mécaniques adaptées.",
        "correct": true,
        "explanation": "Exact. La confluence décrit la fraction de surface couverte par des cellules adhérentes. Le passage consiste à détacher ou récolter une partie des cellules puis à les réensemencer à plus faible densité afin de poursuivre la culture."
      },
      {
        "content": "La confluence augmente à mesure qu’une culture adhérente couvre la surface disponible.",
        "correct": true,
        "explanation": "Exact. La confluence décrit la fraction de surface couverte par des cellules adhérentes. Le passage consiste à détacher ou récolter une partie des cellules puis à les réensemencer à plus faible densité afin de poursuivre la culture."
      },
      {
        "content": "Un passage cellulaire consiste uniquement à changer le milieu sans déplacer les cellules.",
        "correct": false,
        "explanation": "Incorrect. La confluence décrit la fraction de surface couverte par des cellules adhérentes. Le passage consiste à détacher ou récolter une partie des cellules puis à les réensemencer à plus faible densité afin de poursuivre la culture."
      },
      {
        "content": "Un passage cellulaire consiste à transférer des cellules vers un nouveau récipient de culture.",
        "correct": true,
        "explanation": "Exact. La confluence décrit la fraction de surface couverte par des cellules adhérentes. Le passage consiste à détacher ou récolter une partie des cellules puis à les réensemencer à plus faible densité afin de poursuivre la culture."
      },
      {
        "content": "La confluence signifie obligatoirement que toutes les cellules meurent immédiatement.",
        "correct": false,
        "explanation": "Incorrect. La confluence décrit la fraction de surface couverte par des cellules adhérentes. Le passage consiste à détacher ou récolter une partie des cellules puis à les réensemencer à plus faible densité afin de poursuivre la culture."
      }
    ],
    "explanation": "La confluence décrit la fraction de surface couverte par des cellules adhérentes. Le passage consiste à détacher ou récolter une partie des cellules puis à les réensemencer à plus faible densité afin de poursuivre la culture."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles affirmations décrivent correctement « Durée de vie des cultures et lignées cellulaires » ?",
    "choices": [
      {
        "content": "La sénescence réplicative peut limiter le nombre de passages de cellules normales.",
        "correct": true,
        "explanation": "Exact. La plupart des cellules somatiques normales ont une capacité de prolifération finie en culture et peuvent entrer en sénescence réplicative. Des lignées immortalisées, souvent tumorales ou transformées, peuvent proliférer durablement mais ne reproduisent pas parfaitement un tissu normal."
      },
      {
        "content": "Toutes les cellules normales se divisent indéfiniment en culture si le milieu est renouvelé.",
        "correct": false,
        "explanation": "Incorrect. La plupart des cellules somatiques normales ont une capacité de prolifération finie en culture et peuvent entrer en sénescence réplicative. Des lignées immortalisées, souvent tumorales ou transformées, peuvent proliférer durablement mais ne reproduisent pas parfaitement un tissu normal."
      },
      {
        "content": "Toute cellule prélevée dans une tumeur devient automatiquement une lignée immortelle.",
        "correct": false,
        "explanation": "Incorrect. La plupart des cellules somatiques normales ont une capacité de prolifération finie en culture et peuvent entrer en sénescence réplicative. Des lignées immortalisées, souvent tumorales ou transformées, peuvent proliférer durablement mais ne reproduisent pas parfaitement un tissu normal."
      },
      {
        "content": "Une lignée immortalisée est nécessairement identique à une cellule normale in vivo.",
        "correct": false,
        "explanation": "Incorrect. La plupart des cellules somatiques normales ont une capacité de prolifération finie en culture et peuvent entrer en sénescence réplicative. Des lignées immortalisées, souvent tumorales ou transformées, peuvent proliférer durablement mais ne reproduisent pas parfaitement un tissu normal."
      },
      {
        "content": "De nombreuses cellules somatiques normales ont une capacité de prolifération finie en culture.",
        "correct": true,
        "explanation": "Exact. La plupart des cellules somatiques normales ont une capacité de prolifération finie en culture et peuvent entrer en sénescence réplicative. Des lignées immortalisées, souvent tumorales ou transformées, peuvent proliférer durablement mais ne reproduisent pas parfaitement un tissu normal."
      }
    ],
    "explanation": "La plupart des cellules somatiques normales ont une capacité de prolifération finie en culture et peuvent entrer en sénescence réplicative. Des lignées immortalisées, souvent tumorales ou transformées, peuvent proliférer durablement mais ne reproduisent pas parfaitement un tissu normal."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions ci-dessous relatives à « Cryoconservation des cellules », laquelle est correcte ?",
    "choices": [
      {
        "content": "Le DMSO est ajouté pour accélérer volontairement la formation de gros cristaux de glace.",
        "correct": false,
        "explanation": "Incorrect. La cryoconservation ralentit fortement les processus biologiques et permet de constituer des stocks. Des cryoprotecteurs comme le DMSO limitent les dommages liés à la glace ; la congélation et la décongélation doivent être contrôlées et peuvent réduire la viabilité."
      },
      {
        "content": "La cryoconservation garantit qu’aucune cellule ne sera perdue à la décongélation.",
        "correct": false,
        "explanation": "Incorrect. La cryoconservation ralentit fortement les processus biologiques et permet de constituer des stocks. Des cryoprotecteurs comme le DMSO limitent les dommages liés à la glace ; la congélation et la décongélation doivent être contrôlées et peuvent réduire la viabilité."
      },
      {
        "content": "La cryoconservation permet de stocker des cellules pendant de longues périodes.",
        "correct": true,
        "explanation": "Exact. La cryoconservation ralentit fortement les processus biologiques et permet de constituer des stocks. Des cryoprotecteurs comme le DMSO limitent les dommages liés à la glace ; la congélation et la décongélation doivent être contrôlées et peuvent réduire la viabilité."
      },
      {
        "content": "Une culture décongelée peut être utilisée sans aucun contrôle de viabilité.",
        "correct": false,
        "explanation": "Incorrect. La cryoconservation ralentit fortement les processus biologiques et permet de constituer des stocks. Des cryoprotecteurs comme le DMSO limitent les dommages liés à la glace ; la congélation et la décongélation doivent être contrôlées et peuvent réduire la viabilité."
      },
      {
        "content": "La congélation n’entraîne jamais de stress cellulaire.",
        "correct": false,
        "explanation": "Incorrect. La cryoconservation ralentit fortement les processus biologiques et permet de constituer des stocks. Des cryoprotecteurs comme le DMSO limitent les dommages liés à la glace ; la congélation et la décongélation doivent être contrôlées et peuvent réduire la viabilité."
      }
    ],
    "explanation": "La cryoconservation ralentit fortement les processus biologiques et permet de constituer des stocks. Des cryoprotecteurs comme le DMSO limitent les dommages liés à la glace ; la congélation et la décongélation doivent être contrôlées et peuvent réduire la viabilité."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant « Principes de culture cellulaire » ?",
    "choices": [
      {
        "content": "Toutes les cellules mammaliennes se cultivent dans exactement le même milieu.",
        "correct": false,
        "explanation": "Incorrect. La culture cellulaire maintient ou multiplie des cellules hors de l’organisme dans un environnement contrôlé. Le milieu fournit nutriments, ions et facteurs adaptés ; température, pH, gaz et asepsie sont ajustés au type cellulaire."
      },
      {
        "content": "Le milieu de culture doit fournir les nutriments et ions nécessaires aux cellules.",
        "correct": true,
        "explanation": "Exact. La culture cellulaire maintient ou multiplie des cellules hors de l’organisme dans un environnement contrôlé. Le milieu fournit nutriments, ions et facteurs adaptés ; température, pH, gaz et asepsie sont ajustés au type cellulaire."
      },
      {
        "content": "Certaines cellules nécessitent des facteurs de croissance ou du sérum pour proliférer.",
        "correct": true,
        "explanation": "Exact. La culture cellulaire maintient ou multiplie des cellules hors de l’organisme dans un environnement contrôlé. Le milieu fournit nutriments, ions et facteurs adaptés ; température, pH, gaz et asepsie sont ajustés au type cellulaire."
      },
      {
        "content": "La culture cellulaire est une méthode exclusivement in vivo.",
        "correct": false,
        "explanation": "Incorrect. La culture cellulaire maintient ou multiplie des cellules hors de l’organisme dans un environnement contrôlé. Le milieu fournit nutriments, ions et facteurs adaptés ; température, pH, gaz et asepsie sont ajustés au type cellulaire."
      },
      {
        "content": "Les conditions de culture doivent être adaptées au type cellulaire étudié.",
        "correct": true,
        "explanation": "Exact. La culture cellulaire maintient ou multiplie des cellules hors de l’organisme dans un environnement contrôlé. Le milieu fournit nutriments, ions et facteurs adaptés ; température, pH, gaz et asepsie sont ajustés au type cellulaire."
      }
    ],
    "explanation": "La culture cellulaire maintient ou multiplie des cellules hors de l’organisme dans un environnement contrôlé. Le milieu fournit nutriments, ions et facteurs adaptés ; température, pH, gaz et asepsie sont ajustés au type cellulaire."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sur le thème « Incubation et environnement de culture », sélectionnez exactement 2 propositions exactes.",
    "choices": [
      {
        "content": "Le CO2 contribue à l’équilibre du pH dans les milieux utilisant le système bicarbonate.",
        "correct": true,
        "explanation": "Exact. Pour de nombreuses cellules humaines, 37 °C et environ 5 % de CO2 sont des conditions courantes lorsque le milieu utilise un tampon bicarbonate. Une atmosphère humide limite l’évaporation, mais les paramètres varient selon le système biologique."
      },
      {
        "content": "La température n’influence pas la vitesse des réactions cellulaires.",
        "correct": false,
        "explanation": "Incorrect. Pour de nombreuses cellules humaines, 37 °C et environ 5 % de CO2 sont des conditions courantes lorsque le milieu utilise un tampon bicarbonate. Une atmosphère humide limite l’évaporation, mais les paramètres varient selon le système biologique."
      },
      {
        "content": "Une atmosphère à environ 5 % de CO2 est fréquente avec les milieux tamponnés au bicarbonate.",
        "correct": true,
        "explanation": "Exact. Pour de nombreuses cellules humaines, 37 °C et environ 5 % de CO2 sont des conditions courantes lorsque le milieu utilise un tampon bicarbonate. Une atmosphère humide limite l’évaporation, mais les paramètres varient selon le système biologique."
      },
      {
        "content": "Une culture humaine standard est habituellement incubée à 4 °C pour favoriser la prolifération.",
        "correct": false,
        "explanation": "Incorrect. Pour de nombreuses cellules humaines, 37 °C et environ 5 % de CO2 sont des conditions courantes lorsque le milieu utilise un tampon bicarbonate. Une atmosphère humide limite l’évaporation, mais les paramètres varient selon le système biologique."
      },
      {
        "content": "L’évaporation du milieu n’a aucun effet sur son osmolarité.",
        "correct": false,
        "explanation": "Incorrect. Pour de nombreuses cellules humaines, 37 °C et environ 5 % de CO2 sont des conditions courantes lorsque le milieu utilise un tampon bicarbonate. Une atmosphère humide limite l’évaporation, mais les paramètres varient selon le système biologique."
      }
    ],
    "explanation": "Pour de nombreuses cellules humaines, 37 °C et environ 5 % de CO2 sont des conditions courantes lorsque le milieu utilise un tampon bicarbonate. Une atmosphère humide limite l’évaporation, mais les paramètres varient selon le système biologique."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel cryoprotecteur est couramment utilisé pour congeler des cellules animales ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "DMSO",
        "diméthylsulfoxyde",
        "dimethylsulfoxide",
        "dimethylsulfoxyde"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le DMSO est un cryoprotecteur courant des stocks cellulaires."
  },
  {
    "order": 37,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant « Asepsie et poste de sécurité microbiologique », quelles affirmations sont correctes ?",
    "choices": [
      {
        "content": "La désinfection du plan de travail réduit le risque de contamination.",
        "correct": true,
        "explanation": "Exact. Les manipulations de culture nécessitent une technique aseptique. Un PSM adapté, notamment de classe II, contribue à limiter les contaminations et peut protéger l’opérateur, l’échantillon et l’environnement lorsqu’il est utilisé selon les procédures appropriées."
      },
      {
        "content": "Le flux d’air d’un PSM est volontairement non filtré.",
        "correct": false,
        "explanation": "Incorrect. Les manipulations de culture nécessitent une technique aseptique. Un PSM adapté, notamment de classe II, contribue à limiter les contaminations et peut protéger l’opérateur, l’échantillon et l’environnement lorsqu’il est utilisé selon les procédures appropriées."
      },
      {
        "content": "Les contaminations par bactéries, levures ou mycoplasmes peuvent fausser les résultats expérimentaux.",
        "correct": true,
        "explanation": "Exact. Les manipulations de culture nécessitent une technique aseptique. Un PSM adapté, notamment de classe II, contribue à limiter les contaminations et peut protéger l’opérateur, l’échantillon et l’environnement lorsqu’il est utilisé selon les procédures appropriées."
      },
      {
        "content": "Un poste de sécurité microbiologique adapté utilise un flux d’air filtré.",
        "correct": true,
        "explanation": "Exact. Les manipulations de culture nécessitent une technique aseptique. Un PSM adapté, notamment de classe II, contribue à limiter les contaminations et peut protéger l’opérateur, l’échantillon et l’environnement lorsqu’il est utilisé selon les procédures appropriées."
      },
      {
        "content": "Un PSM de classe II peut contribuer à protéger à la fois l’opérateur, le produit biologique et l’environnement.",
        "correct": true,
        "explanation": "Exact. Les manipulations de culture nécessitent une technique aseptique. Un PSM adapté, notamment de classe II, contribue à limiter les contaminations et peut protéger l’opérateur, l’échantillon et l’environnement lorsqu’il est utilisé selon les procédures appropriées."
      }
    ],
    "explanation": "Les manipulations de culture nécessitent une technique aseptique. Un PSM adapté, notamment de classe II, contribue à limiter les contaminations et peut protéger l’opérateur, l’échantillon et l’environnement lorsqu’il est utilisé selon les procédures appropriées."
  },
  {
    "order": 38,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Concernant « Culture primaire et culture secondaire », sélectionnez exactement les cinq propositions exactes parmi les dix proposées.",
    "choices": [
      {
        "content": "Des cellules d’un tissu peuvent être isolées par dissociation mécanique et/ou enzymatique.",
        "correct": true,
        "explanation": "Exact. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "Les cultures primaires conservent souvent davantage de caractéristiques du tissu d’origine que certaines lignées établies.",
        "correct": true,
        "explanation": "Exact. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "Des cellules circulantes peuvent être isolées à partir d’un prélèvement sanguin.",
        "correct": true,
        "explanation": "Exact. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "Une culture primaire peut provenir d’un tissu normal ou tumoral.",
        "correct": true,
        "explanation": "Exact. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "Le premier passage transforme automatiquement toute cellule normale en cellule cancéreuse.",
        "correct": false,
        "explanation": "Incorrect. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "Le premier repiquage d’une culture primaire conduit à une culture secondaire.",
        "correct": true,
        "explanation": "Exact. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "Les cultures primaires sont toujours parfaitement homogènes et identiques entre donneurs.",
        "correct": false,
        "explanation": "Incorrect. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "La dissociation d’un tissu exclut toute utilisation d’enzymes.",
        "correct": false,
        "explanation": "Incorrect. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "Seules les tumeurs peuvent fournir des cultures primaires.",
        "correct": false,
        "explanation": "Incorrect. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      },
      {
        "content": "Une culture secondaire est obtenue avant toute culture primaire.",
        "correct": false,
        "explanation": "Incorrect. Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
      }
    ],
    "explanation": "Une culture primaire est établie directement à partir de cellules isolées d’un tissu ou d’un prélèvement. Après dissociation et premier repiquage, les cellules forment une culture secondaire ; des passages successifs peuvent ensuite être réalisés."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour le thème « Confluence et passage cellulaire », quelles propositions doivent être retenues ?",
    "choices": [
      {
        "content": "Un passage cellulaire consiste à transférer des cellules vers un nouveau récipient de culture.",
        "correct": true,
        "explanation": "Exact. La confluence décrit la fraction de surface couverte par des cellules adhérentes. Le passage consiste à détacher ou récolter une partie des cellules puis à les réensemencer à plus faible densité afin de poursuivre la culture."
      },
      {
        "content": "Les cellules adhérentes peuvent être détachées par des méthodes enzymatiques ou mécaniques adaptées.",
        "correct": true,
        "explanation": "Exact. La confluence décrit la fraction de surface couverte par des cellules adhérentes. Le passage consiste à détacher ou récolter une partie des cellules puis à les réensemencer à plus faible densité afin de poursuivre la culture."
      },
      {
        "content": "Les cellules adhérentes ne peuvent jamais être détachées de leur support.",
        "correct": false,
        "explanation": "Incorrect. La confluence décrit la fraction de surface couverte par des cellules adhérentes. Le passage consiste à détacher ou récolter une partie des cellules puis à les réensemencer à plus faible densité afin de poursuivre la culture."
      },
      {
        "content": "Le repiquage à plus faible densité permet de poursuivre la prolifération de nombreuses cultures.",
        "correct": true,
        "explanation": "Exact. La confluence décrit la fraction de surface couverte par des cellules adhérentes. Le passage consiste à détacher ou récolter une partie des cellules puis à les réensemencer à plus faible densité afin de poursuivre la culture."
      },
      {
        "content": "Une surconfluence peut modifier la prolifération et la différenciation de certaines cellules.",
        "correct": true,
        "explanation": "Exact. La confluence décrit la fraction de surface couverte par des cellules adhérentes. Le passage consiste à détacher ou récolter une partie des cellules puis à les réensemencer à plus faible densité afin de poursuivre la culture."
      }
    ],
    "explanation": "La confluence décrit la fraction de surface couverte par des cellules adhérentes. Le passage consiste à détacher ou récolter une partie des cellules puis à les réensemencer à plus faible densité afin de poursuivre la culture."
  },
  {
    "order": 40,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Concernant « Durée de vie des cultures et lignées cellulaires », choisissez exactement 2 affirmations correctes.",
    "choices": [
      {
        "content": "Une lignée immortalisée est nécessairement identique à une cellule normale in vivo.",
        "correct": false,
        "explanation": "Incorrect. La plupart des cellules somatiques normales ont une capacité de prolifération finie en culture et peuvent entrer en sénescence réplicative. Des lignées immortalisées, souvent tumorales ou transformées, peuvent proliférer durablement mais ne reproduisent pas parfaitement un tissu normal."
      },
      {
        "content": "La sénescence réplicative correspond à une accélération infinie de la prolifération.",
        "correct": false,
        "explanation": "Incorrect. La plupart des cellules somatiques normales ont une capacité de prolifération finie en culture et peuvent entrer en sénescence réplicative. Des lignées immortalisées, souvent tumorales ou transformées, peuvent proliférer durablement mais ne reproduisent pas parfaitement un tissu normal."
      },
      {
        "content": "Des cellules issues de tumeurs peuvent donner naissance à des lignées capables de proliférer durablement.",
        "correct": true,
        "explanation": "Exact. La plupart des cellules somatiques normales ont une capacité de prolifération finie en culture et peuvent entrer en sénescence réplicative. Des lignées immortalisées, souvent tumorales ou transformées, peuvent proliférer durablement mais ne reproduisent pas parfaitement un tissu normal."
      },
      {
        "content": "Une lignée cellulaire ne peut jamais dériver d’une transformation expérimentale.",
        "correct": false,
        "explanation": "Incorrect. La plupart des cellules somatiques normales ont une capacité de prolifération finie en culture et peuvent entrer en sénescence réplicative. Des lignées immortalisées, souvent tumorales ou transformées, peuvent proliférer durablement mais ne reproduisent pas parfaitement un tissu normal."
      },
      {
        "content": "La sénescence réplicative peut limiter le nombre de passages de cellules normales.",
        "correct": true,
        "explanation": "Exact. La plupart des cellules somatiques normales ont une capacité de prolifération finie en culture et peuvent entrer en sénescence réplicative. Des lignées immortalisées, souvent tumorales ou transformées, peuvent proliférer durablement mais ne reproduisent pas parfaitement un tissu normal."
      }
    ],
    "explanation": "La plupart des cellules somatiques normales ont une capacité de prolifération finie en culture et peuvent entrer en sénescence réplicative. Des lignées immortalisées, souvent tumorales ou transformées, peuvent proliférer durablement mais ne reproduisent pas parfaitement un tissu normal."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel gaz est fréquemment maintenu autour de 5 % dans les incubateurs utilisant des milieux bicarbonatés ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "CO2",
        "dioxyde de carbone",
        "gaz carbonique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le CO2 participe au tamponnage du pH des milieux bicarbonatés."
  },
  {
    "order": 42,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Cryoconservation des cellules », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le DMSO est un cryoprotecteur fréquemment utilisé pour des cellules animales.",
        "correct": true,
        "explanation": "Exact. La cryoconservation ralentit fortement les processus biologiques et permet de constituer des stocks. Des cryoprotecteurs comme le DMSO limitent les dommages liés à la glace ; la congélation et la décongélation doivent être contrôlées et peuvent réduire la viabilité."
      },
      {
        "content": "La formation de cristaux de glace peut endommager les cellules lors de la congélation.",
        "correct": true,
        "explanation": "Exact. La cryoconservation ralentit fortement les processus biologiques et permet de constituer des stocks. Des cryoprotecteurs comme le DMSO limitent les dommages liés à la glace ; la congélation et la décongélation doivent être contrôlées et peuvent réduire la viabilité."
      },
      {
        "content": "Dans ce cadre, une culture décongelée peut être utilisée sans aucun contrôle de viabilité.",
        "correct": false,
        "explanation": "Incorrect. La cryoconservation ralentit fortement les processus biologiques et permet de constituer des stocks. Des cryoprotecteurs comme le DMSO limitent les dommages liés à la glace ; la congélation et la décongélation doivent être contrôlées et peuvent réduire la viabilité."
      },
      {
        "content": "Dans ce cadre, la congélation n’entraîne jamais de stress cellulaire.",
        "correct": false,
        "explanation": "Incorrect. La cryoconservation ralentit fortement les processus biologiques et permet de constituer des stocks. Des cryoprotecteurs comme le DMSO limitent les dommages liés à la glace ; la congélation et la décongélation doivent être contrôlées et peuvent réduire la viabilité."
      },
      {
        "content": "Une congélation contrôlée améliore souvent la survie après décongélation.",
        "correct": true,
        "explanation": "Exact. La cryoconservation ralentit fortement les processus biologiques et permet de constituer des stocks. Des cryoprotecteurs comme le DMSO limitent les dommages liés à la glace ; la congélation et la décongélation doivent être contrôlées et peuvent réduire la viabilité."
      }
    ],
    "explanation": "La cryoconservation ralentit fortement les processus biologiques et permet de constituer des stocks. Des cryoprotecteurs comme le DMSO limitent les dommages liés à la glace ; la congélation et la décongélation doivent être contrôlées et peuvent réduire la viabilité."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Dans ce contexte, dans le cadre de « Principes de culture cellulaire », identifiez l’affirmation correcte.",
    "choices": [
      {
        "content": "Une cellule adhérente ne peut jamais être cultivée sur un support artificiel.",
        "correct": false,
        "explanation": "Incorrect. La culture cellulaire maintient ou multiplie des cellules hors de l’organisme dans un environnement contrôlé. Le milieu fournit nutriments, ions et facteurs adaptés ; température, pH, gaz et asepsie sont ajustés au type cellulaire."
      },
      {
        "content": "Dans ce cadre, certaines cellules nécessitent des facteurs de croissance ou du sérum pour proliférer.",
        "correct": true,
        "explanation": "Exact. La culture cellulaire maintient ou multiplie des cellules hors de l’organisme dans un environnement contrôlé. Le milieu fournit nutriments, ions et facteurs adaptés ; température, pH, gaz et asepsie sont ajustés au type cellulaire."
      },
      {
        "content": "Une culture cellulaire reproduit nécessairement toutes les propriétés d’un tissu intact.",
        "correct": false,
        "explanation": "Incorrect. La culture cellulaire maintient ou multiplie des cellules hors de l’organisme dans un environnement contrôlé. Le milieu fournit nutriments, ions et facteurs adaptés ; température, pH, gaz et asepsie sont ajustés au type cellulaire."
      },
      {
        "content": "Les conditions physicochimiques du milieu n’influencent pas la survie cellulaire.",
        "correct": false,
        "explanation": "Incorrect. La culture cellulaire maintient ou multiplie des cellules hors de l’organisme dans un environnement contrôlé. Le milieu fournit nutriments, ions et facteurs adaptés ; température, pH, gaz et asepsie sont ajustés au type cellulaire."
      },
      {
        "content": "Le contrôle de la contamination est inutile en culture cellulaire.",
        "correct": false,
        "explanation": "Incorrect. La culture cellulaire maintient ou multiplie des cellules hors de l’organisme dans un environnement contrôlé. Le milieu fournit nutriments, ions et facteurs adaptés ; température, pH, gaz et asepsie sont ajustés au type cellulaire."
      }
    ],
    "explanation": "La culture cellulaire maintient ou multiplie des cellules hors de l’organisme dans un environnement contrôlé. Le milieu fournit nutriments, ions et facteurs adaptés ; température, pH, gaz et asepsie sont ajustés au type cellulaire."
  },
  {
    "order": 44,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles affirmations décrivent correctement « Incubation et environnement de culture » ?",
    "choices": [
      {
        "content": "Dans ce cadre, le CO2 contribue à l’équilibre du pH dans les milieux utilisant le système bicarbonate.",
        "correct": true,
        "explanation": "Exact. Pour de nombreuses cellules humaines, 37 °C et environ 5 % de CO2 sont des conditions courantes lorsque le milieu utilise un tampon bicarbonate. Une atmosphère humide limite l’évaporation, mais les paramètres varient selon le système biologique."
      },
      {
        "content": "Une forte humidité de l’incubateur limite l’évaporation du milieu.",
        "correct": true,
        "explanation": "Exact. Pour de nombreuses cellules humaines, 37 °C et environ 5 % de CO2 sont des conditions courantes lorsque le milieu utilise un tampon bicarbonate. Une atmosphère humide limite l’évaporation, mais les paramètres varient selon le système biologique."
      },
      {
        "content": "Une variation de température ou de pH peut modifier le comportement des cellules.",
        "correct": true,
        "explanation": "Exact. Pour de nombreuses cellules humaines, 37 °C et environ 5 % de CO2 sont des conditions courantes lorsque le milieu utilise un tampon bicarbonate. Une atmosphère humide limite l’évaporation, mais les paramètres varient selon le système biologique."
      },
      {
        "content": "Les besoins en CO2 dépendent de la composition du milieu utilisé.",
        "correct": true,
        "explanation": "Exact. Pour de nombreuses cellules humaines, 37 °C et environ 5 % de CO2 sont des conditions courantes lorsque le milieu utilise un tampon bicarbonate. Une atmosphère humide limite l’évaporation, mais les paramètres varient selon le système biologique."
      },
      {
        "content": "Dans ce cadre, la température n’influence pas la vitesse des réactions cellulaires.",
        "correct": false,
        "explanation": "Incorrect. Pour de nombreuses cellules humaines, 37 °C et environ 5 % de CO2 sont des conditions courantes lorsque le milieu utilise un tampon bicarbonate. Une atmosphère humide limite l’évaporation, mais les paramètres varient selon le système biologique."
      }
    ],
    "explanation": "Pour de nombreuses cellules humaines, 37 °C et environ 5 % de CO2 sont des conditions courantes lorsque le milieu utilise un tampon bicarbonate. Une atmosphère humide limite l’évaporation, mais les paramètres varient selon le système biologique."
  }
];
