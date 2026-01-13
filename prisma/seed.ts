import { PrismaClient } from "@prisma/client";
import 'dotenv/config';
import { seedDiplomas } from "./seeds/diploma.seed";
import { seedDivisions } from "./seeds/division.seed";
import { seedExaminationCenters } from "./seeds/examination-center.seed";
import { seedGrades } from "./seeds/grade.seed";
import { seedSubjects } from "./seeds/subject.seed";
import { seedTeachings } from "./seeds/teaching.seed";
import { seedCurriculums } from "./seeds/curriculum.seed";
import { seedDomains } from "./seeds/domain.seed";
import { seedThemes } from "./seeds/theme.seed";
import { seedUsers } from "./seeds/user.seed";
import { seedExamPapers } from "./seeds/exam-paper.seed";
import { seedCorrections } from "./seeds/correction.seed";
import { seedExercises } from "./seeds/exercise.seed";
import { seedEntitlements } from "./seeds/entitlement.seed";
import { seedSubscriptionPlans } from "./seeds/subscription-plan.seed";

const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Début du seeding...");

    try {
        // 1. Entités sans dépendances
        await seedEntitlements(prisma);
        await seedSubscriptionPlans(prisma);
        await seedDiplomas(prisma);
        await seedDivisions(prisma);
        await seedExaminationCenters(prisma);
        await seedGrades(prisma);

        // 2. Subjects (base de la hiérarchie pédagogique)
        await seedSubjects(prisma);

        // 3. Teachings (dépend de Grades et Subjects)
        await seedTeachings();

        // 4. Curriculums/Programmes scolaires (dépend de Teachings)
        await seedCurriculums();

        // 5. Domains (dépend de Subjects)
        await seedDomains(prisma);

        // 6. Themes (dépend de Domains)
        await seedThemes(prisma);

        // 7. Exam Papers (dépend de Diplomas, Divisions, Grades, Teachings, Curriculums, ExaminationCenters)
        await seedExamPapers(prisma);

        // 8. Exercises (dépend de ExamPapers et Themes)
        await seedExercises(prisma);

        // 9. Corrections (dépend de ExamPapers)
        await seedCorrections(prisma);

        // 10. Utilisateurs (indépendants)
        await seedUsers(prisma);

        console.log('✅ Seeding terminé avec succès !');
    } catch (error) {
        console.error('❌ Erreur lors du seeding:', error);
        throw error;
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
