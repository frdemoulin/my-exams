"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { createDivision } from "@/core/division";
import { CreateDivisionValues } from "@/core/division";
import { createDivisionSchema } from "@/lib/validation";
import { updateDivision } from "@/core/division";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { useEntityTranslation, useCommonTranslations } from "@/hooks/use-translations";

interface DivisionFormProps {
    crudMode: "add" | "edit";
    initialData: {
        id?: string,
        longDescription: string,
        shortDescription: string,
    }
}

export const DivisionForm = ({
    crudMode,
    initialData
}: DivisionFormProps) => {
    const entity = useEntityTranslation('division');
    const common = useCommonTranslations();
    
    const form = useForm<CreateDivisionValues>({
        defaultValues: initialData,
        resolver: zodResolver(createDivisionSchema)
    });

    const onSubmit = async (values: CreateDivisionValues) => {
        const formData = new FormData();

        Object.entries(values).forEach(([key, value]) => {
            if (value) {
                formData.append(key, value as string);
            }
        });
        
        if (!initialData.id) {
            await createDivision(formData);
        } else {
            await updateDivision(initialData.id, formData);
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
                        <Link href="/admin/divisions">{common.cancel}</Link>
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
