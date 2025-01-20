"use client";
import { motion } from "framer-motion";

import { ImagesSlider } from "../ui/images-slider";


export function ImagesSliderDemo() {
  const images = [
    "https://i.ibb.co/5MZPdhp/banner-1.jpg",
     "https://i.ibb.co/thDf1NW/banner-2.jpg",
   "https://i.ibb.co/SyXjRsH/banner-3.jpg"
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images} overlay = {true}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p
          className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-white py-4"
        >
          Supporting Greater Performance
        </motion.p>
       
      </motion.div>
    </ImagesSlider>
  );
}
