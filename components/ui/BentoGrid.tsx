"use client";

/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";

import GridGlobe from "./GridGlobe";

import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 grid-row-7 gap-4 lg:gap-8 mx-auto",
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
  titleClassName,
  imgClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  titleClassName?: string;
  imgClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [key, setKey] = useState(0);

  const handleCopy = () => {
    navigator.clipboard.writeText("striverzarc@gmail.com");
    setCopied(true);
    setKey((prevKey) => prevKey + 1);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(0,0,0)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,5,19,1) 0%, rgba(4,10,37,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation></BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#C1C2D3] text-sm md:text-xs lg:text-base z-10 dark:text-neutral-300">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3">
                {["JavaScript", "React.js", "Node.js"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-black-200 border border-solid border-white-100"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-black-200" />
              </div>

              <div className="flex flex-col gap-3">
                <span className="py-4 px-3 rounded-lg text-center bg-black-200" />
                {["C++/Java", "Express.js", "MongoDB"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-black-200 border border-solid border-white-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="relative mt-5">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  key={key}
                  options={defaultOptions}
                  eventListeners={[
                    {
                      eventName: "complete",
                      callback: () => {
                        setCopied(false);
                      },
                    },
                  ]}
                />
              </div>

              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="bg-[#161A31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
