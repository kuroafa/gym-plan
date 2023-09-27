import NextAuth from "next-auth"
import { string } from "zod"

declare module "next-auth" {
interface User {
  id: string
    username: string
    email: string
 
}
  interface Session {
    user: User &  {
      id: string
    username: string
    email: string

    }
    token: {
      id: string
        username: string
        email: string
      
    }
  }
}