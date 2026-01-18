import { Metadata } from "next";
import { redirect } from "next/navigation";

import getSession from "@/lib/auth/get-session";
import prisma from "@/lib/db/prisma";
import { fetchThemes } from "@/core/theme";
import EditExerciseWrapper from "./_components/edit-exercise-wrapper";

export async function generateMetadata(): Promise<Metadata> {
    return { title: 'Modifier l\'exercice' };
}

const EditExercisePage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect(`/api/auth/signin?callbackUrl=/admin/exercises/${id}/edit`);
    }

    // Récupérer l'exercice
    const exercise = await prisma.exercise.findUnique({
        where: { id },
        include: {
            examPaper: {
                include: {
                    diploma: true,
                    division: true,
                    grade: true,
                    teaching: {
                        include: {
                            subject: true,
                            grade: true,
                        },
                    },
                },
            },
        },
    });

    if (!exercise) {
        redirect("/admin/exam-papers");
    }

    // Récupérer tous les thèmes
    const themes = await fetchThemes();

    return (
      <EditExerciseWrapper
        exercise={exercise}
        themes={themes.map(theme => ({
          value: theme.id,
          label: theme.title,
          description: theme.description || undefined,
        }))}
      />
    );
}

export default EditExercisePage;
