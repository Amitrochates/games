
import { PrismaClient } from "@prisma/client";
import { SetupComponent } from "@/components/SetupComponent";
import { ActivityCard } from "@/components/ActivityCard";

export default async function (){

  
    const prisma = new PrismaClient()
    const setups = await prisma.setup.findMany()
    const menu = await prisma.menu.findMany()
        
    
    console.log(setups)
    
    return <div>
        <div className="grid grid-cols-4">
        {setups.map(setup => (
           <ActivityCard number={setup.screenNo} type={setup.systemType} menu={menu}/>
           
      ))}

     
      {/* {setups.map(setup => (
           <ActivityCard number={setup.screenNo} type={setup.systemType} menu={menu}/>
           
      ))} */}
      
      
        </div>
        </div>
        
   
}