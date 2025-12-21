import pdf from 'pdf-parse';
import { TesseractOcrService } from './tesseract-ocr.service';
import { loadPdfBuffer } from './pdf-buffer';

export interface PageRange {
  pageStart: number;
  pageEnd: number;
}

interface ExtractPageRangeOptions {
  pdfUrl: string;
  pageRanges: PageRange[];
  minLengthForValidText?: number;
  enableTesseractFallback?: boolean;
}

interface ExtractPageTextOptions {
  pdfUrl: string;
  minLengthForValidText?: number;
  enableTesseractFallback?: boolean;
}

async function extractPdfTextByPage(pdfBuffer: Buffer): Promise<string[]> {
  const pageTexts: string[] = [];

  await pdf(pdfBuffer, {
    pagerender: async (pageData: any) => {
      const textContent = await pageData.getTextContent({
        normalizeWhitespace: false,
        disableCombineTextItems: false,
      });

      let lastY: number | undefined;
      let text = '';

      for (const item of textContent.items ?? []) {
        const str = item?.str ?? '';
        const y = item?.transform?.[5];
        if (lastY === undefined || y === lastY) {
          text += str;
        } else {
          text += `\n${str}`;
        }
        lastY = y;
      }

      pageTexts.push(text.trim());
      return text;
    },
  });

  return pageTexts;
}

function validateRanges(pageRanges: PageRange[]) {
  for (const range of pageRanges) {
    if (range.pageStart <= 0 || range.pageEnd <= 0) {
      throw new Error('pageStart/pageEnd doivent etre > 0');
    }
    if (range.pageStart > range.pageEnd) {
      throw new Error('pageStart doit etre inferieur ou egal a pageEnd');
    }
  }
}

export async function extractPdfTextByPages({
  pdfUrl,
  minLengthForValidText = 200,
  enableTesseractFallback = false,
}: ExtractPageTextOptions): Promise<string[]> {
  const pdfBuffer = await loadPdfBuffer(pdfUrl);
  let pageTexts = await extractPdfTextByPage(pdfBuffer);

  const combinedText = pageTexts.join('\n');
  if (combinedText.trim().length < minLengthForValidText && enableTesseractFallback) {
    const tesseract = new TesseractOcrService();
    pageTexts = await tesseract.extractPagesFromPdfBuffer(pdfBuffer);
  }

  return pageTexts;
}

export async function extractPdfTextByPageRanges({
  pdfUrl,
  pageRanges,
  minLengthForValidText = 200,
  enableTesseractFallback = false,
}: ExtractPageRangeOptions): Promise<string[]> {
  if (!pageRanges.length) return [];
  validateRanges(pageRanges);

  const pageTexts = await extractPdfTextByPages({
    pdfUrl,
    minLengthForValidText,
    enableTesseractFallback,
  });

  const pageCount = pageTexts.length;

  return pageRanges.map((range) => {
    if (range.pageEnd > pageCount) {
      throw new Error(`pageEnd depasse le nombre de pages (${pageCount})`);
    }
    const slice = pageTexts.slice(range.pageStart - 1, range.pageEnd);
    return slice.join('\n\n').trim();
  });
}
