import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch1 — Généralités sur la cellule */
export const UE14_CELL_CH1_SECTION_A_V2: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de « Définition et diversité des cellules », repérez la seule affirmation correcte.",
    "choices": [
      {
        "content": "La membrane plasmique est absente des cellules procaryotes.",
        "correct": false,
        "explanation": "Incorrect. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Seuls les organismes pluricellulaires sont constitués de cellules.",
        "correct": false,
        "explanation": "Incorrect. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "La cellule constitue l’unité structurale et fonctionnelle fondamentale des organismes vivants.",
        "correct": true,
        "explanation": "Exact. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Toutes les cellules vivantes possèdent exactement la même structure interne.",
        "correct": false,
        "explanation": "Incorrect. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Toute cellule eucaryote mature possède obligatoirement un noyau.",
        "correct": false,
        "explanation": "Incorrect. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      }
    ],
    "explanation": "La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment nomme-t-on l’unité structurale et fonctionnelle fondamentale du vivant ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cellule",
        "la cellule"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La cellule constitue l’unité fondamentale du vivant."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans le cadre de « Composition chimique cellulaire », identifiez l’affirmation correcte.",
    "choices": [
      {
        "content": "L’eau représente généralement la fraction majoritaire de la masse d’une cellule.",
        "correct": true,
        "explanation": "Exact. L’eau constitue généralement la majeure partie de la masse cellulaire. Les biomolécules reposent surtout sur C, H, O et N, auxquels s’ajoutent notamment P, S, ions et petites molécules ; les proportions exactes varient selon le type cellulaire et les conditions."
      },
      {
        "content": "Les lipides ne participent pas à la structure cellulaire.",
        "correct": false,
        "explanation": "Incorrect. L’eau constitue généralement la majeure partie de la masse cellulaire. Les biomolécules reposent surtout sur C, H, O et N, auxquels s’ajoutent notamment P, S, ions et petites molécules ; les proportions exactes varient selon le type cellulaire et les conditions."
      },
      {
        "content": "Les cellules sont constituées uniquement de carbone, hydrogène, oxygène et azote.",
        "correct": false,
        "explanation": "Incorrect. L’eau constitue généralement la majeure partie de la masse cellulaire. Les biomolécules reposent surtout sur C, H, O et N, auxquels s’ajoutent notamment P, S, ions et petites molécules ; les proportions exactes varient selon le type cellulaire et les conditions."
      },
      {
        "content": "Toute cellule contient exactement 70,0 % d’eau quelles que soient ses conditions.",
        "correct": false,
        "explanation": "Incorrect. L’eau constitue généralement la majeure partie de la masse cellulaire. Les biomolécules reposent surtout sur C, H, O et N, auxquels s’ajoutent notamment P, S, ions et petites molécules ; les proportions exactes varient selon le type cellulaire et les conditions."
      },
      {
        "content": "Les ions minéraux sont absents du milieu intracellulaire.",
        "correct": false,
        "explanation": "Incorrect. L’eau constitue généralement la majeure partie de la masse cellulaire. Les biomolécules reposent surtout sur C, H, O et N, auxquels s’ajoutent notamment P, S, ions et petites molécules ; les proportions exactes varient selon le type cellulaire et les conditions."
      }
    ],
    "explanation": "L’eau constitue généralement la majeure partie de la masse cellulaire. Les biomolécules reposent surtout sur C, H, O et N, auxquels s’ajoutent notamment P, S, ions et petites molécules ; les proportions exactes varient selon le type cellulaire et les conditions."
  },
  {
    "order": 4,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Compartiments et structures cellulaires », lesquelles sont incorrectes ?",
    "choices": [
      {
        "content": "Le cytosquelette est une structure rigide et définitivement immobile.",
        "correct": true,
        "explanation": "Incorrect. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "Les ribosomes fonctionnels responsables de la traduction sont enfermés dans le nucléoplasme.",
        "correct": true,
        "explanation": "Incorrect. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "L’appareil de Golgi est une structure extracellulaire.",
        "correct": true,
        "explanation": "Incorrect. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "Le cytosol correspond à la phase aqueuse du cytoplasme dans laquelle baignent de nombreuses structures cellulaires.",
        "correct": false,
        "explanation": "Exact. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "Les mitochondries sont dépourvues de membrane.",
        "correct": true,
        "explanation": "Incorrect. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      }
    ],
    "explanation": "Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire. Ici, il fallait sélectionner les affirmations incorrectes."
  },
  {
    "order": 5,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Concernant « Spécialisation cellulaire : hématie et entérocyte », choisissez exactement 3 affirmations correctes.",
    "choices": [
      {
        "content": "L’hématie humaine mature possède de nombreuses microvillosités apicales.",
        "correct": false,
        "explanation": "Incorrect. La spécialisation associe morphologie et fonction. L’hématie humaine mature est un disque biconcave très déformable, tandis que l’entérocyte possède au pôle apical des microvillosités qui augmentent fortement la surface d’échange."
      },
      {
        "content": "L’hématie humaine mature ne possède ni noyau ni mitochondries.",
        "correct": true,
        "explanation": "Exact. La spécialisation associe morphologie et fonction. L’hématie humaine mature est un disque biconcave très déformable, tandis que l’entérocyte possède au pôle apical des microvillosités qui augmentent fortement la surface d’échange."
      },
      {
        "content": "L’hématie humaine mature présente une forme de disque biconcave favorisant les échanges gazeux et la déformabilité.",
        "correct": true,
        "explanation": "Exact. La spécialisation associe morphologie et fonction. L’hématie humaine mature est un disque biconcave très déformable, tandis que l’entérocyte possède au pôle apical des microvillosités qui augmentent fortement la surface d’échange."
      },
      {
        "content": "L’entérocyte est une cellule épithéliale polarisée de l’intestin.",
        "correct": true,
        "explanation": "Exact. La spécialisation associe morphologie et fonction. L’hématie humaine mature est un disque biconcave très déformable, tandis que l’entérocyte possède au pôle apical des microvillosités qui augmentent fortement la surface d’échange."
      },
      {
        "content": "L’hématie humaine mature est une cellule nucléée riche en réticulum endoplasmique.",
        "correct": false,
        "explanation": "Incorrect. La spécialisation associe morphologie et fonction. L’hématie humaine mature est un disque biconcave très déformable, tandis que l’entérocyte possède au pôle apical des microvillosités qui augmentent fortement la surface d’échange."
      }
    ],
    "explanation": "La spécialisation associe morphologie et fonction. L’hématie humaine mature est un disque biconcave très déformable, tandis que l’entérocyte possède au pôle apical des microvillosités qui augmentent fortement la surface d’échange."
  },
  {
    "order": 6,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Pour « Fonctions et étapes de la vie cellulaire », quelle proposition doit être retenue ?",
    "choices": [
      {
        "content": "Une cellule réalise en permanence des réactions de synthèse et de dégradation moléculaires.",
        "correct": true,
        "explanation": "Exact. Les cellules synthétisent et dégradent des molécules, produisent et utilisent de l’énergie, échangent, communiquent et répondent aux signaux. Ces fonctions sous-tendent croissance, prolifération, différenciation, migration et mort cellulaire."
      },
      {
        "content": "La différenciation impose toujours une prolifération infinie.",
        "correct": false,
        "explanation": "Incorrect. Les cellules synthétisent et dégradent des molécules, produisent et utilisent de l’énergie, échangent, communiquent et répondent aux signaux. Ces fonctions sous-tendent croissance, prolifération, différenciation, migration et mort cellulaire."
      },
      {
        "content": "Une cellule ne transporte jamais de molécules entre ses compartiments.",
        "correct": false,
        "explanation": "Incorrect. Les cellules synthétisent et dégradent des molécules, produisent et utilisent de l’énergie, échangent, communiquent et répondent aux signaux. Ces fonctions sous-tendent croissance, prolifération, différenciation, migration et mort cellulaire."
      },
      {
        "content": "La migration est impossible pour les cellules animales.",
        "correct": false,
        "explanation": "Incorrect. Les cellules synthétisent et dégradent des molécules, produisent et utilisent de l’énergie, échangent, communiquent et répondent aux signaux. Ces fonctions sous-tendent croissance, prolifération, différenciation, migration et mort cellulaire."
      },
      {
        "content": "La communication cellulaire est inutile chez les organismes pluricellulaires.",
        "correct": false,
        "explanation": "Incorrect. Les cellules synthétisent et dégradent des molécules, produisent et utilisent de l’énergie, échangent, communiquent et répondent aux signaux. Ces fonctions sous-tendent croissance, prolifération, différenciation, migration et mort cellulaire."
      }
    ],
    "explanation": "Les cellules synthétisent et dégradent des molécules, produisent et utilisent de l’énergie, échangent, communiquent et répondent aux signaux. Ces fonctions sous-tendent croissance, prolifération, différenciation, migration et mort cellulaire."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant « Microscopies et observation de la cellule » ?",
    "choices": [
      {
        "content": "La MET est la technique standard pour suivre pendant plusieurs heures une cellule vivante non préparée.",
        "correct": false,
        "explanation": "Incorrect. La microscopie optique permet notamment l’observation de cellules vivantes et de signaux fluorescents. Le microscope inversé est pratique pour les cultures adhérentes. La MET explore l’ultrastructure interne et la MEB la topographie de surface ; la microscopie électronique standard n’observe pas des cellules vivantes."
      },
      {
        "content": "La microscopie électronique à balayage renseigne surtout sur la topographie de surface.",
        "correct": true,
        "explanation": "Exact. La microscopie optique permet notamment l’observation de cellules vivantes et de signaux fluorescents. Le microscope inversé est pratique pour les cultures adhérentes. La MET explore l’ultrastructure interne et la MEB la topographie de surface ; la microscopie électronique standard n’observe pas des cellules vivantes."
      },
      {
        "content": "La microscopie à fluorescence détecte des fluorophores excités par une lumière adaptée.",
        "correct": true,
        "explanation": "Exact. La microscopie optique permet notamment l’observation de cellules vivantes et de signaux fluorescents. Le microscope inversé est pratique pour les cultures adhérentes. La MET explore l’ultrastructure interne et la MEB la topographie de surface ; la microscopie électronique standard n’observe pas des cellules vivantes."
      },
      {
        "content": "La microscopie électronique en transmission permet d’étudier l’ultrastructure interne de coupes fines.",
        "correct": true,
        "explanation": "Exact. La microscopie optique permet notamment l’observation de cellules vivantes et de signaux fluorescents. Le microscope inversé est pratique pour les cultures adhérentes. La MET explore l’ultrastructure interne et la MEB la topographie de surface ; la microscopie électronique standard n’observe pas des cellules vivantes."
      },
      {
        "content": "Un microscope optique inversé place les objectifs sous le récipient de culture et facilite l’observation de cellules adhérentes.",
        "correct": true,
        "explanation": "Exact. La microscopie optique permet notamment l’observation de cellules vivantes et de signaux fluorescents. Le microscope inversé est pratique pour les cultures adhérentes. La MET explore l’ultrastructure interne et la MEB la topographie de surface ; la microscopie électronique standard n’observe pas des cellules vivantes."
      }
    ],
    "explanation": "La microscopie optique permet notamment l’observation de cellules vivantes et de signaux fluorescents. Le microscope inversé est pratique pour les cultures adhérentes. La MET explore l’ultrastructure interne et la MEB la topographie de surface ; la microscopie électronique standard n’observe pas des cellules vivantes."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel terme décrit la forme caractéristique de l’hématie humaine mature ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "biconcave",
        "disque biconcave",
        "forme biconcave"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’hématie mature est un disque biconcave très déformable."
  },
  {
    "order": 9,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes sur « Définition et diversité des cellules », cinq sont exactes : sélectionnez-les.",
    "choices": [
      {
        "content": "Toute cellule est délimitée par une membrane plasmique qui sépare le milieu intracellulaire du milieu extracellulaire.",
        "correct": true,
        "explanation": "Exact. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Une cellule peut rester une cellule malgré l’absence de noyau, comme l’hématie humaine mature.",
        "correct": true,
        "explanation": "Exact. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Dans ce cadre, la membrane plasmique est absente des cellules procaryotes.",
        "correct": false,
        "explanation": "Incorrect. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Une cellule est définie par la présence obligatoire de mitochondries.",
        "correct": false,
        "explanation": "Incorrect. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "La forme d’une cellule peut être étroitement liée à sa fonction biologique.",
        "correct": true,
        "explanation": "Exact. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Un organisme pluricellulaire comporte des types cellulaires spécialisés dont la structure est adaptée à la fonction.",
        "correct": true,
        "explanation": "Exact. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "La spécialisation cellulaire n’entraîne aucune différence morphologique entre types cellulaires.",
        "correct": false,
        "explanation": "Incorrect. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Les cellules procaryotes et eucaryotes partagent certains principes d’organisation mais n’ont pas la même architecture interne.",
        "correct": true,
        "explanation": "Exact. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Les cellules d’un même tissu ont nécessairement une forme et une fonction parfaitement identiques.",
        "correct": false,
        "explanation": "Incorrect. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Dans ce cadre, toute cellule eucaryote mature possède obligatoirement un noyau.",
        "correct": false,
        "explanation": "Incorrect. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      }
    ],
    "explanation": "La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles affirmations décrivent correctement « Composition chimique cellulaire » ?",
    "choices": [
      {
        "content": "Dans ce cadre, les ions minéraux sont absents du milieu intracellulaire.",
        "correct": false,
        "explanation": "Incorrect. L’eau constitue généralement la majeure partie de la masse cellulaire. Les biomolécules reposent surtout sur C, H, O et N, auxquels s’ajoutent notamment P, S, ions et petites molécules ; les proportions exactes varient selon le type cellulaire et les conditions."
      },
      {
        "content": "Le carbone, l’hydrogène, l’oxygène et l’azote sont des éléments majeurs de la matière cellulaire.",
        "correct": true,
        "explanation": "Exact. L’eau constitue généralement la majeure partie de la masse cellulaire. Les biomolécules reposent surtout sur C, H, O et N, auxquels s’ajoutent notamment P, S, ions et petites molécules ; les proportions exactes varient selon le type cellulaire et les conditions."
      },
      {
        "content": "L’ADN représente nécessairement la majorité de la masse sèche de toute cellule.",
        "correct": false,
        "explanation": "Incorrect. L’eau constitue généralement la majeure partie de la masse cellulaire. Les biomolécules reposent surtout sur C, H, O et N, auxquels s’ajoutent notamment P, S, ions et petites molécules ; les proportions exactes varient selon le type cellulaire et les conditions."
      },
      {
        "content": "Le phosphore et le soufre participent également à la composition de nombreuses biomolécules.",
        "correct": true,
        "explanation": "Exact. L’eau constitue généralement la majeure partie de la masse cellulaire. Les biomolécules reposent surtout sur C, H, O et N, auxquels s’ajoutent notamment P, S, ions et petites molécules ; les proportions exactes varient selon le type cellulaire et les conditions."
      },
      {
        "content": "Dans ce cadre, les lipides ne participent pas à la structure cellulaire.",
        "correct": false,
        "explanation": "Incorrect. L’eau constitue généralement la majeure partie de la masse cellulaire. Les biomolécules reposent surtout sur C, H, O et N, auxquels s’ajoutent notamment P, S, ions et petites molécules ; les proportions exactes varient selon le type cellulaire et les conditions."
      }
    ],
    "explanation": "L’eau constitue généralement la majeure partie de la masse cellulaire. Les biomolécules reposent surtout sur C, H, O et N, auxquels s’ajoutent notamment P, S, ions et petites molécules ; les proportions exactes varient selon le type cellulaire et les conditions."
  },
  {
    "order": 11,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment nomme-t-on les expansions apicales qui augmentent la surface d’absorption de l’entérocyte ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "microvillosités",
        "microvillosites"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les microvillosités apicales augmentent la surface d’échange de l’entérocyte."
  },
  {
    "order": 12,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Sélectionnez les affirmations compatibles avec « Compartiments et structures cellulaires ».",
    "choices": [
      {
        "content": "Les mitochondries participent notamment à la production d’ATP par phosphorylation oxydative.",
        "correct": true,
        "explanation": "Exact. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "Les mitochondries sont dépourvues de membrane.",
        "correct": false,
        "explanation": "Incorrect. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "Le réticulum endoplasmique et l’appareil de Golgi participent à la synthèse et au trafic de nombreuses protéines et lipides.",
        "correct": true,
        "explanation": "Exact. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "Le cytosquelette est une structure rigide et définitivement immobile.",
        "correct": false,
        "explanation": "Incorrect. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "Le cytosquelette contribue à la forme, à l’organisation interne et aux mouvements cellulaires.",
        "correct": true,
        "explanation": "Exact. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      }
    ],
    "explanation": "Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
  },
  {
    "order": 13,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant « Spécialisation cellulaire : hématie et entérocyte » ?",
    "choices": [
      {
        "content": "L’entérocyte est une cellule épithéliale polarisée de l’intestin.",
        "correct": true,
        "explanation": "Exact. La spécialisation associe morphologie et fonction. L’hématie humaine mature est un disque biconcave très déformable, tandis que l’entérocyte possède au pôle apical des microvillosités qui augmentent fortement la surface d’échange."
      },
      {
        "content": "Le pôle apical de l’entérocyte est orienté vers le tissu conjonctif sous-jacent.",
        "correct": false,
        "explanation": "Incorrect. La spécialisation associe morphologie et fonction. L’hématie humaine mature est un disque biconcave très déformable, tandis que l’entérocyte possède au pôle apical des microvillosités qui augmentent fortement la surface d’échange."
      },
      {
        "content": "L’hématie humaine mature ne possède ni noyau ni mitochondries.",
        "correct": true,
        "explanation": "Exact. La spécialisation associe morphologie et fonction. L’hématie humaine mature est un disque biconcave très déformable, tandis que l’entérocyte possède au pôle apical des microvillosités qui augmentent fortement la surface d’échange."
      },
      {
        "content": "Les microvillosités réduisent la surface d’échange de l’entérocyte.",
        "correct": false,
        "explanation": "Incorrect. La spécialisation associe morphologie et fonction. L’hématie humaine mature est un disque biconcave très déformable, tandis que l’entérocyte possède au pôle apical des microvillosités qui augmentent fortement la surface d’échange."
      },
      {
        "content": "L’entérocyte est une cellule circulante du sang.",
        "correct": false,
        "explanation": "Incorrect. La spécialisation associe morphologie et fonction. L’hématie humaine mature est un disque biconcave très déformable, tandis que l’entérocyte possède au pôle apical des microvillosités qui augmentent fortement la surface d’échange."
      }
    ],
    "explanation": "La spécialisation associe morphologie et fonction. L’hématie humaine mature est un disque biconcave très déformable, tandis que l’entérocyte possède au pôle apical des microvillosités qui augmentent fortement la surface d’échange."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Fonctions et étapes de la vie cellulaire », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La production et l’utilisation d’énergie sont indispensables au fonctionnement cellulaire.",
        "correct": true,
        "explanation": "Exact. Les cellules synthétisent et dégradent des molécules, produisent et utilisent de l’énergie, échangent, communiquent et répondent aux signaux. Ces fonctions sous-tendent croissance, prolifération, différenciation, migration et mort cellulaire."
      },
      {
        "content": "La signalisation cellulaire permet à une cellule de répondre à des stimuli.",
        "correct": true,
        "explanation": "Exact. Les cellules synthétisent et dégradent des molécules, produisent et utilisent de l’énergie, échangent, communiquent et répondent aux signaux. Ces fonctions sous-tendent croissance, prolifération, différenciation, migration et mort cellulaire."
      },
      {
        "content": "La migration est impossible pour les cellules animales.",
        "correct": false,
        "explanation": "Incorrect. Les cellules synthétisent et dégradent des molécules, produisent et utilisent de l’énergie, échangent, communiquent et répondent aux signaux. Ces fonctions sous-tendent croissance, prolifération, différenciation, migration et mort cellulaire."
      },
      {
        "content": "Les cellules échangent de la matière et de l’information avec leur environnement.",
        "correct": true,
        "explanation": "Exact. Les cellules synthétisent et dégradent des molécules, produisent et utilisent de l’énergie, échangent, communiquent et répondent aux signaux. Ces fonctions sous-tendent croissance, prolifération, différenciation, migration et mort cellulaire."
      },
      {
        "content": "La différenciation impose toujours une prolifération infinie.",
        "correct": false,
        "explanation": "Incorrect. Les cellules synthétisent et dégradent des molécules, produisent et utilisent de l’énergie, échangent, communiquent et répondent aux signaux. Ces fonctions sous-tendent croissance, prolifération, différenciation, migration et mort cellulaire."
      }
    ],
    "explanation": "Les cellules synthétisent et dégradent des molécules, produisent et utilisent de l’énergie, échangent, communiquent et répondent aux signaux. Ces fonctions sous-tendent croissance, prolifération, différenciation, migration et mort cellulaire."
  },
  {
    "order": 15,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Sur le thème « Microscopies et observation de la cellule », quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Les électrons d’un MET traversent directement une cellule vivante dans son milieu de culture habituel.",
        "correct": false,
        "explanation": "Incorrect. La microscopie optique permet notamment l’observation de cellules vivantes et de signaux fluorescents. Le microscope inversé est pratique pour les cultures adhérentes. La MET explore l’ultrastructure interne et la MEB la topographie de surface ; la microscopie électronique standard n’observe pas des cellules vivantes."
      },
      {
        "content": "La fluorescence ne nécessite jamais de molécule ou protéine fluorescente.",
        "correct": false,
        "explanation": "Incorrect. La microscopie optique permet notamment l’observation de cellules vivantes et de signaux fluorescents. Le microscope inversé est pratique pour les cultures adhérentes. La MET explore l’ultrastructure interne et la MEB la topographie de surface ; la microscopie électronique standard n’observe pas des cellules vivantes."
      },
      {
        "content": "La microscopie optique offre toujours une meilleure résolution que la microscopie électronique.",
        "correct": false,
        "explanation": "Incorrect. La microscopie optique permet notamment l’observation de cellules vivantes et de signaux fluorescents. Le microscope inversé est pratique pour les cultures adhérentes. La MET explore l’ultrastructure interne et la MEB la topographie de surface ; la microscopie électronique standard n’observe pas des cellules vivantes."
      },
      {
        "content": "La microscopie à fluorescence détecte des fluorophores excités par une lumière adaptée.",
        "correct": true,
        "explanation": "Exact. La microscopie optique permet notamment l’observation de cellules vivantes et de signaux fluorescents. Le microscope inversé est pratique pour les cultures adhérentes. La MET explore l’ultrastructure interne et la MEB la topographie de surface ; la microscopie électronique standard n’observe pas des cellules vivantes."
      },
      {
        "content": "Un microscope inversé ne peut pas être utilisé pour des cellules en culture.",
        "correct": false,
        "explanation": "Incorrect. La microscopie optique permet notamment l’observation de cellules vivantes et de signaux fluorescents. Le microscope inversé est pratique pour les cultures adhérentes. La MET explore l’ultrastructure interne et la MEB la topographie de surface ; la microscopie électronique standard n’observe pas des cellules vivantes."
      }
    ],
    "explanation": "La microscopie optique permet notamment l’observation de cellules vivantes et de signaux fluorescents. Le microscope inversé est pratique pour les cultures adhérentes. La MET explore l’ultrastructure interne et la MEB la topographie de surface ; la microscopie électronique standard n’observe pas des cellules vivantes."
  },
  {
    "order": 16,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sur le thème « Définition et diversité des cellules », sélectionnez exactement 2 propositions exactes.",
    "choices": [
      {
        "content": "Un organisme pluricellulaire comporte des types cellulaires spécialisés dont la structure est adaptée à la fonction.",
        "correct": true,
        "explanation": "Exact. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Les cellules procaryotes et eucaryotes partagent certains principes d’organisation mais n’ont pas la même architecture interne.",
        "correct": true,
        "explanation": "Exact. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Les cellules d’un même tissu ont nécessairement une forme et une fonction parfaitement identiques.",
        "correct": false,
        "explanation": "Incorrect. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "La spécialisation cellulaire n’entraîne aucune différence morphologique entre types cellulaires.",
        "correct": false,
        "explanation": "Incorrect. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      },
      {
        "content": "Une cellule est définie par la présence obligatoire de mitochondries.",
        "correct": false,
        "explanation": "Incorrect. La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
      }
    ],
    "explanation": "La cellule est l’unité structurale et fonctionnelle fondamentale du vivant. Toutes les cellules sont limitées par une membrane plasmique, mais leur organisation interne varie fortement, notamment entre procaryotes et eucaryotes et selon la spécialisation cellulaire."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour le thème « Composition chimique cellulaire », quelles propositions doivent être retenues ?",
    "choices": [
      {
        "content": "Les ions et petites molécules participent au fonctionnement cellulaire même s’ils ne sont pas des macromolécules.",
        "correct": true,
        "explanation": "Exact. L’eau constitue généralement la majeure partie de la masse cellulaire. Les biomolécules reposent surtout sur C, H, O et N, auxquels s’ajoutent notamment P, S, ions et petites molécules ; les proportions exactes varient selon le type cellulaire et les conditions."
      },
      {
        "content": "L’ADN représente nécessairement la majorité de la masse sèche de toute cellule.",
        "correct": false,
        "explanation": "Incorrect. L’eau constitue généralement la majeure partie de la masse cellulaire. Les biomolécules reposent surtout sur C, H, O et N, auxquels s’ajoutent notamment P, S, ions et petites molécules ; les proportions exactes varient selon le type cellulaire et les conditions."
      },
      {
        "content": "Les protéines, acides nucléiques, lipides et glucides contribuent à la composition de la cellule.",
        "correct": true,
        "explanation": "Exact. L’eau constitue généralement la majeure partie de la masse cellulaire. Les biomolécules reposent surtout sur C, H, O et N, auxquels s’ajoutent notamment P, S, ions et petites molécules ; les proportions exactes varient selon le type cellulaire et les conditions."
      },
      {
        "content": "Le phosphore et le soufre participent également à la composition de nombreuses biomolécules.",
        "correct": true,
        "explanation": "Exact. L’eau constitue généralement la majeure partie de la masse cellulaire. Les biomolécules reposent surtout sur C, H, O et N, auxquels s’ajoutent notamment P, S, ions et petites molécules ; les proportions exactes varient selon le type cellulaire et les conditions."
      },
      {
        "content": "La composition d’une cellule est rigoureusement identique dans tous les tissus.",
        "correct": false,
        "explanation": "Incorrect. L’eau constitue généralement la majeure partie de la masse cellulaire. Les biomolécules reposent surtout sur C, H, O et N, auxquels s’ajoutent notamment P, S, ions et petites molécules ; les proportions exactes varient selon le type cellulaire et les conditions."
      }
    ],
    "explanation": "L’eau constitue généralement la majeure partie de la masse cellulaire. Les biomolécules reposent surtout sur C, H, O et N, auxquels s’ajoutent notamment P, S, ions et petites molécules ; les proportions exactes varient selon le type cellulaire et les conditions."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de microscopie électronique explore surtout la topographie de surface : MEB ou MET ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "MEB",
        "microscopie électronique à balayage",
        "microscopie electronique a balayage"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La MEB renseigne principalement sur la surface de l’échantillon."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant « Compartiments et structures cellulaires », quelle est l’unique proposition exacte ?",
    "choices": [
      {
        "content": "Le noyau est le site principal de traduction des protéines cytosoliques.",
        "correct": false,
        "explanation": "Incorrect. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "Les ribosomes fonctionnels responsables de la traduction sont enfermés dans le nucléoplasme.",
        "correct": false,
        "explanation": "Incorrect. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "Le cytosol est synonyme exact de l’ensemble du cytoplasme, organites compris.",
        "correct": false,
        "explanation": "Incorrect. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "Dans ce cadre, le réticulum endoplasmique et l’appareil de Golgi participent à la synthèse et au trafic de nombreuses protéines et lipides.",
        "correct": true,
        "explanation": "Exact. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      },
      {
        "content": "Le réticulum endoplasmique n’a aucun lien avec le trafic intracellulaire.",
        "correct": false,
        "explanation": "Incorrect. Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
      }
    ],
    "explanation": "Une cellule eucaryote associe membrane plasmique, cytosol, cytosquelette et divers organites. Les compartiments ont des fonctions spécialisées ; les ribosomes assurent la traduction dans le cytosol ou à la surface du RER, alors que le noyau contient l’essentiel du génome nucléaire."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de microscopie électronique utilise des électrons transmis à travers une coupe fine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "MET",
        "microscopie électronique en transmission",
        "microscopie electronique en transmission"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La MET est adaptée à l’ultrastructure interne sur coupes fines."
  },
  {
    "order": 21,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de « Spécialisation cellulaire : hématie et entérocyte », sélectionnez les propositions exactes.",
    "choices": [
      {
        "content": "Dans ce cadre, le pôle apical de l’entérocyte est orienté vers le tissu conjonctif sous-jacent.",
        "correct": false,
        "explanation": "Incorrect. La spécialisation associe morphologie et fonction. L’hématie humaine mature est un disque biconcave très déformable, tandis que l’entérocyte possède au pôle apical des microvillosités qui augmentent fortement la surface d’échange."
      },
      {
        "content": "Les microvillosités augmentent la surface disponible pour l’absorption intestinale.",
        "correct": true,
        "explanation": "Exact. La spécialisation associe morphologie et fonction. L’hématie humaine mature est un disque biconcave très déformable, tandis que l’entérocyte possède au pôle apical des microvillosités qui augmentent fortement la surface d’échange."
      },
      {
        "content": "Les microvillosités sont situées au pôle apical de l’entérocyte.",
        "correct": true,
        "explanation": "Exact. La spécialisation associe morphologie et fonction. L’hématie humaine mature est un disque biconcave très déformable, tandis que l’entérocyte possède au pôle apical des microvillosités qui augmentent fortement la surface d’échange."
      },
      {
        "content": "Dans ce cadre, l’entérocyte est une cellule épithéliale polarisée de l’intestin.",
        "correct": true,
        "explanation": "Exact. La spécialisation associe morphologie et fonction. L’hématie humaine mature est un disque biconcave très déformable, tandis que l’entérocyte possède au pôle apical des microvillosités qui augmentent fortement la surface d’échange."
      },
      {
        "content": "La polarité de l’entérocyte contribue à orienter les échanges entre lumière intestinale et milieu intérieur.",
        "correct": true,
        "explanation": "Exact. La spécialisation associe morphologie et fonction. L’hématie humaine mature est un disque biconcave très déformable, tandis que l’entérocyte possède au pôle apical des microvillosités qui augmentent fortement la surface d’échange."
      }
    ],
    "explanation": "La spécialisation associe morphologie et fonction. L’hématie humaine mature est un disque biconcave très déformable, tandis que l’entérocyte possède au pôle apical des microvillosités qui augmentent fortement la surface d’échange."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment appelle-t-on un microscope dont les objectifs sont placés sous le récipient de culture ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "microscope inversé",
        "microscope inverse",
        "microscopie inversée",
        "microscopie inversee"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le microscope inversé est particulièrement pratique pour les cultures adhérentes."
  }
];
