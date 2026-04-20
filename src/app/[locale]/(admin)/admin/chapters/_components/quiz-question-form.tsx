"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { z } from "zod";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { MathContent } from "@/components/training/math-content";
import { createQuizQuestion, updateQuizQuestion } from "@/core/chapter";
import { createQuizQuestionSchema } from "@/lib/validation";
import { useCommonTranslations } from "@/hooks/use-translations";
import type { Option } from "@/types/option";

const quizQuestionFormSchema = createQuizQuestionSchema.extend({
  chapterId: z.string().trim().min(1, { message: "Chapitre requis" }),
});

type QuizQuestionFormValues = z.infer<typeof quizQuestionFormSchema>;

interface QuizQuestionFormProps {
  crudMode: "add" | "edit";
  initialData: {
    id?: string;
    chapterId: string;
    difficulty: "EASY" | "MEDIUM" | "HARD";
    question: string;
    choices: string[];
    correctChoiceIndex: number;
    explanation: string;
    order?: number;
    isPublished: boolean;
  };
  cancelHref: string;
  chapterOptions?: Option[];
  redirectTo?: string | null;
  revalidatePaths?: string[];
}

const choiceLabels = ["A", "B", "C", "D"] as const;
const richContentHelpText = 'Tex: $...$ ou $$...$$. Image/schéma: ![Légende](/uploads/mon-schema.png).';

export function QuizQuestionForm({
  crudMode,
  initialData,
  cancelHref,
  chapterOptions,
  redirectTo,
  revalidatePaths,
}: QuizQuestionFormProps) {
  const common = useCommonTranslations();
  const sortedChapterOptions = useMemo(
    () => [...(chapterOptions ?? [])].sort((left, right) =>
      left.label.localeCompare(right.label, "fr", { sensitivity: "base", numeric: true })
    ),
    [chapterOptions]
  );

  const form = useForm<QuizQuestionFormValues>({
    defaultValues: {
      chapterId: initialData.chapterId,
      difficulty: initialData.difficulty,
      question: initialData.question,
      choices: initialData.choices.length === 4 ? initialData.choices : ["", "", "", ""],
      correctChoiceIndex: initialData.correctChoiceIndex,
      explanation: initialData.explanation,
      order: initialData.order,
      isPublished: initialData.isPublished,
    },
    resolver: zodResolver(quizQuestionFormSchema),
  });

  const onSubmit = async (values: QuizQuestionFormValues) => {
    const formData = new FormData();
    formData.append("chapterId", values.chapterId);
    formData.append("difficulty", values.difficulty);
    formData.append("question", values.question);
    values.choices.forEach((choice) => formData.append("choices", choice));
    formData.append("correctChoiceIndex", String(values.correctChoiceIndex));
    formData.append("explanation", values.explanation);
    formData.append("order", String(values.order));
    formData.append("isPublished", String(values.isPublished));

    if (!initialData.id) {
      await createQuizQuestion(values.chapterId, formData, { redirectTo, revalidatePaths });
    } else {
      await updateQuizQuestion(initialData.id, formData, { redirectTo, revalidatePaths });
    }
  };

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;
  const previewQuestion = form.watch("question");
  const previewChoices = form.watch("choices");
  const previewExplanation = form.watch("explanation");

    const checkboxClassName = "h-4 w-4 rounded-xs border border-default-medium bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft";

  return (
    <Form {...form}>
      <form className="w-full space-y-4" noValidate onSubmit={handleSubmit(onSubmit)}>
        {sortedChapterOptions.length > 0 ? (
          <FormField
            name="chapterId"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Chapitre</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un chapitre" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {sortedChapterOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : null}

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
                  placeholder="Tu peux utiliser le TeX avec $...$ ou $$...$$, et une image avec ![Légende](/uploads/mon-schema.png)"
                  {...field}
                />
              </FormControl>
              <FormDescription>{richContentHelpText}</FormDescription>
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
                    <Input
                      type="text"
                      placeholder={`Réponse ${label} ou ![Schéma](/uploads/reponse-${label.toLowerCase()}.png)`}
                      {...field}
                    />
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
                  placeholder="Explication affichée après la réponse, avec TeX ou image si besoin"
                  {...field}
                />
              </FormControl>
              <FormDescription>{richContentHelpText}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4 rounded-xl border border-dashed border-border bg-background/60 p-4">
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-foreground">Aperçu live</h3>
            <p className="text-xs text-muted-foreground">
              Le rendu ci-dessous prend en charge le TeX et les images locales via /uploads.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-lg border border-border bg-background p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Question
              </p>
              {previewQuestion.trim() ? (
                <MathContent value={previewQuestion} />
              ) : (
                <p className="text-sm text-muted-foreground">La question apparaîtra ici.</p>
              )}
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {choiceLabels.map((label, index) => {
                const previewChoice = previewChoices[index] ?? "";

                return (
                  <div key={`preview-choice-${label}`} className="rounded-lg border border-border bg-background p-4">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand bg-brand text-xs font-semibold text-white shadow-xs">
                        {label}
                      </span>
                      <div className="min-w-0 flex-1 pt-0.5">
                        {previewChoice.trim() ? (
                          <MathContent value={previewChoice} />
                        ) : (
                          <p className="text-sm text-muted-foreground">Le choix {label} apparaîtra ici.</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-lg border border-border bg-background p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Explication
              </p>
              {previewExplanation.trim() ? (
                <MathContent value={previewExplanation} />
              ) : (
                <p className="text-sm text-muted-foreground">L&apos;explication apparaîtra ici.</p>
              )}
            </div>
          </div>
        </div>

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
                  className={checkboxClassName}
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