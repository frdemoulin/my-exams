import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Rôles biologiques des acides aminés et des peptides — Section C — Peptides thérapeutiques et hormones peptidiques */
export const UE14_BIOCH_CH11_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l’insuline mature, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle abaisse la glycémie en favorisant l’utilisation et le stockage du glucose selon les tissus.",
        "correct": true,
        "explanation": "C’est l’hormone hypoglycémiante majeure."
      },
      {
        "content": "Elle augmente la glycémie comme fonction principale.",
        "correct": false,
        "explanation": "Elle est hypoglycémiante."
      },
      {
        "content": "L’insuline humaine mature comporte 51 acides aminés.",
        "correct": true,
        "explanation": "La chaîne A en contient 21 et la chaîne B 30."
      },
      {
        "content": "Elle possède trois chaînes A, B et C dans sa forme mature.",
        "correct": false,
        "explanation": "Le peptide C est clivé."
      },
      {
        "content": "Elle comporte deux chaînes A et B.",
        "correct": true,
        "explanation": "Elles sont issues de la proinsuline."
      }
    ],
    "explanation": "L’insuline humaine mature compte 51 résidus, deux chaînes et trois ponts disulfure au total."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant l’insuline mature, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elle comporte 29 acides aminés.",
        "correct": false,
        "explanation": "Ce nombre correspond au glucagon."
      },
      {
        "content": "Elle augmente la glycémie comme fonction principale.",
        "correct": false,
        "explanation": "Elle est hypoglycémiante."
      },
      {
        "content": "Elle possède trois chaînes A, B et C dans sa forme mature.",
        "correct": false,
        "explanation": "Le peptide C est clivé."
      },
      {
        "content": "Elle comporte deux chaînes A et B.",
        "correct": true,
        "explanation": "Elles sont issues de la proinsuline."
      },
      {
        "content": "Elle ne possède aucun pont disulfure.",
        "correct": false,
        "explanation": "Elle en possède trois au total."
      }
    ],
    "explanation": "L’insuline humaine mature compte 51 résidus, deux chaînes et trois ponts disulfure au total."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel type cellulaire des îlots de Langerhans produit l’insuline ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cellules bêta",
        "cellules beta",
        "cellules β",
        "cellule bêta"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les cellules bêta pancréatiques synthétisent et sécrètent l’insuline en réponse notamment au glucose."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les cellules productrices d’insuline, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les cellules alpha sont la source principale d’insuline.",
        "correct": false,
        "explanation": "Elles sécrètent surtout le glucagon."
      },
      {
        "content": "Les cellules alpha voisines synthétisent surtout le glucagon.",
        "correct": true,
        "explanation": "Les deux hormones ont des effets glycémiques opposés."
      },
      {
        "content": "Une augmentation de la glycémie stimule normalement leur sécrétion d’insuline.",
        "correct": true,
        "explanation": "Le métabolisme du glucose déclenche la sécrétion."
      },
      {
        "content": "Les cellules bêta des îlots de Langerhans synthétisent l’insuline.",
        "correct": true,
        "explanation": "Elles sont des cellules endocrines du pancréas."
      },
      {
        "content": "L’insuline est libérée dans le sang par exocytose de granules.",
        "correct": true,
        "explanation": "La maturation est achevée dans la voie sécrétoire."
      }
    ],
    "explanation": "Les cellules bêta pancréatiques synthétisent et sécrètent l’insuline en réponse notamment au glucose."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la pro-opiomélanocortine, laquelle est correcte ?",
    "choices": [
      {
        "content": "La POMC est un précurseur polypeptidique.",
        "correct": true,
        "explanation": "Elle est clivée en plusieurs peptides biologiquement actifs."
      },
      {
        "content": "Elle ne peut donner qu’un seul peptide final.",
        "correct": false,
        "explanation": "Elle donne plusieurs produits."
      },
      {
        "content": "La POMC est un monosaccharide.",
        "correct": false,
        "explanation": "C’est une prohormone polypeptidique."
      },
      {
        "content": "La bêta-endorphine ne possède aucun lien avec POMC.",
        "correct": false,
        "explanation": "Elle en dérive."
      },
      {
        "content": "L’ACTH est synthétisée à partir du cholestérol et non d’un précurseur peptidique.",
        "correct": false,
        "explanation": "Elle dérive de POMC."
      }
    ],
    "explanation": "La POMC illustre la production de plusieurs peptides par clivages tissulaires d’un même précurseur."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant la pro-opiomélanocortine, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "La bêta-endorphine ne possède aucun lien avec POMC.",
        "correct": false,
        "explanation": "Elle en dérive."
      },
      {
        "content": "L’ACTH est synthétisée à partir du cholestérol et non d’un précurseur peptidique.",
        "correct": false,
        "explanation": "Elle dérive de POMC."
      },
      {
        "content": "Elle ne peut donner qu’un seul peptide final.",
        "correct": false,
        "explanation": "Elle donne plusieurs produits."
      },
      {
        "content": "L’ACTH dérive de la POMC.",
        "correct": true,
        "explanation": "Elle stimule le cortex surrénalien."
      },
      {
        "content": "La bêta-endorphine dérive également de la POMC.",
        "correct": true,
        "explanation": "C’est un peptide opioïde endogène."
      }
    ],
    "explanation": "La POMC illustre la production de plusieurs peptides par clivages tissulaires d’un même précurseur.",
    "requiredSelectionCount": 2
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la synthèse ribosome-indépendante de petits peptides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Chez les microorganismes, des nonribosomal peptide synthetases produisent de nombreux peptides bioactifs.",
        "correct": true,
        "explanation": "Ces complexes enzymatiques incorporent parfois des acides aminés non standards ou D."
      },
      {
        "content": "La synthèse ribosome-indépendante permet des architectures différentes des peptides ribosomaux.",
        "correct": true,
        "explanation": "Cyclisation et résidus inhabituels sont fréquents dans les produits microbiens."
      },
      {
        "content": "Les peptides non ribosomaux ne peuvent contenir aucun acide aminé D.",
        "correct": false,
        "explanation": "Ils peuvent en contenir."
      },
      {
        "content": "Tous les peptides sont obligatoirement traduits directement par un ribosome.",
        "correct": false,
        "explanation": "Des voies enzymatiques indépendantes de la traduction existent."
      },
      {
        "content": "Le glutathion est produit par traduction d’un gène codant exactement trois résidus.",
        "correct": false,
        "explanation": "Il est assemblé enzymatiquement."
      }
    ],
    "explanation": "Des petits peptides, dont le glutathion, sont assemblés enzymatiquement sans traduction directe d’un ARNm."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel tripeptide humain est synthétisé par des ligases ATP-dépendantes indépendamment de la traduction ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glutathion",
        "GSH",
        "le glutathion"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Des petits peptides, dont le glutathion, sont assemblés enzymatiquement sans traduction directe d’un ARNm."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant le glutathion ?",
    "choices": [
      {
        "content": "Il ne possède aucun groupement thiol.",
        "correct": false,
        "explanation": "La cystéine apporte un thiol."
      },
      {
        "content": "Il est principalement pro-oxydant.",
        "correct": false,
        "explanation": "Il constitue un système antioxydant majeur."
      },
      {
        "content": "Il est présent dans pratiquement toutes les cellules.",
        "correct": true,
        "explanation": "Sa concentration intracellulaire est souvent élevée."
      },
      {
        "content": "Il est un triacylglycérol.",
        "correct": false,
        "explanation": "C’est un petit peptide."
      },
      {
        "content": "C’est un tétrapeptide dépourvu de cystéine.",
        "correct": false,
        "explanation": "C’est un tripeptide contenant Cys."
      }
    ],
    "explanation": "Le glutathion est le tripeptide gamma-Glu-Cys-Gly et un système antioxydant cellulaire majeur."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le glutathion, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il est un triacylglycérol.",
        "correct": false,
        "explanation": "C’est un petit peptide."
      },
      {
        "content": "Il est présent dans pratiquement toutes les cellules.",
        "correct": true,
        "explanation": "Sa concentration intracellulaire est souvent élevée."
      },
      {
        "content": "Le thiol de la cystéine participe à son pouvoir réducteur.",
        "correct": true,
        "explanation": "GSH peut être oxydé en GSSG."
      },
      {
        "content": "C’est un tétrapeptide dépourvu de cystéine.",
        "correct": false,
        "explanation": "C’est un tripeptide contenant Cys."
      },
      {
        "content": "Il participe à la défense contre les peroxydes via les glutathion peroxydases.",
        "correct": true,
        "explanation": "Il protège les cellules du stress oxydant."
      }
    ],
    "explanation": "Le glutathion est le tripeptide gamma-Glu-Cys-Gly et un système antioxydant cellulaire majeur."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la liaison gamma-glutamyl du glutathion, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Toutes les liaisons du glutathion utilisent le carboxyle alpha du glutamate.",
        "correct": false,
        "explanation": "La première utilise le gamma-carboxyle."
      },
      {
        "content": "La liaison cystéine-glycine est une liaison peptidique alpha classique.",
        "correct": true,
        "explanation": "Le caractère atypique concerne surtout gamma-Glu-Cys."
      },
      {
        "content": "L’amine de la cystéine participe à cette liaison.",
        "correct": true,
        "explanation": "Elle forme une liaison amide avec le gamma-carboxyle."
      },
      {
        "content": "Cette structure contribue à la stabilité métabolique du glutathion.",
        "correct": true,
        "explanation": "Elle le distingue d’un tripeptide linéaire ordinaire."
      },
      {
        "content": "La liaison entre glutamate et cystéine utilise le gamma-carboxyle de la chaîne latérale du glutamate.",
        "correct": true,
        "explanation": "Elle diffère d’une liaison peptidique alpha classique."
      }
    ],
    "explanation": "Le glutathion possède une liaison gamma-glutamyl atypique entre le gamma-carboxyle de Glu et l’amine de Cys."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel groupement carboxyle du glutamate participe à la liaison atypique gamma-Glu-Cys ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "gamma-carboxyle",
        "carboxyle gamma",
        "γ-carboxyle",
        "fonction gamma COOH"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le glutathion possède une liaison gamma-glutamyl atypique entre le gamma-carboxyle de Glu et l’amine de Cys."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "La proinsuline simplifiée est représentée par trois segments. Cliquez sur le segment central qui sera libéré sous forme de peptide C lors de la maturation.",
    "image": {
      "src": "/images/training/ue14/biochimie/roles-biologiques-acides-amines-peptides/proinsuline-peptide-c-qzone.svg",
      "alt": "Schéma simplifié de proinsuline avec chaînes A et B et segment central",
      "width": 900,
      "height": 460
    },
    "expectedZones": [
      {
        "id": "peptide-c",
        "label": "Segment libéré : peptide C",
        "x": 0.5,
        "y": 0.52,
        "tolerance": 0.11
      }
    ],
    "explanation": "Le peptide C relie les futures chaînes A et B dans la proinsuline puis est clivé lors de la maturation."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les acides aminés D dans certaines structures microbiennes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le peptidoglycane ne contient que des L-acides aminés.",
        "correct": false,
        "explanation": "Il contient des D-AA caractéristiques."
      },
      {
        "content": "Les protéines humaines synthétisées par les ribosomes utilisent presque exclusivement des L-acides aminés.",
        "correct": true,
        "explanation": "La chiralité D dans les peptides microbiens est donc un contraste utile."
      },
      {
        "content": "Des peptides non ribosomaux microbiens peuvent contenir des acides aminés D.",
        "correct": true,
        "explanation": "Les synthétases peuvent incorporer ou épimériser des résidus."
      },
      {
        "content": "Un D-acide aminé est forcément un glucide.",
        "correct": false,
        "explanation": "C’est un énantiomère/configuration d’acide aminé."
      },
      {
        "content": "La chiralité n’influence jamais la reconnaissance enzymatique.",
        "correct": false,
        "explanation": "Elle est souvent déterminante."
      }
    ],
    "explanation": "Des D-acides aminés existent dans le peptidoglycane et certains peptides microbiens, contrairement aux protéines ribosomales humaines."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant la cyclosporine, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "C’est un monosaccharide de 11 carbones.",
        "correct": false,
        "explanation": "C’est un peptide cyclique."
      },
      {
        "content": "Elle est un peptide linéaire ribosomal classique.",
        "correct": false,
        "explanation": "Sa biosynthèse naturelle est non ribosomale et elle est cyclique."
      },
      {
        "content": "Elle est utilisée pour provoquer le rejet de greffe.",
        "correct": false,
        "explanation": "Elle vise à le prévenir."
      },
      {
        "content": "C’est un peptide cyclique de 11 résidus.",
        "correct": true,
        "explanation": "Elle est souvent appelée undécapeptide cyclique."
      },
      {
        "content": "Elle est immunosuppressive.",
        "correct": true,
        "explanation": "Elle est utilisée notamment en transplantation."
      }
    ],
    "explanation": "La cyclosporine A est un undécapeptide cyclique immunosuppresseur qui inhibe la calcineurine via la cyclophiline.",
    "requiredSelectionCount": 2
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la cyclosporine ?",
    "choices": [
      {
        "content": "Elle est immunosuppressive.",
        "correct": true,
        "explanation": "Elle est utilisée notamment en transplantation."
      },
      {
        "content": "Elle est un peptide linéaire ribosomal classique.",
        "correct": false,
        "explanation": "Sa biosynthèse naturelle est non ribosomale et elle est cyclique."
      },
      {
        "content": "Elle est produite naturellement par un champignon et sa biosynthèse est non ribosomale.",
        "correct": true,
        "explanation": "Des enzymes spécialisées assemblent ses résidus."
      },
      {
        "content": "C’est un peptide cyclique de 11 résidus.",
        "correct": true,
        "explanation": "Elle est souvent appelée undécapeptide cyclique."
      },
      {
        "content": "C’est un monosaccharide de 11 carbones.",
        "correct": false,
        "explanation": "C’est un peptide cyclique."
      }
    ],
    "explanation": "La cyclosporine A est un undécapeptide cyclique immunosuppresseur qui inhibe la calcineurine via la cyclophiline."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "De quels deux acides aminés dérive l’aspartame ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "aspartate et phénylalanine",
        "acide aspartique et phénylalanine",
        "Asp et Phe"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’aspartame est un dérivé méthylé du dipeptide Asp-Phe et une source de phénylalanine."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant l’aspartame, laquelle est correcte ?",
    "choices": [
      {
        "content": "Il illustre qu’un dérivé peptidique peut être utilisé comme additif alimentaire.",
        "correct": true,
        "explanation": "Ce n’est pas une hormone."
      },
      {
        "content": "Il ne peut libérer aucune phénylalanine.",
        "correct": false,
        "explanation": "Il contient un résidu Phe."
      },
      {
        "content": "C’est un polysaccharide.",
        "correct": false,
        "explanation": "C’est un dérivé de dipeptide."
      },
      {
        "content": "C’est une hormone pancréatique.",
        "correct": false,
        "explanation": "C’est un édulcorant."
      },
      {
        "content": "Il est composé de leucine et valine.",
        "correct": false,
        "explanation": "Il dérive d’Asp et Phe."
      }
    ],
    "explanation": "L’aspartame est un dérivé méthylé du dipeptide Asp-Phe et une source de phénylalanine."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien d’acides aminés comporte le glucagon humain mature ?",
    "answer": {
      "type": "number",
      "value": 29,
      "tolerance": 0
    },
    "explanation": "Le glucagon est un peptide de 29 résidus sécrété par les cellules alpha et augmente la production hépatique de glucose."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Son pouvoir sucrant est très supérieur à celui du saccharose à masse comparable.",
        "correct": true,
        "explanation": "Il est utilisé en faible quantité comme édulcorant."
      },
      {
        "content": "Il dérive du proglucagon par maturation protéolytique.",
        "correct": true,
        "explanation": "Le tissu détermine les peptides issus du précurseur."
      },
      {
        "content": "Il est sécrété principalement par les cellules alpha pancréatiques.",
        "correct": true,
        "explanation": "Il s’oppose fonctionnellement à l’insuline sur la glycémie."
      },
      {
        "content": "Il est un stéroïde dérivé du cholestérol.",
        "correct": false,
        "explanation": "C’est un peptide."
      },
      {
        "content": "Il est composé de leucine et valine.",
        "correct": false,
        "explanation": "Il dérive d’Asp et Phe."
      },
      {
        "content": "Il ne peut libérer aucune phénylalanine.",
        "correct": false,
        "explanation": "Il contient un résidu Phe."
      },
      {
        "content": "Le glucagon est sécrété principalement par les cellules bêta.",
        "correct": false,
        "explanation": "Les cellules alpha le produisent."
      },
      {
        "content": "Les personnes atteintes de phénylcétonurie doivent tenir compte de sa teneur en phénylalanine.",
        "correct": true,
        "explanation": "L’étiquetage le signale."
      },
      {
        "content": "C’est le méthylester d’un dipeptide dérivé de l’aspartate et de la phénylalanine.",
        "correct": true,
        "explanation": "Sa structure explique la présence de phénylalanine après digestion."
      },
      {
        "content": "Il est principalement hypoglycémiant.",
        "correct": false,
        "explanation": "Il est hyperglycémiant."
      }
    ],
    "explanation": "Le glucagon est un peptide de 29 résidus sécrété par les cellules alpha et augmente la production hépatique de glucose. L’aspartame est un dérivé méthylé du dipeptide Asp-Phe et une source de phénylalanine."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant les peptides natriurétiques cardiaques, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Un pont disulfure forme une boucle conservée indispensable à leur activité.",
        "correct": true,
        "explanation": "Le motif cystéine-cystéine structure le peptide."
      },
      {
        "content": "Ils sont dépourvus de cystéines.",
        "correct": false,
        "explanation": "Leur boucle comporte un pont disulfure."
      },
      {
        "content": "ANP et BNP sont des hormones peptidiques produites par des cardiomyocytes.",
        "correct": true,
        "explanation": "Ils répondent notamment à l’étirement des cavités cardiaques."
      },
      {
        "content": "L’ANP humain mature comporte 28 résidus.",
        "correct": true,
        "explanation": "Il est particulièrement associé aux oreillettes."
      },
      {
        "content": "Le BNP humain mature comporte 32 résidus.",
        "correct": true,
        "explanation": "Il est surtout associé à la réponse ventriculaire au stress pariétal."
      }
    ],
    "explanation": "ANP 28 aa et BNP 32 aa sont des peptides cardiaques à boucle disulfure."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de résidus comporte le BNP humain mature ?",
    "answer": {
      "type": "number",
      "value": 32,
      "tolerance": 0
    },
    "explanation": "ANP 28 aa et BNP 32 aa sont des peptides cardiaques à boucle disulfure."
  }
];
