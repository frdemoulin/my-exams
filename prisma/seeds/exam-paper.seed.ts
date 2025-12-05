import type { PrismaClient } from '@prisma/client';

export async function seedExamPapers(prisma: PrismaClient) {
  console.log('📄 Seeding Exam Papers...');

  const monthNames = [
    'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
  ];

  const buildLabel = (center: string, examMonth?: number | null, examYear?: number | null, sessionDay?: string | null) => {
    const parts = [center];
    const monthLabel = examMonth ? monthNames[(examMonth || 1) - 1] : undefined;
    if (monthLabel) parts.push(monthLabel);
    if (examYear) parts.push(String(examYear));
    if (sessionDay) parts.push(sessionDay);
    return parts.join(' ').trim();
  };

  // Récupérer les IDs nécessaires - DIPLÔMES
  const bac = await prisma.diploma.findFirst({ where: { longDescription: 'Baccalauréat général' } });
  const bacTechno = await prisma.diploma.findFirst({ where: { longDescription: 'Baccalauréat technologique' } });
  const brevet = await prisma.diploma.findFirst({ where: { longDescription: 'Brevet des collèges' } });
  const bts = await prisma.diploma.findFirst({ where: { longDescription: 'Brevet de technicien supérieur' } });
  
  // DIVISIONS
  const generale = await prisma.division.findFirst({ where: { longDescription: 'Sciences' } });
  
  // GRADES
  const terminale = await prisma.grade.findFirst({ where: { shortDescription: 'Tle' } });
  const premiere = await prisma.grade.findFirst({ where: { shortDescription: '1re' } });
  const troisieme = await prisma.grade.findFirst({ where: { shortDescription: '3e' } });
  
  // ENSEIGNEMENTS - BAC GÉNÉRAL
  const speMaths = await prisma.teaching.findFirst({
    where: { 
      longDescription: 'Spécialité Mathématiques',
      gradeId: terminale?.id
    }
  });
  
  const spePhysique = await prisma.teaching.findFirst({
    where: { 
      longDescription: 'Spécialité Physique-Chimie',
      gradeId: terminale?.id
    }
  });

  const mathsPremiere = await prisma.teaching.findFirst({
    where: { 
      longDescription: 'Spécialité Mathématiques',
      gradeId: premiere?.id
    }
  });

  // ENSEIGNEMENTS - BREVET (collège)
  const mathsBrevet = await prisma.teaching.findFirst({
    where: { 
      subject: { shortDescription: { contains: 'Mathématiques' } },
      gradeId: troisieme?.id
    }
  });

  const francaisBrevet = await prisma.teaching.findFirst({
    where: { 
      subject: { shortDescription: { contains: 'Français' } },
      gradeId: troisieme?.id
    }
  });

  const histoireGeoBrevet = await prisma.teaching.findFirst({
    where: { 
      subject: { shortDescription: { contains: 'Histoire' } },
      gradeId: troisieme?.id
    }
  });

  // Curriculums
  const reformeBac2021Term = await prisma.curriculum.findFirst({
    where: { longDescription: { startsWith: 'Réforme Bac 2021 - Terminale' } }
  });

  const reformeBac2021Premiere = await prisma.curriculum.findFirst({
    where: { longDescription: { startsWith: 'Réforme Bac 2021 - Première' } }
  });

  // Centres d'examen
  const metropole = await prisma.examinationCenter.findFirst({
    where: { description: 'Métropole' }
  });
  
  const antilles = await prisma.examinationCenter.findFirst({
    where: { description: 'Antilles' }
  });
  
  const guyane = await prisma.examinationCenter.findFirst({
    where: { description: 'Guyane' }
  });

  const polynesie = await prisma.examinationCenter.findFirst({
    where: { description: 'Polynésie' }
  });

  const ameriqueDuNord = await prisma.examinationCenter.findFirst({
    where: { description: 'Amérique du Nord' }
  });

  // Récupérer quelques thèmes pour les associer aux sujets
  const themeSuites = await prisma.theme.findFirst({ where: { shortDescription: { contains: 'Suite' } } });
  const themeProbas = await prisma.theme.findFirst({ where: { shortDescription: { contains: 'Probabilité' } } });
  const themeDerivation = await prisma.theme.findFirst({ where: { shortDescription: { contains: 'Dérivation' } } });
  const themeFonctions = await prisma.theme.findFirst({ where: { shortDescription: { contains: 'Fonction' } } });

  if (!bac || !generale || !terminale || !speMaths || !reformeBac2021Term || !metropole) {
    console.log('⚠️  Données de base manquantes, seeding des exam papers annulé');
    return;
  }

  const examPapers = [
    // ==================== BAC GÉNÉRAL - MATHS TERMINALE ====================
    // Session 2024
    {
      label: buildLabel('France métropolitaine', 6, 2024, 'Jour 1'),
      sessionYear: 2024,
      sessionDay: 'Jour 1',
      examDay: 19,
      examMonth: 6,
      examYear: 2024,
      diplomaId: bac.id,
      divisionId: generale?.id ?? null,
      gradeId: terminale.id,
      teachingId: speMaths.id,
      curriculumId: reformeBac2021Term.id,
      examinationCenterIds: [metropole.id],
      chapterIds: [],
      themeIds: [themeSuites?.id, themeProbas?.id, themeFonctions?.id].filter((id): id is string => Boolean(id)),
      subjectUrl: 'https://www.sujetdebac.fr/annales/spe-mathematiques-2024-metropole-1',
      estimatedDuration: 240,
      totalDuration: 240,
      totalPoints: 20,
      estimatedDifficulty: 4,
      summary: 'Sujet portant sur les fonctions, les probabilités conditionnelles et les suites numériques. Exercice 1 : Vrai/Faux. Exercice 2 : probabilités conditionnelles. Exercice 3 : géométrie dans l\'espace. Exercice 4 : analyse avec fonction ln(x).',
      enrichmentStatus: 'completed',
      enrichedAt: new Date('2024-06-15'),
    },
    
    {
      label: buildLabel('France métropolitaine', 6, 2024, 'Jour 2'),
      sessionYear: 2024,
      sessionDay: 'Jour 2',
      examDay: 20,
      examMonth: 6,
      examYear: 2024,
      diplomaId: bac.id,
      divisionId: generale?.id ?? null,
      gradeId: terminale.id,
      teachingId: speMaths.id,
      curriculumId: reformeBac2021Term.id,
      examinationCenterIds: [metropole.id],
      chapterIds: [],
      themeIds: [themeSuites?.id, themeProbas?.id, themeFonctions?.id].filter((id): id is string => Boolean(id)),
      subjectUrl: 'https://www.sujetdebac.fr/annales/spe-mathematiques-2024-metropole-2',
      estimatedDuration: 240,
      totalDuration: 240,
      totalPoints: 20,
      estimatedDifficulty: 4,
      summary: 'Sujet du jour 2 portant sur les fonctions, les probabilités et la géométrie.',
      enrichmentStatus: 'pending',
    },
    
    {
      label: buildLabel('Antilles-Guyane', 6, 2024),
      sessionYear: 2024,
      examDay: 18,
      examMonth: 6,
      examYear: 2024,
      diplomaId: bac.id,
      divisionId: generale?.id ?? null,
      gradeId: terminale.id,
      teachingId: speMaths.id,
      curriculumId: reformeBac2021Term.id,
      examinationCenterIds: antilles && guyane ? [antilles.id, guyane.id] : [],
      chapterIds: [],
      themeIds: [themeFonctions?.id, themeProbas?.id].filter((id): id is string => Boolean(id)),
      subjectUrl: 'https://www.apmep.fr/IMG/pdf/Bac_Specialite_Antilles_Juin_2024.pdf',
      estimatedDuration: 240,
      estimatedDifficulty: 3,
      summary: 'Sujet complet abordant géométrie dans l\'espace, fonctions exponentielles et probabilités. Niveau de difficulté moyen avec des applications concrètes.',
      enrichmentStatus: 'completed',
      enrichedAt: new Date('2024-06-16'),
    },

    {
      label: buildLabel('Polynésie', 6, 2024),
      sessionYear: 2024,
      examMonth: 6,
      examYear: 2024,
      diplomaId: bac.id,
      divisionId: generale?.id ?? null,
      gradeId: terminale.id,
      teachingId: speMaths.id,
      curriculumId: reformeBac2021Term.id,
      examinationCenterIds: polynesie ? [polynesie.id] : [],
      chapterIds: [],
      themeIds: [themeFonctions?.id, themeProbas?.id].filter((id): id is string => Boolean(id)),
      subjectUrl: 'https://www.apmep.fr/IMG/pdf/Bac_Specialite_Polynesie_Juin_2024.pdf',
      estimatedDuration: 240,
      estimatedDifficulty: 5,
      summary: 'Sujet exigeant avec des questions de synthèse. Exercices sur les nombres complexes, les fonctions trigonométriques et les probabilités continues.',
      enrichmentStatus: 'completed',
      enrichedAt: new Date('2024-06-17'),
    },

    {
      label: buildLabel('Amérique du Nord', 5, 2024),
      sessionYear: 2024,
      examMonth: 5,
      examYear: 2024,
      diplomaId: bac.id,
      divisionId: generale?.id ?? null,
      gradeId: terminale.id,
      teachingId: speMaths.id,
      curriculumId: reformeBac2021Term.id,
      examinationCenterIds: ameriqueDuNord ? [ameriqueDuNord.id] : [],
      chapterIds: [],
      themeIds: [themeDerivation?.id, themeProbas?.id].filter((id): id is string => Boolean(id)),
      subjectUrl: 'https://www.apmep.fr/IMG/pdf/Bac_Specialite_AmeriqueNord_Mai_2024.pdf',
      estimatedDuration: 240,
      estimatedDifficulty: 3,
      summary: 'Sujet équilibré couvrant l\'ensemble du programme. Exercices classiques sur les dérivées, intégrales et statistiques à deux variables.',
      enrichmentStatus: 'completed',
      enrichedAt: new Date('2024-05-28'),
    },

    // Session 2023
    {
      label: buildLabel('France métropolitaine', 6, 2023),
      sessionYear: 2023,
      examDay: 20,
      examMonth: 6,
      examYear: 2023,
      diplomaId: bac.id,
      divisionId: generale?.id ?? null,
      gradeId: terminale.id,
      teachingId: speMaths.id,
      curriculumId: reformeBac2021Term.id,
      examinationCenterIds: [metropole.id],
      chapterIds: [],
      themeIds: [themeSuites?.id, themeFonctions?.id].filter((id): id is string => Boolean(id)),
      subjectUrl: 'https://www.apmep.fr/IMG/pdf/Bac_Specialite_Juin_2023.pdf',
      estimatedDuration: 240,
      estimatedDifficulty: 4,
      summary: 'Sujet 2023 portant sur les suites récurrentes, les limites de fonctions et les intégrales. Exercices variés avec un bon équilibre entre calculs et raisonnement.',
      enrichmentStatus: 'completed',
      enrichedAt: new Date('2023-06-20'),
    },

    {
      label: buildLabel('Amérique du Nord', 5, 2023),
      sessionYear: 2023,
      examMonth: 5,
      examYear: 2023,
      diplomaId: bac.id,
      divisionId: generale?.id ?? null,
      gradeId: terminale.id,
      teachingId: speMaths.id,
      curriculumId: reformeBac2021Term.id,
      examinationCenterIds: ameriqueDuNord ? [ameriqueDuNord.id] : [],
      chapterIds: [],
      themeIds: [themeFonctions?.id, themeProbas?.id].filter((id): id is string => Boolean(id)),
      estimatedDuration: 240,
      estimatedDifficulty: 3,
      enrichmentStatus: 'completed',
      enrichedAt: new Date('2023-05-20'),
    },

    // Session 2022
    {
      label: buildLabel('France métropolitaine', 6, 2022),
      sessionYear: 2022,
      examDay: 14,
      examMonth: 6,
      examYear: 2022,
      diplomaId: bac.id,
      divisionId: generale?.id ?? null,
      gradeId: terminale.id,
      teachingId: speMaths.id,
      curriculumId: reformeBac2021Term.id,
      examinationCenterIds: [metropole.id],
      chapterIds: [],
      themeIds: [themeProbas?.id, themeFonctions?.id].filter((id): id is string => Boolean(id)),
      subjectUrl: 'https://www.apmep.fr/IMG/pdf/Bac_Specialite_Juin_2022.pdf',
      estimatedDuration: 240,
      estimatedDifficulty: 3,
      summary: 'Première session de la réforme. Sujet accessible abordant probabilités conditionnelles, fonctions exponentielles et géométrie dans l\'espace.',
      enrichmentStatus: 'completed',
      enrichedAt: new Date('2022-06-18'),
    },

    {
      label: buildLabel('Amérique du Nord', 5, 2022),
      sessionYear: 2022,
      examMonth: 5,
      examYear: 2022,
      diplomaId: bac.id,
      divisionId: generale?.id ?? null,
      gradeId: terminale.id,
      teachingId: speMaths.id,
      curriculumId: reformeBac2021Term.id,
      examinationCenterIds: ameriqueDuNord ? [ameriqueDuNord.id] : [],
      chapterIds: [],
      themeIds: [themeFonctions?.id, themeSuites?.id].filter((id): id is string => Boolean(id)),
      estimatedDuration: 240,
      estimatedDifficulty: 3,
      enrichmentStatus: 'completed',
      enrichedAt: new Date('2022-05-15'),
    },

    // ==================== BAC GÉNÉRAL - PHYSIQUE-CHIMIE TERMINALE ====================
    ...(spePhysique ? [{
      label: buildLabel('France métropolitaine', 6, 2024, 'Jour 1'),
      sessionYear: 2024,
      sessionDay: 'Jour 1',
      examDay: 19,
      examMonth: 6,
      examYear: 2024,
      diplomaId: bac.id,
      divisionId: generale?.id ?? null,
      gradeId: terminale.id,
      teachingId: spePhysique.id,
      curriculumId: reformeBac2021Term.id,
      examinationCenterIds: [metropole.id],
      chapterIds: [],
      themeIds: [],
      subjectUrl: 'https://www.labolycee.org/bac-2024-metropole-jour-1',
      totalDuration: 210,
      totalPoints: 20,
      estimatedDuration: 210,
      estimatedDifficulty: 4,
      summary: '3 exercices : Vers le bleu de thymol (9 pts), Observation d\'un avion en vol (5 pts), Accéléromètre d\'un mobile (6 pts)',
      enrichmentStatus: 'completed',
      enrichedAt: new Date('2024-06-15'),
    },
    {
      label: buildLabel('France métropolitaine', 6, 2024, 'Jour 2'),
      sessionYear: 2024,
      sessionDay: 'Jour 2',
      examDay: 20,
      examMonth: 6,
      examYear: 2024,
      diplomaId: bac.id,
      divisionId: generale?.id ?? null,
      gradeId: terminale.id,
      teachingId: spePhysique.id,
      curriculumId: reformeBac2021Term.id,
      examinationCenterIds: [metropole.id],
      chapterIds: [],
      themeIds: [],
      subjectUrl: 'https://www.labolycee.org/bac-2024-metropole-jour-2',
      totalDuration: 210,
      totalPoints: 20,
      estimatedDuration: 210,
      estimatedDifficulty: 4,
      summary: '3 exercices : Autour du basket-ball (11 pts), Un champignon parfumé (4 pts), Batterie Lithium-Soufre (5 pts)',
      enrichmentStatus: 'completed',
      enrichedAt: new Date('2024-06-20'),
    },
    {
      label: buildLabel('Antilles-Guyane', 6, 2024),
      sessionYear: 2024,
      examDay: 19,
      examMonth: 6,
      examYear: 2024,
      diplomaId: bac.id,
      divisionId: generale?.id ?? null,
      gradeId: terminale.id,
      teachingId: spePhysique.id,
      curriculumId: reformeBac2021Term.id,
      examinationCenterIds: antilles ? [antilles.id] : [],
      chapterIds: [],
      themeIds: [],
      subjectUrl: 'https://labolycee.org/2024-antilles-sujet.pdf',
      estimatedDuration: 210,
      estimatedDifficulty: 3,
      summary: 'Exercices sur les ondes électromagnétiques, l\'effet Doppler et les transformations chimiques. Niveau moyen avec applications au quotidien.',
      enrichmentStatus: 'completed',
      enrichedAt: new Date('2024-06-16'),
    },
    {
      label: buildLabel('France métropolitaine', 6, 2023),
      sessionYear: 2023,
      examDay: 21,
      examMonth: 6,
      examYear: 2023,
      diplomaId: bac.id,
      divisionId: generale?.id ?? null,
      gradeId: terminale.id,
      teachingId: spePhysique.id,
      curriculumId: reformeBac2021Term.id,
      examinationCenterIds: [metropole.id],
      chapterIds: [],
      themeIds: [],
      subjectUrl: 'https://labolycee.org/2023-metropole-sujet.pdf',
      estimatedDuration: 210,
      estimatedDifficulty: 4,
      summary: 'Sujet 2023 avec des exercices sur la mécanique newtonienne, les circuits RC et la radioactivité. Bon équilibre théorie/pratique.',
      enrichmentStatus: 'completed',
      enrichedAt: new Date('2023-06-20'),
    },
    {
      label: buildLabel('France métropolitaine', 6, 2022),
      sessionYear: 2022,
      examDay: 15,
      examMonth: 6,
      examYear: 2022,
      diplomaId: bac.id,
      divisionId: generale?.id ?? null,
      gradeId: terminale.id,
      teachingId: spePhysique.id,
      curriculumId: reformeBac2021Term.id,
      examinationCenterIds: [metropole.id],
      chapterIds: [],
      themeIds: [],
      estimatedDuration: 210,
      estimatedDifficulty: 3,
      enrichmentStatus: 'completed',
      enrichedAt: new Date('2022-06-18'),
    }] : []),

    // ==================== BAC GÉNÉRAL - MATHS PREMIÈRE ====================
    ...(mathsPremiere && reformeBac2021Premiere && premiere ? [{
      label: buildLabel('France métropolitaine', 6, 2024),
      sessionYear: 2024,
      examMonth: 6,
      examYear: 2024,
      diplomaId: bac.id,
      divisionId: generale?.id ?? null,
      gradeId: premiere.id,
      teachingId: mathsPremiere.id,
      curriculumId: reformeBac2021Premiere.id,
      examinationCenterIds: [metropole.id],
      chapterIds: [],
      themeIds: [themeDerivation?.id].filter((id): id is string => Boolean(id)),
      subjectUrl: 'https://www.apmep.fr/IMG/pdf/Bac_Premiere_Specialite_Juin_2024.pdf',
      estimatedDuration: 120,
      estimatedDifficulty: 2,
      summary: 'Sujet de niveau Première couvrant les bases : second degré, dérivation, statistiques descriptives.',
      enrichmentStatus: 'completed',
      enrichedAt: new Date('2024-06-15'),
    },
    {
      label: buildLabel('France métropolitaine', 6, 2023),
      sessionYear: 2023,
      examMonth: 6,
      examYear: 2023,
      diplomaId: bac.id,
      divisionId: generale?.id ?? null,
      gradeId: premiere.id,
      teachingId: mathsPremiere.id,
      curriculumId: reformeBac2021Premiere.id,
      examinationCenterIds: [metropole.id],
      chapterIds: [],
      themeIds: [themeFonctions?.id].filter((id): id is string => Boolean(id)),
      subjectUrl: 'https://www.apmep.fr/IMG/pdf/Bac_Premiere_Specialite_Juin_2023.pdf',
      estimatedDuration: 120,
      estimatedDifficulty: 2,
      summary: 'Sujet accessible sur les fonctions polynômes, exponentielles et les statistiques. Idéal pour une première approche du Bac.',
      enrichmentStatus: 'completed',
      enrichedAt: new Date('2023-06-15'),
    }] : []),

    // TODO: Ajouter sujets de Brevet (nécessite une Division et un Curriculum génériques pour le collège)
  ];

  // Créer les exam papers
  let createdCount = 0;
  for (const paper of examPapers) {
    try {
      await prisma.examPaper.create({
        data: paper,
      });
      createdCount++;
    } catch (error) {
      console.log(`⚠️  Sujet déjà existant ou erreur: ${paper.label}`);
    }
  }

  console.log(`✓ ${createdCount} sujets d'examen créés`);
}
