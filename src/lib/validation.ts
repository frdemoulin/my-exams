import { z } from "zod";

// schémas de validation des formulaires avec zod
const urlOrPathSchema = z.string().trim().refine((val) => {
    if (!val) return true;
    try {
        new URL(val);
        return true;
    } catch (_e) {
        return val.startsWith('/');
    }
}, { message: "URL invalide" });

export const createExaminationCenterSchema = z.object({
    description: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(255, { message: "Ne peut pas dépasser 255 caractères" }),
    isActive: z.boolean().default(true),
});

export const createCorrectionSourceSchema = z.object({
    label: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(255, { message: "Ne peut pas dépasser 255 caractères" }),
    isActive: z.boolean().default(true),
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
    isActive: z.boolean().default(true),
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
    isActive: z.boolean().default(true),
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
    isActive: z.boolean().default(true),
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
    description: z
        .string({
            invalid_type_error: "Doit être une chaîne de caractère",
        })
        .trim()
        .max(1000, { message: "Ne peut pas dépasser 1000 caractères" })
        .optional()
        .or(z.literal("")),
    domainId: z.string({
        required_error: "Champ requis",
    })
        .min(1, { message: "Champ requis" })
});

export const createDomainSchema = z.object({
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
    subjectId: z.string({
        required_error: "Champ requis",
    })
        .min(1, { message: "Champ requis" }),
    order: z.number().int().min(1).max(1000).optional(),
    discipline: z.enum(["PHYSIQUE", "CHIMIE", "TRANSVERSAL"]).optional(),
    isActive: z.boolean().default(true),
});

export const createExamPaperSchema = z.object({
    label: z.string({ required_error: "Champ requis" }).trim().min(1, { message: "Le libellé est requis" }).max(255, { message: "Ne peut pas dépasser 255 caractères" }),
    sessionYear: z.number({ required_error: "Champ requis" }).int().min(1900).max(2100),
    sessionDay: z.string().trim().max(50, { message: "Ne peut pas dépasser 50 caractères" }).optional().or(z.literal('')),
    source: z
        .string({ required_error: "Champ requis" })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(255, { message: "Ne peut pas dépasser 255 caractères" })
        .default("Officiel"),
    sourceUrl: z.string().url({ message: "URL invalide" }).optional().or(z.literal('')),
    examDay: z.number().int().min(1, { message: "Jour invalide" }).max(31, { message: "Jour invalide" }).optional(),
    examMonth: z.number({ required_error: "Mois requis" }).int().min(1, { message: "Mois invalide" }).max(12, { message: "Mois invalide" }),
    examYear: z.number({ required_error: "Année requise" }).int().min(1900, { message: "Année invalide" }).max(2100, { message: "Année invalide" }),
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
    domainIds: z.array(z.string()).optional(),
    themeIds: z.array(z.string()).optional(),
    subjectUrl: urlOrPathSchema.optional(),
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
