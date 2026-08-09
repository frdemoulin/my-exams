export type {
  AuthorQrocNumberAnswer,
  AuthorQrocTextAnswer,
  AuthorQzoneExpectedZone,
  AuthorQzoneImage,
  BaseHealthAuthorQuestion,
  HealthAuthorChoice,
  HealthSeedQuestion,
  HealthTrainingAuthorQrmQuestion,
  HealthTrainingAuthorQrocQuestion,
  HealthTrainingAuthorQrpQuestion,
  HealthTrainingAuthorQrplQuestion,
  HealthTrainingAuthorQruQuestion,
  HealthTrainingAuthorQuestion,
  HealthTrainingAuthorQzoneQuestion,
  LegacySeedQuestionInput,
} from "./health-author-question.types";

export {
  isHealthTrainingAuthorQuestion,
} from "./health-author-question.types";

export {
  assertHealthTrainingAuthorQuestionIsValid,
  validateHealthTrainingAuthorQuestion,
  type HealthAuthorQuestionValidationContext,
  type HealthAuthorQuestionValidationResult,
} from "./health-author-question-validation";

export {
  compileHealthTrainingAuthorQuestion,
  type CompiledHealthSeedQuestion,
} from "./health-author-question-compiler";
