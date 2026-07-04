"use client";

import Link from "next/link";
import { BookOpen, ClipboardList, ExternalLink, FileQuestion, Pencil } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type {
  HealthInstitutionContentChapterAssignment,
  HealthInstitutionContentCourseUnit,
  HealthInstitutionContentExamExercise,
  HealthInstitutionContentProgramVersion,
  HealthInstitutionContentWorkspace as HealthInstitutionContentWorkspaceData,
} from "@/core/health";
import { healthCourseUnitCoverageStatusLabels } from "@/core/health";
import { cn, formatDateTime } from "@/lib/utils";

const ALL_VALUE = "__all__";
const NONE_VALUE = "__none__";

const stageLabels: Record<string, string> = {
  DISCOVER: "Découverte",
  PRACTICE: "Entraînement",
  MASTER: "Maîtrise",
};

const coverageVariant: Record<
  keyof typeof healthCourseUnitCoverageStatusLabels,
  "default" | "secondary" | "outline"
> = {
  STRUCTURE_ONLY: "secondary",
  THEMES_MAPPED: "outline",
  QUESTIONS_AVAILABLE: "default",
  READY: "default",
};

type HealthInstitutionContentWorkspaceProps = {
  workspace: HealthInstitutionContentWorkspaceData;
};

function formatCodeTitle(code: string | null, title: string) {
  return code ? `${code} · ${title}` : title;
}

function sortAssignments(
  assignments: HealthInstitutionContentChapterAssignment[]
) {
  return [...assignments].sort((left, right) => {
    const byGroup =
      (left.displayGroupOrder ?? Number.MAX_SAFE_INTEGER) -
      (right.displayGroupOrder ?? Number.MAX_SAFE_INTEGER);
    if (byGroup !== 0) return byGroup;
    if (left.order !== right.order) return left.order - right.order;
    return left.title.localeCompare(right.title, "fr", {
      sensitivity: "base",
      numeric: true,
    });
  });
}

function uniqueAssignments(
  assignments: HealthInstitutionContentChapterAssignment[]
) {
  return sortAssignments([...new Map(assignments.map((item) => [item.id, item])).values()]);
}

function hasIntersection(left: string[], right: Set<string>) {
  return left.some((value) => right.has(value));
}

function countQuizzes(assignments: HealthInstitutionContentChapterAssignment[]) {
  return assignments.reduce(
    (total, assignment) =>
      total +
      assignment.sections.reduce(
        (sectionTotal, section) => sectionTotal + section.quizzes.length,
        0
      ),
    0
  );
}

function findPreferredProgramVersion(
  versions: HealthInstitutionContentProgramVersion[],
  currentAcademicYear: string
) {
  return (
    versions.find((version) => version.isCurrent && version.academicYear === currentAcademicYear) ??
    versions.find((version) => version.isCurrent) ??
    versions.find((version) => version.academicYear === currentAcademicYear) ??
    versions[0] ??
    null
  );
}

function findPreferredPathway(version: HealthInstitutionContentProgramVersion | undefined) {
  return version?.pathways.find((pathway) => pathway.isDefault) ?? version?.pathways[0] ?? null;
}

function filterCourseUnits(
  version: HealthInstitutionContentProgramVersion | undefined,
  pathwayId: string
) {
  if (!version) return [];
  if (pathwayId === ALL_VALUE) return version.courseUnits;

  return version.courseUnits.filter(
    (courseUnit) =>
      courseUnit.pathwayId === pathwayId ||
      courseUnit.isCommonToAllPathways ||
      courseUnit.pathwayId === null
  );
}

function getCourseUnitAssignments(
  courseUnit: HealthInstitutionContentCourseUnit | undefined,
  teachingElementId: string
) {
  if (!courseUnit) return [];

  const directAssignments = courseUnit.chapterAssignments;
  const teachingElementAssignments =
    teachingElementId === ALL_VALUE
      ? courseUnit.teachingElements.flatMap((teachingElement) => teachingElement.chapterAssignments)
      : courseUnit.teachingElements
          .filter((teachingElement) => teachingElement.id === teachingElementId)
          .flatMap((teachingElement) => teachingElement.chapterAssignments);

  return uniqueAssignments([...directAssignments, ...teachingElementAssignments]);
}

function getActiveThemeIds({
  courseUnit,
  teachingElementId,
  chapterAssignmentId,
  assignments,
}: {
  courseUnit: HealthInstitutionContentCourseUnit | undefined;
  teachingElementId: string;
  chapterAssignmentId: string;
  assignments: HealthInstitutionContentChapterAssignment[];
}) {
  const themeIds = new Set<string>();

  if (!courseUnit) return themeIds;

  if (chapterAssignmentId !== ALL_VALUE) {
    assignments
      .filter((assignment) => assignment.id === chapterAssignmentId)
      .flatMap((assignment) => assignment.themeIds)
      .forEach((themeId) => themeIds.add(themeId));
    return themeIds;
  }

  courseUnit.themeIds.forEach((themeId) => themeIds.add(themeId));
  const selectedTeachingElements =
    teachingElementId === ALL_VALUE
      ? courseUnit.teachingElements
      : courseUnit.teachingElements.filter((teachingElement) => teachingElement.id === teachingElementId);
  selectedTeachingElements
    .flatMap((teachingElement) => teachingElement.themeIds)
    .forEach((themeId) => themeIds.add(themeId));
  assignments
    .flatMap((assignment) => assignment.themeIds)
    .forEach((themeId) => themeIds.add(themeId));

  return themeIds;
}

export function HealthInstitutionContentWorkspace({
  workspace,
}: HealthInstitutionContentWorkspaceProps) {
  const preferredVersion = useMemo(
    () => findPreferredProgramVersion(workspace.programVersions, workspace.currentAcademicYear),
    [workspace.currentAcademicYear, workspace.programVersions]
  );
  const [programVersionId, setProgramVersionId] = useState(
    preferredVersion?.id ?? NONE_VALUE
  );

  const selectedVersion = useMemo(
    () => workspace.programVersions.find((version) => version.id === programVersionId),
    [programVersionId, workspace.programVersions]
  );
  const preferredPathway = useMemo(
    () => findPreferredPathway(selectedVersion),
    [selectedVersion]
  );
  const [pathwayId, setPathwayId] = useState(preferredPathway?.id ?? ALL_VALUE);

  const courseUnits = useMemo(
    () => filterCourseUnits(selectedVersion, pathwayId),
    [pathwayId, selectedVersion]
  );
  const [courseUnitId, setCourseUnitId] = useState(courseUnits[0]?.id ?? NONE_VALUE);

  const selectedCourseUnit = useMemo(
    () => courseUnits.find((courseUnit) => courseUnit.id === courseUnitId),
    [courseUnitId, courseUnits]
  );
  const [teachingElementId, setTeachingElementId] = useState(ALL_VALUE);

  const chapterAssignments = useMemo(
    () => getCourseUnitAssignments(selectedCourseUnit, teachingElementId),
    [selectedCourseUnit, teachingElementId]
  );
  const [chapterAssignmentId, setChapterAssignmentId] = useState(ALL_VALUE);

  useEffect(() => {
    if (!selectedVersion && preferredVersion) {
      setProgramVersionId(preferredVersion.id);
    }
  }, [preferredVersion, selectedVersion]);

  useEffect(() => {
    if (!selectedVersion) return;
    const validPathway =
      pathwayId === ALL_VALUE ||
      selectedVersion.pathways.some((pathway) => pathway.id === pathwayId);
    if (!validPathway) {
      setPathwayId(findPreferredPathway(selectedVersion)?.id ?? ALL_VALUE);
    }
  }, [pathwayId, selectedVersion]);

  useEffect(() => {
    if (courseUnits.length === 0) {
      setCourseUnitId(NONE_VALUE);
      return;
    }
    if (!courseUnits.some((courseUnit) => courseUnit.id === courseUnitId)) {
      setCourseUnitId(courseUnits[0].id);
    }
  }, [courseUnitId, courseUnits]);

  useEffect(() => {
    if (
      teachingElementId !== ALL_VALUE &&
      !selectedCourseUnit?.teachingElements.some((teachingElement) => teachingElement.id === teachingElementId)
    ) {
      setTeachingElementId(ALL_VALUE);
    }
  }, [selectedCourseUnit, teachingElementId]);

  useEffect(() => {
    if (
      chapterAssignmentId !== ALL_VALUE &&
      !chapterAssignments.some((assignment) => assignment.id === chapterAssignmentId)
    ) {
      setChapterAssignmentId(ALL_VALUE);
    }
  }, [chapterAssignmentId, chapterAssignments]);

  const displayedAssignments = useMemo(
    () =>
      chapterAssignmentId === ALL_VALUE
        ? chapterAssignments
        : chapterAssignments.filter((assignment) => assignment.id === chapterAssignmentId),
    [chapterAssignmentId, chapterAssignments]
  );

  const activeThemeIds = useMemo(
    () =>
      getActiveThemeIds({
        courseUnit: selectedCourseUnit,
        teachingElementId,
        chapterAssignmentId,
        assignments: displayedAssignments,
      }),
    [chapterAssignmentId, displayedAssignments, selectedCourseUnit, teachingElementId]
  );

  const scopedExamExercises = useMemo(
    () =>
      activeThemeIds.size === 0
        ? []
        : workspace.examExercises.filter((exercise) =>
            hasIntersection(exercise.themeIds, activeThemeIds)
          ),
    [activeThemeIds, workspace.examExercises]
  );

  const trainingQuizCount = countQuizzes(displayedAssignments);
  const questionCount = displayedAssignments.reduce(
    (total, assignment) => total + assignment.questionCount,
    0
  );

  if (workspace.programVersions.length === 0) {
    return (
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-base">Aucune maquette</CardTitle>
          <CardDescription>
            Aucun contenu santé ne peut être piloté tant que l&apos;établissement n&apos;a pas de maquette.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="mt-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Sélection</CardTitle>
          <CardDescription>
            {workspace.institution.name}
            {workspace.institution.city ? ` · ${workspace.institution.city}` : ""}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-5">
          <FilterSelect
            label="Maquette"
            value={programVersionId}
            onChange={(value) => {
              setProgramVersionId(value);
              setPathwayId(ALL_VALUE);
              setCourseUnitId(NONE_VALUE);
              setTeachingElementId(ALL_VALUE);
              setChapterAssignmentId(ALL_VALUE);
            }}
            options={workspace.programVersions.map((version) => ({
              value: version.id,
              label: `${version.program.code} · ${version.academicYear} · ${version.studyLevel}`,
            }))}
          />
          <FilterSelect
            label="Filière"
            value={pathwayId}
            onChange={(value) => {
              setPathwayId(value);
              setCourseUnitId(NONE_VALUE);
              setTeachingElementId(ALL_VALUE);
              setChapterAssignmentId(ALL_VALUE);
            }}
            options={[
              { value: ALL_VALUE, label: "Toutes les filières" },
              ...(selectedVersion?.pathways.map((pathway) => ({
                value: pathway.id,
                label: pathway.campus ? `${pathway.name} · ${pathway.campus}` : pathway.name,
              })) ?? []),
            ]}
          />
          <FilterSelect
            label="UE"
            value={courseUnitId}
            onChange={(value) => {
              setCourseUnitId(value);
              setTeachingElementId(ALL_VALUE);
              setChapterAssignmentId(ALL_VALUE);
            }}
            options={
              courseUnits.length > 0
                ? courseUnits.map((courseUnit) => ({
                    value: courseUnit.id,
                    label: formatCodeTitle(courseUnit.code, courseUnit.shortTitle ?? courseUnit.title),
                  }))
                : [{ value: NONE_VALUE, label: "Aucune UE" }]
            }
          />
          <FilterSelect
            label="EC"
            value={teachingElementId}
            onChange={(value) => {
              setTeachingElementId(value);
              setChapterAssignmentId(ALL_VALUE);
            }}
            options={[
              { value: ALL_VALUE, label: "Tous les EC" },
              ...(selectedCourseUnit?.teachingElements.map((teachingElement) => ({
                value: teachingElement.id,
                label: formatCodeTitle(
                  teachingElement.code,
                  teachingElement.shortTitle ?? teachingElement.title
                ),
              })) ?? []),
            ]}
          />
          <FilterSelect
            label="Chapitre"
            value={chapterAssignmentId}
            onChange={setChapterAssignmentId}
            options={[
              { value: ALL_VALUE, label: "Tous les chapitres" },
              ...chapterAssignments.map((assignment) => ({
                value: assignment.id,
                label: assignment.displayGroupLabel
                  ? `${assignment.displayGroupLabel} · ${assignment.title}`
                  : assignment.title,
              })),
            ]}
          />
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Chapitres" value={displayedAssignments.length} />
        <MetricCard label="QCM d&apos;entraînement" value={trainingQuizCount} />
        <MetricCard label="Questions" value={questionCount} />
        <MetricCard label="Annales QCM" value={scopedExamExercises.length} />
      </div>

      {selectedCourseUnit ? (
        <CourseUnitSummary courseUnit={selectedCourseUnit} />
      ) : null}

      <TrainingQuizPanel assignments={displayedAssignments} />
      <ExamExercisePanel exercises={scopedExamExercises} hasThemeScope={activeThemeIds.size > 0} />
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-semibold text-muted-foreground">{label}</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-base border border-default bg-neutral-primary-soft p-4">
      <div className="text-xs font-semibold uppercase text-muted-foreground">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-heading">{value}</div>
    </div>
  );
}

function CourseUnitSummary({ courseUnit }: { courseUnit: HealthInstitutionContentCourseUnit }) {
  return (
    <div className="rounded-base border border-default bg-background p-4">
      <div className="flex flex-wrap items-center gap-2">
        <BookOpen className="h-4 w-4 text-muted-foreground" />
        <h2 className="text-base font-semibold text-heading">
          {formatCodeTitle(courseUnit.code, courseUnit.title)}
        </h2>
        <Badge variant={coverageVariant[courseUnit.coverageStatus]}>
          {healthCourseUnitCoverageStatusLabels[courseUnit.coverageStatus]}
        </Badge>
        <Badge variant={courseUnit.isPublished ? "default" : "outline"}>
          {courseUnit.isPublished ? "Publié" : "Brouillon"}
        </Badge>
      </div>
      <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted-foreground">
        <span>{courseUnit.blockTitle}</span>
        {courseUnit.semester ? <span>Semestre {courseUnit.semester}</span> : null}
        {courseUnit.ects ? <span>{courseUnit.ects} ECTS</span> : null}
        <span>
          {courseUnit.teachingElements.length} EC · {courseUnit.themeIds.length} thème
          {courseUnit.themeIds.length > 1 ? "s" : ""}
        </span>
      </div>
    </div>
  );
}

function TrainingQuizPanel({
  assignments,
}: {
  assignments: HealthInstitutionContentChapterAssignment[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">QCM d&apos;entraînement</CardTitle>
      </CardHeader>
      <CardContent>
        {assignments.length > 0 ? (
          <div className="space-y-4">
            {assignments.map((assignment) => (
              <ChapterQuizBlock key={assignment.id} assignment={assignment} />
            ))}
          </div>
        ) : (
          <EmptyState title="Aucun chapitre rattaché" />
        )}
      </CardContent>
    </Card>
  );
}

function ChapterQuizBlock({
  assignment,
}: {
  assignment: HealthInstitutionContentChapterAssignment;
}) {
  const quizCount = countQuizzes([assignment]);

  return (
    <section className="rounded-base border border-default bg-background p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
            <Link
              href={`/admin/chapters/${assignment.chapterId}`}
              className="font-semibold text-heading hover:text-fg-brand"
            >
              {assignment.title}
            </Link>
            {assignment.displayGroupLabel ? (
              <Badge variant="secondary">{assignment.displayGroupLabel}</Badge>
            ) : null}
            <Badge variant={coverageVariant[assignment.coverageStatus]}>
              {healthCourseUnitCoverageStatusLabels[assignment.coverageStatus]}
            </Badge>
            <Badge variant={assignment.isPublished ? "default" : "outline"}>
              {assignment.isPublished ? "Publié" : "Brouillon"}
            </Badge>
          </div>
          <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted-foreground">
            <span>{quizCount} QCM</span>
            <span>
              {assignment.questionCount} question{assignment.questionCount > 1 ? "s" : ""}
            </span>
            <span>{assignment.slug}</span>
            <span>Modifié le {formatDateTime(new Date(assignment.updatedAt))}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline" size="xs">
            <Link href={`/admin/training/quiz-questions?chapterId=${assignment.chapterId}`}>
              <FileQuestion className="h-3.5 w-3.5" />
              Questions
            </Link>
          </Button>
          <Button asChild variant="outline" size="xs">
            <Link href={`/admin/training/qcms/${assignment.chapterId}/edit`}>
              <Pencil className="h-3.5 w-3.5" />
              Structure
            </Link>
          </Button>
        </div>
      </div>

      {assignment.sections.length > 0 ? (
        <div className="mt-4 space-y-3">
          {assignment.sections.map((section) => (
            <div key={section.id} className="rounded-base border border-default bg-neutral-primary-soft p-3">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-semibold text-heading">{section.title}</h3>
                <Badge variant="secondary">{section.kind === "SYNTHESIS" ? "Synthèse" : "Thème"}</Badge>
                <Badge variant={section.isPublished ? "default" : "outline"}>
                  {section.isPublished ? "Publié" : "Brouillon"}
                </Badge>
              </div>
              {section.quizzes.length > 0 ? (
                <div className="mt-3 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
                  {section.quizzes.map((quiz) => (
                    <div
                      key={quiz.id}
                      className={cn(
                        "rounded-base border border-default bg-background p-3",
                        !quiz.isPublished && "opacity-75"
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-sm font-medium text-heading">{quiz.title}</div>
                          <div className="mt-1 text-xs text-muted-foreground">
                            {quiz.questionCount} question{quiz.questionCount > 1 ? "s" : ""}
                            {quiz.stage ? ` · ${stageLabels[quiz.stage] ?? quiz.stage}` : ""}
                          </div>
                        </div>
                        <Badge variant={quiz.isPublished ? "default" : "outline"}>
                          {quiz.isPublished ? "Publié" : "Brouillon"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-sm text-muted-foreground">Aucun QCM structuré.</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-sm text-muted-foreground">Aucune section de QCM structurée.</p>
      )}
    </section>
  );
}

function ExamExercisePanel({
  exercises,
  hasThemeScope,
}: {
  exercises: HealthInstitutionContentExamExercise[];
  hasThemeScope: boolean;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Annales QCM par thèmes</CardTitle>
        <CardDescription>Rattachement indirect via les thèmes associés.</CardDescription>
      </CardHeader>
      <CardContent>
        {exercises.length > 0 ? (
          <div className="grid gap-3 md:grid-cols-2">
            {exercises.map((exercise) => (
              <Link
                key={exercise.id}
                href={`/admin/exercises/${exercise.id}`}
                className="rounded-base border border-default bg-background p-4 transition-colors hover:bg-neutral-primary-soft"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold text-heading">{exercise.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {exercise.examPaper.label} · {exercise.examPaper.sessionYear}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {exercise.examPaper.teaching} · {exercise.examPaper.subject}
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <EmptyState
            title={hasThemeScope ? "Aucune annale QCM associée" : "Aucun thème associé"}
          />
        )}
      </CardContent>
    </Card>
  );
}

function EmptyState({ title }: { title: string }) {
  return (
    <div className="rounded-base border border-default bg-background px-4 py-8 text-center">
      <div className="text-sm font-semibold text-heading">{title}</div>
    </div>
  );
}
