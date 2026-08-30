import type { SeedQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch2 — Fluidité, asymétrie et polarité membranaires — V2 active */
export const SECTION_B_QUESTIONS: SeedQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de « Fluidité membranaire », sélectionnez les affirmations fausses.",
    "explanation": "La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent.",
    "choices": [
      {
        "content": "Des chaînes plus longues et plus saturées augmentent toujours la fluidité.",
        "correct": true,
        "explanation": "Incorrect. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      },
      {
        "content": "Les doubles liaisons cis introduisent des coudes qui limitent l’empaquetage des chaînes lipidiques.",
        "correct": false,
        "explanation": "Exact. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      },
      {
        "content": "Le flip-flop spontané d’un phospholipide est généralement aussi rapide que sa diffusion latérale.",
        "correct": true,
        "explanation": "Incorrect. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      },
      {
        "content": "Des chaînes d’acides gras plus courtes tendent à augmenter la fluidité de la bicouche.",
        "correct": false,
        "explanation": "Exact. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      },
      {
        "content": "Une proportion plus élevée d’acides gras insaturés tend à augmenter la fluidité à température donnée.",
        "correct": false,
        "explanation": "Exact. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      }
    ]
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant « Asymétrie des phospholipides », quelles affirmations sont correctes ?",
    "explanation": "Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes.",
    "choices": [
      {
        "content": "Les deux feuillets ont obligatoirement une composition parfaitement identique.",
        "correct": false,
        "explanation": "Incorrect. Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes."
      },
      {
        "content": "La phosphatidyléthanolamine est majoritairement enrichie dans le feuillet cytosolique.",
        "correct": true,
        "explanation": "Exact. Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes."
      },
      {
        "content": "Les deux feuillets de la membrane plasmique ont des compositions lipidiques différentes.",
        "correct": true,
        "explanation": "Exact. Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes."
      },
      {
        "content": "La phosphatidylsérine est normalement exclusivement exposée à la surface externe d’une cellule viable.",
        "correct": false,
        "explanation": "Incorrect. Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes."
      },
      {
        "content": "La phosphatidylsérine est normalement enrichie dans le feuillet cytosolique.",
        "correct": true,
        "explanation": "Exact. Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes."
      }
    ]
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel phospholipide est normalement enrichi sur le feuillet cytosolique et peut être exposé lors de l’apoptose ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "phosphatidylsérine",
        "phosphatidylserine",
        "PS"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La phosphatidylsérine externe constitue notamment un signal de reconnaissance des cellules apoptotiques."
  },
  {
    "order": 26,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour le thème « Flippases, floppases et scramblases », quelles propositions doivent être retenues ?",
    "explanation": "Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie.",
    "choices": [
      {
        "content": "Les flippases fonctionnent uniquement par diffusion passive sans apport énergétique.",
        "correct": false,
        "explanation": "Incorrect. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      },
      {
        "content": "Les flippases transfèrent notamment certains aminophospholipides vers le feuillet cytosolique.",
        "correct": true,
        "explanation": "Exact. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      },
      {
        "content": "Une scramblase maintient nécessairement une asymétrie stricte et stable.",
        "correct": false,
        "explanation": "Incorrect. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      },
      {
        "content": "Des flippases de type P4-ATPase utilisent l’ATP pour maintenir l’asymétrie de certains phospholipides.",
        "correct": true,
        "explanation": "Exact. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      },
      {
        "content": "Les flippases et scramblases sont des protéases qui coupent les phospholipides.",
        "correct": false,
        "explanation": "Incorrect. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      }
    ]
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle protéine catalyse une redistribution bidirectionnelle rapide des phospholipides entre les deux feuillets ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "scramblase",
        "une scramblase"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les scramblases réduisent l’asymétrie en mélangeant les phospholipides entre feuillets."
  },
  {
    "order": 28,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant « Polarité de l’entérocyte et jonctions serrées » ?",
    "explanation": "L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants.",
    "choices": [
      {
        "content": "Les claudines constituent des composants structuraux majeurs des jonctions serrées.",
        "correct": true,
        "explanation": "Exact. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      },
      {
        "content": "Les jonctions serrées contribuent à maintenir des compositions différentes entre domaines apical et basolatéral.",
        "correct": true,
        "explanation": "Exact. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      },
      {
        "content": "Les domaines apical et basolatéral d’un entérocyte ont nécessairement les mêmes transporteurs.",
        "correct": false,
        "explanation": "Incorrect. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      },
      {
        "content": "Le domaine apical de l’entérocyte est orienté vers le sang.",
        "correct": false,
        "explanation": "Incorrect. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      },
      {
        "content": "L’entérocyte est une cellule épithéliale polarisée avec un domaine apical et un domaine basolatéral.",
        "correct": true,
        "explanation": "Exact. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      }
    ]
  },
  {
    "order": 29,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Concernant « Microdomaines, diffusion latérale et contraintes », choisissez exactement 3 affirmations correctes.",
    "explanation": "La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants.",
    "choices": [
      {
        "content": "Le cytosquelette cortical peut limiter la diffusion de certaines protéines membranaires.",
        "correct": true,
        "explanation": "Exact. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      },
      {
        "content": "Toutes les protéines membranaires diffusent librement à la même vitesse sans aucune contrainte.",
        "correct": false,
        "explanation": "Incorrect. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      },
      {
        "content": "Certaines protéines membranaires diffusent latéralement dans le plan de la membrane.",
        "correct": true,
        "explanation": "Exact. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      },
      {
        "content": "Le cytosquelette ne peut jamais influencer la mobilité membranaire.",
        "correct": false,
        "explanation": "Incorrect. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      },
      {
        "content": "Les complexes d’adhérence peuvent immobiliser ou confiner localement des protéines.",
        "correct": true,
        "explanation": "Exact. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      }
    ],
    "requiredSelectionCount": 3
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi ces affirmations concernant « Fluidité membranaire », retenez exactement les 2 justes.",
    "explanation": "La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent.",
    "choices": [
      {
        "content": "La fluidité membranaire est indépendante de la composition lipidique.",
        "correct": false,
        "explanation": "Incorrect. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      },
      {
        "content": "Dans ce contexte, les doubles liaisons cis introduisent des coudes qui limitent l’empaquetage des chaînes lipidiques.",
        "correct": true,
        "explanation": "Exact. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      },
      {
        "content": "Dans ce contexte, une proportion plus élevée d’acides gras insaturés tend à augmenter la fluidité à température donnée.",
        "correct": true,
        "explanation": "Exact. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      },
      {
        "content": "Le cholestérol augmente toujours la fluidité, quelle que soit la température.",
        "correct": false,
        "explanation": "Incorrect. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      },
      {
        "content": "Une double liaison cis favorise un empaquetage plus compact des chaînes qu’une chaîne saturée de même longueur.",
        "correct": false,
        "explanation": "Incorrect. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      }
    ],
    "requiredSelectionCount": 2
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles affirmations décrivent correctement « Asymétrie des phospholipides » ?",
    "explanation": "Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes.",
    "choices": [
      {
        "content": "La phosphatidylcholine est souvent enrichie dans le feuillet exoplasmique.",
        "correct": true,
        "explanation": "Exact. Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes."
      },
      {
        "content": "Dans ce contexte, la phosphatidylsérine est normalement enrichie dans le feuillet cytosolique.",
        "correct": true,
        "explanation": "Exact. Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes."
      },
      {
        "content": "Les chaînes glucidiques des glycoprotéines sont orientées vers le cytosol.",
        "correct": false,
        "explanation": "Incorrect. Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes."
      },
      {
        "content": "Dans ce contexte, la phosphatidyléthanolamine est majoritairement enrichie dans le feuillet cytosolique.",
        "correct": true,
        "explanation": "Exact. Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes."
      },
      {
        "content": "La sphingomyéline est principalement enrichie dans le feuillet exoplasmique.",
        "correct": true,
        "explanation": "Exact. Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes."
      }
    ]
  },
  {
    "order": 32,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions ci-dessous relatives à « Flippases, floppases et scramblases », laquelle est correcte ?",
    "explanation": "Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie.",
    "choices": [
      {
        "content": "Dans ce contexte, les flippases transfèrent notamment certains aminophospholipides vers le feuillet cytosolique.",
        "correct": true,
        "explanation": "Exact. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      },
      {
        "content": "Les floppases déplacent exclusivement des protéines membranaires et jamais des lipides.",
        "correct": false,
        "explanation": "Incorrect. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      },
      {
        "content": "Le mouvement trans-bicouche de tous les phospholipides est instantané même sans protéine.",
        "correct": false,
        "explanation": "Incorrect. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      },
      {
        "content": "Les scramblases ne peuvent jamais être activées au cours de l’apoptose.",
        "correct": false,
        "explanation": "Incorrect. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      },
      {
        "content": "Dans ce contexte, les flippases fonctionnent uniquement par diffusion passive sans apport énergétique.",
        "correct": false,
        "explanation": "Incorrect. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      }
    ]
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sélectionnez les affirmations compatibles avec « Polarité de l’entérocyte et jonctions serrées ».",
    "explanation": "L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants.",
    "choices": [
      {
        "content": "L’occludine est une protéine associée aux jonctions serrées mais n’en constitue pas à elle seule toute l’architecture.",
        "correct": true,
        "explanation": "Exact. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      },
      {
        "content": "Les jonctions serrées contribuent à maintenir des compositions différentes entre domaines apical et basolatéral.",
        "correct": true,
        "explanation": "Exact. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      },
      {
        "content": "Les claudines constituent des composants structuraux majeurs des jonctions serrées.",
        "correct": true,
        "explanation": "Exact. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      },
      {
        "content": "Les jonctions serrées rendent toute diffusion paracellulaire absolument impossible dans tous les épithéliums.",
        "correct": false,
        "explanation": "Incorrect. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      },
      {
        "content": "Le domaine apical de l’entérocyte est orienté vers la lumière intestinale.",
        "correct": true,
        "explanation": "Exact. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      }
    ]
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "question": "Pour le thème « Microdomaines, diffusion latérale et contraintes », retenez les cinq affirmations correctes parmi les dix proposées.",
    "explanation": "La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants.",
    "choices": [
      {
        "content": "Des domaines membranaires peuvent avoir une composition particulière en lipides et protéines.",
        "correct": true,
        "explanation": "Exact. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      },
      {
        "content": "Les complexes d’adhérence peuvent immobiliser ou confiner localement des protéines.",
        "correct": true,
        "explanation": "Exact. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      },
      {
        "content": "La fluidité membranaire est compatible avec l’existence d’organisations locales stables ou transitoires.",
        "correct": true,
        "explanation": "Exact. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      },
      {
        "content": "La polarité cellulaire exige l’absence de diffusion latérale de tous les lipides.",
        "correct": false,
        "explanation": "Incorrect. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      },
      {
        "content": "Le cytosquelette cortical peut limiter la diffusion de certaines protéines membranaires.",
        "correct": true,
        "explanation": "Exact. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      },
      {
        "content": "Les molécules d’adhérence sont toujours totalement libres de diffuser sur toute la cellule.",
        "correct": false,
        "explanation": "Incorrect. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      },
      {
        "content": "Le modèle de mosaïque fluide signifie que la membrane est un liquide homogène sans structure locale.",
        "correct": false,
        "explanation": "Incorrect. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      },
      {
        "content": "Les interactions protéine-protéine ne modifient jamais la distribution membranaire.",
        "correct": false,
        "explanation": "Incorrect. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      },
      {
        "content": "Les jonctions peuvent contribuer à maintenir une distribution polarisée de certaines protéines.",
        "correct": true,
        "explanation": "Exact. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      },
      {
        "content": "Une membrane fluide ne peut contenir aucun domaine organisé.",
        "correct": false,
        "explanation": "Incorrect. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      }
    ],
    "requiredSelectionCount": 5
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Sur le thème « Fluidité membranaire », quelle proposition est exacte ?",
    "explanation": "La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent.",
    "choices": [
      {
        "content": "Le cholestérol augmente toujours la fluidité, quelle que soit la température.",
        "correct": false,
        "explanation": "Incorrect. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      },
      {
        "content": "Des chaînes plus longues et plus saturées augmentent toujours la fluidité.",
        "correct": false,
        "explanation": "Incorrect. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      },
      {
        "content": "Une proportion plus élevée d’acides gras insaturés tend à augmenter la fluidité à température donnée.",
        "correct": true,
        "explanation": "Exact. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      },
      {
        "content": "Les lipides membranaires sont immobiles dans leur feuillet.",
        "correct": false,
        "explanation": "Incorrect. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      },
      {
        "content": "La température ne modifie jamais l’état physique d’une bicouche.",
        "correct": false,
        "explanation": "Incorrect. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      }
    ]
  },
  {
    "order": 36,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant « Asymétrie des phospholipides », choisissez exactement 2 affirmations correctes.",
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
        "content": "La phosphatidylcholine est confinée exclusivement au feuillet cytosolique.",
        "correct": false,
        "explanation": "Incorrect. Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes."
      },
      {
        "content": "La sphingomyéline est absente du feuillet externe.",
        "correct": false,
        "explanation": "Incorrect. Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes."
      },
      {
        "content": "La phosphatidyléthanolamine est majoritairement enrichie dans le feuillet cytosolique.",
        "correct": true,
        "explanation": "Exact. Les feuillets ont des compositions différentes. La phosphatidylsérine (PS) est normalement enrichie côté cytosolique ; son exposition externe peut signaler l’apoptose. PC et sphingomyéline sont plutôt externes, PE et PS plutôt internes."
      }
    ],
    "requiredSelectionCount": 2
  },
  {
    "order": 37,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle famille de protéines ATP-dépendantes transfère notamment des aminophospholipides vers le feuillet cytosolique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "flippases",
        "flippase",
        "P4-ATPases",
        "P4 ATPases"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les flippases P4-ATPases contribuent au maintien de l’asymétrie."
  },
  {
    "order": 38,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans ce contexte, pour le thème « Flippases, floppases et scramblases », quelles propositions doivent être retenues ?",
    "explanation": "Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie.",
    "choices": [
      {
        "content": "Les scramblases favorisent une redistribution bidirectionnelle des phospholipides entre feuillets.",
        "correct": true,
        "explanation": "Exact. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      },
      {
        "content": "L’activation d’une scramblase peut contribuer à perdre l’asymétrie membranaire.",
        "correct": true,
        "explanation": "Exact. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      },
      {
        "content": "Certaines floppases favorisent le transfert de lipides du feuillet cytosolique vers le feuillet exoplasmique.",
        "correct": true,
        "explanation": "Exact. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      },
      {
        "content": "Les scramblases ne peuvent jamais être activées au cours de l’apoptose.",
        "correct": false,
        "explanation": "Incorrect. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      },
      {
        "content": "Les floppases déplacent exclusivement des protéines membranaires et jamais des lipides.",
        "correct": false,
        "explanation": "Incorrect. Les P4-ATPases/flippases transfèrent sélectivement certains phospholipides vers le feuillet cytosolique en utilisant de l’énergie ; des floppases favorisent le mouvement inverse ; les scramblases redistribuent rapidement et bidirectionnellement les lipides sans conserver l’asymétrie."
      }
    ]
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment nomme-t-on la diffusion d’un constituant membranaire dans le plan d’un même feuillet ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "diffusion latérale",
        "diffusion laterale"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La diffusion latérale est beaucoup plus rapide que le flip-flop spontané."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel domaine de l’entérocyte est orienté vers la lumière intestinale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "domaine apical",
        "pôle apical",
        "pole apical",
        "face apicale"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le pôle apical porte notamment les microvillosités et SGLT1."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Polarité de l’entérocyte et jonctions serrées », lesquelles sont exactes ?",
    "explanation": "L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants.",
    "choices": [
      {
        "content": "Dans ce contexte, les claudines constituent des composants structuraux majeurs des jonctions serrées.",
        "correct": true,
        "explanation": "Exact. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      },
      {
        "content": "Dans ce contexte, l’occludine est une protéine associée aux jonctions serrées mais n’en constitue pas à elle seule toute l’architecture.",
        "correct": true,
        "explanation": "Exact. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      },
      {
        "content": "Le domaine basolatéral communique avec le milieu interstitiel et les capillaires sous-jacents.",
        "correct": true,
        "explanation": "Exact. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      },
      {
        "content": "Dans ce contexte, le domaine apical de l’entérocyte est orienté vers la lumière intestinale.",
        "correct": true,
        "explanation": "Exact. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      },
      {
        "content": "La polarité épithéliale n’a aucune conséquence sur le transport transcellulaire.",
        "correct": false,
        "explanation": "Incorrect. L’entérocyte possède des domaines apical et basolatéral ayant des protéines distinctes. Les jonctions serrées réduisent le passage paracellulaire et jouent aussi un rôle de barrière/fence limitant la diffusion latérale de certains composants."
      }
    ]
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelles jonctions contribuent à séparer les domaines apical et basolatéral d’un épithélium ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "jonctions serrées",
        "tight junctions",
        "jonction serrée"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les jonctions serrées ont une fonction barrière et de clôture latérale."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Dans le cadre de « Microdomaines, diffusion latérale et contraintes », identifiez l’affirmation correcte.",
    "explanation": "La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants.",
    "choices": [
      {
        "content": "Dans ce contexte, les interactions protéine-protéine ne modifient jamais la distribution membranaire.",
        "correct": false,
        "explanation": "Incorrect. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      },
      {
        "content": "Dans ce contexte, le modèle de mosaïque fluide signifie que la membrane est un liquide homogène sans structure locale.",
        "correct": false,
        "explanation": "Incorrect. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      },
      {
        "content": "Dans ce contexte, les complexes d’adhérence peuvent immobiliser ou confiner localement des protéines.",
        "correct": true,
        "explanation": "Exact. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      },
      {
        "content": "Dans ce contexte, la polarité cellulaire exige l’absence de diffusion latérale de tous les lipides.",
        "correct": false,
        "explanation": "Incorrect. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      },
      {
        "content": "Toutes les protéines membranaires diffusent librement à la même vitesse sans aucune contrainte.",
        "correct": false,
        "explanation": "Incorrect. La membrane est fluide mais la diffusion des protéines peut être limitée par le cytosquelette, les complexes d’adhérence, les jonctions et des microdomaines. Le modèle de mosaïque fluide n’implique donc pas une mobilité totalement libre de tous les constituants."
      }
    ]
  },
  {
    "order": 44,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions ci-dessous relatives à « Fluidité membranaire », laquelle est correcte ?",
    "explanation": "La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent.",
    "choices": [
      {
        "content": "Dans ce contexte, la température ne modifie jamais l’état physique d’une bicouche.",
        "correct": false,
        "explanation": "Incorrect. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      },
      {
        "content": "La diffusion latérale des lipides dans un même feuillet est rapide par rapport au flip-flop spontané.",
        "correct": true,
        "explanation": "Exact. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      },
      {
        "content": "Dans ce contexte, des chaînes plus longues et plus saturées augmentent toujours la fluidité.",
        "correct": false,
        "explanation": "Incorrect. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      },
      {
        "content": "Le flip-flop spontané d’un phospholipide est généralement aussi rapide que sa diffusion latérale.",
        "correct": false,
        "explanation": "Incorrect. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      },
      {
        "content": "La fluidité membranaire est indépendante de la composition lipidique.",
        "correct": false,
        "explanation": "Incorrect. La fluidité dépend de la longueur et de l’insaturation des chaînes, de la température et du cholestérol. Les doubles liaisons cis gênent l’empaquetage. La diffusion latérale est fréquente, tandis que le flip-flop spontané est très lent."
      }
    ]
  }
];
