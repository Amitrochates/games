
import { PrismaClient } from "@prisma/client";
import { ActivityCard } from "@/components/ActivityCard";
import { TopBar } from "@/components/TopBar";

export default async function (){

  
    const prisma = new PrismaClient()
    const setups = await prisma.setup.findMany();
      
    const menu = await prisma.menu.findMany()
        
    
    return <div className="bg-black h-screen">
      <div className="h-screen w-full min-h-screen bg-black">
      <div className="">
        <TopBar/>
      </div>
        <div className="grid grid-cols-3 gap-6" >
        {setups.map((setup: { id:number; screenNo: number; systemType: string; }) => (
           <ActivityCard id={setup.id} number={setup.screenNo} type={setup.systemType} menu={menu}/>
           
      ))}
      
        </div>
        </div>
        </div>
        
   
}