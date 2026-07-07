import { z } from "zod";
import {
    quizAnswerFormatLabels,
    quizAnswerFormatValues,
} from "@/core/quiz/quiz-answer-format";

const requiredText = (label = "Champ requis") =>
    z.string({ required_error: label }).trim().min(1, label).max(255);
const optionalText = z.string().trim().max(4000).optional().or(z.literal(""));
const optionalShortText = z.string().trim().max(255).optional().or(z.literal(""));
const slug = z
    .string()
    .trim()
    .min(1, "Champ requis")
    .max(160)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Utilise uniquement des lettres minuscules, chiffres et tirets");
const optionalUrl = z.string().trim().url("URL invalide").optional().or(z.literal(""));
const optionalPositiveInt = z.number().int().min(1).optional();
const order = z.number().int().min(0).default(0);
const activeAndPublished = {
    isActive: z.boolean().default(true),
    isPublished: z.boolean().default(false),
};

export const healthCourseUnitCoverageStatusValues = [
    "STRUCTURE_ONLY",
    "THEMES_MAPPED",
    "QUESTIONS_AVAILABLE",
    "READY",
] as const;
export const HealthCourseUnitCoverageStatusSchema = z.enum(healthCourseUnitCoverageStatusValues);
export type HealthCourseUnitCoverageStatus = z.infer<typeof HealthCourseUnitCoverageStatusSchema>;
export const healthCourseUnitCoverageStatusLabels: Record<HealthCourseUnitCoverageStatus, string> = {
    STRUCTURE_ONLY: "Structure seule",
    THEMES_MAPPED: "Thèmes reliés",
    QUESTIONS_AVAILABLE: "QCM disponibles",
    READY: "Prête à l'emploi",
};

export const HealthQuizAnswerFormatSchema = z.enum(quizAnswerFormatValues);
export type HealthQuizAnswerFormat = z.infer<typeof HealthQuizAnswerFormatSchema>;
export const healthQuizAnswerFormatLabels: Record<HealthQuizAnswerFormat, string> = {
    SINGLE: quizAnswerFormatLabels.SINGLE,
    MULTIPLE: quizAnswerFormatLabels.MULTIPLE,
};

export const HealthInstitutionSchema = z.object({
    name: requiredText(),
    shortName: optionalShortText,
    slug,
    uaiCode: optionalShortText,
    city: optionalShortText,
    academy: optionalShortText,
    region: optionalShortText,
    department: optionalShortText,
    websiteUrl: optionalUrl,
    ...activeAndPublished,
});

export const HealthProgramSchema = z.object({
    type: z.enum(["PASS", "LAS", "LAS_SPS", "HEALTH_LICENSE_2027", "OTHER"]),
    code: requiredText().max(80),
    label: requiredText(),
    description: optionalText,
    ...activeAndPublished,
});

export const HealthProgramVersionSchema = z.object({
    institutionId: requiredText(),
    programId: requiredText(),
    label: requiredText(),
    slug,
    academicYear: z
        .string()
        .trim()
        .regex(/^\d{4}-\d{4}$/, "Format attendu : YYYY-YYYY")
        .refine((value) => Number(value.slice(5)) === Number(value.slice(0, 4)) + 1, {
            message: "L'année de fin doit suivre l'année de début",
        }),
    studyLevel: z.enum(["L1", "L2", "L3", "OTHER"]),
    sourceUrl: optionalUrl,
    sourceLabel: optionalShortText,
    sourceCheckedAt: z.date().optional(),
    notes: optionalText,
    isCurrent: z.boolean().default(false),
    ...activeAndPublished,
});

export const HealthPathwaySchema = z.object({
    programVersionId: requiredText(),
    name: requiredText(),
    slug,
    campus: optionalShortText,
    parcoursupCode: optionalShortText,
    sourceUrl: optionalUrl,
    description: optionalText,
    order,
    isDefault: z.boolean().default(false),
    ...activeAndPublished,
});

export const HealthBlockSchema = z.object({
    programVersionId: requiredText(),
    pathwayId: optionalShortText,
    type: z.enum(["HEALTH", "DISCIPLINARY", "TRANSVERSAL", "SPECIALTY", "OTHER"]),
    title: requiredText(),
    slug,
    description: optionalText,
    ects: optionalPositiveInt,
    order,
    ...activeAndPublished,
});

export const HealthCourseUnitSchema = z.object({
    programVersionId: requiredText(),
    pathwayId: optionalShortText,
    blockId: requiredText(),
    code: optionalShortText,
    title: requiredText(),
    shortTitle: optionalShortText,
    slug,
    description: optionalText,
    semester: z.number().int().min(1).optional(),
    ects: optionalPositiveInt,
    order,
    isCommonToAllPathways: z.boolean().default(false),
    isHealthAccessRelevant: z.boolean().default(true),
    coverageStatus: HealthCourseUnitCoverageStatusSchema.default("STRUCTURE_ONLY"),
    sourceUrl: optionalUrl,
    sourceLabel: optionalShortText,
    sourceCheckedAt: z.date().optional(),
    themeIds: z.array(z.string()).default([]),
    ...activeAndPublished,
});

export const HealthTeachingElementSchema = z.object({
    courseUnitId: requiredText(),
    code: optionalShortText,
    title: requiredText(),
    shortTitle: optionalShortText,
    slug,
    description: optionalText,
    order,
    coverageStatus: HealthCourseUnitCoverageStatusSchema.default("STRUCTURE_ONLY"),
    quizAnswerFormatDefault: HealthQuizAnswerFormatSchema.default("SINGLE"),
    sourceUrl: optionalUrl,
    sourceLabel: optionalShortText,
    sourceCheckedAt: z.date().optional(),
    themeIds: z.array(z.string()).default([]),
    ...activeAndPublished,
});

export type HealthEntity =
    | "institutions"
    | "programs"
    | "program-versions"
    | "pathways"
    | "blocks"
    | "course-units"
    | "teaching-elements";

export const HEALTH_ENTITIES: HealthEntity[] = [
    "institutions",
    "programs",
    "program-versions",
    "pathways",
    "blocks",
    "course-units",
    "teaching-elements",
];

export const isHealthEntity = (value: string): value is HealthEntity =>
    HEALTH_ENTITIES.includes(value as HealthEntity);

export const healthEntityLabels: Record<
    HealthEntity,
    {
        singular: string;
        plural: string;
        listTitle: string;
        indefinite: string;
        definite: string;
        demonstrative: string;
    }
> = {
    institutions: {
        singular: "établissement",
        plural: "Établissements",
        listTitle: "Liste des établissements",
        indefinite: "un établissement",
        definite: "l'établissement",
        demonstrative: "cet établissement",
    },
    programs: {
        singular: "programme",
        plural: "Programmes",
        listTitle: "Liste des programmes",
        indefinite: "un programme",
        definite: "le programme",
        demonstrative: "ce programme",
    },
    "program-versions": {
        singular: "maquette",
        plural: "Maquettes",
        listTitle: "Liste des maquettes",
        indefinite: "une maquette",
        definite: "la maquette",
        demonstrative: "cette maquette",
    },
    pathways: {
        singular: "parcours",
        plural: "Parcours",
        listTitle: "Liste des parcours",
        indefinite: "un parcours",
        definite: "le parcours",
        demonstrative: "ce parcours",
    },
    blocks: {
        singular: "bloc",
        plural: "Blocs",
        listTitle: "Liste des blocs",
        indefinite: "un bloc",
        definite: "le bloc",
        demonstrative: "ce bloc",
    },
    "course-units": {
        singular: "UE",
        plural: "UE",
        listTitle: "Liste des UE",
        indefinite: "une UE",
        definite: "l'UE",
        demonstrative: "cette UE",
    },
    "teaching-elements": {
        singular: "élément constitutif",
        plural: "Éléments constitutifs",
        listTitle: "Liste des éléments constitutifs",
        indefinite: "un élément constitutif",
        definite: "l'élément constitutif",
        demonstrative: "cet élément constitutif",
    },
};
