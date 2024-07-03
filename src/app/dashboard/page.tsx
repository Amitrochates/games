
import { PrismaClient } from "@prisma/client";
import { ActivityCard } from "@/components/ActivityCard";

export default async function (){

  
    const prisma = new PrismaClient()
    const setups = 
        [{
          "id": 1,
          "screenNo": 5,
          "systemType": "PS4",
          "hourlyRate": 90
        }]
      
    const menu = await prisma.menu.findMany()
        
    
    //console.log(setups)
    
    return <div>
        <div className="grid grid-cols-4">
        {setups.map((setup: { id:number; screenNo: number; systemType: string; }) => (
           <ActivityCard id={setup.id} number={setup.screenNo} type={setup.systemType} menu={menu}/>
           
      ))}
      
        </div>
        </div>
        
   
}