import type { ContentVertical, HealthCourseUnitCoverageStatus, PrismaClient } from "@prisma/client";

import fixture from "./data/health-chapters-reims-ue14-chimie.json";

const CHAPTER_ORDER_BASE = 900;
const CHAPTER_LEVEL = "sante";
const HEALTH_SUBJECT_LONG_DESCRIPTION = "Sciences physiques";
const CHEMISTRY_DOMAIN_SHORT_DESCRIPTION = "Chimie";

type SeedDisplayGroup = {
  key: string;
  label: string;
  order: number;
};

type SeedChapter = {
  title: string;
  shortTitle?: string | null;
  slug: string;
  description?: string | null;
  order: number;
  displayGroupKey: string;
  displayGroupLabel?: string | null;
  displayGroupOrder?: number | null;
  sourceFileLabel: string;
};

type SeedFixture = {
  metadata: {
    label: string;
    description?: string;
    academicYear?: string;
    sourceLabel?: string;
    sourceCheckedAt?: string;
  };
  context: {
    institutionNameContains: string;
    programVersionSlug: string;
    courseUnitSlug: string;
    teachingElementSlug: string;
  };
  displayGroups?: SeedDisplayGroup[];
  chapters?: SeedChapter[];
};

const dateFromIso = (value?: string | null) =>
  value ? new Date(`${value}T12:00:00.000Z`) : undefined;

async function resolveInstitution(prisma: PrismaClient, institutionNameContains: string) {
  const institutions = await prisma.healthInstitution.findMany({
    where: {
      OR: [
        {
          name: {
            contains: institutionNameContains,
            mode: "insensitive",
          },
        },
        {
          shortName: {
            contains: institutionNameContains,
            mode: "insensitive",
          },
        },
      ],
    },
    orderBy: { name: "asc" },
    select: { id: true, name: true, shortName: true },
  });

  if (institutions.length === 1) return institutions[0];
  if (institutions.length === 0) {
    throw new Error(`Établissement introuvable pour "${institutionNameContains}"`);
  }

  throw new Error(`Résolution ambiguë de l'établissement pour "${institutionNameContains}"`);
}

function buildDisplayGroupMap(groups: SeedDisplayGroup[]) {
  return new Map(groups.map((group) => [group.key, group]));
}

function resolveDisplayGroup(
  chapter: SeedChapter,
  displayGroupMap: Map<string, SeedDisplayGroup>
) {
  const mappedGroup = displayGroupMap.get(chapter.displayGroupKey);
  const label = mappedGroup?.label ?? chapter.displayGroupLabel ?? null;
  const order = mappedGroup?.order ?? chapter.displayGroupOrder ?? null;

  if (!label || order == null) {
    throw new Error(`Groupe d'affichage incomplet pour le chapitre "${chapter.slug}"`);
  }

  return {
    key: chapter.displayGroupKey,
    label,
    order,
  };
}

export async function seedHealthChapters(prisma: PrismaClient) {
  const payload = fixture as SeedFixture;
  const chapters = payload.chapters ?? [];

  if (chapters.length === 0) return;

  console.log(`Seeding health chapters (${chapters.length} chapitres)...`);

  const institution = await resolveInstitution(
    prisma,
    payload.context.institutionNameContains
  );
  const version = await prisma.healthProgramVersion.findUnique({
    where: {
      institutionId_slug: {
        institutionId: institution.id,
        slug: payload.context.programVersionSlug,
      },
    },
    select: { id: true, label: true },
  });
  if (!version) {
    throw new Error(`Maquette introuvable pour "${payload.context.programVersionSlug}"`);
  }

  const courseUnit = await prisma.healthCourseUnit.findFirst({
    where: {
      programVersionId: version.id,
      slug: payload.context.courseUnitSlug,
    },
    select: { id: true, title: true },
  });
  if (!courseUnit) {
    throw new Error(`UE introuvable pour "${payload.context.courseUnitSlug}"`);
  }

  const teachingElement = await prisma.healthTeachingElement.findFirst({
    where: {
      courseUnitId: courseUnit.id,
      slug: payload.context.teachingElementSlug,
    },
    select: { id: true, title: true },
  });
  if (!teachingElement) {
    throw new Error(`EC introuvable pour "${payload.context.teachingElementSlug}"`);
  }

  const subject = await prisma.subject.findFirst({
    where: {
      longDescription: HEALTH_SUBJECT_LONG_DESCRIPTION,
    },
    select: { id: true, longDescription: true },
  });
  if (!subject) {
    throw new Error(`Matière introuvable pour "${HEALTH_SUBJECT_LONG_DESCRIPTION}"`);
  }

  const chemistryDomain = await prisma.domain.findFirst({
    where: {
      subjectId: subject.id,
      shortDescription: CHEMISTRY_DOMAIN_SHORT_DESCRIPTION,
    },
    select: { id: true },
  });

  const displayGroupMap = buildDisplayGroupMap(payload.displayGroups ?? []);
  const sourceCheckedAt = dateFromIso(payload.metadata.sourceCheckedAt);
  const chapterVertical: ContentVertical = "HEALTH";
  const assignmentCoverageStatus: HealthCourseUnitCoverageStatus = "STRUCTURE_ONLY";
  const defaultDomainIds = chemistryDomain ? [chemistryDomain.id] : [];

  for (const entry of chapters) {
    const displayGroup = resolveDisplayGroup(entry, displayGroupMap);
    const canonicalOrder = CHAPTER_ORDER_BASE + entry.order;

    const chapter = await prisma.chapter.upsert({
      where: {
        subjectId_slug: {
          subjectId: subject.id,
          slug: entry.slug,
        },
      },
      update: {
        vertical: chapterVertical,
        title: entry.title,
        shortTitle: entry.shortTitle ?? undefined,
        description: entry.description ?? undefined,
        level: CHAPTER_LEVEL,
        order: canonicalOrder,
        coverageStatus: assignmentCoverageStatus,
        sourceLabel: entry.sourceFileLabel,
        sourceCheckedAt,
        isActive: true,
        isPublished: false,
        domainIds: defaultDomainIds,
      },
      create: {
        vertical: chapterVertical,
        title: entry.title,
        shortTitle: entry.shortTitle ?? undefined,
        slug: entry.slug,
        description: entry.description ?? undefined,
        level: CHAPTER_LEVEL,
        order: canonicalOrder,
        coverageStatus: assignmentCoverageStatus,
        sourceLabel: entry.sourceFileLabel,
        sourceCheckedAt,
        isActive: true,
        isPublished: false,
        subjectId: subject.id,
        domainIds: defaultDomainIds,
      },
      select: { id: true },
    });

    await prisma.chapterAssignment.upsert({
      where: {
        contextType_contextId_chapterId: {
          contextType: "HEALTH_TEACHING_ELEMENT",
          contextId: teachingElement.id,
          chapterId: chapter.id,
        },
      },
      update: {
        vertical: chapterVertical,
        contextType: "HEALTH_TEACHING_ELEMENT",
        contextId: teachingElement.id,
        order: entry.order,
        displayGroupKey: displayGroup.key,
        displayGroupLabel: displayGroup.label,
        displayGroupOrder: displayGroup.order,
        coverageStatus: assignmentCoverageStatus,
        sourceLabel: entry.sourceFileLabel,
        sourceCheckedAt,
        isActive: true,
        isPublished: false,
      },
      create: {
        chapterId: chapter.id,
        vertical: chapterVertical,
        contextType: "HEALTH_TEACHING_ELEMENT",
        contextId: teachingElement.id,
        order: entry.order,
        displayGroupKey: displayGroup.key,
        displayGroupLabel: displayGroup.label,
        displayGroupOrder: displayGroup.order,
        coverageStatus: assignmentCoverageStatus,
        sourceLabel: entry.sourceFileLabel,
        sourceCheckedAt,
        isActive: true,
        isPublished: false,
      },
    });
  }

  console.log("✅ Fixtures des chapitres santé appliquées.");
}
