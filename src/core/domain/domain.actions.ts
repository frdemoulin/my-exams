"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { createDomainSchema } from "@/lib/validation";
import { setCrudSuccessToast } from "@/lib/toast";
import { CreateDomainErrors } from "./domain.types";
type DomainScopeInput = {
    diplomaId?: string | null;
    gradeId?: string | null;
    divisionId?: string | null;
    labelOverride?: string | null;
    order?: number | null;
    isActive?: boolean;
};

const emptyToNull = (value: unknown) =>
    typeof value === "string" && value.trim().length === 0 ? null : value;

const parseScopes = (raw: FormDataEntryValue | null): DomainScopeInput[] => {
    if (!raw || typeof raw !== "string") {
        return [];
    }

    try {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) {
            return [];
        }

        const scopes: DomainScopeInput[] = [];

        for (const scope of parsed) {
            if (!scope || typeof scope !== "object") {
                continue;
            }

            const diplomaId = emptyToNull((scope as { diplomaId?: string }).diplomaId) as string | null;
            const gradeId = emptyToNull((scope as { gradeId?: string }).gradeId) as string | null;
            const divisionId = emptyToNull((scope as { divisionId?: string }).divisionId) as string | null;
            const labelOverride = emptyToNull((scope as { labelOverride?: string }).labelOverride) as string | null;
            const orderRaw = (scope as { order?: number | string | null }).order;
            const order = typeof orderRaw === "number"
                ? orderRaw
                : typeof orderRaw === "string" && orderRaw.length
                    ? Number(orderRaw)
                    : null;
            const isActive = (scope as { isActive?: boolean }).isActive !== false;

            const hasTarget = Boolean(diplomaId || gradeId || divisionId);
            if (!hasTarget) {
                continue;
            }

            scopes.push({
                diplomaId,
                gradeId,
                divisionId,
                labelOverride: labelOverride ? String(labelOverride) : null,
                order: Number.isFinite(order as number) ? (order as number) : null,
                isActive,
            });
        }

        return scopes;
    } catch (error) {
        console.error("Invalid scopes payload", error);
        return [];
    }
};

export const createDomain = async (formData: FormData) => {
    const values = Object.fromEntries(formData.entries());
    const parsedValues = {
        ...values,
        order: values.order ? parseInt(values.order as string, 10) : undefined,
        discipline: values.discipline || undefined,
    };
    const scopes = parseScopes(formData.get("scopes"));

    const result = createDomainSchema.safeParse(parsedValues);

    if (result.success) {
        const { longDescription, shortDescription, subjectId, order, discipline } = result.data;

        try {
            const createdDomain = await prisma.domain.create({
                data: {
                    longDescription,
                    shortDescription,
                    subjectId,
                    order: order ?? null,
                    discipline: discipline ?? null,
                },
            });

            if (scopes.length > 0) {
                await prisma.domainScope.createMany({
                    data: scopes.map((scope) => ({
                        domainId: createdDomain.id,
                        diplomaId: scope.diplomaId ?? null,
                        gradeId: scope.gradeId ?? null,
                        divisionId: scope.divisionId ?? null,
                        labelOverride: scope.labelOverride ?? null,
                        order: scope.order ?? null,
                        isActive: scope.isActive ?? true,
                    })),
                });
            }
        } catch (error: any) {
            if (error.code === 'P2002') {
                throw new Error('Un domaine avec ces descriptions existe déjà');
            }
            throw error;
        }
    } else {
        const errors: CreateDomainErrors = result.error.format();
        console.error('Error creating domain: ', errors);
        throw errors;
    }

    revalidatePath("/admin/domains");
    await setCrudSuccessToast("domain", "created");
    redirect("/admin/domains");
}

export const updateDomain = async (id: string | undefined, formData: FormData) => {
    const values = Object.fromEntries(formData.entries());
    const parsedValues = {
        ...values,
        order: values.order ? parseInt(values.order as string, 10) : undefined,
        discipline: values.discipline || undefined,
    };
    const scopes = parseScopes(formData.get("scopes"));

    const result = createDomainSchema.safeParse(parsedValues);

    if (result.success) {
        const { longDescription, shortDescription, subjectId, order, discipline } = result.data;

        try {
            await prisma.domain.update({
                where: { id },
                data: {
                    longDescription,
                    shortDescription,
                    subjectId,
                    order: order ?? null,
                    discipline: discipline ?? null,
                },
            });

            await prisma.domainScope.deleteMany({
                where: { domainId: id },
            });

            if (scopes.length > 0) {
                await prisma.domainScope.createMany({
                    data: scopes.map((scope) => ({
                        domainId: id!,
                        diplomaId: scope.diplomaId ?? null,
                        gradeId: scope.gradeId ?? null,
                        divisionId: scope.divisionId ?? null,
                        labelOverride: scope.labelOverride ?? null,
                        order: scope.order ?? null,
                        isActive: scope.isActive ?? true,
                    })),
                });
            }

            revalidatePath('/admin/domains');
        } catch (error) {
            console.error('Error updating domain: ', error);
            throw error;
        }
        
        await setCrudSuccessToast("domain", "updated");
        redirect('/admin/domains');
    } else {
        const errors = result.error.format();
        console.error('Invalid domain data: ', errors);
        throw errors;
    }
}

export const deleteDomain = async (id: string) => {
    try {
        await prisma.domainScope.deleteMany({
            where: { domainId: id },
        });
        await prisma.domain.delete({
            where: { id },
        });
    } catch (error) {
        console.log('Error deleting domain: ', error);
        throw error;
    }

    revalidatePath("/admin/domains");
    await setCrudSuccessToast("domain", "deleted");
    redirect("/admin/domains");
}
