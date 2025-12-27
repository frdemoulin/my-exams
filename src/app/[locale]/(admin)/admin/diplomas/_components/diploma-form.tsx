"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

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
    initialData: {
        id?: string,
        longDescription: string,
        shortDescription: string,
        isActive: boolean,
    }
}

export const DiplomaForm = ({
    crudMode,
    initialData
}: DiplomaFormProps) => {
    const entity = useEntityTranslation('diploma');
    const common = useCommonTranslations();
    
    const form = useForm<CreateDiplomaValues>({
        defaultValues: initialData,
        resolver: zodResolver(createDiplomaSchema)
    });

    const onSubmit = async (values: CreateDiplomaValues) => {
        const formData = new FormData();

        formData.append("longDescription", values.longDescription);
        formData.append("shortDescription", values.shortDescription);
        formData.append("isActive", String(values.isActive));
        
        if (!initialData.id) {
            await createDiploma(formData);
        } else {
            await updateDiploma(initialData.id, formData);
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
                    name="isActive"
                    control={control}
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                                <input
                                    type="checkbox"
                                    checked={field.value}
                                    onChange={(e) => field.onChange(e.target.checked)}
                                    className="h-4 w-4 rounded-base border border-default accent-brand bg-neutral-primary-soft"
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel className="cursor-pointer">
                                    Diplôme actif
                                </FormLabel>
                            </div>
                        </FormItem>
                    )}
                />
                <div className="mt-2 flex justify-end">
                    <Button
                        asChild
                        variant="secondary"
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
