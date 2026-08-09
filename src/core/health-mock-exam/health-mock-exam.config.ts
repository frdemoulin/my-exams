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
    questionCount: 4,
    sections: [
      {
        teachingElementSlug: "interface-uness",
        title: "Interface UNESS",
        questionCount: 4,
        firstQuestion: 1,
        lastQuestion: 4,
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
        questionCount: 40,
        firstQuestion: 1,
        lastQuestion: 40,
      },
      {
        teachingElementSlug: "biochimie",
        title: "Biochimie",
        questionCount: 40,
        firstQuestion: 41,
        lastQuestion: 80,
      },
      {
        teachingElementSlug: "biologie-cellulaire",
        title: "Biologie cellulaire",
        questionCount: 20,
        firstQuestion: 81,
        lastQuestion: 100,
      },
    ],
  },
};

export function getHealthMockExamBlueprint(courseUnitSlug: string) {
  return healthMockExamBlueprints[courseUnitSlug] ?? null;
}
