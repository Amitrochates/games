"use server"

import { PrismaClient } from '@prisma/client';



export const setTime = async (id:number, seconds:number) => {
    
    const prisma = new PrismaClient;
    
    const sessionExist = await prisma.session.findFirst({
        where:{
            setupId: id,
            active: true
        },
    })
    if(sessionExist){
    const startAt = sessionExist.endAt
    const endAt = new Date(startAt.getTime() + seconds * 1000);
    const session = await prisma.session.update({
        where:{
            id: sessionExist.id
        },
        data:{
        endAt: endAt,
        }
     })
     return ({message: "session updated"})
    }
    else {
        const startAt = new Date()
        const endAt = new Date(startAt.getTime() + seconds * 1000);
        const session = await prisma.session.create({
            data:{
            setupId: id,
            startAt: startAt,
            endAt: endAt,
            active: true,
            totalAmount: 0
            }
         })
         return ({message: "session created id:" + session.id})
    }
}
