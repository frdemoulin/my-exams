import { promises as fs } from "fs";
import path from "path";
import type { NextRequest } from "next/server";

import { getExamPapersUploadDir } from "@/lib/uploads";
import prisma from "@/lib/db/prisma";
import { auth } from "@/lib/auth/auth";
import { getSessionEffectiveUserId } from "@/lib/auth/session";
import { assertUserCanAccessExamPaper } from "@/lib/auth/assert-pedagogical-access";

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

  const session = await auth();
  const userId = getSessionEffectiveUserId(session);
  if (!userId) {
    return new Response("Authentification requise pour télécharger les annales complètes.", {
      status: 401,
    });
  }

  const examPaper = await prisma.examPaper.findFirst({
    where: { subjectUrl: { contains: safeName } },
    select: { id: true },
  });

  if (examPaper) {
    try {
      await assertUserCanAccessExamPaper({ userId, examPaperId: examPaper.id });
    } catch {
      return new Response("Accès non autorisé à cette annale d'examen.", { status: 403 });
    }
  }

  const candidatePaths = [
    path.join(getExamPapersUploadDir(), safeName),
    path.join(process.cwd(), "public", "uploads", "exam-papers", safeName),
    path.join(process.cwd(), "uploads", "exam-papers", safeName),
  ];

  let buffer: Buffer | null = null;
  for (const filePath of candidatePaths) {
    try {
      buffer = await fs.readFile(filePath);
      break;
    } catch {
      // continuer la recherche
    }
  }

  if (buffer) {
    return new Response(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Cache-Control": "private, no-cache, no-store, must-revalidate",
      },
    });
  }

  try {
    await prisma.errorLog.create({
      data: {
        type: "PDF_404",
        path: safeName,
        statusCode: 404,
      },
    });
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du log PDF 404 :", error);
  }

  return new Response("Fichier introuvable", { status: 404 });
}
