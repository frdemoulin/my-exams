import type { Prisma, PrismaClient } from "@prisma/client";

export const description =
  "Backfill ExamPaper.correctionUrl into Correction entries (standard source).";

type RawExamPaperDoc = {
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

function extractFirstBatch(raw: unknown): RawExamPaperDoc[] {
  if (!raw || typeof raw !== "object") return [];
  const record = raw as { cursor?: { firstBatch?: RawExamPaperDoc[] } };
  return Array.isArray(record.cursor?.firstBatch) ? record.cursor!.firstBatch! : [];
}

export async function up(prisma: PrismaClient) {
  const defaultSourceLabel = "Source externe";

  await prisma.correctionSource.upsert({
    where: { label: defaultSourceLabel },
    update: { isActive: true },
    create: { label: defaultSourceLabel, isActive: true },
  });

  const rawExamPapers = extractFirstBatch(
    await prisma.$runCommandRaw({
      find: "ExamPaper",
      filter: {
        correctionUrl: { $exists: true, $ne: "" },
      },
      projection: { correctionUrl: 1 },
    })
  );

  let created = 0;
  let skipped = 0;
  let cleared = 0;

  for (const paper of rawExamPapers) {
    const url = typeof paper.correctionUrl === "string" ? paper.correctionUrl.trim() : "";
    if (!url) {
      continue;
    }
    const paperId = normalizeObjectId(paper._id);
    if (!paperId || !paper._id) {
      continue;
    }
    const rawId = paper._id;

    const existing = await prisma.correction.findFirst({
      where: {
        examPaperId: paperId,
        url,
      },
      select: { id: true },
    });

    if (!existing) {
      await prisma.correction.create({
        data: {
          examPaperId: paperId,
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
      update: "ExamPaper",
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

  console.log("ExamPaper.correctionUrl backfill:", {
    scanned: rawExamPapers.length,
    created,
    skipped,
    cleared,
  });
}
