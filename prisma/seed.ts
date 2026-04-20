import { loadProjectEnv } from "../scripts/lib/load-env";

loadProjectEnv();

async function main() {
    console.log("🌱 Début du seeding...");

    const [
        { PrismaClient },
        { seedDiplomas },
        { seedDivisions },
        { seedExaminationCenters },
        { seedGrades },
        { seedSubjects },
        { seedTeachings },
        { seedCurriculums },
        { seedDomains },
        { seedThemes },
        { seedUsers },
        { seedExamPapers },
        { seedCorrections },
        { seedExercises },
        { seedEntitlements },
        { seedSubscriptionPlans },
        { seedTraining },
    ] = await Promise.all([
        import("@prisma/client"),
        import("./seeds/diploma.seed"),
        import("./seeds/division.seed"),
        import("./seeds/examination-center.seed"),
        import("./seeds/grade.seed"),
        import("./seeds/subject.seed"),
        import("./seeds/teaching.seed"),
        import("./seeds/curriculum.seed"),
        import("./seeds/domain.seed"),
        import("./seeds/theme.seed"),
        import("./seeds/user.seed"),
        import("./seeds/exam-paper.seed"),
        import("./seeds/correction.seed"),
        import("./seeds/exercise.seed"),
        import("./seeds/entitlement.seed"),
        import("./seeds/subscription-plan.seed"),
        import("./seeds/training.seed"),
    ]);

    const prisma = new PrismaClient();

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

        // 7. Training (dépend de Subjects et Domains)
        await seedTraining(prisma);

        // 8. Exam Papers (dépend de Diplomas, Divisions, Grades, Teachings, Curriculums, ExaminationCenters)
        await seedExamPapers(prisma);

        // 9. Exercises (dépend de ExamPapers et Themes)
        await seedExercises(prisma);

        // 10. Corrections (dépend de ExamPapers)
        await seedCorrections(prisma);

        // 11. Utilisateurs (indépendants)
        await seedUsers(prisma);

        console.log('✅ Seeding terminé avec succès !');
    } catch (error) {
        console.error('❌ Erreur lors du seeding:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
