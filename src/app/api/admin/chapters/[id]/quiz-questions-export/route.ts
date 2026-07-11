import { NextResponse } from "next/server";
import ExcelJS from "exceljs";

import getSession from "@/lib/auth/get-session";
import { isAdminRole } from "@/lib/auth/roles";
import { getSessionActorRole } from "@/lib/auth/session";
import {
  fetchChapterById,
  fetchChapterQuizQuestionExportRows,
} from "@/core/chapter";

export const runtime = "nodejs";

interface ChapterQuizQuestionsExportRouteProps {
  params: Promise<{
    id: string;
  }>;
}

const worksheetColumns = [
  { header: "ID du quiz", key: "quizId", width: 24 },
  { header: "Ordre du quiz", key: "quizOrder", width: 14 },
  { header: "ID de la question", key: "questionId", width: 24 },
  { header: "Ordre de la question dans le quiz", key: "questionOrderInQuiz", width: 18 },
  { header: "Thème de la question", key: "questionTheme", width: 28 },
  { header: "Nature single/multiple", key: "answerNature", width: 20 },
  { header: "Difficulté du quiz", key: "quizDifficulty", width: 18 },
  { header: "Difficulté de la question", key: "questionDifficulty", width: 22 },
  { header: "Faculté", key: "facultyPrecision", width: 22 },
  { header: "Précision de l'UE", key: "courseUnitPrecision", width: 28 },
  { header: "Précision de l'EC", key: "teachingElementPrecision", width: 28 },
  { header: "Précision du chapitre", key: "chapterPrecision", width: 32 },
  { header: "Précision de la section", key: "sectionPrecision", width: 24 },
  { header: "Lien admin question", key: "questionAdminLink", width: 24 },
] as const;

const formatDownloadTimestamp = (date: Date) => {
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}${month}${day}-${hours}${minutes}${seconds}`;
};

export async function GET(
  request: Request,
  { params }: ChapterQuizQuestionsExportRouteProps
) {
  const session = await getSession();
  const role = getSessionActorRole(session);

  if (!session?.user || !isAdminRole(role)) {
    return NextResponse.json({ message: "Accès refusé." }, { status: 403 });
  }

  const { id } = await params;
  const [chapter, rows] = await Promise.all([
    fetchChapterById(id),
    fetchChapterQuizQuestionExportRows(id),
  ]);

  if (!chapter) {
    return NextResponse.json({ message: "Chapitre introuvable." }, { status: 404 });
  }

  const origin = new URL(request.url).origin;

  const workbook = new ExcelJS.Workbook();
  workbook.creator = "My Exams";
  workbook.created = new Date();
  workbook.modified = new Date();

  const worksheet = workbook.addWorksheet("Questions QCM", {
    views: [{ state: "frozen", ySplit: 1 }],
  });

  worksheet.columns = worksheetColumns.map((column) => ({
    header: column.header,
    key: column.key,
    width: column.width,
  }));

  worksheet.addRows(
    rows.map((row) => ({
      quizId: row.quizId,
      quizOrder: row.quizOrder,
      questionId: row.questionId,
      questionOrderInQuiz: row.questionOrderInQuiz,
      questionTheme: row.questionTheme,
      answerNature: row.answerNature,
      quizDifficulty: row.quizDifficulty,
      questionDifficulty: row.questionDifficulty,
      facultyPrecision: row.facultyPrecision,
      courseUnitPrecision: row.courseUnitPrecision,
      teachingElementPrecision: row.teachingElementPrecision,
      chapterPrecision: row.chapterPrecision,
      sectionPrecision: row.sectionPrecision,
      questionAdminLink: "",
    }))
  );

  worksheet.autoFilter = {
    from: { row: 1, column: 1 },
    to: { row: 1, column: worksheetColumns.length },
  };

  const headerRow = worksheet.getRow(1);
  headerRow.font = {
    bold: true,
    color: { argb: "FFFFFFFF" },
  };
  headerRow.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF1F4E78" },
  };
  headerRow.alignment = {
    vertical: "middle",
    horizontal: "center",
  };

  worksheet.eachRow((currentRow, rowNumber) => {
    if (rowNumber === 1) {
      return;
    }

    if (rowNumber % 2 === 0) {
      currentRow.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFEAF3FF" },
      };
    }
  });

  rows.forEach((row, index) => {
    const rowNumber = index + 2;
    const linkCell = worksheet.getCell(rowNumber, worksheetColumns.length);
    linkCell.value = {
      text: "Éditer la question",
      hyperlink: `${origin}/admin/chapters/${chapter.id}/questions/${row.questionId}/edit`,
    };
    linkCell.font = {
      color: { argb: "FF0563C1" },
      underline: true,
    };
  });

  const buffer = await workbook.xlsx.writeBuffer();
  const filename = `chapitre-${chapter.slug}-questions-qcm-${formatDownloadTimestamp(new Date())}.xlsx`;

  return new Response(Buffer.from(buffer), {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
