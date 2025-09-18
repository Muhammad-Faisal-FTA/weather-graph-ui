import { getServerSession } from "next-auth";
import { NextAuthOptions } from "next-auth";

// 👇 Only needed if you want getServerSession() on frontend SSR
export const nextAuthClientOptions: NextAuthOptions = {
  providers: [], // leave empty here
  secret: process.env.NEXTAUTH_SECRET,
};

export const backendAuthUrl = process.env.NEXT_PUBLIC_BACKEND_URL + "/api/auth";
console.log("nextClientAuth",  backendAuthUrl)
