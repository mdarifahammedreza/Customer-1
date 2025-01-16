
import { Outlet } from "react-router";
import Line from "../../Components/Line/Line";
import { HoverEffect } from "../../Components/ui/card-hover-effect";
import { useState } from "react";

const Organization_Development = () => {
 const [SideBar, IsSideBar] = useState(false);
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
export default Organization_Development; 

export const projects = [
  {
   mainPath:"Organization-Development",
    title: "Organizational Capacity Assessment (OCA)",
    description: "Assessing an organization's capacity to achieve its goals and manage its operations effectively.",
    Subpath: "Organizational-Capacity-Assessment-OCA"
  },
  {
   mainPath:"Organization-Development",
    title: "Change Management",
    description: "Guiding organizations through changes to ensure smooth transitions and effective implementation.",
    Subpath: "Change-Management"
  },
  {
   mainPath:"Organization-Development",
    title: "Organizational System & Policy Development",
    description: "Developing and optimizing organizational systems and policies to improve efficiency and governance.",
    Subpath: "Organizational-System-Policy-Development"
  },
  {
   mainPath:"Organization-Development",
    title: "Training and Facilitation",
    description: "Providing training and facilitation services to build capacity and skills within an organization.",
    Subpath: "Training-and-Facilitation"
  },
  {
   mainPath:"Organization-Development",
    title: "Project Cycle Management",
    description: "Managing the full life cycle of projects from initiation to completion to ensure successful outcomes.",
    Subpath: "Project-Cycle-Management"
  },
  {
   mainPath:"Organization-Development",
    title: "ICT/MIS Development",
    description: "Developing and implementing information and communication technology (ICT) systems and management information systems (MIS).",
    Subpath: "ICT-MIS-Development"
  }
];
