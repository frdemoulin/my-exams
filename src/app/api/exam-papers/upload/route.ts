"use server";

import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import os from "os";
import { execFile } from "child_process";
import { promisify } from "util";

const MAX_SIZE_BYTES = 2 * 1024 * 1024; // 2MB
const HARD_MAX_BYTES = 10 * 1024 * 1024; // 10MB
const GS_PDFSETTINGS = "/ebook";
const execFileAsync = promisify(execFile);

type CompressionResult = {
  buffer: Buffer;
  compressed: boolean;
  error?: "missing" | "failed";
};

const compressPdfBuffer = async (buffer: Buffer): Promise<CompressionResult> => {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "exam-pdf-"));
  const inputPath = path.join(tempDir, "input.pdf");
  const outputPath = path.join(tempDir, "output.pdf");

  try {
    await fs.writeFile(inputPath, buffer);
    await execFileAsync("gs", [
      "-sDEVICE=pdfwrite",
      "-dCompatibilityLevel=1.4",
      `-dPDFSETTINGS=${GS_PDFSETTINGS}`,
      "-dNOPAUSE",
      "-dBATCH",
      "-dQUIET",
      `-sOutputFile=${outputPath}`,
      inputPath,
    ]);

    const compressedBuffer = await fs.readFile(outputPath);
    if (compressedBuffer.length >= buffer.length) {
      return { buffer, compressed: false };
    }
    return { buffer: compressedBuffer, compressed: true };
  } catch (error) {
    if ((error as NodeJS.ErrnoException)?.code === "ENOENT") {
      return { buffer, compressed: false, error: "missing" };
    }
    console.error("PDF compression failed:", error);
    return { buffer, compressed: false, error: "failed" };
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
};

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

    if (file.size > HARD_MAX_BYTES) {
      return NextResponse.json(
        {
          error:
            "Fichier trop volumineux pour une compression automatique (max 10MB).",
        },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    let buffer: Buffer = Buffer.from(arrayBuffer);
    let compressed = false;
    let compressionError: CompressionResult["error"] = undefined;

    if (buffer.length > MAX_SIZE_BYTES) {
      const result = await compressPdfBuffer(buffer);
      buffer = result.buffer;
      compressed = result.compressed;
      compressionError = result.error;
    }

    if (buffer.length > MAX_SIZE_BYTES) {
      if (compressionError === "missing") {
        return NextResponse.json(
          {
            error:
              "Compression indisponible (Ghostscript manquant). Merci de compresser le PDF ou d'utiliser une URL.",
          },
          { status: 400 }
        );
      }
      if (compressionError === "failed") {
        return NextResponse.json(
          {
            error:
              "Compression automatique impossible. Merci de compresser le PDF ou d'utiliser une URL.",
          },
          { status: 400 }
        );
      }
      return NextResponse.json(
        {
          error:
            "Fichier trop volumineux (max 2MB), même après compression.",
        },
        { status: 400 }
      );
    }

    const uploadsDir = path.join(process.cwd(), "public", "uploads", "exam-papers");
    await fs.mkdir(uploadsDir, { recursive: true });

    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const timestamp = Date.now();
    const fileName = `${timestamp}-${safeName}`;
    const filePath = path.join(uploadsDir, fileName);

    await fs.writeFile(filePath, buffer);

    const url = `/uploads/exam-papers/${fileName}`;

    return NextResponse.json({ url, compressed });
  } catch (error) {
    console.error("Error uploading exam paper PDF:", error);
    return NextResponse.json(
      { error: "Échec du téléversement du PDF" },
      { status: 500 }
    );
  }
}
