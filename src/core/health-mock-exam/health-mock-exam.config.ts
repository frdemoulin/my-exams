export type HealthMockExamBlueprintSection = {
  teachingElementSlug: string;
  title: string;
  questionCount: number;
  firstQuestion: number;
  lastQuestion: number;
};

export type HealthMockExamBlueprint = {
  durationMinutes: number;
  questionCount: number;
  sections: HealthMockExamBlueprintSection[];
};

// Les maquettes sont des données métier : une nouvelle UE peut déclarer la
// sienne sans transformer les écrans de passage ou les tentatives.
export const healthMockExamBlueprints: Record<string, HealthMockExamBlueprint> = {
  "fixture-examen-blanc-sante": {
    durationMinutes: 15,
    questionCount: 5,
    sections: [
      {
        teachingElementSlug: "interface-uness",
        title: "Interface UNESS",
        questionCount: 5,
        firstQuestion: 1,
        lastQuestion: 5,
      },
    ],
  },
  "ue14-biochimie-biologie-cellulaire-chimie": {
    durationMinutes: 150,
    questionCount: 100,
    sections: [
      {
        teachingElementSlug: "chimie",
        title: "Chimie",
        questionCount: 28,
        firstQuestion: 1,
        lastQuestion: 28,
      },
      {
        teachingElementSlug: "biochimie",
        title: "Biochimie",
        questionCount: 34,
        firstQuestion: 29,
        lastQuestion: 62,
      },
      {
        teachingElementSlug: "biologie-cellulaire",
        title: "Biologie cellulaire",
        questionCount: 38,
        firstQuestion: 63,
        lastQuestion: 100,
      },
    ],
  },
};

export function getHealthMockExamBlueprint(courseUnitSlug: string) {
  return healthMockExamBlueprints[courseUnitSlug] ?? null;
}
