import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie — Chapitre 1.3 — Les osides — Section C
 * Banque éditoriale auteur — à intégrer via le helper partagé du repo.
 */

export const UE14_BIOCH_CH3_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La cellulose :",
    "choices": [
      {
        "content": "Est un polyoside structural végétal.",
        "correct": true,
        "explanation": "La cellulose est le principal glucane de la paroi des cellules végétales."
      },
      {
        "content": "Forme des fibres très résistantes.",
        "correct": true,
        "explanation": "Les chaînes β(1→4) parallèles s’associent par de nombreuses liaisons hydrogène et forment des microfibrilles résistantes."
      },
      {
        "content": "Est insoluble dans l’eau tout en étant hydrophile.",
        "correct": true,
        "explanation": "Ses hydroxyles interagissent avec l’eau, mais le réseau dense de liaisons entre chaînes empêche sa dissolution."
      },
      {
        "content": "Est la réserve glucidique principale des cellules animales.",
        "correct": false,
        "explanation": "Le glycogène assure le stockage intracellulaire du glucose chez les animaux."
      }
    ],
    "explanation": "La cellulose est un glucane structural végétal très abondant."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La cellobiose :",
    "choices": [
      {
        "content": "Correspond au motif disaccharidique obtenu à partir de deux glucoses liés comme dans la cellulose.",
        "correct": true,
        "explanation": "La cellobiose associe deux résidus de D-glucose par une liaison β(1→4), identique à celle de la chaîne de cellulose."
      },
      {
        "content": "Associe deux β-D-glucoses.",
        "correct": true,
        "explanation": "Les deux résidus constitutifs de la cellobiose sont des D-glucoses."
      },
      {
        "content": "Utilise une liaison β(1→4).",
        "correct": true,
        "explanation": "Le carbone anomérique C1 du premier glucose est lié au C4 du second dans une configuration β."
      },
      {
        "content": "Est identique au maltose.",
        "correct": false,
        "explanation": "Maltose = deux α-D-glucoses en α1→4."
      }
    ],
    "explanation": "Cellobiose et maltose se distinguent notamment par l’anomérie de leur liaison."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi la cellulose n’est-elle pas digérée par l’Homme ?",
    "choices": [
      {
        "content": "L’être humain ne possède pas les cellulases digestives capables de cliver efficacement ses liaisons β(1→4).",
        "correct": true,
        "explanation": "Les enzymes digestives humaines hydrolysent les liaisons α de l’amidon, mais pas les liaisons β(1→4) de la cellulose."
      },
      {
        "content": "Ses liaisons β(1→4) ne sont pas hydrolysées par les enzymes digestives humaines.",
        "correct": true,
        "explanation": "La géométrie β(1→4) n’est pas reconnue par les α-amylases qui digèrent l’amidon."
      },
      {
        "content": "La cellulose reste importante comme fibre alimentaire.",
        "correct": true,
        "explanation": "Même non digérée, la cellulose contribue à la fraction insoluble des fibres alimentaires."
      },
      {
        "content": "Parce qu’elle ne contient aucun glucose.",
        "correct": false,
        "explanation": "Elle est constituée de glucose."
      }
    ],
    "explanation": "L’absence de l’enzyme adaptée explique la non-digestibilité de la cellulose."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les constituants des fibres alimentaires végétales :",
    "choices": [
      {
        "content": "Cellulose.",
        "correct": true,
        "explanation": "La cellulose des parois végétales résiste à la digestion par les enzymes humaines."
      },
      {
        "content": "Hémicellulose.",
        "correct": true,
        "explanation": "Les hémicelluloses regroupent plusieurs polysaccharides de paroi végétale inclus dans les fibres alimentaires."
      },
      {
        "content": "Pectines.",
        "correct": true,
        "explanation": "Les pectines sont des polysaccharides végétaux, souvent solubles et fermentescibles, appartenant aux fibres alimentaires."
      },
      {
        "content": "Glycogène.",
        "correct": false,
        "explanation": "Le glycogène est un glucane de réserve animal rapidement digestible, pas une fibre végétale."
      }
    ],
    "explanation": "Les fibres alimentaires végétales comprennent notamment la cellulose, des hémicelluloses et des pectines."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Un apport alimentaire plus élevé en fibres est associé, dans les études de population, à une diminution du risque de :",
    "choices": [
      {
        "content": "Maladies cardiovasculaires.",
        "correct": true,
        "explanation": "Les synthèses d’études prospectives associent un apport plus élevé en fibres à un risque cardiovasculaire plus faible."
      },
      {
        "content": "Diabète de type 2.",
        "correct": true,
        "explanation": "Un apport plus élevé en fibres est associé à un risque réduit de diabète de type 2 et à des effets favorables sur plusieurs marqueurs métaboliques."
      },
      {
        "content": "Cancer colorectal.",
        "correct": true,
        "explanation": "Les données observationnelles associent une consommation plus élevée de fibres à un risque plus faible de cancer colorectal."
      },
      {
        "content": "L’impossibilité de synthétiser du glycogène.",
        "correct": false,
        "explanation": "La synthèse du glycogène dépend d’enzymes du métabolisme glucidique et n’est pas rendue impossible par un faible apport en fibres."
      }
    ],
    "explanation": "Les associations épidémiologiques concernent notamment les maladies cardiovasculaires, le diabète de type 2 et le cancer colorectal ; elles ne signifient pas qu’une fibre isolée prévient à elle seule ces maladies."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les glycosaminoglycanes (GAG) étudiés :",
    "choices": [
      {
        "content": "Sont des hétéroglycanes.",
        "correct": true,
        "explanation": "Le motif répété d’un GAG associe généralement deux types de résidus monosaccharidiques."
      },
      {
        "content": "Reposent souvent sur la répétition d’un motif disaccharidique.",
        "correct": true,
        "explanation": "Une même unité disaccharidique est répétée de nombreuses fois pour former la chaîne du GAG."
      },
      {
        "content": "Associent fréquemment un acide uronique et une osamine.",
        "correct": true,
        "explanation": "L’hyaluronane et les chondroïtine sulfates associent par exemple un acide uronique à une osamine N-acétylée."
      },
      {
        "content": "Sont tous dépourvus de charge.",
        "correct": false,
        "explanation": "Nombre d’entre eux sont fortement anioniques."
      }
    ],
    "explanation": "Les GAG sont des polymères hétérogènes souvent riches en charges négatives."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L’acide hyaluronique associe :",
    "choices": [
      {
        "content": "Acide β-D-glucuronique.",
        "correct": true,
        "explanation": "Le résidu d’acide glucuronique apporte notamment une fonction carboxylate chargée négativement."
      },
      {
        "content": "N-acétyl-D-glucosamine.",
        "correct": true,
        "explanation": "La N-acétylglucosamine alterne avec le glucuronate dans la chaîne d’hyaluronane."
      },
      {
        "content": "Une liaison β(1→3) dans le dimère.",
        "correct": true,
        "explanation": "Le motif peut s’écrire GlcA-β(1→3)-GlcNAc, les motifs successifs étant reliés par des liaisons β(1→4)."
      },
      {
        "content": "Une sulfatation obligatoire.",
        "correct": false,
        "explanation": "L’hyaluronane naturel n’est pas sulfaté ; sa charge négative provient des carboxylates du glucuronate."
      }
    ],
    "explanation": "L’acide hyaluronique, ou hyaluronane, est un GAG non sulfaté formé par l’alternance d’acide glucuronique et de N-acétylglucosamine."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L’acide hyaluronique :",
    "choices": [
      {
        "content": "N’est pas sulfaté.",
        "correct": true,
        "explanation": "Contrairement à la plupart des autres GAG, l’hyaluronane naturel ne porte pas de groupement sulfate."
      },
      {
        "content": "N’est généralement pas lié de manière covalente à une protéine cœur.",
        "correct": true,
        "explanation": "L’hyaluronane est synthétisé à la membrane plasmique comme une chaîne libre, contrairement aux GAG des protéoglycanes."
      },
      {
        "content": "Porte des charges négatives via les carboxylates.",
        "correct": true,
        "explanation": "À pH physiologique, les fonctions carboxyliques des résidus de glucuronate sont majoritairement sous forme COO−."
      },
      {
        "content": "Est un GAG très sulfaté stocké dans les mastocytes.",
        "correct": false,
        "explanation": "Cette description correspond à l’héparine."
      }
    ],
    "explanation": "Le caractère non sulfaté distingue l’acide hyaluronique des GAG sulfatés."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les fonctions de l’acide hyaluronique :",
    "choices": [
      {
        "content": "Hydratation tissulaire.",
        "correct": true,
        "explanation": "Sa forte densité de fonctions polaires et de carboxylates lui permet d’occuper un grand volume hydrodynamique et de retenir l’eau."
      },
      {
        "content": "Viscoélasticité.",
        "correct": true,
        "explanation": "Les solutions d’hyaluronane contribuent aux propriétés viscoélastiques du liquide synovial et de plusieurs matrices tissulaires."
      },
      {
        "content": "Cicatrisation et migration cellulaire.",
        "correct": true,
        "explanation": "L’hyaluronane est abondant dans les matrices transitoires qui accompagnent la morphogenèse, la migration cellulaire et la réparation tissulaire."
      },
      {
        "content": "Stockage énergétique hépatique.",
        "correct": false,
        "explanation": "Ce n’est pas son rôle."
      }
    ],
    "explanation": "L’acide hyaluronique contribue aux propriétés physiques et biologiques de la matrice extracellulaire."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La chondroïtine sulfate :",
    "choices": [
      {
        "content": "Associe acide β-D-glucuronique et N-acétyl-D-galactosamine.",
        "correct": true,
        "explanation": "Son motif disaccharidique alterne un glucuronate et une N-acétylgalactosamine."
      },
      {
        "content": "Est un GAG sulfaté.",
        "correct": true,
        "explanation": "Des groupements sulfate sont notamment portés par la N-acétylgalactosamine."
      },
      {
        "content": "Est riche en charges négatives.",
        "correct": true,
        "explanation": "Les groupements sulfate et les carboxylates du glucuronate contribuent à sa charge négative."
      },
      {
        "content": "Est dépourvue de tout acide uronique.",
        "correct": false,
        "explanation": "Elle contient de l’acide glucuronique."
      }
    ],
    "explanation": "La chondroïtine sulfate est un polyanion de matrice extracellulaire."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des fibres alimentaires et de leurs associations avec la santé :",
    "choices": [
      {
        "content": "La cellulose fait partie des fibres normalement consommées.",
        "correct": true,
        "explanation": "La cellulose des aliments végétaux résiste aux enzymes digestives humaines et contribue aux fibres insolubles."
      },
      {
        "content": "Un apport plus élevé en fibres est associé à un risque cardiovasculaire plus faible.",
        "correct": true,
        "explanation": "Les études prospectives montrent une association inverse entre consommation de fibres et maladies cardiovasculaires."
      },
      {
        "content": "Un apport plus élevé en fibres est associé à un risque plus faible de cancer colorectal.",
        "correct": true,
        "explanation": "Cette relation est principalement étayée par des données observationnelles et ne doit pas être interprétée comme l’effet isolé d’une fibre unique."
      },
      {
        "content": "La cellulose devrait normalement être entièrement digérée par une β-glucosidase humaine.",
        "correct": false,
        "explanation": "L’être humain ne possède pas les cellulases digestives nécessaires à l’hydrolyse efficace des liaisons β(1→4) de la cellulose."
      }
    ],
    "explanation": "Les bénéfices associés à une alimentation riche en fibres concernent plusieurs issues cardiométaboliques et digestives, sans établir qu’une faible consommation constitue à elle seule une cause directe de maladie."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Lors de la fécondation, une hyaluronidase portée par les spermatozoïdes peut agir sur la matrice entourant l’ovocyte. Cette enzyme :",
    "choices": [
      {
        "content": "Hydrolyse l’acide hyaluronique.",
        "correct": true,
        "explanation": "Une hyaluronidase clive des liaisons glycosidiques de l’hyaluronane."
      },
      {
        "content": "Contribue à la dispersion de la matrice riche en hyaluronane du cumulus entourant l’ovocyte.",
        "correct": true,
        "explanation": "L’hydrolyse de l’hyaluronane facilite la progression du spermatozoïde à travers les cellules du cumulus."
      },
      {
        "content": "Agit sur un GAG de matrice.",
        "correct": true,
        "explanation": "L’hyaluronane est un glycosaminoglycane abondant dans de nombreuses matrices extracellulaires."
      },
      {
        "content": "Transforme le glycogène en cellulose.",
        "correct": false,
        "explanation": "La hyaluronidase hydrolyse l’hyaluronane et ne convertit pas un glucane de réserve en glucane structural."
      }
    ],
    "explanation": "La hyaluronidase spermatique peut contribuer à hydrolyser l’hyaluronane de la matrice du cumulus lors de la progression vers l’ovocyte."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une matrice extracellulaire doit retenir l’eau et conserver des propriétés viscoélastiques. Quelle molécule est particulièrement cohérente ?",
    "choices": [
      {
        "content": "L’acide hyaluronique.",
        "correct": true,
        "explanation": "L’hyaluronane occupe un grand volume hydrodynamique et contribue à l’hydratation ainsi qu’à la viscoélasticité des matrices."
      },
      {
        "content": "Un GAG riche en fonctions polaires/charges.",
        "correct": true,
        "explanation": "Les hydroxyles et carboxylates interagissent avec l’eau et les contre-ions, favorisant l’hydratation."
      },
      {
        "content": "Une molécule présente en quantités variables dans les matrices extracellulaires de nombreux tissus.",
        "correct": true,
        "explanation": "L’hyaluronane est largement distribué dans les tissus et les fluides des vertébrés."
      },
      {
        "content": "Le saccharose comme protéine de structure.",
        "correct": false,
        "explanation": "Le saccharose est un diholoside."
      }
    ],
    "explanation": "L’acide hyaluronique est directement relié à l’hydratation et la viscoélasticité tissulaire."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La charge négative de l’acide hyaluronique est reliée principalement :",
    "choices": [
      {
        "content": "Aux groupements carboxylate COO−.",
        "correct": true,
        "explanation": "À pH physiologique, la fonction carboxylique de chaque glucuronate est majoritairement déprotonée en COO−."
      },
      {
        "content": "À l’acide glucuronique ionisé.",
        "correct": true,
        "explanation": "Le résidu de glucuronate du motif répété porte le groupement carboxylate."
      },
      {
        "content": "À sa capacité à fixer des cations.",
        "correct": true,
        "explanation": "Le polymère anionique s’entoure de contre-ions ; cette association découle de ses charges négatives."
      },
      {
        "content": "À de nombreux sulfates obligatoires.",
        "correct": false,
        "explanation": "L’hyaluronane naturel est non sulfaté ; ses charges négatives proviennent des carboxylates."
      }
    ],
    "explanation": "L’acide hyaluronique est anionique sans être sulfaté."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la chondroïtine sulfate :",
    "choices": [
      {
        "content": "Le dimère comporte une liaison β(1→3).",
        "correct": true,
        "explanation": "Le glucuronate est lié à la N-acétylgalactosamine par une liaison β(1→3) dans le motif disaccharidique."
      },
      {
        "content": "Les dimères sont reliés entre eux par β(1→4).",
        "correct": true,
        "explanation": "Les motifs successifs sont reliés par une liaison β(1→4) entre la GalNAc et le glucuronate suivant."
      },
      {
        "content": "La galactosamine peut être sulfatée en C4 ou C6.",
        "correct": true,
        "explanation": "Les chondroïtine-4-sulfate et chondroïtine-6-sulfate se distinguent par la position du sulfate sur la N-acétylgalactosamine."
      },
      {
        "content": "Aucune sulfatation de l’acide glucuronique n’est possible.",
        "correct": false,
        "explanation": "Certaines unités de chondroïtine sulfate comportent un glucuronate 2-O-sulfaté."
      }
    ],
    "explanation": "Les positions de sulfatation expliquent la forte charge de la chondroïtine."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dire que la chondroïtine sulfate est un polyanion signifie :",
    "choices": [
      {
        "content": "Qu’elle porte de nombreuses charges négatives.",
        "correct": true,
        "explanation": "Le préfixe poly- indique que de nombreux groupements anioniques sont répétés le long de la chaîne."
      },
      {
        "content": "Que les sulfates contribuent à ces charges.",
        "correct": true,
        "explanation": "Les esters sulfates sont ionisés aux pH biologiques usuels et portent des charges négatives."
      },
      {
        "content": "Que les carboxylates contribuent aussi aux charges.",
        "correct": true,
        "explanation": "Les résidus de glucuronate comportent des fonctions carboxylate COO−."
      },
      {
        "content": "Qu’elle ne peut fixer aucun cation.",
        "correct": false,
        "explanation": "Ses charges négatives favorisent au contraire des interactions électrostatiques avec des cations."
      }
    ],
    "explanation": "La richesse en charges négatives conditionne les interactions ioniques du GAG."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est le nom de l’enzyme spermatique capable d’hydrolyser l’acide hyaluronique de la matrice du cumulus ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "hyaluronidase",
        "la hyaluronidase"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Une hyaluronidase clive l’hyaluronane et peut faciliter la progression du spermatozoïde à travers la matrice du cumulus."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Une chaîne d’acide hyaluronique contient 2 500 motifs disaccharidiques. Combien contient-elle au total de résidus monosaccharidiques ?",
    "answer": {
      "type": "number",
      "value": 5000,
      "tolerance": 0
    },
    "explanation": "Chaque motif disaccharidique contient deux résidus : 2 500 × 2 = 5 000 résidus monosaccharidiques."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux constituants du motif de l’acide hyaluronique.",
    "choices": [
      {
        "content": "Acide β-D-glucuronique.",
        "correct": true,
        "explanation": "Le glucuronate apporte la fonction carboxylate du motif de l’hyaluronane."
      },
      {
        "content": "N-acétyl-D-glucosamine.",
        "correct": true,
        "explanation": "La N-acétylglucosamine alterne avec le glucuronate le long de la chaîne."
      },
      {
        "content": "N-acétyl-D-galactosamine.",
        "correct": false,
        "explanation": "La N-acétylgalactosamine entre dans la composition des chondroïtine sulfates, pas de l’hyaluronane."
      },
      {
        "content": "Acide L-iduronique.",
        "correct": false,
        "explanation": "L’iduronate est présent dans certains autres GAG, notamment le dermatane sulfate et des héparanes."
      }
    ],
    "explanation": "L’acide hyaluronique alterne glucuronate et N-acétylglucosamine."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Comparer acide hyaluronique et chondroïtine sulfate :",
    "choices": [
      {
        "content": "Les deux contiennent un acide uronique.",
        "correct": true,
        "explanation": "L’hyaluronane et la chondroïtine sulfate contiennent tous deux des résidus de glucuronate."
      },
      {
        "content": "Les deux contiennent une osamine N-acétylée.",
        "correct": true,
        "explanation": "L’hyaluronane contient de la N-acétylglucosamine, tandis que la chondroïtine contient de la N-acétylgalactosamine."
      },
      {
        "content": "La chondroïtine est sulfatée, l’acide hyaluronique ne l’est pas.",
        "correct": true,
        "explanation": "Les chondroïtine sulfates portent des esters sulfates, contrairement à l’hyaluronane naturel."
      },
      {
        "content": "L’acide hyaluronique est obligatoirement lié à une protéine cœur.",
        "correct": false,
        "explanation": "L’hyaluronane n’est généralement pas lié de manière covalente à une protéine cœur."
      }
    ],
    "explanation": "Les deux GAG partagent un motif répété mais diffèrent notamment par la sulfatation."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule de MEC possède des COO− mais aucun sulfate et n’est pas liée à une protéine. Le profil correspond à :",
    "choices": [
      {
        "content": "L’acide hyaluronique.",
        "correct": true,
        "explanation": "L’hyaluronane est non sulfaté, porte des carboxylates et n’est généralement pas lié de façon covalente à une protéine cœur."
      },
      {
        "content": "Un GAG à motif disaccharidique régulier et non sulfaté.",
        "correct": true,
        "explanation": "Sa chaîne alterne régulièrement glucuronate et N-acétylglucosamine sans groupement sulfate."
      },
      {
        "content": "Un polymère participant à l’hydratation tissulaire.",
        "correct": true,
        "explanation": "Ses charges et ses hydroxyles lui permettent de retenir l’eau et d’occuper un grand volume hydrodynamique."
      },
      {
        "content": "L’héparine.",
        "correct": false,
        "explanation": "Elle est fortement sulfatée."
      }
    ],
    "explanation": "L’absence de sulfate et de liaison protéique oriente vers l’acide hyaluronique."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Cellulose, fibres et premiers GAG : sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "La cellulose est β(1→4).",
        "correct": true,
        "explanation": "Les résidus de glucose de la cellulose sont reliés par des liaisons β(1→4)."
      },
      {
        "content": "L’être humain ne digère pas la cellulose faute de cellulases digestives adaptées.",
        "correct": true,
        "explanation": "Les enzymes digestives humaines ne clivent pas efficacement les liaisons β(1→4) de la cellulose."
      },
      {
        "content": "L’acide hyaluronique n’est pas sulfaté.",
        "correct": true,
        "explanation": "Sa charge négative provient des carboxylates du glucuronate, et non de groupements sulfate."
      },
      {
        "content": "La chondroïtine sulfate est un polyanion.",
        "correct": true,
        "explanation": "Les esters sulfates et les carboxylates confèrent de nombreuses charges négatives à la chaîne."
      },
      {
        "content": "Une hyaluronidase spermatique peut agir sur la matrice du cumulus lors de la fécondation.",
        "correct": true,
        "explanation": "Cette enzyme hydrolyse l’hyaluronane et contribue à la progression du spermatozoïde entre les cellules du cumulus."
      },
      {
        "content": "La cellulose est la réserve animale.",
        "correct": false,
        "explanation": "La cellulose est un glucane structural végétal ; la réserve animale correspond au glycogène."
      },
      {
        "content": "L’acide hyaluronique est toujours lié à une protéine cœur.",
        "correct": false,
        "explanation": "L’hyaluronane n’est généralement pas lié de manière covalente à une protéine cœur."
      },
      {
        "content": "La chondroïtine ne contient aucun acide uronique.",
        "correct": false,
        "explanation": "Le motif des chondroïtine sulfates contient des résidus d’acide glucuronique."
      },
      {
        "content": "La cellulose est très soluble dans l’eau.",
        "correct": false,
        "explanation": "La cellulose est hydrophile grâce à ses hydroxyles, mais son réseau interchaînes la rend insoluble."
      },
      {
        "content": "La cellobiose est identique au maltose.",
        "correct": false,
        "explanation": "La cellobiose possède une liaison β(1→4), tandis que le maltose possède une liaison α(1→4)."
      }
    ],
    "explanation": "Cette QRPL consolide cellulose, fibres et premiers GAG."
  }
];
