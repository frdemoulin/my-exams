import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Rôles biologiques des protéines, partie 2 — Synthèse — Rôles biologiques des protéines, partie 2 */
export const UE14_BIOCH_CH13_SYNTHESIS_V2: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos des myosines comme moteurs moléculaires, quelle proposition doit être retenue ?",
    "choices": [
      {
        "content": "La myosine II participe à la contraction musculaire et à d'autres processus contractiles.",
        "correct": true,
        "explanation": "La myosine II forme des assemblages bipolaires capables de générer des forces."
      },
      {
        "content": "La myosine II est dépourvue de domaine moteur.",
        "correct": false,
        "explanation": "Les têtes de myosine II portent les domaines moteurs."
      },
      {
        "content": "Les myosines fonctionnent indépendamment de tout nucléotide.",
        "correct": false,
        "explanation": "Le cycle mécanique des myosines est couplé à l'ATP."
      },
      {
        "content": "Toutes les myosines ont pour seule fonction le transport d'oxygène.",
        "correct": false,
        "explanation": "Le transport d'oxygène relève principalement de l'hémoglobine."
      },
      {
        "content": "Les myosines sont des moteurs se déplaçant sur les microtubules.",
        "correct": false,
        "explanation": "Les myosines utilisent l'actine ; kinésines et dynéines utilisent les microtubules."
      }
    ],
    "explanation": "Les myosines sont des moteurs moléculaires de l'actine qui couplent hydrolyse de l'ATP et production de force ou de mouvement."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de molécules d'O2 une HbA totalement saturée peut-elle fixer ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "L'HbA adulte est un tétramère α2β2 à quatre hèmes, capable de fixer coopérativement jusqu'à quatre O2."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant l'albumine sérique, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "L'albumine est synthétisée majoritairement par les érythrocytes.",
        "correct": false,
        "explanation": "Elle est synthétisée par les hépatocytes."
      },
      {
        "content": "L'albumine est synthétisée principalement par les hépatocytes.",
        "correct": true,
        "explanation": "Le foie est le principal site de synthèse de l'albumine circulante."
      },
      {
        "content": "Sa masse moléculaire est d'environ 500 kDa.",
        "correct": false,
        "explanation": "Elle est d'environ 66,5 kDa."
      },
      {
        "content": "L'albumine est absente du plasma normal.",
        "correct": false,
        "explanation": "Elle en est la protéine la plus abondante."
      },
      {
        "content": "L'albumine est un collagène fibrillaire.",
        "correct": false,
        "explanation": "C'est une protéine globulaire soluble."
      }
    ],
    "explanation": "L'albumine est une protéine hépatique soluble d'environ 66,5 kDa et constitue la protéine plasmatique la plus abondante."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'utilisation énergétique des protéines ?",
    "choices": [
      {
        "content": "En situation de jeûne ou de dénutrition, la protéolyse peut fournir des acides aminés utilisables comme substrats.",
        "correct": true,
        "explanation": "Les squelettes carbonés peuvent alimenter néoglucogenèse ou oxydation."
      },
      {
        "content": "L'organisme ne dispose pas d'un stock protéique dédié exclusivement au stockage énergétique.",
        "correct": true,
        "explanation": "Les protéines corporelles ont d'abord des fonctions structurales ou fonctionnelles."
      },
      {
        "content": "Le jeûne prolongé augmente indéfiniment la protéolyse sans adaptation.",
        "correct": false,
        "explanation": "L'utilisation accrue des corps cétoniques contribue à l'épargne protéique."
      },
      {
        "content": "Les acides aminés en excès ne sont pas stockés dans un compartiment spécialisé comparable au glycogène ou aux triacylglycérols.",
        "correct": true,
        "explanation": "Ils sont incorporés aux protéines ou catabolisés."
      },
      {
        "content": "Lors d'un jeûne prolongé, l'organisme tend à épargner les protéines en augmentant l'utilisation des lipides et corps cétoniques.",
        "correct": true,
        "explanation": "La préservation des protéines limite la perte de tissus fonctionnels."
      }
    ],
    "explanation": "Les protéines ne constituent pas une réserve énergétique spécialisée, mais leur catabolisme peut fournir des acides aminés lors de déficit énergétique."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel motif tripeptidique répétitif caractérise les domaines collagéniques ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Gly-X-Y",
        "Gly-Xaa-Yaa",
        "glycine-X-Y"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les domaines collagéniques sont fondés sur des répétitions Gly-X-Y assemblées en triple hélice de trois chaînes."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant la triple hélice du collagène.",
    "choices": [
      {
        "content": "Chaque chaîne adopte une hélice gauche de type polyproline II-like.",
        "correct": true,
        "explanation": "Cette conformation n'est pas une hélice alpha classique."
      },
      {
        "content": "La triple hélice est stabilisée uniquement par des liaisons H directes des OH d'hydroxyproline.",
        "correct": false,
        "explanation": "Les liaisons interchaînes du squelette et d'autres effets sont essentiels."
      },
      {
        "content": "La glycine se situe à la périphérie la plus encombrée de la triple hélice.",
        "correct": false,
        "explanation": "Elle est enfouie vers l'axe central."
      },
      {
        "content": "Les trois chaînes individuelles sont des hélices alpha droites classiques.",
        "correct": false,
        "explanation": "Elles sont de type polyproline II-like gauche."
      },
      {
        "content": "Les trois chaînes s'enroulent ensemble en une superhélice droite.",
        "correct": true,
        "explanation": "La triple hélice a une chiralité opposée à celle des chaînes individuelles."
      }
    ],
    "explanation": "Chaque chaîne collagénique est une hélice gauche polyproline-II-like ; trois chaînes forment une superhélice droite stabilisée par des liaisons H du squelette et par la 4-hydroxyproline.",
    "requiredSelectionCount": 2
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'organisation fibrilles–fibres–faisceaux du collagène I ?",
    "choices": [
      {
        "content": "Les fibres de collagène I ne contiennent aucune fibrille.",
        "correct": false,
        "explanation": "Elles sont formées d'assemblages de fibrilles."
      },
      {
        "content": "La hiérarchie d'assemblage contribue à la résistance mécanique du tissu.",
        "correct": true,
        "explanation": "La propriété finale dépend de l'organisation à plusieurs échelles."
      },
      {
        "content": "Les fibrilles se forment par polymérisation de phospholipides.",
        "correct": false,
        "explanation": "Elles résultent de l'assemblage de collagènes."
      },
      {
        "content": "Les protomères de collagène I s'assemblent en fibrilles.",
        "correct": true,
        "explanation": "La fibrille est le premier grand niveau supramoléculaire fibrillaire."
      },
      {
        "content": "La hiérarchie supramoléculaire n'influence jamais les propriétés mécaniques.",
        "correct": false,
        "explanation": "Elle est déterminante."
      }
    ],
    "explanation": "Le collagène I s'organise hiérarchiquement : protomères → fibrilles → fibres, puis parfois faisceaux."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de la comparaison des collagènes I et IV, quelle proposition doit être retenue ?",
    "choices": [
      {
        "content": "Les collagènes I et IV ont exactement le même assemblage supramoléculaire.",
        "correct": false,
        "explanation": "L'un forme surtout des fibrilles, l'autre des réseaux."
      },
      {
        "content": "Le collagène I est dépourvu de triple hélice.",
        "correct": false,
        "explanation": "La triple hélice est une caractéristique majeure."
      },
      {
        "content": "Le collagène IV est le principal collagène fibrillaire des tendons.",
        "correct": false,
        "explanation": "Cette fonction revient au type I."
      },
      {
        "content": "Le collagène I est fibrillaire tandis que le collagène IV forme un réseau.",
        "correct": true,
        "explanation": "Leurs architectures supramoléculaires répondent à des fonctions distinctes."
      },
      {
        "content": "Le collagène IV est absent des membranes basales.",
        "correct": false,
        "explanation": "Il en est un constituant essentiel."
      }
    ],
    "explanation": "Collagène I et IV partagent la triple hélice mais divergent fortement : fibrilles striées pour I, réseau des membranes basales pour IV."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le collagène de type I, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Son protomère habituel est [α1(I)]2α2(I).",
        "correct": true,
        "explanation": "Il s'agit d'un hétérotrimère."
      },
      {
        "content": "Il est constitué exclusivement de six chaînes alpha différentes.",
        "correct": false,
        "explanation": "Un protomère contient trois chaînes."
      },
      {
        "content": "Ses fibrilles présentent une périodicité D proche de 67 nm.",
        "correct": true,
        "explanation": "Le décalage axial ordonné produit cette striation."
      },
      {
        "content": "Il est absent des tendons.",
        "correct": false,
        "explanation": "Les tendons en sont très riches."
      },
      {
        "content": "Le collagène I est un collagène fibrillaire.",
        "correct": true,
        "explanation": "Il forme de longues fibrilles striées."
      }
    ],
    "explanation": "Le collagène I est le collagène fibrillaire majeur de nombreux tissus conjonctifs comme os, peau et tendons."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel domaine C-terminal du collagène IV participe à l'assemblage du réseau ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "NC1",
        "domaine NC1"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le collagène IV assemble son réseau notamment par ses domaines terminaux 7S (N-terminal) et NC1 (C-terminal)."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les rôles des myosines ?",
    "choices": [
      {
        "content": "Les myosines n'interviennent jamais dans la motilité cellulaire.",
        "correct": false,
        "explanation": "La motilité est une fonction importante de plusieurs classes de myosines."
      },
      {
        "content": "Des myosines contribuent à la migration cellulaire.",
        "correct": true,
        "explanation": "La contractilité actomyosine participe aux forces de traction."
      },
      {
        "content": "Certaines myosines participent au transport intracellulaire de cargos.",
        "correct": true,
        "explanation": "Elles peuvent déplacer des vésicules ou organites le long de l'actine."
      },
      {
        "content": "La myosine II participe à la contraction musculaire.",
        "correct": true,
        "explanation": "Le glissement actine-myosine est à la base de la contraction."
      },
      {
        "content": "Des myosines interviennent dans l'organisation et la tension des structures d'adhérence.",
        "correct": true,
        "explanation": "La contractilité peut être transmise aux adhérences cellulaires."
      }
    ],
    "explanation": "Les myosines participent à la contraction, à la migration, à l'adhérence et à certains transports intracellulaires."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "La méthémoglobine peut-elle fixer directement l'O2 sur son fer ferrique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non",
        "non, le Fe3+ ne fixe pas l'O2",
        "non, le fer ferrique ne fixe pas l'O2"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La méthémoglobine contient Fe3+ et ne fixe pas l'O2 sur les hèmes oxydés ; elle est normalement maintenue à un faible niveau."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant l'organisation d'une lipoprotéine plasmatique.",
    "choices": [
      {
        "content": "Les lipoprotéines sont dépourvues de toute protéine.",
        "correct": false,
        "explanation": "Elles contiennent des apolipoprotéines."
      },
      {
        "content": "Les esters de cholestérol sont majoritairement exposés au milieu aqueux en surface.",
        "correct": false,
        "explanation": "Ils sont hydrophobes et se trouvent surtout dans le cœur."
      },
      {
        "content": "Le cœur d'une lipoprotéine est principalement constitué de phospholipides chargés exposés à l'eau.",
        "correct": false,
        "explanation": "Les phospholipides sont surtout en surface."
      },
      {
        "content": "La composition varie selon la classe de lipoprotéine.",
        "correct": true,
        "explanation": "Chylomicrons, VLDL, LDL et HDL ont des proportions différentes de lipides et protéines."
      },
      {
        "content": "Le cœur contient surtout des triacylglycérols et des esters de cholestérol.",
        "correct": true,
        "explanation": "Ces lipides neutres et hydrophobes sont enfouis au centre."
      }
    ],
    "explanation": "Une lipoprotéine possède un cœur de lipides neutres hydrophobes entouré d'une monocouche de lipides amphiphiles et d'apolipoprotéines.",
    "requiredSelectionCount": 2
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les caractères structuraux des collagènes ?",
    "choices": [
      {
        "content": "Les domaines collagéniques reposent sur la répétition Gly-X-Y.",
        "correct": true,
        "explanation": "La glycine tous les trois résidus permet le compactage au centre de la triple hélice."
      },
      {
        "content": "Un domaine en triple hélice isolé suffit à classer toute protéine comme collagène.",
        "correct": false,
        "explanation": "Certaines protéines non collagéniques possèdent des domaines collagen-like."
      },
      {
        "content": "La triple hélice collagénique contient quatre chaînes.",
        "correct": false,
        "explanation": "Elle en contient trois."
      },
      {
        "content": "La glycine est exclue du centre de la triple hélice.",
        "correct": false,
        "explanation": "Sa petite taille permet précisément le compactage central."
      },
      {
        "content": "Proline et 4-hydroxyproline sont fréquentes dans les positions X et Y.",
        "correct": true,
        "explanation": "Elles favorisent la conformation appropriée des chaînes."
      }
    ],
    "explanation": "Les domaines collagéniques sont fondés sur des répétitions Gly-X-Y assemblées en triple hélice de trois chaînes."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Concernant le tropocollagène de type I, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Les extrémités des procollagènes sont maturées avant l'assemblage fibrillaire normal.",
        "correct": true,
        "explanation": "Le clivage des propeptides facilite la fibrillogenèse extracellulaire."
      },
      {
        "content": "Le tropocollagène est plus court qu'un seul acide aminé.",
        "correct": false,
        "explanation": "Il mesure environ 300 nm."
      },
      {
        "content": "Une seule chaîne alpha constitue un tropocollagène complet.",
        "correct": false,
        "explanation": "Il en faut trois."
      },
      {
        "content": "Le collagène I normal est toujours un homotrimère α2(I)3.",
        "correct": false,
        "explanation": "La forme la plus courante est [α1(I)]2α2(I)."
      },
      {
        "content": "Le tropocollagène est un lipide neutre.",
        "correct": false,
        "explanation": "C'est un protomère protéique triple hélicoïdal."
      }
    ],
    "explanation": "Le protomère du collagène I est habituellement [α1(I)]2α2(I), une triple hélice d'environ 300 nm qui s'assemble en fibrilles."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la drépanocytose et l'HbS, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'HbS polymérise surtout lorsqu'elle est fortement oxygénée.",
        "correct": false,
        "explanation": "La polymérisation est favorisée par la désoxygénation."
      },
      {
        "content": "L'HbS résulte du remplacement de Glu par Val en position 6 de la bêta-globine.",
        "correct": true,
        "explanation": "La substitution p.Glu6Val crée une surface hydrophobe anormale."
      },
      {
        "content": "La désoxy-HbS peut polymériser.",
        "correct": true,
        "explanation": "La désoxygénation favorise les interactions entre molécules d'HbS."
      },
      {
        "content": "La mutation augmente la solubilité de la désoxy-HbS.",
        "correct": false,
        "explanation": "Elle favorise au contraire la polymérisation."
      },
      {
        "content": "Les polymères d'HbS rigidifient et déforment les hématies.",
        "correct": true,
        "explanation": "La falciformation altère la déformabilité des globules rouges."
      }
    ],
    "explanation": "L'HbS porte la substitution β6 Glu→Val ; sa forme désoxygénée polymérise, ce qui favorise falciformation, hémolyse et vaso-occlusion."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle substitution d'acide aminé caractérise l'HbS de la drépanocytose ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Glu6Val",
        "Glu → Val en position 6",
        "glutamate vers valine en position 6",
        "E6V"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'HbS porte la substitution β6 Glu→Val ; sa forme désoxygénée polymérise, ce qui favorise falciformation, hémolyse et vaso-occlusion."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRPL",
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le collagène IV est absent des membranes basales.",
        "correct": false,
        "explanation": "Il en est un constituant essentiel."
      },
      {
        "content": "Les phénotypes dépendent du gène et du tissu où la protéine est exprimée.",
        "correct": true,
        "explanation": "Il n'existe pas une maladie unique du cytosquelette."
      },
      {
        "content": "Le collagène I est abondant dans les tendons ; le collagène IV dans les membranes basales.",
        "correct": true,
        "explanation": "La localisation reflète leur organisation."
      },
      {
        "content": "Toute mutation d'une protéine cytosquelettique entraîne exactement la même maladie.",
        "correct": false,
        "explanation": "Les effets dépendent de la protéine et du tissu."
      },
      {
        "content": "Certaines cardiomyopathies résultent de défauts de protéines liées au cytosquelette ou à son ancrage.",
        "correct": true,
        "explanation": "Le cœur dépend fortement de l'intégrité mécanique cellulaire."
      },
      {
        "content": "Le collagène IV est le principal collagène fibrillaire des tendons.",
        "correct": false,
        "explanation": "Cette fonction revient au type I."
      },
      {
        "content": "Le collagène I est dépourvu de triple hélice.",
        "correct": false,
        "explanation": "La triple hélice est une caractéristique majeure."
      },
      {
        "content": "Les défauts du cytosquelette peuvent perturber forme, migration, division ou transport intracellulaire.",
        "correct": true,
        "explanation": "La diversité des fonctions explique la diversité clinique."
      },
      {
        "content": "Les collagènes I et IV ont exactement le même assemblage supramoléculaire.",
        "correct": false,
        "explanation": "L'un forme surtout des fibrilles, l'autre des réseaux."
      },
      {
        "content": "Le collagène I possède un long domaine collagénique très régulier.",
        "correct": true,
        "explanation": "Le type IV contient davantage d'interruptions du motif Gly-X-Y."
      }
    ],
    "requiredSelectionCount": 5,
    "explanation": "Les anomalies du cytosquelette peuvent produire des maladies variées, notamment dystrophies musculaires et cardiomyopathies, selon la protéine et le tissu. Collagène I et IV partagent la triple hélice mais divergent fortement : fibrilles striées pour I, réseau des membranes basales pour IV."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la comparaison des collagènes I et IV, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le collagène I possède un long domaine collagénique très régulier.",
        "correct": true,
        "explanation": "Le type IV contient davantage d'interruptions du motif Gly-X-Y."
      },
      {
        "content": "Le collagène I est abondant dans les tendons ; le collagène IV dans les membranes basales.",
        "correct": true,
        "explanation": "La localisation reflète leur organisation."
      },
      {
        "content": "Les deux types partagent le principe d'une triple hélice collagénique.",
        "correct": true,
        "explanation": "Ils appartiennent à la même superfamille malgré leurs différences."
      },
      {
        "content": "Le collagène I est fibrillaire tandis que le collagène IV forme un réseau.",
        "correct": true,
        "explanation": "Leurs architectures supramoléculaires répondent à des fonctions distinctes."
      },
      {
        "content": "Les collagènes I et IV ont exactement le même assemblage supramoléculaire.",
        "correct": false,
        "explanation": "L'un forme surtout des fibrilles, l'autre des réseaux."
      }
    ],
    "explanation": "Collagène I et IV partagent la triple hélice mais divergent fortement : fibrilles striées pour I, réseau des membranes basales pour IV."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel nucléotide stabilise la coiffe d'un microtubule en croissance ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "GTP",
        "guanosine triphosphate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'instabilité dynamique des microtubules dépend de la bêta-tubuline-GTP : coiffe GTP, catastrophe et rescue."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant les fonctions de l'albumine, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "L'albumine contribue fortement à la pression oncotique plasmatique.",
        "correct": true,
        "explanation": "Sa concentration élevée en fait un déterminant majeur des forces colloïdo-osmotiques."
      },
      {
        "content": "Elle lie de nombreux médicaments et hormones.",
        "correct": true,
        "explanation": "La liaison à l'albumine influence leur distribution plasmatique."
      },
      {
        "content": "L'albumine est le principal moteur moléculaire de l'actine.",
        "correct": false,
        "explanation": "Cette fonction appartient aux myosines."
      },
      {
        "content": "L'albumine ne lie aucun médicament.",
        "correct": false,
        "explanation": "De nombreux médicaments circulent partiellement liés à l'albumine."
      },
      {
        "content": "L'albumine n'a aucune influence sur la pression oncotique.",
        "correct": false,
        "explanation": "Elle en est un déterminant majeur."
      }
    ],
    "explanation": "L'albumine maintient une part importante de la pression oncotique et transporte de nombreux ligands endogènes ou exogènes.",
    "requiredSelectionCount": 2
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "La superhélice de collagène formée par trois chaînes est-elle droite ou gauche ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "droite",
        "superhélice droite"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Chaque chaîne collagénique est une hélice gauche polyproline-II-like ; trois chaînes forment une superhélice droite stabilisée par des liaisons H du squelette et par la 4-hydroxyproline."
  }
];
