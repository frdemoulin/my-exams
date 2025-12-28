import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import prisma from "@/lib/db/prisma";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const diploma = searchParams.get("diploma") || undefined;

    const where: Prisma.SubjectWhereInput = { isActive: true };

    if (diploma) {
      where.teachings = {
        some: {
          isActive: true,
          examPapers: {
            some: {
              diploma: {
                isActive: true,
                OR: [
                  { shortDescription: { contains: diploma, mode: "insensitive" } },
                  { longDescription: { contains: diploma, mode: "insensitive" } },
                ],
              },
            },
          },
        },
      };
    }

    const subjects = await prisma.subject.findMany({
      select: {
        id: true,
        shortDescription: true,
        longDescription: true,
      },
      where,
      orderBy: { shortDescription: 'asc' },
    });

    return NextResponse.json({ success: true, subjects });
  } catch (error) {
    console.error('Error fetching subjects:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la récupération des matières' },
      { status: 500 }
    );
  }
}
