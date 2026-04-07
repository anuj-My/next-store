import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/products(.*)", "/about"]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  const isAdminUser = userId === process.env.ADMIN_USER_ID;

  if (!isAdminUser && isAdminRoute(req)) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (isAdminRoute(req) && !isAdminUser) {
    console.log("Unauthorized access attempt to admin route");
    throw new Response("Unauthorized", { status: 401 });
  }

  if (!isPublicRoute(req)) {
    console.log("protected route");
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
