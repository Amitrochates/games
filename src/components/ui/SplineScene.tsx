"use client"
import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { SPEObject } from '@splinetool/react-spline';
import { gsap } from 'gsap';
import { useState } from 'react';
import { Loader } from 'lucide-react';
import {motion} from 'framer-motion';
import SplineLoader from './loader';
export default function SplineScene() {
  const cubeRef = useRef<SPEObject | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  function onLoad(splineApp: any) {
    const obj = splineApp.findObjectByName('Controller');
    cubeRef.current = obj;
    if (cubeRef.current) {
      cubeRef.current.position.x = 0;
      cubeRef.current.position.y = 0;
      cubeRef.current.position.z = 10;
    }
    setTimeout(() => {
      rotateObj();
    }, 5000);
    setIsLoading(false);
    console.log('Spline scene loaded');
  }

  setTimeout(() => {setIsLoading(false)}, 5000)
  function rotateObj() {
    if (cubeRef.current) {
      // Animate rotation using GSAP
      gsap.to(cubeRef.current.rotation, {
        x: "+=120",
        y: "+=120", 
        z: "+=360",  
        duration: 360,
        ease: "none", 
        repeat: -1,   
        yoyo: false,  
      });
    }
  }

  function moveObj() {
    if (cubeRef.current) {
      cubeRef.current.position.x += 100;
    }
  }

  return (
    <div className='flex justify-center items-center w-full h-full py-36'>
     {isLoading ? (
        <div className="flex justify-center items-center w-1/2">
          <SplineLoader />
        </div>
      ) : (
        <Spline
          scene="https://prod.spline.design/hOtBGhDIcctzhmAc/scene.splinecode"
          className="relative h-[200px] w-[200px] md:h-[600px] items-center"
          onLoad={onLoad}
        />
      )}
     
    </div>
  
  );
}