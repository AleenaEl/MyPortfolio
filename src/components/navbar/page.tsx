"use client"

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
const navLinks = [
  { name: 'HOME', path: '#home' },
  { name: 'ABOUT', path: '#about' },
  { name: 'PROJECTS', path: '#projects' },
  { name: 'SKILLS', path: '#skills' },
  // { name: 'CONTACT', path: '#footer' },
];

const Page = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.hash || "#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        ...navLinks,
        { name: "CONTACT", path: "#footer" },
      ].map((link) => ({
        id: link.path.slice(1),
        element: document.getElementById(link.path.slice(1)),
      }));

      let currentSection = "#home";
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY + windowHeight;

      if (scrollPosition >= documentHeight - 50) {
        currentSection = "#footer";
      } else {
        for (const section of sections) {
          if (section.element) {
            const rect = section.element.getBoundingClientRect();
            if (rect.top <= windowHeight * 0.3 && rect.bottom >= 0) {
              currentSection = `#${section.id}`;
              break;
            }
          }
        }
      }
      setActiveLink(currentSection);
    };

    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#home");
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'backdrop-blur-[2px] bg-white/5 shadow-lg lg:px-10' : 'bg-transparent'
        }`}
    >
      <div className="h-20 w-full flex flex-row justify-between items-center pl-6">
        <a href="#home">
          <img src="/images/Aleena_.svg" alt="logo" className="h-[5rem] w-24" />
        </a>
        <div className="hidden lg:flex gap-x-10 items-center text-xs font-light">
          {navLinks.map((link) => (
            <div key={link.name} className="relative text-center w-16">
              <a
                href={link.path}
                className={`block relative cursor-pointer group ${activeLink === link.path ? "text-white font-semibold" : "text-white"
                  }`}
              >
                <span className="transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-0">
                  {link.name}
                </span>
                <span
                  className="absolute left-1/2 top-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:top-0 group-hover:translate-y-0 transition-all duration-1000 ease-in-out -translate-x-1/2"
                >
                  {link.name}
                </span>
                {activeLink === link.path && (
                  <span className="absolute left-1/2 -bottom-2 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2"></span>
                )}
              </a>
            </div>
          ))}
          <div className="relative">
            <a
              href="#footer"
              className={`h-10 px-12 flex items-center font-semibold  ${
                activeLink === "#footer" ? "text-white border border-[#CFCFCF]" : "bg-[#CFCFCF] text-black"
              }
                `}
            >
              <p>CONTACT

              {/* {activeLink === "#footer" && (
                <span className="absolute left-1/2 bottom-0 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2"></span>
              )} */}
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden w-full h-16 flex justify-between items-center px-6 py-4 absolute top-0 left-0 z-[100] bg-transparent">
        <div className="flex items-center"></div>
        <div className="flex gap-x-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none z-50"
          >
            <div className="space-y-2">
              <div
                className={`w-7 bg-neutral-600 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[11px] h-[1.6px]" : "h-[1.6px]"
                  }`}
              ></div>
              <div
                className={`min-h-[1.2px] max-h-[1.5px] w-7 bg-neutral-600 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "h-[2px]"
                  }`}
              ></div>
              <div
                className={`min-h-[1.2px] max-h-[1.5px] w-7 bg-neutral-600 transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2 h-[1.6px]" : "h-[1.6px]"
                  }`}
              ></div>
            </div>
          </button>
        </div>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed lg:hidden left-0 w-full bg-black text-white shadow-md transition-transform duration-500 ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full top-6"
          }`}
      >
        <div className="flex flex-col px-12 py-10 space-y-6">
          {navLinks.map((link, index) => (
            <div key={index} className="relative">
              <a
                href={link.path}
                className={`text-lg flex font-medium text-left transition-all ${activeLink === link.path ? "text-white" : "text-white"
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative">
                  {link.name}
                  {activeLink === link.path && (
                    <span className="absolute left-1/2 -bottom-2 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2"></span>
                  )}
                </span>
              </a>
            </div>
          ))}
          <div className="relative">
            <a
              href="#footer"
              className={`text-lg flex font-medium text-left transition-all ${activeLink === "#footer" ? "text-white" : "text-white"
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative">
                CONTACT
                {activeLink === "#footer" && (
                  <span className="absolute left-1/2 -bottom-2 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2"></span>
                )}
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Page;