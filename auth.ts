import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

interface User { email: string; password: string; }

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const email = credentials?.email as string;
        const password = credentials?.password as string;

        const res = await fetch("http://localhost:8000/account", {
          method: "GET",
          headers: {
            'Accept': 'application/json' // Thêm tiêu đề để yêu cầu JSON
          },
        });
        const data = await res.json();
        const foundUser = data.find(
          (u: any) => u.email === email && u.password === password
        );
        return foundUser ?? null;
      },
    }),
  ],
  pages: {
    signIn: "/assignment8",
  },
  secret: "secret-key",
});