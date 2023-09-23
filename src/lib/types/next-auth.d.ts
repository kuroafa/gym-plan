import NextAuth from "next-auth"
import { string } from "zod"

declare module "next-auth" {
interface User {
  id: string
    username: string
    email: string
    age: string
    height: string
    weight: string
    gender: []
}
  interface Session {
    user: User &  {
      id: string
    username: string
    email: string
    age: string
    height: string
    weight: string
    gender: []
    }
    token: {
      id: string
        username: string
        email: string
        age: string
        height: string
        weight: string
        gender: []
    }
  }
}