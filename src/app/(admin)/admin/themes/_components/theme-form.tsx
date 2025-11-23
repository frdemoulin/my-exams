"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import toast from "react-hot-toast";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { createTheme } from "@/core/theme";
import { CreateThemeValues } from "@/core/theme";
import { createThemeSchema } from "@/lib/validation";
import { updateTheme } from "@/core/theme";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { Option } from "@/types/option";
import { useEntityTranslation, useCommonTranslations, useMessageTranslations } from "@/hooks/use-translations";
import { 
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem 
} from "@/components/ui/command";

interface ThemeFormProps {
    crudMode: "add" | "edit";
    formAction: any;
    initialData: {
        id?: string,
        longDescription: string,
        shortDescription: string,
        chapterId: string | undefined,
    }
    options: Option[];
}

export const ThemeForm = ({
    crudMode,
    formAction,
    initialData,
    options
}: ThemeFormProps) => {
    const entity = useEntityTranslation('theme');
    const common = useCommonTranslations();
    const messages = useMessageTranslations();
    
    const form = useForm<CreateThemeValues>({
        defaultValues: initialData,
        resolver: zodResolver(createThemeSchema)
    });

    const onSubmit = async (values: CreateThemeValues) => {
        if (!initialData.id) {
            try {
                await createTheme(values);
                toast.success(messages.success.created(entity.singular));
            } catch (error) {
                if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
                    throw error;
                }
                const errorMessage = error instanceof Error ? error.message : messages.error.generic;
                toast.error(errorMessage);
                console.error("Error creating theme:", error);
            }
        } else {
            try {
                // await updateTheme(initialData.id, values);
                toast.success(messages.success.updated(entity.singular));
            } catch (error) {
                if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
                    throw error;
                }
                toast.error(messages.error.generic);
                console.error("Error updating theme: ", error);
            }
        }
    }

    const {
        handleSubmit,
        watch,
        trigger,
        control,
        setValue,
        setFocus,
        formState: { isSubmitting }
    } = form;

    return (
        <Form {...form}>
            <form
                action={formAction}
                className="w-full space-y-2"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormField
                    name="longDescription"
                    control={control}
                    render={({ field }) => {
                        return <FormItem>
                            <FormLabel required>Description longue</FormLabel>
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
                            <FormLabel required>Description courte</FormLabel>
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
                    name="chapterId"
                    control={control}
                    render={({ field }) => {
                        return <FormItem>
                            <FormLabel required>Chapitre</FormLabel>
                            <FormControl>
                                <select
                                    {...field}
                                    className="w-full border rounded p-2"
                                >
                                    <option value="">Sélectionner un chapitre</option>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <div className="mt-2 flex justify-end">
                    <Button
                        asChild
                        variant="outline"
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
