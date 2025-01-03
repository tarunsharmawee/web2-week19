import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import prismaClient from "../../../lib/db"

export async function POST(req: NextRequest) {
  const data = await req.json();    

  prismaClient.user.create({
    data: {
      username: data.username,
      password: data.password,
    },
  });
  return NextResponse.json({
    message : "you have signed up"
  })
}

export async function GET(req : NextRequest,){
    const user = await prismaClient.user.findFirst();

    return NextResponse.json({
        user,
    })
}

