import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch5 — Section B — Appareil de Golgi : maturation et tri */
export const UE14_BIOCELL_CH5_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'organisation de l'appareil de Golgi ?",
    "choices": [
      {
        "content": "Le TGN est synonyme de l'ensemble des trois citernes cis, médiane et trans.",
        "correct": false,
        "explanation": "C'est un réseau spécialisé du côté trans."
      },
      {
        "content": "La face cis reçoit principalement le trafic provenant du RE.",
        "correct": true,
        "explanation": "Elle se situe du côté d'entrée du Golgi."
      },
      {
        "content": "L'appareil de Golgi est constitué de citernes empilées formant des dictyosomes.",
        "correct": true,
        "explanation": "Les citernes présentent une polarité structurale et fonctionnelle."
      },
      {
        "content": "Les citernes médianes assurent une partie importante du remaniement des glycannes.",
        "correct": true,
        "explanation": "Des enzymes différentes sont distribuées selon les compartiments."
      },
      {
        "content": "La face trans et le réseau trans-Golgien participent au tri vers différentes destinations.",
        "correct": true,
        "explanation": "Le TGN est une station majeure de tri."
      }
    ],
    "explanation": "Le Golgi est polarisé de cis vers trans et son TGN constitue une station majeure de tri vers les destinations cellulaires."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant les modifications glucidiques dans le Golgi, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Toute N-glycosylation débute dans le Golgi trans.",
        "correct": false,
        "explanation": "Elle débute dans le RE."
      },
      {
        "content": "La sialylation terminale de nombreuses glycoprotéines se déroule dans des compartiments golgiens tardifs.",
        "correct": true,
        "explanation": "L'acide sialique est souvent ajouté en fin de maturation."
      },
      {
        "content": "O-glycosylation et N-glycosylation sont strictement la même réaction.",
        "correct": false,
        "explanation": "Elles diffèrent notamment par l'atome porteur et les voies enzymatiques."
      },
      {
        "content": "Les glycosyltransférases retirent uniquement des sucres sans jamais en ajouter.",
        "correct": false,
        "explanation": "Elles transfèrent des résidus sucrés."
      },
      {
        "content": "Les nucléotides-sucres sont inutiles au Golgi.",
        "correct": false,
        "explanation": "Ils fournissent de nombreux donneurs activés."
      }
    ],
    "explanation": "Le Golgi remanie les N-glycannes et initie de nombreuses O-glycosylations grâce à une distribution ordonnée d'enzymes."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle enzyme initie le marquage M6P des hydrolases lysosomales ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "GlcNAc-1-phosphotransférase",
        "N-acétylglucosamine-1-phosphotransférase",
        "GNPT"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le M6P est généré sur les N-glycannes de nombreuses hydrolases lysosomales puis reconnu par des récepteurs au TGN."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement le récepteur du mannose-6-phosphate ?",
    "choices": [
      {
        "content": "Les récepteurs M6P sont détruits dans les lysosomes à chaque cycle.",
        "correct": false,
        "explanation": "Ils sont majoritairement recyclés."
      },
      {
        "content": "Le récepteur M6P adresse les protéines au noyau.",
        "correct": false,
        "explanation": "Il intervient dans la voie lysosomale."
      },
      {
        "content": "Une fraction de récepteurs M6P peut également circuler par la membrane plasmique.",
        "correct": true,
        "explanation": "Le récepteur cation-indépendant peut recapturer des hydrolases sécrétées."
      },
      {
        "content": "Le M6P se fixe au récepteur uniquement à pH lysosomal très acide.",
        "correct": false,
        "explanation": "La liaison est favorisée au Golgi et relâchée en milieu endosomal plus acide."
      },
      {
        "content": "Le transport vers les endosomes implique des manteaux à clathrine et des adaptateurs.",
        "correct": true,
        "explanation": "Les récepteurs portent des signaux de tri dans leur domaine cytosolique."
      }
    ],
    "explanation": "Les récepteurs M6P trient les hydrolases au TGN, les livrent aux endosomes puis recyclent vers le Golgi."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant le rôle du Golgi dans le métabolisme lipidique, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Le Golgi ne contient aucun lipide, seulement des protéines.",
        "correct": false,
        "explanation": "C'est un organite membranaire riche en lipides."
      },
      {
        "content": "Tous les phospholipides cellulaires sont synthétisés exclusivement dans le Golgi.",
        "correct": false,
        "explanation": "Le RE joue un rôle central dans la synthèse de nombreux phospholipides."
      },
      {
        "content": "La synthèse de sphingomyéline et de nombreux glycosphingolipides implique le Golgi.",
        "correct": true,
        "explanation": "Les précurseurs sont notamment fournis par le RE."
      },
      {
        "content": "La synthèse lipidique n'a aucun lien avec le trafic membranaire.",
        "correct": false,
        "explanation": "Les lipides sont transportés avec les membranes et par des protéines de transfert."
      },
      {
        "content": "RE et Golgi coopèrent dans la construction des membranes du système sécrétoire.",
        "correct": true,
        "explanation": "Leur contribution n'est pas interchangeable."
      }
    ],
    "explanation": "Le RE fournit de nombreux précurseurs membranaires et le Golgi assure notamment des étapes de maturation des sphingolipides.",
    "requiredSelectionCount": 2
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le tri au réseau trans-Golgien, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les lysosomes reçoivent leurs hydrolases directement du RE sans passage par le Golgi.",
        "correct": false,
        "explanation": "Les hydrolases traversent le Golgi et le TGN."
      },
      {
        "content": "Les protéines lysosomales solubles marquées M6P sont triées dans des transporteurs à clathrine.",
        "correct": true,
        "explanation": "Le manteau aide à concentrer les complexes récepteur-cargo."
      },
      {
        "content": "Le TGN sépare les cargos vers plusieurs destinations.",
        "correct": true,
        "explanation": "Membrane plasmique, endosomes, lysosomes et granules de sécrétion font partie des voies possibles."
      },
      {
        "content": "Toute vésicule quittant le TGN porte obligatoirement de la clathrine jusqu'à sa fusion avec la membrane plasmique.",
        "correct": false,
        "explanation": "Les voies de sortie sont diverses et les manteaux sont retirés avant fusion."
      },
      {
        "content": "Les cargos de la sécrétion constitutive peuvent quitter le TGN sans être définis par un manteau universel de caveoline.",
        "correct": true,
        "explanation": "La machinerie de transport dépend du cargo et du type cellulaire."
      }
    ],
    "explanation": "Le TGN distribue sélectivement les cargos vers la surface, les endosomes, les lysosomes ou les voies sécrétoires spécialisées."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant la maturation des granules de sécrétion, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Les granules de sécrétion régulée peuvent stocker des proprotéines ou prohormones avant leur libération.",
        "correct": true,
        "explanation": "La maturation permet une libération rapide d'un produit actif."
      },
      {
        "content": "Un granule de sécrétion régulée fusionne en permanence sans signal.",
        "correct": false,
        "explanation": "La fusion est déclenchée."
      },
      {
        "content": "La maturation d'un granule de sécrétion se caractérise universellement par un passage d'un pH acide vers un pH neutre.",
        "correct": false,
        "explanation": "De nombreux granules s'acidifient au cours de leur maturation."
      },
      {
        "content": "Les granules matures conservent nécessairement une cage de clathrine au moment de la fusion.",
        "correct": false,
        "explanation": "Le manteau n'est pas conservé comme structure de fusion."
      },
      {
        "content": "La proinsuline est activée par N-glycosylation dans le lysosome.",
        "correct": false,
        "explanation": "Elle est clivée dans la voie sécrétoire régulée."
      }
    ],
    "explanation": "Les granules de sécrétion régulée concentrent et maturent leurs cargos, souvent dans un milieu progressivement acidifié."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel réseau golgien joue un rôle majeur dans le tri de sortie ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "TGN",
        "réseau trans-Golgien",
        "trans-Golgi network"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le Golgi est polarisé de cis vers trans et son TGN constitue une station majeure de tri vers les destinations cellulaires."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le Golgi ne contient aucun lipide, seulement des protéines.",
        "correct": false,
        "explanation": "C'est un organite membranaire riche en lipides."
      },
      {
        "content": "La synthèse de sphingomyéline et de nombreux glycosphingolipides implique le Golgi.",
        "correct": true,
        "explanation": "Les précurseurs sont notamment fournis par le RE."
      },
      {
        "content": "La synthèse lipidique n'a aucun lien avec le trafic membranaire.",
        "correct": false,
        "explanation": "Les lipides sont transportés avec les membranes et par des protéines de transfert."
      },
      {
        "content": "Des sucres activés par des nucléotides servent de donneurs aux glycosyltransférases.",
        "correct": true,
        "explanation": "UDP-galactose est un exemple de donneur activé."
      },
      {
        "content": "Le Golgi remanie les N-glycannes initiés dans le RE.",
        "correct": true,
        "explanation": "Des mannosidases et glycosyltransférases réalisent des modifications séquentielles."
      },
      {
        "content": "Les lipides synthétisés ou modifiés dans le Golgi peuvent être distribués vers la membrane plasmique et les endosomes.",
        "correct": true,
        "explanation": "Le tri lipidique accompagne le trafic protéique."
      },
      {
        "content": "Toute N-glycosylation débute dans le Golgi trans.",
        "correct": false,
        "explanation": "Elle débute dans le RE."
      },
      {
        "content": "Les glycosyltransférases retirent uniquement des sucres sans jamais en ajouter.",
        "correct": false,
        "explanation": "Elles transfèrent des résidus sucrés."
      },
      {
        "content": "La sialylation terminale de nombreuses glycoprotéines se déroule dans des compartiments golgiens tardifs.",
        "correct": true,
        "explanation": "L'acide sialique est souvent ajouté en fin de maturation."
      },
      {
        "content": "Tous les phospholipides cellulaires sont synthétisés exclusivement dans le Golgi.",
        "correct": false,
        "explanation": "Le RE joue un rôle central dans la synthèse de nombreux phospholipides."
      }
    ],
    "explanation": "Le Golgi remanie les N-glycannes et initie de nombreuses O-glycosylations grâce à une distribution ordonnée d'enzymes. Le RE fournit de nombreux précurseurs membranaires et le Golgi assure notamment des étapes de maturation des sphingolipides."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le marquage mannose-6-phosphate, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "La GlcNAc-1-phosphotransférase reconnaît un signal conformationnel porté par les hydrolases lysosomales.",
        "correct": true,
        "explanation": "Elle transfère un groupement GlcNAc-phosphate sur des mannoses."
      },
      {
        "content": "Le M6P est le signal général de toutes les protéines sécrétées.",
        "correct": false,
        "explanation": "Il cible principalement de nombreuses hydrolases lysosomales."
      },
      {
        "content": "La majorité des hydrolases lysosomales solubles acquièrent un signal mannose-6-phosphate sur leurs N-glycannes.",
        "correct": true,
        "explanation": "Ce signal permet leur tri vers le système endolysosomal."
      },
      {
        "content": "Une enzyme d'uncovering retire ensuite le GlcNAc pour exposer le M6P.",
        "correct": true,
        "explanation": "Le marqueur final est alors reconnu par les récepteurs M6P."
      },
      {
        "content": "Le début de la formation du marqueur M6P se déroule dans le Golgi précoce/cis.",
        "correct": true,
        "explanation": "Le tri par les récepteurs M6P intervient surtout au TGN."
      }
    ],
    "explanation": "Le M6P est généré sur les N-glycannes de nombreuses hydrolases lysosomales puis reconnu par des récepteurs au TGN."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'organisation de l'appareil de Golgi ?",
    "choices": [
      {
        "content": "L'appareil de Golgi est constitué de citernes empilées formant des dictyosomes.",
        "correct": true,
        "explanation": "Les citernes présentent une polarité structurale et fonctionnelle."
      },
      {
        "content": "Le Golgi est une simple extension continue de la lumière du RE.",
        "correct": false,
        "explanation": "Il s'agit d'un organite distinct relié au RE par trafic membranaire."
      },
      {
        "content": "Toutes les citernes golgiennes possèdent exactement les mêmes enzymes.",
        "correct": false,
        "explanation": "La compartimentation enzymatique est essentielle."
      },
      {
        "content": "Les citernes médianes assurent une partie importante du remaniement des glycannes.",
        "correct": true,
        "explanation": "Des enzymes différentes sont distribuées selon les compartiments."
      },
      {
        "content": "Le TGN est synonyme de l'ensemble des trois citernes cis, médiane et trans.",
        "correct": false,
        "explanation": "C'est un réseau spécialisé du côté trans."
      }
    ],
    "explanation": "Le Golgi est polarisé de cis vers trans et son TGN constitue une station majeure de tri vers les destinations cellulaires."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Citez un nucléotide-sucre utilisé comme donneur par des glycosyltransférases.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "UDP-galactose",
        "UDP-Gal",
        "UDP-GlcNAc",
        "CMP-acide sialique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le Golgi remanie les N-glycannes et initie de nombreuses O-glycosylations grâce à une distribution ordonnée d'enzymes."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement le marquage mannose-6-phosphate ?",
    "choices": [
      {
        "content": "La GlcNAc-1-phosphotransférase reconnaît un signal conformationnel porté par les hydrolases lysosomales.",
        "correct": true,
        "explanation": "Elle transfère un groupement GlcNAc-phosphate sur des mannoses."
      },
      {
        "content": "Le récepteur M6P synthétise lui-même les hydrolases lysosomales.",
        "correct": false,
        "explanation": "Il les trie et les transporte."
      },
      {
        "content": "Le M6P est ajouté directement sur la chaîne polypeptidique sans relation avec un N-glycanne.",
        "correct": false,
        "explanation": "Il modifie des mannoses de N-glycannes."
      },
      {
        "content": "Le M6P est le signal général de toutes les protéines sécrétées.",
        "correct": false,
        "explanation": "Il cible principalement de nombreuses hydrolases lysosomales."
      },
      {
        "content": "La GlcNAc-1-phosphotransférase agit dans le cytosol sur des protéines libres.",
        "correct": false,
        "explanation": "La réaction se déroule dans la voie sécrétoire, au Golgi."
      }
    ],
    "explanation": "Le M6P est généré sur les N-glycannes de nombreuses hydrolases lysosomales puis reconnu par des récepteurs au TGN."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le récepteur du mannose-6-phosphate, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Les récepteurs M6P sont des protéines solubles du cytosol.",
        "correct": false,
        "explanation": "Ce sont des protéines transmembranaires."
      },
      {
        "content": "Les récepteurs M6P reconnaissent les hydrolases marquées au niveau du TGN.",
        "correct": true,
        "explanation": "Ils les concentrent dans des transporteurs vers les endosomes."
      },
      {
        "content": "Une fraction de récepteurs M6P peut également circuler par la membrane plasmique.",
        "correct": true,
        "explanation": "Le récepteur cation-indépendant peut recapturer des hydrolases sécrétées."
      },
      {
        "content": "Le M6P se fixe au récepteur uniquement à pH lysosomal très acide.",
        "correct": false,
        "explanation": "La liaison est favorisée au Golgi et relâchée en milieu endosomal plus acide."
      },
      {
        "content": "L'acidification endosomale favorise la dissociation entre hydrolase et récepteur.",
        "correct": true,
        "explanation": "Le récepteur peut alors être recyclé vers le TGN."
      }
    ],
    "explanation": "Les récepteurs M6P trient les hydrolases au TGN, les livrent aux endosomes puis recyclent vers le Golgi."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel grand groupe lipidique est notamment maturé dans l'appareil de Golgi ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sphingolipides",
        "glycosphingolipides",
        "sphingomyéline"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le RE fournit de nombreux précurseurs membranaires et le Golgi assure notamment des étapes de maturation des sphingolipides."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur le tri au réseau trans-Golgien, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Le TGN n'a aucun rôle de tri et envoie tous les cargos au même endroit.",
        "correct": false,
        "explanation": "C'est une station majeure de tri."
      },
      {
        "content": "Les protéines lysosomales solubles marquées M6P sont triées dans des transporteurs à clathrine.",
        "correct": true,
        "explanation": "Le manteau aide à concentrer les complexes récepteur-cargo."
      },
      {
        "content": "Les lysosomes reçoivent leurs hydrolases directement du RE sans passage par le Golgi.",
        "correct": false,
        "explanation": "Les hydrolases traversent le Golgi et le TGN."
      },
      {
        "content": "La caveoline constitue le manteau universel de la sécrétion constitutive.",
        "correct": false,
        "explanation": "Cette formulation est trop générale."
      },
      {
        "content": "Les granules de sécrétion régulée subissent une maturation après leur formation.",
        "correct": true,
        "explanation": "Leur contenu peut être concentré et protéolysé."
      }
    ],
    "explanation": "Le TGN distribue sélectivement les cargos vers la surface, les endosomes, les lysosomes ou les voies sécrétoires spécialisées.",
    "requiredSelectionCount": 2
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la maturation des granules de sécrétion, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Un signal, souvent lié au Ca2+, déclenche ensuite l'exocytose des granules matures.",
        "correct": true,
        "explanation": "La libération est régulée et non constitutive."
      },
      {
        "content": "Les granules de sécrétion s'acidifient généralement au cours de leur maturation.",
        "correct": true,
        "explanation": "L'acidification favorise le traitement et la condensation de plusieurs cargos."
      },
      {
        "content": "Les granules de sécrétion régulée peuvent stocker des proprotéines ou prohormones avant leur libération.",
        "correct": true,
        "explanation": "La maturation permet une libération rapide d'un produit actif."
      },
      {
        "content": "Des endoprotéases peuvent cliver des précurseurs pendant la maturation des granules.",
        "correct": true,
        "explanation": "La proinsuline est transformée en insuline et peptide C."
      },
      {
        "content": "Un granule de sécrétion régulée fusionne en permanence sans signal.",
        "correct": false,
        "explanation": "La fusion est déclenchée."
      }
    ],
    "explanation": "Les granules de sécrétion régulée concentrent et maturent leurs cargos, souvent dans un milieu progressivement acidifié."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement l'organisation de l'appareil de Golgi ?",
    "choices": [
      {
        "content": "Le Golgi est une simple extension continue de la lumière du RE.",
        "correct": false,
        "explanation": "Il s'agit d'un organite distinct relié au RE par trafic membranaire."
      },
      {
        "content": "La face cis reçoit principalement le trafic provenant du RE.",
        "correct": true,
        "explanation": "Elle se situe du côté d'entrée du Golgi."
      },
      {
        "content": "La face trans est l'entrée principale des protéines venant du RE.",
        "correct": false,
        "explanation": "L'entrée se fait principalement par le côté cis."
      },
      {
        "content": "Le TGN est synonyme de l'ensemble des trois citernes cis, médiane et trans.",
        "correct": false,
        "explanation": "C'est un réseau spécialisé du côté trans."
      },
      {
        "content": "Toutes les citernes golgiennes possèdent exactement les mêmes enzymes.",
        "correct": false,
        "explanation": "La compartimentation enzymatique est essentielle."
      }
    ],
    "explanation": "Le Golgi est polarisé de cis vers trans et son TGN constitue une station majeure de tri vers les destinations cellulaires."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les modifications glucidiques dans le Golgi, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le Golgi remanie les N-glycannes initiés dans le RE.",
        "correct": true,
        "explanation": "Des mannosidases et glycosyltransférases réalisent des modifications séquentielles."
      },
      {
        "content": "Toute N-glycosylation débute dans le Golgi trans.",
        "correct": false,
        "explanation": "Elle débute dans le RE."
      },
      {
        "content": "De nombreuses O-glycosylations sont initiées dans le Golgi.",
        "correct": true,
        "explanation": "Elles ajoutent des sucres sur des résidus comme sérine ou thréonine selon le type de glycosylation."
      },
      {
        "content": "O-glycosylation et N-glycosylation sont strictement la même réaction.",
        "correct": false,
        "explanation": "Elles diffèrent notamment par l'atome porteur et les voies enzymatiques."
      },
      {
        "content": "Les glycosyltransférases retirent uniquement des sucres sans jamais en ajouter.",
        "correct": false,
        "explanation": "Elles transfèrent des résidus sucrés."
      }
    ],
    "explanation": "Le Golgi remanie les N-glycannes et initie de nombreuses O-glycosylations grâce à une distribution ordonnée d'enzymes."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel marqueur glucidique cible de nombreuses hydrolases solubles vers les lysosomes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "mannose-6-phosphate",
        "M6P"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le M6P est généré sur les N-glycannes de nombreuses hydrolases lysosomales puis reconnu par des récepteurs au TGN."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur le récepteur du mannose-6-phosphate, laquelle est correcte ?",
    "choices": [
      {
        "content": "Le transport vers les endosomes implique des manteaux à clathrine et des adaptateurs.",
        "correct": true,
        "explanation": "Les récepteurs portent des signaux de tri dans leur domaine cytosolique."
      },
      {
        "content": "Le récepteur M6P adresse les protéines au noyau.",
        "correct": false,
        "explanation": "Il intervient dans la voie lysosomale."
      },
      {
        "content": "Les récepteurs M6P sont détruits dans les lysosomes à chaque cycle.",
        "correct": false,
        "explanation": "Ils sont majoritairement recyclés."
      },
      {
        "content": "Le M6P se fixe au récepteur uniquement à pH lysosomal très acide.",
        "correct": false,
        "explanation": "La liaison est favorisée au Golgi et relâchée en milieu endosomal plus acide."
      },
      {
        "content": "Les récepteurs M6P sont des protéines solubles du cytosol.",
        "correct": false,
        "explanation": "Ce sont des protéines transmembranaires."
      }
    ],
    "explanation": "Les récepteurs M6P trient les hydrolases au TGN, les livrent aux endosomes puis recyclent vers le Golgi."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans une autre application, quel grand groupe lipidique est notamment maturé dans l'appareil de Golgi ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sphingolipides",
        "glycosphingolipides",
        "sphingomyéline"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le RE fournit de nombreux précurseurs membranaires et le Golgi assure notamment des étapes de maturation des sphingolipides."
  }
];
