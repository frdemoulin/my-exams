import { NextResponse } from "next/server";
import { getToastMessage, clearToastCookie } from "@/lib/toast";

export async function GET() {
  const toastMessage = await getToastMessage();
  
  if (toastMessage) {
    await clearToastCookie();
    return NextResponse.json(toastMessage);
  }
  
  return NextResponse.json({ message: null });
}
