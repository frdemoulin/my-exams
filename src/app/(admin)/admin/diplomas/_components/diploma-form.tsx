"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { createDiploma } from "@/core/diploma";
import { CreateDiplomaValues } from "@/core/diploma";
import { createDiplomaSchema } from "@/lib/validation";
import { updateDiploma } from "@/core/diploma";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { useEntityTranslation, useCommonTranslations, useMessageTranslations } from "@/hooks/use-translations";

interface DiplomaFormProps {
    crudMode: "add" | "edit";
    formAction: any;
    initialData: {
        id?: string,
        longDescription: string,
        shortDescription: string,
    }
}

export const DiplomaForm = ({
    crudMode,
    formAction,
    initialData
}: DiplomaFormProps) => {
    const entity = useEntityTranslation('diploma');
    const common = useCommonTranslations();
    const messages = useMessageTranslations();
    
    const form = useForm<CreateDiplomaValues>({
        defaultValues: initialData,
        resolver: zodResolver(createDiplomaSchema)
    });

    const onSubmit = async (values: CreateDiplomaValues) => {
        const formData = new FormData();

        Object.entries(values).forEach(([key, value]) => {
            if (value) {
                formData.append(key, value as string);
            }
        });
        
        if (!initialData.id) {
            try {
                await createDiploma(formData);
                toast.success(messages.success.created(entity.singular));
                // // Reset the form after successful submission
                // form.reset();
            } catch (error) {
                if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
                    throw error;
                }
                const errorMessage = error instanceof Error ? error.message : messages.error.generic;
                toast.error(errorMessage);
                console.error("Error creating diploma:", error);
            }
        } else {
            try {
                await updateDiploma(initialData.id, formData);
                toast.success(messages.success.updated(entity.singular));
            } catch (error) {
                if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
                    throw error;
                }
                toast.error(messages.error.generic);
                console.error("Error updating diploma: ", error);
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
                <div className="mt-2 flex justify-end">
                    <Button
                        asChild
                        variant="outline"
                        className="mr-4"
                    >
                        <Link href="/admin/diplomas">{common.cancel}</Link>
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
