"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { createGrade } from "@/core/grade";
import { CreateGradeValues } from "@/core/grade";
import { createGradeSchema } from "@/lib/validation";
import { updateGrade } from "@/core/grade";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { useEntityTranslation, useCommonTranslations } from "@/hooks/use-translations";

interface GradeFormProps {
    crudMode: "add" | "edit";
    initialData: {
        id?: string,
        longDescription: string,
        shortDescription: string,
    }
}

export const GradeForm = ({
    crudMode,
    initialData
}: GradeFormProps) => {
    const entity = useEntityTranslation('grade');
    const common = useCommonTranslations();
    
    const form = useForm<CreateGradeValues>({
        defaultValues: initialData,
        resolver: zodResolver(createGradeSchema)
    });

    const onSubmit = async (values: CreateGradeValues) => {
        const formData = new FormData();

        Object.entries(values).forEach(([key, value]) => {
            if (value) {
                formData.append(key, value as string);
            }
        });
        
        if (!initialData.id) {
            await createGrade(formData);
        } else {
            await updateGrade(initialData.id, formData);
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
                <div className="mt-2 flex justify-end">
                    <Button
                        asChild
                        variant="secondary"
                        className="mr-4"
                    >
                        <Link href="/admin/grades">{common.cancel}</Link>
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
