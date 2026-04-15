import path from "path";

const DEFAULT_UPLOADS_DIR = path.join(
  /*turbopackIgnore: true*/ process.cwd(),
  "public",
  "uploads"
);

export const UPLOADS_DIR =
  process.env.UPLOADS_DIR?.trim() || DEFAULT_UPLOADS_DIR;

export function getExamPapersUploadDir() {
  return path.join(/*turbopackIgnore: true*/ UPLOADS_DIR, "exam-papers");
}

export function resolveLocalPdfPath(pdfUrl: string) {
  const relativePath = pdfUrl.startsWith("/") ? pdfUrl.slice(1) : pdfUrl;
  if (relativePath.startsWith("uploads/")) {
    return path.join(
      /*turbopackIgnore: true*/ UPLOADS_DIR,
      relativePath.replace(/^uploads[\\/]/, "")
    );
  }
  return path.join(/*turbopackIgnore: true*/ process.cwd(), "public", relativePath);
}

export function getExamPaperPublicUrl(fileName: string) {
  return `/uploads/exam-papers/${fileName}`;
}
