/**
 * Migration script: Convert examinationCenterId to examinationCenterIds array
 * 
 * ExamPaper:
 *   - examinationCenterId (String?) → examinationCenterIds (String[])
 * 
 * Usage: npx ts-node scripts/migrate-exam-paper-centers.ts
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function migrateExamPaperCenters() {
  console.log('🔄 Migrating ExamPaper collection...');
  
  try {
    // Find all exam papers with old examinationCenterId field
    const examPapers: any = await prisma.$runCommandRaw({
      find: 'ExamPaper',
      filter: { examinationCenterId: { $exists: true } },
    });

    const papersToMigrate = examPapers.cursor.firstBatch || [];
    console.log(`📊 Found ${papersToMigrate.length} exam papers to migrate`);

    if (papersToMigrate.length === 0) {
      console.log('✅ No exam papers need migration');
      return;
    }

    // Migrate each paper
    for (const paper of papersToMigrate) {
      const centerId = paper.examinationCenterId;
      
      // If centerId exists, convert to array; otherwise use empty array
      const centerIds = centerId ? [centerId] : [];

      await prisma.$runCommandRaw({
        update: 'ExamPaper',
        updates: [
          {
            q: { _id: paper._id },
            u: {
              $set: { examinationCenterIds: centerIds },
              $unset: { examinationCenterId: '' },
            },
          },
        ],
      });

      console.log(`  ✓ Migrated paper ${paper._id}: ${centerId ? '1 center' : 'no center'} → array`);
    }

    console.log(`\n✅ Successfully migrated ${papersToMigrate.length} exam papers`);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    throw error;
  }
}

async function verifyMigration() {
  console.log('\n🔍 Verifying migration...');
  
  // Check for any remaining old field
  const remaining: any = await prisma.$runCommandRaw({
    find: 'ExamPaper',
    filter: { examinationCenterId: { $exists: true } },
  });

  const remainingCount = remaining.cursor.firstBatch?.length || 0;

  if (remainingCount > 0) {
    console.log(`⚠️  Warning: ${remainingCount} exam papers still have old field`);
  } else {
    console.log('✅ No exam papers with old field found');
  }

  // Show sample with new field
  const samples = await prisma.examPaper.findMany({
    take: 3,
    select: {
      id: true,
      label: true,
      examinationCenterIds: true,
    },
  });

  if (samples.length > 0) {
    console.log('\n📝 Sample exam papers with new field:');
    samples.forEach((paper: any) => {
      console.log(`  - ${paper.label || paper.id}: ${paper.examinationCenterIds?.length || 0} center(s)`);
    });
  }
}

async function main() {
  try {
    console.log('🚀 Starting ExamPaper migration...\n');
    
    await migrateExamPaperCenters();
    await verifyMigration();
    
    console.log('\n✨ Migration completed successfully!');
    console.log('\n📝 Next steps:');
    console.log('   1. Test the exam paper forms');
    console.log('   2. Verify existing exam papers display correctly');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
