import type { PrismaClient } from "@prisma/client";

type DomainRow = {
  id: string;
  subjectId: string;
  longDescription: string;
  shortDescription: string;
  createdAt: Date;
};

type DomainGroup = {
  normalizedLong: string;
  domains: DomainRow[];
};

const TARGET_APOSTROPHE = "'";
const APOSTROPHE_PATTERN = /['\u2018\u2019\u02BC]/g;

const normalizeApostrophes = (value: string | null | undefined) => {
  if (value == null) return value;
  return value.replace(APOSTROPHE_PATTERN, TARGET_APOSTROPHE);
};

const FUNCTION_WORD_REGEX = /\bfonctions?\b/gi;
const EQUATION_WORD_REGEX = /(?<!\p{L})(?:e|\u00e9)quations?(?!\p{L})/giu;
const INEQUATION_WORD_REGEX = /(?<!\p{L})in(?:e|\u00e9)quations?(?!\p{L})/giu;
const SYSTEM_WORD_REGEX = /(?<!\p{L})syst(?:e|\u00e8)mes?(?!\p{L})/giu;

const abbreviateFunctionWord = (value: string | null | undefined) => {
  if (value == null) return value;
  return value.replace(FUNCTION_WORD_REGEX, (match) => {
    const isPlural = match.toLowerCase().endsWith("s");
    if (match.toUpperCase() === match) return isPlural ? "FCTS" : "FCT";
    if (match[0] === match[0].toUpperCase()) return isPlural ? "Fcts" : "Fct";
    return isPlural ? "fcts" : "fct";
  });
};

const abbreviateEquationWord = (value: string | null | undefined) => {
  if (value == null) return value;

  const formatAbbrev = (match: string, base: string, isInequation: boolean) => {
    if (match.toUpperCase() === match) {
      const upper = base.toUpperCase();
      const accented = isInequation
        ? upper.replace(/^IN(E)/, "IN\u00c9")
        : upper.replace(/^E/, "\u00c9");
      return `${accented}.`;
    }

    const accented = isInequation
      ? base.replace(/^in(e)/, "in\u00e9")
      : base.replace(/^e/, "\u00e9");

    if (match[0] === match[0].toUpperCase()) {
      return `${accented[0].toUpperCase()}${accented.slice(1)}.`;
    }

    return `${accented}.`;
  };

  const withInequations = value.replace(INEQUATION_WORD_REGEX, (match) => {
    const isPlural = match.toLowerCase().endsWith("s");
    const base = isPlural ? "ineqs" : "ineq";
    return formatAbbrev(match, base, true);
  });

  return withInequations.replace(EQUATION_WORD_REGEX, (match) => {
    const isPlural = match.toLowerCase().endsWith("s");
    const base = isPlural ? "eqs" : "eq";
    return formatAbbrev(match, base, false);
  });
};

const abbreviateSystemWord = (value: string | null | undefined) => {
  if (value == null) return value;
  return value.replace(SYSTEM_WORD_REGEX, (match) => {
    if (match.toUpperCase() === match) return "SYST.";
    if (match[0] === match[0].toUpperCase()) return "Syst.";
    return "syst.";
  });
};

export const description =
  "Normalize apostrophes and abbreviate function/equation/inequation/system in theme short labels.";

export async function up(prisma: PrismaClient) {
  const domains = await prisma.domain.findMany({
    select: {
      id: true,
      subjectId: true,
      longDescription: true,
      shortDescription: true,
      createdAt: true,
    },
    orderBy: { createdAt: "asc" },
  });

  const groups = new Map<string, DomainGroup>();
  for (const domain of domains) {
    const normalizedLong =
      normalizeApostrophes(domain.longDescription) ?? domain.longDescription;
    const key = `${domain.subjectId}::${normalizedLong}`;
    const group = groups.get(key);
    if (group) {
      group.domains.push(domain);
    } else {
      groups.set(key, { normalizedLong, domains: [domain] });
    }
  }

  let domainsUpdated = 0;
  let domainsMerged = 0;
  let themesReattached = 0;
  let scopesReattached = 0;
  let examPapersUpdated = 0;

  for (const group of groups.values()) {
    const { normalizedLong, domains: groupDomains } = group;
    const canonical =
      groupDomains.find(
        (domain) => domain.longDescription === normalizedLong
      ) ?? groupDomains[0];

    for (const duplicate of groupDomains) {
      if (duplicate.id === canonical.id) continue;

      const themeResult = await prisma.theme.updateMany({
        where: { domainId: duplicate.id },
        data: { domainId: canonical.id },
      });
      themesReattached += themeResult.count;

      const scopeResult = await prisma.domainScope.updateMany({
        where: { domainId: duplicate.id },
        data: { domainId: canonical.id },
      });
      scopesReattached += scopeResult.count;

      const examPapers = await prisma.examPaper.findMany({
        where: { domainIds: { has: duplicate.id } },
        select: { id: true, domainIds: true },
      });

      for (const paper of examPapers) {
        const nextIds = Array.from(
          new Set(
            paper.domainIds.map((id) =>
              id === duplicate.id ? canonical.id : id
            )
          )
        );
        const changed =
          nextIds.length !== paper.domainIds.length ||
          nextIds.some((id, index) => id !== paper.domainIds[index]);
        if (!changed) continue;

        await prisma.examPaper.update({
          where: { id: paper.id },
          data: { domainIds: nextIds },
        });
        examPapersUpdated += 1;
      }

      await prisma.domain.delete({ where: { id: duplicate.id } });
      domainsMerged += 1;
    }

    const nextShort =
      normalizeApostrophes(canonical.shortDescription) ??
      canonical.shortDescription;

    if (
      canonical.longDescription !== normalizedLong ||
      canonical.shortDescription !== nextShort
    ) {
      await prisma.domain.update({
        where: { id: canonical.id },
        data: {
          longDescription: normalizedLong,
          shortDescription: nextShort,
        },
      });
      domainsUpdated += 1;
    }
  }

  const themes = await prisma.theme.findMany({
    select: { id: true, longDescription: true, shortDescription: true },
  });

  let themesUpdated = 0;
  for (const theme of themes) {
    const nextLong =
      normalizeApostrophes(theme.longDescription) ?? theme.longDescription;
    const nextShort = abbreviateSystemWord(
      abbreviateEquationWord(
        abbreviateFunctionWord(normalizeApostrophes(theme.shortDescription))
      )
    );
    const needsUpdate =
      nextLong !== theme.longDescription ||
      (theme.shortDescription ?? null) !== (nextShort ?? null);

    if (!needsUpdate) continue;

    await prisma.theme.update({
      where: { id: theme.id },
      data: {
        longDescription: nextLong,
        shortDescription: nextShort ?? undefined,
      },
    });
    themesUpdated += 1;
  }

  console.log(
    [
      `Domains updated: ${domainsUpdated}`,
      `Domains merged: ${domainsMerged}`,
      `Themes reattached: ${themesReattached}`,
      `Domain scopes reattached: ${scopesReattached}`,
      `Exam papers updated: ${examPapersUpdated}`,
      `Themes updated: ${themesUpdated}`,
    ].join("\n")
  );
}
