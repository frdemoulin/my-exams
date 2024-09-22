"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import toast from "react-hot-toast";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { createExaminationCenter } from "@/actions/examination-center/create-examination-center";
import { CreateExaminationCenterValues } from "@/types/examination-center";
import { createExaminationCenterSchema } from "@/lib/validation";
import { updateExaminationCenter } from "@/actions/examination-center/edit-examination-center";
import FormSubmitButton from "@/components/ui/form-submit-button";

interface ExaminationCenterFormProps {
    crudMode: "add" | "edit";
    formAction: any;
    initialData: {
        id?: string,
        description: string,
    }
}

export const ExaminationCenterForm = ({
    crudMode,
    formAction,
    initialData
}: ExaminationCenterFormProps) => {
    const form = useForm<CreateExaminationCenterValues>({
        defaultValues: initialData,
        resolver: zodResolver(createExaminationCenterSchema)
    });

    const onSubmit = async (values: CreateExaminationCenterValues) => {
        const formData = new FormData();

        Object.entries(values).forEach(([key, value]) => {
            if (value) {
                formData.append(key, value as string);
            }
        });
        
        if (!initialData.id) {
            try {
                await createExaminationCenter(formData);
                toast.success("Centre d'examen enregistré");
                // // Reset the form after successful submission
                // form.reset();
            } catch (error) {
                toast.error("Erreur lors de l'enregistrement du centre d'examen");
                console.error("Error creating examination center:", error);
            }
        } else {
            try {
                await updateExaminationCenter(initialData.id, formData);
                toast.success("Centre d'examen mis à jour");
            } catch (error) {
                toast.error("Erreur lors de la modification du centre d'examen");
                console.error("Error updating examination center: ", error);
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
                    name="description"
                    control={control}
                    render={({ field }) => {
                        return <FormItem>
                            <FormLabel required>Description</FormLabel>
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
                        <Link href="/admin/examination-centers">Annuler</Link>
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
