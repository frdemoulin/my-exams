"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { createSubject } from "@/core/subject";
import { CreateSubjectValues } from "@/core/subject";
import { createSubjectSchema } from "@/lib/validation";
import { updateSubject } from "@/core/subject";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { useEntityTranslation, useCommonTranslations } from "@/hooks/use-translations";

interface SubjectFormProps {
    crudMode: "add" | "edit";
    initialData: {
        id?: string,
        longDescription: string,
        shortDescription: string,
        isActive: boolean,
    }
}

export const SubjectForm = ({
    crudMode,
    initialData
}: SubjectFormProps) => {
    const router = useRouter();
    const entity = useEntityTranslation('subject');
    const common = useCommonTranslations();
    
    const form = useForm<CreateSubjectValues>({
        defaultValues: initialData,
        resolver: zodResolver(createSubjectSchema)
    });

    const onSubmit = async (values: CreateSubjectValues) => {
        const formData = new FormData();

        formData.append("longDescription", values.longDescription);
        formData.append("shortDescription", values.shortDescription);
        formData.append("isActive", String(values.isActive));
        
        if (!initialData.id) {
            await createSubject(formData, { redirectTo: null });
        } else {
            await updateSubject(initialData.id, formData, { redirectTo: null });
        }
        router.push("/admin/subjects");
        router.refresh();
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
                                    Matière active
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
                        <Link href="/admin/subjects">{common.cancel}</Link>
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
