import {
  HealthBlockType,
  HealthCourseUnitCoverageStatus,
  HealthProgramType,
  HealthStudyLevel,
  PrismaClient,
} from "@prisma/client";

export async function seedHealthUrca2026(prisma: PrismaClient) {
  console.log("🏛️  Seeding URCA LAS-SPS 2026-2027...");

  // 1. Résolution de l'établissement URCA (UAI 0511296G)
  const institution = await prisma.healthInstitution.findFirst({
    where: {
      OR: [
        { uaiCode: "0511296G" },
        { slug: "universite-de-reims-champagne-ardenne" },
      ],
    },
  });

  if (!institution) {
    throw new Error("Établissement URCA introuvable (UAI 0511296G)");
  }

  // 2. Programme LAS_SPS
  const program = await prisma.healthProgram.upsert({
    where: { code: "LAS_SPS" },
    update: {
      type: HealthProgramType.LAS_SPS,
      label: "Licence mention Sciences pour la santé – Accès santé",
      description: "Sciences pour la santé (LAS-SPS)",
      isActive: true,
      isPublished: true,
    },
    create: {
      code: "LAS_SPS",
      type: HealthProgramType.LAS_SPS,
      label: "Licence mention Sciences pour la santé – Accès santé",
      description: "Sciences pour la santé (LAS-SPS)",
      isActive: true,
      isPublished: true,
    },
  });

  // 3. Version de programme las-sps-2026-2027
  const versionSlug = "las-sps-2026-2027";
  const versionLabel = `${institution.name} - LAS-SPS - 2026-2027`;
  const sourceCheckedAt = new Date("2026-09-04T00:00:00.000Z");

  const programVersion = await prisma.healthProgramVersion.upsert({
    where: {
      institutionId_slug: {
        institutionId: institution.id,
        slug: versionSlug,
      },
    },
    update: {
      programId: program.id,
      label: versionLabel,
      academicYear: "2026-2027",
      studyLevel: HealthStudyLevel.L1,
      sourceUrl: "https://www.univ-reims.fr/formation/licence-sciences-pour-la-sante",
      sourceLabel: "URCA — La Licence Accès Santé à l'URCA (mise à jour 24/07/2026)",
      sourceCheckedAt,
      isCurrent: true,
      isActive: true,
      isPublished: true,
    },
    create: {
      institutionId: institution.id,
      programId: program.id,
      label: versionLabel,
      slug: versionSlug,
      academicYear: "2026-2027",
      studyLevel: HealthStudyLevel.L1,
      sourceUrl: "https://www.univ-reims.fr/formation/licence-sciences-pour-la-sante",
      sourceLabel: "URCA — La Licence Accès Santé à l'URCA (mise à jour 24/07/2026)",
      sourceCheckedAt,
      isCurrent: true,
      isActive: true,
      isPublished: true,
    },
  });

  // 4. Historisation déterministe de la version 2025-2026 URCA
  await prisma.healthProgramVersion.updateMany({
    where: {
      institutionId: institution.id,
      slug: "las-2025-2026",
    },
    data: {
      isCurrent: false,
    },
  });

  // 5. Les 10 parcours officiels URCA LAS-SPS 2026-2027
  const canonicalPathways = [
    { name: "Sciences appliquées à la santé", slug: "sciences-appliquees-a-la-sante-salsa", campus: "Reims" },
    { name: "STAPS", slug: "staps", campus: "Reims" },
    { name: "Psychologie", slug: "psychologie", campus: "Reims" },
    { name: "Économie et gestion", slug: "economie-et-gestion-reims", campus: "Reims" },
    { name: "Sciences sanitaires et sociales", slug: "sciences-sanitaires-et-sociales", campus: "Reims" },
    { name: "Sciences de la vie", slug: "sciences-de-la-vie", campus: "Reims" },
    { name: "Sciences de la vie et de la Terre", slug: "sciences-de-la-vie-et-de-la-terre", campus: "Reims" },
    { name: "Physique-Chimie", slug: "physique-chimie", campus: "Reims" },
    { name: "Économie et gestion", slug: "economie-et-gestion-troyes", campus: "Troyes" },
    { name: "Sciences pour l'ingénieur", slug: "sciences-pour-l-ingenieur", campus: "Charleville-Mézières" },
  ];

  const canonicalSlugs = new Set(canonicalPathways.map((p) => p.slug));

  // Purge déterministe des parcours non officiels (existingPathwaySlugs - canonical2026PathwaySlugs)
  const existingPathways = await prisma.healthPathway.findMany({
    where: { programVersionId: programVersion.id },
  });

  for (const existing of existingPathways) {
    if (!canonicalSlugs.has(existing.slug)) {
      const enrollmentsCount = await prisma.userAcademicEnrollment.count({
        where: { healthPathwayId: existing.id },
      });
      if (enrollmentsCount > 0) {
        throw new Error(
          `[DATA-URCA-2026] Impossible de supprimer le parcours ${existing.slug}: ${enrollmentsCount} enrollments y sont rattachés.`
        );
      }
      const profileCount = await prisma.userPedagogicalProfile.count({
        where: { healthPathwayId: existing.id },
      });
      if (profileCount > 0) {
        throw new Error(
          `[DATA-URCA-2026] Impossible de supprimer le parcours ${existing.slug}: ${profileCount} profils y sont rattachés.`
        );
      }
      const blockCount = await prisma.healthBlock.count({
        where: { pathwayId: existing.id },
      });
      if (blockCount > 0) {
        throw new Error(
          `[DATA-URCA-2026] Impossible de supprimer le parcours ${existing.slug}: ${blockCount} blocs y sont rattachés.`
        );
      }
      const courseUnitCount = await prisma.healthCourseUnit.count({
        where: { pathwayId: existing.id },
      });
      if (courseUnitCount > 0) {
        throw new Error(
          `[DATA-URCA-2026] Impossible de supprimer le parcours ${existing.slug}: ${courseUnitCount} UEs y sont rattachées.`
        );
      }

      console.log(`   🗑️  Suppression contrôlée du parcours non officiel : ${existing.slug} (${existing.name})`);
      await prisma.healthPathway.delete({ where: { id: existing.id } });
    }
  }

  for (const [index, p] of canonicalPathways.entries()) {
    await prisma.healthPathway.upsert({
      where: {
        programVersionId_slug: {
          programVersionId: programVersion.id,
          slug: p.slug,
        },
      },
      update: {
        name: p.name,
        campus: p.campus,
        parcoursupCode: null,
        order: index + 1,
        isActive: true,
        isPublished: true,
      },
      create: {
        programVersionId: programVersion.id,
        name: p.name,
        slug: p.slug,
        campus: p.campus,
        parcoursupCode: null,
        order: index + 1,
        isActive: true,
        isPublished: true,
      },
    });
  }

  // 6. Blocs d'enseignements
  const upsertHealthBlock = async (data: {
    programVersionId: string;
    pathwayId: string | null;
    type: HealthBlockType;
    title: string;
    slug: string;
    order: number;
    isActive: boolean;
    isPublished: boolean;
  }) => {
    const existing = await prisma.healthBlock.findFirst({
      where: {
        programVersionId: data.programVersionId,
        pathwayId: data.pathwayId,
        slug: data.slug,
      },
    });
    if (existing) {
      return prisma.healthBlock.update({
        where: { id: existing.id },
        data,
      });
    }
    return prisma.healthBlock.create({ data });
  };

  const blocSante = await upsertHealthBlock({
    programVersionId: programVersion.id,
    pathwayId: null,
    type: HealthBlockType.HEALTH,
    title: "Bloc Santé",
    slug: "bloc-sante",
    order: 1,
    isActive: true,
    isPublished: true,
  });

  const blocTransversal = await upsertHealthBlock({
    programVersionId: programVersion.id,
    pathwayId: null,
    type: HealthBlockType.TRANSVERSAL,
    title: "Bloc Transversal",
    slug: "bloc-transversal",
    order: 2,
    isActive: true,
    isPublished: true,
  });

  // 7. Unités d'enseignement (chacune valorisée à 6 ECTS)
  const courseUnitsData = [
    {
      code: "UE13",
      title: "UE13 – Anatomie – histologie – physiologie",
      shortTitle: "UE13 Anatomie Histologie Physio",
      slug: "ue13-anatomie-histologie-physiologie",
      blockId: blocSante.id,
      semester: 1,
      ects: 6,
      order: 1,
      isCommonToAllPathways: true,
      isHealthAccessRelevant: true,
      coverageStatus: HealthCourseUnitCoverageStatus.READY,
      isPublished: true,
    },
    {
      code: "UE14",
      title: "UE14 – Chimie – biochimie – biologie cellulaire",
      shortTitle: "UE14 Bioch Biocell Chimie",
      slug: "ue14-biochimie-biologie-cellulaire-chimie",
      blockId: blocSante.id,
      semester: 1,
      ects: 6,
      order: 2,
      isCommonToAllPathways: true,
      isHealthAccessRelevant: true,
      coverageStatus: HealthCourseUnitCoverageStatus.READY,
      isPublished: true,
    },
    {
      code: "UE23",
      title: "UE23 – Biologie moléculaire – Biophysique – Biostatistiques – Pharmacologie",
      shortTitle: "UE23 Biostat Biophys Biomol Pharma",
      slug: "ue23-biostatistiques-biophysique-biologie-moleculaire-pharmacologie",
      blockId: blocSante.id,
      semester: 2,
      ects: 6,
      order: 3,
      isCommonToAllPathways: true,
      isHealthAccessRelevant: true,
      coverageStatus: HealthCourseUnitCoverageStatus.STRUCTURE_ONLY,
      isPublished: false,
    },
    {
      code: "UE24",
      title: "UE24 – Santé 3 - 1 parcours obligatoire au choix, comprenant 3 EC (MMOPK)",
      shortTitle: "UE24 Spécialisation Santé",
      slug: "ue24-specialisation-sante",
      blockId: blocSante.id,
      semester: 2,
      ects: 6,
      order: 4,
      isCommonToAllPathways: true,
      isHealthAccessRelevant: true,
      coverageStatus: HealthCourseUnitCoverageStatus.STRUCTURE_ONLY,
      isPublished: false,
    },
    {
      code: "UE25",
      title: "UE25 – Transversale spécifique santé 2",
      shortTitle: "UE25 SHS Santé pub Anglais Numérique",
      slug: "ue25-shs-sante-publique-anglais-numerique",
      blockId: blocTransversal.id,
      semester: 2,
      ects: 6,
      order: 5,
      isCommonToAllPathways: true,
      isHealthAccessRelevant: true,
      coverageStatus: HealthCourseUnitCoverageStatus.STRUCTURE_ONLY,
      isPublished: false,
    },
  ];

  const createdCourseUnits = new Map<string, string>();

  for (const cu of courseUnitsData) {
    const existing = await prisma.healthCourseUnit.findFirst({
      where: {
        programVersionId: programVersion.id,
        OR: [
          { code: cu.code },
          { slug: cu.slug },
        ],
      },
    });

    const data = {
      programVersionId: programVersion.id,
      blockId: cu.blockId,
      code: cu.code,
      title: cu.title,
      shortTitle: cu.shortTitle,
      slug: cu.slug,
      semester: cu.semester,
      ects: cu.ects,
      order: cu.order,
      isCommonToAllPathways: cu.isCommonToAllPathways,
      isHealthAccessRelevant: cu.isHealthAccessRelevant,
      coverageStatus: cu.coverageStatus,
      sourceUrl: "https://www.univ-reims.fr/formation/licence-sciences-pour-la-sante",
      sourceLabel: "URCA — Guide pédagogique LAS-SPS 2026-2027",
      sourceCheckedAt,
      isActive: true,
      isPublished: cu.isPublished,
    };

    let cuId: string;
    if (existing) {
      const updated = await prisma.healthCourseUnit.update({
        where: { id: existing.id },
        data,
      });
      cuId = updated.id;
    } else {
      const created = await prisma.healthCourseUnit.create({
        data,
      });
      cuId = created.id;
    }
    createdCourseUnits.set(cu.code, cuId);
  }

  // 8. TeachingElements pour UE13 et UE14
  const teachingElementsData = [
    // UE13
    {
      courseUnitCode: "UE13",
      code: "UE13-ANAT",
      title: "Anatomie",
      shortTitle: "Anatomie",
      slug: "anatomie",
      order: 1,
      coverageStatus: HealthCourseUnitCoverageStatus.STRUCTURE_ONLY,
      isPublished: false,
    },
    {
      courseUnitCode: "UE13",
      code: "UE13-HISTO",
      title: "Histologie",
      shortTitle: "Histologie",
      slug: "histologie",
      order: 2,
      coverageStatus: HealthCourseUnitCoverageStatus.READY,
      isPublished: true,
    },
    {
      courseUnitCode: "UE13",
      code: "UE13-PHYSIO",
      title: "Physiologie",
      shortTitle: "Physiologie",
      slug: "physiologie",
      order: 3,
      coverageStatus: HealthCourseUnitCoverageStatus.STRUCTURE_ONLY,
      isPublished: false,
    },
    // UE14
    {
      courseUnitCode: "UE14",
      code: "UE14-CHIM",
      title: "Chimie générale et organique",
      shortTitle: "Chimie",
      slug: "chimie",
      order: 1,
      coverageStatus: HealthCourseUnitCoverageStatus.READY,
      isPublished: true,
    },
    {
      courseUnitCode: "UE14",
      code: "UE14-BIOCH",
      title: "Biochimie et biologie moléculaire",
      shortTitle: "Biochimie",
      slug: "biochimie",
      order: 2,
      coverageStatus: HealthCourseUnitCoverageStatus.READY,
      isPublished: true,
    },
    {
      courseUnitCode: "UE14",
      code: "UE14-BIOCELL",
      title: "Biologie cellulaire",
      shortTitle: "Biologie cellulaire",
      slug: "biologie-cellulaire",
      order: 3,
      coverageStatus: HealthCourseUnitCoverageStatus.READY,
      isPublished: true,
    },
  ];

  const targetTeachingElements = new Map<string, string>();

  for (const te of teachingElementsData) {
    const cuId = createdCourseUnits.get(te.courseUnitCode);
    if (!cuId) continue;

    const existingTe = await prisma.healthTeachingElement.findFirst({
      where: {
        courseUnitId: cuId,
        slug: te.slug,
      },
    });

    const teData = {
      courseUnitId: cuId,
      code: te.code,
      title: te.title,
      shortTitle: te.shortTitle,
      slug: te.slug,
      order: te.order,
      coverageStatus: te.coverageStatus,
      isActive: true,
      isPublished: te.isPublished,
      sourceUrl: "https://www.univ-reims.fr/formation/licence-sciences-pour-la-sante",
      sourceLabel: "URCA — Guide pédagogique LAS-SPS 2026-2027",
      sourceCheckedAt,
    };

    let targetTeId: string;
    if (existingTe) {
      const updated = await prisma.healthTeachingElement.update({
        where: { id: existingTe.id },
        data: teData,
      });
      targetTeId = updated.id;
    } else {
      const created = await prisma.healthTeachingElement.create({
        data: teData,
      });
      targetTeId = created.id;
    }

    targetTeachingElements.set(`${te.courseUnitCode}_${te.slug}`, targetTeId);
  }

  // 9. Projection dynamique des ChapterAssignments depuis 2025 vers 2026
  console.log("   🔄 Projection dynamique des ChapterAssignments de 2025 vers 2026...");
  const pv2025 = await prisma.healthProgramVersion.findFirst({
    where: {
      institutionId: institution.id,
      slug: "las-2025-2026",
    },
    include: {
      courseUnits: {
        include: {
          teachingElements: true,
        },
      },
    },
  });

  let totalProjected = 0;

  if (pv2025) {
    for (const cu2025 of pv2025.courseUnits) {
      for (const te2025 of cu2025.teachingElements) {
        const targetTeKey = `${cu2025.code}_${te2025.slug}`;
        const targetTeId = targetTeachingElements.get(targetTeKey);

        if (!targetTeId) {
          continue;
        }

        const assignments2025 = await prisma.chapterAssignment.findMany({
          where: {
            contextType: "HEALTH_TEACHING_ELEMENT",
            contextId: te2025.id,
          },
        });

        for (const assignment of assignments2025) {
          await prisma.chapterAssignment.upsert({
            where: {
              contextType_contextId_chapterId: {
                contextType: "HEALTH_TEACHING_ELEMENT",
                contextId: targetTeId,
                chapterId: assignment.chapterId,
              },
            },
            update: {
              vertical: assignment.vertical,
              titleOverride: assignment.titleOverride,
              shortTitleOverride: assignment.shortTitleOverride,
              slugOverride: assignment.slugOverride,
              descriptionOverride: assignment.descriptionOverride,
              displayGroupKey: assignment.displayGroupKey,
              displayGroupLabel: assignment.displayGroupLabel,
              displayGroupOrder: assignment.displayGroupOrder,
              order: assignment.order,
              coverageStatus: assignment.coverageStatus,
              sourceUrl: assignment.sourceUrl,
              sourceLabel: assignment.sourceLabel,
              sourceCheckedAt: assignment.sourceCheckedAt,
              isActive: assignment.isActive,
              isPublished: assignment.isPublished,
            },
            create: {
              chapterId: assignment.chapterId,
              vertical: assignment.vertical,
              contextType: "HEALTH_TEACHING_ELEMENT",
              contextId: targetTeId,
              titleOverride: assignment.titleOverride,
              shortTitleOverride: assignment.shortTitleOverride,
              slugOverride: assignment.slugOverride,
              descriptionOverride: assignment.descriptionOverride,
              displayGroupKey: assignment.displayGroupKey,
              displayGroupLabel: assignment.displayGroupLabel,
              displayGroupOrder: assignment.displayGroupOrder,
              order: assignment.order,
              coverageStatus: assignment.coverageStatus,
              sourceUrl: assignment.sourceUrl,
              sourceLabel: assignment.sourceLabel,
              sourceCheckedAt: assignment.sourceCheckedAt,
              isActive: assignment.isActive,
              isPublished: assignment.isPublished,
            },
          });
          totalProjected++;
        }
      }
    }
  }

  console.log(`   ✓ URCA LAS-SPS 2026-2027 initialisée avec succès (${totalProjected} ChapterAssignments projetés).`);
}
