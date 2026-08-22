import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.2 – Section C – Chiralité, énantiomères et diastéréoisomères
 */

export const UE14_CH6_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 41,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Un carbone asymétrique classique :",
    "choices": [
      {
        "content": "Un carbone peut être asymétrique tout en portant deux substituants identiques.",
        "correct": false,
        "explanation": "Le centre asymétrique carboné classique porte quatre substituants différents."
      },
      {
        "content": "Le centre asymétrique carboné classique est nécessairement un carbone $sp^2$ plan.",
        "correct": false,
        "explanation": "Le centre étudié est un carbone tétraédrique $sp^3$."
      },
      {
        "content": "Porte quatre substituants différents.",
        "correct": true,
        "explanation": "C'est le critère essentiel."
      },
      {
        "content": "Peut être noté par un astérisque C*.",
        "correct": true,
        "explanation": "Le symbole C* permet de repérer le centre asymétrique."
      },
      {
        "content": "Est nécessairement engagé dans une double liaison.",
        "correct": false,
        "explanation": "Un carbone sp2 n'est pas le centre asymétrique classique étudié ici."
      }
    ],
    "explanation": "Un centre asymétrique carboné classique est un carbone tétraédrique portant quatre substituants différents."
  },
  {
    "order": 42,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La figure compare glycine et alanine : ![Glycine et alanine](/images/training/ue14/isomerie-enantiomerie/figure-c2-glycine-alanine.svg)\n\nQuelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'alanine possède un carbone α asymétrique.",
        "correct": true,
        "explanation": "Il porte NH2, COOH, CH3 et H."
      },
      {
        "content": "La glycine et l'alanine sont toutes deux chirales pour la même raison.",
        "correct": false,
        "explanation": "La glycine n'a pas ce centre asymétrique."
      },
      {
        "content": "L’alanine perd son asymétrie parce que $\\ce{NH2}$ et $\\ce{COOH}$ contiennent tous deux des hétéroatomes.",
        "correct": false,
        "explanation": "Le carbone α de l’alanine porte quatre substituants différents."
      },
      {
        "content": "Le carbone α de la glycine porte deux hydrogènes.",
        "correct": true,
        "explanation": "Il ne porte donc pas quatre substituants différents."
      },
      {
        "content": "La glycine ne possède pas de carbone asymétrique au carbone α.",
        "correct": true,
        "explanation": "Deux substituants H sont identiques."
      }
    ],
    "explanation": "Le remplacement d'un hydrogène de la glycine par CH3 crée quatre substituants différents dans l'alanine."
  },
  {
    "order": 43,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La figure montre deux molécules images l'une de l'autre dans un miroir : ![Images miroir](/images/training/ue14/isomerie-enantiomerie/figure-c3-images-miroir.svg)\n\nSi elles ne sont pas superposables :",
    "choices": [
      {
        "content": "Elles sont énantiomères.",
        "correct": true,
        "explanation": "C'est la définition."
      },
      {
        "content": "Elles ont la même connectivité.",
        "correct": true,
        "explanation": "Ce sont des stéréoisomères."
      },
      {
        "content": "Elles ont la même formule brute.",
        "correct": true,
        "explanation": "Les énantiomères ont la même composition."
      },
      {
        "content": "Elles sont des isomères fonctionnels.",
        "correct": false,
        "explanation": "La connectivité et les fonctions sont identiques."
      },
      {
        "content": "Deux énantiomères possèdent nécessairement des formules brutes différentes.",
        "correct": false,
        "explanation": "Des énantiomères ont la même formule brute et la même connectivité."
      }
    ],
    "explanation": "Des images miroir non superposables constituent un couple d'énantiomères."
  },
  {
    "order": 44,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de deux énantiomères, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils appartiennent nécessairement à des fonctions chimiques différentes.",
        "correct": false,
        "explanation": "Leur constitution est la même."
      },
      {
        "content": "Deux énantiomères diffèrent obligatoirement par la position d’une fonction chimique.",
        "correct": false,
        "explanation": "Ils ont la même constitution ; seule l’organisation spatiale diffère."
      },
      {
        "content": "Deux énantiomères sont superposables à leur image miroir.",
        "correct": false,
        "explanation": "Deux énantiomères sont images miroir non superposables."
      },
      {
        "content": "Ils ne sont pas superposables.",
        "correct": true,
        "explanation": "Sinon ils seraient identiques."
      },
      {
        "content": "Ils ont la même constitution.",
        "correct": true,
        "explanation": "Même enchaînement atomique."
      }
    ],
    "explanation": "L'énantiomérie ne modifie pas la connectivité ; elle modifie l'arrangement spatial."
  },
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la chiralité :",
    "choices": [
      {
        "content": "Le carbone n'est pas le seul atome pouvant, dans certains cas, participer à la chiralité.",
        "correct": true,
        "explanation": "D’autres atomes peuvent aussi participer à la chiralité."
      },
      {
        "content": "Une molécule chirale est superposable à son image miroir.",
        "correct": false,
        "explanation": "C'est le contraire."
      },
      {
        "content": "Deux substituants identiques autour d'un carbone excluent que ce carbone soit asymétrique.",
        "correct": true,
        "explanation": "Il faut quatre substituants différents."
      },
      {
        "content": "Tout carbone $sp^3$ est automatiquement un centre asymétrique.",
        "correct": false,
        "explanation": "Il faut notamment quatre substituants différents."
      },
      {
        "content": "La présence d'un centre asymétrique peut rendre une molécule chirale.",
        "correct": true,
        "explanation": "C'est le cas classique étudié."
      }
    ],
    "explanation": "La chiralité peut notamment résulter d’un centre asymétrique carboné, sans être limitée à ce seul cas."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Un carbone tétraédrique portant $\\ce{H}$, $\\ce{H}$, $\\ce{OH}$ et $\\ce{CH3}$ est-il asymétrique ?",
    "choices": [
      {
        "content": "Non, car deux substituants sont identiques.",
        "correct": true,
        "explanation": "Les deux H empêchent l'asymétrie."
      },
      {
        "content": "Oui, car il porte un groupe OH.",
        "correct": false,
        "explanation": "La nature du groupe OH ne compense pas la répétition de H."
      },
      {
        "content": "Cela dépend uniquement de sa masse atomique.",
        "correct": false,
        "explanation": "Le critère porte sur les substituants."
      },
      {
        "content": "Oui, car la présence du groupe $\\ce{OH}$ suffit à rendre le carbone asymétrique.",
        "correct": false,
        "explanation": "Les deux substituants H identiques empêchent l’asymétrie."
      },
      {
        "content": "Oui, car il est sp3.",
        "correct": false,
        "explanation": "sp3 ne suffit pas."
      }
    ],
    "explanation": "Quatre substituants différents sont requis."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Un carbone engagé dans une double liaison $\\ce{C=C}$ est-il un carbone asymétrique classique ?",
    "choices": [
      {
        "content": "Oui, toute double liaison crée un C*.",
        "correct": false,
        "explanation": "E/Z est un autre type de stéréoisomérie."
      },
      {
        "content": "Oui, dès qu'il porte un hydrogène.",
        "correct": false,
        "explanation": "La géométrie sp2 reste incompatible avec ce centre chiral classique."
      },
      {
        "content": "Non, il est trigonal plan $sp^2$.",
        "correct": true,
        "explanation": "Le centre asymétrique carboné étudié est sp3 tétraédrique."
      },
      {
        "content": "Seulement si la double liaison est Z.",
        "correct": false,
        "explanation": "E/Z ne change pas l'hybridation."
      },
      {
        "content": "Oui, car tout carbone engagé dans une double liaison est nécessairement asymétrique.",
        "correct": false,
        "explanation": "Le centre asymétrique carboné classique considéré ici est tétraédrique $sp^3$."
      }
    ],
    "explanation": "Il faut distinguer élément stéréogène de type double liaison et centre asymétrique sp3."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une molécule possède deux centres asymétriques. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle peut avoir plusieurs stéréoisomères.",
        "correct": true,
        "explanation": "Chaque centre peut contribuer à plusieurs configurations."
      },
      {
        "content": "Deux de ses stéréoisomères peuvent être énantiomères.",
        "correct": true,
        "explanation": "Si tous les centres sont inversés et que les structures sont images miroir."
      },
      {
        "content": "Deux de ses stéréoisomères peuvent être diastéréoisomères.",
        "correct": true,
        "explanation": "S'ils ne sont pas images miroir."
      },
      {
        "content": "Toutes les paires possibles sont nécessairement des énantiomères.",
        "correct": false,
        "explanation": "Avec plusieurs centres, des diastéréoisomères apparaissent."
      },
      {
        "content": "Avec deux centres asymétriques, toutes les configurations possibles sont forcément identiques.",
        "correct": false,
        "explanation": "Plusieurs stéréoisomères peuvent exister."
      }
    ],
    "explanation": "Plusieurs centres asymétriques enrichissent les relations stéréoisomériques."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Des diastéréoisomères sont :",
    "choices": [
      {
        "content": "Toujours un mélange racémique.",
        "correct": false,
        "explanation": "Le terme décrit une relation entre structures, pas une composition de solution."
      },
      {
        "content": "Des isomères fonctionnels.",
        "correct": false,
        "explanation": "Les diastéréoisomères ont la même constitution et ne sont pas images miroir l’un de l’autre."
      },
      {
        "content": "Toujours deux molécules de formules brutes différentes.",
        "correct": false,
        "explanation": "Ils partagent la même formule brute et la même constitution."
      },
      {
        "content": "Toujours superposables.",
        "correct": false,
        "explanation": "Ce sont des stéréoisomères distincts."
      },
      {
        "content": "Des stéréoisomères qui ne sont pas images l'un de l'autre dans un miroir.",
        "correct": true,
        "explanation": "C'est la relation à retenir."
      }
    ],
    "explanation": "Les diastéréoisomères ont la même constitution mais ne forment pas un couple image miroir."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos d'un composé méso dans le modèle classique à plusieurs centres asymétriques :",
    "choices": [
      {
        "content": "Une symétrie interne peut rendre la molécule achirale.",
        "correct": true,
        "explanation": "L'image miroir devient superposable."
      },
      {
        "content": "Il est nécessairement optiquement actif.",
        "correct": false,
        "explanation": "Un composé méso est achiral."
      },
      {
        "content": "La simple présence de deux C* suffit toujours à rendre une molécule chirale.",
        "correct": false,
        "explanation": "La symétrie peut annuler la chiralité globale."
      },
      {
        "content": "Une molécule méso peut être superposable à son image miroir.",
        "correct": true,
        "explanation": "Sa symétrie interne peut la rendre achirale malgré la présence de centres stéréogènes."
      },
      {
        "content": "Il peut posséder plusieurs centres stéréogènes.",
        "correct": true,
        "explanation": "C'est le cas typique."
      }
    ],
    "explanation": "Le composé méso est le contre-exemple important à l'idée « plusieurs centres asymétriques = forcément molécule chirale »."
  },
  {
    "order": 51,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On considère A = (R,R), B = (S,S) et C = (R,S) dans la figure suivante : ![Trois stéréoisomères](/images/training/ue14/isomerie-enantiomerie/figure-c5-trois-stereoisomeres.svg)\n\nQuelles propositions sont exactes ?",
    "choices": [
      {
        "content": "A et B sont des isomères de constitution.",
        "correct": false,
        "explanation": "A et B ont la même connectivité ; ils diffèrent par leur configuration."
      },
      {
        "content": "A et B sont énantiomères.",
        "correct": true,
        "explanation": "Les deux centres sont inversés."
      },
      {
        "content": "A et B ont la même constitution.",
        "correct": true,
        "explanation": "Seule la configuration change."
      },
      {
        "content": "A et B sont diastéréoisomères.",
        "correct": false,
        "explanation": "Ils sont images miroir non superposables."
      },
      {
        "content": "A et B sont des stéréoisomères.",
        "correct": true,
        "explanation": "L'énantiomérie est une stéréoisomérie."
      }
    ],
    "explanation": "Inverser tous les centres d'une molécule chirale donne son énantiomère."
  },
  {
    "order": 52,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Toujours avec A = (R,R) et C = (R,S) :",
    "choices": [
      {
        "content": "A et C sont énantiomères.",
        "correct": false,
        "explanation": "Tous les centres ne sont pas inversés."
      },
      {
        "content": "Ils ont la même constitution.",
        "correct": true,
        "explanation": "Le squelette reste identique."
      },
      {
        "content": "A et C ont des formules brutes différentes.",
        "correct": false,
        "explanation": "Ce sont des stéréoisomères : la formule brute et la constitution sont conservées."
      },
      {
        "content": "Les deux centres changent de configuration entre A = (R,R) et C = (R,S).",
        "correct": false,
        "explanation": "Un seul centre change de configuration."
      },
      {
        "content": "A et C sont diastéréoisomères.",
        "correct": true,
        "explanation": "Ils ne sont pas images miroir l'un de l'autre."
      }
    ],
    "explanation": "La différence sur une partie seulement des centres conduit ici à des diastéréoisomères."
  },
  {
    "order": 53,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Avec B = (S,S) et C = (R,S) :",
    "choices": [
      {
        "content": "Un seul centre diffère.",
        "correct": true,
        "explanation": "S,S → R,S."
      },
      {
        "content": "B et C sont diastéréoisomères.",
        "correct": true,
        "explanation": "Ils ne sont pas images miroir."
      },
      {
        "content": "B et C sont énantiomères.",
        "correct": false,
        "explanation": "L'inversion n'est pas totale."
      },
      {
        "content": "Ils possèdent la même formule brute.",
        "correct": true,
        "explanation": "Ce sont des stéréoisomères."
      },
      {
        "content": "B et C sont superposables et représentent nécessairement la même molécule.",
        "correct": false,
        "explanation": "Ils diffèrent par la configuration d’un centre et sont diastéréoisomères."
      }
    ],
    "explanation": "Même logique que pour A/C : une inversion partielle conduit à des diastéréoisomères."
  },
  {
    "order": 54,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La figure suivante représente un composé méso : ![Composé méso](/images/training/ue14/isomerie-enantiomerie/figure-c6-compose-meso.svg)\n\nQuelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle illustre une réduction du nombre réel de stéréoisomères par rapport au maximum $2^n$.",
        "correct": true,
        "explanation": "La symétrie crée une forme méso."
      },
      {
        "content": "La présence de centres stéréogènes interdit toute symétrie interne.",
        "correct": false,
        "explanation": "Une forme méso illustre précisément la coexistence de centres stéréogènes et d’une symétrie interne."
      },
      {
        "content": "La molécule possède des centres stéréogènes.",
        "correct": true,
        "explanation": "Ils sont visibles dans la structure."
      },
      {
        "content": "Elle peut être achirale malgré ces centres.",
        "correct": true,
        "explanation": "Une symétrie interne rend l'image miroir superposable."
      },
      {
        "content": "Elle possède nécessairement un énantiomère distinct.",
        "correct": false,
        "explanation": "Une forme méso est identique à son image miroir."
      }
    ],
    "explanation": "Les éléments de symétrie doivent être examinés avant d'appliquer naïvement la formule $2^n$."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour une molécule comportant $n$ centres asymétriques indépendants, sans symétrie interne :",
    "choices": [
      {
        "content": "La présence de symétrie peut réduire ce nombre.",
        "correct": true,
        "explanation": "Les formes méso sont un exemple."
      },
      {
        "content": "Avec deux centres, le maximum théorique est 4.",
        "correct": true,
        "explanation": "$2^2=4$."
      },
      {
        "content": "Avec trois centres, le maximum théorique est 6.",
        "correct": false,
        "explanation": "Il vaut $2^3=8$."
      },
      {
        "content": "Avec un seul centre asymétrique indépendant, le nombre maximal de configurations est 4.",
        "correct": false,
        "explanation": "Un centre indépendant donne au maximum deux configurations, R et S."
      },
      {
        "content": "Le nombre maximal de configurations d’une molécule à $n$ centres indépendants est $n^2$.",
        "correct": false,
        "explanation": "En l’absence de symétrie réductrice, le maximum est $2^n$."
      }
    ],
    "explanation": "La règle $2^n$ donne un maximum, à corriger si des symétries rendent certaines configurations identiques."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Une molécule possède deux centres asymétriques indépendants et aucune symétrie interne. Quel est le nombre maximal de stéréoisomères ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "$2^2=4$ configurations maximales."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le 2,3-dichlorobutane constitue un cas classique avec deux centres stéréogènes et une forme méso. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il existe alors trois stéréoisomères distincts.",
        "correct": true,
        "explanation": "RR, SS et la forme méso."
      },
      {
        "content": "Il existe obligatoirement quatre stéréoisomères distincts.",
        "correct": false,
        "explanation": "La forme méso réduit le total."
      },
      {
        "content": "La forme méso constitue un quatrième énantiomère distinct du couple (R,R)/(S,S).",
        "correct": false,
        "explanation": "Dans ce cas classique, la symétrie réduit le nombre de stéréoisomères distincts à trois."
      },
      {
        "content": "(2R,3R) et (2S,3S) sont superposables et représentent la même structure.",
        "correct": false,
        "explanation": "Ils forment un couple d’énantiomères."
      },
      {
        "content": "(2R,3S) et (2S,3R) correspondent à la même forme méso lorsque la molécule est symétrique.",
        "correct": true,
        "explanation": "La symétrie interne les rend superposables."
      }
    ],
    "explanation": "Ce cas classique montre pourquoi $2^n$ est un maximum et non une garantie."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule possède un seul centre asymétrique et aucun autre élément stéréogène. Dans le cas simple étudié :",
    "choices": [
      {
        "content": "Deux configurations R et S sont possibles.",
        "correct": true,
        "explanation": "Le centre possède deux configurations absolues."
      },
      {
        "content": "Ces deux formes constituent un couple d'énantiomères.",
        "correct": true,
        "explanation": "Elles sont images miroir non superposables."
      },
      {
        "content": "Elles sont des isomères de constitution.",
        "correct": false,
        "explanation": "La connectivité est identique."
      },
      {
        "content": "L'une est nécessairement dextrogyre si elle est R.",
        "correct": false,
        "explanation": "R/S ne prédit pas le signe du pouvoir rotatoire."
      },
      {
        "content": "R et S sont deux conformations obtenues par rotation autour d’une liaison simple.",
        "correct": false,
        "explanation": "R et S décrivent des configurations."
      }
    ],
    "explanation": "Avec un seul centre chiral classique, R et S constituent généralement le couple énantiomérique."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi ne faut-il pas confondre configuration et conformation ?",
    "choices": [
      {
        "content": "Une conformation et une configuration sont toujours synonymes.",
        "correct": false,
        "explanation": "Configuration et conformation sont deux notions distinctes."
      },
      {
        "content": "Faire simplement tourner le dessin sur la feuille transforme une configuration R en S.",
        "correct": false,
        "explanation": "Changer le point de vue ne modifie pas la configuration absolue."
      },
      {
        "content": "Une conformation peut souvent changer par rotation autour de liaisons simples.",
        "correct": true,
        "explanation": "Sans rupture de la constitution."
      },
      {
        "content": "Changer R en S à un centre stable ne correspond pas à une simple rotation de toute la molécule.",
        "correct": true,
        "explanation": "La configuration absolue est une propriété du centre."
      },
      {
        "content": "R/S décrit une configuration.",
        "correct": true,
        "explanation": "C'est le vocabulaire attendu."
      }
    ],
    "explanation": "La conformation décrit des arrangements accessibles par rotations ; la configuration décrit l'identité stéréochimique."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans un contexte pharmacologique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Deux énantiomères peuvent ne pas être reconnus de façon identique.",
        "correct": true,
        "explanation": "Leur géométrie miroir peut modifier l'interaction."
      },
      {
        "content": "La chiralité n'a aucun intérêt en pharmacie.",
        "correct": false,
        "explanation": "La chiralité peut avoir une importance pharmacologique."
      },
      {
        "content": "Deux énantiomères ont forcément des formules brutes différentes.",
        "correct": false,
        "explanation": "La formule brute est identique."
      },
      {
        "content": "Deux énantiomères sont toujours reconnus de façon strictement identique par une cible biologique chirale.",
        "correct": false,
        "explanation": "Une cible tridimensionnelle peut reconnaître différemment deux énantiomères."
      },
      {
        "content": "Une cible biologique peut être chirale.",
        "correct": true,
        "explanation": "Protéines et enzymes ont une organisation tridimensionnelle."
      }
    ],
    "explanation": "La stéréochimie peut influencer la reconnaissance moléculaire sans modifier la formule brute."
  },
  {
    "order": 125,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Dans la formule simplifiée de l'acide lactique, cliquez sur le carbone asymétrique.",
    "image": {
      "src": "/images/training/ue14/isomerie-enantiomerie/acide-lactique-centre-chiral-qzone.svg",
      "alt": "Formule simplifiée de l’acide lactique CH3-CH(OH)-COOH avec le carbone central représenté explicitement",
      "width": 1100,
      "height": 480
    },
    "expectedZones": [
      {
        "id": "centre-chiral",
        "label": "Carbone asymétrique",
        "x": 0.5,
        "y": 0.5,
        "tolerance": 0.085
      }
    ],
    "explanation": "Le carbone central porte quatre substituants différents : $\\ce{CH3}$, $\\ce{OH}$, $\\ce{COOH}$ et H. C'est donc le centre asymétrique."
  },
  {
    "order": 126,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix espèces suivantes, sélectionnez exactement les cinq qui possèdent un carbone asymétrique dans les structures indiquées.",
    "choices": [
      {
        "content": "Alanine $\\ce{NH2-CH(CH3)-COOH}$.",
        "correct": true,
        "explanation": "Le carbone α porte NH2, COOH, CH3 et H."
      },
      {
        "content": "Acide lactique $\\ce{CH3-CH(OH)-COOH}$.",
        "correct": true,
        "explanation": "Le carbone central porte quatre groupes différents."
      },
      {
        "content": "Butan-2-ol $\\ce{CH3-CH(OH)-CH2CH3}$.",
        "correct": true,
        "explanation": "Le carbone porteur de OH porte quatre substituants différents."
      },
      {
        "content": "$\\ce{CHBrClF}$.",
        "correct": true,
        "explanation": "Le carbone porte H, Br, Cl et F."
      },
      {
        "content": "Cystéine $\\ce{NH2-CH(CH2SH)-COOH}$.",
        "correct": true,
        "explanation": "Le carbone α porte quatre substituants différents."
      },
      {
        "content": "Glycine $\\ce{NH2-CH2-COOH}$.",
        "correct": false,
        "explanation": "Deux H sur le carbone α."
      },
      {
        "content": "Propanone $\\ce{CH3COCH3}$.",
        "correct": false,
        "explanation": "Pas de carbone sp3 portant quatre substituants différents."
      },
      {
        "content": "Éthanol $\\ce{CH3CH2OH}$.",
        "correct": false,
        "explanation": "Aucun carbone ne porte quatre substituants différents."
      },
      {
        "content": "Propan-2-ol $\\ce{CH3-CH(OH)-CH3}$.",
        "correct": false,
        "explanation": "Deux groupes CH3 identiques."
      },
      {
        "content": "Méthane $\\ce{CH4}$.",
        "correct": false,
        "explanation": "Quatre H identiques."
      }
    ],
    "explanation": "Le critère est toujours la présence d'un carbone sp3 portant quatre substituants différents."
  }
];
