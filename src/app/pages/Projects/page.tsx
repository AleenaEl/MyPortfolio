"use client";

import { Button } from '@/components/ui/button';
import React, { FC } from 'react'
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from '@/hooks/useOutsideClick';


// const demoProjects = [
//   {
//     title: "Project One",
//     description: "This is a brief description of project one.",
//     tech: "React, Next.js, Tailwind CSS",
//     image: "/images/Regs App 1.png",
//     link: "#"
//   },
//   {
//     title: "Project Two",
//     description: "This is a brief description of project two.",
//     tech: "React, Node.js, Express",
//     image: "/images/Regs App 1.png",
//     link: "#"
//   },
//   {
//     title: "Project Three",
//     description: "This is a brief description of project three.",
//     tech: "Vue.js, Vuetify",
//     image: "/images/Regs App 1.png",
//     link: "#"
//   },
// ]
const Projects: FC = () => {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));
  const handleCardClick = (card: (typeof cards)[number]) => {
    if (window.innerWidth >= 768) { // Tailwind's 'md' breakpoint is 768px
      setActive(card);
    }
  };
  return (
    <>
      <div className='text-white flex flex-col items-center w-full mb-36'>
        <div className='flex flex-row justify-center md:justify-between items-center mb-8 w-[70%] '>
          <p className=' text-5xl font-extralight'>Projects</p>
          <Button className='hidden md:flex h-10  px-10 text-black bg-[#CFCFCF]  items-center text-sm hover:bg-[#CFCFCF] '>
            View More
          </Button>
        </div>
        {/* <div className=' bg-red-500'> */}

        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="hidden md:block fixed inset-0 bg-black/20 h-full w-full z-10 "
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="hidden md:grid fixed inset-0   place-items-center z-[99] ">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="max-w-[90%] md:max-w-[500px]  md:h-fit md:max-h-[90%]  flex flex-col bg-black dark:bg-neutral-900  overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <img
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-full md:h-80  object-cover object-top"
                  />
                </motion.div>

                <div className='bg-black'>
                  <div className="flex justify-between items-start p-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="text-xl font-semibold"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 text-sm"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    {/* <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-8 py-2 text-sm   bg-green-500 text-white"
                    >
                      {active.ctaText}
                    </motion.a> */}
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className=" text-neutral-400 text-xs md:text-sm lg:text-sm font-light h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <ul className='flex flex-col gap-y-5 md:grid grid-cols-[490px,490px] md:justify-between md:gap-y-14 w-[85%] md:w-[70%] '>
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => handleCardClick(card)}
            >
              <div className="flex flex-col gap-y-5 ">

                <div className="py-10 px-4  flex flex-col  bg-[#1E1E1E]  cursor-pointer">
                  <motion.div layoutId={`image-${card.title}-${id}`}>
                    <img
                      width={100}
                      height={100}
                      src={card.src}
                      alt={card.title}
                      className="h-full w-full   object-cover object-top"
                    />
                  </motion.div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="text-xl font-semibold text-white "
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-white text-xs font-extralight"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </ul>
        {/* </div> */}

      </div>
    </>
  );
}

 const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
export default Projects

const cards = [
  {
    description: "HTML, CSS, and Bootstrap",
    title: "Facebook Clone",
    src: "/images/Fb-clone.png",
    ctaText: "Github",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Recreated the  interface of Facebook using HTML, CSS, and Bootstrap, focusing on responsive layout, modern styling, and design. This project helped me strengthen my front-end fundamentals and understand how complex UI platforms structure their design systems.
        </p>
      );
    },
  },
  {
    description: "HTML, CSS, and Bootstrap.",
    title: "Spotify",
    src: "/images/Sptify.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Developed a visually appealing music player interface modeled after Spotify using HTML, CSS, and Bootstrap. The project features a modern layout, interactive controls, and  design, helping me explore the structure of media-based user interfaces and sharpen my front-end development skills.
        </p>
      );
    },
  },

  {
    description: "React,Express.js,Nodejs and MongoDB",
    title: "Food Delivery",
    src: "/images/food.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Created a dynamic food ordering web application using the MERN stack, featuring secure user authentication, a responsive shopping cart, and an admin panel for order and product management. Integrated Stripe for seamless payment processing. This project demonstrates my end-to-end development skills, from building RESTful APIs to implementing secure transactions and managing stateful UI components.
        </p>
      );
    },
  },
  {
    description: "HTML, CSS, and JavaScript",
    title: "Budget Calculator",
    src: "/images/budget-calc (2).png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Developed a user-friendly web application for tracking budgets and expenses using HTML, CSS, and JavaScript. The app allows users to add, edit, and delete income and expenses in real-time, offering a clear view of their financial status. This project enhanced my DOM manipulation skills and understanding of basic data handling in the browser.
        </p>
      );
    },
  },
];