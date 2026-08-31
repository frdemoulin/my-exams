import type { HealthMockExamSeed } from "../health-mock-exams.seed";
import { compileHealthTrainingAuthorQuestion } from "../../../src/core/questions/health-author-question-compiler";
import { UE14_EB01_EDITORIAL_SEED } from "./health-eb-ue14-eb01.author.seed";
import { UE14_EB01_THEME_MAPPING } from "./health-eb-ue14-eb01-theme-mapping.final";
import { UE14_EB02_EDITORIAL_SEED } from "./health-eb-ue14-eb02.author.seed";
import { UE14_EB02_THEME_MAPPING } from "./health-eb-ue14-eb02-theme-mapping.final";

const teachingElementSlugs: Record<string, string> = {
  CHIMIE: "chimie",
  BIOCHIMIE: "biochimie",
  BIOLOGIE_CELLULAIRE: "biologie-cellulaire",
};

function buildExamSeed(
  editorialSeed: any,
  themeMapping: ReadonlyArray<{ stableId: string; themeIds: readonly string[] }>,
  order: number
): HealthMockExamSeed {
  const questionsByStableId = new Map(
    editorialSeed.questions.map((q: any) => [q.stableId, q])
  );

  const groupsBySectionKey = new Map<
    string,
    Array<{ key: string; order: number; title: string; sharedStatement: string }>
  >();
  for (const group of editorialSeed.groups) {
    const firstQuestionStableId = group.questionStableIds[0];
    const q: any = questionsByStableId.get(firstQuestionStableId);
    if (!q) throw new Error(`Question ${firstQuestionStableId} introuvable pour groupe ${group.id}`);
    const sectionKey = q.ec;
    const existing = groupsBySectionKey.get(sectionKey) ?? [];
    existing.push({
      key: group.id,
      order: existing.length + 1,
      title: group.title,
      sharedStatement: group.sharedStatement,
    });
    groupsBySectionKey.set(sectionKey, existing);
  }

  const sections = editorialSeed.sections.map((sec: any) => {
    const teachingElementSlug = teachingElementSlugs[sec.teachingElementKey];
    if (!teachingElementSlug) {
      throw new Error(`TeachingElement inconnu: ${sec.teachingElementKey}`);
    }

    const sectionQuestions = sec.questionStableIds.map((stableId: string, idx: number) => {
      const q: any = questionsByStableId.get(stableId);
      if (!q) throw new Error(`Question ${stableId} introuvable dans seed.questions`);
      const compiled = compileHealthTrainingAuthorQuestion(q as any);
      return {
        slug: q.stableId,
        order: idx + 1,
        globalOrder: q.order,
        groupKey: q.groupId ?? undefined,
        difficulty: q.difficulty as any,
        questionType: compiled.questionType ?? undefined,
        answerFormat: (compiled.answerFormat ?? "SINGLE") as any,
        question: compiled.question,
        questionDiagram: compiled.questionDiagram,
        choices: (Array.isArray(compiled.choices) ? compiled.choices : []) as unknown[],
        correctChoiceIndexes: (Array.isArray(compiled.correctChoiceIndexes)
          ? compiled.correctChoiceIndexes
          : []) as number[],
        answerPayload: compiled.answerPayload as any,
        explanation: compiled.explanation ?? "",
        choiceExplanations: (Array.isArray(compiled.choiceExplanations)
          ? compiled.choiceExplanations
          : []) as string[],
      };
    });

    return {
      teachingElementSlug,
      title: sec.title,
      order: sec.order,
      questionCount: sectionQuestions.length,
      firstQuestion: sectionQuestions[0].globalOrder,
      lastQuestion: sectionQuestions[sectionQuestions.length - 1].globalOrder,
      groups: groupsBySectionKey.get(sec.teachingElementKey) ?? [],
      questions: sectionQuestions,
    };
  });

  const themeIdsByQuestionStableId: Record<string, string[]> = {};
  for (const item of themeMapping) {
    themeIdsByQuestionStableId[item.stableId] = [...item.themeIds];
  }

  return {
    institutionNameContains: "Reims Champagne-Ardenne",
    programVersionSlug: "las-2025-2026",
    courseUnitSlug: "ue14-biochimie-biologie-cellulaire-chimie",
    title: editorialSeed.exam.title,
    slug: editorialSeed.exam.slug,
    durationMinutes: editorialSeed.exam.durationMinutes,
    questionCount: editorialSeed.exam.questionCount,
    order,
    isPublished: true,
    sections,
    themeIdsByQuestionStableId,
  };
}

export const reimsUe14MockExams: HealthMockExamSeed[] = [
  buildExamSeed(UE14_EB01_EDITORIAL_SEED, UE14_EB01_THEME_MAPPING, 1),
  buildExamSeed(UE14_EB02_EDITORIAL_SEED, UE14_EB02_THEME_MAPPING, 2),
];
