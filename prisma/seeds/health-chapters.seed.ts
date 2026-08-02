import type { ContentVertical, HealthCourseUnitCoverageStatus, PrismaClient } from "@prisma/client";

import biochemistryFixture from "./data/health-chapters-reims-ue14-biochimie.json";
import chemistryFixture from "./data/health-chapters-reims-ue14-chimie.json";

const DEFAULT_CHAPTER_ORDER_BASE = 900;
const CHAPTER_LEVEL = "sante";
const DEFAULT_SUBJECT_LONG_DESCRIPTION = "Sciences physiques";
const DEFAULT_DOMAIN_SHORT_DESCRIPTION = "Chimie";

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
    applyToAllMatchingCourseUnits?: boolean;
    chapterOrderBase?: number | null;
    subjectLongDescription?: string | null;
    domainShortDescription?: string | null;
  };
  displayGroups?: SeedDisplayGroup[];
  chapters?: SeedChapter[];
};

const ALL_HEALTH_CHAPTER_FIXTURES = [
  chemistryFixture,
  biochemistryFixture,
] as SeedFixture[];
const BIOCHEMISTRY_CHAPTER_FIXTURES = [biochemistryFixture] as SeedFixture[];

const dateFromIso = (value?: string | null) =>
  value ? new Date(`${value}T12:00:00.000Z`) : undefined;

function resolveFixtureContext(context: SeedFixture["context"]) {
  const chapterOrderBase = context.chapterOrderBase ?? DEFAULT_CHAPTER_ORDER_BASE;
  const subjectLongDescription =
    context.subjectLongDescription ?? DEFAULT_SUBJECT_LONG_DESCRIPTION;
  const domainShortDescription =
    context.domainShortDescription ??
    (context.subjectLongDescription ? null : DEFAULT_DOMAIN_SHORT_DESCRIPTION);

  return {
    chapterOrderBase,
    subjectLongDescription,
    domainShortDescription,
  };
}

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

async function seedHealthChapterFixtures(
  prisma: PrismaClient,
  fixtures: SeedFixture[]
) {
  const chapterCount = fixtures.reduce(
    (total, payload) => total + (payload.chapters?.length ?? 0),
    0
  );

  if (chapterCount === 0) return;

  console.log(`Seeding health chapters (${chapterCount} chapitres)...`);

  for (const payload of fixtures) {
    const chapters = payload.chapters ?? [];

    if (chapters.length === 0) continue;

    const { chapterOrderBase, subjectLongDescription, domainShortDescription } =
      resolveFixtureContext(payload.context);

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

    const courseUnits = payload.context.applyToAllMatchingCourseUnits
      ? await prisma.healthCourseUnit.findMany({
          where: {
            programVersionId: version.id,
            slug: payload.context.courseUnitSlug,
          },
          select: { id: true, title: true },
        })
      : [
          await prisma.healthCourseUnit.findFirst({
            where: {
              programVersionId: version.id,
              slug: payload.context.courseUnitSlug,
            },
            select: { id: true, title: true },
          }),
        ].filter((courseUnit): courseUnit is NonNullable<typeof courseUnit> =>
          Boolean(courseUnit)
        );
    if (courseUnits.length === 0) {
      throw new Error(`UE introuvable pour "${payload.context.courseUnitSlug}"`);
    }

    const subject = await prisma.subject.findFirst({
      where: {
        longDescription: subjectLongDescription,
      },
      select: { id: true, longDescription: true },
    });
    if (!subject) {
      throw new Error(`Matière introuvable pour "${subjectLongDescription}"`);
    }

    const existingDomain = domainShortDescription
      ? await prisma.domain.findFirst({
          where: {
            subjectId: subject.id,
            shortDescription: domainShortDescription,
          },
          select: { id: true },
        })
      : null;
    const domain =
      existingDomain ??
      (domainShortDescription
        ? await prisma.domain.create({
            data: {
              subjectId: subject.id,
              longDescription: domainShortDescription,
              shortDescription: domainShortDescription,
              isActive: true,
            },
            select: { id: true },
          })
        : null);

    const displayGroupMap = buildDisplayGroupMap(payload.displayGroups ?? []);
    const sourceCheckedAt = dateFromIso(payload.metadata.sourceCheckedAt);
    const chapterVertical: ContentVertical = "HEALTH";
    const assignmentCoverageStatus: HealthCourseUnitCoverageStatus = "STRUCTURE_ONLY";
    const defaultDomainIds = domain ? [domain.id] : [];

    for (const courseUnit of courseUnits) {
      const teachingElement = await prisma.healthTeachingElement.findFirst({
        where: {
          courseUnitId: courseUnit.id,
          slug: payload.context.teachingElementSlug,
        },
        select: { id: true, title: true },
      });
      if (!teachingElement) {
        throw new Error(
          `EC introuvable pour "${payload.context.teachingElementSlug}" dans l'UE "${courseUnit.title}"`
        );
      }

      for (const entry of chapters) {
        const displayGroup = resolveDisplayGroup(entry, displayGroupMap);
        const canonicalOrder = chapterOrderBase + entry.order;

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
    }
  }

  console.log("✅ Fixtures des chapitres santé appliquées.");
}

export async function seedHealthChapters(prisma: PrismaClient) {
  await seedHealthChapterFixtures(prisma, ALL_HEALTH_CHAPTER_FIXTURES);
}

export async function seedHealthBiochemistryChapters(prisma: PrismaClient) {
  await seedHealthChapterFixtures(prisma, BIOCHEMISTRY_CHAPTER_FIXTURES);
}
