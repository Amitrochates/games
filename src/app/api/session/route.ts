import { PrismaClient } from '@prisma/client/extension';
import { NextRequest, NextResponse } from 'next/server';

// // //POST

// import { time } from "console"
// import { BloomFilter } from "next/dist/shared/lib/bloom-filter"

// // input - 1h || 30 min
// create new session 

// PUT/:Id
// updtae time
// generate bill 
// return bill


export async function POST(req: NextRequest) {
   // const body = await req.json();
    const prisma = new PrismaClient;
    const startAt = new Date();
    const endAt = new Date(startAt.getTime() + 3600 * 1000);
    const session = await prisma.session.create({
        data:{
        screenNo: 4,
        startAt: startAt.toISOString(),
        endAt: endAt.toISOString(),
        totalAmount: 0
        }
  })
    console.log(session.id)
   

    return NextResponse.json({ message: "session created" });
}
 


