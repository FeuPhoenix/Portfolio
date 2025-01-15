'use client'

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { WavyBackground } from "./GradBG";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-transparent justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className 
      )}
      style={{
        background: 'rgb(2, 0, 36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2, 0, 36, 0.9) 0%, rgba(59,59,68,0.9) 26%, rgba(122,122,139,0.9) 50%, rgba(255,255,255,0.9) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center h-full'}`}>
        <div className="w-full h-full absolute">
          { img && (
            <img 
            src={img} alt={img}
            className={cn(imgClassName, 'object-cover, object-center')}
             />)}

        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          { spareImg && (
            <img 
            src={spareImg} 
            alt={spareImg}
            className={'object-cover, object-center, w-full h-full'}
             />)}
        </div>
        {id === 6 && (
          <WavyBackground>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" /> 
              </WavyBackground>
        )}
        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10"> 
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
        </div>
      </div>
      {id === 2 && <GlobeDemo />}
      {id === 3 && (
        <div className="flex gap-2 lg:gap-5 w-fit absolute -top-5 lg:-top-2 right-2 lg:right-5">
          <div className="flex flex-col gap-3 lg:gap-5">
            {['React.js','Next.js','Typescript'].map((item) => (
              <span 
                key={item} 
                className="py-2 lg:py-3 px-3 lg:px-4 text-xs lg:text-sm opacity-80 rounded-lg text-center bg-[#10132E] text-white-200 hover:opacity-100 transition-opacity duration-200"
              >
                {item}
              </span>
            ))}
            <span className="py-5 lg:py-6 px-3 rounded-lg bg-[#10132E] opacity-30" />
          </div>
          <div className="flex flex-col gap-3 lg:gap-5">
            <span className="py-5 lg:py-6 px-3 rounded-lg bg-[#10132E] opacity-30" />
            {['Tailwind', 'Javascript', 'Git'].map((item) => (
              <span 
                key={item} 
                className="py-2 lg:py-3 px-3 lg:px-4 text-xs lg:text-sm opacity-80 rounded-lg text-center bg-[#10132E] text-white-200 hover:opacity-100 transition-opacity duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
      {id === 6 &&(
        <div className="mt-5 relative">
          <div className={`absolute -bottom-5 right-0`}
          >
            <Lottie options={{
              loop: copied,
              autoplay: copied,
              animationData,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              }
            }} /> 
          </div>
        </div>
      )}
    </div>
  );
};
