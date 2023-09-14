import { NextResponse } from "next/server";
import { genSalt, hash } from "bcryptjs";
import prisma from "@/db/client";
import { v4 as uuidv4 } from "uuid";
import { UploadAndGetUrl } from "@/components/server/cloudinary";

export async function POST(req: Request) {
  const body = await req.formData();
  const email = body.get("email")?.toString();
  const password = body.get("password")?.toString();
  const avatar = body?.get("avatar")?.toString();

  if (!email || !password || !avatar) {
    return NextResponse.json({ status: 400, error: "Data is missing" });
  }
  const userExists = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (userExists) {
    return NextResponse.json({ data: 409, error: "User Already exists" });
  } else {
    const data = await UploadAndGetUrl({
      Image: avatar,
      Public_ID: `${uuidv4()}`,
    });
    if (data !== null) {
      const salt = await genSalt(10);
      const hashedPassword = await hash(password as string, salt);
      await prisma.user.create({
        data: {
          email: email,
          password: hashedPassword,
          image: data?.toString(),
        },
      });
      return NextResponse.json({
        status: 200,
        data: { msg: "Account Created", success: true },
      });
    }
    return NextResponse.json({
      status: 500,
      data: { msg: "Account NotCreated", success: false },
    });
  }
}
