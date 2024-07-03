"use server"

import { PrismaClient } from '@prisma/client';



export const startTime = async (id:number, seconds:number) => {
   
    const prisma = new PrismaClient;
    const startAt = new Date();
    const endAt = new Date(startAt.getTime() + seconds * 1000);
    const session = await prisma.session.create({
        data:{
        setupId: 2,
        startAt: startAt,
        endAt: endAt,
        totalAmount: 0
        }
  })
    console.log(session.id)

    //to delete all records 
    // const tableName = 'Session'
    // await prisma.$queryRawUnsafe(`Truncate "${tableName}" restart identity cascade;`);

    return ({ message: "session created" });
}
