"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import toast from "react-hot-toast";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MultiSelect } from "@/components/ui/multi-select";

import { createTheme } from "@/core/theme";
import { CreateThemeValues } from "@/core/theme";
import { createThemeSchema } from "@/lib/validation";
import { suggestThemeDraftFromTitle, updateTheme } from "@/core/theme";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { Option } from "@/types/option";
import { useCommonTranslations } from "@/hooks/use-translations";

export type SubdomainOption = Option & { subjectId: string; domainId: string };

interface ThemeFormProps {
    crudMode: "add" | "edit";
    initialData: {
        id?: string;
        title: string;
        shortTitle?: string;
        domainIds?: string[];
        chapterIds?: string[];
        subdomainIds?: string[];
    };
    domainOptions: Option[];
    chapterOptions: Option[];
    subdomainOptions?: SubdomainOption[];
    cancelHref?: string;
    submitRedirectTo?: string | null;
    revalidatePaths?: string[];
}

export const ThemeForm = ({
    crudMode,
    initialData,
    domainOptions,
    chapterOptions,
    subdomainOptions = [],
    cancelHref = "/admin/themes",
    submitRedirectTo,
    revalidatePaths,
}: ThemeFormProps) => {
    const common = useCommonTranslations();
    const sortedDomainOptions = [...domainOptions].sort((a, b) =>
        a.label.localeCompare(b.label, "fr", { sensitivity: "base" })
    );
    const sortedChapterOptions = [...chapterOptions].sort((a, b) =>
        a.label.localeCompare(b.label, "fr", { sensitivity: "base" })
    );
    
    const form = useForm<CreateThemeValues>({
        defaultValues: {
            ...initialData,
            shortTitle: initialData.shortTitle ?? undefined,
            domainIds: initialData.domainIds ?? [],
            chapterIds: initialData.chapterIds ?? [],
            subdomainIds: initialData.subdomainIds ?? [],
        },
        resolver: zodResolver(createThemeSchema)
    });
    const [isSuggesting, setIsSuggesting] = React.useState(false);
    const watchedTitle = form.watch("title");
    const watchedDomainIds = form.watch("domainIds");
    const watchedSubdomainIds = form.watch("subdomainIds");

    const filteredSubdomainOptions = React.useMemo(() => {
        const allowedDomains = new Set(watchedDomainIds ?? []);
        const filtered = allowedDomains.size === 0
            ? subdomainOptions
            : subdomainOptions.filter((option) => allowedDomains.has(option.domainId));
        return [...filtered].sort((a, b) =>
            a.label.localeCompare(b.label, "fr", { sensitivity: "base" })
        );
    }, [subdomainOptions, watchedDomainIds]);

    React.useEffect(() => {
        if (!watchedSubdomainIds?.length) return;
        const allowed = new Set(filteredSubdomainOptions.map((o) => o.value));
        const next = watchedSubdomainIds.filter((id) => allowed.has(id));
        if (next.length !== watchedSubdomainIds.length) {
            form.setValue("subdomainIds", next, { shouldDirty: true, shouldValidate: true });
        }
    }, [filteredSubdomainOptions, watchedSubdomainIds, form]);

    const onSubmit = async (values: CreateThemeValues) => {
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('shortTitle', values.shortTitle || '');
        values.domainIds.forEach((domainId) => formData.append('domainIds', domainId));
        values.chapterIds.forEach((chapterId) => formData.append('chapterIds', chapterId));
        (values.subdomainIds ?? []).forEach((subdomainId) =>
            formData.append('subdomainIds', subdomainId)
        );
        
        if (!initialData.id) {
            await createTheme(formData, {
                redirectTo: submitRedirectTo,
                revalidatePaths,
            });
        } else {
            await updateTheme(initialData.id, formData, {
                redirectTo: submitRedirectTo,
                revalidatePaths,
            });
        }
    }

    const handleSuggest = async () => {
        const title = form.getValues("title")?.trim() ?? "";
        const domainIds = form.getValues("domainIds") ?? [];

        if (!title) {
            toast.error("Renseigne un titre avant de lancer l'enrichissement.");
            return;
        }

        try {
            setIsSuggesting(true);
            const result = await suggestThemeDraftFromTitle({ title, domainIds });

            if (!result.success) {
                toast.error(result.error);
                return;
            }

            form.setValue("title", result.data.title, { shouldDirty: true, shouldValidate: true });
            form.setValue("shortTitle", result.data.shortTitle, { shouldDirty: true, shouldValidate: true });
            if (domainIds.length === 0 && result.data.suggestedDomainIds.length > 0) {
                form.setValue("domainIds", result.data.suggestedDomainIds, {
                    shouldDirty: true,
                    shouldValidate: true,
                });
            }

            const autoSelectedDomain = domainIds.length === 0 && result.data.suggestedDomainIds.length > 0;
            toast.success(
                result.source === "openai"
                    ? autoSelectedDomain
                        ? "Titre court suggéré, domaines préselectionnés"
                        : "Titre court suggéré par IA"
                    : autoSelectedDomain
                        ? "Suggestion générée, domaines préselectionnés"
                        : "Suggestion générée"
            );
        } catch (error) {
            if (
                error &&
                typeof error === "object" &&
                "digest" in error &&
                String(error.digest).startsWith("NEXT_REDIRECT")
            ) {
                throw error;
            }
            toast.error("Erreur lors de l'enrichissement IA");
        } finally {
            setIsSuggesting(false);
        }
    };

    const {
        handleSubmit,
        control,
        formState: { isSubmitting }
    } = form;

    return (
        <Form {...form}>
            <form
                className="w-full space-y-2"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-4 flex flex-col gap-3 rounded-base border border-default bg-neutral-primary-soft p-4 shadow-xs md:flex-row md:items-center md:justify-between">
                    <div className="space-y-1">
                        <p className="text-sm font-semibold text-heading">
                            {crudMode === "add" ? "Préremplissage IA" : "Aide IA"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            À partir du titre saisi, l&apos;IA peut proposer un titre court et,
                            si besoin, un ou plusieurs domaines plausibles.
                        </p>
                    </div>
                    <Button
                        type="button"
                        variant="ai"
                        onClick={handleSuggest}
                        disabled={isSubmitting || isSuggesting || !watchedTitle?.trim()}
                    >
                        <Sparkles className="h-4 w-4" />
                        {isSuggesting ? "Enrichissement..." : "Enrichir par IA"}
                    </Button>
                </div>
                <FormField
                    name="title"
                    control={control}
                    render={({ field }) => {
                        return <FormItem>
                                <FormLabel>Titre</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Nom canonique du thème"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <FormField
                    name="shortTitle"
                    control={control}
                    render={({ field }) => {
                        return <FormItem>
                                <FormLabel>Titre court (optionnel)</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Version courte pour mobile"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <FormField
                    name="domainIds"
                    control={control}
                    render={({ field }) => {
                        return <FormItem>
                                <FormLabel>Domaines associés</FormLabel>
                            <FormControl>
                                <MultiSelect
                                    options={sortedDomainOptions}
                                    selected={field.value ?? []}
                                    onChange={field.onChange}
                                    placeholder="Sélectionner un ou plusieurs domaines"
                                    searchPlaceholder="Rechercher un domaine..."
                                    emptyText="Aucun domaine trouvé."
                                />
                            </FormControl>
                            {!watchedDomainIds?.length ? (
                                <p className="text-xs text-muted-foreground">
                                    Les domaines améliorent la qualité de la suggestion IA.
                                </p>
                            ) : null}
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <FormField
                    name="chapterIds"
                    control={control}
                    render={({ field }) => {
                        return <FormItem>
                                <FormLabel>Chapitres associés</FormLabel>
                            <FormControl>
                                <MultiSelect
                                    options={sortedChapterOptions}
                                    selected={field.value ?? []}
                                    onChange={field.onChange}
                                    placeholder="Sélectionner un ou plusieurs chapitres"
                                    searchPlaceholder="Rechercher un chapitre..."
                                    emptyText="Aucun chapitre trouvé."
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <FormField
                    name="subdomainIds"
                    control={control}
                    render={({ field }) => {
                        return <FormItem>
                                <FormLabel>Sous-domaines associés</FormLabel>
                            <FormControl>
                                <MultiSelect
                                    options={filteredSubdomainOptions}
                                    selected={field.value ?? []}
                                    onChange={field.onChange}
                                    placeholder={
                                        filteredSubdomainOptions.length === 0
                                            ? "Aucun sous-domaine disponible pour les domaines choisis"
                                            : "Sélectionner un ou plusieurs sous-domaines"
                                    }
                                    searchPlaceholder="Rechercher un sous-domaine..."
                                    emptyText="Aucun sous-domaine trouvé."
                                />
                            </FormControl>
                            <p className="text-xs text-muted-foreground">
                                Les sous-domaines servent au filtrage transversal des exercices d&apos;annales. Le domaine est déduit du ou des sous-domaines sélectionnés.
                            </p>
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <div className="mt-2 flex justify-end">
                    <Button
                        asChild
                        variant="secondary"
                        className="mr-4"
                    >
                        <Link href={cancelHref}>{common.cancel}</Link>
                    </Button>
                    <FormSubmitButton
                        crudMode={crudMode}
                        loading={isSubmitting}
                    />
                </div>
            </form>
        </Form>
    )
}
