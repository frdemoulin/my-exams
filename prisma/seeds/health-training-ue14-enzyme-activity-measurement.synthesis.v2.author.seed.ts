import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

export const UE14_BIOCH_CH15_SYNTHESIS_V2: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse du chapitre — la définition de la cinétique enzymatique / le katal : quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La cinétique enzymatique étudie la vitesse de la réaction.",
        "correct": true,
        "explanation": "La cinétique enzymatique porte sur la vitesse et ses déterminants."
      },
      {
        "content": "Un katal correspond à 1 µmol par minute.",
        "correct": false,
        "explanation": "Le katal exprime des moles par seconde."
      },
      {
        "content": "Le symbole de l’unité est kat.",
        "correct": true,
        "explanation": "Le katal exprime des moles par seconde."
      },
      {
        "content": "Elle exclut toute notion de vitesse.",
        "correct": false,
        "explanation": "La cinétique enzymatique porte sur la vitesse et ses déterminants."
      }
    ],
    "explanation": "La cinétique enzymatique porte sur la vitesse et ses déterminants. Le katal exprime des moles par seconde."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse du chapitre — la concentration totale en enzyme / les exemples de Kcat : quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "[E]t combine enzyme libre et enzyme engagée dans le complexe ES.",
        "correct": true,
        "explanation": "La concentration totale est la somme enzyme libre + enzyme liée au substrat."
      },
      {
        "content": "L’anhydrase carbonique est donnée à 1 s−1.",
        "correct": false,
        "explanation": "Les valeurs illustrent de fortes différences de turnover."
      },
      {
        "content": "Elle cite environ 100 s−1 pour la chymotrypsine.",
        "correct": true,
        "explanation": "Les valeurs illustrent de fortes différences de turnover."
      },
      {
        "content": "L’enzyme libre est exclue de la concentration totale.",
        "correct": false,
        "explanation": "La concentration totale est la somme enzyme libre + enzyme liée au substrat."
      }
    ],
    "explanation": "La concentration totale est la somme enzyme libre + enzyme liée au substrat. Les valeurs illustrent de fortes différences de turnover."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse du chapitre — la formule de la vitesse initiale par absorbance / la saturation enzymatique et Kcat : quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Cette relation permet d’obtenir une vitesse de formation du produit.",
        "correct": true,
        "explanation": "La relation dérive directement de Beer-Lambert."
      },
      {
        "content": "Le plateau de vitesse correspond à Km.",
        "correct": false,
        "explanation": "La saturation relie Vmax et Kcat à la capacité catalytique maximale."
      },
      {
        "content": "La définition de Kcat suppose l’enzyme saturée en substrat.",
        "correct": true,
        "explanation": "La saturation relie Vmax et Kcat à la capacité catalytique maximale."
      },
      {
        "content": "La fiche donne V0 = ε·l/(ΔA/Δt).",
        "correct": false,
        "explanation": "La relation dérive directement de Beer-Lambert."
      }
    ],
    "explanation": "La relation dérive directement de Beer-Lambert. La saturation relie Vmax et Kcat à la capacité catalytique maximale."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse du chapitre — la conversion UI-nkat / les exemples de Km : quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La fiche donne 1 UI = 16,67 nkat.",
        "correct": true,
        "explanation": "Les conversions 1 UI = 16,67 nkat et 1 nkat = 0,060 UI sont à retenir."
      },
      {
        "content": "La pénicillinase/benzylpénicilline est donnée à 12000 mM.",
        "correct": false,
        "explanation": "Les exemples illustrent des Km très différents."
      },
      {
        "content": "Elle cite anhydrase carbonique/CO2 avec environ 12000 µM.",
        "correct": true,
        "explanation": "Les exemples illustrent des Km très différents."
      },
      {
        "content": "1 nkat vaut exactement 1000 UI.",
        "correct": false,
        "explanation": "Les conversions 1 UI = 16,67 nkat et 1 nkat = 0,060 UI sont à retenir."
      }
    ],
    "explanation": "Les conversions 1 UI = 16,67 nkat et 1 nkat = 0,060 UI sont à retenir. Les exemples illustrent des Km très différents."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse du chapitre — l’activité spécifique / la réaction d’ordre deux : quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une unité citée est UI·mg−1 d’enzyme.",
        "correct": true,
        "explanation": "L’activité spécifique rapporte l’activité catalytique à une masse d’enzyme."
      },
      {
        "content": "La vitesse est indépendante des concentrations.",
        "correct": false,
        "explanation": "Ordre deux : vitesse proportionnelle au produit des concentrations de deux réactifs."
      },
      {
        "content": "La relation est v=k[A][B].",
        "correct": true,
        "explanation": "Ordre deux : vitesse proportionnelle au produit des concentrations de deux réactifs."
      },
      {
        "content": "Elle est identique au Km.",
        "correct": false,
        "explanation": "L’activité spécifique rapporte l’activité catalytique à une masse d’enzyme."
      }
    ],
    "explanation": "L’activité spécifique rapporte l’activité catalytique à une masse d’enzyme. Ordre deux : vitesse proportionnelle au produit des concentrations de deux réactifs."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse du chapitre — la courbe de Michaelis-Menten / l’effet de la concentration en substrat : quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Plusieurs mesures de v0 à différentes [S] permettent d’obtenir la courbe.",
        "correct": true,
        "explanation": "La courbe v0=f([S]) tend vers Vmax."
      },
      {
        "content": "Le substrat est absent des facteurs étudiés.",
        "correct": false,
        "explanation": "La concentration en substrat module la vitesse jusqu’à saturation."
      },
      {
        "content": "La vitesse v0 augmente avec la concentration en substrat dans la fiche.",
        "correct": true,
        "explanation": "La concentration en substrat module la vitesse jusqu’à saturation."
      },
      {
        "content": "La vitesse décroît toujours quand [S] augmente.",
        "correct": false,
        "explanation": "La courbe v0=f([S]) tend vers Vmax."
      }
    ],
    "explanation": "La courbe v0=f([S]) tend vers Vmax. La concentration en substrat module la vitesse jusqu’à saturation."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse du chapitre — l’équation de Michaelis-Menten / les repères de température de la fiche : quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La fiche donne v0 = Vmax[S]/(Km+[S]).",
        "correct": true,
        "explanation": "L’équation de Michaelis-Menten permet de relier les paramètres cinétiques."
      },
      {
        "content": "Les kératinocytes sont donnés à 100°C.",
        "correct": false,
        "explanation": "Les températures optimales dépendent du contexte biologique."
      },
      {
        "content": "Elle cite environ 32°C pour les kératinocytes.",
        "correct": true,
        "explanation": "Les températures optimales dépendent du contexte biologique."
      },
      {
        "content": "Si [S]=Km, alors v0=2Vmax.",
        "correct": false,
        "explanation": "L’équation de Michaelis-Menten permet de relier les paramètres cinétiques."
      }
    ],
    "explanation": "L’équation de Michaelis-Menten permet de relier les paramètres cinétiques. Les températures optimales dépendent du contexte biologique."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse du chapitre — la représentation de Lineweaver-Burk / l’inhibition incompétitive : quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L’équation est une droite dont la pente vaut Km/Vmax.",
        "correct": true,
        "explanation": "La double inverse linéarise la relation de Michaelis-Menten."
      },
      {
        "content": "Vmax et Km sont tous deux inchangés.",
        "correct": false,
        "explanation": "Incompétitif : fixation sur ES uniquement, modifications proportionnelles de Km et Vmax."
      },
      {
        "content": "La représentation associée donne des droites parallèles.",
        "correct": true,
        "explanation": "Incompétitif : fixation sur ES uniquement, modifications proportionnelles de Km et Vmax."
      },
      {
        "content": "L’ordonnée à l’origine vaut Km.",
        "correct": false,
        "explanation": "La double inverse linéarise la relation de Michaelis-Menten."
      }
    ],
    "explanation": "La double inverse linéarise la relation de Michaelis-Menten. Incompétitif : fixation sur ES uniquement, modifications proportionnelles de Km et Vmax."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Synthèse du chapitre : sélectionnez exactement les trois affirmations correctes.",
    "requiredSelectionCount": 3,
    "choices": [
      {
        "content": "La fiche donne v0 = Vmax[S]/(Km+[S]).",
        "correct": true,
        "explanation": "L’équation de Michaelis-Menten permet de relier les paramètres cinétiques."
      },
      {
        "content": "La vitesse ne varie pas avec la diminution de [A] dans ce modèle.",
        "correct": true,
        "explanation": "Ordre zéro : vitesse constante par rapport à la concentration considérée."
      },
      {
        "content": "Le modèle concerne la transformation d’un substrat en produit.",
        "correct": true,
        "explanation": "Ordre un : vitesse proportionnelle à la concentration du substrat."
      },
      {
        "content": "La réaction d’ordre deux comporte nécessairement un seul substrat.",
        "correct": false,
        "explanation": "Ordre deux : vitesse proportionnelle au produit des concentrations de deux réactifs."
      },
      {
        "content": "La pente vaut Vmax/Km dans la formule donnée.",
        "correct": false,
        "explanation": "La double inverse linéarise la relation de Michaelis-Menten."
      },
      {
        "content": "La fiche n’aborde aucune représentation double inverse.",
        "correct": false,
        "explanation": "Le support local imprime 1/Km pour l’abscisse ; la banque le signale explicitement sans le corriger silencieusement."
      }
    ],
    "explanation": "Cette question croise plusieurs repères de la section ; chaque proposition doit être évaluée séparément."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Synthèse du chapitre : sélectionnez exactement les cinq affirmations correctes.",
    "requiredSelectionCount": 5,
    "choices": [
      {
        "content": "La fiche donne un exemple A+B→C.",
        "correct": true,
        "explanation": "Ordre deux : vitesse proportionnelle au produit des concentrations de deux réactifs."
      },
      {
        "content": "L’équation est une droite dont la pente vaut Km/Vmax.",
        "correct": true,
        "explanation": "La double inverse linéarise la relation de Michaelis-Menten."
      },
      {
        "content": "L’ordonnée à l’origine est donnée comme 1/Vmax.",
        "correct": true,
        "explanation": "Le support local imprime 1/Km pour l’abscisse ; la banque le signale explicitement sans le corriger silencieusement."
      },
      {
        "content": "La fiche présente Lineweaver-Burk comme une représentation utilisée pour déterminer Km et Vmax précisément.",
        "correct": true,
        "explanation": "Deux représentations permettent de relier les données expérimentales à Km/Vmax."
      },
      {
        "content": "À forte concentration, la courbe de Michaelis-Menten tend vers la saturation.",
        "correct": true,
        "explanation": "La concentration en substrat module la vitesse jusqu’à saturation."
      },
      {
        "content": "La concentration en enzyme ne modifie jamais la pente initiale.",
        "correct": false,
        "explanation": "Plus d’enzyme augmente la vitesse initiale sans déplacer l’équilibre final."
      },
      {
        "content": "Toutes les enzymes ont exactement le même pH optimal.",
        "correct": false,
        "explanation": "Le pH influence l’état du site actif et la stabilité de l’enzyme."
      },
      {
        "content": "La température n’a aucun effet sur une enzyme.",
        "correct": false,
        "explanation": "La température accélère les réactions jusqu’à ce que la dénaturation domine."
      }
    ],
    "explanation": "La sélection longue vérifie la maîtrise simultanée de plusieurs notions du chapitre."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez la relation entre substrat et produit, la concentration d’activité catalytique Ccat et les exemples de Km.",
    "choices": [
      {
        "content": "L’apparition du produit reflète la disparition du substrat.",
        "correct": true,
        "explanation": "Deux approches de mesure de vitesse sont présentées."
      },
      {
        "content": "Elle peut s’exprimer en UI·L−1.",
        "correct": true,
        "explanation": "La Ccat est une activité catalytique par unité de volume."
      },
      {
        "content": "La pénicillinase/benzylpénicilline est donnée à 12000 mM.",
        "correct": false,
        "explanation": "Les exemples illustrent des Km très différents."
      },
      {
        "content": "La concentration du produit n’a aucun lien avec la réaction.",
        "correct": false,
        "explanation": "Deux approches de mesure de vitesse sont présentées."
      }
    ],
    "explanation": "Deux approches de mesure de vitesse sont présentées. La Ccat est une activité catalytique par unité de volume. Les exemples illustrent des Km très différents."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez la pente ΔA/Δt, la courbe de Michaelis-Menten et l’effet de la température.",
    "choices": [
      {
        "content": "La fiche recommande plusieurs mesures par minute.",
        "correct": true,
        "explanation": "La pente d’absorbance est convertie en vitesse initiale."
      },
      {
        "content": "Plusieurs mesures de v0 à différentes [S] permettent d’obtenir la courbe.",
        "correct": true,
        "explanation": "La courbe v0=f([S]) tend vers Vmax."
      },
      {
        "content": "La température n’a aucun effet sur une enzyme.",
        "correct": false,
        "explanation": "La température accélère les réactions jusqu’à ce que la dénaturation domine."
      },
      {
        "content": "Une seule mesure après plusieurs jours est nécessaire.",
        "correct": false,
        "explanation": "La pente d’absorbance est convertie en vitesse initiale."
      }
    ],
    "explanation": "La pente d’absorbance est convertie en vitesse initiale. La courbe v0=f([S]) tend vers Vmax. La température accélère les réactions jusqu’à ce que la dénaturation domine."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez le katal, la réaction d’ordre deux et la phase stationnaire.",
    "choices": [
      {
        "content": "La fiche présente le katal comme une unité cohérente.",
        "correct": true,
        "explanation": "Le katal exprime des moles par seconde."
      },
      {
        "content": "La fiche donne un exemple A+B→C.",
        "correct": true,
        "explanation": "Ordre deux : vitesse proportionnelle au produit des concentrations de deux réactifs."
      },
      {
        "content": "La phase stationnaire est définie par l’absence totale de substrat.",
        "correct": false,
        "explanation": "La phase stationnaire fournit la fenêtre de mesure de la vitesse initiale."
      },
      {
        "content": "Le katal est une unité de masse moléculaire.",
        "correct": false,
        "explanation": "Le katal exprime des moles par seconde."
      }
    ],
    "explanation": "Le katal exprime des moles par seconde. Ordre deux : vitesse proportionnelle au produit des concentrations de deux réactifs. La phase stationnaire fournit la fenêtre de mesure de la vitesse initiale."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez l’activité spécifique, l’effet de la température et la constante catalytique Kcat.",
    "choices": [
      {
        "content": "L’activité spécifique rapporte la quantité transformée au temps et à la masse d’enzyme.",
        "correct": true,
        "explanation": "L’activité spécifique rapporte l’activité catalytique à une masse d’enzyme."
      },
      {
        "content": "Au-delà d’environ 60°C, une dénaturation peut faire diminuer l’activité.",
        "correct": true,
        "explanation": "La température accélère les réactions jusqu’à ce que la dénaturation domine."
      },
      {
        "content": "Kcat est la concentration de substrat à Vmax/2.",
        "correct": false,
        "explanation": "Kcat est un nombre de cycles catalytiques par unité de temps à saturation."
      },
      {
        "content": "Elle est identique au Km.",
        "correct": false,
        "explanation": "L’activité spécifique rapporte l’activité catalytique à une masse d’enzyme."
      }
    ],
    "explanation": "L’activité spécifique rapporte l’activité catalytique à une masse d’enzyme. La température accélère les réactions jusqu’à ce que la dénaturation domine. Kcat est un nombre de cycles catalytiques par unité de temps à saturation."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez la définition de Km par Vmax/2, le pourcentage d’inhibition et la réaction d’ordre zéro.",
    "choices": [
      {
        "content": "Km est donc lu sur l’axe des concentrations à mi-vitesse maximale.",
        "correct": true,
        "explanation": "Km correspond à [S] lorsque v0 vaut la moitié de Vmax."
      },
      {
        "content": "Une vitesse apparente plus faible donne un pourcentage d’inhibition positif.",
        "correct": true,
        "explanation": "Le pourcentage compare la vitesse de référence et la vitesse apparente en présence d’inhibiteur."
      },
      {
        "content": "Sa vitesse est proportionnelle à [A][B].",
        "correct": false,
        "explanation": "Ordre zéro : vitesse constante par rapport à la concentration considérée."
      },
      {
        "content": "Km est la vitesse maximale elle-même.",
        "correct": false,
        "explanation": "Km correspond à [S] lorsque v0 vaut la moitié de Vmax."
      }
    ],
    "explanation": "Km correspond à [S] lorsque v0 vaut la moitié de Vmax. Le pourcentage compare la vitesse de référence et la vitesse apparente en présence d’inhibiteur. Ordre zéro : vitesse constante par rapport à la concentration considérée."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez la réaction d’ordre un, la pente ΔA/Δt et la Taq polymérase.",
    "choices": [
      {
        "content": "Le modèle concerne la transformation d’un substrat en produit.",
        "correct": true,
        "explanation": "Ordre un : vitesse proportionnelle à la concentration du substrat."
      },
      {
        "content": "La pente d’absorbance ΔA/Δt permet de suivre la réaction.",
        "correct": true,
        "explanation": "La pente d’absorbance est convertie en vitesse initiale."
      },
      {
        "content": "Elle est utilisée pour mesurer la pression oncotique.",
        "correct": false,
        "explanation": "La Taq polymérase illustre l’adaptation enzymatique aux températures élevées."
      },
      {
        "content": "La formule donnée est v=k[A][B].",
        "correct": false,
        "explanation": "Ordre un : vitesse proportionnelle à la concentration du substrat."
      }
    ],
    "explanation": "Ordre un : vitesse proportionnelle à la concentration du substrat. La pente d’absorbance est convertie en vitesse initiale. La Taq polymérase illustre l’adaptation enzymatique aux températures élevées."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Maîtrise de synthèse — Quel symbole représente le coefficient d’absorption dans la relation A = ε·l·[P] ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "ε",
        "epsilon",
        "eps"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Beer-Lambert relie absorbance et concentration du produit."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez la Taq polymérase, la courbe de Michaelis-Menten et l’activité spécifique.",
    "choices": [
      {
        "content": "Elle est utilisée en PCR.",
        "correct": true,
        "explanation": "La Taq polymérase illustre l’adaptation enzymatique aux températures élevées."
      },
      {
        "content": "Plusieurs mesures de v0 à différentes [S] permettent d’obtenir la courbe.",
        "correct": true,
        "explanation": "La courbe v0=f([S]) tend vers Vmax."
      },
      {
        "content": "Elle rapporte l’activité à la masse de substrat et jamais à celle de l’enzyme.",
        "correct": false,
        "explanation": "L’activité spécifique rapporte l’activité catalytique à une masse d’enzyme."
      },
      {
        "content": "La Taq polymérase est une immunoglobuline humaine.",
        "correct": false,
        "explanation": "La Taq polymérase illustre l’adaptation enzymatique aux températures élevées."
      }
    ],
    "explanation": "La Taq polymérase illustre l’adaptation enzymatique aux températures élevées. La courbe v0=f([S]) tend vers Vmax. L’activité spécifique rapporte l’activité catalytique à une masse d’enzyme."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez le pourcentage d’inhibition, la réaction d’ordre deux et la réaction d’ordre deux.",
    "choices": [
      {
        "content": "Une vitesse apparente plus faible donne un pourcentage d’inhibition positif.",
        "correct": true,
        "explanation": "Le pourcentage compare la vitesse de référence et la vitesse apparente en présence d’inhibiteur."
      },
      {
        "content": "La fiche donne un exemple A+B→C.",
        "correct": true,
        "explanation": "Ordre deux : vitesse proportionnelle au produit des concentrations de deux réactifs."
      },
      {
        "content": "La relation est v=k uniquement.",
        "correct": false,
        "explanation": "Ordre deux : vitesse proportionnelle au produit des concentrations de deux réactifs."
      },
      {
        "content": "Le calcul ne dépend d’aucune vitesse.",
        "correct": false,
        "explanation": "Le pourcentage compare la vitesse de référence et la vitesse apparente en présence d’inhibiteur."
      }
    ],
    "explanation": "Le pourcentage compare la vitesse de référence et la vitesse apparente en présence d’inhibiteur. Ordre deux : vitesse proportionnelle au produit des concentrations de deux réactifs. Ordre deux : vitesse proportionnelle au produit des concentrations de deux réactifs."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez la concentration totale en enzyme, l’effet de la température et l’inhibition non compétitive.",
    "choices": [
      {
        "content": "La fiche donne [E]t = [E] + [ES].",
        "correct": true,
        "explanation": "La concentration totale est la somme enzyme libre + enzyme liée au substrat."
      },
      {
        "content": "Au-delà d’environ 60°C, une dénaturation peut faire diminuer l’activité.",
        "correct": true,
        "explanation": "La température accélère les réactions jusqu’à ce que la dénaturation domine."
      },
      {
        "content": "Il se fixe exclusivement à l’enzyme libre au site actif.",
        "correct": false,
        "explanation": "Non compétitif : fixation sur E ou ES avec même Ki, Km inchangé, Vmax diminuée."
      },
      {
        "content": "L’enzyme libre est exclue de la concentration totale.",
        "correct": false,
        "explanation": "La concentration totale est la somme enzyme libre + enzyme liée au substrat."
      }
    ],
    "explanation": "La concentration totale est la somme enzyme libre + enzyme liée au substrat. La température accélère les réactions jusqu’à ce que la dénaturation domine. Non compétitif : fixation sur E ou ES avec même Ki, Km inchangé, Vmax diminuée."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Maîtrise de synthèse : sélectionnez exactement les trois affirmations correctes.",
    "requiredSelectionCount": 3,
    "choices": [
      {
        "content": "La fiche donne V0 = (ΔA/Δt)/(ε·l).",
        "correct": true,
        "explanation": "La relation dérive directement de Beer-Lambert."
      },
      {
        "content": "La phase stationnaire est privilégiée pour la mesure.",
        "correct": true,
        "explanation": "Le déroulement temporel comprend plusieurs phases, dont la stationnaire est la fenêtre analytique principale."
      },
      {
        "content": "Son unité peut s’écrire µmol·min−1.",
        "correct": true,
        "explanation": "La fiche définit 1 UI = 1 µmol·min−1."
      },
      {
        "content": "Un katal correspond à 1 µmol par minute.",
        "correct": false,
        "explanation": "Le katal exprime des moles par seconde."
      },
      {
        "content": "1 nkat vaut exactement 1000 UI.",
        "correct": false,
        "explanation": "Les conversions 1 UI = 16,67 nkat et 1 nkat = 0,060 UI sont à retenir."
      },
      {
        "content": "La fiche l’exprime uniquement en secondes.",
        "correct": false,
        "explanation": "La Ccat est une activité catalytique par unité de volume."
      }
    ],
    "explanation": "Cette question croise plusieurs repères de la section ; chaque proposition doit être évaluée séparément."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Maîtrise de synthèse : sélectionnez exactement les cinq affirmations correctes.",
    "requiredSelectionCount": 5,
    "choices": [
      {
        "content": "La Ccat rapporte l’activité au volume de solution enzymatique.",
        "correct": true,
        "explanation": "La Ccat est une activité catalytique par unité de volume."
      },
      {
        "content": "Kcat s’exprime en s−1.",
        "correct": true,
        "explanation": "Kcat est un nombre de cycles catalytiques par unité de temps à saturation."
      },
      {
        "content": "Elle cite environ 100 s−1 pour la chymotrypsine.",
        "correct": true,
        "explanation": "Les valeurs illustrent de fortes différences de turnover."
      },
      {
        "content": "L’activité spécifique rapporte la quantité transformée au temps et à la masse d’enzyme.",
        "correct": true,
        "explanation": "L’activité spécifique rapporte l’activité catalytique à une masse d’enzyme."
      },
      {
        "content": "Elle peut s’exprimer en UI·mol−1 d’enzyme.",
        "correct": true,
        "explanation": "L’AMS est une activité par mole d’enzyme."
      },
      {
        "content": "L’AMS rapporte exclusivement au pH.",
        "correct": false,
        "explanation": "Le dénominateur distingue ces trois paramètres."
      },
      {
        "content": "Kcat est défini uniquement lorsque [S]=0.",
        "correct": false,
        "explanation": "La saturation relie Vmax et Kcat à la capacité catalytique maximale."
      },
      {
        "content": "La courbe ne présente aucun plateau.",
        "correct": false,
        "explanation": "La courbe v0=f([S]) tend vers Vmax."
      }
    ],
    "explanation": "La sélection longue vérifie la maîtrise simultanée de plusieurs notions du chapitre."
  }
];
