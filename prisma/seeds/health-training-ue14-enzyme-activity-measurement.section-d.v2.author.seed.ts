import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — 4.2 Mesure d'une activité enzymatique — Section D — Facteurs influençant l'activité et calculs */
export const UE14_BIOCH_CH15_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'effet de la concentration en substrat, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Une forte [S] peut réduire l'effet d'un inhibiteur compétitif réversible.",
        "correct": true,
        "explanation": "Elle favorise la liaison du substrat."
      },
      {
        "content": "Le substrat ne peut jamais influencer une inhibition compétitive.",
        "correct": false,
        "explanation": "Il peut la surmonter partiellement."
      },
      {
        "content": "L'effet d'une augmentation de [S] est maximal dans la zone non saturée.",
        "correct": true,
        "explanation": "Près de Vmax, le gain devient faible."
      },
      {
        "content": "À saturation, doubler [S] double encore v0.",
        "correct": false,
        "explanation": "L'effet devient très faible."
      },
      {
        "content": "v0 augmente linéairement sans limite avec [S].",
        "correct": false,
        "explanation": "La vitesse tend vers Vmax."
      }
    ],
    "explanation": "L'effet de [S] sature ; une forte [S] peut concurrencer un inhibiteur compétitif mais pas restaurer tous les modèles d'inhibition."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur l'effet de la concentration en enzyme, laquelle est correcte ?",
    "choices": [
      {
        "content": "La quantité d'enzyme n'a aucun effet sur la vitesse.",
        "correct": false,
        "explanation": "Elle est un déterminant majeur."
      },
      {
        "content": "Doubler [E]t divise Vmax par deux.",
        "correct": false,
        "explanation": "Vmax double."
      },
      {
        "content": "Km est directement proportionnel à [E]t dans le modèle idéal.",
        "correct": false,
        "explanation": "Il ne l'est pas."
      },
      {
        "content": "Augmenter [E]t déplace l'équilibre thermodynamique vers les produits.",
        "correct": false,
        "explanation": "Keq est inchangée."
      },
      {
        "content": "Vmax est proportionnelle à [E]t.",
        "correct": true,
        "explanation": "Vmax=kcat[E]t."
      }
    ],
    "explanation": "La vitesse et Vmax sont proportionnelles à la quantité d'enzyme active, alors que Keq et Km ne changent pas dans le modèle idéal."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Pourquoi le pH peut-il modifier l'activité d'une enzyme sans la dénaturer ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "modification de la protonation du site actif",
        "ionisation des résidus catalytiques",
        "état de protonation"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le pH agit sur les états de protonation et parfois sur la stabilité ; les profils d'activité sont enzyme-dépendants."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'effet de la température sur l'activité enzymatique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La température n'influence jamais la vitesse chimique.",
        "correct": false,
        "explanation": "Elle influence fortement les constantes de vitesse."
      },
      {
        "content": "La température optimale mesurée dépend aussi du temps de dosage.",
        "correct": true,
        "explanation": "Une enzyme peut être rapide mais instable à température élevée."
      },
      {
        "content": "À température suffisamment élevée, l'inactivation ou la dénaturation peut dominer et faire chuter l'activité.",
        "correct": true,
        "explanation": "Le seuil dépend de l'enzyme et de la durée."
      },
      {
        "content": "Toutes les enzymes se dénaturent exactement à 60 °C.",
        "correct": false,
        "explanation": "La stabilité est très variable."
      },
      {
        "content": "Il n'existe pas de température optimale universelle à 37 °C.",
        "correct": true,
        "explanation": "Les enzymes d'organismes thermophiles illustrent une grande diversité."
      }
    ],
    "explanation": "La température accélère la chimie mais peut aussi inactiver la protéine ; l'optimum résulte de ces effets concurrents."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur le pourcentage d'inhibition, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Le pourcentage d'inhibition est indépendant de [S].",
        "correct": false,
        "explanation": "Il peut en dépendre fortement."
      },
      {
        "content": "Le pourcentage d'inhibition peut s'écrire 100×(v0-vI)/v0.",
        "correct": true,
        "explanation": "v0 est la vitesse sans inhibiteur et vI la vitesse avec inhibiteur."
      },
      {
        "content": "Une vitesse avec inhibiteur supérieure à v0 correspond forcément à 100 % d'inhibition.",
        "correct": false,
        "explanation": "La formule donnerait une inhibition négative, signe d'activation ou de variabilité."
      },
      {
        "content": "Le pourcentage dépend des conditions, notamment [S] et [I].",
        "correct": true,
        "explanation": "Il n'est pas une constante intrinsèque unique de l'inhibiteur."
      },
      {
        "content": "Le pourcentage d'inhibition vaut 100×vI/v0.",
        "correct": false,
        "explanation": "Cela donne l'activité résiduelle en pourcentage."
      }
    ],
    "explanation": "Le pourcentage d'inhibition mesure la perte relative de vitesse et dépend du contexte expérimental.",
    "requiredSelectionCount": 2
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement un calcul de vitesse par Beer-Lambert ?",
    "choices": [
      {
        "content": "Avec ΔA/Δt=0,12 min⁻¹, ε=6 mM⁻¹·cm⁻¹ et l=1 cm, la vitesse vaut 0,020 mM·min⁻¹.",
        "correct": true,
        "explanation": "0,12/(6×1)=0,020."
      },
      {
        "content": "0,020 mM·min⁻¹ correspond à 20 µmol·L⁻¹·min⁻¹.",
        "correct": true,
        "explanation": "1 mM=1000 µmol/L."
      },
      {
        "content": "Si l augmente à absorbance-pente identique, la vitesse calculée diminue.",
        "correct": true,
        "explanation": "v est inversement proportionnelle à l dans la conversion."
      },
      {
        "content": "La longueur de cuve n'intervient jamais dans le calcul.",
        "correct": false,
        "explanation": "Elle apparaît au dénominateur."
      },
      {
        "content": "Il faut utiliser un ε correspondant à l'espèce et à la longueur d'onde suivies.",
        "correct": true,
        "explanation": "Le coefficient d'extinction n'est pas universel."
      }
    ],
    "explanation": "La pente spectrophotométrique se convertit par v=(ΔA/Δt)/(εl), avec attention aux unités."
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur les conversions U-katal, laquelle est correcte ?",
    "choices": [
      {
        "content": "U et kat sont des unités de concentration.",
        "correct": false,
        "explanation": "Ce sont des unités d'activité catalytique."
      },
      {
        "content": "60 U correspondent à 60 kat.",
        "correct": false,
        "explanation": "Ils correspondent à 1 µkat."
      },
      {
        "content": "1 nkat correspond à 0,060 U.",
        "correct": true,
        "explanation": "1 nmol/s=60 nmol/min=0,060 µmol/min."
      },
      {
        "content": "1 nkat correspond à 60 U.",
        "correct": false,
        "explanation": "Il correspond à 0,060 U."
      },
      {
        "content": "2 U correspondent à 2 nkat.",
        "correct": false,
        "explanation": "Il faut multiplier par 16,67."
      }
    ],
    "explanation": "Les conversions reposent sur 1 U=1 µmol/min≈16,67 nkat."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Si l'ordonnée à l'origine vaut 0,02 min·µmol⁻¹, quelle est Vmax en µmol·min⁻¹ ?",
    "answer": {
      "type": "number",
      "value": 50,
      "tolerance": 0
    },
    "explanation": "Lineweaver-Burk permet des calculs simples, mais les paramètres expérimentaux sont mieux estimés par régression non linéaire."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Toute baisse d'activité liée au pH prouve une dénaturation irréversible.",
        "correct": false,
        "explanation": "Elle peut être réversible et due à l'ionisation."
      },
      {
        "content": "Le pH n'affecte jamais les charges des résidus catalytiques.",
        "correct": false,
        "explanation": "Il modifie leur protonation."
      },
      {
        "content": "Non compétitive pure : intersection sur l'axe y.",
        "correct": false,
        "explanation": "Elle se fait sur l'axe x dans le cas idéal."
      },
      {
        "content": "Compétitive pure : intersection sur l'axe y.",
        "correct": true,
        "explanation": "Vmax est inchangée."
      },
      {
        "content": "Une variation de pH peut modifier l'activité sans provoquer une dénaturation globale.",
        "correct": true,
        "explanation": "L'ionisation de quelques groupes catalytiques peut suffire."
      },
      {
        "content": "Mixte général : toutes les droites se coupent obligatoirement sur un axe.",
        "correct": false,
        "explanation": "L'intersection peut être hors des axes."
      },
      {
        "content": "Compétitive pure : droites parallèles.",
        "correct": false,
        "explanation": "Cela correspond à l'incompétitive."
      },
      {
        "content": "Des pH extrêmes peuvent déstabiliser certaines protéines.",
        "correct": true,
        "explanation": "La sensibilité varie fortement selon l'enzyme."
      },
      {
        "content": "Mixte général : intersection typiquement à gauche de l'axe y, avec position dépendant des affinités relatives.",
        "correct": true,
        "explanation": "Vmax diminue et Km peut varier dans les deux sens."
      },
      {
        "content": "Incompétitive : droites parallèles.",
        "correct": true,
        "explanation": "Km/Vmax reste constant."
      }
    ],
    "explanation": "Les motifs de Lineweaver-Burk résument les effets sur Km et Vmax, sans constituer à eux seuls une preuve mécanistique. Le pH agit sur les états de protonation et parfois sur la stabilité ; les profils d'activité sont enzyme-dépendants."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'effet de la concentration en substrat, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'effet d'une augmentation de [S] est maximal dans la zone non saturée.",
        "correct": true,
        "explanation": "Près de Vmax, le gain devient faible."
      },
      {
        "content": "Une forte [S] annule toujours toute inhibition, quel qu'en soit le type.",
        "correct": false,
        "explanation": "Ce n'est pas vrai."
      },
      {
        "content": "À saturation, doubler [S] double encore v0.",
        "correct": false,
        "explanation": "L'effet devient très faible."
      },
      {
        "content": "v0 augmente linéairement sans limite avec [S].",
        "correct": false,
        "explanation": "La vitesse tend vers Vmax."
      },
      {
        "content": "Une forte [S] peut réduire l'effet d'un inhibiteur compétitif réversible.",
        "correct": true,
        "explanation": "Elle favorise la liaison du substrat."
      }
    ],
    "explanation": "L'effet de [S] sature ; une forte [S] peut concurrencer un inhibiteur compétitif mais pas restaurer tous les modèles d'inhibition."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'effet de la concentration en substrat, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une forte [S] peut réduire l'effet d'un inhibiteur compétitif réversible.",
        "correct": true,
        "explanation": "Elle favorise la liaison du substrat."
      },
      {
        "content": "À saturation, doubler [S] double encore v0.",
        "correct": false,
        "explanation": "L'effet devient très faible."
      },
      {
        "content": "L'effet d'une augmentation de [S] est maximal dans la zone non saturée.",
        "correct": true,
        "explanation": "Près de Vmax, le gain devient faible."
      },
      {
        "content": "Une forte [S] ne restaure pas Vmax en inhibition non compétitive pure.",
        "correct": true,
        "explanation": "Le mécanisme n'est pas une simple compétition pour le même site."
      },
      {
        "content": "v0 augmente linéairement sans limite avec [S].",
        "correct": false,
        "explanation": "La vitesse tend vers Vmax."
      }
    ],
    "explanation": "L'effet de [S] sature ; une forte [S] peut concurrencer un inhibiteur compétitif mais pas restaurer tous les modèles d'inhibition."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Sur cette droite de Lineweaver-Burk, cliquez sur l'intersection avec l'axe des abscisses correspondant à −1/Km.",
    "image": {
      "src": "/images/training/ue14/biochimie/mesure-activite-enzymatique/lineweaver-burk-intercept-qzone.svg",
      "alt": "Schéma original d'une droite de Lineweaver-Burk avec axes 1/v0 et 1/[S]",
      "width": 1100,
      "height": 650
    },
    "expectedZones": [
      {
        "id": "minus-inv-km",
        "label": "−1/Km",
        "x": 0.209,
        "y": 0.8,
        "tolerance": 0.075
      }
    ],
    "explanation": "Sur une représentation de Lineweaver-Burk, l'abscisse à l'origine vaut −1/Km et l'ordonnée à l'origine 1/Vmax."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant l'effet du pH sur l'activité enzymatique, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Le pH modifie l'état de protonation des groupes du site actif et du substrat.",
        "correct": true,
        "explanation": "Cela peut changer liaison et catalyse."
      },
      {
        "content": "Le pH n'affecte jamais les charges des résidus catalytiques.",
        "correct": false,
        "explanation": "Il modifie leur protonation."
      },
      {
        "content": "Tout pH inférieur à 2 dénature nécessairement toute enzyme connue.",
        "correct": false,
        "explanation": "Certaines enzymes sont adaptées à des milieux très acides."
      },
      {
        "content": "Toutes les enzymes humaines ont exactement pH 7,2 comme optimum.",
        "correct": false,
        "explanation": "Les optima varient."
      },
      {
        "content": "Toute baisse d'activité liée au pH prouve une dénaturation irréversible.",
        "correct": false,
        "explanation": "Elle peut être réversible et due à l'ionisation."
      }
    ],
    "explanation": "Le pH agit sur les états de protonation et parfois sur la stabilité ; les profils d'activité sont enzyme-dépendants."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'effet de la température sur l'activité enzymatique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Toute enzyme humaine augmente nécessairement son activité dès que la température dépasse 37 °C.",
        "correct": false,
        "explanation": "L'inactivation peut rapidement devenir dominante."
      },
      {
        "content": "À température suffisamment élevée, l'inactivation ou la dénaturation peut dominer et faire chuter l'activité.",
        "correct": true,
        "explanation": "Le seuil dépend de l'enzyme et de la durée."
      },
      {
        "content": "Une hausse modérée de température accélère souvent la réaction tant que l'enzyme reste stable.",
        "correct": true,
        "explanation": "Les constantes cinétiques augmentent généralement avec la température."
      },
      {
        "content": "Il n'existe pas de température optimale universelle à 37 °C.",
        "correct": true,
        "explanation": "Les enzymes d'organismes thermophiles illustrent une grande diversité."
      },
      {
        "content": "La température optimale mesurée dépend aussi du temps de dosage.",
        "correct": true,
        "explanation": "Une enzyme peut être rapide mais instable à température élevée."
      }
    ],
    "explanation": "La température accélère la chimie mais peut aussi inactiver la protéine ; l'optimum résulte de ces effets concurrents."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle formule donne le pourcentage d'inhibition à partir de v0 et vI ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "100×(v0-vI)/v0",
        "(v0-vI)/v0 × 100",
        "100*(v0-vI)/v0"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le pourcentage d'inhibition mesure la perte relative de vitesse et dépend du contexte expérimental."
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant un calcul de vitesse par Beer-Lambert.",
    "choices": [
      {
        "content": "ε peut être choisi arbitrairement sans rapport avec la longueur d'onde.",
        "correct": false,
        "explanation": "Il dépend du chromophore et de λ."
      },
      {
        "content": "0,020 mM·min⁻¹ vaut 0,020 µmol·L⁻¹·min⁻¹.",
        "correct": false,
        "explanation": "Il faut multiplier par 1000."
      },
      {
        "content": "La longueur de cuve n'intervient jamais dans le calcul.",
        "correct": false,
        "explanation": "Elle apparaît au dénominateur."
      },
      {
        "content": "Avec ΔA/Δt=0,12 min⁻¹, ε=6 mM⁻¹·cm⁻¹ et l=1 cm, la vitesse vaut 0,020 mM·min⁻¹.",
        "correct": true,
        "explanation": "0,12/(6×1)=0,020."
      },
      {
        "content": "Si l augmente à absorbance-pente identique, la vitesse calculée diminue.",
        "correct": true,
        "explanation": "v est inversement proportionnelle à l dans la conversion."
      }
    ],
    "explanation": "La pente spectrophotométrique se convertit par v=(ΔA/Δt)/(εl), avec attention aux unités.",
    "requiredSelectionCount": 2
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les conversions U-katal, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "2 U correspondent à 2 nkat.",
        "correct": false,
        "explanation": "Il faut multiplier par 16,67."
      },
      {
        "content": "U et kat sont des unités de concentration.",
        "correct": false,
        "explanation": "Ce sont des unités d'activité catalytique."
      },
      {
        "content": "60 U correspondent à 60 kat.",
        "correct": false,
        "explanation": "Ils correspondent à 1 µkat."
      },
      {
        "content": "1 nkat correspond à 0,060 U.",
        "correct": true,
        "explanation": "1 nmol/s=60 nmol/min=0,060 µmol/min."
      },
      {
        "content": "2 U correspondent à environ 33,33 nkat.",
        "correct": true,
        "explanation": "On double la valeur."
      }
    ],
    "explanation": "Les conversions reposent sur 1 U=1 µmol/min≈16,67 nkat."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant les calculs sur Lineweaver-Burk, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Une abscisse -0,25 mM⁻¹ donne Km=-4 mM.",
        "correct": false,
        "explanation": "Km est positif et vaut 4 mM."
      },
      {
        "content": "Une ordonnée 0,02 donne Vmax=0,02.",
        "correct": false,
        "explanation": "Il faut prendre l'inverse."
      },
      {
        "content": "L'abscisse à l'origine vaut toujours +1/Km.",
        "correct": false,
        "explanation": "Elle vaut -1/Km."
      },
      {
        "content": "Une pente de 0,08 et une ordonnée à l'origine de 0,02 donnent Km=4 dans les unités cohérentes.",
        "correct": true,
        "explanation": "Km=(Km/Vmax)/(1/Vmax)=pente/intercept."
      },
      {
        "content": "La pente de Lineweaver-Burk est 1/Km.",
        "correct": false,
        "explanation": "Elle vaut Km/Vmax."
      }
    ],
    "explanation": "Lineweaver-Burk permet des calculs simples, mais les paramètres expérimentaux sont mieux estimés par régression non linéaire."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les signatures Lineweaver-Burk des inhibitions, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Mixte général : toutes les droites se coupent obligatoirement sur un axe.",
        "correct": false,
        "explanation": "L'intersection peut être hors des axes."
      },
      {
        "content": "Incompétitive : droites parallèles.",
        "correct": true,
        "explanation": "Km/Vmax reste constant."
      },
      {
        "content": "Mixte général : intersection typiquement à gauche de l'axe y, avec position dépendant des affinités relatives.",
        "correct": true,
        "explanation": "Vmax diminue et Km peut varier dans les deux sens."
      },
      {
        "content": "Non compétitive pure : intersection sur l'axe x.",
        "correct": true,
        "explanation": "Km est inchangé."
      },
      {
        "content": "Compétitive pure : droites parallèles.",
        "correct": false,
        "explanation": "Cela correspond à l'incompétitive."
      }
    ],
    "explanation": "Les motifs de Lineweaver-Burk résument les effets sur Km et Vmax, sans constituer à eux seuls une preuve mécanistique."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Vers quelle valeur tend v0 lorsque [S] devient très grande dans Michaelis-Menten ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Vmax",
        "vitesse maximale"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'effet de [S] sature ; une forte [S] peut concurrencer un inhibiteur compétitif mais pas restaurer tous les modèles d'inhibition."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "À substrat non limitant et conditions identiques, v0 est proportionnelle à [E]t.",
        "correct": true,
        "explanation": "Deux fois plus d'enzyme active donne approximativement deux fois plus de vitesse."
      },
      {
        "content": "Si vI=v0, l'inhibition est de 0 %.",
        "correct": true,
        "explanation": "L'inhibiteur n'a alors aucun effet mesurable."
      },
      {
        "content": "La quantité d'enzyme n'a aucun effet sur la vitesse.",
        "correct": false,
        "explanation": "Elle est un déterminant majeur."
      },
      {
        "content": "Km est directement proportionnel à [E]t dans le modèle idéal.",
        "correct": false,
        "explanation": "Il ne l'est pas."
      },
      {
        "content": "Une inhibition de 50 % signifie nécessairement Ki=50 µM.",
        "correct": false,
        "explanation": "Aucune relation directe sans modèle et conditions."
      },
      {
        "content": "Changer [E]t ne modifie pas Keq.",
        "correct": true,
        "explanation": "Une enzyme modifie la vitesse, pas l'équilibre."
      },
      {
        "content": "Augmenter [E]t déplace l'équilibre thermodynamique vers les produits.",
        "correct": false,
        "explanation": "Keq est inchangée."
      },
      {
        "content": "Une vitesse avec inhibiteur supérieure à v0 correspond forcément à 100 % d'inhibition.",
        "correct": false,
        "explanation": "La formule donnerait une inhibition négative, signe d'activation ou de variabilité."
      },
      {
        "content": "Vmax est proportionnelle à [E]t.",
        "correct": true,
        "explanation": "Vmax=kcat[E]t."
      },
      {
        "content": "Le pourcentage dépend des conditions, notamment [S] et [I].",
        "correct": true,
        "explanation": "Il n'est pas une constante intrinsèque unique de l'inhibiteur."
      }
    ],
    "explanation": "La vitesse et Vmax sont proportionnelles à la quantité d'enzyme active, alors que Keq et Km ne changent pas dans le modèle idéal. Le pourcentage d'inhibition mesure la perte relative de vitesse et dépend du contexte expérimental."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'effet du pH sur l'activité enzymatique, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Toutes les enzymes humaines ont exactement pH 7,2 comme optimum.",
        "correct": false,
        "explanation": "Les optima varient."
      },
      {
        "content": "Une variation de pH peut modifier l'activité sans provoquer une dénaturation globale.",
        "correct": true,
        "explanation": "L'ionisation de quelques groupes catalytiques peut suffire."
      },
      {
        "content": "Des pH extrêmes peuvent déstabiliser certaines protéines.",
        "correct": true,
        "explanation": "La sensibilité varie fortement selon l'enzyme."
      },
      {
        "content": "Chaque enzyme possède un profil de pH qui dépend de son mécanisme et de son environnement.",
        "correct": true,
        "explanation": "Il n'existe pas un pH optimal universel."
      },
      {
        "content": "Le pH modifie l'état de protonation des groupes du site actif et du substrat.",
        "correct": true,
        "explanation": "Cela peut changer liaison et catalyse."
      }
    ],
    "explanation": "Le pH agit sur les états de protonation et parfois sur la stabilité ; les profils d'activité sont enzyme-dépendants."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'effet de la concentration en substrat ?",
    "choices": [
      {
        "content": "L'effet d'une augmentation de [S] est maximal dans la zone non saturée.",
        "correct": true,
        "explanation": "Près de Vmax, le gain devient faible."
      },
      {
        "content": "Le substrat ne peut jamais influencer une inhibition compétitive.",
        "correct": false,
        "explanation": "Il peut la surmonter partiellement."
      },
      {
        "content": "Une forte [S] annule toujours toute inhibition, quel qu'en soit le type.",
        "correct": false,
        "explanation": "Ce n'est pas vrai."
      },
      {
        "content": "Une forte [S] peut réduire l'effet d'un inhibiteur compétitif réversible.",
        "correct": true,
        "explanation": "Elle favorise la liaison du substrat."
      },
      {
        "content": "v0 augmente linéairement sans limite avec [S].",
        "correct": false,
        "explanation": "La vitesse tend vers Vmax."
      }
    ],
    "explanation": "L'effet de [S] sature ; une forte [S] peut concurrencer un inhibiteur compétitif mais pas restaurer tous les modèles d'inhibition."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Que devient Vmax si [E]t est multipliée par trois ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "elle est multipliée par trois",
        "×3",
        "Vmax triple"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La vitesse et Vmax sont proportionnelles à la quantité d'enzyme active, alors que Keq et Km ne changent pas dans le modèle idéal."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant l'effet du pH sur l'activité enzymatique, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Tout pH inférieur à 2 dénature nécessairement toute enzyme connue.",
        "correct": false,
        "explanation": "Certaines enzymes sont adaptées à des milieux très acides."
      },
      {
        "content": "Une variation de pH peut modifier l'activité sans provoquer une dénaturation globale.",
        "correct": true,
        "explanation": "L'ionisation de quelques groupes catalytiques peut suffire."
      },
      {
        "content": "Des pH extrêmes peuvent déstabiliser certaines protéines.",
        "correct": true,
        "explanation": "La sensibilité varie fortement selon l'enzyme."
      },
      {
        "content": "Le pH n'affecte jamais les charges des résidus catalytiques.",
        "correct": false,
        "explanation": "Il modifie leur protonation."
      },
      {
        "content": "Toute baisse d'activité liée au pH prouve une dénaturation irréversible.",
        "correct": false,
        "explanation": "Elle peut être réversible et due à l'ionisation."
      }
    ],
    "explanation": "Le pH agit sur les états de protonation et parfois sur la stabilité ; les profils d'activité sont enzyme-dépendants.",
    "requiredSelectionCount": 2
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'effet de la température sur l'activité enzymatique, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Toute enzyme humaine augmente nécessairement son activité dès que la température dépasse 37 °C.",
        "correct": false,
        "explanation": "L'inactivation peut rapidement devenir dominante."
      },
      {
        "content": "Toutes les enzymes se dénaturent exactement à 60 °C.",
        "correct": false,
        "explanation": "La stabilité est très variable."
      },
      {
        "content": "Une hausse modérée de température accélère souvent la réaction tant que l'enzyme reste stable.",
        "correct": true,
        "explanation": "Les constantes cinétiques augmentent généralement avec la température."
      },
      {
        "content": "Il n'existe pas de température optimale universelle à 37 °C.",
        "correct": true,
        "explanation": "Les enzymes d'organismes thermophiles illustrent une grande diversité."
      },
      {
        "content": "À température suffisamment élevée, l'inactivation ou la dénaturation peut dominer et faire chuter l'activité.",
        "correct": true,
        "explanation": "Le seuil dépend de l'enzyme et de la durée."
      }
    ],
    "explanation": "La température accélère la chimie mais peut aussi inactiver la protéine ; l'optimum résulte de ces effets concurrents."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Concernant le pourcentage d'inhibition, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Si vI=v0, l'inhibition est de 0 %.",
        "correct": true,
        "explanation": "L'inhibiteur n'a alors aucun effet mesurable."
      },
      {
        "content": "Le pourcentage d'inhibition est indépendant de [S].",
        "correct": false,
        "explanation": "Il peut en dépendre fortement."
      },
      {
        "content": "Une inhibition de 50 % signifie nécessairement Ki=50 µM.",
        "correct": false,
        "explanation": "Aucune relation directe sans modèle et conditions."
      },
      {
        "content": "Le pourcentage d'inhibition vaut 100×vI/v0.",
        "correct": false,
        "explanation": "Cela donne l'activité résiduelle en pourcentage."
      },
      {
        "content": "Une vitesse avec inhibiteur supérieure à v0 correspond forcément à 100 % d'inhibition.",
        "correct": false,
        "explanation": "La formule donnerait une inhibition négative, signe d'activation ou de variabilité."
      }
    ],
    "explanation": "Le pourcentage d'inhibition mesure la perte relative de vitesse et dépend du contexte expérimental."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant un calcul de vitesse par Beer-Lambert, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "ε peut être choisi arbitrairement sans rapport avec la longueur d'onde.",
        "correct": false,
        "explanation": "Il dépend du chromophore et de λ."
      },
      {
        "content": "Avec ΔA/Δt=0,12 min⁻¹, ε=6 mM⁻¹·cm⁻¹ et l=1 cm, la vitesse vaut 0,020 mM·min⁻¹.",
        "correct": true,
        "explanation": "0,12/(6×1)=0,020."
      },
      {
        "content": "Si l augmente à absorbance-pente identique, la vitesse calculée diminue.",
        "correct": true,
        "explanation": "v est inversement proportionnelle à l dans la conversion."
      },
      {
        "content": "Il faut utiliser un ε correspondant à l'espèce et à la longueur d'onde suivies.",
        "correct": true,
        "explanation": "Le coefficient d'extinction n'est pas universel."
      },
      {
        "content": "0,020 mM·min⁻¹ correspond à 20 µmol·L⁻¹·min⁻¹.",
        "correct": true,
        "explanation": "1 mM=1000 µmol/L."
      }
    ],
    "explanation": "La pente spectrophotométrique se convertit par v=(ΔA/Δt)/(εl), avec attention aux unités."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "À combien de nkat correspondent 2 U ?",
    "answer": {
      "type": "number",
      "value": 33.34,
      "tolerance": 0.05
    },
    "explanation": "Les conversions reposent sur 1 U=1 µmol/min≈16,67 nkat."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Doubler [E]t divise Vmax par deux.",
        "correct": false,
        "explanation": "Vmax double."
      },
      {
        "content": "L'abscisse à l'origine vaut toujours +1/Km.",
        "correct": false,
        "explanation": "Elle vaut -1/Km."
      },
      {
        "content": "À substrat non limitant et conditions identiques, v0 est proportionnelle à [E]t.",
        "correct": true,
        "explanation": "Deux fois plus d'enzyme active donne approximativement deux fois plus de vitesse."
      },
      {
        "content": "Une abscisse -0,25 mM⁻¹ donne Km=-4 mM.",
        "correct": false,
        "explanation": "Km est positif et vaut 4 mM."
      },
      {
        "content": "La pente de Lineweaver-Burk est 1/Km.",
        "correct": false,
        "explanation": "Elle vaut Km/Vmax."
      },
      {
        "content": "La quantité d'enzyme n'a aucun effet sur la vitesse.",
        "correct": false,
        "explanation": "Elle est un déterminant majeur."
      },
      {
        "content": "Si l'abscisse à l'origine vaut -0,25 mM⁻¹, Km vaut 4 mM.",
        "correct": true,
        "explanation": "-1/Km=-0,25."
      },
      {
        "content": "Si l'ordonnée à l'origine vaut 0,02 min·µmol⁻¹, Vmax vaut 50 µmol·min⁻¹.",
        "correct": true,
        "explanation": "Vmax=1/0,02."
      },
      {
        "content": "Changer [E]t ne modifie pas Keq.",
        "correct": true,
        "explanation": "Une enzyme modifie la vitesse, pas l'équilibre."
      },
      {
        "content": "Une pente de 0,08 et une ordonnée à l'origine de 0,02 donnent Km=4 dans les unités cohérentes.",
        "correct": true,
        "explanation": "Km=(Km/Vmax)/(1/Vmax)=pente/intercept."
      }
    ],
    "explanation": "Lineweaver-Burk permet des calculs simples, mais les paramètres expérimentaux sont mieux estimés par régression non linéaire. La vitesse et Vmax sont proportionnelles à la quantité d'enzyme active, alors que Keq et Km ne changent pas dans le modèle idéal."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les signatures Lineweaver-Burk des inhibitions, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Compétitive pure : intersection sur l'axe y.",
        "correct": true,
        "explanation": "Vmax est inchangée."
      },
      {
        "content": "Compétitive pure : droites parallèles.",
        "correct": false,
        "explanation": "Cela correspond à l'incompétitive."
      },
      {
        "content": "Non compétitive pure : intersection sur l'axe y.",
        "correct": false,
        "explanation": "Elle se fait sur l'axe x dans le cas idéal."
      },
      {
        "content": "Incompétitive : intersection sur l'axe y.",
        "correct": false,
        "explanation": "Vmax n'est pas inchangée."
      },
      {
        "content": "Mixte général : intersection typiquement à gauche de l'axe y, avec position dépendant des affinités relatives.",
        "correct": true,
        "explanation": "Vmax diminue et Km peut varier dans les deux sens."
      }
    ],
    "explanation": "Les motifs de Lineweaver-Burk résument les effets sur Km et Vmax, sans constituer à eux seuls une preuve mécanistique."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel type d'inhibition réversible peut être surmonté en partie par une forte [S] ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "compétitive",
        "inhibition compétitive"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'effet de [S] sature ; une forte [S] peut concurrencer un inhibiteur compétitif mais pas restaurer tous les modèles d'inhibition."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant l'effet de la concentration en enzyme, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Changer [E]t ne modifie pas Km dans le modèle Michaelis-Menten idéal.",
        "correct": true,
        "explanation": "Km est un paramètre du couple enzyme-substrat et des constantes cinétiques."
      },
      {
        "content": "À substrat non limitant et conditions identiques, v0 est proportionnelle à [E]t.",
        "correct": true,
        "explanation": "Deux fois plus d'enzyme active donne approximativement deux fois plus de vitesse."
      },
      {
        "content": "La quantité d'enzyme n'a aucun effet sur la vitesse.",
        "correct": false,
        "explanation": "Elle est un déterminant majeur."
      },
      {
        "content": "Doubler [E]t divise Vmax par deux.",
        "correct": false,
        "explanation": "Vmax double."
      },
      {
        "content": "Augmenter [E]t déplace l'équilibre thermodynamique vers les produits.",
        "correct": false,
        "explanation": "Keq est inchangée."
      }
    ],
    "explanation": "La vitesse et Vmax sont proportionnelles à la quantité d'enzyme active, alors que Keq et Km ne changent pas dans le modèle idéal.",
    "requiredSelectionCount": 2
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Pourquoi le pH peut-il modifier l'activité d'une enzyme sans la dénaturer ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "modification de la protonation du site actif",
        "ionisation des résidus catalytiques",
        "état de protonation"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le pH agit sur les états de protonation et parfois sur la stabilité ; les profils d'activité sont enzyme-dépendants."
  }
];
