import { TEX_UNITS, texQuantity } from './tex-units';
import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

const U = TEX_UNITS;

/**
 * UE14 – Chimie organique – Chapitre 2.1 – Section A – Formule brute et composition
 */

export const UE14_CH5_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la nomenclature chimique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une nomenclature internationale facilite la communication entre chimistes.",
        "correct": true,
        "explanation": "L'utilisation de règles communes permet à des scientifiques de décrire une même espèce chimique de façon compréhensible indépendamment de leur langue ou de leur pays."
      },
      {
        "content": "Un nom commercial de médicament est nécessairement un nom chimique officiel.",
        "correct": false,
        "explanation": "Le nom commercial identifie un médicament dans un contexte de commercialisation. Il ne correspond pas nécessairement à la dénomination chimique de la substance active."
      },
      {
        "content": "La nomenclature devient inutile lorsque la molécule est complexe.",
        "correct": false,
        "explanation": "Au contraire, plus une structure est complexe, plus une dénomination précise et normalisée est utile pour limiter les ambiguïtés."
      },
      {
        "content": "La nomenclature chimique renseigne à elle seule sur l’effet pharmacologique d’une molécule.",
        "correct": false,
        "explanation": "La nomenclature décrit et nomme une structure chimique ; elle ne suffit pas à déterminer ses effets biologiques ou pharmacologiques."
      },
      {
        "content": "Elle vise à désigner les molécules avec précision.",
        "correct": true,
        "explanation": "La nomenclature chimique fournit des règles permettant d'identifier les espèces chimiques de manière précise et aussi peu ambiguë que possible."
      }
    ],
    "explanation": "La nomenclature chimique constitue un langage commun permettant d'identifier et de décrire les espèces chimiques avec précision. Elle doit être distinguée des noms commerciaux, qui répondent à un autre usage."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une formule brute telle que $\\ce{C2H6O}$ permet d'affirmer que :",
    "choices": [
      {
        "content": "Elle contient un seul atome d'oxygène.",
        "correct": true,
        "explanation": "Lorsqu'aucun indice n'est écrit après un symbole chimique, l'indice vaut implicitement 1."
      },
      {
        "content": "Elle impose un unique enchaînement possible des atomes.",
        "correct": false,
        "explanation": "Une formule brute renseigne sur la composition mais pas sur l'enchaînement des atomes. Plusieurs molécules différentes peuvent donc posséder la même formule brute."
      },
      {
        "content": "Elle permet à elle seule de savoir si la molécule est un alcool ou un éther.",
        "correct": false,
        "explanation": "Une formule brute ne donne pas l’enchaînement des atomes ; des fonctions différentes peuvent partager la même formule brute."
      },
      {
        "content": "La molécule contient deux atomes de carbone.",
        "correct": true,
        "explanation": "L'indice 2 placé après C indique la présence de deux atomes de carbone."
      },
      {
        "content": "Elle contient six atomes d'hydrogène.",
        "correct": true,
        "explanation": "L'indice 6 placé après H indique la présence de six atomes d'hydrogène."
      }
    ],
    "explanation": "La formule brute indique la nature et le nombre des atomes constituant une molécule. Elle ne décrit pas nécessairement leurs liaisons ni leur organisation structurale."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "L'éthanol $\\ce{CH3CH2OH}$ et l'éther diméthylique $\\ce{CH3OCH3}$ ont la même formule brute $\\ce{C2H6O}$. Sélectionnez exactement les deux propositions correctes.",
    "choices": [
      {
        "content": "Ils ont des masses molaires différentes.",
        "correct": false,
        "explanation": "Leur formule brute étant identique, ils contiennent les mêmes nombres et types d'atomes et possèdent donc la même masse molaire."
      },
      {
        "content": "Ils ont nécessairement le même enchaînement d’atomes.",
        "correct": false,
        "explanation": "Ils ont la même formule brute, mais leurs atomes sont enchaînés différemment."
      },
      {
        "content": "Ils ont la même composition élémentaire.",
        "correct": true,
        "explanation": "Les deux molécules contiennent chacune 2 atomes de carbone, 6 atomes d'hydrogène et 1 atome d'oxygène."
      },
      {
        "content": "Ils illustrent que la formule brute ne suffit pas toujours à connaître la structure.",
        "correct": true,
        "explanation": "Les deux molécules ont la même formule brute mais des enchaînements atomiques différents : l'éthanol est un alcool tandis que l'éther diméthylique est un éther."
      },
      {
        "content": "Ils ont nécessairement la même fonction chimique.",
        "correct": false,
        "explanation": "Une même formule brute peut correspondre à plusieurs fonctions chimiques. Ici, l'éthanol appartient aux alcools et l'éther diméthylique aux éthers."
      }
    ],
    "explanation": "Deux molécules distinctes peuvent partager une même formule brute. La formule brute indique la composition, mais une représentation structurale est nécessaire pour connaître l'enchaînement des atomes et identifier les fonctions chimiques."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des éléments rencontrés dans les molécules organiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Toute molécule organique contient nécessairement du soufre.",
        "correct": false,
        "explanation": "Le soufre peut être présent dans certaines molécules organiques, mais sa présence n’est pas obligatoire."
      },
      {
        "content": "Le carbone constitue un élément central de la chimie organique.",
        "correct": true,
        "explanation": "La chimie organique étudie principalement les composés du carbone. Les atomes de carbone peuvent notamment s'enchaîner entre eux pour former des structures très variées."
      },
      {
        "content": "L'hydrogène est très fréquemment associé au carbone dans les molécules organiques.",
        "correct": true,
        "explanation": "De très nombreuses molécules organiques comportent des liaisons carbone-hydrogène, notamment les hydrocarbures et de nombreux dérivés fonctionnels."
      },
      {
        "content": "L'oxygène, l'azote et le soufre peuvent être rencontrés comme hétéroatomes dans des molécules organiques.",
        "correct": true,
        "explanation": "Ces éléments sont couramment rencontrés dans les molécules organiques et participent à de nombreuses fonctions chimiques."
      },
      {
        "content": "Toute molécule organique contient nécessairement au moins un atome d'oxygène.",
        "correct": false,
        "explanation": "La présence d'oxygène n'est pas obligatoire. Les hydrocarbures, par exemple, sont constitués uniquement de carbone et d'hydrogène."
      }
    ],
    "explanation": "Le carbone est l'élément central des molécules organiques et l'hydrogène y est très fréquent. Des hétéroatomes comme O, N ou S peuvent également être présents, mais aucun de ces hétéroatomes n'est obligatoire dans toutes les molécules organiques."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les valences usuelles des éléments chimiques dans des molécules organiques neutres simples, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'hydrogène et les halogènes sont généralement monovalents.",
        "correct": true,
        "explanation": "Ils forment généralement une seule liaison covalente."
      },
      {
        "content": "L'oxygène neutre est généralement divalent.",
        "correct": true,
        "explanation": "Un oxygène neutre forme généralement deux liaisons simples ou une liaison double."
      },
      {
        "content": "L'azote neutre est généralement trivalent.",
        "correct": true,
        "explanation": "La somme des ordres de liaison autour d'un atome d'azote neutre usuel vaut généralement trois."
      },
      {
        "content": "Le carbone neutre est généralement trivalent.",
        "correct": false,
        "explanation": "Le carbone neutre est généralement tétravalent : la somme des ordres de liaison autour de l'atome de carbone vaut habituellement quatre."
      },
      {
        "content": "La valence usuelle d’un atome dépend du nombre total d’atomes présents dans la molécule.",
        "correct": false,
        "explanation": "La valence usuelle caractérise le nombre de liaisons formées par l’atome dans le modèle considéré ; elle ne dépend pas du nombre total d’atomes de la molécule."
      }
    ],
    "explanation": "Les valences usuelles constituent des repères utiles pour contrôler une représentation moléculaire : H et les halogènes sont généralement monovalents, O divalent, N trivalent et C tétravalent."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle représentation satisfait la tétravalence habituelle du carbone ?",
    "choices": [
      {
        "content": "$\\ce{CH4}$.",
        "correct": true,
        "explanation": "Dans le méthane, le carbone forme quatre liaisons simples avec quatre atomes d'hydrogène. Sa tétravalence est donc satisfaite."
      },
      {
        "content": "$\\ce{C-H}$ comme unique liaison d'un carbone neutre isolé.",
        "correct": false,
        "explanation": "Une seule liaison ne satisfait pas la tétravalence usuelle du carbone."
      },
      {
        "content": "$\\ce{CH2}$ neutre, représenté avec seulement deux liaisons simples et sans autre liaison.",
        "correct": false,
        "explanation": "Deux liaisons simples ne satisfont pas la tétravalence usuelle d’un carbone neutre dans ce cadre."
      },
      {
        "content": "$\\ce{CH5}$.",
        "correct": false,
        "explanation": "Cinq liaisons simples autour d'un carbone neutre dépasseraient sa tétravalence usuelle."
      },
      {
        "content": "$\\ce{CH3}$ neutre avec trois liaisons et aucun électron célibataire indiqué.",
        "correct": false,
        "explanation": "Trois liaisons simples ne suffisent pas à satisfaire la tétravalence d'un carbone neutre dans cette représentation."
      }
    ],
    "explanation": "Un carbone neutre usuel est tétravalent : la somme des ordres de liaison autour de cet atome vaut généralement quatre. Le méthane $\\ce{CH4}$ constitue l'exemple le plus simple avec quatre liaisons simples."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La microanalyse chimique d'un composé pur peut fournir :",
    "choices": [
      {
        "content": "La géométrie tridimensionnelle exacte.",
        "correct": false,
        "explanation": "La microanalyse renseigne sur la composition élémentaire d'un composé, mais elle ne permet pas de déterminer l'organisation spatiale de ses atomes ni sa géométrie moléculaire."
      },
      {
        "content": "Toujours la formule brute exacte sans autre donnée.",
        "correct": false,
        "explanation": "La microanalyse permet d'établir les proportions relatives des différents éléments et donc une formule empirique. Une donnée supplémentaire, comme la masse molaire, peut être nécessaire pour déterminer la formule brute."
      },
      {
        "content": "L’ordre d’enchaînement exact de tous les atomes.",
        "correct": false,
        "explanation": "La microanalyse renseigne sur la composition élémentaire et les proportions massiques, pas sur l’enchaînement des atomes."
      },
      {
        "content": "La liste des éléments présents.",
        "correct": true,
        "explanation": "L'analyse élémentaire permet d'identifier les éléments chimiques constituant le composé, par exemple le carbone, l'hydrogène, l'azote ou le soufre."
      },
      {
        "content": "Le pourcentage massique de chaque élément.",
        "correct": true,
        "explanation": "La microanalyse permet de déterminer la proportion massique de chacun des éléments présents dans l'échantillon, généralement exprimée en pourcentage."
      }
    ],
    "explanation": "La microanalyse fournit des informations sur la nature des éléments présents et leurs proportions massiques. Elle permet d'établir une composition élémentaire et éventuellement une formule empirique, mais ne renseigne pas directement sur la structure ou la géométrie de la molécule."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": String.raw`Quelle est la masse molaire de l'éthanol $\ce{C2H6O}$ ? Donnez uniquement la valeur numérique, exprimée en $${U.G_PER_MOL}$.
Données : $M_{\mathrm C}=${texQuantity(12, U.G_PER_MOL)}$, $M_{\mathrm H}=${texQuantity(1, U.G_PER_MOL)}$ et $M_{\mathrm O}=${texQuantity(16, U.G_PER_MOL)}$.`,
    "answer": {
      "type": "number",
      "value": 46,
      "tolerance": 0,
      "unit": "g/mol",
      "displayUnit": U.G_PER_MOL
    },
    "explanation": String.raw`La molécule $\ce{C2H6O}$ contient 2 atomes de carbone, 6 atomes d'hydrogène et 1 atome d'oxygène. Sa masse molaire vaut donc $2\times12+6\times1+1\times16=46$, soit $${texQuantity(46, U.G_PER_MOL)}$.`
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QROC",
    "question": String.raw`Dans la molécule de dioxyde de carbone $\ce{CO2}$, quel est le pourcentage massique de carbone ? Donnez uniquement la valeur numérique, exprimée en $\%$, arrondie à l'unité.
Données : $M_{\mathrm C}=${texQuantity(12, U.G_PER_MOL)}$ et $M_{\mathrm O}=${texQuantity(16, U.G_PER_MOL)}$.`,
    "answer": {
      "type": "number",
      "value": 27,
      "tolerance": 0,
      "unit": "%",
      "displayUnit": String.raw`\%`
    },
    "explanation": String.raw`On calcule d'abord la masse molaire du dioxyde de carbone : $M(\ce{CO2})=12+2\times16=44$, soit $${texQuantity(44, U.G_PER_MOL)}$. La contribution du carbone est de 12 g pour une mole de $\ce{CO2}$. Le pourcentage massique de carbone vaut donc $\frac{12}{44}\times100\approx27{,}3\,\%$. Arrondie à l'unité, la valeur demandée est $27\,\%$.`
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux étapes nécessaires pour déterminer une formule empirique à partir d'une microanalyse.",
    "choices": [
      {
        "content": "Convertir les pourcentages massiques en quantités relatives de matière.",
        "correct": true,
        "explanation": "Pour chaque élément, on peut raisonner sur une masse arbitraire de composé, par exemple 100 g : le pourcentage massique fournit alors directement une masse en grammes. Cette masse est divisée par la masse molaire atomique de l'élément afin d'obtenir une quantité de matière relative."
      },
      {
        "content": "Ramener les rapports obtenus à de petits nombres entiers.",
        "correct": true,
        "explanation": "Après avoir calculé les quantités relatives de matière de chaque élément, on les rapporte généralement à la plus petite valeur. Les rapports obtenus sont ensuite ramenés, si nécessaire, à de petits nombres entiers qui deviennent les indices de la formule empirique."
      },
      {
        "content": "Déduire directement la formule brute à partir des seuls pourcentages massiques.",
        "correct": false,
        "explanation": "Les pourcentages massiques permettent d'établir des rapports entre les quantités de matière des éléments et donc une formule empirique. La formule brute peut être un multiple de cette formule et nécessiter une information supplémentaire, notamment la masse molaire du composé."
      },
      {
        "content": "Utiliser directement les pourcentages massiques comme indices de la formule empirique.",
        "correct": false,
        "explanation": "Les pourcentages représentent des proportions de masse et non des rapports entre nombres d'atomes. Il faut d'abord les convertir en quantités relatives de matière à l'aide des masses molaires atomiques avant de rechercher les rapports entiers."
      },
      {
        "content": "Utiliser directement les pourcentages massiques comme nombres d’atomes, sans tenir compte des masses molaires atomiques.",
        "correct": false,
        "explanation": "Il faut convertir les proportions massiques en quantités de matière relatives avant d’obtenir les rapports atomiques."
      }
    ],
    "explanation": "Une microanalyse fournit des proportions massiques. Pour déterminer une formule empirique, on convertit ces proportions en quantités relatives de matière, puis on ramène leurs rapports à de petits nombres entiers. La masse molaire du composé peut ensuite être utilisée, si elle est connue, pour déterminer si la formule brute est un multiple de la formule empirique."
  },
  {
    "order": 11,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "$\\ce{HO-CH2-CH2-NH2}$ est la formule semi-développée de l'éthanolamine, une molécule notamment impliquée dans la constitution de phospholipides membranaires comme la phosphatidyléthanolamine. Combien d'atomes d'hydrogène contient cette molécule au total ? Donnez uniquement la valeur numérique.",
    "answer": {
      "type": "number",
      "value": 7
    },
    "explanation": "On compte $1$ hydrogène sur le groupe $\\ce{OH}$, $2$ sur chacun des deux groupes $\\ce{CH2}$ et $2$ sur le groupe $\\ce{NH2}$, soit $1+2+2+2=7$ hydrogènes au total."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour $\\ce{CH3-CH(OH)-CH2-NH2}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle contient deux oxygènes.",
        "correct": false,
        "explanation": "Un seul atome d'oxygène est présent : il appartient au groupe hydroxyle $\\ce{OH}$."
      },
      {
        "content": "Elle contient une fonction amine.",
        "correct": true,
        "explanation": "Le motif terminal $\\ce{NH2}$ porté par un carbone correspond à une fonction amine primaire."
      },
      {
        "content": "Le groupe $\\ce{NH2}$ contient deux atomes d’azote.",
        "correct": false,
        "explanation": "Le groupe $\\ce{NH2}$ contient un seul atome d’azote et deux atomes d’hydrogène."
      },
      {
        "content": "La formule brute est $\\ce{C3H9NO}$.",
        "correct": true,
        "explanation": "Le décompte donne 3 atomes de carbone, 9 atomes d'hydrogène, 1 atome d'azote et 1 atome d'oxygène, soit $\\ce{C3H9NO}$."
      },
      {
        "content": "La molécule contient trois carbones.",
        "correct": true,
        "explanation": "La formule semi-développée fait apparaître successivement les trois groupes carbonés $\\ce{CH3}$, $\\ce{CH(OH)}$ et $\\ce{CH2}$."
      }
    ],
    "explanation": "La lecture d'une formule semi-développée permet d'identifier les différents atomes et certaines fonctions chimiques. Pour obtenir la formule brute, il faut compter tous les atomes, y compris les hydrogènes portés par les hétéroatomes comme O et N."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": String.raw`Quelle est la masse molaire de l'acide éthanoïque $\ce{C2H4O2}$ ? Donnez uniquement la valeur numérique, exprimée en $${U.G_PER_MOL}$.
Données : $M_{\mathrm C}=${texQuantity(12, U.G_PER_MOL)}$, $M_{\mathrm H}=${texQuantity(1, U.G_PER_MOL)}$ et $M_{\mathrm O}=${texQuantity(16, U.G_PER_MOL)}$.`,
    "answer": {
      "type": "number",
      "value": 60,
      "tolerance": 0,
      "unit": "g/mol",
      "displayUnit": U.G_PER_MOL
    },
    "explanation": String.raw`La formule $\ce{C2H4O2}$ contient 2 atomes de carbone, 4 atomes d'hydrogène et 2 atomes d'oxygène. On additionne les contributions de chacun des éléments : $2\times12+4\times1+2\times16=24+4+32=60$. La masse molaire de l'acide éthanoïque vaut donc $${texQuantity(60, U.G_PER_MOL)}$.`
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": String.raw`Une espèce a pour formule empirique $\ce{CH2O}$ et une masse molaire de $${texQuantity(180, U.G_PER_MOL)}$. Quelles propositions sont exactes ?
Données : $M_{\mathrm C}=${texQuantity(12, U.G_PER_MOL)}$, $M_{\mathrm H}=${texQuantity(1, U.G_PER_MOL)}$ et $M_{\mathrm O}=${texQuantity(16, U.G_PER_MOL)}$.`,
    "choices": [
      {
        "content": "Le facteur multiplicatif permettant de passer de la formule empirique à la formule brute vaut 5.",
        "correct": false,
        "explanation": "Le facteur se déduit du rapport entre la masse molaire moléculaire et celle de la formule empirique ; ici il ne vaut pas 5."
      },
      {
        "content": String.raw`La masse molaire de l'unité empirique vaut $${texQuantity(30, U.G_PER_MOL)}$.`,
        "correct": true,
        "explanation": String.raw`La formule empirique $\ce{CH2O}$ correspond à une unité contenant 1 atome de carbone, 2 atomes d'hydrogène et 1 atome d'oxygène. Sa masse molaire vaut donc $1\times12+2\times1+1\times16=30$, soit $${texQuantity(30, U.G_PER_MOL)}$.`
      },
      {
        "content": "Le facteur multiplicatif est 6.",
        "correct": true,
        "explanation": String.raw`La formule brute est un multiple entier de la formule empirique. Ce facteur est obtenu en divisant la masse molaire réelle du composé par celle de l'unité empirique : $n=180/30=6$. La molécule contient donc 6 fois l'unité empirique $\ce{CH2O}$.`
      },
      {
        "content": String.raw`La formule brute est $\ce{C6H12O6}$.`,
        "correct": true,
        "explanation": String.raw`Le facteur multiplicatif vaut 6. Il faut donc multiplier chacun des indices de la formule empirique $\ce{CH2O}$ par 6 : $\ce{C_{1\times6}H_{2\times6}O_{1\times6}}$, soit $\ce{C6H12O6}$. La masse molaire obtenue est bien compatible avec les $${texQuantity(180, U.G_PER_MOL)}$ annoncés.`
      },
      {
        "content": String.raw`La formule brute est nécessairement $\ce{CH2O}$.`,
        "correct": false,
        "explanation": String.raw`La formule empirique ne donne que le plus petit rapport entier entre les nombres d'atomes. Elle n'indique pas nécessairement le nombre réel d'atomes présents dans la molécule. Ici, $\ce{CH2O}$ a une masse molaire de seulement $${texQuantity(30, U.G_PER_MOL)}$, alors que celle du composé vaut $${texQuantity(180, U.G_PER_MOL)}$ : la formule brute doit donc être un multiple de $\ce{CH2O}$.`
      }
    ],
    "explanation": String.raw`La formule empirique donne le plus petit rapport entier entre les atomes d'un composé, mais elle ne correspond pas nécessairement à sa formule brute. On commence par calculer la masse molaire de l'unité empirique $\ce{CH2O}$ : $12+2\times1+16=30$, soit $${texQuantity(30, U.G_PER_MOL)}$. On compare ensuite cette valeur à la masse molaire réelle du composé : $180/30=6$. Le facteur multiplicatif est donc 6. En multipliant tous les indices de $\ce{CH2O}$ par 6, on obtient la formule brute $\ce{C6H12O6}$.`
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": String.raw`Une microanalyse d'un composé contenant seulement C, H et O donne environ 40,0 % de C, 6,7 % de H et 53,3 % de O. Quelle formule empirique correspond à cette composition ?
Données : $M_{\mathrm C}=${texQuantity(12, U.G_PER_MOL)}$, $M_{\mathrm H}=${texQuantity(1, U.G_PER_MOL)}$ et $M_{\mathrm O}=${texQuantity(16, U.G_PER_MOL)}$.`,
    "choices": [
      {
        "content": "$\\ce{C3H8O}$",
        "correct": false,
        "explanation": "Cette formule ne respecte pas le rapport atomique 1:2:1 de la formule empirique considérée."
      },
      {
        "content": String.raw`$\ce{CH2O}$.`,
        "correct": true,
        "explanation": String.raw`On peut raisonner sur 100 g de composé : on a alors 40,0 g de C, 6,7 g de H et 53,3 g de O. Les quantités de matière relatives valent $40,0/12\approx3,33$ pour C, $6,7/1=6,7$ pour H et $53,3/16\approx3,33$ pour O. En divisant chaque valeur par la plus petite, environ 3,33, on obtient le rapport $1:2:1$. La formule empirique est donc $\ce{CH2O}$.`
      },
      {
        "content": String.raw`$\ce{C2H2O}$.`,
        "correct": false,
        "explanation": String.raw`Cette formule correspond au rapport atomique C:H:O = $2:2:1$. Or la microanalyse conduit à un rapport voisin de $1:2:1$ : il faut environ deux fois plus d'atomes d'hydrogène que d'atomes de carbone.`
      },
      {
        "content": String.raw`$\ce{CH4O}$.`,
        "correct": false,
        "explanation": String.raw`Cette formule correspond au rapport $1:4:1$. Elle comporte donc deux fois trop d'hydrogène par rapport au rapport $1:2:1$ obtenu à partir de la microanalyse.`
      },
      {
        "content": String.raw`$\ce{C2H4O}$`,
        "correct": false,
        "explanation": String.raw`Cette formule correspond au rapport $2:4:1$. Rapporté au carbone, cela donne $1:2:0,5$, alors que la microanalyse conduit à environ $1:2:1$. La proportion d'oxygène ne correspond donc pas aux données expérimentales.`
      }
    ],
    "explanation": String.raw`Pour déterminer une formule empirique à partir de pourcentages massiques, on peut raisonner sur 100 g de composé : les pourcentages deviennent alors directement des masses, soit 40,0 g de C, 6,7 g de H et 53,3 g de O. On convertit ensuite ces masses en quantités de matière : $40,0/12\approx3,33$ mol de C, $6,7/1=6,7$ mol de H et $53,3/16\approx3,33$ mol de O. On divise enfin toutes ces valeurs par la plus petite, environ 3,33, ce qui donne le rapport atomique $1:2:1$. La formule empirique correspondante est donc $\ce{CH2O}$.`
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": String.raw`L'urée est un déchet azoté produit lors du métabolisme des protéines et éliminé principalement par les reins. Elle a pour formule $\ce{CH4N2O}$. Quel est approximativement le pourcentage massique d'azote dans l'urée ? Donnez uniquement la valeur numérique, exprimée en $\%$, arrondie à l'unité.
Données : $M_{\mathrm C}=${texQuantity(12, U.G_PER_MOL)}$, $M_{\mathrm H}=${texQuantity(1, U.G_PER_MOL)}$, $M_{\mathrm N}=${texQuantity(14, U.G_PER_MOL)}$ et $M_{\mathrm O}=${texQuantity(16, U.G_PER_MOL)}$.`,
    "answer": {
      "type": "number",
      "value": 47,
      "tolerance": 0,
      "unit": "%",
      "displayUnit": String.raw`\%`
    },
    "explanation": String.raw`On commence par calculer la masse molaire de l'urée $\ce{CH4N2O}$. Une mole d'urée contient 1 mole de C, 4 moles de H, 2 moles de N et 1 mole de O. Sa masse molaire vaut donc $12+4\times1+2\times14+16=60$, soit $${texQuantity(60, U.G_PER_MOL)}$.

Les deux atomes d'azote apportent à eux seuls une masse de $2\times14=28$ g pour une mole d'urée. Le pourcentage massique d'azote est donc $\frac{28}{60}\times100\approx46{,}7\,\%$.

La valeur demandée étant arrondie à l'unité, on obtient $47\,\%$.`
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": String.raw`Une formule empirique vaut $\ce{C2H4O}$ et la masse molaire mesurée vaut $${texQuantity(88, U.G_PER_MOL)}$. Sélectionnez exactement les deux propositions correctes.
Données : $M_{\mathrm C}=${texQuantity(12, U.G_PER_MOL)}$, $M_{\mathrm H}=${texQuantity(1, U.G_PER_MOL)}$ et $M_{\mathrm O}=${texQuantity(16, U.G_PER_MOL)}$.`,
    "choices": [
      {
        "content": "Le facteur multiplicatif vaut 4.",
        "correct": false,
        "explanation": String.raw`Le facteur multiplicatif est obtenu en divisant la masse molaire réelle par celle de l'unité empirique : $88/44=2$. Il vaut donc 2 et non 4.`
      },
      {
        "content": String.raw`La formule brute reste forcément $\ce{C2H4O}$.`,
        "correct": false,
        "explanation": String.raw`$\ce{C2H4O}$ est la formule empirique, c'est-à-dire le plus petit rapport entier entre les nombres d'atomes. Comme la masse molaire mesurée est deux fois celle de l'unité empirique, la formule brute doit comporter deux fois chacun de ses indices.`
      },
      {
        "content": "La formule brute est $\\ce{C6H12O3}$.",
        "correct": false,
        "explanation": "Le facteur multiplicatif vaut 2 : la formule brute est donc $\\ce{C4H8O2}$, et non $\\ce{C6H12O3}$."},
      {
        "content": String.raw`La masse molaire de $\ce{C2H4O}$ vaut $${texQuantity(44, U.G_PER_MOL)}$.`,
        "correct": true,
        "explanation": String.raw`La masse molaire de l'unité empirique vaut $2\times12+4\times1+16=44$, soit $${texQuantity(44, U.G_PER_MOL)}$.`
      },
      {
        "content": String.raw`La formule brute est $\ce{C4H8O2}$.`,
        "correct": true,
        "explanation": String.raw`Le rapport entre la masse molaire mesurée et celle de l'unité empirique vaut $88/44=2$. Tous les indices de $\ce{C2H4O}$ doivent donc être multipliés par 2, ce qui donne $\ce{C4H8O2}$.`
      }
    ],
    "explanation": String.raw`On calcule d'abord la masse molaire de l'unité empirique $\ce{C2H4O}$ : $2\times12+4\times1+16=44$, soit $${texQuantity(44, U.G_PER_MOL)}$. Le rapport entre la masse molaire réelle et cette valeur est $88/44=2$. Le facteur multiplicatif est donc 2 et tous les indices de la formule empirique doivent être doublés, ce qui conduit à $\ce{C4H8O2}$.`
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour contrôler une formule développée neutre simple, quelles vérifications sont pertinentes ?",
    "choices": [
      {
        "content": "Un carbone neutre portant trois liaisons simples satisfait à lui seul sa tétravalence.",
        "correct": false,
        "explanation": "Trois liaisons simples correspondent à une somme des ordres de liaison égale à trois. Un carbone neutre usuel est tétravalent et doit généralement atteindre une somme des ordres de liaison égale à quatre."
      },
      {
        "content": "Un halogène neutre usuel doit former deux liaisons simples.",
        "correct": false,
        "explanation": "Les halogènes neutres usuels sont monovalents et forment généralement une seule liaison."},
      {
        "content": "Un hydrogène ordinaire ne porte qu'une liaison.",
        "correct": true,
        "explanation": "L'hydrogène est monovalent : dans une molécule neutre simple, il forme habituellement une seule liaison covalente."
      },
      {
        "content": "Un oxygène neutre usuel totalise deux ordres de liaison.",
        "correct": true,
        "explanation": "Un oxygène neutre est généralement divalent : il peut former deux liaisons simples ou une liaison double."
      },
      {
        "content": "Un azote neutre usuel totalise généralement trois ordres de liaison.",
        "correct": true,
        "explanation": "Un azote neutre est généralement trivalent : la somme des ordres de liaison autour de l'atome d'azote vaut alors trois."
      }
    ],
    "explanation": "Le contrôle des valences usuelles permet de repérer rapidement une représentation incohérente. H est généralement monovalent, O divalent, N trivalent et C tétravalent : il faut donc vérifier le nombre et l'ordre des liaisons autour de chaque atome."
  },
  {
    "order": 19,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel terme désigne la formule qui exprime le plus petit rapport entier entre les nombres d'atomes des différents éléments d'un composé ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "formule empirique",
        "empirique"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "La formule empirique indique le plus petit rapport entier entre les nombres d'atomes des différents éléments d'un composé, sans nécessairement donner leur nombre réel dans une molécule. Par exemple, le glucose a pour formule brute $\\ce{C6H12O6}$ : en divisant tous les indices par 6, on obtient sa formule empirique $\\ce{CH2O}$, qui traduit le rapport C:H:O = 1:2:1."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le sildénafil et le paclitaxel sont des molécules organiques de structure complexe. Quelles propositions sont exactes concernant leur représentation et leur dénomination ?",
    "choices": [
      {
        "content": "Une formule brute reste utile pour connaître la composition d'une molécule.",
        "correct": true,
        "explanation": "La formule brute indique la nature des éléments présents et le nombre d'atomes de chacun d'eux. Elle fournit donc la composition de la molécule, même lorsque sa structure est complexe."
      },
      {
        "content": "La formule brute ne suffit pas à déterminer précisément la structure d'une molécule complexe.",
        "correct": true,
        "explanation": "La formule brute indique combien d'atomes de chaque élément sont présents, mais pas la manière dont ces atomes sont reliés ni leur organisation spatiale. Plusieurs structures différentes peuvent ainsi correspondre à une même formule brute."
      },
      {
        "content": "Le nom commercial d'un médicament remplace la nomenclature chimique de la molécule.",
        "correct": false,
        "explanation": "Un nom commercial sert à identifier un médicament dans un contexte de commercialisation. Il ne décrit pas systématiquement la structure chimique de la substance et ne remplace donc pas sa dénomination chimique."
      },
      {
        "content": "Deux molécules différentes peuvent partager une même formule brute.",
        "correct": true,
        "explanation": "Des molécules possédant la même formule brute peuvent avoir des enchaînements ou des dispositions spatiales différents : ce phénomène correspond à l'isomérie."
      },
      {
        "content": "Deux molécules ayant la même formule brute ont nécessairement la même structure.",
        "correct": false,
        "explanation": "Une même formule brute peut correspondre à plusieurs structures différentes."
      }
    ],
    "explanation": "La formule brute renseigne sur la composition d'une molécule, mais pas nécessairement sur son enchaînement atomique ni sur sa géométrie. Pour caractériser précisément une molécule, il faut donc distinguer formule brute, représentation structurale et dénomination chimique."
  },
  {
    "order": 21,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Une molécule a pour formule brute $\\ce{C4H10O}$. Combien d'atomes contient-elle au total ? Donnez uniquement la valeur numérique.",
    "answer": {
      "type": "number",
      "value": 15
    },
    "explanation": "Les indices de la formule brute indiquent le nombre d'atomes de chaque élément dans la molécule : $\\ce{C4H10O}$ contient 4 atomes de carbone, 10 atomes d'hydrogène et 1 atome d'oxygène. Le nombre total d'atomes est donc $4+10+1=15$."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La formule brute indique la composition élémentaire d'une molécule.",
        "correct": true,
        "explanation": "La formule brute précise la nature des éléments présents ainsi que le nombre d'atomes de chacun d'eux. Elle ne renseigne toutefois pas directement sur leur enchaînement."
      },
      {
        "content": "La microanalyse peut fournir les pourcentages massiques des éléments constituant un composé.",
        "correct": true,
        "explanation": "L'analyse élémentaire permet de déterminer la contribution massique des différents éléments d'un composé. Ces proportions peuvent ensuite être utilisées pour établir des rapports atomiques et rechercher une formule empirique."
      },
      {
        "content": "Le carbone est usuellement tétravalent.",
        "correct": true,
        "explanation": "Dans les molécules organiques neutres usuelles, le carbone forme généralement un ensemble de liaisons dont la somme des ordres vaut quatre : par exemple quatre liaisons simples, deux doubles, ou une double et deux simples."
      },
      {
        "content": "L'oxygène neutre est usuellement divalent.",
        "correct": true,
        "explanation": "Un atome d'oxygène neutre forme généralement deux liaisons simples ou une liaison double, ce qui correspond à une valence usuelle de deux."
      },
      {
        "content": "L'hydrogène est usuellement monovalent.",
        "correct": true,
        "explanation": "L'hydrogène forme habituellement une seule liaison covalente. Cette monovalence constitue un repère simple pour vérifier la cohérence d'une représentation moléculaire."
      },
      {
        "content": "La formule brute permet toujours de connaître la géométrie d'une molécule.",
        "correct": false,
        "explanation": "La formule brute donne uniquement la composition de la molécule. Elle n'indique ni l'enchaînement précis des atomes ni leur disposition dans l'espace."
      },
      {
        "content": "Une même formule brute interdit toute isomérie.",
        "correct": false,
        "explanation": "Au contraire, des isomères possèdent la même formule brute mais diffèrent par leur structure ou leur organisation spatiale."
      },
      {
        "content": "L'azote neutre usuel est toujours pentavalent.",
        "correct": false,
        "explanation": "Dans les molécules organiques neutres simples, l'azote est généralement trivalent : la somme des ordres de liaison autour de l'atome d'azote vaut alors trois. La pentavalence ne constitue donc pas sa valence usuelle."
      },
      {
        "content": "La microanalyse permet toujours de déterminer la formule brute sans connaître la masse molaire.",
        "correct": false,
        "explanation": "La microanalyse permet d'obtenir les rapports atomiques et donc une formule empirique. Si la formule brute est un multiple de cette formule empirique, la masse molaire du composé est nécessaire pour déterminer ce facteur multiplicatif."
      },
      {
        "content": "Un nom commercial est une formule brute.",
        "correct": false,
        "explanation": "Un nom commercial sert à identifier un produit dans un contexte de commercialisation, tandis qu'une formule brute décrit sa composition en éléments chimiques. Ces deux informations ont des fonctions différentes."
      }
    ],
    "explanation": "Ces propositions mobilisent plusieurs notions fondamentales : la formule brute décrit la composition mais pas nécessairement la structure ; la microanalyse permet d'accéder aux proportions élémentaires et à la formule empirique ; enfin, les valences usuelles de H, O, N et C constituent des repères pour vérifier la cohérence des représentations moléculaires."
  }
];
