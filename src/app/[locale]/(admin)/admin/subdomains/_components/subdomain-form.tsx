"use client";

import * as React from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { useCommonTranslations } from "@/hooks/use-translations";
import { slugifyText } from "@/lib/utils";

import { createSubdomainSchema } from "@/lib/validation";
import {
  createSubdomain,
  CreateSubdomainValues,
  updateSubdomain,
} from "@/core/subdomain";

type DomainOption = {
  value: string;
  label: string;
  subjectId: string;
};

type SubjectOption = {
  value: string;
  label: string;
};

interface SubdomainFormProps {
  crudMode: "add" | "edit";
  initialData: {
    id?: string;
    title: string;
    shortTitle?: string;
    slug: string;
    description?: string;
    order?: number | null;
    subjectId: string | undefined;
    domainId: string | undefined;
    isActive: boolean;
  };
  subjects: SubjectOption[];
  domains: DomainOption[];
}

export const SubdomainForm = ({
  crudMode,
  initialData,
  subjects,
  domains,
}: SubdomainFormProps) => {
  const common = useCommonTranslations();
  const form = useForm<CreateSubdomainValues>({
    defaultValues: {
      title: initialData.title,
      shortTitle: initialData.shortTitle ?? undefined,
      slug: initialData.slug,
      description: initialData.description ?? undefined,
      order: initialData.order ?? undefined,
      subjectId: initialData.subjectId,
      domainId: initialData.domainId,
      isActive: initialData.isActive,
    },
    resolver: zodResolver(createSubdomainSchema),
  });

  const { handleSubmit, control, formState, setValue, watch, getValues } = form;
  const watchedSubjectId = watch("subjectId");
  const watchedDomainId = watch("domainId");

  // Domaines filtrés par matière sélectionnée
  const filteredDomains = React.useMemo(
    () =>
      domains
        .filter((d) => !watchedSubjectId || d.subjectId === watchedSubjectId)
        .sort((a, b) => a.label.localeCompare(b.label, "fr", { sensitivity: "base" })),
    [domains, watchedSubjectId]
  );

  // Si le domaine sélectionné n'appartient plus à la matière, on le réinitialise
  React.useEffect(() => {
    if (!watchedDomainId) return;
    const matchesSubject = filteredDomains.some((d) => d.value === watchedDomainId);
    if (!matchesSubject) {
      setValue("domainId", "", { shouldValidate: true, shouldDirty: true });
    }
  }, [filteredDomains, setValue, watchedDomainId]);

  const handleAutoSlug = () => {
    const title = getValues("title")?.trim();
    if (!title) return;
    const slug = slugifyText(title);
    if (slug) setValue("slug", slug, { shouldValidate: true, shouldDirty: true });
  };

  const onSubmit = async (values: CreateSubdomainValues) => {
    const formData = new FormData();
    formData.append("title", values.title);
    if (values.shortTitle) formData.append("shortTitle", values.shortTitle);
    formData.append("slug", values.slug);
    if (values.description) formData.append("description", values.description);
    if (values.order != null) formData.append("order", String(values.order));
    formData.append("subjectId", values.subjectId);
    formData.append("domainId", values.domainId);
    formData.append("isActive", String(values.isActive));

    if (!initialData.id) {
      await createSubdomain(formData);
    } else {
      await updateSubdomain(initialData.id, formData);
    }
  };

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
                <Input
                  type="text"
                  placeholder="Ex : Acides, bases et pH"
                  {...field}
                  onBlur={(event) => {
                    field.onBlur();
                    if (!getValues("slug")?.trim()) {
                      handleAutoSlug();
                    }
                    event.currentTarget.blur();
                  }}
                />
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
              <FormLabel>Titre court (optionnel)</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Ex : Acides / bases"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="slug"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <div className="flex gap-2">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="ex : acides-bases-ph"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <Button type="button" variant="outline" onClick={handleAutoSlug}>
                  Générer depuis le titre
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Lettres minuscules, chiffres et tirets uniquement. Unique par matière.
              </p>
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
          name="domainId"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Domaine</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value ?? ""}
                disabled={!watchedSubjectId}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        watchedSubjectId
                          ? "Sélectionner un domaine"
                          : "Sélectionne d'abord une matière"
                      }
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {filteredDomains.map((domain) => (
                    <SelectItem key={domain.value} value={domain.value}>
                      {domain.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Le domaine doit appartenir à la même matière que le sous-domaine.
              </p>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="description"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description (optionnel)</FormLabel>
              <FormControl>
                <Textarea
                  rows={3}
                  placeholder="Court descriptif pédagogique"
                  {...field}
                  value={field.value ?? ""}
                />
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
                <FormLabel className="cursor-pointer">Sous-domaine actif</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <div className="mt-2 flex justify-end">
          <Button asChild variant="secondary" className="mr-4">
            <Link href="/admin/subdomains">{common.cancel}</Link>
          </Button>
          <FormSubmitButton crudMode={crudMode} loading={formState.isSubmitting} />
        </div>
      </form>
    </Form>
  );
};
