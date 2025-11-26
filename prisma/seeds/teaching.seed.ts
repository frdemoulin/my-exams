import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedTeachings() {
  console.log('📚 Seeding Teachings...');

  // Récupérer les IDs des grades
  const grades = await prisma.grade.findMany();
  const gradeByName: Record<string, string> = {};
  grades.forEach(grade => {
    gradeByName[grade.shortDescription] = grade.id;
  });

  // Récupérer les IDs des subjects
  const subjects = await prisma.subject.findMany();
  const subjectByName: Record<string, string> = {};
  subjects.forEach(subject => {
    subjectByName[subject.shortDescription] = subject.id;
  });

  const courses = [
    // === PREMIÈRE GÉNÉRALE ===
    // Spécialités Première
    {
      longDescription: 'Spécialité Mathématiques',
      shortDescription: 'Spé Maths',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['Maths'],
    },
    {
      longDescription: 'Spécialité Physique-Chimie',
      shortDescription: 'Spé PC',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['Sciences physiques'],
    },
    {
      longDescription: 'Spécialité Sciences de la Vie et de la Terre',
      shortDescription: 'Spé SVT',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['SVT'],
    },
    {
      longDescription: 'Spécialité Histoire-Géographie, Géopolitique et Sciences Politiques',
      shortDescription: 'Spé HGGSP',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['Histoire-Géo'],
    },
    {
      longDescription: 'Spécialité Humanités, Littérature et Philosophie',
      shortDescription: 'Spé HLP',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['Français'],
    },
    {
      longDescription: 'Spécialité Sciences Économiques et Sociales',
      shortDescription: 'Spé SES',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['SES'],
    },
    {
      longDescription: 'Spécialité Numérique et Sciences Informatiques',
      shortDescription: 'Spé NSI',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['Informatique'],
    },

    // Tronc Commun Première
    {
      longDescription: 'Tronc Commun - Mathématiques',
      shortDescription: 'TC Maths',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['Maths'],
    },
    {
      longDescription: 'Tronc Commun - Enseignement Scientifique',
      shortDescription: 'TC Sciences',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['Sciences physiques'],
    },
    {
      longDescription: 'Tronc Commun - Histoire-Géographie',
      shortDescription: 'TC Hist-Géo',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['Histoire-Géo'],
    },
    {
      longDescription: 'Tronc Commun - Français',
      shortDescription: 'TC Français',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['Français'],
    },

    // === TERMINALE GÉNÉRALE ===
    // Spécialités Terminale
    {
      longDescription: 'Spécialité Mathématiques',
      shortDescription: 'Spé Maths',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Maths'],
    },
    {
      longDescription: 'Spécialité Physique-Chimie',
      shortDescription: 'Spé PC',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Sciences physiques'],
    },
    {
      longDescription: 'Spécialité Sciences de la Vie et de la Terre',
      shortDescription: 'Spé SVT',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['SVT'],
    },
    {
      longDescription: 'Spécialité Histoire-Géographie, Géopolitique et Sciences Politiques',
      shortDescription: 'Spé HGGSP',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Histoire-Géo'],
    },
    {
      longDescription: 'Spécialité Humanités, Littérature et Philosophie',
      shortDescription: 'Spé HLP',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Français'],
    },
    {
      longDescription: 'Spécialité Sciences Économiques et Sociales',
      shortDescription: 'Spé SES',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['SES'],
    },
    {
      longDescription: 'Spécialité Numérique et Sciences Informatiques',
      shortDescription: 'Spé NSI',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Informatique'],
    },

    // Tronc Commun Terminale
    {
      longDescription: 'Tronc Commun - Enseignement Scientifique',
      shortDescription: 'TC Sciences',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Sciences physiques'],
    },
    {
      longDescription: 'Tronc Commun - Histoire-Géographie',
      shortDescription: 'TC Hist-Géo',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Histoire-Géo'],
    },
    {
      longDescription: 'Tronc Commun - Philosophie',
      shortDescription: 'TC Philo',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Philosophie'],
    },

    // Options Terminale
    {
      longDescription: 'Option Mathématiques Complémentaires',
      shortDescription: 'Maths Comp',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Maths'],
    },
    {
      longDescription: 'Option Mathématiques Expertes',
      shortDescription: 'Maths Expertes',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Maths'],
    },

    // === SECONDE GÉNÉRALE ===
    {
      longDescription: 'Mathématiques',
      shortDescription: 'Maths',
      gradeId: gradeByName['2de'],
      subjectId: subjectByName['Maths'],
    },
    {
      longDescription: 'Physique-Chimie',
      shortDescription: 'PC',
      gradeId: gradeByName['2de'],
      subjectId: subjectByName['Sciences physiques'],
    },
    {
      longDescription: 'Sciences de la Vie et de la Terre',
      shortDescription: 'SVT',
      gradeId: gradeByName['2de'],
      subjectId: subjectByName['SVT'],
    },
    {
      longDescription: 'Histoire-Géographie',
      shortDescription: 'Hist-Géo',
      gradeId: gradeByName['2de'],
      subjectId: subjectByName['Histoire-Géo'],
    },
    {
      longDescription: 'Français',
      shortDescription: 'Français',
      gradeId: gradeByName['2de'],
      subjectId: subjectByName['Français'],
    },
  ];

  let createdCount = 0;

  for (const course of courses) {
    if (!course.gradeId || !course.subjectId) {
      console.warn(`   ⚠️  Grade ou Subject non trouvé pour le cours: ${course.longDescription}`);
      continue;
    }

    // Chercher si le cours existe déjà
    const existingCourse = await prisma.teaching.findFirst({
      where: {
        longDescription: course.longDescription,
        gradeId: course.gradeId,
      },
    });

    if (existingCourse) {
      // Mettre à jour si existe
      await prisma.teaching.update({
        where: { id: existingCourse.id },
        data: {
          shortDescription: course.shortDescription,
          subjectId: course.subjectId,
        },
      });
    } else {
      // Créer si n'existe pas
      await prisma.teaching.create({
        data: course,
      });
    }
    createdCount++;
  }

  console.log(`   ✓ ${createdCount} cours créés`);
}
