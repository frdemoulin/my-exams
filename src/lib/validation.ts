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
