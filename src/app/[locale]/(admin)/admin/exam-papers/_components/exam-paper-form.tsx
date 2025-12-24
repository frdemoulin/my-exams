"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MultiSelect } from "@/components/ui/multi-select";

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
        sessionDay?: string;
        examDay?: number | null;
        examMonth?: number | null;
        examYear?: number | null;
        source?: "OFFICIEL" | "APMEP" | "LABOLYCEE" | "AUTRE";
        sourceUrl?: string | null;
        diplomaId: string;
        divisionId?: string | null;
        gradeId: string;
        teachingId: string;
        curriculumId?: string;
        examinationCenterIds?: string[];
        domainIds?: string[];
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
    const examinationCenterOptions = useMemo(() => {
        return examinationCenters.map(center => ({
            label: center.description,
            value: center.id,
        }));
    }, [examinationCenters]);

    const [selectedExaminationCenterIds, setSelectedExaminationCenterIds] = useState<string[]>(
        initialData.examinationCenterIds || []
    );
    
    const form = useForm<CreateExamPaperValues>({
        defaultValues: {
            label: initialData.label || '',
            sessionYear: initialData.sessionYear || new Date().getFullYear(),
            sessionDay: initialData.sessionDay || '',
            examDay: initialData.examDay || undefined,
            examMonth: initialData.examMonth || new Date().getMonth() + 1,
            examYear: initialData.examYear || initialData.sessionYear || new Date().getFullYear(),
            source: initialData.source || "OFFICIEL",
            sourceUrl: initialData.sourceUrl || '',
            diplomaId: initialData.diplomaId || '',
            divisionId: initialData.divisionId || '',
            gradeId: initialData.gradeId || '',
            teachingId: initialData.teachingId || '',
            curriculumId: initialData.curriculumId || '',
            examinationCenterIds: initialData.examinationCenterIds || [],
            domainIds: initialData.domainIds || [],
            themeIds: initialData.themeIds || [],
            subjectUrl: initialData.subjectUrl || '',
            correctionUrl: initialData.correctionUrl || '',
        },
        resolver: zodResolver(createExamPaperSchema)
    });

    const sessionDay = form.watch('sessionDay');
    const sessionYear = form.watch('sessionYear');
    const examMonth = form.watch('examMonth');
    const examYear = form.watch('examYear');

    useEffect(() => {
        if (crudMode === 'edit' && initialData.label && !form.formState.isDirty) {
            return;
        }

        const centersLabel = selectedExaminationCenterIds
            .map((id) => examinationCenterOptions.find((opt) => opt.value === id)?.label)
            .filter((label): label is string => Boolean(label))
            .join('-');

        if (!centersLabel) {
            form.setValue('label', '');
            return;
        }

        const monthNames = [
            "janvier", "février", "mars", "avril", "mai", "juin",
            "juillet", "août", "septembre", "octobre", "novembre", "décembre"
        ];
        const monthLabel = examMonth ? monthNames[(examMonth || 1) - 1] : undefined;
        const yearLabel = examYear || sessionYear || new Date().getFullYear();

        const parts = [centersLabel];
        if (monthLabel) parts.push(monthLabel);
        parts.push(String(yearLabel));
        if (sessionDay) parts.push(sessionDay);

        form.setValue('label', parts.join(' '));
    }, [selectedExaminationCenterIds, examinationCenterOptions, sessionYear, sessionDay, examMonth, examYear, form, crudMode, initialData.label, form.formState.isDirty]);

    const [uploading, setUploading] = useState(false);
    const [uploadMessage, setUploadMessage] = useState<{ type: 'success' | 'error' | null; text: string }>({ type: null, text: '' });
    const handlePdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.type !== "application/pdf") {
            setUploadMessage({ type: 'error', text: "Seuls les PDF sont autorisés." });
            e.target.value = "";
            return;
        }
        setUploading(true);
        try {
            const fd = new FormData();
            fd.append("file", file);
            const res = await fetch("/api/exam-papers/upload", { method: "POST", body: fd });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data?.error || "Téléversement échoué");
            }
            form.setValue("subjectUrl", data.url || "");
            const successText = data?.compressed
                ? "PDF téléversé (compressé). Le lien a été renseigné automatiquement."
                : "PDF téléversé. Le lien a été renseigné automatiquement.";
            setUploadMessage({ type: 'success', text: successText });
        } catch (err) {
            console.error("Upload error", err);
            const message = err instanceof Error ? err.message : "Échec du téléversement du PDF.";
            setUploadMessage({ type: 'error', text: message });
        } finally {
            setUploading(false);
            e.target.value = "";
        }
    };

    // Auto-generate label from examination centers
    const handleExaminationCentersChange = (ids: string[]) => {
        setSelectedExaminationCenterIds(ids);
        form.setValue('examinationCenterIds', ids);
    };

    const onSubmit = async (values: CreateExamPaperValues) => {
        const formData = new FormData();

        Object.entries(values).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                formData.append(key, value.join(','));
            } else if (value === undefined || value === null) {
                formData.append(key, '');
            } else {
                formData.append(key, String(value));
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
                            <FormLabel>Centres d&apos;examen</FormLabel>
                            <FormControl>
                                <MultiSelect
                                    options={examinationCenterOptions}
                                    selected={selectedExaminationCenterIds}
                                    onChange={handleExaminationCentersChange}
                                    placeholder="Sélectionner des centres d'examen"
                                    searchPlaceholder="Rechercher un centre..."
                                    emptyText="Aucun centre trouvé."
                                    contentClassName="z-[1000]"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        name="label"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Label</FormLabel>
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
                                <FormLabel>Année de session</FormLabel>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        name="sessionDay"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Jour / mention de session (optionnel)</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="Jour 1, Sujet A..."
                                        value={field.value || ''}
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="source"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Source du sujet</FormLabel>
                                <Select
                                    value={field.value}
                                    onValueChange={(val) => field.onChange(val)}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Source" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="OFFICIEL">Officiel</SelectItem>
                                        <SelectItem value="APMEP">APMEP</SelectItem>
                                        <SelectItem value="LABOLYCEE">LaboLycée</SelectItem>
                                        <SelectItem value="AUTRE">Autre</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                        name="examDay"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Jour de l&apos;examen (optionnel)</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="19"
                                        min={1}
                                        max={31}
                                        value={field.value ?? ''}
                                        onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="examMonth"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mois de l&apos;examen</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="6"
                                        min={1}
                                        max={12}
                                        value={field.value ?? ''}
                                        onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                                        required
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="examYear"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Année de l&apos;examen</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="2024"
                                        min={1900}
                                        max={2100}
                                        value={field.value ?? ''}
                                        onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                                        required
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
                        <FormLabel>Diplôme</FormLabel>
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
                                <FormLabel>Filière (optionnel)</FormLabel>
                                <Select
                                    onValueChange={(val) => field.onChange(val === 'none' ? '' : val)}
                                    value={field.value || 'none'}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Aucune filière" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="none">Aucune filière</SelectItem>
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
                        <FormLabel>Niveau scolaire</FormLabel>
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
                        <FormLabel>Enseignement</FormLabel>
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
                        <FormLabel>Programme</FormLabel>
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
                            <FormLabel>URL du sujet (optionnel)</FormLabel>
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

                <div className="grid grid-cols-1 gap-2">
                    <FormLabel>Ou téléverser le PDF</FormLabel>
                    <Input
                        type="file"
                        accept="application/pdf"
                        onChange={handlePdfUpload}
                        disabled={uploading}
                    />
                    {uploading && <p className="text-sm text-muted-foreground">Téléversement en cours…</p>}
                    {uploadMessage.type && (
                        <p
                            className={`text-sm ${uploadMessage.type === 'error' ? 'text-fg-danger' : 'text-success-strong'}`}
                        >
                            {uploadMessage.text}
                        </p>
                    )}
                    <p className="text-sm text-muted-foreground">Taille max 10MB. Compression auto au-delà de 2MB (Ghostscript requis). Le lien est rempli automatiquement après upload.</p>
                </div>

                <FormField
                    name="sourceUrl"
                    control={control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>URL de la source (optionnel)</FormLabel>
                            <FormControl>
                                <Input
                                    type="url"
                                    placeholder="Lien vers la source (APMEP, Labolycee, etc.)"
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
                            <FormLabel>URL du corrigé (optionnel)</FormLabel>
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
                        variant="secondary"
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
