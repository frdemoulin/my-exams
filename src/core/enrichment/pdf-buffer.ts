import { promises as fs } from 'fs';
import { resolveLocalPdfPath } from '@/lib/uploads';

function isRemoteUrl(pdfUrl: string) {
  return /^https?:\/\//i.test(pdfUrl);
}

export async function loadPdfBuffer(pdfUrl: string): Promise<Buffer> {
  if (isRemoteUrl(pdfUrl)) {
    const res = await fetch(pdfUrl);
    if (!res.ok) {
      throw new Error(`Echec du telechargement du PDF (${res.status})`);
    }
    return Buffer.from(await res.arrayBuffer());
  }

  const filePath = resolveLocalPdfPath(pdfUrl);

  try {
    return await fs.readFile(filePath);
  } catch (error) {
    throw new Error(`PDF introuvable en local: ${filePath}`);
  }
}
