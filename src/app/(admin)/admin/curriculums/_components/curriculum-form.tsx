"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MonthPicker } from "@/components/ui/month-picker";
import MultipleSelector, { type Option } from "@/components/ui/multiple-selector";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { useCommonTranslations, useEntityTranslation } from "@/hooks/use-translations";
import { createCurriculumSchema, CreateCurriculumInput } from "@/core/curriculum/curriculum.types";
import { createCurriculum, updateCurriculum } from "@/core/curriculum";

type CurriculumFormProps = {
    crudMode: "add" | "edit";
    initialData: {
        id?: string;
        longDescription?: string;
        shortDescription?: string;
        startDate?: Date;
        endDate?: Date;
        teachingIds?: string[];
        isActive?: boolean;
    };
    teachings: Option[];
};

const CurriculumForm = ({
    crudMode,
    initialData,
    teachings,
}: CurriculumFormProps) => {
    const entity = useEntityTranslation('curriculum');
    const common = useCommonTranslations();

    const [selectedCourses, setSelectedCourses] = useState<Option[]>(() => {
        if (initialData?.teachingIds) {
            return teachings.filter((teaching) => initialData.teachingIds?.includes(teaching.value));
        }
        return [];
    });

    const form = useForm<CreateCurriculumInput>({
        defaultValues: {
            longDescription: initialData?.longDescription || "",
            shortDescription: initialData?.shortDescription || "",
            startDate: initialData?.startDate || new Date(),
            endDate: initialData?.endDate,
            teachingIds: initialData?.teachingIds || [],
            isActive: initialData?.isActive ?? true,
        },
        resolver: zodResolver(createCurriculumSchema)
    });

    // Update form when selectedCourses changes
    useEffect(() => {
        form.setValue('teachingIds', selectedCourses.map(c => c.value));
    }, [selectedCourses, form]);

    const onSubmit = async (values: CreateCurriculumInput) => {
        const formData = new FormData();

        // Convert dates to ISO strings for FormData
        formData.append('longDescription', values.longDescription);
        if (values.shortDescription) {
            formData.append('shortDescription', values.shortDescription);
        }
        formData.append('startDate', values.startDate.toISOString());
        if (values.endDate) {
            formData.append('endDate', values.endDate.toISOString());
        }
        formData.append('isActive', String(values.isActive));
        
        // Add teachingIds
        values.teachingIds.forEach(id => formData.append('teachingIds', id));
        
        if (!initialData?.id) {
            await createCurriculum({}, formData);
        } else {
            formData.append('id', initialData!.id!);
            await updateCurriculum({}, formData);
        }
    };

    const {
        handleSubmit,
        control,
        formState: { isSubmitting }
    } = form;

    return (
        <Form {...form}>
            <form
                className="w-full space-y-4"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormField
                    name="longDescription"
                    control={control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel required>Nom</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Ex: Réforme du Baccalauréat 2021"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    name="shortDescription"
                    control={control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Description du programme"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        name="startDate"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel required>Date de début</FormLabel>
                                <FormControl>
                                    <MonthPicker
                                        date={field.value}
                                        onDateChange={field.onChange}
                                        placeholder="Ex: Septembre 2021"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="endDate"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Date de fin</FormLabel>
                                <FormControl>
                                    <MonthPicker
                                        date={field.value}
                                        onDateChange={field.onChange}
                                        placeholder="Ex: Juin 2025"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    name="teachingIds"
                    control={control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel required>Enseignements associés</FormLabel>
                            <FormControl>
                                <MultipleSelector
                                    defaultOptions={teachings}
                                    value={selectedCourses}
                                    onChange={setSelectedCourses}
                                    placeholder="Sélectionnez les enseignements"
                                    emptyIndicator={
                                        <p className="text-center text-sm text-muted-foreground">
                                            Aucun enseignement trouvé
                                        </p>
                                    }
                                    hidePlaceholderWhenSelected
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
                                    onChange={(e) => field.onChange(e.target.checked)}
                                    className="h-4 w-4 rounded border-gray-300"
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel className="cursor-pointer">
                                    Programme actif
                                </FormLabel>
                            </div>
                        </FormItem>
                    )}
                />

                <div className="mt-2 flex justify-end">
                    <Button
                        asChild
                        variant="outline"
                        className="mr-4"
                    >
                        <Link href="/admin/curriculums">{common.cancel}</Link>
                    </Button>
                    <FormSubmitButton
                        crudMode={crudMode}
                        loading={isSubmitting}
                    />
                </div>
            </form>
        </Form>
    );
};

export default CurriculumForm;
