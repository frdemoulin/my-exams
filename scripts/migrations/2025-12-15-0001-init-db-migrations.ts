import type { PrismaClient } from "@prisma/client";

export const description =
  "Initialisation du système de migrations applicatives (no-op).";

export async function up(_prisma: PrismaClient) {
  // No-op : sert uniquement à valider la mécanique (collection `migrations`, checksum, statut).
}

