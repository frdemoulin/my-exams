import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch8 — Chromatine, territoires et nucléole — V2 active */
export const SECTION_D_QUESTIONS: SeedQuestion[] = [
  {
    "order": 67,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur « Compaction de la chromatine », laquelle est exacte ?",
    "choices": [
      {
        "content": "La compaction de la chromatine est impossible à modifier localement.",
        "correct": false,
        "explanation": "Elle est dynamique et régulée."
      },
      {
        "content": "Le nucléosome correspond au niveau maximal de condensation du chromosome mitotique.",
        "correct": false,
        "explanation": "Il constitue l’unité de base de la chromatine, bien en amont de la condensation mitotique."
      },
      {
        "content": "La chromatine peut adopter localement des degrés de compaction différents.",
        "correct": true,
        "explanation": "Cette plasticité permet de moduler l’accessibilité de l’ADN."
      },
      {
        "content": "Une fibre régulière de 30 nm est obligatoire dans tous les noyaux humains.",
        "correct": false,
        "explanation": "Ce modèle n’est pas considéré comme une structure universelle stable in vivo."
      },
      {
        "content": "La chromatine interphasique est toujours aussi condensée qu’un chromosome mitotique.",
        "correct": false,
        "explanation": "Elle est globalement moins condensée et hétérogène."
      }
    ],
    "explanation": "La chromatine est organisée de façon hiérarchique et dynamique ; le modèle historique de fibre de 30 nm ne doit pas être présenté comme une structure universelle stable in vivo."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le thème « Euchromatine et hétérochromatine » ?",
    "choices": [
      {
        "content": "L’euchromatine est généralement moins compacte que l’hétérochromatine.",
        "correct": true,
        "explanation": "Sa plus grande accessibilité facilite l’activité transcriptionnelle."
      },
      {
        "content": "Une chromatine plus accessible empêche toute transcription.",
        "correct": false,
        "explanation": "L’accessibilité favorise généralement la transcription."
      },
      {
        "content": "La compaction chromatinienne peut varier au cours du temps et selon le type cellulaire.",
        "correct": true,
        "explanation": "Les états chromatinien sont régulés."
      },
      {
        "content": "Toute hétérochromatine est définitivement inactive dans toutes les cellules.",
        "correct": false,
        "explanation": "Certaines régions peuvent changer d’état selon le contexte et l’hétérochromatine n’est pas une catégorie absolue."
      },
      {
        "content": "L’euchromatine est la forme la plus condensée du chromosome mitotique.",
        "correct": false,
        "explanation": "Elle correspond à une chromatine relativement décondensée en interphase."
      }
    ],
    "explanation": "L’euchromatine est généralement plus accessible et plus transcriptionnellement active ; l’hétérochromatine est plus compacte et souvent moins active, sans que ces catégories soient absolues."
  },
  {
    "order": 69,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Comment nomme-t-on la chromatine relativement décondensée et généralement plus transcriptionnellement active ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "euchromatine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’euchromatine est en moyenne moins compacte et plus accessible à la machinerie transcriptionnelle que l’hétérochromatine."
  },
  {
    "order": 70,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sur le thème « Territoires chromosomiques », sélectionnez les affirmations exactes.",
    "choices": [
      {
        "content": "Les territoires chromosomiques contribuent à l’organisation tridimensionnelle du génome.",
        "correct": true,
        "explanation": "La position spatiale des chromosomes est structurée."
      },
      {
        "content": "La FISH multicouleur peut mettre en évidence des territoires chromosomiques.",
        "correct": true,
        "explanation": "Des sondes spécifiques permettent de visualiser différents chromosomes."
      },
      {
        "content": "En interphase, tous les chromosomes sont uniformément mélangés sans organisation spatiale.",
        "correct": false,
        "explanation": "Ils occupent des territoires préférentiels."
      },
      {
        "content": "Un territoire chromosomique est une membrane entourant un chromosome.",
        "correct": false,
        "explanation": "Il s’agit d’un volume préférentiel, sans membrane propre."
      },
      {
        "content": "Chaque chromosome interphasique occupe préférentiellement un territoire nucléaire.",
        "correct": true,
        "explanation": "Les chromosomes ne sont pas totalement mélangés au hasard."
      }
    ],
    "explanation": "En interphase, chaque chromosome occupe préférentiellement un territoire nucléaire distinct, tout en conservant des interfaces et interactions avec d’autres régions du génome."
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le thème « Nucléole », quelles propositions sont incorrectes ?",
    "choices": [
      {
        "content": "Les chromosomes ne contribuent jamais à l’organisation du nucléole.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. Les régions organisatrices nucléolaires contenant l’ADNr participent à sa formation."
      },
      {
        "content": "Les ARNr sont synthétisés dans le cytoplasme puis importés dans le nucléole.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. Ils sont synthétisés dans le noyau à partir des gènes ribosomaux."
      },
      {
        "content": "Le nucléole est le lieu principal de la traduction des protéines cytosoliques.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. La traduction a lieu sur les ribosomes du cytoplasme ou du RER."
      },
      {
        "content": "L’assemblage précoce des sous-unités ribosomales se déroule dans le nucléole.",
        "correct": false,
        "explanation": "Cette affirmation est exacte biologiquement ; elle ne doit donc pas être sélectionnée ici. Les ARNr s’associent à des protéines ribosomales importées."
      },
      {
        "content": "Le nucléole est un organite cytoplasmique à double membrane.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. Il est intranucléaire et non membranaire."
      }
    ],
    "explanation": "Le nucléole est un domaine nucléaire non membranaire organisé autour de régions portant les gènes ribosomaux ; il assure la transcription et la maturation d’une grande partie des ARNr ainsi que l’assemblage précoce des sous-unités ribosomales."
  },
  {
    "order": 72,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Sur le thème « ADNr et ARNr », sélectionnez exactement les cinq propositions exactes parmi les dix proposées.",
    "choices": [
      {
        "content": "Les gènes ribosomaux 45S sont présents en nombreuses copies répétées.",
        "correct": true,
        "explanation": "Cette répétition permet une forte production d’ARNr."
      },
      {
        "content": "Le pré-ARNr 45S donne notamment les ARNr 18S, 5,8S et 28S.",
        "correct": true,
        "explanation": "Ces ARNr sont produits par clivages et modifications du précurseur."
      },
      {
        "content": "Les ribosomes complets sont assemblés de façon permanente dans le nucléole puis exportés comme une seule particule active.",
        "correct": false,
        "explanation": "Les sous-unités sont exportées séparément et s’associent lors de la traduction."
      },
      {
        "content": "L’ARN polymérase II produit directement tous les ARNr du ribosome.",
        "correct": false,
        "explanation": "Pol I transcrit le 45S et Pol III le 5S."
      },
      {
        "content": "Les gènes ribosomaux n’existent qu’en un seul exemplaire par cellule humaine.",
        "correct": false,
        "explanation": "Ils sont présents en répétitions multicopies."
      },
      {
        "content": "Les protéines ribosomales sont ensuite importées dans le noyau et le nucléole.",
        "correct": true,
        "explanation": "Elles y rejoignent les ARNr en cours de maturation."
      },
      {
        "content": "L’ARN polymérase I transcrit le précurseur 45S dans le nucléole.",
        "correct": true,
        "explanation": "Pol I assure l’essentiel de la transcription des grands ARNr."
      },
      {
        "content": "Les protéines ribosomales sont synthétisées exclusivement dans le nucléole.",
        "correct": false,
        "explanation": "Elles sont traduites dans le cytoplasme."
      },
      {
        "content": "Le précurseur 45S donne l’ARNr 5S comme unique produit.",
        "correct": false,
        "explanation": "Il donne 18S, 5,8S et 28S ; le 5S est transcrit séparément."
      },
      {
        "content": "Les protéines ribosomales sont synthétisées dans le cytoplasme.",
        "correct": true,
        "explanation": "Comme la plupart des protéines nucléaires, elles sont traduites sur des ribosomes cytosoliques."
      }
    ],
    "explanation": "Chez l’humain, les gènes ribosomaux 45S sont regroupés en répétitions sur les bras courts des chromosomes acrocentriques ; l’ARN polymérase I produit un précurseur donnant les ARNr 18S, 5,8S et 28S, tandis que le 5S est transcrit par l’ARN polymérase III hors du nucléole. Les protéines ribosomales sont synthétisées dans le cytoplasme puis importées dans le noyau ; elles s’associent aux ARNr pour former des pré-sous-unités, qui sont exportées vers le cytoplasme."
  },
  {
    "order": 73,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Biogenèse des sous-unités ribosomales », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Les sous-unités ribosomales traversent l’enveloppe nucléaire par diffusion libre non sélective.",
        "correct": false,
        "explanation": "Leur export est un transport macromoléculaire sélectif."
      },
      {
        "content": "Les protéines ribosomales sont ensuite importées dans le noyau et le nucléole.",
        "correct": true,
        "explanation": "Elles y rejoignent les ARNr en cours de maturation."
      },
      {
        "content": "Les ribosomes complets sont assemblés de façon permanente dans le nucléole puis exportés comme une seule particule active.",
        "correct": false,
        "explanation": "Les sous-unités sont exportées séparément et s’associent lors de la traduction."
      },
      {
        "content": "Les protéines ribosomales sont synthétisées exclusivement dans le nucléole.",
        "correct": false,
        "explanation": "Elles sont traduites dans le cytoplasme."
      },
      {
        "content": "Les protéines ribosomales sont synthétisées dans le cytoplasme.",
        "correct": true,
        "explanation": "Comme la plupart des protéines nucléaires, elles sont traduites sur des ribosomes cytosoliques."
      }
    ],
    "explanation": "Les protéines ribosomales sont synthétisées dans le cytoplasme puis importées dans le noyau ; elles s’associent aux ARNr pour former des pré-sous-unités, qui sont exportées vers le cytoplasme."
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Pour consolider ce repère, parmi les propositions suivantes sur « Compaction de la chromatine », laquelle est exacte ?",
    "choices": [
      {
        "content": "Le nucléosome correspond au niveau maximal de condensation du chromosome mitotique.",
        "correct": false,
        "explanation": "Il constitue l’unité de base de la chromatine, bien en amont de la condensation mitotique."
      },
      {
        "content": "Une fibre régulière de 30 nm est obligatoire dans tous les noyaux humains.",
        "correct": false,
        "explanation": "Ce modèle n’est pas considéré comme une structure universelle stable in vivo."
      },
      {
        "content": "La chromatine interphasique est toujours aussi condensée qu’un chromosome mitotique.",
        "correct": false,
        "explanation": "Elle est globalement moins condensée et hétérogène."
      },
      {
        "content": "Le chromosome mitotique représente un état de très forte compaction de la chromatine.",
        "correct": true,
        "explanation": "La condensation mitotique permet la ségrégation des chromosomes."
      },
      {
        "content": "La compaction de la chromatine est impossible à modifier localement.",
        "correct": false,
        "explanation": "Elle est dynamique et régulée."
      }
    ],
    "explanation": "La chromatine est organisée de façon hiérarchique et dynamique ; le modèle historique de fibre de 30 nm ne doit pas être présenté comme une structure universelle stable in vivo."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le thème « Euchromatine et hétérochromatine », quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Toute hétérochromatine est définitivement inactive dans toutes les cellules.",
        "correct": false,
        "explanation": "Certaines régions peuvent changer d’état selon le contexte et l’hétérochromatine n’est pas une catégorie absolue."
      },
      {
        "content": "L’activité transcriptionnelle est en moyenne plus élevée dans l’euchromatine.",
        "correct": true,
        "explanation": "L’accessibilité aux facteurs de transcription y est généralement supérieure."
      },
      {
        "content": "L’euchromatine est généralement moins compacte que l’hétérochromatine.",
        "correct": true,
        "explanation": "Sa plus grande accessibilité facilite l’activité transcriptionnelle."
      },
      {
        "content": "L’hétérochromatine apparaît souvent plus dense en microscopie électronique.",
        "correct": true,
        "explanation": "Sa compaction accrue donne un aspect plus électron-dense."
      },
      {
        "content": "L’euchromatine est la forme la plus condensée du chromosome mitotique.",
        "correct": false,
        "explanation": "Elle correspond à une chromatine relativement décondensée en interphase."
      }
    ],
    "explanation": "L’euchromatine est généralement plus accessible et plus transcriptionnellement active ; l’hétérochromatine est plus compacte et souvent moins active, sans que ces catégories soient absolues."
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Sur le thème « Territoires chromosomiques », repérez l’unique affirmation correcte.",
    "choices": [
      {
        "content": "La FISH détruit nécessairement la séquence d’ADN qu’elle détecte.",
        "correct": false,
        "explanation": "Elle utilise des sondes complémentaires pour localiser des séquences."
      },
      {
        "content": "Les territoires chromosomiques n’existent que pendant la mitose.",
        "correct": false,
        "explanation": "Ils sont particulièrement étudiés dans le noyau interphasique."
      },
      {
        "content": "En interphase, tous les chromosomes sont uniformément mélangés sans organisation spatiale.",
        "correct": false,
        "explanation": "Ils occupent des territoires préférentiels."
      },
      {
        "content": "Un territoire chromosomique est une membrane entourant un chromosome.",
        "correct": false,
        "explanation": "Il s’agit d’un volume préférentiel, sans membrane propre."
      },
      {
        "content": "Les territoires chromosomiques contribuent à l’organisation tridimensionnelle du génome.",
        "correct": true,
        "explanation": "La position spatiale des chromosomes est structurée."
      }
    ],
    "explanation": "En interphase, chaque chromosome occupe préférentiellement un territoire nucléaire distinct, tout en conservant des interfaces et interactions avec d’autres régions du génome."
  },
  {
    "order": 77,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Nucléole », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le nucléole n’est pas entouré d’une membrane.",
        "correct": true,
        "explanation": "Il s’agit d’un domaine nucléaire formé par auto-organisation de macromolécules."
      },
      {
        "content": "Le nucléole est un organite cytoplasmique à double membrane.",
        "correct": false,
        "explanation": "Il est intranucléaire et non membranaire."
      },
      {
        "content": "L’assemblage précoce des sous-unités ribosomales se déroule dans le nucléole.",
        "correct": true,
        "explanation": "Les ARNr s’associent à des protéines ribosomales importées."
      },
      {
        "content": "Les sous-unités ribosomales sont ensuite exportées séparément vers le cytoplasme.",
        "correct": true,
        "explanation": "Elles terminent leur maturation avant de participer à la traduction."
      },
      {
        "content": "Le nucléole est un site majeur de transcription et de maturation des ARNr.",
        "correct": true,
        "explanation": "Les pré-ARNr y sont synthétisés et transformés."
      }
    ],
    "explanation": "Le nucléole est un domaine nucléaire non membranaire organisé autour de régions portant les gènes ribosomaux ; il assure la transcription et la maturation d’une grande partie des ARNr ainsi que l’assemblage précoce des sous-unités ribosomales."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sur le thème « ADNr et ARNr », sélectionnez exactement 2 propositions exactes.",
    "choices": [
      {
        "content": "Les gènes ribosomaux n’existent qu’en un seul exemplaire par cellule humaine.",
        "correct": false,
        "explanation": "Ils sont présents en répétitions multicopies."
      },
      {
        "content": "Les gènes ribosomaux 45S sont présents en nombreuses copies répétées.",
        "correct": true,
        "explanation": "Cette répétition permet une forte production d’ARNr."
      },
      {
        "content": "L’ARN polymérase II produit directement tous les ARNr du ribosome.",
        "correct": false,
        "explanation": "Pol I transcrit le 45S et Pol III le 5S."
      },
      {
        "content": "L’ARNr 5S est transcrit par l’ARN polymérase III en dehors du nucléole avant son incorporation à la grande sous-unité.",
        "correct": true,
        "explanation": "Le 5S suit une voie de transcription distincte."
      },
      {
        "content": "L’ADNr est situé exclusivement dans les mitochondries.",
        "correct": false,
        "explanation": "Les gènes ribosomaux nucléaires sont portés par des chromosomes nucléaires."
      }
    ],
    "explanation": "Chez l’humain, les gènes ribosomaux 45S sont regroupés en répétitions sur les bras courts des chromosomes acrocentriques ; l’ARN polymérase I produit un précurseur donnant les ARNr 18S, 5,8S et 28S, tandis que le 5S est transcrit par l’ARN polymérase III hors du nucléole."
  },
  {
    "order": 79,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Biogenèse des sous-unités ribosomales », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Les pré-sous-unités ribosomales sont exportées par les pores nucléaires.",
        "correct": true,
        "explanation": "Petite et grande sous-unités quittent le noyau séparément."
      },
      {
        "content": "Les protéines ribosomales sont synthétisées exclusivement dans le nucléole.",
        "correct": false,
        "explanation": "Elles sont traduites dans le cytoplasme."
      },
      {
        "content": "Le nucléole synthétise les protéines ribosomales par traduction.",
        "correct": false,
        "explanation": "Il organise surtout la biogenèse des ARNr et l’assemblage des pré-sous-unités."
      },
      {
        "content": "La traduction débute après l’assemblage fonctionnel des sous-unités dans le cytoplasme.",
        "correct": true,
        "explanation": "Les sous-unités s’associent sur un ARNm lors de l’initiation de la traduction."
      },
      {
        "content": "Les sous-unités ribosomales traversent l’enveloppe nucléaire par diffusion libre non sélective.",
        "correct": false,
        "explanation": "Leur export est un transport macromoléculaire sélectif."
      }
    ],
    "explanation": "Les protéines ribosomales sont synthétisées dans le cytoplasme puis importées dans le noyau ; elles s’associent aux ARNr pour former des pré-sous-unités, qui sont exportées vers le cytoplasme."
  },
  {
    "order": 80,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Sur le thème « Compaction de la chromatine », repérez l’unique affirmation correcte.",
    "choices": [
      {
        "content": "La fibre nucléosomique peut apparaître comme un « collier de perles » après étalement.",
        "correct": true,
        "explanation": "Les nucléosomes successifs donnent cet aspect classique."
      },
      {
        "content": "La chromatine interphasique est toujours aussi condensée qu’un chromosome mitotique.",
        "correct": false,
        "explanation": "Elle est globalement moins condensée et hétérogène."
      },
      {
        "content": "La compaction de la chromatine est impossible à modifier localement.",
        "correct": false,
        "explanation": "Elle est dynamique et régulée."
      },
      {
        "content": "Le nucléosome correspond au niveau maximal de condensation du chromosome mitotique.",
        "correct": false,
        "explanation": "Il constitue l’unité de base de la chromatine, bien en amont de la condensation mitotique."
      },
      {
        "content": "Une fibre régulière de 30 nm est obligatoire dans tous les noyaux humains.",
        "correct": false,
        "explanation": "Ce modèle n’est pas considéré comme une structure universelle stable in vivo."
      }
    ],
    "explanation": "La chromatine est organisée de façon hiérarchique et dynamique ; le modèle historique de fibre de 30 nm ne doit pas être présenté comme une structure universelle stable in vivo."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment nomme-t-on la chromatine plus compacte et généralement moins transcriptionnellement active ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "hétérochromatine",
        "heterochromatine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’hétérochromatine est généralement plus compacte et moins accessible, sans être nécessairement inactive de manière absolue."
  },
  {
    "order": 82,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel terme désigne le volume nucléaire préférentiellement occupé par un chromosome interphasique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "territoire chromosomique",
        "territoire chromosome"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "En interphase, chaque chromosome occupe préférentiellement un domaine spatial appelé territoire chromosomique, sans membrane propre."
  },
  {
    "order": 83,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel domaine nucléaire assure une grande partie de la biogenèse des ribosomes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "nucléole",
        "nucleole"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le nucléole est un domaine nucléaire non membranaire consacré à la transcription et à la maturation d’une grande partie des ARNr et à l’assemblage précoce des sous-unités ribosomales."
  },
  {
    "order": 84,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Euchromatine et hétérochromatine », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La compaction chromatinienne peut varier au cours du temps et selon le type cellulaire.",
        "correct": true,
        "explanation": "Les états chromatinien sont régulés."
      },
      {
        "content": "Une chromatine plus accessible empêche toute transcription.",
        "correct": false,
        "explanation": "L’accessibilité favorise généralement la transcription."
      },
      {
        "content": "L’hétérochromatine apparaît souvent plus dense en microscopie électronique.",
        "correct": true,
        "explanation": "Sa compaction accrue donne un aspect plus électron-dense."
      },
      {
        "content": "Toute hétérochromatine est définitivement inactive dans toutes les cellules.",
        "correct": false,
        "explanation": "Certaines régions peuvent changer d’état selon le contexte et l’hétérochromatine n’est pas une catégorie absolue."
      },
      {
        "content": "L’euchromatine est généralement moins compacte que l’hétérochromatine.",
        "correct": true,
        "explanation": "Sa plus grande accessibilité facilite l’activité transcriptionnelle."
      }
    ],
    "explanation": "L’euchromatine est généralement plus accessible et plus transcriptionnellement active ; l’hétérochromatine est plus compacte et souvent moins active, sans que ces catégories soient absolues."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le thème « Territoires chromosomiques » ?",
    "choices": [
      {
        "content": "Des interactions peuvent tout de même se produire entre régions appartenant à des chromosomes différents.",
        "correct": true,
        "explanation": "Les territoires ne sont pas des compartiments étanches."
      },
      {
        "content": "Les territoires chromosomiques contribuent à l’organisation tridimensionnelle du génome.",
        "correct": true,
        "explanation": "La position spatiale des chromosomes est structurée."
      },
      {
        "content": "Chaque chromosome interphasique occupe préférentiellement un territoire nucléaire.",
        "correct": true,
        "explanation": "Les chromosomes ne sont pas totalement mélangés au hasard."
      },
      {
        "content": "Un territoire chromosomique est une membrane entourant un chromosome.",
        "correct": false,
        "explanation": "Il s’agit d’un volume préférentiel, sans membrane propre."
      },
      {
        "content": "La FISH multicouleur peut mettre en évidence des territoires chromosomiques.",
        "correct": true,
        "explanation": "Des sondes spécifiques permettent de visualiser différents chromosomes."
      }
    ],
    "explanation": "En interphase, chaque chromosome occupe préférentiellement un territoire nucléaire distinct, tout en conservant des interfaces et interactions avec d’autres régions du génome."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel sigle désigne l’ADN ribosomal ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "ADNr",
        "rDNA",
        "ADN ribosomal"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’ADNr correspond aux gènes ribosomaux présents en répétitions et organisant notamment les régions nucléolaires."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le thème « Nucléole » ?",
    "choices": [
      {
        "content": "L’assemblage précoce des sous-unités ribosomales se déroule dans le nucléole.",
        "correct": true,
        "explanation": "Les ARNr s’associent à des protéines ribosomales importées."
      },
      {
        "content": "Les sous-unités ribosomales sont ensuite exportées séparément vers le cytoplasme.",
        "correct": true,
        "explanation": "Elles terminent leur maturation avant de participer à la traduction."
      },
      {
        "content": "Le nucléole est le lieu principal de la traduction des protéines cytosoliques.",
        "correct": false,
        "explanation": "La traduction a lieu sur les ribosomes du cytoplasme ou du RER."
      },
      {
        "content": "Le nucléole est un organite cytoplasmique à double membrane.",
        "correct": false,
        "explanation": "Il est intranucléaire et non membranaire."
      },
      {
        "content": "Les chromosomes ne contribuent jamais à l’organisation du nucléole.",
        "correct": false,
        "explanation": "Les régions organisatrices nucléolaires contenant l’ADNr participent à sa formation."
      }
    ],
    "explanation": "Le nucléole est un domaine nucléaire non membranaire organisé autour de régions portant les gènes ribosomaux ; il assure la transcription et la maturation d’une grande partie des ARNr ainsi que l’assemblage précoce des sous-unités ribosomales."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle ARN polymérase transcrit le pré-ARNr 45S ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "ARN polymérase I",
        "ARN polymerase I",
        "Pol I",
        "RNA polymerase I"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’ARN polymérase I transcrit dans le nucléole le pré-ARNr 45S, précurseur des ARNr 18S, 5,8S et 28S."
  },
  {
    "order": 89,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Sur ce schéma simplifié d’un noyau interphasique, cliquez sur le nucléole.",
    "image": {
      "src": "/images/training/ue14/biologie-cellulaire/noyau/noyau-nucleole-qzone.svg",
      "alt": "Schéma simplifié d’un noyau avec enveloppe, chromatine et nucléole",
      "width": 1200,
      "height": 700
    },
    "expectedZones": [
      {
        "id": "nucleole",
        "label": "Nucléole",
        "x": 0.58,
        "y": 0.48,
        "tolerance": 0.12
      }
    ],
    "defaultTolerance": 0.12,
    "explanation": "Le nucléole est le domaine nucléaire non membranaire spécialisé dans la transcription et la maturation d’une grande partie des ARNr et dans l’assemblage précoce des sous-unités ribosomales."
  },
  {
    "order": 90,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant le thème « ADNr et ARNr », quelle est l’unique proposition exacte ?",
    "choices": [
      {
        "content": "L’ADNr est situé exclusivement dans les mitochondries.",
        "correct": false,
        "explanation": "Les gènes ribosomaux nucléaires sont portés par des chromosomes nucléaires."
      },
      {
        "content": "L’ARNr 5S est transcrit par l’ARN polymérase III en dehors du nucléole avant son incorporation à la grande sous-unité.",
        "correct": true,
        "explanation": "Le 5S suit une voie de transcription distincte."
      },
      {
        "content": "L’ARN polymérase II produit directement tous les ARNr du ribosome.",
        "correct": false,
        "explanation": "Pol I transcrit le 45S et Pol III le 5S."
      },
      {
        "content": "Les gènes ribosomaux n’existent qu’en un seul exemplaire par cellule humaine.",
        "correct": false,
        "explanation": "Ils sont présents en répétitions multicopies."
      },
      {
        "content": "Le précurseur 45S donne l’ARNr 5S comme unique produit.",
        "correct": false,
        "explanation": "Il donne 18S, 5,8S et 28S ; le 5S est transcrit séparément."
      }
    ],
    "explanation": "Chez l’humain, les gènes ribosomaux 45S sont regroupés en répétitions sur les bras courts des chromosomes acrocentriques ; l’ARN polymérase I produit un précurseur donnant les ARNr 18S, 5,8S et 28S, tandis que le 5S est transcrit par l’ARN polymérase III hors du nucléole."
  },
  {
    "order": 91,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Biogenèse des sous-unités ribosomales », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le nucléole synthétise les protéines ribosomales par traduction.",
        "correct": false,
        "explanation": "Il organise surtout la biogenèse des ARNr et l’assemblage des pré-sous-unités."
      },
      {
        "content": "La traduction débute après l’assemblage fonctionnel des sous-unités dans le cytoplasme.",
        "correct": true,
        "explanation": "Les sous-unités s’associent sur un ARNm lors de l’initiation de la traduction."
      },
      {
        "content": "Les sous-unités ribosomales traversent l’enveloppe nucléaire par diffusion libre non sélective.",
        "correct": false,
        "explanation": "Leur export est un transport macromoléculaire sélectif."
      },
      {
        "content": "Les protéines ribosomales sont synthétisées dans le cytoplasme.",
        "correct": true,
        "explanation": "Comme la plupart des protéines nucléaires, elles sont traduites sur des ribosomes cytosoliques."
      },
      {
        "content": "Les pré-sous-unités ribosomales sont exportées par les pores nucléaires.",
        "correct": true,
        "explanation": "Petite et grande sous-unités quittent le noyau séparément."
      }
    ],
    "explanation": "Les protéines ribosomales sont synthétisées dans le cytoplasme puis importées dans le noyau ; elles s’associent aux ARNr pour former des pré-sous-unités, qui sont exportées vers le cytoplasme."
  },
  {
    "order": 92,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Parmi ces propositions concernant « Compaction de la chromatine », retenez exactement les 3 affirmations justes.",
    "choices": [
      {
        "content": "La chromatine peut adopter localement des degrés de compaction différents.",
        "correct": true,
        "explanation": "Cette plasticité permet de moduler l’accessibilité de l’ADN."
      },
      {
        "content": "Le chromosome mitotique représente un état de très forte compaction de la chromatine.",
        "correct": true,
        "explanation": "La condensation mitotique permet la ségrégation des chromosomes."
      },
      {
        "content": "La compaction de la chromatine est impossible à modifier localement.",
        "correct": false,
        "explanation": "Elle est dynamique et régulée."
      },
      {
        "content": "La fibre nucléosomique peut apparaître comme un « collier de perles » après étalement.",
        "correct": true,
        "explanation": "Les nucléosomes successifs donnent cet aspect classique."
      },
      {
        "content": "La chromatine interphasique est toujours aussi condensée qu’un chromosome mitotique.",
        "correct": false,
        "explanation": "Elle est globalement moins condensée et hétérogène."
      }
    ],
    "explanation": "La chromatine est organisée de façon hiérarchique et dynamique ; le modèle historique de fibre de 30 nm ne doit pas être présenté comme une structure universelle stable in vivo."
  },
  {
    "order": 93,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel précurseur d’ARNr donne les ARNr 18S, 5,8S et 28S ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "45S",
        "pré-ARNr 45S",
        "pre-ARNr 45S",
        "pré-rRNA 45S"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le pré-ARNr 45S est maturé par clivages et modifications pour donner les ARNr 18S, 5,8S et 28S."
  },
  {
    "order": 94,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Sur le thème « Euchromatine et hétérochromatine », sélectionnez les affirmations fausses.",
    "choices": [
      {
        "content": "L’euchromatine est la forme la plus condensée du chromosome mitotique.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. Elle correspond à une chromatine relativement décondensée en interphase."
      },
      {
        "content": "L’hétérochromatine est dépourvue d’ADN.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. Il s’agit bien de chromatine, donc d’ADN associé à des protéines."
      },
      {
        "content": "Toute hétérochromatine est définitivement inactive dans toutes les cellules.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. Certaines régions peuvent changer d’état selon le contexte et l’hétérochromatine n’est pas une catégorie absolue."
      },
      {
        "content": "L’hétérochromatine apparaît souvent plus dense en microscopie électronique.",
        "correct": false,
        "explanation": "Cette affirmation est exacte biologiquement ; elle ne doit donc pas être sélectionnée ici. Sa compaction accrue donne un aspect plus électron-dense."
      },
      {
        "content": "Une chromatine plus accessible empêche toute transcription.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte et doit être sélectionnée ici. L’accessibilité favorise généralement la transcription."
      }
    ],
    "explanation": "L’euchromatine est généralement plus accessible et plus transcriptionnellement active ; l’hétérochromatine est plus compacte et souvent moins active, sans que ces catégories soient absolues."
  },
  {
    "order": 95,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant le thème « Territoires chromosomiques », quelle est l’unique proposition exacte ?",
    "choices": [
      {
        "content": "Les territoires chromosomiques n’existent que pendant la mitose.",
        "correct": false,
        "explanation": "Ils sont particulièrement étudiés dans le noyau interphasique."
      },
      {
        "content": "En interphase, tous les chromosomes sont uniformément mélangés sans organisation spatiale.",
        "correct": false,
        "explanation": "Ils occupent des territoires préférentiels."
      },
      {
        "content": "Des interactions peuvent tout de même se produire entre régions appartenant à des chromosomes différents.",
        "correct": true,
        "explanation": "Les territoires ne sont pas des compartiments étanches."
      },
      {
        "content": "Un territoire chromosomique est une membrane entourant un chromosome.",
        "correct": false,
        "explanation": "Il s’agit d’un volume préférentiel, sans membrane propre."
      },
      {
        "content": "La FISH détruit nécessairement la séquence d’ADN qu’elle détecte.",
        "correct": false,
        "explanation": "Elle utilise des sondes complémentaires pour localiser des séquences."
      }
    ],
    "explanation": "En interphase, chaque chromosome occupe préférentiellement un territoire nucléaire distinct, tout en conservant des interfaces et interactions avec d’autres régions du génome."
  },
  {
    "order": 96,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Parmi ces propositions concernant « Nucléole », retenez exactement les 2 affirmations justes.",
    "choices": [
      {
        "content": "L’assemblage précoce des sous-unités ribosomales se déroule dans le nucléole.",
        "correct": true,
        "explanation": "Les ARNr s’associent à des protéines ribosomales importées."
      },
      {
        "content": "Le nucléole est un site majeur de transcription et de maturation des ARNr.",
        "correct": true,
        "explanation": "Les pré-ARNr y sont synthétisés et transformés."
      },
      {
        "content": "Le nucléole est le lieu principal de la traduction des protéines cytosoliques.",
        "correct": false,
        "explanation": "La traduction a lieu sur les ribosomes du cytoplasme ou du RER."
      },
      {
        "content": "Les chromosomes ne contribuent jamais à l’organisation du nucléole.",
        "correct": false,
        "explanation": "Les régions organisatrices nucléolaires contenant l’ADNr participent à sa formation."
      },
      {
        "content": "Les ARNr sont synthétisés dans le cytoplasme puis importés dans le nucléole.",
        "correct": false,
        "explanation": "Ils sont synthétisés dans le noyau à partir des gènes ribosomaux."
      }
    ],
    "explanation": "Le nucléole est un domaine nucléaire non membranaire organisé autour de régions portant les gènes ribosomaux ; il assure la transcription et la maturation d’une grande partie des ARNr ainsi que l’assemblage précoce des sous-unités ribosomales."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Pour distinguer les notions proches, concernant le thème « ADNr et ARNr », quelle est l’unique proposition exacte ?",
    "choices": [
      {
        "content": "L’ARN polymérase II produit directement tous les ARNr du ribosome.",
        "correct": false,
        "explanation": "Pol I transcrit le 45S et Pol III le 5S."
      },
      {
        "content": "Les gènes ribosomaux n’existent qu’en un seul exemplaire par cellule humaine.",
        "correct": false,
        "explanation": "Ils sont présents en répétitions multicopies."
      },
      {
        "content": "Le précurseur 45S donne l’ARNr 5S comme unique produit.",
        "correct": false,
        "explanation": "Il donne 18S, 5,8S et 28S ; le 5S est transcrit séparément."
      },
      {
        "content": "Les gènes ribosomaux 45S sont présents en nombreuses copies répétées.",
        "correct": true,
        "explanation": "Cette répétition permet une forte production d’ARNr."
      },
      {
        "content": "L’ADNr est situé exclusivement dans les mitochondries.",
        "correct": false,
        "explanation": "Les gènes ribosomaux nucléaires sont portés par des chromosomes nucléaires."
      }
    ],
    "explanation": "Chez l’humain, les gènes ribosomaux 45S sont regroupés en répétitions sur les bras courts des chromosomes acrocentriques ; l’ARN polymérase I produit un précurseur donnant les ARNr 18S, 5,8S et 28S, tandis que le 5S est transcrit par l’ARN polymérase III hors du nucléole."
  },
  {
    "order": 98,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel ARNr est transcrit par l’ARN polymérase III plutôt que par l’ARN polymérase I ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "5S",
        "ARNr 5S"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’ARNr 5S est transcrit par l’ARN polymérase III hors du nucléole avant son incorporation à la grande sous-unité ribosomale."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Sur le thème « Biogenèse des sous-unités ribosomales », sélectionnez les affirmations exactes.",
    "choices": [
      {
        "content": "La traduction débute après l’assemblage fonctionnel des sous-unités dans le cytoplasme.",
        "correct": true,
        "explanation": "Les sous-unités s’associent sur un ARNm lors de l’initiation de la traduction."
      },
      {
        "content": "Les pré-sous-unités ribosomales sont exportées par les pores nucléaires.",
        "correct": true,
        "explanation": "Petite et grande sous-unités quittent le noyau séparément."
      },
      {
        "content": "Le nucléole synthétise les protéines ribosomales par traduction.",
        "correct": false,
        "explanation": "Il organise surtout la biogenèse des ARNr et l’assemblage des pré-sous-unités."
      },
      {
        "content": "Les protéines ribosomales sont synthétisées exclusivement dans le nucléole.",
        "correct": false,
        "explanation": "Elles sont traduites dans le cytoplasme."
      },
      {
        "content": "Les sous-unités ribosomales traversent l’enveloppe nucléaire par diffusion libre non sélective.",
        "correct": false,
        "explanation": "Leur export est un transport macromoléculaire sélectif."
      }
    ],
    "explanation": "Les protéines ribosomales sont synthétisées dans le cytoplasme puis importées dans le noyau ; elles s’associent aux ARNr pour former des pré-sous-unités, qui sont exportées vers le cytoplasme."
  },
  {
    "order": 100,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Par quelle structure les pré-sous-unités ribosomales quittent-elles le noyau ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "pores nucléaires",
        "pores nucleaires",
        "complexes du pore nucléaire",
        "NPC"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les pré-sous-unités ribosomales sont des cargos macromoléculaires exportés sélectivement à travers les complexes du pore nucléaire."
  }
];

export const SECTION_D_QUIZZES: SeedQuiz[] = [
  {
    "order": 7,
    "slug": "noyau-chromatine-2",
    "title": "États et territoires de la chromatine",
    "description": "Distinguer compaction, activité et organisation spatiale.",
    "stage": "DISCOVER",
    "sectionOrder": 4,
    "questionOrders": [
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76
    ]
  },
  {
    "order": 8,
    "slug": "noyau-nucleole-1",
    "title": "Nucléole et ARNr",
    "description": "Comprendre la biogenèse ribosomale nucléaire.",
    "stage": "PRACTICE",
    "sectionOrder": 4,
    "questionOrders": [
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88
    ]
  },
  {
    "order": 9,
    "slug": "noyau-integration",
    "title": "Chromatine, nucléole et intégration",
    "description": "Mobiliser plusieurs niveaux d’organisation du noyau.",
    "stage": "MASTER",
    "sectionOrder": 4,
    "questionOrders": [
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100
    ]
  }
];
