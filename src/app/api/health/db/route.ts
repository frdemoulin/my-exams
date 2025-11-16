import prisma from "@/lib/db";

export async function GET() {
  try {
    const userCount = await prisma.user.count();
    return new Response(JSON.stringify({ ok: true, userCount }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ ok: false, error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
