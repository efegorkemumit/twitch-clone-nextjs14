import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
 //  publicRoutes: ['/'],
 publicRoutes: ["/api/webhooks(.*)"],

});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};