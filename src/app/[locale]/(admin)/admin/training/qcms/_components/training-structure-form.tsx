"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowDown, ArrowUp, Plus, Trash2, Wand2 } from "lucide-react";
import { useState } from "react";
import {
  Controller,
  useFieldArray,
  useForm,
  useWatch,
  type Control,
  type FieldErrors,
  type UseFormGetValues,
  type UseFormRegister,
  type UseFormSetValue,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FormSubmitButton from "@/components/ui/form-submit-button";
import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/ui/multi-select";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { updateTrainingStructure, type UpdateTrainingStructureValues } from "@/core/chapter";
import { updateTrainingStructureSchema } from "@/lib/validation";
import { slugifyText } from "@/lib/utils";

type TrainingStructureFormValues = UpdateTrainingStructureValues;
type QuizItemValue = TrainingStructureFormValues["sections"][number]["quizzes"][number]["quizItems"][number];

type QuestionOption = {
  value: string;
  label: string;
  description?: string;
};

interface TrainingStructureFormProps {
  chapterId: string;
  initialData: TrainingStructureFormValues;
  questionOptions: QuestionOption[];
  themeOptions: QuestionOption[];
  questionManagementHref: string;
}

const checkboxClassName =
  "h-4 w-4 rounded-xs border border-default-medium bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft";
const EMPTY_SELECT_VALUE = "__empty__";

function buildEmptyQuestionItem(order: number): QuizItemValue {
  return {
    type: "QUESTION",
    order,
    questionId: "",
  };
}

function buildEmptyGroupItem(order: number): QuizItemValue {
  return {
    type: "GROUP",
    title: "",
    sharedStatement: "",
    order,
    questionIds: [],
  };
}

function buildEmptyQuiz(order: number): TrainingStructureFormValues["sections"][number]["quizzes"][number] {
  return {
    title: "",
    slug: "",
    description: "",
    order,
    isPublished: true,
    quizItems: [buildEmptyQuestionItem(1)],
  };
}

function buildEmptySection(
  order: number,
  kind: "THEME" | "SYNTHESIS"
): TrainingStructureFormValues["sections"][number] {
  return {
    title: kind === "SYNTHESIS" ? "Synthèse du chapitre" : "",
    description: "",
    kind,
    themeIds: [],
    order,
    isPublished: true,
    quizzes: [buildEmptyQuiz(1)],
  };
}

function syncSectionOrders(
  getValues: UseFormGetValues<TrainingStructureFormValues>,
  setValue: UseFormSetValue<TrainingStructureFormValues>
) {
  const sections = getValues("sections") ?? [];

  sections.forEach((_, index) => {
    setValue(`sections.${index}.order`, index + 1, {
      shouldDirty: true,
      shouldValidate: index === sections.length - 1,
    });
  });
}

function syncQuizItemOrders(
  getValues: UseFormGetValues<TrainingStructureFormValues>,
  setValue: UseFormSetValue<TrainingStructureFormValues>,
  sectionIndex: number,
  quizIndex: number
) {
  const path = `sections.${sectionIndex}.quizzes.${quizIndex}.quizItems` as const;
  const items = getValues(path) ?? [];

  items.forEach((_, index) => {
    setValue(`${path}.${index}.order` as const, index + 1, {
      shouldDirty: true,
      shouldValidate: index === items.length - 1,
    });
  });
}

function getErrorMessage(error: unknown) {
  const message = (error as { message?: unknown } | undefined)?.message;
  return typeof message === "string" ? message : null;
}

function getArrayErrorMessage(error: unknown) {
  if (!error) {
    return null;
  }

  const directMessage = (error as { message?: unknown } | undefined)?.message;
  if (typeof directMessage === "string") {
    return directMessage;
  }

  if (Array.isArray(error)) {
    const nested = error.find((item) => typeof (item as { message?: unknown } | undefined)?.message === "string");
    return nested ? (nested as { message: string }).message : null;
  }

  return null;
}

function countQuizQuestions(items: QuizItemValue[]) {
  return items.reduce((sum, item) => {
    if (item.type === "QUESTION") {
      return sum + (item.questionId ? 1 : 0);
    }

    return sum + item.questionIds.length;
  }, 0);
}

interface QuizItemEditorProps {
  chapterId: string;
  control: Control<TrainingStructureFormValues>;
  register: UseFormRegister<TrainingStructureFormValues>;
  errors: FieldErrors<TrainingStructureFormValues>;
  questionOptions: QuestionOption[];
  sectionIndex: number;
  quizIndex: number;
  itemIndex: number;
  itemCount: number;
  itemType: QuizItemValue["type"];
  moveItem: (fromIndex: number, toIndex: number) => void;
  removeItem: (index: number) => void;
}

function QuizItemEditor({
  chapterId,
  control,
  register,
  errors,
  questionOptions,
  sectionIndex,
  quizIndex,
  itemIndex,
  itemCount,
  itemType,
  moveItem,
  removeItem,
}: QuizItemEditorProps) {
  const itemPath = `sections.${sectionIndex}.quizzes.${quizIndex}.quizItems.${itemIndex}` as const;
  const item = useWatch({ control, name: itemPath }) as QuizItemValue | undefined;
  const itemErrors = errors.sections?.[sectionIndex]?.quizzes?.[quizIndex]?.quizItems?.[itemIndex];
  const itemOrder = item?.order ?? itemIndex + 1;

  return (
    <div className="space-y-4 rounded-xl border border-border bg-background p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">
            {itemType === "QUESTION"
              ? `Question seule ${itemOrder}`
              : item?.type === "GROUP" && item.title?.trim()
                ? item.title
                : `Bloc lié ${itemOrder}`}
          </p>
          <p className="text-xs text-muted-foreground">
            Position {itemOrder} dans le quiz.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={itemIndex === 0}
            onClick={() => moveItem(itemIndex, itemIndex - 1)}
          >
            <ArrowUp className="h-4 w-4" />
            Monter
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={itemIndex === itemCount - 1}
            onClick={() => moveItem(itemIndex, itemIndex + 1)}
          >
            <ArrowDown className="h-4 w-4" />
            Descendre
          </Button>
          <Button type="button" variant="ghost" size="sm" onClick={() => removeItem(itemIndex)}>
            <Trash2 className="h-4 w-4" />
            Supprimer
          </Button>
        </div>
      </div>

      {itemType === "QUESTION" ? (
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Question</label>
          <Controller
            control={control}
            name={`${itemPath}.questionId` as const}
            render={({ field }) => (
              <Select
                value={field.value || EMPTY_SELECT_VALUE}
                onValueChange={(value) => field.onChange(value === EMPTY_SELECT_VALUE ? "" : value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choisir une question" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={EMPTY_SELECT_VALUE}>Choisir une question</SelectItem>
                  {questionOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {item?.type === "QUESTION" && item.questionId ? (
            <p className="text-xs text-muted-foreground">
              {questionOptions.find((option) => option.value === item.questionId)?.description ?? "Question sélectionnée."}
            </p>
          ) : (
            <p className="text-xs text-muted-foreground">
              Une question seule garde sa place exacte dans la séquence du quiz.
            </p>
          )}
          {getErrorMessage((itemErrors as { questionId?: unknown } | undefined)?.questionId) ? (
            <p className="text-xs text-danger">
              {getErrorMessage((itemErrors as { questionId?: unknown } | undefined)?.questionId)}
            </p>
          ) : null}
        </div>
      ) : (
        <>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground" htmlFor={`${chapterId}-item-title-${sectionIndex}-${quizIndex}-${itemIndex}`}>
              Titre du bloc
            </label>
            <Input
              id={`${chapterId}-item-title-${sectionIndex}-${quizIndex}-${itemIndex}`}
              placeholder="Cas d'étude - Système Terre-atmosphère"
              {...register(`${itemPath}.title` as const)}
            />
            <p className="text-xs text-muted-foreground">
              Optionnel. Il sert à annoncer le document ou la sous-partie commune aux questions liées.
            </p>
            {getErrorMessage((itemErrors as { title?: unknown } | undefined)?.title) ? (
              <p className="text-xs text-danger">
                {getErrorMessage((itemErrors as { title?: unknown } | undefined)?.title)}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground" htmlFor={`${chapterId}-item-statement-${sectionIndex}-${quizIndex}-${itemIndex}`}>
              Énoncé commun
            </label>
            <Textarea
              id={`${chapterId}-item-statement-${sectionIndex}-${quizIndex}-${itemIndex}`}
              rows={5}
              placeholder="Document, données, consigne commune, schéma..."
              {...register(`${itemPath}.sharedStatement` as const)}
            />
            <p className="text-xs text-muted-foreground">
              Cet énoncé sera réaffiché avant chaque question du bloc dans le QCM public.
            </p>
            {getErrorMessage((itemErrors as { sharedStatement?: unknown } | undefined)?.sharedStatement) ? (
              <p className="text-xs text-danger">
                {getErrorMessage((itemErrors as { sharedStatement?: unknown } | undefined)?.sharedStatement)}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Questions du bloc</label>
            <Controller
              control={control}
              name={`${itemPath}.questionIds` as const}
              render={({ field }) => (
                <MultiSelect
                  options={questionOptions}
                  selected={field.value ?? []}
                  onChange={field.onChange}
                  placeholder="Sélectionner les questions de ce bloc lié"
                  searchPlaceholder="Rechercher une question..."
                  emptyText="Aucune question trouvée."
                  contentClassName="max-w-3xl"
                />
              )}
            />
            <p className="text-xs text-muted-foreground">
              L&apos;ordre de sélection est conservé dans le bloc. Les questions de ce bloc restent contiguës dans le quiz.
            </p>
            {getArrayErrorMessage((itemErrors as { questionIds?: unknown } | undefined)?.questionIds) ? (
              <p className="text-xs text-danger">
                {getArrayErrorMessage((itemErrors as { questionIds?: unknown } | undefined)?.questionIds)}
              </p>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}

interface QuizEditorProps {
  chapterId: string;
  control: Control<TrainingStructureFormValues>;
  register: UseFormRegister<TrainingStructureFormValues>;
  errors: FieldErrors<TrainingStructureFormValues>;
  getValues: UseFormGetValues<TrainingStructureFormValues>;
  setValue: UseFormSetValue<TrainingStructureFormValues>;
  questionOptions: QuestionOption[];
  sectionIndex: number;
  quizIndex: number;
  removeQuiz: (index: number) => void;
}

function QuizEditor({
  chapterId,
  control,
  register,
  errors,
  getValues,
  setValue,
  questionOptions,
  sectionIndex,
  quizIndex,
  removeQuiz,
}: QuizEditorProps) {
  const titlePath = `sections.${sectionIndex}.quizzes.${quizIndex}.title` as const;
  const slugPath = `sections.${sectionIndex}.quizzes.${quizIndex}.slug` as const;
  const itemsPath = `sections.${sectionIndex}.quizzes.${quizIndex}.quizItems` as const;
  const title = useWatch({ control, name: titlePath });
  const quizItems = (useWatch({ control, name: itemsPath }) ?? []) as QuizItemValue[];
  const itemsFieldArray = useFieldArray({
    control,
    name: itemsPath,
  });
  const quizErrors = errors.sections?.[sectionIndex]?.quizzes?.[quizIndex];
  const questionCount = countQuizQuestions(quizItems);

  const appendQuestionItem = () => {
    itemsFieldArray.append(buildEmptyQuestionItem(itemsFieldArray.fields.length + 1));
    syncQuizItemOrders(getValues, setValue, sectionIndex, quizIndex);
  };

  const appendGroupItem = () => {
    itemsFieldArray.append(buildEmptyGroupItem(itemsFieldArray.fields.length + 1));
    syncQuizItemOrders(getValues, setValue, sectionIndex, quizIndex);
  };

  const removeItem = (index: number) => {
    itemsFieldArray.remove(index);
    syncQuizItemOrders(getValues, setValue, sectionIndex, quizIndex);
  };

  const moveItem = (fromIndex: number, toIndex: number) => {
    itemsFieldArray.move(fromIndex, toIndex);
    syncQuizItemOrders(getValues, setValue, sectionIndex, quizIndex);
  };

  return (
    <div className="space-y-4 rounded-xl border border-border bg-background/70 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">
            {title?.trim() ? title : `Quiz ${quizIndex + 1}`}
          </p>
          <p className="text-xs text-muted-foreground">
            {questionCount} question{questionCount > 1 ? "s" : ""} répartie{questionCount > 1 ? "s" : ""} sur {quizItems.length} item{quizItems.length > 1 ? "s" : ""}.
          </p>
        </div>
        <Button type="button" variant="ghost" size="sm" onClick={() => removeQuiz(quizIndex)}>
          <Trash2 className="h-4 w-4" />
          Supprimer le quiz
        </Button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground" htmlFor={`${chapterId}-quiz-title-${sectionIndex}-${quizIndex}`}>
            Titre du quiz
          </label>
          <Input
            id={`${chapterId}-quiz-title-${sectionIndex}-${quizIndex}`}
            placeholder="QCM de synthèse"
            {...register(titlePath)}
          />
          {getErrorMessage(quizErrors?.title) ? (
            <p className="text-xs text-danger">{getErrorMessage(quizErrors?.title)}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <label className="text-sm font-medium text-foreground" htmlFor={`${chapterId}-quiz-slug-${sectionIndex}-${quizIndex}`}>
              Slug public
            </label>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                const nextSlug = slugifyText(getValues(titlePath) || "");
                setValue(slugPath, nextSlug, { shouldDirty: true, shouldValidate: true });
              }}
            >
              <Wand2 className="h-3.5 w-3.5" />
              Générer
            </Button>
          </div>
          <Input
            id={`${chapterId}-quiz-slug-${sectionIndex}-${quizIndex}`}
            placeholder="quiz-de-synthese"
            {...register(slugPath)}
          />
          {getErrorMessage(quizErrors?.slug) ? (
            <p className="text-xs text-danger">{getErrorMessage(quizErrors?.slug)}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[120px_minmax(0,1fr)]">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground" htmlFor={`${chapterId}-quiz-order-${sectionIndex}-${quizIndex}`}>
            Ordre
          </label>
          <Input
            id={`${chapterId}-quiz-order-${sectionIndex}-${quizIndex}`}
            type="number"
            min={1}
            max={1000}
            {...register(`sections.${sectionIndex}.quizzes.${quizIndex}.order` as const, {
              valueAsNumber: true,
            })}
          />
          {getErrorMessage(quizErrors?.order) ? (
            <p className="text-xs text-danger">{getErrorMessage(quizErrors?.order)}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground" htmlFor={`${chapterId}-quiz-description-${sectionIndex}-${quizIndex}`}>
            Description
          </label>
          <Textarea
            id={`${chapterId}-quiz-description-${sectionIndex}-${quizIndex}`}
            rows={3}
            placeholder="Mélange de questions sur tout le chapitre."
            {...register(`sections.${sectionIndex}.quizzes.${quizIndex}.description` as const)}
          />
          {getErrorMessage(quizErrors?.description) ? (
            <p className="text-xs text-danger">{getErrorMessage(quizErrors?.description)}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-4 rounded-xl border border-dashed border-border bg-background/50 p-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h5 className="text-sm font-semibold text-foreground">Séquence du quiz</h5>
            <p className="text-xs text-muted-foreground">
              L&apos;ordre vertical correspond à l&apos;ordre exact du QCM public, avec liberté totale entre questions seules et blocs liés.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button type="button" variant="outline" size="sm" onClick={appendQuestionItem}>
              <Plus className="h-4 w-4" />
              Ajouter une question seule
            </Button>
            <Button type="button" variant="outline" size="sm" onClick={appendGroupItem}>
              <Plus className="h-4 w-4" />
              Ajouter un bloc lié
            </Button>
          </div>
        </div>

        {itemsFieldArray.fields.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border bg-background/70 p-4 text-sm text-muted-foreground">
            Aucun item dans ce quiz. Ajoute une question seule ou un bloc lié pour construire la séquence.
          </div>
        ) : (
          <div className="space-y-4">
            {itemsFieldArray.fields.map((itemField, itemIndex) => (
              <QuizItemEditor
                key={itemField.id}
                chapterId={chapterId}
                control={control}
                register={register}
                errors={errors}
                questionOptions={questionOptions}
                sectionIndex={sectionIndex}
                quizIndex={quizIndex}
                itemIndex={itemIndex}
                itemCount={itemsFieldArray.fields.length}
                itemType={itemField.type}
                moveItem={moveItem}
                removeItem={removeItem}
              />
            ))}
          </div>
        )}

        {getArrayErrorMessage(quizErrors?.quizItems) ? (
          <p className="text-xs text-danger">{getArrayErrorMessage(quizErrors?.quizItems)}</p>
        ) : null}
      </div>

      <label className="flex items-start gap-3 rounded-lg border border-border bg-neutral-primary-soft p-3 text-sm">
        <input
          type="checkbox"
          className={checkboxClassName}
          {...register(`sections.${sectionIndex}.quizzes.${quizIndex}.isPublished` as const)}
        />
        <span>
          <span className="font-medium text-foreground">Quiz publié</span>
          <span className="mt-1 block text-xs text-muted-foreground">
            Un quiz non publié reste en back-office mais n&apos;apparaît pas sur la page d&apos;entraînement.
          </span>
        </span>
      </label>
    </div>
  );
}

interface SectionEditorProps {
  chapterId: string;
  control: Control<TrainingStructureFormValues>;
  register: UseFormRegister<TrainingStructureFormValues>;
  errors: FieldErrors<TrainingStructureFormValues>;
  getValues: UseFormGetValues<TrainingStructureFormValues>;
  setValue: UseFormSetValue<TrainingStructureFormValues>;
  questionOptions: QuestionOption[];
  themeOptions: QuestionOption[];
  sectionIndex: number;
  sectionCount: number;
  moveSection: (fromIndex: number, toIndex: number) => void;
  removeSection: (index: number) => void;
}

function SectionEditor({
  chapterId,
  control,
  register,
  errors,
  getValues,
  setValue,
  questionOptions,
  themeOptions,
  sectionIndex,
  sectionCount,
  moveSection,
  removeSection,
}: SectionEditorProps) {
  const quizzesFieldArray = useFieldArray({
    control,
    name: `sections.${sectionIndex}.quizzes` as const,
  });
  const title = useWatch({ control, name: `sections.${sectionIndex}.title` as const });
  const kind = useWatch({ control, name: `sections.${sectionIndex}.kind` as const });
  const sectionErrors = errors.sections?.[sectionIndex];

  return (
    <Card className="space-y-5 p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-foreground">
            {title?.trim() ? title : `Section ${sectionIndex + 1}`}
          </p>
          <p className="text-sm text-muted-foreground">
            {kind === "SYNTHESIS" ? "Synthèse" : "Grand thème"} · {quizzesFieldArray.fields.length} quiz
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={sectionIndex === 0}
            onClick={() => moveSection(sectionIndex, sectionIndex - 1)}
          >
            <ArrowUp className="h-4 w-4" />
            Monter
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={sectionIndex === sectionCount - 1}
            onClick={() => moveSection(sectionIndex, sectionIndex + 1)}
          >
            <ArrowDown className="h-4 w-4" />
            Descendre
          </Button>
          <Button type="button" variant="ghost" size="sm" onClick={() => removeSection(sectionIndex)}>
            <Trash2 className="h-4 w-4" />
            Supprimer la section
          </Button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_180px_160px]">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground" htmlFor={`${chapterId}-section-title-${sectionIndex}`}>
            Titre de section
          </label>
          <Input
            id={`${chapterId}-section-title-${sectionIndex}`}
            placeholder="Fonctionnement d'une lunette afocale"
            {...register(`sections.${sectionIndex}.title` as const)}
          />
          {getErrorMessage(sectionErrors?.title) ? (
            <p className="text-xs text-danger">{getErrorMessage(sectionErrors?.title)}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Type</label>
          <Controller
            control={control}
            name={`sections.${sectionIndex}.kind` as const}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir un type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="THEME">Grand thème</SelectItem>
                  <SelectItem value="SYNTHESIS">Synthèse</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {getErrorMessage(sectionErrors?.kind) ? (
            <p className="text-xs text-danger">{getErrorMessage(sectionErrors?.kind)}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Position</label>
          <Input type="number" value={sectionIndex + 1} readOnly />
          {getErrorMessage(sectionErrors?.order) ? (
            <p className="text-xs text-danger">{getErrorMessage(sectionErrors?.order)}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground" htmlFor={`${chapterId}-section-description-${sectionIndex}`}>
          Description
        </label>
        <Textarea
          id={`${chapterId}-section-description-${sectionIndex}`}
          rows={3}
          placeholder={
            kind === "SYNTHESIS"
              ? "Mélange de quiz pour consolider tout le chapitre."
              : "Sous-ensemble pédagogique du chapitre."
          }
          {...register(`sections.${sectionIndex}.description` as const)}
        />
        {getErrorMessage(sectionErrors?.description) ? (
          <p className="text-xs text-danger">{getErrorMessage(sectionErrors?.description)}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Thèmes canoniques</label>
        <Controller
          control={control}
          name={`sections.${sectionIndex}.themeIds` as const}
          render={({ field }) => (
            <MultiSelect
              options={themeOptions}
              selected={field.value ?? []}
              onChange={field.onChange}
              placeholder="Associer un ou plusieurs thèmes"
              searchPlaceholder="Rechercher un thème..."
              emptyText="Aucun thème disponible pour ce chapitre."
            />
          )}
        />
        <p className="text-xs text-muted-foreground">
          Champ optionnel. Ces thèmes gardent le lien avec la taxonomie canonique du chapitre.
        </p>
        {getArrayErrorMessage(sectionErrors?.themeIds) ? (
          <p className="text-xs text-danger">{getArrayErrorMessage(sectionErrors?.themeIds)}</p>
        ) : null}
      </div>

      <label className="flex items-start gap-3 rounded-lg border border-border bg-neutral-primary-soft p-3 text-sm">
        <input
          type="checkbox"
          className={checkboxClassName}
          {...register(`sections.${sectionIndex}.isPublished` as const)}
        />
        <span>
          <span className="font-medium text-foreground">Section publiée</span>
          <span className="mt-1 block text-xs text-muted-foreground">
            Une section non publiée masque aussi ses quiz côté public.
          </span>
        </span>
      </label>

      <div className="space-y-4 border-t border-border pt-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h4 className="text-sm font-semibold text-foreground">Quiz de la section</h4>
            <p className="text-xs text-muted-foreground">
              Utilise des slugs stables: ils alimentent directement les URLs `?quiz=` publiques.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => quizzesFieldArray.append(buildEmptyQuiz(quizzesFieldArray.fields.length + 1))}
          >
            <Plus className="h-4 w-4" />
            Ajouter un quiz
          </Button>
        </div>

        {quizzesFieldArray.fields.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border bg-background/70 p-4 text-sm text-muted-foreground">
            Aucun quiz dans cette section. Ajoute-en un pour qu&apos;elle apparaisse publiquement.
          </div>
        ) : (
          <div className="space-y-4">
            {quizzesFieldArray.fields.map((quizField, quizIndex) => (
              <QuizEditor
                key={quizField.id}
                chapterId={chapterId}
                control={control}
                register={register}
                errors={errors}
                getValues={getValues}
                setValue={setValue}
                questionOptions={questionOptions}
                sectionIndex={sectionIndex}
                quizIndex={quizIndex}
                removeQuiz={quizzesFieldArray.remove}
              />
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}

export function TrainingStructureForm({
  chapterId,
  initialData,
  questionOptions,
  themeOptions,
  questionManagementHref,
}: TrainingStructureFormProps) {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<TrainingStructureFormValues>({
    defaultValues: initialData,
    resolver: zodResolver(updateTrainingStructureSchema),
  });
  const sectionFieldArray = useFieldArray({
    control: form.control,
    name: "sections",
  });

  const appendSection = (kind: "THEME" | "SYNTHESIS") => {
    sectionFieldArray.append(buildEmptySection(sectionFieldArray.fields.length + 1, kind));
    syncSectionOrders(form.getValues, form.setValue);
  };

  const removeSection = (index: number) => {
    sectionFieldArray.remove(index);
    syncSectionOrders(form.getValues, form.setValue);
  };

  const moveSection = (fromIndex: number, toIndex: number) => {
    sectionFieldArray.move(fromIndex, toIndex);
    syncSectionOrders(form.getValues, form.setValue);
  };

  const onSubmit = async (values: TrainingStructureFormValues) => {
    setServerError(null);

    try {
      const normalizedValues: TrainingStructureFormValues = {
        sections: values.sections.map((section, sectionIndex) => ({
          ...section,
          order: sectionIndex + 1,
          quizzes: section.quizzes.map((quiz) => ({
            ...quiz,
            quizItems: quiz.quizItems.map((item, itemIndex) => ({
              ...item,
              order: itemIndex + 1,
            })),
          })),
        })),
      };
      const formData = new FormData();
      formData.append("structure", JSON.stringify(normalizedValues));

      await updateTrainingStructure(chapterId, formData, {
        redirectTo: null,
        revalidatePaths: ["/admin/training/qcms", "/admin/training/quiz-questions"],
      });

      router.refresh();
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "Impossible d'enregistrer la structure d'entraînement"
      );
    }
  };

  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <CardTitle className="text-xl">Structure pédagogique</CardTitle>
            <CardDescription>
              Organise le chapitre en grands thèmes puis QCM persistés, avec ordre libre entre questions seules et blocs liés. Si aucune section n&apos;est enregistrée, le public retombe sur l&apos;ancien découpage automatique par 5 questions.
            </CardDescription>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href={questionManagementHref}>Gérer les questions du chapitre</Link>
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="rounded-lg border border-dashed border-border bg-background/60 p-4 text-sm text-muted-foreground">
          Seuls les éléments publiés apparaissent côté public. L&apos;ordre vertical des items dans chaque quiz devient l&apos;ordre exact du parcours utilisateur.
        </div>

        {serverError ? (
          <div className="rounded-lg border border-danger/30 bg-danger/5 p-3 text-sm text-danger">
            {serverError}
          </div>
        ) : null}

        <form className="space-y-6" noValidate onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button type="button" variant="outline" onClick={() => appendSection("THEME")}>
              <Plus className="h-4 w-4" />
              Ajouter un grand thème
            </Button>
            <Button type="button" variant="outline" onClick={() => appendSection("SYNTHESIS")}>
              <Plus className="h-4 w-4" />
              Ajouter une synthèse
            </Button>
          </div>

          {sectionFieldArray.fields.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border bg-background/70 p-5 text-sm text-muted-foreground">
              Aucune structure persistée pour l&apos;instant. Ajoute une section pour sortir du fallback legacy.
            </div>
          ) : (
            <div className="space-y-5">
              {sectionFieldArray.fields.map((sectionField, sectionIndex) => (
                <SectionEditor
                  key={sectionField.id}
                  chapterId={chapterId}
                  control={form.control}
                  register={form.register}
                  errors={form.formState.errors}
                  getValues={form.getValues}
                  setValue={form.setValue}
                  questionOptions={questionOptions}
                  themeOptions={themeOptions}
                  sectionIndex={sectionIndex}
                  sectionCount={sectionFieldArray.fields.length}
                  moveSection={moveSection}
                  removeSection={removeSection}
                />
              ))}
            </div>
          )}

          <div className="flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              {sectionFieldArray.fields.length} section{sectionFieldArray.fields.length > 1 ? "s" : ""} configurée{sectionFieldArray.fields.length > 1 ? "s" : ""}.
            </p>
            <FormSubmitButton crudMode="edit" loading={form.formState.isSubmitting}>
              Enregistrer la structure
            </FormSubmitButton>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}