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
        "content": "La fonction alcool peut être représentée par $\\ce{R-OH}$.",
        "correct": true,
        "explanation": "Dans la notation $\\ce{R-OH}$, R désigne le radical carboné lié au groupe hydroxyle."
      },
      {
        "content": "Le groupe caractéristique comporte une liaison O-H.",
        "correct": true,
        "explanation": "Le groupe caractéristique d’un alcool est le groupe hydroxyle $\\ce{-OH}$."},
      {
        "content": "Les alcools peuvent participer à des liaisons hydrogène grâce au H porté par O.",
        "correct": true,
        "explanation": "Le groupe $\\ce{-OH}$ permet à l’alcool de donner une liaison hydrogène par l’intermédiaire de son hydrogène."},
      {
        "content": "Un alcool est obligatoirement ionique.",
        "correct": false,
        "explanation": "La capacité à former des liaisons hydrogène n'implique pas une espèce ionique."
      }
    ],
    "explanation": "La fonction alcool se note $\\ce{R-OH}$ ; le groupe hydroxyle permet notamment la formation de liaisons hydrogène grâce à l’hydrogène porté par l’oxygène."
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
        "explanation": "L’hydrogène porté par l’oxygène peut jouer le rôle de donneur dans une liaison hydrogène."
      },
      {
        "content": "Parce que tous les alcools sont chargés positivement.",
        "correct": false,
        "explanation": "La fonction alcool est représentée par $\\ce{R-OH}$ sans charge positive permanente sur la molécule."
      },
      {
        "content": "Une fonction alcool impose la présence d’un atome d’azote.",
        "correct": false,
        "explanation": "La fonction alcool est définie par le groupe $\\ce{-OH}$ et ne nécessite aucun atome d’azote."
      },
      {
        "content": "La liaison O-H n’est pas polarisée.",
        "correct": false,
        "explanation": "La liaison O-H est polarisée ; cette polarisation permet à l’hydrogène porté par O de participer aux liaisons hydrogène."
      },
      {
        "content": "Le groupe $\\ce{-OH}$ est à l’origine de cette capacité à former des liaisons hydrogène.",
        "correct": true,
        "explanation": "La capacité d’un alcool à former des liaisons hydrogène est reliée au groupe $\\ce{-OH}$, en particulier à l’hydrogène porté par l’oxygène."
      }
    ],
    "explanation": "L’hydrogène porté par l’oxygène peut jouer le rôle de donneur dans une liaison hydrogène."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'hydratation d'un alcène :",
    "choices": [
      {
        "content": "L'hydratation d'un alcène utilise de l'eau en milieu acide.",
        "correct": true,
        "explanation": "Le bilan d’hydratation utilise $\\ce{H2O}$ en milieu acide, ce qui correspond bien à la présence de $\\ce{H+}$."
      },
      {
        "content": "L'hydratation d'un alcène conduit à une fonction alcool.",
        "correct": true,
        "explanation": "L'eau s'ajoute sur la double liaison de l'alcène, qui est consommée, pour former un alcool."
      },
      {
        "content": "L'hydratation d'un alcène consomme la double liaison.",
        "correct": true,
        "explanation": "L’addition de H et de OH sur les deux carbones de $\\ce{C=C}$ consomme la double liaison."
      },
      {
        "content": "L'hydratation d'un alcène produit nécessairement un alcane.",
        "correct": false,
        "explanation": "L’hydratation d’un alcène conduit à un alcool, pas à un alcane."
      },
      {
        "content": "L’hydratation d’un alcène transforme directement le substrat en amide.",
        "correct": false,
        "explanation": "L’addition d’eau sur l’alcène conduit à une fonction alcool, sans introduire d’azote."
      }
    ],
    "explanation": "L’hydratation d’un alcène ajoute les éléments de l’eau sur la double liaison en milieu acide et conduit à un alcool."
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
        "explanation": "L’addition de $\\ce{H2}$ ne correspond pas à une hydratation et ne transforme pas un alcool en alcène."},
      {
        "content": "Aldéhyde + $\\ce{H2O}$ → alcane.",
        "correct": false,
        "explanation": "Une hydratation d’alcène part d’un alcène et utilise $\\ce{H2O}$ en milieu acide ; le bilan proposé avec un aldéhyde ne correspond pas à cette transformation."
      },
      {
        "content": "Alcène + $\\ce{H2O, H+}$ → alcool.",
        "correct": true,
        "explanation": "L’ajout de $\\ce{H2O}$ en milieu acide sur la double liaison d’un alcène conduit à un alcool."
      },
      {
        "content": "Alcène + Mg → alcool.",
        "correct": false,
        "explanation": "Le magnésium sert à former un organomagnésien à partir d'un dérivé halogéné."
      },
      {
        "content": "Alcène + $\\ce{NaBH4}$ → alcool.",
        "correct": false,
        "explanation": "$\\ce{NaBH4}$ réduit des composés carbonylés ; il ne réalise pas l’hydratation d’un alcène."
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
        "explanation": "La réduction poussée d’un acide carboxylique conduit à l’alcool primaire correspondant."
      },
      {
        "content": "$\\ce{BH3}$ est l'exemple de réducteur cité.",
        "correct": true,
        "explanation": "$\\ce{BH3}$ est l’exemple de réducteur puissant utilisé ici pour réduire l’acide carboxylique."},
      {
        "content": "Le produit attendu est un alcool tertiaire.",
        "correct": false,
        "explanation": "La réduction d’un acide carboxylique conduit à un alcool primaire, pas à un alcool tertiaire."
      },
      {
        "content": "$\\ce{NaBH4}$ est le réducteur puissant retenu pour transformer l’acide carboxylique en alcool primaire.",
        "correct": false,
        "explanation": "Dans la réduction de l’acide carboxylique, le réducteur puissant indiqué est $\\ce{BH3}$ ; $\\ce{NaBH4}$ est utilisé pour les aldéhydes et les cétones."
      },
      {
        "content": "La réduction d'un acide carboxylique nécessite un réducteur puissant dans le cadre présenté.",
        "correct": true,
        "explanation": "$\\ce{BH3}$ est l’exemple de réducteur puissant utilisé pour réduire un acide carboxylique en alcool primaire."
      }
    ],
    "explanation": "La réduction poussée d’un acide carboxylique conduit à l’alcool primaire correspondant."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La réduction d'un aldéhyde par $\\ce{NaBH4}$ conduit:",
    "choices": [
      {
        "content": "À un acide carboxylique.",
        "correct": false,
        "explanation": "La réduction d’un aldéhyde par $\\ce{NaBH4}$ donne un alcool primaire, pas un acide carboxylique."
      },
      {
        "content": "À un alcool primaire.",
        "correct": true,
        "explanation": "La réduction de l’aldéhyde transforme le groupe $\\ce{-CHO}$ en groupe $\\ce{-CH2OH}$ : l’alcool obtenu est primaire."},
      {
        "content": "À une diminution du caractère oxydé du carbone carbonylé.",
        "correct": true,
        "explanation": "Le carbone du groupe carbonyle gagne des liaisons à l’hydrogène : son degré d’oxydation diminue."
      },
      {
        "content": "À un alcool secondaire.",
        "correct": false,
        "explanation": "Un alcool secondaire est obtenu par réduction d’une cétone ; la réduction d’un aldéhyde donne un alcool primaire."
      },
      {
        "content": "À un dérivé halogéné.",
        "correct": false,
        "explanation": "Aucun halogène n'est introduit lors de cette réduction ; un dérivé halogéné n'est donc pas formé."
      }
    ],
    "explanation": "Le $\\ce{NaBH4}$ réduit un aldéhyde en alcool primaire."
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
        "explanation": "Le groupe carbonyle $\\ce{C=O}$ est réduit en un carbone portant le groupe $\\ce{-OH}$."},
      {
        "content": "À une amide.",
        "correct": false,
        "explanation": "Aucun atome d’azote n’est introduit par cette transformation, donc aucune fonction azotée n’est formée."
      },
      {
        "content": "La réduction d’une cétone par $\\ce{NaBH4}$ conduit à un alcool tertiaire.",
        "correct": false,
        "explanation": "Une cétone réduite par $\\ce{NaBH4}$ donne un alcool secondaire."
      },
      {
        "content": "À un alcool secondaire.",
        "correct": true,
        "explanation": "La réduction d’une cétone par $\\ce{NaBH4}$ conduit à un alcool secondaire."},
      {
        "content": "À un alcool primaire.",
        "correct": false,
        "explanation": "La réduction d’un aldéhyde conduit à un alcool primaire ; une cétone donne un alcool secondaire."
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
        "explanation": "$\\ce{BH3}$ est le réducteur puissant utilisé pour convertir un acide carboxylique en alcool primaire."
      },
      {
        "content": "Aldéhyde + $\\ce{NaBH4}$ → alcool primaire.",
        "correct": true,
        "explanation": "$\\ce{NaBH4}$ réduit un aldéhyde en alcool primaire."
      },
      {
        "content": "Cétone + $\\ce{NaBH4}$ → alcool secondaire.",
        "correct": true,
        "explanation": "La réduction de la cétone conserve ses deux substituants carbonés et conduit donc à un alcool secondaire."
      },
      {
        "content": "Cétone + $\\ce{NaBH4}$ → alcool tertiaire.",
        "correct": false,
        "explanation": "Une cétone réduite par $\\ce{NaBH4}$ donne un alcool secondaire, et non un alcool tertiaire."},
      {
        "content": "Un alcool secondaire s’oxyde en aldéhyde dans le modèle étudié.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      }
    ],
    "explanation": "Un acide carboxylique réduit par $\\ce{BH3}$ et un aldéhyde ou une cétone réduits par $\\ce{NaBH4}$ conduisent respectivement à des alcools primaire, primaire et secondaire."
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
        "explanation": "$\\ce{HCl}$ est un acide halogéné et n’est pas le réducteur doux utilisé pour les aldéhydes et cétones."
      },
      {
        "content": "$\\ce{SOCl2}$.",
        "correct": false,
        "explanation": "$\\ce{SOCl2}$ est un agent halogénant utilisé pour convertir un alcool en dérivé chloré, pas un réducteur carbonylé."
      },
      {
        "content": "$\\ce{BH3}$.",
        "correct": false,
        "explanation": "$\\ce{BH3}$ réduit un acide carboxylique en alcool primaire ; pour les aldéhydes et les cétones, le réducteur doux utilisé est $\\ce{NaBH4}$."
      },
      {
        "content": "$\\ce{NaBH4}$.",
        "correct": true,
        "explanation": "Le borohydrure de sodium est le réducteur doux indiqué."
      },
      {
        "content": "$\\ce{Mg}$ seul.",
        "correct": false,
        "explanation": "Le magnésium sert à préparer $\\ce{RMgX}$ à partir de $\\ce{R-X}$ ; il n’est pas le réducteur doux demandé."
      }
    ],
    "explanation": "Le réducteur doux utilisé pour les aldéhydes et les cétones est le $\\ce{NaBH4}$."
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
        "explanation": "Les voies étudiées comprennent justement la réduction d’un acide carboxylique, d’un aldéhyde ou d’une cétone pour former un alcool."
      },
      {
        "content": "Les organomagnésiens constituent une autre voie de préparation.",
        "correct": true,
        "explanation": "Les organomagnésiens constituent une voie de synthèse d’alcools par addition sur un composé carbonylé."
      },
      {
        "content": "Toutes les voies donnent exclusivement des alcools primaires.",
        "correct": false,
        "explanation": "Des alcools secondaires et tertiaires sont également obtenus."
      },
      {
        "content": "La réduction d’une cétone par $\\ce{NaBH4}$ conduit à un alcool tertiaire.",
        "correct": false,
        "explanation": "Une cétone réduite par $\\ce{NaBH4}$ donne un alcool secondaire."
      },
      {
        "content": "Une hydratation part d'un alcène.",
        "correct": true,
        "explanation": "L’hydratation d’un alcène est bien une voie directe de préparation d’un alcool."
      }
    ],
    "explanation": "Les alcools peuvent être préparés par hydratation d’un alcène, par réduction d’un acide, d’un aldéhyde ou d’une cétone, ou à partir d’un organomagnésien."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un organomagnésien réagit avec un aldéhyde puis le milieu est hydrolysé. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L’organomagnésien ne forme aucune nouvelle liaison carbone-carbone avec l’aldéhyde.",
        "correct": false,
        "explanation": "Le carbone nucléophile de l’organomagnésien s’ajoute au carbone carbonylé de l’aldéhyde : une nouvelle liaison C-C est donc formée."
      },
      {
        "content": "Le produit est un alcool secondaire.",
        "correct": true,
        "explanation": "L’addition de l’organomagnésien sur un aldéhyde suivie de l’hydrolyse conduit à un alcool secondaire."
      },
      {
        "content": "Une étape d'hydrolyse est nécessaire.",
        "correct": true,
        "explanation": "L’hydrolyse protonne l’intermédiaire formé après l’addition de l’organomagnésien et permet d’obtenir l’alcool."
      },
      {
        "content": "Le groupement carboné de l'organomagnésien devient un substituant du carbone portant OH.",
        "correct": true,
        "explanation": "Le fragment carboné du Grignard se fixe sur le carbone carbonylé ; cette étape crée la nouvelle liaison C-C."
      },
      {
        "content": "Le produit est nécessairement un alcool primaire.",
        "correct": false,
        "explanation": "Avec un aldéhyde, l’addition d’un organomagnésien suivie d’une hydrolyse conduit à un alcool secondaire, pas primaire."
      }
    ],
    "explanation": "Un organomagnésien réagit avec le carbone carbonylé d’un aldéhyde ; après hydrolyse, le produit est un alcool secondaire et une nouvelle liaison C-C a été formée."
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
        "explanation": "L’hydrolyse est nécessaire pour transformer l’intermédiaire magnésien en alcool."
      },
      {
        "content": "Le produit reste une cétone.",
        "correct": false,
        "explanation": "L’addition de l’organomagnésien transforme le groupe carbonyle de la cétone en fonction alcool après hydrolyse."
      },
      {
        "content": "Après réaction d’un organomagnésien sur un carbonyle, une hydrolyse est nécessaire pour obtenir l’alcool.",
        "correct": true,
        "explanation": "L’addition du groupe carboné est suivie d’une hydrolyse qui conduit à la fonction alcool."
      },
      {
        "content": "Le produit n’est pas un alcool tertiaire.",
        "correct": false,
        "explanation": "Avec une cétone, l’addition de l’organomagnésien suivie d’une hydrolyse conduit bien à un alcool tertiaire."
      },
      {
        "content": "Une nouvelle liaison C-C est formée.",
        "correct": true,
        "explanation": "Le groupe R'' du Grignard s'ajoute au carbone carbonylé."
      }
    ],
    "explanation": "L’hydrolyse est nécessaire pour transformer l’intermédiaire magnésien en alcool."
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
        "explanation": "Après deux additions de l’organomagnésien sur l’ester puis hydrolyse, le carbone portant $\\ce{-OH}$ est lié à trois groupes carbonés : l’alcool est tertiaire."
      },
      {
        "content": "L'organomagnésien réagit deux fois avec l'ester.",
        "correct": true,
        "explanation": "Avec un ester, deux additions successives du même organomagnésien sont nécessaires avant l’hydrolyse finale."
      },
      {
        "content": "Le substituant apporté par l'organomagnésien se retrouve deux fois dans l'alcool final.",
        "correct": true,
        "explanation": "Les deux additions expliquent que le substituant apporté par l’organomagnésien apparaisse deux fois dans l’alcool tertiaire final."
      },
      {
        "content": "Une seule addition de l'organomagnésien est toujours suffisante.",
        "correct": false,
        "explanation": "Un ester subit deux additions successives de l’organomagnésien dans le bilan considéré."
      },
      {
        "content": "Le substituant apporté par l’organomagnésien n’apparaît qu’une seule fois dans l’alcool final.",
        "correct": false,
        "explanation": "Avec un ester, l’organomagnésien réagit deux fois ; le substituant qu’il apporte se retrouve donc deux fois dans l’alcool tertiaire final."
      }
    ],
    "explanation": "Avec un ester, l’organomagnésien réagit deux fois ; après hydrolyse, le produit final est un alcool tertiaire."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans le modèle étudié, combien de fois l’organomagnésien réagit-il avec un ester avant l’alcool tertiaire final ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "L’organomagnésien réagit deux fois avec l’ester avant l’hydrolyse qui conduit à l’alcool tertiaire."
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
        "explanation": "L’addition d’un organomagnésien sur une cétone puis hydrolyse transforme le carbonyle en alcool tertiaire."
      },
      {
        "content": "Ester → alcool tertiaire après deux additions du Grignard.",
        "correct": true,
        "explanation": "Un ester subit deux additions du même organomagnésien avant l’hydrolyse finale qui conduit à l’alcool tertiaire."
      },
      {
        "content": "Les trois substrats donnent nécessairement la même classe d'alcool.",
        "correct": false,
        "explanation": "Un aldéhyde conduit à un alcool secondaire, alors qu’une cétone et un ester conduisent à des alcools tertiaires."
      },
      {
        "content": "L’ester conduit à un alcool secondaire après une seule addition de l’organomagnésien.",
        "correct": false,
        "explanation": "Un ester conduit à un alcool tertiaire après deux additions successives de l’organomagnésien, et non à un alcool secondaire après une seule addition."
      },
      {
        "content": "Aldéhyde → alcool secondaire après hydrolyse.",
        "correct": true,
        "explanation": "L’addition d’un organomagnésien sur un aldéhyde puis hydrolyse donne un alcool secondaire."
      }
    ],
    "explanation": "Avec un organomagnésien, un aldéhyde conduit à un alcool secondaire, tandis qu’une cétone ou un ester conduit à un alcool tertiaire ; l’ester nécessite deux additions."
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
        "explanation": "Avec une cétone, l’addition d’un organomagnésien conduit à un alcool tertiaire après hydrolyse, et non à un alcool primaire."
      },
      {
        "content": "Alcool secondaire.",
        "correct": false,
        "explanation": "Avec une cétone comme la propanone, l’addition d’un organomagnésien suivie d’une hydrolyse conduit à un alcool tertiaire."
      },
      {
        "content": "Aucune fonction alcool.",
        "correct": false,
        "explanation": "Après addition de l’organomagnésien puis hydrolyse, une fonction alcool est bien formée."
      },
      {
        "content": "Amide.",
        "correct": false,
        "explanation": "La réaction d’un organomagnésien avec la propanone conduit à un alcool tertiaire ; aucune fonction amide n’est formée."
      },
      {
        "content": "Alcool tertiaire.",
        "correct": true,
        "explanation": "Une cétone + organomagnésien donne un alcool tertiaire."
      }
    ],
    "explanation": "Avec une cétone, l’addition d’un organomagnésien conduit à un alcool tertiaire après hydrolyse, et non à un alcool primaire."
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
        "explanation": "Avec un aldéhyde comme l’éthanal, l’organomagnésien conduit à un alcool secondaire ; l’alcool tertiaire est obtenu avec une cétone."
      },
      {
        "content": "L'hydrolyse est omise du mécanisme final.",
        "correct": false,
        "explanation": "L’hydrolyse finale est nécessaire pour protoner l’intermédiaire magnésien et obtenir l’alcool."
      },
      {
        "content": "L’organomagnésien ne crée aucune nouvelle liaison carbone-carbone avec l’éthanal.",
        "correct": false,
        "explanation": "Le groupe méthyle de $\\ce{CH3MgBr}$ s’ajoute au carbone carbonylé de l’éthanal et crée une nouvelle liaison C-C."
      },
      {
        "content": "Le produit est un alcool secondaire.",
        "correct": true,
        "explanation": "L’éthanal est un aldéhyde ; son addition avec un organomagnésien puis hydrolyse conduit donc à un alcool secondaire."
      },
      {
        "content": "Le groupe méthyle du réactif de Grignard est incorporé au squelette.",
        "correct": true,
        "explanation": "Un organomagnésien apporte un fragment carboné nucléophile qui forme une nouvelle liaison carbone–carbone avec un centre électrophile."
      }
    ],
    "explanation": "Le $\\ce{CH3MgBr}$ ajoute un groupe méthyle au carbone carbonylé de l’éthanal ; après hydrolyse, on obtient un alcool secondaire."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une préparation d’alcool tertiaire peut faire intervenir :",
    "choices": [
      {
        "content": "Une cétone et un organomagnésien.",
        "correct": true,
        "explanation": "Une cétone réagit avec un organomagnésien et donne, après hydrolyse, un alcool tertiaire."
      },
      {
        "content": "Un ester et un organomagnésien en deux additions.",
        "correct": true,
        "explanation": "Un ester réagit deux fois avec l’organomagnésien et conduit, après hydrolyse, à un alcool tertiaire."
      },
      {
        "content": "Un aldéhyde et $\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "La réduction d’un aldéhyde par $\\ce{NaBH4}$ conduit à un alcool primaire, pas à un alcool tertiaire."
      },
      {
        "content": "Une cétone et $\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "La réduction d’une cétone par $\\ce{NaBH4}$ conduit à un alcool secondaire, pas à un alcool tertiaire."
      },
      {
        "content": "Un aldéhyde et un organomagnésien donnent un alcool tertiaire après hydrolyse.",
        "correct": false,
        "explanation": "Un aldéhyde réagit avec un organomagnésien pour donner, après hydrolyse, un alcool secondaire et non tertiaire."
      }
    ],
    "explanation": "Un alcool tertiaire peut être obtenu par addition d’un organomagnésien sur une cétone, ou sur un ester après deux additions successives."
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
    "question": "Dans un contexte de synthèse, pourquoi les organomagnésiens sont-ils particulièrement utiles ?",
    "choices": [
      {
        "content": "Ils permettent d'accéder à plusieurs classes d'alcools.",
        "correct": true,
        "explanation": "Un aldéhyde conduit à un alcool secondaire, tandis qu’une cétone ou un ester conduit à un alcool tertiaire dans les cas étudiés."
      },
      {
        "content": "Ils ne sont pas utilisés avec aldéhydes, cétones et esters.",
        "correct": false,
        "explanation": "Les organomagnésiens sont précisément utilisés avec les aldéhydes, les cétones et les esters dans les réactions étudiées."
      },
      {
        "content": "Ils ne modifient jamais le squelette carboné.",
        "correct": false,
        "explanation": "Un organomagnésien apporte un fragment carboné au carbone électrophile du partenaire et modifie donc le squelette carboné."
      },
      {
        "content": "Ils peuvent réagir avec des aldéhydes, des cétones et des esters.",
        "correct": true,
        "explanation": "Les organomagnésiens sont utilisés avec les aldéhydes, les cétones et les esters, qui possèdent un carbone carbonylé électrophile."
      },
      {
        "content": "Ils permettent de créer une liaison C-C.",
        "correct": true,
        "explanation": "Le groupe carboné du Grignard s'ajoute au carbone électrophile du carbonyle."
      }
    ],
    "explanation": "Un aldéhyde conduit à un alcool secondaire, tandis qu’une cétone ou un ester conduit à un alcool tertiaire dans les cas étudiés."
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
        "explanation": "L’hydratation d’un alcène par l’eau en milieu acide conduit à un alcool."
      },
      {
        "content": "Aldéhyde + $\\ce{NaBH4}$ → alcool primaire.",
        "correct": true,
        "explanation": "La réduction de l’aldéhyde ou de la cétone transforme le groupe carbonyle en fonction alcool."
      },
      {
        "content": "Cétone + $\\ce{NaBH4}$ → alcool secondaire.",
        "correct": true,
        "explanation": "La réduction de l’aldéhyde ou de la cétone transforme le groupe carbonyle en fonction alcool."
      },
      {
        "content": "Organomagnésien + aldéhyde → alcool secondaire après hydrolyse.",
        "correct": true,
        "explanation": "L’organomagnésien ajoute un groupe carboné au carbone du carbonyle avant l’hydrolyse qui forme l’alcool."
      },
      {
        "content": "Organomagnésien + cétone → alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "L’organomagnésien ajoute un groupe carboné au carbone du carbonyle avant l’hydrolyse qui forme l’alcool."
      },
      {
        "content": "Acide + $\\ce{NaBH4}$ → alcool tertiaire.",
        "correct": false,
        "explanation": "$\\ce{BH3}$ réduit un acide carboxylique en alcool primaire ; le bilan proposé avec $\\ce{NaBH4}$ et un alcool tertiaire est donc incorrect."
      },
      {
        "content": "Ester + organomagnésien → alcool primaire.",
        "correct": false,
        "explanation": "Un ester réagit deux fois avec l’organomagnésien et conduit, après hydrolyse, à un alcool tertiaire et non primaire."
      },
      {
        "content": "Aldéhyde + organomagnésien → alcool tertiaire.",
        "correct": false,
        "explanation": "Un aldéhyde réagit avec l’organomagnésien pour donner, après hydrolyse, un alcool secondaire et non tertiaire."
      },
      {
        "content": "Cétone + $\\ce{NaBH4}$ → amine.",
        "correct": false,
        "explanation": "$\\ce{NaBH4}$ réduit une cétone en alcool secondaire ; aucun atome d’azote n’est introduit."
      },
      {
        "content": "Hydratation d'alcène → dérivé halogéné.",
        "correct": false,
        "explanation": "L’hydratation d’un alcène ajoute les éléments de l’eau et forme un alcool ; elle ne forme pas un dérivé halogéné."
      }
    ],
    "explanation": "L’hydratation d’un alcène par l’eau en milieu acide conduit à un alcool."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de familles de substrats carbonylés — aldéhydes, cétones et esters — sont utilisées avec les organomagnésiens ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Trois familles carbonylées sont utilisées avec les organomagnésiens : les aldéhydes, les cétones et les esters."
  }
];
