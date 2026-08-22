import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 – Chimie générale – Chapitre 1.4 – Section B – Interactions entre molécules */
export const UE14_CH4_INTERACTIONS_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 11,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les interactions intermoléculaires, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elles sont généralement plus faibles qu'une liaison covalente individuelle.",
        "correct": true,
        "explanation": "Les énergies caractéristiques sont plus faibles, même si leur cumul peut être important."
      },
      {
        "content": "Elles modifient obligatoirement la connectivité covalente de chaque molécule.",
        "correct": false,
        "explanation": "Une interaction non covalente n'implique pas normalement de réarrangement covalent."
      },
      {
        "content": "Elles contribuent à la cohésion de la matière condensée.",
        "correct": true,
        "explanation": "Liquides et solides moléculaires sont stabilisés par ces interactions."
      },
      {
        "content": "Elles exigent toujours des charges ioniques entières.",
        "correct": false,
        "explanation": "Les charges partielles et dipôles instantanés suffisent."
      },
      {
        "content": "Elles peuvent exister entre molécules neutres.",
        "correct": true,
        "explanation": "Dispersion, dipôle-dipôle et liaison hydrogène en sont des exemples."
      }
    ],
    "explanation": "Les interactions intermoléculaires expliquent de nombreuses propriétés physiques sans changer l'identité covalente des molécules."
  },
  {
    "order": 12,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les forces de dispersion de London, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elles peuvent induire un dipôle dans une espèce voisine.",
        "correct": true,
        "explanation": "Le dipôle instantané polarise le nuage voisin."
      },
      {
        "content": "Elles existent en principe entre toutes les espèces polarisables.",
        "correct": true,
        "explanation": "Elles ne sont pas réservées aux molécules apolaires."
      },
      {
        "content": "Elles sont des liaisons covalentes temporaires.",
        "correct": false,
        "explanation": "Ce sont des interactions non covalentes."
      },
      {
        "content": "Elles résultent de fluctuations instantanées de la distribution électronique.",
        "correct": true,
        "explanation": "Un dipôle instantané peut apparaître même dans une molécule apolaire."
      },
      {
        "content": "Elles nécessitent un dipôle permanent initial.",
        "correct": false,
        "explanation": "Elles existent justement sans dipôle permanent."
      }
    ],
    "explanation": "La dispersion est universelle et devient plus importante lorsque la polarisabilité augmente."
  },
  {
    "order": 13,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux facteurs qui tendent à renforcer les forces de dispersion entre molécules comparables.",
    "choices": [
      {
        "content": "Une plus grande polarisabilité électronique.",
        "correct": true,
        "explanation": "Un nuage électronique facilement déformable génère des dipôles instantanés plus importants."
      },
      {
        "content": "La suppression totale du nuage électronique.",
        "correct": false,
        "explanation": "La dispersion dépend précisément du nuage électronique."
      },
      {
        "content": "Une diminution systématique du nombre d'électrons.",
        "correct": false,
        "explanation": "Moins d'électrons tend souvent à diminuer la polarisabilité."
      },
      {
        "content": "Une plus grande surface de contact entre les molécules.",
        "correct": true,
        "explanation": "Davantage de zones peuvent interagir simultanément."
      },
      {
        "content": "Une séparation infinie entre les molécules.",
        "correct": false,
        "explanation": "Les interactions décroissent fortement avec la distance."
      }
    ],
    "explanation": "Polarisabilité et surface de contact sont deux déterminants majeurs de la dispersion."
  },
  {
    "order": 14,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle interaction est particulièrement caractéristique de deux molécules possédant des dipôles permanents ?",
    "choices": [
      {
        "content": "Une liaison métallique.",
        "correct": false,
        "explanation": "Elle concerne un réseau métallique."
      },
      {
        "content": "Une liaison covalente obligatoire.",
        "correct": false,
        "explanation": "Les molécules restent distinctes."
      },
      {
        "content": "Une transmutation isotopique.",
        "correct": false,
        "explanation": "Aucune modification du noyau."
      },
      {
        "content": "Une interaction nucléaire forte.",
        "correct": false,
        "explanation": "Elle n'intervient pas à l'échelle moléculaire."
      },
      {
        "content": "Une interaction dipôle-dipôle.",
        "correct": true,
        "explanation": "Les orientations favorables rapprochent les pôles de signes opposés."
      }
    ],
    "explanation": "Les interactions dipôle-dipôle, ou interactions de Keesom, s'ajoutent aux forces de dispersion dans les espèces polaires."
  },
  {
    "order": 15,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant une liaison hydrogène classique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un atome accepteur voisin possède une zone riche en électrons, souvent un doublet non liant.",
        "correct": true,
        "explanation": "Cette zone attire l'hydrogène partiellement positif."
      },
      {
        "content": "Elle peut être intermoléculaire ou intramoléculaire.",
        "correct": true,
        "explanation": "Les deux situations sont possibles."
      },
      {
        "content": "Toute liaison C–H est un donneur classique équivalent à O–H.",
        "correct": false,
        "explanation": "Les liaisons C–H ordinaires ne sont pas des donneurs classiques dans ce niveau de description."
      },
      {
        "content": "Un hydrogène est lié covalemment à un atome très électronégatif, typiquement O, N ou F.",
        "correct": true,
        "explanation": "La liaison X–H est fortement polarisée."
      },
      {
        "content": "Elle est une liaison covalente ordinaire identique à O–H.",
        "correct": false,
        "explanation": "C'est une interaction non covalente distincte de la liaison donneur–H."
      }
    ],
    "explanation": "Une liaison hydrogène met en jeu un donneur X–H et un accepteur électronégatif."
  },
  {
    "order": 16,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans un dimère de molécules d'eau, quel motif correspond à une liaison hydrogène ?",
    "choices": [
      {
        "content": "Une liaison O=O entre les deux molécules.",
        "correct": false,
        "explanation": "Aucune double liaison ne se forme."
      },
      {
        "content": "La liaison covalente O–H à l'intérieur d'une seule molécule.",
        "correct": false,
        "explanation": "C'est une liaison intramoléculaire covalente."
      },
      {
        "content": "Une attraction entre deux hydrogènes partiellement positifs.",
        "correct": false,
        "explanation": "Des charges de même signe se repoussent."
      },
      {
        "content": "L'attraction entre l'hydrogène d'une liaison O–H d'une molécule et l'oxygène d'une autre molécule.",
        "correct": true,
        "explanation": "L'hydrogène donneur interagit avec un doublet de l'oxygène accepteur."
      },
      {
        "content": "Un transfert permanent d'un proton à chaque collision.",
        "correct": false,
        "explanation": "Ce n'est pas nécessaire à la liaison hydrogène."
      }
    ],
    "explanation": "La liaison hydrogène relie des molécules sans créer une nouvelle liaison covalente O–H."
  },
  {
    "order": 17,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les propriétés de l'eau liquide liées aux liaisons hydrogène, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les liaisons hydrogène contribuent à la cohésion du liquide.",
        "correct": true,
        "explanation": "Elles augmentent l'attraction entre molécules."
      },
      {
        "content": "Un réseau dynamique de liaisons hydrogène se forme et se rompt continuellement.",
        "correct": true,
        "explanation": "Les interactions sont transitoires mais nombreuses."
      },
      {
        "content": "Elles contribuent à la température d'ébullition relativement élevée de l'eau.",
        "correct": true,
        "explanation": "Il faut fournir de l'énergie pour séparer les molécules."
      },
      {
        "content": "L'eau liquide ne contient aucune force de dispersion.",
        "correct": false,
        "explanation": "La dispersion existe aussi, même si les liaisons hydrogène sont très importantes."
      },
      {
        "content": "Chaque molécule conserve exactement les mêmes quatre liaisons hydrogène en permanence.",
        "correct": false,
        "explanation": "Le réseau liquide fluctue en permanence."
      }
    ],
    "explanation": "Dans l'eau liquide, plusieurs types d'interactions coexistent ; les liaisons hydrogène jouent un rôle particulièrement marqué."
  },
  {
    "order": 18,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les interactions dans les chaînes hydrocarbonées, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les interactions de dispersion sont des liaisons hydrogène.",
        "correct": false,
        "explanation": "Ce sont deux mécanismes différents."
      },
      {
        "content": "La proximité des chaînes peut influencer la cohésion d'un assemblage lipidique.",
        "correct": true,
        "explanation": "Les contacts entre chaînes contribuent à l'organisation des régions hydrophobes."
      },
      {
        "content": "Le grand nombre de contacts peut produire un effet cumulatif notable.",
        "correct": true,
        "explanation": "Des interactions faibles individuellement peuvent devenir importantes collectivement."
      },
      {
        "content": "Une chaîne hydrocarbonée apolaire ne subit aucune interaction intermoléculaire.",
        "correct": false,
        "explanation": "La dispersion est toujours présente."
      },
      {
        "content": "Les forces de dispersion sont importantes entre segments apolaires proches.",
        "correct": true,
        "explanation": "Les nuages électroniques polarisables interagissent."
      }
    ],
    "explanation": "Les membranes illustrent l'importance cumulative de nombreuses interactions faibles entre chaînes."
  },
  {
    "order": 19,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Pourquoi un alcool à courte chaîne possède-t-il souvent une température d'ébullition plus élevée que l'alcane de masse molaire voisine ?",
    "choices": [
      {
        "content": "Les molécules d'alcool contiennent moins d'électrons.",
        "correct": false,
        "explanation": "Ce n'est pas le mécanisme pertinent."
      },
      {
        "content": "L'alcool possède nécessairement des liaisons covalentes plus faibles à l'intérieur de la molécule.",
        "correct": false,
        "explanation": "La vaporisation ne repose pas sur leur rupture."
      },
      {
        "content": "L'alcane est ionique.",
        "correct": false,
        "explanation": "Un alcane est moléculaire et apolaire."
      },
      {
        "content": "Les molécules d'alcool peuvent former des liaisons hydrogène en plus des forces de dispersion.",
        "correct": true,
        "explanation": "Ces interactions supplémentaires renforcent la cohésion du liquide."
      },
      {
        "content": "La vaporisation transforme l'alcool en ions.",
        "correct": false,
        "explanation": "Il s'agit d'un changement d'état."
      }
    ],
    "explanation": "La température d'ébullition dépend fortement des interactions intermoléculaires."
  },
  {
    "order": 20,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les interactions qui stabilisent les biomolécules, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les liaisons hydrogène peuvent stabiliser des structures secondaires de protéines.",
        "correct": true,
        "explanation": "Elles participent notamment aux hélices et feuillets."
      },
      {
        "content": "Les forces de dispersion contribuent à l'empilement de groupes apolaires rapprochés.",
        "correct": true,
        "explanation": "Elles s'additionnent sur de nombreuses surfaces de contact."
      },
      {
        "content": "Les interactions électrostatiques peuvent contribuer à la structure des protéines.",
        "correct": true,
        "explanation": "Des groupes chargés peuvent s'attirer."
      },
      {
        "content": "La structure d'une protéine est stabilisée uniquement par des liaisons covalentes.",
        "correct": false,
        "explanation": "De nombreuses interactions non covalentes sont essentielles."
      },
      {
        "content": "Les interactions non covalentes sont sans importance biologique parce qu'elles sont faibles individuellement.",
        "correct": false,
        "explanation": "Leur nombre et leur réversibilité sont précisément utiles au vivant."
      }
    ],
    "explanation": "Les structures biologiques reposent souvent sur la somme de nombreuses interactions faibles, directionnelles ou non."
  }
];

export const UE14_CH4_INTERACTIONS_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare le pentane et le néopentane, de même formule brute. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Des forces de dispersion plus importantes peuvent en résulter pour le pentane.",
        "correct": true,
        "explanation": "La surface de contact influence l'intensité cumulée."
      },
      {
        "content": "Les forces de dispersion sont absentes des alcanes.",
        "correct": false,
        "explanation": "Elles sont les interactions dominantes entre alcanes."
      },
      {
        "content": "La ramification peut modifier la température d'ébullition.",
        "correct": true,
        "explanation": "Elle change la surface de contact et donc les interactions."
      },
      {
        "content": "Deux isomères de même formule brute ont nécessairement exactement la même température d'ébullition.",
        "correct": false,
        "explanation": "Leur forme peut modifier les interactions."
      },
      {
        "content": "Le pentane linéaire présente une surface de contact intermoléculaire plus grande.",
        "correct": true,
        "explanation": "Sa forme allongée permet davantage de contacts."
      }
    ],
    "explanation": "La ramification illustre l'effet de la forme moléculaire sur la cohésion intermoléculaire."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare méthane, méthanol et éthane. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'éthane est plus polarisable que le méthane.",
        "correct": true,
        "explanation": "Son nuage électronique est plus grand."
      },
      {
        "content": "Le méthanol peut former des liaisons hydrogène.",
        "correct": true,
        "explanation": "Il possède un groupe O–H donneur et un oxygène accepteur."
      },
      {
        "content": "Le méthane et l'éthane présentent principalement des forces de dispersion.",
        "correct": true,
        "explanation": "Ce sont des hydrocarbures apolaires."
      },
      {
        "content": "Le méthanol ne possède aucune force de dispersion.",
        "correct": false,
        "explanation": "La dispersion est présente dans toutes les molécules."
      },
      {
        "content": "Le méthane forme des liaisons hydrogène classiques aussi fortes que le méthanol.",
        "correct": false,
        "explanation": "Il ne possède pas de donneur classique X–H."
      }
    ],
    "explanation": "Plusieurs interactions peuvent coexister ; on parle d'interaction dominante sans exclure les autres."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'éthanol et l'éther diméthylique, isomères de formule $\\ce{C2H6O}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'éthanol peut donner et accepter des liaisons hydrogène.",
        "correct": true,
        "explanation": "Le groupe O–H est donneur et l'oxygène accepteur."
      },
      {
        "content": "Cette différence peut contribuer à des températures d'ébullition différentes.",
        "correct": true,
        "explanation": "Le réseau intermoléculaire de l'éthanol est plus riche."
      },
      {
        "content": "L'éther diméthylique ne possède aucune interaction avec l'eau.",
        "correct": false,
        "explanation": "Son oxygène peut accepter des liaisons hydrogène de l'eau."
      },
      {
        "content": "Les deux molécules ont nécessairement exactement les mêmes propriétés physiques car elles sont isomères.",
        "correct": false,
        "explanation": "La connectivité modifie les interactions."
      },
      {
        "content": "L'éther diméthylique peut accepter une liaison hydrogène mais ne possède pas de groupe O–H donneur.",
        "correct": true,
        "explanation": "L'oxygène porte des doublets mais aucun H n'y est lié."
      }
    ],
    "explanation": "La présence d'un donneur O–H change profondément le réseau de liaisons hydrogène possible."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les liaisons hydrogène dans l'ADN bicaténaire, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elles impliquent uniquement des atomes de carbone et d'hydrogène.",
        "correct": false,
        "explanation": "N et O jouent des rôles essentiels de donneur/accepteur."
      },
      {
        "content": "Elles sont des liaisons covalentes reliant définitivement les deux brins.",
        "correct": false,
        "explanation": "Ce sont des interactions non covalentes."
      },
      {
        "content": "Elles ne sont pas les seules forces stabilisant la double hélice.",
        "correct": true,
        "explanation": "L'empilement des bases et d'autres interactions contribuent également."
      },
      {
        "content": "Elles sont individuellement réversibles.",
        "correct": true,
        "explanation": "Cette propriété facilite séparation et réassociation des brins."
      },
      {
        "content": "Elles contribuent à la reconnaissance complémentaire des bases.",
        "correct": true,
        "explanation": "La disposition des donneurs et accepteurs est spécifique."
      }
    ],
    "explanation": "La stabilité de l'ADN résulte de plusieurs contributions, dont les liaisons hydrogène et l'empilement des bases."
  },
  {
    "order": 45,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle situation correspond à une liaison hydrogène intramoléculaire ?",
    "choices": [
      {
        "content": "Deux chaînes d'alcane interagissent par dispersion.",
        "correct": false,
        "explanation": "Ce n'est pas une liaison hydrogène."
      },
      {
        "content": "Deux ions Na+ et Cl− s'attirent.",
        "correct": false,
        "explanation": "Il s'agit d'une interaction ionique."
      },
      {
        "content": "Une liaison covalente C–C se forme.",
        "correct": false,
        "explanation": "Une liaison hydrogène n'est pas une nouvelle liaison covalente C–C."
      },
      {
        "content": "Deux molécules d'eau distinctes interagissent par O–H···O.",
        "correct": false,
        "explanation": "C'est une interaction intermoléculaire."
      },
      {
        "content": "Un groupe O–H d'une molécule interagit avec un atome accepteur suffisamment proche de la même molécule.",
        "correct": true,
        "explanation": "L'interaction se forme à l'intérieur d'une seule entité moléculaire."
      }
    ],
    "explanation": "Une liaison hydrogène intramoléculaire peut favoriser certaines conformations et parfois diminuer l'accessibilité des groupes polaires au solvant."
  },
  {
    "order": 46,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant viscosité et interactions intermoléculaires, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Des interactions intermoléculaires plus nombreuses ou plus fortes peuvent augmenter la résistance à l'écoulement.",
        "correct": true,
        "explanation": "Les molécules se déplacent plus difficilement les unes par rapport aux autres."
      },
      {
        "content": "La viscosité dépend aussi de la taille et de la forme des molécules.",
        "correct": true,
        "explanation": "L'enchevêtrement et les contacts jouent un rôle."
      },
      {
        "content": "Des interactions plus fortes rendent toujours tout liquide moins visqueux.",
        "correct": false,
        "explanation": "La tendance générale est plutôt inverse."
      },
      {
        "content": "Un réseau de liaisons hydrogène peut contribuer à une viscosité élevée.",
        "correct": true,
        "explanation": "C'est notamment le cas de polyols."
      },
      {
        "content": "La viscosité est déterminée uniquement par la masse molaire.",
        "correct": false,
        "explanation": "Les interactions et la géométrie sont aussi importantes."
      }
    ],
    "explanation": "La viscosité est une propriété collective sensible aux interactions et à l'architecture moléculaire."
  },
  {
    "order": 47,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi le glycérol $\\ce{HOCH2-CHOH-CH2OH}$ est-il très miscible à l'eau ?",
    "choices": [
      {
        "content": "Il est fortement polaire.",
        "correct": true,
        "explanation": "Les trois groupes hydroxyle dominent son comportement."
      },
      {
        "content": "Ses oxygènes peuvent accepter des liaisons hydrogène.",
        "correct": true,
        "explanation": "Les doublets non liants interagissent avec l'eau."
      },
      {
        "content": "Il est totalement apolaire.",
        "correct": false,
        "explanation": "C'est l'inverse."
      },
      {
        "content": "Sa miscibilité exige la rupture de ses liaisons C–C.",
        "correct": false,
        "explanation": "La dissolution ne rompt pas le squelette covalent."
      },
      {
        "content": "Il possède plusieurs groupes hydroxyle capables de donner des liaisons hydrogène.",
        "correct": true,
        "explanation": "Chaque O–H peut agir comme donneur."
      }
    ],
    "explanation": "Le glycérol illustre la forte affinité de petites molécules polyhydroxylées pour l'eau."
  },
  {
    "order": 48,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'effet de la masse molaire et de la polarisabilité dans une série d'alcanes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La température d'ébullition tend globalement à augmenter dans une série homologue d'alcanes linéaires.",
        "correct": true,
        "explanation": "La cohésion intermoléculaire augmente."
      },
      {
        "content": "Les forces de dispersion tendent à devenir plus importantes lorsque la chaîne s'allonge.",
        "correct": true,
        "explanation": "La polarisabilité et la surface de contact augmentent."
      },
      {
        "content": "La polarisabilité tend généralement à augmenter avec la taille du nuage électronique.",
        "correct": true,
        "explanation": "Les électrons sont plus nombreux et plus déformables."
      },
      {
        "content": "Les forces de dispersion disparaissent pour les grosses molécules.",
        "correct": false,
        "explanation": "Elles deviennent au contraire plus importantes."
      },
      {
        "content": "La masse molaire n'a jamais aucun lien avec la polarisabilité.",
        "correct": false,
        "explanation": "Dans une famille comparable, les deux évoluent souvent ensemble."
      }
    ],
    "explanation": "Dans une série homologue, l'augmentation de taille renforce généralement la dispersion."
  },
  {
    "order": 49,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les interactions ion-dipôle, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elles sont identiques à une liaison covalente.",
        "correct": false,
        "explanation": "Il s'agit d'une interaction non covalente électrostatique."
      },
      {
        "content": "Elles peuvent être importantes pour la dissolution d'un sel dans l'eau.",
        "correct": true,
        "explanation": "La solvatation stabilise les ions séparés."
      },
      {
        "content": "Elles sont impossibles avec une molécule neutre.",
        "correct": false,
        "explanation": "Une molécule polaire peut être globalement neutre."
      },
      {
        "content": "Elles contribuent à l'hydratation des ions en solution aqueuse.",
        "correct": true,
        "explanation": "L'eau s'oriente autour des ions."
      },
      {
        "content": "Elles peuvent apparaître entre un ion et une molécule polaire.",
        "correct": true,
        "explanation": "L'ion attire l'extrémité de signe opposé du dipôle."
      }
    ],
    "explanation": "Les interactions ion-dipôle constituent un pont entre chimie ionique et polarité moléculaire."
  },
  {
    "order": 50,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle interaction est particulièrement importante entre $\\ce{Na+}$ et les molécules d'eau de sa couche d'hydratation ?",
    "choices": [
      {
        "content": "Une liaison hydrogène avec Na+ comme donneur O–H.",
        "correct": false,
        "explanation": "Na+ n'est pas un donneur d'hydrogène."
      },
      {
        "content": "Aucune interaction, car l'eau est neutre.",
        "correct": false,
        "explanation": "Son dipôle permanent interagit fortement avec l'ion."
      },
      {
        "content": "Une interaction ion-dipôle.",
        "correct": true,
        "explanation": "L'oxygène partiellement négatif de l'eau s'oriente vers le cation."
      },
      {
        "content": "Une liaison covalente Na–O obligatoire.",
        "correct": false,
        "explanation": "L'hydratation ne requiert pas une liaison covalente classique."
      },
      {
        "content": "Une force uniquement nucléaire.",
        "correct": false,
        "explanation": "L'interaction est électrostatique."
      }
    ],
    "explanation": "L'hydratation d'un ion repose sur l'orientation des dipôles de l'eau autour de la charge."
  },
  {
    "order": 53,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans un modèle électrostatique simplifié où $F\\propto1/d^2$, si la distance entre deux partenaires est doublée, par quel facteur la force est-elle multipliée ?",
    "answer": {
      "type": "number",
      "value": 0.25,
      "tolerance": 0.001
    },
    "explanation": "Si $d$ devient $2d$, alors $F$ est multipliée par $1/2^2=1/4=0{,}25$."
  },
  {
    "order": 54,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Dans le schéma, cliquez sur la liaison hydrogène intermoléculaire entre le méthanol et l'eau.",
    "image": {
      "src": "/images/training/ue14/chimie/liaison-hydrogene-methanol-eau-qzone.svg",
      "alt": "Schéma d'une molécule de méthanol et d'une molécule d'eau reliées par une liaison hydrogène en pointillés",
      "width": 1100,
      "height": 520
    },
    "expectedZones": [
      {
        "id": "hydrogen-bond",
        "label": "Liaison hydrogène O···H",
        "x": 0.51,
        "y": 0.5,
        "tolerance": 0.09
      }
    ],
    "explanation": "La liaison hydrogène est l'interaction en pointillés entre l'hydrogène donneur lié à l'oxygène et l'oxygène accepteur de la molécule voisine."
  }
];
