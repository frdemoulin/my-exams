import { NextResponse } from "next/server";

import {
  HealthMockExamError,
  saveHealthMockExamAnswer,
} from "@/core/health-mock-exam/health-mock-exam.service";
import { auth } from "@/lib/auth/auth";
import { getSessionEffectiveUserId } from "@/lib/auth/session";

export const runtime = "nodejs";

type RouteProps = {
  params: Promise<{ attemptId: string }>;
};

function parsePayload(value: unknown) {
  if (!value || typeof value !== "object") return null;

  const payload = value as Record<string, unknown>;
  const attemptQuestionId = typeof payload.attemptQuestionId === "string" ? payload.attemptQuestionId : null;
  const markedForReview = typeof payload.markedForReview === "boolean" ? payload.markedForReview : null;
  const selectedChoiceIndexes = Array.isArray(payload.selectedChoiceIndexes)
    ? payload.selectedChoiceIndexes
    : [];
  const responsePayload = "responsePayload" in payload ? payload.responsePayload : undefined;

  if (
    !attemptQuestionId ||
    markedForReview === null ||
    selectedChoiceIndexes.some((value) => typeof value !== "number")
  ) {
    return null;
  }

  return {
    attemptQuestionId,
    markedForReview,
    selectedChoiceIndexes,
    responsePayload,
  };
}

export async function PUT(request: Request, { params }: RouteProps) {
  const session = await auth();
  const userId = getSessionEffectiveUserId(session);

  if (!userId) {
    return NextResponse.json({ success: false, message: "Non authentifié." }, { status: 401 });
  }

  try {
    const payload = parsePayload(await request.json());
    if (!payload) {
      return NextResponse.json({ success: false, message: "Réponse invalide." }, { status: 400 });
    }

    const { attemptId } = await params;
    const answer = await saveHealthMockExamAnswer({
      attemptId,
      userId,
      ...payload,
    });

    return NextResponse.json({ success: true, answer });
  } catch (error) {
    const status = error instanceof HealthMockExamError ? error.status : 500;
    const message = error instanceof Error ? error.message : "Erreur interne.";
    return NextResponse.json({ success: false, message }, { status });
  }
}
