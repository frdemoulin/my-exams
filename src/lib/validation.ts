import { z } from "zod";

// schémas de validation des formulaires avec zod
export const createExaminationCenterSchema = z.object({
    description: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(255, { message: "Ne peut pas dépasser 255 caractères" }),
});

export const createDiplomaSchema = z.object({
    longDescription: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(255, { message: "Ne peut pas dépasser 255 caractères" }),
    shortDescription: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(100, { message: "Ne peut pas dépasser 100 caractères" }),
});

export const createDivisionSchema = z.object({
    longDescription: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(255, { message: "Ne peut pas dépasser 255 caractères" }),
    shortDescription: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(100, { message: "Ne peut pas dépasser 100 caractères" }),
});

export const createGradeSchema = z.object({
    longDescription: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(255, { message: "Ne peut pas dépasser 255 caractères" }),
    shortDescription: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(100, { message: "Ne peut pas dépasser 100 caractères" }),
});

export const createSubjectSchema = z.object({
    longDescription: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(255, { message: "Ne peut pas dépasser 255 caractères" }),
    shortDescription: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(100, { message: "Ne peut pas dépasser 100 caractères" }),
});

const optionSchema = z.object({
    label: z.string(),
    value: z.string()
});

export const createThemeSchema = z.object({
    longDescription: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(255, { message: "Ne peut pas dépasser 255 caractères" }),
    shortDescription: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(100, { message: "Ne peut pas dépasser 100 caractères" }),
    chapterId: z.string({
        required_error: "Champ requis",
    })
        .min(1, { message: "Champ requis" })
});

export const createExamPaperSchema = z.object({
    label: z.string({ required_error: "Champ requis" }).trim().min(1, { message: "Le libellé est requis" }).max(255, { message: "Ne peut pas dépasser 255 caractères" }),
    sessionYear: z.number({ required_error: "Champ requis" }).int().min(1900).max(2100),
    diplomaId: z.string({
        required_error: "Champ requis",
    }).min(1, { message: "Champ requis" }),
    divisionId: z.string({
        required_error: "Champ requis",
    }).min(1, { message: "Champ requis" }),
    gradeId: z.string({
        required_error: "Champ requis",
    }).min(1, { message: "Champ requis" }),
    teachingId: z.string({
        required_error: "Champ requis",
    }).min(1, { message: "Champ requis" }),
    curriculumId: z.string({
        required_error: "Champ requis",
    }).min(1, { message: "Champ requis" }),
    examinationCenterIds: z.array(z.string()).min(1, { message: "Au moins un centre d'examen est requis" }),
    chapterIds: z.array(z.string()).optional(),
    themeIds: z.array(z.string()).optional(),
    subjectUrl: z.string().url({ message: "URL invalide" }).optional().or(z.literal('')),
    correctionUrl: z.string().url({ message: "URL invalide" }).optional().or(z.literal('')),
});