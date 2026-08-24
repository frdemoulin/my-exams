import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch2 — Synthèse du chapitre */
export const UE14_CELL_CH2_SYNTHESIS_V2: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de « Protéines membranaires et topologie », sélectionnez les affirmations fausses.",
    "explanation": "Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle.",
    "choices": [
      {
        "content": "Une protéine membranaire doit forcément traverser la bicouche.",
        "correct": true,
        "explanation": "Incorrect. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Certaines protéines membranaires sont attachées à la membrane par un groupement lipidique.",
        "correct": false,
        "explanation": "Exact. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "La topologie des protéines membranaires change au hasard à chaque diffusion latérale.",
        "correct": true,
        "explanation": "Incorrect. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Toute protéine transmembranaire possède obligatoirement son N-terminal extracellulaire et son C-terminal cytosolique.",
        "correct": true,
        "explanation": "Incorrect. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Une protéine périphérique peut interagir avec la face cytosolique sans traverser toute la bicouche.",
        "correct": false,
        "explanation": "Exact. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      }
    ]
  },
  {
    "order": 102,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Pour « Glycocalyx et système ABO », quelle proposition doit être retenue ?",
    "explanation": "Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B.",
    "choices": [
      {
        "content": "Les glucides membranaires du glycocalyx sont majoritairement exposés dans le cytosol.",
        "correct": false,
        "explanation": "Incorrect. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      },
      {
        "content": "La glycosylation membranaire est parfaitement symétrique entre les deux feuillets.",
        "correct": false,
        "explanation": "Incorrect. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      },
      {
        "content": "Le glycocalyx est exclusivement constitué de cholestérol.",
        "correct": false,
        "explanation": "Incorrect. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      },
      {
        "content": "Les glycolipides de surface n’ont aucune chaîne glucidique.",
        "correct": false,
        "explanation": "Incorrect. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      },
      {
        "content": "Les antigènes A et B du système ABO diffèrent par leurs motifs glucidiques terminaux.",
        "correct": true,
        "explanation": "Exact. Les glucides membranaires sont exposés sur la face extracellulaire sous forme de glycoprotéines et glycolipides et participent au glycocalyx. Les antigènes ABO correspondent à des motifs glucidiques ; le groupe O conserve l’antigène H mais n’ajoute ni sucre A ni sucre B."
      }
    ]
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel transporteur du glucose est principalement recruté à la membrane du muscle en réponse à l’insuline ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "GLUT4",
        "GLUT-4"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’insuline stimule la translocation de GLUT4 vers la membrane dans le muscle et le tissu adipeux."
  },
  {
    "order": 104,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Sur le thème « Asymétrie des phospholipides », quelle proposition est exacte ?",
    "explanation": "Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes.",
    "choices": [
      {
        "content": "L’exposition externe de phosphatidylsérine est sans lien avec l’apoptose.",
        "correct": false,
        "explanation": "Incorrect. Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes."
      },
      {
        "content": "La phosphatidylcholine est souvent enrichie dans le feuillet exoplasmique.",
        "correct": true,
        "explanation": "Exact. Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes."
      },
      {
        "content": "Les deux feuillets ont obligatoirement une composition parfaitement identique.",
        "correct": false,
        "explanation": "Incorrect. Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes."
      },
      {
        "content": "Les chaînes glucidiques des glycoprotéines sont orientées vers le cytosol.",
        "correct": false,
        "explanation": "Incorrect. Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes."
      },
      {
        "content": "La phosphatidylsérine est normalement exclusivement exposée à la surface externe d’une cellule viable.",
        "correct": false,
        "explanation": "Incorrect. Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes."
      }
    ]
  },
  {
    "order": 105,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans le cadre de « Flippases, floppases et scramblases », identifiez l’affirmation correcte.",
    "explanation": "Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie.",
    "choices": [
      {
        "content": "Les flippases et scramblases sont des protéases qui coupent les phospholipides.",
        "correct": false,
        "explanation": "Incorrect. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      },
      {
        "content": "Les flippases fonctionnent uniquement par diffusion passive sans apport énergétique.",
        "correct": false,
        "explanation": "Incorrect. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      },
      {
        "content": "Les protéines de translocation lipidique n’influencent pas la composition des feuillets.",
        "correct": false,
        "explanation": "Incorrect. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      },
      {
        "content": "Une scramblase maintient nécessairement une asymétrie stricte et stable.",
        "correct": false,
        "explanation": "Incorrect. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      },
      {
        "content": "L’activation d’une scramblase peut contribuer à perdre l’asymétrie membranaire.",
        "correct": true,
        "explanation": "Exact. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      }
    ]
  },
  {
    "order": 106,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles affirmations décrivent correctement « Polarité de l’entérocyte et jonctions serrées » ?",
    "explanation": "L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants.",
    "choices": [
      {
        "content": "Le domaine basolatéral est séparé du milieu intérieur par la lumière intestinale.",
        "correct": false,
        "explanation": "Incorrect. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      },
      {
        "content": "Le domaine apical de l’entérocyte est orienté vers la lumière intestinale.",
        "correct": true,
        "explanation": "Exact. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      },
      {
        "content": "L’occludine est une protéine associée aux jonctions serrées mais n’en constitue pas à elle seule toute l’architecture.",
        "correct": true,
        "explanation": "Exact. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      },
      {
        "content": "La polarité membranaire permet une vectorisation des transports épithéliaux.",
        "correct": true,
        "explanation": "Exact. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      },
      {
        "content": "Le domaine basolatéral communique avec le milieu interstitiel et les capillaires sous-jacents.",
        "correct": true,
        "explanation": "Exact. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      }
    ]
  },
  {
    "order": 107,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles affirmations décrivent correctement « Récepteurs couplés aux protéines G » ?",
    "explanation": "Les RCPG ont sept segments transmembranaires et activent des protéines G hétérotrimériques. L’échange GDP→GTP sur Gα modifie les interactions avec effecteurs ; selon le type de G, adénylate cyclase, phospholipase C ou canaux peuvent être modulés.",
    "choices": [
      {
        "content": "L’activation du récepteur favorise le remplacement du GDP par du GTP sur la sous-unité alpha.",
        "correct": true,
        "explanation": "Exact. Les RCPG ont sept segments transmembranaires et activent des protéines G hétérotrimériques. L’échange GDP→GTP sur Gα modifie les interactions avec effecteurs ; selon le type de G, adénylate cyclase, phospholipase C ou canaux peuvent être modulés."
      },
      {
        "content": "Les RCPG n’ont aucun segment transmembranaire.",
        "correct": false,
        "explanation": "Incorrect. Les RCPG ont sept segments transmembranaires et activent des protéines G hétérotrimériques. L’échange GDP→GTP sur Gα modifie les interactions avec effecteurs ; selon le type de G, adénylate cyclase, phospholipase C ou canaux peuvent être modulés."
      },
      {
        "content": "Selon le type de protéine G, l’adénylate cyclase peut être activée ou inhibée.",
        "correct": true,
        "explanation": "Exact. Les RCPG ont sept segments transmembranaires et activent des protéines G hétérotrimériques. L’échange GDP→GTP sur Gα modifie les interactions avec effecteurs ; selon le type de G, adénylate cyclase, phospholipase C ou canaux peuvent être modulés."
      },
      {
        "content": "L’hydrolyse du GTP empêche toute extinction du signal.",
        "correct": false,
        "explanation": "Incorrect. Les RCPG ont sept segments transmembranaires et activent des protéines G hétérotrimériques. L’échange GDP→GTP sur Gα modifie les interactions avec effecteurs ; selon le type de G, adénylate cyclase, phospholipase C ou canaux peuvent être modulés."
      },
      {
        "content": "Un second messager reste nécessairement confiné à l’extérieur de la cellule.",
        "correct": false,
        "explanation": "Incorrect. Les RCPG ont sept segments transmembranaires et activent des protéines G hétérotrimériques. L’échange GDP→GTP sur Gα modifie les interactions avec effecteurs ; selon le type de G, adénylate cyclase, phospholipase C ou canaux peuvent être modulés."
      }
    ]
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour le thème « Récepteurs à activité tyrosine kinase », quelles propositions doivent être retenues ?",
    "explanation": "Les RTK possèdent un domaine extracellulaire de liaison, un segment transmembranaire et un domaine tyrosine kinase cytosolique. Beaucoup s’activent par dimérisation/réarrangement et trans-autophosphorylation ; le récepteur de l’insuline est un dimère préformé.",
    "choices": [
      {
        "content": "Le récepteur de l’insuline est un RCPG à sept hélices.",
        "correct": false,
        "explanation": "Incorrect. Les RTK possèdent un domaine extracellulaire de liaison, un segment transmembranaire et un domaine tyrosine kinase cytosolique. Beaucoup s’activent par dimérisation/réarrangement et trans-autophosphorylation ; le récepteur de l’insuline est un dimère préformé."
      },
      {
        "content": "De nombreux RTK sont activés par une dimérisation ou un réarrangement favorisé par le ligand.",
        "correct": true,
        "explanation": "Exact. Les RTK possèdent un domaine extracellulaire de liaison, un segment transmembranaire et un domaine tyrosine kinase cytosolique. Beaucoup s’activent par dimérisation/réarrangement et trans-autophosphorylation ; le récepteur de l’insuline est un dimère préformé."
      },
      {
        "content": "Le récepteur de l’insuline possède une activité tyrosine kinase et existe sous forme de complexe dimérique préassemblé.",
        "correct": true,
        "explanation": "Exact. Les RTK possèdent un domaine extracellulaire de liaison, un segment transmembranaire et un domaine tyrosine kinase cytosolique. Beaucoup s’activent par dimérisation/réarrangement et trans-autophosphorylation ; le récepteur de l’insuline est un dimère préformé."
      },
      {
        "content": "Le récepteur de l’EGF est un exemple de récepteur tyrosine kinase.",
        "correct": true,
        "explanation": "Exact. Les RTK possèdent un domaine extracellulaire de liaison, un segment transmembranaire et un domaine tyrosine kinase cytosolique. Beaucoup s’activent par dimérisation/réarrangement et trans-autophosphorylation ; le récepteur de l’insuline est un dimère préformé."
      },
      {
        "content": "L’activité kinase utilise l’ATP comme donneur de phosphate.",
        "correct": true,
        "explanation": "Exact. Les RTK possèdent un domaine extracellulaire de liaison, un segment transmembranaire et un domaine tyrosine kinase cytosolique. Beaucoup s’activent par dimérisation/réarrangement et trans-autophosphorylation ; le récepteur de l’insuline est un dimère préformé."
      }
    ]
  },
  {
    "order": 109,
    "difficulty": "HARD",
    "format": "QRPL",
    "question": "Concernant « Communications autocrine, paracrine et endocrine », sélectionnez exactement les cinq propositions exactes parmi les dix proposées.",
    "explanation": "Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse.",
    "choices": [
      {
        "content": "La portée d’un signal dépend notamment de sa diffusion, de sa dégradation et de son transport.",
        "correct": true,
        "explanation": "Exact. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      },
      {
        "content": "Une communication endocrine implique typiquement une hormone transportée par la circulation vers des cibles éloignées.",
        "correct": true,
        "explanation": "Exact. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      },
      {
        "content": "La communication paracrine agit uniquement sur la cellule qui a produit le signal.",
        "correct": false,
        "explanation": "Incorrect. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      },
      {
        "content": "Une cytokine ne peut jamais avoir d’action locale.",
        "correct": false,
        "explanation": "Incorrect. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      },
      {
        "content": "Une communication autocrine exige toujours un passage du signal par la circulation générale.",
        "correct": false,
        "explanation": "Incorrect. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      },
      {
        "content": "La communication endocrine permet de coordonner des fonctions à l’échelle de l’organisme.",
        "correct": true,
        "explanation": "Exact. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      },
      {
        "content": "La communication endocrine est synonyme de contact cellule-cellule direct.",
        "correct": false,
        "explanation": "Incorrect. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      },
      {
        "content": "Un même signal peut avoir plusieurs cellules cibles si elles expriment le récepteur approprié.",
        "correct": true,
        "explanation": "Exact. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      },
      {
        "content": "La dégradation d’un signal n’influence jamais sa portée.",
        "correct": false,
        "explanation": "Incorrect. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      },
      {
        "content": "Une cytokine peut agir de manière autocrine ou paracrine selon le contexte.",
        "correct": true,
        "explanation": "Exact. Autocrine : la cellule productrice répond à son propre signal ; paracrine : action locale ; endocrine : hormone transportée à distance, souvent par le sang. La distance n’est pas le seul déterminant de vitesse, qui dépend aussi des mécanismes de libération et de réponse."
      }
    ],
    "requiredSelectionCount": 5
  },
  {
    "order": 110,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel type de récepteur est le récepteur de l’insuline ?",
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
    "explanation": "Le récepteur de l’insuline est un RTK préassemblé."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Sur le thème « Perméabilité de la bicouche et diffusion simple », sélectionnez exactement 2 propositions exactes.",
    "explanation": "Les petites molécules hydrophobes et certains gaz diffusent facilement à travers la bicouche. Les ions et la plupart des molécules polaires nécessitent des protéines. La diffusion passive se fait selon le gradient électrochimique sans consommation directe d’ATP.",
    "choices": [
      {
        "content": "Na+ traverse librement et rapidement une bicouche lipidique pure par diffusion simple.",
        "correct": false,
        "explanation": "Incorrect. Les petites molécules hydrophobes et certains gaz diffusent facilement à travers la bicouche. Les ions et la plupart des molécules polaires nécessitent des protéines. La diffusion passive se fait selon le gradient électrochimique sans consommation directe d’ATP."
      },
      {
        "content": "La bicouche pure est également perméable à toutes les molécules.",
        "correct": false,
        "explanation": "Incorrect. Les petites molécules hydrophobes et certains gaz diffusent facilement à travers la bicouche. Les ions et la plupart des molécules polaires nécessitent des protéines. La diffusion passive se fait selon le gradient électrochimique sans consommation directe d’ATP."
      },
      {
        "content": "La perméabilité d’une molécule dépend notamment de sa taille, de sa charge et de sa liposolubilité.",
        "correct": true,
        "explanation": "Exact. Les petites molécules hydrophobes et certains gaz diffusent facilement à travers la bicouche. Les ions et la plupart des molécules polaires nécessitent des protéines. La diffusion passive se fait selon le gradient électrochimique sans consommation directe d’ATP."
      },
      {
        "content": "La diffusion simple ne nécessite pas de liaison à une protéine de transport.",
        "correct": true,
        "explanation": "Exact. Les petites molécules hydrophobes et certains gaz diffusent facilement à travers la bicouche. Les ions et la plupart des molécules polaires nécessitent des protéines. La diffusion passive se fait selon le gradient électrochimique sans consommation directe d’ATP."
      },
      {
        "content": "La diffusion simple exige toujours une ATPase membranaire.",
        "correct": false,
        "explanation": "Incorrect. Les petites molécules hydrophobes et certains gaz diffusent facilement à travers la bicouche. Les ions et la plupart des molécules polaires nécessitent des protéines. La diffusion passive se fait selon le gradient électrochimique sans consommation directe d’ATP."
      }
    ],
    "requiredSelectionCount": 2
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant « Transport actif primaire », quelles affirmations sont correctes ?",
    "explanation": "Le transport actif primaire couple directement une source d’énergie, souvent l’hydrolyse de l’ATP, au transport contre un gradient. Na+/K+-ATPase et de nombreux transporteurs ABC illustrent ce principe.",
    "choices": [
      {
        "content": "Un transport actif primaire peut déplacer un soluté contre son gradient électrochimique.",
        "correct": true,
        "explanation": "Exact. Le transport actif primaire couple directement une source d’énergie, souvent l’hydrolyse de l’ATP, au transport contre un gradient. Na+/K+-ATPase et de nombreux transporteurs ABC illustrent ce principe."
      },
      {
        "content": "La Na+/K+-ATPase est une ATP synthase qui fabrique l’ATP grâce au gradient de sodium.",
        "correct": false,
        "explanation": "Incorrect. Le transport actif primaire couple directement une source d’énergie, souvent l’hydrolyse de l’ATP, au transport contre un gradient. Na+/K+-ATPase et de nombreux transporteurs ABC illustrent ce principe."
      },
      {
        "content": "Les transporteurs ABC possèdent des domaines liant et hydrolysant l’ATP.",
        "correct": true,
        "explanation": "Exact. Le transport actif primaire couple directement une source d’énergie, souvent l’hydrolyse de l’ATP, au transport contre un gradient. Na+/K+-ATPase et de nombreux transporteurs ABC illustrent ce principe."
      },
      {
        "content": "De nombreux transporteurs ABC humains fonctionnent comme exporteurs de lipides ou de xénobiotiques.",
        "correct": true,
        "explanation": "Exact. Le transport actif primaire couple directement une source d’énergie, souvent l’hydrolyse de l’ATP, au transport contre un gradient. Na+/K+-ATPase et de nombreux transporteurs ABC illustrent ce principe."
      },
      {
        "content": "La Na+/K+-ATPase est située uniquement dans le noyau.",
        "correct": false,
        "explanation": "Incorrect. Le transport actif primaire couple directement une source d’énergie, souvent l’hydrolyse de l’ATP, au transport contre un gradient. Na+/K+-ATPase et de nombreux transporteurs ABC illustrent ce principe."
      }
    ]
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant « Transport actif secondaire, symport et antiport », choisissez exactement 2 affirmations correctes.",
    "explanation": "Le transport actif secondaire exploite l’énergie stockée dans le gradient électrochimique d’un soluté pour déplacer un autre soluté contre son gradient. Symport : même sens ; antiport : sens opposés.",
    "choices": [
      {
        "content": "Dans un antiport, les solutés couplés se déplacent en sens opposés.",
        "correct": true,
        "explanation": "Exact. Le transport actif secondaire exploite l’énergie stockée dans le gradient électrochimique d’un soluté pour déplacer un autre soluté contre son gradient. Symport : même sens ; antiport : sens opposés."
      },
      {
        "content": "Un antiport impose que les deux solutés se déplacent dans le même sens.",
        "correct": false,
        "explanation": "Incorrect. Le transport actif secondaire exploite l’énergie stockée dans le gradient électrochimique d’un soluté pour déplacer un autre soluté contre son gradient. Symport : même sens ; antiport : sens opposés."
      },
      {
        "content": "Un symport impose que les deux solutés se déplacent en sens opposés.",
        "correct": false,
        "explanation": "Incorrect. Le transport actif secondaire exploite l’énergie stockée dans le gradient électrochimique d’un soluté pour déplacer un autre soluté contre son gradient. Symport : même sens ; antiport : sens opposés."
      },
      {
        "content": "Le gradient utilisé par un transport secondaire est souvent maintenu par un transport actif primaire.",
        "correct": true,
        "explanation": "Exact. Le transport actif secondaire exploite l’énergie stockée dans le gradient électrochimique d’un soluté pour déplacer un autre soluté contre son gradient. Symport : même sens ; antiport : sens opposés."
      },
      {
        "content": "Symport et antiport sont des termes réservés aux récepteurs hormonaux.",
        "correct": false,
        "explanation": "Incorrect. Le transport actif secondaire exploite l’énergie stockée dans le gradient électrochimique d’un soluté pour déplacer un autre soluté contre son gradient. Symport : même sens ; antiport : sens opposés."
      }
    ],
    "requiredSelectionCount": 2
  },
  {
    "order": 114,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour le thème « Absorption intestinale du glucose : SGLT1 », quelles propositions doivent être retenues ?",
    "explanation": "À la membrane apicale de l’entérocyte, SGLT1 cotransporte 1 glucose avec 2 Na+ chez l’humain. Le Na+ suit son gradient électrochimique et fournit l’énergie permettant l’accumulation de glucose.",
    "choices": [
      {
        "content": "Le gradient de Na+ nécessaire à SGLT1 dépend indirectement de la Na+/K+-ATPase basolatérale.",
        "correct": true,
        "explanation": "Exact. À la membrane apicale de l’entérocyte, SGLT1 cotransporte 1 glucose avec 2 Na+ chez l’humain. Le Na+ suit son gradient électrochimique et fournit l’énergie permettant l’accumulation de glucose."
      },
      {
        "content": "SGLT1 peut permettre l’entrée de glucose contre son gradient de concentration.",
        "correct": true,
        "explanation": "Exact. À la membrane apicale de l’entérocyte, SGLT1 cotransporte 1 glucose avec 2 Na+ chez l’humain. Le Na+ suit son gradient électrochimique et fournit l’énergie permettant l’accumulation de glucose."
      },
      {
        "content": "L’énergie du cotransport provient du gradient électrochimique de Na+.",
        "correct": true,
        "explanation": "Exact. À la membrane apicale de l’entérocyte, SGLT1 cotransporte 1 glucose avec 2 Na+ chez l’humain. Le Na+ suit son gradient électrochimique et fournit l’énergie permettant l’accumulation de glucose."
      },
      {
        "content": "SGLT1 est un transporteur GLUT assurant uniquement une diffusion facilitée.",
        "correct": false,
        "explanation": "Incorrect. À la membrane apicale de l’entérocyte, SGLT1 cotransporte 1 glucose avec 2 Na+ chez l’humain. Le Na+ suit son gradient électrochimique et fournit l’énergie permettant l’accumulation de glucose."
      },
      {
        "content": "Le transport apical intestinal du glucose se fait exclusivement par GLUT1.",
        "correct": false,
        "explanation": "Incorrect. À la membrane apicale de l’entérocyte, SGLT1 cotransporte 1 glucose avec 2 Na+ chez l’humain. Le Na+ suit son gradient électrochimique et fournit l’énergie permettant l’accumulation de glucose."
      }
    ]
  },
  {
    "order": 115,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans ce contexte, pour le thème « Sortie basolatérale du glucose intestinal », quelles propositions doivent être retenues ?",
    "explanation": "Après son entrée apicale, le glucose quitte classiquement l’entérocyte par diffusion facilitée via GLUT2 sur la membrane basolatérale. La Na+/K+-ATPase basolatérale entretient le gradient de Na+ indispensable à l’absorption couplée.",
    "choices": [
      {
        "content": "La Na+/K+-ATPase est localisée sur la membrane basolatérale de l’entérocyte.",
        "correct": true,
        "explanation": "Exact. Après son entrée apicale, le glucose quitte classiquement l’entérocyte par diffusion facilitée via GLUT2 sur la membrane basolatérale. La Na+/K+-ATPase basolatérale entretient le gradient de Na+ indispensable à l’absorption couplée."
      },
      {
        "content": "GLUT1 est le transporteur basolatéral intestinal canonique responsable de l’essentiel de la sortie postprandiale du glucose.",
        "correct": false,
        "explanation": "Incorrect. Après son entrée apicale, le glucose quitte classiquement l’entérocyte par diffusion facilitée via GLUT2 sur la membrane basolatérale. La Na+/K+-ATPase basolatérale entretient le gradient de Na+ indispensable à l’absorption couplée."
      },
      {
        "content": "La Na+/K+-ATPase n’a aucun lien avec le gradient utilisé pour l’absorption de glucose.",
        "correct": false,
        "explanation": "Incorrect. Après son entrée apicale, le glucose quitte classiquement l’entérocyte par diffusion facilitée via GLUT2 sur la membrane basolatérale. La Na+/K+-ATPase basolatérale entretient le gradient de Na+ indispensable à l’absorption couplée."
      },
      {
        "content": "GLUT2 ne couple pas directement son transport au Na+.",
        "correct": true,
        "explanation": "Exact. Après son entrée apicale, le glucose quitte classiquement l’entérocyte par diffusion facilitée via GLUT2 sur la membrane basolatérale. La Na+/K+-ATPase basolatérale entretient le gradient de Na+ indispensable à l’absorption couplée."
      },
      {
        "content": "SGLT1 et GLUT2 sont normalement répartis au hasard de façon identique sur toute la membrane de l’entérocyte.",
        "correct": false,
        "explanation": "Incorrect. Après son entrée apicale, le glucose quitte classiquement l’entérocyte par diffusion facilitée via GLUT2 sur la membrane basolatérale. La Na+/K+-ATPase basolatérale entretient le gradient de Na+ indispensable à l’absorption couplée."
      }
    ]
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Pour « Insuline et GLUT4 dans le muscle », quelle proposition doit être retenue ?",
    "explanation": "Dans le muscle squelettique et le tissu adipeux, l’insuline augmente l’exposition membranaire de GLUT4 par translocation de vésicules de stockage. GLUT1 contribue davantage au transport basal et ne remplace pas GLUT4 comme principal transporteur insulinoréactif.",
    "choices": [
      {
        "content": "Le transport du glucose via GLUT4 consomme directement un ATP pour chaque molécule de glucose.",
        "correct": false,
        "explanation": "Incorrect. Dans le muscle squelettique et le tissu adipeux, l’insuline augmente l’exposition membranaire de GLUT4 par translocation de vésicules de stockage. GLUT1 contribue davantage au transport basal et ne remplace pas GLUT4 comme principal transporteur insulinoréactif."
      },
      {
        "content": "Le récepteur de l’insuline est un canal à eau.",
        "correct": false,
        "explanation": "Incorrect. Dans le muscle squelettique et le tissu adipeux, l’insuline augmente l’exposition membranaire de GLUT4 par translocation de vésicules de stockage. GLUT1 contribue davantage au transport basal et ne remplace pas GLUT4 comme principal transporteur insulinoréactif."
      },
      {
        "content": "L’insuline favorise la translocation de vésicules contenant GLUT4 vers la membrane plasmique.",
        "correct": true,
        "explanation": "Exact. Dans le muscle squelettique et le tissu adipeux, l’insuline augmente l’exposition membranaire de GLUT4 par translocation de vésicules de stockage. GLUT1 contribue davantage au transport basal et ne remplace pas GLUT4 comme principal transporteur insulinoréactif."
      },
      {
        "content": "GLUT4 couple directement le glucose à deux ions sodium.",
        "correct": false,
        "explanation": "Incorrect. Dans le muscle squelettique et le tissu adipeux, l’insuline augmente l’exposition membranaire de GLUT4 par translocation de vésicules de stockage. GLUT1 contribue davantage au transport basal et ne remplace pas GLUT4 comme principal transporteur insulinoréactif."
      },
      {
        "content": "L’insuline transforme GLUT4 en pompe ATPase qui transporte le glucose contre son gradient.",
        "correct": false,
        "explanation": "Incorrect. Dans le muscle squelettique et le tissu adipeux, l’insuline augmente l’exposition membranaire de GLUT4 par translocation de vésicules de stockage. GLUT1 contribue davantage au transport basal et ne remplace pas GLUT4 comme principal transporteur insulinoréactif."
      }
    ]
  },
  {
    "order": 117,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant « Intégration des transports membranaires » ?",
    "explanation": "La direction d’un flux dépend du gradient et du mécanisme. Canaux et GLUT réalisent des transports passifs ; pompes ATPases réalisent des transports actifs primaires ; SGLT1 est secondaire. Une cellule combine ces systèmes pour créer des flux vectoriels.",
    "choices": [
      {
        "content": "Les gradients ioniques sont inutiles à la physiologie cellulaire.",
        "correct": false,
        "explanation": "Incorrect. La direction d’un flux dépend du gradient et du mécanisme. Canaux et GLUT réalisent des transports passifs ; pompes ATPases réalisent des transports actifs primaires ; SGLT1 est secondaire. Une cellule combine ces systèmes pour créer des flux vectoriels."
      },
      {
        "content": "La diffusion facilitée et le transport actif peuvent coexister dans une même cellule.",
        "correct": true,
        "explanation": "Exact. La direction d’un flux dépend du gradient et du mécanisme. Canaux et GLUT réalisent des transports passifs ; pompes ATPases réalisent des transports actifs primaires ; SGLT1 est secondaire. Une cellule combine ces systèmes pour créer des flux vectoriels."
      },
      {
        "content": "La direction d’un transport passif peut s’inverser si le gradient électrochimique s’inverse.",
        "correct": true,
        "explanation": "Exact. La direction d’un flux dépend du gradient et du mécanisme. Canaux et GLUT réalisent des transports passifs ; pompes ATPases réalisent des transports actifs primaires ; SGLT1 est secondaire. Une cellule combine ces systèmes pour créer des flux vectoriels."
      },
      {
        "content": "Une pompe peut créer un gradient ensuite exploité par un cotransporteur secondaire.",
        "correct": true,
        "explanation": "Exact. La direction d’un flux dépend du gradient et du mécanisme. Canaux et GLUT réalisent des transports passifs ; pompes ATPases réalisent des transports actifs primaires ; SGLT1 est secondaire. Une cellule combine ces systèmes pour créer des flux vectoriels."
      },
      {
        "content": "La bicouche lipidique laisse passer tous les solutés avec la même vitesse.",
        "correct": false,
        "explanation": "Incorrect. La direction d’un flux dépend du gradient et du mécanisme. Canaux et GLUT réalisent des transports passifs ; pompes ATPases réalisent des transports actifs primaires ; SGLT1 est secondaire. Une cellule combine ces systèmes pour créer des flux vectoriels."
      }
    ]
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel transporteur ABC est aussi appelé P-glycoprotéine et peut contribuer à une résistance multidrogue ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "ABCB1",
        "P-glycoprotéine",
        "P-glycoproteine",
        "MDR1"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "ABCB1/P-glycoprotéine peut expulser certains xénobiotiques et médicaments."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel terme décrit un transport contre gradient alimenté indirectement par le gradient d’un autre soluté ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "transport actif secondaire",
        "transport secondaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le transport actif secondaire exploite l’énergie d’un gradient préexistant."
  },
  {
    "order": 120,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel terme décrit le déplacement passif spontané d’une petite molécule directement à travers la bicouche ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "diffusion simple",
        "diffusion libre"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La diffusion simple ne requiert ni canal ni transporteur."
  },
  {
    "order": 121,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "question": "Pour le thème « Protéines membranaires et topologie », retenez les cinq affirmations correctes parmi les dix proposées.",
    "explanation": "Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle.",
    "choices": [
      {
        "content": "Une protéine à ancre GPI est exposée sur la face cytosolique de la membrane plasmique.",
        "correct": false,
        "explanation": "Incorrect. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Une protéine transmembranaire peut traverser la bicouche une ou plusieurs fois.",
        "correct": true,
        "explanation": "Exact. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Une protéine périphérique traverse nécessairement plusieurs fois la bicouche.",
        "correct": false,
        "explanation": "Incorrect. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Les protéines membranaires n’ont aucun rôle dans le transport de solutés.",
        "correct": false,
        "explanation": "Incorrect. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "La topologie d’une protéine membranaire est établie lors de sa biogenèse et conditionne l’accessibilité de ses domaines.",
        "correct": true,
        "explanation": "Exact. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Les segments transmembranaires alpha-hélicoïdaux sont formés exclusivement d’acides aminés chargés.",
        "correct": false,
        "explanation": "Incorrect. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Une ancre GPI place la protéine sur la face non cytosolique de la membrane plasmique.",
        "correct": true,
        "explanation": "Exact. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Certaines protéines membranaires sont attachées à la membrane par un groupement lipidique.",
        "correct": true,
        "explanation": "Exact. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Les segments transmembranaires alpha-hélicoïdaux sont souvent enrichis en résidus hydrophobes.",
        "correct": true,
        "explanation": "Exact. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      },
      {
        "content": "Une protéine membranaire doit forcément traverser la bicouche.",
        "correct": false,
        "explanation": "Incorrect. Les protéines membranaires peuvent être transmembranaires, périphériques ou liées à un lipide. Les protéines alpha-hélicoïdales transmembranaires ont des segments hydrophobes, mais l’orientation N/C n’obéit pas à une règle universelle."
      }
    ],
    "requiredSelectionCount": 5
  },
  {
    "order": 122,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle face de l’entérocyte porte la Na+/K+-ATPase indispensable au gradient de sodium : apicale ou basolatérale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "basolatérale",
        "basolaterale",
        "face basolatérale",
        "domaine basolatéral"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La Na+/K+-ATPase basolatérale entretient le gradient utilisé par SGLT1."
  }
];
