import React from "react"
import { Cart } from "./Cart"
import IconGameController from "./IconGameController"
import Timer from "./Timer"

export const Setup = () =>{
    return (
        <div className="flex justify-center rounded-lg m-5 p-5">
            <div className="flex flex-col">
                <div className="flex">
                    <div><IconGameController/></div>
                    <div className="flex flex-col justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                        stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                </div>
               
             
                <Cart menu={[]} />
        
            </div>
            <div className="flex flex-col">
            <div className="flex">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <div>
                        <Timer />
                    </div>
                </div>
                <div>
                    Time
                </div>
                <div>
                    Bill 
                </div>
            </div>
        </div>
        )
}