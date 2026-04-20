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

export const createChapterSchema = z.object({
    title: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(255, { message: "Ne peut pas dépasser 255 caractères" }),
    slug: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(160, { message: "Ne peut pas dépasser 160 caractères" })
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
            message: "Utilise uniquement des lettres minuscules, chiffres et tirets",
        }),
    level: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(80, { message: "Ne peut pas dépasser 80 caractères" }),
    order: z.number({
        required_error: "Champ requis",
        invalid_type_error: "Doit être un nombre",
    })
        .int({ message: "Doit être un entier" })
        .min(1, { message: "Doit être supérieur ou égal à 1" })
        .max(1000, { message: "Ne peut pas dépasser 1000" }),
    subjectId: z.string({
        required_error: "Champ requis",
    }).min(1, { message: "Champ requis" }),
    domainIds: z.array(z.string()).default([]),
    isActive: z.boolean().default(true),
    isPublished: z.boolean().default(false),
}).superRefine((values, ctx) => {
    if (!values.isActive && values.isPublished) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["isPublished"],
            message: "Un chapitre inactif ne peut pas être publié",
        });
    }
});

export const createQuizQuestionSchema = z.object({
    difficulty: z.enum(["EASY", "MEDIUM", "HARD"]),
    question: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(4000, { message: "Ne peut pas dépasser 4000 caractères" }),
    choices: z.array(
        z.string({
            required_error: "Champ requis",
            invalid_type_error: "Doit être une chaîne de caractère",
        })
            .trim()
            .min(1, { message: "Champ requis" })
            .max(500, { message: "Ne peut pas dépasser 500 caractères" })
    )
        .length(4, { message: "Quatre choix sont requis" }),
    correctChoiceIndex: z.number({
        required_error: "Champ requis",
        invalid_type_error: "Doit être un nombre",
    })
        .int({ message: "Doit être un entier" })
        .min(0, { message: "Réponse correcte invalide" })
        .max(3, { message: "Réponse correcte invalide" }),
    explanation: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(4000, { message: "Ne peut pas dépasser 4000 caractères" }),
    order: z.number({
        required_error: "Champ requis",
        invalid_type_error: "Doit être un nombre",
    })
        .int({ message: "Doit être un entier" })
        .min(1, { message: "Doit être supérieur ou égal à 1" })
        .max(1000, { message: "Ne peut pas dépasser 1000" }),
    isPublished: z.boolean().default(false),
});

const trainingQuizSlugSchema = z.string({
    required_error: "Champ requis",
    invalid_type_error: "Doit être une chaîne de caractère",
})
    .trim()
    .min(1, { message: "Champ requis" })
    .max(160, { message: "Ne peut pas dépasser 160 caractères" })
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: "Utilise uniquement des lettres minuscules, chiffres et tirets",
    });

const trainingQuizItemOrderSchema = z.number({
    required_error: "Champ requis",
    invalid_type_error: "Doit être un nombre",
})
    .int({ message: "Doit être un entier" })
    .min(1, { message: "Doit être supérieur ou égal à 1" })
    .max(1000, { message: "Ne peut pas dépasser 1000" });

const trainingQuizGroupItemSchema = z.object({
    type: z.literal("GROUP"),
    title: z.string({
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .max(255, { message: "Ne peut pas dépasser 255 caractères" })
        .optional()
        .or(z.literal("")),
    sharedStatement: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(4000, { message: "Ne peut pas dépasser 4000 caractères" }),
    order: trainingQuizItemOrderSchema,
    questionIds: z.array(z.string().trim().min(1, { message: "Question requise" }))
        .min(1, { message: "Sélectionne au moins une question dans ce bloc" }),
});

const trainingQuizQuestionItemSchema = z.object({
    type: z.literal("QUESTION"),
    order: trainingQuizItemOrderSchema,
    questionId: z.string({
        required_error: "Question requise",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Question requise" }),
});

const trainingQuizItemSchema = z.discriminatedUnion("type", [
    trainingQuizQuestionItemSchema,
    trainingQuizGroupItemSchema,
]);

const trainingQuizSchema = z.object({
    title: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(255, { message: "Ne peut pas dépasser 255 caractères" }),
    slug: trainingQuizSlugSchema,
    description: z.string({
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .max(800, { message: "Ne peut pas dépasser 800 caractères" })
        .optional()
        .or(z.literal("")),
    order: z.number({
        required_error: "Champ requis",
        invalid_type_error: "Doit être un nombre",
    })
        .int({ message: "Doit être un entier" })
        .min(1, { message: "Doit être supérieur ou égal à 1" })
        .max(1000, { message: "Ne peut pas dépasser 1000" }),
    isPublished: z.boolean().default(true),
    quizItems: z.array(trainingQuizItemSchema).default([]),
}).superRefine((quiz, ctx) => {
    const seenQuestionIds = new Set<string>();
    const seenItemOrders = new Set<number>();

    quiz.quizItems.forEach((item, index) => {
        if (seenItemOrders.has(item.order)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["quizItems", index, "order"],
                message: "Deux items d'un même quiz ne peuvent pas partager le même ordre",
            });
        } else {
            seenItemOrders.add(item.order);
        }

        if (item.type === "QUESTION") {
            if (seenQuestionIds.has(item.questionId)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    path: ["quizItems", index, "questionId"],
                    message: "Une question ne peut apparaître qu'une seule fois dans un quiz",
                });
                return;
            }

            seenQuestionIds.add(item.questionId);
        } else {
            const seenQuestionIdsInGroup = new Set<string>();

            item.questionIds.forEach((questionId: string, questionIndex: number) => {
                if (seenQuestionIdsInGroup.has(questionId)) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        path: ["quizItems", index, "questionIds", questionIndex],
                        message: "Une question ne peut apparaître qu'une seule fois dans un même bloc",
                    });
                    return;
                }

                seenQuestionIdsInGroup.add(questionId);

                if (seenQuestionIds.has(questionId)) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        path: ["quizItems", index, "questionIds", questionIndex],
                        message: "Une question ne peut apparaître qu'une seule fois dans un quiz",
                    });
                    return;
                }

                seenQuestionIds.add(questionId);
            });
        }
    });

    if (seenQuestionIds.size === 0) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["quizItems"],
            message: "Ajoute au moins une question seule ou un bloc lié",
        });
    }
});

const chapterSectionSchema = z.object({
    title: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(255, { message: "Ne peut pas dépasser 255 caractères" }),
    description: z.string({
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .max(800, { message: "Ne peut pas dépasser 800 caractères" })
        .optional()
        .or(z.literal("")),
    kind: z.enum(["THEME", "SYNTHESIS"]),
    themeIds: z.array(z.string().trim().min(1, { message: "Thème invalide" })).default([]),
    order: z.number({
        required_error: "Champ requis",
        invalid_type_error: "Doit être un nombre",
    })
        .int({ message: "Doit être un entier" })
        .min(1, { message: "Doit être supérieur ou égal à 1" })
        .max(1000, { message: "Ne peut pas dépasser 1000" }),
    isPublished: z.boolean().default(true),
    quizzes: z.array(trainingQuizSchema),
}).superRefine((section, ctx) => {
    const seenOrders = new Set<number>();

    section.quizzes.forEach((quiz, index) => {
        if (seenOrders.has(quiz.order)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["quizzes", index, "order"],
                message: "Deux quiz d'une même section ne peuvent pas partager le même ordre",
            });
            return;
        }

        seenOrders.add(quiz.order);
    });
});

export const updateTrainingStructureSchema = z.object({
    sections: z.array(chapterSectionSchema).default([]),
}).superRefine((values, ctx) => {
    const seenSectionOrders = new Set<number>();
    const seenQuizSlugs = new Set<string>();

    values.sections.forEach((section, sectionIndex) => {
        if (seenSectionOrders.has(section.order)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["sections", sectionIndex, "order"],
                message: "Deux sections d'un chapitre ne peuvent pas partager le même ordre",
            });
        } else {
            seenSectionOrders.add(section.order);
        }

        section.quizzes.forEach((quiz, quizIndex) => {
            if (seenQuizSlugs.has(quiz.slug)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    path: ["sections", sectionIndex, "quizzes", quizIndex, "slug"],
                    message: "Chaque quiz du chapitre doit avoir un slug unique",
                });
                return;
            }

            seenQuizSlugs.add(quiz.slug);
        });
    });
});

const optionSchema = z.object({
    label: z.string(),
    value: z.string()
});

export const createThemeSchema = z.object({
    title: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(80, { message: "Ne peut pas dépasser 80 caractères" }),
    shortTitle: z
        .string({
            invalid_type_error: "Doit être une chaîne de caractère",
        })
        .trim()
        .max(40, { message: "Ne peut pas dépasser 40 caractères" })
        .optional()
        .or(z.literal("")),
    longDescription: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(600, { message: "Ne peut pas dépasser 600 caractères" }),
    shortDescription: z.string({
        required_error: "Champ requis",
        invalid_type_error: "Doit être une chaîne de caractère",
    })
        .trim()
        .min(1, { message: "Champ requis" })
        .max(140, { message: "Ne peut pas dépasser 140 caractères" }),
    description: z
        .string({
            invalid_type_error: "Doit être une chaîne de caractère",
        })
        .trim()
        .max(800, { message: "Ne peut pas dépasser 800 caractères" })
        .optional()
        .or(z.literal("")),
    domainId: z.string({
        required_error: "Champ requis",
    })
        .min(1, { message: "Champ requis" })
}).superRefine((values, ctx) => {
    const shortTitle = values.shortTitle?.trim();
    if (shortTitle && shortTitle.length >= values.title.trim().length) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["shortTitle"],
            message: "Doit être plus court que le titre",
        });
    }
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
