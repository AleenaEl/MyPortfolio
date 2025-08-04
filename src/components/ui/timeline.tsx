"use client";
import {
    useMotionValueEvent,
    useScroll,
    useTransform,
    motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";


interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    // Target the scrollable container instead of the timeline container
    const { scrollYProgress } = useScroll({
        container: containerRef, // Use container instead of target for scrollable divs
        offset: ["start start", "end end"], // Adjust offset for better animation
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <>
            <div className=" max-w-7xl mx-auto pb-3  px-4 md:px-8 lg:px-10">
                <h2 className="text-4xl md:text-4xl mb-4 text-white dark:text-white max-w-4xl font-extralight">
                    Journey & Growth
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm max-w-sm">
                    I&apos;ve spent years studying and working in tech and design. Here&apos;s a timeline of my education and career journey.
                </p>
            </div>
            <div
                className=" text-white dark:bg-neutral-950 font-sans md:px-10 max-h-[calc(100vh-4rem)] lg:max-h-[550px] overflow-y-auto scrollbar-hide"
                ref={containerRef}
            >
                {/* <div className="md:hidden max-w-7xl mx-auto pb-3  px-4 md:px-8 lg:px-10 bg-lime-500">
                    <h2 className="text-4xl md:text-4xl mb-4 text-black  max-w-4xl font-extralight">
                        Journey & Growth
                    </h2>
                    <p className="text-black  text-xs md:text-sm max-w-sm">
                        I&apos;ve spent years studying and working in tech and design. Here&apos;s a timeline of my education and career journey.
                    </p>
                </div> */}
                <div ref={ref} className="relative max-w-7xl mx-auto pb-20  h-full w-full ">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between pt-10 md:pt-40 md:gap-y-10 h-full  w-full"
                        >
                            <div className=" sticky flex flex-col md:flex-row  z-40 items-center lg:top-40 self-start ">
                                <div className="h-6 absolute  left-5 md:left-5 w-6 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                    <div className="h-2 w-2 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-1" />
                                </div>
                                <h3 className="hidden md:block text-lg md:pl-20 md:text-lg font-bold text-neutral-500 dark:text-neutral-500 ">
                                    {item.title}
                                </h3>
                            </div>

                            <div className=" pl-20 pr-4 md:pl-0 w-full md:w-[60%] ">
                                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                                    {item.title}
                                </h3>

                                {item.content}{" "}
                            </div>
                        </div>
                    ))}
                    <div
                        style={{
                            height: height + "px",
                        }}
                        className=" absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-800  to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                    >
                        <motion.div
                            style={{
                                height: heightTransform,
                                opacity: opacityTransform,
                            }}
                            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
