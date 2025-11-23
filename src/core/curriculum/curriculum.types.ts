import { z } from "zod";
import type { Curriculum } from "@prisma/client";

// Zod schema for creating a curriculum
export const createCurriculumSchema = z.object({
    name: z.string().min(3, "Le nom doit contenir au moins 3 caractères"),
    description: z.string().optional(),
    startYear: z.number().int().min(2000).max(2100),
    endYear: z.number().int().min(2000).max(2100).optional(),
    startMonth: z.number().int().min(1).max(12).optional(),
    endMonth: z.number().int().min(1).max(12).optional(),
    teachingIds: z.array(z.string()).min(1, "Sélectionnez au moins un enseignement"),
    isActive: z.boolean().default(true),
}).refine((data) => {
    // If endYear is provided, it should be >= startYear
    if (data.endYear !== undefined && data.endYear < data.startYear) {
        return false;
    }
    return true;
}, {
    message: "L'année de fin doit être supérieure ou égale à l'année de début",
    path: ["endYear"],
});

export type CreateCurriculumInput = z.infer<typeof createCurriculumSchema>;

export type CreateCurriculumErrors = {
    name?: string[];
    description?: string[];
    startYear?: string[];
    endYear?: string[];
    startMonth?: string[];
    endMonth?: string[];
    teachingIds?: string[];
    isActive?: string[];
    _form?: string[];
};

// Type for Curriculum with course count
export type CurriculumWithTeachingCount = Curriculum & {
    _count: {
        teachings: number;
    };
};

// Type for Curriculum with full course details
export type CurriculumWithTeachings = Curriculum & {
    teachings: Array<{
        id: string;
        name: string;
        shortName: string | null;
        grade: {
            id: string;
            shortDescription: string;
        };
        subject: {
            id: string;
            shortDescription: string;
        };
    }>;
};
