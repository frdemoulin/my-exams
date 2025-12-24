"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

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
  };
  subjects: Option[];
}

const disciplineOptions = [
  { value: "PHYSIQUE", label: "Physique" },
  { value: "CHIMIE", label: "Chimie" },
  { value: "TRANSVERSAL", label: "Transversal" },
];

export const DomainForm = ({
  crudMode,
  initialData,
  subjects,
}: DomainFormProps) => {
  const common = useCommonTranslations();

  const form = useForm<CreateDomainValues>({
    defaultValues: {
      longDescription: initialData.longDescription,
      shortDescription: initialData.shortDescription,
      subjectId: initialData.subjectId,
      order: initialData.order ?? undefined,
      discipline: initialData.discipline ?? undefined,
    },
    resolver: zodResolver(createDomainSchema),
  });

  const onSubmit = async (values: CreateDomainValues) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        formData.append(key, String(value));
      }
    });

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
