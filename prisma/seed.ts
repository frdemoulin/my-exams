import { PrismaClient } from "@prisma/client";
import 'dotenv/config';
import { seedDiplomas } from "./seeds/diploma.seed";
import { seedDivisions } from "./seeds/division.seed";
import { seedExaminationCenters } from "./seeds/examination-center.seed";
import { seedGrades } from "./seeds/grade.seed";
import { seedTopics } from "./seeds/topic.seed";
import { seedSubjects } from "./seeds/subject.seed";
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

        // 2. Topics (pas de dépendances)
        await seedTopics(prisma);

        // 3. Subjects (dépend de Topics)
        await seedSubjects(prisma);

        // 4. Utilisateurs (indépendants pour l'instant)
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
