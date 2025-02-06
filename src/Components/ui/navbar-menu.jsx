"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { useRoutes } from "react-router";

// Transition configuration for animations
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

  
// MenuItem Component
export const MenuItem = ({ setActive, active, item, children }) => {

  const router=useRoutes

  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.8 }}
        className="cursor-pointer transition  mt-2 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-base_900 duration-300  text-base_600 font-semibold   hover:opacity-[0.9] "
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_.001rem)] left-1/2 transform -translate-x-1/2 pt-5">
              <motion.div
                transition={transition}
                layoutId="active"
                className=" backdrop-blur-2xl  bg-white rounded-sm overflow-hidden  border border-black/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

// Menu Component
export const Menu = ({ setActive, children }) => {
  return (
    <div className="flex justify-between items-end  ">
      <div className=" px-5 inline-flex ">
      <Link href="/">
  <img
    src="https://i.ibb.co.com/pf3YyhR/logo.png"
    alt="CBSG LOGO"
    className="px-1"
  />
</Link>
        <div className="flex flex-col items-center justify-between text-base_600 hover:text-base_900">
        <h1 className="font-semibold text-2xl">Capacity Building Service Group</h1>
        <Marquee gradient={true} gradientWidth={20} gradientColor={'#ffffff'}><p className="text-xs">Supporting Greater Performance</p></Marquee>
        </div>
      </div>
      <nav
      onMouseLeave={() => setActive(null)}
      className="relative  shadow-input flex justify-end space-x-5   pr-14"
    >
      
      {children}
    </nav>
    </div>
  );
};

// ProductItem Component
export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link href={href} className="flex space-x-2 ">
      <Image
        src={src}
        width={140} 
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl  font-bold mb-1 text-base_600">
          {title}
        </h4>
        <p className="text-sm max-w-[10rem] ">
          {description}
        </p>
      </div>
    </Link>
  );
};

// HoveredLink Component
export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-base_600 font-semibold  hover:border-t-2 border-base_600 mt-2 rounded-md px-1  transition ease-in-out delay-150 hover:translate-x-1 hover:scale-1110 hover:text-base_900 duration-300 "
    >
      {children}
    </Link>
  );
};
