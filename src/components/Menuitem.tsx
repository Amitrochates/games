"use client"
import { useState } from "react";
interface MenuItem {
  id: number;
  name: string;
  price: number;
}
interface MenuitemProps extends MenuItem {
    setMenuBill: React.Dispatch<React.SetStateAction<number>>;
    menuBill: number;
  }

export const Menuitem: React.FC<MenuitemProps> = ({ id, name, price, setMenuBill, menuBill }) => {    
    
const [counter, setCounter] = useState(0);
const handleIncrement = () => {
    setCounter(prevCounter => prevCounter + 1);
    setMenuBill(prevMenuBill => {
      const newMenuBill = prevMenuBill + price;
      
      return newMenuBill;
    });
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1);
      setMenuBill(prevMenuBill => {
        const newMenuBill = prevMenuBill - price;
        
        return newMenuBill;
      });
    }
  };


  
  return (
    <div>
     
          <li key={id} className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex justify-between">
                <div className="w-10">{name}</div>



                <div className="ml-2">
                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                        <button
                            type="button"
                            onClick={handleDecrement}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                            </svg>
                        </button>
                        <input
                            type="text"
                           
                            value={counter}
                            readOnly
                            className="h-5 w-5 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                            required
                        />
                        <button
                            type="button"
                            onClick={handleIncrement}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                            </svg>
                        </button>
                        </div>
                        
                    </div>
                </div>
            </div>
          </li>
        
    </div>
  );
};
