"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { createQuizQuestion, updateQuizQuestion } from "@/core/chapter";
import type { CreateQuizQuestionValues } from "@/core/chapter";
import { createQuizQuestionSchema } from "@/lib/validation";
import { useCommonTranslations } from "@/hooks/use-translations";

interface QuizQuestionFormProps {
  crudMode: "add" | "edit";
  chapterId: string;
  initialData: {
    id?: string;
    difficulty: "EASY" | "MEDIUM" | "HARD";
    question: string;
    choices: string[];
    correctChoiceIndex: number;
    explanation: string;
    order?: number;
    isPublished: boolean;
  };
  cancelHref: string;
}

const choiceLabels = ["A", "B", "C", "D"] as const;

export function QuizQuestionForm({
  crudMode,
  chapterId,
  initialData,
  cancelHref,
}: QuizQuestionFormProps) {
  const common = useCommonTranslations();

  const form = useForm<CreateQuizQuestionValues>({
    defaultValues: {
      difficulty: initialData.difficulty,
      question: initialData.question,
      choices: initialData.choices.length === 4 ? initialData.choices : ["", "", "", ""],
      correctChoiceIndex: initialData.correctChoiceIndex,
      explanation: initialData.explanation,
      order: initialData.order,
      isPublished: initialData.isPublished,
    },
    resolver: zodResolver(createQuizQuestionSchema),
  });

  const onSubmit = async (values: CreateQuizQuestionValues) => {
    const formData = new FormData();
    formData.append("difficulty", values.difficulty);
    formData.append("question", values.question);
    values.choices.forEach((choice) => formData.append("choices", choice));
    formData.append("correctChoiceIndex", String(values.correctChoiceIndex));
    formData.append("explanation", values.explanation);
    formData.append("order", String(values.order));
    formData.append("isPublished", String(values.isPublished));

    if (!initialData.id) {
      await createQuizQuestion(chapterId, formData);
    } else {
      await updateQuizQuestion(initialData.id, formData);
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
        <div className="grid gap-4 md:grid-cols-3">
          <FormField
            name="difficulty"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Difficulté</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un niveau" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="EASY">Facile</SelectItem>
                    <SelectItem value="MEDIUM">Moyen</SelectItem>
                    <SelectItem value="HARD">Difficile</SelectItem>
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
            name="correctChoiceIndex"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bonne réponse</FormLabel>
                <Select
                  value={String(field.value)}
                  onValueChange={(value) => field.onChange(Number(value))}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir la bonne réponse" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {choiceLabels.map((label, index) => (
                      <SelectItem key={label} value={String(index)}>
                        {label}
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
          name="question"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Tu peux utiliser le TeX avec $...$ ou $$...$$"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {choiceLabels.map((label, index) => (
            <FormField
              key={label}
              name={`choices.${index}`}
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Choix {label}</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder={`Réponse ${label}`} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>

        <FormField
          name="explanation"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Explication</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Explication affichée après la réponse"
                  {...field}
                />
              </FormControl>
              <FormMessage />
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
                  onChange={(event) => field.onChange(event.target.checked)}
                  className="h-4 w-4 rounded-base border border-default accent-brand bg-neutral-primary-soft"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="cursor-pointer">Question publiée</FormLabel>
                <p className="text-xs text-muted-foreground">
                  Une question non publiée reste éditable mais n&apos;apparaît pas dans le module d&apos;entraînement.
                </p>
              </div>
            </FormItem>
          )}
        />

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