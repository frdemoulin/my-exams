import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie – Chapitre 1.2 – Section D – Oses estérifiés et autres dérivés
 */

export const UE14_BIOCH_CH2_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 79,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'estérification d'une fonction alcool d'un ose :",
    "choices": [
      {
        "content": "La fixation d'un acide sur un alcool.",
        "correct": true,
        "explanation": "Une fonction alcool peut réagir avec un acide ou un dérivé activé de celui-ci pour former un ester."
      },
      {
        "content": "Une transformation pouvant concerner les OH des oses.",
        "correct": true,
        "explanation": "Les fonctions hydroxyle des oses peuvent former des liaisons ester avec des groupements phosphate ou sulfate."
      },
      {
        "content": "La suppression de tous les oxygènes d'un ose.",
        "correct": false,
        "explanation": "L'estérification modifie une fonction hydroxyle sans supprimer tous les atomes d'oxygène de l'ose."
      },
      {
        "content": "Une réaction conduisant à des esters phosphoriques ou sulfuriques.",
        "correct": true,
        "explanation": "Les fonctions alcool des oses peuvent notamment former des esters phosphates ou sulfates."
      }
    ],
    "explanation": "Les fonctions alcool des oses peuvent former différents esters."
  },
  {
    "order": 80,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Un ose phosphorylé :",
    "choices": [
      {
        "content": "Porte un ester phosphorique.",
        "correct": true,
        "explanation": "Le groupement phosphate est lié à l'oxygène d'une fonction alcool de l'ose par une liaison ester."
      },
      {
        "content": "Résulte de la formation d'un ester phosphate sur une fonction alcool.",
        "correct": true,
        "explanation": "La phosphorylation d'un ose forme une liaison ester entre un hydroxyle de l'ose et un groupement phosphate."
      },
      {
        "content": "Peut intervenir dans des voies métaboliques.",
        "correct": true,
        "explanation": "Le glucose-6-phosphate et le fructose-1,6-bisphosphate sont par exemple des intermédiaires de la glycolyse."
      },
      {
        "content": "Est nécessairement un polyol non chargé.",
        "correct": false,
        "explanation": "Un phosphate apporte des charges dans les formes ionisées usuelles."
      }
    ],
    "explanation": "La phosphorylation transforme une fonction alcool de l'ose en ester phosphorique."
  },
  {
    "order": 81,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le glucose peut notamment être phosphorylé :",
    "choices": [
      {
        "content": "En C1.",
        "correct": true,
        "explanation": "Le glucose-1-phosphate porte un groupement phosphate sur son carbone anomérique C1."
      },
      {
        "content": "En C6.",
        "correct": true,
        "explanation": "Le glucose-6-phosphate est formé par phosphorylation de l'alcool primaire porté par C6."
      },
      {
        "content": "En C6 avec un rôle dans la glycolyse.",
        "correct": true,
        "explanation": "L'hexokinase forme le glucose-6-phosphate lors de la première étape de la glycolyse."
      },
      {
        "content": "Uniquement en C3.",
        "correct": false,
        "explanation": "Le glucose forme notamment des esters phosphates en C1 ou en C6 ; il n'est donc pas phosphorylé uniquement en C3."
      }
    ],
    "explanation": "Le glucose-1-phosphate intervient notamment dans le métabolisme du glycogène, tandis que le glucose-6-phosphate est un carrefour métabolique et un intermédiaire de la glycolyse."
  },
  {
    "order": 82,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Sur quel carbone le glucose est-il phosphorylé lors de la première étape de la glycolyse ?",
    "choices": [
      {
        "content": "C6.",
        "correct": true,
        "explanation": "L'hexokinase transfère un phosphate sur l'alcool primaire du carbone C6 et forme le glucose-6-phosphate."
      },
      {
        "content": "C2.",
        "correct": false,
        "explanation": "Le produit de l'hexokinase est le glucose-6-phosphate, pas le glucose-2-phosphate."
      },
      {
        "content": "C4.",
        "correct": false,
        "explanation": "La première phosphorylation glycolytique concerne C6, et non C4."
      },
      {
        "content": "C5.",
        "correct": false,
        "explanation": "La première phosphorylation glycolytique concerne l'alcool primaire de C6."
      }
    ],
    "explanation": "La première étape de la glycolyse convertit le glucose en glucose-6-phosphate."
  },
  {
    "order": 83,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le fructose peut notamment être phosphorylé :",
    "choices": [
      {
        "content": "En C1.",
        "correct": true,
        "explanation": "Le fructose-1-phosphate est notamment formé lors du métabolisme hépatique du fructose."
      },
      {
        "content": "En C6.",
        "correct": true,
        "explanation": "Le fructose-6-phosphate est un intermédiaire de la glycolyse."
      },
      {
        "content": "Simultanément en C1 et C6.",
        "correct": true,
        "explanation": "Le fructose-1,6-bisphosphate porte deux phosphates distincts, en C1 et en C6."
      },
      {
        "content": "Simultanément en C2 et C6.",
        "correct": true,
        "explanation": "Le fructose-2,6-bisphosphate est un régulateur du métabolisme glucidique portant des phosphates en C2 et C6."
      }
    ],
    "explanation": "Le fructose peut former plusieurs esters phosphates qui se distinguent par le nombre et la position de leurs groupements phosphate."
  },
  {
    "order": 84,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Un fructose phosphorylé en C1 et C6 est appelé :",
    "choices": [
      {
        "content": "Fructose-1,6-bisphosphate.",
        "correct": true,
        "explanation": "La nomenclature fructose-1,6-bisphosphate précise la présence de deux phosphates distincts en C1 et C6."
      },
      {
        "content": "Fructose-6-phosphate uniquement.",
        "correct": false,
        "explanation": "Le fructose-6-phosphate ne porte qu'un seul phosphate, en C6."
      },
      {
        "content": "Glucose-1,6-bisphosphate.",
        "correct": false,
        "explanation": "Cette réponse désigne un dérivé du glucose, alors que la molécule demandée dérive du fructose."
      },
      {
        "content": "Fructose-2-phosphate.",
        "correct": false,
        "explanation": "Cette réponse ne rend compte ni du phosphate en C1 ni de celui en C6."
      }
    ],
    "explanation": "Deux phosphates distincts en C1 et C6 justifient le préfixe bis-."
  },
  {
    "order": 85,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le ribose-5-phosphate et la biosynthèse des nucléotides :",
    "choices": [
      {
        "content": "Le ribose-5-phosphate porte un phosphate en C5.",
        "correct": true,
        "explanation": "Le nom ribose-5-phosphate indique directement la position du groupement phosphate."
      },
      {
        "content": "Le ribose-5-phosphate contribue, via le PRPP, à la biosynthèse des ribonucléotides de l'ARN.",
        "correct": true,
        "explanation": "Le ribose-5-phosphate est converti en PRPP, précurseur de la synthèse de nombreux ribonucléotides."
      },
      {
        "content": "Les désoxyribonucléotides de l'ADN sont produits par réduction de ribonucléotides.",
        "correct": true,
        "explanation": "Les ribonucléotide réductases convertissent des ribonucléotides en désoxyribonucléotides, précurseurs de l'ADN."
      },
      {
        "content": "Le ribose-5-phosphate est un hexose.",
        "correct": false,
        "explanation": "Le ribose possède cinq carbones : c'est un pentose."
      }
    ],
    "explanation": "Le ribose-5-phosphate alimente la synthèse des ribonucléotides ; les précurseurs de l'ADN sont ensuite obtenus par réduction de ribonucléotides."
  },
  {
    "order": 86,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel pentose phosphorylé alimente la biosynthèse des ribonucléotides ?",
    "choices": [
      {
        "content": "Ribose-5-phosphate.",
        "correct": true,
        "explanation": "Le ribose-5-phosphate est converti en PRPP, puis engagé dans la biosynthèse des ribonucléotides."
      },
      {
        "content": "2-désoxyribose-5-phosphate.",
        "correct": false,
        "explanation": "Les désoxyribonucléotides sont principalement produits par réduction de ribonucléotides ; ce n'est pas la réponse attendue ici."
      },
      {
        "content": "Mannitol-5-phosphate.",
        "correct": false,
        "explanation": "Le mannitol est un polyol et ne fournit pas le squelette ribose du PRPP."
      },
      {
        "content": "Acide glucuronique.",
        "correct": false,
        "explanation": "L'acide glucuronique est un acide uronique à six carbones, pas le pentose précurseur du PRPP."
      }
    ],
    "explanation": "Le ribose-5-phosphate fournit le squelette ribose utilisé dans la biosynthèse des ribonucléotides."
  },
  {
    "order": 87,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les esters sulfuriques des oses :",
    "choices": [
      {
        "content": "Sont présents dans les glycosaminoglycanes sulfatés.",
        "correct": true,
        "explanation": "Les chondroïtine sulfates, dermatane sulfate, kératane sulfate et héparanes portent des groupements sulfate."
      },
      {
        "content": "Confèrent une charge négative à la molécule.",
        "correct": true,
        "explanation": "Aux pH biologiques usuels, les esters sulfates sont ionisés et contribuent à la charge négative des GAG."
      },
      {
        "content": "Résultent d'une estérification d'une fonction alcool.",
        "correct": true,
        "explanation": "Schéma Ose-OH + H2SO4 → ester sulfurique."
      },
      {
        "content": "Sont nécessairement neutres.",
        "correct": false,
        "explanation": "Aux pH biologiques usuels, les groupes sulfate estérifiés contribuent à la charge négative des GAG."
      }
    ],
    "explanation": "La sulfatation contribue fortement à la charge des GAG."
  },
  {
    "order": 88,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'acide ascorbique :",
    "choices": [
      {
        "content": "Il est mieux connu sous le nom de vitamine C.",
        "correct": true,
        "explanation": "L'acide L-ascorbique est la forme chimique communément appelée vitamine C."
      },
      {
        "content": "Chez les espèces capables de la synthétiser, il dérive du glucose via la L-gulono-1,4-lactone.",
        "correct": true,
        "explanation": "La voie animale classique convertit des dérivés du glucose en L-gulono-1,4-lactone, ensuite oxydée en L-ascorbate."
      },
      {
        "content": "La dernière étape de la voie animale implique l'oxydation de la L-gulono-1,4-lactone.",
        "correct": true,
        "explanation": "La L-gulonolactone oxydase catalyse cette étape chez les espèces qui possèdent une enzyme fonctionnelle."
      },
      {
        "content": "L'être humain en synthétise suffisamment à partir du glucose.",
        "correct": false,
        "explanation": "L'être humain ne possède pas de L-gulonolactone oxydase fonctionnelle ; la vitamine C doit donc être apportée par l'alimentation."
      }
    ],
    "explanation": "L'acide ascorbique est la vitamine C ; l'être humain ne peut pas achever sa biosynthèse à partir du glucose."
  },
  {
    "order": 89,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel dérivé glucidique est aussi appelé vitamine C ?",
    "choices": [
      {
        "content": "Acide ascorbique.",
        "correct": true,
        "explanation": "L'acide L-ascorbique est la forme chimique communément appelée vitamine C."
      },
      {
        "content": "Sorbitol.",
        "correct": false,
        "explanation": "Le sorbitol est un polyol obtenu par réduction du glucose, pas une vitamine."
      },
      {
        "content": "NANA.",
        "correct": false,
        "explanation": "NANA désigne l'acide N-acétylneuraminique, principal acide sialique humain."
      },
      {
        "content": "Glucuronate.",
        "correct": false,
        "explanation": "Forme ionisée de l'acide glucuronique."
      }
    ],
    "explanation": "Vitamine C = acide ascorbique."
  },
  {
    "order": 90,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel composé est un antibiotique de la famille des aminoglycosides ?",
    "choices": [
      {
        "content": "Streptomycine.",
        "correct": true,
        "explanation": "La streptomycine est un antibiotique aminoglycosidique produit par des bactéries du genre Streptomyces."
      },
      {
        "content": "Acide ascorbique.",
        "correct": false,
        "explanation": "L'acide ascorbique est la vitamine C, pas un antibiotique aminoglycosidique."
      },
      {
        "content": "Mannitol.",
        "correct": false,
        "explanation": "Le mannitol est un polyol utilisé notamment comme agent osmotique, pas un antibiotique."
      },
      {
        "content": "Acide glucuronique.",
        "correct": false,
        "explanation": "L'acide glucuronique est un dérivé oxydé du glucose, pas un antibiotique."
      }
    ],
    "explanation": "La streptomycine est un antibiotique aminoglycosidique comportant plusieurs unités apparentées à des oses aminés."
  },
  {
    "order": 91,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Comparer glucose-6-phosphate et fructose-1,6-bisphosphate permet d'affirmer que :",
    "choices": [
      {
        "content": "Le premier porte un phosphate en C6.",
        "correct": true,
        "explanation": "Dans glucose-6-phosphate, le nombre 6 désigne le carbone porteur du groupement phosphate."
      },
      {
        "content": "Le second porte deux phosphates.",
        "correct": true,
        "explanation": "Le préfixe bis- et les indices 1,6 indiquent deux groupements phosphate distincts en C1 et C6."
      },
      {
        "content": "Les deux sont des intermédiaires de la glycolyse.",
        "correct": true,
        "explanation": "Le glucose-6-phosphate et le fructose-1,6-bisphosphate interviennent tous deux dans la voie glycolytique."
      },
      {
        "content": "Le préfixe bis- signifie qu'il n'y a aucun phosphate.",
        "correct": false,
        "explanation": "Il indique deux groupes phosphates distincts."
      }
    ],
    "explanation": "La nomenclature indique directement nombre et position des phosphates."
  },
  {
    "order": 92,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un ose est phosphorylé en C6. Quelles conclusions sont exactes ?",
    "choices": [
      {
        "content": "Une fonction alcool de C6 a été estérifiée.",
        "correct": true,
        "explanation": "Le groupement phosphate forme une liaison ester avec l'oxygène du OH porté par C6."
      },
      {
        "content": "Un ester phosphorique a été formé.",
        "correct": true,
        "explanation": "La phosphorylation d'une fonction alcool produit un ester phosphorique."
      },
      {
        "content": "Le glucose-6-phosphate est un exemple.",
        "correct": true,
        "explanation": "Le glucose-6-phosphate porte précisément un groupement phosphate sur C6."
      },
      {
        "content": "L'ose est nécessairement devenu une osamine.",
        "correct": false,
        "explanation": "Aucune amine n'est introduite."
      }
    ],
    "explanation": "Phosphorylation et amination sont deux modifications fonctionnelles différentes."
  },
  {
    "order": 93,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un GAG sulfaté possède des groupes sulfate. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ces groupes sont portés par des esters sulfates de fonctions alcool.",
        "correct": true,
        "explanation": "La sulfatation relie un groupement sulfate à l'oxygène d'une fonction hydroxyle du glucide."
      },
      {
        "content": "Ils confèrent des charges négatives.",
        "correct": true,
        "explanation": "Les esters sulfates sont ionisés aux pH biologiques usuels et contribuent à la charge négative des GAG."
      },
      {
        "content": "Ils peuvent contribuer à la forte polarité/hydrophilie de la molécule.",
        "correct": true,
        "explanation": "Les groupements sulfate ionisés interagissent fortement avec l'eau et les contre-ions."
      },
      {
        "content": "Ils sont équivalents à une réduction en polyol.",
        "correct": false,
        "explanation": "La sulfatation est une estérification d'un hydroxyle ; une réduction en polyol transforme une fonction carbonyle en alcool."
      }
    ],
    "explanation": "La sulfatation des GAG est une modification ionique des fonctions alcool."
  },
  {
    "order": 94,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles associations entre un ose et ses positions de phosphorylation sont exactes ?",
    "choices": [
      {
        "content": "Glucose : C1 ou C6.",
        "correct": true,
        "explanation": "Le glucose-1-phosphate et le glucose-6-phosphate sont deux esters phosphates importants du glucose."
      },
      {
        "content": "Fructose : C1, C6, C1+C6 ou C2+C6.",
        "correct": true,
        "explanation": "Le fructose peut former notamment les fructose-1-phosphate, fructose-6-phosphate, fructose-1,6-bisphosphate et fructose-2,6-bisphosphate."
      },
      {
        "content": "Ribose : C5.",
        "correct": true,
        "explanation": "Le ribose-5-phosphate porte le groupement phosphate sur l'alcool primaire de C5."
      },
      {
        "content": "2-désoxyribose : C5.",
        "correct": true,
        "explanation": "Dans les désoxyribonucléotides, le ou les phosphates sont liés au groupement hydroxyle 5′ du désoxyribose."
      }
    ],
    "explanation": "Les positions doivent être reliées à l'ose concerné."
  },
  {
    "order": 95,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel nom porte le fructose phosphorylé en C1 et C6 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "fructose-1,6-bisphosphate",
        "fructose 1,6 bisphosphate",
        "fructose-1-6-bisphosphate"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le fructose portant des phosphates en C1 et C6 est le fructose-1,6-bisphosphate."
  },
  {
    "order": 96,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule glucidique porte un sulfate et un phosphate. Quelles conclusions générales sont cohérentes ?",
    "choices": [
      {
        "content": "Elle a subi des estérifications de fonctions alcool.",
        "correct": true,
        "explanation": "Les groupements phosphate et sulfate peuvent former des liaisons ester avec les hydroxyles du glucide."
      },
      {
        "content": "Elle peut porter plusieurs charges négatives.",
        "correct": true,
        "explanation": "Sulfates et phosphates sont ionisables."
      },
      {
        "content": "Les deux modifications sont distinctes d'une N-acétylation.",
        "correct": true,
        "explanation": "Elles concernent O plutôt que l'azote."
      },
      {
        "content": "Elle est nécessairement une vitamine.",
        "correct": false,
        "explanation": "La présence d'un sulfate et d'un phosphate ne permet pas de classer la molécule comme vitamine."
      }
    ],
    "explanation": "Phosphorylation et sulfatation sont deux familles d'estérification des oses."
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans la biosynthèse des nucléotides :",
    "choices": [
      {
        "content": "Le ribose-5-phosphate contribue à la formation des ribonucléotides.",
        "correct": true,
        "explanation": "Le ribose-5-phosphate est converti en PRPP, précurseur de la synthèse des nucléotides."
      },
      {
        "content": "Les désoxyribonucléotides sont formés par réduction de ribonucléotides.",
        "correct": true,
        "explanation": "Les ribonucléotide réductases produisent les précurseurs désoxylés nécessaires à l'ADN."
      },
      {
        "content": "Les nucléotides libres portent leurs phosphates sur le carbone 5′ du nucléoside.",
        "correct": true,
        "explanation": "Les nucléosides mono-, di- ou triphosphates portent leurs phosphates sur le groupement hydroxyle 5′ du pentose."
      },
      {
        "content": "Le fructose-1,6-bisphosphate est le pentose de l'ADN.",
        "correct": false,
        "explanation": "Le fructose-1,6-bisphosphate est un hexose intermédiaire de la glycolyse ; le pentose de l'ADN est le 2-désoxyribose."
      }
    ],
    "explanation": "Le ribose-5-phosphate alimente la biosynthèse des ribonucléotides, dont la réduction fournit ensuite les précurseurs de l'ADN."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'acide ascorbique et la streptomycine :",
    "choices": [
      {
        "content": "L'acide ascorbique dérive du métabolisme glucidique, tandis que la streptomycine est un aminoglycoside.",
        "correct": true,
        "explanation": "Ces deux molécules illustrent des liens différents avec la chimie des glucides."
      },
      {
        "content": "L'acide ascorbique est une vitamine.",
        "correct": true,
        "explanation": "L'acide ascorbique est le nom chimique de la vitamine C."
      },
      {
        "content": "La streptomycine est un antibiotique.",
        "correct": true,
        "explanation": "La streptomycine appartient à la famille des antibiotiques aminoglycosidiques."
      },
      {
        "content": "La streptomycine est la forme réduite de l'acide ascorbique.",
        "correct": false,
        "explanation": "La streptomycine et l'acide ascorbique sont des molécules distinctes, sans relation simple d'oxydoréduction entre elles."
      }
    ],
    "explanation": "Ces exemples élargissent les applications des dérivés glucidiques."
  },
  {
    "order": 99,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un dérivé est nommé glucose-1-phosphate. Que peut-on déduire ?",
    "choices": [
      {
        "content": "Le phosphate est porté en C1.",
        "correct": true,
        "explanation": "L'indice 1 de glucose-1-phosphate désigne le carbone porteur du phosphate."
      },
      {
        "content": "Il s'agit d'un ester phosphorique d'un ose.",
        "correct": true,
        "explanation": "Le phosphate est lié à une fonction hydroxyle du glucose par une liaison ester."
      },
      {
        "content": "Le dérivé est issu du glucose.",
        "correct": true,
        "explanation": "Le terme glucose identifie directement le squelette glucidique de la molécule."
      },
      {
        "content": "Il porte nécessairement deux phosphates.",
        "correct": false,
        "explanation": "Le nom n'en indique qu'un."
      }
    ],
    "explanation": "Le nom encode l'ose et la position de phosphorylation."
  },
  {
    "order": 100,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le glucose peut être phosphorylé en C6.",
        "correct": true,
        "explanation": "La phosphorylation de l'alcool primaire de C6 forme le glucose-6-phosphate."
      },
      {
        "content": "Le fructose-1,6-bisphosphate porte deux phosphates.",
        "correct": true,
        "explanation": "Le préfixe bis- et les indices 1,6 indiquent deux phosphates distincts en C1 et C6."
      },
      {
        "content": "Le ribose-5-phosphate contribue à la biosynthèse des ribonucléotides.",
        "correct": true,
        "explanation": "Le ribose-5-phosphate est converti en PRPP, puis engagé dans la biosynthèse des nucléotides."
      },
      {
        "content": "Les esters sulfates contribuent à la charge négative des GAG.",
        "correct": true,
        "explanation": "Les esters sulfates sont ionisés aux pH biologiques usuels et contribuent à la charge négative des GAG."
      },
      {
        "content": "L'acide ascorbique est la vitamine C.",
        "correct": true,
        "explanation": "L'acide L-ascorbique est la forme chimique communément appelée vitamine C."
      },
      {
        "content": "La streptomycine est un polyol du glucose.",
        "correct": false,
        "explanation": "La streptomycine est un antibiotique aminoglycosidique, pas un polyol du glucose."
      },
      {
        "content": "Les désoxyribonucléotides sont produits par oxydation des ribonucléotides.",
        "correct": false,
        "explanation": "Ils sont produits par réduction des ribonucléotides, et non par oxydation."
      },
      {
        "content": "La phosphorylation est une réduction du carbonyle.",
        "correct": false,
        "explanation": "La phosphorylation est l'estérification d'une fonction hydroxyle par un groupement phosphate."
      },
      {
        "content": "Le fructose ne peut jamais porter deux phosphates.",
        "correct": false,
        "explanation": "Le fructose-1,6-bisphosphate et le fructose-2,6-bisphosphate portent chacun deux groupements phosphate."
      },
      {
        "content": "L'être humain synthétise suffisamment de vitamine C grâce à une L-gulonolactone oxydase fonctionnelle.",
        "correct": false,
        "explanation": "Le gène humain correspondant n'assure pas la production d'une enzyme fonctionnelle ; la vitamine C est donc essentielle dans l'alimentation."
      }
    ],
    "explanation": "Cette sélection consolide esters d'oses et exemples de dérivés."
  }
];
