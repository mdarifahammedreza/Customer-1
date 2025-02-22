import { useEffect, useState } from "react";
import { ImagesSlider } from "../Components/ui/images-slider";
import { motion } from "framer-motion";

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

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-gradient-to-b from-80% from-base_500 to-base_600 shadow-md shadow-base_500 rounded-md overflow-hidden transition transform hover:scale-105 duration-300 hover:border-white hover:cursor-pointer max-w-56 h-56 border-2 border-base_600 mx-auto">
      <img src={image} alt={title} className="object-cover" />
      <div className="p-2 border-t-2 border-base_600">
        <h1 className="text-lg font-medium text-white ">{title}</h1>
        <p className="mt-1 text-xs text-gray-300 overflow-hidden">{description.split(" ").slice(0, 18).join(" ") + "..."}</p>
      </div>
    </div>
  );
};

export default Practice;
