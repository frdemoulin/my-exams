"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { createExaminationCenter } from "@/core/examination-center";
import { CreateExaminationCenterValues } from "@/core/examination-center";
import { createExaminationCenterSchema } from "@/lib/validation";
import { updateExaminationCenter } from "@/core/examination-center";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { useEntityTranslation, useCommonTranslations } from "@/hooks/use-translations";

interface ExaminationCenterFormProps {
    crudMode: "add" | "edit";
    initialData: {
        id?: string,
        description: string,
        isActive: boolean,
    }
}

export const ExaminationCenterForm = ({
    crudMode,
    initialData
}: ExaminationCenterFormProps) => {
    const entity = useEntityTranslation('examinationCenter');
    const common = useCommonTranslations();
    
    const form = useForm<CreateExaminationCenterValues>({
        defaultValues: {
            description: initialData.description,
            isActive: initialData.isActive,
        },
        resolver: zodResolver(createExaminationCenterSchema)
    });

    const onSubmit = async (values: CreateExaminationCenterValues) => {
        const formData = new FormData();

        formData.append("description", values.description);
        formData.append("isActive", String(values.isActive));
        
        if (!initialData.id) {
            await createExaminationCenter(formData);
        } else {
            await updateExaminationCenter(initialData.id, formData);
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
                    name="description"
                    control={control}
                    render={({ field }) => {
                        return <FormItem>
                                <FormLabel>Description</FormLabel>
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
                                    Centre actif
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
                        <Link href="/admin/examination-centers">{common.cancel}</Link>
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
