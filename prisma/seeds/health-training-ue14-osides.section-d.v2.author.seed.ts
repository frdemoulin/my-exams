import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie – Chapitre 1.3 – Section D – GAG sulfatés et glycoconjugués */
export const UE14_BIOCH_CH3_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le dermatane sulfate, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il est présent dans des matrices extracellulaires, notamment dans la peau.",
        "correct": true,
        "explanation": "Son nom historique vient du derme."
      },
      {
        "content": "Le dermatane sulfate est constitué uniquement de glucose.",
        "correct": false,
        "explanation": "Il contient iduronate et GalNAc."
      },
      {
        "content": "Il est dépourvu de toute charge négative.",
        "correct": false,
        "explanation": "Carboxylates et sulfates le rendent anionique."
      },
      {
        "content": "C'est un triacylglycérol.",
        "correct": false,
        "explanation": "C'est un GAG."
      },
      {
        "content": "Il contient notamment de l'acide L-iduronique et de la N-acétylgalactosamine.",
        "correct": true,
        "explanation": "Ce motif est caractéristique."
      }
    ],
    "explanation": "Le dermatane sulfate est un GAG anionique contenant notamment L-iduronate et GalNAc."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos du kératane sulfate, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Il est une protéine structurale.",
        "correct": false,
        "explanation": "C'est un GAG."
      },
      {
        "content": "Il est constitué uniquement de mannose.",
        "correct": false,
        "explanation": "Il contient galactose et GlcNAc."
      },
      {
        "content": "Le kératane sulfate est un GAG sulfaté.",
        "correct": true,
        "explanation": "Il porte des sulfates."
      },
      {
        "content": "Il est non sulfaté.",
        "correct": false,
        "explanation": "Il est sulfaté."
      },
      {
        "content": "Le kératane sulfate contient obligatoirement un acide uronique dans chaque motif.",
        "correct": false,
        "explanation": "Il est une exception importante."
      }
    ],
    "explanation": "Le kératane sulfate associe galactose et GlcNAc sans acide uronique dans son motif principal."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel GAG de surface cellulaire est structurellement apparenté à l'héparine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "héparane sulfate",
        "heparane sulfate",
        "l'héparane sulfate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'héparane sulfate est un GAG de surface et de matrice qui module de nombreuses interactions de signalisation."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'héparine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'héparine n'agit pas en hydrolysant directement le fibrinogène.",
        "correct": true,
        "explanation": "Son action est médiée par des protéines de coagulation."
      },
      {
        "content": "Elle possède une activité anticoagulante.",
        "correct": true,
        "explanation": "Elle potentialise notamment l'antithrombine."
      },
      {
        "content": "C'est un acide aminé.",
        "correct": false,
        "explanation": "C'est un GAG."
      },
      {
        "content": "L'héparine est un GAG très fortement sulfaté.",
        "correct": true,
        "explanation": "Sa densité de charge négative est élevée."
      },
      {
        "content": "La liaison à l'antithrombine accélère l'inhibition de facteurs de coagulation.",
        "correct": true,
        "explanation": "Le mécanisme dépend du type d'héparine et de la longueur de chaîne."
      }
    ],
    "explanation": "L'héparine est un GAG très sulfaté dont l'effet anticoagulant passe notamment par l'antithrombine."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos des protéoglycanes, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Les protéoglycanes sont absents de la matrice extracellulaire.",
        "correct": false,
        "explanation": "Ils en sont des composants majeurs."
      },
      {
        "content": "Protéoglycane et glycogène sont synonymes.",
        "correct": false,
        "explanation": "Ce sont des structures différentes."
      },
      {
        "content": "Les GAG d'un protéoglycane sont toujours neutres.",
        "correct": false,
        "explanation": "Ils sont souvent fortement anioniques."
      },
      {
        "content": "Les GAG confèrent souvent une forte charge négative et une grande hydratation.",
        "correct": true,
        "explanation": "Cela influence les propriétés de matrice."
      },
      {
        "content": "Un protéoglycane est uniquement une protéine sans glucides.",
        "correct": false,
        "explanation": "Il porte des GAG."
      }
    ],
    "explanation": "Un protéoglycane est une protéine cœur décorée de longues chaînes de GAG."
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur les glycoprotéines, retenez exactement les deux exactes.",
    "choices": [
      {
        "content": "Toutes les glycoprotéines sont des enzymes digestives.",
        "correct": false,
        "explanation": "Leurs fonctions sont très variées."
      },
      {
        "content": "Les chaînes glycaniques participent au repliement, à la stabilité et à la reconnaissance.",
        "correct": true,
        "explanation": "Leur rôle dépend de la protéine."
      },
      {
        "content": "La glycosylation n'a jamais de rôle dans la reconnaissance cellulaire.",
        "correct": false,
        "explanation": "Elle y est souvent centrale."
      },
      {
        "content": "Une glycoprotéine est une protéine portant des chaînes oligosaccharidiques covalentes.",
        "correct": true,
        "explanation": "La glycosylation peut être N- ou O-liée."
      },
      {
        "content": "Une glycoprotéine est constituée exclusivement de glucides.",
        "correct": false,
        "explanation": "Elle possède une partie protéique."
      }
    ],
    "explanation": "Les glycoprotéines portent des oligosaccharides impliqués dans de nombreuses fonctions de surface et de reconnaissance.",
    "requiredSelectionCount": 2
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la charge des GAG, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les acides uroniques sont toujours neutres à pH physiologique.",
        "correct": false,
        "explanation": "Leurs carboxylates sont largement déprotonés."
      },
      {
        "content": "Les groupements sulfate renforcent souvent cette charge négative.",
        "correct": true,
        "explanation": "Les GAG sulfatés sont fortement anioniques."
      },
      {
        "content": "Cette hydratation contribue à la résistance à la compression du cartilage.",
        "correct": true,
        "explanation": "Les protéoglycanes retiennent l'eau."
      },
      {
        "content": "La charge attire des contre-ions et de l'eau.",
        "correct": true,
        "explanation": "Elle explique le caractère fortement hydraté des matrices."
      },
      {
        "content": "La charge des GAG repousse toute molécule d'eau.",
        "correct": false,
        "explanation": "Elle favorise au contraire l'hydratation."
      }
    ],
    "explanation": "Carboxylates et sulfates rendent les GAG fortement anioniques et hydratés."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment appelle-t-on l'enveloppe riche en chaînes glucidiques à la surface de nombreuses cellules ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glycocalyx",
        "le glycocalyx"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les glycoconjugués participent à la matrice extracellulaire et au glycocalyx, où ils assurent structure et signalisation."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur le dermatane sulfate, laquelle est exacte ?",
    "choices": [
      {
        "content": "Il est dépourvu de toute charge négative.",
        "correct": false,
        "explanation": "Carboxylates et sulfates le rendent anionique."
      },
      {
        "content": "Le dermatane sulfate est un GAG sulfaté.",
        "correct": true,
        "explanation": "Il porte des groupements sulfate."
      },
      {
        "content": "Le dermatane sulfate est constitué uniquement de glucose.",
        "correct": false,
        "explanation": "Il contient iduronate et GalNAc."
      },
      {
        "content": "C'est un triacylglycérol.",
        "correct": false,
        "explanation": "C'est un GAG."
      },
      {
        "content": "Il est non sulfaté par définition.",
        "correct": false,
        "explanation": "Son nom indique une sulfatation."
      }
    ],
    "explanation": "Le dermatane sulfate est un GAG anionique contenant notamment L-iduronate et GalNAc."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le kératane sulfate, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le kératane sulfate contient obligatoirement un acide uronique dans chaque motif.",
        "correct": false,
        "explanation": "Il est une exception importante."
      },
      {
        "content": "Il est constitué uniquement de mannose.",
        "correct": false,
        "explanation": "Il contient galactose et GlcNAc."
      },
      {
        "content": "Il est une protéine structurale.",
        "correct": false,
        "explanation": "C'est un GAG."
      },
      {
        "content": "Son motif comprend galactose et N-acétylglucosamine.",
        "correct": true,
        "explanation": "Il se distingue par l'absence d'acide uronique dans son motif principal."
      },
      {
        "content": "Il est présent notamment dans la cornée et certains cartilages.",
        "correct": true,
        "explanation": "Sa distribution tissulaire est spécialisée."
      }
    ],
    "explanation": "Le kératane sulfate associe galactose et GlcNAc sans acide uronique dans son motif principal."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'héparine et son utilisation anticoagulante, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'héparine est un glucide neutre non sulfaté.",
        "correct": false,
        "explanation": "Elle est fortement sulfatée."
      },
      {
        "content": "La liaison à l'antithrombine accélère l'inhibition de facteurs de coagulation.",
        "correct": true,
        "explanation": "Le mécanisme dépend du type d'héparine et de la longueur de chaîne."
      },
      {
        "content": "Elle possède une activité anticoagulante.",
        "correct": true,
        "explanation": "Elle potentialise notamment l'antithrombine."
      },
      {
        "content": "L'héparine est un GAG très fortement sulfaté.",
        "correct": true,
        "explanation": "Sa densité de charge négative est élevée."
      },
      {
        "content": "L'héparine n'agit pas en hydrolysant directement le fibrinogène.",
        "correct": true,
        "explanation": "Son action est médiée par des protéines de coagulation."
      }
    ],
    "explanation": "L'héparine est un GAG très sulfaté dont l'effet anticoagulant passe notamment par l'antithrombine."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel GAG sulfaté se distingue par l'absence d'acide uronique dans son motif principal ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "kératane sulfate",
        "keratane sulfate",
        "le kératane sulfate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le kératane sulfate associe galactose et GlcNAc sans acide uronique dans son motif principal."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur l'héparane sulfate, laquelle est exacte ?",
    "choices": [
      {
        "content": "Il est dépourvu de tout rôle de signalisation.",
        "correct": false,
        "explanation": "Il module de nombreuses interactions protéiques."
      },
      {
        "content": "Il peut lier des facteurs de croissance et moduler la signalisation.",
        "correct": true,
        "explanation": "Ses motifs sulfatés servent de plateformes d'interaction."
      },
      {
        "content": "Il ne contient aucun groupe sulfate.",
        "correct": false,
        "explanation": "Il est sulfaté à des degrés variables."
      },
      {
        "content": "L'héparane sulfate est un diholoside alimentaire.",
        "correct": false,
        "explanation": "C'est un GAG polymérique."
      },
      {
        "content": "Il est uniquement présent dans le noyau.",
        "correct": false,
        "explanation": "Il est notamment extracellulaire et membranaire."
      }
    ],
    "explanation": "L'héparane sulfate est un GAG de surface et de matrice qui module de nombreuses interactions de signalisation."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'héparine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'héparine est un GAG très fortement sulfaté.",
        "correct": true,
        "explanation": "Sa densité de charge négative est élevée."
      },
      {
        "content": "Elle possède une activité anticoagulante.",
        "correct": true,
        "explanation": "Elle potentialise notamment l'antithrombine."
      },
      {
        "content": "Son effet principal consiste à transformer le glucose en glycogène.",
        "correct": false,
        "explanation": "Elle agit sur la coagulation."
      },
      {
        "content": "La liaison à l'antithrombine accélère l'inhibition de facteurs de coagulation.",
        "correct": true,
        "explanation": "Le mécanisme dépend du type d'héparine et de la longueur de chaîne."
      },
      {
        "content": "Elle favorise directement la coagulation.",
        "correct": false,
        "explanation": "Elle est anticoagulante."
      }
    ],
    "explanation": "L'héparine est un GAG très sulfaté dont l'effet anticoagulant passe notamment par l'antithrombine."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos des protéoglycanes, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Les protéoglycanes sont absents de la matrice extracellulaire.",
        "correct": false,
        "explanation": "Ils en sont des composants majeurs."
      },
      {
        "content": "Ils diffèrent des glycoprotéines classiques par l'abondance et la nature des chaînes GAG.",
        "correct": true,
        "explanation": "Les glycoprotéines portent en général des oligosaccharides plus courts et ramifiés."
      },
      {
        "content": "Un protéoglycane comporte une protéine cœur portant une ou plusieurs chaînes de GAG.",
        "correct": true,
        "explanation": "Les chaînes glucidiques peuvent représenter une grande part de la masse."
      },
      {
        "content": "Un protéoglycane est uniquement une protéine sans glucides.",
        "correct": false,
        "explanation": "Il porte des GAG."
      },
      {
        "content": "Protéoglycane et glycogène sont synonymes.",
        "correct": false,
        "explanation": "Ce sont des structures différentes."
      }
    ],
    "explanation": "Un protéoglycane est une protéine cœur décorée de longues chaînes de GAG.",
    "requiredSelectionCount": 2
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les glycoprotéines, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Une glycoprotéine est constituée exclusivement de glucides.",
        "correct": false,
        "explanation": "Elle possède une partie protéique."
      },
      {
        "content": "Les glycoprotéines sont distinctes des protéoglycanes.",
        "correct": true,
        "explanation": "Le type et l'abondance des chaînes glucidiques diffèrent."
      },
      {
        "content": "Les chaînes glycaniques participent au repliement, à la stabilité et à la reconnaissance.",
        "correct": true,
        "explanation": "Leur rôle dépend de la protéine."
      },
      {
        "content": "Des antigènes de groupes sanguins sont portés par des motifs glucidiques de glycoconjugués.",
        "correct": true,
        "explanation": "Ils peuvent être sur glycoprotéines ou glycolipides."
      },
      {
        "content": "La glycosylation n'a jamais de rôle dans la reconnaissance cellulaire.",
        "correct": false,
        "explanation": "Elle y est souvent centrale."
      }
    ],
    "explanation": "Les glycoprotéines portent des oligosaccharides impliqués dans de nombreuses fonctions de surface et de reconnaissance."
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quels deux types de groupements contribuent surtout à la charge négative des GAG ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "carboxylates et sulfates",
        "sulfates et carboxylates",
        "groupes carboxylate et sulfate",
        "COO- et sulfate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Carboxylates et sulfates rendent les GAG fortement anioniques et hydratés."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de la matrice extracellulaire et les glycoconjugués, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Le glycocalyx est constitué uniquement d'ADN.",
        "correct": false,
        "explanation": "Il est riche en glycoconjugués."
      },
      {
        "content": "Les glycoconjugués n'ont aucun rôle de reconnaissance.",
        "correct": false,
        "explanation": "Ils sont centraux dans ces interactions."
      },
      {
        "content": "Les GAG ne lient jamais de protéines.",
        "correct": false,
        "explanation": "Ils interagissent avec de nombreux partenaires."
      },
      {
        "content": "La matrice extracellulaire est dépourvue de glucides.",
        "correct": false,
        "explanation": "Elle contient de nombreux protéoglycanes et glycoprotéines."
      },
      {
        "content": "Les GAG peuvent moduler la diffusion et la présentation de facteurs de croissance.",
        "correct": true,
        "explanation": "Leur charge et leurs motifs lient des protéines."
      }
    ],
    "explanation": "Les glycoconjugués participent à la matrice extracellulaire et au glycocalyx, où ils assurent structure et signalisation."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le dermatane sulfate, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "C'est un triacylglycérol.",
        "correct": false,
        "explanation": "C'est un GAG."
      },
      {
        "content": "Il est dépourvu de toute charge négative.",
        "correct": false,
        "explanation": "Carboxylates et sulfates le rendent anionique."
      },
      {
        "content": "Le dermatane sulfate est un GAG sulfaté.",
        "correct": true,
        "explanation": "Il porte des groupements sulfate."
      },
      {
        "content": "Le dermatane sulfate est constitué uniquement de glucose.",
        "correct": false,
        "explanation": "Il contient iduronate et GalNAc."
      },
      {
        "content": "Il contient notamment de l'acide L-iduronique et de la N-acétylgalactosamine.",
        "correct": true,
        "explanation": "Ce motif est caractéristique."
      }
    ],
    "explanation": "Le dermatane sulfate est un GAG anionique contenant notamment L-iduronate et GalNAc."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Les protéoglycanes sont absents de la matrice extracellulaire.",
        "correct": false,
        "explanation": "Ils en sont des composants majeurs."
      },
      {
        "content": "Un protéoglycane est uniquement une protéine sans glucides.",
        "correct": false,
        "explanation": "Il porte des GAG."
      },
      {
        "content": "Le kératane sulfate contient obligatoirement un acide uronique dans chaque motif.",
        "correct": false,
        "explanation": "Il est une exception importante."
      },
      {
        "content": "Le kératane sulfate est un GAG sulfaté.",
        "correct": true,
        "explanation": "Il porte des sulfates."
      },
      {
        "content": "Il est une protéine structurale.",
        "correct": false,
        "explanation": "C'est un GAG."
      },
      {
        "content": "Un protéoglycane comporte une protéine cœur portant une ou plusieurs chaînes de GAG.",
        "correct": true,
        "explanation": "Les chaînes glucidiques peuvent représenter une grande part de la masse."
      },
      {
        "content": "Les protéoglycanes sont importants dans la matrice extracellulaire.",
        "correct": true,
        "explanation": "Ils contribuent à la résistance à la compression et à la signalisation."
      },
      {
        "content": "Les sulfates contribuent à sa charge négative.",
        "correct": true,
        "explanation": "Ils augmentent l'hydratation."
      },
      {
        "content": "Les GAG d'un protéoglycane sont toujours neutres.",
        "correct": false,
        "explanation": "Ils sont souvent fortement anioniques."
      },
      {
        "content": "Les GAG confèrent souvent une forte charge négative et une grande hydratation.",
        "correct": true,
        "explanation": "Cela influence les propriétés de matrice."
      }
    ],
    "explanation": "Le kératane sulfate associe galactose et GlcNAc sans acide uronique dans son motif principal. Un protéoglycane est une protéine cœur décorée de longues chaînes de GAG."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'héparane sulfate, quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "Il peut lier des facteurs de croissance et moduler la signalisation.",
        "correct": true,
        "explanation": "Ses motifs sulfatés servent de plateformes d'interaction."
      },
      {
        "content": "Il contient des glucosamines et des acides uroniques.",
        "correct": true,
        "explanation": "Le degré de sulfatation et d'épimérisation varie."
      },
      {
        "content": "L'héparane sulfate est un diholoside alimentaire.",
        "correct": false,
        "explanation": "C'est un GAG polymérique."
      },
      {
        "content": "Il est généralement moins sulfaté que l'héparine.",
        "correct": true,
        "explanation": "L'héparine est particulièrement riche en sulfate."
      },
      {
        "content": "L'héparane sulfate est présent à la surface cellulaire et dans les membranes basales.",
        "correct": true,
        "explanation": "Il est souvent lié à des protéoglycanes."
      }
    ],
    "explanation": "L'héparane sulfate est un GAG de surface et de matrice qui module de nombreuses interactions de signalisation."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle protéine plasmatique est fortement potentialisée par l'héparine dans son action anticoagulante ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "antithrombine",
        "antithrombine III",
        "ATIII",
        "AT3"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'héparine est un GAG très sulfaté dont l'effet anticoagulant passe notamment par l'antithrombine."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Dans ce schéma simplifié d'un protéoglycane, cliquez sur la protéine cœur.",
    "image": {
      "src": "/images/training/ue14/biochimie/glucides/ch3-proteoglycan-core-qzone.svg",
      "alt": "Schéma d'un protéoglycane avec protéine cœur centrale et chaînes GAG",
      "width": 1200,
      "height": 600
    },
    "expectedZones": [
      {
        "id": "zone-89",
        "label": "Protéine cœur",
        "x": 0.5,
        "y": 0.5,
        "tolerance": 0.16
      }
    ],
    "explanation": "Un protéoglycane est constitué d'une protéine cœur à laquelle sont attachées une ou plusieurs chaînes de glycosaminoglycanes."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel GAG sulfaté se distingue par l'absence d'acide uronique dans son motif principal ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "kératane sulfate",
        "keratane sulfate",
        "le kératane sulfate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le kératane sulfate associe galactose et GlcNAc sans acide uronique dans son motif principal."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur l'héparane sulfate, retenez exactement les deux exactes.",
    "choices": [
      {
        "content": "Il ne contient aucun groupe sulfate.",
        "correct": false,
        "explanation": "Il est sulfaté à des degrés variables."
      },
      {
        "content": "Il est uniquement présent dans le noyau.",
        "correct": false,
        "explanation": "Il est notamment extracellulaire et membranaire."
      },
      {
        "content": "L'héparane sulfate est présent à la surface cellulaire et dans les membranes basales.",
        "correct": true,
        "explanation": "Il est souvent lié à des protéoglycanes."
      },
      {
        "content": "L'héparane sulfate est un diholoside alimentaire.",
        "correct": false,
        "explanation": "C'est un GAG polymérique."
      },
      {
        "content": "Il est généralement moins sulfaté que l'héparine.",
        "correct": true,
        "explanation": "L'héparine est particulièrement riche en sulfate."
      }
    ],
    "explanation": "L'héparane sulfate est un GAG de surface et de matrice qui module de nombreuses interactions de signalisation.",
    "requiredSelectionCount": 2
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant l'héparine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'héparine est un GAG très fortement sulfaté.",
        "correct": true,
        "explanation": "Sa densité de charge négative est élevée."
      },
      {
        "content": "L'héparine n'agit pas en hydrolysant directement le fibrinogène.",
        "correct": true,
        "explanation": "Son action est médiée par des protéines de coagulation."
      },
      {
        "content": "Elle favorise directement la coagulation.",
        "correct": false,
        "explanation": "Elle est anticoagulante."
      },
      {
        "content": "C'est un acide aminé.",
        "correct": false,
        "explanation": "C'est un GAG."
      },
      {
        "content": "La liaison à l'antithrombine accélère l'inhibition de facteurs de coagulation.",
        "correct": true,
        "explanation": "Le mécanisme dépend du type d'héparine et de la longueur de chaîne."
      }
    ],
    "explanation": "L'héparine est un GAG très sulfaté dont l'effet anticoagulant passe notamment par l'antithrombine."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "À propos des protéoglycanes, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Les GAG d'un protéoglycane sont toujours neutres.",
        "correct": false,
        "explanation": "Ils sont souvent fortement anioniques."
      },
      {
        "content": "Les GAG confèrent souvent une forte charge négative et une grande hydratation.",
        "correct": true,
        "explanation": "Cela influence les propriétés de matrice."
      },
      {
        "content": "Protéoglycane et glycogène sont synonymes.",
        "correct": false,
        "explanation": "Ce sont des structures différentes."
      },
      {
        "content": "Les protéoglycanes sont absents de la matrice extracellulaire.",
        "correct": false,
        "explanation": "Ils en sont des composants majeurs."
      },
      {
        "content": "Un protéoglycane est uniquement une protéine sans glucides.",
        "correct": false,
        "explanation": "Il porte des GAG."
      }
    ],
    "explanation": "Un protéoglycane est une protéine cœur décorée de longues chaînes de GAG."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les glycoprotéines, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Les chaînes glycaniques participent au repliement, à la stabilité et à la reconnaissance.",
        "correct": true,
        "explanation": "Leur rôle dépend de la protéine."
      },
      {
        "content": "Des antigènes de groupes sanguins sont portés par des motifs glucidiques de glycoconjugués.",
        "correct": true,
        "explanation": "Ils peuvent être sur glycoprotéines ou glycolipides."
      },
      {
        "content": "Les glycoprotéines sont distinctes des protéoglycanes.",
        "correct": true,
        "explanation": "Le type et l'abondance des chaînes glucidiques diffèrent."
      },
      {
        "content": "Une glycoprotéine est constituée exclusivement de glucides.",
        "correct": false,
        "explanation": "Elle possède une partie protéique."
      },
      {
        "content": "Une glycoprotéine est une protéine portant des chaînes oligosaccharidiques covalentes.",
        "correct": true,
        "explanation": "La glycosylation peut être N- ou O-liée."
      }
    ],
    "explanation": "Les glycoprotéines portent des oligosaccharides impliqués dans de nombreuses fonctions de surface et de reconnaissance."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quels deux types de groupements contribuent surtout à la charge négative des GAG ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "carboxylates et sulfates",
        "sulfates et carboxylates",
        "groupes carboxylate et sulfate",
        "COO- et sulfate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Carboxylates et sulfates rendent les GAG fortement anioniques et hydratés."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "L'héparane sulfate est présent à la surface cellulaire et dans les membranes basales.",
        "correct": true,
        "explanation": "Il est souvent lié à des protéoglycanes."
      },
      {
        "content": "Les GAG ne lient jamais de protéines.",
        "correct": false,
        "explanation": "Ils interagissent avec de nombreux partenaires."
      },
      {
        "content": "Il est dépourvu de tout rôle de signalisation.",
        "correct": false,
        "explanation": "Il module de nombreuses interactions protéiques."
      },
      {
        "content": "Les protéoglycanes contribuent à l'organisation de la matrice extracellulaire.",
        "correct": true,
        "explanation": "Ils remplissent et hydratent l'espace extracellulaire."
      },
      {
        "content": "Il est uniquement présent dans le noyau.",
        "correct": false,
        "explanation": "Il est notamment extracellulaire et membranaire."
      },
      {
        "content": "Les glycoprotéines d'adhérence relient cellules et matrice.",
        "correct": true,
        "explanation": "Fibronectine et laminines en sont des exemples."
      },
      {
        "content": "Il contient des glucosamines et des acides uroniques.",
        "correct": true,
        "explanation": "Le degré de sulfatation et d'épimérisation varie."
      },
      {
        "content": "Il est généralement moins sulfaté que l'héparine.",
        "correct": true,
        "explanation": "L'héparine est particulièrement riche en sulfate."
      },
      {
        "content": "L'héparane sulfate est un diholoside alimentaire.",
        "correct": false,
        "explanation": "C'est un GAG polymérique."
      },
      {
        "content": "La matrice extracellulaire est dépourvue de glucides.",
        "correct": false,
        "explanation": "Elle contient de nombreux protéoglycanes et glycoprotéines."
      }
    ],
    "explanation": "Les glycoconjugués participent à la matrice extracellulaire et au glycocalyx, où ils assurent structure et signalisation. L'héparane sulfate est un GAG de surface et de matrice qui module de nombreuses interactions de signalisation."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le dermatane sulfate, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "C'est un triacylglycérol.",
        "correct": false,
        "explanation": "C'est un GAG."
      },
      {
        "content": "Il est présent dans des matrices extracellulaires, notamment dans la peau.",
        "correct": true,
        "explanation": "Son nom historique vient du derme."
      },
      {
        "content": "Il est dépourvu de toute charge négative.",
        "correct": false,
        "explanation": "Carboxylates et sulfates le rendent anionique."
      },
      {
        "content": "Le dermatane sulfate est constitué uniquement de glucose.",
        "correct": false,
        "explanation": "Il contient iduronate et GalNAc."
      },
      {
        "content": "Il contient notamment de l'acide L-iduronique et de la N-acétylgalactosamine.",
        "correct": true,
        "explanation": "Ce motif est caractéristique."
      }
    ],
    "explanation": "Le dermatane sulfate est un GAG anionique contenant notamment L-iduronate et GalNAc."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel GAG est généralement moins sulfaté que l'héparine et est fréquent à la surface cellulaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "héparane sulfate",
        "heparane sulfate",
        "l'héparane sulfate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'héparane sulfate est structurellement apparenté à l'héparine mais est généralement moins sulfaté."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "À propos de l'héparane sulfate, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Il est uniquement présent dans le noyau.",
        "correct": false,
        "explanation": "Il est notamment extracellulaire et membranaire."
      },
      {
        "content": "Il contient des glucosamines et des acides uroniques.",
        "correct": true,
        "explanation": "Le degré de sulfatation et d'épimérisation varie."
      },
      {
        "content": "Il ne contient aucun groupe sulfate.",
        "correct": false,
        "explanation": "Il est sulfaté à des degrés variables."
      },
      {
        "content": "L'héparane sulfate est un diholoside alimentaire.",
        "correct": false,
        "explanation": "C'est un GAG polymérique."
      },
      {
        "content": "Il peut lier des facteurs de croissance et moduler la signalisation.",
        "correct": true,
        "explanation": "Ses motifs sulfatés servent de plateformes d'interaction."
      }
    ],
    "explanation": "L'héparane sulfate est un GAG de surface et de matrice qui module de nombreuses interactions de signalisation.",
    "requiredSelectionCount": 2
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'héparine, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "C'est un acide aminé.",
        "correct": false,
        "explanation": "C'est un GAG."
      },
      {
        "content": "La liaison à l'antithrombine accélère l'inhibition de facteurs de coagulation.",
        "correct": true,
        "explanation": "Le mécanisme dépend du type d'héparine et de la longueur de chaîne."
      },
      {
        "content": "L'héparine n'agit pas en hydrolysant directement le fibrinogène.",
        "correct": true,
        "explanation": "Son action est médiée par des protéines de coagulation."
      },
      {
        "content": "Elle favorise directement la coagulation.",
        "correct": false,
        "explanation": "Elle est anticoagulante."
      },
      {
        "content": "Elle possède une activité anticoagulante.",
        "correct": true,
        "explanation": "Elle potentialise notamment l'antithrombine."
      }
    ],
    "explanation": "L'héparine est un GAG très sulfaté dont l'effet anticoagulant passe notamment par l'antithrombine."
  }
];
