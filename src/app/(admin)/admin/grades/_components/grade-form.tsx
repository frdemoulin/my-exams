"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import toast from "react-hot-toast";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { createGrade } from "@/core/grade";
import { CreateGradeValues } from "@/core/grade";
import { createGradeSchema } from "@/lib/validation";
import { updateGrade } from "@/core/grade";
import FormSubmitButton from "@/components/ui/form-submit-button";

interface GradeFormProps {
    crudMode: "add" | "edit";
    formAction: any;
    initialData: {
        id?: string,
        longDescription: string,
        shortDescription: string,
    }
}

export const GradeForm = ({
    crudMode,
    formAction,
    initialData
}: GradeFormProps) => {
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
            try {
                await createGrade(formData);
                toast.success("Niveau enregistré");
                // // Reset the form after successful submission
                // form.reset();
            } catch (error) {
                if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
                    throw error;
                }
                const errorMessage = error instanceof Error ? error.message : "Erreur lors de l'enregistrement du niveau";
                toast.error(errorMessage);
                console.error("Error creating grade:", error);
            }
        } else {
            try {
                await updateGrade(initialData.id, formData);
                toast.success("Niveau mis à jour");
            } catch (error) {
                if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
                    throw error;
                }
                toast.error("Erreur lors de la modification du niveau");
                console.error("Error updating grade: ", error);
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
                        <Link href="/admin/grades">Annuler</Link>
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
