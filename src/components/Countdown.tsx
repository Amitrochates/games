"use client"


import axios from 'axios';
import React from 'react';

interface CountdownProps {
  time: { hours: number; minutes: number; seconds: number }
  addTime: (seconds: number) => void
}
export const Countdown: React.FC<CountdownProps> = ({ time, addTime }) => {

 
const handler = async () =>{
  addTime(3600);
  const response = await axios.post("http://localhost:3000/api/session")
  console.log(response)
}
  return (
    <div className="flex items-start justify-center w-full gap-1 count-down-main">
      <div className="timer w-7">
        <div className="bg-gray-700 py-1 px-1 rounded-lg overflow-hidden border border-gray-500">
          <div className="countdown-element hours font-Cormorant font-semibold text-sm text-red-500 text-center">
            {time.hours}
          </div>
        </div>
        <p className="text-xs font-Cormorant font-medium text-white mt-1 text-center w-full">H</p>
      </div>
      <div className="font-manrope font-semibold text-sm text-white">:</div>
      <div className="timer w-7">
        <div className="bg-gray-700 py-1 px-1 rounded-lg border border-gray-500 overflow-hidden">
          <div className="countdown-element hours font-Cormorant font-semibold text-sm text-red-500 text-center">
            {time.minutes}
          </div>
        </div>
        <p className="text-xs font-Cormorant font-medium text-white mt-1 text-center w-full">min</p>
      </div>
      <div className="font-manrope font-semibold text-sm text-white">:</div>
      <div className="timer w-7">
        <div className="bg-gray-700 py-1 px-1 rounded-lg border border-gray-500 overflow-hidden">
          <div className="countdown-element hours font-Cormorant font-semibold text-sm text-red-500 text-center">
            {time.seconds}
          </div>
        </div>
        <p className="text-xs font-Cormorant font-medium text-white mt-1 text-center w-full">s</p>
      </div>

      <div className="timer w-7">
        <button
          className="bg-black text-white py-1 px-1 rounded-lg border border-gray-500 w-full"
          onClick={() => {handler}}
        >
          <div className="countdown-element hours font-Cormorant font-semibold text-sm text-center">
            +1
          </div>
        </button>
        <p className="text-xs font-Cormorant font-medium text-white mt-1 text-center w-full">H</p>
      </div>

      <div className="timer w-10">
        <button
          className="bg-black text-white py-1 px-1 rounded-lg border border-gray-500 w-full"
          onClick={handler}
        >
          <div className="countdown-element hours font-Cormorant font-semibold text-sm text-center">
            +30
          </div>
        </button>
        <p className="text-xs font-Cormorant font-medium text-white mt-1 text-center w-full">min</p>
      </div>
    </div>
  );
};
