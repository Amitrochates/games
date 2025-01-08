"use client"
import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { SPEObject } from '@splinetool/react-spline';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

export default function SplineScene() {
  const cubeRef = useRef<SPEObject | undefined>(undefined);

  function onLoad(splineApp: any) {
    const controller = splineApp.findObjectByName('Controller');

    if (controller) {
      controller.position.x = 0;
      controller.position.y = 0;
      controller.position.z = 10;
    
    setTimeout(() => {
      rotateObj(controller);
    }, 5000);
            // gsap
            //   .timeline ({
            //   scrollTrigger: {
            //   trigger: "#part1" ,
            //   start : "top center" ,
            //   end :"bottom bottom" ,
            //   scrub:true,
            //   }
            //   })
            //   .to(controller.position, {x: -500, y: -200}, 0)
            //   .to(controller.scale, {x: 3, y: 3, z:3}, 0)
            //   .to(controller.position, {x: -Math.PI /14 , z: Math.PI /16}, 0)
          
          }
    }

  function rotateObj(controller: any) {
    if (controller) {
      // Animate rotation using GSAP
      gsap.to(controller.rotation, {
        y: Math.PI*2,
        x: Math.PI*2,
        z: Math.PI*2,
        repeat:-1,
        duration: 5,
        ease: "none"
      });
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
