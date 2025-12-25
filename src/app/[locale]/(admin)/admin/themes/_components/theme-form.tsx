"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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
        id?: string,
        longDescription: string,
        shortDescription: string,
        domainId: string | undefined,
    }
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
        defaultValues: initialData,
        resolver: zodResolver(createThemeSchema)
    });

    const onSubmit = async (values: CreateThemeValues) => {
        const formData = new FormData();
        formData.append('longDescription', values.longDescription);
        formData.append('shortDescription', values.shortDescription || '');
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
                    name="longDescription"
                    control={control}
                    render={({ field }) => {
                        return <FormItem>
                                <FormLabel>Description longue</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Description"
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
                                    placeholder="Description"
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
