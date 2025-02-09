import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselComponent = () => {
  return (
    <div className="py-5">
        <div className="w-full flex flex-col items-center justify-center mb-5">
            <p className="text-5xl font-bold text-base_500">Practice Areas</p>
            <p className="text-sm font-semibold text-base_500 max-w-lg text-center mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nulla dolores vel iusto beatae tempora repellendus ea, velit possimus, ratione earum quam! Totam facilis reprehenderit unde, illum eaque cum neque.</p>
        </div>
      <div>
      <Carousel swipeable={true} draggable={true} responsive={responsive} infinite autoPlay>
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-gradient-to-b from-base_500 to-base_600 shadow-lg rounded-md overflow-hidden transform hover:scale-95 transition duration-300 border-2 border-base_600 mx-auto max-w-56 h-56">
      <img src={image} alt={title} className="object-cover w-full h-32" />
      <div className="p-2 border-t-2 border-base_600">
        <h1 className="text-lg font-medium text-white">{title}</h1>
        <p className="mt-1 text-xs text-gray-300">{description.slice(0, 100)}...</p>
      </div>
    </div>
  );
};

const cardData = [
  {
    title: "Criminal Law",
    description: "Criminal law is the body of law that relates to crime. It regulates social conduct...",
    image: "https://i.ibb.co/5MZPdhp/banner-1.jpg",
  },
  {
    title: "Family Law",
    description: "Family law is a legal practice area that focuses on issues involving family relationships...",
    image: "https://i.ibb.co/thDf1NW/banner-2.jpg",
  },
  {
    title: "Corporate Law",
    description: "Corporate law is the body of laws, rules, regulations, and practices that govern corporations...",
    image: "https://i.ibb.co/SyXjRsH/banner-3.jpg",
  },
  {
    title: "Business Law",
    description: "Business law includes laws governing contracts, sales, and commercial paper...",
    image: "https://i.ibb.co/SyXjRsH/banner-3.jpg",
  },
  {
    title: "Business Law",
    description: "Business law includes laws governing contracts, sales, and commercial paper...",
    image: "https://i.ibb.co/SyXjRsH/banner-3.jpg",
  },
  {
    title: "Business Law",
    description: "Business law includes laws governing contracts, sales, and commercial paper...",
    image: "https://i.ibb.co/SyXjRsH/banner-3.jpg",
  },
  {
    title: "Business Law",
    description: "Business law includes laws governing contracts, sales, and commercial paper...",
    image: "https://i.ibb.co/SyXjRsH/banner-3.jpg",
  },
  {
    title: "Business Law",
    description: "Business law includes laws governing contracts, sales, and commercial paper...",
    image: "https://i.ibb.co/SyXjRsH/banner-3.jpg",
  },
  {
    title: "Business Law",
    description: "Business law includes laws governing contracts, sales, and commercial paper...",
    image: "https://i.ibb.co/SyXjRsH/banner-3.jpg",
  },
  {
    title: "Business Law",
    description: "Business law includes laws governing contracts, sales, and commercial paper...",
    image: "https://i.ibb.co/SyXjRsH/banner-3.jpg",
  },
];
