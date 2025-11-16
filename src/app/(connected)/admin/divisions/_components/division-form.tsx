"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import toast from "react-hot-toast";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { createDivision } from "@/actions/division/create-division";
import { CreateDivisionValues } from "@/types/division";
import { createDivisionSchema } from "@/lib/validation";
import { updateDivision } from "@/actions/division/edit-division";
import FormSubmitButton from "@/components/ui/form-submit-button";

interface DivisionFormProps {
    crudMode: "add" | "edit";
    formAction: any;
    initialData: {
        id?: string,
        longDescription: string,
        shortDescription: string,
    }
}

export const DivisionForm = ({
    crudMode,
    formAction,
    initialData
}: DivisionFormProps) => {
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
            try {
                await createDivision(formData);
                toast.success("Filière enregistrée");
                // // Reset the form after successful submission
                // form.reset();
            } catch (error) {
                if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
                    throw error;
                }
                const errorMessage = error instanceof Error ? error.message : "Erreur lors de l'enregistrement de la filière";
                toast.error(errorMessage);
                console.error("Error creating division:", error);
            }
        } else {
            try {
                await updateDivision(initialData.id, formData);
                toast.success("Filière mise à jour");
            } catch (error) {
                if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
                    throw error;
                }
                toast.error("Erreur lors de la modification de la filière");
                console.error("Error updating division: ", error);
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
                        <Link href="/admin/divisions">Annuler</Link>
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
