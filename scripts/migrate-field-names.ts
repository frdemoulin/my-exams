/**
 * Migration script: Rename fields in Teaching and Curriculum collections
 * 
 * Teaching:
 *   - name → longDescription
 *   - shortName → shortDescription
 * 
 * Curriculum:
 *   - name → longDescription
 *   - description → shortDescription
 * 
 * Usage: npx ts-node scripts/migrate-field-names.ts
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function dropOldIndexes() {
  console.log('🔄 Dropping old unique indexes...');
  
  try {
    // Drop old Teaching index (name + gradeId + subjectId)
    await prisma.$runCommandRaw({
      dropIndexes: 'Teaching',
      index: 'Teaching_name_gradeId_subjectId_key',
    });
    console.log('✅ Dropped Teaching_name_gradeId_subjectId_key');
  } catch (error: any) {
    if (error.message?.includes('IndexNotFound')) {
      console.log('ℹ️  Teaching index already dropped or doesn\'t exist');
    } else {
      throw error;
    }
  }
  
  try {
    // Drop old Curriculum index (name + startYear)
    await prisma.$runCommandRaw({
      dropIndexes: 'Curriculum',
      index: 'Curriculum_name_startYear_key',
    });
    console.log('✅ Dropped Curriculum_name_startYear_key');
  } catch (error: any) {
    if (error.message?.includes('IndexNotFound')) {
      console.log('ℹ️  Curriculum index already dropped or doesn\'t exist');
    } else {
      throw error;
    }
  }
}

async function migrateTeachingFields() {
  console.log('🔄 Migrating Teaching collection...');
  
  // Get raw MongoDB connection
  const db = prisma.$extends({}).$connect;
  
  // Use MongoDB $rename operator to rename fields
  const result = await prisma.$runCommandRaw({
    update: 'Teaching',
    updates: [
      {
        q: {},
        u: {
          $rename: {
            name: 'longDescription',
            shortName: 'shortDescription',
          },
        },
        multi: true,
      },
    ],
  });

  console.log('✅ Teaching migration result:', result);
}

async function migrateCurriculumFields() {
  console.log('🔄 Migrating Curriculum collection...');
  
  const result = await prisma.$runCommandRaw({
    update: 'Curriculum',
    updates: [
      {
        q: {},
        u: {
          $rename: {
            name: 'longDescription',
            description: 'shortDescription',
          },
        },
        multi: true,
      },
    ],
  });

  console.log('✅ Curriculum migration result:', result);
}

async function createNewIndexes() {
  console.log('\n🔄 Creating new unique indexes...');
  
  try {
    // Create new Teaching index (longDescription + gradeId + subjectId)
    await prisma.$runCommandRaw({
      createIndexes: 'Teaching',
      indexes: [
        {
          key: {
            longDescription: 1,
            gradeId: 1,
            subjectId: 1,
          },
          name: 'Teaching_longDescription_gradeId_subjectId_key',
          unique: true,
        },
      ],
    });
    console.log('✅ Created Teaching_longDescription_gradeId_subjectId_key');
  } catch (error: any) {
    if (error.message?.includes('already exists')) {
      console.log('ℹ️  Teaching index already exists');
    } else {
      throw error;
    }
  }
  
  try {
    // Create new Curriculum index (longDescription + startYear)
    await prisma.$runCommandRaw({
      createIndexes: 'Curriculum',
      indexes: [
        {
          key: {
            longDescription: 1,
            startYear: 1,
          },
          name: 'Curriculum_longDescription_startYear_key',
          unique: true,
        },
      ],
    });
    console.log('✅ Created Curriculum_longDescription_startYear_key');
  } catch (error: any) {
    if (error.message?.includes('already exists')) {
      console.log('ℹ️  Curriculum index already exists');
    } else {
      throw error;
    }
  }
}

async function verifyMigration() {
  console.log('\n🔍 Verifying migration...');
  
  // Check Teaching - use raw query to avoid type issues
  const teachings: any = await prisma.teaching.findMany({
    take: 3,
  });
  
  console.log('\n📚 Sample Teaching records:');
  teachings.forEach((t: any) => {
    console.log(`  - ${t.longDescription} (${t.shortDescription})`);
  });

  // Check Curriculum - use raw query to avoid type issues
  const curriculums: any = await prisma.curriculum.findMany({
    take: 3,
  });
  
  console.log('\n📖 Sample Curriculum records:');
  curriculums.forEach((c: any) => {
    console.log(`  - ${c.longDescription} (${c.shortDescription || 'N/A'})`);
  });
}

async function main() {
  try {
    console.log('🚀 Starting field name migration...\n');
    
    // Step 1: Drop old indexes first
    await dropOldIndexes();
    
    console.log('');
    
    // Step 2: Rename fields
    await migrateTeachingFields();
    await migrateCurriculumFields();
    
    // Step 3: Create new indexes
    await createNewIndexes();
    
    // Step 4: Verify (skip for now since Prisma Client needs regeneration)
    console.log('\n⚠️  Skipping verification - Prisma Client needs to be regenerated');
    console.log('   Run: npx prisma generate');
    
    console.log('\n✨ Migration completed successfully!');
    console.log('\n📝 Next steps:');
    console.log('   1. Run: npx prisma generate');
    console.log('   2. Restart your dev server');
    console.log('   3. Test the application');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
