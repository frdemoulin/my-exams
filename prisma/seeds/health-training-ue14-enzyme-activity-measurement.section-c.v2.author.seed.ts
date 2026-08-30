import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — 4.2 Mesure d'une activité enzymatique — Section C — Lineweaver-Burk et inhibitions réversibles */
export const UE14_BIOCH_CH15_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la représentation de Lineweaver-Burk, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle trace 1/v0 en fonction de 1/[S].",
        "correct": true,
        "explanation": "La transformation double inverse linéarise l'équation idéale."
      },
      {
        "content": "La représentation trace v0 contre [S].",
        "correct": false,
        "explanation": "Cela décrit le graphe Michaelis-Menten direct."
      },
      {
        "content": "La pente vaut Vmax/Km.",
        "correct": false,
        "explanation": "Elle vaut Km/Vmax."
      },
      {
        "content": "La pente vaut Km/Vmax.",
        "correct": true,
        "explanation": "Elle combine les deux paramètres."
      },
      {
        "content": "L'ordonnée à l'origine vaut 1/Vmax.",
        "correct": true,
        "explanation": "On lit Vmax à partir de l'interception y."
      }
    ],
    "explanation": "Dans Lineweaver-Burk : pente=Km/Vmax, y-intercept=1/Vmax et x-intercept=-1/Km."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement l'estimation moderne de Km et Vmax ?",
    "choices": [
      {
        "content": "Une droite de Lineweaver-Burk suffit à prouver un mécanisme moléculaire unique.",
        "correct": false,
        "explanation": "Plusieurs mécanismes peuvent produire des signatures similaires."
      },
      {
        "content": "Les faibles concentrations de substrat sont fortement pondérées visuellement après inversion.",
        "correct": true,
        "explanation": "Les erreurs sur 1/v et 1/[S] deviennent hétéroscédastiques."
      },
      {
        "content": "Lineweaver-Burk est toujours la méthode la plus précise pour ajuster Km et Vmax.",
        "correct": false,
        "explanation": "La régression non linéaire est généralement préférable."
      },
      {
        "content": "L'inversion des données ne change jamais la structure des erreurs.",
        "correct": false,
        "explanation": "Elle les amplifie de façon non uniforme."
      },
      {
        "content": "La régression non linéaire ne peut pas être utilisée sur une hyperbole.",
        "correct": false,
        "explanation": "C'est précisément son intérêt."
      }
    ],
    "explanation": "Lineweaver-Burk est utile pour visualiser, mais la régression non linéaire directe est généralement plus fiable pour estimer les paramètres."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel paramètre reste inchangé lors d'une inhibition compétitive pure : Km ou Vmax ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Vmax",
        "Vmax reste inchangée"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Compétitive pure : Vmax inchangée, Km apparent augmenté ; les droites se croisent sur l'axe 1/v."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'inhibition incompétitive, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Km apparent diminue dans la même proportion que Vmax.",
        "correct": true,
        "explanation": "Le rapport Km/Vmax reste constant."
      },
      {
        "content": "Les droites de Lineweaver-Burk sont parallèles.",
        "correct": true,
        "explanation": "La pente Km/Vmax est inchangée."
      },
      {
        "content": "Vmax reste inchangée.",
        "correct": false,
        "explanation": "Elle diminue."
      },
      {
        "content": "L'inhibiteur se lie au complexe ES dans le modèle incompétitif idéal.",
        "correct": true,
        "explanation": "Il ne se lie pas à l'enzyme libre."
      },
      {
        "content": "Vmax apparente diminue.",
        "correct": true,
        "explanation": "Une fraction de ES est piégée sous forme inactive ESI."
      }
    ],
    "explanation": "Incompétitive : fixation sur ES, baisse proportionnelle de Km et Vmax, droites Lineweaver-Burk parallèles."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur l'inhibition non compétitive pure, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Km apparent reste inchangé dans le cas pur.",
        "correct": true,
        "explanation": "C'est ce qui distingue le cas non compétitif idéal d'un mixte général."
      },
      {
        "content": "Vmax reste inchangée.",
        "correct": false,
        "explanation": "Elle diminue."
      },
      {
        "content": "Km augmente nécessairement dans le cas non compétitif pur.",
        "correct": false,
        "explanation": "Il reste inchangé."
      },
      {
        "content": "Sur Lineweaver-Burk, les droites se coupent sur l'axe des abscisses.",
        "correct": true,
        "explanation": "L'abscisse -1/Km reste inchangée."
      },
      {
        "content": "Les droites sont parallèles.",
        "correct": false,
        "explanation": "Cela correspond à l'incompétitive idéale."
      }
    ],
    "explanation": "Non compétitive pure : Vmax diminue, Km reste inchangé ; c'est un cas particulier du modèle mixte.",
    "requiredSelectionCount": 2
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'inhibition mixte, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Le cas non compétitif pur n'a aucun lien avec le modèle mixte.",
        "correct": false,
        "explanation": "C'est un cas particulier."
      },
      {
        "content": "En inhibition mixte, Km doit toujours augmenter.",
        "correct": false,
        "explanation": "Il peut augmenter ou diminuer."
      },
      {
        "content": "L'inhibiteur peut se lier à E et à ES avec des affinités différentes.",
        "correct": true,
        "explanation": "C'est le schéma mixte général."
      },
      {
        "content": "Km apparent peut augmenter ou diminuer selon les affinités relatives de l'inhibiteur pour E et ES.",
        "correct": true,
        "explanation": "Il n'existe pas une direction universelle."
      },
      {
        "content": "L'inhibiteur ne peut se lier qu'à l'enzyme libre.",
        "correct": false,
        "explanation": "Le modèle mixte permet la liaison à E et ES."
      }
    ],
    "explanation": "Mixte : Vmax diminue et Km peut monter ou baisser ; le non compétitif pur est le cas d'affinités égales pour E et ES."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement la comparaison des inhibitions réversibles ?",
    "choices": [
      {
        "content": "Non compétitive pure : Km↓ et Vmax↓ dans la même proportion.",
        "correct": false,
        "explanation": "Cela décrit l'incompétitive."
      },
      {
        "content": "Compétitive pure : Km inchangé, Vmax↓.",
        "correct": false,
        "explanation": "Cela décrit le non compétitif pur."
      },
      {
        "content": "Compétitive pure : Km↑, Vmax inchangée.",
        "correct": true,
        "explanation": "Une forte [S] peut surmonter la compétition idéale."
      },
      {
        "content": "Incompétitive : Km↑, Vmax inchangée.",
        "correct": false,
        "explanation": "Cela décrit le compétitif pur."
      },
      {
        "content": "Mixte général : Vmax toujours inchangée.",
        "correct": false,
        "explanation": "Elle diminue."
      }
    ],
    "explanation": "Les signatures Km/Vmax permettent de distinguer les modèles idéaux d'inhibition réversible."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle est l'ordonnée à l'origine d'une droite de Lineweaver-Burk ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "1/Vmax",
        "un sur Vmax"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Dans Lineweaver-Burk : pente=Km/Vmax, y-intercept=1/Vmax et x-intercept=-1/Km."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Toute inhibition non compétitive signifie que l'inhibiteur se lie exclusivement à ES.",
        "correct": false,
        "explanation": "Cela décrit l'incompétitive."
      },
      {
        "content": "Lineweaver-Burk reste utile pédagogiquement pour visualiser certains schémas d'inhibition.",
        "correct": true,
        "explanation": "Sa lisibilité ne signifie pas qu'elle soit le meilleur estimateur numérique."
      },
      {
        "content": "Km augmente nécessairement dans le cas non compétitif pur.",
        "correct": false,
        "explanation": "Il reste inchangé."
      },
      {
        "content": "La régression non linéaire ne peut pas être utilisée sur une hyperbole.",
        "correct": false,
        "explanation": "C'est précisément son intérêt."
      },
      {
        "content": "Vmax apparente diminue.",
        "correct": true,
        "explanation": "Une partie de l'enzyme devient catalytiquement indisponible."
      },
      {
        "content": "L'ajustement doit idéalement tenir compte du modèle d'erreur expérimental.",
        "correct": true,
        "explanation": "La qualité du fit dépend des données et de leur variance."
      },
      {
        "content": "Lineweaver-Burk est toujours la méthode la plus précise pour ajuster Km et Vmax.",
        "correct": false,
        "explanation": "La régression non linéaire est généralement préférable."
      },
      {
        "content": "Elle est un cas particulier d'inhibition mixte où l'inhibiteur a la même affinité pour E et ES.",
        "correct": true,
        "explanation": "Les deux branches d'inhibition sont équilibrées."
      },
      {
        "content": "L'inversion des données ne change jamais la structure des erreurs.",
        "correct": false,
        "explanation": "Elle les amplifie de façon non uniforme."
      },
      {
        "content": "Km apparent reste inchangé dans le cas pur.",
        "correct": true,
        "explanation": "C'est ce qui distingue le cas non compétitif idéal d'un mixte général."
      }
    ],
    "explanation": "Lineweaver-Burk est utile pour visualiser, mais la régression non linéaire directe est généralement plus fiable pour estimer les paramètres. Non compétitive pure : Vmax diminue, Km reste inchangé ; c'est un cas particulier du modèle mixte."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'inhibition compétitive pure ?",
    "choices": [
      {
        "content": "L'inhibiteur se lie à l'enzyme libre sur un site incompatible avec la liaison simultanée du substrat dans le modèle compétitif pur.",
        "correct": true,
        "explanation": "Il entre fonctionnellement en compétition avec S."
      },
      {
        "content": "Km apparent diminue.",
        "correct": false,
        "explanation": "Il augmente."
      },
      {
        "content": "Km apparent augmente.",
        "correct": true,
        "explanation": "Il faut davantage de substrat pour atteindre Vmax/2."
      },
      {
        "content": "Vmax apparente reste inchangée.",
        "correct": true,
        "explanation": "Une forte [S] peut surmonter la compétition dans le modèle idéal."
      },
      {
        "content": "Vmax diminue nécessairement dans une inhibition compétitive pure réversible.",
        "correct": false,
        "explanation": "Elle reste inchangée."
      }
    ],
    "explanation": "Compétitive pure : Vmax inchangée, Km apparent augmenté ; les droites se croisent sur l'axe 1/v."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la représentation de Lineweaver-Burk, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La pente vaut Km/Vmax.",
        "correct": true,
        "explanation": "Elle combine les deux paramètres."
      },
      {
        "content": "L'ordonnée à l'origine vaut Km.",
        "correct": false,
        "explanation": "Elle vaut 1/Vmax."
      },
      {
        "content": "L'ordonnée à l'origine vaut 1/Vmax.",
        "correct": true,
        "explanation": "On lit Vmax à partir de l'interception y."
      },
      {
        "content": "L'abscisse à l'origine vaut -1/Km.",
        "correct": true,
        "explanation": "Le signe négatif est essentiel."
      },
      {
        "content": "Elle trace 1/v0 en fonction de 1/[S].",
        "correct": true,
        "explanation": "La transformation double inverse linéarise l'équation idéale."
      }
    ],
    "explanation": "Dans Lineweaver-Burk : pente=Km/Vmax, y-intercept=1/Vmax et x-intercept=-1/Km."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Lineweaver-Burk reste-t-elle utile pour visualiser des motifs d'inhibition ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "oui",
        "oui, surtout pédagogiquement"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Lineweaver-Burk est utile pour visualiser, mais la régression non linéaire directe est généralement plus fiable pour estimer les paramètres."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur l'inhibition compétitive pure, laquelle est correcte ?",
    "choices": [
      {
        "content": "Les droites Lineweaver-Burk sont parallèles.",
        "correct": false,
        "explanation": "Cela caractérise l'inhibition incompétitive idéale."
      },
      {
        "content": "L'inhibiteur se fixe exclusivement sur ES.",
        "correct": false,
        "explanation": "Cela décrit l'incompétitive."
      },
      {
        "content": "L'inhibiteur se lie à l'enzyme libre sur un site incompatible avec la liaison simultanée du substrat dans le modèle compétitif pur.",
        "correct": true,
        "explanation": "Il entre fonctionnellement en compétition avec S."
      },
      {
        "content": "Vmax diminue nécessairement dans une inhibition compétitive pure réversible.",
        "correct": false,
        "explanation": "Elle reste inchangée."
      },
      {
        "content": "Km apparent diminue.",
        "correct": false,
        "explanation": "Il augmente."
      }
    ],
    "explanation": "Compétitive pure : Vmax inchangée, Km apparent augmenté ; les droites se croisent sur l'axe 1/v."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'inhibition incompétitive ?",
    "choices": [
      {
        "content": "Vmax reste inchangée.",
        "correct": false,
        "explanation": "Elle diminue."
      },
      {
        "content": "Vmax apparente diminue.",
        "correct": true,
        "explanation": "Une fraction de ES est piégée sous forme inactive ESI."
      },
      {
        "content": "Les droites de Lineweaver-Burk sont parallèles.",
        "correct": true,
        "explanation": "La pente Km/Vmax est inchangée."
      },
      {
        "content": "Les droites Lineweaver-Burk se croisent sur l'axe y.",
        "correct": false,
        "explanation": "En incompétitif idéal, elles sont parallèles."
      },
      {
        "content": "L'inhibiteur se fixe uniquement sur l'enzyme libre.",
        "correct": false,
        "explanation": "Cela décrit le modèle compétitif pur."
      }
    ],
    "explanation": "Incompétitive : fixation sur ES, baisse proportionnelle de Km et Vmax, droites Lineweaver-Burk parallèles."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel paramètre diminue dans l'inhibition non compétitive pure ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Vmax",
        "Vmax apparente"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Non compétitive pure : Vmax diminue, Km reste inchangé ; c'est un cas particulier du modèle mixte."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant l'inhibition mixte.",
    "choices": [
      {
        "content": "Km apparent peut augmenter ou diminuer selon les affinités relatives de l'inhibiteur pour E et ES.",
        "correct": true,
        "explanation": "Il n'existe pas une direction universelle."
      },
      {
        "content": "Vmax ne change jamais.",
        "correct": false,
        "explanation": "Elle diminue."
      },
      {
        "content": "Le cas non compétitif pur correspond à des affinités égales pour E et ES.",
        "correct": true,
        "explanation": "Km reste alors inchangé."
      },
      {
        "content": "Le cas non compétitif pur n'a aucun lien avec le modèle mixte.",
        "correct": false,
        "explanation": "C'est un cas particulier."
      },
      {
        "content": "L'inhibiteur ne peut se lier qu'à l'enzyme libre.",
        "correct": false,
        "explanation": "Le modèle mixte permet la liaison à E et ES."
      }
    ],
    "explanation": "Mixte : Vmax diminue et Km peut monter ou baisser ; le non compétitif pur est le cas d'affinités égales pour E et ES.",
    "requiredSelectionCount": 2
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement la comparaison des inhibitions réversibles ?",
    "choices": [
      {
        "content": "Mixte général : Vmax↓ et Km peut ↑ ou ↓.",
        "correct": true,
        "explanation": "Le sens dépend des constantes d'inhibition."
      },
      {
        "content": "Incompétitive : Km↑, Vmax inchangée.",
        "correct": false,
        "explanation": "Cela décrit le compétitif pur."
      },
      {
        "content": "Compétitive pure : Km↑, Vmax inchangée.",
        "correct": true,
        "explanation": "Une forte [S] peut surmonter la compétition idéale."
      },
      {
        "content": "Incompétitive : Km↓ et Vmax↓ dans la même proportion.",
        "correct": true,
        "explanation": "Les droites Lineweaver-Burk sont parallèles."
      },
      {
        "content": "Compétitive pure : Km inchangé, Vmax↓.",
        "correct": false,
        "explanation": "Cela décrit le non compétitif pur."
      }
    ],
    "explanation": "Les signatures Km/Vmax permettent de distinguer les modèles idéaux d'inhibition réversible."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur la représentation de Lineweaver-Burk, laquelle est correcte ?",
    "choices": [
      {
        "content": "L'abscisse à l'origine vaut +1/Km.",
        "correct": false,
        "explanation": "Elle vaut -1/Km."
      },
      {
        "content": "L'abscisse à l'origine vaut -1/Km.",
        "correct": true,
        "explanation": "Le signe négatif est essentiel."
      },
      {
        "content": "L'ordonnée à l'origine vaut Km.",
        "correct": false,
        "explanation": "Elle vaut 1/Vmax."
      },
      {
        "content": "La représentation trace v0 contre [S].",
        "correct": false,
        "explanation": "Cela décrit le graphe Michaelis-Menten direct."
      },
      {
        "content": "La pente vaut Vmax/Km.",
        "correct": false,
        "explanation": "Elle vaut Km/Vmax."
      }
    ],
    "explanation": "Dans Lineweaver-Burk : pente=Km/Vmax, y-intercept=1/Vmax et x-intercept=-1/Km."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'estimation moderne de Km et Vmax, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Lineweaver-Burk reste utile pédagogiquement pour visualiser certains schémas d'inhibition.",
        "correct": true,
        "explanation": "Sa lisibilité ne signifie pas qu'elle soit le meilleur estimateur numérique."
      },
      {
        "content": "La régression non linéaire directe sur l'équation de Michaelis-Menten est généralement préférée pour estimer Km et Vmax.",
        "correct": true,
        "explanation": "Elle évite la distorsion des erreurs créée par la double inversion."
      },
      {
        "content": "Les faibles concentrations de substrat sont fortement pondérées visuellement après inversion.",
        "correct": true,
        "explanation": "Les erreurs sur 1/v et 1/[S] deviennent hétéroscédastiques."
      },
      {
        "content": "Lineweaver-Burk est toujours la méthode la plus précise pour ajuster Km et Vmax.",
        "correct": false,
        "explanation": "La régression non linéaire est généralement préférable."
      },
      {
        "content": "L'ajustement doit idéalement tenir compte du modèle d'erreur expérimental.",
        "correct": true,
        "explanation": "La qualité du fit dépend des données et de leur variance."
      }
    ],
    "explanation": "Lineweaver-Burk est utile pour visualiser, mais la régression non linéaire directe est généralement plus fiable pour estimer les paramètres."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel paramètre reste inchangé lors d'une inhibition compétitive pure : Km ou Vmax ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Vmax",
        "Vmax reste inchangée"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Compétitive pure : Vmax inchangée, Km apparent augmenté ; les droites se croisent sur l'axe 1/v."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Vmax apparente diminue.",
        "correct": true,
        "explanation": "Une fraction de ES est piégée sous forme inactive ESI."
      },
      {
        "content": "Non compétitive pure : Km↓ et Vmax↓ dans la même proportion.",
        "correct": false,
        "explanation": "Cela décrit l'incompétitive."
      },
      {
        "content": "Incompétitive : Km↑, Vmax inchangée.",
        "correct": false,
        "explanation": "Cela décrit le compétitif pur."
      },
      {
        "content": "Les droites de Lineweaver-Burk sont parallèles.",
        "correct": true,
        "explanation": "La pente Km/Vmax est inchangée."
      },
      {
        "content": "L'inhibiteur se lie au complexe ES dans le modèle incompétitif idéal.",
        "correct": true,
        "explanation": "Il ne se lie pas à l'enzyme libre."
      },
      {
        "content": "Vmax reste inchangée.",
        "correct": false,
        "explanation": "Elle diminue."
      },
      {
        "content": "Mixte général : Vmax toujours inchangée.",
        "correct": false,
        "explanation": "Elle diminue."
      },
      {
        "content": "Compétitive pure : Km↑, Vmax inchangée.",
        "correct": true,
        "explanation": "Une forte [S] peut surmonter la compétition idéale."
      },
      {
        "content": "Km augmente alors que Vmax ne change pas.",
        "correct": false,
        "explanation": "Cela correspond au compétitif pur."
      },
      {
        "content": "Km apparent diminue dans la même proportion que Vmax.",
        "correct": true,
        "explanation": "Le rapport Km/Vmax reste constant."
      }
    ],
    "explanation": "Incompétitive : fixation sur ES, baisse proportionnelle de Km et Vmax, droites Lineweaver-Burk parallèles. Les signatures Km/Vmax permettent de distinguer les modèles idéaux d'inhibition réversible."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel paramètre reste inchangé dans l'inhibition non compétitive pure ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Km",
        "Km apparent"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Non compétitive pure : Vmax diminue, Km reste inchangé ; c'est un cas particulier du modèle mixte."
  }
];
