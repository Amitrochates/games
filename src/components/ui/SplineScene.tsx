"use client"
import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { SPEObject } from '@splinetool/react-spline';
import { gsap } from 'gsap';


export default function SplineScene() {
  const cubeRef = useRef<SPEObject | undefined>(undefined);

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
  }

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
    <Spline
      scene="https://prod.spline.design/hOtBGhDIcctzhmAc/scene.splinecode"
      className="relative h-[200px] w-[200px] md:h-[600px] items-center"
      onLoad={onLoad}
    />
    </div>
  
  );
}