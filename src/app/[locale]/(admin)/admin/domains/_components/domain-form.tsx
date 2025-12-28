"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

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

import { createDomain, updateDomain } from "@/core/domain";
import { CreateDomainValues } from "@/core/domain";
import { createDomainSchema } from "@/lib/validation";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { Option } from "@/types/option";
import { useCommonTranslations } from "@/hooks/use-translations";

interface DomainFormProps {
  crudMode: "add" | "edit";
  initialData: {
    id?: string;
    longDescription: string;
    shortDescription: string;
    subjectId: string | undefined;
    order?: number | null;
    discipline?: "PHYSIQUE" | "CHIMIE" | "TRANSVERSAL" | null;
    isActive: boolean;
    scopes?: DomainScopeForm[];
  };
  subjects: Option[];
  diplomas: Option[];
  grades: Option[];
  divisions: Option[];
  teachings: Option[];
  curriculums: Option[];
}

type DomainScopeForm = {
  diplomaId?: string | null;
  gradeId?: string | null;
  divisionId?: string | null;
  teachingId?: string | null;
  curriculumId?: string | null;
  labelOverride?: string | null;
  order?: number | null;
  isActive?: boolean;
};

const disciplineOptions = [
  { value: "PHYSIQUE", label: "Physique" },
  { value: "CHIMIE", label: "Chimie" },
  { value: "TRANSVERSAL", label: "Transversal" },
];

export const DomainForm = ({
  crudMode,
  initialData,
  subjects,
  diplomas,
  grades,
  divisions,
  teachings,
  curriculums,
}: DomainFormProps) => {
  const common = useCommonTranslations();
  const [scopes, setScopes] = useState<DomainScopeForm[]>(
    initialData.scopes?.map((scope) => ({
      ...scope,
      labelOverride: scope.labelOverride ?? "",
      order: scope.order ?? null,
      isActive: scope.isActive ?? true,
    })) ?? []
  );

  const form = useForm<CreateDomainValues>({
    defaultValues: {
      longDescription: initialData.longDescription,
      shortDescription: initialData.shortDescription,
      subjectId: initialData.subjectId,
      order: initialData.order ?? undefined,
      discipline: initialData.discipline ?? undefined,
      isActive: initialData.isActive,
    },
    resolver: zodResolver(createDomainSchema),
  });

  const onSubmit = async (values: CreateDomainValues) => {
    const formData = new FormData();

    formData.append("longDescription", values.longDescription);
    formData.append("shortDescription", values.shortDescription);
    if (values.subjectId) {
      formData.append("subjectId", values.subjectId);
    }
    if (values.order != null) {
      formData.append("order", String(values.order));
    }
    if (values.discipline) {
      formData.append("discipline", values.discipline);
    }
    formData.append("isActive", String(values.isActive));
    formData.append("scopes", JSON.stringify(scopes));

    if (!initialData.id) {
      await createDomain(formData);
    } else {
      await updateDomain(initialData.id, formData);
    }
  };

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const addScope = () => {
    setScopes((prev) => [
      ...prev,
      {
        diplomaId: null,
        gradeId: null,
        divisionId: null,
        teachingId: null,
        curriculumId: null,
        labelOverride: "",
        order: null,
        isActive: true,
      },
    ]);
  };

  const updateScope = (index: number, updates: Partial<DomainScopeForm>) => {
    setScopes((prev) =>
      prev.map((scope, idx) => (idx === index ? { ...scope, ...updates } : scope))
    );
  };

  const removeScope = (index: number) => {
    setScopes((prev) => prev.filter((_, idx) => idx !== index));
  };

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
              <FormLabel>Nom du domaine</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Ex: Probabilités" {...field} />
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
              <FormLabel>Nom court</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Ex: Probas" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="subjectId"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Matière</FormLabel>
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
                  className="h-4 w-4 rounded-base border border-default accent-brand bg-neutral-primary-soft"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="cursor-pointer">
                  Domaine actif
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          name="discipline"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Discipline (optionnel)</FormLabel>
              <Select
                onValueChange={(value) =>
                  field.onChange(value === "none" ? undefined : value)
                }
                defaultValue={field.value ?? "none"}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une discipline" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="none">Aucune</SelectItem>
                  {disciplineOptions.map((discipline) => (
                    <SelectItem key={discipline.value} value={discipline.value}>
                      {discipline.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="order"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ordre (optionnel)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="1"
                  value={field.value ?? ""}
                  onChange={(event) =>
                    field.onChange(
                      event.target.value ? parseInt(event.target.value, 10) : undefined
                    )
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-3 rounded-base border border-default bg-neutral-primary-soft p-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold text-heading">Portée du domaine</div>
              <p className="text-xs text-muted-foreground">
                Associe le domaine à un diplôme / niveau / enseignement / programme (optionnel).
              </p>
            </div>
            <Button type="button" variant="secondary" size="sm" onClick={addScope}>
              <Plus className="h-4 w-4" />
              Ajouter un scope
            </Button>
          </div>

          {scopes.length === 0 ? (
            <p className="text-xs text-muted-foreground">Aucun scope défini.</p>
          ) : (
            <div className="space-y-3">
              {scopes.map((scope, index) => (
                <div
                  key={`scope-${index}`}
                  className="space-y-3 rounded-base border border-default bg-neutral-primary-medium p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-heading">
                      Scope #{index + 1}
                    </span>
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => removeScope(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="space-y-1">
                      <span className="text-xs font-semibold text-muted-foreground">Diplôme</span>
                      <Select
                        value={scope.diplomaId ?? "none"}
                        onValueChange={(value) =>
                          updateScope(index, { diplomaId: value === "none" ? null : value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Tous les diplômes" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Tous les diplômes</SelectItem>
                          {diplomas.map((diploma) => (
                            <SelectItem key={diploma.value} value={diploma.value}>
                              {diploma.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-semibold text-muted-foreground">Niveau</span>
                      <Select
                        value={scope.gradeId ?? "none"}
                        onValueChange={(value) =>
                          updateScope(index, { gradeId: value === "none" ? null : value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Tous les niveaux" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Tous les niveaux</SelectItem>
                          {grades.map((grade) => (
                            <SelectItem key={grade.value} value={grade.value}>
                              {grade.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-semibold text-muted-foreground">Filière</span>
                      <Select
                        value={scope.divisionId ?? "none"}
                        onValueChange={(value) =>
                          updateScope(index, { divisionId: value === "none" ? null : value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Toutes les filières" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Toutes les filières</SelectItem>
                          {divisions.map((division) => (
                            <SelectItem key={division.value} value={division.value}>
                              {division.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="space-y-1">
                      <span className="text-xs font-semibold text-muted-foreground">Enseignement</span>
                      <Select
                        value={scope.teachingId ?? "none"}
                        onValueChange={(value) =>
                          updateScope(index, { teachingId: value === "none" ? null : value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Tous les enseignements" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Tous les enseignements</SelectItem>
                          {teachings.map((teaching) => (
                            <SelectItem key={teaching.value} value={teaching.value}>
                              {teaching.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-semibold text-muted-foreground">Programme</span>
                      <Select
                        value={scope.curriculumId ?? "none"}
                        onValueChange={(value) =>
                          updateScope(index, { curriculumId: value === "none" ? null : value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Tous les programmes" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Tous les programmes</SelectItem>
                          {curriculums.map((curriculum) => (
                            <SelectItem key={curriculum.value} value={curriculum.value}>
                              {curriculum.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="space-y-1 md:col-span-2">
                      <span className="text-xs font-semibold text-muted-foreground">Libellé (optionnel)</span>
                      <Input
                        type="text"
                        placeholder="Libellé surchargé"
                        value={scope.labelOverride ?? ""}
                        onChange={(event) => updateScope(index, { labelOverride: event.target.value })}
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-semibold text-muted-foreground">Ordre</span>
                      <Input
                        type="number"
                        placeholder="1"
                        value={scope.order ?? ""}
                        onChange={(event) =>
                          updateScope(index, {
                            order: event.target.value ? parseInt(event.target.value, 10) : null,
                          })
                        }
                      />
                    </div>
                  </div>
                  <label className="flex items-center gap-2 text-xs text-muted-foreground">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-brand"
                      checked={scope.isActive ?? true}
                      onChange={(event) => updateScope(index, { isActive: event.target.checked })}
                    />
                    Actif dans ce scope
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-2 flex justify-end">
          <Button asChild variant="secondary" className="mr-4">
            <Link href="/admin/domains">{common.cancel}</Link>
          </Button>
          <FormSubmitButton crudMode={crudMode} loading={isSubmitting} />
        </div>
      </form>
    </Form>
  );
};
