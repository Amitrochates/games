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


export const generateBill = async (controllerCount:number,menuBill:number, id: number) => {
    const prisma = new PrismaClient;
    try {
        const session = await prisma.session.findFirst({
            where: {
                setupId: id,
                active: true
            },
            include: { setup: true }
        });

        if (!session) {
            return { success: false, error: 'Active session not found' };
        }
        const priceDetails = await prisma.price.findUnique({
            where: { systemType: session.setup.systemType }
        });
        if (!priceDetails) {
            return { success: false, error:'Price details not found' };
        }
     const startAt = new Date(session.startAt);
    const endAt = new Date(session.endAt);
        const durationInSeconds = (endAt.getTime() - startAt.getTime()) /1000;
        const baseDuration =3600; 
        const halfHourDuration =1800; 

        let totalAmount = 0;

        if (durationInSeconds <= halfHourDuration) {
            totalAmount = priceDetails.baseRate /2;
        } 
    else {
            const fullHours = Math.floor(durationInSeconds /baseDuration);
            const remainingSeconds = durationInSeconds %baseDuration;
            const halfHours = Math.ceil(remainingSeconds /halfHourDuration);
            totalAmount = fullHours * priceDetails.baseRate;
            if (halfHours >0) {
                totalAmount += (priceDetails.baseRate / 2) * halfHours;
            }
        }
        totalAmount += menuBill;
    await prisma.session.update({
        where: { id: session.id },
    data: { totalAmount, active: false }
        });

        return { success: true, foodBill:menuBill, billAmount: totalAmount };
    } catch (error) {
        console.error('Error generating bill:', error);
        return { success: false, error: 'Internal server error' };
    }
};

