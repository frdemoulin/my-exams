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
import { HotspotAdminEditor } from "@/components/admin/hotspot-admin-editor";
import { createQuizQuestion, updateQuizQuestion } from "@/core/chapter";
import {
  resolveCorrectChoiceIndexes,
  type QuizAnswerFormatValue,
} from "@/core/quiz/quiz-answer-format";
import {
  editableQuestionFormatCodes,
  getAnswerFormatForChoiceQuestionFormat,
  getQuestionFormatAdminLabel,
  isEditableChoiceQuestionFormatCode,
  type EditableQuestionFormatCode,
} from "@/core/questions/question-format";
import { createQuizQuestionSchema } from "@/lib/validation";
import { useCommonTranslations } from "@/hooks/use-translations";
import type { Option } from "@/types/option";

const quizQuestionFormSchema = createQuizQuestionSchema.and(
  z.object({
    chapterId: z.string().trim().min(1, { message: "Chapitre requis" }),
  })
);

type QuizQuestionFormValues = z.infer<typeof quizQuestionFormSchema>;

interface QuizQuestionFormProps {
  crudMode: "add" | "edit";
  initialData: {
    id?: string;
    chapterId: string;
    difficulty: "EASY" | "MEDIUM" | "HARD";
    questionFormat: EditableQuestionFormatCode;
    answerFormat: QuizAnswerFormatValue;
    question: string;
    choices: string[];
    correctChoiceIndexes: number[];
    correctChoiceIndex: number;
    explanation: string;
    choiceExplanations: string[];
    shortAnswerType: "text" | "number";
    acceptedAnswers: string;
    numericAnswerValue: string;
    numericAnswerTolerance: string;
    numericAnswerUnit: string;
    numericAnswerAcceptedUnits: string;
    hotspotImageSrc?: string;
    hotspotImageAlt?: string;
    hotspotTargetX?: string;
    hotspotTargetY?: string;
    hotspotTolerance?: string;
    hotspotTargetLabel?: string;
    order?: number;
    isPublished: boolean;
  };
  cancelHref: string;
  chapterOptions?: Option[];
  redirectTo?: string | null;
  revalidatePaths?: string[];
}

const choiceLabels = ["A", "B", "C", "D", "E"] as const;
const richContentHelpText = 'Tex: $...$ ou $$...$$. Image/schéma: ![Légende](/uploads/mon-schema.png).';
const questionFormatOptions = editableQuestionFormatCodes.map((format) => ({
  value: format,
  label: getQuestionFormatAdminLabel(format),
}));
const resolveAnswerFormatForQuestionFormat = (format: EditableQuestionFormatCode) =>
  isEditableChoiceQuestionFormatCode(format)
    ? getAnswerFormatForChoiceQuestionFormat(format)
    : "SINGLE";

export function QuizQuestionForm({
  crudMode,
  initialData,
  cancelHref,
  chapterOptions,
  redirectTo,
  revalidatePaths,
}: QuizQuestionFormProps) {
  const common = useCommonTranslations();
  const sortedChapterOptions = useMemo(() => {
    const list = [...(chapterOptions ?? [])];
    if (
      initialData.chapterId &&
      !list.some((option) => option.value === initialData.chapterId)
    ) {
      list.push({ value: initialData.chapterId, label: initialData.chapterId });
    }
    return list.sort((left, right) =>
      left.label.localeCompare(right.label, "fr", { sensitivity: "base", numeric: true })
    );
  }, [chapterOptions, initialData.chapterId]);
  const initialAnswerFormat =
    resolveAnswerFormatForQuestionFormat(initialData.questionFormat);
  const initialCorrectChoiceIndexes = resolveCorrectChoiceIndexes({
    answerFormat: initialAnswerFormat,
    correctChoiceIndex: initialData.correctChoiceIndex,
    correctChoiceIndexes: initialData.correctChoiceIndexes,
    choiceCount: initialData.choices.length || choiceLabels.length,
  });

  const defaultChoices = Array.from(
    { length: choiceLabels.length },
    (_, i) => initialData.choices[i] ?? ""
  );
  const defaultChoiceExplanations = Array.from(
    { length: choiceLabels.length },
    (_, i) => initialData.choiceExplanations[i] ?? ""
  );

  const form = useForm<QuizQuestionFormValues>({
    defaultValues: {
      chapterId: initialData.chapterId,
      difficulty: initialData.difficulty,
      questionFormat: initialData.questionFormat,
      answerFormat: initialAnswerFormat,
      question: initialData.question,
      choices: defaultChoices,
      correctChoiceIndexes:
        initialCorrectChoiceIndexes.length > 0 ? initialCorrectChoiceIndexes : [0],
      explanation: initialData.explanation,
      choiceExplanations: defaultChoiceExplanations,
      shortAnswerType: initialData.shortAnswerType,
      acceptedAnswers: initialData.acceptedAnswers,
      numericAnswerValue: initialData.numericAnswerValue,
      numericAnswerTolerance: initialData.numericAnswerTolerance,
      numericAnswerUnit: initialData.numericAnswerUnit,
      numericAnswerAcceptedUnits: initialData.numericAnswerAcceptedUnits,
      hotspotImageSrc: initialData.hotspotImageSrc ?? "",
      hotspotImageAlt: initialData.hotspotImageAlt ?? "",
      hotspotTargetX: initialData.hotspotTargetX ?? "0.50",
      hotspotTargetY: initialData.hotspotTargetY ?? "0.50",
      hotspotTolerance: initialData.hotspotTolerance ?? "0.05",
      hotspotTargetLabel: initialData.hotspotTargetLabel ?? "",
      order: initialData.order,
      isPublished: initialData.isPublished,
    },
    resolver: zodResolver(quizQuestionFormSchema),
  });

  const onSubmit = async (values: QuizQuestionFormValues) => {
    const answerFormat = resolveAnswerFormatForQuestionFormat(values.questionFormat);
    const isChoiceQuestion = isEditableChoiceQuestionFormatCode(values.questionFormat);
    const formData = new FormData();
    formData.append("chapterId", values.chapterId);
    formData.append("difficulty", values.difficulty);
    formData.append("questionFormat", values.questionFormat);
    formData.append("answerFormat", answerFormat);
    formData.append("question", values.question);
    if (isChoiceQuestion) {
      values.choices.forEach((choice) => formData.append("choices", choice));
      values.correctChoiceIndexes.forEach((choiceIndex) =>
        formData.append("correctChoiceIndexes", String(choiceIndex))
      );
      values.choiceExplanations.forEach((choiceExplanation) =>
        formData.append("choiceExplanations", choiceExplanation)
      );
    } else if (values.questionFormat === "QZONE") {
      formData.append("hotspotImageSrc", values.hotspotImageSrc);
      formData.append("hotspotImageAlt", values.hotspotImageAlt);
      formData.append("hotspotTargetX", values.hotspotTargetX);
      formData.append("hotspotTargetY", values.hotspotTargetY);
      formData.append("hotspotTolerance", values.hotspotTolerance);
      formData.append("hotspotTargetLabel", values.hotspotTargetLabel);
    } else {
      formData.append("shortAnswerType", values.shortAnswerType);
      formData.append("acceptedAnswers", values.acceptedAnswers);
      formData.append("numericAnswerValue", values.numericAnswerValue);
      formData.append("numericAnswerTolerance", values.numericAnswerTolerance);
      formData.append("numericAnswerUnit", values.numericAnswerUnit);
      formData.append("numericAnswerAcceptedUnits", values.numericAnswerAcceptedUnits);
    }
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
  const previewQuestionFormat = form.watch("questionFormat");
  const previewIsChoiceQuestion =
    isEditableChoiceQuestionFormatCode(previewQuestionFormat);
  const previewAnswerFormat =
    resolveAnswerFormatForQuestionFormat(previewQuestionFormat);
  const previewChoices = form.watch("choices");
  const previewCorrectChoiceIndexes = form.watch("correctChoiceIndexes");
  const previewExplanation = form.watch("explanation");
  const previewChoiceExplanations = form.watch("choiceExplanations");
  const previewShortAnswerType = form.watch("shortAnswerType");
  const previewAcceptedAnswers = form.watch("acceptedAnswers");
  const previewNumericAnswerValue = form.watch("numericAnswerValue");
  const previewNumericAnswerTolerance = form.watch("numericAnswerTolerance");
  const previewNumericAnswerUnit = form.watch("numericAnswerUnit");
  const previewNumericAnswerAcceptedUnits = form.watch("numericAnswerAcceptedUnits");
  const previewAcceptedAnswerList = previewAcceptedAnswers
    .split(/\r?\n/)
    .map((answer) => answer.trim())
    .filter(Boolean);
  const previewAcceptedUnitList = previewNumericAnswerAcceptedUnits
    .split(/\r?\n/)
    .map((unit) => unit.trim())
    .filter(Boolean);
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
            name="questionFormat"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Format UNESS</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={(value) => {
                    const nextQuestionFormat = value as EditableQuestionFormatCode;
                    const nextAnswerFormat =
                      resolveAnswerFormatForQuestionFormat(nextQuestionFormat);
                    field.onChange(nextQuestionFormat);
                    form.setValue("answerFormat", nextAnswerFormat, {
                      shouldDirty: true,
                      shouldValidate: true,
                    });
                    if (!isEditableChoiceQuestionFormatCode(nextQuestionFormat)) {
                      form.setValue("correctChoiceIndexes", [], {
                        shouldDirty: true,
                        shouldValidate: true,
                      });
                      return;
                    }
                    const nextCorrectChoiceIndexes = resolveCorrectChoiceIndexes({
                      answerFormat: nextAnswerFormat,
                      correctChoiceIndexes: form.getValues("correctChoiceIndexes"),
                      choiceCount: choiceLabels.length,
                    });
                    form.setValue(
                      "correctChoiceIndexes",
                      nextCorrectChoiceIndexes.length > 0 ? nextCorrectChoiceIndexes : [0],
                      { shouldDirty: true, shouldValidate: true }
                    );
                  }}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un format" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {questionFormatOptions.map(({ value, label }) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  QCM est une famille : choisis le format précis affiché aux étudiants.
                </FormDescription>
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
        </div>

        {previewIsChoiceQuestion ? (
          <FormField
            name="correctChoiceIndexes"
            control={control}
            render={({ field }) => {
              const selectedIndexes = field.value ?? [];

              return (
                <FormItem>
                  <FormLabel>
                    {previewAnswerFormat === "MULTIPLE"
                      ? "Bonnes réponses"
                      : "Bonne réponse"}
                  </FormLabel>
                  {previewAnswerFormat === "MULTIPLE" ? (
                    <div className="grid gap-3 md:grid-cols-2">
                      {choiceLabels.map((label, index) => {
                        const isChecked = selectedIndexes.includes(index);

                        return (
                          <label
                            key={`correct-choice-${label}`}
                            className="flex items-start gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm"
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={(event) => {
                                const nextIndexes = event.target.checked
                                  ? [...selectedIndexes, index]
                                  : selectedIndexes.filter((value) => value !== index);
                                field.onChange(
                                  resolveCorrectChoiceIndexes({
                                    answerFormat: previewAnswerFormat,
                                    correctChoiceIndexes: nextIndexes,
                                    choiceCount: choiceLabels.length,
                                  })
                                );
                              }}
                              className={checkboxClassName}
                            />
                            <span className="space-y-1">
                              <span className="block font-medium text-heading">
                                Choix {label}
                              </span>
                              <span className="block text-xs text-muted-foreground">
                                Coche toutes les bonnes réponses attendues.
                              </span>
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  ) : (
                    <Select
                      value={String(selectedIndexes[0] ?? 0)}
                      onValueChange={(value) =>
                        field.onChange(
                          resolveCorrectChoiceIndexes({
                            answerFormat: previewAnswerFormat,
                            correctChoiceIndexes: [Number(value)],
                            choiceCount: choiceLabels.length,
                          })
                        )
                      }
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
                  )}
                  <FormDescription>
                    {previewQuestionFormat === "QRP"
                      ? `L'étudiant devra sélectionner exactement ${selectedIndexes.length} réponse${selectedIndexes.length > 1 ? "s" : ""}. Ce nombre est calculé depuis les bonnes réponses cochées.`
                      : previewAnswerFormat === "MULTIPLE"
                      ? "La question sera validée uniquement si l'ensemble exact des bonnes réponses est coché."
                      : "La question attend exactement une bonne réponse."}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        ) : null}

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

        {previewIsChoiceQuestion ? (
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
        ) : (
          <div className="space-y-4 rounded-xl border border-border bg-background/60 p-4">
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-foreground">Réponse attendue QROC</h3>
              <p className="text-xs text-muted-foreground">
                La correction est automatique : renseigne les réponses textuelles acceptées ou une valeur numérique avec tolérance.
              </p>
            </div>

            <FormField
              name="shortAnswerType"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type de réponse courte</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir un type de réponse" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="text">Texte</SelectItem>
                      <SelectItem value="number">Nombre</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {previewShortAnswerType === "text" ? (
              <FormField
                name="acceptedAnswers"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Réponses acceptées</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder={"Une variante acceptée par ligne\nEx. mitochondrie\nEx. la mitochondrie"}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Les réponses sont normalisées : casse, accents et espaces ne bloquent pas la correction.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  name="numericAnswerValue"
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Valeur attendue</FormLabel>
                      <FormControl>
                        <Input type="text" inputMode="decimal" placeholder="Ex. 7,4" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="numericAnswerTolerance"
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tolérance</FormLabel>
                      <FormControl>
                        <Input type="text" inputMode="decimal" placeholder="Ex. 0,1" {...field} />
                      </FormControl>
                      <FormDescription>Laisse vide pour exiger la valeur exacte.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="numericAnswerUnit"
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Unité principale</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Ex. mmol/L" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="numericAnswerAcceptedUnits"
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Unités acceptées en plus</FormLabel>
                      <FormControl>
                        <Textarea rows={3} placeholder={"Une unité par ligne\nEx. mM"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </div>
        )}

        {previewQuestionFormat === "QZONE" ? (
          <HotspotAdminEditor
            imageSrc={form.watch("hotspotImageSrc")}
            imageAlt={form.watch("hotspotImageAlt")}
            targetX={form.watch("hotspotTargetX")}
            targetY={form.watch("hotspotTargetY")}
            tolerance={form.watch("hotspotTolerance")}
            targetLabel={form.watch("hotspotTargetLabel")}
            onImageSrcChange={(val) => form.setValue("hotspotImageSrc", val)}
            onImageAltChange={(val) => form.setValue("hotspotImageAlt", val)}
            onTargetXChange={(val) => form.setValue("hotspotTargetX", val)}
            onTargetYChange={(val) => form.setValue("hotspotTargetY", val)}
            onToleranceChange={(val) => form.setValue("hotspotTolerance", val)}
            onTargetLabelChange={(val) => form.setValue("hotspotTargetLabel", val)}
          />
        ) : null}

        <FormField
          name="explanation"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correction globale</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Introduction ou synthèse globale affichée avant les corrections par item"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {previewIsChoiceQuestion
                  ? `Optionnel si une correction par item est renseignée. ${richContentHelpText}`
                  : `Obligatoire pour une QROC. ${richContentHelpText}`}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {previewIsChoiceQuestion ? (
          <div className="grid gap-4 md:grid-cols-2">
            {choiceLabels.map((label, index) => (
              <FormField
                key={`choice-explanation-${label}`}
                name={`choiceExplanations.${index}`}
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correction du choix {label}</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={3}
                        placeholder={`Pourquoi le choix ${label} est vrai ou faux`}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      La lettre sera recalculée si les items sont permutés côté étudiant.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
        ) : null}

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
              <p className="mb-3 text-xs font-medium text-muted-foreground">
                Format : {getQuestionFormatAdminLabel(previewQuestionFormat)}
              </p>
              {previewQuestion.trim() ? (
                <MathContent value={previewQuestion} />
              ) : (
                <p className="text-sm text-muted-foreground">La question apparaîtra ici.</p>
              )}
            </div>

            {previewIsChoiceQuestion ? (
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
                          {previewCorrectChoiceIndexes.includes(index) ? (
                            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-emerald-600">
                              {previewAnswerFormat === "MULTIPLE" ? "Bonne réponse attendue" : "Bonne réponse"}
                            </p>
                          ) : null}
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
            ) : (
              <div className="rounded-lg border border-border bg-background p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Réponse attendue
                </p>
                {previewShortAnswerType === "number" ? (
                  <p className="text-sm text-foreground">
                    {previewNumericAnswerValue.trim()
                      ? `${previewNumericAnswerValue}${previewNumericAnswerUnit.trim() ? ` ${previewNumericAnswerUnit}` : ""}${previewNumericAnswerTolerance.trim() ? ` (tolérance ±${previewNumericAnswerTolerance})` : ""}`
                      : "La valeur numérique attendue apparaîtra ici."}
                  </p>
                ) : previewAcceptedAnswerList.length > 0 ? (
                  <div className="space-y-1 text-sm text-foreground">
                    {previewAcceptedAnswerList.map((answer) => (
                      <p key={`preview-accepted-answer-${answer}`}>{answer}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">Les réponses acceptées apparaîtront ici.</p>
                )}
                {previewShortAnswerType === "number" && previewAcceptedUnitList.length > 0 ? (
                  <p className="mt-2 text-xs text-muted-foreground">
                    Unités acceptées en plus : {previewAcceptedUnitList.join(", ")}
                  </p>
                ) : null}
              </div>
            )}

            <div className="rounded-lg border border-border bg-background p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Correction
              </p>
              {previewExplanation.trim() ? (
                <div className="mb-3">
                  <MathContent value={previewExplanation} />
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Aucune correction globale.</p>
              )}
              {previewIsChoiceQuestion && previewChoiceExplanations.some((choiceExplanation) => choiceExplanation.trim()) ? (
                <div className="space-y-2 border-t border-border pt-3">
                  {choiceLabels.map((label, index) => {
                    const choiceExplanation = previewChoiceExplanations[index] ?? "";

                    if (!choiceExplanation.trim()) {
                      return null;
                    }

                    return (
                      <div key={`preview-choice-explanation-${label}`} className="flex gap-2 text-sm">
                        <span className="font-semibold text-heading">
                          {previewCorrectChoiceIndexes.includes(index) ? "✓" : "✗"} {label}
                        </span>
                        <div className="min-w-0 flex-1">
                          <MathContent value={choiceExplanation} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}
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
