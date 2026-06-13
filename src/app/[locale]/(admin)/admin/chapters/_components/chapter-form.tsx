"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MultiSelect } from "@/components/ui/multi-select";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { createChapter, updateChapter } from "@/core/chapter";
import type { CreateChapterValues } from "@/core/chapter";
import {
  contentVerticalLabels,
  contentVerticalValues,
  getChapterLevelLabel,
} from "@/core/chapter/chapter.constants";
import { createChapterSchema } from "@/lib/validation";
import { slugifyText } from "@/lib/utils";
import type { Option } from "@/types/option";
import { useCommonTranslations } from "@/hooks/use-translations";
import { healthCourseUnitCoverageStatusLabels, healthCourseUnitCoverageStatusValues } from "@/core/health/health.schemas";

interface ChapterFormProps {
  crudMode: "add" | "edit";
  initialData: {
    id?: string;
    vertical: CreateChapterValues["vertical"];
    title: string;
    slug: string;
    shortTitle?: string;
    description?: string;
    level: string;
    order?: number;
    subjectId?: string;
    domainIds?: string[];
    coverageStatus: CreateChapterValues["coverageStatus"];
    sourceUrl?: string;
    sourceLabel?: string;
    sourceCheckedAt?: string;
    isActive: boolean;
    isPublished: boolean;
  };
  subjects: Option[];
  domains: Option[];
  cancelHref?: string;
  redirectTo?: string | null;
  revalidatePaths?: string[];
  entityLabel?: string;
}

export function ChapterForm({
  crudMode,
  initialData,
  subjects,
  domains,
  cancelHref = "/admin/chapters",
  redirectTo,
  revalidatePaths,
  entityLabel = "Chapitre",
}: ChapterFormProps) {
  const common = useCommonTranslations();
  const [slugEdited, setSlugEdited] = useState(Boolean(initialData.id));
  const entityLabelLower = entityLabel.toLowerCase();

  const subjectOptions = useMemo(
    () => [...subjects].sort((a, b) => a.label.localeCompare(b.label, "fr", { sensitivity: "base" })),
    [subjects]
  );
  const domainOptions = useMemo(
    () => [...domains].sort((a, b) => a.label.localeCompare(b.label, "fr", { sensitivity: "base" })),
    [domains]
  );
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

  const form = useForm<CreateChapterValues>({
    defaultValues: {
      vertical: initialData.vertical,
      title: initialData.title,
      slug: initialData.slug,
      shortTitle: initialData.shortTitle ?? "",
      description: initialData.description ?? "",
      level: initialData.level,
      order: initialData.order,
      subjectId: initialData.subjectId ?? "",
      domainIds: initialData.domainIds ?? [],
      coverageStatus: initialData.coverageStatus,
      sourceUrl: initialData.sourceUrl ?? "",
      sourceLabel: initialData.sourceLabel ?? "",
      sourceCheckedAt: initialData.sourceCheckedAt ?? "",
      isActive: initialData.isActive,
      isPublished: initialData.isPublished,
    },
    resolver: zodResolver(createChapterSchema),
  });

  const watchedTitle = form.watch("title");
  const watchedIsActive = form.watch("isActive");

  useEffect(() => {
    if (!slugEdited) {
      form.setValue("slug", slugifyText(watchedTitle), { shouldValidate: true });
    }
  }, [form, slugEdited, watchedTitle]);

  useEffect(() => {
    if (!watchedIsActive && form.getValues("isPublished")) {
      form.setValue("isPublished", false, { shouldDirty: true, shouldValidate: true });
    }
  }, [form, watchedIsActive]);

  const onSubmit = async (values: CreateChapterValues) => {
    const formData = new FormData();
    formData.append("vertical", values.vertical);
    formData.append("title", values.title);
    formData.append("slug", values.slug);
    formData.append("shortTitle", values.shortTitle ?? "");
    formData.append("description", values.description ?? "");
    formData.append("level", values.level);
    formData.append("order", String(values.order));
    formData.append("subjectId", values.subjectId);
    values.domainIds.forEach((domainId) => formData.append("domainIds", domainId));
    formData.append("coverageStatus", values.coverageStatus);
    formData.append("sourceUrl", values.sourceUrl ?? "");
    formData.append("sourceLabel", values.sourceLabel ?? "");
    formData.append("sourceCheckedAt", values.sourceCheckedAt ?? "");
    formData.append("isActive", String(values.isActive));
    formData.append("isPublished", String(values.isPublished));

    if (!initialData.id) {
      await createChapter(formData, { redirectTo, revalidatePaths });
    } else {
      await updateChapter(initialData.id, formData, { redirectTo, revalidatePaths });
    }
  };

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

    const checkboxClassName = "h-4 w-4 rounded-xs border border-default-medium bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft";

  return (
    <Form {...form}>
      <form className="w-full space-y-4" noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormField
          name="title"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titre</FormLabel>
              <FormControl>
                <Input type="text" placeholder={`Nom du ${entityLabelLower}`} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            name="vertical"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Verticale</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
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
            name="shortTitle"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titre court</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Glucides" {...field} value={field.value ?? ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="description"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-28"
                  placeholder="Décris brièvement le chapitre"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            name="slug"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="transformation-acide-base-et-ph"
                    {...field}
                    onChange={(event) => {
                      setSlugEdited(true);
                      field.onChange(slugifyText(event.target.value));
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {initialData.id ? (
            <FormField
              name="level"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Niveau hérité</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      value={getChapterLevelLabel(field.value)}
                      readOnly
                      disabled
                    />
                  </FormControl>
                  <p className="text-xs text-muted-foreground">
                    Champ conservé pour compatibilité. Le niveau doit désormais être déduit du contexte du chapitre.
                  </p>
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : (
            <div className="rounded-base border border-dashed border-default bg-neutral-primary-soft p-4 text-sm text-muted-foreground">
              Le niveau scolaire n&apos;est plus saisi directement sur un chapitre. Il doit provenir de son contexte de rattachement.
            </div>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            name="order"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ordre</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={1}
                    max={1000}
                    value={field.value ?? ""}
                    onChange={(event) => field.onChange(Number(event.target.value))}
                  />
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
                <FormControl>
                  <MultiSelect
                    options={subjectOptions}
                    selected={field.value ? [field.value] : []}
                    onChange={(selected) => field.onChange(selected[selected.length - 1] ?? "")}
                    placeholder="Sélectionner une matière"
                    searchPlaceholder="Rechercher une matière..."
                    emptyText="Aucune matière trouvée."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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
                  <Input type="text" placeholder="https://..." {...field} value={field.value ?? ""} />
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
                  <Input type="text" placeholder="Source officielle, PDF, etc." {...field} value={field.value ?? ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="domainIds"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Domaines associés</FormLabel>
              <FormControl>
                <MultiSelect
                  options={domainOptions}
                  selected={field.value ?? []}
                  onChange={field.onChange}
                  placeholder="Sélectionner un ou plusieurs domaines"
                  searchPlaceholder="Rechercher un domaine..."
                  emptyText="Aucun domaine trouvé."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
                    <FormLabel className="cursor-pointer">{entityLabel} actif</FormLabel>
                  <p className="text-xs text-muted-foreground">
                      Un {entityLabelLower} inactif reste dans le référentiel mais n&apos;est plus exploitable publiquement.
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
                    disabled={!watchedIsActive}
                    onChange={(event) => field.onChange(event.target.checked)}
                    className={`${checkboxClassName} disabled:cursor-not-allowed disabled:opacity-50`}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="cursor-pointer">{entityLabel} publié</FormLabel>
                  <p className="text-xs text-muted-foreground">
                    La publication contrôle la visibilité du {entityLabelLower} dans l&apos;entraînement public.
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
