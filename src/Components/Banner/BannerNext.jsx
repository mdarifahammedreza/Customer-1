"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "../ui/images-slider";
import { useEffect, useState } from "react";

export function ImagesSliderComponent() {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    setImage({
      image: "https://i.ibb.co/5MZPdhp/banner-1.jpg",
      image1: "https://i.ibb.co/thDf1NW/banner-2.jpg",
      image2: "https://i.ibb.co/SyXjRsH/banner-3.jpg",
    });

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[40rem]">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <ImagesSlider className="h-[40rem]" images={Object.values(image)} overlay={true}>
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
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-white py-4">
          Supporting Greater Performance
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
