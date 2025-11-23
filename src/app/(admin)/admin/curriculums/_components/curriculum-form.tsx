"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MultipleSelector, { type Option } from "@/components/ui/multiple-selector";
import type { CreateCurriculumErrors } from "@/core/curriculum";

type CurriculumFormProps = {
    crudMode: "create" | "edit";
    formAction: (
        prevState: CreateCurriculumErrors,
        formData: FormData
    ) => Promise<CreateCurriculumErrors>;
    initialData?: {
        id?: string;
        name?: string;
        description?: string;
        startYear?: number;
        endYear?: number;
        startMonth?: number;
        endMonth?: number;
        teachingIds?: string[];
        isActive?: boolean;
    };
    teachings: Option[];
};

const CurriculumForm = ({
    crudMode,
    formAction,
    initialData,
    teachings,
}: CurriculumFormProps) => {
    const [formState, action] = useActionState(formAction, {});
    const router = useRouter();

    // Selected teachings state - use useState for dynamic updates
    const [selectedCourses, setSelectedCourses] = useState<Option[]>(() => {
        if (initialData?.teachingIds) {
            return teachings.filter((teaching) => initialData.teachingIds?.includes(teaching.value));
        }
        return [];
    });

    useEffect(() => {
        if (formState._form) {
            formState._form.forEach((error) => {
                toast.error(error);
            });
        }
    }, [formState]);

    return (
        <form action={action} className="space-y-6">
            {initialData?.id && <input type="hidden" name="id" value={initialData.id} />}

            {/* Name */}
            <div className="space-y-2">
                <Label htmlFor="name">
                    Nom <span className="text-red-500">*</span>
                </Label>
                <Input
                    id="name"
                    name="name"
                    placeholder="Ex: Réforme du Baccalauréat 2021"
                    defaultValue={initialData?.name}
                    required
                />
                {formState.name && (
                    <p className="text-sm text-red-500">{formState.name.join(", ")}</p>
                )}
            </div>

            {/* Description */}
            <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                    id="description"
                    name="description"
                    placeholder="Description du programme"
                    defaultValue={initialData?.description}
                />
                {formState.description && (
                    <p className="text-sm text-red-500">{formState.description.join(", ")}</p>
                )}
            </div>

            {/* Years Row */}
            <div className="grid grid-cols-2 gap-4">
                {/* Start Year */}
                <div className="space-y-2">
                    <Label htmlFor="startYear">
                        Année de début <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="startYear"
                        name="startYear"
                        type="number"
                        min="2000"
                        max="2100"
                        placeholder="2021"
                        defaultValue={initialData?.startYear}
                        required
                    />
                    {formState.startYear && (
                        <p className="text-sm text-red-500">{formState.startYear.join(", ")}</p>
                    )}
                </div>

                {/* End Year */}
                <div className="space-y-2">
                    <Label htmlFor="endYear">Année de fin</Label>
                    <Input
                        id="endYear"
                        name="endYear"
                        type="number"
                        min="2000"
                        max="2100"
                        placeholder="2025"
                        defaultValue={initialData?.endYear}
                    />
                    {formState.endYear && (
                        <p className="text-sm text-red-500">{formState.endYear.join(", ")}</p>
                    )}
                </div>
            </div>

            {/* Months Row */}
            <div className="grid grid-cols-2 gap-4">
                {/* Start Month */}
                <div className="space-y-2">
                    <Label htmlFor="startMonth">Mois de début</Label>
                    <Input
                        id="startMonth"
                        name="startMonth"
                        type="number"
                        min="1"
                        max="12"
                        placeholder="9"
                        defaultValue={initialData?.startMonth}
                    />
                    {formState.startMonth && (
                        <p className="text-sm text-red-500">{formState.startMonth.join(", ")}</p>
                    )}
                </div>

                {/* End Month */}
                <div className="space-y-2">
                    <Label htmlFor="endMonth">Mois de fin</Label>
                    <Input
                        id="endMonth"
                        name="endMonth"
                        type="number"
                        min="1"
                        max="12"
                        placeholder="6"
                        defaultValue={initialData?.endMonth}
                    />
                    {formState.endMonth && (
                        <p className="text-sm text-red-500">{formState.endMonth.join(", ")}</p>
                    )}
                </div>
            </div>

            {/* Courses MultiSelect */}
            <div className="space-y-2">
                <Label htmlFor="teachingIds">
                    Enseignements associés <span className="text-red-500">*</span>
                </Label>
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
                {/* Hidden inputs for teachingIds */}
                {selectedCourses.map((teaching) => (
                    <input
                        key={teaching.value}
                        type="hidden"
                        name="teachingIds"
                        value={teaching.value}
                    />
                ))}
                {formState.teachingIds && (
                    <p className="text-sm text-red-500">{formState.teachingIds.join(", ")}</p>
                )}
            </div>

            {/* Active Status */}
            <div className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    id="isActive"
                    name="isActive"
                    value="true"
                    defaultChecked={initialData?.isActive ?? true}
                    className="h-4 w-4 rounded border-gray-300"
                />
                <Label htmlFor="isActive" className="cursor-pointer">
                    Programme actif
                </Label>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
                <Button type="submit">
                    {crudMode === "create" ? "Créer" : "Enregistrer"}
                </Button>
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.back()}
                >
                    Annuler
                </Button>
            </div>
        </form>
    );
};

export default CurriculumForm;
