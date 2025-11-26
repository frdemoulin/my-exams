import { z } from "zod";
import type { Curriculum } from "@prisma/client";

// Zod schema for creating a curriculum
export const createCurriculumSchema = z.object({
    longDescription: z.string().min(3, "La description longue doit contenir au moins 3 caractères"),
    shortDescription: z.string().optional(),
    startDate: z.date({ required_error: "La date de début est requise" }),
    endDate: z.date().optional(),
    teachingIds: z.array(z.string()).min(1, "Sélectionnez au moins un enseignement"),
    isActive: z.boolean().default(true),
}).refine((data) => {
    // If endDate is provided, it should be >= startDate
    if (data.endDate !== undefined && data.endDate < data.startDate) {
        return false;
    }
    return true;
}, {
    message: "La date de fin doit être supérieure ou égale à la date de début",
    path: ["endDate"],
});

export type CreateCurriculumInput = z.infer<typeof createCurriculumSchema>;

export type CreateCurriculumErrors = {
    longDescription?: string[];
    shortDescription?: string[];
    startDate?: string[];
    endDate?: string[];
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
        longDescription: string;
        shortDescription: string | null;
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
