import type { PrismaClient } from '@prisma/client';

export async function seedExamPapers(prisma: PrismaClient) {
  console.log('📄 Seeding Exam Papers...');

  // Récupérer les IDs nécessaires
  const bac = await prisma.diploma.findFirst({ where: { longDescription: 'Baccalauréat général' } });
  const generale = await prisma.division.findFirst({ where: { longDescription: 'Sciences' } });
  const terminale = await prisma.grade.findFirst({ where: { shortDescription: 'Tle' } });
  const premiere = await prisma.grade.findFirst({ where: { shortDescription: '1re' } });
  
  // Enseignements
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

  // Curriculums
  const reformeBac2021Term = await prisma.curriculum.findFirst({
    where: { longDescription: { startsWith: 'Réforme Bac 2021 - Terminale' } }
  });

  const reformeBac2021Premiere = await prisma.curriculum.findFirst({
    where: { longDescription: { startsWith: 'Réforme Bac 2021 - Première' } }
  });

  // Centres d'examen
  const metropole = await prisma.examinationCenter.findFirst({
    where: { description: 'France métropolitaine' }
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

  if (!bac || !generale || !terminale || !speMaths || !reformeBac2021Term || !metropole) {
    console.log('⚠️  Données de base manquantes, seeding des exam papers annulé');
    return;
  }

  const examPapers = [
    // Métropole 2024
    {
      label: 'Métropole - Juin 2024',
      sessionYear: 2024,
      diplomaId: bac.id,
      divisionId: generale.id,
      gradeId: terminale.id,
      teachingId: speMaths.id,
      curriculumId: reformeBac2021Term.id,
      examinationCenterIds: [metropole.id],
      chapterIds: [],
      themeIds: [],
    },
    
    // Antilles-Guyane 2024 (plusieurs centres)
    {
      label: 'Antilles-Guyane - Juin 2024',
      sessionYear: 2024,
      diplomaId: bac.id,
      divisionId: generale.id,
      gradeId: terminale.id,
      teachingId: speMaths.id,
      curriculumId: reformeBac2021Term.id,
      examinationCenterIds: antilles && guyane ? [antilles.id, guyane.id] : [],
      chapterIds: [],
      themeIds: [],
    },

    // Polynésie 2024
    {
      label: 'Polynésie - Juin 2024',
      sessionYear: 2024,
      diplomaId: bac.id,
      divisionId: generale.id,
      gradeId: terminale.id,
      teachingId: speMaths.id,
      curriculumId: reformeBac2021Term.id,
      examinationCenterIds: polynesie ? [polynesie.id] : [],
      chapterIds: [],
      themeIds: [],
    },

    // Amérique du Nord 2024
    {
      label: 'Amérique du Nord - Mai 2024',
      sessionYear: 2024,
      diplomaId: bac.id,
      divisionId: generale.id,
      gradeId: terminale.id,
      teachingId: speMaths.id,
      curriculumId: reformeBac2021Term.id,
      examinationCenterIds: ameriqueDuNord ? [ameriqueDuNord.id] : [],
      chapterIds: [],
      themeIds: [],
    },
  ];

  // Ajouter des sujets de Physique-Chimie si disponible
  if (spePhysique) {
    examPapers.push(
      {
        label: 'Métropole - Juin 2024',
        sessionYear: 2024,
        diplomaId: bac.id,
        divisionId: generale.id,
        gradeId: terminale.id,
        teachingId: spePhysique.id,
        curriculumId: reformeBac2021Term.id,
        examinationCenterIds: [metropole.id],
        chapterIds: [],
        themeIds: [],
      }
    );
  }

  // Ajouter des sujets de Première si disponible
  if (mathsPremiere && reformeBac2021Premiere && premiere) {
    examPapers.push(
      {
        label: 'Métropole - Juin 2024',
        sessionYear: 2024,
        diplomaId: bac.id,
        divisionId: generale.id,
        gradeId: premiere.id,
        teachingId: mathsPremiere.id,
        curriculumId: reformeBac2021Premiere.id,
        examinationCenterIds: [metropole.id],
        chapterIds: [],
        themeIds: [],
      }
    );
  }

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
