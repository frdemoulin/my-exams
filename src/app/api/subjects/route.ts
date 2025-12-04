import { NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";

export async function GET() {
  try {
    const subjects = await prisma.subject.findMany({
      select: {
        id: true,
        shortDescription: true,
        longDescription: true,
      },
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
