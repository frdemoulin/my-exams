export { fetchTeachings, fetchTeachingsByGrade, fetchTeachingsByGradeId, fetchLyceeTeachings, fetchTeachingById, fetchSpecialties, fetchTeachingsOptions } from './teaching.queries';
export { createTeaching, updateTeaching, deleteTeaching } from './teaching.actions';
export type { TeachingWithRelations, TeachingsByGrade, CreateTeachingErrors } from './teaching.types';
export { createTeachingSchema } from './teaching.types';
