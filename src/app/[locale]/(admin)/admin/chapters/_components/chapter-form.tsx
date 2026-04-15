"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MultiSelect } from "@/components/ui/multi-select";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { createChapter, updateChapter } from "@/core/chapter";
import type { CreateChapterValues } from "@/core/chapter";
import { createChapterSchema } from "@/lib/validation";
import { slugifyText } from "@/lib/utils";
import type { Option } from "@/types/option";
import { useCommonTranslations } from "@/hooks/use-translations";

interface ChapterFormProps {
  crudMode: "add" | "edit";
  initialData: {
    id?: string;
    title: string;
    slug: string;
    level: string;
    order?: number;
    subjectId?: string;
    domainIds?: string[];
    isActive: boolean;
    isPublished: boolean;
  };
  subjects: Option[];
  domains: Option[];
  cancelHref?: string;
}

export function ChapterForm({
  crudMode,
  initialData,
  subjects,
  domains,
  cancelHref = "/admin/chapters",
}: ChapterFormProps) {
  const common = useCommonTranslations();
  const [slugEdited, setSlugEdited] = useState(Boolean(initialData.id));

  const subjectOptions = useMemo(
    () => [...subjects].sort((a, b) => a.label.localeCompare(b.label, "fr", { sensitivity: "base" })),
    [subjects]
  );
  const domainOptions = useMemo(
    () => [...domains].sort((a, b) => a.label.localeCompare(b.label, "fr", { sensitivity: "base" })),
    [domains]
  );

  const form = useForm<CreateChapterValues>({
    defaultValues: {
      title: initialData.title,
      slug: initialData.slug,
      level: initialData.level,
      order: initialData.order,
      subjectId: initialData.subjectId ?? "",
      domainIds: initialData.domainIds ?? [],
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
    formData.append("title", values.title);
    formData.append("slug", values.slug);
    formData.append("level", values.level);
    formData.append("order", String(values.order));
    formData.append("subjectId", values.subjectId);
    values.domainIds.forEach((domainId) => formData.append("domainIds", domainId));
    formData.append("isActive", String(values.isActive));
    formData.append("isPublished", String(values.isPublished));

    if (!initialData.id) {
      await createChapter(formData);
    } else {
      await updateChapter(initialData.id, formData);
    }
  };

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

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
                <Input type="text" placeholder="Nom du chapitre" {...field} />
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
          <FormField
            name="level"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Niveau</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="terminale" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                    className="h-4 w-4 rounded-base border border-default accent-brand bg-neutral-primary-soft"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="cursor-pointer">Chapitre actif</FormLabel>
                  <p className="text-xs text-muted-foreground">
                    Un chapitre inactif reste dans le référentiel mais n&apos;est plus exploitable publiquement.
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
                    className="h-4 w-4 rounded-base border border-default accent-brand bg-neutral-primary-soft disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="cursor-pointer">Chapitre publié</FormLabel>
                  <p className="text-xs text-muted-foreground">
                    La publication contrôle la visibilité du chapitre dans l&apos;entraînement public.
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