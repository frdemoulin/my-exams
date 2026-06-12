import { NextRequest } from "next/server";

import { handlers } from "@/lib/auth/auth";

function firstHeaderValue(value: string | null) {
  return value?.split(",")[0]?.trim() ?? "";
}

function withPublicRequestOrigin(
  handler: (request: NextRequest) => Promise<Response>,
) {
  return (request: NextRequest) => {
    const host =
      firstHeaderValue(request.headers.get("x-forwarded-host")) ||
      firstHeaderValue(request.headers.get("host"));
    const protocol =
      firstHeaderValue(request.headers.get("x-forwarded-proto")) ||
      request.nextUrl.protocol.replace(":", "");

    if (!host) return handler(request);

    const url = request.nextUrl.clone();
    url.host = host;
    url.protocol = `${protocol}:`;

    return handler(new NextRequest(url, request));
  };
}

export const GET = withPublicRequestOrigin(handlers.GET);
export const POST = withPublicRequestOrigin(handlers.POST);
