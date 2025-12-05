import { EnrichmentInput, OcrResult } from './enrichment.types';
import { promises as fs } from 'fs';
import os from 'os';
import path from 'path';
import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

/**
 * OCR Tesseract pour PDFs scannés.
 * Prérequis systèmes :
 * - tesseract CLI installé (ex: `brew install tesseract` ou `apt-get install tesseract-ocr`)
 * - poppler (pour pdftoppm) pour convertir le PDF en images (ex: `brew install poppler`)
 * - modèle langue fra (ex: `apt-get install tesseract-ocr-fra` ou `brew install tesseract-lang`)
 *
 * Fonctionnement :
 * 1) écrit le PDF dans un tmp
 * 2) pdftoppm -> PNGs
 * 3) tesseract sur chaque page, concatène le texte
 */
export class TesseractOcrService {
  async extract(input: EnrichmentInput): Promise<OcrResult> {
    const pdfUrl = input.exerciseUrl ?? input.statementUrl;
    if (!pdfUrl) {
      throw new Error('Aucune URL de PDF fournie pour OCR');
    }
    const res = await fetch(pdfUrl);
    if (!res.ok) {
      throw new Error(`Échec du téléchargement du PDF (${res.status})`);
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    return this.extractFromPdfBuffer(buffer);
  }

  async extractFromPdfBuffer(pdfBuffer: Buffer): Promise<OcrResult> {
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'ocr-'));
    const pdfPath = path.join(tmpDir, 'input.pdf');
    await fs.writeFile(pdfPath, pdfBuffer);

    try {
      const prefix = path.join(tmpDir, 'page');
      // Convertit le PDF en PNGs (1 fichier par page)
      await execFileAsync('pdftoppm', ['-png', pdfPath, prefix]);

      const files = await fs.readdir(tmpDir);
      const pngs = files.filter((f) => f.startsWith('page') && f.endsWith('.png')).sort();
      if (pngs.length === 0) {
        throw new Error('pdftoppm n’a généré aucune image');
      }

      let fullText = '';
      for (const png of pngs) {
        const pngPath = path.join(tmpDir, png);
        const { stdout } = await execFileAsync('tesseract', [pngPath, 'stdout', '-l', 'fra']);
        fullText += stdout + '\n';
      }

      return { text: fullText };
    } finally {
      // Nettoyage silencieux
      fs.rm(tmpDir, { recursive: true, force: true }).catch(() => {});
    }
  }
}
