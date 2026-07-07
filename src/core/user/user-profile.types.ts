import type { Prisma } from '@prisma/client';
import type { Option } from '@/types/option';
import type { UserPedagogicalAudienceValue } from './user-profile.schemas';

export const userPedagogicalProfileSelect = {
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
} satisfies Prisma.UserPedagogicalProfileSelect;

export type UserPedagogicalProfileRecord = Prisma.UserPedagogicalProfileGetPayload<{
  select: typeof userPedagogicalProfileSelect;
}>;

export type UserPedagogicalProfileFormData = {
  audience: UserPedagogicalAudienceValue | '';
  secondaryGradeId: string;
  secondaryTeachingIds: string[];
  healthInstitutionId: string;
  healthProgramVersionId: string;
  healthPathwayId: string;
  healthCourseUnitId: string;
  healthTeachingElementId: string;
};

export type UserPedagogicalProfileSummary = {
  isConfigured: boolean;
  audience: UserPedagogicalAudienceValue | null;
  audienceLabel: string | null;
  title: string;
  description: string;
  focusBadges: string[];
  primaryHref: string;
  primaryLabel: string;
  secondaryGradeLabel: string | null;
  secondaryTeachingLabels: string[];
  healthInstitutionLabel: string | null;
  healthProgramVersionLabel: string | null;
  healthPathwayLabel: string | null;
  healthCourseUnitLabel: string | null;
  healthTeachingElementLabel: string | null;
};

export type UserPedagogicalGradeOption = Option & {
  longLabel: string;
  shortLabel: string;
};

export type UserPedagogicalTeachingOption = Option & {
  gradeId: string;
  subjectLabel: string;
};

export type UserPedagogicalHealthInstitutionOption = Option;

export type UserPedagogicalHealthProgramVersionOption = Option & {
  institutionId: string;
  academicYear: string;
  studyLevel: string;
  isCurrent: boolean;
};

export type UserPedagogicalHealthPathwayOption = Option & {
  programVersionId: string;
};

export type UserPedagogicalHealthCourseUnitOption = Option & {
  programVersionId: string;
  pathwayId?: string;
  isCommonToAllPathways: boolean;
};

export type UserPedagogicalHealthTeachingElementOption = Option & {
  courseUnitId: string;
};

export type UserPedagogicalProfileOptions = {
  grades: UserPedagogicalGradeOption[];
  teachings: UserPedagogicalTeachingOption[];
  healthInstitutions: UserPedagogicalHealthInstitutionOption[];
  healthProgramVersions: UserPedagogicalHealthProgramVersionOption[];
  healthPathways: UserPedagogicalHealthPathwayOption[];
  healthCourseUnits: UserPedagogicalHealthCourseUnitOption[];
  healthTeachingElements: UserPedagogicalHealthTeachingElementOption[];
};

export type UserPedagogicalProfileContext = {
  profile: UserPedagogicalProfileFormData;
  summary: UserPedagogicalProfileSummary;
  options: UserPedagogicalProfileOptions;
};
