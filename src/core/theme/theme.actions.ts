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

const buildThemeRevalidatePaths = (input: {
    domainIds?: string[];
    chapterIds?: string[];
    extraPaths?: string[];
}) => {
    const paths = new Set(["/admin/themes", ...(input.extraPaths ?? [])]);

    for (const domainId of input.domainIds ?? []) {
        paths.add(`/admin/domains/${domainId}`);
    }

    for (const chapterId of input.chapterIds ?? []) {
        paths.add(`/admin/chapters/${chapterId}`);
    }

    return paths;
};

type ThemeDraftSuggestion = {
    title: string;
    shortTitle: string;
    suggestedDomainIds: string[];
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

const normalizeIdList = (values: FormDataEntryValue[]) =>
    Array.from(
        new Set(
            values
                .map((value) => String(value).trim())
                .filter((value) => value.length > 0)
        )
    );

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
    domainLabels?: string[];
    subjectLabels?: string[];
    suggestedDomainIds?: string[];
}): ThemeDraftSuggestion => {
    const title = normalizeText(input.title);
    const shortTitle = inferShortTitle(title);
    const domainLabels = (input.domainLabels ?? []).map((value) => normalizeText(value)).filter(Boolean);
    const subjectLabels = (input.subjectLabels ?? []).map((value) => normalizeText(value)).filter(Boolean);
    const scopedContext = [...domainLabels, ...subjectLabels].filter(Boolean).join(" / ");

    const contextualShortTitle = scopedContext ? clipText(`${shortTitle || title} · ${scopedContext}`, 40) : shortTitle;

    return {
        title,
        shortTitle: contextualShortTitle && contextualShortTitle.length < title.length ? contextualShortTitle : shortTitle,
        suggestedDomainIds: normalizeIdList((input.suggestedDomainIds ?? []).map((value) => String(value))),
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
        suggestedDomainIds: normalizeIdList(
            (data?.suggestedDomainIds ?? fallback.suggestedDomainIds).map((value) => String(value))
        ),
    };
};

export const suggestThemeDraftFromTitle = async (input: {
    title: string;
    domainIds?: string[];
}): Promise<SuggestThemeDraftResult> => {
    const title = normalizeText(input.title);

    if (!title) {
        return {
            success: false,
            error: "Renseigne un titre avant de lancer l'enrichissement.",
        };
    }

    const selectedDomainIds = normalizeIdList((input.domainIds ?? []).map((value) => String(value)));
    const selectedDomains = selectedDomainIds.length
        ? await prisma.domain.findMany({
              where: { id: { in: selectedDomainIds } },
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
          })
        : [];
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

    const suggestedDomainId =
        selectedDomainIds[0] ??
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
        domainLabels: selectedDomains.map((domain) => domain.longDescription || domain.shortDescription),
        subjectLabels: selectedDomains.map(
            (domain) => domain.subject?.longDescription || domain.subject?.shortDescription || ""
        ),
        suggestedDomainIds: suggestedDomainId ? [suggestedDomainId] : selectedDomainIds,
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
À partir d'un titre de thème et de son contexte éventuel (domaines, matières), tu proposes des champs de formulaire cohérents.

Retourne uniquement un JSON conforme à ce schéma :
{
  "title": string,
  "shortTitle": string,
    "suggestedDomainIds": string[]
}

Règles :
- Réponse en français.
- Aucun texte hors JSON.
- Conserve le titre saisi comme base, en ne corrigeant que d'éventuelles maladresses minimes.
- "shortTitle" doit faire 40 caractères maximum et rester plus court que "title".
- Pas de markdown, pas de listes, pas de banalités du type "thème important".
- Si des domaines sont fournis, ancre bien la proposition dans ces domaines.
- Si aucun domaine n'est fourni, propose 0 ou 1 identifiant dans "suggestedDomainIds", uniquement à partir de la liste autorisée ci-dessous.
- Si des domaines sont déjà fournis, retourne exactement ces mêmes ids dans "suggestedDomainIds".

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
                        selectedDomains.length > 0
                            ? `DOMAINES:\n${selectedDomains
                                  .map((domain) => domain.longDescription || domain.shortDescription)
                                  .join("\n")}`
                            : null,
                        selectedDomains.length > 0
                            ? `MATIÈRES:\n${Array.from(
                                  new Set(
                                      selectedDomains
                                          .map(
                                              (domain) =>
                                                  domain.subject?.longDescription ||
                                                  domain.subject?.shortDescription ||
                                                  ""
                                          )
                                          .filter(Boolean)
                                  )
                              ).join("\n")}`
                            : null,
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

const ensureSubdomainsCoherence = async (subdomainIds: string[], domainIds: string[]) => {
    if (subdomainIds.length === 0) return;
    const subdomains = await prisma.subdomain.findMany({
        where: { id: { in: subdomainIds } },
        select: { id: true, domainId: true },
    });
    if (subdomains.length !== subdomainIds.length) {
        throw new Error("Sous-domaine introuvable");
    }
    const domainSet = new Set(domainIds);
    const orphan = subdomains.find((s) => !domainSet.has(s.domainId));
    if (orphan) {
        throw new Error(
            "Incohérence : un sous-domaine sélectionné n'appartient à aucun des domaines du thème."
        );
    }
};

export const createTheme = async (formData: FormData, options?: CreateThemeOptions) => {
    const values = {
        title: String(formData.get("title") ?? ""),
        shortTitle: String(formData.get("shortTitle") ?? ""),
        domainIds: normalizeIdList(formData.getAll("domainIds")),
        chapterIds: normalizeIdList(formData.getAll("chapterIds")),
        subdomainIds: normalizeIdList(formData.getAll("subdomainIds")),
    };
    
    const result = createThemeSchema.safeParse(values);

    if (result.success) {
        const { title, shortTitle, domainIds, chapterIds, subdomainIds } = result.data;
        const normalizedShortTitle = shortTitle?.trim() ? shortTitle.trim() : null;

        await ensureSubdomainsCoherence(subdomainIds, domainIds);

        try {
            await prisma.theme.create({
                data: {
                    title,
                    shortTitle: normalizedShortTitle,
                    domains: {
                        connect: domainIds.map((domainId) => ({ id: domainId })),
                    },
                    chapters: {
                        connect: chapterIds.map((chapterId) => ({ id: chapterId })),
                    },
                    subdomains: {
                        connect: subdomainIds.map((subdomainId) => ({ id: subdomainId })),
                    },
                }
            });
        } catch (error: any) {
            if (error.code === 'P2002') {
                throw new Error('Un thème avec ces associations existe déjà');
            }
            throw error;
        }
    } else {
        const errors: CreateThemeErrors = result.error.format();

        console.error('Error creating theme: ', errors);

        throw errors;
    }

    const paths = buildThemeRevalidatePaths({
        domainIds: result.success ? result.data.domainIds : [],
        chapterIds: result.success ? result.data.chapterIds : [],
        extraPaths: options?.revalidatePaths,
    });
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
    const values = {
        title: String(formData.get("title") ?? ""),
        shortTitle: String(formData.get("shortTitle") ?? ""),
        domainIds: normalizeIdList(formData.getAll("domainIds")),
        chapterIds: normalizeIdList(formData.getAll("chapterIds")),
        subdomainIds: normalizeIdList(formData.getAll("subdomainIds")),
    };

    const result = createThemeSchema.safeParse(values);

    if (result.success) {
        const { title, shortTitle, domainIds, chapterIds, subdomainIds } = result.data;
        const normalizedShortTitle = shortTitle?.trim() ? shortTitle.trim() : null;
        const existingTheme = id
            ? await prisma.theme.findUnique({
                  where: { id },
                  select: {
                      domainIds: true,
                      chapterIds: true,
                  },
              })
            : null;

        await ensureSubdomainsCoherence(subdomainIds, domainIds);

        try {
            await prisma.theme.update({
                where: {
                    id
                },
                data: {
                    title,
                    shortTitle: normalizedShortTitle,
                    domains: {
                        set: domainIds.map((domainId) => ({ id: domainId })),
                    },
                    chapters: {
                        set: chapterIds.map((chapterId) => ({ id: chapterId })),
                    },
                    subdomains: {
                        set: subdomainIds.map((subdomainId) => ({ id: subdomainId })),
                    },
                }
            });

            const paths = buildThemeRevalidatePaths({
                domainIds: Array.from(
                    new Set([...(existingTheme?.domainIds ?? []), ...domainIds])
                ),
                chapterIds: Array.from(
                    new Set([...(existingTheme?.chapterIds ?? []), ...chapterIds])
                ),
                extraPaths: options?.revalidatePaths,
            });
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
    const theme = await prisma.theme.findUnique({
        where: { id },
        select: {
            domainIds: true,
            chapterIds: true,
        },
    });

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

    const paths = buildThemeRevalidatePaths({
        domainIds: theme?.domainIds ?? [],
        chapterIds: theme?.chapterIds ?? [],
        extraPaths: options?.revalidatePaths,
    });
    paths.forEach((path) => revalidatePath(path));
    if (!options?.skipSuccessToast) {
        await setCrudSuccessToast("theme", "deleted");
    }
    if (options?.redirectTo !== null) {
        redirect(options?.redirectTo ?? "/admin/themes");
    }
}
