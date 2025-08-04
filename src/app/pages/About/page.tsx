"use client";

import { IconCloudDemo } from '@/components/iconCloud';
import React from 'react'
import { FC } from "react";
const About:FC=()=> {
  return (
      <div className='my-20'>
          <div className='text-white bg-[#1E1E1E]  px-5 md:px-0  md:ps-36 py-10 md:py-20 flex flex-col md:flex-row  gap-x-8 justify-around relative'>
              <div className='  absolute right-[86%] bottom-[43%]'>
                  <p className='text-[#4a4a4a2e] font-bold -rotate-90 inline-block w-max break-normal  text-6xl  '>
                      WHO AM I ?
                  </p>
              </div>
              <div className='flex flex-col gap-y-6'>
                  <p className='font-extralight text-5xl'>About me</p>
                  <div className='flex flex-row gap-x-3'>
                      <div className='w-2 md:h-36 bg-[#CFCFCF]'></div>
                      <p className='hidden md:block questrial-regular w-[650px] text-neutral-500 py-1 text-xs tracking-widest    leading-4'>I'm Aleena Eldhose, a React Frontend Developer passionate about transforming complex ideas into seamless, intuitive web experiences. With a strong foundation in the MERN stack and a knack for crafting scalable, high-performance solutions, I build visually stunning interfaces that are a joy to use. My expertise allows me to optimize data management and enable real-time features, consistently delivering innovative solutions that truly enhance user engagement. I thrive on building digital products that blend creativity with technical excellence. Let's create something exceptional together.</p>
                      <p className='block md:hidden questrial-regular w-[650px] text-neutral-500 py-1 text-xs tracking-widest    leading-4'>
                          I'm Aleena Eldhose, a React Frontend Developer transforming complex ideas into seamless, intuitive web experiences. With a strong MERN stack foundation, I craft scalable, high-performance solutions that are a joy to use, blending creativity with technical excellence. Let's create something exceptional.
                      </p>
                  </div>

              </div>
              <div className='mt-8 md:mt-0'>
                  <IconCloudDemo/>
               
              </div>
         </div>
    </div>
  )
}

export default About