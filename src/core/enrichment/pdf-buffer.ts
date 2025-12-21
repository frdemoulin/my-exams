import { promises as fs } from 'fs';
import path from 'path';

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

  const relativePath = pdfUrl.startsWith('/') ? pdfUrl.slice(1) : pdfUrl;
  const filePath = path.join(process.cwd(), 'public', relativePath);

  try {
    return await fs.readFile(filePath);
  } catch (error) {
    throw new Error(`PDF introuvable en local: ${filePath}`);
  }
}
