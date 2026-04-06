"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import toast from "react-hot-toast";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MultiSelect } from "@/components/ui/multi-select";

import { createTheme } from "@/core/theme";
import { CreateThemeValues } from "@/core/theme";
import { createThemeSchema } from "@/lib/validation";
import { suggestThemeDraftFromTitle, updateTheme } from "@/core/theme";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { Option } from "@/types/option";
import { useCommonTranslations } from "@/hooks/use-translations";

interface ThemeFormProps {
    crudMode: "add" | "edit";
    initialData: {
        id?: string;
        title: string;
        shortTitle?: string;
        longDescription: string;
        shortDescription: string;
        description?: string;
        domainId?: string;
    };
    options: Option[];
    cancelHref?: string;
    submitRedirectTo?: string | null;
    revalidatePaths?: string[];
}

export const ThemeForm = ({
    crudMode,
    initialData,
    options,
    cancelHref = "/admin/themes",
    submitRedirectTo,
    revalidatePaths,
}: ThemeFormProps) => {
    const common = useCommonTranslations();
    const sortedOptions = [...options].sort((a, b) =>
        a.label.localeCompare(b.label, "fr", { sensitivity: "base" })
    );
    
    const form = useForm<CreateThemeValues>({
        defaultValues: {
            ...initialData,
            shortTitle: initialData.shortTitle ?? undefined,
        },
        resolver: zodResolver(createThemeSchema)
    });
    const [isSuggesting, setIsSuggesting] = React.useState(false);
    const watchedTitle = form.watch("title");
    const watchedDomainId = form.watch("domainId");

    const onSubmit = async (values: CreateThemeValues) => {
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('shortTitle', values.shortTitle || '');
        formData.append('longDescription', values.longDescription);
        formData.append('shortDescription', values.shortDescription);
        formData.append('description', values.description || '');
        formData.append('domainId', values.domainId);
        
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
        const domainId = form.getValues("domainId")?.trim() || undefined;

        if (!title) {
            toast.error("Renseigne un titre avant de lancer l'enrichissement.");
            return;
        }

        try {
            setIsSuggesting(true);
            const result = await suggestThemeDraftFromTitle({ title, domainId });

            if (!result.success) {
                toast.error(result.error);
                return;
            }

            form.setValue("title", result.data.title, { shouldDirty: true, shouldValidate: true });
            form.setValue("shortTitle", result.data.shortTitle, { shouldDirty: true, shouldValidate: true });
            form.setValue("shortDescription", result.data.shortDescription, { shouldDirty: true, shouldValidate: true });
            form.setValue("longDescription", result.data.longDescription, { shouldDirty: true, shouldValidate: true });
            form.setValue("description", result.data.description, { shouldDirty: true, shouldValidate: true });
            if (!domainId && result.data.suggestedDomainId) {
                form.setValue("domainId", result.data.suggestedDomainId, {
                    shouldDirty: true,
                    shouldValidate: true,
                });
            }

            const autoSelectedDomain = !domainId && result.data.suggestedDomainId;
            toast.success(
                result.source === "openai"
                    ? autoSelectedDomain
                        ? "Champs enrichis par IA, domaine préselectionné"
                        : "Champs enrichis par IA"
                    : autoSelectedDomain
                        ? "Suggestion générée (mode mock), domaine préselectionné"
                        : "Suggestion générée (mode mock)"
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
                            À partir du titre saisi, l&apos;IA peut proposer un titre court, des
                            descriptions modifiables et, si besoin, un domaine plausible.
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
                    name="shortDescription"
                    control={control}
                    render={({ field }) => {
                        return <FormItem>
                                <FormLabel>Description courte</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Phrase courte orientée élève"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <FormField
                    name="longDescription"
                    control={control}
                    render={({ field }) => {
                        return <FormItem>
                                <FormLabel>Description longue</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Description pédagogique (2–5 lignes)"
                                    rows={4}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <FormField
                    name="domainId"
                    control={control}
                    render={({ field }) => {
                        const selectedDomain = field.value ? [field.value] : [];
                        return <FormItem>
                                <FormLabel>Domaine</FormLabel>
                            <FormControl>
                                <MultiSelect
                                    options={sortedOptions}
                                    selected={selectedDomain}
                                    onChange={(selected) => {
                                        const next = selected[selected.length - 1];
                                        field.onChange(next ?? "");
                                    }}
                                    placeholder="Sélectionner un domaine"
                                    searchPlaceholder="Rechercher un domaine..."
                                    emptyText="Aucun domaine trouvé."
                                />
                            </FormControl>
                            {!watchedDomainId ? (
                                <p className="text-xs text-muted-foreground">
                                    Le domaine améliore la qualité de la suggestion IA.
                                </p>
                            ) : null}
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <FormField
                    name="description"
                    control={control}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Description (guidage admin, optionnelle)</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="À utiliser lorsque..."
                                        rows={4}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
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
