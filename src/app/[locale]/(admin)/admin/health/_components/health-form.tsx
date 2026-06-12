"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MultipleSelector from "@/components/ui/multiple-selector";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
    HealthEntity,
    HealthFormOptions,
    HealthRecord,
    healthEntityLabels,
    saveHealthEntity,
} from "@/core/health";
import { slugifyText } from "@/lib/utils";

const initialDefaults: Record<HealthEntity, HealthRecord> = {
    institutions: { name: "", shortName: "", slug: "", uaiCode: "", city: "", academy: "", region: "", department: "", websiteUrl: "", isActive: true, isPublished: true },
    programs: { type: "PASS", code: "", label: "", description: "", isActive: true, isPublished: true },
    "program-versions": { institutionId: "", programId: "", label: "", slug: "", academicYear: "", studyLevel: "L1", sourceUrl: "", sourceLabel: "", sourceCheckedAt: "", notes: "", isCurrent: false, isActive: true, isPublished: false },
    pathways: { programVersionId: "", name: "", slug: "", campus: "", parcoursupCode: "", sourceUrl: "", description: "", order: 0, isDefault: false, isActive: true, isPublished: false },
    blocks: { programVersionId: "", pathwayId: "", type: "HEALTH", title: "", slug: "", description: "", ects: "", order: 0, isActive: true, isPublished: false },
    "course-units": { programVersionId: "", pathwayId: "", blockId: "", code: "", title: "", shortTitle: "", slug: "", description: "", semester: "", ects: "", order: 0, isCommonToAllPathways: false, isHealthAccessRelevant: true, themeIds: [], isActive: true, isPublished: false },
};

export function HealthForm({
    entity,
    record,
    options,
}: {
    entity: HealthEntity;
    record?: HealthRecord | null;
    options: HealthFormOptions;
}) {
    const [values, setValues] = useState<HealthRecord>({ ...initialDefaults[entity], ...(record ?? {}) });
    const [slugTouched, setSlugTouched] = useState(Boolean(record?.slug));
    const [submitting, setSubmitting] = useState(false);
    const programVersionId = String(values.programVersionId ?? "");
    const pathwayId = String(values.pathwayId ?? "");

    const pathwayOptions = useMemo(
        () => options.pathways.filter((option) => !programVersionId || option.programVersionId === programVersionId),
        [options.pathways, programVersionId]
    );
    const blockOptions = useMemo(
        () =>
            options.blocks.filter(
                (option) =>
                    (!programVersionId || option.programVersionId === programVersionId) &&
                    (!pathwayId || !option.pathwayId || option.pathwayId === pathwayId)
            ),
        [options.blocks, pathwayId, programVersionId]
    );

    const set = (key: string, value: HealthRecord[string]) => setValues((current) => ({ ...current, [key]: value }));
    const setSlugSource = (key: string, value: string) => {
        setValues((current) => ({
            ...current,
            [key]: value,
            ...(!slugTouched ? { slug: slugifyText(value) } : {}),
        }));
    };

    const submit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        for (const themeId of (values.themeIds as string[] | undefined) ?? []) formData.append("themeIds", themeId);

        try {
            setSubmitting(true);
            await saveHealthEntity(entity, formData, record?.id ? String(record.id) : undefined);
        } catch (error) {
            if (error && typeof error === "object" && "digest" in error && String(error.digest).startsWith("NEXT_REDIRECT")) throw error;
            toast.error(error instanceof Error ? error.message : "Les données du formulaire sont invalides.");
        } finally {
            setSubmitting(false);
        }
    };

    const input = (key: string, label: string, type = "text", required = false) => (
        <Field label={label} required={required}>
            <Input
                name={key}
                type={type}
                required={required}
                value={String(values[key] ?? "")}
                onChange={(event) => set(key, event.target.value)}
            />
        </Field>
    );
    const slugInput = (sourceKey: string, sourceLabel: string) => (
        <>
            <Field label={sourceLabel} required>
                <Input
                    name={sourceKey}
                    required
                    value={String(values[sourceKey] ?? "")}
                    onChange={(event) => setSlugSource(sourceKey, event.target.value)}
                />
            </Field>
            <Field label="Slug" required>
                <Input
                    name="slug"
                    required
                    value={String(values.slug ?? "")}
                    onChange={(event) => {
                        setSlugTouched(true);
                        set("slug", event.target.value);
                    }}
                />
            </Field>
        </>
    );
    const textarea = (key: string, label: string) => (
        <Field label={label}>
            <Textarea
                name={key}
                className="min-h-24"
                value={String(values[key] ?? "")}
                onChange={(event) => set(key, event.target.value)}
            />
        </Field>
    );
    const select = (key: string, label: string, items: { value: string; label: string }[], required = false) => (
        <Field label={label} required={required}>
            <input type="hidden" name={key} value={String(values[key] ?? "")} />
            <Select
                value={String(values[key] ?? "") || undefined}
                onValueChange={(value) => set(key, value === "__none" ? "" : value)}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Sélectionner..." />
                </SelectTrigger>
                <SelectContent>
                    {!required ? <SelectItem value="__none">Aucun</SelectItem> : null}
                    {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </Field>
    );
    const checkbox = (key: string, label: string, description: string) => (
        <label className="flex items-start gap-3 text-sm">
            <input type="hidden" name={key} value="false" />
            <input
                name={key}
                type="checkbox"
                value="true"
                checked={Boolean(values[key])}
                onChange={(event) => set(key, event.target.checked)}
                className="mt-0.5 h-4 w-4 rounded-xs border border-default-medium bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
            />
            <span className="space-y-1 leading-none">
                <span className="block font-medium text-heading">{label}</span>
                <span className="block text-xs leading-4 text-muted-foreground">{description}</span>
            </span>
        </label>
    );

    return (
        <form onSubmit={submit} className="w-full space-y-4" noValidate>
            <div className="grid gap-4 md:grid-cols-2">
                {entity === "institutions" ? (
                    <>
                        {slugInput("name", "Nom")}
                        {input("shortName", "Nom court")}
                        {input("uaiCode", "Code UAI")}
                        {input("city", "Ville")}
                        {input("academy", "Académie")}
                        {input("region", "Région")}
                        {input("department", "Département")}
                        {input("websiteUrl", "Site web", "url")}
                    </>
                ) : null}
                {entity === "programs" ? (
                    <>
                        {select("type", "Type", ["PASS", "LAS", "LAS_SPS", "HEALTH_LICENSE_2027", "OTHER"].map((value) => ({ value, label: value })), true)}
                        {input("code", "Code", "text", true)}
                        {input("label", "Libellé", "text", true)}
                        <div className="md:col-span-2">{textarea("description", "Description")}</div>
                    </>
                ) : null}
                {entity === "program-versions" ? (
                    <>
                        {select("institutionId", "Établissement", options.institutions, true)}
                        {select("programId", "Programme", options.programs, true)}
                        {slugInput("label", "Libellé")}
                        {input("academicYear", "Année universitaire", "text", true)}
                        {select("studyLevel", "Niveau", ["L1", "L2", "L3", "OTHER"].map((value) => ({ value, label: value })), true)}
                        {input("sourceUrl", "URL source", "url")}
                        {input("sourceLabel", "Libellé source")}
                        {input("sourceCheckedAt", "Date de vérification", "date")}
                        <div className="md:col-span-2">{textarea("notes", "Notes")}</div>
                    </>
                ) : null}
                {entity === "pathways" ? (
                    <>
                        {select("programVersionId", "Maquette", options.programVersions, true)}
                        {slugInput("name", "Nom")}
                        {input("campus", "Campus")}
                        {input("parcoursupCode", "Code Parcoursup")}
                        {input("sourceUrl", "Fiche Parcoursup", "url")}
                        {input("order", "Ordre", "number", true)}
                        <div className="md:col-span-2">{textarea("description", "Description")}</div>
                    </>
                ) : null}
                {entity === "blocks" ? (
                    <>
                        {select("programVersionId", "Maquette", options.programVersions, true)}
                        {select("pathwayId", "Parcours optionnel", pathwayOptions)}
                        {select("type", "Type", ["HEALTH", "DISCIPLINARY", "TRANSVERSAL", "SPECIALTY", "OTHER"].map((value) => ({ value, label: value })), true)}
                        {slugInput("title", "Titre")}
                        {input("ects", "ECTS", "number")}
                        {input("order", "Ordre", "number", true)}
                        <div className="md:col-span-2">{textarea("description", "Description")}</div>
                    </>
                ) : null}
                {entity === "course-units" ? (
                    <>
                        {select("programVersionId", "Maquette", options.programVersions, true)}
                        {select("pathwayId", "Parcours optionnel", pathwayOptions)}
                        {select("blockId", "Bloc", blockOptions, true)}
                        {input("code", "Code")}
                        {slugInput("title", "Titre")}
                        {input("shortTitle", "Titre court")}
                        {input("semester", "Semestre", "number")}
                        {input("ects", "ECTS", "number")}
                        {input("order", "Ordre", "number", true)}
                        <div className="md:col-span-2">
                            <Field label="Thèmes associés">
                                <MultipleSelector
                                    options={options.themes}
                                    value={options.themes.filter((option) => ((values.themeIds as string[]) ?? []).includes(option.value))}
                                    onChange={(selected) => set("themeIds", selected.map((option) => option.value))}
                                    placeholder="Sélectionner des thèmes"
                                    emptyIndicator={<p className="py-4 text-center text-sm">Aucun thème trouvé.</p>}
                                />
                            </Field>
                        </div>
                        <div className="md:col-span-2">{textarea("description", "Description")}</div>
                    </>
                ) : null}
            </div>

            <div className="space-y-3 rounded-base border border-default bg-neutral-primary-soft p-4 shadow-xs">
                {entity === "program-versions"
                    ? checkbox("isCurrent", "Maquette courante", "Cette maquette est la version de référence pour ce programme.")
                    : null}
                {entity === "pathways"
                    ? checkbox("isDefault", "Parcours par défaut", "Ce parcours est proposé par défaut pour la maquette.")
                    : null}
                {entity === "course-units"
                    ? checkbox("isCommonToAllPathways", "Commune à tous les parcours", "Cette UE est partagée par tous les parcours de la maquette.")
                    : null}
                {entity === "course-units"
                    ? checkbox("isHealthAccessRelevant", "Pertinente pour l'accès santé", "Cette UE contribue au parcours d'accès aux études de santé.")
                    : null}
                {checkbox("isActive", `${healthEntityLabels[entity].singular} actif`, "Un élément inactif reste dans le référentiel mais n'est plus exploitable publiquement.")}
                {checkbox("isPublished", `${healthEntityLabels[entity].singular} publié`, "La publication contrôle la visibilité de cet élément sur les pages publiques.")}
            </div>

            <div className="mt-2 flex justify-end">
                <Button asChild variant="secondary" className="mr-4">
                    <Link href={`/admin/health/${entity}`}>Annuler</Link>
                </Button>
                <FormSubmitButton
                    crudMode={record?.id ? "edit" : "add"}
                    loading={submitting}
                />
            </div>
        </form>
    );
}

function Field({
    label,
    required = false,
    children,
}: {
    label: string;
    required?: boolean;
    children: React.ReactNode;
}) {
    return (
        <div className="space-y-2">
            <Label className={required ? 'after:ml-0.5 after:text-destructive after:content-["*"]' : undefined}>
                {label}
            </Label>
            {children}
        </div>
    );
}
