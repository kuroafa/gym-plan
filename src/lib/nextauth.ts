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
            email: credentials?.email as string,
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
          username: existingUser.username,
          email: existingUser.email || "",
          name: existingUser.name || ''
        };
      },
      
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
     
     if(user){
      return {
        ...token,
        username: user.username,
        email: user.email,
        id: user.id,
        name: user.name
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
         name: token.name

        }
      }
      
    },
  }
};

export const getAuthSession = () => {
  return getServerSession(authOptions);
};
