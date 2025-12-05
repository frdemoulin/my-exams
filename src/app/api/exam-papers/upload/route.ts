"use server";

import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const MAX_SIZE_BYTES = 20 * 1024 * 1024; // 20MB

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "Aucun fichier reçu" }, { status: 400 });
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json({ error: "Seuls les PDF sont autorisés" }, { status: 400 });
    }

    if (file.size > MAX_SIZE_BYTES) {
      return NextResponse.json({ error: "Fichier trop volumineux (max 20MB)" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadsDir = path.join(process.cwd(), "public", "uploads", "exam-papers");
    await fs.mkdir(uploadsDir, { recursive: true });

    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const timestamp = Date.now();
    const fileName = `${timestamp}-${safeName}`;
    const filePath = path.join(uploadsDir, fileName);

    await fs.writeFile(filePath, buffer);

    const url = `/uploads/exam-papers/${fileName}`;

    return NextResponse.json({ url });
  } catch (error) {
    console.error("Error uploading exam paper PDF:", error);
    return NextResponse.json(
      { error: "Échec du téléversement du PDF" },
      { status: 500 }
    );
  }
}
