import { jwtHelpers } from "@/helpers/jwtHelpers";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "service-booking-backend",
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "your Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch(
            "https://service-booking-and-management.vercel.app/api/v1/auth/login",
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" },
            }
          );
          const { data } = await res.json();

          const verifiedToken: any = jwtHelpers.verifyToken(
            data?.accessToken,
            process.env.JWT_SECRET!
          );
          // console.log("authOptionsss", data);

          if (res.ok && data) {
            return {
              ...data,
              ...verifiedToken,
            };
          }
        } catch (err: any) {
          throw new Error(err.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // console.log(token, "auth....");
      // console.log(user, "user....");
      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token }) {
      // console.log(token, "tttttt....");
      // console.log(session, "ssss....");
      return {
        ...session,
        ...token,
      };
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/login", error: "/" },
};
