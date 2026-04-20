import { Metadata } from "next";

import { ChapterForm } from "@/app/[locale]/(admin)/admin/chapters/_components/chapter-form";
import { fetchSubjectsOptions } from "@/core/subject";
import { fetchDomainsOptions } from "@/core/domain";

export const metadata: Metadata = {
  title: "Ajouter un QCM",
};

export default async function AddTrainingQcmPage() {
  const [subjects, domains] = await Promise.all([
    fetchSubjectsOptions({ includeInactive: true }),
    fetchDomainsOptions({ includeInactive: true }),
  ]);

  return (
    <div className="w-full p-6">
      <div>
        <h1 className="mb-6 text-lg font-semibold md:text-2xl">Ajouter un QCM</h1>
      </div>
      <ChapterForm
        crudMode="add"
        entityLabel="QCM"
        cancelHref="/admin/training/qcms"
        redirectTo="/admin/training/qcms"
        revalidatePaths={["/admin/training/qcms", "/admin/training/quiz-questions"]}
        initialData={{
          title: "",
          slug: "",
          level: "terminale",
          order: undefined,
          subjectId: "",
          domainIds: [],
          isActive: true,
          isPublished: false,
        }}
        subjects={subjects}
        domains={domains}
      />
    </div>
  );
}