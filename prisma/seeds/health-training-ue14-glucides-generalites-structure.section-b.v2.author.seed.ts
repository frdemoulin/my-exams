import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie – Chapitre 1.1 – Section B – Chiralité, représentations et filiation
 */

export const UE14_BIOCH_CH1_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Un carbone asymétrique, noté $\\mathrm{C^*}$ :",
    "choices": [
      {
        "content": "Est lié à quatre substituants différents.",
        "correct": true,
        "explanation": "Par définition, ses quatre substituants ne sont pas identiques."
      },
      {
        "content": "Constitue un centre de chiralité.",
        "correct": true,
        "explanation": "Un carbone tétraédrique portant quatre substituants différents est un centre stéréogène."
      },
      {
        "content": "Doit être lié à quatre atomes de carbone.",
        "correct": false,
        "explanation": "Les quatre substituants doivent être différents, pas nécessairement carbonés."
      },
      {
        "content": "Peut contribuer à rendre une molécule chirale.",
        "correct": true,
        "explanation": "Un ou plusieurs C* peuvent rendre la molécule chirale."
      }
    ],
    "explanation": "Le carbone asymétrique est un carbone tétraédrique portant quatre substituants différents."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos du glycéraldéhyde $\\mathrm{C_3H_6O_3}$ :",
    "choices": [
      {
        "content": "Il possède un carbone asymétrique.",
        "correct": true,
        "explanation": "Le carbone central porte quatre substituants différents."
      },
      {
        "content": "Il est chiral.",
        "correct": true,
        "explanation": "Son unique carbone asymétrique donne deux énantiomères non superposables."
      },
      {
        "content": "Il ne possède aucun centre de chiralité.",
        "correct": false,
        "explanation": "Il en possède un."
      },
      {
        "content": "Il n'est pas superposable à son image dans le miroir.",
        "correct": true,
        "explanation": "La non-superposabilité à l'image miroir caractérise la chiralité."
      }
    ],
    "explanation": "Le glycéraldéhyde est le plus simple des aldoses chiraux."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la dihydroxyacétone $\\mathrm{C_3H_6O_3}$ :",
    "choices": [
      {
        "content": "Elle ne possède aucun carbone asymétrique.",
        "correct": true,
        "explanation": "Son carbone carbonylé est trigonal et ses deux extrémités sont identiques."
      },
      {
        "content": "Elle est achirale.",
        "correct": true,
        "explanation": "L'absence de centre stéréogène rend la dihydroxyacétone achirale."
      },
      {
        "content": "Elle possède le même nombre de C* que le glycéraldéhyde.",
        "correct": false,
        "explanation": "Le glycéraldéhyde en possède un, elle aucun."
      },
      {
        "content": "Elle est un cétose.",
        "correct": true,
        "explanation": "Sa fonction carbonyle est une cétone."
      }
    ],
    "explanation": "La dihydroxyacétone sert de contre-exemple achiral au glycéraldéhyde."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une molécule chirale :",
    "choices": [
      {
        "content": "N'est pas superposable à son image dans un miroir.",
        "correct": true,
        "explanation": "La non-superposabilité à l'image miroir est le critère de chiralité."
      },
      {
        "content": "Ne possède pas de plan de symétrie.",
        "correct": true,
        "explanation": "Un plan de symétrie rendrait la molécule achirale."
      },
      {
        "content": "Est nécessairement identique à son image miroir.",
        "correct": false,
        "explanation": "C'est précisément l'inverse."
      },
      {
        "content": "Peut posséder un ou plusieurs carbones asymétriques.",
        "correct": true,
        "explanation": "Un ou plusieurs centres stéréogènes peuvent être à l'origine de la chiralité."
      }
    ],
    "explanation": "La chiralité traduit une dissymétrie spatiale de la molécule."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "En appliquant les règles de Cahn–Ingold–Prelog au carbone asymétrique du glycéraldéhyde, quel ordre de priorité obtient-on ?",
    "choices": [
      {
        "content": "$\\mathrm{OH > CHO > CH_2OH > H}$.",
        "correct": true,
        "explanation": "L'oxygène de OH est prioritaire ; entre les deux carbones, CHO précède CH2OH."
      },
      {
        "content": "$\\mathrm{H > OH > CHO > CH_2OH}$.",
        "correct": false,
        "explanation": "Ordre inverse incorrect."
      },
      {
        "content": "OH est prioritaire sur H.",
        "correct": true,
        "explanation": "Conséquence directe de l'ordre."
      },
      {
        "content": "H est le substituant de priorité la plus faible.",
        "correct": true,
        "explanation": "Il est placé en dernier."
      }
    ],
    "explanation": "Les règles de Cahn–Ingold–Prelog conduisent à l'ordre OH > CHO > CH2OH > H."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la nomenclature R/S appliquée aux oses :",
    "choices": [
      {
        "content": "Elle peut être déterminée pour chaque carbone asymétrique.",
        "correct": true,
        "explanation": "Chaque centre stéréogène peut recevoir son propre descripteur R ou S."
      },
      {
        "content": "Elle décrit précisément la configuration absolue de chaque centre stéréogène.",
        "correct": true,
        "explanation": "Les descripteurs R/S reposent sur les priorités de Cahn–Ingold–Prelog."
      },
      {
        "content": "Elle devient moins synthétique lorsqu'une molécule possède de nombreux centres stéréogènes.",
        "correct": true,
        "explanation": "Une suite de descripteurs R/S est complète, mais moins concise que la notation D/L usuelle des oses."
      },
      {
        "content": "Elle remplace totalement la notation D/L pour les oses.",
        "correct": false,
        "explanation": "Les notations R/S et D/L répondent à des conventions distinctes et restent toutes deux utilisées."
      }
    ],
    "explanation": "R/S décrit chaque centre stéréogène ; D/L fournit une notation relative concise, particulièrement courante pour les oses."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans une projection de Fischer d'un ose, quel carbone asymétrique est surtout utilisé pour déterminer la série D/L ?",
    "choices": [
      {
        "content": "Le dernier carbone asymétrique, c'est-à-dire l'avant-dernier carbone de la molécule.",
        "correct": true,
        "explanation": "La série D/L dépend de la configuration du centre stéréogène le plus éloigné du carbonyle."
      },
      {
        "content": "Toujours le carbone C1.",
        "correct": false,
        "explanation": "C1 est souvent carbonylé chez les aldoses."
      },
      {
        "content": "Toujours le premier carbone asymétrique.",
        "correct": false,
        "explanation": "La série dépend du dernier C*."
      },
      {
        "content": "Le carbone carbonylé uniquement.",
        "correct": false,
        "explanation": "Ce n'est pas le critère."
      }
    ],
    "explanation": "La série D/L se lit sur le dernier C* de la projection de Fischer."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour attribuer la série D ou L d'un ose représenté en projection de Fischer :",
    "choices": [
      {
        "content": "Série D : OH du dernier C* à droite.",
        "correct": true,
        "explanation": "Le groupe OH du dernier carbone asymétrique est placé à droite."
      },
      {
        "content": "Série L : OH du dernier C* à gauche.",
        "correct": true,
        "explanation": "Le groupe OH du dernier carbone asymétrique est placé à gauche."
      },
      {
        "content": "D signifie obligatoirement dextrogyre (+).",
        "correct": false,
        "explanation": "La notation D/L décrit une configuration et ne prédit pas le sens de rotation optique."
      },
      {
        "content": "L signifie obligatoirement lévogyre (−).",
        "correct": false,
        "explanation": "Même piège."
      }
    ],
    "explanation": "La position du OH du dernier carbone asymétrique détermine D ou L, pas le signe du pouvoir rotatoire."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour le dernier carbone asymétrique d'un ose linéaire usuel représenté en projection de Fischer :",
    "choices": [
      {
        "content": "La série D correspond à une configuration R de ce carbone.",
        "correct": true,
        "explanation": "À ce carbone de référence, OH est à droite en Fischer et la configuration est R."
      },
      {
        "content": "La série L correspond à une configuration S de ce carbone.",
        "correct": true,
        "explanation": "À ce carbone de référence, OH est à gauche en Fischer et la configuration est S."
      },
      {
        "content": "D place le OH à droite en Fischer.",
        "correct": true,
        "explanation": "Critère graphique."
      },
      {
        "content": "L place le OH à droite.",
        "correct": false,
        "explanation": "L le place à gauche."
      }
    ],
    "explanation": "Cette correspondance R/S concerne le carbone asymétrique de référence ; la notation D/L ne décrit pas les autres centres stéréogènes."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la distribution biologique des séries D/L :",
    "choices": [
      {
        "content": "La grande majorité des oses naturels sont de série D.",
        "correct": true,
        "explanation": "Les oses de série D prédominent dans le vivant."
      },
      {
        "content": "Des oses de série L sont rencontrés chez des bactéries et des virus.",
        "correct": true,
        "explanation": "La prédominance de la série D n'exclut pas l'existence d'oses de série L."
      },
      {
        "content": "Le L-fucose est présent chez l'être humain.",
        "correct": true,
        "explanation": "Le L-fucose est notamment présent dans des glycoconjugués humains."
      },
      {
        "content": "L'acide L-iduronique est présent chez l'être humain.",
        "correct": true,
        "explanation": "L'acide L-iduronique entre dans la structure de certains glycosaminoglycanes."
      }
    ],
    "explanation": "Bien que les oses naturels soient majoritairement de série D, le L-fucose et l'acide L-iduronique illustrent la présence de composés de série L chez l'être humain."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du L-fucose et de l'acide L-iduronique :",
    "choices": [
      {
        "content": "Le L-fucose est associé aux glycoprotéines et glycolipides.",
        "correct": true,
        "explanation": "Le L-fucose est un constituant de nombreux glycoconjugués."
      },
      {
        "content": "L'acide L-iduronique est associé aux glycosaminoglycanes.",
        "correct": true,
        "explanation": "L'acide L-iduronique est un constituant de plusieurs glycosaminoglycanes."
      },
      {
        "content": "Ils illustrent des formes L présentes chez l'Homme.",
        "correct": true,
        "explanation": "Ces deux composés montrent que la série L existe aussi chez l'être humain."
      },
      {
        "content": "Ils prouvent que toutes les formes humaines sont L.",
        "correct": false,
        "explanation": "La grande majorité est D."
      }
    ],
    "explanation": "Ces deux molécules sont des exceptions à la prédominance des séries D."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour déterminer la série d'un ose en Fischer, quelle démarche est correcte ?",
    "choices": [
      {
        "content": "Repérer le dernier carbone asymétrique.",
        "correct": true,
        "explanation": "Étape principale."
      },
      {
        "content": "Observer la position de son groupe OH.",
        "correct": true,
        "explanation": "Droite ou gauche."
      },
      {
        "content": "OH à droite → série D.",
        "correct": true,
        "explanation": "Cette position définit la série D dans une projection de Fischer conventionnelle."
      },
      {
        "content": "Utiliser le signe (+/−) du pouvoir rotatoire à la place.",
        "correct": false,
        "explanation": "D/L et signe optique sont indépendants."
      }
    ],
    "explanation": "La série D/L est une information structurale issue de la projection de Fischer."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la projection de Newman :",
    "choices": [
      {
        "content": "Elle représente l'environnement spatial autour d'une liaison.",
        "correct": true,
        "explanation": "Elle représente une molécule observée dans l'axe d'une liaison."
      },
      {
        "content": "Elle permet de visualiser l'orientation relative des substituants de deux carbones adjacents.",
        "correct": true,
        "explanation": "Les substituants du carbone avant et du carbone arrière sont représentés séparément."
      },
      {
        "content": "L'attribution d'une configuration R ou S nécessite de classer les substituants par priorité.",
        "correct": true,
        "explanation": "Pour le glycéraldéhyde, les règles de priorité conduisent à OH > CHO > CH2OH > H."
      },
      {
        "content": "Elle constitue la seule représentation utilisée pour les oses.",
        "correct": false,
        "explanation": "La projection de Fischer est largement utilisée ensuite."
      }
    ],
    "explanation": "La projection de Newman décrit la conformation autour d'une liaison ; la projection de Fischer code la stéréochimie d'une chaîne carbonée."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de carbones asymétriques possède un aldohexose linéaire non substitué ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "Pour un aldose à n carbones, la filiation donne n−2 carbones asymétriques ; pour n=6, cela fait 4."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de carbones asymétriques possède un 2-cétohexose linéaire non substitué ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Pour un cétose à n carbones, la filiation donne n−3 carbones asymétriques ; pour n=6, cela fait 3."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans le modèle usuel des aldoses et 2-cétoses linéaires non substitués :",
    "choices": [
      {
        "content": "Un aldose à n carbones possède $2^{n-2}$ stéréoisomères.",
        "correct": true,
        "explanation": "Il possède n−2 centres stéréogènes et donc $2^{n-2}$ configurations."
      },
      {
        "content": "Un cétose à n carbones possède $2^{n-3}$ stéréoisomères.",
        "correct": true,
        "explanation": "Un 2-cétose possède n−3 centres stéréogènes et donc $2^{n-3}$ configurations."
      },
      {
        "content": "Un aldohexose possède 16 stéréoisomères.",
        "correct": true,
        "explanation": "$2^4=16$."
      },
      {
        "content": "Un cétohexose possède 16 stéréoisomères.",
        "correct": false,
        "explanation": "Il en possède 8 dans ce modèle : $2^3$."
      }
    ],
    "explanation": "Le nombre de stéréoisomères dépend du nombre de centres de chiralité."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Combien de stéréoisomères possède un aldohexose linéaire non substitué ?",
    "choices": [
      {
        "content": "16.",
        "correct": true,
        "explanation": "$2^{6-2}=16$."
      },
      {
        "content": "8.",
        "correct": false,
        "explanation": "Valeur du cétohexose."
      },
      {
        "content": "4.",
        "correct": false,
        "explanation": "Trop faible."
      },
      {
        "content": "32.",
        "correct": false,
        "explanation": "Trop élevé."
      }
    ],
    "explanation": "Un aldohexose linéaire comporte quatre C*, donc 16 configurations."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Combien de stéréoisomères possède un 2-cétohexose linéaire non substitué ?",
    "choices": [
      {
        "content": "8.",
        "correct": true,
        "explanation": "$2^{6-3}=8$."
      },
      {
        "content": "16.",
        "correct": false,
        "explanation": "Valeur de l'aldohexose."
      },
      {
        "content": "2.",
        "correct": false,
        "explanation": "Trop faible."
      },
      {
        "content": "64.",
        "correct": false,
        "explanation": "Trop élevé."
      }
    ],
    "explanation": "Un cétohexose comporte trois C*, donc huit configurations."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le glycéraldéhyde et la dihydroxyacétone illustrent aussi le calcul de stéréoisomères :",
    "choices": [
      {
        "content": "L'aldotriose possède deux stéréoisomères.",
        "correct": true,
        "explanation": "Un C* → 2 possibilités."
      },
      {
        "content": "Le cétotriose ne possède aucun C*.",
        "correct": true,
        "explanation": "La dihydroxyacétone est achirale."
      },
      {
        "content": "Le cétotriose n'a qu'une configuration stéréochimique dans ce modèle.",
        "correct": true,
        "explanation": "$2^{3-3}=1$."
      },
      {
        "content": "Les deux possèdent deux énantiomères.",
        "correct": false,
        "explanation": "La dihydroxyacétone n'est pas chirale."
      }
    ],
    "explanation": "Le triose met en évidence la différence entre aldose chiral et cétose achiral."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Sur cette projection de Fischer simplifiée d'un D-aldohexose, cliquez sur le dernier carbone asymétrique utilisé pour déterminer la série D/L.",
    "image": {
      "src": "/images/training/ue14/biochimie/glucides-generalites-structure/fischer-dernier-carbone-asymetrique-qzone.svg",
      "alt": "Projection de Fischer originale simplifiée d'un aldohexose avec C1 à C6 alignés verticalement",
      "width": 700,
      "height": 900
    },
    "expectedZones": [
      {
        "id": "c5",
        "label": "C5, dernier carbone asymétrique",
        "x": 0.5,
        "y": 0.72,
        "tolerance": 0.075
      }
    ],
    "explanation": "Pour un aldohexose, C5 est le dernier carbone asymétrique, situé juste avant le carbone terminal C6. La position de son OH détermine la série D ou L."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une projection de Fischer d'un aldohexose montre le groupe OH porté par C5 à droite. Quelles conclusions peut-on en tirer ?",
    "choices": [
      {
        "content": "L'ose appartient à la série D.",
        "correct": true,
        "explanation": "C5 est le dernier C* de l'aldohexose."
      },
      {
        "content": "L'information se lit sur le dernier carbone asymétrique.",
        "correct": true,
        "explanation": "Règle générale."
      },
      {
        "content": "On ne peut pas en déduire à elle seule le signe + ou − du pouvoir rotatoire.",
        "correct": true,
        "explanation": "La configuration D/L et le signe du pouvoir rotatoire sont indépendants."
      },
      {
        "content": "L'ose est nécessairement dextrogyre.",
        "correct": false,
        "explanation": "D ne signifie pas +."
      }
    ],
    "explanation": "La série D est structurale et ne préjuge pas du sens de rotation optique."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un carbone asymétrique porte quatre substituants différents.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Le glycéraldéhyde est chiral.",
        "correct": true,
        "explanation": "Son carbone central porte quatre substituants différents."
      },
      {
        "content": "La dihydroxyacétone est achirale.",
        "correct": true,
        "explanation": "Contre-exemple."
      },
      {
        "content": "OH à droite sur le dernier C* en Fischer correspond à D.",
        "correct": true,
        "explanation": "Critère."
      },
      {
        "content": "Un aldohexose linéaire non substitué possède 16 stéréoisomères.",
        "correct": true,
        "explanation": "$2^4$."
      },
      {
        "content": "D signifie toujours pouvoir rotatoire positif.",
        "correct": false,
        "explanation": "Indépendance D/L et +/−."
      },
      {
        "content": "Le cétohexose possède 16 stéréoisomères.",
        "correct": false,
        "explanation": "8."
      },
      {
        "content": "La série se lit sur le premier carbone de la molécule.",
        "correct": false,
        "explanation": "Sur le dernier C*."
      },
      {
        "content": "La dihydroxyacétone possède un C*.",
        "correct": false,
        "explanation": "Aucun."
      },
      {
        "content": "Toutes les formes humaines sont D sans exception.",
        "correct": false,
        "explanation": "Le L-fucose et l'acide L-iduronique sont deux composés humains de série L."
      }
    ],
    "explanation": "Cette sélection consolide chiralité, série D/L et filiation."
  }
];
