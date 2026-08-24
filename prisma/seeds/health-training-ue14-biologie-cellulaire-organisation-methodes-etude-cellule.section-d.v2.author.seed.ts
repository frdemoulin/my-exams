import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch1 — Marquages moléculaires */
export const UE14_CELL_CH1_SECTION_D_V2: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement « Anticorps, antigène et épitope » ?",
    "choices": [
      {
        "content": "Un épitope est la portion d’un antigène reconnue par un anticorps.",
        "correct": true,
        "explanation": "Exact. Un anticorps reconnaît spécifiquement un épitope porté par un antigène grâce aux régions variables de ses fragments Fab. Le fragment Fc assure d’autres fonctions et peut être reconnu par des anticorps secondaires dans un immunomarquage indirect."
      },
      {
        "content": "Le fragment Fc est le seul site de reconnaissance spécifique de l’épitope.",
        "correct": false,
        "explanation": "Incorrect. Un anticorps reconnaît spécifiquement un épitope porté par un antigène grâce aux régions variables de ses fragments Fab. Le fragment Fc assure d’autres fonctions et peut être reconnu par des anticorps secondaires dans un immunomarquage indirect."
      },
      {
        "content": "L’épitope correspond obligatoirement à l’ensemble de la protéine antigénique.",
        "correct": false,
        "explanation": "Incorrect. Un anticorps reconnaît spécifiquement un épitope porté par un antigène grâce aux régions variables de ses fragments Fab. Le fragment Fc assure d’autres fonctions et peut être reconnu par des anticorps secondaires dans un immunomarquage indirect."
      },
      {
        "content": "Un anticorps reconnaît toutes les protéines avec la même affinité.",
        "correct": false,
        "explanation": "Incorrect. Un anticorps reconnaît spécifiquement un épitope porté par un antigène grâce aux régions variables de ses fragments Fab. Le fragment Fc assure d’autres fonctions et peut être reconnu par des anticorps secondaires dans un immunomarquage indirect."
      },
      {
        "content": "Un anticorps secondaire doit reconnaître directement la protéine cellulaire d’intérêt.",
        "correct": false,
        "explanation": "Incorrect. Un anticorps reconnaît spécifiquement un épitope porté par un antigène grâce aux régions variables de ses fragments Fab. Le fragment Fc assure d’autres fonctions et peut être reconnu par des anticorps secondaires dans un immunomarquage indirect."
      }
    ],
    "explanation": "Un anticorps reconnaît spécifiquement un épitope porté par un antigène grâce aux régions variables de ses fragments Fab. Le fragment Fc assure d’autres fonctions et peut être reconnu par des anticorps secondaires dans un immunomarquage indirect."
  },
  {
    "order": 68,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions ci-dessous relatives à « Immunofluorescence directe et indirecte », laquelle est correcte ?",
    "choices": [
      {
        "content": "Un fluorophore émet de la lumière sans avoir besoin d’être excité.",
        "correct": false,
        "explanation": "Incorrect. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      },
      {
        "content": "L’immunofluorescence ne peut jamais localiser une protéine intracellulaire.",
        "correct": false,
        "explanation": "Incorrect. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      },
      {
        "content": "L’anticorps secondaire fluorescent se fixe obligatoirement sur l’ADN cellulaire.",
        "correct": false,
        "explanation": "Incorrect. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      },
      {
        "content": "En immunofluorescence indirecte, le secondaire remplace l’antigène dans la cellule.",
        "correct": false,
        "explanation": "Incorrect. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      },
      {
        "content": "En immunofluorescence directe, l’anticorps primaire peut être directement couplé à un fluorophore.",
        "correct": true,
        "explanation": "Exact. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      }
    ],
    "explanation": "L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
  },
  {
    "order": 69,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Pour « Fixation et perméabilisation », quelle proposition doit être retenue ?",
    "choices": [
      {
        "content": "La fixation vise à préserver au mieux l’organisation d’un échantillon à un instant donné.",
        "correct": true,
        "explanation": "Exact. La fixation immobilise les structures et molécules mais peut modifier certains épitopes. Pour détecter une cible intracellulaire par anticorps, une perméabilisation est généralement nécessaire afin de franchir la membrane plasmique ; elle n’est pas toujours requise pour une cible de surface."
      },
      {
        "content": "La fixation ne peut jamais modifier un épitope.",
        "correct": false,
        "explanation": "Incorrect. La fixation immobilise les structures et molécules mais peut modifier certains épitopes. Pour détecter une cible intracellulaire par anticorps, une perméabilisation est généralement nécessaire afin de franchir la membrane plasmique ; elle n’est pas toujours requise pour une cible de surface."
      },
      {
        "content": "Un anticorps entier traverse librement toutes les membranes d’une cellule vivante non perméabilisée.",
        "correct": false,
        "explanation": "Incorrect. La fixation immobilise les structures et molécules mais peut modifier certains épitopes. Pour détecter une cible intracellulaire par anticorps, une perméabilisation est généralement nécessaire afin de franchir la membrane plasmique ; elle n’est pas toujours requise pour une cible de surface."
      },
      {
        "content": "La perméabilisation est inutile pour tout antigène intracellulaire.",
        "correct": false,
        "explanation": "Incorrect. La fixation immobilise les structures et molécules mais peut modifier certains épitopes. Pour détecter une cible intracellulaire par anticorps, une perméabilisation est généralement nécessaire afin de franchir la membrane plasmique ; elle n’est pas toujours requise pour une cible de surface."
      },
      {
        "content": "La fixation maintient une cellule vivante et métaboliquement active pendant plusieurs heures d’imagerie.",
        "correct": false,
        "explanation": "Incorrect. La fixation immobilise les structures et molécules mais peut modifier certains épitopes. Pour détecter une cible intracellulaire par anticorps, une perméabilisation est généralement nécessaire afin de franchir la membrane plasmique ; elle n’est pas toujours requise pour une cible de surface."
      }
    ],
    "explanation": "La fixation immobilise les structures et molécules mais peut modifier certains épitopes. Pour détecter une cible intracellulaire par anticorps, une perméabilisation est généralement nécessaire afin de franchir la membrane plasmique ; elle n’est pas toujours requise pour une cible de surface."
  },
  {
    "order": 70,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Fluorophores et microscopie à fluorescence », lesquelles sont incorrectes ?",
    "choices": [
      {
        "content": "Alexa Fluor 488 émet principalement dans l’infrarouge lointain.",
        "correct": true,
        "explanation": "Incorrect. Un fluorophore absorbe des photons d’excitation puis émet à une longueur d’onde généralement plus grande. Des filtres séparent excitation et émission ; le photoblanchiment et le recouvrement spectral sont des limites pratiques."
      },
      {
        "content": "Alexa Fluor 488 peut être excité autour de 488 nm et émet dans le vert.",
        "correct": false,
        "explanation": "Exact. Un fluorophore absorbe des photons d’excitation puis émet à une longueur d’onde généralement plus grande. Des filtres séparent excitation et émission ; le photoblanchiment et le recouvrement spectral sont des limites pratiques."
      },
      {
        "content": "Un fluorophore émet toujours à une longueur d’onde plus courte que celle d’excitation.",
        "correct": true,
        "explanation": "Incorrect. Un fluorophore absorbe des photons d’excitation puis émet à une longueur d’onde généralement plus grande. Des filtres séparent excitation et émission ; le photoblanchiment et le recouvrement spectral sont des limites pratiques."
      },
      {
        "content": "Un fluorophore est excité par une bande de longueurs d’onde et émet ensuite de la lumière.",
        "correct": false,
        "explanation": "Exact. Un fluorophore absorbe des photons d’excitation puis émet à une longueur d’onde généralement plus grande. Des filtres séparent excitation et émission ; le photoblanchiment et le recouvrement spectral sont des limites pratiques."
      },
      {
        "content": "L’émission d’un fluorophore se fait généralement à une longueur d’onde plus grande que l’excitation.",
        "correct": false,
        "explanation": "Exact. Un fluorophore absorbe des photons d’excitation puis émet à une longueur d’onde généralement plus grande. Des filtres séparent excitation et émission ; le photoblanchiment et le recouvrement spectral sont des limites pratiques."
      }
    ],
    "explanation": "Un fluorophore absorbe des photons d’excitation puis émet à une longueur d’onde généralement plus grande. Des filtres séparent excitation et émission ; le photoblanchiment et le recouvrement spectral sont des limites pratiques. Ici, il fallait sélectionner les affirmations incorrectes."
  },
  {
    "order": 71,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Pour le thème « Immunomarquage à l’or colloïdal », retenez les cinq affirmations correctes parmi les dix proposées.",
    "choices": [
      {
        "content": "L’or colloïdal est utilisé uniquement parce qu’il émet spontanément une fluorescence verte intense.",
        "correct": false,
        "explanation": "Incorrect. Des particules d’or colloïdal peuvent être couplées à des anticorps et sont très électron-denses. Elles sont particulièrement utiles en microscopie électronique en transmission pour localiser une cible à l’échelle ultrastructurale."
      },
      {
        "content": "Les particules d’or sont invisibles en microscopie électronique parce qu’elles ne diffusent pas les électrons.",
        "correct": false,
        "explanation": "Incorrect. Des particules d’or colloïdal peuvent être couplées à des anticorps et sont très électron-denses. Elles sont particulièrement utiles en microscopie électronique en transmission pour localiser une cible à l’échelle ultrastructurale."
      },
      {
        "content": "Le signal d’or apparaît comme des particules denses aux électrons.",
        "correct": true,
        "explanation": "Exact. Des particules d’or colloïdal peuvent être couplées à des anticorps et sont très électron-denses. Elles sont particulièrement utiles en microscopie électronique en transmission pour localiser une cible à l’échelle ultrastructurale."
      },
      {
        "content": "Les particules d’or colloïdal sont électron-denses.",
        "correct": true,
        "explanation": "Exact. Des particules d’or colloïdal peuvent être couplées à des anticorps et sont très électron-denses. Elles sont particulièrement utiles en microscopie électronique en transmission pour localiser une cible à l’échelle ultrastructurale."
      },
      {
        "content": "Un anticorps peut être associé à des particules d’or pour un immunomarquage.",
        "correct": true,
        "explanation": "Exact. Des particules d’or colloïdal peuvent être couplées à des anticorps et sont très électron-denses. Elles sont particulièrement utiles en microscopie électronique en transmission pour localiser une cible à l’échelle ultrastructurale."
      },
      {
        "content": "L’immunogold est une méthode d’observation exclusive au microscope optique en fond clair.",
        "correct": false,
        "explanation": "Incorrect. Des particules d’or colloïdal peuvent être couplées à des anticorps et sont très électron-denses. Elles sont particulièrement utiles en microscopie électronique en transmission pour localiser une cible à l’échelle ultrastructurale."
      },
      {
        "content": "Un anticorps ne peut jamais être couplé à une particule d’or.",
        "correct": false,
        "explanation": "Incorrect. Des particules d’or colloïdal peuvent être couplées à des anticorps et sont très électron-denses. Elles sont particulièrement utiles en microscopie électronique en transmission pour localiser une cible à l’échelle ultrastructurale."
      },
      {
        "content": "La taille des particules d’or peut aider à distinguer plusieurs marquages dans certaines expériences.",
        "correct": true,
        "explanation": "Exact. Des particules d’or colloïdal peuvent être couplées à des anticorps et sont très électron-denses. Elles sont particulièrement utiles en microscopie électronique en transmission pour localiser une cible à l’échelle ultrastructurale."
      },
      {
        "content": "La taille des particules d’or est toujours exactement de 1 micromètre.",
        "correct": false,
        "explanation": "Incorrect. Des particules d’or colloïdal peuvent être couplées à des anticorps et sont très électron-denses. Elles sont particulièrement utiles en microscopie électronique en transmission pour localiser une cible à l’échelle ultrastructurale."
      },
      {
        "content": "L’immunogold est particulièrement adapté à la microscopie électronique en transmission.",
        "correct": true,
        "explanation": "Exact. Des particules d’or colloïdal peuvent être couplées à des anticorps et sont très électron-denses. Elles sont particulièrement utiles en microscopie électronique en transmission pour localiser une cible à l’échelle ultrastructurale."
      }
    ],
    "explanation": "Des particules d’or colloïdal peuvent être couplées à des anticorps et sont très électron-denses. Elles sont particulièrement utiles en microscopie électronique en transmission pour localiser une cible à l’échelle ultrastructurale."
  },
  {
    "order": 72,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de « Hybridation in situ », sélectionnez les propositions exactes.",
    "choices": [
      {
        "content": "Une sonde nucléique doit avoir exactement la même séquence et la même orientation que sa cible pour s’y apparier.",
        "correct": false,
        "explanation": "Incorrect. L’hybridation in situ détecte une séquence d’ADN ou d’ARN grâce à une sonde nucléique complémentaire. La sonde peut porter ou révéler un marqueur fluorescent ou colorimétrique ; la spécificité dépend notamment de la complémentarité et des conditions d’hybridation."
      },
      {
        "content": "L’hybridation in situ repose sur la reconnaissance antigène-anticorps.",
        "correct": false,
        "explanation": "Incorrect. L’hybridation in situ détecte une séquence d’ADN ou d’ARN grâce à une sonde nucléique complémentaire. La sonde peut porter ou révéler un marqueur fluorescent ou colorimétrique ; la spécificité dépend notamment de la complémentarité et des conditions d’hybridation."
      },
      {
        "content": "La FISH ne peut jamais utiliser de fluorophore.",
        "correct": false,
        "explanation": "Incorrect. L’hybridation in situ détecte une séquence d’ADN ou d’ARN grâce à une sonde nucléique complémentaire. La sonde peut porter ou révéler un marqueur fluorescent ou colorimétrique ; la spécificité dépend notamment de la complémentarité et des conditions d’hybridation."
      },
      {
        "content": "L’hybridation in situ peut localiser un ARN dans une cellule ou un tissu.",
        "correct": true,
        "explanation": "Exact. L’hybridation in situ détecte une séquence d’ADN ou d’ARN grâce à une sonde nucléique complémentaire. La sonde peut porter ou révéler un marqueur fluorescent ou colorimétrique ; la spécificité dépend notamment de la complémentarité et des conditions d’hybridation."
      },
      {
        "content": "Une sonde d’hybridation in situ est complémentaire de la séquence nucléique recherchée.",
        "correct": true,
        "explanation": "Exact. L’hybridation in situ détecte une séquence d’ADN ou d’ARN grâce à une sonde nucléique complémentaire. La sonde peut porter ou révéler un marqueur fluorescent ou colorimétrique ; la spécificité dépend notamment de la complémentarité et des conditions d’hybridation."
      }
    ],
    "explanation": "L’hybridation in situ détecte une séquence d’ADN ou d’ARN grâce à une sonde nucléique complémentaire. La sonde peut porter ou révéler un marqueur fluorescent ou colorimétrique ; la spécificité dépend notamment de la complémentarité et des conditions d’hybridation."
  },
  {
    "order": 73,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Parmi ces affirmations concernant « Protéines fluorescentes et GFP », retenez exactement les 2 justes.",
    "choices": [
      {
        "content": "La GFP doit obligatoirement être couplée chimiquement à chaque protéine après sa synthèse dans la cellule.",
        "correct": false,
        "explanation": "Incorrect. La GFP et ses dérivés sont des marqueurs fluorescents génétiquement codés. En fusion avec une protéine d’intérêt, ils permettent de suivre sa localisation et sa dynamique dans des cellules vivantes, sous réserve que le tag ne perturbe pas la fonction de la protéine."
      },
      {
        "content": "La GFP est une protéine fluorescente génétiquement codée.",
        "correct": true,
        "explanation": "Exact. La GFP et ses dérivés sont des marqueurs fluorescents génétiquement codés. En fusion avec une protéine d’intérêt, ils permettent de suivre sa localisation et sa dynamique dans des cellules vivantes, sous réserve que le tag ne perturbe pas la fonction de la protéine."
      },
      {
        "content": "Une protéine fluorescente ne peut jamais être utilisée sur une cellule vivante.",
        "correct": false,
        "explanation": "Incorrect. La GFP et ses dérivés sont des marqueurs fluorescents génétiquement codés. En fusion avec une protéine d’intérêt, ils permettent de suivre sa localisation et sa dynamique dans des cellules vivantes, sous réserve que le tag ne perturbe pas la fonction de la protéine."
      },
      {
        "content": "Le gène d’une protéine d’intérêt peut être fusionné à celui d’une protéine fluorescente.",
        "correct": true,
        "explanation": "Exact. La GFP et ses dérivés sont des marqueurs fluorescents génétiquement codés. En fusion avec une protéine d’intérêt, ils permettent de suivre sa localisation et sa dynamique dans des cellules vivantes, sous réserve que le tag ne perturbe pas la fonction de la protéine."
      },
      {
        "content": "La fusion d’un tag fluorescent est garantie sans effet sur la fonction de toute protéine.",
        "correct": false,
        "explanation": "Incorrect. La GFP et ses dérivés sont des marqueurs fluorescents génétiquement codés. En fusion avec une protéine d’intérêt, ils permettent de suivre sa localisation et sa dynamique dans des cellules vivantes, sous réserve que le tag ne perturbe pas la fonction de la protéine."
      }
    ],
    "explanation": "La GFP et ses dérivés sont des marqueurs fluorescents génétiquement codés. En fusion avec une protéine d’intérêt, ils permettent de suivre sa localisation et sa dynamique dans des cellules vivantes, sous réserve que le tag ne perturbe pas la fonction de la protéine."
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment nomme-t-on la portion d’un antigène reconnue par un anticorps ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "épitope",
        "epitope"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’épitope est le déterminant antigénique reconnu par l’anticorps."
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour le thème « Transfection et délivrance d’acides nucléiques », quelles propositions doivent être retenues ?",
    "choices": [
      {
        "content": "La transfection désigne l’introduction expérimentale d’acides nucléiques dans des cellules eucaryotes.",
        "correct": true,
        "explanation": "Exact. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      },
      {
        "content": "La lipofection exige que le plasmide soit une protéine membranaire.",
        "correct": false,
        "explanation": "Incorrect. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      },
      {
        "content": "La transfection signifie uniquement l’introduction d’une protéine purifiée sans acide nucléique.",
        "correct": false,
        "explanation": "Incorrect. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      },
      {
        "content": "La lipofection utilise des lipides capables de former des complexes avec l’ADN ou l’ARN.",
        "correct": true,
        "explanation": "Exact. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      },
      {
        "content": "Toute transfection provoque obligatoirement une intégration stable dans le génome.",
        "correct": false,
        "explanation": "Incorrect. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      }
    ],
    "explanation": "La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Sélectionnez les affirmations compatibles avec « Électroporation ».",
    "choices": [
      {
        "content": "L’électroporation utilise des impulsions électriques pour perméabiliser transitoirement la membrane.",
        "correct": true,
        "explanation": "Exact. L’électroporation applique de brèves impulsions électriques qui augmentent transitoirement la perméabilité membranaire. Elle peut permettre l’entrée d’ADN, d’ARN ou de certaines macromolécules, mais des conditions trop fortes réduisent la viabilité."
      },
      {
        "content": "L’électroporation repose sur une digestion enzymatique permanente de la membrane plasmique.",
        "correct": false,
        "explanation": "Incorrect. L’électroporation applique de brèves impulsions électriques qui augmentent transitoirement la perméabilité membranaire. Elle peut permettre l’entrée d’ADN, d’ARN ou de certaines macromolécules, mais des conditions trop fortes réduisent la viabilité."
      },
      {
        "content": "Des paramètres électriques trop intenses peuvent provoquer une perte de viabilité.",
        "correct": true,
        "explanation": "Exact. L’électroporation applique de brèves impulsions électriques qui augmentent transitoirement la perméabilité membranaire. Elle peut permettre l’entrée d’ADN, d’ARN ou de certaines macromolécules, mais des conditions trop fortes réduisent la viabilité."
      },
      {
        "content": "Des pores transitoires permettent l’entrée de molécules présentes dans le milieu.",
        "correct": true,
        "explanation": "Exact. L’électroporation applique de brèves impulsions électriques qui augmentent transitoirement la perméabilité membranaire. Elle peut permettre l’entrée d’ADN, d’ARN ou de certaines macromolécules, mais des conditions trop fortes réduisent la viabilité."
      },
      {
        "content": "L’électroporation peut être utilisée pour introduire de l’ADN plasmidique.",
        "correct": true,
        "explanation": "Exact. L’électroporation applique de brèves impulsions électriques qui augmentent transitoirement la perméabilité membranaire. Elle peut permettre l’entrée d’ADN, d’ARN ou de certaines macromolécules, mais des conditions trop fortes réduisent la viabilité."
      }
    ],
    "explanation": "L’électroporation applique de brèves impulsions électriques qui augmentent transitoirement la perméabilité membranaire. Elle peut permettre l’entrée d’ADN, d’ARN ou de certaines macromolécules, mais des conditions trop fortes réduisent la viabilité."
  },
  {
    "order": 77,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Pour le thème « Micro-injection de molécules marquées », retenez les cinq affirmations correctes parmi les dix proposées.",
    "choices": [
      {
        "content": "La micro-injection traite instantanément des millions de cellules avec une seule micropipette.",
        "correct": false,
        "explanation": "Incorrect. La micro-injection utilise une micropipette fine pour délivrer directement une petite quantité de matériel dans le cytoplasme ou le noyau d’une cellule. Elle offre un contrôle spatial précis mais reste peu adaptée aux très grandes populations."
      },
      {
        "content": "La méthode est dépourvue de tout risque mécanique pour la cellule.",
        "correct": false,
        "explanation": "Incorrect. La micro-injection utilise une micropipette fine pour délivrer directement une petite quantité de matériel dans le cytoplasme ou le noyau d’une cellule. Elle offre un contrôle spatial précis mais reste peu adaptée aux très grandes populations."
      },
      {
        "content": "La micro-injection ne peut délivrer aucune protéine.",
        "correct": false,
        "explanation": "Incorrect. La micro-injection utilise une micropipette fine pour délivrer directement une petite quantité de matériel dans le cytoplasme ou le noyau d’une cellule. Elle offre un contrôle spatial précis mais reste peu adaptée aux très grandes populations."
      },
      {
        "content": "La micropipette reste obligatoirement à l’extérieur de la cellule.",
        "correct": false,
        "explanation": "Incorrect. La micro-injection utilise une micropipette fine pour délivrer directement une petite quantité de matériel dans le cytoplasme ou le noyau d’une cellule. Elle offre un contrôle spatial précis mais reste peu adaptée aux très grandes populations."
      },
      {
        "content": "La micro-injection peut également cibler le noyau selon la question expérimentale.",
        "correct": true,
        "explanation": "Exact. La micro-injection utilise une micropipette fine pour délivrer directement une petite quantité de matériel dans le cytoplasme ou le noyau d’une cellule. Elle offre un contrôle spatial précis mais reste peu adaptée aux très grandes populations."
      },
      {
        "content": "Une micropipette très fine est utilisée pour pénétrer la cellule.",
        "correct": true,
        "explanation": "Exact. La micro-injection utilise une micropipette fine pour délivrer directement une petite quantité de matériel dans le cytoplasme ou le noyau d’une cellule. Elle offre un contrôle spatial précis mais reste peu adaptée aux très grandes populations."
      },
      {
        "content": "La micro-injection peut délivrer directement une molécule dans le cytoplasme.",
        "correct": true,
        "explanation": "Exact. La micro-injection utilise une micropipette fine pour délivrer directement une petite quantité de matériel dans le cytoplasme ou le noyau d’une cellule. Elle offre un contrôle spatial précis mais reste peu adaptée aux très grandes populations."
      },
      {
        "content": "La méthode permet un contrôle cellule par cellule de la délivrance.",
        "correct": true,
        "explanation": "Exact. La micro-injection utilise une micropipette fine pour délivrer directement une petite quantité de matériel dans le cytoplasme ou le noyau d’une cellule. Elle offre un contrôle spatial précis mais reste peu adaptée aux très grandes populations."
      },
      {
        "content": "La micro-injection ne permet jamais de cibler le noyau.",
        "correct": false,
        "explanation": "Incorrect. La micro-injection utilise une micropipette fine pour délivrer directement une petite quantité de matériel dans le cytoplasme ou le noyau d’une cellule. Elle offre un contrôle spatial précis mais reste peu adaptée aux très grandes populations."
      },
      {
        "content": "Une protéine purifiée marquée peut être introduite par micro-injection.",
        "correct": true,
        "explanation": "Exact. La micro-injection utilise une micropipette fine pour délivrer directement une petite quantité de matériel dans le cytoplasme ou le noyau d’une cellule. Elle offre un contrôle spatial précis mais reste peu adaptée aux très grandes populations."
      }
    ],
    "explanation": "La micro-injection utilise une micropipette fine pour délivrer directement une petite quantité de matériel dans le cytoplasme ou le noyau d’une cellule. Elle offre un contrôle spatial précis mais reste peu adaptée aux très grandes populations."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Choix entre cellules vivantes et cellules fixées », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Une cellule fixée continue à migrer normalement pendant l’acquisition.",
        "correct": false,
        "explanation": "Incorrect. Le choix dépend de la question. Les cellules vivantes permettent le suivi temporel, souvent avec des protéines fluorescentes ou des sondes compatibles. La fixation donne un instantané et facilite l’accès à des cibles intracellulaires pour immunomarquage ou hybridation in situ."
      },
      {
        "content": "Une cellule vivante permet de suivre des changements de localisation au cours du temps.",
        "correct": true,
        "explanation": "Exact. Le choix dépend de la question. Les cellules vivantes permettent le suivi temporel, souvent avec des protéines fluorescentes ou des sondes compatibles. La fixation donne un instantané et facilite l’accès à des cibles intracellulaires pour immunomarquage ou hybridation in situ."
      },
      {
        "content": "Une cellule vivante permet toujours l’accès libre d’anticorps entiers à toutes les protéines intracellulaires.",
        "correct": false,
        "explanation": "Incorrect. Le choix dépend de la question. Les cellules vivantes permettent le suivi temporel, souvent avec des protéines fluorescentes ou des sondes compatibles. La fixation donne un instantané et facilite l’accès à des cibles intracellulaires pour immunomarquage ou hybridation in situ."
      },
      {
        "content": "Une cellule fixée fournit un instantané de l’état de l’échantillon au moment de la fixation.",
        "correct": true,
        "explanation": "Exact. Le choix dépend de la question. Les cellules vivantes permettent le suivi temporel, souvent avec des protéines fluorescentes ou des sondes compatibles. La fixation donne un instantané et facilite l’accès à des cibles intracellulaires pour immunomarquage ou hybridation in situ."
      },
      {
        "content": "L’hybridation in situ classique nécessite que la cellule reste métaboliquement active.",
        "correct": false,
        "explanation": "Incorrect. Le choix dépend de la question. Les cellules vivantes permettent le suivi temporel, souvent avec des protéines fluorescentes ou des sondes compatibles. La fixation donne un instantané et facilite l’accès à des cibles intracellulaires pour immunomarquage ou hybridation in situ."
      }
    ],
    "explanation": "Le choix dépend de la question. Les cellules vivantes permettent le suivi temporel, souvent avec des protéines fluorescentes ou des sondes compatibles. La fixation donne un instantané et facilite l’accès à des cibles intracellulaires pour immunomarquage ou hybridation in situ."
  },
  {
    "order": 79,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant « Anticorps, antigène et épitope », quelles affirmations sont correctes ?",
    "choices": [
      {
        "content": "Le fragment Fc ne constitue pas le site principal de reconnaissance spécifique de l’épitope.",
        "correct": true,
        "explanation": "Exact. Un anticorps reconnaît spécifiquement un épitope porté par un antigène grâce aux régions variables de ses fragments Fab. Le fragment Fc assure d’autres fonctions et peut être reconnu par des anticorps secondaires dans un immunomarquage indirect."
      },
      {
        "content": "Les régions variables des fragments Fab participent à la reconnaissance de l’antigène.",
        "correct": true,
        "explanation": "Exact. Un anticorps reconnaît spécifiquement un épitope porté par un antigène grâce aux régions variables de ses fragments Fab. Le fragment Fc assure d’autres fonctions et peut être reconnu par des anticorps secondaires dans un immunomarquage indirect."
      },
      {
        "content": "Un anticorps possède classiquement deux sites de liaison à l’antigène.",
        "correct": true,
        "explanation": "Exact. Un anticorps reconnaît spécifiquement un épitope porté par un antigène grâce aux régions variables de ses fragments Fab. Le fragment Fc assure d’autres fonctions et peut être reconnu par des anticorps secondaires dans un immunomarquage indirect."
      },
      {
        "content": "Un anticorps secondaire peut reconnaître le fragment Fc d’un anticorps primaire.",
        "correct": true,
        "explanation": "Exact. Un anticorps reconnaît spécifiquement un épitope porté par un antigène grâce aux régions variables de ses fragments Fab. Le fragment Fc assure d’autres fonctions et peut être reconnu par des anticorps secondaires dans un immunomarquage indirect."
      },
      {
        "content": "L’épitope correspond obligatoirement à l’ensemble de la protéine antigénique.",
        "correct": false,
        "explanation": "Incorrect. Un anticorps reconnaît spécifiquement un épitope porté par un antigène grâce aux régions variables de ses fragments Fab. Le fragment Fc assure d’autres fonctions et peut être reconnu par des anticorps secondaires dans un immunomarquage indirect."
      }
    ],
    "explanation": "Un anticorps reconnaît spécifiquement un épitope porté par un antigène grâce aux régions variables de ses fragments Fab. Le fragment Fc assure d’autres fonctions et peut être reconnu par des anticorps secondaires dans un immunomarquage indirect."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Sur le thème « Immunofluorescence directe et indirecte », sélectionnez exactement 3 propositions exactes.",
    "choices": [
      {
        "content": "En immunofluorescence indirecte, un anticorps secondaire fluorescent reconnaît l’anticorps primaire.",
        "correct": true,
        "explanation": "Exact. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      },
      {
        "content": "Le fluorophore émet de la lumière après excitation par une longueur d’onde appropriée.",
        "correct": true,
        "explanation": "Exact. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      },
      {
        "content": "L’immunofluorescence indirecte peut amplifier le signal grâce à plusieurs anticorps secondaires par primaire.",
        "correct": true,
        "explanation": "Exact. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      },
      {
        "content": "L’anticorps secondaire fluorescent se fixe obligatoirement sur l’ADN cellulaire.",
        "correct": false,
        "explanation": "Incorrect. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      },
      {
        "content": "L’immunofluorescence ne peut jamais localiser une protéine intracellulaire.",
        "correct": false,
        "explanation": "Incorrect. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      }
    ],
    "explanation": "L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel fragment d’un anticorps porte les régions variables de reconnaissance de l’antigène : Fab ou Fc ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Fab",
        "fragment Fab"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les fragments Fab portent les sites de liaison à l’antigène."
  },
  {
    "order": 82,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Sélectionnez les affirmations compatibles avec « Fixation et perméabilisation ».",
    "choices": [
      {
        "content": "Les détergents sont souvent utilisés pour perméabiliser les membranes dans des protocoles de cellules fixées.",
        "correct": true,
        "explanation": "Exact. La fixation immobilise les structures et molécules mais peut modifier certains épitopes. Pour détecter une cible intracellulaire par anticorps, une perméabilisation est généralement nécessaire afin de franchir la membrane plasmique ; elle n’est pas toujours requise pour une cible de surface."
      },
      {
        "content": "La fixation ne peut jamais modifier un épitope.",
        "correct": false,
        "explanation": "Incorrect. La fixation immobilise les structures et molécules mais peut modifier certains épitopes. Pour détecter une cible intracellulaire par anticorps, une perméabilisation est généralement nécessaire afin de franchir la membrane plasmique ; elle n’est pas toujours requise pour une cible de surface."
      },
      {
        "content": "Une perméabilisation facilite l’accès des anticorps aux protéines intracellulaires.",
        "correct": true,
        "explanation": "Exact. La fixation immobilise les structures et molécules mais peut modifier certains épitopes. Pour détecter une cible intracellulaire par anticorps, une perméabilisation est généralement nécessaire afin de franchir la membrane plasmique ; elle n’est pas toujours requise pour une cible de surface."
      },
      {
        "content": "Un antigène situé uniquement à la surface peut parfois être marqué sans perméabiliser toute la cellule.",
        "correct": true,
        "explanation": "Exact. La fixation immobilise les structures et molécules mais peut modifier certains épitopes. Pour détecter une cible intracellulaire par anticorps, une perméabilisation est généralement nécessaire afin de franchir la membrane plasmique ; elle n’est pas toujours requise pour une cible de surface."
      },
      {
        "content": "La fixation peut modifier la conformation de certains épitopes.",
        "correct": true,
        "explanation": "Exact. La fixation immobilise les structures et molécules mais peut modifier certains épitopes. Pour détecter une cible intracellulaire par anticorps, une perméabilisation est généralement nécessaire afin de franchir la membrane plasmique ; elle n’est pas toujours requise pour une cible de surface."
      }
    ],
    "explanation": "La fixation immobilise les structures et molécules mais peut modifier certains épitopes. Pour détecter une cible intracellulaire par anticorps, une perméabilisation est généralement nécessaire afin de franchir la membrane plasmique ; elle n’est pas toujours requise pour une cible de surface."
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant « Fluorophores et microscopie à fluorescence » ?",
    "choices": [
      {
        "content": "Des filtres optiques permettent de séparer la lumière d’excitation du signal émis.",
        "correct": true,
        "explanation": "Exact. Un fluorophore absorbe des photons d’excitation puis émet à une longueur d’onde généralement plus grande. Des filtres séparent excitation et émission ; le photoblanchiment et le recouvrement spectral sont des limites pratiques."
      },
      {
        "content": "Les filtres sont inutiles en microscopie à fluorescence.",
        "correct": false,
        "explanation": "Incorrect. Un fluorophore absorbe des photons d’excitation puis émet à une longueur d’onde généralement plus grande. Des filtres séparent excitation et émission ; le photoblanchiment et le recouvrement spectral sont des limites pratiques."
      },
      {
        "content": "Alexa Fluor 488 peut être excité autour de 488 nm et émet dans le vert.",
        "correct": true,
        "explanation": "Exact. Un fluorophore absorbe des photons d’excitation puis émet à une longueur d’onde généralement plus grande. Des filtres séparent excitation et émission ; le photoblanchiment et le recouvrement spectral sont des limites pratiques."
      },
      {
        "content": "L’émission d’un fluorophore se fait généralement à une longueur d’onde plus grande que l’excitation.",
        "correct": true,
        "explanation": "Exact. Un fluorophore absorbe des photons d’excitation puis émet à une longueur d’onde généralement plus grande. Des filtres séparent excitation et émission ; le photoblanchiment et le recouvrement spectral sont des limites pratiques."
      },
      {
        "content": "Le photoblanchiment augmente indéfiniment la fluorescence sous illumination.",
        "correct": false,
        "explanation": "Incorrect. Un fluorophore absorbe des photons d’excitation puis émet à une longueur d’onde généralement plus grande. Des filtres séparent excitation et émission ; le photoblanchiment et le recouvrement spectral sont des limites pratiques."
      }
    ],
    "explanation": "Un fluorophore absorbe des photons d’excitation puis émet à une longueur d’onde généralement plus grande. Des filtres séparent excitation et émission ; le photoblanchiment et le recouvrement spectral sont des limites pratiques."
  },
  {
    "order": 84,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Immunomarquage à l’or colloïdal », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La taille des particules d’or est toujours exactement de 1 micromètre.",
        "correct": false,
        "explanation": "Incorrect. Des particules d’or colloïdal peuvent être couplées à des anticorps et sont très électron-denses. Elles sont particulièrement utiles en microscopie électronique en transmission pour localiser une cible à l’échelle ultrastructurale."
      },
      {
        "content": "Un anticorps ne peut jamais être couplé à une particule d’or.",
        "correct": false,
        "explanation": "Incorrect. Des particules d’or colloïdal peuvent être couplées à des anticorps et sont très électron-denses. Elles sont particulièrement utiles en microscopie électronique en transmission pour localiser une cible à l’échelle ultrastructurale."
      },
      {
        "content": "Les particules d’or sont invisibles en microscopie électronique parce qu’elles ne diffusent pas les électrons.",
        "correct": false,
        "explanation": "Incorrect. Des particules d’or colloïdal peuvent être couplées à des anticorps et sont très électron-denses. Elles sont particulièrement utiles en microscopie électronique en transmission pour localiser une cible à l’échelle ultrastructurale."
      },
      {
        "content": "Un anticorps peut être associé à des particules d’or pour un immunomarquage.",
        "correct": true,
        "explanation": "Exact. Des particules d’or colloïdal peuvent être couplées à des anticorps et sont très électron-denses. Elles sont particulièrement utiles en microscopie électronique en transmission pour localiser une cible à l’échelle ultrastructurale."
      },
      {
        "content": "L’immunogold est particulièrement adapté à la microscopie électronique en transmission.",
        "correct": true,
        "explanation": "Exact. Des particules d’or colloïdal peuvent être couplées à des anticorps et sont très électron-denses. Elles sont particulièrement utiles en microscopie électronique en transmission pour localiser une cible à l’échelle ultrastructurale."
      }
    ],
    "explanation": "Des particules d’or colloïdal peuvent être couplées à des anticorps et sont très électron-denses. Elles sont particulièrement utiles en microscopie électronique en transmission pour localiser une cible à l’échelle ultrastructurale."
  },
  {
    "order": 85,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Sur le thème « Hybridation in situ », quelle proposition est exacte ?",
    "choices": [
      {
        "content": "La FISH ne peut jamais utiliser de fluorophore.",
        "correct": false,
        "explanation": "Incorrect. L’hybridation in situ détecte une séquence d’ADN ou d’ARN grâce à une sonde nucléique complémentaire. La sonde peut porter ou révéler un marqueur fluorescent ou colorimétrique ; la spécificité dépend notamment de la complémentarité et des conditions d’hybridation."
      },
      {
        "content": "Une sonde dépourvue de toute complémentarité donne nécessairement le même signal spécifique.",
        "correct": false,
        "explanation": "Incorrect. L’hybridation in situ détecte une séquence d’ADN ou d’ARN grâce à une sonde nucléique complémentaire. La sonde peut porter ou révéler un marqueur fluorescent ou colorimétrique ; la spécificité dépend notamment de la complémentarité et des conditions d’hybridation."
      },
      {
        "content": "L’hybridation in situ est limitée aux protéines et ne détecte aucun acide nucléique.",
        "correct": false,
        "explanation": "Incorrect. L’hybridation in situ détecte une séquence d’ADN ou d’ARN grâce à une sonde nucléique complémentaire. La sonde peut porter ou révéler un marqueur fluorescent ou colorimétrique ; la spécificité dépend notamment de la complémentarité et des conditions d’hybridation."
      },
      {
        "content": "L’hybridation in situ peut localiser un ARN dans une cellule ou un tissu.",
        "correct": true,
        "explanation": "Exact. L’hybridation in situ détecte une séquence d’ADN ou d’ARN grâce à une sonde nucléique complémentaire. La sonde peut porter ou révéler un marqueur fluorescent ou colorimétrique ; la spécificité dépend notamment de la complémentarité et des conditions d’hybridation."
      },
      {
        "content": "La température et la composition du tampon n’influencent pas l’hybridation.",
        "correct": false,
        "explanation": "Incorrect. L’hybridation in situ détecte une séquence d’ADN ou d’ARN grâce à une sonde nucléique complémentaire. La sonde peut porter ou révéler un marqueur fluorescent ou colorimétrique ; la spécificité dépend notamment de la complémentarité et des conditions d’hybridation."
      }
    ],
    "explanation": "L’hybridation in situ détecte une séquence d’ADN ou d’ARN grâce à une sonde nucléique complémentaire. La sonde peut porter ou révéler un marqueur fluorescent ou colorimétrique ; la spécificité dépend notamment de la complémentarité et des conditions d’hybridation."
  },
  {
    "order": 86,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment nomme-t-on une molécule qui absorbe une lumière d’excitation et réémet de la fluorescence ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "fluorophore",
        "fluorochrome"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Fluorophore et fluorochrome désignent des molécules utilisées pour produire un signal fluorescent."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Parmi ces affirmations concernant « Protéines fluorescentes et GFP », retenez exactement les 3 justes.",
    "choices": [
      {
        "content": "La GFP est un anticorps dirigé contre toutes les protéines cellulaires.",
        "correct": false,
        "explanation": "Incorrect. La GFP et ses dérivés sont des marqueurs fluorescents génétiquement codés. En fusion avec une protéine d’intérêt, ils permettent de suivre sa localisation et sa dynamique dans des cellules vivantes, sous réserve que le tag ne perturbe pas la fonction de la protéine."
      },
      {
        "content": "Le gène d’une protéine d’intérêt peut être fusionné à celui d’une protéine fluorescente.",
        "correct": true,
        "explanation": "Exact. La GFP et ses dérivés sont des marqueurs fluorescents génétiquement codés. En fusion avec une protéine d’intérêt, ils permettent de suivre sa localisation et sa dynamique dans des cellules vivantes, sous réserve que le tag ne perturbe pas la fonction de la protéine."
      },
      {
        "content": "Une protéine de fusion GFP peut être observée dans une cellule vivante.",
        "correct": true,
        "explanation": "Exact. La GFP et ses dérivés sont des marqueurs fluorescents génétiquement codés. En fusion avec une protéine d’intérêt, ils permettent de suivre sa localisation et sa dynamique dans des cellules vivantes, sous réserve que le tag ne perturbe pas la fonction de la protéine."
      },
      {
        "content": "L’expression d’un tag fluorescent nécessite l’introduction ou l’expression d’une construction génétique adaptée.",
        "correct": true,
        "explanation": "Exact. La GFP et ses dérivés sont des marqueurs fluorescents génétiquement codés. En fusion avec une protéine d’intérêt, ils permettent de suivre sa localisation et sa dynamique dans des cellules vivantes, sous réserve que le tag ne perturbe pas la fonction de la protéine."
      },
      {
        "content": "La fusion d’un tag fluorescent est garantie sans effet sur la fonction de toute protéine.",
        "correct": false,
        "explanation": "Incorrect. La GFP et ses dérivés sont des marqueurs fluorescents génétiquement codés. En fusion avec une protéine d’intérêt, ils permettent de suivre sa localisation et sa dynamique dans des cellules vivantes, sous réserve que le tag ne perturbe pas la fonction de la protéine."
      }
    ],
    "explanation": "La GFP et ses dérivés sont des marqueurs fluorescents génétiquement codés. En fusion avec une protéine d’intérêt, ils permettent de suivre sa localisation et sa dynamique dans des cellules vivantes, sous réserve que le tag ne perturbe pas la fonction de la protéine."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans ce contexte, pour le thème « Transfection et délivrance d’acides nucléiques », quelles propositions doivent être retenues ?",
    "choices": [
      {
        "content": "Une transfection peut conduire à une expression transitoire d’un plasmide.",
        "correct": true,
        "explanation": "Exact. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      },
      {
        "content": "Toute transfection provoque obligatoirement une intégration stable dans le génome.",
        "correct": false,
        "explanation": "Incorrect. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      },
      {
        "content": "Une expression stable nécessite généralement une intégration ou un maintien durable et une sélection adaptée.",
        "correct": true,
        "explanation": "Exact. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      },
      {
        "content": "La lipofection utilise des lipides capables de former des complexes avec l’ADN ou l’ARN.",
        "correct": true,
        "explanation": "Exact. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      },
      {
        "content": "L’efficacité et la toxicité d’une transfection dépendent du type cellulaire.",
        "correct": true,
        "explanation": "Exact. La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
      }
    ],
    "explanation": "La transfection introduit des acides nucléiques dans des cellules eucaryotes par des méthodes chimiques, lipidiques ou physiques. La lipofection forme des complexes lipidiques avec l’ADN ou l’ARN ; l’expression peut être transitoire ou stable selon le protocole."
  },
  {
    "order": 89,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Sur ce schéma simplifié d’un immunomarquage indirect sur cellule fixée et perméabilisée, cliquez sur l’anticorps primaire directement lié à l’antigène intracellulaire.",
    "image": {
      "src": "/images/training/ue14/biologie-cellulaire/organisation-methodes-etude-cellule/immunofluorescence-indirecte-qzone.svg",
      "alt": "Schéma simplifié d’une cellule fixée et perméabilisée montrant un antigène intracellulaire, un anticorps primaire et un anticorps secondaire fluorescent",
      "width": 1200,
      "height": 700
    },
    "expectedZones": [
      {
        "id": "anticorps-primaire",
        "label": "Anticorps primaire",
        "x": 0.61,
        "y": 0.49,
        "tolerance": 0.1
      }
    ],
    "defaultTolerance": 0.1,
    "explanation": "Dans un immunomarquage indirect, l’anticorps primaire reconnaît l’épitope de la protéine cible. L’anticorps secondaire fluorescent se fixe ensuite sur le primaire et permet la détection."
  },
  {
    "order": 90,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle technique utilise des anticorps fluorescents pour localiser un antigène ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "immunofluorescence",
        "immunomarquage fluorescent"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’immunofluorescence localise un antigène au moyen d’anticorps et de fluorophores."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Électroporation », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Des paramètres électriques trop intenses peuvent provoquer une perte de viabilité.",
        "correct": true,
        "explanation": "Exact. L’électroporation applique de brèves impulsions électriques qui augmentent transitoirement la perméabilité membranaire. Elle peut permettre l’entrée d’ADN, d’ARN ou de certaines macromolécules, mais des conditions trop fortes réduisent la viabilité."
      },
      {
        "content": "Des pores transitoires permettent l’entrée de molécules présentes dans le milieu.",
        "correct": true,
        "explanation": "Exact. L’électroporation applique de brèves impulsions électriques qui augmentent transitoirement la perméabilité membranaire. Elle peut permettre l’entrée d’ADN, d’ARN ou de certaines macromolécules, mais des conditions trop fortes réduisent la viabilité."
      },
      {
        "content": "L’électroporation peut être utilisée pour introduire de l’ADN plasmidique.",
        "correct": true,
        "explanation": "Exact. L’électroporation applique de brèves impulsions électriques qui augmentent transitoirement la perméabilité membranaire. Elle peut permettre l’entrée d’ADN, d’ARN ou de certaines macromolécules, mais des conditions trop fortes réduisent la viabilité."
      },
      {
        "content": "Plus la tension est élevée, plus la viabilité est nécessairement meilleure.",
        "correct": false,
        "explanation": "Incorrect. L’électroporation applique de brèves impulsions électriques qui augmentent transitoirement la perméabilité membranaire. Elle peut permettre l’entrée d’ADN, d’ARN ou de certaines macromolécules, mais des conditions trop fortes réduisent la viabilité."
      },
      {
        "content": "Une membrane électroporée reste toujours définitivement ouverte.",
        "correct": false,
        "explanation": "Incorrect. L’électroporation applique de brèves impulsions électriques qui augmentent transitoirement la perméabilité membranaire. Elle peut permettre l’entrée d’ADN, d’ARN ou de certaines macromolécules, mais des conditions trop fortes réduisent la viabilité."
      }
    ],
    "explanation": "L’électroporation applique de brèves impulsions électriques qui augmentent transitoirement la perméabilité membranaire. Elle peut permettre l’entrée d’ADN, d’ARN ou de certaines macromolécules, mais des conditions trop fortes réduisent la viabilité."
  },
  {
    "order": 92,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle étape rend la membrane accessible aux anticorps destinés à une cible intracellulaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "perméabilisation",
        "permeabilisation"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La perméabilisation permet aux anticorps d’atteindre des cibles intracellulaires sur cellules fixées."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle méthode utilise une sonde nucléique complémentaire pour localiser une séquence dans une cellule ou un tissu ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "hybridation in situ",
        "HIS",
        "ISH"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’hybridation in situ repose sur l’appariement d’une sonde avec une séquence nucléique cible."
  },
  {
    "order": 94,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle protéine fluorescente verte génétiquement codée est couramment utilisée comme tag ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "GFP",
        "green fluorescent protein",
        "green fluorescence protein"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La GFP est un marqueur fluorescent génétiquement codé utilisé en fusion avec de nombreuses protéines."
  },
  {
    "order": 95,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle méthode physique applique des impulsions électriques pour augmenter transitoirement la perméabilité membranaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "électroporation",
        "electroporation"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’électroporation crée une perméabilisation réversible permettant l’entrée de molécules."
  },
  {
    "order": 96,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sélectionnez les affirmations compatibles avec « Micro-injection de molécules marquées ».",
    "choices": [
      {
        "content": "Une protéine purifiée marquée peut être introduite par micro-injection.",
        "correct": true,
        "explanation": "Exact. La micro-injection utilise une micropipette fine pour délivrer directement une petite quantité de matériel dans le cytoplasme ou le noyau d’une cellule. Elle offre un contrôle spatial précis mais reste peu adaptée aux très grandes populations."
      },
      {
        "content": "La micro-injection ne permet jamais de cibler le noyau.",
        "correct": false,
        "explanation": "Incorrect. La micro-injection utilise une micropipette fine pour délivrer directement une petite quantité de matériel dans le cytoplasme ou le noyau d’une cellule. Elle offre un contrôle spatial précis mais reste peu adaptée aux très grandes populations."
      },
      {
        "content": "La micro-injection peut également cibler le noyau selon la question expérimentale.",
        "correct": true,
        "explanation": "Exact. La micro-injection utilise une micropipette fine pour délivrer directement une petite quantité de matériel dans le cytoplasme ou le noyau d’une cellule. Elle offre un contrôle spatial précis mais reste peu adaptée aux très grandes populations."
      },
      {
        "content": "La méthode est dépourvue de tout risque mécanique pour la cellule.",
        "correct": false,
        "explanation": "Incorrect. La micro-injection utilise une micropipette fine pour délivrer directement une petite quantité de matériel dans le cytoplasme ou le noyau d’une cellule. Elle offre un contrôle spatial précis mais reste peu adaptée aux très grandes populations."
      },
      {
        "content": "La micropipette reste obligatoirement à l’extérieur de la cellule.",
        "correct": false,
        "explanation": "Incorrect. La micro-injection utilise une micropipette fine pour délivrer directement une petite quantité de matériel dans le cytoplasme ou le noyau d’une cellule. Elle offre un contrôle spatial précis mais reste peu adaptée aux très grandes populations."
      }
    ],
    "explanation": "La micro-injection utilise une micropipette fine pour délivrer directement une petite quantité de matériel dans le cytoplasme ou le noyau d’une cellule. Elle offre un contrôle spatial précis mais reste peu adaptée aux très grandes populations."
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant « Choix entre cellules vivantes et cellules fixées », quelle est l’unique proposition exacte ?",
    "choices": [
      {
        "content": "L’hybridation in situ classique nécessite que la cellule reste métaboliquement active.",
        "correct": false,
        "explanation": "Incorrect. Le choix dépend de la question. Les cellules vivantes permettent le suivi temporel, souvent avec des protéines fluorescentes ou des sondes compatibles. La fixation donne un instantané et facilite l’accès à des cibles intracellulaires pour immunomarquage ou hybridation in situ."
      },
      {
        "content": "Une cellule fixée fournit un instantané de l’état de l’échantillon au moment de la fixation.",
        "correct": true,
        "explanation": "Exact. Le choix dépend de la question. Les cellules vivantes permettent le suivi temporel, souvent avec des protéines fluorescentes ou des sondes compatibles. La fixation donne un instantané et facilite l’accès à des cibles intracellulaires pour immunomarquage ou hybridation in situ."
      },
      {
        "content": "Le choix d’une technique est indépendant de la dynamique que l’on souhaite mesurer.",
        "correct": false,
        "explanation": "Incorrect. Le choix dépend de la question. Les cellules vivantes permettent le suivi temporel, souvent avec des protéines fluorescentes ou des sondes compatibles. La fixation donne un instantané et facilite l’accès à des cibles intracellulaires pour immunomarquage ou hybridation in situ."
      },
      {
        "content": "Les protéines fluorescentes ne peuvent jamais être observées en cellule vivante.",
        "correct": false,
        "explanation": "Incorrect. Le choix dépend de la question. Les cellules vivantes permettent le suivi temporel, souvent avec des protéines fluorescentes ou des sondes compatibles. La fixation donne un instantané et facilite l’accès à des cibles intracellulaires pour immunomarquage ou hybridation in situ."
      },
      {
        "content": "Toute fixation préserve parfaitement toutes les structures et tous les épitopes.",
        "correct": false,
        "explanation": "Incorrect. Le choix dépend de la question. Les cellules vivantes permettent le suivi temporel, souvent avec des protéines fluorescentes ou des sondes compatibles. La fixation donne un instantané et facilite l’accès à des cibles intracellulaires pour immunomarquage ou hybridation in situ."
      }
    ],
    "explanation": "Le choix dépend de la question. Les cellules vivantes permettent le suivi temporel, souvent avec des protéines fluorescentes ou des sondes compatibles. La fixation donne un instantané et facilite l’accès à des cibles intracellulaires pour immunomarquage ou hybridation in situ."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle technique délivre directement une petite quantité de matériel dans une cellule à l’aide d’une micropipette ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "micro-injection",
        "microinjection",
        "micro injection"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La micro-injection permet une délivrance cellule par cellule."
  },
  {
    "order": 99,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans ce contexte, concernant « Anticorps, antigène et épitope », quelles affirmations sont correctes ?",
    "choices": [
      {
        "content": "Le fragment Fc ne constitue pas le site principal de reconnaissance spécifique de l’épitope.",
        "correct": true,
        "explanation": "Exact. Un anticorps reconnaît spécifiquement un épitope porté par un antigène grâce aux régions variables de ses fragments Fab. Le fragment Fc assure d’autres fonctions et peut être reconnu par des anticorps secondaires dans un immunomarquage indirect."
      },
      {
        "content": "La spécificité de l’anticorps est essentielle pour interpréter un immunomarquage.",
        "correct": true,
        "explanation": "Exact. Un anticorps reconnaît spécifiquement un épitope porté par un antigène grâce aux régions variables de ses fragments Fab. Le fragment Fc assure d’autres fonctions et peut être reconnu par des anticorps secondaires dans un immunomarquage indirect."
      },
      {
        "content": "La spécificité d’un anticorps n’a aucun impact sur l’interprétation d’une image.",
        "correct": false,
        "explanation": "Incorrect. Un anticorps reconnaît spécifiquement un épitope porté par un antigène grâce aux régions variables de ses fragments Fab. Le fragment Fc assure d’autres fonctions et peut être reconnu par des anticorps secondaires dans un immunomarquage indirect."
      },
      {
        "content": "Un anticorps possède classiquement deux sites de liaison à l’antigène.",
        "correct": true,
        "explanation": "Exact. Un anticorps reconnaît spécifiquement un épitope porté par un antigène grâce aux régions variables de ses fragments Fab. Le fragment Fc assure d’autres fonctions et peut être reconnu par des anticorps secondaires dans un immunomarquage indirect."
      },
      {
        "content": "Un anticorps secondaire peut reconnaître le fragment Fc d’un anticorps primaire.",
        "correct": true,
        "explanation": "Exact. Un anticorps reconnaît spécifiquement un épitope porté par un antigène grâce aux régions variables de ses fragments Fab. Le fragment Fc assure d’autres fonctions et peut être reconnu par des anticorps secondaires dans un immunomarquage indirect."
      }
    ],
    "explanation": "Un anticorps reconnaît spécifiquement un épitope porté par un antigène grâce aux régions variables de ses fragments Fab. Le fragment Fc assure d’autres fonctions et peut être reconnu par des anticorps secondaires dans un immunomarquage indirect."
  },
  {
    "order": 100,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement « Immunofluorescence directe et indirecte » ?",
    "choices": [
      {
        "content": "En immunofluorescence indirecte, le secondaire remplace l’antigène dans la cellule.",
        "correct": false,
        "explanation": "Incorrect. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      },
      {
        "content": "L’immunofluorescence indirecte peut amplifier le signal grâce à plusieurs anticorps secondaires par primaire.",
        "correct": true,
        "explanation": "Exact. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      },
      {
        "content": "L’autofluorescence ne contribue jamais au bruit de fond.",
        "correct": false,
        "explanation": "Incorrect. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      },
      {
        "content": "Un immunomarquage ne nécessite aucun contrôle expérimental.",
        "correct": false,
        "explanation": "Incorrect. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      },
      {
        "content": "L’utilisation de plusieurs fluorophores interdit toute observation simultanée.",
        "correct": false,
        "explanation": "Incorrect. L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
      }
    ],
    "explanation": "L’immunofluorescence localise un antigène avec des anticorps et un fluorophore. En direct, le primaire est fluorescent ; en indirect, un secondaire fluorescent reconnaît le primaire et peut amplifier le signal."
  }
];
