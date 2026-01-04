import type { Prisma, PrismaClient } from "@prisma/client";

export const description =
  "Backfill Exercise.correctionUrl into ExerciseCorrection entries.";

type RawExerciseDoc = {
  _id?: Prisma.InputJsonValue;
  correctionUrl?: unknown;
};

function inferCorrectionType(url: string): string {
  const normalized = url.trim().toLowerCase();
  if (!normalized) return "html";
  if (normalized.includes(".pdf")) return "pdf";
  if (
    normalized.includes("youtube.com") ||
    normalized.includes("youtu.be") ||
    normalized.includes("vimeo.com") ||
    normalized.endsWith(".mp4") ||
    normalized.endsWith(".webm")
  ) {
    return "video";
  }
  return "html";
}

function normalizeObjectId(value: unknown): string | null {
  if (typeof value === "string") return value;
  if (!value || typeof value !== "object") return null;
  const record = value as {
    $oid?: string;
    toHexString?: () => string;
    toString?: () => string;
  };
  if (record.$oid) return record.$oid;
  if (typeof record.toHexString === "function") return record.toHexString();
  if (typeof record.toString === "function") return record.toString();
  return null;
}

function extractFirstBatch(raw: unknown): RawExerciseDoc[] {
  if (!raw || typeof raw !== "object") return [];
  const record = raw as { cursor?: { firstBatch?: RawExerciseDoc[] } };
  return Array.isArray(record.cursor?.firstBatch) ? record.cursor!.firstBatch! : [];
}

export async function up(prisma: PrismaClient) {
  const defaultSourceLabel = "Source externe";

  const rawExercises = extractFirstBatch(
    await prisma.$runCommandRaw({
      find: "Exercise",
      filter: {
        correctionUrl: { $exists: true, $ne: "" },
      },
      projection: { correctionUrl: 1 },
    })
  );

  let created = 0;
  let skipped = 0;
  let cleared = 0;

  for (const exercise of rawExercises) {
    const url =
      typeof exercise.correctionUrl === "string" ? exercise.correctionUrl.trim() : "";
    if (!url) {
      continue;
    }

    const rawId = exercise._id;
    if (!rawId) {
      continue;
    }

    const exerciseId = normalizeObjectId(rawId);
    if (!exerciseId) {
      continue;
    }

    const existing = await prisma.exerciseCorrection.findFirst({
      where: {
        exerciseId,
        source: defaultSourceLabel,
        url,
      },
      select: { id: true },
    });

    if (!existing) {
      await prisma.exerciseCorrection.create({
        data: {
          exerciseId,
          source: defaultSourceLabel,
          url,
          type: inferCorrectionType(url),
        },
      });
      created += 1;
    } else {
      skipped += 1;
    }

    await prisma.$runCommandRaw({
      update: "Exercise",
      updates: [
        {
          q: { _id: rawId },
          u: { $set: { correctionUrl: null } },
          multi: false,
        },
      ],
    });
    cleared += 1;
  }

  console.log("Exercise.correctionUrl backfill:", {
    scanned: rawExercises.length,
    created,
    skipped,
    cleared,
  });
}
