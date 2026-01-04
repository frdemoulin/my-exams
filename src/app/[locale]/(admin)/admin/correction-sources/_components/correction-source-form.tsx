"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormSubmitButton from "@/components/ui/form-submit-button";

import { createCorrectionSource, updateCorrectionSource, CreateCorrectionSourceValues } from "@/core/correction-source";
import { createCorrectionSourceSchema } from "@/lib/validation";
import { useCommonTranslations } from "@/hooks/use-translations";

interface CorrectionSourceFormProps {
    crudMode: "add" | "edit";
    initialData: {
        id?: string;
        label: string;
        isActive: boolean;
    };
}

export const CorrectionSourceForm = ({
    crudMode,
    initialData,
}: CorrectionSourceFormProps) => {
    const common = useCommonTranslations();

    const form = useForm<CreateCorrectionSourceValues>({
        defaultValues: {
            label: initialData.label,
            isActive: initialData.isActive,
        },
        resolver: zodResolver(createCorrectionSourceSchema),
    });

    const onSubmit = async (values: CreateCorrectionSourceValues) => {
        const formData = new FormData();

        formData.append("label", values.label);
        formData.append("isActive", String(values.isActive));

        if (!initialData.id) {
            await createCorrectionSource(formData);
        } else {
            await updateCorrectionSource(initialData.id, formData);
        }
    };

    const {
        handleSubmit,
        control,
        formState: { isSubmitting },
    } = form;

    return (
        <Form {...form}>
            <form
                className="w-full space-y-2"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormField
                    name="label"
                    control={control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nom de la source</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Ex : APMEP"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
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
                                    onChange={(event) => field.onChange(event.target.checked)}
                                    className="h-4 w-4 rounded-base border border-default accent-brand bg-neutral-primary-soft"
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel className="cursor-pointer">Source active</FormLabel>
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
                        <Link href="/admin/correction-sources">{common.cancel}</Link>
                    </Button>
                    <FormSubmitButton crudMode={crudMode} loading={isSubmitting} />
                </div>
            </form>
        </Form>
    );
};
