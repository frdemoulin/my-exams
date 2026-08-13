import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.2 – Section B – Isomérie géométrique E/Z
 */

export const UE14_CH6_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 21,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'isomérie géométrique autour d'une double liaison $\\ce{C=C}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La rotation libre autour de la double liaison est empêchée par la liaison $\\pi$.",
        "correct": true,
        "explanation": "La rotation nécessiterait de rompre le recouvrement π."
      },
      {
        "content": "Une disposition spatiale stable différente peut donc exister.",
        "correct": true,
        "explanation": "C'est l'origine de l'isomérie géométrique."
      },
      {
        "content": "Une simple rotation autour de la double liaison transforme librement E en Z.",
        "correct": false,
        "explanation": "La double liaison ne tourne pas librement."
      },
      {
        "content": "Toute double liaison donne obligatoirement deux isomères E/Z.",
        "correct": false,
        "explanation": "Chaque carbone de la double liaison doit porter deux substituants différents."
      }
    ],
    "explanation": "L'isomérie E/Z résulte de la rigidité de la double liaison et de la nature des substituants."
  },
  {
    "order": 22,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour qu'une double liaison puisse recevoir un descripteur E ou Z :",
    "choices": [
      {
        "content": "Chacun des deux carbones de la double liaison doit porter deux substituants différents.",
        "correct": true,
        "explanation": "C'est la condition d'existence de deux configurations géométriques."
      },
      {
        "content": "Les substituants prioritaires sont déterminés selon les règles CIP.",
        "correct": true,
        "explanation": "On compare séparément les deux côtés de la double liaison."
      },
      {
        "content": "Un carbone portant deux hydrogènes identiques permet malgré tout une configuration E/Z.",
        "correct": false,
        "explanation": "Deux substituants identiques suppriment l'isomérie géométrique sur ce carbone."
      },
      {
        "content": "La molécule doit nécessairement posséder un carbone asymétrique sp3.",
        "correct": false,
        "explanation": "E/Z et R/S sont des éléments stéréogènes différents."
      }
    ],
    "explanation": "L'existence de E/Z se décide d'abord sur la constitution de chaque carbone sp2."
  },
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans le descripteur Z, les substituants de plus haute priorité sur chacun des deux carbones de la double liaison sont :",
    "choices": [
      {
        "content": "Du même côté.",
        "correct": true,
        "explanation": "Z vient de l'allemand zusammen, « ensemble »."
      },
      {
        "content": "De côtés opposés.",
        "correct": false,
        "explanation": "Cela correspond à E."
      },
      {
        "content": "Toujours des hydrogènes.",
        "correct": false,
        "explanation": "Les priorités dépendent des substituants."
      },
      {
        "content": "Toujours des groupes méthyle.",
        "correct": false,
        "explanation": "Les règles CIP déterminent les priorités."
      }
    ],
    "explanation": "Z correspond à des groupes prioritaires situés du même côté de la double liaison."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans le descripteur E, les substituants de plus haute priorité sont :",
    "choices": [
      {
        "content": "De côtés opposés.",
        "correct": true,
        "explanation": "E vient de entgegen, « opposé »."
      },
      {
        "content": "Du même côté.",
        "correct": false,
        "explanation": "Cela correspond à Z."
      },
      {
        "content": "Toujours portés par des carbones asymétriques.",
        "correct": false,
        "explanation": "Aucun centre chiral n'est requis."
      },
      {
        "content": "Indifférents à la règle CIP.",
        "correct": false,
        "explanation": "La priorité CIP est indispensable."
      }
    ],
    "explanation": "E signifie que les deux substituants prioritaires sont opposés."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La figure suivante représente le Z-but-2-ène : ![Z-but-2-ène](/images/training/ue14/isomerie-enantiomerie/section-b-q05-z-but-2-ene.png)\n\nQuelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Chaque carbone de la double liaison porte un H et un groupe méthyle.",
        "correct": true,
        "explanation": "Les deux substituants sont différents sur chaque carbone."
      },
      {
        "content": "Le groupe méthyle est prioritaire sur H sur chaque carbone.",
        "correct": true,
        "explanation": "C a un numéro atomique supérieur à H."
      },
      {
        "content": "Les deux groupes prioritaires sont du même côté.",
        "correct": true,
        "explanation": "C'est la configuration Z."
      },
      {
        "content": "La configuration représentée est E.",
        "correct": false,
        "explanation": "Les groupes prioritaires ne sont pas opposés."
      }
    ],
    "explanation": "Le but-2-ène est le cas simple où la lecture cis/trans et E/Z conduit ici à Z."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La figure suivante représente le E-but-2-ène : ![E-but-2-ène](/images/training/ue14/isomerie-enantiomerie/section-b-q06-q07-e-but-2-ene.png)\n\nQuelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le groupe méthyle est prioritaire sur H de chaque côté.",
        "correct": true,
        "explanation": "C > H selon CIP."
      },
      {
        "content": "Les deux groupes prioritaires sont opposés.",
        "correct": true,
        "explanation": "C'est la configuration E."
      },
      {
        "content": "La molécule pourrait être transformée en Z par rotation libre autour de C=C.",
        "correct": false,
        "explanation": "La double liaison ne tourne pas librement."
      },
      {
        "content": "La double liaison ne présente aucune stéréoisomérie.",
        "correct": false,
        "explanation": "Les deux carbones portent des substituants différents."
      }
    ],
    "explanation": "La disposition opposée des groupes méthyle prioritaires conduit à E."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "L'éthène $\\ce{CH2=CH2}$ reçoit-il un descripteur E/Z ?",
    "choices": [
      {
        "content": "Non, car chaque carbone de la double liaison porte deux hydrogènes identiques.",
        "correct": true,
        "explanation": "La condition d'existence de l'isomérie géométrique n'est pas remplie."
      },
      {
        "content": "Oui, nécessairement E.",
        "correct": false,
        "explanation": "Il n'existe pas de deux configurations distinctes."
      },
      {
        "content": "Oui, nécessairement Z.",
        "correct": false,
        "explanation": "Même raison."
      },
      {
        "content": "Seulement si la température augmente.",
        "correct": false,
        "explanation": "La constitution ne change pas avec la température."
      }
    ],
    "explanation": "Deux substituants identiques sur un même carbone sp2 empêchent l'attribution E/Z."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Le propène $\\ce{CH3-CH=CH2}$ reçoit-il un descripteur E/Z ?",
    "choices": [
      {
        "content": "Non, car le carbone terminal $\\ce{CH2}$ porte deux hydrogènes.",
        "correct": true,
        "explanation": "Ce carbone ne porte pas deux substituants différents."
      },
      {
        "content": "Oui, car il possède une double liaison.",
        "correct": false,
        "explanation": "La double liaison seule ne suffit pas."
      },
      {
        "content": "Oui, uniquement sous forme Z.",
        "correct": false,
        "explanation": "E/Z n'est pas défini ici."
      },
      {
        "content": "Oui, uniquement sous forme E.",
        "correct": false,
        "explanation": "E/Z n'est pas défini ici."
      }
    ],
    "explanation": "Une double liaison terminale CH2= ne permet généralement pas une isomérie E/Z."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos du 1,2-dichloroéthène $\\ce{CHCl=CHCl}$ :",
    "choices": [
      {
        "content": "Chaque carbone porte H et Cl.",
        "correct": true,
        "explanation": "Deux substituants différents de chaque côté."
      },
      {
        "content": "Cl est prioritaire sur H.",
        "correct": true,
        "explanation": "Z(Cl)=17 > Z(H)=1."
      },
      {
        "content": "Deux configurations géométriques sont possibles.",
        "correct": true,
        "explanation": "Les conditions E/Z sont réunies."
      },
      {
        "content": "E/Z se déduit de la configuration R/S d'un carbone asymétrique.",
        "correct": false,
        "explanation": "Il n'y a pas ici de centre sp3 asymétrique."
      }
    ],
    "explanation": "Le 1,2-dichloroéthène constitue un autre exemple simple d'isomérie géométrique."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les descripteurs E/Z et R/S, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "E/Z décrit l'environnement d'une double liaison.",
        "correct": true,
        "explanation": "On compare les priorités de part et d'autre de C=C."
      },
      {
        "content": "R/S décrit la configuration absolue d'un centre stéréogène, typiquement un carbone sp3 asymétrique.",
        "correct": true,
        "explanation": "C'est une autre source de stéréoisomérie."
      },
      {
        "content": "Une même molécule peut porter à la fois un descripteur E/Z et un descripteur R/S.",
        "correct": true,
        "explanation": "Les deux éléments stéréogènes peuvent coexister."
      },
      {
        "content": "E signifie toujours R.",
        "correct": false,
        "explanation": "Il n'existe aucune correspondance de ce type."
      }
    ],
    "explanation": "E/Z et R/S sont deux systèmes de description indépendants."
  },
  {
    "order": 31,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On considère un alcène où, sur le carbone gauche, Br est opposé à $\\ce{CH3}$ et, sur le carbone droit, Cl est opposé à H. Br et Cl sont dessinés du même côté de la double liaison. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Br est prioritaire sur $\\ce{CH3}$.",
        "correct": true,
        "explanation": "Br est directement lié et possède un numéro atomique supérieur à C."
      },
      {
        "content": "Cl est prioritaire sur H.",
        "correct": true,
        "explanation": "Cl > H."
      },
      {
        "content": "Les deux groupes prioritaires sont du même côté.",
        "correct": true,
        "explanation": "Br et Cl sont du même côté."
      },
      {
        "content": "La configuration est Z.",
        "correct": true,
        "explanation": "Z = groupes prioritaires ensemble."
      }
    ],
    "explanation": "On attribue d'abord une priorité sur chaque carbone puis on compare la position des deux gagnants."
  },
  {
    "order": 32,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Même alcène que précédemment, mais Br et Cl sont dessinés de côtés opposés. La configuration est :",
    "choices": [
      {
        "content": "E.",
        "correct": true,
        "explanation": "Les deux groupes prioritaires sont opposés."
      },
      {
        "content": "Z.",
        "correct": false,
        "explanation": "Z correspondrait au même côté."
      },
      {
        "content": "R.",
        "correct": false,
        "explanation": "R/S ne décrit pas cette double liaison."
      },
      {
        "content": "Indéterminable malgré les informations données.",
        "correct": false,
        "explanation": "Les priorités et la géométrie sont précisées."
      }
    ],
    "explanation": "Avec Br et Cl prioritaires de côtés opposés, la double liaison est E."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des priorités CIP sur une double liaison :",
    "choices": [
      {
        "content": "On compare séparément les deux substituants portés par chaque carbone sp2.",
        "correct": true,
        "explanation": "Chaque côté fournit un groupe prioritaire."
      },
      {
        "content": "L'atome directement lié ayant le numéro atomique le plus élevé est prioritaire.",
        "correct": true,
        "explanation": "Première règle de comparaison."
      },
      {
        "content": "En cas d'égalité au premier atome, on poursuit la comparaison vers les atomes suivants.",
        "correct": true,
        "explanation": "On s'arrête au premier point de différence."
      },
      {
        "content": "On additionne simplement les masses molaires de tout le substituant.",
        "correct": false,
        "explanation": "Ce n'est pas la règle CIP."
      }
    ],
    "explanation": "Les mêmes principes de priorité servent pour E/Z et R/S."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Entre $\\ce{CH2OH}$ et $\\ce{CH3}$, quel groupe est prioritaire selon CIP ?",
    "choices": [
      {
        "content": "$\\ce{CH2OH}$.",
        "correct": true,
        "explanation": "Les premiers atomes sont C/C ; au niveau suivant O,H,H l'emporte sur H,H,H."
      },
      {
        "content": "$\\ce{CH3}$.",
        "correct": false,
        "explanation": "Il perd au premier point de différence."
      },
      {
        "content": "Ils ont toujours la même priorité.",
        "correct": false,
        "explanation": "La comparaison du niveau suivant les départage."
      },
      {
        "content": "La priorité dépend uniquement du nombre d'hydrogènes.",
        "correct": false,
        "explanation": "Elle dépend du numéro atomique au premier point de différence."
      }
    ],
    "explanation": "Après égalité sur C, la présence d'O dans CH2OH donne la priorité à ce groupe."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Entre $\\ce{CH2Cl}$ et $\\ce{CH2OH}$, quel groupe est prioritaire selon CIP ?",
    "choices": [
      {
        "content": "$\\ce{CH2Cl}$.",
        "correct": true,
        "explanation": "Après C/C, on compare Cl,H,H à O,H,H ; Cl (17) > O (8)."
      },
      {
        "content": "$\\ce{CH2OH}$.",
        "correct": false,
        "explanation": "O est moins prioritaire que Cl au point de différence."
      },
      {
        "content": "Ils sont équivalents.",
        "correct": false,
        "explanation": "Les atomes de rang suivant les départagent."
      },
      {
        "content": "Impossible à déterminer sans connaître R/S.",
        "correct": false,
        "explanation": "La priorité CIP suffit."
      }
    ],
    "explanation": "Le chlore du niveau suivant fait gagner CH2Cl."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Entre $\\ce{CH2OH}$ et $\\ce{CH2CH3}$, quel groupe est prioritaire ?",
    "choices": [
      {
        "content": "$\\ce{CH2OH}$.",
        "correct": true,
        "explanation": "Après C/C, O,H,H l'emporte sur C,H,H."
      },
      {
        "content": "$\\ce{CH2CH3}$.",
        "correct": false,
        "explanation": "C est moins prioritaire que O au premier point de différence."
      },
      {
        "content": "Ils ont la même priorité.",
        "correct": false,
        "explanation": "Le second niveau les distingue."
      },
      {
        "content": "La priorité dépend de la longueur totale de la chaîne.",
        "correct": false,
        "explanation": "On s'arrête au premier point de différence."
      }
    ],
    "explanation": "Le groupe portant O gagne avant que la longueur de chaîne ne devienne pertinente."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour un alcène $\\ce{C=C}$, quelles situations empêchent l'existence d'un couple E/Z ?",
    "choices": [
      {
        "content": "Un des carbones porte deux hydrogènes.",
        "correct": true,
        "explanation": "Deux substituants identiques."
      },
      {
        "content": "Un des carbones porte deux groupes méthyle identiques.",
        "correct": true,
        "explanation": "Même raison."
      },
      {
        "content": "Les deux carbones portent chacun deux substituants différents.",
        "correct": false,
        "explanation": "C'est au contraire la condition favorable."
      },
      {
        "content": "La double liaison est interne.",
        "correct": false,
        "explanation": "Une double liaison interne peut parfaitement présenter E/Z."
      }
    ],
    "explanation": "Il suffit qu'un seul des deux carbones porte deux substituants identiques pour perdre E/Z."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Une molécule possède une seule double liaison pouvant exister sous forme E ou Z et aucun autre élément stéréogène. Combien de stéréoisomères géométriques sont possibles ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Une double liaison stéréogène indépendante donne deux configurations : E et Z."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Une molécule possède deux doubles liaisons indépendantes, chacune pouvant être E ou Z, sans symétrie réduisant le nombre de formes. Combien de configurations géométriques maximales sont possibles ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "Chaque double liaison apporte deux possibilités : $2\\times2=4$."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule comporte une double liaison E/Z et un carbone asymétrique. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les deux éléments stéréogènes se décrivent indépendamment.",
        "correct": true,
        "explanation": "On attribue E/Z d'un côté et R/S de l'autre."
      },
      {
        "content": "Elle peut porter simultanément deux descripteurs stéréochimiques.",
        "correct": true,
        "explanation": "Par exemple (E,R)."
      },
      {
        "content": "Changer E en Z change automatiquement R en S.",
        "correct": false,
        "explanation": "Les deux configurations sont indépendantes."
      },
      {
        "content": "La présence du carbone asymétrique supprime l'isomérie géométrique.",
        "correct": false,
        "explanation": "Les deux phénomènes peuvent coexister."
      }
    ],
    "explanation": "Une même molécule peut cumuler plusieurs sources de stéréoisomérie."
  },
  {
    "order": 123,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix alcènes suivants, sélectionnez exactement les cinq pour lesquels une configuration E/Z est possible.",
    "choices": [
      {
        "content": "$\\ce{CHCl=CHCl}$.",
        "correct": true,
        "explanation": "Chaque carbone porte H et Cl."
      },
      {
        "content": "$\\ce{CHBr=CHCH3}$.",
        "correct": true,
        "explanation": "Chaque carbone porte deux substituants différents."
      },
      {
        "content": "$\\ce{CH3CH=CHCH3}$.",
        "correct": true,
        "explanation": "But-2-ène."
      },
      {
        "content": "$\\ce{CH3CH=C(Cl)CH2OH}$.",
        "correct": true,
        "explanation": "Deux substituants différents sur chaque carbone."
      },
      {
        "content": "$\\ce{ClC(CH3)=C(H)Br}$.",
        "correct": true,
        "explanation": "Deux substituants différents sur chaque carbone."
      },
      {
        "content": "$\\ce{CH2=CH2}$.",
        "correct": false,
        "explanation": "Deux H sur chaque carbone."
      },
      {
        "content": "$\\ce{CH3CH=CH2}$.",
        "correct": false,
        "explanation": "Le carbone terminal porte deux H."
      },
      {
        "content": "$\\ce{(CH3)2C=CHCl}$.",
        "correct": false,
        "explanation": "Le carbone gauche porte deux CH3."
      },
      {
        "content": "$\\ce{CH2=CCl2}$.",
        "correct": false,
        "explanation": "Le carbone gauche porte deux H."
      },
      {
        "content": "$\\ce{CH2=C(CH3)CH2OH}$.",
        "correct": false,
        "explanation": "Le carbone CH2 porte deux H."
      }
    ],
    "explanation": "Il faut examiner séparément chacun des deux carbones sp2 : deux substituants différents sont requis de chaque côté."
  },
  {
    "order": 124,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Trois doubles liaisons indépendantes peuvent chacune être E ou Z, sans symétrie ni autre contrainte. Quel est le nombre maximal de combinaisons E/Z ?",
    "answer": {
      "type": "number",
      "value": 8,
      "tolerance": 0
    },
    "explanation": "Chaque double liaison apporte deux possibilités : $2^3=8$."
  }
];
