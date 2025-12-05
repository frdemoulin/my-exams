import { NextResponse } from "next/server";
import { fetchExamPapersForSearch } from "@/core/exam-paper/exam-paper.queries";

export async function GET() {
  try {
    const examPapers = await fetchExamPapersForSearch();
    return NextResponse.json(examPapers);
  } catch (error) {
    console.error("Error fetching exam papers:", error);
    return NextResponse.json(
      { error: "Failed to fetch exam papers" },
      { status: 500 }
    );
  }
}
