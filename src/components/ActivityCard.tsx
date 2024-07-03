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
  const { time, addTime, progress } = useTimer();

  
  const generateBillHandler = async (menuBill:number, id: number) => {
    try {
        const response = await generateBill(menuBill, id);
        console.log(response);

        if (response.success) {
            alert(`Total amount: ${response.billAmount}`);
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
const handleBillButtonClick = (menuBill:number, id: number) => {
    generateBillHandler(menuBill, id);
};
const [menuBill, setMenuBill] = useState(0);
  return (
    <div className="m-2 p-4 bg-gray-900 rounded-3xl w-auto">
      <div className="grid grid-cols-3">
        <div className="flex flex-col justify-evenly col-span-2">
          <div className="flex mx-2 rounded-2xl bg-gray-700 border border-gray-500 px-2">
            <div className="text-red-400 mt-2 text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
            </div>
            <div className="text-red-400 text-2xl pr-2 pl-1 mt-1">{number}</div>
            <div className="my-2 mx-5 text-white rounded-lg">
              <div className="text-sm p-1">{type}</div>
            </div>
          </div>
          <div className="flex bg-gray-700 border border-gray-500 rounded-2xl p-1 m-1 mx-2 px-2">
            <div className="text-slate-300 hover:text-red-200"><IconGameController /></div>
            <div className="text-slate-300 hover:text-red-200"><IconGameController /></div>
            <div className="text-slate-300 hover:text-red-200"><IconGameController /></div>
            <div className="text-slate-300 hover:text-red-200"><IconGameController /></div>
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
            <ul className="overflow-y-auto text-sm font-medium h-36 w-auto text-gray-200 bg-gray-700 border border-gray-500 rounded-2xl mt-5">
                {menu.map(item => (
                  <Menuitem key={item.id} menuBill={menuBill} setMenuBill={setMenuBill} {...item} />))}
              </ul>
            </div>
            <div className="p-2 m-2">
            <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg
             shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg
              text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => handleBillButtonClick(menuBill, id)}>
             Bill
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
