import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.4 – Section A – Alcools : propriétés et préparation
 */

export const UE14_CH8_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la fonction alcool, quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Une fonction alcool impose la présence d’un atome d’azote.",
        "correct": false,
        "explanation": "La fonction alcool est définie par le groupe $\\ce{-OH}$ et ne nécessite aucun atome d’azote."
      },
      {
        "content": "Elle peut être représentée par $\\ce{R-OH}$.",
        "correct": true,
        "explanation": "R représente le radical carboné."
      },
      {
        "content": "Le groupe caractéristique comporte une liaison O-H.",
        "correct": true,
        "explanation": "C'est le groupe hydroxyle: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Les alcools peuvent participer à des liaisons hydrogène grâce au H porté par O.",
        "correct": true,
        "explanation": "C'est la propriété explicitement citée."
      },
      {
        "content": "Un alcool est obligatoirement ionique.",
        "correct": false,
        "explanation": "La capacité à former des liaisons hydrogène n'implique pas une espèce ionique."
      }
    ],
    "explanation": "La introduit les alcools par le motif $\\ce{R-OH}$ et leur capacité à former des liaisons hydrogène."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi un alcool peut-il former des liaisons hydrogène?",
    "choices": [
      {
        "content": "Le H du groupe OH peut intervenir comme donneur.",
        "correct": true,
        "explanation": "C'est le point explicitement indiqué."
      },
      {
        "content": "Parce que tous les alcools sont chargés positivement.",
        "correct": false,
        "explanation": "Ils sont le plus souvent neutres."
      },
      {
        "content": "Une fonction alcool impose la présence d’un atome d’azote.",
        "correct": false,
        "explanation": "La fonction alcool est définie par le groupe $\\ce{-OH}$ et ne nécessite aucun atome d’azote."
      },
      {
        "content": "La liaison O-H n’est pas polarisée.",
        "correct": false,
        "explanation": "La relation correcte est: « La liaison O-H est polarisée ». La négation proposée est donc fausse."
      },
      {
        "content": "L'oxygène possède des doublets électroniques pouvant jouer le rôle d'accepteur.",
        "correct": true,
        "explanation": "C'est cohérent avec le modèle de liaison hydrogène déjà étudié."
      }
    ],
    "explanation": "Le groupe hydroxyle explique la capacité des alcools à participer à un réseau de liaisons hydrogène."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'hydratation d'un alcène :",
    "choices": [
      {
        "content": "Elle utilise de l'eau en milieu acide.",
        "correct": true,
        "explanation": "Le bilan indique $\\ce{H2O, H+}$."
      },
      {
        "content": "Elle conduit à une fonction alcool.",
        "correct": true,
        "explanation": "Bilan: alcène + eau → alcool."
      },
      {
        "content": "Elle consomme la double liaison.",
        "correct": true,
        "explanation": "H et OH s'ajoutent sur les carbones de C=C."
      },
      {
        "content": "Elle produit nécessairement un alcane.",
        "correct": false,
        "explanation": "Le produit recherché est un alcool."
      },
      {
        "content": "L’hydratation d’un alcène transforme directement le substrat en amide.",
        "correct": false,
        "explanation": "L’addition d’eau sur l’alcène conduit à une fonction alcool, sans introduire d’azote."
      }
    ],
    "explanation": "L'hydratation transforme une double liaison en fonction alcool."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel bilan résume correctement la préparation d'un alcool par hydratation?",
    "choices": [
      {
        "content": "Alcool + $\\ce{H2}$ → alcène.",
        "correct": false,
        "explanation": "L’addition ou l’hydratation sur la double liaison constitue une voie d’accès directe à ce produit."
      },
      {
        "content": "Aldéhyde + $\\ce{H2O}$ → alcane.",
        "correct": false,
        "explanation": "Ce bilan n'est pas enseigné ici."
      },
      {
        "content": "Alcène + $\\ce{H2O, H+}$ → alcool.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Alcène + Mg → alcool.",
        "correct": false,
        "explanation": "Le magnésium sert à former un organomagnésien à partir d'un dérivé halogéné."
      },
      {
        "content": "$\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "Le borohydrure est utilisé comme réducteur des composés carbonylés, pas comme réactif d’hydratation d’un alcène."
      }
    ],
    "explanation": "La préparation par hydratation ajoute les éléments de l'eau sur l'alcène."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la réduction d'un acide carboxylique:",
    "choices": [
      {
        "content": "Le produit final retenu est un alcool primaire.",
        "correct": true,
        "explanation": "Le bilan du tableau conduit bien au produit indiqué pour cette transformation."
      },
      {
        "content": "$\\ce{BH3}$ est l'exemple de réducteur cité.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Le produit attendu est un alcool tertiaire.",
        "correct": false,
        "explanation": "Le tableau donne un alcool primaire."
      },
      {
        "content": "La réduction d’une cétone par $\\ce{NaBH4}$ conduit à un alcool tertiaire.",
        "correct": false,
        "explanation": "Dans le cadre du chapitre, une cétone réduite par $\\ce{NaBH4}$ donne un alcool secondaire."
      },
      {
        "content": "Elle nécessite un réducteur puissant dans le cadre présenté.",
        "correct": true,
        "explanation": "L’exemple retenu est $\\ce{BH3}$: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La réduction forte d'un acide carboxylique est une voie de préparation d'un alcool primaire."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La réduction d'un aldéhyde par $\\ce{NaBH4}$ conduit:",
    "choices": [
      {
        "content": "La réduction d’une cétone par $\\ce{NaBH4}$ conduit à un alcool tertiaire.",
        "correct": false,
        "explanation": "Dans le cadre du chapitre, une cétone réduite par $\\ce{NaBH4}$ donne un alcool secondaire."
      },
      {
        "content": "À un alcool primaire.",
        "correct": true,
        "explanation": "Ce bilan correspond à la transformation attendue et relie correctement le substrat au produit."
      },
      {
        "content": "À une diminution du caractère oxydé du carbone carbonylé.",
        "correct": true,
        "explanation": "Il s'agit bien d'une réduction."
      },
      {
        "content": "À un alcool secondaire.",
        "correct": false,
        "explanation": "Le tableau réserve ce produit à la réduction d'une cétone."
      },
      {
        "content": "À un dérivé halogéné.",
        "correct": false,
        "explanation": "Aucun halogène n'est introduit: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Un aldéhyde réduit par $\\ce{NaBH4}$ donne un alcool primaire."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La réduction d'une cétone par $\\ce{NaBH4}$ conduit:",
    "choices": [
      {
        "content": "À une disparition du groupe carbonyle.",
        "correct": true,
        "explanation": "C=O est converti en carbone portant OH."
      },
      {
        "content": "À une amide.",
        "correct": false,
        "explanation": "Aucun atome d’azote n’est introduit par cette transformation, donc aucune fonction azotée n’est formée."
      },
      {
        "content": "La réduction d’une cétone par $\\ce{NaBH4}$ conduit à un alcool tertiaire.",
        "correct": false,
        "explanation": "Dans le cadre du chapitre, une cétone réduite par $\\ce{NaBH4}$ donne un alcool secondaire."
      },
      {
        "content": "À un alcool secondaire.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "À un alcool primaire.",
        "correct": false,
        "explanation": "Cela correspond à la réduction d'un aldéhyde dans le tableau."
      }
    ],
    "explanation": "Une cétone réduite par le borohydrure donne un alcool secondaire."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles associations réactif de départ → produit d'alcool sont exactes?",
    "choices": [
      {
        "content": "Acide carboxylique + $\\ce{BH3}$ → alcool primaire.",
        "correct": true,
        "explanation": "Des conditions de réduction plus fortes sont nécessaires pour atteindre le produit indiqué à partir de ce substrat."
      },
      {
        "content": "Aldéhyde + $\\ce{NaBH4}$ → alcool primaire.",
        "correct": true,
        "explanation": "Les conditions de réduction douce permettent ici de transformer le groupe fonctionnel sans poursuivre vers un produit plus réduit."
      },
      {
        "content": "Cétone + $\\ce{NaBH4}$ → alcool secondaire.",
        "correct": true,
        "explanation": "La réduction du groupe fonctionnel conduit à la formation du produit correspondant."
      },
      {
        "content": "Cétone + $\\ce{NaBH4}$ → alcool tertiaire.",
        "correct": false,
        "explanation": "Le produit est secondaire: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un alcool secondaire s’oxyde en aldéhyde dans le modèle étudié.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      }
    ],
    "explanation": "Le tableau de préparation permet d'associer directement la nature du carbonyle à la classe d'alcool obtenue."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel réactif est cité pour réduire un aldéhyde ou une cétone?",
    "choices": [
      {
        "content": "$\\ce{HCl}$.",
        "correct": false,
        "explanation": "C'est un acide halogéné, pas le réducteur indiqué."
      },
      {
        "content": "$\\ce{SOCl2}$.",
        "correct": false,
        "explanation": "Il est cité comme agent halogénant des alcools."
      },
      {
        "content": "La réduction d’une cétone par $\\ce{NaBH4}$ conduit à un alcool tertiaire.",
        "correct": false,
        "explanation": "Dans le cadre du chapitre, une cétone réduite par $\\ce{NaBH4}$ donne un alcool secondaire."
      },
      {
        "content": "$\\ce{NaBH4}$.",
        "correct": true,
        "explanation": "Le borohydrure de sodium est le réducteur doux indiqué."
      },
      {
        "content": "$\\ce{Mg}$ seul.",
        "correct": false,
        "explanation": "Mg sert à préparer un organomagnésien à partir de RX."
      }
    ],
    "explanation": "Le $\\ce{NaBH4}$ est le réducteur doux utilisé pour aldéhydes et cétones."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des préparations d'alcools présentées, quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Une réduction ne peut pas partir d'un acide, d'un aldéhyde ou d'une cétone.",
        "correct": false,
        "explanation": "La relation correcte est: « Une réduction peut partir d'un acide, d'un aldéhyde ou d'une cétone ». La négation proposée est donc fausse."
      },
      {
        "content": "Les organomagnésiens constituent une autre voie de préparation.",
        "correct": true,
        "explanation": "Une section leur est dédiée."
      },
      {
        "content": "Toutes les voies donnent exclusivement des alcools primaires.",
        "correct": false,
        "explanation": "Des alcools secondaires et tertiaires sont également obtenus."
      },
      {
        "content": "La réduction d’une cétone par $\\ce{NaBH4}$ conduit à un alcool tertiaire.",
        "correct": false,
        "explanation": "Dans le cadre du chapitre, une cétone réduite par $\\ce{NaBH4}$ donne un alcool secondaire."
      },
      {
        "content": "Une hydratation part d'un alcène.",
        "correct": true,
        "explanation": "L’addition ou l’hydratation sur la double liaison constitue une voie d’accès directe à ce produit."
      }
    ],
    "explanation": "La classe de l'alcool final dépend de la nature du substrat et de la voie utilisée."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un organomagnésien réagit avec un aldéhyde puis le milieu est hydrolysé.:",
    "choices": [
      {
        "content": "Un alcool secondaire s’oxyde en aldéhyde dans le modèle étudié.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      },
      {
        "content": "Le produit est un alcool secondaire.",
        "correct": true,
        "explanation": "Ce bilan reprend directement la transformation attendue dans cette réaction."
      },
      {
        "content": "Une étape d'hydrolyse est nécessaire.",
        "correct": true,
        "explanation": "Elle figure dans le bilan."
      },
      {
        "content": "Le groupement carboné de l'organomagnésien devient un substituant du carbone portant OH.",
        "correct": true,
        "explanation": "La liaison C-C est créée au niveau du carbonyle."
      },
      {
        "content": "Le produit est nécessairement un alcool primaire.",
        "correct": false,
        "explanation": "Le tableau donne un alcool secondaire."
      }
    ],
    "explanation": "Organomagnésien + aldéhyde, suivi d'hydrolyse, conduit à un alcool secondaire."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un organomagnésien réagit avec une cétone puis hydrolyse. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L'hydrolyse fait partie du bilan final.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Le produit reste une cétone.",
        "correct": false,
        "explanation": "Le carbonyle est transformé en alcool."
      },
      {
        "content": "Après réaction d’un organomagnésien sur un carbonyle, une hydrolyse est nécessaire pour obtenir l’alcool.",
        "correct": true,
        "explanation": "L’addition du groupe carboné est suivie d’une hydrolyse qui conduit à la fonction alcool."
      },
      {
        "content": "Le produit n’est pas un alcool tertiaire.",
        "correct": false,
        "explanation": "La relation correcte est: « Le produit est un alcool tertiaire ». La négation proposée est donc fausse."
      },
      {
        "content": "Une nouvelle liaison C-C est formée.",
        "correct": true,
        "explanation": "Le groupe R'' du Grignard s'ajoute au carbone carbonylé."
      }
    ],
    "explanation": "Une cétone possède déjà deux substituants carbonés; l'ajout du groupe du Grignard conduit à un alcool tertiaire."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Lorsqu'un organomagnésien réagit avec un ester dans le modèle:",
    "choices": [
      {
        "content": "Le produit final est un alcool tertiaire.",
        "correct": true,
        "explanation": "Ce bilan correspond à la transformation attendue et relie correctement le substrat au produit."
      },
      {
        "content": "L'organomagnésien réagit deux fois avec l'ester.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Le substituant apporté par l'organomagnésien se retrouve deux fois dans l'alcool final.",
        "correct": true,
        "explanation": "La insiste sur ce résultat."
      },
      {
        "content": "Une seule addition de l'organomagnésien est toujours suffisante.",
        "correct": false,
        "explanation": "deux réactions successives avec l'ester."
      },
      {
        "content": "Un alcool secondaire s’oxyde en aldéhyde dans le modèle étudié.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      }
    ],
    "explanation": "L'ester est le cas particulier où deux équivalents du même organomagnésien sont intégrés au carbone fonctionnel."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "dans le modèle étudié, combien de fois l'organomagnésien réagit-il avec un ester avant l'alcool tertiaire final?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "l'organomagnésien réagit deux fois avec l'ester."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare aldéhyde, cétone et ester comme substrats d'un organomagnésien. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Cétone → alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Ester → alcool tertiaire après deux additions du Grignard.",
        "correct": true,
        "explanation": "Cette propriété dérive directement de la réactivité spécifique du groupe fonctionnel considéré."
      },
      {
        "content": "Les trois substrats donnent nécessairement la même classe d'alcool.",
        "correct": false,
        "explanation": "Aldéhyde diffère des deux autres."
      },
      {
        "content": "Un alcool secondaire s’oxyde en aldéhyde dans le modèle étudié.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      },
      {
        "content": "Aldéhyde → alcool secondaire après hydrolyse.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      }
    ],
    "explanation": "La classe du produit est un repère fondamental de la préparation des alcools par Grignard."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "On fait réagir $\\ce{CH3MgBr}$ avec la propanone $\\ce{CH3COCH3}$ puis hydrolyse. Quelle classe d'alcool doit-on attendre?",
    "choices": [
      {
        "content": "Alcool primaire.",
        "correct": false,
        "explanation": "Ce n'est pas le bilan."
      },
      {
        "content": "Alcool secondaire.",
        "correct": false,
        "explanation": "Le produit d'une cétone est tertiaire."
      },
      {
        "content": "Aucune fonction alcool.",
        "correct": false,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      },
      {
        "content": "Amide.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool ne crée pas de fonction amide."
      },
      {
        "content": "Alcool tertiaire.",
        "correct": true,
        "explanation": "Une cétone + organomagnésien donne un alcool tertiaire."
      }
    ],
    "explanation": "La propanone possède deux groupes méthyle; l'addition d'un troisième groupe méthyle donne un carbone alcool tertiaire."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On fait réagir $\\ce{CH3MgBr}$ avec l'éthanal $\\ce{CH3CHO}$ puis hydrolyse. Quelles conclusions sont cohérentes?",
    "choices": [
      {
        "content": "Le produit est un alcool tertiaire.",
        "correct": false,
        "explanation": "Ce serait le cas d'une cétone."
      },
      {
        "content": "L'hydrolyse est omise du mécanisme final.",
        "correct": false,
        "explanation": "Elle est nécessaire dans le bilan présenté."
      },
      {
        "content": "Un alcool secondaire s’oxyde en aldéhyde dans le modèle étudié.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      },
      {
        "content": "Le produit est un alcool secondaire.",
        "correct": true,
        "explanation": "L’addition d’un organomagnésien sur le carbonyle permet d’obtenir le produit correspondant après hydrolyse."
      },
      {
        "content": "Le groupe méthyle du réactif de Grignard est incorporé au squelette.",
        "correct": true,
        "explanation": "Création d'une liaison C-C: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "L'éthanal illustre le cas général de formation d'un alcool secondaire par addition d'un Grignard sur un aldéhyde."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une préparation d'alcool tertiaire peut,, faire intervenir:",
    "choices": [
      {
        "content": "Une cétone et un organomagnésien.",
        "correct": true,
        "explanation": "Cette voie conduit directement au type de produit indiqué dans le bilan de la réaction."
      },
      {
        "content": "Un ester et un organomagnésien en deux additions.",
        "correct": true,
        "explanation": "Cette autre voie de synthèse constitue une alternative directe pour former ce produit."
      },
      {
        "content": "Un aldéhyde et $\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "Cela donne un alcool primaire."
      },
      {
        "content": "Une cétone et $\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "Cela donne un alcool secondaire."
      },
      {
        "content": "La réduction d’une cétone par $\\ce{NaBH4}$ conduit à un alcool tertiaire.",
        "correct": false,
        "explanation": "Dans le cadre du chapitre, une cétone réduite par $\\ce{NaBH4}$ donne un alcool secondaire."
      }
    ],
    "explanation": "Les organomagnésiens sont les voies mises en avant pour former les alcools tertiaires."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle classe d'alcool obtient-on après réaction d'un organomagnésien avec une cétone puis hydrolyse?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "tertiaire",
        "alcool tertiaire"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le bilan est: organomagnésien + cétone → alcool tertiaire."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans un contexte de synthèse, pourquoi les organomagnésiens sont-ils particulièrement utiles dans cette section?",
    "choices": [
      {
        "content": "Ils permettent d'accéder à plusieurs classes d'alcools.",
        "correct": true,
        "explanation": "Secondaires et tertiaires selon le substrat."
      },
      {
        "content": "Ils ne sont pas utilisés avec aldéhydes, cétones et esters.",
        "correct": false,
        "explanation": "La relation correcte est: « Ils sont utilisés avec aldéhydes, cétones et esters ». La négation proposée est donc fausse."
      },
      {
        "content": "Ils ne modifient jamais le squelette carboné.",
        "correct": false,
        "explanation": "Ils apportent justement un substituant carboné."
      },
      {
        "content": "La réduction d’un aldéhyde conduit à un alcool primaire.",
        "correct": true,
        "explanation": "Le carbone du groupe aldéhyde devient le carbone portant le groupe hydroxyle de l’alcool primaire."
      },
      {
        "content": "Ils permettent de créer une liaison C-C.",
        "correct": true,
        "explanation": "Le groupe carboné du Grignard s'ajoute au carbone électrophile du carbonyle."
      }
    ],
    "explanation": "Leur intérêt synthétique tient à l'allongement du squelette carboné tout en générant une fonction alcool."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Alcène + eau/H+ → alcool.",
        "correct": true,
        "explanation": "L’addition ou l’hydratation sur la double liaison constitue une voie d’accès directe à ce produit."
      },
      {
        "content": "Aldéhyde + $\\ce{NaBH4}$ → alcool primaire.",
        "correct": true,
        "explanation": "Cette transformation diminue le degré d’oxydation de la fonction concernée : il s’agit bien d’une réduction."
      },
      {
        "content": "Cétone + $\\ce{NaBH4}$ → alcool secondaire.",
        "correct": true,
        "explanation": "Cette transformation diminue le degré d’oxydation de la fonction concernée : il s’agit bien d’une réduction."
      },
      {
        "content": "Organomagnésien + aldéhyde → alcool secondaire après hydrolyse.",
        "correct": true,
        "explanation": "Le réactif organomagnésien apporte un groupe carboné nucléophile qui crée une nouvelle liaison carbone-carbone."
      },
      {
        "content": "Organomagnésien + cétone → alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Le réactif organomagnésien apporte un groupe carboné nucléophile qui crée une nouvelle liaison carbone-carbone."
      },
      {
        "content": "Acide + $\\ce{NaBH4}$ → alcool tertiaire.",
        "correct": false,
        "explanation": "L’exemple retenu est $\\ce{BH3}$ et un alcool primaire."
      },
      {
        "content": "Ester + organomagnésien → alcool primaire.",
        "correct": false,
        "explanation": "Le produit est tertiaire : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Aldéhyde + organomagnésien → alcool tertiaire.",
        "correct": false,
        "explanation": "Le produit est secondaire : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Cétone + $\\ce{NaBH4}$ → amine.",
        "correct": false,
        "explanation": "Cette proposition est écartée : d'azote ne correspond pas au bilan ou à la propriété attendue."
      },
      {
        "content": "Hydratation d'alcène → dérivé halogéné.",
        "correct": false,
        "explanation": "Le produit est un alcool."
      }
    ],
    "explanation": "Cette sélection consolide les principales voies de préparation des alcools."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans le tableau, combien de grandes familles de substrats carbonylés sont explicitement utilisées avec les organomagnésiens: aldéhydes, cétones et esters?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Trois familles sont présentées: aldéhydes, cétones et esters."
  }
];
