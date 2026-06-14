import { Option } from "@/types/option";
import { HealthEntity } from "./health.schemas";

export type HealthAdminRow = {
    id: string;
    primary: string;
    secondary: string;
    details: string[];
    searchText: string;
    isActive: boolean;
    isPublished: boolean;
    updatedAt: string;
};

export type HealthFormOptions = {
    institutions: Option[];
    programs: Option[];
    programVersions: Option[];
    pathways: (Option & { programVersionId: string })[];
    blocks: (Option & { programVersionId: string; pathwayId?: string })[];
    courseUnits: (Option & {
        programVersionId: string;
        pathwayId?: string;
        blockId: string;
    })[];
    themes: Option[];
};

export type HealthRecord = Record<string, string | number | boolean | string[] | Date | null | undefined>;

export type HealthEntityConfig = {
    entity: HealthEntity;
    singular: string;
    plural: string;
    listTitle: string;
    indefinite: string;
    definite: string;
    demonstrative: string;
};
