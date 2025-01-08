"use client";
import { setTime } from '@/app/actions/session';
import React from 'react';

interface CountdownProps {
  id: number;
  time: { hours: number; minutes: number; seconds: number };
  addTime: (seconds: number) => void;
}

export const Countdown: React.FC<CountdownProps> = ({ id, time, addTime }) => {
  const handler = async (id: number, seconds: number) => {
    addTime(seconds);
    try {
      const response = await setTime(id, seconds);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const handleButtonClick = (id: number, seconds: number) => {
    handler(id, seconds);
  };

  return (
    <div className=" pl-7 flex items-start justify-center w-full gap-1 count-down-main flex-wrap sm:flex-nowrap">
      <div className="timer gap-2 w-7 sm:w-10 md:w-12 lg:w-14 xl:w-16">
        <div className="bg-gray-700 py-1 px-1 rounded-lg overflow-hidden border border-gray-500">
          <div className="countdown-element hours font-Cormorant font-semibold text-sm text-red-500 text-center">
            {time.hours}
          </div>
        </div>
        <p className="text-xs font-Cormorant font-medium text-white mt-1 text-center w-full">H</p>
      </div>
      <div className="font-manrope font-semibold text-sm text-white">:</div>
      <div className="timer w-7 sm:w-10 md:w-12 lg:w-14 xl:w-16">
        <div className="bg-gray-700 py-1 px-1 rounded-lg border border-gray-500 overflow-hidden">
          <div className="countdown-element hours font-Cormorant font-semibold text-sm text-red-500 text-center">
            {time.minutes}
          </div>
        </div>
        <p className="text-xs font-Cormorant font-medium text-white mt-1 text-center w-full">Min</p>
      </div>
      <div className="font-manrope font-semibold text-sm text-white">:</div>
      <div className="timer w-7 sm:w-10 md:w-12 lg:w-14 xl:w-16">
        <div className="bg-gray-700 py-1 px-1 rounded-lg border border-gray-500 overflow-hidden">
          <div className="countdown-element hours font-Cormorant font-semibold text-sm text-red-500 text-center">
            {time.seconds}
          </div>
        </div>
        <p className="text-xs font-Cormorant font-medium text-white mt-1 text-center w-full">S</p>
      </div>

      <div className="timer w-7 sm:w-10 md:w-12 lg:w-14 xl:w-16">
        <button
          className="bg-black text-white py-1 px-1 rounded-lg border border-gray-500 w-full"
          onClick={() => handleButtonClick(id, 3600)}
        >
          <div className="countdown-element hours font-Cormorant font-semibold text-sm text-center">
            +1
          </div>
        </button>
        <p className="text-xs font-Cormorant font-medium text-white mt-1 text-center w-full">H</p>
      </div>

      <div className="timer w-10 sm:w-12 md:w-14 lg:w-16 xl:w-18">
        <button
          className="bg-black text-white py-1 px-1 rounded-lg border border-gray-500 w-full"
          onClick={() => handleButtonClick(id, 1800)}
        >
          <div className="countdown-element hours font-Cormorant font-semibold text-sm text-center">
            +30
          </div>
        </button>
        <p className="text-xs font-Cormorant font-medium text-white mt-1 text-center w-full">min</p>
      </div>
      <div className="timer w-7 sm:w-10 md:w-12 lg:w-14 xl:w-16">
        <button
          className="bg-black text-white py-1 px-1 rounded-lg border border-gray-500 w-full"
          onClick={() => handleButtonClick(id, 900)}
        >
          <div className="countdown-element hours font-Cormorant font-semibold text-sm text-center">
            +15
          </div>
        </button>
        <p className="text-xs font-Cormorant font-medium text-white mt-1 text-center w-full">Min</p>
      </div>
    </div>
  );
};
