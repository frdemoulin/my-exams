import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie — Chapitre 1.3 — Les osides — Section B
 * Banque éditoriale auteur — à intégrer via le helper partagé du repo.
 */

export const UE14_BIOCH_CH3_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les polyosides ou glycanes :",
    "choices": [
      {
        "content": "Résultent de la polymérisation d’un grand nombre d’oses ou dérivés.",
        "correct": true,
        "explanation": "Un polyoside est formé par l’enchaînement d’un grand nombre de résidus monosaccharidiques."
      },
      {
        "content": "Peuvent avoir un rôle structural.",
        "correct": true,
        "explanation": "La cellulose contribue par exemple à la résistance mécanique de la paroi végétale."
      },
      {
        "content": "Peuvent avoir un rôle de réserve.",
        "correct": true,
        "explanation": "L’amidon stocke du glucose chez les végétaux et le glycogène chez les animaux."
      },
      {
        "content": "Sont toujours hétérogènes.",
        "correct": false,
        "explanation": "L’amidon, le glycogène et la cellulose sont des homoglycanes constitués uniquement de résidus de glucose."
      }
    ],
    "explanation": "Les polyosides peuvent être structuraux ou de réserve."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans un modèle simplifié où l’amidon contient environ 20 % d’amylose et 80 % d’amylopectine :",
    "choices": [
      {
        "content": "Environ 20 % d’amylose.",
        "correct": true,
        "explanation": "La proportion d’amylose est fournie directement par le modèle de l’énoncé."
      },
      {
        "content": "Environ 80 % d’amylopectine.",
        "correct": true,
        "explanation": "La proportion d’amylopectine est fournie directement par le modèle de l’énoncé."
      },
      {
        "content": "Une fraction linéaire et une fraction ramifiée.",
        "correct": true,
        "explanation": "L’amylose est essentiellement linéaire, tandis que l’amylopectine possède des embranchements."
      },
      {
        "content": "Environ 80 % de cellulose.",
        "correct": false,
        "explanation": "La cellulose est un autre polyoside."
      }
    ],
    "explanation": "L’amidon associe amylose minoritaire et amylopectine majoritaire."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L’amylose :",
    "choices": [
      {
        "content": "Est une chaîne linéaire de glucose.",
        "correct": true,
        "explanation": "L’amylose est constituée principalement d’une seule chaîne de résidus de glucose."
      },
      {
        "content": "Utilise des liaisons α(1→4).",
        "correct": true,
        "explanation": "Le carbone anomérique C1 d’un glucose est lié au C4 du résidu suivant dans une configuration α."
      },
      {
        "content": "Adopte un enroulement hélicoïdal.",
        "correct": true,
        "explanation": "Les liaisons α(1→4) favorisent une conformation hélicoïdale de la chaîne."
      },
      {
        "content": "Présente un embranchement α(1→6) tous les six glucoses.",
        "correct": false,
        "explanation": "L’amylose est essentiellement linéaire ; les embranchements α(1→6) caractérisent surtout l’amylopectine."
      }
    ],
    "explanation": "L’amylose est la fraction linéaire α1→4 de l’amidon."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L’amylopectine :",
    "choices": [
      {
        "content": "Est ramifiée.",
        "correct": true,
        "explanation": "L’amylopectine possède des chaînes reliées entre elles par des points de branchement."
      },
      {
        "content": "Utilise des liaisons α(1→4) dans les chaînes.",
        "correct": true,
        "explanation": "Les résidus successifs de chaque segment linéaire sont reliés en α(1→4)."
      },
      {
        "content": "Utilise des liaisons α(1→6) aux embranchements.",
        "correct": true,
        "explanation": "Un point de branchement relie le C1 anomérique d’un glucose au C6 d’un autre résidu."
      },
      {
        "content": "Est moins abondante que l’amylose dans l’amidon.",
        "correct": false,
        "explanation": "Dans le modèle simplifié usuel, l’amylopectine est majoritaire et représente environ 80 % de l’amidon."
      }
    ],
    "explanation": "L’amylopectine est la fraction ramifiée majoritaire de l’amidon."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel polyoside est la réserve glucidique des végétaux ?",
    "choices": [
      {
        "content": "Amidon.",
        "correct": true,
        "explanation": "Les végétaux stockent du glucose sous forme de grains d’amidon."
      },
      {
        "content": "Glycogène.",
        "correct": false,
        "explanation": "Le glycogène constitue principalement une forme de réserve glucidique chez les animaux et les champignons."
      },
      {
        "content": "Cellulose.",
        "correct": false,
        "explanation": "La cellulose est un constituant structural de la paroi végétale, pas un polymère de réserve."
      },
      {
        "content": "Acide hyaluronique.",
        "correct": false,
        "explanation": "L’acide hyaluronique est un glycosaminoglycane de la matrice extracellulaire animale."
      }
    ],
    "explanation": "L’amidon constitue la réserve glucidique végétale."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L’amidon :",
    "choices": [
      {
        "content": "Est synthétisé dans les amyloplastes.",
        "correct": true,
        "explanation": "L’amidon de réserve s’accumule notamment dans des plastes spécialisés appelés amyloplastes ; un amidon transitoire est aussi synthétisé dans les chloroplastes."
      },
      {
        "content": "Est retrouvé dans les céréales et féculents.",
        "correct": true,
        "explanation": "Les grains de céréales, les pommes de terre et les légumineuses constituent des sources alimentaires importantes d’amidon."
      },
      {
        "content": "Est hydrophile mais insoluble dans l’eau froide.",
        "correct": true,
        "explanation": "Ses hydroxyles interagissent avec l’eau, mais l’organisation semi-cristalline des granules limite leur dissolution dans l’eau froide."
      },
      {
        "content": "Est la réserve principale des cellules animales.",
        "correct": false,
        "explanation": "Cette fonction revient au glycogène."
      }
    ],
    "explanation": "L’amidon est un glucane végétal de réserve et un apport alimentaire majeur."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quand l’amidon est chauffé en présence d’eau :",
    "choices": [
      {
        "content": "Les granules absorbent de l’eau et peuvent gonfler.",
        "correct": true,
        "explanation": "La chaleur désorganise progressivement les structures des granules et permet une hydratation accrue."
      },
      {
        "content": "Une partie de l’amylose peut diffuser hors des granules.",
        "correct": true,
        "explanation": "Pendant la gélatinisation, le gonflement des granules peut s’accompagner d’une libération d’amylose dans la phase aqueuse."
      },
      {
        "content": "La viscosité du milieu peut augmenter.",
        "correct": true,
        "explanation": "Le gonflement des granules et la présence de polymères hydratés épaississent la préparation ; un gel peut ensuite se structurer lors du refroidissement."
      },
      {
        "content": "L’amidon devient automatiquement une protéine.",
        "correct": false,
        "explanation": "Sa nature glucidique ne change pas."
      }
    ],
    "explanation": "Le chauffage de l’amidon en présence d’eau provoque sa gélatinisation : les granules gonflent, perdent une partie de leur organisation et augmentent la viscosité du milieu."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La digestion de l’amidon fait intervenir :",
    "choices": [
      {
        "content": "Des α-amylases.",
        "correct": true,
        "explanation": "Les α-amylases salivaire et pancréatique hydrolysent des liaisons α(1→4) internes de l’amidon."
      },
      {
        "content": "Une activité α(1→6)-glucosidase débranchante.",
        "correct": true,
        "explanation": "Les points de branchement α(1→6) des dextrines limites nécessitent une activité débranchante de la bordure en brosse."
      },
      {
        "content": "Du maltose parmi les produits/intermédiaires.",
        "correct": true,
        "explanation": "L’action des α-amylases sur les segments α(1→4) produit notamment du maltose, du maltotriose et des dextrines limites."
      },
      {
        "content": "Uniquement une β-glucosidase humaine.",
        "correct": false,
        "explanation": "La digestion de l’amidon repose sur des enzymes reconnaissant les liaisons α ; l’être humain ne digère pas la cellulose β(1→4)."
      }
    ],
    "explanation": "Les liaisons α1→4 et α1→6 imposent des activités enzymatiques complémentaires."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le glycogène :",
    "choices": [
      {
        "content": "Est un polyoside de réserve des cellules animales.",
        "correct": true,
        "explanation": "Le glycogène permet de stocker dans le cytosol des résidus de glucose rapidement mobilisables."
      },
      {
        "content": "Est particulièrement abondant dans le muscle et le foie.",
        "correct": true,
        "explanation": "Le foie utilise notamment le glycogène pour contribuer au maintien de la glycémie, tandis que le muscle l’utilise pour ses propres besoins énergétiques."
      },
      {
        "content": "Dans le cerveau adulte, est stocké principalement dans les astrocytes plutôt que dans les neurones.",
        "correct": true,
        "explanation": "Le glycogène cérébral est surtout localisé dans les astrocytes ; les neurones adultes en contiennent des quantités beaucoup plus faibles."
      },
      {
        "content": "Est la réserve glucidique des végétaux.",
        "correct": false,
        "explanation": "L’amidon, et non le glycogène, constitue la principale réserve glucidique des végétaux."
      }
    ],
    "explanation": "Le glycogène est la réserve animale, notamment hépatique et musculaire."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L’organisation du glycogène :",
    "choices": [
      {
        "content": "Est fortement ramifiée.",
        "correct": true,
        "explanation": "Ses chaînes α(1→4) comportent de nombreux points de branchement α(1→6)."
      },
      {
        "content": "Est proche de celle de l’amylopectine.",
        "correct": true,
        "explanation": "Les deux polymères associent des segments α(1→4) à des embranchements α(1→6), mais le glycogène est plus densément ramifié."
      },
      {
        "content": "S’appuie sur une protéine appelée glycogénine.",
        "correct": true,
        "explanation": "La glycogénine s’autoglycosyle et fournit l’amorce à partir de laquelle la particule de glycogène est allongée."
      },
      {
        "content": "Est entièrement linéaire comme l’amylose.",
        "correct": false,
        "explanation": "Le glycogène est ramifié."
      }
    ],
    "explanation": "Le glycogène est un glucane ramifié organisé autour de la glycogénine."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un aliment riche en amidon apporte un mélange dans lequel :",
    "choices": [
      {
        "content": "L’amylopectine est majoritaire.",
        "correct": true,
        "explanation": "Dans le modèle simplifié usuel, l’amylopectine représente environ 80 % de l’amidon."
      },
      {
        "content": "L’amylose représente environ 20 %.",
        "correct": true,
        "explanation": "Dans ce même modèle simplifié, l’amylose constitue la fraction minoritaire d’environ 20 %."
      },
      {
        "content": "Les deux fractions sont constituées de glucose.",
        "correct": true,
        "explanation": "L’amylose et l’amylopectine sont toutes deux des polymères de résidus de glucose."
      },
      {
        "content": "La cellulose constitue la majorité de l’amidon.",
        "correct": false,
        "explanation": "Elle n’appartient pas à l’amidon."
      }
    ],
    "explanation": "La composition de l’amidon relie alimentation et structure moléculaire."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une sauce riche en amidon épaissit lorsqu’elle est chauffée en présence d’eau. Ce phénomène implique :",
    "choices": [
      {
        "content": "Le gonflement et la désorganisation des granules d’amidon.",
        "correct": true,
        "explanation": "La chaleur facilite l’entrée d’eau dans les granules et perturbe leur organisation semi-cristalline."
      },
      {
        "content": "L’hydratation des polymères et une augmentation de la viscosité.",
        "correct": true,
        "explanation": "Les granules gonflés et les chaînes libérées immobilisent une partie de l’eau et épaississent le milieu."
      },
      {
        "content": "La formation d’un empois d’amidon.",
        "correct": true,
        "explanation": "La dispersion visqueuse obtenue après gélatinisation est appelée empois ; un gel peut ensuite se structurer au refroidissement."
      },
      {
        "content": "La conversion obligatoire en glycogène.",
        "correct": false,
        "explanation": "C’est un phénomène physique."
      }
    ],
    "explanation": "L’épaississement résulte de la gélatinisation de l’amidon : les granules s’hydratent, gonflent et perdent une partie de leur organisation."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une enzyme digestive coupe les embranchements α(1→6) de l’amidon. Elle correspond à :",
    "choices": [
      {
        "content": "Une activité débranchante.",
        "correct": true,
        "explanation": "Une enzyme débranchante hydrolyse les liaisons situées aux points de branchement."
      },
      {
        "content": "Une α(1→6)-glucosidase.",
        "correct": true,
        "explanation": "Cette activité reconnaît et hydrolyse les liaisons glycosidiques α(1→6)."
      },
      {
        "content": "Une activité utile sur l’amylopectine.",
        "correct": true,
        "explanation": "L’amylopectine comporte des points de branchement α(1→6) que les α-amylases seules ne suppriment pas."
      },
      {
        "content": "Une β-galactosidase du lactose.",
        "correct": false,
        "explanation": "La β-galactosidase hydrolyse la liaison du lactose et ne constitue pas l’activité débranchante de l’amidon."
      }
    ],
    "explanation": "Les liaisons α1→6 nécessitent une activité débranchante adaptée."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans un modèle simplifié où l’amidon contient 20 % d’amylose et le complément en amylopectine, quel pourcentage correspond à l’amylopectine ?",
    "answer": {
      "type": "number",
      "value": 80,
      "tolerance": 0
    },
    "explanation": "L’amylopectine représente 100 % − 20 % = 80 % dans le modèle fourni. Les proportions réelles varient selon l’origine botanique de l’amidon."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans une liaison de branchement α(1→6) de l’amylopectine, quel numéro porte le carbone du résidu accepteur engagé dans la liaison ?",
    "answer": {
      "type": "number",
      "value": 6,
      "tolerance": 0
    },
    "explanation": "Dans une liaison α(1→6), le carbone anomérique C1 d’un glucose est relié au carbone C6 du résidu accepteur. La valeur 6 décrit une position de liaison, pas une fréquence d’embranchement."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans une cellule musculaire, une réserve glucidique importante est attendue sous forme de :",
    "choices": [
      {
        "content": "Glycogène.",
        "correct": true,
        "explanation": "Le muscle stocke du glycogène qu’il peut mobiliser pour répondre à ses propres besoins énergétiques."
      },
      {
        "content": "Glucane ramifié.",
        "correct": true,
        "explanation": "Le glycogène possède des chaînes α(1→4) reliées par de nombreux embranchements α(1→6)."
      },
      {
        "content": "Polymère associé à la glycogénine.",
        "correct": true,
        "explanation": "La glycogénine fournit l’amorce protéique au centre de la particule de glycogène."
      },
      {
        "content": "Cellulose.",
        "correct": false,
        "explanation": "La cellulose est un glucane structural de la paroi végétale et n’est pas une réserve musculaire."
      }
    ],
    "explanation": "Le contexte musculaire renvoie directement au glycogène."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le glycogène du cerveau adulte :",
    "choices": [
      {
        "content": "Il est globalement peu abondant par rapport aux réserves hépatiques et musculaires.",
        "correct": true,
        "explanation": "Le cerveau contient une réserve de glycogène limitée comparativement au foie et au muscle."
      },
      {
        "content": "Il est stocké principalement dans les astrocytes.",
        "correct": true,
        "explanation": "Dans le cerveau adulte, le glycogène est majoritairement localisé dans les astrocytes ; les neurones en contiennent beaucoup moins."
      },
      {
        "content": "Il reste un polymère de glucose.",
        "correct": true,
        "explanation": "Comme le glycogène des autres tissus, le glycogène cérébral est un glucane ramifié."
      },
      {
        "content": "La réserve végétale dominante.",
        "correct": false,
        "explanation": "La réserve glucidique des végétaux est l’amidon ; le glycogène est notamment stocké dans les tissus animaux."
      }
    ],
    "explanation": "Le glycogène cérébral constitue une réserve limitée et principalement astrocytaire, très inférieure aux stocks du foie et du muscle."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Comparer amylopectine et glycogène :",
    "choices": [
      {
        "content": "Les deux sont ramifiés.",
        "correct": true,
        "explanation": "L’amylopectine et le glycogène comportent tous deux des points de branchement."
      },
      {
        "content": "Les deux utilisent α(1→4) dans les chaînes.",
        "correct": true,
        "explanation": "Leurs segments linéaires sont constitués de résidus de glucose liés en α(1→4)."
      },
      {
        "content": "Les embranchements utilisent α(1→6).",
        "correct": true,
        "explanation": "Dans les deux polymères, le carbone C6 d’un résidu accepteur participe au point de branchement."
      },
      {
        "content": "Le glycogène est la réserve végétale.",
        "correct": false,
        "explanation": "Le glycogène est une réserve glucidique animale, tandis que l’amidon est la réserve végétale."
      }
    ],
    "explanation": "Les deux glucanes partagent un type d’architecture mais diffèrent par leur contexte biologique."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Les embranchements du glycogène :",
    "choices": [
      {
        "content": "Sont espacés en moyenne d’environ 8 à 12 résidus de glucose.",
        "correct": true,
        "explanation": "Le glycogène possède des chaînes plus courtes et des branchements plus fréquents que l’amylopectine."
      },
      {
        "content": "Créent de nombreuses extrémités non réductrices.",
        "correct": true,
        "explanation": "Chaque nouvelle branche ajoute une extrémité non réductrice accessible aux enzymes de synthèse ou de dégradation."
      },
      {
        "content": "Contribuent à une architecture très ramifiée.",
        "correct": true,
        "explanation": "La répétition des liaisons α(1→6) produit une particule compacte comportant de nombreuses chaînes courtes."
      },
      {
        "content": "Sont exclusivement β(1→4).",
        "correct": false,
        "explanation": "Les points de branchement sont des liaisons α(1→6), tandis que les segments linéaires sont en α(1→4)."
      }
    ],
    "explanation": "Le glycogène est dense et très ramifié."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment s’appelle la protéine sur laquelle se fixent les chaînes de glycogène ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glycogenine",
        "glycogénine",
        "la glycogénine",
        "la glycogenine"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "La glycogénine s’autoglycosyle sur un résidu de tyrosine et forme l’amorce protéique à partir de laquelle le glycogène est synthétisé."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux polyosides ayant un rôle majeur de réserve glucidique.",
    "choices": [
      {
        "content": "Amidon.",
        "correct": true,
        "explanation": "L’amidon est la principale forme de stockage glucidique des végétaux."
      },
      {
        "content": "Glycogène.",
        "correct": true,
        "explanation": "Le glycogène est la principale forme de stockage glucidique des animaux."
      },
      {
        "content": "Cellulose.",
        "correct": false,
        "explanation": "La cellulose est un constituant structural de la paroi végétale."
      },
      {
        "content": "Acide hyaluronique.",
        "correct": false,
        "explanation": "L’acide hyaluronique est un glycosaminoglycane de la matrice extracellulaire."
      }
    ],
    "explanation": "Amidon et glycogène sont les deux glucanes de réserve."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Amidon et glycogène : sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "L’amylose est linéaire.",
        "correct": true,
        "explanation": "L’amylose est constituée principalement d’une chaîne non ramifiée de glucoses liés en α(1→4)."
      },
      {
        "content": "L’amylopectine est ramifiée.",
        "correct": true,
        "explanation": "Ses segments α(1→4) sont reliés par des points de branchement α(1→6)."
      },
      {
        "content": "Le glycogène est une réserve animale.",
        "correct": true,
        "explanation": "Le foie et le muscle stockent notamment du glucose sous forme de glycogène."
      },
      {
        "content": "La glycogénine sert d’amorce protéique à la synthèse du glycogène.",
        "correct": true,
        "explanation": "La glycogénine s’autoglycosyle et initie la formation de la particule de glycogène."
      },
      {
        "content": "L’amidon est hydrophile et insoluble dans l’eau froide.",
        "correct": true,
        "explanation": "Les hydroxyles rendent l’amidon hydrophile, mais l’organisation des granules limite sa dissolution à froid."
      },
      {
        "content": "L’amylose porte des embranchements α1→6 tous les six glucoses.",
        "correct": false,
        "explanation": "L’amylose est essentiellement linéaire ; l’amylopectine porte les embranchements α(1→6)."
      },
      {
        "content": "Le glycogène est surtout végétal.",
        "correct": false,
        "explanation": "Le glycogène est notamment la réserve glucidique animale ; les végétaux stockent principalement l’amidon."
      },
      {
        "content": "La cellulose est une fraction de l’amidon.",
        "correct": false,
        "explanation": "La cellulose est un glucane structural β(1→4), distinct de l’amidon."
      },
      {
        "content": "L’amidon ne peut pas former de gel.",
        "correct": false,
        "explanation": "Il peut gélifier au chauffage."
      },
      {
        "content": "L’amylopectine représente environ 20 % de l’amidon.",
        "correct": false,
        "explanation": "Dans le modèle simplifié usuel, l’amylopectine représente environ 80 % et l’amylose environ 20 %."
      }
    ],
    "explanation": "Cette QRPL consolide structure, réserve et propriétés des glucanes."
  }
];
