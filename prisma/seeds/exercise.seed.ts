import type { PrismaClient } from '@prisma/client';

export async function seedExercises(prisma: PrismaClient) {
  console.log('🏋️ Seeding Exercises...');

  // Données extraites de Labolycée pour Physique-Chimie
  const physicsExercises = [
    // ==================== BAC 2024 MÉTROPOLE JOUR 1 - PHYSIQUE-CHIMIE ====================
    {
      examPaperLabel: 'France métropolitaine juin 2024 Jour 1',
      sessionDay: 'Jour 1',
      exercises: [
        {
          exerciseNumber: 1,
          label: 'Vers le bleu de thymol',
          statement: 'Formule topologique, semi-développée, schéma de Lewis, chromatographie sur couche mince (CCM), extraction liquide-liquide, acide-base, isomérie, catalyseur, distillation fractionnée.',
          points: 9,
          estimatedDuration: 95, // 1h35 en minutes
          estimatedDifficulty: 4,
          themeDescriptions: ['Acide-Base', 'Cinétique', 'Synthèse organique'],
        },
        {
          exerciseNumber: 2,
          label: 'Observation d\'un avion en vol',
          statement: 'Lunette astronomique, grossissement, effet Doppler.',
          points: 5,
          estimatedDuration: 53,
          estimatedDifficulty: 3,
          themeDescriptions: ['Effet Doppler', 'Lunette astronomique'],
        },
        {
          exerciseNumber: 3,
          label: 'Accéléromètre d\'un mobile multifonction',
          statement: '2e loi de Newton, équations horaires, approche énergétique.',
          points: 6,
          estimatedDuration: 63, // 1h03
          estimatedDifficulty: 3,
          themeDescriptions: ['2nde Loi Newton', 'Mouvement dans un champ de pesanteur uniforme'],
        },
      ],
    },
    // ==================== BAC 2024 MÉTROPOLE JOUR 2 - PHYSIQUE-CHIMIE ====================
    {
      examPaperLabel: 'France métropolitaine juin 2024 Jour 2',
      sessionDay: 'Jour 2',
      exercises: [
        {
          exerciseNumber: 1,
          label: 'Autour du basket-ball',
          statement: 'Mouvement dans un champ de pesanteur uniforme, équations horaires, équation trajectoire, Python, étude énergétique. Niveau sonore, résolution de problème.',
          points: 11,
          estimatedDuration: 115, // 1h55
          estimatedDifficulty: 4,
          themeDescriptions: ['Intensité sonore', 'Mouvement dans un champ de pesanteur uniforme', 'Python'],
        },
        {
          exerciseNumber: 2,
          label: 'Un champignon parfumé',
          statement: 'Famille fonctionnelle, acide-base, stœchiométrie, rendement.',
          points: 4,
          estimatedDuration: 42,
          estimatedDifficulty: 2,
          themeDescriptions: ['Acide-Base', 'Synthèse organique'],
        },
        {
          exerciseNumber: 3,
          label: 'Batterie Lithium - Soufre',
          statement: 'Pile, oxydo-réduction, durée de fonctionnement.',
          points: 5,
          estimatedDuration: 53,
          estimatedDifficulty: 3,
          themeDescriptions: ['Piles', 'Constante équilibre'],
        },
      ],
    },
  ];

  // ==================== BAC MATHS - Données de sujetdebac.fr ====================
  const mathsExercises = [
    {
      examPaperLabel: 'France métropolitaine juin 2024 Jour 1',
      sessionDay: 'Jour 1',
      exercises: [
        {
          exerciseNumber: 1,
          label: 'Vrai/Faux',
          statement: 'Exercice de vrai/faux composé de 4 questions. Résoudre une équation différentielle et déterminer la convergence d\'une suite.',
          points: 5,
          estimatedDuration: 50,
          estimatedDifficulty: 2,
          themeDescriptions: ['Équation différentielle', 'Suites', 'Convergence'],
        },
        {
          exerciseNumber: 2,
          label: 'Probabilités conditionnelles',
          statement: 'Une agence de marketing a étudié la satisfaction des clients concernant le service clientèle à l\'occasion de l\'achat d\'un téléviseur. Exercice sur les probabilités conditionnelles avec arbre pondéré et loi binomiale.',
          points: 5,
          estimatedDuration: 60,
          estimatedDifficulty: 3,
          themeDescriptions: ['Probabilités', 'Loi binomiale', 'Arbre pondéré'],
        },
        {
          exerciseNumber: 3,
          label: 'Géométrie dans l\'espace',
          statement: 'Montrer qu\'un vecteur est normal à un plan, en déduire l\'équation cartésienne d\'un plan, la représentation paramétrique d\'une droite, et calculer le volume d\'un tétraèdre.',
          points: 5,
          estimatedDuration: 70,
          estimatedDifficulty: 4,
          themeDescriptions: ['Géométrie dans l\'espace', 'Vecteurs', 'Plan', 'Droite'],
        },
        {
          exerciseNumber: 4,
          label: 'Analyse de fonction avec ln(x)',
          statement: 'Analyse numérique d\'une fonction avec ln(x). Trouver la dérivée, le sens de variation et la convexité de la fonction. Étude d\'une fonction secondaire avec primitive et calcul d\'intégrale.',
          points: 5,
          estimatedDuration: 60,
          estimatedDifficulty: 4,
          themeDescriptions: ['Fonctions', 'Logarithme', 'Dérivation', 'Convexité', 'Intégration'],
        },
      ],
    },
    {
      examPaperLabel: 'France métropolitaine juin 2024 Jour 2',
      sessionDay: 'Jour 2',
      exercises: [
        {
          exerciseNumber: 1,
          label: 'Probabilités et loi binomiale',
          statement: 'La directrice d\'une école souhaite réaliser une étude auprès des étudiants qui ont passé l\'examen de fin d\'étude, pour analyser la façon dont ils pensent avoir réussi cet examen. On modélise la situation avec un arbre de probabilités à compléter. L\'élève doit également utiliser la loi binomiale.',
          points: 5,
          estimatedDuration: 60,
          estimatedDifficulty: 3,
          themeDescriptions: ['Probabilités', 'Loi binomiale', 'Arbre pondéré'],
        },
        {
          exerciseNumber: 2,
          label: 'Suite récurrente et équation différentielle',
          statement: 'Alain possède une piscine qui contient 50 m³ d\'eau. Pour désinfecter l\'eau, il doit ajouter du chlore. La situation est modélisée via une suite récurrente qu\'il faut étudier, un algorithme Python à compléter et une équation différentielle.',
          points: 5,
          estimatedDuration: 60,
          estimatedDifficulty: 4,
          themeDescriptions: ['Suites', 'Équation différentielle', 'Algorithmique'],
        },
        {
          exerciseNumber: 3,
          label: 'Fonction avec logarithme',
          statement: 'On considère une fonction avec ln(x) qu\'il faut analyser. L\'élève doit déterminer sa dérivée, puis sa dérivée seconde, ses variations, sa convexité et résoudre des équations.',
          points: 5,
          estimatedDuration: 60,
          estimatedDifficulty: 4,
          themeDescriptions: ['Fonctions', 'Logarithme', 'Dérivation', 'Convexité'],
        },
        {
          exerciseNumber: 4,
          label: 'Vrai/Faux en géométrie dans l\'espace',
          statement: 'C\'est un exercice sous la forme d\'un vrai/faux composé de 4 questions de géométrie dans l\'espace.',
          points: 5,
          estimatedDuration: 60,
          estimatedDifficulty: 3,
          themeDescriptions: ['Géométrie dans l\'espace', 'Vecteurs'],
        },
      ],
    },
  ];

  // Exercices synthétiques pour d'autres matières afin d'alimenter les filtres
  const otherSubjectsExercises = [
    {
      examPaperLabel: 'Métropole SVT 2024',
      teachingContains: 'Sciences de la Vie et de la Terre',
      exercises: [
        {
          exerciseNumber: 1,
          label: 'Géologie et climat',
          statement: 'Analyse d\'un document sur les variations climatiques et la tectonique.',
          points: 10,
          estimatedDuration: 90,
          estimatedDifficulty: 3,
          themeDescriptions: ['Climat', 'Tectonique des plaques'],
        },
      ],
    },
    {
      examPaperLabel: 'Métropole SES 2024',
      teachingContains: 'Sciences Économiques et Sociales',
      exercises: [
        {
          exerciseNumber: 1,
          label: 'Croissance et chômage',
          statement: 'Discussion argumentée sur les liens entre croissance et emploi.',
          points: 10,
          estimatedDuration: 90,
          estimatedDifficulty: 3,
          themeDescriptions: ['Croissance', 'Chômage'],
        },
      ],
    },
    {
      examPaperLabel: 'Métropole NSI 2024',
      teachingContains: 'Numérique et Sciences Informatiques',
      exercises: [
        {
          exerciseNumber: 1,
          label: 'Graphes et algorithmes',
          statement: 'Implémenter un parcours en largeur sur un graphe pondéré.',
          points: 10,
          estimatedDuration: 90,
          estimatedDifficulty: 3,
          themeDescriptions: ['Graphes', 'Algorithmique'],
        },
      ],
    },
    {
      examPaperLabel: 'Métropole HGGSP 2024',
      teachingContains: 'Histoire-Géographie, Géopolitique et Sciences Politiques',
      exercises: [
        {
          exerciseNumber: 1,
          label: 'Gouvernance mondiale',
          statement: 'Analyse d\'un corpus de documents sur l\'ONU et les conflits récents.',
          points: 10,
          estimatedDuration: 90,
          estimatedDifficulty: 3,
          themeDescriptions: ['Géopolitique'],
        },
      ],
    },
    {
      examPaperLabel: 'Métropole Philosophie 2024',
      teachingContains: 'Philosophie',
      exercises: [
        {
          exerciseNumber: 1,
          label: 'La liberté',
          statement: 'Dissertation sur la notion de liberté et de déterminisme.',
          points: 20,
          estimatedDuration: 180,
          estimatedDifficulty: 3,
          themeDescriptions: ['Liberté'],
        },
      ],
    },
    {
      examPaperLabel: 'Métropole Français 2024',
      teachingContains: 'Français',
      exercises: [
        {
          exerciseNumber: 1,
          label: 'Commentaire littéraire',
          statement: 'Analyse d\'un extrait et construction d\'une problématique.',
          points: 10,
          estimatedDuration: 120,
          estimatedDifficulty: 3,
          themeDescriptions: ['Commentaire'],
        },
        {
          exerciseNumber: 2,
          label: 'Dissertation',
          statement: 'Réflexion argumentée sur la poésie et le réel.',
          points: 10,
          estimatedDuration: 120,
          estimatedDifficulty: 3,
          themeDescriptions: ['Dissertation'],
        },
      ],
    },
  ];

  let createdCount = 0;

  // Créer les exercices de Physique-Chimie
  for (const paperData of physicsExercises) {
    // Trouver le sujet d'examen
    const examPaper = await prisma.examPaper.findFirst({
      where: {
        label: {
          contains: paperData.examPaperLabel,
        },
        sessionDay: paperData.sessionDay || null,
        teaching: {
          longDescription: {
            contains: 'Physique',
          },
        },
      },
    });

    if (!examPaper) {
      console.log(`⚠️  Sujet non trouvé: ${paperData.examPaperLabel}${paperData.sessionDay ? ' ' + paperData.sessionDay : ''}`);
      continue;
    }

    // Créer chaque exercice
    for (const exerciseData of paperData.exercises) {
      // Vérifier si l'exercice existe déjà
      const existingExercise = await prisma.exercise.findFirst({
        where: {
          examPaperId: examPaper.id,
          exerciseNumber: exerciseData.exerciseNumber,
        },
      });

      if (existingExercise) {
        continue; // Passer au suivant si l'exercice existe déjà
      }

      try {
        // Trouver les thèmes correspondants
        const themes = await prisma.theme.findMany({
          where: {
            OR: exerciseData.themeDescriptions?.map(desc => ({
              OR: [
                { shortDescription: { contains: desc, mode: 'insensitive' } },
                { longDescription: { contains: desc, mode: 'insensitive' } },
              ],
            })) || [],
          },
        });

        const themeIds = themes.map(t => t.id);

        await prisma.exercise.create({
          data: {
            exerciseNumber: exerciseData.exerciseNumber,
            label: exerciseData.label,
            statement: exerciseData.statement || '',
            points: exerciseData.points,
            estimatedDuration: exerciseData.estimatedDuration,
            estimatedDifficulty: exerciseData.estimatedDifficulty || 3,
            examPaperId: examPaper.id,
            themeIds,
            enrichmentStatus: 'completed',
            enrichedAt: new Date(),
          },
        });
        createdCount++;
      } catch (error) {
        console.log(`⚠️  Erreur lors de la création de l'exercice: ${exerciseData.label}`);
      }
    }
  }

  // Créer les exercices de Maths (structure standard)
  for (const paperData of mathsExercises) {
    const examPaper = await prisma.examPaper.findFirst({
      where: {
        label: {
          contains: paperData.examPaperLabel,
        },
        teaching: {
          longDescription: {
            contains: 'Mathématiques',
          },
        },
      },
    });

    if (!examPaper) {
      console.log(`⚠️  Sujet maths non trouvé: ${paperData.examPaperLabel}`);
      continue;
    }

    for (const exerciseData of paperData.exercises) {
      // Vérifier si l'exercice existe déjà
      const existingExercise = await prisma.exercise.findFirst({
        where: {
          examPaperId: examPaper.id,
          exerciseNumber: exerciseData.exerciseNumber,
        },
      });

      if (existingExercise) {
        continue; // Passer au suivant si l'exercice existe déjà
      }

      try {
        // Trouver les thèmes correspondants
        const themes = await prisma.theme.findMany({
          where: {
            OR: (exerciseData as any).themeDescriptions?.map((desc: string) => ({
              OR: [
                { shortDescription: { contains: desc, mode: 'insensitive' } },
                { longDescription: { contains: desc, mode: 'insensitive' } },
              ],
            })) || [],
          },
        });

        const themeIds = themes.map(t => t.id);

        await prisma.exercise.create({
          data: {
            exerciseNumber: exerciseData.exerciseNumber,
            label: exerciseData.label,
            statement: exerciseData.statement || '',
            points: exerciseData.points,
            estimatedDuration: exerciseData.estimatedDuration,
            estimatedDifficulty: exerciseData.estimatedDifficulty || 3,
            examPaperId: examPaper.id,
            themeIds,
            enrichmentStatus: 'completed',
            enrichedAt: new Date(),
          },
        });
        createdCount++;
      } catch (error) {
        console.log(`⚠️  Erreur lors de la création de l'exercice: Exercice ${exerciseData.exerciseNumber}`);
      }
    }
  }

  // Créer les exercices des autres matières pour alimenter les filtres
  for (const paperData of otherSubjectsExercises) {
    const examPaper = await prisma.examPaper.findFirst({
      where: {
        label: { contains: paperData.examPaperLabel },
        teaching: {
          longDescription: { contains: paperData.teachingContains },
        },
      },
    });

    if (!examPaper) {
      console.log(`⚠️  Sujet non trouvé pour ${paperData.examPaperLabel}`);
      continue;
    }

    for (const exerciseData of paperData.exercises) {
      const existingExercise = await prisma.exercise.findFirst({
        where: {
          examPaperId: examPaper.id,
          exerciseNumber: exerciseData.exerciseNumber,
        },
      });
      if (existingExercise) continue;

      const themes = await prisma.theme.findMany({
        where: {
          OR: exerciseData.themeDescriptions?.map(desc => ({
            OR: [
              { shortDescription: { contains: desc, mode: 'insensitive' } },
              { longDescription: { contains: desc, mode: 'insensitive' } },
            ],
          })) || [],
        },
      });

      try {
        await prisma.exercise.create({
          data: {
            exerciseNumber: exerciseData.exerciseNumber,
            label: exerciseData.label,
            statement: exerciseData.statement || '',
            points: exerciseData.points,
            estimatedDuration: exerciseData.estimatedDuration,
            estimatedDifficulty: exerciseData.estimatedDifficulty || 3,
            examPaperId: examPaper.id,
            themeIds: themes.map(t => t.id),
            enrichmentStatus: 'completed',
            enrichedAt: new Date(),
          },
        });
        createdCount++;
      } catch (error) {
        console.log(`⚠️  Erreur lors de la création de l'exercice: ${exerciseData.label}`);
      }
    }
  }

  console.log(`✓ ${createdCount} exercices créés`);
}
