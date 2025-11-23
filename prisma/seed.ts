import { PrismaClient } from "@prisma/client";
import 'dotenv/config';
import { seedDiplomas } from "./seeds/diploma.seed";
import { seedDivisions } from "./seeds/division.seed";
import { seedExaminationCenters } from "./seeds/examination-center.seed";
import { seedGrades } from "./seeds/grade.seed";
import { seedSubjects } from "./seeds/subject.seed";
import { seedTeachings } from "./seeds/teaching.seed";
import { seedCurriculums } from "./seeds/curriculum.seed";
import { seedChapters } from "./seeds/chapter.seed";
import { seedThemes } from "./seeds/theme.seed";
import { seedUsers } from "./seeds/user.seed";

const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Début du seeding...");

    try {
        // 1. Entités sans dépendances
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

        // 5. Chapters (dépend de Subjects)
        await seedChapters(prisma);

        // 6. Themes (dépend de Chapters)
        await seedThemes(prisma);

        // 7. Utilisateurs (indépendants)
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
