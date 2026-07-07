import prisma from '@/lib/db/prisma';
import {
  userPedagogicalAudienceLabels,
  type UserPedagogicalAudienceValue,
} from './user-profile.schemas';
import type {
  UserPedagogicalProfileContext,
  UserPedagogicalProfileFormData,
  UserPedagogicalProfileOptions,
  UserPedagogicalProfileRecord,
  UserPedagogicalProfileSummary,
  userPedagogicalProfileSelect,
} from './user-profile.types';

const gradeOrder = new Map<string, number>([
  ['6e', 1],
  ['5e', 2],
  ['4e', 3],
  ['3e', 4],
  ['2de', 5],
  ['1re', 6],
  ['Tle', 7],
  ['BTS', 8],
]);

const formatCodeTitle = (code: string | null, title: string) =>
  code ? `${code} · ${title}` : title;

const simplifyHealthPathwayLabel = (label: string) => {
  const normalizedLabel = label.replace(/\s+/g, ' ').trim();

  if (
    normalizedLabel.startsWith('Licence - Parcours d\'Accès Spécifique Santé (PASS) - option ')
  ) {
    return normalizedLabel
      .replace('Licence - Parcours d\'Accès Spécifique Santé (PASS) - option ', '')
      .replace(/\s*-\s*dispens[ée]e?.*$/i, '')
      .replace(/\s*-\s*$/i, '')
      .trim();
  }

  if (normalizedLabel.startsWith('Licence - ')) {
    const withoutPrefix = normalizedLabel.replace(/^Licence - /, '');
    const withoutSuffix = withoutPrefix.replace(/\s*-\s*Accès Santé \(LAS\)$/i, '').trim();

    if (withoutSuffix.toLowerCase().startsWith('sciences pour la santé - ')) {
      return withoutSuffix
        .replace(/^sciences pour la santé - /i, '')
        .replace(/\s*:\s+.*$/i, '')
        .replace(/\s*-\s*/g, ' ')
        .trim();
    }

    const segments = withoutSuffix
      .split(/\s*-\s*/)
      .map((segment) => segment.trim())
      .filter(Boolean);

    return segments[0] ?? withoutSuffix;
  }

  return normalizedLabel;
};

const toFormData = (
  profile: UserPedagogicalProfileRecord | null
): UserPedagogicalProfileFormData => ({
  audience: (profile?.audience as UserPedagogicalAudienceValue | null) ?? '',
  secondaryGradeId: profile?.secondaryGradeId ?? '',
  secondaryTeachingIds: profile?.secondaryTeachingIds ?? [],
  healthInstitutionId: profile?.healthInstitutionId ?? '',
  healthProgramVersionId: profile?.healthProgramVersionId ?? '',
  healthPathwayId: profile?.healthPathwayId ?? '',
  healthCourseUnitId: profile?.healthCourseUnitId ?? '',
  healthTeachingElementId: profile?.healthTeachingElementId ?? '',
});

const buildEmptySummary = (): UserPedagogicalProfileSummary => ({
  isConfigured: false,
  audience: null,
  audienceLabel: null,
  title: 'Profil pédagogique à compléter',
  description:
    'Indique ton niveau scolaire ou ton contexte santé pour personnaliser les accès et les contenus affichés.',
  focusBadges: [],
  primaryHref: '/dashboard',
  primaryLabel: 'Compléter mon profil',
  secondaryGradeLabel: null,
  secondaryTeachingLabels: [],
  healthInstitutionLabel: null,
  healthProgramVersionLabel: null,
  healthPathwayLabel: null,
  healthCourseUnitLabel: null,
  healthTeachingElementLabel: null,
});

async function fetchUserPedagogicalProfileRecord(userId: string) {
  return prisma.userPedagogicalProfile.findUnique({
    where: { userId },
    select: {
      id: true,
      userId: true,
      audience: true,
      secondaryGradeId: true,
      secondaryTeachingIds: true,
      healthInstitutionId: true,
      healthProgramVersionId: true,
      healthPathwayId: true,
      healthCourseUnitId: true,
      healthTeachingElementId: true,
      createdAt: true,
      updatedAt: true,
    } satisfies typeof userPedagogicalProfileSelect,
  });
}

export async function fetchUserPedagogicalProfileOptions(): Promise<UserPedagogicalProfileOptions> {
  const [
    grades,
    teachings,
    healthInstitutions,
    healthProgramVersions,
    healthPathways,
    healthCourseUnits,
    healthTeachingElements,
  ] = await Promise.all([
    prisma.grade.findMany({
      orderBy: { shortDescription: 'asc' },
      select: {
        id: true,
        shortDescription: true,
        longDescription: true,
      },
    }),
    prisma.teaching.findMany({
      where: { isActive: true },
      select: {
        id: true,
        longDescription: true,
        shortDescription: true,
        gradeId: true,
        grade: {
          select: {
            shortDescription: true,
          },
        },
        subject: {
          select: {
            shortDescription: true,
            longDescription: true,
          },
        },
      },
      orderBy: [{ longDescription: 'asc' }],
    }),
    prisma.healthInstitution.findMany({
      where: { isActive: true },
      select: {
        id: true,
        name: true,
        shortName: true,
      },
      orderBy: [{ shortName: 'asc' }, { name: 'asc' }],
    }),
    prisma.healthProgramVersion.findMany({
      where: { isActive: true },
      select: {
        id: true,
        institutionId: true,
        academicYear: true,
        studyLevel: true,
        isCurrent: true,
        label: true,
        program: {
          select: {
            code: true,
          },
        },
      },
      orderBy: [{ isCurrent: 'desc' }, { academicYear: 'desc' }, { label: 'asc' }],
    }),
    prisma.healthPathway.findMany({
      where: { isActive: true },
      select: {
        id: true,
        programVersionId: true,
        name: true,
        campus: true,
        order: true,
      },
      orderBy: [{ order: 'asc' }, { name: 'asc' }],
    }),
    prisma.healthCourseUnit.findMany({
      where: { isActive: true },
      select: {
        id: true,
        programVersionId: true,
        pathwayId: true,
        isCommonToAllPathways: true,
        code: true,
        title: true,
        shortTitle: true,
        order: true,
      },
      orderBy: [{ order: 'asc' }, { title: 'asc' }],
    }),
    prisma.healthTeachingElement.findMany({
      where: { isActive: true },
      select: {
        id: true,
        courseUnitId: true,
        code: true,
        title: true,
        shortTitle: true,
        order: true,
      },
      orderBy: [{ order: 'asc' }, { title: 'asc' }],
    }),
  ]);

  return {
    grades: [...grades]
      .sort((left, right) => {
        const leftOrder = gradeOrder.get(left.shortDescription) ?? Number.MAX_SAFE_INTEGER;
        const rightOrder = gradeOrder.get(right.shortDescription) ?? Number.MAX_SAFE_INTEGER;

        if (leftOrder !== rightOrder) {
          return leftOrder - rightOrder;
        }

        return left.shortDescription.localeCompare(right.shortDescription, 'fr', {
          sensitivity: 'base',
        });
      })
      .map((grade) => ({
        value: grade.id,
        label: `${grade.shortDescription} · ${grade.longDescription}`,
        longLabel: grade.longDescription,
        shortLabel: grade.shortDescription,
      })),
    teachings: teachings.map((teaching) => ({
      value: teaching.id,
      label: teaching.shortDescription?.trim() || teaching.longDescription,
      gradeId: teaching.gradeId,
      subjectLabel:
        teaching.subject.shortDescription?.trim() || teaching.subject.longDescription,
    })),
    healthInstitutions: healthInstitutions.map((institution) => ({
      value: institution.id,
      label: institution.shortName?.trim() || institution.name,
    })),
    healthProgramVersions: healthProgramVersions.map((version) => ({
        value: version.id,
        label: `${version.program.code} · ${version.academicYear} · ${version.studyLevel}`,
        institutionId: version.institutionId,
        academicYear: version.academicYear,
        studyLevel: version.studyLevel,
        isCurrent: version.isCurrent,
      })),
    healthPathways: healthPathways.map((pathway) => ({
      value: pathway.id,
      label: simplifyHealthPathwayLabel(pathway.name),
      programVersionId: pathway.programVersionId,
    })),
    healthCourseUnits: healthCourseUnits.map((courseUnit) => ({
      value: courseUnit.id,
      label: formatCodeTitle(
        courseUnit.code,
        courseUnit.shortTitle?.trim() || courseUnit.title
      ),
      programVersionId: courseUnit.programVersionId,
      pathwayId: courseUnit.pathwayId ?? undefined,
      isCommonToAllPathways: courseUnit.isCommonToAllPathways,
    })),
    healthTeachingElements: healthTeachingElements.map((teachingElement) => ({
      value: teachingElement.id,
      label: formatCodeTitle(
        teachingElement.code,
        teachingElement.shortTitle?.trim() || teachingElement.title
      ),
      courseUnitId: teachingElement.courseUnitId,
    })),
  };
}

export async function fetchUserPedagogicalProfileSummary(
  userId: string
): Promise<UserPedagogicalProfileSummary> {
  const profile = await fetchUserPedagogicalProfileRecord(userId);

  if (!profile?.audience) {
    return buildEmptySummary();
  }

  const [
    secondaryGrade,
    secondaryTeachings,
    healthInstitution,
    healthProgramVersion,
    healthPathway,
    healthCourseUnit,
    healthTeachingElement,
  ] = await Promise.all([
    profile.secondaryGradeId
      ? prisma.grade.findUnique({
          where: { id: profile.secondaryGradeId },
          select: {
            shortDescription: true,
            longDescription: true,
          },
        })
      : null,
    profile.secondaryTeachingIds.length > 0
      ? prisma.teaching.findMany({
          where: { id: { in: profile.secondaryTeachingIds } },
          select: {
            id: true,
            longDescription: true,
            shortDescription: true,
          },
        })
      : [],
    profile.healthInstitutionId
      ? prisma.healthInstitution.findUnique({
          where: { id: profile.healthInstitutionId },
          select: {
            name: true,
            shortName: true,
          },
        })
      : null,
    profile.healthProgramVersionId
      ? prisma.healthProgramVersion.findUnique({
          where: { id: profile.healthProgramVersionId },
          select: {
            academicYear: true,
            studyLevel: true,
            label: true,
            program: {
              select: {
                code: true,
              },
            },
          },
        })
      : null,
    profile.healthPathwayId
      ? prisma.healthPathway.findUnique({
          where: { id: profile.healthPathwayId },
          select: {
            name: true,
            campus: true,
          },
        })
      : null,
    profile.healthCourseUnitId
      ? prisma.healthCourseUnit.findUnique({
          where: { id: profile.healthCourseUnitId },
          select: {
            code: true,
            title: true,
            shortTitle: true,
          },
        })
      : null,
    profile.healthTeachingElementId
      ? prisma.healthTeachingElement.findUnique({
          where: { id: profile.healthTeachingElementId },
          select: {
            code: true,
            title: true,
            shortTitle: true,
          },
        })
      : null,
  ]);

  if (profile.audience === 'SECONDARY') {
    const secondaryGradeLabel = secondaryGrade
      ? `${secondaryGrade.shortDescription} · ${secondaryGrade.longDescription}`
      : null;
    const secondaryTeachingLabels = secondaryTeachings
      .map((teaching) => teaching.shortDescription?.trim() || teaching.longDescription)
      .sort((left, right) => left.localeCompare(right, 'fr', { sensitivity: 'base' }));
    const focusBadges = [
      secondaryGrade?.shortDescription ?? secondaryGradeLabel,
      ...secondaryTeachingLabels,
    ].filter((value): value is string => Boolean(value));

    return {
      isConfigured: Boolean(secondaryGradeLabel),
      audience: 'SECONDARY',
      audienceLabel: userPedagogicalAudienceLabels.SECONDARY,
      title: secondaryGradeLabel
        ? `Profil secondaire · ${secondaryGradeLabel}`
        : 'Profil secondaire à compléter',
      description: secondaryTeachingLabels.length > 0
        ? `Les contenus recommandés pourront cibler ${secondaryTeachingLabels.join(', ')} pour ce niveau.`
        : 'Les contenus recommandés seront orientés selon le niveau scolaire déclaré.',
      focusBadges,
      primaryHref: '/diplomes',
      primaryLabel: 'Voir les annales',
      secondaryGradeLabel,
      secondaryTeachingLabels,
      healthInstitutionLabel: null,
      healthProgramVersionLabel: null,
      healthPathwayLabel: null,
      healthCourseUnitLabel: null,
      healthTeachingElementLabel: null,
    };
  }

  const healthInstitutionLabel =
    healthInstitution?.shortName?.trim() || healthInstitution?.name || null;
  const healthProgramVersionLabel = healthProgramVersion
    ? `${healthProgramVersion.program.code} · ${healthProgramVersion.academicYear} · ${healthProgramVersion.studyLevel}`
    : null;
  const healthPathwayLabel = healthPathway
    ? healthPathway.campus
      ? `${healthPathway.name} · ${healthPathway.campus}`
      : healthPathway.name
    : null;
  const healthCourseUnitLabel = healthCourseUnit
    ? formatCodeTitle(
        healthCourseUnit.code,
        healthCourseUnit.shortTitle?.trim() || healthCourseUnit.title
      )
    : null;
  const healthTeachingElementLabel = healthTeachingElement
    ? formatCodeTitle(
        healthTeachingElement.code,
        healthTeachingElement.shortTitle?.trim() || healthTeachingElement.title
      )
    : null;
  const focusBadges = [
    healthInstitutionLabel,
    healthProgramVersionLabel,
    healthPathwayLabel,
    healthCourseUnitLabel,
    healthTeachingElementLabel,
  ].filter((value): value is string => Boolean(value));

  return {
    isConfigured: Boolean(healthInstitutionLabel),
    audience: 'HEALTH',
    audienceLabel: userPedagogicalAudienceLabels.HEALTH,
    title: healthInstitutionLabel
      ? `Profil santé · ${healthInstitutionLabel}`
      : 'Profil santé à compléter',
    description:
      'Le rendu santé peut maintenant se personnaliser selon la faculté, la maquette et le parcours déclarés.',
    focusBadges,
    primaryHref: '/sante',
    primaryLabel: 'Voir l’espace santé',
    secondaryGradeLabel: null,
    secondaryTeachingLabels: [],
    healthInstitutionLabel,
    healthProgramVersionLabel,
    healthPathwayLabel,
    healthCourseUnitLabel,
    healthTeachingElementLabel,
  };
}

export async function fetchUserPedagogicalProfileContext(
  userId: string
): Promise<UserPedagogicalProfileContext> {
  const [profile, summary, options] = await Promise.all([
    fetchUserPedagogicalProfileRecord(userId),
    fetchUserPedagogicalProfileSummary(userId),
    fetchUserPedagogicalProfileOptions(),
  ]);

  return {
    profile: toFormData(profile),
    summary,
    options,
  };
}
