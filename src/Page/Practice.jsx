import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "../Components/ui/Card";
import { ImagesSlider } from "../Components/ui/images-slider";

const Practice = () => {
  const [loading, setLoading] = useState(true);
  const images = [
    "https://i.ibb.co/5MZPdhp/banner-1.jpg",
    "https://i.ibb.co/thDf1NW/banner-2.jpg",
    "https://i.ibb.co/SyXjRsH/banner-3.jpg",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const cardData = [
    {
      title: "Criminal Law",
      description:
        "Criminal law is the body of law that relates to crime. It regulates social conduct and prescribes whatever is threatening, harmful, or otherwise endangering to the property, health, safety, and moral welfare of people.",
      image: "https://i.ibb.co/5MZPdhp/banner-1.jpg",
    },
    {
      title: "Family Law",
      description:
        "Family law is a legal practice area that focuses on issues involving family relationships, such as adoption, divorce, and child custody, among others.",
      image: "https://i.ibb.co/thDf1NW/banner-2.jpg",
    },
    {
      title: "Corporate Law",
      description:
        "Corporate law is the body of laws, rules, regulations, and practices that govern the formation and operation of corporations.",
      image: "https://i.ibb.co/SyXjRsH/banner-3.jpg",
    },
    {
      title: "Corporate Law",
      description:
        "Corporate law is the body of laws, rules, regulations, and practices that govern the formation and operation of corporations.",
      image: "https://i.ibb.co/SyXjRsH/banner-3.jpg",
    },
    {
      title: "Corporate Law",
      description:
        "Corporate law is the body of laws, rules, regulations, and practices that govern the formation and operation of corporations.",
      image: "https://i.ibb.co/SyXjRsH/banner-3.jpg",
    },
    {
      title: "Corporate Law",
      description:
        "Corporate law is the body of laws, rules, regulations, and practices that govern the formation and operation of corporations.",
      image: "https://i.ibb.co/SyXjRsH/banner-3.jpg",
    },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <ImagesSlider className="h-[30rem]" images={images} overlay={true}>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-white py-4">
            Practice Area
          </motion.p>
        </motion.div>
      </ImagesSlider>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6  gap-6 mt-10 lg:px-16">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};



export default Practice;
