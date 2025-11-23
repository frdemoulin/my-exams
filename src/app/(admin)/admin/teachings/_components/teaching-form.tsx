"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import toast from "react-hot-toast";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { createTeaching, updateTeaching, createTeachingSchema } from "@/core/teaching";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { Option } from "@/types/option";

type CreateTeachingValues = z.infer<typeof createTeachingSchema>;

interface TeachingFormProps {
    crudMode: "add" | "edit";
    formAction: any;
    initialData: {
        id?: string,
        name: string,
        shortName?: string | null,
        gradeId: string,
        subjectId: string,
    };
    grades: Option[];
    subjects: Option[];
}

export const TeachingForm = ({
    crudMode,
    formAction,
    initialData,
    grades,
    subjects,
}: TeachingFormProps) => {
    const form = useForm<CreateTeachingValues>({
        defaultValues: {
            name: initialData.name,
            shortName: initialData.shortName || undefined,
            gradeId: initialData.gradeId,
            subjectId: initialData.subjectId,
        },
        resolver: zodResolver(createTeachingSchema)
    });

    const onSubmit = async (values: CreateTeachingValues) => {
        const formData = new FormData();

        Object.entries(values).forEach(([key, value]) => {
            if (value) {
                formData.append(key, value as string);
            }
        });
        
        if (!initialData.id) {
            try {
                await createTeaching(formData);
                toast.success("Enseignement créé avec succès");
            } catch (error) {
                if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
                    throw error;
                }
                const errorMessage = error instanceof Error ? error.message : "Erreur lors de la création";
                toast.error(errorMessage);
                console.error("Error creating course:", error);
            }
        } else {
            try {
                await updateTeaching(initialData.id, formData);
                toast.success("Enseignement mis à jour avec succès");
            } catch (error) {
                if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
                    throw error;
                }
                toast.error("Erreur lors de la mise à jour");
                console.error("Error updating course:", error);
            }
        }
    }

    const {
        handleSubmit,
        control,
        formState: { isSubmitting }
    } = form;

    return (
        <Form {...form}>
            <form
                action={formAction}
                className="w-full space-y-4"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormField
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel required>Nom de l'enseignement</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Ex: Spécialité Mathématiques"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="shortName"
                    control={control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nom court (optionnel)</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Ex: Spé Maths"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="gradeId"
                    control={control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel required>Niveau</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Sélectionner un niveau" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {grades.map((grade) => (
                                        <SelectItem key={grade.value} value={grade.value}>
                                            {grade.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="subjectId"
                    control={control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel required>Matière</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Sélectionner une matière" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {subjects.map((subject) => (
                                        <SelectItem key={subject.value} value={subject.value}>
                                            {subject.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="mt-2 flex justify-end">
                    <Button
                        asChild
                        variant="outline"
                        className="mr-4"
                    >
                        <Link href="/admin/teachings">Annuler</Link>
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
