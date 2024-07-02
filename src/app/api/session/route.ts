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


//  //GET input : screenid (abhi screenNo le rha, need to change schema)
//   //response: session json
// export async function GET(req: NextRequest){
//   const body = await req.json();
//   const prisma = new PrismaClient;
//   const session = await prisma.session.findFirst({
//     where:{
//       screenNo: body.screenNo
//     }
//   })
//   return NextResponse.json(session);
// }

// // PUT - gets the session info of current session from a find Request, calculates the bill amount and updates the amount of the given session
// // input: session Id
// // output: updated session with bill amount 
// export async function PUT(req: NextRequest){
//   const body = await req.json();
//   const prisma = new PrismaClient;
//   const session = await prisma.session.findFirst({
//     where:{
//       id: body.id,
//     }
//   })
//   const billamount = (session.endAt - session.startAt)*(session.setup.baseRate + body.controller*session.setup.addRate) + 
//   const updateSession = await prisma.session.update({
//     where:{
//       id: body.id
//     },
//     data:{
//       amount: billamount
//     }
//   })
  
//   return NextResponse.json(updateSession);
// }
 


