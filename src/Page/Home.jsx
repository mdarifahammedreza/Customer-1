import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router";
import { ImagesSliderComponent } from "../Components/Banner/BannerNext";
import AboutSection from "../Components/Home/AboutSection";
import CarouselComponent from "../Components/Home/CarouselComponent";
import Count from "../Components/Home/Count";
import TestimonialComponent from "../Components/Home/TestomonialComponent";
import { RecentProject } from "../Components/RecentProject/RecentProject";
import { BentoGrid } from "../Components/ui/bento-grid";
import Card from "../Components/ui/Card";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // once: true, // Only trigger the animation once when it enters the viewport
    });
  }, []);

  return (
    <div className="mt-5 mb-20">
      <ImagesSliderComponent />
      <div>
        <Count />
      </div>
      <AboutSection />
      <Line />
      <CarouselComponent />
      <RecentProject />
      <Line />
      <TestimonialComponent />
      <BentoGrid className="w-full  mt-16 px-10">
        {items.map((item, i) => (
          <Link key={i} to={`/blog/${item.title}`} >
          <Card
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 5 || i === 10 || i===15 ? "md:col-span-2" : ""}
          />
          </Link>
        ))}
      </BentoGrid>
    </div>
  );
};
export default Home;
const Line = () => {
  return (
    <div className="w-full h-3 grid grid-cols-3 bg-black mt-10">
      <div className="bg-base_500"></div>
      <div className="bg-yellow-500"></div>
      <div className="bg-violet-950"></div>
    </div>
  );
};

export const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <p className=" h-full w-full bg-slate-400 rounded-md ">hip</p>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <p className=" h-full w-full bg-slate-400 rounded-md">hi</p>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <p className=" h-full w-full bg-slate-400 rounded-md">hi</p>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    header: <p className=" h-full w-full bg-slate-400 rounded-md">hi</p>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <p className=" h-full w-full bg-slate-400 rounded-md">hi</p>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <p className=" h-full w-full bg-slate-400 rounded-md">hi</p>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <p className=" h-full w-full bg-slate-400 rounded-md">hi</p>,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
