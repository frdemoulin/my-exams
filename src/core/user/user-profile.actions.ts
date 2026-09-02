"use server";

export async function saveCurrentUserPedagogicalProfile(_formData: FormData): Promise<never> {
  throw new Error(
    "L'affectation pédagogique annuelle est verrouillée pour l'année scolaire en cours. Toute rectification d'erreur nécessite une intervention administrative."
  );
}
