"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  createChapterAssignment,
  updateChapterAssignment,
} from "@/core/chapter";
import type { CreateChapterAssignmentValues } from "@/core/chapter";
import {
  chapterAssignmentContextTypeLabels,
  contentVerticalLabels,
  contentVerticalValues,
} from "@/core/chapter/chapter.constants";
import { createChapterAssignmentSchema } from "@/lib/validation";
import type { Option } from "@/types/option";
import { useCommonTranslations } from "@/hooks/use-translations";
import { healthCourseUnitCoverageStatusLabels, healthCourseUnitCoverageStatusValues } from "@/core/health/health.schemas";

interface ChapterAssignmentFormProps {
  crudMode: "add" | "edit";
  initialData: {
    id?: string;
    chapterId: string;
    vertical: CreateChapterAssignmentValues["vertical"];
    contextType: CreateChapterAssignmentValues["contextType"];
    contextId: string;
    titleOverride?: string;
    shortTitleOverride?: string;
    slugOverride?: string;
    descriptionOverride?: string;
    order?: number;
    coverageStatus: CreateChapterAssignmentValues["coverageStatus"];
    sourceUrl?: string;
    sourceLabel?: string;
    sourceCheckedAt?: string;
    isActive: boolean;
    isPublished: boolean;
  };
  subjects: Option[];
  healthCourseUnits: Option[];
  healthTeachingElements: Option[];
  cancelHref?: string;
  redirectTo?: string | null;
  revalidatePaths?: string[];
}

const getAllowedContextTypes = (vertical: CreateChapterAssignmentValues["vertical"]) => {
  switch (vertical) {
    case "SECONDARY":
      return ["SUBJECT"] as const;
    case "HEALTH":
      return ["HEALTH_COURSE_UNIT", "HEALTH_TEACHING_ELEMENT"] as const;
    case "BTS":
      return ["BTS_TEACHING"] as const;
    case "COMMON":
      return ["GENERIC"] as const;
    default:
      return ["SUBJECT"] as const;
  }
};

export function ChapterAssignmentForm({
  crudMode,
  initialData,
  subjects,
  healthCourseUnits,
  healthTeachingElements,
  cancelHref = `/admin/chapters/${initialData.chapterId}`,
  redirectTo,
  revalidatePaths,
}: ChapterAssignmentFormProps) {
  const common = useCommonTranslations();

  const verticalOptions = useMemo(
    () =>
      contentVerticalValues.map((value) => ({
        value,
        label: contentVerticalLabels[value],
      })),
    []
  );
  const coverageStatusOptions = useMemo(
    () =>
      healthCourseUnitCoverageStatusValues.map((value) => ({
        value,
        label: healthCourseUnitCoverageStatusLabels[value],
      })),
    []
  );
  const subjectOptions = useMemo(
    () => [...subjects].sort((a, b) => a.label.localeCompare(b.label, "fr", { sensitivity: "base" })),
    [subjects]
  );
  const healthCourseUnitOptions = useMemo(
    () =>
      [...healthCourseUnits].sort((a, b) => a.label.localeCompare(b.label, "fr", { sensitivity: "base" })),
    [healthCourseUnits]
  );
  const healthTeachingElementOptions = useMemo(
    () =>
      [...healthTeachingElements].sort((a, b) =>
        a.label.localeCompare(b.label, "fr", { sensitivity: "base" })
      ),
    [healthTeachingElements]
  );

  const form = useForm<CreateChapterAssignmentValues>({
    defaultValues: {
      chapterId: initialData.chapterId,
      vertical: initialData.vertical,
      contextType: initialData.contextType,
      contextId: initialData.contextId,
      titleOverride: initialData.titleOverride ?? "",
      shortTitleOverride: initialData.shortTitleOverride ?? "",
      slugOverride: initialData.slugOverride ?? "",
      descriptionOverride: initialData.descriptionOverride ?? "",
      order: initialData.order,
      coverageStatus: initialData.coverageStatus,
      sourceUrl: initialData.sourceUrl ?? "",
      sourceLabel: initialData.sourceLabel ?? "",
      sourceCheckedAt: initialData.sourceCheckedAt ?? "",
      isActive: initialData.isActive,
      isPublished: initialData.isPublished,
    },
    resolver: zodResolver(createChapterAssignmentSchema),
  });

  const watchedVertical = form.watch("vertical");
  const watchedContextType = form.watch("contextType");

  useEffect(() => {
    const allowedContextTypes = getAllowedContextTypes(watchedVertical);
    if (!allowedContextTypes.some((value) => value === watchedContextType)) {
      form.setValue("contextType", allowedContextTypes[0], { shouldValidate: true });
      form.setValue("contextId", "", { shouldValidate: true });
    }
  }, [form, watchedContextType, watchedVertical]);

  const onSubmit = async (values: CreateChapterAssignmentValues) => {
    const formData = new FormData();
    formData.append("chapterId", values.chapterId);
    formData.append("vertical", values.vertical);
    formData.append("contextType", values.contextType);
    formData.append("contextId", values.contextId);
    formData.append("titleOverride", values.titleOverride ?? "");
    formData.append("shortTitleOverride", values.shortTitleOverride ?? "");
    formData.append("slugOverride", values.slugOverride ?? "");
    formData.append("descriptionOverride", values.descriptionOverride ?? "");
    formData.append("order", String(values.order));
    formData.append("coverageStatus", values.coverageStatus);
    formData.append("sourceUrl", values.sourceUrl ?? "");
    formData.append("sourceLabel", values.sourceLabel ?? "");
    formData.append("sourceCheckedAt", values.sourceCheckedAt ?? "");
    formData.append("isActive", String(values.isActive));
    formData.append("isPublished", String(values.isPublished));

    if (!initialData.id) {
      await createChapterAssignment(initialData.chapterId, formData, { redirectTo, revalidatePaths });
    } else {
      await updateChapterAssignment(initialData.id, formData, { redirectTo, revalidatePaths });
    }
  };

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    watch,
    setValue,
  } = form;

  const watchedContextTypeValue = watch("contextType");
  const watchedContextTypeVertical = watch("vertical");
  const allowedContextTypes = getAllowedContextTypes(watchedContextTypeVertical);
  const contextOptions = allowedContextTypes.map((value) => ({
    value,
    label: chapterAssignmentContextTypeLabels[value],
  }));
  const checkboxClassName = "h-4 w-4 rounded-xs border border-default-medium bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft";

  useEffect(() => {
    if (!allowedContextTypes.some((value) => value === watchedContextTypeValue)) {
      setValue("contextType", allowedContextTypes[0], { shouldDirty: true, shouldValidate: true });
      setValue("contextId", "", { shouldDirty: true, shouldValidate: true });
    }
  }, [allowedContextTypes, setValue, watchedContextTypeValue]);

  const renderContextInput = () => {
    switch (watchedContextTypeValue) {
      case "SUBJECT":
        return (
          <FormField
            name="contextId"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contexte</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner une matière" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjectOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      case "HEALTH_COURSE_UNIT":
        return (
          <FormField
            name="contextId"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contexte</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner une UE santé" />
                    </SelectTrigger>
                    <SelectContent>
                      {healthCourseUnitOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      case "HEALTH_TEACHING_ELEMENT":
        return (
          <FormField
            name="contextId"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contexte</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un EC santé" />
                    </SelectTrigger>
                    <SelectContent>
                      {healthTeachingElementOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      default:
        return (
          <FormField
            name="contextId"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contexte</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Identifiant ou libellé technique du contexte"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
    }
  };

  return (
    <Form {...form}>
      <form className="w-full space-y-4" noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-base border border-default bg-neutral-primary-soft p-4 text-sm text-muted-foreground">
          <p className="font-medium text-body">Chapitre</p>
          <p>{initialData.id ? "Édition du rattachement" : "Création du rattachement"}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            name="vertical"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Verticale</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir une verticale" />
                    </SelectTrigger>
                    <SelectContent>
                      {verticalOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="contextType"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type de contexte</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un type" />
                    </SelectTrigger>
                    <SelectContent>
                      {contextOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {renderContextInput()}

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            name="titleOverride"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titre local</FormLabel>
                <FormControl>
                  <Input type="text" {...field} value={field.value ?? ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="shortTitleOverride"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titre court local</FormLabel>
                <FormControl>
                  <Input type="text" {...field} value={field.value ?? ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            name="slugOverride"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug local</FormLabel>
                <FormControl>
                  <Input type="text" {...field} value={field.value ?? ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="order"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ordre</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    max={1000}
                    value={field.value ?? ""}
                    onChange={(event) => field.onChange(Number(event.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="descriptionOverride"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description locale</FormLabel>
              <FormControl>
                <Textarea className="min-h-28" {...field} value={field.value ?? ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            name="coverageStatus"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Statut de couverture</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un statut" />
                    </SelectTrigger>
                    <SelectContent>
                      {coverageStatusOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="sourceCheckedAt"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date de vérification source</FormLabel>
                <FormControl>
                  <Input type="date" {...field} value={field.value ?? ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            name="sourceUrl"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Source URL</FormLabel>
                <FormControl>
                  <Input type="text" {...field} value={field.value ?? ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="sourceLabel"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Libellé source</FormLabel>
                <FormControl>
                  <Input type="text" {...field} value={field.value ?? ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-3 rounded-base border border-default bg-neutral-primary-soft p-4 shadow-xs">
          <FormField
            name="isActive"
            control={control}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={(event) => field.onChange(event.target.checked)}
                    className={checkboxClassName}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="cursor-pointer">Rattachement actif</FormLabel>
                  <p className="text-xs text-muted-foreground">
                    Un rattachement inactif reste dans le référentiel mais n&apos;est plus exploitable publiquement.
                  </p>
                </div>
              </FormItem>
            )}
          />

          <FormField
            name="isPublished"
            control={control}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <input
                    type="checkbox"
                    checked={field.value}
                    disabled={!watch("isActive")}
                    onChange={(event) => field.onChange(event.target.checked)}
                    className={`${checkboxClassName} disabled:cursor-not-allowed disabled:opacity-50`}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="cursor-pointer">Rattachement publié</FormLabel>
                  <p className="text-xs text-muted-foreground">
                    La publication contrôle la visibilité du rattachement dans les parcours associés.
                  </p>
                </div>
              </FormItem>
            )}
          />
        </div>

        <div className="mt-2 flex justify-end">
          <Button asChild variant="secondary" className="mr-4">
            <Link href={cancelHref}>{common.cancel}</Link>
          </Button>
          <FormSubmitButton crudMode={crudMode} loading={isSubmitting} />
        </div>
      </form>
    </Form>
  );
}
