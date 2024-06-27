import { Cart } from "./Cart"
import IconGameController from "./IconGameController"

export const SetupComponent = ({number, type, menu}: {number: number, type: string, menu:    
    {
        id: number;
        name: string;
        price: number;  
    }[] }) =>{
    return <div className="flex justify-center rounded-lg border-blue-600 h-max-sm border-4 m-5 p-5">
            <div className="flex flex-col ">
                <div className="flex justify-between m-5">
                <div>Screen {number}</div>
                <div>Type -{type}</div>
                </div>
            
                <div className="flex border-blue-600 p-5 max-w-lg w-full">
                
                <div className="text-slate-300 hover:text-green-700"><IconGameController/></div>
                <div className="text-slate-300 hover:text-green-700"><IconGameController/></div>
                <div className="text-slate-300 hover:text-green-700"><IconGameController/></div>
                <div className="text-slate-300 hover:text-green-700"><IconGameController/></div>
                
             </div>
               
             <div className="z-40 pl-9">
                <Cart menu={menu}/>
            </div>
            </div>
            <div className="flex flex-col justify-between">
                <div>
                    <div className="flex">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                        </div>
                        <div >
                            Time
                        </div>
                </div>
                        <div>
                            Bill 
                        </div>
                 </div>
                
        </div>
        
  
}