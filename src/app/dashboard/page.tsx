
import { PrismaClient } from "@prisma/client";
import { ActivityCard } from "@/components/ActivityCard";

export default async function (){

  
    const prisma = new PrismaClient()
    const setups = await prisma.setup.findMany();
      
    const menu = await prisma.menu.findMany()
        
    
    return <div>
        <div className="grid grid-cols-3 bg-black ">
        {setups.map((setup: { id:number; screenNo: number; systemType: string; }) => (
           <ActivityCard id={setup.id} number={setup.screenNo} type={setup.systemType} menu={menu}/>
           
      ))}
      
        </div>
        </div>
        
   
}