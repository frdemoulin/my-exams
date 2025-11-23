import { Course, Grade, Subject } from '@prisma/client';

export type CourseWithRelations = Course & {
  grade: Grade;
  subject: Subject;
};

export type CoursesByGrade = {
  grade: Grade;
  courses: CourseWithRelations[];
};
