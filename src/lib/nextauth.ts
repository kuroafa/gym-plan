import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./db";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/SigninPage",
    signOut: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Gymify",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
      
        const existingUser = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });
      
        if (!existingUser) {
          return null;
        }
      
        const passwordMatch = await compare(
          credentials.password,
          existingUser.password
        );
      
        if (!passwordMatch) {
          return null;
        }
      
        return {
          id: existingUser.id,
          name: existingUser.name || null,
          username: existingUser.username,
          email: existingUser.email || null,
          weight: existingUser.weight || "",
          height: existingUser.height || "",
          age: existingUser.age || "",
          gender: existingUser.gender,
        };
      }
      ,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
     
     if(user){
      return {
        ...token,
        username: user.username,
        email: user.email,
        weight: user.weight,
        height: user.height,
        age: user.age,
        gender: user.gender,
        id: user.id
      }
     }
     return token
    },
    async session({ session,  token }) {
      return {
        ...session,
         user: {
          ...session.user,
          id: token.id,
          username: token.username,
          email: token.email,
          weight: token.weight,
          height: token.height,
          age: token.age,
          gender: token.gender
        }
      }
      
    },
  }
};

export const getAuthSession = () => {
  return getServerSession(authOptions);
};
