import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

import prisma from "@/lib/db/prisma";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const diploma = searchParams.get("diploma") || undefined;
    const subject = searchParams.get("subject") || undefined;
    const teachingId = searchParams.get("teachingId") || undefined;
    const session = searchParams.get("session");
    const sessionYear = session ? Number(session) : undefined;

    const examPaperFilter: Prisma.ExamPaperWhereInput = {};

    const diplomaFilter: Prisma.DiplomaWhereInput = { isActive: { not: false } };
    if (diploma) {
      diplomaFilter.OR = [
        { shortDescription: { contains: diploma, mode: "insensitive" } },
        { longDescription: { contains: diploma, mode: "insensitive" } },
      ];
    }
    examPaperFilter.diploma = diplomaFilter;

    const subjectFilter: Prisma.SubjectWhereInput = { isActive: { not: false } };
    if (subject) {
      subjectFilter.OR = [
        { shortDescription: { contains: subject, mode: "insensitive" } },
        { longDescription: { contains: subject, mode: "insensitive" } },
      ];
    }

    const teachingFilter: Prisma.TeachingWhereInput = {
      isActive: { not: false },
      subject: subjectFilter,
    };
    if (teachingId) {
      teachingFilter.id = teachingId;
    }
    examPaperFilter.teaching = teachingFilter;

    if (Number.isFinite(sessionYear)) {
      examPaperFilter.sessionYear = sessionYear as number;
    }

    const exercises = await prisma.exercise.findMany({
      where: {
        enrichmentStatus: "completed",
        examPaper: examPaperFilter,
      },
      select: { themeIds: true },
    });

    const themeIds = [...new Set(exercises.flatMap((ex) => ex.themeIds))];
    if (themeIds.length === 0) {
      return NextResponse.json({ success: true, domains: [] });
    }

    const themes = await prisma.theme.findMany({
      where: {
        id: { in: themeIds },
        domain: { isActive: { not: false } },
      },
      select: {
        id: true,
        title: true,
        shortTitle: true,
        shortDescription: true,
        longDescription: true,
        domain: {
          select: {
            id: true,
            longDescription: true,
            shortDescription: true,
            order: true,
          },
        },
      },
    });

    const domainsMap = new Map<
      string,
      {
        id: string;
        label: string;
        shortLabel: string | null;
        order: number | null;
        themes: Array<{ id: string; label: string; shortLabel: string | null }>;
      }
    >();

    themes.forEach((theme) => {
      const domain = theme.domain;
      const existing =
        domainsMap.get(domain.id) ||
        {
          id: domain.id,
          label: domain.longDescription,
          shortLabel: domain.shortDescription,
          order: domain.order ?? null,
          themes: [],
        };

      existing.themes.push({
        id: theme.id,
        label: theme.title,
        shortLabel: theme.shortTitle ?? null,
      });

      domainsMap.set(domain.id, existing);
    });

    const domains = Array.from(domainsMap.values())
      .map((domain) => ({
        ...domain,
        themes: domain.themes.sort((a, b) =>
          a.label.localeCompare(b.label, "fr", { sensitivity: "base" })
        ),
      }))
      .sort((a, b) => {
        const orderA = a.order ?? Number.POSITIVE_INFINITY;
        const orderB = b.order ?? Number.POSITIVE_INFINITY;
        if (orderA !== orderB) return orderA - orderB;
        return a.label.localeCompare(b.label, "fr", { sensitivity: "base" });
      });

    return NextResponse.json({ success: true, domains });
  } catch (error) {
    console.error("Error fetching domains/themes:", error);
    return NextResponse.json(
      {
        success: false,
        domains: [],
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
