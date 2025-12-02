import { EnrichmentInput, OcrResult } from './enrichment.types';
import pdf from 'pdf-parse';
import { TesseractOcrService } from './tesseract-ocr.service';

/**
 * Interface OCR (stub)
 * Implémente la lecture du PDF (subject ou exercice isolé) et retourne le texte brut.
 * Pour un pilote réel : PDF.js (texte), Tesseract (OCR image), etc.
 */
export interface OcrService {
  extract(input: EnrichmentInput): Promise<OcrResult>;
}

/**
 * Implémentation mock pour dev local (pas d'appel API ni OCR réel).
 */
export class MockOcrService implements OcrService {
  async extract(): Promise<OcrResult> {
    return {
      text:
        'Texte OCR simulé. Remplacer par un vrai service (PDF.js / Tesseract). ' +
        'Inclure l’intégralité de l’énoncé pour indexation.',
    };
  }
}

/**
 * OCR réel basé sur pdf-parse (PDF texte). Ne gère pas les PDFs purement scannés image.
 */
export class PdfParseOcrService implements OcrService {
  constructor(
    private options: {
      minLengthForValidText?: number;
      enableTesseractFallback?: boolean;
    } = {}
  ) {}

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

    const data = await pdf(buffer);
    const text = data.text || '';

    const minLength = this.options.minLengthForValidText ?? 200;
    const wantsFallback = this.options.enableTesseractFallback ?? false;

    // Si très peu de texte, on peut tenter un fallback Tesseract (si activé)
    if (text.trim().length < minLength && wantsFallback) {
      const tesseract = new TesseractOcrService();
      return tesseract.extractFromPdfBuffer(buffer);
    }

    return { text };
  }
}
