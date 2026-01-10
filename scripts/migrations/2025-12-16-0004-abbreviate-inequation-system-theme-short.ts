import type { PrismaClient } from "@prisma/client";

const INEQUATION_WORD_REGEX = /(?<!\p{L})in(?:e|é)quations?(?!\p{L})/giu;
const SYSTEM_WORD_REGEX = /(?<!\p{L})syst(?:e|è)mes?(?!\p{L})/giu;

const abbreviateInequationWord = (value: string | null | undefined) => {
  if (value == null) return value;

  return value.replace(INEQUATION_WORD_REGEX, (match) => {
    const isPlural = match.toLowerCase().endsWith("s");
    const base = isPlural ? "ineqs" : "ineq";

    if (match.toUpperCase() === match) {
      const upper = base.toUpperCase();
      return `${upper.replace(/^IN(E)/, "INÉ")}.`;
    }

    const accented = base.replace(/^in(e)/, "iné");
    if (match[0] === match[0].toUpperCase()) {
      return `${accented[0].toUpperCase()}${accented.slice(1)}.`;
    }

    return `${accented}.`;
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
  "Abbreviate inequation/system in theme short descriptions.";

export async function up(prisma: PrismaClient) {
  const themes = await prisma.theme.findMany({
    select: { id: true, shortDescription: true },
  });

  let themesUpdated = 0;
  for (const theme of themes) {
    const nextShort = abbreviateSystemWord(
      abbreviateInequationWord(theme.shortDescription)
    );

    if ((theme.shortDescription ?? null) === (nextShort ?? null)) {
      continue;
    }

    await prisma.theme.update({
      where: { id: theme.id },
      data: {
        shortDescription: nextShort ?? undefined,
      },
    });
    themesUpdated += 1;
  }

  console.log(`Themes updated: ${themesUpdated}`);
}
