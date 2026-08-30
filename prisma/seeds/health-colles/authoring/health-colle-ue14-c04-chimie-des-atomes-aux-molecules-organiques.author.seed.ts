import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';
import { TEX_UNITS, texQuantity } from '../../tex-units';

const U = TEX_UNITS;

/**
 * UE14 — Colle C04 — Chimie — Des atomes aux molécules organiques
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 * Périmètre : Chimie générale 1.1→1.4 + Chimie organique 2.1→2.3.
 */
export const UE14_COLLE_C04_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la structure atomique et de la classification périodique, quelles propositions sont exactes ?",
    "explanation": "Le numéro atomique $\\mathrm{Z}$ définit l’élément et correspond au nombre de protons. Les isotopes conservent $\\mathrm{Z}$ mais diffèrent par leur nombre de neutrons. Une sous-couche $\\mathrm{p}$ comporte trois orbitales.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:atomes-classification"
    ],
    "choices": [
      {
        "content": "Le numéro atomique $\\mathrm{Z}$ correspond au nombre de protons du noyau.",
        "correct": true,
        "explanation": "Changer $\\mathrm{Z}$ revient à changer d’élément chimique."
      },
      {
        "content": "Deux isotopes d’un même élément possèdent le même $\\mathrm{Z}$ mais des nombres de neutrons différents.",
        "correct": true,
        "explanation": "Ils ont le même nombre de protons mais des nombres de masse différents."
      },
      {
        "content": "Une sous-couche $\\mathrm{p}$ contient trois orbitales.",
        "correct": true,
        "explanation": "Pour $\\ell = 1$, le nombre d’orbitales vaut $2\\ell + 1 = 3$."
      },
      {
        "content": "Le nombre de masse $\\mathrm{A}$ est égal à $\\mathrm{Z} - \\mathrm{N}$.",
        "correct": false,
        "explanation": "Le nombre de masse est $\\mathrm{A} = \\mathrm{Z} + \\mathrm{N}$."
      },
      {
        "content": "Un atome neutre possède toujours plus d’électrons que de protons.",
        "correct": false,
        "explanation": "Dans un atome neutre, le nombre d’électrons est égal au nombre de protons."
      }
    ]
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien d’électrons peut contenir au maximum une sous-couche $\\mathrm{p}$ complète ? Donnez uniquement la valeur numérique.",
    "explanation": "Une sous-couche $\\mathrm{p}$ comporte trois orbitales. Chaque orbitale peut accueillir au maximum deux électrons de spins opposés, soit $3 \\times 2 = 6$ électrons.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:sous-couche-p"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "6"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true,
        "normalizeUnicode": true
      }
    }
  },
  {
    "order": 3,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel ion possède la même configuration électronique que le néon après perte d’électrons par l’atome neutre correspondant ?",
    "explanation": "Le magnésium perd deux électrons pour former $\\mathrm{Mg^{2+}}$, qui possède alors dix électrons comme le néon.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:formation-ions"
    ],
    "choices": [
      {
        "content": "$\\mathrm{Mg^{2+}}$",
        "correct": true,
        "explanation": "$\\mathrm{Mg}$ possède $\\mathrm{Z} = 12$ ; $\\mathrm{Mg^{2+}}$ possède donc 10 électrons."
      },
      {
        "content": "$\\mathrm{Cl^-}$",
        "correct": false,
        "explanation": "$\\mathrm{Cl^-}$ possède 18 électrons, comme l’argon."
      },
      {
        "content": "$\\mathrm{K^+}$",
        "correct": false,
        "explanation": "$\\mathrm{K^+}$ possède 18 électrons, comme l’argon."
      },
      {
        "content": "$\\mathrm{F^-}$ formé par perte d’un électron",
        "correct": false,
        "explanation": "$\\mathrm{F^-}$ est obtenu par gain d’un électron, pas par perte."
      },
      {
        "content": "$\\mathrm{Na^{2+}}$ comme ion monoatomique usuel",
        "correct": false,
        "explanation": "Le sodium forme préférentiellement $\\mathrm{Na^+}$ en perdant un électron."
      }
    ]
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes concernant l’électronégativité et la polarisation des liaisons.",
    "explanation": "Le fluor est l’élément le plus électronégatif dans l’échelle utilisée et une différence d’électronégativité attire le doublet de liaison vers l’atome le plus électronégatif.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:electronegativite-polarisation"
    ],
    "choices": [
      {
        "content": "Le fluor est l’élément le plus électronégatif parmi ceux étudiés.",
        "correct": true,
        "explanation": "Son électronégativité est la plus élevée dans l’échelle présentée."
      },
      {
        "content": "Dans une liaison polarisée, le doublet liant est attiré vers l’atome le plus électronégatif.",
        "correct": true,
        "explanation": "La densité électronique est déplacée vers le pôle le plus électronégatif."
      },
      {
        "content": "L’électronégativité augmente lorsqu’on descend une même colonne du tableau périodique.",
        "correct": false,
        "explanation": "La tendance générale présentée est une diminution du haut vers le bas."
      },
      {
        "content": "Une liaison $\\ce{C-C}$ est fortement polarisée par différence d’électronégativité entre les deux carbones.",
        "correct": false,
        "explanation": "Deux atomes identiques ont la même électronégativité ; la liaison $\\ce{C-C}$ n’est pas polarisée en permanence."
      },
      {
        "content": "L’électronégativité s’exprime en $\\mathrm{J\\cdot mol^{-1}}$.",
        "correct": false,
        "explanation": "L’échelle d’électronégativité utilisée est sans unité."
      }
    ]
  },
  {
    "order": 5,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des liaisons covalentes, de coordination et de leur rupture, quelles propositions sont exactes ?",
    "explanation": "Une liaison de coordination utilise un doublet déjà constitué fourni par un donneur vers un accepteur disposant d’une orbitale vacante. La formation de deux radicaux correspond en revanche à une rupture homolytique, et non hétérolytique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:liaisons-coordination-radicaux"
    ],
    "choices": [
      {
        "content": "Une liaison de coordination peut se former lorsqu’un donneur apporte un doublet non liant à un accepteur possédant une orbitale vacante.",
        "correct": true,
        "explanation": "Le doublet liant provient initialement du donneur."
      },
      {
        "content": "L’azote ou l’oxygène peuvent jouer le rôle de donneurs de doublet dans des complexes de coordination.",
        "correct": true,
        "explanation": "Leurs doublets non liants peuvent être engagés dans une liaison de coordination."
      },
      {
        "content": "Une rupture hétérolytique d’une liaison covalente produit nécessairement deux radicaux portant chacun un électron célibataire.",
        "correct": false,
        "explanation": "Une rupture hétérolytique attribue les deux électrons du doublet à un même fragment ; la formation de deux radicaux correspond à une rupture homolytique."
      },
      {
        "content": "Une liaison de coordination ne peut jamais se dissocier une fois formée.",
        "correct": false,
        "explanation": "Certaines liaisons de coordination sont réversibles et peuvent se dissocier."
      },
      {
        "content": "Un radical libre est défini par l’absence totale d’électron.",
        "correct": false,
        "explanation": "Un radical possède au moins un électron célibataire."
      }
    ]
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de liaisons $\\pi$ comporte une triple liaison carbone–carbone ? Donnez uniquement la valeur numérique.",
    "explanation": "Une triple liaison $\\ce{C#C}$ comprend une liaison $\\sigma$ et deux liaisons $\\pi$.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:liaisons-multiples"
    ],
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    }
  },
  {
    "order": 7,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle association hybridation–géométrie est correcte pour un carbone engagé dans une double liaison $\\ce{C=C}$ ?",
    "explanation": "Un carbone alcénique est classiquement $\\mathrm{sp}^2$ et adopte une géométrie trigonale plane, avec des angles proches de $120^\\circ$.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:hybridation-sp2"
    ],
    "choices": [
      {
        "content": "$\\mathrm{sp}^3$ — linéaire",
        "correct": false,
        "explanation": "Une hybridation $\\mathrm{sp}^3$ correspond à quatre directions tétraédriques."
      },
      {
        "content": "$\\mathrm{sp}^2$ — trigonale plane",
        "correct": true,
        "explanation": "Trois orbitales $\\mathrm{sp}^2$ coplanaires forment des angles proches de $120^\\circ$."
      },
      {
        "content": "$\\mathrm{sp}$ — tétraédrique",
        "correct": false,
        "explanation": "Une hybridation $\\mathrm{sp}$ correspond à une géométrie digonale ou linéaire."
      },
      {
        "content": "$\\mathrm{sp}^2$ — octaédrique",
        "correct": false,
        "explanation": "La géométrie octaédrique correspond à six directions de liaison."
      },
      {
        "content": "$\\mathrm{sp}^3$ — trigonale plane",
        "correct": false,
        "explanation": "La géométrie trigonale plane est associée à $\\mathrm{sp}^2$ dans ce cadre."
      }
    ]
  },
  {
    "order": 8,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l’hybridation et la géométrie moléculaire, quelles propositions sont exactes ?",
    "explanation": "Le modèle relie $\\mathrm{sp}$ à une disposition digonale/linéaire, $\\mathrm{sp}^2$ à une géométrie trigonale plane et $\\mathrm{sp}^3$ à une organisation tétraédrique des domaines électroniques. Les doublets non liants modifient la forme moléculaire observée.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:hybridation-vsepr"
    ],
    "choices": [
      {
        "content": "Une hybridation $\\mathrm{sp}$ conduit à deux directions opposées et à une géométrie digonale, couramment dite linéaire.",
        "correct": true,
        "explanation": "Les deux orbitales $\\mathrm{sp}$ sont séparées de $180^\\circ$."
      },
      {
        "content": "Une hybridation $\\mathrm{sp}^2$ place trois orbitales hybridées dans un même plan.",
        "correct": true,
        "explanation": "Les trois directions sont coplanaires et séparées d’environ $120^\\circ$."
      },
      {
        "content": "Dans $\\ce{NH3}$, quatre domaines électroniques entourent l’azote mais la forme moléculaire est pyramidale à cause du doublet non liant.",
        "correct": true,
        "explanation": "La géométrie électronique est tétraédrique tandis que la géométrie moléculaire est pyramidale."
      },
      {
        "content": "$\\ce{H2O}$ est de type $\\mathrm{AX}_2\\mathrm{E}_2$ et présente une géométrie coudée.",
        "correct": true,
        "explanation": "Deux doublets liants et deux doublets non liants donnent une forme en V."
      },
      {
        "content": "Le terme scientifique correct pour la géométrie $\\mathrm{sp}$ est « hybridation diagonale ».",
        "correct": false,
        "explanation": "Le terme attendu est digonale, ou linéaire pour la géométrie ; « diagonale » est un faux ami lexical."
      }
    ]
  },
  {
    "order": 9,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi ces dix propositions reliant structure atomique, liaisons, orbitales et forces intermoléculaires, sélectionnez exactement les cinq correctes.",
    "explanation": "Cette synthèse vérifie le passage de la structure électronique à la géométrie et à la polarité moléculaires : remplissage orbitalaire, nature $\\sigma/\\pi$, hybridation, somme vectorielle des dipôles et liaisons hydrogène.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:synthese-chimie-generale"
    ],
    "choices": [
      {
        "content": "Une orbitale atomique peut accueillir au maximum deux électrons.",
        "correct": true,
        "explanation": "Le remplissage d’une orbitale est limité à deux électrons de spins opposés."
      },
      {
        "content": "La règle de Hund conduit à apparier immédiatement les électrons dans la première orbitale disponible d’une sous-couche.",
        "correct": false,
        "explanation": "Les orbitales dégénérées sont d’abord occupées individuellement avant appariement."
      },
      {
        "content": "Une liaison $\\sigma$ présente une symétrie axiale autour de l’axe internucléaire.",
        "correct": true,
        "explanation": "Le recouvrement est centré sur l’axe des noyaux."
      },
      {
        "content": "Une liaison $\\pi$ autorise une libre rotation autour de l’axe de liaison sans perte de recouvrement.",
        "correct": false,
        "explanation": "La rotation détruirait le recouvrement latéral des orbitales $\\mathrm{p}$."
      },
      {
        "content": "Le carbone d’une triple liaison $\\ce{C#C}$ est classiquement hybridé $\\mathrm{sp}$.",
        "correct": true,
        "explanation": "Il conserve deux orbitales $\\mathrm{p}$ permettant la formation de deux liaisons $\\pi$."
      },
      {
        "content": "Une molécule peut être apolaire alors même qu’elle contient plusieurs liaisons polarisées.",
        "correct": true,
        "explanation": "Les moments dipolaires de liaison peuvent s’annuler vectoriellement par symétrie."
      },
      {
        "content": "$\\ce{BCl3}$ est polaire parce que chacune de ses liaisons $\\ce{B-Cl}$ est polarisée.",
        "correct": false,
        "explanation": "Dans la géométrie trigonale plane, les trois moments dipolaires s’annulent."
      },
      {
        "content": "Une liaison hydrogène exige nécessairement une liaison covalente directe entre les deux hétéroatomes concernés.",
        "correct": false,
        "explanation": "Il s’agit d’une interaction non covalente entre un $\\mathrm{H}$ lié à $\\mathrm{N}/\\mathrm{O}/\\mathrm{F}$ et un autre atome électronégatif."
      },
      {
        "content": "Une molécule d’eau peut participer à plusieurs liaisons hydrogène grâce à ses hydrogènes et à ses doublets non liants.",
        "correct": true,
        "explanation": "Elle peut être donneuse et accepteur de liaisons hydrogène."
      },
      {
        "content": "Les forces intermoléculaires n’ont aucun effet sur les températures de fusion ou d’ébullition.",
        "correct": false,
        "explanation": "Une cohésion intermoléculaire plus forte tend à augmenter les températures de changement d’état."
      }
    ]
  },
  {
    "order": 10,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes concernant la polarité moléculaire.",
    "explanation": "La polarité globale dépend de la somme vectorielle des moments dipolaires de liaison, donc à la fois de la polarisation des liaisons et de la géométrie moléculaire.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:polarite-moleculaire"
    ],
    "choices": [
      {
        "content": "Dans $\\ce{BCl3}$, les trois moments dipolaires de liaison peuvent s’annuler par symétrie.",
        "correct": true,
        "explanation": "La géométrie trigonale plane symétrique conduit à un moment dipolaire résultant nul."
      },
      {
        "content": "Dans $\\ce{H2O}$, les moments dipolaires $\\ce{O-H}$ ne s’annulent pas complètement à cause de la géométrie coudée.",
        "correct": true,
        "explanation": "La somme vectorielle est non nulle, ce qui rend l’eau polaire."
      },
      {
        "content": "Toute molécule possédant une liaison polarisée est nécessairement polaire.",
        "correct": false,
        "explanation": "La géométrie peut conduire à une annulation des moments dipolaires."
      },
      {
        "content": "La polarité d’une molécule polyatomique se calcule en additionnant uniquement les valeurs scalaires des moments de liaison.",
        "correct": false,
        "explanation": "Il faut effectuer une somme vectorielle."
      },
      {
        "content": "Une molécule apolaire ne peut présenter aucune interaction intermoléculaire attractive.",
        "correct": false,
        "explanation": "Des interactions de dispersion peuvent exister entre espèces apolaires."
      }
    ]
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des interactions intermoléculaires, quelles propositions sont exactes ?",
    "explanation": "Les interactions dipôle–dipôle concernent des molécules polaires. Les liaisons hydrogène renforcent fortement la cohésion, et une cohésion accrue tend à augmenter la température de vaporisation.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:forces-intermoleculaires"
    ],
    "choices": [
      {
        "content": "Les interactions dipôle–dipôle contribuent à la cohésion entre molécules polaires.",
        "correct": true,
        "explanation": "Des pôles de signes opposés s’attirent entre molécules voisines."
      },
      {
        "content": "Une liaison hydrogène peut s’établir lorsqu’un hydrogène est lié à $\\mathrm{O}$, $\\mathrm{N}$ ou $\\mathrm{F}$ et interagit avec un autre atome électronégatif approprié.",
        "correct": true,
        "explanation": "C’est le motif classique présenté pour cette interaction."
      },
      {
        "content": "Les liaisons hydrogène sont plus fortes que les liaisons covalentes usuelles.",
        "correct": false,
        "explanation": "Elles sont nettement plus faibles que les liaisons covalentes."
      },
      {
        "content": "L’augmentation des interactions intermoléculaires peut accroître la température de vaporisation d’un liquide.",
        "correct": true,
        "explanation": "Une cohésion plus forte demande davantage d’énergie pour séparer les molécules lors de la vaporisation."
      },
      {
        "content": "Une molécule d’eau ne peut former qu’une seule liaison hydrogène à la fois.",
        "correct": false,
        "explanation": "L’eau peut participer à plusieurs liaisons hydrogène via ses deux $\\mathrm{H}$ et ses doublets non liants."
      }
    ]
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Laquelle des molécules suivantes peut jouer à la fois le rôle de donneur et d’accepteur de liaison hydrogène ?",
    "explanation": "Le méthanol possède une liaison $\\ce{O-H}$ qui peut donner une liaison hydrogène et des doublets non liants sur l’oxygène qui peuvent en accepter.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:liaison-hydrogene"
    ],
    "choices": [
      {
        "content": "Le méthane $\\ce{CH4}$",
        "correct": false,
        "explanation": "Il ne possède ni hétéroatome électronégatif ni liaison X–H adaptée."
      },
      {
        "content": "Le dioxyde de carbone $\\ce{CO2}$",
        "correct": false,
        "explanation": "Ses oxygènes peuvent accepter des interactions mais la molécule ne possède pas de $\\mathrm{H}$ lié à $\\mathrm{N}$, $\\mathrm{O}$ ou $\\mathrm{F}$ pour en donner."
      },
      {
        "content": "Le méthanol $\\ce{CH3OH}$",
        "correct": true,
        "explanation": "Son groupe $\\ce{O-H}$ en fait un donneur et l’oxygène porteur de doublets en fait un accepteur."
      },
      {
        "content": "Le tétrachlorure de carbone $\\ce{CCl4}$",
        "correct": false,
        "explanation": "Il ne possède pas de liaison $\\ce{H-N}$, $\\ce{H-O}$ ou $\\ce{H-F}$."
      },
      {
        "content": "Le propane $\\ce{C3H8}$",
        "correct": false,
        "explanation": "Il ne possède pas d’hétéroatome permettant une liaison hydrogène classique."
      }
    ]
  },
  {
    "order": 13,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare plusieurs molécules de géométries différentes. Quelles propositions sont exactes ?",
    "explanation": "La géométrie contrôle la somme vectorielle des moments dipolaires. Une structure symétrique peut être apolaire malgré des liaisons polarisées, tandis qu’une géométrie coudée ou une disposition cis peut laisser un dipôle résultant.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:geometrie-polarite"
    ],
    "choices": [
      {
        "content": "Le tétrachlorure de carbone peut être globalement apolaire malgré la polarisation des liaisons $\\ce{C-Cl}$.",
        "correct": true,
        "explanation": "La géométrie tétraédrique symétrique permet l’annulation vectorielle des moments de liaison."
      },
      {
        "content": "L’eau est polaire parce que sa géométrie coudée empêche l’annulation des moments dipolaires $\\ce{O-H}$.",
        "correct": true,
        "explanation": "Le moment dipolaire résultant est orienté globalement vers l’oxygène."
      },
      {
        "content": "Le cis-dichloroéthène peut présenter un moment dipolaire résultant supérieur à celui de l’isomère trans correspondant.",
        "correct": true,
        "explanation": "Dans la forme cis, les contributions ne se compensent pas comme dans une disposition plus symétrique trans."
      },
      {
        "content": "La géométrie d’une molécule est sans influence sur sa polarité globale.",
        "correct": false,
        "explanation": "La somme vectorielle dépend directement de l’orientation spatiale des liaisons."
      },
      {
        "content": "Une molécule linéaire comportant deux liaisons identiques opposées est nécessairement très polaire.",
        "correct": false,
        "explanation": "Des dipôles identiques et opposés peuvent s’annuler."
      }
    ]
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": String.raw`L’éthanol a pour formule $\ce{C2H6O}$. Calculez sa masse molaire moléculaire.\n\nDonnées : $M_{\mathrm C}=${texQuantity(12, U.G_PER_MOL)}$, $M_{\mathrm H}=${texQuantity(1, U.G_PER_MOL)}$, $M_{\mathrm O}=${texQuantity(16, U.G_PER_MOL)}$.\n\nDonnez uniquement la valeur numérique.`,
    "explanation": "La masse molaire vaut 2×12 + 6×1 + 16 = 46 g·mol⁻¹.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:calcul-masse-molaire"
    ],
    "answer": {
      "type": "number",
      "value": 46,
      "tolerance": 0,
      "unit": "g/mol",
      "displayUnit": U.G_PER_MOL
    }
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux associations fonction–motif correctes.",
    "explanation": "Un aldéhyde porte un carbonyle terminal de type $\\ce{R-CHO}$ et un éther relie deux groupes carbonés par un oxygène $\\ce{R-O-R'}$.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:fonctions-organiques"
    ],
    "choices": [
      {
        "content": "Aldéhyde — $\\ce{R-CHO}$",
        "correct": true,
        "explanation": "Le carbone du carbonyle est en extrémité et porte un hydrogène."
      },
      {
        "content": "Éther — $\\ce{R-O-R'}$",
        "correct": true,
        "explanation": "L’oxygène est lié à deux groupes carbonés."
      },
      {
        "content": "Cétone — $\\ce{R-COOH}$",
        "correct": false,
        "explanation": "$\\ce{R-COOH}$ correspond à un acide carboxylique."
      },
      {
        "content": "Amine — $\\ce{R-C#N}$",
        "correct": false,
        "explanation": "$\\ce{R-C#N}$ correspond à un nitrile."
      },
      {
        "content": "Thiol — $\\ce{R-OH}$",
        "correct": false,
        "explanation": "Un thiol porte le motif $\\ce{R-SH}$."
      }
    ]
  },
  {
    "order": 16,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel nom correspond à un alcane linéaire comportant six atomes de carbone ?",
    "explanation": "Le préfixe hex- indique six carbones et le suffixe -ane un alcane : hexane.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:nomenclature-chaines"
    ],
    "choices": [
      {
        "content": "Pentane",
        "correct": false,
        "explanation": "Pent- correspond à cinq carbones."
      },
      {
        "content": "Heptane",
        "correct": false,
        "explanation": "Hept- correspond à sept carbones."
      },
      {
        "content": "Hexène",
        "correct": false,
        "explanation": "Le suffixe -ène indique une double liaison."
      },
      {
        "content": "Hexane",
        "correct": true,
        "explanation": "Hex- correspond à six carbones et -ane à un hydrocarbure saturé acyclique."
      },
      {
        "content": "Cyclohexène",
        "correct": false,
        "explanation": "Ce nom désigne un cycle à six carbones portant une double liaison."
      }
    ]
  },
  {
    "order": 17,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos des formules, des valences usuelles et des fonctions organiques, quelles propositions sont exactes ?",
    "explanation": "La formule brute ne fixe pas l’enchaînement des atomes. Dans les représentations usuelles, le carbone est tétravalent et l’oxygène divalent. Un ammonium quaternaire se distingue d’une amine neutre par un azote tétrasubstitué chargé positivement.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:nomenclature-fonctions-valence"
    ],
    "choices": [
      {
        "content": "Une formule brute indique la nature et le nombre des atomes sans imposer leur enchaînement.",
        "correct": true,
        "explanation": "Plusieurs isomères peuvent partager une même formule brute."
      },
      {
        "content": "Le carbone forme usuellement quatre liaisons dans les molécules organiques neutres classiques.",
        "correct": true,
        "explanation": "Cette tétravalence est une règle structurale de base de la chimie organique."
      },
      {
        "content": "Un ammonium quaternaire porte un azote lié à quatre substituants et une charge positive.",
        "correct": true,
        "explanation": "Il doit être distingué d’une amine tertiaire neutre."
      },
      {
        "content": "Un éther est défini par le motif $\\ce{R-S-R'}$.",
        "correct": false,
        "explanation": "Le motif $\\ce{R-S-R'}$ correspond à un thioéther ; l’éther contient un oxygène."
      },
      {
        "content": "Une formule brute suffit toujours à déterminer le nom IUPAC complet d’une molécule organique.",
        "correct": false,
        "explanation": "La connectivité et, parfois, la stéréochimie sont indispensables."
      }
    ]
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "En observant le carbone $\\alpha$ de l’alanine, combien de substituants différents doivent être liés à un carbone tétraédrique pour qu’il constitue un centre stéréogène classique ? Donnez uniquement la valeur numérique.",
    "explanation": "Un carbone tétraédrique constitue classiquement un centre stéréogène lorsqu’il est lié à quatre substituants différents. Dans l’alanine, le carbone $\\alpha$ est lié à \\ce{NH2}, \\ce{COOH}, \\ce{CH3} et H.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:stereochimie-centre"
    ],
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    }
  },
  {
    "order": 19,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos des deux représentations A et B de l’alanine et de la nomenclature stéréochimique, quelles propositions sont exactes ?",
    "explanation": "Deux molécules images miroir non superposables sont des énantiomères. L’excès énantiomérique correspond à la différence entre les proportions des deux énantiomères : un mélange 75/25 possède donc un excès de $50\\%$. Les règles de Cahn–Ingold–Prelog permettent d’attribuer une configuration $\\mathrm{R}$ ou $\\mathrm{S}$ en hiérarchisant les substituants ; cette notation ne prédit pas le signe du pouvoir rotatoire. La glycine est un contre-exemple classique de chiralité des acides aminés $\\alpha$ car son carbone $\\alpha$ porte deux hydrogènes identiques.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:stereochimie-enantiomerie"
    ],
    "choices": [
      {
        "content": "Si A et B sont images l’une de l’autre dans un miroir et non superposables, elles constituent une paire d’énantiomères.",
        "correct": true,
        "explanation": "Vrai. C’est la définition d’une paire d’énantiomères."
      },
      {
        "content": "Un mélange contenant 75 % d’un énantiomère et 25 % de l’autre possède un excès énantiomérique de $50\\%$.",
        "correct": true,
        "explanation": "Vrai. $75\\% - 25\\% = 50\\%$."
      },
      {
        "content": "Dans les règles de Cahn–Ingold–Prelog, un atome directement lié de numéro atomique plus élevé reçoit en première approximation une priorité plus élevée.",
        "correct": true,
        "explanation": "Vrai. Le numéro atomique de l’atome directement lié constitue le premier critère de priorité CIP."
      },
      {
        "content": "La notation $\\mathrm{R}/\\mathrm{S}$ décrit une configuration absolue mais ne permet pas, à elle seule, de déduire le signe du pouvoir rotatoire.",
        "correct": true,
        "explanation": "Vrai. Les notations $\\mathrm{R}/\\mathrm{S}$ et $(+)/(−)$ décrivent des propriétés différentes et ne se déduisent pas l’une de l’autre."
      },
      {
        "content": "La glycine possède un centre stéréogène sur son carbone $\\alpha$ parce que ce carbone est lié à un groupe amine et à un groupe carboxyle.",
        "correct": false,
        "explanation": "Faux. Le carbone $\\alpha$ de la glycine porte deux hydrogènes identiques et n’est donc pas un centre stéréogène classique."
      }
    ]
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "D’après le schéma, pourquoi la glycine ne possède-t-elle pas de centre stéréogène classique sur son carbone $\\alpha$ ?",
    "explanation": "Pour constituer un centre stéréogène classique, un carbone tétraédrique doit porter quatre substituants différents. Le carbone $\\alpha$ de la glycine est lié à \\ce{NH2}, \\ce{COOH} et à deux hydrogènes identiques : il n’est donc pas stéréogène.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:stereochimie-glycine"
    ],
    "choices": [
      {
        "content": "Parce que son groupe amine est plan.",
        "correct": false,
        "explanation": "Faux. L’amine n’est pas la raison de l’absence de centre stéréogène."
      },
      {
        "content": "Parce que son groupe carboxyle n’est pas polaire.",
        "correct": false,
        "explanation": "Faux. La polarité du carboxyle n’intervient pas."
      },
      {
        "content": "Parce que son carbone $\\alpha$ est hybridé $\\mathrm{sp}^2$.",
        "correct": false,
        "explanation": "Faux. Le carbone $\\alpha$ est $\\mathrm{sp}^3$."
      },
      {
        "content": "Parce qu’elle ne contient aucun atome de carbone.",
        "correct": false,
        "explanation": "Faux. La glycine contient deux atomes de carbone."
      },
      {
        "content": "Parce que son carbone $\\alpha$ porte deux hydrogènes identiques.",
        "correct": true,
        "explanation": "Vrai. La présence de deux hydrogènes identiques sur $\\mathrm{C}_\\alpha$ supprime la chiralité."
      }
    ]
  },
  {
    "order": 21,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux associations molécule–formule brute correctes.",
    "explanation": "Un alcane acyclique saturé possède la formule générale $\\ce{C_nH_{2n+2}}$ : pour six carbones, A est donc $\\ce{C6H14}$. Un monoalcyne acyclique possède la formule $\\ce{C_nH_{2n-2}}$ : D est donc $\\ce{C6H10}$. Le cyclohexane B et l’hex-2-ène C ont chacun pour formule brute $\\ce{C6H12}$.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:hydrocarbures-formules"
    ],
    "choices": [
      {
        "content": "Molécule A — $\\ce{C6H14}$.",
        "correct": true,
        "explanation": "Vrai. A est le n-hexane, alcane acyclique $\\ce{C6H14}$."
      },
      {
        "content": "Molécule D — $\\ce{C6H10}$.",
        "correct": true,
        "explanation": "Vrai. D est l’hex-2-yne, monoalcyne $\\ce{C6H10}$."
      },
      {
        "content": "Molécule C — $\\ce{C6H14}$.",
        "correct": false,
        "explanation": "Faux. C est un monoalcène de formule $\\ce{C6H12}$."
      },
      {
        "content": "Molécule B — $\\ce{C6H14}$.",
        "correct": false,
        "explanation": "Faux. B est le cyclohexane de formule $\\ce{C6H12}$."
      },
      {
        "content": "Molécule D — $\\ce{C6H12}$.",
        "correct": false,
        "explanation": "Faux. D possède une triple liaison, soit $\\ce{C6H10}$."
      }
    ]
  },
  {
    "order": 22,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La molécule C comporte une double liaison carbone–carbone. Quelles propositions concernant sa structure et sa réactivité sont exactes ?",
    "explanation": "Une double liaison $\\ce{C=C}$ associe une liaison $\\sigma$ et une liaison $\\pi$. La composante $\\pi$ empêche la libre rotation sans rupture du recouvrement latéral. Les alcènes peuvent subir des réactions d’addition, notamment l’hydrogénation catalytique et des additions électrophiles. Un monoalcène acyclique a pour formule générale $\\ce{C_nH_{2n}}$.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:reactivite-alcenes"
    ],
    "choices": [
      {
        "content": "La liaison $\\pi$ limite fortement la rotation autour de la liaison $\\ce{C=C}$.",
        "correct": true,
        "explanation": "Vrai. La rotation autour de $\\ce{C=C}$ romprait le recouvrement des orbitales $\\mathrm{p}$ à l’origine de la liaison $\\pi$."
      },
      {
        "content": "Une hydrogénation catalytique complète consomme $\\ce{H2}$ et peut conduire à l’alcane correspondant.",
        "correct": true,
        "explanation": "Vrai. L’hydrogénation ajoute les deux hydrogènes de $\\ce{H2}$ sur la double liaison."
      },
      {
        "content": "Une addition électrophile de $\\ce{HX}$ sur un alcène dissymétrique peut présenter une régiosélectivité décrite par la règle de Markovnikov.",
        "correct": true,
        "explanation": "Vrai. La règle de Markovnikov décrit une régiosélectivité classique de certaines additions de $\\ce{HX}$ sur des alcènes dissymétriques."
      },
      {
        "content": "La présence d’une double liaison impose la formule générale $\\ce{C_nH_{2n-2}}$ à tout monoalcène acyclique.",
        "correct": false,
        "explanation": "Faux. La formule générale d’un monoalcène acyclique est $\\ce{C_nH_{2n}}$."
      },
      {
        "content": "Une double liaison $\\ce{C=C}$ est constituée de deux liaisons $\\sigma$ indépendantes.",
        "correct": false,
        "explanation": "Faux. Une double liaison comporte une liaison $\\sigma$ et une liaison $\\pi$."
      }
    ]
  },
  {
    "order": 23,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est le nom de la molécule B ? Donnez uniquement son nom.",
    "explanation": "La molécule B est un cycle saturé comportant six atomes de carbone : il s’agit du cyclohexane.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:cyclanes-nomenclature"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cyclohexane",
        "le cyclohexane"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true,
        "normalizeUnicode": true
      }
    }
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sur la molécule C, sélectionnez la double liaison carbone–carbone.",
    "explanation": "La molécule C contient une double liaison carbone–carbone. Une liaison $\\ce{C=C}$ associe une liaison $\\sigma$ et une liaison $\\pi$ ; c’est cette insaturation qui caractérise ici l’alcène représenté.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:qzone-double-liaison"
    ],
    "image": {
      "src": "/images/training/ue14/colles/c04/hydrocarbons-c6-linked-q21-q24.svg",
      "alt": "Quatre représentations topologiques d’hydrocarbures à six atomes de carbone, notées A à D.",
      "width": 1200,
      "height": 700
    },
    "expectedZones": [
      {
        "id": "target-double-bond",
        "label": "Double liaison $\\ce{C=C}$",
        "x": 0.2333,
        "y": 0.7286,
        "tolerance": 0.05
      }
    ],
    "defaultTolerance": 0.05
  },
  {
    "order": 25,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Pour relier orbitales moléculaires, stéréochimie et hydrocarbures, quelles propositions sont exactes ?",
    "explanation": "La structure électronique des doubles et triples liaisons explique à la fois la géométrie des carbones, la restriction de rotation et une partie de la réactivité. Les alcènes peuvent en outre présenter une isomérie géométrique lorsque les substituants le permettent.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:integration-orbitales-hydrocarbures"
    ],
    "choices": [
      {
        "content": "Chaque carbone d’une double liaison $\\ce{C=C}$ est classiquement $\\mathrm{sp}^2$ et conserve une orbitale $\\mathrm{p}$ non hybridée.",
        "correct": true,
        "explanation": "Les deux orbitales $\\mathrm{p}$ se recouvrent latéralement pour former la liaison $\\pi$."
      },
      {
        "content": "Chaque carbone d’une triple liaison $\\ce{C#C}$ est classiquement $\\mathrm{sp}$ et conserve deux orbitales $\\mathrm{p}$ non hybridées.",
        "correct": true,
        "explanation": "Ces deux $\\mathrm{p}$ participent aux deux liaisons $\\pi$ de la triple liaison."
      },
      {
        "content": "Une double liaison carbone–carbone comprend une liaison $\\sigma$ et une liaison $\\pi$.",
        "correct": true,
        "explanation": "La liaison $\\sigma$ résulte du recouvrement axial et la liaison $\\pi$ du recouvrement latéral."
      },
      {
        "content": "Selon le catalyseur et les conditions, l’hydrogénation d’un alcyne peut être conduite jusqu’à l’alcane ou arrêtée au stade alcène.",
        "correct": true,
        "explanation": "Le choix du catalyseur permet de moduler le degré d’hydrogénation."
      },
      {
        "content": "L’existence d’une double liaison interdit toute isomérie géométrique autour de $\\ce{C=C}$.",
        "correct": false,
        "explanation": "Au contraire, l’absence de rotation libre permet une isomérie géométrique lorsque chaque carbone porte des substituants appropriés."
      }
    ]
  }
];
