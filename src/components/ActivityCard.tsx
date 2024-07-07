"use client"

import React from 'react';
import { useState } from 'react';
import { Countdown } from "./Countdown";
import IconGameController from "./IconGameController";
import { ProgressBarComponent } from "./ProgressBarComponent";
import useTimer from './Timer';
import { Menuitem } from './Menuitem';
import { generateBill } from '@/app/actions/session';

export const ActivityCard = ({ id, number, type, menu }: { id:number, number: number, type: string, menu: {
  id: number;
  name: string;
  price: number;
}[] }) => {
  const { time, addTime, progress, resetTime } = useTimer();
  const [menuBill, setMenuBill] = useState(0);
  const [controllerCount, setControllerCount] = useState(0);
  const [freshstate, setFreshState] = useState<number>(1);
 
  const generateBillHandler = async (controllerCount:number, menuBill:number, id: number) => {
    try {

        const response = await generateBill(controllerCount, menuBill, id);
        setControllerCount(0);
        setFreshState(1);
        console.log(response);
       

        if (response.success) {
            alert(`Total amount: ${response.billAmount}`);
            resetTime();
            

        } 
        else {
            alert(`Failed to generate bill: ${response.error}`);
        }
    }
    catch (e) {
        console.error('Error:', e);
        alert('An error occurred while generating the bill.');
    }
};
const handleBillButtonClick = (controllerCount:number, menuBill:number, id: number) => {
    
    generateBillHandler(controllerCount, menuBill, id);
};



  return (
    <div className=" m-2   w-auto 
      relative border border-transparent
     border-red-500 shadow-[0_0_2px_rgba(255,0,0,0.6),0_0_20px_rgba(255,0,0,0.4),0_0_30px_rgba(255,0,0,0.3)_inset,0_0_50px_rgba(255,0,0,0.3)_inset]  rounded-2xl p-1 mx-2 px-2  ">
      <div className="grid grid-cols-3">
        <div className="flex flex-col justify-evenly col-span-2">
          <div className="flex  border border-gray-500  rounded-2xl p-1 m-1 mx-2 px-2 " >
            <div className="text-white mt-2 text-3xl ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
            </div>
            <div className="text-white text-2xl pr-2 pl-1 mt-1">{number}</div>
            <div className="my-2 mx-5 text-white rounded-lg">
              <div className="text-sm p-1">{type}</div>
            </div>
            
          </div>
          <div className="border border-red-500 rounded-2xl p-2 m-2 mx-2 px-2">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex justify-center"><IconGameController controllerCount={controllerCount} setControllerCount={setControllerCount} /></div>
              <div className="flex justify-center"><IconGameController controllerCount={controllerCount} setControllerCount={setControllerCount} /></div>
              <div className="flex justify-center"><IconGameController controllerCount={controllerCount} setControllerCount={setControllerCount} /></div>
              <div className="flex justify-center"><IconGameController controllerCount={controllerCount} setControllerCount={setControllerCount} /></div>
            </div>
          </div>
          <div className="grid grid-cols-8">
            <div className="col-span-8">
            
             <ProgressBarComponent progress={progress} />
            </div>
          </div>
          <div className="flex pl-2 pt-2">
          
            <Countdown id={id} time={time} addTime={addTime} />
          </div>
        </div>
        <div className="row-span-1">
          <div className="flex flex-col">
            <div>
            <ul className="overflow-y-auto text-sm font-medium h-36 w-auto text-gray-200 bg-black border border-gray-500 rounded-2xl mt-5">
                {menu.map(item => (
                  <Menuitem key={item.id} menuBill={menuBill} setMenuBill={setMenuBill} freshstate={freshstate} setFreshState={setFreshState} {...item} />))}
              </ul>
            </div>
            <div className="p-2 m-2">
            <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg
             shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg
              text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => handleBillButtonClick(controllerCount, menuBill, id)}>
             Bill
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  