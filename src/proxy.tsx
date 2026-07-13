import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth"; 

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    return NextResponse.redirect(new URL("/sinin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/desbord",
    "/desbord/additems",
    "/desbord/mangeProdect",
    "/desbord/overview",
  ],
};