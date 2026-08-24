import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch2 — Communication cellulaire */
export const UE14_CELL_CH2_SECTION_C_V2: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de « Principes de signalisation cellulaire », sélectionnez les affirmations fausses.",
    "explanation": "Une cellule détecte des signaux via des récepteurs ou d’autres capteurs, transduit l’information et produit une réponse. La spécificité dépend du couple ligand-récepteur et du contexte cellulaire ; plusieurs voies peuvent converger ou se moduler.",
    "choices": [
      {
        "content": "Une cellule dépourvue du récepteur approprié répond obligatoirement au ligand de la même façon.",
        "correct": true,
        "explanation": "Incorrect. Une cellule détecte des signaux via des récepteurs ou d’autres capteurs, transduit l’information et produit une réponse. La spécificité dépend du couple ligand-récepteur et du contexte cellulaire ; plusieurs voies peuvent converger ou se moduler."
      },
      {
        "content": "La liaison d’un ligand à un récepteur peut déclencher une cascade de transduction intracellulaire.",
        "correct": false,
        "explanation": "Exact. Une cellule détecte des signaux via des récepteurs ou d’autres capteurs, transduit l’information et produit une réponse. La spécificité dépend du couple ligand-récepteur et du contexte cellulaire ; plusieurs voies peuvent converger ou se moduler."
      },
      {
        "content": "Une même molécule signal peut provoquer des réponses différentes selon le type cellulaire.",
        "correct": false,
        "explanation": "Exact. Une cellule détecte des signaux via des récepteurs ou d’autres capteurs, transduit l’information et produit une réponse. La spécificité dépend du couple ligand-récepteur et du contexte cellulaire ; plusieurs voies peuvent converger ou se moduler."
      },
      {
        "content": "Tout ligand déclenche la même réponse dans toutes les cellules de l’organisme.",
        "correct": true,
        "explanation": "Incorrect. Une cellule détecte des signaux via des récepteurs ou d’autres capteurs, transduit l’information et produit une réponse. La spécificité dépend du couple ligand-récepteur et du contexte cellulaire ; plusieurs voies peuvent converger ou se moduler."
      },
      {
        "content": "Un ligand agit sur une cellule cible seulement si celle-ci possède un système de détection approprié.",
        "correct": false,
        "explanation": "Exact. Une cellule détecte des signaux via des récepteurs ou d’autres capteurs, transduit l’information et produit une réponse. La spécificité dépend du couple ligand-récepteur et du contexte cellulaire ; plusieurs voies peuvent converger ou se moduler."
      }
    ]
  },
  {
    "order": 46,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles affirmations décrivent correctement « Signalisation dépendante du contact et adhérence » ?",
    "explanation": "La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique.",
    "choices": [
      {
        "content": "La signalisation juxtacrine exige que le ligand circule dans le sang sur plusieurs centimètres.",
        "correct": false,
        "explanation": "Incorrect. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      },
      {
        "content": "Les intégrines reconnaissent indifféremment toute macromolécule de la matrice sans spécificité.",
        "correct": false,
        "explanation": "Incorrect. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      },
      {
        "content": "Une signalisation juxtacrine nécessite un contact direct ou une très grande proximité entre partenaires.",
        "correct": true,
        "explanation": "Exact. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      },
      {
        "content": "Des molécules membranaires d’une cellule peuvent reconnaître des molécules portées par une cellule voisine.",
        "correct": true,
        "explanation": "Exact. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      },
      {
        "content": "Les intégrines relient la cellule à des ligands spécifiques de la matrice extracellulaire.",
        "correct": true,
        "explanation": "Exact. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      }
    ]
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment appelle-t-on un signal qui agit sur la cellule qui l’a elle-même sécrété ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "autocrine",
        "signalisation autocrine",
        "communication autocrine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Une boucle autocrine associe production et réponse dans la même cellule."
  },
  {
    "order": 48,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sur le thème « Matrice extracellulaire », sélectionnez exactement 3 propositions exactes.",
    "explanation": "La MEC associe collagènes, glycoprotéines d’adhérence (fibronectine, laminines), protéoglycanes et élastine selon les tissus. Collagène IV et laminines sont majeurs dans les lames basales ; les intégrines assurent des liens spécifiques avec la cellule.",
    "choices": [
      {
        "content": "Le collagène I est un collagène fibrillaire abondant dans de nombreux tissus conjonctifs.",
        "correct": true,
        "explanation": "Exact. La MEC associe collagènes, glycoprotéines d’adhérence (fibronectine, laminines), protéoglycanes et élastine selon les tissus. Collagène IV et laminines sont majeurs dans les lames basales ; les intégrines assurent des liens spécifiques avec la cellule."
      },
      {
        "content": "Les laminines sont des glycoprotéines majeures des lames basales.",
        "correct": true,
        "explanation": "Exact. La MEC associe collagènes, glycoprotéines d’adhérence (fibronectine, laminines), protéoglycanes et élastine selon les tissus. Collagène IV et laminines sont majeurs dans les lames basales ; les intégrines assurent des liens spécifiques avec la cellule."
      },
      {
        "content": "Les laminines sont des phospholipides membranaires.",
        "correct": false,
        "explanation": "Incorrect. La MEC associe collagènes, glycoprotéines d’adhérence (fibronectine, laminines), protéoglycanes et élastine selon les tissus. Collagène IV et laminines sont majeurs dans les lames basales ; les intégrines assurent des liens spécifiques avec la cellule."
      },
      {
        "content": "Le collagène IV forme principalement de longues fibrilles identiques au collagène I.",
        "correct": false,
        "explanation": "Incorrect. La MEC associe collagènes, glycoprotéines d’adhérence (fibronectine, laminines), protéoglycanes et élastine selon les tissus. Collagène IV et laminines sont majeurs dans les lames basales ; les intégrines assurent des liens spécifiques avec la cellule."
      },
      {
        "content": "Le collagène IV forme des réseaux caractéristiques des lames basales.",
        "correct": true,
        "explanation": "Exact. La MEC associe collagènes, glycoprotéines d’adhérence (fibronectine, laminines), protéoglycanes et élastine selon les tissus. Collagène IV et laminines sont majeurs dans les lames basales ; les intégrines assurent des liens spécifiques avec la cellule."
      }
    ],
    "requiredSelectionCount": 3
  },
  {
    "order": 49,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Concernant « Récepteurs couplés aux protéines G », quelle est l’unique proposition exacte ?",
    "explanation": "Les RCPG ont sept segments transmembranaires et activent des protéines G hétérotrimériques. L’échange GDP→GTP sur Gα modifie les interactions avec effecteurs ; selon le type de G, adénylate cyclase, phospholipase C ou canaux peuvent être modulés.",
    "choices": [
      {
        "content": "La sous-unité alpha reste toujours liée au GDP lors de l’activation.",
        "correct": false,
        "explanation": "Incorrect. Les RCPG ont sept segments transmembranaires et activent des protéines G hétérotrimériques. L’échange GDP→GTP sur Gα modifie les interactions avec effecteurs ; selon le type de G, adénylate cyclase, phospholipase C ou canaux peuvent être modulés."
      },
      {
        "content": "Les récepteurs couplés aux protéines G possèdent classiquement sept hélices transmembranaires.",
        "correct": true,
        "explanation": "Exact. Les RCPG ont sept segments transmembranaires et activent des protéines G hétérotrimériques. L’échange GDP→GTP sur Gα modifie les interactions avec effecteurs ; selon le type de G, adénylate cyclase, phospholipase C ou canaux peuvent être modulés."
      },
      {
        "content": "Tous les RCPG activent obligatoirement l’adénylate cyclase.",
        "correct": false,
        "explanation": "Incorrect. Les RCPG ont sept segments transmembranaires et activent des protéines G hétérotrimériques. L’échange GDP→GTP sur Gα modifie les interactions avec effecteurs ; selon le type de G, adénylate cyclase, phospholipase C ou canaux peuvent être modulés."
      },
      {
        "content": "La protéine G hétérotrimérique est constituée d’une seule sous-unité.",
        "correct": false,
        "explanation": "Incorrect. Les RCPG ont sept segments transmembranaires et activent des protéines G hétérotrimériques. L’échange GDP→GTP sur Gα modifie les interactions avec effecteurs ; selon le type de G, adénylate cyclase, phospholipase C ou canaux peuvent être modulés."
      },
      {
        "content": "Un RCPG est une pompe ATPase qui transporte directement les ligands.",
        "correct": false,
        "explanation": "Incorrect. Les RCPG ont sept segments transmembranaires et activent des protéines G hétérotrimériques. L’échange GDP→GTP sur Gα modifie les interactions avec effecteurs ; selon le type de G, adénylate cyclase, phospholipase C ou canaux peuvent être modulés."
      }
    ]
  },
  {
    "order": 50,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Récepteurs à activité tyrosine kinase », lesquelles sont exactes ?",
    "explanation": "Les RTK possèdent un domaine extracellulaire de liaison, un segment transmembranaire et un domaine tyrosine kinase cytosolique. Beaucoup s’activent par dimérisation/réarrangement et trans-autophosphorylation ; le récepteur de l’insuline est un dimère préformé.",
    "choices": [
      {
        "content": "Un RTK transporte directement le ligand à travers la membrane comme une perméase.",
        "correct": false,
        "explanation": "Incorrect. Les RTK possèdent un domaine extracellulaire de liaison, un segment transmembranaire et un domaine tyrosine kinase cytosolique. Beaucoup s’activent par dimérisation/réarrangement et trans-autophosphorylation ; le récepteur de l’insuline est un dimère préformé."
      },
      {
        "content": "Le domaine de liaison au ligand d’un RTK est nécessairement situé dans le cytosol.",
        "correct": false,
        "explanation": "Incorrect. Les RTK possèdent un domaine extracellulaire de liaison, un segment transmembranaire et un domaine tyrosine kinase cytosolique. Beaucoup s’activent par dimérisation/réarrangement et trans-autophosphorylation ; le récepteur de l’insuline est un dimère préformé."
      },
      {
        "content": "De nombreux RTK sont activés par une dimérisation ou un réarrangement favorisé par le ligand.",
        "correct": true,
        "explanation": "Exact. Les RTK possèdent un domaine extracellulaire de liaison, un segment transmembranaire et un domaine tyrosine kinase cytosolique. Beaucoup s’activent par dimérisation/réarrangement et trans-autophosphorylation ; le récepteur de l’insuline est un dimère préformé."
      },
      {
        "content": "La phosphorylation de tyrosines du récepteur peut créer des sites de recrutement pour des protéines de signalisation.",
        "correct": true,
        "explanation": "Exact. Les RTK possèdent un domaine extracellulaire de liaison, un segment transmembranaire et un domaine tyrosine kinase cytosolique. Beaucoup s’activent par dimérisation/réarrangement et trans-autophosphorylation ; le récepteur de l’insuline est un dimère préformé."
      },
      {
        "content": "Un récepteur tyrosine kinase possède un domaine catalytique cytosolique.",
        "correct": true,
        "explanation": "Exact. Les RTK possèdent un domaine extracellulaire de liaison, un segment transmembranaire et un domaine tyrosine kinase cytosolique. Beaucoup s’activent par dimérisation/réarrangement et trans-autophosphorylation ; le récepteur de l’insuline est un dimère préformé."
      }
    ]
  },
  {
    "order": 51,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment appelle-t-on une communication locale par molécule diffusible vers des cellules voisines ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "paracrine",
        "signalisation paracrine",
        "communication paracrine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Une signalisation paracrine agit principalement à courte distance."
  },
  {
    "order": 52,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi ces affirmations concernant « Communications autocrine, paracrine et endocrine », retenez exactement les 3 justes.",
    "explanation": "Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse.",
    "choices": [
      {
        "content": "Une communication endocrine implique typiquement une hormone transportée par la circulation vers des cibles éloignées.",
        "correct": true,
        "explanation": "Exact. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      },
      {
        "content": "Une communication paracrine agit principalement sur des cellules voisines ou proches.",
        "correct": true,
        "explanation": "Exact. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      },
      {
        "content": "La communication paracrine agit uniquement sur la cellule qui a produit le signal.",
        "correct": false,
        "explanation": "Incorrect. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      },
      {
        "content": "Dans une communication autocrine, la cellule productrice peut aussi être une cellule cible du signal.",
        "correct": true,
        "explanation": "Exact. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      },
      {
        "content": "Une communication autocrine exige toujours un passage du signal par la circulation générale.",
        "correct": false,
        "explanation": "Incorrect. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      }
    ],
    "requiredSelectionCount": 3
  },
  {
    "order": 53,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment appelle-t-on une communication hormonale à distance via la circulation ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "endocrine",
        "signalisation endocrine",
        "communication endocrine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La signalisation endocrine utilise typiquement le sang pour atteindre des cibles éloignées."
  },
  {
    "order": 54,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour le thème « Communication synaptique chimique », quelles propositions doivent être retenues ?",
    "explanation": "À une synapse chimique, le potentiel d’action déclenche une exocytose Ca2+-dépendante de neurotransmetteur. À la jonction neuromusculaire, l’acétylcholine active des récepteurs nicotiniques puis est hydrolysée par l’acétylcholinestérase ; la choline est recaptée.",
    "choices": [
      {
        "content": "Le neurotransmetteur diffuse dans la fente synaptique sur une courte distance.",
        "correct": true,
        "explanation": "Exact. À une synapse chimique, le potentiel d’action déclenche une exocytose Ca2+-dépendante de neurotransmetteur. À la jonction neuromusculaire, l’acétylcholine active des récepteurs nicotiniques puis est hydrolysée par l’acétylcholinestérase ; la choline est recaptée."
      },
      {
        "content": "À la jonction neuromusculaire, l’acétylcholine se fixe sur des récepteurs nicotiniques de la fibre musculaire.",
        "correct": true,
        "explanation": "Exact. À une synapse chimique, le potentiel d’action déclenche une exocytose Ca2+-dépendante de neurotransmetteur. À la jonction neuromusculaire, l’acétylcholine active des récepteurs nicotiniques puis est hydrolysée par l’acétylcholinestérase ; la choline est recaptée."
      },
      {
        "content": "À la jonction neuromusculaire, l’acétylcholine entière est simplement recaptée et stockée sans hydrolyse.",
        "correct": false,
        "explanation": "Incorrect. À une synapse chimique, le potentiel d’action déclenche une exocytose Ca2+-dépendante de neurotransmetteur. À la jonction neuromusculaire, l’acétylcholine active des récepteurs nicotiniques puis est hydrolysée par l’acétylcholinestérase ; la choline est recaptée."
      },
      {
        "content": "La libération synaptique de neurotransmetteur est indépendante de toute variation de Ca2+ présynaptique.",
        "correct": false,
        "explanation": "Incorrect. À une synapse chimique, le potentiel d’action déclenche une exocytose Ca2+-dépendante de neurotransmetteur. À la jonction neuromusculaire, l’acétylcholine active des récepteurs nicotiniques puis est hydrolysée par l’acétylcholinestérase ; la choline est recaptée."
      },
      {
        "content": "L’arrivée d’un potentiel d’action présynaptique peut déclencher une entrée de Ca2+ et l’exocytose de neurotransmetteur.",
        "correct": true,
        "explanation": "Exact. À une synapse chimique, le potentiel d’action déclenche une exocytose Ca2+-dépendante de neurotransmetteur. À la jonction neuromusculaire, l’acétylcholine active des récepteurs nicotiniques puis est hydrolysée par l’acétylcholinestérase ; la choline est recaptée."
      }
    ]
  },
  {
    "order": 55,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant « Principes de signalisation cellulaire », choisissez exactement 2 affirmations correctes.",
    "explanation": "Une cellule détecte des signaux via des récepteurs ou d’autres capteurs, transduit l’information et produit une réponse. La spécificité dépend du couple ligand-récepteur et du contexte cellulaire ; plusieurs voies peuvent converger ou se moduler.",
    "choices": [
      {
        "content": "Les voies de signalisation sont totalement indépendantes les unes des autres.",
        "correct": false,
        "explanation": "Incorrect. Une cellule détecte des signaux via des récepteurs ou d’autres capteurs, transduit l’information et produit une réponse. La spécificité dépend du couple ligand-récepteur et du contexte cellulaire ; plusieurs voies peuvent converger ou se moduler."
      },
      {
        "content": "La transduction du signal se limite toujours à une seule réaction enzymatique.",
        "correct": false,
        "explanation": "Incorrect. Une cellule détecte des signaux via des récepteurs ou d’autres capteurs, transduit l’information et produit une réponse. La spécificité dépend du couple ligand-récepteur et du contexte cellulaire ; plusieurs voies peuvent converger ou se moduler."
      },
      {
        "content": "Un récepteur membranaire transporte nécessairement le ligand à travers la bicouche.",
        "correct": false,
        "explanation": "Incorrect. Une cellule détecte des signaux via des récepteurs ou d’autres capteurs, transduit l’information et produit une réponse. La spécificité dépend du couple ligand-récepteur et du contexte cellulaire ; plusieurs voies peuvent converger ou se moduler."
      },
      {
        "content": "La liaison d’un ligand à un récepteur peut déclencher une cascade de transduction intracellulaire.",
        "correct": true,
        "explanation": "Exact. Une cellule détecte des signaux via des récepteurs ou d’autres capteurs, transduit l’information et produit une réponse. La spécificité dépend du couple ligand-récepteur et du contexte cellulaire ; plusieurs voies peuvent converger ou se moduler."
      },
      {
        "content": "Une même molécule signal peut provoquer des réponses différentes selon le type cellulaire.",
        "correct": true,
        "explanation": "Exact. Une cellule détecte des signaux via des récepteurs ou d’autres capteurs, transduit l’information et produit une réponse. La spécificité dépend du couple ligand-récepteur et du contexte cellulaire ; plusieurs voies peuvent converger ou se moduler."
      }
    ],
    "requiredSelectionCount": 2
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "format": "QRPL",
    "question": "Concernant « Signalisation dépendante du contact et adhérence », sélectionnez exactement les cinq propositions exactes parmi les dix proposées.",
    "explanation": "La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique.",
    "choices": [
      {
        "content": "Les molécules d’adhérence peuvent participer à une signalisation bidirectionnelle.",
        "correct": true,
        "explanation": "Exact. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      },
      {
        "content": "La signalisation dépendante du contact est synonyme de communication endocrine.",
        "correct": false,
        "explanation": "Incorrect. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      },
      {
        "content": "Une molécule d’adhérence ne peut transmettre aucune information intracellulaire.",
        "correct": false,
        "explanation": "Incorrect. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      },
      {
        "content": "L’adhérence cellule-matrice peut influencer la survie, la migration et la différenciation.",
        "correct": true,
        "explanation": "Exact. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      },
      {
        "content": "La diapédèse leucocytaire implique des interactions séquentielles entre molécules d’adhérence.",
        "correct": true,
        "explanation": "Exact. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      },
      {
        "content": "Les interactions cellule-matrice ne jouent aucun rôle dans la migration.",
        "correct": false,
        "explanation": "Incorrect. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      },
      {
        "content": "La diapédèse leucocytaire est indépendante de toute molécule d’adhérence.",
        "correct": false,
        "explanation": "Incorrect. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      },
      {
        "content": "Des molécules membranaires d’une cellule peuvent reconnaître des molécules portées par une cellule voisine.",
        "correct": true,
        "explanation": "Exact. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      },
      {
        "content": "Toutes les jonctions cellulaires sont des récepteurs enzymatiques à activité tyrosine kinase.",
        "correct": false,
        "explanation": "Incorrect. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      },
      {
        "content": "Les intégrines relient la cellule à des ligands spécifiques de la matrice extracellulaire.",
        "correct": true,
        "explanation": "Exact. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      }
    ],
    "requiredSelectionCount": 5
  },
  {
    "order": 57,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de « Matrice extracellulaire », sélectionnez les propositions exactes.",
    "explanation": "La MEC associe collagènes, glycoprotéines d’adhérence (fibronectine, laminines), protéoglycanes et élastine selon les tissus. Collagène IV et laminines sont majeurs dans les lames basales ; les intégrines assurent des liens spécifiques avec la cellule.",
    "choices": [
      {
        "content": "L’élastine est le constituant principal de toutes les lames basales.",
        "correct": false,
        "explanation": "Incorrect. La MEC associe collagènes, glycoprotéines d’adhérence (fibronectine, laminines), protéoglycanes et élastine selon les tissus. Collagène IV et laminines sont majeurs dans les lames basales ; les intégrines assurent des liens spécifiques avec la cellule."
      },
      {
        "content": "Les laminines sont des glycoprotéines majeures des lames basales.",
        "correct": true,
        "explanation": "Exact. La MEC associe collagènes, glycoprotéines d’adhérence (fibronectine, laminines), protéoglycanes et élastine selon les tissus. Collagène IV et laminines sont majeurs dans les lames basales ; les intégrines assurent des liens spécifiques avec la cellule."
      },
      {
        "content": "Le collagène IV forme des réseaux caractéristiques des lames basales.",
        "correct": true,
        "explanation": "Exact. La MEC associe collagènes, glycoprotéines d’adhérence (fibronectine, laminines), protéoglycanes et élastine selon les tissus. Collagène IV et laminines sont majeurs dans les lames basales ; les intégrines assurent des liens spécifiques avec la cellule."
      },
      {
        "content": "Les protéoglycanes ne contiennent aucun glucide.",
        "correct": false,
        "explanation": "Incorrect. La MEC associe collagènes, glycoprotéines d’adhérence (fibronectine, laminines), protéoglycanes et élastine selon les tissus. Collagène IV et laminines sont majeurs dans les lames basales ; les intégrines assurent des liens spécifiques avec la cellule."
      },
      {
        "content": "La matrice extracellulaire est composée exclusivement de collagène.",
        "correct": false,
        "explanation": "Incorrect. La MEC associe collagènes, glycoprotéines d’adhérence (fibronectine, laminines), protéoglycanes et élastine selon les tissus. Collagène IV et laminines sont majeurs dans les lames basales ; les intégrines assurent des liens spécifiques avec la cellule."
      }
    ]
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Dans le cadre de « Récepteurs couplés aux protéines G », identifiez l’affirmation correcte.",
    "explanation": "Les RCPG ont sept segments transmembranaires et activent des protéines G hétérotrimériques. L’échange GDP→GTP sur Gα modifie les interactions avec effecteurs ; selon le type de G, adénylate cyclase, phospholipase C ou canaux peuvent être modulés.",
    "choices": [
      {
        "content": "Les RCPG n’ont aucun segment transmembranaire.",
        "correct": false,
        "explanation": "Incorrect. Les RCPG ont sept segments transmembranaires et activent des protéines G hétérotrimériques. L’échange GDP→GTP sur Gα modifie les interactions avec effecteurs ; selon le type de G, adénylate cyclase, phospholipase C ou canaux peuvent être modulés."
      },
      {
        "content": "La sous-unité alpha reste toujours liée au GDP lors de l’activation.",
        "correct": false,
        "explanation": "Incorrect. Les RCPG ont sept segments transmembranaires et activent des protéines G hétérotrimériques. L’échange GDP→GTP sur Gα modifie les interactions avec effecteurs ; selon le type de G, adénylate cyclase, phospholipase C ou canaux peuvent être modulés."
      },
      {
        "content": "L’hydrolyse du GTP empêche toute extinction du signal.",
        "correct": false,
        "explanation": "Incorrect. Les RCPG ont sept segments transmembranaires et activent des protéines G hétérotrimériques. L’échange GDP→GTP sur Gα modifie les interactions avec effecteurs ; selon le type de G, adénylate cyclase, phospholipase C ou canaux peuvent être modulés."
      },
      {
        "content": "Un RCPG est une pompe ATPase qui transporte directement les ligands.",
        "correct": false,
        "explanation": "Incorrect. Les RCPG ont sept segments transmembranaires et activent des protéines G hétérotrimériques. L’échange GDP→GTP sur Gα modifie les interactions avec effecteurs ; selon le type de G, adénylate cyclase, phospholipase C ou canaux peuvent être modulés."
      },
      {
        "content": "Une protéine G hétérotrimérique comporte des sous-unités alpha, bêta et gamma.",
        "correct": true,
        "explanation": "Exact. Les RCPG ont sept segments transmembranaires et activent des protéines G hétérotrimériques. L’échange GDP→GTP sur Gα modifie les interactions avec effecteurs ; selon le type de G, adénylate cyclase, phospholipase C ou canaux peuvent être modulés."
      }
    ]
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles affirmations décrivent correctement « Récepteurs à activité tyrosine kinase » ?",
    "explanation": "Les RTK possèdent un domaine extracellulaire de liaison, un segment transmembranaire et un domaine tyrosine kinase cytosolique. Beaucoup s’activent par dimérisation/réarrangement et trans-autophosphorylation ; le récepteur de l’insuline est un dimère préformé.",
    "choices": [
      {
        "content": "De nombreux RTK sont activés par une dimérisation ou un réarrangement favorisé par le ligand.",
        "correct": true,
        "explanation": "Exact. Les RTK possèdent un domaine extracellulaire de liaison, un segment transmembranaire et un domaine tyrosine kinase cytosolique. Beaucoup s’activent par dimérisation/réarrangement et trans-autophosphorylation ; le récepteur de l’insuline est un dimère préformé."
      },
      {
        "content": "Le récepteur de l’insuline est un RCPG à sept hélices.",
        "correct": false,
        "explanation": "Incorrect. Les RTK possèdent un domaine extracellulaire de liaison, un segment transmembranaire et un domaine tyrosine kinase cytosolique. Beaucoup s’activent par dimérisation/réarrangement et trans-autophosphorylation ; le récepteur de l’insuline est un dimère préformé."
      },
      {
        "content": "La phosphorylation de tyrosines du récepteur peut créer des sites de recrutement pour des protéines de signalisation.",
        "correct": true,
        "explanation": "Exact. Les RTK possèdent un domaine extracellulaire de liaison, un segment transmembranaire et un domaine tyrosine kinase cytosolique. Beaucoup s’activent par dimérisation/réarrangement et trans-autophosphorylation ; le récepteur de l’insuline est un dimère préformé."
      },
      {
        "content": "La tyrosine kinase utilise le GTP comme unique donneur de phosphate.",
        "correct": false,
        "explanation": "Incorrect. Les RTK possèdent un domaine extracellulaire de liaison, un segment transmembranaire et un domaine tyrosine kinase cytosolique. Beaucoup s’activent par dimérisation/réarrangement et trans-autophosphorylation ; le récepteur de l’insuline est un dimère préformé."
      },
      {
        "content": "Tous les RTK sont des monomères qui ne se rapprochent jamais lors de l’activation.",
        "correct": false,
        "explanation": "Incorrect. Les RTK possèdent un domaine extracellulaire de liaison, un segment transmembranaire et un domaine tyrosine kinase cytosolique. Beaucoup s’activent par dimérisation/réarrangement et trans-autophosphorylation ; le récepteur de l’insuline est un dimère préformé."
      }
    ]
  },
  {
    "order": 60,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel type de récepteur possède classiquement sept hélices transmembranaires et active une protéine G hétérotrimérique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "RCPG",
        "GPCR",
        "récepteur couplé aux protéines G",
        "recepteur couple aux proteines G"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les RCPG constituent une grande famille de récepteurs à sept passages transmembranaires."
  },
  {
    "order": 61,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Pour « Communications autocrine, paracrine et endocrine », quelle proposition doit être retenue ?",
    "explanation": "Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse.",
    "choices": [
      {
        "content": "Une cytokine ne peut jamais avoir d’action locale.",
        "correct": false,
        "explanation": "Incorrect. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      },
      {
        "content": "La communication endocrine est synonyme de contact cellule-cellule direct.",
        "correct": false,
        "explanation": "Incorrect. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      },
      {
        "content": "Une communication paracrine agit principalement sur des cellules voisines ou proches.",
        "correct": true,
        "explanation": "Exact. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      },
      {
        "content": "Une hormone endocrine doit agir seulement sur les cellules immédiatement adjacentes à sa source.",
        "correct": false,
        "explanation": "Incorrect. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      },
      {
        "content": "Toutes les cellules exposées à une hormone répondent même si elles n’expriment aucun récepteur.",
        "correct": false,
        "explanation": "Incorrect. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      }
    ]
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel nucléotide remplace le GDP sur la sous-unité alpha d’une protéine G lors de son activation ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "GTP"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’échange GDP-GTP active la sous-unité Gα."
  },
  {
    "order": 63,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Communication synaptique chimique », lesquelles sont exactes ?",
    "explanation": "À une synapse chimique, le potentiel d’action déclenche une exocytose Ca2+-dépendante de neurotransmetteur. À la jonction neuromusculaire, l’acétylcholine active des récepteurs nicotiniques puis est hydrolysée par l’acétylcholinestérase ; la choline est recaptée.",
    "choices": [
      {
        "content": "À la jonction neuromusculaire, l’acétylcholine se fixe sur des récepteurs nicotiniques de la fibre musculaire.",
        "correct": true,
        "explanation": "Exact. À une synapse chimique, le potentiel d’action déclenche une exocytose Ca2+-dépendante de neurotransmetteur. À la jonction neuromusculaire, l’acétylcholine active des récepteurs nicotiniques puis est hydrolysée par l’acétylcholinestérase ; la choline est recaptée."
      },
      {
        "content": "La choline issue de l’hydrolyse de l’acétylcholine peut être recaptée par la terminaison nerveuse.",
        "correct": true,
        "explanation": "Exact. À une synapse chimique, le potentiel d’action déclenche une exocytose Ca2+-dépendante de neurotransmetteur. À la jonction neuromusculaire, l’acétylcholine active des récepteurs nicotiniques puis est hydrolysée par l’acétylcholinestérase ; la choline est recaptée."
      },
      {
        "content": "Le neurotransmetteur diffuse dans la fente synaptique sur une courte distance.",
        "correct": true,
        "explanation": "Exact. À une synapse chimique, le potentiel d’action déclenche une exocytose Ca2+-dépendante de neurotransmetteur. À la jonction neuromusculaire, l’acétylcholine active des récepteurs nicotiniques puis est hydrolysée par l’acétylcholinestérase ; la choline est recaptée."
      },
      {
        "content": "L’acétylcholinestérase hydrolyse rapidement l’acétylcholine dans la fente synaptique.",
        "correct": true,
        "explanation": "Exact. À une synapse chimique, le potentiel d’action déclenche une exocytose Ca2+-dépendante de neurotransmetteur. À la jonction neuromusculaire, l’acétylcholine active des récepteurs nicotiniques puis est hydrolysée par l’acétylcholinestérase ; la choline est recaptée."
      },
      {
        "content": "Le neurotransmetteur doit parcourir plusieurs centimètres dans le sang avant d’atteindre la cellule postsynaptique.",
        "correct": false,
        "explanation": "Incorrect. À une synapse chimique, le potentiel d’action déclenche une exocytose Ca2+-dépendante de neurotransmetteur. À la jonction neuromusculaire, l’acétylcholine active des récepteurs nicotiniques puis est hydrolysée par l’acétylcholinestérase ; la choline est recaptée."
      }
    ]
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de récepteur est le récepteur de l’EGF ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "récepteur tyrosine kinase",
        "recepteur tyrosine kinase",
        "RTK"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "EGFR est un récepteur à activité tyrosine kinase."
  },
  {
    "order": 65,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement « Principes de signalisation cellulaire » ?",
    "explanation": "Une cellule détecte des signaux via des récepteurs ou d’autres capteurs, transduit l’information et produit une réponse. La spécificité dépend du couple ligand-récepteur et du contexte cellulaire ; plusieurs voies peuvent converger ou se moduler.",
    "choices": [
      {
        "content": "Dans ce contexte, un récepteur membranaire transporte nécessairement le ligand à travers la bicouche.",
        "correct": false,
        "explanation": "Incorrect. Une cellule détecte des signaux via des récepteurs ou d’autres capteurs, transduit l’information et produit une réponse. La spécificité dépend du couple ligand-récepteur et du contexte cellulaire ; plusieurs voies peuvent converger ou se moduler."
      },
      {
        "content": "La signalisation cellulaire ne participe pas à l’homéostasie tissulaire.",
        "correct": false,
        "explanation": "Incorrect. Une cellule détecte des signaux via des récepteurs ou d’autres capteurs, transduit l’information et produit une réponse. La spécificité dépend du couple ligand-récepteur et du contexte cellulaire ; plusieurs voies peuvent converger ou se moduler."
      },
      {
        "content": "Tout ligand déclenche la même réponse dans toutes les cellules de l’organisme.",
        "correct": false,
        "explanation": "Incorrect. Une cellule détecte des signaux via des récepteurs ou d’autres capteurs, transduit l’information et produit une réponse. La spécificité dépend du couple ligand-récepteur et du contexte cellulaire ; plusieurs voies peuvent converger ou se moduler."
      },
      {
        "content": "Dans ce contexte, une même molécule signal peut provoquer des réponses différentes selon le type cellulaire.",
        "correct": true,
        "explanation": "Exact. Une cellule détecte des signaux via des récepteurs ou d’autres capteurs, transduit l’information et produit une réponse. La spécificité dépend du couple ligand-récepteur et du contexte cellulaire ; plusieurs voies peuvent converger ou se moduler."
      },
      {
        "content": "Une réponse cellulaire ne peut jamais modifier l’expression génique.",
        "correct": false,
        "explanation": "Incorrect. Une cellule détecte des signaux via des récepteurs ou d’autres capteurs, transduit l’information et produit une réponse. La spécificité dépend du couple ligand-récepteur et du contexte cellulaire ; plusieurs voies peuvent converger ou se moduler."
      }
    ]
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour le thème « Signalisation dépendante du contact et adhérence », quelles propositions doivent être retenues ?",
    "explanation": "La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique.",
    "choices": [
      {
        "content": "Dans ce contexte, les intégrines relient la cellule à des ligands spécifiques de la matrice extracellulaire.",
        "correct": true,
        "explanation": "Exact. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      },
      {
        "content": "Dans ce contexte, la diapédèse leucocytaire implique des interactions séquentielles entre molécules d’adhérence.",
        "correct": true,
        "explanation": "Exact. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      },
      {
        "content": "Dans ce contexte, les interactions cellule-matrice ne jouent aucun rôle dans la migration.",
        "correct": false,
        "explanation": "Incorrect. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      },
      {
        "content": "Dans ce contexte, l’adhérence cellule-matrice peut influencer la survie, la migration et la différenciation.",
        "correct": true,
        "explanation": "Exact. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      },
      {
        "content": "Dans ce contexte, les molécules d’adhérence peuvent participer à une signalisation bidirectionnelle.",
        "correct": true,
        "explanation": "Exact. La signalisation juxtacrine nécessite un contact rapproché entre cellules ou des interactions cellule-matrice. Les molécules d’adhérence et intégrines peuvent transmettre des informations en plus de leur rôle mécanique."
      }
    ]
  }
];
