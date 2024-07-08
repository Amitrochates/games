"use client"

import { useState, useEffect } from 'react';

const useTimer = (initialTime = 0) => {
const [time, setTime] = useState(initialTime);  
const [progress, setProgress] = useState(0)
const [initialTotalTime, setInitialTotalTime] = useState(0)

  useEffect(() => {
    if (initialTotalTime >0) {
    setProgress((time /initialTotalTime)*100)
    }
  }, [time, initialTotalTime])

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime(prevTime => {
          const newTime = prevTime - 1;
          return newTime > 0 ? newTime : 0;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time]);

  const addTime = (seconds:number) => {
    setTime(prevTime => {
      const newTime = prevTime +seconds;
      if (newTime > initialTotalTime) {
        setInitialTotalTime(newTime);
      }
      return newTime;
    })
  };
  const resetTime = () => {
    setTime(0);
    setProgress(0);
    setInitialTotalTime(0);
  };

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds /3600);
    const minutes = Math.floor((totalSeconds %3600) /60);
    const seconds = totalSeconds %60;
  return { hours, minutes, seconds }
  };
return { time: formatTime(time), addTime, progress, resetTime, initialTotalTime};
};
export default useTimer;
