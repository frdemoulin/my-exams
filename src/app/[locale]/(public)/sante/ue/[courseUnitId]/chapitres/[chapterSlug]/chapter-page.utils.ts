type CourseUnitLike = {
  code: string | null;
  shortTitle?: string | null;
  title: string;
};

type TeachingElementLike = {
  code: string | null;
  title: string;
  order?: number | null;
};

export const formatCourseUnitLabel = (courseUnit: CourseUnitLike) =>
  courseUnit.code
    ? `${courseUnit.code} · ${courseUnit.shortTitle ?? courseUnit.title}`
    : (courseUnit.shortTitle ?? courseUnit.title);

export const formatTeachingElementLabel = (teachingElement: TeachingElementLike) =>
  teachingElement.code
    ? `${teachingElement.code} · ${teachingElement.title}`
    : teachingElement.title;

export const formatTeachingElementBreadcrumbLabel = (
  teachingElement: TeachingElementLike
) =>
  teachingElement.code
    ? `${teachingElement.code} ${teachingElement.title}`
    : typeof teachingElement.order === 'number'
      ? `EC${teachingElement.order} ${teachingElement.title}`
      : teachingElement.title;

export const getSectionLabel = (index: number) => {
  let value = index + 1;
  let label = '';

  while (value > 0) {
    const remainder = (value - 1) % 26;
    label = String.fromCharCode(65 + remainder) + label;
    value = Math.floor((value - 1) / 26);
  }

  return label;
};

export const getHealthChapterHref = ({
  courseUnitId,
  chapterSlug,
}: {
  courseUnitId: string;
  chapterSlug: string;
}) => `/sante/ue/${courseUnitId}/chapitres/${chapterSlug}`;

export const getHealthChapterQuizHref = ({
  courseUnitId,
  chapterSlug,
  quizSlug,
}: {
  courseUnitId: string;
  chapterSlug: string;
  quizSlug: string;
}) => `/sante/ue/${courseUnitId}/chapitres/${chapterSlug}/qcm/${quizSlug}`;
