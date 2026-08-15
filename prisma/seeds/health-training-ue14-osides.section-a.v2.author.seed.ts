import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie — Chapitre 1.3 — Les osides — Section A
 * Banque éditoriale auteur — à intégrer via le helper partagé du repo.
 */

export const UE14_BIOCH_CH3_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des osides :",
    "choices": [
      {
        "content": "Ils comportent au moins une liaison osidique impliquant le carbone anomérique d’un ose.",
        "correct": true,
        "explanation": "Une liaison osidique se forme lorsqu’un groupement porté par le carbone anomérique d’un ose se lie à une autre fonction chimique."
      },
      {
        "content": "Un holoside ne comporte que des résidus glucidiques.",
        "correct": true,
        "explanation": "L’hydrolyse complète d’un holoside ne libère que des oses ou des dérivés d’oses."
      },
      {
        "content": "Un hétéroside associe une partie glucidique à un aglycone non glucidique.",
        "correct": true,
        "explanation": "La partie glucidique est liée à une partie non glucidique appelée aglycone."
      },
      {
        "content": "Un oside contient toujours exactement deux oses.",
        "correct": false,
        "explanation": "Il peut contenir deux, trois, quatre ou de nombreux résidus."
      }
    ],
    "explanation": "Les osides regroupent des assemblages glucidiques variés, notamment reliés par des liaisons O-glycosidiques."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Un holoside formé de trois résidus d’oses est appelé :",
    "choices": [
      {
        "content": "Triholoside.",
        "correct": true,
        "explanation": "Le préfixe tri- indique que l’holoside contient trois résidus d’oses."
      },
      {
        "content": "Diholoside.",
        "correct": false,
        "explanation": "Un diholoside ne contient que deux résidus d’oses."
      },
      {
        "content": "Tétraholoside.",
        "correct": false,
        "explanation": "Un tétraholoside contient quatre résidus d’oses."
      },
      {
        "content": "Hétéroside.",
        "correct": false,
        "explanation": "Ce terme dépend de la présence d’un aglycone, pas du nombre de résidus."
      }
    ],
    "explanation": "Trois résidus d’oses correspondent à un triholoside."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Lors de la condensation formant un diholoside :",
    "choices": [
      {
        "content": "Une molécule d’eau est perdue.",
        "correct": true,
        "explanation": "Dans l’écriture formelle d’une condensation, la formation de la liaison glycosidique s’accompagne de l’élimination d’une molécule d’eau."
      },
      {
        "content": "Deux fonctions hémiacétaliques peuvent être engagées.",
        "correct": true,
        "explanation": "Ce cas conduit à un diholoside non réducteur."
      },
      {
        "content": "Une fonction hémiacétalique et une fonction alcool peuvent être engagées.",
        "correct": true,
        "explanation": "Ce cas laisse un centre hémiacétalique libre."
      },
      {
        "content": "Il s’agit nécessairement d’une hydrolyse.",
        "correct": false,
        "explanation": "L’hydrolyse consomme de l’eau pour rompre une liaison glycosidique ; elle est l’opération inverse de la condensation formelle."
      }
    ],
    "explanation": "Deux modes de condensation sont distingués selon les fonctions engagées."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Si les deux fonctions hémiacétaliques réductrices participent à la liaison du diholoside, le produit est :",
    "choices": [
      {
        "content": "Non réducteur.",
        "correct": true,
        "explanation": "Aucun centre hémiacétalique libre ne subsiste."
      },
      {
        "content": "Toujours β(1→4).",
        "correct": false,
        "explanation": "Le caractère non réducteur ne fixe pas à lui seul la position/anomérie."
      },
      {
        "content": "Un acide uronique.",
        "correct": false,
        "explanation": "Il ne s’agit pas d’une oxydation."
      },
      {
        "content": "Un polyol.",
        "correct": false,
        "explanation": "Il ne s’agit pas d’une réduction."
      }
    ],
    "explanation": "L’engagement des deux centres anomériques supprime le pouvoir réducteur."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l’hydrolyse des liaisons glycosidiques :",
    "choices": [
      {
        "content": "Les osidases/glycosidases peuvent catalyser une hydrolyse enzymatique.",
        "correct": true,
        "explanation": "Les glycosidases catalysent le clivage hydrolytique de liaisons glycosidiques déterminées."
      },
      {
        "content": "L’hydrolyse enzymatique est très spécifique.",
        "correct": true,
        "explanation": "Une glycosidase reconnaît notamment la nature des résidus, la position de la liaison et souvent sa configuration anomérique."
      },
      {
        "content": "Certaines enzymes sont spécifiques d’un anomère.",
        "correct": true,
        "explanation": "Une α-glycosidase et une β-glycosidase peuvent distinguer des liaisons qui ne diffèrent que par leur configuration anomérique."
      },
      {
        "content": "L’hydrolyse chimique est plus spécifique que l’hydrolyse enzymatique.",
        "correct": false,
        "explanation": "Une hydrolyse acide clive généralement les liaisons glycosidiques avec moins de sélectivité qu’une enzyme."
      }
    ],
    "explanation": "L’hydrolyse enzymatique est spécifique, contrairement à l’hydrolyse chimique acide peu spécifique."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le lactose :",
    "choices": [
      {
        "content": "Associe un résidu de galactose et un résidu de glucose.",
        "correct": true,
        "explanation": "L’hydrolyse du lactose libère un galactose et un glucose."
      },
      {
        "content": "Possède une liaison β(1→4).",
        "correct": true,
        "explanation": "Le carbone anomérique C1 du galactose est lié au C4 du glucose dans une configuration β."
      },
      {
        "content": "Conserve un centre hémiacétalique libre.",
        "correct": true,
        "explanation": "Le carbone anomérique du résidu de glucose reste libre, ce qui permet l’ouverture du cycle et confère un pouvoir réducteur."
      },
      {
        "content": "Est non réducteur comme le saccharose.",
        "correct": false,
        "explanation": "Contrairement au saccharose, le lactose conserve un carbone anomérique libre et est donc réducteur."
      }
    ],
    "explanation": "Le lactose est un diholoside réducteur galactose–glucose."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La digestion du lactose :",
    "choices": [
      {
        "content": "Fait intervenir la lactase.",
        "correct": true,
        "explanation": "La lactase de la bordure en brosse intestinale hydrolyse la liaison β(1→4) du lactose."
      },
      {
        "content": "La lactase possède une activité β-galactosidase.",
        "correct": true,
        "explanation": "Elle hydrolyse une liaison dans laquelle le galactose engage son carbone anomérique en configuration β."
      },
      {
        "content": "Libère glucose et galactose.",
        "correct": true,
        "explanation": "Le lactose est constitué d’un résidu de galactose lié à un résidu de glucose."
      },
      {
        "content": "Libère glucose et fructose.",
        "correct": false,
        "explanation": "Ce sont les produits du saccharose."
      }
    ],
    "explanation": "La lactase/β-galactosidase hydrolyse le lactose en glucose et galactose."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le saccharose :",
    "choices": [
      {
        "content": "Associe glucose et fructose.",
        "correct": true,
        "explanation": "L’hydrolyse du saccharose libère un glucose et un fructose."
      },
      {
        "content": "Engage les deux centres anomériques.",
        "correct": true,
        "explanation": "La liaison unit le C1 anomérique du glucose au C2 anomérique du fructose."
      },
      {
        "content": "Est non réducteur.",
        "correct": true,
        "explanation": "Comme les deux carbones anomériques sont engagés dans la liaison, aucun ne peut ouvrir son cycle pour fournir une fonction carbonyle réductrice."
      },
      {
        "content": "Libère du galactose lors de son hydrolyse.",
        "correct": false,
        "explanation": "Il libère glucose et fructose."
      }
    ],
    "explanation": "Le saccharose est un diholoside non réducteur glucose–fructose."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le maltose :",
    "choices": [
      {
        "content": "Associe deux résidus de glucose.",
        "correct": true,
        "explanation": "L’hydrolyse complète d’une molécule de maltose libère deux molécules de glucose."
      },
      {
        "content": "Possède une liaison α(1→4).",
        "correct": true,
        "explanation": "Le C1 anomérique en configuration α du premier glucose est lié au C4 du second."
      },
      {
        "content": "Peut résulter de l’hydrolyse de l’amidon ou du glycogène.",
        "correct": true,
        "explanation": "Le clivage de certaines liaisons α(1→4) de ces glucanes peut libérer du maltose."
      },
      {
        "content": "Est très abondant à l’état libre.",
        "correct": false,
        "explanation": "Il est peu présent à l’état libre."
      }
    ],
    "explanation": "Le maltose est un diglucoside réducteur α(1→4)."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi lactose, saccharose et maltose, quel diholoside est non réducteur ?",
    "choices": [
      {
        "content": "Saccharose.",
        "correct": true,
        "explanation": "Ses deux centres anomériques sont engagés."
      },
      {
        "content": "Lactose.",
        "correct": false,
        "explanation": "Le lactose conserve le carbone anomérique libre de son résidu de glucose et est donc réducteur."
      },
      {
        "content": "Maltose.",
        "correct": false,
        "explanation": "Le maltose conserve un carbone anomérique libre et possède donc un pouvoir réducteur."
      },
      {
        "content": "Les trois.",
        "correct": false,
        "explanation": "Un seul des trois est non réducteur."
      }
    ],
    "explanation": "Le saccharose se distingue par l’absence de centre hémiacétalique libre."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une activité lactasique intestinale insuffisante diminue la digestion du lactose. Quelles conséquences directes sont cohérentes ?",
    "choices": [
      {
        "content": "La liaison β(1→4) du lactose est moins efficacement hydrolysée.",
        "correct": true,
        "explanation": "La lactase catalyse normalement l’hydrolyse de la liaison β(1→4) entre galactose et glucose."
      },
      {
        "content": "La libération de glucose et de galactose diminue.",
        "correct": true,
        "explanation": "Une hydrolyse moins efficace du lactose produit moins de glucose et de galactose absorbables."
      },
      {
        "content": "Le problème concerne la digestion d’un diholoside.",
        "correct": true,
        "explanation": "Le lactose est formé de deux résidus d’oses : c’est un diholoside."
      },
      {
        "content": "Cela correspond nécessairement à une allergie aux protéines du lait.",
        "correct": false,
        "explanation": "Le mécanisme glucidique est distinct d’une allergie protéique."
      }
    ],
    "explanation": "Un déficit en lactase laisse davantage de lactose non hydrolysé dans la lumière intestinale ; il ne s’agit pas d’une allergie aux protéines du lait."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Lors d’une fermentation lactique utilisée en fromagerie :",
    "choices": [
      {
        "content": "Des lactobacilles utilisent le lactose.",
        "correct": true,
        "explanation": "Certaines bactéries lactiques peuvent métaboliser le lactose présent dans le lait."
      },
      {
        "content": "De l’acide lactique est formé.",
        "correct": true,
        "explanation": "La fermentation lactique convertit des sucres en lactate, ce qui acidifie le milieu."
      },
      {
        "content": "Le phénomène concerne un sucre du lait.",
        "correct": true,
        "explanation": "Le lactose est le principal glucide naturellement présent dans le lait."
      },
      {
        "content": "Le saccharose est nécessairement l’unique substrat glucidique.",
        "correct": false,
        "explanation": "Dans le lait, le lactose constitue le substrat glucidique majeur des bactéries capables de l’utiliser."
      }
    ],
    "explanation": "La fermentation illustre une transformation biologique du lactose."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du saccharose alimentaire :",
    "choices": [
      {
        "content": "Il correspond au sucre de table.",
        "correct": true,
        "explanation": "Le sucre de table cristallisé est constitué principalement de saccharose."
      },
      {
        "content": "Il est très soluble dans l’eau.",
        "correct": true,
        "explanation": "Ses nombreuses fonctions hydroxyle peuvent former des liaisons hydrogène avec l’eau."
      },
      {
        "content": "Il provient notamment de la betterave et de la canne à sucre.",
        "correct": true,
        "explanation": "La betterave sucrière et la canne à sucre sont deux sources industrielles majeures de saccharose."
      },
      {
        "content": "Son hydrolyse donne glucose et galactose.",
        "correct": false,
        "explanation": "Elle donne glucose et fructose."
      }
    ],
    "explanation": "Le saccharose est un diholoside végétal, très soluble et non réducteur."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez le nom de l’enzyme de la bordure en brosse intestinale qui hydrolyse le lactose.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "lactase",
        "la lactase",
        "beta-galactosidase",
        "β-galactosidase",
        "beta galactosidase"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "La lactase possède une activité β-galactosidase qui hydrolyse le lactose en glucose et galactose."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un tétraholoside linéaire contient 4 résidus successifs. Combien de liaisons glycosidiques relient ces 4 résidus ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Quatre résidus successifs nécessitent trois liaisons entre voisins."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux diholosides réducteurs parmi les trois étudiés en détail.",
    "choices": [
      {
        "content": "Lactose.",
        "correct": true,
        "explanation": "Le carbone anomérique du résidu de glucose reste libre, ce qui rend le lactose réducteur."
      },
      {
        "content": "Maltose.",
        "correct": true,
        "explanation": "Le second résidu de glucose conserve un carbone anomérique libre, ce qui rend le maltose réducteur."
      },
      {
        "content": "Saccharose.",
        "correct": false,
        "explanation": "Dans le saccharose, les carbones anomériques du glucose et du fructose sont tous deux engagés dans la liaison."
      },
      {
        "content": "Aucun.",
        "correct": false,
        "explanation": "Deux des trois sont réducteurs."
      }
    ],
    "explanation": "Lactose et maltose sont réducteurs ; le saccharose ne l’est pas."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Les produits d’hydrolyse des diholosides :",
    "choices": [
      {
        "content": "Lactose → glucose + galactose.",
        "correct": true,
        "explanation": "La liaison β(1→4) du lactose relie un galactose à un glucose."
      },
      {
        "content": "Saccharose → glucose + fructose.",
        "correct": true,
        "explanation": "Le saccharose associe le carbone anomérique d’un glucose à celui d’un fructose."
      },
      {
        "content": "Maltose → deux glucoses.",
        "correct": true,
        "explanation": "Le maltose est un diglucoside dont les deux résidus sont liés en α(1→4)."
      },
      {
        "content": "Maltose → fructose + galactose.",
        "correct": false,
        "explanation": "Ces résidus ne constituent pas le maltose."
      }
    ],
    "explanation": "Les produits d’hydrolyse reflètent directement la composition du diholoside."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quels sont les deux oses libérés par hydrolyse du saccharose ? Répondez « X et Y ».",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glucose et fructose",
        "fructose et glucose"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le saccharose est formé d’un glucose et d’un fructose."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une glycosidase ne reconnaît qu’une configuration anomérique précise. Cela illustre :",
    "choices": [
      {
        "content": "La grande spécificité de l’hydrolyse enzymatique.",
        "correct": true,
        "explanation": "Le site actif d’une glycosidase reconnaît précisément la géométrie de son substrat."
      },
      {
        "content": "Une spécificité possible vis-à-vis de l’anomère.",
        "correct": true,
        "explanation": "La configuration α ou β du carbone anomérique modifie l’orientation de la liaison reconnue par l’enzyme."
      },
      {
        "content": "Une différence avec l’hydrolyse chimique acide.",
        "correct": true,
        "explanation": "Une hydrolyse acide peut cliver plusieurs types de liaisons glycosidiques sans la reconnaissance moléculaire propre à une enzyme."
      },
      {
        "content": "L’absence de rôle des enzymes dans l’hydrolyse.",
        "correct": false,
        "explanation": "Les glycosidases catalysent précisément ces réactions."
      }
    ],
    "explanation": "La spécificité enzymatique peut aller jusqu’à la reconnaissance de l’anomérie."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une expérience d’hydrolyse chimique d’un oside est réalisée en milieu acide à 60 °C pendant environ une heure. Quelles conditions appartiennent à ce protocole ?",
    "choices": [
      {
        "content": "Un milieu acide.",
        "correct": true,
        "explanation": "L’acide catalyse la rupture hydrolytique des liaisons glycosidiques."
      },
      {
        "content": "Une température de 60 °C.",
        "correct": true,
        "explanation": "La température expérimentale est fournie directement dans l’énoncé."
      },
      {
        "content": "Une durée d’environ une heure.",
        "correct": true,
        "explanation": "La durée expérimentale est fournie directement dans l’énoncé."
      },
      {
        "content": "Un clivage hautement spécifique d’un anomère.",
        "correct": false,
        "explanation": "Le clivage chimique est peu spécifique."
      }
    ],
    "explanation": "Le protocole explicite une hydrolyse chimique acide chauffée ; contrairement à une glycosidase, ce traitement n’est pas spécifique d’un seul anomère."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Composition, pouvoir réducteur et hydrolyse des diholosides : sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "Le lactose contient du galactose.",
        "correct": true,
        "explanation": "Le lactose associe un résidu de galactose à un résidu de glucose."
      },
      {
        "content": "Le saccharose contient du fructose.",
        "correct": true,
        "explanation": "Le saccharose associe un résidu de fructose à un résidu de glucose."
      },
      {
        "content": "Le maltose contient deux glucoses.",
        "correct": true,
        "explanation": "Le maltose est formé de deux résidus de glucose liés en α(1→4)."
      },
      {
        "content": "Le lactose est réducteur.",
        "correct": true,
        "explanation": "Le carbone anomérique du résidu de glucose reste libre et peut ouvrir son cycle."
      },
      {
        "content": "Le saccharose est non réducteur.",
        "correct": true,
        "explanation": "Les deux carbones anomériques sont engagés dans la liaison glucose–fructose."
      },
      {
        "content": "Le maltose est non réducteur.",
        "correct": false,
        "explanation": "Le maltose conserve un carbone anomérique libre et possède donc un pouvoir réducteur."
      },
      {
        "content": "La lactase hydrolyse le saccharose.",
        "correct": false,
        "explanation": "La lactase hydrolyse le lactose ; l’hydrolyse du saccharose fait intervenir une sucrase."
      },
      {
        "content": "Le saccharose libère du galactose.",
        "correct": false,
        "explanation": "L’hydrolyse du saccharose libère du glucose et du fructose, sans galactose."
      },
      {
        "content": "L’hydrolyse enzymatique est peu spécifique.",
        "correct": false,
        "explanation": "Les glycosidases reconnaissent précisément la nature et la géométrie de leurs substrats."
      },
      {
        "content": "La condensation consomme de l’eau.",
        "correct": false,
        "explanation": "Dans l’écriture formelle de la condensation, une molécule d’eau est éliminée et non consommée."
      }
    ],
    "explanation": "Cette question consolide composition, pouvoir réducteur et hydrolyse."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Après hydrolyse complète d’une molécule de lactose, sélectionnez exactement les deux résidus obtenus.",
    "choices": [
      {
        "content": "Glucose.",
        "correct": true,
        "explanation": "Le résidu situé à l’extrémité réductrice du lactose est un glucose."
      },
      {
        "content": "Galactose.",
        "correct": true,
        "explanation": "Le résidu de galactose fournit le carbone anomérique engagé dans la liaison β(1→4)."
      },
      {
        "content": "Fructose.",
        "correct": false,
        "explanation": "Le fructose entre dans la composition du saccharose, pas du lactose."
      },
      {
        "content": "Mannose.",
        "correct": false,
        "explanation": "Non présent dans le lactose."
      }
    ],
    "explanation": "Le lactose fournit un glucose et un galactose."
  }
];
