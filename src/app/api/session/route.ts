import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
    const body = await req.json();
    const prisma = new PrismaClient;
    const startAt = new Date();
    const endAt = new Date(startAt.getTime() + body.seconds * 1000);
    const session = await prisma.session.create({
        data:{
        screenNo: 1,
        startAt: startAt.toISOString(),
        endAt: endAt.toISOString(),
        totalAmount: 0
        }
  })
    console.log(session.id)
   

    return NextResponse.json({ message: "session created" });
}
 


