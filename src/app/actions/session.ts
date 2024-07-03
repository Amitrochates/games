"use server"

import { PrismaClient } from '@prisma/client';



export const setTime = async (id:number, seconds:number) => {
    
    const prisma = new PrismaClient;
    
    const sessionNew = await prisma.session.findMany({
        where: {
            setupId: id,
            active: false
        }
    })

    if(sessionNew){
    const startAt = new Date();
    const endAt = new Date(startAt.getTime() + seconds * 1000);
    const session = await prisma.session.update({
        where:{
            setupId: id
        },
        data:{
        setupId: id,
        startAt: startAt,
        endAt: endAt,
        active: true,
        totalAmount: 0
        }
  })
    return ({ message: "New session created. id: " + session.id});
    }
    else {
        const sessionExist = await prisma.session.findFirst({
            where:{
                setupId: id,
                active: true
            },
        })
        if(sessionExist){
        const startAt = sessionExist.endAt || new Date()
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
}
}
