"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import OpenAI from "openai";

import prisma from "@/lib/db/prisma";
import { createThemeSchema } from "@/lib/validation";
import { setCrudSuccessToast } from "@/lib/toast";
import { CreateThemeErrors, CreateThemeValues } from "./theme.types";

type CreateThemeOptions = {
    redirectTo?: string | null;
    revalidatePaths?: string[];
};

type ThemeDraftSuggestion = {
    title: string;
    shortTitle: string;
    shortDescription: string;
    longDescription: string;
    description: string;
    suggestedDomainId: string | null;
};

type SuggestThemeDraftResult =
    | {
          success: true;
          data: ThemeDraftSuggestion;
          source: "mock" | "openai";
      }
    | {
          success: false;
          error: string;
      };

const normalizeText = (value: string) => value.replace(/\s+/g, " ").trim();
const normalizeForMatch = (value: string) =>
    normalizeText(value)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

const clipText = (value: string, maxLength: number) => {
    const normalized = normalizeText(value);
    if (normalized.length <= maxLength) return normalized;

    const clipped = normalized.slice(0, maxLength - 3);
    const lastSpace = clipped.lastIndexOf(" ");
    const safeClip = lastSpace > 20 ? clipped.slice(0, lastSpace) : clipped;
    return `${safeClip}...`;
};

const inferShortTitle = (title: string) => {
    const normalizedTitle = normalizeText(title);
    if (normalizedTitle.length <= 24) return "";

    const firstChunk = normalizedTitle
        .split(/[:(|,-]/)
        .map((part) => normalizeText(part))
        .find((part) => part.length > 0 && part.length < normalizedTitle.length && part.length <= 40);

    if (firstChunk) return firstChunk;
    const truncated = clipText(normalizedTitle, 40);
    return truncated.length < normalizedTitle.length ? truncated : "";
};

const DOMAIN_STOP_WORDS = new Set([
    "de",
    "du",
    "des",
    "la",
    "le",
    "les",
    "et",
    "en",
    "sur",
    "dans",
    "pour",
    "avec",
    "ou",
    "d",
    "l",
    "the",
]);

const tokenizeForMatch = (value: string) =>
    normalizeForMatch(value)
        .split(/[^a-z0-9]+/)
        .filter((token) => token.length >= 3 && !DOMAIN_STOP_WORDS.has(token));

const inferDomainFromTitle = (
    title: string,
    domains: Array<{
        id: string;
        longDescription: string;
        shortDescription: string;
        subjectLongDescription: string | null;
        subjectShortDescription: string | null;
    }>
) => {
    const titleTokens = tokenizeForMatch(title);
    if (titleTokens.length === 0) return null;

    let bestMatch: { id: string; score: number } | null = null;

    for (const domain of domains) {
        const haystack = [
            domain.longDescription,
            domain.shortDescription,
            domain.subjectLongDescription,
            domain.subjectShortDescription,
        ]
            .filter(Boolean)
            .join(" ");
        const normalizedHaystack = normalizeForMatch(haystack);
        const domainTokens = new Set(tokenizeForMatch(haystack));
        let score = 0;

        for (const token of titleTokens) {
            if (domainTokens.has(token)) {
                score += 3;
                continue;
            }
            if (normalizedHaystack.includes(token)) {
                score += 1;
            }
        }

        if (!bestMatch || score > bestMatch.score) {
            bestMatch = { id: domain.id, score };
        }
    }

    return bestMatch && bestMatch.score > 0 ? bestMatch.id : null;
};

const buildMockThemeDraft = (input: {
    title: string;
    domainLabel?: string | null;
    subjectLabel?: string | null;
    suggestedDomainId?: string | null;
}): ThemeDraftSuggestion => {
    const title = normalizeText(input.title);
    const shortTitle = inferShortTitle(title);
    const domainLabel = input.domainLabel ? normalizeText(input.domainLabel) : null;
    const subjectLabel = input.subjectLabel ? normalizeText(input.subjectLabel) : null;
    const scopedContext = [domainLabel, subjectLabel].filter(Boolean).join(" / ");
    const lowerTitle = title.charAt(0).toLowerCase() + title.slice(1);

    const shortDescription = clipText(
        domainLabel
            ? `${title} dans le domaine ${domainLabel}, avec les notions et usages essentiels.`
            : `${title}, avec les notions clés et les usages essentiels.`,
        140
    );
    const longDescription = clipText(
        [
            `Thème centré sur ${lowerTitle}.`,
            scopedContext
                ? `Il s'inscrit dans ${scopedContext} et sert à regrouper les exercices qui mobilisent principalement cette notion.`
                : "Il sert à regrouper les exercices qui mobilisent principalement cette notion.",
            "Le périmètre couvre les propriétés usuelles, les interprétations attendues et les applications classiques sans se disperser sur des notions trop périphériques.",
        ].join(" "),
        600
    );
    const description = clipText(
        domainLabel
            ? `À utiliser lorsque l'exercice porte principalement sur ${lowerTitle} dans le domaine ${domainLabel}, même si d'autres notions secondaires apparaissent.`
            : `À utiliser lorsque l'exercice porte principalement sur ${lowerTitle}, même si d'autres notions secondaires apparaissent.`,
        800
    );

    return {
        title,
        shortTitle,
        shortDescription,
        longDescription,
        description,
        suggestedDomainId: input.suggestedDomainId ?? null,
    };
};

const sanitizeThemeDraft = (
    data: Partial<ThemeDraftSuggestion> | null | undefined,
    fallback: ThemeDraftSuggestion
): ThemeDraftSuggestion => {
    const title = clipText(data?.title?.trim() || fallback.title, 80);
    const rawShortTitle = clipText(data?.shortTitle?.trim() || fallback.shortTitle, 40);
    const shortTitle = rawShortTitle && rawShortTitle.length < title.length ? rawShortTitle : "";

    return {
        title,
        shortTitle,
        shortDescription: clipText(data?.shortDescription?.trim() || fallback.shortDescription, 140),
        longDescription: clipText(data?.longDescription?.trim() || fallback.longDescription, 600),
        description: clipText(data?.description?.trim() || fallback.description, 800),
        suggestedDomainId: data?.suggestedDomainId?.trim() || fallback.suggestedDomainId,
    };
};

export const suggestThemeDraftFromTitle = async (input: {
    title: string;
    domainId?: string;
}): Promise<SuggestThemeDraftResult> => {
    const title = normalizeText(input.title);

    if (!title) {
        return {
            success: false,
            error: "Renseigne un titre avant de lancer l'enrichissement.",
        };
    }

    const domain = input.domainId
        ? await prisma.domain.findUnique({
              where: { id: input.domainId },
              select: {
                  longDescription: true,
                  shortDescription: true,
                  subject: {
                      select: {
                          longDescription: true,
                          shortDescription: true,
                      },
                  },
              },
          })
        : null;
    const domains = await prisma.domain.findMany({
        select: {
            id: true,
            longDescription: true,
            shortDescription: true,
            subject: {
                select: {
                    longDescription: true,
                    shortDescription: true,
                },
            },
        },
        orderBy: [{ order: "asc" }, { longDescription: "asc" }],
    });

    const domainLabel = domain?.longDescription ?? domain?.shortDescription ?? null;
    const subjectLabel = domain?.subject?.longDescription ?? domain?.subject?.shortDescription ?? null;
    const suggestedDomainId =
        input.domainId ??
        inferDomainFromTitle(
            title,
            domains.map((candidate) => ({
                id: candidate.id,
                longDescription: candidate.longDescription,
                shortDescription: candidate.shortDescription,
                subjectLongDescription: candidate.subject?.longDescription ?? null,
                subjectShortDescription: candidate.subject?.shortDescription ?? null,
            }))
        );
    const mockDraft = buildMockThemeDraft({
        title,
        domainLabel,
        subjectLabel,
        suggestedDomainId,
    });

    const useMockLlm =
        (process.env.USE_MOCK_LLM !== "false" && !process.env.OPENAI_API_KEY) ||
        process.env.USE_MOCK_LLM === "true";

    if (useMockLlm) {
        return {
            success: true,
            data: mockDraft,
            source: "mock",
        };
    }

    try {
        const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        const model = process.env.LLM_MODEL ?? "gpt-4o-mini";
        const prompt = `
Tu aides à préparer une fiche de thème pédagogique pour classer des exercices d'annales.
À partir d'un titre de thème et de son contexte éventuel (domaine, matière), tu proposes des champs de formulaire cohérents.

Retourne uniquement un JSON conforme à ce schéma :
{
  "title": string,
  "shortTitle": string,
  "shortDescription": string,
  "longDescription": string,
  "description": string,
  "suggestedDomainId": string | null
}

Règles :
- Réponse en français.
- Aucun texte hors JSON.
- Conserve le titre saisi comme base, en ne corrigeant que d'éventuelles maladresses minimes.
- "shortTitle" doit faire 40 caractères maximum et rester plus court que "title".
- "shortDescription" doit faire 140 caractères maximum, en une phrase claire.
- "longDescription" doit faire 2 à 4 phrases, 600 caractères maximum, avec un périmètre pédagogique précis.
- "description" doit être une aide admin, idéalement formulée à partir de "À utiliser lorsque...".
- Pas de markdown, pas de listes, pas de banalités du type "thème important".
- Si un domaine est fourni, ancre bien la proposition dans ce domaine.
- Si aucun domaine n'est fourni, propose "suggestedDomainId" uniquement à partir de la liste autorisée ci-dessous. Sinon retourne null.
- Si un domaine est déjà fourni, retourne ce même id dans "suggestedDomainId".

Liste des domaines autorisés :
${domains
    .map((candidate) => {
        const subject = candidate.subject?.longDescription || candidate.subject?.shortDescription;
        return `- ${candidate.id} : ${candidate.longDescription}${subject ? ` (matière: ${subject})` : ""}`;
    })
    .join("\n")}
        `;

        const completion = await client.chat.completions.create({
            model,
            temperature: 0.3,
            max_tokens: 350,
            response_format: { type: "json_object" },
            messages: [
                { role: "system", content: prompt },
                {
                    role: "user",
                    content: [
                        `TITRE DU THÈME:\n${title}`,
                        domainLabel ? `DOMAINE:\n${domainLabel}` : null,
                        subjectLabel ? `MATIÈRE:\n${subjectLabel}` : null,
                    ]
                        .filter(Boolean)
                        .join("\n\n"),
                },
            ],
        });

        const content = completion.choices[0]?.message?.content ?? "{}";
        const parsed = JSON.parse(content) as Partial<ThemeDraftSuggestion>;

        return {
            success: true,
            data: sanitizeThemeDraft(parsed, mockDraft),
            source: "openai",
        };
    } catch (error) {
        console.error("Erreur lors de la suggestion IA du thème, fallback mock:", error);
        return {
            success: true,
            data: mockDraft,
            source: "mock",
        };
    }
};

export const createTheme = async (formData: FormData, options?: CreateThemeOptions) => {
    const values = Object.fromEntries(formData.entries());
    
    const result = createThemeSchema.safeParse(values);

    if (result.success) {
        const { title, shortTitle, longDescription, shortDescription, domainId, description } = result.data;
        const normalizedDescription = description?.trim() ? description.trim() : null;
        const normalizedShortTitle = shortTitle?.trim() ? shortTitle.trim() : null;

        // create theme in database
        try {
            await prisma.theme.create({
                data: {
                    title,
                    shortTitle: normalizedShortTitle,
                    longDescription,
                    shortDescription,
                    domainId,
                    description: normalizedDescription
                }
            });
        } catch (error: any) {
            if (error.code === 'P2002') {
                throw new Error('Un thème avec ces descriptions existe déjà');
            }
            throw error;
        }
    } else {
        const errors: CreateThemeErrors = result.error.format();

        console.error('Error creating theme: ', errors);

        throw errors;
    }

    const paths = new Set(["/admin/themes", ...(options?.revalidatePaths ?? [])]);
    paths.forEach((path) => revalidatePath(path));
    await setCrudSuccessToast("theme", "created");
    if (options?.redirectTo !== null) {
        redirect(options?.redirectTo ?? "/admin/themes");
    }
}

type UpdateThemeOptions = {
    redirectTo?: string | null;
    revalidatePaths?: string[];
};

export const updateTheme = async (
    id: string | undefined,
    formData: FormData,
    options?: UpdateThemeOptions
) => {
    const values = Object.fromEntries(formData.entries());

    const result = createThemeSchema.safeParse(values);

    if (result.success) {
        const { title, shortTitle, longDescription, shortDescription, domainId, description } = result.data;
        const normalizedDescription = description?.trim() ? description.trim() : null;
        const normalizedShortTitle = shortTitle?.trim() ? shortTitle.trim() : null;

        try {
            await prisma.theme.update({
                where: {
                    id
                },
                data: {
                    title,
                    shortTitle: normalizedShortTitle,
                    longDescription,
                    shortDescription,
                    domainId,
                    description: normalizedDescription
                }
            });

            const paths = new Set(["/admin/themes", ...(options?.revalidatePaths ?? [])]);
            paths.forEach((path) => revalidatePath(path));
            await setCrudSuccessToast("theme", "updated");
            if (options?.redirectTo !== null) {
                redirect(options?.redirectTo ?? "/admin/themes");
            }
        } catch (error) {
            console.error('Error updating theme: ', error);
            throw error;
        }
    } else {
        const errors = result.error.format();
        console.error('Invalid theme data: ', errors);
        throw errors;
    }
}

type DeleteThemeOptions = {
    redirectTo?: string | null;
    revalidatePaths?: string[];
    skipSuccessToast?: boolean;
};

export const deleteTheme = async (id: string, options?: DeleteThemeOptions) => {
    try {
        await prisma.theme.delete({
            where: {
                id
            }
        });
    } catch (error) {
        console.log('Error deleting theme: ', error);

        throw error;
    }

    const paths = new Set(["/admin/themes", ...(options?.revalidatePaths ?? [])]);
    paths.forEach((path) => revalidatePath(path));
    if (!options?.skipSuccessToast) {
        await setCrudSuccessToast("theme", "deleted");
    }
    if (options?.redirectTo !== null) {
        redirect(options?.redirectTo ?? "/admin/themes");
    }
}
