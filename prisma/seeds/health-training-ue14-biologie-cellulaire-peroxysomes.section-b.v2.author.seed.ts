import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch6 — Oxydases, catalase et homéostasie du H2O2 */
export const UE14_BIOCELL_CH6_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions doivent être retenues comme exactes pour le thème suivant : les oxydases, la catalase et le peroxyde d’hydrogène ?",
    "choices": [
      {
        "content": "La catalase est une protéine spécifique des lysosomes.",
        "correct": false,
        "explanation": "Elle est emblématique de la matrice peroxysomale."
      },
      {
        "content": "Les transporteurs ABC de la membrane peroxysomale utilisent l’énergie de l’ATP.",
        "correct": true,
        "explanation": "ABC signifie ATP-Binding Cassette."
      },
      {
        "content": "ABCD1 est un transporteur ABC de la membrane peroxysomale.",
        "correct": true,
        "explanation": "Il participe à l’import de substrats lipidiques à très longue chaîne destinés à la β-oxydation."
      },
      {
        "content": "Les peroxysomes contiennent de nombreuses enzymes oxydatives.",
        "correct": true,
        "explanation": "Leur nom est lié à la production et au métabolisme du peroxyde d’hydrogène."
      },
      {
        "content": "Certaines oxydases peroxysomales produisent du H2O2.",
        "correct": true,
        "explanation": "Elles transfèrent directement des électrons à l’oxygène moléculaire."
      }
    ],
    "explanation": "Les oxydases peroxysomales transfèrent des électrons à l’oxygène et peuvent former du H2O2 ; la catalase le consomme et limite sa toxicité."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi ces propositions relatives au thème suivant, laquelle est correcte : l’adressage et l’import des protéines peroxysomales ?",
    "choices": [
      {
        "content": "La translocation des protéines peroxysomales utilise le canal Sec61 du réticulum endoplasmique.",
        "correct": false,
        "explanation": "Sec61 appartient à la translocation dans le RE, pas à l’import matriciel peroxysomal."
      },
      {
        "content": "Le motif SKL constitue un exemple classique de signal PTS1.",
        "correct": true,
        "explanation": "SKL correspond à sérine–lysine–leucine en extrémité C-terminale."
      },
      {
        "content": "Les protéines matricielles peroxysomales doivent obligatoirement être totalement dépliées avant l’import.",
        "correct": false,
        "explanation": "Certaines protéines repliées ou oligomériques peuvent être importées."
      },
      {
        "content": "L’import PTS1 est cotraductionnel sur des ribosomes fixés à la membrane peroxysomale.",
        "correct": false,
        "explanation": "Il est essentiellement post-traductionnel à partir de protéines synthétisées dans le cytosol."
      },
      {
        "content": "Le motif SKL est un signal d’adressage vers le noyau.",
        "correct": false,
        "explanation": "SKL est le prototype du PTS1 peroxysomal."
      }
    ],
    "explanation": "Les protéines matricielles peroxysomales sont synthétisées dans le cytosol puis importées grâce aux signaux PTS et aux peroxines, notamment PEX5 et PEX7."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle grande famille de transporteurs membranaires peroxysomaux utilise l’ATP ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "ABC",
        "transporteurs ABC",
        "ATP-binding cassette",
        "ATP Binding Cassette"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les transporteurs ABC utilisent l’énergie de l’ATP pour transporter différents substrats."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles affirmations sont correctes à propos du thème suivant : les oxydases, la catalase et le peroxyde d’hydrogène ?",
    "choices": [
      {
        "content": "La β-oxydation peroxysomale alimente directement une ATP synthase située dans la membrane peroxysomale.",
        "correct": false,
        "explanation": "Le peroxysome ne possède pas de phosphorylation oxydative comparable à la mitochondrie."
      },
      {
        "content": "L’acyl-CoA oxydase peroxysomale transfère ses électrons directement à la chaîne respiratoire mitochondriale.",
        "correct": false,
        "explanation": "Elle transfère directement les électrons à O2 et produit du H2O2."
      },
      {
        "content": "Certaines oxydases peroxysomales produisent du H2O2.",
        "correct": true,
        "explanation": "Elles transfèrent directement des électrons à l’oxygène moléculaire."
      },
      {
        "content": "La catalase est une protéine spécifique des lysosomes.",
        "correct": false,
        "explanation": "Elle est emblématique de la matrice peroxysomale."
      },
      {
        "content": "La catalase est une enzyme très abondante de la matrice peroxysomale.",
        "correct": true,
        "explanation": "Elle participe à l’élimination du H2O2 produit par les réactions oxydatives."
      }
    ],
    "explanation": "Les oxydases peroxysomales transfèrent des électrons à l’oxygène et peuvent former du H2O2 ; la catalase le consomme et limite sa toxicité."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant le thème suivant — l’adressage et l’import des protéines peroxysomales — retenez exactement deux affirmations justes.",
    "choices": [
      {
        "content": "PEX7 reconnaît principalement le motif KDEL.",
        "correct": false,
        "explanation": "PEX7 reconnaît le signal PTS2 ; KDEL concerne la récupération de protéines du RE."
      },
      {
        "content": "Toutes les protéines peroxysomales sont codées par un ADN peroxysomal.",
        "correct": false,
        "explanation": "Le peroxysome n’a pas de génome propre."
      },
      {
        "content": "Le peroxysome peut importer certaines protéines déjà repliées, voire oligomériques.",
        "correct": true,
        "explanation": "Cette capacité distingue l’import peroxysomal de plusieurs autres systèmes de translocation."
      },
      {
        "content": "La translocation des protéines peroxysomales utilise le canal Sec61 du réticulum endoplasmique.",
        "correct": false,
        "explanation": "Sec61 appartient à la translocation dans le RE, pas à l’import matriciel peroxysomal."
      },
      {
        "content": "Les peroxines sont des protéines impliquées dans la biogenèse et l’import peroxysomaux.",
        "correct": true,
        "explanation": "Le préfixe PEX désigne de nombreuses protéines de cette machinerie."
      }
    ],
    "explanation": "Les protéines matricielles peroxysomales sont synthétisées dans le cytosol puis importées grâce aux signaux PTS et aux peroxines, notamment PEX5 et PEX7.",
    "requiredSelectionCount": 2
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le thème suivant — les oxydases, la catalase et le peroxyde d’hydrogène — quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les oxydases peroxysomales détruisent toutes le H2O2 sans en former.",
        "correct": false,
        "explanation": "Plusieurs oxydases en génèrent au cours de leur réaction."
      },
      {
        "content": "Les peroxysomes contiennent de nombreuses enzymes oxydatives.",
        "correct": true,
        "explanation": "Leur nom est lié à la production et au métabolisme du peroxyde d’hydrogène."
      },
      {
        "content": "Certaines oxydases peroxysomales produisent du H2O2.",
        "correct": true,
        "explanation": "Elles transfèrent directement des électrons à l’oxygène moléculaire."
      },
      {
        "content": "Le H2O2 est chimiquement inerte et ne participe jamais au stress oxydant.",
        "correct": false,
        "explanation": "C’est une espèce réactive de l’oxygène pouvant contribuer aux dommages oxydatifs."
      },
      {
        "content": "La catalase est une enzyme très abondante de la matrice peroxysomale.",
        "correct": true,
        "explanation": "Elle participe à l’élimination du H2O2 produit par les réactions oxydatives."
      }
    ],
    "explanation": "Les oxydases peroxysomales transfèrent des électrons à l’oxygène et peuvent former du H2O2 ; la catalase le consomme et limite sa toxicité."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Pour le thème suivant — les oxydases, la catalase et le peroxyde d’hydrogène — quelle est l’unique proposition juste ?",
    "choices": [
      {
        "content": "L’acyl-CoA oxydase est une enzyme clé de la première étape de la β-oxydation peroxysomale.",
        "correct": true,
        "explanation": "Elle transfère les électrons du FADH2 directement à O2, formant H2O2."
      },
      {
        "content": "La catalase a pour rôle principal de produire du H2O2 à partir d’eau.",
        "correct": false,
        "explanation": "Elle consomme surtout le H2O2 et le convertit en eau et O2."
      },
      {
        "content": "Les oxydases peroxysomales détruisent toutes le H2O2 sans en former.",
        "correct": false,
        "explanation": "Plusieurs oxydases en génèrent au cours de leur réaction."
      },
      {
        "content": "Le H2O2 est chimiquement inerte et ne participe jamais au stress oxydant.",
        "correct": false,
        "explanation": "C’est une espèce réactive de l’oxygène pouvant contribuer aux dommages oxydatifs."
      },
      {
        "content": "La β-oxydation peroxysomale alimente directement une ATP synthase située dans la membrane peroxysomale.",
        "correct": false,
        "explanation": "Le peroxysome ne possède pas de phosphorylation oxydative comparable à la mitochondrie."
      }
    ],
    "explanation": "Les oxydases peroxysomales transfèrent des électrons à l’oxygène et peuvent former du H2O2 ; la catalase le consomme et limite sa toxicité."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel composé réactif est produit par plusieurs oxydases peroxysomales ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "H2O2",
        "peroxyde d’hydrogène",
        "eau oxygénée"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Plusieurs oxydases transfèrent des électrons à O2 et forment du H2O2."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRPL",
    "question": "Retenez exactement cinq réponses correctes sur le thème suivant : les oxydases, la catalase et le peroxyde d’hydrogène.",
    "choices": [
      {
        "content": "La catalase transforme le H2O2 en acide urique.",
        "correct": false,
        "explanation": "Elle le convertit notamment en eau et dioxygène."
      },
      {
        "content": "La catalase peut convertir deux molécules de H2O2 en eau et dioxygène.",
        "correct": true,
        "explanation": "La réaction catalatique globale est 2 H2O2 → 2 H2O + O2."
      },
      {
        "content": "La catalase a pour rôle principal de produire du H2O2 à partir d’eau.",
        "correct": false,
        "explanation": "Elle consomme surtout le H2O2 et le convertit en eau et O2."
      },
      {
        "content": "Le H2O2 est une espèce réactive de l’oxygène qui doit être contrôlée.",
        "correct": true,
        "explanation": "En excès, il contribue au stress oxydant et peut endommager des macromolécules."
      },
      {
        "content": "L’acyl-CoA oxydase est une enzyme clé de la première étape de la β-oxydation peroxysomale.",
        "correct": true,
        "explanation": "Elle transfère les électrons du FADH2 directement à O2, formant H2O2."
      },
      {
        "content": "La β-oxydation peroxysomale n’est pas directement couplée à une chaîne respiratoire productrice d’ATP.",
        "correct": true,
        "explanation": "L’énergie de la première oxydation est en partie dissipée sous forme de chaleur via la formation de H2O2."
      },
      {
        "content": "Les oxydases peroxysomales détruisent toutes le H2O2 sans en former.",
        "correct": false,
        "explanation": "Plusieurs oxydases en génèrent au cours de leur réaction."
      },
      {
        "content": "Le H2O2 est chimiquement inerte et ne participe jamais au stress oxydant.",
        "correct": false,
        "explanation": "C’est une espèce réactive de l’oxygène pouvant contribuer aux dommages oxydatifs."
      },
      {
        "content": "La catalase peut aussi exercer une activité peroxydatique sur certains substrats.",
        "correct": true,
        "explanation": "Elle peut utiliser H2O2 pour oxyder certains donneurs d’électrons."
      },
      {
        "content": "La β-oxydation peroxysomale alimente directement une ATP synthase située dans la membrane peroxysomale.",
        "correct": false,
        "explanation": "Le peroxysome ne possède pas de phosphorylation oxydative comparable à la mitochondrie."
      }
    ],
    "explanation": "Les oxydases peroxysomales transfèrent des électrons à l’oxygène et peuvent former du H2O2 ; la catalase le consomme et limite sa toxicité.",
    "requiredSelectionCount": 5
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Sélectionnez toutes les affirmations exactes concernant le thème suivant : les oxydases, la catalase et le peroxyde d’hydrogène.",
    "choices": [
      {
        "content": "Chez l’humain, l’alcool déshydrogénase et CYP2E1 sont des voies majeures du métabolisme de l’éthanol.",
        "correct": true,
        "explanation": "La contribution de la catalase existe mais n’est pas la voie quantitativement principale habituelle."
      },
      {
        "content": "ABCD1 est une sous-unité de l’ATP synthase mitochondriale.",
        "correct": false,
        "explanation": "ABCD1 est un transporteur ABC peroxysomal."
      },
      {
        "content": "La compartimentation peroxysomale rapproche enzymes productrices et consommatrices de H2O2.",
        "correct": true,
        "explanation": "Cette organisation favorise le contrôle local des espèces réactives de l’oxygène."
      },
      {
        "content": "Les transporteurs ABC de la membrane peroxysomale utilisent l’énergie de l’ATP.",
        "correct": true,
        "explanation": "ABC signifie ATP-Binding Cassette."
      },
      {
        "content": "ABCD1 est un transporteur ABC de la membrane peroxysomale.",
        "correct": true,
        "explanation": "Il participe à l’import de substrats lipidiques à très longue chaîne destinés à la β-oxydation."
      }
    ],
    "explanation": "Les oxydases peroxysomales transfèrent des électrons à l’oxygène et peuvent former du H2O2 ; la catalase le consomme et limite sa toxicité."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Repérez les propositions scientifiquement correctes sur le thème suivant : l’adressage et l’import des protéines peroxysomales.",
    "choices": [
      {
        "content": "Le signal PTS1 est généralement situé à l’extrémité C-terminale de la protéine.",
        "correct": true,
        "explanation": "Le tripeptide de type SKL est le prototype classique du PTS1."
      },
      {
        "content": "Le récepteur PEX5 reste définitivement piégé dans la matrice après chaque import.",
        "correct": false,
        "explanation": "PEX5 est recyclé vers le cytosol."
      },
      {
        "content": "PTS2 est un motif C-terminal reconnu par PEX5.",
        "correct": false,
        "explanation": "PTS2 est N-terminal et reconnu principalement par PEX7."
      },
      {
        "content": "PEX5 est le récepteur cytosolique principal des cargos portant un PTS1.",
        "correct": true,
        "explanation": "PEX5 lie le cargo dans le cytosol puis l’amène vers la machinerie d’import membranaire."
      },
      {
        "content": "L’adressage peroxysomal nécessite une N-glycosylation préalable dans le Golgi.",
        "correct": false,
        "explanation": "Les protéines matricielles sont importées directement depuis le cytosol sans passage obligatoire par le Golgi."
      }
    ],
    "explanation": "Les protéines matricielles peroxysomales sont synthétisées dans le cytosol puis importées grâce aux signaux PTS et aux peroxines, notamment PEX5 et PEX7."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle enzyme peroxysomale élimine efficacement le H2O2 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "catalase",
        "la catalase"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La catalase convertit notamment 2 H2O2 en 2 H2O + O2."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est exacte à propos du thème suivant : les oxydases, la catalase et le peroxyde d’hydrogène ?",
    "choices": [
      {
        "content": "Les peroxysomes contiennent de nombreuses enzymes oxydatives.",
        "correct": true,
        "explanation": "Leur nom est lié à la production et au métabolisme du peroxyde d’hydrogène."
      },
      {
        "content": "La formation de H2O2 prouve que le peroxysome est dépourvu de systèmes antioxydants.",
        "correct": false,
        "explanation": "La catalase et d’autres enzymes antioxydantes limitent précisément son accumulation."
      },
      {
        "content": "Les peroxysomes fonctionnent en absence totale d’oxygène moléculaire.",
        "correct": false,
        "explanation": "De nombreuses réactions oxydatives peroxysomales utilisent O2."
      },
      {
        "content": "ABCD1 est une sous-unité de l’ATP synthase mitochondriale.",
        "correct": false,
        "explanation": "ABCD1 est un transporteur ABC peroxysomal."
      },
      {
        "content": "La catalase transforme le H2O2 en acide urique.",
        "correct": false,
        "explanation": "Elle le convertit notamment en eau et dioxygène."
      }
    ],
    "explanation": "Les oxydases peroxysomales transfèrent des électrons à l’oxygène et peuvent former du H2O2 ; la catalase le consomme et limite sa toxicité."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les cinq affirmations proposées, lesquelles sont justes sur le thème suivant : l’adressage et l’import des protéines peroxysomales ?",
    "choices": [
      {
        "content": "Le motif SKL est un signal d’adressage vers le noyau.",
        "correct": false,
        "explanation": "SKL est le prototype du PTS1 peroxysomal."
      },
      {
        "content": "L’import matriciel peroxysomal est essentiellement post-traductionnel.",
        "correct": true,
        "explanation": "La protéine est d’abord synthétisée dans le cytosol avant son import."
      },
      {
        "content": "Le peroxysome peut importer certaines protéines déjà repliées, voire oligomériques.",
        "correct": true,
        "explanation": "Cette capacité distingue l’import peroxysomal de plusieurs autres systèmes de translocation."
      },
      {
        "content": "PEX19 est une hydrolase de la matrice lysosomale.",
        "correct": false,
        "explanation": "PEX19 intervient dans l’adressage de protéines membranaires peroxysomales."
      },
      {
        "content": "Les peroxines sont des protéines impliquées dans la biogenèse et l’import peroxysomaux.",
        "correct": true,
        "explanation": "Le préfixe PEX désigne de nombreuses protéines de cette machinerie."
      }
    ],
    "explanation": "Les protéines matricielles peroxysomales sont synthétisées dans le cytosol puis importées grâce aux signaux PTS et aux peroxines, notamment PEX5 et PEX7."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel gaz est libéré lorsque la catalase décompose le H2O2 par sa réaction catalatique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "O2",
        "dioxygène",
        "oxygène"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La réaction catalatique libère du dioxygène et forme de l’eau."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi ces cinq affirmations, sélectionnez exactement les deux correctes sur le thème suivant : les oxydases, la catalase et le peroxyde d’hydrogène.",
    "choices": [
      {
        "content": "La catalase est une protéine spécifique des lysosomes.",
        "correct": false,
        "explanation": "Elle est emblématique de la matrice peroxysomale."
      },
      {
        "content": "La catalase peut convertir deux molécules de H2O2 en eau et dioxygène.",
        "correct": true,
        "explanation": "La réaction catalatique globale est 2 H2O2 → 2 H2O + O2."
      },
      {
        "content": "Les transporteurs ABC utilisent exclusivement du GTP.",
        "correct": false,
        "explanation": "Ils utilisent l’ATP."
      },
      {
        "content": "Chez l’humain, la catalase assure à elle seule la quasi-totalité du catabolisme hépatique de l’éthanol.",
        "correct": false,
        "explanation": "L’alcool déshydrogénase et CYP2E1 ont des rôles majeurs ; la catalase est minoritaire."
      },
      {
        "content": "Le H2O2 est une espèce réactive de l’oxygène qui doit être contrôlée.",
        "correct": true,
        "explanation": "En excès, il contribue au stress oxydant et peut endommager des macromolécules."
      }
    ],
    "explanation": "Les oxydases peroxysomales transfèrent des électrons à l’oxygène et peuvent former du H2O2 ; la catalase le consomme et limite sa toxicité.",
    "requiredSelectionCount": 2
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sélectionnez les propositions exactes sur le thème suivant : l’adressage et l’import des protéines peroxysomales.",
    "choices": [
      {
        "content": "PEX19 participe à l’adressage de nombreuses protéines de membrane peroxysomale.",
        "correct": true,
        "explanation": "PEX19 agit comme chaperonne/récepteur de protéines membranaires peroxysomales."
      },
      {
        "content": "PEX3 constitue un point d’ancrage important pour l’insertion de protéines membranaires peroxysomales.",
        "correct": true,
        "explanation": "PEX3 coopère notamment avec PEX19 dans la biogenèse membranaire."
      },
      {
        "content": "Le récepteur PEX5 est recyclé vers le cytosol après la livraison du cargo.",
        "correct": true,
        "explanation": "Son recyclage dépend d’une machinerie ATP-dépendante impliquant notamment PEX1 et PEX6."
      },
      {
        "content": "Le signal PTS1 reste généralement présent dans la protéine mature.",
        "correct": true,
        "explanation": "Contrairement à de nombreux peptides signaux du RE, il n’est pas systématiquement clivé."
      },
      {
        "content": "La translocation des protéines peroxysomales utilise le canal Sec61 du réticulum endoplasmique.",
        "correct": false,
        "explanation": "Sec61 appartient à la translocation dans le RE, pas à l’import matriciel peroxysomal."
      }
    ],
    "explanation": "Les protéines matricielles peroxysomales sont synthétisées dans le cytosol puis importées grâce aux signaux PTS et aux peroxines, notamment PEX5 et PEX7."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement le thème suivant : les oxydases, la catalase et le peroxyde d’hydrogène ?",
    "choices": [
      {
        "content": "L’acyl-CoA oxydase peroxysomale transfère ses électrons directement à la chaîne respiratoire mitochondriale.",
        "correct": false,
        "explanation": "Elle transfère directement les électrons à O2 et produit du H2O2."
      },
      {
        "content": "Certaines oxydases peroxysomales produisent du H2O2.",
        "correct": true,
        "explanation": "Elles transfèrent directement des électrons à l’oxygène moléculaire."
      },
      {
        "content": "La catalase est une protéine spécifique des lysosomes.",
        "correct": false,
        "explanation": "Elle est emblématique de la matrice peroxysomale."
      },
      {
        "content": "Les transporteurs ABC utilisent exclusivement du GTP.",
        "correct": false,
        "explanation": "Ils utilisent l’ATP."
      },
      {
        "content": "Chez l’humain, la catalase assure à elle seule la quasi-totalité du catabolisme hépatique de l’éthanol.",
        "correct": false,
        "explanation": "L’alcool déshydrogénase et CYP2E1 ont des rôles majeurs ; la catalase est minoritaire."
      }
    ],
    "explanation": "Les oxydases peroxysomales transfèrent des électrons à l’oxygène et peuvent former du H2O2 ; la catalase le consomme et limite sa toxicité."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les oxydases, la catalase et le peroxyde d’hydrogène, quelles propositions sont incorrectes ?",
    "choices": [
      {
        "content": "Les transporteurs ABC utilisent exclusivement du GTP.",
        "correct": true,
        "explanation": "Ils utilisent l’ATP."
      },
      {
        "content": "La catalase peut convertir deux molécules de H2O2 en eau et dioxygène.",
        "correct": false,
        "explanation": "La réaction catalatique globale est 2 H2O2 → 2 H2O + O2."
      },
      {
        "content": "Chez l’humain, la catalase assure à elle seule la quasi-totalité du catabolisme hépatique de l’éthanol.",
        "correct": true,
        "explanation": "L’alcool déshydrogénase et CYP2E1 ont des rôles majeurs ; la catalase est minoritaire."
      },
      {
        "content": "Le H2O2 est une espèce réactive de l’oxygène qui doit être contrôlée.",
        "correct": false,
        "explanation": "En excès, il contribue au stress oxydant et peut endommager des macromolécules."
      },
      {
        "content": "L’acyl-CoA oxydase est une enzyme clé de la première étape de la β-oxydation peroxysomale.",
        "correct": false,
        "explanation": "Elle transfère les électrons du FADH2 directement à O2, formant H2O2."
      }
    ],
    "explanation": "Les oxydases peroxysomales transfèrent des électrons à l’oxygène et peuvent former du H2O2 ; la catalase le consomme et limite sa toxicité."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle enzyme initie classiquement la β-oxydation peroxysomale en transférant des électrons à O2 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acyl-CoA oxydase",
        "acyl coa oxydase",
        "ACOX",
        "ACOX1"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’acyl-CoA oxydase produit du H2O2 lors de la première étape de la β-oxydation peroxysomale."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Repérez l’unique affirmation exacte concernant le thème suivant : les oxydases, la catalase et le peroxyde d’hydrogène.",
    "choices": [
      {
        "content": "L’acyl-CoA oxydase est une enzyme clé de la première étape de la β-oxydation peroxysomale.",
        "correct": true,
        "explanation": "Elle transfère les électrons du FADH2 directement à O2, formant H2O2."
      },
      {
        "content": "Les oxydases peroxysomales détruisent toutes le H2O2 sans en former.",
        "correct": false,
        "explanation": "Plusieurs oxydases en génèrent au cours de leur réaction."
      },
      {
        "content": "Le H2O2 est chimiquement inerte et ne participe jamais au stress oxydant.",
        "correct": false,
        "explanation": "C’est une espèce réactive de l’oxygène pouvant contribuer aux dommages oxydatifs."
      },
      {
        "content": "La β-oxydation peroxysomale alimente directement une ATP synthase située dans la membrane peroxysomale.",
        "correct": false,
        "explanation": "Le peroxysome ne possède pas de phosphorylation oxydative comparable à la mitochondrie."
      },
      {
        "content": "L’acyl-CoA oxydase peroxysomale transfère ses électrons directement à la chaîne respiratoire mitochondriale.",
        "correct": false,
        "explanation": "Elle transfère directement les électrons à O2 et produit du H2O2."
      }
    ],
    "explanation": "Les oxydases peroxysomales transfèrent des électrons à l’oxygène et peuvent former du H2O2 ; la catalase le consomme et limite sa toxicité."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "La β-oxydation peroxysomale produit-elle directement de l’ATP par phosphorylation oxydative ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le peroxysome ne possède pas de chaîne respiratoire couplée à une ATP synthase."
  }
];
