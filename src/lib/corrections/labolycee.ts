const CORRECTION_HINT = /corrig(e|é|es|ée|ées)?|correction/i;
const SUBJECT_HINT = /sujet-?original|sujet/i;
const EXERCISE_HINT = /exo\s?(\d+)/i;
const EXERCISE_SUBJECT_HINT = /exo\s?\d+.*sujet/i;

function normalizeUrl(value: string, baseUrl: string): string | null {
    if (!value) return null;
    const trimmed = value.trim();
    if (!trimmed) return null;
    try {
        const url = new URL(trimmed, baseUrl);
        return url.toString();
    } catch {
        return null;
    }
}

function pushUnique(target: string[], value: string) {
    if (!target.includes(value)) {
        target.push(value);
    }
}

export type LabolyceeExerciseCorrection = {
    exerciseNumber: number;
    pdfUrl: string;
};

export type LabolyceeExerciseSubject = {
    exerciseNumber: number;
    pdfUrl: string;
};

export function extractLabolyceePdfData(html: string, pageUrl: string): {
    subjectPdf: string | null;
    exerciseCorrections: LabolyceeExerciseCorrection[];
    exerciseSubjects: LabolyceeExerciseSubject[];
} {
    const urls: string[] = [];

    const directPdfMatches = [
        ...html.matchAll(/(?:data-src|href|src)="([^"]+\.pdf[^"]*)"/gi),
    ];
    directPdfMatches.forEach((match) => {
        const candidate = normalizeUrl(match[1], pageUrl);
        if (!candidate) return;
        if (candidate.includes("/viewer.html")) return;
        pushUnique(urls, candidate);
    });

    const viewerMatches = [
        ...html.matchAll(/viewer\.html\?file=([^"&]+)(?:[^"]*)"/gi),
    ];
    viewerMatches.forEach((match) => {
        const decoded = decodeURIComponent(match[1]);
        const candidate = normalizeUrl(decoded, pageUrl);
        if (!candidate) return;
        pushUnique(urls, candidate);
    });

    const subjectPdf =
        urls.find((url) => /sujet-?original/i.test(url)) ||
        urls.find((url) => SUBJECT_HINT.test(url) && !CORRECTION_HINT.test(url)) ||
        null;

    const exerciseCorrectionsByNumber = new Map<number, string>();
    const exerciseSubjectsByNumber = new Map<number, string>();

    urls.forEach((url) => {
        const match = url.match(EXERCISE_HINT);
        if (!match) return;
        const exerciseNumber = Number(match[1]);
        if (!Number.isFinite(exerciseNumber)) return;
        if (CORRECTION_HINT.test(url)) {
            if (!exerciseCorrectionsByNumber.has(exerciseNumber)) {
                exerciseCorrectionsByNumber.set(exerciseNumber, url);
            }
            return;
        }
        if (EXERCISE_SUBJECT_HINT.test(url) || SUBJECT_HINT.test(url)) {
            if (!exerciseSubjectsByNumber.has(exerciseNumber)) {
                exerciseSubjectsByNumber.set(exerciseNumber, url);
            }
        }
    });

    const exerciseCorrections = Array.from(exerciseCorrectionsByNumber.entries())
        .map(([exerciseNumber, pdfUrl]) => ({ exerciseNumber, pdfUrl }))
        .sort((a, b) => a.exerciseNumber - b.exerciseNumber);

    const exerciseSubjects = Array.from(exerciseSubjectsByNumber.entries())
        .map(([exerciseNumber, pdfUrl]) => ({ exerciseNumber, pdfUrl }))
        .sort((a, b) => a.exerciseNumber - b.exerciseNumber);

    return { subjectPdf, exerciseCorrections, exerciseSubjects };
}
