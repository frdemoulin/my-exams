"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MultiSelect } from "@/components/ui/multi-select";

import { createTheme } from "@/core/theme";
import { CreateThemeValues } from "@/core/theme";
import { createThemeSchema } from "@/lib/validation";
import { updateTheme } from "@/core/theme";
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
}

export const ThemeForm = ({
    crudMode,
    initialData,
    options
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

    const onSubmit = async (values: CreateThemeValues) => {
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('shortTitle', values.shortTitle || '');
        formData.append('longDescription', values.longDescription);
        formData.append('shortDescription', values.shortDescription);
        formData.append('description', values.description || '');
        formData.append('domainId', values.domainId);
        
        if (!initialData.id) {
            await createTheme(formData);
        } else {
            await updateTheme(initialData.id, formData);
        }
    }

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
                        <Link href="/admin/themes">{common.cancel}</Link>
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
