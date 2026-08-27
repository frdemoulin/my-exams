import type { HealthTrainingAuthorQuestion } from "@/core/questions/health-author-question.types";
import { UE14_COLLE_C01_CHIMIE_FONDAMENTAUX_QUESTIONS } from "../authoring/health-colle-ue14-c01-chimie-fondamentaux.author.seed";
import { UE14_COLLE_C02_QUESTIONS } from "../authoring/health-colle-ue14-c02-biochimie-glucides.author.seed";
import { UE14_COLLE_C03_QUESTIONS } from "../authoring/health-colle-ue14-c03-biologie-cellulaire-architecture-cellulaire.author.seed";
import { UE14_COLLE_C04_QUESTIONS } from "../authoring/health-colle-ue14-c04-chimie-des-atomes-aux-molecules-organiques.author.seed";
import { UE14_COLLE_C05_QUESTIONS } from "../authoring/health-colle-ue14-c05-biochimie-lipides.author.seed";
import { UE14_COLLE_C06_QUESTIONS } from "../authoring/health-colle-ue14-c06-biologie-cellulaire-trafic-et-compartiments.author.seed";
import { UE14_COLLE_C07_QUESTIONS } from "../authoring/health-colle-ue14-c07-chimie-fonctions-et-reactivite.author.seed";
import { UE14_COLLE_C08_QUESTIONS } from "../authoring/health-colle-ue14-c08-biochimie-acides-amines-et-proteines.author.seed";
import { UE14_COLLE_C09_QUESTIONS } from "../authoring/health-colle-ue14-c09-biologie-cellulaire-cellule-integree.author.seed";
import { UE14_COLLE_C10_QUESTIONS } from "../authoring/health-colle-ue14-c10-chimie-colle-cumulative-ec.author.seed";
import { UE14_COLLE_C11_QUESTIONS } from "../authoring/health-colle-ue14-c11-biochimie-colle-cumulative-ec.author.seed";
import { UE14_COLLE_C12_QUESTIONS } from "../authoring/health-colle-ue14-c12-grande-colle-ue14.author.seed";
import type { ThemeIdsByQuestionStableId } from "../../health-mock-exam-theme-ids";

export type UE14ColleTeachingElementKey =
  | "CHIMIE"
  | "BIOCHIMIE"
  | "BIOLOGIE_CELLULAIRE";

export type UE14HealthColleSectionSeed = {
  title: string;
  teachingElementKey: UE14ColleTeachingElementKey;
  questions: HealthTrainingAuthorQuestion[];
};

export type UE14HealthColleSeed = {
  code: string;
  title: string;
  description: string;
  durationSeconds: number;
  order: number;
  sections: UE14HealthColleSectionSeed[];
  themeIdsByQuestionStableId?: ThemeIdsByQuestionStableId;
};

export const UE14_HEALTH_COLLE_SEEDS: UE14HealthColleSeed[] = [
  {
    code: "C01",
    title: "Chimie — Fondamentaux",
    description: "Chimie générale · Ch. 1 à 4",
    durationSeconds: 1800,
    order: 1,
    sections: [
      {
        title: "Chimie — Fondamentaux",
        teachingElementKey: "CHIMIE",
        questions: UE14_COLLE_C01_CHIMIE_FONDAMENTAUX_QUESTIONS,
      },
    ],
  },
  {
    code: "C02",
    title: "Biochimie — Glucides",
    description: "Biochimie · Ch. 1 à 3",
    durationSeconds: 1800,
    order: 2,
    sections: [
      {
        title: "Biochimie — Glucides",
        teachingElementKey: "BIOCHIMIE",
        questions: UE14_COLLE_C02_QUESTIONS,
      },
    ],
  },
  {
    code: "C03",
    title: "Biologie cellulaire — Architecture cellulaire",
    description: "Biologie cellulaire · Ch. 1 à 3",
    durationSeconds: 1800,
    order: 3,
    sections: [
      {
        title: "Biologie cellulaire — Architecture cellulaire",
        teachingElementKey: "BIOLOGIE_CELLULAIRE",
        questions: UE14_COLLE_C03_QUESTIONS,
      },
    ],
  },
  {
    code: "C04",
    title: "Chimie — Des atomes aux molécules organiques",
    description: "Chimie générale + Chimie organique 2.1 à 2.3",
    durationSeconds: 1800,
    order: 4,
    sections: [
      {
        title: "Chimie — Des atomes aux molécules organiques",
        teachingElementKey: "CHIMIE",
        questions: UE14_COLLE_C04_QUESTIONS,
      },
    ],
  },
  {
    code: "C05",
    title: "Biochimie — Lipides",
    description: "Biochimie · Lipides + rappels glucides",
    durationSeconds: 1800,
    order: 5,
    sections: [
      {
        title: "Biochimie — Lipides",
        teachingElementKey: "BIOCHIMIE",
        questions: UE14_COLLE_C05_QUESTIONS,
      },
    ],
  },
  {
    code: "C06",
    title: "Biologie cellulaire — Trafic et compartiments",
    description: "Biologie cellulaire · Ch. 4 à 6 + rappels",
    durationSeconds: 1800,
    order: 6,
    sections: [
      {
        title: "Biologie cellulaire — Trafic et compartiments",
        teachingElementKey: "BIOLOGIE_CELLULAIRE",
        questions: UE14_COLLE_C06_QUESTIONS,
      },
    ],
  },
  {
    code: "C07",
    title: "Chimie — Fonctions et réactivité",
    description: "Chimie générale + Chimie organique",
    durationSeconds: 1800,
    order: 7,
    sections: [
      {
        title: "Chimie — Fonctions et réactivité",
        teachingElementKey: "CHIMIE",
        questions: UE14_COLLE_C07_QUESTIONS,
      },
    ],
  },
  {
    code: "C08",
    title: "Biochimie — Acides aminés et protéines",
    description: "Biochimie · Acides aminés et protéines + acquis antérieurs",
    durationSeconds: 1800,
    order: 8,
    sections: [
      {
        title: "Biochimie — Acides aminés et protéines",
        teachingElementKey: "BIOCHIMIE",
        questions: UE14_COLLE_C08_QUESTIONS,
      },
    ],
  },
  {
    code: "C09",
    title: "Biologie cellulaire — Cellule intégrée",
    description: "Biologie cellulaire · Ch. 7 à 9 + rappels Ch. 1 à 6",
    durationSeconds: 1800,
    order: 9,
    sections: [
      {
        title: "Biologie cellulaire — Cellule intégrée",
        teachingElementKey: "BIOLOGIE_CELLULAIRE",
        questions: UE14_COLLE_C09_QUESTIONS,
      },
    ],
  },
  {
    code: "C10",
    title: "Chimie — Colle cumulative EC",
    description: "Toute la Chimie · cumulative",
    durationSeconds: 2700,
    order: 10,
    sections: [
      {
        title: "Chimie — Colle cumulative EC",
        teachingElementKey: "CHIMIE",
        questions: UE14_COLLE_C10_QUESTIONS,
      },
    ],
  },
  {
    code: "C11",
    title: "Biochimie — Colle cumulative EC",
    description: "Toute la Biochimie · cumulative",
    durationSeconds: 2700,
    order: 11,
    sections: [
      {
        title: "Biochimie — Colle cumulative EC",
        teachingElementKey: "BIOCHIMIE",
        questions: UE14_COLLE_C11_QUESTIONS,
      },
    ],
  },
  {
    code: "C12",
    title: "Grande colle UE14",
    description: "3 EC · Chimie + Biochimie + Biologie cellulaire",
    durationSeconds: 3600,
    order: 12,
    sections: [
      {
        title: "Chimie",
        teachingElementKey: "CHIMIE",
        questions: UE14_COLLE_C12_QUESTIONS.slice(0, 16),
      },
      {
        title: "Biochimie",
        teachingElementKey: "BIOCHIMIE",
        questions: UE14_COLLE_C12_QUESTIONS.slice(16, 33),
      },
      {
        title: "Biologie cellulaire",
        teachingElementKey: "BIOLOGIE_CELLULAIRE",
        questions: UE14_COLLE_C12_QUESTIONS.slice(33, 50),
      },
    ],
  },
];
