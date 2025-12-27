import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SubjectForm } from "../../_components/subject-form";
import { fetchSubjectById } from "@/core/subject";
import getSession from "@/lib/auth/get-session";
import { redirect } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.subject');
    return { title: t('actions.edit') };
}

interface SubjectEditProps {
    params: Promise<{
        id: string;
    }>;
}

const EditSubjectPage = async ({ params }: SubjectEditProps) => {
    const session = await getSession();
    const user = session?.user;
    
    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/admin/subjects");
    }

    const { id } = await params;
    const subject = await fetchSubjectById(id);

    if (!subject) {
        redirect("/admin/subjects");
    }

    const t = await getTranslations('entities.subject');

    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-lg font-semibold md:text-2xl mb-6">{t('actions.edit')}</h1>
            </div>
            <div>
                <SubjectForm
                    crudMode="edit"
                    initialData={{
                        id,
                        longDescription: subject?.longDescription ?? "",
                        shortDescription: subject?.shortDescription ?? "",
                        isActive: subject?.isActive ?? true,
                    }}
                />
            </div>
        </div>
    )
}

export default EditSubjectPage;
