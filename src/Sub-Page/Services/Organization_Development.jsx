import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { AppContext } from "../../AppProvider";
import { HoverEffect } from "../../Components/ui/card-hover-effect";
import { ImagesSlider } from "../../Components/ui/images-slider";

const Organization_Development = () => {
  const [SideBar, IsSideBar] = useState(false);
  const {images,uri} = useContext(AppContext);

  useEffect(() => {
    axios.get(`${uri}sub-service-areas/`)


    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  const renderImagesSlider = () => (
    <ImagesSlider className="h-[30rem]" images={images} overlay={true}>
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
          Organization Development
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );

  const renderContent = () => (
    <div
      className="flex items-center justify-center transition-all duration-1000 ease-in-out transform translate-x-5 mt-10"
      data-aos="fade-right"
    >
      <div className="mx-auto px-4">
        <HoverEffect items={projects} IsSideBar={IsSideBar} SideBar={SideBar} />
      </div>
      <div className="w-5 mx-1">
        {/* Color blocks */}
        {["base_500", "yellow-500", "violet-950"].map((color, index) => (
          <div
            key={index}
            className={`bg-${color} h-32 rounded-sm mb-5`}
            data-aos="zoom-in"
          ></div>
        ))}
      </div>
      <div className="w-full h-96 mt-2" data-aos="fade-up">
        <Outlet />
      </div>
    </div>
  );

  const renderFallbackContent = () => (
    <div className="mx-auto px-4 mt-10" data-aos="fade-left">
      <HoverEffect items={projects} IsSideBar={IsSideBar} />
      <div className="w-full h-96 mt-2" data-aos="fade-up">
        <Outlet />
      </div>
    </div>
  );

  return (
    <div>
      {renderImagesSlider()}
      {SideBar ? renderContent() : renderFallbackContent()}
    </div>
  );
};

export default Organization_Development;


export const projects = [
  {
    mainPath: "Organization-Development",
    title: "Organizational Capacity Assessment (OCA)",
    description: "Assessing an organization's capacity to achieve its goals and manage its operations effectively.",
    Subpath: "Organizational-Capacity-Assessment-OCA",
  },
  {
    mainPath: "Organization-Development",
    title: "Change Management",
    description: "Guiding organizations through changes to ensure smooth transitions and effective implementation.",
    Subpath: "Change-Management",
  },
  {
    mainPath: "Organization-Development",
    title: "Organizational System & Policy Development",
    description: "Developing and optimizing organizational systems and policies to improve efficiency and governance.",
    Subpath: "Organizational-System-Policy-Development",
  },
  {
    mainPath: "Organization-Development",
    title: "Training and Facilitation",
    description: "Providing training and facilitation services to build capacity and skills within an organization.",
    Subpath: "Training-and-Facilitation",
  },
  {
    mainPath: "Organization-Development",
    title: "Project Cycle Management",
    description: "Managing the full life cycle of projects from initiation to completion to ensure successful outcomes.",
    Subpath: "Project-Cycle-Management",
  },
  {
    mainPath: "Organization-Development",
    title: "ICT/MIS Development",
    description: "Developing and implementing information and communication technology (ICT) systems and management information systems (MIS).",
    Subpath: "ICT-MIS-Development",
  },
];
