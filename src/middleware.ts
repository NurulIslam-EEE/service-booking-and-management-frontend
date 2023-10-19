import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
const hybridRoutes = [
  "/",
  "/login",
  "/sign-up",
  "/contact-us",
  "/aboutUs",
  "/services",
];
const customerRoute = ["/", "/dashboard", "/my-profile", "/dashboard/my-order"];
const rolesRedirect: Record<string, unknown> = {
  super_admin: `${process.env.FRONTEND_URL}/super_admin`,
  admin: `${process.env.FRONTEND_URL}/admins`,
};
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  const { pathname } = request.nextUrl;
  console.log(token, "token middleware", pathname);
  if (!token) {
    if (hybridRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(`${process.env.FRONTEND_URL}/login`);
  }

  const role = token?.role as string;
  console.log(role, "role middleware");
  if (
    (role === "admin" && pathname.startsWith("/admins")) ||
    (role === "super_admin" && pathname.startsWith("/super_admin")) ||
    (role === "customer" && customerRoute.includes(pathname))
  ) {
    console.log("next");
    return NextResponse.next();
  }

  if (pathname === "/" && role && role in rolesRedirect) {
    return NextResponse.redirect(rolesRedirect[role] as string);
  }

  return NextResponse.redirect(`${process.env.FRONTEND_URL}`);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/admins",
    "/admins/:page*",
    "/super_admin",
    "/login",
    "/sign-up",
    "/contact-us",
    "/dashboard",
    "/dashboard/:page*",
    "/super_admin/:page*",
  ],
};
