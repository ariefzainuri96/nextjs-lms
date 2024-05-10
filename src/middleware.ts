import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { lucia } from "./lib/auth/lucia";

export async function middleware(request: NextRequest) {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;

  if (!sessionId) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const { session } = await lucia.validateSession(sessionId);

  try {
    if (session && session.fresh) {
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      );

      // redirect to dashboard if cookies is active
      if (!request.nextUrl.pathname.startsWith("/")) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }

    if (!session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      );

      // redirect to login if cookies is inactive
      if (!request.nextUrl.pathname.startsWith("/login")) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }
  } catch {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
