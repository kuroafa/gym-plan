import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";
import { UserCreationSchema } from "@/lib/type";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, username, password, name,  } =
      UserCreationSchema.parse(body);
    //check if user exist

    const existingUserbyEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existingUserbyEmail) {
      return NextResponse.json(
        { user: null, message: "User with this email already exists" },
        { status: 409 }
      );
    }

    // check if username is already accessed
    const existingUserbyUsername = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (existingUserbyUsername) {
      return NextResponse.json(
        { user: null, message: "User with this username already exists" },
        { status: 409 }
      );
    }

    // new user
    const hashPassword = await hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: hashPassword,
      },
    });

    console.log("User record created:", newUser);
    const { password: newUserPassword, ...rest } = newUser;
    return NextResponse.json(
      { user: rest, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(" error creating User record :", error);
    return NextResponse.json(
      { message: "Something went wrong, try again later." },
      { status: 500 }
    );
  }
}
