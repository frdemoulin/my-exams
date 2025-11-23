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
      name: 'Spécialité Mathématiques',
      shortName: 'Spé Maths',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['Maths'],
    },
    {
      name: 'Spécialité Physique-Chimie',
      shortName: 'Spé PC',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['Sciences physiques'],
    },
    {
      name: 'Spécialité Sciences de la Vie et de la Terre',
      shortName: 'Spé SVT',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['SVT'],
    },
    {
      name: 'Spécialité Histoire-Géographie, Géopolitique et Sciences Politiques',
      shortName: 'Spé HGGSP',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['Histoire-Géo'],
    },
    {
      name: 'Spécialité Humanités, Littérature et Philosophie',
      shortName: 'Spé HLP',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['Français'],
    },
    {
      name: 'Spécialité Sciences Économiques et Sociales',
      shortName: 'Spé SES',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['SES'],
    },
    {
      name: 'Spécialité Numérique et Sciences Informatiques',
      shortName: 'Spé NSI',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['Informatique'],
    },

    // Tronc Commun Première
    {
      name: 'Tronc Commun - Mathématiques',
      shortName: 'TC Maths',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['Maths'],
    },
    {
      name: 'Tronc Commun - Enseignement Scientifique',
      shortName: 'TC Sciences',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['Sciences physiques'],
    },
    {
      name: 'Tronc Commun - Histoire-Géographie',
      shortName: 'TC Hist-Géo',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['Histoire-Géo'],
    },
    {
      name: 'Tronc Commun - Français',
      shortName: 'TC Français',
      gradeId: gradeByName['1re'],
      subjectId: subjectByName['Français'],
    },

    // === TERMINALE GÉNÉRALE ===
    // Spécialités Terminale
    {
      name: 'Spécialité Mathématiques',
      shortName: 'Spé Maths',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Maths'],
    },
    {
      name: 'Spécialité Physique-Chimie',
      shortName: 'Spé PC',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Sciences physiques'],
    },
    {
      name: 'Spécialité Sciences de la Vie et de la Terre',
      shortName: 'Spé SVT',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['SVT'],
    },
    {
      name: 'Spécialité Histoire-Géographie, Géopolitique et Sciences Politiques',
      shortName: 'Spé HGGSP',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Histoire-Géo'],
    },
    {
      name: 'Spécialité Humanités, Littérature et Philosophie',
      shortName: 'Spé HLP',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Français'],
    },
    {
      name: 'Spécialité Sciences Économiques et Sociales',
      shortName: 'Spé SES',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['SES'],
    },
    {
      name: 'Spécialité Numérique et Sciences Informatiques',
      shortName: 'Spé NSI',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Informatique'],
    },

    // Tronc Commun Terminale
    {
      name: 'Tronc Commun - Enseignement Scientifique',
      shortName: 'TC Sciences',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Sciences physiques'],
    },
    {
      name: 'Tronc Commun - Histoire-Géographie',
      shortName: 'TC Hist-Géo',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Histoire-Géo'],
    },
    {
      name: 'Tronc Commun - Philosophie',
      shortName: 'TC Philo',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Philosophie'],
    },

    // Options Terminale
    {
      name: 'Option Mathématiques Complémentaires',
      shortName: 'Maths Comp',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Maths'],
    },
    {
      name: 'Option Mathématiques Expertes',
      shortName: 'Maths Expertes',
      gradeId: gradeByName['Tle'],
      subjectId: subjectByName['Maths'],
    },

    // === SECONDE GÉNÉRALE ===
    {
      name: 'Mathématiques',
      shortName: 'Maths',
      gradeId: gradeByName['2de'],
      subjectId: subjectByName['Maths'],
    },
    {
      name: 'Physique-Chimie',
      shortName: 'PC',
      gradeId: gradeByName['2de'],
      subjectId: subjectByName['Sciences physiques'],
    },
    {
      name: 'Sciences de la Vie et de la Terre',
      shortName: 'SVT',
      gradeId: gradeByName['2de'],
      subjectId: subjectByName['SVT'],
    },
    {
      name: 'Histoire-Géographie',
      shortName: 'Hist-Géo',
      gradeId: gradeByName['2de'],
      subjectId: subjectByName['Histoire-Géo'],
    },
    {
      name: 'Français',
      shortName: 'Français',
      gradeId: gradeByName['2de'],
      subjectId: subjectByName['Français'],
    },
  ];

  let createdCount = 0;

  for (const course of courses) {
    if (!course.gradeId || !course.subjectId) {
      console.warn(`   ⚠️  Grade ou Subject non trouvé pour le cours: ${course.name}`);
      continue;
    }

    // Chercher si le cours existe déjà
    const existingCourse = await prisma.teaching.findFirst({
      where: {
        name: course.name,
        gradeId: course.gradeId,
      },
    });

    if (existingCourse) {
      // Mettre à jour si existe
      await prisma.teaching.update({
        where: { id: existingCourse.id },
        data: {
          shortName: course.shortName,
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
