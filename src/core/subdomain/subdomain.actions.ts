"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { createSubdomainSchema } from "@/lib/validation";
import { setCrudSuccessToast } from "@/lib/toast";
import { CreateSubdomainErrors } from "./subdomain.types";

type DeleteSubdomainOptions = {
    redirectTo?: string | null;
    revalidatePaths?: string[];
    skipSuccessToast?: boolean;
};

const parseFormValues = (formData: FormData) => {
    const values = Object.fromEntries(formData.entries());
    const isActiveRaw = values.isActive;
    const isActive =
        typeof isActiveRaw === "boolean"
            ? isActiveRaw
            : isActiveRaw == null
                ? true
                : String(isActiveRaw) === "true";

    return {
        title: String(values.title ?? "").trim(),
        shortTitle:
            values.shortTitle && String(values.shortTitle).trim().length
                ? String(values.shortTitle).trim()
                : undefined,
        slug: String(values.slug ?? "").trim(),
        description:
            values.description && String(values.description).trim().length
                ? String(values.description).trim()
                : undefined,
        order: values.order ? parseInt(String(values.order), 10) : undefined,
        subjectId: String(values.subjectId ?? "").trim(),
        domainId: String(values.domainId ?? "").trim(),
        isActive,
    };
};

const ensureCoherence = async (subjectId: string, domainId: string) => {
    const domain = await prisma.domain.findUnique({
        where: { id: domainId },
        select: { id: true, subjectId: true },
    });
    if (!domain) {
        throw new Error("Domaine introuvable");
    }
    if (domain.subjectId !== subjectId) {
        throw new Error(
            "Incohérence : le domaine sélectionné n'appartient pas à la matière choisie."
        );
    }
};

export const createSubdomain = async (formData: FormData) => {
    const parsedValues = parseFormValues(formData);
    const result = createSubdomainSchema.safeParse(parsedValues);

    if (!result.success) {
        const errors: CreateSubdomainErrors = result.error.format();
        console.error("Error creating subdomain: ", errors);
        throw errors;
    }

    const { title, shortTitle, slug, description, order, subjectId, domainId, isActive } =
        result.data;

    await ensureCoherence(subjectId, domainId);

    try {
        await prisma.subdomain.create({
            data: {
                title,
                shortTitle: shortTitle ?? null,
                slug,
                description: description ?? null,
                order: order ?? null,
                subjectId,
                domainId,
                isActive,
            },
        });
    } catch (error: any) {
        if (error.code === "P2002") {
            throw new Error("Un sous-domaine avec ce slug existe déjà pour cette matière");
        }
        throw error;
    }

    revalidatePath("/admin/subdomains");
    await setCrudSuccessToast("subdomain", "created");
    redirect("/admin/subdomains");
};

export const updateSubdomain = async (id: string | undefined, formData: FormData) => {
    if (!id) throw new Error("Identifiant manquant");

    const parsedValues = parseFormValues(formData);
    const result = createSubdomainSchema.safeParse(parsedValues);

    if (!result.success) {
        const errors = result.error.format();
        console.error("Invalid subdomain data: ", errors);
        throw errors;
    }

    const { title, shortTitle, slug, description, order, subjectId, domainId, isActive } =
        result.data;

    await ensureCoherence(subjectId, domainId);

    try {
        await prisma.subdomain.update({
            where: { id },
            data: {
                title,
                shortTitle: shortTitle ?? null,
                slug,
                description: description ?? null,
                order: order ?? null,
                subjectId,
                domainId,
                isActive,
            },
        });
    } catch (error: any) {
        if (error.code === "P2002") {
            throw new Error("Un sous-domaine avec ce slug existe déjà pour cette matière");
        }
        console.error("Error updating subdomain: ", error);
        throw error;
    }

    revalidatePath("/admin/subdomains");
    revalidatePath(`/admin/subdomains/${id}`);
    await setCrudSuccessToast("subdomain", "updated");
    redirect("/admin/subdomains");
};

export const deleteSubdomain = async (id: string, options?: DeleteSubdomainOptions) => {
    try {
        const themesCount = await prisma.theme.count({
            where: { subdomainIds: { has: id } },
        });
        if (themesCount > 0) {
            // On délie d'abord les thèmes pour éviter les références orphelines.
            const themes = await prisma.theme.findMany({
                where: { subdomainIds: { has: id } },
                select: { id: true, subdomainIds: true },
            });
            for (const theme of themes) {
                await prisma.theme.update({
                    where: { id: theme.id },
                    data: {
                        subdomainIds: { set: theme.subdomainIds.filter((value) => value !== id) },
                    },
                });
            }
        }
        await prisma.subdomain.delete({ where: { id } });
    } catch (error) {
        console.error("Error deleting subdomain: ", error);
        throw error;
    }

    const paths = new Set(["/admin/subdomains", ...(options?.revalidatePaths ?? [])]);
    paths.forEach((path) => revalidatePath(path));
    if (!options?.skipSuccessToast) {
        await setCrudSuccessToast("subdomain", "deleted");
    }
    if (options?.redirectTo !== null) {
        redirect(options?.redirectTo ?? "/admin/subdomains");
    }
};
