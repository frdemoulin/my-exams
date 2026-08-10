import { loadProjectEnv } from "./lib/load-env";

loadProjectEnv();

const parseChapterSlugs = () => {
  const chapterSlugs = new Set<string>();
  const args = process.argv.slice(2);

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--help" || arg === "-h") {
      console.log(
        [
          "Usage:",
          "  npm run db:seed:training",
          "  npm run db:seed:training:chapter -- <chapter-slug>",
          "  npm run db:seed:training -- --chapter <chapter-slug>",
          "  npm run db:seed:training -- --chapters <slug-a>,<slug-b>",
        ].join("\n")
      );
      process.exit(0);
    }

    if (arg === "--chapter" || arg === "--chapters") {
      const value = args[index + 1];

      if (!value || value.startsWith("--")) {
        throw new Error(`Valeur manquante apres ${arg}`);
      }

      value
        .split(",")
        .map((slug) => slug.trim())
        .filter(Boolean)
        .forEach((slug) => chapterSlugs.add(slug));
      index += 1;
      continue;
    }

    if (arg.startsWith("--chapter=") || arg.startsWith("--chapters=")) {
      const value = arg.slice(arg.indexOf("=") + 1);

      value
        .split(",")
        .map((slug) => slug.trim())
        .filter(Boolean)
        .forEach((slug) => chapterSlugs.add(slug));
      continue;
    }

    if (!arg.startsWith("--")) {
      chapterSlugs.add(arg);
      continue;
    }

    throw new Error(`Argument seed training inconnu: ${arg}`);
  }

  return [...chapterSlugs];
};

async function main() {
  const [{ default: prisma }, { seedTraining }] = await Promise.all([
    import("../src/lib/db/prisma"),
    import("../prisma/seeds/training.seed"),
  ]);

  try {
    const chapterSlugs = parseChapterSlugs();

    await seedTraining(prisma, {
      chapterSlugs: chapterSlugs.length > 0 ? chapterSlugs : undefined,
    });
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error("Erreur lors du seed Training :", error);
  process.exit(1);
});
