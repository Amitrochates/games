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
    const prisma = new PrismaClient();
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
        return { success: false, error: 'Price details not found' };
    }

    const startAt = new Date(session.startAt);
    const endAt = new Date(session.endAt);
    const durationInHours = ((endAt.getTime() - startAt.getTime()) / 3600000);
    const totalAmount = durationInHours * (priceDetails.baseRate + (controllerCount? controllerCount-1 : 0)*priceDetails.addRate) + menuBill 
        
    await prisma.session.update({
        where: { id: session.id },
    data: { totalAmount, active: false }
        });

        return { success: true, foodBill:menuBill, billAmount: totalAmount, controllers: controllerCount };
    } catch (error) {
        console.error('Error generating bill:', error);
        return { success: false, error: 'Internal server error' };
    }
};

export const fetchTime = async (id: number): Promise<number> => {
    const prisma = new PrismaClient();
    try {
      const session = await prisma.session.findFirst({
        where: {
          setupId: id,
          active: true
        }
      });
      console.log(session);
  
      if (session) {
        const startAt = new Date(session.startAt);
        const endAt = new Date(session.endAt);
        const currentTime = new Date();
        const remainingTimeInSeconds = Math.max(0, (endAt.getTime() - currentTime.getTime()) / 1000);
        
        return Math.round(remainingTimeInSeconds);
      }
  
      return 0; 
    } catch (error) {
      console.error('Error fetching session time:', error);
      throw error; 
    }
  };