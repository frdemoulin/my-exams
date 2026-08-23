import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Rôles biologiques des acides aminés et des peptides — Section B — Précurseurs biologiques et formation des peptides */
export const UE14_BIOCH_CH11_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la tyrosine comme précurseur, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La mélanine dérive aussi de la voie de la tyrosine.",
        "correct": true,
        "explanation": "La tyrosinase initie cette voie."
      },
      {
        "content": "La tyrosine peut être synthétisée à partir de phénylalanine.",
        "correct": true,
        "explanation": "La phénylalanine hydroxylase catalyse cette conversion."
      },
      {
        "content": "Les catécholamines dérivent exclusivement de la glycine.",
        "correct": false,
        "explanation": "Elles dérivent de la tyrosine."
      },
      {
        "content": "Elle est un précurseur des catécholamines.",
        "correct": true,
        "explanation": "Dopamine, noradrénaline et adrénaline dérivent de la tyrosine."
      },
      {
        "content": "Les hormones thyroïdiennes comportent des résidus iodés dérivés de tyrosines de la thyroglobuline.",
        "correct": true,
        "explanation": "La tyrosine contribue à T3/T4."
      }
    ],
    "explanation": "La tyrosine est un précurseur des catécholamines, de la mélanine et contribue aux hormones thyroïdiennes."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la tyrosine comme précurseur, laquelle est correcte ?",
    "choices": [
      {
        "content": "La tyrosine est un acide gras.",
        "correct": false,
        "explanation": "C’est un acide aminé aromatique."
      },
      {
        "content": "La mélanine dérive aussi de la voie de la tyrosine.",
        "correct": true,
        "explanation": "La tyrosinase initie cette voie."
      },
      {
        "content": "La tyrosine est le précurseur direct du GABA par décarboxylation.",
        "correct": false,
        "explanation": "Le GABA dérive du glutamate."
      },
      {
        "content": "Les catécholamines dérivent exclusivement de la glycine.",
        "correct": false,
        "explanation": "Elles dérivent de la tyrosine."
      },
      {
        "content": "Elle ne participe jamais à la synthèse hormonale.",
        "correct": false,
        "explanation": "Elle contribue aux hormones thyroïdiennes."
      }
    ],
    "explanation": "La tyrosine est un précurseur des catécholamines, de la mélanine et contribue aux hormones thyroïdiennes."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel neurotransmetteur monoaminergique dérive du tryptophane ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sérotonine",
        "serotonine",
        "5-HT"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le tryptophane est précurseur de la sérotonine, de la mélatonine et peut contribuer à la synthèse de NAD."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le tryptophane comme précurseur, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La mélatonine est synthétisée à partir de la sérotonine.",
        "correct": true,
        "explanation": "Elle dérive donc indirectement du tryptophane."
      },
      {
        "content": "Il est synthétisé en quantité suffisante par l’humain.",
        "correct": false,
        "explanation": "Il est indispensable."
      },
      {
        "content": "Il ne participe à aucune voie métabolique hors protéines.",
        "correct": false,
        "explanation": "Il est précurseur de plusieurs molécules."
      },
      {
        "content": "Le tryptophane est le précurseur direct de l’adrénaline.",
        "correct": false,
        "explanation": "Les catécholamines dérivent de la tyrosine."
      },
      {
        "content": "Il est un précurseur de la sérotonine.",
        "correct": true,
        "explanation": "La voie implique notamment le 5-hydroxytryptophane."
      }
    ],
    "explanation": "Le tryptophane est précurseur de la sérotonine, de la mélatonine et peut contribuer à la synthèse de NAD."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant le glutamate dans le système nerveux, laquelle est correcte ?",
    "choices": [
      {
        "content": "La formation du GABA est une phosphorylation du glutamate.",
        "correct": false,
        "explanation": "C’est une décarboxylation."
      },
      {
        "content": "La glutamate décarboxylase utilise le PLP dérivé de la vitamine B6.",
        "correct": true,
        "explanation": "Le PLP est cofacteur de nombreuses décarboxylases d’acides aminés."
      },
      {
        "content": "Le GABA dérive directement de la tyrosine.",
        "correct": false,
        "explanation": "Il dérive du glutamate."
      },
      {
        "content": "Le glutamate est uniquement un neurotransmetteur inhibiteur.",
        "correct": false,
        "explanation": "Il est principalement excitateur."
      },
      {
        "content": "Le glutamate n’a aucun rôle dans le système nerveux.",
        "correct": false,
        "explanation": "Il y joue un rôle majeur."
      }
    ],
    "explanation": "Glutamate est excitateur et précurseur du GABA inhibiteur par décarboxylation PLP-dépendante."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant le glutamate dans le système nerveux, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Le glutamate n’a aucun rôle dans le système nerveux.",
        "correct": false,
        "explanation": "Il y joue un rôle majeur."
      },
      {
        "content": "Le GABA est formé par décarboxylation du glutamate.",
        "correct": true,
        "explanation": "La glutamate décarboxylase catalyse cette réaction."
      },
      {
        "content": "Le GABA est un neurotransmetteur inhibiteur majeur du cerveau adulte.",
        "correct": true,
        "explanation": "Il diminue l’excitabilité de nombreux neurones."
      },
      {
        "content": "La formation du GABA est une phosphorylation du glutamate.",
        "correct": false,
        "explanation": "C’est une décarboxylation."
      },
      {
        "content": "Le glutamate est uniquement un neurotransmetteur inhibiteur.",
        "correct": false,
        "explanation": "Il est principalement excitateur."
      }
    ],
    "explanation": "Glutamate est excitateur et précurseur du GABA inhibiteur par décarboxylation PLP-dépendante.",
    "requiredSelectionCount": 2
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la glycine et la biosynthèse de l’hème, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les cytochromes ne contiennent aucun hème.",
        "correct": false,
        "explanation": "De nombreux cytochromes sont des hémoprotéines."
      },
      {
        "content": "L’hème ne contient jamais de fer.",
        "correct": false,
        "explanation": "Le fer est central dans l’hème fonctionnel."
      },
      {
        "content": "La vitamine B6 sous forme PLP est un cofacteur de l’ALA synthase.",
        "correct": true,
        "explanation": "Le PLP participe à cette condensation."
      },
      {
        "content": "L’hème entre dans la structure de l’hémoglobine et des cytochromes.",
        "correct": true,
        "explanation": "Il contient un fer au centre de la porphyrine."
      },
      {
        "content": "La glycine participe à la première étape de la biosynthèse de l’hème.",
        "correct": true,
        "explanation": "Elle se condense avec le succinyl-CoA."
      }
    ],
    "explanation": "La glycine et le succinyl-CoA donnent l’ALA, première étape de la biosynthèse de l’hème."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Avec quel métabolite du cycle de Krebs la glycine se condense-t-elle au début de la biosynthèse de l’hème ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "succinyl-CoA",
        "succinyl coenzyme A"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La glycine et le succinyl-CoA donnent l’ALA, première étape de la biosynthèse de l’hème."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant la glycine et les acides biliaires ?",
    "choices": [
      {
        "content": "La glycine transforme les acides biliaires en protéines.",
        "correct": false,
        "explanation": "Elle forme une conjugaison amide."
      },
      {
        "content": "La conjugaison empêche toute action digestive des acides biliaires.",
        "correct": false,
        "explanation": "Elle favorise leur efficacité amphiphile."
      },
      {
        "content": "L’acide glycocholique est un triacylglycérol.",
        "correct": false,
        "explanation": "C’est un acide biliaire conjugué."
      },
      {
        "content": "Seule la glycine peut conjuguer les acides biliaires.",
        "correct": false,
        "explanation": "La taurine le peut aussi."
      },
      {
        "content": "Les acides biliaires facilitent la digestion et l’absorption des lipides.",
        "correct": true,
        "explanation": "Ils participent aux micelles mixtes intestinales."
      }
    ],
    "explanation": "La glycine peut conjuguer les acides biliaires ; l’acide glycocholique en est un exemple."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la glycine et les acides biliaires, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les acides biliaires facilitent la digestion et l’absorption des lipides.",
        "correct": true,
        "explanation": "Ils participent aux micelles mixtes intestinales."
      },
      {
        "content": "L’acide glycocholique est un conjugué de l’acide cholique avec la glycine.",
        "correct": true,
        "explanation": "Il participe au pool biliaire."
      },
      {
        "content": "La glycine peut conjuguer certains acides biliaires.",
        "correct": true,
        "explanation": "La conjugaison augmente leur caractère amphiphile."
      },
      {
        "content": "Seule la glycine peut conjuguer les acides biliaires.",
        "correct": false,
        "explanation": "La taurine le peut aussi."
      },
      {
        "content": "La taurine peut aussi conjuguer des acides biliaires.",
        "correct": true,
        "explanation": "Les sels biliaires existent sous formes glyco- et tauro-conjuguées."
      }
    ],
    "explanation": "La glycine peut conjuguer les acides biliaires ; l’acide glycocholique en est un exemple."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les précurseurs azotés des nucléotides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les purines sont synthétisées uniquement à partir d’acides gras.",
        "correct": false,
        "explanation": "Plusieurs acides aminés contribuent au noyau."
      },
      {
        "content": "Glycine, glutamine et aspartate contribuent tous à la biosynthèse des purines.",
        "correct": true,
        "explanation": "Le noyau purique reçoit des atomes de plusieurs précurseurs."
      },
      {
        "content": "Aspartate n’intervient dans aucune base azotée.",
        "correct": false,
        "explanation": "Il contribue aux purines et pyrimidines."
      },
      {
        "content": "Le métabolisme des acides aminés est donc directement connecté à la synthèse des acides nucléiques.",
        "correct": true,
        "explanation": "Les nucléotides utilisent leurs atomes comme précurseurs."
      },
      {
        "content": "La glycine est un précurseur direct obligatoire du noyau pyrimidique.",
        "correct": false,
        "explanation": "Elle contribue aux purines mais pas directement au noyau pyrimidique."
      }
    ],
    "explanation": "Gly, Gln et Asp contribuent aux purines ; Gln et Asp contribuent directement aux pyrimidines."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel acide aminé apporte des atomes au noyau purique mais n’est pas un précurseur direct du noyau pyrimidique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glycine",
        "la glycine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Gly, Gln et Asp contribuent aux purines ; Gln et Asp contribuent directement aux pyrimidines."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant la biosynthèse de la créatine ?",
    "choices": [
      {
        "content": "La créatine est synthétisée uniquement à partir de glycine et arginine sans aucun donneur de méthyle.",
        "correct": false,
        "explanation": "La méthionine via SAM fournit le méthyle."
      },
      {
        "content": "La phosphocréatine est un acide gras de réserve.",
        "correct": false,
        "explanation": "C’est un système tampon de phosphate à haute énergie."
      },
      {
        "content": "AGAT transforme directement la créatine en glucose.",
        "correct": false,
        "explanation": "AGAT forme le guanidinoacétate."
      },
      {
        "content": "La phosphocréatine constitue un tampon énergétique important dans le muscle.",
        "correct": true,
        "explanation": "La créatine kinase transfère rapidement un phosphate à l’ADP."
      },
      {
        "content": "La créatine est un polysaccharide.",
        "correct": false,
        "explanation": "C’est un dérivé d’acides aminés."
      }
    ],
    "explanation": "La créatine mobilise glycine, arginine et méthionine/SAM, puis la phosphocréatine tamponne rapidement l’ATP musculaire."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la biosynthèse de la créatine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La créatine est synthétisée uniquement à partir de glycine et arginine sans aucun donneur de méthyle.",
        "correct": false,
        "explanation": "La méthionine via SAM fournit le méthyle."
      },
      {
        "content": "Le guanidinoacétate est ensuite méthylé par SAM pour former la créatine.",
        "correct": true,
        "explanation": "La méthionine fournit le méthyle via SAM."
      },
      {
        "content": "La phosphocréatine est un acide gras de réserve.",
        "correct": false,
        "explanation": "C’est un système tampon de phosphate à haute énergie."
      },
      {
        "content": "Arginine et glycine forment d’abord le guanidinoacétate via AGAT.",
        "correct": true,
        "explanation": "L’ornithine est également produite."
      },
      {
        "content": "La phosphocréatine constitue un tampon énergétique important dans le muscle.",
        "correct": true,
        "explanation": "La créatine kinase transfère rapidement un phosphate à l’ADP."
      }
    ],
    "explanation": "La créatine mobilise glycine, arginine et méthionine/SAM, puis la phosphocréatine tamponne rapidement l’ATP musculaire."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant la définition d’un peptide, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "La séquence s’écrit conventionnellement de N vers C.",
        "correct": true,
        "explanation": "Le peptide possède une polarité structurale."
      },
      {
        "content": "Les résidus sont reliés principalement par des liaisons glycosidiques.",
        "correct": false,
        "explanation": "Ils sont reliés par des liaisons peptidiques."
      },
      {
        "content": "Un dipeptide contient deux résidus.",
        "correct": true,
        "explanation": "Il contient une liaison peptidique principale entre eux."
      },
      {
        "content": "Un dipeptide contient nécessairement 20 résidus.",
        "correct": false,
        "explanation": "Il en contient deux."
      },
      {
        "content": "Un peptide est un polymère de nucléotides.",
        "correct": false,
        "explanation": "Il est formé de résidus d’acides aminés."
      }
    ],
    "explanation": "Les peptides sont des chaînes de résidus reliés principalement par des liaisons peptidiques.",
    "requiredSelectionCount": 2
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de liaison relie principalement les résidus d’un peptide ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "liaison peptidique",
        "liaison amide",
        "amide"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les peptides sont des chaînes de résidus reliés principalement par des liaisons peptidiques."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel ordre de grandeur sert ici de repère pédagogique entre peptide et protéine ?",
    "answer": {
      "type": "number",
      "value": 100,
      "tolerance": 0
    },
    "explanation": "Le seuil proche de 100 résidus est une convention pédagogique et non une frontière universelle."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la limite conventionnelle entre peptide et protéine, laquelle est correcte ?",
    "choices": [
      {
        "content": "La fonction ne peut pas être déduite du seul nombre de résidus.",
        "correct": true,
        "explanation": "Séquence et conformation sont déterminantes."
      },
      {
        "content": "Une chaîne de 99 résidus ne peut jamais être appelée protéine.",
        "correct": false,
        "explanation": "Le seuil n’est pas absolu."
      },
      {
        "content": "La longueur suffit à prédire la fonction.",
        "correct": false,
        "explanation": "La fonction dépend d’autres propriétés."
      },
      {
        "content": "Une chaîne de 101 résidus possède obligatoirement plusieurs sous-unités.",
        "correct": false,
        "explanation": "La longueur ne détermine pas la quaternarité."
      },
      {
        "content": "Le seuil de 100 est une loi chimique stricte.",
        "correct": false,
        "explanation": "C’est un repère pédagogique."
      }
    ],
    "explanation": "Le seuil proche de 100 résidus est une convention pédagogique et non une frontière universelle."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la formation de l’insuline ?",
    "choices": [
      {
        "content": "L’insuline mature est traduite directement sous sa forme finale sans précurseur.",
        "correct": false,
        "explanation": "Elle passe par préproinsuline puis proinsuline."
      },
      {
        "content": "Le retrait du peptide signal donne la proinsuline.",
        "correct": true,
        "explanation": "Cette étape a lieu dans le réticulum endoplasmique."
      },
      {
        "content": "La proinsuline contient les futures chaînes B et A reliées par le peptide C.",
        "correct": true,
        "explanation": "Elle se replie et forme ses ponts disulfure."
      },
      {
        "content": "La traduction produit d’abord la préproinsuline.",
        "correct": true,
        "explanation": "Elle contient un peptide signal N-terminal."
      },
      {
        "content": "Le clivage du peptide C et de segments dibasiques donne l’insuline mature.",
        "correct": true,
        "explanation": "La maturation a lieu dans la voie sécrétoire."
      }
    ],
    "explanation": "Préproinsuline → proinsuline → insuline + peptide C : la maturation associe retrait du signal, repliement et clivages."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Certaines molécules appelées protéines ont moins de 100 résidus et inversement certains peptides peuvent être longs.",
        "correct": true,
        "explanation": "L’usage biologique compte aussi."
      },
      {
        "content": "La préproinsuline est un glucide.",
        "correct": false,
        "explanation": "C’est un précurseur polypeptidique."
      },
      {
        "content": "Cette limite n’est pas une frontière physicochimique universelle.",
        "correct": true,
        "explanation": "La terminologie varie selon les protéines et peptides considérés."
      },
      {
        "content": "Aucun pont disulfure ne se forme avant la sécrétion.",
        "correct": false,
        "explanation": "Ils se forment pendant le repliement de la proinsuline."
      },
      {
        "content": "La fonction ne peut pas être déduite du seul nombre de résidus.",
        "correct": true,
        "explanation": "Séquence et conformation sont déterminantes."
      },
      {
        "content": "Le retrait du peptide signal donne la proinsuline.",
        "correct": true,
        "explanation": "Cette étape a lieu dans le réticulum endoplasmique."
      },
      {
        "content": "Le peptide C reste une troisième chaîne permanente de l’insuline mature.",
        "correct": false,
        "explanation": "Il est clivé lors de la maturation."
      },
      {
        "content": "Une chaîne de 101 résidus possède obligatoirement plusieurs sous-unités.",
        "correct": false,
        "explanation": "La longueur ne détermine pas la quaternarité."
      },
      {
        "content": "La traduction produit d’abord la préproinsuline.",
        "correct": true,
        "explanation": "Elle contient un peptide signal N-terminal."
      },
      {
        "content": "L’insuline mature est traduite directement sous sa forme finale sans précurseur.",
        "correct": false,
        "explanation": "Elle passe par préproinsuline puis proinsuline."
      }
    ],
    "explanation": "Préproinsuline → proinsuline → insuline + peptide C : la maturation associe retrait du signal, repliement et clivages. Le seuil proche de 100 résidus est une convention pédagogique et non une frontière universelle."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant le peptide C, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Il est présent dans les préparations d’insuline exogène et empêche toute interprétation clinique.",
        "correct": false,
        "explanation": "Le dosage permet justement de distinguer la production endogène."
      },
      {
        "content": "Son dosage aide à estimer la sécrétion endogène d’insuline.",
        "correct": true,
        "explanation": "L’insuline injectée exogène ne s’accompagne pas de peptide C."
      },
      {
        "content": "Il est libéré lors de la maturation de la proinsuline.",
        "correct": true,
        "explanation": "Les convertases clivent les jonctions."
      },
      {
        "content": "Sa concentration ne donne aucune information sur la sécrétion bêta-cellulaire.",
        "correct": false,
        "explanation": "Elle est utilisée comme marqueur de sécrétion endogène."
      },
      {
        "content": "Il est une troisième chaîne permanente de l’insuline mature.",
        "correct": false,
        "explanation": "Il est retiré."
      }
    ],
    "explanation": "Le peptide C est libéré équimolairement avec l’insuline endogène et constitue un marqueur clinique utile."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel peptide libéré avec l’insuline permet d’évaluer la sécrétion endogène des cellules bêta ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "peptide C",
        "C-peptide",
        "peptide connecting"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le peptide C est libéré équimolairement avec l’insuline endogène et constitue un marqueur clinique utile."
  }
];
