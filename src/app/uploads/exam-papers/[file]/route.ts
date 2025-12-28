import { promises as fs } from "fs";
import path from "path";
import type { NextRequest } from "next/server";

import { getExamPapersUploadDir } from "@/lib/uploads";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file: fileName } = await params;
  if (!fileName) {
    return new Response("Fichier manquant", { status: 400 });
  }

  const safeName = path.basename(fileName);
  if (safeName !== fileName) {
    return new Response("Nom de fichier invalide", { status: 400 });
  }

  const filePath = path.join(getExamPapersUploadDir(), safeName);

  try {
    const buffer = await fs.readFile(filePath);
    return new Response(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("Fichier introuvable", { status: 404 });
  }
}
