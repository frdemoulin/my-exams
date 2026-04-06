import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { fetchTeachingById } from "@/core/teaching";
import { TeachingForm } from "../../_components/teaching-form";
import getSession from "@/lib/auth/get-session";
import { fetchGradesOptions } from "@/core/grade";
import { fetchSubjectsOptions } from "@/core/subject";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.teaching');
    return { title: t('actions.edit') };
}

interface EditCoursePageProps {
    params: Promise<{
        id: string;
    }>;
}

const EditCoursePage = async ({ params }: EditCoursePageProps) => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/admin/teachings");
    }

    const { id } = await params;
    const course = await fetchTeachingById(id);

    if (!course) {
        redirect("/admin/teachings");
    }

    const grades = await fetchGradesOptions();
    const subjects = await fetchSubjectsOptions({ includeInactive: true });
    const t = await getTranslations('entities.teaching');

    return (
        <div className="w-full p-6">
            <AdminPageHeading title={t('actions.edit')} className="mb-6" />
            <TeachingForm
                crudMode="edit"
                initialData={{
                    id: course.id,
                    longDescription: course.longDescription,
                    shortDescription: course.shortDescription,
                    gradeId: course.gradeId,
                    subjectId: course.subjectId,
                    isActive: course.isActive ?? true,
                }}
                grades={grades}
                subjects={subjects}
            />
        </div>
    );
};

export default EditCoursePage;
