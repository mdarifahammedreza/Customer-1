import { Outlet } from "react-router";
import { HoverEffect } from "../../Components/ui/card-hover-effect";
import { useState } from "react";
import Line from "../../Components/Line/Line";


const Reacher_Evaluation = () => {
  const [SideBar, IsSideBar] = useState(false);
  console.log(SideBar);
  return (
    SideBar ? (<div className="flex items-center justify-center transition-all duration-1000 ease-in-out transform  translate-x-5">
      <div className="mx-auto px-4 ">
      <HoverEffect items={projects} IsSideBar={IsSideBar} SideBar={SideBar}/>
    </div>
    {/* click content. */}
    <div className="w-5   mx-1">
        {/* Color blocks */}
        <div className="bg-base_500 h-32 rounded-sm mb-5"></div>
        <div className="bg-yellow-500 h-32  rounded-sm mb-5"></div>
        <div className="bg-violet-950 h-32  rounded-sm"></div>
      </div>
    <div className=" w-full h-96 mt-2  ">
      <Outlet />
    </div>
    </div>):<div className="">
     <div className="mx-auto px-4 ">
      <HoverEffect items={projects} IsSideBar={IsSideBar}/>
    </div>
    {/* click content. */}
    <div className=" w-full h-96 mt-2  ">
      {/* <Line type={'V'}/> */}
      <Outlet />
    </div>
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
