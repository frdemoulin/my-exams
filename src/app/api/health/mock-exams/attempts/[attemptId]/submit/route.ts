import { NextResponse } from "next/server";

import {
  HealthMockExamError,
  submitHealthMockExamAttempt,
} from "@/core/health-mock-exam/health-mock-exam.service";
import { auth } from "@/lib/auth/auth";
import { getSessionEffectiveUserId } from "@/lib/auth/session";

export const runtime = "nodejs";

type RouteProps = {
  params: Promise<{ attemptId: string }>;
};

export async function POST(_request: Request, { params }: RouteProps) {
  const session = await auth();
  const userId = getSessionEffectiveUserId(session);

  if (!userId) {
    return NextResponse.json({ success: false, message: "Non authentifié." }, { status: 401 });
  }

  try {
    const { attemptId } = await params;
    const result = await submitHealthMockExamAttempt({ attemptId, userId });

    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    const status = error instanceof HealthMockExamError ? error.status : 500;
    const message = error instanceof Error ? error.message : "Erreur interne.";
    return NextResponse.json({ success: false, message }, { status });
  }
}
