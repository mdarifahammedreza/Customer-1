import { Outlet } from "react-router";
import { HoverEffect } from "../../Components/ui/card-hover-effect";
import { useState } from "react";
import { ImagesSlider } from "../../Components/ui/images-slider";
import { motion } from "framer-motion";

const Reacher_Evaluation = () => {
  const images = ["https://i.ibb.co/SyXjRsH/banner-3.jpg"];
  const [SideBar, IsSideBar] = useState(false);

  const renderImagesSlider = () => (
    <ImagesSlider className="h-[30rem]" images={images} overlay={true}>
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-white py-4">
          Research & Evaluation
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );

  const renderContent = () => (
    <div className="flex mt-10 items-center justify-center transition-all duration-1000 ease-in-out transform translate-x-5">
      <div className="mx-auto px-4">
        <HoverEffect items={projects} IsSideBar={IsSideBar} SideBar={SideBar} />
      </div>
      <div className="w-5 mx-1">
        {/* Color blocks */}
        <div className="bg-base_500 h-32 rounded-sm mb-5"></div>
        <div className="bg-yellow-500 h-32 rounded-sm mb-5"></div>
        <div className="bg-violet-950 h-32 rounded-sm"></div>
      </div>
      <div className="w-full h-96 mt-2">
        <Outlet />
      </div>
    </div>
  );

  const renderFallbackContent = () => (
    <div className="mx-auto px-4 mt-10">
      <HoverEffect items={projects} IsSideBar={IsSideBar} />
      <div className="w-full h-96 mt-2">
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

export default Reacher_Evaluation;



const projects = [
  {
    title: "Baseline & Endline surveys",
    description: "Conducting surveys to gather baseline and endline data for measuring project impacts and effectiveness.",
    mainPath:"Research&Evaluation",
    Subpath: "Baseline-Endline-surveys"
  },
  {
    title: "Project and Program Evaluation",
    description: "Evaluating the performance and impact of projects and programs to ensure their effectiveness and relevance.",
    mainPath:"Research&Evaluation",
    Subpath: "Project-and-Program-Evaluation"
  },
  {
    title: "Market Survey",
    description: "Conducting market surveys to gather data on market trends, customer behavior, and business opportunities.",
    mainPath:"Research&Evaluation",
    Subpath: "Market-Survey"
  },
  {
    title: "Thematic Research",
    description: "Research focusing on specific themes or topics relevant to organizational development and impact.",
    mainPath:"Research&Evaluation",
    Subpath: "Thematic-Research"
  },
  {
    title: "Impact Assessment",
    description: "Assessing the impact of programs and projects on target populations and outcomes.",
    mainPath:"Research&Evaluation",
    Subpath: "Impact-Assessment"
  },
  {
    title: "Performance Studies",
    description: "Studying the performance of organizations, systems, or projects to identify strengths and areas for improvement.",
    mainPath:"Research&Evaluation",
    Subpath: "Performance-Studies"
  },
  {
    title: "Perception Studies",
    description: "Research focusing on understanding public or stakeholder perceptions of an organization or its services.",
    mainPath:"Research&Evaluation",
    Subpath: "Perception-Studies"
  }
];
