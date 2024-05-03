
import React from "react";
import Vortex from "./Vortex";

export function HeroSection() { 
  return (
    <div className="w-[100%] mx-auto  h-[90vh] overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center gap-10 flex-row justify-between px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="flex items-center  gap-5 justify-center lg:items-start lg:justify-start flex-col w-[100%] lg:w-1/2">
        <div className="text-white text-center lg:text-start black text-[30px] md:text-[40px] lg:text-[40px] xl:text-[50px]">Your vision, our expertise. Together, we build brilliance. </div>
        <div className="text-white text-center lg:text-start semi-bold text-[20px] md:text-[20px] lg:text-[25px] xl:text-[28px]">We believe in close collaboration. Share your vision and we'll use our expertise to craft a website that exceeds your expectations.</div>
        </div>
        <div className="w-[100%] lg:w-1/2 hidden lg:flex">
          <div>
            <img src="/assets/heroimage1.webp" alt="" />
          </div>
        </div>
      </Vortex>
    </div>
  );
}
