import path from "path";

const DEFAULT_UPLOADS_DIR = path.join(process.cwd(), "public", "uploads");

export const UPLOADS_DIR =
  process.env.UPLOADS_DIR?.trim() || DEFAULT_UPLOADS_DIR;

export function getExamPapersUploadDir() {
  return path.join(UPLOADS_DIR, "exam-papers");
}

export function resolveLocalPdfPath(pdfUrl: string) {
  const relativePath = pdfUrl.startsWith("/") ? pdfUrl.slice(1) : pdfUrl;
  if (relativePath.startsWith("uploads/")) {
    return path.join(UPLOADS_DIR, relativePath.replace(/^uploads[\\/]/, ""));
  }
  return path.join(process.cwd(), "public", relativePath);
}

export function getExamPaperPublicUrl(fileName: string) {
  return `/uploads/exam-papers/${fileName}`;
}
