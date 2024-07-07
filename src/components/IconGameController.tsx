"use client"

import { useEffect, useState } from "react";


interface ControllerProps {
 
  setControllerCount: React.Dispatch<React.SetStateAction<number>>;
  controllerCount: number;
}
export const IconGameController: React.FC<ControllerProps> = ({ controllerCount, setControllerCount}) => {
    
  
  const [controllerStates, setControllerStates] = useState(false);
  useEffect(() => {
    if(controllerCount == 0)
      setControllerStates(false);
  }, [controllerCount]);

  const handleActivate = () => {
    setControllerStates(true);
    setControllerCount(prevCount => {
      const newCount = prevCount + 1;
      console.log(newCount)
      return newCount;
    })
  }
  const handleDeActivate = () => {
    setControllerStates(false);
    setControllerCount(prevCount => {
      const newCount = prevCount - 1;
      console.log(newCount)
      return newCount;
    })
  }
  

 
  if(controllerStates){
    return (
      <div onClick={handleDeActivate} className={"text-red-600  hover:text-red-200 mx-2 "}> 
        <svg
          viewBox="0 0 512 512"
          fill="currentColor"
          
         className="h-8 w-8 lg:h-12 lg:w-12 "
        >
          <path d="M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.13 107.13 0 00352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.74 115.74 0 00-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.62 56.62 0 0018.64 3.22c29.93 0 53.93-24.93 70.33-45.34 18.53-23.1 40.22-34.82 107.34-34.82 59.95 0 84.76 8.13 106.19 34.82 13.47 16.78 26.2 28.52 38.9 35.91 16.89 9.82 33.77 12 50.16 6.37 25.82-8.81 40.62-32.1 44-69.24 2.57-28.48-1.39-65.89-12.12-114.37zM208 240h-32v32a16 16 0 01-32 0v-32h-32a16 16 0 010-32h32v-32a16 16 0 0132 0v32h32a16 16 0 010 32zm84 4a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-19.95A20 20 0 01336 288zm0-88a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-20 20 20 0 01-20 20z" />
        </svg>
      </div>
    
    );}
    else{
    return (
      <div onClick={handleActivate} className={" text-slate-300 hover:text-red-200 mx-2 "}> 
        <svg
          viewBox="0 0 512 512"
          fill="currentColor"
          
          className="h-8 w-8 lg:h-12 lg:w-12  "

        >
          <path d="M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.13 107.13 0 00352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.74 115.74 0 00-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.62 56.62 0 0018.64 3.22c29.93 0 53.93-24.93 70.33-45.34 18.53-23.1 40.22-34.82 107.34-34.82 59.95 0 84.76 8.13 106.19 34.82 13.47 16.78 26.2 28.52 38.9 35.91 16.89 9.82 33.77 12 50.16 6.37 25.82-8.81 40.62-32.1 44-69.24 2.57-28.48-1.39-65.89-12.12-114.37zM208 240h-32v32a16 16 0 01-32 0v-32h-32a16 16 0 010-32h32v-32a16 16 0 0132 0v32h32a16 16 0 010 32zm84 4a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-19.95A20 20 0 01336 288zm0-88a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-20 20 20 0 01-20 20z" />
        </svg>
      </div>
    
    );
  }
      
 }
  export default IconGameController;