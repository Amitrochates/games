import { useState, useEffect } from 'react';

const useTimer = (initialTime = 0) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
    setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
return () => clearInterval(interval);
  }, []);
  const addTime = (seconds:number) => {
  setTime(prevTime =>prevTime +seconds);
  }

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds /3600);
    const minutes = Math.floor((totalSeconds %3600) /60);
    const seconds = totalSeconds %60;
  return { hours, minutes, seconds };
  }

return { time: formatTime(time), addTime };
}

export default useTimer;
