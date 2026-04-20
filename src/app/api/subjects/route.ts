import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";
import { includesNormalizedSearch } from "@/lib/utils";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const diploma = searchParams.get("diploma") || undefined;

    if (!diploma) {
      const subjects = await prisma.subject.findMany({
        select: {
          id: true,
          shortDescription: true,
          longDescription: true,
        },
        where: { isActive: { not: false } },
        orderBy: { shortDescription: 'asc' },
      });

      return NextResponse.json({
        success: true,
        subjects,
      });
    }

    const subjects = await prisma.subject.findMany({
      select: {
        id: true,
        shortDescription: true,
        longDescription: true,
        teachings: {
          where: {
            isActive: { not: false },
            examPapers: {
              some: {
                diploma: { isActive: { not: false } },
              },
            },
          },
          select: {
            examPapers: {
              where: {
                diploma: { isActive: { not: false } },
              },
              select: {
                diploma: {
                  select: {
                    shortDescription: true,
                    longDescription: true,
                  },
                },
              },
            },
          },
        },
      },
      where: { isActive: { not: false } },
      orderBy: { shortDescription: 'asc' },
    });

    const filteredSubjects = subjects.filter((subject) =>
      subject.teachings.some((teaching) =>
        teaching.examPapers.some((paper) =>
          includesNormalizedSearch(
            [paper.diploma.shortDescription, paper.diploma.longDescription],
            diploma
          )
        )
      )
    );

    return NextResponse.json({
      success: true,
      subjects: filteredSubjects.map((subject) => ({
        id: subject.id,
        shortDescription: subject.shortDescription,
        longDescription: subject.longDescription,
      })),
    });
  } catch (error) {
    console.error('Error fetching subjects:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la récupération des matières' },
      { status: 500 }
    );
  }
}
