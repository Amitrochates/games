"use client";

import Link from "next/link";
import { motion } from "framer-motion";
// import IntegrationBox from "./ui/integrationBox";
import { ChevronRight as ChevronRightIcon } from "lucide-react";
// import { Button } from "./ui/button";
// import ExpandableCards from "./ui/expandable-cards";
import GridIllustration from "./grid-illustration";
import SplineScene from "./SplineScene";
import { AuroraBackground } from "./aurora-background";
import ResendBackground from "./ResendBackground";
import { HeroText } from "./HeroText";

export default function Hero() {
  const textVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <>
      <section className="relative">
        {/* Background Dots */}
        <div>
        <AuroraBackground>
          <div className="w-full">
          {/* <div className="absolute inset-0 mx-auto max-w-7xl bg-dot-dark-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-dot-dark-black lg:[mask-image:radial-gradient(ellipse_at_left,transparent_20%,black)]"></div> */}
            <div className="relative mx-auto max-w-6xl px-6 py-20">
                <div className="absolute inset-0 w-full">
                  <GridIllustration/>
                </div>
                <div className="flex justify-center items-center w-full h-screen">
                  <div className="w-1/2"><HeroText /> </div>
                  <div className="w-1/2 h-full"><SplineScene/></div>
                
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 w-full scale-y-[-1] transform">
                  <GridIllustration />
                </div>

                      {/* Hero Integrations */}
                      {/* <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                      >
                        {/* <IntegrationBox /> */}
                      {/* /* </motion.div> */}
                </div>
          </div>
        </AuroraBackground>
        </div>
      </section>
      

      {/* <ExpandableCards /> */}
    </>
  );
}


