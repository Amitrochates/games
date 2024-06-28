"use client";

import { useState, useEffect } from 'react';

function Timer(props: React.SVGProps<SVGSVGElement>) {
  const [time, setTime] = useState(0);
  const [isSetting, setIsSetting] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleIconClick = () => setIsSetting(!isSetting);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

  const handleSetTimer = () => {
    const parsedTime = parseInt(inputValue, 10);
    if (!isNaN(parsedTime) && parsedTime > 0) {
      setTime(parsedTime);
      setInputValue('');
      setIsSetting(false);
    }
  };

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => setTime(prevTime => prevTime - 1), 60000);
      return () => clearInterval(timerId);
    }
  }, [time]);

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer"
        onClick={handleIconClick}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>

      {isSetting && (
        <div className="mt-2">
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Set timer (minutes)"
            className="border rounded p-1"
          />
          <button onClick={handleSetTimer} className="ml-2 p-1 bg-blue-500 text-white rounded">
            Set
          </button>
        </div>
      )}

      {time > 0 && (
        <div className="mt-2">
          <p>Time left: {time} minutes</p>
        </div>
      )}
    </div>
  );
}

export default Timer;
