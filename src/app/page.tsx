"use client";

import Navbar from "@/components/navbar/page";
import HeroSection from "@/app/pages/HeroSection/page";
import About from "@/app/pages/About/page";
import Projects from "./pages/Projects/page";
import Experience from "./pages/Experience/page";
import Footer from "@/components/footer/page";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
// import Project from "@/app/pages/Projects/page";
import { IoArrowUpSharp } from "react-icons/io5";
import { useEffect, useState } from "react";


export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className=" ">
      <SmoothCursor />
      <div
        className="fixed z-[99] bottom-5 right-5 p-[3px]  rounded-full cursor-pointer"
        onClick={scrollToTop}
      >
        <div className="p-[3px] bg-[#CFCFCF] rounded-full relative">
          <div
            className=" absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(#CFCFCF ${scrollProgress}%, #000000 ${scrollProgress}%)`
            }}
          />
          <div className="p-3 bg-black rounded-full relative">
            <IoArrowUpSharp  size={24} className="text-white" />
          </div>
        </div>
      </div>
      <div className="w-full h-full container mx-auto overflow-hidden">
        <Navbar />
        <div className="min-h-screen flex flex-col gap-y-6 w-full">
          <div className="w-full ">
            <div id="home">
              <HeroSection />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="skills">
              <Experience />
            </div>
            <div id="footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
