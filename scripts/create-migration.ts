import fs from "node:fs/promises";
import path from "node:path";

const MIGRATIONS_DIR = path.resolve(process.cwd(), "scripts", "migrations");

function pad(value: number, size: number) {
  return String(value).padStart(size, "0");
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function sentenceCase(input: string) {
  const trimmed = input.trim();
  if (!trimmed) return trimmed;
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

function escapeString(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

async function ensureMigrationsDir() {
  await fs.mkdir(MIGRATIONS_DIR, { recursive: true });
}

async function getNextSequence(datePrefix: string) {
  const entries = await fs.readdir(MIGRATIONS_DIR);
  const pattern = new RegExp(`^${datePrefix}-(\\d{4})-`);
  const sequences = entries
    .map((entry) => entry.match(pattern))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => Number.parseInt(match[1], 10))
    .filter((value) => Number.isFinite(value));

  if (!sequences.length) return 1;
  return Math.max(...sequences) + 1;
}

async function main() {
  const rawArgs = process.argv.slice(2);
  const descIndex = rawArgs.indexOf("--desc");

  let descriptionArg = "";
  if (descIndex !== -1) {
    descriptionArg = rawArgs[descIndex + 1] ?? "";
    rawArgs.splice(descIndex, 2);
  }

  const title = rawArgs.join(" ").trim();
  const slug = slugify(title || "migration") || "migration";
  const now = new Date();
  const datePrefix = [
    now.getFullYear(),
    pad(now.getMonth() + 1, 2),
    pad(now.getDate(), 2),
  ].join("-");

  await ensureMigrationsDir();
  const sequence = await getNextSequence(datePrefix);
  const fileName = `${datePrefix}-${pad(sequence, 4)}-${slug}.ts`;
  const filePath = path.join(MIGRATIONS_DIR, fileName);

  try {
    await fs.access(filePath);
    console.error(`Migration already exists: ${fileName}`);
    process.exit(1);
  } catch {
    // File does not exist.
  }

  const descriptionText =
    descriptionArg.trim() ||
    (title ? sentenceCase(title) : "TODO: describe migration");
  const descriptionValue = descriptionText.endsWith(".")
    ? descriptionText
    : `${descriptionText}.`;

  const contents = `import type { PrismaClient } from "@prisma/client";

export const description = "${escapeString(descriptionValue)}";

export async function up(prisma: PrismaClient) {
  // TODO: implement idempotent migration
  void prisma;
}
`;

  await fs.writeFile(filePath, contents, "utf8");
  console.log(`Created migration: ${path.relative(process.cwd(), filePath)}`);
}

main().catch((err) => {
  console.error("Failed to create migration:", err);
  process.exit(1);
});
