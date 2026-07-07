import { z } from 'zod';

export const userPedagogicalAudienceValues = ['SECONDARY', 'HEALTH'] as const;

export const UserPedagogicalAudienceSchema = z.enum(userPedagogicalAudienceValues, {
  required_error: 'Choisis un profil pédagogique.',
  invalid_type_error: 'Choisis un profil pédagogique.',
});

export type UserPedagogicalAudienceValue = z.infer<
  typeof UserPedagogicalAudienceSchema
>;

export const userPedagogicalAudienceLabels: Record<
  UserPedagogicalAudienceValue,
  string
> = {
  SECONDARY: 'Secondaire',
  HEALTH: 'Santé',
};

const objectIdPattern = /^[a-f0-9]{24}$/i;

const optionalObjectIdSchema = z
  .string()
  .trim()
  .optional()
  .or(z.literal(''))
  .transform((value) => {
    const normalizedValue = value?.trim();
    return normalizedValue ? normalizedValue : undefined;
  })
  .refine((value) => value === undefined || objectIdPattern.test(value), {
    message: 'Sélection invalide',
  });

const objectIdArraySchema = z
  .array(
    z.string().trim().regex(objectIdPattern, {
      message: 'Sélection invalide',
    })
  )
  .default([]);

export const saveUserPedagogicalProfileSchema = z
  .object({
    audience: UserPedagogicalAudienceSchema,
    secondaryGradeId: optionalObjectIdSchema,
    secondaryTeachingIds: objectIdArraySchema,
    healthInstitutionId: optionalObjectIdSchema,
    healthProgramVersionId: optionalObjectIdSchema,
    healthPathwayId: optionalObjectIdSchema,
    healthCourseUnitId: optionalObjectIdSchema,
    healthTeachingElementId: optionalObjectIdSchema,
  })
  .superRefine((values, ctx) => {
    if (values.audience === 'SECONDARY') {
      if (!values.secondaryGradeId) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['secondaryGradeId'],
          message: 'Choisis un niveau scolaire.',
        });
      }

      return;
    }

    if (!values.healthInstitutionId) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['healthInstitutionId'],
        message: 'Choisis une faculté de référence.',
      });
    }

    if (values.healthProgramVersionId && !values.healthInstitutionId) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['healthProgramVersionId'],
        message: 'Choisis d’abord une faculté.',
      });
    }

    if (values.healthPathwayId && !values.healthProgramVersionId) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['healthPathwayId'],
        message: 'Choisis d’abord une maquette.',
      });
    }

    if (values.healthCourseUnitId && !values.healthProgramVersionId) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['healthCourseUnitId'],
        message: 'Choisis d’abord une maquette.',
      });
    }

    if (values.healthTeachingElementId && !values.healthCourseUnitId) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['healthTeachingElementId'],
        message: 'Choisis d’abord une UE.',
      });
    }
  });
