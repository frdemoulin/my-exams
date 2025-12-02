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
    sessionDay: z.string().trim().max(50, { message: "Ne peut pas dépasser 50 caractères" }).optional().or(z.literal('')),
    examDay: z.number().int().min(1, { message: "Jour invalide" }).max(31, { message: "Jour invalide" }).optional(),
    examMonth: z.number().int().min(1, { message: "Mois invalide" }).max(12, { message: "Mois invalide" }).optional(),
    examYear: z.number().int().min(1900, { message: "Année invalide" }).max(2100, { message: "Année invalide" }).optional(),
    diplomaId: z.string({
        required_error: "Champ requis",
    }).min(1, { message: "Champ requis" }),
    divisionId: z.string().optional().or(z.literal('')),
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
    // Champs d'enrichissement automatique (optionnels)
    estimatedDuration: z.number().int().min(1).max(600).optional(), // 1-600 minutes
    estimatedDifficulty: z.number().int().min(1).max(5).optional(), // 1-5
    summary: z.string().max(1000).optional(),
    enrichmentStatus: z.enum(["pending", "completed", "failed"]).default("pending"),
});

// Schema pour créer une correction
export const createCorrectionSchema = z.object({
    examPaperId: z.string().min(1, "L'ID du sujet est requis"),
    source: z.string().min(1, "La source est requise").max(255),
    url: z.string().url("L'URL doit être valide"),
    type: z.enum(["pdf", "video", "html"]).default("pdf"),
    quality: z.number().int().min(1).max(5).optional(),
    author: z.string().max(255).optional(),
});
