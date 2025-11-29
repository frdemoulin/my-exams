"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState, useMemo } from "react";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MultipleSelector, { type Option } from "@/components/ui/multiple-selector";

import { createExamPaper, updateExamPaper } from "@/core/exam-paper";
import { CreateExamPaperValues } from "@/core/exam-paper";
import { createExamPaperSchema } from "@/lib/validation";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { useEntityTranslation, useCommonTranslations } from "@/hooks/use-translations";

interface ExamPaperFormProps {
    crudMode: "add" | "edit";
    initialData: {
        id?: string;
        label?: string;
        sessionYear: number;
        diplomaId: string;
        divisionId: string;
        gradeId: string;
        teachingId: string;
        curriculumId: string;
        examinationCenterIds?: string[];
        chapterIds?: string[];
        themeIds?: string[];
        subjectUrl?: string;
        correctionUrl?: string;
    };
    diplomas: { id: string; longDescription: string }[];
    divisions: { id: string; longDescription: string }[];
    grades: { id: string; shortDescription: string }[];
    teachings: { id: string; longDescription: string }[];
    curriculums: { id: string; longDescription: string; shortDescription: string | null }[];
    examinationCenters: { id: string; description: string }[];
}

export const ExamPaperForm = ({
    crudMode,
    initialData,
    diplomas,
    divisions,
    grades,
    teachings,
    curriculums,
    examinationCenters,
}: ExamPaperFormProps) => {
    const entity = useEntityTranslation('examPaper');
    const common = useCommonTranslations();
    
    // Convert examinationCenters to options
    const examinationCenterOptions = useMemo<Option[]>(() => {
        return examinationCenters.map(center => ({
            label: center.description,
            value: center.id,
        }));
    }, [examinationCenters]);

    // Get default selected examination centers
    const defaultExaminationCenters = useMemo<Option[]>(() => {
        if (initialData.examinationCenterIds) {
            return examinationCenterOptions.filter((option) =>
                initialData.examinationCenterIds?.includes(option.value)
            );
        }
        return [];
    }, [initialData.examinationCenterIds, examinationCenterOptions]);

    const [selectedExaminationCenters, setSelectedExaminationCenters] = useState<Option[]>(defaultExaminationCenters);
    
    const form = useForm<CreateExamPaperValues>({
        defaultValues: {
            label: initialData.label || '',
            sessionYear: initialData.sessionYear || new Date().getFullYear(),
            diplomaId: initialData.diplomaId || '',
            divisionId: initialData.divisionId || '',
            gradeId: initialData.gradeId || '',
            teachingId: initialData.teachingId || '',
            curriculumId: initialData.curriculumId || '',
            examinationCenterIds: initialData.examinationCenterIds || [],
            chapterIds: initialData.chapterIds || [],
            themeIds: initialData.themeIds || [],
            subjectUrl: initialData.subjectUrl || '',
            correctionUrl: initialData.correctionUrl || '',
        },
        resolver: zodResolver(createExamPaperSchema)
    });

    // Auto-generate label from examination centers
    const handleExaminationCentersChange = (options: Option[]) => {
        setSelectedExaminationCenters(options);
        form.setValue('examinationCenterIds', options.map((opt) => opt.value));
        
        // Generate label from selected centers
        if (options.length > 0) {
            const centersLabel = options.map(opt => opt.label).join('-');
            const currentDate = new Date();
            const month = currentDate.toLocaleDateString('fr-FR', { month: 'long' });
            const year = currentDate.getFullYear();
            const label = `${centersLabel} ${month} ${year}`;
            form.setValue('label', label);
        } else {
            form.setValue('label', '');
        }
    };

    const onSubmit = async (values: CreateExamPaperValues) => {
        const formData = new FormData();

        Object.entries(values).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                if (Array.isArray(value)) {
                    formData.append(key, value.join(','));
                } else {
                    formData.append(key, String(value));
                }
            }
        });
        
        if (!initialData.id) {
            await createExamPaper(formData);
        } else {
            await updateExamPaper(initialData.id, formData);
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
                className="w-full space-y-4"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormField
                    name="examinationCenterIds"
                    control={control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel required>Centres d'examen</FormLabel>
                            <FormControl>
                                <MultipleSelector
                                    value={selectedExaminationCenters}
                                    onChange={handleExaminationCentersChange}
                                    options={examinationCenterOptions}
                                    placeholder="Sélectionner des centres d'examen"
                                    emptyIndicator={
                                        <p className="text-center text-sm text-gray-500">
                                            Aucun centre trouvé
                                        </p>
                                    }
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        name="label"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel required>Label</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="Généré automatiquement"
                                        required
                                        readOnly
                                        className="bg-muted"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="sessionYear"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel required>Année de session</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="2024"
                                        required
                                        value={field.value}
                                        onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : new Date().getFullYear())}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    name="diplomaId"
                    control={control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel required>Diplôme</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Sélectionner un diplôme" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {diplomas.map((diploma) => (
                                        <SelectItem key={diploma.id} value={diploma.id}>
                                            {diploma.longDescription}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        name="divisionId"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel required>Filière</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Sélectionner une filière" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {divisions.map((division) => (
                                            <SelectItem key={division.id} value={division.id}>
                                                {division.longDescription}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="gradeId"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel required>Niveau scolaire</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Sélectionner un niveau" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {grades.map((grade) => (
                                            <SelectItem key={grade.id} value={grade.id}>
                                                {grade.shortDescription}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    name="teachingId"
                    control={control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel required>Enseignement</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Sélectionner un enseignement" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {teachings.map((teaching) => (
                                        <SelectItem key={teaching.id} value={teaching.id}>
                                            {teaching.longDescription}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    name="curriculumId"
                    control={control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel required>Programme</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Sélectionner un programme" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {curriculums.map((curriculum) => (
                                        <SelectItem key={curriculum.id} value={curriculum.id}>
                                            {curriculum.shortDescription || curriculum.longDescription}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    name="subjectUrl"
                    control={control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>URL du sujet</FormLabel>
                            <FormControl>
                                <Input
                                    type="url"
                                    placeholder="https://..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    name="correctionUrl"
                    control={control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>URL du corrigé</FormLabel>
                            <FormControl>
                                <Input
                                    type="url"
                                    placeholder="https://..."
                                    {...field}
                                />
                            </FormControl>
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
                        <Link href="/admin/exam-papers">{common.cancel}</Link>
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
