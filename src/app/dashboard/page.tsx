
import { PrismaClient } from "@prisma/client";
import { ActivityCard } from "@/components/ActivityCard";
import { TopBar } from "@/components/TopBar";

export default async function (){

  
    const prisma = new PrismaClient()
    const setups = await prisma.setup.findMany();
      
    const menu = await prisma.menu.findMany()
        
    
    return (
      <div className="bg-black h-screen w-screen overflow-hidden">
        <div className="h-full w-full bg-black flex flex-col">
          <div>
            <TopBar />
          </div>
          <div className="flex-grow grid grid-cols-3 gap-6">
            {setups.map((setup: { id: number; screenNo: number; systemType: string; }) => (
              <ActivityCard key={setup.id} id={setup.id} number={setup.screenNo} type={setup.systemType} menu={menu} />
            ))}
          </div>
        </div>
      </div>
    );
    
        
   
}