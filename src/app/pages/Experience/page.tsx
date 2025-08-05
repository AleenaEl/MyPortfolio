"use client";
import React, { FC } from 'react'
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";
import { SiHostinger } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { Timeline } from "@/components/ui/timeline";


const Experience: FC = () => {
  return (
    <div className='flex  flex-col lg:flex-row justify-between w-full text-white h-full'>
      <div className='w-full lg:w-[45%] '>

        <Skills />
      </div>
      <div className='flex-1  mt-10 md:mt-0'>

        <ProfessionalExp />
      </div>
    </div>
  )
}

 const ProfessionalExp: FC = () => {
  const data = [
    {
      title: "2019",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm dark:text-neutral-200">
            B.Tech in Computer Science, Mar Baselios Institute of Technology and Science
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm dark:text-neutral-200">
            Studied under APJ Abdul Kalam Technological University, graduating with an SGPA of 7.9.
          </p>
          {/* <div className="grid grid-cols-2 gap-4">
            <img
              src="https://example.com/mbits-campus.jpg"
              alt="MBITS campus"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://example.com/btech-degree.jpg"
              alt="B.Tech degree"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div> */}
        </div>
      ),
    },
    {
      title: "Dec 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm dark:text-neutral-200">
            MERN Stack Course, Luminar Technolab
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm dark:text-neutral-200">
            Completed a 6-month intensive course in MERN Stack development, focusing on MongoDB, Express.js, React, and Node.js.
          </p>
          {/* <div className="grid grid-cols-2 gap-4">
            <img
              src="https://example.com/luminar-classroom.jpg"
              alt="Luminar Technolab classroom"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://example.com/mern-certificate.jpg"
              alt="MERN Stack certificate"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div> */}
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm dark:text-neutral-200">
            Frontend Developer at Teqbae Innovations and Solutions India Pvt Ltd, Kochi
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm dark:text-neutral-200">
            Working as a Frontend Developer, building responsive and user-friendly web applications using modern JavaScript frameworks.
          </p>
          {/* <div className="grid grid-cols-2 gap-4">
            <img
              src="https://example.com/teqbae-office.jpg"
              alt="Teqbae office"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://example.com/frontend-workspace.jpg"
              alt="Frontend workspace"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div> */}
        </div>
      ),
    },
  ];
  return (
    <div className='text-white w-full'>

      {/* <div className="relative w-full overflow-clip"> */}
      <Timeline data={data} />
      {/* </div> */}
    </div>
  )
}
 const Skills: FC = () => {
  const skills = [
    { icon: <FaReact />, label: "React" },
    { icon: <RiNextjsFill />, label: "Next.js" },
    { icon: <FaNode />, label: "Node.js" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <SiPostman />, label: "Postman" },
    { icon: <RiTailwindCssFill />, label: "Tailwind CSS" },
    { icon: <SiMui />, label: "Material-UI" },
    { icon: <FaBootstrap />, label: "Bootstrap" },
    { icon: <RiVercelLine />, label: "Vercel" },
    { icon: <SiHostinger />, label: "Hostinger" },
    { icon: <FaHtml5 />, label: "HTML5" },
    { icon: <IoLogoCss3 />, label: "CSS3" },
  ];
  return (
    <div className='text-white w-full bg-[#181818] p-6 flex flex-col  sticky top-0 h-full lg:h-[80%]'>
      <h2 className='hidden md:block text-4xl  font-extralight'>
        Tools & Skills
      </h2>
      <h2 className='block md:hidden text-4xl text-right pe-2  font-extralight'>
        Tools & Skills
      </h2>
      <p className="hidden md:block text-neutral-700 dark:text-neutral-300 text-xs md:text-sm  pt-4">
        Here's a showcase of the technologies and skills I've mastered to create dynamic and user-friendly web applications.
      </p>
      <p className=" block md:hidden text-right text-neutral-700 dark:text-neutral-300 text-xs  pe-2   pt-4">
        Here's a showcase of the technologies and skills I've mastered to create dynamic and user-friendly web applications.
      </p>
      <div className='w-8 h-44 bg-[#CFCFCF] absolute -right-2.5 z-10 -top-5'>

      </div>
      <div className='flex mt-10 mb-6 md:mb-0 md:mt-14 justify-center  w-full '>

        <div className='grid grid-cols-3 gap-x-8 gap-y-12 md:gap-x-10 md:gap-y-16  w-[80%]'>
          {skills.map((item, index) => (

            <div className=' flex items-center justify-start gap-x-2 md:gap-x-4 text-[#888888] hover:text-white cursor-pointer' key={index}>
              <p className="text-xl md:text-2xl ">{item.icon}</p>
              <p className="text-xs md:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Experience;