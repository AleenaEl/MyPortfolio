"use client";
import { DockDemo } from "@/components/dockdemo/dockdemo";
import { Button } from "@/components/ui/button";
import { FC } from "react"
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";

const HeroSection: FC = () => {
    const words = [
        {
            text: "Front",
            className: "text-white font-extralight tracking-[0.2em] md:tracking-[0.3em]",
        },
        {
            text: " ",

        },
        {
            text: "End",
            className: "text-white font-extralight tracking-[0.2em] md:tracking-[0.3em]",
        },
        {
            text: " ",

        },
        {
            text: "Developer",
            className: "text-white font-extralight tracking-[0.2em] md:tracking-[0.3em]",
        },

        {
            text: ".",
            className: "text-white font-extralight",
        },

    ];
    return (
        <div className="flex flex-col items-center w-full h-full pt-32  ">
            <div className=" md:relative w-full flex flex-col h-full  items-center ">
                <Spotlight
                    className="-top-40 left-0 md:-top-20 md:left-[85rem] hidden lg:block"
                    fill="white"
                />
                <div className="text-white pt-6 pb-4 px-6 md:px-0 w-full md:w-[47rem] ">
                    <h1 className="text-base   md:text-xl questrial-regular ">Hello, Iam Aleena Eldhose </h1>
                    <TypewriterEffectSmooth words={words} />
                </div>
                <div className="md:hidden w-full flex flex-col items-end pe-6 md:ps-16 md:pe-10 pt-3 gap-3 ">
                    <div className="w-[75%]  h-0.5 bg-[#CFCFCF] "></div>
                    <div className="w-[75%]">
                        <p className=" text-xs   text-right font-thin text-neutral-100 leading-4 tracking-wider  "> I'm a Frontend Developer specializing in MERN, delivering scalable, high-performance web experiences that are a joy to use. Ready to build?.</p>
                    </div>
                </div>
                <div className="flex flex-col items-end text-white w-full">
                    <div className="w-[75%] hidden md:flex justify-between  ">

                        <div className="">
                            {/* <Button className='  h-10  px-10 text-black bg-[#CFCFCF] flex items-center text-sm hover:bg-[#CFCFCF] '>
                                Download CV
                            </Button> */}
                            <a
                                href="/files/ALEENA ELDHOSE_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-10 px-10 text-black bg-[#CFCFCF] flex items-center text-sm hover:bg-[#CFCFCF] rounded-md font-semibold"
                            >
                                {/* <Button > */}
                                    Download CV
                                {/* </Button> */}
                              
                            </a>
                        </div>
                        <div className="hidden md:flex  flex-col gap-3 ">
                            <div className="w-[510px] h-0.5 bg-[#CFCFCF] "></div>
                            <div className="w-[350px]">
                                <p className="text-[13px] font-thin text-neutral-100 leading-5 tracking-wider">I'm a Frontend Developer dedicated to transforming visions into dynamic, intuitive web interfaces. Specializing in the MERN stack, I craft scalable, high-performance solutions that aren't just visually stunning, but also a joy to use. Let's build something exceptional together.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden w-full  inline-block h-max pt-[2rem]  ">
                        <div className="md:hidden w-[32rem]   ">
                        <img src='/images/HeroSectionImg-2.png' alt='Aleena' className="object-cover    opacity-[0.18] grayscale" />
                    </div>
                    </div>

                    <div className="text-white  md:pt-64 w-[79%]  flex justify-between">
                        <div>
                            <p className="hidden md:block  text-xs md:text-sm">Based in Kochi,Kerala</p>
                        </div>
                        <div className="bg-[#1E1E1E] h-10  w-[510px] flex flex-row justify-center ">
                            <div className="flex flex-row   w-[60%] ">
                                <DockDemo />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden  md:block absolute -z-10 mt-[5.5rem]">

                    <img src='/images/HeroSectionImg-2.png' alt='Aleena' className=" md:h-[32rem]   opacity-[0.18] grayscale" />
                </div>

            </div>
        </div>

    )
}

export default HeroSection