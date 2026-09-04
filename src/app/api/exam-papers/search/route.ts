import { NextResponse } from "next/server";
import { fetchExamPapersPublicSearch } from "@/core/exam-paper";

export async function GET() {
  try {
    const examPapers = await fetchExamPapersPublicSearch();
    return NextResponse.json(examPapers);
  } catch (error) {
    console.error("Error fetching exam papers:", error);
    return NextResponse.json(
      { error: "Failed to fetch exam papers" },
      { status: 500 }
    );
  }
}
