import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 – Chimie générale – Chapitre 1.4 – Synthèse */
export const UE14_CH4_SYNTHESIS_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare le méthane $\\ce{CH4}$, le chlorométhane $\\ce{CH3Cl}$ et le méthanol $\\ce{CH3OH}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le méthanol ne possède aucune force de dispersion.",
        "correct": false,
        "explanation": "La dispersion est universelle."
      },
      {
        "content": "Le méthane présente principalement des forces de dispersion.",
        "correct": true,
        "explanation": "Il est globalement apolaire."
      },
      {
        "content": "Le méthanol peut former des liaisons hydrogène.",
        "correct": true,
        "explanation": "Son groupe O–H est donneur et son oxygène accepteur."
      },
      {
        "content": "Le chlorométhane possède des interactions dipôle-dipôle en plus de la dispersion.",
        "correct": true,
        "explanation": "Il possède un dipôle permanent."
      },
      {
        "content": "Le méthane forme un réseau classique de liaisons hydrogène.",
        "correct": false,
        "explanation": "Il ne possède pas de donneur classique."
      }
    ],
    "explanation": "Les interactions dominantes s'enrichissent progressivement de CH4 à CH3Cl puis CH3OH."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Une molécule d'eau peut, dans une organisation idéale, donner deux liaisons hydrogène par ses hydrogènes et en accepter deux par ses doublets. À combien de liaisons hydrogène peut-elle ainsi participer au maximum dans ce schéma ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "Deux rôles donneurs et deux rôles accepteurs donnent jusqu'à quatre liaisons hydrogène autour d'une molécule."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux paires capables d'établir directement une liaison hydrogène classique entre elles.",
    "choices": [
      {
        "content": "Deux molécules de tétrachlorométhane.",
        "correct": false,
        "explanation": "Pas de donneur de liaison hydrogène."
      },
      {
        "content": "Deux molécules d'ammoniac.",
        "correct": true,
        "explanation": "N–H peut être donneur et le doublet de N accepteur."
      },
      {
        "content": "Deux molécules d'éthène.",
        "correct": false,
        "explanation": "Pas de groupe donneur X–H classique."
      },
      {
        "content": "Deux molécules de méthane.",
        "correct": false,
        "explanation": "Aucun donneur ni accepteur classique."
      },
      {
        "content": "Méthanol et eau.",
        "correct": true,
        "explanation": "Ils possèdent donneurs O–H et accepteurs oxygénés."
      }
    ],
    "explanation": "Une liaison hydrogène classique requiert un donneur X–H et un accepteur riche en électrons."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le cis-1,2-dichloroéthène est plus polaire que l'isomère trans idéal. Quelles conséquences sont plausibles ?",
    "choices": [
      {
        "content": "La différence de polarité implique une différence du nombre d'atomes.",
        "correct": false,
        "explanation": "Elle résulte de l'arrangement spatial."
      },
      {
        "content": "La géométrie moléculaire peut donc influencer une propriété macroscopique.",
        "correct": true,
        "explanation": "C'est un exemple direct."
      },
      {
        "content": "Les interactions dipôle-dipôle sont plus importantes dans l'isomère cis.",
        "correct": true,
        "explanation": "Son dipôle permanent est plus élevé."
      },
      {
        "content": "Le trans doit posséder une formule brute différente.",
        "correct": false,
        "explanation": "Les deux isomères ont la même formule brute."
      },
      {
        "content": "Cette différence peut contribuer à une température d'ébullition différente.",
        "correct": true,
        "explanation": "La cohésion du liquide change."
      }
    ],
    "explanation": "La polarité constitue un lien entre structure moléculaire et propriétés physiques."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'hydratation des ions $\\ce{Na+}$ et $\\ce{Cl-}$ dans l'eau, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'oxygène de l'eau s'oriente préférentiellement vers $\\ce{Na+}$.",
        "correct": true,
        "explanation": "L'oxygène porte une charge partielle négative."
      },
      {
        "content": "Les interactions ion-dipôle contribuent à stabiliser les ions dispersés.",
        "correct": true,
        "explanation": "La solvatation favorise la dissolution."
      },
      {
        "content": "L'eau ne peut interagir avec un ion car elle est neutre.",
        "correct": false,
        "explanation": "Son dipôle permanent permet une forte interaction."
      },
      {
        "content": "L'hydratation transforme nécessairement les ions en nouveaux éléments chimiques.",
        "correct": false,
        "explanation": "Aucune transmutation n'a lieu."
      },
      {
        "content": "Les hydrogènes de l'eau s'orientent préférentiellement vers $\\ce{Cl-}$.",
        "correct": true,
        "explanation": "Ils portent des charges partielles positives."
      }
    ],
    "explanation": "La couche d'hydratation est une organisation orientée de molécules d'eau autour des charges."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les membranes biologiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Chaque paire de chaînes est reliée par une liaison covalente permanente.",
        "correct": false,
        "explanation": "La cohésion repose largement sur des interactions non covalentes."
      },
      {
        "content": "Les chaînes hydrocarbonées des lipides interagissent notamment par forces de dispersion.",
        "correct": true,
        "explanation": "Ces interactions s'additionnent dans la région hydrophobe."
      },
      {
        "content": "Une membrane ne contient aucune interaction électrostatique ou liaison hydrogène.",
        "correct": false,
        "explanation": "Les têtes polaires et protéines peuvent en former."
      },
      {
        "content": "L'effet hydrophobe contribue à l'auto-assemblage des lipides en milieu aqueux.",
        "correct": true,
        "explanation": "La minimisation du contact entre groupes apolaires et eau favorise l'assemblage."
      },
      {
        "content": "Les interactions non covalentes permettent une membrane cohésive mais dynamique.",
        "correct": true,
        "explanation": "Les lipides restent mobiles."
      }
    ],
    "explanation": "La membrane résulte d'un équilibre de nombreuses interactions faibles et de l'effet hydrophobe."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les protéines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les liaisons hydrogène participent à la stabilisation des hélices alpha et feuillets bêta.",
        "correct": true,
        "explanation": "Elles se forment notamment entre groupes du squelette peptidique."
      },
      {
        "content": "Les forces de dispersion contribuent aux contacts serrés entre groupes apolaires.",
        "correct": true,
        "explanation": "Elles s'additionnent dans le cœur protéique."
      },
      {
        "content": "Les interactions entre groupes chargés peuvent contribuer à la structure tertiaire.",
        "correct": true,
        "explanation": "Des interactions ioniques peuvent se former."
      },
      {
        "content": "Une liaison hydrogène individuelle est irréversible.",
        "correct": false,
        "explanation": "Elle est dynamique et réversible."
      },
      {
        "content": "La structure tridimensionnelle dépend exclusivement des liaisons peptidiques covalentes.",
        "correct": false,
        "explanation": "Les interactions non covalentes sont essentielles."
      }
    ],
    "explanation": "La structure des protéines émerge d'une combinaison de liaisons covalentes et de nombreuses interactions non covalentes."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'ADN double brin, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La stabilité de la double hélice dépend d'un seul type d'interaction.",
        "correct": false,
        "explanation": "Plusieurs contributions interviennent."
      },
      {
        "content": "Les deux brins sont reliés uniquement par des liaisons covalentes entre bases.",
        "correct": false,
        "explanation": "L'appariement est non covalent."
      },
      {
        "content": "Les deux brins peuvent être séparés sans rompre les liaisons covalentes du squelette dans une dénaturation ordinaire.",
        "correct": true,
        "explanation": "La séparation concerne principalement les interactions entre brins."
      },
      {
        "content": "L'empilement des bases contribue aussi fortement à la stabilité.",
        "correct": true,
        "explanation": "Les interactions de dispersion et l'effet hydrophobe jouent un rôle."
      },
      {
        "content": "Les liaisons hydrogène participent à l'appariement des bases complémentaires.",
        "correct": true,
        "explanation": "Elles contribuent à la spécificité de reconnaissance."
      }
    ],
    "explanation": "L'ADN illustre l'action combinée de liaisons hydrogène, empilement aromatique et environnement aqueux."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Pourquoi l'hexane est-il très peu miscible à l'eau ?",
    "choices": [
      {
        "content": "Il est ionique et repousse toutes les molécules d'eau.",
        "correct": false,
        "explanation": "L'hexane est une molécule apolaire neutre."
      },
      {
        "content": "Il est apolaire et ne compense pas favorablement la rupture du réseau de liaisons hydrogène de l'eau.",
        "correct": true,
        "explanation": "Les interactions hexane-eau sont moins favorables que les interactions eau-eau."
      },
      {
        "content": "Il possède une charge positive permanente.",
        "correct": false,
        "explanation": "Il est neutre."
      },
      {
        "content": "Il forme des liaisons hydrogène extrêmement fortes avec l'eau.",
        "correct": false,
        "explanation": "Il ne possède pas de donneur/accepteur classique."
      },
      {
        "content": "Sa faible miscibilité exige la rupture de ses liaisons C–C.",
        "correct": false,
        "explanation": "Les liaisons covalentes restent intactes."
      }
    ],
    "explanation": "L'effet hydrophobe résulte notamment du coût d'organisation de l'eau autour de surfaces apolaires."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare eau, éthanol et éthane. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La présence du groupe OH n'a aucune influence sur les propriétés physiques.",
        "correct": false,
        "explanation": "Elle change fortement polarité et cohésion."
      },
      {
        "content": "L'eau et l'éthanol peuvent former des liaisons hydrogène entre eux.",
        "correct": true,
        "explanation": "Les deux possèdent donneurs et accepteurs."
      },
      {
        "content": "L'éthane est apolaire et interagit surtout par dispersion.",
        "correct": true,
        "explanation": "Il ne possède pas de groupe fortement polaire."
      },
      {
        "content": "L'éthanol possède à la fois une partie polaire et une petite partie apolaire.",
        "correct": true,
        "explanation": "Le groupe OH et le groupe éthyle coexistent."
      },
      {
        "content": "L'éthane est plus miscible à l'eau que l'éthanol grâce à de fortes liaisons hydrogène.",
        "correct": false,
        "explanation": "L'éthane ne forme pas de liaison hydrogène classique."
      }
    ],
    "explanation": "La comparaison relie structure fonctionnelle, interactions et miscibilité."
  }
];

export const UE14_CH4_SYNTHESIS_MASTER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 21,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les forces de dispersion de London, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elles dépendent de la distance et de la géométrie de contact.",
        "correct": true,
        "explanation": "Des molécules proches et bien appariées interagissent davantage."
      },
      {
        "content": "Elles nécessitent un dipôle permanent.",
        "correct": false,
        "explanation": "Elles existent sans dipôle permanent."
      },
      {
        "content": "Elles sont présentes même entre molécules globalement apolaires.",
        "correct": true,
        "explanation": "Elles proviennent de fluctuations électroniques."
      },
      {
        "content": "Elles tendent à croître avec la polarisabilité.",
        "correct": true,
        "explanation": "Un nuage plus déformable produit des dipôles instantanés plus importants."
      },
      {
        "content": "Elles deviennent exactement nulles pour les grosses molécules.",
        "correct": false,
        "explanation": "Elles deviennent souvent plus importantes."
      }
    ],
    "explanation": "La dispersion est universelle et particulièrement importante pour les grandes surfaces apolaires."
  },
  {
    "order": 22,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare n-pentane et néopentane. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le n-pentane peut donc présenter des forces de dispersion cumulées plus importantes.",
        "correct": true,
        "explanation": "Cela contribue à une température d'ébullition plus élevée."
      },
      {
        "content": "La formule brute différente explique les propriétés différentes.",
        "correct": false,
        "explanation": "Ils ont la même formule brute."
      },
      {
        "content": "Le n-pentane offre une plus grande surface de contact dans de nombreuses orientations.",
        "correct": true,
        "explanation": "Sa forme allongée favorise des contacts étendus."
      },
      {
        "content": "Les forces de dispersion n'existent que dans le néopentane.",
        "correct": false,
        "explanation": "Elles existent dans les deux."
      },
      {
        "content": "La ramification compacte généralement la molécule.",
        "correct": true,
        "explanation": "Le néopentane est plus sphérique."
      }
    ],
    "explanation": "Les isomères montrent que forme et surface de contact comptent en plus de la masse molaire."
  },
  {
    "order": 23,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les interactions dipôle-dipôle, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elles exigent une charge ionique entière.",
        "correct": false,
        "explanation": "Des charges partielles suffisent."
      },
      {
        "content": "Elles sont toujours plus fortes qu'une interaction ion-ion.",
        "correct": false,
        "explanation": "Les interactions entre charges entières sont généralement plus intenses à distance comparable."
      },
      {
        "content": "Elles apparaissent entre espèces possédant un dipôle permanent.",
        "correct": true,
        "explanation": "Les orientations favorables rapprochent les pôles opposés."
      },
      {
        "content": "Elles s'ajoutent aux forces de dispersion.",
        "correct": true,
        "explanation": "Une molécule polaire subit aussi la dispersion."
      },
      {
        "content": "Leur énergie moyenne dépend de l'orientation et de l'agitation thermique.",
        "correct": true,
        "explanation": "Les molécules tournent dans un liquide."
      }
    ],
    "explanation": "Les catégories d'interactions ne sont pas exclusives : plusieurs contributions coexistent."
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les liaisons hydrogène, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elles sont généralement plus fortes qu'une interaction de dispersion isolée entre petites molécules comparables.",
        "correct": true,
        "explanation": "Leur caractère électrostatique et directionnel est plus marqué."
      },
      {
        "content": "Elles restent beaucoup plus faibles qu'une liaison covalente O–H ordinaire.",
        "correct": true,
        "explanation": "Il ne faut pas confondre interaction H···O et liaison O–H donneuse."
      },
      {
        "content": "Elles nécessitent toujours deux molécules différentes.",
        "correct": false,
        "explanation": "Elles peuvent être intramoléculaires."
      },
      {
        "content": "Une valeur énergétique unique s'applique à toutes les liaisons hydrogène.",
        "correct": false,
        "explanation": "Leur énergie dépend des partenaires et de l'environnement."
      },
      {
        "content": "Elles sont directionnelles.",
        "correct": true,
        "explanation": "Une géométrie donneur-H···accepteur favorable renforce l'interaction."
      }
    ],
    "explanation": "Il vaut mieux raisonner qualitativement que retenir un rapport énergétique fixe valable dans toutes les situations."
  },
  {
    "order": 25,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une molécule possède un groupe O–H et un carbonyle C=O convenablement rapprochés. Quelles conséquences d'une liaison hydrogène intramoléculaire sont plausibles ?",
    "choices": [
      {
        "content": "Une nouvelle liaison covalente O–O doit se former.",
        "correct": false,
        "explanation": "L'interaction reste non covalente."
      },
      {
        "content": "Les groupes polaires peuvent devenir moins accessibles à l'eau.",
        "correct": true,
        "explanation": "Une interaction interne peut masquer partiellement leurs capacités d'interaction."
      },
      {
        "content": "La solubilité ou la conformation peuvent être modifiées.",
        "correct": true,
        "explanation": "Les propriétés globales dépendent de l'état de solvatation et de la géométrie."
      },
      {
        "content": "Une conformation particulière peut être stabilisée.",
        "correct": true,
        "explanation": "L'interaction peut favoriser une géométrie repliée."
      },
      {
        "content": "La molécule devient nécessairement un ion.",
        "correct": false,
        "explanation": "Une liaison hydrogène intramoléculaire n'impose pas une charge entière."
      }
    ],
    "explanation": "Les liaisons hydrogène intramoléculaires peuvent influencer conformation, polarité apparente et solvatation."
  },
  {
    "order": 26,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant température d'ébullition et interactions intermoléculaires, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La vaporisation ordinaire exige la rupture de toutes les liaisons covalentes.",
        "correct": false,
        "explanation": "Elle rompt surtout les interactions intermoléculaires."
      },
      {
        "content": "La température d'ébullition dépend uniquement de la masse molaire.",
        "correct": false,
        "explanation": "La nature des interactions est déterminante."
      },
      {
        "content": "Une cohésion intermoléculaire plus forte tend à augmenter l'énergie nécessaire à la vaporisation.",
        "correct": true,
        "explanation": "Il faut davantage d'énergie pour séparer les molécules."
      },
      {
        "content": "Les liaisons hydrogène peuvent augmenter fortement la température d'ébullition.",
        "correct": true,
        "explanation": "Elles renforcent la cohésion du liquide."
      },
      {
        "content": "La dispersion peut devenir importante pour les molécules lourdes et polarisables.",
        "correct": true,
        "explanation": "Elle ne doit pas être négligée."
      }
    ],
    "explanation": "Les propriétés de changement d'état reflètent la somme des interactions dans le liquide."
  },
  {
    "order": 27,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant l'effet hydrophobe en milieu aqueux, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il favorise le regroupement de surfaces apolaires en présence d'eau.",
        "correct": true,
        "explanation": "Cela réduit l'exposition de ces surfaces au réseau aqueux."
      },
      {
        "content": "Il signifie que les groupes apolaires se repoussent directement par une force fondamentale spécifique.",
        "correct": false,
        "explanation": "Le phénomène résulte surtout de l'environnement aqueux et des interactions globales."
      },
      {
        "content": "Il contribue à l'organisation des membranes et au repliement des protéines.",
        "correct": true,
        "explanation": "Les groupes apolaires tendent à être enfouis ou regroupés."
      },
      {
        "content": "Il supprime toutes les forces de dispersion entre groupes apolaires.",
        "correct": false,
        "explanation": "Ces forces contribuent au contraire aux contacts serrés."
      },
      {
        "content": "Il ne correspond pas à une liaison chimique unique particulière.",
        "correct": true,
        "explanation": "C'est un effet collectif lié au solvant et aux interactions."
      }
    ],
    "explanation": "L'effet hydrophobe est un phénomène collectif distinct d'une simple attraction de paire."
  },
  {
    "order": 28,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les interactions qui stabilisent une protéine globulaire, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une interaction non covalente faible ne peut avoir aucun effet cumulatif.",
        "correct": false,
        "explanation": "Leur multiplicité est fondamentale."
      },
      {
        "content": "Les contacts hydrophobes et la dispersion contribuent au cœur de la protéine.",
        "correct": true,
        "explanation": "Ils stabilisent l'empilement de groupes apolaires."
      },
      {
        "content": "Une protéine n'est stabilisée que par ses liaisons peptidiques.",
        "correct": false,
        "explanation": "Ces liaisons définissent la chaîne primaire, pas toute la structure tridimensionnelle."
      },
      {
        "content": "Les interactions ioniques entre chaînes latérales chargées peuvent intervenir.",
        "correct": true,
        "explanation": "Des ponts salins sont possibles."
      },
      {
        "content": "Les liaisons hydrogène contribuent à l'organisation locale.",
        "correct": true,
        "explanation": "Elles stabilisent notamment le squelette et les chaînes latérales."
      }
    ],
    "explanation": "Le repliement protéique résulte d'un équilibre de nombreuses contributions."
  },
  {
    "order": 29,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant l'hydratation d'un ion en solution aqueuse, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les interactions ion-dipôle stabilisent l'ion solvatisé.",
        "correct": true,
        "explanation": "Elles compensent partiellement la séparation du réseau ionique."
      },
      {
        "content": "Un anion attire préférentiellement le côté oxygène $\\delta^-$ de l'eau.",
        "correct": false,
        "explanation": "Il attire plutôt les hydrogènes $\\delta^+$."
      },
      {
        "content": "Les molécules d'eau s'orientent selon le signe de la charge de l'ion.",
        "correct": true,
        "explanation": "Le pôle opposé est dirigé vers l'ion."
      },
      {
        "content": "La taille et la charge de l'ion influencent l'intensité de l'hydratation.",
        "correct": true,
        "explanation": "Une forte densité de charge renforce l'interaction."
      },
      {
        "content": "L'hydratation implique nécessairement une réaction covalente irréversible avec l'eau.",
        "correct": false,
        "explanation": "Une couche de solvatation peut rester non covalente."
      }
    ],
    "explanation": "La densité de charge et la polarité du solvant gouvernent fortement l'hydratation ionique."
  },
  {
    "order": 30,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare méthanol, diméthyléther et propane. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le méthanol peut donner et accepter des liaisons hydrogène.",
        "correct": true,
        "explanation": "Il possède O–H et des doublets sur O."
      },
      {
        "content": "Le diméthyléther peut former entre ses propres molécules un réseau de liaisons hydrogène aussi riche que le méthanol.",
        "correct": false,
        "explanation": "Il ne possède pas de donneur O–H."
      },
      {
        "content": "Le propane est plus polaire que le méthanol.",
        "correct": false,
        "explanation": "Le méthanol est nettement plus polaire."
      },
      {
        "content": "Le propane interagit principalement par dispersion.",
        "correct": true,
        "explanation": "Il est apolaire."
      },
      {
        "content": "Le diméthyléther peut accepter une liaison hydrogène venant de l'eau.",
        "correct": true,
        "explanation": "Son oxygène possède des doublets."
      }
    ],
    "explanation": "Donneur et accepteur doivent être distingués : posséder un oxygène n'implique pas automatiquement la capacité de donner une liaison hydrogène."
  },
  {
    "order": 65,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux affirmations correctes concernant l'eau liquide.",
    "choices": [
      {
        "content": "Chaque molécule conserve en permanence exactement quatre liaisons hydrogène.",
        "correct": false,
        "explanation": "Le nombre et les partenaires fluctuent."
      },
      {
        "content": "La cohésion de l'eau repose uniquement sur des liaisons covalentes entre molécules.",
        "correct": false,
        "explanation": "Les molécules sont reliées par des interactions non covalentes."
      },
      {
        "content": "La polarité de l'eau est nulle.",
        "correct": false,
        "explanation": "La molécule possède un dipôle permanent."
      },
      {
        "content": "Les forces de dispersion restent également présentes entre les molécules.",
        "correct": true,
        "explanation": "La dispersion existe entre toutes les espèces polarisables."
      },
      {
        "content": "Les liaisons hydrogène y forment un réseau dynamique qui se réorganise continuellement.",
        "correct": true,
        "explanation": "Les partenaires changent rapidement à température ambiante."
      }
    ],
    "explanation": "L'eau est un liquide dynamique où plusieurs contributions intermoléculaires coexistent."
  },
  {
    "order": 66,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Dans un modèle simplifié où une interaction attractive varie comme $1/d^6$, si la distance est doublée, par quel facteur l'intensité est-elle multipliée ?",
    "answer": {
      "type": "number",
      "value": 0.015625,
      "tolerance": 0.0002
    },
    "explanation": "Avec $I\\propto1/d^6$, remplacer $d$ par $2d$ multiplie l'intensité par $1/2^6=1/64\\approx0{,}0156$."
  }
];
